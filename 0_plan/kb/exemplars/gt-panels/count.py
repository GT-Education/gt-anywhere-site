#!/usr/bin/env python3
"""Reproduces the imbalance counts M32 rests on, from the checked-in extract.
Run: python3 0_plan/kb/exemplars/gt-panels/count.py"""
import re, os, html
D = os.path.dirname(os.path.abspath(__file__))
seg = open(os.path.join(D, 'panels-segment.html'), encoding='utf-8').read()
halves = re.split(r'(?=<a [^>]*class="split-cta_(?:left|right))', seg)
halves = [x for x in halves if 'split-cta_' in x]
print(f'panels found: {len(halves)}\n')
for part in halves:
    side = 'left (GT School)' if 'split-cta_left' in part else 'right (GT Anywhere)'
    heads = [re.sub(r'<[^>]+>', '', x) for x in re.findall(r'<h2[^>]*>(.*?)</h2>', part, re.S)]
    paras = [re.sub(r'<[^>]+>', '', x) for x in re.findall(r'<p[^>]*>(.*?)</p>', part, re.S)]
    btns = re.findall(r'class="button-text">([^<]*)<', part)
    imgs = re.findall(r'<img[^>]*>', part)
    txt = ' '.join(html.unescape(t) for t in heads + paras + btns)
    txt = re.sub(r'\s+', ' ', txt).strip()
    body = ' '.join(html.unescape(t) for t in paras).strip()
    print(f'{side}')
    print(f'  marks (img)          {len(imgs)}')
    print(f'  headings             {len(heads)}')
    print(f'  paragraphs           {len(paras)}  ({len(body)} characters)')
    print(f'  button labels        {len(btns)}  {btns}')
    print(f'  characters of text   {len(txt)}')
    print()
def chars(part):
    heads = [re.sub(r'<[^>]+>', '', x) for x in re.findall(r'<h2[^>]*>(.*?)</h2>', part, re.S)]
    paras = [re.sub(r'<[^>]+>', '', x) for x in re.findall(r'<p[^>]*>(.*?)</p>', part, re.S)]
    btns = re.findall(r'class="button-text">([^<]*)<', part)
    t = ' '.join(html.unescape(x) for x in heads + paras + btns)
    return len(re.sub(r'\s+', ' ', t).strip())
if len(halves) == 2:
    a, b = chars(halves[0]), chars(halves[1])
    lo, hi = min(a, b), max(a, b)
    print(f'character ratio between the two panels: {hi/lo:.2f} : 1  ({a} vs {b})')
