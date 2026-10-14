#!/usr/bin/env node
// Terminal GA4 dashboard for GT School (property 516065070, G-494D3VN0SF). No dependencies.
//
//   node analytics/dashboard.mjs            # live view, refreshes itself (Ctrl-C to quit)
//   node analytics/dashboard.mjs --once     # print once and exit
//
// Auth: a service-account key with Viewer on the GA4 property, read from $GA_KEY or ~/.config/gt/ga-reader.json.
// Names (school, form_name, lead_source, destination) follow tracking-plan.json.
import { readFileSync } from 'node:fs';
import { createSign } from 'node:crypto';
import { homedir } from 'node:os';

const PROPERTY = 'properties/516065070';
const KEY = JSON.parse(readFileSync(process.env.GA_KEY || `${homedir()}/.config/gt/ga-reader.json`, 'utf8'));
const FULL_EVERY_MS = 5 * 60_000;
const REALTIME_EVERY_MS = 60_000;
const ONCE = process.argv.includes('--once');

// ---- auth: service-account JWT -> access token (cached until 5 min before expiry)
let token = null;
async function accessToken() {
  if (token && token.exp - Date.now() > 300_000) return token.value;
  const now = Math.floor(Date.now() / 1000);
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({ iss: KEY.client_email, scope: 'https://www.googleapis.com/auth/analytics.readonly', aud: KEY.token_uri, iat: now, exp: now + 3600 })}`;
  const sig = createSign('RSA-SHA256').update(unsigned).sign(KEY.private_key, 'base64url');
  const r = await fetch(KEY.token_uri, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${sig}` }) });
  const j = await r.json();
  if (!j.access_token) throw new Error(`token: ${JSON.stringify(j)}`);
  token = { value: j.access_token, exp: Date.now() + j.expires_in * 1000 };
  return token.value;
}

async function ga(method, body) {
  const r = await fetch(`https://analyticsdata.googleapis.com/v1beta/${PROPERTY}:${method}`, {
    method: 'POST', headers: { Authorization: `Bearer ${await accessToken()}`, 'Content-Type': 'application/json' }, body: JSON.stringify(body),
  });
  const j = await r.json();
  if (j.error) throw new Error(`${method}: ${j.error.message}`);
  return j;
}

// Rows -> [{dim..., met...}] keyed by the API names.
const rows = (rep) => (rep.rows || []).map((r) => {
  const o = {};
  (rep.dimensionHeaders || []).forEach((h, i) => (o[h.name] = r.dimensionValues[i].value));
  (rep.metricHeaders || []).forEach((h, i) => (o[h.name] = Number(r.metricValues[i].value)));
  return o;
});

const KEY_EVENTS = ['generate_lead', 'schedule_tour', 'submit_application', 'purchase', 'complete_enrollment'];
const HOSTS = ['www.gt.school', 'anywhere.gt.school', 'apply.gt.school', 'summer.gt.school'];
const inList = (field, values) => ({ filter: { fieldName: field, inListFilter: { values } } });
const range = (start, end = 'today', name) => ({ startDate: start, endDate: end, ...(name && { name }) });
const LAST7 = [range('7daysAgo', 'today')];

async function fetchFull() {
  const [a, c, b] = await Promise.all([
    ga('batchRunReports', { requests: [
      // 0: users / sessions per host, today vs yesterday vs 7 days
      { dimensions: [{ name: 'hostName' }], metrics: [{ name: 'activeUsers' }, { name: 'sessions' }], dateRanges: [range('today', 'today', 'today'), range('yesterday', 'yesterday', 'yesterday'), range('6daysAgo', 'today', 'd7')], dimensionFilter: inList('hostName', HOSTS) },
      // 1: key events by name, same ranges
      { dimensions: [{ name: 'eventName' }], metrics: [{ name: 'eventCount' }], dateRanges: [range('today', 'today', 'today'), range('yesterday', 'yesterday', 'yesterday'), range('6daysAgo', 'today', 'd7')], dimensionFilter: inList('eventName', KEY_EVENTS) },
      // 2: leads by form and placement, 7 days
      { dimensions: [{ name: 'customEvent:form_name' }, { name: 'customEvent:lead_source' }], metrics: [{ name: 'eventCount' }], dateRanges: LAST7, dimensionFilter: inList('eventName', ['generate_lead']), orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }], limit: 8 },
      // 3: router choice, 7 days
      { dimensions: [{ name: 'customEvent:destination' }], metrics: [{ name: 'eventCount' }], dateRanges: LAST7, dimensionFilter: inList('eventName', ['router_choice']) },
      // 4: channels, 7 days
      { dimensions: [{ name: 'sessionDefaultChannelGroup' }], metrics: [{ name: 'sessions' }], dateRanges: LAST7, orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 9 },
    ] }),
    // Conversions = eventCount of the planned key events. The keyEvents metric is not used: until 2026-10-13 page_view was a key event.
    ga('batchRunReports', { requests: [
      { dimensions: [{ name: 'hostName' }], metrics: [{ name: 'eventCount' }], dateRanges: LAST7, dimensionFilter: inList('eventName', KEY_EVENTS) },
      { dimensions: [{ name: 'sessionDefaultChannelGroup' }], metrics: [{ name: 'eventCount' }], dateRanges: LAST7, dimensionFilter: inList('eventName', KEY_EVENTS) },
      { dimensions: [{ name: 'sessionSource' }], metrics: [{ name: 'eventCount' }], dateRanges: LAST7, dimensionFilter: inList('eventName', KEY_EVENTS), orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }], limit: 8 },
      { dimensions: [{ name: 'hostName' }, { name: 'landingPage' }], metrics: [{ name: 'eventCount' }], dateRanges: LAST7, dimensionFilter: inList('eventName', KEY_EVENTS), limit: 200 },
    ] }),
    ga('batchRunReports', { requests: [
      // 0: landing pages, 7 days
      { dimensions: [{ name: 'hostName' }, { name: 'landingPage' }], metrics: [{ name: 'sessions' }, { name: 'engagementRate' }], dateRanges: LAST7, dimensionFilter: inList('hostName', HOSTS), orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 10 },
      // 1: users per day per school, 14 days (sparkline)
      { dimensions: [{ name: 'date' }, { name: 'customEvent:school' }], metrics: [{ name: 'activeUsers' }], dateRanges: [range('13daysAgo', 'today')], limit: 200 },
      // 2: sources that brought key events, 7 days
      { dimensions: [{ name: 'sessionSource' }], metrics: [{ name: 'sessions' }], dateRanges: LAST7, orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 50 },
    ] }),
  ]);
  return { a: a.reports, b: b.reports, c: c.reports };
}

async function fetchRealtime() {
  const [tot, pages, events] = await Promise.all([
    ga('runRealtimeReport', { metrics: [{ name: 'activeUsers' }], dimensions: [{ name: 'deviceCategory' }] }),
    ga('runRealtimeReport', { metrics: [{ name: 'activeUsers' }], dimensions: [{ name: 'unifiedScreenName' }], orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }], limit: 5 }),
    ga('runRealtimeReport', { metrics: [{ name: 'eventCount' }], dimensions: [{ name: 'eventName' }], dimensionFilter: inList('eventName', [...KEY_EVENTS, 'router_choice', 'waitlist_signup']) }),
  ]);
  return { tot: rows(tot), pages: rows(pages), events: rows(events) };
}

// ---- rendering
const C = { dim: '\x1b[2m', b: '\x1b[1m', r: '\x1b[0m', cyan: '\x1b[36m', green: '\x1b[32m', yel: '\x1b[33m', red: '\x1b[31m', mag: '\x1b[35m' };
const W = () => Math.max(80, Math.min(process.stdout.columns || 120, 160));
const n = (x) => (x == null || Number.isNaN(x) ? '–' : x >= 10000 ? (x / 1000).toFixed(1) + 'k' : String(Math.round(x)));
const pad = (s, w, right) => { s = String(s); const vis = s.replace(/\x1b\[[0-9;]*m/g, ''); if (vis.length > w) return s.slice(0, w - 1) + '…'; return right ? ' '.repeat(w - vis.length) + s : s + ' '.repeat(w - vis.length); };
const title = (t) => `${C.b}${C.cyan}${t}${C.r}`;
const bar = (v, max, w = 18) => { const k = max ? Math.round((v / max) * w) : 0; return C.cyan + '█'.repeat(k) + C.dim + '·'.repeat(w - k) + C.r; };
const SPARK = '▁▂▃▄▅▆▇█';
const spark = (arr) => { const m = Math.max(...arr, 1); return arr.map((v) => SPARK[Math.min(7, Math.floor((v / m) * 7.99))]).join(''); };
const shortHost = (h) => h.replace('.gt.school', '').replace(/^www$/, 'gt.school');

function byRange(rep, key) {
  // multi-range reports add a "dateRange" dimension
  const out = {};
  for (const r of rows(rep)) { const k = r[key]; out[k] ??= {}; out[k][r.dateRange] = r; }
  return out;
}

function render(full, rt, err) {
  const w = W();
  const L = [];
  const now = new Date();
  L.push(`${C.b}GT School analytics${C.r} ${C.dim}· G-494D3VN0SF · ${now.toLocaleString('en-US', { timeZone: 'America/Chicago', weekday: 'short', hour: 'numeric', minute: '2-digit' })} CT${C.r}`);
  if (err) L.push(`${C.red}! ${err}${C.r}`);
  L.push('');

  if (rt) {
    const total = rt.tot.reduce((s, r) => s + r.activeUsers, 0);
    const dev = rt.tot.map((r) => `${r.deviceCategory} ${r.activeUsers}`).join(' · ');
    const evs = rt.events.map((r) => `${r.eventName === 'generate_lead' || r.eventName === 'submit_application' ? C.green : ''}${r.eventName} ${r.eventCount}${C.r}`).join('  ') || `${C.dim}no key events${C.r}`;
    L.push(`${title('RIGHT NOW')} ${C.dim}(last 30 min)${C.r}  ${C.b}${total}${C.r} active  ${C.dim}${dev}${C.r}`);
    L.push(`  events: ${evs}`);
    for (const p of rt.pages) L.push(`  ${pad(p.unifiedScreenName, w - 10)} ${pad(p.activeUsers, 4, true)}`);
    L.push('');
  }
  if (!full) { L.push(`${C.dim}loading…${C.r}`); return L.join('\n'); }
  const { a, b, c } = full;
  const conv = (rep, ...keys) => Object.fromEntries(rows(rep).map((r) => [keys.map((k) => r[k]).join('|'), r.eventCount]));
  const convHost = conv(c[0], 'hostName'), convCh = conv(c[1], 'sessionDefaultChannelGroup'), convSrc = conv(c[2], 'sessionSource'), convLp = conv(c[3], 'hostName', 'landingPage');

  // Sites
  const hosts = byRange(a[0], 'hostName');
  L.push(`${title('SITES')}            ${C.dim}users today  yesterday  7d users  7d sessions  7d conversions${C.r}`);
  for (const h of HOSTS) {
    const r = hosts[h] || {};
    const t = r.today?.activeUsers ?? 0, y = r.yesterday?.activeUsers ?? 0;
    L.push(`  ${pad(shortHost(h), 16)} ${pad(n(t), 11, true)}  ${pad(n(y), 9, true)}  ${pad(n(r.d7?.activeUsers ?? 0), 8, true)}  ${pad(n(r.d7?.sessions ?? 0), 11, true)}  ${pad(n(convHost[h] ?? 0), 14, true)}`);
  }
  // Users per day per school
  const days = {}; const schools = new Set();
  for (const r of rows(b[1])) { days[r.date] ??= {}; days[r.date][r['customEvent:school']] = r.activeUsers; schools.add(r['customEvent:school']); }
  const dates = Object.keys(days).sort();
  const order = ['georgetown', 'anywhere', 'umbrella', 'summer', '(not set)'].filter((s) => schools.has(s));
  if (dates.length) {
    L.push(`  ${C.dim}users/day by school, 14d${C.r}`);
    for (const s of order) L.push(`  ${pad(s, 16)} ${spark(dates.map((d) => days[d][s] || 0))}  ${C.dim}${n(days[dates.at(-1)][s] || 0)} today${C.r}`);
  }
  L.push('');

  // Conversions
  const ke = byRange(a[1], 'eventName');
  L.push(`${title('CONVERSIONS')}      ${C.dim}today   yday     7d${C.r}`);
  for (const e of KEY_EVENTS) {
    const r = ke[e] || {};
    L.push(`  ${pad(e, 18)} ${pad(n(r.today?.eventCount ?? 0), 5, true)}  ${pad(n(r.yesterday?.eventCount ?? 0), 5, true)}  ${pad(n(r.d7?.eventCount ?? 0), 5, true)}`);
  }
  L.push('');

  // Two columns: leads + router | channels + sources
  const left = [], right = [];
  const leads = rows(a[2]);
  left.push(`${title('LEADS BY FORM')} ${C.dim}7d${C.r}`);
  const lmax = Math.max(...leads.map((r) => r.eventCount), 1);
  const lbl = (v) => (!v || v === '(not set)' ? '?' : v);
  for (const r of leads) left.push(`  ${pad(`${lbl(r['customEvent:form_name'])} · ${lbl(r['customEvent:lead_source'])}`, 34)} ${pad(r.eventCount, 4, true)} ${bar(r.eventCount, lmax, 10)}`);
  if (!leads.length) left.push(`  ${C.dim}none yet${C.r}`);
  left.push('');
  const router = rows(a[3]);
  left.push(`${title('ROUTER CHOICE')} ${C.dim}gt.school/, 7d${C.r}`);
  const rmax = Math.max(...router.map((r) => r.eventCount), 1);
  for (const r of router.sort((x, y) => y.eventCount - x.eventCount)) left.push(`  ${pad(r['customEvent:destination'], 20)} ${pad(r.eventCount, 5, true)} ${bar(r.eventCount, rmax, 14)}`);
  if (!router.length) left.push(`  ${C.dim}none yet${C.r}`);

  const ch = rows(a[4]);
  right.push(`${title('CHANNELS')} ${C.dim}7d sessions · conversions${C.r}`);
  const cmax = Math.max(...ch.map((r) => r.sessions), 1);
  for (const r of ch) right.push(`  ${pad(r.sessionDefaultChannelGroup, 16)} ${pad(n(r.sessions), 6, true)} ${pad(n(convCh[r.sessionDefaultChannelGroup] ?? 0), 4, true)} ${bar(r.sessions, cmax, 12)}`);
  right.push('');
  const sess = Object.fromEntries(rows(b[2]).map((r) => [r.sessionSource, r.sessions]));
  const src = rows(c[2]).map((r) => ({ sessionSource: r.sessionSource, keyEvents: r.eventCount, sessions: sess[r.sessionSource] }));
  right.push(`${title('SOURCES WITH CONVERSIONS')} ${C.dim}7d${C.r}`);
  for (const r of src) right.push(`  ${pad(r.sessionSource, 24)} ${pad(n(r.keyEvents), 4, true)} ${C.dim}of ${n(r.sessions)} sessions${C.r}`);
  if (!src.length) right.push(`  ${C.dim}none yet${C.r}`);

  const colW = Math.floor(w / 2);
  for (let i = 0; i < Math.max(left.length, right.length); i++) L.push(pad(left[i] || '', colW) + (right[i] || ''));
  L.push('');

  // Landing pages
  L.push(`${title('TOP LANDING PAGES')} ${C.dim}7d sessions · conversions · engaged${C.r}`);
  for (const r of rows(b[0])) {
    const page = r.landingPage === '' ? ' (no landing page)' : r.landingPage === '(not set)' ? ' (not set)' : r.landingPage;
    L.push(`  ${pad(shortHost(r.hostName) + page, w - 30)} ${pad(n(r.sessions), 6, true)} ${pad(n(convLp[`${r.hostName}|${r.landingPage}`] ?? 0), 5, true)} ${pad(Math.round(r.engagementRate * 100) + '%', 6, true)}`);
  }
  L.push('');
  L.push(`${C.dim}school/form_name/destination exist from 2026-10-13 on (older rows: ? / (not set)). Conversions = generate_lead, schedule_tour, submit_application, purchase, complete_enrollment. Refresh: realtime 1 min, reports 5 min.${C.r}`);
  return L.join('\n');
}

let full = null, rt = null, err = null, lastFull = 0;
async function tick() {
  try {
    if (Date.now() - lastFull >= FULL_EVERY_MS || !full) { full = await fetchFull(); lastFull = Date.now(); }
    rt = await fetchRealtime();
    err = null;
  } catch (e) { err = e.message.slice(0, 200); }
  const out = render(full, rt, err);
  if (ONCE) { console.log(out); return; }
  process.stdout.write('\x1b[2J\x1b[H' + fit(out) + '\n');
}

// Keep the view inside the pane: drop lines from the bottom (landing pages go first).
function fit(out) {
  const rows = process.stdout.rows || 999;
  const lines = out.split('\n');
  return lines.length <= rows - 1 ? out : lines.slice(0, rows - 2).join('\n') + `\n${C.dim}… ${lines.length - rows + 2} more lines (make the pane taller)${C.r}`;
}

await tick();
if (!ONCE) {
  setInterval(tick, REALTIME_EVERY_MS);
  process.stdout.on('resize', () => process.stdout.write('\x1b[2J\x1b[H' + fit(render(full, rt, err)) + '\n'));
}
