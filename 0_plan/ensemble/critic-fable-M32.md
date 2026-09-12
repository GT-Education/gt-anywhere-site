# Critic pass: M32 "The Two Panels" (Fable, design director's critic)

| Field | Value |
|---|---|
| Mock | `0_plan/mockups/M32-the-two-panels/` — `index.html`, `styles.css`, `RATIONALE.md`, `qa/` |
| Critic | Fable, 2026-09-11. Captures read first, source second, rationale last |
| Read with the Read tool | `V2.jpg`, `V5.jpg`, `V10.jpg`, `V11.jpg`, `V13.jpg`, `V14.jpg`, `V15.jpg`, `V16.jpg`, `V18.jpg`, `V19.jpg`, `V2-full.jpg`, `V14-full.jpg`, `V2-rootx2.jpg`, `forced-colors.jpg`, `focus-cta.jpg`, `focus-plate.jpg`, `focus-footer.jpg`, `focus-footer-plate.jpg` |
| Re-run by the critic, not taken on trust | `qa/M32-measure.mjs` (full 19 rows); `python3 1_spec/tools/check-claims.py`; `python3 0_plan/tools/check-mocks.py`; nine WCAG ratios recomputed from `tokens-v2.css`; a critic-written Playwright probe (scratchpad, not in the repo) for the accessibility text of both panels, the reprise pair's geometry and the `.panel-line` boxes |
| Reference read | `0_plan/kb/briefs/M32.md`, `0_plan/kb/briefs/CONTRACT.md` v2.1, `0_plan/kb/K3-color-accessibility.md` §5f and §5g, `0_plan/mockups/shared/copy.md`, `tokens-v2.css`, `CONTINUITY.md`, `0_plan/12-claims-register.md` |
| Verdict | **ITERATE.** Eight rows at 4 or above, one row at 3 (Craft). The gate needs 4 on all nine, so it does not open |

---

## The six things the brief told me to test rather than trust

### 1. Panel parity: what the script measures, and whether the panels *read* equal

**The number is real.** I ran `qa/M32-measure.mjs` myself: worst delta **0px** across all nineteen rows on all seventeen keys. Nothing is fabricated.

**What the script measures:** the panel box (`w`, `h`), its four paddings, the mark plate box (`plateW`, `plateH`), the mark's *height*, and the x/y offsets of the label, the name and the CTA plus the CTA box. That is a genuine and well-chosen geometric set, and `ctaY` is measured from the panel floor (`box.bottom - cta.bottom`, line 60), which is the right way to prove the two controls share an edge.

**What it does not measure, or measures and drops:**

| Property | Where it stands | Why it matters |
|---|---|---|
| `markW` | **Collected at line 57, excluded from `keys` at line 116** | The one genuinely asymmetric geometric property on the page — 139 vs 168 at V14, 120.5 vs 145.7 at V2 — is computed and then kept out of the printed table and the verdict. The `RATIONALE` discloses it in prose (Residual table), so this is a presentation choice, not a concealment; but a reader who runs the script is shown seventeen zeros and no asymmetry at all |
| Every colour | Never read | The script never touches a computed colour. The plate grounds differ by 12.79:1 (see below). No number in the harness can see that |
| `.panel-line` | No row of its own | The element whose text length actually differs has no measured box. I measured it: at V14 the Georgetown line box is **79.6px (3 lines)** and the Anywhere **53.1px (2 lines)**, and the gap from line bottom to CTA top is **16px left, 42.5px right**. Both CTAs still share a top and a bottom edge to 0.0px, so the harness reports perfect parity while one panel carries 26.5px more void above its control. Visible in `V14.jpg`. Disclosed as a residual; invisible to the test |
| The reprise pair | Outside the selector `.first-screen .panel` (line 43) | `styles.css` line 250 makes an explicit equality claim for the reprise ("an unequal pair here would be the ranking DD-26 (a) forbids, just lower down the page") and the harness never checks it. **I measured it: 0px across fourteen properties at V2, V5, V11, V13, V14, V16, V17.** The claim is true; it is simply untested by the mock's own instrument |
| The pass bar | `worst <= 2 ? 'equal within 2px' : 'FAIL'` (line 130) | The enforced bar is 2px; 0.0 is the observed value. The headline should read "seventeen properties against a 2px bar, observed 0.0" |

**Do they read equal? No.** This is the finding of the pass. In `V13.jpg`, `V14.jpg`, `V15.jpg`, `V16.jpg` and `V19.jpg` the eye lands on the right panel first, every time. The cause is the mark plate: the Georgetown plate is `--color-bg` at **1.10:1** against its own tint with a `--color-border-strong` hairline at **3.31:1** — it is nearly invisible; the GT Anywhere plate is `--color-navy` at **12.79:1** — a solid black-green chip. Count the navy objects the way the RATIONALE counts the source's: **right panel 2 (plate + CTA), left panel 1 (CTA).** The mock measured the source's imbalance by counting type objects, lines, characters and saturated fills, and never ran that count on itself.

The artwork constraint is real and correctly stated (`copy.md` §8, CONTRACT §1, checker R16: the GT School mark is navy lettering and needs a light ground; the GT Anywhere mark is white lettering and needs navy). But the constraint forces the *ground*, not the *weight*. A `--color-navy` 1px border on the Georgetown plate — **12.63:1 on its tint**, against the 3.31:1 hairline it has now — would make both plates read as navy-bounded objects of equal weight while each mark keeps the ground its artwork needs. That is a one-token change and it is the single thing standing between this component and its own thesis.

### 2. Zero accent uses on the first screen: decision or fault?

**Sound reasoning on a contestable reading — and it should have been escalated, not resolved in a Departures cell.**

The design argument is strong and specific to this direction: the source spends its one saturated colour on **one of the two doors**, which the RATIONALE counts as a third of the measured imbalance; inside a frame whose whole claim is parity, an accent either lands on a door and re-creates the defect, or on the frame and is ornament. Applied consistently, the page carries navy as its only structural colour and orange only as the leaf inside each mark — once per panel, identical on both sides. That is not a fault dressed as a decision.

Two things keep it from being settled:

- The warrant is asserted more firmly than the source supports. `K3` §5f ends: *"One accent event per screen (P11). The rubric's 'accent spent once per screen' line is enforced by counting, not by judgement."* The Departures cell reads that as "caps the accent at one per screen; it does not require one". That is a fair reading of a budget, but the brief's own Colour row says **"One accent use on the first screen"** in the imperative, and CONTRACT §4 repeats it as a rule line. The RATIONALE presents its reading as settled. Under the project's own unknowns rule this is a `Q` or a register row with both readings, not a departure resolved in-file.
- The argument is not exhaustive. It rejects "on one door" and "on the frame" and never considers the third placement: the one first-screen element that belongs to **both** doors equally — the compare anchor, "Not sure which is right for your family? Compare the two." An accent underline there (using `--color-accent-text` #a5501a at 5.14:1, which the mock never uses anywhere) spends the budget without ranking either door.

### 3. Two DOM copies below 768: does assistive technology meet the content twice?

**No. The technique is correctly implemented.** I extracted the rendered text of both panels at two viewports:

| Viewport | `.panel-line` | `.door-lines` | What AT gets |
|---|---|---|---|
| 1280×720 | `display: block` | `display: none` | Line inside the panel, once |
| 375×629 | `display: none` | `display: grid` | Line below the frame, once |

`.panel-line` is `display:none` by default (line 181) and turned on only inside `@media (min-width: 768px) and (min-height: 700px)`; `.door-lines` is hidden inside that same query (line 207). The two rules are mutually exclusive by construction, so exactly one copy exists in the accessibility tree at every viewport. No duplicated heading either: the run-in below the frame is a `<span class="run-in">`, not a heading, and the only heading in the region is the visually hidden `h2` "Two ways to attend".

**But there is a duplicated accessible name, and it breaks parity in the tree the way the plate breaks it on screen.** The rendered text of the two panels, at both viewports:

```
georgetown: [img alt="GT School"]  "In person"  "Georgetown Campus"  …  "Explore the Georgetown campus"
anywhere:   [img alt="GT Anywhere"] "Online"     "GT Anywhere"        …  "Explore GT Anywhere"
```

The Anywhere panel announces its own name **three times**; the Georgetown panel announces a *different* brand ("GT School") immediately before its name, which a screen-reader user can reasonably take as the door's title. The marks are decorative in this position — the name follows as text in both panels — so `alt=""` on both `.panel-mark img` restores parity in the tree and removes the misdirection. One-line change, and the parity harness cannot see the defect it fixes.

**Correction to the RATIONALE's breakpoint description.** The Departures and compact-door tables say the swap happens where the panels are stacked or the room is short; the brief and the task note say "below 768 wide". The actual condition is `min-width: 768px` **and** `min-height: 700px`. That means **13 of the 19 matrix rows do not get the brief's complete panel** — including V15 (1366×648) and V19 (1024×576), which are ordinary laptops, not phones. CONTRACT §2's compact door rule is explicitly height-keyed ("On viewports under 700px tall"), so this is contract-compliant; but on a 1366×768 laptop, per `V15.jpg`, a parent sees two door names and two buttons above the fold and the sentences explaining them cut by the bottom edge. That is a real cost of the fold budget, and the RATIONALE's compact-door table records V15 correctly under "Otherwise". It is a trade, honestly filed, worth Nari seeing.

### 4. The RATIONALE's fold figures against `qa/fold.md`

I diffed both tables mechanically rather than trusting R37.

| Table | Result |
|---|---|
| The 19-row matrix (§"The runner's own table") | **19 of 19 rows byte-identical to `qa/fold.md`.** Clean |
| The four designed-to sums | V2 545.2 est. / 545 measured; V5 590.6 / 591; V14 622.8 / 623; V16 691.2 / 692. All within 1px, all matching `fold.md`'s CTA columns |
| The h1 line-count table | Reproduced by the script's own `--h1` mode; the contract's estimates (6 at V2/V5, 4 at V14/V16, 3 at V10) are confirmed |
| The "next band" table | **18 of 19 rows verbatim. One row rewritten.** See below |

The one drift, and it is not mechanical:

| Source | V18 cell |
|---|---|
| `qa/fold.md` | "no content is visible below the last CTA at all, so nothing signals that the page continues" |
| `RATIONALE.md` | "the reflow row is 256px tall; the header and the seven-line h1 alone reach 310, and DD-44 does not apply the fold rule here" |

The table is introduced as **"The runner's own reading, pasted from `qa/fold.md`"**. The only negative cell in the entire run is the only cell that was not pasted; a rebuttal was substituted for the finding under a claim of quotation. The rebuttal is even true — DD-44 does not apply the fold rule at V18 — which makes the substitution unnecessary as well as wrong. It belongs in a sentence under the table, with the runner's words left standing.

Second drift, smaller: the RATIONALE cites the run as `2026-09-11T23:55:03.933Z` at line 129 and again at line 509; `qa/fold.md`'s own header reads `2026-09-12T00:03:53.204Z`. The numbers happen to be identical between the two runs, so nothing is misreported — but the cited artefact is not the artefact on disk, which is exactly what R37 exists to catch.

### 5. Every figure against `0_plan/12-claims-register.md`, and the withheld 3X clause

**Clean.** I re-ran `python3 1_spec/tools/check-claims.py` and got the same six rows with the same occurrence counts the RATIONALE pastes:

| Figure on the page | Row | Count | Status | Owner |
|---|---|---|---|---|
| 90th percentile | CR-011 | 4 | Unverified, public | Crystal |
| $10,400 a year | CR-021 | 1 | Unverified, public | Nari |
| four in-person weekends | CR-032 | 4 | Unverified, public | Nari |
| Two hours / 9 to noon | CR-033 | 2 | Unverified, public | Nari |
| Two to three hours | CR-034 | 1 | Unverified, public | Nari |
| weekly check-in | CR-035 | 2 | Unverified, public | Nari |

`check-mocks.py` returns **37 pass, 0 fail**, matching the pasted output. I grepped `index.html` and `styles.css` independently for `3x`, `4x`, `3-7x`, "learning velocity", "accredit", "ESA", "crucible", "SAT" and "1400": the only hit is `--text-3xl` in the stylesheet. **CR-039, CR-040, CR-041, CR-001, CR-003, CR-004 and CR-008 are all off the page**, and CR-022 ($10,474) is off it too.

This is the mock's strongest substantive act. It takes the estate's own routing component — which today carries an unqualified accreditation claim and a 3X velocity multiple in a single sentence — and ships the same component with zero unregistered figures, and it quotes the three converted claims in the rationale only, each cited to its row.

### 6. Forced colours and the focus captures, by eye

**Both wordmarks: yes.** In `forced-colors.jpg` (V14, light palette) both marks are whole and legible. The GT School mark keeps a light ground and the GT Anywhere mark keeps its navy chip, because `forced-color-adjust: none` is keyed on the **file** (`img[src$=…]`, lines 327–328) rather than on a wrapper — which is the right call and which I verified is necessary: the same two files appear in five places (header, both panels, both footer plates). The frame, both panels, both plates and both controls keep drawn borders when the tints and the navy collapse to Canvas, so the lattice survives; that is exactly what lines 313–319 promise and exactly what the capture shows.

**Focus rings: every captured one is visible.** Header lockup (`focus-plate.jpg`) navy ring on cream; door CTA (`focus-cta.jpg`) `--color-focus` ring at a 2px offset that lands on the peach tint, not on the navy frame — 7.46:1, and the self-check records that this was *fixed* after the capture showed no visible ring; footer GT School plate (`focus-footer-plate.jpg`); footer "GT Anywhere" nav link (`focus-footer.jpg`).

**Two gaps against the brief's own acceptance row** ("Both wordmarks and both focus rings pass under forced colours in **each palette**"):

- There is **no capture of `.logo-navy:focus-visible`** — the footer's navy GT Anywhere plate, the single element on the page that uses K3's two-band ring (`--color-focus-on-dark` plus a 2px navy band, line 58). `focus-footer-plate.jpg` shows the *light* plate focused and the navy plate unfocused beside it. The one bespoke focus treatment is the one the eye never sees. `fold.md` measures it (14.58:1), but the brief says "the critics judge these by eye", and the eye has no image.
- There is **no dark-palette forced-colours capture**. `fold.md`'s forced-colours table lists "dark" rows, but every one of them says "kept by the image itself" — an assertion of retention, not a measurement, and the only image checked in is the light palette. "Both palettes" is therefore script-asserted, not eye-checked.

Also worth flagging on that table: it repeats the same three ring rows in both schemes without naming *which* mark link each belongs to, so it cannot be audited row by row.

---

## Scorecard

| Objective | 5 | The first screen is one routing object and nothing competes with it: two marks, two labels, two names, two controls, then the compare anchor. Both door CTAs are above the fold at every fold row — measured, not asserted (`qa/fold.md`, V1–V17 PASS; V2 at 375×629 puts CTA 2 at 545 of a 605 limit). Fourteen parent questions are mapped and twelve are answered on the page. The designed-to sums land within 1px of the measured bottoms at all four contract rows. Cost, honestly filed: below 700px tall the panel drops its explanatory sentence below the frame, so on V15 (1366×648) a parent gets two names and two buttons above the fold and the sentences cut by the edge |
| Composition | 4 | The lattice is a real idea and it holds: frame padding and gutter are one value (`styles.css` 138–140), so the navy reads as a grid around two rectangles rather than a border around one, and the square panels inside the rounded frame are the source's own construction. The height/width band split — width sets the lattice and side padding, height only the vertical rhythm — is a stated principle that was arrived at by fixing a real defect the captures exposed. The reprise re-uses the shape and I measured it equal to 0px at seven rows. Against that: the two mark plates are not equal in weight. Georgetown's plate is 1.10:1 against its tint with a 3.31:1 hairline; Anywhere's is 12.79:1 — navy objects 2:1 in the right panel's favour, visible in `V13`, `V14`, `V15`, `V16`, `V19`. **The change that would lift this to 5: put a `--color-navy` 1px border on the Georgetown plate (12.63:1 on its tint) in place of `--color-border-strong`, so both plates read as navy-bounded objects while each mark keeps the ground its artwork requires** |
| Typography | 4 | The italic device is the strongest continuity move on the page and it is properly sourced: `CONTINUITY.md` line 34 measures the estate setting its h1's second sentence in italic at weight 400 **in accent orange**, and line 43 records K12 F88's 2.38:1 on cream. M32 takes the slope and leaves the colour, at 17.69:1 — and keys it to the *clause* rather than the line, with the reason measured (the sentence sets in 4 to 7 lines across the matrix, so a line-keyed device would be different copy at every row). Line counts are measured in-browser at all nineteen rows and confirm the contract's estimates exactly. Faces follow CONTRACT §3 with the one permitted Inconsolata substitution declared (DD-01/DD-36 in Decisions applied, K12 F36 in taste decisions). **Not a 5 because the contract's Literata obligation is never discharged: CONTRACT §3 states Literata's content box is 1.485 em and stands 0.1675 em proud of a 1.15 line box, and requires every direction that sets a Literata heading over a tinted ground to carry that clearance. `.panel-name` is Literata `--text-xl` on a tint directly under a bordered plate, at `--panel-head-gap: --space-2` (4px) in the tightest band — roughly 3.75px of overhang against 4px of gap at V2. No capture shows a collision, but the clearance is met to within a quarter-pixel by accident rather than by calculation. State the number at the tightest band and the row is a 5** |
| Imagery | 4 | The absence is argued, not defaulted: both source panels are photographs of identifiable children, DD-42 (a) / RF-25 / AD-11 apply, and the replacement is not a grey box but each panel filled with its own school tint — measured at 1.01:1 against each other (I recomputed it: exactly 1.01), so the substitution cannot itself create the imbalance the direction exists to remove. The photographed state is specified completely — file, `object-position`, the 720 CSS px DPR-2 ceiling, the caption slot — and correctly refuses a one-photograph state because DD-42 requires parity and `shared/img/` holds no GT Anywhere classroom. The only artwork on the page is the two wordmarks, measured by the runner at 27.9px and 32px with 0% aspect skew on all ten instances. **Held at 4 by two evidence gaps, both named above: no dark-palette forced-colours capture, and the source screenshot this entire direction converts is not in the repository, so the "3 : 1 objects, 7 : 1 lines" counts that justify the correction cannot be checked by any reviewer (only the 24.7 : 1 character count is reproducible, from register text)** |
| Colour and surface | 4 | I recomputed nine of the stated ratios from `tokens-v2.css` — 1.01, 8.20, 7.46, 7.56, 1.69, 14.58, 3.63, 2.38, 5.14 — and **every one matches to the second decimal**. Zero literal hex in the stylesheet (K3 §5g CS1). Every running paragraph is at 16.10 or better, so CS3's AAA line is met with room. The palette usage map is explicit about navy doing the whole structural job. The forced-colours block adds real borders wherever a tint collapses to Canvas, and gives each opted-out plate its ring explicitly, because the UA ring only applies to elements that did not opt out — a subtlety most builds miss. **Not a 5 because the programme's own calibrated 5 for this exact row is half-satisfied: K3 §5g CS4 requires APCA Lc beside every ratio with no text node below Lc 60, and the RATIONALE reports zero Lc values; CS2's per-node computed-pair sweep at every viewport is not produced either. In fairness this is a programme-wide gap — I checked, and no mock in `0_plan/mockups/` reports a single Lc — so it is escalation material for Johnny rather than an M32-specific defect. Add Lc beside each ratio and the sweep to the runner. The zero-accent departure is treated separately above: sound design argument, contestable textual warrant, should have been a `Q` rather than a Departures cell** |
| Motion | 5 | Zero `transition:` declarations, zero `@keyframes`, zero `animation:` in `styles.css` — I grepped rather than trusting the self-check. The single move on the page is `scroll-behavior: smooth`, declared only inside `@media (prefers-reduced-motion: no-preference)` (line 20) and forced to `auto` in the reduce block (line 341), which is CONTRACT §6's V10 done exactly. The reduce block zeroes every duration on elements **and pseudo-elements**, verified by the runner at V14. V6 is fully specified — 300ms `--ease-out`, opacity plus an 8px rise, `IntersectionObserver` at `rootMargin: 0px 0px -15% 0px`, `unobserve` after the first hit, hidden state scoped to a class the script adds, the whole rule inside `no-preference` — and correctly **not shipped**, because D-039 is undecided and CONTRACT §6 says a mock ships its no-JavaScript state only. The brief asked for V6; the contract forbade it; the mock followed the contract and named the conflict. That is the argument this row wants |
| Mission and exclusivity | 5 | Exclusivity is selectivity throughout: "at or above the 90th percentile" in both table cells, the proof strip and the steps line; no price signal anywhere on the first screen; tuition appears exactly once, in a table cell, with the TEFA module immediately below it — access, not affluence. No wealth cue, no stock photography, no placeholder copy. Fact density under the frame is real: a nine-row comparison with repeated values where the schools genuinely agree (DD-43), the sources line twice with a checked date of 2026-09-10, four proof facts, four application steps. And the mission argument is made **on the page, not in prose**: this is the estate's own routing component, rebuilt with every figure carrying a register row and the accreditation claim, the ESA claim and the 3X multiple all removed — verified independently by `check-claims.py` and by grep. PQ-10 (results and accreditation) is deferred to admissions per G0.5 and the deferral is disclosed |
| Craft | 3 | The strengths are unusual: a bespoke parity harness that reproduces (I ran it), 37/0 on `check-mocks.py`, fold sums landing within 1px of measurement at four rows, and a self-check table that records five defects **found by looking at the captures** — the invisible focus ring on the door CTA, the runner naming a navy edge instead of text, a 499px scroll width under a doubled root font, V1/V5 finishing exactly at the fold, and the height band setting horizontal padding at V14/V15. That table is the most honest artefact in the folder. What pulls the row down is three separate cases of the evidence being presented more favourably than the evidence is: (a) the "next band" table is introduced as pasted from the runner and 18 of 19 rows are verbatim, while the **single negative cell in the whole run, V18, is silently replaced by a rebuttal**; (b) the run is cited twice as `2026-09-11T23:55:03.933Z` when `qa/fold.md` reads `2026-09-12T00:03:53.204Z`; (c) `M32-measure.mjs` collects `markW` and excludes it from the printed keys, so the one asymmetric geometric property never reaches the table or the verdict. Add the uncaptured `.logo-navy` focus ring, the uncaptured dark forced-colours palette, the unmeasured reprise pair, and a "targets under 44px" table that asserts a single row instead of enumerating. **The change that would raise this row: restore the V18 cell to the runner's own words and carry the DD-44 rebuttal as a sentence beneath the table, and re-cite the run at the timestamp `qa/fold.md` actually carries.** A rewritten negative cell under a claim of quotation is the exact failure this programme has had to enforce against before, and it has to be fixed before the folder can be called clean |
| Continuity | 4 | Checked against `CONTINUITY.md` rather than taken on trust: page ground `rgb(252, 244, 239)` (line 27), body text `rgb(0, 17, 23)` (line 28), Inter Tight and Literata (lines 29–30) — all match the tokens the mock uses. The italic device is genuinely the estate's (line 34, weight 400 italic in `rgb(228, 139, 83)`), and the colour is genuinely a 2.38:1 failure (line 43) correctly left behind. The declared differences are all named with reasons: heading weight 400 against the estate's 300/−1.6px (inherited from M03's test, not re-run, and said so), button weight 600 because `fonts.css` ships 400 and 600 only, footer nav case, no grain, no photographic hero, no orange fill. **Held at 4 by the one artefact the direction rests on: the two-door component on `gt.school/about-us` is not captured anywhere in this repository, and `gt.school` has no mirror, so the deepest continuity claim in the slate — "a parent who has seen the about page meets a shape they recognise" — is unverifiable here. The RATIONALE says the live site was not opened; it does not say the capture is unavailable to a reviewer. Check the screenshot in, or record it as an unverified source in `SOURCES.md`, and this is a 5** |

---

## Unresolved, for Johnny or Nari

| # | Item | Who |
|---|---|---|
| 1 | The accent reading. `K3` §5f — "One accent event per screen … enforced by counting" — supports both "at most one" and "spend one". The brief's Colour row is imperative. M32 resolved it in a Departures cell; it should be a `Q` or a `0_plan/07` row with both readings and both models' recommendations | Johnny |
| 2 | No mock in the programme reports APCA Lc, yet `K3` §5g CS4 makes it a condition of a 5 on Colour and surface and caps the row at 3 when unmet. Either the runner starts reporting Lc or §5g is amended. Scoring M32 alone against it would single out a programme-wide gap | Johnny |
| 3 | The source screenshot of the `gt.school/about-us` two-door panel is not in the repository. Every "Corrected, with the measurement" object and line count depends on it | Johnny / Nari |
| 4 | `.logo-navy:focus-visible` (the only two-band ring on the page) and the dark forced-colours palette have no capture, against a brief acceptance row that says the critics judge these by eye | Builder |
| 5 | Below 700px tall — which includes 1366×768 laptops — the door sentences fall below the fold. Contract-compliant (CONTRACT §2 is height-keyed) but it means 13 of 19 matrix rows do not show the brief's complete panel. Nari should see `V15.jpg` beside `V14.jpg` before G1 | Nari |

---

5/4/4/4/4/5/5/3/4

Objective/Composition/Typography/Imagery/Colour/Motion/Mission/Craft/Continuity

ITERATE
