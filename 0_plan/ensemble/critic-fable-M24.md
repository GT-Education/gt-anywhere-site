# Design critic, Fable, M24 "One at a Time", iteration one, 2026-09-11

Re-score after the consolidated iteration (`724a0fd`). My round-one card is `critic-fable-M24-iter0.md`;
Astra's is `critic-astra-M24-iter0.md`. Both were read in full before this pass, as the assignment set,
because this is a re-score of named fixes rather than an independent first reading.

Inputs read, in the order the assignment set them: `ensemble/prompts/DESIGN-CRITIC.md`; both iter-0 cards;
the corrected `kb/briefs/M24.md` (including the "Corrected after the first build" note) and `kb/briefs/CONTRACT.md`
v2.1 section 3 — the two new rows that came out of my own iter-0 rulings, **a drawn object may state a proportion
only where that exact proportion has a claims-register row** and **nesting is hierarchy**; `mockups/shared/CONTINUITY.md`;
the mock's `index.html`, `styles.css`, `RATIONALE.md` (all 555 lines) and `qa/fold.md`; **every capture in `qa/`**,
including all eight per-beat captures in normal and forced colours, the focus zoom, `V2-full`, `V14-full`,
`V2-rootx2`, the four `focus-*` and `forced-colors`; and `kb/exemplars/estate/anywhere-home-1440-firstscreen.jpg`
for the Continuity pair. Also `mockups/shared/copy.md` sections 0 to 9 in full, to rule on what the deck does and
does not make available for beat 3; `kb/CONCEPTS.md` C01 to C43 for the Avoid rows; the iteration diff.

Evidence marked **my probe** is my own instrumentation of the built page on a server I started
(`127.0.0.1`, ephemeral port, the cached Chrome for Testing chromium-1234 through the npx-cache Playwright),
with scripts written outside the repository in the session scratchpad (`probe-m24.mjs`, `lines.mjs`). Contrast
figures marked **my computation** are WCAG 2.x relative-luminance ratios computed from `shared/tokens-v2.css`.
Both checkers were re-run read-only. Nothing in the repository was changed except this file. No production host
was opened.

**Capture freshness, checked first, because it was a finding last pass.** `index.html` 13:57:52,
`styles.css` 14:12:21, `RATIONALE.md` 14:13:45; the eight per-beat captures and the focus zoom 14:12:43–44;
every matrix capture and `qa/fold.md` 14:14:31–39. Every capture postdates the last source write. The six-minute
gap I caught last pass is closed and the images below are evidence of the build that ships.

---

| Rubric row | Score 1 to 5 | Evidence you looked at (screenshot filename, crop, measurement) | What would make it a 5 |
|---|---|---|---|
| Objective (L1) | **5** | Unchanged, and unchanged is the right answer: nothing on the first screen was touched and all nineteen rows re-measured identically. `qa/fold.md`: sixteen fold rows pass with both CTAs above the limit, tightest **V2 581 of 605** and **V10 284 of 318**; `qa/V14.jpg` puts the second CTA at 492 of 696. `qa/V9.jpg` (390×844): header, sentence, provenance, both door names, both CTAs above the fold, both door lines cut by the bottom edge. The two doors stay equal in every dimension. The routing job is complete by pixel 600 of a 9,856px page, which is the fact that decides the length question below | Holds |
| Composition | **4**, was 3 | **The fault that held this row at 3 is closed, and I verified it rather than reading it.** My probe at 1440×900, 1280×720, 390×844 and 375×629, scrolled to each of the four beat tops with smooth scrolling defeated: **exactly one object at or above a quarter visible at every one of the sixteen positions, and it is 100 per cent visible at all sixteen.** Beat sections measure 900/900/900/900 at 1440×900 and 844/844/844/844 at 390×844, against 694–721 and 552–576 before. `min-height: 100svh` with `align-content: safe center` is the device, and it is the one the source had and the first build left. The direction's name is now true inside a screen. Fix 8 also landed: the tracked label over a single line is carried into all five bands below the beats (`qa/V14-full.jpg`, COMPARE / PROOF / ADMISSIONS / CONNECT / FAMILIES), so the page no longer changes author at the table. Fix 3 mostly landed: the steps lede is gone and CR-011 is 4 on the page, which is the floor DD-43 allows. **Three things hold it off 5.** (a) **Beats 2 and 4 are now the same drawing** — a horizontal hairline crossed by vertical marks — separated only by stroke weight (1.5px against 8px, argued in Departures). Compare `M24-beat2-normal.jpg` with `M24-beat4-normal.jpg`: the family resemblance is immediate, and a four-object sequence now has three shape families, with the repeat only one beat apart. (b) **Beat 2 breaks the beat rhythm**: my probe measures its sentence at **4 rendered lines at 1440, 1280 and 390 and 5 at 375**, against 2 lines in every other beat, and the first of its two sentences ("One school, one admissions bar, one mastery-based program.") is not what the object draws. On a direction whose unit is one statement per screen, one beat carrying twice the copy is visible. (c) At **1280×720 beat 2 measures 746px**, 26px taller than the viewport, so it is the one beat that is not a screen; nothing is clipped and no second object enters, and the rationale does not report that row either way | Redraw beat 2 on a different device from beat 4's line-and-marks, and take it to a single sentence so all four beats set two lines. That closes (a) and (b) together and is the same edit as required fix 2 below |
| Typography | **4** | The type is 5-grade work everywhere except one word. One small-type voice (Inconsolata 600, `--text-xs`, uppercase, tracked) now runs header links, door labels, beat labels, the five band labels, table row labels and every button, which is the estate's own convention. The beat sentence takes the object's 320px measure: my probe measures the **longest rendered beat line at 35 characters** (beat 2, line 1, 308px at 1440), inside the brief's 45 at all four widths. The h1 keeps `min(35ch, 8 columns)`, `text-wrap: balance` and the one no-break space; CONTRACT section 3's Literata-overhang row is not stressed (no Literata heading sits over a drawn or tinted ground, and the nearest case clears by 96px against 4.69px). **The defect is the same one as last pass, in a new place, and it ships with the same claim to the contrary.** The brief requires the italic word "chosen so it never falls at a line end"; `RATIONALE.md` says "Measured this pass at 375, 390, 1280 and 1440, line by line: none falls at a line end at any of the four." My probe renders every beat line at those four widths: beat 2 line 3 is **"advance when they show *mastery*,"** at **1440, 1280 and 390** — the italic is the last word of the line, with only a comma after it. At 375 (5 lines) it is mid-line. Visible unaided in `M24-beat2-normal.jpg`. Beats 1, 3 and 4 are all clean at all four widths | Italicise ***calendar***, not *mastery*. My probe puts it mid-line at all four widths ("not when the *calendar* says so." at 1440/1280/390; "when the *calendar* says so." at 375), and it is the better word: *mastery* repeats the label directly above it, while *calendar* is the thing the object and the sentence both reject. Then correct the rationale's claim to what the run returns, and treat a trailing comma as not counting |
| Imagery | **4**, was 2 | **Both faulty objects are replaced and both replacements hold.** The fork (`M24-beat3-normal.jpg`, `-forced.jpg`) is ruled on below: nothing nested, mirror-symmetric, two identical open terminals, and in forced colours a branch with a filled node rather than a target. The cadence tracks (`M24-beat2-normal.jpg`, `-forced.jpg`) are ruled on below: nothing filled, so no part of a whole, and equal counts, so no quantity or rate. The accent now reads as the emphasis it is — compare `M24-beat1-normal.jpg` against the first build, where the orange segment was quieter than the navy hairlines around it; at 5.14:1 (my computation) it is the loudest mark in the frame, which is what the one deliberate spend is for. Zero `<text>` nodes in all four objects at all four widths (my probe), so M10's scaling defect stays impossible by construction. All four survive forced colours, checked in four captures. **Held off 5 by beat 2, which is honest but nearly mute.** Beats 1 and 4 draw their sentence: one filled tenth is CR-011's own top decile, four crossing marks are CR-032's four weekends. Beat 3 draws its sentence. Beat 2 asks a reader to make three inferences — that both rows are time, that uneven means mastery, that equal counts mean the same progress — none of which the drawing forces. Astra's own bar for 5 was "every object communicates its caption without the rationale's private explanation," and this one does not | Redraw beat 2 so it states the sentence rather than gesturing at it, on a device that is not beat 4's. Until then this is the object to fix first if the direction wins — not because it claims anything, but because it is the only one of the four that does not make the argument |
| Colour and surface | **5**, was 3 | All three faults closed, each verified. (a) **One ground is now true of the build**: `.proof` and `.tefa` lost their surfaces, and `.comparison, .proof, .steps, .connect, .families` share the `--color-border-strong` rule the beats open with. `qa/V14-full.jpg` and `qa/V2-full.jpg` show cream unbroken from the header to the families bar, then the navy footer. Two grounds on the page, as the rationale now says. (b) **The accent takes the darker token, fill only**: `--color-accent-text` `#a5501a` is **5.14:1** on `--color-bg` where `--color-accent` is **2.38**, and `--color-navy` on the new fill is **2.70**, so dropping the hairline was not optional — all three reproduce exactly in my computation. (c) `styles.css:134`'s wrong 17.69 is gone. My probe counts `.o-accent` at **1, 0, 1, 0** per beat and **2** on the page, and since each beat is now its own screen, K3 5f's one-accent-per-screen holds per screen rather than per page. Navy hairlines 13.88:1, the structural rule 3.63:1, zero raw hex. Focus verified at 3× in `M24-focus-door-zoom.jpg`: the 2px `--color-focus` band (8.20:1) outside a cream offset, with the two-colour ring correctly withdrawn from the navy CTAs on cream | Holds. The `--color-border` hairlines inside the table and the lists stay at 1.56:1, which is correct: CONTRACT section 3's 3:1 rule binds lines that carry an argument, and those are row separators on a decorated page, not a drawn one |
| Motion | **5** | Re-verified, not read: `grep -n "transition\|animation\|@keyframes" styles.css` returns exactly two lines, the file-header comment and the reduced-motion reset at `:227`. No `@keyframes`, no `transition` property, no `animation` shorthand. The runner's reduced-motion pass at V14 computes every duration at 0s on elements and pseudo-elements (`qa/fold.md`). The only movement is native anchor scroll, fenced inside `no-preference` — which my own probe had to defeat to measure the beat tops, so it is real. The refusals are still argued rather than defaulted. This remains the one direction where stillness is the argument, and the build still earns it | Holds |
| Mission (L3) and exclusivity (L4) | **5**, was 4 | Both things that held it at 4 are closed. **The admission bar is at the floor**: `check-claims.py`, re-run by me, returns CR-011 **4** — beat 1, the proof strip's own different words, and the two table cells DD-43 requires — where the first build had five and the fifth was a verbatim restatement. **The target is gone**: beat 3 is now a symmetric branch, which is a statement about access rather than a competitive metaphor, on the one beat that has to read as open. Everything that was already right is unchanged: the first beat *is* the admission bar, drawn and stated; tuition appears only as one ordinary table row where "Tuition on request. Ask admissions." carries the same weight as "$10,400 a year", and in the TEFA module; no crest, seal, countdown, scarcity phrase, wealth cue, stock photograph or placeholder in any of the 37 captures; no outcome figure and no accreditation claim on the page or in the JSON-LD. Six figures, six register rows, all "Unverified, public" | Holds |
| Craft | **4** | Everything mechanical is 5-grade and I re-ran it rather than reading it: `check-mocks.py` **37 pass, 0 fail**, `check-claims.py` **OK**. Sixteen fold rows; V18 reflows with no horizontal scroll (`qa/V18.jpg`); the doubled root font at 375 gives no horizontal scroll; every interactive target at least 44px; both marks clear K12 V2 at 390 and 1440 with 0 per cent skew; console clean across nineteen rows; uniform `--radius-md` on all four corners at 3×; focus correct on all four focus captures. **The capture-freshness gap is closed** — I checked to the second and every image postdates the last write. The three wrong figures are corrected. **The deduction is documentary and it is the same deduction as last pass, which is why it stands.** Two claims in the deliverable still do not reproduce: (1) "none [of the italic words] falls at a line end at any of the four" — false at three of four widths, and this is the second pass in which that exact claim is asserted and fails; (2) "the tracks are cut by the frame at both ends so no total is drawn" — geometrically true, perceptually not delivered, measured below. Plus a minor: the per-beat table's "308px, **33 characters**" for beat 2 at 1440 is **35**. In a programme whose standard process is that each model names any number that does not exist where claimed, a re-measured claim that still does not reproduce is the finding that matters most | Fix the italic, strike or deliver the frame-cut defence, correct 33 to 35, and this is a 5 — nothing the runner measures is missing |
| Continuity (L2) | **5**, was 4 | Scored on a rendered pair, as the rubric asks: `qa/V16.jpg` against `kb/exemplars/estate/anywhere-home-1440-firstscreen.jpg`, which I opened for this pass. The Georgetown handoff stays **unverified** — `gt.school` has no mirror here — and the rationale says so in its own first sentence, correctly. **The M24-specific deduction is closed**: the ground is `rgb(252, 244, 239)` unbroken from the header to the families bar, so the page a parent leaves for `anywhere.gt.school` is now the one-ground page the rationale describes, and that is the strongest ground continuity available to any direction in the programme. The rendered pair also carries the argument the property table could not: the estate's first screen is a photographic cut-out over **fine wave linework** on grained cream, and M24 is navy monoline hairlines on the same cream — the same class of surface reached from a different source, and now spread across four full screens instead of four short bands. Body ink `rgb(0, 17, 23)` in Inter Tight; Literata display; the navy-fill application action with a near-white uppercase Inconsolata label, which is exactly the estate's own navy enrolment card in the capture; the italic-emphasis device borrowed from the estate's h1, in `--color-text` rather than the estate's 2.38:1 orange, which is the right refusal. Declared differences each carry a reason. The unsupported claims Astra caught ("both destination sites measured", "the estate's footer carries both marks") are corrected and now stated as gaps in the reference | Holds. Copying the two estate first-screen captures into `qa/` beside `V9.jpg` and `V16.jpg` would save the next critic a lookup, but it is repo hygiene, not a defect in the build, and I have done the comparison here |

| Brief compliance | Sections the build departs from, with the rationale's stated reason and whether I accept it | Avoid concepts present (CONCEPTS.md id) | Verdict |
|---|---|---|---|
| — | **Declared and accepted:** the first screen is not a beat and cannot be (six contract elements), stated plainly as the brief demanded; the lilac canvas, per-section hue change, radial glow, 10px type and 0.10s snap, each refused with a reason (DD-48 satisfied — composition and rhythm borrowed, palette and faces GT's, no raw colour value in the stylesheet); V10's h1 one token down; the beat sentence measured at `--obj-size`; beat 4's 8px marks, **now declared** after Astra caught them; the phone compare anchor below the first screen, **now declared**; the band labels, a declared reversal of the first build's refusal, and the right reversal; `--color-accent-text` for the accent fills, which CONTRACT section 3 now requires rather than merely permits. **Accepted with the cost named:** beat 2 quotes a two-sentence deck cell, so one beat sets four to five lines where the others set two — inside the letter of the brief, outside its rhythm (Composition). **Accepted after checking it myself:** beat 3 still shares proof fact four verbatim. I read `copy.md` sections 0 to 9 in full to test the engineer's reason, and it holds — "Where and how" splits by school and would put the beat's one italic on *campus* or *home*, which prefers a school on the one beat whose job is that they are peers; section 9 carries no unallocated alternative; and the corrected brief fixes the four beats, so my own first option (let the beats be section 4's four facts and drop the proof band) is closed to the engineer, and CONTRACT section 7 requires the proof strip verbatim in any case. The decline is correct and the residue is small. **Undeclared departure, and the one fault that carries over:** the italic word falls at a line end in beat 2 at three of four widths, against the brief's explicit rule and against the rationale's measured claim to the contrary — second pass | **None present.** C05 avoided (both the proof strip and the table carry the sources line verbatim). C26 avoided (one dense object, the table, declared as such). C13, C20, C29, C30, C34, C35, C36, C40, C43 all clear. **C29 ("extreme page length for a routing job", Avoid, Composition) is the close call and I am ruling it absent.** The concept's own test is "the landing routes; length matches the job". M24's router is complete on the first screen at all sixteen fold rows and the compare shortcut sits immediately under it, so the routing job is done by pixel 600 of 9,856 and every pixel after it is elective. That is the opposite of the MoMA/Every failure the row is drawn from. It should still go to Nari as a judgement, not be buried: at **9,856px at 390×844** the page is **29 per cent longer than the next longest mock** (M14, 7,654) and **48 per cent above the median** (~6,672), measured across all eighteen `qa/fold.md` files | **Pass.** All nine rows at or above 4: Objective 5, Composition 4, Typography 4, Imagery 4, Colour and surface 5, Motion 5, Mission and exclusivity 5, Craft 4, Continuity 5 |

---

## Required fixes, ordered by impact

These are hardening items on a mock that has passed, not gates. One of them is a carry-over and is marked so.

**1. Move beat 2's italic off the line end, and correct the claim. Typography, Craft. CARRY-OVER.**
My probe renders beat 2 line 3 as "advance when they show *mastery*," at **1440, 1280 and 390**; the italic word
is the last word of the line and only a comma follows it. Italicise ***calendar*** instead — mid-line at all four
widths, and the word the object actually argues against. Then change the rationale's "none falls at a line end at
any of the four" to what the run returns. This is the second pass on which this exact rule is broken and the exact
opposite is claimed, which is why it is first.

**2. Redraw beat 2 on a device that is not beat 4's, and on a single sentence. Imagery, Composition.**
Beats 2 and 4 are both a horizontal hairline crossed by vertical marks, separated only by stroke weight; the
sequence has three shape families for four objects. The same edit fixes the rhythm break — beat 2 sets four lines
at 1440/1280/390 and five at 375 where every other beat sets two — and gives the object a chance to state its
sentence rather than gesture at it. Not urgent: nothing about the present object is false.

**3. Deliver the frame cut or strike the defence. Craft, Imagery.**
Measured at four widths: the beat-2 track shows **16px of bare line past the outermost mark at 1440 and 14px at
390**, where beat 4 shows **39px and 34px**. There is no drawn frame, so a clip at an invisible boundary is
indistinguishable from a line that stops. Pull the marks inward to match beat 4's runway — a six-number edit —
or delete "so no total is drawn" from the rationale and rest on the defence that works.

**4. Correct "33 characters" to 35. Craft.**
`RATIONALE.md` per-beat table, beat 2 at 1440. The px figure (308) is right; the character count is not. Inside
the brief's 45 either way.

**Logged, not required, two of them.** The arc's residual reading as an acceptance rate rather than a score band
stands where I left it at iter-0 and the engineer's reason for not touching it is sound. And the fork is the
smallest drawn area on the page — 208 of 320 user units — so at 390 it reads a little thin inside a full-viewport
field; that is a consequence of the beat height, not of the object.

---

## Did the iter-0 fixes land

| # | Required fix from `critic-fable-M24-iter0.md` | State | Evidence |
|---|---|---|---|
| 1 | Replace the concentric rings | **Landed** | `M24-beat3-normal.jpg`, `-forced.jpg`; geometry read from `index.html:107-113` and checked: arms 147.8 user units each, mirrored 41.57° either side of the vertical, terminals identical. Ruling one below |
| 2 | Redraw the mastery tiles so they carry no proportion | **Landed** | `M24-beat2-normal.jpg`, `-forced.jpg`; nothing filled, counts equal at 7 and 7. Ruling two below, which accepts the object and rejects two of the four arguments offered for it |
| 3 | Break the duplication between the beats and the bands | **Partly landed** | The steps lede is gone (`index.html` diff) and `check-claims.py`, my re-run, returns CR-011 **4**, down from 5 and at the floor DD-43 allows. Beat 3 still shares proof fact four verbatim; I checked `copy.md` sections 0 to 9 and accept the decline. Beat 2's new sentence is the table's row-one cell, which DD-43 already repeats twice, so one sentence now stands three times on the page |
| 4 | Make "one at a time" true in a viewport | **Landed, and the largest change on the page** | My probe at four widths and four beat tops: one object at or above a quarter visible at all sixteen positions, 100 per cent visible at all sixteen. Beat sections 900/900/900/900 at 1440×900 and 844/844/844/844 at 390×844. One wrinkle unreported by the rationale: beat 2 measures 746 at 1280×720, 26px over the viewport |
| 5 | Take `--color-accent-text` and drop the navy hairline | **Landed** | `styles.css:147`; my computation reproduces 5.14, 2.38 and 2.70 exactly. Visible in `M24-beat1-normal.jpg`, where the accent is now the loudest mark rather than the quietest |
| 6 | Hold one ground to the footer | **Landed** | `.proof` and `.tefa` backgrounds removed; the `--color-border-strong` rule carried across all five bands. `qa/V14-full.jpg`, `qa/V2-full.jpg`: cream unbroken to the navy footer |
| 7 | Move beat 2's italic off a line end, and re-measure all four | **Did not land** | The sentence changed and the italic moved to *mastery*, which now ends line 3 at 1440, 1280 and 390 with only a comma after it (my probe, line by line). Beats 1, 3 and 4 are clean. The rationale claims all four are clean |
| 8 | Carry one beat device into the bands below the table | **Landed** | The tracked label over a single line, on all five bands, from `copy.md`'s own eyebrow list — one of the two devices I named. `qa/V14-full.jpg`. The lower half is still left-aligned against the beats' centred axis, which was the other option and not required |
| 9 | Correct three figures and re-take nine stale captures | **Landed** | `styles.css` no longer contains 17.69; the Acceptance row reads 37; the single-ground sentence is now true of the build. All nine captures re-taken at 14:12:43–44, after the 14:12:21 stylesheet write — checked to the second |

Eight of nine landed or landed in part. The one that did not is fix 7, and it did not land in the same way it did
not land last time.

## Verdict

**Pass. Objective 5, Colour and surface 5, Motion 5, Mission and exclusivity 5, Continuity 5; Composition 4, Typography 4, Imagery 4, Craft 4. Both faulty objects are replaced and both replacements hold under the two rules they produced; the direction's name is now true inside a viewport at every width I measured, which is the change that turns this from a claim into a page; four hardening fixes remain, the first of them a carry-over — an italic word still ends its line at three of four widths, and the rationale still says it does not.**

---

## Ruling one: the fork is accepted

**It does what the corrected brief asks, and it does it in geometry rather than in colour, which is the test the rings failed.**

Read from `index.html:107-113` and checked against both captures. The stem runs (160, 264) to (160, 211) and stops
exactly on the accent dot's lower edge. The two arms leave the dot's edge at (168.63, 188.28) and (151.37, 188.28)
and run **147.8 user units each** to meet terminal circles of identical radius 18 at (50, 74) and (270, 74) —
**41.57° either side of the vertical**, mirror-symmetric to the user unit. Neither arm is longer, thicker, higher
or nearer, so the drawing cannot prefer a school.

On the two rules it had to clear:

- **Nesting.** There is no containing shape. Nothing is inside anything, so the form cannot say that one way to
  attend lives inside the other. This is the rule my iter-0 ruling produced and it is satisfied by construction
  rather than by adjustment, which is the point — the rings were unrecoverable because the relation lived in the
  nesting, and a fork has no nesting to live in.
- **Proportion.** Two terminals is a count with no denominator, which CONTRACT section 3 expressly allows, and two
  is the deck's own count of doors. Nothing measures a radius, a distance or a population.

**Forced colours settles it the way it settled the rings, in the opposite direction.** `M24-beat3-forced.jpg`: a
black branch with a filled node and two identical **open** terminals. The rings became a rifle target when the
tints came off; this becomes a branch. No misreading is being held off by a colour the user agent may remove.

Two further things in its favour that the rationale does not claim. The stem sits at the bottom and the arms rise,
so the object reads downward as two ways converging into one school and upward as one school branching into two
ways — **both are true statements of this page**, so the ambiguity costs nothing. And it is DD-21-safe in the way
the rings were only argued to be: a third arm is one more path from the same point, which keeps several campuses
plus one virtual school drawable without redrawing the object.

No `<text>` node was added, so the zero-text-node property that makes M10's scaling defect impossible here is kept.

## Ruling two: the cadence tracks are accepted, on one of the four arguments offered for them

**The object clears the rule. Two of the engineer's four defences do not survive contact with the render, and the exposure it did not test is not proportion at all.**

**What passes, and it is enough.** `M24-beat2-normal.jpg` and `-forced.jpg`: two horizontal hairlines, each crossed
by seven hairline marks, the upper at a constant pitch of 48 user units, the lower at 54/34/74/34/36/56, both series
running 16 to 304. **Nothing is filled, so there is no part of a whole**, and that single fact disposes of the
contract rule: the tiles failed because four of nine is a numerator over a denominator, and there is no numerator
here. Seven marks is a count with no denominator, which the rule allows in terms. The counts are deliberately
equal, so a reader who does count seven and seven takes away "the same number of steps, differently spaced" — which
states no quantity, no ratio and no rate. That last point matters more on this deck than on most: fact 3 of the
standing five is that the estate carries unpublished speed multipliers, so a two-track drawing is in a dangerous
neighbourhood, and equal counts over equal spans is exactly what makes a speed claim unavailable even by implication.
I checked seven against `copy.md` sections 0 to 9 and against every register row the deck relies on (CR-011, CR-021,
CR-032 to CR-035): seven appears in no role. So the object states nothing the register does not hold.

**What does not survive: "the tracks are cut by the frame at both ends so no total is drawn."** This is asserted
in `RATIONALE.md` twice and in the commit message. It is geometrically true — the path runs `M-8 96H328` and is
clipped by the SVG viewport — and perceptually it is not delivered. My probe, measured in rendered CSS pixels at
four widths: the visible line runs the full object box, and the outermost marks sit **16px** in from each end at
1440 and **14px** at 390. Beat 4's line gives **39px and 34px**. There is no drawn frame anywhere on this page, so
a clip at an invisible boundary is indistinguishable from a line that simply stops, and 16px of bare line does not
read as continuation — which I know because beat 4's 39px does, and I praised it for exactly that at iter-0. A
reader sees two bounded rulers. Either make the claim true by pulling the marks inward to beat 4's runway, or
strike it. It costs nothing to strike, because the object does not need it.

**What the four defences never tested.** The engineer checked the object against quantity, ratio, speed and total.
It did not ask the question this page makes unavoidable: **on an umbrella page whose entire subject is two schools,
what does a reader do with two parallel things?** A parent reaches beat 2 from a first screen with two doors and is
heading for a two-column table. The available misreading is that the campus runs on a regular cadence and the online
school on an irregular one — a differentiating claim about the two schools, drawn directly beneath a sentence whose
first three words are "One school,". That is the same family as the rings' defect, and it is the thing to have
looked for.

**I am logging it rather than requiring it, and the reason has to be a rule I already applied.** Two mitigations
are real. This page draws its two-ness **horizontally**, every time — two doors side by side, two table columns,
the fork's two arms left and right — and this object is stacked **vertically**, which is the axis the page uses for
sequence rather than for peers. And the sentence directly beneath is the strongest correction available anywhere in
the deck: it opens "One school, one admissions bar, one mastery-based program." That is the same standard on which
I accepted the arc's acceptance-rate reading at iter-0 — the sentence beneath names the unit — and consistency
requires me to apply it the same way here rather than harder because I like the object less.

**And the design cost, which is the real criticism.** Beat 2 and beat 4 are now the same drawing at two weights.
The engineer saw this coming and separated them with stroke weight, argued in Departures, and the argument is
sound as far as it goes. But the tiles were wrong and their replacement is merely safe: of the four objects, beats
1, 3 and 4 each draw their sentence, and beat 2 gestures at a contrast the reader has to construct. If this
direction wins, beat 2 is the first object to redraw — not because it claims anything, but because it is the one
screen of four that does not make the argument, and it spends a full viewport doing it.

## Judgement: the page bought its restraint with a third more page. Is that the right trade?

**Yes. Keep it. I would not buy the pixels back, and I would spend somewhere else entirely.**

The numbers first, all reproduced by my probe: **9,856px at 390×844**, up from 8,623, **+1,233px**, which is 11.7
phone screens. Across all eighteen mocks' `qa/fold.md` files that is **29 per cent longer than the next longest**
(M14, 7,654) and **48 per cent above the median** (~6,672). At 1280×720 it is 7,403px, 10.3 screens. These are not
small.

**Why the trade is right.** Before this pass the mock's name was false inside every viewport at every width — my
iter-0 probe found two objects at least a quarter visible at three of four beat tops at both 1440×900 and 390×844.
A direction whose thesis is a property of the page rather than of any screen is not a direction; it is a quiet
layout, and Nari has several of those to choose from. The 1,233px buys the only thing that makes M24 distinct, and
it buys it outright: one object, 100 per cent visible, at sixteen of sixteen positions.

Three things make the cost cheaper than the number looks. **The pixels are air, not reading** — nothing was added
to read, and a parent flicks past empty cream at the speed of a flick; the page gained about one and a half phone
screens of that. **The cost is elective** — the routing job finishes on the first screen at all sixteen fold rows,
and the compare anchor jumps straight past all four beats to the table, so the parent who does not want the
argument never pays for it. And **two thirds of sessions are mobile** (fact 5), where full-bleed sectioned scrolling
is the native idiom; the laptop rows pay more turns, and desktop is the smaller third.

**Why I would not buy the pixels back.** I checked the arithmetic on the obvious lever. What required fix 4
actually needs is not that a beat be a full viewport but that the next object stay out of the fold, which needs
section height H ≥ (2V + C)/3 where C is the content height. At 390×844 with C ≈ 593 that is 760px instead of 844;
at 1440×900 with C ≈ 746 it is 849 instead of 900. Capping rather than flooring returns about **340px of the
1,233 at 390 — roughly a quarter** — in exchange for the beat no longer being a screen, which is the thing that was
bought. Not worth it. The two places that would return real height, the proof strip and its sources line, are
required verbatim by CONTRACT section 7 and are not the engineer's to cut. There is no cheap purchase of the same
thing, which is why "state it plainly and name the lever" was the right call and burying it would have been the
wrong one.

**What I would spend instead.** Not pixels — turns. The thing that makes an 11.7-screen page safe rather than
merely honest is the shortcut, and today the shortcut is below the fold on exactly the rows that carry two thirds
of sessions: the contract's compact-door rule puts both door lines after the second CTA on viewports under 700px
tall, and the compare anchor follows them, so at V9 it sits about 20px under the edge. **Get the compare anchor
above the fold on the phone rows** — give back one step of the door lines' top margin, or set each door line to a
single line at those widths. It costs a few pixels of air on one screen, it does not touch a single thing this
pass bought, and it converts the length from a risk a parent discovers into a choice a parent makes. That is the
trade I would make, and it is the only place the length actually bites.

**One note for Nari's review, unchanged from last pass and now more true.** Show her a beat first, not the first
screen. The first screen is the weakest expression of this direction by construction, and at 390 it is
indistinguishable from every other mock. Open with `M24-beat4-normal.jpg` or `M24-beat1-normal.jpg`, then the
first screen, then the table. And put the length in front of her as a number with its mitigation attached, because
it is her judgement and not mine: the page is half again as long as the median, the routing job is done in the
first 600 pixels, and the shortcut past the rest is one tap away.
