# Decision packet for Johnny, 2026-09-11: the twenty-mock program at its first ceilings

Both models' findings are attached by path. Nothing here is decided; every row names who decides.

## 1. Where things stand

| Goal or item | State | Evidence |
|---|---|---|
| G-A Planning from research | Fifteen clusters written, reworked once against Astra's E4, and re-checked (E4b): still Rework on all fifteen; second pass is the ceiling | `0_plan/kb/K0` to `K14`, `0_plan/ensemble/E4-knowledge-base.md`, `E4b-knowledge-base-recheck.md`, `kb/measurements/` (K2, K3, K9, K14 scripts reproduce) |
| G-B Design hunt | Done: 81 candidates scored, 26 exemplars captured at 390 and 1440 | `0_plan/kb/EXEMPLARS.md`, `kb/exemplars/index.html` |
| G-C Concept catalog and briefs | Catalog done (four batches, 47 cross-indexed concepts); slate of twenty; contract frozen; twenty briefs written, reviewed (E5), rewritten, re-checked (E5b): still Rework on all twenty; second pass is the ceiling | `kb/CONCEPTS.md`, `kb/DIRECTIONS.md`, `kb/briefs/CONTRACT.md` v2.1, `kb/briefs/M01.md` to `M20.md`, `ensemble/E5-briefs.md`, `E5b-briefs.md` |
| G-D Twenty complete mocks | Not started; waits on your decisions below and on D-028 | `17` section 11 |
| Register | Nineteen knowledge-base rows complete through E5a to E5c; D-039 escalated at the three-attempt ceiling; DD-42 corrected and awaiting one re-audit | `ensemble/register-status.md`, `12-register-loop.md` rows 9 and 10 and escalation row 23 |
| Shared contract for the builds | `tokens-v2.css` (proposed values labelled by row), `copy.md` v1.1, `CONTRACT.md` v2.1 (computed fold method, compact door rule, colour and focus per surface, photograph states and crops, motion vocabulary) | `0_plan/mockups/shared/`, `0_plan/kb/briefs/CONTRACT.md` |
| Mock checker | 36 rules; D-039 exception mechanism with 28 in-memory fixtures; all five earlier mocks still pass | `0_plan/tools/check-mocks.py`, `0_plan/tools/tests/test-check-mocks-d039.py` |

## 2. What you decide

| # | Decision | Options | Fable recommends | Astra's position | What follows |
|---|---|---|---|---|---|
| 1 | G-A disposition (knowledge base at the two-pass ceiling) | (a) build now and work the E4b list as a tracked backlog; (b) a third rework and review pass before any build, about half a day of agents; (c) fix only the scoring anchors that would fail the fixed copy, then build | (c) then (a): the mocks are scored by the runbook rubric, not by cluster anchors (R15), so the anchors are the one class that can bias the critics; the counting and status faults do not touch a build | The base is below the E4 gate; the single most important fix is one decision-compatible scoring contract propagated through every cluster | Under (c) Fable runs one targeted pass on the anchors Astra listed (K2, K5, K6, K9, K11, K12, K14) and no further review of counts |
| 2 | G-C disposition (briefs at the two-pass ceiling) | (a) approve the slate and the twenty briefs as the working basis under CONTRACT v2.1, with the E5b per-brief list as the first build-wave fix list; (b) rewrite once more before approval; (c) approve a first wave of five and hold the rest | (a), sequenced as (c): start wave 1 with the five directions that need no photograph and no script (M03, M06, M08, M12, M15) while the per-brief items are closed for the rest | No brief yet meets a complete, consistent specification gate; no third review loop proposed | Design engineers build from the brief plus CONTRACT v2.1; the critics score outcomes; per-brief E5b items are closed in the first iteration of each mock |
| 3 | D-039 Scripts and inputs in mocks | (a) one declared inline script of at most 2 KB for the K4 observer moves and radio inputs for the router direction only, both declared and named in the rationale; (b) none: CSS-only motion, no router | (a) | Agrees with (a) in substance and with the no-declaration position; failed the cell three times on checker probes, each since closed with a fixture | (a) unlocks V6 and V8 in six briefs and M16's interactivity; (b) makes fourteen directions still and M16 static |
| 4 | D-028 Playwright Test runner (a dependency and a build step in the repo) | yes or no | Yes: 19 viewport rows times twenty mocks times up to four iterations is not a hand job; the MCP browser fallback is roughly ten times slower | Not reviewed (a tooling decision) | Yes opens the QA layer in `1_spec/13` section 14; no keeps the MCP browser in the loop and slows G-D |
| 5 | Vercel production branch | switch `gt-website-v2` from `main` to `v2` in Settings then Git | Do it when you are next in Vercel; the API has no field for it | n/a | The branch alias keeps working meanwhile |

## 3. What Nari must supply or confirm (through you)

| Item | Why it gates the mocks | Where it is recorded |
|---|---|---|
| Written photo permissions naming website and paid-advertising use | Every photograph in the library shows identifiable children; no mock shows a photograph until this exists | RF-25, DD-42, `ASSETS.md` "Faces, re-checked 2026-09-11" |
| An honest GT Anywhere photograph | Door parity: both doors photographed or neither | RF-24, DD-42 |
| Georgetown tuition figure | "Tuition on request" stands and scores; every school in the corpus with a price publishes it | RF-16, RF-43, Q-011, D-036 |
| The hidden "Candidate for Accreditation" qualifier on the live Anywhere pages | A live-site defect for Nari and counsel; the landing stays silent either way | RF-38, D-036 |
| The umbrella sentence: keep 22 words or choose a 20-word candidate | The decided sentence stands; the candidates are recorded | RF-41, D-035 |
| Section 9 vocabulary, router questions, Locations list, quote attributions | New words the twenty briefs need, none stating a fact without a register row | `copy.md` section 9 |

## 4. Push-back and recommendations

| # | Recommendation | Why |
|---|---|---|
| 1 | Do not run a third full pass over fifteen clusters and twenty briefs before building | Two passes each moved the artifacts from unsourced to precisely wrong in places a build will expose faster than a reader will; the runbook ceilings exist for this reason |
| 2 | Take option (c) on G-A: one targeted pass on the scoring anchors only | It is the only residual class that can bias the critics against decided copy |
| 3 | Approve D-039 (a) and D-028 | Without them the studio is static and hand-driven, which contradicts the brief you gave ("interactive or animated aspects, carefully decided"; "tested on various screen sizes") |
| 4 | Start wave 1 with M03, M06, M08, M12 and M15 | They need no photograph, no script and no new copy beyond the deck, so they can be complete before Nari's items arrive |
| 5 | Send Nari the section 3 items as one memo (D-036) | Four of them gate the photographed directions and the claims register |

## 5. Astra's residual finding classes, for transparency

| Class | Examples | Fable's view |
|---|---|---|
| Scoring anchors inside clusters that would fail the fixed copy | K6 reading-level gate against the 22-word h1; K14 tuition capped at 4; K2 four-to-six-line rule; K12 mandatory weights | Real; the one class to fix before building (decision 1, option c) |
| Retained counting and reference errors | K5 headline word counts; K0 character counts; K11 MB conversion; INDEX source counts (now refreshed) | Real but harmless to a build; backlog |
| Status overstatements | "adopted", "decided" for rows that are Proposed | Corrected where named (K0, K8, K13, C45); backlog for the rest |
| Brief precision | Captions not yet in the deck for some files, per-brief geometry, three contradictions (M10 motion, M19 provenance, M20 quote length) | Closed in the shared contract where shared; the rest is the first-iteration fix list per mock |

## 6. Ensemble outputs produced today

`E4-knowledge-base.md`, `E4b-knowledge-base-recheck.md`, `E5-briefs.md`, `E5b-briefs.md`, `E5a-register.md`, `E5a-audit-astra.md`, `E5b-audit-fable.md`, `E5c-register.md`, `E5c-audit-astra.md`, `E6-d039.md`, `E6-audit-astra.md`, `E6b` to `E6i-audit-fable.md` (E6j running), all under `0_plan/ensemble/`; prompts under `0_plan/ensemble/prompts/`.
