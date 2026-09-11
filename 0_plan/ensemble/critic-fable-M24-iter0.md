# Design critic, Fable, M24 "One at a Time", round one, 2026-09-11

Independent: `critic-astra-M24.md` was not opened, and no other critic's card for this mock was read.
Scored against `17` section 6 with R15 applied, and against `mockups/shared/CONTINUITY.md` for the
Continuity row, which carries rendered evidence for the Anywhere handoff only — Georgetown has no mirror
in this repository, so it is marked unverified, not penalised.

Inputs read, in the order the assignment set them: `ensemble/prompts/DESIGN-CRITIC.md`; `kb/briefs/M24.md`
and `kb/briefs/CONTRACT.md` v2.1 (including section 3's new Literata row); `mockups/shared/CONTINUITY.md`;
the mock's `index.html`, `styles.css`, `RATIONALE.md` (all 430 lines) and `qa/fold.md`; **every capture in
`qa/`** — V1 to V19, `V2-full`, `V14-full`, `V2-rootx2`, the four `focus-*`, `forced-colors`,
`M24-focus-door-zoom`, and all eight per-beat captures in normal and forced colours. For the borrowing:
`~/projects/libraries/design/library-data.js` entries `insp-palebeat` (lines 1619–1648) and `insp-outship`
(1500–1527), and `examples/stillpoint.html` in full. `07-design-decisions.md` DD-48 read in full, with
DD-21, DD-38, DD-39, DD-46 and DD-47. `kb/CONCEPTS.md` C01–C43 for the Avoid rows.

Evidence marked **my probe** is a critic run of the built page on a server I started (`127.0.0.1:8231`,
the cached Chrome for Testing chromium-1234 through the npx-cache Playwright), with scripts written outside
the repository in the session scratchpad (`measure-m24.mjs`, `measure-lines.mjs`, `shots.mjs`). Contrast
figures marked **my computation** are WCAG 2.x relative-luminance ratios computed from `shared/tokens-v2.css`.
Both checkers were re-run read-only. Nothing in the repository was changed except this file. No production
host was opened.

**Capture freshness, checked first.** `index.html` 12:51:42, `styles.css` 12:58:30, `RATIONALE.md` 13:03:46,
`qa/fold.md` and every `qa/V*.jpg`, `focus-*` and `forced-colors.jpg` 13:05:3x–13:05:41. Those postdate the
last source edit, so the matrix evidence is the page as built, and `check-mocks.py` R37 passes against it.
**The eight per-beat captures and `M24-focus-door-zoom.jpg` do not:** they are stamped 12:52:2x and 12:56:12,
*before* the last stylesheet write at 12:58:30, so they are not evidence of the shipped build. I therefore
re-derived every per-beat figure myself in a browser at 1440×900, 1280×720, 390×844 and 375×629. They all
reproduce, so the images below are safe to read — but they should be re-taken so R37's discipline reaches them.

---

| Rubric row | Score 1 to 5 | Evidence you looked at (screenshot filename, crop, measurement) | What would make it a 5 |
|---|---|---|---|
| Objective (L1) | **5** | A parent can tell in person from online and act, at both rows the rubric names. `qa/V9.jpg` (390×844): header, the 22-word sentence in 7 lines, provenance, then "IN PERSON / Georgetown Campus / Explore the Georgetown campus →" and "ONLINE / GT Anywhere / Explore GT Anywhere →", both CTAs above the fold, both door lines present, the compare line cut by the bottom edge. `qa/V14.jpg` (1280×720): doors side by side, second CTA bottom at **492 of 696**, 204 to spare. All sixteen fold rows pass with both CTAs above the limit, the two tightest being **V2 581 of 605** and **V10 284 of 318** (`qa/fold.md`, and R37 confirms the rationale's pasted copy matches the run). The CTAs are equal in every dimension — my probe at 1440 returns both at 353px wide and 44px tall — so neither school is favoured, and 18 of 19 rows show ink cut by the bottom edge so the page visibly continues. The cue set is words only (DD-04 declines an icon by argument, not omission); it is thinner than any other direction's and it is still unambiguous | Holds. The V18 row ("no content visible below the last CTA") is a 320×256 artefact, carried to Craft and not deducted here |
| Composition | **3** | The beat rhythm is real and exact. My probe at 1440×900: four sections at **694, 721, 694, 694px**, each with a **320×320** object, **96px** of air above it and **96px** from its bottom to the label, identical in all four; at 390×844, 552/576/552/552 with 281×281 objects and 64/64. The first screen is composed rather than slack — the two fields between sentence, choice and compare line measure **142px each at 1440** and 64px at 1280, equal, between three blocks that are complete at rest. The h1 sits on exactly eight columns (my probe: 800px at 1280, 907px at 1440, the contract's own figures). `crit-1440-beat1top.jpg` (my probe) is a screen a serious school could own. **Three structural faults, none of them polish.** (a) **The thesis is not delivered in a viewport.** A beat is 694–721px in a 900px viewport and 552–576 in an 844; my probe counts **two objects at least a quarter visible at three of the four beat-aligned scroll positions, at 1440×900 and at 390×844 alike**, and my capture `crit-390-beat1mid.jpg` shows beat 1 entire *plus four tiles of beat 2* on one phone screen. The source makes the claim true with one declaration the mock did not borrow — `examples/stillpoint.html` sets `.beat{min-height:100vh}`. M24 took the air and left the height, so "one drawn object per screen" (`RATIONALE.md`, Direction) is a property of the page, not of any screen. (b) **The direction stops at the table.** `qa/V14-full.jpg`: below the comparison the page runs four more bands — proof, steps, connect, families — in an ordinary left-aligned register that argues nothing. Four of nine screens carry the thesis; five do not, and the brief licensed density for the *table*, not for everything after it. (c) **The page says the same things twice.** Beat 2's sentence is proof fact two **verbatim** (`index.html:107` against `:216`); beat 3's is proof fact four **verbatim** (`:119` against `:218`); beat 1's is the steps intro **verbatim** (`:89` against `:227`), and "90th percentile" appears **five times** in the markup (`check-claims.py`, CR-011 × 5). It is also the longest page in the programme — **8,623px at 390**, against a median of ~6,700 and 7,654 for the next longest (M14) — so ~1,100px of the extra length re-states what the reader already has. On a direction called One at a Time this is the sharpest available criticism | Raise each `.beat` to `min-height: 100svh` with its content optically centred — the brief says "at least 96px" of clear space, so this is compliance rather than departure, and it is the one device that makes the name true. Then break the duplication: either let the four beats *be* the proof (`copy.md` section 4's four facts, one object each, with the sources line under the fourth, and drop the separate band), or give the beats four sentences the proof strip does not carry. And carry one device of the beat language — the centred axis, or the tracked label above a single line — into at least the proof and steps bands so the page does not change author halfway down |
| Typography | **4** | Contract roles throughout, and the deliberate choice is a good one: a single small-type voice (Inconsolata 600, `--text-xs`, uppercase, tracked) for the header utility links, the door labels, the beat labels, the table row labels and every button, which is also the estate's own footer convention. The beat sentence takes the object's own 320px measure so the beat reads as one column, and it works: my probe measured every beat line at 1440, 390 and 375, and the **longest rendered line is 31 characters** (beat 2, line 1) at all three, well inside the brief's 45. The h1 is handled with care — Literata 400 behind `--h1-weight` so DD-38's 300 test is one edit (`styles.css:11`), `max-width: min(35ch, span8)`, `text-wrap: balance`, one no-break space binding "from anywhere." so the 7-line phone setting never ends on a single word (my probe at 1440: 4 lines of 35/32/31/31 characters; at 390 and 375: 7 lines, 24/21/21/13/17/16/14). CONTRACT.md section 3's new Literata row was checked and is not stressed here: no Literata heading sits over a drawn or tinted ground, and the nearest case — the beat sentence below its object — clears by 96px against the 4.69px overhang at 28px, 20× the requirement. **One defect, and it is a brief rule and a measured claim that does not reproduce.** The brief requires one italic word per sentence "chosen so it never falls at a line end"; `RATIONALE.md` claims "Measured: none falls at a line end at 375, 1280 or 1440." **In beat 2, *advance* ends line one at every width I measured** — 1440×900, 390×844 and 375×629 — rendering "Mastery-based: students *advance* / on demonstrated mastery, / measured with MAP assessments." Visible unaided in `qa/M24-beat2-normal.jpg` | Move beat 2's italic from *advance* to *demonstrated*, which sits mid-line on line two at all three widths and is the semantically stronger word anyway (the fact is that advancement is on *demonstrated* mastery), then re-measure all four beats at 375, 390, 1280 and 1440 and correct the rationale's claim to what the run returns |
| Imagery | **2** | No photograph in either state, by argument rather than by permissions wait, which is the right call for this direction (DD-42 option a, RF-25, AD-11). The imagery is therefore the four objects, and they carry the argument alone. Forced colours is handled well and is not the problem: all four survive in `M24-beat1-forced.jpg` to `M24-beat4-forced.jpg`, because every distinction is fill-against-stroke and the block is last in the file (M07's lesson), and there are **zero `<text>` nodes** in all four objects at all four widths (my probe), so M10's label-scaling defect cannot occur by construction. **Two of the four objects fail.** (a) **The rings** (`M24-beat3-normal.jpg`, `-forced.jpg`) — ruled on below; the shape is wrong. (b) **The mastery tiles imply a proportion the deck does not carry** (`M24-beat2-normal.jpg`, `-forced.jpg`): nine tiles, four filled, five hairline. The reader is handed a numerator and a denominator and no key — the sentence directly beneath names no unit and no total, and the only statement of what nine means ("Kindergarten to 8th grade") is four screens below in the proof strip. Read on its own terms, 4-of-9 is a completion figure: ~44 per cent, or a child three grades along. Neither figure exists in the deck or in `12-claims-register.md`. The source settles it rather than excusing it: `examples/stillpoint.html` uses the same tile grid, fills **one** tile, and captions it "A week, as nine squares. One of them is today." — naming both the unit and the meaning. M24 borrowed the shape and dropped the key. **The other two pass.** Beat 1's ten-segment arc draws one tenth, which *is* CR-011's own top decile stated in the sentence beneath, so the implied number and the registered number are the same number; a residual risk is logged below. Beat 4 is the best object on the page: four is register-backed (CR-032), the marks **cross** the axis rather than rise from it so there is no bar chart to misread, and the runway at both ends reads as a year | Fix the tile grid per the ruling below, and replace the rings. Then write the rule that decides these into the brief: *an object may draw a proportion only where that exact proportion has a claims-register row*. Beat 1 passes it, beat 4 passes it (a count has no denominator), beat 2 fails it |
| Color and surface | **3** | The accent discipline is real and I verified it rather than reading it: my probe counts `.o-accent` at **1, 0, 1, 0** across the four beats and **2 on the whole page**, so the one-accent-per-beat rule holds with two beats spending none. Navy hairlines are **13.88:1** on the ground (my computation) and the navy footer is the one deliberate dark surface. Zero raw hex in the stylesheet. The focus work is careful and evidenced: the two-colour ring was tried on the navy door CTAs, found invisible on cream (its near-white outer band at 1.02:1), and withdrawn to the light-surface ring, shown at 3× in `M24-focus-door-zoom.jpg` — a 2px `--color-focus` band (8.20:1 on the ground, my computation) outside a cream offset. **Three faults.** (a) **The single-ground claim is false.** `styles.css:176` sets `.proof { background: var(--color-surface) }` and `:172` sets `.tefa { background: var(--color-anywhere-tint) }`. The page has **four** grounds — cream, a pink band, a blue box, navy — plainly visible in `qa/V14-full.jpg`, while `RATIONALE.md` says "One ground, `--color-bg`, from the header to the families bar; the footer is the page's one change of ground" and marks the brief row **Met**. On a direction whose surface argument is that the ground never changes, that is the claim doing work the build does not. (b) **The accent fill should take the darker token** — ruled on below. (c) **A wrong measured number ships in the stylesheet**: `:134` says the navy hairline makes the shape's boundary "17.69:1 against the ground". 17.69 is `--color-text` on `--color-bg`; `--color-navy` on `--color-bg` is **13.88** (my computation), which is what `RATIONALE.md:105` correctly says. One-line fix | Hold one ground to the footer: put the proof band and the TEFA module on `--color-bg` and separate them with the same `--color-border-strong` rule the beats already open with (3.63:1, my computation) — the direction already owns that device and it costs nothing. Take `--color-accent-text` for the two accent fills, drop the navy hairline from them when you do, and correct `:134` |
| Motion | **5** | Nothing animates, and I verified it rather than reading it: `grep -n "transition\|animation\|@keyframes" styles.css` returns **exactly two lines** — the file-header comment and the reduced-motion reset at `:214`. No `@keyframes`, no `transition` property, no `animation` shorthand anywhere. The runner's `prefers-reduced-motion: reduce` pass at V14 computes every transition and animation duration at 0s on elements and pseudo-elements (`qa/fold.md`). The only movement is native anchor scroll, fenced inside `no-preference` (`:22`). The refusals are argued on the right ground rather than defaulted: the source's 0.10s snap is "a film's device between cuts; a page has no cuts", and a V6 reveal was considered and withdrawn because a beat that appears on scroll is not complete at rest and D-039 is escalated. This is the one direction where stillness is the argument rather than a limitation, and the build earns that sentence | Holds |
| Mission (L3) and exclusivity (L4) | **4** | Exclusivity is selectivity throughout. The first beat *is* the admission bar, drawn and stated; tuition appears only as one ordinary table row where "Tuition on request. Ask admissions." carries the same weight as "$10,400 a year" (`qa/V14-full.jpg`), and in the TEFA module. No crest, seal, countdown, scarcity phrase, wealth cue, stock photograph or placeholder in any of the 37 captures (MD-25, DD-10, C06). No outcome figure and no accreditation claim on the page or in the JSON-LD; PQ-10 is deferred by decision and routed to admissions. `check-claims.py`, re-run by me, reproduces the pasted block verbatim: six figures, six register rows, all "Unverified, public". The restraint itself reads as institutional seriousness at desktop. **Held off 5 by two things.** The admission bar is stated **five times** on one page, which reads as insistence rather than confidence — the opposite of the register the direction is claiming. And the bullseye sits on the one beat that has to read as *open*: a target is a competitive metaphor, and "two ways to attend" is a statement about access | Cut the admission bar to the two places it has to be (the table row and the steps lede) plus the one beat, and fix beat 3. Both are already required above |
| Craft | **4** | Strong on everything mechanical, and I re-ran it rather than reading it: `check-mocks.py` **37 pass, 0 fail** and `check-claims.py` **OK** on my read-only re-run. Sixteen fold rows pass; V18 reflows with no horizontal scroll (`qa/V18.jpg`); the root font doubled at 375 gives no horizontal scroll (`qa/V2-rootx2.jpg`) — and that fix was *diagnosed* rather than guessed, the h1's no-break space setting `.first-inner`'s min-content, which is the right way to find it. Every interactive target is at least 44px tall; both marks clear K12 V2 at 390 and 1440 with 0 per cent aspect skew; the console is clean across all nineteen rows; `--radius-md` is uniform on all four corners of every button, verified at 3× in `M24-focus-door-zoom.jpg`; focus is correct on all four focus captures including K3's two-colour ring on the footer's straddling plate. **The deduction is not mechanical, it is documentary, and in this programme that counts.** Three figures in the deliverable do not reproduce: the "17.69:1" in `styles.css:134` (correct value 13.88); "`check-mocks.py` 36 of 36" in the Acceptance row at `RATIONALE.md:128` against the checker's and the Self-check's 37; and the single-ground claim contradicted by `:172` and `:176`. Add the italic-at-line-end claim scored under Typography and that is four. Plus the freshness gap: the eight per-beat captures and the focus zoom predate the last stylesheet write by six minutes, so the images the rationale cites as verification are not of the build it ships (I re-measured; they do reproduce, but that is my run, not the record's) | Correct the three figures, re-take the nine stale captures against the current build, and the row is a 5 — everything the runner measures is already there |
| Continuity (L2) | **4** | Scored on the rendered Anywhere captures; the Georgetown handoff is unverified and the rationale says so in its own first sentence, correctly. Matching, against `CONTINUITY.md`'s measured table: ground `rgb(252, 244, 239)` exactly and held unbroken across the first screen and all four beats, which is the strongest ground continuity available to any direction; `rgb(0, 17, 23)` body ink in Inter Tight; Literata display; the navy-fill application action with a near-white uppercase Inconsolata label, which is the fill the estate's own first screen uses for the control a parent clicks (DD-46); the italic-emphasis device borrowed from the estate's own h1; both marks in the footer at 32px, Anywhere on navy and School on a cream plate. **And one continuity argument the rationale does not make for itself:** the estate's first screen is a photographic cut-out over **line artwork** on grained cream (`CONTINUITY.md`, "the cream is grained, with fine wave linework behind the student"), and this page is navy monoline hairlines on the same cream — the same class of surface reached from a different source, which is closer than a flat-type direction gets. Declared differences, each with a reason: heading weight 400 against 300 and tracking normal against −1.6px (DD-38 owns both, one edit at `:11`); button weight 600 against a computed 500 that `shared/fonts.css` cannot supply; no grain, no wave linework, no person anywhere. **The M24-specific deduction** is (a) under Color: the proof band and the TEFA module break the unbroken ground the direction sells a parent, so the page a parent leaves for `anywhere.gt.school` is not the one-ground page the rationale describes | File the comparison the rubric actually asks for into `qa/`: `kb/exemplars/estate/anywhere-home-390-firstscreen.jpg` and `-1440-firstscreen.jpg` beside `V9.jpg` and `V16.jpg`, so the row is scored on a rendered pair rather than a property table. Then hold the single ground, and the strongest thing this direction has stops being contradicted by its own stylesheet |

| Brief compliance | Sections the build departs from, with the rationale's stated reason and whether I accept it | Avoid concepts present (CONCEPTS.md id) | Verdict |
|---|---|---|---|
| — | **Declared and accepted:** the first screen is not a beat (contract requires six elements at every row; the brief demanded the rationale "say so plainly rather than claim a purity the page does not have", and the "honest tension" paragraph is exactly that — accepted, with the cost named below). The lilac canvas, the per-section hue change, the radial-glow gradient, the 10px type and the 0.10s snap, each refused with a reason (accepted; DD-48 satisfied — composition and rhythm borrowed, palette and faces GT's, and the stylesheet holds no raw colour value, so no leak is possible). V10's h1 one token down with the 35ch cap removed (the contract's own landscape recipe; accepted). The beat sentence measured at `--obj-size` rather than `--measure-prose` (accepted, and it is why the longest line is 31 characters). **Undeclared departures, both faults:** the italic word falls at a line end in beat 2, against the brief's explicit rule and the rationale's claim to the contrary; and the page changes ground three times before the footer, against the brief's "the page never changes ground until the navy footer" and the rationale's "Met". **Brief error, mine to amend not the engineer's:** "two concentric rings for the two places" (Imagery row) — built faithfully, flagged honestly by the engineer, and wrong; see the ruling | **None present.** C05 (unsourced stat strip) avoided — the proof strip and the table both carry the sources line verbatim. C26 (dense redundant directory) avoided — one dense object, the table, declared as such. C13, C20, C29, C34, C35, C36, C40, C43 all clear. **C29 is worth watching, not scored:** at 8,623px the page is the longest of the eighteen mocks, 13 per cent above the next and 29 per cent above the median. That is the direction's declared cost and it is acceptable *only* once the duplication in required fix 2 is gone; as it stands ~1,100px of the extra length restates content the reader already has | **Iterate.** Rows below 4: **Imagery 2, Composition 3, Color and surface 3** |

---

## Required fixes, ordered by impact

**1. Replace the concentric rings (beat 3). Imagery.**
Amend `kb/briefs/M24.md`, Imagery row, then rebuild the object. Detail in the ruling below. Highest impact
because it is the object a parent will misread fastest and the misread is a semantic inversion of the beat.

**2. Redraw the mastery tiles so they carry no proportion (beat 2). Imagery, REQ-022, DEL-018.**
A drawn ratio is a claim. Detail in the ruling below.

**3. Break the duplication between the beats and the bands below. Composition, Mission.**
`index.html:107` = `:216` verbatim; `:119` = `:218` verbatim; `:89` = `:227` verbatim; CR-011 five times on
the page. Either let the four beats be `copy.md` section 4's four facts with the sources line under the
fourth and drop the separate proof band, or give the beats four sentences the proof strip does not carry.
This also earns back most of the page's excess length.

**4. Make "one at a time" true in a viewport. Composition.**
`min-height: 100svh` on `.beat` with its content optically centred. My probe: beats are 694–721px at
1440×900 and 552–576 at 390×844, so two objects are at least a quarter visible at three of four beat-top
scroll positions at both, and `crit-390-beat1mid.jpg` shows beat 1 entire plus four tiles of beat 2. The
brief says "at least 96px", so this is compliance, not departure; `examples/stillpoint.html`'s
`.beat{min-height:100vh}` is the device that was available and not taken.

**5. Take `--color-accent-text` for the two accent fills, and drop their navy hairline. Color and surface.**
Ruling below. One token, already in `tokens-v2.css:61`.

**6. Hold one ground to the footer. Color and surface, Continuity.**
`.proof` and `.tefa` to `--color-bg`, separated by the `--color-border-strong` rule the beats already use.
Or, if the bands must keep their surfaces, delete the single-ground claim from the rationale and from the
brief-compliance table. The first is better: the unbroken cream is the strongest continuity this direction has.

**7. Move beat 2's italic from *advance* to *demonstrated*, and re-measure all four. Typography.**
Measured at 1440×900, 390×844 and 375×629: *advance* ends line one at every width.

**8. Carry one device of the beat language into the bands below the table. Composition.**
The centred axis, or the tracked label above a single line. Four of nine screens currently argue the thesis.

**9. Correct three figures and re-take nine stale captures. Craft.**
`styles.css:134` 17.69 → 13.88; `RATIONALE.md:128` "36 of 36" → 37; the single-ground sentence. Re-run the
per-beat and focus-zoom captures, which predate the last stylesheet write by six minutes.

**Logged, not required.** The ten-segment arc can be read as an *acceptance rate* (one applicant in ten)
rather than a *score band*. The sentence directly beneath names the unit, which is why I accept it, but if
the engineer wants the residual closed, weight the boundary tick between the ninth and tenth segments so the
object reads as a threshold rather than a fill level.

## Verdict

**Iterate. Imagery 2, Composition 3, Color and surface 3; Objective 5, Motion 5, Typography 4, Mission and exclusivity 4, Craft 4, Continuity 4. Nine required fixes, the first two being the two objects the brief and the build got wrong; the direction's argument is sound and its execution of stillness is the best in the programme, but two of the four objects that carry that argument alone are making claims the register does not hold, and the page says its four things twice.**

---

## Ruling one: the rings are the wrong shape, and the brief should be amended

**Agreed — the engineer's own doubt is correct, and there is a second reason it did not name.**

The evidence is the two captures. `M24-beat3-normal.jpg`: two navy hairline circles, concentric, with a
filled orange dot at the exact centre. That is a target. `M24-beat3-forced.jpg` settles it: in forced colours
the object becomes a solid black dot inside two black rings on white — a rifle target with no ambiguity left
at all. **That is the test that decides it.** An object whose only defence against a misreading is a colour
distinction the user agent is entitled to remove is not carrying its meaning in its geometry. The rationale's
defence — that the two gaps are equal at 64 and 65 user units "so the object reads as a rhythm of three
rather than as a target" — is a defence against the bullseye reading only, and the forced capture shows it
does not work.

**The second reason, which is the one that makes the shape unrecoverable rather than tunable.** Concentric
rings are *nested*, and nesting is hierarchy: one ring contains the other. The umbrella page's governing rule
is that the two schools are peers of equal weight — C01, DD-21, and DD-46 rejects its own option (c)
explicitly because "the umbrella page must not prefer a school". A nested pair says one way to attend lives
*inside* the other. So the shape does not merely fail to say "two ways to attend"; it says something the page
is not allowed to say. No adjustment of the radii fixes that, because the nesting is the form.

Third, smaller: a target is a competitive, aim-at-this metaphor, and beat 3 is the one beat that has to read
as *access*. It is the wrong semantic field for that sentence.

**What should replace it: a symmetric two-branch fork.** One short navy hairline stem rising from the lower
centre to a single `--color-accent` dot, then two arms of equal length and mirrored angle diverging from that
dot to two identical terminal marks. It is symmetric about the vertical axis, so neither arm is preferred;
nothing is nested inside anything, so there is no hierarchy to read; there is no count and no denominator, so
nothing implies a proportion; the accent budget is unchanged, the dot surviving as the branch point exactly
as the brief's Color row specifies; and it survives forced colours because every distinction is stroke
geometry rather than fill. It is DD-21-safe for the same reason the rings were argued to be: it draws two
*ways*, not two *places*.

**One amendment to Johnny's candidate: no labels in the SVG.** The fork should carry no `<text>` node. The
existing label "TWO WAYS TO ATTEND" and the sentence "Kindergarten to 8th grade, in person *or* online." are
directly beneath it and already say both words; adding SVG text would reintroduce M10's defect — labels
declared at one size rendering smaller because they scale with the viewport transform — which this build
currently prevents by construction, with zero `<text>` nodes measured in all four objects at four widths.

**Second choice, if the fork reads as a funnel rather than a branch:** two circles of identical diameter side
by side on one horizontal axis, one navy-filled and one navy hairline, overlapping by a fixed amount, with the
accent spent once on the shared lens. Same properties — symmetric, unnested, uncountable — and it has the
additional virtue of drawing the table's own first row, "Same school, same academics."

**Amend `kb/briefs/M24.md`, Imagery row**, replacing "two concentric rings for the two places". The instruction
was the brief author's; the engineer built it faithfully and flagged it honestly in its own rationale, which is
precisely the behaviour the register loop exists to produce and should be recorded as such rather than charged
against the build.

## Ruling two: yes, the mastery grid makes a claim

**It implies a proportion the deck does not carry, and a drawn proportion is the same kind of claim as a
printed one.**

`M24-beat2-normal.jpg` and `M24-beat2-forced.jpg`: nine rounded tiles, three by three, four filled navy and
five hairline. The reader is handed a numerator and a denominator and no key. The sentence directly beneath —
"Mastery-based: students *advance* on demonstrated mastery, measured with MAP assessments." — names no unit
and no total, and the only place the page says what nine means, "Kindergarten to 8th grade", is four screens
below in the proof strip. So the object is read on its own terms, and on its own terms four-of-nine is a
completion figure: roughly 44 per cent, or a child three grades along. **Neither figure exists in the deck or
in `12-claims-register.md`**, so REQ-022 and DEL-018 bite exactly as they would on a printed number.

The rationale's defence makes the right distinction and the drawing does not honour it: "The filled run is a
position in that span, not a quantity the page asserts." A position is one mark. Four filled tiles read as a
quantity because four of them are filled.

The source proves the point rather than excusing it. `examples/stillpoint.html` uses the same tile grid, fills
**one** tile, and captions it "A week, as nine squares. One of them is today." — naming the unit *and* the
meaning in the caption, which is the only thing that makes a tile grid safe. M24 borrowed the shape and
dropped the key.

**The rule this implies, which belongs in the brief:** *an object may draw a proportion only where that exact
proportion has a claims-register row.* Beat 1 passes it — one tenth is CR-011's own top decile, stated in the
sentence directly beneath, so the implied number and the registered number are the same number. Beat 4 passes
it — four is CR-032, and a count has no denominator, so it states no ratio. Beat 2 fails it.

**The fix, best first.** Draw the fact the sentence actually states. Its claim is that advancement is on
demonstrated mastery *rather than on the calendar*: two short parallel tracks, one marked in even steps and
one in uneven ones, draws that contrast with nothing to count. Second best: remove the denominator — let the
tile run leave the object's frame on the right so the sequence visibly continues and there is no total, hence
no ratio. **Do not** simply reduce the fill to one tile in nine: nine is still a denominator the object does
not name, and one-in-nine would then read as a position claim about where a GT child actually is.

## Ruling three: take the darker accent token

**The mitigations are individually sound and together still insufficient, for a reason neither of them
addresses.**

Both mitigations hold up under measurement. The navy hairline is real — `--color-navy` on `--color-bg` is
**13.88:1** and on `--color-accent` is **5.83:1** (my computation), so the shape's boundary is unmissable
against the ground *and* against its own fill. And "carries no information not also in the sentence beneath"
is the right WCAG 1.4.1 test, correctly applied: nothing on this page is available through colour alone.

Neither argument is about what the accent is *for* here. In this direction the accent is the emphasis — the
one thing the eye is meant to land on in a frame that is three-quarters empty, spent exactly twice on a
nine-screen page. An emphasis mark at **2.38:1** on its ground is a weak landing, and `M24-beat1-normal.jpg`
shows it: the orange segment is *quieter* than the navy hairlines around it, so the loudest element of the
object is its outline and the accent reads as a tint rather than as a mark. At `--color-accent-text`
(`#a5501a`) it is **5.14:1** (my computation, reproducing the engineer's), 2.2× the contrast, and the one
deliberate spend becomes an actual accent.

The rationale's counter — that DD-39 rules the accent a surface-and-shape colour on light, so a shape use is
inside the decision — is correct on DD-39's letter and does not settle it. DD-39 says *where* the accent may
be used, not that 2.38:1 is adequate wherever it is allowed. The cost is one token, already present in
`tokens-v2.css:61` as a DD-19 departure recorded against DD-39(a), and this mock already carries two other
departures from that same row, so nothing new is introduced.

**One consequence the engineer does not have, and must apply with it:** at `--color-accent-text` the navy
hairline on the accent shape drops to **2.70:1** against its own fill (my computation), so the hairline stops
delimiting the shape and becomes noise on it. **Drop the hairline from `.o-accent` when you take the darker
token** — the shape is then fill-only, which is simpler, and forced colours already collapses fill and stroke
to `CanvasText` so nothing is lost there.

## Rulings on the engineer's other measured reports

| Reported | Verdict | My evidence |
|---|---|---|
| Exactly one object, one paragraph and zero SVG text nodes per beat | **Accepted, reproduces** | My probe at 1440×900, 1280×720 and 390×844: 1 `svg`, 1 `p`, 0 `<text>` in all four beats at all three |
| Accent spent on two beats of four | **Accepted, reproduces** | `.o-accent` count per beat 1/0/1/0; **2** on the whole page, my probe at all three widths |
| Objects 320×320 with 96px of clear space above and below | **Accepted, reproduces** | 320×320 with 96/96 at 1440 and 1280; 281×281 with 64/64 at 390, which is the brief's phone figure. One rider: the brief says *at least* 96, and the build delivers exactly 96, which is what lets two objects fall in one viewport (required fix 4) |
| Longest rendered line 31 characters against the brief's 45 | **Accepted, reproduces** | My probe measured every beat line at 1440, 390 and 375; longest is beat 2 line one at **31** at all three |
| The first screen is not a beat and cannot be | **Accepted, and it is the right call** | CONTRACT.md section 7 requires the fixed sentence, the provenance line and both CTAs on the first screen at every row — six elements — so no first screen in this programme can be a one-object beat. The rationale states it plainly, which is exactly what the brief demanded. **The cost should be said out loud to Nari, not buried:** `qa/V9.jpg` shows a 390 first screen with no air at all, so on the rows carrying two thirds of sessions the direction does not announce itself until the parent scrolls, and the screen a phone parent first sees looks like every other mock's |
| The accent-fill mitigation, and the darker token as an option | **Not accepted; take the darker token** | Ruling three above |

## Two notes for Nari's review, not faults

- **The restraint is confidence, and it is local.** Where the direction is practised it is the most composed
  work in the programme — `crit-1440-beat1top.jpg` and `M24-beat4-normal.jpg` are screens a serious school
  could own, and the refusal to animate is argued rather than defaulted. But it is practised on four of nine
  screens, it is not true inside any single viewport at either width, and the page states its central fact
  five times. Restraint that says the same thing twice is not restraint yet. The four required fixes above
  close the gap between the claim and the page; none of them changes the direction.
- **Show Nari a beat first, not the first screen.** The first screen is the weakest expression of this
  direction by construction, and at 390 it is indistinguishable from every other mock. Open with
  `M24-beat4-normal.jpg` or `M24-beat1-normal.jpg`, then the first screen, then the table — which is the
  order the page itself argues in.
