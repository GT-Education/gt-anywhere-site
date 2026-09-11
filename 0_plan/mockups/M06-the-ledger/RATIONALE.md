# M06 The Ledger: rationale

| Field | Value |
|---|---|
| Mock | M06 "The Ledger", `0_plan/mockups/M06-the-ledger/` (`index.html`, `styles.css`, this file, `qa/`) |
| Brief | `0_plan/kb/briefs/M06.md` under `CONTRACT.md` v2.1 (with the phone-landscape recipe in section 2); runbook `0_plan/17-design-studio-runbook.md` sections 4, 6, 7 |
| Built | 2026-09-11, design engineer (Fable fork). Build pass, then iteration 1 after both critics (`0_plan/ensemble/critic-fable-M06.md`, `critic-astra-M06.md`; Astra scored Objective 3 and Craft 3). The runner `node 0_plan/tools/shots.mjs 0_plan/mockups/M06-the-ledger --all` (Playwright from the npx cache, headless Chromium) measured the 19 matrix rows on every pass and wrote `qa/V1.jpg` to `qa/V19.jpg`, `qa/V2-full.jpg`, `qa/V14-full.jpg`, `qa/V2-rootx2.jpg`, `qa/focus-cta.jpg`, `qa/focus-footer.jpg`, `qa/forced-colors.jpg` and `qa/fold.md`. No other browser tool was used |
| State | No JavaScript (D-039 undecided: no `data-d039` declaration, one JSON-LD script). No photograph (DD-42 default state, RF-25). Copy: `copy.md` v1.1 sections 0 to 8 verbatim; from section 9 only the skip-link label |
| Tokens | `../shared/tokens-v2.css`. Layer-2 tokens used are listed with their register rows below (`TOKENS-V2.md` rule) |

## Iteration 1 (2026-09-11), what changed and why

| # | Critic finding | Change | Measured result |
|---|---|---|---|
| 1 | Objective (Astra 3, Fable 4): V10 750 by 342 failed, both CTAs at 402 against 318 | CONTRACT section 2 phone-landscape recipe in `(min-width: 600px) and (max-height: 400px)`: masthead padding `--space-3`, h1 at `--text-xl` across the full 702px column (35ch cap lifted), provenance and anchor on one row, doors side by side with label and name on one line and 8px side padding, lines below the fold | V10 CTA bottoms 297 and 297 of 318; h1 3 lines (83px) |
| 2 | Craft (Astra 3, Fable 4): at a 32px root "Contact admissions" printed over the mark; foot-row CTAs began 16px left of the header CTAs | The header bar wraps: when the two links cannot sit beside the lockup the whole nav drops to its own row under the mark, right-aligned, and wraps its two links if that row is still too narrow; the mark never shrinks. Foot-row cells take the door cells' 16px inset | `qa/V2-rootx2.jpg`: mark on row one, the two links on their own rows beneath, nothing overlapping; runner: no horizontal scroll at a 32px root. `qa/V14-full.jpg`: foot CTAs flush with the header CTAs |
| 3 | Composition (4): 79 to 87px of the laptop fold went to the anchor block and its gaps; facts arrived late | At 1024px and above and in the landscape recipe the provenance and the anchor share one 44px row (provenance left, anchor right over the school columns); the 3px accent rule closes that row and is the table's top edge (table margin 0); the ledger section has no top padding; laptop masthead padding 16 | V14 doors end at 583 (was 621): row 1 complete, row 2 cut. V16 doors end at 614 (was 653): rows 1 to 3 complete, row 4 cut. V15 headroom 49px (was 11). V19 CTAs 543 of 552, now inside the reported limit |
| 4 | Typography (4): the anchor at `--text-sm` could not rank above the provenance line | Anchor at `--text-md` (18 to 20px), provenance kept at `--text-sm`; `--text-sm` only in the landscape recipe so the row fits 702px | V2 CTA bottom 560 (was 549), 45px headroom |
| 5 | Imagery (4): 14px muted glyphs too faint at 1x and invisible in forced colours | Glyphs at 1.25rem in `--color-text` beside the label | `qa/V2.jpg`, `qa/V14.jpg`, `qa/forced-colors.jpg` |
| 6 | Mission (Astra 4): the sources' destinations were plain text (C04's evidence link missing); the phone comparison ran past two screens with nothing collapsed | The five source phrases in both sources lines are links to the pages they name (the sentence stays verbatim); the three two-sentence rows (Same school, Admissions, The day) are native `<details>` disclosures on the stacked forms, one per cell with the school name as the summary, opened instantly (V7), content always shown in the table form | `check-claims.py` OK, sources line verbatim twice (tags stripped); page height at 390 by 844 down from 5487 to 5211px |
| 7 | Rationale facts | V10 h1 figure corrected to the measured value; the claim that no direction can pass V10 removed (M03 passes); the doubled-root claim corrected; S5 expanded; skip-link label credited to `copy.md` section 9; shorthand paths expanded; forced-colours capture no longer listed as pending; N-campus behaviour stated as designed for, not demonstrated | This file |

## Direction

Lens order L1 objective, L4 exclusivity, L3 mission, L2 continuity. Thesis: the comparison table is the page. A parent deciding between in person and online wants the facts side by side before anything else, and GT School is confident enough to lead with them (K6 sections 2d and 5b; DD-06, DD-23, DD-43).

The first screen is header, h1, then one row holding the provenance line and the fixed compare anchor sentence (stacked on phones, side by side from 1024px and in landscape), closed by a 3px accent rule that is both the page's single accent use and the ledger's top edge, then the ledger itself: a real `<table id="compare">` whose two `<th scope="col">` cells are the doors. Each holds label with glyph, name, line and CTA in that order, so the doors and the column headers are one element and a parent who reads down a column is reading the school she is about to choose. The body rows are `copy.md` section 3 in the deck's order, shared rows first with their values repeated in both columns (DD-43), separated by hairline rules in COLLINS's list treatment (C21); the two header cells are CGA's explicit, parallel, labelled options (C31); the sources line under the table is Vanguard's footnoted disclosures block (C04), its five source phrases linked to the pages they name. The table closes with a foot row that repeats both door CTAs under a double rule (DD-23, `data-placement="after_comparison"`), the accounting convention for a total. Nothing on the page moves.

## h1

The umbrella sentence, `copy.md` section 1, is the one `<h1>` (`data-fold="h1"`), Literata 400 at `--leading-tight` across 8 of 12 columns at 1024px and above, full content width below, capped at 35ch. Below 768px it is set at `--text-2xl` rather than the contract's `--text-3xl`: computed with Literata Regular's own advance widths (the site's TTF, greedy wrap, no kerning), the 132-character sentence at `--text-3xl` (27.26px) in the 327px column of V2 wraps to seven lines (219px), not the contract's six (188px), and the contract's own M12 measurement confirms seven; at `--text-2xl` (24.14px) the same method gives six lines and the browser, with kerning, rendered five (139px). R5 makes the clamp a working default adjustable per brief, and the anchor sentence above the table costs this direction a row the shared M01 form does not pay, so the phone h1 gives that height back. In the landscape recipe (600px and wider, 400px and shorter) the h1 steps to `--text-xl` across the full column, as CONTRACT section 2 permits for one row, declared below. `text-wrap: balance` evens the line lengths (it never adds a line) and removes the single-word last line ("anywhere.") the greedy wrap produces at V2. Every visible h2 is an allowed heading from `copy.md`; the compare section's h2 "Compare the two" is visually hidden so no heading level is skipped before the TEFA module's h3.

| Row | Size | Column | Lines, computed from glyph metrics | Lines, measured by the runner (h1 bottom minus header and masthead padding, over size times 1.15) | Height |
|---|---|---|---|---|---|
| V2 375 by 629 | 24.14px (`--text-2xl`) | 327px | 6 | 5 (211 − 56 − 16 = 139px) | 139px |
| V5 414 by 715 | 24.50px | 366px | 5 | 5 (213 − 72 = 141px) | 141px |
| V10 750 by 342 | 24.17px (`--text-xl`, landscape recipe) | 702px, cap lifted | 3 | 3 (147 − 56 − 8 = 83px) | 83px |
| V14 1280 by 720 | 43.19px (`--text-3xl`) | 800px (8 of 12 columns of 1216, 32px gutters) | 4 | 4 (271 − 56 − 16 = 199px) | 199px |
| V16 1440 by 900 | 46.00px | 907px (8 of 12 columns of 1376), capped at 35ch | 4 | 4 (300 − 56 − 32 = 212px) | 212px |

## Brief compliance

| Brief section | Built | Status |
|---|---|---|
| Mock id, lens order | M06, L1 L4 L3 L2 | Done |
| Thesis | Table as page; doors are the header cells | Done |
| Exemplars | COLLINS rows (hairlines, name left, value right); CGA parallel labelled options (two identical header cells); Vanguard footnote block (sources line under the table, its source phrases linked to the evidence, C04); Caltech's unsourced strip avoided (no figure without the sources line beneath it) | Done; no superscript markers, because a "1" is not on the numbers whitelist and adds no register row |
| Composition | Header 56 (measured 56 at every row but V18, where the nav drops under the mark); h1 across 8 columns at 1024 and above; provenance; the anchor sentence linking to `#compare` on the table, placed before the `<table>` (checker R19), sharing the provenance row from 1024px; `<table id="compare">` with the two `<th scope="col">` doors holding label, name, line, CTA; rows in the deck's order with repeated values; stacked form below the measured breakpoint keeping the table element and ARIA roles; on stacked viewports under 800px tall the doors show label, name, CTA and both lines follow the second CTA; landscape recipe at V10 | Done. Breakpoint measured at 900px, not 767 (R6): at 768 the Georgetown CTA label wrapped inside a 239px door cell. 736 to 899px is a two-up stacked form (doors side by side, each row's two cells side by side under the row label). Rows on the first screen, measured: V14 doors to 583, row 1 complete (695), row 2 cut; V16 doors to 614, rows 1 to 3 complete (872), row 4 cut. The brief's three and five were written to a 159px h1 and a 180px door row; the real ones are 199 and 217 |
| Typography | Label `--text-xs` uppercase muted (Inter Tight 500) with a 1.25rem glyph in `--color-text`; name `--text-lg` Literata; line `--text-base` at `--leading-prose` 1.5; CTA `--text-btn` Inconsolata 600; anchor `--text-md`; row labels `--text-sm` Inter Tight 500; cells `--text-base` at 1.5; `tabular-nums` on the tuition row | Done |
| Color and surface | `--color-bg` page; header cells `--color-surface` and `--color-anywhere-tint`; zebra rows at 50 percent of `--color-surface` via `color-mix()`; rules `--color-border`; one accent use, the 3px rule under the provenance-and-anchor row; CTAs navy fill; focus `--color-focus`; two-colour ring on the footer panel | Done; `qa/focus-cta.jpg`, `qa/focus-footer.jpg`, `qa/forced-colors.jpg` |
| Imagery | Default state: none. Photographed state specified under Assets | Done (default) |
| Motion | Still. Hover and focus are instant colour or underline changes (V1, V3); the three long rows' disclosures open instantly on the stacked forms (V7); V10 native anchor scroll under `no-preference` only. Runner: every computed transition and animation duration is 0s under `prefers-reduced-motion: reduce` | Done |
| Copy | Sections 0 to 8 verbatim (52 slots checked by string match against `copy.md`; the linked sources line checked with tags stripped), the fixed anchor sentence; from section 9 only the skip-link label "Skip to main content" | Done |
| Conversion | Doors as header cells on the first screen; comparison within the first two screens at V14 (doors plus row 1 on screen one) and V16 (doors plus three rows); proof strip with the four facts and the sources line; steps; secondary CTAs with the R14 tour label; current families; footer. On phones the ledger runs about three screens at 390 by 844 (page 5211px, the table roughly 1900px of it) with the three two-sentence rows collapsed | Done on laptops; on phones two screens would need every row collapsed, which I chose not to do (see Not changed) |
| Acceptance | `check-mocks.py` 36 pass, 0 fail; `check-claims.py` OK; the fold rule met at V1 to V17, V10 included; V19 inside its reported limit; no horizontal overflow at any row including V18 and a doubled root font; the stacked forms keep `<table>` semantics with explicit roles; this file names DD-38, DD-39, DD-43 | Checkers and runner as pasted in Self-check; the critics' re-score and the screen-reader pass are pending |

## Decisions applied

| Id | How it is applied in this mock |
|---|---|
| G0.5 items 1 to 6 | Umbrella sentence as the h1; no speed figure; no accreditation claim or mark; "Tuition on request. Ask admissions." in the Georgetown tuition cell; Guides everywhere; the provenance line once, under the h1 (checker R18) |
| DD-04 | Each door carries a text label ("In person", "Online") plus a 20px inline glyph (place pin, signal arcs) in the text colour; tint is the secondary cue; photographs are absent by default (DD-42) |
| DD-06, REQ-013 | Attribute table, shared rows first (Same school, Admissions, After 8th grade), then the rows that differ; readable HTML table with `caption`, `th scope="col"` and `th scope="row"` at every width |
| DD-10, MD-25 | Selectivity is the bar (90th percentile in the Admissions row, the proof strip and the steps lead); access is the story ($10,400 and TEFA stated plainly in the Anywhere tuition cell and the TEFA module); no wealth cue, no countdown, no price emphasis (the figure keeps the prose face; only `tabular-nums` is applied) |
| DD-12, DD-13, R11 | Header holds the lockup, "Current families" and "Contact admissions"; no menu, no phone number; not sticky |
| DD-19 | Departures listed below with reasons |
| DD-21 | Designed for N campuses, not demonstrated: a third campus would be a third `<th scope="col">` and a third `<td>` per row, and the stacked forms already label every cell with its school name. No third column was built because no copy exists for one; at three or more columns the table form would need a wider breakpoint, measured then (R6) |
| DD-23, REQ-011 | Doors on the first screen; the compare anchor above the table on the provenance row; the CTAs repeated in the foot row with `data-placement="after_comparison"` |
| DD-25, REQ-070 | Every application link carries `?school=`; `school=` is DD-25's convention until stage S5 (Harden the winner, `1_spec/00-scope-and-traceability.md`) confirms the live parameter |
| DD-29 | Every screen carries a fact: the first screen carries the two door lines and, at V14, the first ledger row |
| DD-38 (b), R4, R5 | Literata 400 display (the 300 candidate is left for the DD-38 test); the fluid scale; prose at 1.5; the h1 clamp adjusted on phones and in landscape as R5 and CONTRACT section 2 allow, with computed and measured line counts as evidence |
| DD-39 (a), RF-07 | `--color-on-navy` on the navy CTAs and footer; `--color-text-muted-on-dark` for the footer facts block (a new tint, DD-19 departure); focus per K3 section 5d |
| DD-42 (a), RF-25, AD-11 | No photograph; parity rule kept for the photographed state (both doors or neither) |
| DD-43 (a) | The three shared rows repeat their value in both columns; no "Same" cell anywhere |
| DD-44 | V18 reflow and V19 zoom are reported, not fold-tested (V19 happens to pass its limit after iteration 1) |
| MD-02, R14, REQ-002 | Secondary CTAs in `copy.md` section 6 wording, including "Ask about a tour of the Georgetown campus" |
| MD-17, MD-16 | One provenance line, small and muted, under the h1; every figure on its own register row |
| MN-16 (a), RF-53, R8, R9 | No transitions or keyframes; colour, layout and disclosure changes instant; reduced motion zeroes every duration and disables smooth anchor scroll |
| D-031, D-039 | Still direction, so D-031 grants nothing this mock needs; the no-JavaScript state is the shipped state and is complete |
| D-015 (c) | TEFA module visible to everyone, `data-region-source="default"` |
| R6 | Breakpoint measured from the content in the runner: 900px for this copy (the Georgetown CTA label inside two equal door cells) |
| REQ-012, REQ-015 | Ten-second choice from the two header cells; no horizontal overflow at V18 (320px) or at a 32px root font at 375px (runner) |
| REQ-022, DEL-018 | Figures on the page: 90th percentile (CR-011), $10,400 (CR-021, with CR-022 in conflict), four weekends (CR-032), 9 to noon and about two hours (CR-033), two to three hours (CR-034), weekly check-ins (CR-035). All six rows are "Unverified, public"; allowed in a mock, blocked for production |
| REQ-024 | Phone rows V2 to V8 with 24px headroom stand in for the in-app browsers until measured (R7) |
| SE-13 | `noindex, nofollow` |
| K6 section 5b | Equal weight: same structure, type, padding and CTA style in both header cells; one row height in the table form, one grid row in the two-up and landscape forms; the CTAs share one baseline (measured identical CTA bottoms at V10 to V17); each line names both place and format; CTA labels are full school names plus a verb matching the destination; the anchor is styled as an in-page link (underlined text, not a button) and the doors repeat after the table so the anchor is a loop |
| K6 section 5d | Two items; options as columns; nine rows; `<th scope="row">` labels; stacked below the breakpoint with the school name on every cell; no horizontal scroll |
| K6 C04 | Each source phrase in the sources line links to the page it names (anywhere.gt.school/academics, www.gt.school/academics, anywhere.gt.school/intensives, www.gt.school/terms-of-use), with `outbound_school_site` events; the sentence itself is unchanged |
| K3 sections 5c to 5g | Text `--color-text`; muted `--color-text-muted` (6.25 on bg); on-navy 14.58; the accent never as text; focus 2px `--color-focus` at 2px offset on light surfaces, two-colour ring (2px `--color-on-navy` inner band, 4px `--color-navy` shadow band) in the footer and on the skip link; `forced-colors` fallback outlines in `CanvasText` (`qa/forced-colors.jpg`) |

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

Method for the estimate: CONTRACT section 2, with line counts computed from the fonts' own advance widths (greedy word wrap, kerning ignored) rather than the 0.512em mean. Header 56. Phone rows (stacked form): masthead padding 16, h1, row margin 8, provenance 18, anchor margin 16, anchor two lines at `--text-md` (54) or a 44px target when one line, row padding 8, rule 3, each compact door 8 + label 20 + 4 + name 25 + 8 + CTA 44 + 8 = 117, 8 between the doors. Laptop rows (table form): masthead padding 16 (32 at 1440), row margin 8, row 44, padding 8, rule 3, header row = 16 + label 20 + 4 + name 29 + 8 + line (Georgetown, 3 lines: 80px at V14, 81px at V16) + 16 + CTA 44 + 16. Landscape recipe: masthead padding 8, h1 3 lines 83, row 8 + 44 + 8 + 3, door 8 + 27 + 8 + 44 + 8 = 95. The measured column is the runner's `qa/fold.md` (bottom of each CTA).

| Row | Viewport | Limit | Estimate: sum to the second CTA's door bottom | Estimate: CTA-2 bottom | Measured CTA bottoms (Georgetown, Anywhere) | Result |
|---|---|---|---|---|---|---|
| V2 | 375 by 629 | 605 | 56 + 16 + 139 + 8 + 18 + 16 + 54 + 8 + 3 + 117 + 8 + 117 = 560 | 552 | 430, 560 | Pass, 45px headroom |
| V5 | 414 by 715 | 691 | 56 + 16 + 141 + 8 + 18 + 16 + 54 + 8 + 3 + 117 + 8 + 117 = 562 | 554 | 433, 562 | Pass, 129px headroom; compact form because 715 is under the 800px threshold |
| V10 | 750 by 342 | 318 | 56 + 8 + 83 + 8 + 44 + 8 + 3 + 95 = 305 | 297 | 297, 297 | Pass, 21px headroom (landscape recipe; iteration 1) |
| V14 | 1280 by 720 | 696 | 56 + 16 + 199 + 8 + 44 + 8 + 3 + 233 = 567 | 551 | 567, 567 | Pass, 129px headroom; row 1 complete at 695, row 2 cut |
| V16 | 1440 by 900 | 876 | 56 + 32 + 212 + 8 + 44 + 8 + 3 + 234 = 597 | 581 | 598, 598 | Pass, 278px headroom; rows 1 to 3 complete (872), row 4 cut |

The other rows, measured:

| Row | Viewport | Limit | Measured CTA bottoms | Result |
|---|---|---|---|---|
| V1 | 360 by 740 | 716 | 457, 586 | Pass |
| V3 | 390 by 664 | 640 | 432, 561 | Pass |
| V4 | 393 by 659 | 635 | 432, 561 | Pass |
| V6 | 412 by 839 | 815 | 513, 723 | Pass (lines inside the doors: 839 is over the 800px threshold) |
| V7 | 402 by 681 | 657 | 432, 562 | Pass |
| V8 | 430 by 739 | 715 | 434, 564 | Pass |
| V9 | 390 by 844 | emptiness only | 512, 721; page height 5211 | Not empty: the first ledger row begins under the doors and is cut at 844 |
| V11 | 768 by 1024 | 1000 | 546, 546 | Pass (two-up form) |
| V12 | 834 by 1194 | 1170 | 527, 527 | Pass (two-up form) |
| V13 | 1024 by 768 | 744 | 543, 543 | Pass |
| V15 | 1366 by 648 | 624 | 575, 575 | Pass, 49px headroom |
| V17 | 1920 by 960 | 936 | 598, 598 | Pass; content capped at 1376px, four rows complete below the doors |
| V18 | 320 by 256 | reflow only | 546, 675; scrollWidth 320 | No horizontal scroll; the nav drops under the mark, header 93px |
| V19 | 1024 by 576 | 552, reported | 543, 543; scrollWidth 1024 | Inside the limit by 9px; no horizontal scroll |

Breakpoints: table form at 900px and above; two-up stacked form from 736 to 899px (the narrowest width at which "Explore the Georgetown campus" stays on one line in two equal doors); single-column stacked form below 736px; compact doors on stacked viewports under 800px tall; landscape recipe at 600px and wider when 400px or shorter.

## Motion spec

| What | Trigger | Duration | Easing | Reduced motion |
|---|---|---|---|---|
| Nothing animates. No `transition`, no `@keyframes` | | | | |
| V1 door and row state: CTA label underline on hover; zebra row darkens to `--color-surface` on hover | Hover | Instant (0 ms) | none | Unchanged, state visible |
| V3 focus: 2px `--color-focus` ring at 2px offset; two-colour ring in the footer and on the skip link | Focus | Instant | none | Unchanged |
| V7 disclosure: the three long rows' `<details>` on the stacked forms; the chevron turns by a static transform | Tap or Enter on the summary | Instant (native `open` toggle, no animation) | none | Unchanged |
| V10 anchor scroll to `#compare` | Click on the anchor sentence | Native `scroll-behavior: smooth`, inside `prefers-reduced-motion: no-preference` only | Browser | `scroll-behavior: auto` |
| Reduced-motion block | | `transition-duration: var(--duration-none)` and `animation: none` on every element and pseudo-element; the runner found every computed duration at 0s | | |

## Assets

| Asset | Where | Alt | Consent | Fallback |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` (139 by 32) | Header lockup on `--color-bg`, 104px wide below 768 and 139px above; footer, on a `--color-bg` plate inside the navy panel | "GT School" | Brand mark published by GT | none needed |
| `../shared/img/gt-anywhere-logo-h.svg` (252 by 48; white lettering, orange mark) | Footer, directly on the `--color-navy` panel, 200px wide | "GT Anywhere" | Brand mark published by GT | none needed |
| Door glyphs | Two inline SVG glyphs (place pin, signal arcs), 1.25rem, `--color-text`, `aria-hidden` | none (decorative) | Drawn for this mock | none needed |
| Photographs | None. Default state per DD-42 (a) and RF-25: every file in `ASSETS.md` shows identifiable children and no written permission exists | | | The default state is the fallback |

Photographed state, specified for after RF-25 and not built: a 3:2 thumbnail 120px tall (180 by 120 CSS pixels) at the top of each header cell, `georgetown-science.webp` (1440 by 1208, 3:2 crop at `object-position: 50% 45%`, well inside the 720px DPR-2 maximum) with the caption "Students run a science experiment." from `copy.md` section 9, and a Nari-confirmed GT Anywhere photograph with its caption recorded in section 9 first; parity enforced, both thumbnails or neither (DD-42). Fold cost per row, from the measured door bottoms: the thumbnails add 128px to the door row, so V14 (CTAs 567, limit 696) and V15 (575 of 624) would end at about 695 and 703, V15 failing; V13 would end near 671 of 744 and V16 near 726 of 876. The thumbnails therefore stay off viewports under 800px tall and V14 and V15 need re-measuring with them on. Consent status for any photograph: "published by GT on its own site, consent to be confirmed by Nari (AD-11)".

## Departures

| # | Departure | Reason |
|---|---|---|
| 1 | h1 at `--text-2xl` below 768px (CONTRACT type role says `--text-3xl`) | Computed 7 lines (219px) at V2 breaks the 605 limit once the anchor sentence sits above the doors; 6 computed and 5 measured lines at `--text-2xl`. R5, DD-19 |
| 2 | Compact-door threshold at 800px tall, not the contract's 700 | The door lines are 3 lines (72px) at 16px on phones up to 430px wide, not 2 (54px); with lines inside the doors V5 would sum to 723 of 691 and V8 to 719 of 715. V6 (839) and V9 (844) keep the lines inside the doors |
| 3 | The two door lines exist twice in the DOM: inside each header cell (shown at 900px and above and on stacked viewports 800px tall and over) and as a second `thead` row of two `td` cells opened by the school name in Inter Tight 500 (shown only on stacked viewports under 800px tall). Exactly one copy is displayed at any viewport | The compact door rule needs both lines to follow the second CTA, while the brief needs each line inside its header cell. A single-copy alternative (overlapping the two `th` boxes with `grid-template-rows: subgrid` and `pointer-events: none`) was rejected as fragile for hit testing and screen readers. Screen readers meet one copy: label, name, CTA in the header cells under 800px tall, then the two lines; label, name, line, CTA otherwise |
| 4 | Breakpoint 900px and a two-up stacked form from 736 to 899px (the five earlier mocks used 767px) | R6: the runner showed the Georgetown CTA wrapping to two lines in the table form at 768px, so the doors were unequal. Between 736 and 899px the stacked blocks are two abreast, with the table semantics and roles unchanged |
| 5 | `caption` and the section's h2 "Compare the two" are visually hidden | The anchor sentence and the two header cells already title the table for sighted readers; a visible caption line costs 23px at V2. Both remain in the accessibility tree |
| 6 | `--color-text-muted-on-dark` (#a3bfcb in `tokens-v2.css`) on the footer facts block | New tint proposed under DD-39 (a), RF-07; 7.81 on navy. DD-19 departure |
| 7 | Zebra stripe as `color-mix(in srgb, var(--color-surface) 50%, var(--color-bg))` | The brief's "50 percent of `--color-surface`" has no token; the mix is computed from two tokens, no raw value |
| 8 | Table roles (`role="table"`, `rowgroup`, `row`, `columnheader`, `rowheader`, `cell`) and `abbr` on the two door cells | The stacked forms set `display: block` and `grid`, which strip native table semantics in the accessibility tree; explicit roles keep them (WAI tables tutorial, K6 C25). `abbr` gives screen readers a short column name ("Georgetown Campus") when they reference the header from a data cell |
| 9 | Image render widths 104px, 139px, 200px; glyphs 1.25rem; h1 `letter-spacing: -0.01em`; label tracking 0.06em and eyebrow 0.08em; 1px hairlines, 2px and 3px rules, 44px targets, the 35ch cap and the breakpoint values are literal lengths | Image, glyph, rule and target dimensions are not in the token set (BUILDER-BRIEF rule 14 governs colour, type, space, radius, shadow and duration, all tokens here); tracking is inside the contract's 0.06 to 0.08em range |
| 10 | 3px `double` rule in `--color-border` under the foot row | The ledger's closing convention; not an accent use (border colour) |
| 11 | Skip link "Skip to main content" | The one `copy.md` section 9 string used (the control label the checker's R9 requires) |
| 12 | Door glyphs are two drawn shapes, not `gt-icon.svg` | The same mark on both doors would not tell them apart (DD-04 wants a distinguishing cue) |
| 13 | Door name at `--text-lg` (CONTRACT says `--text-xl`) | The brief's Typography row is binding and says `--text-lg` |
| 14 | Application CTAs and "Go to the family hub" are outlined navy, the door CTAs filled navy | Two tiers: explore (filled, the page's primary action) and apply or go (outlined); secondary CTAs are text rows |
| 15 | Column headers are not sticky (K6 section 5d lists sticky headers for the table form) | The header cells are the 217px doors; sticking them would cover a third of the 720px laptop screen while the ledger is only nine rows and the stacked forms label every cell |
| 16 | An empty `td` in the corner of the header and foot rows | The standard corner cell; no word exists in `copy.md` to label it and none is needed |
| 17 | The footer marks load eagerly (no `loading="lazy"`), against BUILDER-BRIEF rule 13's default | The GT Anywhere mark appears only in the footer; lazily loaded, it was absent from the runner's full-page capture (the GT School mark, cached from the header, was not). Two SVGs of 8 and 10 KB; checker R13 exempts SVG logos from the eager count |
| 18 | The header may grow above 56px: the nav drops onto its own row under the mark when the two links cannot sit beside it (320px wide, header 93px; a 32px root font, where the two links then wrap onto separate rows) | Logo plus both links need 312px at 360px wide with Inter Tight 500's real widths. The first build let the nav shrink over the mark at a doubled root ("Contact" printed over "school", `qa/V2-rootx2.jpg` of that pass); iteration 1 fixed the mark's size and made the nav wrap, and the current capture shows the mark alone on its row with the links beneath |
| 19 | Anchor sentence at `--text-md` (the contract's shared sums implied `--text-sm`); `--text-sm` again in the landscape recipe only | Fable's Typography finding: at `--text-sm` the anchor could not rank above the provenance line under its accent rule. In landscape the row must hold both strings in 702px |
| 20 | Landscape recipe at 600px and wider, 400px and shorter: masthead padding `--space-3`, h1 at `--text-xl` across the full column without the 35ch cap, provenance and anchor on one row, doors side by side with label and name on one line and 8px side padding | CONTRACT section 2's phone-landscape recipe, which permits the one-token step for one row; measured 297 of 318 at V10 |
| 21 | The sources line's five source phrases are links to pages `copy.md` names as text, not as links (anywhere.gt.school/academics, www.gt.school/academics, anywhere.gt.school/intensives, www.gt.school/terms-of-use), each with `outbound_school_site` | Astra's Mission finding and C04's evidence-link shape. "the Terms of Use" links to gt.school's page; the Anywhere terms page carries the same sentence and has no anchor text of its own in the fixed line. Inline footnote links are exempt from the 44px target rule under WCAG 2.5.8's inline exception, which the runner's rule does not model |
| 22 | The three two-sentence rows (Same school, Admissions, The day) are `<details>` disclosures, one per cell with the school name as `<summary>`, closed by default; in the table form (900px and above) the summary is hidden and the content forced visible with `::details-content { content-visibility: visible }` inside `@supports selector(::details-content)` | The brief's Motion row allows V7 disclosures for long rows on the stacked form; both critics asked for them. The `open` attribute cannot vary by viewport without JavaScript, so the table form relies on `::details-content` (Chromium 131, Firefox 138, Safari 18.4 and later); a browser without it shows the collapsed cells with their school-name summaries, still usable. Per-row disclosures were rejected because a `<details>` cannot contain sibling cells and a summary inside the row header would leave a no-op focus stop in the table form |

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
| Application links | `apply.gt.school/?school=georgetown|anywhere` | DD-25 convention; the live parameter is confirmed in stage S5, Harden the winner (`1_spec/00-scope-and-traceability.md`) |
| Figures | 90th percentile (CR-011), $10,400 (CR-021), four weekends (CR-032), 9 to noon and about two hours (CR-033), two to three hours (CR-034), weekly check-ins (CR-035) | All "Unverified, public"; CR-021 and CR-022 conflict on TEFA coverage; no cohort number because CR-025 and CR-026 conflict |
| Holly's unifying brand element | Not present | Q-001 |
| Display weight | Literata 400 | DD-38 tests 300 against 400 in this wave |
| Photographs | None | DD-42, RF-25, AD-11 |
| Scripts | None | D-039 escalated; no-JavaScript state shipped |
| Mobile breakpoint | 900px, measured on this content in the runner | R6 |

## Parent questions (`0_plan/05-landing-mockups-plan.md` section 6c, from `1_spec/01-users-and-journeys.md`)

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
| 2 | The 3px accent rule runs the full content width under the provenance-and-anchor row and is the ledger's top edge | One accent use doing two jobs: marking the anchor and opening the table |
| 3 | On phones the two doors are full-bleed tinted bands whose content keeps the page margin; the zebra rows do the same | Edge-to-edge surfaces give the CTA the full 327px at V2 (the Georgetown label needs 265px in Inconsolata) and keep the ledger's left edge aligned with the h1 |
| 4 | Two-up stacked form from 736 to 899px | Portrait tablets and landscape phones get the comparison side by side without the table form's cramped door cells; the row label spans both cells as a small heading |
| 5 | The anchor is a 44px flex target aligned to its bottom edge, balanced across two lines on phones | Meets the matrix's 44px rule for every interactive target without adding height when the sentence is two lines; `text-wrap: balance` removes the orphan "two." at V2 |
| 6 | Foot row repeats the CTAs under a 3px double rule, inset like the door CTAs | DD-23's repetition as the ledger's total line |
| 7 | The tail is a grid in the table's proportions: sources under the label and Georgetown columns, the TEFA module under the GT Anywhere column on its tint | The TEFA note belongs to GT Anywhere; keeping it in that column continues the ledger's logic |
| 8 | Facts as one four-column ledger row at 1024 and above, two by two on tablets, stacked on phones, hairlines above and below | The proof strip reuses the row treatment rather than introducing cards |
| 9 | Steps numbered by CSS counters in Inconsolata 600 `tabular-nums` | The deck's own numbering (1 to 4) without figures in the DOM text; the figure face for figures |
| 10 | Secondary CTAs as COLLINS rows in Literata `--text-md` with an arrow at the right | The one place the serif carries a link, to separate "ways to connect" from the mono action buttons |
| 11 | Header links at `--text-xs` below 768 with 2px side padding, the lockup 104px wide and fixed | Logo plus both links need 312px at V1 with Inter Tight 500's real widths; 44px height kept on both links |
| 12 | `→` arrows are `aria-hidden` glyphs after CTA labels | Carry-forward marks in a ledger; screen readers hear the label only |
| 13 | Hover on the navy CTAs is an underline, not a fill change | An instant state change that needs no new colour role |
| 14 | Footer on navy with the GT School mark on a `--color-bg` plate and the GT Anywhere mark directly on the panel; facts block muted, links and phone in on-navy | `copy.md` section 8 logo rule; hierarchy in the footer without new colours |
| 15 | Row label column 23 percent, school columns 38.5 percent each, `table-layout: fixed` | The two doors read as equal columns; row labels never wrap awkwardly at 900. Fable's optional 20 percent was tried on paper: the Georgetown line drops to two lines only at 17 percent or less, which cramps the row labels at 900 |
| 16 | h1 capped at 35ch outside the landscape recipe | The contract's measure for the display role; at 1440 the 8-column span (907px) would exceed it by 22px |
| 17 | Provenance left and anchor right on one row from 1024px, the anchor over the school columns | The row is the ledger's caption line: the muted fact at the left, the invitation at the right above the two doors it points to |
| 18 | Disclosure summaries carry a 0.5em chevron drawn from two borders, turning 90 degrees when open, and the same uppercase muted label style as the cell labels they replace | One vocabulary for the school labels on phones whether the cell is open, closed or plain; borders survive forced colours |
| 19 | Three rows collapsed on the stacked forms (Same school, Admissions, The day), not all nine | The three rows whose cells run to two sentences (K6 section 5d counted them at 20 to 22 words); collapsing the six short rows would hide the differing facts a parent came to compare behind eighteen taps |
| 20 | The two application CTAs take the full width and one height on phones (`grid-auto-rows: 1fr`) | Fable's Craft note: the Georgetown label wraps to two lines at 375 and its sibling did not, so the outlined pair was uneven |

## Not changed, and why

| Ask | Position |
|---|---|
| "The comparison stays within two screens on phones" (Astra Composition and Mission) | Collapsing the three two-sentence rows brought the 390 by 844 page from 5487 to 5211px; the ledger itself is about three screens there. Two screens would need every row collapsed, hiding the six short differing facts behind taps, which reverses C21's "do the work for the consumer". The three-row disclosure is the version I stand behind; the director can ask for more |
| Label column to 20 percent (Fable Composition, optional) | No effect until 17 percent (the Georgetown line needs a 485px cell to fall to two lines at 1280); at 17 percent "Peers and community" and "Same school, same academics" wrap at 900. Left at 23 |
| Demonstrate the header and footer on both destination sites and a third campus column (Astra Continuity) | Out of a mock's scope: the school sites may not be opened from here and no third-campus copy exists in `copy.md`. Recorded as designed for, not demonstrated |
| 44px targets on the sources line's inline links | Inline links in a running footnote are exempt under WCAG 2.5.8; making them 44px tall would break the paragraph. Flagged for the runner's rule, which does not model the exception |

## Self-check

Run from the repo root on 2026-09-11 against the iterated files. Output pasted verbatim.

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
  PASS R7 full names — Georgetown Campus x10, GT Anywhere x16
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
  PASS R14 size under 1 MB — 38 KB
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
| Fixed slots | 52 strings from `copy.md` sections 0 to 8 found verbatim; the linked sources line found twice with tags stripped; page words outside `copy.md`: none |
| Size | 44 KB for `index.html` plus `styles.css`; `qa/` about 2 MB of captures |

### Runner: `node 0_plan/tools/shots.mjs 0_plan/mockups/M06-the-ledger --all` (final pass, `qa/fold.md` verbatim)

```
# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`; 2026-09-11T09:20:39.788Z; page `/0_plan/mockups/M06-the-ledger/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 93 | 275 | 300 | 494 | 623 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 211 | 236 | 430 | 560 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 212 | 237 | 432 | 561 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 212 | 237 | 432 | 561 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 213 | 238 | 433 | 562 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 213 | 238 | 513 | 723 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 212 | 238 | 432 | 562 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 214 | 239 | 434 | 564 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 212 | 237 | 512 | 721 | yes | report: page height 5211 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 199 | 297 | 297 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 229 | 255 | 546 | 546 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 235 | 261 | 527 | 527 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 250 | 318 | 543 | 543 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 271 | 339 | 567 | 567 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 346 | 575 | 575 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 300 | 368 | 598 | 598 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 368 | 598 | 598 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 93 | 302 | 345 | 546 | 675 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 250 | 318 | 543 | 543 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Focus and forced colours

Captures: focus-cta.jpg (first door CTA focused); focus-footer.jpg (GT Anywhere footer link focused); forced-colors.jpg (forced-colors: active at V14). The critics judge these by eye.

## Console

PASS: no console errors.

## Result: all required rows pass
```

Captures: `qa/V1.jpg` to `qa/V19.jpg` (viewport), `qa/V2-full.jpg` and `qa/V14-full.jpg` (full page), `qa/V2-rootx2.jpg` (32px root: mark on its own row, the two links on rows beneath, no overlap), `qa/focus-cta.jpg`, `qa/focus-footer.jpg`, `qa/forced-colors.jpg`.

### Pending for the director

The critics' re-score after iteration 1; the screen-reader pass on the stacked, two-up and landscape forms (header cells announcing label, name and CTA in order; the disclosure summaries announcing the school name and state); text contrast from computed colours (the K3 section 5c arithmetic is cited, not re-measured); 200 percent browser zoom at V14 (the runner covers V19 as the 125 percent stand-in and the doubled root at V2); the scroll videos at V3 and V16; the in-app browser measurements under REQ-024; and a view on the three-row disclosure against the two-screen wish on phones.

**Director's change after the gate.** The fold figures above were re-measured after a change the design director made rather than the engineer: the header mark was raised from a 6.5rem width to a 27px height at 390 and 32px from 768, so the header stands 93px on the narrowest rows and everything below it moves down by the same amount. The runner's mark-geometry check, added the same day, is what found the original size. Both CTAs still sit above the fold on every row and every row is still cut by content.
