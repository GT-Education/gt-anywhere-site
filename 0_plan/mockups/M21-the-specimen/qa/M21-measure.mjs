#!/usr/bin/env node
// M21 measuring harness. Machine-local, like 0_plan/tools/shots.mjs: Playwright from the npx cache,
// the repository served from 127.0.0.1, no dependency added to the repo.
//   node 0_plan/mockups/M21-the-specimen/qa/M21-measure.mjs [--overflow]
// Reports, at every row of the matrix:
//   1. the h1's line count and rendered size
//   2. the construction grid's clearance: for every visible grid line (the two margin rules and the
//      column lines the knockouts leave showing), the smallest horizontal distance from the line to
//      any glyph box that shares its vertical range, and any crossing
//   3. EVERY drawn line class on the page, not just the grid: the margin rules, the column lines,
//      the dashed measure line, the dashed drop, the four corner handles, the registration cross and
//      every drawn rule, each measured against the INK beside it rather than against the font box.
//      Added after the round-one critique: the harness tested the grid and the margin rules only, so
//      the drop could start inside the measure label at two rows with nothing to catch it.
//   4. every annotation's computed colour against its own painted ground, as a contrast ratio
//   5. --overflow: what sticks out past the viewport with a 32px root font at 375
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

  // A Range client rect is the FONT box, not the ink: Literata's content box is 1.485 em against a
  // 1.15 line box, so a rect stands 0.1675 em proud of the type on each side (CONTRACT.md section 3).
  // Canvas reports both boxes for the node's own string, so every run carries its ink top and bottom
  // as well, and a mark drawn beside the type can be measured against what a reader actually sees.
  const ctx = document.createElement('canvas').getContext('2d');
  const inkInset = (p, text) => {
    const cs = getComputedStyle(p);
    ctx.font = cs.fontStyle + ' ' + cs.fontWeight + ' ' + cs.fontSize + ' ' + cs.fontFamily;
    const t = cs.textTransform === 'uppercase' ? text.toUpperCase() : text;
    const m = ctx.measureText(t || 'x');
    const fa = m.fontBoundingBoxAscent, fd = m.fontBoundingBoxDescent;
    if (!(fa > 0) || !(fd >= 0)) return null;
    return { fa, fd, box: fa + fd, top: fa - m.actualBoundingBoxAscent, bottom: fa + m.actualBoundingBoxDescent };
  };

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
      const ink = inkInset(p, node.textContent.trim());
      for (const b of r.getClientRects()) if (b.width > 0 && b.height > 0) {
        const t = b.top + scrollY, bo = b.bottom + scrollY;
        // trust the canvas inset only when the rect really is the font box for this face and size
        const ok = ink && Math.abs(ink.box - b.height) <= 1.5;
        runs.push({ l: b.left + scrollX, r: b.right + scrollX, t, b: bo,
                    it: ok ? t + ink.top : t, ib: ok ? t + ink.bottom : bo,
                    text: node.textContent.trim().slice(0, 28) });
      }
      return;
    }
    if (node.nodeType !== 1) return;
    const cs = getComputedStyle(node);
    if (cs.display === 'none' || cs.visibility === 'hidden') return;
    // Text clipped to a 1px box is laid out but never painted: .visually-hidden, and the stacked
    // table's clipped thead, whose "Georgetown Campus" and "GT Anywhere" column headings otherwise
    // lay out at full width behind the first body row and read as twenty crossings that no one sees.
    if (cs.clipPath && cs.clipPath !== 'none') {
      const q = node.getBoundingClientRect();
      if (q.width <= 2 || q.height <= 2) return;
    }
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

  // ---- every drawn line class on the page, against the ink beside it ----
  // Each entry is the rectangle the browser actually paints. Vertical lines, horizontal rules and
  // the two small marks are all measured the same way: the distance from the painted rectangle to
  // the nearest glyph's ink box, and an overlap counted as a crossing.
  const marks = [];
  const add = (kind, l, r, t, b, occ) => { if (r > l && b > t) marks.push({ kind, l, r, t, b, occluded: !!occ }); };
  for (const el of document.querySelectorAll('.rule-left, .rule-right')) {
    const q = el.getBoundingClientRect(); if (q.width < 0.5) continue;
    add('margin rule', q.left + scrollX, q.right + scrollX, q.top + scrollY, q.bottom + scrollY, false);
  }
  for (const col of document.querySelectorAll('.grid i')) {
    const cs = getComputedStyle(col); if (cs.display === 'none') continue;
    const q = col.getBoundingClientRect();
    const lw = parseFloat(cs.borderLeftWidth), rw = parseFloat(cs.borderRightWidth);
    if (lw > 0) add('column line', q.left + scrollX, q.left + scrollX + lw, q.top + scrollY, q.bottom + scrollY, true);
    if (rw > 0) add('column line', q.right + scrollX - rw, q.right + scrollX, q.top + scrollY, q.bottom + scrollY, true);
  }
  for (const el of document.querySelectorAll('.measure-rule')) {
    const cs = getComputedStyle(el); const q = el.getBoundingClientRect();
    const w = parseFloat(cs.borderTopWidth); if (!(w > 0) || q.width < 0.5) continue;
    add('measure line (dashed)', q.left + scrollX, q.right + scrollX, q.top + scrollY, q.top + scrollY + w, false);
  }
  // The dashed drop is a pseudo-element, which is why it went unmeasured. getComputedStyle resolves
  // an absolutely positioned pseudo's insets to pixels, so its painted box can be rebuilt from the
  // originating element's border box.
  for (const el of document.querySelectorAll('.doors')) {
    const cs = getComputedStyle(el, '::before');
    if (!cs || cs.content === 'none' || cs.content === '') continue;
    const w = parseFloat(cs.borderLeftWidth); const left = parseFloat(cs.left); const top = parseFloat(cs.top);
    const h = parseFloat(cs.height);
    if (!(w > 0) || !isFinite(left) || !isFinite(top) || !isFinite(h)) continue;
    const q = el.getBoundingClientRect();
    const x = q.left + scrollX + left, y = q.top + scrollY + top;
    add('measure drop (dashed)', x, x + w, y, y + h, false);
  }
  // A corner handle is an L: two 1px arms on two of its four sides, plus a 6px accent square at the
  // outer corner. Its 14px box is mostly empty, so each painted piece is measured on its own — the
  // union box overlaps the first line of the h1 at every row while none of the ink does.
  for (const el of document.querySelectorAll('.specimen .mark')) {
    const cs = getComputedStyle(el); const q = el.getBoundingClientRect();
    const L = q.left + scrollX, R = q.right + scrollX, T = q.top + scrollY, B = q.bottom + scrollY;
    const w = (s) => parseFloat(cs['border' + s + 'Width']) || 0;
    if (w('Top')) add('corner handle', L, R, T, T + w('Top'), false);
    if (w('Bottom')) add('corner handle', L, R, B - w('Bottom'), B, false);
    if (w('Left')) add('corner handle', L, L + w('Left'), T, B, false);
    if (w('Right')) add('corner handle', R - w('Right'), R, T, B, false);
    const ps = getComputedStyle(el, '::before');
    if (ps && ps.content !== 'none') {
      const pw = parseFloat(ps.width), ph = parseFloat(ps.height);
      const pl = parseFloat(ps.left), pr = parseFloat(ps.right), pt = parseFloat(ps.top), pb = parseFloat(ps.bottom);
      const x = isFinite(pl) ? L + pl : R - pr - pw;
      const y = isFinite(pt) ? T + pt : B - pb - ph;
      if (isFinite(x) && isFinite(y) && pw > 0 && ph > 0) add('corner handle', x, x + pw, y, y + ph, false);
    }
  }
  for (const el of document.querySelectorAll('.reg-mark')) {
    const q = el.getBoundingClientRect();
    add('registration cross', q.left + scrollX, q.right + scrollX, q.top + scrollY, q.bottom + scrollY, false);
  }
  const RULES = '.site-header, main > .chapter + .chapter, .site-footer, .door, .facts li, .steps li, .connect li, .tefa, .compare th, .compare td';
  for (const el of document.querySelectorAll(RULES)) {
    const cs = getComputedStyle(el); if (cs.display === 'none') continue;
    const q = el.getBoundingClientRect(); if (q.width < 0.5) continue;
    const tw = parseFloat(cs.borderTopWidth), bw = parseFloat(cs.borderBottomWidth);
    if (tw > 0 && !TRANSPARENT.test(cs.borderTopColor))
      add('drawn rule', q.left + scrollX, q.right + scrollX, q.top + scrollY, q.top + scrollY + tw, false);
    if (bw > 0 && !TRANSPARENT.test(cs.borderBottomColor))
      add('drawn rule', q.left + scrollX, q.right + scrollX, q.bottom + scrollY - bw, q.bottom + scrollY, false);
  }

  const covered = (m, run) => {
    for (const o of occluders)
      if (o.l - 0.5 <= m.l && o.r + 0.5 >= m.r && o.t <= run.t + 1 && o.b >= run.b - 1) return true;
    return false;
  };
  const byClass = {};
  for (const m of marks) {
    const s = byClass[m.kind] || (byClass[m.kind] = { kind: m.kind, count: 0, crossings: 0, min: Infinity, where: null, cross: [] });
    s.count++;
    for (const run of runs) {
      if (m.occluded && covered(m, run)) continue;
      const dx = m.l >= run.r ? m.l - run.r : (run.l >= m.r ? run.l - m.r : 0);
      const dy = m.t >= run.ib ? m.t - run.ib : (run.it >= m.b ? run.it - m.b : 0);
      if (dx === 0 && dy === 0) {
        s.crossings++;
        if (s.cross.length < 4) s.cross.push('"' + run.text + '" at x ' + Math.round(m.l) + ', y ' + Math.round(m.t));
        continue;
      }
      const d = Math.hypot(dx, dy);
      if (d < s.min) { s.min = d; s.where = run.text; }
    }
  }
  out.lineClasses = Object.values(byClass).map(s => ({
    kind: s.kind, count: s.count, crossings: s.crossings,
    min: s.min === Infinity ? null : Math.round(s.min * 100) / 100, where: s.where, cross: s.cross }));

  // annotations against their own ground
  for (const el of document.querySelectorAll('.anno, .provenance, .sources, .compare caption, .compare td::before, .footer-facts')) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none') continue;
    const g = bgOf(el) || behind(el);
    out.anno.push({ sel: el.className.split(' ')[0] || el.tagName.toLowerCase(), color: cs.color, ground: g,
                    size: Math.round(parseFloat(cs.fontSize)*100)/100, ratio: ratio(cs.color, g) });
  }
  // the grid ink and the rule ink against their grounds, per chapter. Both are read from a rule the
  // browser actually paints, never from the custom property: the header and the footer carry their
  // rule on a border-bottom / border-top of their own, and reading borderTopColor off a chapter that
  // has no top border returns the colour property instead, which is how this table once reported the
  // header's rule ink as 17.69:1.
  out.inks = [];
  for (const ch of document.querySelectorAll('.chapter')) {
    const g = bgOf(ch); if (!g) continue;
    const gi = getComputedStyle(ch.querySelector('.rule-left')).backgroundColor;
    let ri = null;
    const inner = ch.querySelector('.door, .facts li, .steps li, .connect li, .compare td, .tefa');
    if (inner) ri = getComputedStyle(inner).borderTopColor;
    else {
      const cs = getComputedStyle(ch);
      if (parseFloat(cs.borderBottomWidth) > 0) ri = cs.borderBottomColor;
      else if (parseFloat(cs.borderTopWidth) > 0) ri = cs.borderTopColor;
    }
    out.inks.push({ chapter: ch.className.replace('chapter ', ''), ground: g, gridInk: gi, gridRatio: ratio(gi, g),
                    ruleInk: ri, ruleRatio: ri ? ratio(ri, g) : null });
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
  const classes = new Map();   // every drawn line class, aggregated over the nineteen rows
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
    for (const c of m.lineClasses) {
      const s = classes.get(c.kind) || { count: 0, crossings: 0, min: Infinity, where: null, row: null, cross: [] };
      s.count = Math.max(s.count, c.count); s.crossings += c.crossings;
      if (c.min != null && c.min < s.min) { s.min = c.min; s.where = c.where; s.row = row; }
      for (const x of c.cross) if (s.cross.length < 8) s.cross.push(`${row}: ${x}`);
      classes.set(c.kind, s);
    }
    if (row === 'V2' || row === 'V16') {
      for (const a of m.anno) annoRows.push(`| ${row} | \`.${a.sel}\` | ${a.size}px | ${a.color} | ${a.ground} | **${a.ratio}:1** |`);
      for (const k of m.inks) inkRows.push(`| ${row} | ${k.chapter} | ${k.ground} | ${k.gridInk} | ${k.gridRatio}:1 | ${k.ruleInk} | ${k.ruleRatio}:1 |`);
    }
  }
  if (crossDetail.length) lines.push('', '| Row | Crossing (first five per row) |', '|---|---|', ...crossDetail);
  lines.push('', `**Crossings at every row: ${totalCross}. Smallest clearance from a visible construction line to any glyph: ${worstClear}px (${worstRow}).**`, '');
  const ORDER = ['margin rule', 'column line', 'measure line (dashed)', 'measure drop (dashed)', 'corner handle', 'registration cross', 'drawn rule'];
  const keys = [...classes.keys()].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b));
  let classCross = 0;
  lines.push('## Every drawn line class, against the ink beside it', '',
    'Every mark the stylesheet paints, not the construction grid alone: the rectangle the browser draws,',
    'measured to the nearest glyph\'s **ink** box (the font box inset by the canvas metrics, so Literata\'s',
    "0.1675 em of overhang is not counted as type). An overlap is a crossing.", '',
    '| Line class | Marks at the busiest row | Crossings, all 19 rows | Smallest clearance to ink | Where | Row |', '|---|---|---|---|---|---|');
  for (const k of keys) {
    const s = classes.get(k); classCross += s.crossings;
    lines.push(`| ${k} | ${s.count} | ${s.crossings} | ${s.min === Infinity ? 'n/a' : s.min + 'px'} | ${s.where || ''} | ${s.row || ''} |`);
  }
  const crossLines = keys.filter(k => classes.get(k).crossings).map(k => `| ${k} | ` + classes.get(k).cross.join('; ') + ' |');
  if (crossLines.length) lines.push('', '| Line class | Crossings (first eight) |', '|---|---|', ...crossLines);
  lines.push('', `**Drawn line classes: ${keys.length}. Crossings of type by any drawn line, all nineteen rows: ${classCross}.**`, '');
  lines.push('## Annotation contrast against its own ground', '', '| Row | Element | Size | Colour | Ground | Ratio |', '|---|---|---|---|---|---|', ...annoRows, '');
  lines.push('## Line inks per chapter ground', '', '| Row | Chapter | Ground | Grid ink | Grid ratio | Rule ink | Rule ratio |', '|---|---|---|---|---|---|---|', ...inkRows, '');
  mkdirSync(join(folder, 'qa'), { recursive: true });
  writeFileSync(join(folder, 'qa', 'measurements.md'), lines.join('\n') + '\n');
  console.log(lines.join('\n'));
  await browser.close(); srv.close();
})().catch((e) => { console.error('M21-measure: ' + e.message); process.exit(2); });
