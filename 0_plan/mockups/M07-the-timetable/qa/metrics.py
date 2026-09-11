#!/usr/bin/env python3
"""M07 estimator: advance widths from the site's own TTFs (greedy wrap, no kerning; the browser kerns, so a measured count can differ by a line).
Run from the repo root: python3 0_plan/mockups/M07-the-timetable/qa/metrics.py"""
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

def width(text, w, size, spacing=0.0): return sum(w(c)*size + spacing*size for c in text)

def lines(text, w, size, width_px, spacing=0.0):
    words = text.split(' '); sp = w(' ')*size; out = []; cur = 0.0; line = []
    for wd in words:
        ww = sum(w(c)*size + spacing*size for c in wd)
        if not line: cur = ww; line = [wd]
        elif cur + sp + ww <= width_px: cur += sp + ww; line.append(wd)
        else: out.append((' '.join(line), cur)); cur = ww; line = [wd]
    out.append((' '.join(line), cur)); return out

BASE = "assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654/"
F = {'lit400': BASE+'697d4c84f94a275884380d4b_Literata-Regular.ttf',
     'it400': BASE+'697d4cc3f1703d267d101d6b_InterTight-Regular.ttf',
     'it500': BASE+'697d4cc337be83dc14ab8f59_InterTight-Medium.ttf',
     'inc600': BASE+'697d6103272319aa89a9d9b5_Inconsolata-SemiBold.ttf'}
W = {k: load(v) for k, v in F.items()}

def clamp(mn, slope_rem, vw_coef, mx, vw): return max(mn*16, min(mx*16, slope_rem*16 + vw_coef*vw/100))
def t3xl(vw): return clamp(1.6875, 1.2917, 1.7593, 2.8750, vw)
def t2xl(vw): return clamp(1.5, 1.2917, 0.9259, 2.125, vw)
def txl(vw): return clamp(1.375, 1.25, 0.5556, 1.75, vw)
def tlg(vw): return clamp(1.25, 1.1667, 0.3704, 1.5, vw)
def tsm(vw): return clamp(0.875, 0.8542, 0.0926, 0.9375, vw)
def txs(vw): return clamp(0.75, 0.7292, 0.0926, 0.8125, vw)
def tbase(vw): return clamp(1.0, 0.9583, 0.1852, 1.125, vw)
def tbtn(vw): return clamp(1.0625, 1.0417, 0.0926, 1.125, vw)

H1 = "GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere."
LABELS = {
 'g-morning': "Mornings from 9 to noon: about two hours of focused academics",
 'g-afternoon': "Afternoons: workshops, projects and competitions",
 'g-cap': "Every school day.",
 'a-bar': "Two to three hours of focused mastery academics a day, with live sessions from Guides",
 'a-cap': "The rest of the day is yours.",
 'strip': "Four intensive weekends a year in Georgetown",
 'wed': "Wednesday", 'thu': "Thursday",
}
DOOR1 = "Two hours of mastery academics each morning on our Georgetown, Texas campus, afternoons for workshops and building."
DOOR2 = "Live mastery academics with Guides from wherever you live, and four in-person weekends a year in Georgetown."
CTA1 = "EXPLORE THE GEORGETOWN CAMPUS →"; CTA2 = "EXPLORE GT ANYWHERE →"

if __name__ == '__main__':
    print("mean advances (em): lit400 %.3f  it400 %.3f  it500 %.3f  inc600 %.3f" % tuple(sum(W[k](c) for c in H1)/len(H1) for k in ('lit400','it400','it500','inc600')))
    print("\n## h1 lines (Literata 400, --text-3xl) at the planned columns")
    # (row, vw, margin, cols-of-12 or explicit width)
    for row, vw, col in [('V1',360,312),('V2',375,327),('V3',390,342),('V5',414,366),('V6',412,364),('V7',402,354),('V8',430,382),('V11',768,704),('V12',834,770),('V13',1024,None),('V14',1280,None),('V15',1366,None),('V16',1440,None),('V17',1920,None)]:
        px = t3xl(vw)
        if col is None:
            margin = 32 if vw < 1280 else (48 if vw < 1440 else 64)
            content = min(vw - 2*margin, 1440-128)
            colw = (content - 11*32)/12
            col8 = 8*colw + 7*32
            cap = 35 * W['lit400']('0') * px
            col = min(col8, cap)
            note = f"content {content:.0f}, 8 cols {col8:.0f}, 35ch cap {cap:.0f} -> column {col:.0f}"
        else:
            cap = 35 * W['lit400']('0') * px; col = min(col, cap); note = f"column {col:.0f}"
        ls = lines(H1, W['lit400'], px, col, -0.01 if px >= 40 else 0.0)
        print(f"{row} {vw}: {px:.2f}px, {note} -> {len(ls)} lines = {len(ls)*px*1.15:.0f}px; last line '{ls[-1][0]}'")
    print("\n## V10 h1 at --text-xl in 702px:")
    px = txl(750); ls = lines(H1, W['lit400'], px, 702); print(f"  {px:.2f}px -> {len(ls)} lines = {len(ls)*px*1.15:.0f}px")
    px = t3xl(750); ls = lines(H1, W['lit400'], px, 702); print(f"  (at --text-3xl {px:.2f}px -> {len(ls)} lines = {len(ls)*px*1.15:.0f}px)")
    print("\n## SVG labels, Inter Tight 500 at --text-sm")
    for vw in (1024, 1152, 1280, 1440):
        s = tsm(vw); print(f"  {vw}: {s:.2f}px  " + "  ".join(f"{k} {width(v, W['it500'], s):.0f}" for k, v in LABELS.items()))
    print("\n## Door lines, Inter Tight 400 at --text-base, lines in door widths")
    for vw, doorw in ((1024, 320-32), (1280, 395-32), (1440, 437-32), (414, 366-32), (375, 327-32)):
        s = tbase(vw); l1 = lines(DOOR1, W['it400'], s, doorw); l2 = lines(DOOR2, W['it400'], s, doorw)
        print(f"  {vw} door inner {doorw}: base {s:.2f}px -> door1 {len(l1)} lines, door2 {len(l2)} lines (line box {s*1.5:.1f})")
    print("\n## CTA labels, Inconsolata 600 at --text-btn (uppercase)")
    for vw in (360, 375, 414, 1024, 1280, 1440):
        s = tbtn(vw); print(f"  {vw}: {s:.2f}px  cta1 {width(CTA1, W['inc600'], s):.0f}  cta2 {width(CTA2, W['inc600'], s):.0f}")
    print("\n## Header links, Inter Tight 500 at --text-xs and --text-sm")
    for vw in (320, 360, 375, 390, 414, 768):
        xs = txs(vw); sm = tsm(vw)
        print(f"  {vw}: xs {xs:.2f} -> 'Current families' {width('Current families', W['it500'], xs):.0f}, 'Contact admissions' {width('Contact admissions', W['it500'], xs):.0f};  sm {sm:.2f} -> {width('Current families', W['it500'], sm):.0f}, {width('Contact admissions', W['it500'], sm):.0f}")
    print("\n## Door names, Literata 400 at --text-lg / --text-xl")
    for vw in (375, 1024, 1440):
        print(f"  {vw}: lg {tlg(vw):.2f}px 'Georgetown Campus' {width('Georgetown Campus', W['lit400'], tlg(vw)):.0f};  xl {txl(vw):.2f}px {width('Georgetown Campus', W['lit400'], txl(vw)):.0f}")
    print("\n## Anchor sentence Literata at --text-lg in 327:", len(lines("Not sure which is right for your family? Compare the two.", W['lit400'], tlg(375), 327)), "lines")
