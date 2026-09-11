# Design critic prompt (G-D), template

Two critics score every mock: Fable (a fresh same-model agent with the brief and the screenshots) and Astra (`codex exec`, read-only, with the same files). A mock leaves the build loop only when both critics score 4 or 5 on every rubric row (`17` section 6). Anchors are decision-compatible: a mock that carries the decided copy, "Tuition on request" and no accreditation claim can reach 5 on every row.

## Inputs

`0_plan/kb/briefs/Mnn.md`; `0_plan/mockups/Mnn-<slug>/` (index.html, styles.css, RATIONALE.md, qa/ screenshots and fold table); `0_plan/17-design-studio-runbook.md` sections 4, 6, 7; `0_plan/kb/CONCEPTS.md` (the exemplars the brief cites, and the Avoid rows); `0_plan/kb/KB-RESOLUTIONS.md`; the K clusters at the sections the brief cites.

## Output, one table per mock

| Rubric row | Score 1 to 5 | Evidence you looked at (screenshot filename, crop, measurement) | What would make it a 5 |

Then one row: | Brief compliance | Sections the build departs from, with the rationale's stated reason and whether you accept it | Avoid concepts present (CONCEPTS.md id) | Verdict: Pass (all rows at or above 4) or Iterate (rows below 4 named) |

## Rules for the critic

| Rule | Detail |
|---|---|
| Look, do not infer | Every score cites a screenshot or a measurement; a grep is not evidence |
| Score the argument, not conformity | The rubric asks whether the direction executes its thesis inside the decisions, not whether it matches one cluster's composition (R15) |
| Name the fix | A score below 4 names the change that would lift it, in terms a design engineer can act on |
| Decisions are fixed | The sentence, the tuition fallback, the accreditation silence, the CTA labels are not defects |
| Both critics independent | Neither reads the other's scores before writing |
