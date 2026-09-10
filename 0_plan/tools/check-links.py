#!/usr/bin/env python3
"""Fail if any id referenced in 0_plan/*.md or CLAUDE.md is never defined, or a referenced planning file is missing.

An id is DEFINED where it is the first cell of a table row: `| REQ-012 | ...`.
An id is REFERENCED anywhere else it appears.
Series: P, J, REQ, CON, DEL, D, Q, MO, DD, MD, MN, AN, AD, CB, SE, C (checklist), T (build tasks), V (verification checks), R (research agents), E (ensemble passes), G (gates).
Exit 1 on any dangling reference. Run before every commit (09, section 6).
"""
import re, sys, glob, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))   # 0_plan/
REPO = os.path.dirname(ROOT)
files = sorted(glob.glob(os.path.join(ROOT, '*.md'))) + sorted(glob.glob(os.path.join(REPO, '1_spec', '**', '*.md'), recursive=True)) + [os.path.join(REPO, 'CLAUDE.md')]
ID = re.compile(r'\b(P|REQ|CON|DEL|D|Q|MO|DD|MD|MN|AN|AD|CB|SE|TR|SRC|CR|W|TC|C|T|V)-(\d{2,3})\b')
J = re.compile(r'\bJ([1-4])\b')
# ids defined implicitly (not table-first-cell): journeys, gates, research agents, ensemble passes
IMPLICIT = {'J1','J2','J3','J4','G0','G0.5','G1','R1','R2','R3','R4','R5','E0','E1','E2','E3'}
defined, referenced = {}, {}
for f in files:
    rel = os.path.relpath(f, REPO)
    for n, line in enumerate(open(f, encoding='utf-8'), 1):
        m = re.match(r'^\|\s*\*{0,2}((?:P|REQ|CON|DEL|D|Q|MO|DD|MD|MN|AN|AD|CB|SE|TR|SRC|CR|W|TC|C|T|V)-\d{2,3})\*{0,2}\s*\|', line)
        if m and not rel.endswith('ID-INDEX.md') and not rel.endswith('RUN-LOG.md') and not rel.endswith('12-traceability-matrix.md') and '/tests/' not in rel:
            defined.setdefault(m.group(1), []).append(f"{rel}:{n}")
        for mm in ID.finditer(line):
            i = f"{mm.group(1)}-{mm.group(2)}"
            referenced.setdefault(i, set()).add(rel)
# file references like `05-landing-mockups-plan.md`
missing_files = set()
for f in files:
    for m in re.finditer(r'(?<![\w-])`?((?:\d{2}-[a-z0-9-]+|README|ID-INDEX|SESSION-HANDOFF-\*)\.md)`?', open(f, encoding='utf-8').read()):
        name = m.group(1)
        if '*' in name: continue
        if not any(os.path.exists(os.path.join(b, name)) for b in (ROOT, REPO, os.path.join(REPO, '1_spec'), os.path.join(REPO, '1_spec', 'templates'))):
            missing_files.add(name)
dangling = sorted(i for i in referenced if i not in defined and i not in IMPLICIT)
# planned-but-not-yet-written docs are allowed to be missing only if listed here
PLANNED = {'06-mockup-rationale.md', 'ID-INDEX.md'}
pp = os.path.join(REPO, '1_spec', 'tools', 'planned-paths.txt')
if os.path.exists(pp):
    PLANNED |= {os.path.basename(l.strip().rstrip('/')) for l in open(pp) if l.strip().endswith('.md')}
missing_files -= PLANNED
ok = True
if dangling:
    ok = False
    print(f"DANGLING ids ({len(dangling)}): referenced but never defined as a table row")
    for i in dangling: print(f"  {i}  <- {', '.join(sorted(referenced[i]))}")
if missing_files:
    ok = False
    print(f"MISSING files: {', '.join(sorted(missing_files))}")
dups = {i: v for i, v in defined.items() if len(v) > 1}
if dups:
    ok = False
    print(f"DUPLICATE definitions ({len(dups)}): an id may be defined as a table row in exactly one place")
    for i, v in sorted(dups.items()): print(f"  {i}: {', '.join(v)}")
print(f"defined={len(defined)} referenced={len(referenced)} files={len(files)}")
print("check-links:", "OK" if ok else "FAIL")
sys.exit(0 if ok else 1)
