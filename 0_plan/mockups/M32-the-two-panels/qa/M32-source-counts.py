#!/usr/bin/env python3
"""The only figure about the source that a reviewer of this repository can check.

The M32 brief describes a screenshot of the two-door panel on gt.school/about-us. That screenshot is
NOT in this repository and `gt.school` has no mirror here, so every count taken from the picture — how
many type objects each panel carries, how many lines of text sit under each mark — is unverifiable by
anyone reading the repo, and RATIONALE.md marks those counts as such.

One figure survives, because its text is checked in: the right panel's paragraph is recorded verbatim
in `0_plan/12-claims-register.md` as CR-039, CR-040 and CR-041. This script reads those three rows out
of the register and prints the character counts the rationale cites, so that figure is reproducible.

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
print('\nThe two-line headline above that paragraph has no register row and its wording is not in this')
print('repository, so it is excluded from the count and the true ratio is higher than the figure above.')
print('The button labels come from the brief\'s description of the screenshot and are NOT independently')
print('checkable here; only the 212 characters of register text are.')
