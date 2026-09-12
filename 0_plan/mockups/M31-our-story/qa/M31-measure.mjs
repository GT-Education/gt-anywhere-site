#!/usr/bin/env node
// M31 scratch probe. Measures the h1 (line count, size, box) and the first screen's seam
// elements at the matrix rows, for BOTH headline variants: variant A (shipped) and variant B
// (copy.md's fixed umbrella sentence), where B is produced by injecting exactly the CSS that
// the commented-out "Headline variant B" line in styles.css contains.
// Usage: node 0_plan/mockups/M31-our-story/qa/M31-measure.mjs [rows...]
import { createRequire } from 'node:module';
import { readdirSync, existsSync, readFileSync, statSync } from 'node:fs';
import { join, resolve, extname } from 'node:path';
import http from 'node:http';
import os from 'node:os';

const REPO = resolve(new URL('../../../..', import.meta.url).pathname);
const REL = '/0_plan/mockups/M31-our-story/index.html';
// exactly the commented-out "Headline variant B" line in styles.css
const VH = 'position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap;';
const VARIANT_B_CSS =
  '.h1-b { position: static; width: auto; height: auto; margin: 0; overflow: visible; clip: auto; clip-path: none; white-space: normal; }'
  + '.h1-a { ' + VH + ' }'
  + '.story-open { display: block; }';
// The compensation CONTRACT.md allows a first screen composed FOR the fixed sentence, and no more:
// section 2's phone-landscape recipe permits the h1 one token down at V10, and section 2's own
// compact door block is label 16 + 8 + name + 12 + CTA 44 = 110px, tighter than this page's, which
// spends a 16px flex gap between every item because its own h1 leaves room for it.
const COMPENSATION_CSS = `
@media (max-width: 767px) and (max-height: 767px) and (min-height: 401px) {
  .first-body .doors { gap: 0; }
  .first-body .door-name { margin-block-start: 8px; }
  .first-body .door-cta { margin-block-start: 12px; }
  .first-body .door:nth-child(1) .door-cta { margin-block-end: 24px; }
  .first-body .door-line { margin-block-start: 12px; }
}
@media (max-height: 400px) and (min-width: 600px) {
  h1 { font-size: var(--text-xl); }
  .first-body .doors { row-gap: 0; }
  .first-body .door-name { margin-block-start: 8px; }
  .first-body .door-cta { margin-block-start: 12px; }
}`;

const ALL_ROWS = {
  V1: [360, 740], V2: [375, 629], V3: [390, 664], V4: [393, 659], V5: [414, 715],
  V6: [412, 839], V7: [402, 681], V8: [430, 739], V9: [390, 844], V10: [750, 342],
  V11: [768, 1024], V12: [834, 1194], V13: [1024, 768], V14: [1280, 720], V15: [1366, 648],
  V16: [1440, 900], V17: [1920, 960], V18: [320, 256], V19: [1024, 576],
};
const wanted = process.argv.slice(2).filter((a) => ALL_ROWS[a]);
const rows = (wanted.length ? wanted : Object.keys(ALL_ROWS)).map((k) => [k, ...ALL_ROWS[k]]);

const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.ttf': 'font/ttf', '.js': 'text/javascript', '.json': 'application/json' };
function serve() {
  return new Promise((ok) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
      const f = join(REPO, p);
      if (!f.startsWith(REPO) || !existsSync(f) || statSync(f).isDirectory()) { res.writeHead(404); res.end('nf'); return; }
      res.writeHead(200, { 'content-type': MIME[extname(f)] || 'application/octet-stream' }); res.end(readFileSync(f));
    });
    srv.listen(0, '127.0.0.1', () => ok(srv));
  });
}
function findPlaywright() {
  const base = join(os.homedir(), '.npm', '_npx'); const hits = [];
  for (const d of (existsSync(base) ? readdirSync(base) : [])) {
    const p = join(base, d, 'node_modules', 'playwright');
    if (existsSync(join(p, 'package.json'))) hits.push(p);
  }
  hits.sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
  return hits;
}

const PROBE = `(() => {
  const box = (sel) => { const el = document.querySelector(sel); if (!el) return null; const r = el.getBoundingClientRect(); return { t: Math.round(r.top + scrollY), b: Math.round(r.bottom + scrollY), w: Math.round(r.width) }; };
  // the span on show is the one that is not visually suppressed: both suppression mechanisms in
  // this page (display:none for the duplicate, the clipped 1px box for the variant) collapse the
  // box to nothing, so width is the test that works for either
  const h1span = [...document.querySelectorAll('.h1-a, .h1-b')]
    .find(el => el.getBoundingClientRect().width > 2) || document.querySelector('.h1-a');
  const rg = document.createRange(); rg.selectNodeContents(h1span);
  const rects = [...rg.getClientRects()].filter(r => r.height > 1);
  const h1 = document.querySelector('h1'); const cs = getComputedStyle(h1);
  const lines = [];
  { // group text rects into lines by rounded top
    const seen = new Map();
    for (const r of rects) { const k = Math.round(r.top); if (!seen.has(k)) seen.set(k, { top: r.top, left: r.left, right: r.right }); else { const o = seen.get(k); o.left = Math.min(o.left, r.left); o.right = Math.max(o.right, r.right); } }
    for (const v of [...seen.values()].sort((a, b) => a.top - b.top)) lines.push(Math.round(v.right - v.left));
  }
  const ink = (sel) => { const el = document.querySelector(sel); if (!el) return null; const rr = el.getBoundingClientRect(); return Math.round(rr.bottom + scrollY); };
  return {
    h1Size: Math.round(parseFloat(cs.fontSize) * 100) / 100,
    h1Lines: lines.length, lineWidths: lines,
    h1Width: Math.round(h1.getBoundingClientRect().width),
    header: box('[data-fold="header"]'), h1Box: box('h1'), prov: box('[data-fold="provenance"]'),
    ctaG: box('[data-fold="cta-georgetown"]'), ctaA: box('[data-fold="cta-anywhere"]'),
    compare: box('.compare-lead'), accent: box('.accent-rule'),
    mvNum: box('.mv:first-of-type .mv-num'), mvHead: box('.mv:first-of-type .mv-head'),
    mvP: box('.mv:first-of-type .mv-head + p'),
    firstSec: box('.first'), firstBody: box('.first-body'), story: box('.story'),
    scrollW: document.documentElement.scrollWidth, docH: document.documentElement.scrollHeight,
  };
})()`;

// finds anything whose right edge passes the viewport width (used for the doubled-root check)
const OVERFLOW = `(() => {
  const out = [];
  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect();
    if (r.width < 1) continue;
    if (r.right > document.documentElement.clientWidth + 0.5) {
      out.push((el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).join('.') : '')).slice(0, 60) + ' right=' + Math.round(r.right) + ' w=' + Math.round(r.width));
      if (out.length > 14) break;
    }
  }
  return out;
})()`;

(async () => {
  let chromium;
  for (const p of findPlaywright()) { try { ({ chromium } = createRequire(join(p, 'package.json'))(p)); break; } catch (e) { /* next */ } }
  if (!chromium) throw new Error('no playwright in the npx cache');
  let browser;
  try { browser = await chromium.launch(); } catch (e) {
    const root = join(os.homedir(), 'Library/Caches/ms-playwright');
    const builds = readdirSync(root).filter(d => /^chromium-\d+$/.test(d)).sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]))
      .map(d => join(root, d, 'chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing')).filter(existsSync);
    for (const exe of builds) { try { browser = await chromium.launch({ executablePath: exe }); break; } catch (e2) { /* next */ } }
  }
  const srv = await serve(); const url = `http://127.0.0.1:${srv.address().port}${REL}`;
  const ctx = await browser.newContext({ deviceScaleFactor: 1 });
  const page = await ctx.newPage();

  const LABEL = {
    A: "A (the story's first sentence, shipped)",
    B: "B (copy.md's fixed umbrella sentence, in the layout composed for A)",
    'B+': "B with the compensation CONTRACT.md allows: its own compact door block, and the h1 one token down at the landscape row",
  };
  for (const variant of ['A', 'B', 'B+']) {
    console.log(`\n### Headline variant ${LABEL[variant]}`);
    console.log('| Row | h1 px | h1 lines | h1 box w | header | h1 bottom | provenance | CTA G | CTA A | compare | accent | first sec | story top | mv I num | mv I first line |');
    console.log('|---|---|---|---|---|---|---|---|---|---|---|---|---|---|');
    for (const [row, w, h] of rows) {
      await page.setViewportSize({ width: w, height: h });
      await page.goto(url, { waitUntil: 'load' });
      if (variant !== 'A') await page.addStyleTag({ content: VARIANT_B_CSS });
      if (variant === 'B+') await page.addStyleTag({ content: COMPENSATION_CSS });
      await page.evaluate(() => document.fonts ? document.fonts.ready : null);
      await page.waitForTimeout(120);
      const m = await page.evaluate(PROBE);
      const c = (x) => (x ? x.b : '');
      console.log(`| ${row} ${w}x${h} (limit ${h - 24}) | ${m.h1Size} | ${m.h1Lines} | ${m.h1Width} | ${c(m.header)} | ${c(m.h1Box)} | ${c(m.prov)} | ${c(m.ctaG)} | ${c(m.ctaA)} | ${c(m.compare)} | ${c(m.accent)} | ${c(m.firstSec)} | ${m.story ? m.story.t : ''} | ${c(m.mvNum)} | ${c(m.mvP)} |`);
    }
  }

  // doubled root font at V2: what still overflows
  await page.setViewportSize({ width: 375, height: 629 });
  await page.goto(url, { waitUntil: 'load' });
  await page.evaluate(() => { document.documentElement.style.fontSize = '32px'; });
  await page.waitForTimeout(150);
  const ov = await page.evaluate(OVERFLOW);
  const sw = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log(`\n### Doubled root font at 375: scrollWidth ${sw}\n` + (ov.length ? ov.map(x => '- ' + x).join('\n') : '- nothing overflows'));

  await browser.close(); srv.close();
})();
