# M06 The Ledger: rationale

| Field | Value |
|---|---|
| Mock | M06 "The Ledger", `0_plan/mockups/M06-the-ledger/` (`index.html`, `styles.css`, this file, `qa/`) |
| Brief | `0_plan/kb/briefs/M06.md` under `CONTRACT.md` v2.1; runbook `0_plan/17` sections 4, 6, 7 |
| Built | 2026-09-11, design engineer (Fable fork), one build pass with the runner in the loop: `node 0_plan/tools/shots.mjs 0_plan/mockups/M06-the-ledger --all` (Playwright from the npx cache, headless Chromium) measured the 19 matrix rows and wrote `qa/V1.jpg` to `qa/V19.jpg`, `qa/V2-full.jpg`, `qa/V14-full.jpg`, `qa/V2-rootx2.jpg` and `qa/fold.md`. No other browser tool was used. Four runner iterations: the first found a horizontal scroll at a doubled root font and a duplicated lines row at V9; the second moved the breakpoint; the third and fourth fixed two specificity faults in the stacked form |
| State | No JavaScript (D-039 undecided: no `data-d039` declaration, one JSON-LD script). No photograph (DD-42 default state, RF-25). Copy: `copy.md` v1.1 sections 0 to 8 verbatim, no section 9 words |
| Tokens | `../shared/tokens-v2.css`. Layer-2 tokens used are listed with their register rows below (`TOKENS-V2.md` rule) |

## Direction

Lens order L1 objective, L4 exclusivity, L3 mission, L2 continuity. Thesis: the comparison table is the page. A parent deciding between in person and online wants the facts side by side before anything else, and GT School is confident enough to lead with them (K6 sections 2d and 5b; DD-06, DD-23, DD-43).

The first screen is header, h1, provenance line, then the fixed compare anchor sentence as the table's one-line introduction with a 3px accent rule under it (the page's single accent use), then the ledger itself: a real `<table id="compare">` whose two `<th scope="col">` cells are the doors. Each holds label, name, line and CTA in that order, so the doors and the column headers are one element and a parent who reads down a column is reading the school she is about to choose. The body rows are `copy.md` section 3 in the deck's order, shared rows first with their values repeated in both columns (DD-43), separated by hairline rules in COLLINS's list treatment (C21); the two header cells are CGA's explicit, parallel, labelled options (C31); the sources line sits under the table as Vanguard's footnoted disclosures block (C04). The table closes with a foot row that repeats both door CTAs under a double rule (DD-23, `data-placement="after_comparison"`), the accounting convention for a total. Nothing on the page moves.

## h1

The umbrella sentence, `copy.md` section 1, is the one `<h1>` (`data-fold="h1"`), Literata 400 at `--leading-tight` across 8 of 12 columns at 1024px and above, full content width below, capped at 35ch. Below 768px it is set at `--text-2xl` rather than the contract's `--text-3xl`: computed with Literata Regular's own advance widths (the site's TTF, greedy wrap, no kerning), the 132-character sentence at `--text-3xl` (27.26px) in the 327px column of V2 wraps to seven lines (219px), not the contract's six (188px); at `--text-2xl` (24.14px) the same method gives six lines (167px) and the browser, with kerning, rendered five (139px). R5 makes the clamp a working default adjustable per brief, and the anchor sentence above the table costs this direction 55px at the fold that the shared M01 form does not pay, so the phone h1 gives that height back. `text-wrap: balance` evens the line lengths (it never adds a line) and removes the single-word last line ("anywhere.") the greedy wrap produces at V2. Every visible h2 is an allowed heading from `copy.md`; the compare section's h2 "Compare the two" is visually hidden so no heading level is skipped before the TEFA module's h3.

| Row | Size | Column | Lines, computed from glyph metrics | Lines, measured by the runner (h1 bottom minus header and padding, over size times 1.15) | Height |
|---|---|---|---|---|---|
| V2 375 by 629 | 24.14px (`--text-2xl`) | 327px | 6 | 5 (211 − 56 − 16 = 139px) | 139px |
| V5 414 by 715 | 24.50px | 366px | 5 | 5 (213 − 72 = 141px) | 141px |
| V14 1280 by 720 | 43.19px (`--text-3xl`) | 800px (8 of 12 columns of 1216, 32px gutters) | 4 | 4 (279 − 56 − 24 = 199px) | 199px |
| V16 1440 by 900 | 46.00px | 907px (8 of 12 columns of 1376), capped at 35ch | 4 | 4 (300 − 56 − 32 = 212px) | 212px |

At the contract's `--text-3xl` on the phone rows the glyph-metric method gives V2 7 lines (219px) and V5 6 lines (193px); that is the reason for the departure, recorded again under Departures.

## Brief compliance

| Brief section | Built | Status |
|---|---|---|
| Mock id, lens order | M06, L1 L4 L3 L2 | Done |
| Thesis | Table as page; doors are the header cells | Done |
| Exemplars | COLLINS rows (hairlines, name left, value right); CGA parallel labelled options (two identical header cells); Vanguard footnote block (sources line under the table); Caltech's unsourced strip avoided (no figure without a row; sources line under every figure group) | Done; no superscript markers, because a "1" is not on the numbers whitelist and adds no register row |
| Composition | Header 56 (measured 56 at every row but V18, where the utility links wrap); h1 across 8 columns at 1024 and above; provenance; anchor sentence linking to `#compare` on the table, placed before the `<table>` (checker R19); `<table id="compare">` with the two `<th scope="col">` doors holding label, name, line, CTA; rows in the deck's order with repeated values; stacked form below the measured breakpoint keeping the table element and ARIA roles; on stacked viewports under 800px tall the doors show label, name, CTA and both lines follow the second CTA | Done. The breakpoint measured for this content is 900px, not 767px (R6): at 768px the Georgetown CTA label wraps to two lines inside a 239px door cell and the doors stop being equal (runner capture, iteration 2). Between 736 and 899px the stacked form is two-up: doors side by side, each row's two school cells side by side under the row label. The "first three rows at V14, five at V16" intent does not hold once the h1 and the door lines render at their real line counts: V14 shows the doors (bottom 621) and the cut top of row 1; V16 the doors (bottom 653) and two complete rows with the third cut |
| Typography | Label `--text-xs` uppercase muted (Inter Tight 500); name `--text-lg` Literata; line `--text-base` at `--leading-prose` 1.5; CTA `--text-btn` Inconsolata 600; row labels `--text-sm` Inter Tight 500; cells `--text-base` at 1.5; `tabular-nums` on the tuition row | Done |
| Color and surface | `--color-bg` page; header cells `--color-surface` and `--color-anywhere-tint`; zebra rows at 50 percent of `--color-surface` via `color-mix()`; rules `--color-border`; one accent use, the 3px rule under the anchor; CTAs navy fill; focus `--color-focus`; two-colour ring on the footer panel | Done |
| Imagery | Default state: none. Photographed state specified under Assets | Done (default) |
| Motion | Still. Hover and focus are instant colour or underline changes (V1, V3); no `<details>` (V7 not used, nothing is hidden); V10 native anchor scroll under `no-preference` only. Runner: every computed transition and animation duration is 0s under `prefers-reduced-motion: reduce` | Done |
| Copy | Sections 0 to 8 verbatim (50 slots checked by string match against `copy.md`), the fixed anchor sentence, no section 9 words | Done; one string outside `copy.md`: the skip link "Skip to main content" that BUILDER-BRIEF rule 11 and checker R9 require |
| Conversion | Doors as header cells on the first screen; the comparison within the first two screens at V14 and V16; proof strip with the four facts and the sources line; steps; secondary CTAs with the R14 tour label; current families; footer | Done |
| Acceptance | `check-mocks.py` 36 pass, 0 fail; `check-claims.py` OK; fold rule met at V1 to V17 except V10 (see the fold table); no horizontal overflow at any row including V18 and a doubled root font; stacked form keeps `<table>` semantics with explicit roles; rationale names DD-38, DD-39, DD-43 (this section, Decisions applied, Layer-2 tokens) | Checkers and runner as pasted in Self-check; critics' scores, the screen-reader pass and the forced-colours capture are pending |

## Decisions applied

| Id | How it is applied in this mock |
|---|---|
| G0.5 items 1 to 6 | Umbrella sentence as the h1; no speed figure; no accreditation claim or mark; "Tuition on request. Ask admissions." in the Georgetown tuition cell; Guides everywhere; the provenance line once, under the h1 (checker R18) |
| DD-04 | Each door carries a text label ("In person", "Online") plus a small inline icon (place pin, signal arcs) in `currentColor`; tint is the secondary cue; photographs are absent by default (DD-42) |
| DD-06, REQ-013 | Attribute table, shared rows first (Same school, Admissions, After 8th grade), then the rows that differ; readable HTML table with `caption`, `th scope="col"` and `th scope="row"` at every width |
| DD-10, MD-25 | Selectivity is the bar (90th percentile in the Admissions row, the proof strip and the steps lead); access is the story ($10,400 and TEFA stated plainly in the Anywhere tuition cell and the TEFA module); no wealth cue, no countdown, no price emphasis (the figure keeps the prose face; only `tabular-nums` is applied) |
| DD-12, DD-13, R11 | Header holds the lockup, "Current families" and "Contact admissions"; no menu, no phone number; not sticky |
| DD-19 | Departures listed below with reasons |
| DD-21 | The choice component is a table row of school columns: a third campus is a third `<th scope="col">` and a third `<td>` per row; the stacked form already labels every cell with its school name, so it scales to N without redesign. At three or more columns the table form needs a wider breakpoint, measured then (R6) |
| DD-23, REQ-011 | Doors on the first screen; the compare anchor above the table; the CTAs repeated in the foot row with `data-placement="after_comparison"` |
| DD-25, REQ-070 | Every application link carries `?school=`; `school=` is DD-25's convention pending S5 |
| DD-29 | Every screen carries a fact: the first screen carries the two door lines and, at V16, two ledger rows |
| DD-38 (b), R4, R5 | Literata 400 display (the 300 candidate is left for the DD-38 test); the fluid scale; prose at 1.5; the h1 clamp adjusted on phones as R5 allows, with computed and measured line counts as evidence |
| DD-39 (a), RF-07 | `--color-on-navy` on the navy CTAs and footer; `--color-text-muted-on-dark` for the footer facts block (a new tint, DD-19 departure); focus per K3 section 5d |
| DD-42 (a), RF-25, AD-11 | No photograph; parity rule kept for the photographed state (both doors or neither) |
| DD-43 (a) | The three shared rows repeat their value in both columns; no "Same" cell anywhere |
| DD-44 | V18 reflow and V19 zoom are reported, not fold-tested |
| MD-02, R14, REQ-002 | Secondary CTAs in `copy.md` section 6 wording, including "Ask about a tour of the Georgetown campus" |
| MD-17, MD-16 | One provenance line, small and muted, directly under the h1; every figure on its own register row |
| MN-16 (a), RF-53, R8, R9 | No transitions or keyframes; colour and layout changes instant; reduced motion zeroes every duration and disables smooth anchor scroll |
| D-031, D-039 | Still direction, so D-031 grants nothing this mock needs; the no-JavaScript state is the shipped state and is complete |
| D-015 (c) | TEFA module visible to everyone, `data-region-source="default"` |
| R6 | Breakpoint measured from the content in the runner: 900px for this copy (the Georgetown CTA label inside two equal door cells), replacing the five earlier mocks' 767px |
| REQ-012, REQ-015 | Ten-second choice from the two header cells; no horizontal overflow at V18 (320px) or at a 32px root font at 375px (runner) |
| REQ-022, DEL-018 | Figures on the page: 90th percentile (CR-011), $10,400 (CR-021, with CR-022 in conflict), four weekends (CR-032), 9 to noon and about two hours (CR-033), two to three hours (CR-034), weekly check-ins (CR-035). All six rows are "Unverified, public"; allowed in a mock, blocked for production |
| REQ-024 | Phone rows V2 to V8 with 24px headroom stand in for the in-app browsers until measured (R7) |
| SE-13 | `noindex, nofollow` |
| K6 section 5b | Equal weight: same structure, type, padding and CTA style in both header cells; the cells share one row height in the table form and one grid row in the two-up form, and the CTAs share one baseline (`margin-top: auto` in a flex column filling the cell; measured identical CTA bottoms at V11 to V17); each line names both place and format; CTA labels are full school names plus a verb matching the destination; the anchor is styled as an in-page link (underlined text, not a button) and the doors repeat after the table so the anchor is a loop |
| K6 section 5d | Two items; options as columns; nine rows; `<th scope="row">` labels; stacked below the breakpoint with the school name on every cell; no horizontal scroll |
| K3 sections 5c to 5g | Text `--color-text`; muted `--color-text-muted` (6.25 on bg); on-navy 14.58; the accent never as text; focus 2px `--color-focus` at 2px offset on light surfaces, two-colour ring (2px `--color-on-navy` inner band, 4px `--color-navy` shadow band) in the footer and on the skip link; `forced-colors` fallback outlines in `CanvasText` |

## Layer-2 tokens used (proposed rows, `TOKENS-V2.md`)

| Token | Where | Register row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | Every type size | DD-38 (b), R5 |
| `--leading-prose` | Door lines, table cells, anchor, facts, steps, TEFA body, footer facts | DD-38 (b), RF-58 |
| `--measure-prose` | Sources line, lead, steps list, link rows, families copy, footer facts | RF-55 |
| `--color-on-navy` | Text on the navy CTAs and footer; inner band of the two-colour ring | DD-39 (a), RF-07 (existing swatch in a new role) |
| `--color-text-muted-on-dark` | Footer facts block | DD-39 (a), RF-07 (new tint, DD-19 departure) |
| `--duration-none` | Reduced-motion block | MN-16 (a), RF-53, R8 |

Not used: `--color-accent-text`, `--color-border-strong`, `--color-on-accent`, `--color-focus-on-dark` (the straddling ring uses the K3 section 5d pair `--color-on-navy` and `--color-navy` instead), `--ease-standard`, `--ease-out`, `--ease-in` (nothing transitions). Every `var()` in `styles.css` (38 names) resolves to a token defined in `tokens-v2.css`; no raw colour.

## Fold: the estimate designed to, and the measured result

Method for the estimate: CONTRACT section 2, with the h1 line counts computed from Literata Regular's advance widths (greedy word wrap, kerning ignored, so widths are slightly over-estimated) rather than the 0.512em mean; the other strings the same way in Inter Tight and Inconsolata. Header 56. Phone rows (stacked form): masthead padding 16, h1 as above, provenance 8 + 18, section padding 16, anchor 44 (a 44px target holding one or two 14px lines) + 8 + 3px rule = 55, table margin 8, each compact door 8 + label 15 + 4 + name 25 + 8 + CTA 44 + 8 = 112, 8 between the doors. Laptop rows (table form): masthead padding 24 (32 at 1440), provenance 26, section padding 24 (32 at 1440), anchor 55, table margin 8, header row = 16 + label 15 + 4 + name 29 + 8 + line + 16 + CTA 44 + 16, where the Georgetown line is 3 lines (80px) in a 442px cell at V14 and 81px at V16. The CTA bottom is the door's bottom minus its padding. The measured column is the runner's `qa/fold.md` (bottom of the second CTA).

| Row | Viewport | Limit | Estimate: sum | Estimate: CTA-2 bottom | Measured CTA bottoms (Georgetown, Anywhere) | Result |
|---|---|---|---|---|---|---|
| V2 | 375 by 629 | 605 | 56 + 16 + 167 + 26 + 16 + 55 + 8 + 112 + 8 + 112 = 576 | 568 | 424, 549 | Pass, 56px headroom (the h1 rendered 5 lines, not the computed 6; the brief's own estimate was 565 with a 155px h1) |
| V5 | 414 by 715 | 691 | 56 + 16 + 141 + 26 + 16 + 55 + 8 + 112 + 8 + 112 = 550 | 542 | 427, 552 | Pass, 139px headroom; compact form because 715 is under the 800px threshold |
| V14 | 1280 by 720 | 696 | 56 + 24 + 199 + 26 + 24 + 55 + 8 + 228 = 620 | 604 | 605, 605 | Pass, 91px headroom; row 1 is cut at 720, no false floor |
| V16 | 1440 by 900 | 876 | 56 + 32 + 212 + 26 + 32 + 55 + 8 + 229 = 650 | 634 | 637, 637 | Pass, 239px headroom; rows 1 and 2 complete, row 3 cut |

The other rows, measured:

| Row | Viewport | Limit | Measured CTA bottoms | Result |
|---|---|---|---|---|
| V1 | 360 by 740 | 716 | 451, 576 | Pass |
| V3 | 390 by 664 | 640 | 425, 551 | Pass |
| V4 | 393 by 659 | 635 | 426, 551 | Pass |
| V6 | 412 by 839 | 815 | 507, 713 | Pass (lines inside the doors: 839 is over the 800px threshold) |
| V7 | 402 by 681 | 657 | 426, 551 | Pass |
| V8 | 430 by 739 | 715 | 428, 553 | Pass |
| V9 | 390 by 844 | emptiness only | 506, 711; page height 5487 | Not empty: the first ledger row begins under the doors and is cut at 844 |
| V10 | 750 by 342 | 318 | 402, 402 | **Fails by 84px.** Header 56, the h1 (143px at 27.6px, four lines under the 35ch cap), provenance, the anchor and one two-up door row cannot fit 318px in any arrangement of this direction's required elements: at their minimum they sum to 56 + 95 + 26 + 33 + 112 = 322 before a single gap. The shared M01 form is 335 at the same row. A matrix finding for the director, not a fix this mock can make |
| V11 | 768 by 1024 | 1000 | 549, 549 | Pass (two-up form) |
| V12 | 834 by 1194 | 1170 | 530, 530 | Pass (two-up form) |
| V13 | 1024 by 768 | 744 | 581, 581 | Pass |
| V15 | 1366 by 648 | 624 | 613, 613 | Pass by 11px: the tightest laptop row |
| V17 | 1920 by 960 | 936 | 637, 637 | Pass; content capped at 1376px, three rows complete below the doors |
| V18 | 320 by 256 | reflow only | 540, 665; scrollWidth 320 | No horizontal scroll; the header grows to 93px as the two utility links wrap |
| V19 | 1024 by 576 | 552, reported | 581, 581; scrollWidth 1024 | Over by 29px, reported per DD-44; no horizontal scroll |

Breakpoints: table form at 900px and above; two-up stacked form from 736 to 899px (the narrowest width at which "Explore the Georgetown campus" stays on one line in two equal doors: 268px of label and arrow, 32px of CTA padding, 32px of door padding, twice, plus the 8px gap and the page margins); single-column stacked form below 736px; compact doors on stacked viewports under 800px tall.

## Motion spec

| What | Trigger | Duration | Easing | Reduced motion |
|---|---|---|---|---|
| Nothing animates. No `transition`, no `@keyframes` | | | | |
| V1 door and row state: CTA label underline on hover; zebra row darkens to `--color-surface` on hover | Hover | Instant (0 ms) | none | Unchanged, state visible |
| V3 focus: 2px `--color-focus` ring at 2px offset; two-colour ring in the footer and on the skip link | Focus | Instant | none | Unchanged |
| V7 disclosure | Not used; nothing on the page is collapsed | | | |
| V10 anchor scroll to `#compare` | Click on the anchor sentence | Native `scroll-behavior: smooth`, inside `prefers-reduced-motion: no-preference` only | Browser | `scroll-behavior: auto` |
| Reduced-motion block | | `transition-duration: var(--duration-none)` and `animation: none` on every element and pseudo-element; the runner found every computed duration at 0s | | |

## Assets

| Asset | Where | Alt | Consent | Fallback |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` (139 by 32) | Header lockup on `--color-bg`, 104px wide below 768 and 139px above; footer, on a `--color-bg` plate inside the navy panel | "GT School" | Brand mark published by GT | none needed |
| `../shared/img/gt-anywhere-logo-h.svg` (252 by 48; white lettering, orange mark) | Footer, directly on the `--color-navy` panel, 200px wide | "GT Anywhere" | Brand mark published by GT | none needed |
| Door icons | Two inline SVG glyphs (place pin, signal arcs), 14px, `currentColor`, `aria-hidden` | none (decorative) | Drawn for this mock | none needed |
| Photographs | None. Default state per DD-42 (a) and RF-25: every file in `ASSETS.md` shows identifiable children and no written permission exists | | | The default state is the fallback |

Photographed state, specified for after RF-25 and not built: a 3:2 thumbnail 120px tall (180 by 120 CSS pixels) at the top of each header cell, `georgetown-science.webp` (1440 by 1208, 3:2 crop at `object-position: 50% 45%`, well inside the 720px DPR-2 maximum) with the caption "Students run a science experiment." from `copy.md` section 9, and a Nari-confirmed GT Anywhere photograph with its caption recorded in section 9 first; parity enforced, both thumbnails or neither (DD-42). The thumbnails add 120 + 8 = 128px to the header row, which V14 (91px headroom) and V15 (11px) do not have; in the photographed state the thumbnails would have to stay off viewports under 800px tall or the laptop folds be re-measured. Consent status for any photograph: "published by GT on its own site, consent to be confirmed by Nari (AD-11)".

## Departures

| # | Departure | Reason |
|---|---|---|
| 1 | h1 at `--text-2xl` below 768px (CONTRACT type role says `--text-3xl`) | Computed 7 lines (219px) at V2 breaks the 605 limit once the anchor sentence sits above the doors; 6 computed and 5 measured lines at `--text-2xl`. R5, DD-19 |
| 2 | Compact-door threshold at 800px tall, not the contract's 700 | The door lines are 3 lines (72px) at 16px on phones up to 430px wide, not 2 (54px); with lines inside the doors V5 sums to 723 of 691 and V8 to 719 of 715. V6 (839) and V9 (844) keep the lines inside the doors |
| 3 | The two door lines exist twice in the DOM: inside each header cell (shown at 900px and above and on stacked viewports 800px tall and over) and as a second `thead` row of two `td` cells opened by the school name in Inter Tight 500 (shown only on stacked viewports under 800px tall). Exactly one copy is displayed at any viewport | The compact door rule needs both lines to follow the second CTA, while the brief needs each line inside its header cell. A single-copy alternative (overlapping the two `th` boxes with `grid-template-rows: subgrid` and `pointer-events: none`) was rejected as fragile for hit testing and screen readers. Screen readers meet one copy: label, name, CTA in the header cells under 800px tall, then the two lines; label, name, line, CTA otherwise |
| 4 | Breakpoint 900px and a two-up stacked form from 736 to 899px (the five earlier mocks used 767px) | R6: the runner showed the Georgetown CTA wrapping to two lines in the table form at 768px, so the doors were unequal. Between 736 and 899px the stacked blocks are two abreast (doors side by side, each row's two cells side by side under the row label, foot CTAs side by side), with the table semantics and roles unchanged |
| 5 | `caption` and the section's h2 "Compare the two" are visually hidden | The anchor sentence and the two header cells already title the table for sighted readers; a visible caption line costs 23px at V2. Both remain in the accessibility tree |
| 6 | `--color-text-muted-on-dark` (#a3bfcb in `tokens-v2.css`) on the footer facts block | New tint proposed under DD-39 (a), RF-07; 7.81 on navy. DD-19 departure |
| 7 | Zebra stripe as `color-mix(in srgb, var(--color-surface) 50%, var(--color-bg))` | The brief's "50 percent of `--color-surface`" has no token; the mix is computed from two tokens, no raw value |
| 8 | Table roles (`role="table"`, `rowgroup`, `row`, `columnheader`, `rowheader`, `cell`) and `abbr` on the two door cells | The stacked form sets `display: block` and `grid`, which strip native table semantics in the accessibility tree; explicit roles keep them (WAI tables tutorial, K6 C25). `abbr` gives screen readers a short column name ("Georgetown Campus") when they reference the header from a data cell, instead of label, name, line and CTA text |
| 9 | Image render widths 104px, 139px, 200px; icon 14px; h1 `letter-spacing: -0.01em`; label tracking 0.06em and eyebrow 0.08em; 1px hairlines, 2px and 3px rules, 44px targets, the 35ch cap and the breakpoint values are literal lengths | Image, glyph, rule and target dimensions are not in the token set (BUILDER-BRIEF rule 14 governs colour, type, space, radius, shadow and duration, all of which are tokens here); tracking is inside the contract's 0.06 to 0.08em range |
| 10 | 3px `double` rule in `--color-border` under the foot row | The ledger's closing convention; not an accent use (border colour) |
| 11 | Skip link text "Skip to main content" | The only string not in `copy.md`; required by BUILDER-BRIEF rule 11 and checker R9 |
| 12 | Door icons are two drawn glyphs, not `gt-icon.svg` | The same mark on both doors would not tell them apart (DD-04 wants a distinguishing cue) |
| 13 | Door name at `--text-lg` (CONTRACT says `--text-xl`) | The brief's Typography row is binding and says `--text-lg` |
| 14 | Application CTAs and "Go to the family hub" are outlined navy, the door CTAs filled navy | Two tiers: explore (filled, the page's primary action) and apply or go (outlined); secondary CTAs are text rows |
| 15 | Column headers are not sticky (K6 section 5d lists sticky headers for the table form) | The header cells are the 228px doors; sticking them would cover a third of the 720px laptop screen while the ledger is only nine rows and the stacked form labels every cell |
| 16 | An empty `td` in the corner of the header and foot rows | The standard corner cell; no word exists in `copy.md` to label it and none is needed |
| 17 | The footer marks load eagerly (no `loading="lazy"`), against BUILDER-BRIEF rule 13's default | The GT Anywhere mark appears only in the footer; lazily loaded, it was absent from the runner's full-page capture (the GT School mark, cached from the header, was not). Two SVGs of 8 and 10 KB; checker R13 exempts SVG logos from the eager count |
| 18 | The header may grow above 56px: at 320px wide the two utility links stack (93px), and at a doubled root font they wrap | Logo plus both links need 312px at 360px wide with Inter Tight 500's real widths; the mark keeps its size and the nav gives way, so nothing overflows (runner: no horizontal scroll at V18 or at a 32px root) |

## Flagged slots

| Slot | Default shown | Flag |
|---|---|---|
| "Current families" destination | https://community.gt.school | Q-002 |
| Application steps, same for both schools | The four `copy.md` steps | Q-007 |
| Georgetown tuition | "Tuition on request. Ask admissions." | Q-011 decided (G0.5 item 4); figure awaited from Nari |
| After 8th grade | "Families plan the path after 8th grade with admissions." | Q-013 |
| Intensive weekends logistics | "Four intensive weekends a year in Georgetown." | Q-017; CR-032 |
| Outcome figure | Absent | Q-019, G0.5 item 2; never on the page |
| TEFA window, owner, expiry | Module shown to everyone with the `copy.md` body | Q-021; D-015 (c) |
| Accreditation | Absent | Q-033, G0.5 item 3; never on the page |
| Title for the adults | Guides | Q-035 decided; Anywhere still says Advisors live |
| Secondary CTA destinations | gt.school/contact and anywhere.gt.school/academics | MD-02 HubSpot meeting link TBD; R14 tour label; REQ-002 (`/book-a-tour` is 404) |
| Application links | `apply.gt.school/?school=georgetown|anywhere` | DD-25 convention; the live parameter is confirmed in S5 |
| Figures | 90th percentile (CR-011), $10,400 (CR-021), four weekends (CR-032), 9 to noon and about two hours (CR-033), two to three hours (CR-034), weekly check-ins (CR-035) | All "Unverified, public"; CR-021 and CR-022 conflict on TEFA coverage; no cohort number because CR-025 and CR-026 conflict |
| Holly's unifying brand element | Not present | Q-001 |
| Display weight | Literata 400 | DD-38 tests 300 against 400 in this wave |
| Photographs | None | DD-42, RF-25, AD-11 |
| Scripts | None | D-039 escalated; no-JavaScript state shipped |
| Mobile breakpoint | 900px, measured on this content in the runner | R6 |

## Parent questions (`0_plan/05` section 6c, from `1_spec/01`)

| PQ | Question | Where this page answers it |
|---|---|---|
| PQ-01 | What is GT School? | h1 |
| PQ-02 | Is it for my child? | h1 ("gifted and talented"); Admissions row; proof fact 1; steps lead |
| PQ-03 | In person or online: what are my options? | The two header cells |
| PQ-04 | Where is the campus? | h1, Georgetown door line, "Where and how" row |
| PQ-05 | What does a day look like? | "The day" row, both columns |
| PQ-06 | What does it cost, and can TEFA help? | "Tuition and access" row; TEFA module |
| PQ-07 | How do I apply? | "How to apply" and the two application links |
| PQ-08 | Who teaches my child? | "Guides" row; proof fact 3 |
| PQ-09 | How much in-person time does GT Anywhere have? | "In-person time" row; GT Anywhere door line |
| PQ-10 | What results does the school get, and is it accredited? | Deferred by decision (G0.5 items 2 and 3): the page is silent; admissions answers it ("Talk to admissions") |
| PQ-11 | What happens after 8th grade? | "After 8th grade" row, deferred to admissions (Q-013) |
| PQ-12 | I am a current family, where do I go? | Header link; "Current families" section; footer |
| PQ-13 | I am not ready to apply, what can I do? | "More ways to connect" |
| PQ-14 | Is GT School part of Alpha School? | Provenance line |

Deferred to the school sites: everything behind the door CTAs (curriculum detail, calendars, Guides' names, intensives dates, the FAQ), because the landing routes and the sites explain (DD-22).

## Taste decisions the brief did not name

| # | Decision | Reason |
|---|---|---|
| 1 | The door CTAs are full-width navy bars inside their cells, label left and arrow right | Identical size for both doors regardless of label length (K6 section 5b); reads as the two thresholds of the ledger; one baseline via `margin-top: auto` in a flex column filling the cell |
| 2 | The 3px accent rule runs the full content width under the anchor sentence and is the ledger's top edge | One accent use doing two jobs: marking the anchor and opening the table |
| 3 | On phones the two doors are full-bleed tinted bands whose content keeps the page margin; the zebra rows do the same | Edge-to-edge surfaces give the CTA the full 327px at V2 (the Georgetown label needs 265px in Inconsolata) and keep the ledger's left edge aligned with the h1 |
| 4 | Two-up stacked form from 736 to 899px | Portrait tablets and landscape phones get the comparison side by side without the table form's cramped door cells; the row label spans both cells as a small heading |
| 5 | The anchor is a 44px flex target aligned to its bottom edge, balanced across two lines on the narrowest phones | Meets the matrix's 44px rule for every interactive target without adding height when the sentence is two lines; `text-wrap: balance` removes the orphan "two." at V2 |
| 6 | Foot row repeats the CTAs under a 3px double rule | DD-23's repetition as the ledger's total line |
| 7 | The tail is a grid in the table's proportions: sources under the label and Georgetown columns, the TEFA module under the GT Anywhere column on its tint | The TEFA note belongs to GT Anywhere; keeping it in that column continues the ledger's logic |
| 8 | Facts as one four-column ledger row at 1024 and above, two by two on tablets, stacked on phones, hairlines above and below | The proof strip reuses the row treatment rather than introducing cards |
| 9 | Steps numbered by CSS counters in Inconsolata 600 `tabular-nums` | The deck's own numbering (1 to 4) without figures in the DOM text; the figure face for figures |
| 10 | Secondary CTAs as COLLINS rows in Literata `--text-md` with an arrow at the right | The one place the serif carries a link, to separate "ways to connect" from the mono action buttons |
| 11 | Header links at `--text-xs` below 768 with 2px side padding, the lockup 104px wide and fixed | Logo plus both links need 312px at V1 with Inter Tight 500's real widths; 44px height kept on both links |
| 12 | `→` arrows are `aria-hidden` glyphs after CTA labels | Carry-forward marks in a ledger; screen readers hear the label only |
| 13 | Hover on the navy CTAs is an underline, not a fill change | An instant state change that needs no new colour role |
| 14 | Footer on navy with the GT School mark on a `--color-bg` plate and the GT Anywhere mark directly on the panel; facts block muted, links and phone in on-navy | `copy.md` section 8 logo rule; hierarchy in the footer without new colours |
| 15 | Row label column 23 percent, school columns 38.5 percent each, `table-layout: fixed` | The two doors read as equal columns; row labels never wrap awkwardly at 900 |
| 16 | h1 capped at 35ch | The contract's measure for the display role; at 1440 the 8-column span (907px) would exceed it by 22px |

## Self-check

Run from the repo root on 2026-09-11 against the final files. Output pasted verbatim.

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M06-the-ledger --all`

```
## M06-the-ledger: 36 pass, 0 fail
  PASS R1 no forms
  PASS R2 one JSON-LD script only — 1 script tags
  PASS R20 D-039 declaration valid and named in the rationale
  PASS R3 external hosts
  PASS R3b local assets only
  PASS R4 no placeholder text
  PASS R5 numbers on the whitelist
  PASS R6 no "advisor" in text
  PASS R7 full names — Georgetown Campus x7, GT Anywhere x13
  PASS R8 title — GT School: a selective school for gifted children, in Georgetown, Texas and onli
  PASS R8 robots noindex
  PASS R8 canonical
  PASS R8 description
  PASS R8 open graph
  PASS R8 JSON-LD organization
  PASS R8 JSON-LD no claims
  PASS R9 lang
  PASS R9 one h1 — 1 h1
  PASS R9 skip link
  PASS R9 landmarks
  PASS R9 alt on every image — 3 images
  PASS R9 table caption and scope
  PASS R9 focus-visible styled
  PASS R10 transitions within budget
  PASS R10 no keyframe animation
  PASS R10 reduced-motion block covers pseudo-elements
  PASS R11 raw colors declared — 0 raw hex in styles.css:
  PASS R12 data-event coverage
  PASS R13 image dimensions — 0 without width/height
  PASS R13 at most two eager photos (the first screen); svg logos exempt — 0 eager
  PASS R17 no unscoped application link — apply.gt.school link without school=
  PASS R18 provenance line once — 1 occurrences
  PASS R19 compare anchor before the table
  PASS R16 real logos in header and footer — GT School and GT Anywhere logo SVGs required
  PASS R14 size under 1 MB — 33 KB
  PASS R15 rationale sections

check-mocks: OK
```

### `python3 1_spec/tools/check-claims.py 0_plan/mockups/M06-the-ledger/index.html`

```
## 0_plan/mockups/M06-the-ledger/index.html
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

The default run over every `0_plan/mockups/M*/index.html` also ends `check-claims: OK`.

### BUILDER-BRIEF greps

| Check | Result |
|---|---|
| `grep -c "<form" index.html` | 0 |
| `grep -c "<script" index.html` | 1 (JSON-LD) |
| Hosts in `href` and `src` | anywhere.gt.school, apply.gt.school, community.gt.school, gt.school, www.gt.school, schema.org (JSON-LD context) |
| Numbers in visible text | 09, 10, 10,400, 2026, 270, 512, 8, 9, 90, 9481 (all on the whitelist) |
| "advis" in visible text | 0 (the `data-type="advisor"` attribute is allowed) |
| Raw hex in `styles.css` | 0; every `var()` (38) defined in `tokens-v2.css` |
| `transition:` declarations | 0 |
| Fixed slots | 50 strings from `copy.md` sections 0 to 8 found verbatim; page words outside `copy.md`: "skip", "main", "content" (the skip link) |
| Size | 36 KB for `index.html` plus `styles.css`; `qa/` 1.8 MB of captures |

### Runner: `node 0_plan/tools/shots.mjs 0_plan/mockups/M06-the-ledger --all` (final pass, `qa/fold.md` verbatim)

```
| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 56 | 238 | 263 | 451 | 576 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 211 | 236 | 424 | 549 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 212 | 237 | 425 | 551 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 212 | 237 | 426 | 551 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 213 | 238 | 427 | 552 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 213 | 238 | 507 | 713 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 212 | 238 | 426 | 551 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 214 | 239 | 428 | 553 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 212 | 237 | 506 | 711 | yes | report: page height 5487 |
| V10 | 750 by 342 | fold | 318 | 56 | 199 | 225 | 402 | 402 | yes | FAIL over: cta-georgetown, cta-anywhere |
| V11 | 768 by 1024 | fold | 1000 | 56 | 229 | 255 | 549 | 549 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 235 | 261 | 530 | 530 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 284 | 581 | 581 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 305 | 605 | 605 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 286 | 312 | 613 | 613 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 300 | 326 | 637 | 637 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 326 | 637 | 637 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 93 | 302 | 345 | 540 | 665 | yes | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 284 | 581 | 581 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Console

PASS: no console errors.

## Result: 1 failure(s)
```

The one failure is V10, explained in the fold table. Captures: `qa/V1.jpg` to `qa/V19.jpg` (viewport), `qa/V2-full.jpg` and `qa/V14-full.jpg` (full page), `qa/V2-rootx2.jpg` (32px root).

### Pending for the director

Critics' scores (both at or above 4, Objective expected at 5); the screen-reader pass on the stacked and two-up forms (header cells announcing label, name and CTA in order); a `forced-colors: active` capture; text contrast from computed colours (the K3 section 5c arithmetic is cited, not re-measured); 200 percent browser zoom at V14 (the runner covers V19 as the 125 percent stand-in and the doubled root at V2); the scroll videos at V3 and V16; the in-app browser measurements under REQ-024; and a decision on V10, which no direction with a header, the h1, the provenance line and two labelled doors can pass at 318px.
