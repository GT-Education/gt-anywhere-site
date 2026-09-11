# E2 fix decisions (T-050), 2026-09-10

Fable's verification of Astra's E2 review (`E2-mocks.md`): each finding checked against the files and the browser measurements in `0_plan/mockups/shared/screenshots/QA-2026-09-10.md`. Apply means fixed in this pass; Decline means not changed, with the reason; Escalate means a human decides.

| # | Finding (short) | Fable's check | Decision | How | Owner |
|---|---|---|---|---|---|
| 1 | Targets under 44 by 44 on header, footer, application and secondary links | Confirmed: padding sat on list items, not anchors | Apply | Minimum size and padding on every anchor; browser re-measure | All builders |
| 2 | M3 footer focus outline 1.69:1 on navy | Confirmed by the token values (#004f71 on #002a3a) | Apply | Focus color on dark surfaces uses `--color-accent-contrast` | M3 |
| 3 | M4 reduced motion misses `::after` transition | Confirmed in `M4/styles.css` | Apply | Override covers `*, *::before, *::after`; checker R10 now requires it | M4 |
| 4 | Color and border-color transitions outside the transform and opacity budget | Confirmed; the checker's allowlist was looser than `1_spec/03` section 6 | Apply | State changes instant; checker R10 tightened to transform and opacity | M1, M3, M5 |
| 5 | M4 comparison entry 1627px down, after four photos | Confirmed from the full-page capture | Apply | Compare anchor directly after the doors; photo strip after the comparison | M4 |
| 6 | M1 and M3 compare link at 848 and 850px on an 844px viewport | Plausible from the QA bottoms (816, 760 plus spacing); re-measure after the fix | Apply | Trim vertical spacing so the link and its 44px target sit inside 844 | M1, M3 |
| 7a | Shared comparison rows not first | Confirmed: `copy.md` listed Admissions and After 8th grade last | Apply | `copy.md` reordered centrally: Same school, Admissions, After 8th grade, then differences | All builders |
| 7b | Mobile comparison stacked instead of the specified two-column table | Confirmed as a departure; the two-column table clipped or squeezed at 390 in every mock | Decline, documented | `1_spec/03` section 4 amended 2026-09-10 to the stacked rendering with labelled cells; table semantics kept | Fable |
| 8 | M2 icons hidden on mobile; M4 icons are abstract shapes | Confirmed in the screenshots | Apply | Compact home and online icons beside the labels at every width | M2, M4 |
| 9 | The Online door photo shows an in-person intensive | Confirmed; no documentary remote-learning photo exists on either site (ASSETS.md); the only home photo is studio-isolated and excluded | Escalate | Nari supplies or approves a home-learning photograph (DD-31, AD-11); the format label stays the primary cue meanwhile | Nari |
| 10 | M4 headline panel hides the science photograph | Confirmed in `M4-390.png` and `M4-1440.png` | Apply | Recompose so students and experiment stay visible while both doors fit | M4 |
| 11 | M5 two links per door | Confirmed | Apply | Heading non-interactive; one Explore link per door | M5 |
| 12 | M5 schedule proportions imply durations | Confirmed: flex weights 1:1 versus 1:3 | Apply | Equal, non-proportional segments; "with structured breaks" in the visible graphic | M5 |
| 13 | Figures lack per-figure sourcing; rows Unverified; `check-claims.py` absent | Confirmed; the whitelist was a proxy | Apply | `1_spec/tools/check-claims.py` written (maps every figure to its CR row and status); a sources line names the page for each fact; rationale tags each figure with CR id and status. Production still needs Nari's approvals (T-053) | Fable, all builders |
| 14 | Footer "Apply" without `school=` | Confirmed; originated in `copy.md` | Apply | Two scoped application links in the footer; checker R17 | All builders |
| 15 | "Book a campus tour" and "Join a virtual info session" over-promise their destinations | Confirmed | Apply | Labels "Ask about a campus tour" and "Ask about a virtual info session", both to the contact page, until real links exist | All builders |
| 16 | Provenance line twice | Confirmed; the facts block in `copy.md` repeated it | Apply | Removed from the facts block; checker R18 requires exactly one occurrence | All builders |
| 17 | M3 and M4 body text in Inter Tight | Confirmed | Apply | Literata for reading text; Inter Tight for labels, navigation and CTAs; rationale corrected | M3, M4 |
| 18 | GT Anywhere logo's white lettering on a light panel | Confirmed from the SVG | Apply | Anywhere logo on a `--color-navy` panel, GT School logo on a light panel | All builders |
| 19 | M1 mobile caption squeezed | Confirmed in `M1-390-full.png` | Apply | Caption as a full-width block in the mobile table treatment | M1 |
| 20 | Copy outside `copy.md` | Confirmed; all of it wayfinding or directed by the brief | Apply | Allowed headings recorded in `copy.md`; M5 rationale labels updated | Fable, M5 |
| 21 | TTF fonts, no woff2 subsetting or preload | Confirmed; an optimization gap, not a measured failure | Decline for the mocks | Subsetting needs a font tool (a dependency, stop-and-ask); preload markup needs no tool and is added with T-065, the S3 fonts task, before the winner hardens in S5 | Johnny approves the tool |
| 22 | No mock attempts the first-screen comparison at 1440 | Confirmed against `1_spec/03` section 4 | Apply | M2 adds a compact three-row comparison inside the first viewport at 1440 without pushing the door CTAs below 900px | M2 |

Astra's requirement scores that stay Partial or Fail after this pass, by design: REQ-016 (steps unverified until Q-007), REQ-022 (register rows Unverified until Nari approves, T-053), REQ-074 (axe and keyboard evidence arrive with the runner, D-028).
