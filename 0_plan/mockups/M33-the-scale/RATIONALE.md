# M33 "The Scale", rationale

| Field | Value |
|---|---|
| Mock | `0_plan/mockups/M33-the-scale/` — a full sections 0 to 8 landing mock: `index.html`, `styles.css`, `motion.css`, this file |
| Brief | `0_plan/kb/briefs/M33.md` **revision 3**, under `0_plan/kb/briefs/CONTRACT.md` v2.1. (The file on disk said revision 2 while carrying revision 3's figures — a dropped header, since fixed. The M33 critic caught it and scored against revision 2; the figures it scored are revision 3's, so nothing it measured changes) |
| Source it recreates | The `story_wrap` section of `https://www.gt.school/about-us`, read only as the dated text extract at `0_plan/kb/exemplars/gt-story/` (`SOURCE.md`, `story-segment.html`, `story-rules.css`, `count.py`). **The live page was never loaded**, here or anywhere in this build |
| Runner | `node 0_plan/tools/shots.mjs 0_plan/mockups/M33-the-scale` — **exit 0, all required rows pass**. Figures below are pasted from that run (`qa/fold.md`, 2026-09-12T01:14:58.398Z) |
| Checkers | `check-mocks.py` **38 pass 0 fail** (R10 now scans `motion*.css`, so this mock's keyframes and its reduced-motion guard are gated rather than invisible); `check-claims.py` OK; `check-links.py` OK |
| Review | Studio critic round 1 scored 4/3/4/4/5/5/4/3/4, ITERATE, `0_plan/ensemble/critic-fable-M33.md`. Composition 3 and Craft 3 are answered below, each under its own heading |
| Two things this file does **not** assert | That this is the estate's only animated storytelling device, and that the source's ticks are scroll-triggered. Neither can be shown from what we hold |

## Direction

Lens order L3 mission, L4 exclusivity, L1 objective, L2 continuity.

A school whose whole argument is measurement tells its story against a measure. The first screen is the
contract's and nothing else: the umbrella sentence, the provenance line, two doors of equal weight, and the
compare invitation closing the screen on a rule. The second screen is the story's opening, alone on the page.
From the third screen the story runs beside a drawn scale — 104 ticks, a major on every second one — and the
only thing that moves on the whole page is the reader's position on that scale.

The exclusivity here is selectivity, carried by the admissions bar in the table and the proof strip. There is no
wealth cue anywhere: no serif-and-gold flourish, no photography of a lifestyle, no price framing. The scale is
drawn in the same grey hairline the page uses for its rules.

## h1

The h1 is `copy.md` section 1's umbrella sentence, verbatim, unanimated, the only `<h1>` on the page:
"GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or
online from anywhere." Literata 400 at `--text-3xl`, capped at 35ch, `text-wrap: balance` from 768.

"Two ways to attend" is present as a visually hidden `<h2>` labelling the door list (`copy.md` section 8 allows
the heading visually hidden). Shown, it was a third mono line stacked directly above the two mono door labels and
read as a collision rather than a heading.

At **V10 only** (750 by 342) the h1 steps down one token to `--text-xl` and drops its 35ch cap. The contract
permits that step on that row and asks for it to be declared: this is the declaration. At its clamp size the
fixed sentence cannot reach the 318px limit on a 342px-tall viewport.

## Typography, and the movement's position label

Contract roles throughout: movement headings Literata 400 at `--text-xl`; story prose Inter Tight 400 at
`--text-base` and `--leading-prose` 1.5; labels Inconsolata 600 uppercase at `--text-xs` with 0.08em tracking.

The brief asks for "the movement's position as a `--font-mono` `--text-xs` label in words, never as a figure".
**There is no scale-position vocabulary in `copy.md`** — no "first", no "step two", nothing that names a place on
a measure — and inventing one would be new copy. So the label names the school the movement is about, which is
where the reader is in the story and is a fixed slot reused: "GT School", "Georgetown Campus", "GT Anywhere".
It matches the mark on the same frame, it carries no figure, and it adds not one word to the page. If Nari wants
true positional words, they belong in `copy.md` section 9 first.

## The copy, and who owns it

**The story band is the one part of this page whose words Nari has not approved.** Its nine sentences are quoted
from the live gt.school about page and were taken from the built page at `0_plan/mockups/M31-our-story/index.html`,
which fetched them as text on 2026-09-11. None of that prose is in `copy.md`. The same notice stands at the top of
`index.html`. Everything else — h1, provenance line, both door labels, names, lines and CTAs, the compare anchor,
the comparison table, the proof strip and its sources line, the application steps, the secondary CTAs, current
families and the footer — is `copy.md` verbatim.

Two figures inside that quoted prose are withheld, each shown as `[…]`:

| Withheld | Where | Why |
|---|---|---|
| The clause stating a speed multiple | "…where a flagship K–8 campus was launched […]." | CR-008 and CR-038, both **Unverified**, owner Nari. M31 withholds this clause; this page keeps that withholding |
| The launch year | "GT Anywhere launched in […], bringing the full model…" | **No claims-register row holds it.** An engineer does not add a register row from inside a build, so the figure is withheld and the gap is named here. If Nari wants the year on the page, it needs a row first |

### The four claims rows the story touches

| Row | Statement | Status / owner | On this page |
|---|---|---|---|
| CR-008 | "3X learning velocity" | Unverified, Nari | **Withheld.** The clause that carries it is replaced by `[…]` |
| CR-038 | "a flagship K-8 campus was launched to prove that 3X learning velocity isn't just a slogan, but a measurable fact" | Unverified, Nari | **Withheld**, same clause. CR-038 is the accurate row for the stronger "measurable fact" framing; `check-claims.py` maps a bare `3X` token to CR-004, which is the Anywhere row and not this one |
| CR-037 | "students achieving multiple grade levels of acceleration" | Unverified, Nari | **Present, verbatim**, inside the Georgetown movement |
| CR-036 | "This K-8 virtual academy attracted hundreds of students in its first months" | Unverified, Nari | **Present, verbatim**, inside the GT Anywhere movement |

**One adjacency that belongs in the register, not in silence.** The one thing that moves on this page
is a bar filling a measuring scale, and on the Georgetown movement it fills directly beside the
sentence "students achieving multiple grade levels of acceleration" (**CR-037, Unverified, owner
Nari**). The CONTRACT rule is satisfied — the scale is a count with no denominator and states no
proportion — but a filling measure drawn next to an unverified acceleration claim invites a reader to
connect them, and that is a claims question rather than a drawing question. **This sentence is the
record; it should be carried into `0_plan/12-claims-register.md` against CR-037 by whoever owns that
file** — an engineer does not edit the register from inside a build. The cheap mitigations, if Nari
wants one: fill the marker beside a movement that carries no figure, or drop CR-037's sentence from
the quoted prose. Both are her decisions, not mine.

**An honest limit of the mechanical gate.** `check-claims.py` finds figures by digit pattern. CR-036 and CR-037
are stated in words ("hundreds", "multiple grade levels"), so they carry no digits and the checker does not see
them; it returns OK. Two Unverified claims therefore ride on this page and this table is the only place that
records them. They are quoted, not authored, and Nari owns whether they move.

The deck's own rows behave as they do on every mock: CR-011 (90th percentile), CR-021 ($10,400), CR-032 (four
weekends), CR-033 (9 to noon, about two hours), CR-034 (two to three hours) and CR-035 (weekly check-in) are all
"Unverified, public". No other figure appears anywhere on the page, and the scale carries no numeric labels at all.

## Decisions applied

| id | How it is applied |
|---|---|
| **MN-17 / V13** | The scroll-driven position marker is **V13 under MN-17**, proposed 2026-09-11 and **adopted the same day, provisionally and narrowly**, under delegation from Johnny. Provisional means it is reviewed again the first time a second direction wants it. V11 and V12 belong to the animated-lockup wave and are not touched. The move is not renumbered |
| D-039 | Escalated to Johnny and unresolved. The page therefore carries **no JavaScript of any kind**: no `<script>` but the JSON-LD block, no inline handlers, no observer. The scroll device is CSS `animation-timeline` only, so D-039 does not gate it |
| DD-38 (option b, proposed) | Type roles as the contract states them: Literata 400 for the h1, door names and movement headings; Inter Tight 400 for prose at `--leading-prose` 1.5; Inconsolata 600 uppercase for labels, buttons and footer navigation. The layer-2 fluid clamp carries every size |
| DD-39 (option a, proposed) | The colour roles: `--color-border-strong` for every line that carries the argument, `--color-text-muted-on-dark` on the navy frame, `--color-on-navy` and `--color-focus-on-dark` on navy, `--color-focus` on light. `--color-accent-text` was measured and **not used** (see Colour). Gold never carries text or a line |
| DD-46 (option a) | Door and application buttons are `--color-navy` fill with `--color-on-navy` text on light surfaces (14.58:1). The estate's orange button is refused because its own label measures 2.50:1 (K12 F87) |
| DD-47 | One uniform `--radius-md` corner on all four sides of every button. Not the filler radius, not the cut corner |
| DD-42 (option a), RF-25, AD-11 | **No photograph anywhere.** Every file in `shared/ASSETS.md` shows identifiable children |
| DD-43 | Every shared comparison row repeats its value in both columns; no "Same" cells |
| DD-21 | Doors are a `<ul>`; the movements are `<section>` siblings in a grid. A third campus is one more `<li>` and one more movement; no geometry changes |
| DD-12 | Minimal header: the real mark, "Current families", "Contact admissions", no destinations menu |
| DD-10 | Links underlined at rest, the underline in `--color-border-strong` |
| CONTRACT v2.1 §3, "a line that carries the argument must reach 3:1" | Every drawn line on the page — 104 ticks, 50 major marks, the spine, the position marker, the short rule, the tail hairline, the link underlines — is `--color-border-strong`, measured 3.63:1 on `--color-bg`. `--color-border` (1.56:1) draws only decoration: card and table hairlines |
| CONTRACT v2.1 §3, "a drawn object may state a proportion only where a register row holds it" | The scale is a **count with no denominator on the page**: no tick is labelled, no number is printed, and the marker shows position, not a share of anything nameable. A reader can count ticks, but 104 ticks of a story is not a claim about the school |
| CONTRACT v2.1 §3, "nesting is hierarchy" | Nothing on this page draws one school inside the other. The three frames are three identical plates in one column; only their ground differs, and that is a contrast requirement, not a ranking |
| CONTRACT v2.1 §3, Literata overflows its line box by 0.1675em a side | The movement headings are Literata inside a padded frame: at `--text-xl` (28px at 1440) the overhang is 4.69px a side against `--space-5` (24px) of padding, so the heading never touches the frame edge. The h1 sits on the page ground with nothing drawn behind it |
| REQ-022 | No figure on any surface without a register row; the two gaps above are named rather than filled |
| REQ-024 | Every matrix row driven in a browser on a server the runner started; 390 and 1440 captured; forced colours checked in both palettes; reduced motion checked while scrolling |
| SE-13 | `noindex, nofollow` |

## The scale: what is drawn, measured

Geometry taken from `story-rules.css` in the checked-in extract: tick 30% of the rail wide and 0.9px tall,
`is-bigger` 45%, both right-aligned; a 1px full-height line at the scale's edge; the runs laid out with
`justify-content: space-between`. Counts from `count.py`.

| | The source, counted | This page, measured in the browser |
|---|---|---|
| Tick positions | 104, in two runs of 52 | **104, in two runs of 52** |
| Rhythm | a major every **second** position; 46 of the 48 gaps between majors are 2, and the two gaps of 4 are where the first run's hour marks displace a major | a major every second position. **50 majors**, 25 per run. One gap of 4, at the seam between the two runs, because each run opens with two non-major positions — the same structure, arrived at without hour marks |
| `is-hour` marks | 2 | **Not reproduced.** They read as a clock, and this page makes no claim about hours |
| `is-transparent` ticks | 2, one opening each run | Drawn as ordinary ticks. Nothing on this page is invisible at rest |
| Tick widths | 30% and 45% of the rail | 30% and 45% of the rail |
| Edge line | 1px, full height | 1px, full length, as a real `border` on the rail |

**Ends are not clipped.** The pitch is written once as `--p: calc((100% - 1px) / 103)` — 103 gaps between 104
ticks, less the 1px the last tick occupies — so tick 0 occupies 0 to 1px and tick 103 occupies `span − 1px` to
`span`. Measured at 1440 by 900: rail 804px, pitch 7.796px, first major at 15.58px against an arithmetic 15.59,
last major at 795.19 against 795.20. Measured at 375 by 629 (the horizontal scale): span 343px, pitch 3.320px,
first major 6.64, last 338.67 of 343.

**Why gradients for the fine ticks and elements for the rest.** 104 tick elements would be weight for nothing and
noise to a screen reader, so the fine ticks are two hard-stop `repeating-linear-gradient` layers and the whole
scale is `aria-hidden="true"` — honest only because the story's order and meaning are carried by the semantic
text beside it. But **non-url background images are suppressed under `forced-colors: active`**, which I verified
rather than assumed: at the stage's own scroll position, in both palettes, `getComputedStyle(.scale-fine).backgroundImage`
returns `none`. So the 50 major marks, the spine and the position marker are **real elements drawn with borders**,
which forced colours maps to system colours and keeps. Measured there: major border `rgb(0,0,0)/1px` in the light
palette and `rgb(255,255,255)/1px` in the dark; spine the same; marker 4px in both; 50 majors present. The fine
texture is lost and the measure survives — a legible 50-mark scale with a position marker on it.

The runner's own forced-colours capture is taken at the initial viewport and cannot see a third-screen
failure. **Round 1 ran this check, reported it accurately and threw the images away, which was the Craft
deduction and was fair.** The captures now ship, with the script that makes them:

| File in `qa/` | What it shows |
|---|---|
| `stage-normal-top.jpg` | 1440 by 900, stage top, normal palette, marker at 0 |
| `stage-normal-mid.jpg` | the same at mid-range, marker at 0.50 |
| `stage-forced-light.jpg` | forced colours, light palette, at the stage |
| `stage-forced-dark.jpg` | forced colours, dark palette, at the stage |
| `stage-reduced-motion.jpg` | reduced motion, marker at rest, `document.getAnimations()` empty |
| `stage-phone-normal.jpg`, `stage-phone-forced-light.jpg` | the horizontal rail, 390 by 844 |
| `rail-normal.png`, `rail-forced-light.png`, `rail-forced-dark.png` | 420px of the rail at 3x device scale, so the ticks can be counted by eye |
| `stage.md` | what each capture measured: orientation, major count, whether the fine gradient painted, the major ink, the marker width and transform, and `document.getAnimations().length` |
| `stage-captures.mjs` | the script. `node 0_plan/mockups/M33-the-scale/qa/stage-captures.mjs`. Machine-local like `shots.mjs`: Playwright from the npx cache, the repository served from 127.0.0.1, no dependency added and no production host contacted. **Re-run it whenever `styles.css` or `motion.css` changes**, or the images go stale |

`stage.md` records 50 majors in every mode, the fine gradient `painted` normally and `none (suppressed)`
under forced colours, the major ink `1px rgb(133, 127, 123)` normally against `1px rgb(0, 0, 0)` and
`1px rgb(255, 255, 255)` in the two forced palettes, the marker at 4px throughout, and one animation
normally against zero under reduced motion.

## Colour, measured

Every ratio below computed with the WCAG 2.x formula against the ground the object actually sits on.

| Pair | Value | Ratio | Where |
|---|---|---|---|
| ticks, major marks, spine, position marker | `#857f7b` on `#fcf4ef` | **3.63:1** | the whole scale, on `--color-bg` |
| `--color-border-strong` on the tint | `#857f7b` on `#f8e8de` | **3.31:1** | frame hairlines |
| body text | `#001117` on `#fcf4ef` | **17.69:1** | h1, door lines, story prose, overture |
| frame text | `#001117` on `#f8e8de` | **16.10:1** | headings in frames 1 and 2 |
| frame label | `#5b5b5b` on `#f8e8de` | **5.69:1** | "GT SCHOOL", "GEORGETOWN CAMPUS" |
| muted text | `#5b5b5b` on `#fcf4ef` | **6.25:1** | provenance line, eyebrows, table row labels |
| navy frame heading | `#fbfbfb` on `#002a3a` | **14.58:1** | "It grew on every axis" |
| navy frame label | `#a3bfcb` on `#002a3a` | **7.81:1** | "GT ANYWHERE" |
| button label | `#fbfbfb` on `#002a3a` | **14.58:1** | both door CTAs, both apply CTAs |
| outline button | `#002a3a` on `#fcf4ef` | **13.88:1** | "Go to the family hub" |
| focus ring, light | `#004f71` on `#fcf4ef` | **8.20:1** | every control on cream |
| focus ring, on navy | `#fbfbfb` on `#002a3a` | **14.58:1** | the two-band ring where navy is adjacent |
| link underline | `#857f7b` on `#fcf4ef` | **3.63:1** | DD-10 underlines |

Refused, with the measurement that refused them:

| Refused | Ratio | Why |
|---|---|---|
| `--color-accent` `#e48b53` for the position marker | **2.38:1** on `--color-bg`, **2.17:1** on `--color-surface` | Fails the contract's 3:1 rule for a line that carries the argument. Brief revision 1 asked for it; revision 2 withdrew it. There is no accent use on this page at all, so no accent budget is spent or needed |
| The estate's light gold `#ebba9b` — the swatch the source actually draws its ticks in | **1.61:1** on `--color-bg`, **1.46:1** on `--color-surface` | It cannot carry a line that means anything. Light gold `#ebba9b` and the accent orange `#e48b53` are **different swatches**; K12 F87 and F88 measure the orange |
| `--color-accent-text` `#a5501a` for the marker | 5.14:1 on `--color-bg` — it would have passed | Not taken. Brief revision 2 fixes one ink, `--color-border-strong`, for the ticks and the marker together. The marker is therefore distinguished from the scale **by weight, not by hue**: 4px against the 1px spine and the 1px ticks. That is also what keeps it legible under forced colours, where hue is stripped and only weight survives. **Open point for Johnny:** if a reviewer finds the marker too quiet at rest, `--color-accent-text` is the measured alternative and it is one declaration away |

## Motion spec

**This move is not in CONTRACT v2.1 section 6.** It is V13 under MN-17, proposed 2026-09-11 and
**adopted the same day, provisionally and narrowly**, under delegation from Johnny. *Provisional*
means: the move is in the vocabulary for this direction now, and it is **reviewed again the first
time a second direction wants it** — so the next mock that reaches for a scroll timeline reopens
MN-17 rather than citing this page as precedent. V11 was adopted with a condition and V12 refused;
neither touches this page.

| Beat | Trigger | Property | Range | Easing | Reduced motion |
|---|---|---|---|---|---|
| Position marker | scroll position within the story stage | `transform: scaleY(0→1)` at 1024 and above with 700px of height; `scaleX(0→1)` otherwise | `animation-range: contain 0% contain 100%` on a `view-timeline` named on `.story-grid` — progress 0 when the stage's top edge reaches the top of the viewport, progress 1 when its bottom edge reaches the bottom | `linear` | `animation: none`; the marker rests at the complete scale |

There is **no duration in time anywhere in `motion.css`**: start and end are scroll offsets, so there is nothing
for a reader to sit through and no pause control to need. Transform only; no opacity, no colour, no layout.

**Nothing reveals.** All 104 ticks are painted in every state and every browser. Every one of the three movements
is present, readable and reachable at rest, at every matrix row: the stage is never pinned and never decides what
is visible. The only sticky object on the page is the scale strip itself, which is at most one viewport tall and
therefore can never push a movement out of view.

Measured at 1440 by 900 (scripted scroll, computed transform read at each stop):

| Scroll | Computed transform |
|---|---|
| 0 (top of the document) | `matrix(1, 0, 0, 0, 0, 0)` — scaleY 0 |
| stage top (1804) | scaleY 0 |
| +25% of the range | scaleY 0.25 |
| +50% | scaleY 0.50 |
| +75% | scaleY 0.75 |
| end of the range (3124) | scaleY 1 |

Under `prefers-reduced-motion: reduce`, the same five positions return `animation-name: none`,
`animation-duration: 0s`, `transform: none` — the complete scale, checked **while scrolling**, not by reading
token values. The runner's own reduced-motion probe at V14 reports every computed transition and animation
duration 0s, elements and pseudo-elements.

**Where the guards land.** One scale mechanism per page, counting the horizontal phone variant as the same
mechanism: there is exactly one `.scale` element and one animated element on the page. Nothing is driven before
the third screen: the stage's top edge measures **2.00 screens** at 1440 by 900, **2.01** at 1280 by 720, **2.00**
at 768 by 1024 and **2.35** at 375 by 629. The one-per-page cap is new and stricter than V6's three; it is not
inherited and is not described as such.

**What a browser without scroll-driven animation renders** is the page with `motion.css`'s `@supports` block
inert: the scale complete, the marker drawn full length, the story entire. That is the same no-JavaScript state
every other mock ships.

**The resting picture is not one picture, and that is deliberate — round 1 said "the complete scale" in two
places without reconciling them, which the critic caught.** The *scale* — spine, 104 ticks, 50 majors — is
identical in every state. The *marker* is not:

| State | The marker at rest | Why |
|---|---|---|
| Scroll-driven animation available | `scaleY(0)`, invisible until the reader enters the stage | It is a position indicator, and at the top of the document the reader has no position on the stage yet |
| Reduced motion, or any engine without `animation-timeline` | full length | There is no scroll progress to report, so the element stops being a marker and becomes what it is drawn as: the spine at 4px instead of 1px. It asserts no position, because a 4px line that never changes is a rule, not a reading |

Neither state hides anything a reader needs. `qa/stage-reduced-motion.jpg` is the second row; `qa/stage-normal-top.jpg`
is the first.

## Composition and the sticky guard

| Range | Scale | Stage |
|---|---|---|
| Under 768 | horizontal, full width, above the stage; sticky at `top: 0` from 560px of height, ordinary flow below that | one column: frame, then prose |
| **768 to 1023** (revision 1 left this undefined) | horizontal, as above | two columns: frame `minmax(0, 20rem)`, prose beside it |
| 1024 and above **with at least 700px of height** | vertical, down the left, `position: sticky; top: 0`, `block-size: 100svh` | two columns, a 24rem plate and the prose beside it; each movement is **half a screen** (`min-block-size: calc((100svh − 14rem) / 2)`) with its content centred, and each plate carries a rule from its own top edge across the column gap to the spine |
| 1024 and above **under 700px of height** (V15 1366 by 648, V19 1024 by 576) | horizontal — a 155-tick-dense rail in a 480px column is a hairline nobody reads | two columns |

Sizing is `svh`, never `vh`, with a `vh` line first as the fallback for engines without `svh`. The guard is not a
single V10 media query: after the 6rem inset V18 leaves 160px and V10 leaves 246px, and both fall below the
560px threshold into ordinary flow. Every row was measured, the zoom row included.

The first screen and the compare-anchor band are one flex block sized to `calc(100svh − 4.3125rem)`, so the
anchor's closing rule lands about 12px above the fold wherever the content is shorter than the screen. Before
that, four wide rows reported a false floor: the screen read as finished with a band of dead cream below the
door lines. Where the content is taller than the screen — every phone row — the min-height never binds and the
anchor simply follows the two door lines.

## Composition: what round 1 got wrong, and what changed

The critic measured it rather than describing it, and the measurement was right. Each movement box
was a whole screen (`calc(100svh − 14rem)`, 676px at 1440 by 900) against a 267px plate, so **409px —
60% — of every movement screen was empty cream**, and 64% at 1920 by 960. The rail was 64px of a
1216px wrap with nothing aligned to it. A page whose thesis is "the scale is the page's spine" was
arranging three small plates beside an artefact in the margin.

Three changes, all inside the `1024 / 700px` branch:

| Change | Before | After |
|---|---|---|
| Movement box | a whole screen, `calc(100svh − 14rem)` | **half a screen**, `calc((100svh − 14rem) / 2)` |
| Plate | `minmax(0, 20rem)` column, `max-inline-size: 22rem` → 320 by 267 | `minmax(0, 24rem)` column, `max-inline-size: 24rem` → **384 by 320** |
| Alignment to the rail | none | each plate draws a 1px rule from **its own top edge** across the column gap to the spine, so the three movements are three points **on** the scale |

Measured after, with the same method (box height against the tallest thing in it):

| Row | Movement box | Tallest content | Slack | Was |
|---|---|---|---|---|
| 1440 by 900 | 338 | 320 | **5.3%** | 60% |
| 1920 by 960 | 368 | 320 | **13.0%** | 64% |
| 1280 by 720 | 320 | 320 | **0%** | — |
| 768 by 1024 | 267 / 267 / 348 | same | **0%** | 0% (the row the critic held up as proof the content was not the cause) |

One more change the critic did not ask for, and the reason. The rail was pinned at the source's
`top: 6rem`, which in the source is the band a sticky site header occupies. **This page's header is
not sticky**, so that inset left 96px at the top of the viewport with no spine in it — and with the
new tie rules, a plate whose rule landed in that band pointed at nothing. The rail now fills the
viewport (`top: 0`, `block-size: 100svh`). The 6rem was the source's *reason*, not its rule.

### Does the motion force the composition? Partly, and here is the number

The critic's sharpest point, and it deserves a straight answer: the long stage existed because the
marker needed distance. **Fixing the composition shortened the travel, and I did not put any of it
back.**

| Row | Marker travel, before | after | Stage height, after |
|---|---|---|---|
| 1440 by 900 | 1320px | **306px** | 1206 |
| 1920 by 960 | 1416px | **336px** | 1296 |
| 1280 by 720 | 1056px | **432px** | 1152 |
| 768 by 1024 | 111px | **111px** (unchanged; this row never had the min-height) | 1135 |
| 375 by 629 | 1099px | **1099px** (unchanged; the phone stacks and is naturally tall) | 1728 |

So both halves are true, and both belong on the record beside the adoption of V13:

1. **The composition was downstream of the motion, and that was a fault.** A layout should not be
   stretched to give an indicator room to move. It has been un-stretched.
2. **The scale is not wrong at 306px, but the device is thinner on desktop.** The marker remains an
   exact proportion of the stage — that is what `contain 0% → contain 100%` means — so it never
   misreports where the reader is. What it loses is dwell: at 1440 by 900 the whole sweep now happens
   inside a third of a screen of scrolling, and at 768 by 1024 inside 111px, which is close to
   instantaneous. **On the phone, where two thirds of GT's sessions are and where the stage is
   naturally 1728px tall, the travel is unchanged at 1099px and the device is at its best.**

The honest reading is that **V13 earns its place on the phone and is marginal on a wide desktop**,
and that a reviewer who wants it to feel substantial at 1440 is asking for exactly the stretched
layout this iteration removed. That is the strongest argument against the move, it is now measured,
and it sits here next to the decision to adopt it provisionally.

## Fold: the measured run

Pasted from `qa/fold.md`, the run that produced this file. **All required rows pass; the runner exits 0.**

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 89 | 322 | 351 | 472 | 576 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 57 | 292 | 321 | 442 | 546 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 263 | 292 | 413 | 517 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 263 | 292 | 413 | 517 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 266 | 295 | 416 | 520 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 282 | 319 | 447 | 560 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 264 | 293 | 414 | 519 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 235 | 264 | 385 | 490 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 279 | 316 | 445 | 557 | yes | report: page height 9365 |
| V10 | 750 by 342 | fold | 318 | 57 | 148 | 174 | 271 | 271 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 262 | 300 | 447 | 447 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 268 | 305 | 453 | 453 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 267 | 305 | 438 | 438 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 272 | 302 | 429 | 429 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 279 | 309 | 437 | 437 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 317 | 355 | 508 | 508 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 317 | 355 | 508 | 508 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 89 | 353 | 382 | 503 | 607 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 251 | 281 | 406 | 406 | yes | report: scrollWidth 1024 |

The five rows the brief asks to be summed, against their limits. These are the measured bottoms above, not estimates.

| Viewport | Limit | Last required element (the second door CTA) | Headroom |
|---|---|---|---|
| 375 by 629 (V2) | 605 | 546 | 59px |
| 414 by 715 (V5) | 691 | 520 | 171px |
| 750 by 342 (V10, landscape recipe, h1 stepped to `--text-xl`) | 318 | 271 | 47px |
| 1280 by 720 (V14) | 696 | 429 | 267px |
| 1440 by 900 (V16) | 876 | 508 | 368px |

Other rows from the same run: reduced motion PASS; root font doubled at V2 PASS (no horizontal scroll at 375
with a 32px root); console PASS, no errors; both marks kept under forced colours in both palettes; both
protected focus rings at 13.88:1 and 14.58:1 against their own retained grounds; every interactive target at
least 44px tall at 320, 375 and 1440; mark geometry within 0% aspect skew, 27.9px at 390 and 32px at 1440 for
the header and footer marks, with the three frame marks larger.

## Assets

| Asset | Where | Treatment |
|---|---|---|
| `../shared/img/gt-school-logo-h.svg` | header lockup, footer plate, story frame 2 | The shipped mark, unmodified. `alt="GT School"` on the header and footer links; `alt=""` and `aria-hidden` in the frame, because the frame's own mono label already says "Georgetown Campus" in text and a second accessible name would double it |
| `../shared/img/gt-anywhere-logo-h.svg` | footer plate, story frame 3 | **Every instance on a `--color-navy` plate**, including the frame: the wordmark is part near-white and disappears on `--color-surface`. Same alt treatment |
| `../shared/img/gt-icon.svg` | story frame 1 | The square icon at 56px (K12 V2). It gets no plate because nothing is lost if it has none: it is decorative, `aria-hidden`, and the frame's own label names the school in text. **Round 1's stated reason — "single-colour artwork, so forced colours recolours it whole" — was wrong**, and the critic measured it: forced colours leaves an `<img>` alone, so the icon stays in its own orange in both palettes (2.24:1 on a forced white ground). It carries no meaning, so the measurement changes nothing, but the reason given was false and is corrected here |
| Photographs | none | **No photograph anywhere.** Every file in `shared/ASSETS.md` shows identifiable children, re-checked 2026-09-11, and AD-11 covers child imagery whether or not a face is visible (DD-42 option a, RF-25) |

**Which mark stands for what, stated plainly.** Georgetown Campus has no mark of its own: gt.school's mark *is*
the GT School mark. So the three frames read as the icon for the school before either door existed, the GT School
wordmark for the campus that gt.school publishes, and the GT Anywhere wordmark for the virtual school. If that
reads as ambiguous to a reviewer, it is a real ambiguity in the estate's mark set, not a shortcut here.

**The photographed fallback, after Nari's written permission.** One photograph per frame, filling the frame at
its 6:5 ratio, at most 720 CSS px wide, each with its one-sentence caption from `copy.md` section 9 and each
crop taken from the CONTRACT section 5 table. The frame is already a bounded plate with its own padding, so the
mono label and the Literata heading move onto a solid `--color-bg` band inside the frame rather than onto the
image, which keeps every pairing at AA without a scrim. Frame 3 keeps its navy plate whether or not it carries a
photograph. Nothing else on the page changes.

## What was deliberately not taken from the source

| Not taken | Why |
|---|---|
| **The estate's light gold `#ebba9b`**, which is what the source's 104 inner bars are actually drawn in | It measures **1.61:1** on `--color-bg` and **1.46:1** on `--color-surface`. A scale that carries the page's argument cannot be drawn in a colour that fails 3:1. This is a contrast refusal, not an accent-budget one |
| **The three photographs** in the source section | Every one shows identifiable children. DD-42 option a and RF-25 apply exactly as everywhere else |
| **The illustration behind the source's stage** | A Webflow asset whose licence is unrecorded (`SOURCE.md`, Rights). We do not own it and do not reproduce it |
| The two `is-hour` marks | They read as a clock. This page makes no claim about hours |
| The second, mirrored rail on the right of the source's stage (`is-full-right`, rotated 180°) and the two faders | One rail carries the same 104 ticks in the same two runs, and the brief's composition puts the scale down the left. The faders would soften both ends of the scale, and the brief asks to show that neither end is clipped |
| The source's `opacity: 0` behaviour | A static declaration in a segment with **zero** `data-w-id` attributes is not evidence of a scroll trigger. This page paints every tick at all times and animates only the position marker |

## Departures

Values outside the token set (DD-19), each with its reason. `styles.css` contains **no raw hex**: every colour is
a `var(--…)` or a forced-colours system keyword.

| Value | Where | Reason |
|---|---|---|
| 1px hairlines; 4px position marker; 2px and 3px focus bands; 44px target floor | throughout | K3 section 5d for the rings, BUILDER-BRIEF rule 11 for the target; the token ladder has no sub-`--space-1` step for a hairline |
| `--p: calc((100% - 1px) / 103)` and the multipliers 2, 48, 54, 102 | the scale | The source's own count arithmetic: 104 positions, majors on every second one, two runs of 52 |
| tick widths 30% and 45% of the rail | the scale | The source's declared `.timeline_small-line` and `.is-bigger` widths, read from `story-rules.css` |
| `aspect-ratio: 6 / 5` | story frames | The source's declared frame ratio |
| `--fs-tail` 4.3125rem; `.overture` `calc(100svh + 1rem)` | first screen, overture | Fold arithmetic: the anchor rule 12px above the fold, and the scale on the third screen |
| thresholds 560px, 700px, 768px, 1024px, 1440px, and `max-height: 479px`/`min-width: 700px` | media queries | The measured breakpoints of this layout and the contract's landscape recipe |
| `.story .wrap { max-width: 76rem }` | story band | The container token is 90rem; a story read as one column needs a narrower measure |
| `.overture-line` at `--text-lg` and `46ch` | overture | The story's opening is set one step above body prose as a lead. Still Inter Tight 400 at `--leading-prose`. The rest of the story prose is `--text-base` exactly as the brief states |
| `35ch` h1 cap, `22ch` h2 cap, `65ch` prose | throughout | Contract and RF-55 |
| `min(100%, 15rem)` on frame marks; `3.5rem` icon | story frames | Width-driven sizing keeps the aspect exact at every width (measured 0% skew); 56px is K12 V2's icon size |
| `--space-7` short rule, `--space-9` tail hairline, `--space-8` stage gap | story | The source's 2.75rem, 5rem and 4.5rem taken to the nearest token rather than reproduced literally, because the token ladder is the contract |
| **`motion.css` as a second stylesheet** | page head | The pattern M34 established, and what the brief asks for. Round 1 disclosed that R10 scanned `styles.css` only, so this file's keyframes were not mechanically gated, and declined to edit the shared rule. **R10 now reads every `motion*.css` in the folder**, and a new rule requires a scroll timeline to be disabled *by name* under reduced motion, because zeroing a duration does nothing to a scroll-driven animation. Both pass; 38 of 38. No longer a departure, kept here as the record of why the file is separate |
| `.mv { min-block-size: calc((100svh − 14rem) / 2) }`, the 24rem plate column, `.frame::before` tie rule | the desktop stage | The Composition fix. Measured before and after in "Composition: what round 1 got wrong" |
| `.scale { top: 0; block-size: 100svh }` instead of the source's `top: 6rem` | the vertical rail | The source's inset is the band its sticky site header occupies; this page's header is not sticky, so the inset left 96px of viewport with no spine in it and the plates' tie rules pointed at nothing. Same section |

## Flagged slots

| Flag | What ships |
|---|---|
| Q-007 application steps | The four steps from `copy.md` section 5 |
| Q-011 tuition | "Tuition on request. Ask admissions." / "$10,400 a year…" |
| Q-013 after 8th grade | "Families plan the path after 8th grade with admissions." |
| Q-019 outcome figure, Q-033 accreditation | **Absent from the page by decision** (G0.5 items 2 and 3). No accreditation claim, no Cognia mark, no outcome figure |
| Q-021 TEFA window, owner, expiry | The TEFA module ships to everyone (D-015 option c) with no window stated |
| Q-002 current families | community.gt.school, as the deck names it |
| R14 / MD-02 tour label | "Ask about a tour of the Georgetown campus" |
| DD-43 repeated cells, R14 tour label, section 9 vocabulary | All proposed, not agreed |
| **The story band** | Quoted copy, not in `copy.md`, Nari's to approve — and the 2026 launch year is a gap, not an omission |

## Parent questions

| Question | Where this page answers it |
|---|---|
| PQ-01 What is GT School? | h1, and the story band |
| PQ-02 Is it for my child? | Comparison "Admissions", proof strip, steps line |
| PQ-03 In person or online? | The two doors, first screen and again after the table |
| PQ-04 Where is the campus? | h1, "Where and how", footer facts |
| PQ-05 What does a day look like? | Comparison "The day" |
| PQ-06 Cost and TEFA? | Comparison "Tuition and access", TEFA module |
| PQ-07 How do I apply? | "How to apply", both scoped application links |
| PQ-08 Who teaches my child? | Comparison "Guides", proof strip |
| PQ-09 How much in-person time does GT Anywhere have? | Comparison "In-person time" |
| PQ-10 Results and accreditation? | **Deferred by decision.** The page is silent and points to admissions through "Talk to admissions" |
| PQ-11 After 8th grade? | Comparison row, deferred to admissions |
| PQ-12 Current family? | Header link and the families section |
| PQ-13 Not ready to apply? | Secondary CTAs |
| PQ-14 Part of Alpha School? | The provenance line, once. The story's own first sentence names the relationship a second time in Nari's unapproved copy; **that is a prominence decision (MD-17), not a disclosure one**, and it is hers |

## Self-check

| Check | Result |
|---|---|
| `grep -c "<form"` | 0. No `<form>`, `<input>`, `<select>`, `<textarea>` or submit button anywhere |
| `grep -c "<script"` | 1 — the JSON-LD block. No JavaScript of any kind |
| External requests | None. `../shared/tokens-v2.css`, `../shared/fonts.css`, `styles.css`, `motion.css`, three local SVGs, and the fonts the shared file loads from `/assets/` |
| Copy | `copy.md` verbatim for every fixed slot; the story band quoted and flagged above |
| Numbers on the page | Only the deck's, plus "8th grade", the phone number and the sources date. The scale carries none |
| `node 0_plan/tools/shots.mjs 0_plan/mockups/M33-the-scale` | **exit 0**, all required rows pass |
| `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M33-the-scale` | **38 pass, 0 fail** — including the two new motion rules: keyframes only under a named MN row, and a scroll timeline disabled by name under reduced motion |
| `python3 1_spec/tools/check-claims.py 0_plan/mockups/M33-the-scale/index.html` | **OK** (with the digit-pattern limit stated above) |
| `python3 0_plan/tools/check-links.py` | **OK** |
| 390 by 844 first screen | Header, h1, provenance line and both door CTAs above the fold, with the second CTA at 557 of 820 and the door lines cut by the edge |
| The scale complete at rest | Captured at scroll position zero and at the stage without scrolling further: 104 ticks and 50 majors drawn, marker at zero. Verified again under forced colours in both palettes at the stage's own scroll position |
| The stage captures | `node 0_plan/mockups/M33-the-scale/qa/stage-captures.mjs` — checked in, with its output: seven stage frames, three magnified rail crops and `qa/stage.md`. Round 1 ran these checks and kept nothing; they now ship |

## What is unresolved

| Item | State |
|---|---|
| **MN-17 / V13** | **Adopted provisionally and narrowly**, under delegation from Johnny; reviewed again the first time a second direction wants it. The measured argument against it on wide desktops is in "Does the motion force the composition?" and should be read beside the adoption |
| The marker's dwell at 768 by 1024 | 111px of travel: the stage there is 1135 against a 1024 viewport, so the sweep is close to instantaneous. Pre-existing, not introduced by this iteration, and not fixable without stretching the tablet layout the way the desktop one was stretched |
| The two `[…]` gaps | **Kept, deliberately, against the critic's suggestion.** The brief allows "leave it out **or** leave a gap"; deleting "in 2026" would make a quoted sentence read as if the source never named a year, with no mark that anything was removed. A visible `[…]` is the honest form of a withheld figure and matches how the speed clause is withheld two movements earlier. It does read as an interruption at 375, which is the cost. The story band is Nari's, so the call is hers |
| The runner's V18 next-band line | **Reported here, fixed in the tool, now resolved.** The runner used to tell every mock that nothing was visible below the last CTA on the 320 by 256 row, which that row's own capture contradicted. The cause was that the last CTA sits past the edge on a 256px viewport, so the measurement skipped every piece of ink and never moved; the sentence was literally true and said nothing about the screen. `0_plan/tools/shots.mjs` now reports that the test does not apply, and why. The row was reported rather than fixed from inside this mock because the runner is shared and another agent was in it |
| D-039 | Escalated. Irrelevant to this page, which carries no script — but the page's no-JavaScript state is the only state it has |
| The story copy | Nari's. Quoted verbatim from a live page, not from the deck |
| The 2026 launch year | No register row. Withheld, not filled |
| CR-036 and CR-037 | Unverified, on the page in words, invisible to the digit-based checker |
| The position marker's ink | `--color-border-strong` per the brief, distinguished by weight. `--color-accent-text` at 5.14:1 is the measured alternative if a reviewer finds it too quiet |
| Continuity to gt.school | `CONTINUITY.md` measures the Anywhere handoff only. **The Georgetown handoff is unverified**: gt.school has no mirror in this repository, and the text extract in `kb/exemplars/gt-story/` is labelled source analysis, not a rendered comparison |
