#!/usr/bin/env python3
"""Generate 1_spec/12-traceability-matrix.md: for every REQ, the spec docs that cite it, the T tasks and V checks that name it, and the latest RUN-LOG status of those tasks and verifications."""
import re, glob, os, datetime as dt
SPEC = os.path.dirname(os.path.dirname(os.path.abspath(__file__))); REPO = os.path.dirname(SPEC)
reqs = {}
for line in open(os.path.join(REPO, '0_plan', '02-requirements-and-deliverables.md'), encoding='utf-8'):
    m = re.match(r'^\|\s*(REQ-\d{3})\s*\|\s*(.*?)\s*\|', line)
    if m: reqs[m.group(1)] = m.group(2)[:90]
spec_docs = {os.path.basename(f): open(f, encoding='utf-8').read() for f in sorted(glob.glob(os.path.join(SPEC, '*.md'))) if not f.endswith(('12-traceability-matrix.md', 'RUN-LOG.md'))}
# tasks and checks: rows starting with | T-nnn | or | V-nnn | anywhere in spec docs
rows = {}
for name, text in spec_docs.items():
    for line in text.split('\n'):
        m = re.match(r'^\|\s*((?:T|V|TC)-\d{3})\s*\|(.*)$', line)
        if m: rows[m.group(1)] = (name, line)
log = {}
lp = os.path.join(SPEC, 'RUN-LOG.md')
if os.path.exists(lp):
    for line in open(lp, encoding='utf-8'):
        c = [x.strip() for x in line.strip()[1:-1].split('|')] if line.startswith('|') else []
        if len(c) == 10 and re.match(r'^(T|V)-\d{3}$', c[2]): log[c[2]] = (c[3], c[8])
out = [f"# 12 Traceability matrix\n\nGenerated {dt.datetime.now():%Y-%m-%d %H:%M} by `1_spec/tools/build-traceability.py`. Do not hand-edit. A REQ with an empty Tasks or Verifications cell is not buildable yet; a REQ whose tasks lack both `Verify-Fable` and `Verify-Astra` Pass rows is not Done.\n",
       "| REQ | Title | Spec docs citing it | Tasks | Verifications | Test cases | Latest task status | Fable verified | Astra verified |", "|---|---|---|---|---|---|---|---|---|"]
def status_of(ids, step=None):
    vals = []
    for i in ids:
        if i in log and (step is None or log[i][0] == step): vals.append(f"{i}:{log[i][1]}")
    return ', '.join(vals) if vals else ''
for req in sorted(reqs, key=lambda r: int(r.split('-')[1])):
    docs = sorted(n for n, t in spec_docs.items() if req in t)
    tasks = sorted(i for i, (n, l) in rows.items() if i.startswith('T-') and req in l)
    checks = sorted(i for i, (n, l) in rows.items() if i.startswith('V-') and req in l)
    tcs = sorted(i for i, (n, l) in rows.items() if i.startswith('TC-') and req in l)
    fable = 'Pass' if any(log.get(v) == ('Verify-Fable', 'Pass') for v in checks) else ('' if not checks else 'Pending')
    astra = 'Pass' if any(log.get(v) == ('Verify-Astra', 'Pass') for v in checks) else ('' if not checks else 'Pending')
    out.append(f"| {req} | {reqs[req]} | {', '.join('`'+d+'`' for d in docs)} | {', '.join(tasks)} | {', '.join(checks)} | {', '.join(tcs)} | {status_of(tasks)} | {fable} | {astra} |")
covered = sum(1 for req in reqs if any(req in t for t in spec_docs.values()))
out.insert(1, f"\n| Requirements | With a spec section | With tasks | With verifications | With test cases |\n|---|---|---|---|---|\n| {len(reqs)} | {covered} | {sum(1 for r in reqs if any(r in l for i,(n,l) in rows.items() if i.startswith('T-')))} | {sum(1 for r in reqs if any(r in l for i,(n,l) in rows.items() if i.startswith('V-')))} | {sum(1 for r in reqs if any(r in l for i,(n,l) in rows.items() if i.startswith('TC-')))} |\n")
open(os.path.join(SPEC, '12-traceability-matrix.md'), 'w', encoding='utf-8').write('\n'.join(out) + '\n')
print(f"traceability: {len(reqs)} REQs, {covered} cited by spec, {len(rows)} T/V rows")
