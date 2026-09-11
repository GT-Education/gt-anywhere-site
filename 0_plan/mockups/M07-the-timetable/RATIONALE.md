# M07 The Timetable: rationale

| Field | Value |
|---|---|
| Mock | M07 "The Timetable", `0_plan/mockups/M07-the-timetable/` (`index.html`, `styles.css`, this file, `qa/`) |
| Brief | `0_plan/kb/briefs/M07.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1 (fold method with computed h1 lines, the compact door rule, the V10 landscape recipe, K3's two-colour ring); runbook `0_plan/17-design-studio-runbook.md` sections 4, 6, 7; K4 section 8.1 rows V6 and V8 |
| Lens order | L1 objective, L3 mission, L2 continuity, L4 exclusivity. New direction |
| Built | 2026-09-11, design engineer (Fable fork). Build pass with two runner passes: the first found the column dividers crossing the bar labels, the GT Anywhere label crossing the gaps between its five bars, and two rows whose fold fell into a spacing gap (V8, V16); all three fixed before this hand-over. The runner `node 0_plan/tools/shots.mjs 0_plan/mockups/M07-the-timetable --all` (Playwright from the npx cache, headless Chromium) measured the 19 rows on each pass and wrote `qa/V1.jpg` to `qa/V19.jpg`, `qa/V2-full.jpg`, `qa/V14-full.jpg`, `qa/V2-rootx2.jpg`, `qa/focus-cta.jpg`, `qa/focus-plate.jpg`, `qa/focus-footer.jpg`, `qa/forced-colors.jpg` and `qa/fold.md`; `qa/measure.mjs` (same Playwright) measured every SVG text box from 960 to 1440 and the h1 line counts and wrote `qa/svg-text.md`; `qa/metrics.py` is the advance-width estimator the fold sums were designed with. No other browser tool was used |
| State | No JavaScript (D-039 undecided): one JSON-LD script, no `data-d039` declaration. **The V8 draw waits on D-039; the week grid ships complete at rest as inline SVG, which is the no-JavaScript state K4 section 8.1 V8 requires and the only state this mock has.** No photograph (DD-42 default state, RF-25); the brief's photographed state is identical. Copy: `copy.md` v1.1 sections 0 to 8 verbatim; from section 9 the weekday names, the schematic labels "In person" and "Online", and the skip-link label |
| Tokens | `../shared/tokens-v2.css`. Layer-2 tokens used are listed with their register rows below (`TOKENS-V2.md` rule); this file names DD-38, DD-39, MN-16 and D-039 |

## Direction

Hypothesis: a parent deciding between in person and online is really deciding what her child's week looks like, so show the week. The first screen puts the Georgetown day and the GT Anywhere day beside each other in one grid, Monday to Friday, with the Guides named in both rows, so the difference is read in one look (the deck's "The day" and "Guides" cells; DD-05). The two schools share a program and differ in where the child sits: the Georgetown row fills the day with two bands (mornings from 9 to noon, afternoons of workshops, projects and competitions) that run the whole week because every school day is the same; the GT Anywhere row holds one shorter bar per day and then nothing, and the deck's own sentence, "The rest of the day is yours.", names the blank. Each row ends in its door, so the door is the row's conclusion: label, name, line, CTA. Below the grid a one-line strip carries the four intensive weekends as four marks and a sentence, never placed on the calendar, because the intensives have no weekday and the deck gives no dates (Q-017).

The objective (L1) is served by the two CTAs sitting at the ends of the two rows a parent has just read; mission (L3) by the diagram being made only of deck facts with register rows (nine to noon, two hours, two to three hours, four weekends), Guides named in the GT Anywhere bar and in both doors, and the strip's sources one screen down; continuity (L2) by the estate's marks, faces, button case and swatches, with the two school tints used as the bars' colours so the grid reads as the two sites' own colours side by side; exclusivity (L4) by restraint and the stated bar below the fold, never by price or wealth cues (MD-25).

Exemplars, as the brief borrows them: Yale School of Architecture's programs section labels its options by literal building, borrowed as the two rows labelled by literal place, "In person" and "Online" (C31); Every's category rows repeat one module, borrowed as the weekday-column module repeated five times and the two rows repeating one row module (C21); Crimson Global Academy's formats section sets parallel cards, borrowed as the two-format framing, one row each, identical in structure (C31). Avoided: CGA's stat band whose counters render frozen at "0+" without a script (C33): the diagram here is complete at rest, every bar and label drawn by the browser before any script could run, and the V8 draw, if D-039 allows it, only replays what is already there.

## h1

The umbrella sentence, `copy.md` section 1, is the one `<h1>` (`data-fold="h1"`): Literata 400 at `--text-3xl` (27.26px at 375, 46px at 1440), `--leading-tight` 1.15, across eight of twelve columns from a 60rem container (`max-width: min(35ch, calc(66.667% - .667rem))`, the eight-column width with 32px gutters, capped at the contract's 35ch) and the full column below that, capped at 35ch. It is the only element that decodes "GT" and names both ways to attend before either door (DD-20, DD-33). Two typographic no-breaks keep the phrasing whole without changing a word (M03's critic finding, carried forward): "in&nbsp;person" never splits, and "from anywhere." sits in a `span.nowrap` released only when the column is narrower than 12rem (a doubled root on a phone), so the last line is never one word. `text-wrap: balance` applies from 768px, where the sentence is four lines; the seven-line phone setting stays unbalanced (K10 T-K10-15). On the phone-landscape row only (600px and wider, 400px and shorter) the h1 steps one token down to `--text-xl` with the 35ch cap lifted, as CONTRACT section 2 permits; declared under Departures.

Measured line counts (`qa/measure.mjs`: rendered box height over the line box): 7 at V2 (219px), 6 at V5 (193px), 3 at V10 (83px, `--text-xl`), 5 at V13 (222px, the 629px eight-column width at 1024), 4 at V14 (199px), 4 at V15 (206px), 4 at V16 and V17 (212px). The contract's six-line estimate at V2 is one line optimistic, as M03 and M12 also found; `qa/metrics.py` with Literata Regular's own advances gives 7 at 360 to 402px and 6 at 412 to 430px. The door names are h3 under a visually hidden h2 "Two ways to attend" (an allowed section 1 heading); the second-screen h2s are "Compare the two schools" (visually hidden, the caption is the visible title), "What is true of both schools", "How to apply", "Questions before you apply" and "Already a GT family?". No level is skipped; the day cards' names are paragraphs, not headings, so the two school names are headings once each.

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id and name, lens order | M07 The Timetable; L1, L3, L2, L4 as above | Done |
| Thesis | The week grid on the first screen, both schools' days beside each other, Guides in the GT Anywhere bar label and in both door lines; the rows end in their doors | Done |
| Exemplars | Yale's labelled options (C31), Every's repeated module (C21), CGA's parallel cards (C31) as mapped under Direction; CGA's script-frozen counters avoided (C33): complete at rest | Done |
| Composition | Header 56 (88 below 390px, where the two utility links stack so the mark keeps 27px; 56 from 390px); h1 across eight columns from 960px; provenance; the diagram: a weekday header row (Monday to Friday, `copy.md` section 9), the Georgetown row with a morning band "Mornings from 9 to noon: about two hours of focused academics" and an afternoon band "Afternoons: workshops, projects and competitions", the GT Anywhere row with one bar per day and the label "Two to three hours of focused mastery academics a day, with live sessions from Guides"; the doors at the row ends as complete slots (label, name, line, CTA; the line hidden below 800px tall, see the compact rule); under the grid the strip "Four intensive weekends a year in Georgetown" with four marks, not on a calendar. Below a 60rem container the doors come first as two cards (M01 form), then the week as two stacked day cards, then the strip; from 40rem the doors and the day cards sit two abreast. The SVG rows' text is `--text-sm`; the grid's minimum width is 960px (a 1024 viewport at the 32px margin) and below it the cards take over | Done; fold sums restated below with measured bottoms |
| Typography | SVG labels `--text-sm` Inter Tight 500 (computed 14.62px at 1024, 15px at 1440); row names, which are the door names, `--text-lg` Literata; strip caption `--text-sm` muted; h1 Literata 400 `--text-3xl`; door labels Inter Tight 500 `--text-xs` uppercase .06em muted; door lines Inter Tight 400 `--text-base` at `--leading-prose` 1.5; CTAs Inconsolata 600 `--text-btn` uppercase; the $10,400 figure in Inconsolata 600 `tabular-nums` | Done |
| Color and surface | `--color-bg` page; bands `--color-surface` (Georgetown) and `--color-anywhere-tint` (GT Anywhere); rules `--color-border` (the diagram's top rule, the row rules, the weekday dividers, the week-to-door rule, the strip's rule); one accent use on the first screen, the four `--color-accent` marks as .75rem squares (RF-37); CTAs `--color-navy` fill with `--color-on-navy` text; focus `--color-focus` at 2px offset on light surfaces, the two-colour ring on the navy footer | Done; `qa/focus-cta.jpg`, `qa/focus-footer.jpg`, `qa/forced-colors.jpg` |
| Imagery | Diagram-led; no photograph; the photographed state is the same page | Done |
| Motion | Nothing animates. V8 considered and specified below, not shipped (needs the D-039 script); the no-JavaScript state shows the grid fully drawn and is the shipped state. V6 considered on the steps and the secondary CTAs (`data-motion="v6"` hooks), not shipped. Reduced motion: every computed duration 0 (runner) | Done |
| Copy | Sections 0 to 8 verbatim (70 fixed strings checked by string match, the linked sources line with tags removed); weekday names, the schematic labels and the skip-link label from section 9; every bar label is a phrase of the deck's "The day" cell; the strip is the "In-person time" cell; the Georgetown row's caption "Every school day." is its "In-person time" cell and the GT Anywhere row's caption "The rest of the day is yours." is the second sentence of its "The day" cell (both declared under Departures as phrases the brief did not enumerate) | Done |
| Conversion | Doors inside the grid rows on the first screen from 960px, first on the phone rows; the compare anchor under the grid and before the table (checker R19); table with repeated values (DD-43); proof strip with the four facts and the sources line; steps with two application links; four secondary CTAs with the R14 tour label; current families; footer | Done |
| Acceptance | `check-mocks.py` 36 pass, 0 fail; `check-claims.py` OK with 9, noon, two, three and four mapping to CR-033, CR-034 and CR-032 and nothing else added; the fold rule met at V1 to V17, V10 included; SVG text: zero overlapping pairs and zero clipped labels at every width measured from 1024 to 1920 (`qa/svg-text.md`); the grid complete on first paint under reduced motion (nothing is hidden at rest); this file names DD-38, DD-39, MN-16 and D-039 | Checkers and runner pasted in Self-check; the critics' scores are pending |

## Fold: the estimate designed to, and the measured result

Method: CONTRACT section 2 with the h1 line counts computed from Literata Regular's own advances (`qa/metrics.py`, greedy wrap, no kerning) and then measured; gaps are the space tokens in `styles.css`. Height bands: at or below 639px tall the masthead gaps are 8 / 8 / 8 (top, h1 to provenance, provenance to grid); 640 to 899px 16 / 8 / 16; from 900px 24 / 12 / `clamp(24px, 6svh, 64px)` (54 at 900, 58 at 960). Compact door (stacked forms): padding 8 + label 15 + 4 + name 23 + 8 + CTA 44 + padding 8 = 110. Grid form: top rule 1, weekday header 32, row rule 1, two rows of at least 132 (the Georgetown SVG needs 12 + 36 + 8 + 36 + caption + 8), the door's CTA at the row's bottom less 8px of padding; with the lines (800px tall and over) the rows are the doors' height, 204 to 228px measured. The brief's own sums are shown beside mine; the deltas are explained under the table.

| Row | Viewport | Limit | Brief's estimate | Estimate designed to (sum to the second CTA's bottom) | Measured CTA bottoms (Georgetown, GT Anywhere) | Spare |
|---|---|---|---|---|---|---|
| V2 | 375 by 629 | 605 | 550 | header 88 + 8 + h1 7 lines 219 + 8 + provenance 21 + 8 + card 110 + 8 + card to its CTA 102 = 572 | 455, 573 | 32 |
| V5 | 414 by 715 | 691 | 663 | 56 + 16 + 193 + 8 + 21 + 16 + 110 + 8 + 102 = 530 | 412, 530 | 161 |
| V10 | 750 by 342 | 318 | (recipe 313) | 56 + 8 + h1 3 lines 83 + 8 + 21 + 8 + card 100 = 284 | 286, 286 | 32 |
| V13 | 1024 by 768 | 744 | not stated | 56 + 16 + h1 5 lines 222 + 8 + 22 + 16 + 1 + 32 + 1 + 132 + 132 − 8 = 630 | 497, 629 | 115 |
| V14 | 1280 by 720 | 696 | 657 | 56 + 16 + 199 + 8 + 22 + 16 + 1 + 32 + 1 + 132 + 132 − 8 = 607 | 474, 606 | 90 |
| V15 | 1366 by 648 | 624 | not stated | 56 + 16 + 206 + 8 + 22 + 16 + 1 + 32 + 1 + 132 + 132 − 8 = 614 | 481, 613 | 11 |
| V16 | 1440 by 900 | 876 | 721 | 56 + 24 + 212 + 12 + 22 + 54 + 1 + 32 + 1 + 206 + 206 − 8 = 818 | 615, 821 | 55 |

Deltas from the brief: at V2 the h1 sets in seven lines (219px), not the contract's six (188px), and the header is 88px below 390px; the compact door rule absorbs both (32px spare). At V5 the brief expected the lines inside the doors (663); with the measured three-line door lines the rows-with-lines form would end at about 745 of 691, so the compact rule holds to 799px tall and V5 ends at 530. At V14 the brief's 657 assumed a 159px h1 and 96px rows; the h1 is 199px and the doors govern the rows; with the door lines inside the rows the second CTA would end at about 757 of 696 (two rows of 205), so the grid form also compacts below 800px tall and ends at 606. At V16 the brief's 721 assumed 180px doors; the measured door with its three-line sentence is 206px, and the relaxed band opens a 54px `svh` gap between the provenance line and the grid, so the second CTA ends at 821 of 876 and the strip and the anchor band straddle the fold (the runner's band cut).

The other rows, measured (`qa/fold.md`):

| Row | Viewport | Limit | Measured CTA bottoms | Result |
|---|---|---|---|---|
| V1 | 360 by 740 | 716 | 468, 586 | Pass (header 88) |
| V3 | 390 by 664 | 640 | 441, 559 | Pass |
| V4 | 393 by 659 | 635 | 441, 559 | Pass |
| V6 | 412 by 839 | 815 | 492, 691 | Pass (lines inside the doors: 839 is over the 800px threshold) |
| V7 | 402 by 681 | 657 | 443, 561 | Pass |
| V8 | 430 by 739 | 715 | 414, 533 | Pass; the day cards straddle the fold after the run-in lines |
| V9 | 390 by 844 | emptiness only | 521, 720; page height 7378 | Not empty: the day cards begin under the doors and are cut at 844 |
| V11 | 768 by 1024 | 1000 | 557, 557 | Pass (doors two abreast with their lines; day cards two abreast beneath) |
| V12 | 834 by 1194 | 1170 | 541, 541 | Pass |
| V17 | 1920 by 960 | 936 | 619, 824 | Pass; content capped at 1312px |
| V18 | 320 by 256 | reflow only | 521, 639; scrollWidth 320 | No horizontal scroll; header 88 with the links stacked |
| V19 | 1024 by 576 | 552, reported | 481, 613; scrollWidth 1024 | Reported over by 61px (DD-44: reported, not required); nothing clipped, nothing overlapping. The cost is the five-line h1 at the eight-column width plus two 132px rows |

Breakpoints and thresholds: grid form from a 60rem first-screen container (960px: a 1024 viewport at the 32px margin); doors and day cards two abreast from 40rem; compact doors below 800px tall on every form; phone-landscape recipe at 600px and wider when 400px or shorter; comparison table from a 58rem compare container (M03's measured threshold, three columns at 928px), stacked blocks below.

### The week grid, measured (`qa/measure.mjs`, `qa/svg-text.md`)

| Viewport | Form | Week area | Door column | SVG texts | Overlapping pairs | Clipped | Smallest slack to the week edge | Row heights |
|---|---|---|---|---|---|---|---|---|
| 1024 by 768 | compact doors | 616px | 344px | 10 | 0 | none | 42px (Friday; the GT Anywhere label 43px) | 32, 132, 132 |
| 1024 by 900 | doors with lines | 616px | 344px | 10 | 0 | none | 42px | 32, 226, 226 |
| 1100 by 720 | compact | 691px | 345px | 10 | 0 | none | 49px | 32, 132, 132 |
| 1152 by 864 | lines | 726px | 362px | 10 | 0 | none | 53px | 32, 228, 228 |
| 1200 by 720 | compact | 758px | 378px | 10 | 0 | none | 56px | 32, 132, 132 |
| 1280 by 720 | compact | 790px | 394px | 10 | 0 | none | 59px | 32, 132, 132 |
| 1280 by 800 | lines | 790px | 394px | 10 | 0 | none | 59px | 32, 204, 204 |
| 1366 by 648 | compact | 847px | 423px | 10 | 0 | none | 64px | 32, 132, 132 |
| 1366 by 900 | lines | 847px | 423px | 10 | 0 | none | 64px | 32, 205, 205 |
| 1440 by 900 | lines | 875px | 437px | 10 | 0 | none | 67px | 32, 206, 206 |
| 1440 by 720 | compact | 875px | 437px | 10 | 0 | none | 67px | 32, 132, 132 |
| 1920 by 960 | lines | 875px | 437px | 10 | 0 | none | 67px | 32, 206, 206 |

Geometry: the door column is `clamp(21.5rem, 33.3%, 30rem)` with a 32px inner gutter, so at the 960px minimum the door holds the Georgetown CTA (Inconsolata 600 at 17.62px: 273px of label plus 32px of padding inside 312px) and the week area holds the GT Anywhere label (561px inside 616px less 12px of inset). Bar heights encode hours: 36px for the 9-to-noon band and the afternoon band, 28px for the two-to-three-hour bar. The Georgetown bands are five column-wide rects drawn seamlessly (`shape-rendering: crispEdges`), the GT Anywhere bars five rects separated by 8px gaps in `--color-bg` at the column boundaries; five segments per row so the V8 draw, when D-039 allows it, has its five weekday columns.

## Decisions applied

| Id | How it is applied in this mock |
|---|---|
| G0.5 items 1 to 6 | Umbrella sentence as the h1; no speed figure; no accreditation claim or mark; "Tuition on request. Ask admissions."; Guides everywhere; the provenance line once (checker R18) |
| DD-04 | Cue set: schematic label ("In person" / "Online"), full school name and position; the school tint on the door card and on the row's bars; no icon and no photograph |
| DD-05, DD-23 | "Explore the Georgetown campus" / "Explore GT Anywhere" at the row ends (`first_screen`) and again after the table (`after_comparison`) |
| DD-06, DD-43, R6 | A real `<table>` with caption, `scope="col"` and `scope="row"`, shared rows first with their values repeated; a table from a 58rem container, stacked blocks labelled with the school name below |
| DD-07, DD-17, MD-16 | No outcome figure, no accreditation claim; every figure on a register row |
| DD-08, DD-31, DD-42 | No photograph; the brief's photographed state is identical, so there is nothing to gate |
| DD-10, MD-06, MD-25 | Selectivity is the stated bar (90th percentile) in the table, the proof strip and the steps line; access ($10,400, TEFA) in the same table row and the TEFA module; no wealth cue, no countdown |
| DD-12, DD-13, MD-11 | Header: lockup, "Current families", "Contact admissions"; no menu; the phone number only in the footer; not sticky |
| DD-14, MD-23 | Built at 375 first: the doors come first as cards, the week follows as day cards, the strip last |
| DD-19 | Style envelope: every value a token or a named departure (Departures) |
| DD-21 | The doors are a `<ul>` whose items span the grid's school rows (`grid-template-rows: 1fr 1fr`); a third campus is a third `<li>` and a third week row, and the row module repeats (Every, C21). Designed for, not demonstrated: no third-campus copy exists |
| DD-25, DD-27, REQ-070 | Two "Begin application" links with `?school=`; full school names everywhere; no unscoped application link |
| DD-26 | Both doors identical in markup and treatment; in the grid form both CTAs sit at their row's bottom edge, so the two rows end alike |
| DD-29 | Every screen carries a fact: the grid itself, the strip, the table, the proof strip, the steps line, the footer facts |
| DD-34 | The day as the comparison device: the schedule visual on the first screen and the same facts as a table below |
| DD-38 (b), R5 | Layer-2 type scale and `--leading-prose` throughout (tokens table below); Literata 400 display ships (the 300 candidate is the wave's DD-38 test, not rendered here); the h1's one-token step on the landscape row is R5's allowance |
| DD-39 (a), RF-07 | `--color-on-navy`, `--color-text-muted-on-dark`, `--color-border-strong` in their proposed roles; gold as shapes only (the four marks), never as text |
| DD-44 | The fold measured by the runner at all 19 rows; `svh` for the tall-layout gap; no `vh` anywhere; height bands; `data-fold` hooks on the header, h1, provenance and both CTAs |
| MD-02, R14, REQ-002 | Four secondary CTAs including "Ask about a tour of the Georgetown campus" |
| MD-17 | The provenance line once, small, muted, under the h1 |
| MN-16 (a), RF-53, R8, R9 | Transform and opacity only (nothing animates), colour and layout changes instant, `--duration-none` under reduced motion |
| D-031, D-039 | Motion reopened under D-031; scripts undecided under D-039, so the V8 draw and the V6 reveals are specified and not shipped; the no-JavaScript state is complete and is the shipped state |
| D-015 (c) | TEFA module visible to everyone, `data-region-source="default"` |
| K12 F41, G15, G17 | Buttons in the estate's face and case: Inconsolata 600 uppercase, `.5rem` radius, 44px floor |
| K3 sections 5c to 5g | Text `--color-text` (17.69 on bg, 16.10 on surface, 16.30 on the GT Anywhere tint); muted `--color-text-muted` (6.25 on bg, 5.76 on the tint); on-navy 14.58; the accent never as text; focus per section 5d; forced-colours fallback per F38 with the SVG bands stroked in `CanvasText` and the marks bordered |
| K6 section 5b | Equal weight: same structure, type, padding and CTA style in both rows and both cards; the labels name place and format; the CTA labels are full school names plus a verb matching the destination |
| K6 C04 | Each source phrase in the sources line links to the page it names, with `outbound_school_site` events; the sentence is unchanged (M06's Mission finding, adopted) |
| SE-13 | `noindex, nofollow` |
| REQ-022, DEL-018 | Figures on the page: 90th percentile (CR-011), $10,400 (CR-021), four weekends (CR-032), 9 to noon and about two hours (CR-033), two to three hours (CR-034), weekly check-ins (CR-035); all "Unverified, public" |
| REQ-024, R7 | Phone rows V2 to V8 with 24px headroom stand in for the in-app browsers until measured |

### Layer-2 tokens used (proposed rows, `TOKENS-V2.md`)

| Token | Where | Register row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | Every type size, the SVG labels included (`--text-sm`) | DD-38 (b), R5 |
| `--leading-prose` 1.5 | Door lines, run-in lines, bar labels in the day cards, strip, table cells, provenance, sources, facts, steps, TEFA body, footer facts | DD-38 (b), RF-58 |
| `--measure-prose` 65ch | Door lines, run-in lines, sources, steps line, TEFA, families copy | RF-55 |
| `--color-on-navy` | Text on the navy CTAs and footer; outer band of the two-colour ring; skip-link text | DD-39 (a), RF-07 (existing swatch in a new role) |
| `--color-text-muted-on-dark` | Footer facts block; footer link underlines at rest | DD-39 (a), RF-07 (new tint, DD-19 departure) |
| `--color-border-strong` | Link underlines at rest on light surfaces; rules on `--color-surface` | DD-39 (a), RF-07 (new tint, DD-19 departure) |
| `--duration-none` | The reduced-motion block | MN-16 (a), RF-53, R8 |

Not used: `--color-accent-text`, `--color-on-accent`, `--color-focus-on-dark` (the ring on navy uses the K3 section 5d pair `--color-on-navy` and `--color-navy`), `--ease-standard`, `--ease-out`, `--ease-in` (nothing transitions; V8 would use `--ease-out`). Every `var()` in `styles.css` resolves to a token defined in `tokens-v2.css` or to a custom property defined in `styles.css` itself (`--page-margin`, `--rule`, the first screen's gap variables); no raw colour.

### Taste decisions the brief did not name

| # | Decision | Reason |
|---|---|---|
| 1 | The door cards on the stacked forms take the school's tint (`--color-surface`, `--color-anywhere-tint`); in the grid form the door cells stay on `--color-bg` and the row's bars carry the tint | One colour per school across the door, the day card and the grid; in the grid a tinted door cell would make a second large block beside the bars |
| 2 | The bar labels are `--color-text`; the row captions are `--color-text-muted` at the same `--text-sm` | Hierarchy by colour, not size, so the SVG has one type size as the brief binds |
| 3 | The GT Anywhere label sits under its five bars, the Georgetown labels inside their bands | A bar one fifth of the week wide cannot hold a 561px label; set across the five bars it crossed the gaps (first runner pass); under them it reads as the row's caption for the bars. Declared under Departures |
| 4 | No vertical dividers through the body rows; the weekday header carries the five columns, the GT Anywhere gaps repeat them | The first runner pass showed the dividers cutting through the labels; the calendar convention is opaque blocks over a grid, and the brief's acceptance row measures text overlap. Declared under Departures |
| 5 | Two captions from the deck cells in the rows: "Every school day." under the Georgetown bands, "The rest of the day is yours." under the GT Anywhere bar | The first says why the Georgetown pattern repeats Monday to Friday; the second names the blank that is the point of the GT Anywhere row. Both are the schools' own cells in the deck's words; declared under Departures |
| 6 | Weekday labels in sentence case, muted, centred in their columns | Calendar words, not labels of state; the door labels keep the uppercase label role |
| 7 | Bar heights as hours: 36px for the two Georgetown bands, 28px for the GT Anywhere bar | Three hours against two to three; a parent reads the shorter bar before the label |
| 8 | The strip spans the whole diagram under the grid, marks first (four .75rem squares with `--radius-sm`), caption muted | The accent spent once on the first screen (K3 section 5f, RF-37); the strip sits directly beneath the GT Anywhere row so its subject reads from position, and the GT Anywhere door line and the table repeat the fact |
| 9 | In the grid form each door's CTA sits at the bottom edge of its row (the door's `1fr` row absorbs the free height) | Both rows end on their CTA, one baseline per row; the label and name align with the top of the bands |
| 10 | The compact rule's run-in lines follow the strip in the grid form and the second CTA on the phone rows | The contract's placement on phones; in the grid form the strip belongs to the diagram, the lines to the doors |
| 11 | The header has no rule; the diagram's top rule is the first line on the page | One line vocabulary: every rule on the first screen belongs to the grid |
| 12 | Eyebrows ("Compare", "Proof", "Admissions", "Connect", "Families") in Inconsolata 600; door, schematic and table row labels in Inter Tight 500 | `copy.md` allows eyebrows in Inconsolata; the contract's label role is Inter Tight 500; the two utility voices are the section marker and the in-diagram label |
| 13 | Label-column grid for the second half from a 64rem page container: eyebrow and h2 in columns 1 to 4, content in 5 to 12; the comparison spans all twelve | One skeleton, repeated (M03's shape, so the wave's mocks share a second half a family could inherit) |
| 14 | The comparison's visible title is the table caption; the section h2 is visually hidden | So the anchor sentence, the eyebrow and the title do not say "compare" three times in a row |
| 15 | Repeated doors after the table as label plus CTA | The section stays a comparison; the first screen keeps the only full statement of the doors |
| 16 | Facts in Literata `--text-lg` on the surface band; steps in Literata `--text-md` with Inconsolata counters | Statements in the display face, descriptive prose in Inter Tight |
| 17 | Footer on navy: the GT Anywhere mark directly on the panel, the GT School mark on a `--color-bg` plate | `copy.md` section 8's logo rule; the page's one dark surface |
| 18 | The anchor sentence in Literata `--text-lg` as a 44px inline-flex target | The second screen's opening line, ranked above the provenance and the strip caption |
| 19 | Page margins 24 / 32 / 48 / 64 with the 32px step held to 1279px | At 1024 the K1 schedule's 48px would leave 928px, under the grid's 960px minimum; the 32px margin gives exactly 960 |
| 20 | `→` arrows are `aria-hidden` glyphs after the door CTA labels | Screen readers hear the label only; the arrow points along the row toward the school site |

## Motion spec

| What | Trigger | Duration | Easing | Reduced motion |
|---|---|---|---|---|
| Nothing animates. No `transition` property, no `@keyframes` | | | | `transition-duration` and `animation-duration` forced to `--duration-none` on every element and pseudo-element; the runner reports every computed duration 0s at V14 |
| V1 door and CTA state: navy fill to `--color-text` on hover; link underline to `currentColor` | Hover, focus | Instant (0 ms, R9) | none | Unchanged, state visible |
| V3 focus: 2px `--color-focus` at 2px offset on light surfaces; the two-colour ring (2px `--color-navy` inner band by box-shadow, 2px `--color-on-navy` outer band by outline) on the footer and the skip link | Focus | Instant | none | Unchanged |
| V8 (considered, not shipped: D-039) | First intersection of `.diagram[data-motion="v8"]`, `IntersectionObserver` with `rootMargin: 0px 0px -15% 0px`, `unobserve` after the first hit | `--duration-slow` 300 ms per segment, 60 ms stagger, five segments (the five weekday columns; each column's rects in both rows share one delay), 540 ms in all | `--ease-out` | The whole rule inside `@media (prefers-reduced-motion: no-preference)`; the hidden state (`transform: scaleX(0)`, `transform-origin: left`, `transform-box: fill-box` on the `.seg` rects) exists only under a `.js` class the script would add, so the document without the script, and every reduced-motion reader, sees the grid complete on first paint |
| V6 (considered, not shipped: D-039) on `.steps` and `.connect` (`data-motion="v6"`, third screen and later, two of the three allowed) | Same observer | 300 ms | `--ease-out` | Same scoping; complete without the script |
| V10 anchor scroll | Not used: the brief's Motion row does not list it; the compare anchor jumps natively | | | |

## Assets

| Asset | Where | Alt | Consent | Fallback |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` (139 by 32) | Header lockup on `--color-bg`, 27.6px tall at 360 to 32px from 800 (`clamp(1.6875rem, 1.5rem + 1vw, 2rem)`); footer, on a `--color-bg` plate inside the navy panel | "GT School" | Brand mark published by GT | none needed |
| `../shared/img/gt-anywhere-logo-h.svg` (252 by 48; white lettering, orange mark) | Footer, directly on the `--color-navy` panel, 24px tall | "GT Anywhere" | Brand mark published by GT | none needed |
| The week grid | Inline SVG in the document (two rows and a header), `<rect>` and `<line>` shapes with real `<text>`; the day cards are HTML | Real text, read in order | Drawn for this mock from deck phrases | The day cards below 960px; the SVG needs no image file |
| The four marks | Four `<span class="mark">` shapes in `--color-accent`, `aria-hidden` | none (decorative; the sentence beside them carries the fact) | | Bordered in `CanvasText` under forced colours |
| Photographs | None. The brief's default and photographed states are identical (diagram-led); DD-42 (a) and RF-25 would gate any file anyway | | | The page as built |

Both marks load eagerly (no `loading="lazy"`): checker R13 exempts SVG logos, and M03's runner pass showed a lazily loaded footer mark missing from the full-page capture. Open Graph carries title and description only.

## Colour and contrast (WCAG 2.x ratios computed from the token values, 2026-09-11)

| Pairing | Where | Ratio | Threshold |
|---|---|---|---|
| `--color-text` on `--color-bg` / `--color-surface` / `--color-anywhere-tint` | Body, bar labels inside the bands and in the day cards, table, door text | 17.69 / 16.10 / 16.30 | 4.5 text; 7 for running prose (K3 CS3) |
| `--color-text-muted` on `--color-bg` / `--color-surface` / `--color-anywhere-tint` | Weekday labels, row captions, strip caption, provenance, door labels (short strings, never a paragraph) | 6.25 / 5.69 / 5.76 | 4.5 text |
| `--color-on-navy` on `--color-navy` | CTA labels, footer text and links, skip link | 14.58 | 4.5 text |
| `--color-text-muted-on-dark` on `--color-navy` | Footer facts | 7.81 | 4.5 text |
| `--color-navy` on `--color-bg` / `--color-surface` / `--color-anywhere-tint` | Outlined buttons, CTA fills against their ground | 13.88 / 12.63 / 12.79 | 4.5 text, 3 component |
| `--color-border-strong` on `--color-bg` / `--color-surface` | Link underlines at rest, rules on the surface band | 3.63 / 3.31 | 3 graphical |
| `--color-focus` on `--color-bg` | Focus ring on light surfaces | 8.20 | 3 |
| `--color-on-navy` outer band against navy; `--color-navy` inner band against `--color-bg` | The two-colour ring on the footer plate and links | 14.58 / 13.88 | 3, one band per ground (K3 F10) |
| `--color-accent` on `--color-bg` | The four marks | 2.38 | Decorative shapes beside their sentence (RF-37); not text, not a control |
| `--color-border` on `--color-bg` / the tints | Rules and dividers | 1.56 / 1.42 to 1.44 | Decorative: the bands, labels and CTAs carry the structure (K3 CS12) |

Palette usage: navy on the CTAs, the outlined buttons and the footer; the two school tints on the bars and the phone door cards; the accent once on the first screen (the marks) and nowhere else; no colour as text below 4.5 anywhere.

## Departures

| # | Departure | Reason |
|---|---|---|
| 1 | Door names (the row names) at `--text-lg`; CONTRACT section 3 says `--text-xl` | The brief's Typography row is binding and says `--text-lg` |
| 2 | Compact door rule below 800px tall on every form, the grid form included; CONTRACT section 2 states it for phone rows under 700px | Measured: a door with its three-line sentence is 204 to 228px tall in the grid rows, so at V14 the second CTA would end at about 757 of 696 and at V5 at about 745 of 691; M03 measured the same need at 780. V6, V9, V11, V12, V16 and V17 (800px and taller) carry the lines inside the doors |
| 3 | The two door lines exist twice in the DOM (inside each door and as two run-in paragraphs), one copy displayed at any viewport | The compact rule needs both lines to follow the second CTA; a single copy cannot leave its list item without `display: contents`, whose list semantics are unreliable in assistive technology (M03's finding). Screen readers meet one copy |
| 4 | The bar labels and captions exist twice (SVG `<text>` in the grid, HTML in the day cards), one form displayed at any width | SVG text does not wrap, and the phone form needs wrapping labels; the brief allows the cards below the grid's minimum width. Screen readers meet one form |
| 5 | h1 at `--text-xl` on the phone-landscape row only (600px and wider, 400px and shorter), the 35ch cap lifted there | CONTRACT section 2's recipe: at `--text-3xl` the sentence is four lines (156px) and both CTAs would end at about 360 of 318; measured 286 of 318 with the step |
| 6 | Page margin 32px from 768 to 1279 (K1's schedule steps to 48 at 1024) | The grid's 960px minimum at a 1024 viewport |
| 7 | No vertical dividers through the body rows; dividers only in the weekday header, plus the week-to-door rule and the horizontal rules. The brief's "grid lines `--color-border`" is kept for those | The first runner pass showed the dividers crossing every label; the acceptance row measures text overlap, now 0 pairs at every width |
| 8 | The GT Anywhere label sits under its five bars, not inside them | Inside, it crossed the four 8px gaps (first runner pass); a per-day bar is 123 to 175px wide against a 561 to 576px label |
| 9 | Two row captions from the deck beyond the brief's enumerated labels: "Every school day." (Georgetown, the "In-person time" cell) and "The rest of the day is yours." (GT Anywhere, the second sentence of "The day") | The brief's Copy row admits deck phrases from those cells; the first explains the repeated pattern, the second the blank. Remove both if the director reads the enumeration as closed |
| 10 | The day cards below 960px are HTML, and each names its school again under its schematic label | The brief's "two stacked day cards"; on a phone the door card above has the same name, which the card repeats so the day is never unlabelled when the doors scroll away |
| 11 | Header 88px below 390px (the two utility links stack at the right) and the nav wraps under the mark, right-aligned, at a doubled root font | The mark keeps its 27px floor on a 312px content width (M03); nothing overlaps at a 32px root (`qa/V2-rootx2.jpg`) |
| 12 | The sources line's five source phrases are links (`outbound_school_site`); the sentence stays verbatim | C04's evidence-link shape, M06's Mission finding adopted; inline footnote links are exempt from the 44px rule under WCAG 2.5.8's inline exception |
| 13 | Layer-2 tokens as listed; `--color-text-muted-on-dark` and `--color-border-strong` are new tints | Proposed roles from `tokens-v2.css`, named per row (DD-38, DD-39, MN-16); DD-19 departures under DD-39 |
| 14 | Non-token lengths: 1px rules; 2px ring bands and 3px forced-colours outline; 44px targets (`2.75rem`), the 56px header row (`3.5rem`); the SVG's pixel geometry (header row 2rem, bars at y 12 with heights 36 and 28, 8px gaps, captions at y 84 and 112, 12px label inset, row minimum 8.25rem); .75rem marks; the logo clamp; the door column `clamp(21.5rem, 33.3%, 30rem)`; container thresholds 12rem, 40rem, 58rem, 60rem, 64rem; height thresholds 400, 639, 799, 900px; letter-spacing .06em and .08em; underline offset .18em | Rule 14 governs colour, type, space, radius, shadow and duration, all tokens here; the lengths are geometry, measured in the runner and recorded above |
| 15 | Eyebrows in Inconsolata beside labels in Inter Tight 500 | Taste decision 12 |
| 16 | The footer marks load eagerly | Assets, above |
| 17 | The skip link "Skip to main content" | `copy.md` section 9's control label (checker R9) |

## Flagged slots

| Slot | Default shown | Flag |
|---|---|---|
| Lockup | The real `gt-school-logo-h.svg`; Holly's unifying element may be added beside it | Q-001 |
| "Current families" destination | https://community.gt.school (header, families band, footer) | Q-002 |
| Application steps, same for both schools | The four `copy.md` steps | Q-007 |
| Georgetown tuition | "Tuition on request. Ask admissions." | Q-011 decided (G0.5 item 4) |
| After 8th grade | The shared sentence, repeated in both columns (DD-43) | Q-013 |
| Intensive weekends logistics | "Four intensive weekends a year in Georgetown." in the strip, the table and the footer; the four marks are counters, not dates, and sit on no calendar | Q-017; CR-032 |
| Outcome figure | Absent | Q-019, G0.5 item 2 |
| TEFA window, owner, expiry | The module's default wording, visible to everyone | Q-021; D-015 (c) |
| Accreditation | Absent | Q-033, G0.5 item 3 |
| Parent quote | None | Q-034 |
| Adults' title | Guides; "advisor" appears only as the `data-type` value the spec names | Q-035 decided |
| Secondary CTA destinations | www.gt.school/contact and anywhere.gt.school/academics; the tour label names the destination and the campus | MD-02, REQ-002, R14 |
| `school=` parameter | Convention; the live parameter is confirmed in S5 | DD-25 |
| Photographs | None; the photographed state is this page | DD-42, RF-25, AD-11 |
| Scripts | None; V8 and V6 specified, not shipped | D-039 (Escalated to Johnny) |
| Comparison breakpoint | 58rem compare container (M03's measured threshold: three columns fit at 928px, cells 348px); the grid's own minimum is 960px | R6 |
| Stacked-table semantics | Below 58rem the table parts are `display: block`; explicit `role` attributes are a build-phase decision (M06 added them; M03 did not) | R6, K6 C25 |
| DD-38 weight test | 400 ships; the 300 candidate is not rendered in this mock | DD-38 |
| Weekday names, schematic labels, captions | "Monday" to "Friday", "In person", "Online" from section 9; the two row captions are deck cells (Departure 9) | Section 9 is proposed for Nari |
| Live side-by-side with the school sites | Not produced: this build may not open gt.school or anywhere.gt.school; K12's measured record is the reference | K7 C4, Continuity |

## Claims register tags

All six rows are "Unverified, public" in `0_plan/12-claims-register.md`: usable in a mock (G0.5), blocked for production until Nari approves the wording (REQ-022). Counts are `check-claims.py`'s own; the grid's figures 9, noon, two, three and four map to CR-033, CR-034 and CR-032, and nothing else was added.

| Figure on the page | Where | Row | Count | Status |
|---|---|---|---|---|
| 9 to noon, about two hours of focused academics | Georgetown morning band (SVG), the Georgetown day card, table "The day" (each carries both phrases, two matches apiece) | CR-033 | 6 | Unverified, public |
| Two to three hours | GT Anywhere bar label (SVG), the GT Anywhere day card, table "The day" | CR-034 | 3 | Unverified, public |
| Four intensive weekends / four in-person weekends | The strip, door 2 line (in the door and as the run-in copy, one displayed), table "In-person time", footer facts | CR-032 | 5 | Unverified, public |
| 90th percentile | Table "Admissions" (both cells), proof fact 1, steps line | CR-011 | 4 | Unverified, public |
| $10,400 a year | Table "Tuition and access" | CR-021 | 1 | Unverified, public |
| check-in every week / every week | Table "Guides", proof fact 3 | CR-035 | 2 | Unverified, public |

CR-022 ($10,474) is not on the page. The door 1 line's "Two hours of mastery academics" is the fixed slot and is the same fact as CR-033.

## Parent questions (`0_plan/05-landing-mockups-plan.md` section 6c, from `1_spec/01-users-and-journeys.md`)

| PQ | Question | Where this page answers it |
|---|---|---|
| PQ-01 | What is GT School? | The h1 |
| PQ-02 | Is it for my child? | "gifted and talented children" in the h1; the 90th percentile in the table, the proof strip and the steps line |
| PQ-03 | In person or online: what are my options? | The two rows and their doors: label, name, line, CTA |
| PQ-04 | Where is the campus? | The h1; door 1 line; table "Where and how" |
| PQ-05 | What does a day look like? | The week grid on the first screen (the bands, the bar, the two captions); table "The day" |
| PQ-06 | What does it cost, and can TEFA help? | Table "Tuition and access"; the TEFA module |
| PQ-07 | How do I apply? | "How to apply": four steps, two application links |
| PQ-08 | Who teaches my child? | The GT Anywhere bar label ("with live sessions from Guides"); door 2 line; table "Guides"; proof fact 3 |
| PQ-09 | How much in-person time does GT Anywhere have? | The strip under the grid; door 2 line; table "In-person time" |
| PQ-10 | What results does the school get, and is it accredited? | Silent by G0.5 items 2 and 3; "Contact admissions" and "Talk to admissions" lead to the person who answers it |
| PQ-11 | What happens after 8th grade? | Table "After 8th grade", deferred to admissions (Q-013) |
| PQ-12 | I am a current family, where do I go? | Header link; "Already a GT family?"; footer |
| PQ-13 | I am not ready to apply, what can I do? | "Questions before you apply": FAQ, admissions, tour, info session |
| PQ-14 | Is GT School part of Alpha School? | The provenance line under the h1 |

Deferred to the school sites: everything behind the door CTAs (curriculum detail, calendars, the Guides' names, the intensives' dates, the FAQ), because the landing routes and the sites explain (DD-22).

## Self-check

Run from the repo root on 2026-09-11 against the delivered files. Output pasted verbatim.

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M07-the-timetable --all`

```
## M07-the-timetable: 36 pass, 0 fail
  PASS R1 no forms
  PASS R2 one JSON-LD script only — 1 script tags
  PASS R20 D-039 declaration valid and named in the rationale
  PASS R3 external hosts
  PASS R3b local assets only
  PASS R4 no placeholder text
  PASS R5 numbers on the whitelist
  PASS R6 no "advisor" in text
  PASS R7 full names — Georgetown Campus x9, GT Anywhere x15
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
  PASS R14 size under 1 MB — 41 KB
  PASS R15 rationale sections

check-mocks: OK
```

### `python3 1_spec/tools/check-claims.py 0_plan/mockups/M07-the-timetable/index.html`

```
## 0_plan/mockups/M07-the-timetable/index.html
| Figure on the page | Register row | Occurrences | Status |
|---|---|---|---|
| "designed for students in the 90th+ percentile" | CR-011 | 4 | Unverified, public |
| "$10,400/year — GT Anywhere annual tuition, fully or partially covered | CR-021 | 1 | Unverified, public |
| Four in-person intensive weekends a year in Georgetown (four named 202 | CR-032 | 5 | Unverified, public |
| Georgetown mornings: "two 50-minute blocks and one 25-minute block wit | CR-033 | 6 | Unverified, public |
| GT Anywhere mornings: "two to three hours of 100% cognitive load" (aca | CR-034 | 3 | Unverified, public |
| Guides hold weekly one-to-one check-ins with each student ("Academic A | CR-035 | 2 | Unverified, public |
  NOTE unverified rows on the page (allowed in mocks, blocked for production): ['CR-011', 'CR-021', 'CR-032', 'CR-033', 'CR-034', 'CR-035']

check-claims: OK
```

### BUILDER-BRIEF greps

| Check | Result |
|---|---|
| `grep -c "<form" index.html`, `<input` | 0, 0 |
| `grep -c "<script" index.html` | 1 (JSON-LD) |
| Hosts in `href` and `src` (`index.html` and `styles.css`) | anywhere.gt.school, apply.gt.school, community.gt.school, gt.school, www.gt.school, schema.org (JSON-LD context) |
| Numbers in visible text | 09, 10, 10,400, 2026, 270, 512, 8, 9, 90, 9481 (all on the whitelist; the SVG's coordinates are attributes, not text) |
| "advis" in visible text | 0 (the `data-type="advisor"` attribute is allowed) |
| Fixed slots | 70 strings from `copy.md` sections 0 to 8 and the section 9 words used found verbatim by string match; the linked sources line found twice with its tags removed; provenance line once; page words outside `copy.md` sections 0 to 9: none |
| Raw hex in `styles.css` | 0; every `var()` resolves to `tokens-v2.css` or to a custom property defined in `styles.css` |
| `transition:` declarations, `@keyframes` | 0, 0 (the only `transition-duration` is the reduced-motion zeroing) |
| `vh` in `styles.css` | 0; `svh` once, the relaxed band's provenance-to-grid gap |
| Size | `index.html` 20,551 bytes plus `styles.css` 22,253 bytes, 42,804 bytes in all; `qa/` about 2 MB of captures |

### Runner: `node 0_plan/tools/shots.mjs 0_plan/mockups/M07-the-timetable --all` (final pass, `qa/fold.md` verbatim)

```
# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`; 2026-09-11T10:29:12.955Z; page `/0_plan/mockups/M07-the-timetable/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 321 | 350 | 468 | 586 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 88 | 315 | 344 | 455 | 573 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 323 | 441 | 559 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 323 | 441 | 559 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 294 | 412 | 530 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 294 | 492 | 691 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 295 | 324 | 443 | 561 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 296 | 414 | 533 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 323 | 521 | 720 | yes | report: page height 7378 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 286 | 286 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 237 | 275 | 557 | 557 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 243 | 280 | 541 | 541 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 294 | 324 | 497 | 629 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 271 | 301 | 474 | 606 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 308 | 481 | 613 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 292 | 330 | 615 | 821 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 292 | 330 | 619 | 824 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 344 | 394 | 521 | 639 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 286 | 316 | 481 | 613 | no | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Focus and forced colours

Captures: focus-cta.jpg (first door CTA focused); focus-plate.jpg (header lockup link focused); focus-footer.jpg (GT Anywhere footer link focused); forced-colors.jpg (forced-colors: active at V14). The critics judge these by eye.

## Console

PASS: no console errors.

## Result: all required rows pass
```

### SVG text and h1 measurement: `node 0_plan/mockups/M07-the-timetable/qa/measure.mjs` (`qa/svg-text.md` verbatim)

```
# SVG text and h1 measurements (qa/measure.mjs)

2026-09-11T10:29:39.179Z; page `/0_plan/mockups/M07-the-timetable/index.html`.

## Grid form, 960 to 1440 (and 1920): every SVG text box against every other, against its week area, against the door column

| Viewport | Form | Week area | Door column | Texts | Overlapping pairs | Clipped past the week area | Smallest slack to the week edge (label) | Row heights (head, Georgetown, GT Anywhere) |
|---|---|---|---|---|---|---|---|---|
| 1024 by 768 | grid, compact doors | 616px | 344px | 10 | 0 | none | 42px (Friday) | 32, 132, 132 |
| 1024 by 900 | grid, doors with lines | 616px | 344px | 10 | 0 | none | 42px (Friday) | 32, 226, 226 |
| 1100 by 720 | grid, compact doors | 691px | 345px | 10 | 0 | none | 49px (Friday) | 32, 132, 132 |
| 1152 by 864 | grid, doors with lines | 726px | 362px | 10 | 0 | none | 53px (Friday) | 32, 228, 228 |
| 1200 by 720 | grid, compact doors | 758px | 378px | 10 | 0 | none | 56px (Friday) | 32, 132, 132 |
| 1280 by 720 | grid, compact doors | 790px | 394px | 10 | 0 | none | 59px (Friday) | 32, 132, 132 |
| 1280 by 800 | grid, doors with lines | 790px | 394px | 10 | 0 | none | 59px (Friday) | 32, 204, 204 |
| 1366 by 648 | grid, compact doors | 847px | 423px | 10 | 0 | none | 64px (Friday) | 32, 132, 132 |
| 1366 by 900 | grid, doors with lines | 847px | 423px | 10 | 0 | none | 64px (Friday) | 32, 205, 205 |
| 1440 by 900 | grid, doors with lines | 875px | 437px | 10 | 0 | none | 67px (Friday) | 32, 206, 206 |
| 1440 by 720 | grid, compact doors | 875px | 437px | 10 | 0 | none | 67px (Friday) | 32, 132, 132 |
| 1920 by 960 | grid, doors with lines | 875px | 437px | 10 | 0 | none | 67px (Friday) | 32, 206, 206 |

## h1 lines at the fold rows (rendered box height over the line box)

| Row | Viewport | h1 size | h1 column | Lines | h1 height |
|---|---|---|---|---|---|
| V2 | 375 by 629 | 27.26px | 327px | 7 | 219px |
| V5 | 414 by 715 | 27.95px | 366px | 6 | 193px |
| V10 | 750 by 342 | 24.17px | 702px | 3 | 83px |
| V13 | 1024 by 768 | 38.68px | 629px | 5 | 222px |
| V14 | 1280 by 720 | 43.19px | 779px | 4 | 199px |
| V15 | 1366 by 648 | 44.70px | 836px | 4 | 206px |
| V16 | 1440 by 900 | 46.00px | 864px | 4 | 212px |
| V17 | 1920 by 960 | 46.00px | 864px | 4 | 212px |
```

Captures: `qa/V1.jpg` to `qa/V19.jpg` (viewport), `qa/V2-full.jpg` and `qa/V14-full.jpg` (full page), `qa/V2-rootx2.jpg` (32px root: the mark on its own row, the two links right-aligned beneath it, no overlap), `qa/focus-cta.jpg` (the `--color-focus` ring around the Georgetown CTA), `qa/focus-plate.jpg`, `qa/focus-footer.jpg` (the two-colour ring on the GT Anywhere footer link), `qa/forced-colors.jpg` (the bands stroked, the marks bordered, every label legible). Looked at by eye after the final pass: V14, V16, V13 (no divider or gap crosses any label; the GT Anywhere label sits under its bars with 42px or more to the week edge), V2, V5, V8, V10, V11, V2-rootx2.

### Pending for the director

The critics' scores; the DD-38 weight test (300 against 400) if the director wants it rendered on this direction; a screen-reader pass on the grid form (doors first, then the weekday header, the two rows' labels and captions, the strip); the in-app browser measurements under REQ-024; a decision on the two row captions (Departure 9); and, if D-039 lands, the V8 script against the segments already in the markup.
