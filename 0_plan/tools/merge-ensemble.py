#!/usr/bin/env python3
"""Merge ensemble outputs into the decision tables (0_plan/12-register-loop.md).

usage:
  merge-ensemble.py astra  FILE...      # Astra E0 rows: | ID | Astra recommendation | Astra reasoning | Agrees with Fable |
                                        #   fills the Astra cell and the Verdict where the Astra cell is Pending
  merge-ensemble.py astra --rework FILE # same, but overwrites the Astra cell and resets "Fable checks Astra" to Pending
  merge-ensemble.py audit-fable FILE... # Astra's audit of Fable cells: | ID | Result | Finding |  -> column "Astra checks Fable"
  merge-ensemble.py audit-astra FILE... # Fable's audit of Astra cells: | ID | Result | Finding |  -> column "Fable checks Astra"
Never edits any other cell. Prints what it merged.
"""
import re, sys, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILES = {'03-decisions-and-open-questions.md': 11, '07-design-decisions.md': 9}
IDX = dict(fable=3, astra=4, verdict=5, af=6, fa=7)
VERDICT = {'Yes': 'Agree', 'Partly': 'Partly', 'No': 'Differ'}
def split_row(line):
    body = line.strip()[1:-1].replace('\\|', '\x00'); return [x.strip().replace('\x00', '\\|') for x in body.split('|')]
def join_row(c): return '| ' + ' | '.join(c) + ' |'
def read_rows(paths, kind):
    rows = {}
    for f in paths:
        for line in open(f, encoding='utf-8'):
            if not line.startswith('|'): continue
            c = split_row(line)
            if not re.match(r'^(D|DD|MD|MN|AN|AD|CB|SE)-\d{2,3}$', c[0]): continue
            if kind == 'astra':
                if len(c) > 4: c = [c[0], c[1], ' '.join(c[2:-1]), c[-1]]
                if len(c) != 4: print('  skip malformed', c[0]); continue
                ag = c[3].strip().rstrip('.').capitalize()
                if ag not in VERDICT: ag = 'Partly'
                rows[c[0]] = (c[1].replace('|', '/'), c[2].replace('|', '/'), ag)
            else:
                if len(c) < 3 or c[1] not in ('Pass', 'Fail'): print('  skip malformed', c[0]); continue
                rows[c[0]] = (c[1], ' '.join(c[2:]).replace('|', '/'))
    return rows
def main():
    args = sys.argv[1:]
    if not args: print(__doc__); sys.exit(2)
    kind = args[0]; rework = '--rework' in args; paths = [a for a in args[1:] if not a.startswith('--')]
    rows = read_rows(paths, 'astra' if kind == 'astra' else 'audit')
    merged, missing = [], []
    for name, ncells in FILES.items():
        p = os.path.join(ROOT, name); lines = open(p, encoding='utf-8').read().split('\n')
        for i, line in enumerate(lines):
            m = re.match(r'^\|\s*((?:D|DD|MD|MN|AN|AD|CB|SE)-\d{2,3})\s*\|', line)
            if not m or m.group(1) not in rows: continue
            c = split_row(line)
            if len(c) != ncells: print('  row has', len(c), 'cells, expected', ncells, m.group(1)); continue
            rid = m.group(1)
            if kind == 'astra':
                rec, why, ag = rows[rid]
                if c[IDX['astra']].startswith('Pending') or rework:
                    c[IDX['astra']] = f"**{rec}** {why}"; c[IDX['verdict']] = VERDICT[ag]
                    if rework: c[IDX['fa']] = 'Pending'  # the Astra cell changed, so Fable's check of it must re-run; Astra's check of Fable's cell stands
                    merged.append(rid)
            else:
                res, note = rows[rid]; col = IDX['af'] if kind == 'audit-fable' else IDX['fa']
                c[col] = f"Fail: {note[:220]}" if res == 'Fail' else f"Pass. {note[:160]}"; merged.append(rid)
            lines[i] = join_row(c)
        open(p, 'w', encoding='utf-8').write('\n'.join(lines))
    print(f"{kind}: merged {len(merged)} rows from {len(rows)} parsed; fails: {[r for r in merged if kind != 'astra' and rows[r][0] == 'Fail']}")
if __name__ == '__main__': main()
