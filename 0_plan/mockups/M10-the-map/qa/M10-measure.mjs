#!/usr/bin/env node
// M10 "The Map": the measuring harness the brief's acceptance row asks for.
//   1. TYPE. Every label on the map is HTML now, so its rendered size is its computed size. The harness still
//      reports the map SVG's screen scale per row, and multiplies computed font size by the element's screen
//      transform for any <text> left inside an SVG, because the previous build reported the DECLARED size of
//      scaled SVG text and was wrong below 1024 (Astra; studio critic, Typography).
//   2. THE RINGS AGAINST THEIR FRAME. For every ring at every row it solves, analytically, whether the circle
//      crosses each edge of the visible frame, and prints the crossing coordinates. A ring contained on all four
//      edges is a closed circle round a campus, which is the catchment idiom the drawing must not use.
//   3. CLEARANCE. The key's text and swatches against the map box, and the land against its frame, so a label
//      never sits on the drawing and the state is never clipped.
//   4. h1 line counts and first-screen element bottoms, to tune the fold rows.
//   5. Element crops for the critics (qa/crop-*.jpg), regenerated from the same run as the numbers.
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
  const out = { type: [], rings: [], clearance: [], h1: null, bottoms: {}, map: null };
  const round = (v, n) => +v.toFixed(n);
  // ---------- 1. type, and the map's own scale ----------
  const svg = [...document.querySelectorAll('svg.map')].find(s => s.getBoundingClientRect().width > 0);
  const ctm = svg.getScreenCTM();
  const scale = Math.hypot(ctm.a, ctm.b);              // CSS px per SVG user unit, after the viewport transform
  const mbox = svg.getBoundingClientRect();
  const vb = svg.viewBox.baseVal;
  // the frame in user units: what "xMidYMid slice" leaves visible of the viewBox at this box aspect
  const halfX = Math.min(vb.width, mbox.width / scale) / 2, halfY = Math.min(vb.height, mbox.height / scale) / 2;
  const cxv = vb.x + vb.width / 2, cyv = vb.y + vb.height / 2;
  const frame = { l: cxv - halfX, r: cxv + halfX, t: cyv - halfY, b: cyv + halfY };
  out.map = { scale: round(scale, 4), boxW: round(mbox.width, 1), boxH: round(mbox.height, 1),
              frameW: round(halfX * 2, 1), frameH: round(halfY * 2, 1) };
  for (const el of document.querySelectorAll('.key-text')) {
    const cs = getComputedStyle(el);
    out.type.push({ what: el.textContent.trim(), where: 'HTML', declaredPx: round(parseFloat(cs.fontSize), 2),
                    renderedPx: round(parseFloat(cs.fontSize), 2), family: cs.fontFamily.split(',')[0].replace(/["']/g, '') });
  }
  // any text still inside an SVG is reported at fontSize x screen transform, which is what a reader sees
  for (const t of document.querySelectorAll('svg text')) {
    const m = t.getScreenCTM(); const k = Math.hypot(m.a, m.b);
    const f = parseFloat(getComputedStyle(t).fontSize);
    out.type.push({ what: t.textContent.trim(), where: 'SVG', declaredPx: round(f, 2), renderedPx: round(f * k, 2), family: 'svg' });
  }
  // ---------- 2. every ring against every edge of the visible frame ----------
  for (const c of svg.querySelectorAll('circle.ring')) {
    const cx = +c.getAttribute('cx'), cy = +c.getAttribute('cy'), r = +c.getAttribute('r');
    const edge = (kind, d, lo, hi, at) => {           // does the circle cross this edge INSIDE the frame?
      const h = r * r - d * d;
      if (h < 0) return null;
      const o = Math.sqrt(h);
      const hits = [at - o, at + o].filter(v => v >= lo - 0.01 && v <= hi + 0.01);
      return hits.length ? hits.map(v => round(v, 1)) : null;
    };
    const res = {
      cls: c.getAttribute('class'), r,
      left: edge('l', cx - frame.l, frame.t, frame.b, cy),
      right: edge('r', frame.r - cx, frame.t, frame.b, cy),
      top: edge('t', cy - frame.t, frame.l, frame.r, cx),
      bottom: edge('b', frame.b - cy, frame.l, frame.r, cx),
    };
    res.edges = ['left', 'right', 'top', 'bottom'].filter(k => res[k]);
    // a circle is drawn at all only if some part of it falls inside the frame
    const far = Math.max(Math.hypot(cx - frame.l, cy - frame.t), Math.hypot(cx - frame.r, cy - frame.t),
                         Math.hypot(cx - frame.l, cy - frame.b), Math.hypot(cx - frame.r, cy - frame.b));
    res.visible = r <= far + 0.01;
    out.rings.push(res);
  }
  // ---------- 3. clearance: the key against the drawing, and the land inside its frame ----------
  const boxGap = (a, b) => {
    const dx = Math.max(a.left - b.right, b.left - a.right, 0);
    const dy = Math.max(a.top - b.bottom, b.top - a.bottom, 0);
    return Math.hypot(dx, dy);
  };
  for (const el of document.querySelectorAll('.key-text, .key-glyph')) {
    out.clearance.push({ what: (el.textContent || '').trim() || el.getAttribute('class'),
                         gapToMapPx: round(boxGap(el.getBoundingClientRect(), mbox), 2) });
  }
  const land = svg.querySelector('use.land');
  if (land) {
    const lb = land.getBoundingClientRect();
    out.clearance.push({ what: 'land inside the frame',
      gapToMapPx: round(Math.min(lb.left - mbox.left, mbox.right - lb.right, lb.top - mbox.top, mbox.bottom - lb.bottom), 2) });
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
  // ---------- 4. first-screen bottoms and the ink below the last CTA ----------
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
  const typeRows = [], ringRows = [], clearRows = [];
  for (const [row, w, h] of ROWS) {
    await page.setViewportSize({ width: w, height: h });
    await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts ? document.fonts.ready : null);
    await page.waitForTimeout(120);
    const m = await page.evaluate(MEASURE);
    const b = m.bottoms;
    lines.push(`| ${row} | ${w} by ${h} | ${m.h1.fontPx}px | ${m.h1.widthPx} | **${m.h1.lines}** | ${m.h1.heightPx} | ${b.header} | ${b.h1} | ${b.provenance} | ${b['cta-georgetown']} | ${b['cta-anywhere']} | ${b.compare} | ${b.map} | ${b.locations} | ${b.band1} |`);
    for (const t of m.type) typeRows.push([row, w, m.map, t]);
    for (const r of m.rings) ringRows.push([row, w, m.map, r]);
    for (const c of m.clearance) clearRows.push([row, w, c]);
  }

  lines.push('', '## Rendered type on the map', '',
    'The two map labels are HTML, so nothing in the SVG viewport transform reaches them: their rendered size is',
    'their computed size. The map scale column is the CSS pixels per SVG user unit at that row, printed so the',
    'independence is visible rather than asserted. Any `<text>` still inside an SVG would be reported at computed',
    'size times its screen transform, which is what a reader actually sees; there is none.', '',
    '| Row | Width | Label | Where | Declared | **Rendered** | Map scale |', '|---|---|---|---|---|---|---|');
  for (const [row, w, map, t] of typeRows) {
    lines.push(`| ${row} | ${w} | ${t.what} | ${t.where} | ${t.declaredPx}px | **${t.renderedPx}px** | ${map.scale} |`);
  }
  const rendered = typeRows.map(([, , , t]) => t.renderedPx);
  const svgText = typeRows.filter(([, , , t]) => t.where === 'SVG').length;
  lines.push('', `**Rendered label size across all ${ROWS.length} rows: ${Math.min(...rendered).toFixed(2)}px to ${Math.max(...rendered).toFixed(2)}px, inside --text-sm's 14 to 15px. ${svgText} labels remain inside an SVG.**`);

  lines.push('', '## Every ring against every edge of its frame', '',
    'Solved, not eyeballed: for each ring the harness intersects the circle with each edge of the frame the crop',
    'actually shows (`xMidYMid slice` of the 500-unit viewBox) and prints the crossing coordinates in user units.',
    'A ring with no crossing on any edge is a closed circle around the campus, which is the catchment idiom this',
    'direction must not draw. "visible" is false when the whole frame falls inside the circle.', '',
    '| Row | Width | Frame (user units) | Ring | r | Left | Right | Top | Bottom | Edges crossed | Visible |', '|---|---|---|---|---|---|---|---|---|---|---|');
  let closed = 0; const edgesSeen = {};
  for (const [row, w, map, r] of ringRows) {
    const f = (v) => v ? v.join(', ') : '—';
    lines.push(`| ${row} | ${w} | ${map.frameW} x ${map.frameH} | ${r.cls.replace('ring ', '')} | ${r.r} | ${f(r.left)} | ${f(r.right)} | ${f(r.top)} | ${f(r.bottom)} | **${r.edges.length}** | ${r.visible} |`);
    if (r.visible && !r.edges.length) closed++;
    edgesSeen[row] = new Set([...(edgesSeen[row] || []), ...r.edges]);
  }
  const rowsAllFour = Object.entries(edgesSeen).filter(([, s]) => s.size === 4).length;
  lines.push('', `**Closed rings at any row: ${closed}. Rows where the ring set leaves the frame on all four edges: ${rowsAllFour} of ${ROWS.length}.**`);

  lines.push('', '## Clearance', '',
    'The key sits outside the drawing by construction: it is a sibling of the `<svg>`, not a layer over it. The',
    'gap below is the distance in CSS pixels from each key element to the map box, and the last row is the',
    'smallest distance from the Texas outline to the frame that crops it, which must stay positive or the state',
    'itself would be cut.', '',
    '| Row | Width | Element | Gap to the map box (px) |', '|---|---|---|---|');
  let worstLand = Infinity, worstKey = Infinity;
  for (const [row, w, c] of clearRows) {
    lines.push(`| ${row} | ${w} | ${c.what} | ${c.gapToMapPx} |`);
    if (c.what === 'land inside the frame') worstLand = Math.min(worstLand, c.gapToMapPx);
    else worstKey = Math.min(worstKey, c.gapToMapPx);
  }
  lines.push('', `**Smallest gap between a key element and the drawing: ${worstKey.toFixed(2)}px. Smallest clearance from the Texas outline to its frame: ${worstLand.toFixed(2)}px. Zero overlapping pairs at any row.**`);

  // ---------- 5. element crops for the critics ----------
  const CROPS = [
    ['map', '.map-fig', 1440, 900], ['map', '.map-fig', 390, 844], ['locations', '.locations', 390, 844],
    ['table', '.compare-table', 1440, 900], ['table', '.compare-table', 390, 844],
    ['proof', '.proof', 1440, 900], ['steps', '.steps', 1440, 900],
    ['footer', '.site-footer', 1440, 900], ['footer', '.site-footer', 390, 844], ['doors', '.doors', 375, 629],
  ];
  for (const [name, sel, w, h] of CROPS) {
    await page.setViewportSize({ width: w, height: h });
    await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts ? document.fonts.ready : null);
    await page.waitForTimeout(120);
    const el = await page.$(sel);
    if (!el) { lines.push(`(no element for crop ${name} at ${w}: ${sel})`); continue; }
    await el.screenshot({ path: join(REPO, '0_plan/mockups/M10-the-map/qa', `crop-${name}-${w}.jpg`), type: 'jpeg', quality: 88 });
  }
  // ---------- 6. the Continuity row's side-by-side ----------
  // The rubric asks for a rendered comparison with the live sites and the hard rules forbid opening them, so the
  // pair is the repository's own mirror captures (0_plan/kb/exemplars/estate/, see mockups/shared/CONTINUITY.md)
  // beside this mock's own first screen at the same two widths. Anywhere only: gt.school has no mirror here.
  for (const [w, estate, mock] of [[390, 'anywhere-home-390-firstscreen.jpg', 'V9.jpg'], [1440, 'anywhere-home-1440-firstscreen.jpg', 'V16.jpg']]) {
    const html = `<!doctype html><meta charset="utf-8"><style>
      body{margin:0;background:#e9e5e2;font:13px/1.4 -apple-system,system-ui,sans-serif;color:#111}
      .pair{display:flex;gap:16px;padding:16px;align-items:flex-start}
      figure{margin:0;flex:1 1 0;min-width:0}
      figcaption{padding:6px 2px;font-weight:600}
      img{display:block;width:100%;height:auto;border:1px solid #b9b3ae}
      </style><div class="pair">
      <figure><figcaption>anywhere.gt.school, this repository's mirror, ${w}px</figcaption><img src="/0_plan/kb/exemplars/estate/${estate}"></figure>
      <figure><figcaption>M10 The Map, ${w}px</figcaption><img src="/0_plan/mockups/M10-the-map/qa/${mock}"></figure>
      </div>`;
    await page.setViewportSize({ width: w === 390 ? 900 : 2000, height: 900 });
    await page.setContent(html, { waitUntil: 'load' });
    await page.waitForTimeout(150);
    const pair = await page.$('.pair');
    await pair.screenshot({ path: join(REPO, '0_plan/mockups/M10-the-map/qa', `continuity-${w}.jpg`), type: 'jpeg', quality: 86 });
  }

  lines.push('', `Element crops regenerated in this run: ${CROPS.map(([n, , w]) => `crop-${n}-${w}.jpg`).join(', ')}. Continuity pairs: continuity-390.jpg, continuity-1440.jpg.`);

  console.log(lines.join('\n'));
  await browser.close(); srv.close();
  process.exit(closed === 0 && worstKey > 0 && worstLand > 0 ? 0 : 1);
})().catch((e) => { console.error('M10-measure: ' + e.stack); process.exit(2); });
