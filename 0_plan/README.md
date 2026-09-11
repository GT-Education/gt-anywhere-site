# Planning — GT School web estate

Home for the requirements, decisions, and architecture of the GT School website redo:
a unified landing page for both schools, alignment of the Georgetown (gt.school) and
GT Anywhere (anywhere.gt.school) sites, and a content-maintenance model. Nothing here
is code; everything here is what the code must answer to.

Tables are the preferred format. Prose only where a table cannot carry the meaning.

## Documents in this folder

Reading order for a new session: `00-context.md`, then this index, then `09-operating-model.md`, then whatever the task needs. `ID-INDEX.md` lists every id with where it is defined and referenced; `tools/check-links.py` fails if any referenced id has no definition.

| # | File | Holds | Status |
|---|---|---|---|
| 0 | [00-context.md](00-context.md) | What GT School is, the estate, the two schools, five facts every session must carry, vocabulary, journeys, positioning, content debt, where each question is answered | v0.1 |
| 1 | [01-call-summary-website-redo.md](01-call-summary-website-redo.md) | The Nari/Johnny call that set scope: problems, asks, phases, action items, sourced quotes | Done 2026-09-10 |
| 2 | [02-requirements-and-deliverables.md](02-requirements-and-deliverables.md) | Problem statements, visitor journeys, requirements by phase (REQ ids), constraints, deliverables (DEL ids) | Draft v0.1, needs Nari review |
| 3 | [03-decisions-and-open-questions.md](03-decisions-and-open-questions.md) | Decision log (D ids) with options and one recommendation each, open questions (Q ids), push-back on the call | Draft v0.1 |
| 4 | [04-architecture.md](04-architecture.md) | Current web estate as verified from this repo, proposed target state, unknowns that block it | Draft v0.1 |
| 5 | [05-landing-mockups-plan.md](05-landing-mockups-plan.md) | The five-mockup plan: how the prompt was organized, design lenses, mock matrix, research swarm, decision-register skeleton, Fable + Codex Astra ensemble protocol, master status table, push-back | v0.2, awaiting G0 approval |
| 6 | 06-mockup-rationale.md | One row per mock: lens order, hypothesis, every design decision traced to a DD id or requirement | Planned |
| 7 | [07-design-decisions.md](07-design-decisions.md) | The decision register: part A design (DD), B marketing (MD), C motion (MN), D analytics and GA4 (AN), E advertising channels (AD), F chatbot platform (CB); Fable and Astra columns, verdict, status | v0.2: both models' columns on all 158 rows, verdicts set (76 agree, 60 partly, 22 differ), dual audits complete, loop goal met 2026-09-10 (`12`); 22 rows carry `Differ` for Johnny or Nari |
| 8 | [08-effectiveness-and-expanded-considerations.md](08-effectiveness-and-expanded-considerations.md) | What optimal and effective mean (metrics, principles); verified facts from the live site; Alpha network context; expanded considerations A to H with priorities and phases; register additions; phase discipline; push-back | Draft v0.1 |
| 9 | [09-operating-model.md](09-operating-model.md) | Systems of record, what each tool is for and not for, environments and promotion, branches and PRs, how work flows, cadence, the measurement and advertising flow, TrueFoundry readiness, access register, tools not used, automation later, push-back | v0.1 |
| 10 | [10-analytics-current-state.md](10-analytics-current-state.md) | What the GA4 property says today (28-day snapshot), tag map per surface, existing conversion wiring, gaps in priority order, configuration change log, raw snapshot | v0.1, snapshot 2026-09-10 |
| 11 | [11-seo-aeo-plan.md](11-seo-aeo-plan.md) | Search and answer-engine plan: current state, query and page map, what must be true before DNS moves, technical checklist, AEO plan, content plan, measurement. Decisions in `07` Part G | v0.1 |
| 12b | [12-claims-register.md](12-claims-register.md) | The claims register (DEL-018): every figure that may appear on any surface, its source, conflicts, status and approved wording. Rows land from research R4; Nari approves | Skeleton |
| 15 | [15-positioning-brief.md](15-positioning-brief.md) | The one-page positioning brief for gate G0.5: umbrella promise, per-school promises, proof and its status, tone, affiliation stance, price and access stance, what we will not say, decisions for Nari | Draft v0.1 |
| 16 | [16-g05-decision-record.md](16-g05-decision-record.md) | G0.5 decision record: the six positioning decisions, what changed and what stays open | Draft v0.1 |
| 17 | [17-design-studio-runbook.md](17-design-studio-runbook.md) | The design studio: roles, viewport matrix, rubric, motion reopened, the goal loops for twenty complete mocks (Johnny's decision 2026-09-11) | Decided
| 18 | [18-knowledge-base-plan.md](18-knowledge-base-plan.md) | Research swarm plan: fourteen clusters, exemplar protocol, file format; outputs in `kb/` | In progress
| kb | [kb/INDEX.md](kb/INDEX.md) | The knowledge base the studio builds from | In progress
| 2_deliverables | [../2_deliverables/README.md](../2_deliverables/README.md) | Frozen, versioned releases of the deliverables (DEL ids) for presentation; working copies stay here | Live
| | `research/` | R1 design tokens, R2 brand semiotics, R3 conversion and marketing, R4 content and proof with the gt.school crawl; the evidence base behind every v0.2 register position | Four reports, 2026-09-10 |
| | `mockups/shared/tokens.css` | Draft tokens extracted by R1 from both sites' CSS; owned by `design-system/` after T-063 | Draft |
| 13 | [13-journey-map.md](13-journey-map.md) | The end-to-end workflows W-01 to W-12: every node with data in, processing, data out, requirements, events and test cases; the invariants; the failure modes. The spines of the testing suite and the journey map (DEL-003) | v0.1 |
| 12 | [12-register-loop.md](12-register-loop.md) | The row-by-row loop that drives every decision row to Complete: both models' cells, verdict, each model's verification of the other, mechanical hallucination checks, ceilings, escalation table, log | v0.1, goal met 2026-09-10 after 6 iterations; escalation table holds the 22 disagreements |
| | [SOURCES.md](SOURCES.md) | The mapping of sources of truth: for every kind of fact, which source is the truth, who owns it, how to verify against it, which source wins, and whether a human has designated it. Also lists what is not a source | 17 sources, 0 designated |
| | [TRUTH.md](TRUTH.md) | Humans only. Part A: which sources are designated as truth (written by `truth.py designate`). Part B: statements a human has attested, frozen against drift. Agents propose in `truth-proposals.md` | 0 designated, 0 attested, 14 proposed |
| | [truth-proposals.md](truth-proposals.md) | Agent proposals for human attestation, each a verbatim statement with its target and source | 14 proposals |
| | [ID-INDEX.md](ID-INDEX.md) | Every id, its title, where it is defined and where it is referenced. Generated by `tools/build-index.py`; never hand-edited | Generated |
| | `tools/` | `ga4-snapshot.py` (read-only GA4 snapshot), `check-links.py` (fails on dangling ids, duplicates or missing files), `build-index.py` (writes `ID-INDEX.md`), `check-register.py` (the register loop's goal check; writes `ensemble/register-status.md`), `merge-ensemble.py` (merges Astra and audit outputs into the decision tables), `build-dashboard.py` (renders the review page), `truth.py` (check, propose, attest; attest refuses inside an agent shell) | |
| | `ensemble/` | Astra's outputs, verbatim, one file per pass; `register-status.md` (the loop's goal check); `register-dashboard.html` (the review page, regenerated by `tools/build-dashboard.py` and published as an artifact after every merge) | |
| | `inputs/` | Primary sources: the call transcript (`inputs/transcript-2026-09-10-website-redo.md`, the source of every quotation); later, Holly's brand element, Nari's draft, network answers (DEL-022) | Transcript filed |
| | [`design_ideas/`](design_ideas/README.md) | The inbox of inbound external references (reels, posts, tools) with provenance and transcripts, `DI-nnn`. Captures only: nothing here carries weight until it becomes a `DD`, `MD`, `REQ` or `Q` row | DI-001 filed |

## Documentation still needed

| # | Document | Why it matters | Owner | Needed before | Tracked as | Status |
|---|---|---|---|---|---|---|
| 5 | Sitemap and content audit of both sites | A shared IA cannot be proposed without knowing every page that exists and its content state. Action item from the call. | Johnny | IA proposal, landing spec | DEL-002 | Not started |
| 6 | Visitor-journey map (J1–J4) | Entry point, need, destination, CTA and success signal per journey. Structures and prioritizes everything else. Action item from the call. | Johnny | Landing mockups | DEL-003 | Not started |
| 7 | Brand and design tokens | Real computed values from both live sites plus Holly's unifying element. Without it the landing page gets designed twice. | Johnny, Holly | Landing mockups | DEL-004 | Not started |
| 8 | Landing page mockups, five directions (D-011) | The Phase 1 review artifact. Desktop and mobile. Plan in doc 5. | Johnny | Nari review | DEL-005 | Planned, awaiting G0 |
| 9 | Landing page spec | Final copy, sections, CTAs, journeys served, analytics events. Derived from the chosen mockup. | Johnny with Nari, Crystal | Landing build | DEL-006 | Not started |
| 10 | KPI baseline and analytics plan | Defines what "the landing page worked" means and captures the before-numbers. | Johnny; Nari (traffic), Crystal (wrong-school count) | Landing go-live | DEL-008 | Not started |
| 11 | Go-live plan (DNS, redirects, rollback) | Moving the gt.school root is the highest-risk step in Phase 1. Needs sign-off. | Johnny; Nari and David sign off | Landing go-live | DEL-009 | Not started |
| 12 | Unified IA proposal for both sites | Shared shell plus per-school menus. The Phase 2 anchor. | Johnny | Phase 2 build | DEL-010 | Not started |
| 13 | Content inventory with owners and cadence | Which content changes through the year, who owns it, how often. Decides the editing model (D-004). | Nari | Phase 2 start | DEL-011 | Not started |
| 14 | FAQ top-100 source | Knowledge base for the FAQ page and any later chatbot. Nari says it exists. | Nari, Crystal | Phase 2 | DEL-012 | Not started |
| 15 | Positioning brief (one page) | Five mocks need one brief: umbrella promise, per-school promise, proof, tone, affiliation stance, price and access stance. Gate G0.5. | Johnny with Nari | Landing mockups | DEL-017 | Not started |
| 16 | Claims register | Every number on both sites with source, approved wording and date. The homepage carries three speed multipliers today. | Johnny; Nari approves | Landing mockups | DEL-018 | Not started |
| 17 | Risk register | SEO migration, claims, brand dilution, content debt, single builder, admissions capacity. | Johnny | Landing go-live | DEL-019 | Not started |
| 18 | Launch checklist | DNS, redirects, consent, claims, accessibility, analytics, rollback, signed at go-live. | Johnny; Nari and David sign off | Landing go-live | DEL-020 | Not started |
| 19 | Experiment roadmap, first 90 days | Hooks, door order, helper, proof placement, TEFA module, one variable at a time. | Johnny; Nari | Landing go-live | DEL-021 | Not started |
| 20 | Network learnings ask | Alpha campus-page patterns, brand guidelines, claims review, approved data, admissions flow. | Nari, Holly | Research | DEL-022 | Not started |

## Conventions

| Convention | Rule |
|---|---|
| IDs | `P-nn` problems, `J1–J4` journeys, `REQ-nnn` requirements, `CON-nn` constraints, `DEL-nnn` deliverables, `D-nnn` decisions, `Q-nnn` open questions. Never renumber. Mark superseded items instead of deleting them. |
| Source column | Every requirement cites where it came from: a transcript timestamp (`hh:mm:ss`), a person and date, or "derived" plus the reasoning. |
| Status values | `Proposed`, `Agreed`, `In progress`, `Done`, or `Dropped` with a reason. |
| Priority | P0 blocks its phase. P1 must ship in its phase. P2 should. P3 later. |
| Call summaries | One file per call, timestamps kept so quotes can be checked against the recording. |
| Changing a requirement | Log a decision (`D-nnn`) and update the requirement's status. Do not silently rewrite intent. |
