# M22 Hard Cut, rationale

| Field | Value |
|---|---|
| Mock | M22 "Hard Cut" (new direction, from the Design Library), brief `0_plan/kb/briefs/M22.md` under `CONTRACT.md` v2.1 and the DD-48 borrowing rule at the head of `0_plan/kb/briefs/M21.md` |
| Lens order | L1 objective, L3 mission, L2 continuity, L4 exclusivity |
| Source language | `insp-outship` "Cream Hard-Cut Editorial" (primary) and `insp-cloudstudio` "Pastel Hard-Cut" (support), in the Design Library at `~/projects/libraries/design`; exemplar pages `examples/kilnworks.html` and `examples/tideline.html`. Composition, rhythm and structural devices only. **No palette value and no typeface was taken from either** (DD-48; see "What was borrowed, what was refused") |
| Built | 2026-09-11 by a Fable design-engineer fork. No browser tool: `0_plan/tools/shots.mjs` measured seven passes and the screenshots it wrote under `qa/` were read between passes, including `forced-colors.jpg` |
| Round | **Round two.** Round one: Astra Pass on all nine rows; the studio critic Iterate (Typography 3, Imagery 3, Craft 3). What changed and what was refused is the Iteration section at the foot of this file. Every figure in this file was re-measured against the current build; nothing is carried over unchecked |
| Files | `index.html`, `styles.css` (links `../shared/tokens-v2.css`, `../shared/fonts.css`), this file; logos from `../shared/img/` |
| State | Default state: no photograph, no JavaScript. D-039 (scripts and inputs in mocks) is Escalated and undecided, so the page is complete at rest and carries no reveal |
| Claims on the page | 90th percentile (CR-011), $10,400 (CR-021), four in-person or intensive weekends (CR-032), 9 to noon and two hours (CR-033), two to three hours (CR-034), weekly check-ins (CR-035). Every row is "Unverified, public" in `0_plan/12-claims-register.md`: allowed on a mock, blocked for production (REQ-022). The page adds no figure the deck does not carry |

## Direction

The page is a sequence of chapters. Each one is a full-bleed ground with one thing to say, and the boundary between
two of them is a hard edge: no rule, no gradient, no shadow, no shared surface. A parent moves through it the way a
reader turns a page, not the way a visitor scrolls a wall. The choice is the first chapter and everything after it is
one idea at a time — compare, proof, admissions, families.

That is the source language's argument transposed. `insp-outship` cuts an entire film on hard cuts with zero
transitions and long still holds; `insp-cloudstudio` swaps a full-bleed ground per chapter on a single frame and
never crossfades. Both are temporal devices in a film. Here the cut is **spatial**: the edge between two chapters is
the cut, and the page is still. The stylesheet states the rule as a comment rather than a token, because a token
implies a duration exists to be set to zero.

The first screen serves L1 in the plainest way the direction allows. Header, the umbrella sentence, the provenance
line, the two doors at equal weight six columns and six, then the compare sentence with the page's first accent mark
under it. Nothing else. At every one of the sixteen fold rows both door CTAs sit above the limit, and something a
parent reads reaches or crosses the bottom edge — a door line on the phone rows, the next chapter's opener
("( COMPARE )", then "Compare the two schools") from 768 up — so a parent can see there is a page under the choice
without being told. The exact form at each row is in the Next band table below; never a bare ground.

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented children, in
person at our Georgetown, Texas campus or online from anywhere." Literata 400, `--text-3xl` (27.00px at 360 to 46px
at 1440 and above), `--leading-tight` 1.15, `max-width: 35ch`, `text-wrap: balance`, and below 768 (and on the
landscape row) `letter-spacing: -0.045em` — the estate's own heading tracking, measured below. The door names are h2 (equal
weight, DD-14), and each chapter's heading is an h2: "Compare the two schools", "What is true of both schools",
"How to apply", "Already a GT family?"; "Texas families" and "More ways to connect" are h3 inside their chapters.

**The one italic word.** Exactly one word in each chapter's display sentence is set in Literata italic, chosen as the
hinge of that sentence: *or* in the h1 (the hinge of the choice), *two* in "Compare the two schools", *both* in "What
is true of both schools", *admits* in "GT School admits students at or above the 90th percentile", *Already* in
"Already a GT family?". Each italic word is bound to the word after it with a no-break space, which is what
guarantees the brief's condition that it never falls at a line end; the runner-independent probe confirms that at all
nineteen matrix rows none of the five sits at a line end.

**Measured h1 line counts** (a Range over the h1's text, distinct line tops), as built:

| Rows | Width | Lines | h1 box | Worst interior line as a share of the widest |
|---|---|---|---|---|
| V1 to V3, V9 | 360 to 390 | **6** | 186 to 190px | 53% |
| V4 to V8 | 393 to 430 | **5** | 159 to 162px | 78 to 79% |
| V10 (landscape) | 750 at `--text-xl` | **2** | 56px | 96% |
| V11 to V17, V19 | 768 to 1920 | **4** | 157 to 212px | 92% |
| V18 (reflow row) | 320 | 7 | 217px | 58% |

From 768 up the sentence sets in four lines because the chapter is one column from 768 to 1023 (see Departures),
against the six lines an eight-of-twelve column span produced at that width. With the tracking below 768 the
contract's six-line estimate at V2 is now exact rather than one line optimistic.

**The phone rag, measured before and after the tracking.** This is a fix, not a first build: the first build set the
sentence in seven lines at 360 to 393 with the worst interior line at 52 to 58 per cent of the widest, which is a
notch in the middle of the one sentence the page turns on. Per-line widths at V2, before and after:
`297, 264, 264, 171, 248, 223, 207` became `268, 239, 239, 315, 166, 300`.

| Row | Width | Before | After | Frees |
|---|---|---|---|---|
| V1, V2, V3, V9 | 360 to 390 | 7 lines, worst interior 58% | **6 lines**, 53% | 31px at V2 |
| V4 | 393 | 7 lines, 57% | **5 lines**, 79% | 63px |
| V7 | 402 | 6 lines, 52% | **5 lines**, 79% | 32px |
| V5, V6 | 412, 414 | 6 lines, 58% | **5 lines**, 79% | 32px |
| V8 | 430 | 6 lines, 57% | **5 lines**, 78% | 33px |
| V10 | 750 landscape | 3 lines, 92% | **2 lines**, 96% | 27px |
| V18 | 320 | 8 lines, 47% | 7 lines, 58% | 31px |

**The instrument is the estate's, not a taste value.** `CONTINUITY.md` measures anywhere.gt.school's own heading
tracking at **-1.6px on a 36px Literata h1**, which is **-0.0444em**; `-0.045em` lands 1.3 per cent inside it. So one
declaration closes the rag and the tracking row that this file's Continuity table used to list as an open difference,
which is exactly what M21 shipped and its critic called "the strongest departure argument in the file".

**The limit, and two options measured and declined.** At 360 to 390 the sentence stays at six lines and the fifth
line stays a notch at 53 per cent. Two ways out, both measured on this build and both refused:

| Option | What it measures | Why it is not shipped |
|---|---|---|
| `letter-spacing: -0.06em` | 390 goes to **5 lines at 79%**; 360 and 375 stay at 6 lines and 53% | A 6 per cent negative track against the estate's measured 4.44 buys one width and spends the continuity match that is the whole argument for the declaration. M21 declined it for the same reason |
| `text-wrap: wrap` or `pretty` (identical output at every phone row, so `pretty` replaces the balancing rather than doing nothing) | Same line count and the same block height everywhere; the worst interior line rises to **76% at 360 and 62 to 63% at 375 and 390**, and falls to **74 to 75% at 414 and 430** | It buys the rag by breaking the sentence at "campus or online / from anywhere." instead of "Texas campus / or online from anywhere.", which splits the hinge this direction's one italic word exists to mark. The notch at 360 to 390 is a semantic break, and it is the better of the two errors |

## What was borrowed, what was refused

**Borrowed from `insp-outship` (Cream Hard-Cut Editorial).** The hard cut between scenes with nothing between them,
transposed from a film's cut to a page's chapter boundary. The long still hold: nothing on this page moves, and each
chapter is a held frame with one idea. The one-italic-word emphasis system, one word per display sentence. The
vertical centring of the held scene, which is `.scene { align-items: center; justify-content: center }` in
`examples/kilnworks.html` and is why the first chapter's free height is split above and below its content instead of
pooling at the bottom.

**Borrowed from `insp-cloudstudio` (Pastel Hard-Cut).** The full-bleed ground that changes per chapter and never
crossfades. Deliberately thin chrome: the header is a mark and two links, no menu (DD-12). The small bracketed
uppercase label in wide tracking that opens each stage — "( CHOOSE YOUR DRIVER )" there, "( COMPARE )" here — centred
on the full-bleed width while the chapter's content stays left-aligned on the grid.

**Refused, each as a decision:**

| Not borrowed | Why |
|---|---|
| The source's cream `#FAF5EC`, ink `#140A07` and vermilion `#E45D34`, and Cloudstudio's four pastels | This is the omission that matters most for this direction, because the source's cream-ink-vermilion is close enough to GT's `--color-bg` `#fcf4ef`, `--color-text` `#001117` and `--color-accent` `#e48b53` to be tempting. It is still not ours. K12's "what never changes" list and `tokens-v2.css` fix the GT values, and `CONTINUITY.md` measures the handoff a parent makes from this page to two sites painted in them; a page in the source's cream would fail its own Continuity row by construction (DD-48) |
| The source's faces — Fraunces, Inter, JetBrains Mono in `kilnworks.html`; Inter and JetBrains Mono in `tideline.html` | Literata, Inter Tight and Inconsolata are what both destination sites already serve (K12 G13). The three roles here are the contract's, not the source's |
| The italic word **coloured** | The source's whole emphasis system is "italic **and** orange". K12 F88 measures `--color-accent` on GT's cream at **2.38:1**, which fails AA and fails 3:1, so the colour half cannot come. The slope carries the emphasis alone, which is also what the estate's own headline does (see Continuity) |
| Outship's glyph-particle fields (`{`, `</>`, `[ ]` drifting at 20 to 30 percent opacity) and its orange square confetti | Decorative noise with no referent on a school page, and the drift is motion this direction has none of. A field of code glyphs would also read as a claim about what the school teaches, which no register row supports |
| Cloudstudio's dithered pixel creature and its "Let Pip drive →" pill bar with dot pagination | A mascot and a guided-tour control. A school routing parents to two real destinations has no use for either: the page's job is to hand a parent to Georgetown or to GT Anywhere in ten seconds, and a character that drives the page for you is the opposite of that. The pill bar is also an interactive control, which D-039 has not decided |
| Outship's dark tool-card interludes with a faint outer glow, and its pastel score pills | Glows are shadows, and a shadow at a boundary is exactly the soft edge this direction exists to avoid. The score pill is a verdict chip; every verdict on this page would be a claim without a register row |
| Kilnworks' centred sentences | Kept in spirit (the scene is centred vertically) and refused horizontally. Measured below |

## The centred sentence: the measurement behind the departure

The brief decides in advance that the fixed sentence is left-aligned on the grid rather than centred as the source
centres its sentences, and asks for the cost to be measured rather than asserted. Measured, with `text-align: center`
and `margin-inline: auto` applied over the built page at **every one of the nineteen rows**; the eight that decide
anything are below. The row that breaks worst is **V15, 1366 by 648**, which the first build's seven-column table
left out — both critics caught the omission and it is the reason this table now carries every laptop row.

| Variant | V2 375 | V5 414 | V7 402 | V8 430 | V10 750 | V14 1280 | **V15 1366** | V16 1440 |
|---|---|---|---|---|---|---|---|---|
| As built: left, 35ch cap, on the grid | 6L / 188px, CTAs 570 of 605 | 5L / 161px | 5L / 159px | 5L / 162px | 2L / 56px, 276 of 318 | 4L / 199px, 592 of 696 | 4L / 206px, **600 of 624** | 4L / 212px |
| Centred, same measure | 6L / 188px, 570 of 605 | 5L / 161px | 5L / 159px | 5L / 162px | 2L / 56px, 276 of 318 | 4L / 199px, 592 of 696 | 4L / 206px, 600 of 624 | 4L / 212px |
| Centred at 28ch | 6L / 188px | 5L / 161px | 5L / 159px | 5L / 162px | **4L / 111px, CTAs 332 of 318** | 4L / 199px | 4L / 206px | 4L / 212px |
| Centred at the source's 19ch (`kilnworks.html:17`, `.sent{max-width:19ch}`) | **7L / 219px, 601 of 605** | **7L / 225px** | **7L / 223px** | **7L / 227px** | **7L / 195px, CTAs 415 of 318** | **7L / 348px, CTAs 741 of 696** | **7L / 360px, CTAs 754 of 624** | **7L / 370px** |

**The brief's premise does not reproduce as stated, and the departure survives anyway.** Centring the sentence at the
same measure costs **zero** lines at every one of the nineteen rows — identical line counts, identical per-line
widths and identical CTA bottoms — because at phone widths the sentence is already width-limited by the content
column and the wrap is identical. What costs lines is the **measure a centred sentence needs to read as centred**: at
the source's own 19ch the sentence takes seven lines everywhere, two more at V5, V7 and V8 (+64px) and three at V14,
V15 and V16 (+149 to +158px), and pushes both door CTAs past the fold limit at **three** rows — V10 (415 of 318),
V14 (741 of 696) and **V15 (754 of 624, the worst break of the three, by 130px)**. Even a mild 28ch narrowing breaks
V10 (332 of 318).

So the honest statement of the departure is: centring is not free, but it is not the alignment that costs — it is the
measure. And at equal measure the reason to stay left is compositional rather than arithmetic: left-aligned, the h1
shares one left edge with the provenance line, both door labels, the compare sentence and the accent mark, which is
the only thing that lets a parent read the two doors as one pair of equal choices at 390 (REQ-012, DD-14). A centred
h1 over a left-aligned pair of doors has two competing axes on the one screen the page exists for.

## The cut: measured, and the finding that GT's light palette cannot draw it on luminance

Chapter boundaries at 1440 by 900, measured by probe (the first build cited a `qa/V16-full.jpg` that does not exist,
which Astra caught; the runner writes whole-page captures at V2 and V14 only, and `qa/V12-full.jpg` is this round's
third). The same probe reads every one of the six sections at 834, 1280 and 1440 with `border-top: 0px none`,
`box-shadow: none` and `background-image: none`, so the hard edge is verified by construction and not only by eye:

| # | Boundary | y at 1440 by 900 | Grounds | Ratio | Reads as an edge? |
|---|---|---|---|---|---|
| 1 | the choice → the comparison | 820 | `--color-bg` `#fcf4ef` → `--color-surface` `#f8e8de` | **1.10** | Yes, on hue: near-neutral cream to a warm pink. Confirmed by eye in `qa/V14.jpg`, `qa/V16.jpg`, `qa/V12.jpg` |
| 2 | the comparison → the proof | 2235 | `--color-surface` → `--color-anywhere-tint` `#e4eef2` | **1.01** | Yes, on hue only: a warm-to-cool flip. Its luminance step is invisible |
| 3 | the proof → the steps | 2847 | `--color-anywhere-tint` → `--color-navy` `#002a3a` | **12.79** | Yes |
| 4 | the steps → current families | 3765 | `--color-navy` → `--color-bg` | **13.88** | Yes |
| 5 | current families → footer | 4097 | `--color-bg` → `--color-navy` | **13.88** | Yes |

**A ratio is the wrong instrument for a hue cut, so here is the right one.** WCAG contrast is a luminance test, and
two of these five boundaries are not luminance events. Measured in CIE Lab (D65, sRGB, my own implementation; every
figure reproduces the critic's):

| # | Boundary | Ratio | ΔE76 | ΔL\* | Distance in the a\*b\* plane | Reading |
|---|---|---|---|---|---|---|
| 1 | bg → surface | 1.10 | **5.41** | 3.68 | 3.97 | Small on both axes. No dominant carrier |
| 2 | surface → tint | 1.01 | **11.75** | 0.48 | **11.74** | Almost pure hue: a warm pink flipping to a cool blue-grey at equal lightness |
| 3 | tint → navy | 12.79 | 79.09 | 78.19 | 11.90 | Luminance |
| 4 | navy → bg | 13.88 | 83.71 | 81.39 | 19.57 | Luminance |
| 5 | bg → navy | 13.88 | 83.71 | 81.39 | 19.57 | Luminance |

For scale, computed the same way from the source language this direction borrows from: `insp-cloudstudio`'s four
pastels, whose signature is that "the canvas swap is INSTANT — one frame, no transition", swap at ΔE **39.14**,
**39.93**, **17.50** and **61.29**, with WCAG ratios of 1.06, 1.12, 1.22 and 1.15. Every one of those is a "hue-only"
cut by a luminance test, and nobody would say that page has no cuts. At the other end, `kilnworks.html`'s incidental
band change `#FAF5EC → #FCF8F1` is ΔE **1.49**, and the source does not treat it as a cut at all.

**So boundary 2 is a hard cut and boundary 1 is not, and boundary 1 is the first one a parent crosses.** At ΔE 11.75
the surface → tint flip lands as cleanly as anything on the page — read in a crop of `qa/V14-full.jpg` at y 1990 to
2290, an unmodulated edge from warm pink to cool blue-grey with "( PROOF )" 16px under it; that it
is invisible to a contrast ratio says something about the test, not about the edge. Boundary 1, at ΔE **5.41**, is
under a third of the weakest cut in the source language and only 3.6 times an incidental tonal band the source does
not count. It reads as a change of paper rather than a turn of the page — visible, soft, and named here rather than
left for a reviewer to find. For a direction whose whole device is the cut, the cut that has to teach the grammar is
the one that barely clears noticeable, and everything after it is strong: 11.75, then 79.09, 83.71, 83.71. The page
gets better as it goes and opens on its weakest note.

**Two things carry that opening boundary anyway, and both are built rather than hoped for.** First, the page never
leans on the ground to say it continues. The runner would have let it: a surface change running off the bottom edge
counts as continuation at 1.2:1 (`0_plan/tools/shots.mjs`, `VISIBLE_EDGE`), and at 1.10 and 1.01 neither light cut
can trigger it — verified at all nineteen rows, where what reaches or crosses the edge is always a door line, the
compare sentence or the next chapter's opener, and no row in `qa/fold.md` cites a surface change. Second, boundary 1
is the one boundary that carries a bracketed label: "( COMPARE )" sits **16px** under it — measured at 375, 834 and
1440 — so the page-turn is announced
in type exactly where the ground whispers. That is why chapter 1 is the chapter without a label and chapter 2 is the
chapter with one — the announcement is spent on the weakest edge.

**The reorder was considered and is not escalated.** Putting the tint chapter second would make the first cut
bg → tint at ΔE **8.41** and leave the 11.75 flip as the second, which is a real gain of 3.0 ΔE on the boundary that
matters most. It is refused on the objective: the first screen's one link into the page is "Not sure which is right
for your family? Compare the two.", and chapter 2 is what it lands on. Putting the proof strip between the question
and the table would answer a question a parent has not asked yet, and it is the comparison opener — not the proof
heading — that is cut by the bottom edge at V11 to V17. A 3 ΔE gain on a boundary is not worth breaking the route
the page exists to serve, and the brief fixes the chapter order in any case (M22.md, Composition). Recorded here so
the trade is on the record rather than reopened.

**This is also a constraint on GT, not on the mock.** GT's palette has one dark value and three light ones that sit
within 1.10 of each other. Two of the five cuts (1 and 2) therefore carry no luminance step at all — and the runner's
own surface-sampling test, which needs 1.2:1, cannot see either of them. Every boundary is constructed as the brief
requires (no rule, no gradient, no shadow, no shared surface), but a reviewer should know that two of them are
carried by hue alone.

**All five boundaries at three widths, as the acceptance row asks:** `qa/V2-full.jpg` (375), `qa/V12-full.jpg` (834)
and `qa/V14-full.jpg` (1280), each a whole-page capture. The 834 capture is new this round: Astra's card recorded
that the first build documented every boundary at two full-page widths and not three, since the runner writes
full-page captures at V2 and V14 only. It was taken with the runner's own recipe (same server, same browser build,
same scroll-then-decode pass) immediately after the last run, and it is the only capture in `qa/` the runner does not
rewrite — so if `index.html` or `styles.css` is newer than `qa/V12-full.jpg`, treat it as stale.

One consequence had to be designed around: because the runner will not accept a 1.10 or 1.01 surface change as
continuation, the page can never rely on "the next chapter's ground shows" to satisfy the contract's reserve. What
reaches or crosses the bottom edge is text a parent reads at every required row — stated exactly, with the two rows
where nothing continues, in the Next band evidence below.

In forced colours every ground is replaced by the reader's Canvas and the cut cannot be drawn at all, so a
`1px CanvasText` edge stands in for it (`qa/forced-colors.jpg`). That is the one place on this page where a rule is
drawn at a boundary, and it exists because in that mode the alternative is no boundary (K3 F38).

## The accent: one per chapter, alternating, and why

| Chapter | Ground | Accent use |
|---|---|---|
| 1 the choice | `--color-bg` | A 40 by 3px `--color-accent` rule under the compare sentence (the brief's own instruction) |
| 2 the comparison | `--color-surface` | **None.** The brief spends it on nothing here and says to say so. The comparison chapter's argument is the table: nine rows of repeated values, where an accent mark would point at one row and imply it matters more |
| 3 the proof | `--color-anywhere-tint` | A 40 by 3px rule under "What is true of both schools" |
| 4 the steps | `--color-navy` | **None**, and this is a departure from the brief's "one accent use per chapter" that the acceptance row forces. Measured below |
| 5 current families | `--color-bg` | A 40 by 3px rule under "Already a GT family?" |

**The geometry that forces it, not one measurement.** The acceptance row requires that no two accent uses be
co-visible on any screen, which is K3 section 5f's one-accent-per-screen rule made testable. A mark in chapter 4
would have to clear chapter 3's mark by more than a viewport and sit more than a viewport above chapter 5's — and at
every row the two it would sit between are closer together than that. At 1440 by 900 chapter 3's mark is at 2346 and
chapter 5's at 3876, so a chapter-4 mark would have to be at or below 2976 **and** at or above 3246 at the same
time: no placement exists. At 834 by 1194 the two marks that bracket chapter 4 are 1,480px apart, and a third mark
between them would need a clear 1,194px on each side — 2,388px of room inside a 1,480px span. The constraint is not a close call at one row — the
brief's "one accent use per chapter" and its "no two accent uses co-visible on any screen" cannot both hold at GT's
chapter lengths, full stop, and the co-visibility rule is the harder and the more meaningful of the two.
Alternating (1, 3, 5) keeps three of the five and is stated as a rule rather than an accident.

Measured gaps between consecutive accent marks, every row, against that row's viewport height:

| Row | Viewport | Mark tops | Gaps | Smallest gap vs viewport |
|---|---|---|---|---|
| V1 | 360 by 740 | 906, 3840, 5672 | 2934, 1832 | 1832 vs 740 — clear by 1092 |
| V2 | 375 by 629 | 872, 3686, 5490 | 2814, 1804 | 1804 vs 629 — clear by 1175 |
| V3 | 390 by 664 | 875, 3691, 5441 | 2816, 1750 | 1750 vs 664 — clear by 1086 |
| V4 | 393 by 659 | 844, 3660, 5410 | 2816, 1750 | 1750 vs 659 — clear by 1091 |
| V5 | 414 by 715 | 822, 3618, 5355 | 2796, 1737 | 1737 vs 715 — clear by 1022 |
| V6 | 412 by 839 | 822, 3618, 5355 | 2796, 1737 | 1737 vs 839 — clear by 898 |
| V7 | 402 by 681 | 845, 3639, 5389 | 2794, 1750 | 1750 vs 681 — clear by 1069 |
| V8 | 430 by 739 | 825, 3461, 5182 | 2636, 1721 | 1721 vs 739 — clear by 982 |
| V9 | 390 by 844 | 875, 3691, 5441 | 2816, 1750 | 1750 vs 844 — clear by 906 |
| V10 | 750 by 342 | 473, 2884, 4501 | 2411, 1617 | 1617 vs 342 — clear by 1275 |
| V11 | 768 by 1024 | 778, 2646, 4152 | 1868, 1506 | 1506 vs 1024 — clear by 482 |
| V12 | 834 by 1194 | 866, 2798, 4278 | 1932, 1480 | **1480 vs 1194 — clear by 286, the tightest margin on the page** |
| V13 | 1024 by 768 | 663, 2291, 3752 | 1628, **1461** | 1461 vs 768 — clear by 693. The smallest gap on the page |
| V14 | 1280 by 720 | 683, 2206, 3719 | 1523, 1513 | 1513 vs 720 — clear by 793 |
| V15 | 1366 by 648 | 692, 2222, 3742 | 1530, 1520 | 1520 vs 648 — clear by 872 |
| V16 | 1440 by 900 | 754, 2346, 3876 | 1592, 1530 | 1530 vs 900 — clear by 630 |
| V17 | 1920 by 960 | 784, 2406, 3936 | 1622, 1530 | 1530 vs 960 — clear by 570 |
| V18 | 320 by 256 | 1019, 4113, 6004 | 3094, 1891 | 1891 vs 256 — clear by 1635 |
| V19 | 1024 by 576 | 648, 2262, 3724 | 1614, 1462 | 1462 vs 576 — clear by 886 |

Every row is listed rather than a selection, which is Astra's audit finding: the mark tops are read from the painted
elements at each viewport, the gap is top to top, and the margin is that gap minus the viewport height, so a positive
margin is a proof of non-co-visibility with the mark heights (3px) still to spare. All nineteen were re-measured
after the tracking change, which shortened the phone rows by about 32px and moved every figure. The smallest gap
anywhere is **1,461px at V13** and the tightest margin over a viewport is **286px at V12**. **No two accent uses are
co-visible at any scroll position at any row.**

**What counts as an accent use.** The page's own painted accent: the three 40 by 3px marks. The two mark files are
**not** counted, and that is a decision, not an oversight — `gt-school-logo-h.svg` and `gt-anywhere-logo-h.svg` each
carry five `#E48B53` paths. They are fixed two-colour brand artwork on K12's "what never changes" list and checker
rule R16 requires them in the header and the footer, so under the other reading the first screen of every mock in the
programme violates the rule by construction. Stated so a critic can see which reading was taken (M03, M09, M12 and
M15 take the same one).

The accent as a shape measures 2.38:1 on `--color-bg` and 2.19:1 on `--color-anywhere-tint`. Both marks are
`aria-hidden` decoration carrying no meaning on their own (RF-37; WCAG 1.4.11 covers graphics needed to understand
content), so 3:1 does not bind; they are stated here rather than left for a critic to measure.

## Fold: designed to, then measured

Method: `CONTRACT.md` section 2. Header 56; the contract's h1 heights as the estimate (188, 193, 199, 212); `--text-sm`
provenance at 1.5; the compact door block on phone rows and the full door block from 768; gaps from the space tokens;
the chapter's own top padding, which is `--space-4` at phone widths, `--space-5` from 768 and `--space-6` from 1200.
The **centring allowance** is the half of the first chapter's free height that vertical centring puts above the
content. It applies **only where the chapter's `min-height` is taller than its content**, which is a real condition
and not a constant: at V14 the chapter measures 638px against a 584px minimum, so it is content-sized and the
allowance is **zero**. The first build carried a "+ centring 8" at that row; the 8px was arithmetic residue from
using 24 for a 32px padding, and it is struck here.

Every row below is now a component sum that reconciles to the runner's measurement exactly, with no residue term:

| Row | Viewport, limit | `CONTRACT.md` section 2's published estimate | Measured, component by component | Measured | Result |
|---|---|---|---|---|---|
| V2 | 375 by 629, 605 | 56 + 16 + 188 + 12 + 22 + 24 + 110 + 12 + 110 = 550 | 56 + pad 16 + h1 **188** + 16 + prov 21 + 32 + door 108 + 24 + door 109 | **570** | Pass, **35** to spare. The estimate's h1 height is now exact: six lines, 188px |
| V5 | 414 by 715, 691 | 56 + 16 + 193 + 12 + 22 + 24 + 164 + 12 + 164 = 663 | 56 + pad 16 + h1 **161** + 16 + prov 21 + 32 + door 108 + 24 + door 109 | **543** | Pass, **148** to spare. Five lines against the estimate's six, and the door lines follow the CTAs |
| V14 | 1280 by 720, 696 | 56 + 32 + 199 + 12 + 22 + 32 + 184 + 24 + anchor 28 = 589 | 56 + pad **32** + h1 199 + 16 + prov 22 + 48 + door block 219, centring **0** | **592** | Pass, 104 to spare. The anchor is below the doors here, not above them |
| V16 | 1440 by 900, 876 | 56 + 40 + 212 + 16 + 22 + 40 + 184 + 32 + 28 = 630 | 56 + pad 32 + centring **55** + h1 212 + 16 + prov 22 + 48 + door block 221 | **662** | Pass, 214 to spare |
| V10 | 750 by 342, 318 | landscape recipe: 56 + 8 + 97 + 8 + 22 + 12 + 110 = 313 | 56 + pad 8 + h1 **56** at `--text-xl` + 8 + prov 21 + 16 + door 111 side by side | **276** | Pass, **42** to spare. Two lines, not the recipe's three |

The runner's own table, pasted from `qa/fold.md` of the run this rationale argues from (R37):

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 92 | 294 | 331 | 472 | 604 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 260 | 297 | 437 | 570 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 262 | 299 | 440 | 572 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 231 | 268 | 408 | 541 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 233 | 270 | 410 | 543 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 233 | 270 | 410 | 543 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 231 | 269 | 409 | 542 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 234 | 271 | 412 | 545 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 262 | 299 | 440 | 572 | yes | report: page height 6440 |
| V10 | 750 by 342 | fold | 318 | 56 | 120 | 149 | 276 | 276 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 393 | 430 | 689 | 689 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 480 | 517 | 777 | 777 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 272 | 310 | 573 | 573 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 287 | 325 | 592 | 592 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 294 | 332 | 600 | 600 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 355 | 393 | 662 | 662 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 385 | 423 | 692 | 692 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 92 | 325 | 383 | 538 | 670 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 296 | 559 | 559 | no | report: scrollWidth 1024 |

**Next band evidence, stated exactly.** The first build's summary of this said "every row shows a parent-readable
string crossing the bottom edge, never a bare ground", which the fold report printed underneath it contradicts in two
places and overstates in several more. Corrected, from the current `qa/fold.md`:

| What the runner saw | Rows | Detail |
|---|---|---|
| A string **cut by the bottom edge** | V2, V3, V5, V9, V10, V11, V12, V13, V14, V15, V16, V17 — twelve rows | A door line at V2, V3, V5 and V10; the compare sentence at V9; the next chapter's opener, "( COMPARE )" then "Compare the two schools", at V11 to V17 (for example V16, "text cut by the edge, 870 to 920") |
| The last line **finishes inside the contract's reserved bottom 24px**, with more below | V1 (18px clear), V4 (0), V6 (14), V7 (21), V8 (11) — five phone rows | The runner counts this as continuation, and the contract's rule is the reserve rather than the cut. The weakest is **V7 at 21px**, and it is the weakest continuation signal on the page |
| **Nothing continues** | V18 (320 by 256) and V19 (1024 by 576) | The reflow and zoom rows, where the fold rule is reported and not required (DD-44). The runner says so in both rows and this file does not claim otherwise |

Never a chapter's bare ground at any of the nineteen: the two light cuts are 1.10 and 1.01 against the runner's
1.2 threshold, so a surface change cannot stand in for text here even where the direction would have been allowed
it — which is the safeguard the brief's own false-floor rule asks for, and no row in `qa/fold.md` cites one.

**Two rows where the header takes two lines.** At 360 (V1) and 320 (V18) the header measures 92px rather than 56,
because the mark holds K12 V2's 27px floor instead of shrinking to fit beside the two utility links. Both rows still
pass their fold, and the alternative — a 24px mark — is the defect `CONTINUITY.md` exposed across the programme. On
both rows the two utility links now hold the **right** edge of the wrapped row (`qa/V1.jpg`, `qa/V18.jpg`); at the
first build they sat left under the mark, which is the fix below.

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id and name, lens order | M22, folder `M22-hard-cut`; L1, L3, L2, L4 | Met |
| Source language | `insp-outship` primary, `insp-cloudstudio` support; both read in `library-data.js` and as whole pages in `examples/kilnworks.html` and `examples/tideline.html`. No code copied | Met |
| What is deliberately not borrowed | Seven omissions named above with reasons: the cream-ink-vermilion palette, the faces, the coloured italic, the glyph-particle field and square confetti, the dithered creature, the driver pill bar, the glowing tool cards and score pills | Met |
| Thesis | Five chapters, each a full-bleed ground with one thing to say, cut hard against the next with no gradient and no shared edge. The choice is the first chapter | Met |
| Exemplars | `kilnworks.html` for the cut rhythm and the held, vertically centred scene; `tideline.html` for the instant chapter swap and the bracketed label; `exemplars/tate-1440.jpg` for two identically weighted calls to action (the two door CTAs are the same component, the same fill, the same corner and — from 768 — the same baseline). `university-of-hull-1440-full.jpg`'s buried second campus avoided: GT Anywhere is a peer of Georgetown Campus on the first screen at every row | Met |
| Composition | Full-bleed chapters with their own vertical padding; hard boundary with no rule, gradient or shadow. Chapter order and ground exactly as briefed: 1 `--color-bg`, 2 `--color-surface`, 3 `--color-anywhere-tint`, 4 `--color-navy`, 5 `--color-bg`, footer navy. Each chapter from 2 opens with a bracketed uppercase label in `--font-mono` `--text-xs` tracked 0.08em, on the chapter's own left edge. First screen: header 56, h1 at 8 columns (from 1024), provenance, doors 6 and 6, compare anchor, all left-aligned on the grid | Met, with four named departures: the label is left-aligned rather than centred (**escalated**); chapter 1 carries no bracketed label; the 12-column grid starts at 1024; the secondary CTAs sit inside chapter 4 |
| Typography | Contract roles. h1 Literata 400 `--text-3xl`, tracked -0.045em below 768 and on the landscape row; door names Literata `--text-xl`; door lines, table cells, facts at `--leading-prose` 1.5; labels Inter Tight 500 uppercase 0.08em; chapter labels Inconsolata 600 `--text-xs` 0.08em; buttons Inconsolata 600 `--text-btn` with a uniform `--radius-md` corner (DD-47); one Literata italic word per chapter display sentence, **re-measured after the tracking changed every phone wrap: none of the five sits at a line end at any of the nineteen rows** | Met, with the tracking named as a departure |
| Colour and surface | The four GT grounds are the whole palette. One accent use in chapters 1, 3 and 5; none in 2 (the brief's own instruction) and none in 4 (forced by the co-visibility measurement, stated above). On navy: `--color-on-navy` 14.58, `--color-text-muted-on-dark` 7.81. Focus per contract, the two-colour ring on navy and on the footer plate | Met except "one accent use per chapter", which the acceptance row's own measurement forbids; departure named with the figures |
| Imagery | Default state: the school marks only, sized by height to K12 V2 — 27px at 390 and 32px at 1440, measured by the runner at 0% aspect skew on all six instances. No photograph. Photographed state designed, not shipped (Assets) | Met (default state) |
| Motion | Still. No transition, no keyframe, nothing animates. The cut is spatial, not temporal; the no-crossfade rule is a stylesheet comment, not a token, as the brief asks. V10 native anchor scroll inside `prefers-reduced-motion: no-preference`. Reduced motion: every computed duration 0 (`--duration-none`), verified by the runner | Met |
| Copy | Sections 0 to 8 verbatim. Chapter labels: "Two ways to attend" was not needed because chapter 1 carries no label; the four labels used are "Compare", "Proof", "Admissions", "Families". Three no-break spaces and two more binding the italic words change no word | Met, with the label-source departure named below |
| Conversion | Doors on the first screen at every row; compare anchor on the first screen at V14 and V16 (and at V11 to V13, V15 and V17) and below the fold at V2 and V5; table with repeated values; proof; steps; secondary CTAs; current families; footer | Met |
| Acceptance | Both checkers clean; the runner "all required rows pass" with all sixteen fold rows passing; every chapter boundary a hard edge, all five now verified in whole-page captures at three widths (`qa/V2-full.jpg` 375, `qa/V12-full.jpg` 834, `qa/V14-full.jpg` 1280); no two accent uses co-visible at any row, measured; DD-38, DD-39, DD-46, DD-47, DD-48 and D-039 named | Met. Round one: Astra **Pass** on all nine rows; the studio critic **Iterate** with Typography 3, Imagery 3 and Craft 3. The iteration is at the foot of this file. The brief expects Colour and surface at 5 and it was scored 4, for a reason now argued rather than recorded (the opening cut, above) |

### Chapter labels: where the words come from

The brief says the chapter labels come from `copy.md` section 9. Section 9 carries "Admissions" (M02's fact labels
row) but carries no comparison, proof or families label. The other three — "Compare", "Proof", "Families" — are taken
from `copy.md`'s own "Section headings allowed beyond the slots" table, which records exactly this vocabulary:
"One-word section labels in Inconsolata above an h2: 'Compare', 'Proof', 'Admissions', 'Connect', 'Families',
'Builders'". Both lists are recorded copy and no word on the page is new, but the source is the allowed-headings
table rather than section 9 for three of the four, and that is stated rather than left silent.

## Decisions applied

| Id | How it is applied |
|---|---|
| DD-01, DD-19 | The three site faces and the layer-1 swatches only; layer-2 roles named below; every other value listed in Departures. `grep -oE '#[0-9a-fA-F]{3,8}' styles.css` returns nothing |
| DD-04 | Cue set per door: the label ("In person", "Online") in tracked uppercase, the full school name, the door line and the CTA. No photograph in the default state. No icon: the page's only drawn shape is the accent mark, and a pair of glyphs would be a second shape system competing with the cut |
| DD-06, REQ-013 | Table rows in the deck's order: shared rows first, then the rows that differ |
| DD-07, G0.5 items 2 and 3 | No outcome figure, no accreditation statement, no Cognia mark |
| DD-10, MD-25 | Exclusivity is selectivity: the only figure on the first screen is none at all; the admission bar appears in the table, the proof strip and the steps line, and tuition only where the deck places it. No wealth cue |
| DD-12, DD-13 | Header is the mark plus "Current families" and "Contact admissions". No menu, no phone number in the header |
| DD-14 | The two doors are the same component in the same grid row with the same fill, the same corner and, from 768, the same CTA baseline (an auto top margin absorbs the difference between a three-line and a two-line door sentence) |
| DD-21 | The doors are a `<ul>`; N campuses are N `<li>` items and the `.doors` grid takes `repeat(n, …)`. The first screen's two-column form is the two-entry case of a list, not a split hero |
| DD-38 (proposed) | Type roles option (b): Literata 400 display at the `--text-3xl` clamp, Inter Tight for interface strings, `--leading-prose` 1.5 for multi-line prose, `--leading-body` 1.25 for single-line strings. Line counts measured on the fixed copy at all nineteen rows, above |
| DD-39 (proposed) | Colour roles option (a): `--color-on-navy`, `--color-text-muted-on-dark`, `--color-focus-on-dark` in their roles; the accent never as text anywhere on this page, only as the three decorative marks |
| DD-42, RF-25, AD-11 | Default state: no photograph. The photographed state is designed and not shipped (Assets) |
| DD-43 | The three shared table rows repeat their value in both columns; no "Same" cell |
| DD-44 | Fold stated against height minus 24 at all nineteen rows; `min-height` uses `svh` inside an `@supports` guard and there is no `vh` anywhere; V18 reflow and V19 zoom reported, not required |
| DD-46 | Button fill is the contract's surface-dependent treatment: `--color-navy` fill with `--color-on-navy` label on the light chapters (14.58), `--color-on-navy` fill with `--color-text` label on navy (18.57). The estate's orange button is not copied: K12 F87 measures its near-white label at 2.50:1 |
| DD-47 | Every button takes a uniform `--radius-md` (8px) corner on all four sides. No `8px 8px 0 0` filler radius anywhere |
| DD-48 | The borrowing rule. Composition, rhythm and structural devices from the two source languages; palette and faces GT's. Each omission named above |
| MN-16 (proposed), R8 | Nothing animates. Reduced motion sets every duration to `--duration-none` on elements and both pseudo-element types |
| D-039 | Escalated and undecided, so the page ships its no-JavaScript state: one `<script>`, the JSON-LD block. No `data-d039` declaration. The source's chapter stepper and Cloudstudio's tour control are both interactive and are therefore out of scope, not merely unused |
| REQ-012 | Two doors of equal weight, both CTAs above the fold at all sixteen fold rows |
| REQ-022 | Every figure maps to a claims-register row; `check-claims.py` clean |
| REQ-070, E2 finding 14 | No application link without `school=`; links only to the five allowed hosts |
| SE-13 | `noindex, nofollow` |

### Layer-2 tokens used, with their rows

| Token | Register row | Status | Where it is used |
|---|---|---|---|
| `--text-xs` to `--text-3xl`, `--text-btn` | DD-38 (b), R5 | Proposed | The whole type scale; line counts measured on the fixed copy above |
| `--leading-prose: 1.5` | DD-38 (b), RF-58 | Proposed | Door lines, table cells, facts, steps, the TEFA body, footer facts |
| `--measure-prose: 65ch` | DD-38 (b), RF-55 | Proposed | The sources lines, the TEFA block, the steps intro, the families line, the door lines on phone rows |
| `--color-on-navy` | DD-39 (a), RF-07 | Proposed | Text and the apply-button fill on the navy chapter and the footer; the outer band of the two-colour focus ring |
| `--color-text-muted-on-dark` | DD-39 (a), RF-07 | Proposed | The navy chapter's label, step numerals and sources line; the footer facts |
| `--color-focus-on-dark` | DD-39 (a), RF-07 | Proposed | Declared in the token set; the ring on navy uses `--color-on-navy`, which is the same `#fbfbfb` value in the contract's own wording |
| `--ease-standard`, `--ease-out`, `--ease-in` | MN-16 (a), RF-53 | Proposed | Not used: nothing animates |
| `--duration-none`, reduced-motion zeroing | MN-16 (a), R8 | Proposed | The reduced-motion block |

## Motion spec

| What | Trigger | Duration | Easing | Reduced motion |
|---|---|---|---|---|
| Nothing | — | — | — | — |
| Door CTA, link and focus states | hover, focus | instant, no `transition` property anywhere in `styles.css` | — | unchanged: instant is already zero |
| V10 anchor scroll to `#compare` | the compare sentence | native `scroll-behavior: smooth` | browser | `scroll-behavior: auto`, inside the reduced-motion block |

The runner's reduced-motion pass reports: "PASS: every computed transition and animation duration is 0s (elements and
pseudo-elements)." The source's measured cut rhythm of 1.5 to 3 seconds is a film's and is borrowed as the spatial
boundary between chapters, not as a timing. There is no crossfade and no fade of any kind; the stylesheet says so in
a comment.

## Assets

| Asset | Use | Alt text | Notes |
|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` | Header lockup and the footer plate | "GT School" | 139 by 32 natural; rendered 27px tall at 390 and 32px at 1440, 0% aspect skew (runner, Mark geometry). On a `--color-bg` plate in the footer, per `copy.md` section 8 |
| `../shared/img/gt-anywhere-logo-h.svg` | Footer, directly on the navy ground | "GT Anywhere" | 252 by 48 natural; 27px at 390 and 32px at 1440, 0% skew. White lettering on `--color-navy`, as the deck requires |
| Photographs | **None shipped.** Default state (DD-42 option a, RF-25, AD-11) | — | Every file in `ASSETS.md` shows identifiable children, so none is usable before Nari's written permission |

**Photographed state, designed and not shipped.** One 3:2 photograph filling the width of a single chapter, at most
720 CSS px, with the chapter's ground behind it, and never on the first screen: `georgetown-science.webp`
(1440 by 1208) at 3:2, `object-position: 50% 45%`, placed at the foot of chapter 3 (the proof) above its sources
line, with the caption "Students run a science experiment." from `copy.md` section 9. Chapter 3 is the right chapter
because the proof strip is the page's evidence and a photograph is evidence; the first screen stays typographic so
the two doors keep equal weight (DD-42's parity argument). At DPR 2 the 720px cap is the file's own limit
(`CONTRACT.md` section 5). It is not in the markup: it goes in when RF-25 clears.

## Departures

| Departure | Reason |
|---|---|
| **Chapter 1 carries no bracketed label** | **Structural, and the arithmetic that used to be given as the reason is struck.** The label marks a page *turn*, and the first screen is the open rather than a turn: a reader meets "( COMPARE )" at the first boundary they actually cross, which is where the device belongs, and chapter 1 already opens with the masthead, which no other chapter does. The brief's own first-screen composition list — header, h1, provenance, the two doors, the compare anchor — carries no label either. What the first build said instead was that 39px would not fit against "36px of measured slack at V2, the binding row", and that was wrong twice over: V2 was not the binding row (V10 had 14px), and after the tracking above the constraint is gone. Injected and measured on this build at all sixteen fold rows, with the label's gap tightened to `--space-3`: every row clears the limit (V2 561 of 605, V4 564 of 635, V10 300 of 318) except that **V15 lands exactly on it, 624 of 624, and then fails the continuation test** because nothing is visible in the reserved band below. So the label is affordable now and is still declined — on the page-turn reason, which is the one that would hold even if it were free |
| **The 12-column grid starts at 1024, not 768** | Eight of twelve columns at 768 is 458px once the eleven 32px gutters are removed, and the umbrella sentence set in **six** lines there. From 768 to 1023 the chapter is one column and the text blocks are held by their own measures, which sets the sentence in **four** lines at both 768 and 834. M21's brief puts its own grid at 1024 for the same reason. The brief's "h1 at 8 columns" is honoured from 1024 up |
| **The secondary CTAs sit inside chapter 4, under an h3** | The brief names five chapters and the conversion row names eight components, so the secondary CTAs have to live in one of the five. Chapter 4's one idea is how a family begins: the four steps are the path for a family that is ready, and "More ways to connect" is the path for a family that is not. Putting them in chapter 5 would have made "current families" mean two things |
| **No accent mark in chapter 4** | Forced by geometry rather than by one row: a chapter-4 mark would have to clear chapter 3's by a viewport and sit a viewport above chapter 5's, and at 1440 by 900 that means at or below 2976 and at or above 3246 at once. Figures above. Chapter 4 is also the one ground where the accent would pass 3:1 (5.83 on navy), so this is a real loss, taken because "no two co-visible" is the harder constraint |
| **Three of the four chapter labels come from `copy.md`'s allowed-headings table rather than section 9** | Section 9 has no comparison, proof or families label. No word is new; the source is named above |
| **The compare sentence closes up one step on phone widths** (`--space-4` rather than `--space-6`) | Introduced when 32px left 42px of bare cream at the bottom edge at 390 by 844 and the screen read as finished. Re-measured this round, that reason has weakened: with the shorter sentence the row passes either way (the sentence is cut by the edge at 817 to 847 with the full gap and at 824 to 854 with this one). It is kept as a rhythm decision rather than a fold fix — on phone widths the sentence follows the two door lines rather than the two doors, so it belongs to that block and takes the block's own step (`qa/V9.jpg`) |
| **Withdrawn this round: the shortest phone rows no longer give back three steps of air** | The first build compressed three gaps under `max-width: 767px` and `max-height: 639px` because the sentence set in seven lines at 360 to 393. With the tracking it sets in six, and the compensation had become worse than useless: compact, the first door line finished **5px above** the bottom edge at V2 (624 of 629); at the page's ordinary rhythm it is **cut by the edge** (620 to 640), which is what the contract's reserve asks for, and V2 still keeps 35px of slack. The media query is deleted rather than left with a dead reason |
| **The first chapter has a `min-height` of `100svh - 56px - 80px` and centres its content vertically** | Two reasons, both measured. The contract reserves the bottom 24px and the runner will not read a 1.10 or 1.01 surface change as continuation, so the boundary has to land at a known distance from the fold rather than wherever the content happens to end; pinned, the next chapter's label and heading always reach the reserve. And the free height is split above and below the content rather than pooling under it: at 834 by 1194 the pool was 480px under the compare sentence before; measured on this build the chapter runs 56 to 1114 and its content 317 to 869, so the air is **261 above and 245 below**, which is **237 and 237 of free height** once the chapter's own 24px top and 8px bottom padding come out. (The first build wrote "184 above and 200 below". A centred flex layout cannot produce an asymmetric split, so that pair was never a measurement of this page.) `svh`, never `vh`, inside an `@supports` guard (DD-44) |
| **The compare sentence is on the second screen at the phone rows** | Not a departure but the brief's own instruction ("the second at V2 and V5"), recorded here because the first build over-declared it as one. Measured: on the first screen from V11 up, below the fold at V1 to V10 |
| **A 40 by 3px accent mark** | The brief specifies 3px and no length. 40px is the house form (M03 40 by 4, M09 40 by 8, M15 40 by 3). Both lengths are raw values outside the token set: `--space-1` is 2px and `--space-2` is 4px, so neither 3 nor 40 exists as a token |
| **Forced colours draws a `1px CanvasText` edge at every chapter boundary and a `1px ButtonText` border on every button** | In forced colours the grounds are replaced by the reader's Canvas, so the cut cannot be drawn with a surface and the buttons lose their fill. Both fallbacks apply only inside `@media (forced-colors: active)` |
| **The chapter label is left-aligned, not centred — escalated as a brief amendment** | The brief says the label is centred and the source centres it, but the source centres the **headline with it**: `tideline.html`'s `.stage` is `align-items: center; text-align: center`, so "( CHOOSE YOUR DRIVER )" sits directly on top of a centred headline as one stack. This page is left-aligned on one edge by its own argument, so centring only the label attached it to nothing. Measured on the first build, ink to ink, the label's centre stood **688px right of the heading it opens at 1440 and 1920, and 608px at 1280** (the critic's card records 688 / 588 / 528 by its own method; same defect). It now starts on the heading's own left edge — 24px at the phone rows, 32 from 768, 272 at 1920 — which is the source's *relation* transposed rather than its *alignment* copied. **This is a departure from a brief instruction and is escalated to Johnny rather than treated as settled**, with `qa/V17.jpg` and `qa/V16.jpg` as the capture. The alternative — centring each chapter's h2 with its label — was rejected because it would put a second axis on a page whose first screen argues from a single left edge, and because the table, the facts and the steps under those headings all key to that edge |
| **`letter-spacing: -0.045em` on the h1 below 768 and on the landscape row** | Not in the brief, which says nothing about tracking. It is the estate's own measured heading tracking (-1.6px on 36px Literata, -0.0444em, `CONTINUITY.md`), so it closes a Continuity difference and the phone rag with one declaration. Full before-and-after measurement and the two options declined are in the h1 section |
| **The h1 steps down to `--text-xl` with `max-width: none` on the landscape row** | `CONTRACT.md` section 2's landscape recipe allows exactly this step on V10 "on that row only, declared in the rationale as a departure", as M03 did. It is what makes a 750 by 342 window work: the sentence sets in two lines at 56px instead of three at 83, the doors sit side by side, and both CTAs land at 276 of a 318 limit. The first build shipped the step and named it in the fold table but not here, which CONTRACT.md section 2 requires |
| **The two school columns are declared 41% each rather than sized automatically** | Automatic sizing gave 534 and 463 at 1280, so the three rows that repeat one value word for word — the point of DD-43 — wrapped differently in the two columns and read as two different answers. 18/41/41 makes them exactly equal at every width from 768 up (measured: 289/289 at 768, 499/499 at 1280, 564/564 at 1440). Astra's Craft finding |
| **Other values outside the token set** | 1px table rules and borders; the 44px target floor; 2px focus bands and the 4px outer band of the two-colour ring; 0.08em letter-spacing on labels and -0.045em on the phone h1; the `35ch`, `42ch`, `34ch`, `26ch` and `48ch` measures and the table's 18/41/41 columns; `text-underline-offset`; the local `--header-h: 3.5rem`; the breakpoints 768, 900, 1024, 1200 and the landscape height query at 400 (the 639 height query is gone this round). All DD-19 departures, all declared here |

## Flagged slots

| Slot | Q id | What ships |
|---|---|---|
| "Current families" destination | Q-002 | `https://community.gt.school`, header, chapter 5 and footer |
| Application steps wording | Q-007 | The deck's four steps, identical for both schools |
| Georgetown tuition | Q-011 (decided) | "Tuition on request. Ask admissions." |
| After 8th grade | Q-013 | "Families plan the path after 8th grade with admissions." |
| GT Anywhere weekend logistics | Q-017 | "Four intensive weekends a year in Georgetown." and nothing more |
| Outcome figure, accreditation | Q-019, Q-033 | Withheld: nothing on the page |
| TEFA window, owner, expiry | Q-021 | The module ships visible to everyone (D-015 option c) with no window stated |
| `school=` parameter name | DD-25 | `?school=georgetown` and `?school=anywhere`; the live parameter is confirmed in S5 |
| Tour and info-session labels | MD-02, R14, E2 finding 15 | Labels name the destination: "Ask about a tour of the Georgetown campus", "Ask about a virtual info session" |
| Holly's unifying GT School element | Q-001 | Not present; it would sit beside the header lockup when it exists |
| Wayfinding vocabulary v2 | `copy.md` section 9 | Proposed for Nari; this page uses "Admissions" from it and three labels from the allowed-headings table |

## Parent questions

| Question | Where the page answers it |
|---|---|
| PQ-01 What is GT School? | The h1, chapter 1 |
| PQ-02 Is it for my child? | The h1 ("gifted and talented"), the table's Admissions row, the proof strip, the steps line |
| PQ-03 In person or online? | The two doors, chapter 1, at every row above the fold |
| PQ-04 Where is the campus? | The h1, the door line, the table's "Where and how" row |
| PQ-05 What does a day look like? | The table's "The day" row |
| PQ-06 What does it cost, and can TEFA help? | The table's "Tuition and access" row and the TEFA block, both in chapter 2 |
| PQ-07 How do I apply? | Chapter 4: the four steps and the two application links |
| PQ-08 Who teaches my child? | The table's "Guides" row and the proof strip's Guides fact |
| PQ-09 How much in-person time does GT Anywhere have? | The door line and the table's "In-person time" row |
| PQ-10 What results, and is it accredited? | **Deferred by decision** (G0.5 items 2 and 3). The page is silent; a parent is pointed at admissions through "Talk to admissions" in chapter 4 |
| PQ-11 What happens after 8th grade? | The table row, deferred to admissions (Q-013) |
| PQ-12 I am a current family | The header link and chapter 5 |
| PQ-13 I am not ready to apply | Chapter 4's "More ways to connect": FAQ, admissions, a tour, an info session |
| PQ-14 Is GT School part of Alpha School? | The provenance line, once, in chapter 1 (checker R18) |

## Continuity, against the measured estate

Scored against `0_plan/mockups/shared/CONTINUITY.md`, which measures the mirrored anywhere.gt.school from
`127.0.0.1`. gt.school has no mirror in this repository and is unmeasured, so the Georgetown handoff cannot be scored
on rendered evidence and is not claimed here.

**The rendered pair, filed this round.** The table below is a property list, and a property list cannot show a
handoff. `qa/estate-side-by-side-390.jpg` puts `kb/exemplars/estate/anywhere-home-390-firstscreen.jpg` beside this
page's `qa/V9.jpg`, and `qa/estate-side-by-side-1440.jpg` does the same for `anywhere-home-1440-firstscreen.jpg` and
`qa/V16.jpg`. Both are labelled with source and viewport, neither is retouched, and both are composed from the
repository's own captures at their native size. Looked at rather than tabulated, the pair carries the argument: the
same cream, the same Literata headline changing voice mid-sentence, the same uppercase Inconsolata on the one
control — and the two divergences this file declares are just as plain, the estate's grained cream with wave
linework against flat cream, and a composited cut-out of an identifiable child against a typographic first screen.

| Property | The estate, measured | This page | Reading |
|---|---|---|---|
| Page ground | `rgb(252, 244, 239)` | `--color-bg` `#fcf4ef`, the same value, chapter 1 and chapter 5 | Match |
| Body text | `rgb(0, 17, 23)` | `--color-text` `#001117` | Match |
| Body face | Inter Tight | Inter Tight | Match |
| Display face | Literata | Literata | Match |
| **One italic word in the headline** | The h1 sets its first sentence upright and its **second in Literata italic, weight 400** | One Literata italic word per chapter display sentence, weight 400 | **This is the continuity finding for this direction.** The estate already changes voice mid-headline with a Literata italic. The source language's one-italic-word device is therefore continuous with the destination rather than borrowed against it, and the transposition is a narrowing: one word instead of a whole sentence |
| The estate's italic is **also** accent orange | `rgb(228, 139, 83)`, measured at **2.38:1** on the cream, which fails AA and fails 3:1 (K12 F88) | Italic only, `--color-text` | Deliberate divergence. The slope carries the emphasis; the colour half is the part that fails |
| Heading weight | 300 | 400 | Declared difference, as M03 argued and shipped. One token, `--h1-weight`, if DD-38 lands the other way |
| Heading tracking | -1.6px on a 36px Literata h1, **-0.0444em** | **-0.045em below 768 and on the landscape row**, normal from 768 up | **Closed this round.** At the widths that carry two thirds of sessions the handoff is a near match (1.3 per cent inside the estate's own value) rather than a difference. It stays normal from 768 up, where the sentence already sets in four even lines at 92 per cent and the tracking would buy nothing |
| Button face and weight | Inconsolata, computed 500, 16px, uppercase | Inconsolata 600, `--text-btn` 17 to 18px, sentence case | Declared difference. `fonts.css` ships Inconsolata 400 and 600 only, so a 500 cannot be registered without adding a face, and `CONTINUITY.md` records the estate's 500 as a computed weight that may be synthesised |
| Button fill | navy on the first screen, orange in the footer and the desktop header | surface-dependent: navy on light, near-white on navy | DD-46. Navy is inside the estate's own action vocabulary; the orange fill would import a 2.50:1 label |
| Button corner | three different constructions across three controls | one uniform `--radius-md` on all four sides | DD-47 (c) as the mechanism, (b) as the value |
| Footer | uppercase Inconsolata navigation, bordered contact pills, both namings coexisting | Inconsolata for the phone number, Inter Tight links, both marks on their panels | Partial. The pills are not reproduced: a bordered pill is a drawn edge, and this page draws none outside the table |
| Ground texture | The cream is grained, with wave contour linework drawn behind the hero (visible in both estate captures) | flat `--color-bg` | Divergence, and a known one: flat cream reproduces the base colour, not the whole surface. A grain would also soften the one thing this direction depends on, the edge between two grounds |
| Hero | a composited cut-out of an identifiable child over line artwork | no photograph (default state, DD-42/RF-25) | Divergence by decision, not by taste |
| Could the two sites inherit this shell? | — | The header (mark, two links, no menu), the footer (facts block, link column, both marks on their panels) and the chapter grounds are all token-only and would drop onto either site. The chapter device itself is the part that is this page's, not the estate's | Inheritable shell, distinctive body |

## Self-check

**`python3 0_plan/tools/check-mocks.py 0_plan/mockups/M22-hard-cut`**

```
## M22-hard-cut: 37 pass, 0 fail

check-mocks: OK
```

**`python3 1_spec/tools/check-claims.py`**

```
## 0_plan/mockups/M22-hard-cut/index.html
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

**`node 0_plan/tools/shots.mjs 0_plan/mockups/M22-hard-cut`** — `## Result: all required rows pass`

| Check | Result |
|---|---|
| Fold | Sixteen fold rows (V1 to V8, V10 to V17), all pass; figures in the table above |
| Next band | Twelve rows show a string cut by the bottom edge; five phone rows (V1, V4, V6, V7, V8) end their last line inside the contract's reserved 24px with more below, V7 the weakest at 21px clear; V18 and V19 show nothing continuing, which the runner reports and DD-44 excuses. Never a bare ground standing in for text. Row by row in the Next band table above |
| Reflow (V18, 320 by 256) | No horizontal scroll |
| Zoom (V19, 1024 by 576) | Reported: scroll width 1024, nothing clipped, nothing overlapping |
| Reduced motion (V14) | Every computed transition and animation duration 0s, elements and pseudo-elements |
| Root font doubled at V2 | No horizontal scroll at 375 with a 32px root (`qa/V2-rootx2.jpg`, read) |
| Console | No errors |
| Mark geometry | Six instances measured: 27px at 390 and 32px at 1440, 0% aspect skew on all six |
| Focus | `qa/focus-cta.jpg`, `qa/focus-plate.jpg`, `qa/focus-footer.jpg`, `qa/focus-footer-plate.jpg` all read: the single `--color-focus` ring on light surfaces, the two-colour ring on navy and on the footer plate |
| Forced colours | `qa/forced-colors.jpg` read: chapter edges and button borders present, type legible, the decorative accent marks absent as intended. The runner's own forced-colours pass, in both schemes: the GT Anywhere wordmark keeps its navy ground so "anywhere" survives, and each mark's focus ring is measured against the ground it actually keeps — **13.88:1** on the light plate and **14.58:1** on the navy one, light palette and dark alike |
| Raw hex | `grep -oE '#[0-9a-fA-F]{3,8}' styles.css` returns nothing |
| No JavaScript | One `<script>`, the JSON-LD block. No `<form>`, no `<input>` |

**Screenshots read with my own eyes, and what changed because of them.** First build: `qa/V16.jpg` and `qa/V17.jpg`
(the first screen's free height was pooling at the bottom — 178px at V17 — which is why the chapter now centres
vertically); `qa/V12.jpg` (480px of bare cream at 834 by 1194, same fix); `qa/V14.jpg` (the two door CTAs sat 27px
apart because the Georgetown sentence runs to three lines and the GT Anywhere sentence to two — an auto top margin
now puts them on one baseline); `qa/V11.jpg` (the umbrella sentence set in six lines at 768 inside an eight-column
span, which is why the 12-column grid starts at 1024); `qa/forced-colors.jpg` (no boundary and no button silhouette
at all, which is why both fallbacks exist); `qa/V2.jpg`, `qa/V9.jpg`, `qa/V10.jpg`, `qa/V18.jpg`,
`qa/V2-rootx2.jpg`, `qa/focus-footer-plate.jpg`, `qa/V14-full.jpg` (the whole page at 1280, where the connect list's
arrows were floating at the far right of a 42ch block and now follow their labels).

This round, every capture was regenerated and read again: `qa/V7.jpg` and `qa/V2.jpg` (the rag notch the critic
named, now one line shorter with the hinge starting the last line); `qa/V1.jpg` and `qa/V18.jpg` (the two utility
links, which sat left under the mark on the wrapped header row and now hold the right edge); `qa/V10.jpg` (the
landscape row, two lines instead of three, both door lines cut by the edge); `qa/V16.jpg` and `qa/V17.jpg` (the
chapter label, which now opens its chapter on the same left edge as the heading); a crop of `qa/V14-full.jpg` at
y 700 to 1500 (the table, where the two school columns were unequal and identical values wrapped differently — now
declared equal); a crop of the same file at y 620 to 1000 (the first boundary, read by eye as the soft change of
paper the ΔE figure says it is); `qa/forced-colors.jpg`; and both new composites,
`qa/estate-side-by-side-390.jpg` and `qa/estate-side-by-side-1440.jpg`.

**Contrast, computed from the token values:**

| Pairing | Where | Ratio | Needed |
|---|---|---|---|
| `--color-text` on `--color-bg` | chapters 1 and 5 | 17.69 | 4.5 |
| `--color-text` on `--color-surface` | chapter 2 | 16.10 | 4.5 |
| `--color-text` on `--color-anywhere-tint` | chapter 3 | 16.30 | 4.5 |
| `--color-text-muted` on `--color-bg` / `--color-surface` / `--color-anywhere-tint` | labels, door lines, sources, table row headers | 6.25 / 5.69 / 5.76 | 4.5 |
| `--color-on-navy` on `--color-navy` | chapter 4 and the footer | 14.58 | 4.5 |
| `--color-text-muted-on-dark` on `--color-navy` | chapter 4's label, step numerals, sources; footer facts | 7.81 | 4.5 |
| `--color-text` on the `--color-on-navy` button face | the two application buttons | 18.57 | 4.5 |
| `--color-on-navy` on the `--color-navy` button face | every light-surface button | 14.58 | 4.5 |
| `--color-focus` on `--color-bg` / `--color-surface` / `--color-anywhere-tint` | the focus ring on light | 8.20 / 7.46 / 7.56 | 3 |
| Two-colour ring: `--color-on-navy` against navy; `--color-navy` against the `--color-bg` plate | on navy and on the footer plate | 14.58 / 13.88 | 3, one band per ground (K3 F10) |
| `--color-accent` against `--color-bg` / `--color-anywhere-tint` | the three decorative marks | 2.38 / 2.19 | none: decorative, `aria-hidden`, no meaning carried (RF-37) |
| `--color-border` against `--color-surface` | table rules | 1.42 | none: decorative; no rule carries meaning alone |

**Ten-second test at 390 (REQ-012), read from `qa/V3.jpg` and `qa/V9.jpg`:** the header, the sentence that says both
what the school is and that there are two ways in, the provenance line, then "IN PERSON / Georgetown Campus /
[Explore the Georgetown campus →]" and "ONLINE / GT Anywhere / [Explore GT Anywhere →]", the two buttons identical in
width, fill and corner. Both CTAs end at **572 of a 640 limit** at V3 and the first door line is cut by the bottom edge.

## What I could not satisfy

| Brief line | Why not |
|---|---|
| "Each chapter opens with a bracketed uppercase label … **centred**" | Two separate answers. **Centred:** chapters 2 to 5 carry the label and it is **left-aligned**, because the source centres the label *and* the headline as one stack and this page is left-aligned. Escalated to Johnny as a brief amendment, with `qa/V17.jpg` and `qa/V16.jpg` and the measurement in Departures. **Chapter 1:** no label, on the page-turn argument — the first screen is the open, not a turn — and no longer on the fold arithmetic, which the tracking has dissolved and which is struck in Departures |
| "One accent use per chapter" | Chapters 2 and 4 spend none. Chapter 2 is the brief's own instruction. Chapter 4 is forced by the brief's own acceptance row, and by geometry rather than by one row: a mark between chapter 3's and chapter 5's would have to clear each of them by a full viewport, which at 1440 by 900 means sitting at or below 2976 and at or above 3246 at the same time. The two rules cannot both hold on GT's chapter lengths, and the acceptance row is the harder and more meaningful of the two |
| "The chapter labels come from section 9" | One of the four does ("Admissions"). Section 9 carries no comparison, proof or families label, so the other three come from `copy.md`'s allowed-headings table. No word on the page is new |
| "centring it costs a line at every phone row" | Measured, and it does not reproduce as stated: centring at the same measure costs zero lines at all nineteen rows. What costs lines is the measure a centred sentence needs — at the source's own 19ch the sentence takes seven lines everywhere and the fold breaks at **three** rows, V10, V14 and V15, the last of them worst at 754 of 624. Full table above, now carrying every laptop row rather than seven. The departure stands; its stated reason is corrected |

## Iteration, round two (2026-09-11)

Inputs: `0_plan/ensemble/critic-fable-M22.md` and `critic-astra-M22.md` in full, the brief and `CONTRACT.md` v2.1
including its four section-3 rows, and `critic-fable-M21.md` for the standard a passing direction reached. Every
figure below is measured on the current build by a probe of my own that reproduces the runner's fold bottoms at all
nineteen rows, so the two engines agree before anything is claimed.

### What changed

| # | Fix | What was done, and the measurement |
|---|---|---|
| 1 | **The phone rag** (Typography, Continuity) | `letter-spacing: -0.045em` on the h1 below 768 and on the landscape row. 393, 402, 412, 414 and 430 go from six or seven lines with the worst interior line at 52 to 58 per cent to **five lines at 78 to 79**; 360 to 390 from seven lines to six; V10 from three to two. It frees 31px at V2, 63px at V4 and 27px at V10. The value is the estate's own heading tracking (-0.0444em), so the Continuity table's tracking row closes with the same declaration. Limit recorded: 360 to 390 stays at six lines with a 53 per cent fifth line, and the two ways out are measured and refused in the h1 section |
| 2 | **The forced-colours mark** (Imagery, Craft) | Landed by the design director before this round and verified here rather than re-done: the two marks share `.footer-logo` and differ by `.plate`, so each keeps its own ground and takes the ring that reads against it. The runner's own pass, both palettes: the GT Anywhere wordmark is kept, and the rings measure **13.88:1** and **14.58:1** against the grounds they actually retain. `## Result: all required rows pass` |
| 3 | **The chapter label attaches to its chapter** (Composition) | Left-aligned onto the page's one left edge, and the opening bracket's 0.7em lead margin zeroed so the "(" sits **on** that edge. Measured ink to ink, the label now starts at exactly the heading's left edge at every row (24 at the phone widths, 32 from 768, 272 at 1920); before, its centre stood 688px right of that edge at 1440 and 1920 and 608 at 1280. **This is a departure from the brief's "centred" and is escalated to Johnny** with `qa/V17.jpg` and `qa/V16.jpg`, not treated as settled |
| 4 | **Six figures corrected** (Craft) | (a) The V12 air is **261 above and 245 below**, or **237/237** of free height once the chapter's 24/8 padding comes out — not 184/200, which a centred flex layout cannot produce. (b) The "+ centring 8" at V14 is struck: the chapter is content-sized there (638 against a 584 minimum) so the allowance is zero, and the 8 came from using 24 for a 32px padding. Every fold sum now reconciles to the runner with no residue term. (c) The binding row for the chapter-1 label was **V10 at 14px**, not V2 at 36. (d) The 19ch variant table now carries **V15, which breaks worst at 754 of 624**, and every other laptop row. (e) The runner paste is the current run. (f) "Every row shows a string crossing the edge" is replaced by the row-by-row table, including the two rows where nothing continues |
| 5 | **The wrapped utility row** (Craft) | `.utility-nav { margin-inline-start: auto }`. At 360 and 320 the two links wrapped to a second header row and sat left under the mark, because `.header-inner`'s `space-between` puts a single wrapped item at flex-start. Read in `qa/V1.jpg` and `qa/V18.jpg`: they now hold the right edge. The same fix M21 shipped |
| 6 | **The landscape h1 step-down declared** (Craft) | `--text-xl` with `max-width: none` on V10 is now a row in Departures with the reason and the figures, which `CONTRACT.md` section 2 requires and the first build put only in the fold table |
| 7 | **The estate pair filed** (Continuity) | `qa/estate-side-by-side-390.jpg` and `qa/estate-side-by-side-1440.jpg`, composed from the repository's own captures at native size, labelled with source and viewport, unretouched. The Continuity row can now be scored on the rendered pair rather than on a property table |
| 8 | **The opening cut argued rather than recorded** (Colour and surface) | The five boundaries are measured in CIE Lab, not luminance: **5.41, 11.75, 79.09, 83.71, 83.71**. Boundary 2 is a hard cut carried almost entirely by hue; boundary 1 is not, at under a third of the source language's weakest cut (17.50) and 3.6 times an incidental band the source does not count (1.49). It is also the first boundary a parent crosses. Two things carry it and both are built: the page never leans on a ground for continuation at any of the nineteen rows, against a runner that would have allowed it at 1.2:1; and boundary 1 is the one boundary with a bracketed label under it. The chapter reorder that would buy ΔE 8.41 is considered and refused on the objective, with the reason on the record |
| + | **The compact-air media query withdrawn** | An orphan of fix 1. Its reason — seven lines at 360 to 393 — expired, and compact it left the first door line finishing 5px **above** the edge at V2 (624 of 629) where the ordinary rhythm has it cut by the edge (620 to 640). One media query fewer, 35px of slack still in hand |
| + | **The two school columns declared equal** (Astra, Craft) | Automatic sizing gave 534 and 463 at 1280, so the three rows that repeat one value word for word wrapped differently in the two columns. 18/41/41 makes them exactly equal at every width from 768 (289/289, 499/499, 564/564) |
| + | **The third boundary capture filed** (Astra) | `qa/V12-full.jpg`, the whole page at 834, so all five boundaries are documented at three widths as the acceptance row asks. The first build had two |
| + | **Re-measured because the wraps moved** | All nineteen rows re-run for the italic-word condition (95 instances, **none at a line end**) and for accent co-visibility (every row now listed, smallest gap 1,461 at V13, tightest margin 286 at V12) |

### What I judged wrong and did not do

| Not done | Reason |
|---|---|
| **Give chapter 1 a bracketed label** | The critic is right that my arithmetic was wrong and that the tracking dissolves it — injected and measured with its gap tightened to `--space-3`, the label clears the fold limit at fifteen of the sixteen rows and lands exactly on it at the sixteenth (V15, 624 of 624), where the row then fails the **continuation** test because nothing is left visible in the reserved band. I am not standing on that. **I stand on the structural reason:** the label marks a page turn, the first screen is the open rather than a turn, and the brief's own first-screen composition list carries no label. It is also the reason the weak first boundary works — the announcement is spent on the first edge a parent actually crosses |
| **Reorder the chapters so the first cut is bg → tint (ΔE 8.41 rather than 5.41)** | A real 3.0 ΔE gain on the boundary that matters most, refused because the first screen's one link into the page is "Compare the two", and chapter 2 is what it lands on. Putting the proof strip between the question and the table answers a question a parent has not asked. It is also the brief's fixed chapter order, so it would be an amendment as well as a regression in routing |
| **`letter-spacing: -0.06em`, which would fix 390 too** | Measured: 390 goes to five lines at 79 per cent, 360 and 375 do not move. It spends the estate-tracking match that is the whole argument for the declaration, for one width. M21 declined the same step for the same reason |
| **`text-wrap: wrap` or `pretty` on the phone h1** | Measured: identical to each other at every phone row (so `pretty` replaces the balancing rather than doing nothing), same line counts, same block heights; the worst interior line rises at 360 to 390 and falls at 414 and 430. Refused because it breaks the sentence at "campus or online / from anywhere." and splits the hinge the one italic word exists to mark |
| **Cap the first chapter's `min-height` at tablet widths** (Astra's Composition note) | The two critics disagree here and I side with the other one. The hold is the device — the source language's own held, vertically centred scene — and it is load-bearing: it is what lands the next chapter's opener inside the contract's reserve at V11 to V17 rather than wherever the content happens to end. Measured, the air at 834 is symmetric (237/237 of free height), not a pool. If Johnny or Nari reads the tablet hold as dead space rather than as the direction, it is a brief question and I will take it as one |
| **Anything that would make Colour and surface a 5 by changing a ground** | The four grounds are the brief's and the token set's. Boundary 1 cannot be strengthened without changing a GT colour or the chapter order, and neither is mine to take. The row is argued instead, which is what the critic asked for |
