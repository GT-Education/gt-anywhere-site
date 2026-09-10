#!/usr/bin/env python3
"""REQ-022 gate for mocks and pages: every figure in visible text must map to a claims-register row (0_plan/12-claims-register.md).
Usage: python3 1_spec/tools/check-claims.py [index.html ...]   (default: every 0_plan/mockups/M*/index.html)"""
import re, sys, os, glob, html as H
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
REG = os.path.join(REPO, '0_plan', '12-claims-register.md')
# figure pattern in visible text -> register row. Structural facts (grades, dates, phone, viewport sizes) are not claims.
CLAIMS = [
    (r'90th', 'CR-011'), (r'\$10,400', 'CR-021'), (r'\$10,474', 'CR-022'),
    (r'[Ff]our (in-person|intensive) weekends', 'CR-032'), (r'9 to noon|9 am to noon|two hours of (mastery|focused)', 'CR-033'),
    (r'[Tt]wo to three hours', 'CR-034'), (r'check-in every week|weekly one-to-one|every week', 'CR-035'),
    (r'\b3[xX]\b|3X learning', 'CR-004'), (r'\b4x\b', 'CR-005'), (r'1400\+', 'CR-009'), (r'1350\+', 'CR-010'), (r'[Tt]op 1', 'CR-012'),
    (r'[Aa]ccredited|[Cc]andidate for [Aa]ccreditation|Cognia', 'CR-001'),
]
NOT_CLAIMS = {'8', '8th', '512', '270', '9481', '2026', '09', '10', '390', '844', '1440', '900', '767', '768'}

def visible_text(doc):
    d = re.sub(r'<!--.*?-->', ' ', doc, flags=re.S); d = re.sub(r'<(script|style)[^>]*>.*?</\1>', ' ', d, flags=re.S|re.I)
    return H.unescape(re.sub(r'<[^>]+>', ' ', d))

def register():
    rows = {}
    for line in open(REG, encoding='utf-8'):
        if line.startswith('| CR-'):
            c = [x.strip() for x in line.strip().strip('|').split(' | ')]
            rows[c[0]] = {'statement': c[1][:70], 'status': c[5] if len(c) > 5 else '?'}
    return rows

def check(path, reg):
    text = visible_text(open(path, encoding='utf-8').read())
    found, problems = [], []
    for pat, cr in CLAIMS:
        n = len(re.findall(pat, text))
        if n: found.append((cr, n, reg.get(cr, {}).get('status', 'NO ROW'), reg.get(cr, {}).get('statement', '')))
    # numeric tokens without a mapping
    for tok in sorted(set(re.findall(r'\$?\d[\d,]*(?:st|nd|rd|th|\+|[xX])?', text))):
        bare = tok.strip('$').rstrip('+xX')
        if bare in NOT_CLAIMS or re.fullmatch(r'\d{1,2}:\d{2}', tok): continue
        if not any(re.search(pat, tok) or re.search(pat, text) and tok in ('90th','$10,400','$10,474','1400+','1350+','3x','3X','4x','9') for pat, _ in CLAIMS):
            problems.append(tok)
    return found, problems

reg = register()
files = [a for a in sys.argv[1:] if not a.startswith('--')] or sorted(glob.glob(os.path.join(REPO, '0_plan', 'mockups', 'M*', 'index.html')))
bad = 0
for f in files:
    found, problems = check(f, reg)
    rel = os.path.relpath(f, REPO); print(f'\n## {rel}')
    print('| Figure on the page | Register row | Occurrences | Status |'); print('|---|---|---|---|')
    for cr, n, st, stmt in found: print(f'| {stmt} | {cr} | {n} | {st} |')
    withheld = [cr for cr in ('CR-004','CR-005','CR-009','CR-010','CR-012','CR-001') if any(x[0]==cr for x in found)]
    if withheld: bad += 1; print(f'  FAIL withheld claims present: {withheld}')
    if problems: bad += 1; print(f'  FAIL figures without a register row: {problems}')
    unverified = [cr for cr, n, st, stmt in found if 'Unverified' in st]
    if unverified: print(f'  NOTE unverified rows on the page (allowed in mocks, blocked for production): {unverified}')
print(f'\ncheck-claims: {"OK" if bad == 0 else f"FAIL ({bad})"}')
sys.exit(1 if bad else 0)
