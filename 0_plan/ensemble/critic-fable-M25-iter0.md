# Design critic, Fable, M25 The Panel, round one, 2026-09-11

Independent: `critic-astra-M25.md` was not opened and no other critic's card for this mock was read. Scored against
`17` section 6 with R15 applied, and against `mockups/shared/CONTINUITY.md` for the Continuity row, which carries
rendered evidence for the Anywhere half of the estate and none for Georgetown.

Inputs read, in the order the commission set them: `ensemble/prompts/DESIGN-CRITIC.md`; `kb/briefs/M25.md` and
`kb/briefs/CONTRACT.md` (v2.1, re-read after it gained the Literata line-box row in section 3 during this pass);
`mockups/shared/CONTINUITY.md`; the mock's `index.html`, `styles.css`, `RATIONALE.md` and `qa/fold.md`; and **every
capture in `qa/`** with the Read tool (V1 to V19, `V2-full`, `V14-full`, `focus-cta`, `focus-plate`, `focus-footer`,
`focus-footer-plate`, `forced-colors`). Outside the mock: `~/projects/libraries/design/library-data.js` entries
`insp-watermelonui` (lines 1673–1701) and `insp-cloudstudio` (lines 1470–1494) and `examples/kindling.html` in full;
`07-design-decisions.md` rows DD-26, DD-46, DD-47, DD-48; `kb/K3-color-accessibility.md` section 5e; `kb/CONCEPTS.md`
rows C01, C02, C18, C20, C22, C40, C45 and the Avoid list; `mockups/shared/tokens-v2.css`; `mockups/shared/copy.md`
section 9. For the standard, `critic-fable-M01.md` and `critic-astra-M01.md`. For the M03 comparison,
`M03-navy-thesis/index.html`, its `styles.css` navy usage and its `qa/V3.jpg` and `qa/V16.jpg`.

Evidence marked **my probe** is a critic run of the built page on a server I started (ephemeral port on `127.0.0.1`,
Chrome for Testing chromium-1234 from the Playwright cache through the npx-cache Playwright), written outside the
repository in the session scratchpad (`m25probe.mjs` … `m25probe5.mjs`). Both checkers were re-run read-only.
Nothing in the repository was changed except this file. No production host was opened.

Capture freshness checked first: `index.html` 12:51, `styles.css` 12:57, `RATIONALE.md` 13:02, every `qa/*.jpg` and
`qa/fold.md` 13:04. The captures postdate the last source edit, so the images below are the page as built.

**What reproduced before anything was scored.** Every contrast figure in the rationale's two tables recomputes to the
decimal from the token values with the WCAG 2.x formula — 14.58, 7.81, 5.83, 18.57, 2.70, 17.69, 16.10, 13.88, 3.63,
1.56, 8.20, 5.14, 2.38 — and the `color-mix` hairline resolves to `#527482` at **3.00** exactly. Every cream margin,
panel top and panel bottom in "A panel, not a field" reproduces (my probe, all 19 rows: V1 16/16/24 and 113/905.92
against the table's 113/906; V13 128/128/24 and 81/670.72 against 81/671; V14 149.3; V15 156.5 and 653.72, "6px below
the edge" measuring 5.72; V17 416/416). Every measured h1 line count reproduces (7 from 360 to 430, 3 at V10, 4 from
768, 8 at V18). `check-mocks.py` returns **37 pass, 0 fail** and `check-claims.py` returns the M25 block **verbatim**,
both matching the pasted output. That is an unusually clean file, and it is why the findings below are about design
judgement rather than arithmetic.

| Rubric row | Score 1 to 5 | Evidence you looked at (screenshot filename, crop, measurement) | What would make it a 5 |
|---|---|---|---|
| Objective (L1) | **4** | **The routing machinery is excellent and the control pair ranks the two schools.** Machinery first: both CTAs clear the limit on all sixteen fold rows with 84px of spare at the binding row and 317 at the design width (`qa/fold.md`), the cue set is triply redundant — chips "IN PERSON"/"ONLINE" at the strip, the same two words as labels over each control, the full school name as each line's run-in (`V16.jpg` y 155–605) — and my probe finds the two controls **geometrically identical at 18 of 19 rows, Δwidth 0.00px and Δheight 0.00px** (V2 311×44, V14 384×44, V16 384×44, V17 384×44). The fault is what fills them. My probe screenshotted each control's own box and measured mean luminance inside it: **solid 227.1, ghost 54.2 at V16; solid 226.5, ghost 55.4 at V2**, against a panel ground sampled at 33 (`V16.jpg`, crop x 1150–1240, y 620–700). The solid control is the brightest object on the first screen after the headline; the ghost is barely separated from the ground it sits on. Fill is **the only property that differs between the two controls**, and the page gives it no meaning — mode is carried by the chips, the labels and the run-in names — so the one reading available for it is priority. DD-26 chose (a) equal visual weight for two stated reasons, and both are objective-lens reasons: "a default door carries an implicit recommendation the school has not made", and "equal weight also keeps the wrong-school metric clean". `qa/V2.jpg` and `qa/V3.jpg` are where this bites hardest, because the stacked phone pair is a white block above an outline and two thirds of sessions are phones (DD-14). See ruling 2 | One CSS change. Give the two first-screen controls the same fill — either both `--color-on-navy` as M03 ships (`M03/qa/V16.jpg`), or both the full-strength ghost — and keep the source's tight two-control row as **rhythm** rather than as hierarchy. Also fix the one row where the geometry breaks: at V18 the solid wraps to **60.5px against the ghost's 44** (my probe; `m25-doors-V18.png`), the same defect M01 carried at V1 |
| Composition | **4** | **This is a genuinely different direction from M03, not a variant, and I checked it rather than accepting it — see ruling 4.** My probe enumerated every element painting `rgb(0, 42, 58)` at V16: `.panel` x 176→1264, `.logo-navy` x 1072→1256, three `.btn-navy`. **Nothing navy is within 176px of either page edge**, the header is `--color-bg`, the footer is `--color-surface` `rgb(248, 232, 222)`, and cream margins run 16/16 below 768, 32/32 at 768–834, 128 at 1024, 149.3 at 1280, 156.5 at 1366, 176 at 1440 and 416 at 1920 (my probe, all 19 rows). M03 by contrast paints its header, its whole first screen and its footer navy (`M03/index.html:33`, `:45`, `:236`). Put `M03/qa/V3.jpg` beside `M25/qa/V3.jpg` and they are a dark page and a light page even on a phone. The component argument is carried below the panel too: `V12.jpg` is the best capture in the set — all four panel edges visible, then three hairline cards with the same `--radius-md` corner and the same header strip, so the panel reads as the largest member of a set. **Three faults.** (a) The panel's bottom edge is inside the viewport at exactly **six rows — V11, V12, V13, V14, V16, V17** (my probe) — and off-screen at all eight phone rows, the landscape row and V15, so the direction's central claim is three-quarters carried at the rows where most of the traffic is; at the two tall phones it misses by **11.3px (V9, 855.3 of 844) and 20.1px (V6, 859.1 of 839)**. (b) The strip's middle is empty across **671.2px at V16 and V17** and 599.3 at V14 (my probe; the panel is 1088px wide at both 1440 and 1920 because `--container-max` is 90rem, so the bar does not widen past V16 — `V17.jpg`, y 155–175); the added label makes it a named component header rather than reserved space, which is the right fix, but it is the least resolved thing on the screen. (c) The evidence cards are an equal-height row with an under-filled third member: my probe measures dead space below the body ink of **97.4px at V13, 73.6 at V14 and 47.0 at V16 and V17** in card three, and 45.7px at V13 in card two (`m25-cards-1280.png`, crop of `V14-full.jpg` y 760–1010) | **Give the phone a bottom edge.** My probe: hide `.door-lines` and `.panel-foot` and the panel bottom lands at 545.5 (V2), 579.7 (V3 and V9), 583.2 (V5), 585.6 (V8), 607.3 (V1) and 496.4 (V15) — **inside the first screen at every one of them**. Moving the two lines and the mark out of the panel onto cream makes the thesis *more* literal, not less ("one panel, one sentence, two controls, nothing else… the rest of the page is the evidence"), and it resolves the Imagery finding in the same move. If that is too large a change for this pass, the cheap version closes the two tall phones alone: stepping `--p-pad-bottom`, `--p-foot-gap` and `--p-foot-inner` down one token each in the 640–899 band puts V9 at 823.3 and V6 at 827.1, both inside (my probe), with no fold cost. Then fill or resize the third card |
| Typography | **5** | Three faces, three jobs, every step from the clamp, and the h1 is handled with real care. `max-width: 35ch` with `text-wrap: balance` from 768 (`styles.css:114`, `:118`), the two typographic no-breaks ("in&nbsp;person" and `span.nowrap` on "from anywhere."), and the nowrap released by a container query below 12rem of panel so a doubled root font does not overflow (`:119`). The phone rag is the clean double taper the programme wants, not a notch — my probe, h1 line widths as built: **V2 297, 264, 232, 204, 248, 223, 207**; V5 305, 270, 238, 209, 255, 228, 213; V8 308, 273, 240, 211, 257, 231, 215. The four-line desktop setting is 653, 694, 773, 735 at both V16 and V17, and the h1 box at 932px very nearly fills the panel's 960px content column at both, so the headline never reads as a short column stranded in a wide panel (`V17.jpg`). The italic hinge is measured, not asserted: my probe reads `font-style: italic`, `color: rgb(228, 139, 83)` and a computed size equal to the h1's at **all 19 rows**, minimum **24.167px at V10** — above K3 section 5e's 24px floor at every row in the matrix, which is why the landscape recipe is gated at 700px rather than the contract's 600px. `--font-mono` uppercase at .08em throughout, inside the contract's 0.06–0.08 band; Inconsolata in the header because Inter Tight at the same size overflows a 343px row at 375 | Holds. The only open item is DD-38's 300-against-400 heading weight, which M03 already tested on this sentence and which this mock correctly declines to re-run |
| Imagery | **4** | Default state by decision and by the brief: no photograph, and no photographed state specified, with a reason that belongs to this direction rather than to DD-42 — "the panel's argument is that the choice is one object, and a photograph inside it would make it two". Mark geometry is measured every pass and clean: **27.9px at 390 and 32px at 1440 for both files, aspect skew 0% on all eight samples** (`qa/fold.md`, Mark geometry), so the defect `CONTINUITY.md` recorded against six earlier mocks is absent. Each mark is only on its permitted surface (`copy.md` section 8): GT School on cream in the header and on a `--color-bg` plate in the footer, GT Anywhere on navy. **The fault is where the GT Anywhere mark sits.** It is alone at the foot of the panel, below a hairline, in the signature slot of a component — and at the two-column rows it sits under the *Georgetown* column, not its own (`m25-foot-V16.png`, crop of `V16.jpg` y 680–820; `V12.jpg` y 690–730). The panel is the object that represents both schools, and the only logotype inside it is the online school's. That is a parity signal pointing the opposite way from the solid control, which does not cancel it — it just means the panel names one school and emphasises the other | Take the mark out of the panel. The GT School mark cannot join it there (its artwork is navy and needs a light ground), so the honest resolutions are to leave the panel unsigned — its strip label already names it — or to give the mark its own navy plate on the cream below the panel, a device the page already owns (`.logo-navy`, `styles.css:242`). The Composition fix moves it anyway, so one change settles both rows |
| Color and surface | **4** | The colour system is the strongest thing in the file. **Zero raw hex** in the sheet (my re-run of `grep -c '#[0-9a-fA-F]\{3,8\}' styles.css` returns 0); the only non-`var()` colours are `CanvasText` and `transparent` inside the forced-colours block. Every pairing recomputes to the decimal, including the derived hairline: `color-mix(in srgb, var(--color-text-muted-on-dark) 50%, transparent)` resolves to `#527482` at **3.00** on navy, the graphical floor exactly, and it reads as a drawn rule rather than a smudge in `V12.jpg` (strip rule y 190, foot rule y 665). One accent on the whole document, spent on the italic word. Focus is right on both grounds and I looked at every capture: two-band ring inside the panel (`focus-cta.jpg`), `--color-focus` outside it (`focus-footer.jpg`), and `forced-colors.jpg` shows the panel and the logo plate keeping their own colours under `forced-color-adjust: none` with a `CanvasText` border, for the stated and correct reason that a plate mapped to `Canvas` would erase white `<img>` artwork. **Two faults.** (a) **The ghost control is an unnamed DD-46 departure.** DD-46 (a) names one treatment per surface — "near-white with navy text on navy" — and Astra's cell in the same row says the option is adopted "keeping equal prominence". A transparent control with a 1px border is not that treatment, yet `RATIONALE.md` says the two controls "differ only in fill, which the brief sets and **DD-46 governs**". DD-46 does not govern it; the brief overrode it and the rationale does not say so. (b) The ghost's focus ring is `--color-focus-on-dark` `#fbfbfb` at 2px offset over a control whose own border is `--color-on-navy` `#fbfbfb` — **the same value** — so focus reads as a doubled outline in one colour rather than as a distinct indicator (`m25-focus-ghost.png`, my probe at DPR 2). It is legible, because the 2px navy band between them separates the two lines at 14.58, but it is the one place where the page's otherwise exact focus system looks improvised | (a) Either fill both controls per DD-46 (a), which is also the Objective fix, or raise the outline-on-navy variant as a DD-46 amendment and cite the row instead of claiming the existing one covers it. (b) Disappears with (a). If the ghost survives review, give its focus state the inner navy band at 3px so the ring and the border are not one colour at one weight |
| Motion | **5** | **Nothing animates and I verified it rather than reading it.** `grep -n 'transition\|animation\|@keyframes' styles.css` returns exactly two lines and neither declares a move: `:8`, the header comment, and `:265`, the reduced-motion reset. `@keyframes` 0. The runner's reduce pass at V14 computes every transition and animation duration at 0s on elements **and** pseudo-elements (`qa/fold.md`). The only motion on the page is native anchor scroll, fenced inside `prefers-reduced-motion: no-preference` at `:19` and forced to `auto` in the reduce block. The stillness is argued rather than defaulted: V6 is specified for the evidence cards, needs the D-039 script, D-039 is escalated and undecided, so the page ships its complete no-JavaScript state with `data-motion="v6"` as the hook and no `data-d039` declaration. For a direction whose thesis is that the panel is complete at rest, a reveal would have contradicted the argument. One observation that is not a deduction: hovering the ghost fills it with `--color-on-navy` and darkens its label, so under a pointer it becomes visually identical to the solid at rest (`m25-hover-ghost.png`, my probe) — an accidental equaliser for mouse users that the phone never gets | Holds |
| Mission (L3) and exclusivity (L4) | **5** | Selectivity is the stated bar and never the price. The 90th-percentile bar appears in the Admissions evidence card, in both Admissions table cells, in proof fact 1 and in the steps line (five occurrences, `check-claims.py` re-run by me); tuition is a neutral table value at the same weight as every other row, with "Tuition on request. Ask admissions." beside "$10,400 a year" (`V14-full.jpg`, Tuition and access). No crest, seal, countdown, scarcity phrase, price cue or wealth cue in any of the 28 captures. No outcome figure and no accreditation claim on the page or in the JSON-LD, which carries only `name`, `url`, `sameAs` and two `subOrganization` entries (`index.html:16–28`) — PQ-10 deferred by decision and routed to admissions. My re-run of `check-claims.py` reproduces the rationale's pasted block **verbatim**: six figures, six register rows, all "Unverified, public". DD-29 holds at rest at every screen — evidence cards, table, proof strip, steps line, footer facts (`V2-full.jpg`, `V14-full.jpg`). The restraint is the exclusivity argument, and it is made without a single unbacked number | Holds |
| Craft | **4** | Strong on everything mechanical, and I re-ran it. `check-mocks.py` **37 pass, 0 fail**; `check-claims.py` **OK**; both match the pasted blocks. `vh`/`svh`/`dvh` count 0. One `<script>` (JSON-LD), zero `<form>`, zero `<input>`. Console clean on every row. No horizontal scroll at 320 (my probe: `scrollWidth` 320) nor with the root font doubled at 375 (`V2-rootx2.jpg`). Every interactive target at least 44px tall (`qa/fold.md`). Heading order is valid and deliberate: the doors list is labelled by the strip's `<p>` through `aria-labelledby`, so no heading precedes the h1 and no level is skipped. The height-band system is real engineering, not a guess — five bands, each with a stated row it exists for, including the 640–699 rule that stops the mark being sliced at V15 (`V15.jpg`, mark whole at 630 of 648). **Three faults.** (a) **V18, 320 by 256: the solid control stands 60.5px against the ghost's 44** because "EXPLORE THE GEORGETOWN CAMPUS" wraps at a 256px content width (my probe; `m25-doors-V18.png`). It is a reflow row where the fold rule is reported rather than required, but it is the one row where a reader sees the pair as unequal in size as well as in weight, on the direction that stakes itself on the pair. (b) The ghost focus ring, above. (c) Three statements in `RATIONALE.md` do not reproduce; they are listed in the compliance row and none of them describes broken code | (a) and (b). For (a) the M01 remedy applies unchanged: `.btn { gap: var(--space-2) }` or a smaller inline padding at the reflow row buys the label its last pixels without touching the type size |
| Continuity (L2) | **4** | **Scored on the rendered reference for the Anywhere half, unverified and unpenalised for Georgetown, as `CONTINUITY.md` requires.** Matching, from the measured table: page ground `rgb(252, 244, 239)` = `--color-bg` `#fcf4ef`; body `rgb(0, 17, 23)` = `--color-text`; Inter Tight for prose, Literata for display; both mark files the estate's own SVGs unmodified at K12 V2's sizes with 0% skew; the navy action fill, which `CONTINUITY.md` establishes is already in the estate's action vocabulary; Inconsolata uppercase buttons; the uniform corner, which is one of the estate's three constructions and the one on its desktop application control (DD-47); Inconsolata in the footer navigation. **The italic accent span is the strongest continuity move in the slate and it deserves to be named as such.** The estate sets its headline's second clause in accent-orange italic inside an upright Literata h1 and K12 F88 measures that orange on cream at **2.38:1**, failing AA and failing 3:1. M25 reproduces the *device* — one italic accent span inside an upright Literata h1 — and moves it onto navy, where my recomputation of the same `#e48b53` gives **5.83:1** (`V16.jpg`, "campus *or* online"; `m25-or-V16.png`). That is continuity that repairs the estate's own defect instead of importing it, and it is a better answer than any other mock has found to the same problem. Diverging, each declared: heading weight 400 against 300 and tracking normal against −1.6px (DD-38 owns both; M03 ran the test); button weight 600 against 500, blocked because `fonts.css` ships Inconsolata 400 and 600 only and the estate's 500 is a computed weight; button size 17–18 against 16 (the 44px floor); no grain, no photographic hero; footer link case sentence rather than uppercase, argued from the deck's own labels | **File the rendered side-by-side the rubric asks for.** `kb/exemplars/estate/anywhere-home-390-firstscreen.jpg` and `anywhere-home-1440-firstscreen.jpg` already exist; pair them with `qa/V3.jpg` and `qa/V16.jpg` in `qa/`. The row is currently argued from a property table, and this is the one mock in the slate whose central continuity claim — the estate's own headline device, repaired — can only be judged by putting the two headlines beside each other. With that filed and DD-38 decided, this is a 5 with no change to the page |

| Brief compliance | Departures from the brief, with the rationale's stated reason and whether you accept it | Avoid concepts present (CONCEPTS.md id) | Facts, ids, numbers or paths in RATIONALE.md that do not exist where claimed | Verdict |
|---|---|---|---|---|
| Every brief section is built and the borrowing is itemised in both directions, which DD-48 asks for and which most briefs get only half of. Borrowed from `insp-watermelonui`: the dark bounded panel as the entire hero; the headline as the whole design with exactly one italic accent word; the small reduced-emphasis sub-paragraph, re-cast as the provenance line; the tight two-control row; the component-preview grid, re-cast as hairline evidence cards. Borrowed from `insp-cloudstudio`: thin chrome, a label at one end and two tiny uppercase chips at the other, nothing else competing. **Refused and named**: the charcoal `#28222B` and slate `#34364A` ground, the cool white `#DEE2E8`, the sand badge `#DCAB97`, the fully rounded pill radius, the centred hero column, the source's typefaces, its 0.25s headline rise and hover lifts, and Cloudstudio's live-session dot — refused because it would assert something untrue, which is the sharpest of the eight refusals. I checked the borrowing against `examples/kindling.html` and `library-data.js` directly: nothing is copied from the example's code or values, and the two refusals that matter most under DD-48 — palette and typefaces — are complete. The fidelity caveat on the source entry ("measured from a ~720×474 inset of a screen recording, so hexes are approximate") costs this mock nothing, precisely because no hex was borrowed. Copy: sections 0 to 8 verbatim; the chips and strip label are section 1 door labels and an allowed section 1 heading, recorded in section 9 as reusable schematic labels, and the rationale flags that Nari has not agreed section 9 | **Eleven departures. Nine accepted outright, one accepted with its reason corrected, one unnamed.** Accepted: `--color-accent` in place of `--color-accent-text` for the italic word (ruling 1, and the brief has since been corrected to record it); `--radius-sm` on the chips, because an 8px corner on a 21px chip is the pill DD-47 rules out; two parallel `<ul>`s rather than one, because `display: contents` on `<li>` has unreliable list semantics, the same finding M03 recorded; left-aligned rather than the source's centred column, which is the right call and argued rather than assumed; the door lines after both CTAs at every row rather than only on short phones; the landscape recipe gated at 700px rather than the contract's 600px, measured (`--text-xl` computes 23.3px at 600 and would drop the italic word below K3's 24px floor; V10 measures 24.17); the strip label added to the brief's chips-only strip, a fix made by looking at `V16.jpg` and `V17.jpg`; the panel hairline as a derived 50% mix; the evidence cards at two columns between 768 and 1023, a fill-in the brief does not cover. **Accepted with the reason corrected:** the 16px page margin below 768 — ruling 3. **Unnamed:** the ghost control is a departure from DD-46 (a), not an application of it (Colour row) | **None.** C05, C12, C13, C20, C29, C33, C34, C35, C36, C40 and C43 are absent or answered: the sources line sits under both fact blocks, no urgency device, no overlay and no script beyond the JSON-LD, the h1 is both the markup h1 and the dominant object, nothing animates, the same scene at every row. C18's scene swap is absent in the strongest form yet — the compact door form is used at **every** row, so the phone and the desktop are one anatomy and the landscape recipe changes only size and column count. C22 is avoided: four distinct secondary labels in a hairline list, not four identical buttons. C45 is used in its good form, a plain always-visible sentence directly under the panel. **One Use-concept shortfall rather than an Avoid-concept presence: C01, "equal-weight doors", which `CONCEPTS.md` marks as the concept "the whole slate is built on", is met on geometry and not on weight** — see ruling 2 | **Three, all in prose that describes correct code.** (1) **"The panel costs ~43px of vertical budget that M03's field does not pay (16 cream + 16 panel padding, top only) \| 43px at V2"** — the parenthetical sums to 32, and the measurement agrees with the parenthetical, not the headline: my counterfactual zeroing the cream gap and the panel's padding at V2 moves the second CTA from **521.5 to 489.5, a cost of 32.0px**. The direction is also ahead of M03 on this axis rather than behind it — my probe puts M25's second CTA at 521.5 against M03's 591.2 at V2, and 558.6 against 645.8 at V16 — so the compact door form more than repays the panel tax, which is the rationale's own claim and is worth stating with the numbers. (2) **"at a 24px margin the column is 295px and the estimator puts it at eight lines, 31px more, which the V2 budget cannot absorb"** — the column is 295px and it is eight lines, both exactly right, but the budget absorbs it: **CTA2 lands at 584.8 against a limit of 605** (my probe, `--page-margin` alone stepped to 1.5rem), and V1, V3 and V4 also pass. The V2 row only fails when the panel's own x-padding steps with the page margin (620.4 of 605, my first counterfactual), which is a different change from the one the sentence describes. Ruling 3. (3) **"pasted from `qa/fold.md` (run of 2026-09-11T16:57:19Z)"** — `qa/fold.md` records `2026-09-11T17:04:28.382Z`. Every figure in the pasted table is identical to the file's, so nothing is stale; the citation names a run that is not the one in the folder. Also, as noted in the Colour row, "DD-46 governs" the solid/ghost pairing is not what DD-46 says. **Everything else reproduces**, including all fifteen cream-margin rows, all fifteen h1 line counts, every contrast ratio, both checkers' pasted output, and the claim that the ink crossing the bottom edge on the phone rows is the panel's own content | **Pass.** All nine rows at or above 4. Below 5: Objective, Composition, Imagery, Colour and surface, Craft, Continuity |

## Verdict

**Pass — all nine rows at or above 4. Objective 4, Composition 4, Typography 5, Imagery 4, Colour and surface 4,
Motion 5, Mission and exclusivity 5, Craft 4, Continuity 4. M25 is a different direction from M03, not a variant.**
The brief expected Objective at 5 and it lands at 4 for one reason only: the solid-and-ghost pairing ranks the two
schools at the moment a parent routes, against DD-26 (a) and C01. One CSS change lifts it.

## Required fixes, in order of impact

Nothing on this list blocks the gate. The first two change scores by two rows each.

1. **Equalise the two first-screen controls (Objective, Colour and surface).** `styles.css:127–130`. Measured, the pair
   is identical in markup, geometry, padding, type, corner, target and column width, and differs only in mean
   luminance: **227.1 against 54.2 at V16, 226.5 against 55.4 at V2**, on a ground of 33. Fill is the only differing
   property and the page assigns it no meaning, so the only meaning available to a reader is rank — against DD-26 (a),
   whose own reasons are that the school has made no such recommendation and that equal weight keeps the wrong-school
   metric clean. Two identical fills keep the source's tight two-control row, which is the rhythm DD-48 licenses;
   solid-beside-ghost is the source's *hierarchy*, which DD-48 does not. See ruling 2.
2. **Give the panel a bottom edge on the phone (Composition, Imagery).** Move `.door-lines` and `.panel-foot` out of
   the panel onto the cream below it. My probe: the panel then closes at **545.5 (V2), 579.7 (V3, V9), 583.2 (V5),
   585.6 (V8), 607.3 (V1), 496.4 (V15)** — inside the first screen at every row where it is currently off-screen, so
   all four edges are visible at sixteen of sixteen fold rows instead of six. It makes the thesis more literal, not
   less, and it takes the lone GT Anywhere mark out of the panel's signature slot in the same move. If that is too
   large for this pass, close the two tall phones alone: one token down on `--p-pad-bottom`, `--p-foot-gap` and
   `--p-foot-inner` in the 640–899 band puts V9 at 823.3 of 844 and V6 at 827.1 of 839, both inside, at no fold cost.
3. **Correct the two rationale claims that do not reproduce, and name the DD-46 departure (Craft, Colour).** The panel
   tax is **32.0px**, not 43, and the rationale's own parenthetical already says so. The 24px page margin does **not**
   break V2 — CTA2 584.8 of 605 — it costs the headline an eighth line and the provenance line a second, which is a
   different and still sufficient argument. And the ghost control is a departure from DD-46 (a), not an application of
   it. All three are prose over correct code, which is the kind of error that survives into a spec.
4. **Fix the V18 control wrap (Craft, Objective).** Solid 60.5 against ghost 44 at a 256px content width. `.btn { gap:
   var(--space-2) }` at the reflow row, the remedy M01 was given for the identical defect.
5. **File the side-by-side (Continuity).** `kb/exemplars/estate/anywhere-home-390-firstscreen.jpg` and
   `anywhere-home-1440-firstscreen.jpg` beside `qa/V3.jpg` and `qa/V16.jpg`, in `qa/`. This mock's central continuity
   claim is that it reproduces the estate's own headline device on a ground where it passes; that claim can only be
   judged with the two headlines side by side.
6. **Resolve the ghost's focus ring (Colour, Craft).** Ring and border are both `#fbfbfb`; focus reads as a doubled
   outline. Disappears with fix 1; otherwise widen the inner navy band to 3px.
7. **Fill or resize the third evidence card (Composition).** Two lines of body in an equal-height row leave **97.4px**
   of dead space at V13, 73.6 at V14 and 47.0 at V16 and V17 (`m25-cards-1280.png`). Either let the cards size to
   their content, or give the third card the row it deserves — it is the one card whose fact is a deferral.

## The four rulings asked for

**1. The engineer refused the brief's accent token. The refusal was right, it was right for the right reason, and the
result reads as intended.** I recomputed both tokens from `tokens-v2.css` with the WCAG 2.x formula rather than taking
the rationale's word: `--color-accent-text` `#a5501a` on `--color-navy` `#002a3a` is **2.70:1**, and `--color-accent`
`#e48b53` on the same ground is **5.83:1**. The brief's instruction therefore failed three things at once — AA for
text, the 3:1 graphical floor, and the brief's own Acceptance row ("Every on-navy pairing at or above 4.5:1") in the
same document that issued it. `--color-accent-text` is defined in the token file as "accent as small text **on light
surfaces**", so the brief applied a light-ground role to a dark ground; and K3 section 5e rule 1 states the governing
rule exactly — the accent "may be text in exactly one place: **on navy, at ≥24px or ≥18.66px bold** (5.83:1)" — which
is the token and the figure the engineer shipped, and it is the same 5.83 the brief itself names as the floor two
clauses later. An engineer who followed that instruction would have shipped a contrast failure on the one word the
direction is built around and then reported a pass. Refusing was not merely permissible; taking the instruction would
have been the error. The brief has since been corrected to record it, which is the right order of events.

Does it read as intended? Yes, and better than the source's own use of the device. My probe confirms the word is
italic, `rgb(228, 139, 83)`, and set at the **h1's own size at all nineteen rows — minimum 24.167px at V10** — so it
never falls below K3's floor anywhere in the matrix, which is also why the landscape recipe is gated at 700px rather
than 600px. `m25-or-V16.png` shows the intended reading exactly: a warm italic "or" inside a near-white Literata
sentence, an emphasis that is typographic first and chromatic second, which is the source's own description of the
device. Two observations. The word chosen is a function word rather than the source's content word, and that is the
better choice here, not a weaker one: the page's entire job is a choice, and "or" is the choice, so the direction's
thesis is legible in the sentence itself. And at 27px on the phone rows the mark is subtler than at 46px (`V2.jpg`,
line 6 of 7) but it is still plainly a second colour and it is still the only one on the page. The device is also the
estate's own — `CONTINUITY.md` measures anywhere.gt.school setting its headline's second clause in accent-orange
italic at **2.38:1** on cream — so M25 has taken the destination site's signature move and put it on the one ground
where it passes. That is the single best continuity argument any mock in this slate has made.

**2. The solid-and-ghost pairing. The engineer's three-part answer does not hold at the moment that matters, and a
solid control beside a ghost one does rank the two schools whatever else is equal.** I want to give the answer its due
first, because two thirds of it is real. The controls are identical in markup, geometry, padding, type, corner, target
and column width — my probe measures **Δwidth 0.00px and Δheight 0.00px at 18 of 19 rows**, which is better parity
than most of the slate achieves. The ghost's border is genuinely full strength at 14.58, not a faded outline, and it
reads as a real button in every capture (`V16.jpg`, `V13.jpg`). And the after-table swap is really built: at the
`after_comparison` row Georgetown takes the outline and GT Anywhere the navy fill (`m25-doorsagain-1280.png`, crop of
`V14-full.jpg`).

It still does not hold, for three reasons.

*The measurement.* Mean luminance inside the two identical boxes is **227.1 and 54.2 at V16, 226.5 and 55.4 at V2**,
against a panel ground of 33. The solid control is not slightly heavier; it is a lamp beside an outline, and it is the
brightest object on the first screen after the headline. No amount of geometric equality reaches that, because weight
on a dark ground is carried by area times luminance, and the two controls are equal in the first term only.

*The semantics.* Fill is the only property that differs between them, and the page gives it no meaning. Mode is
carried three times over — the chips, the labels, the run-in names. So the fill difference is uninformative, and the
only reading a parent has available for an uninformative difference between two otherwise identical controls is
priority. This is where the borrowing goes wrong under DD-48. The source's twin-pill row is a *primary and secondary*
pair — "Browse components" beside "Docs" — and the solid/ghost distinction is not its composition, it is its
hierarchy. DD-48 licenses composition, rhythm and structural devices; a hierarchy device is none of those. The brief
imported the meaning along with the shape and did not notice the collision. The tight two-control row *is* the
borrowable part, and it survives either fix intact.

*The timing.* The swap balances the document, not the decision. `V14-full.jpg` puts the swapped row at roughly y 2,200
of 5,009 — the fourth screen at a 720px viewport, past the whole comparison table. The parents it reaches are the ones
who already chose to compare. The parents it does not reach are the ones who route straight off the first screen, and
those are the population DD-26 (a) was written for: its stated reasons are that a default door "carries an implicit
recommendation the school has not made" and that equal weight "keeps the wrong-school metric clean". A first-screen
emphasis biases both the recommendation and the metric, and a fourth-screen counterweight corrects neither, because
the parent who acted on screen one never saw it. `CONCEPTS.md` C01 is marked "Use — all; the whole slate is built on
it", so this is not a brief-level preference being weighed against a taste note; it is the slate's founding concept.

The remedy the engineer names as the cheapest — two ghost controls — is the right shape but the wrong instinct: on a
dark panel two near-white fills read better and are what M03 already ships (`M03/qa/V16.jpg`). Either way the source's
row survives; only its ranking goes. And there is an honest third option, which is to put the question to Nari as a
question: if the school does want to lead with one door, that is a decision she can make, and it should be made in
DD-26 rather than inherited from a component-library reel.

**3. The three stated costs, ruled on one at a time.**

*The 16px page margin below 768. Accept the departure; the stated reason does not survive measurement.* The rationale
says a 24px margin puts the h1 at eight lines, "31px more, which the V2 budget cannot absorb once the panel's own
padding and strip are paid for". The first half reproduces exactly: with `--page-margin` alone stepped to 1.5rem, the
h1 column is **295px** — the rationale's own figure — and the sentence does set in **eight** lines. The second half
does not: the second CTA lands at **584.8 against a limit of 605**, a pass with 20.2px of spare, and V1 (649.9 of
716), V3 and V4 also pass, the last two without even losing a line. The V2 row fails only when the panel's own
horizontal padding steps with the page margin (**620.4 of 605**, my first counterfactual), and that is a different
change from the one the sentence describes and the one the cost table prices at "8px a side". So the fold did not
force this. What the departure actually buys is a seven-line headline instead of an eight-line one, plus a
single-line provenance instead of a wrapped one, on a sentence that is already at seven lines — and that is a
perfectly good reason to spend 8px of grid margin, arguably a better one than a fold argument, because it is about
how the page reads rather than about whether it fits. Keep the 16px. Rewrite the reason, because "the budget cannot
absorb it" is a false claim about a measured system and it is exactly the sort of sentence that gets copied into a
spec and then constrains a build that never re-measures it.

*The panel's bottom edge below the fold on ten of seventeen rows. Accept as the price of the direction, but do not
accept that it cannot be reduced.* The count is exactly right — my probe finds all four edges inside the viewport at
**V11, V12, V13, V14, V16, V17 and nowhere else** — and the engineer's mitigation is sound as far as it goes: the ink
crossing the bottom edge on those rows is the panel's own content, so the reader sees an object continuing rather
than a page ending, which `qa/fold.md`'s next-band table and the captures both confirm. But the mitigation is an
argument for why the loss is survivable, not evidence that the loss was necessary, and the loss falls entirely on the
phone, where DD-14 and MD-23 say the design is supposed to be strongest. The direction's own thesis offers the fix
for free: "one panel, one sentence, two controls, nothing else" does not include two paragraphs and a logotype, and
with `.door-lines` and `.panel-foot` outside the panel my probe closes it at **545.5 at V2 and 579.7 at V9** — inside
the first screen at every phone row. I would not rule the current build wrong; I would rule that the cost was accepted
one iteration too early, and that the cheap version (one token off the foot band in the 640–899 range, which alone
rescues V9 and V6) should not wait for a redesign.

*The ~43px the panel costs that M03's field does not. The number is wrong and the conclusion is too modest.* Measured,
zeroing the cream gap above the panel and the panel's own padding moves the second CTA from **521.5 to 489.5 — 32.0px,
not 43** — and the rationale's own parenthetical, "16 cream + 16 panel padding", already sums to 32. More usefully,
the comparison the cost is framed against does not go the way the framing implies: at V2 M25's second CTA sits at
**521.5 against M03's 591.2**, and at V16 at **558.6 against 645.8**. The direction that pays a panel tax finishes its
first screen 70 to 87 pixels *higher* than the field direction it is being compared with, because the compact door
form at every row returns far more than the panel costs. The cost is real in isolation and it is fully repaid in
practice. Fix the figure and state the comparison, because as written the table concedes a disadvantage the build does
not actually have.

**4. Is M25 a different direction from M03, or a variant? A different direction, and not narrowly.** I checked it
three ways rather than reading the rationale's table. First, the paint: my probe enumerated every element painting
`rgb(0, 42, 58)` at V16 and found four — the panel (x 176 to 1264), the footer's GT Anywhere logo plate (x 1072 to
1256) and the navy buttons below the fold — **none within 176px of a page edge**, with a `--color-bg` header and a
`--color-surface` `rgb(248, 232, 222)` footer. M03 paints its header, its entire first screen and its footer navy
(`M03/index.html:33`, `:45`, `:236`). Second, the geometry: cream on all four sides at every row, 16/16 below 768
rising to 416/416 at 1920, and cream above the panel at every row without exception (8px at the landscape row, 48 at
the tall ones). Third, and most persuasively, the eye: put `M03/qa/V3.jpg` beside `M25/qa/V3.jpg` and they are a dark
page and a light page — on a phone, at the row where the distinction is weakest and where the panel's bottom is
off-screen. `M03/qa/V16.jpg` beside `M25/qa/V16.jpg` is not even close.

The distinction is not only in the hero, either, which is what separates a direction from a colour swap. M03's page
below the fold is bands and rules; M25's is a set of bounded hairline rectangles with header strips — three evidence
cards, the TEFA card, the families card, two footer logo plates — all carrying the panel's own `--radius-md` corner,
so the panel reads as the largest member of a set rather than as a hero that happens to be inset. `V12.jpg` shows
that argument complete in a single screen, and it is the capture I would put in front of Nari first.

Where it is weakest is the phone, and the weakness is worth stating plainly rather than arguing away: at 375 the cream
gutter is 16px against a 343px panel, 4.3% of the viewport a side, and the panel runs off the bottom on every phone
row in the matrix — including V9, the tallest, by **11.3px**. At that width the "object" reading is carried by two
rounded top corners, two thin gutters and the light chrome above and below, and it survives, but it survives on a
margin thinner than the direction deserves. Required fix 2 removes that qualification entirely, and until it is taken
the honest sentence for the review is: M25 is a bounded panel at every row and reads unmistakably as one from 768 up,
and reads as one on the phone by a narrower margin than its own thesis claims.

## Two notes for Nari's review, not faults

- **The chips and the strip label are section 9 vocabulary, which Nari has not yet agreed.** "TWO WAYS TO ATTEND" is
  an allowed section 1 heading and "In person"/"Online" are the fixed door labels reused, so nothing new is invented;
  but the panel's component-header device depends on that reuse being acceptable, and it is the most visible section-9
  bet in the slate. It is worth asking about explicitly when the strip is shown.
- **The phone page is 7,290px tall** (`qa/fold.md`, V9) against 5,009 at 1280 (`V14-full.jpg`). Most of the difference
  is the stacked comparison, where DD-43's repeated values print the same sentence twice under each shared row. That
  is the decided behaviour, and the per-block school label makes it legible, but DD-43 is still proposed and the phone
  is where two thirds of sessions are.
