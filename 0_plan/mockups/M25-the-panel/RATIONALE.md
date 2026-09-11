# M25 The Panel, rationale

| Field | Value |
|---|---|
| Mock | M25 "The Panel", G-D build wave, new direction from the Design Library, 2026-09-11, **build pass 2** (round-two iteration on both critics' cards; see Iteration at the end) |
| Brief | `0_plan/kb/briefs/M25.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1; the borrowing rule at the head of `0_plan/kb/briefs/M21.md` binds it (DD-48) |
| Lens order | L1 objective, L4 exclusivity, L2 continuity, L3 mission |
| Source language | `insp-watermelonui` "Charcoal Component Dark" (primary) and `insp-cloudstudio` "Pastel Hard-Cut" (support, chrome only), both in `~/projects/libraries/design/library-data.js`; the whole-page reference is `examples/kindling.html` |
| Files | `index.html`, `styles.css`, this file; `qa/` holds the runner's output (`fold.md`, 19 viewport captures, `V2-full.jpg`, `V14-full.jpg`, `V2-rootx2.jpg`, `focus-cta.jpg`, `focus-plate.jpg`, `focus-footer.jpg`, `focus-footer-plate.jpg`, `forced-colors.jpg`) and the two composed comparison sheets `estate-side-by-side-390.jpg` and `estate-side-by-side-1440.jpg` |
| State | Default state: no photograph in either state (DD-42 option a, RF-25 pending, and the brief forbids one outright — see Imagery). No JavaScript: D-039 is undecided, so the complete static state ships and no `data-d039` declaration is made. Links `../shared/tokens-v2.css` |
| Register rows this build depends on | DD-38 (type scale, prose leading), DD-39 (colour roles on navy), DD-43 (repeated comparison cells), DD-44 (fold contract), DD-46 (surface-dependent button fill), DD-47 (uniform button corner), DD-48 (borrowing from the Design Library), MN-16 (motion contract), D-039 (scripts: none shipped), DD-42 (photographs: none), R6 (comparison breakpoint), R14 (tour label) |

## Direction

Hypothesis: **the choice is a component, not a place.** One bounded navy panel floats on the cream ground with visible cream on all four sides; inside it are the fixed sentence, one small provenance line, two controls and the GT Anywhere mark, and nothing else. Everything a parent needs to route sits inside a single object they can take in at a glance, and the rest of the page — evidence cards, comparison, proof, steps — is the evidence behind it, drawn in the same hairline-rectangle language one step down. The objective lens is served by a first screen that is literally a control panel: the two doors are the only two things a parent can press. Exclusivity is carried by restraint and by the stated bar below the fold, never by price or wealth cues (DD-10, MD-25). Continuity is carried by the estate's own ground, faces, marks, button face and case, and by one device the estate already uses in its own headline (below). Mission is carried by fact density under the panel (DD-29).

The first screen is one column: a 56px header on `--color-bg` with the GT School mark and two utility links over a `--color-border` hairline; then cream; then the panel. The panel opens with a header strip — "TWO WAYS TO ATTEND" at the left, two `--font-mono` chips at the right, a hairline under both — then the h1 at `--text-3xl`, the provenance line at `--text-sm` in `--color-text-muted-on-dark`, and the two doors as a tight row of two identical controls (label above each). **Then it closes.** Under the panel, on cream, the two door lines sit at the panel's own inner edges so each begins exactly beneath its control; then the compare anchor closed by a rule; then the three evidence cards; then the comparison table, the proof strip, the steps, the secondary CTAs, the families card and a `--color-surface` footer.

**Navy never reaches a page edge anywhere on this page.** The two navy *surfaces* are the panel and the footer's GT Anywhere plate, both bounded rectangles with cream around them; navy is also the *fill* of the controls below the fold (the two application buttons, the two repeated doors), which is DD-46 (a)'s treatment on a light ground rather than a third surface. That is the whole distinction from M03 Navy Thesis and it is stated again, with measurements, under "A panel, not a field".

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere." Literata 400 at `--text-3xl` (27.00px at 360, 46.00px at 1440), `--leading-tight` 1.15, capped at 35ch, `--color-on-navy` (14.58:1 on navy).

**One word is Literata italic in the accent**: "or", the hinge of the choice. The brief names the word and the role; the token is a declared change, measured (see "Colour and contrast"). Two typographic no-breaks keep the phrasing whole without changing a word: "in&nbsp;person" and a `span.nowrap` around "from anywhere." so the last line is never one word; the nowrap is released by a container query when the panel is narrower than 12rem, which only happens with a doubled root font. `text-wrap: balance` applies from 768px, where the sentence sets in four lines; the seven-line phone setting is left unbalanced (K10 T-K10-15).

Heading structure: one h1. The doors list is labelled by the panel strip's label (`aria-labelledby="doors-label"`) rather than by a visually hidden h2, so no heading appears before the h1 in the document order and no level is skipped. Section h2s: "Compare the two schools" (visually hidden; the table caption is the visible title), "What is true of both schools", "How to apply", "Questions before you apply", "Already a GT family?".

## What was borrowed, and what was deliberately not

| From the source | Borrowed here | Form it takes in GT |
|---|---|---|
| `insp-watermelonui`: the dark bounded panel as the whole hero | Yes, as the direction itself | `--color-navy` surface, `--radius-md`, inset from the page grid, cream on all four sides |
| The headline as the whole design, with exactly ONE italic accent word so emphasis reads typographically rather than chromatically | Yes | "or" in Literata italic, `--color-accent`, 5.83:1 on navy. This is also the estate's own headline device (see Continuity) |
| A deliberately small sub-paragraph beneath the headline at reduced opacity | Yes, re-cast as content we already have | The provenance line at `--text-sm` in `--color-text-muted-on-dark` (7.81:1), one line at every measured row |
| A tight row of two controls, close together under the sentence | Yes, the row; **not its ranking** | Two controls identical in markup, geometry, padding, type, corner, target, column width **and fill**: `--color-on-navy` with a `--color-text` label, both of them |
| **Not borrowed: the source's solid-against-ghost pairing** | No | The source's pair is a primary beside a secondary ("Browse components" beside "Read the docs"), so solid-against-ghost is its *hierarchy*, not its composition, and DD-48 licenses the second and not the first. Build pass 1 took it and the studio critic measured the cost: mean luminance inside the two identical boxes was 226.7 against 58.3 at V2 on a panel ground of 34.4, which is a lamp beside an outline. Fill was also the only property that could differ here, and the page gives fill no meaning — mode is carried three times over by the chips, the labels and the run-in names — so the only reading left for a parent was priority, which is the implicit recommendation DD-26 (a) forbids |
| The component-preview grid of rounded, 1px-bordered tiles, each holding one element | Yes | The three evidence cards, and the family card and TEFA card later; each is a `--color-border` rectangle with a header strip |
| `insp-cloudstudio`: deliberately thin chrome, a small label at one end and two tiny uppercase status chips at the other, nothing else competing | Yes | The panel's header strip: "TWO WAYS TO ATTEND" left, two `--font-mono` `--text-xs` chips right, hairline under |
| **Not borrowed: the charcoal `#28222B` and slate `#34364A` ground** | No | GT's `--color-navy` `#002a3a` is the estate's own dark surface and the only one K12's "what never changes" list allows (DD-48) |
| **Not borrowed: the bright cool type colour `#DEE2E8`** | No | `--color-on-navy` `#fbfbfb`, the estate's own near-white, 14.58:1 |
| **Not borrowed: the warm sand badge `#DCAB97`** | No | A second accent would break K3 section 5f's one-accent-per-screen budget and introduce a swatch that is on neither site. The chips carry no fill at all: a hairline border at 3.00:1 and muted-on-dark text |
| **Not borrowed: the fully rounded pill radius** | No | DD-47 settles the uniform corner; every control, card and panel on this page uses `--radius-md`, the shape the estate's own desktop-header application button already draws. The chips take `--radius-sm` because they are a smaller object, and that is named under Departures |
| **Not borrowed: Cloudstudio's live-session dot** | No | It asserts that something is happening right now, which is not true of this page, and REQ-022 does not permit an implied claim any more than a numeric one |
| **Not borrowed: the source's typefaces** (its near-white sans display, its mono tags) | No | Literata, Inter Tight and Inconsolata only (DD-01, DD-36, K12 G1/G3/G12) |
| **Not borrowed: the source's centred hero column** | No | The panel's content is left-aligned on the page grid. Centring a 132-character Literata sentence inside a panel produces a ragged axis on both sides at phone widths and fights the comparison table below it. The source centres an 87-character sub-paragraph set to a `46ch` measure (`examples/kindling.html:23`, `:65`), which is a different problem from a fixed sentence that runs to seven phone lines |
| **Not borrowed: the source's motion** (0.25s headline fade-and-rise, hover lifts) | No | The brief says still, and the panel's argument is that the choice is complete at rest. Nothing on this page animates |

## A panel, not a field: how, at every row, and what it cost

M03 Navy Thesis carries the fixed sentence on a full-bleed navy field that runs to the page edges and is bounded only by the viewport. M25 never lets navy touch an edge. Five devices carry that, and they are cumulative:

1. **Cream on the left and right at every row**, measured below. Below 768 the panel sits at the page margin; from 1024 it is inset by a further one 12-column column plus one 32px gutter, `calc((100% - 22rem) / 12 + 2rem)`.
2. **Cream above the panel at every row**, between the header's hairline and the panel's top edge, measured below.
3. **A `--radius-md` corner on all four corners.** A rounded rectangle on cream is an object; a field has no corners.
4. **The panel is closed at the bottom, inside the first screen, at every fold row.** Its last element is the control row; under it sits the panel's own bottom padding, one token, equal to its top padding in each height band (16 / 24 / 48). Build pass 1 closed the panel with a second hairline, the GT Anywhere mark and a deeper pad, and that foot pushed the bottom edge off the screen at all eight phone rows, the landscape row and V15 — ten of seventeen. The lines and the mark are out (below), and the object now closes at **16 of 16 fold rows**.
5. **The rest of the page repeats the shape.** The evidence cards, the TEFA card, the families card and the two footer logo plates are all bounded rectangles with the same corner. By the time the parent reaches the second screen, the panel reads as the largest member of a set, not as a background.

Measured with Playwright at the same server the runner uses (`qa/fold.md` for the fold bottoms; the geometry below re-measured in the same pass):

| Row | Viewport | Cream left / right | Cream above | Panel top / bottom | All four edges inside the first screen |
|---|---|---|---|---|---|
| V1 | 360 by 740 | 16 / 16 | 24 | 113 / 607.3 | **four of four** |
| V2 | 375 by 629 | 16 / 16 | 16 | 73 / 537.5 | **four of four** |
| V3 | 390 by 664 | 16 / 16 | 24 | 81 / 579.7 | **four of four** |
| V4 | 393 by 659 | 16 / 16 | 24 | 81 / 580.1 | **four of four** |
| V5 | 414 by 715 | 16 / 16 | 24 | 81 / 583.2 | **four of four** |
| V6 | 412 by 839 | 16 / 16 | 24 | 81 / 583.0 | **four of four** |
| V7 | 402 by 681 | 16 / 16 | 24 | 81 / 581.4 | **four of four** |
| V8 | 430 by 739 | 16 / 16 | 24 | 81 / 585.6 | **four of four** |
| V9 | 390 by 844 | 16 / 16 | 24 | 81 / 579.7 | **four of four** (the emptiness row) |
| V10 | 750 by 342 | 16 / 16 | 8 | 65 / 295.8 | **four of four** (landscape) |
| V11 | 768 by 1024 | 32 / 32 | 48 | 105 / 549.7 | **four of four** |
| V12 | 834 by 1194 | 32 / 32 | 48 | 105 / 555.3 | **four of four** |
| V13 | 1024 by 768 | 128 / 128 | 24 | 81 / 467.3 | **four of four** |
| V14 | 1280 by 720 | 149.3 / 149.3 | 24 | 81 / 489.0 | **four of four** |
| V15 | 1366 by 648 | 156.5 / 156.5 | 24 | 81 / 496.4 | **four of four** |
| V16 | 1440 by 900 | 176 / 176 | 48 | 105 / 606.6 | **four of four** |
| V17 | 1920 by 960 | 416 / 416 | 48 | 105 / 606.6 | **four of four** |
| V18 | 320 by 256 | 16 / 16 | 16 | 105 / 638.4 | three of four — the reflow row is 256px tall and the header and h1 alone are 472 |
| V19 | 1024 by 576 | 128 / 128 | 16 | 73 / 427.3 | **four of four** (the zoom row) |

**Sixteen of the sixteen fold rows (V1 to V17, V9 excepted as the contract does) close the panel inside the first
screen, against six in build pass 1**, and V9 and V19 close too. The only row that does not is V18, where the
viewport is shorter than the header and the headline.

**What it cost, stated plainly.**

| Cost | Size | Why it was accepted |
|---|---|---|
| The page margin below 768 is **16px, not K1 section 5a's 24px** | 8px a side | Not a fold argument, which is the correction the studio critic made and which my own counterfactual reproduces: stepping `--page-margin` alone to 1.5rem lands CTA2 at **584.8 of 605**, a pass with 20.2px of spare. What the 8px buys is the setting. At 375 the panel's h1 column is 311px and the sentence sets in **seven** lines; at a 24px margin the column is 295px and it sets in **eight**. The gutter was kept, the page margin gave way, and the reason is how the headline reads rather than whether it fits |
| The panel's bottom edge is below the fold at **one row of nineteen**, V18 | one of four edges, at the reflow row only | Fixed in build pass 2 (above). V18 is 256px tall: the header and the eight-line h1 alone reach 472, so no object with a headline in it closes there, and DD-44 reports the fold at that row rather than requiring it |
| Cream on the left and right is only **4.3% of the viewport a side at 375** | | Measured, not guessed: it is 16px against a 343px panel. The corner radius, the cream band above and the panel's own closed bottom edge do the rest of the work at that width. `qa/V2.jpg` is the evidence and the critics are asked to score it |
| The panel costs **32.0px of vertical budget** that M03's field does not pay (16 cream above + 16 panel top padding at V2) | 32.0px at V2, measured | My counterfactual: zeroing `--p-gap-top` and `--p-pad-top` at V2 moves CTA2 from **521.5 to 489.5**, which is 32.0 and is what the parenthetical always summed to. Build pass 1 wrote ~43 in the headline cell against its own arithmetic; the studio critic caught it. The cost is also repaid rather than merely accepted: the compact door form puts M25's second CTA at **521 at V2 and 559 at V16**, against M03's **591 and 646** (`M03-navy-thesis/qa/fold.md`, read for this comparison), so the direction that pays a panel tax finishes its first screen 70 to 87px higher than the field direction it is measured against |
| The strip's left half is empty at 1920 | ~1000px of bar | It is a component header bar, and it is labelled: "TWO WAYS TO ATTEND" sits at its left end, so the bar is a named object rather than reserved space. This was the change made after looking at `qa/V16.jpg` and `qa/V17.jpg` in build pass 1 |

## Brief compliance

| Brief section | What was built |
|---|---|
| Mock id and name, lens order | M25, folder `M25-the-panel`; L1, L4, L2, L3 as above |
| Source language | Borrowed and refused, itemised in the table above |
| What is deliberately not borrowed | Each of the five omissions the brief names (charcoal and slate, the cool type colour, the sand badge, the fully rounded pill, the live-session dot) is named in that table with its reason |
| How this differs from M03 | Section "A panel, not a field", with the measured cream on all four sides at all nineteen rows, the closure count (16 of 16 fold rows) and the cost table |
| Thesis | One panel, one sentence, two controls, nothing else; the rest of the page is the evidence, in the same rectangle language |
| Exemplars | `examples/kindling.html` for the dark panel hero (composition only, no code and no values copied). Tate's two identically weighted CTAs (C01): the two controls are identical in geometry, markup, target size, position **and fill**, and the pair that returns after the table is identical in the same way, so the page prefers neither school at either encounter. Caltech's equally styled doors inside the first screen (C02): both doors are inside the panel, side by side from a 34rem panel. Nord Anglia's four identical labels (C22) avoided: the secondary CTAs are a hairline list with four distinct labels, not four buttons |
| Composition | Header 56 on `--color-bg` with the mark, two utility links and a `--color-border` hairline beneath. Panel: `--color-navy`, `--radius-md`, inset by the 16px page margin below 768 and by one grid column plus a gutter from 1024, holding h1 `--text-3xl`, provenance `--text-sm` in `--color-text-muted-on-dark`, the two doors as a tight control row **both `--color-on-navy` with navy labels, as the corrected brief now sets**, and two `--font-mono` `--text-xs` uppercase chips at the top right. The door lines moved out of the panel onto the cream beneath it (Departures), aligned to the panel's inner edges. Below that on `--color-bg`, evidence cards: one column below 768, two from 768, three from 1024, each a `--color-border` hairline card with a header strip and one of the deck's shared facts |
| Typography | Contract roles. Exactly one h1 word in Literata italic, in the accent, on navy, measured and stated below |
| Color and surface | `--color-bg` page, panel `--color-navy`, evidence cards on `--color-bg` with `--color-border` hairlines. The italic word is the panel's one accent use and the page's only one. Focus: `--color-focus-on-dark` with K3's two-band ring inside the panel and on the footer's navy plate, `--color-focus` everywhere else |
| Imagery | Default state: the GT School mark in the header and in the footer on a light plate, the GT Anywhere mark in the footer on its navy plate. **The brief puts the GT Anywhere mark at the panel's foot and build pass 1 did; build pass 2 takes it out** — a declared departure with the studio critic's Imagery finding as its reason (Departures). No photograph in either state, which is the brief's instruction and its reason: the panel's argument is that the choice is one object, and a photograph inside it would make it two |
| Motion | Still. Nothing animates. V6 on the evidence cards is specified and not shipped (it needs the D-039 script). V1 and V3 are instant by construction. V10 native anchor scroll ships inside `prefers-reduced-motion: no-preference`. Reduced motion: every duration `--duration-none` |
| Copy | Sections 0 to 8 verbatim (every fixed slot string-matched, Self-check); chip labels and the strip label from section 9 and section 1 |
| Conversion | Both doors on the first screen at every row; compare anchor directly beneath the panel; evidence cards; table with repeated values; proof; steps; secondary CTAs; current families; footer |
| Acceptance | Every on-navy pairing at or above 4.5:1 with the italic word's ratio stated (below); the runner's 19 rows all pass; the matrix as the contract. Rationale names DD-38, DD-39, DD-46, DD-47, DD-48 |

## Fold: designed to, then measured

Method: the h1 line counts were designed with the real Literata Regular TTF advances (greedy wrap, no kerning), then measured in the browser. Gaps are the space tokens named in `styles.css`. The panel strip is a chip line box (`--text-xs` at `--leading-body`) plus its 2px of border, the strip gap, the 1px rule and the rule gap. The compact door block is label + 4 + control 44. Limits are viewport height minus 24.

| Row | Viewport | Limit | Designed-to sum (header, cream, panel padding, strip, h1, provenance, doors) | Estimated CTA 2 bottom | Measured CTA 2 bottom | Spare |
|---|---|---|---|---|---|---|
| V2 | 375 by 629 | 605 | 57 + 16 + 16 + (17 + 8 + 1 + 8) + h1 7 lines 219.5 + 8 + prov 21.3 + 16 + (15 + 4 + 44) + 8 + (15 + 4 + 44) | 521.8 | **521** | 84 |
| V5 | 414 by 715 | 691 | 57 + 24 + 24 + (17 + 8 + 1 + 16) + h1 7 lines 225.0 + 8 + 21.5 + 24 + (15 + 4 + 44) + 8 + (15 + 4 + 44) | 559.5 | **559** | 132 |
| V14 | 1280 by 720 | 696 | 57 + 24 + 24 + (18.25 + 8 + 1 + 16) + h1 4 lines 198.7 + 8 + 22.5 + 24 + (16.25 + 4 + 44) | 465.7 | **465** | 231 |
| V16 | 1440 by 900 | 876 | 57 + 48 + 48 + (18.25 + 16 + 1 + 24) + h1 4 lines 211.6 + 16 + 22.5 + 32 + (16.25 + 4 + 44) | 558.6 | **559** | 317 |

At V14 and V16 the two controls sit side by side, so one row of label-plus-control serves both CTAs and the two measured bottoms are equal. The design-to sums land within one pixel of the measurements at all four rows.

**Height bands** (`.first-screen` custom properties). Three bands plus the landscape recipe, one fewer than build pass 1: the default 640–899 band; a tight band at or below 639px (V2, V18, V19 and the doubled-root-font run) where the cream gap, the panel padding and three internal gaps each step down one token; a relaxed band from 900px (V12, V16, V17) where they step up; and the contract's landscape recipe at `(max-height: 479px) and (min-width: 700px)` for V10. The 640–699 rule is gone with the object it protected: it existed only so the panel's foot would not slice the GT Anywhere mark at V15, and there is no foot now. In every band the panel's bottom padding equals its top padding (16 / 24 / 48), so the object is symmetrical.

**V10, the landscape recipe, declared as the contract asks.** At 750 by 342 the h1 steps down one token to `max(--text-xl, 1.5rem)` (24.17px at 750, measured 3 lines, 686px column) across the panel's full width, the section padding drops to `--space-3`, and the two controls sit side by side. Both CTAs end at 288 of 318. The `max()` floor is build pass 2's correction of a claim Astra failed: build pass 1 argued the recipe was gated at `min-width: 700px` rather than the contract's 600px because 700 kept `--text-xl` above K3 section 5e's 24px floor for the accent as text on navy, and it does not — `--text-xl` is `1.25rem + 0.5556vw` in that range, so it computes to **23.889px at 700** and only reaches 24.0px at 720. The floor is now carried by the token expression instead of by the gate, so the italic word is at or above 24px at every width the recipe can apply to, and V10 is unchanged at 24.17px. The gate stays at 700 for a different and measurable reason: the recipe puts the two controls side by side, and that needs 34rem of panel, which a 600px viewport (536px of panel) does not have.

The runner's full table, pasted from `qa/fold.md` (run of 2026-09-11T18:47:27.792Z, `0_plan/tools/shots.mjs`, cached Chrome for Testing chromium-1234 151.0.7922.34 — the timestamp is the one in the folder, which build pass 1 mis-cited and both critics caught):

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 89 | 396 | 425 | 512 | 583 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 57 | 342 | 371 | 450 | 521 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 369 | 398 | 485 | 556 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 369 | 398 | 485 | 556 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 372 | 401 | 488 | 559 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 372 | 401 | 488 | 559 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 370 | 399 | 486 | 557 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 374 | 403 | 491 | 562 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 369 | 398 | 485 | 556 | yes | report: page height 7230 |
| V10 | 750 by 342 | fold | 318 | 57 | 187 | 216 | 288 | 288 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 369 | 406 | 502 | 502 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 374 | 412 | 507 | 507 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 326 | 356 | 443 | 443 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 347 | 377 | 465 | 465 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 354 | 384 | 472 | 472 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 424 | 462 | 559 | 559 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 424 | 462 | 559 | 559 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 89 | 422 | 472 | 551 | 622 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 302 | 332 | 411 | 411 | yes | report: scrollWidth 1024 |
| V1 | yes | content reaches 728 of 740 and more follows below |
| V2 | yes | content reaches 627 of 629 and more follows below |
| V3 | yes | text cut by the edge, 657 to 677 |
| V4 | yes | content reaches 653 of 659 and more follows below |
| V5 | yes | content reaches 705 of 715 and more follows below |
| V6 | yes | text cut by the edge, 811 to 841 |
| V7 | yes | content reaches 679 of 681 and more follows below |
| V8 | yes | text cut by the edge, 730 to 750 |
| V9 | yes | text cut by the edge, 833 to 863 |
| V10 | yes | text cut by the edge, 335 to 355 |
| V11 | yes | content reaches 1019 of 1024 and more follows below |
| V12 | yes | content reaches 1192 of 1194 and more follows below |
| V13 | yes | content reaches 760 of 768 and more follows below |
| V14 | yes | text cut by the edge, 715 to 763 |
| V15 | yes | text cut by the edge, 625 to 660 |
| V16 | yes | text cut by the edge, 858 to 908 |
| V17 | yes | text cut by the edge, 945 to 966 |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 571 to 604 |
| Viewport | Target | Height | Width | Kind | Result |
| Viewport | File | Shape | Height | Width | Aspect skew | Result |

Every CTA bottom is identical to build pass 1's except at V18, where both controls now take one step down on the
button face so the longer label stops wrapping (551 and 622 against 568 and 639): moving the lines and the mark out
of the panel changed nothing above the fold, because nothing above the controls moved.

Header heights: 57px (a 56px row plus the 1px hairline) from 375 up; 89px at 360 and 320, where the utility links wrap to a second row so the mark can hold its 27px floor (K12 V2) on a 328px and 288px content width.

### What crosses the bottom edge, row by row

The runner's own reading is in `qa/fold.md` under "Next band evidence"; this names the element, measured in my own
pass (the deepest *visible* text rect below the last CTA, with visually hidden text excluded).

| Row | What a reader sees at the bottom edge |
|---|---|
| V1, V2, V3, V4, V5, V7 | The Georgetown door line on the cream below the panel, cut mid-sentence by the edge (728.3 of 740; 626.6 of 629; 676.9 of 664; 677.3 of 659; 704.6 of 715; 678.7 of 681) |
| V8 | The GT Anywhere door line, cut at 750.4 of 739 |
| V6, V9 | The compare anchor sentence, cut at 841 of 839 and 862.5 of 844 |
| V10 | A door line on cream, cut at 354.9 of 342 |
| V11 | The first evidence card's body text, cut at 973.5 of 1024 |
| V12 | The comparison table's caption, cut at 1192.5 of 1194 |
| V13 | The first evidence card's header strip, "SAME SCHOOL, SAME ACADEMICS", at 745.5 of 768, the card running to 918 |
| V14 | The "COMPARE" eyebrow at 711.7 of 720, with the three cards' top edges immediately below it |
| V15 | The compare anchor sentence, cut at 659.9 of 648 |
| V16 | The first evidence card's header strip at 887.8 of 900, the card running to 1013 |
| V17 | The first evidence card's body text, cut at 966.1 of 960 |
| V18, V19 | Reflow and zoom rows: the fold rule is reported, not required (DD-44) |

Build pass 1 had to engineer this at V13 and V16, where the last thing in the reserved band was the anchor band's
closing rule. It does not any more: the panel closes higher, so the evidence cards themselves reach into the
reserved band at both rows, which is better continuation evidence than a rule.

**One honest note about the runner, not about the page.** At V13, V14 and V16 the string in `qa/fold.md` quotes the
*visually hidden* h2 "Compare the two schools" (`content reaches 760 of 768`; `text cut by the edge, 715 to 763`;
`858 to 908`): `contentInk` skips `display:none`, `visibility:hidden` and zero opacity but not a 1px clipped box,
and a `Range`'s client rects ignore the clip. The verdict does not depend on it — with that text excluded the
deepest visible ink at those rows is 745.5, 711.7 and 887.8, all inside the contract's reserved 24px band with the
cards continuing below — but the evidence *string* names something a reader cannot see, and that is worth fixing in
`shots.mjs` rather than in a mock.

### Measured h1 line counts

Measured in the browser (h1 box height divided by the computed line box), not estimated.

| Row | h1 size | h1 column | Lines |
|---|---|---|---|
| V1 360 | 27.00px | 296px | 7 |
| V2 375 | 27.26px | 311px | **7** |
| V3 390 | 27.53px | 326px | 7 |
| V5 414 | 27.95px | 350px | **7** |
| V7 402 | 27.74px | 338px | 7 |
| V8 430 | 28.23px | 366px | 7 |
| V10 750 (landscape, `--text-xl`) | 24.17px | 686px | 3 |
| V11 768 | 34.18px | 640px | 4 |
| V12 834 | 35.34px | 706px | 4 |
| V13 1024 | 38.68px | 672px | 4 |
| V14 1280 | 43.19px | 875px | **4** |
| V15 1366 | 44.70px | 906px | 4 |
| V16 1440 | 46.00px | 932px | **4** |
| V17 1920 | 46.00px | 932px | 4 |
| V18 320 | 27.00px | 256px | 8 |

Against M12's measured counts (7 at 360 to 393, 6 at 402 to 430, 4 from 834), M25 holds **7 lines from 360 to 430** because the panel's padding narrows the column by 32px relative to a full-bleed layout. That is the direction's price and it is paid for by the compact door form; the V2 budget still finishes 84px inside its limit. The contract's own estimate of 6 lines at V2 is **one** line short for this column width, not two — Astra's correction, and it is arithmetic rather than judgement.

## Decisions applied

| Id | How it is applied in this mock |
|---|---|
| DD-01, DD-36 | Three faces, three jobs: Literata for the h1, h2s, door names, table caption and column heads, facts, steps and the anchor sentence; Inter Tight for running prose (door lines, table cells, provenance, card bodies, footer facts); Inconsolata for buttons, chips, eyebrows, card strips, row labels, step counters, the header and footer link lists and the phone number. The only uppercase on the page is Inconsolata (K12 G15) |
| DD-02 | Departure taken deliberately and bounded: the dark surface is a panel, not a page. Text on it is off-white at 14.58 and muted at 7.81 |
| DD-03, DD-20, DD-33 | One umbrella sentence above the doors, spelling out gifted and talented and both ways to attend |
| DD-04 | Cue set: the door label ("In person" / "Online") above each control, the full school name as the run-in of that door's line below the panel, and the same two labels as the panel's chips. No icon, no photograph. Three text cues per door is why fill can carry no meaning here, which is the argument for the identical controls |
| DD-05, DD-23 | "Explore the Georgetown campus" / "Explore GT Anywhere" on the first screen (`first_screen`) and again after the table (`after_comparison`) |
| DD-06, DD-43, R6 | A real `<table>` with caption, `scope="col"` and `scope="row"`; shared rows first with the value repeated in both columns; a table from a 58rem container, stacked blocks labelled with the school name below |
| DD-07, DD-17, MD-16 | No outcome figure, no accreditation claim, no Cognia mark |
| DD-08, DD-31, DD-42 | No photograph. The brief forbids one in both states, so no photographed state is specified — see Assets |
| DD-10, MD-06, MD-25 | Selectivity as the stated bar (90th percentile) in the evidence card, the table, the proof strip and the steps line; access (TEFA, $10,400) in the table row and the TEFA card; no countdowns, no wealth cues |
| DD-12, DD-13, MD-11 | Header: lockup, "Current families", "Contact admissions"; no menu; the phone number only in the footer |
| DD-14, MD-23 | Built at 375 first; doors stacked Georgetown then Anywhere below 34rem of panel; no sticky element. Both round-two composition fixes are phone fixes: the panel now closes inside the first screen at every phone row, and the two controls are equal at the row where two thirds of sessions are |
| DD-19 | Style envelope: every value a token or a named departure (Departures) |
| DD-21 | The doors are `<ul><li>` twice over (the control row and the lines list), keyed by `data-door`; a third campus is one more `<li>` in each, and the pair rule `repeat(2, minmax(0, 1fr))` becomes `auto-fit` when it is needed |
| DD-25, DD-27, REQ-070 | Two "Begin application" links with `?school=`; full school names everywhere; no unscoped application link |
| DD-26 | Option (a), equal visual weight, carried literally at both encounters: the two first-screen controls are identical in markup, geometry, padding, type, corner, 44px target, column width **and fill**, and the two after-table doors are identical to each other in the same way. Nothing on the page ranks one school above the other, so nothing has to be counterweighted later |
| DD-29 | Every screen carries a fact: the evidence cards, the table, the proof strip, the steps line, the footer facts |
| DD-38 | The layer-2 type scale and `--leading-prose` throughout; Literata 400 for the h1 (M03 tested 300 against 400 and shipped 400; this mock does not re-run that test) |
| DD-39 | `--color-on-navy`, `--color-text-muted-on-dark`, `--color-focus-on-dark`, `--color-accent-text` (declared, not used, see Departures) and `--color-border-strong` in their proposed roles |
| DD-42 | No photograph in either state |
| DD-44 | The fold measured by the runner at all 19 rows; height bands; `data-fold` hooks; no `vh`, `svh` or `dvh` anywhere in `styles.css` |
| DD-46 | Option (a), the contract's surface-dependent fill, now applied without exception: **both** controls inside the navy panel are `--color-on-navy` with `--color-text`, and **both** after-table doors, the two application buttons and the families button on cream are `--color-navy` with `--color-on-navy` (the families button keeps the outline variant, which is a secondary action to a family hub rather than a door). Build pass 1's ghost control was a **departure** from DD-46 (a) that the rationale wrongly described as an application of it; the studio critic named it and it is gone. The estate's orange footer button is still not copied: K12 F87 measures its label at 2.50:1 |
| DD-47 | A uniform `--radius-md` corner on all four sides of every button, card and the panel itself, rather than the source's fully rounded pill or a cut corner |
| DD-48 | The borrowing rule: composition, rhythm and structural devices borrowed; palette and typefaces not. Itemised above |
| MN-16 | Transform and opacity only (nothing animates); colour changes instant; `--duration-none` under reduced motion |
| D-039 | Undecided: no script, no inputs, no `data-d039` declaration; the V6 hooks are left as `data-motion="v6"` attributes only |
| MD-02, R14, REQ-002 | Four secondary CTAs including "Ask about a tour of the Georgetown campus" |
| MD-17 | The provenance line once, small, muted, directly under the h1 inside the panel |
| K12 F41, G15, G17, V2 | Buttons in the estate's face and case (Inconsolata 600 uppercase), 44px floor; marks sized by height, 27.6 to 28.3px at the phone rows and 32px from 800px |
| SE-13 | `noindex, nofollow` |
| REQ-022 | Every figure maps to a claims-register row (`check-claims.py`, statuses below) |

### Layer-2 tokens used (proposed; each named here as the contract requires)

| Token | Where | Register row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | Every type role | DD-38 (b), R5 |
| `--leading-prose` 1.5, `--measure-prose` 65ch | Door lines, provenance, card bodies, table cells, sources, footer facts, facts, steps | DD-38 (b), RF-55, RF-58 |
| `--color-on-navy` | h1, both controls' fill | DD-39 (a), RF-07 |
| `--color-text-muted-on-dark` | Provenance, strip label, chips, door labels, and the panel's hairline at a 50 percent mix (the door lines left the panel and take `--color-text` on cream) | DD-39 (a), RF-07; a new tint, a DD-19 departure |
| `--color-focus-on-dark` | Outer band of the ring inside the panel and on the footer's navy plate, and the ring under forced colours there | DD-39 (a), RF-07 |
| `--color-border-strong` | Link underlines at rest, the anchor band's rule, the card strip rules, the proof facts' rules, the footer's top rule | DD-39 (a), RF-07; a new tint, a DD-19 departure |
| `--color-accent-text` | **Declared and not used.** The brief assigns it to the italic word on navy; measured at 2.70:1 there, so `--color-accent` ships instead (Departures) | DD-39 (a), RF-07 |
| `--ease-*` | Not used (nothing animates) | MN-16 (a), RF-53 |
| `--duration-none` | The reduced-motion block | MN-16 (a), RF-53, R8 |

### Taste decisions the brief did not name

| Decision | Choice and reason |
|---|---|
| The strip carries a label as well as chips | Build pass 1 shipped chips alone at the strip's right and the bar's left half read as reserved space at 1440 and 1920. "Two ways to attend" (an allowed section 1 heading) now sits at the left end, so the strip is a named component header: object name left, its two variants right. It also replaced the visually hidden h2 over the doors, so no heading precedes the h1 |
| "In person" and "Online" appear twice on the first screen | Once as the panel's chips, once as the label over each control. The chips index the panel at a glance, which is the source's status-chip role; the labels attach the cue to the control, which is what DD-04 asks for and what a parent needs, because neither CTA label says which school is online. Two two-word mono strings, 300px apart at V2 |
| The door lines sit **below the panel, on the cream**, after both CTAs at every row | The contract's compact door rule is written for phones under 700px tall. Used at every row it keeps the control row tight (the source's two-control row), keeps both CTAs above the fold at every row of the matrix — the tightest are V10's landscape recipe at 30px of spare and V4 at 79, and the four contract rows run 84 (V2), 132 (V5), 231 (V14) and 317 (V16) — and gives every row readable ink to cross the bottom edge. Build pass 2 moves the lines out of the panel entirely: they are the page's gloss on the two controls rather than part of the control, so the object closes and the lines still sit directly under the control each one explains (`margin-inline: calc(var(--panel-inset) + var(--panel-pad-x))` puts them at the panel's own inner edges, and they share its container name so both lists break to two columns at exactly the same width). Each line is opened by its door name as a run-in, so attribution survives the stacked case and the screen-reader order |
| Two parallel lists rather than one | `.doors` (label plus control) and `.door-lines` (run-in name plus line) are two `<ul>`s keyed by the same `data-door` values. One list cannot put both CTAs above both lines without `display: contents` on `<li>`, whose list semantics are unreliable in assistive technology (the same finding M03 recorded) |
| Left-aligned panel content | The source centres its hero. A 132-character Literata sentence centred inside a panel rags on both sides at phone widths and breaks the axis the comparison table below needs |
| Chips at `--radius-sm`, everything else at `--radius-md` | DD-47 governs the button corner. The chips are a smaller class of object and a 8px corner on a 21px-tall chip reads as a pill, which is the shape DD-47 rules out. 4px keeps the family and avoids the pill |
| The footer is `--color-surface`, not navy | M03's page has two full-bleed navy bands. If M25's footer were navy the page would have a navy field after all, and the panel would stop being the only dark object. The GT Anywhere mark keeps its navy plate inside the footer, which is its correct surface and the page's second and last bounded navy rectangle |
| The evidence cards carry the three shared comparison rows | "Same school, same academics", "Admissions", "After 8th grade" are the three rows whose value is identical in both columns. They are the proof of the panel's own claim that this is one school with two ways in, so they belong immediately under it; the table then repeats them per column because a parent scanning one column must find them, which is DD-43's own reasoning. The proof strip keeps exactly the four facts of `copy.md` section 4, unchanged |
| The after-table doors are a second identical pair, not a swap | Build pass 1 swapped the fills there (Georgetown outlined, GT Anywhere navy) to counterweight a first-screen preference. With the first-screen pair equal there is nothing to counterweight, and an unequal pair after the table would be the ranking DD-26 (a) forbids, just lower down the page; Astra's Objective row asks for equal emphasis "at each encounter", which is the right test, because a parent who acts on screen one never sees screen four. Both are `--color-navy` with `--color-on-navy` on cream |
| The utility links and footer links are Inconsolata | The estate's utility face (K12 F36) and its own footer-navigation face (`CONTINUITY.md`). It is also what lets the header hold the mark and both links on one row at 375: Inter Tight at the same size overflows a 343px content width by about 12px |
| The panel hairline is a 50 percent mix | `color-mix(in srgb, var(--color-text-muted-on-dark) 50%, transparent)` computes 3.00:1 over navy — the graphical floor exactly. Full strength (7.81) out-shouts the type it separates; `--color-border` at 40 percent, which M03 uses, computes 2.56 and would be decorative |
| Leftover screen height is cream, not panel | At the tall rows the panel ends one padding token under the control row and the page's own ink continues below it. M09's critic ruled reserved space a void when it sits *between* elements that should connect and composed when it is the object's own floor; build pass 1 read that as a licence to put a foot on the panel, and the foot cost the bottom edge at ten rows. A symmetrical bottom padding is the object's floor and costs nothing |
| Page margins | 16 below 768, then 32 / 48 / 64. The 16 is a departure from K1 section 5a's 24, costed above and re-argued in build pass 2: it buys the seventh h1 line, not the fold |
| The button face steps down at the reflow row | At 320 the panel's content box is 16rem and "EXPLORE THE GEORGETOWN CAMPUS" wrapped, standing one control 60.5px against the other's 44 — the one row where the pair was unequal in size as well. A container query under 17rem takes the button from `--text-btn` to `--text-sm`, which is 29 Inconsolata characters at 14px, 203px inside a 240px content box. Measured after: both controls 256 by 44 at V18 |

## Motion spec

| What animates | Trigger | Duration token | Easing token | Reduced-motion behaviour |
|---|---|---|---|---|
| Nothing | | | | `transition-duration` and `animation-duration` forced to `--duration-none` on every element and pseudo-element; the runner reports every computed duration 0s at V14 |
| In-page anchor scroll (V10) | The compare anchor link | native | native | `scroll-behavior: smooth` is declared only inside `@media (prefers-reduced-motion: no-preference)` and is forced to `auto` in the reduce block |

There is no `transition:` property anywhere in `styles.css`, no `@keyframes` and no `animation`. V1 (door state) and V3 (focus) are instant by construction: hover changes fill and label colour, focus draws the ring. V6, the one-time section reveal, is **not shipped**, because it needs the D-039 script. Where its hooks sit is a declared change from the brief, which asks for V6 "on the evidence cards from the third screen": the evidence cards are the *second* screen on this direction — at V16 the first card's strip is visible at 887.8 of 900 — and the contract restricts V6 to the third screen and later, so the two `data-motion="v6"` hooks are on **Steps and Connect**, the first two sections that qualify. Astra caught the rationale describing the hooks as being on the cards; they never were. Were it approved: 300ms `--ease-out`, opacity 0 to 1 and `translateY(8px)` to 0, `IntersectionObserver` with `rootMargin: 0px 0px -15% 0px`, `unobserve` after the first hit, the hidden state scoped to a class the script adds, the whole rule inside `prefers-reduced-motion: no-preference`.

## Assets

| File | Used for | Alt text | Source and consent | Fallback |
|---|---|---|---|---|
| `gt-school-logo-h.svg` (139 by 32) | Header lockup on `--color-bg`; footer link to www.gt.school on a `--color-bg` plate. Height `clamp(1.6875rem, 1.5rem + 1vw, 2rem)`: 27.6px at 360, 32px from 800. Eager (no `loading` attribute) | "GT School" | The real mark from the mirror; its navy artwork needs a light ground | None needed |
| `gt-anywhere-logo-h.svg` (252 by 48) | Footer link to anywhere.gt.school on a `--color-navy` plate. Same height clamp. Eager. **Not in the panel any more** (Departures): the panel is the object that represents both schools and the only logotype inside it was the online school's, which at the two-column rows sat under the *Georgetown* column | "GT Anywhere" | The real mark from the mirror; white lettering, so it needs the navy ground | None needed |
| Photographs | **None, in either state.** This is not a deferral under DD-42 but the brief's own instruction with its own reason: the panel's argument is that the choice is one object, and a photograph inside it would make it two. No photographed state is specified for this direction, so RF-25 permissions would not change it | | | The default state is the only state |

Open Graph carries title and description only; no share image while the default state holds (`copy.md` Head).

## Colour and contrast (WCAG 2.x ratios computed from the token values, 2026-09-11)

**Every pairing inside the panel, which is the brief's acceptance condition:**

| Pairing | Where | Ratio | Threshold |
|---|---|---|---|
| `--color-on-navy` `#fbfbfb` on `--color-navy` `#002a3a` | h1; both controls' fill against the panel | **14.58** | 4.5 text, 3 border |
| `--color-text-muted-on-dark` `#a3bfcb` on `--color-navy` | provenance, strip label, chips, door labels | **7.81** | 4.5 text (AAA for body) |
| **`--color-accent` `#e48b53` on `--color-navy`, the italic word "or"** | the h1's one accent use, 27.00 to 46.00px | **5.83** | 4.5 text; K3 section 5e rule 1 permits the accent as text on navy at 24px and above, and the h1 is never below 24.17px |
| `--color-text` `#001117` on the `--color-on-navy` fill | both control labels, identically | **18.57** | 4.5 text |
| Panel hairline, `color-mix(in srgb, var(--color-text-muted-on-dark) 50%, transparent)` = `#527482`, on navy | the strip rule and the chip borders (the foot rule went with the foot) | **3.00** | 3 graphical |
| `--color-focus-on-dark` `#fbfbfb` outer band against navy; `--color-navy` inner band against the near-white control it rings | the two-band ring on both controls inside the panel and on the footer's navy plate | **14.58 / 18.57** | 3, one band per ground (K3 F10) |

Nothing inside the panel is below 3.00, and nothing used as text **inside the panel** is below 5.83. That scope is Astra's correction: on the light surfaces `--color-text-muted` on `--color-surface` measures 5.69, above AA and below 5.83, so the unqualified sentence in build pass 1 contradicted the page's own second table.

**The brief's `--color-accent-text` on navy, measured: 2.70:1.** `--color-accent-text` `#a5501a` is the layer-2 role for the accent *as small text on light surfaces* (5.14 on `--color-bg`). On `--color-navy` it computes **2.70:1**, which fails AA for text and fails the 3:1 graphical floor, and it would fail the brief's own Acceptance row ("Every on-navy pairing at or above 4.5:1") in the same sentence that asks for it. `--color-accent` `#e48b53` is the token K3 section 5e rule 1 already licenses on navy at display sizes and it measures **5.83**, which is the 5.83 figure from K12 the brief names as the floor. The shipped word is `--color-accent`; `--color-accent-text` is declared here and not used. This is the one place the brief was not followed literally, and the measurement is the reason.

**On the light surfaces:**

| Pairing | Where | Ratio | Threshold |
|---|---|---|---|
| `--color-text` on `--color-bg` / `--color-surface` | body, table, cards, facts, steps, sources, footer facts | 17.69 / 16.10 | 4.5 text; K3 CS3's 7 for running prose |
| `--color-text-muted` on `--color-bg` / `--color-surface` | eyebrows, card strips, table row labels, step counters (short strings, never a paragraph) | 6.25 / 5.69 | 4.5 text |
| `--color-navy` on `--color-bg` / `--color-surface` | the panel's edge against the page, outlined buttons and their borders | 13.88 / 12.63 | 4.5 text, 3 border |
| `--color-on-navy` on the `--color-navy` fill | the application buttons, the repeated GT Anywhere door | 14.58 | 4.5 text |
| `--color-border-strong` on `--color-bg` / `--color-surface` | link underlines at rest, the anchor rule, card strip rules, proof rules, the footer's top rule | 3.63 / 3.31 | 3 graphical |
| `--color-border` on `--color-bg` | the evidence-card outlines, the header hairline, the table rules, the step rules | 1.56 | decorative; the card's meaning is carried by its strip rule at 3.63 and its type, never by the outline alone |
| `--color-focus` on `--color-bg` / `--color-surface` | the ring everywhere outside the panel | 8.20 / 7.46 | 3 |

**Palette usage map.** Navy on exactly two **surfaces**, both bounded: the panel and the footer's GT Anywhere plate. Navy is also the **fill of the controls on the cream** — the two after-table doors and the two application buttons — which is DD-46 (a)'s light-surface treatment rather than a third surface; Astra's correction, because build pass 1's "exactly two navy surfaces" read as though nothing else on the page were navy. `--color-surface` on two bands: the proof strip and the footer. Accent used **once on the whole page**, as the italic "or" (K3 section 5f caps it at one per screen; this direction spends one for the whole document). The two marks carry their own artwork colours, which is a mark, not an accent event. Nothing on any surface is used as text below 4.5.

## Departures

| Departure | Value | Reason |
|---|---|---|
| `--color-accent` for the italic h1 word, where the brief names `--color-accent-text` | `h1 em { color: var(--color-accent) }` | Measured: the brief's token is 2.70:1 on navy and fails AA and 3:1; `--color-accent` is 5.83 and is the token K3 section 5e rule 1 licenses on navy at 24px and above. Stated at length above |
| **Withdrawn in build pass 2: the solid-plus-ghost pairing.** Both first-screen controls are now `--color-on-navy` with `--color-text`, and the after-table pair is two navy fills | `.btn-solid` on both; `.btn-ghost` deleted | Not a departure any more, and recorded here because the reasoning is the substance of this iteration. The brief set solid beside ghost; the studio critic ruled it wrong under DD-48 and I accept the ruling, which the brief has since been corrected to record. Measured before: 226.7 against 58.3 at V2 on a ground of 34.4. Measured after: **226.7 and 233.0 at V2, 227.6 and 233.6 at V3, 228.3 and 234.5 at V14, 227.3 and 233.8 at V16, 229.7 and 234.9 at V18**, both boxes filled `rgb(251, 251, 251)`; the 6-point spread is label ink, because "EXPLORE THE GEORGETOWN CAMPUS" sets more dark characters into the same box than "EXPLORE GT ANYWHERE", and it is the only difference a photometer can find |
| The door lines and the GT Anywhere mark sit outside the panel, where the brief puts both inside it | `.lines-wrap` after `.panel`; no `.panel-foot` | The direction's claim is that the choice is one bounded object, and build pass 1 could not show that object's bottom edge at any phone row: the foot (a hairline, the mark, a deeper pad) pushed the panel to 796.5 of 629 at V2 and 855.3 of 844 at V9. Both critics scored Composition 4 on it. Out of the panel, the panel closes at **537.5 at V2 and 579.7 at V9**, four edges inside the first screen at 16 of 16 fold rows, and the thesis sentence — "one panel, one sentence, two controls, nothing else" — becomes literally true of the markup. The mark does not move to a plate on the cream: the panel represents both schools and was signed by one of them, and the footer already carries both marks on their own plates |
| The after-table doors no longer swap their fills | `.doors-again .btn-navy` twice | See Taste decisions. A swap is only a balance if there is something to balance |
| Page margin 16px below 768 | `--page-margin: var(--space-4)` | Costed above: it is what buys the h1 its seventh-line column while the panel keeps a cream gutter. K1 section 5a's schedule resumes at 32 / 48 / 64 from 768 |
| Panel inset arithmetic | `margin-inline: calc((100% - 22rem) / 12 + 2rem)` from 1024 | The brief's "one column at 1024 and above" expressed against a 12-column grid with 32px gutters. 22rem is the eleven gutters, 2rem the twelfth |
| `--radius-sm` on the chips | `.chip` | Named under taste decisions: an 8px corner on a 21px chip is a pill, which DD-47 rules out |
| Panel hairline as a 50 percent mix | `color-mix(in srgb, var(--color-text-muted-on-dark) 50%, transparent)`, `@supports` guarded | Derived from a token, no literal colour; computes 3.00:1, the graphical floor |
| 1px rules, 2px ring bands, 3px forced-colours outline | hairlines, `:focus-visible`, `@media (forced-colors: active)` | No border-width token exists; K3 section 5d's band widths |
| 44px target floor, 56px header row | `min-height: 2.75rem` on every control; `3.5rem` on the header row | The matrix's interactive minimum; the brief's header height. Header total 57px with the hairline |
| `forced-color-adjust: none` on `.logo-navy` **only** | forced-colours block | Astra's blocking finding, and its second route taken. The GT Anywhere mark is white artwork in an `<img>`, which forced colours never recolours, so the footer plate that carries it must keep its navy or the mark is erased; it keeps its colours, takes a `CanvasText` border and keeps the near-white focus band at 14.58. **The panel does not take the exemption any more**, because the mark it was protecting is no longer in it. Under the old rule the panel stayed navy while `.btn` took a `CanvasText` border, and in the *light* forced palette that border resolved to black on navy and the Online control lost its edge — the defect Astra measured in `qa/forced-colors.jpg`. Verified in both palettes after (Iteration) |
| The plate's forced-colours focus ring is `CanvasText`, not `--color-focus-on-dark` | `.logo-navy:focus-visible` inside the forced-colours block | A second forced-colours defect, found by driving the focus state in both palettes rather than one, which neither card names. An element that opts out of the user's palette has to be given a ring explicitly, because the user agent's own forced focus ring only applies to elements that did not opt out — and the ring is drawn 2px **outside** the plate, on Canvas, so the near-white band it wears on cream was `#fbfbfb` on a white Canvas in the light palette: invisible. Measured before: `outline 3px solid rgb(251, 251, 251)` on `Canvas` `rgb(255, 255, 255)`. After: `rgb(0, 0, 0)` in the light palette and `rgb(255, 255, 255)` in the dark, each against its own Canvas. Everything else on the page keeps the user agent's ring (`rgba(5, 0, 73, 0.8)` light, `rgba(0, 230, 255, 0.8)` dark), which is why only this one element needed a rule |
| `max-width: 24rem` on the door controls | `.door .btn` | Two controls that fill a 470px column at 1440 read as two banners rather than two doors; both are capped at the same 384px so they stay identical |
| Container thresholds 34rem (the door pair and the line pair), 17rem (the button's type step) and 12rem (the h1 nowrap release), and the 58rem compare container | container queries per K10 section 5d | 34rem (544px) is where the pair stops being one column: the two controls are `width: 100%` capped at 24rem, so at that threshold they are 256px each rather than 384 and they reach their cap at 800px of panel. Astra corrected build pass 1's claim that 34rem is where two 384px controls fit, which is a different number. 58rem is this mock's own measured table threshold; R6 specifies the *method* (measure where the table stops fitting), not the value — also Astra's correction |
| Height thresholds 479, 639, 699, 899 px | `.first-screen` bands | The landscape case (K10), the tight phone band, V15's short laptop (so the mark is never sliced), K10's compressed and relaxed edge |
| Landscape recipe gated at `min-width: 700px` rather than 600px, and its h1 floored at `max(--text-xl, 1.5rem)` | `@media (max-height: 479px) and (min-width: 700px)` | The floor is carried by the token expression, not the gate: `--text-xl` is 23.889px at 700 and only reaches 24.0px at 720, so build pass 1's stated reason was 0.111px wrong at its own boundary (Astra). `max(..., 1.5rem)` holds the italic word at or above K3 section 5e's 24px licence at every width the recipe covers and leaves V10 at 24.17px. The gate stays at 700 because the recipe's side-by-side controls need 34rem of panel, which 600px does not give |
| No-break spaces in the h1 | "in&nbsp;person" and `span.nowrap` on "from anywhere." | Typographic no-breaks, no word changed |
| Letter-spacing `.08em` on uppercase labels | chips, strip label, eyebrows, card strips, table row labels | Within the contract's 0.06 to 0.08em |
| Underline offset and thickness `.18em` / 1px | `.link` | Typographic refinement; no token |

## Flagged slots

| Slot | Q id or row | Default shipped |
|---|---|---|
| Lockup | Q-001 | The real `gt-school-logo-h.svg`; Holly's unifying element may be added beside it |
| Current families | Q-002 | community.gt.school in the header, the families card and the footer |
| Application steps | Q-007 | The four steps as `copy.md` gives them, identical for both schools |
| Georgetown tuition | Q-011 (decided, G0.5 item 4) | "Tuition on request. Ask admissions." |
| After 8th grade | Q-013 | The shared sentence, in the third evidence card and repeated in both table columns (DD-43) |
| Intensives logistics | Q-017 | "Four intensive weekends a year in Georgetown." and no further detail |
| Outcome figure | Q-019 | Withheld; the proof strip carries the four register-backed facts |
| TEFA window, owner, expiry | Q-021 | The module's default wording, visible to everyone (D-015 option c) |
| Accreditation | Q-033 | Nothing on the page |
| Parent quote | Q-034 | None |
| Adults' title | Q-035 (decided) | Guides; "advisor" appears only as the `data-type` value the spec names |
| "Talk to admissions", tour, info session destinations | MD-02, REQ-002, R14 | All three point to www.gt.school/contact; the tour label names the destination and the campus |
| `school=` parameter | DD-25 | Convention; the live parameter is confirmed in S5 |
| Chip and strip labels | `copy.md` section 9 | "In person" and "Online" are section 1 door labels, recorded in section 9 as reusable schematic labels; "Two ways to attend" is an allowed section 1 heading. Nari has not yet agreed section 9 |
| Card strip labels | `copy.md` section 3 | "Same school, same academics", "Admissions", "After 8th grade" and "Texas families" are section 3's own row labels and module heading, reused as strips |
| Door pairing | DD-26, DD-46, brief | Settled: two identical controls at both encounters. The open question is no longer parity but whether Nari *wants* a default door — that is hers to decide in DD-26, not a thing to inherit from a component-library reel, and the page as built makes no recommendation |
| Stacked-table semantics | R6 | Below 58rem the table parts are `display: block`, which some screen readers read as plain text; explicit `role` attributes are a build-phase decision, not taken in the mock |
| Live side-by-side with the school sites | K7 C4, Continuity | Not produced: this build may not open gt.school or anywhere.gt.school. `CONTINUITY.md` and K12 are the reference used |

## Claims register tags

All six rows are "Unverified, public" in `0_plan/12-claims-register.md`: usable in a mock (G0.5), blocked for production until Nari approves the wording (REQ-022). Counts are `check-claims.py`'s own.

| Figure on the page | Where | Row | Count | Status |
|---|---|---|---|---|
| 90th percentile | Evidence card "Admissions", table "Admissions" (both cells), proof fact 1, steps line | CR-011 | 5 | Unverified, public |
| $10,400 a year | Table "Tuition and access", GT Anywhere cell | CR-021 | 1 | Unverified, public |
| four in-person weekends / Four intensive weekends | Door 2 line, table "In-person time", footer facts | CR-032 | 3 | Unverified, public |
| 9 to noon, about two hours / Two hours of mastery academics | Door 1 line, table "The day" Georgetown cell | CR-033 | 2 | Unverified, public |
| Two to three hours | Table "The day" GT Anywhere cell | CR-034 | 1 | Unverified, public |
| check-in every week / every week | Table "Guides" GT Anywhere cell, proof fact 3 | CR-035 | 2 | Unverified, public |

CR-022 ($10,474) is not on the page; the TEFA card carries no figure.

## Continuity, against the measured estate

`0_plan/mockups/shared/CONTINUITY.md` is the reference; the estate's live sites were not opened by this build. `gt.school` has no mirror in the repository and is unmeasured, so the Georgetown handoff is **unverified** and only the GT Anywhere handoff can be scored on rendered evidence.

**The rendered comparison, filed where the rubric asks for it.** Build pass 1 argued this row from a property
table, and the studio critic's fifth required fix was to put the two first screens side by side, because this
mock's central continuity claim — the estate's own headline device, moved to a ground where it passes — can only
be judged with the two headlines beside each other:

| File | What it puts side by side |
|---|---|
| `qa/estate-side-by-side-390.jpg` | `kb/exemplars/estate/anywhere-home-390-firstscreen.jpg` beside `qa/V9.jpg`. V9 is the 390 row at the estate capture's own height (390 by 844), so the two images are the same viewport; `qa/V3.jpg` is the shorter 390 row and is filed beside it in `qa/` |
| `qa/estate-side-by-side-1440.jpg` | `kb/exemplars/estate/anywhere-home-1440-firstscreen.jpg` beside `qa/V16.jpg` |

Composed from captures that already existed, at 1:1, neither retouched, each labelled with its source and
viewport. What the pair shows at a glance: the same cream, the same Literata, the same uppercase Inconsolata on
the control, the same navy action colour — and the estate's accent-orange italic clause **on cream at 2.38:1**
beside M25's accent-orange italic word **on navy at 5.83:1**, which is the whole continuity argument in one
image. What it also shows honestly is the gap: a photographed child and a grained ground on one side, a drawn
panel on the other.

| Property | The measured estate (anywhere.gt.school) | M25 | Verdict |
|---|---|---|---|
| Page ground | `rgb(252, 244, 239)` | `--color-bg`, the same value | Matches |
| Body text | `rgb(0, 17, 23)` | `--color-text`, the same value | Matches |
| Body face | Inter Tight | Inter Tight | Matches |
| Display face | Literata | Literata | Matches |
| **The headline's italic accent span** | The estate sets its first sentence upright near-black and its second in **accent orange italic at weight 400** inside a 300-weight h1. K12 F88 measures that orange on cream at **2.38:1**, failing AA and 3:1 | The same device — one italic accent span inside an upright Literata h1 — moved onto navy, where the same `--color-accent` measures **5.83:1**. One word rather than a clause | **The strongest continuity move on this page.** The device is the estate's own; the ground is changed so it passes |
| Heading weight and tracking | 300, letter-spacing -1.6px | 400, no tracking | Declared difference. M03 tested 300 against 400 on the fixed sentence and shipped 400 with its reasoning; this mock inherits that and does not re-run the test |
| The first screen's application action | Navy `rgb(0, 42, 58)` fill, near-white label, Inconsolata uppercase at 16px, computed weight 500 | Navy fill with near-white label wherever the ground is light (both after-table doors, both application buttons); inside the navy panel both fills invert per DD-46 (a). Inconsolata uppercase at 17 to 18px, weight 600 | Same colour vocabulary, same face, same case. Size and weight differ: `shared/fonts.css` ships Inconsolata 400 and 600 only, so a 500 cannot be registered without adding a face, and the estate's 500 is a computed weight rather than proof of a 500 face |
| The pre-footer application card | Accent orange fill, near-white label at **2.50:1** (K12 F87) | Not copied (DD-46). Orange appears once on the page, as type on navy at 5.83 | Deliberate: copying it would import a contrast failure onto the page's most important control |
| Button silhouette | Three different constructions across the estate: a composed cut lower-right corner on two cards, a 14px clipped polygon in the footer, four rounded corners on the desktop header's application button | One uniform `--radius-md` corner everywhere (DD-47), which is the shape of the estate's own desktop-header application control | Matches one of the estate's three, and the one on the control a parent clicks to apply |
| Footer navigation | Uppercase Inconsolata | Inconsolata at `--text-sm`, in the case `copy.md` writes | Face matches; case does not, because the deck's link labels are sentence case and text-transform would change how they read |
| Mark handling | The GT Anywhere mark is white lettering with an orange leaf; the estate's hero carries an Alpha School lockup | The GT Anywhere mark only on navy (the footer plate); the GT School mark only on cream (the header and the footer plate). Both at 27.6 to 28.3px on the phone rows and 32px from 800px (K12 V2), aspect skew 0% at both widths | Matches, and the runner measures it every pass |
| Grained cream, wave linework, the composited student cut-out | Present on the estate's hero | Absent. This page carries no photograph and no texture | Declared: the brief forbids a photograph in either state, and a grain would be a value on neither site's token list |
| The phone's redistributed chrome | At 390 the estate's header holds the mark and MENU only | At 390 the header holds the mark and two text links, no menu (DD-12) | Different by decision, not by accident |

Where a parent lands after pressing a door: the near-white-on-navy control they pressed is answered on anywhere.gt.school by a navy application card in the same Inconsolata uppercase; the ground, the two display faces and the marks are literally the same files. What does not carry across is the estate's grain, its photographic hero and its 300-weight tracked headline.

## Parent questions (`0_plan/05-landing-mockups-plan.md` section 6c)

| # | Question | Answered | Where |
|---|---|---|---|
| PQ-01 | What is GT School? | Page | The h1, inside the panel |
| PQ-02 | Is it for my child? | Page | "gifted and talented children" in the h1; the 90th percentile in the Admissions evidence card, the table, the proof strip and the steps line |
| PQ-03 | In person or online: what are my options? | Page | The panel: two chips, two labels, two controls, two lines |
| PQ-04 | Where is the campus? | Page | Door 1 line; table "Where and how" |
| PQ-05 | What does a day look like? | Page | Table "The day" |
| PQ-06 | What does it cost, and can TEFA help? | Page | Table "Tuition and access"; the TEFA card |
| PQ-07 | How do I apply? | Page | "How to apply": four steps, two application links |
| PQ-08 | Who teaches my child? | Page | Table "Guides"; proof fact 3 |
| PQ-09 | How much in-person time does GT Anywhere have? | Page | Door 2 line; table "In-person time" |
| PQ-10 | What results does the school get, and is it accredited? | Silent by G0.5 items 2 and 3 | "Contact admissions" and "Talk to admissions" are the path to the person who answers it |
| PQ-11 | What happens after 8th grade? | Deferred to admissions | The third evidence card and the table row (Q-013) |
| PQ-12 | I am a current family, where do I go? | Page | Header link; the families card; footer link |
| PQ-13 | I am not ready to apply, what can I do? | Page | "Questions before you apply": FAQ, admissions, tour, info session |
| PQ-14 | Is GT School part of Alpha School? | Page | The provenance line, inside the panel under the h1 |

## Self-check

**Runner.** `node 0_plan/tools/shots.mjs 0_plan/mockups/M25-the-panel`, run of 2026-09-11T18:47:27.792Z: **Result: all required rows pass.** Reduced motion at V14: every computed transition and animation duration 0s, elements and pseudo-elements. Root font doubled at V2: no horizontal scroll at 375 with a 32px root. Console: no errors. Interactive targets: every interactive target at least 44px tall at all three sampled rows, the reflow row included, which was not true in build pass 1 (V18's Georgetown control stood 60.5px against 44 and is now 44 against 44). Mark geometry: three marks at each width — `gt-school-logo-h.svg` twice and `gt-anywhere-logo-h.svg` once, at 27.9px at 390 and 32px at 1440, aspect skew 0%, all eager. Focus and forced colours captured in `qa/focus-cta.jpg`, `qa/focus-plate.jpg`, `qa/focus-footer.jpg`, `qa/focus-footer-plate.jpg`, `qa/forced-colors.jpg`; forced colours re-driven in **both** palettes in my own pass (Iteration).

**Fixed by looking at the captures during build pass 1**, not by assertion: the panel strip read as a half-empty bar at 1440 and 1920 (the strip label was added); the compare anchor's sentence finished 32 to 34px clear of the bottom edge at 1024 by 768 and 1440 by 900 and both rows read as finished (the anchor's closing rule was added and the panel's bottom padding stepped down below 900px tall); the GT Anywhere mark was sliced in half by the edge at 1366 by 648 (a 640 to 699 height band pulled the foot up one token); the proof strip set four facts as three-plus-one (it is now one, two or four columns); the header lockup and the skip link were under 44px tall; and the header stood 96px at 360 because the wrapped rows carried a row gap.

**Fixed by looking at the captures during build pass 2:** the two door lines sat 8px apart on the cream and read as
one block once they left the panel's bounded ground, so their row gap went to `--space-4` (`qa/V3.jpg`); and the
panel's bottom padding was set equal to its top padding in each band after the first regenerated captures showed an
asymmetrical object at 1440.

**Grep checks** (from the repo root, re-run for build pass 2, 2026-09-11): `<form` 0; `<input` 0; `<script` 1 (JSON-LD); hosts in `index.html` and `styles.css`: gt.school, www.gt.school, anywhere.gt.school, apply.gt.school, community.gt.school, schema.org only; digits in visible text: 09, 10, 10,400, 2026, 270, 512, 8, 9, 90, 9481; "advis" in visible text: none; "Georgetown Campus" 7 occurrences in visible text, "GT Anywhere" 13; provenance line once; sources line twice (under the table and under the facts); every fixed slot of `copy.md` sections 0 to 8 found verbatim by string match against a whitespace-normalised `copy.md` (the only two page fragments that do not match as one string are the door lines, where a run-in name slot and a line slot sit in the same paragraph; each half matches on its own); words on the page outside `copy.md` sections 0 to 9: none; raw hex in `styles.css`: 0; `transition:` declarations in `styles.css`: 0 (the only matches are `transition-duration` in the reduced-motion reset and the word in a comment); `vh`, `svh`, `dvh` in `styles.css`: none; `index.html` 15,476 bytes plus `styles.css` 26,148 bytes, 41,624 bytes in all.

**Contrast.** Every pairing in the tables above computed from the token values with the WCAG 2.x formula. Inside the panel, every string is at 5.83 or above; on the light surfaces every running paragraph is `--color-text` at 16.10 or better and the lowest text pairing on the page is `--color-text-muted` on `--color-surface` at 5.69, used for short uppercase strings and never for a paragraph.

**Checker output**, pasted from the run of 2026-09-11 (`python3 0_plan/tools/check-mocks.py 0_plan/mockups/M25-the-panel` and `python3 1_spec/tools/check-claims.py`, the M25 section):

```
## M25-the-panel: 37 pass, 0 fail

check-mocks: OK
```

```
## 0_plan/mockups/M25-the-panel/index.html
| Figure on the page | Register row | Occurrences | Status |
|---|---|---|---|
| "designed for students in the 90th+ percentile" | CR-011 | 5 | Unverified, public |
| "$10,400/year — GT Anywhere annual tuition, fully or partially covered | CR-021 | 1 | Unverified, public |
| Four in-person intensive weekends a year in Georgetown (four named 202 | CR-032 | 3 | Unverified, public |
| Georgetown mornings: "two 50-minute blocks and one 25-minute block wit | CR-033 | 2 | Unverified, public |
| GT Anywhere mornings: "two to three hours of 100% cognitive load" (aca | CR-034 | 1 | Unverified, public |
| Guides hold weekly one-to-one check-ins with each student ("Academic A | CR-035 | 2 | Unverified, public |
  NOTE unverified rows on the page (allowed in mocks, blocked for production): ['CR-011', 'CR-021', 'CR-032', 'CR-033', 'CR-034', 'CR-035']

check-claims: OK
```

## Iteration, build pass 2 (2026-09-11, after `critic-fable-M25.md` and `critic-astra-M25.md`)

Both cards were read in full before anything was touched; the brief and `CONTRACT.md` section 3 were re-read in
their corrected state. Every figure below is from my own pass on a server I started, not from the cards.

| # | What the critics asked | What changed | Evidence |
|---|---|---|---|
| 1 | **Equalise the two first-screen controls** (studio critic fix 1, Astra's Objective row, the corrected brief) | `.btn-ghost` is deleted; both controls are `.btn-solid`, `--color-on-navy` with a `--color-text` label. The after-table swap is **dropped** rather than kept: both doors there are `--color-navy` on cream. A swap balances a document, not a decision, and with the first screen equal an unequal pair after the table would introduce the very ranking DD-26 (a) forbids | Mean luminance inside the two control boxes, measured from PNG crops at DPR 1: **226.7 / 233.0 at V2, 227.6 / 233.6 at V3, 228.3 / 234.5 at V14, 227.3 / 233.8 at V16, 229.7 / 234.9 at V18**, both `rgb(251, 251, 251)` on a ground of 34.4. Before: 226.7 / 58.3 at V2. The residual 6 points is label ink, not fill |
| 2 | **Forced colours: the Online control's border went nearly black against retained navy** (Astra, the row that blocked Craft) | Astra's second route, which fix 3 made available: `forced-color-adjust: none` stays on `.logo-navy`, whose white `<img>` artwork needs its plate, and comes **off `.panel`**, which no longer carries that mark. The panel adopts the user's palette and keeps a `CanvasText` border and its radius, so it is still a bounded object. The `.panel :focus-visible` forced-colours override is deleted with it: an author colour there was being forced to a system colour anyway | Driven in **both** palettes at 1280 by 720 and 390 by 664. Light: panel `rgb(255,255,255)` / text `rgb(0,0,0)` / border `rgb(0,0,0)`; both controls Canvas fill, `rgb(0,0,159)` LinkText label, `CanvasText` border — identical to each other. Dark: panel `rgb(0,0,0)` / text and border `rgb(255,255,255)`; both controls black with `rgb(255,255,0)` labels and white borders. The plate keeps `rgb(0,42,58)` in both. Focus: every control takes the user agent's own forced ring — `rgba(5, 0, 73, 0.8)` in light, `rgba(0, 230, 255, 0.8)` in dark, 2px at 2px offset outside its border, legible in both |
| 2b | **Nothing asked for this; driving the focus state in both palettes found it** | The footer plate is the one element that still opts out of the user's palette, so the user agent does not give it a forced focus ring and the author's does not work there either: `--color-focus-on-dark` is drawn 2px outside the plate, on Canvas, and `#fbfbfb` on a white Canvas is invisible. Its forced-colours ring is now `CanvasText` | Measured before: `outline 3px solid rgb(251, 251, 251)` against `Canvas` `rgb(255, 255, 255)`. After: `rgb(0, 0, 0)` in light, `rgb(255, 255, 255)` in dark, both against their own Canvas, and the mark still legible on its navy plate in both |
| 3 | **Give the panel a bottom edge on the phone** | The larger of the two routes: `.door-lines` moves out of the panel onto the cream (aligned to the panel's inner edges, sharing its container so the two lists break together) and `.panel-foot` is deleted. I did not take the cheap one-token version, because it rescues two rows of ten and leaves the direction's own thesis unproven at the eight rows where two thirds of sessions are; this route makes "one panel, one sentence, two controls, nothing else" literally true of the markup and settles the Imagery parity finding in the same move | Panel bottom against the viewport: **537.5 of 629 (V2), 579.7 of 664 (V3), 583.2 of 715 (V5), 585.6 of 739 (V8), 607.3 of 740 (V1), 579.7 of 844 (V9), 295.8 of 342 (V10), 496.4 of 648 (V15)**. Four edges inside the first screen at **16 of 16 fold rows**, against 6 before. Every CTA bottom in `qa/fold.md` is unchanged except V18's |
| 4 | **Three claims that did not reproduce** | The panel tax is **32.0px**, measured by counterfactual, not ~43. The 16px page margin is re-argued: it buys the seventh h1 line, not the fold. The ghost control is recorded as a **departure** from DD-46 (a), not an application of it — and then withdrawn. The fold table's provenance now names the run in the folder | My counterfactuals at V2: zeroing `--p-gap-top` and `--p-pad-top` moves CTA2 **521.5 → 489.5**; stepping `--page-margin` alone to 1.5rem lands CTA2 at **584.8 of 605** with the h1 at 295px and **8 lines** |
| 5 | **The control wrap at the 320 reflow row** | `@container panel (inline-size < 17rem) { .btn { font-size: var(--text-sm) } }`. I took the type step rather than the critic's `gap: var(--space-2)`: the label is 246.5px of Inconsolata at `--text-btn` in a 240px content box, so no gap or padding change can fit it — only the face can | V18 controls measured **256 by 44 and 256 by 44**, font-size 14px, against 256 by 60.5 and 256 by 44 before |
| 6 | **File the rendered side-by-side** | `qa/estate-side-by-side-390.jpg` and `qa/estate-side-by-side-1440.jpg`, composed 1:1 from the estate captures in `kb/exemplars/estate/` beside `qa/V9.jpg` and `qa/V16.jpg`, each labelled with its source and viewport | Continuity section, above |
| 7 | **The third evidence card's dead space** | `align-items: start` on the card grid from 768. The cards are a set of hairline rectangles read by their aligned tops and shared strips; a common baseline was buying nothing and costing the third card 97.4px of empty ground | Dead space below the last line of body ink, per card: **19.8 / 19.8 / 19.8 at V13** (was 19.8 / 45.7 / 97.4), **20.5 / 20.5 / 20.5 at V14** (was 20.5 / 47.1 / 73.6), **20.0 / 20.0 / 20.0 at V16 and V17** (was 20 / 20 / 47). What is left is the card body's own 16px padding |

**Astra's other ten corrections**, each checked against the file before it was changed: the fold timestamp (fixed);
"two lines short" for the contract's V2 estimate is one (fixed); 34rem is 544px and the controls shrink there
(fixed in Departures); `--text-xl` at the 700px gate is 23.889px, so the gate never carried the 24px floor (fixed
at the cause, with `max(--text-xl, 1.5rem)`); 16 + 16 is 32 (fixed); Kindling's sub-paragraph is 87 characters at a
`46ch` measure, which I read in `examples/kindling.html:23` and `:65` (fixed); R6 specifies a method, not 58rem
(fixed); the V6 hooks are on Steps and Connect (fixed, with the reason they are not on the cards); "nothing used as
text below 5.83" contradicted the stated 5.69 (scoped); "exactly two navy surfaces" excluded the navy-filled
controls (fixed).

**What I judged wrong and did not do.**

| Not done | Why |
|---|---|
| I did not give the GT Anywhere mark a navy plate on the cream below the panel, which was the studio critic's alternative to leaving the panel unsigned | A second navy rectangle 24px under the first, on the first screen, would undo the thing the whole direction is built on — that there is exactly one dark object up there. The panel's strip already names it ("TWO WAYS TO ATTEND"), and the footer carries both marks on their own plates, symmetrically, which is the parity the panel could not give |
| I did not move the `--page-margin` to 24px below 768, even though the critic proved the fold absorbs it | Measured, it costs the headline its eighth line (295px column, 8 lines against 7). The critic's own ruling was "keep the 16px, rewrite the reason", and that is what this pass did. One half of the critic's replacement reason does not survive measurement either: the provenance line does **not** wrap at a 295px column — I measured it at one line at both margins — so the departure buys the seventh h1 line and nothing else, and the rationale now says only that |
| I did not re-run the DD-38 300-against-400 heading test | M03 already ran it on this exact sentence and shipped 400; the studio critic's Typography row explicitly credits this mock for declining to re-run it |
| I did not add `role` attributes to the stacked comparison table | Unchanged from build pass 1 and still a build-phase decision (Flagged slots). Nothing in this iteration touched the table |
| I did not fix `shots.mjs`'s visually-hidden blind spot, which I found while measuring | It is a runner defect, not a mock defect, and this commission is scoped to `M25-the-panel/`. It is written up under "What crosses the bottom edge" with the evidence, for whoever owns the runner: `contentInk` counts the text rects of a 1px-clipped element, which is why the `qa/fold.md` evidence strings at V13, V14 and V16 name a heading a reader cannot see. The verdicts at those rows do not depend on it |
| I did not change the chips, the strip label, the h1, the accent token, the type scale, the motion state or any copy | Nothing in either card asked for it, and both cards scored Typography, Motion and Mission at 5. The accent refusal was explicitly ruled correct and is left exactly as it was |

**Not done here, for the director's pass:** the critics' scoring; a live side-by-side with the two school sites (outside this build's permissions); the DD-38 300-against-400 capture, which M03 already produced on the same sentence; and explicit table roles for the stacked comparison if the build phase wants them.
