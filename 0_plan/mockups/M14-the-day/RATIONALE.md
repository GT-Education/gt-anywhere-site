# M14 The Day, rationale

| Field | Value |
|---|---|
| Mock | M14 "The Day" (new direction), brief `0_plan/kb/briefs/M14.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1 (fold method with computed h1 lines, the compact door rule, the V10 landscape recipe, K3's two-colour ring, DD-46 fill and DD-47 corner) |
| Lens order | L3 mission, L1 objective, L2 continuity, L4 exclusivity |
| Built | 2026-09-11 by a design-engineer fork (Opus 5, per `17` section 2's model change). The runner `node 0_plan/tools/shots.mjs 0_plan/mockups/M14-the-day` measured all nineteen rows on each of four passes and its screenshots under `qa/` were read between passes; three scratch scripts outside the repository (`M14-measure.mjs`, `M14-parity.mjs`, `M14-label.mjs`, same Playwright, same headless Chromium) measured the day band's element bottoms, the two doors' parity and the CTA label advance. No other browser tool was used and no live GT site was loaded |
| Files | `index.html`, `styles.css` (links `../shared/tokens-v2.css`, `../shared/fonts.css`), this file, `qa/` |
| State | Default state: **no photograph, no JavaScript**. D-039 (scripts and inputs in mocks) is Escalated and undecided, so the brief's considered V6 reveal is a note under Motion spec and not code; the page is complete at rest and carries no `data-d039` declaration. All four steps of both timelines are visible without a scroll trigger, in normal and reduced-motion rendering alike |
| Copy | `copy.md` v1.1 sections 0 to 8 verbatim. From section 9: the step labels "Morning", "Afternoon", "Across the year" and "Across the day" (the M14 rows; "Across the day" was recorded in section 9 before this build used it), and the skip-link label "Skip to main content". The four step sentences are the deck's own cells, unchanged |
| Claims on the page | 90th percentile (CR-011), $10,400 (CR-021), four in-person or intensive weekends (CR-032), 9 to noon and about two hours (CR-033), two to three hours (CR-034), weekly check-ins (CR-035). Every one of those rows is **"Unverified, public"** in `0_plan/12-claims-register.md`: allowed on a mock, blocked for production. No figure appears that the deck does not carry (REQ-022); the timelines add no number of their own |

## Direction

One programme, two days. The brief's thesis is that GT School is a single school with Guides in both
places and that the only thing that differs is where the child sits, so the argument is best made by
putting the two days side by side and letting a parent read them step by step. The deck already
contains those steps — the "The day" row for both schools and the "In-person time" row for GT
Anywhere — and this direction does nothing but open that row out into two timelines and set them
parallel.

The first screen is M01's measured form, deliberately: the umbrella sentence, its provenance line,
two doors of identical weight, the compare anchor, and the screen's one accent use as the rule that
closes the choosing. A parent who already knows which door they want never needs the second screen;
a parent who does not gets the comparison in two forms, the day first and the table second. The
brief fixes this ("First screen as M01 (doors, compare anchor)"), and the reason it is worth fixing
is that M01's door parity is measured to the pixel and the compact door rule is what keeps both CTAs
above the fold on a 375 by 629 phone. This build re-derives that geometry rather than inheriting a
file, and re-measures it (Fold, Door parity).

The **second screen is the direction**. Two columns, six and six, Georgetown Campus left and GT
Anywhere right. Each is built the same way: the school's name as a column head over a rule, then a
tinted body holding a rail, and on the rail one repeated step module — a time label with a hairline
tick running out to the column edge, the deck's sentence beneath it, and a node on the rail marking
where the step begins. Georgetown has "Morning" and "Afternoon". GT Anywhere has "Across the day"
and "Across the year". **No online afternoon is stated, because the deck does not state one**; the
GT Anywhere column says what its own cell says, that the rest of the day is the family's, and then
steps out to the year. That asymmetry is the honest shape of the evidence and it is also the
argument: the two days are not the same length or the same rhythm, and both end on the same line.

That last point is drawn, not claimed. The two bodies are one subgrid row, so they are exactly the
same height at every width from 768 up; each rail runs to its own column's floor and ends in a
`--color-accent` square straddling that floor's edge. Two days of different shape, one finish. It is
the screen's single accent use (K3 section 5f) and the only place on the page where the accent is
spent as a shape.

The colour key is set on the first screen and kept: `--color-georgetown-tint` (the token file's own
alias for `--color-surface`, so a mock can say which meaning it is using) is Georgetown Campus,
`--color-anywhere-tint` is GT Anywhere, `--color-bg` is both schools at once, `--color-navy` is an
action. A second key runs beside it, which is this direction's own: the **node shape**. A filled
9px square means Georgetown Campus, an open one means GT Anywhere. A parent meets the pair beside
the two door labels on the first screen and then reads the same two shapes down the two rails. It
is redundant with the label, the name and the tint, never a substitute for any of them.

Three exemplars, as the brief assigns them. **Crimson Global Academy** contributes the parallel
labelled cards of its formats section (C31), borrowed as the two timelines rather than as arches —
Crimson names its delivery formats as equal, adjacent choices, and that is what the two days are.
**Every** contributes the one module designed once and repeated verbatim (C21), which is the step:
label, tick, sentence, node, and nothing else, four times. **MIT Admissions** contributes the phone
order (C18), orienting content promoted: below 768 the timelines stack with Georgetown first, the
same order as the doors, so the scene never swaps between breakpoints. **AREA 17 is avoided** (C33):
its regions rendered blank at capture because they wait on script. Every step of both timelines is
in the markup and painted at rest, with no observer, no script and nothing hidden.

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented
children, in person at our Georgetown, Texas campus or online from anywhere." It is the one sentence
that both decodes "GT" and names the two ways to attend, so it is the largest thing on the page.
Literata 400, `--text-3xl` (27.00px at 360 to 46.00px at 1440), `--leading-tight` 1.15,
`max-width: 35ch`, `text-wrap: balance`. Two no-break spaces hold "in person" and "from anywhere."
whole, so neither phrase splits and the last line is never a single word; no character changes. At
1024 to 1279 it takes nine of twelve columns and from 1280 eight. On a phone held sideways (V10) it
steps down one token to `--text-xl` across the full width, which is the contract's landscape recipe
and is declared in Departures.

The door names are `h3` under one visually hidden `h2`, "Two ways to attend" (an allowed section 1
heading). The day band's `h2` is "A day at GT" (an allowed section 3 heading) and the two school
names under it are `h3`. The later `h2`s are "Compare the two schools", "What is true of both
schools", "How to apply", "More ways to connect" and "Already a GT family?"; "Texas families" is an
`h3` inside the comparison. One `h1`, no level skipped.

**Measured line counts** (h1 height, which is the h1 bottom less the header bottom and the first
screen's top padding, divided by the 1.15 line box):

| Rows | Width | h1 size | h1 height | Lines |
|---|---|---|---|---|
| V1, V2, V3, V4, V7, V9 | 360 to 402 | 27.00 to 27.74px | 219 to 223px | **7** |
| V5, V6, V8 | 412 to 430 | 27.92 to 28.23px | 193 to 195px | **6** |
| V10 (landscape) | 750 | 24.17px at `--text-xl` | 83px | **3** |
| V11, V12 | 768, 834 | 34.18, 35.34px | 157, 163px | **4** |
| V13, V19 | 1024 | 38.68px | 178px | **4** |
| V14 | 1280 | 43.19px | 199px | **4** |
| V15 | 1366 | 44.70px | 206px | **4** |
| V16, V17 | 1440, 1920 | 46.00px | 212px | **4** |
| V18 (reflow) | 320 | 27.00px | 248px | 8 |

Seven at phone widths, six at large-phone widths, four at laptop widths — the same counts M12 and
M01 measured. The contract's table estimates six at V2; that is one line optimistic, and the fold
sums below are built on the measured seven rather than on the estimate.

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id and name, lens order | M14 "The Day" in `0_plan/mockups/M14-the-day/`; L3 mission, L1 objective, L2 continuity, L4 exclusivity | Met |
| Thesis | One programme, two days. The h1 says one school; the two timelines say the days differ in where the child sits; the table's first three rows repeat the same value in both columns (DD-43); the proof strip names what is true of both. The GT Anywhere column states no afternoon because the deck states none | Met |
| Exemplars | Crimson's parallel labelled cards as the two timelines (C31); Every's one repeated module as the step (C21); MIT's phone order, orienting content promoted and the scene never swapped (C18); AREA 17's script-dependent blank regions avoided — every step is painted at rest (C33) | Met |
| Composition, first screen | M01's form: h1, provenance, two doors of equal weight, compare anchor, accent rule. Door parity measured at 0.0px of width and height difference at all nineteen rows; both CTAs 44px at eighteen of nineteen | Met, with the V18 CTA exception in Departures |
| Composition, second screen | Two timelines side by side, six and six, Georgetown left and GT Anywhere right, four supported steps in total; each step a repeated module of time label, deck sentence and connector; below 768 they stack, Georgetown first; then comparison, proof, steps, footer | Met, with the school name lifted out of the tinted body into a column head (Departures) |
| Typography | Contract roles; time labels `--text-xs` Inter Tight 500 uppercase 0.08em `--color-text-muted`; step sentences `--text-base` at `--leading-prose` 1.5; timeline names `--text-lg` Literata 400 | Met |
| Colour and surface | `--color-bg` page; Georgetown timeline on `--color-georgetown-tint` (the alias of `--color-surface`), GT Anywhere on `--color-anywhere-tint`; rails, ticks and column edges `--color-border`; one accent use per screen — the compare-anchor rule on the first, the two finish marks on the second; CTAs `--color-navy` fill with `--color-on-navy` text (DD-46); focus `--color-focus` at 2px offset on light, K3's two-colour ring on navy | Met |
| Imagery | Default state: none. The photographed state is described under Assets and is not shipped | Met (default state) |
| Motion | V1 and V3 instant; V6 considered, costed and not shipped (D-039). The stylesheet carries no `transition`, no `@keyframes` and no `animation` | Met as the no-JavaScript state; see Motion spec |
| Copy | Sections 0 to 8 verbatim; the four step sentences are the deck's cells unchanged; "Morning", "Afternoon", "Across the year" and "Across the day" from section 9 | Met |
| Conversion | Doors on the first screen; compare anchor on the first screen and above the fold at V14 and V16; timelines next; table with repeated values; proof; steps; secondary CTAs | Met |
| Acceptance | `check-mocks.py` 37 pass 0 fail; `check-claims.py` OK with 9, noon, two, three and four mapping to CR-033, CR-034 and CR-032 and nothing else; the runner's Result line reads "all required rows pass" across all nineteen rows, including mark geometry, reduced motion, the doubled root font and the console; the reduced-motion run shows four steps visible with no scroll trigger; this file names DD-38, DD-39, MN-16 and D-039 | Met; the critics' scores are pending |

## Fold: what it was designed to, and what it measures

The limit is the viewport height less 24px. Required above it: header, h1, provenance line and both
door CTAs. The estimate method is the contract's, with the h1 heights measured rather than
estimated (the contract's six-line V2 figure is one line short of the rendered seven).

| Row | Limit | Brief's estimate | This build's estimate, with the measured h1 | Measured last CTA bottom | Headroom |
|---|---|---|---|---|---|
| **V2** 375 by 629 | **605** | 550 | 56 + 8 + h1 **219** + 8 + provenance 21 + 24 + card 115 + 8 + card 115 = 574; CTA bottom 566 | **565** | 40 |
| **V5** 414 by 715 | **691** | 663 | 56 + 8 + h1 **193** + 8 + 21 + 24 + card 115 + 8 + card 115 = 548; CTA bottom 540 | **539** | 152 |
| **V14** 1280 by 720 | **696** | 589 | 56 + 24 + h1 **199** + 8 + 22 + 16 + card 215 = 540; CTA bottom 523 | **523** | 173 |
| **V16** 1440 by 900 | **876** | 630 | 56 + 48 + h1 **212** + 8 + 22 + 48 + card 257 = 651; CTA bottom 618 | **618** | 258 |
| V10 750 by 342 (landscape recipe) | 318 | contract recipe 313 | 56 + 8 + h1 **83** at `--text-xl` + 8 + 22 + 8 + card 115 = 300; CTA bottom 291 | **291** | 27 |

The brief's V2 and V5 figures are the contract's shared M01-form sums built on a six-line h1 and a
110px compact door block; the rendered h1 is seven lines at 375 (+31px) and the compact block
measures 115px (+5 each), which is the whole of the difference. V14 and V16 come in **below** the
brief's estimate because the short-laptop tier gives back first-screen padding at V14 and because
the doors are side by side from 1024 rather than stacked.

**All nineteen rows, measured** (`qa/fold.md`, final pass; full table pasted under Self-check):

| Row | Viewport | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Result |
|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | 716 | 88 | 313 | 342 | 472 | 595 | PASS |
| V2 | 375 by 629 | 605 | 56 | 283 | 312 | 442 | 565 | PASS |
| V3 | 390 by 664 | 640 | 56 | 286 | 315 | 445 | 568 | PASS |
| V4 | 393 by 659 | 635 | 56 | 286 | 315 | 445 | 568 | PASS |
| V5 | 414 by 715 | 691 | 56 | 257 | 286 | 416 | 539 | PASS |
| V6 | 412 by 839 | 815 | 56 | 257 | 286 | 416 | 539 | PASS |
| V7 | 402 by 681 | 657 | 56 | 287 | 316 | 446 | 570 | PASS |
| V8 | 430 by 739 | 715 | 56 | 259 | 288 | 418 | 542 | PASS |
| V9 | 390 by 844 (emptiness) | — | 56 | 286 | 315 | 445 | 568 | page height 7654 |
| V10 | 750 by 342 | 318 | 56 | 147 | 177 | 291 | 291 | PASS |
| V11 | 768 by 1024 | 1000 | 56 | 237 | 267 | 506 | 762 | PASS |
| V12 | 834 by 1194 | 1170 | 56 | 243 | 272 | 512 | 769 | PASS |
| V13 | 1024 by 768 | 744 | 56 | 258 | 288 | 524 | 524 | PASS |
| V14 | 1280 by 720 | 696 | 56 | 279 | 309 | 523 | 523 | PASS |
| V15 | 1366 by 648 | 624 | 56 | 278 | 308 | 499 | 499 | PASS |
| V16 | 1440 by 900 | 876 | 56 | 316 | 346 | 618 | 618 | PASS |
| V17 | 1920 by 960 | 936 | 56 | 316 | 346 | 618 | 618 | PASS |
| V18 | 320 by 256 (reflow) | — | 88 | 344 | 394 | 533 | 655 | PASS, no horizontal scroll |
| V19 | 1024 by 576 (zoom) | — | 56 | 258 | 288 | 524 | 524 | scrollWidth 1024 |

### The false floor, and what a parent reads at the bottom edge

The runner's test is the contract's own reserve: below the last door CTA, visible **content** —
text, an image, a painted hairline, never a container's background fill — must reach into the bottom
24px, and more content must lie beyond the edge. On this page the ink that does it is a **word** on
every row that has a fold rule:

| Rows | What the bottom edge cuts |
|---|---|
| V1, V2, V4, V6, V7 | A line of the Georgetown or GT Anywhere run-in paragraph (the compact door rule's two lines, which sit after the second CTA) |
| V3, V5, V8, V9, V10 | The same paragraphs, sliced mid-line |
| V11, V14 | The two day-band column heads, "Georgetown Campus" and "GT Anywhere" |
| V12 | A line of the first GT Anywhere step sentence |
| V13 | The Georgetown timeline's first time label, "MORNING" |
| V15, V16 | The band heading "A day at GT" |
| V17 | The two column heads, whole, with the tinted bodies beginning below the edge |
| V19 (zoom row, reported) | The compare anchor sentence |
| V18 (reflow row) | Nothing: DD-44 exempts 320 by 256 from the fold rule, and the runner reports the row rather than failing it |

Getting there took one structural change rather than a set of per-row nudges. The first build put
the school's name **inside** the tinted panel, which left a 48 to 81px dead zone between the band
heading and the first word of the band, and at V11, V14 and V17 the bottom edge landed inside it —
the runner called all three FALSE FLOOR. Lifting the name out to a column head over a rule closes
the dead zone, so the band's ink now runs heading, name, rule, label, sentence with no gap wider
than the 24px reserve. The construction is also the comparison table's own (serif column headers
over a rule, tinted cells beneath), which is why it reads as the same page rather than as a repair.

## Composition and geometry

| Part | Geometry |
|---|---|
| Grid | One column with 24px margins below 768; 32px margins from 768; twelve columns with a 32px gutter and 48px margins from 1280, capped at `--container-max` (1440) |
| Header | 56px row (88 below 370, where the two utility links take their own line); the GT School mark 27px on phones and 32px from 768, `width: auto` |
| First screen | h1 across nine of twelve columns at 1024 to 1279 and eight from 1280; provenance `--space-3` under it; doors `--space-5` to `--space-7` below; compare anchor; the accent rule, whose bottom margin is the whole gap to the day band (the day band pays no top padding) |
| Doors | Stacked full width below 1024, six and six with a 64px gutter from 1024. `grid-auto-rows: 1fr` makes the pair equal stacked and side by side alike; the card's flexible line row lands both buttons on one baseline. Measured equal at all nineteen rows |
| Day band | h2, then two columns six and six from 768 with a 32px gutter (64px from 1280). `grid-template-rows: auto 1fr` on the list and `grid-template-rows: subgrid` on each column put both names in one row and both bodies in the next, so the bodies are the same height and the two finish marks sit on one line: measured 640 by 237.5 in both columns at 1440, both finishes at 1188.2 |
| Step module | Node 9px square on the rail; rail a 1px `border-left` at x 4, running from the first node's centre to the column floor; time label with a 1px `border-top` tick filling the rest of its line; sentence at `--text-base` and 1.5, at most 42ch; steps `--space-5` apart |
| Finish | `margin-top: auto` holds it on the body's floor with at least `--space-5` of air under the last sentence; a 9px `--color-accent` square straddles the body's bottom edge at the rail's own x |
| Bands | `--space-9` of top padding on phones, `--space-10` from 768, `--space-11` from 1280; each band pays its own top and none of its bottom, so one interval sits between any two |

**Contrast, computed from the token values** (K3 sections 5c to 5g): `--color-text` 17.69 on
`--color-bg`, 16.10 on the Georgetown tint, 16.30 on the GT Anywhere tint; `--color-text-muted` 6.25,
5.69 and 5.76 on the same three; `--color-on-navy` on `--color-navy` 14.58;
`--color-text-muted-on-dark` on navy 7.81; the navy button fill against the three light grounds
13.88, 12.63 and 12.79; `--color-focus` 8.20 on the page and 7.46 and 7.56 on the two tints, so the
ring reads against whatever it sits on, including around a navy button on a tinted card. The accent
is never text: at 2.17 to 2.38 on the light grounds it is a shape colour only (RF-37), and the two
places it appears — the first screen's rule and the second screen's finish marks — carry no
information a reader needs.

The step nodes are `--color-text` (16.10 and 16.30 on the tints) and the labels carry the sequence
in words, so the diagram meets 1.4.11 through the nodes and the type. The connectors and ticks are
`--color-border` as the brief specifies (1.42 to 1.56 on the tints): reinforcement, not the thing
that has to be seen. That is a deliberate reading of the brief's "connectors `--color-border`" and
is flagged here rather than changed silently.

## Decisions applied

| Id | How it is applied |
|---|---|
| DD-04 | Cue set: label plus a node glyph on each door, filled for Georgetown Campus and open for GT Anywhere, in `--color-text`. The glyph is the same shape the timelines use, so the first screen teaches the key the second screen reads. The label and the name carry the meaning; neither shape ranks the other. `gt-icon.svg` is **not** used — see Departures |
| DD-06, DD-43 | The comparison keeps the shared rows first and every shared row repeats its actual value in both columns; no "Same" cell anywhere |
| DD-10, MD-25 | Selectivity is the bar, never price: the only figure on the first screen is none at all, "90th" appears in the proof strip and the admissions line, and tuition appears only where the deck puts it (the table row and the TEFA module). No wealth cue in type, colour or imagery |
| DD-12 | Header holds the lockup, "Current families" and "Contact admissions", and no menu |
| DD-13 | No phone number in the header; the number the sites publish is in the footer |
| DD-14 | Designed at 390 first; doors stacked Georgetown then GT Anywhere; no sticky CTA |
| DD-19 | Every colour, face, size, space, radius and duration is a `var()`; zero raw hex in `styles.css`. The lengths outside the token set are listed in Departures |
| DD-21 | Both the doors and the two timelines are `<ul>` lists of school blocks, not a two-panel split. A third campus is one more `<li>`: the doors already stack below 1024 and the day list would wrap from `repeat(2, …)` to `repeat(auto-fit, …)` in one declaration |
| DD-26 | Visual parity between the doors by construction and by measurement: same component, same fill, same type, equal widths and heights at all nineteen rows |
| DD-29 | Every screen carries a fact at rest: the first the two door lines, the second the four deck sentences, the third the table, the fourth the proof strip, the fifth the admissions bar |
| DD-38 | Type roles option (b): Literata 400 display, Inter Tight for prose and interface strings, Inconsolata for buttons and figures, the `--text-*` clamp as the working default, multi-line prose at `--leading-prose` 1.5 and single-line strings at `--leading-body` 1.25. The fit is measured on the fixed copy at V2, V5, V14 and V16 (Fold) |
| DD-39 | Colour roles option (a): `--color-on-navy`, `--color-text-muted-on-dark` and `--color-border-strong` are used; the accent is a shape colour only |
| DD-42, RF-25, AD-11 | Default state, no photograph. The photographed state is described under Assets and is gated on Nari's written permission and on door parity |
| DD-44 | V18 is a reflow row (no horizontal scroll) and V19 a zoom row (reported), neither held to the fold rule |
| DD-46 | Door button fill is the contract's surface-dependent treatment: `--color-navy` with a `--color-on-navy` label on every light surface of this page (14.58). The estate's orange footer button is not copied: K12 F87 measures its near-white label on `#e48b53` at 2.50, which fails AA and 3:1 |
| DD-47 | The button corner is a uniform `--radius-md` on all four sides, which is the estate's own desktop header application control and the shape DD-46 already adopted. **No notch is drawn.** `border-radius: 8px 8px 0 0` is explicitly not used: it is the `.button-bg_filler` radius taken out of a three-layer composition and renders a square lower-right corner matching neither the estate's cut corner nor this contract |
| MN-16 | Motion vocabulary option (a): transform and opacity only, the 100/200/300ms scale, zero computed duration under reduced motion with state and focus preserved. This direction earns no move it can ship without script, so it ships still |
| D-039 | Escalated and undecided. No script beyond the JSON-LD block, no input, no `data-d039` declaration. The brief's V6 reveal is costed under Motion spec and not built |
| REQ-022 | No figure without a claims-register row, in the deck's own words; `check-claims.py` clean |
| REQ-070 | Every application link carries `school=`; links reach only gt.school, anywhere.gt.school, apply.gt.school, community.gt.school and in-page anchors |
| SE-13 | `noindex, nofollow` on the mock |
| R14, MD-02 | The tour label names the destination and the campus: "Ask about a tour of the Georgetown campus" |
| R16 (checker) | Real logo SVGs in header and footer; the GT Anywhere mark on a `--color-navy` panel, the GT School mark on a light plate |

## Layer-2 tokens used, with their register rows

Every layer-2 token is **PROPOSED** until its row is Agreed (`TOKENS-V2.md`); naming the row here is
the condition of using one.

| Token or group | Row | Where it is used |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | **DD-38** (b), R5 | The whole type scale: h1 `--text-3xl`, door names `--text-xl`, timeline names and table headers `--text-lg`, step sentences and table cells `--text-base`, time labels and eyebrows `--text-xs`, buttons `--text-btn` |
| `--leading-prose: 1.5` | **DD-38** (b), RF-58 | Door lines, step sentences, table cells, the sources lines, the footer facts block. Single-line strings (labels, names, buttons) keep `--leading-body` 1.25 |
| `--measure-prose: 65ch` | **DD-38** (b), RF-55 | Door lines, run-in paragraphs, sources, steps, connect list, TEFA module |
| `--color-on-navy` | **DD-39** (a), RF-07 | Button labels on navy fills; the footer's text; the outer band of K3's two-colour focus ring |
| `--color-text-muted-on-dark` | **DD-39** (a), RF-07 | The footer facts block on navy (7.81) |
| `--color-border-strong` | **DD-39** (a), RF-07 | The two door cards' edges (3.31 to 3.63 on the three light grounds) |
| `--duration-none` and the reduced-motion zeroing | **MN-16** (a), RF-53, R8 | The reduced-motion block, elements and pseudo-elements. It is the only motion token in the file: with nothing to ease, `--ease-standard`, `--ease-out` and `--ease-in` are declared in the token file and unused here |
| Not used | — | `--color-accent-text`, `--color-on-accent`, `--color-focus-on-dark` (no accent text, no accent fill behind text, no focusable element on a navy fill that is not covered by the two-colour ring) |

**D-039** is named because the acceptance row requires it: scripts and inputs in mocks are Escalated
to Johnny and undecided, so this page ships its no-JavaScript state only and nothing in this
direction's interactivity is assumed approved.

## Continuity

How this build stands against the measured estate (`0_plan/mockups/shared/CONTINUITY.md`, captured
from the repository's own mirror of anywhere.gt.school on 127.0.0.1; **gt.school has no mirror here
and its handoff is unverified**).

| Property | The estate, measured | M14 | Why |
|---|---|---|---|
| Page ground | `rgb(252, 244, 239)` | `--color-bg`, the same value | Match |
| Body text | `rgb(0, 17, 23)` | `--color-text`, the same value | Match |
| Families | Literata, Inter Tight, Inconsolata | the same three, self-hosted from the mirror's own files | Match |
| Marks | the two brand SVGs | the same two files, unmodified, on the panels `copy.md` section 8 assigns | Match |
| **Heading weight** | Literata **300** | Literata **400** | A declared difference. The estate sets 58.5px at 1440; this h1 tops at 46px on a sentence that runs to four lines there and seven at 375, and 300 at that size on a cream ground thins the stems. M03 tested 300 against 400 on this exact sentence at V2 and V16 and shipped 400; M14 follows it rather than re-running the trial. One `font-weight` value changes it back |
| **Heading tracking** | **-1.6px** | normal | A declared difference. −1.6px is about −0.027em at the estate's 58.5px; applied unchanged at this h1's 27px phone size it is −0.06em, which closes the counters of a serif at text size. Tracking that is correct at one size is wrong at the other end of a clamp, so this build sets none rather than a figure it cannot justify at both ends |
| **Button weight** | Inconsolata computed **500** | Inconsolata **600** | A declared difference, with the reference's own rider: `fonts.css` ships Inconsolata **400 and 600 only**, so a 500 cannot be registered without adding a face, and the estate's 500 is a *computed* weight that may be synthesised or rounded rather than proof that a 500 face drew those glyphs |
| **Button size** | **16px** | `--text-btn`, 17px at 360 to 18px at 1440 | A declared difference. The runbook floors interactive targets at 44px and the buttons here carry long labels; 17 to 18px is one step up from the estate and keeps the uppercase mono legible inside a 44px bar. At 320 the label still overruns its line (Departures) |
| Button fill | navy on the first screen, orange in the footer | navy on light, per **DD-46** | The estate uses both fills for the same action, so there is no single fill to match; DD-46 picks the one that passes contrast. The orange label fails at 2.50 (K12 F87) |
| Button corner | three constructions, none a single `border-radius` | uniform `--radius-md`, per **DD-47** | The estate's own desktop header application control keeps four rounded corners; the cut corner on its cards is a three-layer composition, not a radius |
| Cream surface | grained, with wave linework behind a composited student cut-out | flat `--color-bg` | A difference of texture, not of colour. This page ships no photograph at all in the default state, so it reproduces the ground rather than the whole surface. Named here so a critic scores it as a decision |
| Header at 390 | mark and MENU only; the application button and TEFA badge are desktop-only | mark plus two text links at every width | The landing routes rather than browses (DD-12), so the two links stay; they take their own row below 370 |

Could the two sites inherit this shell? The header, the footer, the button, the table and the step
module are all token-only and duplicate-free; the day band is 40 lines of CSS with no dependency.
The one thing an inheriting site would have to decide is the heading weight and tracking, which is
exactly the pair DD-38 is open on.

## Motion spec

| What | Trigger | Duration token | Easing | Reduced motion |
|---|---|---|---|---|
| Nothing animates | — | — | — | Nothing to remove |
| Door and link state (V1) | hover, focus | instant | — | Unchanged; state is colour and underline only |
| Focus ring (V3) | `:focus-visible` | instant | — | Unchanged and visible |
| Anchor scroll (V10) | the compare anchor | native `scroll-behavior: smooth` inside `@media (prefers-reduced-motion: no-preference)` | native | `auto`, forced in the reduce block |

`styles.css` contains no `transition`, no `@keyframes` and no `animation` property. The runner's
reduced-motion pass at V14 reports every computed transition and animation duration at 0s, elements
and pseudo-elements alike.

**The brief's V6, considered and not shipped.** The brief offers a one-time reveal with the two
timeline blocks as the animated elements, disabled by a `min-height: 700px` query so it never fires
inside the first two screens at V14 and V16. It was costed and rejected for this build, for two
reasons and not on taste. First, V6 needs the `IntersectionObserver` that D-039 has not approved, and
the contract is explicit that a mock ships its no-JavaScript state until D-039 decides. Second, the
no-script state of a reveal is the whole point of this direction: **all four steps must be visible at
rest**, which is exactly what AREA 17 failed at capture (C33) and what the brief's Acceptance row
demands. Building the reveal would have added a state the page must be complete without, and M09
already measured what reserving space for a move costs — 85 to 200px of hole that the studio critic
read as a void rather than as composition. The honest version of this direction is still: two days,
four steps, all of them painted on first paint. If D-039 lands, the move is one observer and one
class on `.day-col`, and the page it animates is the page that already exists.

V8 (the schedule draw) was also available to a direction with a day diagram. It is not built for the
same reason and, in this composition, would animate the rail rather than the words — the rail is the
least informative thing on the screen.

## Assets

| Asset | Where | Alt text | Consent |
|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` | Header lockup (27px on phones, 32px from 768) and the footer plate (32px) | `alt="GT School"` | Brand file, unmodified; no recolouring, no redrawing |
| `../shared/img/gt-anywhere-logo-h.svg` | Footer, on the `--color-navy` panel, 32px | `alt="GT Anywhere"` | Brand file, unmodified. The white-lettering mark is only ever on navy (`copy.md` section 8) |
| Photographs | **None** | — | DD-42's default state. Every photograph in `ASSETS.md` shows an identifiable child (re-checked 2026-09-11) and AD-11 covers child imagery whether or not a face is visible, so no file is usable before Nari's written permission naming website and paid-advertising use (RF-25) |

**The photographed state, if RF-25 and parity clear.** The brief allows one 3:2 photograph at each
timeline head: `georgetown-science.webp` at `object-position: 50% 45%` for Georgetown Campus and a
Nari-confirmed GT Anywhere photograph for the other, at most 560 CSS px wide, which is inside the
720px crop-aware maximum at DPR 2 for that file (CONTRACT.md section 5, R13). Each would carry its
one-sentence caption from `copy.md` section 9 — "Students run a science experiment." for the
Georgetown file; the GT Anywhere file gets its caption recorded there before use. Both or neither
(DD-42): a photographed Georgetown column beside an unphotographed GT Anywhere column would rank the
two days, which is the one thing this band must not do. The fallback if a photograph is rejected
(DD-31) is the state shipped today — the band is designed to be complete without imagery, and the
photographs would sit above the column heads rather than inside the timelines, so no fold row
changes.

## Departures

| Departure | Reason |
|---|---|
| **The school name is a column head over a rule, not a line inside the tinted panel** | The brief says "Each step is a repeated module: time label, the deck sentence, a connector" and leaves the head's placement open. Built the obvious way — name inside the panel — the band left a 48 to 81px gap between the heading and its first word, and at V11, V14 and V17 the bottom edge landed in it: the runner returned FALSE FLOOR on all three. The column head closes the gap, and it is the comparison table's own construction (serif header over a rule, tinted cell beneath), so the two comparisons on the page are built alike. Measured before and after in the Fold section |
| **No `gt-icon.svg` on the doors; a drawn 9px node instead** | `gt-icon.svg` is entirely `#E48B53`. The brief assigns this screen's single accent use to the compare-anchor rule, so two accent-orange marks beside the door labels would spend it twice. M15 left the icon out on the same reasoning and M01 kept it on the opposite one; this brief's explicit accent assignment settles it here. The drawn node also does work the file cannot: it is the same shape as the timeline's rail nodes, so the cue set is a key rather than an ornament. DD-04's redundancy is met by label, name, tint and shape |
| **The h1 steps down to `--text-xl` at V10** | The contract's landscape recipe, which the brief cites. At 750 by 342 the sentence sets in three lines at 24.17px and the row measures 291 of 318 |
| **Doors stack below 1024 rather than below 768** | At a 340 to 373px two-up card the longer CTA label wraps to two lines while the shorter does not, and two doors of equal weight cannot have one button twice the height of the other. Stacked, both labels set on one line: measured at V11 and V12, both cards 704 and 770px wide, heights equal, both CTAs 44px |
| **The compact door CTA drops to `--space-3` of horizontal padding on phone rows** | Measured: at 360 the compact card gives the button 294px, and "EXPLORE THE GEORGETOWN CAMPUS" needs 246.5px of Inconsolata 600 plus the gap and arrow — 296px with the default `--space-4` ring. The ring gives way rather than the label or the type size. Before the change the Georgetown button stood 52.5px against the other's 44 at V1 and V18; after it, eighteen of nineteen rows measure 44 and 44 |
| **At V18 (320 by 256) the Georgetown CTA still wraps to two lines, 52.5px against 44** | Measured and not fixable without making something worse: at 320 the card offers the button 254px and the label alone is 246.5px, so it fits only with the arrow removed and the padding at zero. V18 is the WCAG 1.4.10 reflow row, exempt from the fold rule (DD-44); the requirement there is no horizontal scroll and preserved content and function, which the runner confirms. The two cards stay equal in width and height. Flagged rather than hacked |
| **Two short-laptop height tiers at `min-width: 1024px`** (`max-height: 789px`, then `min-height: 600px` and `max-height: 689px`) | One rule cannot serve V13 (768 tall), V14 (720) and V15 (648): they are 48 and 72px apart and the h1 differs by 7px between them. Each tier gives back the same ring of first-screen padding one step further, so the day band's own heading or column head — not a strip of cream — is what the edge cuts. The 600px floor keeps V19 out, where the page is being zoomed. The h1 is never resized to buy the space |
| **The day band's heading-to-columns gap is `--space-5` below 1280 and on short laptops, `--space-6` from 1280** | Measured, not styled by feel: the two values put the band's own ink across the bottom edge at V11 to V17. Recorded here because a reviewer will otherwise read the smaller gap at 768 to 1279 as an accident |
| **`grid-template-rows: subgrid` on the day columns** | The "same finish" has to be true, not approximate: subgrid puts both names in one row and both bodies in the next, so the bodies measure identically (640 by 237.5 at 1440) and the two finish marks land on one line (1188.2 in both columns). Where subgrid is unsupported the rows fall back to auto and the columns simply sit at their natural heights; nothing is hidden or broken |
| **Lengths outside the token set** | 1px hairlines (column head rule, panel edges, rails, ticks, table and list rules); the 3px accent rule; the 2px focus bands and the 3px forced-colours outline; the 9px node, finish square and the rail's 4px offset; the 44px target floor and the 56px header row (`3.5rem`); the marks at 27 and 32px (K12 V2); letter-spacing .06em and .08em; underline offset .18em; the `ch` measures (35ch h1, 30ch h2, 42ch step sentence, 40ch fact, 48ch footer facts); the breakpoints 370, 600, 768, 900, 1024, 1280, 1440 and the height queries 479, 600, 689, 789. Rule 14 governs colour, type, space, radius, shadow and duration — all of those are tokens here — and these are geometry, each measured in the runner |
| **The `--color-border` connectors are below 3:1** | The brief specifies `--color-border` for the connectors. They measure 1.42 to 1.56 on the two tints. The diagram's meaning is carried by the `--color-text` nodes (16.10 and 16.30) and the labels, so 1.4.11 is met without the hairline; it is reinforcement. Flagged rather than changed, because changing it would depart from the brief's own Colour row |

## Flagged slots

| Slot | Q id | What ships |
|---|---|---|
| "Current families" label and destination | Q-002 | The label and `community.gt.school`, header and footer and the families band |
| The four application steps, identical for both schools | Q-007 | `copy.md` section 5's four steps as written |
| Tuition and access, Georgetown column | Q-011 (decided) | "Tuition on request. Ask admissions." No figure |
| After 8th grade | Q-013 | "Families plan the path after 8th grade with admissions.", repeated in both columns (DD-43) |
| Intensive-weekend logistics | Q-017 | Only the deck's cell: "Four intensive weekends a year in Georgetown." No dates, no cost, no travel note |
| Outcome figure | Q-019 | Withheld. No speed multiplier, no SAT target, no percentile beyond the admissions bar |
| TEFA window, owner and expiry | Q-021 | The module's two sentences and the eligibility link, no date |
| Accreditation | Q-033 | Withheld entirely: no claim, no mark, and the JSON-LD carries none |
| Weekly check-in wording | Q-035 (decided) | "Live Guides online, with a one-to-one check-in every week." |
| `school=` parameter name | DD-25 convention, confirmed in S5 | Every application link carries `?school=georgetown` or `?school=anywhere` |
| Holly's unifying GT School element | Q-001 | Not present. It would sit beside the header lockup when it exists |
| Section 9 wayfinding | proposed for Nari | "Across the day" and the three sibling step labels, and the skip-link label, are section 9 entries and stay proposed until Nari agrees them |

## Parent questions

From `0_plan/05-landing-mockups-plan.md` section 6c (PQ-01 to PQ-14).

| Question | Answered here | Where |
|---|---|---|
| PQ-01 What is GT School? | Yes | The h1 |
| PQ-02 Is it for my child? | Yes | The proof strip's first fact and the admissions line; the table's Admissions row in both columns |
| PQ-03 In person or online, what are my options? | Yes | The two doors, and then the two timelines, which show what each option is actually like |
| PQ-04 Where is the campus? | Yes | The h1, the door line, the table's "Where and how" |
| **PQ-05 What does a day look like?** | **Yes, and this is the direction's own question** | The two timelines, then the table's "The day" row |
| PQ-06 What does it cost, and can TEFA help? | Yes for GT Anywhere ($10,400, TEFA module); Georgetown defers to admissions (Q-011) | Table, TEFA module |
| PQ-07 How do I apply? | Yes | "How to apply", four steps, two scoped application links |
| PQ-08 Who teaches my child? | Yes | "with live sessions from Guides" in the GT Anywhere timeline, the table's Guides row, the proof strip's third fact. Never "advisor" |
| PQ-09 How much in-person time does GT Anywhere have? | Yes | "Across the year" on the GT Anywhere timeline and the table's "In-person time" row |
| PQ-10 What results, and is it accredited? | **Deferred by decision** (G0.5 items 2 and 3): the page is silent, and the route is "Talk to admissions" in the connect list. No outcome figure and no accreditation claim exists that a register row supports |
| PQ-11 What happens after 8th grade? | Partly: the table says families plan it with admissions (Q-013 open) | Table |
| PQ-12 I am a current family, where do I go? | Yes | Header link and the families band |
| PQ-13 I am not ready to apply, what can I do? | Yes | The four secondary CTAs |
| PQ-14 Is GT School part of Alpha School? | Yes | The provenance line, once |

Deferred to the school sites by design: the detail behind each door (curriculum pages, calendars,
staff), because the landing's job is to route in ten seconds (REQ-012) and both doors lead to sites
that already hold that detail.

## Self-check

Greps against the sixteen non-negotiable rules of `BUILDER-BRIEF.md`, run on the shipped files:

| Check | Result |
|---|---|
| `grep -c "<form" index.html` | 0 |
| `grep -c "<script" index.html` | 1 (the JSON-LD block) |
| `grep -c "<input\|<select\|<textarea" index.html` | 0 |
| `grep -c "#" styles.css` (raw hex) | 0 |
| `grep -cE "(^\|[;{ ])transition\s*:" styles.css` | 0. `grep -nE "transition\|@keyframes\|animation" styles.css` returns two lines: a comment, and the reduced-motion block's `transition-duration: var(--duration-none) !important; animation-duration: var(--duration-none) !important` |
| Hosts in `href` | gt.school, www.gt.school, anywhere.gt.school, apply.gt.school, community.gt.school, schema.org only |
| Numbers in visible text | 90, 10,400, 9, 8, 512, 270, 9481, 2026, 09, 10 |
| "advis" in visible text | 0. The one match in the file is the `data-type="advisor"` attribute value, which the rule allows |
| Page weight | 48 KB of HTML and CSS, excluding the two shared SVGs |

**First screen at 390 by 844 (V9):** header 56, h1 286, provenance 315, Georgetown CTA 445, GT
Anywhere CTA 568 — both doors complete, with the compare anchor and the run-in door lines below them
and the page continuing past the edge. At 390 by 664 (V3, the same phone with browser chrome) the
limit is 640 and the last CTA is 568.

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M14-the-day`

```
## M14-the-day: 37 pass, 0 fail

check-mocks: OK
```

### `python3 1_spec/tools/check-claims.py`

(run over every mock; the M14 block and the run's verdict)

```
## 0_plan/mockups/M14-the-day/index.html
| Figure on the page | Register row | Occurrences | Status |
|---|---|---|---|
| "designed for students in the 90th+ percentile" | CR-011 | 4 | Unverified, public |
| "$10,400/year — GT Anywhere annual tuition, fully or partially covered | CR-021 | 1 | Unverified, public |
| Four in-person intensive weekends a year in Georgetown (four named 202 | CR-032 | 5 | Unverified, public |
| Georgetown mornings: "two 50-minute blocks and one 25-minute block wit | CR-033 | 4 | Unverified, public |
| GT Anywhere mornings: "two to three hours of 100% cognitive load" (aca | CR-034 | 2 | Unverified, public |
| Guides hold weekly one-to-one check-ins with each student ("Academic A | CR-035 | 2 | Unverified, public |
  NOTE unverified rows on the page (allowed in mocks, blocked for production): ['CR-011', 'CR-021', 'CR-032', 'CR-033', 'CR-034', 'CR-035']

check-claims: OK
```

9, noon, two, three and four map to CR-033, CR-034 and CR-032 as the brief requires, and nothing
else on the page is a figure.

### `node 0_plan/tools/shots.mjs 0_plan/mockups/M14-the-day` — final run

```
# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T15:34:40.975Z; page `/0_plan/mockups/M14-the-day/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 313 | 342 | 472 | 595 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 283 | 312 | 442 | 565 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 286 | 315 | 445 | 568 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 286 | 315 | 445 | 568 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 257 | 286 | 416 | 539 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 257 | 286 | 416 | 539 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 287 | 316 | 446 | 570 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 259 | 288 | 418 | 542 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 286 | 315 | 445 | 568 | yes | report: page height 7654 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 291 | 291 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 237 | 267 | 506 | 762 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 243 | 272 | 512 | 769 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 288 | 524 | 524 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 309 | 523 | 523 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 308 | 499 | 499 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 316 | 346 | 618 | 618 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 316 | 346 | 618 | 618 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 344 | 394 | 533 | 655 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 288 | 524 | 524 | yes | report: scrollWidth 1024 |

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
| V1 | yes | content reaches 730 of 740 and more follows below |
| V2 | yes | content reaches 628 of 629 and more follows below |
| V3 | yes | text cut by the edge, 659 to 679 |
| V4 | yes | content reaches 655 of 659 and more follows below |
| V5 | yes | text cut by the edge, 703 to 723 |
| V6 | yes | content reaches 825 of 839 and more follows below |
| V7 | yes | content reaches 681 of 681 and more follows below |
| V8 | yes | text cut by the edge, 729 to 749 |
| V9 | yes | text cut by the edge, 822 to 852 |
| V10 | yes | text cut by the edge, 326 to 346 |
| V11 | yes | text cut by the edge, 1005 to 1037 |
| V12 | yes | text cut by the edge, 1177 to 1197 |
| V13 | yes | text cut by the edge, 754 to 769 |
| V14 | yes | text cut by the edge, 692 to 727 |
| V15 | yes | content reaches 632 of 648 and more follows below |
| V16 | yes | content reaches 888 of 900 and more follows below |
| V17 | yes | content reaches 952 of 960 and more follows below |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 554 to 587 |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass
```

### Screenshots read by eye, at full size and in crops

`qa/V1.jpg` to `qa/V19.jpg` (viewport, every row), `qa/V2-full.jpg` and `qa/V14-full.jpg` (full page),
`qa/V2-rootx2.jpg` (375 with a 32px root: the mark on its own row, the two links beneath it, no
overlap, no horizontal scroll), `qa/focus-cta.jpg` (the `--color-focus` ring around the Georgetown
CTA on its tinted card), `qa/focus-plate.jpg`, `qa/focus-footer.jpg` and `qa/focus-footer-plate.jpg`
(the two-colour ring on navy), `qa/forced-colors.jpg`. Rows opened and read individually after the
final pass: **V1, V2, V5, V10, V11, V12, V13, V14, V16, V17, V18, V19**, plus `V2-rootx2`,
`focus-cta`, `focus-footer` and `forced-colors`; and, from the full-page captures and element
captures, the day band at 1280 and 375 in normal rendering and at 1280 and 390 in forced colours,
the comparison band at 1280 and 390, the proof band at 375, the steps band at 1280 and the footer at
1280. V3, V4, V6, V7, V8, V9 and V15 were read from the runner's measurements and their next-band
evidence rather than opened one by one; they are the same layout as rows that were opened, at a
different height.

**Forced colours, checked by eye at V14 and on the day band alone.** Each door and each timeline body
takes **one** outline; nothing is struck through; the rails, the nodes, the time-label ticks and the
column-head rules all survive because every one of them is drawn as a `border`, and the finish marks
show as filled `CanvasText` squares on the two bodies' edges. The forced-colours block is the **last**
block in the stylesheet, so it outranks the token rules by source order instead of losing to them at
equal weight — M07's finding, where a per-segment stroke struck through every Georgetown label until
the block moved and the stroke became one outline per band.

### Runner passes

Four. Pass 1 built the band with the school name inside the tinted panel and returned three FALSE
FLOOR rows (V11, V14, V17). Pass 2 lifted the name to a column head and passed every row, but the
day columns were not equal in height because the base `.day-col { display: flex }` rule sat after the
subgrid media query and won on source order. Pass 3 fixed the order and the row gap, and every row
passed with the two bodies measured identical. Pass 4 is the final one above, after the compact CTA's
padding was measured and reduced so both door buttons stand 44px at V1.
