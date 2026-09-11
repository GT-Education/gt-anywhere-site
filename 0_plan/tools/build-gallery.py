#!/usr/bin/env python3
"""Regenerates 0_plan/mockups/index.html from the mock folders: twenty-five directions (M01 to M20 from the research slate,
M21 to M25 from the Design Library) with thesis, build state,
runner result and critic verdicts, then the earlier five. Run after every wave: python3 0_plan/tools/build-gallery.py"""
import re, os, glob, html
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MOCKS = os.path.join(ROOT, 'mockups')
def slate():
    rows = {}
    for line in open(os.path.join(ROOT, 'kb', 'DIRECTIONS.md'), encoding='utf-8'):
        m = re.match(r'^\| (M\d\d) \| ([^|]+) \| ([^|]+) \|', line)
        if m: rows[m.group(1)] = (m.group(2).strip(), m.group(3).strip())
    return rows
def runner(folder):
    p = os.path.join(folder, 'qa', 'fold.md')
    if not os.path.exists(p): return 'QA not run'
    t = open(p, encoding='utf-8').read(); m = re.search(r'^## Result: (.*)$', t, re.M)
    return m.group(1) if m else 'QA ran'
def critics(mid):
    out = []
    for who in ('fable', 'astra'):
        p = os.path.join(ROOT, 'ensemble', f'critic-{who}-{mid}.md')
        if not os.path.exists(p): out.append(f'{who.capitalize()}: pending'); continue
        t = open(p, encoding='utf-8').read()
        scores = [int(x) for x in re.findall(r'^\| (?:Objective|Composition|Typography|Imagery|Color and surface|Motion|Mission and exclusivity|Craft|Continuity) \| (\d) \|', t, re.M)]
        verdict = ('Pass' if min(scores) >= 4 else 'Iterate') if len(scores) == 9 else ''  # from the nine scores only
        out.append(f'{who.capitalize()}: {"/".join(map(str, scores)) if scores else "scored"}{(" " + verdict) if verdict else ""}')
    return '; '.join(out)
def card(mid, name, thesis, folder, state, run, crit):
    rel = './' + os.path.basename(folder) + '/' if folder else ''
    links = (f'<a href="{rel}">Open the mock</a> <a href="{rel}RATIONALE.md">Rationale</a> <a href="{rel}qa/fold.md">Fold and matrix run</a>' if folder else '')
    return f'''<li class="card"><p class="eyebrow">{mid}</p><h3>{html.escape(name)}</h3><p class="thesis">{html.escape(thesis)}</p><p class="state"><b>{html.escape(state)}</b> {html.escape(run)}<br>{html.escape(crit)}</p><p class="links">{links}</p></li>'''
def main():
    sl = slate(); cards = []
    for mid in [f'M{i:02d}' for i in range(1, 26)]:  # M01 to M20 from the research slate, M21 to M25 from the Design Library (DD-48)
        folders = glob.glob(os.path.join(MOCKS, mid + '-*'))
        name, thesis = sl.get(mid, (mid, ''))
        if folders:
            f = folders[0]; cards.append(card(mid, name, thesis, f, 'Built', runner(f), critics(mid)))
        else: cards.append(card(mid, name, thesis, None, 'Not built yet', '', 'brief: kb/briefs/' + mid + '.md'))
    old = []
    for f in sorted(glob.glob(os.path.join(MOCKS, 'M[1-5]-*'))):
        b = os.path.basename(f); old.append(f'<li class="card old"><h3>{html.escape(b)}</h3><p class="state">Earlier direction, reviewed at E2 and E3; superseded by the twenty. {html.escape(runner(f))}</p><p class="links"><a href="./{b}/">Open</a> <a href="./{b}/RATIONALE.md">Rationale</a></p></li>')
    page = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>GT School landing mock gallery</title>
<meta name="description" content="The twenty directions for the gt.school umbrella landing page, with build state, viewport-matrix results and critic verdicts.">
<meta name="robots" content="noindex, nofollow"><link rel="icon" href="data:,">
<link rel="stylesheet" href="./shared/tokens-v2.css"><link rel="stylesheet" href="./shared/fonts.css">
<style>
*{{box-sizing:border-box}} body{{margin:0;background:var(--color-bg);color:var(--color-text);font-family:var(--font-sans);font-size:var(--text-base);line-height:var(--leading-prose)}}
.skip-link{{position:absolute;left:-999px}} .skip-link:focus{{left:var(--space-4);top:var(--space-4);background:var(--color-navy);color:var(--color-on-navy);padding:var(--space-3) var(--space-4)}}
header{{display:flex;align-items:center;justify-content:space-between;padding:var(--space-4) var(--space-6);border-bottom:1px solid var(--color-border)}}
header img{{height:32px;width:auto}} main{{max-width:var(--container-max);margin:0 auto;padding:var(--space-7) var(--space-6)}}
h1{{font-family:var(--font-serif);font-weight:400;font-size:var(--text-2xl);line-height:var(--leading-tight);margin:0 0 var(--space-3)}}
h2{{font-family:var(--font-serif);font-weight:400;font-size:var(--text-xl);margin:var(--space-9) 0 var(--space-4)}}
.lead{{max-width:65ch;color:var(--color-text-muted)}} ul{{list-style:none;padding:0;margin:0;display:grid;gap:var(--space-4);grid-template-columns:repeat(auto-fill,minmax(280px,1fr))}}
.card{{background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-md);padding:var(--space-5)}} .card.old{{background:transparent}}
.eyebrow{{font-size:var(--text-xs);letter-spacing:.08em;text-transform:uppercase;color:var(--color-text-muted);margin:0}}
h3{{font-family:var(--font-serif);font-weight:400;font-size:var(--text-lg);margin:var(--space-2) 0}} .thesis{{margin:0 0 var(--space-3)}} .state{{font-size:var(--text-sm);color:var(--color-text-muted);margin:0 0 var(--space-3)}}
.links a{{font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-navy);margin-right:var(--space-4)}} a:focus-visible{{outline:2px solid var(--color-focus);outline-offset:2px}}
footer{{padding:var(--space-6);color:var(--color-text-muted);font-size:var(--text-sm);border-top:1px solid var(--color-border)}}
</style></head>
<body><a class="skip-link" href="#main">Skip to main content</a>
<header><img src="./shared/img/gt-school-logo-h.svg" alt="GT School" width="120" height="32"><span>Landing mock gallery, preview only</span></header>
<main id="main"><h1>Twenty directions for the GT School landing page</h1>
<p class="lead">Each card is one complete mock built from its brief (kb/briefs) under the shared contract. The state line shows the viewport-matrix runner result and the two critics' scores (nine rubric rows, 1 to 5). Previews are noindex.</p>
<ul>{''.join(cards)}</ul>
<h2>The earlier five</h2><ul>{''.join(old)}</ul></main>
<footer>Generated by 0_plan/tools/build-gallery.py. No form on any mock; nothing here submits to a live backend.</footer></body></html>'''
    open(os.path.join(MOCKS, 'index.html'), 'w', encoding='utf-8').write(page); print('gallery written:', len(cards), 'directions,', len(old), 'earlier mocks')
main()
