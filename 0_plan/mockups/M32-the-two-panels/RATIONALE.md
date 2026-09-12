# M32 The Two Panels, rationale

| Field | Value |
|---|---|
| Mock | M32 "The Two Panels", G-D build wave, new direction, 2026-09-11, build pass 1 |
| Brief | `0_plan/kb/briefs/M32.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1, including the four rows added to section 3 from this programme's own findings |
| Lens order | L1 objective, L4 exclusivity, L2 continuity, L3 mission |
| Source | The two-door panel on `https://www.gt.school/about-us`, from a screenshot Johnny took on 2026-09-11. The live site was **not** opened by this build; the source is worked from the capture's description in the brief and from the three claims rows the register already holds for it (CR-039, CR-040, CR-041) |
| Files | `index.html`, `styles.css`, this file; `qa/` holds the runner's output (`fold.md`, 19 viewport captures, `V2-full.jpg`, `V14-full.jpg`, `V2-rootx2.jpg`, `focus-cta.jpg`, `focus-plate.jpg`, `focus-footer.jpg`, `focus-footer-plate.jpg`, `forced-colors.jpg`) and `M32-measure.mjs`, the parity and diagnostics probe written for this mock |
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

**2. The source does not give the two doors equal weight.** Measured from the capture's description, counting only what the register can vouch for:

| What is below the mark | Left panel (Georgetown) | Right panel (GT Anywhere) | Ratio |
|---|---|---|---|
| Type objects | 1 (a button) | 3 (headline, paragraph, button) | 3 : 1 |
| Lines of set text | 1 | 7 (2 headline + 4 paragraph + 1 button) | 7 : 1 |
| Characters of set text | 9 ("APPLY NOW") | **at least 222** — the registered paragraph text is 212 characters (CR-039 75, CR-040 48, CR-041 89) plus "LEARN MORE" 10; the two-line headline is additional and its wording has no register row, so it is excluded from the count | **24.7 : 1** |
| Saturated colour | none | one filled accent button | the component's only saturated fill sits on one of the two doors |
| Control treatment | "a small dark button" | a filled accent button with a diagonal arrow | different fill, different size, different affordance |

That is not a pair; it is a recommendation with a second option beside it. DD-26 option (a) settles equal visual weight and exemplar C01 (Tate's two identically weighted CTAs) is the slate's own rule, so M32 builds parity and reports it. **Measured: every one of the seventeen geometric properties is equal to 0.0px at all nineteen matrix rows** (table below). The residual differences are the ones no layout can remove without changing the fixed copy:

| Residual | Georgetown | GT Anywhere | Why it stays |
|---|---|---|---|
| Characters of set text in the panel | 170 (label 9 + name 17 + line 115 + CTA 29) | 144 (6 + 11 + 108 + 19) | **1.18 : 1**, against the source's 24.7 : 1. It is `copy.md`'s own word count, fixed slots, not a layout decision |
| Mark width | 120.5px at V2, 139px at V16 | 145.7px at V2, 168px at V16 | The two artworks have different aspect ratios (139/32 and 252/48). K12 V2 sizes marks **by height**, and the runner fails an aspect skew over 1%, so equal widths would mean a distorted mark. Heights are equal to 0.0px at every row and skew is 0% at both measured widths |
| The mark plate's ground | `--color-bg` (1.10:1 against its panel, so the plate reads as the panel) | `--color-navy` (12.79:1 against its panel, so the plate reads as a navy block) | The GT School wordmark is navy lettering and the GT Anywhere wordmark is white lettering (`copy.md` section 8, CONTRACT section 1, checker R16). Ground is the artwork's requirement. **The box is the page's parity**: both plates are one width (set from the wider mark's own 252/48 aspect), one height, one padding, one `--radius-sm` corner, one `--color-border-strong` hairline, one position — measured equal to 0.0px at all nineteen rows |
| Line count inside the panel at some rows | 3 lines at V14 | 2 lines at V14 | Copy length again. The CTA is bottom-aligned with `margin-top: auto`, so the slack falls above the control and the two CTA boxes still share a top and a bottom edge to 0.0px |

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
| Typography | Contract roles. Literata italic on the h1's second clause, no colour taken with it |
| Colour and surface | Page `--color-bg`, frame `--color-navy`, panels on the two school tints. CTAs navy with near-white labels per DD-46, both identical. The estate's orange button is not copied. Every on-navy and on-tint pairing at or above 4.5:1, each ratio stated below. Focus per contract; the two-band ring where a mark keeps a navy plate |
| Motion | Still; the page is complete at rest. V6 specified on the steps and secondary CTAs and **not shipped** (it needs the D-039 script). Reduced motion `--duration-none`, verified by the runner at V14 |
| Copy | `copy.md` sections 0 to 8 verbatim; 61 fixed slots string-matched (Self-check). The source's paragraph appears only in this file |
| Acceptance | Panel parity measured and reported at all nineteen rows, seventeen properties, worst delta **0.0px**. Matrix as the contract: the runner's Result line reads "all required rows pass". Both wordmarks and both mark-plate focus rings pass under forced colours in both palettes. This file names DD-26, DD-42, DD-46, DD-47, RF-25 and the seven claims rows |
| One accent use on the first screen | **Departure, stated.** Zero accent uses as a page colour; see Departures. The only orange on the first screen is the leaf inside each of the two marks, which appears once in each panel |

## Fold: designed to, then measured

Method: the four contract rows are budgeted from the space tokens the height bands set, the h1 line counts from `CONTRACT.md` section 2 (six lines at V2 and V5, four at V14 and V16) with a seventh line budgeted at V2 as headroom, because M12's measurements found the contract's V2 estimate one line optimistic for a narrower column. The compact door block is the contract's own rule, used wherever the panels are stacked or the room is short. Limits are viewport height minus 24.

| Row | Viewport | Limit | Designed-to sum (header, cream, h1, provenance, frame padding, two panels, gutter) | Estimated CTA 2 bottom | Measured CTA 2 bottom | Spare |
|---|---|---|---|---|---|---|
| V2 | 375 by 629 | 605 | 57 + 4 + h1 6 lines 188.1 + 4 + prov 17.6 + 4 + frame 4 + panel 135.1 + gutter 4 + (panel 135.1 − pad 8) | 545.2 (576.6 had the h1 set in 7 lines) | **545** | 60 |
| V5 | 414 by 715 | 691 | 57 + 8 + h1 6 lines 192.8 + 4 + prov 17.6 + 8 + frame 8 + panel 151.8 + gutter 8 + (panel 151.8 − pad 16) | 590.6 | **591** | 100 |
| V14 | 1280 by 720 | 696 | 57 + 24 + h1 4 lines 198.6 + 8 + prov 18.6 + 24 + frame 24 + (panel 300.8 − pad 32), the two panels side by side | 622.8 | **623** | 73 |
| V16 | 1440 by 900 | 876 | 57 + 48 + h1 4 lines 211.6 + 16 + prov 18.8 + 48 + frame 24 + (panel 300.2 − pad 32), side by side | 691.2 | **692** | 184 |

The four design-to sums land within one pixel of the measurements. At V14 and V16 the two CTAs sit side by side, so one row serves both and the two measured bottoms are equal.

**The runner's own table, pasted from the current run** (`qa/fold.md`, 2026-09-11T23:55:03.933Z):

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 89 | 283 | 305 | 456 | 615 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 57 | 249 | 271 | 406 | 545 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 255 | 276 | 428 | 587 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 255 | 277 | 428 | 588 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 258 | 279 | 431 | 591 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 274 | 299 | 479 | 651 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 256 | 278 | 429 | 589 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 227 | 249 | 401 | 561 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 271 | 296 | 476 | 647 | yes | report: page height 6931 |
| V10 | 750 by 342 | fold | 318 | 57 | 144 | 166 | 308 | 308 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 262 | 296 | 670 | 670 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 268 | 302 | 677 | 677 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 259 | 285 | 582 | 582 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 280 | 306 | 623 | 623 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 287 | 313 | 535 | 535 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 317 | 351 | 692 | 692 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 317 | 351 | 692 | 692 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 89 | 310 | 332 | 466 | 605 | no | PASS no horizontal scroll |
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

The runner's own reading, pasted from `qa/fold.md`. "Ink" means text, a painted edge or an image: section padding and the empty leading of a line box do not count.

| Row | Cut | What a reader sees at the bottom edge |
|---|---|---|
| V1 | yes | text cut by the edge, 732 to 752 |
| V2 | yes | content reaches 622 of 629 and more follows below |
| V3 | yes | text cut by the edge, 656 to 676 |
| V4 | yes | content reaches 655 of 659 and more follows below |
| V5 | yes | text cut by the edge, 708 to 728 |
| V6 | yes | text cut by the edge, 814 to 841 |
| V7 | yes | content reaches 678 of 681 and more follows below |
| V8 | yes | text cut by the edge, 717 to 744 |
| V9 | yes | text cut by the edge, 840 to 860 |
| V10 | yes | text cut by the edge, 328 to 356 |
| V11 | yes | text cut by the edge, 1015 to 1035 |
| V12 | yes | text cut by the edge, 1189 to 1202 |
| V13 | yes | text cut by the edge, 750 to 794 |
| V14 | yes | text cut by the edge, 699 to 734 |
| V15 | yes | content reaches 644 of 648 and more follows below |
| V16 | yes | text cut by the edge, 875 to 925 |
| V17 | yes | text cut by the edge, 948 to 983 |
| V18 | no | the reflow row is 256px tall; the header and the seven-line h1 alone reach 310, and DD-44 does not apply the fold rule here |
| V19 | yes | text cut by the edge, 552 to 581 |

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

`node 0_plan/mockups/M32-the-two-panels/qa/M32-measure.mjs`, seventeen properties per panel, the Georgetown panel against the GT Anywhere panel. Every delta is the absolute difference between the two panels at that row.

| Row | Viewport | w | h | padT | padR | padB | padL | plateW | plateH | markH | labelX | labelY | nameX | nameY | ctaW | ctaH | ctaX | ctaY | Worst |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V2 | 375 by 629 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V3 | 390 by 664 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V4 | 393 by 659 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V5 | 414 by 715 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V6 | 412 by 839 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V7 | 402 by 681 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V8 | 430 by 739 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V9 | 390 by 844 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V10 | 750 by 342 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V11 | 768 by 1024 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V12 | 834 by 1194 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V13 | 1024 by 768 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V14 | 1280 by 720 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V15 | 1366 by 648 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V16 | 1440 by 900 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V17 | 1920 by 960 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V18 | 320 by 256 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| V19 | 1024 by 576 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

**Worst delta across all nineteen rows: 0.0px.** The acceptance row asks for equality within 2px on panel width, height, inner padding, mark size, CTA box and label position; all six are 0.0, and eleven further properties are reported with them. Absolute values at the four contract rows, so the numbers are checkable rather than only equal:

| Row | Panel w × h | Padding T R B L | Plate w × h | Mark height | Label x, y | Name x, y | CTA w × h | CTA x, and its gap to the panel floor |
|---|---|---|---|---|---|---|---|---|
| V2 | 335 × 135.1 | 8, 16, 8, 16 | 155.7 × 37.8 | 27.8 | 179.7, 19.4 | 16, 49.8 | 303 × 44 | 16, 8 |
| V5 | 366 × 151.8 | 16, 16, 16, 16 | 157.7 × 38.1 | 28.1 | 181.7, 27.5 | 16, 58.1 | 334 × 44 | 16, 16 |
| V14 | 556 × 300.8 | 32, 32, 32, 32 | 178 × 42 | 32 | 218, 45 | 32, 82 | 384 × 44 | 32, 32 |
| V16 | 620 × 300.2 | 32, 32, 32, 32 | 178 × 42 | 32 | 218, 44.9 | 32, 90 | 384 × 44 | 32, 32 |

Both panels return the same figure in every cell above; the only property in the probe that differs is the mark's own width (120.5 against 145.7 at V2, 139 against 168 at V16), for the reason given under Corrected.

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
| `gt-school-logo-h.svg` (139 by 32) | Header lockup on `--color-bg`; the Georgetown panel's mark on a `--color-bg` plate; the footer link to www.gt.school on a `--color-bg` plate. Height `clamp(1.6875rem, 1.5rem + 1vw, 2rem)`: 27.9px at 390, 32px from 800 (K12 V2). Eager | "GT School" | The real mark from the mirror; its navy lettering needs a light ground | None needed |
| `gt-anywhere-logo-h.svg` (252 by 48) | The GT Anywhere panel's mark on a `--color-navy` plate; the footer link to anywhere.gt.school on a `--color-navy` plate. Same height clamp. Eager | "GT Anywhere" | The real mark from the mirror; its white lettering needs the navy ground | None needed |
| Photographs | **None in the default state** (DD-42 option a, RF-25, AD-11). Every file in `ASSETS.md` shows identifiable children, re-checked 2026-09-11 | | Published by GT on its own sites; consent to be confirmed by Nari (AD-11) | The default state is the state that ships. The photographed state is specified under "Corrected" with its files, crops, DPR ceiling and the AA treatment the source omits; it needs Nari's written permission **and** a GT Anywhere photograph that `shared/img/` does not contain, because DD-42's photographed state requires parity and one photographed door is not an option (DD-31) |

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
| `--color-border-strong` on `--color-georgetown-tint` / `--color-anywhere-tint` | the two mark plates' hairlines | **3.31 / 3.35** | 3 graphical |
| `--color-border-strong` on `--color-navy` | the navy plate's hairline where it meets the plate | **3.82** | 3 graphical |
| `--color-bg` on `--color-georgetown-tint` | the GT School plate's ground against its panel | **1.10** | none; stated as the residual asymmetry under Corrected. The plate is read by its hairline, not by its fill |
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
| `--color-border-strong` on `--color-bg` / `--color-surface` | link underlines, the anchor rule, the proof rules, the footer's top rule and its plates | 3.63 / 3.31 |
| `--color-border` on `--color-bg` / `--color-surface` | the header hairline, the table rules, the step rules | 1.56 / 1.42 — decorative only; no rule carries meaning alone |
| `--color-focus` on `--color-bg` / `--color-surface` | the ring everywhere else | 8.20 / 7.46 |
| `--color-focus-on-dark` against `--color-navy`; `--color-navy` against `--color-surface` | the two bands of K3's ring on the footer's GT Anywhere plate, so one band passes on either ground (K3 F10) | 14.58 / 12.63 |

**Palette usage map.** Navy is a **surface** on exactly two bounded objects, the frame and the reprise frame, plus the two navy mark plates inside them and in the footer; navy is also the **fill** of every control on the page, which is DD-46 (a)'s light-surface treatment rather than a third surface. The two school tints appear on the four panels and on the TEFA module. `--color-surface` is also the footer's ground. **The accent is spent zero times as a page colour** (see Departures); the only orange anywhere is the leaf inside the two mark artworks, which is a mark rather than an accent event, and which appears exactly once in each panel — the one place this page's symmetry is enforced by the brand files themselves.

## Departures

| Departure | Value | Reason |
|---|---|---|
| **Zero accent uses on the first screen**, where the brief's Colour row says one | no `--color-accent` declaration anywhere in `styles.css` | K3 section 5f caps the accent at one per screen; it does not require one. This direction argues the cap down to zero and the argument is the direction's own: the source spends its single saturated colour on **one of the two doors**, which is a third of the imbalance measured above. Inside a frame whose whole claim is that the two doors are equal, any single accent either lands on one door — and re-creates the defect — or on the frame, where it is ornament on a lattice that already reads. The orange that does appear is the leaf inside each mark, once per panel, identical on both sides. Stated here rather than taken silently |
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

All six rows that reach the page are "Unverified, public" in `0_plan/12-claims-register.md`: usable in a mock (G0.5), blocked for production until Nari approves the wording (REQ-022). Counts are `check-claims.py`'s own; the door lines appear twice in the markup and once on screen, which is why CR-032 and CR-033 count higher than in a single-copy mock.

| Figure on the page | Where | Row | Count | Status | Owner |
|---|---|---|---|---|---|
| 90th percentile | Table "Admissions" (both cells), proof fact 1, steps line | CR-011 | 4 | Unverified, public | Crystal |
| $10,400 a year | Table "Tuition and access", GT Anywhere cell | CR-021 | 1 | Unverified, public | Nari |
| four in-person weekends / Four intensive weekends | Both copies of the GT Anywhere door line, the table's "In-person time" row, the footer facts | CR-032 | 4 | Unverified, public | Nari |
| 9 to noon, about two hours / Two hours of mastery academics | Both copies of the Georgetown door line, the table's "The day" Georgetown cell | CR-033 | 2 | Unverified, public | Nari |
| Two to three hours | Table "The day", GT Anywhere cell | CR-034 | 1 | Unverified, public | Nari |
| check-in every week / every week | Table "Guides" GT Anywhere cell, proof fact 3 | CR-035 | 2 | Unverified, public | Nari |

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

CR-022 ($10,474) is not on the page; the TEFA module carries no figure. `check-claims.py` lists no withheld claim and no figure without a row.

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
| The first screen's application action | Navy `rgb(0, 42, 58)` fill, near-white label, Inconsolata uppercase at 16px, computed weight 500 | Navy fill with a near-white label on every control on the page, Inconsolata uppercase at 17 to 18px, weight 600 | Same colour vocabulary, same face, same case. Size and weight differ: `shared/fonts.css` ships Inconsolata 400 and 600 only, so a 500 cannot be registered without adding a face, and the estate's 500 is a computed weight rather than proof of a 500 face |
| The pre-footer application card, and the source component's "LEARN MORE" | Accent orange fill, near-white label at **2.50:1** (K12 F87) | Not copied (DD-46). No orange fill anywhere; no orange type anywhere | Deliberate: copying it would import a contrast failure onto the page's most important control, and in the source it is also the thing that makes one door louder than the other |
| Button silhouette | Three constructions across the estate: a composed cut lower-right corner on two cards, a 14px clipped polygon in the footer, four rounded corners on the desktop header's application button | One uniform `--radius-md` corner on every control (DD-47), which is the shape of the estate's own desktop-header application control | Matches one of the estate's three, and the one on the control a parent clicks to apply |
| **The two-door component itself** | The estate's own about page carries it: navy frame, two panels, a gutter, a mark per panel, square corners inside a rounded one | The same object, corrected | This is the continuity argument of the direction. A parent who has seen gt.school's about page meets a shape they recognise, minus the imbalance and minus the claims |
| Footer navigation | Uppercase Inconsolata | Inconsolata at `--text-sm`, in the case `copy.md` writes | Face matches; case does not, because the deck's link labels are sentence case and `text-transform` would change how they read |
| Mark handling | The GT Anywhere mark is white lettering with an orange leaf; the estate's hero carries an Alpha School lockup | The GT Anywhere mark only on navy (its panel plate and the footer plate); the GT School mark only on light (the header, its panel plate, the footer plate). 27.9px at 390 and 32px at 1440, aspect skew 0% at both, measured by the runner on all five instances | Matches, and the runner measures it every pass |
| Grained cream, wave linework, the composited student cut-out | Present on the estate's hero | Absent. No photograph, no texture | Declared: DD-42 holds the photograph and a grain is a value on neither site's token list |
| The phone's redistributed chrome | At 390 the estate's header holds the mark and MENU only | At 390 the header holds the mark and two text links, no menu (DD-12) | Different by decision, not by accident |

Where a parent lands after pressing a door: the navy control with a near-white Inconsolata label is answered on anywhere.gt.school by a navy application card in the same face and case; the ground, the two display faces and the mark files are literally the same. What does not carry across is the estate's grain, its photographic hero and its 300-weight tracked headline — and, deliberately, its orange button and its orange italic.

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

**Runner.** `node 0_plan/tools/shots.mjs 0_plan/mockups/M32-the-two-panels`, run of 2026-09-11T23:55:03.933Z: **Result: all required rows pass.** Reduced motion at V14: every computed transition and animation duration 0s, elements and pseudo-elements. Root font doubled at V2: no horizontal scroll at 375 with a 32px root. Console: no errors. Interactive targets: "every interactive target is at least 44px tall" at all three sampled rows, the 320px reflow row included. Mark geometry: five marks at each width — `gt-school-logo-h.svg` three times (header, Georgetown panel, footer plate) and `gt-anywhere-logo-h.svg` twice (GT Anywhere panel, footer plate) — 27.9px at 390 and 32px at 1440, aspect skew 0% on all ten measurements.

**Forced colours, both palettes** (`qa/fold.md`, "The GT marks under forced colours"): every instance of both wordmarks reports "kept by the image itself", in the light and the dark palette, and the three ring measurements report 13.88:1, 13.88:1 and 14.58:1 against the ground each plate actually keeps. `qa/forced-colors.jpg` was read with the Read tool: the frame, both panels, both mark plates and both controls keep drawn borders when the two tints and the navy collapse to Canvas, so the lattice survives and both wordmarks stay whole.

**Fixed by looking at the captures, not by assertion:**

| What the capture showed | Fix |
|---|---|
| `qa/focus-cta.jpg` showed **no visible ring** on the first door CTA. The two-band ring had been applied to it on the assumption that a control inside a navy frame stands on navy; it does not — it stands on a light tint, where `--color-focus-on-dark` measures 1.14 and 1.15 | The door CTAs take `--color-focus` like every other control on the page (7.46 and 7.56 on the two tints). The two-band ring is kept only where a mark keeps a navy plate |
| The runner's next-band evidence named the frame's navy-to-cream edge, not text, at V11, V12, V13 and V16 | The anchor band's padding, the sections' top padding and the table block's top margin each came down one token; all four rows now report real text cut by the edge |
| `qa/fold.md` failed the doubled-root-font run at 375 (scrollWidth 499, then 418) | The mark plate's shared width is capped at `100%` and the head row wraps; the h1's nowrap span is released by a container query below 20rem |
| At V1 (740) and V5 (715) the first screen finished exactly at the fold and nothing crossed the bottom edge | The tight height band was widened to 767px, but only below 768px wide, so the rows where the sentence is long take the squeeze and the wide-and-short rows keep the full rhythm |
| At V14 and V15 the panels had 8px of side padding inside a 556px panel, because the height band was setting horizontal padding | The bands were split: width sets the lattice and the side padding, height sets the vertical rhythm only |

**Grep checks** (from the repo root, 2026-09-11): `<form` 0; `<input` 0; `<script` 1 (JSON-LD); hosts in `index.html` and `styles.css`: gt.school, www.gt.school, anywhere.gt.school, apply.gt.school, community.gt.school, schema.org only; digits in visible text: 09, 10, 10,400, 2026, 270, 512, 8, 9, 90, 9481; "advis" in visible text: 0; "Georgetown Campus" 9 occurrences in visible text, "GT Anywhere" 15; provenance line once; sources line twice (under the table and under the facts); **61 fixed slots from `copy.md` sections 0 to 8 found verbatim** by string match against a whitespace-normalised page; words on the page outside `copy.md` sections 0 to 9: none; raw hex in `styles.css`: **0**; `transition:` declarations in `styles.css`: 0; `vh`, `svh`, `dvh` in `styles.css`: 0; `index.html` 15,524 bytes plus `styles.css` 27,612 bytes, 43,136 bytes in all.

**Contrast.** Every pairing in the tables above computed from the token values with the WCAG 2.x formula. Inside the frame every string is at 5.69 or above and every drawn edge at 3.31 or above; on the light surfaces every running paragraph is `--color-text` at 16.10 or better.

**Checker output**, pasted from the run of 2026-09-11:

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

**Screenshots read with the Read tool**, not assumed: `V2.jpg`, `V9.jpg`, `V10.jpg`, `V11.jpg`, `V14.jpg`, `V15.jpg`, `V16.jpg`, `V17.jpg`, `V18.jpg`, `V2-full.jpg`, `V14-full.jpg`, `focus-cta.jpg`, `focus-footer.jpg`, `focus-footer-plate.jpg`, `forced-colors.jpg`, and bottom-edge crops of `V12.jpg`, `V13.jpg`, `V16.jpg` and `V17.jpg`.
