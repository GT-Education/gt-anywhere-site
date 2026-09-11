#!/usr/bin/env python3
"""Fixtures for the D-039 branch of check-mocks.py, run in memory (no filesystem writes, so a read-only sandbox can run it):
`python3 0_plan/tools/tests/test-check-mocks-d039.py` from the repo root."""
import os, sys, importlib.util
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
spec = importlib.util.spec_from_file_location('cm', os.path.join(ROOT, '0_plan/tools/check-mocks.py')); cm = importlib.util.module_from_spec(spec)
sys.argv = ['check-mocks.py', '--no-run']
try: spec.loader.exec_module(cm)
except SystemExit: pass
BASE = '<!doctype html><html lang="en" %s><head>%s</head><body>%s</body></html>'
LD = '<script type="application/ld+json">{}</script>'
CASES = {
 'router text input with data-type=radio is rejected': ('data-d039="inputs" data-d039-component="router"', LD, '<input type="text" data-type="radio">', 'R1', 'FAIL'),
 'router text input whose value contains type=radio is rejected': ('data-d039="inputs" data-d039-component="router"', LD, '<input type="text" value="type=radio">', 'R1', 'FAIL'),
 'router radio is accepted': ('data-d039="inputs" data-d039-component="router"', LD, '<input type="radio" name="q1">', 'R1', 'PASS'),
 'unquoted submit button is rejected': ('data-d039="inputs" data-d039-component="router"', LD, '<input type="radio"><button type=submit>go</button>', 'R1', 'FAIL'),
 'inputs declared without the router component are rejected': ('data-d039="inputs"', LD, '<input type="radio">', 'R1', 'FAIL'),
 'external script with spaces around = is rejected': ('data-d039="script"', LD, '<script src = "/x.js"></script>', 'R2', 'FAIL'),
 'JSON-LD tag carrying a src is rejected without a declaration': ('', '<script type="application/ld+json" src = "/example.js"></script>', '', 'R2', 'FAIL'),
 'one small inline script is accepted': ('data-d039="script"', LD, '<script>document.body.dataset.x=1</script>', 'R2', 'PASS'),
 'inline script over 2048 bytes is rejected': ('data-d039="script"', LD, '<script>' + 'x' * 2049 + '</script>', 'R2', 'FAIL'),
 'empty declaration fails R20': ('data-d039=""', LD, '', 'R20', 'FAIL'),
 'unknown token fails R20': ('data-d039="fetch"', LD, '', 'R20', 'FAIL'),
 'absent declaration needs no rationale mention': ('', LD, '', 'R20', 'PASS'),
 'input whose value impersonates type=radio is rejected': ('data-d039="inputs" data-d039-component="router"', LD, '<input value=" type=radio " type="text">', 'R1', 'FAIL'),
 'button whose value impersonates type=button is rejected as submit': ('data-d039="inputs" data-d039-component="router"', LD, '<input type="radio"><button value=" type=button " type="submit">go</button>', 'R1', 'FAIL'),
 'JSON-LD tag with a bare src is rejected without a declaration': ('', '<script type="application/ld+json" src>{}</script>', '', 'R2', 'FAIL'),
 'JSON-LD tag with a bare src is rejected beside a declared inline script': ('data-d039="script"', '<script type="application/ld+json" src>{}</script>', '<script>1</script>', 'R2', 'FAIL'),
 'bare data-d039 attribute fails R20': ('data-d039', LD, '', 'R20', 'FAIL'),
 'submit button hiding behind a quoted > is rejected': ('data-d039="inputs" data-d039-component="router"', LD, '<input type="radio"><button value=">" type="submit">go</button>', 'R1', 'FAIL'),
 'JSON-LD tag with a quoted > and a bare src is rejected': ('', '<script type="application/ld+json" data-note=">" src>{}</script>', '', 'R2', 'FAIL'),
 'bare data-d039 after a quoted > in the html tag fails R20': ('title=">" data-d039', LD, '', 'R20', 'FAIL'),
 'quoted > inside a legitimate inline script tag still counts one inline script': ('data-d039="script"', LD, '<script data-note=">">1</script>', 'R2', 'PASS'),
 'entity-encoded submit type is rejected': ('data-d039="inputs" data-d039-component="router"', LD, '<input type="radio"><button type="sub&#109;it">go</button>', 'R1', 'FAIL'),
 'a disguised closing tag does not shorten the inline script byte count': ('data-d039="script"', LD, '<script>const marker = "</scripture>"; /*' + 'x' * 2048 + '*/</script>', 'R2', 'FAIL'),
 'a commented-out input is not an input': ('', LD, '<!-- <input type="text" name="search"> -->', 'R1', 'PASS'),
 'a commented-out script is not a script': ('', LD, '<!-- <script src="../shared/reveal.js"></script> -->', 'R2', 'PASS'),
 'an input mentioned in a script comment is not an input': ('data-d039="script inputs" data-d039-component="router"', LD, '<input type="radio"><script>// Keep the <input> radios usable without JavaScript.\nlet a=1</script>', 'R1', 'PASS'),
 'a script tag mentioned in a script comment is not a script': ('data-d039="script"', LD, '<script>// This <script> enhances the static page with optional reveals.\nlet a=1</script>', 'R2', 'PASS'),
 'an HTML comment marker inside a script comment does not swallow the script end tag': ('data-d039="script"', LD, '<script>// The <!-- marker in source is a comment; observe the section element.\nlet a=1</script><!-- later comment -->', 'R2', 'PASS'),
 'an input mentioned in a CSS comment is not an input': ('data-d039="inputs" data-d039-component="router"', LD + '<style>/* Keep the <input> radios usable without JavaScript. */ body{margin:0}</style>', '<input type="radio">', 'R1', 'PASS'),
 'a script mentioned in a CSS comment is not a script': ('', LD + '<style>/* the <script> below is JSON-LD */ body{margin:0}</style>', '', 'R2', 'PASS'),
 'a tag-like string in the title is not an element': ('', '<title>Compare <input> vs output</title>' + LD, '', 'R1', 'PASS'),
 'tag-like text inside another element\'s quoted attribute is not an input': ('data-d039="inputs" data-d039-component="router"', LD, '<input type="radio"><p title="The <input> radios work without JavaScript.">Keyboard support</p>', 'R1', 'PASS'),
 'tag-like text inside a quoted attribute is not a script': ('', LD, '<p title="The <script> adds optional reveals.">Motion notes</p>', 'R2', 'PASS'),
}
ok = True
for name, (attr_, head, body, rule, expect) in CASES.items():
    res = cm.check_doc(BASE % (attr_, head, body), '', 'D-039 declared' if attr_ else 'no declaration')
    got = [st for (rl, st, _) in res if rl.startswith(rule)][0]
    print(('ok   ' if got == expect else 'BAD  ') + name); ok = ok and got == expect
# whole-gate check: an explanatory tooltip mentioning <script> or <input> must not change any rule's outcome on a real mock
import glob
m1 = sorted(glob.glob(os.path.join(ROOT, '0_plan/mockups/M1-*')))[0]
doc = open(os.path.join(m1, 'index.html'), encoding='utf-8').read(); css = open(os.path.join(m1, 'styles.css'), encoding='utf-8').read(); rat = open(os.path.join(m1, 'RATIONALE.md'), encoding='utf-8').read()
base_fails = [rl for rl, st, _ in cm.check_doc(doc, css, rat, m1) if st == 'FAIL']
probe = doc.replace('<body', '<body><p title="The <script> adds optional reveals and the <input> radios work without JavaScript.">Motion notes</p><body', 1).replace('<body><p', '<p', 1) if '<body' in doc else doc
probe = doc.replace('<body>', '<body><p title="The <script> adds optional reveals and the <input> radios work without JavaScript.">Motion notes</p>', 1) if '<body>' in doc else probe
probe_fails = [rl for rl, st, _ in cm.check_doc(probe, css, rat, m1) if st == 'FAIL']
# and the same tooltip combined with a declared observer script before </body>: every rule must keep its outcome
declared = doc.replace('<html', '<html data-d039="script"', 1).replace('</body>', '<script>document.querySelectorAll("[data-reveal]").forEach(function(e){e.dataset.seen=1})</script></body>', 1)
declared_probe = declared.replace('<body>', '<body><p title="The <script> adds optional reveals; the <h1>, the <img src=x>, the <meta name=robots> and the <main id=main> are all just words here.">Motion notes</p>', 1)
rat_d = rat + '\nD-039 declared for the observer script.'
d_fails = [rl for rl, st, _ in cm.check_doc(declared, css, rat_d, m1) if st == 'FAIL']; dp_fails = [rl for rl, st, _ in cm.check_doc(declared_probe, css, rat_d, m1) if st == 'FAIL']
same2 = d_fails == dp_fails
print(('ok   ' if same2 else 'BAD  ') + 'the tooltip beside a declared observer script changes no rule outcome on M1 (' + str(len(d_fails)) + ' vs ' + str(len(dp_fails)) + ' failures)'); ok = ok and same2
same = probe_fails == base_fails
print(('ok   ' if same else 'BAD  ') + 'a tooltip mentioning <script> and <input> changes no rule outcome on M1 (' + str(len(base_fails)) + ' vs ' + str(len(probe_fails)) + ' failures)'); ok = ok and same
print('test-check-mocks-d039:', 'PASS' if ok else 'FAIL'); sys.exit(0 if ok else 1)
