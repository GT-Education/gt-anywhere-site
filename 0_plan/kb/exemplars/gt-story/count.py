#!/usr/bin/env python3
"""Reproduces every count M33.md cites from the checked-in extract. Run: python3 0_plan/kb/exemplars/gt-story/count.py"""
import re, os, collections
D = os.path.dirname(os.path.abspath(__file__))
seg = open(os.path.join(D, 'story-segment.html'), encoding='utf-8').read()
ticks = [(m.group(1) or '').strip() or 'plain'
         for m in re.finditer(r'class="timeline_small-line(\s+[^"]*)?"', seg)]
counts = collections.Counter(ticks)
print(f'ticks total          {len(ticks)}')
for k in sorted(counts): print(f'  {k:20} {counts[k]}')
print(f'inner bars           {len(re.findall(r"class=.timeline_small-line-inner", seg))}')
print(f'story image frames   {len(re.findall(r"story_image-wrap", seg))}')
print(f'Webflow interactions {len(re.findall(r"data-w-id", seg))}')
lab = {'plain': '.', 'is-bigger': 'B', 'is-hour': 'H', 'is-transparent': '_'}
s = ''.join(lab.get(t, '?') for t in ticks)
half = len(s) // 2
print(f'two halves identical {s[:half] == s[half:]}')
majors = [i for i, ch in enumerate(s) if ch == 'B']
gaps = collections.Counter(b - a for a, b in zip(majors, majors[1:]))
print(f'gaps between majors  {dict(gaps)}')
print('pattern:')
for k in range(0, len(s), 52): print('  ', s[k:k+52])
