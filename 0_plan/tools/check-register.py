#!/usr/bin/env python3
"""Register loop checker (0_plan/12-register-loop.md). Every decision row in 03 and 07 must be Complete:
Fable cell, Astra cell, Verdict, Astra-checks-Fable Pass, Fable-checks-Astra Pass, and no mechanical hallucination finding.
Writes 0_plan/ensemble/register-status.md. Exit 1 while any row is incomplete."""
import re, os, glob, sys, datetime as dt
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))); REPO = os.path.dirname(ROOT)
ID = re.compile(r'\b(P|REQ|CON|DEL|D|Q|MO|DD|MD|MN|AN|AD|CB|SE|TR|SRC|CR|W|TC|C|T|V)-(\d{2,3})\b')
defined = set()
for f in glob.glob(os.path.join(ROOT, '*.md')) + glob.glob(os.path.join(REPO, '1_spec', '**', '*.md'), recursive=True):
    if f.endswith(('ID-INDEX.md', 'RUN-LOG.md', '12-traceability-matrix.md', 'register-status.md')): continue
    for line in open(f, encoding='utf-8'):
        m = re.match(r'^\|\s*\*{0,2}((?:P|REQ|CON|DEL|D|Q|MO|DD|MD|MN|AN|AD|CB|SE|TR|SRC|CR|W|TC|C|T|V)-\d{2,3})\*{0,2}\s*\|', line)
        if m: defined.add(m.group(1))
corpus = ''
# Evidence for numbers comes only from sources of truth that live in the repo (SOURCES.md, designated or proposed),
# plus the decision documents themselves for design constants (breakpoints, durations). Model-authored summaries
# (00, 01, 02, 04, 08, 09, 11) are NOT evidence: a number must trace to a source, not to another model's sentence.
SOURCE_FILES = ['0_plan/inputs/transcript-2026-09-10-website-redo.md', 'index.html', 'academics/index.html', 'advisors/index.html',
                'intensives/index.html', 'academic-calendar/index.html', 'tools/MIRROR-LOG.json', 'README.md',
                '0_plan/10-analytics-current-state.md', '0_plan/12-claims-register.md', '0_plan/TRUTH.md', '0_plan/SOURCES.md',
                '0_plan/05-landing-mockups-plan.md'] + sorted(glob.glob(os.path.join(REPO, '0_plan', 'research', 'R*.md'))) + sorted(glob.glob(os.path.join(REPO, '0_plan', 'kb', '**', '*.md'), recursive=True)) + sorted(glob.glob(os.path.join(REPO, '0_plan', 'ensemble', 'E*.md'))) + sorted(glob.glob(os.path.join(REPO, '0_plan', 'mockups', 'shared', '*.md')))
for rel in SOURCE_FILES:
    rel = os.path.relpath(rel, REPO) if os.path.isabs(rel) else rel
    p_ = os.path.join(REPO, rel)
    if os.path.exists(p_):
        t = open(p_, encoding='utf-8', errors='ignore').read()
        if rel.endswith('.html'): t = re.sub(r'<script.*?</script>|<style.*?</style>', ' ', t, flags=re.S); t = re.sub(r'<[^>]+>', ' ', t)
        corpus += t
# decision documents: only the Decision and Options cells count (design constants such as 390px or 250 ms live there);
# the Fable and Astra cells never count, otherwise a number would be evidence for itself
for rel in ('0_plan/03-decisions-and-open-questions.md', '0_plan/07-design-decisions.md'):
    p_ = os.path.join(REPO, rel)
    if os.path.exists(p_):
        for line in open(p_, encoding='utf-8'):
            if re.match(r'^\|\s*(?:D|DD|MD|MN|AN|AD|CB|SE)-\d{2,3}\s*\|', line):
                cells = [x.strip() for x in line.strip()[1:-1].replace('\\|', ' ').split('|')]
                if len(cells) >= 3: corpus += ' ' + cells[1] + ' ' + cells[2]
corpus_nums = set(re.findall(r'\d[\d,\.]*', corpus))
planned = [l.strip() for l in open(os.path.join(REPO, '1_spec', 'tools', 'planned-paths.txt')) if l.strip()] if os.path.exists(os.path.join(REPO, '1_spec', 'tools', 'planned-paths.txt')) else []
NUM = re.compile(r'(?<![\w-])\$?(\d[\d,]*(?:\.\d+)?)(?:x|%| percent)?(?![\w-])')
PLACEHOLDER = re.compile(r'^\s*(pending.*|n/?a|tbd|see above|as requested|-)\s*$', re.I)
def words(s): return len(re.findall(r"[A-Za-z0-9']+", s))
def mech(cell, options):
    """mechanical findings for one cell"""
    f = []
    cell = re.sub(r'\(https?://[^)]+\)|https?://\S+|\(?[\w./~-]+\.md:\d+\)?|\bline \d+\b', ' ', cell)  # URLs, path:line references and line numbers carry ids, not claims
    cell = re.sub(r'(\d)(st|nd|rd|th)\b', r'\1', cell)  # ordinals: 99.9th -> 99.9 so the whole number is compared
    for a, b in ID.findall(cell):
        i = f"{a}-{b}"
        if i not in defined and i not in ('J1','J2','J3','J4'): f.append(f"unknown id {i}")
    for n in NUM.findall(cell):
        n = n.rstrip('.,'); raw = n.replace(',', '')
        if not raw: continue
        if raw in ('0','1','2','3','4','5','6','7','8','9','10','15','20','30','45','60','48','24','28'): continue  # small counts, ordinals, minutes, hours
        if n in corpus_nums or raw in corpus_nums or n in options or raw in options: continue
        if re.search(r'\b(19|20)\d\d\b', n): continue  # years
        if re.search(r'(WCAG|GSAP|jQuery|GA|version|v)\s*' + re.escape(n) + r'\b', cell): continue  # standard or software versions, not facts
        f.append(f"unsupported number {n}")
    for t in re.findall(r'`([^`\s]+)`', cell):
        if ('/' in t or t.endswith(('.md', '.py', '.json', '.css', '.html'))) and not t.startswith(('http', '~', '/', '?', '#')):
            cand = [os.path.join(REPO, t), os.path.join(ROOT, t), os.path.join(REPO, '1_spec', t)]
            if any(t == p or t.startswith(p) or os.path.basename(t) == os.path.basename(p.rstrip('/')) for p in planned): continue
            if not any(os.path.exists(c) for c in cand) and not re.match(r'^0_plan/\d\d$|^1_spec/\d\d$', t) and '*' not in t and 'NN' not in t:
                if not glob.glob(os.path.join(REPO, '**', t), recursive=True): f.append(f"missing path {t}")
    if PLACEHOLDER.match(cell) or words(cell) < 20: f.append("thin or placeholder cell")
    return f
rows = []
for path, ncells, idx in (('03-decisions-and-open-questions.md', 11, dict(fable=3, astra=4, verdict=5, af=6, fa=7)), ('07-design-decisions.md', 9, dict(fable=3, astra=4, verdict=5, af=6, fa=7))):
    for n, line in enumerate(open(os.path.join(ROOT, path), encoding='utf-8'), 1):
        m = re.match(r'^\|\s*((?:D|DD|MD|MN|AN|AD|CB|SE)-\d{2,3})\s*\|', line)
        if not m: continue
        body = line.strip()[1:-1].replace('\\|', '\x00')
        c = [x.strip().replace('\x00', '\\|') for x in body.split('|')]
        if c[-1].startswith('Superseded'):
            rows.append((m.group(1), path, n, [], 'Superseded')); continue
        if len(c) != ncells: rows.append((m.group(1), path, n, [f"row has {len(c)} cells, expected {ncells}"], 'Malformed')); continue
        reasons = []
        fable, astra, verdict, af, fa, options = c[idx['fable']], c[idx['astra']], c[idx['verdict']], c[idx['af']], c[idx['fa']], c[2]
        if PLACEHOLDER.match(fable) or words(fable) < 20: reasons.append('Fable cell missing or thin')
        else: reasons += [f"Fable: {x}" for x in mech(fable, options)]
        if PLACEHOLDER.match(astra) or astra.startswith('Pending'): reasons.append('Astra cell missing')
        else: reasons += [f"Astra: {x}" for x in mech(astra, options)]
        if verdict not in ('Agree', 'Partly', 'Differ', 'Escalated'): reasons.append(f"verdict '{verdict}'")
        if not af.startswith('Pass'): reasons.append('Astra checks Fable: ' + ('pending' if af.startswith('Pending') else af[:80]))
        if not fa.startswith('Pass'): reasons.append('Fable checks Astra: ' + ('pending' if fa.startswith('Pending') else fa[:80]))
        state = 'Complete' if not reasons else ('Drafted' if 'Astra cell missing' in reasons else ('Reviewed' if any(r.startswith(('Astra checks Fable: pending', 'Fable checks Astra: pending')) for r in reasons) else 'Rework'))
        rows.append((m.group(1), path, n, reasons, state))
total = len(rows); complete = sum(1 for r in rows if r[4] in ('Complete', 'Superseded'))
by_state = {}
for r in rows: by_state[r[4]] = by_state.get(r[4], 0) + 1
out = [f"# Register status\n\nGenerated {dt.datetime.now():%Y-%m-%d %H:%M} by `0_plan/tools/check-register.py`. Goal: every row Complete (`12-register-loop.md`).\n",
       "| Rows | Complete or superseded | Drafted | Reviewed | Rework | Escalated | Malformed |", "|---|---|---|---|---|---|---|",
       f"| {total} | {complete} | {by_state.get('Drafted',0)} | {by_state.get('Reviewed',0)} | {by_state.get('Rework',0)} | {by_state.get('Escalated',0)} | {by_state.get('Malformed',0)} |",
       "\n## Incomplete rows\n", "| Row | File | Line | State | Reasons |", "|---|---|---|---|---|"]
for rid, path, n, reasons, state in rows:
    if state not in ('Complete', 'Superseded'): out.append(f"| {rid} | `{path}` | {n} | {state} | {'; '.join(reasons)} |")
os.makedirs(os.path.join(ROOT, 'ensemble'), exist_ok=True)
open(os.path.join(ROOT, 'ensemble', 'register-status.md'), 'w', encoding='utf-8').write('\n'.join(out) + '\n')
print(f"register: {total} rows, {complete} complete; states={by_state}")
reasons_all = [x for r in rows for x in r[3]]
mechanical = [x for x in reasons_all if any(k in x for k in ('unknown id', 'unsupported number', 'missing path', 'thin'))]
print(f"mechanical findings: {len(mechanical)}" + (f" e.g. {mechanical[:6]}" if mechanical else ''))
print("check-register:", "GOAL MET" if complete == total else f"INCOMPLETE ({total-complete} rows) -> 0_plan/ensemble/register-status.md")
sys.exit(0 if complete == total else 1)
