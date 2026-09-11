#!/usr/bin/env python3
"""Mechanical gate for the landing mocks (0_plan/mockups/M*/): the rules in shared/BUILDER-BRIEF.md.
Usage: python3 0_plan/tools/check-mocks.py [folder ...]   (default: every 0_plan/mockups/M*/)"""
import re, sys, os, glob, html as H
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ALLOWED_HOSTS = {'www.gt.school','gt.school','anywhere.gt.school','apply.gt.school','community.gt.school','schema.org'}
ALLOWED_NUMS = {'90','10,400','9','8','512','270','9481','2026','09','10','844','390','1440'}
EVENTS = {'door_click':4,'compare_view':1,'cta_apply_click':2,'cta_secondary_click':4,'families_click':1,'tefa_module_view':1,'outbound_school_site':2}
RATIONALE_SECTIONS = ['Direction','h1','Decisions applied','Motion spec','Assets','Departures','Flagged slots','Parent questions','Self-check']
MOTION_OK = {'opacity','transform'}

def visible_text(doc):
    d = re.sub(r'<!--.*?-->', ' ', doc, flags=re.S)
    d = re.sub(r'<(script|style)[^>]*>.*?</\1>', ' ', d, flags=re.S|re.I)
    d = re.sub(r'<[^>]+>', ' ', d)
    return H.unescape(d)

def check(folder):
    res = []
    def r(rule, ok, detail=''):
        res.append((rule, 'PASS' if ok else 'FAIL', detail))
    idx = os.path.join(folder, 'index.html'); css = os.path.join(folder, 'styles.css'); rat = os.path.join(folder, 'RATIONALE.md')
    if not os.path.exists(idx): return [('files','FAIL','index.html missing')]
    doc = open(idx, encoding='utf-8').read(); style = open(css, encoding='utf-8').read() if os.path.exists(css) else ''
    text = visible_text(doc)
    d039 = re.search(r'<html\b[^>]*\bdata-d039="([^"]*)"', doc, re.I); d039 = set(d039.group(1).split()) if d039 else set()
    if 'inputs' in d039:
        comp = re.search(r'<html\b[^>]*\bdata-d039-component="router"', doc, re.I)
        nonradio = re.findall(r'<input\b(?![^>]*type="radio")[^>]*>', doc, re.I)
        r('R1 no forms (D-039: router radios only)', bool(comp) and not nonradio and not re.search(r'<(form|select|textarea)\b|type="submit"', doc, re.I), '' if comp else 'inputs declared without data-d039-component="router"')
    else:
        r('R1 no forms', not re.search(r'<(form|input|select|textarea)\b|type="submit"', doc, re.I))
    scripts = re.findall(r'<script\b[^>]*>', doc, re.I)
    if 'script' in d039:
        inline = re.findall(r'<script\b(?![^>]*\bsrc=)(?![^>]*ld\+json)[^>]*>(.*?)</script>', doc, re.I|re.S)
        r('R2 one JSON-LD script plus one declared inline script of at most 2 KB (D-039)', len(scripts)==2 and any('ld+json' in t for t in scripts) and len(inline)==1 and len(inline[0].encode('utf-8'))<=2048, f'{len(scripts)} script tags, inline bytes {sum(len(x.encode("utf-8")) for x in inline)}')
    else:
        r('R2 one JSON-LD script only', len(scripts)==1 and 'ld+json' in scripts[0], f'{len(scripts)} script tags')
    rat_text = open(rat, encoding='utf-8').read() if os.path.exists(rat) else ''
    r('R20 D-039 declaration valid and named in the rationale', (not d039) or (d039 <= {'script','inputs'} and 'D-039' in rat_text), f'tokens {sorted(d039)}; rationale names D-039: {"D-039" in rat_text}' if d039 else '')
    hosts = set(re.findall(r'https?://([^/"\')\s]+)', doc+style))
    bad = sorted(h for h in hosts if h not in ALLOWED_HOSTS)
    r('R3 external hosts', not bad, ', '.join(bad))
    srcs = re.findall(r'<img[^>]+src="([^"]+)"', doc, re.I) + re.findall(r'url\((["\']?)([^)"\']+)\1\)', style)
    srcs = [s if isinstance(s,str) else s[1] for s in srcs]
    badsrc = [s for s in srcs if not (s.startswith('../shared/') or s.startswith('/assets/'))]
    r('R3b local assets only', not badsrc, ', '.join(badsrc[:5]))
    ph = re.findall(r'lorem|\bTBD\b|placeholder|\bTODO\b|\bXXX\b|\[[^\]]{2,40}\]', text, re.I)
    r('R4 no placeholder text', not ph, ', '.join(sorted(set(ph))[:6]))
    nums = re.findall(r'\d[\d,]*', text)
    badn = sorted(set(n for n in nums if n not in ALLOWED_NUMS))
    r('R5 numbers on the whitelist', not badn, ', '.join(badn))
    r('R6 no "advisor" in text', not re.search(r'advis', text, re.I))
    r('R7 full names', text.count('Georgetown Campus')>=2 and text.count('GT Anywhere')>=2, f"Georgetown Campus x{text.count('Georgetown Campus')}, GT Anywhere x{text.count('GT Anywhere')}")
    title = re.search(r'<title>(.*?)</title>', doc, re.S|re.I)
    r('R8 title', bool(title) and 'GT School' in title.group(1) and 'selective school for gifted children' in title.group(1), title.group(1)[:80] if title else 'none')
    r('R8 robots noindex', bool(re.search(r'<meta[^>]+name="robots"[^>]+noindex', doc, re.I)))
    r('R8 canonical', 'href="https://gt.school/"' in doc)
    r('R8 description', bool(re.search(r'<meta[^>]+name="description"', doc, re.I)))
    r('R8 open graph', 'property="og:title"' in doc)
    ld = re.search(r'<script[^>]*ld\+json[^>]*>(.*?)</script>', doc, re.S|re.I)
    ldt = ld.group(1) if ld else ''
    r('R8 JSON-LD organization', 'EducationalOrganization' in ldt and 'subOrganization' in ldt, '')
    r('R8 JSON-LD no claims', not re.search(r'accredit|faster|SAT|percent', ldt, re.I))
    r('R9 lang', bool(re.search(r'<html[^>]+lang="en"', doc, re.I)))
    r('R9 one h1', len(re.findall(r'<h1\b', doc, re.I))==1, f"{len(re.findall(r'<h1\b', doc, re.I))} h1")
    r('R9 skip link', bool(re.search(r'<a[^>]+href="#main[^"]*"', doc, re.I)) and bool(re.search(r'<main[^>]+id="main', doc, re.I)))
    r('R9 landmarks', all(re.search(rf'<{t}\b', doc, re.I) for t in ['header','nav','main','footer']))
    imgs = re.findall(r'<img\b[^>]*>', doc, re.I)
    r('R9 alt on every image', all(re.search(r'\balt=', i) for i in imgs), f'{len(imgs)} images')
    r('R9 table caption and scope', '<caption' in doc and 'scope="col"' in doc)
    r('R9 focus-visible styled', ':focus-visible' in style and '--color-focus' in style)
    trans = re.findall(r'transition\s*:\s*([^;]+);', style)
    badt = []
    for t in trans:
        for part in t.split(','):
            prop = part.strip().split()[0]
            if prop not in MOTION_OK and prop != 'none': badt.append(prop)
            if 'var(--duration-' not in part and prop != 'none': badt.append(f'{prop}:no-token-duration')
    r('R10 transitions within budget', not badt, ', '.join(sorted(set(badt)))[:160])
    r('R10 no keyframe animation', not re.search(r'@keyframes|\banimation\s*:(?!\s*none\b)', style))
    rm = style[style.find('prefers-reduced-motion'):] if 'prefers-reduced-motion' in style else ''
    r('R10 reduced-motion block covers pseudo-elements', 'prefers-reduced-motion' in style and ('::after' in rm or '::before' in rm))
    hexes = sorted(set(re.findall(r'#[0-9a-fA-F]{3,8}\b', style)))
    r('R11 raw colors declared', not hexes or (os.path.exists(rat) and 'Departures' in open(rat).read()), f"{len(hexes)} raw hex in styles.css: {' '.join(hexes[:8])}")
    counts = {e: len(re.findall(rf'data-event="{e}"', doc)) for e in EVENTS}
    missing = [f'{e} {c}/{n}' for e,n in EVENTS.items() if (c:=counts[e]) < n]
    r('R12 data-event coverage', not missing, ', '.join(missing))
    dims = [i for i in imgs if not (re.search(r'\bwidth=', i) and re.search(r'\bheight=', i))]
    r('R13 image dimensions', not dims, f'{len(dims)} without width/height')
    eager = [i for i in imgs if 'loading="lazy"' not in i and '.svg' not in i]
    r('R13 at most two eager photos (the first screen); svg logos exempt', len(eager) <= 2, f'{len(eager)} eager')
    for s in set(x for x in srcs if x.startswith('../shared/')):
        if not os.path.exists(os.path.normpath(os.path.join(folder, s))): r('R13 asset exists', False, s)
    r('R17 no unscoped application link', not re.search(r'href="https://apply\.gt\.school/?"', doc), 'apply.gt.school link without school=')
    r('R18 provenance line once', text.count('The gifted school in the Alpha School network') == 1, f"{text.count('The gifted school in the Alpha School network')} occurrences")
    r('R19 compare anchor before the table', 'href="#compare"' in doc and doc.find('href="#compare"') < doc.find('<table'))
    r('R16 real logos in header and footer', 'gt-school-logo-h.svg' in doc and 'gt-anywhere-logo-h.svg' in doc, 'GT School and GT Anywhere logo SVGs required')
    size = os.path.getsize(idx) + (os.path.getsize(css) if os.path.exists(css) else 0)
    r('R14 size under 1 MB', size < 1_000_000, f'{size//1024} KB')
    if os.path.exists(rat):
        rt = open(rat, encoding='utf-8').read(); miss = [s for s in RATIONALE_SECTIONS if s.lower() not in rt.lower()]
        r('R15 rationale sections', not miss, ', '.join(miss))
    else: r('R15 rationale exists', False)
    return res

folders = [a for a in sys.argv[1:] if not a.startswith('--')] or sorted(glob.glob(os.path.join(REPO, '0_plan', 'mockups', 'M*')))
fails = 0
for f in folders:
    res = check(f); nf = sum(1 for _,s,_ in res if s=='FAIL'); fails += nf
    print(f'\n## {os.path.basename(f)}: {len(res)-nf} pass, {nf} fail')
    for rule, st, det in res:
        if st=='FAIL' or '--all' in sys.argv: print(f'  {st} {rule}' + (f' — {det}' if det else ''))
print(f'\ncheck-mocks: {"OK" if fails==0 else f"FAIL ({fails})"}')
sys.exit(1 if fails else 0)
