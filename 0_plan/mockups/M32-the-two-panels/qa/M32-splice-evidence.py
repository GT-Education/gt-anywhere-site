#!/usr/bin/env python3
"""Rewrites every block in RATIONALE.md that is labelled verbatim, from the artefacts themselves.

Build pass 2 was marked down for pasting a runner table whose one negative cell had been replaced by
a rebuttal, and for citing a run at a stale timestamp. The answer then was to splice the two fold
tables from `qa/fold.md` by script — which left the checker output to go stale by hand, and it did:
`check-mocks.py` gained a rule and the pasted block still said 37 pass. Fixing that one paste would
have repeated the mistake, so this script covers every quoted block instead.

What it rewrites, always from source:
  * the runner's 19-row matrix and its provenance timestamp, out of `qa/fold.md`
  * the runner's next-band evidence table, out of `qa/fold.md`, every cell including the negative one
  * every `2026-..T..Z` timestamp in the file, to the one `qa/fold.md` carries
  * the `check-mocks.py` block, by running it
  * the `check-claims.py` block, by running it
  * the runner's Result line, out of `qa/fold.md`

Run it AFTER `0_plan/tools/shots.mjs`, which is what writes `qa/fold.md`. Then re-run
`check-mocks.py` to confirm R37 is green; that reads the rationale and does not rewrite fold.md.

Usage: python3 0_plan/mockups/M32-the-two-panels/qa/M32-splice-evidence.py
"""
import os
import re
import subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
MOCK = os.path.dirname(HERE)
REPO = os.path.abspath(os.path.join(MOCK, '..', '..', '..'))
RAT = os.path.join(MOCK, 'RATIONALE.md')
FOLD = os.path.join(HERE, 'fold.md')
REL = os.path.relpath(MOCK, REPO)


def run(cmd):
    return subprocess.run(cmd, cwd=REPO, capture_output=True, text=True).stdout


def splice(text, pattern, replacement, what):
    r"""Line-oriented on purpose: NO re.DOTALL. With DOTALL a pattern like `(?:\|.*\n)+` swallows every
    line to the end of the file, and the first version of this script did exactly that — it would have
    replaced the runner's table with the whole remainder of the document. It failed before writing
    only because a later splice could then no longer find its block. Without DOTALL, `.*` stops at the
    newline and each `(?:...)+` group matches only the consecutive lines it is meant to."""
    assert '(?s)' not in pattern, 'no DOTALL in these patterns'
    m = re.search(pattern, text)
    if not m:
        raise SystemExit('could not find the block to splice: ' + what)
    return text[:m.start()] + replacement + text[m.end():]


rat = open(RAT, encoding='utf-8').read()
fold = open(FOLD, encoding='utf-8').read()

stamp = re.search(r'chromium-[\d.]+ [\d.]+; ([^;]+); page', fold).group(1)
matrix = re.search(r'(\| Row \| Viewport \| Rule \|.*?)\n\n', fold, re.S).group(1)
band = re.search(r'\| Row \| Cut \| Element and the ink that crosses the bottom edge \|\n\|---\|---\|---\|\n((?:\|.*\n)+)', fold).group(1).rstrip()
result = re.search(r'^(## Result:.*)$', fold, re.M).group(1)

# 1. the runner's matrix, with the timestamp of the run that produced it
rat = splice(rat,
             r"\*\*The runner's own table, pasted from the current run\*\* \(`qa/fold\.md`, [^)]*\):\n\n(?:\|.*\n)+",
             f"**The runner's own table, pasted from the current run** (`qa/fold.md`, {stamp}):\n\n{matrix}\n",
             'runner matrix')

# 2. the next-band table, every cell
rat = splice(rat,
             r"\| Row \| Cut \| Element and the ink that crosses the bottom edge \|\n\|---\|---\|---\|\n(?:\|.*\n)+",
             f"| Row | Cut | Element and the ink that crosses the bottom edge |\n|---|---|---|\n{band}\n",
             'next-band table')

# 3. every timestamp in the file
rat = re.sub(r'\d{4}-\d\d-\d\dT[\d:.]+Z', stamp, rat)

# 4 and 5. the two checkers, run rather than remembered
mocks = run(['python3', '0_plan/tools/check-mocks.py', os.path.join(REL)]).strip()
claims_all = run(['python3', '1_spec/tools/check-claims.py'])
block = re.search(r'(## ' + re.escape(REL) + r'/index\.html\n(?:.*\n)*?)(?=\n## |\Z)', claims_all)
claims = (block.group(1).rstrip() if block else '') + '\n\n' + claims_all.strip().splitlines()[-1]

rat = splice(rat,
             r"```\n\$ python3 0_plan/tools/check-mocks\.py [^\n]*\n\n(?:.*?\n)*?```",
             "```\n$ python3 0_plan/tools/check-mocks.py " + REL + "\n\n" + mocks + "\n```",
             'check-mocks block')
rat = splice(rat,
             r"```\n\$ python3 1_spec/tools/check-claims\.py\n\n(?:.*?\n)*?```",
             "```\n$ python3 1_spec/tools/check-claims.py\n\n" + claims + "\n```",
             'check-claims block')
rat = splice(rat,
             r"```\n\$ node 0_plan/tools/shots\.mjs [^\n]*\n\n(?:.*?\n)*?```",
             "```\n$ node 0_plan/tools/shots.mjs " + REL + "\n\n" + result + "\n```",
             'runner result block')

open(RAT, 'w', encoding='utf-8').write(rat)

# verify what was just written actually reproduces
rat = open(RAT, encoding='utf-8').read()
fm = re.findall(r'^\| V\d+ \| \d+ by \d+ \| (?:fold|emptiness|reflow|zoom) \|.*$', fold, re.M)
rm = re.findall(r'^\| V\d+ \| \d+ by \d+ \| (?:fold|emptiness|reflow|zoom) \|.*$', rat, re.M)
fb = re.findall(r'^\| V\d+ \| (?:yes|no) \| .*$', fold, re.M)
rb = re.findall(r'^\| V\d+ \| (?:yes|no) \| .*$', rat, re.M)
stamps = sorted(set(re.findall(r'\d{4}-\d\d-\d\dT[\d:.]+Z', rat)))
print('matrix identical to fold.md ', fm == rm)
print('next-band identical         ', fb == rb)
print('timestamps in the file      ', stamps, '== fold.md', stamp)
print('check-mocks block           ', mocks.splitlines()[-1])
print('check-claims block          ', claims.splitlines()[-1])
print('runner block                ', result)
if not (fm == rm and fb == rb and stamps == [stamp]):
    raise SystemExit('splice did not reproduce')
