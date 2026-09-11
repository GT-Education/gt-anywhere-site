#!/usr/bin/env node
// M05 measurement helper. Same Playwright the runner uses, from the npx cache; serves the repository on a
// random port. Reports: h1 line counts and computed type at the fold rows, the header row's own arithmetic,
// every SVG label box against its band, and the widest element at the reflow and doubled-root rows.
// Usage: node 0_plan/mockups/M05-front-door-of-the-estate/qa/M05-measure.mjs [--weights]
import { createRequire } from 'node:module';
import { readdirSync, existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve, extname } from 'node:path';
import http from 'node:http';
import os from 'node:os';

const REPO = resolve(new URL('../../../..', import.meta.url).pathname);
const REL = '/0_plan/mockups/M05-front-door-of-the-estate';
function findPlaywright() {
  const base = join(os.homedir(), '.npm', '_npx'); const hits = [];
  for (const d of (existsSync(base) ? readdirSync(base) : [])) {
    const p = join(base, d, 'node_modules', 'playwright');
    if (existsSync(join(p, 'package.json'))) hits.push(p);
  }
  hits.sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
  if (!hits.length) throw new Error('no playwright in the npx cache');
  return hits;
}
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.ttf': 'font/ttf', '.jpg': 'image/jpeg', '.png': 'image/png' };
function serve() {
  return new Promise((ok) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
      const f = join(REPO, p);
      if (!f.startsWith(REPO) || !existsSync(f) || statSync(f).isDirectory()) { res.writeHead(404); res.end('x'); return; }
      res.writeHead(200, { 'content-type': MIME[extname(f)] || 'application/octet-stream' }); res.end(readFileSync(f));
    });
    srv.listen(0, '127.0.0.1', () => ok(srv));
  });
}
const H1_JS = `(() => {
  const h1 = document.querySelector('h1'); const cs = getComputedStyle(h1);
  const r = document.createRange(); r.selectNodeContents(h1);
  const lines = [...r.getClientRects()].filter(x => x.height > 1);
  // merge rects that share a baseline band
  const tops = []; for (const x of lines) if (!tops.some(t => Math.abs(t - x.top) < 4)) tops.push(x.top);
  const box = h1.getBoundingClientRect();
  return { size: cs.fontSize, weight: cs.fontWeight, track: cs.letterSpacing, family: cs.fontFamily.split(',')[0],
    boxW: Math.round(box.width), boxH: Math.round(box.height), lineH: cs.lineHeight, lines: tops.length };
})()`;
const HEADER_JS = `(() => {
  const inner = document.querySelector('.header-inner'); const img = document.querySelector('.lockup img');
  const links = [...document.querySelectorAll('.utility a')];
  const hb = document.querySelector('header').getBoundingClientRect();
  return { headerH: Math.round(hb.height), innerW: Math.round(inner.getBoundingClientRect().width),
    markW: Math.round(img.getBoundingClientRect().width), markH: Math.round(img.getBoundingClientRect().height * 10) / 10,
    links: links.map(a => Math.round(a.getBoundingClientRect().width)),
    rows: new Set([...document.querySelectorAll('.lockup, .utility')].map(e => Math.round(e.getBoundingClientRect().top))).size };
})()`;
const SVG_JS = `(() => {
  const out = [];
  for (const svg of document.querySelectorAll('svg.bands')) {
    const sb = svg.getBoundingClientRect();
    for (const t of svg.querySelectorAll('text')) {
      const b = t.getBoundingClientRect();
      out.push({ text: t.textContent.slice(0, 30), w: Math.round(b.width), right: Math.round(b.right - sb.left), svgW: Math.round(sb.width), over: b.right > sb.right - 4 });
    }
  }
  return out;
})()`;
const WIDEST_JS = `(() => {
  const vw = document.documentElement.clientWidth; const out = [];
  for (const el of document.querySelectorAll('body *')) {
    const b = el.getBoundingClientRect();
    if (b.right > vw + 0.5 || b.width > vw + 0.5) out.push({ tag: el.tagName.toLowerCase(), cls: String(el.className.baseVal ?? el.className).split(' ')[0], w: Math.round(b.width), right: Math.round(b.right) });
  }
  return out.slice(0, 12);
})()`;

(async () => {
  const paths = findPlaywright(); let chromium;
  for (const p of paths) { try { ({ chromium } = createRequire(join(p, 'package.json'))(p)); break; } catch (e) {} }
  const srv = await serve(); const url = `http://127.0.0.1:${srv.address().port}${REL}/index.html`;
  let browser; try { browser = await chromium.launch(); } catch (e) { browser = await chromium.launch({ channel: 'chrome' }); }
  const page = await (await browser.newContext({ deviceScaleFactor: 1 })).newPage();
  const lines = ['# M05 measurements', ''];

  const weights = process.argv.includes('--weights') ? ['300', '400'] : [null];
  for (const w of weights) {
    lines.push(w ? `## h1 at weight ${w}` : '## h1 as shipped', '', '| Row | Viewport | Face | Size | Weight | Tracking | Box | Lines | Height |', '|---|---|---|---|---|---|---|---|---|');
    for (const [row, vw, vh] of [['V1', 360, 740], ['V2', 375, 629], ['V3', 390, 664], ['V5', 414, 715], ['V10', 750, 342], ['V11', 768, 1024], ['V13', 1024, 768], ['V14', 1280, 720], ['V16', 1440, 900], ['V17', 1920, 960]]) {
      await page.setViewportSize({ width: vw, height: vh }); await page.goto(url, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      if (w) await page.evaluate((ww) => document.documentElement.style.setProperty('--h1-weight', ww), w);
      await page.waitForTimeout(80);
      const m = await page.evaluate(H1_JS);
      lines.push(`| ${row} | ${vw} by ${vh} | ${m.family.replace(/"/g, '')} | ${m.size} | ${m.weight} | ${m.track} | ${m.boxW}px | ${m.lines} | ${m.boxH}px |`);
    }
    lines.push('');
  }

  lines.push('## Header row', '', '| Width | Header height | Rows | Inner width | Mark w by h | Link widths |', '|---|---|---|---|---|---|');
  for (const vw of [320, 360, 375, 390, 393, 402, 414, 430, 768, 1280, 1440]) {
    await page.setViewportSize({ width: vw, height: 800 }); await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(60);
    const m = await page.evaluate(HEADER_JS);
    lines.push(`| ${vw} | ${m.headerH} | ${m.rows} | ${m.innerW} | ${m.markW} by ${m.markH} | ${m.links.join(', ')} |`);
  }

  lines.push('', '## SVG diagram labels against their band', '', '| Width | Label | Label width | Right edge | Band width | Overflows |', '|---|---|---|---|---|---|');
  for (const vw of [768, 834, 900, 1024, 1100, 1280, 1440, 1920]) {
    await page.setViewportSize({ width: vw, height: 1000 }); await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(60);
    for (const t of await page.evaluate(SVG_JS)) lines.push(`| ${vw} | ${t.text} | ${t.w} | ${t.right} | ${t.svgW} | ${t.over ? '**YES**' : 'no'} |`);
  }

  lines.push('', '## Elements wider than the viewport', '');
  for (const [label, vw, vh, root] of [['V18 reflow', 320, 256, null], ['V2 root doubled', 375, 629, '32px'], ['V1', 360, 740, null]]) {
    await page.setViewportSize({ width: vw, height: vh }); await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    if (root) await page.evaluate((r) => { document.documentElement.style.fontSize = r; }, root);
    await page.waitForTimeout(80);
    const over = await page.evaluate(WIDEST_JS);
    const sw = await page.evaluate(() => document.documentElement.scrollWidth);
    lines.push(`**${label}** scrollWidth ${sw} of ${vw}: ` + (over.length ? over.map(o => `\`${o.tag}.${o.cls}\` ${o.w}px to ${o.right}`).join('; ') : 'nothing wider than the viewport'));
  }

  await browser.close(); srv.close();
  const out = lines.join('\n') + '\n';
  writeFileSync(join(REPO, REL.slice(1), 'qa', 'measure.md'), out);
  console.log(out);
})().catch((e) => { console.error('M05-measure: ' + e.message); process.exit(2); });
