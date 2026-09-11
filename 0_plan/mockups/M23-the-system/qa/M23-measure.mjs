#!/usr/bin/env node
// M23 measuring harness. Machine-local, same Playwright-from-the-npx-cache trick as 0_plan/tools/shots.mjs, so the
// repository gains no dependency (D-028 pending). Usage: node 0_plan/mockups/M23-the-system/qa/M23-measure.mjs
// Reports, per viewport row: h1 line count and rendered size, the first-screen part heights, the rendered size of any
// SVG text (there is none by design), and the connector geometry — every segment's orientation and its clearance to
// the nearest rendered text box, which is the brief's acceptance measurement.
import { createRequire } from 'node:module';
import { readdirSync, existsSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import http from 'node:http';
import { readFileSync } from 'node:fs';
import { extname } from 'node:path';
import os from 'node:os';

const REPO = resolve(new URL('../../../..', import.meta.url).pathname);
const REL = '/0_plan/mockups/M23-the-system';
function findPlaywright() {
  const base = join(os.homedir(), '.npm', '_npx');
  const hits = [];
  for (const d of (existsSync(base) ? readdirSync(base) : [])) {
    const p = join(base, d, 'node_modules', 'playwright');
    if (existsSync(join(p, 'package.json'))) hits.push(p);
  }
  hits.sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
  return hits;
}
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

const ROWS = [['V1',360,740],['V2',375,629],['V3',390,664],['V4',393,659],['V5',414,715],['V6',412,839],['V7',402,681],['V8',430,739],
  ['V9',390,844],['V10',750,342],['V11',768,1024],['V12',834,1194],['V13',1024,768],['V14',1280,720],['V15',1366,648],['V16',1440,900],
  ['V17',1920,960],['V18',320,256],['V19',1024,576]];

const PROBE = `(() => {
  const px = (n) => Math.round(n * 100) / 100;
  const h1 = document.querySelector('h1');
  const cs = getComputedStyle(h1);
  const lh = parseFloat(cs.lineHeight);
  const lines = Math.round(h1.getClientRects().length ? h1.getBoundingClientRect().height / lh : 0);
  // every rendered text box on the first screen, for the connector clearance test
  const first = document.body;
  const textRects = [];
  const walk = (node) => {
    if (node.nodeType === 3) {
      if (node.textContent.trim()) {
        const r = document.createRange(); r.selectNodeContents(node);
        for (const b of r.getClientRects()) if (b.width > 0 && b.height > 0) textRects.push({ t: b.top, b: b.bottom, l: b.left, r: b.right, s: node.textContent.trim().slice(0, 28) });
      }
      return;
    }
    if (node.nodeType !== 1) return;
    const s = getComputedStyle(node);
    if (s.display === 'none' || s.visibility === 'hidden' || parseFloat(s.opacity) === 0) return;
    if (node.classList && node.classList.contains('visually-hidden')) return;
    for (const c of node.childNodes) walk(c);
  };
  walk(first);
  // connector segments: the spine, the per-card stubs and dots (pseudo-elements), and the wire boxes
  const segs = [];
  const addBox = (name, box) => { if (box.width > 0.2 && box.height > 0.2) segs.push({ name, t: box.top, b: box.bottom, l: box.left, r: box.right, w: px(box.width), h: px(box.height) }); };
  const spine = document.querySelector('.spine');
  if (spine && getComputedStyle(spine).display !== 'none') addBox('spine', spine.getBoundingClientRect());
  for (const w of document.querySelectorAll('.wire')) {
    if (getComputedStyle(w).display === 'none') continue;
    for (const i of w.children) addBox(w.className.replace('wire ', '') + ' ' + i.className, i.getBoundingClientRect());
  }
  // pseudo-element stubs and dots: reconstruct from the card box plus the computed pseudo geometry
  for (const n of document.querySelectorAll('.map .node')) {
    for (const pseudo of ['::before', '::after']) {
      const ps = getComputedStyle(n, pseudo);
      if (ps.content === 'none' || ps.display === 'none') continue;
      const nb = n.getBoundingClientRect();
      const left = parseFloat(ps.left), top = parseFloat(ps.top), w = parseFloat(ps.width), h = parseFloat(ps.height);
      if (!isFinite(left) || !isFinite(w) || w <= 0) continue;
      addBox(n.className.split(' ').pop() + pseudo, { left: nb.left + left, top: nb.top + top, right: nb.left + left + w, bottom: nb.top + top + h, width: w, height: h });
    }
  }
  // the second run: the four application-step nodes and the connectors between them (from 768 up)
  for (const li of document.querySelectorAll('.steps-list li')) {
    for (const [el, pseudo, label] of [[li, '::after', 'step-connector'], [li.querySelector('.step-text'), '::after', 'step-dot']]) {
      if (!el) continue;
      const ps = getComputedStyle(el, pseudo);
      if (ps.content === 'none' || ps.display === 'none') continue;
      const nb = li.getBoundingClientRect();
      const left = parseFloat(ps.left), top = parseFloat(ps.top), w = parseFloat(ps.width), h = parseFloat(ps.height);
      if (!isFinite(left) || !isFinite(w) || w <= 0) continue;
      addBox(label, { left: nb.left + left, top: nb.top + top, right: nb.left + left + w, bottom: nb.top + top + h, width: w, height: h });
    }
  }
  // orthogonality: every segment is a box, so it is horizontal or vertical by construction; report the axis
  const orth = segs.map(s => ({ name: s.name, axis: s.w >= s.h ? 'horizontal' : 'vertical', w: s.w, h: s.h }));
  // clearance: smallest gap between any connector segment and any rendered text box
  let worst = null, overlaps = 0;
  const gap = (a, b) => {
    const dx = Math.max(b.l - a.r, a.l - b.r, 0);
    const dy = Math.max(b.t - a.b, a.t - b.b, 0);
    return (dx === 0 && dy === 0) ? -1 : Math.sqrt(dx * dx + dy * dy);
  };
  for (const s of segs) for (const t of textRects) {
    const g = gap(s, t);
    if (g < 0) overlaps++;
    if (worst === null || g < worst.g) worst = { g: px(g), seg: s.name, text: t.s };
  }
  // svg text, if any ever appears: rendered size is the computed font size times the element's screen transform
  const svgText = [];
  for (const t of document.querySelectorAll('svg text')) {
    const m = t.getScreenCTM ? t.getScreenCTM() : null;
    const scale = m ? Math.sqrt(Math.abs(m.a * m.d - m.b * m.c)) : 1;
    svgText.push({ text: t.textContent.trim().slice(0, 20), declared: px(parseFloat(getComputedStyle(t).fontSize)), rendered: px(parseFloat(getComputedStyle(t).fontSize) * scale) });
  }
  const box = (sel) => { const e = document.querySelector(sel); if (!e) return null; const r = e.getBoundingClientRect(); return { top: px(r.top + scrollY), bottom: px(r.bottom + scrollY), h: px(r.height) }; };
  const ctaH = [...document.querySelectorAll('.cta')].map(a => px(a.getBoundingClientRect().height));
  const ctaW = [...document.querySelectorAll('.cta')].map(a => px(a.getBoundingClientRect().width));
  const ctaLines = [...document.querySelectorAll('.cta span:first-child')].map(s => s.getClientRects().length);
  // Characters a line, measured on the rendered line boxes rather than computed from a track width: for every text
  // node in the node's body, count its client rects (lines) and its characters, then divide. The map's prose is the
  // thing the track ratio is FOR, so it is measured at every row like the fold.
  const measureOf = (sel) => {
    const el = document.querySelector(sel); if (!el) return null;
    let chars = 0, lines = 0;
    const w = (n) => {
      if (n.nodeType === 3) { const t = n.textContent.trim(); if (t) { const rg = document.createRange(); rg.selectNodeContents(n); chars += t.length; lines += rg.getClientRects().length; } return; }
      if (n.nodeType === 1) for (const c of n.childNodes) w(c);
    };
    w(el);
    return lines ? px(chars / lines) : null;
  };
  // The two door BLOCKS (card plus its tail). The split's arms are solved from grid edges now, but an unequal pair
  // is a DD-14 failure in its own right, so both are reported rather than only the first.
  const blockOf = (card, tail) => { const c = document.querySelector(card), t = document.querySelector(tail); if (!c) return null; const cb = c.getBoundingClientRect(); const tb = t ? t.getBoundingClientRect() : null; return px(cb.height + (tb && (Math.abs(tb.top - cb.bottom) < 2 && Math.abs(tb.left - cb.left) < 2) ? tb.height : 0)); };
  // Where each arm actually lands inside its own door card, measured from the card's top edge.
  const attachOf = (segName, card) => {
    const c = document.querySelector(card); if (!c) return null;
    const s = segs.find(x => x.name.indexOf(segName) >= 0); if (!s) return null;
    return px((s.t + s.b) / 2 - c.getBoundingClientRect().top);
  };
  const ratio2 = (a, b) => { const l1 = lum(a), l2 = lum(b); return Math.round(((Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)) * 100) / 100; };
  function lum(c) { const n = (c.match(/[\\d.]+/g) || []).slice(0, 3).map(Number).map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]; }
  const rs = getComputedStyle(document.documentElement);
  const val = (n) => { const d = document.createElement('span'); d.style.color = rs.getPropertyValue(n).trim(); document.body.appendChild(d); const c = getComputedStyle(d).color; d.remove(); return c; };
  const ink = val('--m23-ink'), line = val('--m23-line'), bg = val('--color-bg'), surf = val('--color-surface'), tint = val('--color-anywhere-tint');
  return {
    h1: { size: px(parseFloat(cs.fontSize)), lh: px(lh), lines, box: box('h1') },
    header: box('.site-header'), prov: box('.provenance'), map: box('.map'), banner: box('.banner'),
    cardG: box('.node--georgetown'), cardA: box('.node--anywhere'), lineG: box('.place-line--georgetown'), lineA: box('.place-line--anywhere'),
    admissions: box('.node--admissions'), program: box('.node--program'),
    blockG: blockOf('.node--georgetown', '.place-line--georgetown'), blockA: blockOf('.node--anywhere', '.place-line--anywhere'),
    attachG: attachOf('w-up', '.node--georgetown'), attachA: attachOf('w-down', '.node--anywhere'),
    measureAdm: measureOf('.node--admissions .node-body'), measureProg: measureOf('.node--program .node-body'),
    contrast: { inkBg: ratio2(ink, bg), inkSurface: ratio2(ink, surf), inkTint: ratio2(ink, tint), lineBg: ratio2(line, bg), lineSurface: ratio2(line, surf), lineTint: ratio2(line, tint) },
    ctaH, ctaW, ctaLines, segs: orth, worst, overlaps, svgText,
    docH: document.documentElement.scrollHeight, scrollW: document.documentElement.scrollWidth,
  };
})()`;

(async () => {
  let chromium;
  for (const p of findPlaywright()) { try { ({ chromium } = createRequire(join(p, 'package.json'))(p)); break; } catch (e) {} }
  const srv = await serve(); const port = srv.address().port;
  let browser;
  try { browser = await chromium.launch(); } catch (e) {
    const root = join(os.homedir(), 'Library/Caches/ms-playwright');
    const exe = readdirSync(root).filter(d => /^chromium-\d+$/.test(d)).sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]))
      .map(d => join(root, d, 'chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing')).find(existsSync);
    browser = await chromium.launch({ executablePath: exe });
  }
  const page = await (await browser.newContext({ deviceScaleFactor: 1 })).newPage();
  const out = ['# M23 measurements', '', `Run ${new Date().toISOString()}; Chromium ${browser.version()}.`, '',
    '| Row | h1 px | h1 lines | h1 bottom | prov bottom | map top | map bottom | card G h | tail G h | card A h | banner top | banner bottom | CTA heights | CTA label lines |', '|---|---|---|---|---|---|---|---|---|---|---|---|---|---|'];
  const doors = ['', '## The two door blocks, the arms that land on them, and the map\'s measure', '',
    'A block is a door card plus its own tail where the tail is joined to it. The arms are measured from each card\'s own top edge, not computed from the CSS: the split is anchored to grid edges, and this is the check that it is. A negative arm figure, or one larger than the card, means the arm is a vertical entering the card\'s top or bottom edge rather than a horizontal entering its side: what matters is that the two doors report the same number.', '',
    '| Row | block G | block A | difference | arm into G | arm into A | CTA widths | ADMISSIONS characters a line | THE PROGRAM characters a line |', '|---|---|---|---|---|---|---|---|---|'];
  const clear = ['', '## Connector geometry and clearance', '', '| Row | segments | all orthogonal | overlapping segment/label pairs | smallest clearance to rendered text | segment | nearest text |', '|---|---|---|---|---|---|---|'];
  const svg = [];
  let contrast = null;
  for (const [row, w, h] of ROWS) {
    await page.setViewportSize({ width: w, height: h });
    await page.goto(`http://127.0.0.1:${port}${REL}/index.html`, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts ? document.fonts.ready : null);
    await page.waitForTimeout(120);
    const m = await page.evaluate(PROBE);
    out.push(`| ${row} | ${m.h1.size} | ${m.h1.lines} | ${m.h1.box.bottom} | ${m.prov.bottom} | ${m.map.top} | ${m.map.bottom} | ${m.cardG?.h ?? ''} | ${m.lineG?.h ?? ''} | ${m.cardA?.h ?? ''} | ${m.banner?.top ?? ''} | ${m.banner?.bottom ?? ''} | ${m.ctaH.join(', ')} | ${m.ctaLines.join(', ')} |`);
    const nonOrth = m.segs.filter(s => s.w > 0.5 && s.h > 0.5 && Math.min(s.w, s.h) > 6);
    clear.push(`| ${row} | ${m.segs.length} | ${nonOrth.length === 0 ? 'yes' : 'NO: ' + nonOrth.map(s => s.name).join(', ')} | ${m.overlaps} | ${m.worst ? m.worst.g + 'px' : 'n/a'} | ${m.worst ? m.worst.seg : ''} | ${m.worst ? '"' + m.worst.text + '"' : ''} |`);
    const diff = (m.blockG != null && m.blockA != null) ? Math.round(Math.abs(m.blockG - m.blockA) * 100) / 100 : '';
    doors.push(`| ${row} | ${m.blockG ?? ''} | ${m.blockA ?? ''} | ${diff} | ${m.attachG ?? ''} | ${m.attachA ?? ''} | ${m.ctaW.join(', ')} | ${m.measureAdm ?? ''} | ${m.measureProg ?? ''} |`);
    contrast = m.contrast;
    if (m.svgText.length) svg.push(`${row}: ` + m.svgText.map(t => `"${t.text}" declared ${t.declared}px rendered ${t.rendered}px`).join('; '));
  }
  out.push(...doors, ...clear, '', '## Contrast of the drawing (computed from the rendered token values)', '',
    '| Object | Token | On the page ground | On the surface | On the GT Anywhere tint |', '|---|---|---|---|---|',
    `| Every card edge, strip rule, tail edge, banner edge, mark chip | \`--color-border-strong\` | ${contrast.inkBg} | ${contrast.inkSurface} | ${contrast.inkTint} |`,
    `| Every connector segment and junction dot | \`--color-accent-text\` | ${contrast.lineBg} | ${contrast.lineSurface} | ${contrast.lineTint} |`,
    '', 'WCAG 1.4.11 asks 3:1 of a graphical object required to understand the content. In this direction the drawing IS the content, so every line in it is measured against what sits behind it.',
    '', '## SVG text', '', svg.length ? svg.join('\n') : 'None: the diagram carries no `<svg>` element and no SVG text. Every card, label and connector is an HTML box, so no type sits inside a scaled viewBox (the M10 defect).');
  writeFileSync(join(REPO, REL.slice(1), 'qa', 'measurements.md'), out.join('\n') + '\n');
  console.log(out.join('\n'));
  await browser.close(); srv.close();
})();
