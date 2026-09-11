# M09 Two Places, rationale

| Field | Value |
|---|---|
| Mock | M09 "Two Places" (new direction), brief `0_plan/kb/briefs/M09.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1 |
| Lens order | L1 objective, L2 continuity, L3 mission, L4 exclusivity |
| Built | 2026-09-11 by a Fable design-engineer fork. `0_plan/tools/shots.mjs` measured five build passes; the captures it wrote under `qa/` were reviewed with the Read tool between passes and the layout changed four times because of what they showed (Runner passes). No critic round yet |
| Files | `index.html`, `styles.css` (links `../shared/tokens-v2.css`, `../shared/fonts.css`), this file; logos from `../shared/img/`; `qa/` holds `fold.md`, the key-row captures `V2.jpg`, `V5.jpg`, `V9.jpg`, `V13.jpg`, `V14.jpg`, `V16.jpg`, `V18.jpg`, the full pages `V2-full.jpg` and `V14-full.jpg`, `V2-rootx2.jpg`, `focus-cta.jpg`, `focus-plate.jpg`, `focus-footer.jpg` and `forced-colors.jpg` |
| State | Default state: no photograph (DD-42 option a, RF-25 pending), no JavaScript (D-039 escalated and undecided, so no `data-d039` declaration and no V6 reveal; the page is complete at rest). The one move that ships, V2, is CSS only |
| Claims on the page | 90th percentile (CR-011), $10,400 (CR-021), four in-person or intensive weekends (CR-032), 9 to noon and two hours (CR-033), two to three hours (CR-034), weekly check-ins (CR-035). Every row is "Unverified, public" in `0_plan/12-claims-register.md`: allowed on a mock, blocked for production (REQ-022). M09 adds no figure and rewords none |

## Direction

Two surfaces, warm and cool, one school. The difference between Georgetown Campus and GT Anywhere is a
difference of **place**, so the page states it as two rooms under one roof: a light band carries the shared
sentence and the provenance line — the roof — and under it the screen divides once, into a warm room and a navy
room that run to the fold and meet on a single edge with no gutter. Nothing else on the first screen argues. The
light-dark difference does the routing work in under a second (L1); the estate's own swatches, faces, marks and
button case do the continuity work (L2); "one school, two places" is the mission claim the comparison table then
substantiates (L3); and selectivity stays a bar, never a price, so exclusivity is carried by the admissions row
and the proof strip, not by any wealth cue (L4, MD-25, DD-10).

The three exemplars the brief names each contribute one move. **Getty's "Our Locations" card**
(`0_plan/kb/exemplars/getty-1440-full.jpg`, about y 1980: one shared sentence, "Enjoy the art, architecture, and
gardens of our two unique sites", over two equal links of identical weight) is borrowed at page scale: the shared
h1 sits above two equal columns, and Getty's own fault is corrected — its compare control lives a hover
interaction deep inside a menu (C45, C02), whereas M09's compare anchor is the first thing on the second screen,
cut by the fold on every row. **Tate's hero** (`tate-1440.jpg`: "Book now" and "Free for Members" side by side,
same size, same weight, same treatment) gives C01: the two door CTAs differ only in the colour of the room they
stand in — navy fill on the warm side, off-white fill on the navy side — so neither outranks the other.
**Barnes** (`barnes-foundation-1440.jpg`: one saturated orange band in an otherwise neutral page) gives the
accent discipline (C03): across two strongly coloured columns the one saturated colour is spent exactly once, on
a 40px mark at the colour edge, and nowhere else on the page. Avoided: Nord Anglia's four identical "LEARN MORE"
labels (C22) — every CTA here names its destination.

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented children, in
person at our Georgetown, Texas campus or online from anywhere." It is the only element that decodes "GT"
(DD-33) and it names both ways to attend before either room does (DD-20), so it is the largest thing on the page
and the roof both rooms sit under. Literata 400 at `--text-3xl` (27.00px at 360, 46.00px at 1440),
`--leading-tight` 1.15, `max-width: 35ch`, `text-wrap: balance`. Two no-break spaces hold "in person" and "from
anywhere." together so the phrase never splits and the last line is never one word; no word changes. From 1024 it
spans ten of twelve columns (the brief's composition); the contract's 35ch measure binds inside that track at
every width from 1024 up, so the sentence occupies ten columns of grid and sets at most 35ch. On landscape phones
(V10) it steps down one token to `--text-xl` across the full width — the contract's own landscape recipe,
declared in Departures.

Door names are `h3` under a visually hidden `h2` "Two ways to attend" (an allowed section 1 heading), so the two
rooms are one list with one heading and no level is skipped. The second-screen `h2`s are "Compare the two
schools", "What is true of both schools", "How to apply", "Questions before you apply" and "Already a GT
family?"; "Texas families" is an `h3` inside the comparison.

Line counts measured by `qa/` probe on the built page (h1 client rects, one per line box):

| Row | Width | h1 size | h1 column | h1 height | Lines |
|---|---|---|---|---|---|
| V1 | 360 | 27.00px | 312px | 217px | 7 |
| V2 | 375 | 27.26px | 327px | 219px | 7 |
| V3, V9 | 390 | 27.53px | 342px | 222px | 7 |
| V4 | 393 | 27.58px | 345px | 222px | 7 |
| V7 | 402 | 27.74px | 354px | 223px | 7 |
| V6 | 412 | 27.92px | 364px | 193px | 6 |
| V5 | 414 | 27.95px | 366px | 193px | 6 |
| V8 | 430 | 28.23px | 382px | 195px | 6 |
| V10 | 750, landscape | 24.17px (`--text-xl`) | 702px | 83px | 3 |
| V11 | 768 | 34.18px | 656px | 157px | 4 |
| V12 | 834 | 35.34px | 716px | 163px | 4 |
| V13, V19 | 1024 | 38.68px | 768px (35ch) | 178px | 4 |
| V14 | 1280 | 43.19px | 875px (35ch) | 199px | 4 |
| V15 | 1366 | 44.70px | 906px (35ch) | 206px | 4 |
| V16, V17 | 1440, 1920 | 46.00px | 932px (35ch) | 212px | 4 |
| V18 | 320 | 27.00px | 272px | 248px | 8 |

The contract's six-line estimate at V2 is one line optimistic, as M12, M03 and M15 measured before this build:
seven lines from 360 to 402, six from 412. Every fold sum below uses the measured heights, not the estimate.

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id and name, lens order | M09, folder `M09-two-places`; L1, L2, L3, L4 as above | Met |
| Thesis | Two surfaces, warm and cool, one school: the light-dark difference carries the choice, the type carries the argument, and the two rooms meet on a single edge that runs the height of the screen | Met |
| Exemplars | Getty's shared sentence over two equal links, taken at page scale with its compare control brought forward onto the page (C45); Tate's two identically weighted CTAs (C01); Barnes's one saturated colour spent once (C03), here the 40px mark at the colour edge; Nord Anglia's four identical labels avoided (C22) | Met |
| Composition | Header 56 on `--color-bg`; h1 across ten columns and the provenance line on a light band; below it two columns to the fold, Georgetown on `--color-surface` left, GT Anywhere on `--color-navy` right, 6 and 6 with no gutter from 1024 (full bleed, the colour edge is the divider); 24px margins from 768 to 1023 (`--inset`); stacked warm then navy below 768. Each room carries label, name, line with its space reserved, CTA and the school mark at the base | Met from 768; below 768 the mark moves into the label row (Departures, with the measurement that forced it) |
| Typography | Contract roles: h1 Literata 400 `--text-3xl`; door names Literata `--text-xl`; labels Inter Tight 500 `--text-xs` uppercase 0.08em, `--color-text-muted` on warm and `--color-text-muted-on-dark` on navy; door lines `--text-base` at `--leading-prose` 1.5; buttons Inconsolata 600 `--text-btn` uppercase; figures Inconsolata 600 `tabular-nums` in the sentence at the sentence's size | Met |
| Color and surface | Warm `--color-surface` with `--color-text` (16.10); cool `--color-navy` with `--color-on-navy` (14.58); the cue is the light-dark difference **plus** the label and the mark, never hue (K3 `cvd-simulation.md`: the two pale tints are 1.01 apart and stay so under all three simulations, so no tint pair carries meaning anywhere on this page). One accent use on the first screen and on the whole page: a 40px `--color-accent` mark at the colour edge. CTAs: `--color-navy` fill on warm, `--color-on-navy` fill with `--color-text` on navy. Focus `--color-focus` on warm and light, `--color-focus-on-dark` on navy, K3's two-colour ring on the header where it meets the rooms and on the footer's light logo plate | Met |
| Imagery | Default state: the two school marks only, `gt-school-logo-h.svg` on the warm room and `gt-anywhere-logo-h.svg` on the navy room, each on its correct panel colour (`copy.md` section 8), both eager, 27px tall on phones and 32px from 768. The photographed state is designed, not shipped (Assets) | Met (default state) |
| Motion | V2 only: at 768 and above under `(hover: hover)` the door line rests at opacity 0 and 4px low and rises over `--duration-base` 200ms `--ease-out` on hover or focus-within **of the whole room**; its box is in flow at every state so nothing moves. Always visible below 768 and under `(hover: none)`. V6 considered for the steps and secondary CTAs and not shipped (needs the D-039 script). V1 and V3 instant. V10 anchor scroll native inside `no-preference`. Reduced motion: every line visible, every duration `--duration-none` | Met |
| Copy | Sections 0 to 8 verbatim; 57 fixed slots confirmed by string match and **no word on the page outside `copy.md` sections 0 to 9** (Self-check). Skip link and the run-in use of the door names are section 9 | Met |
| Conversion | The two rooms are the doors on the first screen, both CTAs above the fold at all 16 fold rows; the compare anchor sentence is the first thing on the second screen; comparison table with the repeated values (DD-43); the rooms repeated in miniature after the table; TEFA module; proof strip; steps; four secondary CTAs with the R14 tour label; current families; footer | Met |
| Acceptance | Every on-navy pairing at or above 4.5 (table below); focus visible on both rooms (`qa/focus-cta.jpg`, and the navy ring captured separately); reduced-motion run shows both lines without hover; the matrix passes on all 19 rows with the next band cut on every row except V18. DD-38, DD-39, MN-16 and D-039 named below | Met; critics pending |

## Fold: the brief's estimate, the sum designed to, and the measured bottom

Method: the contract's method with this build's measured component heights. The room block from 768 is
`1px border + padding + label 16 + 8 + name + 12 + reserved line + auto + CTA 44 + 32 + mark 40 + padding + 1px`;
on phones under 780px tall the compact door rule applies and the block is
`1px + padding + label row 27 (the mark sets it) + 8 + name + gap + CTA 44 + padding + 1px`.

| Row | Viewport, limit | Brief's estimate | Designed to (this build) | Measured (`qa/fold.md`) | Spare |
|---|---|---|---|---|---|
| V2 | 375 by 629, **605** | 529 | 56 + masthead (8 + h1 219 + 8 + prov 21 + 16 = 272) + warm room 131 + navy room 131 = **590** | **580** | 25 |
| V5 | 414 by 715, **691** | 619 | 56 + masthead (16 + 193 + 8 + 21 + 16 = 254) + warm room 155 + navy room 155 = **620** | **602** | 89 |
| V10 | 750 by 342, **318** | 313 (contract recipe) | 56 + masthead (8 + h1 83 at `--text-xl` + 4 + prov 22 + 8 = 125) + room to the CTA (1 + 8 + 15 + 8 + 25 + 8 + 44 = 109) = **290** | **290** | 28 |
| V14 | 1280 by 720, **696** | 464 | 56 + masthead (24 + 199 + 16 + 22 + 32 = 293) + room to the CTA (1 + 48 + 16 + 8 + 31 + 12 + line 53 + 20 + 44 = 233) = **582** | **582** | 114 |
| V16 | 1440 by 900, **876** | 528 | 56 + masthead (32 + 212 + 24 + 23 + 47 = 338) + room to the CTA (1 + 64 + 16 + 8 + 32 + 12 + line 54 + 73 + 44 = 304) = **699** | **699** | 177 |

The brief's four sums assume an h1 of two lines at V14 and V16 and five at V2; measured it is four and seven, so
every sum here is larger than the brief's and every row still clears its limit. The V5 estimate of 619 also
assumed the door lines sat above the CTAs at that height; measured, that costs 742 of 691, so V5 takes the
compact door rule (Departures).

Where the rooms stop and what shows below them, on every row (`qa/fold.md`, "Next band evidence"):

| Rows | What crosses the viewport's bottom edge |
|---|---|
| V1 to V5, V7, V8, V19 | `ul.place-lines`, the run-in door lines, ink from 598 (V2) to 692 (V1) |
| V6, V9, V11 to V17 | `section.band--lead`, the floor rule under the rooms plus the compare anchor sentence |
| V10 | `p.place-line`, the Georgetown line inside its own room, ink 300 to 370 of 342 |
| V18 | None. 320 by 256 is the WCAG reflow row; the fold rule does not apply to it (DD-44) |

Other rows, measured (second CTA bottom against the limit): V1 658 of 716 (header 88, the utility links stack
below 370px); V3 583 of 640; V4 583 of 635; V6 763 of 815 (lines inside the rooms); V7 584 of 657; V8 604 of
715; V9 791, the emptiness row, page height 6,719 with both rooms full to their CTAs and their lines; V11 855 of
1000; V12 1025 of 1170; V13 584 of 744; V15 542 of 624 (short-laptop query); V17 759 of 936; V19 442 of 552
(zoom row, reported: scroll width 1024). Sixteen fold rows, sixteen passes.

## Layer-2 tokens used, with their register rows

A mock may use a layer-2 token only if its rationale names the row (`TOKENS-V2.md`). Every one below is
**PROPOSED**, not Agreed.

| Token | Where it is used here | Register row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | The whole type scale: labels and eyebrows, provenance and sources, door lines and table cells, proof facts and steps, the compare sentence, door names, section headings, the h1, the buttons | DD-38 (b), R5 |
| `--leading-prose: 1.5` | Every multi-line string: door lines, run-in lines, table cells, proof facts, steps, sources, footer facts | DD-38 (b), RF-58 |
| `--measure-prose: 65ch` | Door lines, run-in lines, sources, steps, connect list, TEFA module | DD-38 (b), RF-55 |
| `--color-on-navy` | Text in the navy room and the navy footer (14.58); the fill of the navy room's CTA; the outer band of the header's two-colour ring | DD-39 (a), RF-07 |
| `--color-text-muted-on-dark` | The navy room's label and the footer facts block (7.81) | DD-39 (a), RF-07 |
| `--color-focus-on-dark` | The focus ring inside the navy room and on the navy footer (`--color-focus` is 1.69 against navy and fails) | DD-39 (a), RF-07 |
| `--ease-out` | The V2 door-line reveal, both properties | MN-16 (a), RF-53 |
| `--duration-none` | The reduced-motion block, elements and pseudo-elements | MN-16 (a), RF-53, R8 |
| `--duration-base` (layer 1) | The V2 reveal's 200ms, zeroed by the token file under reduced motion | MN-16 (a) |

**D-039 (scripts and inputs in mocks) is Escalated to Johnny and undecided.** M09 ships no script but the JSON-LD
block, no input, no form, and makes no `data-d039` declaration. The brief's V6 reveal on the steps and the
secondary CTAs is therefore not shipped; those sections are complete and readable at rest, and nothing on the
page depends on JavaScript. The V2 door-line reveal needs no script and is CSS only, so the brief's motion
section is met in full without D-039.

`--edge`, `--inset` and `--chrome` are this mock's own composition properties, declared on `:root` in
`styles.css`. They are not new values: each resolves to a space token (`--edge` steps `--space-5` to `--space-8`
with width, `--inset` is `--space-5` only between 768 and 1023, `--chrome` is `--space-6 + --space-5` = the 56px
header). They exist so the header, the h1, both rooms' type and every band below the fold sit on one vertical
line at every width.

## Colour and contrast (WCAG 2.x ratios computed from the token values, 2026-09-11)

Every text pairing on navy, as the brief's acceptance row requires:

| Pairing | Where | Ratio | Threshold |
|---|---|---|---|
| `--color-on-navy` on `--color-navy` | GT Anywhere's door name, its door line and run-in line, the echo name, footer links, footer phone number | **14.58** | 4.5 text |
| `--color-text-muted-on-dark` on `--color-navy` | GT Anywhere's "Online" label, the footer facts block | **7.81** | 4.5 text (AAA) |
| `--color-text` on `--color-on-navy` | The text of the navy room's CTA, which is an off-white fill | **18.57** | 4.5 text |
| `--color-focus-on-dark` against `--color-navy` | The focus ring inside the navy room and on the navy footer | **14.58** | 3 non-text |
| `--color-accent` against `--color-navy` | The seam mark's navy half (a shape, RF-37; never text) | **5.83** | 3 non-text |

Nothing on navy is below 4.5. The light surfaces, for completeness:

| Pairing | Where | Ratio |
|---|---|---|
| `--color-text` on `--color-surface` | Georgetown's door name, door line, CTA text on the navy fill reversed | 16.10 |
| `--color-text` on `--color-bg` | h1, compare sentence, table cells, proof facts, steps | 17.69 |
| `--color-text-muted` on `--color-surface` | Georgetown's "In person" label | 5.69 |
| `--color-text-muted` on `--color-bg` | Provenance, eyebrows, table row labels, sources | 6.25 |
| `--color-on-navy` on `--color-navy` fill | The warm room's CTA text | 14.58 |
| `--color-focus` on `--color-bg` / `--color-surface` | Focus ring on light | 8.20 / 7.46 |
| `--color-navy` against `--color-bg` | The inner band of the header's two-colour ring | 13.88 |
| `--color-text` on `--color-anywhere-tint` | The TEFA module | 16.30 |
| `--color-accent` against `--color-surface` | The seam mark's warm half (a shape, never text) | 2.17 |
| `--color-border` against `--color-bg` | Hairlines under the rooms, table rules, step rules (decorative only; no rule carries meaning alone) | 1.56 |

## Motion spec

| What animates | Trigger | Duration token | Easing token | Reduced-motion behaviour |
|---|---|---|---|---|
| `.place-line` opacity 0 to 1 and `translateY(4px)` to 0 | `:hover` or `:focus-within` on the whole room, only at `min-width: 768px` and `(hover: hover)` | `--duration-base` (200ms) | `--ease-out` | The line is forced visible (`opacity: 1`, `transform: none`) and every computed duration is `--duration-none`; the runner reports 0s on every element and pseudo-element at V14 |
| Nothing else | | | | |

Everything else is instant by construction: there is exactly one `transition` declaration in `styles.css`, it
names only `opacity` and `transform`, and both parts carry a duration token (checker R10). No `@keyframes`, no
`animation`. Hover states elsewhere change only `text-decoration`. The line's box is in flow at every state, so
the reveal never moves the CTA, the mark or anything below the fold: the measured CTA bottoms at V14 and V16 are
identical with and without hover.

Below 768 and wherever the pointer cannot hover, the line is simply visible — on phones (two thirds of sessions,
DD-14) and on touch tablets nothing is hidden behind a hover. Under 780px tall the contract's compact door rule
moves both lines below the second CTA as run-in paragraphs on `--color-bg`, each opened by its door name, so no
line is ever read against the wrong room's colour.

## Assets

| Asset | Where | Alt text | Consent status | Fallback |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` | Header lockup; the warm room's mark; the footer's light plate | "GT School" | Brand mark, no consent question | None needed |
| `../shared/img/gt-anywhere-logo-h.svg` | The navy room's mark; the footer's navy panel | "GT Anywhere" | Brand mark, no consent question | None needed |

Both marks are `loading="eager"` with `width`/`height` attributes, 27px tall on phones and 32px from 768 — at or
above the 27px floor (K12 G4) everywhere. The GT School mark is navy-and-gold artwork and only ever appears on a
light ground; the GT Anywhere mark is white-and-gold lettering and only ever appears on a `--color-navy` ground
(checker R16, `copy.md` section 8). The navy room's mark sits on its own `--color-navy` plate so that in forced
colours, where the room's background is replaced, the plate survives `forced-color-adjust: none` and the white
lettering still reads (`qa/forced-colors.jpg`).

**No photograph.** Every file in `ASSETS.md` shows identifiable children, AD-11 covers child imagery whether or
not a face is visible, and RF-25's written permissions do not exist yet, so the default state of DD-42 holds.
The photographed state the brief specifies is designed and waiting: a 3:2 photograph under each door line, at
most 600 CSS px wide, `georgetown-presenting.webp` at `object-position: 50% 45%` in the warm room ("Students
gather for a class presentation.", `copy.md` section 9) and a Nari-confirmed GT Anywhere photograph in the navy
room, which does not exist in the library today — which is exactly the DD-42 parity problem: shipping a
Georgetown photograph without an Anywhere one would rank the two rooms by imagery. Until both exist with
permissions, the two marks are the cue, and the rooms stay equal. If a photograph is rejected (DD-31), nothing
changes: this is the shipped state.

## Departures

| Departure | Why | Named where |
|---|---|---|
| Below 768 the school mark sits in the label row, not at the base of the room | Measured. With the mark at the base of a stacked room, the warm room's mark pushes the navy room's CTA below a 629px fold: the sum is 656 of 605 at V2. In the label row the mark costs 12px (the row grows from the 15px label to the 27px mark) and the fold sum is 580 of 605. The cue the brief asks for — label **and** mark, never hue — is intact in both states; only its position in the room changes | Brief compliance, Composition |
| Compact door rule applied at 780px of viewport height, not 700 | Measured. At V5 (715 tall) the lines inside the rooms cost 742 of 691; at V8 (739) and V1 (740) they cost more. 780 is the threshold at which the full room fits, and it is the value M15 and M03 measured for their own forms | Fold table |
| The compact rule also fires on wide viewports under 600px tall (V19, 1024 by 576) | At that height the rooms with their lines end at 616 of a 576 viewport, so nothing ink-bearing crossed the bottom edge and the page read as a false floor. With the lines below the second CTA the run-in band crosses at 548 | Fold table |
| V10 keeps its lines **inside** the rooms, under the CTA | The contract's landscape recipe puts the lines below the fold. Putting them in a shared band below both rooms would place the Georgetown line under the navy room, and in a colour-edge design a line must never be read against the wrong room. Inside the room the line is still below the fold and it is what cuts the fold at V10 | Motion, Fold table |
| The h1 steps down one token to `--text-xl` at V10 | The contract's own landscape recipe (section 2), which allows the step on that row where the direction's first screen cannot otherwise reach the limit. At `--text-3xl` the sentence is 3 lines of 28px and the second CTA lands past 318 | h1 |
| The rooms are full bleed below 768 and from 1024, inset 24px only between 768 and 1023 | The brief's own composition ("24px margins" is stated for 768 to 1023 only). Full bleed is the stronger reading of "the colour edge is the divider" at the two widths where the edge has the screen to itself, and on phones — where two thirds of sessions are — the colour reaching both edges is what makes the two rooms read as rooms | Taste decisions |
| Above 1000px of viewport height the rooms are left at their content height instead of stretching to the fold | Measured at V11 (768 by 1024) and V12: stretching a four-element column over a 1024px screen left a 700px void inside each room that no composition could justify. Below 1000px the rooms still run to within `--space-8` of the fold, which is the brief's "columns extend". On the tall rows the comparison band carries the continuation instead, and both rows still report the next band cut | Fold table |
| A 1px `--color-border` rule opens the band under the rooms | It is the floor line of the two rooms and the opening of the second screen, and it guarantees that something ink-bearing crosses the viewport's bottom edge on every laptop row rather than 48px of empty padding | Fold table |
| The two rooms carry a 1px border in their own colour | Invisible in normal rendering (navy on navy, warm on warm) and the whole point in forced colours, where both backgrounds are replaced and the border becomes `CanvasText`: the column boundary is then a drawn line rather than a colour change that no longer exists (`qa/forced-colors.jpg`) | Forced colours |
| Values outside the token set | 1px rules and borders; the 40 by 8px seam mark; the 4px rise of the V2 reveal; 2px focus bands at 2px offset and the 4px outer band of the two-colour ring; the 44px target floor; 0.08em letter-spacing on labels; `35ch`, `40ch`, `30ch`, `48ch` measures; `text-underline-offset`; the breakpoints 370, 600, 768, 900, 1024, 1280, 1440 and the height queries 479, 599, 699, 779, 1000. No raw hex: `grep -oE '#[0-9a-fA-F]{3,8}' styles.css` returns nothing | DD-19 |
| The door line exists twice in the markup | The compact door rule needs the line in two places. Exactly one copy is ever rendered: the other is `display: none`, which removes it from the accessibility tree as well as the page, so no reader meets it twice | Motion |

## Flagged slots

| Slot | Q id | What ships |
|---|---|---|
| "Current families" destination | Q-002 | `https://community.gt.school`, header and footer and the families bar, pending Nari's confirmation |
| The four application steps | Q-007 | The deck's four steps, identical for both schools |
| Georgetown tuition | Q-011 (decided) | "Tuition on request. Ask admissions." No Georgetown figure exists |
| After 8th grade | Q-013 | "Families plan the path after 8th grade with admissions." |
| Intensive-weekend logistics | Q-017 | The count only ("Four intensive weekends a year in Georgetown", CR-032); no dates, no travel detail |
| Outcome figure and accreditation | Q-019, Q-033 | Withheld from the page entirely (G0.5 decisions 2 and 3). No speed multiplier, no SAT target, no Cognia mark, no "accredited" — including in the JSON-LD |
| TEFA window, owner and expiry | Q-021 | The module is visible to everyone (D-015 option c) with the deck's wording and no date |
| Weekly check-ins | Q-035 (decided) | "Live Guides online, with a one-to-one check-in every week." |
| `?school=` parameter name | DD-25 | Every application link carries it; the live parameter is confirmed in S5 |
| Holly's unifying brand element | Q-001 | Not present. The header lockup is the real GT School mark alone; the element has a place beside it when it exists |
| Repeated comparison values | DD-43 (proposed) | The three shared rows repeat their value in both columns rather than reading "Same" |
| Tour label | R14, MD-02 | "Ask about a tour of the Georgetown campus", naming the destination and the campus, until a booking link exists |

## Parent questions

| Id | Question | Where M09 answers it |
|---|---|---|
| PQ-01 | What is GT School? | The h1, on the light band above both rooms |
| PQ-02 | Is it for my child? | The h1 ("gifted and talented"), the Admissions row, the proof strip's first fact, the steps line |
| PQ-03 | In person or online: what are my options? | The two rooms. This is the whole first screen and the direction's reason to exist |
| PQ-04 | Where is the campus? | The Georgetown door line, the "Where and how" row, the footer facts block |
| PQ-05 | What does a day look like? | The "The day" row, both columns |
| PQ-06 | What does it cost, and can TEFA help? | The "Tuition and access" row and the TEFA module |
| PQ-07 | How do I apply? | "How to apply": four steps and one application link per school |
| PQ-08 | Who teaches my child? | The "Guides" row and the proof strip's third fact |
| PQ-09 | How much in-person time does GT Anywhere have? | The GT Anywhere door line, the "In-person time" row |
| PQ-10 | What results does the school get, and is it accredited? | **Deferred by decision** (G0.5 items 2 and 3). The page is silent; no outcome figure and no accreditation statement exists with a register row, and "Talk to admissions" is the route |
| PQ-11 | What happens after 8th grade? | The "After 8th grade" row, deferred to admissions (Q-013) |
| PQ-12 | I am a current family, where do I go? | The header's "Current families" and the families bar before the footer |
| PQ-13 | I am not ready to apply, what can I do? | The four secondary CTAs under "Questions before you apply" |
| PQ-14 | Is GT School part of Alpha School? | The provenance line, once, on the light band under the h1 |

Deferred to the school sites by design: everything past the choice. The two door CTAs are the only route to
campus-specific detail (faculty, calendar, intensives), because the landing's job is the choice and the sites own
their own depth (DD-20, REQ-013).

## Decisions applied

| Id | How it is applied |
|---|---|
| DD-01, DD-19 | The three site faces and the layer-1 swatches only; the layer-2 roles named above; every value outside the token set listed in Departures |
| DD-04 | Cue set per room: label ("In person", "Online"), the full school name, the door line and the CTA — plus the school mark, which is the cue K3 asks for alongside the light-dark difference. No drawn icon: the first screen's one accent is the seam mark, and a glyph would be imagery from outside `shared/img/` |
| DD-06, REQ-013, DD-43 | Table rows in the deck's order, shared rows first with the value repeated in both columns; equal school columns (20, 40, 40 percent, `table-layout: fixed`); stacked blocks below 768 with the school name labelling each cell (R6) |
| DD-07, G0.5 items 2 and 3 | No outcome figure, no accreditation statement, no Cognia mark, on the page or in the JSON-LD |
| DD-08, DD-31, DD-42, RF-25, AD-11 | No photograph. The photographed state is designed in Assets and waits for Nari's written permission and for a GT Anywhere photograph that gives the two rooms parity |
| DD-10, MD-25 | Selectivity is the admissions bar and the proof strip's first fact; access is stated where the deck states it (the tuition row, the TEFA module). No wealth cue: the palette is the estate's own, the imagery is two logos, and the only ornament is an 8px accent bar |
| DD-12, DD-13 | Header: lockup, "Current families", "Contact admissions". No menu, no phone number; the number is in the footer only |
| DD-14, MD-23 | Designed at 375 first and measured there before any other row; the rooms stack Georgetown then GT Anywhere; nothing sticky; the phone layout is the DOM order |
| DD-20, DD-33 | The h1 names both ways to attend and decodes "GT" before either room does |
| DD-21 | The rooms are a `<ul>` and the run-in lines a `<ul>`; a third to fifth campus is one more `<li>` and one changed grid rule (`repeat(2, …)` in one place). The seam mark is anchored to the navy room's leading edge, so it follows the edge rather than a hard-coded 50% |
| DD-25, REQ-070 | Every application link carries `?school=`; links go only to www.gt.school, anywhere.gt.school, apply.gt.school, community.gt.school and `#compare` |
| DD-26 | Both rooms identical in markup and in treatment; the CTAs are bottom-aligned inside the pair (`margin-top: auto`) and both mark blocks carry the same padding, so the two CTAs land on one line however long either door line runs |
| DD-29 | Every screen carries a fact: the first the door lines, the second the table, the third the proof strip, the fourth the admissions bar |
| DD-38 | The fluid clamp scale and `--leading-prose` 1.5 on every multi-line string. The 300-against-400 trial is not repeated here: M03 rendered both weights on this sentence at V2 and V16 with no change in line count; M09 ships 400 |
| DD-39 | `--color-on-navy`, `--color-text-muted-on-dark` and `--color-focus-on-dark` in their proposed roles; gold is a shape colour only (RF-37), never text |
| DD-42, DD-44 | Default photograph state; the fold contract as measured, with V18 and V19 reported rather than required |
| DD-45, C24 | Footer parity: both schools get their own link, their own application link and their own mark on their own panel — Getty's own strongest two-site proof |
| MN-16 | Transform and opacity only, 200ms, `--ease-out`, `--duration-none` under reduced motion, elements and pseudo-elements |
| MD-02, R14 | The tour label names the destination and the campus |
| SE-13 | `noindex, nofollow` on the mock |
| D-015 (c) | The TEFA module is visible to everyone |
| D-039 | Escalated and undecided: no script, no input, no `data-d039` declaration; the V6 reveals the brief considered are not shipped and the page is complete at rest |
| R6 | The comparison breakpoint is 767px, the value the five earlier mocks measured |
| R8 | Under reduced motion both door lines are visible without hover, which is stricter than K4's instantaneous hover state and is the studio's declared choice |

## Taste decisions the brief did not name

| Decision | Reasoning |
|---|---|
| The seam mark is 40px **along** the colour edge and 8px across it, centred on the edge at its midpoint | The brief says "a 40px `--color-accent` mark at the colour edge (shape)" without a shape. A 40px square centred on the edge collides: on a stacked phone it would have to eat 20px of the warm room's bottom padding and 20px of the navy room's top padding, which costs 32px of a 25px fold budget at V2. 40 by 8 is the house form for a single accent mark (M03's 40 by 4 rule, M15's 40 by 3), it reads as a hinge pin on the wall the two rooms share, and it changes orientation with the edge: 8 wide by 40 tall on the vertical seam from 768, 40 wide by 8 tall on the horizontal seam when the rooms stack. `--space-3` is the 8 |
| The accent is spent once on the **whole page**, not once per screen | K3 section 5f sets one accent use per screen as a ceiling, not a quota. With two strongly coloured rooms already carrying the argument, a second gold mark anywhere below the fold would compete with the first and weaken it (Barnes, C03). The repeated rooms after the comparison therefore carry no accent. The gold inside the two brand marks is the marks' own artwork, not a design accent |
| The rooms repeat after the comparison table as two miniature rooms rather than two buttons in a row | The direction's device, used a second time where the choice is actually made, at a quarter of the height: label, name, CTA on the same two colours with the same edge. It also keeps the after-comparison CTAs equal in the same way the first screen does (Tate, C01) |
| Both rooms' type is left-aligned inside its own room, not mirrored about the seam | Mirroring would dramatise the edge and make the navy room read right-to-left against the page's reading order. Left-aligned in both, the warm room's type sits on the page's own left edge and the navy room's sits just inside the seam, so the seam reads as a shared wall rather than a fold |
| The h1 is 27 to 46px and never larger, although the masthead has room at 1920 | The contract caps `--text-3xl` at 46 and the measure at 35ch. At 1920 that leaves the right of the masthead open; the two full-height rooms below carry the width, so the screen does not read empty (V17 measured, `qa/fold.md`) |
| The compare anchor sentence sits alone in its own band, in Literata at `--text-lg` | It is the one sentence that addresses a parent who cannot choose, so it gets the page's only non-heading serif setting and a band to itself. Getty hid its equivalent in a menu (C45); this one is the first thing after the rooms and is cut by the fold on every row |
| The proof strip is the page's only other coloured band, and it is warm | "What is true of both schools" is the roof over the two rooms, so it takes the warm surface both rooms share a wall with, and the navy returns only in the footer. Light, light, warm, light, light, navy is the page's rhythm |
| The whole room is the hover and focus target for the door line, not just the CTA | A reveal that needs the pointer on a 44px button is a reveal most readers never see. The room is 640px wide at V14; entering it at all reveals its line, and tabbing to its CTA does the same through `:focus-within` |
| The utility links stack under 370px rather than shrinking | Below 370 the lockup at its 27px floor and two 12px links do not fit on one line. Stacking gives an 88px header at V1 and V18; shrinking the mark below 27px is not allowed (K12 G4) |
| Sources line twice | Under the comparison table and under the proof strip, as `copy.md` instructs, so neither block of facts travels without its source |

## Self-check

**Grep checks** (from the repo root, 2026-09-11, final build): `<form` 0; `<input` 0; `<script` 1 (the JSON-LD
block); hosts in `index.html` and `styles.css`: www.gt.school, gt.school, anywhere.gt.school, apply.gt.school,
community.gt.school, schema.org only; raw hex in `styles.css`: 0; `transition:` declarations: 1 (opacity and
transform, both with `var(--duration-base)`); `vh` outside `@supports`: 0 (`svh` only, inside the
`@supports (height: 100svh)` guard); digits in visible text: 09, 10, 10,400, 2026, 270, 512, 8, 9, 90, 9481 —
every one on the checker's whitelist; `advis` in visible text: none (the `data-type="advisor"` attribute value
is the spec's, not the page's); `index.html` 16,329 bytes plus `styles.css` 24,531 bytes, 40,860 in all.

**Copy check**: all 57 fixed slots of `copy.md` sections 0 to 9 found verbatim by string match (the h1, the
provenance line, both labels, names, lines and CTAs, the compare anchor, the caption, all eighteen table cells,
the TEFA module, the four proof facts, the sources line, the steps and their two links, the four secondary CTAs,
the families slot, the footer facts block and phone number, the skip link, "Two ways to attend", "Compare the
two schools", "Questions before you apply"). Words on the page that do not appear anywhere in `copy.md`: **none**.

**First screen at 390 by 844 and at 1280 by 720**: both door CTAs visible without scrolling at every fold row
(table above); the header, the h1 and the provenance line are the only things above them.

**Reduced motion**: the runner's emulated run at V14 reports every computed transition and animation duration 0s
on every element and pseudo-element, and both door lines render visible without hover.

**Forced colours**: checked at V14 (`qa/forced-colors.jpg`). The two rooms' backgrounds are replaced, as
expected; the column boundary still reads as a drawn line (each room's 1px border becomes `CanvasText`), the
seam mark reads (`CanvasText`), the GT School mark reads as its own navy-and-gold artwork on `Canvas`, and the
GT Anywhere mark keeps its navy plate through `forced-color-adjust: none` so its white lettering is still
legible. Focus rings fall back to a 3px `CanvasText` outline with the box-shadow band removed.

**Console**: no errors on load, at every row.

**Runner passes**: five. Pass 1 (all 19 rows green) showed two voids inside each room at V14 and V16, a
provenance line crowding the h1, and a mark block whose padding differed between the two rooms so their CTAs
missed each other by 8px. Pass 2 fixed those and lost the band cut at V10 and the breathing room at V5. Pass 3
rebuilt the compact tiers, gave the landscape row its lines back inside the rooms, and met the runner's new ink
test for the next band. Pass 4 corrected the V2 cut (the label row's mark padding had pushed the run-in band 1px
past the edge) and reclaimed 24px at the binding row. Pass 5 capped the room stretch above 1000px of viewport
height after reading the V11 capture, and fixed a text link whose arrow floated away from a wrapped label at
375. Every pass was reviewed against the screenshots, not the numbers alone.

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M09-two-places`

```
## M09-two-places: 36 pass, 0 fail

check-mocks: OK
```

### `python3 1_spec/tools/check-claims.py`

```
## 0_plan/mockups/M09-two-places/index.html
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

### `node 0_plan/tools/shots.mjs 0_plan/mockups/M09-two-places`

```
| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 321 | 350 | 504 | 658 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 283 | 312 | 450 | 580 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 286 | 315 | 452 | 583 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 286 | 315 | 452 | 583 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 294 | 448 | 602 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 294 | 528 | 763 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 287 | 316 | 454 | 584 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 296 | 450 | 604 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 323 | 556 | 791 | yes | report: page height 6679 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 173 | 290 | 290 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 229 | 267 | 553 | 553 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 235 | 272 | 525 | 525 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 296 | 584 | 584 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 317 | 582 | 582 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 316 | 542 | 542 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 300 | 346 | 699 | 699 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 346 | 759 | 759 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 344 | 394 | 540 | 670 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 250 | 288 | 442 | 442 | yes | report: scrollWidth 1024 |

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
| V1 | yes | ul.place-lines ink 692 to 865 |
| V2 | yes | ul.place-lines ink 598 to 771 |
| V3 | yes | ul.place-lines ink 601 to 774 |
| V4 | yes | ul.place-lines ink 601 to 775 |
| V5 | yes | ul.place-lines ink 636 to 786 |
| V6 | yes | section.band ink 780 to 927 |
| V7 | yes | ul.place-lines ink 602 to 776 |
| V8 | yes | ul.place-lines ink 638 to 788 |
| V9 | yes | section.band ink 808 to 955 |
| V10 | yes | p.place-line ink 300 to 370 |
| V11 | yes | section.band ink 782 to 2517 |
| V12 | yes | section.band ink 754 to 2412 |
| V13 | yes | section.band ink 705 to 830 |
| V14 | yes | section.band ink 703 to 829 |
| V15 | yes | section.band ink 631 to 758 |
| V16 | yes | section.band ink 836 to 963 |
| V17 | yes | section.band ink 896 to 1023 |
| V18 | no | nothing visible starts below the last CTA and crosses the bottom edge |
| V19 | yes | ul.place-lines ink 548 to 656 |

## Result: all required rows pass
```
