#!/usr/bin/env python3
"""Every planning id (REQ, DEL, D, DD, MD, MN, AN, AD, CB, SE, MO, CON, P) must be referenced by at least one spec document. Exit 1 otherwise."""
import re, glob, os, sys
SPEC = os.path.dirname(os.path.dirname(os.path.abspath(__file__))); REPO = os.path.dirname(SPEC)
ID = re.compile(r'\b(REQ|DEL|D|DD|MD|MN|AN|AD|CB|SE|MO|CON|P)-(\d{2,3})\b')
defined = set()
for f in glob.glob(os.path.join(REPO, '0_plan', '*.md')):
    if f.endswith('ID-INDEX.md'): continue
    for line in open(f, encoding='utf-8'):
        m = re.match(r'^\|\s*((?:REQ|DEL|D|DD|MD|MN|AN|AD|CB|SE|MO|CON|P)-\d{2,3})\s*\|', line)
        if m: defined.add(m.group(1))
spec_text = ''
for f in glob.glob(os.path.join(SPEC, '*.md')):
    if f.endswith('12-traceability-matrix.md') or f.endswith('RUN-LOG.md'): continue
    spec_text += open(f, encoding='utf-8').read()
referenced = {f"{a}-{b}" for a, b in ID.findall(spec_text)}
missing = sorted(defined - referenced, key=lambda i: (i.split('-')[0], int(i.split('-')[1])))
print(f"planning ids defined={len(defined)} referenced by spec={len(defined & referenced)}")
if missing:
    print(f"  NOT COVERED by any spec doc ({len(missing)}): {' '.join(missing)}")
print("check-coverage:", "OK" if not missing else "FAIL")
sys.exit(1 if missing else 0)
