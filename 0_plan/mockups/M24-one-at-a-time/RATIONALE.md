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
| `insp-palebeat` pale lilac canvas `#E7E2F1` | No | DD-48. The ground is `--color-bg` `#fcf4ef`, the estate's own cream, because a parent hands off from this page to two sites measured on that ground (`shared/CONTINUITY.md`). A borrowed canvas would fail the Continuity row by construction |
| `insp-palebeat` one accent hue **per beat, changed between sections** | The "exactly one accent per beat, never two at once" half only | The **changing hue** is refused. Four sections in four saturated hues would give a school four unrelated colours and no brand. GT has one accent, `--color-accent`; two of the four beats spend it once, and two spend none |
| `insp-palebeat` type: "lowercase 13-15px caption", "tracked uppercase 10px label" | The scale and the subordination | The faces and the exact sizes: Literata, Inter Tight and Inconsolata are fixed by K12's "what never changes" list, and the contract's smallest step is `--text-xs` (12 to 13px), so nothing on this page is set at 10px |
| `insp-palebeat` motion: 0.10s snaps between absolute stillness | The stillness | The snap. It is a film's device between cuts; a page has no cuts. Nothing on this page animates at all |
| `insp-palebeat` "no headline" | | Refused by the contract, as above. The fixed sentence is the h1 at every row |
| `insp-outship` long still hold, one italic emphasis word per sentence | Yes: each beat sentence sets exactly one word in Literata italic, chosen so it never falls at a line end (measured) | Its cream `#FAF5EC`, vermilion `#E45D34`, violet, sage and tan; its hard cuts to a near-black scene; its glyph-particle fields and score pills. All palette, all refused under DD-48 |

Nothing in `examples/stillpoint.html` or `examples/kilnworks.html` was copied: no selector, no value and no shape
from either file appears here. Both were read as whole pages for their composition and then closed.

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented children, in
person at our Georgetown, Texas campus or online from anywhere." Literata at `--h1-weight` 400 (a local variable,
so DD-38's 300-against-400 test is one edit), `--text-3xl` (27.00px at 360 to 46px at 1440 and above),
`--leading-tight` 1.15, centred on the page's one axis. A no-break space binds "from anywhere." so the seven-line
phone setting never ends on a one-word line.

**Measure.** The contract caps the h1 at 35ch; the brief puts it at eight columns. Both are applied: below 768 the
content column binds, and from 768 the width is `min(35ch, calc((100% - 352px) / 12 * 8 + 224px))`, which is
literally eight of twelve columns with 32px gutters. Measured widths: 459px at 768, 629px at 1024, **800px at
1280** and **907px at 1440** — the contract's own 8-column figures (section 2) to the pixel. 35ch would have been
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
a legend or a tick that stands for a unit the page does not name in words directly beneath it. **No object contains
text of any kind** — there are zero `<text>` nodes in the four SVGs, measured — so M10's defect (labels declared at
14px rendering at 11 to 13px because they scaled with the viewport transform) cannot occur here by construction,
and there is no SVG font size to report.

| Beat | Object | What it is built from | Why it implies no figure the deck does not carry |
|---|---|---|---|
| 1. Admissions | A 270° segmented arc: one stroked band outline, nine radial ticks dividing it into ten equal segments, and the tenth segment filled with `--color-accent` | Percentile is the deck's own unit, and a percentile scale divides into ten. The filled tenth is the admitted band | The only quantity drawn is "one tenth", which is the deck's own "at or above the 90th percentile" (CR-011) stated in the sentence below it. The arc carries no numerals, no axis and no scale label |
| 2. Mastery | Nine rounded tiles, three by three, four filled `--color-navy` and five hairline; the filled run stops **inside** the second row, not at its end | Nine tiles are the deck's own span, Kindergarten plus grades 1 to 8, which the page states in words twice (proof strip fact four, footer facts block) | Nine is a deck figure. The filled run is a position in that span, not a quantity the page asserts: no numeral appears, nothing says how far a child gets, and the ragged edge is the deck's own "students advance when they show mastery, not when the calendar says so" |
| 3. Two ways to attend | Two concentric hairline rings and one filled `--color-accent` dot at their shared centre; the two gaps (dot to inner ring, inner to outer) are equal at 64 and 65 user units so the object reads as a rhythm of three rather than as a target | Two rings are the two ways to attend — the campus you travel to and the country GT Anywhere reaches. The dot is the one school both belong to | Two is the deck's own count of doors. Nothing measures a radius, a distance or a population. The bullseye association is the known risk of any concentric pair and is named here rather than hidden; the sentence beneath and the label say what the rings are |
| 4. Across the year | A hairline running the object's full width, crossed by four marks at the eighth, three-eighths, five-eighths and seven-eighths points | Four marks are the four intensive weekends (CR-032); the even spacing is the deck's own "together in person each quarter"; the line is the year, with runway at both ends | Four is a register-backed figure in the deck's own words. The marks **cross** the line rather than rise from it, which is what keeps this from reading as a bar chart with an unlabelled axis. No month, no date, no duration is implied, and the deck's own caution that the weekends are not placed on a calendar is honoured by drawing no calendar |

**Forced colours.** The brief's requirement is that the objects survive when fills are dropped and only outlines
remain. Rather than trust the UA's mapping, the objects are re-declared inside a `@media (forced-colors: active)`
block that is **last in the stylesheet** (M07's fix): hairlines become `stroke: CanvasText; fill: none`, filled
shapes become `fill: CanvasText; stroke: none`. M07's defect was a per-segment stroke striking through its own
labels; here the arc is drawn as **one outline per band** (a single stroked path for the whole band, plus nine
separate tick strokes that stop at the band's edges) and there are no labels to strike. Verified by eye in
`qa/M24-beat1-forced.jpg` (the filled segment stays solid black inside a hairline band), `qa/M24-beat2-forced.jpg`
(four solid tiles against five hairline tiles) and `qa/M24-beat3-forced.jpg` (the accent dot stays solid).

**The accent as a graphical object, measured.** `--color-accent` `#e48b53` is 2.38:1 against `--color-bg` (K12
F88), which is below 3:1. Two mitigations, both deliberate: the accent shapes carry a `--color-navy` hairline of
their own, so the shape's **boundary** is 13.9:1 against the ground; and neither accent shape carries information
that is not also in the sentence directly beneath it, so nothing on the page is available only through colour
(WCAG 1.4.1 and 1.4.11 in substance). A critic who would rather spend `--color-accent-text` (`#a5501a`, 5.14:1)
as the fill has a one-token change available; the estate's own accent was kept because DD-39 rules gold and accent
surface-and-shape colours on light, the brief names the accent for these two shapes, and this page spends it
exactly twice.

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id and name, lens order | M24, folder `M24-one-at-a-time`; L3 mission, L4 exclusivity, L1 objective, L2 continuity | Met |
| Source language | `insp-palebeat` primary (one unchanging ground, one centred object per beat, three quarters air, small type well below, no competing headline after the first screen, one accent per beat); `insp-outship` support (long still hold, one italic word per sentence). Both borrowed as grammar only | Met |
| What is deliberately not borrowed | Named, item by item, in the borrowing table above: the lilac canvas, the per-section accent change, the source's absence of a headline, its radial-glow gradient, its 10px type and its snap | Met |
| Thesis | One thing per screen after the choice: one drawn object and one deck sentence per beat, four beats, then the table | Met |
| Exemplars | `examples/stillpoint.html` read as a whole page for the beat sequence (no code taken). Barnes (C03) for one saturated colour spent once — here twice on a page of nine screens, once per beat that spends it. Exeter (C04) for a figure that carries a label and a link — here each object carries a label and the sentence it illustrates. `every-1440-full.jpg`'s dense directory (C26) avoided: the page has one dense object, the comparison table, and says so | Met |
| Composition | First screen as the contract requires: header 56 (92 where the mark holds its floor and the header takes two rows), h1 at eight columns, provenance, two doors with both CTAs, compare anchor, all present at every row. From the beats' opening rule the page is beats: each a full-width section on `--color-bg`, one centred object at most 320px square, 96px of clear space above and below at 1024 and up and 64px on phones (measured 96/96 at 1440), then a `--font-mono` `--text-xs` uppercase tracked label and the deck sentence at `--text-base`, centred, at most 45 characters a line (measured longest line 31). Four beats in the brief's order: the admission bar, the program, the two places, the year. Then the comparison table, the one dense object | Met |
| Typography | Contract roles. The beat sentences are the deck's own, set in Literata 400 (the contract's "Literata where a brief says so"), each with exactly one word in Literata italic placed mid-line: *admits*, *advance*, *or*, *year*. Measured: none falls at a line end at 375, 1280 or 1440 | Met |
| Color and surface | One ground, `--color-bg`, from the header to the families bar; the footer is the page's one change of ground, to `--color-navy`. Objects drawn in `--color-navy` at 1.5px non-scaling hairlines (13.9:1 on the ground). Exactly one accent use in beat 1 (the filled arc segment), one in beat 3 (the dot), none in beats 2 and 4, none anywhere else on the page — measured, `.o-accent` count per beat is 1, 0, 1, 0. Focus per contract | Met |
| Imagery | Diagrammatic. No photograph in either state: this direction's argument is that one drawn fact per screen is enough, and a photograph would be the one element on the page that is not drawn from a register row. Stated as a decision, not an omission (Assets) | Met |
| Motion | Still. `styles.css` declares no `transition` and no keyframe rule; the runner measured every computed transition and animation duration at 0s under `prefers-reduced-motion: reduce`. V1 and V3 are instant; V10 is the native anchor scroll inside `no-preference` only. The source's snap is not borrowed | Met |
| Copy | Sections 0 to 8 verbatim. Beat labels from section 9 and the allowed-headings table (below). No new words; no figure the deck does not carry | Met, with the section 9 reading stated below |
| Conversion | Doors on the first screen at every row; compare anchor under them; four beats; the table with repeated values and the doors repeated after it; TEFA module; proof strip and sources line; application steps; four secondary CTAs; current families; navy footer with both marks and the facts block | Met |
| Acceptance | `check-mocks.py` 36 of 36; `check-claims.py` clean; the runner's Result line "all required rows pass" (16 fold rows, reflow, zoom, reduced motion, doubled root font, console, mark geometry). Exactly one object and one line per beat, verified in the captures and measured (1 `svg`, 1 `p` per beat). No beat carries two accent uses, measured. Every object checked in a forced-colours capture. DD-38, DD-39, DD-47 and DD-48 named here, with DD-46 and D-039 | Met; critics pending |

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

Each beat's sentence is a complete fixed slot, quoted whole, never a clause lifted out of a cell: "GT School
admits students at or above the 90th percentile." (section 5 line); "Mastery-based: students advance on
demonstrated mastery, measured with MAP assessments." (section 4 fact two); "Kindergarten to 8th grade, in person
or online." (section 4 fact four); "Four intensive weekends a year in Georgetown." (section 3, In-person time, GT
Anywhere column). Where a brief wanted a partial cell, the mechanism is to record it in section 9 first (as M07
did); no partial cell is used here, so `copy.md` needed no change and none was made.

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
of 815; V7 570 of 657; V8 538 of 715; V9 600 (emptiness row, page height 8623); V11 663 of 1000; V12 731 of 1170;
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
| DD-21 | The doors are a `<ul>` and the lines a `<ul>`; both grids come from `repeat(2, …)`, so three to five entries is one value changed in one place. The beats do not encode two: the arc, the tiles and the marks are school-wide facts, and the rings are "two ways to attend", which DD-21's own wording (several campuses plus one virtual school) keeps true |
| DD-25, REQ-070 | Every application link carries `?school=`; links go only to gt.school, anywhere.gt.school, apply.gt.school, community.gt.school and `#compare` |
| DD-29 | Every screen carries a fact at rest: the first screen the two door lines, then one deck sentence per beat, then the table, the proof strip, the steps and the footer facts block |
| DD-38 (b), R5, RF-55, RF-58 | Fluid clamps `--text-xs` to `--text-3xl` and `--text-btn`; `--leading-prose` 1.5 on every multi-line string; `--leading-body` 1.25 on single-line labels and buttons; `--measure-prose` 65ch on the prose blocks; `--h1-weight` exposes the 300-against-400 test |
| DD-39 (a), RF-07, K3 5c to 5f | `--color-text-muted` for labels, door lines and the beat labels (6.25:1 on `--color-bg`); `--color-border-strong` for the two structural rules (3.63:1); `--color-on-navy` and `--color-text-muted-on-dark` in the footer (14.58 and 7.81); the accent as a shape only, twice, each time with its own navy hairline |
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
| Not used | `--color-accent-text` (no accent text anywhere; the step numerals are `--color-text-muted` so the page's accent budget stays with the two beats), `--color-on-accent`, `--color-focus-on-dark` (the two-colour ring replaces it), `--ease-standard`, `--ease-out`, `--ease-in` (nothing moves) | |

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
| Utility type | The estate's footer sets navigation in uppercase Inconsolata | The header's utility links, the door labels, the beat labels, the table row labels and the buttons are all uppercase Inconsolata | Match, and taken up on purpose: the contract allows a brief to keep Inconsolata as the utility face (section 3), and doing so gives this page one small-type voice instead of two |
| Italic emphasis | The estate's h1 sets its second half in Literata italic (measured weight 400, in accent orange) | Each beat sentence sets exactly one word in Literata italic, in `--color-text` | Match on the device, deliberate difference on the colour: accent italic at that size would be 2.38:1 text and fail AA (K12 F88), which is the estate's own defect and is not copied |
| Both marks | Footer carries both, the Anywhere mark on navy | Same, both at 32px, the Anywhere mark on the navy panel and the School mark on a cream plate | Match |

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
| The accent fill at 2.38:1 with a navy hairline | Argued above under the objects. A critic who prefers `--color-accent-text` has a one-token change | `.o-accent` |
| Eyebrow labels dropped from the bands below the beats | The four beat labels are the page's label voice; repeating "Compare / Proof / Admissions / Connect" over the h2s would add a second small-type line to every screen, which is the opposite of this direction | `.band` |

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

**Checkers.**

```
$ python3 0_plan/tools/check-mocks.py 0_plan/mockups/M24-one-at-a-time
## M24-one-at-a-time: 37 pass, 0 fail
check-mocks: OK

$ python3 1_spec/tools/check-claims.py
## 0_plan/mockups/M24-one-at-a-time/index.html
| Figure on the page | Register row | Occurrences | Status |
|---|---|---|---|
| "designed for students in the 90th+ percentile" | CR-011 | 5 | Unverified, public |
| "$10,400/year — GT Anywhere annual tuition, fully or partially covered | CR-021 | 1 | Unverified, public |
| Four in-person intensive weekends a year in Georgetown (four named 202 | CR-032 | 4 | Unverified, public |
| Georgetown mornings: "two 50-minute blocks and one 25-minute block wit | CR-033 | 2 | Unverified, public |
| GT Anywhere mornings: "two to three hours of 100% cognitive load" (aca | CR-034 | 1 | Unverified, public |
| Guides hold weekly one-to-one check-ins with each student ("Academic A | CR-035 | 2 | Unverified, public |
  NOTE unverified rows on the page (allowed in mocks, blocked for production): ['CR-011', 'CR-021', 'CR-032', 'CR-033', 'CR-034', 'CR-035']
check-claims: OK
```

**Runner.** `node 0_plan/tools/shots.mjs 0_plan/mockups/M24-one-at-a-time` — Result line, verbatim:
`## Result: all required rows pass`. Sixteen fold rows pass, V18 reflows with no horizontal scroll, V19 is
reported, reduced motion shows every computed duration 0s, the doubled root font at 375 gives no horizontal
scroll, the console is clean, every interactive target is at least 44px tall, and both marks clear K12 V2's
floors at 390 and 1440 with 0% aspect skew.

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
`qa/focus-cta.jpg` and `qa/focus-footer-plate.jpg`, plus per-beat captures written for this build in normal and
forced colours: `qa/M24-beat1-normal.jpg` to `qa/M24-beat4-normal.jpg`, `qa/M24-beat1-forced.jpg` to
`qa/M24-beat4-forced.jpg`, and `qa/M24-focus-door-zoom.jpg` at 3× for the button corner and focus ring.

**Measured, per beat, at 1440** (one object, one line, one accent at most):

| Beat | Objects | Paragraphs | SVG text nodes | Accent uses | Object box | Clear space above / below | Visual lines | Longest line, characters |
|---|---|---|---|---|---|---|---|---|
| Admissions | 1 | 1 | 0 | 1 | 320 by 320 | 96 / 96 | 2 | 29 |
| Mastery | 1 | 1 | 0 | 0 | 320 by 320 | 96 / 96 | 3 | 31 |
| Two ways to attend | 1 | 1 | 0 | 1 | 320 by 320 | 96 / 96 | 2 | 27 |
| Across the year | 1 | 1 | 0 | 0 | 320 by 320 | 96 / 96 | 2 | 24 |

**Rule greps** (BUILDER-BRIEF, run on `index.html` and `styles.css`): `grep -c "<form"` 0; `grep -c "<script"` 1
(the JSON-LD block); external hosts only in `href` destinations on the five allowed domains; no placeholder text;
the only numerals in visible text are 90th, $10,400, 9, 8th, (512) 270-9481 and 2026-09-10; no "advisor" in visible
text (the `data-type="advisor"` attribute value is the spec's and is allowed); "Georgetown Campus" and "GT Anywhere"
in full everywhere; every image carries `alt`, `width` and `height`; one `h1`; skip link to `#main`; `header`,
`nav`, `main`, `footer` landmarks; the comparison is a real `<table>` with `<caption>` and `scope`; no raw hex in
`styles.css`.

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
reader sees at the bottom edge clears 3:1. Final pass: all checkers clean, Result line as quoted.

**First screen at 390 by 844, stated.** Header, the umbrella sentence, the provenance line, both door names and
both door CTAs are above the fold; the two door lines follow the second CTA and are cut by the bottom edge, which
is what tells a parent the page continues. Nothing else competes.

**Console.** Zero errors, measured by the runner across all nineteen rows.

## What a critic should press on

Named here rather than left to be found. (1) The first screen is not a beat and cannot be; the direction's claim is
weaker on screen one than anywhere else, and the slack there is distributed air, not composition by intent. (2) The
two concentric rings read as a bullseye before they read as two ways to attend; the label and sentence carry the
meaning, and an alternative geometry would have to leave the brief's "two concentric rings". (3) The accent fills
measure 2.38:1 on cream and are redeemed by their own navy outline and by carrying no unique information; a
one-token change to `--color-accent-text` is available. (4) The page is 8,623px tall at 390 because four beats each
take a screen; that is the direction's cost, and the comparison table is deliberately the one dense object that
repays the scroll.
