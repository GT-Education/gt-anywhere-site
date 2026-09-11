# Design critic, Fable, M23 The System, re-score after one consolidated iteration, 2026-09-11

Independent of Astra's re-score: none exists at the time of writing. I did read my own `critic-fable-M23-iter0.md`
and `critic-astra-M23-iter0.md`, as the assignment directs, because this is a re-score of named findings rather
than a first pass.

Inputs read, in the order the assignment sets them: `ensemble/prompts/DESIGN-CRITIC.md`; both iter0 cards;
`kb/briefs/M23.md`; `kb/briefs/CONTRACT.md` v2.1, **section 3 first** — the contrast row that my own finding became
is now the programme's rule and is the bar this build is measured against; `mockups/shared/CONTINUITY.md`; the
mock's `index.html`, `styles.css`, `RATIONALE.md`, `qa/fold.md`, `qa/measurements.md`; **every capture in `qa/`**,
including both estate side-by-sides and `forced-colors.jpg`. `tokens-v2.css` re-read for the two tokens the
iteration adopts and for the Georgetown-tint alias.

Evidence marked **my probe** is a critic run of the built page on a server I started (ephemeral port on
`127.0.0.1`, the pinned Chrome for Testing chromium-1234), written outside the repository in the session
scratchpad (`m23r-probe.mjs`, `m23r-fc.mjs`, `m23r-crop.mjs`). Eight detail crops at DPR 1 to 3 were taken to the
scratchpad and viewed. All three checkers re-run read-only. Nothing in the repository was changed except this
file. No production host was opened.

**The sheet moved under me, and I say so rather than score a file that no longer exists.** Captures at 14:58 and
`styles.css` at 14:57 when I began; at 15:04 the shared runner gained a new forced-colours check for the focus
ring on a plate that opts out of forced colours, and a patch landed in M23 that failed it — `qa/fold.md` read
**"Result: 4 failure(s)"**, four rings at 1.05:1, for about three minutes. At 15:07 a second patch fixed it. I
measured the current state myself rather than trust either run: **the two rings that matter, the header lockup
and the footer GT School plate, are `rgb(0,42,58)` on `rgb(252,244,239)` at 13.88:1 in both the light and the
dark forced-colours schemes** (my probe). The row is scored on that, and the block's leftovers are booked under
Craft. Everything geometric below was measured against `styles.css` as committed; the 15:04 and 15:07 diffs touch
only the forced-colours tail.

| Rubric row | Score 1 to 5 | Evidence you looked at (screenshot filename, crop, measurement) | What would make it a 5 |
|---|---|---|---|
| Objective (L1) | **5** | **Both faults I named are closed, and closed at the cause rather than patched.** (a) The GT Anywhere mark no longer imitates the GT Anywhere button. The mark rides in the card's header strip (`index.html:78`, `:85`; `styles.css:210–211`) and my probe at 1440 measures the chip at **178 by 34 at `--radius-sm`** against a CTA at **528 by 44 at `--radius-md`** at the card's foot — no longer two navy blocks of comparable width on one line, but a masthead and a control at opposite ends of the card. `m23r-chips.png` and `m23r-chips-a.png` at DPR 3 show the pair: same height, same corner, same padding, same 17px inset from the card's right edge, one outlined and one filled. (b) The V18 door pair closes: **270 by 44 against 270 by 44, blocks 125.3 against 125.3** (my probe; `qa/measurements.md` V18), against 50.5 by 44 and 131.8 by 125.3 before. And CTA parity is now true by construction rather than by luck — the 1180 breakpoint and `.cta { width: auto }` are both gone (`grep` returns 0 for each), so the two CTAs report **identical widths at all nineteen rows** (my probe). Card heights are identical to two decimals at **18 of 19 rows**. The doors are still the terminal nodes of the drawing with the CTA a child of the node (`qa/V16.jpg`, `qa/V11.jpg`, `qa/V9.jpg`). **One residue, disclosed by the build itself**: at V14 the two door *blocks* stand **219.81 against 210.83**, a difference of 8.98, because the Georgetown tail wraps to three lines and the Anywhere tail to two. The *cards* are 131.17 and 131.17; the arms land at 50 and 50; the difference is in the tail, it is stacked rather than side by side, and at V14 the second block is below the fold, so nothing reads as unequal (`qa/V14.jpg`). `qa/measurements.md` carries it in a difference column and `RATIONALE.md:242` raises it | Holds |
| Composition | **4** | **The structural fault is fixed, and fixed better than I asked.** I asked for the 768-to-1023 asymmetry to alternate; the build answered at the cause. My probe at V11: the run's drop leaves the horizontal at **x 383 against a map centre of 384**, the split bar spans **194 to 574**, and the two arms drop **22px** into the exact centres of the two door cards (Georgetown 32–356, centre 194; GT Anywhere 412–736, centre 574) — **equal arms, mirrored angles, 191px each side of centre**. Same at V13 (509.5 against a centre of 512; arms at 257 and 765 into card centres 258 and 766). The 21-380-22 dog-leg is gone, and CONTRACT section 3's nesting row is now met at every row rather than at all but two. `m23r-v11-junctions.png` at DPR 3 is the evidence. The band system below is unchanged and still the strongest structural idea in the file: the application steps are a second run of the same node language. **Two faults remain, both pre-existing.** (a) The first screen at 1440 is still unbalanced. The track re-solve widens the two fact cards from 210 and 230 to **351 each** (my probe), which is real, but the cards are `align-self: center` in a span whose height is set by the door stack, so `m23r-left-void-1440.png` shows unbroken ground at x 32–440 for y 300–500 and again for y 650–840 — roughly a third of the first screen's drawing area. The rationale declines to chase it and I accept the reason (see ruling 2); the row still cannot reach 5 while the design width reads this empty on the left. (b) The compare banner is still the **widest painted object on the first screen** — full content width on `--color-surface` against 562px door cards (`qa/V16.jpg`, y 834–912) — so the largest panel still belongs to the parent who will not choose | Pull the h1 and the map into one optical block, or cap the door stack so the two fact cards do not float against a taller column — the emptiness then reads as margin rather than as a hole in the drawing. And give the compare banner less painted width than a door |
| Typography | **4** (was 3) | **Both faults moved, one of them a long way.** (a) The measure. My probe, characters a line in the two fact cards: **33.67 and 32.5 at 768; 50.5 and 43.33 at 1024; 25.25 and 32.5 at 1280; 33.67 and 32.5 at 1440**, against 33.7/32.5, 20.2/18.6, 25.3/26, 25.3/26 before. The 1024 row went from the worst on the page to the best, and 1440 gained a third. The seven-line sentence in a 210px box is gone: `m23r-factcards-1280.png` and `qa/V13.jpg` show real prose columns with visible card edges. **The remaining dip is one card at one width and it is now the narrowest measure on the page**: at V14 the ADMISSIONS sentence sets **four lines of 226.5, 241.1, 186.5 and 101.9px — 25.25 characters a line, with "conversation." alone on the last** (my probe; `m23r-factcards-1280.png`). The engineer's caveat about the metric only stepping on a line-count change is honest but does not cover this: the line *count* is what changed, from three to four, and 1280 is the fold-binding desktop row. The `styles.css:234` comment says the three-across form starts at 1280 "where it can hold a measure"; at 1280 it holds 25 characters and at 1024 the two-row form holds 50. (b) The h1 rag. `text-wrap: balance` still does nothing, but `in&nbsp;person` is bound (`index.html:48`) and the six most common phone widths now set M01's clean double taper: **300.5, 266.7, 234.6, 206.4, 251.4, 226.5, 209.9 at V4**, min-to-max 69 per cent, against a 52-per-cent hole before (`qa/V2.jpg`, `qa/V9.jpg`). The declared cost reproduces: V7 goes six lines to seven and 1024 four to five, and both still pass (576 of 657, 693 of 744). Two rags are still uneven and I looked at them rather than inferring: V5 and V6 taper to 209 then step back to 363 in a 366 box, which `qa/V5.jpg` shows falling on a clause break and reading as two sentences rather than a hole; V8 has a 372px line 3 after a 273px line 2; V18 at 320 sets an 83.1px line 7 among 212 and 205 | Give the fact-card track a floor at 1280 so ADMISSIONS clears about 33 characters there, as it does at 768 and at 1440 — step the split column from 1.6fr to about 1.4fr below 1440, or carry the two-row form up to 1365. It is the same one-line change as the fix that worked, applied one breakpoint further |
| Imagery | **4** (was 3) | **The fault I named is closed.** The two marks are now a pair and I measured the pairing rather than reading it: both chips are **34px tall, `--radius-sm`, `0 var(--space-2)` padding, flush to the same 17px inset in their card's header strip**; only the fill differs, and `copy.md` section 8 forces that difference (`m23r-chips.png`, `m23r-chips-a.png` at DPR 3). The Georgetown chip now carries the drawing's own **3.63:1** edge, so the 1.10:1 ghost that all but vanished at V11–V13 is gone — in the crop it reads as a chip, not as a smudge. Mark geometry still measures 32px at 1440 and 27px at 390 with **0 per cent aspect skew on all eight samples** (`qa/fold.md`). The no-photograph decision is unchanged and still right. Both marks survive forced colours on their own panels in both schemes (`qa/forced-colors.jpg`; the runner's new mark check passes). **The remaining fault is the banner glyph, and adding the arrowhead did not fix it — it sharpened the wrong meaning.** `m23r-banner.png` at DPR 3 shows a closed ring with one quadrant open and a solid head on the terminus: that is the universal **refresh / reload / sync** glyph, the shape a browser puts on a reload button. It sits beside "Not sure which is right for your family? Compare the two." Astra's iter0 finding was that the glyph's meaning did not transfer with its appearance; the head makes the borrowed shape more legible as itself and no more legible as comparison. My own fix 8 asked for the arrowhead on craft grounds and on the proportion rule, and on both of those it lands | Replace the circular arrow with a device that means comparison — two opposed arrows, a fork, two overlapping panels — or drop the glyph and let the sentence carry it. Also correct "same footprint" in `RATIONALE.md:125`: the chips measure **149 by 34 and 178 by 34**, because the two SVGs differ in aspect. Everything else in that sentence reproduces |
| Colour and surface | **5** (was 3) | **This is the row that moved most, and it is now the reference implementation of the contract rule my own finding became.** I recomputed all seven ratios from the rendered values rather than from the token file (my probe, V16): every card edge, strip rule, tail edge, banner edge and mark chip is `--color-border-strong` `rgb(133,127,123)` at **3.63 on the page ground, 3.31 on the surface, 3.35 on the GT Anywhere tint**; every connector segment, the phone trunk, the junction dots and the steps' connectors are `--color-accent-text` `rgb(165,80,26)` at **5.14, 4.68 and 4.73**. Two aliases (`--m23-ink`, `--m23-line`, `styles.css:32–33`) carry the whole drawing, so one edit moves all of it. `--color-border` at 1.56 and `--color-accent` at 2.38 are confined to the page's text rules — band rules, table rules, list rules, the connect list — which I verified by reading the computed values, not the selectors: `.band` border-top measures **1.56** and is decoration, not argument. That is the right division and it is the division CONTRACT section 3 asks for. Zero raw hex (re-run: **0**). Forced colours is still the best in the set and I looked at it at V14: every hairline, strip rule, connector segment and both junction dots redrawn in `CanvasText`, both marks surviving on their own panels, the block still last in the sheet (`qa/forced-colors.jpg`). One accent device per screen still counted correctly. The fact cards still carry no fill and I accept the decline, having checked the premise: `tokens-v2.css:24` declares `--color-georgetown-tint: var(--color-surface)` — one value, two names — so the only neutral fill available *is* the Georgetown colour (ruling 1) | Holds |
| Motion | **5** | Unchanged and re-verified rather than assumed. My re-run of a grep for `transition`, `animation` and `@keyframes` over the current `styles.css` returns exactly two lines and neither declares a move: `:6`, the header comment, and `:446`, the reduced-motion reset. `@keyframes` 0. `vh` 0. The runner's `prefers-reduced-motion: reduce` pass at V14 computes every transition and animation duration at 0s on elements and pseudo-elements (`qa/fold.md`). The only motion on the page is native anchor scroll, fenced inside `no-preference` and forced to `auto` in the reduce block. Nothing in the iteration touched it | Holds |
| Mission (L3) and exclusivity (L4) | **5** | Unchanged, and the drawing that carries the claim is now legible enough to carry it. "One school, one admissions bar, one mastery-based program" is still the *shape* of the first screen rather than a sentence illustrated: one run, one split, two terminals, at every one of nineteen rows (`qa/V16.jpg`, `qa/V11.jpg`, `qa/V9.jpg`, `qa/V10.jpg`). Selectivity is still the bar and never the price; the only tuition figure is a neutral table value beside "Tuition on request. Ask admissions." No crest, seal, countdown, scarcity phrase or wealth cue in any capture. `check-claims.py` re-run by me: **six figures, six register rows, all "Unverified, public", `check-claims: OK`**, and CR-022's status and its conflict with CR-021 are now accounted for in the rationale's Flagged slots, which was Astra's finding. The provenance line appears once, under the h1, in italic Literata — prominence, not disclosure (MD-17) | Holds |
| Craft | **4** (was 3) | **Four of my five faults are closed and I reproduced each.** (a) The split is anchored to grid rows rather than to a percentage: `styles.css:244` spans `.wire--split` to `grid-row: 1 / 4` and the trunk is `top: attach; height: 100%`, so its lower edge **is** the second door card's top edge. My probe at V16: the trunk runs 397.06 to 642.23 and the two arms enter the cards at **+58 and +58** from each card's own top, inside both name line boxes; at V14 **+50 and +50**; on every portrait phone row **52 and 52**. The V13 miss (36.1 against 49) is gone and V13 now reports equal blocks at 216.06. The tail floor is a real three lines (`calc(3 * var(--leading-prose) * 1em)`) and both block heights are in the harness, which is what I asked for. (b) The arrowhead is drawn (`m23r-banner.png`). (e) The three figures are corrected, and the 320 pair closes. Mechanically: `check-mocks.py` **37 pass, 0 fail**; `check-claims.py` **OK**; `check-links.py` **OK, defined=661 referenced=661**; R37 parity holds — the nineteen fold rows reproduce in `RATIONALE.md` **verbatim** (my diff). Console clean; no horizontal scroll at 320 or at a doubled root. **(c) is not closed, it moved.** The dot that marked nothing at the run's midpoint is gone at 1280 and above, where `.wire--run .w-dot` is `display: none` and the dot sits at the split junction instead — correct. On the phone there are two dots and both are real junctions. **But at 768 to 1279 the dot is on the run's T and the split junction carries none** — `m23r-v11-junctions.png` at DPR 3 shows it plainly: a filled dot where the drop leaves the horizontal run, and a plain crossing where the drop divides into two arms. Three segments meet at both. The build's own stated rule (`styles.css:146`) is "a filled dot marks a junction: a point where the run divides or where a branch joins it", and the point where the run divides — this direction's whole argument — is the one junction left unmarked, at exactly the two widths where the drawing is most legible. So one marker means two different things across the matrix. **New, from the last twenty minutes**: the forced-colours tail (`styles.css:476–483`) ships a comment saying the ring is "stated in near-white" directly above a rule that states it in navy, and three selectors that cannot match — `.mark-plate:focus-visible` and `.mark-plate--navy:focus-visible` are `<span>`s, and `.map .node::after:focus-visible` is a pseudo-element wearing a pseudo-class. `.footer-logo--anywhere:focus-visible` sets a non-system colour, which the user agent overrides in forced colours; I measured its actual ring at `rgba(5,0,73,.8)` light and `rgba(0,230,255,.8)` dark, 19.04 and 13.76, so it passes by the user agent's doing and not by that rule. The block is inert, not broken. (d) the DOM-order mismatch is unchanged and still accepted with the note | Put the dot at the split junction at 768 to 1279, or take it off the run's T there, so one marker means one thing at all nineteen rows. Then cut the forced-colours tail to the two selectors that can match and make the comment say what the rule says |
| Continuity (L2) | **5** (was 4) | **The row now rests on the rendered comparison the rubric asks for.** `qa/estate-side-by-side-1440.jpg` and `qa/estate-side-by-side-390.jpg` put `kb/exemplars/estate/anywhere-home-1440-firstscreen.jpg` and `anywhere-home-390-firstscreen.jpg` beside V16 and V9, labelled. I read both. What the pair shows: the same `rgb(252,244,239)` ground, the same two faces, the same navy `rgb(0,42,58)` Inconsolata action, both marks at the estate's own sizes — and, on the other side, a composited photographic cut-out of a child over grained line artwork against four outlined boxes on flat cream. The register distance is real and the rationale states it plainly rather than claiming a match, which is why it is a note for Nari and not a deduction. The divergences are each named with a reason and unchanged: heading weight 400 against 300 behind a `--h1-weight` hook, tracking normal against −1.6px, button weight 600 against a computed 500 `fonts.css` cannot ship, button size 17–18 against 16 at the 44px floor. **The contrast fix pays a second time here**: at 1.56 and 2.38 the drawing looked thin beside a photographic hero; at 3.63 and 5.14 it holds its own weight in the side-by-side, which I could see only because the capture now exists. This is still the most inheritable shell in the set — node, strip, hairline, connector and banner are a component grammar in pure CSS over `tokens-v2.css`, no dependency, no build step, one JSON-LD script. Georgetown remains unverified and outside this score, as `CONTINUITY.md` requires | Holds for the Anywhere half. Georgetown needs a mirror before any critic can score it |

| Brief compliance | Departures from the brief, with the rationale's stated reason and whether you accept it | Avoid concepts present (CONCEPTS.md id) | Facts, ids, numbers or paths in RATIONALE.md that do not exist where claimed | Verdict |
|---|---|---|---|---|
| Every brief section is still built and the copy is unchanged: `check-mocks.py` 37/37 and my slot read of `index.html` against `copy.md` v1.1 sections 0 to 8 find **no departure**. "The program" is still flagged. Two brief expectations are departed from and both were already accepted at iter0: the door sentence follows its CTA at every width, now **relabelled as a judgement rather than a measurement** (ruling 6), and at 768 to 1279 there are not three positions in a row, which is now in Departures where I asked for it. The V14 banner departure is unchanged and still the best-handled departure in the file | **Six departures, all previously accepted and all still sound.** The mark's move into the header strip is a **new** departure from the brief's "marks at the foot of their place cards" and is declared, measured and better than the brief's own instruction — accept without reservation. The 1280 rather than 1024 three-across form is a new departure from "the map spans 12 columns at 1024 and above", declared, and is the fix that earned the Typography point — accept, with the 1280 measure named as the part not finished | **C43 is no longer present, and that is the headline of this iteration.** The scene is the same graph at every width: two shared nodes in series, one filled junction, two mirrored arms, two identical terminals. Measured at V9 (trunk x 26 from the junction at y 481 to THE PROGRAM at y 1067, a T with a dot at ADMISSIONS, an elbow at THE PROGRAM, bar at x 37, arms of 10px into both name lines at the same +51 inset), at V11 and V13 (centre-line branch, mirrored 22px arms into both card centres), at V14 and V16 (mirrored 28px arms at the same inset into both name lines) and at V10, where the stub that coupled Georgetown to GT Anywhere is deleted and replaced by a bar with mirrored 8px arms and a centre trunk to the shared run. C18's reorder survives and the scene no longer swaps. **C05, C12, C13, C20, C29, C30, C33, C34, C35, C36, C40 and C45 absent or answered.** CONTRACT section 3: the contrast row is **met by measurement at every ground**, the nesting row is met at every row rather than at all but two, the proportion row is met, and the Literata overhang is still cleared | **Three, all small, all in prose that describes correct code.** (1) `:125` and iteration row 2, "the same padding, corner, **footprint** and inset": padding, corner and inset reproduce exactly; the footprint does not — **149 by 34 against 178 by 34** (my probe), because the two SVGs differ in aspect. (2) `styles.css:234`, the three-across form starts at 1280 "where it can hold a measure": at 1280 the ADMISSIONS card holds **25.25 characters**, the narrowest on the page, which the build's own `qa/measurements.md` reports and the prose does not. Iteration row 3's "the 1024 row, which was the worst, is now the best" is true and leaves unsaid that 1280 is now the worst. (3) `styles.css:477–479`, the forced-colours comment says the ring is "stated in near-white" above a rule that states it in navy. **Everything else reproduces**, including all nineteen fold rows, both checkers, the arm table, the block table, the contrast table, the 8.98 at V14, the mark geometry and the clearance figures | **Pass.** All nine rows at or above 4: Objective 5, Colour and surface 5, Motion 5, Mission and exclusivity 5, Continuity 5; Composition 4, Typography 4, Imagery 4, Craft 4 |

## Did the iter0 required fixes land?

| # | Iter0 required fix | Landed? | On what evidence |
|---|---|---|---|
| 1 | **Draw the map at 3:1** — `--color-border-strong` on the node, tail and banner; `--color-accent-text` on the run | **Landed, in full** | My probe recomputed all seven ratios from rendered values: **3.63 / 3.31 / 3.35** and **5.14 / 4.68 / 4.73**. Two aliases carry the whole drawing; `--color-border` and `--color-accent` are confined to the page's text rules (`.band` measures 1.56). The old reasoning is retracted in the rationale's token table |
| 2 | **Stop the GT Anywhere mark imitating the GT Anywhere button**, and give both doors the same mark treatment | **Landed** | Chip 178 by 34 in the strip against a CTA 528 by 44 in the foot; both chips identical in height, corner, padding and inset; the Georgetown chip carries a 3.63:1 edge (`m23r-chips.png`, `m23r-chips-a.png`). The 1180 breakpoint and `.cta { width: auto }` are gone, so CTA widths are equal at all nineteen rows |
| 3 | **Give the map's prose a measure** | **Partly landed** | 1024 went 20.2/18.6 to **50.5/43.33**; 1440 went 25.3/26 to **33.67/32.5**; 768 unchanged at 33.67/32.5. **1280 is now the narrowest on the page at 25.25**, four lines with a one-word last line. Three of four widths fixed, the fourth moved from joint-worst to sole-worst |
| 4 | **Anchor the split to the cards and give the tails a real floor** | **Landed, in full** | `grid-row: 1 / 4` plus `top: attach; height: 100%`; arms measured at 52/52, 50/50 and 58/58, equal on both doors at every row; tail floor is a real three lines; both block heights are in `qa/measurements.md` with a difference column, which is exactly the harness I asked for — and it is that harness that surfaces the 8.98 at V14 |
| 5 | **Keep the argument on the phone**, and delete or redraw the V10 coupling stub | **Landed, in full — the most important fix in the set** | See the ruling below. The undirected four-stub bus is gone; the V10 coupling is deleted and replaced by a real branch |
| 6 | **Even the h1 rag** | **Landed, with the declared trade** | `in&nbsp;person` bound; the seven-line rows set 300.5/266.7/234.6/206.4/251.4/226.5/209.9, M01's double taper, at zero fold cost. The declared cost (V7 six to seven lines, 1024 four to five) reproduces and both still pass. V5, V6, V8 and V18 rags remain uneven; V5's step falls on a clause break and reads |
| 7 | **Correct three rationale figures and close the V18 door pair** | **Landed** | 703.6, +25.5px and "same CTA size now true by construction" are all in the file; V18 ships 270/270 with 125.3/125.3 blocks |
| 8 | **File the side-by-side, and draw the arrowhead** | **Landed; the arrowhead half only half-solves what it was asked to** | Both estate side-by-sides are filed at 390 and 1440 and I read them. The arrowhead is drawn and settles the proportion question, but the glyph now reads as refresh rather than compare (Imagery) |

Three things this iteration did that no critic asked for and that are worth recording: the run's dot at 1280 and
above is deleted rather than relocated, which is the right reading of the borrowed component; the compare band's
opening is corrected from a full band to `--space-6` because the banner is the sentence that points at it; and
the mark's move into the header strip is a better answer than either of the two I offered.

## The phone form: is it the same scene?

**Yes. Judged on the captures and then confirmed by measurement, not the other way round.**

`qa/V9.jpg` and the DPR-3 crop `m23r-phone-junction.png` show what ships: a trunk in the left lane; a single
horizontal leaving it into a **filled junction dot**; a branch bar; and **two mirrored arms** landing on the
"Georgetown Campus" and "GT Anywhere" name lines. Below the doors the trunk carries the two shared facts — a T
with a dot at ADMISSIONS, where the trunk runs on, and an elbow with none at THE PROGRAM, where it ends. My
probe at V9: trunk x 26 from y 481 to y 952 and on into THE PROGRAM's middle at y 1066; the junction dot at
x 36.5–41.5, y 478.7–483.7; bar at x 37 from y 399.6 to 541.2; arms of 10px each into both cards at the **same
+51 inset**, both inside their name line boxes. Two shared nodes in series, one junction, two identical
terminals.

That is the same graph as every wider row, and I checked the wider rows for the comparison rather than assuming
it: V11 and V13 draw one trunk, a centre-line branch and two mirrored arms into the two card centres; V14, V15,
V16 and V17 draw one run, one feed with its dot, and two mirrored arms at the same inset into both name lines;
V10 draws a bar below the two doors with mirrored 8px arms and a trunk down the gutter to the shared run. What
changes between them is the reading direction and the axis, which is what a reflow is. What does not change is
the topology, and the topology is the argument. C43 forbids a hero scene that differs beyond cropping; a
branching tree read upwards is the same tree.

Two residues, neither a deduction. The trunk passes the two door sentences on its way down to ADMISSIONS without
tapping them — but a wire travelling past a block it does not join is ordinary diagram grammar, and those blocks
are the doors' own tails, not nodes. And the junction dot's placement is consistent between the phone and 1280
and above, and inconsistent at 768 to 1279, which is booked under Craft.

## Rulings on the six declined items

**1. Filling the fact cards. Decline upheld, and I checked the premise rather than accepting it.**
`tokens-v2.css:24` reads `--color-georgetown-tint: var(--color-surface)` with the comment "the same value by
intent: one tint, two names". My probe confirms it at render: the Georgetown card and the node strips both paint
`rgb(248,232,222)`. So the only neutral fill in the set genuinely *is* the Georgetown colour, and filling the two
cards that hold the facts belonging to **both** schools with one school's tint would say the opposite of the
page's thesis. That is a better reason than the one I had in mind when I wrote "optionally". The part of that row
the contract actually requires — the 3.63:1 edge — is done, and a node now reads as a shape. If Georgetown ever
gets a tint of its own the fill becomes free and should be taken, which the rationale says.

**2. Filling the empty left half at 1440. Decline accepted, with the point withheld.**
The reason is sound as far as it goes: inventing a fifth node the brief does not specify would be worse, and
stretching two cards past a sensible measure is the fault this iteration exists to fix. And the cards did widen,
from 210 and 230 to 351 each. But the decline is answered on the two options I named and not on the problem: the
void is vertical, not horizontal, and it exists because two short cards are centred against a stack whose height
they do not share. A third option was available and is not considered — pull the h1 and the map into one optical
block, or cap the door stack. So: accept the decline as reasoned, keep Composition at 4, and name the third
option rather than repeat the two that were answered.

**3. Alternating the 768-to-1279 arms. Decline accepted without reservation, and the answer is better than the
ask.** I asked for the asymmetry to alternate so it would stop always favouring the same door. Having the branch
leave the run at the map's own centre line removes the asymmetry instead of rotating it, which is what CONTRACT
section 3's "equal arms, mirrored angles" actually asks for. Measured at V11 and V13: the drop leaves on the map
centre, and the two arms stand exactly **190px either side of it at V11** and **254px either side at V13**,
each dropping 22px into the exact centre of its own card's top edge. Nothing alternates because nothing is
unequal. Upheld.

**4. A tracking step at the 402-to-430 band. Decline accepted.** It was one of the two options I offered and the
build took the other one, which is to say which rows it chose and why. The contract's type table does set the h1
at normal tracking, so a per-band step would be a second typographic variable introduced for one row's rag, and
I would not have asked for it if the first option had been free. V7 passes at 576 of 657 and its seven-line rag
is even. What the decline costs is visible at V5, V6 and V8, where the rag steps rather than tapers; I looked at
`qa/V5.jpg` and the step falls on a clause break and reads as two sentences, so I do not press it.

**5. A four-line tail floor at V14. Decline accepted.** The difference is 8.98px at one row out of nineteen, the
two door *cards* are identical there, both arms land at 50, and the split's geometry no longer depends on the
blocks being equal — which is the point of fix 4. The cost of forcing it is real and specific: 25px below the
fold at the one row where the compare banner is already outside the first screen. Taking a measured 25px from a
row to close an invisible 9px is the wrong trade. The right handling is what the build did: floor the tails at
three lines, report both block heights, and raise the exception in the file. Upheld.

**6. Restoring the contract's door order at the wide rows. Accepted as a labelled judgement — and it should go
to Nari with the mocks, not be settled here.** The measurement that justified the departure is retracted and
corrected (703.6, true only at V14 and V15), so the departure now rests on a design argument: one card anatomy at
every row rather than two arrangements across a breakpoint. That is a legitimate argument and I would not
overturn it on my own authority. It is also not free — strip, name, **button**, then the sentence that
distinguishes this door from the other one asks a parent to act before being told what they are acting on, at
the ten rows where the fold never objected. Labelling it a judgement so Nari can overturn it cheaply is exactly
the right handling, and I record my own preference for the contract's order at 768 to 1023 and 1440 and above so
she has both views. No required fix.

## Required fixes, in order of impact

None of these blocks the pass; all four are one-rule changes.

1. **Make the junction dot mean one thing (Craft, Composition).** At 768 to 1279 the dot sits on the run's T and
   the split junction — the point where the run divides, which is the direction's entire argument — carries none
   (`m23r-v11-junctions.png`, `qa/V11.jpg`, `qa/V13.jpg`). At 1280 and above, and on the phone, the dot is at
   the branch. Move it, or drop the run's dot at those two rows, so the marker reads the same across the matrix
   and matches the build's own stated rule at `styles.css:146`.
2. **Give the fact-card track a floor at 1280 (Typography).** 25.25 characters a line in the ADMISSIONS card,
   four lines with "conversation." alone on the last, is the narrowest measure on the page and sits on the
   fold-binding desktop row. Step the split column from 1.6fr to about 1.4fr below 1440, or carry the two-row
   form up to 1365. Then correct the `styles.css:234` comment, which claims the 1280 form "can hold a measure".
3. **Make the banner glyph mean comparison (Imagery).** With its arrowhead it now reads as refresh or reload. Two
   opposed arrows, a fork, two overlapping panels — or no glyph, and let the sentence do it.
4. **Clean the forced-colours tail (Craft, compliance).** `styles.css:476–483` ships a comment that contradicts
   the rule beneath it and three selectors that cannot match (`.mark-plate:focus-visible` and
   `.mark-plate--navy:focus-visible` are spans; `.map .node::after:focus-visible` is a pseudo-element with a
   pseudo-class). Keep the two that work — the header lockup and the footer GT School plate, which I measure at
   13.88:1 in both schemes — and say in the comment what the rule says. Correct "same footprint" in
   `RATIONALE.md:125` at the same time: 149 by 34 against 178 by 34.

## Two notes for Nari's review, not faults

- **The door order (ruling 6) is now a judgement call the file invites her to make.** It should be shown to her
  as one, with the two arrangements side by side at 1440, rather than buried in a departures table.
- **The estate side-by-side is the capture to put in front of her first.** `qa/estate-side-by-side-1440.jpg`
  shows honestly that this is the furthest of the five new directions from the estate's own first screen in
  register — a drawing where the estate has a photograph. That is a direction choice, not a defect, and it is
  the choice she is actually being asked to make.

## Verdict

**Pass.** Objective 5, Colour and surface 5, Motion 5, Mission and exclusivity 5, Continuity 5; Composition 4,
Typography 4, Imagery 4, Craft 4. Every fix I required at iter0 landed, five of the eight in full; the two that
landed only partly (the measure, the dot) moved from "the direction's argument is drawn below the contrast floor
and disappears on the phone" to "one card at one width sets 25 characters, and one junction marker is in the
wrong place at two rows". The phone now draws the same scene as the desktop, which was the finding that
mattered, and the drawing meets CONTRACT section 3's contrast row by measurement against all three of the
grounds it sits on — not by adopting the token, which M10 and M24 have also done, but by reporting the ratio for
every ground in its own harness.
