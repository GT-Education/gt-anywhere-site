# M09 Two Places, rationale

| Field | Value |
|---|---|
| Mock | M09 "Two Places" (new direction), brief `0_plan/kb/briefs/M09.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1 |
| Lens order | L1 objective, L2 continuity, L3 mission, L4 exclusivity |
| Built | 2026-09-11 by a Fable design-engineer fork. `0_plan/tools/shots.mjs` measured five build passes; the captures it wrote under `qa/` were reviewed with the Read tool between passes and the layout changed four times because of what they showed (Runner passes) |
| Iteration 2 | 2026-09-11, after `ensemble/critic-fable-M09.md` (Composition 3, Iterate) and `ensemble/critic-astra-M09.md` (Pass). **Both door lines are visible at rest at every width** and the V2 hover reveal is withdrawn, which closes the 85 to 200px reserved void; the two rooms now share one subgrid row structure, so the leftover screen height lands below the mark as the room's floor and the two CTAs are equal in height as well as aligned; the whole room is one link; the laptop rows under 768px tall give up a ring of padding so the compare sentence reaches the first screen; the navy room and the navy footer take K3's two-colour ring; the rooms gain a ceiling hairline; the seam mark is withdrawn in forced colours; both footer marks step 27 to 32px with the rest; "in-person" is bound against a hyphen break; the shell blocks carry their `1_spec/04` component names; and every figure both critics could not reproduce is corrected below against a fresh measurement |
| Files | `index.html`, `styles.css` (links `../shared/tokens-v2.css`, `../shared/fonts.css`), this file; logos from `../shared/img/`. `qa/` holds `fold.md` and, from the `--all` run, **a viewport capture for all nineteen rows** (`V1.jpg` to `V19.jpg`, so V10 and V17, the two rows this direction is argued on, are in the set), the full pages `V2-full.jpg` and `V14-full.jpg`, `V2-rootx2.jpg`, `focus-cta.jpg` (warm room), **`focus-cta-navy.jpg`** (the navy room's own CTA), `focus-plate.jpg`, `focus-footer.jpg`, `focus-footer-plate.jpg`, `forced-colors.jpg`, **`reduced-motion.jpg`** (both door lines visible, nothing hovered or focused) and **`dd21-five-1280.jpg`** (the five-door test below). The last three are taken by the same Playwright build as the runner; the runner itself takes the other captures |
| State | Default state: no photograph (DD-42 option a, RF-25 pending), no JavaScript (D-039 escalated and undecided, so no `data-d039` declaration and no V6 reveal), and since iteration 2 **no motion at all**: the door state is V1, instant. The page is complete at rest, in every sense the rubric uses the word |
| Claims on the page | 90th percentile (CR-011), $10,400 (CR-021), four in-person or intensive weekends (CR-032), 9 to noon and two hours (CR-033), two to three hours (CR-034), weekly check-ins (CR-035). **CR-022** ("The $10,474 TEFA voucher fully covers the $10,400 GT Anywhere tuition") is the row behind the tuition cell's "can apply the TEFA voucher toward the full amount" and the TEFA module's "can cover tuition for eligible families", so it is relied on without its figure being printed. **All seven rows are "Unverified, public"** in `0_plan/12-claims-register.md`: allowed on a mock, blocked for production (REQ-022, CONTRACT.md section 7). M09 adds no figure and rewords none |

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
interaction deep inside a menu (C45, C02), whereas M09's compare anchor is the first thing on the second screen and
is on the first screen at every laptop row (measured row by row under Fold). **Tate's hero** (`tate-1440.jpg`: "Book now" and "Free for Members" side by side,
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
| Composition | Header 56 on `--color-bg`; h1 across ten columns and the provenance line on a light band; below it two columns to the fold, Georgetown on `--color-surface` left, GT Anywhere on `--color-navy` right, 6 and 6 with no gutter from 1024 (full bleed, the colour edge is the divider); 24px margins from 768 to 1023 (`--inset`); stacked warm then navy below 768. Each room carries label, name, line, CTA and the school mark | Met from 768, with two named changes: the line is **visible**, not reserved (Departures, and the void it closed); and the mark closes the room's content block rather than sitting on the room's floor — where the screen is taller than the content the leftover is the floor **below** the mark. 1440 by 900 and 1920 by 960 are the two matrix rows where that happens: the floor measures 118 and 178px there, of which 53 and 113 is the screen's leftover and the rest is the room's own bottom padding. Below 768 the mark moves into the label row (Departures, with the measurement) |
| Typography | Contract roles: h1 Literata 400 `--text-3xl`; door names Literata `--text-xl`; labels Inter Tight 500 `--text-xs` uppercase 0.08em, `--color-text-muted` on warm and `--color-text-muted-on-dark` on navy; door lines `--text-base` at `--leading-prose` 1.5; buttons Inconsolata 600 `--text-btn` uppercase; figures Inconsolata 600 `tabular-nums` in the sentence at the sentence's size | Met |
| Color and surface | Warm `--color-surface` with `--color-text` (16.10); cool `--color-navy` with `--color-on-navy` (14.58); the cue is the light-dark difference **plus** the label and the mark, never hue (K3 `cvd-simulation.md`: the two pale tints are 1.01 apart and stay so under all three simulations, so no tint pair carries meaning anywhere on this page). One accent use on the first screen and on the whole page: a 40px `--color-accent` mark at the colour edge. CTAs: `--color-navy` fill on warm, `--color-on-navy` fill with `--color-text` on navy. Focus `--color-focus` on warm and light, `--color-focus-on-dark` on navy, K3's two-colour ring on the header where it meets the rooms and on the footer's light logo plate | Met |
| Imagery | Default state: the two school marks only, `gt-school-logo-h.svg` on the warm room and `gt-anywhere-logo-h.svg` on the navy room, each on its correct panel colour (`copy.md` section 8), both eager, 27px tall on phones and 32px from 768. The photographed state is designed, not shipped (Assets) | Met (default state) |
| Motion | **V1, instant.** The brief offers V2 as "Considered"; it was built, measured and withdrawn, because reserving the line's space and leaving it empty cost 85px at 1280, 140 at 1440 and 200 at 1920 of hole between the door name and the CTA, and left a non-hovering reader on a laptop with no fact on the first screen. Both lines are now simply visible at every width, so there is nothing to reveal: `styles.css` carries no `transition`, no keyframes and no animation. V6 considered for the steps and secondary CTAs and not shipped (needs the D-039 script). V10 anchor scroll native inside `no-preference`. Reduced motion: both lines visible (`qa/reduced-motion.jpg`), every computed duration `--duration-none` | Departure, stated: V1 instead of V2 |
| Copy | Sections 0 to 8 verbatim; 57 fixed slots confirmed by string match and **no word on the page outside `copy.md` sections 0 to 9** (Self-check). Skip link and the run-in use of the door names are section 9 | Met |
| Conversion | The two rooms are the doors on the first screen, both CTAs above the fold at all 16 fold rows; the compare anchor sentence is the first thing on the second screen; comparison table with the repeated values (DD-43); the rooms repeated in miniature after the table; TEFA module; proof strip; steps; four secondary CTAs with the R14 tour label; current families; footer | Met |
| Acceptance | Every on-navy pairing at or above 4.5 (table below); focus visible on both rooms and captured on both — `qa/focus-cta.jpg` for the warm room and `qa/focus-cta-navy.jpg` for the navy room's own CTA, which carries K3's two-colour ring (CONTRACT.md section 4); reduced motion shown, not only computed (`qa/reduced-motion.jpg`); the matrix passes on all 19 rows with the next band cut on every row except V18. DD-38, DD-39, MN-16 and D-039 named below | Met |

## Fold: the brief's estimate, the sum designed to, and the measured bottom

Method: the contract's method with this build's measured component heights. The room block from 768 is
`1px border + padding + label 15 + 8 + name 32 + 8 + line + 24 + CTA 44`, then `32 + mark 40 + padding + 1px`
below it; on phones under 780px tall the compact door rule applies and the block is
`1px + padding + label row 27 (the mark sets it) + 8 + name + gap + CTA 44 + padding + 1px`.

| Row | Viewport, limit | Brief's estimate | Designed to (this build) | Measured (`qa/fold.md`) | Spare |
|---|---|---|---|---|---|
| V2 | 375 by 629, **605** | 529 | 56 + masthead (8 + h1 219 + 8 + prov 21 + 16 = 272) + warm room 131 + navy room 131 = **590** | **580** | 25 |
| V5 | 414 by 715, **691** | 619 | 56 + masthead (16 + 193 + 8 + 21 + 16 = 254) + warm room 155 + navy room 155 = **620** | **602** | 89 |
| V10 | 750 by 342, **318** | 313 (contract recipe) | 56 + masthead (8 + h1 83 at `--text-xl` + 4 + prov 22 + 8 = 125) + room to the CTA (1 + 8 + 15 + 8 + 25 + 8 + 44 = 109) = **290** | **290** | 28 |
| V14 | 1280 by 720, **696** | 464 | 56 + masthead (24 + 199 + 16 + 22 + 24 = 285) + room to the CTA (1 + 32 + 15 + 8 + 32 + 8 + line 53 + 24 + 44 = 217) = **558** | **558** | 138 |
| V16 | 1440 by 900, **876** | 528 | 56 + masthead (32 + 212 + 24 + 22 + 48 = 338) + room to the CTA (1 + 64 + 15 + 8 + 32 + 8 + line 54 + 24 + 44 = 250) = **644** | **646** (2px of rounding in the label and name boxes) | 230 |

The brief's four sums assume an h1 of two lines at V14 and V16 and five at V2; measured it is four and seven, so
every sum here is larger than the brief's and every row still clears its limit. The V5 estimate of 619 also
assumed the door lines sat above the CTAs at that height; measured, the full-room form costs **763 of 691** there,
so V5 takes the compact door rule (Departures, with the four rows measured).

**Every fold row, second CTA bottom against the limit** (`qa/fold.md`, the run pasted under Self-check): V1 658
of 716 (header 88, the utility links stack below 370px); V2 580 of 605; V3 583 of 640; V4 583 of 635; V5 602 of
691; V6 763 of 815 (the lines sit inside the rooms at that height); V7 584 of 657; V8 604 of 715; V9 791, the
emptiness row, **page height 6,679**; V10 290 of 318; **V11 553 of 1000**; **V12 525 of 1170**; V13 584 of 744;
V14 558 of 696; V15 526 of 624; V16 646 of 876; V17 646 of 936; V19 434 of 552 (zoom row, reported: scroll width
1024). Sixteen fold rows, sixteen passes.

### What crosses the bottom edge, and where the compare sentence is

The runner's false-floor test is the contract's own reserve: below the last door CTA, visible **content** — text,
an image or a painted hairline, never a container's fill — must reach into the bottom 24px, and more content must
lie beyond the edge. The first screen is built so that the rooms stop `--space-8` (64px) above the fold and the
compare sentence lands in that reserve; where the rooms' own content was too tall for it, the laptop tiers give up
a ring of padding until it fits (Departures). Measured on the built page, row by row:

| Rows | What crosses the edge (`qa/fold.md`, "Next band evidence") | The compare sentence |
|---|---|---|
| V1 to V5, V7, V8, V19 | `ul.place-lines`, the run-in door lines: cut at V2 (623 to 643), V3, V4 and V7; reaching 737 of 740 at V1, 705 of 715 at V5, 572 of 576 at V19 | Below the first screen, one band down |
| V6, V9 | The compare sentence itself, cut at 810 to 840 of 839 and 838 to 868 of 844 | Cut by the edge |
| V10 | `p.place-line`, the Georgetown line inside its own room, 325 to 345 of 342 | Below the first screen |
| V11, V12 | The comparison table below the sentence: cut at 1012 to 1032 of 1024; reaching 1186 of 1194 | **Fully visible** on the first screen (688 to 720 of 1024; 660 to 693 of 1194) |
| V13 | The compare sentence, ending exactly on the edge at 768 of 768 | Fully visible, its last pixel on the fold |
| V14 to V17 | The compare sentence, cut: 686 to 721 of 720; 629 to 664 of 648; 866 to 901 of 900; 926 to 961 of 960 | Cut by the edge |
| V18 | None. 320 by 256 is the WCAG reflow row; the fold rule does not apply to it (DD-44) | Far below |

So the claim iteration 1 made — "cut by the fold on every row" — is corrected. Counted on the built page: the
compare anchor is **cut by the bottom edge on six rows** (V6, V9 and the four laptop rows V14 to V17), sits
**fully on the first screen on three** (V11, V12, V13), and is **one band below the fold on the other ten** —
every phone row, the landscape row and the two reported rows — where what crosses the edge is the run-in door
lines or, at V10, a door line inside its own room. Both are text a parent reads, which is the point of the test.

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
| `--color-focus-on-dark` | The **outer band** of K3's two-colour focus ring inside the navy room and on the navy footer, with `--color-navy` as the inner band (`--color-focus` is 1.69 against navy and fails) | DD-39 (a), RF-07 |
| `--duration-none` | The reduced-motion block, elements and pseudo-elements. It is now the only motion token in the file: with the V2 reveal withdrawn there is nothing to ease, so `--ease-out` and `--duration-base` are no longer used | MN-16 (a), RF-53, R8 |

**D-039 (scripts and inputs in mocks) is Escalated to Johnny and undecided.** M09 ships no script but the JSON-LD
block, no input, no form, and makes no `data-d039` declaration. The brief's V6 reveal on the steps and the
secondary CTAs is therefore not shipped; those sections are complete and readable at rest, and nothing on the
page depends on JavaScript. Nothing on the page moves at all, so no move depends on D-039 either.

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
| `--color-focus-on-dark` against `--color-navy` | The **outer** band of the two-colour focus ring inside the navy room and on the navy footer | **14.58** | 3 non-text |
| `--color-navy` against `--color-focus-on-dark` | The two bands of that ring against each other, so whichever ground the ring lands on, one band passes (K3 F10) | **14.58** | 3 non-text |
| `--color-navy` against `--color-on-navy` fill | The ring's inner band on the navy room's off-white CTA | **14.58** | 3 non-text |
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
| `--color-border` against `--color-bg` | The rooms' ceiling hairline and the floor rule under them, table rules, step rules (decorative only; no rule carries meaning alone, and the ceiling's job is to draw an edge the 1.10 tint step could not) | 1.56 |
| `--color-border` against `--color-navy` | The same hairline where it crosses the navy room's ceiling | 8.90 |
| `--color-border` against `--color-surface` | The same hairline against the warm room below it | 1.42 |

## Motion spec

| What animates | Trigger | Duration token | Easing token | Reduced-motion behaviour |
|---|---|---|---|---|
| Nothing | | | | Nothing to zero; both door lines are visible at rest at every width, which is what R8 asks the reduced-motion state to show (`qa/reduced-motion.jpg`) |

**The door state is V1, instant (K4 section 8.1, "Anywhere").** The brief offers V2, the supporting-line reveal,
as "Considered", and iteration 1 built it: the line rested at opacity 0, 4px low, and rose over 200ms on hover or
focus-within of the whole room, with its box in flow so nothing shifted. It was withdrawn on measurement, for
three reasons and not on taste alone. (1) The reserved-but-empty box **was** the composition at every laptop row:
the gap between the door name and the CTA measured 110px at 1024, 85 at 1280, 140 at 1440 and 200 at 1920, and the
studio critic ruled it a void rather than composed space, with `qa/focus-cta.jpg` as the evidence — the warm room
with its line showing read finished while the navy room at identical geometry read unfinished. (2) It cost
nothing to close: with the lines made visible and nothing else touched, the second CTA landed at 584, 582, 542,
699 and 759 at V13 to V17 — to the pixel what the reserved form measured, because the box was already in flow.
(V14 to V17 then moved to 558, 526, 646 and 646, but from the floor and padding changes below, not from the line.) (3) DD-29 asks every screen to
carry a fact; at rest, on a laptop, the first screen carried none. A reveal that most readers never trigger is
not a reveal, it is a hiding place.

What replaces it is not a smaller move but **no move**: `grep -c 'transition:' styles.css` returns 0, there are no
keyframes and no `animation`. Hover and focus on a door are the Door card's own states from `1_spec/04` section 3
("colour and underline, no lift or expansion"): the whole room is one link, so hovering anywhere in it underlines
that room's CTA label, and focusing it draws the ring. Elsewhere hover changes only `text-decoration`.

Below 780px of viewport height the contract's compact door rule moves both lines below the second CTA as run-in
paragraphs on `--color-bg`, each opened by its door name, so no line is ever read against the wrong room's colour
— on phones (two thirds of sessions, DD-14) as everywhere else, the lines are visible without any interaction.

## Assets

| Asset | Where | Alt text | Consent status | Fallback |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` | Header lockup; the warm room's mark; the footer's light plate | "GT School" | Brand mark, no consent question | None needed |
| `../shared/img/gt-anywhere-logo-h.svg` | The navy room's mark; the footer's navy panel | "GT Anywhere" | Brand mark, no consent question | None needed |

Both marks are `loading="eager"` with `width`/`height` attributes. **Every mark on the page — the header lockup,
both room marks and both footer marks — renders 27px tall below 768 and 32px from 768**, measured in the browser
at 390 by 844 and 1440 by 900, not asserted from the stylesheet. That is K12 G4's floor ("never below 27px") on
phones and K12 V2's "32px at 1440" on desktop. Iteration 1's blanket claim overlooked the footer, where the GT
School mark was 27px at every width and the GT Anywhere mark 32px at every width — below V2's desktop figure for
one school and unequal between the two, which `mockups/shared/CONTINUITY.md` recorded as a defect for M09 and
M15. Both footer marks now step with the rest, so the two schools' marks are the same height wherever they sit. The GT School mark is navy-and-gold artwork and only ever appears on a
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
| Below 768 the school mark sits in the label row, not at the base of the room | **Corrected in iteration 2: the first draft's reason does not reproduce.** With the mark moved to the base of a stacked room the second CTA lands at **591 of 605** at V2, which fits — not the 656 the draft claimed. What that form actually costs is the end of the first screen: the navy mark then ends at **626 of 629**, the run-in band's first line starts at 645, and the screen closes on a logo three pixels above the edge instead of on a sentence a parent is reading; the warm room's mark also lands **6px** from the seam mark. So the departure stands on composition, not on the fold arithmetic: in the label row the mark reads as the room's nameplate opposite its category label, costs 12px (the row grows from the 15px label to the 27px mark), and the fold sum is 580 of 605. The cue the brief asks for — label **and** mark, never hue — is intact in both states | Brief compliance, Composition |
| Compact door rule applied at 780px of viewport height, not 700 | **Measured again in iteration 2, and the first draft's 742 of 691 was wrong.** Defeating the rule and rendering the full-room form (lines inside the rooms, the non-compact paddings) the second CTA lands at **763 of 691 at V5 (over by 72), 766 of 715 at V8 (51), 818 of 716 at V1 (102) and 793 of 657 at V7 (136)** — every phone row between 700 and 780 tall overruns, which is why the threshold is 780 and not the contract's 700. It is also the value M15 and M03 measured for their own forms. Three of these four reproduce the studio critic's independent figures exactly; his V7 (761) is the one that does not, and 793 is what this build measures — V7's h1 is 7 lines where V5's is 6, so its room must sit 30px lower | Fold table |
| The compact rule also fires on wide viewports under 600px tall (V19, 1024 by 576) | At that height the rooms with their lines end at 616 of a 576 viewport, so nothing ink-bearing crossed the bottom edge and the page read as a false floor. With the lines below the second CTA the run-in band crosses at 548 | Fold table |
| V10 keeps its lines **inside** the rooms, under the CTA | The contract's landscape recipe puts the lines below the fold. Putting them in a shared band below both rooms would place the Georgetown line under the navy room, and in a colour-edge design a line must never be read against the wrong room. Inside the room the line is still below the fold and it is what cuts the fold at V10 | Motion, Fold table |
| The h1 steps down one token to `--text-xl` at V10 | The contract's own landscape recipe (section 2), which allows the step on that row where the direction's first screen cannot otherwise reach the limit. At `--text-3xl` the sentence is 3 lines of 28px and the second CTA lands past 318 | h1 |
| The rooms are full bleed below 768 and from 1024, inset 24px only between 768 and 1023 | The brief's own composition ("24px margins" is stated for 768 to 1023 only). Full bleed is the stronger reading of "the colour edge is the divider" at the two widths where the edge has the screen to itself, and on phones — where two thirds of sessions are — the colour reaching both edges is what makes the two rooms read as rooms | Taste decisions |
| Above 1000px of viewport height the rooms are left at their content height instead of stretching to the fold | Measured at V11 (768 by 1024) and V12: a room stretched over a 1024px screen would carry a floor of about 300px under its mark, which is no longer a floor. Below 1000px the rooms still run to within `--space-8` of the fold, which is the brief's "columns extend". On the tall rows the comparison band carries the continuation instead, and both rows still report the next band cut | Fold table |
| A 1px `--color-border` rule opens the band under the rooms | It is the floor line of the two rooms and the opening of the second screen, and it guarantees that something ink-bearing crosses the viewport's bottom edge on every laptop row rather than 48px of empty padding | Fold table |
| The two rooms carry a 1px border in their own colour | Invisible in normal rendering (navy on navy, warm on warm) and the whole point in forced colours, where both backgrounds are replaced and the border becomes `CanvasText`: the column boundary is then a drawn line rather than a colour change that no longer exists (`qa/forced-colors.jpg`) | Forced colours |
| Values outside the token set | 1px rules and borders; the 40 by 8px seam mark; 2px focus bands at 2px offset and the 4px outer band of the two-colour ring; the 44px target floor; 0.08em letter-spacing on labels; `35ch`, `40ch`, `30ch`, `48ch` measures; `text-underline-offset`; the breakpoints 370, 600, 768, 900, 1024, 1280, 1440 and the height queries 479, 599, 699, 767, 779, 1000. No raw hex: `grep -oE '#[0-9a-fA-F]{3,8}' styles.css` returns nothing | DD-19 |
| The door line exists twice in the markup | The compact door rule needs the line in two places. Exactly one copy is ever rendered: the other is `display: none`, which removes it from the accessibility tree as well as the page, so no reader meets it twice | Motion |
| **V1 instead of the brief's V2 door-line reveal** | The brief lists V2 as "Considered", which is a permission and not an instruction (K4 section 8.1 offers V1 for the same component). Built and measured, the reveal's reserved space read as a void at every laptop row and left the first screen factless at rest. Both lines are visible at every width and nothing on the page moves | Motion spec |
| **From 768 the two rooms share one row structure (CSS subgrid)** | `.places` declares six rows — label, name, line, CTA, mark, floor — and each room is a subgrid spanning them. The pair is then equal by construction rather than by luck: the line row is as tall as the taller line, so the CTAs and marks sit on one line at every width, and the CTA row is as tall as the taller button, which is what makes the two buttons **the same height** at 768 where "Explore the Georgetown campus" wraps to two lines and "Explore GT Anywhere" does not (53px against 44px before; 53 and 53 now). The alternative, an auto margin above the CTA, aligned the bottoms but not the heights, and sent every spare pixel into the gap above the button. Subgrid has been Baseline "widely available" since 2026 (Chrome 117, Safari 16, Firefox 71); where it is not supported the declaration is dropped and each room stacks the same five parts in the same order in its own grid rows — what degrades is the shared alignment, not the layout | Composition, DD-26 |
| **The leftover screen height is the room's floor, below the mark, not a gap above the CTA** | Same measurement, the other half. At 1440 by 900 and 1920 by 960 the first screen is taller than the rooms' content by 53 and 113px. As a gap above the CTA that was the void the critic named; as a floor under the mark it is the room's own margin, and the four parts read as one block (`qa/V16.jpg`, `qa/V17.jpg`) | Composition |
| **The whole room is one link** | `1_spec/04` section 3, Door card: "Whole card is one link with a full-name label". Iteration 1 made the room hover-reactive across about 94 percent of its area and click-inert. A stretched pseudo-element on the CTA (`content: ''; position: absolute; inset: 0`) is three lines of CSS, keeps one tab stop and one accessible name, and is now verified by hit test: `document.elementFromPoint` returns the room's own link at twelve sampled points across both rooms at 1280, 1920 and 375. The same three lines apply to the repeated rooms after the comparison, which are the same component | Craft, Objective |
| **Laptop rows under 768px tall give up rings of padding (two tiers, at 767 and 699)** | The first screen is built to stop `--space-8` above the fold so the compare sentence lands in that reserve. Measured, the untrimmed first screen overran the reserve by 47px at both 1280 by 720 and 1366 by 648, and the sentence fell below the edge with only the floor rule showing — Astra's finding at V14, which holds at V15 too. The first tier (under 768 tall) takes the room's padding from 48 to 32 and the mark's margin from 32 to 24; the second (under 700 tall) takes the room to 16 and tightens the line's margin. The h1 is never resized to buy the space | Fold |
| **A `--color-border` hairline along the rooms' ceiling** | Against the masthead the navy room's ceiling is a 13.88 step and the warm room's is 1.10 (the studio critic's 12.63 is navy against the warm surface, which is the vertical seam, not the ceiling; the ruling stands either way), so the navy read as an object and the warm as a tint. The hairline is the weight the page already uses for the floor rule directly under the rooms, so the pair now sits between a ceiling and a floor. It is painted on the 1px border the rooms already carry, so nothing moves. Stacked, only the warm room takes it: the navy room's ceiling there is the warm room, and a grey hairline between two rooms would be a third colour in the seam | Colour and surface |
| **The seam mark is withdrawn in forced colours** | As `CanvasText` it became a solid blob sitting on the `CanvasText` column rule and read as a swelling in the divider rather than as a mark. It carries no meaning (`aria-hidden`, decorative), so the honest forced-colours state is the drawn boundary alone (`qa/forced-colors.jpg`) | Forced colours |
| **"in-person" is bound by a `white-space: nowrap` span, not a non-breaking hyphen** | At 1440 the GT Anywhere line broke as "and four in-" / "person weekends", in the mock's own key sentence. A non-breaking hyphen would change the character and break the verbatim match against `copy.md`; a span leaves the string identical. It is the same job the h1's two `&nbsp;` already do | Typography |

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
| DD-21 | **Answered in colour, not only in markup.** The light-dark axis does not encode Georgetown against Anywhere; it encodes **in person against online**. So N campuses are N warm rooms beside the one navy room, the seam mark sits where the axis changes rather than at the middle of the list, and nothing about the thesis has to be renegotiated when a second campus opens ("expanding nationwide", fact 4). Structurally it is one more `<li>` plus the column rule — which lives in **two** places, `styles.css` `.places` at 768 and the landscape branch, not one as the first draft said — and a `.seam-mark` span, which is a child of the room on the online side of the axis. Measured at five options on the built page (`qa/dd21-five-1280.jpg`, four warm rooms and one navy, taken by cloning the warm room three times and setting `repeat(5, …)`): at **1280 by 720** the columns are **256px**, every CTA label wraps to **three lines**, and all five CTAs land at **755 against a 696 limit** — over by 59, so the five-door first screen needs shorter labels, a different first-screen budget, or two rows of doors. (The studio critic measured 779 of 696 for the same test on iteration 1; 755 is the same test on this build, which is 24px shorter because the rooms gave up a ring of padding at that row.) At **1440 by 900** the same five fit: 288px columns and the CTAs at **846 of 876**. At 768 the five columns are 144px and the labels take four lines, which is where the component should switch to a stacked list. The honest reading is that the *design* scales to five and the *first screen* scales to five only from about 1440 up |
| DD-25, REQ-070 | Every application link carries `?school=`; links go only to www.gt.school, anywhere.gt.school, apply.gt.school, community.gt.school and `#compare` |
| DD-26 | Both rooms identical in markup and in treatment. From 768 the pair shares one subgrid row structure, so the two CTAs land on one line **and are the same height** however either door line or either label wraps — measured 53px and 53px at 768, where the Georgetown label takes two lines and the Anywhere label one; before, the bottoms aligned at 553 and the heights were 53 against 44 |
| DD-29 | Every screen carries a fact **at rest**: the first the two door lines, now visible without hover at every width (this is what the withdrawn reveal was costing); the second the table; the third the proof strip; the fourth the admissions bar |
| DD-38 | The fluid clamp scale and `--leading-prose` 1.5 on every multi-line string. The 300-against-400 trial is not repeated here: M03 rendered both weights on this sentence at V2 and V16 with no change in line count; M09 ships 400 |
| DD-39 | `--color-on-navy`, `--color-text-muted-on-dark` and `--color-focus-on-dark` in their proposed roles; on navy the focus ring is K3's two-colour ring (navy inner band, `--color-focus-on-dark` outer), the treatment CONTRACT.md section 4 specifies for that surface and for anything straddling it; gold is a shape colour only (RF-37), never text |
| DD-42, DD-44 | Default photograph state; the fold contract as measured, with V18 and V19 reported rather than required |
| DD-45, C24 | Footer parity: both schools get their own link, their own application link and their own mark on their own panel — Getty's own strongest two-site proof |
| MN-16 | Nothing animates: no `transition`, no keyframes, no `animation`. `--duration-none` still governs the reduced-motion block for elements and pseudo-elements, so a future move inherits the rule |
| MD-02, R14 | The tour label names the destination and the campus |
| SE-13 | `noindex, nofollow` on the mock |
| D-015 (c) | The TEFA module is visible to everyone |
| D-039 | Escalated and undecided: no script, no input, no `data-d039` declaration; the V6 reveals the brief considered are not shipped and the page is complete at rest |
| R6 | The comparison breakpoint is 767px, the value the five earlier mocks measured |
| R8 | Both door lines are visible without hover in **every** state, reduced motion included, which is the end point R8 asks for; `qa/reduced-motion.jpg` is the capture, not a duration table |
| 1_spec/04 section 3 | The shell blocks carry their component names as `data-component`: Header (landing), Door list, Door card (four of them, the two first-screen rooms and the two repeated after the comparison), Comparison table, TEFA module, Proof strip, Facts block, Footer. Blocks this page adds that the inventory does not name: the masthead band (h1 and provenance), the compare-anchor band, the application steps block, the secondary-CTA link list and the current-families band. They are candidates for the inventory, not silent inventions |

## Taste decisions the brief did not name

| Decision | Reasoning |
|---|---|
| The seam mark is 40px **along** the colour edge and 8px across it, centred on the edge at its midpoint | The brief says "a 40px `--color-accent` mark at the colour edge (shape)" without a shape. A 40px square centred on the edge collides: on a stacked phone it would have to eat 20px of the warm room's bottom padding and 20px of the navy room's top padding, which costs 32px of a 25px fold budget at V2. 40 by 8 is the house form for a single accent mark (M03's 40 by 4 rule, M15's 40 by 3), it reads as a hinge pin on the wall the two rooms share, and it changes orientation with the edge: 8 wide by 40 tall on the vertical seam from 768, 40 wide by 8 tall on the horizontal seam when the rooms stack. `--space-3` is the 8 |
| The accent is spent once on the **whole page**, not once per screen | K3 section 5f sets one accent use per screen as a ceiling, not a quota. With two strongly coloured rooms already carrying the argument, a second gold mark anywhere below the fold would compete with the first and weaken it (Barnes, C03). The repeated rooms after the comparison therefore carry no accent. The gold inside the two brand marks is the marks' own artwork, not a design accent |
| The rooms repeat after the comparison table as two miniature rooms rather than two buttons in a row | The direction's device, used a second time where the choice is actually made, at a quarter of the height: label, name, CTA on the same two colours with the same edge. It also keeps the after-comparison CTAs equal in the same way the first screen does (Tate, C01) |
| Both rooms' type is left-aligned inside its own room, not mirrored about the seam | Mirroring would dramatise the edge and make the navy room read right-to-left against the page's reading order. Left-aligned in both, the warm room's type sits on the page's own left edge and the navy room's sits just inside the seam, so the seam reads as a shared wall rather than a fold |
| The h1 is 27 to 46px and never larger, although the masthead has room at 1920 | The contract caps `--text-3xl` at 46 and the measure at 35ch. At 1920 that leaves the right of the masthead open; the two full-height rooms below carry the width, so the screen does not read empty (V17 measured, `qa/fold.md`) |
| The compare anchor sentence sits alone in its own band, in Literata at `--text-lg` | It is the one sentence that addresses a parent who cannot choose, so it gets the page's only non-heading serif setting and a band to itself. Getty hid its equivalent in a menu (C45); this one is the first thing after the rooms, and the first screen is sized so that it lands in the reserve above the fold: cut by the edge on ten rows, fully visible on three, one band down on the phone rows (the row-by-row table under Fold) |
| The proof strip is the page's only other coloured band, and it is warm | "What is true of both schools" is the roof over the two rooms, so it takes the warm surface both rooms share a wall with, and the navy returns only in the footer. Light, light, warm, light, light, navy is the page's rhythm |
| The whole room is the link, not just the CTA | The spec asks for it (`1_spec/04` section 3) and iteration 1's version of this row argued for a hover target the size of the room while leaving the click target the size of a button — a 640 by 354 panel that reacted to the pointer and did nothing. Now hover, focus and click are the same area: a stretched pseudo-element on the CTA, one tab stop, one accessible name, the label still naming its destination. The text inside the room is no longer selectable with a drag, which is the known cost of the pattern and the right trade for a door |
| The five-door case is stated as a limit, not a promise | DD-21's component "renders well at two and at five options", and it does — but the *first screen* does not, below about 1440. Saying so with the measurement (755 of 696 at 1280) is more useful to Nari than a claim that it scales everywhere, because the answer, when a second campus opens, is a shorter CTA label or a second row of doors, and that is a copy decision |
| The utility links stack under 370px rather than shrinking | Below 370 the lockup at its 27px floor and two 12px links do not fit on one line. Stacking gives an 88px header at V1 and V18; shrinking the mark below 27px is not allowed (K12 G4) |
| Sources line twice | Under the comparison table and under the proof strip, as `copy.md` instructs, so neither block of facts travels without its source |

## Continuity: what a parent meets on the other side of the door

`mockups/shared/CONTINUITY.md` is the first measured capture of the destination chrome, taken from this
repository's own mirror of anywhere.gt.school (no production host was loaded). It asks every rationale to name the
differences rather than leave them to a critic to find. Measured there, against this page:

| Property | The estate (measured at 1440 and 390) | M09 | The decision |
|---|---|---|---|
| Page ground | `rgb(252, 244, 239)` | `--color-bg` `#fcf4ef`, the same value | Matches |
| Body text and face | `rgb(0, 17, 23)`, Inter Tight | `--color-text` `#001117`, Inter Tight | Matches |
| Marks | The two real SVGs | The same two files, unmodified, each only on its permitted panel (R16) | Matches |
| Heading weight | Literata **300** | Literata **400** | The programme's decision, not an oversight: DD-38 tests 300 against 400, and M03 rendered both weights on this exact sentence at V2 and V16 with no change in line count. 400 holds the 27px phone setting; 300 at 27px on cream is thin. Open for Nari at DD-38 |
| Heading tracking | **−1.6px** | normal | The estate's tracking is tuned for a 58.5px display line. This h1 is 27px on two thirds of sessions, where −1.6px closes the counters. A width-dependent tracking rule is a contract proposal, not a mock decision |
| Button weight and size | Inconsolata **500** at **16px** | Inconsolata **600** at `--text-btn` (17 to 18px) | `shared/fonts.css` ships Inconsolata **400 and 600 only**, so a 500-weight button cannot be claimed without adding the face (CONTINUITY.md's own rider). The size is the contract's button token |
| Button fill | Navy on the first screen, accent orange in the footer | Reversed per room: navy fill on the warm room, near-white fill on the navy room. No orange fill anywhere | **DD-46.** The direction's reason is C01 (Tate): the two doors must not be ranked, so each takes the fill that reverses its own room. The estate's orange is also a contrast failure on both grounds it uses (K12 F87, 2.50 for the label; F88, 2.38 for the italic headline), so copying it faithfully would import a failure |
| Button silhouette | A cut at the lower right; `border-radius: 8px 8px 0 0` describes it only partly | `--radius-md` on all four corners | Flagged, not decided. A silhouette belongs in the contract so all twenty mocks carry the same one; proposed below |
| Surface | Grained cream with wave linework behind a photographic cut-out of a child | Flat `--color-bg`, no photograph | The photograph is DD-42 and AD-11 (no permission), and the grain is a texture asset that does not exist in `shared/`. Named so the gap is visible |

**The Georgetown handoff is unverified.** `gt.school` has no mirror in this repository, so no rendered comparison
exists for the warm room's destination; nothing in this rationale claims one. The Anywhere handoff is the half
that can be scored today.

## Proposals to the contract (not decisions taken here)

| Proposal | Evidence from this build |
|---|---|
| **The landscape recipe should keep each door's line inside its own room for colour-split directions.** `CONTRACT.md` section 2 puts the lines below both doors on the landscape row; on a page where the colour is the argument, a shared band sets the Georgetown line under the navy room and the sentence is read against the wrong school | `qa/V10.jpg` (750 by 342): each line begins under its own CTA on its own room's colour and is cut mid-sentence at 342, which is also what cuts the fold there. The studio critic ruled this better than the recipe and asked for it to be stated as a contract amendment |
| **Decide the button silhouette and weight centrally (DD-46).** The estate's button has a cut corner and sets Inconsolata 500 at 16px; the mocks set 600 at 17 to 18px with a uniform radius, and `shared/fonts.css` cannot supply 500 | `mockups/shared/CONTINUITY.md`, measured at both widths; `shared/fonts.css` ships 400 and 600 |
| **Add "the whole card is one link" to the contract's structure section.** It is in `1_spec/04` section 3 but not in `CONTRACT.md` section 7, and iteration 1 of this mock missed it for exactly that reason | `1_spec/04` section 3, Door card; this mock's iteration-1 Objective and Motion deductions |

## Self-check

**Grep checks** (from the repo root, 2026-09-11, iteration 2, final build): `<form` 0; `<input` 0; `<script` 1
(the JSON-LD block); hosts in `index.html` and `styles.css`: www.gt.school, gt.school, anywhere.gt.school,
apply.gt.school, community.gt.school, schema.org only; raw hex in `styles.css`: 0; **`transition:` declarations:
0**, `@keyframes` 0, `animation` 0 — nothing on the page moves; `vh` outside `@supports`: 0 (`100svh` only, inside
the `@supports (height: 100svh)` guard); digits in visible text: 09, 10, 10,400, 2026, 270, 512, 8, 9, 90, 9481 —
every one on the checker's whitelist; `advis` in visible text: none (the `data-type="advisor"` attribute value is
the spec's, not the page's); `data-component` attributes: 12, all of them `1_spec/04` section 3 names;
`index.html` 17,038 bytes plus `styles.css` 28,792 bytes, 45,830 in all.

**Copy check**: the page's visible text is **identical, character for character, to the build both critics
copy-checked** — extracted from `git show HEAD:0_plan/mockups/M09-two-places/index.html` and from the working
copy with the checker's own tokenizer and compared; the diff is empty. Iteration 2 changed no word: the markup
changes are one `white-space: nowrap` span inside the GT Anywhere door line (twice, once per rendered copy) and
the `data-component` attributes. So iteration 1's result stands: all 57 fixed slots of `copy.md` sections 0 to 9
present verbatim, and no word on the page appears outside `copy.md`.

**The whole room is one link, hit-tested**: `document.elementFromPoint` at four points in each room (20 and 50
percent down the room, the lower right quarter, and the far right edge) returns the room's own link at 1280 by
720, 1920 by 960 and 375 by 629 — twelve of twelve. Tab order at 1280 is unchanged and still one stop per room:
skip link, lockup, Current families, Contact admissions, Georgetown CTA, GT Anywhere CTA, compare anchor.

**First screen at 390 by 844 and at 1280 by 720**: both door CTAs visible without scrolling at every fold row
(table above); the header, the h1 and the provenance line are the only things above them; both door lines are
visible at rest.

**Reduced motion**: nothing can animate, and the point of the run is now the state, not the durations. The
runner's emulated run at V14 reports every computed transition and animation duration 0s on every element and
pseudo-element, and `qa/reduced-motion.jpg` is the capture Astra asked for: emulated `prefers-reduced-motion:
reduce` at 1280 by 720, the pointer parked in the top right corner over neither room, nothing focused, **both
door lines rendered** (`display: block`, `opacity: 1`, `transform: none`, `transition-duration: 0s`, measured on
both).

**Focus**: `qa/focus-cta.jpg` is the warm room's CTA with the 2px `--color-focus` ring at 2px offset;
`qa/focus-cta-navy.jpg` is **the navy room's own CTA** with K3's two-colour ring — a 2px `--color-navy` inner
band on the off-white button and a 2px `--color-focus-on-dark` outer band on the navy ground, which is
CONTRACT.md section 4's treatment for that surface and the departure Astra found undeclared. `focus-plate.jpg`,
`focus-footer.jpg` and `focus-footer-plate.jpg` carry the same ring on the three elements that straddle a colour
edge — the header lockup over both rooms, the GT Anywhere footer link on navy, and the footer's light logo plate
sitting on navy.

**Forced colours**: checked at V14 (`qa/forced-colors.jpg`). The two rooms' backgrounds are replaced, as
expected; the column boundary and the rooms' ceiling read as drawn lines (the 1px borders become `CanvasText`),
the GT School mark reads as its own navy-and-gold artwork on `Canvas`, the GT Anywhere mark keeps its navy plate
through `forced-color-adjust: none` so its white lettering is still legible, and both CTAs keep identical
`ButtonText` borders so the two doors stay equal. **The seam mark is withdrawn here**: as `CanvasText` it read as
a swelling in the `CanvasText` divider rather than as a mark. Focus rings fall back to a 3px `CanvasText` outline
with the box-shadow band removed.

**Console**: no errors on load, at every row.

**Runner passes**: seven. Passes 1 to 5 are the first build (pass 1 showed two voids inside each room at V14 and
V16 and a mark block whose padding differed between the rooms; pass 2 lost the band cut at V10; pass 3 rebuilt the
compact tiers and met the ink test; pass 4 corrected the V2 cut; pass 5 stopped the rooms stretching above 1000px
of viewport height). Pass 6, iteration 2: lines visible at rest, the shared subgrid rows, the floor under the
mark, the whole-room link, the two-colour ring, the ceiling hairline, the footer marks — measured, then read off
the captures at V11, V13, V14, V16 and V17. Pass 7 added the two laptop tiers after pass 6's captures showed the
compare sentence still below the edge at 1280 by 720 and 1366 by 648, and is the run pasted below. The four
critic-named figures that did not reproduce were re-measured from scratch in this pass, not edited in place.

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M09-two-places`

```
## M09-two-places: 36 pass, 0 fail

check-mocks: OK
```

### `python3 1_spec/tools/check-claims.py` (M09's block; the full run over every mock is also OK)

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

### `node 0_plan/tools/shots.mjs 0_plan/mockups/M09-two-places --all`

The final run of this iteration, pasted verbatim; `qa/fold.md` is the same run. Nothing in `index.html` or
`styles.css` changed after it.

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
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 317 | 558 | 558 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 316 | 526 | 526 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 300 | 346 | 646 | 646 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 346 | 646 | 646 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 344 | 394 | 540 | 670 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 250 | 288 | 434 | 434 | yes | report: scrollWidth 1024 |

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
| V1 | yes | content reaches 737 of 740 and more follows below |
| V2 | yes | text cut by the edge, 623 to 643 |
| V3 | yes | text cut by the edge, 650 to 670 |
| V4 | yes | text cut by the edge, 650 to 670 |
| V5 | yes | content reaches 705 of 715 and more follows below |
| V6 | yes | text cut by the edge, 810 to 840 |
| V7 | yes | text cut by the edge, 676 to 696 |
| V8 | yes | text cut by the edge, 720 to 740 |
| V9 | yes | text cut by the edge, 838 to 868 |
| V10 | yes | text cut by the edge, 325 to 345 |
| V11 | yes | text cut by the edge, 1012 to 1032 |
| V12 | yes | content reaches 1186 of 1194 and more follows below |
| V13 | yes | content reaches 768 of 768 and more follows below |
| V14 | yes | text cut by the edge, 686 to 721 |
| V15 | yes | text cut by the edge, 629 to 664 |
| V16 | yes | text cut by the edge, 866 to 901 |
| V17 | yes | text cut by the edge, 926 to 961 |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | content reaches 572 of 576 and more follows below |

## Result: all required rows pass
```
