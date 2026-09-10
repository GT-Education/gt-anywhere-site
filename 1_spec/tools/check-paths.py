#!/usr/bin/env python3
"""Anti-hallucination path check. Every backticked path in 0_plan/, 1_spec/ and CLAUDE.md must exist, be a declared planned path
(1_spec/tools/planned-paths.txt), or be an accepted shorthand. Exit 1 otherwise.

Accepted shorthands: `0_plan/NN` (a planning doc by number), tokens with placeholders (NN, <...>, *), bare basenames that exist
anywhere under 0_plan/ or 1_spec/, `~/...` paths (checked against the home directory), tokens ending in `...`.
"""
import re, glob, os, sys, fnmatch
SPEC = os.path.dirname(os.path.dirname(os.path.abspath(__file__))); REPO = os.path.dirname(SPEC)
planned = [l.strip() for l in open(os.path.join(SPEC, 'tools', 'planned-paths.txt')) if l.strip() and not l.startswith('#')]
files = sorted(glob.glob(os.path.join(REPO, '0_plan', '*.md'))) + sorted(glob.glob(os.path.join(SPEC, '**', '*.md'), recursive=True)) + [os.path.join(REPO, 'CLAUDE.md')]
TOKEN = re.compile(r'`([^`\s]+)`')
ROOTS = ('0_plan/', '1_spec/', 'sites/', 'design-system/', 'tools/', 'docs/', '.cursor/', '~/', 'assets/')
EXTS = ('.md', '.py', '.mjs', '.js', '.html', '.css', '.json', '.txt', '.xml', '.toml', '.sh')
basenames = {}
for base in (os.path.join(REPO, '0_plan'), SPEC, os.path.join(REPO, 'tools')):
    for root, _, fs in os.walk(base):
        for f in fs: basenames.setdefault(f, []).append(os.path.relpath(os.path.join(root, f), REPO))
def is_path_like(t):
    if t.startswith(('http', 'mailto', '#', 'feat/', 'fix/', 'GTT', 'M*/')) or t in ('n/a', '/', './', '../'): return False
    return t.startswith(ROOTS) or t.endswith(EXTS)
def ok(t):
    if t.endswith('...') or '<' in t or 'NN' in t or '..' in t: return True
    if '*' in t:
        if any(fnmatch.fnmatch(p, t) or fnmatch.fnmatch(p.rstrip('/'), t.rstrip('/')) for p in planned): return True
        if t.startswith('~/'): return bool(glob.glob(os.path.expanduser(t)))
        for base in (REPO, os.path.join(REPO, '0_plan'), SPEC):
            if glob.glob(os.path.join(base, t)) or glob.glob(os.path.join(base, '**', t), recursive=True): return True
        return False
    if t.startswith('~/'): return os.path.exists(os.path.expanduser(t)) or any(fnmatch.fnmatch(t, p) for p in planned)
    m = re.match(r'^(0_plan|1_spec)/(\d{2})$', t)
    if m: return bool(glob.glob(os.path.join(REPO, m.group(1), m.group(2) + '-*.md')))
    for base in (REPO, os.path.join(REPO, '0_plan'), SPEC, os.path.join(SPEC, 'templates'), os.path.join(SPEC, 'tools'), os.path.join(REPO, '0_plan', 'tools'), os.path.join(REPO, '0_plan', 'ensemble')):
        if os.path.exists(os.path.join(base, t)): return True
    if '/' not in t and t in basenames: return True
    for p in planned:
        if t == p or t == p.rstrip('/') or t.startswith(p) or fnmatch.fnmatch(t, p) or os.path.basename(t) == os.path.basename(p.rstrip('/')): return True
    return False
missing = {}
GENERATED = ('ID-INDEX.md', 'RUN-LOG.md', '12-traceability-matrix.md')
for f in files:
    rel = os.path.relpath(f, REPO)
    if rel.endswith(GENERATED): continue
    for t in set(TOKEN.findall(open(f, encoding='utf-8').read())):
        t = re.sub(r':\d+$', '', t); t = t.split('#')[0]  # strip :line and #row-id suffixes
        if is_path_like(t) and not ok(t): missing.setdefault(t, set()).add(rel)
for t, where in sorted(missing.items()): print(f"  MISSING PATH {t}  <- {', '.join(sorted(where))}")
print("check-paths:", "OK" if not missing else f"FAIL ({len(missing)})")
sys.exit(1 if missing else 0)
