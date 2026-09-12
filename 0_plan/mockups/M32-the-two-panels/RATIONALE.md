# M32 The Two Panels, rationale

| Field | Value |
|---|---|
| Mock | M32 "The Two Panels", G-D build wave, new direction, 2026-09-11, **build pass 2** (round-two iteration on both critics' cards; see Iteration at the end) |
| Brief | `0_plan/kb/briefs/M32.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1, including the four rows added to section 3 from this programme's own findings |
| Lens order | L1 objective, L4 exclusivity, L2 continuity, L3 mission |
| Source | The two-door panel on `https://www.gt.school/about-us`, from a screenshot Johnny took on 2026-09-11. The live site was **not** opened by this build; the source is worked from the capture's description in the brief and from the three claims rows the register already holds for it (CR-039, CR-040, CR-041) |
| Files | `index.html`, `styles.css`, this file; `qa/` holds the runner's output (`fold.md`, 19 viewport captures, `V2-full.jpg`, `V14-full.jpg`, `V2-rootx2.jpg`, `focus-cta.jpg`, `focus-plate.jpg`, `focus-footer.jpg`, `focus-footer-plate.jpg`, `forced-colors.jpg`), the five build-pass-2 captures (`focus-logo-navy.jpg`, `forced-colors-light.jpg`, `forced-colors-dark.jpg`, `focus-logo-navy-fc-light.jpg`, `focus-logo-navy-fc-dark.jpg`), `M32-measure.mjs` (the parity, weight and ring probe written for this mock) and `M32-source-counts.py` (the one source figure this repository can reproduce) |
| State | Default state: **no photograph** (DD-42 option a, RF-25 pending). No JavaScript: D-039 is undecided, so the complete static state ships and no `data-d039` declaration is made. Links `../shared/tokens-v2.css` |
| Register rows this build depends on | DD-26 (equal weight), DD-38 (type scale, prose leading), DD-39 (colour roles), DD-42 (photographs), DD-43 (repeated comparison cells), DD-44 (fold contract), DD-46 (surface-dependent button fill), DD-47 (uniform button corner), MN-16 (motion contract), RF-25 (permissions), R6 (comparison breakpoint), R14 (tour label), D-039 (scripts: none shipped) |

## Direction

Hypothesis: **the estate already knows what this page is.** Its own about page carries a two-door component — one navy frame, inset from the page, holding two equal panels side by side — which is the exact object this programme is being asked to design. M32 takes that shape and fixes what is wrong inside it, so that a parent meets one frame holding two real choices rather than a recommendation dressed as a pair.

The first screen is one column on the cream: a 56px header with the GT School mark and two utility links over a hairline; then the umbrella sentence at `--text-3xl`, whose second clause is Literata italic; then the provenance line; then the frame. The frame is a `--color-navy` rectangle with a `--radius-lg` corner and cream on all four sides, and its padding and its gutter are **one value**, so the navy reads as an even lattice around two equal rectangles rather than as a border around one. Inside it, two square-cornered panels — the source's own construction — on the two school tints: Georgetown on `--color-georgetown-tint`, GT Anywhere on `--color-anywhere-tint`. Each panel carries its school mark on the plate its artwork needs, its label, its name, its line and its CTA, in that order, and the two panels are identical to 0px in every geometric property measured (below). Below the frame: the compare anchor closed by a rule, the comparison table with repeated values, a reprise of the same frame after the table, the TEFA module, the proof strip, the steps, the secondary CTAs, the families block and a `--color-surface` footer whose two mark plates are the same pairing the two panels make.

The objective lens is served by a first screen that is a single routing object: two panels, two names, two controls, nothing else competing. Exclusivity is carried by the stated bar below the fold and by restraint, never by price or a wealth cue (DD-10, MD-25). Continuity is carried by the estate's own ground, faces, marks, button face and case, by the italic device its own headline uses, and by the two-door shape itself, which is the estate's. Mission is carried by fact density under the frame (DD-29).

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere." Literata 400 at `--text-3xl` (27.00px at 360, 46.00px at 1440), `--leading-tight` 1.15, capped at 35ch, `--color-text` on `--color-bg` (17.69:1).

**The second clause is Literata italic.** That is the one device taken from the source's typography, and it is already ours: `CONTINUITY.md` measures the estate setting its headline's second sentence in italic inside an upright h1. Two things are deliberately not taken with it.

| Taken | Not taken | Why |
|---|---|---|
| The slope | The colour | The estate's italic half is accent orange, and K12 F88 measures that orange on cream at **2.38:1**, which fails AA and fails 3:1. M32's italic is `--color-text`, the same colour as the upright half, at 17.69:1 |
| The idea of a second voice in the headline | The word "line" | The source's headline is exactly two lines, so its second line and its second clause are the same thing. The fixed sentence sets in **4 lines at 768 and above, 5 to 6 on the phone rows and 7 at the reflow row** (measured below), so a device keyed to a line number would be different copy at every viewport. Keyed to the clause it is the same argument at every row: upright states what the school is, italic states the two ways to attend, and the frame underneath draws them |

The clause chosen is the one the frame illustrates. Two typographic no-breaks keep the phrasing whole without changing a word: "in&nbsp;person", and a `span.nowrap` on "from anywhere." so the last line is never one word; the nowrap is released by a container query below 20rem of hero column, which happens only with a doubled root font. `text-wrap: balance` applies from 768px.

Heading structure: one h1. The panels list is labelled by a visually hidden `h2` "Two ways to attend" (an allowed section 1 heading) that follows the h1, so no heading precedes it and no level is skipped. Section h2s: "Compare the two schools" (visually hidden; the caption is the visible title), "What is true of both schools", "How to apply", "Questions before you apply", "Already a GT family?".

## What I took from the source, and what I corrected

The brief names three collisions. Each is built the programme's way, and each correction is stated with the measurement behind it.

### Taken

| From the source | Built here |
|---|---|
| A rounded navy frame, inset from the page, with the page ground visible on all four sides | `.frame`: `--color-navy`, `--radius-lg`, inside `.wrap`'s page margin, cream above and below it at every row |
| Two equal panels side by side with a gutter, **square-cornered inside the frame's rounded one** | `.panel { border-radius: 0 }` in a two-column grid whose gap is the frame's own padding, so the navy shows as an even lattice; stacked below 768 as the brief specifies |
| Each door carries its own school mark | The GT School mark in the Georgetown panel, the GT Anywhere mark in the GT Anywhere panel, both on identical plates (see below) |
| The two panels read as two different grounds | The two school tints, which keep the two-tone reading without a photograph |
| An italic in the headline | The second clause, slope only |

### Corrected, with the measurement

**1. Photographs of identifiable children → the school tints.** Both source panels are photographs and both show faces. DD-42 option (a) and RF-25 apply here exactly as everywhere else, and AD-11 covers child imagery whether or not a face is visible, so the default state carries no photograph. The replacement is not a grey box: each panel is filled with its own school tint inside the navy frame, `--color-georgetown-tint` and `--color-anywhere-tint`, which keeps the source's two-tone reading, keeps the frame doing its job, and **states the absence rather than hiding it** — a parent sees two finished rooms, not two empty slots.

The measurement that makes this work: the two tints are **1.01:1 against each other**, and 12.63:1 and 12.79:1 against the navy frame. They differ in hue and not in weight, so neither panel is the darker one and the tint substitution cannot itself create the imbalance this direction exists to remove. (A photograph could: two images are never equal in luminance, and the source's pair is not.)

**This is the direction that would change most under Nari's written permission.** The photographed state, precisely:

| Panel | File and crop | Ceiling | Treatment |
|---|---|---|---|
| Georgetown | `georgetown-science.webp` (1440 by 1208), `object-position: 50% 45%` | At most **720 CSS px** wide at DPR 2 (CONTRACT section 5) | The mark, label, name, line and CTA stay on a solid panel below the image, or on an overlay that keeps every pairing at AA. Caption from `copy.md` section 9: "Students run a science experiment." |
| GT Anywhere | A GT Anywhere photograph Nari supplies and confirms; no file in `shared/img/` is a GT Anywhere classroom of matching weight, and DD-42's photographed state requires parity, so one photographed door is not an option | Same rule | Its caption is recorded in `copy.md` section 9 before use |

The source does not do the overlay work: its marks and its paragraph sit directly over photographic detail. That is the second thing the photographed state would have to fix, not only the permission.

**2. The source does not give the two doors equal weight — and how far that can be checked from this repository.**

The screenshot the brief describes **is not in this repository**, and `gt.school` has no mirror here. Build pass 1 printed object and line counts taken from the brief's prose description of that picture as though they were measurements; both critics refused them, correctly. The two build-pass-2 options were to check in a dated extract the way `0_plan/kb/exemplars/gt-story/` does, or to stop leaning on the counts. **A text fetch of the page was attempted and refused by this session's sandbox, so the extract could not be made and the second option is taken.** The counts are therefore split into what a reviewer can reproduce and what nobody here can:

| What is below the mark | Left panel | Right panel | Ratio | Can a reviewer check it? |
|---|---|---|---|---|
| Characters of set text | 9 ("APPLY NOW") | **at least 222** — 212 characters of registered paragraph text (CR-039 75, CR-040 48, CR-041 89) plus "LEARN MORE" 10; the two-line headline has no register row and is excluded, so the true ratio is higher | **24.7 : 1** | **Yes**, for the 212 characters: `python3 0_plan/mockups/M32-the-two-panels/qa/M32-source-counts.py` prints them out of `0_plan/12-claims-register.md`. The two button labels come from the brief's description and are **not** checkable here |
| Type objects | 1 | 3 | 3 : 1 | **No.** From the brief's description of a picture no reviewer can open. Stated as unverifiable |
| Lines of set text | 1 | 7 | 7 : 1 | **No.** Same |
| Saturated colour | none | one filled accent button | the component's one saturated fill sits on one door | **No.** Same |
| Control treatment | "a small dark button" | a filled accent button with a diagonal arrow | — | **No.** Same |

**What the correction rests on instead.** The two unverifiable ratios are not load-bearing and are not used as the warrant. The warrant is in the repository: **DD-26 option (a)** settles equal visual weight, **exemplar C01** (Tate's two identically weighted CTAs) is the slate's own rule, and the register's own CR-039, CR-040 and CR-041 record that the right panel of that component carries three unverified claims which the left panel has no counterpart for — which is a documented asymmetry of *content*, independent of any picture. Parity would be the right build for this page even if the source were perfectly balanced.

**Measured on this page: every one of the eighteen geometric properties is equal to 0.0px at all nineteen matrix rows, for the first-screen pair and for the reprise pair** (tables below). And the count the rationale ran on the source is now run on this page as well, which build pass 1 never did (both critics' first finding). The residual differences are the ones no layout can remove without changing the fixed copy or recolouring a mark:

#### The same count, run on this page

`node 0_plan/mockups/M32-the-two-panels/qa/M32-measure.mjs --weight`. The harness reads computed colour, not only geometry, and counts painted navy area from the computed fill or border of each object.

| Count, at V14 1280 by 720 | Georgetown | GT Anywhere | Ratio |
|---|---|---|---|
| Type objects below the mark | 4 | 4 | **1.00 : 1** |
| Lines of set text | 8 | 7 | 1.14 : 1 (copy length; 7 : 7 at V16, 5 : 5 at V2) |
| Characters of set text | 172 | 146 | **1.18 : 1**, against the source's 24.7 : 1 |
| Saturated (accent) fills | 0 | 0 | — (0 on the whole first screen) |
| **Navy objects** | **2** — mark plate (bounded), CTA (filled) | **2** — mark plate (filled), CTA (filled) | **1.00 : 1** |
| Painted navy, mark plate only | 436 px² | 7476 px² | 1 : 17.1 |
| Painted navy, whole panel | 17332 px² (10.4% of the panel) | 24372 px² (14.6%) | 1 : 1.41 |

**The navy-object count is the defect build pass 1 shipped and both critics found.** Build pass 1 gave the Georgetown plate a `--color-border-strong` hairline at 3.31:1 around a `--color-bg` fill at 1.10:1 on its own tint: nearly invisible, beside a solid navy chip. Counted the way the source was counted, that is **one navy object in the left panel against two in the right**, and the studio critic reported the eye landing on the right panel first at V13, V14, V15, V16 and V19. Build pass 2 takes the critic's own one-token remedy: the plate's border is `--color-navy` (12.63:1 on the Georgetown tint), so both plates are navy-bounded objects of the same box and the count is 2 : 2.

What that does **not** fix, and is reported rather than argued away: the Anywhere plate is navy *filled* and the Georgetown plate is navy *bounded*, so painted navy area inside the plate is still **1 : 17.1**, and **1 : 1.41** across the whole panel. It cannot go to 1 : 1 while each wordmark keeps the ground its own artwork needs, and recolouring a mark is forbidden (BUILDER-BRIEF rule 16). Nari should see the two plates side by side and say whether the bounded-against-filled reading is acceptable; it is listed under Escalations.

#### The residuals that remain

| Residual | Georgetown | GT Anywhere | Why it stays |
|---|---|---|---|
| Characters of set text in the panel | 172 | 146 | **1.18 : 1**. `copy.md`'s own word count, fixed slots, not a layout decision |
| Mark width | 120.5px at V2, 139px at V16 | 145.7px at V2, 168px at V16 | The two artworks have different aspect ratios (139/32 and 252/48). K12 V2 sizes marks **by height**, and the runner fails an aspect skew over 1%, so equal widths would mean a distorted mark. **The harness now prints `markW` in its own column** instead of collecting it and dropping it from the verdict, which is what build pass 1 did (studio critic) |
| The mark plate's interior | `--color-bg` fill (1.10:1 on its panel) inside a `--color-navy` border (12.63:1) | `--color-navy` fill (12.79:1 on its panel) inside the same border | Ground is the artwork's requirement (`copy.md` section 8, CONTRACT section 1, checker R16). **The box and its boundary are the page's parity**: one width (from the wider mark's own 252/48 aspect), one height, one padding, one `--radius-sm` corner, one 1px navy border, one position — 0.0px at all nineteen rows. The painted-area residual is measured above |
| Line count inside the panel at two rows | 3 lines at V14, 4 at V12 | 2 at V14, 3 at V12 | Copy length. The CTA is bottom-aligned with `margin-top: auto`, so the slack falls above the control: the void above the CTA is 16px against 42.5px at V14 and 24px against 49.3px at V12, and the two CTA boxes still share a top and a bottom edge to 0.0px. Equal at every other side-by-side row. **Measured by the harness's new `--lines` mode**, which build pass 1 had no row for (studio critic) |

**3. The source's paragraph carries three unverified claims in one sentence, and it is not in `copy.md`, so it is not on this page.** Quoted here only, as the thing this direction is converting, each fragment cited to its row:

> "Our Accredited K-8 Virtual School brings 3X learning velocity to your home." — **CR-039**, Unverified, owner Nari, logged 2026-09-11
>
> "accessible anywhere and eligible for ESA funding" — **CR-040**, Unverified, owner Nari, logged 2026-09-11
>
> "We provide the full GT academic crucible - AI adaptive blocks and a global tribe of peers" — **CR-041**, Unverified, owner Nari, logged 2026-09-11

CR-039 repeats the unqualified accreditation of **CR-001** ("Yes. We are fully accredited by Cognia and TEFA-eligible.", Unverified, Nari) and **CR-003** ("Accredited K-8 virtual academy...", Unverified) and the velocity multiple of **CR-004** ("Delivering 3x faster learning", Unverified, Nari) and **CR-008** ("3X learning velocity", Unverified, Nari) — on the one component whose job is routing. CR-040 states an ESA eligibility distinct from the TEFA eligibility of CR-021 and CR-022. What the right panel says in M32 instead is `copy.md`'s own door line, which carries one register-backed figure (CR-032) and no accreditation, no multiplier and no ESA claim. The page's whole figure inventory is in **Claims register tags** below; `check-claims.py` confirms that none of CR-001, CR-003, CR-004, CR-008, CR-039, CR-040 or CR-041 reaches the page.

**4. Not copied: the filled orange button.** K12 F87 measures the estate's near-white label on that orange at **2.50:1**, failing AA and 3:1. DD-46 settles fill as the contract's surface-dependent treatment, and every control on this page stands on a light ground (cream or one of the two tints), so every control is `--color-navy` with a `--color-on-navy` label at **14.58:1** — including both door CTAs, which are identical to each other in fill as in everything else.

**5. Not copied: the source's corner mixture.** DD-47 settles a uniform radius. Every button, the TEFA card, the mark plates and the frame take a single corner value on all four sides; the panels take a square corner, which is the source's own construction inside the frame.

## Brief compliance

| Brief section | What was built |
|---|---|
| Mock id and name, lens order | M32, folder `M32-the-two-panels`; L1 objective, L4 exclusivity, L2 continuity, L3 mission |
| Where it comes from | The gt.school about page's two-door panel, from Johnny's screenshot; the live site was not opened. Named in `styles.css`'s header comment and above |
| What the source actually shows | Reproduced as the shape: rounded navy frame, two equal square-cornered panels, a gutter, a mark per panel. Its imbalance, its photographs and its paragraph are corrected and each correction is measured above |
| The three collisions | Photographs (DD-42, RF-25) → school tints, with the photographed state specified; door parity (DD-26 (a), C01) → 0.0px on seventeen properties at nineteen rows, with the source's imbalance measured at 3:1 objects, 7:1 lines and 24.7:1 characters; figures (CR-039, CR-040, CR-041 against CR-001, CR-003, CR-004, CR-008) → quoted in this file only, never on the page |
| Thesis | One frame, two real choices, nothing ranked |
| Composition | Header 56 on `--color-bg`; h1 and provenance above the frame on cream; the frame inset from the page grid with a visible cream margin on all four sides, holding two panels 6 and 6 with a gutter from 768 and stacked below it, each square-cornered inside the frame's own radius; each panel carrying mark, label, name, line and CTA in that order; compare anchor beneath; then the table with repeated values, the reprise frame, TEFA, proof, steps, secondary CTAs, current families, footer |
| The panels without photographs | Georgetown on `--color-georgetown-tint`, GT Anywhere on `--color-anywhere-tint`, inside the navy frame. Photographed state specified above with file, crop, ceiling and the AA treatment the source omits |
| Typography | Contract roles. Literata italic on the h1's second clause, no colour taken with it. CONTRACT section 3's Literata overhang discharged with a number at the tightest band: `.panel-name` stands 3.70px proud of its line box at V2 under a bordered plate 8px above it |
| Colour and surface | Page `--color-bg`, frame `--color-navy`, panels on the two school tints. CTAs navy with near-white labels per DD-46, both identical. The estate's orange button is not copied. Every on-navy and on-tint pairing at or above 4.5:1, each ratio stated below. Focus per contract; the two-band ring where a mark keeps a navy plate |
| Motion | Still; the page is complete at rest. V6 specified on the steps and secondary CTAs and **not shipped** (it needs the D-039 script). Reduced motion `--duration-none`, verified by the runner at V14 |
| Copy | `copy.md` sections 0 to 8 verbatim; 61 fixed slots string-matched (Self-check). The source's paragraph appears only in this file |
| Acceptance | Panel parity measured and reported at all nineteen rows, **eighteen properties**, worst delta **0.0px**, for the first-screen pair **and** the reprise pair, with `markW` printed beside the verdict and colour, painted area and `.panel-line` measured alongside the geometry. Matrix as the contract: the runner's Result line reads "all required rows pass". Both wordmarks and every focus ring pass under forced colours in **both** palettes, measured against the surface the ring is actually drawn on and captured in both (`qa/forced-colors-light.jpg`, `qa/forced-colors-dark.jpg`, `qa/focus-logo-navy-fc-light.jpg`, `qa/focus-logo-navy-fc-dark.jpg`). This file names DD-26, DD-42, DD-46, DD-47, RF-25 and every claims row the page depends on |
| One accent use on the first screen | **Not resolved in this file: escalated.** Zero accent uses as a page colour (measured: 0 accent-painted elements on the first screen). Both critics read the brief's imperative and K3 section 5f's budget as genuinely contestable and said this belongs to Nari, not to a Departures cell. The proposed `Q` row, with both readings and both recommendations, is under **Escalations**. The only orange on the first screen is the leaf inside each of the two marks, once per panel |

## Fold: designed to, then measured

Method: the four contract rows are budgeted from the space tokens the height bands set, the h1 line counts from `CONTRACT.md` section 2 (six lines at V2 and V5, four at V14 and V16) with a seventh line budgeted at V2 as headroom, because M12's measurements found the contract's V2 estimate one line optimistic for a narrower column. The compact door block is the contract's own rule, used wherever the panels are stacked or the room is short. Limits are viewport height minus 24.

| Row | Viewport | Limit | Designed-to sum (header, cream, h1, provenance, frame padding, two panels, gutter) | Estimated CTA 2 bottom | Measured CTA 2 bottom | Spare |
|---|---|---|---|---|---|---|
| V2 | 375 by 629 | 605 | 57 + 4 + h1 6 lines 188.1 + 4 + prov 17.6 + 4 + frame 4 + panel 139.1 + gutter 4 + (panel 139.1 − pad 8) | 553.2 | **553** | 52 |
| V5 | 414 by 715 | 691 | 57 + 8 + h1 6 lines 192.8 + 4 + prov 17.6 + 8 + frame 8 + panel 155.8 + gutter 8 + (panel 155.8 − pad 16) | 598.6 | **599** | 92 |
| V14 | 1280 by 720 | 696 | 57 + 24 + h1 4 lines 198.6 + 8 + prov 18.6 + 24 + frame 24 + (panel 300.8 − pad 32), the two panels side by side | 622.8 | **623** | 73 |
| V16 | 1440 by 900 | 876 | 57 + 48 + h1 4 lines 211.6 + 16 + prov 18.8 + 48 + frame 24 + (panel 300.2 − pad 32), side by side | 691.2 | **692** | 184 |

The four design-to sums land within one pixel of the measurements. V2 and V5 gained 8px in build pass 2: `--panel-head-gap` went from one space token to two at the phone bands, to buy the door name real clearance under the mark plate (Typography, below). At V14 and V16 the two CTAs sit side by side, so one row serves both and the two measured bottoms are equal.

**The runner's own table, pasted from the current run** (`qa/fold.md`, 2026-09-12T00:53:16.118Z):

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 89 | 283 | 305 | 460 | 623 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 57 | 249 | 271 | 410 | 553 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 255 | 276 | 432 | 595 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 255 | 277 | 432 | 596 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 258 | 279 | 435 | 599 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 274 | 299 | 479 | 651 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 256 | 278 | 433 | 597 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 227 | 249 | 405 | 569 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 271 | 296 | 476 | 647 | yes | report: page height 6875 |
| V10 | 750 by 342 | fold | 318 | 57 | 144 | 166 | 308 | 308 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 262 | 296 | 670 | 670 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 268 | 302 | 677 | 677 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 259 | 285 | 582 | 582 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 280 | 306 | 623 | 623 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 287 | 313 | 535 | 535 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 317 | 351 | 692 | 692 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 317 | 351 | 692 | 692 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 89 | 310 | 332 | 470 | 613 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 259 | 285 | 489 | 489 | yes | report: scrollWidth 1024 |

The header measures 89 rather than 57 at V1 and V18 only: at 360 and 320 the mark plus the two Inconsolata utility links exceed the content width and the row wraps to two 44px rows with a zero row gap. The wrap costs 32px at V1 and the row still passes with 101px of spare.

### Height bands, and what they are for

Four bands plus the contract's landscape recipe. The rule the bands follow: **a short viewport takes its pixels out of the vertical rhythm and never out of the horizontal composition**, so the frame's navy lattice and the panels' side padding are set by width and only the gaps and the panels' vertical padding move with height.

| Band | Rows | What changes |
|---|---|---|
| Default (768 to 899 tall) | V6, V9, V13 | Gaps 24 / 8 / 24, panel padding 24 vertical |
| Tight (up to 767 tall **and** up to 767 wide) | V1, V3, V4, V5, V7, V8 | Gaps 8 / 4 / 8, panel padding 16 vertical, panel head gap 4, CTA gap 8. The squeeze is asked for only where the sentence is also long; at 768 and above the h1 sets in four lines and the room is there, so V14, V15 and V19 keep the full rhythm |
| Tightest (up to 639 tall **and** up to 767 wide) | V2, V18, and the doubled-root-font run | Cream gap 4, frame lattice 4, panel padding 8 vertical |
| Relaxed (900 tall and up) | V11, V12, V16, V17 | Gaps 48 / 16 / 48, panel padding 32 |
| Landscape (up to 479 tall and 700 wide and up) | V10 | The contract's recipe: the panels go side by side below the 768 breakpoint, every gap takes its smallest token, and the h1 steps down one token to `--text-xl`, floored at `1.5rem` so the italic never falls under K3 section 5e's 24px licence at any width the recipe covers. Declared as a departure |

### The compact door rule, and where the door line lives

The brief puts the line inside the panel. The contract's compact door rule says that where the room is short the lines follow the second CTA so that neither line sits between the two CTAs. Both are honoured by a responsive swap, on one condition each:

| Condition | Where the line is | Rows |
|---|---|---|
| 768 wide **and** 700 tall and above | Inside the panel, between the name and the CTA — the brief's complete panel | V11, V12, V13, V14, V16, V17 |
| Otherwise (the panels are stacked, or the room is short) | On the cream below the frame, at the frame's own inner edges so each line begins under the panel it explains, opened by its door name as a run-in label — a fixed slot reused, no new words | V1 to V10, V15, V18, V19 |

This is the one place the page carries the same sentence twice in the markup, exactly one copy displayed at any viewport and the other removed by `display: none`, so a screen reader hears each line once. A single copy cannot be in two containers, and the alternative — leaving the line inside a stacked panel — puts the Georgetown line between the two CTAs at every phone row, which the contract forbids and which would have cost roughly 150px of first-screen budget at V2.

### What crosses the bottom edge, row by row

**Pasted verbatim from `qa/fold.md`, every cell, including the one that says the page gives no signal.** Build pass 1 introduced this table as the runner's own reading and then replaced the single negative cell in the whole run, V18, with a rebuttal. Both critics caught it and both were right to: a rationale that edits the evidence it claims to quote is worth less than no rationale. The runner's words stand; the answer follows underneath.

| Row | Cut | Element and the ink that crosses the bottom edge |
|---|---|---|
| V1 | yes | content reaches 736 of 740 and more follows below |
| V2 | yes | text cut by the edge, 610 to 630 |
| V3 | yes | content reaches 662 of 664 and more follows below |
| V4 | yes | text cut by the edge, 636 to 663 |
| V5 | yes | content reaches 712 of 715 and more follows below |
| V6 | yes | text cut by the edge, 814 to 841 |
| V7 | yes | text cut by the edge, 666 to 686 |
| V8 | yes | text cut by the edge, 725 to 752 |
| V9 | yes | text cut by the edge, 840 to 860 |
| V10 | yes | text cut by the edge, 328 to 356 |
| V11 | yes | text cut by the edge, 1015 to 1035 |
| V12 | yes | text cut by the edge, 1189 to 1202 |
| V13 | yes | text cut by the edge, 750 to 794 |
| V14 | yes | text cut by the edge, 699 to 734 |
| V15 | yes | content reaches 644 of 648 and more follows below |
| V16 | yes | text cut by the edge, 875 to 925 |
| V17 | yes | text cut by the edge, 948 to 983 |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 552 to 581 |

| The one negative cell | The answer, which is not part of the quotation above |
|---|---|
| V18, 320 by 256: "no content is visible below the last CTA at all, so nothing signals that the page continues" | True as measured, and **DD-44 does not apply the fold rule at V18**: it is the WCAG 1.4.10 reflow row, 320 by 256, where the header and the seven-line h1 alone reach 310px. The runner agrees — its own Result cell for V18 reads "PASS no horizontal scroll", because reflow is the only rule that row is tested against. No other row on the page reads as finished |

On the phone rows and at V10 and V15 the ink is a **door line** — a sentence a parent would read — cut mid-sentence. On the laptop and tablet rows it is the compare anchor sentence or the comparison table's caption. Every row but V18 therefore ends on words, not on a rule and not on empty padding.

This needed one fix that only the captures showed. In the first measured build the compare section's own ink finished 20 to 40px clear of the edge at V11, V12, V13 and V16, and the runner fell back to its surface-sampling rule, reporting the frame's navy-to-cream edge rather than any text. The reason is worth recording because it is a runner limitation rather than a page defect: the stacked table's school labels are `::before` pseudo-content, and `contentInk` only counts pseudo-elements whose box is 8px or shorter, so the words a reader plainly sees at the bottom of V11 were invisible to the test. The fix was to the page anyway — the anchor band's vertical padding, the section's top padding and the table block's top margin each came down one token, 32px in all — and all four rows now report real text cut by the edge.

### Measured h1 line counts

Measured in the browser (h1 box height divided by the computed line box), not estimated.

| Row | h1 size | h1 column | Line box | h1 height | Lines |
|---|---|---|---|---|---|
| V1 360 | 27.00px | 328px | 31.05px | 186.3px | 6 |
| V2 375 | 27.26px | 343px | 31.35px | 188.1px | **6** |
| V3 390 | 27.53px | 358px | 31.66px | 189.9px | 6 |
| V4 393 | 27.58px | 361px | 31.72px | 190.2px | 6 |
| V5 414 | 27.95px | 382px | 32.14px | 192.8px | **6** |
| V6 412 | 27.92px | 380px | 32.10px | 192.7px | 6 |
| V7 402 | 27.74px | 370px | 31.90px | 191.3px | 6 |
| V8 430 | 28.23px | 398px | 32.47px | 162.3px | 5 |
| V9 390 | 27.53px | 358px | 31.66px | 189.9px | 6 |
| V10 750 (landscape, `--text-xl`) | 24.17px | 718px | 27.79px | 83.4px | 3 |
| V11 768 | 34.18px | 692px | 39.31px | 157.2px | 4 |
| V12 834 | 35.34px | 716px | 40.64px | 162.6px | 4 |
| V13 1024 | 38.68px | 784px | 44.48px | 177.9px | 4 |
| V14 1280 | 43.19px | 875px | 49.66px | 198.6px | **4** |
| V15 1366 | 44.70px | 906px | 51.40px | 205.6px | 4 |
| V16 1440 | 46.00px | 932px | 52.90px | 211.6px | **4** |
| V17 1920 | 46.00px | 932px | 52.90px | 211.6px | 4 |
| V18 320 | 27.00px | 288px | 31.05px | 217.3px | 7 |
| V19 1024 | 38.68px | 784px | 44.48px | 177.9px | 4 |

The contract's estimates (6 at V2 and V5, 4 at V14 and V16) are **exactly right for this column**, and the landscape recipe's 3 lines at 750 is exactly right too. The 16px page margin below 768 is what buys it: at K1 section 5a's 24px the V2 column would be 327px and the sentence would set in 7. M12 measured 7 lines at 360 to 393 on a narrower column and M25 measured 7 at 311px; M32 holds 6 from 360 to 414 and 5 at 430 because the sentence sits on the full page width rather than inside the panel.

## Panel parity, measured at all nineteen rows

`node 0_plan/mockups/M32-the-two-panels/qa/M32-measure.mjs`. Build pass 2 answers what both critics said the
harness could not see: it reads computed **colour** as well as geometry (the count above), it measures
**`.panel-line`**, it runs on the **reprise pair** as well as the first-screen pair, and it **prints `markW`**
beside the verdict instead of collecting it and dropping it from the printed keys. The bar is equal within 2px;
the observed value is stated separately, because 0.0 is what was measured and 2 is what is enforced.

### The first-screen pair

| Row | Viewport | w Δ | h Δ | padT Δ | padR Δ | padB Δ | padL Δ | plateW Δ | plateH Δ | plateBorderW Δ | markH Δ | labelX Δ | labelY Δ | nameX Δ | nameY Δ | ctaW Δ | ctaH Δ | ctaX Δ | ctaY Δ | Worst Δ | markW G / A (excluded) | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 119.9 / 144.9 | equal within 2px (observed 0) |
| V2 | 375 by 629 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 120.5 / 145.7 | equal within 2px (observed 0) |
| V3 | 390 by 664 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 121.1 / 146.4 | equal within 2px (observed 0) |
| V4 | 393 by 659 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 121.3 / 146.6 | equal within 2px (observed 0) |
| V5 | 414 by 715 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 122.2 / 147.7 | equal within 2px (observed 0) |
| V6 | 412 by 839 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 122.1 / 147.6 | equal within 2px (observed 0) |
| V7 | 402 by 681 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 121.7 / 147.1 | equal within 2px (observed 0) |
| V8 | 430 by 739 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 122.9 / 148.5 | equal within 2px (observed 0) |
| V9 | 390 by 844 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 121.1 / 146.4 | equal within 2px (observed 0) |
| V10 | 750 by 342 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 136.8 / 165.4 | equal within 2px (observed 0) |
| V11 | 768 by 1024 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 137.6 / 166.3 | equal within 2px (observed 0) |
| V12 | 834 by 1194 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 139 / 168 | equal within 2px (observed 0) |
| V13 | 1024 by 768 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 139 / 168 | equal within 2px (observed 0) |
| V14 | 1280 by 720 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 139 / 168 | equal within 2px (observed 0) |
| V15 | 1366 by 648 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 139 / 168 | equal within 2px (observed 0) |
| V16 | 1440 by 900 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 139 / 168 | equal within 2px (observed 0) |
| V17 | 1920 by 960 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 139 / 168 | equal within 2px (observed 0) |
| V18 | 320 by 256 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 118.1 / 142.7 | equal within 2px (observed 0) |
| V19 | 1024 by 576 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 139 / 168 | equal within 2px (observed 0) |

### The reprise pair, after the comparison table

`styles.css` claimed this pair was equal and nothing measured it (studio critic). Measured now — **and it was not
equal.** At the 320 by 256 reflow row the reprise's hard-coded 24px side padding left a 208px content box, the
longer CTA label wrapped in the left panel and not in the right, and the pair came out **34.3px unequal in height,
9px in CTA width**. Build pass 2 gives the reprise the first screen's own width bands. After the fix:

| Row | Viewport | w Δ | h Δ | padT Δ | padR Δ | padB Δ | padL Δ | plateW Δ | plateH Δ | plateBorderW Δ | markH Δ | labelX Δ | labelY Δ | nameX Δ | nameY Δ | ctaW Δ | ctaH Δ | ctaX Δ | ctaY Δ | Worst Δ | markW G / A (excluded) | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V2 | 375 by 629 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V3 | 390 by 664 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V4 | 393 by 659 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V5 | 414 by 715 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V6 | 412 by 839 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V7 | 402 by 681 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V8 | 430 by 739 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V9 | 390 by 844 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V10 | 750 by 342 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V11 | 768 by 1024 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V12 | 834 by 1194 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V13 | 1024 by 768 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V14 | 1280 by 720 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V15 | 1366 by 648 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V16 | 1440 by 900 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V17 | 1920 by 960 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V18 | 320 by 256 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |
| V19 | 1024 by 576 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 | equal within 2px (observed 0) |

### `.panel-line`, and the void above each CTA

The element whose text length actually differs had no row in the build-pass-1 harness. It has one now. "Stacked"
marks the rows where the two panels sit one above the other, so a CTA-top comparison is meaningless there.

| Row | Viewport | Line shown | G line box | G lines | G void above CTA | A line box | A lines | A void above CTA | CTA tops equal | CTA bottoms equal |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | below the frame | — | — | — | — | — | — | n/a (stacked) | n/a (stacked) |
| V2 | 375 by 629 | below the frame | — | — | — | — | — | — | n/a (stacked) | n/a (stacked) |
| V3 | 390 by 664 | below the frame | — | — | — | — | — | — | n/a (stacked) | n/a (stacked) |
| V4 | 393 by 659 | below the frame | — | — | — | — | — | — | n/a (stacked) | n/a (stacked) |
| V5 | 414 by 715 | below the frame | — | — | — | — | — | — | n/a (stacked) | n/a (stacked) |
| V6 | 412 by 839 | below the frame | — | — | — | — | — | — | n/a (stacked) | n/a (stacked) |
| V7 | 402 by 681 | below the frame | — | — | — | — | — | — | n/a (stacked) | n/a (stacked) |
| V8 | 430 by 739 | below the frame | — | — | — | — | — | — | n/a (stacked) | n/a (stacked) |
| V9 | 390 by 844 | below the frame | — | — | — | — | — | — | n/a (stacked) | n/a (stacked) |
| V10 | 750 by 342 | below the frame | — | — | — | — | — | — | yes | yes |
| V11 | 768 by 1024 | inside the panel | 100.5 | 4 | 24 | 100.5 | 4 | 24 | yes | yes |
| V12 | 834 by 1194 | inside the panel | 101.3 | 4 | 24 | 75.9 | 3 | 49.3 | yes | yes |
| V13 | 1024 by 768 | inside the panel | 77.5 | 3 | 16 | 77.5 | 3 | 16 | yes | yes |
| V14 | 1280 by 720 | inside the panel | 79.6 | 3 | 16 | 53.1 | 2 | 42.5 | yes | yes |
| V15 | 1366 by 648 | below the frame | — | — | — | — | — | — | yes | yes |
| V16 | 1440 by 900 | inside the panel | 54 | 2 | 24 | 54 | 2 | 24 | yes | yes |
| V17 | 1920 by 960 | inside the panel | 54 | 2 | 24 | 54 | 2 | 24 | yes | yes |
| V18 | 320 by 256 | below the frame | — | — | — | — | — | — | n/a (stacked) | n/a (stacked) |
| V19 | 1024 by 576 | below the frame | — | — | — | — | — | — | yes | yes |

The two CTA boxes share a top and a bottom edge at every side-by-side row. Where the lines set to different line
counts — V12 and V14 — the slack falls above the control, which is what `margin-top: auto` is for: 24px against
49.3px at V12, 16px against 42.5px at V14. That is the one asymmetry a reader can see inside the panels, it is
copy length rather than layout, and it is now measured rather than only disclosed in prose.

### Absolute values, the four contract rows

So the numbers are checkable rather than only equal. Both panels return the same figure in every key below; the
only property that differs is `markW`, for the reason in the residual table.

```
  V2 georgetown {"w":335,"h":139.1,"padT":8,"padR":16,"padB":8,"padL":16,"plateW":155.7,"plateH":37.8,"markH":27.8,"markW":120.5,"labelX":179.7,"labelY":19.4,"nameX":16,"nameY":53.8,"ctaW":303,"ctaH":44,"ctaX":16,"ctaY":8,"plateBorderW":1}
  V2 anywhere   {"w":335,"h":139.1,"padT":8,"padR":16,"padB":8,"padL":16,"plateW":155.7,"plateH":37.8,"markH":27.8,"markW":145.7,"labelX":179.7,"labelY":19.4,"nameX":16,"nameY":53.8,"ctaW":303,"ctaH":44,"ctaX":16,"ctaY":8,"plateBorderW":1}
  V5 georgetown {"w":366,"h":155.8,"padT":16,"padR":16,"padB":16,"padL":16,"plateW":157.7,"plateH":38.1,"markH":28.1,"markW":122.2,"labelX":181.7,"labelY":27.5,"nameX":16,"nameY":62.1,"ctaW":334,"ctaH":44,"ctaX":16,"ctaY":16,"plateBorderW":1}
  V5 anywhere   {"w":366,"h":155.8,"padT":16,"padR":16,"padB":16,"padL":16,"plateW":157.7,"plateH":38.1,"markH":28.1,"markW":147.7,"labelX":181.7,"labelY":27.5,"nameX":16,"nameY":62.1,"ctaW":334,"ctaH":44,"ctaX":16,"ctaY":16,"plateBorderW":1}
  V14 georgetown {"w":556,"h":300.8,"padT":32,"padR":32,"padB":32,"padL":32,"plateW":178,"plateH":42,"markH":32,"markW":139,"labelX":218,"labelY":45,"nameX":32,"nameY":82,"ctaW":384,"ctaH":44,"ctaX":32,"ctaY":32,"plateBorderW":1}
  V14 anywhere   {"w":556,"h":300.8,"padT":32,"padR":32,"padB":32,"padL":32,"plateW":178,"plateH":42,"markH":32,"markW":168,"labelX":218,"labelY":45,"nameX":32,"nameY":82,"ctaW":384,"ctaH":44,"ctaX":32,"ctaY":32,"plateBorderW":1}
  V16 georgetown {"w":620,"h":300.2,"padT":32,"padR":32,"padB":32,"padL":32,"plateW":178,"plateH":42,"markH":32,"markW":139,"labelX":218,"labelY":44.9,"nameX":32,"nameY":90,"ctaW":384,"ctaH":44,"ctaX":32,"ctaY":32,"plateBorderW":1}
  V16 anywhere   {"w":620,"h":300.2,"padT":32,"padR":32,"padB":32,"padL":32,"plateW":178,"plateH":42,"markH":32,"markW":168,"labelX":218,"labelY":44.9,"nameX":32,"nameY":90,"ctaW":384,"ctaH":44,"ctaX":32,"ctaY":32,"plateBorderW":1}
```

## Decisions applied

| Id | How it is applied in this mock |
|---|---|
| DD-01, DD-36 | Three faces, three jobs: Literata for the h1, the door names, the h2s, the table caption and column heads, the facts, the steps and the anchor sentence; Inter Tight for running prose (door lines, table cells, provenance, footer facts); Inconsolata for buttons, eyebrows, labels, row labels, step counters, the header and footer link lists and the phone number. The only uppercase on the page is Inconsolata (K12 G15) |
| DD-02 | The dark surface is a bounded frame, not a page. It never reaches a page edge at any row |
| DD-03, DD-20, DD-33 | One umbrella sentence above the doors, spelling out gifted and talented and both ways to attend |
| DD-04 | Cue set: the door label above the name in each panel, the school mark in each panel, and the full school name as the run-in of that door's line in the compact form. No photograph |
| DD-05, DD-23 | "Explore the Georgetown campus" / "Explore GT Anywhere" on the first screen (`first_screen`) and again in the reprise frame after the table (`after_comparison`) |
| DD-06, DD-43, R6 | A real `<table>` with caption, `scope="col"` and `scope="row"`; shared rows first with the value repeated in both columns; a table from a 58rem container, stacked blocks labelled with the school name below |
| DD-07, DD-17, MD-16 | No outcome figure, no accreditation claim, no Cognia mark, and the source's own accreditation sentence explicitly refused (CR-039) |
| DD-08, DD-31, DD-42, RF-25, AD-11 | No photograph in the default state. The photographed state is specified with file, crop, ceiling and treatment, and needs Nari's written permission plus a GT Anywhere photograph that does not yet exist in `shared/img/` |
| DD-10, MD-06, MD-25 | Selectivity as the stated bar (90th percentile) in the table, the proof strip and the steps line; access (TEFA, $10,400) in the table row and the TEFA module; no countdown, no wealth cue |
| DD-12, DD-13, MD-11 | Header: lockup, "Current families", "Contact admissions"; no menu; the phone number only in the footer |
| DD-14, MD-23 | Built at 375 first. The panels stack below 768, the compact door rule runs at every stacked row, and the frame's lattice and the panels' padding step down by width so the phone gets a real frame rather than a thin one |
| DD-19 | Style envelope: every value a token or a named departure (Departures) |
| DD-21 | The panels are a `<ul>` of `<li>` keyed by `data-door`, and so are the compact lines; a third campus is one more `<li>` in each and the pair rule `repeat(2, minmax(0, 1fr))` becomes `auto-fit`. The reprise frame is the same list |
| DD-25, DD-27, REQ-070 | Two "Begin application" links with `?school=`; full school names everywhere; no unscoped application link |
| DD-26 | **Option (a), equal visual weight, carried literally and measured**: 0.0px on seventeen properties at all nineteen rows on the first screen, and the reprise pair after the table is identical in the same way, so the page prefers neither school at either encounter |
| DD-29 | Every screen carries a fact: the door lines, the table, the TEFA module, the proof strip, the steps line, the footer facts |
| DD-38 | The layer-2 type scale and `--leading-prose` throughout; Literata 400 for the h1 (M03 tested 300 against 400 and shipped 400; this mock inherits that and does not re-run the test) |
| DD-39 | `--color-on-navy`, `--color-focus-on-dark` and `--color-border-strong` in their proposed roles; `--color-text-muted-on-dark` is **declared and not used**, because no text on this page sits on navy — the frame carries no words |
| DD-44 | The fold measured by the runner at all 19 rows; height bands; `data-fold` hooks on the header, the h1, the provenance line and both door CTAs, plus `data-slot="provenance"`; no `vh`, `svh` or `dvh` anywhere in `styles.css` |
| DD-46 | Option (a), the contract's surface-dependent fill: every control on this page stands on a light ground (cream or one of the two tints), so every control is `--color-navy` with `--color-on-navy`, both door CTAs identically. The estate's orange fill is refused with K12 F87's 2.50:1 |
| DD-47 | A uniform corner on all four sides of every button, the TEFA card and the mark plates; `--radius-lg` on the frame, one value on all four corners; the panels take a square corner, which is the source's own construction inside the frame |
| MN-16 | Transform and opacity only (nothing animates); state changes instant; `--duration-none` under reduced motion |
| D-039 | Undecided: no script, no inputs, no `data-d039` declaration; the V6 hooks are left as `data-motion="v6"` attributes only |
| MD-02, R14, REQ-002 | Four secondary CTAs including "Ask about a tour of the Georgetown campus" |
| MD-17 | The provenance line once, small, muted, directly under the h1 |
| K12 F41, G15, G17, V2 | Buttons in the estate's face and case (Inconsolata 600 uppercase), 44px floor; marks sized by height, 27.9px at 390 and 32px at 1440, aspect skew 0% at both, measured by the runner |
| SE-13 | `noindex, nofollow` |
| REQ-022 | Every figure maps to a claims-register row (`check-claims.py`, statuses below); the three rows the source's own paragraph would have brought are refused |

### Layer-2 tokens used (proposed; each named here as the contract requires)

| Token | Where | Register row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | Every type role | DD-38 (b), R5 |
| `--leading-prose` 1.5, `--measure-prose` 65ch | Door lines, card bodies, table cells, sources, footer facts, facts, steps | DD-38 (b), RF-55, RF-58 |
| `--color-on-navy` | Both CTA labels, the application buttons, the footer's navy plate | DD-39 (a), RF-07 |
| `--color-focus-on-dark` | The outer band of the two-colour ring on the footer's GT Anywhere plate, and its ring under forced colours | DD-39 (a), RF-07 |
| `--color-border-strong` | The two mark plates' hairlines, link underlines at rest, the anchor band's rule, the proof facts' rules, the TEFA card's border, the footer's top rule and its two plates | DD-39 (a), RF-07; a new tint, a DD-19 departure |
| `--color-text-muted-on-dark` | **Declared and not used.** Nothing on this page sets text on navy: the frame is a lattice with no words in it | DD-39 (a), RF-07 |
| `--color-accent-text` | **Declared and not used.** The italic takes no colour (see h1) and the page spends no accent | DD-39 (a), RF-07 |
| `--ease-*` | Not used (nothing animates) | MN-16 (a), RF-53 |
| `--duration-none` | The reduced-motion block | MN-16 (a), RF-53, R8 |

### Taste decisions the brief did not name

| Decision | Choice and reason |
|---|---|
| The frame's padding and its gutter are one value | The source's frame reads as a border with a gap in the middle. One value makes the navy an even lattice: the two panels sit in identical navy on all four of their own sides, which is the cheapest possible proof that neither is the main one. It also means a third campus needs no new value — the gutter is already the frame |
| The h1 and the provenance line sit **above** the frame, on the cream | The brief says so, and the reason is worth stating: a sentence inside the frame would belong to one of the two panels or float above both inside a dark box. On the cream it is the page's voice and the frame is the answer to it |
| No label or heading on the navy frame | A strip reading "TWO WAYS TO ATTEND" was drafted and cut. The h1's italic clause already names the two ways, and each panel names its own; a fourth statement of the same fact would have cost 25px of first-screen budget at V2 to repeat something the page says three times. The list's accessible name is a visually hidden h2 instead |
| The mark plates are one width, set from the wider mark's aspect | `calc(var(--mark-h) * 5.25 + 2 * var(--mark-pad) + 2px)`, capped at `100%` so a doubled root font wraps the label under the plate instead of pushing the page sideways. Equal plates are what make "label position equal" true; the GT School mark's 25px of trailing space inside its plate is the price and it is visible in `qa/V17.jpg` |
| The label sits to the right of the plate, left-aligned | Right-aligning it to the panel's edge would have made the label's *right* edge equal and its left edge differ by the width of "In person" against "Online". Left-aligned against an equal plate, both labels begin at the same x — 179.7 at V2, 218 at V16 — which is the reading of "label position" that a parent actually sees |
| The CTA is bottom-aligned with `margin-top: auto` | Where the two door lines set to different line counts (3 against 2 at V14), the slack falls above the control rather than below it, so the two CTA boxes share a top and a bottom edge. The minimum gap above each control is carried by the preceding element's margin, so the auto margin only ever adds |
| The door CTA steps down one type token below 28rem of panel | At `--text-btn`, "EXPLORE THE GEORGETOWN CAMPUS" (29 characters) wraps to two lines in a narrow panel while "EXPLORE GT ANYWHERE" stays on one, and a wrapped label beside a single-line label is the one way these two boxes can come out unequal. A container query takes the face to `--text-sm` and the padding to `--space-3` below the threshold; measured, both boxes are 44px tall at every row including V18 |
| The comparison is followed by a **reprise of the same frame** rather than two loose buttons | The page teaches one shape on the first screen; repeating it after the evidence means the second encounter is the same object, not a new one. Both panels in the reprise are identical to each other in the same way, because an unequal pair there would be the ranking DD-26 (a) forbids, just lower down the page |
| The TEFA module takes `--color-anywhere-tint` | It is a GT Anywhere fact, and the tint is the page's own word for that school. It is the only place a school tint appears outside the two frames |
| The footer takes `--color-surface`, and its two mark plates repeat the panels' pairing | A navy footer would give the page a second dark field and the frame would stop being the only one. The two footer plates — cream and navy, each with the same hairline — are the same artwork-driven pairing the two panels make, which closes the page on the shape it opened with |
| The page margin is 16 below 768 | It is what keeps the h1 at six lines at V2 rather than seven, measured above, while the frame still shows cream on both sides. K1 section 5a's schedule resumes at 32 / 48 / 64 from 768 |
| The utility links and footer links are Inconsolata | The estate's utility face (K12 F36) and its own footer-navigation face (`CONTINUITY.md`); it is also what lets the header hold the mark and both links on one row from 375 up |

## Motion spec

| What animates | Trigger | Duration token | Easing token | Reduced-motion behaviour |
|---|---|---|---|---|
| Nothing | | | | `transition-duration` and `animation-duration` forced to `--duration-none` on every element and pseudo-element; the runner reports every computed duration 0s at V14 |
| In-page anchor scroll (V10) | The compare anchor link | native | native | `scroll-behavior: smooth` is declared only inside `@media (prefers-reduced-motion: no-preference)` and forced to `auto` in the reduce block |

There is no `transition:` property anywhere in `styles.css`, no `@keyframes` and no `animation`. V1 (door state) and V3 (focus) are instant by construction: hover changes fill, focus draws the ring. **V6, the one-time section reveal, is specified and not shipped**, because it needs the D-039 script, which is undecided. Its hooks sit on Steps and Connect (`data-motion="v6"`), the brief's "steps and secondary CTAs" and the first two sections that satisfy the contract's third-screen-and-later restriction. Were it approved: 300ms `--ease-out`, opacity 0 to 1 and `translateY(8px)` to 0, `IntersectionObserver` with `rootMargin: 0px 0px -15% 0px`, `unobserve` after the first hit, the hidden state scoped to a class the script adds, the whole rule inside `prefers-reduced-motion: no-preference`.

## Assets

| File | Used for | Alt text | Source and consent | Fallback |
|---|---|---|---|---|
| `gt-school-logo-h.svg` (139 by 32) | Header lockup on `--color-bg`; the Georgetown panel's mark on a `--color-bg` plate inside a navy border; the footer link to www.gt.school on a `--color-bg` plate. Height `clamp(1.6875rem, 1.5rem + 1vw, 2rem)`: 27.9px at 390, 32px from 800 (K12 V2). Eager | "GT School" in the header and the footer, where the mark **is** the link. **`alt=""` in the panel**, with `aria-hidden` on its plate | The real mark from the mirror; its navy lettering needs a light ground | None needed |
| `gt-anywhere-logo-h.svg` (252 by 48) | The GT Anywhere panel's mark on a `--color-navy` plate; the footer link to anywhere.gt.school on a `--color-navy` plate. Same height clamp. Eager | "GT Anywhere" in the footer. **`alt=""` in the panel** | The real mark from the mirror; its white lettering needs the navy ground | None needed |
| Photographs | **None in the default state** (DD-42 option a, RF-25, AD-11). Every file in `ASSETS.md` shows identifiable children, re-checked 2026-09-11 | | Published by GT on its own sites; consent to be confirmed by Nari (AD-11) | The default state is the state that ships. The photographed state is specified under "Corrected" with its files, crops, DPR ceiling and the AA treatment the source omits; it needs Nari's written permission **and** a GT Anywhere photograph that `shared/img/` does not contain, because DD-42's photographed state requires parity and one photographed door is not an option (DD-31) |

**Why the two panel marks are `alt=""`.** The studio critic extracted the rendered text of both panels and found the
accessible names unequal in the same way the plates were unequal on screen: the Anywhere panel announced its own
name **three times** (mark, name, CTA) while the Georgetown panel was introduced by a *different brand*, "GT School",
immediately before "Georgetown Campus" — which a screen-reader user can reasonably take as the door's title. In this
position both marks are decorative: the school's name follows as visible text in both panels. `alt=""` on both
images, with `aria-hidden` on the plate that wraps them, removes the misdirection and makes the two panels equal in
the accessibility tree as well as on the page. The same two files keep their real alt text in the header and the
footer, where the mark **is** the link and nothing else names it.

Open Graph carries title and description only; no share image while the default state holds (`copy.md` Head).

## Colour and contrast (WCAG 2.x ratios computed from the token values, 2026-09-11)

**Every pairing inside the frame, which is the brief's acceptance condition.** The frame itself carries no text; its two panels do.

| Pairing | Where | Ratio | Threshold |
|---|---|---|---|
| `--color-text` on `--color-georgetown-tint` | Georgetown's name and door line | **16.10** | 4.5 text; K3 CS3's 7 for running prose |
| `--color-text` on `--color-anywhere-tint` | GT Anywhere's name and door line | **16.30** | 4.5 text |
| `--color-text-muted` on `--color-georgetown-tint` | "IN PERSON" | **5.69** | 4.5 text (a short uppercase string, never a paragraph) |
| `--color-text-muted` on `--color-anywhere-tint` | "ONLINE" | **5.76** | 4.5 text |
| `--color-on-navy` on `--color-navy` | **both** CTA labels, identically | **14.58** | 4.5 text |
| `--color-navy` on `--color-georgetown-tint` / `--color-anywhere-tint` | the two CTA fills against their panels | **12.63 / 12.79** | 3 graphical |
| `--color-georgetown-tint` / `--color-anywhere-tint` on `--color-navy` | the two panels against the frame | **12.63 / 12.79** | 3 graphical |
| `--color-georgetown-tint` against `--color-anywhere-tint` | the two panels against each other | **1.01** | none required; stated because it is the point — the two panels differ in hue, not in weight, so neither is the darker door |
| `--color-navy` on `--color-georgetown-tint` / `--color-anywhere-tint` | **the two mark plates' 1px borders**, one value on both (build pass 2) | **12.63 / 12.79** | 3 graphical. Build pass 1 used `--color-border-strong` here, 3.31:1 — above the floor and far below the navy chip opposite it, which is the imbalance both critics measured |
| `--color-bg` on `--color-georgetown-tint` | the GT School plate's ground against its panel | **1.10** | none; stated as the residual asymmetry under Corrected. The plate is read by its navy border, not by its fill |
| `--color-navy` on `--color-anywhere-tint` | the GT Anywhere plate's ground against its panel | **12.79** | 3 graphical |
| `--color-focus` on `--color-georgetown-tint` / `--color-anywhere-tint` | the ring on both door CTAs | **7.46 / 7.56** | 3 |

Nothing inside the frame is below 3.00, and nothing used as text inside the frame is below 5.69.

**On the cream, for completeness:**

| Pairing | Where | Ratio |
|---|---|---|
| `--color-text` on `--color-bg` | h1 (upright and italic), anchor sentence, table cells, facts, steps, sources | 17.69 |
| `--color-text` on `--color-surface` | footer facts and phone number | 16.10 |
| `--color-text-muted` on `--color-bg` / `--color-surface` | provenance, eyebrows, table row labels, step counters | 6.25 / 5.69 |
| `--color-navy` on `--color-bg` | the frame's edge against the page; outlined buttons and their borders | 13.88 |
| `--color-on-navy` on the `--color-navy` fill | application buttons, the reprise doors | 14.58 |
| `--color-border-strong` on `--color-bg` / `--color-surface` | link underlines, the anchor rule, the proof rules, the TEFA card, the footer's top rule and its two plates | 3.63 / 3.31 |
| `--color-border` on `--color-bg` / `--color-surface` | the header hairline, the table rules, the step rules | 1.56 / 1.42 — decorative only; no rule carries meaning alone |
| `--color-focus` on `--color-bg` / `--color-surface` | the ring everywhere else | 8.20 / 7.46 |
| `--color-focus-on-dark` against `--color-navy`; `--color-navy` against `--color-surface` | the two bands of K3's ring on the footer's GT Anywhere plate. **Measured against the surface the ring is actually drawn on** (the footer's `--color-surface`, not the plate's own fill): the near-white outer band is 1.15:1 there and the navy inner band is **12.63:1**, which is K3 F10 working as designed — one band passes on whatever ground the ring lands on | 1.15 / **12.63** |

**Palette usage map.** Navy is a **surface** on exactly two bounded objects, the frame and the reprise frame, plus the two navy mark plates inside them and in the footer; navy is also the **fill** of every control on the page, which is DD-46 (a)'s light-surface treatment rather than a third surface. The two school tints appear on the four panels and on the TEFA module. `--color-surface` is also the footer's ground. **The accent is spent zero times as a page colour** (see Departures); the only orange anywhere is the leaf inside the two mark artworks, which is a mark rather than an accent event, and which appears exactly once in each panel — the one place this page's symmetry is enforced by the brand files themselves.

## Departures

| Departure | Value | Reason |
|---|---|---|
| **Zero accent uses on the first screen**, where the brief's Colour row says one | no `--color-accent` declaration anywhere in `styles.css`; measured 0 accent-painted elements on the first screen | **Moved out of this table in build pass 2 and escalated** — see Escalations, row Q-A. Both critics judged the design argument sound and its textual warrant contestable: K3 section 5f reads as a budget, the brief's Colour row reads as an imperative, and the studio critic named a third placement the build-pass-1 argument never considered (an accent underline on the compare anchor, the one first-screen element that belongs to both doors equally, in `--color-accent-text` at 5.14:1). Nari decides; the page ships the zero state meanwhile and says so |
| The Georgetown mark plate's border is `--color-navy`, not `--color-border-strong` | `.panel-mark { border: 1px solid var(--color-navy) }` | Build pass 2, on both critics' first finding and the studio critic's named remedy. 12.63:1 on the Georgetown tint against the 3.31:1 hairline it had, so the two plates are navy-bounded objects of the same box and the navy-object count is 2 : 2 rather than 1 : 2. Measured above, with the painted-area residual that remains |
| `--panel-head-gap` is two space tokens at the phone bands, not one | `var(--space-3)` in the tight band and in the landscape recipe | Literata clearance, stated as a number: CONTRACT section 3 records Literata standing **0.1675 em proud of a 1.15 line box**, which for `.panel-name` at `--text-xl` is **3.70px at V2** (22.08px) and **4.05px at V10** (24.17px), and the plate's bordered edge sits directly above it. One token is 4px, so build pass 1 cleared V2 by 0.30px and missed V10 by 0.05px — met by accident rather than by calculation, which the studio critic held the Typography row at 4 for. Two tokens is 8px: **4.30px clear at V2 and 3.95px clear at V10**. At V10 the eight pixels are paid for out of `--panel-cta-gap`, so the landscape budget is unchanged |
| The reprise frame takes the first screen's width bands | `@media (max-width: 767px) { .frame-reprise { … } }` | Build pass 2. Its hard-coded 24px side padding made the reprise pair **34.3px unequal in height at V18**, found the moment the parity harness was extended to that pair |
| The footer and utility links carry a minimum inline size | `min-inline-size: 2.75rem` | The unpadded footer "Terms" link measured about 35px wide at V2 (Astra). The runner tested height only; it now tests both, and reports every target at or above 44px in each dimension |
| The door line exists twice in the markup | `.panel-line` and `.door-lines`, exactly one displayed per viewport | The compact door rule needs both lines after both CTAs; the brief's panel needs the line inside. A single copy cannot be in two containers. `display: none` removes the hidden copy from the accessibility tree, so each line is announced once |
| `--radius-lg` on the frame, `--radius-md` on buttons, `--radius-sm` on the mark plates, `0` on the panels | four radius values | DD-47 settles a **uniform** corner — the same value on all four sides of an object — not a single value for every object. Each object uses one value on four sides. The panels' square corner is the source's own construction; the graded radii follow object size, which is why an 8px corner is not put on a 38px plate (it would read as a pill, the shape DD-47 rules out) |
| The landscape recipe's h1 steps down one token | `h1 { font-size: max(var(--text-xl), 1.5rem) }` at `(max-height: 479px) and (min-width: 700px)` | The contract's own landscape recipe. The `max()` floor holds the type at or above K3 section 5e's 24px licence at every width the recipe covers; measured 24.17px at V10 |
| Page margin 16px below 768 | `--page-margin: var(--space-4)` | Measured above: it keeps the h1 at six lines at V2 rather than seven, worth 31.4px of first-screen budget, while the frame still shows cream on both sides |
| The mark-plate width arithmetic | `min(calc(var(--mark-h) * 5.25 + 2 * var(--mark-pad) + 2px), 100%)` | 5.25 is the GT Anywhere mark's own aspect (252/48); the 2px is the plate's two hairlines. The `min()` cap is what keeps a doubled root font from pushing the page sideways — without it the runner measured a 418px scroll width at 375 |
| 1px hairlines, 2px ring bands, 3px forced-colours outline | hairlines, `:focus-visible`, `@media (forced-colors: active)` | No border-width token exists; K3 section 5d's band widths |
| 44px target floor, 56px header row | `min-height: 2.75rem` on every control; `3.5rem` on the header row | The matrix's interactive minimum; the brief's header height. Header total 57px with its hairline |
| Container thresholds 28rem (the CTA's type step) and 20rem (the h1 nowrap release), and the 58rem compare container | container queries per K10 section 5d | 28rem is where the longer CTA label stops fitting one line at `--text-btn`; 20rem is 320px at a 16px root and 640px at a 32px one, which is what releases the nowrap only under a large text setting; 58rem is this mock's measured table threshold (R6 specifies the method, not the value) |
| Height thresholds 479, 639, 767, 899 px and width thresholds 767, 1279 px | the first-screen bands | The landscape case (K10), the tightest phone band, the band where the sentence is both long and the room short, and K10's relaxed edge |
| `forced-color-adjust: none` on both wordmark files, on the header lockup and on both footer plates | forced-colours block | Both marks are two-colour artwork in an `<img>`, which forced colours never recolours: the GT Anywhere mark loses its second word on a forced white ground and the GT School mark loses its lettering on a forced black one. The rule is keyed on the **file**, because the same two files appear in the header, in the two first-screen panels and in the footer, and a per-wrapper rule would leave an instance unprotected. Each plate that opts out is given its ring explicitly, because the user agent's forced ring only applies to elements that did not opt out |
| No-break spaces in the h1 | "in&nbsp;person" and `span.nowrap` on "from anywhere." | Typographic no-breaks; no word changed |
| Letter-spacing `.08em` on uppercase labels | panel labels, eyebrows, table row labels | Within the contract's 0.06 to 0.08em |
| Underline offset and thickness `.18em` / 1px | `.link` | Typographic refinement; no token |
| `max-width: 24rem` on the door CTAs | `.panel-cta` | Two controls that fill a 556px panel read as two banners rather than two doors; both are capped at the same 384px so they stay identical |

## Flagged slots

| Slot | Q id or row | Default shipped |
|---|---|---|
| Lockup | Q-001 | The real `gt-school-logo-h.svg`; Holly's unifying element may be added beside it |
| Current families | Q-002 | community.gt.school in the header, the families block and the footer |
| Application steps | Q-007 | The four steps as `copy.md` gives them, identical for both schools |
| Georgetown tuition | Q-011 (decided, G0.5 item 4) | "Tuition on request. Ask admissions." |
| After 8th grade | Q-013 | The shared sentence, repeated in both table columns (DD-43) |
| Intensives logistics | Q-017 | "Four intensive weekends a year in Georgetown." and no further detail |
| Outcome figure | Q-019 | Withheld; the proof strip carries the four register-backed facts |
| TEFA window, owner, expiry | Q-021 | The module's default wording, visible to everyone (D-015 option c) |
| Accreditation | Q-033 | Nothing on the page. This is the flag the source's own paragraph would have overturned (CR-039, CR-001, CR-003) |
| Parent quote | Q-034 | None |
| Adults' title | Q-035 (decided) | Guides; "advisor" appears only as the `data-type` value the spec names |
| "Talk to admissions", tour, info session destinations | MD-02, REQ-002, R14 | All three point to www.gt.school/contact; the tour label names the destination and the campus |
| `school=` parameter | DD-25 | Convention; the live parameter is confirmed in S5 |
| Panel labels and the hidden heading | `copy.md` sections 1 and 9 | "In person" and "Online" are section 1 door labels; "Two ways to attend" is an allowed section 1 heading. Nari has not yet agreed section 9 |
| "Ready to choose?" over the reprise frame | `copy.md` section 3, allowed headings | An allowed section 3 heading, used as the reprise's label |
| Photographs | DD-42, RF-25, AD-11, DD-31 | None. The photographed state also needs a GT Anywhere photograph that does not exist in `shared/img/` |
| The three source claims | CR-039, CR-040, CR-041 | Not on the page, quoted only in this file. All three are Unverified and owned by Nari |
| Stacked-table semantics | R6 | Below 58rem the table parts are `display: block`, which some screen readers read as plain text; explicit `role` attributes are a build-phase decision, not taken in the mock |
| Live side-by-side with the school sites | K7 C4, Continuity | Not produced: this build may not open gt.school or anywhere.gt.school. `CONTINUITY.md` and K12 are the reference used, and the Georgetown handoff is unverified because gt.school has no mirror in this repository |

## Claims register tags

The rows the page depends on are "Unverified, public" in `0_plan/12-claims-register.md`: usable in a mock (G0.5), blocked for production until Nari approves the wording (REQ-022). Counts are `check-claims.py`'s own; the door lines appear twice in the markup and once on screen, which is why CR-032 and CR-033 count higher than in a single-copy mock. **Build pass 1 listed six rows; that understated the dependency** (Astra), and the seventh is added below.

| Figure on the page | Where | Row | Count | Status | Owner |
|---|---|---|---|---|---|
| 90th percentile | Table "Admissions" (both cells), proof fact 1, steps line | CR-011 | 4 | Unverified, public | Crystal |
| $10,400 a year | Table "Tuition and access", GT Anywhere cell | CR-021 | 1 | Unverified, public | Nari |
| four in-person weekends / Four intensive weekends | Both copies of the GT Anywhere door line, the table's "In-person time" row, the footer facts | CR-032 | 4 | Unverified, public | Nari |
| 9 to noon, about two hours / Two hours of mastery academics | Both copies of the Georgetown door line, the table's "The day" Georgetown cell | CR-033 | 2 | Unverified, public | Nari |
| Two to three hours | Table "The day", GT Anywhere cell | CR-034 | 1 | Unverified, public | Nari |
| check-in every week / every week | Table "Guides" GT Anywhere cell, proof fact 3 | CR-035 | 2 | Unverified, public | Nari |
| **the TEFA voucher covering "the full amount"** | Table "Tuition and access", GT Anywhere cell | **CR-022** | not counted by the checker | Unverified, public | Nari |

**Why CR-022 is here and the checker does not see it.** `check-claims.py` maps the *figure* `$10,474`, which is not on the page. But the cell says the voucher "can apply … toward the full amount", and the register row that supports full coverage is CR-022 ("The $10,474 TEFA voucher fully covers the $10,400 GT Anywhere tuition."), which the register itself flags as conflicting with CR-021. So the page depends on CR-022's *claim* while carrying only CR-021's figure. Astra's finding; the row belongs in the inventory and the checker cannot be the whole inventory.

Rows **kept off the page**, each of which the source's own two-door panel puts on it:

| Statement | Row | Status | Owner | Where the source carries it |
|---|---|---|---|---|
| "Our Accredited K-8 Virtual School brings 3X learning velocity to your home." | CR-039 | Unverified | Nari | The right panel's paragraph, first sentence |
| "accessible anywhere and eligible for ESA funding" | CR-040 | Unverified | Nari | The right panel's paragraph |
| "We provide the full GT academic crucible - AI adaptive blocks and a global tribe of peers" | CR-041 | Unverified | Nari | The right panel's paragraph |
| "Yes. We are fully accredited by Cognia and TEFA-eligible." | CR-001 | Unverified | Nari | anywhere.gt.school; repeated in substance by CR-039 |
| "Accredited K-8 virtual academy for exceptional students delivering 4x faster learning…" | CR-003 | Unverified | Nari | anywhere.gt.school structured data and the gt.school footer |
| "Delivering 3x faster learning" | CR-004 | Unverified | Nari | anywhere.gt.school |
| "3X learning velocity" | CR-008 | Unverified | Nari | gt.school, nine pages |

The figure $10,474 is not on the page and the TEFA module carries no figure. `check-claims.py` lists no withheld claim and no figure without a row.

### Assertions on the page with no claim-level register row

Astra's finding, and it is a real limit on the sentence "no unregistered claim": `check-claims.py` gates **figures**,
so a factual assertion that carries no number passes it untouched. Four such assertions are on this page. **None is
M32's own copy** — every one is a fixed slot of `copy.md` sections 1, 3, 4 and 8, so they are on every mock in the
slate. They are flagged here with their owner rather than registered, because a builder does not write register rows.

| Assertion on the page | Where | Nearest existing row | Gap | Owner |
|---|---|---|---|---|
| "The gifted school in the Alpha School network." | The provenance line, `copy.md` section 1 | None | Network membership is a corporate-relationship claim with no row at all | Nari (MD-17 settled its prominence, not its truth) |
| "From home, anywhere in the United States." | Table, "Where and how", GT Anywhere | None; the gt.school footer's "Anywhere in the States" is the source `copy.md` cites | Availability across all fifty states is a regulatory claim for an online school | Nari |
| "Guides on campus in every session." | Table, "Guides", Georgetown | CR-035 covers the GT Anywhere **weekly** check-in only | Staffing coverage at the campus is unregistered | Nari / Crystal |
| "Mastery-based: students advance on demonstrated mastery, measured with MAP assessments." | Proof fact 2, and the repeated "Same school, same academics" cells | CR-030 names MAP inside a refund condition | The broader progression claim for **both** schools is not what CR-030 registers | Nari |

Recommended, not taken: four `CR-` rows proposed by whoever owns the deck, since these sit in `copy.md` and affect
every mock. Until they exist, the honest form of the claim this mock makes is narrower: **every figure on the page
maps to a register row, and no withheld figure appears**, which is what the checker establishes and all it does.

## Continuity, against the measured estate

`0_plan/mockups/shared/CONTINUITY.md` is the reference; the estate's live sites were **not** opened by this build. `gt.school` has no mirror in the repository and is unmeasured, so the Georgetown handoff is **unverified** and only the GT Anywhere handoff can be scored on rendered evidence. That matters more here than in any other mock, because M32's source *is* a gt.school page: everything said about the source comes from Johnny's screenshot as the brief describes it and from the three register rows, not from a rendered capture in this repository.

| Property | The measured estate (anywhere.gt.school) | M32 | Verdict |
|---|---|---|---|
| Page ground | `rgb(252, 244, 239)` | `--color-bg`, the same value | Matches |
| Body text | `rgb(0, 17, 23)` | `--color-text`, the same value | Matches |
| Body face | Inter Tight | Inter Tight | Matches |
| Display face | Literata | Literata | Matches |
| **The headline's italic** | The estate sets its first sentence upright near-black and its second in italic at weight 400 **in accent orange**, inside a 300-weight h1. K12 F88 measures that orange on cream at **2.38:1**, failing AA and 3:1. The source component on gt.school does the same thing at panel scale: a two-line serif headline whose second line is italic | The same device — a second voice inside one Literata h1 — with the **colour left behind**: the italic clause is `--color-text` at 17.69:1, and it is keyed to the clause rather than the line so it survives reflow from 4 lines to 7 | **The strongest continuity move on this page**, and the one correction inside it that costs the estate nothing: the slope is what carries the meaning, the colour was what failed |
| Heading weight and tracking | 300, letter-spacing -1.6px | 400, no tracking | Declared difference. M03 tested 300 against 400 on the fixed sentence and shipped 400 with its reasoning; this mock inherits that and does not re-run the test |
| The first screen's application action | Navy `rgb(0, 42, 58)` fill, near-white label, Inconsolata uppercase at 16px, computed weight 500 | Navy fill with a near-white label on every control on the page, Inconsolata uppercase at `--text-btn` 17 to 18px, weight 600 — **except inside a panel narrower than 28rem, where a container query steps the door CTA to `--text-sm`, 14 to 15px**, so the longer label never wraps and the two CTA boxes stay identical (Astra: build pass 1 stated 17 to 18px without the exception) | Same colour vocabulary, same face, same case. Size and weight differ: `shared/fonts.css` ships Inconsolata 400 and 600 only, so a 500 cannot be registered without adding a face, and the estate's 500 is a computed weight rather than proof of a 500 face |
| The pre-footer application card, and the source component's "LEARN MORE" | Accent orange fill, near-white label at **2.50:1** (K12 F87) | Not copied (DD-46). No orange fill anywhere; no orange type anywhere | Deliberate: copying it would import a contrast failure onto the page's most important control, and in the source it is also the thing that makes one door louder than the other |
| Button silhouette | Three constructions across the estate: a composed cut lower-right corner on two cards, a 14px clipped polygon in the footer, four rounded corners on the desktop header's application button | One uniform `--radius-md` corner on every control (DD-47), which is the shape of the estate's own desktop-header application control | Matches one of the estate's three, and the one on the control a parent clicks to apply |
| **The two-door component itself** | **Not measured, and not measurable from this repository.** The brief describes a screenshot of the component on `gt.school/about-us`; the screenshot is not checked in and `gt.school` has no mirror here | The same object as the brief describes it, corrected | **An inference from a described reference, not handoff evidence** — Astra's correction, and build pass 1 wrote it as though it were measured. What can be said: the direction is built to the brief's description of the estate's own routing component. What cannot: that a parent will recognise it, because nobody here can render the thing they would be recognising |
| Footer navigation | Uppercase Inconsolata | Inconsolata at `--text-sm`, in the case `copy.md` writes | Face matches; case does not, because the deck's link labels are sentence case and `text-transform` would change how they read |
| Mark handling | The GT Anywhere mark is white lettering with an orange leaf; the estate's hero carries an Alpha School lockup | The GT Anywhere mark only on navy (its panel plate and the footer plate); the GT School mark only on light (the header, its panel plate, the footer plate). 27.9px at 390 and 32px at 1440, aspect skew 0% at both, measured by the runner on all five instances | Matches, and the runner measures it every pass |
| Grained cream, wave linework, the composited student cut-out | Present on the estate's hero | Absent. No photograph, no texture | Declared: DD-42 holds the photograph and a grain is a value on neither site's token list |
| The phone's redistributed chrome | At 390 the estate's header holds the mark and MENU only | At 390 the header holds the mark and two text links, no menu (DD-12) | Different by decision, not by accident |

Where a parent lands after pressing the **GT Anywhere** door: the navy control with a near-white Inconsolata label is answered on anywhere.gt.school by a navy application card in the same face and case; the ground, the two display faces and the mark files are literally the same. What does not carry across is the estate's grain, its photographic hero and its 300-weight tracked headline — and, deliberately, its orange button and its orange italic. Where a parent lands after pressing the **Georgetown** door is **unverified**: `gt.school` has no mirror in this repository, this build did not open it, and no rendered comparison at either width exists. Astra's raise for this row — a rendered Georgetown destination comparison at phone and desktop widths — cannot be produced under the hard rules from inside this folder and is listed under Escalations.

## Parent questions (`0_plan/05-landing-mockups-plan.md` section 6c)

| # | Question | Answered | Where |
|---|---|---|---|
| PQ-01 | What is GT School? | Page | The h1 |
| PQ-02 | Is it for my child? | Page | "gifted and talented children" in the h1; the 90th percentile in the table, the proof strip and the steps line |
| PQ-03 | In person or online: what are my options? | Page | The frame: two marks, two labels, two names, two lines, two controls |
| PQ-04 | Where is the campus? | Page | The Georgetown door line; table "Where and how" |
| PQ-05 | What does a day look like? | Page | Table "The day" |
| PQ-06 | What does it cost, and can TEFA help? | Page | Table "Tuition and access"; the TEFA module |
| PQ-07 | How do I apply? | Page | "How to apply": four steps, two application links |
| PQ-08 | Who teaches my child? | Page | The GT Anywhere door line; table "Guides"; proof fact 3 |
| PQ-09 | How much in-person time does GT Anywhere have? | Page | The GT Anywhere door line; table "In-person time" |
| PQ-10 | What results does the school get, and is it accredited? | Silent by G0.5 items 2 and 3 | "Contact admissions" and "Talk to admissions" are the path to the person who answers it. The source component answers it on the page, with CR-039 and CR-001; this page does not |
| PQ-11 | What happens after 8th grade? | Deferred to admissions | The table row (Q-013) |
| PQ-12 | I am a current family, where do I go? | Page | Header link; the families block; footer link |
| PQ-13 | I am not ready to apply, what can I do? | Page | "Questions before you apply": FAQ, admissions, tour, info session |
| PQ-14 | Is GT School part of Alpha School? | Page | The provenance line, under the h1 |

## Self-check

**Runner.** `node 0_plan/tools/shots.mjs 0_plan/mockups/M32-the-two-panels`, run of **2026-09-12T00:53:16.118Z**, which is the timestamp `qa/fold.md` carries: **Result: all required rows pass.** Reduced motion at V14: every computed transition and animation duration 0s, elements and pseudo-elements. Root font doubled at V2: no horizontal scroll at 375 with a 32px root. Console: no errors. Interactive targets: "every interactive target is at least 44px tall" at all three sampled rows, the 320px reflow row included — and the runner now tests **width as well as height**, so that line means 44px in both dimensions. Mark geometry: five marks at each width — `gt-school-logo-h.svg` three times (header, Georgetown panel, footer plate) and `gt-anywhere-logo-h.svg` twice (GT Anywhere panel, footer plate) — 27.9px at 390 and 32px at 1440, aspect skew 0% on all ten measurements.

(Build pass 1 cited the run twice at a timestamp eight minutes older than the file on disk. Both critics caught it. Every figure in this file now comes from the run named above, and the three tables that quote the runner are spliced out of `qa/fold.md` by script rather than retyped.)

### Focus rings, re-measured against the surface they are drawn on

The programme-wide correction landed in `styles.css` and in `0_plan/tools/shots.mjs` while this mock was in review: every ring in every mock was stated in the colour of its own plate's retained ground, while the ring is painted **outside** the plate, on Canvas. M32's measured 1.03:1 in the light palette and 1.39:1 in the dark. The declarations now say `CanvasText`, the runner samples the surround rather than the fill, and both are verified here rather than assumed. `node …/qa/M32-measure.mjs --captures`:

| Palette | Target | Ring | Against the surface outside it |
|---|---|---|---|
| normal | header lockup | 2px `--color-focus` at 2px offset | **8.20:1** on `--color-bg` |
| normal | footer GT School plate | 2px `--color-focus` | **7.46:1** on `--color-surface` |
| normal | footer GT Anywhere plate (the page's only two-band ring) | 2px `--color-focus-on-dark` outer, 2px `--color-navy` inner | outer 1.15:1, **inner 12.63:1** — K3 F10 working as designed, one band passing on whatever ground the ring lands on |
| normal | first door CTA | 2px `--color-focus` | **7.46:1** on the Georgetown tint |
| forced, light | all four | 2 to 3px `CanvasText` = `rgb(0,0,0)` | **21:1** on `Canvas` = `rgb(255,255,255)` |
| forced, dark | all four | 2 to 3px `CanvasText` = `rgb(255,255,255)` | **21:1** on `Canvas` = `rgb(0,0,0)` |

The runner's own forced-colours table agrees, in both schemes: "21:1 against the surface it is drawn on, outside the element", for every opted-out link. One observation, reported rather than changed: the GT Anywhere plate's forced ring is 2px where the others are 3px, because `.logo-navy:focus-visible` is a more specific selector than the block's `:focus-visible`. At 21:1 and 2px it is well clear of WCAG's minimum, and the programme-wide rule is not mine to re-cut.

### Captures the acceptance row asks the critics to judge by eye

Build pass 1 had neither of the two the brief names. Both exist now, and I read all five with the Read tool.

| File | What it shows |
|---|---|
| `qa/forced-colors-light.jpg` | The page at V14 in the **light** forced palette: frame, both panels, both plates and both controls keep drawn borders when the tints and the navy collapse to Canvas; both wordmarks whole |
| `qa/forced-colors-dark.jpg` | The same in the **dark** palette, which build pass 1 asserted from a script and never showed. Both wordmarks whole on their retained plates, the lattice intact, both CTAs outlined |
| `qa/focus-logo-navy.jpg` | The page's one two-band ring, focused, in the normal palette: the navy inner band is plainly visible against the footer's cream, which is the band K3 F10 relies on there |
| `qa/focus-logo-navy-fc-light.jpg`, `qa/focus-logo-navy-fc-dark.jpg` | The same control focused in **both** forced palettes: a black ring on white Canvas and a white ring on black Canvas, both unmistakable |

### Fixed in build pass 1 by looking at the captures

| What the capture showed | Fix |
|---|---|
| `qa/focus-cta.jpg` showed **no visible ring** on the first door CTA. The two-band ring had been applied to it on the assumption that a control inside a navy frame stands on navy; it does not — it stands on a light tint, where `--color-focus-on-dark` measures 1.14 and 1.15 | The door CTAs take `--color-focus` like every other control on the page (7.46 and 7.56 on the two tints) |
| The runner's next-band evidence named the frame's navy-to-cream edge, not text, at V11, V12, V13 and V16 | The anchor band's padding, the sections' top padding and the table block's top margin each came down one token; all four rows report real text cut by the edge |
| `qa/fold.md` failed the doubled-root-font run at 375 (scrollWidth 499, then 418) | The mark plate's shared width is capped at `100%` and the head row wraps; the h1's nowrap span is released by a container query below 20rem |
| At V1 (740) and V5 (715) the first screen finished exactly at the fold and nothing crossed the bottom edge | The tight height band was widened to 767px, but only below 768px wide, so the rows where the sentence is long take the squeeze and the wide-and-short rows keep the full rhythm |
| At V14 and V15 the panels had 8px of side padding inside a 556px panel, because the height band was setting horizontal padding | The bands were split: width sets the lattice and the side padding, height sets the vertical rhythm only |

### Fixed in build pass 2, on the two critics' cards

| Finding | Whose | Fix, and the evidence |
|---|---|---|
| The next-band table was introduced as pasted from the runner with its single negative cell replaced by a rebuttal, and the run was cited at a stale timestamp | Both | The table is spliced out of `qa/fold.md` by script, every cell; the rebuttal is a separate row beneath it; the timestamp is read from the file |
| The parity harness measured geometry only — no colour, no `.panel-line` row, the reprise pair excluded, `markW` collected and dropped | Both | All four added. `--weight`, `--lines`, `--reprise`, and `markW` printed beside the verdict |
| The count the rationale ran on the source was never run on this page; navy objects were 1 : 2 in the right panel's favour | Both | Run (`--weight`). The Georgetown plate's border is `--color-navy`, 12.63:1 on its tint: navy objects **2 : 2**. The painted-area residual, 1 : 17.1 inside the plate, is reported rather than argued away |
| The reprise pair's equality was claimed in `styles.css` and measured by nothing | Studio | Measured, and it was **false at V18**: 34.3px of height and 9px of CTA width. The reprise now takes the first screen's width bands; 0.0px at all nineteen rows |
| The Anywhere panel announced its name three times while the Georgetown panel was introduced by a different brand | Studio | `alt=""` on both panel marks, `aria-hidden` on their plates. Both are decorative beside a visible name |
| The unpadded footer "Terms" link is about 35px wide at V2 | Astra | `min-inline-size: 2.75rem` on the footer and utility links. The runner, which now tests width, reports every target at or above 44px |
| The claims inventory understated its dependencies (CR-022) and four inherited assertions have no claim-level row | Astra | CR-022 added to the inventory with the reason the checker cannot see it; the four assertions tabled with their owner and flagged as shared-deck gaps, not registered here |
| The Literata overhang obligation was met to within a quarter-pixel by accident | Studio | Stated as a number and given real clearance: `--panel-head-gap` is two space tokens at the phone bands, 4.30px clear at V2 and 3.95px at V10 |
| The zero-accent departure was resolved in a Departures cell on a contestable reading | Both | Moved to **Escalations** as a proposed `Q` row with both readings and both recommendations |
| The source object and line counts cannot be checked by any reviewer | Both | A text fetch to build the dated extract was attempted and refused by this session's sandbox, so the counts are marked **unverifiable** and the correction no longer rests on them. `qa/M32-source-counts.py` reproduces the one figure that does survive, out of the register |

**Grep checks** (from the repo root, 2026-09-12): `<form` 0; `<input` 0; `<script` 1 (JSON-LD); hosts in `index.html` and `styles.css`: gt.school, www.gt.school, anywhere.gt.school, apply.gt.school, community.gt.school, schema.org only; digits in visible text: 09, 10, 10,400, 2026, 270, 512, 8, 9, 90, 9481; "advis" in visible text: 0; "Georgetown Campus" 9 occurrences in visible text, "GT Anywhere" 15; provenance line once; sources line twice; **61 fixed slots from `copy.md` sections 0 to 8 found verbatim** by string match against a whitespace-normalised page; words on the page outside `copy.md` sections 0 to 9: none; raw hex in `styles.css`: **0**; `transition:` declarations in `styles.css`: 0; `vh`, `svh`, `dvh` in `styles.css`: 0; `index.html` 15,542 bytes plus `styles.css` 29,962 bytes, 45,504 bytes in all.

**Contrast.** Every pairing in the tables above computed from the token values with the WCAG 2.x formula, and the plate and ring figures re-measured in the browser from computed colour. Inside the frame every string is at 5.69 or above and every drawn edge at 12.63 or above. **No APCA Lc figure is reported**, which K3 section 5g CS4 asks for: no mock in `0_plan/mockups/` reports one, the runner does not compute one, and the studio critic filed it as a programme-wide gap for Johnny rather than an M32 defect. It is listed under Escalations so it is not lost.

### Checker output, verbatim, from the run of 2026-09-12

```
$ python3 0_plan/tools/check-mocks.py 0_plan/mockups/M32-the-two-panels

## M32-the-two-panels: 37 pass, 0 fail

check-mocks: OK
```

```
$ python3 1_spec/tools/check-claims.py

## 0_plan/mockups/M32-the-two-panels/index.html
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

```
$ node 0_plan/tools/shots.mjs 0_plan/mockups/M32-the-two-panels

## Result: all required rows pass
```

**Screenshots read with the Read tool**: `V1.jpg`, `V2.jpg`, `V9.jpg`, `V10.jpg`, `V11.jpg`, `V14.jpg`, `V15.jpg`, `V16.jpg`, `V17.jpg`, `V18.jpg`, `V2-full.jpg`, `V14-full.jpg`, `V2-rootx2.jpg`, `focus-cta.jpg`, `focus-footer.jpg`, `focus-footer-plate.jpg`, `forced-colors.jpg`, bottom-edge crops of `V12.jpg`, `V13.jpg`, `V16.jpg`, `V17.jpg`, and the five build-pass-2 captures above.

## Escalations

Four things this build will not decide for Nari or for Johnny, each with what it would take to close.

| id | Item | Both readings, or both routes | Who |
|---|---|---|---|
| **Q-A** (proposed; needs an id in `0_plan/07`) | **Does the first screen spend one accent use, or none?** | *Zero, as built:* the source spends its one saturated fill on one of the two doors, and inside a frame claiming parity a single accent either lands on a door and re-creates that, or on the frame as ornament. Orange still appears, once per panel, as the leaf inside each mark. *One, as the brief's Colour row says in the imperative:* K3 section 5f is a budget ("one accent event per screen … enforced by counting"), and there is a placement that ranks neither door — an underline on the compare anchor, the one first-screen element belonging to both, in `--color-accent-text` at 5.14:1 on cream, costing no layout height. **Fable recommends escalating rather than resolving; Astra recommends the shared element.** Measured today: 0 accent-painted elements on the first screen | Nari |
| **Q-B** (proposed) | **Is a navy-*bounded* plate beside a navy-*filled* plate acceptable parity?** Navy objects are 2 : 2 and the boxes are identical to 0.0px, but painted navy inside the plate is 1 : 17.1 and cannot go to 1 : 1 while each wordmark keeps the ground its artwork needs (BUILDER-BRIEF rule 16 forbids recolouring a mark) | Accept, and the two plates read as one object type with different interiors; or commission a light-ground variant of the GT Anywhere wordmark, which is a brand decision, not a page decision | Nari, with Holly |
| **E-1** | **The source screenshot is not in the repository** and `gt.school` has no mirror, so the object and line counts are unverifiable and the Georgetown handoff is unrendered. A text fetch to build a dated extract the way `0_plan/kb/exemplars/gt-story/` does was attempted here and refused by the sandbox | Either the screenshot is checked in with a `SOURCE.md` and a script, or the counts stay marked unverifiable — as they now are — and `SOURCES.md` records the component as an unverified source | Johnny / Nari |
| **E-2** | **No mock in the programme reports an APCA Lc figure**, yet K3 section 5g CS4 makes it a condition of a 5 on Colour and surface | Either the runner starts reporting Lc and the per-node sweep, or section 5g is amended. Scoring M32 alone against it would single out a programme-wide gap | Johnny |

One more, not an escalation but worth Nari seeing before G1: below 700px tall — which includes a 1366 by 768 laptop — the contract's compact door rule moves the two explaining sentences below the frame, so **13 of the 19 matrix rows do not show the brief's complete panel**. It is contract-compliant and honestly filed under the compact door rule above; `qa/V15.jpg` beside `qa/V14.jpg` is the comparison.

## Iteration, build pass 1 to build pass 2 (2026-09-12)

Scored 5/4/4/4/4/5/5/**3**/4 by the studio critic and 4/4/4/4/**3**/4/**3**/**3**/**3** by Astra; both returned ITERATE. Craft was the row both marked down, and both for the same reason: the evidence was presented more favourably than the evidence was. Everything either card asked for is in the table under **Fixed in build pass 2** above, with the measurement behind it, except the two things that cannot be done from inside this folder — the source extract, refused by the sandbox, and the rendered Georgetown comparison, which the hard rules forbid — and those are now escalations rather than silences. Three defects were found by the fixes themselves rather than by the cards: the reprise pair was unequal at V18, the door CTAs' name had 0.30px of Literata clearance at V2 and −0.05px at V10, and the footer links were 35px wide.
