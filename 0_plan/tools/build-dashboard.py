#!/usr/bin/env python3
"""Render the decision registers (0_plan/03 and 0_plan/07) plus the loop log into one review page:
0_plan/ensemble/register-dashboard.html. Regenerate after every merge; publish the same path to keep the URL."""
import re, os, html, datetime as dt
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def split_row(line):
    body = line.strip()[1:-1].replace('\\|', '\x00'); return [x.strip().replace('\x00', '|') for x in body.split('|')]
def md_inline(s):
    s = html.escape(s)
    s = re.sub(r'`([^`]+)`', r'<code>\1</code>', s)
    s = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', s)
    return s
def state_of(astra, verdict, af, fa, status):
    if status.startswith('Superseded'): return 'Superseded'
    if astra.startswith('Pending'): return 'Drafted'
    if af.startswith('Fail') or fa.startswith('Fail'): return 'Rework'
    if af.startswith('Pass') and fa.startswith('Pass') and verdict in ('Agree', 'Partly', 'Differ', 'Escalated'): return 'Complete'
    return 'Reviewed'
rows = []
PARTS = {'D': 'Project and operating decisions (0_plan/03)', 'DD': 'A. Design', 'MD': 'B. Marketing', 'MN': 'C. Motion', 'AN': 'D. Analytics and GA4', 'AD': 'E. Advertising channels', 'CB': 'F. Chatbot platform', 'SE': 'G. SEO and AEO'}
for name, ncells in (('03-decisions-and-open-questions.md', 11), ('07-design-decisions.md', 9)):
    for line in open(os.path.join(ROOT, name), encoding='utf-8'):
        m = re.match(r'^\|\s*((?:D|DD|MD|MN|AN|AD|CB|SE)-\d{2,3})\s*\|', line)
        if not m: continue
        c = split_row(line)
        if len(c) != ncells: continue
        rid = c[0]; part = rid.split('-')[0]
        rec = dict(id=rid, part=part, decision=c[1], options=c[2], fable=c[3], astra=c[4], verdict=c[5], af=c[6], fa=c[7])
        if ncells == 11: rec.update(owner=c[8], needed=c[9], status=c[10])
        else: rec.update(owner='', needed='', status=c[8])
        rec['state'] = state_of(rec['astra'], rec['verdict'], rec['af'], rec['fa'], rec['status'])
        rows.append(rec)
total = len(rows); by = lambda k, v: sum(1 for r in rows if r[k] == v)
complete = by('state', 'Complete') + by('state', 'Superseded')
loop = []
in_log = False
for line in open(os.path.join(ROOT, '12-register-loop.md'), encoding='utf-8'):
    if line.startswith('## 5. Log'): in_log = True; continue
    if in_log and line.startswith('## '): break
    if in_log and re.match(r'^\|\s*\d+\s*\|', line): loop.append(split_row(line))
now = dt.datetime.now().strftime('%Y-%m-%d %H:%M')
def cell(text, clamp=170):
    t = md_inline(text)
    if len(text) <= clamp: return f'<div class="txt">{t}</div>'
    short = md_inline(text[:clamp].rsplit(' ', 1)[0]) + '…'
    return f'<details class="more"><summary>{short}</summary><div class="txt">{t}</div></details>'
def pill(kind, text):
    return f'<span class="pill {kind}">{html.escape(text)}</span>'
def verdict_kind(v): return {'Agree': 'ok', 'Partly': 'warn', 'Differ': 'bad', 'Escalated': 'bad'}.get(v, 'muted')
def check_kind(x): return 'ok' if x.startswith('Pass') else ('bad' if x.startswith('Fail') else 'muted')
def check_text(x): return 'Pass' if x.startswith('Pass') else ('Fail' if x.startswith('Fail') else 'Pending')
def state_kind(s): return {'Complete': 'ok', 'Superseded': 'muted', 'Reviewed': 'warn', 'Drafted': 'muted', 'Rework': 'bad'}.get(s, 'muted')
differ = [r for r in rows if r['verdict'] in ('Differ', 'Escalated')]
out = []
out.append(f"""<title>GT Web Decision Register</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,500;7..72,600&family=Inter+Tight:wght@400;500;600&family=Inconsolata:wght@500;600&display=swap">
<style>
:root{{--bg:#F5F7F9;--surface:#FFFFFF;--surface-alt:#EEF2F5;--text:#14202B;--muted:#5B6B7A;--line:#D8DEE4;--accent:#0B5FA5;--accent-ink:#FFFFFF;--ok:#1F7A4D;--ok-bg:#E4F3EA;--warn:#8A5300;--warn-bg:#FCEFD9;--bad:#A8241C;--bad-bg:#FBE4E1;--neutral:#5B6B7A;--neutral-bg:#E8ECF0;--focus:#0B5FA5;--serif:"Literata",Georgia,"Times New Roman",serif;--sans:"Inter Tight","Helvetica Neue",Arial,sans-serif;--mono:"Inconsolata","SF Mono",Menlo,monospace}}
@media (prefers-color-scheme: dark){{:root:not([data-theme="light"]){{--bg:#0F1418;--surface:#161C22;--surface-alt:#1C242C;--text:#E6EBF0;--muted:#98A6B3;--line:#2A343E;--accent:#6FB1F0;--accent-ink:#0F1418;--ok:#5CC08A;--ok-bg:#15301F;--warn:#E0A340;--warn-bg:#33270F;--bad:#F08A80;--bad-bg:#3A1A17;--neutral:#98A6B3;--neutral-bg:#222B34;--focus:#6FB1F0}}}}
:root[data-theme="dark"]{{--bg:#0F1418;--surface:#161C22;--surface-alt:#1C242C;--text:#E6EBF0;--muted:#98A6B3;--line:#2A343E;--accent:#6FB1F0;--accent-ink:#0F1418;--ok:#5CC08A;--ok-bg:#15301F;--warn:#E0A340;--warn-bg:#33270F;--bad:#F08A80;--bad-bg:#3A1A17;--neutral:#98A6B3;--neutral-bg:#222B34;--focus:#6FB1F0}}
*{{box-sizing:border-box}} body{{margin:0;background:var(--bg);color:var(--text);font-family:var(--sans);font-size:14px;line-height:1.45}}
a{{color:var(--accent)}} code{{font-family:var(--mono);font-size:.92em;background:var(--surface-alt);padding:0 .3em;border-radius:3px}}
.wrap{{max-width:1440px;margin:0 auto;padding:24px 20px 60px}}
header{{display:flex;flex-wrap:wrap;align-items:baseline;gap:12px 24px;border-bottom:1px solid var(--line);padding-bottom:16px}}
h1{{font-family:var(--serif);font-weight:600;font-size:28px;margin:0;letter-spacing:-.01em;text-wrap:balance}}
.meta{{font-family:var(--mono);color:var(--muted);font-size:13px}}
.tiles{{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin:18px 0}}
.tile{{background:var(--surface);border:1px solid var(--line);padding:12px 14px}} .tile b{{display:block;font-family:var(--mono);font-size:26px;font-weight:600;font-variant-numeric:tabular-nums;line-height:1.1}} .tile span{{display:block;color:var(--muted);font-size:12px;letter-spacing:.04em;text-transform:uppercase;margin-top:4px}}
.tile.ok b{{color:var(--ok)}} .tile.warn b{{color:var(--warn)}} .tile.bad b{{color:var(--bad)}}
.filters{{position:sticky;top:0;z-index:5;background:var(--bg);display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;padding:12px 0;border-bottom:1px solid var(--line)}}
.filters label{{display:flex;gap:6px;align-items:center;color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.04em}}
select,input[type=search]{{font:inherit;font-size:13px;color:var(--text);background:var(--surface);border:1px solid var(--line);padding:6px 8px;border-radius:4px}} input[type=search]{{min-width:240px}}
select:focus,input:focus,summary:focus,button:focus{{outline:2px solid var(--focus);outline-offset:1px}}
button.toggle{{font:inherit;font-size:13px;background:var(--surface);border:1px solid var(--line);padding:6px 10px;border-radius:4px;color:var(--text);cursor:pointer}}
h2{{font-family:var(--serif);font-weight:600;font-size:20px;margin:32px 0 10px;text-wrap:balance}} h2 small{{font-family:var(--mono);font-weight:500;color:var(--muted);font-size:13px;margin-left:10px}}
.note{{color:var(--muted);max-width:70ch;margin:0 0 12px}}
.tablewrap{{overflow-x:auto;border:1px solid var(--line);background:var(--surface)}}
table{{border-collapse:collapse;width:100%;min-width:1180px}} th{{text-align:left;font-size:11.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);font-weight:600;padding:9px 10px;border-bottom:1px solid var(--line);background:var(--surface-alt);position:sticky;top:57px}}
td{{vertical-align:top;padding:9px 10px;border-bottom:1px solid var(--line)}} tr:last-child td{{border-bottom:0}}
td.id{{font-family:var(--mono);font-weight:600;white-space:nowrap;color:var(--accent)}} td.dec{{min-width:170px;font-weight:500}} td.reason{{min-width:280px;max-width:420px}} td.small{{white-space:nowrap}}
.txt{{max-width:62ch}} details.more summary{{cursor:pointer;list-style:none;color:var(--text)}} details.more summary::-webkit-details-marker{{display:none}} details.more[open] summary{{display:none}} details.more summary::after{{content:" expand";color:var(--accent);font-size:12px}}
.pill{{display:inline-block;font-family:var(--mono);font-size:11.5px;font-weight:600;padding:2px 7px;border-radius:999px;border:1px solid transparent;white-space:nowrap}} .pill.ok{{color:var(--ok);background:var(--ok-bg)}} .pill.warn{{color:var(--warn);background:var(--warn-bg)}} .pill.bad{{color:var(--bad);background:var(--bad-bg)}} .pill.muted{{color:var(--neutral);background:var(--neutral-bg)}}
.differ{{display:grid;gap:10px}} .drow{{background:var(--surface);border:1px solid var(--line);border-left:3px solid var(--bad);padding:12px 14px;display:grid;grid-template-columns:150px 1fr 1fr;gap:12px 18px}} .drow h3{{margin:0;font-size:13px;font-weight:600}} .drow .who{{font-size:11.5px;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);margin-bottom:4px}} .drow .id{{font-family:var(--mono);color:var(--accent);font-weight:600}}
@media (max-width:900px){{.drow{{grid-template-columns:1fr}}}}
tr.hide{{display:none}} .drow.hide{{display:none}}
</style>
<div class="wrap">
<header><h1>GT Web Decision Register</h1><div class="meta">Generated {now} from 0_plan/03 and 0_plan/07. Regenerated at every loop iteration.</div></header>
<div class="tiles">
<div class="tile"><b>{total}</b><span>decision rows</span></div>
<div class="tile ok"><b>{complete}</b><span>complete or superseded</span></div>
<div class="tile warn"><b>{by('state','Reviewed') + by('state','Drafted')}</b><span>awaiting a step</span></div>
<div class="tile bad"><b>{by('state','Rework')}</b><span>in rework</span></div>
<div class="tile ok"><b>{by('verdict','Agree')}</b><span>models agree</span></div>
<div class="tile warn"><b>{by('verdict','Partly')}</b><span>partly agree</span></div>
<div class="tile bad"><b>{len(differ)}</b><span>differ, for a human</span></div>
</div>
<div class="filters">
<label>Part <select id="fpart"><option value="">All</option>{''.join(f'<option value="{k}">{k}: {v}</option>' for k,v in PARTS.items())}</select></label>
<label>Verdict <select id="fverdict"><option value="">All</option><option>Agree</option><option>Partly</option><option>Differ</option><option>Escalated</option><option value="Pending">Pending</option></select></label>
<label>State <select id="fstate"><option value="">All</option><option>Complete</option><option>Reviewed</option><option>Drafted</option><option>Rework</option><option>Superseded</option></select></label>
<label>Search <input id="fsearch" type="search" placeholder="id, decision, reasoning…"></label>
<button class="toggle" id="expand">Expand all reasoning</button>
<span class="meta" id="count"></span>
</div>
<h2>Where the models differ <small>{len(differ)} rows, Johnny or Nari decides</small></h2>
<p class="note">Both positions are verified against the documents; Complete means audited, not agreed. Decide in the register (verdict and status), and the page regenerates.</p>
<div class="differ">""")
for r in differ:
    out.append(f'<div class="drow" data-part="{r["part"]}" data-verdict="{r["verdict"]}" data-state="{r["state"]}"><div><span class="id">{r["id"]}</span><h3>{md_inline(r["decision"])}</h3><div class="meta">{html.escape(r["status"])}</div></div><div><div class="who">Fable</div>{cell(r["fable"], 260)}</div><div><div class="who">Astra</div>{cell(r["astra"], 260)}</div></div>')
out.append('</div>')
for part, title in PARTS.items():
    prow = [r for r in rows if r['part'] == part]
    if not prow: continue
    out.append(f'<h2 id="part-{part}">{html.escape(title)} <small>{len(prow)} rows, {sum(1 for r in prow if r["state"] in ("Complete","Superseded"))} complete</small></h2><div class="tablewrap"><table><thead><tr><th>ID</th><th>Decision</th><th>Verdict</th><th>State</th><th>Fable</th><th>Astra</th><th>Astra checks Fable</th><th>Fable checks Astra</th><th>Status</th></tr></thead><tbody>')
    for r in prow:
        status = r['status'] + (f' · owner {r["owner"]} · before {r["needed"]}' if r['owner'] else '')
        out.append(f'<tr data-part="{r["part"]}" data-verdict="{r["verdict"] if r["verdict"] in ("Agree","Partly","Differ","Escalated") else "Pending"}" data-state="{r["state"]}"><td class="id">{r["id"]}</td><td class="dec">{md_inline(r["decision"])}<details class="more"><summary style="font-size:12px;color:var(--muted)">options</summary><div class="txt" style="font-size:12.5px;color:var(--muted)">{md_inline(r["options"])}</div></details></td><td class="small">{pill(verdict_kind(r["verdict"]), r["verdict"] if r["verdict"] else "Pending")}</td><td class="small">{pill(state_kind(r["state"]), r["state"])}</td><td class="reason">{cell(r["fable"])}</td><td class="reason">{cell(r["astra"])}</td><td class="small">{pill(check_kind(r["af"]), check_text(r["af"]))}{"" if not r["af"].startswith("Fail") else "<div class=txt style=font-size:12px>"+md_inline(r["af"][:200])+"</div>"}</td><td class="small">{pill(check_kind(r["fa"]), check_text(r["fa"]))}{"" if not r["fa"].startswith("Fail") else "<div class=txt style=font-size:12px>"+md_inline(r["fa"][:200])+"</div>"}</td><td style="font-size:12.5px;color:var(--muted);min-width:160px">{md_inline(status)}</td></tr>')
    out.append('</tbody></table></div>')
out.append(f'<h2>Loop log <small>{len(loop)} iterations</small></h2><div class="tablewrap"><table style="min-width:900px"><thead><tr><th>Iteration</th><th>Date</th><th>Incomplete before</th><th>Passes run</th><th>Incomplete after</th><th>Notes</th></tr></thead><tbody>')
for l in loop:
    if len(l) >= 6: out.append('<tr>' + ''.join(f'<td>{md_inline(x)}</td>' for x in l[:6]) + '</tr>')
out.append("""</tbody></table></div>
<p class="note" style="margin-top:28px">Sources: <code>0_plan/03-decisions-and-open-questions.md</code>, <code>0_plan/07-design-decisions.md</code>, <code>0_plan/12-register-loop.md</code>. Generated by <code>0_plan/tools/build-dashboard.py</code>.</p>
</div>
<script>
(function(){const q=s=>document.querySelector(s);const rows=[...document.querySelectorAll('tr[data-part], .drow[data-part]')];const f=()=>{const p=q('#fpart').value,v=q('#fverdict').value,s=q('#fstate').value,t=q('#fsearch').value.trim().toLowerCase();let n=0;rows.forEach(r=>{const ok=(!p||r.dataset.part===p)&&(!v||r.dataset.verdict===v)&&(!s||r.dataset.state===s)&&(!t||r.textContent.toLowerCase().includes(t));r.classList.toggle('hide',!ok);if(ok&&r.tagName==='TR')n++});q('#count').textContent=n+' rows shown'};['#fpart','#fverdict','#fstate'].forEach(id=>q(id).addEventListener('change',f));q('#fsearch').addEventListener('input',f);let open=false;q('#expand').addEventListener('click',()=>{open=!open;document.querySelectorAll('details.more').forEach(d=>d.open=open);q('#expand').textContent=open?'Collapse reasoning':'Expand all reasoning'});f();})();
</script>""")
os.makedirs(os.path.join(ROOT, 'ensemble'), exist_ok=True)
open(os.path.join(ROOT, 'ensemble', 'register-dashboard.html'), 'w', encoding='utf-8').write('\n'.join(out))
print(f"dashboard: {total} rows, {complete} complete, {len(differ)} differ, {len(loop)} loop rows -> 0_plan/ensemble/register-dashboard.html ({os.path.getsize(os.path.join(ROOT,'ensemble','register-dashboard.html'))//1024} KB)")
