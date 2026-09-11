# Design critic, Fable, M22 "Hard Cut", round two, 2026-09-11

Round one's card is in git at `97ed718^`; this file replaces it. Round one: Fable **Iterate** (Typography 3,
Imagery 3, Craft 3), Astra **Pass** on all nine.

Inputs read, in order: `ensemble/prompts/DESIGN-CRITIC.md`; my own round-one card and `critic-astra-M22.md`;
`kb/briefs/M22.md` and `kb/briefs/CONTRACT.md` v2.1 including its four section-3 rows;
`mockups/shared/CONTINUITY.md`; then `index.html`, `styles.css`, `RATIONALE.md` and `qa/fold.md`; then
**every capture in `qa/`** — V1 to V19, `V2-full`, `V12-full`, `V14-full`, `V2-rootx2`, the four focus captures,
`forced-colors`, and both `estate-side-by-side-*`. Also `~/projects/libraries/design/library-data.js` for
`insp-cloudstudio`'s four measured pastels and `examples/kilnworks.html:17` and `:102` for the 19ch measure and
the incidental band. No production host was opened.

**My probe** is a critic run on a server I started (ephemeral port on `127.0.0.1`, Playwright from the npx cache,
Chrome for Testing 151.0.7922.34), every script written outside the repository in the session scratchpad. It
drives the runner's **own** `FOLD_JS`, lifted verbatim from `0_plan/tools/shots.mjs`, so the continuation verdicts
are the runner's rule and not a rule of mine; it reproduces `qa/fold.md`'s nineteen rows — bottoms, `cut` and
`cutBy` strings — **exactly**. **My experiments** inject CSS at load time, or the label into the DOM, to
re-create every variant the file argues from: the tracking removed, the compact-air query restored, `wrap` and
`pretty`, `-0.06em`, the chapter-1 label, and the `min-height` removed. Colour figures are computed from the
token values with my own sRGB/CIE-Lab implementation. All three checkers re-run read-only. Nothing in the
repository was changed except this file.

**Capture freshness.** `index.html` 12:02, `styles.css` 15:53, `RATIONALE.md` 15:54, every `qa/*.jpg` and
`qa/fold.md` 15:56. The captures are newer than the source, so nothing here is scored on a stale image. The run
`qa/fold.md` now records is `## Result: all required rows pass`, and the rationale pastes that same run.

| Rubric row | Score 1 to 5 | Evidence you looked at (screenshot filename, crop, measurement) | What would make it a 5 |
|---|---|---|---|
| Objective (L1) | **5** | Holds, and improved. All sixteen fold rows PASS (`qa/fold.md`); my probe reproduces every bottom and every continuation string exactly. The tracking bought real slack where it was thinnest, and I measured the withdrawal of the compact-air query with it, since the two are one change: **V2 goes to 570 of 605, 35 to spare, with the first door line cut by the edge at 620 to 640**. Restore the compact query and the line finishes at **624 of 629 — 5px above the edge**, which is round one's state and the weaker signal; delete the tracking instead and V2 sits at **601 of 605** with `cut=false`, "no content is visible below the last CTA at all". Shipped, it is the best of the three. V4 goes from 604 to 541; V10 from 304 to **276 of 318**, the sentence in two lines instead of three (`qa/V10.jpg`). The doubled cue set is intact at every row: "IN PERSON"/"ONLINE" in tracked uppercase over the school name in Literata over one navy control each, identical in width, fill and corner (`V2.jpg`, `V9.jpg`, `V16.jpg`). **The cheat is still not taken:** the runner accepts a surface change at 1.2:1 as continuation (`shots.mjs`, `VISIBLE_EDGE`); this page's two light cuts measure 1.10 and 1.01, so neither can trigger it, and no Next-band row cites a surface change — verified at all nineteen rows on my own run of the runner's code. Ten-second test at 390 reads cleanly (`V3.jpg`) | Holds. One row got worse and the file did not notice: at **V6 (412 by 839)** the compare sentence now finishes at **801 of 839, 38px clear**, and the only ink inside the reserved band is the **3px decorative accent mark at 822 to 825** — the tracking pulled the block up 32px and the mark took over the job. The runner counts a painted rule as ink, so it passes; but the file's own position is that the accent marks are "`aria-hidden` decoration carrying no meaning", so at one row the page is signalling continuation with something it says carries no meaning. Required fix 2 |
| Composition | **5** | **The one defect I named is fixed to the pixel.** `styles.css:122` no longer centres the label; `:125` zeroes the opening bracket's 0.7em lead so the "(" sits *on* the edge. My probe measures label ink-left against heading ink-left at all nineteen rows: **24 / 24 at every phone row, 32 / 32 from 768, 272 / 272 at 1920** — identical everywhere, where round one measured the label's centre 688px right of its heading at 1920. Read it in `V17.jpg` and `V16.jpg`: "( COMPARE )" now opens its chapter on the same left edge as the h1, the provenance, both door labels, the compare sentence, the accent mark and the h2 under it. The page argues from one left edge and now keeps it. The departure from the brief's "centred" is **escalated, not settled**, with the captures attached, which is the correct handling of a brief instruction. The cut itself is verified by construction, not by eye: my probe reads all six sections at 834, 1280 and 1440 with `border-top: 0px none`, `box-shadow: none`, `background-image: none`, grounds stepping `rgb(252,244,239) → rgb(248,232,222) → rgb(228,238,242) → rgb(0,42,58) → rgb(252,244,239) → rgb(0,42,58)` at y 820 / 2235 / 2847 / 3765 / 4097 at 1440 | Holds. Round one I read V12's hold as "vertical centring borrowed without horizontal centring". Looking again at `V12.jpg` with the numbers (261 above, 245 below, symmetric at 237/237 of free height; the block occupies 665 of 834, so 76 per cent of the width) I withdraw that: it reads as the held editorial frame the source language actually specifies, not as an unfilled page. See the ruling on the tablet hold below. One observation, not a deduction: at V13, V14, V15 and V19 the chapter is content-sized, so the 3px accent mark ends **8px above the hard cut** (`V14.jpg`, bottom left) — the one place on the page where a drawn mark and the cut compete. At V16 and V17 the hold opens 63 to 93px and it is clean |
| Typography | **4** (was 3) | **The fix landed and is measured rather than asserted.** `styles.css:142` and `:265`. My probe, per-line widths, before and after on this build: at **402, 412, 414, 430** the h1 goes from six lines with a **52 to 58 per cent** interior notch to **five lines at 78 to 79** — `V7.jpg` is the clearest, a clean five-line block where round one had a 184px line under a 351px one. At **393** seven lines become five. At **750 landscape**, three lines at 92 per cent become two at **96** (`V10.jpg`). The instrument is the estate's own: `CONTINUITY.md` measures anywhere.gt.school's h1 at **-1.6px on 36px Literata, -0.0444em**, and `-0.045em` lands 1.3 per cent inside it, so one declaration closes the rag and the Continuity tracking row together. Both alternatives are measured and declined, and both measurements reproduce on my probe: `-0.06em` moves only 390; `wrap` and `pretty` are **byte-identical to each other** at every phone row (same line arrays, same block heights, same CTA bottoms), so `pretty` genuinely replaces the balancing rather than doing nothing. The italic condition re-checked after every wrap moved: **none of the five italic words sits at a line end at any of the nineteen rows** | **What keeps it off 5 is the three narrowest rows, where the single deepest notch got deeper, not shallower.** At 360, 375 and 390 the rag is `268, 239, 239, 315, 166, 300` — worst interior **53 per cent**, against 58 before. The file records that as a limit and stops. It is better than the number says, and the file misses its own best argument: the 166px line is "Texas campus", so the notch now falls exactly on the sentence's hinge, with "or online from anywhere." whole on the last line (`V2.jpg`, `V3.jpg`) — a semantic turn rather than a mid-phrase orphan. Make that argument, because it is the same fact the file uses to *refuse* `pretty` (which breaks at "campus or online / from anywhere.", measured: 76 per cent at 360, 62 to 63 at 375 and 390, 74 to 75 at 414 and 430, zero fold cost). Right now one observation is doing duty on both sides of the trade without the file noticing |
| Imagery | **5** (was 3) | **The forced-colours defect is fixed, and I verified it myself in both palettes rather than reading the runner.** My render at `forced-colors: active`: in **light** and in **dark** alike, the GT Anywhere mark is protected (`protectedBy: the image itself`, ground retained `rgb(0, 42, 58)`) so "anywhere" survives, and the GT School plate keeps `rgb(252, 244, 239)` so its navy "GT" survives on a black Canvas. Captured: both marks fully legible on their own panels in both schemes. The fix is also **class-free** — `styles.css:285` targets `.footer-logo:not(.plate)` — so it cannot go dead the way round one's `.footer-logo--anywhere` did against markup that never carried the class. The second defect that fix introduced is closed too and I measured the computed values: `.footer-logo.plate:focus-visible` resolves to `rgb(0, 42, 58)` and `.footer-logo:not(.plate):focus-visible` to `rgb(251, 251, 251)`, each against the ground it actually keeps. Marks measured at 27px and 32px, **0 per cent aspect skew on all six instances**. No stock photograph and no placeholder copy in any of the 30 captures; the photographed state designed down to the file, crop, `object-position`, 720px cap and caption without being shipped | Holds. One finding raised at **programme level rather than against M22**: the header lockup has no protected ground, so in the **dark** forced palette its navy "GT" sits on black at **1.39:1** while the icon and "school" stay orange — I captured it. The runner cannot see it: `FC_MARKS_JS` filters on `/anywhere/i`. M24 cleared the gate with the same condition (`M24/styles.css:248` protects only the footer anywhere mark), so this belongs in `shots.mjs` and a sweep, not in an M22 iteration. Required fix 6 |
| Colour and surface | **5** (was 4; brief expects 5) | **The finding is now argued, and every figure reproduces on my own implementation.** Boundaries in CIE Lab: **5.41 / 11.75 / 79.09 / 83.71 / 83.71**, with boundary 2 at ΔL\* 0.48 and ΔC\*ab 11.74 — almost pure hue. The scale it is measured against reproduces too: `insp-cloudstudio`'s four pastels swap at **39.14, 39.93, 17.50, 61.29** (WCAG 1.06, 1.12, 1.22, 1.15 — every one a "hue-only" cut by a luminance test), and `kilnworks.html:102`'s incidental band `#FAF5EC → #FCF8F1` is **1.49**. The reorder that would buy bg → tint at **8.41** is computed, considered and refused on the objective with the trade left on the record. The file says plainly that the page opens on its weakest note and that the constraint is GT's palette — one dark value and three light ones inside 1.10 of each other — rather than the mock's. Every contrast figure re-reproduces: 17.69 / 16.10 / 16.30, 14.58, 7.81, 6.25 / 5.69 / 5.76, 8.20 / 7.46 / 7.56, 18.57, 2.38 / 2.19, 1.42. `grep -oE '#[0-9a-fA-F]{3,8}' styles.css` returns **0**. The forced-colours boundary substitute works in both palettes — I rendered it: a 1px `CanvasText` edge, black in light and white in dark, at all five boundaries | Holds, with one sentence struck. The second leg of the argument is **false**: `RATIONALE.md:196` says boundary 1 "is the one boundary that carries a bracketed label", and "the announcement is spent on the weakest edge". Boundaries 2, 3 and 4 each carry a labelled chapter directly beneath them as well — only boundary 5, families → footer, does not, and a footer should not be announced as a page-turn. So the label is not a scarce resource allocated to the soft edge; every chapter boundary has one. What actually carries boundary 1 is the first leg alone, which *is* verified: at all nineteen rows the ink at the edge is a door line, the compare sentence or the next chapter's opener, never a ground, against a runner that would have allowed a ground. Required fix 1. (My round-one wording — "carried by the chapter label rather than by the ground" — invited the over-claim; the correction is mine as much as the engineer's) |
| Motion | **5** | Still, re-verified rather than read. `grep -n "transition\|animation\|@keyframes" styles.css` returns exactly two lines: the rule stated as a comment (`:10`) and the reduced-motion reset (`:275`). No `@keyframes`, no `transition` property, no `animation` shorthand; the only height unit is `100svh` inside the `@supports` guard at `:90`, and `vh` appears nowhere but in the comment that forbids it (`:89`). The runner's reduced-motion pass computes every duration at 0s on elements and both pseudo-element types. Native anchor scroll fenced inside `prefers-reduced-motion: no-preference` (`:20`). The no-crossfade rule is a stylesheet comment and not a token, with the right reason given (`:7–11`) | Holds |
| Mission (L3) and exclusivity (L4) | **5** | Exclusivity is selectivity throughout: the 90th-percentile bar in the table's Admissions row, the proof strip and the steps line (`V14-full.jpg`); tuition one ordinary table row where "Tuition on request. Ask admissions." carries the same weight as "$10,400 a year". No outcome figure, no accreditation claim, no crest, seal, countdown, scarcity phrase or wealth cue in any of the 30 captures. `check-claims.py` re-run by me reproduces the pasted block verbatim: six figures, six register rows, all "Unverified, public". The provenance line appears exactly once (`index.html:50`). The two doors are peers on the first screen at every row — C20 is inverted, not merely avoided | Holds |
| Craft | **4** (was 3) | **Both live defects are fixed and I can see them.** The header wrap: `styles.css:67` adds `margin-inline-start: auto`, and my probe puts the utility nav's right edge at **336 of 360** and **296 of 320** — flush with the content edge on the wrapped second row, where round one had it at flex-start under the mark (`V1.jpg`, `V18.jpg`). The forced-colours fix is live, above. The landscape step-down is now a Departures row. Astra's two Craft items landed and I verified both: the table's school columns are declared 18/41/41 (`:202`) and measure **exactly equal at every row** — 289/289 at 768, 499/499 at 1280, 564/564 at 1440 — so the three repeated rows now wrap identically in both columns (`V14-full.jpg`, `V12-full.jpg`); and `qa/V12-full.jpg` is filed, so all five boundaries are documented at three widths. Three checkers clean, re-run by me: `check-mocks` 37 pass 0 fail, `check-claims` OK, `check-links` 661/661. One `<script>`, zero `<form>`, no console error, no horizontal scroll at 320 or at 375 with a doubled root (`V2-rootx2.jpg`), every target at least 44px, focus correct on all four captures | **Three statements still do not match the build, in the round whose purpose was to make them match.** (a) `styles.css:94–95` still reads "it is now **184 above and 200 below**" — the exact pair `RATIONALE.md:467` strikes as impossible. The rationale was corrected and the stylesheet comment beside the declaration was not, so the repository now contradicts itself on the figure the fix was about. (b) `RATIONALE.md:460` gives the label-injected V2 as "**561 of 605**". I injected the label with a `--space-3` gap and measure **593 of 605**; 561 is *below* the label-free 570, and no addition can lower a CTA bottom. The conclusion is unaffected — V4 564, V10 300 and V15 **624 of 624 then failing continuation** all reproduce exactly — but the figure cannot be a measurement. (c) `RATIONALE.md:347` files V6 under "the last line finishes inside the reserve … V6 (14)". Measured, V6's last *line* ends 38px clear and the 14px is the decorative accent mark |
| Continuity (L2) | **5** (was 4) | **Both things I asked for landed.** The tracking row is closed with the same declaration that fixes the rag, and the file is honest about the half it closes: `-0.045em` below 768 against the estate's `-0.0444em`, "normal from 768 up", at the widths that carry two thirds of sessions. And the rendered pair is filed — `qa/estate-side-by-side-390.jpg` and `-1440.jpg`, both labelled with source and viewport, unretouched, composed at native size from the repository's own mirror captures. I read both. They carry what the property table cannot: the same cream, the same Literata headline changing voice mid-sentence, the same uppercase Inconsolata on the single control, the same navy action — and the two declared divergences just as plain, the estate's grained cream with wave linework against flat cream, and a composited cut-out of an identifiable child against a typographic first screen. The colour half of the estate's italic is correctly refused (K12 F88, 2.38:1). Ground, text colour, both faces and both mark files match. The Georgetown handoff is correctly not claimed | Holds. The pair also shows something the table understates and that is nobody's defect: the estate's headline is a short slogan at 58.5px weight 300, M22's is a fixed 132-character sentence at 46px weight 400, so the two first screens have different densities however close the tokens are. Worth a sentence in the file so a reader of the pair is not surprised by it |

| Brief compliance | Departures from the brief, with the rationale's stated reason and whether you accept it | Avoid concepts present (CONCEPTS.md id) | Facts, ids, numbers or paths that do not exist where claimed | Verdict |
|---|---|---|---|---|
| Every brief section is built. Chapter order and grounds exactly as briefed, verified by probe at three widths. Copy checked slot by slot against `copy.md` sections 0 to 8; the four labels come from the allowed-headings table, which the file declares. Both acceptance measurements re-run by me and **both hold**: every chapter boundary is a hard edge (zero borders, shadows and background-images on all six sections at 834, 1280 and 1440), and no two accent uses are co-visible at any scroll position at any row — my probe reproduces the rationale's nineteen-row table **to the pixel**, smallest gap **1,461px at V13**, tightest margin **286px at V12**. The brief expects Objective and Colour and surface at 5; both are 5 | **Fifteen departures, all declared; fourteen accepted as argued and one escalated, correctly.** Accepted: the 12-column grid from 1024 (measured); the secondary CTAs inside chapter 4; the labels' source; the compare sentence closing one step on phone widths (re-measured, and honestly downgraded from a fold fix to a rhythm decision); the `min-height` and vertical centring (see the ruling below — kept, reason wrong); the 40 by 3px accent; the forced-colours edge and button border; the landscape step-down; the equal table columns; the withdrawn compact-air query; chapter 1's missing label (see the ruling); no accent in chapter 4 (geometry, and the general proof is right — at 1440 a chapter-4 mark would have to sit at or below 2976 and at or above 3246 at once); the tracking; the 19ch measurement, which now carries every laptop row including **V15 at 754 of 624**, the worst break, and which I reproduce exactly. **Escalated, correctly:** the left-aligned chapter label, with `V17.jpg` and `V16.jpg` attached — a brief instruction is not the engineer's to settle | **None.** C05 answered (a sources line under both fact blocks); C12, C13, C34, C36, C40 absent; C18 and C43 absent — the same scene reflowed, not swapped; C20 inverted; C29 not reached; C33 absent, nothing animates; C35 absent, the dominant headline *is* the h1. C22 in its good form: six CTA labels, every one naming its destination | **Three, all corrections rather than inventions, all listed in Craft:** `styles.css:94` "184 above and 200 below"; `RATIONALE.md:460` "V2 561 of 605"; `RATIONALE.md:347` V6's 14px described as a line. Plus one false claim in an argument rather than a table: `RATIONALE.md:196`, boundary 1 as "the one boundary that carries a bracketed label" | **Pass.** Objective 5, Composition 5, Typography 4, Imagery 5, Colour and surface 5, Motion 5, Mission and exclusivity 5, Craft 4, Continuity 5 |

## Required fixes, in order of impact

**None of these blocks the gate.** All four of the direction's live defects are fixed and verified; what follows
is documentation that has to match the build before this file is a source anyone can trust.

1. **Strike the false leg of the opening-cut argument (`RATIONALE.md:196–199`).** "Boundary 1 is the one boundary
   that carries a bracketed label … the announcement is spent on the weakest edge" is not true: chapters 2, 3 and
   4 each sit under a boundary and each carries a label, so four of the five boundaries are announced. Only
   families → footer is not. Delete the sentence and let the first leg carry it, which is the one that is
   verified — at all nineteen rows the ink at the edge is text a parent reads, never a ground, against a runner
   that would have accepted a ground at 1.2:1. The chapter-1 decision stands on the page-turn reason alone and
   does not need this one.
2. **Correct V6 in the Next-band table (`RATIONALE.md:347`), and name the right weakest row.** Measured: V6's
   last line ("Not sure which is right for your family? Compare the two.") ends at **801 of 839, 38px clear**,
   and the ink inside the reserved band is the **3px accent mark at 822 to 825**. So V6, not V7, is the weakest
   continuation row on the page, and what continues it is a mark the file elsewhere says carries no meaning. The
   tracking caused it by pulling the block up 32px. Either say so in the table, or close the gap at that row.
3. **Correct `styles.css:94–95`.** It still says the V12 air "is now 184 above and 200 below" — the pair
   `RATIONALE.md:467` strikes as impossible. Measured by me: the chapter runs 56 to 1114, its content 317 to 869,
   so **261 above and 245 below, 237 and 237 of free height**. A file whose method is measurement cannot leave
   the corrected figure in one document and the wrong one in the declaration it explains.
4. **Correct or strike "V2 561 of 605" (`RATIONALE.md:460`).** I measure **593 of 605** with the label injected
   at a `--space-3` gap, and 561 is below the label-free 570. Everything else in that row reproduces exactly, so
   this is one figure, not the argument.
5. **Replace the stated reason for keeping the tablet hold (`RATIONALE.md:467` and the "not done" row at `:672`).**
   The continuation reason is false — see the ruling below. The compositional reason is true and is the one to
   stand on.
6. **Raise the header lockup under dark forced colours at programme level, not against M22.** The navy "GT" sits
   on black at 1.39:1 while the icon and "school" stay orange. `shots.mjs`'s `FC_MARKS_JS` filters on
   `/anywhere/i` and cannot see it, and M24 cleared the gate with the same condition. It wants a runner check and
   one sweep across all seventeen mocks, the way the anywhere mark was handled.
7. **Optional, Typography.** Either make the hinge argument for the 53 per cent notch at 360 to 390 explicitly —
   the short line is "Texas campus", so the rag now breaks where the sentence turns — or reopen `pretty`, which
   measures 76 / 62 / 63 per cent at those rows at zero fold cost. Do not leave the notch recorded as a bare
   limit when the file already knows why it is the better of the two errors.

## Did round one's required fixes land?

| # | Round-one required fix | Landed? | What I measured |
|---|---|---|---|
| 1 | Ship `letter-spacing: -0.045em` below 768 and at V10; record what it does not fix | **Landed** | `styles.css:142`, `:265`. 393 to 430 go to five lines at 78 to 79 per cent; V10 to two lines at 96; 360 to 390 to six lines. Frees 31px at V2, 63 at V4, 27 at V10 — all reproduce. Both alternatives measured and declined. The residual 53 per cent is recorded. Typography 3 → 4 |
| 2 | Land the forced-colours mark fix, which was a dead selector; protect the plate too; paste a passing run | **Landed, and better than asked** | Done class-free at `styles.css:285–286` (`:not(.plate)`), so no markup change and nothing to go stale. I rendered both palettes: "anywhere" survives in light and dark; the plate keeps its light ground so navy "GT" survives on black; both focus rings resolve against the ground each mark keeps. `qa/fold.md` now reads `## Result: all required rows pass`. Imagery 3 → 5 |
| 3 | Attach the chapter label to its chapter, and escalate rather than settle it | **Landed** | Label ink-left equals heading ink-left at **all nineteen rows** (24 / 32 / 272). Escalated in Departures with `V17.jpg` and `V16.jpg`. Composition 4 → 5 |
| 4 | Correct the six figures | **Partly landed — four of six clean, two still wrong, one new** | Corrected and reconciled to my probe: the V12 air (261/245 = 237/237), the struck "+ centring 8" at V14, V10 as the binding row at 14px, V15 added to the 19ch table at 754 of 624, the current runner paste, the row-by-row Next-band table. Still wrong: `styles.css:94` (fix 3 above); the V6 row (fix 2). New: "V2 561 of 605" (fix 4) |
| 5 | Right-align the wrapped utility row at 360 and 320 | **Landed** | `margin-inline-start: auto`; nav right edge at 336 of 360 and 296 of 320 (`V1.jpg`, `V18.jpg`) |
| 6 | Declare the V10 h1 step-down in Departures | **Landed** | `RATIONALE.md`, Departures, with the reason and the figures |
| 7 | Say something about the opening cut | **Landed, and it is the round's best work — with one false sentence** | Argued in ΔE against the source language's own scale, every figure reproduced by me; the reorder computed at 8.41 and refused on the objective with the trade recorded. One leg is false (fix 1). Colour and surface 4 → 5 |
| 8 | File the two estate side-by-side composites | **Landed** | Both filed, labelled, unretouched, native size; I read both. Continuity 4 → 5 |
| — | Astra's Craft finding (unequal school columns) | **Landed** | 18/41/41; measured exactly equal at every row from 768 |
| — | Astra's evidence findings (third-width capture, all-row accent audit) | **Landed** | `qa/V12-full.jpg` filed; all nineteen accent rows listed and reproduced by me to the pixel |

## The two rulings I was asked for

**1. Chapter one's label: the structural reason carries, and it is stronger without the arithmetic than with it.**

The engineer did the right thing twice: it struck its own arithmetic rather than defend it, and then declined the
change anyway. I reproduced the injection — label in `.chapter-choice .wrap`, gap tightened to `--space-3` — and
its finding is right: **fifteen of the sixteen fold rows clear the limit, and V15 lands on exactly 624 of 624 and
then fails the continuation test**, `cut=false`, nothing visible in the reserved band. (Its V2 figure is wrong;
the binding row is not.) So affordability is no longer the question, and the file no longer pretends it is.

The structural reason carries, for three reasons the file gives and one it does not. A label marks a page *turn*,
and the first screen is the open rather than a turn — a reader meets "( COMPARE )" at the first boundary they
actually cross, which is where the device belongs. The brief's own first-screen composition list — header, h1,
provenance, the two doors, the compare anchor — carries no label, so the brief is not internally consistent on
this point and the composition list is the more specific instruction. Chapter 1 already opens with the masthead,
which no other chapter does, so it is the one chapter that is announced by something. And the fourth, which the
file should add: the source's label *is* a stage marker in a self-navigating tour, and the thing it marks in
`tideline.html` is arrival at a new stage — the first stage there is announced because the page opens mid-tour;
this page opens at the door. A label over the umbrella sentence would tell a parent that GT School is a chapter
of something, which is exactly the affiliation-prominence question MD-17 settles elsewhere and not on the first
screen.

What the file must drop is the claim that the label is spent on the weakest edge (required fix 1). It is not
spent; four of the five boundaries carry one. The decision is right and its best reason is the simplest one.

**2. The tablet hold: keep it — I am right, Astra is right about the fold, and the engineer's reason is wrong.**

I removed the `min-height` entirely and re-ran the runner's own continuation test at all nineteen rows. **Every
one of V11 to V17 still passes**, and passes on text: V11 "text cut by the edge, 1012 to 1032", V12 "1188 to
1208", V16 "884 to 919", V17 "946 to 962", V13 reaching 754 of 768 inside the reserve. So the engineer's stated
reason — "it is what lands the next chapter's opener inside the contract's reserve at V11 to V17 rather than
wherever the content happens to end" — **is not true as a measurement**. Astra is right that the fold and
continuation checks survive the cap. That reason has to go (required fix 5).

The hold still stays, on the ground the engineer gives second and should give first. Measured with the hold
removed, the 834 by 1194 first screen carries the choice **plus** the compare label, its heading, the table
caption, the column heads and **four of the nine table rows**, down to "Mornings from 9 to noon…" cut at the
edge; at 768 it carries two rows; at 1440 the whole compare heading and caption sit above the fold. That is a
wall, and this direction exists to refuse the wall: "a parent moves through it the way a reader turns a page
rather than the way a visitor scrolls a wall … everything after it is one idea at a time" (brief, Thesis). The
hold is what makes chapter 1 a chapter. Capping it would buy back air the reader does not need — both CTAs sit
at 777 of a 1170 limit at V12, 393px of slack, so the ten-second test is nowhere near pressured — at the cost of
the one thing the direction is.

And the air is not what my own round-one card and Astra's both implied. It is **symmetric**: 261 above and 245
below, 237/237 once the chapter's own 24/8 padding comes out, around a block that occupies 665 of 834 — 76 per
cent of the width. Looking at `V12.jpg` rather than at the number, it reads as a held editorial title page with a
hard cut under it, which is `kilnworks.html`'s centred scene transposed. Astra's word "overextends" is a fair
perception and the right thing to have flagged; the fix it proposes would trade the thesis for the perception.

The engineer's own instinct — "if Johnny or Nari reads the tablet hold as dead space rather than as the
direction, it is a brief question" — is correct, and that is where it should sit: a one-line question at G1 with
`V12.jpg` attached, not a code change taken on a critic's note. Both critics saw the same thing; we disagree
about whether it is the device or a defect, and the person who owns the direction should break the tie.

## Verdict

**Pass.** Objective 5, Composition 5, Typography **4**, Imagery 5, Colour and surface 5, Motion 5, Mission and
exclusivity 5, Craft **4**, Continuity 5 — all nine rows at or above 4, and the brief's two expected fives,
Objective and Colour and surface, are both met. Every defect I named is fixed and verified on my own run of the
runner's own code: the phone rag is gone at five rows and honestly bounded at three, the brand mark survives
forced colours in both palettes behind a selector that cannot go dead, the chapter label opens its chapter on the
page's one left edge, the wrapped header holds its right edge, and the opening cut is argued in the right
instrument against the source language's own scale instead of recorded as a ratio. The engineer struck its own
arithmetic rather than defend it and declined the change anyway on the reason that survives without it, which is
the right way round. What remains is three figures and one sentence that do not match the build, in a file whose
whole method is that they were measured — enough to hold Typography and Craft at 4, not enough to hold the
direction at the gate.
