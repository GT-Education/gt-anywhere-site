#!/usr/bin/env python3
"""Generate Playwright Test skeletons from the test catalogue in 1_spec/13-testing-suite-spec.md.
Writes 1_spec/tests/<W-nn>.spec.ts (one describe per workflow, one fixme test per automated TC) and
1_spec/tests/MANUAL-AND-EXTERNAL.md (the TCs a runner cannot reach). Skeletons are regenerated; real
implementations live in tests/ (after D-028) and are never touched here."""
import re, os, datetime as dt
SPEC = os.path.dirname(os.path.dirname(os.path.abspath(__file__))); REPO = os.path.dirname(SPEC)
cat = open(os.path.join(SPEC, '13-testing-suite-spec.md'), encoding='utf-8').read()
titles = {}
for m in re.finditer(r'^\| (W-\d{2}) \| (.*?) \|', open(os.path.join(REPO, '0_plan', '13-journey-map.md'), encoding='utf-8').read(), re.M):
    titles.setdefault(m.group(1), m.group(2))
tcs = []
for line in cat.split('\n'):
    m = re.match(r'^\|\s*(TC-\d{3})\s*\|(.*)$', line)
    if not m: continue
    c = [x.strip() for x in line.strip()[1:-1].split('|')]
    if len(c) != 8: continue
    tc, node, assertion, layer, auto, evidence, req, v = c
    ws = re.findall(r'W-\d{2}', node) or ['W-00']
    tcs.append(dict(tc=tc, node=node, assertion=assertion, layer=layer, auto=auto, evidence=evidence, req=req, v=v, w=ws[0]))
out_dir = os.path.join(SPEC, 'tests'); os.makedirs(out_dir, exist_ok=True)
by_w = {}
for t in tcs: by_w.setdefault(t['w'], []).append(t)
manual = []
for w, items in sorted(by_w.items()):
    autos = [t for t in items if t['auto'].startswith('auto')]
    manual += [t for t in items if not t['auto'].startswith('auto')]
    if not autos: continue
    title = titles.get(w, 'invariants and failure modes')
    lines = [f"// Generated {dt.date.today()} by 1_spec/tools/build-tests.py from 1_spec/13-testing-suite-spec.md.",
             f"// Do not edit. Implement in tests/e2e/{w}.spec.ts after D-028; keep test titles identical so traceability holds.",
             "import { test, expect } from '@playwright/test';", "", f"test.describe('{w} {title.replace(chr(39), chr(92)+chr(39))}', () => {{"]
    for t in autos:
        a = t['assertion'].replace("'", "\\'")
        lines.append(f"  test('{t['tc']}: {a} [{t['req']}; {t['v']}; layer {t['layer']}; node {t['node']}]', async ({{ page }}) => {{")
        lines.append(f"    test.fixme(true, 'TODO implement {t['tc']} per 1_spec/13 section 3; evidence: {t['evidence']}');")
        lines.append("  });")
    lines.append("});")
    open(os.path.join(out_dir, f"{w}.spec.ts"), 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
md = [f"# Manual and external test cases\n\nGenerated {dt.date.today()} by `1_spec/tools/build-tests.py`. These cannot run in the suite; each has an evidence template under `1_spec/templates/` or a procedure in `1_spec/13`.\n",
      "| TC | Workflow node | Assertion | Layer | Automation | Evidence | REQ | V |", "|---|---|---|---|---|---|---|---|"]
for t in manual: md.append(f"| {t['tc']} | {t['node']} | {t['assertion']} | {t['layer']} | {t['auto']} | {t['evidence']} | {t['req']} | {t['v']} |")
open(os.path.join(out_dir, 'MANUAL-AND-EXTERNAL.md'), 'w', encoding='utf-8').write('\n'.join(md) + '\n')
print(f"build-tests: {len(tcs)} test cases; {len(tcs) - len(manual)} automated skeletons in {len(by_w)} workflow files; {len(manual)} manual or external")
