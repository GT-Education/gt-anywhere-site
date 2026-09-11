# M12 Selective by Rigor, rationale

| Field | Value |
|---|---|
| Mock | M12 "Selective by Rigor" (new direction), brief `0_plan/kb/briefs/M12.md` under `CONTRACT.md` v2.1 |
| Lens order | L4 exclusivity, L1 objective, L3 mission, L2 continuity |
| Built | 2026-09-11 by a Fable design-engineer fork, no browser tool; the runner `0_plan/tools/shots.mjs` measured three build passes and one iteration pass, and the screenshots it wrote under `qa/` were reviewed between passes (Self-check). Iteration 1 answered the critics' round one (`0_plan/ensemble/critic-fable-M12.md`, `critic-astra-M12.md`): the section "Iteration 1" lists every finding and what changed |
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
the statement block follows the doors and their lines so both CTAs stay above the fold. On a phone held sideways
(V10, 750 by 342) the contract's landscape recipe applies: the h1 takes the full width one token smaller and the
two cards sit side by side under the provenance. The second screen is light: the compare anchor opens it, then
the table with repeated values, the proof strip, the steps, the connect list and the families bar; the footer is
navy again with both marks on their panels.

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented children, in
person at our Georgetown, Texas campus or online from anywhere." It is the one sentence that both decodes "GT"
and names the two ways to attend; "selective" in it is the word the statement block then substantiates. Literata
at `--h1-weight` 400 (a local variable so DD-38's 300-against-400 test is one edit), `--text-3xl` (27.27px at V2 to
46px at V16), `--leading-tight` 1.15, `max-width: 35ch`. `text-wrap: balance` evens the lines where it acts, which
in Chromium is six lines or fewer (K2 F-22, A10): from 402px up. At 360 to 393px the sentence sets in seven lines
and balance does nothing, so a no-break space between "from" and "anywhere." keeps the last line to two words
(`qa/V2.jpg`: "campus or online / from anywhere."). At V10 the h1 steps down to `--text-xl` and takes the full
content width (the contract's landscape recipe, a declared departure). The door names are h2 (equal weight,
DD-14), then one h2 per section: "Compare the two schools", "What is true of both schools", "How to apply",
"Questions before you apply", "Already a GT family?"; "Texas families" is an h3 inside the comparison section.

Line counts measured by the runner (h1 bottom minus the header bottom and the top padding, divided by the line
height): V1 to V4 7 lines (217 to 222px; the contract's 23-characters-a-line estimate gave 6, the real wrap at 360
to 393px is 22 characters a line), V5 to V8 6 lines (191 to 195px), V10 3 lines at `--text-xl` (83px), V11 5 lines
(196px), V12 to V17 4 lines (163 to 212px), V18 8 lines at 320px.

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id and name, lens order | M12, folder `M12-selective-by-rigor`; L4, L1, L3, L2 as above | Met |
| Thesis | The bar as the headline argument: the h1 says "selective", the block gives the bar and its source, the compare table's Admissions row repeats it for both schools, the proof strip and the steps line restate it in the deck's words. No price or wealth cue anywhere; tuition appears only where the deck places it (table row, TEFA module) | Met |
| Exemplars | Exeter's framing (a policy stated without a rate) is the block's tone; Crimson's cohort framing is the block's sentence (what students are, what they do to begin); Vanguard's proof band is the figure-plus-source form. Caltech's unsourced numerals avoided: the figure carries its source line and nothing counts up | Met |
| Composition | Navy first screen; header 56 with the GT School mark on a light plate as M03; h1 `grid-column: 1 / span 9` of a 12-column grid with 32px gutters at 768 and above; provenance; statement block (figure, sentence, source); doors as two compact cards on navy under the block; under 700px tall (and phones under 760px tall) the block follows the doors; at V10 the contract's landscape recipe. Light second screen: compare anchor leading the comparison band, table, proof, steps; footer navy | Met, with the 760px phone extension and the V10 recipe named in Departures |
| Fold estimates | Designed to the table below (V2 560, V5 565, V14 590, V16 631; V10 306 after iteration 1); measured by the runner: V2 590 of 605, V5 564 of 691, V10 306 of 318, V14 590 of 696, V16 631 of 876 | Met, measured |
| Typography | Contract roles: h1 Literata 400 `--text-3xl`; door names Literata `--text-xl`; door lines, table cells, facts and statement at `--leading-prose` 1.5; labels Inter Tight 500 uppercase 0.08em; buttons Inconsolata 600 `--text-btn`; the figure Inconsolata 600 `--text-3xl` `tabular-nums`; the statement `--text-md` Inter Tight at 1.5 on a 56ch measure; the source `--text-xs` in `--color-text-muted-on-dark`. `--h1-weight` exposes the DD-38 test | Met (the 56ch measure and the V10 step-down are departures) |
| Color and surface | `--color-navy` first screen with `--color-on-navy` text; one accent use, the figure's 3px `--color-accent` underline (5.83 on navy as a shape); door cards outlined in `--color-on-navy`; door CTAs `--color-on-navy` fill with `--color-text` text (18.57 on the #fbfbfb face); light sections per the contract (`--color-text` on `--color-bg` 17.69, `--color-surface` 16.10, `--color-anywhere-tint` 16.30); focus: CONTRACT.md section 4's two-colour ring on every focusable element over navy and on both logo plates, `--color-focus` on light surfaces | Met |
| Imagery | Default state: none. Photographed state designed, not shipped: `georgetown-presenting.webp` at 3:2 after the steps, `object-position: 50% 45%`, at most 720 CSS px, caption "Students gather for a class presentation." (Assets) | Met (default state) |
| Motion | Nothing animates. V1 and V3 instant (no transitions at all); V10 native anchor scroll inside `prefers-reduced-motion: no-preference`; V6 on the steps and secondary CTAs considered and absent (D-039 undecided); nothing counts up; reduced motion zeroes every duration with `--duration-none` | Met |
| Copy | Sections 0 to 8 verbatim; the statement block carries the deck's admissions cell and the sources line's admission source, nothing else; tuition, schedules, weekends, grades and the phone number appear where the deck places them, unchanged; the tour label per R14; "Questions before you apply" is an allowed section 6 heading; no section 9 word is used. Two no-break spaces (h1, statement) change no word (Departures) | Met |
| Conversion | Doors on the first screen (under the block on tall viewports, above it on the short phone rows); compare anchor opens the second screen; table with repeated values (DD-43); proof; steps with two application links; four secondary CTAs; families bar; footer application links with `school=` | Met |
| Acceptance | `check-mocks.py` 36 of 36 rules, `check-claims.py` clean, the runner: 16 of 16 fold rows pass (V10 by the contract's landscape recipe), V18 reflows without horizontal scroll, reduced motion, doubled root font and console pass, focus and forced-colour captures reviewed (Self-check); every on-navy pairing at or above 4.5 (on-navy 14.58, muted-on-dark 7.81, accent as a shape 5.83; `--color-text` on the #fbfbfb CTA face 18.57); focus visible on navy (the ring's outer band 14.58); DD-38, DD-39, MN-16 and D-039 named here. Critics' round one: Fable pass on all nine rows, Astra Objective 3 and Craft 3, answered in Iteration 1 | Met; critics' round two pending |

## Fold estimates and measured bottoms (the four rows the brief names, and V10)

Method for the estimates: CONTRACT.md section 2 h1 heights (188, 193, 199, 212) rather than the brief's 155 and
159, which do not follow from the clamp and the leading; space tokens for every gap; card heights from the CSS
(phone card: border 1 + head padding 8 + label row 20 + gap 4 + name 25 + padding 8 + CTA 44 + border 1 = 111;
laptop card: 1 + 16 + 20 + 4 + name 31 + 8 + 44 + 1 = 125); the statement block from the sentence's wrapped lines
plus the source line. Measured: the runner's iteration-1 pass (`qa/fold.md`), bottom of the second CTA.

| Row | Viewport, limit | Layout | Estimate | Measured | Result |
|---|---|---|---|---|---|
| V2 | 375 by 629, 605 | Block below (short) | header 56 + pad 16 + h1 188 + 16 + provenance 22 + 24 + card 111 + 16 + card 111 = 560 | **590** (the h1 is 219px, seven lines, not six) | Pass, 15 to spare (brief 525, which assumed h1 155) |
| V5 | 414 by 715, 691 | Block below (phone extension) | 56 + 16 + 193 + 16 + 22 + 24 + 111 + 16 + 111 = 565 | **564** | Pass, 127 to spare (brief 615). With the block above the doors the sum would be 564 + 135 + 24 = 723, over by 32, hence the extension |
| V10 | 750 by 342, 318 | Landscape recipe: pad 8, h1 `--text-xl` full width, doors side by side | 56 + 8 + h1 83 + 8 + 22 + 16 + card 113 = 306 | **306** (both CTAs) | Pass, 12 to spare; the run-in lines are cut at the fold (`qa/V10.jpg`). Before iteration 1: 402 and 532 |
| V14 | 1280 by 720, 696 | Block above, doors side by side | 56 + 24 + 199 + 16 + 22 + 24 + block 100 + 24 + card 125 = 590 | **590** | Pass, 106 to spare (brief 633). The door lines end at 661, the navy screen at 685, the light band shows 35px before the fold (`qa/V14.jpg`) |
| V16 | 1440 by 900, 876 | Block above, doors side by side | 56 + 32 + 212 + 16 + 22 + 32 + block 104 + 32 + card 125 = 631 | **631** | Pass, 245 to spare (brief 697). Lines end at 701, navy at 749; the light band and the compare anchor show below (`qa/V16.jpg`) |

Other rows, measured (second CTA bottom against the limit): V1 588 of 716; V3 593 of 640; V4 593 of 635; V6 725
of 815 (block above); V7 563 of 657; V8 566 of 715; V9 753 of 844 (emptiness row: page height 6638, the navy
screen overruns the viewport with the door lines cut); V11 602 of 1000; V12 541 of 1170; V13 562 of 744; V15 473
of 624 (block below); V17 631 of 936; V18 682 (reflow row: no horizontal scroll at 320, the header wraps to two
rows); V19 442 of 552 (zoom row, reported: scroll width 1024, nothing clipped). The matrix has sixteen fold rows
(V1 to V8, V10 to V17); all sixteen pass.

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
| DD-38 (b), R5, RF-55, RF-58 | Fluid clamps `--text-xs` to `--text-3xl` and `--text-btn`; `--leading-prose` 1.5 on every multi-line string; `--measure-prose` 65ch on prose blocks (the statement sentence takes 56ch, a departure); `--leading-body` 1.25 on single-line labels and buttons; `--h1-weight` for the 300-against-400 test |
| DD-39 (a), RF-07, K3 sections 5c to 5f | `--color-on-navy` text and CTA fill on navy; `--color-text-muted-on-dark` for the provenance, door labels, door lines, the source line and the footer facts; `--color-accent-text` for the step numerals; the accent as a shape once on the first screen; the two-colour ring over navy |
| DD-43 | The three shared rows repeat their value in both columns; on phones each cell is labelled with its school name under the row's name |
| DD-44, K10 | No `vh` or `svh` anywhere; the first screen is content-sized so the next band is visibly cut; height queries at 400 (with width 600), 699 and 759 |
| MD-02, R14, REQ-044 | Secondary CTAs: FAQ first, then "Talk to admissions", "Ask about a tour of the Georgetown campus", "Ask about a virtual info session", all to the destinations the deck lists |
| MD-17, G0.5 item 6 | The provenance line once, one line, `--text-sm`, under the h1; not repeated in the footer |
| MN-16 (a), RF-53, R8 | No motion; the reduced-motion block sets every duration to `--duration-none` on elements and pseudo-elements; every state is visible at rest |
| D-039 | No script beyond the JSON-LD block, no input, no `data-d039` declaration; V6 reveals absent; the page is complete at rest |
| REQ-022, DEL-018 | Only figures with register rows, in the deck's words; `check-claims.py` clean; statuses recorded here, not on the page |
| SE-13 | `noindex, nofollow`; canonical `https://gt.school/` |
| K3 section 5d, CONTRACT.md section 4 | Focus rings per surface: `--color-focus` at 2px offset on light surfaces; over navy and on anything straddling it (both logo plates, the light CTA faces, every navy link) the two-colour ring, a 2px `--color-navy` inner band (`outline`) and a 2px `--color-on-navy` outer band (`box-shadow`), 14.58 between the bands so one band clears 3:1 on any ground (K3 F10); `forced-colors` fallback to a 3px `CanvasText` outline (K3 F38) |
| K12 F20, G4 | The horizontal mark at 27px or more wherever the 56px header row can hold it beside the two utility links: from 395px wide on phones, 28px from 768; 20 to 27px at 360 to 394 (Departures) |
| CONTRACT.md section 2 (V10) | The landscape recipe at `max-height: 400px` and `min-width: 600px`: section padding `--space-3`, the h1 at `--text-xl` across the full content width, provenance, the two compact door blocks side by side, the lines and the statement below the fold |

## Layer-2 tokens used (proposed; each named with its row per `TOKENS-V2.md`)

| Token | Where | Row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | Every type size on the page (`--text-xl` also as the V10 h1 size) | DD-38 (b), R5 |
| `--leading-prose` 1.5, `--measure-prose` 65ch | Door lines, table cells, facts, steps, sources, footer facts, connect list and prose measures (the statement sentence takes 56ch instead) | DD-38 (b), RF-55, RF-58 |
| `--color-on-navy` | Text on navy; the door CTA fill; the button text on navy fills; the card outline; the outer band of the two-colour ring | DD-39 (a), RF-07 |
| `--color-text-muted-on-dark` (#a3bfcb, a new tint) | Provenance, door labels, door lines, the source line, footer facts | DD-39 (a), RF-07; DD-19 departure |
| `--color-accent-text` (#a5501a, a new tint) | Step numerals (CSS counters) | DD-39 (a), RF-07; DD-19 departure |
| `--duration-none` | The reduced-motion block | MN-16 (a), RF-53, R8 |
| Not used | `--color-focus-on-dark` (the two-colour ring replaced the single on-dark ring in iteration 1), `--color-on-accent`, `--color-border-strong`, `--ease-standard`, `--ease-out`, `--ease-in` (no accent fill, no load-bearing border, no motion) | |

## Motion spec

| Move | Element | Trigger | Duration | Easing | Reduced motion |
|---|---|---|---|---|---|
| None | Nothing on the page transitions or animates; `styles.css` declares no `transition` and no `@keyframes` | | | | |
| V1 door state, V3 focus | Door CTAs, links, buttons: underline on hover; focus rings per surface | hover, focus-visible | 0 ms (instant) | none | Same, visible at rest (R8) |
| V10 anchor scroll | `#compare` link | click | Native `scroll-behavior: smooth` inside `prefers-reduced-motion: no-preference` only | browser | `scroll-behavior: auto` |
| V6 one-time reveal | Considered on the steps and the secondary CTAs | | | | Absent: needs the D-039 script; the page is complete without it |
| Reduced motion | `*, *::before, *::after` | `prefers-reduced-motion: reduce` | `transition-duration` and `animation-duration: var(--duration-none)` | | Every computed duration 0 (measured at V14) |

## Assets

| Asset | Where | Alt text | Consent and status | Fallback |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` (139 by 32) | Header lockup on a `--color-bg` plate at 20 to 27px tall on phones (K12 G4's 27px floor from 395px wide) and 28px from 768; footer on a `--color-bg` plate at 24px, linked to https://www.gt.school/ | "GT School" | GT's own mark, unchanged, on a light panel (copy.md section 8, checker R16) | none needed |
| `../shared/img/gt-anywhere-logo-h.svg` (252 by 48) | Footer, directly on `--color-navy` at 32px tall, linked to https://anywhere.gt.school/ | "GT Anywhere" | GT's own mark, white lettering on the navy panel (R16); loads eagerly (Departures) | none needed |
| Two inline SVG line glyphs (a door, a screen), `aria-hidden`, `currentColor`, 20px | Door labels | decorative | Drawn for this mock; not brand marks, not recoloured marks | none needed |
| Photographs | None in the default state | | Every file in `ASSETS.md` shows identifiable children; AD-11 and RF-25 gate them until Nari's written permission names website and advertising use | The default state is the fallback (DD-31) |
| Photographed state (designed, not shipped) | One `<figure>` after the steps: `georgetown-presenting.webp` (1440 by 960) at 3:2, `object-position: 50% 45%`, `max-width: 720px` (CONTRACT.md section 5, DPR 2), `loading="lazy"`, caption "Students gather for a class presentation." | "students gather for a class presentation" (ASSETS.md) | "published by GT on its own site, consent to be confirmed by Nari (AD-11)" | If rejected, the section stays as built |

## Departures

| Departure | Reason |
|---|---|
| Navy (`--color-navy`) as the first-screen and footer surface | The brief's composition; the sites use the swatch as `--color-surface-alt`, so this is a surface extension, flagged as M03 flagged it (DD-19) |
| `--color-text-muted-on-dark` #a3bfcb and `--color-accent-text` #a5501a | New tints proposed in DD-39 (a) and RF-07 (K3 section 5e PR-4 and PR-1); DD-19 departures until the row is Agreed |
| The statement block follows the doors on phone widths under 760px tall, not only under 700px | The brief's 700 rule leaves V5 (414 by 715) with the block above the doors at 564 + 135 + 24 = 723 of 691. The brief's own V5 figure (615) cannot be reproduced with a block of the described form. The fold rule is the acceptance criterion, so the threshold moves to 760 on phone widths; V6 (839) and V9 (844) keep the block above. One media query, `(max-width: 767px) and (max-height: 759px)`, beside the brief's `(max-height: 699px)` |
| V10: the h1 at `--text-xl` across the full content width, section padding `--space-3`, the doors side by side, at `(max-height: 400px) and (min-width: 600px)` | CONTRACT.md section 2's landscape recipe, which allows the one-token step-down where the direction's first screen cannot reach 318 at the clamp size, declared here as the contract asks. Measured: both CTAs at 306 of 318 (before: 402 and 532) |
| At 768px and above the door line sits under its card as a caption, after the CTA, not between the name and the CTA | One copy of each line serves both layouts (phones need the lines after the second CTA per CONTRACT.md section 2; duplicating the sentences in the HTML for two layouts was the alternative). The card stays compact as the brief asks; the caption is aligned in the card's column, 16px below it |
| Contract h1 heights (188, 193, 199, 212) used instead of the brief's 155 and 159 | The brief's figures do not follow from the clamp and 1.15 leading (155 would be five lines of 31px at V2; the 132-character sentence needs seven at 22 characters a line, measured) |
| Two no-break spaces in the markup: "from&nbsp;anywhere." in the h1 and "family&nbsp;conversation." in the statement | Typographic control of two lone last words the critics found (`qa/V2.jpg`, `qa/V14.jpg` before iteration 1). No word changes; `text-wrap: balance` cannot act on the seven-line phone h1 (K2 F-22) |
| The statement sentence on a 56ch measure, not `--measure-prose` 65ch | At 65ch the first line ran to "family" and "conversation." stood alone at 1280 and 1440; 56ch gives two lines of about 64 and 37 characters (`qa/V14.jpg`) |
| The phone wordmark at `clamp(20px, 20vw - 52px, 27px)` (20 at 360, 23 at 375, 26 at 390, 27 from 395), 28px from 768 | K12 F20 and G4: never below 27px on the live sites. At 360 the two mandatory 12px utility links (about 204px measured) and an 8px gap leave about 100px for the plate in a 312px column even with the plate hanging 8px into the margin; a 27px mark is 117px wide plus 16px of plate padding, so the 56px row cannot hold both. Alternatives rejected: a second header row on phones (V2 fold 590 + 44 over 605), dropping a link (DD-12), a face under `--text-xs`. Measured: header 56 at every row from 360 |
| Utility nav links without padding on phones (8px gap, targets 44px tall and the text's width), `flex-wrap: wrap`; `overflow-wrap: anywhere` on the navy buttons | The padding-free links give the wider mark its room at 360; the wrap and the word-break rule keep the runner's doubled-root test (32px root at 375) free of horizontal scroll (first pass measured 459px; now pass). A word breaks inside only when it alone is wider than its line |
| Card `overflow: hidden` removed; the CTA bar carries the card's bottom radii (`calc(var(--radius-sm) - 1px)`) | The two-colour focus ring is drawn outside the CTA bar and was clipped by the card; `qa/focus-cta.jpg` shows it whole |
| Steps to Connect on one section gap (`.connect { padding-top: 0 }`); the comparison band's top padding 32 (48 from 768) after the compare anchor | Two bands on the same light surface accumulated 160px between the application buttons and the Connect eyebrow (Astra, Composition); one 80px gap now, and the anchor leads the comparison band with one 48px gap instead of 128 |
| Phone table: the row name in Literata `--text-md` sentence case, `--color-text` | On the stacked phone table the row name and the school label were the same 12px muted uppercase, two levels reading as one (Fable, Typography); the school label stays the muted eyebrow the deck asks for |
| Values outside the token set | 1px hairlines; the 3px accent underline; the ring's 2px `outline` and 4px `box-shadow` spread (K3 section 5d); `outline-offset` 2px and 0; the 44px target minimum and 3.5rem rows; letter-spacing 0.08em on labels; 0.35em after the run-in name; 0.04em under the figure; `35ch`, `30ch`, `48ch`, `56ch` measures; the mark's `clamp(20px, 20vw - 52px, 27px)`; breakpoints 768, 900 and 1440; height queries 400, 699 and 759 and the width query 600; the local `--h1-weight`; `text-wrap: balance` as an enhancement |
| `role` attributes on the table elements | The stacked layout below 768 uses `display: block`, which strips table semantics in some browsers; the roles keep the real table real |
| Empty corner header cell | A visually hidden column header would need a word the deck does not have; an empty corner cell is standard and reads cleanly |
| Footer marks load eagerly (no `loading="lazy"`) | Rule 13's lazy loading targets photographs and the checker exempts SVG marks. In the second runner pass the GT Anywhere mark was absent from `qa/V14-full.jpg`: a lazy image 4,000px below a viewport the runner never scrolls is never fetched (the GT School mark beside it showed only because the header had already fetched the same file). Both marks are 8 to 10 KB SVGs |

## Taste decisions the brief did not name (raised here, not made silently)

| Decision | Choice and reason |
|---|---|
| Provenance line | Literata 400 italic, `--text-sm`, `--color-text-muted-on-dark` (7.81): an editorial dateline under the serif h1, present and legible, secondary (MD-17) |
| Colour of running text on navy | Door labels, door lines, the source and the footer facts in `--color-text-muted-on-dark` per K3 section 5c's preference for prose on dark (halation, F30); the h1, the door names and the statement sentence in `--color-on-navy` because the statement is the argument and two lines long. Hierarchy: name over line, figure over source |
| Door cue glyphs | `currentColor` line glyphs rather than `gt-icon.svg` or the school marks: both marks are orange, and the first screen spends its one accent on the figure's underline (K3 section 5f); a mark may not be recoloured (BUILDER-BRIEF rule 16). Alternative for the director: `gt-icon.svg` at 20px if the mark is ruled outside the accent count |
| The figure for readers | The display "90th" is `aria-hidden`; the sentence beside it carries the figure once for screen readers |
| Figure and sentence alignment | `align-items: baseline`: the numeral's baseline sits on the sentence's first baseline, as in a proof band |
| Card anatomy | The CTA is the card's light base bar, full width, inside the outline (label 16 + name + CTA 44 fits the compact budget). Focus draws the two-colour ring outside the bar: the navy inner band separates the ring from the white face and the white outer band reads against the navy card and page (`qa/focus-cta.jpg`) |
| Hover | Underline only, no fill change (BUILDER-BRIEF rule 10) |
| Short layout hairline | When the block follows the doors it takes a 1px `--color-border` rule above and 24px of padding, so it reads as the screen's closing statement rather than a stray paragraph |
| DOM order | h1, provenance, doors, door lines, statement. Two thirds of sessions are mobile and most phone rows are under 760px tall, so the DOM order is the phone order; tall viewports reorder with `order`. The block holds no focusable element, so focus order is unaffected |
| The accent on the light screens | One use: the step numerals in `--color-accent-text` (5.14 on `--color-bg`, a label colour per K3 section 5e). Figures carry the accent on both surfaces; nothing else does |
| TEFA module | On `--color-anywhere-tint` (the layer-1 Anywhere tint), because it is an Anywhere fact; `--color-text` on it is 16.30 |
| Proof strip | On `--color-surface`; four facts in Literata `--text-lg` as a ruled two-column list at 768 and above |
| Section 6 heading | "Questions before you apply" (allowed heading): the not-yet-ready parent's question, not a generic "connect" |
| Footer links | The school-site text links carry `outbound_school_site` as the logo links do; the footer "Current families" carries `families_click` like the header's |
| Header on phones | The plate hangs 8px into the margin so the mark aligns with the h1 (M03's move, applied at every width and to the footer plate); the mark grows with the viewport from 20 to 27px (Departures); the two utility links sit flush right without padding; the header holds 56px at every row from 360 (measured); at 320 the nav wraps under the plate by design |
| Doubled root font | `overflow-wrap: break-word` on `body`, `minmax(0, 1fr)` tracks on every grid, `flex-wrap: wrap` on the utility nav and `overflow-wrap: anywhere` on the navy buttons, so a 32px root at 375 (the runner's test) cannot force horizontal scroll (measured: pass; `qa/V2-rootx2.jpg`) |
| Open Graph | `og:title`, `og:description`, `og:type`; no `og:image` in the default state (copy.md Head) |
| Compare anchor | Its own light band before `#compare` so the link scrolls to the section heading, not to its own container; 48px below it to the "Compare" eyebrow at 768 and above (32 on phones), one gap |
| Phone table levels | Row name in Literata sentence case, school label as the muted eyebrow, cell text in Inter Tight: three levels a parent can scan |

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
| `?school=` parameter | `georgetown`, `anywhere` | DD-25's convention; the live apply.gt.school parameter is to be confirmed in S5, a planned hardening stage, and no confirmation record exists yet |
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

## Iteration 1 (the critics' round one, 2026-09-11)

Fable scored every row at or above 4 (Objective 5, Composition 4, Typography 4, Imagery 4, Color 5, Motion 5,
Mission 5, Craft 4, Continuity 4). Astra scored Objective 3 and Craft 3 (Imagery 5, Motion 5, Mission 5, the rest
4). One iteration, as the loop requires.

| Finding (critic, row) | Change | Evidence after the change |
|---|---|---|
| V10 shows neither CTA; 402 and 532 against 318 (Astra Objective 3, Craft 3; Fable Craft) | CONTRACT.md section 2's landscape recipe: at `max-height: 400px` and `min-width: 600px` the section padding is `--space-3`, the h1 takes the full width at `--text-xl` (three lines, 83px), provenance, the two compact door blocks side by side, the lines and the statement below | `qa/fold.md` V10: header 56, h1 147, provenance 177, both CTAs 306 of 318, PASS; `qa/V10.jpg` |
| The phone h1 ends on the lone word "anywhere." at 360 to 393; balance does not act on seven lines (both critics, Craft and Typography) | A no-break space between "from" and "anywhere."; the balance claim qualified in the h1 section (six lines or fewer, K2 F-22) | `qa/V2.jpg`: "campus or online / from anywhere."; `qa/V5.jpg` (six lines, balanced) unchanged |
| The statement ends on the lone word "conversation." at 1280 and 1440 (both critics) | The sentence on a 56ch measure, and a no-break space between "family" and "conversation." for the widths where the column is narrower than 56ch (768 to 1024) | `qa/V14.jpg`: "Students at or above the 90th percentile. Begin online, then an assessment / and a family conversation." |
| Focus on navy a single band; no focus or forced-colour captures (Astra Color and surface, Craft) | The two-colour ring on every focusable element over navy and on both logo plates (2px `--color-navy` inner, 2px `--color-on-navy` outer); the card's `overflow: hidden` removed so the ring is not clipped; the light-surface ring unchanged | `qa/focus-cta.jpg` (the first door CTA: navy band, white band, on the white face and the navy card); `qa/focus-footer.jpg` (the GT Anywhere footer link: the white outer band on navy); `qa/forced-colors.jpg` (every element legible: outlined cards, system link colour on the CTA labels, the accent rule as CanvasText) |
| Phone wordmark 18px against K12 F20 and G4 (both critics, Continuity) | `clamp(20px, 20vw - 52px, 27px)` on phones, 28px from 768; the utility links give up their padding so the row holds at 360 | `qa/V2.jpg` 23px, `qa/V5.jpg` 27px, `qa/V14.jpg` 28px; `qa/fold.md` header 56 at every row from 360 |
| About 160px between the application buttons and Connect; the anchor-to-table transition (Astra Composition; Fable Composition) | `.connect { padding-top: 0 }` (one 80px gap at 768 and above, 64 on phones); the comparison band's top padding 32 (48 from 768) so the anchor leads it with one gap | Crops of `qa/V14-full.jpg`: buttons, 80px, "Connect"; anchor, 48px, "Compare" |
| Phone table: the row name and the school label are the same 12px muted uppercase (Fable Typography) | Row name in Literata `--text-md` sentence case, `--color-text`; the school label unchanged | Crop of `qa/V2-full.jpg` at the table head |
| Rationale: 17.69 quoted for the CTA face (both critics) | Corrected: 17.69 is `--color-text` on `--color-bg` (K12 F92); on the #fbfbfb face it is 18.57 | Brief compliance, Color and surface; Acceptance |
| Rationale: the size figure did not reproduce (Fable) | The checker's formula, bytes over 1024: 15,930 + 19,376 = 35,306 bytes, 34 KB | Self-check |
| Rationale: "17 of 18 fold rows" (Astra) | The matrix has sixteen fold rows; before iteration 1 fifteen passed, now sixteen | Fold section, Self-check |
| Rationale: "V10 fails for every direction" (Astra) | Removed; the contract's recipe makes the row feasible and M12 passes it | Fold section |
| Rationale: "confirmed in S5" for the `school=` parameter (Astra) | Reworded: to be confirmed in S5, a planned stage with no record yet | Flagged slots |
| Rationale: 724 against 723 (Fable) | 723 everywhere | Departures, fold table |
| RF-07, RF-25, RF-53, RF-55, RF-58 are in `kb/REGISTER-FOLLOWUPS.md` but not in `0_plan/ID-INDEX.md` (Fable) | Not this mock's file; an index gap for `build-index.py`, reported to the director | |

Not changed, and why:

| Suggestion | Decision |
|---|---|
| A compact phone statement block (about 95px) above the doors on more phone rows (Fable Composition; the coordinator: only if both CTAs still clear the fold on every row) | Not done. Measured room below the second CTA: V1 128, V5 127, V8 149 (V2 15, V3 47, V4 42, V7 94). The smallest honest block keeps the figure beside the deck's 101-character sentence: at `--text-base` on the 240 to 300px column beside the figure that is four lines (96px) plus the source (23px), about 120px, plus a 24px gap: 144. No row gains the block with margin (V8 would have 5px), and `--text-sm` would set the argument smaller than the door lines. The 760px threshold stands; the block follows the door lines immediately on the short rows |
| The statement block in columns 10 to 12 beside the h1 or the cards from 1280 (Fable Composition) | Not done. The brief's composition is the h1 across nine columns, the provenance, then the block; both critics scored Composition 4. Moving the block to the right third is a different composition for the director to call, not an iteration fix |
| Glyph at the door name's cap height or on a 44px plate (Fable Imagery) | Not done. Imagery scored 4 and 5; a taller glyph row adds height to every card and to the phone rows where V2 has 15px of fold margin |
| The source line as a link to anywhere.gt.school/academics (Fable Mission, optional) | Not done. No `data-event` is defined for it in `1_spec/03` section 7 and the deck's sources line is plain text; a copy.md and analytics question for the director |
| A six-line phone h1 through a lower floor than the clamp (Fable Typography) | Not done. The floor is the `--text-3xl` token (27px); the wrap needs 24 characters a line for six lines at 375, which is 26.1px or tighter tracking than a serif display bears. The no-break space removes the orphan within the clamp |

## Self-check

Greps from the BUILDER-BRIEF rules (run 2026-09-11 from the mock folder, after iteration 1):

| Check | Result |
|---|---|
| `grep -c "<form" index.html` | 0 |
| `grep -c "<script" index.html` | 1 (the JSON-LD block) |
| Hosts in `href` and `src` | anywhere.gt.school, apply.gt.school, community.gt.school, gt.school (canonical), www.gt.school, schema.org (JSON-LD context) |
| Digits in visible text | 09, 10, 10,400, 2026, 270, 512, 8, 9, 90, 9481 (the sources date, the phone number, 8th grade, 9 to noon, 90th, $10,400) |
| "advis" in visible text | none (`data-type="advisor"` is an attribute) |
| Full names | Georgetown Campus x8, GT Anywhere x14 |
| Raw hex in `styles.css` | 0 |
| `transition` declarations | none (the word appears only in comments and in the reduced-motion `transition-duration`) |
| Logos | `gt-school-logo-h.svg` x2, `gt-anywhere-logo-h.svg` x1 |
| Size | 15,930 + 19,376 = 35,306 bytes; 34 KB by the checker's formula (bytes over 1024) |
| 390 by 844 first screen (V9) | Measured: header bottom 56, h1 294, provenance 331, then the statement block, CTA Georgetown 626, CTA Anywhere 753 of 844, the door lines cut at the fold; the header, the umbrella sentence, the provenance line and the statement are the only things above the CTAs (`qa/V9.jpg`) |

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M12-selective-by-rigor` (after iteration 1)

```
## M12-selective-by-rigor: 36 pass, 0 fail

check-mocks: OK
```

### `python3 1_spec/tools/check-claims.py 0_plan/mockups/M12-selective-by-rigor/index.html` (after iteration 1)

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

### `node 0_plan/tools/shots.mjs 0_plan/mockups/M12-selective-by-rigor --all` (after iteration 1; writes `qa/fold.md`, `qa/V1.jpg` to `qa/V19.jpg`, `qa/V2-full.jpg`, `qa/V14-full.jpg`, `qa/V2-rootx2.jpg`, `qa/focus-cta.jpg`, `qa/focus-footer.jpg`, `qa/forced-colors.jpg`)

```
| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 92 | 325 | 362 | 497 | 624 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 92 | 327 | 356 | 483 | 602 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 323 | 449 | 569 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 323 | 449 | 569 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 302 | 437 | 564 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 302 | 597 | 725 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 263 | 300 | 435 | 563 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 304 | 439 | 566 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 331 | 626 | 753 | yes | report: page height 6638 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 306 | 306 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 276 | 314 | 602 | 602 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 243 | 280 | 541 | 541 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 296 | 562 | 562 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 317 | 590 | 590 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 286 | 324 | 473 | 473 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 300 | 338 | 631 | 631 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 338 | 631 | 631 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 92 | 356 | 406 | 539 | 658 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 296 | 442 | 442 | yes | report: scrollWidth 1024 |

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

Exit code 0. Sixteen of sixteen fold rows pass; V18 reflows with no horizontal scroll; V9 and V19 are report rows.

### Runner passes

| Pass | Found | Changed |
|---|---|---|
| 1 (build) | V10 fail. Doubled root font FAIL: scroll width 459 at 375. V1 header bottom 92: the utility nav wrapped under the plate at 360. Every other row pass; reduced motion and console pass | Utility nav wraps (`flex-wrap`); the mark 18px tall on phones; the plate hangs 8px into the margin (header and footer); `overflow-wrap: anywhere` on the navy buttons |
| 2 (build) | Only V10 fails; header 56 at every row from 360; doubled root font pass. Reviewing `qa/V14-full.jpg` showed the footer without its GT Anywhere mark (a lazy SVG below a viewport the runner never scrolls) | Both footer marks load eagerly |
| 3 (build) | Measurements identical to pass 2; both footer marks present in crops of `qa/V14-full.jpg` and `qa/V2-full.jpg` | none; handed to the critics |
| 4 (iteration 1) | Every required row passes, exit 0; V10 306 of 318; header 56 at every row from 360 with the mark at 20 to 27px; focus and forced-colour captures reviewed | The Iteration 1 table above |

### Screenshots reviewed (the runner's files, not a browser tool)

After iteration 1: `qa/V2.jpg` (seven h1 lines ending "from anywhere.", the mark at 23px, both cards, the first
run-in line cut at the fold), `qa/V5.jpg` (six balanced lines, the mark at 27px), `qa/V10.jpg` (the landscape
recipe: three-line h1, provenance, two cards side by side, the run-in lines cut at the fold), `qa/V14.jpg` (the
statement in two even lines, the mark at 28px, the light band below the door lines), `qa/focus-cta.jpg`,
`qa/focus-footer.jpg`, `qa/forced-colors.jpg`, and crops of `qa/V14-full.jpg` (compare anchor to table; steps to
Connect) and `qa/V2-full.jpg` (the phone table's head). From the build passes: `qa/V1.jpg`, `V9.jpg`, `V13.jpg`,
`V16.jpg`, `V18.jpg`, `V2-rootx2.jpg`, the full pages and their footer crops. Not yet done: the critics' round two,
200 percent zoom at V14 beyond the runner's V19 stand-in, in-app browsers (REQ-024), a scroll video, a rendered
side-by-side with the live sites (the studio does not open them).

### Open for the director

| Item | Detail |
|---|---|
| V2 margin | The Anywhere CTA ends at 590 of 605: 15px, because the h1 wraps to seven lines at 375 to 393px, one more than the contract estimated. The card is at the compact budget (111px). Recovering margin means the phone top padding 16 to 8 or the door gap 16 to 8, both at a cost to rhythm; left as built |
| Phone wordmark under 395px | 20 to 26px at 360 to 394 against K12 G4's 27px floor, because two 12px utility links share the 56px row (Departures). The alternatives are a contract change: a taller phone header (the V2 fold fails), one utility link (DD-12), or a smaller utility face |
| Composition at 1280 and above | The h1 and the block occupy the left nine columns; the right three are navy above the full-width cards, as the brief's nine-column composition implies. Fable suggests the block in columns 10 to 12; that is a brief change to call |
| Door cue glyphs | Line glyphs in `currentColor` rather than `gt-icon.svg`, to keep the first screen's accent count at one (Taste decisions). Reversible in two lines if the mark is ruled outside the count |
| Index gap | RF-07, RF-25, RF-53, RF-55, RF-58 exist in `kb/REGISTER-FOLLOWUPS.md` and are cited by CONTRACT.md and this rationale, but `0_plan/ID-INDEX.md` does not list them (Fable critic, finding e) |

**Director's change after the gate.** The fold figures above were re-measured after a change the design director made rather than the engineer: the header mark was raised from a clamp that gave 26px at 390 and 28px on the desktop to 27px and 32px, which wraps the header to two rows at 375, and the first screen gives that space back through tighter provenance and door spacing on rows under 680px tall. The runner's mark-geometry check, added the same day, is what found the original size. Both CTAs still sit above the fold on every row and every row is still cut by content.
