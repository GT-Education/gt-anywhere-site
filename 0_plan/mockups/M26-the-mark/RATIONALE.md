# M26 "The Mark", rationale

| Field | Value |
|---|---|
| Mock | `0_plan/mockups/M26-the-mark/` — a stage R1 **concept board**: first screen plus the comparison band, not a full sections 0 to 8 mock |
| Brief | `0_plan/kb/briefs/M26-M31-wave.md`, under `0_plan/kb/briefs/CONTRACT.md` v2.1 |
| Design library | insp-tsai2020 Civic Hairline + the estate's own atom |
| Runner | `node 0_plan/tools/shots.mjs 0_plan/mockups/M26-the-mark` — **all required rows pass** |

## Direction

The mark is already an atom of crossing orbits. Assemble nothing new: let the real mark carry the brand and let the two schools hang off a symmetric bracket that could hold a third.

## h1

The h1 is the umbrella sentence from `copy.md` section 1, verbatim and unanimated. It is the only h1.

## Decisions applied

| id | How it is applied |
|---|---|
| DD-21 | The doors are a `<ul>`; the bracket is built from per-door halves, so a third campus adds a list item and an arm without touching the geometry |
| CONTRACT v2.1 section 3, "Nesting is hierarchy" | The two schools are **mirrored equal arms with identical terminals**, never concentric rings. Measured at 1440: door centres 360 and 1080, both arms 360px, both drops 32px |
| CONTRACT v2.1 section 3, 3:1 rule | Every drawn line is `--color-border-strong` (#857f7b). `--color-border` (1.56) and the accent (2.38) are never asked to carry the drawing |
| MN-10, MN-16 | Transform and opacity only; 100/200/300ms; zero layout shift — the suffix box reserves the widest word so a swap cannot move the page |
| MN-11 | `prefers-reduced-motion` sets every duration to `--duration-none` and every state stays reachable |
| MN-12 | The swap is driven by keyboard focus at every width, not by hover alone |
| REQ-022 | No figure appears outside `copy.md`. The only numbers are 90th percentile, $10,400, four weekends, 9 to noon, two to three hours, weekly |

## Motion spec

A/B PAIR. `index.html` swaps the lockup suffix on hover and keyboard focus (200ms opacity + 4px rise). `index-timed.html` is byte-identical apart from one stylesheet link and instead runs a 2.2s load sequence (mark rotates -18deg to 0 over 300ms, then school > georgetown > anywhere > school). The pair exists so Nari compares the two motion models on evidence, not description.

| Beat | Trigger | Property | Duration | Easing | Reduced motion |
|---|---|---|---|---|---|
| Suffix swap | hover or `:focus-visible` on a door CTA | `opacity`, `translateY(4px)` | `--duration-base` 200ms | `--ease-out` | `--duration-none`, state still changes |
| Terminal emphasis | same | `transform: scaleY(1.25)` | `--duration-base` | `--ease-out` | `--duration-none` |

**This move is not in CONTRACT v2.1 section 6.** It is filed as D-031 move V11, "lockup suffix swap" (the timed variant adds V12, "mark assembly"), and **Johnny confirmed D-031 on 2026-09-11** — runbook section 7 names him as the decider. D-039 (scripts) is not engaged: this board is CSS-only.

## Assets

`../shared/img/gt-school-logo-h.svg` (header, real mark, never redrawn) and `../shared/img/gt-icon.svg` (stage, `alt=""` and `aria-hidden` because the header already names the brand). No photographs: DD-42/RF-25 hold every image behind Nari's written permission.

## Departures

**The stage lockup is typographic, not an SVG (DD-19).** No `GTgeorgetown` lockup file exists, and none is
needed: a word inside a flat SVG cannot be swapped, so the suffix must be live text. It is set in the brand's
own system — mark, `GT` in navy at 700, suffix in `--color-accent-text` at 400, lowercase — and the header
keeps the real `gt-school-logo-h.svg`, so rule 16 ("no text wordmark in place of the logo") holds.

`index-timed.html` animates the mark on load, which MN-02 forbids. That is the deliberate half of the A/B and is why it is a separate file.

The board stops after the comparison band rather than carrying sections 4 to 8. That is the R1 stage, declared, not an omission.

## Flagged slots

Q-007 application steps, Q-011 tuition, Q-013 after 8th grade, Q-019 outcome figure and Q-033 accreditation are all absent from the page by decision. CR-011, CR-021, CR-022 and CR-032 to CR-035 are "Unverified, public".

## Self-check

`grep -c "<form"` = 0. `grep -c "<script"` = 1 (JSON-LD only). No external requests beyond `../shared/*`. Copy verbatim from `copy.md`. Both door CTAs above the fold at every runner row except where noted in the Runner line above.
