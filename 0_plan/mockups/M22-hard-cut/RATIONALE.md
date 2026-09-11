# M22 Hard Cut, rationale

| Field | Value |
|---|---|
| Mock | M22 "Hard Cut" (new direction, from the Design Library), brief `0_plan/kb/briefs/M22.md` under `CONTRACT.md` v2.1 and the DD-48 borrowing rule at the head of `0_plan/kb/briefs/M21.md` |
| Lens order | L1 objective, L3 mission, L2 continuity, L4 exclusivity |
| Source language | `insp-outship` "Cream Hard-Cut Editorial" (primary) and `insp-cloudstudio` "Pastel Hard-Cut" (support), in the Design Library at `~/projects/libraries/design`; exemplar pages `examples/kilnworks.html` and `examples/tideline.html`. Composition, rhythm and structural devices only. **No palette value and no typeface was taken from either** (DD-48; see "What was borrowed, what was refused") |
| Built | 2026-09-11 by a Fable design-engineer fork. No browser tool: `0_plan/tools/shots.mjs` measured seven passes and the screenshots it wrote under `qa/` were read between passes, including `forced-colors.jpg` |
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
under it. Nothing else. At every one of the sixteen fold rows both door CTAs sit above the limit and the next
chapter's opener — its bracketed label, then "Compare the two schools" — is cut by the bottom edge, so a parent can
see there is a page under the choice without being told.

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented children, in
person at our Georgetown, Texas campus or online from anywhere." Literata 400, `--text-3xl` (27.00px at 360 to 46px
at 1440 and above), `--leading-tight` 1.15, `max-width: 35ch`, `text-wrap: balance`. The door names are h2 (equal
weight, DD-14), and each chapter's heading is an h2: "Compare the two schools", "What is true of both schools",
"How to apply", "Already a GT family?"; "Texas families" and "More ways to connect" are h3 inside their chapters.

**The one italic word.** Exactly one word in each chapter's display sentence is set in Literata italic, chosen as the
hinge of that sentence: *or* in the h1 (the hinge of the choice), *two* in "Compare the two schools", *both* in "What
is true of both schools", *admits* in "GT School admits students at or above the 90th percentile", *Already* in
"Already a GT family?". Each italic word is bound to the word after it with a no-break space, which is what
guarantees the brief's condition that it never falls at a line end; the runner-independent probe confirms that at all
nineteen matrix rows none of the five sits at a line end.

**Measured h1 line counts** (a Range over the h1's text, distinct line tops):

| Rows | Width | Lines | h1 box |
|---|---|---|---|
| V1 to V4, V9 | 360 to 393 | **7** | 217 to 222px |
| V5 to V8 | 402 to 430 | **6** | 191 to 195px |
| V10 (landscape) | 750 at `--text-xl` | **3** | 83px |
| V11 to V17, V19 | 768 to 1920 | **4** | 157 to 212px |
| V18 (reflow row) | 320 | 8 | 248px |

The contract's estimate of six lines at V2 is one line optimistic, which is what M12 measured first; this build
confirms it at 360, 375, 390 and 393. From 768 up the sentence sets in four lines because the chapter is one column
from 768 to 1023 (see Departures), against the six lines an eight-of-twelve column span produced at that width.

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
and `margin-inline: auto` applied over the built page at ten rows:

| Variant | V2 375 | V5 414 | V7 402 | V8 430 | V10 750 | V14 1280 | V16 1440 |
|---|---|---|---|---|---|---|---|
| As built: left, 35ch cap, on the grid | 7L / 219px | 6L / 193px | 6L / 191px | 6L / 195px | 3L / 83px | 4L / 199px | 4L / 212px |
| Centred, same measure | 7L / 219px | 6L / 193px | 6L / 191px | 6L / 195px | 3L / 83px | 4L / 199px | 4L / 212px |
| Centred at 28ch | 7L / 219px | 6L / 193px | 6L / 191px | 6L / 195px | **4L / 111px, CTAs 332 of 318** | 4L / 199px | 4L / 212px |
| Centred at the source's 19ch (`kilnworks.html`) | 7L / 219px | **7L / 225px** | **7L / 223px** | **7L / 227px** | **7L / 195px, CTAs 415 of 318** | **7L / 348px, CTAs 741 of 696** | **7L / 370px** |

**The brief's premise does not reproduce as stated, and the departure survives anyway.** Centring the sentence at the
same measure costs **zero** lines at every row, because at phone widths the sentence is already width-limited by the
content column and the wrap is identical. What costs lines is the **measure a centred sentence needs to read as
centred**: at the source's own 19ch the sentence takes seven lines everywhere, adds one line at V5, V7 and V8
(+30 to +32px) and three lines at V14 and V16 (+149 and +158px), and pushes both door CTAs past the fold limit at V10
(415 of 318) and V14 (741 of 696). Even a mild 28ch narrowing breaks V10 (332 of 318).

So the honest statement of the departure is: centring is not free, but it is not the alignment that costs — it is the
measure. And at equal measure the reason to stay left is compositional rather than arithmetic: left-aligned, the h1
shares one left edge with the provenance line, both door labels, the compare sentence and the accent mark, which is
the only thing that lets a parent read the two doors as one pair of equal choices at 390 (REQ-012, DD-14). A centred
h1 over a left-aligned pair of doors has two competing axes on the one screen the page exists for.

## The cut: measured, and the finding that GT's light palette cannot draw it on luminance

Chapter boundaries at 1440 by 900 (`qa/V16-full.jpg` and the probe), with the WCAG contrast ratio of the two grounds:

| # | Boundary | y at 1440 by 900 | Grounds | Ratio | Reads as an edge? |
|---|---|---|---|---|---|
| 1 | the choice → the comparison | 820 | `--color-bg` `#fcf4ef` → `--color-surface` `#f8e8de` | **1.10** | Yes, on hue: near-neutral cream to a warm pink. Confirmed by eye in `qa/V14.jpg`, `qa/V16.jpg`, `qa/V12.jpg` |
| 2 | the comparison → the proof | 2235 | `--color-surface` → `--color-anywhere-tint` `#e4eef2` | **1.01** | Yes, on hue only: a warm-to-cool flip. Its luminance step is invisible |
| 3 | the proof → the steps | 2847 | `--color-anywhere-tint` → `--color-navy` `#002a3a` | **12.79** | Yes |
| 4 | the steps → current families | 3765 | `--color-navy` → `--color-bg` | **13.88** | Yes |
| 5 | current families → footer | 4097 | `--color-bg` → `--color-navy` | **13.88** | Yes |

**This is the direction's central finding and it is a constraint on GT, not on the mock.** GT's palette has one dark
value and three light ones that sit within 1.10 of each other. Two of the five cuts (1 and 2) therefore carry no
luminance step at all and are legible only because the hue changes — and the runner's own surface-sampling test,
which needs 1.2:1, cannot see either of them. Every boundary is constructed as the brief requires (no rule, no
gradient, no shadow, no shared surface) and every boundary is visible in the captures at 375, 834 and 1440, but a
reviewer should know that two of them are carried by hue alone. Verified in captures at three rows as the acceptance
row asks: `qa/V2-full.jpg` (375), `qa/V12.jpg` and the scroll through `qa/V12`-width captures (834), `qa/V14.jpg`,
`qa/V16.jpg` and `qa/V14-full.jpg` (1280 and 1440).

One consequence had to be designed around: because the runner will not accept a 1.10 or 1.01 surface change as
continuation, the page can never rely on "the next chapter's ground shows" to satisfy the contract's reserve. What
crosses the bottom edge is text a parent reads at every row — see the Next band evidence below.

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

**The measurement that forced it.** The acceptance row requires that no two accent uses be co-visible on any screen,
which is K3 section 5f's one-accent-per-screen rule made testable. GT's chapters are shorter than the tallest matrix
viewport: at V12 (834 by 1194) chapter 3 is about 1,100px tall. With a mark in every chapter from 3 onward the first
build put marks at y 2798 and 3918 at V12, **1,120px apart inside a 1,194px viewport** — a scroll position of 2,727 to
2,798 shows both. So the page can carry a mark in at most every other chapter. Alternating (1, 3, 5) keeps three of
the five and is stated as a rule rather than an accident.

Measured gaps between consecutive accent marks, every row, against that row's viewport height:

| Row | Viewport | Mark tops | Gaps | Smallest gap vs viewport |
|---|---|---|---|---|
| V2 | 375 by 629 | 864, 3677, 5481 | 2813, 1804 | 1804 vs 629 |
| V10 | 750 by 342 | 493, 2904, 4521 | 2411, 1617 | 1617 vs 342 |
| V12 | 834 by 1194 | 866, 2798, 4278 | 1932, 1480 | **1480 vs 1194 — the tightest margin on the page, 286px** |
| V13 | 1024 by 768 | 663, 2342, 3804 | 1679, 1462 | 1462 vs 768 |
| V14 | 1280 by 720 | 683, 2232, 3746 | 1549, 1514 | 1514 vs 720 |
| V16 | 1440 by 900 | 754, 2346, 3876 | 1592, 1530 | 1530 vs 900 |
| V17 | 1920 by 960 | 784, 2406, 3936 | 1622, 1530 | 1530 vs 960 |
| V19 | 1024 by 576 | 648, 2314, 3775 | 1666, 1461 | 1461 vs 576 |

All nineteen rows measured; the smallest gap anywhere is 1,461px and the tightest margin over a viewport is 286px at
V12. **No two accent uses are co-visible at any scroll position at any row.**

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

Method: `CONTRACT.md` section 2. Header 56; the contract's h1 heights (188, 193, 199, 212); `--text-sm` provenance at
1.5; the compact door block on phone rows (label 15 + 8 + name 25 + 8 or 16 + CTA 44) and the full door block from 768
(label 16 + 8 + name 31 + 16 + line + 24 + CTA 44); gaps from the space tokens. The **centring allowance** is the half
of the first chapter's free height that vertical centring puts above the content, and it applies only where the
chapter's minimum is taller than its content.

| Row | Viewport, limit | Designed to | Measured | Result |
|---|---|---|---|---|
| V2 | 375 by 629, 605 | 56 + 16 + h1 188 + 16 + prov 21 + 24 + door 100 + 16 + door 100 = 537 | **569** | Pass, 36 to spare. The gap is the h1: 219px measured, seven lines, not the contract's 188 |
| V5 | 414 by 715, 691 | 56 + 16 + 193 + 16 + 22 + 32 + door 108 + 24 + door 108 = 575 | **575** | Pass, 116 to spare |
| V14 | 1280 by 720, 696 | 56 + 24 + 199 + 16 + 22 + 48 + door block 219 = 584, + centring 8 = 592 | **592** | Pass, 104 to spare |
| V16 | 1440 by 900, 876 | 56 + 32 + 212 + 16 + 23 + 48 + door block 221 = 608, + centring 54 = 662 | **662** | Pass, 214 to spare |
| V10 | 750 by 342, 318 | landscape recipe: 56 + 8 + h1 83 at `--text-xl` + 8 + 21 + 16 + door 111 side by side = 303 | **304** | Pass, 14 to spare |

The runner's own table, pasted from `qa/fold.md` of the run this rationale argues from (R37):

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 92 | 325 | 362 | 503 | 635 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 291 | 328 | 453 | 569 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 331 | 471 | 604 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 331 | 472 | 604 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 302 | 443 | 575 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 302 | 442 | 575 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 263 | 300 | 441 | 574 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 304 | 445 | 578 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 331 | 471 | 604 | yes | report: page height 6472 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 304 | 304 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 393 | 430 | 689 | 689 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 480 | 517 | 777 | 777 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 272 | 310 | 573 | 573 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 287 | 325 | 592 | 592 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 294 | 332 | 600 | 600 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 355 | 393 | 662 | 662 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 385 | 423 | 692 | 692 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 92 | 356 | 414 | 553 | 669 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 296 | 559 | 559 | no | report: scrollWidth 1024 |

**Next band evidence: what a parent reads crosses the edge at every row.** The runner's Next band table names the ink
at each row. V1 to V4, V7, V9 and V10: a door line or the compare sentence cut by the edge. V5, V6 and V8: the door
lines reach within 3 to 6px of the edge with more below. V11 to V17: the next chapter's opener — "( COMPARE )" and
"Compare the two schools" — cut by the edge (for example V16 "text cut by the edge, 870 to 920"). Never a chapter's
bare ground: the two light cuts are 1.10 and 1.01 and the runner would not count them, which is the safeguard the
brief's own false-floor rule asks for. V18 (320 by 256) and V19 (1024 by 576) are the reflow and zoom rows, where the
fold rule is reported and not required (DD-44).

**Two rows where the header takes two lines.** At 360 (V1) and 320 (V18) the header measures 92px rather than 56,
because the mark holds K12 V2's 27px floor instead of shrinking to fit beside the two utility links. Both rows still
pass their fold, and the alternative — a 24px mark — is the defect `CONTINUITY.md` exposed across the programme.

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id and name, lens order | M22, folder `M22-hard-cut`; L1, L3, L2, L4 | Met |
| Source language | `insp-outship` primary, `insp-cloudstudio` support; both read in `library-data.js` and as whole pages in `examples/kilnworks.html` and `examples/tideline.html`. No code copied | Met |
| What is deliberately not borrowed | Seven omissions named above with reasons: the cream-ink-vermilion palette, the faces, the coloured italic, the glyph-particle field and square confetti, the dithered creature, the driver pill bar, the glowing tool cards and score pills | Met |
| Thesis | Five chapters, each a full-bleed ground with one thing to say, cut hard against the next with no gradient and no shared edge. The choice is the first chapter | Met |
| Exemplars | `kilnworks.html` for the cut rhythm and the held, vertically centred scene; `tideline.html` for the instant chapter swap and the bracketed label; `exemplars/tate-1440.jpg` for two identically weighted calls to action (the two door CTAs are the same component, the same fill, the same corner and — from 768 — the same baseline). `university-of-hull-1440-full.jpg`'s buried second campus avoided: GT Anywhere is a peer of Georgetown Campus on the first screen at every row | Met |
| Composition | Full-bleed chapters with their own vertical padding; hard boundary with no rule, gradient or shadow. Chapter order and ground exactly as briefed: 1 `--color-bg`, 2 `--color-surface`, 3 `--color-anywhere-tint`, 4 `--color-navy`, 5 `--color-bg`, footer navy. Each chapter from 2 opens with a centred bracketed uppercase label in `--font-mono` `--text-xs` tracked 0.08em. First screen: header 56, h1 at 8 columns (from 1024), provenance, doors 6 and 6, compare anchor, all left-aligned on the grid | Met, with three named departures: chapter 1 carries no bracketed label; the 12-column grid starts at 1024; the secondary CTAs sit inside chapter 4 |
| Typography | Contract roles. h1 Literata 400 `--text-3xl`; door names Literata `--text-xl`; door lines, table cells, facts at `--leading-prose` 1.5; labels Inter Tight 500 uppercase 0.08em; chapter labels Inconsolata 600 `--text-xs` 0.08em; buttons Inconsolata 600 `--text-btn` with a uniform `--radius-md` corner (DD-47); one Literata italic word per chapter display sentence, never at a line end, measured at all nineteen rows | Met |
| Colour and surface | The four GT grounds are the whole palette. One accent use in chapters 1, 3 and 5; none in 2 (the brief's own instruction) and none in 4 (forced by the co-visibility measurement, stated above). On navy: `--color-on-navy` 14.58, `--color-text-muted-on-dark` 7.81. Focus per contract, the two-colour ring on navy and on the footer plate | Met except "one accent use per chapter", which the acceptance row's own measurement forbids; departure named with the figures |
| Imagery | Default state: the school marks only, sized by height to K12 V2 — 27px at 390 and 32px at 1440, measured by the runner at 0% aspect skew on all six instances. No photograph. Photographed state designed, not shipped (Assets) | Met (default state) |
| Motion | Still. No transition, no keyframe, nothing animates. The cut is spatial, not temporal; the no-crossfade rule is a stylesheet comment, not a token, as the brief asks. V10 native anchor scroll inside `prefers-reduced-motion: no-preference`. Reduced motion: every computed duration 0 (`--duration-none`), verified by the runner | Met |
| Copy | Sections 0 to 8 verbatim. Chapter labels: "Two ways to attend" was not needed because chapter 1 carries no label; the four labels used are "Compare", "Proof", "Admissions", "Families". Three no-break spaces and two more binding the italic words change no word | Met, with the label-source departure named below |
| Conversion | Doors on the first screen at every row; compare anchor on the first screen at V14 and V16 (and at V11 to V13, V15 and V17) and below the fold at V2 and V5; table with repeated values; proof; steps; secondary CTAs; current families; footer | Met |
| Acceptance | Both checkers clean; the runner "all required rows pass" with all sixteen fold rows passing; every chapter boundary a hard edge verified in captures at 375, 834 and 1440; no two accent uses co-visible at any row, measured; DD-38, DD-39, DD-46, DD-47, DD-48 and D-039 named | Met; critics pending |

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
| **Chapter 1 carries no bracketed label** | The brief's chapter rule says each chapter opens with one; the brief's own first-screen composition list does not include it, and the fold decides it. The label costs a 15px line plus a `--space-5` gap, 39px, against 36px of measured slack at V2 (569 of 605): the first screen would miss the fold by 3px at the binding row and by more once the h1's seventh line is counted. Chapter 1 also opens with the masthead, which no other chapter does, so it is already announced |
| **The 12-column grid starts at 1024, not 768** | Eight of twelve columns at 768 is 458px once the eleven 32px gutters are removed, and the umbrella sentence set in **six** lines there. From 768 to 1023 the chapter is one column and the text blocks are held by their own measures, which sets the sentence in **four** lines at both 768 and 834. M21's brief puts its own grid at 1024 for the same reason. The brief's "h1 at 8 columns" is honoured from 1024 up |
| **The secondary CTAs sit inside chapter 4, under an h3** | The brief names five chapters and the conversion row names eight components, so the secondary CTAs have to live in one of the five. Chapter 4's one idea is how a family begins: the four steps are the path for a family that is ready, and "More ways to connect" is the path for a family that is not. Putting them in chapter 5 would have made "current families" mean two things |
| **No accent mark in chapter 4** | Forced by the acceptance row's own measurement: with a mark in chapters 3 and 4 the two are 1,120px apart at V12 against a 1,194px viewport. Figures above. Chapter 4 is also the one ground where the accent would pass 3:1 (5.83 on navy), so this is a real loss, taken because "no two co-visible" is the harder constraint |
| **Three of the four chapter labels come from `copy.md`'s allowed-headings table rather than section 9** | Section 9 has no comparison, proof or families label. No word is new; the source is named above |
| **The compare sentence closes up one step on phone widths** (`--space-4` rather than `--space-6`) | At 390 by 844 the 32px gap left 42px of bare cream at the bottom edge and the screen read as finished with the sentence starting exactly at the edge. Measured before and after in `qa/fold.md`'s Next band table |
| **The shortest phone rows give back three steps of air** (`max-width: 767px` and `max-height: 639px`) | The umbrella sentence sets in seven lines at 360 to 393, one more than the contract estimated. The doors sit closer to the provenance, each CTA closer to its door name, and the two doors closer to each other: 32px recovered, which is what puts the first door line across the bottom edge at V2 instead of below it |
| **The first chapter has a `min-height` of `100svh - 56px - 80px` and centres its content vertically** | Two reasons, both measured. The contract reserves the bottom 24px and the runner will not read a 1.10 or 1.01 surface change as continuation, so the boundary has to land at a known distance from the fold rather than wherever the content happens to end; pinned, the next chapter's label and heading always reach the reserve. And the free height is split above and below the content rather than pooling under it: at 834 by 1194 the pool was 480px before, and is 184 above and 200 below now. `svh`, never `vh`, inside an `@supports` guard (DD-44) |
| **Tall rows: the compare sentence sits below the fold at V2, V5 and V10** | The brief asks for it on the first screen at V14 and V16 and the second at V2 and V5; measured, it is on the first screen from V11 up and below the fold at V1 to V10 |
| **A 40 by 3px accent mark** | The brief specifies 3px and no length. 40px is the house form (M03 40 by 4, M09 40 by 8, M15 40 by 3). Both lengths are raw values outside the token set: `--space-1` is 2px and `--space-2` is 4px, so neither 3 nor 40 exists as a token |
| **Forced colours draws a `1px CanvasText` edge at every chapter boundary and a `1px ButtonText` border on every button** | In forced colours the grounds are replaced by the reader's Canvas, so the cut cannot be drawn with a surface and the buttons lose their fill. Both fallbacks apply only inside `@media (forced-colors: active)` |
| **Other values outside the token set** | 1px table rules and borders; the 44px target floor; 2px focus bands and the 4px outer band of the two-colour ring; 0.08em letter-spacing on labels; the `35ch`, `42ch`, `34ch`, `26ch` and `48ch` measures; `text-underline-offset`; the local `--header-h: 3.5rem`; the breakpoints 768, 900, 1024, 1200 and the height queries 400, 639. All DD-19 departures, all declared here |

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

| Property | The estate, measured | This page | Reading |
|---|---|---|---|
| Page ground | `rgb(252, 244, 239)` | `--color-bg` `#fcf4ef`, the same value, chapter 1 and chapter 5 | Match |
| Body text | `rgb(0, 17, 23)` | `--color-text` `#001117` | Match |
| Body face | Inter Tight | Inter Tight | Match |
| Display face | Literata | Literata | Match |
| **One italic word in the headline** | The h1 sets its first sentence upright and its **second in Literata italic, weight 400** | One Literata italic word per chapter display sentence, weight 400 | **This is the continuity finding for this direction.** The estate already changes voice mid-headline with a Literata italic. The source language's one-italic-word device is therefore continuous with the destination rather than borrowed against it, and the transposition is a narrowing: one word instead of a whole sentence |
| The estate's italic is **also** accent orange | `rgb(228, 139, 83)`, measured at **2.38:1** on the cream, which fails AA and fails 3:1 (K12 F88) | Italic only, `--color-text` | Deliberate divergence. The slope carries the emphasis; the colour half is the part that fails |
| Heading weight | 300 | 400 | Declared difference, as M03 argued and shipped |
| Heading tracking | -1.6px | normal | Declared difference |
| Button face and weight | Inconsolata, computed 500, 16px, uppercase | Inconsolata 600, `--text-btn` 17 to 18px, sentence case | Declared difference. `fonts.css` ships Inconsolata 400 and 600 only, so a 500 cannot be registered without adding a face, and `CONTINUITY.md` records the estate's 500 as a computed weight that may be synthesised |
| Button fill | navy on the first screen, orange in the footer and the desktop header | surface-dependent: navy on light, near-white on navy | DD-46. Navy is inside the estate's own action vocabulary; the orange fill would import a 2.50:1 label |
| Button corner | three different constructions across three controls | one uniform `--radius-md` on all four sides | DD-47 (c) as the mechanism, (b) as the value |
| Footer | uppercase Inconsolata navigation, bordered contact pills, both namings coexisting | Inconsolata for the phone number, Inter Tight links, both marks on their panels | Partial. The pills are not reproduced: a bordered pill is a drawn edge, and this page draws none outside the table |
| The cream is grained, with wave linework behind the hero | flat `--color-bg` | Divergence, and a known one: flat cream reproduces the base colour, not the whole surface. A grain would also soften the one thing this direction depends on, the edge between two grounds |
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
| Next band | Every row shows a parent-readable string crossing the bottom edge, never a bare ground |
| Reflow (V18, 320 by 256) | No horizontal scroll |
| Zoom (V19, 1024 by 576) | Reported: scroll width 1024, nothing clipped, nothing overlapping |
| Reduced motion (V14) | Every computed transition and animation duration 0s, elements and pseudo-elements |
| Root font doubled at V2 | No horizontal scroll at 375 with a 32px root (`qa/V2-rootx2.jpg`, read) |
| Console | No errors |
| Mark geometry | Six instances measured: 27px at 390 and 32px at 1440, 0% aspect skew on all six |
| Focus | `qa/focus-cta.jpg`, `qa/focus-plate.jpg`, `qa/focus-footer.jpg`, `qa/focus-footer-plate.jpg` all read: the single `--color-focus` ring on light surfaces, the two-colour ring on navy and on the footer plate |
| Forced colours | `qa/forced-colors.jpg` read: chapter edges and button borders present, type legible, the decorative accent marks absent as intended |
| Raw hex | `grep -oE '#[0-9a-fA-F]{3,8}' styles.css` returns nothing |
| No JavaScript | One `<script>`, the JSON-LD block. No `<form>`, no `<input>` |

**Screenshots read with my own eyes, and what changed because of them:** `qa/V16.jpg` and `qa/V17.jpg` (the first
screen's free height was pooling at the bottom — 178px at V17 — which is why the chapter now centres vertically);
`qa/V12.jpg` (480px of bare cream at 834 by 1194, same fix); `qa/V14.jpg` (the two door CTAs sat 27px apart because
the Georgetown sentence runs to three lines and the GT Anywhere sentence to two — an auto top margin now puts them on
one baseline); `qa/V11.jpg` (the umbrella sentence set in six lines at 768 inside an eight-column span, which is why
the 12-column grid starts at 1024); `qa/forced-colors.jpg` (no boundary and no button silhouette at all, which is why
both fallbacks exist); `qa/V2.jpg`, `qa/V9.jpg`, `qa/V10.jpg`, `qa/V18.jpg`, `qa/V2-rootx2.jpg`,
`qa/focus-footer-plate.jpg`, `qa/V14-full.jpg` (the whole page at 1280, where the connect list's arrows were floating
at the far right of a 42ch block and now follow their labels).

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
width, fill and corner. Both CTAs end at 604 of a 640 limit at V3 and the door lines are cut by the bottom edge.

## What I could not satisfy

| Brief line | Why not |
|---|---|
| "Each chapter opens with a bracketed uppercase label … centred" | Chapters 2 to 5 do. Chapter 1 does not: the label costs 39px against 36px of measured slack at V2 and would put the first screen over the fold at the binding row. Named in Departures with the figures |
| "One accent use per chapter" | Chapters 2 and 4 spend none. Chapter 2 is the brief's own instruction. Chapter 4 is forced by the brief's own acceptance row: measured, two marks in adjacent chapters are 1,120px apart at V12 inside a 1,194px viewport and are co-visible. The two rules cannot both hold on GT's chapter lengths, and the acceptance row is the harder of the two |
| "The chapter labels come from section 9" | One of the four does ("Admissions"). Section 9 carries no comparison, proof or families label, so the other three come from `copy.md`'s allowed-headings table. No word on the page is new |
| "centring it costs a line at every phone row" | Measured, and it does not reproduce as stated: centring at the same measure costs zero lines at every row. What costs lines is the measure a centred sentence needs — one line at V5, V7 and V8 and three at V14 and V16 at the source's own 19ch, with the fold broken at V10 and V14. Full table above. The departure stands; its stated reason is corrected |
