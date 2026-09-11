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
connectors with a filled junction dot **where a line branches, and nowhere else**. Nothing curves and
nothing crosses. The accent appears exactly once on the first screen, and it is the wiring — the one
thing on the page whose job is to say *these are connected*. Every line of it is drawn in
`--color-accent-text` and every edge in `--color-border-strong`, because in this direction the drawing
is the content and WCAG 1.4.11 asks 3:1 of it (CONTRACT.md section 3).

The lens order shows in the order of the screens: the mission first (the diagram argues that the two
schools are one school), then the objective (the doors end the run), then continuity (the compare
anchor, the table, the estate's own tints and faces), then exclusivity (the bar, the four facts).

Below 768 the map reorders: the two place cards come first, then the two door sentences, then the two
upstream facts, because a parent on a phone is choosing, not studying (C18, orientation first). **The
graph does not change with it.** The two shared facts sit on one trunk in the left lane; the trunk turns
into a branch bar at a single filled junction; the bar's two mirrored arms end in the two door cards. Two
shared nodes in series, one junction, two identical terminals — the same topology every wider row draws,
with the reading direction inverted so the doors come first. The trunk takes a third, fourth or fifth
node without a redraw, which is DD-21 drawn rather than asserted.

## h1

The h1 is the umbrella sentence, `copy.md` section 1, verbatim, set in Literata 400 at `--text-3xl`
with `--leading-tight` and `max-width: 35ch` (at 1024 and above, the brief's eight of twelve columns,
`min(35ch, 66.666% - var(--space-4))`). It is the only h1 on the page. Two no-break spaces bind the
sentence's two two-word phrases — "in&nbsp;person" and "from&nbsp;anywhere." — which is the whole of the
rag management: `text-wrap: balance` is measured to have **no effect at all** on this sentence at 375,
414 or 430 (a counterfactual run returns identical line widths), so the raw greedy wrap is what a parent
sees, and binding the two phrases is what evens it. Everything in the map is an
illustration of this sentence, which is why the map's card titles are the deck's own words and not a
vocabulary invented for a diagram.

The visually hidden `<h2>` "Two ways to attend" (an allowed section 1 heading) names the map for a
screen reader; the two school names are `<h3>` inside it, so no heading level is skipped.

**Measured line counts** (`qa/measurements.md`): **7 lines at 360 to 402px wide, 6 at 412 to 430, 5 at
1024, 4 from 768 to 834 and from 1280 up, 3 at V10 (750 by 342, where the h1 steps down one token), and 8
at the 320px reflow row.** The contract's estimate of 6 at V2 is one line optimistic, as M12 and M10 both
found; the compact door rule absorbs it.

**What binding "in&nbsp;person" cost, stated rather than left to a critic.** At V2 the seven lines go
from 297, 264, 264, **171**, 248, 224, 207 — a 52-percent line between two 80-percent lines — to a clean
double taper, and the fold does not move (571 of 605 before and after). It buys that at two rows: **V7
(402 by 681) goes from six lines to seven** and **V13 and V19 (1024 wide) go from four to five**. Both
still pass with room (576 of 657 and 693 of 744), and at 1024 the five-line h1 sets an even rag over a
map that now has a measure. That is the trade, chosen deliberately: the phone rows are two thirds of
sessions and the hole at line four was visible at five of them.

## What was borrowed, and what was deliberately not (DD-48)

DD-48 binds this direction: borrow the composition, the rhythm and the structural devices, never the
palette and never the typefaces. GT School's ground, surfaces, navy, accent and Literata, Inter Tight
and Inconsolata are fixed by K12's "what never changes" list and by `tokens-v2.css`.

| Source | Borrowed | Where it is on the page |
|---|---|---|
| `insp-onepersonteam` "Diagram White" | **The map as the hero**, not a screenshot or a photograph | The first screen is the diagram; nothing else competes with it |
| | **The group card**: a rounded rectangle with a 1px hairline border and a faintly tinted header strip carrying a small uppercase wide-tracked title | `.node` at `--radius-lg` with a `--color-border-strong` hairline; `.node-strip` on `--color-surface` in `--font-sans` 500 `--text-xs` uppercase at 0.08em, and from 768 up it also carries the school mark |
| | **Orthogonal connectors with a filled junction dot** — right-angled polylines, never curves, so the diagram reads as plumbing | `.wire` and `.spine`: every segment is a horizontal or a vertical box; a 5px filled dot **at each junction and nowhere else**. The source's own rule is "wherever connectors meet"; a dot at the midpoint of a plain link between two nodes is the device worn as ornament, so the map's run and the application run carry none |
| | **The full-width banner beneath the map** with a circular-arrow glyph and one bold sentence | `.banner` carrying the compare anchor. The glyph is drawn with its **arrowhead**: the library's own example builds the ring and stops, which is the shape a page uses to say "loading" |
| | **Stillness**: the source holds dead still for more than half its frames | Nothing on this page animates at all |
| `insp-tsai2020` "Civic Hairline" | **Everything drawn in 1 to 1.5px hairlines, no fills and no shadows** | Every card, strip, rule and table row is a 1px hairline; `--shadow-1` and `--shadow-2` are unused. The hairline is `--color-border-strong` wherever it draws the map and `--color-border` wherever it rules the page's text |
| | **The label pair at roughly 3:1** — a small tracked uppercase label above a larger name | Each place card: `--text-xs` uppercase strip (12 to 13px) over Literata `--text-xl` (22 to 28px), a measured 1:2.2 at 1440 |

| Source device | Deliberately **not** borrowed | The decision |
|---|---|---|
| Vermilion `#E86312` on near-white `#FBFBFB`, warm near-black `#130E07`, structure grey `#A09E9E` | Not used | DD-48. The palette is GT's: `--color-bg`, `--color-surface`, `--color-anywhere-tint`, `--color-navy`, `--color-text`, `--color-accent-text`, `--color-border-strong`. A mock that imports a source palette is off-brief, not a variation |
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
| `0_plan/kb/exemplars/getty-1440-full.jpg` | One shared sentence above two equal links: the h1 is the shared sentence and the two CTAs are the equal links, at the same size, weight, fill, corner and now width | h1 plus the two door CTAs. **Not a C30 exemplar**: `CONCEPTS.md` lists Getty under the photographed shared-sentence pattern, not under C30, and the earlier citation was wrong |
| `0_plan/kb/exemplars/area17-1440-full.jpg` | **Avoided** (C33): its regions rendered blank at capture. Every node here is painted at rest — the runner's own captures at all nineteen rows show the full map with no trigger of any kind | `qa/V1.jpg` to `qa/V19.jpg` |

## Brief compliance

| Brief section | What was built | Evidence |
|---|---|---|
| Mock id, name, lens order | M23 "The System"; L3, L1, L2, L4 as above | This file, Direction |
| Source language | Diagram White primary, Civic Hairline support, both read at source before building | The two tables above |
| What is deliberately not borrowed | **Eight** omissions named, each with its decision (the earlier count of seven miscounted the table's own rows) | "What was borrowed" above |
| Thesis | The hero is the diagram of "one admissions bar, one program, two places"; the doors are where the run ends | `qa/V16.jpg`, `qa/V14.jpg`, `qa/V2.jpg` |
| Exemplars | UAL and Getty applied, AREA 17's defect avoided and the avoidance measured | Table above |
| Composition: header 56; h1 across 8 columns; provenance | Header row `min-height: 3.5rem` plus its hairline, measured bottom **57** at every row from 375 up; `h1 { max-width: min(35ch, 66.666% - var(--space-4)) }` from 1024; provenance once, `data-fold="provenance" data-slot="provenance"` (checker R18) | `qa/fold.md` |
| Composition: the map spans 12 columns at 1024 and above, stacks below 768 | At **1280**+ the map is a five-track grid (card, wire, card, wire, split column) across the full content width; at 768 to **1279** it is two cards, a wire row, then the two places side by side; below 768 a single column with a left trunk and a branch. The three-across form starts at 1280 rather than 1024 because at 1024 it cannot hold a measure: see the Iteration section | `styles.css`, three `@media` blocks |
| Composition: three cards in a row joined by orthogonal connectors with a filled 5px junction dot | Read as three positions across the row: **ADMISSIONS**, **THE PROGRAM**, and the split column holding both place cards. Connector stroke 2px, junction dot **5px** exactly as the brief states, one per form. At 768 to 1279 there are not three positions in a row at all — it is two cards, a wire row, then two places side by side — which is a second departure from the same brief line, forced by width and listed in Departures | `qa/V16.jpg`, `qa/V11.jpg`; `qa/measurements.md` |
| Composition: "ADMISSIONS" holds the deck's admission sentence | Section 3 "Admissions" cell verbatim, the cell that is identical in both columns — which is itself the argument that there is one bar | `index.html` |
| Composition: "THE PROGRAM" holds the mastery and Guides sentences | Section 3 "Same school, same academics" cell plus the section 4 Guides fact, both verbatim | `index.html` |
| Composition: the run splits at a junction into two place cards with label, name, line and CTA | At 1280+ the split is an in-feed from the program's centre, a filled junction dot, a trunk and two **mirrored** arms into the two blocks' name lines. At 768 to 1279 the branch leaves the run at the map's own centre line, so the two arms are equal and their angles mirrored. Below 768 the trunk turns into a branch bar at one junction and the bar's two arms end in the two cards. Each place block carries its strip label (and its school mark from 768 up), its Literata name, its CTA and its door sentence as the block's tail | `qa/V16.jpg`, `qa/V11.jpg`, `qa/V9.jpg` |
| Composition: at V14 and V16 the whole map plus both CTAs and the compare anchor sit inside the first screen | **V16: met.** Map bottom 813.41, both CTAs at 487 and 732, the compare anchor's sentence ending at 896 of 900, only the banner's lower border cut by the edge. **V14: partly met** — both CTAs (441, 677) are inside 720, the map's second tail and the compare anchor are not. Corrected figures with the arithmetic below | `qa/measurements.md`, "Fold" |
| Composition: below 768 the two place cards come first, the two upstream cards follow | Explicit grid placement, not `order`: place cards rows 1 and 2, the two door sentences rows 3 and 4, ADMISSIONS row 5, THE PROGRAM row 6. The drawing is reordered with them, not replaced: trunk, one junction, two mirrored arms, two terminals | `qa/V9.jpg`, `qa/V2-full.jpg` |
| Composition: a full-width banner on `--color-surface` beneath the map carries the compare anchor | `.banner`, full content width, `--color-surface`, `--radius-lg`, a drawn circular-arrow glyph and the anchor sentence as the link (checker R19: it precedes the table) | `qa/V16.jpg` |
| Typography | Contract roles. Card strips `--font-sans` 500 `--text-xs` uppercase tracked 0.08em on a `--color-surface` strip; card body `--text-base` at `--leading-prose`; place names Literata `--text-xl` | `styles.css` |
| Colour and surface | `--color-bg` page; fact cards on `--color-bg` with a `--color-border-strong` hairline (3.63:1) and a `--color-surface` strip; the connector run is the first screen's one accent use, in `--color-accent-text` (5.14:1) with its junction dot filled; Georgetown on `--color-surface`, GT Anywhere on `--color-anywhere-tint`; focus per contract section 4 | `qa/V16.jpg`, `qa/focus-cta.jpg`, `qa/measurements.md` "Contrast of the drawing" |
| Imagery: diagrammatic, no photograph in either state | Five `<img>` on the page, all of them the two real mark SVGs. Nothing from `ASSETS.md` is used | `grep -c "<img" index.html` is 5 |
| Imagery: the two school marks at the foot of their place cards, sized to K12 V2 | **Departure: the mark rides in the card's header strip from 768 up, not at its foot.** At the foot a 184 by 40 navy chip stood beside a 200 by 44 navy button on the same card and only one of them was a control; in the strip it is a masthead. Both chips have the same padding, corner, footprint and inset; only the fill differs, and that difference is forced by `copy.md` section 8. Measured **32px at 1440** on both place marks. Below 768 the mark is absent from the card, a measured departure named below | `qa/fold.md` Mark geometry; `qa/V16.jpg` |
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
| V13 | 1024 by 768, limit 744 | 57 + 8 + h1 5 lines 222 + 8 + 22 + 16 + fact row 186 + wire row 44 + card 130 = **693** (the two-row form, both doors on one row) | 693 | **693** | 51 | PASS |
| V14 | 1280 by 720, limit 696 | 57 + 8 + h1 4 lines 199 + 8 + 22 + 16 + card 131 + tail 89 + 16 + 131 = **677** | 441 | **677** | 19 | PASS |
| V16 | 1440 by 900, limit 876 | 57 + 24 + h1 4 lines 212 + 8 + 22 + 16 + card 148 + tail 81 + 16 + 148 = **732** | 487 | **732** | 144 | PASS |

Three of the brief's own expectations did not survive contact and are corrected here, with the reason:

| The brief's expectation | What the measurement shows |
|---|---|
| "the whole map plus both CTAs and the compare anchor sit inside the first screen" at **V14** | The map and both CTAs are inside (map bottom 756.55 to its tail's foot, both CTAs at 441 and 677 of 720); the compare anchor is not (banner 780.55 to 858.55). At 1280 by 720 the header (57), a four-line h1 (199), the provenance (22) and a four-node map with both door tails already spend 757 of 720. The banner would only fit by taking a token out of the map, and the map is this direction's whole argument. What is visible at the edge is the GT Anywhere door's own sentence, cut by it (705 to 726), so the anchor is one scroll notch away and the page plainly continues |
| The same at **V16** | Met. The banner's sentence ends at **896 of 900** and only the banner's lower border crosses the edge. Three gaps are tightened by one token each at 1280 and above on viewports 800px tall and taller (`--m23-rgap` 24 to 16, the first screen's lower padding 32 to 24, the banner's top margin 24 to 16 and its padding 16/24 to 8/16) |
| The contract's "6 lines at V2" | 7 lines, as M12 and M10 already measured. The compact door rule absorbs it with 34px to spare |

**The false floor.** All nineteen rows pass the runner's reserve test: visible content reaches into the
bottom 24px and more lies beyond the edge. What does the work is content a parent would actually read,
not a container's fill: on the phone rows it is a door sentence cut by the edge (V1 728 to 748, V2 614
to 634, V4 641 to 661, V7 667 to 687, V8 720 to 740, V9 839 to 854, V10 332 to 352); at V14 and V15 it
is the GT Anywhere door's own sentence (705 to 726, 632 to 653); at V11, V13, V16 and V17 it is the
compare eyebrow, the second door's tail or the banner (the eyebrow cut at 1005 to 1047 of 1024, content
reaching 768 of 768, 896 of 900 and 940 of 960). V18 is the reflow row and V19 the zoom row, where the fold rule does not apply (DD-44).

Two rows made the reserve honest rather than lucky, and both are stated because both are changes to the
page's vertical rhythm rather than to the map. At **V11** the map is 48px shorter than it was, so the
comparison band's rule landed 61px clear of the edge and the screen read as finished; at **V17** the same
gap put the band's rule 40px clear. The compare band now opens on `--space-6` rather than a full band's
`--space-9`, and the first screen closes on `--space-5` at 1280 and above: the banner directly above the
band is the sentence that points at it, so 112px of cream between them was a rhythm error as well as a
false floor. Both rows now show the "Compare" eyebrow cut by the edge.

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
| V7 | 402 by 681 | fold | 657 | 57 | 288 | 317 | 442 | 576 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 260 | 289 | 414 | 548 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 295 | 324 | 464 | 606 | yes | report: page height 6890 |
| V10 | 750 by 342 | fold | 318 | 57 | 148 | 178 | 305 | 305 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 238 | 268 | 703 | 703 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 244 | 273 | 710 | 710 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 287 | 317 | 693 | 693 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 264 | 294 | 441 | 677 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 271 | 301 | 449 | 605 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 293 | 323 | 487 | 732 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 293 | 323 | 487 | 732 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 93 | 349 | 378 | 503 | 636 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 287 | 317 | 693 | 693 | no | report: scrollWidth 1024 |

## Result: all required rows pass
```

## Connectors: orthogonal, and measured against every label

The brief's acceptance row asks for two measurements at every row, not an assertion.

**Why there is no SVG.** The map contains **no `<svg>` element and no SVG text at all**. Every card,
strip, name, sentence and connector is an HTML box; the connectors are `background`-filled `<i>` elements
positioned inside grid cells, so each one is horizontal or vertical *by construction* and type is never
inside a scaled viewBox. The measuring harness reports the SVG-text table as empty at all nineteen rows,
and that is the intended result, not a gap (`qa/measurements.md`, "SVG text"). The full argument, and the
three costs the choice carries, are in "What drawing the map in HTML boxes costs" below.

`qa/M23-measure.mjs` collects every connector segment (the spine, each card's stub and dot, each wire
cell's children, and the four application-step connectors) and every rendered text box in the document,
then reports the axis of each segment and the smallest gap from any segment to any text box.

| Row | Segments | All orthogonal | Overlapping segment-and-label pairs | Smallest clearance | Nearest label |
|---|---|---|---|---|---|
| V1 to V9, V18 | 10 | yes | 0 | 9.00px | "Georgetown Campus" |
| V10 | 7 | yes | 0 | 9.00px | the Georgetown door sentence |
| V11, V12 | 10 | yes | 0 | 17.00px | the THE PROGRAM sentence |
| V13, V19 | 10 | yes | 0 | 9.00px | the THE PROGRAM sentence |
| V14, V15 | 9 | yes | 0 | 9.00px | the THE PROGRAM sentence |
| V16, V17 | 9 | yes | 0 | 17.00px | the THE PROGRAM sentence |

Zero overlapping pairs at every row, and the smallest clearance anywhere on the page is **9.00px**. The
design that makes this true rather than lucky: **no connector ever enters a card.** Every segment lives
in a gutter that is its own grid track (the wire column at 1280 and above, the wire row at 768 to 1279,
the left lane on phones, the column gutter in landscape), and each segment stops at the card's border.
The smallest clearances above are the card's own inner padding, so a label would have to leave its card
to meet a line.

**Where the endpoints come from, which is the cost of drawing in boxes rather than in SVG.** Every arm is
now solved from a grid edge rather than from a percentage of the map. The split's own wire span is placed
in the rows it needs — the first door block and the gap after it — so its lower edge **is** the second
door card's top edge, and the trunk is `top: var(--m23-attach); height: 100%`, which runs from one card's
name line to the other's by construction. On the phone the branch bar is `height: calc(100% + var(--m23-rowgap))`
off the first door card's own box. `qa/measurements.md` reports where each arm actually lands, measured
from each card's own top edge: **52 and 52 on every phone row, 50 and 50 at V14 and V15, 58 and 58 at V16
and V17**, and the two door blocks are identical to two decimals at **18 of 19 rows**. The one exception is
V14, where the two tails wrap to a different number of lines and the blocks stand 219.81 against 210.83; the
arms still land at 50 and 50, because the geometry no longer depends on the blocks being equal. V18, which
shipped a 131.8 block against a 125.3 one, is now 125.3 against 125.3.

## What drawing the map in HTML boxes costs

Keeping the diagram in HTML boxes rather than SVG is still the right call, and for a better reason than
the M10 one this file gave first. A diagram whose nodes hold flowing body copy from a fixed deck and a
live interactive control has to be laid out by the text engine: SVG `<text>` does not wrap at all,
`<foreignObject>` brings its own support and accessibility problems, and the terminal nodes here carry
real `<a>` elements with 44px targets and `:focus-visible` rings whose geometry would not survive a
scaling transform. The decisive evidence is not M10 at all — it is `qa/V2-rootx2.jpg` and `qa/V18.jpg`.
At a 32px root the page reflows with no horizontal scroll, and so does 320 by 256. An SVG map with a
fixed `viewBox` would not respond to the root font at any zoom, which is a WCAG 1.4.4 problem this build
simply does not have. `qa/forced-colors.jpg` is the second piece: every segment, dot, hairline and strip
rule is redrawn in `CanvasText` by one block at the end of the sheet, inherited by the diagram because
the diagram is made of the same boxes as the rest of the page.

Three costs come with that choice. The first two were not priced in the first build; all three are
stated here.

| Cost | What it means | Where it stands |
|---|---|---|
| **Endpoints become arithmetic, not references** | CSS cannot ask a box where another box is, so a connector's end is a percentage of something rather than a reference to the card it points at. The first build solved the lower arm as `calc((100% - var(--m23-rgap)) / 2 - var(--m23-attach))`, which asserts that the two door blocks are equal halves of the map. CSS cannot check that assertion, and at 1024 by 768 it was false by 25.8px: the arm landed 36.1px inside the GT Anywhere card instead of 49 and missed the name line it pointed at | **Paid.** Every wire span is now placed in the grid rows whose edges it needs, so each endpoint is a card edge. `qa/measurements.md` reports where each arm actually lands at every row, and the harness now fails a critic's eye rather than needing one |
| **The diagram has no machine-readable topology** | Nothing in the DOM says that ADMISSIONS connects to THE PROGRAM; the connectors are `aria-hidden` `<i>` elements, and a screen-reader user gets four cards and two headings, not a graph | **Accepted, and only because of what sits below it.** Every sentence inside the map appears again in the comparison table — the Admissions row, the "Same school, same academics" row, both door lines — so a non-visual reader loses the picture and no facts. That is the whole of the defence, and it is worth saying out loud rather than leaving to a critic: if the table were ever cut, the map would have to gain a described topology |
| **The N-campus requirement is half drawn** | The phone trunk takes a third, fourth or fifth node without a redraw. The 1280-and-above split does not: a third terminal needs its own arm and a re-solve of the rows the split's wire span covers | **Open.** DD-21 is met in one form and not the other, and a third campus would need a hand at the desktop widths |

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
| The banner's circular arrow | ring and **arrowhead** both forced to `CanvasText` | Legible |
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
| `--color-accent-text` | **DD-39** (a), **RF-07** | **Every connector segment and junction dot on the page** (5.14 on `--color-bg`), and the step numerals on the phone form of the application steps; a DD-19 departure tint |
| `--color-border-strong` | **DD-39** (a), **RF-07** | **Every edge of the drawing**: card borders, header-strip rules, door tails, the banner, the four step nodes and the two mark chips (3.63 on `--color-bg`, 3.31 on `--color-surface`, 3.35 on `--color-anywhere-tint`); a DD-19 departure tint |
| `--color-on-navy` | **DD-39** (a), **RF-07** | Every button label, the footer text, the focus ring's outer band (14.58 on navy) |
| `--color-text-muted-on-dark` | **DD-39** (a), **RF-07** | The footer facts block (7.81 on navy); a DD-19 departure tint |
| `--duration-none` and the reduced-motion zeroing | **MN-16** (a), **RF-53**, R8 | The reduce block zeroes every duration on elements and pseudo-elements |

`--color-on-accent`, `--color-focus-on-dark`, `--ease-standard`, `--ease-out` and `--ease-in` are
**not** used: there is no accent fill carrying text, no focus ring over a navy surface other than the
contract's two-colour ring, and nothing that eases.

**`--color-border-strong` and `--color-accent-text` now carry the whole drawing**, and the earlier
reasoning for declining them was wrong. It said "no border is asked to reach 3:1 on its own", which is
true of a decorated page and false of a drawn one: in a direction whose hero is a line drawing, every
border is asked to carry meaning, and WCAG 1.4.11 asks 3:1 of a graphical object required to understand
the content. `--color-border` measures **1.56 on the ground, 1.42 on the surface, 1.44 on the tint** and
`--color-accent` **2.38 on cream**, which K12 F88 already records as a failure for that orange. The two
proposed tokens measure **3.63 / 3.31 / 3.35** and **5.14** and are now the only inks the map is drawn
in. `--color-border` stays where it belongs: band rules, table rules, list rules — the page's
decoration, not its argument.

## Decisions applied

| Id | How it is applied in this mock |
|---|---|
| **DD-48** | The borrowing rule. Composition, rhythm and structural devices borrowed from two Design Library languages; palette and faces are GT's. Seven named omissions, each with its reason |
| **DD-38** (b) | Type roles and the fluid clamp as the working default: h1 Literata 400 `--text-3xl` behind a `--h1-weight` variable so the 300-against-400 test is one edit; place names Literata `--text-xl`; prose Inter Tight 400 at 1.5; labels Inter Tight 500 uppercase at 0.08em; buttons Inconsolata 600 `--text-btn`. Line counts measured at every row |
| **DD-39** (a) | Colour roles: `--color-text` on `--color-bg` (17.69), on `--color-surface` (16.10) and on `--color-anywhere-tint` (16.30); `--color-on-navy` on navy (14.58); `--color-text-muted` for labels and strips (6.25 on `--color-bg`); `--color-accent-text` for every connector, every junction dot and the step numerals (5.14 on the ground); `--color-border-strong` for every edge of the drawing (3.63 / 3.31 / 3.35). The accent family is used as a **shape** as well as small text, and in both roles at the value that passes |
| **DD-47** | The uniform button corner: every CTA and button is `--radius-md` on all four sides. No filler radius, no cut corner |
| **DD-46** | The contract's surface-dependent fill: `--color-navy` with `--color-on-navy` text on every light surface on this page. The estate's orange footer button is not copied, because K12 F87 measures its label at 2.50:1 |
| **D-039** | Undecided, so the page ships its no-JavaScript state: one `<script>` (JSON-LD), no `data-d039` declaration, no inputs, no reveal, no draw. V6 and V8 are specified above and not shipped |
| G0.5 items 1 to 6 | Umbrella sentence as the h1; no speed figure; no accreditation claim or mark; "Tuition on request. Ask admissions."; Guides everywhere; the provenance line once (checker R18) |
| **DD-04** | The door cue set is the label plus the school mark: the strip carries "In person" or "Online", the card carries its school tint, and the mark sits at the foot from 768 up |
| **DD-12** | Header carries the lockup and two utility links, no menu |
| **DD-14** | The two doors are equal, and it is measured rather than asserted: same card anatomy, same strip, same name size, same mark size, same mark chip (same padding, corner, footprint and inset — only the fill differs, which `copy.md` section 8 forces), and the two CTAs are now the **same width as well as the same fill, corner, size and target**, because the CTA spans its card at every width and the two cards are one grid track. It was not so before: from 1180 up `width: auto` gave 288 by 44 against 199 by 44. `qa/measurements.md` reports both CTA widths and both door block heights at every row |
| **DD-19** | Values outside the token set are listed in Departures |
| **DD-21** | Designed for N campuses, and **half drawn**, which is stated rather than claimed away. The doors are a `<ul>`, and the phone trunk takes a third, fourth or fifth node without a redraw. The 1280-and-above split does **not**: a third place needs its own `--m23-attach` arm and a re-solve of the grid rows the split spans. A campus added tomorrow would reflow on the phone and need a hand on the desktop |
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
| `--m23-ink` and `--m23-line` | Two names for the two tokens the drawing is drawn in, so that one edit moves every line of it and a reader can see at a glance which hairlines carry the argument and which rule the text. They alias `--color-border-strong` and `--color-accent-text`; no new value is introduced |
| `--m23-rowgap`, `--m23-bar` | The map's row gap is named because the phone branch bar's length solves against it (`calc(100% + var(--m23-rowgap))`), and `--m23-bar` is the x of the bar inside the lane. A literal would have been a second, silent copy of a number the layout owns |
| `--m23-wire: 2px` | The connector stroke. Two pixels is the smallest stroke that reads as a line rather than a hairline rule at 390, and it makes the brief's 5px dot 2.5 times the stroke |
| `--m23-junction: 5px` | The brief's own figure for the junction dot, used exactly |
| `--m23-gutter: 3.5rem`, `--m23-wire-row: 2.75rem` | The connector column and connector row. They are tracks, not spacing: the connector geometry solves against them |
| `--m23-rgap` (`--space-5`, `--space-4` on short rows) | The gap between the two place blocks at 1280 and above. It is now a grid track the split's wire span includes, rather than a term in an arithmetic guess about block heights |
| `--m23-attach: 3.625rem` (`3.125rem` on short rows) | Where the split meets a place block: the school-name line, not the block's centre. A centre attach lands in the door sentence |
| `--m23-spine: 0.125rem`, `--m23-bar: 0.875rem`, `--m23-lane: 1.5rem` (`1.25rem` below 390, `1rem` below 360) | The phone trunk's x, the branch bar's x and the lane that holds both. Two lanes, not one: a branch needs the trunk and the bar on different verticals or the two doors cannot be fed by mirrored arms |
| `--m23-tap: 2.75rem` | The 44px minimum target (WCAG 2.5.5, K3) |
| `--m23-focus: 2px` | Focus ring width and offset (K3 section 5d) |
| `0.4375rem` strip padding, `0.08em` tracking, `0.2em`/`0.18em` underline offsets, `0.35em` run-in gap, `3em` tail min-height, `35ch`/`30ch`/`48ch` measures | Typographic values the token set does not carry; all relative units |
| Breakpoints 359, 389, 768, 1280 and the height bands 400, 700, 760, 800 | Measured, not chosen: 768 is K10's breakpoint and the contract's table breakpoint; **1280 is where the three-across run can hold a measure** (at 1024 it cannot, see Iteration); 389 and 359 are where the fixed CTA label stops fitting on one line at successive lane widths; the height bands are the fold arithmetic above. The 1180 breakpoint is gone: the mark no longer sits beside the CTA at any width |
| **The door sentence follows its CTA at every width**, rather than sitting between the name and the CTA | CONTRACT.md section 2's compact-door order, applied at every width instead of only on short phones. Below 768 the two sentences follow both CTAs as run-in paragraphs, exactly as the contract specifies; from 768 each sentence is its own card's tail, inside the card's border and tint, so the card still carries label, name, line and CTA as one object. **The figure that justified it was wrong and is corrected.** Rebuilding the contract's own anatomy — strip, name, line, CTA inside one card — and measuring the second door's CTA gives **703.6 of 696 at V14** and **712.9 of 624 at V15**, not the 747 of 696 this file stated: the claim was overstated by 43px. It is also only true at those two short-laptop rows; at 768 to 1023 and at 1440 and above the contract's order fits with 99 to 102px to spare. The order is kept at every width all the same, and the reason is now stated as what it is: one order, not two, so that a parent meets the same object at every row and the card reads as one thing rather than re-arranging itself across a breakpoint. It is a judgement, not a measurement, and Nari can have the contract's order back at the wide rows for the price of two forms |
| **The door sentence is a sibling `<p>` placed by the grid under its own card**, not a child of the door `<li>` | The same element has to sit inside the card at 768 and above and after both CTAs below 768. One copy of the text, placed by grid coordinates, is the only way to do that without duplicating a fixed slot in the markup or hiding a second copy from a screen reader. It is a `<p>` rather than a second `<ul>` of two `<li>`: each sentence is its own door's tail, not an item in a list of two, and a second `display: contents` wrapper is a second element with no box — which is also what the fold runner's ink walk prunes (see the Iteration section) |
| **No school mark on the place cards below 768** | Measured: a 27px horizontal mark beside the school name takes 133px of a 312px card at 390 and wraps "Georgetown Campus" to two lines (+25px per card); on its own line at the foot it costs **+25.5px per card** (the earlier +35 was wrong by 10px). At V2 the pair has 34px of slack, so either form puts the second CTA below the fold. The cue set on the phone is the strip label and the card's school tint; both real marks are in the header and the footer (checker R16), and both appear in the cards' header strips from 768 up |
| **The V10 h1 steps down one token to `--text-xl`** | CONTRACT.md section 2's landscape recipe. At `--text-3xl` the sentence is four lines (156px) at 750 and the row cannot hold the doors |
| **The map is inset from the h1 by the spine's lane below 768** | The spine is the diagram's own left edge, so the map is a figure with its own gutter rather than a block aligned to the prose. Stated rather than left as an accident |
| **The application steps are drawn as a second run from 768 up** | The brief does not specify the steps' form. Four hairline nodes with numbered strips joined by the same connector is the direction's own language applied to the one other sequence on the page, and it fills a width a 65ch list left empty. Its connectors carry **no dots**, for the same reason the map's run wire does not: nothing meets at the midpoint of a plain link. Raised here rather than made silently |
| **Two accent uses on the page, one per screen** | The connector run on the first screen, and the step connectors on the admissions screen. K3 section 5f caps one per screen, not one per page |
| **The mark rides in the place card's header strip from 768 up** | See the Iteration section. The strip loses its own vertical padding to hold it, which costs 8px a card at the two tightest rows and is the reason V14 and V15 sit at 19px of slack rather than 35 |
| **The compare band opens on `--space-6` and the first screen closes on `--space-5` at 1280 and above** | The banner above the band is the sentence that points at it. A full band's opening put 112px of cream between them, which read as a finished screen at V11 and V17 and as a rhythm error everywhere |
| **The 320 reflow row drops the CTA's arrow glyph and takes 16px page margins** | The label is 246.5px of Inconsolata 600 and would not fit the card at 24px margins, so the Georgetown control shipped 50.5px tall against the GT Anywhere control's 44 — two doors that were not the same object. The arrow is `aria-hidden` decoration and is the only thing on the card a parent does not read. Both controls are now 44 by 270 and the two blocks are identical |
| **The h1 binds "in&nbsp;person" as well as "from&nbsp;anywhere"** | The rag, measured. See the h1 section for what it costs at V7, V13 and V19 |
| The header shows the lockup on two rows at 360 and 320 | The mark holds K12 V2's 27px floor instead of shrinking to fit beside the two utility links, as M03 and M12 resolved the same collision. Measured header height 93 at those two rows, 57 everywhere else |

## Flagged slots

| Slot | Flag | What ships |
|---|---|---|
| **"The program"** (the second card's strip) | **Not yet in `copy.md` section 9.** The brief names the card title, and section 9 does not carry the words. Proposed for Nari as wayfinding vocabulary, derived from the deck's own phrase "one mastery-based program" (section 3) and the allowed section 1 heading "Two programs of one school" | The label as the brief writes it, uppercase by CSS. It states no fact; the fact is in the sentences beneath it |
| "Admissions" (the first card's strip) | Already in the deck: a section 3 row label, an allowed eyebrow label, and one of M02's section 9 fact labels | Shipped |
| The application steps | **Q-007**: the four steps are assumed identical for both schools | The four steps from section 5, one line each |
| The `school=` parameter | **DD-25** convention; the live `apply.gt.school` parameter is **to be confirmed in S5**, not confirmed there — DD-25 preserves that dependency | `?school=georgetown` and `?school=anywhere`, never an unscoped application link (checker R17) |
| Tour, info session, FAQ, admissions links | **MD-02**, R14, **REQ-002** | All four point at `gt.school/contact` or the Anywhere academics page with the labels `copy.md` gives them |
| TEFA window, owner, expiry | **Q-021** | The module ships visible to everyone (D-015 option c) with the deck's wording |
| "Current families" destination | **Q-002** | `community.gt.school`, to be confirmed |
| Outcome figure, accreditation | **Q-019**, **Q-033** | Withheld from the page entirely (G0.5 decisions 2 and 3) |
| Claims register status | CR-011, CR-021, CR-032 to CR-035 are all "Unverified, public" | Stated here, never on the page |
| **CR-022**, the conflicting TEFA row | `12-claims-register.md:44` records "The $10,474 TEFA voucher **fully covers** the $10,400 GT Anywhere tuition" and flags it as conflicting with CR-021's hedged "fully or partially covered". **The page uses CR-021's wording and does not use CR-022 at all**, so no figure on the page depends on the unresolved side of that conflict | Nothing; the conflict is Q-021's to settle |

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

**The rendered comparison, which this row is supposed to rest on.** `qa/estate-side-by-side-390.jpg` and `qa/estate-side-by-side-1440.jpg` put `kb/exemplars/estate/anywhere-home-390-firstscreen.jpg` and `anywhere-home-1440-firstscreen.jpg` beside `qa/V9.jpg` and `qa/V16.jpg`. What the pair shows: the same cream ground, the same two faces, the same navy Inconsolata action, the same marks at the same sizes — and a photographic cut-out of a child over line artwork on one side against four outlined boxes on flat cream on the other. This is the furthest of the five new directions from the estate's own first screen in register, and Nari should see the pair before she picks. With the drawing now at 3.63:1 and 5.14:1 it at least holds its own weight beside a photograph, which at 1.56:1 and 2.38:1 it did not.

## Self-check

**`python3 0_plan/tools/check-mocks.py 0_plan/mockups/M23-the-system`**

```
## M23-the-system: 37 pass, 0 fail

check-mocks: OK
```

R37 compares the fold table pasted above against `qa/fold.md` row by row; it is clean, so the figures in
this file are the page as it stands and not an earlier build's.

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
| 14b contrast of the drawing | `qa/measurements.md`, "Contrast of the drawing" | edges **3.63 / 3.31 / 3.35**, connectors and dots **5.14 / 4.68 / 4.73**; nothing in the map below 3:1 |
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

**Captures reviewed by eye in this pass:** `qa/V2.jpg`, `qa/V9.jpg`, `qa/V10.jpg`, `qa/V11.jpg`,
`qa/V13.jpg`, `qa/V16.jpg`, `qa/V18.jpg`, `qa/forced-colors.jpg`, `qa/estate-side-by-side-1440.jpg`, and
detail crops at DPR 2 and 3 of the phone branch, the desktop junction, the banner glyph, the mark chips
and the application run. Defects found in the captures and fixed in this pass: an implicit second grid
column on the phone that collapsed THE PROGRAM to 2px wide (every map child now names its column as well
as its row); the arrowhead sitting off the arc's terminus; and the compare band reading as a finished
screen at V11 and V17.

## Iteration, round one (2026-09-11)

Astra passed the build on all nine rows. The studio critic scored Typography 3, Imagery 3, Colour and
surface 3 and Craft 3 with Motion and Mission at 5, and said that nothing on its list was structural.
That was right: every change below is a token swap, a track ratio, a grid span or a corrected figure, and
none of them touches the direction's argument. The run still goes one bar, one program, one junction, two
places, and the doors are still where it ends.

| # | What the critics found | What changed |
|---|---|---|
| 1 | **The whole argument was drawn below 3:1.** Card, strip, tail and banner hairlines at 1.56 / 1.42 / 1.44; the connector run at 2.38, the value K12 F88 already records as a failure for that orange; and the fact cards carrying no fill, so a node was an outline around the page ground. The file declined the two tokens that fix it on the grounds that "no border is asked to reach 3:1 on its own" | Every edge of the drawing is `--color-border-strong` and every connector and dot is `--color-accent-text`, behind two aliases (`--m23-ink`, `--m23-line`) so one edit moves all of them. Measured by the harness: **3.63 / 3.31 / 3.35** and **5.14 / 4.68 / 4.73**. `--color-border` keeps the page's text rules, where 1.56 is decoration and not argument. This is now CONTRACT.md section 3's rule and the old reasoning is retracted in the token table above |
| 2 | **The GT Anywhere mark imitated its own button**: a 184 by 40 navy plate beside a 200 by 44 navy button, and the plate a `<span>`, so one door showed two button-shaped objects and the other showed one. The Georgetown mark separately sat at 1.10:1 against its card | Both marks moved into their card's header strip, at the end of the strip's own line. Same padding, same corner, same footprint, same inset on both cards; only the fill differs, and `copy.md` section 8 forces that. The light chip carries the drawing's own 3.63:1 edge so it reads as a chip rather than a ghost. The 1180 breakpoint that seated the mark beside the CTA is gone, and with it the CTA's `width: auto`, so the two CTAs are now the same width as each other at every row |
| 3 | **The map's prose measure got worse as the screen got wider**: 20.2 and 18.6 characters a line at 1024, 25.3 and 26 at 1280 and 1440, against 33.7 and 32.5 at 768, with a 130-character sentence setting in seven lines inside a 210px box | The three-across form now starts at **1280** instead of 1024, and its track ratio is re-solved from 1fr / 1.05fr / 2.2fr to **1fr / 1fr / 1.6fr**. From 768 to 1279 the map keeps the two-row form the critic pointed at. Measured characters a line, ADMISSIONS and THE PROGRAM: **33.7 / 34.7 at 768 and 1440, 50.5 / 41.6 at 1024, 25.3 / 29.7 at 1280**. The 1024 row, which was the worst, is now the best |
| 4 | **The split was solved as a percentage of the map**, which assumed the two door blocks were equal halves; at 1024 by 768 they were 263.8 and 238.0 and the lower arm landed 36.1px into the card instead of 49 | The split's wire span is placed in the grid rows whose edges it needs, so its lower edge **is** the second card's top edge and the trunk is `top: attach; height: 100%`. The feed and the junction dot moved to a second span across the whole map, so the dot still sits where the fact cards are centred. Measured arms, from each card's own top edge: **52 / 52 on every portrait phone row, 50 / 50 at V14 and V15, 58 / 58 at V16 and V17**; at 768 to 1279 and in landscape the arms are verticals entering a card edge, so the harness reports their midpoint outside the card (-11 and +132.23), equal on both doors at every row. The tail floor went from a two-line `3em` to `calc(3 * var(--leading-prose) * 1em)`, and both door block heights are now in `qa/measurements.md` so an unequal pair fails the harness instead of a critic |
| 5 | **The phone lost the argument.** Below 768 the branch was gone: a vertical rule with four identical stubs tapping four peer cards in reverse order, no junction, no direction, doors at the head of the run rather than its end. And at 750 by 342 a stub coupled Georgetown to GT Anywhere with the glyph that means "flows into" | The phone now draws the same graph. Two lanes instead of one: the trunk carries the two shared facts, turns into the branch bar at a **single filled junction**, and the bar's **two mirrored arms** end in the two door cards. Two shared nodes in series, one junction, two identical terminals — the desktop topology, read upwards so the doors still come first (C18). At 750 by 342 the false coupling is deleted and replaced by a real branch: a bar below the two door cards with mirrored arms rising into them and a trunk down the column gutter to the shared run, where the dot is now a true three-way junction. `qa/V9.jpg`, `qa/V10.jpg` |
| 6 | **The headline rag was unmanaged and `text-wrap: balance` did nothing** | "in&nbsp;person" is bound. The four seven-line rows get M01's clean double taper at zero fold cost. The cost is stated in the h1 section: V7 goes from six lines to seven, and 1024 from four to five. Both still pass with room |
| 7 | **Three figures did not reproduce, and the 320 row shipped an unequal door pair** | 747 of 696 at V14 is **703.6**, and true only at V14 and V15; the phone mark's foot cost is **+25.5px** a card, not +35; "same CTA size" was 288 by 44 against 199 by 44 and is now true by construction. At 320 the Georgetown control was 50.5px against 44: the row now takes 16px page margins and drops the CTA's `aria-hidden` arrow, and both controls are 44 by 270 with identical blocks |
| 8 | **The estate comparison was argued from a property table, and the banner glyph read as a spinner** | `qa/estate-side-by-side-390.jpg` and `qa/estate-side-by-side-1440.jpg` file the estate's own captures beside V9 and V16. The glyph has its arrowhead, drawn on the arc's terminus and pointing along it — which also settles the only object on the page a reader could argue is a proportion under CONTRACT.md section 3 |
| 9 | **Not a critic finding: a shared-tool change landed mid-iteration.** `0_plan/tools/shots.mjs` gained a guard that prunes an element whose box is at most 1.5 by 1.5px, to stop a visually hidden heading counting as the ink that cuts a row. A `display: contents` wrapper has **no box at all**, so the guard prunes it and its whole subtree, and the false-floor test stopped seeing anything inside one. Ten of M23's nineteen rows failed on it, and M08, the other mock with `display: contents`, reports six failures for what looks like the same cause. M23's own fix is in its markup and is an improvement on its merits: the two door sentences are two `<p>` in the map rather than a second `display: contents` list, because each is its own door's tail and not an item in a list of two. The two door **cards** are still `<ul role="list">` with `display: contents`, which DD-21 and the accessibility tree both want; nothing below the last CTA at any row lives inside it. **The tool itself is not fixed here** — it is shared and another agent is working in it — and the guard should learn to walk through `display: contents` rather than prune it |
| — | Astra's corrections | "Seven omissions" counted eight rows and now says eight. Getty is cited for the shared-sentence-with-two-equal-links pattern, not for C30, which lists Tate, Yale Architecture, UAL and ASU. "Confirmed in S5" now reads "to be confirmed in S5", which is what DD-25 preserves. CR-022's status and its conflict with CR-021 are accounted for in Flagged slots |

**Also changed, and not asked for.** Two rhythm fixes the runner forced and one craft fix. The compare
band now opens on `--space-6` at every width instead of a full band's `--space-8` or `--space-9`, and the
first screen closes on `--space-5` rather than `--space-6` at 1280 and above: with a 48px shorter map the
112px of cream between the banner and the section it points at read as a finished screen at V11 and V17,
and it was a rhythm error everywhere, because the banner is the sentence that points at the band. And the
CTA gets its bottom padding back at the short-desktop rows, where it had been sitting flush against the
card's own border. All three are in Departures.

**What the critics asked for and I did not do, with the reason.**

| Not done | Why |
|---|---|
| **Give the two fact cards a fill** so a node is a shape rather than an outline | The only neutral fill available is `--color-surface`, and `tokens-v2.css` declares `--color-georgetown-tint: var(--color-surface)` — one value, two names. Filling the two shared-fact cards with it would paint them the Georgetown colour on a page whose whole argument is that those two facts belong to both schools. The critic marked the fill "optionally"; the 3.63:1 edge is the part of that row the contract actually requires, and it is done. If Georgetown ever gets a tint of its own, the fill becomes free and should be taken |
| **Fill the empty left half of the first screen at 1440** (Composition fault b) | Partly addressed and deliberately not chased. The re-solved tracks widen the two fact cards from 297 and 312 to 351 each at 1440 (and from 260 and 273 to 307 at 1280), so the map occupies more of the row than it did. The remaining emptiness above and below them is the shape of a four-node graph in a twelve-column band, and closing it would mean either inventing a fifth node the brief does not specify or stretching two cards past a sensible measure — which is the fault this iteration exists to fix |
| **Reverse the 768-to-1279 arms so the asymmetry alternates** | Better answered at the cause: the branch now leaves the run at the map's own centre line, so neither door is fed by a spur. Nothing alternates because nothing is unequal |
| **Alternate tracking at the 402-to-430 band** to recover the rows the bound phrase costs | A per-band tracking step on the h1 is a second typographic variable for one row's rag, and the contract's type table sets the h1 at normal tracking. V7 passes at 576 of 657 and its seven-line rag is even. The trade is declared in the h1 section instead, which is the critic's own alternative |
| **Raise the door tails higher than three lines so the V14 blocks match exactly** | They differ by 8.98px at V14 and nowhere else, and the split no longer depends on their being equal. Forcing a four-line floor would add 25px below the fold at the one row where the compare banner is already outside the first screen |
| **Restore the contract's door order (line before CTA) at the wide rows** | The measurement the departure rested on is corrected above, and at 768 to 1023 and 1440 and above the contract's order fits. It is kept anyway so that the card is one object at every row rather than two arrangements across a breakpoint. That is a judgement rather than a measurement and is now labelled as one, so Nari can overturn it cheaply |
