# Design critic, Fable, M22 "Hard Cut", round one, 2026-09-11

Independent: `critic-astra-M22.md` was not opened, and no other critic's card for this mock was read.

Inputs read, in order: `ensemble/prompts/DESIGN-CRITIC.md`; `kb/briefs/M22.md` and `kb/briefs/CONTRACT.md` v2.1
including its four new section-3 rows; `mockups/shared/CONTINUITY.md`; the two Design Library entries
`insp-outship` and `insp-cloudstudio` in `~/projects/libraries/design/library-data.js:1470` and `:1500`, and
both exemplar pages in full (`examples/kilnworks.html`, `examples/tideline.html`); then `index.html`,
`styles.css`, `RATIONALE.md` and `qa/fold.md`; then **every capture in `qa/`** — V1 to V19, `V2-full`,
`V14-full`, `V2-rootx2`, `focus-cta`, `focus-plate`, `focus-footer`, `focus-footer-plate`, `forced-colors`.
For the standard, `critic-fable-M21.md`. For the Anywhere handoff,
`kb/exemplars/estate/anywhere-home-1440-firstscreen.jpg` (the repository's own mirror capture). No production
host was opened.

**My probe** is a critic run of the built page on a server I started (ephemeral port on `127.0.0.1`, Playwright
from the npx cache, cached Chromium 1187), with every script written outside the repository in the session
scratchpad. It measures all nineteen rows and reproduces the runner's fold bottoms exactly at every row, so the
two engines agree. **My experiments** inject CSS at load time to re-create the variants the rationale argues
from. Colour figures are computed from the token values with my own sRGB/CIE-Lab implementation. Both checkers
and `check-links.py` were re-run read-only. Nothing in the repository was changed except this file.

**Capture freshness, and one thing that moved under me.** `index.html` 12:02, `styles.css` 12:05,
`RATIONALE.md` 12:12, `0_plan/tools/shots.mjs` **14:43**, every `qa/*.jpg` and `qa/fold.md` **14:45–14:46**.
The runner gained a forced-colours check after this rationale was written, and the re-run it produced now
reports `## Result: 2 failure(s)` where the rationale pastes `## Result: all required rows pass`. Separately,
during my review a sweep appended a forced-colours fix to `styles.css:253–261`. I score the files as they
stand and say plainly below which part of that fix is live and which is dead.

| Rubric row | Score 1 to 5 | Evidence you looked at (screenshot filename, crop, measurement) | What would make it a 5 |
|---|---|---|---|
| Objective (L1) | **5** | Measured, not asserted, and the one place this direction could have cheated it does not. All sixteen fold rows PASS (`qa/fold.md`), both door CTAs above the limit at every one; my probe reproduces every bottom exactly — V2 569, V4 604, V10 304, V14 592, V16 662, V17 692. The doubled cue set is intact: "IN PERSON" / "ONLINE" in tracked uppercase over the school name in Literata over one navy control each, read in `V3.jpg`, `V9.jpg`, `V13.jpg` and `V16.jpg`, the two controls on one baseline from 768 (`V16.jpg`, `V15.jpg`) and identical in width, fill and corner on every phone row (`V2.jpg`, `V9.jpg`). **The cheat that was available and was not taken:** the runner accepts a surface change running off the bottom edge as continuation at 1.2:1 (`0_plan/tools/shots.mjs:82`, `VISIBLE_EDGE`), and this page's boundaries are surface changes — but its two light cuts measure 1.10 and 1.01, so they cannot trigger it, and I checked every Next-band row: not one says "surface changes from…". My own ink scan at all nineteen rows agrees — what crosses or reaches each edge is a door line, the compare sentence, or the next chapter's "( COMPARE ) / Compare the two schools" (V11–V14, V16, V17), never a bare ground. Ten-second test at 390 reads cleanly in `V3.jpg` and `V9.jpg` | Holds. Two soft spots recorded rather than deducted: at V6 (`V6.jpg`) the compare sentence *completes* 6px above the edge with nothing cut, which is the weakest continuation signal on the page; and at V19 (`V19.jpg`, the zoom row) nothing at all is visible below the last CTA, which `qa/fold.md` reports and DD-44 excuses |
| Composition | **4** | The cut is built exactly as briefed and I verified the construction rather than the claim: my probe reads all six sections at 1440 with `border-top: 0px none`, `box-shadow: none`, `background-image: none` and grounds `rgb(252,244,239) → rgb(248,232,222) → rgb(228,238,242) → rgb(0,42,58) → rgb(252,244,239) → rgb(0,42,58)` at y 820 / 2235 / 2847 / 3765 / 4097. My crop of `V16.jpg` at y 790–880 shows the first boundary as a single unmodulated edge. The left-edge argument at `RATIONALE.md:107–111` is true to the pixel: my probe puts the h1, the provenance, door one's label, name and CTA, the compare sentence, the accent mark **and** the chapter-2 heading all at x=32.0 at 1440, with door two's label on its own column line at 736. **What keeps it off 5 is the one borrowed device that did not land.** `styles.css:112` centres the chapter label while the chapter's content is left-aligned, so the label attaches to nothing: measured, its centre is 688px from the heading it opens at 1920 (`V17.jpg`), 588px at 1440 (`V16.jpg`), 528px at 1280 (`V14-full.jpg`). In the source it is the opposite — `tideline.html`'s `.stage` is `align-items:center;text-align:center`, so "( choose your driver )" sits directly on top of a centred headline as one stack. The stylesheet says "The label IS the page-turn" (`styles.css:71`); a 12px fleck 588px from its chapter cannot be. Second: at V12 (`V12.jpg`) the first chapter is 261px of empty above the h1 and 245 below the accent, with the right third empty as well — vertical centring borrowed without horizontal centring gives an asymmetric field rather than a held frame | Left-align `.chapter-label` with the rest of the chapter so the page-turn sits on the same left edge the direction's own argument rests on, **or** centre the chapter's heading with it so the pair reads as one stack the way the source does. Either is a departure from the brief's "centred" instruction and should be escalated with `V17.jpg` attached rather than done silently |
| Typography | **3** | The good half is very good. One Literata italic word per display sentence, and my probe confirms the brief's hard condition across the whole matrix: **none of the five italic words sits at a line end at any of the nineteen rows** (`or`, `two`, `both`, `admits`, `Already`, each bound by a no-break space). The rag from 768 up is excellent — worst interior line 92 per cent of the widest at V11, V12, V13, V14, V15, V16, V17 and V19. Three faces three jobs; buttons Inconsolata 600 on a uniform `--radius-md` (DD-47); tabular step numerals. **The defect is the phone rag, and it is this programme's own already-solved problem shipped again.** My probe, per-line widths of the h1: V2 `297, 264, 264, 171, 248, 223, 207` — byte-for-byte M21's round-one rag, which `critic-fable-M21.md` named as a defect. Worst interior line as a share of the widest: **58% at 360/375/390, 57% at 393, 58% at 412/414/430, 52% at 402, 47% at 320.** `V7.jpg` is the clearest: "Texas campus" sets at 184px directly under a 351px line, a notch in the middle of the one sentence the page turns on. `V5.jpg` and `V1.jpg` show the same. I measured the fix on this build: `letter-spacing: -0.045em` below 768 takes 402, 414 and 430 from six lines at 52–58% to **five lines at 79%**, 393 from seven to five at 79%, and 360–390 from seven lines to six. `RATIONALE.md` reports line *counts* at :47–55 and never reports a line *width*, so this is not a considered trade-off — it is the one typographic surface the file did not measure | Ship `letter-spacing: -0.045em` below 768 (and at V10). It is not a taste call: `CONTINUITY.md` measures the estate's own heading tracking at **-1.6px on a 36px Literata h1, or -0.0444em**, so the same declaration fixes the rag and closes the tracking row this file lists as a "Declared difference" in its own Continuity table. M21 shipped exactly this. Then record what it does not fix: 360 to 375 stays near 53% |
| Imagery | **3** | Default state, correctly argued: no photograph, marks only, and the photographed state designed down to the file, the crop, the `object-position`, the 720px cap and the caption without shipping it. Mark geometry is measured rather than declared — `qa/fold.md` reports 27px at 390 and 32px at 1440 with **0% aspect skew on all six instances**, and `focus-footer-plate.jpg` shows both marks on their correct panels (GT School on a `--color-bg` plate, GT Anywhere on navy, `copy.md` section 8). No stock image and no placeholder in any of the 29 captures. **The defect is a brand mark that loses half its name.** The runner's new forced-colours check fails M22 in both schemes (`qa/fold.md`, "The GT Anywhere mark under forced colours", and `## Result: 2 failure(s)`), and I reproduced it: my own render at `forced-colors: active`, `colorScheme: light`, shows the footer mark as **"GT" with the word "anywhere" gone** — the navy ground is replaced by Canvas and the near-white lettering vanishes. In dark forced colours the other mark degrades instead: GT School's navy "GT" sits on black. **The fix in the stylesheet is dead.** `styles.css:253–261` targets `.footer-logo--anywhere`; `index.html:230` carries `class="footer-logo"` only. M24 carries the class (`M24-one-at-a-time/index.html:284`) and passes; M22 has the CSS half and not the markup half, which is worse than neither, because a reader of the stylesheet will believe it is handled | Add `footer-logo--anywhere` to the class list at `index.html:230`, and give `.footer-logo.plate` the same `forced-color-adjust: none` so GT School's navy "GT" keeps a light ground in dark forced colours. Then re-run and paste the run that passes |
| Colour and surface | **4** (brief expects 5) | Every figure in the file reproduces on my own computation, exactly: 17.69 / 16.10 / 16.30 on the three light grounds, 14.58 and 7.81 on navy, 6.25 / 5.69 / 5.76 muted, 8.20 / 7.46 / 7.56 focus, 18.57 on the near-white button face, 2.38 and 2.19 for the accent marks, 1.42 for the table rules. `grep -oE '#[0-9a-fA-F]{3,8}' styles.css` returns **0** (my re-run). The accent is never text. The two-colour ring on navy and on the straddling plate is right by eye in `focus-footer.jpg` and `focus-footer-plate.jpg`. The forced-colours boundary substitute — a 1px `CanvasText` edge where the grounds cannot draw the cut — is the best answer in the programme to that problem and `forced-colors.jpg` shows it working. **What keeps it off its expected 5 is that the central finding is reported and not acted on.** The file measures the two weak cuts as ratios (1.10 and 1.01) and stops. I measured how much hue each actually carries: boundary 2, surface → tint, is **ΔE76 11.75, ΔC\*ab 11.74** and is unambiguous — my crop of `V14-full.jpg` at y 2020–2260 shows warm pink flipping to cool blue-grey on one line. Boundary 1, bg → surface, is **ΔE76 5.41, ΔL\* 3.68, ΔC\*ab 3.97** — about a third of the weakest cut in the source language (`insp-cloudstudio`'s pale → sky, ratio 1.22 but **ΔE 17.50**) and only 3.6× `kilnworks.html`'s incidental band change `#FAF5EC → #FCF8F1` (ΔE 1.49), which is decoration, not a cut. My crop of `V16.jpg` y 690–900 confirms it by eye: present, soft. **It is the first cut a parent meets, and it is the page's weakest** | Do something about boundary 1 specifically — it is the one that has to teach the grammar. Cheapest on the evidence: put the tint chapter second, since bg → tint measures **ΔE 8.41** against bg → surface's 5.41 and would leave the surface → tint flip (11.75) as the second cut. That is a brief amendment (the chapter order is fixed at `M22.md`, Composition) and should be escalated rather than taken. Failing that, state in the file that the opening cut is measured at ΔE 5.41 and is carried by the chapter label rather than by the ground |
| Motion | **5** | Still, and verified rather than read. My re-run of `grep -n "transition\|animation\|@keyframes" styles.css` returns **three lines: one comment (`:10`), one `100svh` inside the `@supports` guard (`:87`), and the reduced-motion reset (`:254`)**. No `@keyframes`, no `transition` property, no `animation` shorthand, zero `vh`. The runner's reduced-motion pass computes every duration at 0s on elements and pseudo-elements. Native anchor scroll is fenced inside `prefers-reduced-motion: no-preference` (`:20`). The no-crossfade rule is a stylesheet comment and not a token, exactly as the brief asked, with the right reason given (`:7–11`). The source's clocked 1.5–3s cut rhythm is transposed to a spatial boundary and nothing is left behind as a timing | Holds |
| Mission (L3) and exclusivity (L4) | **5** | Exclusivity is selectivity throughout: the 90th-percentile bar appears in the table's Admissions row, in the proof strip and in the steps line (`V14-full.jpg`), and tuition is one ordinary table row where "Tuition on request. Ask admissions." sits at the same weight as "$10,400 a year". No outcome figure, no accreditation claim, no crest, seal, countdown, scarcity phrase or wealth cue in any of the 29 captures. `check-claims.py` re-run by me reproduces the pasted block verbatim: six figures, six register rows, all "Unverified, public". The provenance line appears exactly once (`index.html:49`, checker R18). The two doors are peers on the first screen at every row — C20 is not merely avoided, it is inverted | Holds |
| Craft | **3** | Clean where it is clean: `check-mocks.py` 37 pass 0 fail, `check-claims.py` OK, `check-links.py` 661/661 (all three re-run by me); one `<script>` (the JSON-LD), zero `<form>`; no console errors; no horizontal scroll at 320 (`V18.jpg`) or with the root doubled at 375 (`V2-rootx2.jpg`); every interactive target at least 44px at every row; focus correct on all four captures. **Three things keep it at 3.** (a) **A known defect reproduced.** At 360 (`V1.jpg`) and 320 (`V18.jpg`) the two utility links wrap to a second header row and sit **left** under the mark, while they are right-aligned at every other width. `.utility-nav { justify-content: flex-end }` (`styles.css:64`) cannot fix it, because the wrap happens in `.header-inner` (`:60`), whose `space-between` leaves a single wrapped item at flex-start. This is the exact finding `critic-fable-M21.md` required fixed, item 3. (b) The forced-colours mark, above. (c) **Six figures in `RATIONALE.md` that do not match the build**, in a file whose method is that everything is measured: listed in the compliance row | Fix the header wrap with one declaration (`.utility-nav { margin-inline-start: auto }`), land the forced-colours class, and correct the six figures. Also: the h1's step down to `--text-xl` and `max-width: none` at V10 (`styles.css:244`) appears in the fold table but not in Departures, where CONTRACT.md section 2 says it must be declared |
| Continuity (L2) | **4** | Scored for the Anywhere half only, on the rendered mirror capture, per `CONTINUITY.md`; the Georgetown handoff is unverifiable in this repository and the file correctly does not claim it. **The headline finding is real and I checked it by eye rather than from the table.** `kb/exemplars/estate/anywhere-home-1440-firstscreen.jpg` shows the estate's own h1 setting "The MIT of K-8." upright and "For students who ask for more academics." in **Literata italic, weight 400**, the whole headline left-aligned at x=40. So the source language's one-italic-word device is continuous with the destination rather than borrowed against it, and the transposition narrows it from a sentence to a word — and the colour half is correctly refused, since K12 F88 measures that orange at 2.38:1. That is the best argument in the file and it holds. The ground `#fcf4ef`, `--color-text` `#001117`, Inter Tight, Literata and both mark files all match. The named divergences are honest: flat cream against the estate's grained cream with wave linework (visible in the same capture), a typographic first screen against a composited cut-out of an identifiable child, weight 400 against 300 (DD-38, above the engineer), button fill (DD-46, right, since K12 F87 measures the estate's orange label at 2.50:1), button weight (blocked by `fonts.css` shipping Inconsolata 400 and 600 only). **What keeps it off 5:** heading tracking is listed as a "Declared difference" when the programme has already shown it is not one — M21 ships `-0.045em` below 768 against the estate's measured -0.0444em — and no side-by-side capture is filed in `qa/`, so the row rests on a table of numbers rather than on the rendered comparison the rubric asks for. M21 scored 5 on this row precisely because it filed `estate-side-by-side-390.jpg` and `-1440.jpg` | Ship the tracking below 768 (it closes the gap and fixes the rag with one declaration) and file the two estate side-by-side composites into `qa/` so a critic scores the handoff on the pair rather than on a property table |

| Brief compliance | Departures from the brief, with the rationale's stated reason and whether you accept it | Avoid concepts present (CONCEPTS.md id) | Facts, ids, numbers or paths in RATIONALE.md that do not exist where claimed | Verdict |
|---|---|---|---|---|
| Every brief section is built. Chapter order and grounds exactly as briefed and verified by probe; copy checked slot by slot against `copy.md` sections 0 to 8, no departure; all four chapter labels come from `copy.md:130`'s allowed eyebrow list ("Compare", "Proof", "Admissions", "Connect", "Families", "Builders"), so the file's "three of four" framing is if anything harder on itself than the source requires. Both acceptance measurements re-run by me and **both hold**: every chapter boundary is a hard edge (probe: zero borders, shadows and background-images on all six sections, at 375, 834 and 1440), and no two accent uses are co-visible at any scroll position at any row — my probe reproduces the mark tops to the pixel at every row (V2 864/3677/5481, V12 866/2798/4278, V19 648/2314/3775), smallest gap **1,461px at V19**, tightest margin **286px at V12**. The brief's acceptance expects Objective and Colour and surface at 5; Objective is 5, Colour and surface is 4 and is named | **Ten departures. Eight accepted as argued, two accepted with their reasons rejected** (ruled on individually below). Accepted as argued: the 12-column grid from 1024 (measured — six lines at 768 in an eight-column span against four in one column, reproduced by my probe: 540/501/533/546 at 768); the secondary CTAs inside chapter 4 under an h3; the labels' source; the compare sentence closing one step on phone widths; the three steps of air at `max-height: 639px`; the `min-height` and vertical centring (the device is load-bearing — it is what puts the next chapter's opener inside the reserve at V11–V17); the 40 by 3px accent; the forced-colours 1px `CanvasText` edge. Reasons rejected but outcomes accepted: **chapter 1's missing label** and **the centred-sentence departure's arithmetic**. One departure is over-declared: "the compare sentence sits below the fold at V2, V5 and V10" is the brief's own instruction ("the second at V2 and V5"), not a departure. One departure is missing: the h1's step to `--text-xl` and `max-width: none` at V10 | **None.** C05 answered (a sources line under both fact blocks, `V14-full.jpg`); C12, C13, C34, C36, C40 absent; C18 and C43 absent — the same scene at 390 and 1440, reflowed not swapped; C20 inverted, GT Anywhere is a peer on the first screen at every row; C29 not reached (4,386px at 1280 for a routing page carrying a nine-row table); C33 absent, nothing animates; C35 absent, the dominant headline *is* the h1. C22 is used in its good form — six CTA labels, every one naming its destination | **Six, all numerical.** (1) `:345` "184 above and 200 below" at 834 by 1194. My probe: header 0–56, chapter 56–1114, content 317–869, so **261 above and 245 below**, or **237/237** of free space once the chapter's own 24/8 padding comes out. A centred flex layout cannot produce an asymmetric split, so the pasted pair cannot be a measurement of this build. (2) `:198` "+ centring 8" at V14: the chapter at 1280 is content-sized (638px against a 584px minimum), so there is no free height to centre and the 8 is arithmetic residue labelled as a measurement. (3) `:338`, `:490` "36px of measured slack at V2 (the binding row)". V2 has 36, but **V4 has 31 and V10 has 14** — V10 is the binding row. (4) `:98`, `:104` the 19ch variant "pushes both door CTAs past the fold limit at V10 (415 of 318) and V14 (741 of 696)". Both reproduce exactly, but **V15 also breaks, at 754 of 624 — by 130px, the worst break of the three** — and the seven-column table never measured it, although `:91` says the test was run "at ten rows". (5) `:437` pastes `## Result: all required rows pass`; the current run says `## Result: 2 failure(s)`. (6) `:442` "Every row shows a parent-readable string crossing the bottom edge, never a bare ground" contradicts the `qa/fold.md` the same file pastes, which reads "no" at V18 and V19, and overstates V5, V6 and V8, where nothing crosses and a line ends 3 to 6px above the edge | **Iterate.** Typography 3, Imagery 3 and Craft 3 are below 4 |

## Required fixes, in order of impact

1. **Ship `letter-spacing: -0.045em` below 768 and at V10 (Typography, Continuity, and the budget for fix 2).**
   One declaration, three returns. My measurements on this build: 402, 414 and 430 go from six lines with the
   worst interior line at 52–58 per cent of the widest to **five lines at 79 per cent**; 393 goes from seven
   lines to five; 360 to 390 from seven to six. It frees 31px at V2, 63px at V4 and 28px at V10. And it is not
   a taste decision — `CONTINUITY.md` measures the estate's own heading tracking at -1.6px on a 36px Literata
   h1, **-0.0444em**, so it closes the tracking row this file's own Continuity table lists as an open
   difference. Then record the limit: 360 to 375 stays near 53 per cent.
2. **Land the forced-colours mark fix, which is currently a dead selector (Imagery, Craft).** `styles.css:253`
   targets `.footer-logo--anywhere`; `index.html:230` does not carry that class. My render at
   `forced-colors: active, light` shows the footer mark reading **"GT"** with "anywhere" missing. Add the class,
   and give `.footer-logo.plate` the same `forced-color-adjust: none` so GT School's navy "GT" does not sit on
   black in the dark scheme. Then paste a run that passes instead of the stale "all required rows pass".
3. **Attach the chapter label to its chapter (Composition).** `styles.css:112` centres the label while the
   chapter is left-aligned, so at 1920 it is 688px from the heading it opens (`V17.jpg`), 588px at 1440, 528px
   at 1280. `tideline.html` centres the label *and* the headline as one stack; this centres one and not the
   other. Either left-align `.chapter-label` onto the page's one left edge, or centre the chapter heading with
   it. Both are departures from the brief's "centred" instruction, so escalate with `V17.jpg` attached rather
   than change it silently.
4. **Correct the six figures (Craft).** Listed in the compliance row. The two that matter most are the V12 air
   (261/245 measured, 237/237 of free space, not 184/200) and the binding row for the label test (V10 at 14px,
   not V2 at 36px). A direction whose argument is that someone measured before they wrote cannot have its own
   tables disagree with its runner in six places.
5. **Right-align the wrapped utility row at 360 and 320 (Craft).** `V1.jpg`, `V18.jpg`: the links sit left under
   the mark because `.header-inner`'s `space-between` puts a single wrapped item at flex-start.
   `.utility-nav { margin-inline-start: auto }`. This is `critic-fable-M21.md`'s round-two item 3, reproduced.
6. **Declare the V10 h1 step-down (Craft).** `styles.css:244` sets `--text-xl` and `max-width: none` at V10.
   The fold table names it; Departures does not, and CONTRACT.md section 2 requires it there.
7. **Say something about the opening cut (Colour and surface).** Boundary 1 measures **ΔE76 5.41** against the
   source's weakest cut at 17.50. Either escalate a chapter reorder (bg → tint is ΔE 8.41) or write down that
   the first cut is the page's softest and is carried by the label rather than by the ground.
8. **File the two estate side-by-side composites into `qa/` (Continuity).** The row currently rests on a
   property table; M21 scored 5 on it because the rendered pair was in the folder.

## The three claims I was asked to verify rather than accept

| Claim | Verdict | What I measured |
|---|---|---|
| Centring costs zero lines at equal measure; the cost is the narrow measure a centred sentence wants | **True, and reproduced exactly** | Centred at the same measure: identical line counts, identical per-line widths and identical CTA bottoms at **all nineteen rows**. Centred at 28ch: only V10 breaks, 332 of 318 — the file's figure. Centred at the source's 19ch (`kilnworks.html:.sent{max-width:19ch}`): V5 7L/225, V7 7L/223, V8 7L/227, V10 7L/195 with CTAs at 415 of 318, V14 7L/348 with CTAs at 741 of 696, V16 7L/370 — every figure in the file reproduces. The one omission: **V15 breaks worst, 754 of 624**, and is not in the table |
| Two of the five boundaries carry no luminance step, so the page never leans on the next ground showing | **True, and the consequence is correctly drawn** | 1.10 / 1.01 / 12.79 / 13.88 / 13.88 all reproduce on my own computation. The runner's surface fallback needs 1.2 (`shots.mjs:82`), so neither light cut can trigger it — and no Next-band row in `qa/fold.md` cites a surface change. My own ink scan at all nineteen rows finds real text at or across every fold row's edge |
| No two accent uses co-visible at any scroll position at any row; smallest gap 1,461px, tightest margin 286px at 834 by 1194 | **True to the pixel** | My probe reproduces the mark tops at every row (V2 864/3677/5481, V10 493/2904/4521, V12 866/2798/4278, V14 683/2232/3746, V16 754/2346/3876, V19 648/2314/3775). Smallest gap **1,461 at V19**; tightest margin **286 at V12**. Both figures exact |

## Rulings on the two brief requirements the build could not meet

**1. Chapter 1 carries no bracketed label — outcome accepted, reason rejected.**

The outcome is right and the file already contains the argument that makes it right, buried at the end of the
departure: the brief's own first-screen composition list does not include a label, and chapter 1 opens with the
masthead. Structurally that is the whole case — the label marks a page-*turn*, and the first screen is the
open, not a turn. A reader meets "( COMPARE )" at the first boundary they actually cross, which is where the
device belongs.

The stated reason, however, is arithmetic, and the arithmetic is wrong in its particulars and dissolvable in
general. I injected the label and measured every row: it breaks **five** rows, not one — V2 by 3, V3 by 3,
V4 by 8, **V10 by 26** and **V15 by 16**. So the departure is more forced than claimed, but "36px of measured
slack at V2, the binding row" is not the binding row: V10 has 14px. And the constraint is not permanent. With
required fix 1 (the -0.045em tracking) plus a `--space-3` gap under the label instead of `--space-5`, I measured
**every one of the sixteen fold rows passing with the label present** — V2 561 of 605, V4 564 of 635, V10 300
of 318, V15 624 of 624. The brief's requirement is therefore achievable; it was not achievable only with the
build as it stands. Strike the arithmetic or correct it, and let the page-turn argument carry the departure.

**2. Two of the five chapters spend no accent — accepted in full, with the reason strengthened.**

This one is not a judgement call, it is geometry, and the file understates its own case by resting it on a
single row. I added a real accent mark to chapter 4 and measured all nineteen rows: two marks become co-visible
at **eleven of them** (V6, V9, V11, V12, V13, V14, V15, V16, V17, and V19 with a 1px margin), with gaps falling
to 577–631px. The general proof is simpler than the measurement: at 1440 by 900 chapter 3's mark is at 2346 and
chapter 5's at 3876, so a chapter-4 mark would have to be simultaneously at or below 2976 and at or above 3246.
No placement exists. The brief's "one accent use per chapter" and its "no two accent uses co-visible on any
screen" cannot both hold at GT's chapter lengths, full stop. Choosing the co-visibility rule is correct — it is
K3 section 5f made testable — and naming the loss (navy at 5.83:1 is the one ground where the accent would pass
3:1) is exactly the right disclosure. State it as geometry rather than as one V12 measurement.

One thing the file gets right and should keep: the reading that the two mark files' five `#E48B53` paths are
fixed brand artwork and do not count as accent uses. Under the other reading the header lockup and the first
accent mark are co-visible on the first screen of every mock in the programme, and checker R16 mandates the
marks. The reading is declared, it is the same one M03, M09, M12 and M15 take, and it is the only workable one.

## Is a boundary that reads only on hue a hard cut at all?

**Yes — hue is a legitimate carrier, and the source language this direction borrows from proves it. But
magnitude decides, and one of M22's two hue cuts is a hard cut while the other is not.**

A cut is an abrupt, unmodulated change of ground across a shared edge with nothing between. Nothing in that
definition is about luminance. `insp-cloudstudio`, whose signature is "the canvas swap is INSTANT — one frame,
no transition", swaps between four pastels whose WCAG ratios are **1.06, 1.12 and 1.22** — every one of them a
"hue-only" cut by the runner's standard, and nobody would say that page has no cuts. What makes them read is
the size of the hue step: apricot → mint is **ΔE76 39.1**, mint → pale **39.9**, sky → apricot **61.3**, and
the weakest, pale → sky, is **17.5**.

Against that scale M22's two light boundaries fall on opposite sides:

- **Surface → tint (1.01:1) is a hard cut.** ΔE76 **11.75**, essentially all of it chroma (ΔC\*ab 11.74, ΔL\*
  0.48) — a warm pink flipping to a cool blue-grey on one line. My crop of `V14-full.jpg` at y 2020–2260 shows
  it landing as cleanly as any boundary on the page. That it is invisible to a luminance test says something
  about the test, not about the edge.
- **Bg → surface (1.10:1) is not.** ΔE76 **5.41**, and unlike the other it has no dominant axis — 3.68 of
  lightness and 3.97 of chroma, both small. It is under a third of the source's weakest cut, and only 3.6×
  `kilnworks.html`'s incidental band change from `#FAF5EC` to `#FCF8F1` (ΔE 1.49), which is a decorative tonal
  shift the source does not count as a cut at all. It reads as a change of paper, not a turn of the page.

For a direction whose entire device is the cut, that distinction is not academic, because **bg → surface is the
first boundary a parent crosses.** The one cut that has to teach the grammar is the one that barely clears
noticeable. Everything after it is strong — 11.75, then 79.09, 83.71, 83.71 — so the page gets better as it
goes; it simply opens on its weakest note.

Two things stop this from being a bigger deduction. First, the direction does not depend on the ground to carry
the boundary: it puts a parent-readable string across the bottom edge at every row and never lets a surface
change stand in for continuation — verified at all nineteen rows against a runner that would have let it. And
second, the weak cut is the one boundary that carries a bracketed label, so the page-turn is announced in type
even where the ground whispers. That is the right instinct, and it is the argument the rationale should be
making about boundary 1 instead of recording a ratio and moving on.

## Verdict

**Iterate.** Objective 5, Composition 4, Typography **3**, Imagery **3**, Colour and surface 4, Motion 5,
Mission and exclusivity 5, Craft **3**, Continuity 4. The thesis is sound and the page executes it: the cut is
real, the accent discipline is measured and holds, the fold is won at every row without leaning on the ground,
and the one-italic-word device turns out to be continuous with the estate rather than borrowed against it — the
best single finding in the file. What keeps it out of the gate is three things that are all one round's work:
the phone rag this programme already solved once and did not carry over, a brand mark that loses half its name
under forced colours behind a fix that targets a class the markup does not have, and six figures that disagree
with the build in a file whose whole argument is that they were measured. The brief's acceptance expects Colour
and surface at 5; it is 4, and the reason is named above rather than escalated, because the fix is available
without a brief amendment.
