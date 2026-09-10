#!/usr/bin/env python3
"""Check 1_spec/RUN-LOG.md against the rules in 1_spec/10 section 9. Exit 1 on any violation."""
import re, sys, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(ROOT, 'RUN-LOG.md')
STEPS = {'Intake','Plan','Build','Heartbeat','Handoff','Verify-Fable','Verify-Astra','Fix','Audit','Completeness','Gate','Escalate','Blocker'}
STATUS = {'Started','In progress','Done','Failed','Blocked','Stalled','Escalated','Pass','Fail','Skipped'}
BOILER = re.compile(r'^\s*(n/?a|skipped|cannot be done|as requested|see above|done)\s*\.?\s*$', re.I)
rows, errs = [], []
for n, line in enumerate(open(p, encoding='utf-8'), 1):
    if not line.startswith('|') or line.startswith('| #') or re.match(r'^\|[\s:|-]+\|$', line): continue
    c = [x.strip() for x in line.strip()[1:-1].split('|')]
    if len(c) != 10: errs.append(f"line {n}: {len(c)} cells, need 10"); continue
    num, ts, item, step, agent, action, reasoning, evidence, status, checker = c
    rows.append(c)
    if step not in STEPS: errs.append(f"row {num}: step '{step}' not allowed")
    if status not in STATUS: errs.append(f"row {num}: status '{status}' not allowed")
    words = len(re.findall(r"[A-Za-z0-9']+", reasoning))
    if words < 20 or BOILER.match(reasoning): errs.append(f"row {num}: reasoning too thin ({words} words)")
    if status in {'Skipped','Blocked','Failed'}:
        for tok in ('why:', 'alternative:', 'owner:'):
            if tok not in reasoning.lower(): errs.append(f"row {num}: {status} without '{tok}' in reasoning")
        if not re.search(r'\b(Q|D|T)-\d{2,3}\b|GTT-\d+', reasoning): errs.append(f"row {num}: {status} without an escalation id (Q/D/T/GTT)")
    if step in {'Build','Verify-Fable','Verify-Astra','Audit','Gate'} and not evidence: errs.append(f"row {num}: {step} row without evidence")
    if not re.match(r'^(Pending|Pass|Fail\b.*)$', checker): errs.append(f"row {num}: checker cell '{checker}' invalid")
# Done rule: a T marked Done needs Verify-Fable Pass and Verify-Astra Pass rows
by_item = {}
for c in rows: by_item.setdefault(c[2], []).append(c)
for item, rs in by_item.items():
    if item.startswith('T-') and any(r[8] == 'Done' for r in rs):
        vf = any(r[3] == 'Verify-Fable' and r[8] == 'Pass' for r in rs)
        va = any(r[3] == 'Verify-Astra' and r[8] == 'Pass' for r in rs)
        if not (vf and va): errs.append(f"{item}: marked Done without both Verify-Fable Pass and Verify-Astra Pass")
print(f"rows={len(rows)}")
for e in errs: print("  VIOLATION", e)
print("check-runlog:", "OK" if not errs else f"FAIL ({len(errs)})")
sys.exit(1 if errs else 0)
