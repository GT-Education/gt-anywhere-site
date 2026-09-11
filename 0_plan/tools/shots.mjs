#!/usr/bin/env node
// Viewport-matrix QA runner for the landing mocks (runbook 17 section 4). Machine-local: it imports Playwright from the
// npx cache that the Playwright MCP server already uses and drives the Chromium in ~/Library/Caches/ms-playwright, so the
// repository gains no dependency (D-028 pending). Usage: node 0_plan/tools/shots.mjs 0_plan/mockups/Mnn-slug
// Measures all 19 rows; writes qa/fold.md (fold bottoms, continuation, reduced motion, root-font doubling, console errors),
// viewport screenshots for the key rows (all rows with --all), qa/V2-full.jpg and qa/V14-full.jpg. Exit 1 when a required row fails.
import { createRequire } from 'node:module';
import { readdirSync, existsSync, mkdirSync, writeFileSync, readFileSync, statSync } from 'node:fs';
import { join, resolve, extname } from 'node:path';
import http from 'node:http';
import os from 'node:os';

const REPO = resolve(new URL('../..', import.meta.url).pathname);
const folderArg = process.argv[2];
if (!folderArg) { console.error('usage: node 0_plan/tools/shots.mjs 0_plan/mockups/Mnn-slug'); process.exit(2); }
const folder = resolve(REPO, folderArg);
if (!existsSync(join(folder, 'index.html'))) { console.error('no index.html in ' + folder); process.exit(2); }

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
const ALL = process.argv.includes('--all');
const KEY = new Set(['V2', 'V5', 'V9', 'V13', 'V14', 'V16', 'V18']); // screenshots kept for these rows unless --all; every row is measured
const ROWS = [
  ['V1', 360, 740, 'fold'], ['V2', 375, 629, 'fold'], ['V3', 390, 664, 'fold'], ['V4', 393, 659, 'fold'], ['V5', 414, 715, 'fold'],
  ['V6', 412, 839, 'fold'], ['V7', 402, 681, 'fold'], ['V8', 430, 739, 'fold'], ['V9', 390, 844, 'emptiness'], ['V10', 750, 342, 'fold'],
  ['V11', 768, 1024, 'fold'], ['V12', 834, 1194, 'fold'], ['V13', 1024, 768, 'fold'], ['V14', 1280, 720, 'fold'], ['V15', 1366, 648, 'fold'],
  ['V16', 1440, 900, 'fold'], ['V17', 1920, 960, 'fold'], ['V18', 320, 256, 'reflow'], ['V19', 1024, 576, 'zoom'],
];
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.ttf': 'font/ttf', '.woff2': 'font/woff2', '.json': 'application/json' };
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
const FOLD_JS = `(() => {
  const q = (sel) => document.querySelector(sel);
  const byText = (t) => { for (const el of document.querySelectorAll('p, span, div, small')) if (el.children.length === 0 && el.textContent.trim() === t) return el; return null; };
  const doors = [...document.querySelectorAll('a[data-event="door_click"][data-placement="first_screen"]')];
  const els = {
    header: q('[data-fold="header"]') || q('header'),
    h1: q('[data-fold="h1"]') || q('h1'),
    provenance: q('[data-fold="provenance"]') || q('[data-slot="provenance"]') || byText('The gifted school in the Alpha School network.'),
    'cta-georgetown': q('[data-fold="cta-georgetown"]') || doors.find(a => a.dataset.school === 'georgetown') || null,
    'cta-anywhere': q('[data-fold="cta-anywhere"]') || doors.find(a => a.dataset.school === 'anywhere') || null,
  };
  const out = {}; for (const [k, el] of Object.entries(els)) out[k] = el ? Math.round(el.getBoundingClientRect().bottom + window.scrollY) : null;
  const vh = window.innerHeight; let cut = false;
  for (const el of document.body.querySelectorAll('section, div, table, footer, p, h2')) { const r = el.getBoundingClientRect(); if (r.height > 8 && r.top < vh && r.bottom > vh) { cut = true; break; } }
  return { bottoms: out, cut, scrollWidth: document.documentElement.scrollWidth, docHeight: document.documentElement.scrollHeight };
})()`;
const MOTION_JS = `(() => { const bad = []; for (const el of document.querySelectorAll('*')) { for (const pseudo of [null, '::before', '::after']) { const cs = getComputedStyle(el, pseudo); const td = cs.transitionDuration.split(',').map(s => parseFloat(s) || 0); const ad = cs.animationDuration.split(',').map(s => parseFloat(s) || 0); if (td.some(d => d > 0) || ad.some(d => d > 0)) { bad.push((el.tagName.toLowerCase() + (el.className ? '.' + String(el.className).split(' ')[0] : '') + (pseudo || '')) + ' ' + cs.transitionDuration + ' ' + cs.animationDuration); if (bad.length > 40) return bad; } } } return bad; })()`;

(async () => {
  const pwPaths = findPlaywright();
  let chromium, used;
  for (const p of pwPaths) { try { const require = createRequire(join(p, 'package.json')); ({ chromium } = require(p)); used = p; break; } catch (e) { /* try the next cache entry */ } }
  if (!chromium) throw new Error('could not load playwright from ' + pwPaths.join(', '));
  const srv = await serve(); const port = srv.address().port;
  const rel = folder.slice(REPO.length).replace(/\\/g, '/');
  const url = `http://127.0.0.1:${port}${rel}/index.html`;
  let browser;
  try { browser = await chromium.launch(); } catch (e) { try { browser = await chromium.launch({ channel: 'chrome' }); } catch (e2) { throw new Error('no Chromium available: ' + e.message.split('\n')[0]); } }
  const qa = join(folder, 'qa'); mkdirSync(qa, { recursive: true });
  const lines = ['# Fold and matrix run', '', `Runner: \`0_plan/tools/shots.mjs\` with Playwright from \`${used}\`; ${new Date().toISOString()}; page \`${rel}/index.html\`.`, '',
    '| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |', '|---|---|---|---|---|---|---|---|---|---|---|'];
  const consoleErrors = new Set(); let failures = 0;
  const ctx = await browser.newContext({ deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.add(m.text().slice(0, 160)); });
  page.on('pageerror', (e) => consoleErrors.add(String(e).slice(0, 160)));
  for (const [row, w, h, rule] of ROWS) {
    await page.setViewportSize({ width: w, height: h });
    await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts ? document.fonts.ready : null);
    await page.waitForTimeout(150);
    const m = await page.evaluate(FOLD_JS);
    const limit = rule === 'fold' ? h - 24 : null;
    const need = ['header', 'h1', 'provenance', 'cta-georgetown', 'cta-anywhere'];
    let result;
    if (rule === 'fold') {
      const missing = need.filter(k => m.bottoms[k] == null);
      const over = need.filter(k => m.bottoms[k] != null && m.bottoms[k] > limit);
      result = missing.length ? `FAIL missing ${missing.join(', ')}` : over.length ? `FAIL over: ${over.join(', ')}` : (m.cut ? 'PASS' : 'PASS (no band cut: check for a false floor)');
      if (result.startsWith('FAIL')) failures++;
    } else if (rule === 'reflow') {
      result = m.scrollWidth <= w ? 'PASS no horizontal scroll' : `FAIL scrollWidth ${m.scrollWidth}`; if (result.startsWith('FAIL')) failures++;
    } else if (rule === 'zoom') {
      result = `report: scrollWidth ${m.scrollWidth}` + (m.scrollWidth > w ? ' (horizontal scroll)' : '');
    } else { result = `report: page height ${m.docHeight}`; }
    lines.push(`| ${row} | ${w} by ${h} | ${rule} | ${limit ?? ''} | ${m.bottoms.header ?? ''} | ${m.bottoms.h1 ?? ''} | ${m.bottoms.provenance ?? ''} | ${m.bottoms['cta-georgetown'] ?? ''} | ${m.bottoms['cta-anywhere'] ?? ''} | ${m.cut ? 'yes' : 'no'} | ${result} |`);
    if (KEY.has(row) || ALL) await page.screenshot({ path: join(qa, `${row}.jpg`), type: 'jpeg', quality: w >= 1024 ? 55 : 68 });
    if (row === 'V2' || row === 'V14') {
      // walk the page so lazy images load, wait for every image to decode, return to the top, then capture the whole page
      await page.evaluate(async () => { const step = Math.max(200, window.innerHeight - 40); for (let y = 0; y < document.documentElement.scrollHeight; y += step) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); } window.scrollTo(0, 0); });
      // lazy images below the fold never settle decode(); make them eager for the capture and race each decode against a 3 s timeout
      await page.evaluate(() => Promise.all([...document.images].map(i => { i.loading = 'eager'; const d = i.decode ? i.decode() : Promise.resolve(); return Promise.race([d.catch(() => null), new Promise(r => setTimeout(r, 3000))]); })));
      await page.waitForTimeout(150);
      await page.screenshot({ path: join(qa, `${row}-full.jpg`), type: 'jpeg', quality: 48, fullPage: true });
    }
  }
  // keyboard focus captures at V14: the first door CTA, then the GT Anywhere footer mark link
  await page.setViewportSize({ width: 1280, height: 720 }); await page.goto(url, { waitUntil: 'load' });
  const cta = await page.$('a[data-event="door_click"][data-placement="first_screen"]');
  if (cta) { await cta.focus(); await page.waitForTimeout(80); await page.screenshot({ path: join(qa, 'focus-cta.jpg'), type: 'jpeg', quality: 60 }); }
  const footLink = await page.$('footer a[href*="anywhere.gt.school"]');
  if (footLink) { await footLink.scrollIntoViewIfNeeded(); await footLink.focus(); await page.waitForTimeout(80); await page.screenshot({ path: join(qa, 'focus-footer.jpg'), type: 'jpeg', quality: 60 }); }
  // forced colours at V14
  const ctx3 = await browser.newContext({ forcedColors: 'active' }); const p3 = await ctx3.newPage();
  await p3.setViewportSize({ width: 1280, height: 720 }); await p3.goto(url, { waitUntil: 'load' });
  await p3.screenshot({ path: join(qa, 'forced-colors.jpg'), type: 'jpeg', quality: 60 }); await ctx3.close();
  // reduced motion at V14
  const ctx2 = await browser.newContext({ reducedMotion: 'reduce' }); const p2 = await ctx2.newPage();
  await p2.setViewportSize({ width: 1280, height: 720 }); await p2.goto(url, { waitUntil: 'load' });
  const motion = await p2.evaluate(MOTION_JS); await ctx2.close();
  // root font doubled at V2
  await page.setViewportSize({ width: 375, height: 629 }); await page.goto(url, { waitUntil: 'load' });
  await page.evaluate(() => { document.documentElement.style.fontSize = '32px'; });
  await page.waitForTimeout(100);
  const zoomW = await page.evaluate(() => document.documentElement.scrollWidth);
  await page.screenshot({ path: join(qa, 'V2-rootx2.jpg'), type: 'jpeg', quality: 72 });
  lines.push('', '## Reduced motion (V14, prefers-reduced-motion: reduce)', '', motion.length ? `FAIL: ${motion.length} element(s) keep a non-zero duration: ${motion.slice(0, 12).join('; ')}` : 'PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).');
  if (motion.length) failures++;
  lines.push('', '## Root font doubled at V2 (a stand-in for a large text setting)', '', zoomW <= 375 ? 'PASS: no horizontal scroll at 375 with a 32px root.' : `FAIL: scrollWidth ${zoomW} at 375 with a 32px root.`);
  if (zoomW > 375) failures++;
  lines.push('', '## Focus and forced colours', '', `Captures: ${cta ? 'focus-cta.jpg (first door CTA focused)' : 'no first-screen door CTA found for the focus capture'}; ${footLink ? 'focus-footer.jpg (GT Anywhere footer link focused)' : 'no GT Anywhere footer link found'}; forced-colors.jpg (forced-colors: active at V14). The critics judge these by eye.`);
  lines.push('', '## Console', '', consoleErrors.size ? `FAIL: ${[...consoleErrors].join(' | ')}` : 'PASS: no console errors.');
  if (consoleErrors.size) failures++;
  lines.push('', `## Result: ${failures ? failures + ' failure(s)' : 'all required rows pass'}`);
  writeFileSync(join(qa, 'fold.md'), lines.join('\n') + '\n');
  await browser.close(); srv.close();
  console.log(lines.slice(4).join('\n'));
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error('shots.mjs: ' + e.message); process.exit(2); });
