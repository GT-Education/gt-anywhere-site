# M02 The Journal: rationale

| Field | Value |
|---|---|
| Mock | M02 "The Journal", `0_plan/mockups/M02-the-journal/` (`index.html`, `styles.css`, this file, `qa/`) |
| Brief | `0_plan/kb/briefs/M02.md` under `0_plan/kb/briefs/CONTRACT.md` v2.1; evolves `0_plan/mockups/M2-the-institute/` |
| Lens order | L3 mission, L1 objective, L2 continuity, L4 exclusivity |
| Built | 2026-09-11, design engineer (Fable fork): one build pass with three measured fix rounds, then **iteration 1** against both critics' scorecards (`0_plan/ensemble/critic-fable-M02.md`, `0_plan/ensemble/critic-astra-M02.md`; see Iteration below). The runner `node 0_plan/tools/shots.mjs 0_plan/mockups/M02-the-journal --all` measured the 19 matrix rows on every round and wrote `qa/V1.jpg` to `qa/V19.jpg`, `qa/V2-full.jpg`, `qa/V14-full.jpg`, `qa/V2-rootx2.jpg`, `qa/focus-cta.jpg`, `qa/focus-plate.jpg`, `qa/focus-footer.jpg`, `qa/forced-colors.jpg` and `qa/fold.md`; a scratch Playwright probe (same install) measured the geometry quoted below (h1 line boxes, pull-out row bottoms, CTA label wraps, page heights). The browser is the one `qa/fold.md` now names in its own header: the cached Chrome for Testing build `chromium-1234` (151.0.7922.34), not a bundled headless Chromium; the pinned build the install asks for is not in `~/Library/Caches/ms-playwright`. Every capture in `qa/` is from the single final run pasted in Self-check. The h1 estimator is `qa/h1lines.py`. No other browser tool was used; gt.school, anywhere.gt.school and alpha.school were not opened |
| State | No JavaScript (D-039 undecided: no `data-d039` declaration, one JSON-LD script; the page is complete as static HTML and CSS). No photograph (DD-42 option a, RF-25 pending). Copy: `copy.md` v1.1 sections 0 to 8 verbatim (76 slots checked by string match, tags stripped); the M2 kicker "A closer look" and closing line "The full comparison continues below."; the allowed headings "Two ways to attend" (visually hidden), "Compare the two schools" (visually hidden), "What is true of both schools", "How to apply", "Questions before you apply", "Current families"; the eyebrows "Compare", "Proof", "Admissions", "Connect"; from section 9 the skip-link label and this mock's own row, added there this iteration: the four fact labels ("Admissions", "Mastery", "Guides", "Two ways to attend") and the link label "Sources". No word on the page is outside `copy.md` sections 0 to 9 (word-set check in Self-check) |
| Tokens | `../shared/tokens-v2.css`. Layer-2 tokens used are named with their register rows below (`TOKENS-V2.md` rule). Zero raw colour in `styles.css` |
| Register rows this build depends on | DD-38 (fluid type scale, Literata 400 display, prose leading 1.5), DD-39 (colour roles: on-navy, muted-on-dark, focus-on-dark), MN-16 (motion contract: nothing moves), D-039 (scripts: none shipped), DD-42 (photographs: none), DD-43 (repeated comparison cells), DD-44 (fold contract, 19 rows), R6 (comparison breakpoint measured at 900), R14 (tour label), K3 section 5d (focus rings), K1 section 5a (margin schedule, Option under R15) |

## Direction

Hypothesis: a school that writes like a school earns trust by precision. The page is composed as a journal issue: a masthead with one rule, a headline set in the reading face with one italic emphasis device, a standfirst under a short rule, two equal doors as a text list under a continuous hairline, and, still on the first screen wherever all three rows fit, a three-row pull-out of the comparison so a parent reads the two schools side by side before scrolling. Seriousness comes from the fixed copy's facts and the discipline of the setting (K14 section 5a for tone only; MD-25: selectivity is the bar, never price), not from adjectives, badges or pictures.

The first screen serves the lens order in one column at phone widths and one 12-column grid from 1024: header 56px (the GT School mark left, the two utility links right, a 2px accent rule under it as the first screen's one accent use), the umbrella sentence across eight columns from 1280 (nine from 1024 to 1279) at `--text-3xl` with "in person" and "online" in Literata Italic, the provenance line as a standfirst 16px under a 32px `--color-text` rule, a full-width hairline, then the two doors 6 and 6 with a 32px gutter: eyebrow label, name, navy CTA, no card, no tint, no picture. From 900px wide the two supporting lines follow the pull-out as run-in paragraphs in the same two columns — the contract's compact door rule applied to the laptop rows — so the comparison, which is this direction's argument, lands inside the first screen and the prose that elaborates it is what the fold cuts. On phones the doors are two rows under the h1 with their lines following the second CTA, exactly as before.

The comparison on the first screen is a **pull-out**, not the comparison table moved up: bounded above and below by a `--color-text` rule, no stripes, 16/42/42 columns against the table's 22/39/39, cells in the reading face (Literata) against the table's Inter Tight, row labels and school names as tracked eyebrows against the table's sentence-case labels and serif heads, and the kicker "A closer look" in the corner cell rather than a caption above. It renders only where all three unchanged rows complete in one screen, measured at 900px wide and 700px tall and up: V13, V14, V16 and V17 have it whole (rows end 746 of 768, 695 of 720, 796 of 900, 876 of 960); V15, V19, the tablets and the phones do not render it at all, and there the anchor sentence hands straight to the comparison, whose opener and title come inside the first screen instead. Its foot line carries the evidence link at the left and the closing line at the right, so the screen that states three registered figures also carries their source.

What changed from M2 The Institute: the register of Inconsolata data labels above the doors is gone (its figures duplicated the table and pushed the CTAs down); the mini-compare aside becomes the pull-out under the doors, with the deck's exact labels and cells; the h1 drops from 52px to the contract clamp (46px at 1440, four lines) and gains the italic device; every label is Inter Tight 500 uppercase in the muted role (no accent as text, K3 section 5f); the footer carries both marks on their panels; the anchor sentence precedes the first table (checker R19); every colour is a token.

## Iteration 1 (2026-09-11, after both critics' scorecards)

One consolidated pass against `0_plan/ensemble/critic-fable-M02.md` (the studio critic, Composition 3 and Craft 3) and
`0_plan/ensemble/critic-astra-M02.md` (Composition 3). Where the two disagreed I followed the studio critic and say so in
the row. Every change below is in this file's sections and measured in Self-check.

| # | What the critics found | What changed | Evidence |
|---|---|---|---|
| 1 | Both: the excerpt is the comparison table drawn twice — three byte-identical rows in the identical rule set 200px above the same rows — and it delivers nothing at V15 and one clipped row at V14 | The excerpt is now a **pull-out with its own design** (no stripes, 16/42/42 columns, Literata cells, tracked eyebrow labels and school names, bounded by two `--color-text` rules, the kicker in the corner cell), and it **renders only where all three rows complete**: 900px wide and 700px tall and up. Departures 24 and 26 | Rows end 746 of 768, 695 of 720, 796 of 900, 876 of 960; not rendered at V15, V19, the tablets or the phones. Section weights: five properties now separate the pull-out from the table, where the first build's own note conceded two |
| 2 | Astra: bring all three unchanged rows inside 720px with a short-laptop composition | Built: at 900px and wider, 700 to 799px tall, the door's label and name share one line and the gaps close; the two supporting lines move below the pull-out as run-in paragraphs (Astra's "moving supporting paragraphs after the excerpt"), which is the contract's own compact door rule applied to the laptop rows. Departures 25 and 27 | V14 row 3 at 695, inside the 696 limit; V13 at 746 of 768. Prose stays at 1.5, every control keeps 44px |
| 3 | Studio critic: a false floor at V16 — "Next band cut: yes" was satisfied by `section.closer`'s bottom padding and about 4px of empty leading — and the corrected runner failed V17 | The first screen now ends on content that a reader sees cut at every fold row: the door lines at V16 and V17, the pull-out's foot line at V13 and V14, the Compare opener at V15, the run-in door lines on every phone row. Where the pull-out cannot render, the seam to the comparison closes so the screen ends on the comparison rather than on blank page. Departures 25 and 28 | `qa/fold.md`, Next band evidence: V16 text cut 889 to 910, V17 text cut 942 to 963, V14 708 to 723, V13 760 to 775, V15 content reaches 646 of 648. "Result: all required rows pass" |
| 4 | Studio critic: the stripe reads as clipped to the text; forced colours strips the table's only row separation; a stale stripe-bleed comment at `styles.css:150` | The stripe is a plate again — 8px past the text at the page edge, drawn by a box-shadow on the outer cell so nothing moves and the rules stay at the text edge; `.ctable tbody tr` takes a `CanvasText` border inside the `forced-colors` block; the stale comment is gone. Departures 29 | `qa/forced-colors.jpg` and a 2x capture of the table in forced colours: every row separated. Taste decisions 6 |
| 5 | Studio critic: the standfirst rule has 8px of clearance and underlines "Texas" at V10 | `--fs-h1-gap` is 16px at every band, and the rule is dropped on the landscape row rather than printed under the headline's last line | `qa/V10.jpg`: no rule, no underline. Fold method above |
| 6 | Both: three registered figures on the first screen with no source on that screen, and a rationale line claiming the opposite | The pull-out's foot line carries a **"Sources" link** into the sources sentence at the left of the closing line, and the two proof facts that have a destination in `copy.md` carry it **on their label** ("Admissions", "Guides"), which is Astra's compatible suggestion. The false claim at the old line 98 is corrected in Decisions applied | `qa/V16.jpg`, `qa/V14.jpg`; the proof strip capture. Departures 30 |
| 7 | Both: two accent rules share a screen at every laptop row and at V2, against CONTRACT section 4, with a rationale line asserting the opposite | The section openers take the same rule in `--color-text`; the accent is kept for the masthead and for **one** opener, "Admissions", the page's conversion moment. The palette paragraph is rewritten with the measured distances | Measured at 1280: masthead bottom 56, Admissions eyebrow 2625, so 2569px apart; 4370px apart at 375. Departures 32 |
| 8 | Studio critic: the four fact labels are admitted words in an unadmitted placement, and "Same school, same academics" labels a table row rather than the fact beneath it | `copy.md` section 9 now carries the M02 row naming all four labels and the "Sources" link label; **"Mastery"** replaces "Same school, same academics" over the mastery fact. Departures 11 | `0_plan/mockups/shared/copy.md` section 9; the proof strip capture |
| 9 | Both: the shell's continuity is asserted, not shown | Nine block types carry their `1_spec/04` section 3 name as `data-component`; five blocks with no entry are marked `data-component-proposed` and listed as proposed additions. The estate's measured differences (heading weight and tracking, button weight and size, button fill, mark sizes) are argued row by row against `CONTINUITY.md`, and the footer's GT School mark is now 32px | Continuity section above; Departures 31 |
| 10 | Studio critic and Astra: stale or wrong evidence — `check-claims.py` reports CR-032 at 5 and the whitespace explanation describes a tool that no longer exists; the V15 anchor bottom; the `--color-border` pairing; the pasted runner block was an earlier run than `qa/fold.md` and the captures were split across two runs; the V10 headline transcription | CR-032 is stated at 5 and the explanation withdrawn; the fold tables are re-measured from the final run; `--color-border` is 1.56 on `--color-bg` and 1.42 on `--color-surface`; Self-check pastes the final run only, and the Built row names the browser the runner records; the V10 wrap is transcribed from the capture ("Texas campus" opens the last line) | Self-check; Colour and contrast; the h1 table |

## h1

The h1 is the umbrella sentence, verbatim: "GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere." It is the only element that says what GT School is and names both ways to attend before either door, so in a direction whose thesis is precision it is the largest thing on the page and the first thing read. Literata 400, `--text-3xl` (27.26px at 375 to 46px at 1440), `--leading-tight` 1.15, at most 35ch. "in person" and "online" are `<i>` spans in Literata Italic (the site's own italic file, `fonts.css`), styling only: the text content equals the slot, and each italic phrase carries `white-space: nowrap` so the device is never split across a line (it also closes the phone rag hole at "person at our", moving the shortest non-last line from 51 to 60 percent of the measure, `qa/h1lines.py`). "from anywhere." sits in a `span.nb` so the last line is never one word; a container query releases it when the masthead is narrower than 12rem (a doubled root font on a phone). `text-wrap: balance` applies from 768px (four lines); on phones `text-wrap: pretty` is declared but the browser did not change the seven-line wrap, so the span does the work. The door names are h3 under a visually hidden h2 "Two ways to attend"; the second-screen h2s are "Compare the two schools" (visually hidden; the table caption is the visible title), "What is true of both schools", "How to apply", "Questions before you apply" and "Current families". No level is skipped; the TEFA module's h3 sits under the compare h2.

### h1 line counts (estimated with `qa/h1lines.py` from the Literata Regular and Italic advances, greedy wrap; measured from the runner's h1 bottom minus the header and the masthead padding, over the line box)

| Row | h1 size | Column | Estimated lines | Measured lines (height) | Wrap |
|---|---|---|---|---|---|
| V1 360 by 740 | 27.00px | 312px | 7 | 7 (323 − 90 − 16 = 217) | as V2 |
| V2 375 by 629 | 27.26px | 327px | 7 | 7 (317 − 90 − 8 = 219) | GT School is a selective / school for gifted and / talented children, / in person at our / Georgetown, Texas / campus or online / from anywhere. |
| V3 390 by 664, V4 393 by 659 | 27.53, 27.58px | 342, 345px | 7 | 7 (294 − 56 − 16 = 222) | as V2 |
| V5 414 by 715 | 27.95px | 366px | 6 | 6 (265 − 72 = 193) | GT School is a selective / school for gifted and / talented children, in person / at our Georgetown, Texas / campus or online / from anywhere. |
| V6 412 by 839, V8 430 by 739 | 27.92, 28.23px | 364, 382px | 6 | 6 (193, 195) | as V5 |
| V7 402 by 681 | 27.74px | 354px | 7 with "in person" bound (6 unbound) | 7 (295 − 72 = 223) | the one row where the binding costs a line; 81px inside its limit |
| V10 750 by 342 (landscape, `--text-xl`) | 24.17px | 702px, cap lifted | 3 | 3 (147 − 56 − 8 = 83) | transcribed from `qa/V10.jpg`: GT School is a selective school for gifted and / talented children, in person at our Georgetown, / Texas campus or online from anywhere. (the first build's rationale broke the lines a word early; Astra caught it) |
| V11 768 by 1024, V12 834 by 1194 | 34.18, 35.34px | 693, 716px (35ch) | 4 | 4 (157, 163) | balanced: GT School is a selective school / for gifted and talented children, / in person at our Georgetown, Texas / campus or online from anywhere. |
| V13 1024 by 768, V19 1024 by 576 | 38.68px | 688px (nine columns) | 4 | 4 (242 − 64 = 178) | as V11; the brief's eight columns (608px) set five lines, see Departures |
| V14 1280 by 720 | 43.19px | 779px (eight columns) | 4 | 4 (263 − 64 = 199) | as V11 |
| V15 1366 by 648 | 44.70px | 836px | 4 | 4 (270 − 64 = 206) | as V11 |
| V16 1440 by 900, V17 1920 by 960 | 46.00px | 864px (eight columns of 1312) | 4 | 4 (284 − 72 = 212; 300 − 88 = 212) | as V11 |
| V18 320 by 256 (reflow) | 27.00px | 272px | 8 | 8 (346 − 90 − 8 = 248) | reflow row, no fold rule |

The brief estimated 6, 6, 4, 4 at V2, V5, V14, V16 from the contract's mean-advance method; the real advances give 7, 6, 4, 4, the same one-line correction M03 and M12 recorded. DD-38's 300-against-400 question: the estimator says Literata 300 would not change the count at V2 or V16 (M03 captured the same), so 400 ships without a second capture here.

## Brief compliance

| Brief section | Built | Status |
|---|---|---|
| Mock id and name, lens order | M02 The Journal; L3, L1, L2, L4; evolves M2 The Institute (Direction above) | Done |
| Thesis | Masthead, register of facts (the pull-out and the table), a comparison a parent reads in one screen at V13, V14, V16 and V17 (three rows complete at 746 of 768, 695 of 720, 796 of 900, 876 of 960); precision, no adjectives | Done |
| Exemplars | Hull's italic emphasis device on the load-bearing words, as italics on "in person" and "online" in the h1 (C23); Barnes's tracked eyebrows and one module repeated verbatim, as the eyebrow-plus-rule openers over every section and the door and fact modules (C21, C27); Exeter's "Go figure" strip, as the proof strip's shape: heading in the label column, four fact modules in a two-by-two grid, each with a label, the evidence linked in the sources line beneath (C04, linked form). Avoided: MoMA's length (C29): 3874px at 1440 by 900, 4.30 screens, against the brief's target of four (Departures 17), and 6409px at 375 by 629 against 7156 before the pull-out was gated off the phone | Done. C04's linked form is now on both surfaces that carry figures: the two proof facts that have a destination in `copy.md` carry it on their label (Admissions, Guides), and the pull-out's foot line carries a "Sources" link into the sources sentence under the comparison. The other two facts have no destination the deck lists, which is why the pooled sentence stays |
| Composition | 12 columns from 1024 with 32px gutters (margins 24, 32, 48, 64: content 1184 at 1280, 1312 at 1440 and 1920); two columns with a 24px gutter from 768; one column below. Header 56 (90 below 390 where the utility links stack). h1 across eight columns from 1280, nine from 1024. Standfirst at `--text-sm` under a 32px `--color-text` rule. Full-width hairline over the doors; doors 6 and 6, label, name, line, CTA, no cards. Pull-out under the doors with the deck's three labels and six cells, the anchor sentence above it (R19), "A closer look" as its kicker and "The full comparison continues below." as its closing line; it renders where all three rows complete (900px wide, 700px tall and up) and nowhere else. The comparison table stacks with `data-label` below 900 and goes two-up from 768 to 899. Compact door rule below 800px tall on phones and at every width from 900; landscape recipe at V10 | Done, with two departures the critics asked for (Departures 24 and 25); fold sums restated below with measured bottoms |
| Typography | h1 Literata 400 `--text-3xl` with the italic phrases; eyebrows Inter Tight 500 `--text-xs` uppercase .08em muted; door names Literata `--text-lg` over the list's hairline; table row labels `--text-sm` Inter Tight 500, cells `--text-base` at 1.5, `tabular-nums` on the tuition cell; CTAs Inconsolata 600 `--text-btn` uppercase; prose measure 65ch below the fold; measured h1 lines 7, 6, 4, 4 at V2, V5, V14, V16 | Done |
| Color and surface | Light throughout: `--color-bg` page, `--color-surface` on the odd table rows and the application band, `--color-border` hairlines, `--color-text`, `--color-text-muted` (6.25 on bg). One accent use per screen, measured this time: the 2px rule under the masthead on the first screen and the rule under the "Admissions" opener, which no other accent can share a screen with; the Compare, Proof and Connect openers take the same 32 by 2px rule in `--color-text`. CTAs navy fill with `--color-on-navy` text. Footer navy, the only dark section; two-colour ring on the GT Anywhere panel link (`qa/focus-footer.jpg`) | Done |
| Imagery | Default state: none. Photographed state specified under Assets and not built | Done (default) |
| Motion | Still. V3 focus instant; V10 native anchor scroll under `no-preference`; no V6. Runner: every computed duration 0s under reduced motion | Done |
| Copy | Sections 0 to 8 verbatim; the two M2 words. The brief's Copy row says "no other section 9 words"; this build uses five — the four fact labels and the "Sources" link label — and they are now a registered section 9 row for M02 rather than an unadmitted reuse, which is what the studio critic's fix 6 asked for | Done, with the section 9 row (Departures 11) |
| Conversion | Doors on the first screen at every required row; the compare anchor inside the first screen at V13 to V17 (bottoms 446, 468, 536, 566, 598) and the second screen at V2 and V5; the pull-out whole inside the first screen at V13, V14, V16 and V17; full table with repeated values; proof strip with the four facts, two of them linked on their label, and the sources line; steps; secondary CTAs with the R14 tour label; current families; footer parity | Done |
| Acceptance | `check-mocks.py` 36 pass, `check-claims.py` OK; V1 to V17 fold met, every row with visible content reaching into the reserved 24px and more below it ("Result: all required rows pass"), V18 reflow (no horizontal scroll), V19 reported inside its limit; the comparison table stacks from 320 to 414 with `data-label` on every cell and no clipping (`qa/V18.jpg`, `qa/V2-full.jpg`), and the pull-out does not render there at all (Departures 24); rules on the 8px scale (Taste decisions); DD-38 and DD-39 named in this file | Checkers and runner pasted in Self-check |

## Fold: the estimate designed to, and the measured result

Method: CONTRACT section 2 with line counts from the real advances (`qa/h1lines.py`). Header 56 (90 below 390: two 44px utility rows plus the 2px rule). Masthead top 16 (8 at or under 639px tall and on any screen 900px wide and under 800px tall, where the short-laptop composition buys the margin back for the comparison; 32 from 940). h1 as measured above. Standfirst: 16 above the rule at every band (the critic's Typography fix; the rule is dropped on the landscape row), then the 1px rule, 8, one line at `--text-sm` (21px). 24 to the door list (16 at or under 799, 8 at or under 639 and on the short-laptop rows), 1px rule. Compact door, phone: 8 + label 15 + 4 + name 25 + 8 + CTA 44 + 8 = 112. Laptop door from 900: 16 + label 16 + 4 + name 28 to 30 + 8 + CTA 44; on the short-laptop rows the label and the name share one line (8 + 28 + 8 + 44). Landscape door: 4 + 15 + 4 + 25 + 8 + 44 = 100. Limits are height minus 24.

| Row | Viewport | Limit | Measured CTA bottoms (Georgetown, Anywhere) | Spare | What the fold cuts, in the runner's own words (`qa/fold.md`, Next band evidence) |
|---|---|---|---|---|---|
| V1 | 360 by 740 | 716 | 490, **603** | 113 | the door lines: content reaches 737 of 740 and more follows below |
| V2 | 375 by 629 | 605 | 477, **590** | 15 | the door lines: text cut by the edge, 616 to 636 |
| V5 | 414 by 715 | 691 | 432, **546** | 145 | the door lines: text cut by the edge, 700 to 720 |
| V6 | 412 by 839 | 815 | 528, **730** | 85 | the Compare opener: text cut by the edge, 825 to 840 |
| V8 | 430 by 739 | 715 | 434, **548** | 167 | the door lines: text cut by the edge, 727 to 747 |
| V10 | 750 by 342 | 318 | **288**, 288 | 30 | the door lines: content reaches 334 of 342 and more follows below |
| V11 | 768 by 1024 | 1000 | **530**, 530 | 470 | the comparison table: text cut by the edge, 986 to 1028 |
| V13 | 1024 by 768 | 744 | **386**, 386 | 358 | the pull-out's foot line: text cut by the edge, 760 to 775 |
| V14 | 1280 by 720 | 696 | **408**, 408 | 288 | the pull-out's foot line: text cut by the edge, 708 to 723 |
| V15 | 1366 by 648 | 624 | **460**, 460 | 164 | the Compare opener: content reaches 646 of 648 and more follows below |
| V16 | 1440 by 900 | 876 | **482**, 482 | 394 | the door lines: text cut by the edge, 889 to 910 |
| V17 | 1920 by 960 | 936 | **506**, 506 | 430 | the door lines: text cut by the edge, 942 to 963 |

The runner's false-floor test is now the contract's own reserve: below the last door CTA, visible content must reach into the bottom 24px and more content must lie beyond the edge, and only content counts — text, images and painted hairlines, never a container's background fill. Every fold row passes it, and `qa/fold.md`'s Next band evidence names the piece at each row. The first build passed V16 on `section.closer`'s bottom padding and about 4px of empty leading, which is the false floor the studio critic read by eye, and failed V17 outright once the runner was corrected.

The pull-out inside the first screen, measured (anchor bottom; the three row bottoms; the foot line):

| Row | Anchor bottom | "Where and how" | "The day" | "In-person time" | Foot line | Verdict |
|---|---|---|---|---|---|---|
| V13 1024 by 768 | 446 | 557 | 678 | **746 complete** | 755 to 780 (text 760 to 775) | whole, 22px inside the screen, 2px inside the reserved headroom |
| V14 1280 by 720 | 468 | 555 | 651 | **695 complete** | 703 to 728 (text 708 to 723) | whole and inside the 696 limit |
| V15 1366 by 648 | 536 | not rendered | | | | the Compare opener and the table's title take the screen instead |
| V16 1440 by 900 | 566 | 654 | 752 | **796 complete** | 804 to 828 | whole, 80px inside the limit |
| V17 1920 by 960 | 598 | 702 | 816 | **876 complete** | 884 to 908 | whole, 60px inside the limit |
| V11 768 by 1024 | 622 | not rendered | | | | the comparison's title at 665 and its rows run past the fold |
| V2 375 by 629 | 876 (second screen) | not rendered | | | | the door lines cross the fold; the comparison follows the anchor |

Page height: 3874px at 1440 by 900 (4.30 screens, from 3913 and 4.35), 3781 at 1280 by 720, 3988 at 1920 by 960, 6341 at 390 by 844 (7.5 screens, from 7029), 6409 at 375 by 629 (from 7156). The phone page is 747px shorter because the three duplicated rows no longer render there.

Height bands (`--fold-density`, K10 T-K10-8): compressed below 940px tall (masthead top 16, h1 to the standfirst rule 16, standfirst to doors 24, door bottom 16, doors to the anchor 24, anchor to the lines 32 on phones and 16 from 900); a short band at or under 799px (doors gap 16, door bottom 8, and from 900px wide: masthead top 8, doors gap 8, anchor gap 8, the door label and name on one line, the pull-out's head tightened); a tighter sub-band at or under 639px (masthead top 8, doors gap 8, lines gap 16); relaxed from 940px (top 32, doors gap 32, anchor gap 32, and the pull-out's rows at 16px rather than 8). Compact doors run at `(max-width: 767px) and (max-height: 799px)` and at every width from 900px; the landscape recipe at `(min-width: 600px) and (max-height: 400px)`; the pull-out at `(min-width: 900px) and (min-height: 700px)`.

## Decisions applied

| Id | How it is applied in this mock |
|---|---|
| G0.5 items 1 to 6 | Umbrella sentence as the h1; no speed figure; no accreditation claim or mark; "Tuition on request. Ask admissions." in the Georgetown tuition cell; Guides everywhere; the provenance line once, as the standfirst (checker R18) |
| DD-01, DD-36 | Three faces, three jobs: Literata for the h1, h2s, door names, column heads, the anchor, facts, steps lead, link rows and the closing line; Inter Tight for labels, lines, cells, standfirst, sources, footer facts, utility links; Inconsolata for buttons, step counters and the phone number. The only uppercase on the page is the labels and the buttons |
| DD-04 | Cue set: text label ("In person" / "Online"), full school name, position (Georgetown first); no icon and no photograph (Taste decisions 2, Flagged slots) |
| DD-05, DD-23 | "Explore the Georgetown campus" / "Explore GT Anywhere" on the first screen (`first_screen`) and again under the table with their labels (`after_comparison`) |
| DD-06, DD-43, R6 | Real `<table>`s with `caption`, `scope="col"` and `scope="row"`, explicit ARIA roles; shared rows first with the value repeated in both columns; the table form from 900px (measured: 326px cells at 900, the longest cell four lines), two-up stacked blocks from 768 to 899, stacked blocks below, every cell labelled with its school name |
| DD-07, DD-17, MD-16 | No outcome figure, no accreditation, no Cognia mark; every figure on a register row. The sources sentence appears twice, under the comparison table and under the proof strip, which is what `copy.md` section 4 asks for; the first screen, which states three registered figures in the pull-out, carries a "Sources" link into that sentence in its foot line, and two proof facts carry their evidence on the label itself (Admissions, Guides). The first build claimed the sentence sat under both tables, which was false and is corrected here (both critics) |
| DD-08, DD-31, DD-42 (a), RF-25, AD-11 | No photograph; the photographed state specified under Assets |
| DD-10, MD-06, MD-25 | Selectivity as the stated bar (Admissions row, proof fact, steps lead); access (TEFA, $10,400) in the same table and the TEFA box; the tuition figure in the prose face with `tabular-nums` only; no wealth cue, no countdown |
| DD-12, DD-13, MD-11 | Header: lockup, "Current families", "Contact admissions"; no menu; the phone number only in the footer; not sticky |
| DD-14, MD-23 | Built at 375 first; doors stacked Georgetown then Anywhere; nothing sticky |
| DD-19 | Style envelope: every value a token or a named departure (Departures) |
| DD-21 | Doors are `<ul><li>` on the first screen and after the comparison; a third campus is a third `<li>` (the pair grid becomes `auto-fit`) and a third `<th scope="col">` with a third cell per row; designed for, not demonstrated (no copy exists) |
| DD-25, DD-27, REQ-070 | Two "Begin application" links with `?school=`; full school names; no unscoped application link |
| DD-26, K6 section 5b | Both doors identical in markup and treatment; CTAs share one baseline in the pair (`margin-top: auto`); the first-screen CTA bottoms are identical on every row from V10 up (`qa/fold.md`) |
| DD-29 | Every screen carries a fact: the first screen carries the door lines everywhere and, from 900px wide and 700px tall, the pull-out's three compared rows whole |
| DD-38 (b), R5 | Layer-2 type scale and `--leading-prose` throughout; the h1 clamp kept at `--text-3xl` on every row but the landscape one; line counts computed and measured above |
| DD-39 (a), RF-07 | `--color-on-navy` (CTA text, footer), `--color-text-muted-on-dark` (footer facts; a new tint, DD-19 departure), `--color-focus-on-dark` (outer band of the footer ring); accent never as text |
| DD-44 | The fold measured by the runner at all 19 rows; height bands; `data-fold` hooks; no `vh` anywhere |
| MD-02, R14, REQ-002 | Four secondary CTAs including "Ask about a tour of the Georgetown campus" |
| MD-17 | The provenance line once, as the standfirst under the h1, muted, `--text-sm` |
| MN-16 (a), RF-53, R8, R9 | No `transition`, no `@keyframes`; state changes instant; `--duration-none` on every element and pseudo-element under reduced motion; smooth anchor scroll only under `no-preference` |
| D-031, D-039 | Still direction; nothing needs D-031; no script, no inputs, no `data-d039` declaration |
| D-015 (c) | TEFA module visible to everyone, `data-region-source="default"` |
| K3 sections 5c to 5g | Pairings in the contrast table below; focus `--color-focus` at 2px offset on light surfaces; the two-colour ring (2px `--color-navy` inner band, 2px `--color-focus-on-dark` outer band) on the footer and the skip link; `forced-colors` outlines in `CanvasText` and borders on the CTAs, the plate and the TEFA box |
| K12 F41, G15 | Buttons in the estate's face and case: Inconsolata 600 uppercase, `.5rem` radius, 44px floor, navy fill with on-navy text; outlined for the second tier |
| K1 section 5a (Option, R15) | Margin schedule 24 / 32 / 48 / 64; content box 1312px at 1440 and 1920 (K10 T-K10-7) |
| SE-13 | `noindex, nofollow` |
| REQ-022, DEL-018 | Six figures, six register rows, all "Unverified, public" (Claims register tags) |
| REQ-024, R7 | Phone rows V2 to V8 with 24px headroom stand in for the in-app browsers until measured |

### Layer-2 tokens used (proposed; each named here as the contract requires)

| Token | Where | Register row |
|---|---|---|
| `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-btn` | Every type size | DD-38 (b), R5 |
| `--leading-prose` 1.5 | Door lines, run-in lines, standfirst, table cells and row labels, anchor, facts, steps lead and rows, TEFA body, families line, sources, footer facts, closing line | DD-38 (b), RF-58 |
| `--measure-prose` 65ch | Standfirst, door lines, anchor, steps, link rows, families line, sources, TEFA box | DD-38 (b), RF-55 |
| `--color-on-navy` | CTA text on the navy fill; footer text, links and phone; the outlined CTAs' hover text | DD-39 (a), RF-07 (existing swatch in a new role) |
| `--color-text-muted-on-dark` | Footer facts block | DD-39 (a), RF-07 (new tint, DD-19 departure) |
| `--color-focus-on-dark` | Outer band of the two-colour ring on the footer and the skip link | DD-39 (a), RF-07 (existing swatch in a new role) |
| `--duration-none` | Reduced-motion block | MN-16 (a), RF-53, R8 |

Not used: `--color-accent-text`, `--color-border-strong`, `--color-on-accent`, `--ease-standard`, `--ease-out`, `--ease-in` (nothing transitions). Every `var()` in `styles.css` resolves to a token in `tokens-v2.css` or to one of the mock's own eight custom properties defined in `styles.css` (`--page-margin`, `--section-pad`, `--fs-top`, `--fs-h1-gap`, `--fs-doors-gap`, `--fs-door-bottom`, `--fs-closer-gap`, `--fs-lines-gap`), each of which resolves to a space token.

## Colour and contrast (WCAG 2.x ratios, K3 sections 5c to 5e, computed there on 2026-09-11 from the token values)

| Pairing | Where | Ratio | Threshold |
|---|---|---|---|
| `--color-text` on `--color-bg` | h1, names, cells, facts, steps, link rows, sources, row labels | 17.69 | 4.5 text; K3 CS3's 7 for prose |
| `--color-text` on `--color-surface` | striped rows, the application band | 16.10 | 7 prose |
| `--color-text` on `--color-anywhere-tint` | TEFA box | 16.30 | 7 prose |
| `--color-text-muted` on `--color-bg` | eyebrows, standfirst, cell labels on the stacked forms, step counters, the closing line (short strings, never a paragraph) | 6.25 | 4.5 |
| `--color-text-muted` on `--color-surface` | eyebrows on the application band, cell labels on striped stacked rows | 5.69 | 4.5 |
| `--color-on-navy` on `--color-navy` | CTA labels, footer links and phone | 14.58 | 4.5 |
| `--color-text-muted-on-dark` on `--color-navy` | footer facts | 7.81 | 4.5 (AAA) |
| `--color-navy` on `--color-bg` / `--color-surface` | outlined CTAs and their borders | 13.88 / 12.63 | 4.5 text, 3 border |
| `--color-focus` on `--color-bg` / `--color-surface` | focus ring on the light surfaces | 8.20 / 7.46 | 3 |
| `--color-focus-on-dark` outer band against navy; `--color-navy` inner band against the light plate | ring on the footer, the GT School plate included | 14.58 / 13.88 | 3, one band per ground (K3 F10) |
| `--color-text-muted` underline on `--color-bg` | link underlines at rest | 6.25 | 3 graphical |
| `--color-text` rules | standfirst rule, kicker rule, column-head rule | 17.69 | 3 graphical |
| `--color-accent` rules on `--color-bg` / `--color-surface` | the masthead rule; the "Admissions" opener rule, which sits on the surface band | 2.38 / 2.17 | decorative (K3 section 5f); the eyebrow text and the header bar are the cues |
| `--color-text` 2px rules on `--color-bg` | the Compare, Proof and Connect openers; the standfirst rule; the pull-out's bounding rules; the column-head rule | 17.69 | 3 graphical, met |
| `--color-border` hairlines on `--color-bg` / `--color-surface` | door list, table rows, pull-out rows, sections, facts, steps, link rows | 1.56 / 1.42 | decorative; every control is identified by its own fill or underline (K3 CS12). The first build labelled the 1.42 figure as the ratio on `--color-bg`; 1.42 is the ratio on `--color-surface` and 1.56 the one on `--color-bg` (studio critic) |

Palette usage: one dark section (the footer, CS6 count stated and held); the accent is spent once per screen, which the first build did not do and this file wrongly claimed it did. Measured at 1280 by 720, the four section openers sat 971, 2135, 2726 and 3144 down the page, so Proof to Admissions was 591px and Admissions to Connect 418px and two accent rules shared a screen at V13, V14, V15, V16, V17 and at V2 — not only at V17. Now the accent has exactly two uses on the page: the 2px rule under the masthead, which is the first screen's one use, and the rule under the "Admissions" opener, the page's conversion moment, which at 1280 sits 2569px below the masthead rule (measured: the header's bottom at 56, the Admissions eyebrow at 2625) and 4370px below it at 375, so no screen at any matrix row can hold both. The Compare, Proof and Connect openers take the same 32 by 2px rule in `--color-text` (17.69), which is the device unchanged in a neutral colour. The accent is never text and never on navy; `--color-surface` on the odd table rows and the application band; text on navy off-white, never pure white (CS7).

## Motion spec

| What | Trigger | Duration | Easing | Reduced motion |
|---|---|---|---|---|
| Nothing animates. No `transition`, no `@keyframes` in `styles.css` | | | | |
| V1 door and row state: CTA fill darkens to `--color-text`; outlined CTAs fill navy; link underlines change from the muted colour to `currentColor` | Hover | Instant (0 ms) | none | Unchanged, state visible |
| V3 focus: 2px `--color-focus` ring at 2px offset; two-colour ring on the footer and the skip link; the skip link appears by `transform: none` | Focus | Instant | none | Unchanged |
| V10 anchor scroll to `#compare` | Click on the anchor sentence | Native `scroll-behavior: smooth`, declared inside `prefers-reduced-motion: no-preference` only | Browser | `scroll-behavior: auto` |
| Reduced-motion block | | `transition-duration` and `animation-duration` forced to `--duration-none` on every element and pseudo-element; the runner reports every computed duration 0s at V14 | | |

No V6 and no V8: the brief's Motion row asks for stillness, so everything is visible at rest and the page is complete without a script. The stillness is the direction: a journal does not move.

## Assets

| Asset | Where | Alt | Consent | Fallback |
|---|---|---|---|---|
| `../shared/img/gt-school-logo-h.svg` (139 by 32) | Header lockup on `--color-bg`, 27.6px tall at 360 to 32px from 800 (`clamp`, K12 V2's 27px floor); footer, on a `--color-bg` plate inside the navy panel, 28px tall | "GT School" | Brand mark published by GT | none needed |
| `../shared/img/gt-anywhere-logo-h.svg` (252 by 48; white lettering, orange mark) | Footer, directly on the `--color-navy` panel, 32px tall | "GT Anywhere" | Brand mark published by GT | none needed |
| Photographs | None. Default state per DD-42 (a) and RF-25: every file in `ASSETS.md` shows identifiable children and no written permission exists | | | The default state is the fallback |

Both marks load eagerly (no `loading="lazy"`): the GT Anywhere mark appears only in the footer and a lazily loaded copy was missing from M06's first full-page capture; two SVGs of 8 and 10 KB gain nothing from lazy loading (checker R13 exempts SVG logos). Photographed state, specified for after RF-25 and not built: a captioned two-up `<figure>` pair below the proof strip at 3:2, `georgetown-guide.webp` (1440 by 960) at `object-position: 50% 50%`, at most 720 CSS px wide (R13: 720 × DPR 2 = 1440), caption "A Guide teaches at the whiteboard." from `copy.md` section 9, alt from `ASSETS.md`; beside it a Nari-confirmed GT Anywhere photograph whose caption is recorded in section 9 before use; parity enforced, both or neither (DD-42). Consent status for any photograph: "published by GT on its own site, consent to be confirmed by Nari (AD-11)". Open Graph carries title and description only; no share image while the default state holds (`copy.md` Head).

## Departures

| # | Departure | Reason |
|---|---|---|
| 1 | Compact-door threshold at 800px tall on phones, not the contract's 700 | The door lines are three lines (73 to 76px) at 16 to 17px in every phone column up to 430px, so with the lines inside the doors V5 would end at about 711 of 691 and V8 at 719 of 715; V6 (839) and V9 (844) keep the lines inside the doors |
| 2 | h1 at `--text-xl` on the landscape row (V10) across the full column, the 35ch cap lifted | CONTRACT section 2's phone-landscape recipe, which permits the one-token step for one row; measured 3 lines (83px) and CTA bottoms 293 of 318 |
| 3 | h1 across nine columns from 1024 to 1279 (the brief says eight) | Eight columns at 1024 are 608px and the estimator and the browser both set five lines (222px); nine columns (688px) set four (178px), the same measure M03 used at 1024. Eight columns hold from 1280, where they are 779px |
| 4 | Header 90px below 390px wide (two 44px utility rows plus the 2px rule); 56px from 390 | The mark at its 27px floor (120px wide) plus both links at `--text-xs` need 325px at 375, two more than the column; stacking the links keeps the mark's size (M03's first-round Continuity finding was a 20px mark). The nav also wraps under the mark at a doubled root font rather than printing over it (M06's first-round Craft finding); `qa/V2-rootx2.jpg` |
| 5 | The two door lines exist twice in the DOM: inside each door (shown from 800px tall on phones and at every tablet row, 768 to 899) and as two run-in paragraphs (shown on phones under 800px tall, on the landscape row, and at every width from 900, where `order` places them after the pull-out). Exactly one copy is displayed at any viewport, and the DOM keeps the run-in pair beside its doors, so the reading and focus orders stay doors, lines, anchor, pull-out | The compact door rule needs both lines to follow the second CTA; no CSS moves a paragraph out of one list item past another without `display: contents` on `<li>`, whose list semantics are unreliable in assistive technology (M03 and M06 took the same route) |
| 6 | Comparison breakpoint 900px, with a two-up stacked form from 768 to 899 (the five earlier mocks used 767) | R6: at 900 the table form gives 326px cells with the longest cell on four lines; below it the cells fall under 300px and five lines. Between 768 and 899 the row label spans both cells and the two school cells sit side by side on the brief's two-column grid |
| 7 | `--color-text-muted-on-dark` (#a3bfcb in `tokens-v2.css`) on the footer facts block | New tint proposed under DD-39 (a), RF-07; 7.81 on navy. DD-19 departure |
| 8 | The masthead's bottom rule is 2px `--color-accent`; the brief's Composition row calls the rule under the masthead a `--color-border` hairline while its Colour row names it the first screen's one accent use | The Colour row is the colour authority; the rule is decorative (2.38 on bg, K3 section 5f), the header bar itself is the boundary cue |
| 9 | The pull-out's kicker "A closer look" sits in its corner cell and the compare anchor sentence is a paragraph before it, not a caption | Checker R19 requires `href="#compare"` to precede the first `<table` in the source, and a caption is inside the table. The anchor introduces the pull-out; the kicker names it from the label column, on the line that carries the two school names, which is one line of height rather than two (Departures 26) |
| 10 | The compare section's h2 "Compare the two schools" is visually hidden; the table caption "Georgetown Campus and GT Anywhere, side by side" is the visible title | So the eyebrow, the heading and the caption do not say "compare" three times in a row (M03's choice); both remain in the accessibility tree |
| 11 | The four fact modules carry labels: "Admissions", "Mastery", "Guides", "Two ways to attend". Three are fixed slots reused (two table row labels, one allowed section 1 heading); "Mastery" replaces the first build's "Same school, same academics", which named a table row rather than the fact beneath it | Exeter's shape asks for a label on every figure and `copy.md` had no fact labels. The words were admitted (all four are deck strings) but the placement was not, because the deck's precedent is a section 9 row per brief: that row now exists in `copy.md` section 9 for M02, naming all four labels and the "Sources" link label, with "Mastery" justified as the deck's own word for the fact it labels (studio critic, fix 6). Still flagged for Nari under Flagged slots |
| 12 | The sources line's five source phrases are links (anywhere.gt.school/academics, www.gt.school/academics, anywhere.gt.school/intensives, www.gt.school/terms-of-use), with `outbound_school_site` events; the sentence is unchanged | C04's linked form, which the brief cites for the proof strip; M06 shipped the same after Astra's Mission finding. Inline footnote links are exempt from the 44px rule under WCAG 2.5.8's inline exception |
| 13 | Table roles (`role="table"`, `rowgroup`, `row`, `columnheader`, `rowheader`, `cell`) on both tables | The stacked forms set `display: block` and `grid`, which strip native table semantics in some accessibility trees; the roles keep them (M06 departure 8) |
| 14 | Row labels in `--color-text` (the brief's Typography row says `--text-sm` labels; the colour role for muted labels is the contract's) | A row label is read, not scanned; at 14px on the stripes the muted role would sit at 5.69 for a load-bearing string. The eyebrows stay muted |
| 15 | Door name at `--text-lg` (CONTRACT section 3 says `--text-xl`) | The brief's Typography row is binding and says `--text-lg` |
| 16 | Eyebrows and cell labels in Inter Tight 500, buttons in Inconsolata 600 uppercase | The contract's Inter Tight option for labels, as the brief specifies; the estate's button face and case (K12 F41, G15), which M03's critics costed under Continuity when sentence case shipped |
| 17 | Section padding `clamp(48px, 1rem + 3vw, 64px)` (M01's grid says `--space-9` to `--space-11`), the first screen's bottom gap 24px (0 where the pull-out is absent), footer padding 64 | C29: at the brief's padding the page was 4.7 screens at 1440 by 900; at this padding, with the footer links in two columns, 4.30 (3874px), and 6409px at 375 against 7156 before the pull-out was gated off the phone. The hairlines between sections carry the separation; four screens exactly would need the comparison itself shortened, which the direction refuses |
| 18 | Literal lengths: 1px hairlines and rules, the 2px accent rules (`--space-1`), the 44px target floor, the 56px header, 35ch and 12rem on the h1, 48ch on the footer facts, 20ch on the h2s, column widths 22 / 39 / 39 percent, letter-spacing .08em, underline offset .18em, mark heights 27.6 to 32px, 28px and 32px | Not in the token set (BUILDER-BRIEF rule 14 governs colour, type, space, radius, shadow and duration, all tokens here); tracking inside the contract's 0.06 to 0.08em |
| 19 | Breakpoints and height bands: 390, 600, 640, 768, 900, 1024, 1280, 1440 wide; 400, 639, 759, 799, 940 tall | The header stack, the landscape recipe, the fact grid, the brief's tablet and laptop grid, the measured table breakpoint, the h1's column count, the margin schedule; the compact door rule, the tight sub-band, the short-laptop sub-band, the relaxed band |
| 20 | `container-type: inline-size` on the masthead | For the container query that releases the "from anywhere." binding at a doubled root font; no other effect |
| 21 | The eager footer marks (BUILDER-BRIEF rule 13 says lazy except the first screen) | Assets above |
| 22 | The footer links in two columns from 768 (five columns of twelve from 1024), the facts block on four columns | The seven-link column was the tallest block in the footer (308px); two columns bring the footer to about 290px and the page nearer four screens |
| 23 | Skip link "Skip to main content" | The one `copy.md` section 9 string used (checker R9) |
| 24 | **The pull-out renders only at 900px and wider and 700px and taller.** The brief's Composition row puts the excerpt on the phone's second screen and its Conversion row lands the anchor there; below the threshold neither the pull-out nor its foot line is in the accessibility tree | Both critics scored Composition 3 on the same defect and asked for the same gate. Measured on the first build: at V15 nothing of the excerpt landed, at V14 one row landed with its bottom inside the reserved headroom, and on the phone three stacked rows cost 714px of a 7156px page for rows that reappear verbatim at 1619 (C29, Astra). The gate is the honest rule — the object renders where it is whole and nowhere else — and it takes 747px off the phone page. It needs the brief's Composition and Conversion rows amended, which is the director's and Nari's call, not this build's |
| 25 | **The compact door rule runs at every width from 900px**, not only on phones: label, name, CTA in each door, the two supporting lines following the pull-out as run-in paragraphs in the doors' own two columns | Astra asked for it at the short laptop ("moving supporting paragraphs after the excerpt if necessary"), and it is what brings all three unchanged rows inside 720px at V14. Keeping it at the tall rows as well gives every laptop row one composition and one continuation cue: a sentence cut mid-line at the bottom edge, which is the cue the studio critic scored as true on the phone. The cost is that the door's line no longer sits between its name and its button at V16 and V17; the label, the full school name and the destination-naming button still do the routing work, as they do on every phone row |
| 26 | **The pull-out is its own object**, not the comparison table's design: no stripes, 16/42/42 columns, Literata cells, tracked eyebrow labels and school names, a `--color-text` rule above and below, and the kicker in the corner cell instead of a caption above the table. The strings are the brief's exactly | The brief says "a three-row excerpt of the comparison ... with the deck's exact labels and cells", which fixes the copy, not the treatment. Both critics found that treating it as the same table made it read as a preview of the object 200px below rather than as the page's argument |
| 27 | The short-laptop composition at 900px and wider, 700 to 799px tall: the door's label and name share one line, masthead top 8, doors gap 8, anchor gap 8, the pull-out's head row tightened to 4px | Astra's ask, measured: it takes 44px out of the first screen, which is what puts row 3 at 695 of the 696 limit at V14 and 746 of 768 at V13. Prose stays at 1.5 and every control keeps its 44px floor |
| 28 | The seam between the first screen and the comparison closes where the pull-out cannot render: `.first` bottom padding 0, the compare section's top padding 8 below 900px and 24 at 900px and wider under 700px tall, and the compare opener-to-title gap 8 below 900 | The anchor sentence introduces the comparison, so a tight seam is the composition, not a saving; it is also what puts the Compare opener (V6, V15) or the table's title and first rows (V11, V12) inside the first screen, so the screen ends on the comparison rather than on blank page |
| 29 | The table stripe is painted on the cells with an 8px `box-shadow` plate at the page edge rather than as a row fill flush with the text | The studio critic read the flush fill as clipped to the text. A shadow with no blur and no spread extends the fill 8px horizontally without moving anything, so the rules stay on the cells at the text edge and keep their alignment with the door rule above (the first build removed an 8px bleed for exactly that reason) |
| 30 | Two proof-fact labels ("Admissions", "Guides") and the pull-out's "Sources" label are links whose 44px target grows into the surrounding padding with a negative block margin | Astra's Mission fix: link the labels that have a permitted destination in `copy.md`. The negative margin keeps the label's line where the module's rhythm puts it while the target still measures 44px (2.5.5), rather than settling for 2.5.8's 24px |
| 31 | The footer's GT School mark is 32px (it was 28px) | K12 V2 requires horizontal marks at 32px at 1440 and never under 27px at 390; `0_plan/mockups/shared/CONTINUITY.md` measured this mock at 28px and flagged it. Both footer marks are now 32px |
| 32 | The section-opener rules are `--color-text`; only the "Admissions" opener keeps the accent | CONTRACT section 4's one accent use per screen, which the first build broke at every laptop row. Measured distances in Colour and contrast below |

## Taste decisions the brief did not name

| # | Decision | Reason |
|---|---|---|
| 1 | Buttons uppercase Inconsolata 600, `.5rem` radius, navy fill; outlined navy for the second tier (application, family hub) | The estate's own button (K12 F41, G15); two tiers, explore (filled) and apply or go (outlined); secondary CTAs are text rows, a third tier |
| 2 | No door icon | The brief's door is label, name, line, CTA; a journal carries no pictograms, and two marks on the first screen would compete with the one accent rule (K3 section 5f). Label, full name and position carry the cue (K3 CS10, CS11) |
| 3 | Door CTAs full width on phones, inline (auto width) from 768 | At 375 the Georgetown label needs 294 of 327px, so a full bar aligns both; in the pair, auto width keeps the buttons proportionate to the column and the two share one baseline |
| 4 | "in-person" bound in the two door lines (`span.nb`) | At 1280 the Anywhere line split "in-" / "person" at the hyphen; no character changes |
| 5 | The comparison table's column heads in Literata `--text-md` over a 1px `--color-text` rule; the pull-out's head row in tracked Inter Tight 500 with the kicker in its corner cell, between two `--color-text` rules | Two objects, two treatments: the table is a register, the pull-out a reading. The `--color-text` rules on the first screen (standfirst, the pull-out's two bounds) are the structure; the accent rule is the masthead's alone |
| 6 | Stripes on the odd rows only, bled 8px past the text at the page edge by a box-shadow on the outer cell, a `--color-border` rule closing the table; the text and every rule stay flush with the page's left edge | The first round bled the stripes by moving the table, which broke the rules' alignment with the door rule; the shadow gives the plate its 8px without moving anything (Departures 29). The pull-out has no stripes at all |
| 7 | The pull-out's foot line: the "Sources" link at the left in the label face, the closing line right-aligned in Literata Italic `--text-sm`, both on one row under the closing rule | A journal's footnote and "continued" line on the same rule. Putting the evidence link here sources the screen that carries three registered figures and costs no height (studio critic, fix 3; Astra's Mission row) |
| 8 | The anchor sentence in Literata `--text-md`, underlined in the muted colour, `currentColor` on hover, a 44px target | The hinge ranks above the standfirst and below the door names; an underline says link without a button |
| 9 | Label-column grid (eyebrow and h2 in columns 1 to 4, content in 5 to 12) for Proof, Admissions and Connect; the comparison spans all twelve | One skeleton repeated (Barnes); the table needs the width so its cells clear 45 characters |
| 10 | Facts in a two-by-two grid with no column gap, the gutter as padding, so the rules run continuous across both modules | M03's first-round Craft finding was door rules broken at the gutter |
| 11 | Steps numbered by CSS counters in Inconsolata 600 `tabular-nums`, hairlines between; the lead in Literata `--text-md` | The deck's numbering without figures in the DOM text; the figure face for figures |
| 12 | Link rows in Literata `--text-md` with a mono arrow at the right, hairlines between (a COLLINS row) | The one place the serif carries a link, to separate "ways to connect" from the mono action buttons |
| 13 | The families band as one row: heading and sentence left, outlined button right; no eyebrow | The lowest-ranked section (K1 section 5c); one sentence, one action |
| 14 | Surfaces: the application band on `--color-surface`, everything else `--color-bg`, the footer navy | Adjacent sections differ (table below); one dark surface, counted (K3 CS6) |
| 15 | TEFA as a boxed aside on `--color-anywhere-tint` beside the sources, under the GT Anywhere column | The note belongs to GT Anywhere; the tint is its cue with the name as the second cue (K3 CS11) |
| 16 | Doors repeated under the table as label plus CTA only | DD-23's repetition as a closing row; the first screen keeps the only full statement of the doors |
| 17 | `text-wrap: balance` from 768, `pretty` below with the "from anywhere." binding | Four balanced lines on tablets and laptops; on phones `pretty` had no visible effect in Chromium, so the span carries the orphan rule |
| 18 | Margin schedule 24 / 32 / 48 / 64; content 1312px at 1440 and 1920 | K1 section 5a's option; the content box does not grow past 1440 (K10 T-K10-7) |
| 19 | The empty corner cell is a `<td>` | No word in `copy.md` labels it and none is needed |
| 20 | Stacked table form: the row label as the block's heading, then the two cells each opened by the school name in the eyebrow style; two-up from 768 | The school name on every cell (R6, `copy.md` section 3) in one label vocabulary |

### Section weights (K1 section 5c adjacency, filled in for this mock at 1440)

| § | Section | Surface | Top type step | Density | Span | Adjacent pair differs on |
|---|---|---|---|---|---|---|
| 1 | Masthead and doors | bg | 46px h1 | low | h1 8/12, doors 6 + 6 | |
| 1b | A closer look (the pull-out) | bg, no stripes, bounded by two `--color-text` rules | 15px tracked heads, 18px Literata cells | medium, 3 rows | 12/12 | 1 to 1b: type step, density, rule weight |
| 3 | Comparison | bg, striped rows | 34px caption, 20px serif heads | highest, 9 rows | 12/12 | 1b to 3: type step, density, face (Literata cells against Inter Tight), stripes against rules, head treatment. The first build's own adjacency note conceded that only two properties differed here; five do now |
| 4 | Proof | bg | 34px h2, 24px facts | medium, 4 modules | 4 + 8 | 3 to 4: type step, density, span |
| 5 | How to apply | surface | 34px h2 | low, 4 lines | 4 + 8 | 4 to 5: surface, density |
| 6 | Questions before you apply | bg | 34px h2 | medium, 4 rows | 4 + 8 | 5 to 6: surface, density |
| 7 | Current families | bg | 24px h2 | lowest | 12/12 | 6 to 7: type step, density, span |
| 8 | Footer | navy | 15px | high but muted | 3 + 4 + 5 | 7 to 8: surface, type step, density |

## Continuity: the shell, named, and the estate, measured

Every shell block now carries its name from `1_spec/04` section 3 as a `data-component` attribute, so the claim that the
school sites could inherit this shell can be checked in the DOM rather than taken on trust (studio critic, Continuity).
No visual change: the attribute paints nothing.

| Block in `index.html` | `1_spec/04` section 3 name | Attribute |
|---|---|---|
| `header.header` | Header (landing) | `data-component` |
| `ul.doors`, `ul.doors--again` | Door list | `data-component` |
| `li.door` (four in all) | Door card | `data-component` |
| `a.cta` on the first screen | CTA | `data-component` |
| `table.ctable--full` | Comparison table | `data-component` |
| `ul.facts` | Proof strip | `data-component` |
| `aside.tefa` | TEFA module | `data-component` |
| `div.footer__facts` | Facts block | `data-component` |
| `footer.footer` | Footer | `data-component` |

Five blocks have no entry in that inventory and are marked `data-component-proposed` as additions for `1_spec/04`:
**Compare anchor** (the hinge sentence, checker R19), **First-screen pull-out** (this direction's object), **Application
steps** (the four numbered rows), **Secondary link rows** (the `copy.md` section 6 list), **Current families band**.
`Umbrella lockup`, `Campus switcher`, `Schedule visual`, `Decision helper` and `Accordion` are in the inventory and not
used here.

Against `0_plan/mockups/shared/CONTINUITY.md`, the first measured capture of the destination chrome (the repository's own
mirror of anywhere.gt.school; gt.school has no mirror, so the Georgetown handoff stays unverified and this mock does not
claim it):

| Property | The estate, measured | This mock | Why the difference is deliberate |
|---|---|---|---|
| Ground, text colour, families | `rgb(252, 244, 239)`, `rgb(0, 17, 23)`, Literata / Inter Tight / Inconsolata | the same tokens | Match |
| Heading weight and tracking | Literata 300, letter-spacing −1.6px at 58.5px | Literata 400, normal tracking, 46px at 1440 | DD-38 (b) makes 400 the working default and this build ran the test the register asks for: `qa/h1lines.py` sets the fixed sentence in 300 and in 400 and the line count does not change at V2 or V16, so 400 ships for the reason M03 shipped it — the umbrella sentence here is a reading line capped at 35ch, not a 58px display line, and 300 at that size on cream loses stem weight. Known and argued, not an oversight |
| Button weight and size | Inconsolata 500 at 16px | Inconsolata 600 at `--text-btn` (17 to 18px) | `0_plan/mockups/shared/fonts.css` ships Inconsolata 400 and 600 only, so a 500 button cannot be claimed without adding the face; the contract's 600 is the estate's case and face at a legible size |
| Button fill | navy on the first screen, accent orange in the footer | navy fill on light surfaces, `--color-on-navy` on navy | DD-46 settles this in favour of the contract's surface-dependent fill, and the estate's own first screen is navy. Unchanged here on purpose: K12 F87 measures the near-white label on that orange at 2.50, so copying the footer button would import a contrast failure |
| Horizontal mark sizes | K12 V2: 32px at 1440, never under 27px at 390 | header 27.6px at 360 rising to 32px from 800; both footer marks 32px | The footer's GT School mark was 28px and is now 32px (Departures 31) |
| Hero surface | grained cream with line artwork and a composited photograph of an identifiable child | flat `--color-bg`, no photograph | DD-42 (a) and AD-11: no file is usable before written permission. The grain and the artwork are noted as unmatched, not as matched |

## Flagged slots

| Slot | Default shown | Flag |
|---|---|---|
| Lockup | The real `gt-school-logo-h.svg` | Q-001: Holly's unifying element may be added beside it |
| "Current families" destination | https://community.gt.school (header, families band, footer) | Q-002 |
| Application steps, same for both schools | The four `copy.md` steps | Q-007 |
| Georgetown tuition | "Tuition on request. Ask admissions." | Q-011 decided (G0.5 item 4); figure awaited |
| After 8th grade | The shared sentence, repeated in both columns (DD-43) | Q-013 |
| Intensive weekends logistics | "Four intensive weekends a year in Georgetown." | Q-017; CR-032 |
| Outcome figure | Absent | Q-019, G0.5 item 2; never on the page |
| TEFA window, owner, expiry | Module shown to everyone with the `copy.md` body | Q-021; D-015 (c) |
| Accreditation | Absent | Q-033, G0.5 item 3; never on the page |
| Parent quote | None | Q-034 |
| Title for the adults | Guides; "advisor" only as the `data-type` value the spec names | Q-035 decided |
| Secondary CTA destinations | www.gt.school/contact and anywhere.gt.school/academics | MD-02 HubSpot link TBD; R14 tour label; REQ-002 |
| Application links | `apply.gt.school/?school=georgetown|anywhere` | DD-25 convention; the live parameter is confirmed in S5 |
| Figures | 90th percentile (CR-011), $10,400 (CR-021), four weekends (CR-032), 9 to noon and about two hours (CR-033), two to three hours (CR-034), weekly check-ins (CR-035) | All "Unverified, public"; CR-021 and CR-022 conflict on TEFA coverage; no cohort number (CR-025, CR-026 conflict) |
| Fact labels | "Admissions", "Mastery", "Guides", "Two ways to attend" | Now registered in `copy.md` section 9 with the "Sources" link label; still proposed for Nari; Departures 11 |
| Door icon | None | DD-04 cue set reduced to label, name, position; Taste decisions 2 |
| Kicker and caption arrangement | Anchor paragraph, then the pull-out with "A closer look" in its corner cell | Departures 9 and 26 |
| Photographs and captions | None; the photographed state under Assets | DD-42, RF-25, AD-11 |
| Scripts | None | D-039 escalated; the no-JavaScript state ships |
| Display weight | Literata 400 | DD-38 tests 300 against 400 in this wave; the estimator finds no line-count change at V2 or V16 |
| Comparison breakpoint | 900px, measured on this content | R6 |
| Live side-by-side with the school sites | Not produced here; `0_plan/mockups/shared/CONTINUITY.md` now measures the Anywhere chrome from the repository's own mirror and is the reference (Continuity below). gt.school has no mirror and stays unverified | This build may not open gt.school or anywhere.gt.school |

## Claims register tags

All six rows are "Unverified, public" in `0_plan/12-claims-register.md`: usable in a mock (G0.5), blocked for production until Nari approves the wording (REQ-022). Counts are `check-claims.py`'s own and match the page: the first build pasted CR-032 at 3 and explained the gap as the checker's tag stripping reading `span.nb` as a double space, but the committed tool collapses whitespace after stripping tags (`visible_text()`, `1_spec/tools/check-claims.py`:19) and reports 5. The explanation described behaviour the tool does not have and is withdrawn (studio critic, evidence finding 5).

| Figure on the page | Where | Row | Count | Status |
|---|---|---|---|---|
| 90th percentile | Table "Admissions" (both cells), proof fact 1, steps lead | CR-011 | 4 | Unverified, public |
| $10,400 a year | Table "Tuition and access", GT Anywhere cell | CR-021 | 1 | Unverified, public |
| four in-person weekends / Four intensive weekends | Door 2 line (row and run-in copy, one displayed), pull-out and table "In-person time", footer facts | CR-032 | 5 | Unverified, public |
| 9 to noon, about two hours / Two hours of mastery academics | Pull-out and table "The day" Georgetown cell, door 1 line (row and run-in copy) | CR-033 | 4 | Unverified, public |
| Two to three hours | Pull-out and table "The day" GT Anywhere cell | CR-034 | 2 | Unverified, public |
| check-in every week / every week | Table "Guides" GT Anywhere cell, proof fact 3 | CR-035 | 2 | Unverified, public |

CR-022 ($10,474) is not on the page; the TEFA sentence carries no figure.

## Parent questions (`0_plan/05-landing-mockups-plan.md` section 6c, from `1_spec/01-users-and-journeys.md`)

| PQ | Question | Where this page answers it |
|---|---|---|
| PQ-01 | What is GT School? | The h1 |
| PQ-02 | Is it for my child? | "gifted and talented children" in the h1; the 90th percentile in the Admissions row, proof fact 1 and the steps lead |
| PQ-03 | In person or online: what are my options? | The two doors, and the italic phrases in the h1 |
| PQ-04 | Where is the campus? | h1; door 1 line; "Where and how" in the pull-out and the table |
| PQ-05 | What does a day look like? | "The day" in the pull-out (first screen at V13, V14, V16, V17) and the table |
| PQ-06 | What does it cost, and can TEFA help? | "Tuition and access"; the TEFA box |
| PQ-07 | How do I apply? | "How to apply": four steps, two application links |
| PQ-08 | Who teaches my child? | "Guides" row; proof fact 3 |
| PQ-09 | How much in-person time does GT Anywhere have? | Door 2 line; "In-person time" in the pull-out and the table |
| PQ-10 | What results does the school get, and is it accredited? | Silent by G0.5 items 2 and 3; "Contact admissions" and "Talk to admissions" lead to the person who answers it |
| PQ-11 | What happens after 8th grade? | "After 8th grade" row, deferred to admissions (Q-013) |
| PQ-12 | I am a current family, where do I go? | Header link; "Current families" band; footer |
| PQ-13 | I am not ready to apply, what can I do? | "Questions before you apply": FAQ, admissions, tour, info session |
| PQ-14 | Is GT School part of Alpha School? | The standfirst |

Deferred to the school sites: everything behind the door CTAs (curriculum detail, calendars, Guides' names, intensives dates, the FAQ), because the landing routes and the sites explain (DD-22).

## Self-check

Run from the repository root on 2026-09-11 against the checked-in files, **after the last change to `index.html` and
`styles.css`**. All three blocks below are that final run, pasted verbatim; `qa/fold.md` on disk is the same run, and every
capture in `qa/` was written by it.

### `python3 0_plan/tools/check-mocks.py 0_plan/mockups/M02-the-journal --all`

```
## M02-the-journal: 36 pass, 0 fail
  PASS R1 no forms
  PASS R2 one JSON-LD script only — 1 script tags
  PASS R20 D-039 declaration valid and named in the rationale
  PASS R3 external hosts
  PASS R3b local assets only
  PASS R4 no placeholder text
  PASS R5 numbers on the whitelist
  PASS R6 no "advisor" in text
  PASS R7 full names — Georgetown Campus x9, GT Anywhere x15
  PASS R8 title — GT School: a selective school for gifted children, in Georgetown, Texas and onli
  PASS R8 robots noindex
  PASS R8 canonical
  PASS R8 description
  PASS R8 open graph
  PASS R8 JSON-LD organization
  PASS R8 JSON-LD no claims
  PASS R9 lang
  PASS R9 one h1 — 1 h1
  PASS R9 skip link
  PASS R9 landmarks
  PASS R9 alt on every image — 3 images
  PASS R9 table caption and scope
  PASS R9 focus-visible styled
  PASS R10 transitions within budget
  PASS R10 no keyframe animation
  PASS R10 reduced-motion block covers pseudo-elements
  PASS R11 raw colors declared — 0 raw hex in styles.css: 
  PASS R12 data-event coverage
  PASS R13 image dimensions — 0 without width/height
  PASS R13 at most two eager photos (the first screen); svg logos exempt — 0 eager
  PASS R17 no unscoped application link — apply.gt.school link without school=
  PASS R18 provenance line once — 1 occurrences
  PASS R19 compare anchor before the table
  PASS R16 real logos in header and footer — GT School and GT Anywhere logo SVGs required
  PASS R14 size under 1 MB — 51 KB
  PASS R15 rationale sections

check-mocks: OK
```

### `python3 1_spec/tools/check-claims.py 0_plan/mockups/M02-the-journal/index.html`

```
## 0_plan/mockups/M02-the-journal/index.html
| Figure on the page | Register row | Occurrences | Status |
|---|---|---|---|
| "designed for students in the 90th+ percentile" | CR-011 | 4 | Unverified, public |
| "$10,400/year — GT Anywhere annual tuition, fully or partially covered | CR-021 | 1 | Unverified, public |
| Four in-person intensive weekends a year in Georgetown (four named 202 | CR-032 | 5 | Unverified, public |
| Georgetown mornings: "two 50-minute blocks and one 25-minute block wit | CR-033 | 4 | Unverified, public |
| GT Anywhere mornings: "two to three hours of 100% cognitive load" (aca | CR-034 | 2 | Unverified, public |
| Guides hold weekly one-to-one check-ins with each student ("Academic A | CR-035 | 2 | Unverified, public |
  NOTE unverified rows on the page (allowed in mocks, blocked for production): ['CR-011', 'CR-021', 'CR-032', 'CR-033', 'CR-034', 'CR-035']

check-claims: OK
```

### BUILDER-BRIEF greps and the copy check (scratch Python over the visible text, tags stripped, whitespace normalised)

| Check | Result |
|---|---|
| `grep -c "<form" index.html` | 0 |
| `grep -c "<script" index.html` | 1 (JSON-LD) |
| Hosts in `index.html` and `styles.css` | anywhere.gt.school, apply.gt.school, community.gt.school, gt.school, www.gt.school, schema.org (JSON-LD context) |
| Digits in visible text | 09, 10, 10,400, 2026, 270, 512, 8, 9, 90, 9481 (all on the whitelist) |
| "advis" in visible text | none (the `data-type="advisor"` attribute is allowed) |
| Fixed slots | the `copy.md` sections 0 to 8 strings plus the allowed headings, eyebrows, the two M2 words and the skip link, each found verbatim; the h1 equal to its slot with tags stripped; the sources sentence twice (comparison tail, proof strip); the provenance line once |
| Page words outside `copy.md` sections 0 to 9 | none (word-set difference, punctuation stripped). The four fact labels and the "Sources" link label are the new section 9 row for M02 |
| Raw hex in `styles.css` | 0; 49 distinct `var()` names, every one defined in `tokens-v2.css` or in `styles.css` itself |
| `transition:` declarations, `@keyframes`, `vh` | 0, 0, 0 |
| `data-component` / `data-component-proposed` marks | 14 named blocks, 5 proposed additions (Continuity above) |
| Size | 21,458 bytes `index.html` plus 33,077 bytes `styles.css`, 54,535 bytes in all; `qa/` about 2.2 MB of captures |

### Runner: `node 0_plan/tools/shots.mjs 0_plan/mockups/M02-the-journal --all` (`qa/fold.md`, verbatim and complete)

```
# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T13:28:13.444Z; page `/0_plan/mockups/M02-the-journal/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 90 | 323 | 369 | 490 | 603 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 90 | 317 | 363 | 477 | 590 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 340 | 461 | 574 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 340 | 461 | 574 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 311 | 432 | 546 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 311 | 528 | 730 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 295 | 341 | 463 | 576 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 313 | 434 | 548 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 340 | 557 | 759 | yes | report: page height 6341 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 288 | 288 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 245 | 292 | 530 | 530 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 251 | 297 | 537 | 537 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 242 | 289 | 386 | 386 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 263 | 310 | 408 | 408 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 270 | 317 | 460 | 460 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 284 | 331 | 482 | 482 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 347 | 506 | 506 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 90 | 346 | 413 | 543 | 656 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 242 | 289 | 422 | 422 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Focus and forced colours

Captures: focus-cta.jpg (first door CTA focused); focus-plate.jpg (header lockup link focused); focus-footer.jpg (GT Anywhere footer link focused); forced-colors.jpg (forced-colors: active at V14). The critics judge these by eye.

## Console

PASS: no console errors.

## Next band evidence

What the runner saw continuing below the fold. Ink means text, a painted edge or an image: section padding and the empty leading of a line box do not count.

| Row | Cut | Element and the ink that crosses the bottom edge |
|---|---|---|
| V1 | yes | content reaches 737 of 740 and more follows below |
| V2 | yes | text cut by the edge, 616 to 636 |
| V3 | yes | content reaches 660 of 664 and more follows below |
| V4 | yes | text cut by the edge, 640 to 660 |
| V5 | yes | text cut by the edge, 700 to 720 |
| V6 | yes | text cut by the edge, 825 to 840 |
| V7 | yes | text cut by the edge, 666 to 686 |
| V8 | yes | text cut by the edge, 727 to 747 |
| V9 | yes | text cut by the edge, 818 to 845 |
| V10 | yes | content reaches 334 of 342 and more follows below |
| V11 | yes | text cut by the edge, 986 to 1028 |
| V12 | yes | text cut by the edge, 1164 to 1206 |
| V13 | yes | text cut by the edge, 760 to 775 |
| V14 | yes | text cut by the edge, 708 to 723 |
| V15 | yes | content reaches 646 of 648 and more follows below |
| V16 | yes | text cut by the edge, 889 to 910 |
| V17 | yes | text cut by the edge, 942 to 963 |
| V18 | no | FALSE FLOOR: the last visible content ends at -Infinity, Infinitypx clear of the 256px edge, so the screen reads as finished |
| V19 | yes | text cut by the edge, 567 to 588 |

## Result: all required rows pass
```

The runner's own last line is **`## Result: all required rows pass`**. Its false-floor test is now the contract's reserve:
below the last door CTA, visible content must reach into the bottom 24px and more content must lie beyond the edge, and only
content counts — text, images and painted hairlines, never a container's background fill. Rows checked individually against
the captures as well as the report: V13 and V14 (the pull-out whole, its foot line cut by the edge), V15 (no pull-out, the
Compare opener reaching the edge with the table's title below it), V16 and V17 (the pull-out whole, the door lines cut
mid-sentence), V2, V5, V6 and V11 (the phone and tablet forms).

### Pending for the director

Two amendments this iteration needs and this build cannot make: the brief's Composition and Conversion rows still put the excerpt on the phone's second screen, which Departures 24 no longer does, and its Composition row still describes the door's line between the name and the CTA at the laptop rows, which Departures 25 no longer does. Both were the critics' own asks; the brief is the director's to amend.

Also pending: a screen-reader pass on the stacked and two-up table forms (row label, then each cell announcing its school name); text contrast from computed colours (K3's arithmetic is cited, not re-measured here); 200 percent browser zoom at V14 (the runner covers V19 as the 125 percent stand-in and the doubled root at V2); the scroll videos at V3 and V16; the in-app browser measurements under REQ-024; Nari's view of the four fact labels and of "Mastery" (Departures 11, `copy.md` section 9); a rendered side-by-side against gt.school, which has no mirror in this repository (Continuity); and, if the four-screen target at 1440 is held to strictly, a decision on which comparison rows the pull-out may omit, since the remaining 0.30 screen is table.
