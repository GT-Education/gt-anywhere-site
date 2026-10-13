#!/usr/bin/env node
// Validates live GT School pages against tracking-plan.json.
//
//   node analytics/validate.mjs                 # production: www.gt.school + anywhere.gt.school
//   node analytics/validate.mjs --env staging   # *.webflow.io, with analytics forced on (gt_analytics_test)
//   node analytics/validate.mjs --sites apply   # apply.gt.school (report only until it follows the plan)
//   node analytics/validate.mjs --json out.json # also write the full report
//
// Every GA4 hit is captured and then blocked (answered 204 locally), and ad/CRM beacons are aborted,
// so a run never adds data to GA4, Meta, TikTok, Google Ads or HubSpot. Form backends are mocked:
// no HubSpot contact or Supabase lead is created.
//
// Exit code 1 if any check fails. Needs playwright-core and a Chromium (CHROMIUM=/path, default /usr/bin/chromium).
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_CORE || 'playwright-core');
const here = dirname(fileURLToPath(import.meta.url));
const plan = JSON.parse(readFileSync(join(here, 'tracking-plan.json'), 'utf8'));

const args = process.argv.slice(2);
const opt = (name, dflt) => { const i = args.indexOf('--' + name); return i < 0 ? dflt : args[i + 1]; };
const ENV = opt('env', 'prod');
const SITES = opt('sites', 'gt,anywhere').split(',');
const JSON_OUT = opt('json', null);

const HOSTS = {
  prod: { gt: 'https://www.gt.school', anywhere: 'https://anywhere.gt.school', apply: 'https://apply.gt.school' },
  staging: { gt: 'https://gt-school-2026.webflow.io', anywhere: 'https://gt-anywhere.webflow.io' },
}[ENV];
const PLAN_HOST = { gt: 'www.gt.school', anywhere: 'anywhere.gt.school', apply: 'apply.gt.school' };

const PAGES = {
  gt: ['/', '/georgetown', '/about-us', '/programs', '/academics', '/admissions', '/contact', '/calendar', '/resources', '/links', '/thank-you', '/privacy-policy', '/terms-of-use'],
  anywhere: ['/', '/academics', '/advisors', '/intensives', '/academic-calendar', '/application-received', '/privacy-policy'],
  apply: ['/', '/?school=anywhere', '/?school=georgetown'],
};

// GA4 automatic / enhanced-measurement events and the ep.* params they carry.
const AUTO_EVENTS = new Set(['page_view', 'user_engagement', 'scroll', 'click', 'file_download', 'view_search_results', 'video_start', 'video_progress', 'video_complete', 'first_visit', 'session_start']);
const WARN_EVENTS = new Set(['form_start', 'form_submit']); // enhanced measurement form interactions should be off
const AUTO_PARAMS = new Set(['percent_scrolled', 'link_id', 'link_classes', 'link_url', 'link_domain', 'link_text', 'outbound', 'file_extension', 'file_name', 'search_term', 'video_current_time', 'video_duration', 'video_percent', 'video_provider', 'video_title', 'video_url', 'visible', 'form_id', 'form_name', 'form_destination', 'form_length', 'first_field_id', 'first_field_name', 'first_field_type', 'first_field_position', 'engagement_time_msec', 'ignore_referrer']);
// Beacons that would record a visit or conversion somewhere: aborted.
const BEACON = /facebook\.com\/tr|\/events\?cee=|analytics\.tiktok\.com\/api|tiktokw\.us|doubleclick\.net|google\.com\/(ccm|pagead|ads)|googleadservices|track\.hubspot\.com|hs-analytics\.net\/.*\.gif|__ptq\.gif|forms\.hsforms\.com\/submissions|api\.hsforms\.com|hubspot\.com\/.*\/(track|collect)/;
const PII = [/[\w.+-]+(@|%40)[\w-]+\.[\w.]+/i, /\b\d{3}[-. ]?\d{3}[-. ]?\d{4}\b/];
const TEST_EMAIL = 'ga-validator@example.com';

const results = [];
const fail = (page, check, msg) => results.push({ page, check, status: 'FAIL', msg });
const warn = (page, check, msg) => results.push({ page, check, status: 'WARN', msg });
const pass = (page, check, msg = '') => results.push({ page, check, status: 'PASS', msg });

const hostMatch = (host, pats) => pats.some((p) => (p.startsWith('*.') ? host === p.slice(2) || host.endsWith(p.slice(1)) : host === p));

function expectedSchool(site, path) {
  if (site === 'anywhere') return 'anywhere';
  if (site === 'apply') return new URLSearchParams(path.split('?')[1] || '').get('school') || null;
  const p = path.replace(/\/+$/, '') || '/';
  const umbrella = plan.school_by_page['www.gt.school'].umbrella;
  return umbrella.some((u) => (u.endsWith('/*') ? p === u.slice(0, -2) || p.startsWith(u.slice(0, -1)) : p === u)) ? 'umbrella' : 'georgetown';
}

function parseHits(req) {
  const u = new URL(req.url());
  if (!/\/g\/collect$/.test(u.pathname)) return null;
  const body = req.postData() || '';
  const lines = body.split('\n').filter(Boolean);
  const base = Object.fromEntries(u.searchParams);
  return (lines.length ? lines : ['']).map((l) => ({ ...base, ...Object.fromEntries(new URLSearchParams(l)) })).filter((h) => h.en);
}

async function openPage(browser, site, url, setup) {
  const ctx = await browser.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140 Safari/537.36 gt-ga-validator' });
  if (ENV === 'staging') await ctx.addInitScript(() => { try { localStorage.setItem('gt_analytics_test', '1'); } catch (e) {} });
  const page = await ctx.newPage();
  const rec = { hits: [], hosts: new Set(), navigations: [] };
  const origin = new URL(url).hostname;
  await ctx.route('**/*', async (route) => {
    const req = route.request();
    const u = new URL(req.url());
    const hits = parseHits(req);
    if (hits) { rec.hits.push(...hits); return route.fulfill({ status: 204, body: '' }); }
    // Only count tags the page itself loads, not what embedded iframes (Calendly, Vidzflow) pull in.
    const mainFrame = (() => { try { return req.frame() === page.mainFrame() && !(req.isNavigationRequest() && rec.loaded); } catch (e) { return false; } })();
    if (u.hostname !== origin && mainFrame && !/website-files\.com|cloudfront\.net|jsdelivr\.net|googleapis\.com|gstatic\.com|webflow\.(com|io)|typekit|unpkg\.com/.test(u.hostname)) { rec.hosts.add(u.hostname); if (process.env.DEBUG_HOSTS && u.hostname.includes(process.env.DEBUG_HOSTS)) console.error('[host]', req.method(), req.resourceType(), req.url().slice(0, 200), (req.postData() || '').slice(0, 300)); }
    if (setup?.mock) for (const [re, body] of setup.mock) if (re.test(req.url())) return route.fulfill({ status: 200, contentType: body.startsWith('<') ? 'text/html' : 'application/json', body });
    if (BEACON.test(req.url())) return route.abort();
    if (req.isNavigationRequest() && req.frame() === page.mainFrame() && rec.loaded) { rec.navigations.push(req.url()); return route.abort(); }
    return route.continue();
  });
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  rec.loaded = true;
  await page.waitForTimeout(3500);
  return { ctx, page, rec };
}

// gtag batches hits and sends them up to ~5 s later.
const flush = (page) => page.waitForTimeout(6000);
async function waitForEvent(page, rec, en, ms = 12000) {
  for (let t = 0; t < ms && !rec.hits.some((h) => h.en === en); t += 500) await page.waitForTimeout(500);
}

function checkHits(label, site, path, rec, { expectPageViews = 1 } = {}) {
  const hits = rec.hits;
  const g = plan.tags[PLAN_HOST[site]]?.ga4 || plan.property.ga4;
  const tids = [...new Set(hits.map((h) => h.tid))];
  if (!hits.length) return fail(label, 'ga4_loaded', 'no GA4 hits at all');
  tids.length === 1 && tids[0] === g ? pass(label, 'ga4_id', g) : fail(label, 'ga4_id', `measurement IDs seen: ${tids.join(', ')} (want only ${g})`);

  const pv = hits.filter((h) => h.en === 'page_view').length;
  pv === expectPageViews ? pass(label, 'page_view_once') : fail(label, 'page_view_once', `${pv} page_view hits (want ${expectPageViews})`);

  const want = expectedSchool(site, path);
  const pvSchools = [...new Set(hits.filter((h) => h.en === 'page_view').map((h) => h['ep.school'] ?? '(not set)'))];
  if (want === null) pvSchools.every((s) => plan.params.school.values.includes(s)) ? pass(label, 'school') : fail(label, 'school', `page_view school=${pvSchools.join(',')}`);
  else pvSchools.length === 1 && pvSchools[0] === want ? pass(label, 'school', want) : fail(label, 'school', `page_view school=${pvSchools.join(',')} (want ${want})`);

  for (const h of hits) {
    const en = h.en;
    if (WARN_EVENTS.has(en)) warn(label, 'event_name', `${en}: enhanced-measurement form interactions should be off in GA4 Admin`);
    else if (!AUTO_EVENTS.has(en) && !plan.events[en]) fail(label, 'event_name', `unplanned event "${en}"`);
    if (!/^[a-z][a-z0-9_]{0,39}$/.test(en)) fail(label, 'event_name', `"${en}" is not snake_case <= 40 chars`);
    for (const [k, v] of Object.entries(h)) {
      const m = k.match(/^(ep|epn|up|upn)\.(.+)$/);
      if (m) {
        const p = m[2];
        if (plan.forbidden_params.includes(p)) fail(label, 'no_forbidden_params', `${en} sends ${p}`);
        else if (!plan.params[p] && !AUTO_PARAMS.has(p)) fail(label, 'planned_params', `${en} sends unplanned param ${p}=${String(v).slice(0, 40)}`);
        else if (plan.params[p]?.values && !AUTO_EVENTS.has(en) && !plan.params[p].values.includes(v)) fail(label, 'param_values', `${en} ${p}="${v}" not in plan`);
        else if (plan.params[p]?.values && en === 'page_view' && p === 'school' && !plan.params.school.values.includes(v)) fail(label, 'param_values', `school="${v}" not in plan`);
      }
      if ((m || k === 'dl' || k === 'dr') && PII.some((re) => re.test(decodeURIComponent(String(v))))) fail(label, 'no_pii', `${en} ${k} looks like PII: ${String(v).slice(0, 60)}`);
    }
    const spec = plan.events[en];
    if (spec?.required) for (const r of spec.required) if (!(`ep.${r}` in h || `epn.${r}` in h || (r === 'value' && 'epn.value' in h) || (r === 'school' && 'ep.school' in h))) fail(label, 'required_params', `${en} is missing ${r}`);
  }
}

function checkHosts(label, site, rec) {
  const allowed = plan.tags[PLAN_HOST[site]]?.allowed_hosts;
  if (!allowed) return;
  const extra = [...rec.hosts].filter((h) => !hostMatch(h, allowed));
  extra.length ? fail(label, 'tag_hosts', `unplanned third-party hosts: ${extra.join(', ')}`) : pass(label, 'tag_hosts', `${rec.hosts.size} hosts, all planned`);
}

function expectEvent(label, rec, en, params) {
  const got = rec.hits.filter((h) => h.en === en);
  if (!got.length) return fail(label, 'conversion', `no ${en} hit`);
  const h = got[got.length - 1];
  const bad = Object.entries(params).filter(([k, v]) => (h[`ep.${k}`] ?? h[`epn.${k}`]) !== String(v));
  bad.length ? fail(label, 'conversion', `${en} params: ${bad.map(([k, v]) => `${k}=${h[`ep.${k}`] ?? h[`epn.${k}`] ?? '(none)'} want ${v}`).join(', ')}`)
    : pass(label, 'conversion', `${en} ${Object.entries(params).map(([k, v]) => `${k}=${v}`).join(' ')}`);
}

async function staticChecks(browser, site) {
  for (const path of PAGES[site]) {
    const url = HOSTS[site] + path;
    const label = `${PLAN_HOST[site]}${path}`;
    try {
      const { ctx, page, rec } = await openPage(browser, site, url);
      await page.mouse.wheel(0, 30000);
      await flush(page);
      checkHits(label, site, path, rec);
      checkHosts(label, site, rec);
      await ctx.close();
    } catch (e) { fail(label, 'load', e.message.split('\n')[0]); }
  }
}

async function conversionChecks(browser, site) {
  const H = HOSTS[site];
  if (site === 'gt') {
    // Router: each school choice.
    for (const [sel, dest] of [['a[href*="/georgetown"]', 'georgetown'], ['a[href*="anywhere.gt.school"]', 'anywhere'], ['a[href*="apply.gt.school"][href*="school=georgetown"]', 'apply_georgetown'], ['a[href*="apply.gt.school"][href*="school=anywhere"]', 'apply_anywhere']]) {
      const label = `www.gt.school/ router -> ${dest}`;
      const { ctx, page, rec } = await openPage(browser, site, H + '/');
      const n = await page.evaluate((s) => {
        const a = document.querySelector(s);
        if (!a) return 0;
        window.addEventListener('click', (e) => e.preventDefault(), { once: true });
        a.click();
        return 1;
      }, sel);
      if (!n) { fail(label, 'conversion', `no link matches ${sel}`); await ctx.close(); continue; }
      await waitForEvent(page, rec, 'router_choice');
      expectEvent(label, rec, 'router_choice', { destination: dest });
      await ctx.close();
    }
    // HubSpot interest form + Calendly tour on /georgetown (both simulated; nothing is submitted).
    {
      const label = 'www.gt.school/georgetown hubspot form';
      const { ctx, page, rec } = await openPage(browser, site, H + '/georgetown');
      await page.evaluate(() => window.postMessage({ type: 'hsFormCallback', eventName: 'onFormSubmitted', id: 'b3847a49-61ad-4da9-b7ce-5de811fe686f', data: [] }, '*'));
      await waitForEvent(page, rec, 'generate_lead');
      expectEvent(label, rec, 'generate_lead', { form_name: 'georgetown_interest', lead_source: 'inline_form', school: 'georgetown' });
      await ctx.close();
    }
    {
      const label = 'www.gt.school/georgetown calendly tour';
      const mock = [[/^https:\/\/calendly\.com\/__gt_validator/, '<script>parent.postMessage({event:"calendly.event_scheduled",payload:{}},"*")</script>']];
      const { ctx, page, rec } = await openPage(browser, site, H + '/georgetown', { mock });
      await page.evaluate(() => { const f = document.createElement('iframe'); f.src = 'https://calendly.com/__gt_validator'; document.body.appendChild(f); });
      await waitForEvent(page, rec, 'schedule_tour');
      expectEvent(label, rec, 'schedule_tour', { form_name: 'georgetown_campus_tour', school: 'georgetown' });
      await ctx.close();
    }
  }
  if (site === 'anywhere') {
    // Waitlist popup (HubSpot submission mocked).
    for (const [path, open, form, src] of [
      ['/?gta_waitlist_preview', null, 'anywhere_waitlist', 'homepage_popup'],
    ]) {
      const label = `anywhere.gt.school${path} popup (${src})`;
      const mock = [[/api\.hsforms\.com\/submissions/, '{"inlineMessage":"ok"}']];
      const { ctx, page, rec } = await openPage(browser, site, H + path, { mock });
      try {
        if (open === 'begin') {
          const ok = await page.evaluate(() => {
            const el = [...document.querySelectorAll('a, .button, button, div')].find((e) => e.offsetParent !== null && /^\s*Begin Application\s*$/i.test(e.textContent));
            if (!el) return false;
            el.click();
            return true;
          });
          if (!ok) throw new Error('no visible Begin Application button');
        }
        await page.waitForSelector('#gtaw:not([hidden]) #gtaw-email', { timeout: 8000 });
        await page.fill('#gtaw-email', TEST_EMAIL);
        await page.click('#gtaw-submit');
        await waitForEvent(page, rec, 'generate_lead');
        expectEvent(label, rec, 'generate_lead', { form_name: form, lead_source: src, school: 'anywhere' });
        checkHits(label, site, '/', rec, { expectPageViews: 1 });
      } catch (e) { fail(label, 'conversion', e.message.split('\n')[0]); }
      await ctx.close();
    }
    // Interest form (#gt-anywhere-form) with the Supabase webhook mocked and the redirect blocked.
    {
      const label = 'anywhere.gt.school/academics interest form';
      const mock = [[/partner-lead-webhook/, '{"success":true}']];
      const { ctx, page, rec } = await openPage(browser, site, H + '/academics', { mock });
      try {
        const sent = await page.evaluate((email) => {
          const f = document.getElementById('gt-anywhere-form');
          if (!f) return false;
          const set = (n, v) => { const el = f.querySelector(`[name="${n}"]`); if (el) el.value = v; };
          set('first_name', 'Ga'); set('last_name', 'Validator'); set('email', email); set('phone', '5125550100'); set('zip_code', '78626');
          f.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
          return true;
        }, TEST_EMAIL);
        if (!sent) { warn(label, 'conversion', '#gt-anywhere-form is not on this page (removed?); interest-form tracking not tested'); await ctx.close(); return; }
        await waitForEvent(page, rec, 'generate_lead');
        expectEvent(label, rec, 'generate_lead', { form_name: 'anywhere_interest', lead_source: 'inline_form', school: 'anywhere' });
        checkHits(label, site, '/academics', rec);
      } catch (e) { fail(label, 'conversion', e.message.split('\n')[0]); }
      await ctx.close();
    }
  }
}

async function stagingIsSilent(browser) {
  // Without the test flag, staging must send nothing to GA4/TikTok/HubSpot.
  for (const host of plan.staging_hosts) {
    const label = `${host} (no test flag)`;
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    const seen = new Set();
    page.on('request', (r) => { const u = new URL(r.url()); if (/google-analytics|googletagmanager|tiktok|hs-scripts|hs-analytics|facebook|doubleclick/.test(u.hostname)) seen.add(u.hostname); });
    await ctx.route('**/*', (route) => (BEACON.test(route.request().url()) || parseHits(route.request()) ? route.abort() : route.continue()));
    await page.goto('https://' + host + '/', { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(4000);
    const meta = [...seen].filter((h) => /facebook/.test(h));
    const other = [...seen].filter((h) => !/facebook/.test(h));
    other.length ? fail(label, 'staging_silent', `staging loads ${other.join(', ')}`) : pass(label, 'staging_silent');
    if (meta.length) warn(label, 'staging_silent', 'Meta pixel loads on staging via the Webflow Facebook integration (UI setting, not code)');
    await ctx.close();
  }
}

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/usr/bin/chromium', args: ['--no-sandbox'] });
try {
  for (const site of SITES) {
    if (!HOSTS[site]) continue;
    await staticChecks(browser, site);
    await conversionChecks(browser, site);
  }
  if (ENV === 'prod' && !opt('sites')) await stagingIsSilent(browser);
} finally {
  await browser.close();
}

// Report: one line per page/check, failures first.
const order = { FAIL: 0, WARN: 1, PASS: 2 };
const seen = new Set();
const rows = results.filter((r) => { const k = r.status + r.page + r.check + r.msg; if (seen.has(k)) return false; seen.add(k); return true; })
  .sort((a, b) => order[a.status] - order[b.status] || a.page.localeCompare(b.page));
const color = { FAIL: '\x1b[31m', WARN: '\x1b[33m', PASS: '\x1b[32m' };
for (const r of rows) if (r.status !== 'PASS' || args.includes('--verbose')) console.log(`${color[r.status]}${r.status}\x1b[0m  ${r.page}  [${r.check}] ${r.msg}`);
const n = (s) => rows.filter((r) => r.status === s).length;
console.log(`\n${ENV} ${SITES.join('+')}: ${n('PASS')} pass, ${n('WARN')} warn, ${n('FAIL')} fail  (--verbose lists passes)`);
if (JSON_OUT) writeFileSync(JSON_OUT, JSON.stringify({ env: ENV, sites: SITES, at: new Date().toISOString(), results: rows }, null, 2));
process.exit(n('FAIL') ? 1 : 0);
