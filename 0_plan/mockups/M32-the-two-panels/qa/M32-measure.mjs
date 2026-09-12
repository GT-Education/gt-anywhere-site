#!/usr/bin/env node
// M32 parity and diagnostics probe. Serves the repository the way 0_plan/tools/shots.mjs does, drives the same
// Chromium out of the npx cache, and reports (1) the panel-parity table the brief's Acceptance row asks for, at
// all nineteen matrix rows, and (2) any element whose right edge crosses the viewport at 375 with a 32px root.
// Usage: node 0_plan/mockups/M32-the-two-panels/qa/M32-measure.mjs [--overflow]
import { createRequire } from 'node:module';
import { readdirSync, existsSync, readFileSync, statSync } from 'node:fs';
import { join, resolve, extname } from 'node:path';
import http from 'node:http';
import os from 'node:os';

const REPO = resolve(new URL('../../../..', import.meta.url).pathname);
const rel = '/0_plan/mockups/M32-the-two-panels';
const ROWS = [
  ['V1', 360, 740], ['V2', 375, 629], ['V3', 390, 664], ['V4', 393, 659], ['V5', 414, 715],
  ['V6', 412, 839], ['V7', 402, 681], ['V8', 430, 739], ['V9', 390, 844], ['V10', 750, 342],
  ['V11', 768, 1024], ['V12', 834, 1194], ['V13', 1024, 768], ['V14', 1280, 720], ['V15', 1366, 648],
  ['V16', 1440, 900], ['V17', 1920, 960], ['V18', 320, 256], ['V19', 1024, 576],
];
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.ttf': 'font/ttf', '.jpg': 'image/jpeg', '.png': 'image/png' };
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
const PARITY_JS = `(() => {
  const r = (n) => Math.round(n * 10) / 10;
  const panels = [...document.querySelectorAll('.first-screen .panel')];
  const out = {};
  for (const p of panels) {
    const box = p.getBoundingClientRect();
    const cs = getComputedStyle(p);
    const markBox = p.querySelector('.panel-mark').getBoundingClientRect();
    const img = p.querySelector('.panel-mark img').getBoundingClientRect();
    const label = p.querySelector('.panel-label').getBoundingClientRect();
    const name = p.querySelector('.panel-name').getBoundingClientRect();
    const cta = p.querySelector('.panel-cta').getBoundingClientRect();
    out[p.dataset.door] = {
      w: r(box.width), h: r(box.height),
      padT: r(parseFloat(cs.paddingTop)), padR: r(parseFloat(cs.paddingRight)),
      padB: r(parseFloat(cs.paddingBottom)), padL: r(parseFloat(cs.paddingLeft)),
      plateW: r(markBox.width), plateH: r(markBox.height), markH: r(img.height), markW: r(img.width),
      labelX: r(label.left - box.left), labelY: r(label.top - box.top),
      nameX: r(name.left - box.left), nameY: r(name.top - box.top),
      ctaW: r(cta.width), ctaH: r(cta.height), ctaX: r(cta.left - box.left), ctaY: r(box.bottom - cta.bottom),
    };
  }
  return out;
})()`;
const OVERFLOW_JS = `(() => {
  const w = document.documentElement.clientWidth; const bad = [];
  for (const el of document.querySelectorAll('*')) {
    const b = el.getBoundingClientRect();
    if (b.width < 1 || b.height < 1) continue;
    if (b.right > w + 0.5 || b.left < -0.5) {
      bad.push((el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).join('.') : '')) + ' left ' + Math.round(b.left) + ' right ' + Math.round(b.right) + ' w ' + Math.round(b.width));
    }
  }
  return bad.slice(0, 24);
})()`;

(async () => {
  const pw = findPlaywright(); let chromium;
  for (const p of pw) { try { ({ chromium } = createRequire(join(p, 'package.json'))(p)); break; } catch (e) {} }
  const srv = await serve(); const url = `http://127.0.0.1:${srv.address().port}${rel}/index.html`;
  let browser;
  try { browser = await chromium.launch(); } catch (e) {
    const root = join(os.homedir(), 'Library/Caches/ms-playwright');
    const builds = readdirSync(root).filter(d => /^chromium-\d+$/.test(d)).sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]))
      .map(d => join(root, d, 'chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing')).filter(existsSync);
    for (const exe of builds) { try { browser = await chromium.launch({ executablePath: exe }); break; } catch (e2) {} }
  }
  const page = await (await browser.newContext({ deviceScaleFactor: 1 })).newPage();
  if (process.argv.includes('--overflow')) {
    await page.setViewportSize({ width: 375, height: 629 });
    await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => { document.documentElement.style.fontSize = '32px'; });
    await page.waitForTimeout(200);
    console.log('Elements crossing the viewport at 375 with a 32px root:');
    for (const b of await page.evaluate(OVERFLOW_JS)) console.log('  ' + b);
    await browser.close(); srv.close(); return;
  }
  if (process.argv.includes('--h1')) {
    console.log('| Row | Viewport | h1 size | h1 column | Line box | h1 height | Lines |');
    console.log('|---|---|---|---|---|---|---|');
    for (const [row, w, h] of ROWS) {
      await page.setViewportSize({ width: w, height: h });
      await page.goto(url, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts ? document.fonts.ready : null);
      await page.waitForTimeout(120);
      const m = await page.evaluate(`(() => {
        const el = document.querySelector('h1'); const cs = getComputedStyle(el); const b = el.getBoundingClientRect();
        const lh = parseFloat(cs.lineHeight); const fs = parseFloat(cs.fontSize);
        const rects = (() => { const r = document.createRange(); r.selectNodeContents(el); return r.getClientRects().length; })();
        return { fs: Math.round(fs * 100) / 100, w: Math.round(b.width), lh: Math.round(lh * 100) / 100, h: Math.round(b.height * 10) / 10, lines: Math.round(b.height / lh), rects };
      })()`);
      console.log(`| ${row} | ${w} by ${h} | ${m.fs}px | ${m.w}px | ${m.lh}px | ${m.h}px | ${m.lines} |`);
    }
    await browser.close(); srv.close(); return;
  }
  const keys = ['w', 'h', 'padT', 'padR', 'padB', 'padL', 'plateW', 'plateH', 'markH', 'labelX', 'labelY', 'nameX', 'nameY', 'ctaW', 'ctaH', 'ctaX', 'ctaY'];
  console.log('| Row | Viewport | ' + keys.map(k => k + ' Δ').join(' | ') + ' | Worst Δ | Verdict |');
  console.log('|---|---|' + keys.map(() => '---').join('|') + '|---|---|');
  let worstAll = 0;
  const detail = [];
  for (const [row, w, h] of ROWS) {
    await page.setViewportSize({ width: w, height: h });
    await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts ? document.fonts.ready : null);
    await page.waitForTimeout(120);
    const m = await page.evaluate(PARITY_JS);
    const g = m.georgetown, a = m.anywhere;
    const deltas = keys.map(k => Math.round(Math.abs(g[k] - a[k]) * 10) / 10);
    const worst = Math.max(...deltas); worstAll = Math.max(worstAll, worst);
    console.log(`| ${row} | ${w} by ${h} | ` + deltas.join(' | ') + ` | ${worst} | ${worst <= 2 ? 'equal within 2px' : 'FAIL'} |`);
    detail.push([row, g, a]);
  }
  console.log('\nWorst delta across all nineteen rows: ' + worstAll + 'px');
  console.log('\nAbsolute values, the two contract rows (panel w/h, padding, plate, mark height, CTA box):');
  for (const [row, g, a] of detail.filter(d => ['V2', 'V5', 'V14', 'V16'].includes(d[0]))) {
    console.log(`  ${row} georgetown ` + JSON.stringify(g));
    console.log(`  ${row} anywhere   ` + JSON.stringify(a));
  }
  await browser.close(); srv.close();
})().catch(e => { console.error(e); process.exit(2); });
