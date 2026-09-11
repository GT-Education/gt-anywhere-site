# M24 One at a Time, rationale

| Field | Value |
|---|---|
| Mock | M24 "One at a Time" (new direction, from the Design Library), brief `0_plan/kb/briefs/M24.md` under `CONTRACT.md` v2.1 and the borrowing rule DD-48 |
| Lens order | L3 mission, L4 exclusivity, L1 objective, L2 continuity |
| Built | 2026-09-11 by a Fable design-engineer fork. No browser tool: the runner `0_plan/tools/shots.mjs` drove seven passes, and its screenshots under `qa/` were opened and read between passes (Self-check lists what each pass changed) |
| Files | `index.html`, `styles.css` (links `../shared/tokens-v2.css`, `../shared/fonts.css`), this file; logos from `../shared/img/` |
| State | Default state: no photograph in either state, no JavaScript. D-039 (scripts and inputs in mocks) is escalated and undecided, so there is no `data-d039` declaration, no V6 reveal, and the page is complete at rest |
| Claims on the page | 90th percentile (CR-011), $10,400 (CR-021), four in-person or intensive weekends (CR-032), 9 to noon and two hours (CR-033), two to three hours (CR-034), weekly check-ins (CR-035). Every one of those rows is "Unverified, public" in `0_plan/12-claims-register.md`: allowed on a mock, blocked for production (REQ-022, DEL-018). The four beats add no figure the deck does not carry; the objects are argued figure by figure below |

## Direction

A school confident enough to say one thing per screen. The source language (`insp-palebeat`, "Pale Beat") puts one
centred object per beat in negative space that takes about three quarters of the frame, with small type set well
below it and no headline competing. M24 takes that grammar and gives it GT's own facts: after the choice, each
screen carries one drawn object, one tracked label and one sentence from the deck, so a parent reads the argument
as four statements rather than a wall. The support language (`insp-outship`) contributes the long still hold and
the single italic emphasis word per sentence, which the estate already uses in its own headline.

**The honest tension, stated rather than papered over.** The source has no headline at all and one object per
section. The contract requires the fixed 132-character sentence, the provenance line and both door CTAs above the
fold at every row, plus the compare anchor on the first screen. So the first screen is not a beat and cannot be:
it carries six elements. The restraint begins at the second screen. Everything from the opening rule down obeys
the one-object rule strictly, and the first screen borrows only the language's axis, its air and its small type.
This mock does not claim the source's purity; it claims the source's rhythm from the second screen on.

The compositional consequence, and the risk the brief names: a direction built on negative space can read as a
void rather than as composition. M09's critic ruled on exactly that question and the ruling was narrow — the void
there was a box *reserved inside a component* and left empty at rest, not air between composed blocks. M24 keeps
the distinction. The first screen has no empty component: every block is complete at rest (both door lines are
visible at every width, there is nothing to hover). Its slack is distributed by `justify-content: space-between`
into two equal fields between three finished blocks — the sentence, the choice, the compare line — which is a
title page, not a hole. Measured at 1440 the two fields are 142px each; at 1280, 64px each. In the beats the air
is not slack at all: it is a fixed 96px above and below the object at 1024 and up (64px on phones), identical in
all four beats, which is what makes the page read as a sequence rather than a layout.

## What was borrowed and what was deliberately not

| From the source | Borrowed | Refused, and why |
|---|---|---|
| `insp-palebeat` one-object beat section | Yes: one centred object per section, at most 320px square, in a fixed field of air; sections stack with identical margins so the page reads as beats | |
| `insp-palebeat` caption-below-object | Yes: no headline competes with the object; a `--font-mono` `--text-xs` tracked label and one deck sentence at `--text-base` sit well below it | |
| `insp-palebeat` monoline geometric objects | Yes, as original geometry built from GT's own facts (below). Hairline strokes at 1.5px, flat fills, no gradient | The source's "single soft radial glow" is refused: a gradient is the one thing on this page that could not be drawn from a fact |
| `insp-palebeat` pale lilac canvas `#E7E2F1` | No | DD-48. The ground is `--color-bg` `#fcf4ef`, the estate's own cream, because a parent hands off from this page to two sites whose shared ground is measured for one of them, anywhere.gt.school (`shared/CONTINUITY.md`); gt.school has no mirror here. A borrowed canvas would fail the Continuity row by construction |
| `insp-palebeat` one accent hue **per beat, changed between sections** | The "exactly one accent per beat, never two at once" half only | The **changing hue** is refused. Four sections in four saturated hues would give a school four unrelated colours and no brand. GT has one accent, `--color-accent`; two of the four beats spend it once, and two spend none |
| `insp-palebeat` type: "lowercase 13-15px caption", "tracked uppercase 10px label" | The scale and the subordination | The faces and the exact sizes: Literata, Inter Tight and Inconsolata are fixed by K12's "what never changes" list, and the contract's smallest step is `--text-xs` (12 to 13px), so nothing on this page is set at 10px |
| `insp-palebeat` motion: 0.10s snaps between absolute stillness | The stillness | The snap. It is a film's device between cuts; a page has no cuts. Nothing on this page animates at all |
| `insp-palebeat` "no headline" | | Refused by the contract, as above. The fixed sentence is the h1 at every row |
| `insp-outship` long still hold, one italic emphasis word per sentence | Yes: each beat sentence sets exactly one word in Literata italic, chosen so it never falls at a line end (re-measured this pass at 375, 390, 1280 and 1440; the first build's *advance* did fall at one and is gone with that sentence) | Its cream `#FAF5EC`, vermilion `#E45D34`, violet, sage and tan; its hard cuts to a near-black scene; its glyph-particle fields and score pills. All palette, all refused under DD-48 |

No code was taken from `examples/stillpoint.html` or `examples/kilnworks.html`: nothing was copied from either
file, and both were read as whole pages for their composition and then closed. The overlap a reviewer will see is
the borrowing itself and is declared above — a section that holds one object in air, a caption set well below it,
`min-height` on that section — and it is composition, not code. The class names, the token values and every number
in this stylesheet are this build's own.

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented children, in
person at our Georgetown, Texas campus or online from anywhere." Literata at `--h1-weight` 400 (a local variable,
so DD-38's 300-against-400 test is one edit), `--text-3xl` (27.00px at 360 to 46px at 1440 and above),
`--leading-tight` 1.15, centred on the page's one axis. A no-break space binds "from anywhere." so the seven-line
phone setting never ends on a one-word line.

**Measure.** The contract caps the h1 at 35ch; the brief puts it at eight columns. Both are applied: below 768 the
content column binds, and from 768 the width is `min(35ch, calc((100% - 352px) / 12 * 8 + 224px))`, which is
literally eight of twelve columns with 32px gutters. Measured widths: 459px at 768, 629px at 1024, **800px at
1280** and **907px at 1440**. 907 is the contract's own 8-column figure (section 2) to the pixel; 800 is not its
779, because the contract's V14 row assumes a 1184px content width and this page's `.wrap` gives 1216px at 1280. 35ch would have been
932px at 1440, wider than eight columns, so the grid binds there and the contract's cap binds nowhere.

**Line counts, measured.** 7 lines at 360, 375 and 390 (217, 219, 222px); 6 at 414 and 430 (193, 195px); 3 at 750
in the landscape recipe at `--text-xl` (83px); 6 at 768 (236px); 4 from 1024 to 1920 (178, 199, 206, 212px); 8 at
320 (248px). The contract's 6-line estimate at V2 is one line optimistic, as M12 measured first and as the
contract now records; nothing else moved. Longest rendered h1 line: 25 characters at 375, 36 at 1280 and 1440.

The beat labels are `h2` ("Admissions", "Mastery", "Two ways to attend", "Across the year"), then one `h2` per band
below: "Compare the two schools", "What is true of both schools", "How to apply", "Questions before you apply",
"Already a GT family?"; "Texas families" is an `h3` inside the comparison band. No level is skipped and there is
exactly one `h1`.

## The four objects: what each is built from, and why it implies no unregistered figure

Every object is original monoline geometry drawn for this page. None is a chart: none has an axis, a scale label,
a legend or a tick that stands for a unit the page does not name in words directly beneath it. Beat 2's marks are
the one case worth stating plainly — they stand for no unit at all, which is why they are a cadence and not a
scale, and the two tracks carry the same number of them so no comparison of quantity is on offer. **No object contains
text of any kind** — there are zero `<text>` nodes in the four SVGs, measured — so M10's defect (labels declared at
14px rendering at 11 to 13px because they scaled with the viewport transform) cannot occur here by construction,
and there is no SVG font size to report.

| Beat | Object | What it is built from | Why it implies no figure the deck does not carry |
|---|---|---|---|
| 1. Admissions | A 270° segmented arc: one stroked band outline, nine radial ticks dividing it into ten equal segments, and the tenth segment filled with `--color-accent-text` | Percentile is the deck's own unit, and a percentile scale divides into ten. The filled tenth is the admitted band | The only quantity drawn is "one tenth", which is the deck's own "at or above the 90th percentile" (CR-011) stated in the sentence below it. The arc carries no numerals, no axis and no scale label |
| 2. Mastery | Two parallel hairlines, each running the full width of the frame and cut by both its edges, each crossed by seven hairline marks: the upper at a constant pitch of 48 user units, the lower at pitches of 54, 34, 74, 34, 36 and 56. Both series begin at 16 and end at 304, so the two tracks have the same count and the same span | The contrast the sentence beneath states in its own words: "Students advance when they show mastery, **not when the calendar says so**." The even track is the calendar; the uneven one is mastery | **Nothing is filled and nothing is a part of a whole**, so there is no proportion to read: the object states a difference of cadence, not a quantity. The two counts are deliberately equal, so neither track can be read as more steps, fewer steps, faster or slower — no speed claim is available even by implication. Seven is not a figure this deck carries in any role, the tracks are cut by the frame at both ends so no total is drawn, and the object carries no numeral, no axis, no scale and no label |
| 3. Two ways to attend | A symmetric two-branch fork: one short hairline stem rising from (160, 264) to a single filled accent dot at (160, 198), then two arms of equal length (165.76 user units from the branch point to each terminal's centre, 134.76 of it drawn between the dot's edge and the terminal's) and mirrored angle (41.5° either side of the vertical) ending in two identical hairline terminals of the same radius, at (50, 74) and (270, 74). Mirror-symmetric about the vertical axis to the user unit | One school at the branch point, two ways to attend from it. The terminals are identical because the two schools are peers | Two is the deck's own count of doors, and it is a count with no denominator (CONTRACT.md section 3). **Nothing is nested inside anything**, which is the point: the fork has no containing shape, so it cannot say that one way to attend lives inside the other. Nothing measures a radius, a distance or a population, and neither arm is longer, thicker, higher or nearer than the other, so the drawing cannot prefer a school. It survives forced colours as geometry rather than as tint (`qa/M24-beat3-forced.jpg`) |
| 4. Across the year | A hairline running the object's full width, crossed by four marks at the eighth, three-eighths, five-eighths and seven-eighths points | Four marks are the four intensive weekends (CR-032); the even spacing is the deck's own "together in person each quarter"; the line is the year, with runway at both ends | Four is a register-backed figure in the deck's own words. The marks **cross** the line rather than rise from it, which is what keeps this from reading as a bar chart with an unlabelled axis. No month, no date, no duration is implied, and the deck's own caution that the weekends are not placed on a calendar is honoured by drawing no calendar |

**Forced colours.** The brief's requirement is that the objects survive when fills are dropped and only outlines
remain. Rather than trust the UA's mapping, the objects are re-declared inside a `@media (forced-colors: active)`
block that is **last in the stylesheet** (M07's fix): hairlines become `stroke: CanvasText; fill: none`, filled
shapes become `fill: CanvasText; stroke: none`. M07's defect was a per-segment stroke striking through its own
labels; here the arc is drawn as **one outline per band** (a single stroked path for the whole band, plus nine
separate tick strokes that stop at the band's edges) and there are no labels to strike. Verified by eye in
`qa/M24-beat1-forced.jpg` (the filled segment stays solid black inside a hairline band), `qa/M24-beat2-forced.jpg`
(both cadences survive, because the whole distinction is where the marks fall and none of it was ever carried by a
colour), `qa/M24-beat3-forced.jpg` (a black branch with a filled node and two identical open terminals: no target,
no nesting) and `qa/M24-beat4-forced.jpg`. **That test is now the second reason the rings had to go**: with the
tints removed they were a rifle target, and an object whose only defence against a misreading is a colour the user
agent may remove is not carrying its meaning in its geometry (CONTRACT.md section 3, "nesting is hierarchy").

**The accent as a graphical object, measured.** The two accent shapes take **`--color-accent-text`** (`#a5501a`),
which is **5.14:1** against `--color-bg` (computed here, and the token's own recorded figure). `--color-accent`
`#e48b53` was the first build's choice and measures **2.38:1** (K12 F88), below 3:1; its two mitigations both
reproduced — the navy hairline made the shape's boundary 13.88:1 on the ground, and neither shape carries
information that is not also in the sentence beneath it — and neither was about what the accent is *for* here. In
this direction the accent is the one thing the eye is meant to land on in a frame that is three quarters empty,
spent exactly twice on a page that runs 9.2 screens at 1440 by 900 (11.7 at 390 by 844). At 2.38 it landed
quieter than the navy hairlines around it, so the loudest mark in the object was its own outline. CONTRACT.md
section 3 now states the rule generally ("a line that carries the argument must reach 3:1") and names this mock's
fills as one of the three cases that produced it.

**The hairline goes with the swap.** `--color-navy` on `--color-accent-text` is **2.70:1** (computed), so a navy
outline on the darker fill stops delimiting the shape and becomes noise on it. `.o-accent` is therefore fill only.
Nothing is lost: each accent shape is already bounded by navy hairlines that belong to the object around it — the
arc's band outline and its ninth tick close the filled segment on all four sides, and the fork's stem and two arms
meet the dot — and forced colours collapses fill and stroke to `CanvasText` in any case. Measured ratios used
above, all against `--color-bg` `#fcf4ef`: `--color-accent-text` 5.14, `--color-navy` 13.88, `--color-text` 17.69,
`--color-border-strong` 3.63, `--color-focus` 8.20.

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id and name, lens order | M24, folder `M24-one-at-a-time`; L3 mission, L4 exclusivity, L1 objective, L2 continuity | Met |
| Source language | `insp-palebeat` primary (one unchanging ground, one centred object per beat, three quarters air, small type well below, no competing headline after the first screen, one accent per beat); `insp-outship` support (long still hold, one italic word per sentence). Both borrowed as grammar only | Met |
| What is deliberately not borrowed | Named, item by item, in the borrowing table above: the lilac canvas, the per-section accent change, the source's absence of a headline, its radial-glow gradient, its 10px type and its snap | Met |
| Thesis | One thing per screen after the choice: one drawn object and one deck sentence per beat, four beats, then the table | Met |
| Exemplars | `examples/stillpoint.html` read as a whole page for the beat sequence (no code taken). Barnes (C03) for one saturated colour spent once — here twice on a page of 9.2 screens at 1440 by 900, once per beat that spends it. Exeter (C04) for a figure that carries a label and a link — here each object carries a label and the sentence it illustrates. `every-1440-full.jpg`'s dense directory (C26) avoided: the page has one dense object, the comparison table, and says so | Met |
| Composition | First screen as the contract requires: header 56 (92 where the mark holds its floor and the header takes two rows), h1 at eight columns, provenance, two doors with both CTAs, all present at every row; the compare anchor is on the first screen from 768 up and falls below it on the phone rows, declared under Departures. From the beats' opening rule the page is beats: each a full-width section on `--color-bg` **at least one viewport tall (`min-height: 100svh`), its block optically centred**, one centred object at most 320px square, at least 96px of clear space above and below at 1024 and up and 64px on phones (measured 96/96 at 1440 and 64/64 at 390, with the centring adding 146px more at 390 by 844 and 185 at 1440 by 900), then a `--font-mono` `--text-xs` uppercase tracked label and the deck sentence at `--text-base`, centred, at most 45 characters a line (measured longest line 33, beat 2 at 1440). Four beats in the brief's order: the admission bar, the program, the two places, the year. Then the comparison table, the one dense object. **Measured this pass: at every one of the four beat-top scroll positions, at 1440 by 900, 1280 by 720, 390 by 844 and 375 by 629, exactly one object is at least a quarter visible, and it is 100 per cent visible.** The beat language is carried below the table as the tracked label over each band's heading | Met |
| Typography | Contract roles. The beat sentences are the deck's own, set in Literata 400 (the contract's "Literata where a brief says so"), each with exactly one word in Literata italic placed mid-line: *admits*, *mastery*, *or*, *year*. Measured this pass at **375, 390, 1280 and 1440**, line by line: none falls at a line end at any of the four. The first build's beat 2 set *advance*, which ended line one at every width, against this rule and against the first build's own claim to the contrary; that sentence is gone and the replacement was measured before it was claimed | Met |
| Color and surface | One ground, `--color-bg`, from the header to the families bar, and **it is now true of the build**: the first build tinted the proof band (`--color-surface`) and the TEFA module (`--color-anywhere-tint`), so the page had four grounds where this row said one. Both are on `--color-bg` and separated by the `--color-border-strong` rule the beats open with, which is the page's one structural device (3.63:1); the footer is the page's one change of ground, to `--color-navy`. Objects drawn in `--color-navy` at 1.5px non-scaling hairlines (13.88:1 on the ground), except beat 4's four marks at 8px, declared under Departures. Exactly one accent use in beat 1 (the filled arc segment), one in beat 3 (the fork's dot), none in beats 2 and 4, none anywhere else on the page — measured, `.o-accent` count per beat is 1, 0, 1, 0, and 2 on the page. The accent is `--color-accent-text` at 5.14:1, fill only. Focus per contract | Met |
| Imagery | Diagrammatic. No photograph in either state: this direction's argument is that one drawn fact per screen is enough, and a photograph would be the one element on the page that is not drawn from a register row. Stated as a decision, not an omission (Assets) | Met |
| Motion | Still. `styles.css` declares no `transition` and no keyframe rule; the runner measured every computed transition and animation duration at 0s under `prefers-reduced-motion: reduce`. V1 and V3 are instant; V10 is the native anchor scroll inside `no-preference` only. The source's snap is not borrowed | Met |
| Copy | Sections 0 to 8 verbatim. Beat labels from section 9 and the allowed-headings table (below). No new words; no figure the deck does not carry | Met, with the section 9 reading stated below |
| Conversion | Doors on the first screen at every row; compare anchor under them; four beats; the table with repeated values and the doors repeated after it; TEFA module; proof strip and sources line; application steps; four secondary CTAs; current families; navy footer with both marks and the facts block | Met |
| Acceptance | `check-mocks.py` **37 pass, 0 fail**; `check-claims.py` clean; the runner's Result line "all required rows pass" (16 fold rows, reflow, zoom, reduced motion, doubled root font, console, mark geometry). Exactly one object and one line per beat, verified in the captures and measured (1 `svg`, 1 `p` per beat). No beat carries two accent uses, measured. Every object checked in a forced-colours capture. DD-38, DD-39, DD-47 and DD-48 named here, with DD-46 and D-039 | Met; critics pending |

### Beat labels and the section 9 reading

The brief says the beat labels come from `copy.md` section 9. Section 9 records each word with the brief that
needed it; it is a register of vocabulary that has been approved for use, not a per-brief allocation, and this
mock reads it that way and says so rather than assuming it silently.

| Beat label | Where the words are already recorded |
|---|---|
| Admissions | An allowed eyebrow label for any mock ("Section headings allowed beyond the slots"), and a section 3 row label |
| Mastery | Section 9, the M02 fact-labels row: "the deck's own word for the fact it labels ('one mastery-based program', 'show mastery')" |
| Two ways to attend | An allowed section 1 heading, and in the same section 9 M02 row |
| Across the year | Section 9, the M14 step-labels row |

The five band labels below the beats — "Compare", "Proof", "Admissions", "Connect", "Families" — are `copy.md`'s
own allowed eyebrow list ("Eyebrow labels (any mock): one-word section labels in Inconsolata above an h2"), used
in exactly that role. "Admissions" therefore appears twice as a label, over beat 1 and over "How to apply"; both
are the deck's own word for the same subject in its two places on the page, and a one-word tracked label is
wayfinding rather than a restatement of a fact.

Each beat's sentence is a complete fixed slot, quoted whole, never a clause lifted out of a cell: "GT School
admits students at or above the 90th percentile." (section 5 line); "One school, one admissions bar, one
mastery-based program. Students advance when they show mastery, not when the calendar says so." (section 3, "Same
school, same academics", the value both columns carry under DD-43); "Kindergarten to 8th grade, in person or
online." (section 4 fact four); "Four intensive weekends a year in Georgetown." (section 3, In-person time, GT
Anywhere column). Where a brief wanted a partial cell, the mechanism is to record it in section 9 first (as M07
did); no partial cell is used here, so `copy.md` needed no change and none was made.

**What the sentences were changed to, and why (the critics' fix 3).** The first build made the page state its four
things twice: beat 2 was proof fact two verbatim, beat 3 is proof fact four verbatim, beat 1 was the steps lede
verbatim, and CR-011 appeared five times. Two of the three are closed. Beat 2 now takes the sentence the new
object actually draws, which the proof strip does not carry. The steps lede is removed, so the admission bar is
stated once as prose (beat 1), once in the proof strip's own different words, and twice in the table where DD-43
requires the value in both columns: **CR-011 is now 4 on the page, down from 5**, and `check-claims.py` counts it.
Beat 3 still shares its sentence with proof fact four; the reason is in the iteration section below, and it is the
one required fix this pass did not fully close.

## Fold: designed to, then measured

Method for the estimates, per `CONTRACT.md` section 2: the contract's own h1 heights (188 at V2, 193 at V5, 199 at
V14, 212 at V16), the measured header (56, or 92 below 430 where the lockup holds K12 V2's 27px floor and the two
utility links drop to a second row), and this mock's own block heights. On rows where the first screen's content is
shorter than `calc(100svh - --header-h - 1rem)`, `justify-content: space-between` distributes the slack into two
equal fields, so the estimate for those rows is `header + padding + head block + one field + door block`.
Measured: the runner's current pass, `qa/fold.md`, bottom of the second door CTA.

| Row | Viewport, limit | Layout | Estimate | Measured | Result |
|---|---|---|---|---|---|
| V2 | 375 by 629, 605 | Compact phone: header two rows, doors stacked, lines after the second CTA | 92 + pad 8 + h1 **188** + 16 + provenance 21 + gap 16 + door 96 + gap 16 + door 97 = **550** | **581** | Pass, 24 to spare. The whole 31px difference is the h1: it sets in 7 lines (219px) at 375, not the contract's 6 (188px) — the correction M12 measured first |
| V5 | 414 by 715, 691 | Compact phone, full gaps | 92 + 16 + h1 **193** + 16 + 21 + gap 24 + door 97 + gap 16 + door 96 = **571** | **571** | Pass, 120 to spare; exact |
| V14 | 1280 by 720, 696 | Doors side by side, slack in two fields | 56 + 24 + head block (h1 **199** + 16 + 22 = 237) + field 64 + door 111 = **492** | **492** | Pass, 204 to spare; exact |
| V16 | 1440 by 900, 876 | Doors side by side, slack in two fields | 56 + 32 + head block (h1 **212** + 16 + 23 = 251) + field 142 + door 112 = **593** | **593** | Pass, 283 to spare; exact |

Two further rows the contract singles out. **V10 (750 by 342, limit 318)**, the phone-landscape recipe: section
padding `--space-3`, the h1 one token down at `--text-xl` across the full content width with its 35ch cap removed
(a declared departure), the doors side by side, the lines and the compare anchor below the fold — 56 + 8 + h1 83 +
8 + 22 + 8 + door 99 = **284**, measured **284**, 34 to spare. **V18 (320 by 256)**, the reflow row: no horizontal
scroll; the fold rule does not apply (DD-44).

All other measured rows, second CTA bottom against the limit: V1 595 of 716; V3 584 of 640; V4 584 of 635; V6 579
of 815; V7 570 of 657; V8 538 of 715; V9 600 (emptiness row, page height 9856); V11 663 of 1000; V12 731 of 1170;
V13 506 of 744; V15 468 of 624; V17 623 of 936; V19 406 of 552 (zoom row, reported: scroll width 1024, nothing
clipped). Sixteen fold rows; all sixteen pass.

### The bottom edge, which is this direction's hardest rule

A page on one ground cannot use the runner's surface-change fallback: M12 and M03 pass the continuation test at
laptop rows because a navy first screen meets a cream band, and M24 never changes ground until the footer. So the
continuation has to be real ink, at every row, and a beat whose object and sentence finish well above the fold
leaving only padding is exactly the false floor that failed M15's V5, V14 and V15. Two devices carry it, and
between them they cover both regimes:

1. **Where the first screen's content overflows** (every phone row, and the landscape row) the door lines and the
   compare line are cut by the edge. The runner's evidence column reads "text cut by the edge" at V2, V3, V4, V8,
   V9 and V10, and "content reaches 737 of 740", "714 of 715", "824 of 839", "680 of 681" at V1, V5, V6 and V7.
   What crosses the edge is prose a parent reads, not a rule.
2. **Where it fits** (768 and up, and the zoom row) the first screen is sized to stop `--fold-tail` (16px) short
   of the bottom edge, and the beats open with a 1px rule across the full width. The rule lands 15px above the
   edge with the first object below it: "content reaches 1009 of 1024" at V11, "1179 of 1194" at V12, "753 of 768"
   at V13, "705 of 720" at V14, "640 of 648" at V15, "885 of 900" at V16, "945 of 960" at V17, "561 of 576" at V19.
   That rule is `--color-border-strong`, not `--color-border`, precisely because it has to be seen: computed
   3.63:1 against `--color-bg` where `--color-border` is 1.56:1.

The first screen's height is `calc(100svh - var(--header-h) - var(--fold-tail))` inside an `@supports (height:
100svh)` guard, with a `30rem` fallback. `svh` is DD-44's own unit and no `vh` appears anywhere in the file.

## Decisions applied

| Id | How it is applied |
|---|---|
| DD-01, DD-19 | The three site faces and the layer-1 swatches only; layer-2 roles named in their own table below; every value outside the token set listed in Departures. No raw hex in `styles.css` |
| DD-04 | Cue set per door: the label ("In person", "Online") in `--font-mono` uppercase, the school name, the CTA. No photograph in the default state; no icon, because this direction's drawn language belongs to the beats and a glyph on the door would be a fifth object competing with the four |
| DD-06, REQ-013 | Table rows in the deck's order: the three shared rows first, then the rows that differ |
| DD-07, G0.5 items 2 and 3 | No outcome figure, no accreditation statement, no Cognia mark |
| DD-08, DD-31, DD-42, RF-25, AD-11 | No photograph in either state (Assets: this is a decision of the direction, not a permissions wait) |
| DD-10, MD-25, C06 | Exclusivity is selectivity: the first beat is the admission bar, drawn and stated. Tuition appears only where the deck places it (table row, TEFA module). No wealth cue, no price on any beat |
| DD-12, DD-13 | Header: lockup, "Current families", "Contact admissions", no menu, no phone number; the number is in the footer only |
| DD-14, MD-23 | Designed at 375 first. The two doors are equal in every dimension: same label role, same name size, same CTA width (both `display: flex` inside a 22rem door column, so the longer label does not make a longer button), same 44px target |
| DD-21 | The doors are a `<ul>` and the lines a `<ul>`; both grids come from `repeat(2, …)`, so three to five entries is one value changed in one place. The beats do not encode two: the arc, the two cadence tracks and the four marks are school-wide facts, and the fork draws two **ways**, not two **places** — it is a branch, so a third arm is one more path from the same point, which DD-21's own wording (several campuses plus one virtual school) keeps true. Nothing on the page is nested inside anything (CONTRACT.md section 3, "nesting is hierarchy") |
| DD-25, REQ-070 | Every application link carries `?school=`; links go only to gt.school, anywhere.gt.school, apply.gt.school, community.gt.school and `#compare` |
| DD-29 | Every screen carries a fact at rest: the first screen the two door lines, then one deck sentence per beat, then the table, the proof strip, the steps and the footer facts block |
| DD-38 (b), R5, RF-55, RF-58 | Fluid clamps `--text-xs` to `--text-3xl` and `--text-btn`; `--leading-prose` 1.5 on every multi-line string; `--leading-body` 1.25 on single-line labels and buttons; `--measure-prose` 65ch on the prose blocks; `--h1-weight` exposes the 300-against-400 test |
| DD-39 (a), RF-07, K3 5c to 5f | `--color-text-muted` for labels, door lines and the beat labels (6.25:1 on `--color-bg`); `--color-border-strong` for the two structural rules (3.63:1); `--color-on-navy` and `--color-text-muted-on-dark` in the footer (14.58 and 7.81); the accent as a shape only, twice, as `--color-accent-text` at 5.14:1 and fill only. DD-39 (a) rules where the accent may be used, not that any ratio is adequate wherever it is allowed; CONTRACT.md section 3's "a line that carries the argument must reach 3:1" settles the ratio, and `--color-accent-text` is the DD-19 departure already recorded against this row |
| DD-43 | The three shared rows repeat their value in both columns; below 768 each cell is labelled with its school name |
| DD-44, K10 | No `vh` anywhere; `svh` inside `@supports`; the first screen is sized so the next band is visibly cut at every row; height queries at 400 (with width 600), 620 (with width 768) and 679 |
| DD-46 | Door button fill: the contract's surface-dependent treatment. The doors sit on a light ground, so they are a `--color-navy` fill with `--color-on-navy` text (14.58:1), which is the fill the estate itself uses for the application action on its own first screen. Orange fill was not used: K12 F87 measures the estate's near-white on orange at 2.50:1 |
| **DD-47** | The button corner is a uniform `--radius-md` (8px) on all four sides, on the door CTAs and on every `.btn`. Measured in `qa/M24-focus-door-zoom.jpg`: `border-radius: 8px`, all four corners. No cut corner, no clipped polygon; the contract settles this once so no engineer chooses per mock |
| **DD-48** | The borrowing rule. Composition, rhythm and structural devices from `insp-palebeat` and `insp-outship`; palette and faces are GT's. The full borrowed-and-refused list is the table above, so a reviewer can see each omission was decided |
| MD-02, R14, REQ-044 | Secondary CTAs: FAQ, "Talk to admissions", "Ask about a tour of the Georgetown campus", "Ask about a virtual info session", to the destinations the deck lists |
| MD-17, G0.5 item 6 | The provenance line once, under the h1, at `--text-sm` in Literata italic; not repeated in the footer |
| MN-16 (a), RF-53, R8 | No motion at all; the reduced-motion block sets every duration to `--duration-none` on elements and pseudo-elements; every state is visible at rest |
| D-039 | Escalated and undecided: no script beyond the JSON-LD block, no input, no `data-d039` declaration, no V6 reveal. The page is complete at rest |
| REQ-022, DEL-018 | Only figures with register rows, in the deck's own words; `check-claims.py` clean; the statuses are recorded here, never on the page. The objects are argued figure by figure above |
| SE-13 | `noindex, nofollow`; canonical `https://gt.school/` |
| K3 5d, CONTRACT.md section 4 | Focus: `--color-focus` at 2px width and 2px offset on light surfaces (8.2:1 computed against `--color-bg`); K3's two-colour ring on navy and on the footer's GT School plate, which straddles. The two-colour ring was tried on the navy door CTAs and withdrawn — they sit on a light ground, where its near-white outer band measures 1.02:1 and is invisible (`qa/focus-cta.jpg` before, `qa/M24-focus-door-zoom.jpg` after) |
| K12 V2, G4 | Header mark 27px below 768 and 32px from 768; both footer marks 32px at every width, so the umbrella brand never reads smaller than its sub-brand. Measured by the runner at 390 and 1440: 27 and 32px, aspect skew 0% |
| CONTRACT.md section 2 (V10) | The landscape recipe at `max-height: 400px` and `min-width: 600px` |

## Layer-2 tokens used (proposed; each named with its row per `TOKENS-V2.md`)

| Token | Where | Row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | Every type size on the page; `--text-xl` is also the V10 landscape h1 size | DD-38 (b), R5 |
| `--leading-prose` 1.5 | Door lines, beat sentences, table cells, facts, steps, sources, footer facts | DD-38 (b), RF-58 |
| `--measure-prose` 65ch | Door lines, sources, steps, connect list, TEFA module | DD-38 (b), RF-55 |
| `--color-on-navy` | Footer text, the door CTA and `.btn` label on the navy fill, the outer band of the two-colour ring | DD-39 (a), RF-07 |
| `--color-text-muted-on-dark` (`#a3bfcb`, a new tint) | Footer facts block | DD-39 (a), RF-07; DD-19 departure |
| `--color-border-strong` (`#857f7b`, a new tint) | The two structural rules: the beats' opening rule and the comparison band's top rule (3.63:1 on `--color-bg`, where `--color-border` is 1.56:1) | DD-39 (a), RF-07; DD-19 departure |
| `--duration-none` | The reduced-motion block, elements and pseudo-elements | MN-16 (a), RF-53, R8 |
| `--color-accent-text` (`#a5501a`) | The two accent shapes, as a fill: the arc's tenth segment and the fork's branch dot. 5.14:1 on `--color-bg` where `--color-accent` is 2.38 | DD-39 (a), RF-07; DD-19 departure, and CONTRACT.md section 3 |
| Not used | `--color-accent` (the page spends no accent at 2.38 anywhere), `--color-surface` and `--color-anywhere-tint` (one ground to the footer), `--color-on-accent` (no text sits on an accent fill), `--color-focus-on-dark` (the two-colour ring replaces it), `--ease-standard`, `--ease-out`, `--ease-in` (nothing moves) | |

## Motion spec

| Move | Element | Trigger | Duration | Easing | Reduced motion |
|---|---|---|---|---|---|
| None | Nothing on the page transitions or animates; `styles.css` declares no `transition` and no keyframe rule | | | | |
| V1 door state, V3 focus | Door CTAs, links, buttons: underline on hover; focus rings per surface | hover, focus-visible | 0 ms (instant) | none | Same, visible at rest (R8) |
| V10 anchor scroll | `#compare` link | click | Native `scroll-behavior: smooth` inside `prefers-reduced-motion: no-preference` only | browser | `scroll-behavior: auto` |
| The source's 0.10s beat snap | Not built | | | | A film's device between cuts; a page has no cuts (Borrowing table) |
| V6 one-time reveal | Considered for the beats and withdrawn | | | | It needs the D-039 script, and a beat that appears on scroll is not complete at rest. Stillness is this direction's argument, not a limitation |
| Reduced motion | `*, *::before, *::after` | `prefers-reduced-motion: reduce` | `transition-duration` and `animation-duration: var(--duration-none)` | | Every computed duration 0, measured by the runner at V14 |

## Assets

| Asset | Where | Alt text | Consent and status | Fallback |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` (139 by 32) | Header lockup at 27px below 768 and 32px from 768; footer on a `--color-bg` plate at 32px, linked to https://www.gt.school/ | "GT School" | GT's own mark, unchanged, on a light panel (`copy.md` section 8, checker R16) | none needed |
| `../shared/img/gt-anywhere-logo-h.svg` (252 by 48) | Footer, directly on the `--color-navy` panel at 32px, linked to https://anywhere.gt.school/ | "GT Anywhere" | GT's own mark, white lettering on navy (R16) | none needed |
| Four inline SVG objects | One per beat, `aria-hidden="true"`, `focusable="false"` | decorative by declaration | Drawn for this mock. They are not brand marks and not recoloured marks. Each is marked decorative because the label and sentence beneath it are its text equivalent, so an assistive-technology user gets the fact without a redundant description of a drawing | none needed |
| Photographs | **None, in either state.** Not a permissions wait: this direction argues that one drawn fact per screen is enough, and every file in `ASSETS.md` shows identifiable children and is permission-gated under AD-11 and RF-25 in any case. If Nari later wants a photographed state for this direction, it would be one full-width plate between the fourth beat and the table, with a `copy.md` section 9 caption — it is not designed here, because adding it would break the one-object-per-screen rule the mock exists to test | the page as shipped |

## Continuity against the measured estate

Scored against `0_plan/mockups/shared/CONTINUITY.md`, which measures the repository's own mirror of
anywhere.gt.school at 390 and 1440. `gt.school` has no mirror here and is unmeasured, so the Georgetown handoff is
**unverified** and is stated as such rather than claimed.

| Property | The estate, measured | M24 | Decision |
|---|---|---|---|
| Page ground | `rgb(252, 244, 239)` | The same token, `--color-bg`, for the whole page until the footer | Match, and the strongest continuity this direction has: a parent leaving the fourth beat for anywhere.gt.school lands on the same cream |
| Body text | `rgb(0, 17, 23)`, Inter Tight | `--color-text`, Inter Tight | Match |
| Heading face | Literata | Literata | Match |
| Heading weight and tracking | 300, letter-spacing −1.6px | 400, normal tracking | Declared difference, inherited from the contract's type roles (DD-38 option b). `--h1-weight` is a local variable so the 300 test is one edit; M03 ran the test and shipped 400 |
| The first screen's application action | Navy `rgb(0, 42, 58)` fill, near-white label, Inconsolata uppercase | Navy fill, `--color-on-navy` label, Inconsolata 600 uppercase | Match on fill and face (DD-46). The estate's computed 500 weight cannot be matched: `shared/fonts.css` ships Inconsolata 400 and 600 only, and CONTINUITY.md records that the estate's 500 may itself be synthesised |
| Button silhouette | Three different constructions across the estate (composed cut corner, clipped polygon, four rounded corners) | One uniform `--radius-md` on all four sides | DD-47, applied as decided. It is the shape the estate's own desktop header uses on the control a parent clicks to apply |
| Grained cream, wave linework, composited hero cut-out | Present on the estate's first screen | Absent | A deliberate difference. This direction's surface is flat by argument: the only marks on the ground are the four objects |
| Utility type | The estate's footer sets navigation in uppercase Inconsolata (`CONTINUITY.md`, footer row) | The header's utility links, the door labels, the beat labels, the five band labels and the table row labels are uppercase Inconsolata; the buttons are Inconsolata 600 in **sentence case**, which is the deck's own CTA wording and is not uppercased | Match on the face, with the button case stated rather than claimed: the first build's rationale called the buttons uppercase and they are not |
| Italic emphasis | The estate's h1 sets its second half in Literata italic (measured weight 400, in accent orange) | Each beat sentence sets exactly one word in Literata italic, in `--color-text` | Match on the device, deliberate difference on the colour: accent italic at that size would be 2.38:1 text and fail AA (K12 F88), which is the estate's own defect and is not copied |
| Both marks in the footer | **Unverified against the estate.** `CONTINUITY.md` measures the Anywhere footer for its navigation type, its pills and its legal row, and does not record it carrying both marks; the requirement here is `copy.md` section 8's, not a measurement | Both at 32px, the Anywhere mark on the navy panel and the School mark on a cream plate (checker R16) | Built to the deck slot; the estate column is a gap in the reference, not a match claim |

Could the school sites inherit this shell? The header, footer, button, table and focus treatment are all
token-level and would transfer. The beat section is the part that is specific to an umbrella page: it argues
across two schools at once, so a school site would use the objects singly rather than as a sequence.

## Departures

| Departure | Reason | Where |
|---|---|---|
| `--header-h`, `--fold-tail`, `--obj-size`, `--beat-air`, `--h1-weight` (local variables) | `--header-h` and `--fold-tail` make the first screen's height arithmetic legible in one place; `--obj-size` is the brief's 320px object cap expressed as `min(20rem, 72vw)` so a doubled root font cannot overflow 375; `--beat-air` is the brief's 96/64px clear space; `--h1-weight` exposes DD-38's test | `styles.css` `:root` |
| `min-height: calc(100svh - …)` on the first screen | The only way, on a page that never changes ground, to guarantee the beats' opening rule lands inside the reserved 24px band at every row that fits. `svh` is DD-44's own unit; it sits inside `@supports (height: 100svh)` with a `30rem` fallback, and no `vh` appears in the file | `.first-screen` |
| 1px and 1.5px rules, 2px focus bands and offsets, the 44px target floor, `letter-spacing` 0.08em and 0.14em, `ch` measures, SVG geometry numbers, the 768, 900, 1024 and 1440 breakpoints and the 400, 620 and 679 height queries | Values the token set does not carry; each is the contract's or K3's own figure, or geometry | throughout |
| `width: 100%; min-width: 0` on `.first-inner` | Without them the flex item sizes to min-content, which the h1's one no-break space ("from anywhere.") sets, and the page scrolls sideways at a doubled root font. Found by measurement at 375 with a 32px root, fixed, re-measured: no horizontal scroll | `.first-inner` |
| `overflow-wrap: anywhere` on the door CTA | The same stress test: the longer CTA label must be allowed to break rather than set the column's minimum width | `.door-cta` |
| The h1 at `--text-xl` with its 35ch cap removed on the V10 landscape row | The contract's own landscape recipe, which allows one token down on that row; stated there as a departure to declare. Measured: 3 lines, 83px, and the row passes at 284 of 318 | `@media (max-height: 400px) and (min-width: 600px)` |
| Two new tints, `--color-text-muted-on-dark` and `--color-border-strong` | DD-19 departures already recorded against DD-39 (a); both are used in the roles that row proposes | Footer, the two structural rules |
| The beat sentence's measure is `--obj-size`, not `--measure-prose` | The sentence takes the object's own width so a beat reads as one column. Measured consequence: the longest rendered line on any beat is 31 characters, inside the brief's 45 | `.beat-line` |
| `min-height: 100svh` on every beat, with the block optically centred (`align-content: safe center`) | What makes "one at a time" true inside a viewport rather than only across the page. The brief asks for *at least* 96px of clear space, so a taller field is compliance, not departure. `safe` keeps the block at the top instead of clipping it on the two rows whose content is taller than the viewport (V10 750 by 342 and V18 320 by 256, measured: section height equals content height, nothing clipped). `svh` is DD-44's unit; no `vh` appears in the file. **Its cost is length**: the page is 9,856px at 390 by 844, up from 8,623, and that is stated under the length note below rather than buried | `.beat` |
| Beat 4's four marks at `stroke-width: 8`, where the brief says objects are drawn in 1.5px hairlines | Astra named this as an undeclared miss and was right to. It is declared now and kept: beat 2 draws cadence as hairline marks crossing a hairline track, and beat 4 draws four register-backed weekends crossing the year. If both were 1.5px the two objects would read as the same drawing at two spacings; the weight is what separates a counted fact from a rhythm. Every other stroke on the page is 1.5px | `.o-mark` |
| The compare anchor falls below the first screen on the phone rows | The contract's compact door rule puts both door lines after the second CTA on viewports under 700px tall, and the anchor follows them. Both CTAs clear the fold at every row (the tightest is V2 at 581 of 605), which is the contract's requirement; the brief's "compare anchor on the first screen" holds from 768 up. Astra asked for this to be acknowledged as a departure rather than absorbed, and it is | `.compare-lead` |
| The steps band's lede removed (`copy.md` section 5's line) | It repeated beat 1 word for word, and the admission bar was on the page five times. The four numbered steps and the heading are unchanged; no words were added | `.steps` |
| The accent fill at `--color-accent-text`, not `--color-accent` | The brief's Color row names "one accent"; this is the accent's readable token, not a different colour. 5.14:1 against 2.38, and CONTRACT.md section 3 now requires 3:1 of a line that carries the argument | `.o-accent` |
| Band labels carried below the beats | A reversal of the first build, which dropped them and argued that a second small-type line was the opposite of this direction. The critic's answer is the right one: a tracked label over a single line **is** the beat grammar, and without it the page changed author at the table and argued its thesis on four screens of nine. The words are `copy.md`'s own allowed eyebrow list | `.band-label` |

## Flagged slots

| Slot | Q id | What ships |
|---|---|---|
| "Current families" destination | Q-002 | community.gt.school, as the deck lists it |
| Application steps | Q-007 | The deck's four steps, the same for both schools |
| Tuition, Georgetown | Q-011 (decided) | "Tuition on request. Ask admissions." |
| After 8th grade | Q-013 | The deck's row, deferred to admissions |
| Intensive-weekend logistics | Q-017 | Not on the page; the deck's "Four intensive weekends a year in Georgetown." only |
| Outcome figure, accreditation | Q-019, Q-033 | Withheld (G0.5 items 2 and 3). Nothing on the page and nothing in the JSON-LD |
| TEFA window, owner, expiry | Q-021 | The module ships with the deck's wording and no dates |
| Holly's unifying brand element | Q-001 | Not added; the header is the GT School mark alone |
| Tour and info-session labels | MD-02, R14 | "Ask about a tour of the Georgetown campus", "Ask about a virtual info session", both to gt.school/contact |
| `school=` parameter name | DD-25 | `?school=georgetown` and `?school=anywhere`, confirmed in S5 |
| Section 9 vocabulary | proposed for Nari | The four beat labels, read as a shared register rather than a per-brief allocation (stated above) |

## Parent questions

`0_plan/05-landing-mockups-plan.md` section 6c.

| # | Question | Where M24 answers it |
|---|---|---|
| PQ-01 | What is GT School? | The h1, and the first beat's label and sentence |
| PQ-02 | Is it for my child? | Beat 1 (the arc and the admission sentence), the proof strip, the steps line |
| PQ-03 | In person or online: what are my options? | The two doors on the first screen; beat 3 restates it as one object and one sentence |
| PQ-04 | Where is the campus? | The h1, the door line, the table's "Where and how", the footer facts |
| PQ-05 | What does a day look like? | The table's "The day" row, both columns |
| PQ-06 | What does it cost, and can TEFA help? | The table's "Tuition and access" row and the TEFA module |
| PQ-07 | How do I apply? | "How to apply", four steps and two application links |
| PQ-08 | Who teaches my child? | The table's "Guides" row and the proof strip's third fact |
| PQ-09 | How much in-person time does GT Anywhere have? | Beat 4 (four marks on the year) and the table's "In-person time" row |
| PQ-10 | What results, and is it accredited? | **Deferred by decision** (G0.5 items 2 and 3). The page is silent; a parent is pointed to admissions through "Talk to admissions". No beat carries an outcome, which is also why there is no fifth object |
| PQ-11 | What happens after 8th grade? | The table's row, deferred to admissions (Q-013) |
| PQ-12 | I am a current family, where do I go? | The header link and the families bar |
| PQ-13 | I am not ready to apply, what can I do? | "Questions before you apply", four secondary CTAs |
| PQ-14 | Is GT School part of Alpha School? | The provenance line, once, under the h1 |

## Self-check

**Checkers.** Re-run after the last write to `index.html` and `styles.css` on this pass.

```
$ python3 0_plan/tools/check-mocks.py 0_plan/mockups/M24-one-at-a-time
## M24-one-at-a-time: 37 pass, 0 fail
check-mocks: OK

$ python3 1_spec/tools/check-claims.py
## 0_plan/mockups/M24-one-at-a-time/index.html
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

CR-011 is **4**, down from the first build's 5: beat 1, the proof strip's own wording, and the two table cells
DD-43 requires. Every other count is unchanged.

**Runner.** `node 0_plan/tools/shots.mjs 0_plan/mockups/M24-one-at-a-time` — Result line, verbatim:
`## Result: all required rows pass`. Sixteen fold rows pass, V18 reflows with no horizontal scroll, V19 is
reported, reduced motion shows every computed duration 0s, the doubled root font at 375 gives no horizontal
scroll, the console is clean, every interactive target is at least 44px tall, and both marks clear K12 V2's
floors at 390 and 1440 with 0% aspect skew. Every fold bottom is identical to the first build's, because nothing
on the first screen changed.

The five rows the brief and the contract single out, pasted from `qa/fold.md` in the runner's own columns so R37
can compare them against the current pass rather than take this file's word for it:

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V2 | 375 by 629 | fold | 605 | 92 | 319 | 356 | 469 | 581 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 92 | 301 | 338 | 459 | 571 | yes | PASS |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 284 | 284 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 317 | 492 | 492 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 300 | 338 | 593 | 593 | yes | PASS |

**Rows verified individually, by opening the capture.** V2 (`qa/V2.jpg`), V9 (`qa/V9.jpg`, the emptiness row),
V14 (`qa/V14.jpg`), V16 (`qa/V16.jpg`), the full-page captures V2-full and V14-full, the forced-colours capture,
`qa/focus-cta.jpg` and `qa/focus-footer-plate.jpg`, plus the nine per-beat and focus captures, **all re-taken on
this pass after the last stylesheet write**: `qa/M24-beat1-normal.jpg` to `qa/M24-beat4-normal.jpg`,
`qa/M24-beat1-forced.jpg` to `qa/M24-beat4-forced.jpg`, and `qa/M24-focus-door-zoom.jpg` at 3× for the button
corner and focus ring. The first build's nine predated its last stylesheet write by six minutes, which the critic
caught; each of the nine is now taken at the beat's own scroll position, so the capture is the screen a parent
sees rather than a crop of it.

**Measured, per beat, at 1440 by 900** (one object, one line, one accent at most):

| Beat | Objects | Paragraphs | SVG text nodes | Accent uses | Object box | Clear space above / below | Visual lines | Longest line |
|---|---|---|---|---|---|---|---|---|
| Admissions | 1 | 1 | 0 | 1 | 320 by 320 | 96 / 96 (185 more from the centring) | 2 | 244px |
| Mastery | 1 | 1 | 0 | 0 | 320 by 320 | 96 / 96 | 4 | 308px, 33 characters |
| Two ways to attend | 1 | 1 | 0 | 1 | 320 by 320 | 96 / 96 | 2 | 224px |
| Across the year | 1 | 1 | 0 | 0 | 320 by 320 | 96 / 96 | 2 | 210px |

The same four rows at 390 by 844: object 281 by 281, clear space 64 / 64 with 146px more from the centring, lines
2 / 4 / 2 / 2, accents 1 / 0 / 1 / 0, SVG text nodes 0 everywhere. At 375 by 629 beat 2 sets in 5 lines and every
beat still holds one object and one paragraph. **Zero `<text>` nodes in all four objects at all four widths**, so
M10's defect (labels declared at one size rendering smaller because they scaled with the viewport transform)
cannot occur here by construction; neither replacement object introduced one.

**One object per screen, measured.** At each of the four beat-top scroll positions, the number of objects at least
a quarter visible:

| Viewport | Beat 1 top | Beat 2 top | Beat 3 top | Beat 4 top |
|---|---|---|---|---|
| 1440 by 900 | 1 (100%) | 1 (100%) | 1 (100%) | 1 (100%) |
| 1280 by 720 | 1 (100%) | 1 (100%) | 1 (100%) | 1 (100%) |
| 390 by 844 | 1 (100%) | 1 (100%) | 1 (100%) | 1 (100%) |
| 375 by 629 | 1 (100%) | 1 (100%) | 1 (100%) | 1 (100%) |

The first build measured **two** objects at least a quarter visible at three of the four positions at both 1440 by
900 and 390 by 844, and showed beat 1 entire plus four tiles of beat 2 on one phone screen. Beat sections now
measure 900 / 900 / 900 / 900 at 1440 by 900 and 844 / 844 / 844 / 844 at 390 by 844, against 694–721 and 552–576
before. On the two rows whose content is taller than the viewport the section is exactly its content height and
nothing is clipped: 594 / 644 / 594 / 594 at 750 by 342, and 501 / 573 / 501 / 501 at 320 by 256.

**Rule greps** (BUILDER-BRIEF, run on `index.html` and `styles.css`): `grep -c "<form"` 0; `grep -c "<script"` 1
(the JSON-LD block); external hosts only in `href` destinations on the five allowed domains; no placeholder text;
the only numerals in visible text are 90th, $10,400, 9, 8th, (512) 270-9481 and 2026-09-10; no "advisor" in visible
text (the `data-type="advisor"` attribute value is the spec's and is allowed); "Georgetown Campus" and "GT Anywhere"
in full everywhere; every image carries `alt`, `width` and `height`; one `h1`; skip link to `#main`; `header`,
`nav`, `main`, `footer` landmarks; the comparison is a real `<table>` with `<caption>` and `scope`; no raw hex in
`styles.css`; `grep -n "transition\|animation\|@keyframes"` returns the file-header comment and the
reduced-motion reset, and nothing else.

**Build passes.** (1) First build: all sixteen fold rows passed; the doubled-root-font test failed at 375 with a
scroll width of 507. (2) Diagnosed with a scratch probe rather than guessed: the h1's no-break space sets
`.first-inner`'s min-content, and `.wrap`'s auto inline margins stop the flex item stretching. Fixed with `width:
100%; min-width: 0`. Also fixed here: V19's false floor, closed with a short-laptop height query. (3) Read
`qa/V16.jpg` and `qa/V2.jpg`: tightened the choice block to the h1's own measure, made both door CTAs the same
width so the doors are equal in every dimension, and gave the provenance a full step of air. (4) Measured the
beats: set the sentence's measure to the object's width after the "two ways to attend" line rendered at 47
characters, one over the brief's 45. (5) Capped the h1 at eight columns with the grid calc, after measuring it at
932px at 1440 where eight columns is 907. (6) Read `qa/focus-cta.jpg`: the two-colour ring was invisible on the
navy door CTAs against cream (near-white outer band, 1.02:1), so those controls returned to the light-surface
ring; re-captured at 3× to confirm. (7) Raised the two structural rules to `--color-border-strong` so the ink a
reader sees at the bottom edge clears 3:1. (8) **This pass, after both critics**: the two objects replaced, the
beats raised to a viewport each, the duplication cut, the accent taken to its readable token with its hairline
dropped, the two tinted bands returned to the one ground, the band labels carried down, and every figure in this
file that did not reproduce corrected. Both checkers and the runner re-run after the last write; the nine stale
captures re-taken and opened. Every object and every band was read in a capture at 2× or 3× before this section
was written.

**First screen at 390 by 844, stated.** Header, the umbrella sentence, the provenance line, both door names and
both door CTAs are above the fold; the two door lines follow the second CTA and are cut by the bottom edge, which
is what tells a parent the page continues. The compare anchor follows them, below the fold on that row. Nothing
else competes. The first screen is unchanged from the first build, and so are all nineteen fold measurements.

**Console.** Zero errors, measured by the runner across all nineteen rows.

**Length, stated rather than buried.** The page is **9,856px at 390 by 844**, up from 8,623: **+1,233px net**,
and the arithmetic is roughly +1,170 from required fix 4 (four beats at 844 each instead of 552 to 576), +65 from
giving the connect band its own section gap once every band gained a rule, and about −60 given back by cutting the
steps lede. So the duplication cut does not pay for the viewport beats — the page was already the longest in the
programme and this pass made it longer. That is the direction's declared cost (C29, which the critic watched
rather than scored), and it buys the one thing the name promises: no parent ever sees two of these objects at
once. If Nari judges the length the larger risk, the lever is the beats' `min-height`, not the copy: dropping it
returns about 1,170px and returns the defect.

## Iteration one, 2026-09-11: what both critics asked for and what this pass did

Both cards scored Imagery below 4 (Fable 2, Astra 3) and Fable added Composition 3 and Colour and surface 3, with
Objective 5 and Motion 5 on both. The director's corrected brief replaced two of the four objects and put both
rules into `CONTRACT.md` section 3. Nine required fixes; eight are closed, one is closed in part.

| # | Required fix | What changed | Evidence |
|---|---|---|---|
| 1 | Replace the concentric rings with a symmetric two-branch fork | Beat 3 is a stem to one accent dot, two arms of equal length and mirrored angle, two identical terminals. Nothing is nested, so the shape cannot say one way to attend lives inside the other; nothing is a target, in either colour state; no `<text>` node was added | `qa/M24-beat3-normal.jpg`, `-forced.jpg`; objects table above |
| 2 | Redraw the mastery object so it carries no proportion | Beat 2 is two parallel tracks, one evenly marked and one not, cut by the frame at both ends, with the **same number of marks on each** so no quantity, ratio or speed can be read. The nine tiles with four filled — a completion figure of about 44 per cent against no register row — are gone | `qa/M24-beat2-normal.jpg`, `-forced.jpg`; objects table |
| 3 | Break the duplication | Beat 2 takes a sentence the proof strip does not carry, and it is the sentence the new object draws. The steps lede, which repeated beat 1 word for word, is removed. CR-011 goes 5 → 4, the floor the table (×2 under DD-43), the proof strip and the one beat allow. **Beat 3 still shares proof fact four**; see "not done" below | `check-claims.py`; `index.html` |
| 4 | Make "one at a time" true in a viewport | `min-height: 100svh` on `.beat` with the block optically centred. Measured at four widths: **exactly one object at least a quarter visible at every beat-top scroll position, at 100 per cent** — against two objects at three of four positions before | Self-check, "One object per screen, measured" |
| 5 | Take the darker accent token and drop the navy hairline | `.o-accent` is `--color-accent-text`, fill only. 5.14:1 on the ground against 2.38; navy on that fill is 2.70:1, so the hairline would have been noise | Self-check; `styles.css` `.o-accent` |
| 6 | Hold one ground to the footer | `.proof` and `.tefa` are on `--color-bg`, separated by the `--color-border-strong` rule the beats open with. That rule now runs across all five bands below the beats, so the connect band's `padding-top: 0` — which existed only because the proof band's tint used to be the separator — came out with it. Two grounds on the page: cream, then the navy footer | `qa/V14-full.jpg`; `styles.css` |
| 7 | Move beat 2's italic off a line end | The sentence itself changed, so the italic moved to *mastery*. Every italic re-measured at 375, 390, 1280 and 1440: none falls at a line end | Self-check, per-beat table |
| 8 | Carry one beat device into the bands below the table | The tracked label over a single line, on all five bands below the beats, from `copy.md`'s own allowed eyebrow list. The page no longer changes author at the table | `qa/V14-full.jpg` |
| 9 | Correct three figures and re-take nine stale captures | `styles.css` said 17.69:1 where navy on cream is 13.88; the Acceptance row said 36 of 36 against 37; the single-ground sentence was false and is now true of the build. The nine captures are re-taken after the last write, at each beat's own scroll position | Self-check |

**Astra's separate findings, also applied.** The "800px at 1280 is the contract's own figure" claim is corrected
(the contract's V14 row is 779 and assumes a 1184px content width; this page's `.wrap` gives 1216). The buttons
were described as uppercase and are sentence case. "Both destination sites measured" and "the estate's footer
carries both marks" were not supported by `CONTINUITY.md` and are now stated as what they are. Beat 4's 8px marks
and the phone compare anchor are declared under Departures instead of passing unremarked. The "no selector, no
value and no shape overlaps the examples" claim was too absolute and now says what is actually true: no code was
taken, and the overlap a reviewer will see is the borrowing, which is declared.

**What this pass judged wrong and did not do.**

| Not done | Why |
|---|---|
| **Break beat 3's duplication with proof fact four** (`index.html` beat 3 against the proof strip's fourth item) | The critic's instruction is "give the beats four sentences the proof strip does not carry", and for this beat the deck has no fourth sentence to give. The alternatives were each worse than the duplication. Taking the two "Where and how" cells ("On campus in Georgetown, Texas, north of Austin. From home, anywhere in the United States.") would force the beat's one italic word onto *campus* or *home* — a typographic preference for one school on the one beat whose whole job is that the two are peers (C01, DD-21, DD-46). Taking a section 9 sentence allocated to another brief would be copy invention through the back door. Dropping the proof strip and letting the four beats be `copy.md` section 4's four facts — the critic's own first option — is ruled out by the corrected brief, which fixes the four beats as the admission bar, the program, the two places and the year, and names a four-mark row for the weekends; taking it would delete the object the critic called the best on the page and leave "Guides, not lecturers" with no drawing. I judged one shared sentence, seven screens apart, the smallest of those costs. It is flagged rather than absorbed |
| **Normalise all four objects' visible bounds** (Astra, Composition) | Done for the two objects this pass redrew — beats 2, 3 and 4 now draw inside the same y 56–264 band of the 320 box — but beat 1's arc still runs y 20–259, 36 units taller at the top. Shrinking the arc would change an object neither critic faulted and which carries the one proportion the register does hold (CR-011's top decile), for a 36-unit gain. Surgical beats symmetrical here |
| **Close the arc's residual reading** (Fable, logged not required: ten segments can be read as an acceptance rate rather than a score band) | The critic logged it as accepted because the sentence directly beneath names the unit. Weighting the boundary tick would add a second stroke weight to an object that reads correctly today, and beat 2 now uses stroke weight to carry a distinction of its own. Left as the critic left it |
| **Reduce the page's height** | It went the other way: 8,623px → 9,856px at 390, because required fix 4 gives each beat a viewport. Stated in the Self-check under "Length" rather than hidden, with the lever named, because it is the one figure that moved against the programme's grain this pass |

## What a critic should press on

Named here rather than left to be found. (1) The first screen is not a beat and cannot be; the direction's claim is
weaker on screen one than anywhere else, and the slack there is distributed air, not composition by intent. (2)
Beat 3's sentence is still the proof strip's fourth fact word for word — the one required fix this pass did not
fully close, argued above rather than hidden. (3) The page is **9,856px** at 390, up from 8,623, because each of
the four beats is now a viewport; that is the direct cost of making the direction's name true inside a screen, and
the comparison table is deliberately the one dense object that repays the scroll. (4) Beat 2's two tracks carry
seven marks each: a reader can count seven, and the defence is that seven is not a figure this deck carries in any
role, that nothing is filled so there is no part of a whole, and that the two counts are equal so no comparison of
quantity or speed is available — but it is the place to press if the contract's "if a reader can count it, it is a
number" is read more strictly than its own "a count with no denominator is allowed". (5) The band labels are a
reversal of the first build's argued refusal; if Nari reads five small tracked words as clutter rather than as the
beat grammar carried down, they come out in one commit.
