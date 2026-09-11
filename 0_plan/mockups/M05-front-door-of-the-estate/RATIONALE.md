# M05 Front Door of the Estate: rationale

| Field | Value |
|---|---|
| Mock | M05 "Front Door of the Estate", `0_plan/mockups/M05-front-door-of-the-estate/` (`index.html`, `styles.css`, this file, `qa/`) |
| Brief | `0_plan/kb/briefs/M05.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1 (fold method with computed h1 lines, the compact door rule, the V10 landscape recipe, K3's two-colour ring); `0_plan/17-design-studio-runbook.md` sections 4, 6 and 7; `0_plan/mockups/shared/BUILDER-BRIEF.md` 16 rules |
| Lens order | L2 continuity, L1 objective, L3 mission, L4 exclusivity |
| Evolves | `0_plan/mockups/M5-one-school-two-campuses/`, read first, then rebuilt from zero to the current contract. The campus switcher is **gone** from the landing (DD-41): the landing carries the two doors, the school-site shell carries the switcher as navigation. What survives from the sketch is its thesis (one token set, one header, one footer, the schedule visual) and its markup discipline (`nav > ul > li > a`) |
| Built | 2026-09-11, design engineer (studio fork, Opus 5). The runner `node 0_plan/tools/shots.mjs 0_plan/mockups/M05-front-door-of-the-estate` measured all nineteen rows on each pass and wrote `qa/V1.jpg` to `qa/V19.jpg`, `qa/V2-full.jpg`, `qa/V14-full.jpg`, `qa/V2-rootx2.jpg`, the four focus captures, `qa/forced-colors.jpg` and `qa/fold.md`. `qa/M05-measure.mjs` (same Playwright, my own folder) measured the h1 at both candidate weights and both tracking values, the header row's arithmetic, every SVG label against its band and the elements wider than the viewport, writing `qa/measure.md`. Three further captures were taken for forced colours below the first screen (`qa/forced-colors-1440.jpg`, `qa/forced-colors-peers.jpg`, `qa/forced-colors-footer.jpg`) and one for the peers band (`qa/peers-1440.jpg`). No browser tool was used and no GT hostname was opened |
| State | No JavaScript (D-039 undecided): one JSON-LD block, no `data-d039` declaration, nothing to enable. No photograph (DD-42 default state, RF-25). Copy: `copy.md` v1.1 sections 0 to 8 verbatim; from section 9, "Two schools, one GT School", the Locations list status strings and city names, and the skip-link label |

## Direction

The thesis is that the landing is **page one of the estate's shell, not a new site in front of it**. Everything a school site would inherit is on this page and is the same object: a 56px header with the mark left, two utility links right in the estate's own uppercase Inconsolata, and a hairline ruling it off the cream; the estate's ground, body face and body colour; the estate's button silhouette; a footer built on gt.school's own three-column grid with its Locations list and both marks on their proper panels. The argument is made by **showing** the shared chrome rather than by claiming it, which is why every one of the five measured deltas in `shared/CONTINUITY.md` gets a decision below rather than a silence.

The first screen serves L2 by being recognisable before it is read: at 1440 a parent who has just come from anywhere.gt.school sees the same cream, the same Literata Light headline with the same tight tracking and the same italic turn, and the same uppercase mono chrome, then two doors of equal weight and a day diagram, then the compare anchor — all above 876 (`qa/V16.jpg`). L1 follows immediately: two doors, two labels, two names, two CTAs, side by side at 768 and above and stacked on the phone, both above the fold at every one of the sixteen fold rows. L3 and L4 are carried by the deck's own facts in the order the deck puts them.

## h1

The **umbrella sentence** is the one `h1`, as in every mock built so far. It is the sentence that decodes "GT", names the selectivity and names the two ways to attend, so it is the page's heading in the ordinary sense as well as the routing device; `1_spec/03` section 5 leaves the choice per mock and this direction has no competing claim for the slot (the lockup is an image of the mark, not a wordmark in type).

It is set in Literata **300** with **-0.027em** tracking and an italic 400 span from the comma onwards. That is the estate's display voice reproduced by the estate's own mechanism, and it is argued with measurements in the next section rather than asserted. Measured line counts, from `qa/measure.md`: **6 lines at V2 (375), 5 at V5 (414), 4 at V13 (1024), 4 at V14 (1280), 4 at V16 (1440)**, and 3 at V10 where the landscape recipe steps the size down one token.

## The continuity argument

This is the deliverable for this direction. `shared/CONTINUITY.md` is the first rendered, measured capture of the destination's chrome, taken from this repository's own mirror of anywhere.gt.school on `127.0.0.1`; the captures are in `0_plan/kb/exemplars/estate/` and the raw values in `measurements.json`. I viewed all five captures before designing. Two limits are stated before anything else, because the argument is worth only as much as its evidence:

| Limit | Consequence for this mock |
|---|---|
| **`gt.school` has no mirror in this repository and is unmeasured** | Every continuity claim below is continuity with **anywhere.gt.school**. The Georgetown handoff is unverified and this rationale does not claim it. A critic should score the Anywhere handoff on the rendered evidence and record the Georgetown one as unverified |
| The estate's cream is a **raster texture**, not a flat fill | The mock reproduces the ground colour exactly and not the grain. See "What I could not reproduce" |

### The five measured deltas, each decided

`shared/CONTINUITY.md` lists five properties where the programme and the estate differ. Three are matched here, two are held, and each is a decision with a reason. All three levers are exposed as variables at the top of `styles.css` (`--h1-weight`, `--h1-track`, `--btn-size`), so a reviewer can flip one value and see the other side of the argument.

| Property | The estate, measured | The contract | M05 | The decision, and why |
|---|---|---|---|---|
| Heading weight | Literata **300** at 58.5px and at 36px | 400 | **300, matched** | The measured cost of matching is **zero**. Literata Light and Regular are metric-compatible on this sentence: at weight 300 and at weight 400 the h1 renders 6 lines / 188px at V2, 5 / 161 at V5, 4 / 199 at V14 and 4 / 212 at V16 — identical to the pixel (`qa/measure.md`, both weight tables). So the contract's 400 buys the fold nothing, and 300 is the exact display voice a parent has just left. DD-38 option (b) asks for precisely this: test the candidates on the fixed copy at the binding rows and adopt what passes. M03 tested the same pair and shipped 400 on a navy first screen, which is a different ground; on cream, at these sizes, Light holds |
| Heading tracking | **-1.6px**, applied as a constant at 58.5px and at 36px | normal | **-0.027em, matched proportionally** | -1.6px is -0.027em at the estate's own 58.5px design size and -0.044em at its 36px phone size, so the live value tightens the phone nearly twice as hard as the desktop. Taking the em value from the size the design was made at keeps the tight display colour at every step of the clamp without squeezing a 132-character sentence at 27px. Measured: it changes nothing at V2, V13, V14 and V16 and **saves a whole line at V5** (5 lines / 161px against 6 / 193px with `normal`), which is the row where the phone budget is tightest after V2 |
| The headline's italic half | weight **400 italic in accent orange**, inside a 300 upright h1 | not specified | **weight 400 italic, `--color-text`** | Two of the estate's three properties are taken by the estate's own mechanism: `shared/fonts.css` ships Literata italic at 400 only, so a span inside a 300-weight h1 lands at 400 exactly as the live page's `.span-gold-italic` does. The colour is **refused**: K12 F88 measures that orange on cream at **2.38:1**, which fails AA and fails 3:1, and copying it would put the page's single most important sentence below the contrast floor. The turn falls at the sentence's own hinge — where it stops naming the school and starts naming the two ways in — so the borrowed device does the page's own work |
| Button weight | Inconsolata **500** | 600 | **600, contract held** | `shared/fonts.css` ships Inconsolata **400 and 600 only**. A 500-weight button would be a synthesized weight or a face this programme does not have; declaring it would be a claim about a file that does not exist. Held deliberately and named, as `shared/CONTINUITY.md`'s own rider requires |
| Button size | **16px** | `--text-btn`, 17 to 18px | **16px, matched** (`--btn-size: 1rem`) | The two button deltas pull in opposite directions: the estate is lighter and smaller, the contract is heavier and larger. Matching the size while holding the weight lands the rendered stroke mass much nearer the estate's than either change alone, and it is the half of the pair that costs nothing — the 44px target, the uppercase setting and the 0.06em tracking are unchanged, and the longest label ("EXPLORE THE GEORGETOWN CAMPUS") fits its 6-column door at every row from 768 up and wraps cleanly below it |
| Button fill | navy on the first screen, accent orange in the footer and the desktop header | surface-dependent | **surface-dependent: navy fill with `--color-on-navy` text on light surfaces** | **DD-46 option (a), Complete.** Not an accident and not a compromise: K12 F87 measures the estate's near-white label on orange at **2.50:1**, so copying the orange button faithfully would import a contrast failure onto the one control the whole page exists to offer; and the estate itself already uses navy for the same action on its first screen (`rgb(0, 42, 58)` is `--color-navy` exactly), so navy is inside the estate's action vocabulary rather than a departure from it |

### What the deltas table does not list, and this page also matches

Continuity is not only the five rows a defect table happens to name. These are matched too, each against a capture or a K12 finding:

| Matched | Evidence | Where in this mock |
|---|---|---|
| Page ground `rgb(252, 244, 239)`, body colour `rgb(0, 17, 23)`, body face Inter Tight | `measurements.json`, both widths | `--color-bg`, `--color-text`, `--font-sans` on `body` |
| The header is a shallow row ruled off the ground with a hairline | `anywhere-header-1440.jpg` | `.shell-header { border-bottom: 1px solid var(--color-border) }` over a 3.5rem row |
| The header's utility voice is **uppercase Inconsolata**, not sentence-case sans | `anywhere-header-1440.jpg` (MENU, BEGIN APPLICATION) | `.utility a`: `--font-mono`, uppercase, `--text-xs` on phones and `--text-sm` with 0.06em tracking from 768. The contract's default label role is Inter Tight 500 uppercase and explicitly allows Inconsolata where a brief says so; this brief's whole thesis says so |
| The button silhouette is **notched, not a pill**: `border-radius: 8px 8px 0 0` | `measurements.json`, both application actions | `.btn { border-radius: var(--radius-md) var(--radius-md) 0 0 }` — `--radius-md` is 8px, so the estate's measured value is reached through a token and no raw length is introduced |
| The footer sets navigation in uppercase Inconsolata and puts contact values in **bordered pills** | `anywhere-footer-1440.jpg` | `.footer-links a` and `.pill` |
| gt.school's footer is a **three-column grid** whose third block is a **Locations list**, with an open/soon status convention | K12 F64, F65, G27 | `.footer-grid` at 900 and above; `.locations` with `.chip` and `.chip--soon` |

### What I could not reproduce, named rather than hidden

| Gap | Why | What would close it |
|---|---|---|
| **The grain.** The estate's cream is a raster texture with fine wave linework; this page ships flat cream | The texture files exist in this repository's mirror (`assets/…/6982b63a9489a9ba63a76153_static noise 2.webp`, `assets/…/6981cea27129cdf34908079c_Hero BG.svg`), but BUILDER-BRIEF rule 13 limits imagery to `../shared/img/`, which holds no texture, and a CSS-generated grain at token colours moirés at screenshot scale. I judged a wrong grain worse than none | A texture added to `shared/img/` with Nari's go, or rule 13 widened to the mirror for non-photographic surface assets |
| **The hero cut-out.** The estate's first screen carries a composited photograph of an identifiable child | DD-42 default state and RF-25: no photograph on any mock until written permission. This is a decision, not a shortfall | The photographed state below |
| **gt.school's own chrome** | Unmeasured; there is no mirror of it in this repository (`shared/CONTINUITY.md`) | A mirror of gt.school, captured the same way |
| **The estate's cream footer** | The brief specifies a navy footer, and the mock follows it. The reasons it is defensible: navy is already an estate surface (its first-screen enrolment card is `--color-navy` exactly); the GT Anywhere mark has white lettering and needs a navy panel under it (`copy.md` section 8), which a navy footer gives without a panel inside a panel; and the status chip needs a light surface to sit on so the status is never gold text (RF-37). It is still the largest single visual delta on the page and Nari should see both | A cream-footer variant, which is a one-line change (`.shell-footer` loses `.on-navy`) plus a navy panel for the GT Anywhere mark |

## Shell diff against `1_spec/04` section 3

The brief's acceptance row asks for this diff. The header and footer here use shared tokens only; the geometry is what a school site inherits, and what a school site **adds** is navigation, never a different shell.

| Shell part | `1_spec/04` section 3 | M05 (the landing) | The school site, per the same spec | Diff |
|---|---|---|---|---|
| Header | "Header (landing): Lockup, Current families, admissions contact. States default; mobile. `header`, `nav`. Motion none. DD-12, DD-13" | 3.5rem row; mark left at 27px under 768 and 32px from 768 (K12 V2); two utility links right, 44px targets, uppercase Inconsolata; hairline base; no menu; no phone number | "Header (school site): Lockup with school name, five menu items, Begin application CTA with `school=`, Current families, campus switcher" | **Same** row height, container, padding, mark sizes, utility type and hairline. **Added** on a school site: the school name beside the mark, the five menu items, the application CTA and the campus switcher (DD-41 keeps the switcher out of the landing). The two headers share geometry, not navigation, which is resolution R11 |
| Footer | "Footer: contact, sibling and umbrella links, legal, accreditation. `footer`, `nav`. DD-17, MD-11" | Three columns from 900: facts block plus the contact pill; the link list; the Locations list. A full-width marks row closes it, both marks at 32px from 768 and 27px below (K12 V2), GT School on a light plate and GT Anywhere on the navy ground | Same partial | **Same** in every part except one: **no accreditation block**, because G0.5 decision 3 removes it from every surface. The Locations list is an addition the spec does not yet name and K12 G27 proposes (`1_spec/04` section 3 is short three components the estate already has; K12's own "Where this lands" row says so) |
| Facts block | "Facts block: identical entity facts, definition list, SE-08" | `copy.md` section 8's facts block verbatim, in the footer's first column, marked `data-component="Facts block"` | Same | **Same text, different element**: a paragraph rather than a definition list, because the slot is one continuous sentence run, not term-and-definition pairs. Named here as the one structural difference |

Every shell component on the page carries a `data-component` attribute naming its row in `1_spec/04` section 3 (`Header (landing)`, `Door card`, `Door list`, `Comparison table`, `Schedule visual`, `TEFA module`, `Proof strip`, `Facts block`, `Footer`), so the inheritance claim can be checked by reading the markup rather than by trusting this table.

## Brief compliance

| Brief section | What was built | Status |
|---|---|---|
| Mock id and name, lens order | M05, folder `M05-front-door-of-the-estate`; L2, L1, L3, L4 | Met |
| Evolves M5 with the switcher removed (DD-41) | The sketch was read, then the page was rebuilt to the contract. No switcher anywhere on the landing; the doors are the choice component and the school-site shell takes the switcher | Met |
| Thesis | The shell is the argument: one header, one footer, one token set, one button silhouette, one type voice, all demonstrated against measured captures in "The continuity argument" above | Met |
| Exemplars: UAL's "6 Colleges, 1 University" | The "Two schools, one GT School" band names both schools as peers under one masterbrand, each with its own real mark, on plates of equal geometry; the list is a `<ul>` that takes three to five entries by changing one `repeat()` (DD-21, N campuses) | Met |
| Exemplars: Tate's gallery list, MoMA's equal address blocks | The footer's Locations list is gt.school's own component reused as a pattern (DD-45, not the implementation: no dead `href="#"`, no `80vh`, no accreditation copy beside it); the marks row gives the two schools equal blocks, equal mark height and equal target size (C24) | Met |
| Avoided: Vanguard's hidden audience router | Nothing is behind a menu at 390. Both doors, both labels, both names and both CTAs are on the first screen at every phone row | Met |
| Composition: header 56, logo left, two utility links right, no menu | 3.5rem row, measured 57px with its hairline at every row from 375 up; wraps to two rows only at 360 and 320, where a 27px mark and the two labels cannot share one row (Departures) | Met |
| Composition: h1 across 8 columns, provenance, two door cards 6 and 6 | `.first-inner` is a 12-column grid from 768; the h1 and the provenance line span 8, the door list spans 12 as two equal 6-column cards | Met |
| Composition: the diagram as a two-row inline SVG band spanning 12 columns at V14 and V16, below 768 the second screen | Inline SVG, two rows, four bands, labels as SVG `<text>` bound to `--text-sm` and `--font-sans`; spans all 12 columns; below 768 the same two rows render as HTML blocks so the deck's sentences wrap instead of clipping (one form displayed at a time) | Met, with the card form named in Departures |
| Composition: the diagram's phrases are the deck's cells | The four phrases are exactly the brief's, which are the deck's "The day" and "In-person time" cells. Georgetown's morning phrase drops the deck cell's trailing clause "in TimeBack blocks, with structured breaks" because SVG `<text>` does not wrap; the full sentence is on the same page in the comparison table's own "The day" row, so nothing is withheld. M07 shipped the same shortened phrase | Met, named in Departures |
| Composition: then the band, the comparison, proof, steps, secondary CTAs, the shell footer with the Locations list; status as a navy-text chip | In that order. The status chip is `--color-text` on `--color-surface` (16.10), never gold text (RF-37) | Met |
| Fold estimates | Designed to the table below and measured by the runner. The brief's four sums are corrected there: they use an h1 of 159px at V14 where the contract's own clamp and leading give 199, and a diagram of 120px where four labelled bands, two row names and a card measure 202 | Met, corrected and measured |
| Typography | Contract roles: h1 Literata `--text-3xl`; door names Literata `--text-xl`; door lines, table cells, facts and connect list at `--leading-prose` 1.5; labels and eyebrows Inter Tight 500 uppercase; buttons Inconsolata; diagram labels `--text-sm` Inter Tight as SVG `<text>`. Two roles depart with reasons in "The continuity argument": the h1's weight and tracking, and the button's size. The utility pair takes the estate's Inconsolata, which the contract's label row allows a brief to keep | Met, departures named |
| Colour and surface | `--color-bg` page; cards as M01 (ruled, not filled); diagram band `--color-surface`; accent once per screen; footer navy with `--color-on-navy` and the GT Anywhere panel; chip `--color-text` on `--color-surface`; focus per the contract with the two-colour ring on the footer panel link | Met, except the phone rows' accent assignment, resolved in Departures |
| Imagery | Default state: the band carries the two marks only. Photographed state designed, not shipped (Assets) | Met (default state) |
| Motion | Still. Nothing animates. The diagram does not draw. V1, V3 and V7 instant; V10 native anchor scroll inside `prefers-reduced-motion: no-preference` | Met |
| Copy | Sections 0 to 8 verbatim; from section 9 only "Two schools, one GT School", the Locations status strings and city names, and the skip-link label. The Locations list is flagged | Met |
| Conversion | Doors on the first screen; the compare anchor under the diagram at V16 (measured 799 to 860, above the 876 limit) and under the doors on the phone rows; table; proof; steps; secondary CTAs; footer Locations list as the N-campus proof | Met at V16; **at V14 the compare anchor sits below the fold** (783 to 844 against a 720 viewport) because the corrected h1 and diagram heights do not leave room. See the fold table |
| Acceptance: header and footer use only shared tokens and match `1_spec/04`'s geometry, diff in the rationale | Zero raw hex in `styles.css` (checker R11 reports 0); the diff is above | Met |
| Acceptance: status chip at or above 4.5 | `--color-text` on `--color-surface` is **16.10**; the chip sits on the navy footer, where its own surface is 12.63 against the ground; "Coming soon" is `--color-text-muted-on-dark` at 7.81 with a matching 1px border | Met |
| Acceptance: rationale names DD-38, DD-39, DD-41, DD-45 | All four are named here, with DD-46, DD-42, DD-43, DD-44, DD-21 and MN-16 | Met |

## Fold: designed to, then measured

Method for the estimates: the contract's h1 heights recomputed from the clamp, the leading and the **measured** line counts (`qa/measure.md`), not the brief's figures; space tokens for every gap; door blocks from the CSS. Every sum below is the bottom of the **second** door CTA, which is the fold-binding element. Measured column: `qa/fold.md`, the final run.

Door block heights, from the CSS and confirmed by measurement: phone (compact) = rule 1 + pad 8 + label 18 + 4 + name 25 + 8 + CTA 44 = **106 to 109**; laptop = rule 1 + pad 8 + label 18 + 4 + name 31 + 8 + line 53 + 16 + CTA 44 = **183 to 185**; landscape = 1 + 8 + 18 + 2 + name 28 + 4 + CTA 44 = **105**.

| Row | Viewport, limit | Layout | Designed-to sum | Measured | Result |
|---|---|---|---|---|---|
| V2 | 375 by 629, **605** | Compact doors, both lines after the second CTA | header 57 + pad 24 + h1 188 (6 lines) + 8 + provenance 22 + 24 + block 107 + 16 + block 107 = **553** | **555** | Pass, 50 to spare. Brief: 550. The two run-in lines then run 571 to 747 and the second is cut by the edge (`qa/V2.jpg`) |
| V5 | 414 by 715, **691** | Compact doors (a departure from the contract's V5 form, measured below) | 57 + 24 + h1 161 (5 lines) + 8 + 22 + 24 + 109 + 16 + 109 = **530** | **528** | Pass, 163 to spare. Brief: 663, which assumes the contract's V5 form with the lines above the CTAs. Measured, that form does not fit: at 414 the door line wraps to **three** lines of 24px, not the contract's two of 27, so the block is 194 and the sum is 723 of 691 — over by 32. The compact rule is therefore required at V5, not optional |
| V10 | 750 by 342, **318** | Contract landscape recipe: `--space-3` padding, h1 one token down to `--text-2xl`, doors side by side | 57 + 8 + h1 95 (3 lines at 27.61px) + 4 + 22 + 8 + block 105 = **299** | **299** | Pass, 19 to spare. The run-in lines are cut at the edge (`qa/V10.jpg`) |
| V14 | 1280 by 720, **696** | Doors side by side with their lines inline; the diagram follows | 57 + pad 32 + h1 199 (4 lines) + 16 + 22 + 24 + block 183 = **533** | **533** | Pass, 163 to spare. Brief: 637, using an h1 of 159px; the contract's own clamp and leading give 199 for the same four lines. The diagram runs 557 to 759 and is cut by the edge — the runner records "svg cut by the edge, 678 to 742" — and the compare anchor (783 to 844) is below the fold at this row |
| V16 | 1440 by 900, **876** | As V14 | 57 + 32 + h1 212 (4 lines) + 16 + 22 + 24 + block 185 = **548** | **548** | Pass, 328 to spare. Brief: 701. **The whole first screen the brief describes fits**: diagram 572 to 775, compare anchor 799 to 860, and the next band's rule cut at 893 of 900 |

Every other row, measured (second CTA bottom against the limit): V1 601 of 716 (the header wraps to two rows at 360); V3 557 of 640; V4 557 of 635; V6 528 of 815; V7 527 of 657; V8 530 of 715; V9 557 of 820 (emptiness row, page height 7540, the first screen full and the compare anchor in view, `qa/V9.jpg`); V11 549 of 1000; V12 557 of 1170; V13 535 of 744; V15 541 of 624; V17 548 of 936; V18 reflow, no horizontal scroll at 320; V19 zoom, scroll width 1024, nothing clipped. **Sixteen fold rows, sixteen passes, and every one of them ends on real ink** (`qa/fold.md`, "Next band evidence").

## Decisions applied

| Id | How it is applied |
|---|---|
| DD-01, DD-19 | The three site faces and the layer-1 swatches only; layer-2 roles listed below; every non-token value in Departures |
| DD-04 | Cue set per door: the label ("In person", "Online") plus a `currentColor` line glyph, the name, the line, the CTA. No photograph in the default state |
| DD-06, REQ-013 | Table rows in the deck's order: the three shared rows first, then the six that differ |
| DD-07, G0.5 items 2 and 3 | No outcome figure, no accreditation statement, no Cognia mark. The proof strip is exactly the deck's four facts |
| DD-08, DD-31, DD-42, RF-25, AD-11 | No photograph. The photographed state is designed in Assets and waits on Nari's written permission |
| DD-10, MD-25 | Selectivity is the bar, stated in the deck's own cells (Admissions row, proof strip, steps line). No wealth cue, no countdown, no price on the first screen |
| DD-11, DD-27 | The header lockup is the real `gt-school-logo-h.svg`, never a text wordmark; full school names everywhere (11 and 17 occurrences in visible text) |
| DD-12, DD-13 | Header: lockup, "Current families", "Contact admissions", no menu, no phone number; the number is in the footer only |
| DD-14, MD-23 | Designed at 375 first; doors stacked Georgetown then GT Anywhere; the phone layout is the DOM order; no sticky CTA |
| DD-21 | The doors are a `<ul>`, the peers band is a `<ul>`, the Locations list is a `<ul>`; each takes three to five entries by changing one `repeat()` or adding an `<li>`. The Locations list **demonstrates** N campuses rather than assuming them: four locations render today |
| DD-25, REQ-070 | Every application link carries `?school=`; links go only to gt.school, anywhere.gt.school, apply.gt.school, community.gt.school and `#compare` |
| DD-26 | The two doors share markup, geometry, rule weight, type and target size; the two peer plates share geometry, mark height and target size, and the light plate is outlined as firmly as the navy one is filled so neither school reads as the ranked one |
| DD-29 | Every screen carries a fact: the doors and the day diagram on the first, the comparison on the second, the proof strip, the steps, the footer facts block |
| DD-34, REQ-047 | The schedule visual is this direction's own component: two rows, four bands, the deck's cells. Its text equivalent is the comparison table's "The day" and "In-person time" rows on the same page, which is why no visually hidden duplicate table is added |
| DD-38 (b), R5, RF-55, RF-58 | Fluid clamps `--text-xs` to `--text-3xl`; `--leading-prose` 1.5 on every multi-line string; `--measure-prose` 65ch on prose blocks; `--leading-body` 1.25 on single-line labels and buttons. The weight and tracking candidates were measured on the fixed copy at the binding rows, which is what option (b) asks for |
| DD-39 (a), RF-07, K3 5c to 5f | `--color-on-navy` for text on navy; `--color-text-muted-on-dark` for the footer facts and the "Coming soon" chip; `--color-accent-text` for the step numerals; `--color-border-strong` for the proof rules; the accent only as a shape; the two-colour ring over navy |
| DD-41 | No campus switcher on the landing. The doors are the choice component; the switcher belongs to the school-site shell as navigation. Recorded in the shell diff above |
| DD-42, RF-25 | Default state only. The photographed state is specified in Assets and not shipped |
| DD-43 | The three shared rows repeat their value in both columns; below 768 each cell is labelled with its school name |
| DD-44, K10 | No `vh` or `svh` anywhere; the first screen is content-sized so the next band is visibly cut at every row. Height queries at 400 (with width 600) for the landscape recipe only |
| DD-45, K12 F64, F65, G27 | gt.school's Locations list reused as a **pattern, not an implementation**: no `href="#"` (the rows are not links at all, because no per-location destination exists), no `80vh`, no accreditation copy beside it, and the gold-for-open status recoloured to text on a surface |
| DD-46 | Option (a), Complete: the contract's surface-dependent fill. Argued against the measured estate in "The continuity argument" |
| MD-02, R14 | Secondary CTAs: FAQ, "Talk to admissions", "Ask about a tour of the Georgetown campus", "Ask about a virtual info session", each to the destination the deck lists |
| MD-17, DD-40, G0.5 item 6 | The provenance line appears exactly once, as a sentence and not a lockup, at `--text-sm`, immediately after the h1 in reading order and in view at every fold row (measured 270 to 384 across the matrix). Not repeated in the footer |
| MN-16 (a), RF-53, R8 | No motion at all; the reduced-motion block forces every duration to `--duration-none` on elements and pseudo-elements; every state is visible at rest |
| D-039 | No script beyond the JSON-LD block, no input, no `data-d039` declaration. Nothing on this page needs one: the diagram is complete at rest and the comparison is a real table |
| REQ-022, DEL-018 | Only figures with register rows, in the deck's words. `check-claims.py` clean; the six rows the page relies on (CR-011, CR-021, CR-032, CR-033, CR-034, CR-035) are all **"Unverified, public"**, which is recorded here and never on the page |
| SE-13 | `noindex, nofollow`; canonical `https://gt.school/` |
| K12 V2 | Every horizontal mark measured by the runner: 27px at 390 and 32px at 1440, aspect skew 0% on all five instances |

## Layer-2 tokens used (proposed; each named with its row per `TOKENS-V2.md`)

| Token | Where | Row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl` | Every type size on the page; `--text-2xl` also as the V10 h1 size | DD-38 (b), R5 |
| `--text-btn` | **Not used.** The buttons take `--btn-size: 1rem`, the estate's measured 16px, argued above | DD-38 (b) — the departure is named in Departures |
| `--leading-prose` 1.5, `--measure-prose` 65ch | Door lines, table cells, facts, steps, sources, connect list, footer facts, TEFA body | DD-38 (b), RF-55, RF-58 |
| `--color-on-navy` | Text on the navy footer and the navy peer plate; the outer band of the two-colour focus ring | DD-39 (a), RF-07 |
| `--color-text-muted-on-dark` (`#a3bfcb`, a new tint) | Footer facts, the contact pill's border, the "Coming soon" chip and its border, the footer marks rule | DD-39 (a), RF-07; DD-19 departure |
| `--color-accent-text` (`#a5501a`, a new tint) | The four step numerals (CSS counters), 5.14 on `--color-bg` | DD-39 (a), RF-07; DD-19 departure |
| `--color-border-strong` (`#857f7b`, a new tint) | The proof strip's rules, 3.31 on `--color-surface` | DD-39 (a), RF-07; DD-19 departure |
| `--duration-none` | The reduced-motion block | MN-16 (a), RF-53, R8 |
| Not used | `--color-on-accent` (no accent fill carries text), `--color-focus-on-dark` (the two-colour ring replaces the single on-dark ring), `--ease-standard`, `--ease-out`, `--ease-in` (nothing animates) | |

## Motion spec

| What animates | Trigger | Duration token | Easing token | Reduced motion |
|---|---|---|---|---|
| Nothing | — | — | — | — |
| V1 door state, V3 focus, V7 disclosure | hover, focus | instant (0 ms; no `transition` property exists in the stylesheet) | — | Unchanged; every state is visible at rest |
| V8 schedule draw | **Absent by the brief.** "Still. The diagram does not draw." The four bands and the four marks render at their final state on first paint | — | — | Unchanged |
| V6 section reveal | Absent. It needs the D-039 script, which is undecided, and this direction's argument is that the shell is already whole | — | — | Unchanged |
| V10 anchor scroll | The compare anchor | native `scroll-behavior: smooth`, inside `@media (prefers-reduced-motion: no-preference)` only | — | `scroll-behavior: auto` |

The runner's reduced-motion pass reports **every computed transition and animation duration at 0s** on every element and pseudo-element at V14.

## Assets

| Asset | Where | Alt text | Consent | Fallback |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` (139 by 32) | Header lockup; the light peer plate; the footer's light plate | "GT School" | The school's own mark, no consent question | — |
| `../shared/img/gt-anywhere-logo-h.svg` (252 by 48) | The navy peer plate; the footer, on the navy ground | "GT Anywhere" | The school's own mark | — |
| Two inline door glyphs (a door, a screen), `currentColor`, `aria-hidden` | Door labels | Decorative; the label word beside each carries the cue | — | The label alone |
| **No photograph** | — | — | Every file in `ASSETS.md` shows identifiable children (re-checked 2026-09-11); AD-11 covers child imagery whether or not a face is visible; no file is usable before written permission (RF-25) | The page **is** the fallback: it is complete and passes every row without a photograph |
| Photographed state, designed and not shipped | A 3:2 thumbnail per school inside the "Two schools, one GT School" band, beside each mark: `georgetown-presenting.webp` at `object-position: 50% 45%`, at most 720 CSS px at DPR 2 (CONTRACT.md section 5), caption "Students gather for a class presentation."; and a Nari-supplied GT Anywhere photograph whose caption is written into `copy.md` section 9 before use. Both or neither (DD-42 parity) | From `copy.md` section 9 | Blocked on Nari's written permission naming website and paid-advertising use | The default state above |

## Colour and contrast

WCAG 2.x ratios computed from the token values, 2026-09-11. Every text pairing on the page:

| Pairing | Ratio | Where |
|---|---|---|
| `--color-text` on `--color-bg` | **17.69** | Body, h1, door names, table cells, the compare anchor, the utility links |
| `--color-text` on `--color-surface` | **16.10** | The diagram's heading ground, the proof strip, the "Now enrolling" chip, the light peer plate |
| `--color-text` on `--color-anywhere-tint` | **16.30** | The GT Anywhere bands' labels, the TEFA module |
| `--color-text-muted` on `--color-bg` | **6.25** | Provenance line, door labels, eyebrows, the run-in door lines, the sources line |
| `--color-text-muted` on `--color-surface` | **5.69** | The diagram's "A day at GT" label |
| `--color-on-navy` on `--color-navy` | **14.58** | The footer, the navy peer plate, every button label on its navy fill |
| `--color-text-muted-on-dark` on `--color-navy` | **7.81** | Footer facts, the "Coming soon" chip |
| `--color-accent-text` on `--color-bg` | **5.14** | The four step numerals |
| `--color-focus` on `--color-bg` | **8.20** | The focus ring on light surfaces (3:1 required) |
| `--color-border-strong` on `--color-surface` | **3.31** | The proof strip's rules (3:1 for a meaningful boundary) |
| `--color-navy` on `--color-bg` | **13.88** | The diagram's opening ticks, the card bars' left edges |
| `--color-accent` on `--color-anywhere-tint` | **2.19** | **The four weekend marks, and the only sub-3:1 figure on the page.** They are `aria-hidden` decoration whose fact — "Four intensive weekends a year in Georgetown" — is stated in the sentence immediately beside them and again in the comparison table, so they are a redundant cue and WCAG 1.4.11 does not bind them. They are never the sole carrier of anything. Under forced colours each mark takes a `CanvasText` outline. K3 section 5f's "one accent use per screen" and RF-37's "gold is a surface or shape colour" are both honoured: this is the page's one accent, and it is a shape |

Focus: `--color-focus` at 2px with a 2px offset on light surfaces; over navy and on anything straddling it (the footer's GT School plate, the navy peer plate, every navy link) the contract's two-colour ring, a 2px `--color-navy` inner band and a 2px `--color-on-navy` outer band, 14.58 between them so one band clears 3:1 on any ground (K3 F10). Captured in `qa/focus-cta.jpg`, `qa/focus-plate.jpg`, `qa/focus-footer.jpg` and `qa/focus-footer-plate.jpg` and reviewed by eye.

**Forced colours**, checked by eye at V14 and again at 1440 by 900 with the whole diagram in frame (`qa/forced-colors.jpg`, `qa/forced-colors-1440.jpg`, `qa/forced-colors-peers.jpg`, `qa/forced-colors-footer.jpg`). M07's lesson is applied at the start rather than after a critic: **one outline per band, never a stroke per segment**, and the forced-colours block is the **last** block in the stylesheet so it outranks the token rules by source order instead of losing to them at equal weight. Measured under `forced-colors: active`: each of the four bands takes a single `CanvasText` outline on a `Canvas` fill, no rule crosses a label, the opening ticks and the four marks render as `CanvasText` shapes, the buttons take a `CanvasText` border so they still read as controls, the header's hairline flips, and the diagram card, the TEFA module, the chips and the pill are all outlined. One defect was found this way and fixed: **the GT Anywhere mark is drawn with white lettering, so on a forced `Canvas` ground it disappeared entirely** in the peers band and the footer. Its two panels now keep their own colours (`forced-color-adjust: none`, the narrow sanctioned use for a brand asset whose colour is load-bearing) and carry the two-colour focus ring; everything else on the page still flips.

## Departures

| Departure | Reason |
|---|---|
| **h1 weight 300 and tracking -0.027em** instead of the contract's 400 and normal | The continuity argument, rows 1 and 2. Measured: the weight costs nothing (identical line counts and box heights at both values) and the tracking saves a line at V5 |
| **Buttons at `--btn-size: 1rem`** instead of `--text-btn` | The continuity argument, row 5. 16px is the estate's measured button size; `--text-btn` is 17 to 18px. The value is a declared local variable, so every size on the page still resolves through a `var()` |
| **The utility links are Inconsolata**, not the contract's default Inter Tight label role | The contract's label row says "K12 records Inconsolata uppercase as the live utility face; a brief that keeps it says so". This brief's thesis says so, and `anywhere-header-1440.jpg` shows it |
| **The phone rows' accent is the weekend marks, not the compare anchor's rule** | The brief assigns the phone rows' one accent use to the compare anchor's rule and the 768-and-above accent to the diagram's weekend marks. The measured layout cannot honour both: on every phone row the compare anchor (771 to 836 at V2) and the day diagram (852 to 1280) land on the **same** second screen, so an accent rule plus four accent marks would spend the accent twice on one screen, which K3 section 5f forbids. The marks keep it, because they carry a register-backed fact (CR-032) that a rule does not; the compare anchor takes a 3px `--color-text` rule instead, which is the same emphasis step without the second accent |
| **The compact door rule is used at V5 as well as below 700px tall** | Measured, not preferred: the contract's V5 form (lines above the CTAs) assumes a two-line door line of 27px; at 414 the line wraps to three lines of 24px, making the block 194px and the sum 723 of 691. M12 made the same extension for the same arithmetic reason |
| **The h1 steps one token down to `--text-2xl` at V10** | The contract's landscape recipe explicitly allows one step on that row; declared here, as M03 did |
| **The diagram renders as HTML blocks below 768** | SVG `<text>` does not wrap, and the longest deck phrase measures 537px at 768 against a 342px content width at 390 — it would be clipped, not shrunk. Below 768 the same two rows become HTML so the sentences wrap. One form is displayed at a time, so nothing is announced twice. M07 resolved the identical problem the identical way |
| **Georgetown's morning phrase drops the deck cell's trailing clause** | "in TimeBack blocks, with structured breaks" cannot fit a one-line SVG label. The complete sentence is on the same page in the comparison table's "The day" row. This is the brief's own wording and M07's shipped wording |
| **The header's wrap takes `--space-4` inline padding below 768** while the content wrap keeps `--space-5` | Arithmetic: a 27px mark (117px wide, the K12 V2 floor the runner measures at 390) plus two uppercase Inconsolata labels (204px) plus their gap needs 329px, and a 24px margin leaves 327 at 375. The mark hangs 8px into the margin, which is the ordinary optical treatment for a logo, and the row holds from 375 up |
| **The header mark clamps to 25px between 360 and 374** | Below 375 even the 16px header margin cannot hold a 27px mark and the two labels on one row. K12 V2 states the floor at 390, where the runner measures 27px exactly; below 375 the mark steps to 25px so the row survives. At 360 and 320 the row still wraps to two, which is what M12 chose for the same collision (the fold budget absorbs it: V1 measures 601 of 716) |
| **The footer facts block is a paragraph, not a definition list** | `copy.md` section 8's facts block is one continuous run of sentences, not term-and-definition pairs. Named in the shell diff |
| **The Locations rows are not links** | gt.school's live component makes the enrolling row an `<a href="#">` (K12 A13, a dead link). There is no per-location destination to link to, so the rows are plain text with a status chip. DD-45 reuses the pattern, not the implementation |
| Non-token lengths | 1px rules; the 2px focus bands and their offsets and the 3px forced-colours outline; the 44px target minimum; the 3.5rem header row; the SVG's pixel geometry (bands 28 tall at y 0 and 36, label baselines at 21 and 55, a 3px opening tick, four 9px marks at 13px centres, an 18px and 78px label inset, a 64px band height); the 12.5rem diagram name column; `ch` measures (35ch on the h1, 30ch on h2, 48ch on the footer facts); letter-spacing 0.02em, 0.04em, 0.06em and 0.08em; the breakpoints 768, 900, 1024 and the 400px height query. Rule 14 governs colour, type, size, space, radius, shadow and duration, all of which are tokens here; these are geometry, measured in the runner |

## Taste decisions the brief did not name (raised here, not made silently)

| Decision | Reasoning |
|---|---|
| **The h1's italic turn** | The brief does not name it. The estate turns its headline's voice at a sentence break; this turns at the umbrella sentence's own hinge. It adds no word, changes no word, and it makes the "two ways in" half visually separable at a glance, which serves L1 as well as L2. If Nari reads it as decoration, deleting one `<span>` reverts it |
| **The doors are ruled, not boxed** | A 1px `--color-text` rule opens each door column, echoing the header's own hairline. A filled card would have fought the diagram's filled bands directly beneath it, and the estate's own first screen has no card at all |
| **The diagram's bands are square with a 3px opening tick** | The first build drew rounded outlined boxes and they read as **empty form fields** in the V14 capture. Square corners, a filled tint and a navy tick at the start of each band read as a block of time. Both bands of a row are the same height, so the diagram says which blocks a day holds and never a ratio no register row carries — M07's measured lesson |
| **The run-in door lines are `--color-text-muted`, while the inline door lines from 768 are `--color-text`** | The same sentence, two contexts. On the phone the two lines sit directly under both CTAs with no other hierarchy, so muting them (6.25, comfortably AA) keeps the door names leading; from 768 each line sits inside its own door column under its own name, where full strength is right |
| **From 768 the two door CTAs sit on one baseline** | The cards are equal-height grid items and the CTA takes `margin-top: auto`, so both actions align however many lines each door line takes. Measured at V13 (1024 by 768), where the Georgetown line runs to three lines and the GT Anywhere line to two: before, the CTAs sat at 509 and 535; now both sit at 535. DD-26 asks for visual parity between the doors, and two actions on different baselines is the commonest way to lose it |
| **"A day at GT" labels the diagram** | An allowed section 3 heading in `copy.md`, set as a small uppercase label rather than a section heading, so the diagram is named without competing with the h1 |
| **The footer's column headings were dropped** | The estate labels its footer columns "Navigate" and "Contact". Neither word is in `copy.md`, and the deck's rule is that new wayfinding words are recorded there before use. The columns run unlabelled; the Locations list carries an `aria-label` using the deck's own noun for the slot |
| **The peers band's light plate is outlined in `--color-text`** | `copy.md` section 8 requires the GT Anywhere mark on navy and the GT School mark on a light panel, which makes the two plates unequal by construction. A firm outline gives the light plate the same presence as the navy fill, so neither school reads as the ranked one (DD-26) |

## Flagged slots

| Slot | Q or decision id | What ships | Who decides |
|---|---|---|---|
| **The footer Locations list** | Section 9 of `copy.md`; DD-45; K12 F64, F65, OQ-3 | **Awaiting Nari's confirmation.** The list ships as gt.school's own footer publishes it today: Georgetown, Texas "Now enrolling"; Miami, FL, New York, NY and Bay Area, CA "Coming soon". The city names and both status strings are section 9 vocabulary and the source is gt.school's live footer, but **a statement about future campuses is Nari's to confirm**, and `copy.md` section 9 requires her confirmation before the coming-soon cities appear. Nothing else on the page depends on them: remove the three `<li>` rows and the list still renders, the footer still balances, and the N-campus demonstration survives in the door list and the peers list | Nari |
| "Current families" destination | Q-002 | `https://community.gt.school` | Nari |
| The application steps | Q-007 | The deck's four steps, identical for both schools | Crystal |
| Tuition on request for Georgetown | Q-011 decided | "Tuition on request. Ask admissions." | — |
| After 8th grade | Q-013 | "Families plan the path after 8th grade with admissions." | Crystal |
| Intensive weekend logistics | Q-017 | Not on the page beyond the deck's cell | Crystal |
| The outcome figure and the accreditation statement | Q-019, Q-033; G0.5 items 2 and 3 | **Withheld.** The page carries no outcome figure and no accreditation claim | Nari, David |
| TEFA window, owner and expiry | Q-021 | The module is visible to everyone (D-015 option c) with no window stated | Nari |
| `?school=` parameter name | DD-25, S5 | `?school=georgetown` and `?school=anywhere` on every application link | Johnny, at S5 |
| Holly's unifying brand element | Q-001 | Not present. `copy.md` section 0 says it "may later be added beside" the mark, never instead of it; the header row has space for it at 768 and above | Holly, Nari |
| The GT Anywhere photograph and its caption | RF-25, DD-42 | Not shipped. The photographed state is specified in Assets | Nari |
| Claims register status | REQ-022 | Every figure on the page maps to CR-011, CR-021, CR-032, CR-033, CR-034 or CR-035, all **"Unverified, public"**. Recorded here, never on the page | Nari, at DEL-018 |

## Parent questions (`0_plan/05` section 6c, from `1_spec/01`)

| Id | Question | Answered here | Deferred |
|---|---|---|---|
| PQ-01 | What is GT School? | The h1, then the peers band names both schools under one mark | |
| PQ-02 | Is it for my child? | The Admissions row, the proof strip's first fact, the steps line: at or above the 90th percentile | |
| PQ-03 | In person or online: what are my options? | The two doors, above the fold at all sixteen fold rows | |
| PQ-04 | Where is the campus? | The h1, the "Where and how" row, the footer facts block and the Locations list | |
| PQ-05 | What does a day look like? | **The day diagram** and the table's "The day" row | The full daily schedule is a school-site page |
| PQ-06 | What does it cost, and can TEFA help? | The "Tuition and access" row and the TEFA module | Georgetown's fee: "Tuition on request", by decision (Q-011) |
| PQ-07 | How do I apply? | The steps section, with a scoped application link per school | The application itself lives at apply.gt.school |
| PQ-08 | Who teaches my child? | The "Guides" row and the proof strip's third fact | Named Guides are a school-site page |
| PQ-09 | How much in-person time does GT Anywhere have? | The "In-person time" row, the door line, and the diagram's second GT Anywhere band with its four marks | Dates and logistics (Q-017) |
| PQ-10 | What results, and is it accredited? | **Not answered, by decision** (G0.5 items 2 and 3). The page is silent; a parent who asks is routed to admissions through "Talk to admissions" | Nari, David |
| PQ-11 | What happens after 8th grade? | The "After 8th grade" row, which routes to admissions | Q-013 |
| PQ-12 | I am a current family, where do I go? | The header utility link, the families band and the footer link | |
| PQ-13 | I am not ready to apply, what can I do? | The four secondary CTAs | |
| PQ-14 | Is GT School part of Alpha School? | The provenance line, once, under the h1 | The relationship in depth is a school-site page |

## Self-check

### BUILDER-BRIEF greps

| Rule | Command | Result |
|---|---|---|
| 1 no forms | `grep -c "<form" index.html` | 0 |
| 2 one script | `grep -c "<script" index.html` | 1 (the JSON-LD block) |
| 3 no external hosts | checker R3 | Pass |
| 5 numbers | checker R5 | Pass, whitelist only |
| 6 no "advisor" in text | checker R6 | Pass (`data-type="advisor"` is an attribute, allowed by the brief) |
| 7 full names | checker R7 | Georgetown Campus x11, GT Anywhere x17 |
| 8 both CTAs on the first screen at 390 | runner V3 (390 by 664) | 432 and 557 of 640 |
| 14 tokens only | checker R11 | **0 raw hex in `styles.css`** |
| 16 real logos | checker R16 | Pass |

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M05-front-door-of-the-estate`

```
## M05-front-door-of-the-estate: 36 pass, 0 fail

check-mocks: OK
```

### `python3 1_spec/tools/check-claims.py 0_plan/mockups/M05-front-door-of-the-estate/index.html`

```
## 0_plan/mockups/M05-front-door-of-the-estate/index.html
| Figure on the page | Register row | Occurrences | Status |
|---|---|---|---|
| "designed for students in the 90th+ percentile" | CR-011 | 4 | Unverified, public |
| "$10,400/year — GT Anywhere annual tuition, fully or partially covered | CR-021 | 1 | Unverified, public |
| Four in-person intensive weekends a year in Georgetown (four named 202 | CR-032 | 6 | Unverified, public |
| Georgetown mornings: "two 50-minute blocks and one 25-minute block wit | CR-033 | 6 | Unverified, public |
| GT Anywhere mornings: "two to three hours of 100% cognitive load" (aca | CR-034 | 3 | Unverified, public |
| Guides hold weekly one-to-one check-ins with each student ("Academic A | CR-035 | 2 | Unverified, public |
  NOTE unverified rows on the page (allowed in mocks, blocked for production): ['CR-011', 'CR-021', 'CR-032', 'CR-033', 'CR-034', 'CR-035']

check-claims: OK
```

### `node 0_plan/tools/shots.mjs 0_plan/mockups/M05-front-door-of-the-estate` (final pass, `qa/fold.md` verbatim)

```
# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T14:51:25.206Z; page `/0_plan/mockups/M05-front-door-of-the-estate/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 93 | 303 | 332 | 477 | 601 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 57 | 269 | 298 | 430 | 555 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 271 | 300 | 432 | 557 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 271 | 300 | 433 | 557 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 242 | 271 | 403 | 528 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 242 | 271 | 403 | 528 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 240 | 270 | 402 | 527 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 243 | 272 | 405 | 530 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 271 | 300 | 432 | 557 | yes | report: page height 7540 |
| V10 | 750 by 342 | fold | 318 | 57 | 160 | 186 | 299 | 299 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 285 | 323 | 549 | 549 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 292 | 330 | 557 | 557 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 267 | 305 | 535 | 535 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 288 | 326 | 533 | 533 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 295 | 333 | 541 | 541 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 301 | 339 | 548 | 548 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 301 | 339 | 548 | 548 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 93 | 334 | 384 | 529 | 653 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 267 | 305 | 535 | 535 | yes | report: scrollWidth 1024 |

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
| V1 | yes | text cut by the edge, 723 to 743 |
| V2 | yes | text cut by the edge, 621 to 641 |
| V3 | yes | text cut by the edge, 647 to 667 |
| V4 | yes | text cut by the edge, 648 to 668 |
| V5 | yes | content reaches 695 of 715 and more follows below |
| V6 | yes | text cut by the edge, 827 to 842 |
| V7 | yes | text cut by the edge, 673 to 693 |
| V8 | yes | content reaches 726 of 739 and more follows below |
| V9 | yes | content reaches 842 of 844 and more follows below |
| V10 | yes | text cut by the edge, 334 to 354 |
| V11 | yes | text cut by the edge, 998 to 1040 |
| V12 | yes | content reaches 1187 of 1194 and more follows below |
| V13 | yes | content reaches 761 of 768 and more follows below |
| V14 | yes | svg cut by the edge, 678 to 742 |
| V15 | yes | svg cut by the edge, 606 to 670 |
| V16 | yes | content reaches 893 of 900 and more follows below |
| V17 | yes | text cut by the edge, 935 to 985 |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | content reaches 560 of 576 and more follows below |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 27px | 141.8px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass
```

### Type measurement: `node 0_plan/mockups/M05-front-door-of-the-estate/qa/M05-measure.mjs --weights` (`qa/measure.md`)

h1 line counts as shipped (Literata 300, -0.027em): **V1 6 / 186px, V2 6 / 188, V3 6 / 190, V5 5 / 161, V10 3 / 95, V11 5 / 196, V13 4 / 178, V14 4 / 199, V16 4 / 212, V17 4 / 212.** At weight 400 every one of those numbers is identical, which is the evidence for taking the estate's 300. With `letter-spacing: normal` every row is also identical **except V5**, which becomes 6 lines / 193px. The SVG label table shows zero labels overflowing their band at 768, 834, 900, 1024, 1100, 1280, 1440 and 1920.

### Screenshots reviewed by eye (the runner's own files, not a browser tool)

`V16.jpg`, `V14.jpg`, `V13.jpg`, `V11.jpg`, `V10.jpg`, `V9.jpg`, `V5.jpg`, `V2.jpg`, `V18.jpg`, `V2-rootx2.jpg`, `V2-full.jpg`, `V14-full.jpg`, `focus-cta.jpg`, `focus-footer.jpg`, `forced-colors.jpg`, `forced-colors-1440.jpg`, `forced-colors-peers.jpg`, `forced-colors-footer.jpg`, `peers-1440.jpg`. Four defects were found this way and fixed: the diagram's bands read as empty form fields (rounded outlined boxes became square strips with an opening tick); the SVG and the HTML card form both rendered at 768 and above (a later base rule was beating a media query at equal specificity); the header row wrapped on every phone row (a class collision put `.header-inner`'s negative margin on the `.wrap` itself, which also caused the only reflow failure); and the GT Anywhere mark vanished under forced colours.

### Pending for the director

| Item | Question |
|---|---|
| The footer's ground | The brief says navy; the measured estate footer is cream. Both are defensible and the swap is one class. Nari should see the cream variant beside this one before G1 |
| The Locations list | Ships with the three coming-soon cities, flagged. If Nari will not confirm them before the review, three `<li>` rows come out and nothing else changes |
| The compare anchor at V14 | On the first screen at V16 as the brief asks, below the fold at 1280 by 720. Getting it above 696 would need the diagram cut to about 140px, which costs a row name or the deck's own phrases |
| The grain | The estate's textured cream is not reproduced. Whether that matters is a taste call for Nari, and closing it needs a texture asset in `shared/img/` |
