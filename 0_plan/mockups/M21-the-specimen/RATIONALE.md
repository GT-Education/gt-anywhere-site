# M21 "The Specimen", rationale

| Field | Value |
|---|---|
| Mock | M21 "The Specimen", brief `0_plan/kb/briefs/M21.md`, under `CONTRACT.md` v2.1 |
| Lens order | L4 exclusivity, L1 objective, L3 mission, L2 continuity |
| Source languages | Design Library (`~/projects/libraries/design`): `insp-lilium` "Specimen Brutalism" (primary), `insp-tsai2020` "Civic Hairline" (support). Composition, rhythm and structural devices only; no palette, no typeface (**DD-48** option a) |
| Built | 2026-09-11 by a Fable design-engineer fork; iterated the same day against both critics' round-one cards (`0_plan/ensemble/critic-fable-M21.md`, `critic-astra-M21.md`; see Iteration, last section). Measured with `node 0_plan/tools/shots.mjs` (the 19-row matrix, mark geometry, interactive target heights, forced colours, reduced motion, doubled root font) and with `qa/M21-measure.mjs`, written for this mock, which measures the h1 line count, **every drawn line class's clearance from the nearest ink at every row**, and every annotation's contrast against its own painted ground. No production host was opened; no browser tool other than these two harnesses |
| Files | `index.html`, `styles.css` (links `../shared/tokens-v2.css`, `../shared/fonts.css`), this file, `qa/` |
| State | No JavaScript (**D-039** escalated and undecided): one `<script>`, the JSON-LD block, and no `data-d039` declaration. The page is complete at rest. No photograph in either state |
| Claims on the page | 90th percentile (CR-011), $10,400 (CR-021), four in-person / intensive weekends (CR-032), 9 to noon and about two hours (CR-033), two to three hours (CR-034), weekly check-ins (CR-035). Every row is **"Unverified, public"** in `0_plan/12-claims-register.md`: allowed on a mock, blocked for production (REQ-022, DEL-018) |

## Direction

A selective school shows its work. Every other direction argues selectivity with a sentence; this one
argues it with the page's own construction. The sheet the page is set on is visible — 1px hairlines at
the twelve column positions, running the full height of the first screen behind everything — the fixed
sentence is marked as the specimen with four corner handles, as if selected on a canvas, and every part
carries a small technical annotation in the utility face. Rigor is not an adjective here; it is the
evidence that someone measured before they wrote (G0.5 items 1 and 5; K5 P2).

The first screen is `--color-bg`. A 56px header on the same ground with the construction grid running
through it; the umbrella sentence across eight of twelve columns inside its selection frame; the
provenance line; a dashed measure line carrying "Two ways to attend" with a dashed drop into the gutter
between the two doors; the two doors six and six, each a part hung from a hairline with its annotation,
its name and its call to action; the two door lines as captions under their doors; the compare sentence.
Below the first screen the chapters alternate hard between `--color-bg`, `--color-navy` and
`--color-surface` in strict rotation, with no gradient, no shared ground and a drawn rule at every
boundary: comparison on navy, proof on surface, admissions on the page ground, connect on navy,
families on surface, footer on the page ground.

The objective (L1) is served by both doors sitting in the same place at every one of the nineteen rows,
labelled twice — by format in the annotation and by full school name in Literata — with one navy control
each. Exclusivity (L4) is the construction: a page built on a visible grid, annotated in a monospace
utility face, with nothing decorative and no photograph, reads as a school that measures. Mission (L3)
is the deck's own facts and nothing else. Continuity (L2) is the estate's ground, faces, marks and
button case, measured against `shared/CONTINUITY.md` below.

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented
children, in person at our Georgetown, Texas campus or online from anywhere." It is the one sentence
that both decodes "GT" and names the two ways to attend, so it is also the object the sheet marks: the
four `--color-accent` corner handles are attached to it, and nothing else on the first screen carries
the accent. Literata at `--h1-weight` 400 (a local variable so DD-38's 300-against-400 test is one
edit), `--text-3xl` (27px at V1 to 46px at V16), `--leading-tight` 1.15, `max-width: min(35ch, eight
columns)`, `text-wrap: balance`. A no-break space between "from" and "anywhere." keeps the last line to
two words on the phone rows. On a phone held sideways (V10) the h1 steps down one token to `--text-xl`
across the full content width, per the contract's landscape recipe, and the door names step down with
it to `--text-md` so the hierarchy between the sentence and the two names survives that row.

"Two ways to attend" is the h2 of the first screen and is the measure line's own annotation; the two
door names are h3; every later chapter opens with an h2. One h1, no skipped levels.

**Measured line counts** (`qa/measurements.md`, per-line client rects, all nineteen rows):

| Rows | Width band | h1 size | Lines | h1 height |
|---|---|---|---|---|
| V1, V2, V3, V9 | 360 to 390 | 27.00 to 27.53px | **6** | 186 to 190px |
| V4 to V8 | 393 to 430 | 27.58 to 28.23px | **5** | 159 to 162px |
| V10 | 750 landscape, `--text-xl` | 24.17px | **2** | 56px |
| V11, V12 | 768, 834 | 34.18, 35.34px | **4** | 157, 163px |
| V13, V19 | 1024 | 38.68px | **5** | 222px |
| V14 to V17 | 1280 to 1920 | 43.19 to 46.00px | **4** | 199 to 212px |
| V18 | 320 reflow | 27.00px | **7** | 217px |

Below 768 the sentence carries one step of negative tracking, `-0.045em` (Departures, and the round-one
critique's "even the phone rag"). The step is not a taste: **it is the smallest value that brings the
132-character sentence under Chrome's six-line ceiling for `text-wrap: balance` at 360**, the narrowest
phone row in the matrix. Above six lines Chrome stops balancing and falls back to a greedy wrap, which
is what put a 171px line between a 297px and a 248px one at 375. The counts above are the result: 6 at
360 to 390, 5 at 393 to 430, 2 at V10. From 768 up the tracking is normal and the counts are unchanged
from the first build. V18 at 320 is still seven lines and still greedily wrapped; it is the reflow row.
The fold sums below are built on the measured counts, not on the contract's 23-characters-a-line
estimate.

## What was borrowed, and what was deliberately not

### From `insp-lilium`, "Specimen Brutalism" (primary)

| Device in the source | How it is used here |
|---|---|
| "Lay a construction grid of 1px hairlines across every scene" | 1px hairlines at the twelve column positions from 1024, at two columns from 768 to 1023, and two margin rules below 768, running the full height of every chapter behind everything, drawn at one measured ratio (3.1:1) on all three grounds |
| "Mark the hero object with small square corner handles as if it were selected on a canvas" | The h1 sits in a selection frame with a 6px `--color-accent` square and a 14px hairline bracket at each of its four corners. This is the first screen's one accent use |
| "Thin dashed measure lines" | The dashed rule that carries "Two ways to attend" across the sheet, and the dashed drop that falls from its centre into the gutter between the two doors. Measure lines are dashed; construction lines are solid; they are different classes of line and are drawn differently, which is the drafting convention the source is quoting |
| "8 to 9px uppercase monospace annotations in the margins" | Inconsolata 600 at 10px, uppercase, 0.08em tracking, in `--color-text-muted` on light and `--color-text-muted-on-dark` on navy. 10px, not 8 to 9, because the brief sets 10px as the floor |
| "Full-bleed scenes alternate hard between grounds, never blended" | Seven chapters rotating `--color-bg`, `--color-navy`, `--color-surface` with a drawn rule at every boundary and no gradient anywhere |
| A registration mark on the sheet | A 12px hairline cross at a corner of the first sheet that the specimen's own handles are not in: the top right from 1024, where the frame is eight of twelve columns and four columns clear of the sheet's right edge, and the bottom right under 1024, where the frame reaches the column edge and its top-right handle takes that corner |

**Deliberately not borrowed, each as a decision rather than an omission:**

| Not borrowed | Why |
|---|---|
| The collided 90 to 180px display type, set so words overlap and run off the frame | The fixed sentence is 132 characters and must stay legible and inside the fold at 375 by 629. Colliding it would break both. `--text-3xl` caps at 46px and the brief forbids display type above it |
| The red-black-paper palette (`#F4EDF2`, `#000000`, `#D91C2A`) and the cyan sample tiles | GT's ground, surfaces, navy and accent are fixed by K12's "what never changes" list and `tokens-v2.css`. A mock in a borrowed palette fails its own Continuity row by construction (DD-48) |
| Archivo Black and JetBrains Mono | Literata, Inter Tight and Inconsolata are what both destination sites serve. The annotation voice is Inconsolata, which is also the estate's own utility face (K12) |
| The dither matrix, the hairline X-ray and the photo-in-letterform mask | All three are treatments of a photograph, and this direction ships no photograph (below). A dither of nothing is decoration |
| The glitch slicing and the strobe cut | Motion. The source cuts every 0.5 to 0.9 seconds, which is a film's rhythm, not a page's. The hard cut is borrowed as a *spatial* device — the boundary between chapters — never a temporal one |
| The source's horizontal grid lines (`background-size: 100% 34px`) | A baseline grid crosses every glyph on the page. This mock's acceptance row forbids the grid crossing a glyph, so the construction grid is vertical only |

### From `insp-tsai2020`, "Civic Hairline" (support)

| Device in the source | How it is used here |
|---|---|
| "Everything drawn with 1 to 1.5px hairlines — no fills, no shadows" | Every drawn thing on the page is a 1px line: the grid, the margin rules, the measure lines, the chapter boundaries, the door rules, the table rules, the fact and step rules, the two door glyphs. `--shadow-1` and `--shadow-2` are not used; the only `box-shadow` on the page is a flat ground-coloured spread that knocks the grid out behind type, and the focus ring's outer band |
| "Label pairs at roughly a 3:1 size ratio" | Each door is a 10px monospace annotation over a Literata name at 22 to 28px: **2.2:1 at V2, 2.8:1 at V16**. Each chapter is a 10px annotation over a 24 to 34px Literata title: **2.4:1 to 3.4:1**. The pair, not the ratio, is the borrowed device; the sizes are GT's own scale |

**Deliberately not borrowed:** the two greens and the yellow dot; the orbital rings, constellation graph,
terrain-as-data and equalizer skyline (four diagram forms with no fact on this page to carry them — a
diagram drawn without data is the decoration this direction argues against); the continuous low-amplitude
drift and the 0.47s draw-in (motion, see Motion spec); the bilingual half of the label pair, since there
is one language on this page.

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id, name, lens order | M21, folder `M21-the-specimen`; L4, L1, L3, L2 | Met |
| Source language | Both languages read in `library-data.js` and `examples/larkspur.html` before any code; borrowings and refusals tabulated above; no code copied, no palette, no face | Met |
| What is deliberately not borrowed | Six refusals from `insp-lilium` and five from `insp-tsai2020`, each with its reason | Met |
| Thesis | The page is a specimen sheet: the grid it is built on is visible at every row, the fixed sentence is marked as the specimen, and every part carries a technical annotation | Met |
| Exemplars | `~/projects/libraries/design/examples/larkspur.html`, read whole, for the language as a page: the selection stage, the margin annotations, the hard-cut grounds. In this repository, `0_plan/kb/exemplars/collins-1440-full.jpg`, looked at with the Read tool: its Programs section is a small uppercase eyebrow, a serif statement, then four rows divided by hairlines with a name at the left and a short line at the right, and it closes on a hard cut to a near-black ground. That is the form of this page's comparison, proof, steps and connect chapters — ruled rows, no cards, no fills — and of its chapter boundaries. `0_plan/kb/exemplars/exeter-1440-full.jpg` for the labelled figure (the labelled figures are in the full-page capture; `exeter-1440.jpg` is its hero alone): the door here is a labelled part, annotation over name over control. Avoided: `0_plan/kb/exemplars/nord-anglia-1440-full.jpg`'s four identical calls to action (C22) — this page has two door CTAs on the first screen, the same two once after the table, two application links in the steps and four text links in Connect, every one labelled by its destination | Met |
| Composition | Header 56 on `--color-bg`; the construction grid at twelve columns from 1024, two from 768 to 1023, and two margin rules below 768, full height behind everything; h1 across eight columns with four 6px `--color-accent` corner handles; provenance below it; doors six and six with a dashed measure line carrying "Two ways to attend"; margin annotations in `--font-mono` 10px uppercase `--color-text-muted` tracked 0.08em; chapters alternating hard between the three grounds with a hard edge at every boundary | Met, with two departures named below (the specimen number; the door's fold-position annotation) |
| Typography | Contract roles exactly. Annotations `--font-mono` at 10px, never smaller, always `--color-text-muted` on light or `--color-text-muted-on-dark` on navy. No display type above `--text-3xl` | Met |
| Colour and surface | `--color-bg` first screen; grounds rotate to `--color-navy` and `--color-surface`; the grid is a hairline specified as a **ratio** rather than as a token, 3.10 to 3.12:1 on all three grounds (mixed from `--color-border-strong` on light, `--color-border` on navy), so the brief's "never below 3:1 on navy" is met on navy and matched on the other two; the corner handles the one `--color-accent` use on the first screen; focus per contract, two-colour ring on navy | Met, measured below |
| Imagery | The school marks only, **all three eager** (no `loading="lazy"` anywhere), sized by height to K12 V2 (28px at 390, 32px at 1440, aspect skew 0% on all three files in the runner's own table). **No photograph in either state** | Met, measured |
| Motion | Still. No `transition`, no `@keyframes`. V1 and V3 instant; V10 native anchor scroll under `no-preference` only; reduced motion zeroes every duration | Met |
| Copy | `copy.md` sections 0 to 8 verbatim. From section 9: the schematic labels "In person" and "Online" reused on the doors, and the skip-link label. Allowed headings: "Two ways to attend" (section 1), "Compare the two schools", "What is true of both schools", "How to apply", "Questions before you apply", "Already a GT family?"; eyebrow labels "Compare", "Proof", "Admissions", "Connect", "Families". **No specimen number** (departure, below) | Met but for the specimen number |
| Conversion | Doors on the first screen at all nineteen rows; compare anchor under the doors and before the table (checker R19); comparison table with repeated values (DD-43); proof; steps; secondary CTAs; current families; footer | Met |
| Acceptance: the grid is visible at every row and never crosses a glyph, clearance reported | **0 crossings at all nineteen rows, for every drawn line class and not the grid alone. Smallest clearance 7.80px** (V13 and V19, "In person" against a column line); 15.00px at the other seventeen rows (a glyph to a margin rule). Visible lines per row: 16 below 768, 23 to 24 at 768 to 834, 65 to 70 from 1024 | Met, measured |
| Acceptance: annotations at or above 4.5:1 against their ground | Lowest measured **5.69:1** (`--color-text-muted` on `--color-surface`); 6.25:1 on `--color-bg`; 7.81:1 on `--color-navy` | Met, measured |
| Acceptance: rationale names DD-38, DD-39, DD-47, DD-48 and D-039 | All five named, with DD-04, DD-06, DD-12, DD-14, DD-19, DD-21, DD-42, DD-43, DD-44, DD-46, MD-25, MN-16, RF-07, RF-25, RF-37, RF-53, RF-55, RF-58 | Met |
| Acceptance: both critics at or above 4, Exclusivity and Composition expected at 5 | Pending the critics | Pending |

## Fold: designed to, then measured

Method: the contract's, with the h1 height taken from the measured line count at `--leading-tight`
rather than from the 23-characters-a-line estimate; gaps are the space tokens in `styles.css`; the
compact door block is read off the CSS as top rule 1 + padding + annotation row 16 (the row is 16px
because the door glyph is 16px) + 4 + name at `--text-xl` × 1.15 + 8 + CTA 44. The header is 57 (56px
row plus its 1px rule) except at 360 and 375 wide, where the two utility links wrap below the mark and
it is 93. Runner figures are from the run pasted in Self-check; **paste and runner are the same run**
(checker R37).

| Row | Viewport, limit | Layout | Estimate, to the second CTA's bottom | Measured | Spare |
|---|---|---|---|---|---|
| **V2** | 375 by 629, **605** | Phone, short-height rhythm, doors stacked, lines below both CTAs | 93 + 8 + h1 6 lines 188 + 8 + provenance 18 + 8 + measure 13 + 8 + door 102 + 8 + door 102 = **556** | **556** | 49 |
| **V5** | 414 by 715, **691** | Phone, standard rhythm, doors stacked | 57 + 24 + h1 5 lines 161 + 16 + 18 + 24 + 13 + 16 + door 107 + 16 + door 107 = **559** | **557** | 134 |
| **V14** | 1280 by 720, **696** | Laptop, doors six and six | 57 + 32 + h1 4 lines 199 + 16 + 19 + 24 + 13 + 16 + door 112 = **488** | **487** | 209 |
| **V16** | 1440 by 900, **876** | Laptop, doors six and six | 57 + 32 + h1 4 lines 212 + 16 + 19 + 24 + 13 + 16 + door 113 = **502** | **501** | 375 |
| V10 | 750 by 342, **318** | Landscape recipe: `--space-3` padding, h1 at `--text-xl`, doors side by side, names at `--text-md` | 57 + 8 + h1 2 lines 56 + 8 + 18 + 8 + 13 + 8 + door 99 = **275** | **274** | 44 |

Every other fold row, measured (second CTA bottom against the limit): V1 618 of 716; V3 522 of 640;
V4 491 of 635; V6 557 of 815; V7 492 of 657; V8 559 of 715; V11 442 of 1000; V12 447 of 1170;
V13 509 of 744; V15 435 of 624; V17 501 of 936. V9 (emptiness) 586 of 844, page height 6000.
V18 (reflow) no horizontal scroll at 320. V19 (zoom) reported, scroll width 1024, nothing clipped.
**Sixteen of sixteen fold rows pass, V10 included.** The phone rows gained 31 to 32px against the first
build because the tracked sentence sets one line shorter; nothing else in the first screen moved.

**What crosses the bottom edge, per row** (the runner's false-floor test, which counts text, images and
painted hairlines and never a container's fill). On every phone row it is a door line or the compare
sentence cut by the edge; at V13 and V14 it is the first screen's cream closing onto the navy comparison
chapter, a surface change the runner samples; at V16 and V17 it is the compare sentence and the chapter
rule. The full table is `qa/fold.md` "Next band evidence". V18 is the reflow row, where the fold rule
does not apply (DD-44).

**One row had to be re-earned.** With the sentence a line shorter, V6 (412 by 839) put the compare
sentence 27px clear of the bottom edge with only section padding below it, and the runner called a
false floor: the contract reserves the bottom 24px, and nothing reached into it. The first screen's
bottom padding is now `--space-5` rather than `--space-6`, one step less than a chapter's own, so the
hard edge onto the comparison chapter is never further below the last line than the reserved band. V6 now
reports "content reaches 839 of 839 and more follows below": the chapter boundary rule lands on the
bottom edge and the navy chapter runs on beneath it.

## The construction grid: how it is drawn and why it never crosses a glyph

The acceptance row asks for two things that pull against each other: the grid must be visible at every
row, and it must never cross a glyph. Three decisions make both true and measurable.

1. **The two margin rules live outside the content column.** They sit `--rail` (16px) beyond the
   column's left and right edges, so no block inside the column can ever cover them and no glyph can
   ever reach them. That is why the clearance floor is 15.00px (16px less the 1px line) at seventeen of
   the nineteen rows, and why the grid is still visible below 768, where the brief gives it only these
   two lines.
2. **The column lines are real elements on a real CSS grid**, not a background gradient:
   `repeat(var(--grid-cols), 1fr)` with a 32px `column-gap`, one hairline per column's left edge plus
   the last column's right edge — thirteen lines at twelve columns, three at two columns. A gradient
   would not be repainted under forced colours and could not be measured; both matter here. Because the
   line layer is the same twelve-column grid the doors use, door two's left edge sits exactly on the
   column-seven line, and the dashed measure drop sits sixteen pixels away in the middle of the gutter:
   the two line classes are visibly different things, which is the point.
3. **A part placed on the sheet occludes the lines under it**, the way a selected object occludes a
   canvas grid. Every text block carries its chapter's own ground colour plus a flat `0 0 0 0.2em`
   spread of the same colour. The spread is not decoration: Literata's font box stands proud of a 1.15
   line box by 0.17 to 0.18 em (measured: 8px at the 46px h1, 6px at the 34px h2, 5px at the 28px door
   name; CONTRACT.md section 3 now carries the figure for every direction), so without it a column line
   showed through the type. What overflows is the **font box**, not the ascender: measured ink stops
   about 10px inside the block at the top, and the ink that actually clears a block edge is the
   descender on its last line. The first build's self-check said "ascender" and was wrong about which
   end; the metric and the fix were right. The spread scales with the type and costs no layout.

The harness measures the result rather than asserting it: for every visible line it takes each rendered
text run's client rect, removes the runs the line is occluded behind at that x (occluders inflated by
their own measured shadow spread), and reports the crossings and the smallest horizontal gap.

| Measure | Result |
|---|---|
| Crossings of a glyph by a visible construction line, all nineteen rows | **0** |
| Smallest clearance, any row | **7.80px** (V13 and V19, the "In person" annotation against the column-three line) |
| Clearance at the other seventeen rows | **15.00px**, a glyph to a margin rule |
| Visible lines per row | 16 (below 768), 23 to 24 (768 to 834), 65 to 70 (1024 and above) |
| Corner handle to the nearest glyph | **2.13px** at V15, the bottom-left bracket against the descender of the h1's last line, measured against ink at all nineteen rows by the extended harness. The first build asserted 4px from a single row. To the nearest margin rule, 5px. The handle was moved 7px outside the frame after the V10 and V16 captures showed it striking the G of "GT School" and the T of "Texas" |

**Every drawn line class, not the grid alone.** The first build's harness tested `.rule-left`,
`.rule-right` and `.grid i`, so the page's other line classes were unmeasured — and the one that failed
was one of them: the dashed drop started *inside* the measure label at the two short-desktop rows,
because the height query pulled the doors up and left the drop's own offset behind. The harness now
inventories every rectangle the stylesheet paints, rebuilding pseudo-element boxes from their resolved
insets, and measures each against the **ink** rather than the font box, so Literata's 0.1675 em of
overhang is not counted as type (CONTRACT.md section 3). Full table in `qa/measurements.md`.

| Line class | Marks at the busiest row | Crossings, all 19 rows | Smallest clearance to ink | Where |
|---|---|---|---|---|
| margin rule | 16 | **0** | 15.00px | h1, V1 |
| column line | 104 | **0** | 7.80px | "In person", V13 |
| measure line (dashed) | 2 | **0** | 8.00px | "Two ways to attend", V1 |
| measure drop (dashed) | 2 | **0** | 3.39px | "Two ways to attend", V10 |
| corner handle | 12 | **0** | 2.13px | h1 last-line descender, V15 |
| registration cross | 1 | **0** | 23.82px | "Contact admissions", V11 |
| drawn rule | 51 | **0** | 6.67px | "In person", V2 |

What it found, in order: (1) the dashed drop, which is fixed below and now starts **3.39px under the
measure label's ink at every row that draws it**, the same figure at V10, V13, V15, V16 and V19,
because one custom property drives both the gap above the doors and the drop's rise into it; (2) the
corner handle's true floor, 2.13px against a descender rather than the 4px the first build asserted
from one row; (3) two defects in the harness itself rather than the page — the L-shaped handle was
being modelled as its bounding box, which overlaps the first line of the h1 at every row while none of
its ink does, and the stacked table's clipped `thead` was being counted as visible type, which is 57
crossings that no reader can see. Both are fixed in the runner, not papered over in the report.

**The line inks, measured against their own grounds.** Construction lines are quieter than drawn
structure by intent: a construction line is scaffolding, a rule is a statement.

| Line | On `--color-bg` | On `--color-surface` | On `--color-navy` | Target |
|---|---|---|---|---|
| Construction grid | **3.10:1** | **3.12:1** | **3.12:1** | 3.1:1 |
| Drawn rules: chapter boundaries, door rules, table, facts, steps, connect | **3.63:1** | **3.58:1** | **3.58:1** | 3.6:1 |

**Each class is specified as a ratio, not as a token.** The first build set the grid to `--color-border`
on light grounds and a mix on navy, and the result was 1.56:1 on `--color-bg`, 1.42:1 on
`--color-surface` and 3.27:1 on navy: the page's signature device was more than twice as present on
navy as on cream, so the scaffolding changed weight chapter to chapter. It now reads at one weight on
all three grounds, and so do the drawn rules, each mixed from the token that already carries its role:

| Ground | Grid ink | Rule ink |
|---|---|---|
| `--color-bg` | `color-mix(--color-border-strong 90%, --color-bg)` | `--color-border-strong`, unchanged |
| `--color-surface` | `color-mix(--color-border-strong 96%, --color-surface)` | `color-mix(--color-text 5%, --color-border-strong)` |
| `--color-navy` | `color-mix(--color-border 48%, --color-navy)` | `color-mix(--color-text-muted-on-dark 58%, --color-navy)` |

The uniform target is 3.1:1 rather than the 2.5:1 the critique suggested, because the **brief** sets a
floor of 3:1 for the grid on navy and a uniform value has to clear the highest floor any ground imposes.
The half-step between the two classes is kept: 3.1 against 3.6 on every ground, so a construction line
is still quieter than a drawn rule, which is the hierarchy this direction argues for. The cost is that
the grid on cream is now twice as present as it was at the first build; that is the intended direction
of travel, since the brief asks for a grid that is *visible at every row* and the critique found the
surface lines "at the edge of perception" (`qa/V16.jpg`, `qa/V14-full.jpg`).

## Annotation contrast, measured

Every annotation on the page, at V2 and V16, against the ground actually painted behind it:

| Element | Size | Colour | Ground | Ratio |
|---|---|---|---|---|
| `.anno` (sheet, door, chapter, table caption, stacked-cell labels) | 10px | `--color-text-muted` | `--color-bg` | **6.25:1** |
| `.anno` | 10px | `--color-text-muted` | `--color-surface` | **5.69:1** |
| `.anno` | 10px | `--color-text-muted-on-dark` | `--color-navy` | **7.81:1** |
| `.provenance` | 14 to 15px | `--color-text-muted` | `--color-bg` | 6.25:1 |
| `.sources` | 12 to 13px | `--color-text-muted` / on-dark | `--color-surface` / `--color-navy` | 5.69:1 / 7.81:1 |
| `.footer-facts` | 14 to 15px | `--color-text-muted` | `--color-bg` | 6.25:1 |

Lowest anywhere on the page: **5.69:1**, against a 4.5:1 requirement. Body text is `--color-text` at
17.69:1 on `--color-bg`, 16.10:1 on `--color-surface` and `--color-on-navy` at 14.58:1 on navy; the door
CTA is `--color-text` on the near-white fill at 18.57:1 on navy chapters and `--color-on-navy` on navy
fill at 14.58:1 on light ones.

## Decisions applied

| Id | How it is applied in this mock |
|---|---|
| **DD-48** | The Design Library supplies the grammar, GT supplies the words: composition, rhythm and structural devices borrowed; palette and faces untouched; both the borrowings and the refusals tabulated above so a reviewer can see the omissions were decided |
| **DD-38** (b), R5 | The fluid clamps `--text-xs` to `--text-3xl` and `--text-btn` carry every type size; `--h1-weight` exposes the 300-against-400 test as one edit |
| **DD-39** (a), RF-07 | `--color-on-navy` text and button fill on navy; `--color-text-muted-on-dark` for annotations, provenance-class strings and sources on navy; `--color-border-strong` as the base for both line inks on light grounds, each mixed to its measured ratio; the accent as a shape only |
| **DD-46** | The contract's surface-dependent button fill: `--color-navy` with `--color-on-navy` on every light ground (14.58:1), `--color-on-navy` with `--color-text` on navy (18.57:1). The estate's orange footer button is not copied, because K12 F87 measures its label at 2.50:1 |
| **DD-47** | A uniform `--radius-md` corner on all four sides of every button. The estate ships three different application-button constructions, and the one a parent clicks in its desktop header is the uniformly rounded one |
| **D-039** | Escalated and undecided, so this mock ships its no-JavaScript state only: no observer, no reveal, no router, no `data-d039` declaration. One `<script>`, the JSON-LD block. Nothing here assumes the decision goes either way |
| G0.5 items 1 to 6 | Umbrella sentence as the h1; no speed figure; no accreditation claim or Cognia mark; "Tuition on request. Ask admissions."; Guides everywhere; the provenance line exactly once (checker R18) |
| **DD-04** | Cue set per door: the format label ("In person", "Online") as the part annotation, a 1px-hairline glyph drawn for this mock (a doorway in plan; a screen), the full school name, and the CTA. The annotation *is* the label, set in the sheet's grammar in the margin position rather than above the name in Inter Tight — the contract allows a brief to keep the estate's Inconsolata utility face for labels and this one does, and says so |
| **DD-06**, REQ-013, R6 | A real `<table>` with a caption, `scope="col"` and `scope="row"`; shared rows first, then the rows that differ; stacked blocks below 768 with each cell labelled by its school in the annotation face |
| **DD-07**, MD-16 | No outcome figure, no accreditation statement; the proof chapter is the deck's four facts and the sources line |
| **DD-08**, **DD-31**, **DD-42** (a), RF-25, AD-11 | No photograph, and this direction has no photographed state to gate (below) |
| **DD-10**, **MD-25**, C06 | Selectivity is the stated bar, in the deck's own cells (comparison, proof, steps). Access is stated where the deck states it (the tuition row, the TEFA module). No wealth cue, no price on the first screen, no countdown |
| **DD-12**, DD-13 | Header: mark, "Current families", "Contact admissions". No menu, no phone number; the number is in the footer only |
| **DD-14**, MD-23 | Designed at 375 first; doors stacked Georgetown then GT Anywhere; no sticky CTA; the phone layout is the DOM order |
| **DD-19** | Every colour, face, size, space, radius and duration is a `var()`; zero raw hex in `styles.css`; the remaining bare lengths are geometry and are listed under Departures |
| **DD-21** | The doors are a `<ul>` and the door lines a `<ul>`; both become three to five entries by adding list items, and the grid column count is a single `repeat()` value. The construction grid is already an N-column system, so a third door is a column change, not a redesign |
| **DD-25**, REQ-070 | Every application link carries `?school=`; links go only to gt.school, anywhere.gt.school, apply.gt.school, community.gt.school and `#compare` |
| **DD-29** | Every chapter carries a fact: the doors and their lines on the first screen, the table, the four facts, the steps, the footer facts block |
| **DD-43** | The three shared comparison rows repeat their value in both columns |
| **DD-44**, K10 | The nineteen rows; no `vh` or `svh` anywhere on the page; the first screen is content-sized so the next chapter is visibly cut; height queries at 699 and at 400 with a 600 width |
| **MN-16** (a), **RF-53**, R8 | Nothing animates; the reduced-motion block zeroes every duration on elements and pseudo-elements; every state is visible at rest |
| **RF-37** | Gold is a shape colour: the four corner handles. It is never text |
| **RF-55**, **RF-58** | `--measure-prose` 65ch on every prose block; `--leading-prose` 1.5 on every multi-line string; `--leading-body` 1.25 on single-line labels, names and buttons |
| MD-02, R14, REQ-044 | Secondary CTAs: FAQ, "Talk to admissions", "Ask about a tour of the Georgetown campus", "Ask about a virtual info session", to the destinations the deck lists |
| MD-17, G0.5 item 6 | The provenance line once, under the h1, `--text-sm`, not repeated in the footer |
| K3 sections 5c to 5g | Text and rule contrasts measured above; one accent use per screen; focus per 5d; the forced-colours fallback per F38 as the **last block in the stylesheet** (the M07 lesson) |
| K12 V2, G4 | Horizontal marks 28px at 390 and 32px at 1440, aspect skew 0%, measured by the runner at both widths |
| REQ-022, DEL-018 | Only figures with a register row, in the deck's words; `check-claims.py` clean; the six rows are "Unverified, public", stated here and never on the page |
| REQ-024, R7 | The in-app browsers have no published viewport; rows V2 to V8 with the 24px headroom stand in |
| SE-13 | `noindex, nofollow`; canonical `https://gt.school/` |

### Layer-2 tokens used, with their rows (`TOKENS-V2.md`)

Every one is PROPOSED; the contract requires the row to be named.

| Token | Register row | Where |
|---|---|---|
| `--text-xs` to `--text-3xl`, `--text-btn` | **DD-38** (b), R5 | Every type size on the page. `--text-xl` is also the V10 h1 size and `--text-md` the V10 door name |
| `--leading-prose: 1.5` | **DD-38** (b), **RF-58** | Door lines, table cells, facts, steps, sources, TEFA body, footer facts, the compare sentence, the connect rows |
| `--measure-prose: 65ch` | **DD-38** (b), **RF-55** | Provenance, lede, sources, door lines, facts, steps, TEFA, footer facts |
| `--color-on-navy` | **DD-39** (a), **RF-07** | Text on navy; the button fill on navy chapters; the outer band of the two-colour focus ring |
| `--color-text-muted-on-dark` (#a3bfcb, a new tint) | **DD-39** (a), RF-07; **DD-19** departure | Annotations, sources and the table caption on navy; the navy rule ink is mixed from it |
| `--color-border-strong` (#857f7b, a new tint) | **DD-39** (a), RF-07; **DD-19** departure | Every drawn rule on a light ground (chapter boundaries, door rules, table rules, fact and step rules, the measure lines, the corner brackets, the registration mark), and the base the construction grid is mixed from on those grounds |
| `--color-focus-on-dark` | **DD-39** (a), RF-07 | The outer band of the two-colour ring on navy and on the GT Anywhere mark plate |
| `--duration-none` | **MN-16** (a), RF-53, R8 | The reduced-motion block |
| Not used | | `--color-accent-text` (no accent text anywhere), `--color-on-accent` (no accent fill carries text), `--ease-standard`, `--ease-out`, `--ease-in` (nothing moves) |

## Motion spec

| What | Element | Trigger | Duration | Easing | Reduced motion |
|---|---|---|---|---|---|
| Nothing animates | The stylesheet declares no `transition` property, no `@keyframes` and no `animation`. The word "transition" appears once, in the reduced-motion block | | | | The runner reports every computed transition and animation duration 0s at V14, elements and pseudo-elements included |
| V1 door state | Door CTAs and every link: underline on hover | hover | 0 ms, instant | none | Unchanged; the state is a text decoration, not a movement |
| V3 focus | 2px `--color-focus` at 2px offset on light grounds; K3's two-colour ring (2px `--color-navy` inner band, 4px `--color-focus-on-dark` outer band) on navy chapters and on the GT Anywhere mark plate; 3px `CanvasText` under forced colours | focus-visible | 0 ms | none | Unchanged, visible at rest |
| V10 anchor scroll | The `#compare` link | click | Native `scroll-behavior: smooth`, inside `prefers-reduced-motion: no-preference` only | browser | `scroll-behavior: auto` |
| V6 one-time reveal | Considered on the steps and connect chapters and **not shipped**: it needs the D-039 script, and the brief's Motion row is "Still" | | | | The page is complete at rest |
| The source's cut rhythm | Borrowed as a spatial device only: the hard boundary between chapters. Nothing cuts in time | | | | |

## Assets

| Asset | Where | Alt text | Consent and status | Fallback |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` (139 by 32) | Header lockup on a `--color-bg` knockout at 28px tall below 768 and 32px from 768; footer on a `--color-bg` plate at the same heights, linked to https://www.gt.school/ | "GT School" | GT's own mark, unchanged, on a light panel (`copy.md` section 8, checker R16) | none needed |
| `../shared/img/gt-anywhere-logo-h.svg` (252 by 48) | Footer, on a `--color-navy` plate at 28px below 768 and 32px from 768, linked to https://anywhere.gt.school/ | "GT Anywhere" | GT's own mark, white lettering on a navy panel (R16). The plate carries `forced-color-adjust: none` so the white lettering does not vanish onto a forced Canvas | none needed |
| Two inline hairline glyphs (a doorway in plan; a screen), `aria-hidden`, `currentColor`, 16px, 1px stroke | The two door annotations | decorative | Drawn for this mock; not brand marks, not recoloured marks | none needed |
| **Photographs** | **None, in either state** | | | The default state is the only state |

**Why there is no photograph, as a decision rather than an omission.** DD-42's default state already
forbids one until Nari's written permissions land, because every file in `ASSETS.md` shows identifiable
children (re-checked 2026-09-11) and AD-11 covers child imagery whether or not a face is visible. This
direction goes further and has no photographed state at all: its argument is that the page is measured,
and a photograph would be the one thing on it that is not — an unmeasured rectangle in the middle of a
sheet where every other element declares its size, its column and its clearance. So nothing here waits
on the permissions, and the mock Nari reviews is the mock that would ship.

## Departures

| Departure | Reason |
|---|---|
| **No specimen number on the page.** The brief asks for "a specimen number at the top left … number the specimen by the mock id (M21)" | Rule 5 of `BUILDER-BRIEF.md` admits only the deck's own figures on the page, and `check-mocks.py` R5 and `check-claims.py` both read "21" as a figure with no register row. Both checkers must be clean. The sheet is therefore marked with a wordless 12px registration cross at its top right corner, and the mock id lives in the folder name, this file and the runner's output, where a reviewer can check it. If Nari or Johnny wants the number on the page, it is one line plus one whitelist entry in `check-mocks.py`, and it should be decided rather than smuggled |
| **No numeric fold position beside each door.** The brief asks for "its label and its fold position" | Same rule: a fold position is a digit. The label is there, as the door's annotation. The fold position is *reported*, measured, for both doors at all nineteen rows, in the Fold table above and `qa/fold.md` — which is where a measurement about the design belongs, not on a page a parent reads |
| **No new wayfinding word.** "Specimen" itself is not in `copy.md` | `copy.md` sections 0 to 9 are the only vocabulary a brief may use, and new words are recorded there before use. Every annotation on this page is a deck label or an allowed eyebrow: "In person", "Online", "Two ways to attend", "Compare", "Proof", "Admissions", "Connect", "Families", the two school names |
| **The door line always follows both CTAs**, at every width, rather than switching form under 700px tall (`CONTRACT.md` section 2) | Stricter than the contract, not looser: it keeps both CTAs above the fold at every row and puts nothing between them anywhere. It is also the sheet's grammar — the caption sits under the part it describes |
| **The compact door has no plate border**, only a top rule | A hairline to hang the part from, in the support language's no-fills grammar; it also buys 16px of fold at every row |
| **Both line inks are mixed to a measured ratio**, where the brief names `--color-border` for the grid | Two classes of line at two weights, and each weight is now the same on all three grounds: construction **3.10 to 3.12:1**, drawn structure **3.58 to 3.63:1**, measured per chapter in `qa/measurements.md`. The brief's own token lands at 1.56:1 on `--color-bg` and 1.42:1 on `--color-surface`, where a dashed line is not perceptible as dashes and the critique found the surface lines "at the edge of perception", and at 3.27:1 on navy, so the same token drew the same device at two different strengths. The navy grid keeps `--color-border` as its base, as the brief says; the light grounds mix `--color-border-strong`, the token whose role is already "borders that must reach 3:1 on light surfaces" |
| **A no-break space** between "from" and "anywhere." in the h1 | Changes no word; keeps the last phone line to two words |
| **`letter-spacing: -0.045em` on the h1 below 768**, where `CONTRACT.md` section 3 sets no tracking for the h1 role | The round-one critique asked for the phone rag to be evened. Measured first, then decided: `text-wrap: pretty` is a **no-op** for this sentence at every phone row (identical per-line widths to the raw wrap, because Chrome's `pretty` only rescues a short last line and this last line is already 58 per cent of the measure); and **no binding of one or two phrases helps** — 211 binding sets (none, every single adjacent pair, every pair of pairs) were measured across ten phone rows, and the best moved the mean line-width deviation from 41.2 to 39.2px while leaving the worst interior line at 57 per cent. The lever that works is tracking, because it changes the line *count*: at `-0.045em` the sentence falls under Chrome's six-line ceiling for `text-wrap: balance` at 360, the narrowest phone row, so the browser balances the block instead of wrapping it greedily. 4.5 per cent is milder than the estate's own heading tracking, which is -1.6px, a 5.9 per cent negative track at this size (`shared/CONTINUITY.md`), so this moves **towards** the destination rather than away from it. Not applied from 768 up, where the sentence already sets four or five even lines |
| **The door's format label is 10px**, below `CONTRACT.md` section 3's `--text-xs` floor for the label role | Named here because the first build did not name it, and it is the one departure the round-one critique did not accept. The **brief** sets the annotation size for this direction — "`--font-mono` at `--text-xs` or smaller, never below 10px" — and 10px is that floor. The label carries DD-04's primary distinguishing cue, so the size is a real trade: measured at 6.25:1 on `--color-bg` and 7.81:1 on navy, well above the 4.5:1 the brief's acceptance row sets, and paired with a drawn glyph and the full school name in Literata at 22 to 28px. If Nari or the contract would rather the label sat at `--text-xs`, it is one token |
| **The first screen's bottom padding is `--space-5`**, one step less than a chapter's own `--space-6` | So the hard edge onto the comparison chapter is never further below the last line than the contract's reserved 24px band. With the sentence a line shorter at 412 by 839 the old `--space-6` left 27px of padding showing at the bottom edge and the runner called a false floor |
| **Bare lengths that are geometry, not tokens** | The 1px hairline; the 6px corner handle, its 1px outline, its 14px arms and its 7px offset; the 12px registration mark; the 16px door glyph; the 2px and 4px focus bands and the 3px forced-colours outline; the 44px target floor; the 56px header row; the 28px and 32px mark heights K12 V2 fixes in pixels; the 22/39/39 per-cent table columns; the 0.2em knockout spread and the 0.08em annotation tracking; the breakpoints 359, 768, 1024 and the height queries 400 and 699. Rule 14 governs colour, type, space, radius, shadow and duration, all of which are tokens here |
| **Three layer-3 values in `:root`**: `--sheet-max: 86rem`, `--anno: 0.625rem`, `--rail`/`--grid-gutter` aliases of `--space-4`/`--space-6` | `86rem` is 1376px, the **cap** on the twelve-column sheet, not its width at 1440: with `--sheet-margin` at `--space-7` from 1024 the sheet measures **1344px at 1440** and the cap only binds from 1472 up. (The first build's comment called 1376 "the sheet at the 1440 design width" and was wrong; the stylesheet's comment is corrected too.) `0.625rem` is the 10px annotation floor the brief sets, which is below `--text-xs` and therefore has no token. Both are named here as DD-19 departures |
| **`overflow-wrap: anywhere`** on the strings that carry a host name | `break-word` wraps but does not shrink a grid item's min-content width, which overflowed the doubled-root test at V2 on "community.gt.school." M10 met the same defect |

## Flagged slots

| Slot | Q id | What ships |
|---|---|---|
| "Current families" label and destination | Q-002 | The deck's label, linking to community.gt.school |
| Application steps, identical for both schools | Q-007 | The deck's four steps |
| Georgetown tuition | Q-011 (decided) | "Tuition on request. Ask admissions." |
| After 8th grade | Q-013 | The deck's cell, deferred to admissions |
| Intensive-weekend logistics | Q-017 | Not on the page; the deck's "Four intensive weekends a year in Georgetown." only |
| Outcome figure, accreditation | Q-019, Q-033 | Withheld by decision (G0.5 items 2 and 3). Nothing on the page |
| TEFA window, owner, expiry | Q-021 | The deck's module, visible to everyone (D-015 option c) |
| The `school=` parameter name | DD-25 | The convention; the live parameter is confirmed in S5 |
| Holly's unifying brand element | Q-001 | Not present; the header is the GT School mark alone |
| The specimen number | this file, Departures | Not on the page; raised for Nari or Johnny |
| Door photographs | DD-42, RF-25, AD-11 | None, and none designed: this direction has no photographed state |

## Parent questions (`0_plan/05` section 6c)

| # | Question | Where this page answers it |
|---|---|---|
| PQ-01 | What is GT School? | The h1, marked as the specimen |
| PQ-02 | Is it for my child? | The h1's "gifted and talented"; the Admissions row; the first proof fact; the steps line |
| PQ-03 | In person or online? | The two doors, annotated "In person" and "Online", on the first screen at all nineteen rows |
| PQ-04 | Where is the campus? | The h1, the Georgetown door line, "Where and how", the footer facts |
| PQ-05 | What does a day look like? | "The day", both columns |
| PQ-06 | Cost, and can TEFA help? | "Tuition and access" and the TEFA module |
| PQ-07 | How do I apply? | The Admissions chapter: four steps and two application links |
| PQ-08 | Who teaches my child? | "Guides", both columns; the third proof fact; both door lines |
| PQ-09 | How much in-person time does GT Anywhere have? | "In-person time"; the GT Anywhere door line |
| PQ-10 | Results and accreditation | **Deferred by decision** (G0.5 items 2 and 3). The page is silent, here and everywhere; a parent is pointed to "Talk to admissions" |
| PQ-11 | After 8th grade? | The comparison row, deferred to admissions (Q-013) |
| PQ-12 | Current family, where do I go? | The header link and the Families chapter |
| PQ-13 | Not ready to apply? | The Connect chapter's four links |
| PQ-14 | Part of Alpha School? | The provenance line, once, under the h1 |

## Continuity (L2), against the measured estate (`shared/CONTINUITY.md`)

`gt.school` has no mirror in this repository and is unmeasured, so the Georgetown handoff is
**unverified** and this section scores only the GT Anywhere handoff, on the rendered evidence in
`0_plan/kb/exemplars/estate/`.

**The rendered comparison, filed where the rubric asks for it.** The round-one critique asked for the
pair rather than a property table, so the estate's own captures now sit beside this page's at both
widths, in `qa/`:

| File | What it puts side by side |
|---|---|
| `qa/estate-side-by-side-390.jpg` | `kb/exemplars/estate/anywhere-home-390-firstscreen.jpg` beside `qa/V9.jpg` |
| `qa/estate-side-by-side-1440.jpg` | `kb/exemplars/estate/anywhere-home-1440-firstscreen.jpg` beside `qa/V16.jpg` |

Composed from the captures that already existed; neither image is retouched, and both are labelled with
their source and viewport. What the pair shows at a glance: the same cream, the same Literata headline,
the same uppercase Inconsolata on the one control — and a photographed child on one side against a
drawing on the other, which is the gap the Hero row names.

| Property | The estate, measured | This mock | Decision |
|---|---|---|---|
| Page ground | `rgb(252, 244, 239)` | `--color-bg`, the same value, on the first screen and three of seven chapters | Matches |
| Body text and face | `rgb(0, 17, 23)`, Inter Tight | The same | Matches |
| Heading face | Literata | Literata | Matches |
| Heading weight | **300** | 400 | Argued departure. M03 tested 300 against 400 on this sentence and shipped 400; `--h1-weight` is one edit if DD-38 goes the other way |
| Heading tracking | **-1.6px** (a 5.9 per cent negative track at 27px) | **-0.045em (4.5 per cent) below 768**; normal from 768 | Closer than the first build, which was normal everywhere. The phone track was taken for the rag (Departures) and lands just inside the estate's own tracking, so the handoff at the width two thirds of sessions use is now a near match rather than a difference. From 768 up the sentence sets four or five even lines and needs no help, so it keeps the contract's normal tracking |
| Application button | Navy fill on the first screen, orange in the footer; three different silhouettes | Navy fill on light grounds, near-white on navy (DD-46); one uniform `--radius-md` corner (DD-47) | Decided, not drifted. The estate's orange label measures 2.50:1 (K12 F87) and copying it would import a contrast failure onto the page's one control |
| Button face and case | Inconsolata, uppercase | Inconsolata 600, uppercase | Matches. The estate's computed 500 is unavailable: `fonts.css` ships Inconsolata 400 and 600 only |
| Button size | 16px | `--text-btn`, 17 to 18px | Declared difference, as for every mock in the programme |
| Utility face | Uppercase Inconsolata in the estate's footer navigation | Uppercase Inconsolata for every annotation on the page | Matches, and this direction leans on it harder than any other |
| Marks | Two-colour artwork, GT Anywhere white-on-navy | Both marks unmodified, on the panels `copy.md` section 8 names, 28px at 390 and 32px at 1440, all three eager, aspect skew 0% in the runner's table | Matches |
| Surface texture | The estate's cream is **grained**, with wave linework behind the hero | Flat cream with a hairline construction grid | Difference, and the closest this programme has come: the estate's own first screen is cream with drawn line artwork over it, and so is this one. The grain itself is not reproduced |
| Hero | A composited photographic cut-out of an identifiable child over line artwork | No photograph; the drawn sheet carries the screen | Decided (Imagery, above). It is the largest continuity gap in this direction and should be read as one |
| Could the school sites inherit this shell? | | The header, the footer, the three grounds, the rule weights, the annotation role and the button treatment are a system a school site could take whole. The construction grid is the part that is this page's argument rather than the estate's, and a school site could adopt it as a layout grid without drawing it | |

## Self-check

Greps from the `BUILDER-BRIEF.md` rules table, run 2026-09-11 from the repository root:

| Check | Result |
|---|---|
| `grep -c "<form" index.html` | **0** |
| `grep -c "<script" index.html` | **1** (the JSON-LD block) |
| Hosts in `href` and `src` | anywhere.gt.school, apply.gt.school, community.gt.school, gt.school (canonical), www.gt.school, schema.org (JSON-LD context). Nothing else |
| Digits in visible text | 8 (8th grade), 9 (9 to noon), 10,400, 90 (90th), 512, 270, 9481, 2026, 09, 10 (the sources date). No other figure |
| "advis" in visible text | none (`data-type="advisor"` is an attribute, which the checker allows) |
| Full names | "Georgetown Campus" ×18, "GT Anywhere" ×27 |
| Raw hex in `styles.css` | **0** |
| `transition` declarations | none (the word appears once, in the reduced-motion block's `transition-duration`) |
| Logos | `gt-school-logo-h.svg` ×2, `gt-anywhere-logo-h.svg` ×1 |
| `loading="lazy"` | **0**. The brief asks for both marks eager and the first build left the two footer marks lazy, which also made the runner report the GT Anywhere mark's shape as "unknown" and its aspect skew as "n/a"; with the file loaded at measurement time the runner reports **horizontal, 0%** for all three |
| Size | 19,072 + 27,521 = 46,593 bytes, 45 KB by the checker's formula |
| Interactive targets under 44px | **None but inline sentence links**, which WCAG 2.5.8 exempts. The two utility links and the skip link were under 44 at the first build and are 44 now (`qa/fold.md`, "Interactive targets under 44px") |
| 390 by 844 first screen (V9) | Header 57, h1 271, provenance 304, CTA Georgetown 463, CTA Anywhere 586 of 844; the header, the umbrella sentence, the provenance line and the measure line are the only things above the CTAs; the door lines and the compare sentence are cut at the fold (`qa/V9.jpg`) |

### Screenshots looked at with the Read tool

First build: `qa/V2.jpg`, `qa/V2-full.jpg`, `qa/V10.jpg`, `qa/V13.jpg`, `qa/V14-full.jpg`,
`qa/V16.jpg`, `qa/V18.jpg`, `qa/forced-colors.jpg`, `qa/focus-cta.jpg`, `qa/focus-footer.jpg`.
Iteration: `qa/V9.jpg`, `qa/V16.jpg`, `qa/V14-full.jpg`, `qa/V18.jpg`, `qa/forced-colors.jpg`, and
crops of `qa/V2-full.jpg` (the caption), `qa/V15.jpg` (the corner handle against the descender, and the
dashed drop under the measure label) and `qa/estate-side-by-side-390.jpg`. What the captures changed,
in order:

1. The header was inheriting the chapter's 64px block padding and stood **173px tall** from 768 up. It
   is 57px at every row now, which returned 116px of first screen to every desktop row.
2. The construction grid was a background gradient and **did not repaint under forced colours** — the
   forced-colours capture showed the two margin rules and nothing else. It is real elements on a real
   CSS grid now, which also made it measurable.
3. Literata's font box stands proud of its line box, so a column line **showed through the type** of
   the chapter titles: 251 crossings at the first measurement. The ground-coloured knockout spread
   fixed it; the table caption, which is outside the cell grid, needed its own. (The first build wrote
   "through the ascenders" and had the end wrong: what overflows is the font box, and the ink that
   clears a block edge is the descender on its last line.)
4. The corner handles were drawn **on** the frame's corners and struck the G of "GT School" at V10 and
   V16. They sit 7px outside it now.
5. The registration mark was at the sheet's top left, clustering with the specimen's own top-left
   handle. It moved to the top right.
6. The navy grid ink measured **2.22:1**, under the brief's 3:1 floor. The mix went from 34 to 50 per
   cent: 3.27:1. (Round two set all three grounds to one ratio instead; the navy mix is 48 per cent
   and 3.12:1 now.)
7. At V10 the door names were `--text-xl`, the same token as the stepped-down h1. They are `--text-md`
   on that row.
8. `community.gt.school.` set a grid item's min-content width and **overflowed the doubled-root test**
   at V2 by 3px.
9. In the Admissions chapter the step rules stopped at 65ch while the two application buttons ran the
   full width, so the rules and the controls did not line up. The reading measure now caps the
   *block* — the facts grid at two columns of `--measure-prose` — and never the ruled row, so every
   chapter's rules reach its own controls.

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M21-the-specimen`

```
## M21-the-specimen: 37 pass, 0 fail

check-mocks: OK
```

(37 rules including R37, which compares the fold figures pasted below against the current
`qa/fold.md`; `--all` confirms R37 PASS.)

### `python3 1_spec/tools/check-claims.py`

```
## 0_plan/mockups/M21-the-specimen/index.html
| Figure on the page | Register row | Occurrences | Status |
|---|---|---|---|
| "designed for students in the 90th+ percentile" | CR-011 | 4 | Unverified, public |
| "$10,400/year — GT Anywhere annual tuition, fully or partially covered | CR-021 | 1 | Unverified, public |
| Four in-person intensive weekends a year in Georgetown (four named 202 | CR-032 | 3 | Unverified, public |
| Georgetown mornings: "two 50-minute blocks and one 25-minute block wit | CR-033 | 2 | Unverified, public |
| GT Anywhere mornings: "two to three hours of 100% cognitive load" (aca | CR-034 | 1 | Unverified, public |
| Guides hold weekly one-to-one check-ins with each student ("Academic A | CR-035 | 2 | Unverified, public |
  NOTE unverified rows on the page (allowed in mocks, blocked for production): ['CR-011', 'CR-021', 'CR-032', 'CR-033', 'CR-034', 'CR-035']

check-claims: OK
```

### `node 0_plan/tools/shots.mjs 0_plan/mockups/M21-the-specimen`

The run this rationale's figures are taken from (checker R37). Full output, including the next-band
evidence and the focus and forced-colour captures, in `qa/fold.md`.

```
| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 93 | 303 | 337 | 496 | 618 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 93 | 289 | 315 | 445 | 556 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 255 | 280 | 411 | 522 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 224 | 249 | 380 | 491 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 242 | 275 | 434 | 557 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 242 | 275 | 434 | 557 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 224 | 250 | 381 | 492 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 243 | 277 | 436 | 559 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 271 | 304 | 463 | 586 | yes | report: page height 6000 |
| V10 | 750 by 342 | fold | 318 | 57 | 121 | 147 | 274 | 274 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 246 | 280 | 442 | 442 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 252 | 286 | 447 | 447 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 311 | 346 | 509 | 509 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 288 | 322 | 487 | 487 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 271 | 297 | 435 | 435 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 301 | 335 | 501 | 501 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 301 | 335 | 501 | 501 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 89 | 314 | 357 | 505 | 615 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 287 | 314 | 449 | 449 | yes | report: scrollWidth 1024 |

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
| V1 | yes | content reaches 736 of 740 and more follows below |
| V2 | yes | text cut by the edge, 622 to 642 |
| V3 | yes | text cut by the edge, 652 to 672 |
| V4 | yes | text cut by the edge, 645 to 665 |
| V5 | yes | text cut by the edge, 696 to 716 |
| V6 | yes | content reaches 839 of 839 and more follows below |
| V7 | yes | text cut by the edge, 670 to 690 |
| V8 | yes | text cut by the edge, 722 to 742 |
| V9 | yes | content reaches 841 of 844 and more follows below |
| V10 | yes | text cut by the edge, 334 to 354 |
| V11 | yes | content reaches 1004 of 1024 and more follows below |
| V12 | yes | content reaches 1184 of 1194 and more follows below |
| V13 | yes | surface changes from rgb(252, 244, 239) to rgb(0, 42, 58) between the last CTA and the bottom edge, and the page continues below |
| V14 | yes | surface changes from rgb(252, 244, 239) to rgb(0, 42, 58) between the last CTA and the bottom edge, and the page continues below |
| V15 | yes | content reaches 647 of 648 and more follows below |
| V16 | yes | content reaches 895 of 900 and more follows below |
| V17 | yes | text cut by the edge, 940 to 961 |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 560 to 581 |

## Interactive targets under 44px

BUILDER-BRIEF rule 11 asks for 44px; WCAG 2.5.8 requires 24px at AA and is met by size or by spacing. Everything under 44 is listed as evidence for the critics. Only a door CTA under 44 fails the run.

| Viewport | Target | Height | Width | Kind | Result |
|---|---|---|---|---|---|
| 375 by 629 | Check eligibility on the GT An | 20px | 297px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 1440 by 900 | Not sure which is right for yo | 21px | 436px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 1440 by 900 | Check eligibility on the GT An | 21px | 334px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 28px | 121.6px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 28px | 121.6px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 28px | 147px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass
```

### `node 0_plan/mockups/M21-the-specimen/qa/M21-measure.mjs`

Full output in `qa/measurements.md`.

```
**Crossings at every row: 0. Smallest clearance from a visible construction line to any glyph: 7.8px (V13).**
**Drawn line classes: 7. Crossings of type by any drawn line, all nineteen rows: 0.**
Smallest clearance to ink, per class: margin rule 15.00, column line 7.80, measure line 8.00,
measure drop 3.39, corner handle 2.13, registration cross 23.82, drawn rule 6.67.
Lowest annotation contrast anywhere on the page: 5.69:1 (--color-text-muted on --color-surface).
Grid ink: 3.10:1 on --color-bg, 3.12:1 on --color-surface, 3.12:1 on navy.
Drawn-rule ink: 3.63:1 on --color-bg, 3.58:1 on --color-surface, 3.58:1 on navy.
```

## Iteration, round one to round two (2026-09-11)

Both critics scored **Iterate** with Craft at 3 and every other row at or above 4, five at 5
(`0_plan/ensemble/critic-fable-M21.md`, `0_plan/ensemble/critic-astra-M21.md`). What changed, in the
order the critiques ranked it, each with the measurement that says it is fixed:

| # | Finding | What changed | Measured after |
|---|---|---|---|
| 1 | **The comparison caption collapsed** to 58 by 83px and six lines at every width below 768, against 1344 by one line at 1440: the stacked-table query turned `.compare, tbody, tr, th, td` into blocks and left `caption` at `display: table-caption`, so it shrink-to-fitted an anonymous table box | `caption` added to that selector list (`styles.css`, the `max-width: 767px` block). One word | Full column width, **one line, 20.5px tall**: 312 at V1, 327 at V2, 342 at V9, 366 at V5, 702 at V10. At V18 (320) it sets two lines in a 272px column, which is the column's own doing |
| 2 | **The registration cross and the h1's top-right handle collided below 768** — overlapping at V2, V10 and V18, 5px apart at V1, V5 and V9 — because the specimen frame spans the whole column there, so its top-right handle lands in the sheet's top-right corner, which is where the cross was moved to escape the top-left handle | The cross moves to the sheet's **bottom** right wherever the frame reaches the column edge. Extended past the critique's "below 768" to **below 1024** after measuring the two rows it did not name: at 768 the marks stood **13px apart**, one mark's width, which is the same defect a size smaller. From 1024 the frame is eight of twelve columns and four columns clear of the sheet's right edge by construction, so the cross keeps the top right there | Cross to handle: **724.3px at V2, 785.9 at V1, 738.2 at V5, 790.8 at V9**, 329.9 at V10, 810.9 at V18, 530.0 at V11, 537.8 at V12. From 1024, 301 to 450px |
| 3 | **The dashed drop started inside the measure label** at 1366 by 648 and 1024 by 576: drop top 309.8 against a label ink bottom of 316.3, and 326.17 against 332.7. The height query pulled the doors to a smaller step and the drop's pseudo-element kept its own offset | One custom property, `--doors-gap`, now drives both the gap above the doors and the distance the drop rises into it, so a height query cannot move one without the other | The drop starts **3.39px below the label's ink at every row that draws it** — V10, V13, V15, V16 and V19, the same figure at all five |
| 3b | **The harness tested the grid and the margin rules only**, so the page's other line classes were unmeasured and this was the one that failed | `qa/M21-measure.mjs` now inventories **every rectangle the stylesheet paints** — margin rules, column lines, the dashed measure line, the dashed drop, the corner handles, the registration cross and every drawn rule — rebuilding pseudo-element boxes from their resolved insets, and measures each against the nearest glyph's **ink** rather than its font box | **Seven classes, 0 crossings at all nineteen rows.** Floors: margin rule 15.00, column line 7.80, measure line 8.00, measure drop 3.39, corner handle 2.13, registration cross 23.82, drawn rule 6.67px. It also found two faults in itself: the L-shaped handle modelled as its bounding box (37 phantom crossings) and the stacked table's clipped `thead` counted as visible type (20 more). Both fixed in the runner |
| 4 | **The phone rag**: 297, 264, 264, 171, 249, 224, 208 at 375, so line four was 58 per cent of line one; at 414 line four jutted 50px past line one and line five pulled back 134px | One step of negative tracking below 768, `-0.045em`, chosen as the smallest value that brings the sentence under Chrome's six-line ceiling for `text-wrap: balance` at the narrowest phone row. See Departures for what was measured and rejected first | 375: **268, 239, 239, 315, 196, 271** in six lines. 414: **274, 349, 304, 333, 309** in five. Standard deviation of the line widths falls from 38.9 to 36.6px at 375 and from 41.1 to 25.7px at 414; the worst interior line rises from 58 to 62 per cent at 375 and from 62 to **79 per cent** at 414, and the block is one line shorter at 360 to 390 and at 402 to 430, two shorter at 393, and one shorter at V10 |
| 5 | **Two utility links took 28px targets below 359px**, under the builder brief's 44px rule (Astra) | The `min-height: 28px` is gone; the header row grows instead, which is the right trade on the reflow row, where the fold rule does not apply. The skip link, 40px at the first build and listed by the same runner report, is 44 too | **44px** for both links and the skip link at every row. The runner's "Interactive targets under 44px" table now lists nothing but inline sentence links, which WCAG 2.5.8 exempts. V18's header is 89px rather than 57 |
| 6 | **The grid had two weights**: 1.42:1 on `--color-surface` against 3.27:1 on navy, so the page's signature device changed strength chapter to chapter | Both line classes are now specified as a **ratio against the ground they are drawn on**, mixed from the token that already carries the role | Grid **3.10 / 3.12 / 3.12:1**; drawn rules **3.63 / 3.58 / 3.58:1**. One weight each, a half-step apart on every ground |
| 7 | **The estate comparison was argued from a property table**, and three rationale figures were wrong | `qa/estate-side-by-side-390.jpg` and `qa/estate-side-by-side-1440.jpg` compose the estate's own captures beside V9 and V16. The visible-line ranges are corrected to 23 to 24 and 65 to 70; the ascender is corrected to the descender, in this file and in the stylesheet's own comment | The mark skew is corrected at the **cause** rather than in prose: the runner reported "unknown / n/a" for the GT Anywhere mark because the two footer marks carried `loading="lazy"`, which was also a silent departure from the brief's "both eager". With that removed the runner reports **horizontal, 0%** for all three files |

**Also fixed, from Astra's card, not in the seven above.** The short-height query set `gap` on the
doors and so tightened the 32px construction gutter as well as the row gap, which put door two 12px off
the column-seven line at 1366 by 648 and 1024 by 576 and falsified this file's own alignment claim; it
sets `row-gap` now, and door two's left edge measures 699 against a column line at 699 (V15), 528
against 528 (V13 and V19), 736 against 736 (V16), with the drop dead centre of the gutter at each. The
run-in label's colon was `visually-hidden`, so a sighted reader on the phone read "Georgetown Campus
Two hours of mastery academics" as one run-on string; it is visible now, which adds punctuation and no
word. The `86rem` sheet comment claimed 1376px was the sheet at 1440, where the sheet measures 1344 and
the cap binds from 1472; `exeter-1440.jpg` is corrected to `exeter-1440-full.jpg`; the byte count is
re-measured. One row had to be re-earned: with the sentence a line shorter, 412 by 839 left 27px of
padding at the bottom edge and the runner called a false floor, so the first screen's bottom padding is
one step less than a chapter's own.

**What I judged wrong and did not do.**

| Not done | Why |
|---|---|
| **`text-wrap: pretty` at the seven-line band**, the critique's first suggestion for the rag | Measured, and it is a **no-op** for this sentence: per-line widths identical to the raw wrap at every phone row, because Chrome's `pretty` only rescues a short last line and this one is already 58 per cent of the measure. Reported rather than applied, because a rule that does nothing is worse than no rule: it reads as a fix |
| **"Bind one more phrase"**, the critique's second suggestion | Measured 211 binding sets — none, every single adjacent pair and every pair of those — across ten phone rows. The best moved the mean per-line deviation from 41.2 to 39.2px and left the worst interior line at 57 per cent, which is not a fix. No binding is in the page beyond the one that was already there |
| **Hyphenation** | It reaches six lines at 375 with a better spread, and it breaks "person" as "pers-on". Rejected on the render |
| **Evening the rag at 360 to 393 any further** | It cannot be done with this sentence at this measure. At 23 characters a line, "Georgetown," is 43 per cent of a line, and across 13 tracking steps from 0 to -0.06em, 147 combinations of tracking and binding, and a sweep of the measure from 76 to 100 per cent of the column, **nothing raises the worst interior line above 62 per cent** at those widths (narrowing the measure is worse: it reaches eight lines with an 84px line). The tracking takes 375 from seven lines to six and from 58 to 62 per cent; 414 to 430 gets the real win. Saying so is better than claiming a fix |
| **Widening the corner handle's 7px offset** | The extended harness puts its true floor at 2.13px, against the descender of the h1's last line at 1366 by 648 — tight, and positive at every one of the nineteen rows, with the crop looked at. Moving it would also move the one device that reads as "selected on a canvas" further from the thing it selects. The asserted 4px is corrected to the measured 2.13px instead |
| **Drawing the grid through the comparison table**, and four columns rather than two between 768 and 1023 (Fable, Composition) | Both are brief amendments, not defects: the brief fixes the column counts ("at 2 columns from 768 to 1023") and the table's cells knock the grid out the way every other part does. Raised here with the capture attached, as the critique itself asked, rather than changed silently |
| **An Inconsolata footer navigation** (Astra, Continuity) | The estate's uppercase mono voice is already carried by every annotation on this page; putting it on the footer links too would make the footer a fifth register and would set navigation labels in a face this contract reserves for annotations, labels and buttons. A Nari decision, not a build one |
| **The specimen number and the per-door fold position** | Both rulings stand and are unchanged: the wordless registration cross is the right shipping form for a mock-only device, and a fold position is a property of the viewport, so a no-JavaScript mock can hard-code only one and the annotation would be false at eighteen of nineteen rows. `qa/fold.md` carries both doors' positions at all nineteen rows |
