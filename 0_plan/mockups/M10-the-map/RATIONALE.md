# M10 The Map: rationale

| Field | Value |
|---|---|
| Mock | M10 "The Map", `0_plan/mockups/M10-the-map/` (`index.html`, `styles.css`, this file, `qa/`) |
| Brief | `0_plan/kb/briefs/M10.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1 (fold method with computed h1 lines, the compact door rule, the V10 landscape recipe, prose at 1.5, K3's two-colour ring, DD-47's uniform button corner); runbook `0_plan/17-design-studio-runbook.md` sections 4, 6 and 7; `0_plan/mockups/shared/BUILDER-BRIEF.md` 16 rules; `copy.md` v1.1; `CONTINUITY.md` |
| Lens order | L1 objective, L2 continuity, L4 exclusivity, L3 mission. New direction, built for N campuses (DD-21) |
| Built | 2026-09-11, design engineer (fork of the design director, Opus 5). Build pass, then **one consolidated iteration after both critic cards** (`ensemble/critic-fable-M10.md`, `ensemble/critic-astra-M10.md`); see "Iteration one" at the end of this file |
| Tools | `node 0_plan/tools/shots.mjs 0_plan/mockups/M10-the-map` for the 19-row matrix, forced colours, reduced motion, the doubled root font and the mark geometry; `node qa/M10-measure.mjs` (written for this mock) for h1 line counts, rendered type size, every ring against every edge of its frame, clearance, first-screen bottoms, the element crops and the Continuity side-by-side; `python3 qa/M10-geometry.py` for the map geometry. No other browser tool; no production host was opened |
| State | No JavaScript (D-039 undecided): one `<script>`, the JSON-LD block, and no `data-d039` declaration. The map does not draw: no map move exists in K4 section 8.1, so a draw would need a D-031 proposal first (brief, Motion). The page is complete at rest. No photograph in either state (DD-42 default; the brief's Imagery row is "diagrammatic, no photograph in either state", so the photographed state is identical to this one) |
| Copy | `copy.md` v1.1 sections 0 to 8 verbatim. From section 9: the schematic labels "In person" and "Online" reused on the doors, the Locations-list status string "Now enrolling", and the skip-link label. The map's only words are "Georgetown, Texas" and the h1's own phrase "online from anywhere" |

## Direction

Georgetown is a pin. GT Anywhere is the rest of the map. The first screen argues it by drawing it, and
the drawing has to argue the *second* half or it is not this direction. So the two halves of the h1's
last sentence each have a mark of their own, and both are measured rather than asserted:

| The half | Its mark | The measurement that makes it true |
|---|---|---|
| "in person at our Georgetown, Texas campus" | one pin, at the Census Bureau's own internal point for Georgetown city | derived, not placed: `qa/M10-geometry.py` |
| "or online from anywhere" | the **filled United States**, with Texas picked out inside it, and three rings that **leave the frame on every edge at every row** | 0 closed rings and all four edges crossed at 19 of 19 rows (`qa/measurements.md`) |

That is the change this iteration exists to make. In the first build the country was an empty outline
beside a filled state, and the three rings closed on all four edges at every phone row — a bounded
circle drawn around a campus, which is the cartographic idiom for catchment: how far the school reaches
*from Georgetown*. The claim is the opposite, that GT Anywhere has no distance at all. The ink now says
so: the reach is a place you can see, and the rings run out of the picture.

To the right of the map sit the two doors that act on what it just said. The diagram is the argument,
so it sits where the argument belongs, on the first screen at laptop widths, with both CTAs and the
compare sentence inside the first screen.

The map is honest about what it is. It is not decoration and it is not a survey with invented detail:
every coordinate comes from Natural Earth 5.1.1 and the U.S. Census Bureau, and the simplification is
stated below with its tolerance. Nothing on it is claimed that is not drawn.

Below 1180px the order reverses (M01's form): the doors come first, because a parent on a phone is
choosing, not studying, and the map becomes the second screen.
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
as M12 already found; the compact door rule absorbs it (measured 593 of 605 at V2).

## Brief compliance

| Brief section | What was built | Evidence |
|---|---|---|
| Mock id and name, lens order | M10 "The Map"; L1, L2, L4, L3 as above | This file, Direction |
| Thesis | Texas drawn once, one pin, three rings that leave the frame on every edge at every row (measured), the United States **filled** as the GT Anywhere surface with Texas picked out inside it, and a Locations list under the map that holds three to five rows without a rewrite | `qa/crop-map-1440.jpg`, `qa/crop-map-390.jpg`, `qa/measurements.md` "Every ring against every edge of its frame" |
| Exemplars: UAL "6 Colleges, 1 University" (C30) | Borrowed as the Locations list: every place named in full under the map, bracketed by hairlines, the open one a real link — not a count in a headline | `qa/V16.jpg`, `qa/crop-locations-390.jpg` |
| Exemplars: Arizona State "One university, many places" (C30) | Borrowed as place naming: the place name carries its own status plate beside it ("Now enrolling"), the way ASU plates the campus name on its card. ASU plates over a photograph; this page has no photograph, so the plate sits on the page ground | `qa/V16.jpg` |
| Exemplars: Every's directory (C26) | Borrowed as compact-plus-fuller: the map is the compact view of where the school is, the Locations list the fuller one, in the same block | first screen at 1180 and above |
| Avoided: Hull's London campus in a filter chip (C20) | The one campus that exists is a named row with a status and a link, never a control a parent has to operate to discover a place | `.locations` markup |
| Composition: header 56, h1 across 8 columns, provenance | Header row 56px plus its hairline (measured bottom 57); `h1 { max-width: min(35ch, 66%) }` from 1180, which is the contract's eight of twelve columns (802px at V14, 908px at V16, measured); provenance once, `data-fold="provenance" data-slot="provenance"` | `qa/fold.md`, `qa/measurements.md` |
| Composition: map left 7 columns, doors right 5, stacked | `.choice` is a 12-column grid from 1180: map columns 1 to 7 row 1, doors 8 to 13 row 1, the compare sentence 1 to 7 row 2 as the map's caption, the door lines 8 to 13 spanning rows 2 and 3, the Locations list 1 to 7 row 3 | `styles.css`, `@media (min-width: 1180px)` |
| Composition: at V14 and V16 both CTAs and the compare anchor inside the first screen | V14 CTAs 442 and 592, compare 649, viewport 720. V16 CTAs 481 and 640, compare 706, viewport 900 | `qa/measurements.md` |
| Composition: below 1024 the doors come first, the map is the second screen | The switch is at 1180, not 1024 — a departure, named below. Doors `order: 1`, lines 2, compare 3, map 4, locations 5 | `qa/V13.jpg`, `qa/V2-full.jpg` |
| Composition: geometry from Natural Earth 1:50m Admin 1, 5.1.1, public domain, under 4 KB, provenance committed | 3,182 bytes of path data from Natural Earth 5.1.1, regenerated by `qa/M10-geometry.py`, which carries the URLs, the checksum and the method | "The map: provenance and simplification" below |
| Composition: Locations list, Georgetown now enrolling as a real link, coming-soon only with Nari's confirmation | One row, a real link to gt.school (never `href="#"`, which is the live component's defect K12 A13). No coming-soon city: no confirmation from Nari exists — K12 OQ-3 is open and addressed to her | Flagged slots below |
| Composition: fold estimates | Stated and then measured below; two of the brief's own sums did not survive contact and are corrected with reasons | "Fold: designed to, then measured" |
| Typography | Contract roles. Map labels `--text-sm` Inter Tight 500 — **as HTML, not SVG `<text>`**, a departure named below, because SVG text is scaled by the viewport transform and the first build rendered it at 11.07px at the reflow row while reporting 14 to 15; list name `--text-md` Literata; status chip `--text-xs` Inter Tight uppercase at 0.08em | `qa/measurements.md` "Rendered type on the map": 14.00 to 15.00px at all 19 rows, with the map's own scale printed beside it |
| Colour and surface | `--color-bg` page; land `--color-surface`; the pin is the first screen's one accent use; door cards as M01 with the two school tints; status chip `--color-text` on `--color-surface` (RF-37); focus `--color-focus`. **Two departures, both measured and named below:** the land outline is `--color-text`, not `--color-border` (1.42:1); the rings are `--color-border-strong` at full opacity, not `--color-navy` at 30/20/10 per cent (1.87, 1.49, 1.21:1) | `qa/V16.jpg`, `qa/focus-cta.jpg`, "Contrast, every mark on the map" below |
| Imagery: diagrammatic, no photograph in either state | No `<img>` on the page except mark SVGs. Nothing in `ASSETS.md` is used | `grep -c "<img" index.html` is 7: the GT School mark in the header, `gt-icon.svg` on each of the four door cards (DD-04), and both marks in the footer |
| Motion | Still. V1 door state and V3 focus instant; V10 anchor scroll inside `prefers-reduced-motion: no-preference`; no V6, because it needs the D-039 script and the brief puts it on the third screen and later; no map draw | Motion spec below; runner reports every computed duration 0s |
| Copy | Sections 0 to 8 verbatim; the map's two words as specified; "In person" and "Online" reused per section 9 | `check-claims.py`; the copy greps in Self-check |
| Conversion | Doors on the first screen at every fold row (V18 is a reflow row, not a fold row); compare anchor as the module's caption at 1180 and above and under the doors on phones; table with repeated values; proof strip; steps; secondary CTAs; the Locations list as the N-campus proof | `qa/fold.md` |
| Acceptance: SVG text never overlaps land or rings, measured | **There is no SVG text.** Both labels are HTML in the figure's `<figcaption>`, a sibling of the `<svg>`, so an overlap is structurally impossible rather than avoided by placement. Measured anyway at all 19 rows: smallest gap from a key element to the drawing 16.00px; smallest clearance from the Texas outline to the frame that crops it 5.47px | "Type, and the rings against their frame" below |
| Acceptance: any coming-soon item shown has Nari's confirmation | None is shown | Flagged slots |
| Acceptance: rationale names DD-38, DD-39, DD-45, D-039 | All four named, with DD-21, DD-42, DD-43, DD-44, DD-46, DD-47, MN-16, RF-07, RF-25, RF-37, RF-53, RF-55, RF-58 | Decisions applied |

## Fold: designed to, then measured

Designed with the contract's method (header 56 plus its 1px rule; the h1 height from the clamp size and
the measured line count at `--leading-tight`; provenance one line at `--text-sm`; gaps from the space
tokens; the compact door block as built here: 8px padding + label 16 + 4 + name 31 + 8 + CTA 44 or, on
the rows where the Georgetown label wraps, the two-line control at 53.5 + 8px padding). The runner then
measured every row. These are the figures from the run pasted in Self-check, which is what checker R37
compares.

| Row | Viewport | Limit | Designed-to sum | Measured CTA Georgetown | Measured CTA Anywhere | Slack | Result |
|---|---|---|---|---|---|---|---|
| V2 | 375 by 629 | fold | 605 | 57 | 292 | 318 | 457 | 593 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 266 | 291 | 421 | 548 | yes | PASS |
| V10 | 750 by 342 | fold | 318 | 57 | 148 | 170 | 295 | 295 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 272 | 298 | 442 | 592 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 293 | 319 | 481 | 640 | yes | PASS |

The V2 slack is the tightest number on the page and it is spent deliberately: 12px buys the two doors a
control of identical height at 320, 360 and 375 (see "The two controls" below).

Two of the brief's own sums did not survive the build and are corrected here:

| Brief's figure | What happened |
|---|---|
| "V2 550 of 605 with the compact door rule" | The h1 is 7 lines at 375, not the contract's 6, so the h1 block is 219px, not 188. The compact card as built is 129px, not 110, because the label, name and the two-line control each carry their own leading. Measured 593 of 605 |
| "V14 … 677 of 696 (measured)" and "V16 map 460 tall, 757 of 876" | Both assumed the map fills the seven columns at 4:3. It does not: the map shares its seven columns with the key, so the drawing is 432 by 304 at V14 and 445 by 314 at V16, not 672 by 504. The first screen is therefore shorter than the brief expected: 592 of 696 at V14, 640 of 876 at V16. The brief's intent — the module inside the first screen with the anchor as its caption — is met with more room, not less. In the first build the map was additionally capped at 700 CSS px to hold its SVG label size; that cap is gone, because the labels are no longer in the SVG |

Every required row passes, including the runner's false-floor test: content reaches into the contract's
reserved bottom 24px on every fold row with more beyond the edge. Two rows are reports, not fold rows:
V9 (the emptiness test, where the compare sentence is cut by the edge at 833 to 860) and V18 (320 by
256, reflow only, where nothing is visible below the last CTA because the viewport is 256px tall). Two structural devices do that work rather
than luck:

1. The Locations list closes on a hairline (`.locations { border-bottom }`), so the first screen's last
   ink is a drawn edge, not the empty leading of a line box.
2. From 1180 the first screen never ends short of the fold: `min-height: calc(100svh - 3.5rem - 1px -
   var(--space-5))` stretches it to the contract's reserve line where its content is shorter, so the
   comparison band's hairline is always the cut a reader sees. `svh` only, inside `@supports (height:
   100svh)`. This is the one place the iteration broke the page and had to be re-tuned: the taller map
   pushed the section's *natural* height past the reserve, the comparison band's hairline fell below the
   viewport, and the runner correctly failed V16 with "FALSE FLOOR: the last visible content ends at
   837, 63px clear of the 900px edge". The fix is the bottom padding from 1400 up, `--space-7` rather
   than `--space-8`: natural height 868 against the 876 reserve, so the reserve governs again and the
   band's hairline lands at 877 of 900.

## The map: provenance and simplification

Everything on the map is derived, nothing is drawn by eye. `qa/M10-geometry.py` regenerates every path
in `index.html` and carries the same provenance in its docstring.

| Element | Source | Licence |
|---|---|---|
| Texas outline | Natural Earth **1:50m Admin 1 – States, Provinces, version 5.1.1**, feature `name = "Texas"`, `adm1_code USA-3536`, `iso_3166_2 US-TX`. Fetched as GeoJSON from `https://raw.githubusercontent.com/nvkelso/natural-earth-vector/v5.1.1/geojson/ne_50m_admin_1_states_provinces.geojson`, sha256 `69a0e06e640b2d505858ae1cb63034e4677f3000b35a98e16312932b98c426b9`; the tag's `VERSION` file reads `5.1.1` | Public domain (Natural Earth, CC0) |
| United States outline (the key's reach swatch) | Natural Earth **1:50m Admin 0 – Countries, version 5.1.1**, feature `ADMIN = "United States of America"`, largest polygon of the MultiPolygon (the contiguous 48, 1,990 points) | Public domain (Natural Earth, CC0) |
| Texas inside that outline | The same Texas feature, projected and fitted with the **same transform as the country outline**, so the state sits where it really sits in the country | Public domain |
| Georgetown pin | 30.668136 N, 97.698744 W — the internal point of **Georgetown city, Texas** in the U.S. Census Bureau **2024 Gazetteer Places file for Texas** (`2024_gaz_place_48.txt`, GEOID 4829336, ANSI 02410584) | U.S. Government work, public domain |

**Projection.** Equidistant cylindrical with a non-zero standard parallel — the **equirectangular**
projection: `x = lon · cos(φ₀)`, `y = −lat`. φ₀ = 31.17°N for the Texas map (the mid-latitude of the
state) and 39.50°N for the United States outline. **Corrected in this iteration, twice.** The first build
called this "plate carrée"; plate carrée is the special case where φ₀ = 0, which is not this. And it
gave the extreme distortion as "about 4 per cent" symmetrically; from the same data Texas's main ring
spans 25.871°N to 36.501°N, so with φ₀ = 31.17° the parallel scale is `cos φ₀ / cos φ`, which is
**1.0644 at the Panhandle's top (+6.4 per cent) and 0.9509 at the Rio Grande's mouth (−4.9 per cent)**.
The formula given above is exact and unambiguous; only the prose was loose. Both corrections are the
studio critic's finding 4 and Astra's, independently.

**Simplification.** Douglas–Peucker, with the tolerance expressed in SVG user units after the fit, so
the tolerance means what it looks like:

| Path | Source points | Kept | Tolerance | Bytes |
|---|---|---|---|---|
| Texas (320 units wide) | 415 | 120 | 0.90 user units (≈ 0.28 per cent of the state's width, about 3.6 km on the ground) | 1,338 |
| United States (200 units wide) | 1,990 | 118 | 1.30 user units (≈ 0.65 per cent of the country's width) | 1,189 |
| Texas inside the country (45 units wide) | 415 | 67 | 0.35 user units | 655 |
| | | | **Total** | **3,182 bytes**, under the brief's 4 KB |

Coordinates are rounded to one decimal place and repeated points dropped. Texas's five barrier-island
slivers (7 to 11 points each) are not drawn: at 320 units wide they are sub-pixel, and drawing a
one-pixel speck that a reader cannot identify is noise, not accuracy. The outline is therefore the
mainland boundary, which is what a state outline at this scale is.

**One drawing, one frame.** The first build drew the map twice — a landscape composition at
`viewBox 0 0 700 290` and a portrait one at `0 0 344 556` — because SVG `<text>` is scaled by the
viewport transform and the two label sizes had to be held separately. That was a real cost: two
geometries that had to agree, a harness written twice, and the C43 hit ("hero scene differs between
1440 and 390 beyond cropping") that both critics recorded. With the labels out of the SVG the reason is
gone, so there is now **one drawing at one frame, from 320px to 1920**: a 500-unit square field
containing Texas, the pin and the three rings, of which `preserveAspectRatio="xMidYMid slice"` shows a
500 × 352 band at `aspect-ratio: 142/100`. The phone and the laptop see the same picture at different
sizes. The Texas outline is placed once with `translate(31.6 84)` at scale 1, and the pin follows from
the generator rather than from the eye: 31.6 + 218.47 = 249.97 → `cx="250.1"`; 84 + 166.05 = 250.05 →
`cy="250.1"` (one decimal place, as every other coordinate).

**The rings are bigger than the frame, by construction.** Ring radii 190, 235 and 290 against a band
whose half-height is 176.05 and half-width 250: every ring exceeds the half-height and the outermost
exceeds the half-width, so no ring can close and every edge is crossed. `qa/M10-measure.mjs` solves
each circle against each edge at every row and prints the crossings; the result is **0 closed rings and
all four edges crossed at 19 of 19 rows**. Ring 1 also crosses the land in the north-west, which ties
the set to the pin rather than leaving it floating outside the state.

**The country is the reach, and it carries no accent.** The United States outline has moved out of the
map frame and into the key, where it is the swatch for "online from anywhere": filled with
`--color-anywhere-tint`, the GT Anywhere door's own surface, with Texas picked out inside it in
`--color-surface`, the Georgetown door's. Its job changed, so its place did. As an inset its only
function was to say where Texas is — a fifth mark for locating Georgetown. As the reach's swatch it
says the school is a place with a shape. Texas is picked out by outline rather than by luminance
(`--color-surface` on `--color-anywhere-tint` is 1.01:1, a hue difference only), so the `--color-text`
outline at 16.30:1 is what carries it, and the first screen still spends the accent exactly once on the
pin (K3 section 5f).

## Type, and the rings against their frame

Two claims in the first build were false and both are fixed here rather than reworded.

**The label size.** The first build set the two map labels as SVG `<text>` at `--text-sm` and reported
them "measured 14.00px to 15.00px across all nineteen". They were not. SVG text is scaled by the
viewport transform, so a reader sees the computed size times the element's screen CTM, and the harness
was reading `getComputedStyle(t).fontSize`, which is the value *before* that transform. Astra found it
and the studio critic confirmed it independently. On screen the first build rendered **12.70px at 360,
13.32 at 375, 13.95 at 390, 14.62 at 1024 and 15.00 at 1440 — and 11.07px at the 320 reflow row**: five
rows under the token's floor and one (430px) over its ceiling. The same reasoning that justified this
build's own 1180 breakpoint — that 11.4px labels at 1024 were unacceptable — condemned the labels it
shipped.

The fix is the one both critics preferred: **the labels are HTML**, in the figure's `<figcaption>`,
positioned by the figure's grid rather than laid over the drawing. Nothing in the SVG viewport
transform reaches them. The interim fix (capping the portrait map at 21.5rem so its cap equals its
344-unit viewBox) is not used, because it cannot fix V1, V2 or V18, where the column is narrower than
the viewBox.

| Width | Rendered label size, this build | Rendered label size, first build | Map scale (CSS px per user unit) |
|---|---|---|---|
| 320 (V18, reflow) | **14.00px** | 11.07px | 0.5440 |
| 360 (V1) | **14.00px** | 12.70px | 0.6240 |
| 375 (V2) | **14.01px** | 13.32px | 0.6540 |
| 390 (V3, V9) | **14.03px** | 13.95px | 0.6840 |
| 1024 (V13) | **14.62px** | 14.62px | 1.6640 |
| 1440 (V16) | **15.00px** | 15.00px | 0.8907 |

The map scale column is printed to make the independence visible rather than asserted: it moves by
3.06× across the matrix (0.544 at the 320 reflow row to 1.664 at V13, where the figure reaches its
52rem cap) and the type does not move with it. The harness now reports `fontSize ×
screenCTM` for any `<text>` left inside an SVG — there is none — so the defect cannot recur silently.

**The rings.** The first build's claim was "three rings widening out of the state and off the frame".
Measured against each viewBox, the outermost ring was contained on all four edges at every phone row.
`qa/M10-measure.mjs` now solves every ring against every edge of the visible frame at every row and
prints the crossing coordinates in user units, so the claim is checked rather than made. Two rows of
its output, at the two widths the runbook names:

| Row | Frame (user units) | Ring | r | Crosses left at | right at | top at | bottom at | Edges |
|---|---|---|---|---|---|---|---|---|
| V3 (390) | 500 × 352.1 | ring 1 | 190 | — | — | 178.9, 321.3 | 178.4, 321.8 | 2 |
| V3 (390) | 500 × 352.1 | ring 2 | 235 | — | — | 94.6, 405.6 | 94.3, 405.9 | 2 |
| V3 (390) | 500 × 352.1 | ring 3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** |
| V16 (1440) | 500 × 352.1 | ring 3 | 290 | 103.3, 396.9 | 103, 397.2 | 19.7, 480.5 | 19.6, 480.6 | **4** |

One frame means one set of crossings: the drawing is identical at every row and only its scale changes,
which is why those two rows are the same numbers. That is the point of the change — the phone and the
laptop now see one picture, so there is nothing for two compositions to disagree about.

**Closed rings at any row: 0. Rows where the ring set leaves the frame on all four edges: 19 of 19.**
Full table in `qa/measurements.md`.

**Overlap.** The brief's acceptance row asks that no SVG text ever overlap land or rings. There is no
SVG text, so the condition is structural rather than positional: the labels are siblings of the
`<svg>`, laid out by the figure's grid. The harness measures it anyway at all nineteen rows —
**smallest gap between a key element and the drawing 16.00px** — and adds the measurement the new
geometry actually needs, which is that the frame crops the rings and not the state: **smallest
clearance from the Texas outline to its frame 5.47px**, positive at every row.

## Contrast, every mark on the map

The first build measured the ring alphas, published them, and then kept them and compensated with
stroke weight. Both critics rejected that and the studio critic's ruling 5 is accepted in full: weight
is not contrast, the rings are labelled graphical objects inside WCAG 1.4.11's 3:1, and overriding the
brief's colour for the land at 1.42:1 while preserving it for the rings at 1.21:1 was inconsistent. The
treatment that already existed in this stylesheet under `forced-colors: active` — full opacity,
separated by dash pattern and width — is now the default theme's treatment too, at
`--color-border-strong`.

| Mark | Colour | Against | Ratio | Verdict |
|---|---|---|---|---|
| Ring 1, 2, 3 (this build) | `--color-border-strong` #857f7b | `--color-bg` | **3.63:1** | passes 1.4.11 |
| the same, where a ring crosses the land | `--color-border-strong` | `--color-surface` | **3.31:1** | passes |
| Ring 1 (brief, first build) | `--color-navy` at 30% over cream | `--color-bg` | 1.87:1 | fails |
| Ring 2 (brief, first build) | `--color-navy` at 20% | `--color-bg` | 1.49:1 | fails |
| Ring 3 (brief, first build) | `--color-navy` at 10% | `--color-bg` | 1.21:1 | fails |
| **Pin fill** | `--color-accent` #e48b53 | the land fill `--color-surface` | **2.17:1** | fails as the sole carrier |
| **Pin fill** | `--color-accent` | `--color-bg` (its halo) | **2.38:1** | fails as the sole carrier |
| **Pin edge (added this iteration)** | `--color-text` #001117 | the gold fill | **7.43:1** | passes |
| Pin edge | `--color-text` | the land fill | **16.10:1** | passes |
| Land outline | `--color-text` | the land fill | 16.10:1 | passes |
| Land outline, had the brief's value been kept | `--color-border` #cac6c4 | the land fill | 1.42:1 | fails |
| Key: country outline | `--color-text` | `--color-anywhere-tint` | 16.30:1 | passes |
| Key: Texas inside the country | `--color-surface` | `--color-anywhere-tint` | 1.01:1 | hue only; the outline carries it |
| Key labels | `--color-text` | `--color-bg` | 17.69:1 | passes |

**The pin, and why it does not need a register row.** The studio critic asked for the pin's ratio to be
stated — it was the one mark the first build left unreported — and for it to go to the register if it
needed a row. Stated: **2.17:1 on the land fill, 2.38:1 on the page ground.** Gold at that ratio cannot
be the sole carrier of a labelled datum, and this iteration does not ask it to be: the dot keeps
`--color-accent` as its fill, which RF-37 permits as a shape colour, and takes a 1px `--color-text`
edge, so the *boundary* of the mark — the thing that makes it a mark — is 7.43:1 against the gold and
16.10:1 against the land, and the colour is a cue rather than the whole signal. That is the same
instrument CONTRACT.md section 4 already governs ("accent … never as small text"; 2.17 to 2.38 are its
own published numbers), so no new ruling is needed and no row is proposed. **If a reviewer disagrees,
the decision that would be needed is a DD row on gold as a shape carrying a labelled datum, and it
belongs in `0_plan/07-design-decisions.md`, which this build does not edit** — the alternative is one
line: drop the accent and draw the pin in `--color-text`. Flagged for the design director rather than
decided here.

## Forced colours

A map is the hard case for forced colours: the user agent does not force `fill` and `stroke`, so an
inline SVG keeps its authored colours on a system ground and can vanish. Every mark is restated, and the
block is **last in the stylesheet** so it outranks the token rules by source order instead of losing to
them at equal weight — the M07 lesson, applied before the first review rather than after it.

| Element | Forced-colours rendering | Checked |
|---|---|---|
| Land, and the key's country and its Texas | `Canvas` fill, `CanvasText` stroke at 1.5. The key's two fills are tints, which forced colours cannot carry, so Texas is picked out inside the country by its outline alone — which is how it is picked out in the default theme too (1.01:1 by luminance) | `qa/forced-colors.jpg` |
| Rings | `CanvasText`, separated by **dash pattern and width** (solid 2, dashed 1.5, finely dashed 1.25) — the same separation the default theme now uses | `qa/forced-colors.jpg` |
| Pin | `CanvasText` dot inside a `Canvas` halo, with a `Canvas` edge so the dot reads as a disc rather than merging with a ring behind it | `qa/forced-colors.jpg` |
| Both labels | HTML at `CanvasText`; nothing can be struck through them, because they are not inside the drawing | `qa/forced-colors.jpg` |
| Buttons, cards, chips, rules, focus rings | `Canvas` with `CanvasText` borders; the focus ring becomes a 3px `CanvasText` outline with the box-shadow band removed | `qa/forced-colors.jpg` |

M07's specific failure — a per-segment stroke striking through every label — cannot occur here, and the
reason is now structural rather than careful: the labels are HTML siblings of the `<svg>`, so no drawn
shape can share their space at any width. The studio critic called the first build's forced-colours
rendering "the best in the slate" and better-looking than its default theme; that gap is now closed
from the other end, because the default theme runs the same ring treatment.

## Layer-2 tokens used, with their rows

Every layer-2 token this mock uses is PROPOSED, and the contract requires the row to be named.

| Token | Register row | Where it is used here |
|---|---|---|
| `--text-xs` to `--text-3xl`, `--text-btn` (fluid clamps) | **DD-38** option (b), R5 | Every type size on the page. The h1 clamp is what the measured line counts above test |
| `--leading-prose: 1.5` | **DD-38** (b), RF-58 | Door lines, table cells, proof facts, steps, the sources line, the footer facts block. Single-line strings keep `--leading-body` |
| `--measure-prose: 65ch` | **DD-38** (b), RF-55 | Door lines, the compare sentence, table prose, the TEFA module, the sources line |
| `--color-border-strong` | **DD-39** option (a), RF-07 | **The three map rings** (3.63:1, the change that answers ruling 5), the rules over the proof facts and the steps, the door border on hover and focus-within. A DD-19 departure: a new tint |
| `--color-text-muted-on-dark` | **DD-39** (a), RF-07 | Not used: the footer sets every string at `--color-on-navy`, so no muted-on-navy value was needed |
| `--color-on-navy` | **DD-39** (a) | Button labels, every footer string |
| `--color-focus-on-dark` | **DD-39** (a) | The outer band of K3's two-colour ring in the footer and on the footer's light logo plate |
| `--ease-standard`, `--ease-out`, `--ease-in` | **MN-16** option (a), RF-53 | Not used: nothing on the page transitions |
| `--duration-none`, the reduced-motion zeroing | **MN-16** (a), R8 | The reduced-motion block sets every transition and animation duration to `--duration-none` |
| `--color-accent-text` | **DD-39** (a), RF-07 | Not used: the accent appears only as the pin's fill, never as text |

## Decisions applied

| Id | How it is applied |
|---|---|
| **DD-04** | The cue set is label **plus icon**: `gt-icon.svg` at 32px in a left strip on every door card, first screen and echo list, plus the school name, the card's tint and the map's own two marks. The neutral GT icon rather than either wordmark, so neither card needs a navy plate and the two doors carry the same mark: one school, two ways in. Built in iteration one at zero fold cost, measured |
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
| `../shared/img/gt-icon.svg` | Both door cards on the first screen and both on the echo list after the table, 32px square | `alt=""`, `aria-hidden` | The neutral GT mark, DD-04's first-named cue. Decorative by intent: the label and the school name carry the meaning, so a screen reader is not made to hear "GT" four times |
| Natural Earth / Census geometry | Inline SVG paths | The map is `role="img"` with an `aria-label` naming Georgetown, Texas and the three rings that run off every edge of the frame. The key's two swatches are `aria-hidden`, because the text beside each one already says what it stands for | Public domain, provenance above |
| Photographs | **None.** No file from `ASSETS.md` is used in either state (DD-42, RF-25, AD-11) | | |

The `aria-label` on each map is the one string on the page that is not a fixed slot: a diagram needs a
text alternative and `copy.md` does not carry one. It is built from the deck's own words —
"Georgetown Campus", "Georgetown, Texas", "online from anywhere" — with only the connective tissue an
alternative needs, and it states no fact the page does not draw. Flagged for Nari below.

## Departures

Every value in `styles.css` that is not a token, and every place this build differs from its brief.

| Departure | Reason |
|---|---|
| **The map argues the reach, not the catchment** (the brief's "three rings labelled online from anywhere" and "a United States inset") | The rings are drawn larger than the frame so they leave it on every edge, and the country has moved from an inset to the key's swatch and is **filled**. Both are the thesis fix of iteration one and both are argued at the top of this file. The brief's elements are all present; what changed is which half of the sentence they carry |
| **The land outline is `--color-text`, not the brief's `--color-border`** | Measured: `--color-border` (#cac6c4) against the land fill `--color-surface` (#f8e8de) is about 1.4:1, and against the page ground about 1.2:1. At the phone scale the state would have no edge at all. `--color-border-strong` was tried first and still read as a smudge in the capture; `--color-text` at 1px is a cartographic line and the hero shape earns it. The key's country and its Texas take the same 1px `--color-text` outline, so the two maps are drawn in one hand |
| **The rings are `--color-border-strong` at full opacity, not the brief's `--color-navy` at 30, 20 and 10 per cent** | The brief's three alphas measure **1.87, 1.49 and 1.21:1** on cream. The first build kept them and compensated with stroke weight; both critics rejected that and they are right — 1.4.11 is a luminance ratio, and a 4px line at 1.21:1 is a wide invisible line. The rings are labelled graphical objects carrying half the thesis, so they take `--color-border-strong` at full opacity (**3.63:1** on the ground, **3.31:1** where they cross the land) and are separated by dash pattern and width, which is the treatment this stylesheet already ran under forced colours. Changed in iteration one |
| **The pin takes a 1px `--color-text` edge** | `--color-accent` is 2.17:1 on the land fill and 2.38:1 on the page ground. The gold stays as fill (RF-37: gold is a shape colour) but no longer carries the mark alone; the edge is 7.43:1 against it. Added in iteration one after the studio critic asked for the ratio the first build never reported |
| **The two map labels are HTML, not SVG `<text>`** as the brief's Typography row specifies | SVG text is scaled by the viewport transform: the first build declared `--text-sm` and rendered 11.07px at 320 and 12.70px at 360. The labels are now in the figure's `<figcaption>`, measured at 14.00 to 15.00px at all nineteen rows. The brief asks for a size, and this is the only way to deliver it. Changed in iteration one |
| **The doors/map switch is at 1180px, not the brief's 1024** | At 1024 the seven-column map track is 547px wide, which forces either a letterboxed drawing or SVG labels at 11px. 1180 is the first width where the seven columns hold the map at its rendered size. V13 (1024 by 768) therefore uses the stacked form, and passes |
| **One drawing at one frame, rather than the brief's single scaling map (and rather than the first build's two compositions)** | The 700px cap existed only to hold SVG label size; with the labels in HTML it is gone, and so is the second composition. The map now fills its column: at 1440 the drawing is 445 by 314 rather than 700 by 290, which is what gives the module one right edge. Consequence: the brief's "V16 map 460 tall" is still not met, because the key shares the seven columns with the map. Changed in iteration one |
| ~~No school mark inside the door cards~~ **— withdrawn. DD-04's cue set is built.** | The first build costed the *expensive* option: a horizontal wordmark plus the navy plate the GT Anywhere mark needs, 22px per pair against 15px of slack. The arithmetic was right and the conclusion did not follow, because DD-04 names `gt-icon.svg` **first** and the neutral GT icon needs no plate on either card. M01's placement is now built here — the icon in a 32px left strip spanning the label and name rows, which already stand 54px together — and the CTA bottoms do not move. Measured as a counterfactual in the browser, the icon hidden and the card returned to one column: **V1 622.4 / 622.4, V2 592.8 / 592.8, V3 576.2 / 576.2, V5 547.8 / 547.8, V10 294.6 / 294.6, V13 411.5 / 411.5, V16 639.9 / 639.9 — zero difference at every row**, because a 32px icon spanning the label and name rows fits inside 54px that already exist. The same mark on both doors: one school, two ways in. It is on the echo door list after the table as well, so the second decision point carries the same cue |
| **The compare sentence is a `<p>` positioned as the map's caption, not a `<figcaption>`** | One element has to serve two layouts: the map's caption from 1180 and a line under the doors below it. A `<figcaption>` cannot leave its `<figure>` |
| **The h1 steps down to `--text-xl` at V10 and drops its 35ch measure there** | The contract's landscape recipe allows one token down on that row; the measure cap had to go with it, because 35ch at 24px is 490px and the sentence then took four lines, not three. Measured 3 lines, 83px, CTAs at 295 of 318 |
| **`min-height: calc(100svh - 3.5rem - 1px - var(--space-5))` on the first screen from 1180** | Stated above under the fold. `svh` only, inside `@supports` |
| Non-token lengths in `styles.css` | 1px hairlines; the 2px focus bands and the 4px outer band; the 3px forced-colours outline; the 44px target floor; the 56px header row; the 27px and 32px mark heights K12 V2 fixes in pixels; the SVG's own geometry (the 500-unit viewBox and its 142/100 frame, ring radii 190/235/290, stroke widths 1 to 1.5, the pin's r 6 and 10, the `translate(31.6 84)` that places the land, the key swatch's 204-unit box); `35ch` and `66%` on the h1; `0.08em` and `0.02em` tracking; `.18em` and `.2em` underline offsets; `22%` and `39%` table column widths, on the corner cell as well as the body cells so `table-layout: fixed` reads them from the head row (measured 22 / 39 / 39); the breakpoints 369, 389, 699, 700, 768, 780, 1024, 1180, 1400 and `max-height: 400px`. Rule 14 governs colour, type, space, radius, shadow and duration, all of which are tokens here; these are geometry, and every one is measured in `qa/` |
| `overflow-wrap: break-word` on `body`, and `anywhere` on the door name | The runner's doubled-root-font test at V2 overflowed by 84px on the h1's non-breaking pairs, the sources line's URLs and the location name. `break-word` breaks only a word that would otherwise leave the box. It does **not** reduce a grid track's min-content size, which is why adding the 32px icon strip re-broke the test at 419 of 375: "Georgetown" at a 32px root contributes 257px of min-content to the card's second column. `overflow-wrap: anywhere` on `.door-name` and `flex-wrap` on the key rows fix it at the source; re-measured 375 of 375 |
| **Both door controls take a two-line floor below 390px**, `calc(2 × --leading-body × --text-btn + 2 × --space-2 + 3px)` | "Explore the Georgetown campus" is 29 characters of Inconsolata at 17px = 246.5px, and the widest card inner box at 320 is 238px, so the label cannot fit on one line at 320, 360 or 375 whatever the padding. The pair stood **60.5px against 44**. Equalising upward to the wrapped height costs 12px of the V2 budget and buys two doors that are the same object at the moment of choice; both controls are `justify-self: stretch` below 700 so they are the same width too. Measured 53.5 / 53.5 at 320, 360 and 375, and 44 / 44 from 390 up. Added in iteration one |
| Non-token lengths added in iteration one | The key swatch widths (6rem, 7.5rem, 10rem), the key column (17rem, 20rem), the map's `aspect-ratio: 142/100`, the 32px door-mark strip, the ring radii 190/235/290 and the `translate(31.6 84)` that places the land. All geometry, all measured in `qa/` |

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
| PQ-04 | Where is the campus? | **The map is this question's answer**: the pin, the key's label "Georgetown, Texas", the Locations list, the filled country that places Texas inside it, and the comparison's "Where and how" row |
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

**The side-by-side the rubric asks for is now filed.** The Continuity row's required evidence is a
rendered comparison with the live sites, and until this iteration no mock had supplied one. It could
not be a screenshot of production — the hard rules forbid opening `anywhere.gt.school` — so it is the
repository's own mirror captures (`0_plan/kb/exemplars/estate/`, provenance in `CONTINUITY.md`) beside
this mock's own first screen at the same two widths, composed by `qa/M10-measure.mjs` into
**`qa/continuity-390.jpg`** and **`qa/continuity-1440.jpg`**. What the pair shows, beyond the token
table below: the estate's cream carries fine wave linework behind a photographic cut-out, and this page
answers it with fine linework of its own — the state outline and three hairline rings on the same
cream. That is the closest this programme has come to the estate's hero idiom without a photograph, and
it is visible in the pair rather than argued in prose. **Anywhere only: gt.school has no mirror in this
repository, so the Georgetown handoff stays unverified.**

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
| Grain and hero linework | the cream is grained, with wave linework behind a composited photographic cut-out | flat cream, no grain, no photograph | Differs. The photograph is barred by DD-42 until Nari's permissions; the grain is a texture the programme has not extracted. **This is the largest visible continuity gap in this direction and it is not closed here.** What this page offers in its place is a drawn surface of its own — one warm land shape, three hairline rings that run off the frame, one accent pin — which reads as deliberate rather than as a plain page missing its texture. Judge it on `qa/continuity-1440.jpg`, not on this sentence |
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
| 14 tokens | checker R11 | 0 raw hex in `styles.css` |
| 16 real logos | checker R16 | both SVGs present |

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M10-the-map`

```
## M10-the-map: 37 pass, 0 fail

check-mocks: OK
```

The count moved from 36 to 37 because the checker gained rule **R37** (the pasted fold figures must
match the current run) while this mock was in review. The first build's `36 pass` was true when it was
written and stale by the time it was read; this paste is from the run above.

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

### `node 0_plan/tools/shots.mjs 0_plan/mockups/M10-the-map` — FINAL run, pasted whole

Checker **R37** compares these figures against `qa/fold.md`; this is that file's report verbatim, from
the run that produced the screenshots and crops in `qa/`. The runner gained two sections while this mock
was in review — mark geometry against K12 V2, and interactive target heights — and both are included
here rather than summarised. Nothing in either fails; two targets are reported under 44px and neither is
new to this iteration (the skip link at 40 to 42.5px, and the TEFA sentence link, which WCAG 2.5.8
exempts because its height is set by the line it sits in).

```
| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 89 | 322 | 348 | 487 | 622 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 57 | 292 | 318 | 457 | 593 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 295 | 320 | 450 | 576 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 295 | 320 | 450 | 577 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 266 | 291 | 421 | 548 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 266 | 291 | 521 | 752 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 296 | 322 | 451 | 578 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 268 | 293 | 423 | 550 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 295 | 320 | 550 | 781 | yes | report: page height 6637 |
| V10 | 750 by 342 | fold | 318 | 57 | 148 | 170 | 295 | 295 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 230 | 256 | 517 | 517 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 236 | 262 | 498 | 498 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 251 | 277 | 411 | 411 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 272 | 298 | 442 | 592 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 279 | 305 | 455 | 610 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 293 | 319 | 481 | 640 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 293 | 319 | 481 | 640 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 89 | 353 | 396 | 560 | 696 | no | PASS no horizontal scroll |
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
| V1 | yes | text cut by the edge, 722 to 742 |
| V2 | yes | text cut by the edge, 618 to 642 |
| V3 | yes | text cut by the edge, 652 to 672 |
| V4 | yes | text cut by the edge, 653 to 673 |
| V5 | yes | text cut by the edge, 705 to 725 |
| V6 | yes | content reaches 832 of 839 and more follows below |
| V7 | yes | content reaches 674 of 681 and more follows below |
| V8 | yes | content reaches 728 of 739 and more follows below |
| V9 | yes | text cut by the edge, 833 to 860 |
| V10 | yes | content reaches 337 of 342 and more follows below |
| V11 | yes | svg cut by the edge, 589 to 1085 |
| V12 | yes | content reaches 1182 of 1194 and more follows below |
| V13 | yes | svg cut by the edge, 606 to 1192 |
| V14 | yes | text cut by the edge, 714 to 740 |
| V15 | yes | content reaches 638 of 648 and more follows below |
| V16 | yes | content reaches 877 of 900 and more follows below |
| V17 | yes | content reaches 937 of 960 and more follows below |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 563 to 592 |

## Interactive targets under 44px

BUILDER-BRIEF rule 11 asks for 44px; WCAG 2.5.8 requires 24px at AA. Everything under 44 is listed. A row fails only under 24px, or a door CTA under 44.

| Viewport | Target | Height | Width | Kind | Result |
|---|---|---|---|---|---|
| 320 by 256 | Skip to main content | 40px | 180px | short control | under 44, above the 24px floor |
| 320 by 256 | Check eligibility on the GT An | 40px | 177px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 375 by 629 | Skip to main content | 40px | 180px | short control | under 44, above the 24px floor |
| 375 by 629 | Check eligibility on the GT An | 40px | 279px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 1440 by 900 | Skip to main content | 42.5px | 198px | short control | under 44, above the 24px floor |
| 1440 by 900 | Not sure which is right for yo | 30px | 547px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 1440 by 900 | Check eligibility on the GT An | 21px | 334px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 390 by 844 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 390 by 844 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 390 by 844 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | unknown | 27px | 141.8px | n/a | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 1440 by 900 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 1440 by 900 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 1440 by 900 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | unknown | 32px | 168px | n/a | ok |

## Result: all required rows pass
```

### `node qa/M10-measure.mjs` — summary

```
**Rendered label size across all 19 rows: 14.00px to 15.00px, inside --text-sm's 14 to 15px. 0 labels remain inside an SVG.**
**Closed rings at any row: 0. Rows where the ring set leaves the frame on all four edges: 19 of 19.**
**Smallest gap between a key element and the drawing: 16.00px. Smallest clearance from the Texas outline to its frame: 5.47px. Zero overlapping pairs at any row.**
```

### The two controls, and the module's right edge

Measured in the browser at the rows the studio critic named.

| What | First build | This build |
|---|---|---|
| Door controls at 320 | 60.5px against 44 | **53.5 / 53.5** |
| Door controls at 360 | 60.5 against 44 | **53.5 / 53.5** |
| Door controls at 375 | 60.5 against 44 | **53.5 / 53.5** |
| Door controls at 390 and above | 44 / 44 | 44 / 44 |
| Door cards at 375 | 138.9 against 122.4 | **131.9 / 131.9** |
| Door cards at 320 (reflow row) | — | 157.1 against 131.8: the residue is the door *name*, which wraps to two lines at 320 for "Georgetown Campus" and one for "GT Anywhere". That is the fixed copy's own line count, not the control's, and it is not equalised by padding |
| First screen at 1440: map ink | ended at ~612, 209px short of the rule | the drawing reaches its own frame at **477.3**, and the figure (map plus key) ends at **821.3** |
| First screen at 1440: the Locations rule | 821.3 | **821.3 — the same edge** |
| First screen at 1440: the key's last text ink | — | 814.4, 6.9px inside the figure's edge |
| First screen at 1440: the compare sentence's ink | 578 | 578.5, unchanged: it is one line of prose at `--measure-prose`, not a block with an edge to align |
| First screen at 1280 | — | figure 728.0, Locations rule 728.0, key text ink 727.6 |
| Comparison table columns at 1440 | 39 / 30.5 / 30.5 per cent | **22 / 39 / 39** |
| Comparison table columns at 768 | 39 / 30.5 / 30.5 | **22 / 39 / 39** |

### Screenshots looked at with the Read tool

First build: `qa/V2.jpg`, `qa/V2-full.jpg`, `qa/V5.jpg`, `qa/V9.jpg`, `qa/V10.jpg`, `qa/V11.jpg`,
`qa/V13.jpg`, `qa/V14.jpg`, `qa/V16.jpg`, `qa/V18.jpg`, `qa/forced-colors.jpg`, `qa/focus-cta.jpg`,
`qa/focus-footer-plate.jpg`, and the element crops.
Iteration one, after every re-run: `qa/V16.jpg`, `qa/V9.jpg`, `qa/V3.jpg`, `qa/V2.jpg`,
`qa/forced-colors.jpg`, `qa/crop-map-1440.jpg`, `qa/crop-map-390.jpg`, `qa/crop-doors-375.jpg` and
`qa/continuity-1440.jpg`. Fixes made in iteration one *from the captures rather than from the numbers*
are listed in "Iteration one" below.
Fixes made from what the captures showed in the first build, in order: the rings and the land had no presence, so the land
took a `--color-text` outline and the rings a growing stroke (both revisited in iteration one); the
landscape composition's diagonal leader read as a stray stick, so the pin's label moved to the pin's own
latitude on a horizontal leader (leaders are gone with the in-SVG labels); the
laptop grid opened a 190px hole under the map, so the door lines now span two rows; the map was centred
while every other element was left-aligned, so it is left-aligned everywhere; the Georgetown CTA wrapped
to two lines at 375 and 750, so the button's tracking went — **this claim was wrong and is corrected
here**: it was fixed at 750 and not at 375, 360 or 320, where the pair still stood 60.5px against 44
until iteration one; the "Already a GT family?" band borrowed GT
Anywhere's pale blue for a statement about both schools, so it went back to the page ground; and the
door CTAs carried K3's two-colour ring although they sit on a light tint, where the contract asks for the
plain `--color-focus` ring.

### First screen at 390 by 844

Header, umbrella sentence, provenance line, then the two door cards — each with the GT icon, the label,
the school name, its supporting line and a control of identical size — with both CTAs at **550 and 781
of 844**, and the compare sentence cut by the bottom edge at 833 to 860, which is the runner's own
continuation evidence. The map is the second screen, as the brief asks.

## Iteration one, 2026-09-11: what changed, and what I judged wrong and did not do

Inputs: `ensemble/critic-fable-M10.md` (Colour and surface 2, Composition 3, Typography 3, Imagery 3,
Craft 3 — Iterate) and `ensemble/critic-astra-M10.md` (Typography 3 — Iterate), both read in full
before anything was touched, then `kb/briefs/M10.md`, `kb/briefs/CONTRACT.md` and
`mockups/shared/CONTINUITY.md` re-read. One consolidated pass, then the checkers and the runner to
clean, then the captures looked at again.

### Changed

| # | Change | Why, and the evidence that it landed |
|---|---|---|
| 1 | **The map argues the reach.** The country is filled (`--color-anywhere-tint`, Texas picked out inside it) and has moved to the key as the swatch for "online from anywhere"; the rings are drawn larger than the frame and leave it on every edge | The first build gave five marks to locating Georgetown and none to the reach, and drew a closed circle around a campus, which is the catchment idiom. Measured now: **0 closed rings, all four edges crossed, 19 of 19 rows** (`qa/measurements.md`) |
| 2 | **The rings have contrast instead of weight**: `--color-border-strong` at full opacity, separated by dash pattern and width | 1.87 / 1.49 / 1.21:1 → **3.63:1** (3.31:1 across the land). Ruling 5 accepted in full; the stroke-weight compensation is gone |
| 3 | **The pin's contrast is reported and fixed**: 2.17:1 on the land, 2.38:1 on the ground, now with a `--color-text` edge at 7.43:1 against the gold | The one mark the first build never measured. No register row is proposed; see "Contrast, every mark on the map" for what a reviewer would have to decide if they disagree |
| 4 | **The labels are out of the SVG.** Both are HTML in the figure's `<figcaption>` | 11.07–15.62px → **14.00–15.00px at all nineteen rows**, with the map's own scale (0.544 to 1.664) printed beside them |
| 5 | **DD-04's cue set is built.** `gt-icon.svg` at 32px in a left strip spanning the label and name rows, on all four door cards | Counterfactual measured both ways: **zero change to the CTA bottoms at V1, V2, V3, V5, V10, V13 and V16** |
| 6 | **The two controls are one object below 390px**: a two-line floor from the type tokens, and `justify-self: stretch` so they are the same width | 60.5 against 44 → **53.5 / 53.5** at 320, 360 and 375; the cards follow at 375 (131.9 / 131.9) |
| 7 | **The first-screen module has one right edge at 1440**: the figure fills its seven columns and carries the key in a column at its right | map ink ~612 and rule 821.3 → **figure 821.3, Locations rule 821.3**, key text ink 814.4 |
| 8 | **Five rationale statements corrected**: the label range, the rings "off the frame", the CTA wrap "fixed", the projection (**+6.4 per cent north, −4.9 per cent south**, not "about 4 per cent"; **equirectangular**, since plate carrée is the φ₀ = 0 case), and the stale `36 pass` | Each is marked where it occurs; the final run is pasted whole, which is what R37 checks |
| 9 | **The Continuity side-by-side is filed**: `qa/continuity-390.jpg`, `qa/continuity-1440.jpg` | The rubric's required evidence, built from the repository's own mirror captures; no production host was opened |
| 10 | **The comparison table's intended 22/39/39 split is enforced.** `table-layout: fixed` takes its columns from the head row, and the empty corner cell was inheriting the 39% meant for a content column | Astra's Composition note, measured: 39 / 30.5 / 30.5 → **22 / 39 / 39** at 1440 and at 768. One declaration, no markup change (a `<colgroup>` was not needed) |
| 11 | **Two compositions became one.** With the labels out of the SVG the second drawing had no reason to exist | Removes the C43 hit both critics recorded, and halves what the harness has to agree with itself about |

Three changes were forced by the ones above rather than asked for, and are listed because they are real
edits, not consequences anyone should have to discover: the doubled-root-font test broke at **419 of
375** when the icon strip was added (`overflow-wrap: anywhere` on the door name and `flex-wrap` on the
key rows fix it at the source; re-measured 375 of 375); the runner failed V16 with a **false floor** at
837 of 900 when the map grew (the section's bottom padding from 1400 up is `--space-7`, and the reserve
governs again at 877 of 900); and the map's harness was rewritten, because a harness that measures SVG
label clearance has nothing to measure when there is no SVG label. It now reports rendered type,
every ring against every edge, clearance, the element crops and the Continuity pair.

Fixes made in this iteration from the **captures** rather than the numbers, in order: the first ring
set was three near-tangent arcs at 252/272/296 that read as a circle drawn round Texas, so the radii
opened to 190/235/290 and the frame went to a single 142/100 band, where the set reads as three orders
leaving the picture; the key's country swatch was 88px and read as a pale blob, so it is 96px on a
phone and **160px at 1440**, which also brings the key's ink to the module's right edge; the pin swatch
was a dot centred in a 120px box with 54px of dead space before its label, so the dot is set at the
right of its box and the two labels align; and the swatch outline was clipped by its own viewBox edge,
so the swatch carries two units of padding.

### Judged wrong, and not done

| What I did not do | Why |
|---|---|
| **Take the pin to the claims register.** | The claims register (`check-claims.py`, DEL-018) holds *figures a page states* — percentiles, tuition, dates. A contrast ratio is not one, so a row there would be a category error. What the critic's point actually needs is a **design** decision, and design decisions live in `0_plan/07-design-decisions.md`, which this build is not permitted to edit. I fixed the defect instead (a 7.43:1 edge on the dot) and flagged the ruling for the design director, with the one-line alternative if they want the accent gone. Escalated, not skipped |
| **The interim cap of 21.5rem on the portrait map**, which the critic offered as a one-line fix. | It equalises the portrait cap with its 344-unit viewBox and fixes V5 to V8, but it cannot fix V1, V2 or V18, where the column is narrower than the viewBox — so it would have left the reflow row at 11.07px and the claim still false. The HTML layer fixes every row and removes the reason the second composition existed at all |
| **Equalise the two door *cards* at 320.** | At 320 they stand 157.1 against 131.8 because "Georgetown Campus" wraps to two lines and "GT Anywhere" does not. Forcing equal card heights there costs the V2 fold budget (12px of slack) to hide a difference the fixed copy creates, and the controls — which is what a parent is looking at when they choose — are already identical. Reported rather than papered over |
| **Make the compare sentence reach the module's right edge.** | It is one line of prose at `--measure-prose`; a line of text ends where it ends. The defect the critic measured was the map's *ink* stopping 209px short of the rule beneath it, and that is fixed: the figure and the rule now end on the same pixel |
| **Revisit anything both critics upheld**: the 1180 switch, the 700px cap in principle, the land outline at `--color-text`, Georgetown alone in the Locations list, no section reveal. | Upheld is upheld. The 700px cap is the one nuance: its *principle* (hold the rendered size rather than let the viewport transform set it) is what the HTML labels now deliver, so the cap itself is no longer load-bearing and is gone. The land outline, the single Locations row and the absent reveal are unchanged |
| **Add a fourth ring, or animate the rings.** | No map move exists in K4 section 8.1, so a draw needs a D-031 proposal first, and an expanding ring is the exact broadcast-radius misreading this iteration exists to remove. The brief says three rings; there are three |

### What a critic should check first

1. `qa/crop-map-1440.jpg` and `qa/crop-map-390.jpg` against the question the Imagery row asks: does the
   ink now argue that GT Anywhere has no distance, or does it still argue catchment?
2. `qa/measurements.md`, "Every ring against every edge of its frame" — the claim is solved per ring per
   edge per row, so it can be falsified the way the first build's was.
3. `qa/continuity-1440.jpg`, which is the Continuity row's own required evidence.
4. The V2 fold row: 593 of 605 is the tightest number on the page, and 12px of it is spent on control
   parity by choice.

**Director's change and one reversal, after the second scoring.** The key column went from 17rem to 18rem, because
between 1180 and 1399 the longer key line wrapped under its swatch while the shorter stayed inline, so the key took
two shapes on one page; the studio critic measured that and the change is its fix 2. Its fix 1, re-anchoring the
map's crop to the left so the rings read as a wave crossing the frame rather than a target centred on the campus, was
applied and then reverted: probing the rendered drawing afterwards could not confirm the improvement, and a
compositional change to a drawing that already passes both critics is the engineer's call to make with its own
measuring harness, not the director's to ship unverified. It stands as the named route from Imagery 4 to 5.
