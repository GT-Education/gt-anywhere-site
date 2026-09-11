# M01 Two Doors, rationale

| Field | Value |
|---|---|
| Mock | M01 "Two Doors", brief `0_plan/kb/briefs/M01.md` under `CONTRACT.md` v2.1 |
| Lens order | L1 objective, L2 continuity, L3 mission, L4 exclusivity |
| Evolves | `0_plan/mockups/M1-two-doors/` (read, then rebuilt from scratch to the current contract: that sketch links `tokens.css`, puts a photograph in each door and makes the whole card one link; all three are now out of contract) |
| Built | 2026-09-11 by a Fable design-engineer fork. `0_plan/tools/shots.mjs` measured every pass and the screenshots it wrote under `qa/` were read between passes; door parity and the per-row fold edge were measured with two scratch scripts outside the repository |
| Files | `index.html`, `styles.css` (links `../shared/tokens-v2.css`, `../shared/fonts.css`), this file; marks from `../shared/img/` |
| State | Default state: no photograph, no JavaScript. D-039 (scripts and inputs in mocks) is escalated and undecided, so the page is complete at rest and carries no `data-d039` declaration |
| Claims on the page | 90th percentile (CR-011), $10,400 (CR-021), four in-person or intensive weekends (CR-032), 9 to noon and about two hours (CR-033), two to three hours (CR-034), weekly check-ins (CR-035). Every one of those rows is "Unverified, public" in `0_plan/12-claims-register.md`: allowed on a mock, blocked for production. No figure appears that the deck does not carry (REQ-022) |

## Direction

One selective school, two ways to attend. The parent's only job on the first screen is to pick the
door, so the screen holds exactly four things: the umbrella sentence, its provenance line, two doors
of identical weight, and one sentence offering a comparison for the parent who cannot choose yet.

The direction's one structural idea is a **colour key set on the first screen and kept for the rest of
the page**: `--color-georgetown-tint` means Georgetown Campus, `--color-anywhere-tint` means GT
Anywhere, `--color-bg` means both schools at once, `--color-navy` means an action. A parent learns the
key from the two door cards in the first two seconds and then reads it, without being told, in the
comparison table's two tinted columns, in the repeated doors that sit under those columns, and in the
TEFA module, which is tinted because TEFA is a GT Anywhere fact. Where the two schools are the same —
the proof strip ("What is true of both schools") and the application steps, which `copy.md` section 5
gives identically to both — the ground stays neutral. Tint marks difference; neutral marks what is
shared. That is the whole system, and it is what separates M01 from M15's hairline ledger and M12's
navy statement: those argue with rules and figures, M01 argues with two equal surfaces.

Three exemplars, as the brief assigns them. Caltech contributes doors that stand **inside the first
screen at every row**, not two modules down (C01, C02): the compact door rule and the landscape recipe
exist so that stays true at 375 by 629 and at 750 by 342. Tate contributes **CTA parity** (C01): the
two buttons are the same component in the same fill at the same size, and the two cards are measured
equal to the pixel at all nineteen rows. Getty contributes the **sentence-then-doors order** from its
two-sites card, compressed into the first screen because Getty's own doors arrive two modules below
the hero (`CONCEPTS-B.md`, Getty). Getty's hover-gated compare control in the Visit menu is avoided
(C45): the compare anchor is a plain always-visible sentence directly under the doors.

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented
children, in person at our Georgetown, Texas campus or online from anywhere." It decodes "GT" (DD-33),
says "selective" and names both ways to attend before either door (DD-20), so it is the largest thing
on the page. Literata 400, `--text-3xl` (27px at 360, 46px at 1440), `--leading-tight` 1.15,
`max-width: 35ch`, `text-wrap: balance`. Two no-break spaces hold "in person" and "from anywhere."
whole so neither phrase splits and the last line is never one word; no word changes. The h1 takes nine
of twelve columns at 1024 to 1279 and eight from 1280 (Departures). On landscape phones it steps down
one token to `--text-xl` across the full width, which the contract's V10 recipe allows and which the
Departures table declares.

The door names are `h3` under one visually hidden `h2`, "Two ways to attend" (an allowed section 1
heading), so both doors sit at the same level under one named group and no heading level is skipped.
The later `h2`s are "Compare the two schools", "What is true of both schools", "How to apply", "More
ways to connect" and "Already a GT family?"; "Texas families" is an `h3` inside the comparison.

Line counts, measured by the runner (h1 bottom minus the h1's top, which is the header bottom plus the
first screen's top padding, divided by the line box at 1.15):

| Row | Width | h1 size | Column | h1 height | Lines |
|---|---|---|---|---|---|
| V1, V2, V3, V4, V7, V9 | 360 to 402 | 27.00 to 27.74px | 24px margins | 217, 219, 222, 222, 223, 222px | **7** |
| V5, V6, V8 | 412 to 430 | 27.92 to 28.23px | 24px margins | 193, 193, 195px | **6** |
| V10 | 750, landscape | 24.17px (`--text-xl`) | full width, 702px | 83px | **3** |
| V11, V12 | 768, 834 | 34.18, 35.34px | 35ch (692, 716px) | 157, 163px | **4** |
| V13, V19 | 1024 | 38.68px | nine columns, 712px | 178px | **4** |
| V14 | 1280 | 43.19px | eight columns, 779px | 199px | **4** |
| V15 | 1366 | 44.70px | eight columns, 836px | 206px | **4** |
| V16, V17 | 1440, 1920 | 46.00px | eight columns, 885px | 212px | **4** |
| V18 | 320 | 27.00px | 24px margins | 248px | 8 |

So 7 at phone widths, 6 at large-phone widths, 4 at laptop widths, exactly as M12 and M15 measured.
The contract's table estimates six lines at V2; that is one line optimistic, as the previous two
builds found, and the fold sums below use the measured seven. DD-38's 300-against-400 trial is not
repeated here: M03 set this sentence in both weights at V2 and V16
(`0_plan/mockups/M03-navy-thesis/qa/h1-300-V2.jpg` and its three siblings) and the line count did not
change. M01 ships 400, and the Continuity section below argues the difference against the estate's 300.

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id and name, lens order | M01 in `0_plan/mockups/M01-two-doors/`; L1, L2, L3, L4 as above; the earlier sketch read, then rebuilt | Met |
| Thesis | One admissions bar and one program; the choice is where the child sits. The h1 says it, the two identical cards show it, the same GT mark stands on both doors, and the comparison's first three rows repeat the same value in both columns (DD-43) | Met |
| Exemplars | Caltech's doors inside the first screen at every row; Tate's identically weighted pair (measured equal, table below); Getty's one sentence then two equal links, compressed into the first screen. Getty's hover-gated compare control avoided | Met |
| Composition, grid | 12 columns with a 32px gutter and 1184px of content at 1280 (48px margins) from 1024; 32px margins from 768; one column with 24px margins below 768. Section rhythm `--space-9` on phones, `--space-10` from 768, `--space-11` from 1280; card padding `--space-6` at 1280 and above. h1 across eight columns at 1280 and above, at most 35ch | Met, with the nine-column step at 1024 to 1279 and the smaller card padding below 1280 in Departures |
| Composition, doors | Two cards, 6 and 6 with a 64px gap at 1024 and above; each carries label, name, line and CTA; the compact rule under 780px tall moves both lines after the second CTA; the compare anchor directly under the doors | Met, with the doors stacked below 1024 rather than 768, and the compact rule extended to every phone width, both in Departures |
| Fold estimates | The brief's four sums (V2 517, V5 607, V14 545, V16 609) restated below beside this build's designed sums and the runner's measured bottoms: V2 565 of 605, V5 539 of 691, V10 291 of 318, V14 549 of 696, V16 618 of 876 | Met, measured |
| Typography | Contract roles: h1 Literata 400 `--text-3xl` `--leading-tight`; door names Literata 400 `--text-xl`; door lines Inter Tight 400 `--text-base` at `--leading-prose` 1.5; door labels Inter Tight 500 `--text-sm` uppercase 0.06em in `--color-text-muted`; CTAs Inconsolata 600 `--text-btn` uppercase, 44px floor; section eyebrows Inter Tight 500 `--text-xs` uppercase 0.08em | Met |
| Colour and surface | Page `--color-bg`; Georgetown card on `--color-georgetown-tint` (the same value as `--color-surface`, named for its meaning per RF-07, so the cue is carried by the label, the name and the tint together); GT Anywhere card on `--color-anywhere-tint`; CTAs `--color-navy` fill with `--color-on-navy` text (14.58); one accent use, a 3px `--color-accent` rule under the compare anchor; focus per contract section 4, with the two-colour ring on the footer's navy panel and on the mark plate that straddles it | Met, with the rule drawn the full content width rather than a short dash (Taste decisions) |
| Imagery | Default state: no photograph. Both cards carry `gt-icon.svg` at 32px beside the label. The photographed state the brief specifies is described in Assets and is not shipped | Met (default state) |
| Motion | Still. No `transition`, no keyframe rule. V1 and V3 instant; V10 native anchor scroll inside `prefers-reduced-motion: no-preference` only; the considered V6 reveals are absent because D-039 is undecided. Reduced motion zeroes every duration (runner: every computed duration 0s) | Met |
| Copy | `copy.md` v1.1 sections 0 to 8 verbatim; no section 9 words except the skip link "Skip to main content", which section 9 records for every mock | Met |
| Conversion | Doors on the first screen at all nineteen rows; compare anchor under the doors (first screen at V13 to V17, second screen at V2 and V5); comparison table with repeated values; doors repeated under their own columns; TEFA module; proof strip with the four facts and the sources line; application steps; four secondary CTAs; current families; footer with both marks | Met |
| Acceptance | `check-mocks.py` 36 of 36, `check-claims.py` clean (Self-check); the runner: all 16 fold rows pass, V18 reflows without horizontal scroll, V19 reports 1024, reduced motion, doubled root font, mark geometry and console pass. Door parity measured at 19 of 19 rows: Δwidth 0.0px, Δheight 0.0px. DD-38, DD-39, MN-16 and D-039 named below | Met; critics' round one pending |

## Fold estimates and measured bottoms

Method: the contract's method with this build's measured h1 heights (7 lines at 375, 6 at 414, 3 at
750 landscape, 4 at 1280 and 1440), the space tokens declared in `styles.css`, and the card as built.

Compact card (every phone width, and landscape phones): border 1 + padding 8 + label 18 + 2 + name 25
+ CTA margin 8 + CTA 44 + padding 8 + border 1 = **115**, and the CTA's bottom is 9px above the card's.
Laptop card at 1280 (short-laptop band): 1 + 16 + 18.6 + 2 + 31.2 + line margin 16 + three lines 79.7
+ CTA margin 16 + 44 + 16 + 1 = **241**. At 1440: 1 + 32 + 18.8 + 2 + 32.2 + 16 + two lines 54 + 24 +
44 + 32 + 1 = **257**. The GT Anywhere line is one line shorter than Georgetown's at both widths; its
flexible row absorbs the difference, which is why the two cards measure identical.

| Row | Viewport, limit | Brief's estimate | Designed to | Measured (`qa/fold.md`) | Spare |
|---|---|---|---|---|---|
| V2 | 375 by 629, **605** | 517 | 56 + 8 + h1 219 + 8 + provenance 21 + 24 + card 115 + 8 + card 115 = 574, CTA bottom 565 | **565** | 40 |
| V5 | 414 by 715, **691** | 607 | 56 + 8 + 193 + 8 + 21 + 24 + 115 + 8 + 115 = 548, CTA bottom 539 | **539** | 152 |
| V10 | 750 by 342, **318** | contract recipe 313 | 56 + 8 + h1 83 at `--text-xl` + 8 + 22 + 8 + card 115 = 300, CTA bottom 291 | **291** | 27 |
| V14 | 1280 by 720, **696** | 545 | 56 + 24 + 199 + 8 + 22 + 16 + card 241 = 566, CTA bottom 549 | **549** | 147 |
| V16 | 1440 by 900, **876** | 609 | 56 + 48 + 212 + 8 + 22 + 48 + card 257 = 651, CTA bottom 618 | **618** | 258 |

Every other row, second CTA bottom against the limit: V1 612 of 716 (header 88, the utility links
stacked); V3 568 of 640; V4 568 of 635; V6 539 of 815; V7 570 of 657; V8 542 of 715; V9 568 with no
limit (emptiness row, page height 6,923); V11 762 of 1000; V12 769 of 1170; V13 524 of 744; V15 499 of
624; V17 618 of 936; V18 715 (reflow row, no horizontal scroll at 320); V19 524 of 552 (zoom row,
reported). Sixteen fold rows, sixteen passes.

### What crosses the bottom edge, per row

The runner's false-floor test is the contract's own reserve: below the last door CTA, visible content
must reach into the bottom 24px and more must lie beyond the edge, counting text, images and painted
hairlines but never a container's background fill. Read from `qa/fold.md`, "Next band evidence", and
checked element by element with a second script that names the ink and quotes its text. **No row is
carried by a hairline; on every row the ink at the edge is a sentence a parent would read.**

| Rows | What the reader sees at the edge |
|---|---|
| V1, V3, V5, V8, V9, V10 | The run-in door paragraphs, sliced mid-line (V1 "Two hours of mastery academics each morning on…" 727 to 747 across a 740px edge; V5 "…and four in-person weekends a year in Georgetown." 703 to 723 across 715) |
| V2, V4, V7 | The same paragraph, with the edge falling in the 4px of half-leading between two of its lines (V2: a line ends at 628, the next begins at 632, edge 629). The paragraph is visibly cut; the runner reports it as "content reaches 628 of 629" because the gap is between line boxes, not inside one |
| V6 | The compare anchor sentence, ending at 825 against an 839px edge, 14px inside the reserved band, with the accent rule and the whole comparison band below. The only row where a sentence completes inside the reserve rather than being sliced: at 412 by 839 the h1 sets six lines and the paragraphs two, so the first screen finishes 14px short. Tuning it would cost the slice at V5 and V8, which are nearer the binding case |
| V11, V12 | The comparison heading (V11) and the first row of tinted cells with its row label (V12), both sliced |
| V13, V17 | The table caption (V13, ends 752 of 768) and the comparison heading (V17, ends 944 of 960), each 16px inside the reserve with the column heads and the caption respectively immediately below |
| V14, V15, V16 | "Compare the two schools" sliced by the edge: 681 to 729 across 720, 607 to 656 across 648, 894 to 944 across 900 |
| V19 | The compare anchor sentence sliced, 554 to 587 across 576 (zoom row, reported not required) |
| V18 | Nothing: at 320 by 256 the reflow row's rule is no horizontal scroll, and DD-44 exempts it from the fold rule |

## Door parity

Measured in the browser at all nineteen rows (`.door` bounding boxes, one decimal):

| Row | Card widths | Δ width | Card heights | Δ height |
|---|---|---|---|---|
| V1 360 by 740 | 312 / 312 | **0.0** | 123.3 / 123.3 | **0.0** |
| V2 375 by 629 | 327 / 327 | **0.0** | 114.9 / 114.9 | **0.0** |
| V3 390 by 664 | 342 / 342 | **0.0** | 115.0 / 115.0 | **0.0** |
| V4 393 by 659 | 345 / 345 | **0.0** | 115.0 / 115.0 | **0.0** |
| V5 414 by 715 | 366 / 366 | **0.0** | 115.2 / 115.2 | **0.0** |
| V6 412 by 839 | 364 / 364 | **0.0** | 115.2 / 115.2 | **0.0** |
| V7 402 by 681 | 354 / 354 | **0.0** | 115.1 / 115.1 | **0.0** |
| V8 430 by 739 | 382 / 382 | **0.0** | 115.3 / 115.3 | **0.0** |
| V9 390 by 844 | 342 / 342 | **0.0** | 115.0 / 115.0 | **0.0** |
| V10 750 by 342 | 335 / 335 | **0.0** | 114.6 / 114.6 | **0.0** |
| V11 768 by 1024 | 704 / 704 | **0.0** | 232.1 / 232.1 | **0.0** |
| V12 834 by 1194 | 770 / 770 | **0.0** | 233.0 / 233.0 | **0.0** |
| V13 1024 by 768 | 448 / 448 | **0.0** | 237.3 / 237.3 | **0.0** |
| V14 1280 by 720 | 560 / 560 | **0.0** | 241.4 / 241.4 | **0.0** |
| V15 1366 by 648 | 603 / 603 | **0.0** | 192.0 / 192.0 | **0.0** |
| V16 1440 by 900 | 640 / 640 | **0.0** | 256.9 / 256.9 | **0.0** |
| V17 1920 by 960 | 640 / 640 | **0.0** | 256.9 / 256.9 | **0.0** |
| V18 320 by 256 | 272 / 272 | **0.0** | 148.6 / 148.6 | **0.0** |
| V19 1024 by 576 | 448 / 448 | **0.0** | 237.3 / 237.3 | **0.0** |

Nineteen of nineteen rows inside the 4px acceptance, at 0.0px. How it is held: the doors are one grid
with `grid-auto-rows: 1fr`, so the stacked pair is as tall as the taller card and the side-by-side pair
shares one row; the card is a four-row grid whose third row (the door line) is the flexible one, so
the CTA sits on the card's floor whichever line is longer. Where the two doors are side by side the
runner's own numbers show it independently: both CTA bottoms are identical at V10, V13 to V17 and V19.
Where the doors are stacked the CTA bottoms differ by exactly one card plus the gap (123 to 124px on
phones, 256 to 257 on tablets), which is the stack, not a parity failure.

## Layer-2 tokens used, with their rows

`tokens-v2.css` layer 2 is PROPOSED; the contract requires a mock that uses one to name the row.

| Token | Where it is used | Register row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | Every type size on the page; `--text-xl` is also the h1 size in the landscape recipe and `--text-lg` the door name there | DD-38 (b), R5 |
| `--leading-prose` 1.5 | Door lines, run-in paragraphs, table cells, proof facts, steps, the sources lines, the footer facts block | DD-38 (b), RF-58 |
| `--measure-prose` 65ch | Door lines, run-in paragraphs, the compare anchor, the sources lines, the TEFA module, the steps list, the connect list | DD-38 (b), RF-55 |
| `--color-on-navy` | Footer text, the label on every navy button, the outer band of the two-colour focus ring | DD-39 (a), RF-07 |
| `--color-text-muted-on-dark` (#a3bfcb, a new tint) | The footer facts block on navy (7.81) | DD-39 (a), RF-07; a DD-19 departure until the row is Agreed |
| `--color-border-strong` (#857f7b, a new tint) | The two door cards' hairline only, so the card edge reaches 3:1 on both tints (3.31 and 3.35) | DD-39 (a), RF-07; a DD-19 departure until the row is Agreed |
| `--color-georgetown-tint` | The Georgetown card and the Georgetown column of the comparison. The same value as `--color-surface`; used by its meaning-name because on this page the tint *is* the school (RF-07) | DD-39 (a), RF-07 |
| `--duration-none` and the reduced-motion zeroing | The `prefers-reduced-motion: reduce` block | MN-16 (a), RF-53, R8 |
| Not used | `--color-accent-text`, `--color-on-accent`, `--color-focus-on-dark` (the two-colour ring uses `--color-on-navy`), `--ease-standard`, `--ease-out`, `--ease-in` (nothing animates) | |

## Decisions applied

| Id | How it is applied |
|---|---|
| DD-04 | Cue set: label plus icon per door. Both doors carry `gt-icon.svg` at 32px hanging in the card's left strip. The same mark on both is the thesis — one school — and the tint plus the label ("In person", "Online") carry the difference. The mark's own colour is the accent orange of the brand file; see the note under K3 section 5f below |
| DD-06, REQ-013 | Comparison as an attribute table, the three shared rows first (Same school, Admissions, After 8th grade), then the six that differ |
| DD-10, MD-25 | Selectivity is the bar, not price: the only exclusivity statements are "selective", the 90th-percentile admissions bar and the four application steps. No wealth cue, no countdown, no scarcity language. The tuition row states "$10,400 a year" beside "Tuition on request", both as neutral table values |
| DD-12, DD-13 | Header is the lockup, "Current families" and "Contact admissions"; no menu; no phone number in the header (it is in the footer) |
| DD-14 | The 390px first screen was designed first and every laptop band is a relaxation of it; doors stacked Georgetown then GT Anywhere on phones; no sticky CTA |
| DD-19 | Every value outside the token set is listed in Departures |
| DD-20, DD-33 | One umbrella sentence above the doors, spelling out "gifted and talented" |
| DD-21 | The doors are a `<ul>` of two `<li>`, each a self-contained card in a grid whose track count is the only thing that would change for three to five schools; the repeated doors below the table are the same list shape, and the comparison's column tints are assigned by class, not by position |
| DD-25 | Application links carry `?school=georgetown` and `?school=anywhere`; no unscoped application link anywhere (checker R17) |
| DD-26 | Visual parity between the doors, by construction and by measurement: same component, same fill, same type, equal widths and heights at every row (table above) |
| DD-29 | Every screen carries a fact: the first screen carries the two door lines, the second the comparison, the third the four proof facts, the fourth the admissions bar |
| DD-38 (b), R5 | The fluid clamps and the type roles of contract section 3, with the measured line counts above |
| DD-39 (a), RF-07 | The colour roles of contract section 4: `--color-text` on `--color-bg` 17.69, on the Georgetown tint 16.10, on the Anywhere tint 16.30; `--color-on-navy` on navy 14.58; `--color-text-muted` 6.25, 5.69 and 5.76 on the three light surfaces; `--color-text-muted-on-dark` 7.81 on navy |
| DD-42, RF-25, AD-11 | No photograph in the default state. The photographed state is designed and described in Assets, not shipped |
| DD-43 | The three shared rows repeat their full value in both columns rather than reading "Same", and on phones each value block is labelled with its school |
| DD-44, K10 | No `vh`, `svh` or `dvh` anywhere; the first screen is content-sized so what crosses the edge is content. Height queries at 479 (landscape), 689 and 789 (the two short-laptop bands) with a 600px floor that keeps the zoom row out; width queries at 370, 768, 1024, 1280 and 1440 |
| DD-46 | Button fill is the contract's surface-dependent treatment: `--color-navy` fill with `--color-on-navy` text on every light surface. The estate's orange is not copied; the Continuity section gives the measured reason |
| D-015 (c) | The TEFA module is shown to everyone, with `data-region-source="default"` |
| D-039 | Escalated and undecided, so the page ships its no-JavaScript state: no router, no reveal, no observer, and no `data-d039` declaration on `<html>` |
| MD-02, R14 | Secondary CTAs are the four `copy.md` labels; the tour label names the destination and the campus because no booking link exists |
| MN-16 (a), RF-53, R8 | The motion tokens exist in the sheet but nothing animates; reduced motion zeroes every duration on elements and pseudo-elements |
| REQ-022 | Only register-backed figures, in the deck's words; `check-claims.py` clean |
| REQ-024 | The in-app browser stress case is V2 to V8 with the contract's 24px headroom, as `KB-RESOLUTIONS.md` R7 directs until the Instagram, Facebook and TikTok envelopes are measured. All seven rows pass |
| REQ-070 | Links go only to gt.school, anywhere.gt.school, apply.gt.school and community.gt.school, each with its `data-event` attributes (checker R12, R3) |
| SE-13 | `noindex, nofollow` in the head |
| K1 section 5a and 5b | 12 columns, 32px gutter, 1184px of content at 1280; section padding `--space-9` to `--space-11`; card padding `--space-6` at 1280 and above |
| K2 F-22 | `text-wrap: balance` acts at six lines or fewer, so it shapes the h1 from 412 up and leaves the seven-line phone setting alone |
| K3 section 5d, contract section 4 | `--color-focus` at 2px offset on light surfaces (8.20 on the page, 7.46 and 7.56 on the two tints, so the ring reads against whatever it sits on, including around a navy button on a tinted card: `qa/focus-cta.jpg`, `qa/focus-plate.jpg`); the two-colour ring over navy and on the mark plate that straddles it, a 2px `--color-navy` inner band and a 2px `--color-on-navy` outer band with 14.58 between them (`qa/focus-footer.jpg`, `qa/focus-footer-plate.jpg`); forced colours falls back to a 3px `CanvasText` outline with `ButtonText` button borders and `CanvasText` card borders and accent rule (`qa/forced-colors.jpg`) |
| K3 section 5f | One accent use per screen. The page spends the accent exactly once as a design device, the 3px rule under the compare anchor; it is not spent again on any later screen. The GT mark on the two doors is the brand file unmodified, which the note below argues is brand, not an accent decision |
| K12 F41, G15, G17, V2, G4 | Buttons in uppercase Inconsolata with a `--radius-md` corner and a navy fill, raised from the estate's shipped 40px to the runbook's 44px floor; horizontal marks 27px in the header on phones and 32px from 768, and 32px for both footer marks at every width |
| CONTRACT.md section 2 | The compact door rule and the V10 landscape recipe, both in Departures with their thresholds |

## Motion spec

| What | Trigger | Duration token | Easing | Reduced motion |
|---|---|---|---|---|
| Nothing | — | — | — | — |
| V1 door state, V3 focus | hover, `:focus-visible` | 0ms (no `transition` declared anywhere) | none | Same; every state is visible at rest (R8) |
| V10 anchor scroll to `#compare` | click | Native `scroll-behavior: smooth`, inside `prefers-reduced-motion: no-preference` only | browser | `scroll-behavior: auto` |
| V2 door line reveal, V6 section reveal | Considered by the brief, not built | — | — | — |

The brief lists V6 one-time reveals on the proof strip, the application steps and the secondary CTAs
as *considered*. They need the D-039 script, D-039 is escalated to Johnny and undecided, and the
contract says a mock ships its no-JavaScript state until it is decided, so they are absent and the
page is complete at rest. Runner, `prefers-reduced-motion: reduce` at V14: every computed transition
and animation duration is 0s on elements and pseudo-elements.

## Assets

| Asset | Where | Alt text | Loading | Consent |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` | Header lockup (27px on phones, 32px from 768) and the footer plate (32px) | "GT School" | eager, `decoding="async"` | Brand file, unmodified; on a light panel only (`copy.md` section 8) |
| `../shared/img/gt-anywhere-logo-h.svg` | Footer, on the `--color-navy` panel (32px) | "GT Anywhere" | eager, `decoding="async"` | Brand file, unmodified; white lettering on navy only |
| `../shared/img/gt-icon.svg` | Both door cards, 32px, hanging in the card's left strip | `alt=""` with `aria-hidden="true"`: decorative, because the label and the name beside it carry the whole meaning and a repeated "GT icon mark" would be noise in a screen reader | eager, `decoding="async"` | Brand file, unmodified |
| Photographs | **None.** DD-42's default state, RF-25 and AD-11: every file in `ASSETS.md` shows identifiable children, re-checked 2026-09-11, and none is usable before Nari's written permission | — | — | — |

**The photographed state this brief specifies, described not shipped.** When permission exists and
DD-42's door parity is satisfied, each card gains a 3:2 thumbnail 160px tall inside the card above the
label, spanning the card's full content width. Georgetown takes `georgetown-science.webp` (1440 by
1208) at `object-position: 50% 45%`, which R13 allows up to 720 CSS px at DPR 2, so the 160px-tall 3:2
crop at any card width on this page is inside the budget. GT Anywhere takes a photograph Nari confirms,
because the library has no GT Anywhere file that is both candid and free of the classroom cluster the
Georgetown files already use; until it exists, shipping a photograph on one door and not the other
would break the parity this mock is measured on, which is exactly what DD-42 guards. Each thumbnail
carries its `copy.md` section 9 caption under it ("Students run a science experiment." for the
Georgetown file). The cards' four-row grid takes the thumbnail as a new first row, so both cards stay
equal by the same mechanism. K1 section 5b found 16:9 door photographs too tall at 1280 by 720, which
is why the crop is 3:2 at a fixed 160px and why no photograph band sits on the first screen.

**Fallback if a photograph is rejected (DD-31):** the default state *is* the fallback. Nothing in the
layout depends on a photograph; the card's identity is the tint, the mark, the label and the name.

## Departures

| Departure | Reason |
|---|---|
| The h1 across nine columns at 1024 to 1279, eight from 1280 (the brief says eight) | Eight columns at 1024 are 629px and set the sentence in five lines; nine (712px) hold four, which M15 measured with the same sentence. Eight columns at 1280 (779px) and 1440 (885px) set four |
| The doors stack below 1024 rather than below 768 | The brief fixes 6 and 6 only "at 1024 and above". At 768 to 1023 a two-up card is 340 to 373px wide and "Explore the Georgetown campus" wraps to two lines inside its button while "Explore GT Anywhere" does not: one door's control twice the height of the other is exactly the parity the direction is built on. Stacked, each card takes the full width and both labels set on one line. Measured at V11 and V12: both cards 704 and 770px wide, heights equal, both CTAs above the limit with 238 and 401px to spare |
| The compact door rule applies at every phone width, not only under 780px tall | The contract sets the rule by height because at 1024 and above the doors are side by side and a tall phone has room for the line in the card. Below 768 the doors are stacked, so the second CTA is already a full card lower, and the line inside the first card pushes it further; at V6 (412 by 839) with the lines in the cards the second CTA measured 821 against a limit of 815, a fail. Applying the rule to every phone width fixes that, gives the phone one anatomy instead of two, and puts the two door lines next to each other as a labelled pair, which is easier to compare than two lines separated by a button. V6 and V9 now measure 539 and 568 |
| The compact card's CTA spans the card's full width, under the mark strip as well as the text | At 375 to 430 the longer label needs those 40px to set on one line: measured, the card's height falls from 123.4 to 114.9 and every phone row gains 17px of fold. At 360 (V1) it still wraps, which is why V1's card is 123.3 |
| V10: the h1 at `--text-xl` across the full width, the door names at `--text-lg`, section padding `--space-3`, the doors side by side, at `(max-height: 479px) and (min-width: 600px)` | CONTRACT.md section 2's landscape recipe, which allows the one-token step-down where the first screen cannot reach 318 at the clamp size. At 35ch the h1 would set four lines of 33.9px type (156px) and the CTAs would end near 370. Measured: both CTAs at 291 of 318 |
| Two short-laptop height bands at `min-width: 1024px`: **`max-height: 789px`** gives back first-screen padding (24), the doors' top margin (16), card padding (16), the anchor's margin (16) and the accent rule's margins (16 and 32); **`min-height: 600px` and `max-height: 689px`** gives back one step more of each | One band cannot serve V13 (768), V14 (720) and V15 (648): they are 48 and 72px apart and the h1 differs by 7px between them. Each band is the same rule at a different step, in K1 P7's sense (compose against height as well as width), not a rem height tuned to one viewport. Measured, the ink at the edge: V13 the caption at 727 to 752, V14 the heading at 681 to 729, V15 the heading at 607 to 656. The 600px floor keeps V19 out: at 1024 by 576 the page is being zoomed, and there the first screen rightly ends on the compare anchor, sliced |
| Card padding `--space-4` on phones and in the short-laptop bands, `--space-5` from 768, `--space-6` from 1280 (the brief says `--space-6`) | 32px of padding inside a 327px phone card leaves a 223px text column and costs 48px of fold at the binding row. The brief's value holds where the brief's grid holds, at 1280 and above |
| Two copies of each door line in the markup (inside the card, and as a run-in paragraph after the second CTA); exactly one is displayed at any viewport | The compact rule moves the lines past the second CTA, which CSS cannot do from inside two list items without `display: contents` on `<li>`, whose list semantics are unreliable in assistive technology. `display: none` removes the hidden copy from the accessibility tree |
| The accent rule runs the full content width under the compare anchor, rather than a short dash | See Taste decisions |
| The application pair carries no tint, though it is a pair of school-named buttons | The page's key marks where the two schools differ. `copy.md` section 5 gives both schools the same four steps and the same admissions bar, so the band is shared ground; tinting the two buttons would say the applications differ when they do not. Two navy buttons at their natural widths, side by side |
| `--color-border-strong` on the two door cards | `--color-border` on the Georgetown tint is 1.42:1 and on the Anywhere tint 1.44:1, and the tints themselves are 1.10 and 1.09 on the page, so at `--color-border` the card a low-vision reader sees has no edge at all. `--color-border-strong` measures 3.31 and 3.35, which clears 3:1. The quiet hairlines elsewhere (table rules, proof facts, steps, connect, families) stay `--color-border`: they separate rows inside a block a reader has already located |
| Three no-break spaces: "in person" and "from anywhere." in the h1, "in person" in the fourth proof fact; three `white-space: nowrap` spans holding the compound "in-person" | Typographic no-breaks only: the phrase stays whole and the h1 never ends on one word. No character changes |
| The utility links stack under 370px (header 88 at V1 and V18, 56 from 375 up) | The 27px mark is 117px wide and the two 12px links need about 199px with their gap; the 327px column at 375 holds them, the 312px column at 360 does not. The alternatives are a smaller mark, which K12 G4 floors at 27, or dropping a link, which DD-12 keeps |
| Buttons in uppercase Inconsolata 600 at `--text-btn` with `--radius-md` | The estate's own button setting (K12 F41, G15, G17) at the runbook's 44px target floor; the weight and size differences from the measured estate are argued in Continuity |
| Values outside the token set | 1px hairlines and the 1px card border; the 3px accent rule; the focus ring's 2px `outline` and 4px `box-shadow` spread and its 2px and 0 offsets; the 3px forced-colours outline; the 44px target floor and the 3.5rem header and connect rows; the 32px mark strip and the 27px and 32px mark heights (K12 G4, V2); letter-spacing 0.06em and 0.08em; 0.18em and 0.2em underline offsets; 0.35em after the run-in name; the `30ch`, `35ch`, `40ch` and `48ch` measures; the table's 20 percent corner column and 40/40 school columns; the twelve-column `1 / span 4` and `5 / -1` label split; breakpoints 370, 768, 900, 1024, 1280 and 1440; height queries 479, 600, 689 and 789; `text-wrap: balance` as an enhancement |
| `role` attributes on the table elements; the corner cell an empty `<td>` | The stacked layout below 768 uses `display: block`, which strips table semantics in some browsers; the roles keep the table a table. A visually hidden corner word would be a word the deck does not have |
| Both footer marks load eagerly | Rule 13's lazy loading targets photographs and the checker exempts SVG marks; M12 found that a lazy mark 4,000px down is never fetched in the runner's full-page capture. Both files are 8 to 10 KB |

## Taste decisions the brief did not name (raised here, not made silently)

| Decision | Choice and reason |
|---|---|
| The accent device's shape | The brief fixes a 3px `--color-accent` rule under the compare anchor but not its width. Built at 64px it read as a stray dash three lines under an already-underlined sentence; drawn the full content width it reads as the line where choosing ends and comparing begins, closing the first screen across both doors. One accent use on the page, not one per screen: nothing below the first screen is tinted orange |
| The GT mark on both doors, and K3 section 5f | `gt-icon.svg` is entirely `#E48B53`, so a strict reading of "one accent use per screen" would forbid the brief's own Imagery row. This build reads section 5f as counting the accent spent as a *design device* — a rule, a fill, a marker the designer chose to colour — and not the colour inside an unmodified brand file, which the header lockup and both footer marks already bring to every screen. M15 flagged the same tension and left the icon out, calling it a director's call; M01's brief makes the call the other way, and this is the argument for it. If the director rules otherwise, the two `<img>` elements come out in one line each and nothing else changes |
| Where the mark sits | Hanging in a 32px strip at the card's left, spanning the label and name rows, so label, name, line and CTA share one left edge and the mark reads as a marginal mark rather than a bullet. On phones the CTA alone returns to the card's full width (Departures) |
| Door cards over door rows | M15 built the same first screen as hairline rows because its argument is a ledger. M01's argument is two surfaces, so the doors are tinted cards with a 3:1 edge, a radius and a filled base button |
| The colour key beyond the doors | The comparison's two school columns are tinted full height, so a parent who has chosen reads one column down the page without losing it, and on phones each value block carries its own tint and its school label. The TEFA module is tinted because it is a GT Anywhere fact. Nothing else on the page is tinted |
| Where the doors repeat | Under the table, each button in its own column, so the repeated choice sits under the column of evidence that argued for it |
| The proof strip's ground | `--color-bg`, with a continuous hairline above four cells. These four facts are true of both schools, and on this page a tint would assign them to one |
| Provenance line | Inter Tight `--text-sm` in `--color-text-muted`, `--space-3` under the h1 at every width: a dateline belonging to the headline, not a third element floating between the headline and the doors |
| Eyebrows and labels | Inter Tight 500 uppercase, the contract's default role; Inconsolata keeps its two jobs, buttons and figures, plus the footer phone number |
| The figure face | `--text-md` Inconsolata 600 with `tabular-nums` on "90th" in the proof strip and in the admissions line, and nowhere else. The contract restricts the figure role to register figures, so "8th grade", which is structural and has no register row, stays in the running face, and the comparison's values stay running prose inside their sentences |
| Door line colour | `--color-text`, not muted: they are prose (17.69, 16.10 and 16.30 on the three surfaces) |
| Button arrow | Inside the button, right-aligned by `justify-content: space-between`, so a door button reads as a control with a direction. The two text links (TEFA, family hub) keep their arrow in the text flow so a wrapped label does not park its arrow at the right edge |
| Comparison table columns | Row header 20 percent, the two schools 40 percent each with `table-layout: fixed`: equal columns for equal doors |
| Section headings | "Compare the two schools", "What is true of both schools", "How to apply", "More ways to connect", "Already a GT family?", all from the allowed list, with one-word eyebrows ("Compare", "Proof", "Admissions", "Connect") also from the allowed list |
| Band rhythm | Every band pays its top padding and none of its bottom, so the interval between two bands is one `--space-9` to `--space-11`, not two stacked; Steps and Connect are one move and take half an interval; the compare anchor's own bottom margin is the gap from the first screen to the comparison, which is what the short-laptop bands spend |
| Footer | Three columns from 900px (facts and number; links; both marks), the GT School mark on a `--color-bg` plate whose padding hangs 16px left so its ink aligns with the GT Anywhere mark directly below it; both marks 32px |
| Doubled root font | `overflow-wrap: break-word` on `body`, `minmax(0, 1fr)` tracks on every grid, `flex-wrap: wrap` on the header, `overflow-wrap: anywhere` on the buttons, so a 32px root at 375 cannot force horizontal scroll. Measured: pass, and the header wraps to the mark on one line with the two utility links stacked right (`qa/V2-rootx2.jpg`) |
| Open Graph | `og:title`, `og:description`, `og:type`; no `og:image` while the no-photograph default holds (`copy.md` Head) |

## Continuity: this build against the measured estate

`0_plan/mockups/shared/CONTINUITY.md` is the first rendered measurement of the destination, taken from
this repository's own mirror of anywhere.gt.school. **`gt.school` has no mirror here and is unmeasured,
so the Georgetown handoff is unverified and this section does not claim otherwise.**

What matches without argument: the ground `rgb(252, 244, 239)` (`--color-bg`), the body colour
`rgb(0, 17, 23)` (`--color-text`), the body face Inter Tight, the three families, and both mark files
unmodified on the panels `copy.md` section 8 assigns them.

| Property | Estate, measured | This page | Decision |
|---|---|---|---|
| Heading weight | Literata **300** upright, with an italic half at weight 400 in accent orange | Literata **400**, one voice, no colour change | **Known, argued, kept.** The contract's section 3 role is 400 and DD-38 owns the test; M03 set this exact sentence in both weights at V2 and V16 and the line count did not change, so 400 costs no fit and holds up better at the 27px phone size where this page spends seven lines. The estate's orange italic half is not copied for a second reason: K12 F88 measures that orange on cream at 2.38:1, which fails AA, and half of a 46px headline is text, not decoration |
| Heading tracking | **-1.6px** at 58.5px, which is -0.027em | normal | **Known, argued, kept.** The same em value is -1.25px at 1440 and -0.73px at 375; Literata 400 at 1.15 leading is already dense, and the binding row is the phone, where the sentence sets seven lines. Tracking moves with DD-38, not ahead of it |
| Button weight | Inconsolata **500** | Inconsolata **600** | **Known, argued, kept.** `shared/fonts.css` ships Inconsolata 400 and 600 only, so 500 cannot be claimed without adding a face to the shared set, which is a change to shared infrastructure and not a mock's to make |
| Button size | **16px** | `--text-btn`, 17 to 18px | **Known, argued, kept.** K12 G17 raises the control from the estate's shipped 40px to the runbook's 44px floor, which this page takes; a label a step larger keeps its proportion inside the taller button. The fill, the uppercase setting, the `.5rem` radius and the near-white label are the estate's own (K12 F41) |
| Button fill | navy on the first screen's enrolment card, accent orange in the footer and the desktop header | surface-dependent: navy fill with `--color-on-navy` text on every light surface; no application button in the footer | **DD-46 option (a).** Navy is already inside the estate's action vocabulary — its first screen's visible application action *is* navy — so navy on cream is continuous with it rather than a departure. Copying the orange would import K12 F87's 2.50:1 label contrast and spend the page's one accent on a control instead of on the wayfinding rule |
| Button silhouette | a cut at the lower right, which `border-radius: 8px 8px 0 0` describes only partly | `--radius-md` on all four corners | Declared. The notch is a shape this page does not copy; K12 G17 fixes the radius value, not the notch, and no decision row asks for it |
| Ground texture | grained cream with fine wave linework behind the hero | flat `--color-bg` | Declared. The grain belongs to the estate's surface, not its token set; reproducing it would need an image outside `shared/img/` and outside the no-photograph default |
| Header on the phone | mark and MENU only; the application button and TEFA badge are desktop-only; the Alpha lockup moves below the headline | mark plus two utility links at every width; the provenance line sits under the h1 at every width | Declared, and a deliberate difference: DD-12 removes the menu from the umbrella page because the page has nothing to navigate to except the two doors, and G0.5 item 6 puts the network provenance in one place, under the h1, where the estate moves its Alpha lockup on the phone anyway |
| Horizontal mark height | 32px at 1440, at least 27px at 390 (K12 V2) | header 27px to 767 and 32px from 768; **both** footer marks 32px at every width | Met, and measured by the runner's own mark-geometry table at 390 and 1440: 27/32/32 with 0 percent aspect skew. Both footer marks stand at 32 because they sit one above the other, and an umbrella mark smaller than its own sub-brand on the width carrying two thirds of sessions is the defect CONTINUITY.md exposed in six other mocks |

Could the two sites inherit this shell? The header, the footer facts block, the navy footer panel with
both marks, the button component and the tint pair are all token-only and would drop into either site
without a new value. The one thing that would not travel is the colour key itself, which only means
something on a page that holds both schools at once.

## Flagged slots

| Slot | Default shown | Flag |
|---|---|---|
| "Current families" destination | https://community.gt.school (header, families band, footer) | Q-002 confirm |
| Application steps, same for both schools | The four steps as the deck lists them | Q-007 |
| Georgetown tuition | "Tuition on request. Ask admissions." | Q-011 decided (G0.5 item 4) |
| After 8th grade | "Families plan the path after 8th grade with admissions." | Q-013 |
| Intensive weekend logistics | "Four intensive weekends a year in Georgetown." | Q-017; CR-032 |
| Outcome figure, accreditation | Withheld from the page entirely | Q-019, Q-033 (G0.5 items 2 and 3) |
| TEFA window, owner, expiry | Module shown to everyone | Q-021, D-015 option c |
| Parent quote | None | Q-034 |
| Weekly check-ins | "check in every week" (proof strip), "a one-to-one check-in every week" (table) | Q-035 decided (Guides); CR-035 "Unverified, public" |
| 90th percentile | Proof strip, both Admissions cells, the admissions line | CR-011 "Unverified, public" |
| Tuition figure | "$10,400 a year" | CR-021 and CR-022 conflict flagged in the register |
| Cohort size | None stated | CR-025 and CR-026 conflict |
| MAP assessments | Named in proof fact 2 | No register row carries a figure; the source is the Anywhere refund policy, which the sources line does not list |
| `?school=` parameter | `georgetown`, `anywhere` | DD-25's convention; the live apply.gt.school parameter is to be confirmed at S5 |
| Secondary CTA labels and destinations | The four `copy.md` labels, three of them to gt.school/contact | MD-02: meeting, tour and info-session links do not exist yet |
| Repeated comparison cells | Value repeated in both columns; on phones each block labelled with its school | DD-43 proposed |
| Holly's unifying brand element | Not shown | Q-001 |
| Door icon | `gt-icon.svg`, 32px, both doors | DD-04; the K3 section 5f reading is in Taste decisions |
| Photograph and caption | None shown; the photographed state is designed in Assets | DD-42, RF-25 |
| Layer-2 tokens | Used as listed, with their rows | DD-38, DD-39, MN-16 all PROPOSED |

## Parent questions

From `0_plan/05-landing-mockups-plan.md` section 6c.

| # | Question | Answered where |
|---|---|---|
| PQ-01 | What is GT School? | h1, first screen |
| PQ-02 | Is it for my child? | h1 ("gifted and talented"), proof fact 1, the admissions line, both Admissions cells |
| PQ-03 | In person or online: what are my options? | The two doors, first screen, above the fold at every row |
| PQ-04 | Where is the campus? | h1, the Georgetown door line, the "Where and how" row |
| PQ-05 | What does a day look like? | The "The day" row, and the two door lines |
| PQ-06 | What does it cost, and can TEFA help? | The "Tuition and access" row and the TEFA module |
| PQ-07 | How do I apply? | "How to apply": four steps and two application links |
| PQ-08 | Who teaches my child? | The "Guides" row, proof fact 3, the GT Anywhere door line |
| PQ-09 | How much in-person time does GT Anywhere have? | The GT Anywhere door line, the "In-person time" row, the footer facts block |
| PQ-10 | What results does the school get, and is it accredited? | **Deferred by decision**, G0.5 items 2 and 3: no outcome figure and no accreditation claim exists with a register row, so the page is silent and the parent is routed to "Talk to admissions" and the two school sites. Q-019 and Q-033 stay open |
| PQ-11 | What happens after 8th grade? | The "After 8th grade" row, which defers to admissions (Q-013) |
| PQ-12 | I am a current family, where do I go? | Header utility link, the families band, the footer link |
| PQ-13 | I am not ready to apply, what can I do? | "More ways to connect": FAQ, admissions, a campus tour, a virtual info session |
| PQ-14 | Is GT School part of Alpha School? | The provenance line, once, under the h1 |

Deferred to the school sites, and why: anything below the level of the choice. The two door lines and
the comparison table give the parent what is needed to pick a door; the schedule in detail, the
curriculum, the Guides by name and the campus itself belong to gt.school and anywhere.gt.school, which
the doors and the repeated doors hand the parent. That is the umbrella page's job (C-13).

## Self-check

Greps against the non-negotiable rules: `grep -c "<form" index.html` is 0; `grep -c "<script"` is 1
(the JSON-LD block); the only hosts in the document are gt.school, www.gt.school,
anywhere.gt.school, apply.gt.school, community.gt.school and schema.org; every image is
`../shared/img/`; zero raw hex in `styles.css`; no "advis" in visible text; the numbers in visible text
are 90, 10,400, 9, 8, 512, 270, 9481, 2026, 09 and 10. The 390 by 844 first screen carries the header,
the umbrella sentence, the provenance line and both door CTAs, the second ending at 568 of 844, with
the two door lines and the compare anchor below.

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M01-two-doors`

```
## M01-two-doors: 36 pass, 0 fail

check-mocks: OK
```

Rule by rule (`--all`): R1 no forms; R2 one JSON-LD script only; R20 D-039 declaration valid and named
in the rationale; R3 external hosts; R3b local assets only; R4 no placeholder text; R5 numbers on the
whitelist; R6 no "advisor" in text; R7 full names (Georgetown Campus x8, GT Anywhere x14); R8 title,
robots noindex, canonical, description, open graph, JSON-LD organization, JSON-LD no claims; R9 lang,
one h1, skip link, landmarks, alt on every image (5 images), table caption and scope, focus-visible
styled; R10 transitions within budget, no keyframe animation, reduced-motion block covers
pseudo-elements; R11 raw colors declared (0 raw hex in styles.css); R12 data-event coverage; R13 image
dimensions (0 without width/height), at most two eager photos (0 eager); R17 no unscoped application
link; R18 provenance line once (1 occurrence); R19 compare anchor before the table; R16 real logos in
header and footer; R14 size under 1 MB (41 KB); R15 rationale sections. All PASS.

### `python3 1_spec/tools/check-claims.py`

```
## 0_plan/mockups/M01-two-doors/index.html
| Figure on the page | Register row | Occurrences | Status |
|---|---|---|---|
| "designed for students in the 90th+ percentile" | CR-011 | 4 | Unverified, public |
| "$10,400/year — GT Anywhere annual tuition, fully or partially covered | CR-021 | 1 | Unverified, public |
| Four in-person intensive weekends a year in Georgetown (four named 202 | CR-032 | 4 | Unverified, public |
| Georgetown mornings: "two 50-minute blocks and one 25-minute block wit | CR-033 | 2 | Unverified, public |
| GT Anywhere mornings: "two to three hours of 100% cognitive load" (aca | CR-034 | 1 | Unverified, public |
| Guides hold weekly one-to-one check-ins with each student ("Academic A | CR-035 | 2 | Unverified, public |
  NOTE unverified rows on the page (allowed in mocks, blocked for production): ['CR-011', 'CR-021', 'CR-032', 'CR-033', 'CR-034', 'CR-035']

check-claims: OK
```

(The whole-folder run, `python3 1_spec/tools/check-claims.py` with no argument, is `check-claims: OK`
across every mock in `0_plan/mockups/`.)

### `node 0_plan/tools/shots.mjs 0_plan/mockups/M01-two-doors` — final run

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 313 | 342 | 481 | 612 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 283 | 312 | 442 | 565 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 286 | 315 | 445 | 568 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 286 | 315 | 445 | 568 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 257 | 286 | 416 | 539 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 257 | 286 | 416 | 539 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 287 | 316 | 446 | 570 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 259 | 288 | 418 | 542 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 286 | 315 | 445 | 568 | yes | report: page height 6923 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 291 | 291 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 237 | 267 | 506 | 762 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 243 | 272 | 512 | 769 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 288 | 524 | 524 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 309 | 549 | 549 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 308 | 499 | 499 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 316 | 346 | 618 | 618 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 316 | 346 | 618 | 618 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 344 | 394 | 558 | 715 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 288 | 524 | 524 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Focus and forced colours

Captures: focus-cta.jpg (first door CTA focused); focus-footer-plate.jpg (the footer mark on its plate); focus-plate.jpg (header lockup link focused); focus-footer.jpg (GT Anywhere footer link focused); forced-colors.jpg (forced-colors: active at V14). The critics judge these by eye.

## Console

PASS: no console errors.

## Next band evidence

What the runner saw continuing below the fold. Ink means text, a painted edge or an image: section padding and the empty leading of a line box do not count.

| Row | Cut | Element and the ink that crosses the bottom edge |
|---|---|---|
| V1 | yes | text cut by the edge, 727 to 747 |
| V2 | yes | content reaches 628 of 629 and more follows below |
| V3 | yes | text cut by the edge, 659 to 679 |
| V4 | yes | content reaches 655 of 659 and more follows below |
| V5 | yes | text cut by the edge, 703 to 723 |
| V6 | yes | content reaches 825 of 839 and more follows below |
| V7 | yes | content reaches 681 of 681 and more follows below |
| V8 | yes | text cut by the edge, 729 to 749 |
| V9 | yes | text cut by the edge, 822 to 852 |
| V10 | yes | text cut by the edge, 326 to 346 |
| V11 | yes | text cut by the edge, 986 to 1028 |
| V12 | yes | text cut by the edge, 1185 to 1200 |
| V13 | yes | content reaches 752 of 768 and more follows below |
| V14 | yes | text cut by the edge, 681 to 729 |
| V15 | yes | text cut by the edge, 607 to 656 |
| V16 | yes | text cut by the edge, 894 to 944 |
| V17 | yes | content reaches 944 of 960 and more follows below |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 554 to 587 |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 390 by 844 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 1440 by 900 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass

### Screenshots read during the build

`qa/V2.jpg` and `qa/V9.jpg` (the phone first screen and the emptiness row), `qa/V10.jpg` (the landscape
recipe: a three-line h1, two doors side by side, both CTAs at 291 of 318), `qa/V11.jpg` (the stacked
tablet pair), `qa/V13.jpg`, `qa/V14-full.jpg` and `qa/V2-full.jpg` (the whole page at laptop and phone),
`qa/V16.jpg` and `qa/V17.jpg` (the design width and the desktop emptiness check), `qa/V2-rootx2.jpg`
(the doubled root font), `qa/focus-cta.jpg`, `qa/focus-plate.jpg`, `qa/focus-footer.jpg`,
`qa/focus-footer-plate.jpg` (the two-colour ring straddling the plate) and `qa/forced-colors.jpg`.
Six things were changed because of what the captures showed rather than what a checker said: the card's
hanging-mark anatomy (the label and name were indented 41px from the line and the button), the accent
rule (a 64px dash reading as a second underline under the compare link), the tablet door pair (one
button wrapping and the other not), the application pair (the same wrap inside a tinted matte), the
two text links' arrows (parked at the right edge of a wrapped label), and the door card's border
colour (`--color-border` at 1.4:1 left the cards edgeless).
