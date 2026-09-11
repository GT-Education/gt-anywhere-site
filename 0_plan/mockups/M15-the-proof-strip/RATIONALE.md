# M15 The Proof Strip, rationale

| Field | Value |
|---|---|
| Mock | M15 "The Proof Strip" (new direction), brief `0_plan/kb/briefs/M15.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1 |
| Lens order | L4 exclusivity, L3 mission, L1 objective, L2 continuity |
| Built | 2026-09-11 by a Fable design-engineer fork. The runner `0_plan/tools/shots.mjs` measured three build passes (section "Runner passes"); the captures it wrote under `qa/` were reviewed between passes. Iterated once after both critic rounds (section "Iteration 1") |
| Files | `index.html`, `styles.css` (links `../shared/tokens-v2.css`, `../shared/fonts.css`), this file; logos from `../shared/img/`; `qa/` holds `fold.md`, `V1.jpg` to `V19.jpg`, `V2-full.jpg`, `V14-full.jpg`, `V2-rootx2.jpg`, `focus-cta.jpg`, `focus-plate.jpg`, `focus-footer.jpg`, `focus-footer-plate.jpg`, `forced-colors.jpg` |
| State | Default state: no photograph (DD-42 option a, RF-25 pending), no JavaScript (D-039 escalated and undecided, so no `data-d039` declaration; the page is complete at rest). The strip's four facts and their source links are the whole argument |
| Claims on the page | 90th percentile (CR-011: strip fact 1, both Admissions cells, the steps line), weekly check-ins (CR-035: strip fact 3, the Guides cell), $10,400 (CR-021), four in-person or intensive weekends (CR-032), 9 to noon and two hours (CR-033), two to three hours (CR-034). Every row is "Unverified, public" in `0_plan/12-claims-register.md`, CR-011 (owner Crystal) and CR-035 (owner Nari) included: allowed on a mock, blocked for production (REQ-022). The deck carries all six today. The strip adds no figure and rewords none; "90th" and "8th" are the only figures in it and both are in the deck |

## Direction

A school confident in its facts footnotes them. M15 makes the deck's four proof facts the spine of the page: each
fact in full, in the deck's words and order, with a link to the page that carries it, and the deck's sources line
under the four (D-033's row shape, REQ-022, DEL-018). Exclusivity is stated as a bar with a citation, never as a
price or a wealth cue (MD-25, DD-10); mission is stated as what is true of both schools; the objective is served by
the two doors above the strip; continuity by the estate's own marks, faces, button case and swatches (K12).

The first screen takes M01's form on `--color-bg`: a 56px header with the GT School mark at its 27px floor (K12 G4),
the umbrella sentence across eight of twelve columns from 1280 (nine at 1024 to 1279, so it holds four lines), the
provenance line once, then the two doors as hairline rows (COLLINS's programs rows, C21: label, name, line, CTA in
a navy Inconsolata button), and under them the compare anchor sentence opened by the screen's one accent use, a
3px `--color-accent` rule (K3 section 5f). On phones under 780px tall and on landscape phones the rows compact to
label, name and CTA and both door lines follow the second CTA as run-in paragraphs (the contract's compact door
rule at this mock's measured threshold, as M03). The second screen is the strip on `--color-surface` between two
`--color-border` hairlines, the page's only tinted band: the rule again, the eyebrow "Proof", the heading "What is
true of both schools", then ruled cells (four across from 1280, two by two from 768 to 1279, stacked rows below)
standing on one continuous hairline that runs the width of the band, each holding its fact at `--text-md` with
the leading noun phrase in Inter Tight 500 and the figure in Inconsolata at the sentence's size, and, bottom-aligned
across the row so the four footnotes read as one line, the address of its source page as an underlined link, one
address to a line; the sources line follows verbatim. Then the comparison (with the sources line again, the repeated
doors and the TEFA module), the steps and the secondary CTAs — each with its eyebrow and heading in a four-column
label column from 1024 and its ruled rows across the remaining eight — the families bar and the navy footer with
both marks on their panels.

Exemplars beside it: Phillips Exeter's "Go figure" strip (`0_plan/kb/exemplars/exeter-1440-full.jpg`, from about
y 4520: a figure, a sentence label and a link whose text names its page; K5 F55, C04) gives the cell's shape, with
the label and the link kept and the headline numeral dropped because the deck's facts are sentences; University
of Hull's statistics band (`university-of-hull-1440-full.jpg`, the footnoted figures under "Teaching people to
think differently") gives the convention of a footnote block under the figures, taken as the sources line rather
than as superscript markers, which would add characters the deck does not have; COLLINS's programs list
(`collins-1440-full.jpg`, y about 1700 to 2500) gives the hairline row that the strip, the doors, the steps and the
connect links all use, and the ruled-row treatment the cells take at every width (Astra's iteration-1 finding: the
Exeter capture does not show individual top rules under its figures, so that attribution was COLLINS's all along).
Avoided: Sora's unlinked figure (C05): every fact here carries its link and nothing counts up (C33).

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented children, in
person at our Georgetown, Texas campus or online from anywhere." It decodes "GT", says "selective", and names
both ways to attend before either door (DD-33, DD-20), so it is the largest thing on the page. Literata 400 at
`--text-3xl` (27.27px at 375, 46px at 1440), `--leading-tight` 1.15, `max-width: 35ch`, `text-wrap: balance`
(which acts at six lines or fewer, K2 F-22, so from 414px up; the seven-line phone setting is unbalanced). Two
no-break spaces hold "in person" and "from anywhere." together so the phrase never splits and the last line is
never one word; no word changes. At 1024 to 1279 it spans nine columns (712px at 1024), from 1280 eight (800px at
1280, 907px at 1440, where eight columns bind before 35ch). On landscape phones (V10) it steps down one token to
`--text-xl` across the full width (the contract's recipe, a declared departure). The door names are h2 (equal
weight, DD-14); the second-screen h2s are "What is true of both schools", "Compare the two schools", "How to
apply", "Questions before you apply", "Already a GT family?"; "Texas families" is an h3 inside the comparison. No
level is skipped.

Line counts measured by the runner (h1 bottom minus the h1 top, which is the header bottom plus the first
screen's top padding, divided by the line box at 1.15):

| Row | Width | h1 size | Column | h1 height | Lines |
|---|---|---|---|---|---|
| V1, V2, V3, V4, V7, V9 | 360 to 402 | 27.00 to 27.74px | 24px margins | 217, 219, 222, 222, 223, 222px | 7 |
| V5, V6, V8 | 412 to 430 | 27.92 to 28.23px | 24px margins | 193, 193, 195px | 6 |
| V10 | 750, landscape | 24.17px (`--text-xl`) | full width | 83px | 3 |
| V11, V12 | 768, 834 | 34.18, 35.34px | 35ch | 157, 163px | 4 |
| V13, V19 | 1024 | 38.68px | nine columns, 712px | 178px | 4 |
| V14 | 1280 | 43.19px | eight columns, 800px | 199px | 4 |
| V15 | 1366 | 44.70px | eight columns | 206px | 4 |
| V16, V17 | 1440, 1920 | 46.00px | eight columns, 907px | 212px | 4 |
| V18 | 320 | 27.00px | 24px margins | 248px | 8 |

The contract's estimate of six lines at V2 is one line optimistic, as M12 and M03 measured: seven at 360 to 402,
six from 412. DD-38's 300-against-400 trial is not repeated here: M03 rendered both weights on this sentence at V2
and V16 (`0_plan/mockups/M03-navy-thesis/qa/h1-300-V2.jpg`, `h1-400-V2.jpg`, `h1-300-V16.jpg`, `h1-400-V16.jpg`)
with no change in line count; M15 ships 400.

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id and name, lens order | M15, folder `M15-the-proof-strip`; L4, L3, L1, L2 as above | Met |
| Thesis | The four proof facts, each with its source link, as the second screen and the page's spine; the deck's sources line under them; no figure beyond the deck's, none reworded; register status stated here | Met |
| Exemplars | Exeter's cell shape (label and link on every fact) borrowed without the headline numeral; Hull's footnote convention taken as the sources block; COLLINS's hairline rows for the strip on phones and for the doors. Sora's unlinked figure avoided: every fact links its page | Met, the headline-numeral omission is the brief's own typography rule |
| Composition, first screen | M01's form: header 56 (88 below 370px, links stacked), h1 across eight columns from 1280 and nine at 1024 to 1279, provenance, two door rows with label, name, line and CTA (6 and 6 with a 64px gutter from 1024, a 24px gutter from 768, stacked below), the compare anchor under the doors; the compact door rule under 780px tall on phones; the landscape recipe at V10 | Met, with the nine-column step, the 780 threshold and the V10 recipe named in Departures |
| Composition, second screen | The strip on `--color-surface` between two `--color-border` hairlines: heading "What is true of both schools", the four facts of `copy.md` section 4 in the deck's words and order, four across from 1280 (tracks 304px at 1280, 344 at 1440, text measure 272 and 312 with the gutter carried as cell padding), two by two from 768 to 1279 (tracks 352px at 768, 480 at 1024), stacked hairline rows below; the cells' top rules butt into one continuous hairline across the band and every cell's source sits on one line at the foot of the row; each cell its fact in full and a link to the page the brief names (admission bar to anywhere.gt.school/academics; weekly check-ins to the Terms of Use on both sites; the MAP fact to the Anywhere refund policy page; the K-8 fact to both home pages); the sources line verbatim under the strip; then comparison, steps, connect, families, footer | Met, with the 1024-to-1279 arrangement named in Departures (the brief's four-across begins at 1280) |
| Fold estimates | The brief's M01-form sums (V2 550, V5 663, V14 589, V16 630) restated below with this mock's designed sums and the runner's measured bottoms: V2 563 of 605, V5 537 of 691, V10 286 of 318, V14 530 of 696, V16 594 of 876 | Met, measured |
| Typography | Contract roles: h1 Literata 400 `--text-3xl`; door names Literata `--text-xl`; door lines, cells, steps and the sources line at `--leading-prose` 1.5; labels and eyebrows Inter Tight 500 `--text-xs` uppercase 0.08em; buttons Inconsolata 600 `--text-btn`; fact sentences `--text-md` Inter Tight at 1.5 with the leading noun phrase in Inter Tight 500; source links `--text-xs` underlined `--color-text-muted`; "90th" and "8th" in Inconsolata 600 within the sentence at the sentence's size (no headline-scale numerals) | Met |
| Color and surface | `--color-bg` page; the strip on `--color-surface` with `--color-border` cell rules and a `--color-border` hairline on the band's top and bottom edges, so the 1.10:1 tint is never the only thing delineating the band (it is not, and in forced colours it is not there at all); one accent use per screen, the compare anchor's rule on the first and the strip heading's rule on the second (the same 64 by 3px device, `--space-8` wide; no accent anywhere else on the page); CTAs `--color-navy` fill with `--color-on-navy` text (14.58); focus `--color-focus` on the light surfaces, the two-colour ring over the navy footer and on the plate that straddles it | Met |
| Imagery | Default state: none. Photographed state designed, not shipped: `georgetown-dscf1931.webp` at 3:2 after the comparison, `object-position: 50% 70%`, at most 450 CSS px (Assets) | Met (default state) |
| Motion | Still. No `transition`, no `@keyframes`; nothing counts up (C33); V3 instant; V10 native anchor scroll inside `prefers-reduced-motion: no-preference`; reduced motion zeroes every duration (runner: every computed duration 0s) | Met |
| Copy | Sections 0 to 8 verbatim (sixteen fixed slots confirmed by string match, Self-check); the strip is section 4 exactly; the tour label per R14; the skip link from section 9; "Questions before you apply" is an allowed section 6 heading; eyebrows from the allowed list ("Proof", "Compare", "Admissions", "Connect"). The source links' anchor text is each page's address in the notation of the sources line (Departures) | Met, with the addresses named in Departures |
| Conversion | Doors on the first screen at every row; compare anchor under the doors; the strip on the second screen; table with repeated values (DD-43); repeated doors; TEFA module; steps with two application links; four secondary CTAs; families bar; footer application links with `school=` | Met |
| Acceptance | `check-claims.py` clean (Self-check); `check-mocks.py` 36 of 36; the matrix: 16 of 16 fold rows pass with the next band cut on every one and the cutting element named per row in `qa/fold.md`, V18 reflows, V19 reports scroll width 1024, reduced motion, doubled root and console pass; the strip never overflows at 320 to 767 (V18 and the doubled-root run: no horizontal scroll, `overflow-wrap: anywhere` on the addresses); every source link resolves to www.gt.school or anywhere.gt.school (R16 hosts); DD-38 and DD-39 named below | Met; iteration 1 answered both critics, Composition first |

## Fold estimates and measured bottoms (the four rows the brief names, and V10)

Method: the contract's method with this mock's measured h1 heights (seven lines at 375, six at 414, four at 1280
and 1440), the space tokens named in `styles.css`, and the door rows from the CSS. Compact row (phones under 780px
tall): rule 1 + padding 8 + label 15 + 4 + name 25 + 8 + CTA 44 = 105 to the CTA's bottom, then padding 8 and the
rule 1 before the next row. Laptop row: rule 1 + 16 + label 16 + 4 + name 31 (32 at 1440) + 8 + two-line door line
52 (54 at 1440) + 16 + CTA 44 = 188 (191). The brief's sums are the contract's M01 form with a six-line h1.

| Row | Viewport, limit | Brief (M01 form) | Designed to | Measured (`qa/fold.md`) | Spare |
|---|---|---|---|---|---|
| V2 | 375 by 629, 605 | 550 | 56 + 16 + h1 219 + 8 + provenance 21 + 24 + row 105 + 9 + row 104 = 562 | **563** | 42 |
| V5 | 414 by 715, 691 | 663 (lines above the CTAs) | 56 + 16 + 193 + 8 + 21 + 24 + 105 + 9 + 104 = 536, compact rule (Departures) | **537** | 154 |
| V10 | 750 by 342, 318 | 313 (contract recipe) | 56 + 8 + h1 83 at `--text-xl` + 8 + 21 + 8 + row (1 + 4 + 15 + 4 + name 25 + 8 + 44) = 285 | **286** (both doors; the second door's restored top rule aligned them) | 32 |
| V14 | 1280 by 720, 696 | 589 | 56 + 24 + 199 + 8 + 22 + 32 + row 188 = 529 (short-laptop query, Departures) | **530** | 166 |
| V16 | 1440 by 900, 876 | 630 | 56 + 48 + 212 + 16 + 22 + 48 + row 191 = 593 | **594** | 282 |

Other rows, measured (second CTA bottom against the limit): V1 593 of 716 (header 88); V3 566 of 640; V4 566 of
635; V6 746 of 815 (the lines in the rows); V7 568 of 657; V8 540 of 715; V9 774 of 844 (emptiness row: the lines
in the rows, the compare anchor cut at the fold, page height 6,688); V11 490 of 1000; V12 497 of 1170; V13 532 of
744 (first short-laptop band, Departures); V15 498 of 624 (all three bands, Departures); V17 594 of 936; V18 653
(reflow row, no horizontal scroll at 320); V19 532 of 552 (zoom row, reported: scroll width 1024). The matrix has sixteen fold rows; all
sixteen pass and on every one the ink that crosses the bottom edge is content a parent can see, not a tint step:
the runner's "Next band evidence" table in `qa/fold.md` names the element for each row.

Where the light first screen ends and what crosses the edge, measured after iteration 1 (anchor ink bottom, band
hairline, accent rule, eyebrow, heading ink):

| Row | Anchor ends | Hairline | Accent rule | "PROOF" | Heading | Cut by the edge |
|---|---|---|---|---|---|---|
| V13, 1024 by 768 | 606 | 620 | 701 | 720 to 735 | 738 to 782 | the heading |
| V14, 1280 by 720 | 606 | 619 | 652 | 671 to 686 | 690 to 738 | the heading |
| V15, 1366 by 648 | 558 | 564 | 589 | 608 to 624 | 626 to 675 | the heading |
| V16, 1440 by 900 | 694 | 756 | 837 | 856 to 872 | 874 to 924 | the heading |
| V17, 1920 by 960 | 694 | 756 | 837 | 856 to 872 | 874 to 924 | the cells' hairline at 943, with 17px of the cells below it |
| V11, 768 by 1024 | 579 | 609 | 690 | 709 to 724 | 727 to 769 | the second row of cells and the fact inside it (993 to 1072) |

On the compact phone rows the second run-in paragraph is sliced mid-line (V1 to V5, V7, V8, V10); V6 and V9 keep
the lines inside the door rows and are cut by the compare anchor, and so is V19. V12 was the one row where nothing
was sliced; it is now cut by the sources line (see the runner section). Before this iteration V14 showed 45px of `--color-surface` on `--color-bg` and
nothing else (anchor 627, surface 675), V15 showed 20px, and at V5 the last run-in line completed at 713 against a
715px edge: three false floors, all three now cut by content.

## Decisions applied

| Id | How it is applied |
|---|---|
| DD-01, DD-19 | The three site faces and the layer-1 swatches; the layer-2 roles named below; every value outside the token set listed in Departures |
| DD-04 | Cue set per door: label ("In person", "Online"), the full school name, the door line and the CTA. No icon: both marks are drawn in the accent orange, the first screen spends its accent on the anchor's rule, and a drawn glyph would be imagery from outside `shared/img/` (M03's reasoning; Taste decisions) |
| DD-06, REQ-013, DD-43 | Table rows in the deck's order, shared rows first with the value repeated in both columns; equal school columns (20, 40, 40 percent, `table-layout: fixed`), answering Astra's M12 Composition finding; stacked blocks below 768 with the school name labelling each cell (R6: the two-column table from 768, where each cell is 272px) |
| DD-07, G0.5 items 2 and 3 | No outcome figure, no accreditation statement, no Cognia mark; the strip carries four register-backed facts and nothing else |
| DD-08, DD-31, DD-42, RF-25, AD-11 | No photograph: every file in `ASSETS.md` shows identifiable children and is permission-gated. The photographed state is designed in Assets and waits for Nari's written permission |
| DD-10, MD-25 | Selectivity is the bar with its citation (strip fact 1 and its link), repeated in the deck's own cells; access is stated where the deck states it (tuition row, TEFA module); no wealth cue, no countdown |
| DD-12, DD-13 | Header: lockup, "Current families", "Contact admissions", no menu, no phone number; the number is in the footer only |
| DD-14, MD-23 | Designed at 375 first; doors stacked Georgetown then GT Anywhere; no sticky element; the phone layout is the DOM order |
| DD-21 | Doors are a `<ul>` of rows and the run-in lines a `<ul>`; both grids take three to five entries by adding items (the pair rule is `repeat(2, …)`, changed in one place) |
| DD-25, REQ-070 | Every application link carries `?school=`; links go only to www.gt.school, anywhere.gt.school, apply.gt.school, community.gt.school and `#compare` |
| DD-26 | Both doors identical in markup and treatment; in the pair the CTAs are bottom-aligned (`margin-top: auto`) so a longer line never ranks a door |
| DD-29 | Every screen carries a fact: the door lines on the first, the strip on the second, the table, the steps line, the facts block in the footer |
| DD-33, DD-20, MD-17, G0.5 item 6 | The umbrella sentence as the h1; the provenance line once, small, under it, not repeated in the footer |
| DD-38 (b), R5, RF-55, RF-58 | Fluid clamps `--text-xs` to `--text-3xl` and `--text-btn`; `--leading-prose` 1.5 on every multi-line string (door lines, facts, cells, steps, the sources line, footer facts); `--measure-prose` 65ch on prose blocks (the facts take 40ch in their cells); `--leading-body` 1.25 on single-line labels, buttons and the anchor sentence |
| DD-39 (a), RF-07, K3 sections 5c to 5f | `--color-on-navy` for footer text and every button label on a navy fill; `--color-text-muted-on-dark` for the footer facts; `--color-text-muted` for eyebrows, labels, the provenance and the source links (single strings, 5.69 on `--color-surface`); running paragraphs in `--color-text` (the sources line at 16.10 on the surface); the accent as a shape twice, never as text |
| DD-44, K10 | No `vh`, `svh` or `dvh` anywhere; the first screen is content-sized so the next band is visibly cut by content, not by a tint step; height queries at 479 (landscape), 600, 669, 749 and 789 (the three short-laptop bands and their floor) and 779 (compact phones), the width query at 600 |
| D-033 | The strip cell is the row shape D-033 recommends: the fact as a plain-English sentence and a link to the page that carries it; the checker's scope is not this mock's file |
| MD-02, R14, REQ-002 | Secondary CTAs: FAQ first, then "Talk to admissions", "Ask about a tour of the Georgetown campus", "Ask about a virtual info session", to the destinations the deck lists |
| MN-16 (a), RF-53, R8, R9 | No motion; colour and underline changes on state are instant; the reduced-motion block sets every duration to `--duration-none` on elements and pseudo-elements; every state is visible at rest |
| D-039 | No script beyond the JSON-LD block, no input, no `data-d039` declaration; the brief asks for a still page, so no V6 was considered |
| REQ-022, DEL-018 | Only figures with register rows, in the deck's words; `check-claims.py` clean; statuses recorded here, not on the page; every fact links its source page |
| SE-13 | `noindex, nofollow`; canonical `https://gt.school/` |
| K3 section 5d, CONTRACT.md section 4 | `--color-focus` at 2px offset on the light surfaces (8.20 on `--color-bg`, 7.46 on `--color-surface`; `qa/focus-cta.jpg` for a navy button on the page, `qa/focus-plate.jpg` for the header lockup, which sits directly on the light page and takes the plain ring); over navy, the two-colour ring, a 2px `--color-navy` inner band (`outline`) and a 2px `--color-on-navy` outer band (`box-shadow`), 14.58 between the bands (K3 F10; `qa/focus-footer.jpg`, a footer text link); on the footer plate, the one element that straddles light and navy, the same ring with the navy band reading on the light plate and the white band on the navy ground: `qa/focus-footer-plate.jpg`, added this iteration because neither earlier capture showed the straddle case the acceptance line rests on (both critics' finding); `forced-colors` fallback to a 3px `CanvasText` outline with a `ButtonText` border on the buttons and the accent rules in `CanvasText` (K3 F38; `qa/forced-colors.jpg`) |
| K12 G4, V2, F20, G15, G17 | The horizontal mark at 27px on phones and 32px from 768 in the header and in the footer alike, so K12 V2's two halves are both met (32px at 1440, at least 27px at 390) and neither mark is distorted (`height` with `width: auto`); buttons uppercase Inconsolata on a `--color-navy` fill at `--radius-md` (.5rem) with the 44px floor G17 sets against the estate's shipped 40px. **Weight:** K12 G15 and G17 measure the live sites at Inconsolata 500; the 600 on this page is `CONTRACT.md` section 3's button role, which every mock in this wave shares, so the weight is the contract's step away from measured estate practice and not an estate fact (Astra's iteration-1 finding; the weight is right, the attribution was wrong) |
| `1_spec/04` section 3 | Eight blocks carry their component name as `data-component`: Header (landing), Door list, Door card (twice), Proof strip, Comparison table, TEFA module, Facts block, Footer. Four blocks this page uses are not in that inventory and are proposed additions: the compare-anchor band, the application steps, the secondary-CTA link list and the families band. The Proof strip row's own accessibility line, "Footnote as a link to the register source", is built literally here, and its purpose column ("One figure with footnote, accreditation mark") no longer describes what the contract requires: four sentences, each with its own linked source, no accreditation mark (DD-07, G0.5 items 2 and 3) |
| 1_spec/03 section 7 | Events: the six source links carry `outbound_school_site` with `data-school`, the event the spec defines for a link to a school site (Departures) |
| CONTRACT.md section 2 (V10) | The landscape recipe at `max-height: 479px` and `min-width: 600px`: section padding `--space-3`, the h1 at `--text-xl` across the full width, provenance, the two compact rows side by side, the lines below the fold |

### Layer-2 tokens used (proposed; each named with its row per `TOKENS-V2.md`)

| Token | Where | Row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | Every type size on the page (`--text-xl` also as the V10 h1 size, `--text-lg` as the V10 door name) | DD-38 (b), R5 |
| `--leading-prose` 1.5, `--measure-prose` 65ch | Door lines, facts, cells, steps, the sources line, footer facts, and the prose measures | DD-38 (b), RF-55, RF-58 |
| `--color-on-navy` | Footer text and links; the label on every navy button; the outer band of the two-colour ring | DD-39 (a), RF-07 |
| `--color-text-muted-on-dark` (#a3bfcb, a new tint) | The footer facts block | DD-39 (a), RF-07; DD-19 departure |
| `--duration-none` | The reduced-motion block | MN-16 (a), RF-53, R8 |
| Not used | `--color-accent-text`, `--color-on-accent`, `--color-focus-on-dark` (the two-colour ring uses `--color-on-navy`), `--color-border-strong`, `--ease-standard`, `--ease-out`, `--ease-in` (no accent text, no accent fill, no load-bearing border, no motion) | |

## Motion spec

| Move | Element | Trigger | Duration | Easing | Reduced motion |
|---|---|---|---|---|---|
| None | Nothing on the page transitions or animates; `styles.css` declares no `transition` and no `@keyframes`; nothing counts up (C33) | | | | |
| V1 door state, V3 focus | Buttons and links: underline on hover; focus rings per surface | hover, focus-visible | 0 ms (instant, R9) | none | Same, visible at rest (R8) |
| V10 anchor scroll | `#compare` link | click | Native `scroll-behavior: smooth` inside `prefers-reduced-motion: no-preference` only | browser | `scroll-behavior: auto` |
| Reduced motion | `*, *::before, *::after` | `prefers-reduced-motion: reduce` | `transition-duration` and `animation-duration: var(--duration-none)` | | Every computed duration 0s at V14 (runner) |

## Assets

| Asset | Where | Alt text | Consent and status | Fallback |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` (139 by 32) | Header lockup, directly on the light page at 27px tall (32px from 768), linked to `#top`; footer on a `--color-bg` plate at 27px, 32px from 768 (K12 V2), linked to https://www.gt.school/ | "GT School" | GT's own mark, unchanged, on a light panel (copy.md section 8, checker R16); eager | none needed |
| `../shared/img/gt-anywhere-logo-h.svg` (252 by 48) | Footer, directly on `--color-navy` at 32px tall, linked to https://anywhere.gt.school/ | "GT Anywhere" | GT's own mark, white lettering on the navy panel (R16); eager (Departures) | none needed |
| Photographs | None in the default state | | Every file in `ASSETS.md` shows identifiable children; AD-11 and RF-25 gate them until Nari's written permission names website and advertising use | The default state is the fallback (DD-31) |
| Photographed state (designed, not shipped) | One `<figure>` after the comparison, between the sources line and the repeated doors: `georgetown-dscf1931.webp` (900 by 675) at 3:2, `object-position: 50% 70%` (hands, marker and worksheet), `max-width: 450px` (CONTRACT.md section 5: 450 × DPR 2 = 900, R13), `loading="lazy"`, caption "A student works through a math problem." (copy.md section 9) | "a student's hands solving a math problem" (ASSETS.md) | "published by GT on its own site, consent to be confirmed by Nari (AD-11)"; ASSETS.md's re-check of 2026-09-11 found a partial face at the top of the frame, which the 3:2 crop at 50% 70% reduces but does not remove | If rejected, the section stays as built |

Open Graph carries title and description only; no share image while the default state holds (copy.md Head).

## Colour and contrast (WCAG ratios computed from the token values, 2026-09-11)

| Pairing | Where | Ratio | Threshold |
|---|---|---|---|
| `--color-text` on `--color-bg` / `--color-surface` / `--color-anywhere-tint` | h1, door names and lines, facts, cells, steps, the sources lines, TEFA | 17.69 / 16.10 / 16.30 | 4.5; K3 CS3's 7 for running prose |
| `--color-text-muted` on `--color-bg` / `--color-surface` | eyebrows, labels, provenance, caption, row headers, step counters, source links (single strings, never a paragraph) | 6.25 / 5.69 | 4.5 |
| `--color-on-navy` on `--color-navy` | button labels, footer text and links | 14.58 | 4.5 |
| `--color-text-muted-on-dark` on `--color-navy` | footer facts | 7.81 | 4.5 (AAA) |
| `--color-navy` on `--color-bg` / `--color-surface` | button fills against the page | 13.88 / 12.63 | 3 graphical |
| `--color-focus` on `--color-bg` / `--color-surface` | ring on the light surfaces | 8.20 / 7.46 | 3 |
| `--color-on-navy` outer band on navy; `--color-navy` inner band on the `--color-bg` plate | the two-colour ring | 14.58 / 13.88 | 3, one band per ground (K3 F10) |
| `--color-accent` on `--color-bg` / `--color-surface` | the two 64 by 3px rules (`--space-8` wide) | 2.38 / 2.17 | decorative shapes, not load-bearing (RF-37); never as text |
| `--color-border` on `--color-bg` / `--color-surface` | hairlines | 1.56 / 1.42 | decorative; the CTA identifies every control |

Palette usage: `--color-surface` on the strip only; `--color-anywhere-tint` on the TEFA module; navy on the footer
and the buttons; the accent twice a page (one rule per screen on the first two screens, none after); text never
pure black or pure white; no colour used as text below 4.5 anywhere.

## Continuity against the measured estate (`0_plan/mockups/shared/CONTINUITY.md`, 2026-09-12)

The reference measures anywhere.gt.school from this repository's own mirror, served from `127.0.0.1` with every
third-party host blocked. It answers half of the Continuity row: the **Anywhere handoff is now scored on rendered
evidence; the Georgetown handoff stays unverified**, because `gt.school` has no mirror here and Anywhere cannot
stand in for it. Nothing in this build opened a production hostname.

What matches without argument: the ground `rgb(252, 244, 239)` (`--color-bg`), the body colour `rgb(0, 17, 23)`
(`--color-text`), the three families (Literata, Inter Tight, Inconsolata), and the two mark files unmodified on the
panels `copy.md` section 8 assigns them.

| Property | Estate, measured | This page | Decision |
|---|---|---|---|
| Horizontal mark height | 32px at 1440, at least 27px at 390 (K12 V2) | Header and footer GT School mark 27px to 767 and 32px from 768 (measured 27 at 390, 32 at 1280 and 1440); GT Anywhere mark 32px at both widths; both `height` with `width: auto`, so the rendered aspect matches the intrinsic 139 by 32 and 252 by 48 exactly | **Fixed this iteration.** The footer mark was 27px at every width, which met the phone floor and missed the desktop rule; it now takes the same step the header takes |
| Heading weight | Literata **300** | Literata **400** (`CONTRACT.md` section 3; DD-38 option b) | **Known, argued, kept.** M03 set the fixed sentence in both weights at V2 and V16 (`M03-navy-thesis/qa/h1-300-V2.jpg` and its three siblings) and the line count did not change, so 400 costs no fit and reads heavier at the 27.27px phone size where this page's h1 spends seven lines. K12 G13 records Literata Light for h1 to h3 as today's default, tagged "(Option, R15)", not a fixed rule, and DD-38 owns the test. A director who wants 300 gets it in one declaration |
| Heading tracking | **-1.6px** at 58.5px, which is -0.027em | normal | **Known, argued, kept.** At this page's clamp the same em value is -1.25px at 1440 and -0.73px at 375; Literata 400 at `--leading-tight` 1.15 is already a dense setting, and the phone row is the binding one (seven lines at 375, eight at 320). Tracking is part of the same G13 Option as the weight, so it moves with DD-38, not ahead of it |
| Button weight and size | Inconsolata **500** at **16px** | Inconsolata **600** at `--text-btn` (17 to 18px) | **Known, argued, kept.** `shared/fonts.css` ships Inconsolata 400 and 600 only, so 500 cannot be claimed without adding a face; and K12 G17 raises the control from the estate's shipped 40px to the runbook's 44px floor, which this page takes, so a label a step larger keeps its proportion inside the taller button. The fill, case, `.5rem` radius and near-white label are the estate's own (K12 F41) |
| Button fill | navy on the first screen, accent orange in the footer and the desktop header | surface-dependent: navy fill with `--color-on-navy` text on the light page; the footer carries no application button | **DD-46 option (a), unchanged.** Navy is already inside the estate's action vocabulary — its first screen's visible application action is the navy enrolment card — so navy on cream is continuous with it, not a departure. Copying the orange button would import K12 F87's 2.50:1 label contrast and spend the page's one accent, which the brief assigns to the two wayfinding rules |
| Button silhouette | a notch at the lower right, partly described by `border-radius: 8px 8px 0 0` | `--radius-md` (.5rem) on all four corners | Declared. The notch is a shape this page does not copy; K12 G17 fixes the radius value, not the notch, and no decision row asks for it |
| Ground texture | grained cream with fine wave linework behind the hero | flat `--color-bg` | Declared. The grain is part of the estate's surface, not of its token set; reproducing it would be an image outside `shared/img/` and outside the no-photograph default (DD-42, RF-25) |

## Departures

| Departure | Reason |
|---|---|
| Six source links inside the strip, to pages the deck does not list as link slots (BUILDER-BRIEF rule 9: "exactly as copy.md lists them") | The brief requires them (Composition: "a source link to the page named in the sources line"). Destinations are the pages the brief names: https://anywhere.gt.school/academics (admission bar), https://anywhere.gt.school/refund-policy (the MAP fact; the page's Growth Guarantee names NWEA MAP assessments, `refund-policy/index.html` in the mirror), https://www.gt.school/terms-of-use and https://anywhere.gt.school/terms-of-use (weekly check-ins; the Terms of Use name weekly 1:1 check-ins, CR-035), https://www.gt.school/ and https://anywhere.gt.school/ (K-8). All resolve to the two allowed school hosts (R16) |
| Anchor text of the source links: each page's address in the sources line's own notation ("anywhere.gt.school/academics", "gt.school/terms-of-use", "anywhere.gt.school/terms-of-use", "gt.school", "anywhere.gt.school", "anywhere.gt.school/refund-policy") | An address names its page (Exeter's rule, K5 F55) and adds no word; "anywhere.gt.school/refund-policy" is the one address the deck does not write anywhere, because the sources line does not carry the MAP source the brief names. Proposed for the copy owner: add "MAP assessments, anywhere.gt.school/refund-policy" to the sources line in `copy.md` section 4 (a copy change this build does not make) |
| The source links carry `data-event="outbound_school_site"` with `data-school` | `1_spec/03` section 7 defines no event for a source link; this is the event it defines for "Outbound to a school site", which these links are, with its defined parameter. If the analytics want source clicks separated, a `source_click` row for section 7 is the proposal |
| Compact door rule on phones under 780px tall, not the contract's 700 | With the lines in the rows V5 (414 by 715) would end at about 721 against 691: the door lines set in three lines at 366px. Same threshold and reason as M03. `(max-width: 767px) and (max-height: 779px)`; V6 (839) and V9 (844) keep the lines in the rows |
| V10: the h1 at `--text-xl` across the full width, the door names at `--text-lg`, section padding `--space-3`, the rows side by side, at `(max-height: 479px) and (min-width: 600px)` | CONTRACT.md section 2's landscape recipe, which allows the one-token step-down where the first screen cannot reach 318 at the clamp size (at 35ch the h1 would set four lines, 120px, and the CTAs would end at about 331). Measured: 286 of 318 |
| The h1 across nine columns at 1024 to 1279, eight from 1280 (M01: eight) | Eight columns at 1024 are 629px and set the sentence in five lines; nine (712px) hold four, as M12 measured with 688px. Eight columns at 1280 (800px) and 1440 (907px) set four |
| Two copies of each door line in the markup (in the row and as the run-in paragraph); exactly one displayed at any viewport | The compact rule moves the lines past the second CTA, which CSS cannot do from inside two list items without `display: contents` on `<li>`, whose list semantics are unreliable in assistive technology (M03's approach). `display: none` removes the hidden copy from the accessibility tree |
| Three no-break spaces: "in&nbsp;person" and "from&nbsp;anywhere." in the h1, "in&nbsp;person" in the fourth fact | Typographic no-breaks: the phrase stays whole and the h1 never ends on one word; at 1280 the fourth fact had split "in / person". No word changes |
| The utility links stack under 370px (header 88 at V1 and V18; 56 from 370, so at V2 and every wider row) | The 27px mark (117px wide) and the two 12px links (about 193px with their 8px gap) need about 318px; the 327px content column at 375 holds them, the 312px column at 360 does not. Alternatives: a smaller mark (M12, costed by both critics against K12 G4) or dropping a link (DD-12). V1 measured 593 of 716 |
| Buttons in uppercase Inconsolata 600 with `--radius-md` | The estate's own button setting (K12 F41, G15, G17); M03's iteration adopted it after both critics costed sentence case under Continuity |
| Doors as hairline rows on `--color-bg`, not M01's tinted cards | The brief's Color row gives `--color-bg` as the page and `--color-surface` to the strip; tinting the doors would spend the surface before the argument. The rows use the strip's own row treatment (C21), so the page has one module language |
| No door icon (DD-04 names label plus icon) | See Decisions applied, DD-04. Reversible in one line per door if the director rules a brand mark outside K3 section 5f's accent count |
| Three short-laptop height bands at `min-width: 1024px`, each one step of the same rule — a shorter viewport gives back first-screen padding, then the strip's own top padding, until the strip's heading is what the edge cuts: **`max-height: 789px`** first-screen padding 24 and 16, door bottom padding 16, anchor gap 16; **`max-height: 749px`** adds strip top padding 32; **`min-height: 600px` and `max-height: 669px`** adds first-screen padding 16 and 8, doors gap 16, door padding 8, door-line gap 8, anchor gap 8, strip top padding 24 | One band cannot serve V13 (768), V14 (720) and V15 (648): they are 48 and 72px apart in viewport height and the h1 differs by 7px between them, so what the first screen must give back differs by about 50 and 80px. Measured result, heading ink against the edge: V13 738 to 782 across 768; V14 690 to 738 across 720; V15 626 to 675 across 648 — the heading is sliced on all three. These are height queries in K1 P7's sense (compose against height as well as width), not rem heights tuned to one viewport (K1 A7): the bands share one rule and each states its own step. The 600px floor keeps V19 out: at 1024 by 576 the page is being zoomed, and there the first screen rightly ends with the compare anchor sliced (measured 565 to 606 across 576), as it does on phones |
| Compact rows: the anchor block flush under the run-in lines with its 8px gap as internal padding; and, on phone rows only (`(max-width: 767px) and (max-height: 779px)`, so V10's landscape recipe is untouched), the run-in lines `--space-6` under the second CTA and `--space-5` apart | The gap between the two ink runs below the CTAs is the fold's dead zone: with the lines 16px down and the paragraphs 8px apart, no element crossed the edge for any viewport between 711 and 731, and V5 is 715 — the reader saw a finished paragraph two pixels above the edge. Moving the lines down 16 and opening the paragraph gap to 24 puts the second paragraph's ink at 579 to 745 at V5 (edge 715) and 582 to 747 at V8 (edge 739), so both are sliced mid-line; the same move keeps V1, V2, V3, V4 and V7 cut by the lines and leaves V6 and V9 (which keep the lines inside the door rows) cut by the compare anchor. The wider paragraph gap also separates two paragraphs that each open with a bold school name |
| Four across from 1280, two by two from 768 to 1279 (the brief: four across at 1024 and above) | Four 216px cells at 1024 set about 22 characters a line and the second fact ran to five with "advance on" alone on a line, at V13, a required row. Two by two at 1024 gives 480px tracks and a 40ch measure, and no fact sets a two-word line at any width. The brief's four-across shape holds from 1280, the width at which the critics measure the strip (V14, V16, V17) |
| The heading sits `--space-5` above the ledger from 768, not `--space-7` | The strip's first hairline belongs to its heading: at 48px the heading floated free of the ledger it introduces, and at V17 (1920 by 960) the whole label block finished 36px above the edge with nothing crossing it. At 24px the heading sits on its rule, and V17 is cut by the ledger line itself (943, with the cells below it) |
| The strip's column gutter carried as cell padding (`column-gap: 0`, `padding-inline-end: --space-6`) rather than as a grid gap | The gutter as a gap broke the cells' top rules into four segments, so the strip never drew the unbroken ledger line both exemplars draw. With the gutter inside the cells the rules butt into one continuous hairline across the band and the text gutter is unchanged (272px of measure at 1280 against 280 before) |
| A `--color-border` hairline on the strip band's top and bottom edges | `--color-surface` on `--color-bg` is 1.10:1 by computation, so the tint alone barely delineates the band, and in forced colours (`qa/forced-colors.jpg`) there is no tint at all. The hairline is the same 1px rule the doors, the cells, the steps and the connect links use |
| `1fr auto` cell rows and one address a line, so the four sources bottom-align on one line across the strip | Measured before the change: source tops at 976, 1035, 1006, 976 at 1280 (a 59px spread) and 973, 1058, 1030, 973 at 1024 (85px), with cell 3 stacking its two addresses while cell 4 set them side by side. The cells were already equal height, so the footnote line was available for the asking. One address a line gives the two-source cells and the one-source cells the same behaviour, and costs no height (the two-source cells already wrapped to two rows at 1280) |
| A four-column label column on the steps and connect bands from 1024 (`.band-split`, `.band-label`, `.band-body`) | The steps list, the connect list and the TEFA module were each 676px inside a 1376px band at 1440, three sections running with an empty right half and no reason given. The rule now stated: a band whose content is prose-measured puts its eyebrow, heading and lead in four columns at the left and runs its ruled rows across the remaining eight, so the rules reach the band's right edge as the strip's and the table's do; a band whose content is itself a full-width structure (the strip, the table) stacks its heading above it. The TEFA module stays at the prose measure because it is a card inside the comparison, not a section, and it is the page's one `--color-anywhere-tint` surface: at band width it would outweigh the strip |
| One 80px gap between the comparison and the admissions steps, not two 80px band paddings | Compare then apply is one move, not a change of subject; 160px of accumulated padding read as a break in the argument (Astra, Composition). `.comparison { padding-bottom: --space-6 }` and `.steps { padding-top: --space-7 }`. The other band gaps keep the 160px rhythm because they are changes of subject |
| Three `white-space: nowrap` spans holding "in-person" (both copies of the GT Anywhere door line and the footer facts block) | At 1280 the line broke "and four in- / person weekends" and the footer facts block broke the same compound. A nowrap span changes no character and needs no copy-owner sign-off, which is what the previous rationale wrongly filed under "Open for the director"; the break does not occur at 1440 |
| `.door + .door { border-top }` restored inside the landscape query | Below 767px the doors stack and the second door drops its top rule, because the first door's bottom rule serves it. In the landscape recipe (V10) the doors are side by side at 750px wide, so the stacked-phone rule left the GT Anywhere door without a rule and put its label, name and CTA one pixel above Georgetown's (286 against 285). Restoring the rule aligns all three and both CTAs now measure 286 |
| Steps numerals in `--color-text-muted`, not `--color-accent-text` | The page spends its accent exactly twice, on the two rules; the numerals are footnote-sized markers in Inconsolata |
| The sources paragraphs at `--text-sm` in `--color-text` | A three-line running paragraph; `--color-text-muted` at 6.25 was costed on M03 for prose. The cell source links stay `--text-xs` muted as the brief says: single strings at 5.69 |
| Values outside the token set | 1px hairlines and underline thickness (2px on hover); the 3px height of the accent rules (the width is `--space-8`, 64px); the ring's 2px `outline` and 4px `box-shadow` spread (K3 section 5d); `outline-offset` 2px and 0; the 3px forced-colours outline; the 44px target minimum and 3.5rem header and connect rows; 27px and 32px mark heights (K12 G4); letter-spacing 0.08em; 0.35em after the run-in name; 0.18em and 0.2em underline offsets; `30ch`, `35ch`, `40ch`, `48ch` measures; the 20 percent corner column; the twelve-column `1 / span 4` and `5 / -1` label split; breakpoints 370, 600, 768, 900, 1024, 1280 and 1440; height queries 479, 600, 669, 749, 779 and 789; `text-wrap: balance` as an enhancement |
| `role` attributes on the table elements; the corner cell an empty `<td>` | The stacked layout below 768 uses `display: block`, which strips table semantics in some browsers; the roles keep the table a table. A visually hidden corner word would be a word the deck does not have |
| Footer marks load eagerly | Rule 13's lazy loading targets photographs and the checker exempts SVG marks; M12 found a lazy mark 4,000px down is never fetched in the runner's full-page capture. Both marks are 8 to 10 KB |
| `--color-text-muted-on-dark` #a3bfcb | A new tint proposed in DD-39 (a) and RF-07 (K3 section 5e); a DD-19 departure until the row is Agreed |

## Taste decisions the brief did not name (raised here, not made silently)

| Decision | Choice and reason |
|---|---|
| The accent device | One 64 by 3px `--color-accent` rule per screen (`--space-8` wide), above the compare anchor and above the strip's eyebrow: the same mark twice, so the anchor and the strip heading read as the two places the page asks for attention; no accent on any later screen |
| Cell rules | Each cell carries a top rule and the cells butt, so each row of cells stands on one unbroken hairline across the band; the list carries a bottom rule only on phones, where the cells are rows. This is COLLINS's ruled row (`collins-1440-full.jpg`, y 1700 to 2500), which runs its rules the full width of the band; Exeter's "Go figure" strip gives the cell's contents — label, figure, link — not its rules. The band itself closes with a hairline on both edges; the cells keep open bottoms inside it |
| Source link form | The address as the anchor text (Exeter's page-naming link, in the sources line's notation), Inter Tight `--text-xs`, underlined at rest, `--color-text-muted` with `--color-text` on hover and focus; each link a 44px-tall target; one address to a line in every cell, whether it carries one source or two, so the two-source cells behave alike and every cell's last address sits on the same line across the strip; `overflow-wrap: anywhere` so a 32-character address never forces horizontal scroll at 320px or at a doubled root font |
| Where the air goes in a cell | The fact sits at the top of its cell and the source at the foot, with the slack between them, rather than the fact and source packed together and the slack below. A footnote apparatus aligns at the foot: the column is what ties a fact to its source, and the reader gets one line of addresses across the strip instead of four at different heights. The cost is visible air in the two short cells, which is the price of the alignment and is taken deliberately |
| Two links where the deck names two sources | The Guides fact links both Terms of Use pages; the K-8 fact links both home pages. Each address names its site, so the two links are never the same text with different destinations |
| Fact measure | 40ch in the cells so a fact never runs the width of a two-by-two cell at 768 to 1023 (340px cells hold it anyway) |
| Provenance line | Inter Tight `--text-sm` in `--color-text-muted`, a plain dateline under the serif h1 (M12 chose Literata italic); in a page of footnotes the provenance reads like one |
| Eyebrows and labels | Inter Tight 500 uppercase 0.08em, the contract's default role (M03 chose Inconsolata); Inconsolata keeps its two jobs, buttons and figures, and the phone number |
| Door line colour | `--color-text`, not muted: the lines are two-line prose (K3 CS3's 7 for running text; 17.69) |
| Button arrow | Inside the button, right-aligned with `justify-content: space-between`, so both door buttons read as one control with a direction |
| Compare section title | Eyebrow "Compare", h2 "Compare the two schools", caption "Georgetown Campus and GT Anywhere, side by side", all visible: the anchor is a screen or more above on laptops, so the section names itself (M03 hid its h2; a director's call) |
| Comparison table columns | Row header 20 percent, the two schools 40 percent each (`table-layout: fixed`): equal columns for equal doors (Astra's M12 Composition finding) |
| TEFA module | On `--color-anywhere-tint`, because it is an Anywhere fact; `--color-text` on it is 16.30 |
| Steps | Inter Tight `--text-md` at 1.5 with Inconsolata counters in `--color-text-muted`, the register of the strip; Literata is kept for headings, door names, the table caption and heads and the anchor sentence |
| Section 6 heading | "Questions before you apply" (allowed heading): the not-yet-ready parent's question |
| Steps to Connect | One section gap (`.connect { padding-top: 0 }`), as M12's iteration settled it |
| Compare to Admissions | One 80px gap rather than two 80px paddings: the comparison and the application are one move (Departures) |
| Label column | From 1024 the steps and the connect band put eyebrow, heading and lead in four columns at the left and run their ruled rows across the remaining eight, so the page's lower half has the same left edge and the same right edge as the strip and the table. The strip and the table stack their headings, because their content is the full-band structure (Departures) |
| Families band | `--color-bg` with a top hairline, not a tinted band, so the strip stays the page's only tinted surface |
| Footer | Three columns from 900px (facts and number; links; both marks), the GT School mark on a `--color-bg` plate whose padding hangs 16px to the left of its column so the mark's ink aligns with the third column — that is, with the GT Anywhere mark directly below it, not with the facts block in the first column (`qa/focus-footer-plate.jpg`, which also evidences the plate's two-colour ring); the GT Anywhere mark directly on navy at 32px |
| Header | The mark directly on the light page (no plate: the page is the plate), 27px on phones and 32px from 768; the two utility links flush right, stacked under 370px |
| Doubled root font | `overflow-wrap: break-word` on `body`, `minmax(0, 1fr)` tracks on every grid, `flex-wrap: wrap` on the header and the source lists, `overflow-wrap: anywhere` on the buttons and the addresses, so a 32px root at 375 cannot force horizontal scroll (measured: pass; `qa/V2-rootx2.jpg`) |
| Open Graph | `og:title`, `og:description`, `og:type`; no `og:image` in the default state (copy.md Head) |

## Flagged slots

| Slot | Default shown | Flag |
|---|---|---|
| "Current families" destination | https://community.gt.school (header, families bar, footer) | Q-002 confirm |
| Application steps, same for both schools | Four steps as the deck lists them | Q-007 |
| Georgetown tuition | "Tuition on request. Ask admissions." | Q-011 decided (G0.5 item 4) |
| After 8th grade | "Families plan the path after 8th grade with admissions." | Q-013 |
| Intensive weekends logistics | "Four intensive weekends a year in Georgetown." | Q-017; CR-032 |
| Outcome figure, accreditation | Withheld from the page; the strip carries four register-backed facts | Q-019, Q-033 (G0.5 items 2 and 3) |
| TEFA window, owner, expiry | Module shown to everyone (D-015 option c) | Q-021 |
| Parent quote | None | Q-034 |
| Weekly check-ins | "check in every week" (strip), "a one-to-one check-in every week" (table) | Q-035 decided (Guides); CR-035 "Unverified, public", owner Nari |
| 90th percentile | Strip fact 1, both Admissions cells, the steps line | CR-011 "Unverified, public", owner Crystal |
| MAP assessments | Strip fact 2, linked to the Anywhere refund policy page | No register row carries a figure; the source is the page the brief names; the sources line does not list it (Departures) |
| Cohort size | None stated | CR-025 and CR-026 conflict |
| Tuition figure | "$10,400 a year" | CR-021 and CR-022 conflict flagged in the register |
| `?school=` parameter | `georgetown`, `anywhere` | DD-25's convention; the live apply.gt.school parameter is to be confirmed in S5, a planned stage with no record yet |
| Secondary CTA labels and destinations | "Talk to admissions", the tour label per R14, "Ask about a virtual info session", all to https://www.gt.school/contact; FAQ to anywhere.gt.school/academics | MD-02: meeting, tour and info-session links do not exist yet |
| Repeated comparison cells | Value repeated in both columns; on phones each labelled with its school | DD-43 proposed |
| Source-link event | `outbound_school_site` | No source-link event in `1_spec/03` section 7 (Departures) |
| Holly's unifying brand element | Not shown | Q-001 |
| Door icon | None | DD-04; K3 section 5f (Decisions applied) |
| Photograph and caption | None shown; the photographed state in Assets | DD-42, RF-25 |

## Parent questions (`0_plan/05-landing-mockups-plan.md` section 6c)

| Id | Question | Where the page answers it |
|---|---|---|
| PQ-01 | What is GT School? | The h1 |
| PQ-02 | Is it for my child? | "gifted and talented children" in the h1; strip fact 1 with its source; both Admissions cells; the steps line |
| PQ-03 | In person or online: what are my options? | The two doors and their lines; strip fact 4 |
| PQ-04 | Where is the campus? | The h1; the Georgetown door line; "Where and how" |
| PQ-05 | What does a day look like? | "The day" |
| PQ-06 | What does it cost, and can TEFA help? | "Tuition and access"; the TEFA module |
| PQ-07 | How do I apply? | "How to apply": four steps, two application links |
| PQ-08 | Who teaches my child? | Strip fact 3 with its two sources; "Guides" |
| PQ-09 | How much in-person time does GT Anywhere have? | The GT Anywhere door line; "In-person time" |
| PQ-10 | What results does the school get, and is it accredited? | Deferred by decision (G0.5 items 2 and 3): the page is silent; "Contact admissions" and "Talk to admissions" reach the person who answers it |
| PQ-11 | What happens after 8th grade? | "After 8th grade", deferred to admissions (Q-013) |
| PQ-12 | I am a current family, where do I go? | Header link; "Already a GT family?"; footer link |
| PQ-13 | I am not ready to apply, what can I do? | "Questions before you apply" |
| PQ-14 | Is GT School part of Alpha School? | The provenance line |

## Self-check

Greps and string checks (re-run 2026-09-11 from the mock folder after iteration 1):

| Check | Result |
|---|---|
| `grep -c "<form" index.html`, `<input`, `<script` | 0, 0, 1 (the JSON-LD block) |
| `grep -c data-component index.html`, `class="nowrap"` | 9 (eight `1_spec/04` section 3 blocks; Door card appears twice), 3 |
| Every `var()` in `styles.css` defined in `tokens-v2.css` | 40 used, 0 undefined |
| Hosts in `href` and `src` | anywhere.gt.school ×12, www.gt.school ×14, apply.gt.school ×4, community.gt.school ×3, gt.school ×2 (canonical, JSON-LD url), schema.org ×1 (JSON-LD context) |
| Digits in visible text | 09, 10, 10,400, 2026, 270, 512, 8, 9, 90, 9481 (the sources date twice, the phone number, 8th grade, 9 to noon, 90th, $10,400) |
| "advis" in visible text | none (`data-type="advisor"` is an attribute) |
| Full names in visible text | Georgetown Campus ×8, GT Anywhere ×14 |
| Provenance line | once; sources line twice (strip, table) |
| Fixed slots | sixteen slots of `copy.md` sections 0 to 9 (h1, provenance, both door lines, the anchor sentence, the four facts, the sources line, the steps line, the families sentence, the footer facts, the tour label, the skip link, the strip heading) found verbatim by string match with whitespace normalised; the three `nowrap` spans wrap existing characters and change none |
| Raw hex in `styles.css` | 0 |
| `transition:` declarations, `@keyframes`, `vh`/`svh`/`dvh` | 0, 0, 0 (`transition-duration` appears once, in the reduced-motion block) |
| Logos | `gt-school-logo-h.svg` ×2 (header, footer), `gt-anywhere-logo-h.svg` ×1 (footer) |
| `data-event` | door_click 4, compare_view 1, cta_apply_click 4, cta_secondary_click 4, families_click 3, tefa_module_view 1, outbound_school_site 10 (six source links, two footer text links, two footer marks) |
| Size | 17,566 + 22,471 = 40,037 bytes; 39 KB by the checker's formula (bytes over 1024) |
| 390 by 844 first screen (V9) | Measured: header 56, h1 294, provenance 323, the lines in the rows, CTA Georgetown 548, CTA Anywhere 774 of 844, the compare anchor cut at the fold; the header, the umbrella sentence and the provenance line are the only things above the doors (`qa/V9.jpg`) |

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M15-the-proof-strip`

```
## M15-the-proof-strip: 36 pass, 0 fail

check-mocks: OK
```

### `python3 1_spec/tools/check-claims.py 0_plan/mockups/M15-the-proof-strip/index.html`

```
## 0_plan/mockups/M15-the-proof-strip/index.html
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

CR-032's count is 4 because the GT Anywhere door line is in the markup twice (row and run-in copy, one displayed);
CR-033's count is 2 because the checker's pattern is case-sensitive and the door line's "Two hours" is capitalised.

### `node 0_plan/tools/shots.mjs 0_plan/mockups/M15-the-proof-strip --all` (iteration 1, final run, 2026-09-11T12:26:26.189Z; writes `qa/fold.md` and the captures listed above)

```
| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 321 | 350 | 480 | 593 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 291 | 320 | 450 | 563 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 323 | 452 | 566 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 323 | 453 | 566 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 294 | 424 | 537 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 294 | 520 | 746 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 295 | 324 | 454 | 568 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 296 | 426 | 540 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 323 | 548 | 774 | yes | report: page height 6688 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 286 | 286 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 229 | 259 | 490 | 490 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 235 | 264 | 497 | 497 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 288 | 532 | 532 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 309 | 530 | 530 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 308 | 498 | 498 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 316 | 354 | 594 | 594 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 316 | 354 | 594 | 594 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 352 | 402 | 540 | 653 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 288 | 532 | 532 | yes | report: scrollWidth 1024 |

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
| V1 | yes | ul.door-lines ink 635 to 824 |
| V2 | yes | ul.door-lines ink 605 to 794 |
| V3 | yes | ul.door-lines ink 608 to 797 |
| V4 | yes | ul.door-lines ink 608 to 798 |
| V5 | yes | ul.door-lines ink 579 to 745 |
| V6 | yes | div.compare-lead ink 795 to 858 |
| V7 | yes | ul.door-lines ink 610 to 799 |
| V8 | yes | ul.door-lines ink 582 to 747 |
| V9 | yes | div.compare-lead ink 823 to 886 |
| V10 | yes | ul.door-lines ink 328 to 448 |
| V11 | yes | section.band ink 609 to 1379 |
| V12 | yes | section.band ink 616 to 1360 |
| V13 | yes | section.band ink 620 to 1340 |
| V14 | yes | section.band ink 619 to 1177 |
| V15 | yes | section.band ink 564 to 1116 |
| V16 | yes | section.band ink 756 to 1365 |
| V17 | yes | section.band ink 756 to 1365 |
| V18 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V19 | yes | div.compare-lead ink 565 to 606 |

## Result: all required rows pass
```

Exit code 0. Sixteen of sixteen fold rows pass. The "Next band evidence" table names the first element in document
order whose ink crosses each row's bottom edge; where it names `section.band` the band's own hairline is simply the
first qualifying box in the DOM, so here is what is actually sliced on every row, measured:

| Rows | What the bottom edge cuts |
|---|---|
| V1 to V5, V7, V8, V10 | The second run-in door paragraph, sliced mid-line (for example V5, ink 579 to 745 across a 715px edge; V8, 582 to 747 across 739) |
| V6, V9, V19 | The compare anchor: its accent rule and sentence (V6 795 to 858 across 839; V19 565 to 606 across 576) |
| V13, V14, V15, V16 | The strip's heading "What is true of both schools" (V13 738 to 782 across 768; V14 690 to 738 across 720; V15 626 to 675 across 648; V16 874 to 924 across 900), with the band's hairline, accent rule and "PROOF" complete above it |
| V11, V17 | The strip's ledger: at V11 the second row of fact cells and the fact text inside it (993 to 1072 across 1024); at V17 the cells' continuous hairline at 943 with 17px of the cells below it |
| V12 | Cut by the sources line, 1186 to 1203. This row was the mock's one false floor and is the only change in the mock made by the design director rather than the engineer: at 834 by 1194 the whole strip fitted, its last footnote row ended at 1137, the sources paragraph began exactly on the edge, and only the band's tint and bottom hairline ran past it, so the screen read as finished. Astra rejected it and the runner's rule agreed once corrected. The sources line now sits 16px below the facts it cites rather than 24px, which puts a whole line of it across the edge here and binds the caption to the block it sources at every other row |
| V18 | Reflow row; a cut is not required and none is reported |

The block above is the final run, not an earlier one: it is `qa/fold.md` on disk apart from the four header lines the
runner writes only to the file (verified by comparing the two).

### Runner passes

| Pass | Found | Changed |
|---|---|---|
| 1 (build) | Every required row passes (V2 563, V5 537, V10 286, V14 538, V16 594); reduced motion, doubled root and console pass. Two "no band cut" warnings: V8 (the run-in lines ended at 724 and the anchor began at 748, so the 739px edge fell in the gap) and V15 (the anchor ended at 639 and the strip began at 687 against a 648px viewport). Review of the captures: the arrow in the two text links hugged the word (inline-flex trims the span's leading space); the fourth fact split "in / person" at 1280 | Compact rows: the lines 8px under the CTA and the anchor 12px under the lines; the short-laptop height query; `margin-left` on the text-link arrows; a no-break space in the fourth fact; cell bottom padding 24 at 768 and above |
| 2 | V8 and V15 cut; V5 lost its cut (the lines list now ended at 712 against a 715px edge) | Compact rows: the lines back to 16px under the CTA (the list ends at 720 at V5) and the anchor block flush under the list with its 8px gap as padding (its box begins at 723 at V8) |
| 3 | All sixteen fold rows pass with the band cut; V19 also cut; reduced motion, doubled root, focus, forced colours and console pass | none; handed over |
| 4 (iteration 1) | The runner, corrected since pass 3 to measure visible ink rather than box geometry, failed three rows outright: V5 (414 by 715), V14 (1280 by 720) and V15 (1366 by 648) — false floors, tint or a line box where the reader saw a finished paragraph or a band of cream. The critics' Composition findings on top of that | The compact phone rows' spacing (Departures); three short-laptop height bands; the strip's band hairlines, continuous cell rule, bottom-aligned sources, one address a line and two-by-two to 1279; the label column on the steps and connect bands; the comparison-to-steps gap; the nowrap spans; the landscape door rule; `data-component` names; the rationale corrections below |

### Iteration 1, 2026-09-11 — what changed and why

| # | Change | Answering |
|---|---|---|
| 1 | The strip's four source links bottom-align on one line and the cells' top rules butt into one continuous hairline across the band (`column-gap: 0` with the gutter as cell padding; `grid-template-rows: 1fr auto`) | Fable, Composition (a) and (b): footnote tops wandered 59px at 1280 and 85px at 1024, and the rules broke into four segments |
| 2 | Two by two from 768 to 1279, four across from 1280 | Fable, Composition (c): 216px cells set 22 characters a line at V13 and the second fact ran to five lines |
| 3 | A four-column label column on the steps and connect bands from 1024; the TEFA card's single measure stated as a decision | Fable, Composition (d): three sections each 676px inside a 1376px band with no reason given |
| 4 | One address a line in every source cell | Fable, Craft: cell 3 stacked its addresses while cell 4 set them side by side |
| 5 | Compact phone rows: the run-in lines 32px under the second CTA and 24px apart; three short-laptop height bands | The corrected runner's three false-floor failures, V5, V14 and V15 (Fable, Composition (e)) |
| 6 | A `--color-border` hairline on the strip band's top and bottom edges | Fable, Colour and surface: a 1.10:1 tint was carrying the band alone and vanished in forced colours |
| 7 | `white-space: nowrap` on "in-person", three times | Fable, Typography (b) and Craft: "and four in- / person" at 1280, in the door line and again in the footer facts block |
| 8 | `.door + .door` keeps its top rule in the landscape two-column query | Astra, Craft: the Anywhere door lost its rule and sat a pixel high at V10 (286 against 285; both now 286) |
| 9 | The comparison-to-steps gap cut from 160px to 80px; the strip cells' bottom padding to 16 and the sources margin to 24 | Astra, Composition: the transition from comparison to application read as a break |
| 10 | `qa/focus-footer-plate.jpg` added: the footer plate focused, showing the two-colour ring straddling light and navy | Both critics: the acceptance line rested on two captures that show neither straddle |
| 11 | Rationale corrections, no page change: the accent rule is 64 by 3px (three places); V14's pre-iteration anchor and surface were 627 and 675, 45px in view, not 646 and 677; the door line broke at 1280 only; the footer plate's ink aligns with the third footer column; the cells' ruled treatment is COLLINS's, not Exeter's; K12 G15 and G17 specify button weight 500, so the page's 600 is `CONTRACT.md` section 3's, not the estate's | Fable, "Wrong where claimed" (1) to (4); Astra, same column, items 2 and 3 |
| 12 | Eight blocks carry their `1_spec/04` section 3 component name; four blocks outside that inventory are listed as proposed additions | Fable, Continuity |
| 13 | The strip's heading sits 24px above its ledger from 768, not 48 | Reviewing the regenerated captures: at V17 (1920 by 960) the label block finished 36px clear of the edge with nothing crossing it, and at every width the heading floated free of the rule it introduces. The heading now sits on its ledger and V17 is cut by the ledger line |
| 14 | The footer GT School mark steps to 32px from 768, as the header's already did | K12 V2 via `shared/CONTINUITY.md`: 27px at every width met the 390 floor and missed the 32px-at-1440 half. Added after the critic rounds, with the estate comparison the new reference makes possible (section "Continuity against the measured estate") |

Where the two critics differ, the studio critic (Fable) is followed and it is said here. Two places this bites:
Fable scores Composition 3 and Astra 4, so the strip and the lower page were rebuilt to Fable's four findings rather
than left as Astra's "recognizably adapted"; and Fable reads the cells' rules as needing one continuous hairline
where Astra raised no rule finding at all. Astra's two Composition asks (the 160px gap, the cells' bottom padding)
are additive to Fable's and were taken as well, with Astra's own caveat kept: each fact still sits in one column
with its source, and the column is what groups them.

### Screenshots reviewed (the runner's files)

Reviewed again after iteration 1, in a browser on a server this session started, at every capture the runner wrote:
`qa/V2.jpg` (seven-line h1 ending "from anywhere.", the mark at 27px beside both links in a 56px header, two
compact door rows, the first run-in paragraph cut at the fold), `qa/V1.jpg` (the stacked links, header 88),
`qa/V5.jpg` (six lines; the second run-in paragraph sliced mid-line at 715, where it used to finish at 713),
`qa/V8.jpg`, `qa/V10.jpg` (the landscape recipe: three-line h1, two rows side by side with both top rules and both
CTAs at 286, the run-in lines cut), `qa/V11.jpg` and `qa/V12.jpg` (the doors paired, the strip two by two, its
second row of cells cut by the edge), `qa/V13.jpg`, `qa/V14.jpg`, `qa/V15.jpg`, `qa/V16.jpg`, `qa/V17.jpg`
(four-line h1, the door pair with "in-person" whole, the anchor and its rule, the strip's hairline, accent rule,
eyebrow and heading, the heading sliced by the edge on each), `qa/V18.jpg` (320: no horizontal scroll),
`qa/V2-rootx2.jpg` (32px root: the header wraps, nothing overflows), `qa/focus-cta.jpg`, `qa/focus-plate.jpg`,
`qa/focus-footer.jpg`, `qa/focus-footer-plate.jpg` (the ring's navy band on the light plate and its white band on
the navy ground), `qa/forced-colors.jpg` (the strip's band edges now draw as full-width rules where the tint is
gone), and crops of `qa/V14-full.jpg` (the strip: one hairline across four cells, the addresses on one line at the
foot, the sources line; the table; the steps and connect bands with their label columns; the footer with both
marks) and `qa/V2-full.jpg` (the strip as four hairline rows; the footer). Not done here: 200 percent zoom at V14
beyond the runner's V19 stand-in; in-app browsers (REQ-024); a scroll video; a side-by-side against Georgetown, which has no mirror in this
repository (the Anywhere side is now scored against `shared/CONTINUITY.md`, measured from this repository's own
mirror; no production hostname was opened).

### Open for the director

| Item | Detail |
|---|---|
| The MAP source address | "anywhere.gt.school/refund-policy" appears on the page as a source link the brief requires but the deck's sources line does not list; a `copy.md` section 4 addition is proposed above for Nari |
| Source-link event | `outbound_school_site` reused; a `source_click` event for `1_spec/03` section 7 if source clicks are to be counted apart from footer clicks |
| Door cue | No icon (DD-04): label, name and position carry it; reversible if a brand mark is ruled outside the accent count |
| Header under 370px | Two link rows (88px) at V1 and V18 to keep the 27px mark; 56px from 370 |
| Cell width at 1024 | Closed. Four across as the brief requires gave 216px cells and about 22 characters a line at 1024 to 1279; the strip now holds two by two to 1279 and takes the brief's four-across from 1280 (Departures). If the director wants four across at 1024, the fact text has to step to `--text-base` there, which departs from the brief's type row instead |
| Index gap | RF-07, RF-25, RF-37, RF-53, RF-55, RF-58 are cited here from `kb/REGISTER-FOLLOWUPS.md` (via `CONTRACT.md` and `TOKENS-V2.md`) and are not listed in `0_plan/ID-INDEX.md`, the gap M12's critic reported; not this mock's file |

**Director's changes after the second scoring.** Two, both named here so the record separates them from the engineer's work. The sources line moved from 24px to 16px below the facts, closing the V12 false floor above. And both footer marks now stand at 32px at every width: K12 V2 sets 32px at 1440 with a 27px floor at 390, and 27px cleared that floor, but the two marks sit one above the other in the footer, so at 27px against the GT Anywhere mark's 32px the umbrella brand read smaller than its own sub-brand on the width that carries two thirds of sessions. The runner now writes `qa/focus-footer-plate.jpg` itself, so that capture can no longer go stale while the rest of the folder moves.
