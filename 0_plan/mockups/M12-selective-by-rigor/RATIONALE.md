# M12 Selective by Rigor, rationale

| Field | Value |
|---|---|
| Mock | M12 "Selective by Rigor" (new direction), brief `0_plan/kb/briefs/M12.md` under `CONTRACT.md` v2.1 |
| Lens order | L4 exclusivity, L1 objective, L3 mission, L2 continuity |
| Built | 2026-09-11 by a Fable design-engineer fork, no browser tool; the runner `0_plan/tools/shots.mjs` measured three passes and the screenshots it wrote under `qa/` were reviewed between passes (Self-check) |
| Files | `index.html`, `styles.css` (links `../shared/tokens-v2.css`, `../shared/fonts.css`), this file; logos from `../shared/img/` |
| State | Default state: no photograph, no JavaScript. D-039 (scripts and inputs in mocks) is escalated and undecided, so the brief's considered V6 reveals are absent and the page is complete at rest |
| Claims on the page | 90th percentile (CR-011), $10,400 (CR-021), four in-person or intensive weekends (CR-032), 9 to noon and two hours (CR-033), two to three hours (CR-034), weekly check-ins (CR-035). Every row is "Unverified, public" in `0_plan/12-claims-register.md`: allowed on a mock, blocked for production. The statement block adds no claim beyond the deck (REQ-022) |

## Direction

The admission bar is the argument. M03 states prestige through restraint (big Literata, quiet plates, whitespace);
M12 states selectivity through a fact and its source, the way Exeter's pledge band states its policy without a
rate or a wealth cue, Crimson states what its cohort does, and Vanguard sets a sourced figure in headline numerals
over a disclosures block. Selectivity is the bar to get in, never price (MD-25, DD-10, C06): the only figure on
the first screen is "90th", in the deck's own admissions sentence, with its source under it.

The first screen is one navy surface. Header (56px, the GT School mark on a light plate), the umbrella sentence
across nine of twelve columns, the provenance line once, then the statement block: "90th" in Inconsolata 600 at
`--text-3xl` with a 3px accent underline (the screen's one accent use), the deck's admissions cell beside it at
`--text-md` and 1.5, and "admission bar, anywhere.gt.school/academics" in `--text-xs` muted-on-dark. Under the
block, the two doors as compact cards outlined in `--color-on-navy`: label with a line glyph, name, and the CTA as
the card's light base. Each door's line follows: under its own card at 768px and above, and on phones as two
run-in paragraphs after the second CTA (CONTRACT.md section 2), so neither line sits between the CTAs. On
viewports under 700px tall (the brief), and on phone widths under 760px tall (the V5 arithmetic in Departures),
the statement block follows the doors and their lines so both CTAs stay above the fold. The second screen is
light: the compare anchor opens it, then the table with repeated values, the proof strip, the steps, the connect
list and the families bar; the footer is navy again with both marks on their panels.

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented children, in
person at our Georgetown, Texas campus or online from anywhere." It is the one sentence that both decodes "GT"
and names the two ways to attend; "selective" in it is the word the statement block then substantiates. Literata
at `--h1-weight` 400 (a local variable so DD-38's 300-against-400 test is one edit), `--text-3xl` (27.27px at V2 to
46px at V16), `--leading-tight` 1.15, `max-width: 35ch`, `text-wrap: balance` against an orphaned last word.
The door names are h2 (equal weight, DD-14), then one h2 per section: "Compare the two schools", "What is true of
both schools", "How to apply", "Questions before you apply", "Already a GT family?"; "Texas families" is an h3
inside the comparison section. Line counts measured by the runner (h1 bottom minus the header bottom and the top padding, divided by the line
height): V1 to V4 7 lines (217 to 222px; the contract's 23-characters-a-line estimate gave 6, the real wrap at 360
to 393px is 22 characters a line), V5 to V8 6 lines (191 to 195px), V11 5 lines (196px), V12 to V17 4 lines (163 to
212px), V18 8 lines at 320px. The estimates before the run were V2 6, V5 6, V14 4, V16 4; V14 and V16 held, V2 did
not, and the measured bottoms are in the fold table.

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id and name, lens order | M12, folder `M12-selective-by-rigor`; L4, L1, L3, L2 as above | Met |
| Thesis | The bar as the headline argument: the h1 says "selective", the block gives the bar and its source, the compare table's Admissions row repeats it for both schools, the proof strip and the steps line restate it in the deck's words. No price or wealth cue anywhere; tuition appears only where the deck places it (table row, TEFA module) | Met |
| Exemplars | Exeter's framing (a policy stated without a rate) is the block's tone; Crimson's cohort framing is the block's sentence (what students are, what they do to begin); Vanguard's proof band is the figure-plus-source form. Caltech's unsourced numerals avoided: the figure carries its source line and nothing counts up | Met |
| Composition | Navy first screen; header 56 with the GT School mark on a light plate as M03; h1 `grid-column: 1 / span 9` of a 12-column grid with 32px gutters at 768 and above; provenance; statement block (figure, sentence, source); doors as two compact cards on navy under the block; under 700px tall (and phones under 760px tall) the block follows the doors. Light second screen: compare anchor, table, proof, steps; footer navy | Met, with the 760px phone extension named in Departures |
| Fold estimates | Designed to the four-row table below (V2 560, V5 565, V14 590, V16 631); measured by the runner: V2 590 of 605, V5 564 of 691, V14 590 of 696, V16 631 of 876 | Met, measured |
| Typography | Contract roles: h1 Literata 400 `--text-3xl`; door names Literata `--text-xl`; door lines, table cells, facts and statement at `--leading-prose` 1.5; labels Inter Tight 500 uppercase 0.08em; buttons Inconsolata 600 `--text-btn`; the figure Inconsolata 600 `--text-3xl` `tabular-nums`; the statement `--text-md` Inter Tight at 1.5; the source `--text-xs` in `--color-text-muted-on-dark`. `--h1-weight` exposes the DD-38 test | Met |
| Color and surface | `--color-navy` first screen with `--color-on-navy` text; one accent use, the figure's 3px `--color-accent` underline (5.83 on navy as a shape); door cards outlined in `--color-on-navy`; door CTAs `--color-on-navy` fill with `--color-text` text (14.58); light sections per the contract (`--color-text` on `--color-bg`, `--color-surface`, `--color-anywhere-tint`); focus `--color-focus-on-dark` on navy, the two-colour ring on both logo plates, `--color-focus` on light surfaces and inset on the light CTA face | Met |
| Imagery | Default state: none. Photographed state designed, not shipped: `georgetown-presenting.webp` at 3:2 after the steps, `object-position: 50% 45%`, at most 720 CSS px, caption "Students gather for a class presentation." (Assets) | Met (default state) |
| Motion | Nothing animates. V1 and V3 instant (no transitions at all); V10 native anchor scroll inside `prefers-reduced-motion: no-preference`; V6 on the steps and secondary CTAs considered and absent (D-039 undecided); nothing counts up; reduced motion zeroes every duration with `--duration-none` | Met |
| Copy | Sections 0 to 8 verbatim; the statement block carries the deck's admissions cell and the sources line's admission source, nothing else; tuition, schedules, weekends, grades and the phone number appear where the deck places them, unchanged; the tour label per R14; "Questions before you apply" is an allowed section 6 heading; no section 9 word is used | Met |
| Conversion | Doors on the first screen (under the block on tall viewports, above it on the short phone rows); compare anchor opens the second screen; table with repeated values (DD-43); proof; steps with two application links; four secondary CTAs; families bar; footer application links with `school=` | Met |
| Acceptance | `check-mocks.py` 36 of 36 rules, `check-claims.py` clean, the runner: 17 of 18 fold rows pass, V10 fails structurally (below), V18 reflows without horizontal scroll, reduced motion, doubled root font and console pass (Self-check); every on-navy pairing at or above 4.5 (on-navy 14.58, muted-on-dark 7.81, accent as a shape 5.83; `--color-text` on the light CTA face 17.69); focus visible on navy (14.58); DD-38, DD-39, MN-16 and D-039 named here. Critic scores pending | Met except V10; critics pending |

## Fold estimates and measured bottoms (the four rows the brief names)

Method for the estimates: CONTRACT.md section 2 h1 heights (188, 193, 199, 212) rather than the brief's 155 and
159, which do not follow from the clamp and the leading; space tokens for every gap; card heights from the CSS
(phone card: border 1 + head padding 8 + label row 20 + gap 4 + name 25 + padding 8 + CTA 44 + border 1 = 111;
laptop card: 1 + 16 + 20 + 4 + name 31 + 8 + 44 + 1 = 125); the statement block from the sentence's wrapped lines
plus the source line. Measured: the runner's third pass (`qa/fold.md`), bottom of the second CTA.

| Row | Viewport, limit | Layout | Estimate | Measured | Result |
|---|---|---|---|---|---|
| V2 | 375 by 629, 605 | Block below (short) | header 56 + pad 16 + h1 188 + 16 + provenance 22 + 24 + card 111 + 16 + card 111 = 560 | **590** (the h1 is 219px, seven lines, not six) | Pass, 15 to spare (brief 525, which assumed h1 155) |
| V5 | 414 by 715, 691 | Block below (phone extension) | 56 + 16 + 193 + 16 + 22 + 24 + 111 + 16 + 111 = 565 | **564** | Pass, 127 to spare (brief 615). With the block above the doors the sum would be 564 + 135 + 24 = 723, over by 32, hence the extension |
| V14 | 1280 by 720, 696 | Block above, doors side by side | 56 + 24 + 199 + 16 + 22 + 24 + block 100 + 24 + card 125 = 590 | **590** | Pass, 106 to spare (brief 633). The door lines end at 661, the navy screen at 685, the light band shows 35px before the fold (`qa/V14.jpg`) |
| V16 | 1440 by 900, 876 | Block above, doors side by side | 56 + 32 + 212 + 16 + 22 + 32 + block 104 + 32 + card 125 = 631 | **631** | Pass, 245 to spare (brief 697). Lines end at 701, navy at 749; the light band and the compare anchor show below (`qa/V16.jpg`) |

Other rows, measured (second CTA bottom against the limit): V1 588 of 716; V3 593 of 640; V4 593 of 635; V6 725
of 815 (block above); V7 563 of 657; V8 566 of 715; V9 753 of 844 (emptiness row: page height 6682, the navy
screen overruns the viewport with the door lines cut); V11 602 of 1000; V12 541 of 1170; V13 562 of 744; V15 473
of 624 (block below); V17 631 of 936; V18 682 (reflow row: no horizontal scroll at 320, the header wraps to two
rows); V19 442 of 552 (zoom row, reported: scroll width 1024, nothing clipped). **V10 (750 by 342, limit 318)
fails for M12 and would fail for any direction**: header 56 + h1 at 33.9px in four lines 156 + provenance 22 +
one CTA 44 is 278 before any gap, and the two cards add 111 each; measured 402 and 532. Reported to the director,
not met (Departures).

## Decisions applied

| Id | How it is applied |
|---|---|
| DD-01, DD-19 | The three site faces and the layer-1 swatches only; layer-2 roles named below; departures listed |
| DD-04 | Cue set per door: label ("In person", "Online") plus a `currentColor` line glyph (a door; a screen), the name, the CTA. No photograph in the default state |
| DD-06, REQ-013 | Table rows in the deck's order: shared rows first (Same school, Admissions, After 8th grade), then the rows that differ |
| DD-07, G0.5 items 2 and 3 | No outcome figure, no accreditation statement, no Cognia mark; the proof strip carries four register-backed facts |
| DD-08, DD-31, DD-42, RF-25, AD-11 | No photograph (every file shows identifiable children; permission-gated). The photographed state is designed in Assets and waits for Nari's written permission |
| DD-10, MD-25, C06 | Selectivity is the bar: stated once large (the block), repeated in the deck's own cells. Access is stated where the deck states it (TEFA module, tuition row). No wealth cue, no countdown |
| DD-12, DD-13 | Header: lockup, "Current families", "Contact admissions", no menu, no phone number; the number is in the footer only |
| DD-14, MD-23 | Designed at 375 first; doors stacked Georgetown then Anywhere; no sticky CTA; the phone layout is the DOM order |
| DD-21 | Doors are a `<ul>` of cards and the lines a `<ul>` of paragraphs; both grids take three to five entries by adding items (the columns come from `repeat(2, …)`, changed in one place) |
| DD-25, REQ-070 | Every application link carries `?school=`; links go only to gt.school, anywhere.gt.school, apply.gt.school, community.gt.school and `#compare` |
| DD-29 | Every screen carries a fact: the block on the first, the table on the second, the facts and the steps below, the facts block in the footer |
| DD-38 (b), R5, RF-55, RF-58 | Fluid clamps `--text-xs` to `--text-3xl` and `--text-btn`; `--leading-prose` 1.5 on every multi-line string; `--measure-prose` 65ch on prose blocks; `--leading-body` 1.25 on single-line labels and buttons; `--h1-weight` for the 300-against-400 test |
| DD-39 (a), RF-07, K3 sections 5c to 5f | `--color-on-navy` text and CTA fill on navy; `--color-text-muted-on-dark` for the provenance, door labels, door lines, the source line and the footer facts; `--color-focus-on-dark` on navy; `--color-accent-text` for the step numerals; the accent as a shape once on the first screen; two-colour ring on the plates |
| DD-43 | The three shared rows repeat their value in both columns; on phones each cell is labelled with its school name |
| DD-44, K10 | No `vh` or `svh` anywhere; the first screen is content-sized so the next band is visibly cut; height queries at 699 and 759 |
| MD-02, R14, REQ-044 | Secondary CTAs: FAQ first, then "Talk to admissions", "Ask about a tour of the Georgetown campus", "Ask about a virtual info session", all to the destinations the deck lists |
| MD-17, G0.5 item 6 | The provenance line once, one line, `--text-sm`, under the h1; not repeated in the footer |
| MN-16 (a), RF-53, R8 | No motion; the reduced-motion block sets every duration to `--duration-none` on elements and pseudo-elements; every state is visible at rest |
| D-039 | No script beyond the JSON-LD block, no input, no `data-d039` declaration; V6 reveals absent; the page is complete at rest |
| REQ-022, DEL-018 | Only figures with register rows, in the deck's words; `check-claims.py` clean; statuses recorded here, not on the page |
| SE-13 | `noindex, nofollow`; canonical `https://gt.school/` |
| K3 section 5d | Focus rings per surface: `--color-focus` at 2px offset on light surfaces; `--color-focus-on-dark` on navy; the two-colour ring (2px `--color-on-navy` band, 2px `--color-navy` band) on the header and footer logo plates; `--color-focus` inset 4px on the light CTA face; `forced-colors` fallback to `CanvasText` |

## Layer-2 tokens used (proposed; each named with its row per `TOKENS-V2.md`)

| Token | Where | Row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | Every type size on the page | DD-38 (b), R5 |
| `--leading-prose` 1.5, `--measure-prose` 65ch | Door lines, statement sentence, table cells, facts, steps, sources, footer facts, connect list and prose measures | DD-38 (b), RF-55, RF-58 |
| `--color-on-navy` | Text on navy; the door CTA fill; the button text on navy fills; the inner band of the two-colour ring; the card outline | DD-39 (a), RF-07 |
| `--color-focus-on-dark` | Focus ring on navy surfaces | DD-39 (a), RF-07 |
| `--color-text-muted-on-dark` (#a3bfcb, a new tint) | Provenance, door labels, door lines, the source line, footer facts | DD-39 (a), RF-07; DD-19 departure |
| `--color-accent-text` (#a5501a, a new tint) | Step numerals (CSS counters) | DD-39 (a), RF-07; DD-19 departure |
| `--duration-none` | The reduced-motion block | MN-16 (a), RF-53, R8 |
| Not used | `--color-on-accent`, `--color-border-strong`, `--ease-standard`, `--ease-out`, `--ease-in` (no accent fill, no load-bearing border, no motion) | |

## Motion spec

| Move | Element | Trigger | Duration | Easing | Reduced motion |
|---|---|---|---|---|---|
| None | Nothing on the page transitions or animates; `styles.css` declares no `transition` and no `@keyframes` | | | | |
| V1 door state, V3 focus | Door CTAs, links, buttons: underline on hover; focus rings per surface | hover, focus-visible | 0 ms (instant) | none | Same, visible at rest (R8) |
| V10 anchor scroll | `#compare` link | click | Native `scroll-behavior: smooth` inside `prefers-reduced-motion: no-preference` only | browser | `scroll-behavior: auto` |
| V6 one-time reveal | Considered on the steps and the secondary CTAs | | | | Absent: needs the D-039 script; the page is complete without it |
| Reduced motion | `*, *::before, *::after` | `prefers-reduced-motion: reduce` | `transition-duration` and `animation-duration: var(--duration-none)` | | Every computed duration 0 |

## Assets

| Asset | Where | Alt text | Consent and status | Fallback |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` (139 by 32) | Header lockup on a `--color-bg` plate; footer on a `--color-bg` plate, linked to https://www.gt.school/ | "GT School" | GT's own mark, unchanged, on a light panel (copy.md section 8, checker R16) | none needed |
| `../shared/img/gt-anywhere-logo-h.svg` (252 by 48) | Footer, directly on `--color-navy`, linked to https://anywhere.gt.school/ | "GT Anywhere" | GT's own mark, white lettering on the navy panel (R16) | none needed |
| Two inline SVG line glyphs (a door, a screen), `aria-hidden`, `currentColor`, 20px | Door labels | decorative | Drawn for this mock; not brand marks, not recoloured marks | none needed |
| Photographs | None in the default state | | Every file in `ASSETS.md` shows identifiable children; AD-11 and RF-25 gate them until Nari's written permission names website and advertising use | The default state is the fallback (DD-31) |
| Photographed state (designed, not shipped) | One `<figure>` after the steps: `georgetown-presenting.webp` (1440 by 960) at 3:2, `object-position: 50% 45%`, `max-width: 720px` (CONTRACT.md section 5, DPR 2), `loading="lazy"`, caption "Students gather for a class presentation." | "students gather for a class presentation" (ASSETS.md) | "published by GT on its own site, consent to be confirmed by Nari (AD-11)" | If rejected, the section stays as built |

## Departures

| Departure | Reason |
|---|---|
| Navy (`--color-navy`) as the first-screen and footer surface | The brief's composition; the sites use the swatch as `--color-surface-alt`, so this is a surface extension, flagged as M03 flagged it (DD-19) |
| `--color-text-muted-on-dark` #a3bfcb and `--color-accent-text` #a5501a | New tints proposed in DD-39 (a) and RF-07 (K3 section 5e PR-4 and PR-1); DD-19 departures until the row is Agreed |
| The statement block follows the doors on phone widths under 760px tall, not only under 700px | The brief's 700 rule leaves V5 (414 by 715) with the block above the doors at an estimated 724 of 691. The brief's own V5 figure (615) cannot be reproduced with a block of the described form. The fold rule is the acceptance criterion, so the threshold moves to 760 on phone widths; V6 (839) and V9 (844) keep the block above. One media query, `(max-width: 767px) and (max-height: 759px)`, beside the brief's `(max-height: 699px)` |
| At 768px and above the door line sits under its card as a caption, after the CTA, not between the name and the CTA | One copy of each line serves both layouts (phones need the lines after the second CTA per CONTRACT.md section 2; duplicating the sentences in the HTML for two layouts was the alternative). The card stays compact as the brief asks; the caption is aligned in the card's column, 16px below it |
| V10 (750 by 342) does not meet the fold rule | Arithmetic above: the required elements need about 278px before gaps at 750 wide; measured 402 and 532 against 318. The row is a limit of the fixed h1 at 342px tall, not of this direction. Escalated to the director |
| Contract h1 heights (188, 193, 199, 212) used instead of the brief's 155 and 159 | The brief's figures do not follow from the clamp and 1.15 leading (155 would be five lines of 31px at V2; the 132-character sentence needs six at 23 characters a line) |
| Values outside the token set | 1px hairlines; the 3px accent underline; 2px focus bands with offsets 2px, 0 and −4px and the 4px shadow band (K3 section 5d); the 44px target minimum and 3.5rem rows; letter-spacing 0.08em on labels; 0.35em after the run-in name; 0.04em under the figure; `35ch`, `30ch`, `48ch` measures; breakpoints 768, 900 and 1440; height queries 699 and 759; the local `--h1-weight`; `text-wrap: balance` |
| `role` attributes on the table elements | The stacked layout below 768 uses `display: block`, which strips table semantics in some browsers; the roles keep the real table real |
| Empty corner header cell | A visually hidden column header would need a word the deck does not have; an empty corner cell is standard and reads cleanly |
| Footer marks load eagerly (no `loading="lazy"`) | Rule 13's lazy loading targets photographs and the checker exempts SVG marks. In the second runner pass the GT Anywhere mark was absent from `qa/V14-full.jpg`: a lazy image 4,000px below a viewport the runner never scrolls is never fetched (the GT School mark beside it showed only because the header had already fetched the same file). Both marks are 8 to 10 KB SVGs |
| Header at phone widths: the mark 18px tall, the plate hanging 8px into the margin, the utility nav wrapping with a −4px right margin | At 360px the plate, "Current families" and "Contact admissions" measured about 325px against a 312px column and the header wrapped to two rows (first pass: header bottom 92 at V1). The plate's negative margin is M03's move and aligns the mark with the h1; 18px and the nav margin recover 21px, so the header holds 56px from 360 up (second and third passes). At 320 (V18) it wraps by design |
| `overflow-wrap: anywhere` on the navy buttons; `flex-wrap: wrap` on the utility nav | The runner's doubled-root test (32px root at 375) measured a 459px scroll width in the first pass: two `nowrap` utility links could not wrap, and "application:" in Inconsolata at 34px exceeded the button's content box. A word breaks inside only when it alone is wider than its line, so normal sizes are unchanged; third pass: pass |

## Taste decisions the brief did not name (raised here, not made silently)

| Decision | Choice and reason |
|---|---|
| Provenance line | Literata 400 italic, `--text-sm`, `--color-text-muted-on-dark` (7.81): an editorial dateline under the serif h1, present and legible, secondary (MD-17) |
| Colour of running text on navy | Door labels, door lines, the source and the footer facts in `--color-text-muted-on-dark` per K3 section 5c's preference for prose on dark (halation, F30); the h1, the door names and the statement sentence in `--color-on-navy` because the statement is the argument and two lines long. Hierarchy: name over line, figure over source |
| Door cue glyphs | `currentColor` line glyphs rather than `gt-icon.svg` or the school marks: both marks are orange, and the first screen spends its one accent on the figure's underline (K3 section 5f); a mark may not be recoloured (BUILDER-BRIEF rule 16). Alternative for the director: `gt-icon.svg` at 20px if the mark is ruled outside the accent count |
| The figure for readers | The display "90th" is `aria-hidden`; the sentence beside it carries the figure once for screen readers |
| Figure and sentence alignment | `align-items: baseline`: the numeral's baseline sits on the sentence's first baseline, as in a proof band |
| Card anatomy | The CTA is the card's light base bar, full width, inside the outline (label 16 + name + CTA 44 fits the compact budget); focus on it is `--color-focus` inset 4px, because a ring outside the bar would fall on the white outline and the navy ground at once |
| Hover | Underline only, no fill change (BUILDER-BRIEF rule 10) |
| Short layout hairline | When the block follows the doors it takes a 1px `--color-border` rule above and 24px of padding, so it reads as the screen's closing statement rather than a stray paragraph |
| DOM order | h1, provenance, doors, door lines, statement. Two thirds of sessions are mobile and most phone rows are under 760px tall, so the DOM order is the phone order; tall viewports reorder with `order`. The block holds no focusable element, so focus order is unaffected |
| The accent on the light screens | One use: the step numerals in `--color-accent-text` (5.14 on `--color-bg`, a label colour per K3 section 5e). Figures carry the accent on both surfaces; nothing else does |
| TEFA module | On `--color-anywhere-tint` (the layer-1 Anywhere tint), because it is an Anywhere fact; `--color-text` on it is 16.30 |
| Proof strip | On `--color-surface`; four facts in Literata `--text-lg` as a ruled two-column list at 768 and above |
| Section 6 heading | "Questions before you apply" (allowed heading): the not-yet-ready parent's question, not a generic "connect" |
| Footer links | The school-site text links carry `outbound_school_site` as the logo links do; the footer "Current families" carries `families_click` like the header's |
| Header at 360 | The mark 18px tall on phones (24px from 768), the plate hanging 8px into the margin so the mark aligns with the h1 (M03's move, applied at every width and to the footer plate), the utility nav's right margin −4px (−8px from 768) so the link text aligns with the column: plate and both links fit 312px and the header holds 56px (measured, passes two and three); at 320 the nav wraps under the plate by design |
| Doubled root font | `overflow-wrap: break-word` on `body`, `minmax(0, 1fr)` tracks on every grid, `flex-wrap: wrap` on the utility nav and `overflow-wrap: anywhere` on the navy buttons, so a 32px root at 375 (the runner's test) cannot force horizontal scroll (measured: pass; `qa/V2-rootx2.jpg`) |
| Open Graph | `og:title`, `og:description`, `og:type`; no `og:image` in the default state (copy.md Head) |
| Compare anchor | Its own light band before `#compare` so the link scrolls to the section heading, not to its own container |

## Flagged slots

| Slot | Default shown | Flag |
|---|---|---|
| "Current families" destination | https://community.gt.school | Q-002 confirm |
| Application steps, same for both schools | Four steps as the deck lists them | Q-007 |
| Georgetown tuition | "Tuition on request. Ask admissions." | Q-011 decided |
| After 8th grade | "Families plan the path after 8th grade with admissions." | Q-013 |
| Intensive weekends logistics | "Four intensive weekends a year in Georgetown." | Q-017; CR-032 |
| Outcome figure, accreditation | Withheld from the page | Q-019, Q-033 (G0.5 items 2 and 3) |
| TEFA window, owner, expiry | Module shown to everyone (D-015 option c) | Q-021 |
| Weekly check-ins | "a one-to-one check-in every week" | Q-035 decided; CR-035 |
| Cohort size | None stated | CR-025 and CR-026 conflict |
| Tuition figure | "$10,400 a year" | CR-021 and CR-022 conflict flagged in the register |
| 90th percentile | The statement block, the Admissions row, the proof fact, the steps line | CR-011 "Unverified, public"; owner Crystal |
| `?school=` parameter | `georgetown`, `anywhere` | DD-25 convention; live parameter confirmed in S5 |
| Secondary CTA labels and destinations | "Talk to admissions", the tour label per R14, "Ask about a virtual info session", all to https://www.gt.school/contact; FAQ to anywhere.gt.school/academics | MD-02: HubSpot meeting link, tour and info-session links do not exist yet |
| Repeated comparison cells | Value repeated in both columns; on phones each labelled with its school | DD-43 proposed |
| Holly's unifying brand element | Not shown | Q-001 |

## Parent questions (`0_plan/05` section 6c)

| Id | Question | Where the page answers it |
|---|---|---|
| PQ-01 | What is GT School? | The h1 |
| PQ-02 | Is it for my child? | The statement block, the Admissions row, the proof fact, the steps line (the 90th-percentile bar) |
| PQ-03 | In person or online: what are my options? | The two doors and their lines |
| PQ-04 | Where is the campus? | The h1, the Georgetown door line, the "Where and how" row |
| PQ-05 | What does a day look like? | "The day" row |
| PQ-06 | What does it cost, and can TEFA help? | "Tuition and access" row and the TEFA module |
| PQ-07 | How do I apply? | "How to apply": the block's second sentence previews it |
| PQ-08 | Who teaches my child? | "Guides" row; the third proof fact |
| PQ-09 | How much in-person time does GT Anywhere have? | "In-person time" row; the Anywhere door line |
| PQ-10 | What results does the school get, and is it accredited? | Deferred by decision: the page is silent (G0.5 items 2 and 3); admissions answers it |
| PQ-11 | What happens after 8th grade? | "After 8th grade" row, deferred to admissions (Q-013) |
| PQ-12 | I am a current family, where do I go? | Header link, "Already a GT family?" bar, footer link |
| PQ-13 | I am not ready to apply, what can I do? | "Questions before you apply" |
| PQ-14 | Is GT School part of Alpha School? | The provenance line |

## Self-check

Greps from the BUILDER-BRIEF rules (run 2026-09-11 from the mock folder):

| Check | Result |
|---|---|
| `grep -c "<form" index.html` | 0 |
| `grep -c "<script" index.html` | 1 (the JSON-LD block) |
| Hosts in `href` and `src` | anywhere.gt.school, apply.gt.school, community.gt.school, gt.school (canonical), www.gt.school, schema.org (JSON-LD context) |
| Digits in visible text | 09, 10, 10,400, 2026, 270, 512, 8, 9, 90, 9481 (the sources date, the phone number, 8th grade, 9 to noon, 90th, $10,400) |
| "advis" in visible text | none (`data-type="advisor"` is an attribute) |
| Full names | Georgetown Campus x8, GT Anywhere x14 |
| Raw hex in `styles.css` | 0 |
| `transition` declarations | none (the word appears only in a comment and in the reduced-motion `transition-duration`) |
| Logos | `gt-school-logo-h.svg` x2, `gt-anywhere-logo-h.svg` x1 |
| Size | 31 KB for `index.html` plus `styles.css` (the checker's count; `du -k` rounds to 36) |
| 390 by 844 first screen (V9) | Measured: header bottom 56, h1 294, provenance 331, then the statement block, CTA Georgetown 626, CTA Anywhere 753 of 844, the door lines cut at the fold; the header, the umbrella sentence, the provenance line and the statement are the only things above the CTAs (`qa/V9.jpg`) |

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M12-selective-by-rigor` (final run)

```
## M12-selective-by-rigor: 36 pass, 0 fail

check-mocks: OK
```

### `python3 1_spec/tools/check-claims.py 0_plan/mockups/M12-selective-by-rigor/index.html` (final run)

```
## 0_plan/mockups/M12-selective-by-rigor/index.html
| Figure on the page | Register row | Occurrences | Status |
|---|---|---|---|
| "designed for students in the 90th+ percentile" | CR-011 | 6 | Unverified, public |
| "$10,400/year — GT Anywhere annual tuition, fully or partially covered | CR-021 | 1 | Unverified, public |
| Four in-person intensive weekends a year in Georgetown (four named 202 | CR-032 | 3 | Unverified, public |
| Georgetown mornings: "two 50-minute blocks and one 25-minute block wit | CR-033 | 2 | Unverified, public |
| GT Anywhere mornings: "two to three hours of 100% cognitive load" (aca | CR-034 | 1 | Unverified, public |
| Guides hold weekly one-to-one check-ins with each student ("Academic A | CR-035 | 2 | Unverified, public |
  NOTE unverified rows on the page (allowed in mocks, blocked for production): ['CR-011', 'CR-021', 'CR-032', 'CR-033', 'CR-034', 'CR-035']

check-claims: OK
```

### `node 0_plan/tools/shots.mjs 0_plan/mockups/M12-selective-by-rigor --all` (third pass; writes `qa/fold.md`, `qa/V1.jpg` to `qa/V19.jpg`, `qa/V2-full.jpg`, `qa/V14-full.jpg`, `qa/V2-rootx2.jpg`)

```
| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 56 | 289 | 326 | 461 | 588 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 291 | 328 | 463 | 590 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 331 | 465 | 593 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 331 | 465 | 593 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 302 | 437 | 564 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 302 | 597 | 725 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 263 | 300 | 435 | 563 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 304 | 439 | 566 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 331 | 626 | 753 | yes | report: page height 6682 |
| V10 | 750 by 342 | fold | 318 | 56 | 228 | 265 | 402 | 532 | yes | FAIL over: cta-georgetown, cta-anywhere |
| V11 | 768 by 1024 | fold | 1000 | 56 | 276 | 314 | 602 | 602 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 243 | 280 | 541 | 541 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 296 | 562 | 562 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 317 | 590 | 590 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 286 | 324 | 473 | 473 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 300 | 338 | 631 | 631 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 338 | 631 | 631 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 92 | 356 | 414 | 555 | 682 | yes | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 296 | 442 | 442 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Console

PASS: no console errors.

## Result: 1 failure(s)
```

The one failure is V10 (750 by 342): both CTAs end below the 318px limit (402 and 532), as the arithmetic in the
fold section predicts for any direction that keeps the fixed h1. Exit code 1 comes from that row alone.

### Runner passes

| Pass | Found | Changed |
|---|---|---|
| 1 | V10 fail (structural). Doubled root font FAIL: scroll width 459 at 375. V1 header bottom 92: the utility nav wrapped under the plate at 360. Every other row pass; reduced motion and console pass | Utility nav wraps (`flex-wrap`) with a −4px right margin; the mark 18px tall on phones; the plate hangs 8px into the margin (header and footer); `overflow-wrap: anywhere` on the navy buttons |
| 2 | Only V10 fails; header 56 at every row from 360; doubled root font pass. Reviewing `qa/V14-full.jpg` showed the footer without its GT Anywhere mark (a lazy SVG below a viewport the runner never scrolls) | Both footer marks load eagerly |
| 3 | Measurements identical to pass 2; both footer marks present in crops of `qa/V14-full.jpg` and `qa/V2-full.jpg` | none |

### Screenshots reviewed (the runner's files, not a browser tool)

`qa/V1.jpg`, `V2.jpg`, `V5.jpg`, `V9.jpg`, `V10.jpg`, `V13.jpg`, `V14.jpg`, `V16.jpg`, `V18.jpg`, `V2-rootx2.jpg`,
`V2-full.jpg`, `V14-full.jpg`, plus footer crops of the last two. The first screen composes as designed at every
reviewed row: V2 shows the header, seven h1 lines, the provenance, both cards and the first run-in line cut at the
fold; V9 shows the statement block above the cards; V14 and V16 show the door lines, then the light band and (V16)
the compare anchor; V13 the same at tablet-landscape widths; V18 wraps the header to two rows with nothing
clipped; V2-rootx2 stacks the two utility links under the plate with no horizontal scroll. Not yet done: the
critics' scoring, 200 percent zoom at V14 beyond the runner's V19 stand-in, in-app browsers (REQ-024), a scroll
video.

### Open for the director

| Item | Detail |
|---|---|
| V10 | Fails for every direction at 342px tall (arithmetic and measurement above). A landscape-phone rule (a smaller h1 under a height query, or a deferred h1) would be a contract change, not a mock decision |
| V2 margin | The Anywhere CTA ends at 590 of 605: 15px, because the h1 wraps to seven lines at 375 to 393px, one more than the contract estimated. The card is at the compact budget (111px). Recovering margin means the phone top padding 16 to 8 or the door gap 16 to 8, both at a cost to rhythm; left as built |
| Composition at 1280 and above | The h1 and the block occupy the left nine columns; the right three are navy above the full-width cards, as the brief's nine-column composition implies. The critic may read it as left-heavy; the alternative (the block beside the h1) is a different composition than the brief's |
| Door cue glyphs | Line glyphs in `currentColor` rather than `gt-icon.svg`, to keep the first screen's accent count at one (Taste decisions). Reversible in two lines if the mark is ruled outside the count |
