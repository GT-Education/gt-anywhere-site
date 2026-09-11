#!/usr/bin/env python3
"""M02 h1 line estimator: real Literata TTF advances (Regular for the sentence, Italic for "in person" and "online"),
greedy word wrap, no kerning (the browser kerns, so a measured count can be one line lower). Run from the repo root:
python3 0_plan/mockups/M02-the-journal/qa/h1lines.py            (the matrix rows this mock designs to)
python3 0_plan/mockups/M02-the-journal/qa/h1lines.py "[('V2',375,27.27,327)]"   (any list of row, viewport, px, column px)
"""
import struct, sys

def tables(b):
    n = struct.unpack('>H', b[4:6])[0]; t = {}
    for i in range(n):
        tag, _, off, ln = struct.unpack('>4sIII', b[12+16*i:28+16*i]); t[tag.decode('latin1')] = (off, ln)
    return t

def load(path):
    b = open(path, 'rb').read(); t = tables(b)
    upem = struct.unpack('>H', b[t['head'][0]+18:t['head'][0]+20])[0]
    nhm = struct.unpack('>H', b[t['hhea'][0]+34:t['hhea'][0]+36])[0]
    ho = t['hmtx'][0]; adv = [struct.unpack('>H', b[ho+4*i:ho+4*i+2])[0] for i in range(nhm)]
    co = t['cmap'][0]; ntab = struct.unpack('>H', b[co+2:co+4])[0]; cmap = {}
    for i in range(ntab):
        pid, eid, off = struct.unpack('>HHI', b[co+4+8*i:co+12+8*i]); so = co+off
        fmt = struct.unpack('>H', b[so:so+2])[0]
        if fmt != 4: continue
        segx2 = struct.unpack('>H', b[so+6:so+8])[0]; seg = segx2//2
        ends = struct.unpack('>%dH' % seg, b[so+14:so+14+segx2]); starts = struct.unpack('>%dH' % seg, b[so+16+segx2:so+16+2*segx2])
        deltas = struct.unpack('>%dh' % seg, b[so+16+2*segx2:so+16+3*segx2]); rob = so+16+3*segx2
        ros = struct.unpack('>%dH' % seg, b[rob:rob+segx2])
        for s in range(seg):
            for c in range(starts[s], min(ends[s], 0xFFFF)+1):
                if ros[s] == 0: g = (c + deltas[s]) & 0xFFFF
                else:
                    ga = rob + 2*s + ros[s] + 2*(c-starts[s]); g = struct.unpack('>H', b[ga:ga+2])[0]
                    if g: g = (g + deltas[s]) & 0xFFFF
                cmap[c] = g
        break
    def w(ch): g = cmap.get(ord(ch), 0); return adv[min(g, nhm-1)]/upem
    return w

H1 = "GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere."
ITALIC = {'in', 'person', 'online'}   # the two phrases set in Literata Italic (styling only)
BASE = "assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654/"
REG = load(BASE + '697d4c84f94a275884380d4b_Literata-Regular.ttf')
ITA = load(BASE + '697d4c844940069bd125f926_Literata-Italic.ttf')

def width(word, size):
    w = ITA if word.strip(',.') in ITALIC else REG
    return sum(w(c) for c in word) * size

def lines(text, size, col, nowrap_in_person=False):
    words = text.split(' ')
    if nowrap_in_person:  # "in person" bound with a no-break space
        i = words.index('in'); words[i:i+2] = ['in person']
    sp = REG(' ') * size; out = []; line = []; cur = 0.0
    for wd in words:
        ww = sum(width(p, size) for p in wd.split(' ')) + (sp if ' ' in wd else 0)
        if not line: line, cur = [wd], ww
        elif cur + sp + ww <= col: line.append(wd); cur += sp + ww
        else: out.append((' '.join(line), cur)); line, cur = [wd], ww
    out.append((' '.join(line), cur)); return out

# (row, viewport width, h1 px from the clamps in tokens-v2.css, h1 column px in this mock)
# --text-3xl = 1.2917rem + 1.7593vw (27 to 46px); --text-xl = 1.25rem + .5556vw on the landscape row
def t3xl(vw): return min(46.0, max(27.0, 20.667 + 1.7593 * vw / 100))
def txl(vw): return min(28.0, max(22.0, 20.0 + 0.5556 * vw / 100))
def cols8(content): return (content - 11 * 32) / 12 * 8 + 7 * 32
CH = REG('0')
DEFAULT = [
    ('V1', 360, t3xl(360), 312), ('V2', 375, t3xl(375), 327), ('V3', 390, t3xl(390), 342), ('V4', 393, t3xl(393), 345),
    ('V5', 414, t3xl(414), 366), ('V6', 412, t3xl(412), 364), ('V7', 402, t3xl(402), 354), ('V8', 430, t3xl(430), 382),
    ('V9', 390, t3xl(390), 342), ('V10 (--text-xl, landscape)', 750, txl(750), 686),
    ('V11', 768, t3xl(768), min(704, 35 * CH * t3xl(768))), ('V12', 834, t3xl(834), min(770, 35 * CH * t3xl(834))),
    ('V13', 1024, t3xl(1024), min(cols8(928), 35 * CH * t3xl(1024))), ('V14', 1280, t3xl(1280), min(cols8(1184), 35 * CH * t3xl(1280))),
    ('V15', 1366, t3xl(1366), min(cols8(1270), 35 * CH * t3xl(1366))), ('V16', 1440, t3xl(1440), min(cols8(1312), 35 * CH * t3xl(1440))),
    ('V17', 1920, t3xl(1920), min(cols8(1312), 35 * CH * t3xl(1920))), ('V18', 320, t3xl(320), 272), ('V19', 1024, t3xl(1024), min(cols8(928), 35 * CH * t3xl(1024))),
]
ROWS = [tuple(r) for r in eval(sys.argv[1])] if len(sys.argv) > 1 else DEFAULT
print('Literata Regular ch (advance of "0"): %.3f em; mean advance of the sentence: %.3f em' % (CH, sum(width(w, 1) for w in H1.split(' ')) / len(H1.replace(' ', ''))))
for name, vw, px, col in ROWS:
    for nb in (False, True):
        ls = lines(H1, px, col, nb)
        print('%-28s %6.2fpx in %6.1fpx %-22s -> %d lines (%.0fpx at 1.15); last line %2d chars; shortest non-last %3.0f%%' % (
            name if not nb else '', px, col, '(in person bound)' if nb else '', len(ls), len(ls) * px * 1.15, len(ls[-1][0]),
            100 * min(x for _, x in ls[:-1]) / col if len(ls) > 1 else 100))
        if not nb or len(ls) != len(lines(H1, px, col, False)):
            for t, x in ls: print('      %5.0f  %s' % (x, t))
