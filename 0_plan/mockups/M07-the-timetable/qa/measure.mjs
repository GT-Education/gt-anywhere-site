#!/usr/bin/env node
// M07 measurement companion to shots.mjs: at each width from 960 to 1440 (grid form) it reads every SVG <text> box and
// reports pairwise overlaps, clipping past the week area, and the slack to the door column; at the fold rows it reports the
// h1 line count from the rendered box. Same machine-local Playwright as the runner. Run from the repo root:
// node 0_plan/mockups/M07-the-timetable/qa/measure.mjs
import { createRequire } from 'node:module';
import { readdirSync, existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve, extname } from 'node:path';
import http from 'node:http'; import os from 'node:os';
const REPO = resolve(new URL('../../../..', import.meta.url).pathname);
const PAGE = '/0_plan/mockups/M07-the-timetable/index.html';
function pw() { const base = join(os.homedir(), '.npm', '_npx'); const hits = []; for (const d of readdirSync(base)) { const p = join(base, d, 'node_modules', 'playwright'); if (existsSync(join(p, 'package.json'))) hits.push(p); } hits.sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs); return hits; }
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml', '.ttf': 'font/ttf' };
const srv = await new Promise(ok => { const s = http.createServer((req, res) => { let p = decodeURIComponent(req.url.split('?')[0]); const f = join(REPO, p); if (!f.startsWith(REPO) || !existsSync(f) || statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'content-type': MIME[extname(f)] || 'application/octet-stream' }); res.end(readFileSync(f)); }); s.listen(0, '127.0.0.1', () => ok(s)); });
let browser; for (const p of pw()) { try { const { chromium } = createRequire(join(p, 'package.json'))(p); browser = await chromium.launch(); break; } catch { /* a cache entry whose browser is not installed: try the next */ } }
if (!browser) throw new Error('no launchable Chromium in the npx cache'); const page = await browser.newPage();
const url = `http://127.0.0.1:${srv.address().port}${PAGE}`;
const GRID = [[1024, 768], [1024, 900], [1100, 720], [1152, 864], [1200, 720], [1280, 720], [1280, 800], [1366, 648], [1366, 900], [1440, 900], [1440, 720], [1920, 960]];
const FOLD = [['V2', 375, 629], ['V5', 414, 715], ['V10', 750, 342], ['V13', 1024, 768], ['V14', 1280, 720], ['V15', 1366, 648], ['V16', 1440, 900], ['V17', 1920, 960]];
const out = ['# SVG text and h1 measurements (qa/measure.mjs)', '', `${new Date().toISOString()}; page \`${PAGE}\`.`, '',
  '## Grid form, 960 to 1440 (and 1920): every SVG text box against every other, against its week area, against the door column', '',
  '| Viewport | Form | Week area | Door column | Texts | Overlapping pairs | Clipped past the week area | Smallest slack to the week edge (label) | Row heights (head, Georgetown, GT Anywhere) |', '|---|---|---|---|---|---|---|---|---|'];
for (const [w, h] of GRID) {
  await page.setViewportSize({ width: w, height: h }); await page.goto(url, { waitUntil: 'load' }); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(100);
  const r = await page.evaluate(() => {
    const grid = getComputedStyle(document.querySelector('.week')).display !== 'none';
    if (!grid) return { grid };
    // the row names are HTML above their SVG, so measure them against their week row's box; everything else against its svg
    // the row names are HTML above their SVG: measure the text itself (a Range, not the full-width block box), against
    // their week row; everything else is SVG text measured against its svg
    const inkBox = (t) => { if (t.classList.contains('row-name')) { const rg = document.createRange(); rg.selectNodeContents(t); return rg.getBoundingClientRect(); } return t.getBoundingClientRect(); };
    const texts = [...document.querySelectorAll('.week-svg text, .row-name')].map(t => { const b = inkBox(t); const svg = (t.closest('svg') || t.closest('.week')).getBoundingClientRect(); return { txt: t.textContent, l: b.left, r: b.right, t: b.top, b: b.bottom, svgR: svg.right, svgL: svg.left }; });
    const pairs = []; for (let i = 0; i < texts.length; i++) for (let j = i + 1; j < texts.length; j++) { const a = texts[i], c = texts[j]; if (a.l < c.r && c.l < a.r && a.t < c.b && c.t < a.b) pairs.push(a.txt.slice(0, 18) + ' / ' + c.txt.slice(0, 18)); }
    const clipped = texts.filter(x => x.r > x.svgR + 0.5).map(x => x.txt.slice(0, 24));
    let min = Infinity, minTxt = ''; for (const x of texts) { const s = x.svgR - x.r; if (s < min) { min = s; minTxt = x.txt.slice(0, 22); } }
    const door = document.querySelector('.doors').getBoundingClientRect(); const week = document.querySelector('.week-row').getBoundingClientRect();
    const rows = [...document.querySelectorAll('.week')].map(e => Math.round(e.getBoundingClientRect().height));
    const compact = getComputedStyle(document.querySelector('.door .door-line')).display === 'none';
    return { grid, n: texts.length, pairs, clipped, min: Math.round(min), minTxt, week: Math.round(week.width), door: Math.round(door.width), rows, compact };
  });
  if (!r.grid) { out.push(`| ${w} by ${h} | stacked (below 60rem) | | | | | | | |`); continue; }
  out.push(`| ${w} by ${h} | grid, ${r.compact ? 'compact doors' : 'doors with lines'} | ${r.week}px | ${r.door}px | ${r.n} | ${r.pairs.length ? 'FAIL ' + r.pairs.join('; ') : '0'} | ${r.clipped.length ? 'FAIL ' + r.clipped.join('; ') : 'none'} | ${r.min}px (${r.minTxt}) | ${r.rows.join(', ')} |`);
}
out.push('', '## h1 lines at the fold rows (rendered box height over the line box)', '', '| Row | Viewport | h1 size | h1 column | Lines | h1 height |', '|---|---|---|---|---|---|');
for (const [row, w, h] of FOLD) {
  await page.setViewportSize({ width: w, height: h }); await page.goto(url, { waitUntil: 'load' }); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(100);
  const r = await page.evaluate(() => { const h1 = document.querySelector('h1'); const cs = getComputedStyle(h1); const fs = parseFloat(cs.fontSize); const b = h1.getBoundingClientRect(); return { fs: fs.toFixed(2), w: Math.round(b.width), lines: Math.round(b.height / (fs * 1.15)), h: Math.round(b.height) }; });
  out.push(`| ${row} | ${w} by ${h} | ${r.fs}px | ${r.w}px | ${r.lines} | ${r.h}px |`);
}
await browser.close(); srv.close();
writeFileSync(join(REPO, '0_plan/mockups/M07-the-timetable/qa/svg-text.md'), out.join('\n') + '\n');
console.log(out.slice(4).join('\n'));
