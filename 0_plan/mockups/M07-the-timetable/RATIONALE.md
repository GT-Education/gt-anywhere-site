# M07 The Timetable: rationale

| Field | Value |
|---|---|
| Mock | M07 "The Timetable", `0_plan/mockups/M07-the-timetable/` (`index.html`, `styles.css`, this file, `qa/`) |
| Brief | `0_plan/kb/briefs/M07.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1 (fold method with computed h1 lines, the compact door rule, the V10 landscape recipe, K3's two-colour ring); runbook `0_plan/17-design-studio-runbook.md` sections 4, 6, 7; K4 section 8.1 rows V6 and V8 |
| Lens order | L1 objective, L3 mission, L2 continuity, L4 exclusivity. New direction |
| Built | 2026-09-11, design engineer (Fable fork). Build pass, then **iteration 1** (2026-09-11, after both critics' scorecards: `0_plan/ensemble/critic-fable-M07.md` Composition 3 and Craft 3, `0_plan/ensemble/critic-astra-M07.md` Craft 3), summarised under Iteration 1 below. The runner `node 0_plan/tools/shots.mjs 0_plan/mockups/M07-the-timetable --all` (Playwright from the npx cache, headless Chromium) measured the 19 rows on each pass and wrote `qa/V1.jpg` to `qa/V19.jpg`, `qa/V2-full.jpg`, `qa/V14-full.jpg`, `qa/V2-rootx2.jpg`, `qa/focus-cta.jpg`, `qa/focus-plate.jpg`, `qa/focus-footer.jpg`, `qa/forced-colors.jpg` and `qa/fold.md`; `qa/measure.mjs` (same Playwright) measured every SVG text box from 960 to 1440 and the h1 line counts and wrote `qa/svg-text.md`; `qa/metrics.py` is the advance-width estimator the fold sums were designed with. No other browser tool was used |
| State | No JavaScript (D-039 undecided): one JSON-LD script, no `data-d039` declaration. **The V8 draw waits on D-039; the week grid ships complete at rest as inline SVG, which is the no-JavaScript state K4 section 8.1 V8 requires and the only state this mock has.** No photograph (DD-42 default state, RF-25); the brief's photographed state is identical. Copy: `copy.md` v1.1 sections 0 to 8 verbatim; from section 9 the weekday names, the schematic labels "In person" and "Online", and the skip-link label |
| Tokens | `../shared/tokens-v2.css`. Layer-2 tokens used are listed with their register rows below (`TOKENS-V2.md` rule); this file names DD-38, DD-39, MN-16 and D-039 |

## Direction

Hypothesis: a parent deciding between in person and online is really deciding what her child's week looks like, so show the week. The first screen puts the Georgetown day and the GT Anywhere day beside each other in one grid, Monday to Friday, each row named where it starts and with the Guides named in both rows, so the difference is read in one look (the deck's "The day" and "Guides" cells; DD-05). The two schools share a program and differ in where the child sits: the Georgetown row fills the day with two bands (mornings from 9 to noon, afternoons of workshops, projects and competitions) that run the whole week because every school day is the same; the GT Anywhere row holds one band and then nothing, and the deck's own sentence, "The rest of the day is yours.", names the blank. Every band is drawn at one height: the difference a reader sees is how much of the day is occupied, two bands against one, never a bar's thickness (iteration 1; no register row states an afternoon duration). Each row ends in its door, so the door is the row's conclusion: label, name, CTA, with the door's sentence under the grid. Below the grid a one-line strip, opened by the school it belongs to, carries the four intensive weekends as four marks and a sentence, never placed on the calendar, because the intensives have no weekday and the deck gives no dates (Q-017).

The objective (L1) is served by the two CTAs sitting at the ends of the two rows a parent has just read; mission (L3) by the diagram being made only of deck facts with register rows (nine to noon, two hours, two to three hours, four weekends) and by nothing being drawn to scale, Guides named in both rows (the GT Anywhere band label and the Georgetown caption) and in both doors, and the strip's sources one screen down; continuity (L2) by the estate's marks, faces, button case and swatches, with `--color-georgetown-tint` and `--color-anywhere-tint` used as the bands' colours so the grid reads as the two sites' own colours side by side; exclusivity (L4) by restraint and the stated bar below the fold, never by price or wealth cues (MD-25).

Exemplars, as the brief borrows them: Yale School of Architecture's programs section names each option in full at the start of its own row (the captured crop labels floors and programs, not buildings, which iteration 1 corrects in this file), borrowed as the two rows named where they start and labelled by format, "In person" and "Online" (C31); Every's category rows repeat one module, borrowed as the weekday-column module repeated five times and the two rows repeating one row module (C21); Crimson Global Academy's formats section sets parallel cards, borrowed as the two-format framing, one row each, identical in structure (C31). Avoided: CGA's stat band whose counters render frozen at "0+" without a script (C33): the diagram here is complete at rest, every bar and label drawn by the browser before any script could run, and the V8 draw, if D-039 allows it, only replays what is already there.

## h1

The umbrella sentence, `copy.md` section 1, is the one `<h1>` (`data-fold="h1"`): Literata 400 at `--text-3xl` (27.26px at 375, 46px at 1440), `--leading-tight` 1.15, across eight of twelve columns from a 60rem container (`max-width: min(35ch, calc(66.667% - .667rem))`, the eight-column width with 32px gutters, capped at the contract's 35ch) and the full column below that, capped at 35ch. It is the only element that decodes "GT" and names both ways to attend before either door (DD-20, DD-33). Two typographic no-breaks keep the phrasing whole without changing a word (M03's critic finding, carried forward): "in&nbsp;person" never splits, and "from anywhere." sits in a `span.nowrap` released only when the column is narrower than 12rem (a doubled root on a phone), so the last line is never one word. `text-wrap: balance` applies from 768px, where the sentence is four lines; the seven-line phone setting stays unbalanced (K10 T-K10-15). On the phone-landscape row only (600px and wider, 400px and shorter) the h1 steps one token down to `--text-xl` with the 35ch cap lifted, as CONTRACT section 2 permits; declared under Departures.

Measured line counts (`qa/measure.mjs`: rendered box height over the line box): 7 at V2 (219px), 6 at V5 (193px), 3 at V10 (83px, `--text-xl`), 5 at V13 (222px, the 629px eight-column width at 1024), 4 at V14 (199px), 4 at V15 (206px), 4 at V16 and V17 (212px). The contract's six-line estimate at V2 is one line optimistic, as M03 and M12 also found; `qa/metrics.py` with Literata Regular's own advances gives 7 at 360 to 402px and 6 at 412 to 430px. The door names are h3 under a visually hidden h2 "Two ways to attend" (an allowed section 1 heading); the second-screen h2s are "Compare the two schools" (visually hidden, the caption is the visible title), "What is true of both schools", "How to apply", "Questions before you apply" and "Already a GT family?". No level is skipped; the day cards' names are paragraphs, not headings, so the two school names are headings once each.

## Iteration 1 (2026-09-11): what changed and why

One consolidated pass on both scorecards before the gate. The studio critic scored Composition 3 and
Craft 3; Astra scored Craft 3. Where the two disagreed the studio critic was followed, and it is said
in the row. Nothing in `copy.md` sections 0 to 8 changed; the only copy movement is three deck cells
that now carry their own section 9 rows.

| # | Change | Where | Evidence |
|---|---|---|---|
| 1 | **The grid no longer hollows.** Each week row is the height of its own diagram (a fixed-height SVG under an HTML row name), the door beside it takes the compact form at every grid width, and the two doors sit on the parent's rows through `grid-template-rows: subgrid` so each door ends where its row ends. At 1440 by 900 the rows were 206px with content ending 83px and 112px short; they are now 175 and 148 with nothing but the row's own padding under the last mark, and the second CTA has come up from 821 to 735 of 876 | `styles.css` grid-form block; `index.html` week rows | `qa/fold.md`, the geometry quoted under Fold, `qa/V16.jpg` |
| 2 | **The forced-colours block works and no longer strikes through the labels.** It is now the last block in the stylesheet, so it outranks the token rules by source order instead of losing to them at equal weight; the per-segment `stroke: CanvasText` that crossed both Georgetown labels four times each is gone, replaced by one stroke-only `.band-edge` rect per band. Measured under `forced-colors: active`: band fills `Canvas`, every label and caption `CanvasText`, rules `CanvasText`, gaps `Canvas`, marks bordered. Both critics asked for exactly this | `styles.css` last block; `index.html` `.band-edge` | `qa/forced-colors.jpg`, computed styles measured in headless Chromium |
| 3 | **Each row is named where it starts, and has an accessible name.** "Georgetown Campus" and "GT Anywhere" open their rows in `--text-lg` Literata as HTML above the SVG, and each `.week-row` is a `role="group"` named by that paragraph through `aria-labelledby`. The tie is no longer row adjacency across 875px | `index.html`, `styles.css` `.row-name` | `qa/V16.jpg`, `qa/V13.jpg` |
| 4 | **One band height, and the hours claim is gone.** Every band is 28px; taste decision 7 no longer says bar heights encode hours. Occupancy carries the difference | `index.html`; taste decision 7 | `qa/V16.jpg` |
| 5 | **The five day columns run through both rows**, as 6px gaps in the page ground between each band's five segments, drawn under the label so no rule crosses a word; the band labels sit inside their bands in both rows, one grammar; the week header's rule stops at the week's right edge, so the empty sixth cell over the door column is gone | `index.html`, `styles.css` | `qa/V16.jpg`, `qa/V14.jpg`, `qa/svg-text.md` (0 overlapping pairs) |
| 6 | **The phone has the picture.** Below 1024 each band is five day cells drawn as a `linear-gradient` in the same grammar as the grid, and the picture now follows the doors directly instead of two repeated sentences; the day card drops the repeated schematic label | `index.html`, `styles.css` `.bar` | `qa/V5.jpg`, `qa/V2-full.jpg`, `qa/V11.jpg` |
| 7 | **The strip says whose weekends these are**: the fixed door name "GT Anywhere" opens it as a run-in label, and in the grid form it sits under the week column, not under both schools (Astra) | `index.html`, `styles.css` `.strip` | `qa/V16.jpg` |
| 8 | **Guides are named in both rows**: "Guides on campus in every session." (the deck's Georgetown "Guides" cell) joins the Georgetown caption. The fixed door copy is untouched (Astra) | `index.html`; `copy.md` section 9 | `qa/V16.jpg` |
| 9 | **The door CTA is 44px at every row**: `align-self: end` instead of stretching in the door's `1fr` row (measured 60px at 1280 by 720 and 61px at 1024 by 768 before). The door also takes the week row's inset, so its label starts on the row name's line and its CTA ends on the caption's | `styles.css` `.door .cta` | measured 44px at seven viewports |
| 10 | **The school cue is `--color-georgetown-tint`**, not `--color-surface`, which keeps the generic Proof and Families bands. Identical pixels, honest naming, and the collision is now visible to the design system | `styles.css` | `check-mocks.py` R11 |
| 11 | **Four false floors fixed** (V5, V8, V11, V16, and V17 which the restructuring exposed). The week picture follows the doors on the phone rows, the door sentences follow the strip, the compare anchor now opens the comparison section (32px above, 32px below) instead of floating 70px clear of it, and the relaxed height band spends its air on the diagram. Every required row now ends on real ink | `styles.css`, `index.html` | `qa/fold.md` "Next band evidence"; Result: all required rows pass |
| 12 | **The footer marks met no rule**: `1.5rem` is 24px, below K12 V2's 27px phone floor and its 32px desktop size. They are 27px, and 32px from a 48rem page container, matching M03's fix (`shared/CONTINUITY.md`) | `styles.css` `.footer-logos img` | `qa/V14-full.jpg`, `qa/focus-footer.jpg` |
| 13 | **Rationale corrections, no page change**: C04 is in `CONCEPTS.md`, not K6; Yale's cited crop labels floors and programs, not literal buildings, and "Online" is a format, not a place; `shape-rendering: crispEdges` applies to the `.rule` class, not the band rects; the bar-height claim is withdrawn (see 4); the runner block pasted in Self-check is this pass's, not an earlier one. The contrast figures were re-derived from the token values and stand as written (17.69, not the 17.66 the studio critic computed) | this file | Self-check below |

Judged and not done, with the reason: the studio critic also asked for the day card's school name to
be dropped at V11 while the door card is on screen. The schematic label is dropped, and the name is
kept at every width, because the card is a picture and the same argument that put a name at the start
of every week row applies at card scale; without it the two pictures are told apart only by order.
Recorded as a disagreement rather than a silent departure.

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id and name, lens order | M07 The Timetable; L1, L3, L2, L4 as above | Done |
| Thesis | The week grid on the first screen, both schools' days beside each other, each row named at its start, Guides in the GT Anywhere band label, in the Georgetown caption and in both door lines; the rows end in their doors | Done |
| Exemplars | Yale's named parallel options (C31), Every's repeated module (C21), CGA's parallel cards (C31) as mapped under Direction; CGA's script-frozen counters avoided (C33): complete at rest | Done |
| Composition | Header 56 (88 below 390px, where the two utility links stack so the mark keeps 27px; 56 from 390px); h1 across eight columns from 960px; provenance; the diagram: a weekday header row (Monday to Friday, `copy.md` section 9), then two named rows. The Georgetown row: the name "Georgetown Campus" at its start in `--text-lg` Literata, a morning band "Mornings from 9 to noon: about two hours of focused academics", an afternoon band "Afternoons: workshops, projects and competitions", and the caption "Every school day. Guides on campus in every session." The GT Anywhere row: the name "GT Anywhere" at its start, one band "Two to three hours of focused mastery academics a day, with live sessions from Guides", and the caption "The rest of the day is yours." Every band is five day segments at one height (28px) separated by 6px gaps in `--color-bg`, so the five weekday columns run through both rows. The doors end the rows (label, name, CTA; the door sentences under the grid at every grid width, see the compact rule), each CTA at its row's bottom edge. Under the week the strip, opened by "GT Anywhere", with four marks and "Four intensive weekends a year in Georgetown", not on a calendar. Below a 60rem container the doors come first as two cards (M01 form), then the same picture at card scale (each band five day cells in a `linear-gradient`), then the strip, then the door sentences; from 40rem the doors and the day cards sit two abreast. The SVG rows' text is `--text-sm`; the grid's minimum width is 960px (a 1024 viewport at the 32px margin) and below it the cards take over | Done; fold sums restated below with measured bottoms |
| Typography | SVG labels `--text-sm` Inter Tight 500 (computed 14.62px at 1024, 15px at 1440); row names at the start of each week row, and the door names, `--text-lg` Literata (20px at 1024, 24px at 1440), so the diagram has two type levels, not one; strip caption `--text-sm` muted; h1 Literata 400 `--text-3xl`; door labels Inter Tight 500 `--text-xs` uppercase .06em muted; door lines Inter Tight 400 `--text-base` at `--leading-prose` 1.5; CTAs Inconsolata 600 `--text-btn` uppercase; the $10,400 figure in Inconsolata 600 `tabular-nums` | Done |
| Color and surface | `--color-bg` page; bands `--color-georgetown-tint` (Georgetown) and `--color-anywhere-tint` (GT Anywhere), the school cue never `--color-surface`, which grounds the generic Proof and Families bands; rules `--color-border` (the week header's top rule, the row rules, the weekday dividers, the week-to-door rule, the strip's rule); one accent use on the first screen, the four `--color-accent` marks as .75rem squares (RF-37); CTAs `--color-navy` fill with `--color-on-navy` text; focus `--color-focus` at 2px offset on light surfaces, the two-colour ring on the navy footer | Done; `qa/focus-cta.jpg`, `qa/focus-footer.jpg`, `qa/forced-colors.jpg` |
| Imagery | Diagram-led; no photograph; the photographed state is the same page | Done |
| Motion | Nothing animates. V8 considered and specified below, not shipped (needs the D-039 script); the no-JavaScript state shows the grid fully drawn and is the shipped state. V6 considered on the steps and the secondary CTAs (`data-motion="v6"` hooks), not shipped. Reduced motion: every computed duration 0 (runner) | Done |
| Copy | Sections 0 to 8 verbatim (70 fixed strings checked by string match, the linked sources line with tags removed); weekday names, the schematic labels and the skip-link label from section 9; every band label is a phrase of the deck's "The day" cell; the strip is the "In-person time" cell, opened by the fixed door name "GT Anywhere" as a run-in label; the three captions are deck cells placed as diagram captions and now carry their own `copy.md` section 9 rows (iteration 1): "Every school day." (Georgetown "In-person time"), "Guides on campus in every session." (Georgetown "Guides") and "The rest of the day is yours." (the second sentence of the GT Anywhere "The day" cell) | Done |
| Conversion | Doors inside the grid rows on the first screen from 960px, first on the phone rows, with the week picture immediately under them there; the compare anchor under the grid and before the table, opening the comparison section (checker R19); table with repeated values (DD-43); proof strip with the four facts and the sources line; steps with two application links; four secondary CTAs with the R14 tour label; current families; footer | Done |
| Acceptance | `check-mocks.py` 36 pass, 0 fail; `check-claims.py` OK with 9, noon, two, three and four mapping to CR-033, CR-034 and CR-032 and nothing else added; the fold rule met at V1 to V17, V10 included, **and every required row ending on real ink** (the runner's false-floor test: "all required rows pass"); SVG text: zero overlapping pairs and zero clipped labels at every width measured from 1024 to 1920 (`qa/svg-text.md`); every band label legible in forced-colours rendering, which iteration 0 missed and iteration 1 fixed and measured; the grid complete on first paint under reduced motion (nothing is hidden at rest); this file names DD-38, DD-39, MN-16 and D-039 | Checkers and runner pasted in Self-check; the critics' scores on this iteration are pending |

## Fold: the estimate designed to, and the measured result

Method: CONTRACT section 2 with the h1 line counts computed from Literata Regular's own advances (`qa/metrics.py`, greedy wrap, no kerning) and then measured; gaps are the space tokens in `styles.css`. Height bands: at or below 639px tall the masthead gaps are 8 / 8 / 8 (top, h1 to provenance, provenance to grid); 640 to 899px 16 / 8 / 16; from 900px 24 / 12 / `clamp(24px, 8svh, 96px)` (72 at 900, 77 at 960). Compact door (stacked forms): padding 8 + label 15 + 4 + name 23 + 8 + CTA 44 + padding 8 = 110.

**Grid form, iteration 1.** Each week row is the height of its own diagram, not of the door beside it: week header 1 + 32 = 33; Georgetown row 1 + pad + name 28 + 8 + SVG 92 + pad; GT Anywhere row 1 + pad + name 28 + 8 + SVG 58 + pad, or the door where the door is taller. `--week-pad` is 8 below 900px tall and `clamp(8px, 2.6svh, 48px)` from 900px (23 at 900, 25 at 960), and the door carries the same inset, so the door label starts on the row name's line and the CTA ends on the caption's. The door takes the compact form (label, name, CTA) at **every** grid width, with both door sentences under the strip, so a three-line sentence can never set a row's height again — the hollow rows the critics measured (206px rows with content ending 83px and 112px short at V16) are gone: measured at V16 the Georgetown row is 435 to 610 with its diagram 458 to 587, and the GT Anywhere row 610 to 758 with its diagram 633 to 728, so nothing but the row's own padding sits under the last mark.

| Row | Viewport | Limit | Brief's estimate | Estimate designed to (sum to the second CTA's bottom) | Measured CTA bottoms (Georgetown, GT Anywhere) | Spare |
|---|---|---|---|---|---|---|
| V2 | 375 by 629 | 605 | 550 | header 88 + 8 + h1 7 lines 219 + 8 + provenance 21 + 8 + card 110 + 8 + card to its CTA 102 = 572 | 455, 573 | 32 |
| V5 | 414 by 715 | 691 | 663 | 56 + 16 + 193 + 8 + 21 + 16 + 110 + 8 + 102 = 530 | 412, 530 | 161 |
| V10 | 750 by 342 | 318 | (recipe 313) | 56 + 8 + h1 3 lines 83 + 8 + 21 + 8 + card 100 = 284 | 286, 286 | 32 |
| V13 | 1024 by 768 | 744 | not stated | 56 + 16 + h1 5 lines 222 + 8 + 22 + 16 + 33 + 143 + 115 − 8 = 623 | 508, 623 | 121 |
| V14 | 1280 by 720 | 696 | 657 | 56 + 16 + 199 + 8 + 22 + 16 + 33 + 144 + 116 − 8 = 602 | 486, 602 | 94 |
| V15 | 1366 by 648 | 624 | not stated | 56 + 16 + 206 + 8 + 22 + 16 + 33 + 144 + 116 − 8 = 609 | 493, 610 | 14 |
| V16 | 1440 by 900 | 876 | 721 | 56 + 24 + 212 + 12 + 26 + 72 + 33 + 175 + 148 − 23 = 735 | 587, 735 | 141 |

Deltas from the brief: at V2 the h1 sets in seven lines (219px), not the contract's six (188px), and the header is 88px below 390px; the compact door rule absorbs both (32px spare). At V5 the brief expected the lines inside the doors (663); with the measured three-line door lines the rows-with-lines form would end at about 745 of 691, so the compact rule holds to 799px tall and V5 ends at 530. At V14 the brief's 657 assumed a 159px h1 and 96px rows; the h1 is 199px and the rows are 144 and 116, so the second CTA ends at 602. At V16 the brief's 721 assumed 180px doors; with the door compacted the rows are the diagram's own 175 and 148, the relaxed band opens a 72px `svh` gap under the provenance line, and the second CTA ends at 735 of 876 — 86px higher than iteration 0's 821, which is the 195px of hollow recovered less the air the relaxed band spends on the diagram.

The other rows, measured (`qa/fold.md`):

| Row | Viewport | Limit | Measured CTA bottoms | Result |
|---|---|---|---|---|
| V1 | 360 by 740 | 716 | 468, 586 | Pass (header 88) |
| V3 | 390 by 664 | 640 | 441, 559 | Pass |
| V4 | 393 by 659 | 635 | 441, 559 | Pass |
| V6 | 412 by 839 | 815 | 492, 691 | Pass (lines inside the doors: 839 is over the 800px threshold) |
| V7 | 402 by 681 | 657 | 443, 561 | Pass |
| V8 | 430 by 739 | 715 | 414, 533 | Pass; the day cards open under the doors and are cut at 739 |
| V9 | 390 by 844 | emptiness only | 521, 720; page height 7309 | Not empty: the day cards begin under the doors and are cut at 844 |
| V11 | 768 by 1024 | 1000 | 577, 577 | Pass (doors two abreast with their lines; the two day pictures beneath) |
| V12 | 834 by 1194 | 1170 | 572, 572 | Pass |
| V17 | 1920 by 960 | 936 | 593, 744 | Pass; content capped at 1312px |
| V18 | 320 by 256 | reflow only | 521, 639; scrollWidth 320 | No horizontal scroll; header 88 with the links stacked |
| V19 | 1024 by 576 | 552, reported | 492, 607 ; scrollWidth 1024 | Reported over by 55px (DD-44: reported, not required); nothing clipped, nothing overlapping. The cost is the five-line h1 at the eight-column width plus the two rows |

**Continuation at the fold (the runner's "Next band evidence", iteration 1).** The runner now fails a row whose first screen ends on a false floor, and iteration 0 failed four rows that way (V5, V8, V11, V16). What crosses the bottom edge now, measured: the day-card picture at V1 to V10 (for example `ul.days` ink 554 to 928 at V5 and 557 to 931 at V8), the comparison section at V11 and V12 (ink 990 to 3397 at V11), the door sentences at V13, V14, V16 and V17 (ink 863 to 973 at V16, 877 to 987 at V17), and the strip at V15. Two structural changes did that work: below 1024 the week picture now follows the doors directly and the door sentences follow the strip, so what continues past the edge is the diagram a parent is being shown, not a gap; and the compare anchor now opens the comparison section (32px above it, 32px below) instead of floating 70px clear of it, which brings the section's first ink across the edge at V11.

Breakpoints and thresholds: grid form from a 60rem first-screen container (960px: a 1024 viewport at the 32px margin); doors and day cards two abreast from 40rem; compact doors below 800px tall on the stacked forms and at every width of the grid form; phone-landscape recipe at 600px and wider when 400px or shorter; comparison table from a 58rem compare container (M03's measured threshold, three columns at 928px), stacked blocks below.

### The week grid, measured (`qa/measure.mjs`, `qa/svg-text.md`)

Twelve texts per width (five weekday labels, three band labels, two captions, two row names; the row names are HTML above their SVG and are measured as text ranges, not as their full-width blocks).

| Viewport | Form | Week area | Door column | Texts | Overlapping pairs | Clipped | Smallest slack to the week edge | Row heights (head, Georgetown, GT Anywhere) |
|---|---|---|---|---|---|---|---|---|
| 1024 by 768 | compact doors | 616px | 344px | 12 | 0 | none | 42px (Friday) | 33, 143, 115 |
| 1024 by 900 | compact doors | 616px | 344px | 12 | 0 | none | 42px | 33, 174, 140 |
| 1100 by 720 | compact doors | 691px | 345px | 12 | 0 | none | 49px | 33, 143, 115 |
| 1152 by 864 | compact doors | 726px | 362px | 12 | 0 | none | 53px | 33, 143, 115 |
| 1200 by 720 | compact doors | 758px | 378px | 12 | 0 | none | 56px | 33, 144, 116 |
| 1280 by 720 | compact doors | 790px | 394px | 12 | 0 | none | 59px | 33, 144, 116 |
| 1280 by 800 | compact doors | 790px | 394px | 12 | 0 | none | 59px | 33, 144, 116 |
| 1366 by 648 | compact doors | 847px | 423px | 12 | 0 | none | 65px | 33, 144, 116 |
| 1366 by 900 | compact doors | 847px | 423px | 12 | 0 | none | 65px | 33, 175, 141 |
| 1440 by 900 | compact doors | 875px | 437px | 12 | 0 | none | 67px | 33, 175, 141 |
| 1440 by 720 | compact doors | 875px | 437px | 12 | 0 | none | 67px | 33, 145, 117 |
| 1920 by 960 | compact doors | 875px | 437px | 12 | 0 | none | 67px | 33, 179, 145 |

(The row heights in this table are `qa/measure.mjs`'s own run, whose viewports are not all matrix rows; the door's matching inset adds a few pixels to the GT Anywhere row at 900px and taller, measured 148 at V16 and 151 at V17 in the geometry probe quoted above.)

Geometry: the door column is `clamp(21.5rem, 33.3%, 30rem)` with a 32px inner gutter, so at the 960px minimum the door holds the Georgetown CTA (Inconsolata 600 at 17.62px: 273px of label plus 32px of padding inside 312px) and the week area holds the GT Anywhere label (561px inside 616px less 12px of inset). **Every band is 28px tall — one schematic height, no ratio** (iteration 1: 36px against 28px asserted a proportion no register row carries, and gave the taller bars to the school with the fewer stated academic hours). Each band is five rects one column wide, separated by 6px gaps stroked in `--color-bg` at the column boundaries, drawn under the label, so the five weekday columns run through both rows and no `--color-border` rule ever crosses a word; `shape-rendering: crispEdges` applies to the `.rule` class (the weekday dividers), not to the band rects. A stroke-only `.band-edge` rect sits over each band, `fill: none; stroke: none` in normal rendering, and is the band's single outline under forced colours. Five segments per band, so the V8 draw, when D-039 allows it, still has its five weekday columns.

## Decisions applied

| Id | How it is applied in this mock |
|---|---|
| G0.5 items 1 to 6 | Umbrella sentence as the h1; no speed figure; no accreditation claim or mark; "Tuition on request. Ask admissions."; Guides everywhere; the provenance line once (checker R18) |
| DD-04 | Cue set: schematic label ("In person" / "Online") on the door, full school name on the door and at the start of the school's week row, position, and the school tint (`--color-georgetown-tint`, `--color-anywhere-tint`) on the door card and on that row's bands; no icon and no photograph. `copy.md` section 1 asks for label plus icon: the icon is not used, and the name, the row name, the tint and the position carry the cue instead (declared under Departures, Astra's finding) |
| DD-05, DD-23 | "Explore the Georgetown campus" / "Explore GT Anywhere" at the row ends (`first_screen`) and again after the table (`after_comparison`) |
| DD-06, DD-43, R6 | A real `<table>` with caption, `scope="col"` and `scope="row"`, shared rows first with their values repeated; a table from a 58rem container, stacked blocks labelled with the school name below |
| DD-07, DD-17, MD-16 | No outcome figure, no accreditation claim; every figure on a register row |
| DD-08, DD-31, DD-42 | No photograph; the brief's photographed state is identical, so there is nothing to gate |
| DD-10, MD-06, MD-25 | Selectivity is the stated bar (90th percentile) in the table, the proof strip and the steps line; access ($10,400, TEFA) in the same table row and the TEFA module; no wealth cue, no countdown |
| DD-12, DD-13, MD-11 | Header: lockup, "Current families", "Contact admissions"; no menu; the phone number only in the footer; not sticky |
| DD-14, MD-23 | Built at 375 first: the doors come first as cards, the week picture follows them directly as two day cards (each band five day cells), then the strip, then the two door sentences (iteration 1: the picture, not the repeated sentences, is what a phone reader meets under the CTAs) |
| DD-19 | Style envelope: every value a token or a named departure (Departures) |
| DD-21 | The doors are a `<ul>` whose items sit on the grid's school rows through `grid-template-rows: subgrid`, so each door is bound to its own row however tall that row is; a third campus is a third `<li>` and a third week row, and the row module repeats (Every, C21). Designed for, not demonstrated: no third-campus copy exists |
| DD-25, DD-27, REQ-070 | Two "Begin application" links with `?school=`; full school names everywhere; no unscoped application link |
| DD-26 | Both doors identical in markup and treatment; in the grid form both CTAs sit at their row's bottom edge (`align-self: end`, measured 44px at every row), so the two rows end alike |
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
| K3 sections 5c to 5g | Text `--color-text` (17.69 on bg, 16.10 on the Georgetown tint, 16.30 on the GT Anywhere tint; recomputed from the token values in iteration 1, and 17.69 not 17.66 is what the sRGB formula gives); muted `--color-text-muted` (6.25 on bg, 5.69 on the Georgetown tint, 5.76 on the GT Anywhere tint); on-navy 14.58; the accent never as text; focus per section 5d; forced-colours fallback per F38 as the **last block in the stylesheet**, so the band fills, the text, the rules, the gaps and the marks all flip (measured under `forced-colors: active`, iteration 1) |
| K6 section 5b | Equal weight: same structure, type, padding and CTA style in both rows and both cards; the labels name place and format; the CTA labels are full school names plus a verb matching the destination |
| C04 (`0_plan/kb/CONCEPTS.md`, not K6, corrected in iteration 1) | Each source phrase in the sources line links to the page it names, with `outbound_school_site` events; the sentence is unchanged (M06's Mission finding, adopted) |
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
| 1 | The school cue is `--color-georgetown-tint` and `--color-anywhere-tint`, never `--color-surface` (iteration 1: the two Georgetown values are byte-identical, `#f8e8de`, and `--color-surface` also grounds the Proof and Families bands, so the door, the day card and the bands now name the school's own token while the generic bands keep the generic one). The door cards on the stacked forms take the school's tint; in the grid form the door cells stay on `--color-bg`, the row's bands carry the tint, and the row's name at its start carries the tie | One colour per school across the door, the day card and the grid, named honestly for the design system; in the grid a tinted door cell would make a second large block beside the bands, and the row name is a stronger tie than a second block of colour |
| 2 | Inside the week the band labels are `--color-text` and the captions `--color-text-muted`, both `--text-sm`; above them each row's name is `--text-lg` Literata | Two levels, not one: the brief binds the SVG labels to `--text-sm`, and the row name (its own HTML above the SVG, so it can wrap) gives the diagram the hierarchy iteration 0 lacked, without widening any unwrappable string |
| 3 | Every band label sits inside its band, across the five day segments, in both rows (iteration 1; the GT Anywhere label used to sit under its bars) | One grammar for the two rows, and the timetable convention: the block carries its own label. The 6px day gaps are drawn before the label and in the page ground, never in a border colour, so the label stays whole and legible over them (`qa/V16.jpg` crop, `qa/V5.jpg` crop); a day cell one fifth of the week wide could never hold a 561px label |
| 4 | The five day columns run through both body rows as 6px gaps in `--color-bg` between the band's five segments; the only `--color-border` dividers are in the weekday header | Iteration 1: half a grid was two grammars for one fact (undivided bands against separated bars). A gap in the page ground divides the week without putting a rule through a word, which is what the first runner pass caught and what Departure 7 exists to prevent |
| 5 | Three deck cells as captions: "Every school day. Guides on campus in every session." under the Georgetown bands and "The rest of the day is yours." under the GT Anywhere band | The first says why the Georgetown pattern repeats Monday to Friday; the second (added in iteration 1, Astra's finding) names the Guides in the Georgetown row so the brief's shared teaching model is complete in the opening picture, not only in the GT Anywhere band label and the table; the third names the blank that is the point of the GT Anywhere row. All three are the schools' own cells in the deck's words and now carry `copy.md` section 9 rows. "Every school day." also does duty as the table's "In-person time" value on the same page, and under a header already reading Monday to Friday it is the caption that earns least — it is kept because the copy ruling admits it, and it is the sentence to cut first if the director wants one fewer |
| 6 | Weekday labels in sentence case, muted, centred in their columns | Calendar words, not labels of state; the door labels keep the uppercase label role |
| 7 | One height for every band, 28px | Iteration 1: a drawn proportion is a figure. No register row states an afternoon duration, 36px against 28px matched no stated ratio, and it gave the taller bars to the school with the fewer stated academic hours. The difference a reader sees is now occupancy — two bands against one, and the blank the caption names — which is exactly what the two deck cells say |
| 8 | The strip is opened by the fixed door name "GT Anywhere" as a run-in label, then the four marks (.75rem squares with `--radius-sm`), then the muted sentence; in the grid form it sits under the week column only, not under the doors | Iteration 1, Astra's finding: the strip described one school while spanning both. The run-in is a fixed slot reused, not a new word, and it says whose weekends these are; position under the GT Anywhere row supports it, and the accent is still spent once on the first screen (K3 section 5f, RF-37) |
| 9 | In the grid form each door's CTA is placed at the bottom of the door's `1fr` row with `align-self: end`, and the door carries the week row's own inset | Both rows end on their CTA, one baseline per row, and the label and name start on the row name's line. Iteration 1: without `align-self` the button stretched to fill the `1fr` row and measured 60px at 1280 by 720 and 61px at 1024 by 768 against 44px at 1440 by 900; it is 44px at every row now (measured) |
| 10 | The two door sentences follow the strip on every form (iteration 1; they used to follow the second CTA directly on the phone rows) | They still follow the second CTA, as the contract's compact door rule requires, and neither sits between the CTAs; putting the week picture between them and the doors means a phone reader meets the diagram under the CTAs instead of two repeated sentences, which is also what carries real ink past the fold at V5 and V8 |
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
| `../shared/img/gt-school-logo-h.svg` (139 by 32) | Header lockup on `--color-bg`, 27.6px tall at 360 to 32px from 800 (`clamp(1.6875rem, 1.5rem + 1vw, 2rem)`); footer, on a `--color-bg` plate inside the navy panel, **27px to a 48rem page container and 32px above it** | "GT School" | Brand mark published by GT | none needed |
| `../shared/img/gt-anywhere-logo-h.svg` (252 by 48; white lettering, orange mark) | Footer, directly on the `--color-navy` panel, **27px to a 48rem page container and 32px above it** | "GT Anywhere" | Brand mark published by GT | none needed |
| The week grid | Inline SVG in the document (a header and two rows), `<rect>` and `<line>` shapes with real `<text>`, each row named by an HTML `<p class="row-name">` above its SVG; the day cards are HTML with the day columns drawn as a `linear-gradient` | Real text, read in order; each `.week-row` is a `role="group"` named by its row name through `aria-labelledby` | Drawn for this mock from deck phrases | The day cards below 960px; the SVG needs no image file |
| The four marks | Four `<span class="mark">` shapes in `--color-accent`, `aria-hidden`, after the strip's "GT Anywhere" run-in | none (decorative; the sentence beside them carries the fact) | | Bordered in `CanvasText` under forced colours (measured) |
| Photographs | None. The brief's default and photographed states are identical (diagram-led); DD-42 (a) and RF-25 would gate any file anyway. `shared/CONTINUITY.md` records that the estate's own hero is a composited cut-out of an identifiable child over grained line artwork, which AD-11 and RF-25 gate here whatever the estate does | | | The page as built |

Both marks load eagerly (no `loading="lazy"`): checker R13 exempts SVG logos, and M03's runner pass showed a lazily loaded footer mark missing from the full-page capture. Open Graph carries title and description only. **Mark sizes, iteration 1:** the footer marks were `1.5rem` (24px), below K12 V2's 27px phone floor and its 32px desktop size at every width; they are now 27px, and 32px from a 48rem page container, which is the fix M03 took (`shared/CONTINUITY.md`, "Mark sizes, a defect this reference exposed"). The header mark's clamp (27.6 to 32px) already met the rule.

## Colour and contrast (WCAG 2.x ratios computed from the token values, 2026-09-11)

| Pairing | Where | Ratio | Threshold |
|---|---|---|---|
| `--color-text` on `--color-bg` / `--color-georgetown-tint` / `--color-anywhere-tint` | Body, band labels inside the bands and in the day cards, row names, table, door text | 17.69 / 16.10 / 16.30 | 4.5 text; 7 for running prose (K3 CS3) |
| `--color-text-muted` on `--color-bg` / `--color-georgetown-tint` / `--color-anywhere-tint` | Weekday labels, row captions, strip caption, provenance, door labels (short strings, never a paragraph) | 6.25 / 5.69 / 5.76 | 4.5 text |
| `--color-on-navy` on `--color-navy` | CTA labels, footer text and links, skip link | 14.58 | 4.5 text |
| `--color-text-muted-on-dark` on `--color-navy` | Footer facts | 7.81 | 4.5 text |
| `--color-navy` on `--color-bg` / `--color-georgetown-tint` / `--color-anywhere-tint` | Outlined buttons, CTA fills against their ground | 13.88 / 12.63 / 12.79 | 4.5 text, 3 component |
| `--color-border-strong` on `--color-bg` / `--color-surface` | Link underlines at rest, rules on the generic surface band | 3.63 / 3.31 | 3 graphical |
| `--color-focus` on `--color-bg` | Focus ring on light surfaces | 8.20 | 3 |
| `--color-on-navy` outer band against navy; `--color-navy` inner band against `--color-bg` | The two-colour ring on the footer plate and links | 14.58 / 13.88 | 3, one band per ground (K3 F10) |
| `--color-accent` on `--color-bg` | The four marks | 2.38 | Decorative shapes beside their sentence (RF-37); not text, not a control |
| `--color-border` on `--color-bg` / the tints | Rules and the weekday dividers | 1.56 / 1.42 to 1.44 | Decorative: the bands, labels and CTAs carry the structure (K3 CS12) |

Palette usage: navy on the CTAs, the outlined buttons and the footer; the two school tints (`--color-georgetown-tint`, `--color-anywhere-tint`) on the bands, the door cards and the day cards; `--color-surface` only on the generic Proof and Families bands, never as a school cue; the accent once on the first screen (the marks) and nowhere else; no colour as text below 4.5 anywhere. DD-46 settles button fill in favour of this surface-dependent treatment, and it is unchanged here.

## Shell components (`1_spec/04` section 3) and the schedule visual's text equivalent

Iteration 1 marks each block that the design-system inventory already names with a `data-component`
attribute, so inheritability is demonstrable rather than asserted (the open item both M03 and this
mock carried). The attribute is inert: it changes no style and no behaviour.

| `1_spec/04` section 3 component | Marked in `index.html` | Note |
|---|---|---|
| Umbrella lockup | `a.lockup` | The real mark, never a text wordmark |
| Header (landing) | `header.site-header` | Lockup, Current families, Contact admissions, no menu (DD-12) |
| Door card | both `li.door` | Label, name, line, CTA; the line moves under the grid in the compact form |
| Door list | `ul.doors` and `ul.doors-again` | N doors: the first-screen list sits on the week rows through `subgrid` |
| Schedule visual | `div.diagram` | The week grid, the two day cards and the strip. Its accessibility column asks for "also rendered as a table for screen readers" |
| Comparison table | `div.compare-block` | A real `table` with caption and `scope`, stacked blocks below 58rem |
| Proof strip | `section.proof` | Exactly the four facts of `copy.md` section 4 |
| TEFA module | `div.tefa` | Visible to everyone, D-015 (c) |
| Facts block | `div.footer-facts` | SE-08, identical everywhere |
| Footer | `footer.site-footer` | Both marks on their panels |

Not in the inventory, and proposed as additions rather than renamed into it: the compare anchor band
(`div.anchor-band`), the weekend strip (`p.strip`), the run-in door sentences (`div.door-lines`), the
application steps (`section.steps`), the secondary link list (`ul.link-list`) and the current-families
band (`section.families`). Campus switcher, decision helper and accordion are not built here.

**The schedule visual's text equivalent.** The inventory requires the schedule visual to be "also
rendered as a table for screen readers". On this page that table is the comparison table's "The day",
"In-person time" and "Guides" rows, which carry the diagram's three facts in the same deck words, one
screen below it. The diagram itself is not an image: it is real text in reading order inside two
groups named "Georgetown Campus" and "GT Anywhere" (`role="group"` with `aria-labelledby`), so a
screen reader meets each fact in the picture and again in the table. A screen-reader pass on a real
assistive technology is still in Pending for the director.

## Departures

| # | Departure | Reason |
|---|---|---|
| 1 | Door names (the row names) at `--text-lg`; CONTRACT section 3 says `--text-xl` | The brief's Typography row is binding and says `--text-lg` |
| 2 | Compact door rule below 800px tall on the stacked forms, and at **every** width of the grid form; CONTRACT section 2 states it for phone rows under 700px | Measured: a door with its three-line sentence is 204 to 228px tall, so at V14 the second CTA would end at about 757 of 696 and at V5 at about 745 of 691; M03 measured the same need at 780. Iteration 1 extends it to the whole grid form because the door, not the diagram, was setting the row height there: with the sentence inside, the rows were 206px at V16 with the picture ending 83px and 112px short, and the first screen ended on a false floor. The stacked forms at 800px and taller (V6, V9, V11, V12) still carry the lines inside the doors |
| 3 | The two door lines exist twice in the DOM (inside each door and as two run-in paragraphs after the strip), one copy displayed at any viewport | The compact rule needs both lines to follow the second CTA; a single copy cannot leave its list item without `display: contents`, whose list semantics are unreliable in assistive technology (M03's finding). Screen readers meet one copy, and the displayed copy is last in the document as well as last on the screen, so reading order and visual order agree |
| 4 | The band labels, captions and row names exist twice (SVG `<text>` and an HTML row name in the grid, HTML in the day cards), one form displayed at any width | SVG text does not wrap, and the phone form needs wrapping labels; the brief allows the cards below the grid's minimum width. Screen readers meet one form. The row name is HTML, not SVG text, so it can wrap and can be the `aria-labelledby` target that gives each week row an accessible name |
| 5 | h1 at `--text-xl` on the phone-landscape row only (600px and wider, 400px and shorter), the 35ch cap lifted there | CONTRACT section 2's recipe: at `--text-3xl` the sentence is four lines (156px) and both CTAs would end at about 360 of 318; measured 286 of 318 with the step |
| 6 | Page margin 32px from 768 to 1279 (K1's schedule steps to 48 at 1024) | The grid's 960px minimum at a 1024 viewport |
| 7 | The five day columns run through the body rows as 6px gaps in `--color-bg`, not as `--color-border` dividers; `--color-border` dividers appear only in the weekday header, plus the week-to-door rule and the horizontal rules | The first runner pass showed dividers crossing every label, and the forced-colours fallback then reinstated the same crossing as a per-segment stroke (both critics' Craft finding). A gap in the page ground divides the week without a line through a word, in normal rendering and in forced colours alike; 0 overlapping pairs at every width (`qa/svg-text.md`) |
| 8 | Every band label sits inside its band, across the five day segments, and the day gaps pass behind it | Iteration 1 reverses the build's placement of the GT Anywhere label (it sat under its bars). The gaps are the page ground, not a rule, and the text is painted last, so the label stays whole: inspected at 1440 and at 414 (`qa/V16.jpg`, `qa/V5.jpg` crops). A per-day cell is 123 to 175px wide against a 561 to 576px label, so a label per cell was never available |
| 9 | Three deck cells placed as diagram captions beyond the brief's enumerated labels: "Every school day." and "Guides on campus in every session." (Georgetown, the "In-person time" and "Guides" cells) and "The rest of the day is yours." (GT Anywhere, the second sentence of "The day") | The brief's Copy row admits deck phrases from those cells, and the studio critic's copy ruling admits the first and third by name. Iteration 1 records all three as rows in `copy.md` section 9, the treatment M17's diagram caption already had, so the placement is on the record rather than only in this file |
| 10 | The day cards below 960px are HTML and name their school, but no longer repeat the schematic label "In person" / "Online" | The brief's "two stacked day cards". Iteration 1 drops the label: with the picture now directly under the doors, the door card 40px above carries the same label, and the name alone is enough to say whose day this is. The name itself is kept at every width, against the studio critic's suggestion to drop it at V11: it is the row name of a picture, and the same argument that put a name at the start of every week row applies at card scale |
| 11 | Header 88px below 390px (the two utility links stack at the right) and the nav wraps under the mark, right-aligned, at a doubled root font | The mark keeps its 27px floor on a 312px content width (M03); nothing overlaps at a 32px root (`qa/V2-rootx2.jpg`) |
| 12 | The sources line's five source phrases are links (`outbound_school_site`); the sentence stays verbatim | C04's evidence-link shape, M06's Mission finding adopted; inline footnote links are exempt from the 44px rule under WCAG 2.5.8's inline exception |
| 13 | Layer-2 tokens as listed; `--color-text-muted-on-dark` and `--color-border-strong` are new tints | Proposed roles from `tokens-v2.css`, named per row (DD-38, DD-39, MN-16); DD-19 departures under DD-39 |
| 14 | Non-token lengths: 1px rules; 2px ring bands and 3px forced-colours outline; 44px targets (`2.75rem`), the 56px header row (`3.5rem`); the SVG's pixel geometry (header 32, bands 28 tall at y 0 and 34, 6px day gaps, captions at y 82 and 48, 12px label inset inside a band, 0 inset for names and captions); the footer marks at 27 and 32px (K12 V2); .75rem marks; the logo clamp; the door column `clamp(21.5rem, 33.3%, 30rem)`; the `svh` first-screen gaps (8svh, 2.6svh, 5svh, bounded by space tokens); the 20 / 40 / 60 / 80 per cent column stops in the day-card gradient; container thresholds 12rem, 40rem, 48rem, 58rem, 60rem, 64rem; height thresholds 400, 639, 799, 900px; letter-spacing .06em and .08em; underline offset .18em | Rule 14 governs colour, type, space, radius, shadow and duration, all tokens here; the lengths are geometry, measured in the runner and recorded above |
| 15 | Eyebrows in Inconsolata beside labels in Inter Tight 500 | Taste decision 12 |
| 16 | The footer marks load eagerly | Assets, above |
| 17 | The skip link "Skip to main content" | `copy.md` section 9's control label (checker R9) |
| 18 | The strip is opened by the fixed door name "GT Anywhere" as a run-in label | Astra's Imagery finding: the strip described one school while spanning both. A fixed slot reused as a label, the same device the compact door rule already uses for the two door sentences; no new words |
| 19 | `grid-template-rows: subgrid` on the door list in the grid form | The only way to bind each door to its own week row once the rows are sized by their own diagrams and are no longer equal. Chrome 117 and later, Safari 16, Firefox 71; the runner's Chrome for Testing 151 renders it, and below support the doors fall back to two auto rows in the same column, which is the build's previous behaviour |
| 20 | `copy.md` section 1's cue set says "label plus icon"; the icon is not used | Astra's brief-compliance finding. The cue here is the schematic label, the full school name on the door and at the start of the school's week row, the school's own tint on the door card and the row's bands, and position. `gt-icon.svg` beside a name that is already in full would add a mark without adding a distinction; declared rather than silently dropped |
| 21 | Heading weight 400 and button weight 600, where `shared/CONTINUITY.md` measures the estate at 300 and 500 | Argued, not unnoticed. `shared/fonts.css` ships Inconsolata 400 and 600 only, so a 500-weight button cannot be claimed without adding the face; and DD-38 is testing Literata 300 against 400 across the wave, with M03 having tested and shipped 400 with its reasoning. Heading tracking is also normal here against the estate's -1.6px, and the button is 17 to 18px against the estate's 16px. Button fill is DD-46's and is left as the contract's surface-dependent treatment. The Georgetown side of the handoff stays unverified: `gt.school` has no mirror in this repository |

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
| DD-38 weight test | 400 ships; the 300 candidate is not rendered in this mock. `shared/CONTINUITY.md` measures the estate's h1 at Literata **300** with -1.6px tracking, so this is a live gap, argued under Departure 21, not an oversight | DD-38 |
| Weekday names, schematic labels, captions | "Monday" to "Friday", "In person", "Online" from section 9; the three diagram captions are deck cells and now have their own section 9 rows (Departure 9) | Section 9 is proposed for Nari |
| Live side-by-side with the school sites | Not produced: this build may not open gt.school or anywhere.gt.school. `0_plan/mockups/shared/CONTINUITY.md` is now the rendered reference for **anywhere.gt.school**, measured from this repository's own mirror on 127.0.0.1 with every third-party request blocked; **gt.school has no mirror here and its half of the handoff stays unverified**. What differs from the measured estate, and why, is Departure 21 | K7 C4, Continuity |

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
| PQ-05 | What does a day look like? | The week grid on the first screen (two named rows, their bands across the five weekdays, and the captions), the two day cards below 1024; table "The day" |
| PQ-06 | What does it cost, and can TEFA help? | Table "Tuition and access"; the TEFA module |
| PQ-07 | How do I apply? | "How to apply": four steps, two application links |
| PQ-08 | Who teaches my child? | Both rows of the grid: the GT Anywhere band label ("with live sessions from Guides") and the Georgetown caption ("Guides on campus in every session."); door 2 line; table "Guides"; proof fact 3 |
| PQ-09 | How much in-person time does GT Anywhere have? | The strip under the grid, opened by "GT Anywhere" so the four marks are read as its weekends; door 2 line; table "In-person time" |
| PQ-10 | What results does the school get, and is it accredited? | Silent by G0.5 items 2 and 3; "Contact admissions" and "Talk to admissions" lead to the person who answers it |
| PQ-11 | What happens after 8th grade? | Table "After 8th grade", deferred to admissions (Q-013) |
| PQ-12 | I am a current family, where do I go? | Header link; "Already a GT family?"; footer |
| PQ-13 | I am not ready to apply, what can I do? | "Questions before you apply": FAQ, admissions, tour, info session |
| PQ-14 | Is GT School part of Alpha School? | The provenance line under the h1 |

Deferred to the school sites: everything behind the door CTAs (curriculum detail, calendars, the Guides' names, the intensives' dates, the FAQ), because the landing routes and the sites explain (DD-22).

## Self-check

Run from the repo root on 2026-09-11 against the delivered files, **after the last change to
`index.html` and `styles.css`** (iteration 1). Output pasted verbatim.

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
  PASS R7 full names — Georgetown Campus x10, GT Anywhere x17
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
  PASS R14 size under 1 MB — 44 KB
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
| Raw hex in `styles.css` | 0; all 50 `var()`s resolve to `tokens-v2.css` or to a custom property defined in `styles.css` (`--page-margin`, `--rule`, `--fs-top`, `--fs-h1-gap`, `--fs-grid-gap`, `--week-pad`, `--lines-gap`), re-checked in iteration 1 |
| `transition:` declarations, `@keyframes` | 0, 0 (the only `transition-duration` is the reduced-motion zeroing) |
| `vh` in `styles.css` | 0; `svh` three times, all in the 900px-and-taller band and all bounded by space tokens |
| Size | `index.html` 22,022 bytes plus `styles.css` 25,096 bytes, 47,118 bytes in all; `qa/` about 2 MB of captures |

### Runner: `node 0_plan/tools/shots.mjs 0_plan/mockups/M07-the-timetable --all` (this iteration's final pass, `qa/fold.md` verbatim)

```
# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T12:26:32.433Z; page `/0_plan/mockups/M07-the-timetable/index.html`.

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
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 323 | 521 | 720 | yes | report: page height 7309 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 286 | 286 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 237 | 275 | 577 | 577 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 243 | 280 | 572 | 572 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 294 | 324 | 508 | 623 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 271 | 301 | 486 | 602 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 308 | 493 | 610 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 292 | 330 | 587 | 735 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 292 | 330 | 593 | 744 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 344 | 394 | 521 | 639 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 286 | 316 | 492 | 607 | no | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Focus and forced colours

Captures: focus-cta.jpg (first door CTA focused); focus-plate.jpg (header lockup link focused); focus-footer.jpg (GT Anywhere footer link focused); forced-colors.jpg (forced-colors: active at V14). The critics judge these by eye.

## Console

PASS: no console errors.

## Next band evidence

What the runner saw continuing below the fold. Ink means text, a painted edge or an image: section padding and the empty leading of a line box do not count.

| Row | Cut | Element and the ink that crosses the bottom edge |
|---|---|---|
| V1 | yes | ul.days ink 610 to 1008 |
| V2 | yes | ul.days ink 597 to 953 |
| V3 | yes | ul.days ink 583 to 940 |
| V4 | yes | ul.days ink 583 to 919 |
| V5 | yes | ul.days ink 554 to 890 |
| V6 | yes | ul.days ink 715 to 1051 |
| V7 | yes | ul.days ink 585 to 921 |
| V8 | yes | ul.days ink 557 to 893 |
| V9 | yes | ul.days ink 744 to 1100 |
| V10 | yes | ul.days ink 310 to 519 |
| V11 | yes | section.section ink 990 to 3397 |
| V12 | yes | section.section ink 966 to 3329 |
| V13 | yes | div.door-lines ink 712 to 818 |
| V14 | yes | div.door-lines ink 691 to 800 |
| V15 | yes | p.strip ink 618 to 681 |
| V16 | yes | div.door-lines ink 870 to 980 |
| V17 | yes | div.door-lines ink 884 to 994 |
| V18 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V19 | no | nothing visible starts below the last CTA and crosses the bottom edge |

## Result: all required rows pass
```

### SVG text and h1 measurement: `node 0_plan/mockups/M07-the-timetable/qa/measure.mjs` (`qa/svg-text.md` verbatim)

```
# SVG text and h1 measurements (qa/measure.mjs)

2026-09-11T12:26:39.315Z; page `/0_plan/mockups/M07-the-timetable/index.html`.

## Grid form, 960 to 1440 (and 1920): every SVG text box against every other, against its week area, against the door column

| Viewport | Form | Week area | Door column | Texts | Overlapping pairs | Clipped past the week area | Smallest slack to the week edge (label) | Row heights (head, Georgetown, GT Anywhere) |
|---|---|---|---|---|---|---|---|---|
| 1024 by 768 | grid, compact doors | 616px | 344px | 12 | 0 | none | 42px (Friday) | 33, 143, 115 |
| 1024 by 900 | grid, compact doors | 616px | 344px | 12 | 0 | none | 42px (Friday) | 33, 174, 145 |
| 1100 by 720 | grid, compact doors | 691px | 345px | 12 | 0 | none | 49px (Friday) | 33, 143, 115 |
| 1152 by 864 | grid, compact doors | 726px | 362px | 12 | 0 | none | 53px (Friday) | 33, 143, 115 |
| 1200 by 720 | grid, compact doors | 758px | 378px | 12 | 0 | none | 56px (Friday) | 33, 144, 116 |
| 1280 by 720 | grid, compact doors | 790px | 394px | 12 | 0 | none | 59px (Friday) | 33, 144, 116 |
| 1280 by 800 | grid, compact doors | 790px | 394px | 12 | 0 | none | 59px (Friday) | 33, 144, 116 |
| 1366 by 648 | grid, compact doors | 847px | 423px | 12 | 0 | none | 65px (Friday) | 33, 144, 116 |
| 1366 by 900 | grid, compact doors | 847px | 423px | 12 | 0 | none | 65px (Friday) | 33, 175, 147 |
| 1440 by 900 | grid, compact doors | 875px | 437px | 12 | 0 | none | 67px (Friday) | 33, 175, 148 |
| 1440 by 720 | grid, compact doors | 875px | 437px | 12 | 0 | none | 67px (Friday) | 33, 145, 117 |
| 1920 by 960 | grid, compact doors | 875px | 437px | 12 | 0 | none | 67px (Friday) | 33, 179, 151 |

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

Captures: `qa/V1.jpg` to `qa/V19.jpg` (viewport), `qa/V2-full.jpg` and `qa/V14-full.jpg` (full page), `qa/V2-rootx2.jpg` (32px root: the mark on its own row, the two links right-aligned beneath it, no overlap), `qa/focus-cta.jpg` (the `--color-focus` ring around the Georgetown CTA), `qa/focus-plate.jpg`, `qa/focus-footer.jpg` (the two-colour ring on the GT Anywhere footer link), `qa/forced-colors.jpg` (each band outlined once, nothing struck through, every label legible). Looked at by eye after this pass, at full size and in 2x crops: V16, V14, V13, V11, V5, V2, V10, V18, V2-rootx2, focus-cta, forced-colors, and the V2-full and V14-full page captures.

### Pending for the director

The critics' scores on this iteration; the DD-38 weight test (300 against 400) if the director wants it rendered on this direction, now that `shared/CONTINUITY.md` measures the estate's h1 at 300 with -1.6px tracking; a screen-reader pass on the grid form with a real assistive technology (doors first, then the weekday header, the two named row groups, the strip); the in-app browser measurements under REQ-024; the Georgetown half of the continuity comparison, which no capture in this repository can answer because `gt.school` has no mirror here; and, if D-039 lands, the V8 script against the five segments already in each band.
