#!/usr/bin/env node
// M21 measuring harness. Machine-local, like 0_plan/tools/shots.mjs: Playwright from the npx cache,
// the repository served from 127.0.0.1, no dependency added to the repo.
//   node 0_plan/mockups/M21-the-specimen/qa/M21-measure.mjs [--overflow]
// Reports, at every row of the matrix:
//   1. the h1's line count and rendered size
//   2. the construction grid's clearance: for every visible grid line (the two margin rules and the
//      column lines the knockouts leave showing), the smallest horizontal distance from the line to
//      any glyph box that shares its vertical range, and any crossing
//   3. every annotation's computed colour against its own painted ground, as a contrast ratio
//   4. --overflow: what sticks out past the viewport with a 32px root font at 375
import { createRequire } from 'node:module';
import { readdirSync, existsSync, readFileSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, resolve, extname } from 'node:path';
import http from 'node:http';
import os from 'node:os';

const REPO = resolve(new URL('../../../..', import.meta.url).pathname);
const folder = join(REPO, '0_plan/mockups/M21-the-specimen');
const ROWS = [
  ['V1', 360, 740], ['V2', 375, 629], ['V3', 390, 664], ['V4', 393, 659], ['V5', 414, 715],
  ['V6', 412, 839], ['V7', 402, 681], ['V8', 430, 739], ['V9', 390, 844], ['V10', 750, 342],
  ['V11', 768, 1024], ['V12', 834, 1194], ['V13', 1024, 768], ['V14', 1280, 720], ['V15', 1366, 648],
  ['V16', 1440, 900], ['V17', 1920, 960], ['V18', 320, 256], ['V19', 1024, 576],
];
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.ttf': 'font/ttf', '.json': 'application/json' };
function serve() {
  return new Promise((ok) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
      const f = join(REPO, p);
      if (!f.startsWith(REPO) || !existsSync(f) || statSync(f).isDirectory()) { res.writeHead(404); res.end('no'); return; }
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

// ---- in-page measurement ----
const MEASURE = `(() => {
  const out = { grid: [], anno: [], h1: null };
  const lum = (c) => { const srgb = /^color\\(\\s*srgb/i.test(c); const n = (c.match(/-?[\\d.]+(e-?\\d+)?/gi) || []).slice(srgb ? 0 : 0, 3).map(Number)
      .map(v => { if (!srgb) v /= 255; return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); }); return 0.2126*n[0] + 0.7152*n[1] + 0.0722*n[2]; };
  const ratio = (a,b) => { const l1 = lum(a), l2 = lum(b); return Math.round(((Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05))*100)/100; };
  const TRANSPARENT = /rgba\\(\\s*0,\\s*0,\\s*0,\\s*0\\s*\\)|^transparent$/;
  const bgOf = (el) => { const c = getComputedStyle(el).backgroundColor; return TRANSPARENT.test(c) ? null : c; };
  const behind = (el) => { for (let p = el.parentElement; p; p = p.parentElement) { const c = bgOf(p); if (c) return c; } return 'rgb(255, 255, 255)'; };

  // h1 lines
  const h1 = document.querySelector('h1');
  const cs1 = getComputedStyle(h1);
  const r1 = h1.getBoundingClientRect();
  const rg = document.createRange(); rg.selectNodeContents(h1);
  const lineTops = new Set(); for (const r of rg.getClientRects()) lineTops.add(Math.round(r.top));
  out.h1 = { size: Math.round(parseFloat(cs1.fontSize)*100)/100, weight: cs1.fontWeight,
             lines: lineTops.size, height: Math.round(r1.height), width: Math.round(r1.width) };

  // every glyph run on the page (per line box), in document coordinates
  const runs = [];
  const walk = (node) => {
    if (node.nodeType === 3) {
      if (!node.textContent.trim()) return;
      const p = node.parentElement; if (!p) return;
      const cs = getComputedStyle(p);
      if (cs.visibility === 'hidden' || cs.display === 'none' || parseFloat(cs.opacity) === 0) return;
      if (p.closest('.visually-hidden')) return;
      const r = document.createRange(); r.selectNodeContents(node);
      for (const b of r.getClientRects()) if (b.width > 0 && b.height > 0)
        runs.push({ l: b.left + scrollX, r: b.right + scrollX, t: b.top + scrollY, b: b.bottom + scrollY,
                    text: node.textContent.trim().slice(0, 28) });
      return;
    }
    if (node.nodeType !== 1) return;
    const cs = getComputedStyle(node);
    if (cs.display === 'none' || cs.visibility === 'hidden') return;
    for (const c of node.childNodes) walk(c);
  };
  walk(document.body);

  // Visible construction lines.
  // (a) the two margin rules: real elements, never covered by a knockout.
  // (b) the column lines: painted by .grid as a background, and occluded wherever a .knock (or a
  //     table cell, or a filled button) paints over them. A line is therefore VISIBLE over the
  //     y-ranges of its sheet that no occluder covers at that x.
  const spreadOf = (el) => {
    const s = getComputedStyle(el).boxShadow;
    if (!s || s === 'none') return 0;
    const n = (s.match(/-?[\\d.]+px/g) || []).map(parseFloat);
    return n.length >= 4 ? n[3] : 0;   // x, y, blur, spread
  };
  const occluders = [...document.querySelectorAll('.knock, .compare caption, .compare th, .compare td, .btn, .mark-plate')]
    .map(el => { const b = el.getBoundingClientRect(); const s = spreadOf(el);
      return { l: b.left+scrollX-s, r: b.right+scrollX+s, t: b.top+scrollY-s, b: b.bottom+scrollY+s }; })
    .filter(o => o.r > o.l && o.b > o.t);

  const lines = [];
  for (const el of document.querySelectorAll('.rule-left, .rule-right')) {
    const b = el.getBoundingClientRect();
    if (b.width < 0.5) continue;
    lines.push({ kind: 'margin rule', x: b.left + scrollX, w: b.width, t: b.top + scrollY, b: b.bottom + scrollY, occluded: false });
  }
  for (const col of document.querySelectorAll('.grid i')) {
    const cs = getComputedStyle(col);
    if (cs.display === 'none') continue;
    const b = col.getBoundingClientRect();
    const lw = parseFloat(cs.borderLeftWidth);
    if (lw > 0) lines.push({ kind: 'column line', x: b.left + scrollX, w: lw, t: b.top + scrollY, b: b.bottom + scrollY, occluded: true });
    const rw = parseFloat(cs.borderRightWidth);
    if (rw > 0) lines.push({ kind: 'column line (right edge)', x: b.right + scrollX - rw, w: rw, t: b.top + scrollY, b: b.bottom + scrollY, occluded: true });
  }

  let crossings = 0, minClear = Infinity, minWhere = null, visibleLines = 0;
  for (const ln of lines) {
    let anyVisible = false;
    for (const run of runs) {
      if (run.b <= ln.t || run.t >= ln.b) continue;         // no vertical overlap with this sheet
      // is the line painted over this run's band?
      let covered = false;
      if (ln.occluded) {
        for (const o of occluders) {
          if (o.l - 0.5 <= ln.x && o.r + 0.5 >= ln.x + ln.w && o.t <= run.t + 1 && o.b >= run.b - 1) { covered = true; break; }
        }
      }
      if (covered) continue;
      anyVisible = true;
      const gap = ln.x >= run.r ? ln.x - run.r : (ln.x + ln.w <= run.l ? run.l - (ln.x + ln.w) : -1);
      if (gap < 0) { crossings++; if (crossings < 6) out.grid.push({ crossing: run.text, x: Math.round(ln.x), kind: ln.kind }); }
      else if (gap < minClear) { minClear = gap; minWhere = run.text + ' / ' + ln.kind; }
    }
    if (anyVisible || !ln.occluded) visibleLines++;
  }
  out.gridSummary = { lines: lines.length, visibleLines, crossings,
    minClearance: minClear === Infinity ? null : Math.round(minClear * 100) / 100, minWhere };

  // annotations against their own ground
  for (const el of document.querySelectorAll('.anno, .provenance, .sources, .compare caption, .compare td::before, .footer-facts')) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none') continue;
    const g = bgOf(el) || behind(el);
    out.anno.push({ sel: el.className.split(' ')[0] || el.tagName.toLowerCase(), color: cs.color, ground: g,
                    size: Math.round(parseFloat(cs.fontSize)*100)/100, ratio: ratio(cs.color, g) });
  }
  // the grid ink and the rule ink against their grounds, per chapter
  out.inks = [];
  for (const ch of document.querySelectorAll('.chapter')) {
    const g = bgOf(ch); if (!g) continue;
    const gi = getComputedStyle(ch.querySelector('.rule-left')).backgroundColor;
    const ri = getComputedStyle(ch.querySelector('.door, .facts li, .steps li, .connect li, .compare td, .footer-body') || ch).borderTopColor;
    out.inks.push({ chapter: ch.className.replace('chapter ', ''), ground: g, gridInk: gi, gridRatio: ratio(gi, g), ruleInk: ri, ruleRatio: ratio(ri, g) });
  }
  return out;
})()`;

const OVERFLOW = `(() => {
  const vw = document.documentElement.clientWidth; const out = [];
  for (const el of document.querySelectorAll('*')) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    if (r.right > vw + 0.5) out.push({ tag: el.tagName.toLowerCase(), cls: String(el.className).slice(0,40), right: Math.round(r.right), left: Math.round(r.left) });
  }
  return { vw, scrollWidth: document.documentElement.scrollWidth, out: out.slice(0, 25) };
})()`;

(async () => {
  const pw = findPlaywright(); let chromium, used;
  for (const p of pw) { try { const require = createRequire(join(p, 'package.json')); ({ chromium } = require(p)); used = p; break; } catch (e) { /* next */ } }
  if (!chromium) throw new Error('no playwright in the npx cache');
  const srv = await serve(); const port = srv.address().port;
  const url = `http://127.0.0.1:${port}/0_plan/mockups/M21-the-specimen/index.html`;
  let browser;
  try { browser = await chromium.launch(); } catch (e) { browser = await chromium.launch({ channel: 'chrome' }); }
  const page = await (await browser.newContext({ deviceScaleFactor: 1 })).newPage();

  if (process.argv.includes('--overflow')) {
    await page.setViewportSize({ width: 375, height: 629 });
    await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => { document.documentElement.style.fontSize = '32px'; });
    await page.waitForTimeout(150);
    console.log(JSON.stringify(await page.evaluate(OVERFLOW), null, 1));
    await browser.close(); srv.close(); return;
  }

  const lines = ['# M21 measurements', '', `Runner: \`qa/M21-measure.mjs\`, Playwright from \`${used}\`, ${browser.version()}; ${new Date().toISOString()}.`, '',
    '## h1 and construction-grid clearance', '',
    '| Row | Viewport | h1 size | h1 lines | h1 height | Grid lines | Visible | Crossings | Smallest clearance | Where |', '|---|---|---|---|---|---|---|---|---|---|'];
  let worstClear = Infinity, worstRow = null, totalCross = 0; const crossDetail = [];
  const annoRows = [], inkRows = [];
  for (const [row, w, h] of ROWS) {
    await page.setViewportSize({ width: w, height: h });
    await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts ? document.fonts.ready : null);
    await page.waitForTimeout(120);
    const m = await page.evaluate(MEASURE);
    totalCross += m.gridSummary.crossings;
    if (m.gridSummary.minClearance != null && m.gridSummary.minClearance < worstClear) { worstClear = m.gridSummary.minClearance; worstRow = row; }
    lines.push(`| ${row} | ${w} by ${h} | ${m.h1.size}px | ${m.h1.lines} | ${m.h1.height}px | ${m.gridSummary.lines} | ${m.gridSummary.visibleLines} | ${m.gridSummary.crossings} | ${m.gridSummary.minClearance}px | ${m.gridSummary.minWhere || ''} |`);
    if (m.grid.length) crossDetail.push(`| ${row} | ` + m.grid.map(g => `${g.kind} at x ${g.x} through "${g.crossing}"`).join('; ') + ' |');
    if (row === 'V2' || row === 'V16') {
      for (const a of m.anno) annoRows.push(`| ${row} | \`.${a.sel}\` | ${a.size}px | ${a.color} | ${a.ground} | **${a.ratio}:1** |`);
      for (const k of m.inks) inkRows.push(`| ${row} | ${k.chapter} | ${k.ground} | ${k.gridInk} | ${k.gridRatio}:1 | ${k.ruleInk} | ${k.ruleRatio}:1 |`);
    }
  }
  if (crossDetail.length) lines.push('', '| Row | Crossing (first five per row) |', '|---|---|', ...crossDetail);
  lines.push('', `**Crossings at every row: ${totalCross}. Smallest clearance from a visible construction line to any glyph: ${worstClear}px (${worstRow}).**`, '');
  lines.push('## Annotation contrast against its own ground', '', '| Row | Element | Size | Colour | Ground | Ratio |', '|---|---|---|---|---|---|', ...annoRows, '');
  lines.push('## Line inks per chapter ground', '', '| Row | Chapter | Ground | Grid ink | Grid ratio | Rule ink | Rule ratio |', '|---|---|---|---|---|---|---|', ...inkRows, '');
  mkdirSync(join(folder, 'qa'), { recursive: true });
  writeFileSync(join(folder, 'qa', 'measurements.md'), lines.join('\n') + '\n');
  console.log(lines.join('\n'));
  await browser.close(); srv.close();
})().catch((e) => { console.error('M21-measure: ' + e.message); process.exit(2); });
