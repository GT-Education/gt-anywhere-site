#!/usr/bin/env python3
"""KEPT AS THE RECORD OF A REFUTED FIGURE. The number this prints is wrong about the source.

Written in build pass 2, when the source screenshot was not in the repository and the only thing a
reviewer could check was the text of the right panel's paragraph, which the claims register carries
verbatim as CR-039, CR-040 and CR-041. It printed 24.7 : 1 for the characters of set text under the
two marks and RATIONALE.md built an argument on it.

Build pass 3: `0_plan/kb/exemplars/gt-panels/` is a dated text extract of the panel's markup and its
own stylesheet rules, and it refutes that ratio. Measured from source, the two panels carry one mark,
one heading, one paragraph and one button each, and **219 characters against 276 — 1.26 : 1**. Every
declaration in the two panels' rules is identical except `background-image`.

Why this script's number came out at 24.7 : 1: both panels put their heading and paragraph inside
`.split-cta_hidden-wrap`, which sets `overflow: hidden`, and both anchors carry a `data-w-id`
interaction. At rest a panel shows its mark and its button only. A screenshot catching one panel
revealed and the other at rest shows 9 characters against over 200. The figure was a property of the
capture's hover state, not of the page, and this script faithfully reproduced a measurement of the
wrong thing.

It is kept, not deleted, because RATIONALE.md carries the correction rather than quietly dropping the
claim, and a reader following that correction should be able to run the thing that produced the error.

For the real figures: `python3 0_plan/kb/exemplars/gt-panels/count.py`.

Run: python3 0_plan/mockups/M32-the-two-panels/qa/M32-source-counts.py
"""
import os
import re

REPO = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..', '..'))
REG = os.path.join(REPO, '0_plan', '12-claims-register.md')

# The register's own statement column, quoted, for the three rows the source paragraph carries.
WANT = ['CR-039', 'CR-040', 'CR-041']
rows = {}
for line in open(REG, encoding='utf-8'):
    if not line.startswith('| CR-'):
        continue
    cells = [c.strip() for c in line.strip().strip('|').split(' | ')]
    if cells[0] in WANT:
        rows[cells[0]] = cells[1]

missing = [c for c in WANT if c not in rows]
if missing:
    raise SystemExit('rows not found in the register: ' + ', '.join(missing))

print('REFUTED FIGURE, kept as a record. Real source counts: 0_plan/kb/exemplars/gt-panels/count.py\n')
print('The right panel\'s paragraph, as the claims register records it')
print('| Row | Statement | Characters | Status and owner, from the register |')
print('|---|---|---|---|')
total = 0
for cr in WANT:
    stmt = rows[cr]
    text = stmt.strip('"')                       # the register quotes the statement
    n = len(text)
    total += n
    print(f'| {cr} | "{text}" | {n} | Unverified, Nari |')
BUTTON_RIGHT = 'LEARN MORE'
BUTTON_LEFT = 'APPLY NOW'
print(f'\nregistered paragraph text                 {total}')
print(f'plus the right panel\'s button label "{BUTTON_RIGHT}"  {len(BUTTON_RIGHT)}')
print(f'right panel, set text below the mark, at least   {total + len(BUTTON_RIGHT)}')
print(f'left panel, set text below the mark  "{BUTTON_LEFT}"   {len(BUTTON_LEFT)}')
print(f'ratio                                     {(total + len(BUTTON_RIGHT)) / len(BUTTON_LEFT):.1f} : 1')
print('\n*** The ratio above is REFUTED. The source is symmetric: 219 characters against 276, 1.26 : 1,')
print('*** measured from 0_plan/kb/exemplars/gt-panels/. Both panels hide their prose behind')
print('*** overflow:hidden and reveal it on interaction, so a screenshot catching one panel open and')
print('*** the other closed produces the figure above. See RATIONALE.md, section "Correction".')
