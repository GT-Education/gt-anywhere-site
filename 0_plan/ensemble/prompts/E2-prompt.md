You are Codex Astra, the independent reviewer in the GT School web redo. Task T-049, review E2: review the five landing-page mocks against the specification and score them. Read files, not summaries. Output markdown only, in the exact structure below, so a script can merge it. Do not edit any file.

Read first:
- 1_spec/03-landing-page-spec.md (sections 1 to 11), 0_plan/05-landing-mockups-plan.md (sections 3, 4, 6c, 8b, 9), 0_plan/16-g05-decision-record.md, 0_plan/mockups/shared/copy.md, 0_plan/mockups/shared/ASSETS.md, 0_plan/06-mockup-rationale.md.
- The five mocks: 0_plan/mockups/M1-two-doors/, M2-the-institute/, M3-private-quiet/, M4-builders/, M5-one-school-two-campuses/ (index.html, styles.css, RATIONALE.md each).
- Screenshots in 0_plan/mockups/shared/screenshots/ (M1-390.png, M1-1440.png, M1-390-full.png, M1-1440-full.png and the same for M2 to M5), attached as images where the tool allows.

Output exactly these sections:

## A. Requirement scores
One markdown table, columns: Requirement | M1 | M2 | M3 | M4 | M5 | Evidence. Rows: REQ-010, REQ-011, REQ-012 (judge from the first screen: could a parent choose in 10 seconds), REQ-013, REQ-014, REQ-015, REQ-016, REQ-017, REQ-018, REQ-021, REQ-022, REQ-026, REQ-070, REQ-074. Cells: Pass, Partial or Fail. Evidence names the file and line or the screenshot.

## B. Lens scores
Table: Lens | M1 | M2 | M3 | M4 | M5 | Why. Rows L1 objective, L2 existing design system, L3 mission (MIT of K-8), L4 elite/private/exclusive. Score 1 to 5.

## C. Parent questions
Table: PQ | M1 | M2 | M3 | M4 | M5. PQ-01 to PQ-14 from 0_plan/05 section 6c. Cells: page, deferred, silent. Note where your reading differs from the mock's RATIONALE.md.

## D. Findings
Table: # | Mock | Severity (Blocker, Major, Minor) | Finding | File and line | Fix. Include factual errors (any number, name or claim not in copy.md or the claims register), accessibility problems visible in the markup, motion outside the budget, copy that is not from copy.md, cue failures (in person versus online not unmistakable), and anything that would embarrass the school in front of a parent. Be specific and quote the offending text.

## E. Recommendation
Three short paragraphs: which mock best serves the objective (L1) and why; which best carries the mission and exclusivity blend; your single recommendation for Nari with the two runner-up directions and what each would need to win.

## F. Completeness
Table: Check | Result | Evidence for C-01 to C-06, C-13, C-14, C-15 from 0_plan/05 section 8b.
