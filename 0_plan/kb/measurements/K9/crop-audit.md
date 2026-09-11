# K9 crop audit (rework pack, A9)

Tests K9-A9's claim that a square or 16:9 crop "decapitates the subject on a third of this
library" without a rendered crop audit. Pillow 12.1.1 is installed (`python3 -c "import PIL;
print(PIL.__version__)"` → `12.1.1`), so this is measured, not marked Judgment.

## Method

`crop-audit.py` crops all 25 photographs in `0_plan/mockups/shared/img/` to 16:9 and to 4:5
**about the centre** — the naive `object-fit: cover; object-position: 50% 50%` a browser
applies with no `--focal` override (K9-F25) — and assembles two contact sheets
(`contact-sheet-16x9.jpg`, `contact-sheet-4x5.jpg`, each under 400 KB). The script also prints
the crop box and the percentage of width/height kept for every file (full output:
`python3 0_plan/kb/measurements/K9/crop-audit.py`).

"Subject survives" is a visual read of the crop, not a face detector — no face-detection
library is installed, only Pillow, so it cannot be automated. Every file below was read from
the two contact sheets; the nine files marked "zoomed" in the notes column were additionally
re-cropped at 2 to 4x the contact-sheet's per-cell resolution (temporary files, not checked
in) because the contact-sheet thumbnail left the verdict genuinely ambiguous. Re-run
`crop-audit.py` to regenerate the two committed contact sheets; the zoomed spot-checks are
reproducible the same way (any centre-crop of the named file at the stated ratio reproduces
them) but are not themselves committed, per the instruction to keep only the two contact
sheets under this directory.

Two of the 25 files are on `ASSETS.md`'s avoid list (`anywhere-student-home.webp`,
`georgetown-kid-writing.webp`, R1) and are tested anyway, because the instruction is to crop
every asset listed in `ASSETS.md`, not only the usable 23.

## Correction (2026-09-11, after `ASSETS.md`'s face re-check)

`ASSETS.md` was re-viewed and corrected after this audit's first pass: the three files it had
classified face-not-visible (`georgetown-dscf1931.webp`, `georgetown-guide.webp`,
`anywhere-slider-2.webp`) all show at least a partial recognisable child's face on closer
inspection — no file in the 25-photograph library is confirmed face-free. This audit's first
pass had read `georgetown-dscf1931.webp`'s contact-sheet cell as "hands only, no face"; a
direct re-crop at 2x resolution (below) shows that call was wrong — the default 50%/50% crop
clearly keeps the child's nose and mouth at the top edge. The verdicts below are corrected
accordingly. This does not change the crop audit's decapitation tally (below): a partially
visible face that stays in frame is not a cut head, and none of the three files' retained
heads or partial faces are newly found to be cut by either ratio.

## 16:9 crop (art-direction band ratio, `17` §4 phone/tablet class; ratios from K9-F48)

| File | Native | % height kept | Verdict | Notes |
|---|---|---|---|---|
| `anywhere-academics-left.webp` | 628×684 | 51.6% | **Head cropped (child)** | Zoomed. The adult's face is fully intact; the boy is cut from about the mouth up — his eyes, nose and forehead are outside the frame |
| `anywhere-academics-right.webp` | 628×684 | 51.6% | Survives | Zoomed. Both the leaning mentor's face and the seated boy's head are inside the frame; a background bystander at the left edge shows torso only, but is not a subject of the photograph |
| `anywhere-academics.webp` | 1440×960 | 84.4% | Survives | Zoomed (batch). Girl and boy fully intact |
| `anywhere-austin-intensives.webp` | 1080×1163 | 52.3% | Survives | Zoomed. Full head and headphones intact — a clean hero crop |
| `anywhere-georgetown-visit.webp` | 800×800 | 56.2% | Survives | Zoomed. Every adult face in the main row is intact; the foreground children's faces are also intact |
| `anywhere-intensives-1.webp` | 1440×960 | 84.4% | Survives | Zoomed (batch) |
| `anywhere-intensives-2.webp` | 1000×800 | 70.2% | Survives | Zoomed. All standing boys' heads intact |
| `anywhere-section.webp` | 1280×912 | 78.9% | Survives | Contact-sheet read only (not individually zoomed); high retention |
| `anywhere-slider-1.webp` | 1080×722 | 84.2% | Survives | Contact-sheet read; high retention |
| `anywhere-slider-2.webp` | 1080×722 | 84.2% | Survives | Contact-sheet read. Not face-free: `ASSETS.md`'s 2026-09-11 correction found profile faces (the boy in red at left, the girl in green); the generous height retention (84.2%) does not cut them |
| `anywhere-slider-3.webp` | 1347×900 | 84.2% | Survives | Contact-sheet read; both costumed boys' heads visible |
| `anywhere-student-home.webp` (avoid list) | 1036×1464 | 39.8% | Survives | Zoomed. Face and hands stay in frame despite the aggressive crop — the studio portrait is already centred vertically |
| `georgetown-3504.webp` | 540×360 | 84.4% | Survives | Zoomed (batch). All three boys' heads intact |
| `georgetown-3915.webp` | 600×360 | 93.9% | Survives | Contact-sheet read; minimal crop |
| `georgetown-campus.webp` | 867×627 | 77.8% | Survives | Contact-sheet read; group photo, headroom intact |
| `georgetown-crowd.webp` | 1440×960 | 84.4% | Survives | Zoomed (batch). Every visible audience member's head is intact, including back rows |
| `georgetown-dscf1931.webp` | 900×675 | 75.0% | Survives; **not face-free** | Re-zoomed after `ASSETS.md`'s 2026-09-11 correction. The default 50%/50% crop still shows the child's nose and mouth at the top edge — this file was wrongly read as "hands only" on the first pass at contact-sheet resolution. The original photograph is already a close-up excluding the eyes/forehead, so this crop does not newly decapitate anything; but it does not exclude the visible partial face either. `object-position: 50% 80%` is required to keep hands and worksheet only (`ASSETS.md`) |
| `georgetown-guide.webp` | 1440×960 | 84.4% | Survives | Zoomed (batch). Teacher's head and body fully intact |
| `georgetown-kid-writing.webp` (avoid list) | 1160×1040 | 62.7% | Survives | Zoomed. Studio portrait, face centred |
| `georgetown-presenting.webp` | 1440×960 | 84.4% | Survives | Zoomed (batch). All visible heads intact |
| `georgetown-science.webp` | 1440×1208 | 67.1% | **Head cropped (one assisting adult)** | Zoomed. Both children's heads (headband girl, girl in pink) are fully intact; the adult woman at the left edge is cropped from about the nose up (eyes and forehead outside the frame); the adult man at the right edge is intact |
| `georgetown-student-writing.webp` | 1440×960 | 84.4% | Survives | Zoomed (batch). Boy's head fully intact |
| `georgetown-support.webp` | 1080×1429 | 42.5% | **Head cropped (child)** | Zoomed. The adult's face is fully intact; the boy's head is entirely outside the frame — only his shoulders and torso remain |
| `georgetown-writing.webp` | 608×360 | 95.0% | Survives | Contact-sheet read; minimal crop (only 5% of height removed) |
| `gtschool-3993.webp` | 1080×720 | 84.4% | Survives | Zoomed (batch). Both boys' heads intact |

**16:9 tally: 2 of 25 files (8%) cut a child's head; 1 of 25 (4%) cuts one assisting adult's
face while both children in the same frame stay intact; 22 of 25 (88%) fully survive.** Astra's
challenge stands: "a third of this library" (roughly 8 of 25) is not what a rendered crop
shows. The measured rate is 2 to 3 of 25, three to four times lower than claimed.

## 4:5 crop (portrait band ratio)

Cropping to 4:5 trims width on every file whose native ratio is above 0.8 (23 of 25 — see
K9-F48), so it is a *different* failure mode from 16:9: it removes people from the sides of
the frame rather than cutting heads top-to-bottom. The two files at or below 0.8
(`georgetown-support.webp` at 0.756, `anywhere-student-home.webp` at 0.708) are the exception —
for those two the algorithm crops height instead, gently (94.5% and 88.5% kept), which is why
`georgetown-support.webp`'s boy — decapitated at 16:9 — has his head back at 4:5.

| File | Native | % width kept | Verdict | Notes |
|---|---|---|---|---|
| `anywhere-academics-left.webp` | 628×684 | 87.1% | Survives | Ratio 0.918 > 0.8: width-only crop, full height kept, so the 16:9 head-crop does not recur |
| `anywhere-academics-right.webp` | 628×684 | 87.1% | Survives | Same reasoning |
| `anywhere-academics.webp` | 1440×960 | 53.3% | Survives | Zoomed (batch). Girl and boy retained; background adults trimmed |
| `anywhere-austin-intensives.webp` | 1080×1163 | 86.1% | Survives | Minor trim |
| `anywhere-georgetown-visit.webp` | 800×800 | 80.0% | Survives, group narrowed | Contact-sheet read; edge attendees trimmed, core group with ribbon intact |
| `anywhere-intensives-1.webp` | 1440×960 | 53.3% | Survives | Zoomed (batch). Adult and several children retained |
| `anywhere-intensives-2.webp` | 1000×800 | 64.0% | Survives | Zoomed |
| `anywhere-section.webp` | 1280×912 | 57.0% | Survives, cast narrowed | Zoomed. 3 of the original 4 children retained |
| `anywhere-slider-1.webp` | 1080×722 | 53.5% | Survives, cast narrowed | Zoomed |
| `anywhere-slider-2.webp` | 1080×722 | 53.5% | Survives | Zoomed. Not face-free: `ASSETS.md`'s correction found profile faces; the width trim narrows the cast but the retained figures' profiles are not cut |
| `anywhere-slider-3.webp` | 1347×900 | 53.5% | Survives | Zoomed. Both costumed boys retained |
| `anywhere-student-home.webp` (avoid list) | 1036×1464 | 100% (height-cropped, 88.5% kept) | Survives | Ratio 0.708 < 0.8 |
| `georgetown-3504.webp` | 540×360 | 53.3% | Survives, cast narrowed | Zoomed. 2 of 3 boys retained, both heads intact |
| `georgetown-3915.webp` | 600×360 | 48.0% | Survives (lead subject), cast narrowed | Zoomed. The girl in pink is fully intact; the other children "further down the counter" (`ASSETS.md`) are reduced to slivers at the frame edge |
| `georgetown-campus.webp` | 867×627 | 57.9% | Survives, group narrowed | Zoomed |
| `georgetown-crowd.webp` | 1440×960 | 53.3% | Survives (retained subjects), crowd narrowed | Zoomed. Retained audience members' heads intact; the marketing banner and QR code (K9-F52) fall outside this particular crop |
| `georgetown-dscf1931.webp` | 900×675 | 60.0% | Survives; **not face-free** | Zoomed. Native ratio `900/675=1.333` is above 4:5's 0.8, so this crop trims width only and keeps 100% of the height — the same nose/mouth visible at 16:9 is visible here too, undiminished |
| `georgetown-guide.webp` | 1440×960 | 53.3% | Survives | Zoomed. Teacher fully intact; background desks trimmed |
| `georgetown-kid-writing.webp` (avoid list) | 1160×1040 | 71.7% | Survives | Studio portrait, centred |
| `georgetown-presenting.webp` | 1440×960 | 53.3% | Survives, cast narrowed | Zoomed. 2 to 3 of the original 6 children retained |
| `georgetown-science.webp` | 1440×1208 | 67.1% | Survives (children); **both assisting adults cropped out** | Zoomed. Both children's heads fully intact — better than the 16:9 crop — but the two adults at the left and right edges fall entirely outside the frame |
| `georgetown-student-writing.webp` | 1440×960 | 53.3% | Survives | Zoomed. Boy fully intact |
| `georgetown-support.webp` | 1080×1429 | 100% (height-cropped, 94.5% kept) | **Survives — recovers the head lost at 16:9** | Ratio 0.756 < 0.8: only 39px trimmed off the top, well short of the 410px that cut the boy's head at 16:9 |
| `georgetown-writing.webp` | 608×360 | 47.4% | Survives (retained subjects); **two people lost from the frame** | Zoomed. The toddler `ASSETS.md` places "at the left edge" is cropped out entirely, and the "man" is not visible either; the older woman and the boy in the cap remain |
| `gtschool-3993.webp` | 1080×720 | 53.3% | Survives | Zoomed. Both boys retained |

**4:5 tally: 0 of 25 files decapitate a retained subject — the failure mode at this ratio is
losing people from the sides of the frame (7 of 25 files lose at least one secondary person),
not cutting heads. The two most portrait-shaped files invert the 16:9 result: `georgetown-
support.webp` recovers the head 16:9 cut, because its native ratio (0.756) sits below 4:5's
0.8 and so this crop trims height gently instead of width.**

## What this means for K9-A9

The measured rate (2 to 3 of 25 files, 8 to 12%) is three to four times lower than "a third of
this library" and the failure is concentrated in specific, nameable files, not spread evenly —
exactly the case for per-file `object-position` (K9-P5, K9-F25) rather than a blanket
duotone/crop rule. It also shows the risk is ratio-dependent per file, not a fixed property of
the library: `georgetown-support.webp` fails at 16:9 and passes at 4:5; `georgetown-science.webp`
protects its child subjects at both ratios but loses its adults at both. K9-imagery.md's A9 and
the per-file notes in section 10.1 are corrected against this table (see the file's "Rework log
(E4)" section).
