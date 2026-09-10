#!/usr/bin/env python3
"""Source-of-truth tooling for 0_plan/TRUTH.md (humans only) and 0_plan/truth-proposals.md (agents may write).

  truth.py check                                   validate the manifest and every [SoT:TR-nnn] tag; exit 1 on drift
  truth.py propose "<statement>" --target <path[#row-id]> --source "<where to verify>" [--why "<reason>"] [--by <name>]
  truth.py attest TR-nnn --by "<Human Name>"        move a proposal into TRUTH.md Part B; REFUSES inside an agent shell
  truth.py designate SRC-nnn --by "<Human Name>"    designate a source from SOURCES.md as truth (TRUTH.md Part A); REFUSES inside an agent shell

Statements are verbatim substrings of the target (or `sha256:<hash>` for a whole file). Nothing here writes to any
file except TRUTH.md (attest, humans) and truth-proposals.md (propose)."""
import re, os, sys, glob, hashlib, subprocess, datetime as dt
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))); REPO = os.path.dirname(ROOT)
MANIFEST = os.path.join(ROOT, 'TRUTH.md'); PROPOSALS = os.path.join(ROOT, 'truth-proposals.md'); SOURCES = os.path.join(ROOT, 'SOURCES.md')
AGENT_ENV = ('CLAUDE_CODE', 'CLAUDECODE', 'CODEX', 'ANTHROPIC_AGENT', 'OPENAI_AGENT')
AI_TRAILER = re.compile(r'claude|anthropic|codex|openai|gpt|gemini|copilot', re.I)
def split_row(line):
    body = line.strip()[1:-1].replace('\\|', '\x00'); return [x.strip().replace('\x00', '\\|') for x in body.split('|')]
def rows(path, ncells, prefix='TR'):
    out = []
    if not os.path.exists(path): return out
    for n, line in enumerate(open(path, encoding='utf-8'), 1):
        if re.match(r'^\|\s*' + prefix + r'-\d{3}\s*\|', line):
            c = split_row(line)
            if len(c) == ncells: out.append((n, c))
    return out
def git(*args):
    try: return subprocess.run(['git', *args], cwd=REPO, capture_output=True, text=True).stdout.strip()
    except Exception: return ''
def statement_present(stmt, target):
    path, _, rowid = target.strip('`').partition('#')
    full = os.path.join(REPO, path)
    if not os.path.exists(full): return False, f"target missing: {path}"
    if stmt.startswith('sha256:'):
        h = hashlib.sha256(open(full, 'rb').read()).hexdigest(); return (h == stmt[7:], f"file hash {'matches' if h == stmt[7:] else 'differs'}")
    text = open(full, encoding='utf-8').read()
    if rowid:
        for line in text.split('\n'):
            if re.match(r'^\|\s*' + re.escape(rowid) + r'\s*\|', line):
                return (stmt in line, f"row {rowid} {'contains' if stmt in line else 'no longer contains'} the statement")
        return False, f"row {rowid} not found in {path}"
    return (stmt in text, 'statement present' if stmt in text else 'statement no longer present verbatim')
def check():
    errs, notes = [], []
    manifest = rows(MANIFEST, 6); proposals = rows(PROPOSALS, 7)
    designations = {c[0]: c for _, c in rows(MANIFEST, 4, 'SRC')}
    sources = {c[0]: c for _, c in rows(SOURCES, 9, 'SRC')}
    for sid, c in designations.items():
        if sid not in sources: errs.append(f"{sid} designated in TRUTH.md but missing from SOURCES.md")
    for sid, c in sources.items():
        desig = c[8]
        if desig.startswith('Designated') and sid not in designations: errs.append(f"{sid} shows '{desig}' in SOURCES.md with no designation row in TRUTH.md (fabricated designation)")
        if sid in designations and not desig.startswith('Designated'): errs.append(f"{sid} is designated in TRUTH.md but SOURCES.md still says '{desig}'")
    notes.append(f"sources={len(sources)} designated={len(designations)}")
    attested = {c[0]: c for _, c in manifest}; proposed = {c[0]: c for _, c in proposals}
    if (attested or designations) and not tracked_manifest(): errs.append('TRUTH.md has designations or attestations but has never been committed by a human')
    dup = set(attested) & set(proposed)
    if dup: errs.append(f"ids in both manifest and proposals: {sorted(dup)}")
    # manifest integrity: only human commits, no working-tree edits once it has entries
    tracked = tracked_manifest()
    dirty = git('status', '--porcelain', '--', os.path.relpath(MANIFEST, REPO)) != ''
    if (attested or designations) and tracked and dirty: errs.append("TRUTH.md differs from its last commit: designations and attestations must land in a human commit")
    if tracked and (attested or designations):
        last = git('log', '-1', '--format=%H%x1f%an%x1f%(trailers:key=Co-Authored-By,valueonly)%x1f%G?%x1f%GK', '--', os.path.relpath(MANIFEST, REPO))
        if last:
            sha, author, trailers, sig, key = (last.split('\x1f') + ['', '', '', '', ''])[:5]
            m_keys = re.search(r'^\|\s*Human signing keys\s*\|\s*(.*?)\s*\|', open(MANIFEST, encoding='utf-8').read(), re.M)
            allow = [k.strip('` ') for k in (m_keys.group(1).split() if m_keys else []) if k.strip('` ') and k.strip('` ') != 'none' and k.strip('` ') != 'yet']
            if allow and key and key not in allow: errs.append(f"TRUTH.md commit {sha[:7]} is signed by key {key}, which is not in the human signing keys list")
            if AI_TRAILER.search(trailers or ''): errs.append(f"last commit touching TRUTH.md ({sha[:7]}) carries an AI co-author trailer: {trailers.strip()}")
            signing = git('config', '--get', 'commit.gpgsign') == 'true' or git('config', '--get', 'user.signingkey') != ''
            if signing and sig not in ('G', 'U'): errs.append(f"signing is configured but the last TRUTH.md commit ({sha[:7]}) is not validly signed (status {sig or '?'})")
            notes.append(f"manifest last committed in {sha[:7]} by {author}; signature status {sig or 'n/a'}")
    # each attested statement must still be present verbatim
    for n, c in manifest:
        ok, why = statement_present(c[1], c[2])
        if not ok: errs.append(f"DRIFT {c[0]} ({c[2]}): {why}")
    # every [SoT:TR-nnn] tag in the docs must point at an attested row
    files = glob.glob(os.path.join(ROOT, '*.md')) + glob.glob(os.path.join(REPO, '1_spec', '**', '*.md'), recursive=True) + [os.path.join(REPO, 'CLAUDE.md')]
    tags = 0
    for f in files:
        if os.path.abspath(f) in (os.path.abspath(MANIFEST), os.path.abspath(PROPOSALS)): continue
        for m in re.finditer(r'\[SoT:(TR-\d{3})\]', open(f, encoding='utf-8').read()):
            tags += 1
            if m.group(1) not in attested: errs.append(f"fabricated or premature tag [SoT:{m.group(1)}] in {os.path.relpath(f, REPO)}: no attested row")
    print(f"truth: attested={len(attested)} proposed={len(proposed)} tags={tags}" + (f"; {'; '.join(notes)}" if notes else ''))
    for e in errs: print('  FAIL', e)
    print('truth check:', 'OK' if not errs else f'FAIL ({len(errs)})')
    return 0 if not errs else 1
def tracked_manifest():
    return git('ls-files', '--error-unmatch', os.path.relpath(MANIFEST, REPO)) != ''
def next_id():
    ids = [int(c[0][3:]) for _, c in rows(MANIFEST, 6) + rows(PROPOSALS, 7)]
    return f"TR-{(max(ids) + 1) if ids else 1:03d}"
def propose(args):
    def opt(name, default=''):
        return args[args.index(name) + 1] if name in args and args.index(name) + 1 < len(args) else default
    stmt = args[0]; target = opt('--target'); source = opt('--source'); why = opt('--why', ''); by = opt('--by', 'agent')
    if not target or not source: print('propose needs --target and --source'); return 2
    ok, detail = statement_present(stmt, target)
    if not ok: print(f"refused: {detail}. A proposal must quote the target verbatim."); return 2
    tid = next_id()
    with open(PROPOSALS, 'a', encoding='utf-8') as f:
        f.write(f"| {tid} | {stmt} | `{target}` | {source} | {by} | {dt.date.today()} | {why} |\n")
    print(f"proposed {tid}: {stmt[:80]}"); return 0
def attest(args):
    if any(k.startswith(AGENT_ENV) for k in os.environ):
        print("refused: attestation is human-only and this shell belongs to an agent. Run truth.py attest from your own terminal."); return 3
    tid = args[0]; by = args[args.index('--by') + 1] if '--by' in args else ''
    if not by: print('attest needs --by "<Human Name>"'); return 2
    props = rows(PROPOSALS, 7); match = [(n, c) for n, c in props if c[0] == tid]
    if not match: print(f"{tid} is not in truth-proposals.md"); return 2
    n, c = match[0]
    ok, detail = statement_present(c[1], c[2])
    if not ok: print(f"refused: {detail}. Fix the target or the statement first."); return 2
    with open(MANIFEST, 'a', encoding='utf-8') as f:
        f.write(f"| {tid} | {c[1]} | {c[2]} | {c[3]} | {by} | {dt.date.today()} |\n")
    lines = open(PROPOSALS, encoding='utf-8').read().split('\n'); del lines[n - 1]
    open(PROPOSALS, 'w', encoding='utf-8').write('\n'.join(lines))
    print(f"attested {tid} by {by}. Now commit it yourself, without an AI co-author:\n  git add 0_plan/TRUTH.md 0_plan/truth-proposals.md && git commit -S -m 'truth: attest {tid}'"); return 0
def designate(args):
    if any(k.startswith(AGENT_ENV) for k in os.environ):
        print("refused: designation is human-only and this shell belongs to an agent. Run truth.py designate from your own terminal."); return 3
    sid = args[0]; by = args[args.index('--by') + 1] if '--by' in args else ''
    note = args[args.index('--note') + 1] if '--note' in args else ''
    if not by: print('designate needs --by "<Human Name>"'); return 2
    src = {c[0]: (n, c) for n, c in rows(SOURCES, 9, 'SRC')}
    if sid not in src: print(f"{sid} is not in SOURCES.md"); return 2
    if sid in {c[0] for _, c in rows(MANIFEST, 4, 'SRC')}: print(f"{sid} is already designated"); return 0
    lines = open(MANIFEST, encoding='utf-8').read().split('\n')
    idx = next(i for i, l in enumerate(lines) if l.startswith('| SRC | Designated by |')) + 2
    while idx < len(lines) and lines[idx].startswith('| SRC-'): idx += 1
    lines.insert(idx, f"| {sid} | {by} | {dt.date.today()} | {note} |")
    open(MANIFEST, 'w', encoding='utf-8').write('\n'.join(lines))
    n, c = src[sid]; c[8] = f"Designated by {by}, {dt.date.today()}"
    sl = open(SOURCES, encoding='utf-8').read().split('\n'); sl[n - 1] = '| ' + ' | '.join(c) + ' |'
    open(SOURCES, 'w', encoding='utf-8').write('\n'.join(sl))
    print(f"designated {sid} by {by}. Commit it yourself, without an AI co-author:\n  git add 0_plan/TRUTH.md 0_plan/SOURCES.md && git commit -S -m 'truth: designate {sid}'"); return 0
if __name__ == '__main__':
    a = sys.argv[1:]
    if not a or a[0] == 'check': sys.exit(check())
    if a[0] == 'propose': sys.exit(propose(a[1:]))
    if a[0] == 'attest': sys.exit(attest(a[1:]))
    if a[0] == 'designate': sys.exit(designate(a[1:]))
    print(__doc__); sys.exit(2)
