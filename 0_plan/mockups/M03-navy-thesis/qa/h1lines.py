#!/usr/bin/env python3
"""M03 h1 line estimator: real Literata TTF advances, greedy wrap, no kerning (the browser kerns, so a measured count can be one
line lower, as at V7). Run from the repo root with a list of (row, viewport width, h1 px, h1 column px), for example:
python3 0_plan/mockups/M03-navy-thesis/qa/h1lines.py "[('V2',375,27.26,327),('V16',1440,46.0,932)]"
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

def lines(text, w, size, width, spacing=0.0):
    words = text.split(' '); sp = w(' ')*size; out = []; cur = 0.0; count = 0
    for wd in words:
        ww = sum(w(c)*size + spacing*size for c in wd)
        if cur == 0: cur = ww; count = 1; line = [wd]
        elif cur + sp + ww <= width: cur += sp + ww; line.append(wd)
        else: out.append((' '.join(line), cur)); cur = ww; count += 1; line = [wd]
    out.append((' '.join(line), cur)); return out

H1 = "GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere."
BASE = "assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654/"
FACES = {'Literata 400': BASE+'697d4c84f94a275884380d4b_Literata-Regular.ttf', 'Literata 300': BASE+'697d4c84fa5267e0ad5d60e8_Literata-Light.ttf'}
# rows: name, viewport width, h1 px from the clamp, h1 column width used by the mock
ROWS = [(r[0], r[1], r[2], r[3]) for r in eval(sys.argv[1])] if len(sys.argv) > 1 else []
for face, path in FACES.items():
    w = load(path); print('\n## ' + face + '  (mean advance of the h1 text: %.3f em; ch = %.3f em)' % (sum(w(c) for c in H1)/len(H1), w('0')))
    for name, vw, px, col in ROWS:
        ls = lines(H1, w, px, col, -0.01 if px >= 40 else 0.0)
        print('%s: %dpx at %dpx wide -> %d lines; longest %.0fpx; last line %d chars' % (name, px, col, len(ls), max(x for _, x in ls), len(ls[-1][0])))
        for t, x in ls: print('    %5.0f  %s' % (x, t))
