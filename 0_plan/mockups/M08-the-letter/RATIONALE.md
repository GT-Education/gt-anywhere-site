# M08 The Letter: rationale

| Field | Value |
|---|---|
| Brief | `0_plan/kb/briefs/M08.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1 |
| Built | 2026-09-11, design engineer (Fable fork), one build pass with the runner in the loop (`0_plan/tools/shots.mjs`, Chromium 153 from the npx Playwright cache) |
| Files | `index.html`, `styles.css` (tokens through `var()` from `../shared/tokens-v2.css`), this file, `qa/` (runner output: `fold.md`, one screenshot per matrix row, `V2-full.jpg`, `V14-full.jpg`, `V2-rootx2.jpg`) |
| State | Default state: no photograph (DD-42 option a, RF-25). No JavaScript, no form, no input, no dependency |

## Direction

Lens order L3 mission, L4 exclusivity, L1 objective, L2 continuity (the brief's order). Hypothesis: a school that speaks plainly to a family in a short letter reads as more serious than any poster, and seriousness read as calm prose is the exclusivity cue that costs no wealth signal (K14 section 5a; `0_plan/08` principle 3).

The first screen is the letter: the umbrella sentence set large in Literata 400 as the opening sentence; the provenance line small beneath it (G0.5 item 6); one short accent rule; then the two doors as the letter's closing paragraphs, each opened by a small tracked run-in ("In person · Georgetown Campus") and closed by a bordered Inconsolata text button. The compare anchor sentence is the postscript, in italic, directly under the second button. Nothing else is on the first screen. From 768px the whole page is one centred column of `--measure-prose`; below 768px the column runs to 24px margins. On viewports under 700px tall (and under 375px wide, see Departures) the contract's compact door rule applies: opener and button per door, both door lines following the second button as run-in paragraphs, so both CTAs sit above the fold on every phone row except V10.

## h1

The umbrella sentence, verbatim from `copy.md` section 1, is the `h1` (`data-fold="h1"`): it is the letter's first sentence and the page's one statement of what GT School is. Literata 400 at `--text-3xl` (27.26px at V2 to 46px at V16), `--leading-tight` 1.15, `text-wrap: balance`, `max-width: 35ch` (never binding: the column is narrower than 35ch of the h1 at every row). Measured line counts: 7 at V1 to V4 and V7 (360 to 402px wide), 6 at V5, V6 and V8, 4 at V10 to V13 and V19, 5 at V14 to V17. The sentence sets in five lines at the laptop rows, not the contract's four, because the letter's column (666 to 677px) is narrower than the contract's eight-column h1 (779 to 907px); the fold table below carries the consequence. The last word is joined to "from" with a no-break space in the markup so no row ends on "anywhere." alone (see Departures). At V14 and V16 the balanced lines are: GT School is a selective / school for gifted and talented / children, in person at our / Georgetown, Texas campus / or online from anywhere.

## Brief compliance

| Brief row | Built | Status |
|---|---|---|
| Mock id and name, lens order | M08 The Letter; L3, L4, L1, L2 | As briefed |
| Thesis | Fixed sentences as a short letter in Literata; doors at its close; no poster elements: no card, no panel, no photograph, no icon, no motion | As briefed |
| Exemplars | RISD: one continuous sentence as the whole opening, kept to a single prose column with both doors on the first screen (C36 avoided). Barnes: tracked eyebrows over every section below the letter (Compare, Proof, Admissions, Connect, Families). Caltech: zero authored transitions (C11). Harvard's zero-CTA page avoided: two CTAs above the fold at every row but V10 | As briefed |
| Composition | One centred column: `width: min(100% - 48px, var(--measure-prose))`, 65ch resolved in the base size (RF-55). Header 56 (`min-height: 3.5rem`, hairline drawn as a shadow so it adds no height). Reading order: h1; provenance at `--text-sm`; accent rule; door 1 opener (label · name) run in on the paragraph, line, bordered CTA; door 2 the same; postscript. Fold estimates recomputed and measured below | As briefed, with the run-in opener sharing the paragraph's first line rather than taking its own (the brief's own V14 sum assumed a three-line h1 and one-line door lines; measured they are five and three or two, so the opener's line was the budget that had to go) |
| Typography | h1 Literata 400 `--text-3xl` 1.15; door lines Literata 400 `--text-md` at `--leading-prose` 1.5 (K2 section 5b); labels and names Inter Tight 500 `--text-xs` uppercase 0.08em `--color-text-muted`; CTAs Inconsolata 600 `--text-btn` as bordered text buttons, 44px tall | As briefed |
| Color and surface | `--color-bg` page, no card. One accent use on the first screen: the 48 by 2px `--color-accent` rule between the provenance and the doors. CTAs `--color-navy` border and text on light (fill on hover, instant). Sections below on `--color-bg` with `--color-border` hairlines; footer `--color-navy` with `--color-on-navy` text. Focus `--color-focus` on light; K3's two-colour ring on the footer | As briefed |
| Imagery | Default state: none. The photographed state (after RF-25) is specified under Assets and not built | As briefed |
| Motion | Still. V3 focus instant; V1 door hover instant; V10 native anchor scroll (`scroll-behavior: smooth` inside `prefers-reduced-motion: no-preference` only). Reduced motion: every computed duration 0 (runner, V14) | As briefed |
| Copy | Sections 0 to 8 verbatim in the order h1, provenance, door 1 label, name, line, CTA, door 2 label, name, line, CTA; no section 9 words (no photograph, so no caption). Headings beyond the slots only from the allowed list: "Two ways to attend" (visually hidden), "Compare the two schools", "What is true of both schools", "How to apply", "Questions before you apply", "Already a GT family?", eyebrows Compare, Proof, Admissions, Connect, Families | As briefed |
| Conversion | Doors as the two closing actions on the first screen; postscript compare anchor within the first screen at every row from V5 up and within the second at V1 to V4; table with repeated values (DD-43); four proof facts; steps with two application links; four secondary CTAs (R14 tour label); current families; footer | As briefed |
| Acceptance | Line length at every row from 768 measured in the browser (Self-check): door lines 64 to 65 characters per full line with the run-in opener counted, table cells 48 on average and 56 to 58 at most, facts 56 on average and 69 at most, leads 59 to 60, TEFA body 66, sources line 64 on average and 73 at most, footer facts 47 to 51 on average; no orphan in the h1 at V14 or V16 (last line "or online from anywhere."); `text-wrap: balance` used within the six-line limit (K2 F-22): it applies at V5 to V17 and is a no-op at the seven-line phone rows, where the no-break space carries the orphan. DD-38 and DD-39 named below | Ready for the critics; V10 fails the fold rule by arithmetic (Departures) |

## Fold estimate and measurement (the four rows, plus the rest of the matrix)

Method: CONTRACT section 2 with this letter's own layout, glyph advances read from the shipped TTFs (`Literata-Regular.ttf`: adv("0") 0.579em, mean advance 0.51186em over the fixed copy, matching `kb/measurements/K2/output.md` M-01) and a greedy line-break simulation of the real sentences at each column width. Estimates were written before the runner ran; the measured column is the runner's bottom coordinate of the second CTA.

| Row | Limit | Form | Estimate (px) | Measured CTA Anywhere bottom | Slack |
|---|---|---|---|---|---|
| V2 375 by 629 | 605 | Compact | header 56 + 16 + h1 7 lines at 27.26 and 1.15 = 219 + 16 + provenance 22 + rule block 16 + 2 + 8 = 26 + opener 15 + 8 + CTA 44 + 24 + opener 15 + 8 + CTA 44 = 513 | 512 | 93 |
| V5 414 by 715 | 691 | Letter | 56 + 16 + h1 6 lines at 27.95 = 193 + 16 + 22 + 26 + door 1 (run-in paragraph 4 lines at 18.10 and 1.5 = 109 + 8 + 44 = 161) + 16 + door 2 (4 lines 109 + 8 + 44 = 161) = 665 | 665 | 26 |
| V14 1280 by 720 | 696 | Letter | 56 + 24 + h1 5 lines at 43.19 = 248 + 16 + 22 + 26 + door 1 (3 lines at 19.70 and 1.5 = 89 + 8 + 44 = 141) + 16 + door 2 (2 lines 59 + 8 + 44 = 111) = 660 | 660 | 36 |
| V16 1440 by 900 | 876 | Letter, tall-room spacing | 56 + 48 + h1 5 lines at 46 = 265 + 16 + 22 + 34 + door 1 (3 lines at 20 and 1.5 = 90 + 16 + 44 = 150) + 24 + door 2 (60 + 16 + 44 = 120) = 735 | 735 | 141 |

The postscript follows at 715 (V14, cut by the fold as the next band) and 788 (V16, within the first screen). The contract's own shared numbers (six-line h1 at V2, four-line h1 at V14) were optimistic for this copy in this column: measured, the sentence is seven lines below 414px wide and five lines at 1280 and above.

Every other row, from `qa/fold.md` (header 56 everywhere): V1 510 of 716 (compact by width); V3 515 of 640; V4 515 of 635; V6 665 of 815; V7 485 of 657; V8 667 of 715; V9 693, page height 6507 (emptiness row, not a fold test); V10 450 of 318, FAIL; V11 617 of 1000; V12 624 of 1170; V13 586 of 744; V15 562 of 624 (compact); V17 735 of 936; V18 599, no horizontal scroll at 320; V19 481 of 552, no horizontal scroll. "Next band cut" is yes on every row, so no row ends on a false floor.

V10 (750 by 342, limit 318) cannot be met by this or any direction under the contract's method: header 56 plus a four-line h1 at 33.86px (156) plus a one-line provenance (22) plus two 44px CTAs is 322 before a single gap, opener or rule. The row is recorded here as failing, with the arithmetic, for the director; the brief's compact rule was not stretched further to chase it.

## Decisions applied

| Id | How this mock applies it |
|---|---|
| G0.5 items 1 to 6 | Umbrella sentence as drafted; no speed figure, no SAT figure, no accreditation claim, no Cognia mark; "Tuition on request. Ask admissions."; Guides, never advisors (the `data-type="advisor"` attribute value is the spec's, not text); provenance exactly once, small, next to the h1 |
| REQ-022, DEL-018 | Every figure maps to a claims-register row (`check-claims.py` OK); the rows relied on, CR-011, CR-021, CR-032, CR-033, CR-034, CR-035, are all "Unverified, public", stated here and never on the page |
| REQ-070, DD-25 | Application links only with `?school=georgetown` or `?school=anywhere`; the `school=` parameter name is DD-25's convention, confirmed in S5 (flag) |
| DD-04 | Explicit format labels "In person" and "Online" open each door; the school name follows in the same opener and again in the CTA label. The supporting icon DD-04 describes is not drawn: a letter has none (raised under Departures) |
| DD-06, DD-43, R6 | One comparison table, shared rows first, every shared value repeated in both columns; rendered as stacked definition rows with the school name labelling each cell at every width (see Departures for why there is no two-column state) |
| DD-08, DD-31, DD-42 | No photograph in the default state; asset dependency and fallback declared under Assets |
| DD-10, MD-25 | Exclusivity as selectivity: the 90th-percentile bar stated in the table, the proof strip and the steps line; no price cue, no countdown, no wealth cue |
| DD-12, DD-13 | Header: lockup, "Current families", "Contact admissions"; no menu, no phone in the header; the general number in the footer only |
| DD-14 | Designed at the phone rows first (V2 binding); doors stacked Georgetown then Anywhere; no sticky CTA |
| DD-19 | Departures named below |
| DD-21 | The doors are a `<ul>` (`role="list"`) that renders at two entries and would hold five: the compact reorder rules cover `nth-child(1)` to `nth-child(5)` |
| DD-29 | Every screen carries a fact: the first screen the two door lines, the second the table |
| DD-30 | Plain word first: "Guides, not lecturers: adults who coach…" in the proof strip is the fixed copy's own plain-first construction |
| DD-38 (b), R5 | Layer-2 fluid scale and `--leading-prose` used as working defaults; Literata 400 for the h1 (300 against 400 is the wave's test, not this mock's); fit measured on the fixed copy in the table above |
| DD-39 (a), RF-07 | `--color-on-navy` as the footer text and the ring's inner band; `--color-border-strong` as the resting underline colour of text links; `--color-text-muted-on-dark` as the footer links' resting underline. The last two are new tints and DD-19 departures |
| DD-44 | V18 reflow and V19 zoom rows reported, not required; both pass with no horizontal scroll |
| MD-17 | Affiliation as prominence: the provenance line is the smallest text on the first screen (`--text-sm`, muted) |
| MN-16, D-031, D-039 | No script, no input; no `data-d039` declaration is needed. The one motion move used is the contract's V10 native anchor scroll |
| SE-13 | `noindex, nofollow` on the mock |
| R14, MD-02 | "Ask about a tour of the Georgetown campus" until a booking route exists |
| K3 sections 5c to 5f | Text `--color-text` on `--color-bg` (18.67); muted `--color-text-muted` (6.25) for labels at 12 to 13px 500; `--color-on-navy` on navy (14.58); accent never as text; one accent event per screen (the rule) |
| K2 section 5b, F-22 | Reading prose in the serif at 1.5; `balance` on the h1 within the six-line limit; body strings at `--leading-body` 1.25 |
| K1 section 2c, RF-55 | 65ch column in the base size; measured line lengths under Self-check |

## Layer-2 tokens used (all PROPOSED; rows named per CONTRACT section 1)

| Token | Where | Register row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-xl`, `--text-3xl`, `--text-btn` | Every type role on the page | DD-38 option (b), R5 |
| `--leading-prose` (1.5) | Body default, door lines, table cells, facts, leads, sources, footer facts | DD-38 option (b), RF-58 |
| `--measure-prose` (65ch) | The letter's column (`.col`) | RF-55 |
| `--color-on-navy` | Footer text, CTA text on hover fill, inner band of the footer focus ring | DD-39 option (a), RF-07 (existing swatch in a new role) |
| `--color-border-strong` | Resting underline of text links on light surfaces | DD-39 option (a), RF-07: new tint, DD-19 departure |
| `--color-text-muted-on-dark` | Resting underline of footer links on navy | DD-39 option (a), RF-07: new tint, DD-19 departure |

Not used: `--color-accent-text`, `--color-on-accent`, `--color-focus-on-dark` (the footer ring uses K3 section 5d's two-colour construction from `--color-on-navy` and `--color-navy`), `--ease-*`, `--duration-none` (nothing transitions; the reduced-motion block sets `transition: none` and `animation: none`).

## Motion spec

| What | Trigger | Duration | Easing | Reduced motion |
|---|---|---|---|---|
| Nothing animates | | | | |
| Door CTA and apply button hover: navy fill and on-navy text swap | `:hover` | Instant (V1, CONTRACT section 6) | none | Unchanged, instant |
| Focus ring | `:focus-visible` | Instant (V3) | none | Unchanged |
| In-page link to `#compare` | Click | Native smooth scroll (V10), `scroll-behavior: smooth` only inside `prefers-reduced-motion: no-preference` | Browser's | `scroll-behavior: auto` |
| Reduced-motion block | `prefers-reduced-motion: reduce` | `transition: none`, `animation: none` on elements and `::before`/`::after` | | Runner at V14: every computed duration 0s |

## Assets

| Asset | Where | Alt | Consent | Fallback |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` (139 by 32) | Header lockup (links to `#top`); footer on a `--color-bg` plate (links to www.gt.school) | "GT School"; "GT School, Georgetown Campus" | Brand mark, no person | None needed |
| `../shared/img/gt-anywhere-logo-h.svg` (252 by 48, white lettering) | Footer, directly on the `--color-navy` panel (links to anywhere.gt.school) | "GT Anywhere" | Brand mark, no person | None needed |
| Photographs | None in the default state (DD-42 option a; every file in `ASSETS.md` shows identifiable children; AD-11; RF-25) | | | The default state is the fallback (DD-31) |
| Photographed state, specified not built | One photograph after the comparison, `georgetown-guide.webp` (1440 by 960) at 3:2, `object-position: 50% 50%`, at most 720 CSS px wide (DPR 2 against the 1440 source, R13), caption from `copy.md` section 9: "A Guide teaches at the whiteboard.", alt from `ASSETS.md`: "a guide teaches a lesson at the whiteboard" | | "published by GT on its own site, consent to be confirmed by Nari (AD-11)"; written permission naming website and paid-advertising use before use (DD-42) | Omit the figure; the letter is complete without it |

Fonts: two preloads, Literata 400 and Inconsolata 600, the two faces that paint above the fold at every row (K2 P9: "exactly two"); Inter Tight 500 (openers, 12 to 13px) swaps in. Both TTFs are self-hosted under `/assets/`.

## Departures (DD-19 and the contract)

| Departure | Reason |
|---|---|
| Compact door rule triggered by `(max-height: 699px), (max-width: 374px)`, not by height alone | Measured: at 360px wide (V1, 740 tall) the h1 is seven lines and each door line five, so the letter form ends at 742, 26px past V1's limit; the width condition puts V1 in the compact form (510 of 716). V5 to V8 keep the letter form and fit (26 to 150px slack) |
| h1 five lines at V14 to V17, four at V11 to V13 (contract: four at V14 and V16) | The letter's column is 666 to 677px, the contract's h1 column 779 to 907px. Budget absorbed by the run-in opener and tight gaps; V14 slack 36px |
| Run-in opener on the paragraph's first line (label · name), with the name at `--text-xs` as the brief sets | The brief's typography row is binding; the V14 budget needs the shared line. Risk raised for the critics: the school name is 12 to 13px on the first screen; the CTA label ("Explore the Georgetown campus", "Explore GT Anywhere") and the label word carry the ten-second choice |
| No supporting icon on the doors (DD-04 names one) | A letter has no icons; the cue is the label word plus the school name in the CTA. If the director wants the redundant cue, `gt-icon.svg` at 1em before the label costs nothing in the fold budget |
| Comparison rendered as stacked definition rows at every width; no two-column state | R6 puts the breakpoint where cells clear the 45-character floor; K2 section 5b models that near 1150px of table width. The letter's column is 631 to 677px, so a two-column table would run 27 to 34 characters a cell at every row from 768, failing the brief's own 45 to 75 acceptance. From 768 the attribute sits in a 10rem margin column and the two labelled cells stack beside it at 49 to 53 characters a line |
| A no-break space between "from" and "anywhere." in the h1 markup | The sentence is seven lines below 414px, past Chromium's balance limit (K2 F-22), and measured `text-wrap: pretty` left "anywhere." alone at V2. The words are unchanged; one space character is non-breaking. Stated here because the h1 is a fixed slot |
| Header hairline drawn with `box-shadow: 0 1px 0 var(--color-border)` | Keeps the header at exactly 56px for the fold sums; a border would add 1px |
| Buttons in sentence case, `--radius-md` | The live estate's buttons are uppercase Inconsolata (K12 F41); a letter's closing actions read better in sentence case. Radius matches F41's .5rem. Continuity cost noted for the L2 critic |
| Apply links as filled navy buttons; door CTAs bordered | The brief sets bordered text buttons for the doors; the contract's primary CTA (navy fill, on-navy text) is kept for the two application links so the conversion point is the page's one filled element |
| The accent rule at 2.38:1 against `--color-bg` | The brief asks for a short `--color-accent` rule; K3 section 5f allows it only as decoration with no meaning, so it is `aria-hidden` and carries none. The one accent event on the first screen |
| New tints `--color-border-strong` and `--color-text-muted-on-dark` (DD-39 proposed) | Resting underline colours only; text colours stay in layer 1 |
| Values outside the token set | Breakpoints 374, 699, 768, 800 and 900px; 1px hairlines; the 2px focus ring and 2px accent rule; 44px targets and 3.5rem rows; the 10rem margin column; `35ch`, `48ch`, `56ch` measures; letter-spacing 0.06 and 0.08em; inline margins 0.4em and 0.5em; underline offset 0.16em; `fit-content` |
| `display: contents` on the door list items in the compact form, with explicit `role="list"`/`role="listitem"` | The only CSS-only way to move both door lines after the second CTA while the DOM keeps opener, line, CTA per door; the roles guard list semantics where `display: contents` drops them |
| Duplicated wayfinding words hidden from assistive technology: the door name at the head of each moved paragraph (`.door-line-name`, `aria-hidden`), the school name in each table cell (`.cell-school`, `aria-hidden`) | Both are the contract's own devices (a fixed slot reused as the run-in label; DD-06's stacked cells labelled by school). Screen readers already hear the name in the opener and the column header |
| ARIA table roles on a real `<table>` | The table is displayed as blocks and grids; the roles keep row and column semantics where browsers drop them |
| `overflow-wrap: break-word` on `body`; `minmax(0, 1fr)` grid tracks | The runner's doubled-root check at V2 found "Georgetown,", "conversation." and "community.gt.school." spilling past a 279px column at a 32px root; these stop the horizontal scroll (1.4.10) and change nothing at normal sizes |
| V10 750 by 342 fails the fold rule | Arithmetic above; no arrangement fits 318px |

## Taste decisions the brief did not name

| Decision | Choice |
|---|---|
| Separator between label and name in the opener | A middle dot, `aria-hidden`, 0.4em either side |
| Provenance face | Inter Tight 400 (K2 section 5b's role table), muted, one line at every row; the serif is reserved for the letter's sentences |
| Accent rule geometry | 48px (`--space-7`) by 2px, left-aligned with the text, 16px above and 8px below (16 below in tall rooms) |
| Header | Full-width bar at `--container-max`, logo 24px high, utility links `--text-xs` on phones and `--text-sm` from 768, wrapping onto a second row only under 340px or at large text |
| Postscript | Literata italic, `--text-base`, the whole sentence as the link, 44px target |
| Section rhythm | A hairline on the column, a tracked eyebrow (Inter Tight 500 `--text-xs` 0.08em, not Inconsolata: the contract role), an h2 at `--text-xl`, 64 to 80px between sections |
| Table caption | Inter Tight italic `--text-sm`, muted |
| Steps numbering | CSS counters in Inconsolata 600 `tabular-nums`, muted; not text on the page |
| Secondary CTAs | A hairlined list of four links in Inter Tight 500 with a trailing arrow in the same face; arrows removed from the buttons (Inconsolata's arrow glyph is heavy and the flex box swallowed its space) |
| Footer link "Current families" | Carries `data-event="families_click"` like the header route |
| Tall-room spacing | From 768 wide and 800 tall the letter gains air: 48px top padding, 24px between doors, 16px before each CTA (V11, V12, V16, V17) |
| `text-wrap` | `balance` on the h1 and h2s, `pretty` on prose below the letter; none on the door lines so the fold sums stay faithful |
| Sources line | Capped at `56ch` (about 71 characters a line in its own size) so the footnote respects the measure rule |

## Flagged slots

| Slot | Flag | Default shown |
|---|---|---|
| Holly's unifying element beside the lockup | Q-001 | Not shown; the real GT School mark only |
| "Current families" destination | Q-002 | community.gt.school |
| Application steps, same for both schools | Q-007 | The four steps of `copy.md` section 5 |
| Georgetown tuition | Q-011 (decided) | "Tuition on request. Ask admissions." |
| After 8th grade | Q-013 | "Families plan the path after 8th grade with admissions." |
| Intensive weekend logistics | Q-017 | "Four intensive weekends a year in Georgetown." |
| Outcome figure | Q-019 | Withheld; the page is silent |
| TEFA window, owner, expiry | Q-021 | Module visible to everyone (D-015 option c) |
| Accreditation statement | Q-033 | Withheld; no mark, no claim |
| Guides title | Q-035 (decided) | "Guides" |
| Admissions meeting link | MD-02 | www.gt.school/contact for all four secondary CTAs |
| Tour booking route | REQ-002, R14 | "Ask about a tour of the Georgetown campus" |
| `school=` parameter | DD-25 | Convention; live parameter confirmed in S5 |
| Claims rows | CR-011, CR-021, CR-032 to CR-035 | All "Unverified, public"; CR-022's $10,474 not shown |

## Parent questions (`0_plan/05` section 6c)

| PQ | Answered on the page | Where, or why deferred |
|---|---|---|
| PQ-01 What is GT School? | Yes | The h1 |
| PQ-02 Is it for my child? | Yes | Door lines; Admissions row; proof fact 1; steps line |
| PQ-03 In person or online? | Yes | The two doors, first screen |
| PQ-04 Where is the campus? | Yes | h1 and door 1; "Where and how" row |
| PQ-05 What does a day look like? | Yes | Door lines; "The day" row |
| PQ-06 Cost, and TEFA? | Partly | "Tuition and access" row; TEFA module; Georgetown's figure deferred to admissions (Q-011) |
| PQ-07 How do I apply? | Yes | "How to apply", two application links |
| PQ-08 Who teaches my child? | Yes | "Guides" row; proof fact 3 |
| PQ-09 In-person time for GT Anywhere? | Yes | Door 2 line; "In-person time" row |
| PQ-10 Results and accreditation? | Deferred by decision | G0.5 items 2 and 3; the page is silent and the secondary CTAs point to admissions |
| PQ-11 After 8th grade? | Deferred to admissions | "After 8th grade" row (Q-013) |
| PQ-12 Current family, where do I go? | Yes | Header link; "Already a GT family?"; footer |
| PQ-13 Not ready to apply? | Yes | "Questions before you apply" |
| PQ-14 Part of Alpha School? | Yes | The provenance line, once, small |

## Self-check

Rule greps from `BUILDER-BRIEF.md`: `<form` 0, `<input` 0, `<script` 1 (JSON-LD only); hosts in `index.html` and `styles.css`: anywhere.gt.school, apply.gt.school, community.gt.school, gt.school, www.gt.school, schema.org; numbers in visible text: $10,400, 90th, 9, 8th, (512) 270-9481, 2026-09-10; "advis" in text: no; "Georgetown Campus" 17 times, "GT Anywhere" 23 times; provenance line once; raw hex in `styles.css`: 0; `transition` occurrences in `styles.css`: 1 (the reduced-motion `none`); page 32 KB.

390 by 844 (V9, emptiness row): header 56, h1 294, provenance 331, CTA Georgetown 517, CTA Anywhere 693; the two door lines and the postscript follow and the compare hairline is cut by the fold; page height 6507px.

Checker and runner output follow.

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M08-the-letter --all`

```
## M08-the-letter: 36 pass, 0 fail
  PASS R1 no forms
  PASS R2 one JSON-LD script only — 1 script tags
  PASS R20 D-039 declaration valid and named in the rationale
  PASS R3 external hosts
  PASS R3b local assets only
  PASS R4 no placeholder text
  PASS R5 numbers on the whitelist
  PASS R6 no "advisor" in text
  PASS R7 full names — Georgetown Campus x17, GT Anywhere x23
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
  PASS R14 size under 1 MB — 28 KB
  PASS R15 rationale sections

check-mocks: OK
```

### `python3 1_spec/tools/check-claims.py 0_plan/mockups/M08-the-letter/index.html`

```
## 0_plan/mockups/M08-the-letter/index.html
| Figure on the page | Register row | Occurrences | Status |
|---|---|---|---|
| "designed for students in the 90th+ percentile" | CR-011 | 4 | Unverified, public |
| "$10,400/year — GT Anywhere annual tuition, fully or partially covered | CR-021 | 1 | Unverified, public |
| Four in-person intensive weekends a year in Georgetown (four named 202 | CR-032 | 3 | Unverified, public |
| Georgetown mornings: "two 50-minute blocks and one 25-minute block wit | CR-033 | 2 | Unverified, public |
| GT Anywhere mornings: "two to three hours of 100% cognitive load" (aca | CR-034 | 1 | Unverified, public |
| Guides hold weekly one-to-one check-ins with each student ("Academic A | CR-035 | 2 | Unverified, public |
  NOTE unverified rows on the page (allowed in mocks, blocked for production): ['CR-011', 'CR-021', 'CR-032', 'CR-033', 'CR-034', 'CR-035']

check-claims: OK
```

### `node 0_plan/tools/shots.mjs 0_plan/mockups/M08-the-letter --all` (`qa/fold.md`, verbatim)

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`; 2026-09-11T08:39:59.390Z; page `/0_plan/mockups/M08-the-letter/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 56 | 289 | 326 | 419 | 510 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 291 | 328 | 421 | 512 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 331 | 424 | 515 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 331 | 424 | 515 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 302 | 488 | 665 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 302 | 488 | 665 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 263 | 300 | 393 | 485 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 304 | 491 | 667 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 331 | 517 | 693 | yes | report: page height 6507 |
| V10 | 750 by 342 | fold | 318 | 56 | 228 | 265 | 359 | 450 | yes | FAIL over: cta-georgetown, cta-anywhere |
| V11 | 768 by 1024 | fold | 1000 | 56 | 261 | 299 | 477 | 617 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 267 | 304 | 483 | 624 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 296 | 460 | 586 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 328 | 367 | 533 | 660 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 337 | 375 | 470 | 562 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 368 | 407 | 591 | 735 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 368 | 407 | 591 | 735 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 92 | 356 | 414 | 508 | 599 | yes | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 296 | 390 | 481 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Console

PASS: no console errors.

## Result: 1 failure(s)

The one failure is V10 (arithmetic under Departures). Screenshots for every row are in `qa/`.

### Line length, measured in the browser (characters per rendered line, last line of each element excluded)

Method: one DOM range per word, grouped by line top, at 768 by 1024, 1024 by 768, 1280 by 720 and 1440 by 900; the figures are identical at 1280 and 1440 because the column is 65ch of a fluid size.

| Element | 768 | 1024 | 1280 and 1440 | Within 45 to 75 |
|---|---|---|---|---|
| Door 1 paragraph (run-in opener 29 characters at `--text-xs` plus Literata `--text-md`) | line 1: 29 + 35, line 2: 65, last line 13 | same | same | Yes |
| Door 2 paragraph (opener 20 characters) | line 1: 20 + 48, last line 59 | same | same | Yes |
| Comparison cells, school labels excluded (18 cells) | mean 47.5, max 56 | mean 48.0, max 58 | mean 48.6, max 58 | Yes |
| Proof facts | mean 56, max 69 | same | same | Yes |
| Leads (steps line, families line) | 59 and 60 | same | same | Yes |
| TEFA body | 66 | same | same | Yes |
| Sources line (two instances, 10 lines) | mean 64, max 73 | same | same | Yes |
| Postscript | 57, one line | same | same | Yes |
| Footer facts block | mean 50.5, max 69 | mean 46.8, max 61 | mean 50.5, max 69 | Yes |
| h1 (display type; the contract caps it at 35ch, the measure rule is for prose) | 4 lines, mean 32.7, max 35 | 4 lines | 5 lines, mean 26, max 30 | Display, not prose |

h1 line counts measured at the four fold rows: V2 7, V5 6, V14 5, V16 5 (and V1 7).
