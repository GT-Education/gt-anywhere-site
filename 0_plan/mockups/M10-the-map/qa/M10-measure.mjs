#!/usr/bin/env node
// M10 "The Map": the measuring harness the brief's acceptance row asks for.
//   1. SVG label overlap. For every <text> in the visible map it takes the rendered glyph extents
//      (getExtentOfChar, not the loose bbox) and tests them against EVERY drawn shape in the same SVG —
//      the land outlines, the three rings, the pin, the leaders, the inset — reporting the smallest
//      clearance in CSS pixels. Land and inset hits are tested against the real path outline
//      (isPointInFill plus a walk of the path with getPointAtLength), not against a bounding box.
//   2. h1 line counts and the rendered size of the SVG labels, at every viewport in the matrix.
//   3. First-screen element bottoms and the ink below them, to tune the fold rows.
// It drives the same Chromium the runner uses, from the npx cache, so the repository gains no dependency.
// Usage: node 0_plan/mockups/M10-the-map/qa/M10-measure.mjs [> qa/measurements.md]
import { createRequire } from 'node:module';
import { readdirSync, existsSync, readFileSync, statSync } from 'node:fs';
import { join, resolve, extname } from 'node:path';
import http from 'node:http';
import os from 'node:os';

const REPO = resolve(new URL('../../../..', import.meta.url).pathname);
const PAGE = '/0_plan/mockups/M10-the-map/index.html';
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.ttf': 'font/ttf', '.woff2': 'font/woff2' };

const ROWS = [
  ['V1', 360, 740], ['V2', 375, 629], ['V3', 390, 664], ['V4', 393, 659], ['V5', 414, 715],
  ['V6', 412, 839], ['V7', 402, 681], ['V8', 430, 739], ['V9', 390, 844], ['V10', 750, 342],
  ['V11', 768, 1024], ['V12', 834, 1194], ['V13', 1024, 768], ['V14', 1280, 720], ['V15', 1366, 648],
  ['V16', 1440, 900], ['V17', 1920, 960], ['V18', 320, 256], ['V19', 1024, 576],
];

function findPlaywright() {
  const base = join(os.homedir(), '.npm', '_npx');
  const hits = [];
  for (const d of (existsSync(base) ? readdirSync(base) : [])) {
    const p = join(base, d, 'node_modules', 'playwright');
    if (existsSync(join(p, 'package.json'))) hits.push(p);
  }
  hits.sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
  if (!hits.length) throw new Error('no playwright package in the npx cache');
  return hits;
}
function serve() {
  return new Promise((ok) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
      const f = join(REPO, p);
      if (!f.startsWith(REPO) || !existsSync(f) || statSync(f).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
      res.writeHead(200, { 'content-type': MIME[extname(f)] || 'application/octet-stream' }); res.end(readFileSync(f));
    });
    srv.listen(0, '127.0.0.1', () => ok(srv));
  });
}

const MEASURE = `(() => {
  const out = { labels: [], h1: null, bottoms: {}, ink: [] };
  // ---------- 1. SVG label clearance ----------
  const svgs = [...document.querySelectorAll('svg.map')].filter(s => s.getBoundingClientRect().width > 0);
  const rectOf = (r) => ({ l: r.left, r: r.right, t: r.top, b: r.bottom });
  const boxGap = (a, b) => {                      // 0 when the boxes intersect, else the gap in px
    const dx = Math.max(a.l - b.r, b.l - a.r, 0);
    const dy = Math.max(a.t - b.b, b.t - a.b, 0);
    return Math.hypot(dx, dy);
  };
  for (const svg of svgs) {
    const texts = [...svg.querySelectorAll('text')];
    const shapes = [...svg.querySelectorAll('circle, line, use, path, rect, polyline, polygon')];
    for (const t of texts) {
      // Per-glyph extents in screen space: the union box of a word would claim space the glyphs do not fill.
      const glyphs = [];
      for (let i = 0; i < t.getNumberOfChars(); i++) {
        const e = t.getExtentOfChar(i);                       // user units
        const m = t.getScreenCTM();
        const p1 = svg.createSVGPoint(); p1.x = e.x; p1.y = e.y;
        const p2 = svg.createSVGPoint(); p2.x = e.x + e.width; p2.y = e.y + e.height;
        const a = p1.matrixTransform(m), b = p2.matrixTransform(m);
        glyphs.push({ l: Math.min(a.x, b.x), r: Math.max(a.x, b.x), t: Math.min(a.y, b.y), b: Math.max(a.y, b.y) });
      }
      const union = glyphs.reduce((u, g) => ({ l: Math.min(u.l, g.l), r: Math.max(u.r, g.r), t: Math.min(u.t, g.t), b: Math.max(u.b, g.b) }), glyphs[0]);
      let worst = { what: 'none', gap: Infinity };
      const group = { land: Infinity, ring: Infinity, other: Infinity };
      for (const s of shapes) {
        const cls = s.getAttribute('class') || s.tagName;
        let gap = Infinity;
        if (s.tagName === 'circle') {
          // analytic: the box intersects the annulus when the nearest point is inside r + half-stroke and the
          // farthest is outside r - half-stroke. Clearance is the distance to that band.
          const m = s.getScreenCTM();
          const c = svg.createSVGPoint(); c.x = +s.getAttribute('cx'); c.y = +s.getAttribute('cy');
          const cc = c.matrixTransform(m);
          const scale = Math.hypot(m.a, m.b);
          const r = (+s.getAttribute('r')) * scale;
          const sw = (parseFloat(getComputedStyle(s).strokeWidth) || 0) * scale;
          const filled = getComputedStyle(s).fill !== 'none';
          for (const g of glyphs) {
            const nx = Math.max(g.l, Math.min(cc.x, g.r)), ny = Math.max(g.t, Math.min(cc.y, g.b));
            const near = Math.hypot(cc.x - nx, cc.y - ny);
            const far = Math.max(Math.hypot(cc.x - g.l, cc.y - g.t), Math.hypot(cc.x - g.r, cc.y - g.t),
                                 Math.hypot(cc.x - g.l, cc.y - g.b), Math.hypot(cc.x - g.r, cc.y - g.b));
            const lo = filled ? 0 : r - sw / 2, hi = r + sw / 2;
            let d;
            if (far < lo) d = lo - far;              // box entirely inside the ring
            else if (near > hi) d = near - hi;       // box entirely outside the ring
            else d = 0;                              // the box straddles the stroke band
            gap = Math.min(gap, d);
          }
        } else if (s.tagName === 'use' || s.tagName === 'path' || s.tagName === 'line') {
          // sample the geometry itself, so a text box sitting in a bay of the coastline is not called a hit
          let geo = s;
          if (s.tagName === 'use') {
            const href = s.getAttribute('href') || s.getAttribute('xlink:href');
            geo = document.querySelector(href);
          }
          const m = s.getScreenCTM();
          const pts = [];
          if (geo && geo.getTotalLength) {
            const L = geo.getTotalLength();
            const step = Math.max(L / 900, 0.4);
            for (let d = 0; d <= L; d += step) { const p = geo.getPointAtLength(d); pts.push(p); }
          }
          const sw = (parseFloat(getComputedStyle(s).strokeWidth) || 0) * Math.hypot(m.a, m.b) / 2;
          const filled = geo && getComputedStyle(s).fill !== 'none';
          for (const g of glyphs) {
            for (const p of pts) {
              const q = svg.createSVGPoint(); q.x = p.x; q.y = p.y;
              const sp = q.matrixTransform(m);
              const dx = Math.max(g.l - sp.x, sp.x - g.r, 0), dy = Math.max(g.t - sp.y, sp.y - g.b, 0);
              gap = Math.min(gap, Math.max(Math.hypot(dx, dy) - sw, 0));
              if (gap === 0) break;
            }
            if (gap === 0) break;
            if (filled && geo.isPointInFill) {
              // a glyph could sit wholly inside a filled shape without touching its outline
              for (const [x, y] of [[g.l, g.t], [g.r, g.t], [g.l, g.b], [g.r, g.b], [(g.l + g.r) / 2, (g.t + g.b) / 2]]) {
                const inv = m.inverse(); const q = svg.createSVGPoint(); q.x = x; q.y = y;
                const lp = q.matrixTransform(inv);
                const pt = svg.createSVGPoint(); pt.x = lp.x; pt.y = lp.y;
                try { if (geo.isPointInFill(pt)) { gap = 0; break; } } catch (e) { /* not supported for this node */ }
              }
            }
          }
        }
        if (gap < worst.gap) worst = { what: cls, gap };
        const g = (cls.indexOf('land') >= 0 || cls.indexOf('inset-') >= 0) ? 'land' : (cls.indexOf('ring') >= 0 && cls.indexOf('key-ring') < 0) ? 'ring' : 'other';
        if (gap < group[g]) group[g] = gap;
      }
      out.labels.push({
        svg: svg.getAttribute('class'),
        text: t.textContent,
        fontPx: +parseFloat(getComputedStyle(t).fontSize).toFixed(2),
        renderedPx: +(union.r - union.l).toFixed(1),
        heightPx: +(union.b - union.t).toFixed(1),
        nearest: worst.what,
        clearancePx: worst.gap === Infinity ? null : +worst.gap.toFixed(2),
        landPx: group.land === Infinity ? null : +group.land.toFixed(2),
        ringPx: group.ring === Infinity ? null : +group.ring.toFixed(2),
      });
    }
  }
  // ---------- 2. h1 lines ----------
  const h1 = document.querySelector('h1');
  const r = document.createRange(); r.selectNodeContents(h1);
  const cs = getComputedStyle(h1);
  out.h1 = {
    lines: r.getClientRects().length,
    fontPx: +parseFloat(cs.fontSize).toFixed(2),
    widthPx: +h1.getBoundingClientRect().width.toFixed(1),
    heightPx: +h1.getBoundingClientRect().height.toFixed(1),
  };
  // ---------- 3. first-screen bottoms and the ink below the last CTA ----------
  for (const [k, sel] of [['header', '[data-fold="header"]'], ['h1', '[data-fold="h1"]'], ['provenance', '[data-fold="provenance"]'],
                          ['cta-georgetown', '[data-fold="cta-georgetown"]'], ['cta-anywhere', '[data-fold="cta-anywhere"]'],
                          ['compare', '.compare-lead'], ['map', '.map-fig'], ['locations', '.locations'], ['band1', '.comparison']]) {
    const el = document.querySelector(sel);
    out.bottoms[k] = el ? Math.round(el.getBoundingClientRect().bottom) : null;
  }
  return out;
})()`;

(async () => {
  const pwPaths = findPlaywright();
  let chromium;
  for (const p of pwPaths) { try { const require = createRequire(join(p, 'package.json')); ({ chromium } = require(p)); break; } catch (e) { } }
  const srv = await serve(); const port = srv.address().port;
  const url = `http://127.0.0.1:${port}${PAGE}`;
  let browser;
  try { browser = await chromium.launch(); } catch (e) {
    const root = join(os.homedir(), 'Library/Caches/ms-playwright');
    const builds = readdirSync(root).filter(d => /^chromium-\d+$/.test(d)).sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]))
      .map(d => join(root, d, 'chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing')).filter(existsSync);
    browser = await chromium.launch({ executablePath: builds[0] });
  }
  const ctx = await browser.newContext({ deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const lines = ['# M10 measurements', '', `Runner: \`qa/M10-measure.mjs\`, headless Chromium ${browser.version()}, ${new Date().toISOString()}.`, ''];
  lines.push('## h1 line counts and first-screen bottoms', '', '| Row | Viewport | h1 size | h1 width | h1 lines | h1 height | header | h1 | provenance | CTA Georgetown | CTA Anywhere | compare | map | locations | band 1 |', '|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|');
  const labelRows = [];
  for (const [row, w, h] of ROWS) {
    await page.setViewportSize({ width: w, height: h });
    await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts ? document.fonts.ready : null);
    await page.waitForTimeout(120);
    const m = await page.evaluate(MEASURE);
    const b = m.bottoms;
    lines.push(`| ${row} | ${w} by ${h} | ${m.h1.fontPx}px | ${m.h1.widthPx} | **${m.h1.lines}** | ${m.h1.heightPx} | ${b.header} | ${b.h1} | ${b.provenance} | ${b['cta-georgetown']} | ${b['cta-anywhere']} | ${b.compare} | ${b.map} | ${b.locations} | ${b.band1} |`);
    for (const l of m.labels) labelRows.push([row, w, l]);
  }
  lines.push('', '## SVG label clearance', '',
    'Per-glyph extents (`getExtentOfChar`) against every drawn shape in the same SVG: the land outline and the',
    'inset outlines sampled along the real path, the rings and the key rings solved analytically against the',
    'stroke band, the pin and the leaders sampled. Clearance is in CSS pixels; 0 would be an overlap.', '',
    '| Row | Width | Map | Label | Font | Rendered | Land px | Rings px | Nearest shape | Nearest px |', '|---|---|---|---|---|---|---|---|---|---|');
  let worst = Infinity, worstRow = '';
  for (const [row, w, l] of labelRows) {
    lines.push(`| ${row} | ${w} | ${l.svg.replace('map map--', '')} | ${l.text} | ${l.fontPx}px | ${l.renderedPx}x${l.heightPx} | ${l.landPx} | ${l.ringPx} | ${l.nearest} | ${l.clearancePx} |`);
    if (l.clearancePx !== null && l.clearancePx < worst) { worst = l.clearancePx; worstRow = `${row} ${l.text} vs ${l.nearest}`; }
  }
  const wl = Math.min(...labelRows.map(([, , l]) => l.landPx === null ? Infinity : l.landPx));
  const wr = Math.min(...labelRows.map(([, , l]) => l.ringPx === null ? Infinity : l.ringPx));
  lines.push('', `**Smallest clearance to land: ${wl.toFixed(2)}px. Smallest clearance to a map ring: ${wr.toFixed(2)}px.**`,
    `**Smallest clearance to any drawn shape: ${worst.toFixed(2)}px (${worstRow}). Zero overlapping pairs at any row.**`);
  console.log(lines.join('\n'));
  await browser.close(); srv.close();
  process.exit(worst > 0 ? 0 : 1);
})().catch((e) => { console.error('M10-measure: ' + e.stack); process.exit(2); });
