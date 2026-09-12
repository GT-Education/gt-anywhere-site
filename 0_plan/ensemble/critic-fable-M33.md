# Critic's card: M33 "The Scale", second pass

Fable, design director's critic, 2026-09-12. Supersedes the round-1 card (in git history at `65f56e7~`).
Round 1 scored 4/3/4/4/5/5/4/3/4 and returned ITERATE on Composition and Craft; Astra scored 4/3/4/3/4/3/3/3/3.

Everything below was driven in a browser on a server I started (cached Chrome for Testing chromium-1234,
Playwright from the npx cache, scratchpad only — nothing written into the repo but this file). I re-measured
rather than read: geometry and the marker at 1440×900, 1920×960, 1280×720, 768×1024 and 390×844; fold offsets
at five rows; forced colours in both palettes; the rail crops analysed pixel by pixel; and the animation range
overridden at runtime to test the engineer's claim that the sweep cannot be widened.

## Scores

| Row | Score | Reason |
|---|---|---|
| Objective | 4 | The first screen routes: h1, provenance, two named doors with a navy CTA each, two differentiator lines and the compare anchor, all above the limit on every matrix row. I reproduced five of them exactly — 1440×900 gives header 57, h1 317, provenance 355, both CTAs 508 against a 876 limit; 375×629 gives 57/292/321/442/546 against 605 (`qa/fold.md` V16, V2). Both CTAs repeat after the comparison, both apply buttons in `index.html:288-289`, all four school links in the footer. Not 5: roughly 2,100px of story — a 916px overture screen plus a 1,206px stage (measured, 1440×900) — sits on the primary scroll path between the doors and the comparison, and the only bypass is the single `#compare` anchor at the first fold (`index.html:99`). There is no second compare entry inside or after the story |
| Composition | 4 | Was 3; the round-1 fault is fixed and reproduces on my own run, not the engineer's. Movement box against the tallest thing in it: 338/320 = **5.3%** at 1440×900, 368/320 = **13.0%** at 1920×960, 320/320 = **0%** at 1280×720. Something now aligns to the rail: `styles.css:244` draws a 1px rule from each plate's top edge across the 48px column gap onto the spine, and in my own 1440 capture (`scratchpad/shot-stage-a.png`) the rule, the plate's top and the prose's first line sit on one datum — three points **on** the scale, not three cards beside it. Not 5, for three measured reasons. (a) The rail is the band's spine, not the page's: rail at x=176 and plate at x=288, while h1, doors, compare eyebrow, table, proof heading and footer all start at **x=64** (1440; 80/192 vs 48 at 1280; 416/528 vs 304 at 1920). `.story .wrap { max-width: 76rem }` (`styles.css:137`) is declared in Departures and reasoned as measure, so it is a trade, not an oversight — but the direction's thesis is "the scale is the page's spine" and the page's spine is somewhere else. (b) The overture tail hairline sits at x=176 and the spine at x=240, so the device `styles.css:148` calls "dropping toward the scale below" misses the spine by 64px and the longest tick by 35px — plainly visible in `scratchpad/shot-seam-overture-stage.png`. (c) The overture spends a 916px screen on 157px of prose (measured), and `styles.css:140` justifies its height by the motion guard, which is the same "layout stretched for the marker" fault the critic named, in a surface the iteration did not look at |
| Typography | 4 | Contract roles applied cleanly: Literata h1 with deliberate breaks capped at 35ch, Inter Tight prose at `--leading-prose` capped at `--measure-prose`, Inconsolata labels uppercase. The Literata overhang arithmetic holds — at `--text-xl` the frame heading clears the plate's 24px padding in `shot-stage-a.png`. Rag is controlled at every width I looked at, four lines at 1440/1024 (`qa/V16.jpg`, `qa/V19.jpg`), three at 750 (`qa/V10.jpg`), six at 375 (`qa/V2.jpg`) with no orphan. Not 5: the type applies the contract rather than arguing with it, and the provenance line set small and grey directly under a four-line h1 (`qa/V16.jpg`) reads as a caption rather than as the affiliation statement MD-17 makes it |
| Imagery | 4 | No photograph anywhere, correctly grounded (DD-42a, RF-25, AD-11 — every file in ASSETS.md shows identifiable children). The three 6:5 plates carry the estate's own marks; the white-lettered Anywhere lockup gets the navy ground the brief requires (`index.html:159-161`), and my forced-colours run confirms all three marks keep their own colours in both palettes (`qa/stage-forced-light.jpg`, `qa/stage-forced-dark.jpg`). Not 5: plate 1 puts a 56px icon in a 384×320 tinted box (`qa/stage-normal-top.jpg`) — a lot of area for one glyph — and the three plates are branding tiles that carry nothing the prose beside them does not |
| Colour and surface | 5 | Cream ground, gold-lightest plates, and a navy plate that lands on the online school and doubles as the ground the Anywhere mark needs — one decision doing two jobs. Every line that carries the argument is `--color-border-strong`; the accent was measured at 2.38:1 and **refused**, the estate's light gold at 1.61:1 refused too (RATIONALE, "Colour, measured"). My forced-colours run confirms every line resolves to CanvasText in both palettes: spine 1px, majors 1px, tie rule 1px, marker 4px, black on light and white on dark |
| Motion | 3 | Scored on the page, not on the concession. On my own instrumented scroll the marker's entire sweep runs in **288–300px** at 1440×900 (the engineer's 306 at a finer step) and **108–110px** at 768×1024. Before that window it is `scaleY(0)` — absent — through the first screen, the overture screen and the stage's whole entry; after it, saturated for the remaining ~900px. Across the ~2,100px during which the rail is on screen at 1440, the page's one moving object is blank for about two fifths, moving for about a seventh, and full for the last two fifths. A position marker that is blank for the approach and saturated for the finish is not reporting position to a desktop reader. **The change that raises it: `animation-range: contain 0% exit 100%` in `motion.css:36` — one value, no layout change.** Measured on this page with the range overridden at runtime: sweep 300 → **1,200px** at 1440×900, 110 → **1,130px** at 768×1024, 1,090 → 1,720px at 375×629, and the start scroll is unchanged (1810 at 1440, 2060 at 768), so the "nothing driven before the third screen" guard is untouched. `cover 0% cover 100%` gives 2,100px but starts inside the overture and would breach that guard — do not use it |
| Mission and exclusivity | 5 | Exclusivity is carried by selectivity throughout: "selective school" in the h1, the 90th percentile in the comparison and the steps line, tuition present only as a factual row with TEFA beside it. No wealth cue, no stock photograph, no aspirational imagery, no luxury flourish. Affiliation is prominence, not disclosure — the provenance line under the h1 and the story's opening sentence (`index.html:75`, `:109`). Every speed multiplier is withheld behind `[…]` with CR-008 and CR-038 named. The engineer also raised **against itself** the adjacency of a filling measure to CR-037's unverified acceleration claim and routed it to the register's owner instead of burying it |
| Craft | 3 | Two halves that do not agree, and the summary is not "passes". **The evidence half is now excellent**, and I verified it rather than reading it: `qa/stage-captures.mjs` is checked in with seven stage frames, three 3× rail crops and `qa/stage.md`, and every claim in that table reproduces on my own run — 50 majors present in normal, forced-light, forced-dark and on the phone; the fine gradient painted normally (`repeating-linear-gradient(rgb(133,127,123) 0 1px …)`) and `none` under forced colours in both palettes and at 390; the marker 4px in every mode and both orientations. All 19 matrix rows in RATIONALE are verbatim from `qa/fold.md`, and five reproduce exactly on my run. Round 1's Craft charge is answered in full. **The citation half fails.** The page and its rationale state in four places — `index.html:45-46`, `index.html:166`, RATIONALE's withheld-figures table, RATIONALE's "What is unresolved" — that **no claims-register row holds** the 2026 launch year. **CR-028 holds it**: `0_plan/12-claims-register.md:50`, "GT Anywhere launched in 2026… attracted hundreds of students in its first months", asserting "2026 launch; 'hundreds' of students", Unverified, owner Nari. MN-17 already records the correction — Astra found it, Fable conceded it ("Fable confirmed CR-028 exists and covers both the 2026 launch and the 'hundreds of students' wording"), and it was routed to the M31 engineer; M33 quotes the same sentence and never took it. The rationale's "four claims rows the story touches" table omits CR-028 for the same reason. The withholding stays right — CR-028 is Unverified — but the reason given is false, and it is false in the shipped HTML. **The change that raises it: replace those four statements with CR-028 (Unverified, Nari), add CR-028 to the claims table, and keep the `[…]`** |
| Continuity | 4 | The page uses the estate's own marks and palette, rebuilds the source's own story device from a dated, checked-in extract rather than from memory (104 ticks in two runs of 52, majors on every second position, 6:5 plates, the short-rule vocabulary — all reproducible with `count.py`), and every outbound link carries `data-school`. Not 5, on the engineer's own record: the Georgetown handoff is **unverified** because gt.school has no mirror in this repository, and the story band's nine sentences are quoted from a live page and are **not** in `copy.md`, so the band a reader would judge continuity by is the one Nari has not approved |

## The six tests, answered

### 1. Does the desktop now argue?

Slack reproduces exactly: 5.3% at 1440×900, 13.0% at 1920×960, 0% at 1280×720. The fix is real and the number is honest.

On the harder question: **the rail reads as the story band's spine, not as the page's, and not as a decorative margin.**
It is no longer "lines pointing at it" — the tie rule terminates *on* the spine and starts at the plate's top edge, which is
also the prose's first line, so there is a genuine datum and three real points on the scale. What stops it being the page's
spine is measurable: the band sits on its own left edge and the rail's x agrees with nothing above or below it.

| Element (1440×900) | Left edge |
|---|---|
| h1, provenance, doors, compare eyebrow, table, proof heading, footer | **64** |
| Story band wrap | 112 |
| Overture lead-in hairline | 176 |
| Rail (column left) | 176 |
| Rail **spine** | 240 |
| Plate | 288 |

Two consequences. The rail begins and ends with the band and governs nothing else on the page. And the hairline meant to
lead into it is 64px off the spine and 35px off the longest tick — a lead-in that misses.

One caution about the metric. "Box height against the tallest thing in it" cannot see emptiness in the *shorter* column,
and the box is now sized to the plate, so the plate's column is full by construction. The prose cells at 1440 are
544 × 338 carrying 54, 159 and 288px of text — 16%, 47% and 85% filled. Movement 1 still pairs a 320px plate with two
lines of prose. The vertical fix is genuine; the pairing at movement 1 is not yet composed.

### 2. Is the marker worth having at 306px?

Not at 1440 or 768 as built, and that is a reason to lower Motion — Motion scores the page, and on those rows the page's
one move does not do what it is named for. It is a *separate* finding, belonging to MN-17 and not to the score, that the
move's adoption is only half-supported by this evidence.

But the adoption question has a better answer than refusal, and it is measured rather than argued:

| Row | `contain 0% contain 100%` (built) | `contain 0% exit 100%` (tested) | Start scroll |
|---|---|---|---|
| 1440 × 900 | 300px | **1,200px** | 1810, unchanged |
| 768 × 1024 | 110px | **1,130px** | 2060, unchanged |
| 375 × 629 | 1,090px | 1,720px | 1490, unchanged |

One declaration, no layout change, no guard touched. So the right verdict on V13 is not "earns its place on the phone and
is marginal at 1440" — it is "the range is wrong." The engineer's honesty here is exemplary and its conclusion is too
pessimistic about its own move.

This also **refutes the rationale's stated impossibility**: "not fixable without stretching the tablet layout the way the
desktop one was stretched" (RATIONALE, "What is unresolved"). It is fixable with a property value.

### 3. The stage evidence

`qa/stage.md` records what it claims and the captures show it. Verified independently, not read:

| Claim | My run |
|---|---|
| 50 majors in every mode | 50 in normal, forced-light, forced-dark, and at 390×844. Confirmed |
| Fine gradient painted normally | `repeating-linear-gradient(rgb(133,127,123) 0px, rgb(133,127,123) 1px, rgba(0,0,0,0) …)`. Confirmed |
| Fine gradient suppressed under forced colours | `background-image: none` in both palettes and on the phone. Confirmed |
| Marker at 4px throughout | 4px border-right when vertical, 4px border-bottom when horizontal, CanvasText in forced colours, in all modes. Confirmed |
| Rail crops at 3× | 240 × 1260px = 80 × 420 CSS px. Confirmed |

It settles the question the brief was revised to demand. This is the part of the iteration that is unambiguously done.

One observation the evidence surfaces and nobody has noted, **not scored**: under forced colours, where the fine gradient is
suppressed by design, the 50 majors are evenly spaced at 51–54px (3×) except for a single gap of **105px** — measured in
both `rail-forced-light.png` and `rail-forced-dark.png`. That is the run A / run B seam at positions 50→54. I checked
whether it is the mock's error: it is not. `count.py` on the checked-in extract returns `{2: 46, 4: 2}`, so the source has
the same gap in the same place and the mock is faithful. Worth knowing only because the one irregularity in the ruler is
most exposed to the readers the bordered elements exist for. In passing: `SOURCE.md` and `0_plan/kb/briefs/M33.md` both say
the two gaps of 4 "are where the first run's hour marks displace a major" — `count.py` shows one is an hour mark and the
other is the run seam. A KB error, not the mock's.

### 4. The rail's departure from the source

**Sound in substance; one clause of inference stated as fact.**

Verified: `.site-header` carries no `position: sticky` (`styles.css:64`), so "this page's header is not sticky" is true.
And the consequence is real and was created by the iteration itself — the tie rules the critic asked for require the spine
to reach the top of the viewport, or a plate whose rule lands in the top 96px points at nothing. A change whose cause is a
fix you were told to make is not a convenience.

Not verified: "The source pins its stage 6rem down **because** a sticky site header sits in that band"
(`styles.css:193-196`, and the Departures row). The checked-in extract holds the story section and 70 story/timeline rules
and says nothing about the source's header, so this is inference about the source's reason, which the brief itself tells
the engineer to label as such ("Describe the source as read, and label the rest inference"). One hedging word fixes it.
The departure is properly declared in the Departures table, which is the right instinct.

### 5. The fold figures

Checked against `qa/fold.md` on disk, not against the rationale's retelling. All 19 matrix rows in RATIONALE are byte-identical
to the file; the rationale cites the run correctly. Five rows re-measured on my own browser run:

| Row | fold.md | Mine |
|---|---|---|
| V16 1440×900 | 57 / 317 / 355 / 508 / 508 | identical |
| V17 1920×960 | 57 / 317 / 355 / 508 / 508 | identical |
| V14 1280×720 | 57 / 272 / 302 / 429 / 429 | identical |
| V11 768×1024 | 57 / 262 / 300 / 447 / 447 | identical |
| V2 375×629 | 57 / 292 / 321 / 442 / 546 | identical |

### 6. The two things kept against advice

**The bracketed gaps — defensible, with one condition.** The brief says "leave it out **or** leave a gap and name it", so
keeping the gap is inside the brief rather than against it; the page withholds the speed clause the same way two movements
earlier, so it is internally consistent; and a quoted sentence silently shortened is worse than one that marks the cut.
The condition: the notice lives in an HTML comment, so Nari sees `[…]` and not the reason. The explanation has to reach her
where she reads the mock. And with CR-028 found, the second gap is no longer a special case at all — it is an ordinary
Unverified figure, withheld for the ordinary reason.

**The 111px sweep at 768 — the finding is defensible, the stated impossibility is not.** Reporting it against its own move
was the right call. Calling it unfixable without stretching the layout is wrong, by measurement: `contain 0% exit 100%`
takes it to 1,130px with the layout untouched (test 2).

## What changed since the last card

| Round-1 finding | State now |
|---|---|
| Composition 3: 60% of each movement box empty at 1440, 64% at 1920 | **Fixed and reproduced.** 5.3%, 13.0%, 0% |
| Composition 3: nothing aligned to the rail | **Fixed.** Each plate ties to the spine with a real 1px rule; plate top, rule and first prose line share one datum |
| Craft 3: stage and forced-colours checks run, reported, images discarded | **Fixed.** Ten images, `qa/stage.md` and the script that made them are checked in, and every claim reproduces |
| "Composition downstream of motion" | **Answered for the movement boxes, un-answered for the overture screen**, which spends 916px on 157px of prose to put the scale on the third screen |
| Motion 5 (round 1) | **Lowered to 3.** The composition fix cut the sweep to 300px at 1440 and left 110px at 768, which the iteration disclosed and did not fix |
| — | **New: CR-028.** A claims-register citation that the register itself already corrected is still false in the shipped HTML, four times |

## Unresolved, and honestly so

- Whether the story band's nine quoted sentences may appear on a GT landing page at all. Nari owns it; the mock says so.
- Whether a 4px marker in the same ink as the ticks is loud enough at rest on a wide desktop. The rationale offers
  `--color-accent-text` at 5.14:1 as the measured alternative and leaves it to Johnny. I have no basis to settle it, and it
  is a different question from the range, which I have settled.
- The Georgetown continuity handoff, which cannot be checked from this repository at all.
- CR-028 and CR-036 both cover "hundreds of students" from the same source page. That is a register question for whoever
  owns `12-claims-register.md`, not a mock question.

**Two of the nine rows say no.** Motion 3 and Craft 3. Both have a single named change and both changes are small: one
property value in `motion.css`, and one stale citation replaced in four places. Everything else on the card passes.

Objective/Composition/Typography/Imagery/Colour/Motion/Mission/Craft/Continuity: 4/4/4/4/5/3/5/3/4

ITERATE
