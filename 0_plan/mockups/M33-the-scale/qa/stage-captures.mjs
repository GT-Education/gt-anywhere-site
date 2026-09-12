#!/usr/bin/env node
// M33 stage captures. The repo runner (0_plan/tools/shots.mjs) photographs the INITIAL viewport, so
// its forced-colours capture cannot see the scale at all — the scale begins on the third screen. This
// script photographs the stage itself, which is where the direction's defining object actually lives,
// in the normal palette and in both forced-colours palettes, plus a reduced-motion frame.
//
// Written because the M33 critic scored Craft 3 for running these checks and not checking the images
// in. Re-run it whenever styles.css or motion.css changes, or the images go stale:
//
//   node 0_plan/mockups/M33-the-scale/qa/stage-captures.mjs
//
// Machine-local, like shots.mjs: it imports Playwright from the npx cache and serves the repository
// from 127.0.0.1, so the repository gains no dependency and no production host is ever contacted.
import { createRequire } from 'node:module';
import { readdirSync, existsSync, statSync, readFileSync, mkdirSync } from 'node:fs';
import { join, extname, resolve, dirname } from 'node:path';
import http from 'node:http';
import os from 'node:os';

const QA = dirname(new URL(import.meta.url).pathname);
const REPO = resolve(QA, '../../../..');
const REL = '/0_plan/mockups/M33-the-scale/index.html';
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml', '.ttf': 'font/ttf', '.webp': 'image/webp' };

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
function findPlaywright() {
  const base = join(os.homedir(), '.npm', '_npx'); const hits = [];
  for (const d of (existsSync(base) ? readdirSync(base) : [])) {
    const p = join(base, d, 'node_modules', 'playwright');
    if (existsSync(join(p, 'package.json'))) hits.push(p);
  }
  hits.sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs); return hits;
}
function cachedBuilds() {
  const root = join(os.homedir(), 'Library/Caches/ms-playwright');
  try {
    return readdirSync(root).filter(d => /^chromium-\d+$/.test(d)).sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]))
      .map(d => join(root, d, 'chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing')).filter(existsSync);
  } catch (e) { return []; }
}

// Scroll so the stage is on screen, then report what the scale is actually doing there.
const PROBE = `(() => {
  const s = document.querySelector('.scale'), sr = s.getBoundingClientRect();
  const fine = document.querySelector('.scale-fine');
  const prog = document.querySelector('.scale-progress');
  const cs = getComputedStyle(s);
  // The vertical rail's spine is its border-LEFT (it sits on the page's own left datum) and the
  // horizontal rail's is its border-bottom; read the side that is actually drawn. Ticks: border-top
  // when vertical, border-left when horizontal. Marker: border-left / border-bottom.
  const vertical = cs.borderBottomWidth === '0px';
  const tick = getComputedStyle(document.querySelector('.scale-major i'));
  const mk = getComputedStyle(prog);
  return {
    orientation: vertical ? 'vertical' : 'horizontal',
    majors: document.querySelectorAll('.scale-major i').length,
    fineBackgroundImage: getComputedStyle(fine).backgroundImage === 'none' ? 'none (suppressed)' : 'painted',
    majorBorder: (vertical ? tick.borderTopWidth + ' ' + tick.borderTopColor : tick.borderLeftWidth + ' ' + tick.borderLeftColor),
    markerWidth: vertical ? mk.borderLeftWidth : mk.borderBottomWidth,
    markerTransform: mk.transform,
    animations: document.getAnimations().length
  };
})()`;

(async () => {
  let chromium;
  for (const p of findPlaywright()) { try { const require = createRequire(join(p, 'package.json')); ({ chromium } = require(p)); break; } catch (e) { /* next */ } }
  if (!chromium) throw new Error('no playwright in the npx cache');
  let browser;
  try { browser = await chromium.launch(); }
  catch (e) { for (const exe of cachedBuilds()) { try { browser = await chromium.launch({ executablePath: exe }); break; } catch (e2) { /* next */ } } }
  if (!browser) throw new Error('no Chromium available');

  const srv = await serve(); const url = `http://127.0.0.1:${srv.address().port}${REL}`;
  mkdirSync(QA, { recursive: true });
  const lines = ['# Stage captures', '', `Written by \`qa/stage-captures.mjs\`, ${new Date().toISOString()}, Chromium ${browser.version()}.`, '',
    'The repo runner photographs the initial viewport. The scale begins on the third screen, so these are the captures that show it.', '',
    '| File | Viewport | Mode | Where | Orientation | Majors | Fine gradient | Major ink | Marker | Animations |', '|---|---|---|---|---|---|---|---|---|---|'];

  const jobs = [
    { file: 'stage-normal-top.jpg', w: 1440, h: 900, mode: 'normal', at: 'stage top (marker at 0)', off: 0 },
    { file: 'stage-normal-mid.jpg', w: 1440, h: 900, mode: 'normal', at: 'mid-range', off: 0.5 },
    { file: 'stage-forced-light.jpg', w: 1440, h: 900, mode: 'forced-light', at: 'mid-range', off: 0.5 },
    { file: 'stage-forced-dark.jpg', w: 1440, h: 900, mode: 'forced-dark', at: 'mid-range', off: 0.5 },
    { file: 'stage-reduced-motion.jpg', w: 1440, h: 900, mode: 'reduced', at: 'stage top (marker at rest, full length)', off: 0 },
    { file: 'stage-phone-normal.jpg', w: 390, h: 844, mode: 'normal', at: 'stage top', off: 0 },
    { file: 'stage-phone-forced-light.jpg', w: 390, h: 844, mode: 'forced-light', at: 'mid-range', off: 0.5 },
  ];
  const crops = [
    { file: 'rail-normal.png', mode: 'normal' },
    { file: 'rail-forced-light.png', mode: 'forced-light' },
    { file: 'rail-forced-dark.png', mode: 'forced-dark' },
  ];

  const ctxFor = (m, w, h, dsf) => browser.newContext({
    viewport: { width: w, height: h }, deviceScaleFactor: dsf,
    forcedColors: m.startsWith('forced') ? 'active' : 'none',
    colorScheme: m === 'forced-dark' ? 'dark' : 'light',
    reducedMotion: m === 'reduced' ? 'reduce' : 'no-preference',
  });

  for (const j of jobs) {
    const ctx = await ctxFor(j.mode, j.w, j.h, 2); const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts ? document.fonts.ready : null); await page.waitForTimeout(200);
    // The marker's range is `contain 0% exit 100%`: it starts when the stage's top edge reaches the top
    // of the viewport and ends when that edge leaves it, so the sweep spans the stage's own height.
    await page.evaluate((frac) => {
      const g = document.querySelector('.story-grid').getBoundingClientRect();
      const top = g.top + window.scrollY;
      window.scrollTo(0, Math.round(top + frac * g.height));
    }, j.off);
    await page.waitForTimeout(300);
    const p = await page.evaluate(PROBE);
    await page.screenshot({ path: join(QA, j.file), type: 'jpeg', quality: 72 });
    lines.push(`| \`${j.file}\` | ${j.w} by ${j.h} | ${j.mode} | ${j.at} | ${p.orientation} | ${p.majors} | ${p.fineBackgroundImage} | ${p.majorBorder} | ${p.markerWidth} ${p.markerTransform} | ${p.animations} |`);
    console.log('wrote', j.file, JSON.stringify(p));
    await ctx.close();
  }

  // Magnified crops of the rail itself, so a reader can count the ticks without rebuilding the harness.
  for (const c of crops) {
    const ctx = await ctxFor(c.mode, 1440, 900, 3); const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts ? document.fonts.ready : null); await page.waitForTimeout(200);
    await page.evaluate(() => { const g = document.querySelector('.story-grid').getBoundingClientRect(); window.scrollTo(0, g.top + window.scrollY + 500); });
    await page.waitForTimeout(300);
    const box = await page.evaluate(() => { const r = document.querySelector('.scale').getBoundingClientRect(); return { x: Math.round(r.left) - 8, y: 80, w: Math.round(r.width) + 16, h: 420 }; });
    await page.screenshot({ path: join(QA, c.file), clip: { x: box.x, y: box.y, width: box.w, height: box.h } });
    console.log('wrote', c.file);
    await ctx.close();
  }
  lines.push('', `Rail crops at 3x device scale, 420px of the rail: \`${crops.map(c => c.file).join('`, `')}\`.`);
  const { writeFileSync } = await import('node:fs');
  writeFileSync(join(QA, 'stage.md'), lines.join('\n') + '\n');
  await browser.close(); srv.close();
})().catch((e) => { console.error('stage-captures: ' + e.message); process.exit(2); });
