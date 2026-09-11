# Rework pack after Astra's E4 (2026-09-11)

You are reworking ONE knowledge-base cluster after an independent review. Repo: /Users/johnny/projects/gt-school/gt-anywhere-site-v2. Your cluster is named in the launch message.

## Read first, in this order

1. /Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/KB-RESOLUTIONS.md (R1 to R17: the contract every rework follows)
2. Your cluster's row in section A of /Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/ensemble/E4-knowledge-base.md, and every mention of your cluster in section B
3. Your cluster file in /Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/
4. /Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/16-g05-decision-record.md (the six decided positioning items)
5. Section 4 (viewport matrix, 19 rows) and section 7 (motion contract) of /Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/17-design-studio-runbook.md
6. Any register row your E4 row names (DD/MD/MN/AN/AD/SE rows are in 0_plan/07*.md; D rows in 0_plan/03-decisions-and-open-questions.md; REQ rows in 0_plan/02*.md) — grep the id, read the row

## Rules for every rework

| # | Rule |
|---|---|
| 1 | Verify each E4 item against the file before changing anything. If Astra's item is factually wrong about the file (the quoted text or number is not there, or the source does establish the claim), keep the text and record the disagreement in the rework log with the evidence |
| 2 | An unsupported finding is removed or relabelled "Judgment" in its own words; a principle that rested only on it is removed or reworded so it rests on surviving evidence |
| 3 | Fix every arithmetic error and show the calculation |
| 4 | Delete or reword any prescription that contradicts a G0.5 decision or a decided register row; the decided wording stands (R1 accreditation, R2 the 22-word sentence, R3 "Tuition on request", R14 "Ask about" CTA) |
| 5 | Mandatory composition, count, texture, header or component rules become options a brief may adopt (R15); mark them "Option" |
| 6 | Reduced motion means zero computed duration with instantaneous state feedback (R8); only transform and opacity animate (R9) |
| 7 | Viewport references use the 19-row matrix in `17` section 4; the fold rule is bottom at or above viewport height minus 24px |
| 8 | Reconcile the headline source count with what a reader can identify in the file; label partial fetches, search summaries and hub pages as such |
| 9 | Keep everything Astra did not challenge; do not pad; do not rewrite sections that pass |
| 10 | Keep the six section headings the gate requires: Question, Findings, Principles, Anti-patterns, How it applies to GT, Open questions |
| 11 | Do NOT edit REGISTER-FOLLOWUPS.md, INDEX.md or any other file. Proposed register follow-ups go at the end of your rework log as rows with the columns: Register row, Proposal, Evidence, Recommended by |
| 12 | Add a final section "## Rework log (E4)" with one row per change: E4 item, what changed, where (finding or section id) |
| 13 | Finish by running `python3 0_plan/tools/check-kb.py 0_plan/kb/<your file>` from the repo root and report its output line, then a compact list of the changes and any disagreements |

## Per-cluster items (from Astra's E4 row; verify each first)

### K0 `K0-design-hunt.md`
- F2 "Only two pages in 73 offer a compare affordance next to the doors": text fetches cannot establish placement or absence; reword to what the text shows and mark the placement claim Judgment
- F5 "the most structurally relevant school sites are the least well designed": the ranking was a text proxy, not a rendered review; mark provisional and point to the concept catalog and rendered captures in `kb/exemplars/` for the re-rank (DD-19)
- GT application: MIT's illustration "loses nothing in credibility" has no measurement; mark Judgment; illustration is a candidate treatment under DD-08/DD-31, not a demonstrated equivalent
- The Compare affordance is already DD-23; reword as strengthening the existing pattern
- P5 (one or two type families) conflicts with DD-01's three retained families; reword as an observation about the corpus, not a GT rule
- Provisional visual scores cannot calibrate the rendered rubric; say so where the scores appear
- Rendered evidence now exists: `0_plan/kb/CONCEPTS-B.md` (Getty section) found the "Compare Museums" control hover-gated inside a navigation dropdown and absent from all four captures, and the two doors one scroll below the first screen; cite it where K0 describes Getty's compare affordance

### K1 `K1-composition.md`
- Source count: 48 identifiable content-bearing sources plus two hub fetches, not 51; reconcile
- F2 (grid quotation) came through a Goodreads search summary; mark Judgment or fetch the canonical source; no principle may rest on it alone
- F54 to F58 first-screen word and CTA counts are text-derived, not rendered; label them
- Mandatory grid, section-weight and eight-pixel-gap rules become Options (R15)
- Fold arithmetic: the 655px phone model exceeds the matrix limit (664 minus 24 equals 640 for that row); recompute against the matrix rows and replace estimated arithmetic with "measured on the fixed copy" pointers (R5)
- The three-line desktop h1 limit contradicts the file's own four-line model; remove universal line quotas (R5)
- Scale, measure and leading changes are proposals for DD-19/DD-36 via follow-up rows, not rules

### K2 `K2-typography.md`
- F30 "Inter Tight is not a body face": the cited classification does not establish a prohibition; reword as a design judgment to be tested at body sizes
- Section 5b "M-04 shows bold sets 5% wider": M04 compares Literata against Inter Tight, not weights; fix the reference or re-measure weights properly
- Section 5f zoom: the 195.5% figure omits the clamp minimum; recompute with the full clamp (expected near 199.3%) and show the working; note that browser zoom still needs a rendered test
- Fallback line-box matching "guarantees no movement" is overstated; wrapping can still differ; reword
- Font roles, display weight, leading and fluid scale are proposals under DD-01/DD-19/DD-36 pending tests on the fixed copy (R4); not necessities
- Source count: 51 listed artifacts including a partially fetched CSS Fonts 4; label the partial
- Reproducibility: recreate the measurement scripts for M01 to M09 under `0_plan/kb/measurements/K2/` (script, inputs, output table) using the repo's local TTFs (search `find . -name "*.ttf" -not -path "./node_modules/*"`), re-run them, and make the numbers in the file match the output. If a measurement cannot be reproduced, say so in the file and mark the number Judgment. This is the one exception to rule 11: you may create files under `0_plan/kb/measurements/K2/`

### K3 `K3-color-accessibility.md`
- P9 "Halation is a real, measurable harm to roughly half the population": astigmatism prevalence does not establish halation incidence; reword to what the sources establish and mark the quantified claim Judgment
- Section 5 "the warm/cool split is precisely the axis that collapses" for the school tints: compute it. Simulate the two school tints and the navy, gold and accent under protanopia, deuteranopia and tritanopia with the Machado 2009 matrices in a Python script saved under `0_plan/kb/measurements/K3/` (exception to rule 11), report the simulated hex values and the pairwise contrast ratios, and let the finding say what the numbers show
- "Exactly two navy sections" becomes an Option (R15)
- New swatches require the DD-19 departure process; label the proposed roles as proposals (RF-07 already carries them; cite it)
- APCA thresholds, allowed pairings and large-text thresholds disagree within the file; reconcile into one table
- Keep every measured contrast failure

### K6 `K6-conversion.md`
- C3 "A school sits with the low group": the study's categories do not establish this; mark Judgment
- CP10 "Design for the 9-in-10 who will not act today": a B2B heuristic; label as analogy, not GT evidence
- Section 5c "any count it can publish is in the backfire zone": no threshold is known; reword; MD-06's conditional use of verified counts stands
- The 20-word first-screen sentence rule cannot override the decided 22-word sentence (R2); reword as a measured-fit concern
- "Book a tour" becomes "Ask about a tour of the Georgetown campus" (R14, MD-02)
- DD-06: check `0_plan/mockups/shared/copy.md`; if any comparison cell reads "Same", recommend repeating the actual value; if none does, drop the point
- Ledger row 43 repeats row 34; the distinct count is 42

### K7 `K7-brand-architecture.md`
- F1 (typology via search summary), F7 (search-only), the nine Aaker subpositions (unverified): mark Judgment; remove them from GT architecture language and from any MD-17 rationale, or fetch a canonical source by URL
- The synthesis says "none signals scarcity" while F40 describes scarce seats; reconcile
- Provenance placement and whether the landing has a switcher conflict within the file; resolve to DD-12/DD-13 and MD-17 (R11)
- Outbound host list: today's hosts are `www.gt.school` and `anywhere.gt.school`; read SE-01 in `0_plan/07*.md` and record its subdomain architecture as the future state (R16)
- Source count: 50 identifiable, not 55; reconcile
- Keep the Alpha Anywhere naming-collision finding; it strengthens explicit "GT Anywhere" naming (DD-27)

### K8 `K8-marketing-advertising.md`
- F9 rests on search extracts of an unfetched Meta page: fetch the canonical URL by text or mark Judgment
- F20 "Custom Tabs are explicitly not what Meta and TikTok use": the generic documentation does not establish those implementations; reword as unverified, to be measured under REQ-024
- P6: stripping `fbclid` does not close a deduplication window; deduplication keys are event id and event name (your own F34); correct the mechanism
- Tag loading conforms to AN-10/MD-20 and open Q-016 (R12); identifier forwarding stays inside AN-06/AN-11's approved-field boundary
- The 596px webview bound is constructed from unrelated assumptions; remove it as a fact, keep it as a stress hypothesis for REQ-024 (R7)
- Source count: 46 listed artifacts already include the two downloads; drop "plus two"
- The X-source convention (AN-08/AD-03) is a proposal; label it

### K9 `K9-imagery.md`
- F33 "illustration did not cost MIT its credibility signals": no outcome data; mark Judgment
- F48: a 3:2 to 16:9 crop by width loses 15.625% of height, not 25%; fix and re-check every other crop figure in the file
- A9 "decapitation on a third of this library": untested. If Pillow is available (`python3 -c "import PIL"`), write a script under `0_plan/kb/measurements/K9/` (exception to rule 11) that crops each asset listed in `0_plan/mockups/shared/ASSETS.md` to 16:9 and 4:5 about the centre, assembles two contact sheets, view them with the Read tool, and record per asset whether the subject survives; otherwise mark the claim Judgment and leave the crop audit to G-D QA
- "Use freely on either door" for a Georgetown image conflicts with the file's own attribution rule and DD-04/DD-27; correct it: campus images carry truthful attribution and do not stand for Anywhere
- "No repeated lead scene across twenty" and fixed direction quotas become Options (R15)
- Permissions are not inferred from publication (AD-11); point to RF-24/RF-25
- Source count: 39 external plus five local

### K10 `K10-responsive.md`
- F25 "Instagram and Facebook draw the same number of bars Safari draws" and "Safari is a proxy ± about 15px": not established by safe-area figures; mark Judgment (R7)
- F38 195.5%: recompute with the clamp minimum (same fix as K2) and show the working
- P3 narrows app testing; MN-15/REQ-024 cover iOS and Android; correct
- Landscape: the fold rule applies to every matrix row including V19; reconcile the landscape scrolling note with the matrix
- Component thresholds and test expectations that disagree with the supplied CSS: reconcile to `0_plan/mockups/shared/tokens.css` and the mocks, or mark as proposals
- S63 supplied no numerical evidence; label it

### K11 `K11-performance.md`
- A6 "no browser caching at all; repeat visits re-download every font and image": revalidation is not a prohibition on storage and F36 describes CDN caching; correct
- Section 5d "nothing that happened before consent is lost": an in-memory queue does not survive navigation; correct; pre-consent replay is not approved (R12, AN-10, Q-016)
- The rubric places two-thirds of traffic in Instagram on Android; the GA snapshot supports two-thirds mobile only; fix
- Direct `gtag.js` loading bypasses AN-03/MD-08's container architecture; conform
- Exact request-count and format prescriptions penalize typographic variants; make the budgets outcome-based (LCP, first-screen bytes per RF-30) (R13)
- M06 itemizes four script payloads versus six claimed; the HubSpot URL is a wildcard; reconcile
- Keep the measured byte evidence; list the DPR, font and LCP-element tests G-D must run

### K12 `K12-gt-branding.md`
- F74 "Alpha's system shares nothing with GT's": one Alpha token stylesheet was fetched and both palettes share white; soften to what was measured
- P8 (a signature texture "used once makes a new page read as GT"): mark Judgment
- D5 cites WCAG 2.4.11 (Focus Not Obscured) for the absence of an authored focus ring; the applicable criterion is 2.4.7 Focus Visible (2.4.13 Focus Appearance at AAA); correct
- Mandatory weight, tracking, button height, fixed pill header and decorative devices: separate "extracted practice" from "proposed rule"; proposals become Options (R15); the minimum target is 44px per runbook section 4, not 40px
- Destination-heavy header guidance conforms to DD-12 (R11)
- A universal blue focus ring fails on navy per K3's measurement; focus on dark surfaces uses the on-dark focus role proposed in RF-07
- Ledger: six Georgetown assets are named, five are counted; reconcile
- Keep the hidden accreditation qualifier and the network-attributed testimonials as evidence supporting the DD-17/MD-05 holds

### K13 `K13-design-systems.md`
- F24 "Forty-seven is the ceiling; GT should be an order of magnitude smaller": an inventory is not evidence of a limit; mark Judgment
- F45 "cascade layers remove the last real argument for a preprocessor": mark Judgment
- A12 repeats the claim that near-zero durations kill focus feedback; correct (state styling survives; only the transition is instantaneous)
- The switcher example uses `gt.school/georgetown`; read SE-01 and use its architecture
- C14 animates layout; make it an instant change (R9)
- "Thirteen viewports" is now nineteen; fix every count
- Hard component and partial restrictions and the three-departure cap become Options (R15)
- Token tiers, versioning and switcher semantics need register rows: list them as proposed follow-ups in the rework log

### K14 `K14-copy-voice.md`
- F24 "Exeter is the most selective school in the corpus": no comparative admission data in the file; fetch a published admit rate by URL or mark Judgment
- F39 "There is no correlation with selectivity": no selectivity variable or calculation; remove or mark Judgment
- F68 "a first-time parent will read Guide as a booklet": mark Judgment; DD-30 is open
- F38 reports Dalton body-prose hype measurements while section 6 says Dalton's body prose was not extractable; reconcile
- Scoring: the exact decided 22-word sentence must be able to score 5 (R2); "Tuition on request" must be able to score at least 4 (R3); rewrite the anchors
- "Teachers, whom we call Guides" asserts a role equivalence DD-30 has not verified; remove or mark open
- Keep "Ask about" until a booking route exists (R14, MD-02)
- Source count: 55 numbered, 25 institutional pages, 23 with measurable body prose; make the header match
