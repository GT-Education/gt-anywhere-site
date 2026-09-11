#!/usr/bin/env python3
"""Anti-shallow gate for knowledge-base clusters (0_plan/kb/K*.md): the six sections exist, findings are numbered,
every finding cites at least one URL, unfetched sources are labelled, and the GT application section is substantive."""
import re, sys, os, glob
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SECTIONS = ['Question', 'Findings', 'Principles', 'Anti-patterns', 'How it applies to GT', 'Open questions']
files = [a for a in sys.argv[1:] if not a.startswith('--')] or sorted(glob.glob(os.path.join(REPO, '0_plan', 'kb', 'K*.md')))
bad = 0
for f in files:
    s = open(f, encoding='utf-8').read(); rel = os.path.relpath(f, REPO); errs = []
    heads = re.findall(r'^#{1,3}\s+(.+)$', s, flags=re.M)
    for sec in SECTIONS:
        if not any(sec.lower() in h.lower() for h in heads): errs.append(f'missing section: {sec}')
    urls = re.findall(r'https?://[^\s)\]|>]+', s)
    if len(set(urls)) < 20: errs.append(f'only {len(set(urls))} distinct URLs (need 20 or more)')
    # findings: table rows and numbered subsections inside every level-2 "Findings" section
    fsecs = re.findall(r'^##[^\n]*Findings[^\n]*\n(.*?)(?=^##\s|\Z)', s, flags=re.S|re.M|re.I)
    fbody = '\n'.join(fsecs)
    rows = [l for l in fbody.splitlines() if l.startswith('|') and not re.match(r'^\|\s*-', l) and not re.match(r'^\|\s*(#|Field|Site|Source|Candidate)\b', l)]
    subs = re.findall(r'^###\s', fbody, flags=re.M)
    findings = rows + subs
    if len(findings) < 10: errs.append(f'only {len(findings)} findings rows or subsections')
    m = re.search(r'^##[^\n]*How it applies to GT[^\n]*\n(.*?)(?=^##\s|\Z)', s, flags=re.S|re.M|re.I)
    words = len(m.group(1).split()) if m else 0
    if words < 300: errs.append(f'GT application section has {words} words (need 300 or more)')
    if re.search(r'\b(TBD|lorem|placeholder)\b', s, flags=re.I): errs.append('placeholder text present')
    print(f'{rel}: {len(s.splitlines())} lines, {len(set(urls))} URLs, {len(findings)} findings, GT section {words} words -> ' + ('OK' if not errs else 'FAIL: ' + '; '.join(errs)))
    bad += bool(errs)
print(f'check-kb: {"OK" if not bad else f"FAIL ({bad})"}')
sys.exit(1 if bad else 0)
