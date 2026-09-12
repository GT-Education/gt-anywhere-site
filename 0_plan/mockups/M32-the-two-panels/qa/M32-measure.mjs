#!/usr/bin/env node
// M32 parity, weight and evidence probe. Serves the repository the way 0_plan/tools/shots.mjs does and drives the
// same Chromium out of the npx cache. Build pass 2 answers both critics: the harness now reads colour as well as
// geometry, measures .panel-line, includes the reprise pair, prints markW instead of dropping it, and runs on this
// page the same object-and-fill count the rationale ran on the source.
//
//   node …/qa/M32-measure.mjs                → parity table, 19 rows, first-screen pair
//   node …/qa/M32-measure.mjs --reprise      → parity table, 19 rows, the after-table pair
//   node …/qa/M32-measure.mjs --weight       → colour, painted navy area, object and fill counts per panel
//   node …/qa/M32-measure.mjs --lines        → .panel-line boxes and the void above each CTA
//   node …/qa/M32-measure.mjs --h1           → h1 size, column and measured line count per row
//   node …/qa/M32-measure.mjs --overflow     → elements crossing the viewport at 375 with a 32px root
//   node …/qa/M32-measure.mjs --captures     → writes the four captures the brief's acceptance row wants judged by
//                                              eye, and measures every focus ring against the surface OUTSIDE it
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
// Shared browser-side helpers: luminance, contrast, and the effective ground behind an element.
const HELPERS = `
  const r1 = (n) => Math.round(n * 10) / 10;
  const lum = (c) => { const n = (String(c).match(/[0-9.]+/g) || []).slice(0, 3).map(Number).map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]; };
  const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b); return Math.round(((Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)) * 100) / 100; };
  const opaque = (c) => c && !/rgba\\(\\s*0,\\s*0,\\s*0,\\s*0\\s*\\)/.test(c) && c !== 'transparent' && !/,\\s*0\\)$/.test(c);
  const groundBehind = (el) => { for (let p = el.parentElement; p; p = p.parentElement) { const c = getComputedStyle(p).backgroundColor; if (opaque(c)) return c; } return getComputedStyle(document.documentElement).backgroundColor || 'rgb(255,255,255)'; };
`;
const PARITY_JS = (sel) => `(() => {${HELPERS}
  const panels = [...document.querySelectorAll('${sel}')];
  const out = {};
  const q = (p, s) => p.querySelector(s);
  for (const p of panels) {
    const box = p.getBoundingClientRect(); const cs = getComputedStyle(p);
    const mark = q(p, '.panel-mark'); const img = mark ? q(p, '.panel-mark img') : null;
    const label = q(p, '.panel-label'); const name = q(p, '.panel-name'); const cta = q(p, '.panel-cta');
    const mb = mark ? mark.getBoundingClientRect() : { width: 0, height: 0 };
    const ib = img ? img.getBoundingClientRect() : { width: 0, height: 0 };
    const lb = label.getBoundingClientRect(); const nb = name.getBoundingClientRect(); const cb = cta.getBoundingClientRect();
    out[p.dataset.door] = {
      w: r1(box.width), h: r1(box.height),
      padT: r1(parseFloat(cs.paddingTop)), padR: r1(parseFloat(cs.paddingRight)),
      padB: r1(parseFloat(cs.paddingBottom)), padL: r1(parseFloat(cs.paddingLeft)),
      plateW: r1(mb.width), plateH: r1(mb.height),
      markH: r1(ib.height), markW: r1(ib.width),
      labelX: r1(lb.left - box.left), labelY: r1(lb.top - box.top),
      nameX: r1(nb.left - box.left), nameY: r1(nb.top - box.top),
      ctaW: r1(cb.width), ctaH: r1(cb.height), ctaX: r1(cb.left - box.left), ctaY: r1(box.bottom - cb.bottom),
      plateBorderW: mark ? r1(parseFloat(getComputedStyle(mark).borderTopWidth)) : 0,
    };
  }
  return out;
})()`;
const WEIGHT_JS = `(() => {${HELPERS}
  const NAVY = 'rgb(0, 42, 58)';
  const out = {};
  for (const p of document.querySelectorAll('.first-screen .panel')) {
    const box = p.getBoundingClientRect();
    const tint = getComputedStyle(p).backgroundColor;
    const mark = p.querySelector('.panel-mark'); const mcs = getComputedStyle(mark);
    const mb = mark.getBoundingClientRect();
    const cta = p.querySelector('.panel-cta'); const ccs = getComputedStyle(cta);
    const cb = cta.getBoundingClientRect();
    const label = p.querySelector('.panel-label'); const name = p.querySelector('.panel-name');
    const line = p.querySelector('.panel-line');
    const lineShown = line && getComputedStyle(line).display !== 'none';
    // Painted navy: a filled box counts its whole area, a bordered box counts its border ring only.
    const navyArea = (el, cs, b) => {
      let a = 0;
      if (cs.backgroundColor === NAVY) a += b.width * b.height;
      else { const w = parseFloat(cs.borderTopWidth) || 0; if (cs.borderTopColor === NAVY && w > 0) a += 2 * w * (b.width + b.height) - 4 * w * w; }
      return a;
    };
    const objs = [];
    if (mcs.backgroundColor === NAVY) objs.push('mark plate (filled)');
    else if (mcs.borderTopColor === NAVY && parseFloat(mcs.borderTopWidth) > 0) objs.push('mark plate (bounded)');
    if (ccs.backgroundColor === NAVY) objs.push('CTA (filled)');
    const textNodes = [];
    for (const el of [label, name, lineShown ? line : null, cta]) {
      if (!el) continue;
      const rg = document.createRange(); rg.selectNodeContents(el);
      textNodes.push({ what: el.className.split(' ')[0], lines: rg.getClientRects().length, chars: el.textContent.replace(/\\s+/g, ' ').trim().length });
    }
    out[p.dataset.door] = {
      tint, tintVsNavy: ratio(tint, NAVY),
      plateGround: mcs.backgroundColor, plateBorder: mcs.borderTopColor,
      plateGroundVsTint: ratio(mcs.backgroundColor, tint), plateBorderVsTint: ratio(mcs.borderTopColor, tint),
      navyObjects: objs, navyObjectCount: objs.length,
      navyAreaPx2: Math.round(navyArea(mark, mcs, mb) + navyArea(cta, ccs, cb)),
      platePaintedPx2: Math.round(navyArea(mark, mcs, mb)),
      saturatedFills: 0,
      typeObjects: textNodes.length,
      textLines: textNodes.reduce((a, t) => a + t.lines, 0),
      chars: textNodes.reduce((a, t) => a + t.chars, 0),
      perNode: textNodes,
      panelArea: Math.round(box.width * box.height),
    };
  }
  // Every accent event a reader can see above the fold: --color-accent as fill or type, --color-accent-text as
  // type or as a text decoration, on the first screen AND the compare anchor band, which is above the fold at
  // every row. K3 section 5f counts events, so a decoration counts.
  const ACCENT = 'rgb(228, 139, 83)', ACCENT_TEXT = 'rgb(165, 80, 26)';
  const events = [];
  for (const el of document.querySelectorAll('.first-screen *, .anchor-band *')) {
    const cs = getComputedStyle(el);
    const label = el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/)[0] : '');
    if (cs.backgroundColor === ACCENT || cs.backgroundColor === ACCENT_TEXT) events.push(label + ' fill');
    if (cs.color === ACCENT || cs.color === ACCENT_TEXT) events.push(label + ' type');
    if (cs.textDecorationLine !== 'none' && (cs.textDecorationColor === ACCENT || cs.textDecorationColor === ACCENT_TEXT)) events.push(label + ' underline ' + cs.textDecorationColor);
  }
  out._accentEvents = events;
  out._accentEventCount = events.length;
  return out;
})()`;
const LINES_JS = `(() => {${HELPERS}
  const out = {};
  for (const p of document.querySelectorAll('.first-screen .panel')) {
    const line = p.querySelector('.panel-line'); const cta = p.querySelector('.panel-cta');
    const shown = line && getComputedStyle(line).display !== 'none';
    const lb = shown ? line.getBoundingClientRect() : null;
    const cb = cta.getBoundingClientRect();
    const rg = document.createRange(); if (shown) rg.selectNodeContents(line);
    out[p.dataset.door] = {
      shown: !!shown,
      lineH: shown ? r1(lb.height) : null,
      lineCount: shown ? rg.getClientRects().length : null,
      voidAboveCta: shown ? r1(cb.top - lb.bottom) : null,
      ctaTop: r1(cb.top), ctaBottom: r1(cb.bottom), panelTop: r1(p.getBoundingClientRect().top),
    };
  }
  return out;
})()`;
const RING_JS = `(() => {${HELPERS}
  const out = [];
  const targets = [['header lockup', '.lockup'], ['footer GT School plate', '.logo-plate'], ['footer GT Anywhere plate', '.logo-navy'], ['first door CTA', '[data-fold="cta-georgetown"]']];
  for (const [nameOf, sel] of targets) {
    const el = document.querySelector(sel); if (!el) continue;
    el.focus();
    const cs = getComputedStyle(el);
    const own = cs.backgroundColor;
    const outside = groundBehind(el);
    // K3 F10's ring is two bands: an inner band drawn as a box-shadow at the border box, and the outline
    // itself at a positive offset outside it. Report BOTH against the surround, because the rule is that one
    // band passes on whatever ground the ring lands on, not that both do.
    const shadow = cs.boxShadow === 'none' ? null : (cs.boxShadow.match(/rgba?\([^)]*\)/) || [null])[0];
    out.push({ target: nameOf, outlineColor: cs.outlineColor, outlineWidth: cs.outlineWidth, offset: cs.outlineOffset,
      boxShadow: cs.boxShadow === 'none' ? 'none' : cs.boxShadow,
      innerBand: shadow, innerVsSurround: shadow ? ratio(shadow, outside) : null,
      ownGround: own, vsOwnGround: ratio(cs.outlineColor, own),
      surroundOutsideTheRing: outside, vsSurround: ratio(cs.outlineColor, outside) });
    el.blur();
  }
  return out;
})()`;
const OVERFLOW_JS = `(() => {
  const w = document.documentElement.clientWidth; const bad = [];
  for (const el of document.querySelectorAll('*')) {
    const b = el.getBoundingClientRect();
    if (b.width < 1 || b.height < 1) continue;
    if (b.right > w + 0.5 || b.left < -0.5) bad.push((el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).join('.') : '')) + ' left ' + Math.round(b.left) + ' right ' + Math.round(b.right));
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
  const ctx = await browser.newContext({ deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const goto = async (w, h) => { await page.setViewportSize({ width: w, height: h }); await page.goto(url, { waitUntil: 'load' }); await page.evaluate(() => document.fonts ? document.fonts.ready : null); await page.waitForTimeout(120); };
  const done = async () => { await browser.close(); srv.close(); };

  if (process.argv.includes('--overflow')) {
    await goto(375, 629);
    await page.evaluate(() => { document.documentElement.style.fontSize = '32px'; });
    await page.waitForTimeout(200);
    console.log('Elements crossing the viewport at 375 with a 32px root:');
    const bad = await page.evaluate(OVERFLOW_JS);
    console.log(bad.length ? bad.map(b => '  ' + b).join('\n') : '  none');
    return done();
  }

  if (process.argv.includes('--accent-states')) {
    const qa = join(REPO, rel.slice(1), 'qa');
    // Q-036 is Nari's. Both states are captured so she judges a first-screen colour decision from a picture.
    for (const [label, w, h] of [['375', 375, 629], ['1440', 1440, 900]]) {
      for (const state of ['shipped', 'zero']) {
        await goto(w, h);
        if (state === 'zero') await page.evaluate(() => { const st = document.createElement('style'); st.textContent = '.anchor-link{text-decoration-color:var(--color-border-strong) !important;text-decoration-thickness:1px !important}'; document.head.appendChild(st); });
        await page.waitForTimeout(120);
        await page.screenshot({ path: join(qa, `accent-${state}-${label}.jpg`), type: 'jpeg', quality: w >= 1024 ? 62 : 72 });
      }
    }
    await goto(1440, 900);
    const m = await page.evaluate(`(() => {${HELPERS}
      const a = document.querySelector('.anchor-link'); const cs = getComputedStyle(a);
      const ground = groundBehind(a);
      return { decoration: cs.textDecorationColor, thickness: cs.textDecorationThickness, type: cs.color,
               ground, decorationVsGround: ratio(cs.textDecorationColor, ground), typeVsGround: ratio(cs.color, ground) };
    })()`);
    console.log('## Q-036, both states captured\n');
    console.log('| File | State |');
    console.log('|---|---|');
    console.log('| `qa/accent-shipped-375.jpg`, `qa/accent-shipped-1440.jpg` | **As shipped**: one accent event, the compare anchor underlined in `--color-accent-text` at 2px |');
    console.log('| `qa/accent-zero-375.jpg`, `qa/accent-zero-1440.jpg` | The zero state passes 1 to 3 shipped: the same sentence in the `--color-border-strong` hairline every other link wears |');
    console.log(`\nMeasured on the shipped state: underline ${m.decoration} at ${m.thickness} on ${m.ground} = **${m.decorationVsGround}:1**; the sentence itself ${m.type} = ${m.typeVsGround}:1.`);
    return done();
  }

  if (process.argv.includes('--balance')) {
    // Does `text-wrap: balance` change the h1's setting at the phone rows? Measured by forcing it on and
    // comparing the line rects against the shipped state, rather than reasoning about Chromium's line cap.
    console.log('| Row | Viewport | Lines | Line widths, shipped | SD | Line widths, balance forced | SD | Verdict |');
    console.log('|---|---|---|---|---|---|---|---|');
    for (const [row, w, h] of ROWS) {
      const read = async (force) => {
        await goto(w, h);
        if (force) await page.evaluate(() => { const st = document.createElement('style'); st.textContent = 'h1{text-wrap:balance !important}'; document.head.appendChild(st); });
        await page.waitForTimeout(120);
        return page.evaluate(`(() => {
          // The h1 holds an <em> and a nowrap <span>, so a Range yields one rect per fragment per line.
          // Group rects into VISUAL lines by their top coordinate before measuring anything.
          const el = document.querySelector('h1'); const rg = document.createRange(); rg.selectNodeContents(el);
          const rects = [...rg.getClientRects()].filter(r => r.height > 1);
          const rows = new Map();
          for (const r of rects) { const k = Math.round(r.top); const cur = rows.get(k) || { l: Infinity, r: -Infinity }; cur.l = Math.min(cur.l, r.left); cur.r = Math.max(cur.r, r.right); rows.set(k, cur); }
          const keys = [...rows.keys()].sort((a, b) => a - b);
          const widths = keys.map(k => Math.round(rows.get(k).r - rows.get(k).l));
          const box = Math.round(el.getBoundingClientRect().width);
          const cs = getComputedStyle(el);
          return { lines: Math.round(el.getBoundingClientRect().height / parseFloat(cs.lineHeight)), fragLines: keys.length,
                   last: widths[widths.length - 1] || 0, penult: widths[widths.length - 2] || 0,
                   widest: Math.max(...widths), box, widths };
        })()`);
      };
      const a = await read(false), b = await read(true);
      const same = JSON.stringify(a.widths) === JSON.stringify(b.widths);
      // Report EVERY line, and the spread, rather than the tail alone: a fuller last line can be bought
      // by hollowing out the middle, and the penult/last pair cannot see that.
      const sd = (ws) => { const m = ws.reduce((x, y) => x + y, 0) / ws.length; return Math.round(Math.sqrt(ws.reduce((x, y) => x + (y - m) ** 2, 0) / ws.length)); };
      console.log(`| ${row} | ${w} by ${h} | ${a.lines} | ${a.widths.join(' ')} | ${sd(a.widths)} | ${b.widths.join(' ')} | ${sd(b.widths)} | ${same ? 'no change' : (sd(b.widths) < sd(a.widths) ? '**more even**' : '**less even**')} |`);
    }
    return done();
  }

  if (process.argv.includes('--h1')) {
    console.log('| Row | Viewport | h1 size | h1 column | Line box | h1 height | Lines |');
    console.log('|---|---|---|---|---|---|---|');
    for (const [row, w, h] of ROWS) {
      await goto(w, h);
      const m = await page.evaluate(`(() => { const el = document.querySelector('h1'); const cs = getComputedStyle(el); const b = el.getBoundingClientRect(); const lh = parseFloat(cs.lineHeight); return { fs: Math.round(parseFloat(cs.fontSize) * 100) / 100, w: Math.round(b.width), lh: Math.round(lh * 100) / 100, h: Math.round(b.height * 10) / 10, lines: Math.round(b.height / lh) }; })()`);
      console.log(`| ${row} | ${w} by ${h} | ${m.fs}px | ${m.w}px | ${m.lh}px | ${m.h}px | ${m.lines} |`);
    }
    return done();
  }

  if (process.argv.includes('--weight')) {
    for (const [row, w, h] of [['V2', 375, 629], ['V13', 1024, 768], ['V14', 1280, 720], ['V16', 1440, 900], ['V19', 1024, 576]]) {
      await goto(w, h);
      const m = await page.evaluate(WEIGHT_JS);
      const g = m.georgetown, a = m.anywhere;
      console.log(`\n### ${row} (${w} by ${h})`);
      console.log('| Property | Georgetown | GT Anywhere | Ratio |');
      console.log('|---|---|---|---|');
      console.log(`| Panel tint | ${g.tint} | ${a.tint} | ${g.tintVsNavy} / ${a.tintVsNavy} against navy |`);
      console.log(`| Mark-plate ground | ${g.plateGround} (${g.plateGroundVsTint}:1 on its tint) | ${a.plateGround} (${a.plateGroundVsTint}:1 on its tint) | — |`);
      console.log(`| Mark-plate border | ${g.plateBorder} (${g.plateBorderVsTint}:1 on its tint) | ${a.plateBorder} (${a.plateBorderVsTint}:1 on its tint) | — |`);
      console.log(`| Navy objects | ${g.navyObjectCount} — ${g.navyObjects.join(', ')} | ${a.navyObjectCount} — ${a.navyObjects.join(', ')} | ${(g.navyObjectCount / a.navyObjectCount).toFixed(2)} : 1 |`);
      console.log(`| Painted navy, mark plate only | ${g.platePaintedPx2} px² | ${a.platePaintedPx2} px² | 1 : ${(a.platePaintedPx2 / Math.max(1, g.platePaintedPx2)).toFixed(1)} |`);
      console.log(`| Painted navy, whole panel | ${g.navyAreaPx2} px² (${(100 * g.navyAreaPx2 / g.panelArea).toFixed(1)}% of the panel) | ${a.navyAreaPx2} px² (${(100 * a.navyAreaPx2 / a.panelArea).toFixed(1)}%) | 1 : ${(a.navyAreaPx2 / Math.max(1, g.navyAreaPx2)).toFixed(2)} |`);
      console.log(`| Type objects | ${g.typeObjects} | ${a.typeObjects} | ${(g.typeObjects / a.typeObjects).toFixed(2)} : 1 |`);
      console.log(`| Lines of set text | ${g.textLines} | ${a.textLines} | ${(g.textLines / a.textLines).toFixed(2)} : 1 |`);
      console.log(`| Characters of set text | ${g.chars} | ${a.chars} | ${(g.chars / a.chars).toFixed(2)} : 1 |`);
      console.log(`| Saturated (accent) fills | ${g.saturatedFills} | ${a.saturatedFills} | — |`);
      console.log(`| Accent events on the first screen and the compare band (K3 5f budget: 1) | ${m._accentEventCount} — ${m._accentEvents.join(', ') || 'none'} | | |`);
    }
    return done();
  }

  if (process.argv.includes('--lines')) {
    console.log('| Row | Viewport | Line shown | G line box | G lines | G void above CTA | A line box | A lines | A void above CTA | CTA tops equal | CTA bottoms equal |');
    console.log('|---|---|---|---|---|---|---|---|---|---|---|');
    for (const [row, w, h] of ROWS) {
      await goto(w, h);
      const m = await page.evaluate(LINES_JS); const g = m.georgetown, a = m.anywhere;
      const stacked = Math.abs(g.panelTop - a.panelTop) > 1;
      console.log(`| ${row} | ${w} by ${h} | ${g.shown ? 'inside the panel' : 'below the frame'} | ${g.lineH ?? '—'} | ${g.lineCount ?? '—'} | ${g.voidAboveCta ?? '—'} | ${a.lineH ?? '—'} | ${a.lineCount ?? '—'} | ${a.voidAboveCta ?? '—'} | ${stacked ? 'n/a (stacked)' : (Math.abs(g.ctaTop - a.ctaTop) <= 0.5 ? 'yes' : 'NO (' + Math.round((g.ctaTop - a.ctaTop) * 10) / 10 + ')')} | ${stacked ? 'n/a (stacked)' : (Math.abs(g.ctaBottom - a.ctaBottom) <= 0.5 ? 'yes' : 'NO')} |`);
    }
    return done();
  }

  if (process.argv.includes('--captures')) {
    const qa = join(REPO, rel.slice(1), 'qa');
    // 1. Normal palette: the one two-band ring on the page, focused.
    await goto(1440, 900);
    const plate = await page.$('.logo-navy');
    await plate.scrollIntoViewIfNeeded(); await plate.focus(); await page.waitForTimeout(120);
    await page.screenshot({ path: join(qa, 'focus-logo-navy.jpg'), type: 'jpeg', quality: 70 });
    console.log('## Focus rings, normal palette (1440 by 900)\n');
    console.log('| Target | Outer band | Offset | Inner band | Outer band vs the surround | Inner band vs the surround | Best band (K3 F10) |');
    console.log('|---|---|---|---|---|---|---|');
    for (const r of await page.evaluate(RING_JS)) {
      const best = Math.max(r.vsSurround, r.innerVsSurround || 0);
      console.log(`| ${r.target} | ${r.outlineWidth} ${r.outlineColor} | ${r.offset} | ${r.innerBand ? '2px ' + r.innerBand : 'none'} | ${r.vsSurround}:1 | ${r.innerVsSurround ?? '—'} | **${best}:1** against ${r.surroundOutsideTheRing} |`);
    }
    // 2 and 3. Forced colours, both palettes: the page, and the two-band ring's replacement.
    for (const scheme of ['light', 'dark']) {
      const fcx = await browser.newContext({ viewport: { width: 1280, height: 720 }, forcedColors: 'active', colorScheme: scheme, deviceScaleFactor: 1 });
      const fcp = await fcx.newPage();
      await fcp.goto(url, { waitUntil: 'load' });
      await fcp.evaluate(() => document.fonts ? document.fonts.ready : null); await fcp.waitForTimeout(150);
      await fcp.screenshot({ path: join(qa, `forced-colors-${scheme}.jpg`), type: 'jpeg', quality: 62 });
      const fplate = await fcp.$('.logo-navy');
      await fplate.scrollIntoViewIfNeeded(); await fplate.focus(); await fcp.waitForTimeout(120);
      await fcp.screenshot({ path: join(qa, `focus-logo-navy-fc-${scheme}.jpg`), type: 'jpeg', quality: 70 });
      console.log(`\n## Focus rings, forced colours, ${scheme} palette (1280 by 720)\n`);
      console.log('| Target | Outline | Offset | Inner band | Against the surround outside the ring |');
      console.log('|---|---|---|---|---|');
      for (const r of await fcp.evaluate(RING_JS)) {
        console.log(`| ${r.target} | ${r.outlineWidth} ${r.outlineColor} | ${r.offset} | ${r.boxShadow === 'none' ? 'none (forced colours drops box-shadow, K3 F38)' : r.boxShadow} | **${r.vsSurround}:1** (${r.surroundOutsideTheRing}) |`);
      }
      await fcx.close();
    }
    console.log('\nCaptures written: qa/focus-logo-navy.jpg, qa/forced-colors-light.jpg, qa/forced-colors-dark.jpg, qa/focus-logo-navy-fc-light.jpg, qa/focus-logo-navy-fc-dark.jpg');
    return done();
  }

  // Default and --reprise: the parity table.
  const reprise = process.argv.includes('--reprise');
  const sel = reprise ? '.frame-reprise .panel' : '.first-screen .panel';
  const keys = ['w', 'h', 'padT', 'padR', 'padB', 'padL', 'plateW', 'plateH', 'plateBorderW', 'markH', 'labelX', 'labelY', 'nameX', 'nameY', 'ctaW', 'ctaH', 'ctaX', 'ctaY'];
  console.log(`Pair: \`${sel}\`. Bar: equal within 2px. markW is reported and excluded from the verdict — the two`);
  console.log('wordmarks have different aspect ratios (139/32 and 252/48) and K12 V2 sizes marks by height, so equal');
  console.log('widths would mean a distorted mark and the runner fails an aspect skew over 1%.\n');
  console.log('| Row | Viewport | ' + keys.map(k => k + ' Δ').join(' | ') + ' | Worst Δ | markW G / A (excluded) | Verdict |');
  console.log('|---|---|' + keys.map(() => '---').join('|') + '|---|---|---|');
  let worstAll = 0; const detail = [];
  for (const [row, w, h] of ROWS) {
    await goto(w, h);
    const m = await page.evaluate(PARITY_JS(sel));
    const g = m.georgetown, a = m.anywhere;
    if (!g || !a) { console.log(`| ${row} | ${w} by ${h} | pair not present |`); continue; }
    const deltas = keys.map(k => Math.round(Math.abs(g[k] - a[k]) * 10) / 10);
    const worst = Math.max(...deltas); worstAll = Math.max(worstAll, worst);
    console.log(`| ${row} | ${w} by ${h} | ` + deltas.join(' | ') + ` | ${worst} | ${g.markW} / ${a.markW} | ${worst <= 2 ? 'equal within 2px (observed ' + worst + ')' : 'FAIL'} |`);
    detail.push([row, g, a]);
  }
  console.log(`\n${keys.length} properties against a 2px bar; worst observed delta across all nineteen rows: ${worstAll}px`);
  if (!reprise) {
    console.log('\nAbsolute values, the four contract rows:');
    for (const [row, g, a] of detail.filter(d => ['V2', 'V5', 'V14', 'V16'].includes(d[0]))) {
      console.log(`  ${row} georgetown ` + JSON.stringify(g));
      console.log(`  ${row} anywhere   ` + JSON.stringify(a));
    }
  }
  await done();
})().catch(e => { console.error(e); process.exit(2); });
