#!/usr/bin/env python3
"""Generate 0_plan/ID-INDEX.md: every id, its title (second table cell), where defined, where referenced. Never hand-edit the output."""
import re, glob, os, datetime as dt
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REPO = os.path.dirname(ROOT)
files = sorted(glob.glob(os.path.join(ROOT, '*.md'))) + sorted(glob.glob(os.path.join(REPO, '1_spec', '**', '*.md'), recursive=True)) + [os.path.join(REPO, 'CLAUDE.md')]
ID = re.compile(r'\b(P|REQ|CON|DEL|D|Q|MO|DD|MD|MN|AN|AD|CB|SE|TR|SRC|CR|W|TC|C|T|V)-(\d{2,3})\b')
defined, refs = {}, {}
for f in files:
    rel = os.path.relpath(f, REPO)
    if rel.endswith('ID-INDEX.md') or rel.endswith('RUN-LOG.md') or rel.endswith('12-traceability-matrix.md'): continue
    for n, line in enumerate(open(f, encoding='utf-8'), 1):
        m = re.match(r'^\|\s*\*{0,2}((?:P|REQ|CON|DEL|D|Q|MO|DD|MD|MN|AN|AD|CB|SE|TR|SRC|CR|W|TC|C|T|V)-\d{2,3})\*{0,2}\s*\|\s*(.*?)\s*\|', line)
        if m and m.group(1) not in defined:
            defined[m.group(1)] = (m.group(2)[:110], f"{rel}:{n}")
        for mm in ID.finditer(line):
            refs.setdefault(f"{mm.group(1)}-{mm.group(2)}", set()).add(rel.replace('0_plan/', ''))
series = [('P','Problem statements'),('J','Journeys'),('REQ','Requirements'),('CON','Constraints'),('DEL','Deliverables'),('D','Project and operating decisions'),('Q','Open questions'),('MO','Marketing objectives'),('DD','Design decisions'),('MD','Marketing decisions'),('MN','Motion decisions'),('AN','Analytics and GA4 decisions'),('AD','Advertising channel decisions'),('CB','Chatbot platform decisions'),('SE','SEO and AEO decisions'),('SRC','Sources of truth (SOURCES.md; designated in TRUTH.md)'),('TR','Source-of-truth statements (attested in TRUTH.md, proposed in truth-proposals.md)'),('CR','Claims register rows (0_plan/12-claims-register.md)'),('W','End-to-end workflows (0_plan/13)'),('TC','Test cases (1_spec/13)'),('C','Completion checklist'),('T','Build tasks'),('V','Verification checks')]
def key(i):
    s, n = i.split('-'); return (s, int(n))
out = [f"# ID index\n\nGenerated {dt.date.today()} by `tools/build-index.py`. Do not hand-edit. `tools/check-links.py` fails the build if a referenced id has no definition.\n"]
out.append("| Series | Count |\n|---|---|")
for s, title in series:
    if s == 'J': out.append(f"| J1 to J4 | 4 (defined in `00-context.md` and `02`) |"); continue
    out.append(f"| {s} ({title}) | {sum(1 for i in defined if i.split('-')[0]==s)} |")
for s, title in series:
    if s == 'J': continue
    ids = sorted((i for i in defined if i.split('-')[0]==s), key=key)
    if not ids: continue
    out.append(f"\n## {s}: {title}\n\n| ID | Title | Defined in | Referenced in |\n|---|---|---|---|")
    for i in ids:
        title_, where = defined[i]
        r = sorted(x for x in refs.get(i, set()) if x != where.split(':')[0].replace('0_plan/',''))
        out.append(f"| {i} | {title_} | `{where}` | {', '.join('`'+x+'`' for x in r) if r else ''} |")
open(os.path.join(ROOT, 'ID-INDEX.md'), 'w', encoding='utf-8').write('\n'.join(out) + '\n')
print(f"ID-INDEX.md written: {len(defined)} ids")
