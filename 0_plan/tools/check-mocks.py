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

ATTR_RE = re.compile(r'\s+([^\s"\'=<>`/]+)(?:\s*=\s*(?:"([^"]*)"|\'([^\']*)\'|([^\s"\'=<>`]+)))?')

def attrs(tag):
    """all attributes of one tag as {lowercase name: value}; the tag is tokenized left to right so a quoted value is
    consumed whole and never rescanned (a value containing type=radio cannot impersonate a type attribute); a boolean
    attribute (bare name) maps to ''"""
    m = re.match(r'<\s*[^\s/>]+', tag)
    body = tag[m.end():] if m else tag
    out = {}
    for a in ATTR_RE.finditer(body):
        name = a.group(1).lower()
        val = a.group(2) if a.group(2) is not None else (a.group(3) if a.group(3) is not None else a.group(4))
        out.setdefault(name, '' if val is None else H.unescape(val))  # character references decoded, so sub&#109;it is submit
    return out

def attr(tag, name):
    """value of one attribute, '' for a bare boolean attribute, None if absent"""
    return attrs(tag).get(name.lower())

def tags(doc, name):
    """every start tag <name ...> in document order, each returned whole; the scan honours quotes, so a > inside a
    quoted attribute value does not end the tag. Returns (tag_text, end_index) pairs."""
    out = []; i = 0; low = doc.lower(); pat = '<' + name.lower()
    while True:
        i = low.find(pat, i)
        if i < 0: break
        j = i + len(pat)
        if j < len(doc) and (doc[j].isalnum() or doc[j] in '-_'): i = j; continue
        q = None
        while j < len(doc):
            ch = doc[j]
            if q: 
                if ch == q: q = None
            elif ch in '"\'': q = ch
            elif ch == '>': break
            j += 1
        out.append((doc[i:j+1], j+1)); i = j + 1
    return out

RAW_TEXT = ('script', 'style', 'title')  # elements whose content is text, never markup (HTML raw-text and RCDATA elements a mock may contain)

def walk(doc):
    """One sequential pass over the document in source order. Yields ('comment', text) for each HTML comment,
    ('raw', name, start_tag, body) for each script, style or title element, and ('other', text) for everything between.
    Because the pass is sequential, a comment marker inside a raw-text body is text, a tag-like string inside a comment
    or a style sheet is text, and a script inside a comment is comment text: none can be mistaken for an element."""
    i = 0; n = len(doc); low = doc.lower()
    while i < n:
        cands = []
        c = doc.find('<!--', i)
        if c >= 0: cands.append((c, 'comment'))
        for name in RAW_TEXT:
            k = low.find('<' + name, i)
            while k >= 0 and k + 1 + len(name) < n and (doc[k + 1 + len(name)].isalnum() or doc[k + 1 + len(name)] in '-_'):
                k = low.find('<' + name, k + 1 + len(name))
            if k >= 0: cands.append((k, name))
        if not cands:
            yield ('other', doc[i:]); return
        j, kind = min(cands)
        if j > i: yield ('other', doc[i:j])
        if kind == 'comment':
            e = doc.find('-->', j + 4); e = n if e < 0 else e + 3
            yield ('comment', doc[j:e]); i = e
        else:
            k = j + 1 + len(kind); q = None
            while k < n:
                ch = doc[k]
                if q:
                    if ch == q: q = None
                elif ch in '"\'': q = ch
                elif ch == '>': break
                k += 1
            tag_end = k + 1
            m = re.compile(r'</' + kind + r'(?=[\s/>])', re.I).search(doc, tag_end)
            body_end = m.start() if m else n
            if m:
                gt = doc.find('>', m.end()); close_end = gt + 1 if gt >= 0 else n
            else: close_end = n
            yield ('raw', kind, doc[j:tag_end], doc[tag_end:body_end]); i = close_end

def script_blocks(doc):
    """(start_tag, body) for every script element that is not inside an HTML comment"""
    return [(item[2], item[3]) for item in walk(doc) if item[0] == 'raw' and item[1] == 'script']

def cleaned(doc):
    """the document with HTML comments removed and raw-text bodies (script, style, title) removed, start tags kept,
    for the element scans"""
    out = []
    for item in walk(doc):
        if item[0] == 'other': out.append(item[1])
        elif item[0] == 'raw': out.append(item[2] + '</' + item[1] + '>')
        else: out.append(' ')
    return ''.join(out)

from html.parser import HTMLParser

class _Elements(HTMLParser):
    """Element inventory by the standard-library HTML parser: start tags with decoded attributes, script bodies, the
    title text. The parser applies the HTML tokenizer's own rules for quoting, comments, raw-text elements and character
    references, so tag-like text inside attributes, comments, scripts, styles or the title is never an element."""
    def __init__(self):
        super().__init__(convert_charrefs=True); self.tags = []; self.scripts = []; self.title = None; self._in = None; self._buf = []; self._cur = None
    def handle_starttag(self, tag, attrs):
        d = {}
        for k, v in attrs: d.setdefault(k.lower(), '' if v is None else v)
        self.tags.append((tag.lower(), d))
        if tag.lower() == 'script': self._in = 'script'; self._buf = []; self._cur = d
        elif tag.lower() == 'title': self._in = 'title'; self._buf = []
    def handle_startendtag(self, tag, attrs): self.handle_starttag(tag, attrs)
    def handle_endtag(self, tag):
        if tag.lower() == 'script' and self._in == 'script': self.scripts.append((self._cur, ''.join(self._buf))); self._in = None
        elif tag.lower() == 'title' and self._in == 'title': self.title = ''.join(self._buf); self._in = None
    def handle_data(self, data):
        if self._in: self._buf.append(data)

def elements(doc):
    e = _Elements(); e.feed(doc); e.close()
    if e._in == 'script': e.scripts.append((e._cur, ''.join(e._buf)))
    return e

def check(folder):
    idx = os.path.join(folder, 'index.html'); css = os.path.join(folder, 'styles.css'); rat = os.path.join(folder, 'RATIONALE.md')
    if not os.path.exists(idx): return [('files','FAIL','index.html missing')]
    doc = open(idx, encoding='utf-8').read(); style = open(css, encoding='utf-8').read() if os.path.exists(css) else ''
    rat_text = open(rat, encoding='utf-8').read() if os.path.exists(rat) else ''
    return check_doc(doc, style, rat_text, folder)

def check_doc(doc, style, rat_text, folder='(memory)'):
    el = elements(doc)  # standard-library parse: elements, decoded attributes, script bodies, title text
    blocks = el.scripts  # (attrs, body) per script element, comments excluded by the tokenizer
    title_text = el.title
    doc = cleaned(doc)  # for the text-based rules below: comments and raw-text bodies removed by the sequential walk
    res = []
    def r(rule, ok, detail=''):
        res.append((rule, 'PASS' if ok else 'FAIL', detail))
    rat = os.path.join(folder, 'RATIONALE.md')
    text = visible_text(doc)
    html_el = next((a for t, a in el.tags if t == 'html'), {}); _decl = html_el.get('data-d039')
    d039m = _decl is not None; d039 = set(_decl.split()) if d039m else set(); d039_empty = d039m and not d039
    if 'inputs' in d039:
        comp = (html_el.get('data-d039-component') or '').lower() == 'router'
        inputs = [a for t, a in el.tags if t == 'input']
        nonradio = [a for a in inputs if (a.get('type') or 'text').lower() != 'radio']
        submit = any((a.get('type') or '').lower() == 'submit' for t, a in el.tags if t in ('input', 'button'))
        r('R1 no forms (D-039: router radios only)', comp and not nonradio and not submit and not any(t in ('form', 'select', 'textarea') for t, _ in el.tags), '' if comp else 'inputs declared without data-d039-component="router"')
    else:
        r('R1 no forms', not any(t in ('form', 'input', 'select', 'textarea') for t, _ in el.tags) and not any((a.get('type') or '').lower() == 'submit' for t, a in el.tags if t == 'button'))
    scripts = [a for a, _ in blocks]
    if 'script' in d039:
        external = [a for a in scripts if 'src' in a]
        ldjson = [a for a in scripts if 'ld+json' in (a.get('type') or '')]
        inline = [body for a, body in blocks if 'src' not in a and 'ld+json' not in (a.get('type') or '')]
        r('R2 one JSON-LD script plus one declared inline script of at most 2 KB (D-039)', len(scripts)==2 and not external and len(ldjson)==1 and len(inline)==1 and len(inline[0].encode('utf-8'))<=2048, f'{len(scripts)} script tags, external {len(external)}, inline bytes {sum(len(x.encode("utf-8")) for x in inline)}')
    else:
        r('R2 one JSON-LD script only', len(scripts)==1 and 'ld+json' in (scripts[0].get('type') or '') and 'src' not in scripts[0], f'{len(scripts)} script tags')
    r('R20 D-039 declaration valid and named in the rationale', (not d039m) or (bool(d039) and d039 <= {'script','inputs'} and 'D-039' in rat_text), ('empty declaration' if d039_empty else f'tokens {sorted(d039)}; rationale names D-039: {"D-039" in rat_text}') if d039m else '')
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
    r('R8 title', bool(title_text) and 'GT School' in title_text and 'selective school for gifted children' in title_text, (title_text or '')[:80])
    r('R8 robots noindex', bool(re.search(r'<meta[^>]+name="robots"[^>]+noindex', doc, re.I)))
    r('R8 canonical', 'href="https://gt.school/"' in doc)
    r('R8 description', bool(re.search(r'<meta[^>]+name="description"', doc, re.I)))
    r('R8 open graph', 'property="og:title"' in doc)
    ldt = next((b for a, b in blocks if 'ld+json' in (a.get('type') or '')), '')  # the JSON-LD body from the parse
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
    size = len(doc.encode('utf-8')) + len(style.encode('utf-8'))
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
