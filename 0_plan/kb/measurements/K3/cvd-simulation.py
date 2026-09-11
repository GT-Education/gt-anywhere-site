#!/usr/bin/env python3
"""K3 color-vision-deficiency simulation and contrast recheck, for the Astra E4 rework.

Why this exists: K3-color-accessibility.md section 5b asserted, without a simulation,
that for the two school tints "the warm/cool split is precisely the axis that collapses"
under red-green color blindness. Astra's E4 pass flagged this as unmeasured. This script
computes it: it simulates protanopia, deuteranopia and tritanopia on the tokens the file
already discusses and reports simulated hex values plus WCAG contrast ratios so the
finding can say what the numbers actually show, rather than what the general prevalence
literature (F40, F42) implies by analogy.

Method:
- Swatches are read live from 0_plan/mockups/shared/tokens.css (regex on `--color-*: #hex`),
  not retyped by hand, so the table below always matches the current tokens file.
- CVD matrices: the severity-1.0 (complete dichromacy) protanopia, deuteranopia and
  tritanopia matrices published in Machado, Oliveira and Fernandes, "A Physiologically-
  Based Model for Simulation of Color Vision Deficiency," IEEE TVCG 15(6), 2009, table 1.
  Coefficients verified 2026-09-11 by fetching Oliveira's own hosted copy of that table:
  http://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html
  (Oliveira is the paper's second author, so this is the primary-source table, not a
  third-party reproduction; the same nine coefficients also appear in most open-source
  CVD simulators, which is a second, independent cross-check on the values).
- Pipeline per swatch: 8-bit sRGB hex -> [0,1] -> linearize -> multiply by the 3x3 matrix
  (linear-RGB space, per the paper) -> clip to [0,1] -> re-encode to sRGB -> round to
  8-bit hex. "Normal" vision is the identity transform (the swatch's own value, unchanged),
  included as the baseline column.
- Linearization/re-encoding and the WCAG contrast formula reuse the exact W3C piecewise
  transfer function this cluster's file already uses at F5/F6 (threshold 0.03928, not the
  technically-correct 0.04045 IEC value the W3C wiki itself flags as insignificant at 8-bit
  color), so the "Normal" column below is directly comparable to, and checked against, the
  numbers already published in K3-color-accessibility.md section 5.
- Self-check: three ratios already published in section 5b (accent-on-bg 2.38, the two
  tints 1.01, text-on-bg 17.69) are recomputed here under "Normal" vision before anything
  else runs; a mismatch beyond +/-0.01 raises an error rather than silently printing
  different numbers next to the file's own arithmetic.
- A second, plainly labelled number (deltaSRGB) accompanies every contrast ratio: the
  Euclidean distance between the pair's two simulated colors in 8-bit sRGB space (each
  channel 0-255, so the maximum possible distance is about 441.7). WCAG contrast is a
  relative-luminance ratio, and Machado's matrices are built to hold luminance roughly
  constant across vision types by design, so a contrast ratio alone cannot show a hue-only
  collapse. deltaSRGB is NOT a calibrated perceptual difference (it is not CIE deltaE, and
  sRGB is not a perceptually uniform space) - it is reported only as a plain, reproducible
  number to show whether a pair's simulated colors move closer together or farther apart
  under each simulated vision, which is what "the axis that collapses" is actually a claim
  about.
- Limitation: severity 1.0 models complete dichromacy, the least common and most severe
  case on the spectrum; most colorblind readers are anomalous trichromats (partial loss).
  Complete dichromacy is used here because it is the source paper's standard reference
  point and a worst-case bound for the affected axis, not a claim about the typical
  colorblind reader's experience.

Run from the repo root:
    python3 0_plan/kb/measurements/K3/cvd-simulation.py
This regenerates 0_plan/kb/measurements/K3/cvd-simulation.md.
"""
import os
import re
import sys

import numpy as np

REPO_ROOT = os.getcwd()  # must be run from the repo root, per the rework pack
TOKENS_PATH = "0_plan/mockups/shared/tokens.css"

# --- Machado, Oliveira and Fernandes 2009, severity 1.0 (complete dichromacy) ---
# Verified against http://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html, 2026-09-11.
# Applied to LINEAR RGB (see module docstring).
MATRICES = {
    "Protanopia": np.array([
        [0.152286,  1.052583, -0.204868],
        [0.114503,  0.786281,  0.099216],
        [-0.003882, -0.048116,  1.051998],
    ]),
    "Deuteranopia": np.array([
        [0.367322,  0.860646, -0.227968],
        [0.280085,  0.672501,  0.047413],
        [-0.011820,  0.042940,  0.968881],
    ]),
    "Tritanopia": np.array([
        [1.255528, -0.076749, -0.178779],
        [-0.078411,  0.930809,  0.147602],
        [0.004733,  0.691367,  0.303900],
    ]),
}
VISION_ORDER = ["Normal", "Protanopia", "Deuteranopia", "Tritanopia"]


# --- sRGB <-> linear, WCAG relative luminance and contrast: the same W3C formula this
# cluster's file already uses at F5/F6 (threshold 0.03928; see module docstring). ---
def srgb_to_linear(c):
    return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4


_INV_THRESH = 0.03928 / 12.92  # the same breakpoint, expressed in linear terms


def linear_to_srgb(c):
    return c * 12.92 if c <= _INV_THRESH else 1.055 * (c ** (1 / 2.4)) - 0.055


def hex_to_rgb01(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i + 2], 16) / 255.0 for i in (0, 2, 4))


def rgb01_to_hex(rgb):
    clamped = [min(max(c, 0.0), 1.0) for c in rgb]
    return '#' + ''.join(f'{round(c * 255):02x}' for c in clamped)


def relative_luminance(rgb01):
    r, g, b = (srgb_to_linear(c) for c in rgb01)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast_ratio(rgb_a, rgb_b):
    la, lb = relative_luminance(rgb_a), relative_luminance(rgb_b)
    lighter, darker = max(la, lb), min(la, lb)
    return (lighter + 0.05) / (darker + 0.05)


def simulate(rgb01, matrix):
    lin = np.array([srgb_to_linear(c) for c in rgb01])
    sim_lin = matrix @ lin
    sim_lin = np.clip(sim_lin, 0.0, 1.0)
    return tuple(linear_to_srgb(c) for c in sim_lin)


def apply_vision(rgb01, vision):
    if vision == "Normal":
        return rgb01  # identity: the swatch's own value, no round-trip noise
    return simulate(rgb01, MATRICES[vision])


# --- Load swatches straight from tokens.css ---
def load_tokens():
    path = os.path.join(REPO_ROOT, TOKENS_PATH)
    text = open(path, encoding='utf-8').read()
    return dict(re.findall(r'(--color-[\w-]+)\s*:\s*(#[0-9a-fA-F]{6})\b', text))


SWATCH_DEFS = [
    ("Page surface (bg)", "--color-bg"),
    ("Georgetown tint (= surface)", "--color-georgetown-tint"),
    ("Anywhere tint", "--color-anywhere-tint"),
    ("Navy", "--color-navy"),
    ("Accent (gold / orange)", "--color-accent"),
    ("Body text", "--color-text"),
]

# The three pair categories the file discusses (section 5b).
PAIRS = [
    ("Tint vs surface", "Georgetown tint (= surface)", "Page surface (bg)", "non-text"),
    ("Tint vs surface", "Anywhere tint", "Page surface (bg)", "non-text"),
    ("Tint vs tint", "Georgetown tint (= surface)", "Anywhere tint", "non-text"),
    ("Text vs tint", "Body text", "Georgetown tint (= surface)", "text"),
    ("Text vs tint", "Body text", "Anywhere tint", "text"),
]


def verdict(ratio, kind):
    if kind == "non-text":
        return "pass" if ratio >= 3.0 else "fail (<3.0)"
    aa = "AA pass" if ratio >= 4.5 else "AA fail"
    aaa = "AAA pass" if ratio >= 7.0 else "AAA fail"
    return f"{aa}, {aaa}"


def rgb_channels_from_hex(h):
    return np.array([int(h[i:i + 2], 16) for i in (1, 3, 5)], dtype=float)


def main():
    tokens = load_tokens()
    required = [key for _, key in SWATCH_DEFS] + ["--color-surface"]
    missing = [key for key in required if key not in tokens]
    if missing:
        raise SystemExit(f"tokens.css is missing expected custom properties: {missing}")
    if tokens["--color-surface"] != tokens["--color-georgetown-tint"]:
        print(f"NOTE: --color-surface ({tokens['--color-surface']}) no longer equals "
              f"--color-georgetown-tint ({tokens['--color-georgetown-tint']}); OQ-3 in the "
              f"KB file may need revisiting.", file=sys.stderr)

    swatches = {label: tokens[key] for label, key in SWATCH_DEFS}

    # Self-check against numbers already published in section 5b, Normal vision only.
    checks = [
        ("Accent (gold / orange)", "Page surface (bg)", 2.38),
        ("Georgetown tint (= surface)", "Anywhere tint", 1.01),
        ("Body text", "Page surface (bg)", 17.69),
    ]
    for a, b, expected in checks:
        got = contrast_ratio(hex_to_rgb01(swatches[a]), hex_to_rgb01(swatches[b]))
        if abs(got - expected) > 0.01:
            raise SystemExit(
                f"Self-check failed: {a} vs {b} = {got:.2f}, expected {expected:.2f} "
                f"(K3-color-accessibility.md section 5b). Fix the formula before trusting "
                f"the CVD numbers below.")

    out = []
    out.append("# K3 color-vision-deficiency simulation and contrast recheck\n")
    out.append(
        f"Generated by `cvd-simulation.py`. Swatches read live from `{TOKENS_PATH}`. "
        f"Self-check against section 5b's published Normal-vision ratios (accent-on-bg "
        f"2.38, the two tints 1.01, text-on-bg 17.69): **all three matched within +/-0.01.** "
        f"Machado, Oliveira and Fernandes 2009 severity-1.0 matrices; sRGB<->linear via the "
        f"same W3C piecewise formula as K3 F5/F6."
    )

    # Table 1: simulated hex per swatch per vision condition
    out.append("\n## Simulated hex per swatch\n")
    ncols = 2 + len(VISION_ORDER)
    out.append("| Swatch | Token | " + " | ".join(VISION_ORDER) + " |")
    out.append("|" + "|".join(["---"] * ncols) + "|")
    sim_hex = {}
    for label, key in SWATCH_DEFS:
        rgb01 = hex_to_rgb01(swatches[label])
        row = [label, f"`{key}`"]
        for vision in VISION_ORDER:
            h = rgb01_to_hex(apply_vision(rgb01, vision))
            sim_hex[(label, vision)] = h
            row.append(h)
        out.append("| " + " | ".join(row) + " |")

    # Table 2: WCAG contrast ratio per pair per vision condition
    out.append("\n## WCAG contrast ratio per pair, per simulated vision\n")
    out.append(
        "Non-text pairs are verdicted against the 1.4.11 minimum (>=3.0); text pairs against "
        "1.4.3 AA (>=4.5) and 1.4.6 AAA (>=7.0) normal-text thresholds, matching section "
        "5b/5c's own thresholds.\n"
    )
    ncols = 3 + len(VISION_ORDER)
    out.append("| Pair category | A | B | " + " | ".join(VISION_ORDER) + " |")
    out.append("|" + "|".join(["---"] * ncols) + "|")
    ratio_cache = {}
    for category, a_label, b_label, kind in PAIRS:
        row = [category, a_label, b_label]
        for vision in VISION_ORDER:
            ratio = contrast_ratio(hex_to_rgb01(sim_hex[(a_label, vision)]),
                                    hex_to_rgb01(sim_hex[(b_label, vision)]))
            ratio_cache[(a_label, b_label, vision)] = ratio
            row.append(f"{ratio:.2f} {verdict(ratio, kind)}")
        out.append("| " + " | ".join(row) + " |")

    # Table 3: supplementary deltaSRGB per pair per vision condition
    out.append("\n## Supplementary: deltaSRGB per pair, per simulated vision\n")
    out.append(
        "Euclidean distance between the pair's two SIMULATED colors in 8-bit sRGB space "
        "(per channel 0-255; maximum possible distance is about 441.7). Not a WCAG measure "
        "and not a calibrated perceptual difference (sRGB is not perceptually uniform) - "
        "reported only to show whether the pair's colors move closer together or farther "
        "apart under each simulated vision, since contrast ratio alone is a luminance "
        "measure and these matrices hold luminance roughly constant by design.\n"
    )
    out.append("| Pair category | A | B | " + " | ".join(VISION_ORDER) + " |")
    out.append("|" + "|".join(["---"] * ncols) + "|")
    delta_cache = {}
    for category, a_label, b_label, kind in PAIRS:
        row = [category, a_label, b_label]
        for vision in VISION_ORDER:
            dist = float(np.linalg.norm(
                rgb_channels_from_hex(sim_hex[(a_label, vision)])
                - rgb_channels_from_hex(sim_hex[(b_label, vision)])
            ))
            delta_cache[(a_label, b_label, vision)] = dist
            row.append(f"{dist:.1f}")
        out.append("| " + " | ".join(row) + " |")

    # Narrative summary, built from the computed numbers rather than asserted in advance.
    out.append("\n## Reading the tint-vs-tint row\n")
    tr = {v: ratio_cache[("Georgetown tint (= surface)", "Anywhere tint", v)] for v in VISION_ORDER}
    td = {v: delta_cache[("Georgetown tint (= surface)", "Anywhere tint", v)] for v in VISION_ORDER}
    out.append(
        f"- WCAG contrast ratio, Georgetown tint vs Anywhere tint: "
        f"Normal {tr['Normal']:.2f}, Protanopia {tr['Protanopia']:.2f}, "
        f"Deuteranopia {tr['Deuteranopia']:.2f}, Tritanopia {tr['Tritanopia']:.2f}."
    )
    out.append(
        f"- deltaSRGB, same pair: Normal {td['Normal']:.1f}, Protanopia {td['Protanopia']:.1f}, "
        f"Deuteranopia {td['Deuteranopia']:.1f}, Tritanopia {td['Tritanopia']:.1f}."
    )
    min_v = min(VISION_ORDER, key=lambda v: td[v])
    max_v = max(VISION_ORDER, key=lambda v: td[v])
    out.append(
        f"- Across the four vision conditions, deltaSRGB is lowest under **{min_v}** "
        f"({td[min_v]:.1f}) and highest under **{max_v}** ({td[max_v]:.1f})."
    )

    text = "\n".join(out) + "\n"
    out_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "cvd-simulation.md")
    with open(out_path, "w", encoding="utf-8") as fh:
        fh.write(text)
    print(text)
    print(f"\nWrote {out_path}", file=sys.stderr)


if __name__ == "__main__":
    main()
