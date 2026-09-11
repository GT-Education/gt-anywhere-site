# M10 The Map: rationale

| Field | Value |
|---|---|
| Mock | M10 "The Map", `0_plan/mockups/M10-the-map/` (`index.html`, `styles.css`, this file, `qa/`) |
| Brief | `0_plan/kb/briefs/M10.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1 (fold method with computed h1 lines, the compact door rule, the V10 landscape recipe, prose at 1.5, K3's two-colour ring, DD-47's uniform button corner); runbook `0_plan/17-design-studio-runbook.md` sections 4, 6 and 7; `0_plan/mockups/shared/BUILDER-BRIEF.md` 16 rules; `copy.md` v1.1; `CONTINUITY.md` |
| Lens order | L1 objective, L2 continuity, L4 exclusivity, L3 mission. New direction, built for N campuses (DD-21) |
| Built | 2026-09-11, design engineer (fork of the design director, Opus 5). One build pass with six measured iterations inside it, all before hand-over |
| Tools | `node 0_plan/tools/shots.mjs 0_plan/mockups/M10-the-map` for the 19-row matrix, forced colours, reduced motion, the doubled root font and the mark geometry; `node qa/M10-measure.mjs` (written for this mock) for h1 line counts, SVG label clearance and first-screen bottoms; `python3 qa/M10-geometry.py` for the map geometry. No other browser tool; no production host was opened |
| State | No JavaScript (D-039 undecided): one `<script>`, the JSON-LD block, and no `data-d039` declaration. The map does not draw: no map move exists in K4 section 8.1, so a draw would need a D-031 proposal first (brief, Motion). The page is complete at rest. No photograph in either state (DD-42 default; the brief's Imagery row is "diagrammatic, no photograph in either state", so the photographed state is identical to this one) |
| Copy | `copy.md` v1.1 sections 0 to 8 verbatim. From section 9: the schematic labels "In person" and "Online" reused on the doors, the Locations-list status string "Now enrolling", and the skip-link label. The map's only words are "Georgetown, Texas" and the h1's own phrase "online from anywhere" |

## Direction

Georgetown is a pin. GT Anywhere is the rest of the map. The first screen argues it by drawing it: the
Texas outline with one pin at Georgetown, three rings widening out of the state and off the frame, and
the United States beside it with Texas picked out — then, in the right five columns, the two doors that
act on what the map just said. The diagram is the argument, so it sits where the argument belongs, on
the first screen at laptop widths, with both CTAs and the compare sentence inside the first screen.

The map is honest about what it is. It is not decoration and it is not a survey with invented detail:
every coordinate comes from Natural Earth 5.1.1 and the U.S. Census Bureau, and the simplification is
stated below with its tolerance. Nothing on it is claimed that is not drawn.

Below 1180px the order reverses (M01's form): the doors come first, because a parent on a phone is
choosing, not studying, and the map becomes the second screen where it can be drawn tall enough to read.
Under it the Locations list — "Georgetown, Texas · Now enrolling", one row today — carries the N-campus
promise structurally rather than rhetorically (DD-21, DD-45).

The lens order shows in the order of the screens: the choice (L1), then the two sites a parent lands on
(L2, via the doors and the compare table), then the admissions bar and the four facts (L4), then the
Guides and the day (L3).

## h1

The h1 is the umbrella sentence, `copy.md` section 1, verbatim, set in Literata 400 at `--text-3xl`
with `--leading-tight`. It is the only h1 on the page. Everything else in the first screen is an
illustration of its last five words, which is why the map's second label is that phrase and not a
description of the rings. "In person" and "online from anywhere" are the sentence's own words and the
diagram borrows them rather than inventing a vocabulary.

Measured line counts (`qa/measurements.md`): **7 lines at 360 to 402px wide, 6 at 412 to 430, 4 from
768 up, 3 at V10, 8 at the 320px reflow row.** The contract's estimate of 6 at V2 is one line optimistic,
as M12 already found; the compact door rule absorbs it (measured 590 of 605 at V2).

## Brief compliance

| Brief section | What was built | Evidence |
|---|---|---|
| Mock id and name, lens order | M10 "The Map"; L1, L2, L4, L3 as above | This file, Direction |
| Thesis | Texas drawn once, one pin, three rings that leave the frame, the United States inset with Texas picked out, and a Locations list under the map that holds three to five rows without a rewrite | `qa/crop-map-1440.jpg`, `qa/crop-map-390.jpg` |
| Exemplars: UAL "6 Colleges, 1 University" (C30) | Borrowed as the Locations list: every place named in full under the map, bracketed by hairlines, the open one a real link — not a count in a headline | `qa/V16.jpg`, `qa/crop-locations-390.jpg` |
| Exemplars: Arizona State "One university, many places" (C30) | Borrowed as place naming: the place name carries its own status plate beside it ("Now enrolling"), the way ASU plates the campus name on its card. ASU plates over a photograph; this page has no photograph, so the plate sits on the page ground | `qa/V16.jpg` |
| Exemplars: Every's directory (C26) | Borrowed as compact-plus-fuller: the map is the compact view of where the school is, the Locations list the fuller one, in the same block | first screen at 1180 and above |
| Avoided: Hull's London campus in a filter chip (C20) | The one campus that exists is a named row with a status and a link, never a control a parent has to operate to discover a place | `.locations` markup |
| Composition: header 56, h1 across 8 columns, provenance | Header row 56px plus its hairline (measured bottom 57); `h1 { max-width: min(35ch, 66%) }` from 1180, which is the contract's eight of twelve columns (802px at V14, 908px at V16, measured); provenance once, `data-fold="provenance" data-slot="provenance"` | `qa/fold.md`, `qa/measurements.md` |
| Composition: map left 7 columns, doors right 5, stacked | `.choice` is a 12-column grid from 1180: map columns 1 to 7 row 1, doors 8 to 13 row 1, the compare sentence 1 to 7 row 2 as the map's caption, the door lines 8 to 13 spanning rows 2 and 3, the Locations list 1 to 7 row 3 | `styles.css`, `@media (min-width: 1180px)` |
| Composition: at V14 and V16 both CTAs and the compare anchor inside the first screen | V14 CTAs 439 and 586, compare 643, viewport 720. V16 CTAs 469 and 616, compare 682, viewport 900 | `qa/measurements.md` |
| Composition: below 1024 the doors come first, the map is the second screen | The switch is at 1180, not 1024 — a departure, named below. Doors `order: 1`, lines 2, compare 3, map 4, locations 5 | `qa/V13.jpg`, `qa/V2-full.jpg` |
| Composition: geometry from Natural Earth 1:50m Admin 1, 5.1.1, public domain, under 4 KB, provenance committed | 3,182 bytes of path data from Natural Earth 5.1.1, regenerated by `qa/M10-geometry.py`, which carries the URLs, the checksum and the method | "The map: provenance and simplification" below |
| Composition: Locations list, Georgetown now enrolling as a real link, coming-soon only with Nari's confirmation | One row, a real link to gt.school (never `href="#"`, which is the live component's defect K12 A13). No coming-soon city: no confirmation from Nari exists — K12 OQ-3 is open and addressed to her | Flagged slots below |
| Composition: fold estimates | Stated and then measured below; two of the brief's own sums did not survive contact and are corrected with reasons | "Fold: designed to, then measured" |
| Typography | Contract roles. Map labels `--text-sm` Inter Tight 500 as SVG `<text>`; list name `--text-md` Literata; status chip `--text-xs` Inter Tight uppercase at 0.08em | `qa/measurements.md` records the labels rendering at 14.00 to 15.00px at every row |
| Colour and surface | `--color-bg` page; land `--color-surface`; rings `--color-navy` at 30, 20 and 10 per cent; the pin is the first screen's one accent use; door cards as M01 with the two school tints; status chip `--color-text` on `--color-surface` (RF-37); focus `--color-focus`. The land outline is `--color-text`, not `--color-border`: a departure, named below | `qa/V16.jpg`, `qa/focus-cta.jpg` |
| Imagery: diagrammatic, no photograph in either state | No `<img>` on the page except the three mark SVGs. Nothing in `ASSETS.md` is used | `grep -c "<img" index.html` is 3: the GT School mark in the header, and both marks in the footer |
| Motion | Still. V1 door state and V3 focus instant; V10 anchor scroll inside `prefers-reduced-motion: no-preference`; no V6, because it needs the D-039 script and the brief puts it on the third screen and later; no map draw | Motion spec below; runner reports every computed duration 0s |
| Copy | Sections 0 to 8 verbatim; the map's two words as specified; "In person" and "Online" reused per section 9 | `check-claims.py`; the copy greps in Self-check |
| Conversion | Doors on the first screen at every row (19 of 19 measured); compare anchor as the module's caption at 1180 and above and under the doors on phones; table with repeated values; proof strip; steps; secondary CTAs; the Locations list as the N-campus proof | `qa/fold.md` |
| Acceptance: SVG text never overlaps land or rings, measured | Zero overlapping pairs at all 19 rows. Smallest clearance to land 11.03px, to a map ring 20.20px, to any drawn shape 5.78px | "Label overlap, measured" below |
| Acceptance: any coming-soon item shown has Nari's confirmation | None is shown | Flagged slots |
| Acceptance: rationale names DD-38, DD-39, DD-45, D-039 | All four named, with DD-21, DD-42, DD-43, DD-44, DD-46, DD-47, MN-16, RF-07, RF-25, RF-37, RF-53, RF-55, RF-58 | Decisions applied |

## Fold: designed to, then measured

Designed with the contract's method (header 56 plus its 1px rule; the h1 height from the clamp size and
the measured line count at `--leading-tight`; provenance one line at `--text-sm`; gaps from the space
tokens; the compact door block as built here: 8px padding + label 16 + 4 + name 31 + 8 + CTA 44 + 8px
padding = 119). The runner then measured every row.

| Row | Viewport | Limit | Designed-to sum | Measured CTA Georgetown | Measured CTA Anywhere | Slack | Result |
|---|---|---|---|---|---|---|---|
| V2 | 375 by 629 | 605 | 57 + 16 + 219 + 8 + 22 + 16 + 119 + 4 + 119 = **580** | 464 | **590** | 15 | PASS |
| V5 | 414 by 715 | 691 | 57 + 16 + 193 + 8 + 22 + 16 + 119 + 4 + 119 = **554** | 421 | **548** | 143 | PASS |
| V10 | 750 by 342 | 318 | 57 + 8 + 83 + 4 + 22 + 8 + 119 = **301** (doors side by side) | 295 | **295** | 23 | PASS |
| V14 | 1280 by 720 | 696 | 57 + 16 + 199 + 8 + 22 + 16 + module 288 − 8 = **598** | 439 | **586** | 110 | PASS |
| V16 | 1440 by 900 | 876 | 57 + 24 + 212 + 8 + 22 + 24 + module 290 − 8 = **629** | 469 | **616** | 260 | PASS |

Two of the brief's own sums did not survive the build and are corrected here:

| Brief's figure | What happened |
|---|---|
| "V2 550 of 605 with the compact door rule" | The h1 is 7 lines at 375, not the contract's 6, so the h1 block is 219px, not 188. The compact card as built is 119px, not 110, because the label, name and CTA each carry their own leading. Measured 590 of 605 |
| "V14 … 677 of 696 (measured)" and "V16 map 460 tall, 757 of 876" | Both assumed the map scales with its column. It does not: the map is capped at 700 CSS px so its SVG label type stays inside `--text-sm` at every width (see "Two compositions" below). The map is therefore 290px tall from 700px up, not 380 at V14 and 460 at V16, and the first screen is shorter than the brief expected: 586 of 696 at V14, 616 of 876 at V16. The brief's intent — the module inside the first screen with the anchor as its caption — is met with more room, not less |

All 19 rows pass, including the runner's false-floor test: content reaches into the contract's reserved
bottom 24px on every required row with more beyond the edge. Two structural devices do that work rather
than luck:

1. The Locations list closes on a hairline (`.locations { border-bottom }`), so the first screen's last
   ink is a drawn edge, not the empty leading of a line box.
2. From 1180 the first screen never ends short of the fold: `min-height: calc(100svh - 3.5rem - 1px -
   var(--space-5))` stretches it to the contract's reserve line where its content is shorter, so the
   comparison band's hairline is always the cut a reader sees. Measured at V16 and V17, where the
   natural height is 788px against limits of 819 and 879. `svh` only, inside `@supports (height: 100svh)`.

## The map: provenance and simplification

Everything on the map is derived, nothing is drawn by eye. `qa/M10-geometry.py` regenerates every path
in `index.html` and carries the same provenance in its docstring.

| Element | Source | Licence |
|---|---|---|
| Texas outline | Natural Earth **1:50m Admin 1 – States, Provinces, version 5.1.1**, feature `name = "Texas"`, `adm1_code USA-3536`, `iso_3166_2 US-TX`. Fetched as GeoJSON from `https://raw.githubusercontent.com/nvkelso/natural-earth-vector/v5.1.1/geojson/ne_50m_admin_1_states_provinces.geojson`, sha256 `69a0e06e640b2d505858ae1cb63034e4677f3000b35a98e16312932b98c426b9`; the tag's `VERSION` file reads `5.1.1` | Public domain (Natural Earth, CC0) |
| United States inset outline | Natural Earth **1:50m Admin 0 – Countries, version 5.1.1**, feature `ADMIN = "United States of America"`, largest polygon of the MultiPolygon (the contiguous 48, 1,990 points) | Public domain (Natural Earth, CC0) |
| Texas inside the inset | The same Texas feature, projected and fitted with the **same transform as the inset outline**, so the state sits where it really sits in the country | Public domain |
| Georgetown pin | 30.668136 N, 97.698744 W — the internal point of **Georgetown city, Texas** in the U.S. Census Bureau **2024 Gazetteer Places file for Texas** (`2024_gaz_place_48.txt`, GEOID 4829336, ANSI 02410584) | U.S. Government work, public domain |

**Projection.** Equidistant cylindrical (plate carrée) with a standard parallel: `x = lon · cos(φ₀)`,
`y = −lat`. φ₀ = 31.17°N for the Texas map (the mid-latitude of the state) and 39.50°N for the United
States inset. Stated because it is a real projection with real distortion, not a nameless stretch: at
Texas's latitude range the east–west scale is correct at 31.17° and departs by about 4 per cent at the
Panhandle's top and the Rio Grande's mouth.

**Simplification.** Douglas–Peucker, with the tolerance expressed in SVG user units after the fit, so
the tolerance means what it looks like:

| Path | Source points | Kept | Tolerance | Bytes |
|---|---|---|---|---|
| Texas (320 units wide) | 415 | 120 | 0.90 user units (≈ 0.28 per cent of the state's width, about 3.6 km on the ground) | 1,338 |
| United States (200 units wide) | 1,990 | 118 | 1.30 user units (≈ 0.65 per cent of the country's width) | 1,189 |
| Texas inside the inset (45 units wide) | 415 | 67 | 0.35 user units | 655 |
| | | | **Total** | **3,182 bytes**, under the brief's 4 KB |

Coordinates are rounded to one decimal place and repeated points dropped. Texas's five barrier-island
slivers (7 to 11 points each) are not drawn: at 320 units wide they are sub-pixel, and drawing a
one-pixel speck that a reader cannot identify is noise, not accuracy. The outline is therefore the
mainland boundary, which is what a state outline at this scale is.

**Two compositions, one outline.** The three paths are declared once in a hidden `<svg>` sprite and
placed twice with `<use>`: a landscape composition (`viewBox 0 0 700 290`) from 700px up and a portrait
one (`viewBox 0 0 344 556`) below it. The reason is measurable: a single viewBox stretched across a
2.4× width range would render its `<text>` at 6px on a phone or 29px on a laptop, because SVG text
scales with the viewport transform and no `calc()` can invert it. Capping the landscape map at 700 CSS
px and the portrait one at 384 keeps the rendered label size inside `--text-sm` at every row —
**measured 14.00px to 15.00px across all nineteen** (`qa/measurements.md`). The portrait map is
566px tall on a 390px phone, which is why it is the second screen there.

**The inset carries no accent.** Texas is picked out inside it by fill and outline, not by a second
orange dot, so the first screen spends the accent exactly once (K3 section 5f).

## Label overlap, measured

The brief's acceptance row asks that no SVG text ever overlap land or rings, measured rather than
eyeballed. `qa/M10-measure.mjs` does it per glyph, not per word: for every `<text>` it takes each
character's rendered extent (`getExtentOfChar`, transformed to screen space by the element's own CTM)
and tests it against **every drawn shape in the same SVG** — the land and both inset outlines sampled
along the real path with `getPointAtLength` plus an `isPointInFill` test, the rings and key rings solved
analytically against the stroke band, the pin, the halo and the leaders sampled. It runs at all
nineteen viewports, so the check covers the label size changing with the clamp and both compositions.

| Measure | Result |
|---|---|
| Overlapping pairs, all 19 rows, both compositions, 38 label instances | **0** |
| Smallest clearance from a glyph to land (Texas or either inset outline) | **11.03px** (V16 and V17, "Georgetown, Texas" against the Texas coastline) |
| Smallest clearance from a glyph to a map ring | **20.20px** (V18, "Georgetown, Texas" against ring 3) |
| Smallest clearance to any drawn shape | **5.78px** (V10, "Georgetown, Texas" against its own leader line, which stops 6 user units short of the label by design) |
| Rendered label size | 14.00px to 15.00px, inside `--text-sm`'s own 14 to 15 range |

Full table in `qa/measurements.md`. The design that makes this true rather than lucky: in the landscape
composition both labels live in the clear band to the right of the outermost ring (every point with
x ≥ 400 is outside r₃ = 150 centred at x = 238.1) and are connected back to what they name — the pin by
a horizontal leader, the rings by a tick and a key glyph. In the portrait composition both labels sit
below the map entirely, as a legend with the same two marks.

## Forced colours

A map is the hard case for forced colours: the user agent does not force `fill` and `stroke`, so an
inline SVG keeps its authored colours on a system ground and can vanish, and the three rings are
separated by `stroke-opacity`, which forced colours does not touch either. Both are handled, and the
block is **last in the stylesheet** so it outranks the token rules by source order instead of losing to
them at equal weight — the M07 lesson, applied before the first review rather than after it.

| Element | Forced-colours rendering | Checked |
|---|---|---|
| Land, both inset outlines | `Canvas` fill, `CanvasText` stroke at 1.5 | `qa/forced-colors.jpg` |
| Rings | `CanvasText` at full opacity, separated by **dash pattern and width** (solid 2, dashed 1.5, dotted 1) instead of opacity | `qa/forced-colors.jpg` |
| Pin | `CanvasText` dot inside a `Canvas` halo with a `CanvasText` edge, so it reads as a mark on either system theme | `qa/forced-colors.jpg` |
| Leaders, key rings | `CanvasText` | `qa/forced-colors.jpg` |
| Both labels | `CanvasText`, legible, no shape struck through them | `qa/forced-colors.jpg` |
| Buttons, cards, chips, rules, focus rings | `Canvas` with `CanvasText` borders; the focus ring becomes a 3px `CanvasText` outline with the box-shadow band removed | `qa/forced-colors.jpg` |

M07's specific failure — a per-segment stroke striking through every label — cannot occur here: no
stroke is added to a shape that sits under a word, and the measuring harness above would score a zero
clearance if one were.

## Layer-2 tokens used, with their rows

Every layer-2 token this mock uses is PROPOSED, and the contract requires the row to be named.

| Token | Register row | Where it is used here |
|---|---|---|
| `--text-xs` to `--text-3xl`, `--text-btn` (fluid clamps) | **DD-38** option (b), R5 | Every type size on the page. The h1 clamp is what the measured line counts above test |
| `--leading-prose: 1.5` | **DD-38** (b), RF-58 | Door lines, table cells, proof facts, steps, the sources line, the footer facts block. Single-line strings keep `--leading-body` |
| `--measure-prose: 65ch` | **DD-38** (b), RF-55 | Door lines, the compare sentence, table prose, the TEFA module, the sources line |
| `--color-border-strong` | **DD-39** option (a), RF-07 | The leaders and the tick in both maps, the rules over the proof facts and the steps, the door border on hover and focus-within. A DD-19 departure: a new tint |
| `--color-text-muted-on-dark` | **DD-39** (a), RF-07 | Not used: the footer sets every string at `--color-on-navy`, so no muted-on-navy value was needed |
| `--color-on-navy` | **DD-39** (a) | Button labels, every footer string |
| `--color-focus-on-dark` | **DD-39** (a) | The outer band of K3's two-colour ring in the footer and on the footer's light logo plate |
| `--ease-standard`, `--ease-out`, `--ease-in` | **MN-16** option (a), RF-53 | Not used: nothing on the page transitions |
| `--duration-none`, the reduced-motion zeroing | **MN-16** (a), R8 | The reduced-motion block sets every transition and animation duration to `--duration-none` |
| `--color-accent-text` | **DD-39** (a), RF-07 | Not used: the accent appears only as the pin's fill, never as text |

## Decisions applied

| Id | How it is applied |
|---|---|
| **DD-21** | The doors are a `<ul>` on auto-fit tracks, not two fixed halves: three to five entries reflow without a rewrite. The Locations list is the same. The map is drawn for N campuses — one pin today, and a second pin needs a second `<circle>`, not a new composition |
| **DD-38** (b) | Type roles and the fluid clamp as the working default; h1 Literata 400, door names Literata 400 `--text-xl`, prose Inter Tight 400 at 1.5, labels Inter Tight 500 uppercase, buttons Inconsolata 600, figures Inconsolata 600 `tabular-nums`. Line counts measured at every row, which is what (b) asks for |
| **DD-39** (a) | The colour roles above; gold used only as a shape (the pin), never as text; `--color-focus-on-dark` for the two-colour ring |
| **DD-42** (a), **RF-25**, **AD-11** | No photograph. This direction's photographed state is identical to its default state, because the brief's Imagery row is "diagrammatic; no photograph in either state" — so nothing here waits on Nari's permissions |
| **DD-43** | The three shared comparison rows repeat their value in both columns rather than reading "Same" |
| **DD-44** | The 19-row matrix; V18 reflow and V19 zoom reported, not fold-tested |
| **DD-45** | gt.school's Locations list reused as a **pattern, not an implementation**: the name in a display face, a status underneath, the open location a link — with the live component's three defects fixed. The enrolling row is a real link, not `href="#"` (K12 A13); nothing is sized in `vh`; no accreditation copy sits beside it. The status colour is `--color-text` on `--color-surface`, not the gold that fails AA as text (K12 F65, RF-37) |
| **DD-46** | The contract's surface-dependent button fill: `--color-navy` with `--color-on-navy` text on every light surface on this page (14.58:1). The estate's orange footer button is not copied, because K12 F87 measures its label at 2.50:1 |
| **DD-47** | A uniform `--radius-md` corner on all four sides of every button |
| **MN-16** (a), **R8** | Reduced motion zeroes every duration and leaves every state visible; nothing is hidden at rest |
| **RF-37** | Gold is a surface or shape colour. The pin is a shape; the status chip is `--color-text` on `--color-surface` |
| **D-039** | Escalated and undecided, so this mock ships its no-JavaScript state only: no router, no observer, no V6 reveal, no map draw. One `<script>`, the JSON-LD block. The page is complete at rest and nothing here assumes the decision goes either way |
| **REQ-022** | No figure without a claims-register row; `check-claims.py` output in Self-check. The rows this page relies on — CR-011, CR-021, CR-032, CR-033, CR-034, CR-035 — are all **"Unverified, public"** |
| **REQ-024** | The in-app browsers have no published viewport; rows V2 to V8 with the 24px headroom stand in, per `KB-RESOLUTIONS.md` R7 |
| **SE-13** | `noindex, nofollow` on the mock |

## Motion spec

| What animates | Trigger | Duration token | Easing token | Reduced motion |
|---|---|---|---|---|
| Nothing. The page has no `transition` property, no `@keyframes`, no `animation` | — | — | — | The runner reports every computed transition and animation duration 0s at V14, elements and pseudo-elements |
| V1 door state: the card's border steps to `--color-border-strong` | `:hover`, `:focus-within` | instant (0 ms) | none | Unchanged: the state is a colour, not a movement |
| V3 focus: the focus ring | `:focus-visible` | instant (0 ms) | none | Unchanged |
| V10 anchor scroll on the compare link | click | native | native | Inside `@media (prefers-reduced-motion: no-preference)` only; the reduced-motion block forces `scroll-behavior: auto` |
| V6 one-time section reveal (the brief allows it on the steps and secondary CTAs) | **Not built.** It needs the D-039 script, which is undecided. The sections render complete | | | |
| A map draw | **Not built and not proposed.** No map move exists in K4 section 8.1; a draw would need a D-031 proposal first (the brief says so) | | | |

## Assets

| Asset | Where | Alt text | Status |
|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` | Header lockup (27px at phones, 32px from 700) and the footer's light plate (27px / 32px) | "GT School" | Real mark, unmodified, on a light panel as `copy.md` section 8 requires |
| `../shared/img/gt-anywhere-logo-h.svg` | Footer, on the `--color-navy` panel (27px / 32px) | "GT Anywhere" | Real mark, white lettering, on navy as the contract requires |
| Natural Earth / Census geometry | Inline SVG paths | The maps are `role="img"` with an `aria-label` naming Georgetown, Texas, the rings for online from anywhere, and the United States inset; the two `<text>` labels are then not announced twice | Public domain, provenance above |
| Photographs | **None.** No file from `ASSETS.md` is used in either state (DD-42, RF-25, AD-11) | | |

The `aria-label` on each map is the one string on the page that is not a fixed slot: a diagram needs a
text alternative and `copy.md` does not carry one. It is built from the deck's own words —
"Georgetown Campus", "Georgetown, Texas", "online from anywhere", "the United States" — with only the
connective tissue an alternative needs, and it states no fact the page does not draw. Flagged for Nari
below.

## Departures

Every value in `styles.css` that is not a token, and every place this build differs from its brief.

| Departure | Reason |
|---|---|
| **The land outline is `--color-text`, not the brief's `--color-border`** | Measured: `--color-border` (#cac6c4) against the land fill `--color-surface` (#f8e8de) is about 1.4:1, and against the page ground about 1.2:1. At the phone scale the state would have no edge at all. `--color-border-strong` was tried first and still read as a smudge in the capture; `--color-text` at 1px is a cartographic line and the hero shape earns it. The inset outlines stay quieter (`--color-text-muted` for the country, `--color-text` for Texas inside it) so the inset reads as secondary |
| **Ring stroke widths grow as their opacity falls** (1.5 at 30 per cent, 2.5 at 20, 4 at 10) | The brief's three alphas measure 1.9:1, 1.5:1 and 1.24:1 against cream. At one weight the outer ring is invisible. The brief's colour spec is kept exactly; only the weight compensates |
| **The doors/map switch is at 1180px, not the brief's 1024** | At 1024 the seven-column map track is 547px wide, which forces either a letterboxed drawing or SVG labels at 11px. 1180 is the first width where the seven columns hold the map at its rendered size. V13 (1024 by 768) therefore uses the stacked form, and passes |
| **The map is capped at 700 CSS px (landscape) and 384 (portrait)** | So the SVG label type stays inside `--text-sm`. Consequence: the brief's "V16 map 460 tall" is not met; the map is 290px tall from 700px up. Measured trade: labels at 14 to 15px at every row against a map 170px taller at one row |
| **No school mark inside the door cards** (`copy.md` DD-04 cue set says "label plus icon") | Measured: a 20px mark inline with the label costs 10px per card, and the GT Anywhere mark needs a navy plate, which costs 12 more. At V2 the compact pair has 15px of slack; the marks would put both CTAs below the fold. The cue set here is the label, the card's school tint, and the map's own two marks, which the tints echo. Both real marks appear in the header and the footer (checker R16) |
| **The compare sentence is a `<p>` positioned as the map's caption, not a `<figcaption>`** | One element has to serve two layouts: the map's caption from 1180 and a line under the doors below it. A `<figcaption>` cannot leave its `<figure>` |
| **The h1 steps down to `--text-xl` at V10 and drops its 35ch measure there** | The contract's landscape recipe allows one token down on that row; the measure cap had to go with it, because 35ch at 24px is 490px and the sentence then took four lines, not three. Measured 3 lines, 83px, CTAs at 295 of 318 |
| **`min-height: calc(100svh - 3.5rem - 1px - var(--space-5))` on the first screen from 1180** | Stated above under the fold. `svh` only, inside `@supports` |
| Non-token lengths in `styles.css` | 1px hairlines; the 2px focus bands and the 4px outer band; the 3px forced-colours outline; the 44px target floor; the 56px header row; the 27px and 32px mark heights K12 V2 fixes in pixels; the SVG's own geometry (viewBox units, ring radii 78/114/150 and 66/100/134, stroke widths 1 to 4, the translate and scale of each `<use>`); `35ch` and `66%` on the h1; `0.08em` and `0.02em` tracking; `.18em` and `.2em` underline offsets; `22%` and `39%` table column widths; the breakpoints 369, 700, 768, 780, 1024, 1180, 1400 and `max-height: 400px`. Rule 14 governs colour, type, space, radius, shadow and duration, all of which are tokens here; these are geometry, and every one is measured in `qa/` |
| `overflow-wrap: break-word` on `body` | The runner's doubled-root-font test at V2 overflowed by 84px on the h1's non-breaking pairs, the sources line's URLs and the location name. It breaks only a word that would otherwise leave the box |

Zero raw hex in `styles.css` (`grep -c '#' styles.css` returns 0 outside the token names).

## Flagged slots

| Slot | Q or decision id | What ships, and what is withheld |
|---|---|---|
| **The Locations list's coming-soon cities** | K12 **OQ-3** (open, addressed to Nari); `copy.md` section 9; **DD-45** | gt.school's footer publishes Miami FL, New York NY and Bay Area CA as "Coming soon". **None of them is on this page, and the map shows one pin.** `copy.md` section 9 permits them only with Nari's confirmation recorded in a rationale, and no such confirmation exists: OQ-3 is still open. The list and the map are built so that adding a confirmed city is one `<li>` and one `<circle>` |
| The Locations list itself | **DD-45**, Nari | Awaiting Nari's confirmation that the four-location list is approved and current (OQ-3's own wording). Today's single row states only what gt.school already publishes about Georgetown |
| The map's `aria-label` | Nari (new string) | The only non-slot string on the page. Proposed wording in "Assets" above; it names no fact the diagram does not draw |
| "Current families" destination | Q-002 | Ships to community.gt.school as `copy.md` specifies |
| The four application steps | Q-007 | Ship as `copy.md` gives them, identical for both schools |
| Tuition on request (Georgetown) | Q-011 decided; CR-021 / CR-022 conflict | Ships as decided; no Georgetown price anywhere |
| After 8th grade | Q-013 | Ships deferred to admissions |
| Intensive-weekend logistics | Q-017 | Not on the page beyond the deck's own cell |
| TEFA window, owner, expiry | Q-021 | Not stated; the module carries only the deck's two sentences |
| Outcome figure, accreditation | Q-019, Q-033 | Withheld by G0.5 items 2 and 3. Nothing on the page, nothing in the JSON-LD |
| `school=` parameter name | **DD-25** | Every application link carries it (checker R17) |
| Holly's unifying brand element | Q-001 | Not added; the header is the GT School mark alone |
| HubSpot meeting link, tour booking, info-session registration | **MD-02**, R14, REQ-002 | All three secondary CTAs point at gt.school/contact with the labels `copy.md` gives them |

## Parent questions

From `0_plan/05-landing-mockups-plan.md` section 6c.

| Id | Question | Where this page answers it |
|---|---|---|
| PQ-01 | What is GT School? | h1, and the map, which shows the shape of the answer before the sentence is finished |
| PQ-02 | Is it for my child? | Proof strip (90th percentile), steps intro, the comparison's Admissions row |
| PQ-03 | In person or online: what are my options? | The two doors; the map states them as a pin and as rings |
| PQ-04 | Where is the campus? | **The map is this question's answer**: the pin, the label "Georgetown, Texas", the Locations list, the inset that places Texas in the country, and the comparison's "Where and how" row |
| PQ-05 | What does a day look like? | Comparison, "The day" |
| PQ-06 | What does it cost, and can TEFA help? | Comparison, "Tuition and access", and the TEFA module |
| PQ-07 | How do I apply? | "How to apply", four steps, two scoped application links |
| PQ-08 | Who teaches my child? | Comparison, "Guides"; proof strip fact three |
| PQ-09 | How much in-person time does GT Anywhere have? | Comparison, "In-person time"; the door line |
| PQ-10 | What results does the school get, and is it accredited? | **Deferred by decision** (G0.5 items 2 and 3). The page is silent and points to admissions through "Talk to admissions" |
| PQ-11 | What happens after 8th grade? | Comparison row, deferred to admissions (Q-013) |
| PQ-12 | I am a current family, where do I go? | Header and the "Already a GT family?" band |
| PQ-13 | I am not ready to apply, what can I do? | "Questions before you apply", four secondary CTAs |
| PQ-14 | Is GT School part of Alpha School? | The provenance line, once |

Deferred to the school sites by design: the campus tour, the full FAQ, the academic calendar, the
intensive-weekend dates and anything about a specific Guide. Each is one click away through a door or a
secondary CTA.

## Continuity, against the measured estate

Scored against `0_plan/mockups/shared/CONTINUITY.md`, which measures the repository's mirror of
anywhere.gt.school at 390 and 1440. **gt.school has no mirror in this repository and is unmeasured**, so
the Georgetown handoff below is unverified and is stated as such rather than claimed.

| Property | The estate, measured | This mock | Judgement |
|---|---|---|---|
| Page ground | `rgb(252, 244, 239)` | `--color-bg`, the same value | Matches |
| Body text | `rgb(0, 17, 23)` | `--color-text`, the same value | Matches |
| Body face | Inter Tight | Inter Tight | Matches |
| Display face | Literata | Literata | Matches |
| Heading weight | **300** | 400 | Differs, argued: `fonts.css` ships both, and DD-38 (b) makes 400 the working default to be tested on the fixed copy. At 27px on a phone the 300 weight loses too much of the stem on a cream ground. Declared, not overlooked |
| Heading tracking | **−1.6px** | normal | Differs. −1.6px at the estate's 58.5px is −0.027em; applied to this h1's 27px phone size it would close the sentence up at exactly the width where it already runs to seven lines. Declared |
| Heading colour | near-black upright with an accent-orange italic half, measured at weight 400 italic | one colour, no italic half | Differs by intent: K12 F88 measures that orange on cream at **2.38:1**, which fails AA and 3:1. The umbrella sentence is the page's most important string and is not the place to import a contrast failure |
| The visible application action | navy `rgb(0, 42, 58)` fill, near-white label, Inconsolata uppercase | `--color-navy` fill, `--color-on-navy` label, Inconsolata 600 uppercase | Matches the estate's own first-screen action (DD-46) |
| Button weight | **500** | 600 | Differs, and cannot be fixed here: `shared/fonts.css` ships Inconsolata **400 and 600 only**, so a 500 would need a face the programme does not have |
| Button size | 16px | `--text-btn`, 17 to 18px | Differs by one to two pixels, from the shared clamp |
| Button corner | three different constructions, including a composed cut lower-right corner | uniform `--radius-md` on all four sides | Matches **DD-47**, which settles this on the estate's own application control |
| Button fill in the footer | accent orange with a 2.50:1 label | navy on light | Differs by **DD-46**; copying it would import a measured contrast failure |
| Footer marks | both marks present | both, at 32px from 700px and 27px at 390 | Meets K12 V2 at both ends, which `CONTINUITY.md` records several mocks failing. Verified by the runner's own mark-geometry check: 27px at 390, 32px at 1440, 0 per cent aspect skew |
| Grain and hero linework | the cream is grained, with wave linework behind a composited photographic cut-out | flat cream, no grain, no photograph | Differs. The photograph is barred by DD-42 until Nari's permissions; the grain is a texture the programme has not extracted. **This is the largest visible continuity gap in this direction and it is not closed here.** What this page offers in its place is a drawn surface of its own — one warm land shape, three navy rings, one accent pin — which reads as deliberate rather than as a plain page missing its texture |
| Footer construction | uppercase Inconsolata navigation, bordered contact pills, a legal row naming the 2 Hour Learning Network | sentence-case Inter Tight navigation, a mono phone number, no network line in the footer | Differs. The network line appears once, in the provenance line on the first screen, because G0.5 item 6 says once and not in the footer. The navigation face is a deliberate choice: `--text-sm` Inter Tight reads better at seven items than uppercase mono |

Could the two school sites inherit this shell? The header, the footer, the door card, the comparison
table, the proof strip and the Locations list are all token-driven and carry no M10-specific geometry.
The map is this direction's own and would be an umbrella-page component, not something a school site
inherits.

## Self-check

### Rules from `BUILDER-BRIEF.md`, checked by grep

| Rule | Command | Result |
|---|---|---|
| 1 no form | `grep -c "<form" index.html` | 0 |
| 2 no JavaScript | `grep -c "<script" index.html` | 1 (the JSON-LD block) |
| 3 external hosts | `grep -oE "https?://[^\"')[:space:]]+" index.html styles.css` | only gt.school, www.gt.school, anywhere.gt.school, apply.gt.school, community.gt.school, schema.org |
| 5 numbers | checker R5 | on the whitelist |
| 6 no "advisor" in text | checker R6 | pass (`data-type="advisor"` is an attribute, which the rule allows) |
| 7 full school names | checker R7 | Georgetown Campus x9, GT Anywhere x15 |
| 11 accessibility | checker R9 + the runner | one h1, skip link, landmarks, table caption and `scope`, alt on every image, 44px targets, `:focus-visible` with `--color-focus` |
| 14 tokens | `grep -c '#' styles.css` | 0 raw hex |
| 16 real logos | checker R16 | both SVGs present |

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M10-the-map`

```
## M10-the-map: 36 pass, 0 fail

check-mocks: OK
```

### `python3 1_spec/tools/check-claims.py`

```
## 0_plan/mockups/M10-the-map/index.html
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

### `node 0_plan/tools/shots.mjs 0_plan/mockups/M10-the-map` — FINAL run

```
| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 89 | 322 | 348 | 494 | 620 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 57 | 292 | 318 | 464 | 590 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 295 | 320 | 450 | 576 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 295 | 320 | 450 | 577 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 266 | 291 | 421 | 548 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 266 | 291 | 505 | 720 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 296 | 322 | 451 | 578 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 268 | 293 | 423 | 550 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 295 | 320 | 534 | 749 | yes | report: page height 6763 |
| V10 | 750 by 342 | fold | 318 | 57 | 148 | 170 | 295 | 295 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 230 | 256 | 501 | 501 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 236 | 262 | 482 | 482 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 251 | 277 | 411 | 411 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 272 | 298 | 439 | 586 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 279 | 305 | 447 | 594 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 293 | 319 | 469 | 616 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 293 | 319 | 469 | 616 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 89 | 353 | 396 | 542 | 668 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 251 | 277 | 411 | 411 | yes | report: scrollWidth 1024 |

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
| V1 | yes | content reaches 740 of 740 and more follows below |
| V2 | yes | text cut by the edge, 615 to 639 |
| V3 | yes | text cut by the edge, 652 to 672 |
| V4 | yes | text cut by the edge, 653 to 673 |
| V5 | yes | text cut by the edge, 705 to 725 |
| V6 | yes | svg cut by the edge, 815 to 1403 |
| V7 | yes | content reaches 674 of 681 and more follows below |
| V8 | yes | content reaches 728 of 739 and more follows below |
| V9 | yes | content reaches 828 of 844 and more follows below |
| V10 | yes | content reaches 337 of 342 and more follows below |
| V11 | yes | text cut by the edge, 1016 to 1058 |
| V12 | yes | text cut by the edge, 1179 to 1199 |
| V13 | yes | svg cut by the edge, 606 to 896 |
| V14 | yes | text cut by the edge, 708 to 734 |
| V15 | yes | text cut by the edge, 626 to 653 |
| V16 | yes | content reaches 877 of 900 and more follows below |
| V17 | yes | content reaches 937 of 960 and more follows below |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 563 to 592 |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | unknown | 27px | 141.8px | n/a | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | unknown | 32px | 168px | n/a | ok |

## Result: all required rows pass
```

### `node qa/M10-measure.mjs` — summary

```
**Smallest clearance to land: 11.03px. Smallest clearance to a map ring: 20.20px.**
**Smallest clearance to any drawn shape: 5.78px (V10 Georgetown, Texas vs leader). Zero overlapping pairs at any row.**
```

### Screenshots looked at with the Read tool

`qa/V2.jpg`, `qa/V2-full.jpg`, `qa/V5.jpg`, `qa/V9.jpg`, `qa/V10.jpg`, `qa/V11.jpg`, `qa/V13.jpg`,
`qa/V14.jpg`, `qa/V16.jpg`, `qa/V18.jpg`, `qa/forced-colors.jpg`, `qa/focus-cta.jpg`,
`qa/focus-footer-plate.jpg`, and the element crops `qa/crop-map-1440.jpg`, `qa/crop-map-390.jpg`,
`qa/crop-table-1440.jpg`, `qa/crop-proof-1440.jpg`, `qa/crop-steps-1440.jpg`, `qa/crop-footer-1440.jpg`.
Fixes made from what the captures showed, in order: the rings and the land had no presence, so the land
took a `--color-text` outline and the rings a growing stroke; the first composition's diagonal leader
read as a stray stick, so the pin's label moved to the pin's own latitude on a horizontal leader; the
laptop grid opened a 190px hole under the map, so the door lines now span two rows; the map was centred
while every other element was left-aligned, so it is left-aligned everywhere; the Georgetown CTA wrapped
to two lines at 375 and 750, so the button's tracking went; the "Already a GT family?" band borrowed GT
Anywhere's pale blue for a statement about both schools, so it went back to the page ground; and the
door CTAs carried K3's two-colour ring although they sit on a light tint, where the contract asks for the
plain `--color-focus` ring.

### First screen at 390 by 844

Header, umbrella sentence, provenance line, then the two door cards with both CTAs at 534 and 749 of
844, the two door lines beneath them, and the compare sentence cut by the bottom edge. The map is the
second screen, as the brief asks.
