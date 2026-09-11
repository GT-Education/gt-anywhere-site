# M23 The System: rationale

| Field | Value |
|---|---|
| Mock | M23 "The System", `0_plan/mockups/M23-the-system/` (`index.html`, `styles.css`, this file, `qa/`) |
| Brief | `0_plan/kb/briefs/M23.md`, binding, under `0_plan/kb/briefs/CONTRACT.md` v2.1 and the borrowing rule at the head of `M21.md` (DD-48); runbook `0_plan/17-design-studio-runbook.md` sections 4, 6 and 7; `0_plan/mockups/shared/BUILDER-BRIEF.md` 16 rules; `copy.md` v1.1; `tokens-v2.css` and `TOKENS-V2.md`; `fonts.css`; `ASSETS.md`; `CONTINUITY.md` |
| Lens order | L3 mission, L1 objective, L2 continuity, L4 exclusivity. New direction, drawn from the Design Library at `~/projects/libraries/design` |
| Source languages | `insp-onepersonteam` "Diagram White" (primary), `insp-tsai2020` "Civic Hairline" (support). Read at source: the entries in `library-data.js`, `examples/millwright.html` and `examples/riverbend.html`. No code was copied from either file; they are a different project with a different palette and different type |
| Built | 2026-09-11, design engineer (fork of the design director, Opus 5). One build pass, nine measured iterations inside it, all before hand-over |
| Tools | `node 0_plan/tools/shots.mjs 0_plan/mockups/M23-the-system` for the nineteen rows, the false-floor test, forced colours, reduced motion, the doubled root font and mark geometry; `node 0_plan/mockups/M23-the-system/qa/M23-measure.mjs` (written for this mock) for h1 line counts, first-screen part heights, connector orientation and connector-to-label clearance. No production host was opened; no browser tool was driven |
| State | No JavaScript (D-039 undecided): one `<script>`, the JSON-LD block, and no `data-d039` declaration. Nothing draws and nothing reveals: every node, connector and junction dot of the map is painted at rest. No photograph in either state (DD-42 default; the brief's Imagery row is diagrammatic, so the photographed state is identical to this one) |
| Copy | `copy.md` v1.1 sections 0 to 8 verbatim. From section 9: the schematic labels "In person" and "Online" as the two place-card strips, and the skip-link label. One label is not yet in section 9 and is flagged below: "The program" |

## Direction

One admissions bar, one program, two places. The hero is not a picture of the school, it is the
**diagram of that sentence**, and the two doors are where the diagram ends rather than a pair of
buttons standing beside it. A parent sees the shape of GT School — one bar, one program, two ways in —
before reading a word of argument about it, and the only way out of the picture is through a door.

The run is drawn as plumbing: hairline cards with a tinted header strip, joined by right-angled
`--color-accent` connectors with a filled junction dot where a line branches. Nothing curves and
nothing crosses. The accent appears exactly once on the first screen, and it is the wiring — the one
thing on the page whose job is to say *these are connected*.

The lens order shows in the order of the screens: the mission first (the diagram argues that the two
schools are one school), then the objective (the doors end the run), then continuity (the compare
anchor, the table, the estate's own tints and faces), then exclusivity (the bar, the four facts).

Below 768 the map reorders: the two place cards come first, then the two door sentences, then the two
upstream facts, because a parent on a phone is choosing, not studying (C18, orientation first). The run
stays drawn there as a left spine with a stub and a filled dot at each card — a form that takes three
to five cards without a redraw, which is DD-21 drawn rather than asserted.

## h1

The h1 is the umbrella sentence, `copy.md` section 1, verbatim, set in Literata 400 at `--text-3xl`
with `--leading-tight` and `max-width: 35ch` (at 1024 and above, the brief's eight of twelve columns,
`min(35ch, 66.666% - var(--space-4))`). It is the only h1 on the page. A no-break space between "from"
and "anywhere." keeps the last line to two words at the seven-line widths. Everything in the map is an
illustration of this sentence, which is why the map's card titles are the deck's own words and not a
vocabulary invented for a diagram.

The visually hidden `<h2>` "Two ways to attend" (an allowed section 1 heading) names the map for a
screen reader; the two school names are `<h3>` inside it, so no heading level is skipped.

**Measured line counts** (`qa/measurements.md`): **7 lines at 360 to 393px wide, 6 at 402 to 430, 4 from
768 up, 3 at V10 (750 by 342, where the h1 steps down one token), and 8 at the 320px reflow row.** The
contract's estimate of 6 at V2 is one line optimistic, as M12 and M10 both found; the compact door rule
absorbs it.

## What was borrowed, and what was deliberately not (DD-48)

DD-48 binds this direction: borrow the composition, the rhythm and the structural devices, never the
palette and never the typefaces. GT School's ground, surfaces, navy, accent and Literata, Inter Tight
and Inconsolata are fixed by K12's "what never changes" list and by `tokens-v2.css`.

| Source | Borrowed | Where it is on the page |
|---|---|---|
| `insp-onepersonteam` "Diagram White" | **The map as the hero**, not a screenshot or a photograph | The first screen is the diagram; nothing else competes with it |
| | **The group card**: a rounded rectangle with a 1px hairline border and a faintly tinted header strip carrying a small uppercase wide-tracked title | `.node` at `--radius-lg` with a `--color-border` hairline; `.node-strip` on `--color-surface` in `--font-sans` 500 `--text-xs` uppercase at 0.08em |
| | **Orthogonal connectors with a filled junction dot** — right-angled polylines, never curves, so the diagram reads as plumbing | `.wire` and `.spine`: every segment is a horizontal or a vertical box; a 5px filled dot at each junction |
| | **The full-width banner beneath the map** with a circular-arrow glyph and one bold sentence | `.banner` carrying the compare anchor |
| | **Stillness**: the source holds dead still for more than half its frames | Nothing on this page animates at all |
| `insp-tsai2020` "Civic Hairline" | **Everything drawn in 1 to 1.5px hairlines, no fills and no shadows** | Every card, strip, rule and table row is a 1px `--color-border` hairline; `--shadow-1` and `--shadow-2` are unused |
| | **The label pair at roughly 3:1** — a small tracked uppercase label above a larger name | Each place card: `--text-xs` uppercase strip (12 to 13px) over Literata `--text-xl` (22 to 28px), a measured 1:2.2 at 1440 |

| Source device | Deliberately **not** borrowed | The decision |
|---|---|---|
| Vermilion `#E86312` on near-white `#FBFBFB`, warm near-black `#130E07`, structure grey `#A09E9E` | Not used | DD-48. The palette is GT's: `--color-bg`, `--color-surface`, `--color-anywhere-tint`, `--color-navy`, `--color-text`, `--color-accent`. A mock that imports a source palette is off-brief, not a variation |
| Inter and JetBrains Mono (the source example's faces) | Not used | DD-48 and K12 G3: Literata, Inter Tight and Inconsolata only, from `fonts.css`, self-hosted from the mirror |
| The three-up grid of **app-glyph tiles** inside each card | Not used | A school does not own a toolchain, and a grid of invented glyphs would put marks on the page that stand for nothing. The cards hold the deck's own sentences instead |
| The **dark terminal inset** in monospace with tinted output | Not used | Same reason: it is a software-product device, and a terminal on a K-8 school's front door reads as someone else's brand. Inconsolata stays where the contract puts it — buttons and figures |
| The **snap-zoom camera** (step-end region-to-region cuts) | Not used | It needs a script, and D-039 is undecided (Escalated to Johnny). No such move exists in K4 section 8.1, so proposing it would be a D-031 first. The map is complete at rest instead |
| The source's **connector draw-in** and the Civic Hairline **staggered hairline draw** | Not used | Same: V8 is the only draw in the motion vocabulary and it is a schedule move needing the D-039 observer. A connector that draws would leave the diagram incomplete without the script (C33: content complete at rest) |
| Civic Hairline's two greens, the yellow travelling dot, and the **bilingual label pair** | Not used | The palette again, and the page has one language. The 3:1 pair is borrowed as a *size relationship*, not as a transliteration |
| Civic Hairline's **orbital rings, constellation graph, terrain-as-data and equalizer skyline** | Not used | Each of those is a figure that would have to state something the claims register does not carry. The only figure on this page is the diagram of a sentence the deck already approves |

## Exemplars, as the brief names them

| Exemplar | What it contributed | Where |
|---|---|---|
| `examples/millwright.html` (the library) | The map-as-hero composition and the grouped-card-plus-connector anatomy, read as structure only | The first screen |
| `0_plan/kb/exemplars/university-of-the-arts-london-1440-full.jpg` (C30) | Peers named in full under one institution: both schools are named as full names inside the same run, neither subordinated | The two place cards, and the comparison table's column heads |
| `0_plan/kb/exemplars/getty-1440-full.jpg` (C30) | One shared sentence above two equal links: the h1 is the shared sentence and the two CTAs are the equal links, at the same size, weight, fill and corner | h1 plus the two door CTAs |
| `0_plan/kb/exemplars/area17-1440-full.jpg` | **Avoided** (C33): its regions rendered blank at capture. Every node here is painted at rest — the runner's own captures at all nineteen rows show the full map with no trigger of any kind | `qa/V1.jpg` to `qa/V19.jpg` |

## Brief compliance

| Brief section | What was built | Evidence |
|---|---|---|
| Mock id, name, lens order | M23 "The System"; L3, L1, L2, L4 as above | This file, Direction |
| Source language | Diagram White primary, Civic Hairline support, both read at source before building | The two tables above |
| What is deliberately not borrowed | Seven omissions named, each with its decision | "What was borrowed" above |
| Thesis | The hero is the diagram of "one admissions bar, one program, two places"; the doors are where the run ends | `qa/V16.jpg`, `qa/V14.jpg`, `qa/V2.jpg` |
| Exemplars | UAL and Getty applied, AREA 17's defect avoided and the avoidance measured | Table above |
| Composition: header 56; h1 across 8 columns; provenance | Header row `min-height: 3.5rem` plus its hairline, measured bottom **57** at every row from 375 up; `h1 { max-width: min(35ch, 66.666% - var(--space-4)) }` from 1024; provenance once, `data-fold="provenance" data-slot="provenance"` (checker R18) | `qa/fold.md` |
| Composition: the map spans 12 columns at 1024 and above, stacks below 768 | At 1024+ the map is a five-track grid (card, wire, card, wire, split column) across the full content width; at 768 to 1023 it is two cards, a wire row, then the two places side by side; below 768 a single column with a left spine | `styles.css`, three `@media` blocks |
| Composition: three cards in a row joined by orthogonal connectors with a filled 5px junction dot | Read as three positions across the row: **ADMISSIONS**, **THE PROGRAM**, and the split column holding both place cards. Connector stroke 2px, junction dot **5px** exactly as the brief states | `qa/V16.jpg`; `qa/measurements.md` |
| Composition: "ADMISSIONS" holds the deck's admission sentence | Section 3 "Admissions" cell verbatim, the cell that is identical in both columns — which is itself the argument that there is one bar | `index.html` |
| Composition: "THE PROGRAM" holds the mastery and Guides sentences | Section 3 "Same school, same academics" cell plus the section 4 Guides fact, both verbatim | `index.html` |
| Composition: the run splits at a junction into two place cards with label, name, line and CTA | The split is drawn at 1024+ as an in-feed from the program's centre, a junction dot, a trunk, and two stubs into the two blocks; each place block carries its strip label, its Literata name, its CTA with the school mark, and its door sentence as the block's tail | `qa/V16.jpg` |
| Composition: at V14 and V16 the whole map plus both CTAs and the compare anchor sit inside the first screen | **V16: met.** Map bottom 809.94, both CTAs at 480 and 723, the compare anchor's sentence fully readable, only the banner's lower border cut by the 900px edge. **V14: partly met** — the whole map (712.56) and both CTAs (433, 642) are inside 720, the compare anchor is not. Corrected figure with the arithmetic below | `qa/measurements.md`, "Fold" |
| Composition: below 768 the two place cards come first, the two upstream cards follow | Explicit grid placement, not `order`: place cards rows 1 and 2, the two door sentences rows 3 and 4, ADMISSIONS row 5, THE PROGRAM row 6 | `qa/V2-full.jpg` |
| Composition: a full-width banner on `--color-surface` beneath the map carries the compare anchor | `.banner`, full content width, `--color-surface`, `--radius-lg`, a drawn circular-arrow glyph and the anchor sentence as the link (checker R19: it precedes the table) | `qa/V16.jpg` |
| Typography | Contract roles. Card strips `--font-sans` 500 `--text-xs` uppercase tracked 0.08em on a `--color-surface` strip; card body `--text-base` at `--leading-prose`; place names Literata `--text-xl` | `styles.css` |
| Colour and surface | `--color-bg` page; fact cards on `--color-bg` with a `--color-border` hairline and a `--color-surface` strip; the connector run is the first screen's one accent use, junction dots filled; Georgetown on `--color-surface`, GT Anywhere on `--color-anywhere-tint`; focus per contract section 4 | `qa/V16.jpg`, `qa/focus-cta.jpg` |
| Imagery: diagrammatic, no photograph in either state | Five `<img>` on the page, all of them the two real mark SVGs. Nothing from `ASSETS.md` is used | `grep -c "<img" index.html` is 5 |
| Imagery: the two school marks at the foot of their place cards, sized to K12 V2 | At the foot from 768 up: on their own line to 1179, beside the CTA from 1180. Measured **32px at 1440** on both place marks. Below 768 the mark is absent from the card, a measured departure named below | `qa/fold.md` Mark geometry |
| Motion: still, complete at rest, no connector draw | Nothing animates: zero `transition`, zero key-frame rules. Runner: every computed transition and animation duration 0s under `prefers-reduced-motion: reduce`. V10 anchor scroll inside `no-preference` only | `qa/fold.md` Reduced motion; Motion spec below |
| Copy: sections 0 to 8 verbatim, card titles from section 9 | Sections 0 to 8 verbatim; "In person" and "Online" from section 9; "Admissions" is a section 3 row label and an allowed eyebrow; **"The program" is not yet in section 9** and is flagged | Flagged slots |
| Conversion | Doors end the run on the first screen at every row; compare anchor as the map's banner; table with repeated values; proof; steps; secondary CTAs; current families; footer | `qa/V14-full.jpg`, `qa/V2-full.jpg` |
| Acceptance: connectors orthogonal only, no connector crosses a label, measured at every row with the clearance reported | **All segments orthogonal at all 19 rows; 0 overlapping segment-and-label pairs; smallest clearance 8.00px** | "Connectors" below, `qa/measurements.md` |
| Acceptance: the map survives forced colours with every node, connector and junction legible, checked in a capture | Checked and fixed twice in the capture | "Forced colours" below, `qa/forced-colors.jpg` |
| Acceptance: rationale names DD-38, DD-39, DD-47, DD-48, D-039 | All five named, with DD-04, DD-12, DD-14, DD-19, DD-21, DD-42, DD-43, DD-44, DD-46, MN-16, RF-07, RF-25, RF-37, RF-53, RF-55, RF-58, SE-13 | Decisions applied |

## Fold: designed to, then measured

Method: CONTRACT.md section 2, with the h1 height taken from the clamp size times the **measured** line
count at `--leading-tight`, gaps from the space tokens as `styles.css` sets them per height band, and the
card heights from the CSS box (border 1 + strip 7 + label line + 7 + rule 1 + name padding + name line +
foot padding + CTA 44 + foot padding). Height bands: below 761px tall on phones the masthead gaps are
8 / 8 / 8; from 768px wide and below 800px tall they are 8 / 8 / 16; from 1024px wide and 800px tall
they are 24 / 8 / 16. The runner then measured every row.

| Row | Viewport, limit | Designed-to sum to the second CTA | Measured CTA Georgetown | Measured CTA Anywhere | Slack | Result |
|---|---|---|---|---|---|---|
| V2 | 375 by 629, limit 605 | 57 + 8 + h1 7 lines 219 + 8 + 21 + 8 + card 125 + 8 + 117 = **571** | 438 | **571** | 34 | PASS |
| V5 | 414 by 715, limit 691 | 57 + 8 + h1 6 lines 193 + 8 + 22 + 8 + 126 + 8 + 117 = **547** | 412 | **545** | 146 | PASS |
| V10 | 750 by 342, limit 318 | 57 + 8 + h1 3 lines at `--text-xl` 83 + 8 + 22 + 8 + 120 = **306** (doors side by side) | 305 | **305** | 13 | PASS |
| V14 | 1280 by 720, limit 696 | 57 + 8 + h1 4 lines 199 + 8 + 22 + 16 + card 131 + tail 62 + 16 + 123 = **642** | 433 | **642** | 54 | PASS |
| V16 | 1440 by 900, limit 876 | 57 + 24 + h1 4 lines 212 + 8 + 23 + 16 + card 156 + tail 71 + 16 + 141 = **724** | 480 | **723** | 153 | PASS |

Three of the brief's own expectations did not survive contact and are corrected here, with the reason:

| The brief's expectation | What the measurement shows |
|---|---|
| "the whole map plus both CTAs and the compare anchor sit inside the first screen" at **V14** | The map and both CTAs are inside (map bottom 712.56, CTAs 433 and 642 of 720); the compare anchor is not (banner 736.56 to 814.56). At 1280 by 720 the header (57), a four-line h1 (199), the provenance (22) and a four-card map with both door sentences already spend 712 of 720. The banner would only fit by taking a token out of the map, and the map is this direction's whole argument. The anchor is the first thing under the fold, one scroll notch away |
| The same at **V16** | Met, after tightening three gaps by one token each at 1024 and above on viewports 800px tall and taller (`--m23-rgap` 24 to 16, the map's top margin 32 to 16, the banner's top margin 24 to 16 and its padding 16/24 to 8/16). Before that change the banner ended at 944 of 900 and its sentence was cut across the x-height; after it the sentence is fully readable and only the banner's lower border crosses the edge |
| The contract's "6 lines at V2" | 7 lines, as M12 and M10 already measured. The compact door rule absorbs it with 34px to spare |

**The false floor.** All nineteen rows pass the runner's reserve test: visible content reaches into the
bottom 24px and more lies beyond the edge. What does the work is content a parent would actually read,
not a container's fill: on the phone rows it is a door sentence cut by the edge (V1 728 to 748, V2 614
to 634, V4 641 to 661, V7 667 to 687, V8 734 to 749, V9 839 to 854, V10 332 to 352); at V13 and V15 it
is the second door sentence (748 to 769, 644 to 665); at V14, V16 and V17 it is the banner or the
comparison band's own hairline (713 of 720, 893 of 900, 945 of 960). V18 is the reflow row and V19 the
zoom row, where the fold rule does not apply (DD-44).

## The runner, pasted from this pass

```
| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 93 | 318 | 347 | 472 | 605 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 57 | 284 | 313 | 438 | 571 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 287 | 316 | 440 | 574 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 287 | 316 | 441 | 574 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 258 | 287 | 412 | 545 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 266 | 295 | 435 | 577 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 256 | 285 | 410 | 544 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 260 | 289 | 414 | 548 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 295 | 324 | 464 | 606 | yes | report: page height 6922 |
| V10 | 750 by 342 | fold | 318 | 57 | 148 | 178 | 305 | 305 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 238 | 268 | 694 | 694 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 244 | 273 | 702 | 702 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 243 | 273 | 410 | 690 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 264 | 294 | 433 | 642 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 271 | 301 | 441 | 590 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 293 | 323 | 480 | 723 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 293 | 323 | 480 | 723 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 93 | 349 | 399 | 530 | 663 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 243 | 273 | 410 | 604 | no | report: scrollWidth 1024 |

## Result: all required rows pass
```

## Connectors: orthogonal, and measured against every label

The brief's acceptance row asks for two measurements at every row, not an assertion.

**Why there is no SVG.** M10 shipped a real defect: labels declared at 14px rendered at 11 to 13px
because SVG text scales with the viewport transform and no `calc()` can invert it. This map therefore
contains **no `<svg>` element and no SVG text at all**. Every card, strip, name, sentence and connector
is an HTML box; the connectors are `background`-filled `<i>` elements positioned inside grid cells, so
each one is horizontal or vertical *by construction* and type is never inside a scaled viewBox. The
measuring harness reports the SVG-text table as empty at all nineteen rows, and that is the intended
result, not a gap: `qa/measurements.md`, "SVG text".

`qa/M23-measure.mjs` collects every connector segment (the spine, each card's stub and dot, each wire
cell's children, and the four application-step connectors) and every rendered text box in the document,
then reports the axis of each segment and the smallest gap from any segment to any text box.

| Row | Segments | All orthogonal | Overlapping segment-and-label pairs | Smallest clearance | Nearest label |
|---|---|---|---|---|---|
| V1 | 9 | yes | 0 | 8.00px | "Georgetown Campus" |
| V2 | 9 | yes | 0 | 8.00px | "Georgetown Campus" |
| V3, V4 | 9 | yes | 0 | 8.05px | the provenance line |
| V5, V7 | 9 | yes | 0 | 8.06px | the provenance line |
| V8 | 9 | yes | 0 | 8.09px | the provenance line |
| V6, V9 | 9 | yes | 0 | 9.00px | the ADMISSIONS sentence |
| V10 | 4 | yes | 0 | 9.00px | the THE PROGRAM sentence |
| V11, V12 | 12 | yes | 0 | 17.00px | the THE PROGRAM sentence |
| V13, V14, V15, V19 | 13 | yes | 0 | 9.00px | the THE PROGRAM sentence |
| V16, V17 | 13 | yes | 0 | 17.00px | the THE PROGRAM sentence |
| V18 | 9 | yes | 0 | 8.00px | "Georgetown Campus" |

Zero overlapping pairs at every row, and the smallest clearance anywhere on the page is **8.00px**. The
design that makes this true rather than lucky: **no connector ever enters a card.** Every segment lives
in a gutter that is its own grid track (the wire column at 1024 and above, the wire row at 768 to 1023,
the left lane on phones), and each segment stops at the card's border. The smallest clearances above are
the card's own inner padding, so a label would have to leave its card to meet a line.

## Forced colours

Checked in `qa/forced-colors.jpg` at 1280 by 720, and fixed twice from what the capture showed.

| Element | Forced-colours rendering | Result |
|---|---|---|
| Every connector segment, the spine, each stub | `CanvasText`, `forced-color-adjust: none` so the user agent does not blank the fill | Legible |
| Every junction dot | `CanvasText`, filled, visible on the run at 1280 | Legible |
| Every card, the two door tails, the banner, the four step nodes | `CanvasText` hairline border | Legible |
| Every header strip | its bottom rule forced to `CanvasText`, so the card anatomy survives when the tint does not | Legible |
| The GT School mark | on a `--color-bg` plate with `forced-color-adjust: none` — **first capture defect**: the navy-and-orange mark sits on the system ground and would disappear under a dark forced theme | Fixed |
| The GT Anywhere mark | on a `--color-navy` plate with `forced-color-adjust: none` — **first capture defect**: its white lettering vanished on the forced white ground, so the mark read as "GT" with a word missing | Fixed |
| Buttons | `Canvas` with a `CanvasText` border and the system link colour | Legible |
| Focus rings | a 3px `CanvasText` outline at 2px offset, the box-shadow band removed (K3 F38) | Legible |

The block is **last in the stylesheet**, so it outranks the token rules by source order rather than
losing to them at equal weight — the M07 lesson, applied before the first review rather than after it.
M07's specific failure, a per-segment stroke striking through every label, cannot occur here: no stroke
is added to anything that sits under a word, and the clearance harness above would score a zero
clearance if one were.

## Motion spec

| What | Trigger | Duration | Easing | Reduced motion |
|---|---|---|---|---|
| Nothing on the page | — | — | — | — |
| V1 door state, V3 focus (hover and focus change underline and the focus ring only) | pointer or keyboard | instant, no `transition` declared anywhere | — | unchanged; nothing to zero |
| V10 in-page anchor scroll (the compare anchor) | click on `#compare` | native | native | `scroll-behavior: smooth` is declared **only** inside `prefers-reduced-motion: no-preference`, and forced to `auto` in the reduce block |
| V2 door line reveal | **not used**: both door sentences are always visible, at every width | — | — | — |
| V6 section reveal, V8 diagram draw | **not used**: both need the D-039 script, and a map that draws is incomplete at rest (C33). No connector draw exists in K4 section 8.1, so proposing one is a D-031 first | — | — | — |

Runner, this pass: *"PASS: every computed transition and animation duration is 0s (elements and
pseudo-elements)."* `check-mocks.py` R10 confirms zero key-frame rules and zero transitions.

## Layer-2 tokens used, with their rows

Every layer-2 token is PROPOSED; `TOKENS-V2.md` requires the row to be named here.

| Token | Register row | Where it is used |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | **DD-38** (b), R5 | Every type size on the page. `--text-xl` is also the V10 h1 size (a declared departure); line counts measured at all nineteen rows, which is what (b) asks for |
| `--leading-prose: 1.5` | **DD-38** (b), **RF-58** | Door sentences, card bodies, table cells, facts, the sources line, the footer facts. Single-line strings keep `--leading-body` 1.25 |
| `--measure-prose: 65ch` | **DD-38** (b), **RF-55** | Door sentences on the phone rows, the sources line, the steps intro, the TEFA card, the connect list |
| `--color-accent-text` | **DD-39** (a), **RF-07** | The step numerals on the phone form of the application steps (5.14 on `--color-bg`); a DD-19 departure tint |
| `--color-on-navy` | **DD-39** (a), **RF-07** | Every button label, the footer text, the focus ring's outer band (14.58 on navy) |
| `--color-text-muted-on-dark` | **DD-39** (a), **RF-07** | The footer facts block (7.81 on navy); a DD-19 departure tint |
| `--duration-none` and the reduced-motion zeroing | **MN-16** (a), **RF-53**, R8 | The reduce block zeroes every duration on elements and pseudo-elements |

`--color-on-accent`, `--color-focus-on-dark`, `--color-border-strong`, `--ease-standard`, `--ease-out`
and `--ease-in` are **not** used: there is no accent fill carrying text, no focus ring over a navy
surface other than the contract's two-colour ring, no border asked to reach 3:1 on its own, and nothing
that eases.

## Decisions applied

| Id | How it is applied in this mock |
|---|---|
| **DD-48** | The borrowing rule. Composition, rhythm and structural devices borrowed from two Design Library languages; palette and faces are GT's. Seven named omissions, each with its reason |
| **DD-38** (b) | Type roles and the fluid clamp as the working default: h1 Literata 400 `--text-3xl` behind a `--h1-weight` variable so the 300-against-400 test is one edit; place names Literata `--text-xl`; prose Inter Tight 400 at 1.5; labels Inter Tight 500 uppercase at 0.08em; buttons Inconsolata 600 `--text-btn`. Line counts measured at every row |
| **DD-39** (a) | Colour roles: `--color-text` on `--color-bg` (17.69), on `--color-surface` (16.10) and on `--color-anywhere-tint` (16.30); `--color-on-navy` on navy (14.58); `--color-text-muted` for labels and strips (6.25 on `--color-bg`); `--color-accent-text` for the phone step numerals (5.14); the accent used as a **shape** only (the 2px connector run and the 5px dots), never as small text on a light surface |
| **DD-47** | The uniform button corner: every CTA and button is `--radius-md` on all four sides. No filler radius, no cut corner |
| **DD-46** | The contract's surface-dependent fill: `--color-navy` with `--color-on-navy` text on every light surface on this page. The estate's orange footer button is not copied, because K12 F87 measures its label at 2.50:1 |
| **D-039** | Undecided, so the page ships its no-JavaScript state: one `<script>` (JSON-LD), no `data-d039` declaration, no inputs, no reveal, no draw. V6 and V8 are specified above and not shipped |
| G0.5 items 1 to 6 | Umbrella sentence as the h1; no speed figure; no accreditation claim or mark; "Tuition on request. Ask admissions."; Guides everywhere; the provenance line once (checker R18) |
| **DD-04** | The door cue set is the label plus the school mark: the strip carries "In person" or "Online", the card carries its school tint, and the mark sits at the foot from 768 up |
| **DD-12** | Header carries the lockup and two utility links, no menu |
| **DD-14** | The two doors are equal: same card anatomy, same strip, same name size, same CTA fill, corner, size and target, same mark size |
| **DD-19** | Values outside the token set are listed in Departures |
| **DD-21** | Designed for N campuses: the doors are a `<ul>`, and the phone spine takes a third, fourth or fifth stub without a redraw. At 1024 and above a third place would extend the split's trunk by one stub |
| **DD-42**, **RF-25** | Default state: no photograph. Nothing in `ASSETS.md` is used; the direction has no photographed state |
| **DD-43** | The three shared comparison rows repeat their value in both columns |
| **DD-44** | V18 is reflow only and V19 is reported, not required |
| **RF-37** | Gold and the accent are shape colours, never small text |
| **MN-16** (a), **RF-53**, R8 | Named curves declared, none used; reduced motion zeroes every duration; every state is visible at rest |
| **RF-07** | The proposed colour roles above |
| **RF-55**, **RF-58** | 65ch measure for prose; 1.5 for multi-line prose, 1.25 for single-line strings |
| **SE-13** | `noindex, nofollow`; canonical `https://gt.school/` |
| K3 section 5d, CONTRACT.md section 4 | `--color-focus` at 2px with a 2px offset on light surfaces; the two-colour ring (2px `--color-navy` inner, 2px `--color-on-navy` outer) on navy and on anything straddling it — the footer links, the footer marks' plates, the GT Anywhere mark plate; a 3px `CanvasText` outline under forced colours (K3 F38) |
| K12 V2 | Horizontal marks 27px at 390 and 32px at 1440, aspect within 1%. Measured by the runner: five marks at 1440, all 32px, 0% skew; three at 390, all at or above 27px, 0% skew |
| **REQ-022** | Only figures with a claims-register row, in the deck's words. The rows the page relies on are CR-011, CR-021, CR-032, CR-033, CR-034 and CR-035, all "Unverified, public" |

## Assets

| Asset | Use | Alt text | Notes |
|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` | Header lockup; the foot of the Georgetown Campus card; the footer | "GT School" | Real SVG, never redrawn or recoloured. Always on a light plate (`--color-bg`), which `copy.md` section 8 requires and which also keeps it legible under a dark forced-colours theme |
| `../shared/img/gt-anywhere-logo-h.svg` | The foot of the GT Anywhere card; the footer | "GT Anywhere" | White lettering, so always on a `--color-navy` plate (`copy.md` section 8) |
| Photographs | **None.** No file from `ASSETS.md` appears in either state | — | DD-42 default and RF-25: every photograph in `ASSETS.md` shows identifiable children and none is usable before Nari's written permission (AD-11). This direction is diagrammatic, so there is no photographed state to design |

## Departures

Values outside the token set, and brief departures, each with its reason (DD-19).

| Departure | Reason |
|---|---|
| `--m23-rule: 1px` | The hairline every card, strip, rule and table row is drawn with. The token set has no border width |
| `--m23-wire: 2px` | The connector stroke. Two pixels is the smallest stroke that reads as a line rather than a hairline rule at 390, and it makes the brief's 5px dot 2.5 times the stroke |
| `--m23-junction: 5px` | The brief's own figure for the junction dot, used exactly |
| `--m23-gutter: 3.5rem`, `--m23-wire-row: 2.75rem` | The connector column and connector row. They are tracks, not spacing: the connector geometry solves against them |
| `--m23-rgap` (`--space-5`, `--space-4` on short rows) | The gap between the two place blocks. The split's stubs are solved from it with `calc((100% - var(--m23-rgap)) / 2 - var(--m23-attach))`, so it must be a single named value |
| `--m23-attach: 3.625rem` (`3.125rem` on short rows) | Where the split meets a place block: the school-name line, not the block's centre. A centre attach lands in the door sentence |
| `--m23-spine: 0.375rem`, `--m23-lane: 1.25rem` (`1rem` below 390) | The phone spine's x and the lane it runs in |
| `--m23-tap: 2.75rem` | The 44px minimum target (WCAG 2.5.5, K3) |
| `--m23-focus: 2px` | Focus ring width and offset (K3 section 5d) |
| `0.4375rem` strip padding, `0.08em` tracking, `0.2em`/`0.18em` underline offsets, `0.35em` run-in gap, `3em` tail min-height, `35ch`/`30ch`/`48ch` measures | Typographic values the token set does not carry; all relative units |
| Breakpoints 389, 768, 1024, 1180 and the height bands 400, 700, 760, 800 | Measured, not chosen: 768 is K10's breakpoint and the contract's table breakpoint; 1024 is where the twelve-column run fits; 1180 is where a place card is wide enough to seat a 32px mark beside its CTA; 389 is where the fixed CTA label stops fitting on one line; the height bands are the fold arithmetic above |
| **The door sentence follows its CTA at every width**, rather than sitting between the name and the CTA | CONTRACT.md section 2's compact-door order, applied at every width instead of only on short phones. Measured: with the sentence above the CTA, the second door's CTA ends at **747 of 696** at V14. Below 768 the two sentences follow both CTAs as run-in paragraphs, exactly as the contract specifies; from 768 each sentence is its own card's tail, inside the card's border and tint, so the card still carries label, name, line and CTA as one object |
| **The door sentence is a sibling `<li>` placed by the grid under its own card**, not a child of the door `<li>` | The same element has to sit inside the card at 768 and above and after both CTAs below 768. One copy of the text, placed by grid coordinates, is the only way to do that without duplicating a fixed slot in the markup or hiding a second copy from a screen reader |
| **No school mark on the place cards below 768** | Measured: a 27px horizontal mark beside the school name takes 133px of a 312px card at 390 and wraps "Georgetown Campus" to two lines (+25px per card); on its own line at the foot it costs +35px per card. At V2 the pair has 34px of slack, so either form puts the second CTA below the fold. The cue set on the phone is the strip label and the card's school tint; both real marks are in the header and the footer (checker R16), and both appear on the cards from 768 up |
| **The V10 h1 steps down one token to `--text-xl`** | CONTRACT.md section 2's landscape recipe. At `--text-3xl` the sentence is four lines (156px) at 750 and the row cannot hold the doors |
| **The map is inset from the h1 by the spine's lane below 768** | The spine is the diagram's own left edge, so the map is a figure with its own gutter rather than a block aligned to the prose. Stated rather than left as an accident |
| **The application steps are drawn as a second run from 768 up** | The brief does not specify the steps' form. Four hairline nodes with numbered strips joined by the same connector and dot is the direction's own language applied to the one other sequence on the page, and it fills a width a 65ch list left empty. Raised here rather than made silently |
| **Two accent uses on the page, one per screen** | The connector run on the first screen, and the step connectors on the admissions screen. K3 section 5f caps one per screen, not one per page |
| The header shows the lockup on two rows at 360 and 320 | The mark holds K12 V2's 27px floor instead of shrinking to fit beside the two utility links, as M03 and M12 resolved the same collision. Measured header height 93 at those two rows, 57 everywhere else |

## Flagged slots

| Slot | Flag | What ships |
|---|---|---|
| **"The program"** (the second card's strip) | **Not yet in `copy.md` section 9.** The brief names the card title, and section 9 does not carry the words. Proposed for Nari as wayfinding vocabulary, derived from the deck's own phrase "one mastery-based program" (section 3) and the allowed section 1 heading "Two programs of one school" | The label as the brief writes it, uppercase by CSS. It states no fact; the fact is in the sentences beneath it |
| "Admissions" (the first card's strip) | Already in the deck: a section 3 row label, an allowed eyebrow label, and one of M02's section 9 fact labels | Shipped |
| The application steps | **Q-007**: the four steps are assumed identical for both schools | The four steps from section 5, one line each |
| The `school=` parameter | **DD-25** convention; the live `apply.gt.school` parameter is confirmed in S5 | `?school=georgetown` and `?school=anywhere`, never an unscoped application link (checker R17) |
| Tour, info session, FAQ, admissions links | **MD-02**, R14, **REQ-002** | All four point at `gt.school/contact` or the Anywhere academics page with the labels `copy.md` gives them |
| TEFA window, owner, expiry | **Q-021** | The module ships visible to everyone (D-015 option c) with the deck's wording |
| "Current families" destination | **Q-002** | `community.gt.school`, to be confirmed |
| Outcome figure, accreditation | **Q-019**, **Q-033** | Withheld from the page entirely (G0.5 decisions 2 and 3) |
| Claims register status | CR-011, CR-021, CR-032 to CR-035 are all "Unverified, public" | Stated here, never on the page |

## Parent questions

From `0_plan/05-landing-mockups-plan.md` section 6c.

| Question | Answered here | Where |
|---|---|---|
| PQ-01 What is GT School? | Yes | The h1, and the map, which answers it as a shape before a word |
| PQ-02 Is it for my child? | Yes | The ADMISSIONS node on the first screen, the comparison's Admissions row, the proof strip, the steps line |
| PQ-03 In person or online? | Yes | The two place cards, which are where the run ends |
| PQ-04 Where is the campus? | Yes | The Georgetown door sentence and the comparison's "Where and how" row |
| PQ-05 What does a day look like? | Yes | The comparison's "The day" row; the two door sentences give the short form on the first screen |
| PQ-06 What does it cost, and can TEFA help? | Yes | The comparison's "Tuition and access" row and the TEFA card. No price is anywhere near the first screen: exclusivity is selectivity, not price (MD-25) |
| PQ-07 How do I apply? | Yes | The four-step run and the two application links |
| PQ-08 Who teaches my child? | Yes | The THE PROGRAM node carries the Guides fact on the first screen; the comparison's Guides row and the proof strip repeat it |
| PQ-09 How much in-person time does GT Anywhere have? | Yes | The GT Anywhere door sentence and the comparison's "In-person time" row |
| PQ-10 What results, and is it accredited? | **Deferred by decision** | The page is silent (G0.5 items 2 and 3); a parent is pointed at admissions through four secondary CTAs |
| PQ-11 What happens after 8th grade? | Deferred to admissions | The comparison's "After 8th grade" row (Q-013) |
| PQ-12 I am a current family | Yes | The header link and the families band |
| PQ-13 Not ready to apply | Yes | The four secondary CTAs |
| PQ-14 Is GT School part of Alpha School? | Yes | The provenance line, once, under the h1 (MD-17: prominence, never disclosure) |

## Continuity, against the measured estate

`0_plan/mockups/shared/CONTINUITY.md` is the only rendered evidence the programme has. `gt.school` has
no mirror and is unmeasured, so the Georgetown handoff is unverified and is stated as such.

| Property | The estate, measured | This mock | Decision |
|---|---|---|---|
| Page ground | `rgb(252, 244, 239)` | `--color-bg`, the same value | Matches |
| Body text | `rgb(0, 17, 23)` | `--color-text`, the same value | Matches |
| Body face | Inter Tight | Inter Tight | Matches |
| Heading face | Literata | Literata | Matches |
| Heading weight | 300 | 400, behind `--h1-weight` | Differs. M03 tested 300 against 400 on this copy and shipped 400; DD-38 keeps the test open and this mock exposes the variable so the comparison is one edit |
| Heading tracking | -1.6px | normal | Differs. The clamp's sizes run from 27 to 46px; the estate's tracking was measured on a 58.5px heading and closes the letterfit too far at 27px |
| The first screen's application action | navy `rgb(0, 42, 58)` fill, near-white label, Inconsolata uppercase | `--color-navy` fill, `--color-on-navy` label, Inconsolata 600 | Matches the estate's own first-screen action (DD-46) |
| Footer and desktop-header button | accent orange with a 2.50:1 label (K12 F87) | navy on light | Differs by **DD-46**: copying it would import a measured contrast failure onto the one control the page exists to offer |
| Button weight and size | computed 500 at 16px | 600 at 17 to 18px | Differs. `fonts.css` ships Inconsolata 400 and 600 only, and CONTINUITY.md records the estate's 500 as a computed weight, not proof that a 500 face drew those glyphs |
| Button silhouette | three different constructions across three controls | one uniform `--radius-md` corner | **DD-47**: the uniform corner is the estate's own desktop-header application control |
| Hero treatment | a composited photographic cut-out of an identifiable child over line artwork, on grained cream | a drawn diagram on flat cream, no photograph | Differs by decision: DD-42 and AD-11 forbid the photograph today, and this direction's thesis is the diagram. The grain is not reproduced; flat cream reproduces the base colour, not the whole surface, and that is stated rather than claimed as a match |
| Footer | uppercase Inconsolata navigation, bordered pills, both namings coexisting | navy footer, both marks on their own panels, the facts block, the phone number in Inconsolata | Close; the pills are not copied |
| Could the sites inherit this shell? | — | Yes: header, footer, tokens, the card anatomy and the connector run are all CSS over `tokens-v2.css`, with no dependency and no script | The shell is the deliverable a school site could take |

## Self-check

**`python3 0_plan/tools/check-mocks.py 0_plan/mockups/M23-the-system`**

```
## M23-the-system: 37 pass, 0 fail

check-mocks: OK
```

**`python3 1_spec/tools/check-claims.py`** (all mocks; the M23 block)

```
## 0_plan/mockups/M23-the-system/index.html
| Figure on the page | Register row | Occurrences | Status |
|---|---|---|---|
| "designed for students in the 90th+ percentile" | CR-011 | 5 | Unverified, public |
| "$10,400/year — GT Anywhere annual tuition, fully or partially covered | CR-021 | 1 | Unverified, public |
| Four in-person intensive weekends a year in Georgetown (four named 202 | CR-032 | 3 | Unverified, public |
| Georgetown mornings: "two 50-minute blocks and one 25-minute block wit | CR-033 | 2 | Unverified, public |
| GT Anywhere mornings: "two to three hours of 100% cognitive load" (aca | CR-034 | 1 | Unverified, public |
| Guides hold weekly one-to-one check-ins with each student ("Academic A | CR-035 | 3 | Unverified, public |
  NOTE unverified rows on the page (allowed in mocks, blocked for production): ['CR-011', 'CR-021', 'CR-032', 'CR-033', 'CR-034', 'CR-035']

check-claims: OK
```

**`node 0_plan/tools/shots.mjs 0_plan/mockups/M23-the-system`** — Result line, verbatim:
`## Result: all required rows pass`

**The greps in the BUILDER-BRIEF rules table**

| Rule | Check | Result |
|---|---|---|
| 1 no form | `grep -c "<form" index.html` | 0 |
| 2 no JavaScript | `grep -c "<script" index.html` | 1 (the JSON-LD block) |
| 3 no external requests | hosts in `index.html` and `styles.css` | only `gt.school`, `www.gt.school`, `anywhere.gt.school`, `apply.gt.school`, `community.gt.school`, `schema.org` |
| 4 copy verbatim | read as a parent | sections 0 to 8 verbatim; no lorem, no TBD, no placeholder |
| 5 numbers | `check-mocks.py` R5 | whitelist only |
| 6 Guides, never "advisor" | `grep -i advis` | none in text; `data-type="advisor"` only |
| 7 full school names | text count | Georgetown Campus x8, GT Anywhere x14 |
| 8 both CTAs on the first screen at 390 by 844 | runner | 464 and 606 of 844 |
| 9 links | `check-mocks.py` R3, R12, R17 | allowed hosts, every `data-event` present, no unscoped application link |
| 10 motion | `check-mocks.py` R10 | zero transitions, zero key-frame rules, reduce block covers pseudo-elements |
| 11 accessibility | `check-mocks.py` R9 | `lang="en"`, skip link, four landmarks, one h1, `:focus-visible` with `--color-focus`, alt on every image, table with caption and `scope`, 44px targets |
| 12 head | `check-mocks.py` R8 | title, description, `noindex, nofollow`, canonical, Open Graph, JSON-LD without claims |
| 13 images | `check-mocks.py` R13 | five SVGs, all with `width` and `height`; no photograph |
| 14 tokens | `grep '#' styles.css` | **zero raw hex**; every colour, face, size, space, radius and duration is a `var()`; the `--m23-*` geometry is declared once and listed in Departures |
| 15 N campuses | markup | the doors are a `<ul>`; the phone spine takes further stubs without a redraw |
| 16 brand continuity | `check-mocks.py` R16 | both real mark SVGs, each on the panel `copy.md` section 8 requires |

**First screen at 390 by 844.** Header, the umbrella sentence, the provenance line, then the map: the
two place cards with their strips, names and CTAs at 464 and 606, the two door sentences, and the two
shared-fact cards. Nothing else is above the doors.

**Console:** `PASS: no console errors.`
**Reduced motion:** `PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).`
**Root font doubled at V2:** `PASS: no horizontal scroll at 375 with a 32px root.`
**Reflow at 320 by 256:** `PASS no horizontal scroll.`
**Mark geometry:** five marks at 1440 by 900, all 32px, 0% aspect skew; three at 390 by 844 (header and
both footer marks), 27px, 27px and 32px, 0% skew.

**Captures reviewed by eye in this pass:** `qa/V2.jpg`, `qa/V2-full.jpg`, `qa/V10.jpg`, `qa/V11.jpg`,
`qa/V13.jpg`, `qa/V14.jpg`, `qa/V14-full.jpg`, `qa/V16.jpg`, `qa/V18.jpg`, `qa/focus-cta.jpg` and
`qa/forced-colors.jpg`. Three defects were found in the
captures and fixed: the GT Anywhere mark disappearing under forced colours, the GT School mark's
exposure to a dark forced theme, and a hollow ADMISSIONS card at 768 where the two fact cards were
stretched to a common row height instead of being centred on the connector's axis.
