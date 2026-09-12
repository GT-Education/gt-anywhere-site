# Studio critic, M32 "The Two Panels" — build pass 3

| Field | Value |
|---|---|
| Critic | Fable (studio / design director's critic), 2026-09-12 |
| Round | Second card. Pass 1 scored 5/4/4/4/4/5/5/**3**/4 ITERATE (studio), 4/4/4/4/3/4/3/3/3 ITERATE (Astra). Two build passes since |
| Method | Captures opened with the Read tool before any prose was read; then `index.html`, `styles.css`, `RATIONALE.md`, `qa/fold.md`, `qa/M32-measure.mjs`, `qa/M32-source-counts.py`, `0_plan/kb/briefs/M32.md`, `CONTRACT.md`, `0_plan/kb/exemplars/gt-panels/SOURCE.md`, `copy.md`, `tokens-v2.css`, Q-036 and Q-037 |
| The mock was not edited | Critic only. No file in `0_plan/mockups/M32-the-two-panels/` was touched; `git status` on that path is clean |

## What I ran, rather than read

| Command | Result |
|---|---|
| `node qa/M32-measure.mjs` | 18 properties, 19 rows, worst Δ **0.0px** |
| `node qa/M32-measure.mjs --reprise` | 18 properties, 19 rows, worst Δ **0.0px**. The 34.3px V18 defect is gone |
| `node qa/M32-measure.mjs --weight` | Reproduces the rationale's V14 count cell for cell |
| `node qa/M32-measure.mjs --lines` | Reproduces the `.panel-line` table cell for cell |
| `python3 0_plan/kb/exemplars/gt-panels/count.py` | 1 mark / 1 heading / 1 paragraph / 1 button each; 219 against 276; **1.26 : 1** |
| `python3 qa/M32-source-counts.py` | Still prints 24.7 : 1, then four lines refuting itself. Kept, not deleted |
| `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M32-the-two-panels` | **38 pass, 0 fail** |
| `python3 1_spec/tools/check-claims.py` | OK. CR-011 ×4, CR-021 ×1, CR-032 ×4, CR-033 ×2, CR-034 ×1, CR-035 ×2 |
| Nine contrast ratios recomputed from `tokens-v2.css` | 17.69, 16.10, 16.30, 14.58, 12.63, 12.79, 1.01, 2.38, 5.14 — **every one matches to the second decimal** |
| Greps | raw hex in `styles.css` 0; `transition:` 0; `@keyframes` 0; `animation:` 0; `vh|svh|dvh` 0; `<script` 1; 45,504 bytes total — all four figures the self-check states |

Captures opened: V2, V5, V6, V8, V10, V11, V12, V14, V15, V16, V17, V18, V19, V2-full, V14-full, V2-rootx2, forced-colors-light, forced-colors-dark, focus-cta, focus-plate, focus-footer-plate, focus-logo-navy-fc-light, focus-logo-navy-fc-dark.

---

## The six tests

### 1. Does the rewritten warrant hold, or is this a page in search of a thesis?

It holds, but it is a smaller thesis than pass 1's and the file should stop pretending otherwise in two places.

The original direction was "the estate already knows what this page is; take its shape and fix what is wrong with it." Three things were wrong; the middle one was an artefact of a hover state. What survives is real and it is not thin: removing photographs of identifiable children is a **structural** change here, because the source carries its images in `background-image` on the panels themselves, so the two tints are load-bearing construction rather than a fallback; and moving CR-039/040/041 off a routing component is the difference between a compliant page and one that ships a velocity multiple on the one screen whose job is a choice.

What genuinely weakened: **holding parity is no longer what distinguishes M32.** DD-26 (a) binds every mock in the slate, so "measured equal to 0.0px" is a contract floor, not an argument for this direction over M4 or M5. The distinguishing claim is now continuity — this is the estate's own routing object, in the estate's own arrangement — plus compliance. That is a legitimate thesis for a routing page and arguably a better-founded one than "we corrected the estate," because the shape now comes with evidence that the estate already solved the problem the same way. But it is inherited rather than designed, and the page's most distinctive visual decision (two flat tints inside a navy lattice) now rests on a prohibition rather than on an idea. The rationale concedes this in the right words at line 125: "the residual is not a flaw M32 introduced against a better original; it is the cost of the no-photograph state."

Not a page in search of a thesis. A page whose thesis shrank from *correct the estate* to *adopt the estate*, honestly, and which has not finished saying so — see test 2.

### 2. Is the correction carried honestly? Mostly. It is stated superbly and swept incompletely.

The Correction section is the best thing in the folder. It prints every wrong figure beside what the extract measures (`RATIONALE.md:67–105`), names the mechanism — `.split-cta_hidden-wrap { overflow: hidden }` plus a `data-w-id` reveal, so a capture catching one panel open and one closed yields 24.7 : 1 — extends the retraction to **two further descriptions** nobody asked about (the overlay claim and the square-corner claim), and states the transferable lesson: "passes 1 and 2 measured a picture of an interactive component in one of its states and reported the result as a property of the component." `qa/M32-source-counts.py` is kept and re-headed; I ran it, and it prints its own refutation underneath its own number. That is the right handling and it should be the programme's template.

The sweep is unfinished. Five places still carry the retracted claim or its framing:

| # | Location | What it still says |
|---|---|---|
| 1 | **`styles.css:4`** | "three things in it are corrected: the photographs of identifiable children (DD-42, RF-25), **the imbalance between the two doors** (DD-26 option a), and the claims paragraph". The shipped artifact asserts the refuted claim as one of its three reasons for existing |
| 2 | `RATIONALE.md:639` | The Continuity table justifies refusing the orange fill partly because "in the source it is also **the thing that makes one door louder than the other**" — which Correction item 4 refutes 570 lines earlier |
| 3 | `RATIONALE.md:54` | "the tint substitution cannot itself create **the imbalance this direction exists to remove**" |
| 4 | `RATIONALE.md:628` | "everything said about the source comes from Johnny's screenshot as the brief describes it and from the three register rows, **not from a rendered capture in this repository**" — stale; pass 3 works from the extract |
| 5 | `RATIONALE.md:419` | The DD-26 row says "0.0px on **seventeen** properties"; the harness measures eighteen and the rest of the file says eighteen |

None of these misrepresents evidence, and a reader going front-to-back meets the refutation long before items 2–4. But item 1 is in the file a future builder will open on its own, and item 2 uses a refuted fact as a live justification. Both go before the folder is called clean.

### 3. Reporting integrity — the previous deduction. Fixed, with one recurrence.

Verified by diff, not by reading:

| Check | Method | Result |
|---|---|---|
| The 19-row matrix | `diff` of the `\| V…` rows in `qa/fold.md` against `RATIONALE.md` | **IDENTICAL** |
| The next-band table, including the V18 cell | same | **IDENTICAL**. `qa/fold.md:66` and `RATIONALE.md:253` are the same string; the DD-44 rebuttal now sits in a separate table beneath, labelled "not part of the quotation above" |
| The V18 message matches the **current tool** | `0_plan/tools/shots.mjs:162` emits that exact string; `qa/fold.md` was regenerated in the same commit that changed it (`249e9fe`); the mock path is clean against HEAD | **Matches** |
| Timestamp | `qa/fold.md:3` reads `2026-09-12T01:16:15.056Z`; cited at `RATIONALE.md:181` and `:670` | **Matches** |
| The three parity tables | `diff` against a live rerun of all three harness modes | **IDENTICAL, all three** |

The recurrence: the block headed **"Checker output, verbatim, from the run of 2026-09-12"** (`RATIONALE.md:741`) pastes `## M32-the-two-panels: 37 pass, 0 fail`. The current checker prints **38 pass, 0 fail** — commit `6556edd` split R10 into two rules at 20:59, before this file's 21:17 write, and the re-splice pass caught the fold tables and missed this one. It understates rather than flatters, and the verdict (0 fail) is unchanged, so it is staleness and not the pass-1 failure of editing a negative cell. It is still a block labelled *verbatim* that does not reproduce, which is the category the previous card said had to be clean.

Also still true and worth one line: the runner's "Interactive targets under 44px" table prints a single asserting row rather than an enumeration. I read the predicate — `TARGETS_JS` filters on `r.height >= 43.5 && r.width >= 43.5`, both dimensions — so the empty table does mean what the rationale says it means. The gloss is accurate; the table is still the tool asserting rather than showing.

### 4. Parity: measured equal, and — now — reading as a pair, with one residual

**Measured.** I reran both pairs. 18 properties × 19 rows, worst Δ **0.0px**, first-screen *and* reprise. The 34.3px V18 reprise defect that the extended harness found is gone. One nuance the table does not flag: the reprise panels carry no mark, so `plateW`, `plateH`, `plateBorderW` and `markH` are 0 against 0 — four of the eighteen are vacuously equal there. The other fourteen are real.

**Read.** Different question, and the honest answer is *yes, now, with one residual*. In V14 and V16 the two panels read as a matched pair: identical box, identical name position, identical CTA, identical 44px control, tints 1.01:1 apart so neither side is the darker one. The pass-1 defect is genuinely gone — the Georgetown plate was a 3.31:1 hairline on a 1.10:1 fill, effectively a ghost beside a navy chip; at `--color-navy` 12.63:1 it is now a drawn object and the eye no longer skips it.

What remains, and the harness is the one that says so: **painted navy inside the plates is 1 : 17.1** (436 px² against 7,476 px² at V14, V16 and V19), 1 : 1.41 across the whole panel. By eye in V14, V16 and V17 the right-hand navy plate is still the single heaviest object on the first screen and takes the first fixation. It is smaller than pass 1's imbalance and it is disclosed, measured and escalated as **Q-037** rather than argued away — and it cannot go to 1 : 1 while each wordmark keeps the ground its artwork needs, because recolouring a mark is forbidden (BUILDER-BRIEF rule 16). So it is a brand decision, not a page decision, and it is correctly not the builder's to make.

Second visible residual inside the panels, also measured: at V12 and V14 the two `.panel-line`s set to different line counts, so the void above the CTA is 24 against 49.3 (V12) and 16 against 42.5 (V14). The CTA boxes still share a top and a bottom edge to 0.0px, which is the thing that matters, but the right panel has a visible air pocket at 1280×720 — one of the two most common desktop rows. Copy length, not layout, and equal at every other side-by-side row.

### 5. Figures against the register

Clean. Every digit-bearing string rendered on the page: `$10,400`, `(512)`, `270-9481`, `8th`, `9`, `90th`, `2026-09-10`. Plus "two hours", "Two to three hours", "four in-person weekends", "kindergarten". `check-claims.py`: OK, six rows, all Unverified/public (allowed in a mock). No multiplier, no SAT figure, no accreditation word, no Cognia, no ESA — in visible text, in `<head>`, in the JSON-LD (which carries no figure at all; note `d5ca8fb` caught a multiplier in another mock's structured data, and M32's is clean) and in **comments**: I grepped `index.html` and `styles.css` for `[0-9]x`, `3X`, `4x`, `velocity`, `SAT`, `1400`, `accredit` and the only hits were "90th percentile" and an unrelated `h1` rule. The withheld figures stay off.

The rationale goes further than the checker in two places that both critics should note as credit: it adds **CR-022** as a seventh dependency the checker cannot see (the "full amount" wording depends on a row whose figure is not on the page), and it lists **four non-numeric assertions with no claim-level row** — Alpha-network membership, US-wide availability, campus Guides in every session, the MAP progression claim — with owners, and narrows its own claim accordingly to "every *figure* maps to a row." That is the right form of the sentence.

### 6. Q-036: shipping zero against your own recommendation

The reversal itself is correct and well done: pass 1's argument for zero rested on the source spending its one saturated fill on one door, the extract refutes that, and the file **withdraws the argument rather than finding a new one for the same answer** (`RATIONALE.md`, Departures row 1). Both models now recommend the same placement — an accent underline on the compare anchor, `--color-accent-text` at 5.14:1 on cream, the one first-screen element belonging to both schools, costing no layout height.

Shipping zero anyway is defensible but it is the wrong default now that the two recommendations agree. Three reasons:

1. `CLAUDE.md`'s own unknowns rule is "add a `Q-nnn` … **proceed on the recommendation**, and say so." The file adds the Q and then does not proceed.
2. A first-screen colour decision is judged by eye. Nari will look at the mock, not at Q-036. Shipping zero means the state she evaluates is the one neither model recommends, and the recommended state exists only as a sentence.
3. It is one declaration, and the ratio is already measured.

The cheap fix that keeps everyone honest: ship the recommended state and capture the zero state as a second image in `qa/` (or the reverse), so Q-036 is decided from two pictures rather than from a paragraph. This is a judgement call, openly disclosed, with a register row carrying both readings — so it costs nothing below the bar, but it should not survive another pass.

---

## Scorecard

| Row | Score | Reason |
|---|---|---|
| Objective | 5 | One routing object and nothing competing: two marks, two labels, two names, two controls, then the compare anchor. Both door CTAs above the fold at **every** fold row — `qa/fold.md` V1–V17 PASS, V2 at 375×629 putting CTA 2 at 553 of a 605 limit with 52px spare, V14 at 623 of 696. I checked the tightest and the most common rows by eye: `qa/V2.jpg` and `qa/V14.jpg` both answer "in person or online, and where do I click" in one fixation. Nothing in passes 2 or 3 touched this row and nothing needed to. The honestly filed cost stands: below 700px tall the explaining sentence moves below the frame, so 13 of 19 rows show a label, a name and a button rather than the brief's complete panel (`qa/V15.jpg` beside `qa/V14.jpg`) — a second-order loss that does not touch the ten-second test |
| Composition | 4 | The lattice is a real idea and it holds — frame padding and gutter are one value, so the navy reads as a grid around two rectangles rather than a border around one, and a third campus needs no new value (DD-21). The height/width band split is a stated principle, the fold sums land within 1px at all four contract rows, and the reprise re-uses the shape rather than inventing two loose buttons. **The change the last card named was made and it worked**: the Georgetown plate's hairline went from `--color-border-strong` 3.31:1 to `--color-navy` 12.63:1 (`styles.css`, `.panel-mark`), navy objects are 2 : 2, and in `qa/V14.jpg` and `qa/V16.jpg` the left plate now reads as a drawn object instead of a ghost. Held at 4 by the residual of the same kind, measured by the harness the mock itself wrote: painted navy inside the plates is **1 : 17.1** and the right-hand navy block still takes the first fixation at V14, V16 and V17 — now correctly escalated as Q-037 rather than argued away, and not the builder's to settle. Second, smaller: the air pocket above the right CTA at V12 and V14 (24 against 49.3, 16 against 42.5, `--lines`). Third, and this is the pass-3 cost: the composition's distinguishing idea is now inherited from the estate rather than argued from a defect, which is a fair trade for a routing page but not a 5 |
| Typography | 4 | **The last card's named blocker is discharged.** CONTRACT §3's Literata obligation is now met with a number at the tightest band rather than by a quarter-pixel of luck: `--panel-head-gap` went to two space tokens and `.panel-name` clears its plate by **4.30px at V2 and 3.95px at V10**, against pass 1's 0.30px and −0.05px. The italic device remains the strongest move on the page and is properly sourced — slope taken, the estate's 2.38:1 orange left behind, keyed to the clause rather than the line because the sentence sets in 4 to 7 lines across the matrix — and pass 3 correctly **narrows** the provenance: the extract shows the source's panel headings breaking inside a colour span, so the italic M32 inherits is `CONTINUITY.md`'s browser measurement of the anywhere.gt.school h1, not the panel's. Three faces, three jobs; the only uppercase is Inconsolata; h1 line counts measured in-browser at all nineteen rows. **Not a 5 for one thing I can see in the captures: `styles.css:125` gates `text-wrap: balance` on the h1 to 768px and above.** `h2`, `.anchor-link` and `caption` all get it unconditionally; the h1 — the most important sentence on the page, on a phone-first programme — does not. `qa/V5.jpg` (414) and `qa/V6.jpg` (412) show the consequence: a two-step short tail, "campus or online / from anywhere." The change that lifts this row: drop the media query, or use `text-wrap: pretty` below 768 |
| Imagery | 4 | **Both of the last card's evidence gaps are closed.** The dark forced-colours palette is captured (`qa/forced-colors-dark.jpg`, `qa/focus-logo-navy-fc-dark.jpg`) and the source is now in the repository as a dated extract — which refuted the counts rather than confirming them, and the file says so. The absence of photography is argued, not defaulted: DD-42 (a), RF-25 and AD-11 apply, the substitute is not a grey box but each panel filled with its own school tint at **1.01:1 against each other** (I recomputed it), so the two panels differ in hue and not in weight, and the extract makes the substitution more pointed rather than less, because the source's images are `background-image` on the panels themselves. The photographed state is specified completely — file, `object-position`, the 720 CSS px DPR-2 ceiling, the caption slot — and correctly refuses a one-photograph state. Both wordmarks measured at 27.9px and 32px with **0% aspect skew on all ten instances**. The row cannot reach 5: there is no photography on the page to judge for weight or crop, `shared/img/` still holds no GT Anywhere classroom so even the specified state cannot be prototyped, and pass 3 removed the argument that made the tints a correction rather than what the prohibition leaves |
| Colour and surface | 4 | Nine stated ratios recomputed from `tokens-v2.css` and **every one matches to the second decimal**; zero raw hex in the stylesheet; every running paragraph at 16.10 or better. The palette usage map is explicit that navy is a surface on exactly two bounded objects and a fill on every control, which is DD-46 (a) and not a third surface. **Astra's specific finding is fixed at the root**: `RING_JS` now measures each ring against `groundBehind(el)` — the surface outside the ring — and reports both bands, rather than against the element's own retained fill, and both forced-colours palettes are captured and given their own ring explicitly, because the UA ring only applies to elements that did not opt out. I looked at all four focus and forced-colours captures: the ring is visible on the door CTA, the header lockup, the footer plate and the navy plate, in both palettes. Held at 4 by the same unmet condition as last time, and it is programme-wide rather than M32's: K3 §5g CS4 requires an APCA Lc beside every ratio and CS2 a per-node computed-pair sweep; neither is produced, no mock in `0_plan/mockups/` produces one, and it is escalated as **E-2** to Johnny. Second, smaller: the one accent is still unspent against both models' recommendation (test 6) |
| Motion | 5 | Zero `transition:`, zero `@keyframes`, zero `animation:` in `styles.css` — I grepped rather than trusting the self-check. The single move is `scroll-behavior: smooth` at `styles.css:20`, declared only inside `@media (prefers-reduced-motion: no-preference)` and forced to `auto` in the reduce block, which is CONTRACT §6's V10 exactly. The runner verifies every computed duration at 0s at V14, **elements and pseudo-elements**. V6 is fully specified — 300ms `--ease-out`, opacity plus an 8px rise, `IntersectionObserver` at `rootMargin: 0px 0px -15% 0px`, `unobserve` after first hit, hidden state scoped to a class the script adds — and correctly **not shipped**, because D-039 is undecided and a mock ships its no-JavaScript state. The checker's new split R10 (`6556edd`, keyframes only under a named proposal; scroll-driven animation disabled under reduced motion) is among the 38 rules this mock now passes |
| Mission and exclusivity | 5 | Exclusivity is selectivity, everywhere: "at or above the 90th percentile" in both table cells, the proof strip and the steps line; tuition appears exactly once, in a table cell, with the TEFA module immediately below it — access, not affluence. No wealth cue, no stock photography, no placeholder copy, no countdown. Fact density under the frame is real: a nine-row comparison with values repeated where the schools genuinely agree (DD-43), the sources line twice with a checked date, four proof facts, four steps. And the mission argument is made **on the page**: this is the estate's own routing component rebuilt with the accreditation claim, the ESA claim and the 3X multiple removed — and pass 3 strengthens the evidence for it, because the offending paragraph is now quoted from a checked-in extract rather than reconstructed from register text. `check-claims.py` and my own grep of visible text, head, JSON-LD and comments agree: nothing withheld reaches the page |
| Craft | 4 | **Every specific remedy the last card demanded was delivered, and I verified each one mechanically rather than reading about it.** The V18 cell is restored to the runner's own words and diffs identical; the run is cited at the timestamp `qa/fold.md` actually carries; `markW` is printed in its own column beside the verdict; the reprise pair is measured, which found a 34.3px inequality at V18 that neither critic saw, and my rerun returns 0.0px; the footer links have `min-inline-size` (`styles.css:305–306`) and the runner's target predicate now tests both dimensions; `.logo-navy`'s ring and the dark forced-colours palette are captured. All three parity tables and both fold tables diff **byte-identical** to live reruns, and nine contrast figures, four byte counts and six grep counts all reproduce. The Correction section is the most honest artefact this programme has produced, and `qa/M32-source-counts.py` is kept and re-headed rather than deleted — I ran it; it prints its wrong number and then refutes it. What holds the row at 4 is a sweep that stopped short: **`styles.css:4` still names the refuted imbalance as one of three things M32 corrects**; `RATIONALE.md:639` still uses "makes one door louder than the other" as a live justification; `:54` and `:628` carry the old framing and the old provenance; `:419` says seventeen properties where the harness measures eighteen; and the block headed "Checker output, **verbatim**" pastes `37 pass, 0 fail` where the current checker prints 38. None of these flatters the evidence — the stale paste understates it — but a *verbatim* block that does not reproduce is the category the last card said had to be clean, and item one is in the shipped stylesheet, which a future builder will open on its own |
| Continuity | 4 | **The last card's named blocker is discharged and the check went against the mock, which is the outcome that earns the most trust.** `0_plan/kb/exemplars/gt-panels/` is a dated, reproducible extract; I ran `count.py` and got 1.26 : 1, and the file rewrote its own warrant around it. What is genuinely inherited is now established rather than asserted: the rounded navy frame inset from the page, two equal panels with a gutter, both stacking at the small breakpoint, both marks at one height (`.split-cta_logo-wrap { height: 3rem }`), and every declaration in the two panels' own rules identical but for the photograph. The token-level continuity holds against `CONTINUITY.md` — ground `rgb(252,244,239)`, text `rgb(0,17,23)`, Inter Tight, Literata — and the declared differences all carry reasons. Held at 4 by two things the extract itself created. First, the inheritance is now **partial and known to be partial**: the tints, the square corner and the always-visible prose are M32's, not the estate's, and the italic is not established in the panel at all. Second, and unchanged: `gt.school` has no rendered mirror in this repository, so the Georgetown handoff is still unverified on pixels — the extract is markup and CSS text, not a rendering, and this build may not open production. The change that lifts this row is not the builder's to make: a rendered capture of `gt.school/about-us` with provenance, so the deepest continuity claim can be scored by eye |

---

## Unresolved

Stated as unresolved, not summarised away. Two of these were unresolved on the last card and remain so.

| # | Item | Who | Status |
|---|---|---|---|
| 1 | **Q-036**, the accent. Both models now recommend spending it on the compare anchor; the page ships zero. Nari will judge a colour decision from a picture, and the picture shows the unrecommended state | Nari, Johnny on the token | Open. My ask: ship the recommended state and capture the zero state beside it |
| 2 | **Q-037**, a navy-bounded plate beside a navy-filled one. 1 : 17.1 painted, 1 : 1.41 across the panel, unreachable at 1 : 1 without a light-ground GT Anywhere wordmark | Nari, with Holly | Open. Correctly not the builder's call |
| 3 | **E-2**, APCA. No mock in the programme reports an Lc figure, yet K3 §5g CS4 makes it a condition of a 5 on Colour and surface and CS2 asks for a per-node sweep | Johnny | Open, programme-wide. Carried over from the last card |
| 4 | The correction is not swept: `styles.css:4`, `RATIONALE.md:54`, `:419`, `:628`, `:639`, and the stale "verbatim" checker block at `:741` | Builder | Open. Six one-line edits; none changes the page |
| 5 | `styles.css:125` gates `text-wrap: balance` on the h1 to ≥768, so the h1's rag is unmanaged at 402–414px (`qa/V5.jpg`, `qa/V6.jpg`) | Builder | New this round |
| 6 | `gt.school` has no rendered mirror, so the Georgetown continuity handoff cannot be scored on pixels. The extract closes the *counting* question, not the *recognition* question | Johnny / Nari | Open, narrowed |
| 7 | Below 700px tall — including a 1366×768 laptop — 13 of 19 matrix rows do not show the brief's complete panel. Contract-compliant and honestly filed | Nari | Open. Show her `qa/V15.jpg` beside `qa/V14.jpg` before G1 |

---

5/4/4/4/4/5/5/4/4

Objective/Composition/Typography/Imagery/Colour/Motion/Mission/Craft/Continuity

GATE
