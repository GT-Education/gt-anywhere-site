# The gt.school story scale: a dated source extract

## Why this exists

`0_plan/kb/briefs/M33.md` recreates the animated story section on the live GT School about page.
Revision 1 of that brief cited counts that nothing in this repository could check, and Astra's
review (`0_plan/ensemble/E12-mn17-v13-scale.md`, answer 7) refused them for that reason. It was
right to: **the counts were wrong.** Revision 1 said 155 ticks with a major every third. The source
has **104**, with a major every second. This folder makes every figure the brief cites reproducible
without loading the live page, which the project's hard rules forbid.

## Provenance

| Field | Value |
|---|---|
| Source | `https://www.gt.school/about-us`, the `story_wrap` section, and its Webflow stylesheet |
| Method | `curl` of the page and the stylesheet as text. **No browser, no production page loaded, no beacon fired.** Extractions are text slices of those two responses |
| Fetched | 2026-09-11 |
| What is kept | `story-segment.html`, the section's markup as fetched, 13,916 bytes. `story-rules.css`, the 70 rules whose selectors name a story or timeline class. The rest of the 267 KB stylesheet is not GT's argument and is not kept |
| What is not established | Whether the ticks are scroll-triggered. The segment contains **zero** `data-w-id` attributes, so there is no Webflow interaction binding in it at all. One CSS rule sets `opacity: 0` on a tick. That is a static declaration, not a trigger. An earlier note claiming four interactions in this segment was wrong |
| Rights | The illustration and the three photographs in this section are Webflow assets whose licence is unrecorded. Nothing here is reused in a mock |

## The counts, reproducible

`python3 0_plan/kb/exemplars/gt-story/count.py` prints all of these from the checked-in extract.

| Figure | Value |
|---|---|
| Tick elements | **104** |
| Plain | 51 |
| `is-bigger` (major) | 49 |
| `is-hour` | 2 |
| `is-transparent` | 2 |
| Inner bars | 104, one per tick |
| Story image frames | 3 |
| Webflow interaction attributes | 0 |

## The rhythm

Two runs of 52. Each opens with a transparent tick, then alternates plain and major. Majors fall on
**every second position**: 46 of the 48 gaps between majors are 2. The two gaps of 4 have **different
causes**, which an earlier version of this file got wrong by attributing both to hour marks: one is an
hour mark displacing a major, and the other is the seam between the two runs, where each run's opening
transparent tick falls. Found by the M33 critic and confirmed against `count.py`. The two runs are not
identical, because only the first carries hour marks.

```
_.B.B.B.B.B.B.B.B.B.BHB.B.B.B.B.H.B.B.B.B.B.B.B.B.B.
_.B.B.B.B.B.B.B.B.B.B.B.B.B.B.B.B.B.B.B.B.B.B.B.B.B.
```

`.` plain, `B` major, `H` hour, `_` transparent.

## Geometry, from `story-rules.css`

| Object | Declared |
|---|---|
| Stage | `position: sticky; top: 6rem; height: calc(100vh - 6rem)`; two-column grid, one column with four rows on small screens |
| Tick | 0.9px tall, 30% wide, aligned right; inner bar 50% width in the estate's light gold |
| Scale edge | 1px full-height line |
| Image frame | `aspect-ratio: 6/5`, large radius, light-gold tint at 15 per cent |
| Text column | 4.5rem gaps, 4rem left padding |

The estate's light gold is `#ebba9b`, which measures **1.61:1** on the mock ground `#fcf4ef` and
**1.46:1** on `#f8e8de`. It cannot draw a line that carries an argument, which is why M33 draws its
scale in `--color-border-strong` (3.63:1 and 3.31:1).
