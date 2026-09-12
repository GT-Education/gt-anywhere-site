# M31 "Our Story", rationale

| Field | Value |
|---|---|
| Mock | M31 "Our Story", `0_plan/mockups/M31-our-story/` (`index.html`, `styles.css`, this file, `qa/`) |
| Brief | `0_plan/kb/briefs/M31.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1, including the four rows added to section 3 |
| Lens order | L3 mission, L2 continuity, L1 objective, L4 exclusivity |
| Where it comes from | Johnny, 2026-09-11: he read the story section of the live gt.school about page and proposed it should become the main page. This mock tests that proposal as a landing page |
| Built | 2026-09-12, design engineer (Opus 5 fork of the design director), one build pass with the runner in the loop: `node 0_plan/tools/shots.mjs 0_plan/mockups/M31-our-story` (Playwright from the npx cache, cached Chrome for Testing `chromium-1234` 151.0.7922.34), plus `qa/M31-measure.mjs` for the h1 line counts and the two headline variants. Every capture in `qa/` is from the single final run pasted under Self-check |
| Source loads | None. `gt.school`, `anywhere.gt.school` and `alpha.school` were not opened in a browser. The nine story sentences were supplied as text in the build brief and are reproduced from it |
| State | No JavaScript (D-039 escalated, so no `data-d039` declaration; one JSON-LD script; the page is complete at rest). No form, no input, no dependency. **No photograph** (DD-42 option a, RF-25, AD-11) |
| Id collision | `0_plan/kb/briefs/M26-M31-wave.md` also names an M31, "The Tour", and `0_plan/mockups/M31-the-tour/` exists. This mock is built from `0_plan/kb/briefs/M31.md` ("Our Story") into `M31-our-story/` as instructed; the two ids need reconciling by the director before the slate is shown to Nari |

---

## Copy ownership: read this first

**The body prose of this page is not `copy.md`, and Nari has not approved it.** This is the one mock
in the slate whose narrative copy is quoted from a live page rather than drawn from the approved deck.
The nine sentences come from `https://www.gt.school/about-us#story` (fetched as text 2026-09-11).
Nari owns whether that copy moves to the landing page. The same statement appears in an HTML comment
at the top of `index.html` and again under Flagged slots.

Everything else on the page is `copy.md` v1.1 verbatim: the provenance line, both door labels, names,
lines and CTAs, the compare anchor, the comparison table with its repeated values, the four proof
facts, the sources line (twice), the application steps, the four secondary CTAs, current families and
the footer facts block.

### The quoted sentences, checked character for character

Checked by script over the page's rendered text (tags stripped, character references decoded, the
build brief's strings on the other side):

| # | Sentence | On the page |
|---|---|---|
| 1 | "GT School is the gifted academy of the Alpha School family." | **Identical**, as the h1 (variant A) and, in variant B, as the story's opening line |
| 2 | "Alpha proved that students can master core academics in a few focused hours a day and love school while doing it." | **Identical**, 113 characters |
| 3 | "GT asked the next question: what happens when you apply that model to the students who are ready to go further and faster?" | **Identical**, 122 characters |
| 4 | "We answered that question in Georgetown, Texas, where a flagship K–8 campus was launched to prove that 3X learning velocity isn't just a slogan, but a measurable fact." | **Identical for its first 88 characters, then stopped and closed with a full stop.** The page reads "We answered that question in Georgetown, Texas, where a flagship K–8 campus was launched." Nothing marks the stop. See the next subsection |
| 5 | "The pilot answered emphatically, with students achieving multiple grade levels of acceleration while deepening their academic interests, and all while loving school." | **Identical**, 165 characters |
| 6 | "Since then, GT School has grown on every axis." | **Identical**, 46 characters |
| 7 | "GT Anywhere launched in 2026, bringing the full model to gifted families nationwide." | **Identical**, 84 characters |
| 8 | "This K-8 virtual academy attracted hundreds of students in its first months and continues to build momentum." | **Identical**, 108 characters |
| 9 | "The same philosophy extends to GT Summer Camps which have turned school vacations into the proving ground gifted kids actually want." | **Identical**, 132 characters |

**The K–8 / K-8 inconsistency is the source's and is kept.** Sentence 4 sets an **en dash** (U+2013,
shipped as `&#8211;`) and sentence 8 a **hyphen**, one page apart. Both are reproduced exactly as
found. They were not harmonised, because harmonising them would be an edit to copy nobody has
approved; if Nari adopts this copy, one of the two should be corrected on gt.school as well, and that
is a content fix for her, not a typographic decision for this mock.

### The one clause that is withheld, and why (escalation)

Sentence 4's closing clause — "to prove that 3X learning velocity isn't just a slogan, but a
measurable fact" — **cannot be published on this page**, and the brief's "reproduce each sentence
character for character" and the programme's standing decisions are in direct conflict on it. The
conflict is three-way and all three sides are mechanical:

| Authority | What it says | Effect |
|---|---|---|
| **G0.5 decision 2** (`0_plan/16-g05-decision-record.md`, decided by Johnny 2026-09-10) | "No speed figure on the landing. 3X is the only candidate, and only after data is published"; section 2 restates it as "No multiplier anywhere on the landing, in its titles, structured data or ads" | A decided decision by the gate owner. It outranks a brief row |
| **`1_spec/tools/check-claims.py`** | Maps the token `3X` to **CR-004**, and CR-004 is in the script's `withheld` list, so the run prints `FAIL withheld claims present` | The claims checker fails, and the task requires it clean |
| **`0_plan/tools/check-mocks.py` R5** | The visible-text number whitelist is `{90, 10,400, 9, 8, 512, 270, 9481, 2026, 09, 10, 844, 390, 1440}`. The `3` of "3X" is not on it | The mock checker fails too |

So the sentence **stops at "was launched." with nothing marking the stop**, and the withholding is
recorded here and in Flagged slots instead. The full sentence is printed above, so a reviewer can see
exactly what is missing; the page is where it must not appear.

The first build marked the stop with a bracketed elision. That was wrong on three counts, and the
critic was right to say so. A bracketed elision is **quotation apparatus**, and nothing on this page
frames the prose as quoted — there are no quotation marks, no attribution line, no source note; the
school is speaking in its own first person, and a school does not elide itself. It was also
**inconsistent with the rest of the page**, which withholds the accreditation status (G0.5 item 3)
and the outcome figure (item 2) silently, with no mark at all; one visible elision among three silent
withholdings tells a reader that this particular removal is the interesting one. And it read as
**damage rather than editing**: the reader who notices it learns only that something is missing, which
invites the question without answering it.

The whole clause goes, not just the two characters "3X", because CR-038 is the row that records the
*framing* — "stated as measurable" — and dropping only the digit would leave the page asserting that
an unnamed velocity claim is a measured fact, which is the weaker position, not the safer one. What
remains is a complete, true sentence in the school's own words: Georgetown, a flagship K–8 campus,
launched.

**This is the one brief row I could not satisfy in full.** It needs Johnny or Nari:

- If the 3X figure is to appear, G0.5 decision 2 has to be reopened and CR-008/CR-038 moved to
  `Approved` with published data behind them; the two checkers then need CR-004 off the withheld list
  and `3` on the R5 whitelist.
- If it is not, the shortened sentence stands here, and the same clause is worth revisiting on
  gt.school itself, where it is live today.
- A third option nobody has taken: rewrite the sentence. That is a copy change and belongs to Nari.

### The figures the story carries, with their register rows

| Figure in the story | Register row | Status (`0_plan/12-claims-register.md`) | On the page? |
|---|---|---|---|
| "3X learning velocity", framed as a measurable fact (sentence 4) | **CR-038** (the accurate row: it records this exact wording and the "measurable fact" framing) and **CR-008** ("3X learning velocity", the same figure across all of gt.school) | **Both Unverified, owner Nari.** CR-038 dated 2026-09-11; CR-008 dated 2026-09-10, with no internal conflict but a cross-site conflict against CR-005 and CR-006 | **No.** Withheld, see above. `check-claims.py` maps the `3X` token to CR-004, which is why the accurate rows are cited here in prose instead |
| "hundreds of students in its first months" (sentence 8) | **CR-036** | **Unverified, owner Nari.** No enrolment figure is published anywhere else on either estate | Yes, in the source's own words. It is a quantity word, not a numeral, so it carries no digit and neither checker sees it; it is still an unverified claim and is listed here for Nari |
| "multiple grade levels of acceleration" (sentence 5) | **CR-037** | **Unverified, owner Nari.** Overlaps CR-004 and CR-008 in substance while stating no multiple | Yes, in the source's own words. Same position as CR-036 |

The rows the fixed deck relies on, all "Unverified, public", **owners read off
`0_plan/12-claims-register.md` row by row rather than assumed**: **CR-011** (90th percentile,
4 occurrences) is owned by **Crystal**, not Nari — it is the admission bar and admissions owns it,
so an approval request for this page routes to two people, not one. **CR-021** ($10,400, 1),
**CR-032** (four weekends, 3), **CR-033** (9 to noon and about two hours, 2), **CR-034** (two to
three hours, 1) and **CR-035** (weekly check-in, 2) are owned by **Nari**, as are the four story
rows CR-008, CR-036, CR-037 and CR-038. Counts are the checker's, pasted under Self-check. No
register id, status or owner appears on the page (REQ-022).

### The photographs, and why this is the direction that would change most

**Default state: no photograph**, exactly as everywhere else in the programme (DD-42 option a, RF-25,
AD-11). The live story section carries **four photographs and every one of them shows identifiable
children**, so the four images that make that section work on gt.school today are the four this page
is not allowed to use. Every other mock in the slate loses a decorative photograph under the default
state; this one loses the section's own illustration. **If Nari gives written permission naming
website and paid-advertising use, this is the direction whose appearance changes most**: one 3:2
photograph at the Georgetown movement, at most 720 CSS px wide, `object-position: 50% 50%`, captioned
from `copy.md` section 9 (the specification is under Assets; it is not built).

---

## Direction

**Thesis.** A school explains itself by telling how it came to exist. Alpha proved a model; GT asked
what happens when you give it to students ready to go further; Georgetown answered; the answer grew
into a campus, a virtual school and summer camps. The two doors are where that story *arrives*, not a
pair of buttons parked beside it.

**How the first screen serves the lens order.** L3 mission comes first because the h1 is the school's
own account of what it is ("GT School is the gifted academy of the Alpha School family."), not a
description of its services. L2 continuity comes second because that sentence is already published on
gt.school and because the page's shell — mark, three faces, cream ground, navy action — is the
estate's. L1 objective is third and is not compromised: both door CTAs sit above the fold at all
sixteen fold rows, the two doors carry label, name, line and CTA at equal weight, and the compare
anchor follows them. L4 exclusivity is last and arrives as selectivity in the table, the proof strip
and the steps line, never as price (MD-25).

**Composition.** Header 56 (92 where the two utility links wrap, measured below). Then one page-wide
left edge for everything: the h1 on its own 35ch measure, the provenance line under it, the two doors
across the full container, the compare anchor, and a 3px accent rule that closes the first screen.
The story follows on the same cream ground with **no rule between them**, so the narrative reads as
one continuous surface, and is set as five numbered movements in a single reading column: a hairline,
a Roman numeral in Inconsolata, a short Literata heading in the story's own words, and the quoted
sentences beneath, one idea per paragraph. Then the page turns to its reference half — comparison,
proof, steps, secondary CTAs, families, footer — each band keeping its own ground.

**The first screen is not stretched to the viewport.** An earlier build reserved the room below the
doors with a `min-height` tied to `svh`; at 1440 by 900 that opened a 270px hole between the second
CTA and the compare anchor. The screen is now exactly as tall as its content and the story starts
directly under the accent rule, which on every laptop row puts the first movement inside the first
screen. For this direction that is the argument, not an accident of the fold rule: a parent sees that
the page is a story before scrolling.

---

## h1

**The h1 is the story's own first sentence: "GT School is the gifted academy of the Alpha School
family."** Literata 400, `--text-3xl` (27.0px at V1 to 46px at V16 and V17), `--leading-tight` 1.15,
`max-width: 35ch`, `text-wrap: balance`.

Three reasons, in the brief's order. It is **eleven words against the fixed sentence's twenty-two**.
It is **already published** on gt.school, so it is not a new claim. And fact 1 of the five every
session carries says the Alpha affiliation is a **prominence decision, not a disclosure decision**
(MD-17), so putting it in the h1 is a choice about emphasis that Nari can take or refuse, not a
disclosure that has to be argued.

**It is still a copy departure and it needs Nari.** `copy.md` section 1 fixes the umbrella sentence,
and this h1 replaces it. So variant B is built into the same file: the fixed sentence sits in the h1
as a second span, the story's first sentence is duplicated as a hidden opening line for the story, and
**one commented-out line in `styles.css`** switches all three:

```css
/* Headline variant B — restore copy.md's fixed umbrella sentence as the h1 and move the story's
   own first sentence to the head of the story. Uncomment the next line only. */
/* .h1-a { display: none; } .h1-b, .story-open { display: block; } */
```

In variant B all nine quoted sentences are still on the page: sentence 1 moves from the h1 to the head
of the story, set in Literata at `--text-lg`, so the narrative still opens the way the source does.

### The two variants, measured side by side

Measured by `qa/M31-measure.mjs`, which loads the page and then injects exactly the CSS that the
commented-out line contains, so variant B is the shipped file with one line uncommented and nothing
else changed. h1 line count is the number of rendered line boxes of the visible span; the fold figure
is the deeper of the two door CTAs' bottoms against the row's limit (viewport height minus 24).

| Row | Limit | **A** h1 px | **A** h1 lines | **A** deeper CTA | **A** spare | **B** h1 lines | **B** deeper CTA | **B** spare | Fold difference (B − A) |
|---|---|---|---|---|---|---|---|---|---|
| **375 by 629** (V2) | 605 | 27.26 | **3** | **550** | 55 | **7** | **676** | **−71 (over)** | **+126** |
| **414 by 715** (V5) | 691 | 27.95 | **3** | **517** | 174 | **6** | **614** | 77 | **+97** |
| **1280 by 720** (V14) | 696 | 43.19 | **2** | **462** | 234 | **4** | **562** | 134 | **+100** |
| **1440 by 900** (V16) | 876 | 46.00 | **2** | **471** | 405 | **4** | **577** | 299 | **+106** |

**The fold difference is 97 to 126px, and it decides three rows.** In this composition variant A
passes all sixteen fold rows; variant B, measured the same way, **fails four**: V2 (676 against 605),
V3 (678 against 640), V4 (678 against 635) and V10 (363 against 318). It passes V1 by 26px and V7 by
9px. That is not an argument that the fixed sentence cannot fit a landing page — the contract's own
compact recipe and the letter and specimen directions fit it — it is a measurement of what this
particular composition would have to give up to carry it: roughly one more step of phone compaction
plus the contract's `--text-xl` step-down at V10.

The line counts are the other half of the story. The contract's section 2 table budgets **6 lines at
V2 and 4 at V14/V16** for the fixed sentence; measured here it is **7 at V2 and 4 at V14/V16**, one
line worse than the estimate at the phone rows, which matches what M08 and M12 measured independently.
The story's sentence is **3 lines at every phone row and 2 from 750px up**.

### The case against the variant that shipped

The measurement favours variant A and the brief asks for it, but the strongest argument runs the other
way and belongs in front of Nari with the rest.

**The h1 and the provenance line are near-synonyms, so the first screen states the school's parentage
twice before it states its offer once.** The h1 reads "GT School is the gifted academy of the Alpha
School family."; 16px beneath it the provenance line reads "The gifted school in the Alpha School
network." A parent meets *gifted*, *Alpha School* and a belonging-word twice in a row, and only then
reaches "In person / Georgetown Campus" and "Online / GT Anywhere" — which is the first thing on the
page that tells them what is on offer or asks them to do anything. Variant B does not have this
problem: its h1 states the offer (selective, gifted and talented, in person in Georgetown or online)
and the provenance line then adds the parentage once, which is exactly the division of labour G0.5
item 6 designed when it put the affiliation in "one small line, once".

Three things soften it but none of them dissolves it. The repetition is a **prominence** choice, not a
disclosure one (MD-17, fact 1), and it is a choice Nari can take or refuse. The provenance line is the
smallest type on the first screen at `--text-sm` and muted, so the two are not typographically equal.
And a reader arriving from Instagram or from alpha.school meets on this page the same sentence the
Anywhere homepage already shows them, which is the continuity argument this direction exists to test.

But it is a real cost and the rationale should not have needed a critic to say so: **the direction
that best serves L3 mission is the one that serves L1 objective worst on the first screen**, because
it spends the page's largest type on where the school came from rather than on what a parent can do.
The fold measurement still decides which variant ships — variant B fails four rows in this
composition — but if Nari values the offer-first first screen, the answer is not to force variant B
into this layout; it is to take the fixed sentence to a direction built for it (M08 and M21 both fit
it), and to keep this one as the argument for the shorter headline.

---

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id and name, lens order | M31 "Our Story", folder `M31-our-story`; L3 mission, L2 continuity, L1 objective, L4 exclusivity | Met (id collision with M31 "The Tour" raised above) |
| Where it comes from | Johnny's reading of the gt.school about page, supplied as text; no browser load of any GT or Alpha host | Met |
| Thesis | The story is the spine of the page; the doors are where it arrives. Five movements between the first screen and the comparison | Met |
| The copy, and who owns it | Stated at the top of this file, in Flagged slots, and in an HTML comment on the page. Nothing rewritten, trimmed to fit, merged or given connective tissue — one clause withheld under G0.5 decision 2, the sentence stopped at "was launched.", escalated above | **Met but for sentence 4's purpose clause**, which is the escalation |
| The fixed frame stays | h1 aside, every fixed slot is `copy.md` v1.1 verbatim: provenance, both door labels, names, lines and CTAs, compare anchor, comparison table with repeated values (DD-43), proof facts, sources line twice, steps, four secondary CTAs, current families, footer facts | Met |
| The headline | The story's first sentence as the h1; variant B behind one commented-out line; both measured at the four named rows and at all nineteen | Met |
| Composition | Header 56; first screen h1, provenance, both doors, compare anchor; then five numbered movements on one ground at the reading measure, in the deck's own words ("Alpha proved it", "GT asked the next question", "Georgetown answered", "It grew on every axis", "The same philosophy extends"); then comparison, proof, steps, secondary CTAs, families, footer. One column at every width, no two-column prose | Met, with the measure narrowed from `--measure-prose` (departure below) |
| Typography | Movement headings Literata `--text-xl`; story prose Inter Tight `--text-base` at `--leading-prose` 1.5, one sentence a paragraph; movement number `--font-mono` `--text-xs` uppercase muted. No pull quotes | Met. The numbers are **Roman numerals** because Arabic digits are not on the R5 whitelist (departure below) |
| Colour and surface | `--color-bg` unbroken from the header through the story, with no band rule between the first screen and the story; comparison `--color-surface`, proof `--color-bg`, steps `--color-navy`, connect `--color-bg`, families `--color-surface`, footer navy. One accent use per screen: the 3px rule under the compare anchor on the first screen, one short accent mark at movement III, where Georgetown answers. Focus per contract, two-band ring on navy | Met |
| Imagery | Default state, no photograph. The four live photographs and what changes under permission are argued above | Met |
| Figures | CR-008, CR-036, CR-037 and CR-038 cited above with their status; the `check-claims.py` CR-004 mapping explained; no figure added that the story does not carry | Met |
| Motion | Still. Nothing animates. V6 is specified and **not built**, because it needs the D-039 script and D-039 is escalated; the page is complete at rest without it. Reduced motion zeroes every duration | Met |
| Conversion | Doors on the first screen at all sixteen fold rows; compare anchor beneath them; the story; the table with repeated values; proof; steps; secondary CTAs; families; footer | Met |
| Acceptance: every quoted sentence identical, checked and stated | Checked by script, table above | Met for eight of nine; sentence 4 stated exactly |
| Acceptance: both marks and both focus rings pass under forced colours in each palette | Runner, both schemes: both mark files "kept by the image itself"; every ring **21:1 against the surface it is drawn on, outside the element**. Corrected during review, programme-wide and not by me: each plate's ring had been stated in the plate's own retained colour, on the reasoning that a plate keeping its colours keeps its ring. Every ring in the programme sits at a positive `outline-offset`, so it is painted **outside** the plate on Canvas, and this mock's rings measured **1.03:1 in the light palette and 1.39:1 in the dark** — no ring at all, in both directions. The declarations now read `CanvasText`, the only value guaranteed to contrast with the ground the ring is actually drawn on in either palette. The per-plate rules are left in the stylesheet as the record of what was tried, with the last rule winning | Met, measured, after the correction |
| Acceptance: rationale names DD-38, DD-39, DD-46, DD-47, DD-48 and the three claims rows | All named below; CR-036, CR-037, CR-038 (and CR-008) above | Met |
| Acceptance: both critics at or above 4, Mission expected at 5 | Pending the critics | Pending |

---

## Fold: designed to, then measured

Method: CONTRACT section 2, with this composition's own arithmetic and the **measured** h1 line counts
rather than the contract's 132-character estimate. Gaps are the space tokens in `styles.css`. The
header is 56 (`min-height: 3.5rem`, its hairline drawn as a `box-shadow` so it adds no height) except
below 412px wide, where the two utility links cannot sit beside a 27px mark and the bar wraps to two
44px rows and stands **92** — measured, not assumed. On phone rooms the compact door rule applies, so
each door is label + name + CTA and both door lines follow the second CTA; `.doors` is a flex column
with a 16px gap, so that gap falls between every one of those items and is counted. Estimates were
written before the runner ran; **the measured column is the runner's bottom coordinate of the deeper
door CTA, from the run pasted under Self-check** (checker R37).

| Row | Limit | Form | Estimate to the deeper CTA | Measured | Spare | Delta |
|---|---|---|---|---|---|---|
| **V2** 375 by 629 | **605** | Compact; header wrapped | 92 + 16 + h1 3 lines 94 + 16 + provenance 18 + 24 + door 1 (16 + 16 + 4 + 25 + 16 + 8 + 44 = 129) + 16 + 16 + door 2 (129) = **550** | **550** | 55 | 0 |
| **V5** 414 by 715 | **691** | Compact; header 56 | 56 + 16 + h1 3 lines 96 + 16 + 18 + 24 + door 1 (16 + 16 + 4 + 26 + 16 + 8 + 44 = 130) + 16 + 16 + door 2 (130) = **518** | **517** | 174 | 1 |
| **V14** 1280 by 720 | **696** | Doors side by side on a shared grid | 56 + 48 + h1 2 lines 99 + 16 + 19 + 48 + door rows (label 16 + 12 + name 31 + 12 + line 2 lines 53 + 16 + CTA 44 = 184) = **470** | **462** | 234 | 8 |
| **V16** 1440 by 900 | **876** | Doors side by side on a shared grid | 56 + 48 + h1 2 lines 106 + 16 + 19 + 48 + door rows (16 + 12 + 32 + 12 + 54 + 16 + 44 = 186) = **479** | **471** | 405 | 8 |
| V10 750 by 342 (contract recipe) | **318** | Landscape: `--space-3` gaps, compact blocks side by side, h1 kept at `--text-3xl` | 56 + 8 + h1 2 lines 78 + 8 + provenance 21 + 12 + (label 16 + 4 + name 22 + 8 + CTA 44 = 94) = **277** | **285** | 33 | 8 |

The 8px deltas at V14, V16 and V10 are grid row heights: the door rows are sized by their tallest
item, and the label row is the 16px glyph rather than the 16.08px label line box. They are reported
rather than smoothed.

**Every other fold row, measured** (deeper CTA against the limit): V1 566 of 716; V3 551 of 640;
V4 552 of 635; V6 654 of 815; V7 552 of 657; V8 518 of 715; V11 605 of 1000; V12 609 of 1170;
V13 474 of 744; V15 467 of 624; V17 471 of 936. **Sixteen of sixteen fold rows pass, V10
included** — V1 to V8 and V10 to V17, which is every row the runner rules as `fold`. V9 is an
emptiness test and not a fold row: 688, page height 7730. V18 (reflow, 320 by 256) no horizontal
scroll. V19 (zoom, reported not required under DD-44) 474 of 552, scroll width 1024, nothing clipped.

**What crosses the bottom edge, per row.** The requirement is that something a parent would read
crosses the edge on every row, and the runner's false-floor test is the evidence. On V1 to V4 and V9,
V10, V12, V14, V15, V16 and V19 it is **text cut by the edge**; on V5 to V8, V11, V13 and V17 the
runner reports content reaching within the reserved 24px with more below (V8 reaches 739 of 739). On
the phone rows the cut text is a door line or the compare sentence; on the laptop rows it is the
story's own first movement — its numeral, its heading, or its first paragraph. V18 is the reflow row,
where the fold rule does not apply (DD-44): nothing that starts below a CTA at 583 can begin inside a
256px viewport. The full table is `qa/fold.md`, "Next band evidence".

**Two rows had to be earned, and both taught the same lesson.** The first: at 1920 by 960 the edge
landed in the 48px margin between two movements and the runner called a false floor, because the
contract reserves the bottom 24px and nothing reached into it. The story's rhythm is now built from
runs of at most one space step — paragraph, 24 to the rule, 24 to the numeral, 8 to the heading — so
**no empty run in the story exceeds 24px** and no viewport height can land in a hole. The second: at
1024 by 576 (1280 by 720 at 125 per cent zoom) the first screen finished 45px clear of the edge; short
laptop rooms (`min-width: 1024px` and `max-height: 700px`) now close the band seam to one space step
on each side, and V19 reports text cut at 564 to 577.

### Measured line lengths (K1 CP7 asks 45 to 75 characters)

Counted in the browser by binary-searching the break points of each text node.

| Text | 1440 | 1280 | 1024 | 768 | 375 |
|---|---|---|---|---|---|
| Story prose, at `--measure-prose` (65ch) as first built | max 82, mean 79 | max 82, mean 79 | max 82, mean 79 | max 82, mean 79 | max 47, mean 43 |
| **Story prose, at `--measure-read` (55ch) as shipped** | **max 75, mean 67** | max 75, mean 67 | max 75, mean 67 | max 75, mean 67 | max 47, mean 41 |
| Door lines, at `--measure-prose` as first built | max 67 | max 71 | max 54 | **max 77** | max 43 |
| **Door lines, as shipped** | max 67, mean 65 | max 71, mean 67 | max 54, mean 52 | **max 71, mean 67** | max 43, mean 35 |
| Table cells, uncapped in the stacked form | max 55 | max 56 | max 43 | **max 95** | max 47 |
| **Table cells, as shipped** | max 55, mean 50 | max 56, mean 52 | max 43, mean 39 | **max 75** (73 over full lines, mean 66; stacked and capped) | max 47, mean 42 |

`--measure-prose` is 65ch of Inter Tight, and `ch` is the advance of the digit zero, which is wider
than this copy's mean advance: 65ch measured **82 characters** of these sentences at every width from
768. For a direction whose whole claim is that the page is read rather than scanned, that is over
K1 CP7's ceiling by seven characters on every line of the argument, so the reading column is
`--measure-read: 55ch`, measured at **67 mean and 75 at most**, exactly on the ceiling. The departure
is declared below. The same measure caps the door lines, which ran **77 characters** at 768 with the
doors stacked, and the stacked comparison table, which ran **95 characters a cell** at 768 uncapped.
Every measured line on the page is now inside K1 CP7's 45 to 75 band except the table's stacked cells
at 768 and 834, where the longest rendered line is **75** — on the ceiling, not over it. The
distinction matters and the first version of this table got it wrong: 73 is the longest *full* line,
75 is the longest line a reader actually sees, because a cell's last line counts too. Every figure in
this table is now the longest rendered line, last lines included.

---

## Decisions applied

| Id | How this mock applies it |
|---|---|
| **G0.5 items 1 to 6** | Item 1 (umbrella sentence) is the one the mock departs from, deliberately and with variant B measured beside it. Item 2 (no speed figure) is why sentence 4's purpose clause is withheld — the decision outranks the brief row, and the escalation is above. Item 3: no accreditation claim, no Cognia mark. Item 4: "Tuition on request. Ask admissions." Item 5: Guides, never advisors on the page (`data-type="advisor"` is the spec's attribute value, not text). Item 6: the provenance line exactly once, small, under the h1 |
| **REQ-022, DEL-018** | Every figure maps to a register row; `check-claims.py` OK. CR-011, CR-021, CR-032 to CR-035 are "Unverified, public"; CR-008, CR-036, CR-037, CR-038 are "Unverified". Stated here, never on the page |
| **REQ-070, DD-25** | Application links only with `?school=georgetown` or `?school=anywhere`; the parameter name is DD-25's convention and the live one is still to be confirmed in S5 (flag) |
| **DD-04** | Explicit format labels "In person" and "Online" with a supporting 16px stroked glyph on each door; the school name follows in the name and again in the CTA label. Redundant cue, no colour coding |
| **DD-06, DD-43, R6** | One comparison table, shared rows first, every shared value repeated in both columns. Two-column form from **1024px**, where the cells reach 43 to 45 characters; stacked blocks with the school name labelling each cell below that, capped to the reading measure (the breakpoint is measured, not assumed: see Departures) |
| **DD-08, DD-31, DD-42, RF-25, AD-11** | No photograph in the default state; the photographed state and the fallback are under Assets. The four live photographs of identifiable children are the reason this direction changes most under permission |
| **DD-10, MD-25** | Exclusivity as selectivity: the 90th-percentile bar in the table, the proof strip and the steps line. No price cue, no countdown, no wealth cue, no stock photography, no placeholder copy |
| **DD-12, DD-13** | Header: mark, "Current families", "Contact admissions". No menu. No phone number in the header; the published number is in the footer |
| **DD-14** | Designed at the phone rows first; V2 binding. Doors stacked Georgetown then Anywhere. No sticky CTA |
| **DD-19** | Every departure named below |
| **DD-21** | The doors are a `<ul role="list">` that renders at two entries. Cost for a third campus, stated honestly: the stacked form and the compact form take a third `<li>` with no CSS at all; the 940px split needs one more column in `grid-template-columns` and one more `nth-child` rule; the phone-landscape recipe places two doors explicitly and needs a third placement rule |
| **DD-29** | Every screen carries a fact: the first screen the two door lines, the story screens the movements, then the table, the proof strip and the steps |
| **DD-30** | Plain word first, as the fixed copy already writes it ("Guides, not lecturers: adults who coach…") |
| **DD-38 (b), R5** | The layer-2 fluid scale and `--leading-prose` as working defaults; Literata **400** for the h1 and every heading (300 against 400 is the wave's test, not this mock's); fit measured on the real copy at every row, above |
| **DD-39 (a), RF-07** | `--color-on-navy` for text on navy and for the outer band of the navy focus ring and the reversed button fill; `--color-text-muted-on-dark` for muted text and footer underlines on navy; `--color-border-strong` for every rule that separates content and for resting link underlines on light. The last two are new tints and DD-19 departures |
| **DD-42** | Option a: no photograph today; parity and permissions specified, not built |
| **DD-43** | The three shared comparison rows carry their value in both columns; no "Same" cell |
| **DD-44** | Fold fit in `svh` terms; the 19-row matrix is binding; V18 and V19 reported, not required, and both pass anyway |
| **DD-46** | Door button fill is the contract's surface-dependent one: `--color-navy` fill with `--color-on-navy` text on the light bands (13.88:1 fill against the ground, 14.58:1 label on the fill), reversed to `--color-on-navy` fill with `--color-navy` text on the navy steps band. Not the estate's orange, whose near-white label measures 2.50:1 (K12 F87) |
| **DD-47** | One uniform `--radius-md` (8px) corner on all four sides of every button, the value DD-46 already adopted and one of the estate's own three constructions (its desktop header application button). No `8px 8px 0 0` filler radius, which draws a square lower-right corner and matches neither the estate nor the contract |
| **DD-48** | Nothing borrowed from the Design Library. This direction's source is the school's own published prose, not a design language; the palette and the three faces are GT's, as DD-48 option (a) requires of the mocks that do borrow |
| **MD-17** | Affiliation as prominence, taken to its limit: the affiliation is the headline in variant A and the small provenance line in both variants. That is the decision this mock puts in front of Nari |
| **MN-16, D-031, D-039** | No script, no input, no `data-d039` declaration. Nothing animates; hover and focus are instant (V1, V3); the in-page anchor uses native smooth scroll inside `prefers-reduced-motion: no-preference` only (V10). V6 specified, not built |
| **SE-13** | `noindex, nofollow` on the mock |
| **R14, MD-02** | "Ask about a tour of the Georgetown campus", until a booking route exists |
| **R6** | The comparison breakpoint is the measured one for this layout, not a copied 767 |
| **R8** | Reduced motion: every computed duration 0, every state visible at rest; the runner confirms at V14 |
| **K3 sections 5c to 5f** | Text `--color-text` on `--color-bg` 17.69 and on `--color-surface` 16.10; muted 6.25 and 5.69; `--color-on-navy` on navy 14.58; `--color-text-muted-on-dark` on navy 7.81; `--color-border-strong` 3.63 on bg and 3.31 on surface; focus `--color-focus` 8.20 on bg and 7.46 on surface. The accent is never text and never carries meaning: 2.38 on bg, 2.17 on surface, both below 3:1, so both accent marks are `aria-hidden` decoration (see Departures). One accent event per screen |
| **K12 V2 / G4** | Horizontal marks 27px at 390 and 32px at 1440, aspect skew 0% on all three instances, measured by the runner |
| **CONTRACT section 3, "A line that carries the argument must reach 3:1"** | Every rule that separates content — band seams, movement rules, step rules, connect rows, the TEFA rule — is `--color-border-strong` at 3.63 / 3.31. `--color-border` (1.56) is used only where a row separator is redundant with the whitespace around it: inside the story, the proof list and the table body, where every block is also a paragraph break. No line on this page carries an argument a reader could not get from the words beside it; there is no drawn diagram |
| **CONTRACT section 3, "A drawn object may state a proportion"** | Nothing is drawn. There is no object a reader can count, so no proportion is stated |
| **CONTRACT section 3, "Nesting is hierarchy"** | The two schools are never nested. They are two equal columns of one grid sharing label, name, line and CTA rows, with identical type, identical button treatment and identical widths |
| **CONTRACT section 3, "Literata overflows its line box"** | Literata stands 0.1675em proud of a 1.15 line box on each side: 4.69px at 28px, 5.67px at 33.86px, 7.71px at 46px. Every Literata heading here sits on flat cream, flat surface or flat navy with **nothing drawn behind or beside it**, so the overhang only has to clear the rules above. Movement heading: 24px from the rule to the numeral plus the 16px numeral plus 8px, so **48px** of clearance against a 4.69px overhang; at movement III the accent mark sits 16px above the numeral instead, so **40px**. h1: the section's own top padding above it, 48px from 1024, 32 at 768, 24 at base, 16 compact and **8 on the phone-landscape row**, where the h1 is 33.86px and its overhang 5.67px — the tightest clearance on the page, and still clear |

### Layer-2 tokens used, with their rows (`TOKENS-V2.md`)

All PROPOSED; the contract requires a mock that uses one to name its row.

| Token | Where | Register row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | Every type role on the page | DD-38 option (b), R5 |
| `--leading-prose` (1.5) | Body default, story prose, door lines, table cells, facts, sources, TEFA body | DD-38 option (b), RF-58 |
| `--measure-prose` (65ch) | **Measured and replaced throughout** by `--measure-read` (55ch): see Departures. The token stays declared in `tokens-v2.css` and is unused on this page | RF-55 |
| `--color-on-navy` | Footer and steps-band text, the reversed button fill, the outer band of the navy focus ring | DD-39 option (a), RF-07 (existing swatch in a new role) |
| `--color-text-muted-on-dark` | Muted labels on the navy bands and the footer links' resting underline | DD-39 option (a), RF-07: **new tint, DD-19 departure** |
| `--color-border-strong` | Band seams, movement rules, step rules, connect rows, the TEFA rule, the header hairline, resting underlines of text links on light | DD-39 option (a), RF-07: **new tint, DD-19 departure** |
| `--duration-none` | The reduced-motion block | MN-16 option (a), RF-53, R8 |

Not used: `--color-accent-text` (no accent text on this page), `--color-on-accent` (no accent fill
carries text), `--color-focus-on-dark` (the navy ring is built from `--color-navy` and
`--color-on-navy`, the contract's own two-band construction), `--ease-standard`, `--ease-out`,
`--ease-in` (nothing transitions).

---

## Motion spec

| What | Trigger | Duration token | Easing | Reduced motion |
|---|---|---|---|---|
| **Nothing animates.** `styles.css` contains no `transition`, no `@keyframes` and no `animation` | | | | |
| Door CTA, apply and hub buttons: underline on hover | `:hover` | Instant (V1, CONTRACT section 6) | none | Unchanged, instant |
| Text links: underline colour to `currentColor` | `:hover` | Instant (V1) | none | Unchanged, instant |
| Focus ring | `:focus-visible` | Instant (V3) | none | Unchanged |
| In-page link to `#compare` | Click | Native smooth scroll (V10), inside `prefers-reduced-motion: no-preference` only | Browser's | `scroll-behavior: auto` |
| **V6 one-time section reveal on the steps and the secondary CTAs** | The brief specifies it from the third screen | **Not built** | | D-039 (scripts) is Escalated to Johnny, so the mock ships its no-JavaScript state only and the page is complete at rest. If D-039 lands, V6 is a 300ms `--ease-out` opacity and 8px rise on `.band--navy` and the connect band, with `IntersectionObserver`, `rootMargin: 0px 0px -15% 0px` and `unobserve` after the first hit |
| Reduced-motion block | `prefers-reduced-motion: reduce` | `--duration-none` on every element, `::before` and `::after`, plus `scroll-behavior: auto` | | Runner at V14: every computed transition and animation duration is 0s |

---

## Assets

| Asset | Where | Alt | Consent | Fallback |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` (139 by 32) | Header lockup, linking to `#top`, at 27px below 768 and 32px from 768; footer, on a `--color-bg` plate, linking to `https://www.gt.school/` | "GT School"; "GT School, Georgetown Campus" | Brand mark, no person | None needed |
| `../shared/img/gt-anywhere-logo-h.svg` (252 by 48, white lettering) | Footer only, directly on the `--color-navy` panel, linking to `https://anywhere.gt.school/`, at 27px / 32px | "GT Anywhere" | Brand mark, no person | None needed |
| Photographs | **None.** Every file in `ASSETS.md` shows identifiable children, re-checked 2026-09-11 (AD-11, RF-25, DD-42 option a) | | | The default state is the fallback (DD-31) |
| Photographed state, **specified not built** | One 3:2 photograph at movement III, "Georgetown answered": `georgetown-guide.webp` (1440 by 960), `object-position: 50% 50%`, at most **720 CSS px** wide (DPR 2 against the 1440 source, R13), caption from `copy.md` section 9: "A Guide teaches at the whiteboard.", alt from `ASSETS.md`: "a guide teaches a lesson at the whiteboard" | | "published by GT on its own site, consent to be confirmed by Nari (AD-11)"; written permission naming website and paid-advertising use before use (DD-42) | Omit the figure; the movement is complete without it |

All three mark instances are eager (no `loading="lazy"`); `check-mocks.py` R13 exempts SVG logos and
the two files are 8 and 10 KB, so the brand images are present on first paint and in every capture.
No font is preloaded: the three faces are self-hosted under `/assets/` and load with `font-display:
swap` from `../shared/fonts.css`.

---

## Departures (DD-19 and the contract)

| Departure | Reason |
|---|---|
| **The h1 is not `copy.md`'s umbrella sentence** | The brief's instruction, argued under h1, with variant B built behind one commented-out line and measured beside it. It is the decision Nari is being asked to make |
| **The body prose is not in `copy.md` at all** | The whole point of the direction. Stated at the top of this file, in Flagged slots and in an HTML comment on the page |
| **Sentence 4 stops at "was launched."** | G0.5 decision 2, CR-008 and CR-038, and both checkers. Escalated above. The first build marked the stop with a bracketed elision and that was reversed on the critic's finding: an elision is quotation apparatus on a page that never frames this prose as quoted, and it was the page's only visible withholding among three. The withholding now lives in Flagged slots, where the other two already are |
| **The five movement headings and the Roman numerals are words and marks outside `copy.md` sections 0 to 9** | The brief names all five headings. They are the story's own words used as wayfinding, they state no fact and carry no figure. If Nari adopts the direction, they should be recorded in `copy.md` section 9 with the rest of the wayfinding vocabulary before any build |
| **Movement numbers are Roman numerals (I to V), not digits** | `check-mocks.py` R5 whitelists the digits the fixed copy needs; "01" or "1" would fail it. A Roman numeral is a position marker, not a figure, and it is the conventional mark for movements. The same device numbers the application steps, through `counter(step, upper-roman)` |
| **`--measure-read: 55ch` for the reading column instead of `--measure-prose` (RF-55, 65ch)** | Measured: 65ch of Inter Tight sets **82 characters** of this copy at every width from 768, over K1 CP7's 75 ceiling; 55ch sets 67 to 70. Applied to every multi-line prose block: the story, the door lines, the first screen's provenance and seam, the leads, the facts, the steps, the connect list, the sources lines, the TEFA block, the footer facts and the stacked comparison table. Measured after the change: story prose 67 mean and 75 at most, door lines 65 to 67 mean, stacked table cells 66 mean and 75 at most. A direction that argues a story is read cannot ship its argument at 82 characters a line |
| **The comparison table takes its two-column form at 1024px, not 767** | R6 asks for the measured threshold. Measured: the two value columns are 39% of a container capped at 72rem, so they reach 43 to 45 characters at 1024, 55 to 56 at 1280 and 1440. Below 1024 the table is stacked blocks with the school name labelling each cell, capped to the reading measure (uncapped it ran 95 characters a cell at 768) |
| **The two doors take their side-by-side form at 940px, not 768** | Measured: at 768 and 834 the two columns are 302 and 327px and the Georgetown CTA (330px set) wrapped to two lines. Portrait tablets keep the stacked doors; the split starts where the columns reach 347px |
| **The compact door rule runs to 767px tall, not the contract's 699** | Measured: at 414 by 715 and 430 by 739 the standard form finished 21 to 40px clear of the bottom edge with only a decorative rule below it, which the runner reads as a false floor and a parent reads as the end of the page. With the compact rule the door lines follow the second CTA and a sentence is what the edge cuts. Both rows now pass with 174 and 197px of spare fold |
| **Button tracking is 0.04em, not the 0.07em used on labels** | Measured: at 0.07em the "Explore the Georgetown campus" CTA is 329px set inside a 327px column at 375 and wrapped to two lines. At 0.04em it is 305px and holds one line from 360px up. It still wraps at 320 (V18), where the fold rule does not apply |
| **A no-break space between "from" and "anywhere." in the variant-B h1 span** | The fixed sentence is seven lines at V2 and measured `text-wrap: balance` still left "anywhere." alone on the last line. The words are unchanged; one space character is non-breaking. Stated because the umbrella sentence is a fixed slot, and because it is the reason the span cannot be called byte-identical to `copy.md` |
| **New tints `--color-border-strong` and `--color-text-muted-on-dark`** | DD-39 option (a) proposes both; used as rules and underlines and as muted text on navy, never as body text on light |
| **The accent is used twice on the page, once per screen** | CONTRACT section 4 caps accent use at one per screen, not one per page. The 3px rule under the compare anchor closes the first screen; the short mark at movement III opens the Georgetown movement on a later screen. Measured at 1440: the rule spans 541 to 544 and the mark 967 to 970, **423px of page apart**, so no viewport shorter than 967px shows both; at the matrix's tallest row (1920 by 960) the mark begins 7px below the first screen's edge. On a window taller than that both would be in view, 423px apart, one a 3px full-measure rule and one a 48px stub — stated rather than smoothed, because the brief asks for both marks by name. Both are `aria-hidden` and carry no meaning the words beside them do not: the accent is 2.38:1 on cream, below 3:1, so it may not carry an argument |
| **The first screen is not stretched to the viewport** | An earlier build used `min-height: calc(100svh - header - seam)` and opened a 270px hole at 1440 by 900. Content height only; the story starts under the accent rule. The `svh` construction is gone, so the page contains no `vh` at all |
| **`display: contents` on the door list items in the compact, landscape and 940px forms, with explicit `role="list"` and `role="listitem"`** | The only CSS-only way to move both door lines after the second CTA, and to put the two doors on shared grid rows so their CTAs start on one line, while the DOM keeps label, name, line and CTA together per door. The roles guard list semantics where `display: contents` drops them |
| **The run-in door name at the head of each moved door line is `aria-hidden`** | It is a fixed slot reused as a run-in label; a screen reader already hears the name in the door's own heading |
| **The year in sentence 7 is marked up as `<time datetime="2026">2026</time>`** | Correct markup for a year in prose, and it also makes the checkers tokenise it. `check-mocks.py` R5 and `check-claims.py` both read `\d[\d,]*` greedily and take "2026," with its comma as one token, which is on neither whitelist; an element boundary separates the year from the punctuation. Recorded here so nobody reads it as a trick: the year is whitelisted, the comma is not a digit |
| **Values outside the token set** | Breakpoints 600, 767, 768, 940 and 1024px, and `max-height: 400px`, `max-height: 700px` and `max-height: 767px` — the seven the stylesheet actually declares. (An earlier version of this row listed 411 and 412; 411 was a media query that was removed during the build and 412 survives only inside a comment recording a measurement, so neither is a breakpoint.) `--container: 72rem`; 1px hairlines; the 3px accent rules; the 2px focus ring and its 4px outer band; `--target: 2.75rem` (the 44px floor); `--mark-h` 27 and 32px (K12 V2); `--glyph: 1rem`; tracking 0.07em and 0.04em; underline offsets 0.16em and 0.2em; `35ch` (the h1 cap), `24ch` (band titles), `55ch` (the reading measure), `3ch` (the step numeral column); `overflow-wrap: anywhere` on buttons and `break-word` on the body, which stop the horizontal scroll at a doubled root font and change nothing at normal sizes |
| **The hanging folio was built and dropped** | The Roman numerals were first hung in the left margin as an index down the page. It needs a 160px gutter, and the 72rem container cap only produces one above 1312px wide; below that the numerals overflowed the viewport. Keeping it would also have put a second left edge on the page. The numerals sit above their headings instead, and the page has one left edge from the header to the footer |
| **Authored shell** | The header and footer are authored for this mock rather than inherited from `1_spec/04` partials. Cost for a third campus is stated under DD-21; the footer nav takes a third pair of links |

---

## Flagged slots

| Slot | Q or decision id | What ships | Note |
|---|---|---|---|
| **The whole story section (nine sentences, five headings)** | **No id yet. Nari owns it** | The nine sentences from `https://www.gt.school/about-us#story`, quoted, with sentence 4's purpose clause withheld | **Not in `copy.md`. Nari has not approved this copy for the landing page.** This is the mock's central question |
| **The h1** | G0.5 item 1, MD-17 | The story's first sentence | A departure from the fixed umbrella sentence. Variant B restores it behind one commented-out line; both measured above |
| **Sentence 4's purpose clause** | G0.5 item 2, CR-008, CR-038 | **Withheld. The sentence ends at "was launched." with no mark on the page** | Escalated to Johnny and Nari above. This is the page's third silent withholding, beside accreditation and the outcome figure |
| **"GT Anywhere launched in 2026"** | **No register row exists for it** | The year ships, in the source's own words, marked up as `<time datetime="2026">` | **A year is a figure and needs a row like any other.** The register has no row for GT Anywhere's launch date, and 2026 is on `check-mocks.py` R5's whitelist only because the sources line carries the date 2026-09-10, which is a different fact. Not proposed here: the register's own rule is that rows arrive from research or from Nari, and a builder inventing one would defeat the check. **Flagged for the director to open a row** |
| "hundreds of students in its first months" | CR-036, Unverified | Shipped in the source's words | Nari verifies or the sentence goes |
| "multiple grade levels of acceleration" | CR-037, Unverified | Shipped in the source's words | Nari verifies or the sentence goes |
| Photographs | DD-42, RF-25, AD-11 | None | Four live photographs of identifiable children; permission changes this direction most |
| Current families destination | Q-002 | `https://community.gt.school` | Confirm |
| Application steps | Q-007 | The four `copy.md` steps, same for both schools | Confirm they are identical for both |
| Georgetown tuition | Q-011 (decided) | "Tuition on request. Ask admissions." | Until Nari supplies the figure |
| After 8th grade | Q-013 | "Families plan the path after 8th grade with admissions." | Open |
| Intensive weekend logistics | Q-017 | Not on the page beyond "Four intensive weekends a year in Georgetown." | Open |
| Outcome figure | Q-019 | Nothing on the page | Withheld by decision 2 |
| TEFA window, owner, expiry | Q-021 | The `copy.md` TEFA module, visible to everyone (D-015 option c) | Open |
| Accreditation | Q-033 | Nothing on the page, no Cognia mark | Withheld by decision 3 |
| Parent quotes | Q-034 | None | Open |
| The adults' title | Q-035 (decided) | Guides | Anywhere still says Advisors |
| `apply.gt.school` parameter name | DD-25 | `?school=georgetown`, `?school=anywhere` | The live parameter is confirmed in S5 |
| Holly's unifying brand element | Q-001 | Not added | Would sit beside the header mark when it exists |
| **Page length** | — | **7,730px at 390 and 5,921px at 1280**, measured | Against roughly 6,638 and 4,493 for a comparable direction, so the story band costs about **1,100px on the phone and 1,400px on the laptop**. Routing is unaffected — both CTAs are above the fold at all sixteen fold rows and the comparison is the next band after the story — but a parent who scrolls past the story to reach the table scrolls through five movements to do it. **Flagged rather than fixed: shortening the story means cutting the school's own sentences, which is Nari's call, not a layout decision.** Not fixed here |
| The M31 id | — | This mock is M31 "Our Story" | `M26-M31-wave.md` also names an M31, "The Tour"; the director reconciles |

---

## Parent questions (`0_plan/05` section 6c)

| # | Question | Answered where | |
|---|---|---|---|
| PQ-01 | What is GT School? | The h1, the provenance line, and the story, which answers it historically rather than descriptively | Answered |
| PQ-02 | Is it for my child? | Proof strip, steps line and the comparison's Admissions row: at or above the 90th percentile, gifted and talented | Answered |
| PQ-03 | In person or online? | The two doors on the first screen, plus every comparison row | Answered |
| PQ-04 | Where is the campus? | Door 1's line, the comparison's "Where and how" row, the footer facts, and movement III | Answered |
| PQ-05 | What does a day look like? | The comparison's "The day" row, both columns | Answered |
| PQ-06 | What does it cost, and can TEFA help? | "Tuition and access" row and the TEFA module | Answered as far as decided: "Tuition on request" for Georgetown (Q-011) |
| PQ-07 | How do I apply? | "How to apply", four steps and two scoped application links | Answered |
| PQ-08 | Who teaches my child? | The comparison's Guides row and the proof strip | Answered |
| PQ-09 | How much in-person time does GT Anywhere have? | "In-person time" row and door 2's line | Answered |
| PQ-10 | What results, and is it accredited? | **Deferred by decision** (G0.5 items 2 and 3). The page is silent on both; admissions is one click away through "Talk to admissions". This direction makes the deferral conspicuous, because the story's own fourth sentence is the school's results claim and it is the clause this page withholds | Deferred, and visibly so |
| PQ-11 | What happens after 8th grade? | "After 8th grade" row, deferred to admissions (Q-013) | Deferred on the page |
| PQ-12 | I am a current family, where do I go? | Header link and the families band | Answered |
| PQ-13 | I am not ready to apply, what can I do? | Four secondary CTAs: FAQ, admissions, a campus tour, a virtual info session | Answered |
| PQ-14 | Is GT School part of Alpha School? | **The h1 in variant A**, and the provenance line in both variants | Answered more prominently than any other mock in the slate |

---

## Continuity (L2), against the measured estate (`shared/CONTINUITY.md`)

The reference measures **anywhere.gt.school** from this repository's own mirror, served from
`127.0.0.1`. **gt.school has no mirror here and is unmeasured**, so the Georgetown handoff is argued
from source text only and is stated as unverified. Nothing was loaded from production for this build.

| Property | The estate, measured | This mock | Argument |
|---|---|---|---|
| Page ground | `rgb(252, 244, 239)` | `--color-bg`, the same value, unbroken from the header through the story | Match |
| Body text | `rgb(0, 17, 23)`, Inter Tight | `--color-text`, Inter Tight | Match |
| Grain | The estate's cream is grained, with fine wave linework behind the hero | Flat cream | **Differs.** Flat cream reproduces the base colour, not the whole surface. For a page whose argument is prose, a texture behind the type is a cost with no benefit; the hairline system carries the structure instead |
| h1 | Literata **300**, 58.5px at 1440, letter-spacing **−1.6px**, with its second sentence in accent-orange italic at 400 | Literata **400**, 46px at 1440, tracking normal, one colour | **Differs, argued.** 400 is the contract's role and DD-38's test; the clamp tops at 46 because the fold budget is measured, not styled. The orange italic is the one estate device this page must not copy: K12 F88 measures that orange on cream at **2.38:1**, which fails AA |
| First-screen application action | Navy `rgb(0, 42, 58)` fill, near-white label, Inconsolata uppercase | Navy fill, `--color-on-navy` label, Inconsolata 600 uppercase | **Match, and deliberately so.** DD-46: navy is already inside the estate's action vocabulary, and the estate's orange button imports a 2.50:1 label (K12 F87) |
| Button weight and size | Computed 500 at 16px | 600 at 17 to 18px | **Differs.** `shared/fonts.css` ships Inconsolata 400 and 600 only, so a 500 cannot be registered without adding a face; the estate's 500 is a computed weight and may be synthesised. Declared-value difference, per the reference's own rider |
| Button silhouette | Three different constructions across three controls: a composed cut lower-right corner, a 14px clipped polygon, and four rounded corners | One uniform `--radius-md` on all four sides | **Match to one of the three**, the one on the control a parent clicks to apply (DD-47) |
| Footer | Uppercase Inconsolata navigation, email and phone in bordered pills, a legal row naming the 2 Hour Learning Network; the hero carries the Alpha School lockup | Navy footer, sentence-case links, the published phone number in Inconsolata, both marks on their own panels, the `copy.md` facts block | **Differs in detail, matches in shape.** The provenance line appears once, in section 1 (G0.5 item 6), so the network naming is not repeated in the footer |
| Phone chrome | At 390 the header holds the mark and MENU only; the application button and TEFA badge are desktop-only | At 390 the header holds the mark and the two utility links, wrapped to a second row; no menu (DD-12) | Differs by decision: the landing routes, it does not offer a site menu |
| Marks | The mark files themselves | The same two SVGs, unrecoloured and unredrawn, 27px at 390 and 32px at 1440, 0% aspect skew | Match, measured by the runner |
| Could the sites inherit this shell? | | The header, the band system (`--pad-top` / `--pad-bot` custom properties read by one rule), the button, the focus rings, the table and the footer are all token-driven and carry no content of their own. Nine block types would transfer unchanged; the story band is this page's only unique block | Yes, with the story band as the one addition |

**What this direction does for continuity that no other does:** it makes the Alpha relationship the
page's first sentence. The Anywhere homepage already calls itself "The Gifted Academy of Alpha School"
(fact 1), so a parent arriving from Instagram or from alpha.school meets the same sentence on both
sides of the door. That is the strongest continuity argument in the slate and the biggest single risk
in it, and both belong to Nari.

---

## Taste decisions the brief did not name

| Decision | What was chosen, and why |
|---|---|
| One left edge for the whole page | The h1, the provenance, the doors, the accent rule, the story, the table, the proof strip, the steps and the footer all start at the same x. The alternative — a centred reading column under a full-width first screen — was built and rejected: it put two left edges on one page and made the story look pasted in |
| The story is a ruled list, not a set of cards | No fills, no boxes, no tint behind any movement. A hairline, a numeral, a heading, prose. Cards would have made five objects out of one argument |
| The accent mark at movement III sits above the numeral, not beside the heading | It marks the hinge of the story where Georgetown answers, and reads as a change of key rather than as an emphasis on a word |
| The steps band is the page's one navy field | The conversion moment gets the only dark ground before the footer, so the page has one clear crescendo rather than an alternation of tints. `--color-surface` on `--color-bg` is a 1.10:1 step, which the runner itself records as invisible, so band identity is carried by hairlines and by the one navy field, not by the tint |
| Buttons are uppercase Inconsolata | The estate's own utility voice (K12 F41), and continuity is lens 2 here. Sentence case was the alternative and would have read quieter against the prose |
| The movement headings are sentence case | They are the story's own words, not titles |
| No pull quote | The brief forbids it and the measurement agrees: at `--text-xl` a lifted line would be within one step of the h1 and would compete with it |

---

## Self-check

### Screenshots looked at with the Read tool

| Capture | What was checked, and what was changed because of it |
|---|---|
| `qa/V16.jpg` (twice) | The first build stretched the first screen to the viewport and opened a 270px hole between the doors and the compare anchor. The `min-height` construction was removed. The second look found three different right edges (h1, doors, accent rule, story column); the accent rule now takes the reading measure so it lands on the same line as the movement rules below it |
| `qa/V14-full.jpg` (twice) | The comparison table's column headers were sitting right of their columns: `.ctable tbody` had `display: table`, which makes the body its own table box and breaks the shared column model. Changed to `table-row-group`; headers now sit over their cells |
| `qa/V2.jpg` | The Georgetown CTA wrapped to two lines inside a 327px column. Button tracking measured and reduced from 0.07em to 0.04em; it now holds one line from 360px up |
| `qa/V10.jpg` | The landscape recipe: header, h1 at two lines, provenance, two compact door blocks side by side, both door lines below and cut by the edge. No h1 step-down was needed for variant A |
| `qa/V11.jpg` | Portrait tablet: stacked doors, no wrapped button, the story beginning inside the screen |
| `qa/V17.jpg` | 1920 by 960 does not read empty: the first screen uses the full 72rem container and the story's first two movements are in view |
| `qa/V18.jpg` | 320 by 256 reflow: header wraps to two rows, h1 three lines, no horizontal scroll, nothing clipped |
| `qa/forced-colors.jpg` | Both marks keep their colours on their own retained grounds; the accent rules become `CanvasText`; buttons take `ButtonFace` / `ButtonText` with a border; every rule is visible |
| `qa/focus-cta.jpg` | The first door CTA's ring: 2px `--color-focus` at 2px offset, reading against cream at 8.20:1 |
| `qa/focus-footer-plate.jpg` | The footer marks on their plates, with the two-band ring on the navy band. The GT Anywhere plate's border was removed after this look: on a navy footer it drew a box around one mark and not the other |
| `qa/forced-colors.jpg`, re-read after the programme-wide ring correction | The rings now read at 21:1 in both palettes; the marks still keep their own colours; nothing else in the forced-colours state moved |
| Story band at 1280 and 1440 (scratch captures) | Line length measured at 82 characters and reduced to 67 to 70; the numeral was floating mid-gap above its heading and now sits 8px above it; the hanging folio was tried here and dropped |

### Copy check (script over the rendered text)

Eight story paragraphs on the page; seven identical to the source character for character; sentence 4
identical for its first 88 characters and then stopped at "was launched." with no mark. The h1's visible span and the hidden `story-open`
line are both byte-identical to source sentence 1. The hidden variant-B span is **not** byte-identical
to `copy.md`'s umbrella sentence: it carries `&nbsp;` between "from" and "anywhere." so no row can end
on the last word alone. That is one character changed, U+00A0 for U+0020, in a fixed slot, and it is
declared here and under Departures rather than described as identical. En dash in sentence 4, hyphen in sentence 8, both as found.

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M31-our-story`

```
## M31-our-story: 37 pass, 0 fail

check-mocks: OK
```

With `--all`, the 37 rules, every one PASS: R1 no forms; R2 one JSON-LD script only (1 script tag);
R20 D-039 declaration valid; R3 external hosts; R3b local assets only; R4 no placeholder text;
R5 numbers on the whitelist; R6 no "advisor" in text; R7 full names (Georgetown Campus x8, GT Anywhere
x15); R8 title, robots noindex, canonical, description, open graph, JSON-LD organization, JSON-LD no
claims; R9 lang, one h1, skip link, landmarks, alt on every image (3 images), table caption and scope,
focus-visible styled; R10 transitions within budget, no keyframe animation, reduced-motion block
covers pseudo-elements; R11 raw colors declared (**0 raw hex in styles.css**); R12 data-event
coverage; R13 image dimensions (0 without width/height), at most two eager photos (0 eager);
R17 no unscoped application link; R18 provenance line once (1 occurrence); R19 compare anchor before
the table; R16 real logos in header and footer; R14 size under 1 MB (40 KB); R15 rationale sections;
R37 pasted fold figures match the current run.

### `python3 1_spec/tools/check-claims.py`

```
## 0_plan/mockups/M31-our-story/index.html
| Figure on the page | Register row | Occurrences | Status |
|---|---|---|---|
| "designed for students in the 90th+ percentile" | CR-011 | 4 | Unverified, public |
| "$10,400/year — GT Anywhere annual tuition, fully or partially covered | CR-021 | 1 | Unverified, public |
| Four in-person intensive weekends a year in Georgetown (four named 202 | CR-032 | 3 | Unverified, public |
| Georgetown mornings: "two 50-minute blocks and one 25-minute block wit | CR-033 | 2 | Unverified, public |
| GT Anywhere mornings: "two to three hours of 100% cognitive load" (aca | CR-034 | 1 | Unverified, public |
| Guides hold weekly one-to-one check-ins with each student ("Academic A | CR-035 | 2 | Unverified, public |
  NOTE unverified rows on the page (allowed in mocks, blocked for production): ['CR-011', 'CR-021', 'CR-032', 'CR-033', 'CR-034', 'CR-035']

check-claims: OK
```

Run over every mock in `0_plan/mockups/`, the last line is the same: `check-claims: OK`.

### `node 0_plan/tools/shots.mjs 0_plan/mockups/M31-our-story` — `qa/fold.md`, verbatim and complete

```
# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/bbb8a2c4738e2b0c/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-12T00:39:27.979Z; page `/0_plan/mockups/M31-our-story/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 92 | 201 | 235 | 404 | 566 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 92 | 202 | 236 | 389 | 550 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 92 | 203 | 237 | 390 | 551 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 92 | 203 | 237 | 390 | 552 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 168 | 202 | 356 | 517 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 176 | 210 | 432 | 654 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 92 | 204 | 237 | 391 | 552 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 169 | 203 | 357 | 518 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 92 | 211 | 245 | 466 | 688 | yes | report: page height 7730 |
| V10 | 750 by 342 | fold | 318 | 56 | 142 | 176 | 285 | 285 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 167 | 201 | 403 | 605 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 169 | 203 | 406 | 609 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 193 | 227 | 474 | 474 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 203 | 238 | 462 | 462 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 207 | 241 | 467 | 467 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 210 | 245 | 471 | 471 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 210 | 245 | 471 | 471 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 92 | 201 | 252 | 422 | 583 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 193 | 227 | 474 | 474 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Focus and forced colours

Captures: focus-cta.jpg (first door CTA focused); focus-footer-plate.jpg (the footer mark on its plate); focus-plate.jpg (header lockup link focused); focus-footer.jpg (GT Anywhere footer link focused); forced-colors.jpg (forced-colors: active at V14). The critics judge these by eye.

## Console

PASS: no console errors.

## Next band evidence

What the runner saw continuing below the fold. Ink means text, a painted edge or an image: section padding and the empty leading of a line box do not count.

| Row | Cut | Element and the ink that crosses the bottom edge |
|---|---|---|
| V1 | yes | text cut by the edge, 728 to 748 |
| V2 | yes | text cut by the edge, 620 to 640 |
| V3 | yes | text cut by the edge, 646 to 666 |
| V4 | yes | text cut by the edge, 646 to 666 |
| V5 | yes | content reaches 700 of 715 and more follows below |
| V6 | yes | content reaches 826 of 839 and more follows below |
| V7 | yes | content reaches 667 of 681 and more follows below |
| V8 | yes | content reaches 739 of 739 and more follows below |
| V9 | yes | text cut by the edge, 827 to 860 |
| V10 | yes | text cut by the edge, 324 to 344 |
| V11 | yes | content reaches 1015 of 1024 and more follows below |
| V12 | yes | text cut by the edge, 1187 to 1207 |
| V13 | yes | content reaches 765 of 768 and more follows below |
| V14 | yes | text cut by the edge, 707 to 728 |
| V15 | yes | text cut by the edge, 630 to 651 |
| V16 | yes | text cut by the edge, 894 to 915 |
| V17 | yes | content reaches 943 of 960 and more follows below |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 564 to 577 |

## The GT marks under forced colours

Both GT marks are two-colour artwork, so each needs a ground that keeps its own colours: the Anywhere mark loses its second word on a forced white ground, and the GT School mark loses its navy lettering on a forced black one.

| Scheme | File | Result |
|---|---|---|
| light | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| light | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| light | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| light | `gt-school-logo-h.svg` | kept by the image itself |
| light | `gt-school-logo-h.svg` | kept by the image itself |
| light | `gt-anywhere-logo-h.svg` | kept by the image itself |
| dark | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| dark | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| dark | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| dark | `gt-school-logo-h.svg` | kept by the image itself |
| dark | `gt-school-logo-h.svg` | kept by the image itself |
| dark | `gt-anywhere-logo-h.svg` | kept by the image itself |

## Interactive targets under 44px

BUILDER-BRIEF rule 11 asks for 44px; WCAG 2.5.8 requires 24px at AA and is met by size or by spacing. Everything under 44 is listed as evidence for the critics. Only a door CTA under 44 fails the run.

| Viewport | Target | Height | Width | Kind | Result |
|---|---|---|---|---|---|
| 320 by 256 | Not sure which is right for yo | 38px | 228px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 320 by 256 | Terms | 44px | 37px | short control | under 44, above the 24px floor |
| 375 by 629 | Not sure which is right for yo | 38px | 310px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 375 by 629 | Check eligibility on the GT An | 20px | 295px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 375 by 629 | Terms | 44px | 37px | short control | under 44, above the 24px floor |
| 1440 by 900 | Not sure which is right for yo | 19px | 363px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 1440 by 900 | Check eligibility on the GT An | 21px | 331px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 1440 by 900 | Terms | 44px | 40px | short control | under 44, above the 24px floor |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 27px | 141.8px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass
```

The two interactive targets the runner lists under 44px are both inline sentence links inside prose
(the compare anchor and the TEFA eligibility link), which WCAG 2.5.8 exempts; every door CTA,
application button, utility link, footer link and connect row is at least 44px tall. Only five rows
appear at all, across three viewports.

### The greps the builder brief asks for

| Rule | Result |
|---|---|
| 1, no form | `grep -c "<form" index.html` → 0 |
| 2, no JavaScript | one `<script>`, the JSON-LD block |
| 3, no external requests | hosts in the document and stylesheet: `www.gt.school`, `anywhere.gt.school`, `apply.gt.school`, `community.gt.school`, `schema.org`. No CDN, no Google Fonts, no hotlinked image |
| 4, copy verbatim | fixed slots checked by string match; the story copy checked character for character above |
| 5, numbers | R5 passes on the whitelist; the only numerals in the story are "2026" and the "8" of K–8 and K-8 |
| 6, Guides | no "advis" in visible text |
| 7, full names | Georgetown Campus x8, GT Anywhere x15 |
| 8, both CTAs above the fold | all sixteen fold rows (V1 to V8, V10 to V17; V9 is an emptiness test, V18 reflow, V19 zoom) |
| 9, links | only the five allowed hosts and `#compare`, `#main`, `#top`, each with its `data-event` attributes |
| 10, motion | no `transition`, no `@keyframes`, no `animation` |
| 11, accessibility | `lang="en"`, skip link, landmarks, one h1, visible `:focus-visible`, alt on every image, 44px targets, a real `<table>` with `<caption>` and `scope` |
| 12, head | title, description, `noindex, nofollow`, canonical, Open Graph, JSON-LD with two `subOrganization` entries and no claim |
| 13, images | three SVG marks, all with `width` and `height`; page 40 KB |
| 14, tokens | zero raw hex in `styles.css`; every non-token value listed under Departures |
| 15, N campuses | doors are a `<ul role="list">`; the cost of a third entry is stated under DD-21 |
| 16, brand continuity | both real logo SVGs, unrecoloured; colours only from `tokens-v2.css`; type only from the three site faces |

### Console

Zero console errors on load at every one of the nineteen rows (runner, "Console: PASS").

---

## What the critics should push on

1. **The copy question, which is the whole mock.** Is a school's origin story the right first screen
   for an umbrella page whose job is to route a parent to one of two schools in ten seconds? The fold
   evidence says the routing survives (both CTAs above the fold at every row, the doors on one line
   from 940px). The reading evidence is the open question.
2. **The withheld clause.** The sentence now stops at "was launched." and nothing marks the stop,
   which matches how the page already withholds accreditation and the outcome figure. The open
   question is whether a page that quotes a school's own story should ever silently shorten one of
   its sentences, or whether sentence 4 should come off the page entirely until CR-038 is resolved.
3. **The headline.** Variant A costs 97 to 126px of fold and answers PQ-14 in the first line; variant B
   keeps the decided copy and fails four fold rows in this composition. Nari picks.
4. **The empty right half of the story band at 1440 and above.** A 55ch reading column under a
   full-width first screen leaves the right half of the story bands blank. That is the price of one
   column and a measured line length; the alternative is a wider measure and 82 characters a line.
