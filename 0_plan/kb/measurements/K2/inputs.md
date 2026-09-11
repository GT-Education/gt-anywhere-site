# K2 measurement inputs

Everything `measure.py` reads. Re-run with `python3 0_plan/kb/measurements/K2/measure.py`
from the repo root; it regenerates `output.md`.

## Environment, checked 2026-09-11

| Check | Result |
|---|---|
| `python3 -c "import fontTools"` | `ModuleNotFoundError` — not installed |
| `python3 -c "import PIL; print(PIL.__version__)"` | `12.1.1` — installed, used throughout |
| `python3 --version` | 3.14.6 |

## Font files

| Face | Path | In repo? |
|---|---|---|
| Literata Regular | `assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654/697d4c84f94a275884380d4b_Literata-Regular.ttf` | Yes |
| Literata Bold (700) | `assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654/697d4c8455e9e4f5d6285309_Literata-Bold.ttf` | Yes |
| Inter Tight Regular | `assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654/697d4cc3f1703d267d101d6b_InterTight-Regular.ttf` | Yes |
| Inconsolata Regular | `assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654/69810d2dbb54029a4c691dba_Inconsolata-Regular.ttf` | Yes |
| Georgia | `/System/Library/Fonts/Supplemental/Georgia.ttf` | No — macOS system font, stands in for the `--font-serif` fallback the same way the original file's M-02/M-09 did |
| Arial | `/System/Library/Fonts/Supplemental/Arial.ttf` | No — macOS system font, `--font-sans` fallback |
| Courier New | `/System/Library/Fonts/Supplemental/Courier New.ttf` | No — macOS system font, `--font-mono` fallback |

All 18 repo TTFs under `assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654/` are
discovered by `os.walk` for M-05/M-06 (file size, gzip, variable-font check), independent of
the four named above.

## Sample text for advance-width measurements (M-01, M-04, M-09, M-10)

The original file's sample ("the umbrella sentence, both door lines and the full alphabet")
is not recoverable at its stated length of 177 characters: the umbrella sentence alone is 132
characters, door line 1 is 115, door line 2 is 108 (all confirmed against the current
`0_plan/mockups/shared/copy.md` and against this file's own section 5b, which independently
states the same three counts) — summed, that is already 355 characters before the alphabet is
added. The exact original string could not be recovered from this session; it lived only in
the authoring session's scratchpad.

This script rebuilds the sample by the same stated recipe, from the current, decided copy deck:

```
UMBRELLA = "GT School is a selective school for gifted and talented children, in person at
            our Georgetown, Texas campus or online from anywhere."          (132 chars)
DOOR1    = "Two hours of mastery academics each morning on our Georgetown, Texas campus,
            afternoons for workshops and building."                         (115 chars)
DOOR2    = "Live mastery academics with Guides from wherever you live, and four in-person
            weekends a year in Georgetown."                                 (108 chars)
ALPHABET = "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"        (52 chars)
SAMPLE   = " ".join([UMBRELLA, DOOR1, DOOR2, ALPHABET])                      (410 chars)
```

A sensitivity check (prose only, no alphabet — 357 characters) was also run: it gives
Literata ratio 0.854 and Inter Tight ratio 0.769 (vs. 0.884/0.793 for the canonical sample),
and an unchanged ~10% Inter-Tight-narrower-than-Literata comparison (M-04). Both variants sit
well below the original file's 0.941/0.848 — the qualitative finding (real prose is narrower
relative to `ch` than the original figures implied) is robust to which reconstruction is used;
the exact original absolute figures are not reproducible and are superseded by this run, per
the rework pack ("make the numbers in the file match the output").

## CSS / HTML inputs (M-07, M-08)

- `assets/cdn.prod.website-files.com/697d45ef94e91c0acce00654/css/gt-anywhere.webflow.shared.*.css`
  (located by prefix match, since the hash suffix can change on a re-mirror)
- `index.html` (repo root)
- `0_plan/mockups/M*/**` (all files, for the `font-weight: NNN` grep; `0_plan/mockups/shared/`
  is excluded at the top level only, matching the original method's `0_plan/mockups/M*/` scope)
