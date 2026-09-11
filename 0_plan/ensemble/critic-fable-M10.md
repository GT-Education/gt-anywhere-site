# Design critic, Fable, M10 The Map, round two (after iteration one), 2026-09-11

Independent: no current scorecard for any other mock was opened. Re-scored against `17` section 6 with
R15 applied. Inputs read in the order the brief set: `ensemble/prompts/DESIGN-CRITIC.md`, my own
`critic-fable-M10-iter0.md` and `critic-astra-M10-iter0.md`, `kb/briefs/M10.md`,
`kb/briefs/CONTRACT.md` v2.1, `mockups/shared/CONTINUITY.md`, then `index.html`, `styles.css`,
`RATIONALE.md` in full, `qa/fold.md`, `qa/measurements.md`, `qa/M10-measure.mjs`, and **every capture in
`qa/`** — V1 to V19, `V2-full`, `V14-full`, `V2-rootx2`, the ten element crops, the two continuity
pairs, the four focus captures and `forced-colors`. `kb/CONCEPTS.md` C18, C20, C26, C29, C30, C43, C45
re-read; `12-claims-register.md` header read for the ruling below.

Evidence marked **my probe** is a critic run of the built page on a server I started (ephemeral port on
`127.0.0.1`, cached Chrome for Testing chromium-1234 through the npx Playwright), written outside the
repository in the session scratchpad. Both checkers re-run read-only: `check-mocks.py` **37 pass, 0
fail** for M10, `check-claims.py` **OK**. Nothing in the repository was changed except this file. No
production host was opened.

Capture freshness checked first: `index.html` 12:25, `styles.css` 12:37, `RATIONALE.md` 12:42,
`measurements.md` and the ten crops and the two continuity pairs 12:42, the nineteen matrix captures,
the focus set, `forced-colors.jpg` and `qa/fold.md` 12:44. **Every image below postdates the last
stylesheet edit**, so every image is the page as built.

## The thesis question, answered on the picture

**The rings no longer draw a catchment, and the sentence now has two shapes instead of one. The picture
carries its caption. It is still the campus that the composition is built around, and that is what
keeps Imagery at 4 rather than 5.** Three things, each looked at rather than read.

**The rings are open, and open enough to see.** Iteration one moved from two compositions to one: a
500-unit square viewBox cropped by `preserveAspectRatio="xMidYMid slice"` into a fixed 142/100 frame, so
the visible field is 500 × 352.1 user units at every row and only the scale changes. I re-derived the
crossings from that geometry rather than taking the harness's word: with the frame's half-height at
176.05, ring 3 (r 290) cuts the left edge at y 103.3 and 396.9 and the top at x 19.7 and 480.5 — matching
`qa/measurements.md` to a tenth — and rings 1 and 2 (r 190, 235) cut the top and bottom only. So "zero
closed rings, all four edges crossed, 19 of 19" is exact, with the caveat the harness itself states
correctly and the `aria-label` does not: it is the *set* that crosses four edges, not each ring. What
matters visually is the size of the opening. Ring 1, the solid one that dominates, is missing a **44.4°
arc at the top and another at the bottom** — a quarter of the circle — and that opening is visible at
every size: unmistakable at `V11.jpg` and `V12.jpg`, clear in `crop-map-390.jpg` where the solid arc
simply stops either side of the panhandle, and present in `crop-map-1440.jpg` and `V16.jpg`. At iter0 I
measured the outermost ring contained on all four edges at every phone row. That is gone. The bullseye
reading is gone with it.

**The country is filled, and it is now a shape for the half of the sentence that had none.** In
`crop-map-1440.jpg` the key carries two swatches at one rank: a gold pin against "Georgetown, Texas",
and the United States filled in `--color-anywhere-tint` with Texas picked out inside it in
`--color-surface` — which is `--color-georgetown-tint` by token alias, so the state is the same peach in
both drawings and the country is the GT Anywhere door's own blue. That is the inversion I asked for,
delivered in a different place: not as an inset inside the frame but as the legend entry beside it. I
had asked for it inside the drawing and I accept the substitution, because a key is where a reader goes
to learn what a mark means, and putting the country there gives the two halves of the sentence equal
billing in the one place on the page whose job is to say what the picture means. At iter0 I counted five
devices locating Georgetown and three near-invisible rings for GT Anywhere. The count now is: inside the
frame, a filled state and a pin against three rings at 3.63:1; in the key, one pin and one filled
continent. The ledger is no longer one-sided.

**What is left is not a contradiction, it is a proportion.** Look at `V16.jpg` and ask what the eye lands
on: a filled peach Texas with a dot in it, 445 × 314, at the left of the first screen. The ink that says
"anywhere" is either a hairline or a 160px swatch outside the frame. And the reason is one line of
geometry the engineer names honestly: the rings are centred on the pin and the pin is centred in the
frame, so the arcs are symmetric about the picture's own centre, which is what makes concentric circles
read as radial in the first place. The residue paragraph is accurate, but it understates the freedom
available: the window it describes is √2 only for a *square* frame; for this 142/100 frame the ratio of
the corner distance (305.8) to the half-height (176.05) is **1.74**, which is why the radii could open to
190/235/290 at all. And the composition has one free variable it has not spent — the crop's anchor.
`xMidYMid` centres Georgetown. `xMinYMid`, or a viewBox offset, would put the pin a third of the way in,
and the identical circles would stop reading as a target and start reading as a wave crossing the
picture, with the ink weight moving off the campus without moving a single path. That is the change from
4 to 5, and it costs one attribute.

| Rubric row | Score 1 to 5 | Evidence you looked at (screenshot filename, crop, measurement) | What would make it a 5 |
|---|---|---|---|
| Objective (L1) | **5** | Both things holding this at 4 are fixed and I re-measured both. **The pair is one object at the moment of choice**: my probe puts the two door controls at **53.5 / 53.5 at 320, 360 and 375** and **44 / 44 from 390 up** (iter0: 60.5 against 44), with `justify-self: stretch` below 700 so they are the same width too — `V2.jpg`, `V1.jpg`, `crop-doors-375.jpg` show two identical boxes where iter0 showed two different ones. **And the map now carries both halves** (the ruling above). The ten-second test is met with room at both required widths: at 390 (`V9.jpg`) the doors are the first screen with CTAs at 550 and 781 of 844 and the compare sentence cut by the edge; at 1280 (`V14.jpg`) CTAs at 442 and 592 with the compare anchor at 649 of 696; at 1440 (`V16.jpg`) 481 and 640 with the anchor at 706 of 876. Nineteen of nineteen fold rows pass; the binding row V2 is 593 of 605, and 12px of that is spent on control parity by choice. The escape hatch is one always-visible sentence, never a control (C45 avoided). The four door cards carry the GT mark, so the choice is redundant on label, name, tint **and** mark — which is what survives forced colours, where the tints flatten to Canvas (`forced-colors.jpg`) | Holds |
| Composition | **4** | **The defect I named is fixed and the number is exact.** My probe at 1440: `.map-fig` right edge **821.3**, `.locations` right edge **821.3** — one edge, where iter0 had map ink at ~612, the caption's underline at ~578 and the rule at 821.3. The key's last text ink lands at 814.4, 6.9px inside. The map now fills its column (445.3 × 313.6) instead of sitting 89px short of it, because the 700px cap that existed only to hold SVG type is gone with the SVG type. At 1280 the same pair is 728.0 / 728.0. The compare sentence still ends at 578.5; I accept the argument that a line of prose at `--measure-prose` ends where it ends — I asked for the module to have one right edge, not for a text line to be justified to it. The laptop grid is coherent in `V16.jpg` and `V17.jpg`: map+key row 1 columns 1–7, doors row 1 columns 8–13, caption row 2, Locations row 3, door lines spanning rows 2–3. Two things hold it off 5, both inside the key. (a) **The key changes shape at V15.** The 1180–1399 band gives the key a 17rem column and a 7.5rem glyph, which leaves 144px for the label: "Georgetown, Texas" is 130px and stays inline, "online from anywhere" is ~145px and **wraps under its swatch**. `qa/measurements.md`'s own clearance table shows it — at V15 "online from anywhere" is 24px from the map box while "Georgetown, Texas" is 152 — and `V15.jpg` shows the two key rows in two different arrangements. At V14 the same two strings clear by under a pixel, so a half-pixel of the `--text-sm` clamp decides the layout. (b) **The pin swatch's box is 160px holding a 20px dot** (`crop-map-1440.jpg`, `V17.jpg`): the two key rows share a right edge, which is right, but one is a continent and one is a speck in a void, so the legend reads unfinished at the widths where it is largest | One number for (a): widen the key column (17rem → 18rem) or narrow the glyph in the 1180–1399 band, so both key rows keep one arrangement at all nineteen rows. For (b), give the pin swatch a box proportionate to its ink — a short scale-bar, a fragment of land under the dot, or simply a smaller box — so the two legend entries carry comparable weight |
| Typography | **5** | **The one defect is gone at the root, not patched.** Both map labels are HTML `<span>`s in the figure's `<figcaption>`, so no viewport transform reaches them. My probe at seven rows: `document.querySelectorAll('svg text').length` is **0** at 320, 360, 375, 390, 1024, 1440 and 1920, and the two labels measure **14.00, 14.00, 14.01, 14.03, 14.62, 15.00 and 15.00px** — against iter0's 11.07 to 15.62 with five rows under the floor and one over the ceiling. The independence is provable rather than asserted: across the same rows the map's own scale swings **0.544 to 1.664** (a factor of 3.06) and the type does not move with it. `qa/measurements.md` prints both columns side by side, and `qa/M10-measure.mjs:184` now computes the summary from the measurements and would report `fontSize × screenCTM` for any `<text>` left in an SVG, so the defect cannot recur silently. Everything the contract owns is unchanged and right — h1 Literata 400 on the clamp, door names `--text-xl`, prose at 1.5, labels 500 uppercase at 0.08em, buttons and figures Inconsolata 600 (`crop-proof-1440.jpg`, `crop-steps-1440.jpg`, `crop-table-1440.jpg`) — and the key labels are the brief's own spec, Inter Tight 500 at `--text-sm`, just not inside the SVG. The h1's hard rag is still in the captures (my probe at 375: line widths 297, 264, 232, **204**, 248, 224, 207 in a 327px measure) but its cause is the shared non-breaking pairs every mock carries, which I ruled at iter0 is not this direction's | Holds. The rag is a shared-convention item for the contract, not for M10 |
| Imagery | **4** | Scored on the diagram (the brief's Imagery row is "diagrammatic; no photograph in either state"; three `<img>`, all marks). The full ruling is above. In summary: **0 closed rings at any row, four edges crossed by the set at 19 of 19**, re-derived by me from the geometry and matching `qa/measurements.md` to a tenth; the solid ring is open across 44.4° at each pole, visible in `V11.jpg`, `V12.jpg`, `crop-map-390.jpg` and `crop-map-1440.jpg`; the country is **filled** in the GT Anywhere tint with Texas picked out inside it and stands in the key as the swatch for "online from anywhere"; the rings read as ink now they are at 3.63:1 instead of 1.21 to 1.87. Two compositions became one, which removes the C43 hit both critics recorded and removes the thing the two drawings could disagree about. The provenance is unchanged from the build I reproduced end to end from primary sources at iter0 — same paths, same `translate`, same derived pin — and the forced-colours rendering remains the best in the slate (`forced-colors.jpg`): every fill and stroke restated on a system ground, rings separated by dash and width. What holds it at 4: the drawing is still composed around the campus. `xMidYMid` centres Georgetown in the frame, so the arcs are symmetric about the picture's centre and the filled state with a dot in it is what the eye lands on in `V16.jpg`; the ink that says "anywhere" is a hairline inside the frame and a 160px swatch outside it | Move the crop's anchor. `preserveAspectRatio="xMinYMid slice"`, or a viewBox offset that puts the pin about a third of the way in, turns the same circles from a target into a wave crossing the picture and moves the composition's weight off the campus without touching a path. No new geometry, one attribute |
| Colour and surface | **5** | **Both faults are fixed at the source and I verified the numbers myself.** My probe reads the ring stroke as `rgb(133, 127, 123)` = `--color-border-strong`, full opacity, widths **1.5 / 1.25 / 1.25** with dashes `10 7` and `3 7` — the alpha ramp is gone and so is the stroke-weight compensation, which is the substance of ruling 5. I recomputed the ratios rather than reading them: #857f7b on `--color-bg` is **3.633:1** and on the land fill **3.307:1**, matching the rationale's 3.63 and 3.31 to 0.01, so the labelled graphical objects that carry half the thesis now clear 1.4.11. The pin: fill `--color-accent`, stroke `--color-text` at 1px; I compute the dark edge on the gold at **7.49:1** against the programme's published 7.43 (K12 F92) and 16.10 on the land, so the boundary of the mark — the thing that makes it a mark — passes, and the gold is a cue rather than the whole signal. The pin's own 2.17 and 2.38 are now stated in the rationale's contrast table, which was the omission I named. Zero raw hex (my re-run: 0). The forced-colours block is last in source order and restates the land, the rings, the pin **and the key's country** (`forced-colors.jpg`). Status chip `--color-text` on `--color-surface`, navy footer, two tints, K3's two-colour ring on both straddling elements (`focus-footer-plate.jpg`, `focus-footer.jpg`) all unchanged and right. One change worth Nari seeing rather than scoring: **the first screen now carries four orange objects, not one** — the header lockup, two 32px `gt-icon.svg` door marks and the pin (`V16.jpg`), because the mark I required is an all-`#E48B53` file. I rule this is not an accent-budget breach: K3 5f governs the accent *token* applied by a stylesheet, and `--color-accent` appears nowhere in `styles.css` for those marks; if a logo's own colour spent the budget, the header lockup would have spent it in every mock in the slate. But the pin is no longer the largest orange thing on the screen, and the sentence I wrote at iter0 — "the pin is the only accent use above the fold" — is no longer true | Holds |
| Motion | **5** | Unchanged and still correct. My re-grep: the only `transition`, `animation` or `@keyframes` token in 466 lines is `transition-duration: var(--duration-none)` inside the reduced-motion block (`styles.css:438`); the runner reports every computed duration 0s at V14 for elements and pseudo-elements; the one moving thing is the native anchor scroll, gated inside `prefers-reduced-motion: no-preference`. One `<script>`, the JSON-LD; zero `<form>`. V6 is still not built because D-039 is at its ceiling and the contract says a mock ships its no-JavaScript state until then; the page is complete at rest. **And the map still does not draw** — the temptation was larger this round, since the rings now visibly leave the frame and an expanding-ring draw would be the obvious flourish. That is exactly the broadcast-radius misreading this iteration exists to remove, and the rationale says so and declines | Holds |
| Mission (L3) and exclusivity (L4) | **5** | Unchanged. `check-claims.py` re-run by me: six figures, six register rows, all "Unverified, public". Selectivity is the bar and never the price: "selective" in the h1, the 90th-percentile bar in the proof strip, both Admissions cells and the steps intro (`crop-proof-1440.jpg`, `crop-steps-1440.jpg`, `crop-table-1440.jpg`), tuition a neutral cell with "Tuition on request. Ask admissions." at the same weight as "$10,400 a year". No crest, seal, countdown, scarcity phrase or wealth cue in any of the thirty-eight captures. No outcome figure, no accreditation claim, on the page or in the JSON-LD. The new ink makes no new claim: a filled United States under "online from anywhere" says exactly what the table's own cell says — "From home, anywhere in the United States." **And the discipline held where it cost most**: the Locations list still shows Georgetown alone because K12 OQ-3 is open (`crop-locations-390.jpg`), so the direction still declines to draw the three cities gt.school itself publishes, on the one page whose thesis would most benefit from them | Holds |
| Craft | **4** | Strong, and stronger than iter0 in the places I named. `check-mocks.py` **37 pass, 0 fail** on my run — including **R37**, which now diffs the rationale's pasted fold figures against the live run, so the stale-paste class of defect is machine-caught rather than critic-caught. **Both disclosed regressions are closed and I verified both independently.** The doubled root at 375: my probe reads `scrollWidth` 375 against `clientWidth` **375** (the engineer reports it broke to 419 when the icon strip went in), and `V2-rootx2.jpg` shows it. The V16 false floor: `qa/fold.md` records content reaching **877 of 900**, and the comparison band's hairline is visible crossing the bottom of `V16.jpg` inside the reserved 24px — no false floor. Elsewhere: zero `vh` (one `svh` inside `@supports`), console clean, no horizontal scroll at 320 (`V18.jpg`), six external hosts all gt.school. The runner now measures mark geometry itself — 27px at 390, 32px at 1440, 0% aspect skew on all fourteen samples — and lists every interactive target under 44px, where only the skip link (40 to 42.5) and inline sentence links appear, all above the 24px floor and **no door CTA under 44**. Focus is right in all four captures. Three faults. (a) **The V15 key wrap**, scored in Composition and a craft fault as well: a layout that flips on half a pixel of a type clamp will flip again. (b) **The door cards stand 157.1 against 131.8 at 320** (my probe), because "Georgetown Campus" wraps and "GT Anywhere" does not. Disclosed in the rationale and argued — the controls are identical, and forcing card parity there would spend V2 fold slack to hide a fixed-copy artefact. I accept the argument; it is still a visible inequality in one row. (c) The h1 rag, shared-convention, unchanged. One measurement gap behind (b): the controls' heights are published in the rationale's own table but **not in the runner's output**, and the runner's target table only catches *under* 44, not *unequal*, so the exact defect I found at iter0 would still pass a clean run today | Fix (a). Then put the two door controls' heights into `qa/fold.md` as a measured pair rather than into the rationale's prose, so inequality is a runner finding and not a critic finding. Card parity at 320 can stay reported rather than forced — that reasoning is sound |
| Continuity (L2) | **5** | **The evidence the row actually asks for is now filed, and it is the first in the programme.** `qa/continuity-1440.jpg` and `qa/continuity-390.jpg` put this mock's first screen beside the repository's own mirror captures of anywhere.gt.school at the same two widths, composed by the harness, with no production host opened — which is exactly the fix I named. And the pair argues better than the prose did: the estate's grained cream sits behind a photographic cut-out and fine wave linework, and this page answers with fine linework of its own on the same cream, which is the closest the slate has come to the estate's hero idiom without a photograph. Against `CONTINUITY.md`'s measured table: page ground `rgb(252, 244, 239)`, body `rgb(0, 17, 23)`, Inter Tight body, Literata display, navy first-screen action with a near-white Inconsolata uppercase label — all matching; both marks the estate's own SVGs at **27px at 390 and 32px at 1440, 0% skew**, verified by the runner, so the mark defect this reference exposed in six mocks stays absent here. DD-46 (fill) and DD-47 (corner) settled above the mock and cited correctly. The open differences are each declared with a reason and none is the mock's to close: heading weight 400 and normal tracking are DD-38's *proposed working default*, which is compliance rather than departure under the critic rules; button weight 600 is blocked because `fonts.css` ships Inconsolata 400 and 600 only; button size 17–18 comes from the shared clamp. Astra's iter0 ask — carry Inconsolata into the footer navigation — is declined with a reason I accept (`--text-sm` Inter Tight reads better at seven items, and the network line belongs once, in the provenance, per G0.5 item 6). gt.school remains unmirrored and the rationale says the Georgetown handoff is unverified, which is the programme's limit, not this build's | Holds |

| Brief compliance | Departures from the brief, with the rationale's stated reason and whether you accept it | Avoid concepts present (CONCEPTS.md id) | Facts, ids, numbers or paths that do not exist where claimed | Verdict |
|---|---|---|---|---|
| Every brief section is built. Copy re-checked slot by slot against `copy.md` v1.1 sections 0 to 8: **no departure**, and the iteration added no words — the only non-slot string on the page is still the map's `aria-label`, flagged for Nari. Every layer-2 token named with its row; DD-38, DD-39, DD-45 and D-039 all cited as the brief's acceptance row requires (6, 7, 5 and 5 occurrences). Acceptance rows met: the "SVG text never overlaps land or rings" condition is now structural rather than positional, because there is no SVG text, and the harness measures the replacement condition anyway (smallest key-to-drawing gap 16.00px, smallest land-to-frame clearance 5.47px, positive at every row). No coming-soon item shown | **Nine, and the balance has shifted the right way.** **Withdrawn since iter0:** the no-door-mark departure (DD-04's cue set is built, `gt-icon.svg` at 32px in a left strip on all four cards, measured as a counterfactual at zero fold cost — my iter0 ruling 3 accepted in full) and the two-composition departure (one drawing, one frame). **Upheld:** doors first at 1180 not 1024; land outline `--color-text` not `--color-border`; Georgetown alone in the Locations list; no V6 reveal; the compare sentence as a `<p>`; the V10 h1 step-down; the `min-height` reserve. **New and accepted, both being the thesis fix:** the rings at `--color-border-strong` full opacity rather than the brief's three navy alphas, and the country moved from an inset inside the drawing to a filled swatch in the key. **New and accepted:** the two map labels as HTML rather than the brief's SVG `<text>` — the brief asks for a size and this is the only way to deliver it. **Not accepted as documented:** the compact-door threshold is `max-height: 780px`, where CONTRACT section 2 sets the rule at 700px tall. It is material — at V5 (414 × 715) the contract's recipe returns the lines to the cards and M10 keeps the compact form (`V5.jpg`) — and it appears only as the number "780" inside a list of geometry, never as a named departure. Astra asked for exactly this at iter0 and it did not land | **C43 is now avoided** — the hit both critics recorded at iter0 is gone. One drawing, one `xMidYMid slice` frame showing the same 500 × 352.1 band at every row: `qa/measurements.md` prints the identical frame and identical crossings from V1 to V19, so the phone and the laptop see one picture at two sizes rather than two drawings that had to agree. **C18 present in form and inverted in substance**, same ruling as iter0: the reorder below 1180 moves the *orientation* device off the phone's first screen and puts the *choice* there, which is the opposite of the avoided behaviour. **C26 adapted as the brief directs**; **C20 avoided** (a named row with a real link, never a chip or a menu); **C45 used** (the compare anchor lands on the first screen at every laptop row and the second on phones). C05, C12, C13, C29, C30-as-avoid, C33 to C36, C40 absent — sources line under both fact blocks, no urgency device, no overlay, one dominant real h1, two filled first-screen CTAs, nothing animates | **Two, both small, and the five I listed at iter0 are all corrected** (the label range, the rings "off the frame", the CTA wrap, the projection figure — now +6.4 north and −4.9 south, and equirectangular rather than plate carrée — and the stale `36 pass`). (1) **The map's `aria-label`** says "three rings widen from the pin and **run off every edge of the frame**." Measured, only ring 3 does; rings 1 and 2 leave the top and bottom. The harness's own summary is careful about this ("rows where the ring **set** leaves the frame on all four edges") and the stylesheet comment is exact; the alt text is the one place the distinction is dropped, and it is a string flagged for Nari. (2) **The 1180 departure's stated reason is stale.** It reads "At 1024 the seven-column map track is 547px wide, which forces either a letterboxed drawing or SVG labels at 11px. 1180 is the first width where the seven columns hold the map at its rendered size." There are no SVG labels any more and the map no longer has a rendered size — it fills its column at 142/100 at any width, and at 1024 its labels would still be 14.62px. The breakpoint still looks right in `V13.jpg`, but the reason on file is the previous build's. Everything else I checked reproduces: figure 821.3 / Locations 821.3 / key ink 814.4, controls 53.5 / 53.5 and 44 / 44, cards 131.9 / 131.9 at 375 and 157.1 / 131.8 at 320, labels 14.00 to 15.00 with 0 SVG text, table 22 / 39 / 39, doubled root 375 of 375, 3.633:1 and 3.307:1 on the rings, ring 3's crossings to a tenth — all **my probe**, all exact | **Pass.** All nine rows at or above 4: Objective 5, Composition 4, Typography 5, Imagery 4, Colour and surface 5, Motion 5, Mission 5, Craft 4, Continuity 5 |

## Required fixes, in order of impact

None of these blocks the pass. They are what stands between this mock and a card with no 4 on it.

1. **Move the crop's anchor so Georgetown is not the frame's centre (Imagery).** The rings are open, the
   country is filled, and the argument now holds — but `preserveAspectRatio="xMidYMid slice"` centres the
   pin, so the arcs stay symmetric about the picture's own centre and the composition's weight stays on
   the campus (`V16.jpg`, `crop-map-1440.jpg`). `xMinYMid`, or a viewBox offset that puts the pin about a
   third of the way in, converts the same three circles from a target into a wave crossing the frame. One
   attribute, no new geometry, and it is the difference between a picture that carries its caption and a
   picture that makes it.
2. **Give the key one arrangement at every row (Composition, Craft).** In the 1180–1399 band the 17rem
   column leaves 144px beside a 7.5rem swatch, so "online from anywhere" (~145px) wraps under its glyph
   while "Georgetown, Texas" (130px) does not: `V15.jpg` shows the two legend rows in two different
   shapes, and `qa/measurements.md`'s clearance column records it as 24px against 152px. At V14 the same
   pair clears by under a pixel. Widen the column to 18rem, or narrow the swatch in that band.
3. **Name the 780px compact-door threshold as a departure (Brief compliance).** CONTRACT section 2 sets
   the compact-door rule at 700px tall; this build compacts from 780px tall, which changes the built form
   at V5 and V8 against the contract's own recipe (`V5.jpg`, `V8.jpg`). Today "780" appears only inside
   the geometry list. Astra asked for this at iter0. It is one row in Departures with the reason, not a
   code change — unless the reason turns out to be "the contract's number is wrong", in which case it is a
   note for the contract.
4. **Correct the `aria-label` and the 1180 reason (documentation).** The label should say what the harness
   says: the rings widen off the frame and the outermost leaves it on every edge. The 1180 departure needs
   its current reason, which is compositional — a 547px map beside a five-column door stack is cramped, and
   `V13.jpg` shows the stacked form is the better answer — not the typographic one, which the HTML labels
   retired.
5. **Balance the two key swatches (Composition).** At 1400 and above the pin's box is 160px around a 20px
   dot while the country fills its own 160px (`V17.jpg`, `crop-map-1440.jpg`). The right edges align, which
   is correct; the weights do not, which reads unfinished at the widths where the legend is largest.
6. **Put the two door controls' heights into `qa/fold.md` (Craft).** They are measured and published, but
   in the rationale's prose. The runner's target table catches a control *under* 44 and would not have
   caught 60.5 against 44, which is the defect this iteration fixed. One column, and it cannot come back.
7. **Generate the overlap sentence (Craft, Astra's iter0 point).** `qa/M10-measure.mjs:184` and `:200`
   compute their summaries from the measurements; `:214` still hard-codes "Zero overlapping pairs at any
   row" beside a computed minimum gap. The computed 16.00px entails it today, so this is a principle rather
   than a defect — but it is the one assertion in the harness output that cannot falsify itself.

## The ruling asked for: the pin, the register, and the escalation

**Upheld. The engineer is right, the instrument I named was the wrong one, and the ambiguity was mine.**

`0_plan/12-claims-register.md` states its own scope in its first row: "Every number, percentage,
multiplier, price, date and superlative that **may appear on any GT surface**, ad or structured-data
field, with its source and its approved wording", checked by `check-claims.py`, which fails a build when
a *page* carries a figure with no approved row. A contrast ratio never appears on the page. Opening a
row there would have put a measurement into a register of publishable claims and would have made
`check-claims.py` responsible for something it does not check. That is a category error and the refusal
is correct.

It is also correct about the instrument that *is* right. The question behind my fix — may a 10px gold
dot carry a labelled datum on a map — is a design ruling, it sits beside RF-37 and DD-39, and those live
in `0_plan/07-design-decisions.md`, which a mock build does not author: a DD row needs both models'
cells, a verdict and two cross-checks under `12-register-loop.md`, none of which a builder can supply
alone. Escalating with the alternative stated in one line ("drop the accent and draw the pin in
`--color-text`") is what the process asks for.

And it removed the premise before escalating, which is the part I care about most. My fix said "the sole
carrier of a labelled datum". The dot now has a `--color-text` edge at 7.43:1 against the gold and
16.10:1 against the land, so the boundary of the mark passes 1.4.11 and the gold is a cue. There is no
longer a defect awaiting a ruling; there is a preference awaiting one.

Where I hold the line: an escalation without an id is a paragraph, and this programme tracks rows.
`0_plan/03` is full of `Q-nnn` rows raised by exactly this route, and the operating model's own Unknowns
rule says to add one and proceed on the recommendation. The flag should carry a `Q-nnn` so it survives
past this file. That is a note for whoever owns `07`, not a defect in the mock, and not a reason to hold
any row below 4.

Reading my own iter0 sentence back: I wrote "take it to the register" one clause after citing RF-37, and
in a programme whose hard rules define "the register" as the claims register, the engineer read it the
way the rules read it. I should have written "open a DD row". The finding was right and the instrument
was wrong, and defending the instrument now would be the wrong kind of consistency.

## My iter0 required fixes, one by one

| # | The fix I required | Landed? | On what evidence |
|---|---|---|---|
| 1 | **Rings: contrast, not weight.** Run the forced-colours treatment in the default theme at `--color-border-strong`; state the pin's 2.17:1; take the pin to the register | **Landed**, with the register half correctly refused | My probe reads the ring stroke as `rgb(133, 127, 123)` at full opacity, widths 1.5 / 1.25 / 1.25, dashes `10 7` and `3 7`. I recomputed 3.633:1 on the ground and 3.307:1 on the land. The alpha ramp and the weight compensation are both gone. The pin's 2.17 and 2.38 are in the rationale's contrast table, and the pin now takes a `--color-text` edge. The register refusal is ruled on above and upheld |
| 2 | **Labels out of the SVG**; correct the three sentences; teach the harness `fontSize × screenCTM` | **Landed in full** | 0 SVG `<text>` at every row I probed; 14.00 / 14.00 / 14.01 / 14.03 / 14.62 / 15.00 / 15.00px at 320 to 1920 while the map's scale swings 0.544 to 1.664. Harness summary computed at `M10-measure.mjs:184`. The three sentences are corrected in place |
| 3 | **Make the map argue GT Anywhere**: invert the inset's fill; let the rings leave the frame in both compositions | **Landed, by a different route I accept** | The country is filled `--color-anywhere-tint` with Texas picked out, and moved from an inset to the key's swatch — not the placement I specified, but the same inversion at better rank. The rings: 0 closed at any row, the set crossing four edges at 19 of 19, re-derived by me. "Both compositions" is moot — there is now one. `crop-map-1440.jpg`, `crop-map-390.jpg` |
| 4 | **Add the door mark**, `gt-icon.svg` at 32px in M01's placement | **Landed in full** | On all four door cards (`index.html:107, 114, 213, 219`), visible in every capture from `V1.jpg` to `V17.jpg`, and the fold did not move — V2's second CTA is 593 of 605 with the icon in place. The one consequence is the accent-density note in Colour and surface, which is mine to own |
| 5 | **Equalise the two controls at 320 to 375**; add the controls' heights to the measured table | **Partly landed** | Controls: my probe reads **53.5 / 53.5** at 320, 360 and 375 and 44 / 44 from 390 — fixed, and the cards follow at 131.9 / 131.9 at 375. Cards at 320 stand 157.1 against 131.8, disclosed and argued, and I accept the argument. The measured-table half is the gap: the heights are in the rationale's prose table, not in `qa/fold.md`, so the runner still cannot catch inequality (required fix 6) |
| 6 | **One right edge for the first-screen module** | **Landed in full** | My probe at 1440: figure 821.3, Locations rule 821.3, key ink 814.4. At 1280: 728.0 / 728.0 / 727.6. `V16.jpg`, `V17.jpg` |
| 7 | **Correct the four rationale statements and the stale `36 pass`; file the Continuity side-by-side** | **Landed in full** | All five corrections are in place and marked where they occur, and R37 now diffs the pasted fold table against the live run (37 pass, 0 fail on my re-run). `qa/continuity-390.jpg` and `qa/continuity-1440.jpg` exist, built from the repository's own mirror captures with no production host opened — the first mock in the programme to file the evidence this row asks for |

Also landed, from Astra's card rather than mine: the comparison table's **22 / 39 / 39** split (my probe
confirms; iter0 was 39 / 30.5 / 30.5), the clearance harness rewritten to measure the geometry the new
drawing actually has, and the C43 hit removed. Not landed from Astra's card: the 780px compact-door
threshold is still undocumented as a departure (required fix 3), the footer's utility typography is
declined with a reason I accept, and `M10-measure.mjs:214`'s success sentence is still hard-coded
(required fix 7).

## Two notes for Nari's review, not faults

- **The first screen has more orange than it did.** Adding the GT mark to both doors — which I required,
  and which is DD-04's first cue and the gated mock's own construction — puts two 32px `#E48B53` marks on
  the first screen beside the header lockup and the pin (`V16.jpg`). I rule it is not an accent-budget
  breach, because the colour comes from a logo file rather than from this stylesheet. It is still a visible
  change to the screen's colour weight and she should see it rather than read about it.
- **`qa/continuity-1440.jpg` is the most useful single image the programme has produced.** It answers the
  Continuity question by looking rather than arguing, it shows exactly where the estate's grained cream and
  photographic hero are not matched, and it shows this direction's own answer — fine linework on the same
  cream — sitting beside them. It is worth putting in front of her whatever direction wins.
