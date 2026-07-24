// Static mirror of a Webflow site → deployable static files.
// Dependency-free (Node >=18 global fetch). Crawls same-origin pages via internal
// links, localizes Webflow-served assets, leaves third-party services remote.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const START = process.argv[2] || 'https://anywhere.gt.school/';
const OUT = process.argv[3] || './out';
const ORIGIN = new URL(START).origin;
const MAX_PAGES = 80;
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0 Safari/537.36';

// Hosts whose assets we pull local (Webflow-owned / the provider we're leaving).
const LOCALIZE = new Set([
  'anywhere.gt.school',
  'cdn.prod.website-files.com',
  'assets.website-files.com',
  'assets-global.website-files.com',
  'd3e54v103j8qbb.cloudfront.net', // Webflow-hosted jQuery
]);

const ASSET_RE = /\.(css|js|mjs|png|jpe?g|gif|svg|webp|avif|woff2?|ttf|eot|otf|ico|mp4|webm|json|xml|txt|pdf)(\?|#|$)/i;

const pageQueue = [];
const pagesSeen = new Set();
const assets = new Map(); // absUrl -> localRelPath
const log = { pages: [], assetCount: 0, skippedThirdParty: new Set(), errors: [] };

function enqueuePage(abs) {
  const u = new URL(abs);
  u.hash = '';
  const key = u.origin + u.pathname;
  if (u.origin !== ORIGIN) return;
  if (ASSET_RE.test(u.pathname)) return;
  if (pagesSeen.has(key)) return;
  if (pagesSeen.size + pageQueue.length >= MAX_PAGES) return;
  pageQueue.push(u.href);
}

// On-disk path: decoded (real filename, e.g. "menu icon.json").
function assetDisk(u) {
  return `assets/${u.hostname}${decodeURIComponent(u.pathname)}`.replace(/\/+$/, '');
}
// In-markup reference: keep percent-encoding (e.g. %20) so srcset/url() parse
// correctly. The static host decodes the request back to the on-disk filename.
function assetRef(u) {
  return `assets/${u.hostname}${u.pathname}`.replace(/\/+$/, '');
}

// Catch-all: localize any absolute Webflow-host asset URL anywhere in the text
// (og:image content=, Lottie data-* JSON, inline scripts) that the attribute
// passes missed.
const HOST_ALT = [...LOCALIZE].map(h => h.replace(/\./g, '\\.')).join('|');
const ABS_ASSET_RE = new RegExp(`https?://(?:${HOST_ALT})/[^"'()\\s<>\\\\]+`, 'g');
function catchAllAssets(str) {
  return str.replace(ABS_ASSET_RE, (m) => {
    const clean = m.replace(/[.,;:]+$/, '');
    try {
      const u = new URL(clean);
      if (ASSET_RE.test(u.pathname)) return enqueueAsset(clean.split('#')[0]);
    } catch { /* ignore */ }
    return m;
  });
}
function enqueueAsset(abs) {
  const u = new URL(abs);
  if (!assets.has(abs)) assets.set(abs, assetDisk(u));
  return '/' + assetRef(u);
}

function pagePath(u) {
  let p = u.pathname;
  if (p.endsWith('/')) p += 'index.html';
  else if (!/\.[a-z0-9]+$/i.test(p)) p += '/index.html';
  return p.replace(/^\/+/, '');
}

function repl(url, base, isCss) {
  if (!url) return null;
  const t = url.trim();
  if (/^(data:|#|mailto:|tel:|javascript:|blob:)/i.test(t)) return null;
  let abs;
  try { abs = new URL(t, base).href; } catch { return null; }
  const u = new URL(abs);
  if (LOCALIZE.has(u.hostname) && ASSET_RE.test(u.pathname)) return enqueueAsset(abs);
  if (!isCss && u.origin === ORIGIN && !ASSET_RE.test(u.pathname)) {
    enqueuePage(abs);
    return u.pathname || '/';
  }
  if (u.hostname !== new URL(base).hostname) log.skippedThirdParty.add(u.hostname);
  return null; // leave remote
}

function rewriteCss(css, base) {
  const out = css
    .replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (m, q, url) => { const r = repl(url, base, true); return r ? `url(${q}${r}${q})` : m; })
    .replace(/@import\s+(['"])([^'"]+)\1/g, (m, q, url) => { const r = repl(url, base, true); return r ? `@import ${q}${r}${q}` : m; });
  return catchAllAssets(out);
}

function rewriteHtml(html, base) {
  const out = html
    // Strip Subresource Integrity: hashes were computed for Webflow's original
    // files; self-hosting rewritten/relocated copies would be SRI-blocked.
    .replace(/\s+integrity=(["'])[^"']*\1/gi, '')
    .replace(/\ssrcset\s*=\s*(["'])([^"']*)\1/gi, (m, q, val) => {
      const nv = val.split(',').map(part => {
        const seg = part.trim(); if (!seg) return seg;
        const sp = seg.split(/\s+/); const r = repl(sp[0], base, false); if (r) sp[0] = r; return sp.join(' ');
      }).join(', ');
      return ` srcset=${q}${nv}${q}`;
    })
    .replace(/\s(href|src|poster)\s*=\s*(["'])([^"']*)\2/gi, (m, attr, q, url) => { const r = repl(url, base, false); return r ? ` ${attr}=${q}${r}${q}` : m; })
    .replace(/\sstyle\s*=\s*(["'])([^"']*)\1/gi, (m, q, css) => ` style=${q}${rewriteCss(css, base)}${q}`);
  return catchAllAssets(out);
}

async function fetchBuf(url) {
  const res = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'follow' });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const ct = res.headers.get('content-type') || '';
  const buf = Buffer.from(await res.arrayBuffer());
  return { buf, ct };
}

async function save(rel, data) {
  const full = join(OUT, rel);
  await mkdir(dirname(full), { recursive: true });
  await writeFile(full, data);
}

async function crawl() {
  enqueuePage(START);
  while (pageQueue.length) {
    const url = pageQueue.shift();
    const u = new URL(url);
    const key = u.origin + u.pathname;
    if (pagesSeen.has(key)) continue;
    pagesSeen.add(key);
    try {
      const { buf, ct } = await fetchBuf(url);
      if (!/text\/html/i.test(ct)) continue;
      const html = rewriteHtml(buf.toString('utf8'), url);
      const rel = pagePath(u);
      await save(rel, html);
      log.pages.push(rel);
      process.stdout.write(`page  ${rel}\n`);
    } catch (e) { log.errors.push(String(e)); process.stdout.write(`ERR   ${e}\n`); }
  }
}

async function downloadAssets() {
  // iterate until no new assets appear (CSS may reveal fonts/images)
  const done = new Set();
  let pending = [...assets.keys()];
  while (pending.length) {
    const batch = pending.filter(a => !done.has(a));
    pending = [];
    for (let i = 0; i < batch.length; i += 8) {
      const slice = batch.slice(i, i + 8);
      await Promise.all(slice.map(async (abs) => {
        done.add(abs);
        const rel = assets.get(abs);
        try {
          const { buf } = await fetchBuf(abs);
          if (/\.css(\?|#|$)/i.test(new URL(abs).pathname)) {
            const before = assets.size;
            const css = rewriteCss(buf.toString('utf8'), abs);
            await save(rel, css);
            if (assets.size > before) pending.push(...[...assets.keys()].filter(a => !done.has(a)));
          } else {
            await save(rel, buf);
          }
          log.assetCount++;
        } catch (e) { log.errors.push(String(e)); }
      }));
    }
  }
}

await crawl();
await downloadAssets();
await save('MIRROR-LOG.json', JSON.stringify({
  start: START, pages: log.pages.length, assets: log.assetCount,
  pageList: log.pages, leftRemote: [...log.skippedThirdParty].sort(), errors: log.errors,
}, null, 2));
console.log(`\nDONE  pages=${log.pages.length}  assets=${log.assetCount}  errors=${log.errors.length}`);
console.log(`third-party left remote: ${[...log.skippedThirdParty].sort().join(', ')}`);
