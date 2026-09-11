#!/usr/bin/env python3
"""Fixtures for the D-039 branch of check-mocks.py: run `python3 0_plan/tools/tests/test-check-mocks-d039.py` from the repo root."""
import os, sys, importlib.util, tempfile, shutil
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
spec = importlib.util.spec_from_file_location('cm', os.path.join(ROOT, '0_plan/tools/check-mocks.py')); cm = importlib.util.module_from_spec(spec)
sys.argv = ['check-mocks.py', '--no-run']
try: spec.loader.exec_module(cm)
except SystemExit: pass
BASE = '<!doctype html><html lang="en" %s><head><script type="application/ld+json">{}</script></head><body>%s</body></html>'
CASES = {
 'router text input with data-type=radio is rejected': ('data-d039="inputs" data-d039-component="router"', '<input type="text" data-type="radio">', 'R1', 'FAIL'),
 'router radio is accepted': ('data-d039="inputs" data-d039-component="router"', '<input type="radio" name="q1">', 'R1', 'PASS'),
 'unquoted submit button is rejected': ('data-d039="inputs" data-d039-component="router"', '<input type="radio"><button type=submit>go</button>', 'R1', 'FAIL'),
 'external script with spaces around = is rejected': ('data-d039="script"', '<script src = "/x.js"></script>', 'R2', 'FAIL'),
 'one small inline script is accepted': ('data-d039="script"', '<script>document.body.dataset.x=1</script>', 'R2', 'PASS'),
 'empty declaration fails R20': ('data-d039=""', '', 'R20', 'FAIL'),
 'unknown token fails R20': ('data-d039="fetch"', '', 'R20', 'FAIL'),
}
tmp = tempfile.mkdtemp(); ok = True
for name, (attr, body, rule, expect) in CASES.items():
    d = os.path.join(tmp, 'Mx'); os.makedirs(d, exist_ok=True)
    open(os.path.join(d, 'index.html'), 'w').write(BASE % (attr, body)); open(os.path.join(d, 'styles.css'), 'w').write(''); open(os.path.join(d, 'RATIONALE.md'), 'w').write('D-039 declared')
    got = [st for (rl, st, _) in cm.check(d) if rl.startswith(rule)][0]
    print(('ok   ' if got == expect else 'BAD  ') + name); ok = ok and got == expect
shutil.rmtree(tmp); print('test-check-mocks-d039:', 'PASS' if ok else 'FAIL'); sys.exit(0 if ok else 1)
