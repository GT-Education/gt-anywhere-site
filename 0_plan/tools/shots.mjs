#!/usr/bin/env node
// Viewport-matrix QA runner for the landing mocks (runbook 17 section 4). Machine-local: it imports Playwright from the
// npx cache that the Playwright MCP server already uses and drives the Chromium in ~/Library/Caches/ms-playwright, so the
// repository gains no dependency (D-028 pending). Usage: node 0_plan/tools/shots.mjs 0_plan/mockups/Mnn-slug
// Measures all 19 rows; writes qa/fold.md (fold bottoms, continuation, reduced motion, root-font doubling, console errors),
// viewport screenshots for every row (--key for the seven key rows only), qa/V2-full.jpg and qa/V14-full.jpg. Exit 1 when a required row fails.
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
// Every row is captured. A key-row-only default left stale screenshots whenever a fix touched another
// row, and a critic then scored the stale image: that cost a full review pass on M15's 834 by 1194 row,
// where the capture predated the fix by an hour. --key restores the old subset for a quick local look;
// --all is kept as a no-op so existing commands and documentation still work.
const KEY = new Set(['V2', 'V5', 'V9', 'V13', 'V14', 'V16', 'V18']);
const ALL = !process.argv.includes('--key');
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
  // A band counts as cut only when its INK (text, a painted edge, an image) starts below the last door CTA,
  // is visible at least 8px above the viewport bottom, and continues past that edge. Section padding and the
  // empty leading of a line box are not ink: they made empty space read as continuation (M02 critic, V16).
  const TRANSPARENT = /rgba\\(\\s*0,\\s*0,\\s*0,\\s*0\\s*\\)|^transparent$/;
  const bgOf = (el) => { const c = getComputedStyle(el).backgroundColor; return TRANSPARENT.test(c) ? null : c; };
  const behind = (el) => { for (let p = el.parentElement; p; p = p.parentElement) { const c = bgOf(p); if (c) return c; } return bgOf(document.documentElement) || 'rgb(255, 255, 255)'; };
  // A surface change only reads as an edge when a reader can see it. M15's first-screen tint is
  // --color-surface on --color-bg, a computed 1.10:1 step, which both critics read as blank cream.
  const lum = (c) => { const n = (c.match(/[\\d.]+/g) || []).slice(0, 3).map(Number).map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]; };
  const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b); return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05); };
  const VISIBLE_EDGE = 1.2;
  const paints = (el) => {
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) return false;
    if (['IMG', 'SVG', 'HR', 'CANVAS', 'VIDEO', 'INPUT', 'BUTTON', 'SELECT', 'TEXTAREA'].includes(el.tagName)) return true;
    if (el.tagName.toLowerCase() === 'svg') return true;
    if (cs.backgroundImage && cs.backgroundImage !== 'none') return true;
    const own = bgOf(el); if (own) { const back = behind(el); if (own !== back && ratio(own, back) >= VISIBLE_EDGE) return true; }
    for (const side of ['Top', 'Right', 'Bottom', 'Left']) {
      if (parseFloat(cs['border' + side + 'Width']) > 0 && cs['border' + side + 'Style'] !== 'none' && !TRANSPARENT.test(cs['border' + side + 'Color'])) return true;
    }
    if (cs.boxShadow && cs.boxShadow !== 'none') return true;
    if (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0) return true;
    return false;
  };
  // Every individual piece of CONTENT ink in a subtree: a line of text, an image, a thin drawn rule.
  // A container's own background fill is deliberately excluded. Unioning it with the text was the bug
  // Astra found on M15 at 834 by 1194: the proof band's footnotes end at 1137 and its tint runs to 1360,
  // so the union straddled the edge while a reader saw a finished section above 57px of padding.
  // A surface that genuinely begins near the fold and runs off it is caught by the sampling rule below.
  const REPLACED = ['IMG', 'SVG', 'CANVAS', 'VIDEO', 'INPUT', 'BUTTON', 'SELECT', 'TEXTAREA'];
  const contentInk = (root) => {
    const rects = [];
    const add = (r, what) => { if (r && r.height > 0 && r.width > 0) rects.push({ top: r.top, bottom: r.bottom, what }); };
    const walk = (node) => {
      if (node.nodeType === 3) { if (node.textContent.trim()) { const rg = document.createRange(); rg.selectNodeContents(node); for (const r of rg.getClientRects()) add(r, 'text'); } return; }
      if (node.nodeType !== 1) return;
      const cs = getComputedStyle(node);
      if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) return;
      const box = node.getBoundingClientRect();
      const tag = node.tagName.toUpperCase();
      if (REPLACED.includes(tag) || node.tagName.toLowerCase() === 'svg') add(box, tag.toLowerCase());
      else if (paints(node) && box.height <= 8) add(box, 'rule');
      // A hairline drawn as a border on a tall block is a rule a reader sees, so record the painted edge
      // itself rather than the block. Only horizontal edges: a vertical divider running off the bottom is
      // the kind of thing that made an empty screen look continued.
      for (const side of ['Top', 'Bottom']) {
        const w = parseFloat(cs['border' + side + 'Width']);
        if (w > 0 && cs['border' + side + 'Style'] !== 'none' && !TRANSPARENT.test(cs['border' + side + 'Color'])) {
          const y = side === 'Top' ? box.top : box.bottom - w;
          add({ top: y, bottom: y + w, width: box.width, height: w }, 'rule');
        }
      }
      for (const pseudo of ['::before', '::after']) { const ps = getComputedStyle(node, pseudo); if (ps.content && ps.content !== 'none' && ps.content !== 'normal' && box.height <= 8) add(box, 'mark'); }
      for (const c of node.childNodes) walk(c);
    };
    walk(root);
    return rects;
  };
  const lastCta = Math.max(out['cta-georgetown'] || 0, out['cta-anywhere'] || 0) - window.scrollY;
  let cutBy = null;
  // The contract reserves the bottom 24px of every fold row. So the test is the contract's own: below the
  // last door CTA, visible content must reach into that reserved band, and more content must lie beyond the
  // edge. A section whose text finishes well above the edge and leaves only padding showing is the false
  // floor this catches, however tall its tinted box happens to be.
  const RESERVED = 24;
  let lastVisible = -Infinity, below = null, deepest = null;
  for (const k of contentInk(document.body)) {
    if (k.bottom <= lastCta) continue;
    // At least 4px of the piece must actually show. A line whose top sits a fraction of a pixel above the
    // edge is not visible content, which is how M15's 834 by 1194 row passed while reading as finished.
    // Count a piece that is wholly in view, or one cut by the edge with at least 4px showing. A line whose
    // top sits a fraction of a pixel above the edge shows nothing, which is how M15's 834 by 1194 row passed.
    if (k.top < vh) { const v = Math.min(k.bottom, vh); if ((k.bottom <= vh || v - k.top >= 4) && v > lastVisible) { lastVisible = v; deepest = k; } }
    if (k.bottom > vh + 2 && !below) below = k;
  }
  if (below && lastVisible >= vh - RESERVED - 1) {
    cut = true;
    cutBy = (deepest && deepest.bottom > vh ? deepest.what + ' cut by the edge, ' + Math.round(deepest.top) + ' to ' + Math.round(deepest.bottom)
      : 'content reaches ' + Math.round(lastVisible) + ' of ' + vh + ' and more follows below');
  } else if (below) {
    cutBy = lastVisible === -Infinity
      ? 'no content is visible below the last CTA at all, so nothing signals that the page continues'
      : 'FALSE FLOOR: the last visible content ends at ' + Math.round(lastVisible) + ', ' + Math.round(vh - lastVisible) + 'px clear of the ' + vh + 'px edge, so the screen reads as finished';
  }
  // A band edge also reads as continuation when the first screen's own surface ENDS inside the viewport and a
  // different surface runs off the bottom: M03 and M12 close a navy hero onto cream with nothing literally cut,
  // and a reader plainly sees more page. Sampling the effective background answers that where element geometry cannot.
  if (!cut && document.documentElement.scrollHeight > window.scrollY + vh + 2) {
    const bgAt = (x, y) => { let el = document.elementFromPoint(x, y); while (el) { const c = bgOf(el); if (c) return c; el = el.parentElement; } return 'rgb(255, 255, 255)'; };
    for (const x of [Math.min(16, Math.round(window.innerWidth / 4)), Math.round(window.innerWidth / 2)]) {
      const above = bgAt(x, Math.min(vh - 3, Math.max(1, lastCta + 6)));
      const edge = bgAt(x, vh - 2);
      if (above && edge && ratio(above, edge) >= VISIBLE_EDGE) { cut = true; cutBy = 'surface changes from ' + above + ' to ' + edge + ' between the last CTA and the bottom edge, and the page continues below'; break; }
    }
  }
  return { bottoms: out, cut, cutBy, scrollWidth: document.documentElement.scrollWidth, docHeight: document.documentElement.scrollHeight };
})()`;
// K12 V2: horizontal marks 32px tall at 1440 and at least 27px at 390, the icon at 56px, aspect within 1%.
// Measured rather than read from CSS, because five mocks declared a height a reader never saw and eight critic
// scorecards missed it. Reported at both widths; a horizontal mark under its floor fails the run.
const MARKS_JS = `(() => {
  const out = [];
  for (const img of document.querySelectorAll('img')) {
    const src = (img.getAttribute('src') || '');
    if (!/logo|icon|mark/i.test(src)) continue;
    const r = img.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) continue;
    const nat = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : null;
    const shown = r.width / r.height;
    out.push({ src: src.split('/').pop(), w: Math.round(r.width * 10) / 10, h: Math.round(r.height * 10) / 10,
      shape: nat && nat > 2 ? 'horizontal' : (nat ? 'icon' : 'unknown'),
      skew: nat ? Math.round(Math.abs(shown - nat) / nat * 1000) / 10 : null });
  }
  return out;
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
  // Prefer a pinned build so two runs of the same page are comparable: the version Playwright bundles,
  // else the newest Chrome for Testing already in the Playwright cache, else the browser installed on this machine.
  let browserKind = 'bundled Chromium';
  const cachedBuilds = () => {
    const root = join(os.homedir(), 'Library/Caches/ms-playwright');
    try {
      return readdirSync(root).filter(d => /^chromium-\d+$/.test(d)).sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]))
        .map(d => join(root, d, 'chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing')).filter(existsSync);
    } catch (e) { return []; }
  };
  try { browser = await chromium.launch(); } catch (e) {
    for (const exe of cachedBuilds()) {
      try { browser = await chromium.launch({ executablePath: exe }); browserKind = 'cached Chrome for Testing ' + exe.split('/').find(x => x.startsWith('chromium-')); break; } catch (e2) { /* try the next build */ }
    }
    if (!browser) { try { browser = await chromium.launch({ channel: 'chrome' }); browserKind = 'installed Chrome (no pinned build available)'; } catch (e3) { throw new Error('no Chromium available: ' + e.message.split('\n')[0]); } }
  }
  const qa = join(folder, 'qa'); mkdirSync(qa, { recursive: true });
  const lines = ['# Fold and matrix run', '', `Runner: \`0_plan/tools/shots.mjs\` with Playwright from \`${used}\`, ${browserKind} ${browser.version()}; ${new Date().toISOString()}; page \`${rel}/index.html\`.`, '',
    '| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |', '|---|---|---|---|---|---|---|---|---|---|---|'];
  const consoleErrors = new Set(); let failures = 0; const bandEvidence = [];
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
      result = missing.length ? `FAIL missing ${missing.join(', ')}` : over.length ? `FAIL over: ${over.join(', ')}` : (m.cut ? 'PASS' : 'FAIL false floor: nothing visible continues past the bottom edge');
      if (result.startsWith('FAIL')) failures++;
    } else if (rule === 'reflow') {
      result = m.scrollWidth <= w ? 'PASS no horizontal scroll' : `FAIL scrollWidth ${m.scrollWidth}`; if (result.startsWith('FAIL')) failures++;
    } else if (rule === 'zoom') {
      result = `report: scrollWidth ${m.scrollWidth}` + (m.scrollWidth > w ? ' (horizontal scroll)' : '');
    } else { result = `report: page height ${m.docHeight}`; }
    bandEvidence.push(`| ${row} | ${m.cut ? 'yes' : 'no'} | ${m.cutBy || 'nothing visible starts below the last CTA and crosses the bottom edge'} |`);
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
  // Mark geometry at the two widths K12 V2 names
  const markRows = []; let markFailures = 0;
  for (const [label, w, h, floor] of [['390 by 844', 390, 844, 27], ['1440 by 900', 1440, 900, 32]]) {
    await page.setViewportSize({ width: w, height: h }); await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts ? document.fonts.ready : null); await page.waitForTimeout(120);
    const marks = await page.evaluate(MARKS_JS);
    for (const m of marks) {
      const low = m.shape === 'horizontal' && m.h < floor - 0.5;
      const skewed = m.skew != null && m.skew > 1;
      if (low || skewed) markFailures++;
      markRows.push(`| ${label} | \`${m.src}\` | ${m.shape} | ${m.h}px | ${m.w}px | ${m.skew == null ? 'n/a' : m.skew + '%'} | ${low ? `FAIL under the ${floor}px floor` : skewed ? 'FAIL aspect distorted' : 'ok'} |`);
    }
    if (!marks.length) markRows.push(`| ${label} | no mark image found | | | | | FAIL no mark on the page |`), markFailures++;
  }
  failures += markFailures;

  // keyboard focus captures at V14: the first door CTA, then the GT Anywhere footer mark link
  await page.setViewportSize({ width: 1280, height: 720 }); await page.goto(url, { waitUntil: 'load' });
  const cta = await page.$('a[data-event="door_click"][data-placement="first_screen"]');
  if (cta) { await cta.focus(); await page.waitForTimeout(80); await page.screenshot({ path: join(qa, 'focus-cta.jpg'), type: 'jpeg', quality: 60 }); }
  const plate = await page.$('header a:has(img), header a');
  if (plate) { await plate.focus(); await page.waitForTimeout(80); await page.screenshot({ path: join(qa, 'focus-plate.jpg'), type: 'jpeg', quality: 60 }); }
  const footLink = await page.$('footer a[href*="anywhere.gt.school"]');
  if (footLink) { await footLink.scrollIntoViewIfNeeded(); await footLink.focus(); await page.waitForTimeout(80); await page.screenshot({ path: join(qa, 'focus-footer.jpg'), type: 'jpeg', quality: 60 }); }
  // The footer mark on its own plate: the two-colour ring has to read against the plate as well as the page,
  // and hand-made captures of it went stale silently because no runner pass rewrote them (M15 critic, fix 9).
  const footPlate = await page.$('footer a:has(img), footer [class*="plate"] a, footer [class*="logo"] a');
  if (footPlate) { await footPlate.scrollIntoViewIfNeeded(); await footPlate.focus(); await page.waitForTimeout(80); await page.screenshot({ path: join(qa, 'focus-footer-plate.jpg'), type: 'jpeg', quality: 60 }); }
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
  lines.push('', '## Focus and forced colours', '', `Captures: ${cta ? 'focus-cta.jpg (first door CTA focused)' : 'no first-screen door CTA found for the focus capture'}; ${footPlate ? 'focus-footer-plate.jpg (the footer mark on its plate); ' : ''}${plate ? 'focus-plate.jpg (header lockup link focused)' : 'no header link found'}; ${footLink ? 'focus-footer.jpg (GT Anywhere footer link focused)' : 'no GT Anywhere footer link found'}; forced-colors.jpg (forced-colors: active at V14). The critics judge these by eye.`);
  lines.push('', '## Console', '', consoleErrors.size ? `FAIL: ${[...consoleErrors].join(' | ')}` : 'PASS: no console errors.');
  if (consoleErrors.size) failures++;
  lines.push('', '## Next band evidence', '', 'What the runner saw continuing below the fold. Ink means text, a painted edge or an image: section padding and the empty leading of a line box do not count.', '',
    '| Row | Cut | Element and the ink that crosses the bottom edge |', '|---|---|---|', ...bandEvidence);
  lines.push('', '## Mark geometry (K12 V2)', '', 'Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.', '',
    '| Viewport | File | Shape | Height | Width | Aspect skew | Result |', '|---|---|---|---|---|---|---|', ...markRows);
  lines.push('', `## Result: ${failures ? failures + ' failure(s)' : 'all required rows pass'}`);
  writeFileSync(join(qa, 'fold.md'), lines.join('\n') + '\n');
  await browser.close(); srv.close();
  console.log(lines.slice(4).join('\n'));
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error('shots.mjs: ' + e.message); process.exit(2); });
