# M21 "The Specimen", rationale

| Field | Value |
|---|---|
| Mock | M21 "The Specimen", brief `0_plan/kb/briefs/M21.md`, under `CONTRACT.md` v2.1 |
| Lens order | L4 exclusivity, L1 objective, L3 mission, L2 continuity |
| Source languages | Design Library (`~/projects/libraries/design`): `insp-lilium` "Specimen Brutalism" (primary), `insp-tsai2020` "Civic Hairline" (support). Composition, rhythm and structural devices only; no palette, no typeface (**DD-48** option a) |
| Built | 2026-09-11 by a Fable design-engineer fork. Measured with `node 0_plan/tools/shots.mjs` (the 19-row matrix, mark geometry, forced colours, reduced motion, doubled root font) and with `qa/M21-measure.mjs`, written for this mock, which measures the h1 line count, the construction grid's clearance from every glyph at every row, and every annotation's contrast against its own painted ground. No production host was opened; no browser tool other than these two harnesses |
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
| V1 to V4, V9 | 360 to 393 (and 390 at V9) | 27.00 to 27.58px | **7** | 217 to 222px |
| V5 to V8 | 402 to 430 | 27.74 to 28.23px | **6** | 191 to 195px |
| V10 | 750 landscape, `--text-xl` | 24.17px | **3** | 83px |
| V11, V12 | 768, 834 | 34.18, 35.34px | **4** | 157, 163px |
| V13, V19 | 1024 | 38.68px | **5** | 222px |
| V14 to V17 | 1280 to 1920 | 43.19 to 46.00px | **4** | 199 to 212px |
| V18 | 320 reflow | 27.00px | **8** | 248px |

This is M12's measured pattern (7 at phone, 6 at large phone, 4 at laptop), not the contract's
23-characters-a-line estimate, and the fold sums below are built on the measured counts.

## What was borrowed, and what was deliberately not

### From `insp-lilium`, "Specimen Brutalism" (primary)

| Device in the source | How it is used here |
|---|---|
| "Lay a construction grid of 1px hairlines across every scene" | 1px `--color-border` hairlines at the twelve column positions from 1024, at two columns from 768 to 1023, and two margin rules below 768, running the full height of every chapter behind everything |
| "Mark the hero object with small square corner handles as if it were selected on a canvas" | The h1 sits in a selection frame with a 6px `--color-accent` square and a 14px hairline bracket at each of its four corners. This is the first screen's one accent use |
| "Thin dashed measure lines" | The dashed rule that carries "Two ways to attend" across the sheet, and the dashed drop that falls from its centre into the gutter between the two doors. Measure lines are dashed; construction lines are solid; they are different classes of line and are drawn differently, which is the drafting convention the source is quoting |
| "8 to 9px uppercase monospace annotations in the margins" | Inconsolata 600 at 10px, uppercase, 0.08em tracking, in `--color-text-muted` on light and `--color-text-muted-on-dark` on navy. 10px, not 8 to 9, because the brief sets 10px as the floor |
| "Full-bleed scenes alternate hard between grounds, never blended" | Seven chapters rotating `--color-bg`, `--color-navy`, `--color-surface` with a drawn rule at every boundary and no gradient anywhere |
| A registration mark on the sheet | A 12px hairline cross at the first sheet's top right corner, opposite the specimen's own handles |

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
| Exemplars | `~/projects/libraries/design/examples/larkspur.html`, read whole, for the language as a page: the selection stage, the margin annotations, the hard-cut grounds. In this repository, `0_plan/kb/exemplars/collins-1440-full.jpg`, looked at with the Read tool: its Programs section is a small uppercase eyebrow, a serif statement, then four rows divided by hairlines with a name at the left and a short line at the right, and it closes on a hard cut to a near-black ground. That is the form of this page's comparison, proof, steps and connect chapters — ruled rows, no cards, no fills — and of its chapter boundaries. `0_plan/kb/exemplars/exeter-1440.jpg` for the labelled figure: the door here is a labelled part, annotation over name over control. Avoided: `0_plan/kb/exemplars/nord-anglia-1440-full.jpg`'s four identical calls to action (C22) — this page has two door CTAs on the first screen, the same two once after the table, two application links in the steps and four text links in Connect, every one labelled by its destination | Met |
| Composition | Header 56 on `--color-bg`; the construction grid at twelve columns from 1024, two from 768 to 1023, and two margin rules below 768, full height behind everything; h1 across eight columns with four 6px `--color-accent` corner handles; provenance below it; doors six and six with a dashed measure line carrying "Two ways to attend"; margin annotations in `--font-mono` 10px uppercase `--color-text-muted` tracked 0.08em; chapters alternating hard between the three grounds with a hard edge at every boundary | Met, with two departures named below (the specimen number; the door's fold-position annotation) |
| Typography | Contract roles exactly. Annotations `--font-mono` at 10px, never smaller, always `--color-text-muted` on light or `--color-text-muted-on-dark` on navy. No display type above `--text-3xl` | Met |
| Colour and surface | `--color-bg` first screen; grounds rotate to `--color-navy` and `--color-surface`; grid hairlines `--color-border`; the corner handles the one `--color-accent` use on the first screen; on navy the grid is `--color-border` reduced to **3.27:1** against the ground, measured; focus per contract, two-colour ring on navy | Met, measured below |
| Imagery | The school marks only, both eager-decoded, sized by height to K12 V2 (28px at 390, 32px at 1440, aspect skew 0%). **No photograph in either state** | Met |
| Motion | Still. No `transition`, no `@keyframes`. V1 and V3 instant; V10 native anchor scroll under `no-preference` only; reduced motion zeroes every duration | Met |
| Copy | `copy.md` sections 0 to 8 verbatim. From section 9: the schematic labels "In person" and "Online" reused on the doors, and the skip-link label. Allowed headings: "Two ways to attend" (section 1), "Compare the two schools", "What is true of both schools", "How to apply", "Questions before you apply", "Already a GT family?"; eyebrow labels "Compare", "Proof", "Admissions", "Connect", "Families". **No specimen number** (departure, below) | Met but for the specimen number |
| Conversion | Doors on the first screen at all nineteen rows; compare anchor under the doors and before the table (checker R19); comparison table with repeated values (DD-43); proof; steps; secondary CTAs; current families; footer | Met |
| Acceptance: the grid is visible at every row and never crosses a glyph, clearance reported | **0 crossings at all nineteen rows. Smallest clearance 7.80px** (V13 and V19, "In person" against a column line); 15.00px at the other seventeen rows (a glyph to a margin rule). Visible lines per row: 16 below 768, 23 to 26 at 768 to 834, 66 to 71 from 1024 | Met, measured |
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
| **V2** | 375 by 629, **605** | Phone, short-height rhythm, doors stacked, lines below both CTAs | 93 + 8 + h1 7 lines 219 + 8 + provenance 18 + 8 + measure 13 + 8 + door 102 + 8 + door 102 = **587** | **587** | 18 |
| **V5** | 414 by 715, **691** | Phone, standard rhythm, doors stacked | 57 + 24 + h1 6 lines 193 + 16 + 18 + 24 + 13 + 16 + door 107 + 16 + door 107 = **591** | **589** | 102 |
| **V14** | 1280 by 720, **696** | Laptop, doors six and six | 57 + 32 + h1 4 lines 199 + 16 + 19 + 24 + 13 + 16 + door 112 = **488** | **487** | 209 |
| **V16** | 1440 by 900, **876** | Laptop, doors six and six | 57 + 32 + h1 4 lines 212 + 16 + 19 + 24 + 13 + 16 + door 113 = **502** | **501** | 375 |
| V10 | 750 by 342, **318** | Landscape recipe: `--space-3` padding, h1 at `--text-xl`, doors side by side, names at `--text-md` | 57 + 8 + h1 3 lines 83 + 8 + 18 + 8 + 13 + 8 + door 99 = **302** | **301** | 17 |

Every other fold row, measured (second CTA bottom against the limit): V1 649 of 716; V3 554 of 640;
V4 554 of 635; V6 589 of 815; V7 524 of 657; V8 591 of 715; V11 442 of 1000; V12 447 of 1170;
V13 509 of 744; V15 435 of 624; V17 501 of 936. V9 (emptiness) 618 of 844, page height 6102.
V18 (reflow) no horizontal scroll at 320. V19 (zoom) reported, scroll width 1024, nothing clipped.
**Sixteen of sixteen fold rows pass, V10 included.**

**What crosses the bottom edge, per row** (the runner's false-floor test, which counts text, images and
painted hairlines and never a container's fill). On every phone row it is a door line or the compare
sentence cut by the edge; at V13 and V14 it is the first screen's cream closing onto the navy comparison
chapter, a surface change the runner samples; at V16 and V17 it is the compare sentence and the chapter
rule. The full table is `qa/fold.md` "Next band evidence". V18 is the reflow row, where the fold rule
does not apply (DD-44).

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
   name), so without it a column line showed through an ascender. It scales with the type and costs no
   layout.

The harness measures the result rather than asserting it: for every visible line it takes each rendered
text run's client rect, removes the runs the line is occluded behind at that x (occluders inflated by
their own measured shadow spread), and reports the crossings and the smallest horizontal gap.

| Measure | Result |
|---|---|
| Crossings of a glyph by a visible construction line, all nineteen rows | **0** |
| Smallest clearance, any row | **7.80px** (V13 and V19, the "In person" annotation against the column-three line) |
| Clearance at the other seventeen rows | **15.00px**, a glyph to a margin rule |
| Visible lines per row | 16 (below 768), 23 to 26 (768 to 834), 66 to 71 (1024 and above) |
| Corner handle to the nearest glyph | 4px; to the nearest margin rule, 5px. The handle was moved 7px outside the frame after the V10 and V16 captures showed it striking the G of "GT School" and the T of "Texas" |

**The line inks, measured against their own grounds.** Construction lines are quieter than drawn
structure by intent: a construction line is scaffolding, a rule is a statement.

| Line | On `--color-bg` | On `--color-surface` | On `--color-navy` |
|---|---|---|---|
| Construction grid (`--color-border`; on navy `color-mix(--color-border 50%, --color-navy)`) | 1.56:1 | 1.42:1 | **3.27:1** |
| Drawn rules: chapter boundaries, door rules, table, facts, steps, connect (`--color-border-strong`; on navy `color-mix(--color-text-muted-on-dark 55%, --color-navy)`) | 3.63:1 | 3.31:1 | 3.36:1 |

The brief sets a floor of 3:1 for the grid on navy only, and 3.27:1 meets it. On the light grounds the
grid is deliberately below that: it is a hairline running the full height of the screen, which reads at
a contrast a short mark would not, and the captures at every row confirm it (`qa/V2.jpg`, `qa/V13.jpg`,
`qa/V16.jpg`). Raising it to `--color-border-strong` would make the scaffolding louder than the
structure, which is the wrong hierarchy for a drawing.

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
| **DD-39** (a), RF-07 | `--color-on-navy` text and button fill on navy; `--color-text-muted-on-dark` for annotations, provenance-class strings and sources on navy; `--color-border-strong` for drawn rules on light grounds; the accent as a shape only |
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
| `--color-border-strong` (#857f7b, a new tint) | **DD-39** (a), RF-07; **DD-19** departure | Every drawn rule on a light ground: chapter boundaries, door rules, table rules, fact and step rules, the measure lines, the corner brackets, the registration mark |
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
| **`--color-border-strong` for drawn rules**, where the brief names `--color-border` for the grid | Two classes of line at two weights: construction at 1.56:1 (bg) and 1.42:1 (surface), structure at 3.63:1 and 3.31:1. A dashed measure line in `--color-border` measured 1.56:1 and was not perceptible as dashes; the grid, a full-height continuous hairline, is |
| **A no-break space** between "from" and "anywhere." in the h1 | Changes no word; keeps the last phone line to two words |
| **Bare lengths that are geometry, not tokens** | The 1px hairline; the 6px corner handle, its 1px outline, its 14px arms and its 7px offset; the 12px registration mark; the 16px door glyph; the 2px and 4px focus bands and the 3px forced-colours outline; the 44px target floor; the 56px header row; the 28px and 32px mark heights K12 V2 fixes in pixels; the 22/39/39 per-cent table columns; the 0.2em knockout spread and the 0.08em annotation tracking; the breakpoints 359, 768, 1024 and the height queries 400 and 699. Rule 14 governs colour, type, space, radius, shadow and duration, all of which are tokens here |
| **Three layer-3 values in `:root`**: `--sheet-max: 86rem`, `--anno: 0.625rem`, `--rail`/`--grid-gutter` aliases of `--space-4`/`--space-6` | `86rem` is the 1376px twelve-column sheet at the 1440 design width; `0.625rem` is the 10px annotation floor the brief sets, which is below `--text-xs` and therefore has no token. Both are named here as DD-19 departures |
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

| Property | The estate, measured | This mock | Decision |
|---|---|---|---|
| Page ground | `rgb(252, 244, 239)` | `--color-bg`, the same value, on the first screen and three of seven chapters | Matches |
| Body text and face | `rgb(0, 17, 23)`, Inter Tight | The same | Matches |
| Heading face | Literata | Literata | Matches |
| Heading weight | **300** | 400 | Argued departure. M03 tested 300 against 400 on this sentence and shipped 400; `--h1-weight` is one edit if DD-38 goes the other way |
| Heading tracking | **-1.6px** | normal | Departure. At 27px on a phone the estate's -1.6px is a 6 per cent negative track, which closes the 132-character sentence at exactly the width where it is hardest to read; the sheet's argument is legibility under measurement |
| Application button | Navy fill on the first screen, orange in the footer; three different silhouettes | Navy fill on light grounds, near-white on navy (DD-46); one uniform `--radius-md` corner (DD-47) | Decided, not drifted. The estate's orange label measures 2.50:1 (K12 F87) and copying it would import a contrast failure onto the page's one control |
| Button face and case | Inconsolata, uppercase | Inconsolata 600, uppercase | Matches. The estate's computed 500 is unavailable: `fonts.css` ships Inconsolata 400 and 600 only |
| Button size | 16px | `--text-btn`, 17 to 18px | Declared difference, as for every mock in the programme |
| Utility face | Uppercase Inconsolata in the estate's footer navigation | Uppercase Inconsolata for every annotation on the page | Matches, and this direction leans on it harder than any other |
| Marks | Two-colour artwork, GT Anywhere white-on-navy | Both marks unmodified, on the panels `copy.md` section 8 names, 28px at 390 and 32px at 1440 | Matches |
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
| Size | 19,176 + 23,416 = 42,592 bytes, 41 KB by the checker's formula |
| 390 by 844 first screen (V9) | Header 57, h1 303, provenance 336, CTA Georgetown 495, CTA Anywhere 618 of 844; the header, the umbrella sentence, the provenance line and the measure line are the only things above the CTAs; the door lines and the compare sentence are cut at the fold (`qa/V9.jpg`) |

### Screenshots looked at with the Read tool

`qa/V2.jpg`, `qa/V2-full.jpg`, `qa/V10.jpg`, `qa/V13.jpg`, `qa/V14-full.jpg`, `qa/V16.jpg`,
`qa/V18.jpg`, `qa/forced-colors.jpg`, `qa/focus-cta.jpg`, `qa/focus-footer.jpg`. What the captures
changed, in order:

1. The header was inheriting the chapter's 64px block padding and stood **173px tall** from 768 up. It
   is 57px at every row now, which returned 116px of first screen to every desktop row.
2. The construction grid was a background gradient and **did not repaint under forced colours** — the
   forced-colours capture showed the two margin rules and nothing else. It is real elements on a real
   CSS grid now, which also made it measurable.
3. Literata's font box stands proud of its line box, so a column line **showed through the ascenders**
   of the chapter titles: 251 crossings at the first measurement. The ground-coloured knockout spread
   fixed it; the table caption, which is outside the cell grid, needed its own.
4. The corner handles were drawn **on** the frame's corners and struck the G of "GT School" at V10 and
   V16. They sit 7px outside it now.
5. The registration mark was at the sheet's top left, clustering with the specimen's own top-left
   handle. It moved to the top right.
6. The navy grid ink measured **2.22:1**, under the brief's 3:1 floor. The mix went from 34 to 50 per
   cent: 3.27:1.
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

The run this rationale's figures are taken from (checker R37).

```
| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 93 | 334 | 368 | 527 | 649 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 93 | 320 | 346 | 477 | 587 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 287 | 312 | 443 | 554 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 287 | 312 | 443 | 554 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 274 | 307 | 467 | 589 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 274 | 307 | 466 | 589 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 256 | 282 | 413 | 524 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 276 | 309 | 469 | 591 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 303 | 336 | 495 | 618 | yes | report: page height 6102 |
| V10 | 750 by 342 | fold | 318 | 57 | 148 | 174 | 301 | 301 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 246 | 280 | 442 | 442 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 252 | 286 | 447 | 447 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 311 | 346 | 509 | 509 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 288 | 322 | 487 | 487 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 271 | 297 | 435 | 435 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 301 | 335 | 501 | 501 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 301 | 335 | 501 | 501 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 57 | 313 | 356 | 504 | 614 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 287 | 314 | 449 | 449 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Console

PASS: no console errors.

## Mark geometry (K12 V2)

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 28px | 121.6px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 28px | 121.6px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | unknown | 28px | 147px | n/a | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | unknown | 32px | 168px | n/a | ok |

## Result: all required rows pass
```

### `node 0_plan/mockups/M21-the-specimen/qa/M21-measure.mjs`

Full output in `qa/measurements.md`.

```
**Crossings at every row: 0. Smallest clearance from a visible construction line to any glyph: 7.8px (V13).**
Lowest annotation contrast anywhere on the page: 5.69:1 (--color-text-muted on --color-surface).
Grid ink on navy: 3.27:1. Drawn-rule ink: 3.63:1 on --color-bg, 3.31:1 on --color-surface, 3.36:1 on navy.
```
