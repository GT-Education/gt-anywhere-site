#!/usr/bin/env python3
"""K2 typography measurements (M-01 to M-10), recreated for the Astra E4 rework.

Why this exists: the K2-typography.md measurement scripts (ttfmetrics.py,
avgwidth.py) lived only in the authoring session's scratchpad and are gone.
Astra's E4 pass could not check the numbers against a script. This file
recreates the M-01 to M-09 measurements from scratch, adds M-10 (needed to
fix a mis-cited weight comparison in section 5b), and is meant to be re-run
whenever the font files or the copy deck change.

Method note (read this before trusting a number): fontTools is NOT installed
in this environment (`python3 -c "import fontTools"` raises ModuleNotFoundError,
checked 2026-09-11). Pillow IS installed (12.1.1) and is used for every
measurement below, in place of the original file's hand-written stdlib
TrueType table parser. Pillow does not expose raw sfnt tables (no direct
hhea.lineGap, OS/2.sxHeight, OS/2.sCapHeight, or unitsPerEm accessors), so
each function below documents the Pillow call it substitutes and how that
call was checked against the table it stands in for:

  - Advance widths (M-01, M-04, M-09, M-10): `ImageFont.getlength(text)` at
    size=1000 reads the font's `hmtx` advances through FreeType's shaping
    path. This is a direct substitute for a raw hmtx parse.
  - Default line box (M-02): `ImageFont.getmetrics()` returns (ascent, descent)
    but — checked empirically against this file's own prior values below —
    that pair OMITS hhea/OS-2 lineGap for fonts that have one (confirmed on
    Arial, whose real lineGap is nonzero). The underlying C object exposes a
    third value, `font.font.height`, which DOES include lineGap: for Literata,
    Inter Tight, Inconsolata and Georgia (lineGap ~0) `height` equals
    `ascent+descent` to the pixel; for Arial (lineGap != 0) `height` is 32
    pixels larger at size 1000 (0.032 em) than `ascent+descent`, and matches
    this file's original 1.150 em figure exactly. `font.font.height` is used
    for the "default line box" measurement.
  - x-height / cap-height (M-03): no direct OS/2 sxHeight/sCapHeight accessor
    exists in Pillow. Approximated as (ascent - getbbox(glyph)[top]) / size,
    i.e. how far the ink of "x" / "H" extends below the ascender line. This
    reproduced the file's original 0.507/0.701/0.546/0.728/0.457/0.623 figures
    to 3 decimal places on first run (see output.md) for Literata and Inter
    Tight, which is the check that justifies using it for Inconsolata too.
  - Variable-font check (M-06): `get_variation_axes()` raises `OSError`
    ("invalid argument") on every static font tested; a variable font would
    return axis data instead of raising. Used as the static/variable test.
  - File size, gzip, CSS/HTML grep (M-05, M-07, M-08): standard library only,
    no font-parsing library needed either way.

Inputs are listed in inputs.md in this directory. Run from the repo root:
    python3 0_plan/kb/measurements/K2/measure.py
This regenerates 0_plan/kb/measurements/K2/output.md.
"""
import gzip
import os
import re
import sys

from PIL import ImageFont

REPO_ROOT = os.getcwd()  # must be run from the repo root, per the rework pack
FONT_DIR = "assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654"

REPO_FONTS = {
    "Literata Regular":        f"{FONT_DIR}/697d4c84f94a275884380d4b_Literata-Regular.ttf",
    "Literata Bold":           f"{FONT_DIR}/697d4c8455e9e4f5d6285309_Literata-Bold.ttf",
    "Inter Tight Regular":     f"{FONT_DIR}/697d4cc3f1703d267d101d6b_InterTight-Regular.ttf",
    "Inconsolata Regular":     f"{FONT_DIR}/69810d2dbb54029a4c691dba_Inconsolata-Regular.ttf",
}

# macOS system fallback fonts — NOT part of the repo. Same paths the original
# file's Method column named for M-02/M-09. OS-dependent by nature (F-46);
# re-running this script on a different machine may give different fallback
# numbers, which is itself a finding, not a bug.
SYSTEM_FONTS = {
    "Georgia":     "/System/Library/Fonts/Supplemental/Georgia.ttf",
    "Arial":       "/System/Library/Fonts/Supplemental/Arial.ttf",
    "Courier New": "/System/Library/Fonts/Supplemental/Courier New.ttf",
}

ALL_TTFS = {**REPO_FONTS, **SYSTEM_FONTS}

# --- Sample text for advance-width measurements (M-01, M-04, M-09, M-10) ---
# The original file's sample ("the umbrella sentence, both door lines and the
# full alphabet") is not recoverable at its stated length (177 characters):
# summing the current umbrella sentence (132 chars) + door 1 line (115) +
# door 2 line (108) alone already exceeds 177, and the file's own section 5b
# independently confirms those three character counts against the same copy
# deck. So this script rebuilds the sample from the current, decided copy
# (0_plan/mockups/shared/copy.md, G0.5 umbrella sentence + Door 1/2 lines)
# plus one full upper- and lower-case alphabet (52 letters, so every letter is
# exercised at least once even if absent from the prose), joined with single
# spaces. Its length is reported below, not assumed to be 177.
UMBRELLA = ("GT School is a selective school for gifted and talented children, "
            "in person at our Georgetown, Texas campus or online from anywhere.")
DOOR1 = ("Two hours of mastery academics each morning on our Georgetown, Texas "
         "campus, afternoons for workshops and building.")
DOOR2 = ("Live mastery academics with Guides from wherever you live, and four "
         "in-person weekends a year in Georgetown.")
ALPHABET = "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
SAMPLE = " ".join([UMBRELLA, DOOR1, DOOR2, ALPHABET])

SIZE = 1000  # load every font at 1000 "px" so px values read directly as em fractions


def load(path):
    full = os.path.join(REPO_ROOT, path)
    if not os.path.exists(full):
        raise FileNotFoundError(full)
    return ImageFont.truetype(full, size=SIZE)


def em(value):
    return value / SIZE


# ---------------------------------------------------------------------------
# M-01 / M-04 / M-10 — advance widths
# ---------------------------------------------------------------------------

def measure_advances():
    rows = []
    for name in ("Literata Regular", "Inter Tight Regular", "Inconsolata Regular"):
        f = load(REPO_FONTS[name])
        adv0 = em(f.getlength("0"))
        mean_adv = em(f.getlength(SAMPLE)) / len(SAMPLE)
        ratio = mean_adv / adv0
        chars_in_66ch = 66 / ratio
        rows.append((name, adv0, mean_adv, ratio, chars_in_66ch))
    return rows


def measure_bold_vs_regular():
    reg = load(REPO_FONTS["Literata Regular"])
    bold = load(REPO_FONTS["Literata Bold"])
    reg_mean = em(reg.getlength(SAMPLE)) / len(SAMPLE)
    bold_mean = em(bold.getlength(SAMPLE)) / len(SAMPLE)
    pct_wider = (bold_mean - reg_mean) / reg_mean * 100
    return reg_mean, bold_mean, pct_wider


# ---------------------------------------------------------------------------
# M-02 — default line box (ascent + descent + lineGap, as a fraction of em)
# ---------------------------------------------------------------------------

def measure_line_box():
    rows = []
    for name, path in ALL_TTFS.items():
        f = load(path)
        ascent, descent = f.getmetrics()
        height = f.font.height
        line_gap = height - (ascent + descent)
        rows.append((name, em(ascent), em(descent), em(height), em(line_gap)))
    return rows


# ---------------------------------------------------------------------------
# M-03 — x-height / cap-height as a fraction of em
# ---------------------------------------------------------------------------

def measure_xheight_capheight():
    rows = []
    for name in ("Literata Regular", "Inter Tight Regular", "Inconsolata Regular"):
        f = load(REPO_FONTS[name])
        ascent, _ = f.getmetrics()
        x_top = f.getbbox("x")[1]
        h_top = f.getbbox("H")[1]
        x_height = em(ascent - x_top)
        cap_height = em(ascent - h_top)
        rows.append((name, x_height, cap_height))
    return rows


# ---------------------------------------------------------------------------
# M-05 — repo font payload: file sizes + gzip proxy
# ---------------------------------------------------------------------------

def measure_payload():
    ttf_paths = []
    for root, _dirs, files in os.walk(os.path.join(REPO_ROOT, "assets")):
        for fn in files:
            if fn.lower().endswith(".ttf"):
                ttf_paths.append(os.path.join(root, fn))
    total_bytes = 0
    gz_bytes = 0
    by_family = {"Literata": 0, "Inter Tight": 0, "Inconsolata": 0, "other": 0}
    for p in ttf_paths:
        data = open(p, "rb").read()
        total_bytes += len(data)
        gz_bytes += len(gzip.compress(data, compresslevel=9))
        base = os.path.basename(p)
        if "Literata" in base:
            by_family["Literata"] += 1
        elif "InterTight" in base:
            by_family["Inter Tight"] += 1
        elif "Inconsolata" in base:
            by_family["Inconsolata"] += 1
        else:
            by_family["other"] += 1
    return len(ttf_paths), total_bytes, gz_bytes, by_family, ttf_paths


# ---------------------------------------------------------------------------
# M-06 — variable font check
# ---------------------------------------------------------------------------

def measure_variable(ttf_paths):
    results = []
    for p in ttf_paths:
        f = ImageFont.truetype(p, size=SIZE)
        try:
            f.get_variation_axes()
            variable = True
        except OSError:
            variable = False
        results.append((os.path.basename(p), variable))
    return results


# ---------------------------------------------------------------------------
# M-07 — @font-face / font-display / preload
# ---------------------------------------------------------------------------

def measure_font_face_css():
    css_glob = os.path.join(
        REPO_ROOT, "assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654/css"
    )
    shared_css = None
    for fn in os.listdir(css_glob):
        if fn.startswith("gt-anywhere.webflow.shared.") and fn.endswith(".css"):
            shared_css = os.path.join(css_glob, fn)
            break
    css = open(shared_css, encoding="utf-8").read()
    blocks = re.findall(r"@font-face\{([^}]*)\}", css)
    swap_count = 0
    no_display = []
    for b in blocks:
        m = re.search(r"font-family:([^;]+);", b)
        fam = m.group(1) if m else "?"
        if "font-display:swap" in b:
            swap_count += 1
        else:
            no_display.append(fam)
    index_html = open(os.path.join(REPO_ROOT, "index.html"), encoding="utf-8").read()
    preload_count = len(re.findall(r'rel="preload"', index_html))
    return shared_css, len(blocks), swap_count, no_display, preload_count


# ---------------------------------------------------------------------------
# M-08 — declared weights vs. weights used
# ---------------------------------------------------------------------------

def measure_weights(shared_css_path):
    css = open(shared_css_path, encoding="utf-8").read()
    blocks = re.findall(r"@font-face\{([^}]*)\}", css)
    declared = {}
    for b in blocks:
        fam = re.search(r"font-family:([^;]+);", b)
        wt = re.search(r"font-weight:([^;]+);", b)
        if fam and wt:
            declared.setdefault(fam.group(1), set()).add(wt.group(1))

    mockups_dir = os.path.join(REPO_ROOT, "0_plan/mockups")
    weight_uses = {}
    for root, dirs, files in os.walk(mockups_dir):
        dirs[:] = [d for d in dirs if d != "shared"] if root == mockups_dir else dirs
        for fn in files:
            full = os.path.join(root, fn)
            try:
                text = open(full, encoding="utf-8").read()
            except (UnicodeDecodeError, OSError):
                continue
            for m in re.findall(r"font-weight:\s?([0-9]{3})", text):
                weight_uses[m] = weight_uses.get(m, 0) + 1
    return declared, weight_uses


# ---------------------------------------------------------------------------
# M-09 — fallback metric overrides (size-adjust, ascent/descent/line-gap-override)
# Formula confirmed by reproducing the file's own prior Literata-over-Georgia
# figures exactly from M-01/M-02-shaped inputs before trusting it here:
#   size-adjust        = webfont_mean_advance / fallback_mean_advance
#   ascent-override     = webfont_ascent_em    / size-adjust
#   descent-override    = webfont_descent_em   / size-adjust
#   line-gap-override   = webfont_lineGap_em   / size-adjust
# (all expressed as percentages). Source: Stefanov 2024-12-31 (F-46), matched
# against this file's own 107.67 / 109.32 / 28.61 / 0 (Literata-over-Georgia)
# to 2 decimal places using the file's own prior mean-advance figures.
# ---------------------------------------------------------------------------

def measure_fallback_overrides():
    pairs = [
        ("Literata Regular", "Georgia", "Literata Fallback"),
        ("Inter Tight Regular", "Arial", "Inter Tight Fallback"),
        ("Inconsolata Regular", "Courier New", "Inconsolata Fallback"),
    ]
    rows = []
    for web_name, fallback_name, label in pairs:
        web = load(ALL_TTFS[web_name])
        fb = load(ALL_TTFS[fallback_name])
        web_mean = em(web.getlength(SAMPLE)) / len(SAMPLE)
        fb_mean = em(fb.getlength(SAMPLE)) / len(SAMPLE)
        size_adjust = web_mean / fb_mean

        w_asc, w_desc = web.getmetrics()
        w_height = web.font.height
        w_asc_em, w_desc_em = em(w_asc), em(w_desc)
        w_gap_em = em(w_height) - (w_asc_em + w_desc_em)

        ascent_override = w_asc_em / size_adjust * 100
        descent_override = w_desc_em / size_adjust * 100
        linegap_override = w_gap_em / size_adjust * 100
        rows.append((label, web_name, fallback_name, size_adjust * 100,
                     ascent_override, descent_override, linegap_override))
    return rows


# ---------------------------------------------------------------------------
# Main — run everything, print + write output.md
# ---------------------------------------------------------------------------

def main():
    out = []
    out.append("# K2 measurement output (re-run of M-01 to M-10)\n")
    out.append(f"Generated by `measure.py`. Sample text length: **{len(SAMPLE)} characters** "
                f"(umbrella sentence + door 1 line + door 2 line + full alphabet, single-space "
                f"joined). fontTools: not installed. Pillow: {__import__('PIL').__version__}.\n")

    out.append("\n## M-01 — advance of \"0\" vs. mean advance over the sample\n")
    out.append("| Face | adv(\"0\") em | mean advance em | ratio (mean/adv0) | chars in 66ch |")
    out.append("|---|---|---|---|---|")
    for name, adv0, mean_adv, ratio, chars66 in measure_advances():
        out.append(f"| {name} | {adv0:.4f} | {mean_adv:.5f} | {ratio:.3f} | {chars66:.0f} |")

    reg_mean, bold_mean, pct_wider = measure_bold_vs_regular()
    out.append("\n## M-10 (new) — Literata Regular vs Bold, mean advance over the sample\n")
    out.append("| Weight | mean advance em | vs. Regular |")
    out.append("|---|---|---|")
    out.append(f"| Literata Regular | {reg_mean:.5f} | — |")
    out.append(f"| Literata Bold (700) | {bold_mean:.5f} | {pct_wider:+.2f}% |")

    out.append("\n## M-02 — default line box (ascent + descent + lineGap), em\n")
    out.append("| Face | ascent | descent | line box (font.height) | lineGap |")
    out.append("|---|---|---|---|---|")
    for name, a, d, h, g in measure_line_box():
        out.append(f"| {name} | {a:.4f} | {d:.4f} | {h:.4f} | {g:+.4f} |")

    out.append("\n## M-03 — x-height / cap-height as a fraction of em\n")
    out.append("| Face | x-height | cap-height |")
    out.append("|---|---|---|")
    for name, x, c in measure_xheight_capheight():
        out.append(f"| {name} | {x:.3f} | {c:.3f} |")

    n_ttf, total_bytes, gz_bytes, by_family, ttf_paths = measure_payload()
    out.append("\n## M-05 — repo font payload\n")
    out.append(f"- TTF files found under `assets/`: **{n_ttf}**, totalling "
                f"**{total_bytes:,} bytes** ({total_bytes/1024/1024:.2f} MB)")
    out.append(f"- gzip -9 of the concatenated bytes proxy: **{gz_bytes:,} bytes** "
                f"({gz_bytes/total_bytes*100:.1f}% of original)")
    out.append(f"- By family: {dict(by_family)}")

    out.append("\n## M-06 — variable font check (get_variation_axes)\n")
    out.append("| File | Variable? |")
    out.append("|---|---|")
    any_variable = False
    for fn, variable in measure_variable(ttf_paths):
        if variable:
            any_variable = True
        out.append(f"| {fn} | {'YES' if variable else 'no (static)'} |")
    out.append(f"\nAny variable font found: **{any_variable}**")

    shared_css, n_blocks, swap_count, no_display, preload_count = measure_font_face_css()
    out.append("\n## M-07 — @font-face / font-display / preload\n")
    out.append(f"- CSS file: `{os.path.relpath(shared_css, REPO_ROOT)}`")
    out.append(f"- Total `@font-face` blocks: **{n_blocks}**")
    out.append(f"- Blocks declaring `font-display:swap`: **{swap_count}**")
    out.append(f"- Blocks NOT declaring font-display: {no_display}")
    out.append(f"- `rel=\"preload\"` links in `index.html`: **{preload_count}**")

    declared, weight_uses = measure_weights(shared_css)
    out.append("\n## M-08 — declared weights vs. weights used\n")
    out.append("| Family (as declared) | Declared weights |")
    out.append("|---|---|")
    for fam, weights in declared.items():
        out.append(f"| {fam} | {', '.join(sorted(weights, key=int))} |")
    out.append("\n| font-weight used in mockups | occurrences |")
    out.append("|---|---|")
    for wt, count in sorted(weight_uses.items()):
        out.append(f"| {wt} | {count} |")

    out.append("\n## M-09 — fallback metric overrides\n")
    out.append("| Fallback block | Web font | Fallback | size-adjust | ascent-override | descent-override | line-gap-override |")
    out.append("|---|---|---|---|---|---|---|")
    for label, web_name, fb_name, sa, ao, do, lo in measure_fallback_overrides():
        out.append(f"| {label} | {web_name} | {fb_name} | {sa:.2f}% | {ao:.2f}% | {do:.2f}% | {lo:.2f}% |")

    text = "\n".join(out) + "\n"
    out_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "output.md")
    with open(out_path, "w", encoding="utf-8") as fh:
        fh.write(text)
    print(text)
    print(f"\nWrote {out_path}", file=sys.stderr)


if __name__ == "__main__":
    main()
