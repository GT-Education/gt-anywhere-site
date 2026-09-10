# Plan: dual landing page mockups (Fable + Codex Astra ensemble)

| Field | Value |
|---|---|
| Version | 0.2, 2026-09-10 (marketing register and transcript-derived decisions added) |
| Requested by | Johnny |
| Gate | **G0: Johnny approves this plan before any research or build runs.** Nothing below has started. |
| Serves | REQ-010 to REQ-020, DEL-004, DEL-005, DEL-006 |
| Ensemble | Fable (Claude Fable 5.1, this session) authors. Codex Astra (`gpt-6-astra`, reasoning `xhigh`, codex-cli 0.153.2, `codex exec` read-only) reviews. Each checks the other. |

## 1. How the prompt was organized

| # | Prompt clause | Interpretation | Work item | Deliverable | Location |
|---|---|---|---|---|---|
| 1 | "first priority is to build this dual landing page" | Phase 1 of the redo, requirements REQ-010 to REQ-020 | This plan | 05 (this file) | `0_plan/` |
| 2 | "create 5 mockups based on how you understand the requirements" | Five complete, distinct landing pages, desktop and mobile | Build waves | `M1` to `M5` plus a gallery | `0_plan/mockups/` |
| 3 | "keep in mind 1) objective 2) existing design system 3) vision, MIT of K-8 4) elite, private, exclusive" | Four design lenses L1 to L4 | Lens definitions, section 3 | Lens table | 05 |
| 4 | "use different combinations of different prioritizations" | Each mock ranks the four lenses differently | Mock matrix, section 4 | Matrix | 05, 06 |
| 5 | "use agent swarms for deep research" | Research fan-out before design: 4 researchers plus 1 synthesizer per wave (the fan-out cap in the global working agreement) | Research plan, section 5 | `R1` to `R5` reports | `0_plan/research/` |
| 6 | "a table that lists each mock and explains exactly why" | Per-mock rationale with every decision traced to a lens, a requirement, or a research finding | Rationale doc | 06-mockup-rationale.md | `0_plan/` |
| 7 | "fully build each as if final products" | Quality bar in section 9; production hardening scope is a push-back item (section 10, row 1) | Build waves | Mocks | `0_plan/mockups/` |
| 8 | "table of design decisions researched, decided, why and how" | Decision register with a Fable column and an Astra column | Register, section 6 | 07-design-decisions.md | `0_plan/` |
| 9 | "run a second codex astra model to ensemble your decisions… validate the completion" | Three Astra passes: decisions, mocks, completion | Ensemble protocol, section 7 | `E1` to `E3` reports | `0_plan/ensemble/` |
| 10 | "fable checks astra, astra checks fable" | Cross-verification columns in the master status table | Section 8 | Status table | 05 |
| 11 | "push back and recommend" | Every request gets a concern and a recommendation, with the decision it needs | Push-back table | Section 10 | 05 |
| 12 | "show me the plan before you build" | Gate G0 | This turn ends at the plan | | |
| 13 | "add a section for marketing design decisions… have fable and astra describe their decisions and reasoning for each" (added while planning) | Marketing objectives become an explicit input (section 3b); a second register, MD-01 to MD-14, with the same Fable and Astra columns | Section 6b; R3 broadened | 07-design-decisions.md part B | `0_plan/` |
| 14 | "anything we can learn from the transcript that we should also bring into the design decisioning?" (added while planning) | The call re-read for design constraints and decisions: fourteen new decisions, six amendments, two checklist items, matrix tightened | Section 6c | 07-design-decisions.md part A | `0_plan/` |
| 15 | "we can also consider animated design. there must be a set of decisioning around that as well" (added while planning) | Motion becomes part C of the register, MN-01 to MN-14, grounded in the motion the sites already run; a motion stance per mock; motion rows in the quality bar and checklist | Section 6d | 07-design-decisions.md part C | `0_plan/` |
| 16 | "what else should we consider in this plan? think expansively... optimal and effective" (added while planning) | A definition of optimal and effective with metrics and principles; expanded considerations across audience, network positioning, proof and compliance, conversion system, discoverability, platform, Phase 2 seeds and governance; a positioning brief as gate G0.5 | 08, and section 3c and 6e here | 08-effectiveness-and-expanded-considerations.md | `0_plan/` |

## 2. Inputs: available and missing

| Input | State | Effect on the mocks | Action |
|---|---|---|---|
| Requirements and journeys | Available (`02-requirements-and-deliverables.md`) | Non-negotiables for every mock (section 4, "common to all") | None |
| Anywhere design system | CSS and fonts in this repo (Literata, Inter Tight, Inconsolata via Google Fonts); tokens not yet extracted | Extracted by R1 into `tokens.css` | R1 |
| Georgetown (gt.school) design system | Not in this repo | Fetched by R1 with third-party tags blocked so no pixels fire | R1 |
| Holly's unifying brand element | Missing (shared in Slack, not available here) | Mocks propose a placeholder lockup, flagged | Johnny pastes it into `0_plan/inputs/` or says "proceed without" |
| Nari's Claude draft landing page | Missing (Slack) | Input to take apart, not a spec; useful for copy hints | Same |
| What the schools share and what differs | Partly derivable from both sites; unverified (Q-008) | Comparison block built from R4; each fact tagged verified or unverified | R4; Nari verifies before publish |
| Application steps per school | Unverified (Q-007); the Anywhere flow is Interest, Apply, Enroll, Tuition per prior sessions | Shown as four steps, tagged unverified | Crystal verifies |
| Outcome claims ("4x faster", "1400+ SAT by 8th grade", Cognia accreditation) | Present on the live Anywhere site | Reused in mocks that lead with proof; tagged "live-site claim" | Nari confirms before publish |
| Photography | Only what the two sites already carry | No stock; mocks use existing assets or typographic treatments | Q-009 |
| Community hub URL | Missing (Q-002) | "Current families" route links to a placeholder | Nari |

## 3. Design lenses

| Lens | Definition | What winning looks like | Design levers | Risk if over-weighted |
|---|---|---|---|---|
| L1 Objective | The visitor picks the right school, confidently, fast (REQ-011, REQ-012) | Correct click within 10 seconds; wrong-school applications fall | Two-door layout, unmistakable in-person versus virtual cues, comparison block high on the page | Sterile; a routing page with no reason to believe |
| L2 Existing design system | Continuity with what the two sites look like today (CON-03, REQ-014) | The landing feels like the front door of the sites it leads to | Current typefaces and palette, Holly's element, a shared header and footer the sites can adopt | Inherits today's incoherence; two systems, not one |
| L3 Mission, "MIT of K-8" | Rigor, evidence, building real things, intellectual seriousness | A parent believes this is the most serious K-8 option they have seen | Outcome data as content, technical typography (mono data labels, grids), student work and labs, restrained color | Cold, adult, intimidating for the parent of a six-year-old |
| L4 Elite, private, exclusive | Prestige, selectivity, calm confidence | The page feels like an admissions office, not a marketing funnel | Whitespace, serif display type, dark or neutral palette, few words, "Admissions" language, a crest-like lockup | Reads as old-money prep school; contradicts MIT's builder ethos and the "gifted kids anywhere" access story |

L3 and L4 pull apart: MIT's own brand is open, technical, and hacker-flavored; exclusivity is gated and heritage-flavored. The matrix tests the blend on purpose. Working hypothesis: exclusivity earned by rigor and outcomes beats exclusivity signaled by wealth aesthetics.

## 3b. Marketing objectives

The landing page is a marketing asset before it is a design asset. These objectives are derived from the call, the README (the Anywhere site is a paid-social landing site), and the tags present on every page. Nari confirms or edits them at G0 or G1.

| ID | Marketing objective | Why it matters | Measured by | Lens it pulls on |
|---|---|---|---|---|
| MO-1 | Route paid-social and organic traffic to the right school with minimal drop-off | Wrong-school routing wastes ad spend and Crystal's time | Door click-through split; wrong-school application rate (D-010) | L1 |
| MO-2 | Own the "GT School" brand query: the root domain lands the umbrella, not one campus | Today search sends people to one school or the other (00:03:00) | Search Console impressions and position for brand terms | L1, L2 |
| MO-3 | Capture intent without adding friction | A lead form on the landing competes with the school sites' own funnels | Decision MD-01; downstream application starts | L1 |
| MO-4 | Preserve pixel and audience continuity across the three hosts | GA4, Facebook, TikTok and HubSpot already run on both sites; the landing must feed the same audiences | Tags present; door-click events firing | none (infrastructure) |
| MO-5 | Message match: what the ad promised, the landing confirms in the first screen | Message mismatch is the largest single cause of paid landing drop-off | Bounce rate by campaign | L1, L3 |
| MO-6 | Social proof fit for an elite positioning | Outcome figures, accreditation and testimonials carry the "MIT of K-8" claim; unverified figures destroy it | Verified-claims count (R4) | L3, L4 |
| MO-7 | Exclusivity signals that are true | Manufactured urgency is off-brand and off-limits; real selectivity (admissions process, cohort size) is on-brand | Copy review against MD-06 | L4 |
| MO-8 | End-to-end measurement across hosts | The funnel spans gt.school, two school sites and apply.gt.school; UTMs must survive the hops | Attributed application starts | none (infrastructure) |
| MO-9 | A nurture path for visitors who are not ready | J2 is the largest audience and has no CTA today; HubSpot meetings already exist on the sites | Secondary-CTA conversions | L1 |
| MO-10 | Reduce enrolled-family calls to the general line | Ops cost and a poor experience for current families (00:17:28) | Call volume on the general line | L1 |

## 3c. What optimal and effective mean

Defined in `08-effectiveness-and-expanded-considerations.md` section 3: effectiveness metrics with baselines and targets, the cost and durability dimensions that make a result optimal, and eight principles that bind every decision below. The two that most change the mocks: exclusivity is by selectivity, not by price, because TEFA makes Anywhere free for Texas families; and nothing unverifiable goes live, because the homepage currently carries three different speed claims.

## 4. Mock matrix

| Mock | Working name | Lens order | Hypothesis | Visual direction | First screen | What it tests | Main risk |
|---|---|---|---|---|---|---|---|
| M1 | Two Doors | L1 > L2 > L4 > L3 | The fastest correct choice wins | Split hero, Georgetown left, Anywhere right; current fonts and palette; very few words; comparison table directly below; hosts the one-question decision helper (DD-24) | One umbrella sentence (DD-20), then two equal panels, each: school name, one line, one CTA, one unmistakable cue (campus photo versus at-home) | Pure routing clarity inside the existing brand | Brochure-like; no reason to believe; the split hero does not scale past two campuses (DD-21) |
| M2 | The Institute | L3 > L4 > L1 > L2 | Proof of rigor is the brand | Editorial, academic grid; monospaced data labels in Inconsolata, which the sites already load (DD-19); outcomes as the hero statement; the existing palette at its most restrained | One statement of what GT School is, three proof figures, then "two ways to attend" with the two CTAs | Whether MIT-style evidence resonates with parents | Cold; adult; claims must be verified |
| M3 | Private Quiet | L4 > L2 > L1 > L3 | Prestige is restraint | Large Literata display, generous whitespace, the existing palette at its darkest and most restrained (any new dark surface is flagged as a brand extension, DD-19), single lockup, "Admissions" language | A quiet headline, the two schools as two understated cards, CTAs low-contrast until hover | How far exclusivity signaling can go before it turns cold | Old-money aesthetic; slower routing; big type over thin content is the exact failure Nari described (DD-29) |
| M4 | Builders | L3 > L1 > L2 > L4 | Show children building | Image-forward using existing site photos of students at work and intensives; warm palette drawn from both sites; a "what students built" strip | A full-bleed student-work image, one line, the two doors as "two programs of one lab" | Mission through student work rather than statistics | Depends on photo quality we do not control (DD-31); stock is off-limits (00:08:49) |
| M5 | One School, Two Campuses | L2 > L1 > L3 > L4 | Coherence itself is the message | The merged token set from both sites (the actual design-system reconciliation), a shared header and footer both future sites inherit, a campus switcher that persists | Umbrella lockup, one line, a campus switcher (In person: Georgetown, Virtual: Anywhere) with two CTAs | The Phase 2 design system (DEL-004, REQ-032) in use; continuity for the site redesigns | Least dramatic; may under-sell the mission |

Two mocks lead with L3 on purpose: M2 reads "MIT" as evidence, M4 reads it as builder culture. Both readings are live in the brief and deserve a separate test.

Common to all five (non-negotiable):

| Item | Rule | Requirement |
|---|---|---|
| First screen | Both schools named in full, one-line description each, one CTA each | REQ-011, REQ-018 |
| Distinction | In person versus virtual is unmistakable before any CTA | REQ-012 |
| Comparison | A "shared" then "different" block as high as the layout allows | REQ-013 |
| Mobile | Designed at 390px alongside 1440px; nothing hidden on mobile | REQ-015 |
| Current families | A visible route, general phone number absent from the first screen | REQ-017 |
| Links | CTAs link to the real school sites and to apply.gt.school; nothing else external | REQ-070 |
| Forms | None. No lead form in any mock, so nothing can reach the live webhook | Hard rule |
| Copy | Real copy, no placeholder text; every factual claim tagged verified or unverified in the rationale | REQ-016, DD-07 |
| Tokens | All five consume `tokens.css` from R1; M5 uses the merged set fully | REQ-032 |

## 5. Research swarm

Fan-out: 4 researchers plus 1 synthesizer, run once. Web research through search and fetch; live-site inspection with third-party hosts blocked so no analytics or pixels fire.

| Agent | Question | Method and sources | Output | Feeds |
|---|---|---|---|---|
| R1 Design tokens | What are the real computed tokens of both sites (type scale, colors, spacing, radii, shadows, breakpoints, components), and where do they conflict? | Repo CSS for Anywhere; fetch gt.school CSS; headless browser with third-party requests blocked; the `extract-design-system` method: real values, never guessed | `research/R1-design-tokens.md`, `mockups/shared/tokens.css` (draft) | DD-01, DD-02, DD-11, all mocks, DEL-004 |
| R2 Brand semiotics | How do MIT, Caltech and peer research institutions express rigor visually, how do elite K-12 schools (Avenues, Nueva, Harker, Lakeside, Exeter, Davidson Academy, Stanford OHS, Alpha School) express exclusivity, and where do the two vocabularies conflict? | Site inspection and published brand guidelines; a cue-by-cue table with a recommendation per lens | `research/R2-brand-semiotics.md` | DD-09, DD-10, M2, M3, M4 |
| R3 Conversion and marketing patterns | What do dual-path landing pages, comparison blocks and above-the-fold conventions do for a parent choosing a school; which trust signals matter; how do parents behave on mobile; how do paid-social landers keep message match, pass UTMs across hosts, keep pixel audiences intact, and signal selectivity without dark patterns; how should a root domain be structured to own a brand query? | Conversion research and documented case studies; peer school landers; platform documentation for GA4, Meta and TikTok cross-domain measurement | `research/R3-conversion-and-marketing.md` | DD-03 to DD-06, DD-13, DD-14, MD-01 to MD-14, M1 |
| R4 Content and proof | Every factual claim available about both schools (programs, outcomes, accreditation, location, schedule, steps, tuition), what differs between them, and what is unverified | Mirror HTML, gt.school HTML fetched without JavaScript, apply.gt.school public pages | `research/R4-content-and-proof.md` | Comparison block, copy, DD-07, DD-17, Q-007, Q-008 |
| R5 Synthesizer and watchdog | Merge R1 to R4 into the decision register; flag contradictions, unsourced claims, and anything that conflicts with a requirement | Reads the four reports; writes the Fable column | `07-design-decisions.md` v0.1 | E1 |

## 6. The decision register lives in `07`

Every design (DD), marketing (MD), motion (MN), analytics (AN), advertising (AD), chatbot (CB) and SEO (SE) decision is one row in `07-design-decisions.md`, with Fable's and Astra's columns, a verdict and a status. This plan only references those ids. The skeleton tables that used to sit here were moved into `07` on 2026-09-10 so that no id is defined in two places (`tools/check-links.py` fails on duplicates).

| Part of `07` | Ids | Covers |
|---|---|---|
| A | DD-01 to DD-37 | Typography, palette, hero, cue system, CTAs, comparison, proof, imagery, mission and exclusivity cues, lockup, navigation, current families, mobile, copy, trust, style envelope, orientation before choice, scalability, content allocation, CTA repetition, the decision helper, direct-to-application, parity, nomenclature, evergreen content, density, jargon, asset dependency, support intent, decoding GT, the day as comparison, product visibility, twice-exceptional readability, share affordance |
| B | MD-01 to MD-26 | Conversion goal, secondary CTA, message match, value hierarchy, social proof, true scarcity, root SEO, tags, UTMs, wrong-school prevention, contact, remarketing, tuition disclosure, geography, qualification friction, claims governance, Alpha prominence, positioning, local search, consent, tests, language, Instagram continuity, answer engines, access messaging, the TEFA module |
| C | MN-01 to MN-15 | The job of motion, hero entrance, door hover, scroll reveals, state transitions, video, CTA micro-interactions, signature motion, stack, performance budget, reduced motion, mobile, motion tokens, continuity across hosts, in-app browsers |
| D | AN-01 to AN-18 | GA4 property and stream structure, access, GTM, event taxonomy, key-event cleanup, cross-domain, source of truth for conversions, UTM governance, ad tags, consent mode, children's data, server-side tagging, PostHog, reporting, development traffic, search and answer engines, HubSpot, retention and QA |
| E | AD-01 to AD-14 | Channel roles, destinations, UTMs, pixels, optimization events, conversion APIs, audiences, creative match, geography, attribution, claims in ads, organic profile links, network cross-traffic, ownership |
| F | CB-01 to CB-08 | TrueFoundry hosting, model access, knowledge base, guardrails, evaluation gate, observability, cost controls, placement |
| G | SE-01 to SE-14 | Domain architecture, redirects, target queries, page mapping, structured data, technical baseline, content plan, entity consistency, answer-shaped content, crawler policy, AEO measurement, local search, preview indexation, governance |

Motion stance per mock (mock-specific, so it stays here):

| Mock | Motion stance | Signature moment | Reduced-motion behavior |
|---|---|---|---|
| M1 Two Doors | Static; hover and focus styling only (MN-01 to MN-08 revised after R2) | None | Identical |
| M2 The Institute | Static | None; figures render as static numbers, as 2hourlearning.com does (R2 S26) | Identical |
| M3 Private Quiet | None | None | Identical |
| M4 Builders | Static | None; the student-work strip is a static grid | Identical |
| M5 One School, Two Campuses | Static | None; the campus switcher swaps instantly with reserved space (MN-05) | Identical |

Research amendments (they change the swarm brief, so they stay here):

| Research amendment | Addition |
|---|---|
| R2 | Also audits the Alpha network's campus pages and brand conventions, the competitive set (public gifted programs, private gifted schools, Davidson Academy Online, Stanford OHS, enrichment programs) and press coverage of learning-speed claims |
| R4 | Also builds the claims inventory (every number on both sites, with its source), the TEFA facts and disclaimers, admissions facts (90th-plus percentile evidence, cohort sizes, windows), intensives logistics, and what follows 8th grade |
| New internal ask (DEL-022) | Alpha marketing patterns, brand guidelines, claims review, approved outcome data and admissions flow, requested from Nari and Holly before external research is trusted |

The parent-questions test used in E2, derived from Nari's "as a new parent, I get exactly what I need" (00:13:51) and replaced by the REQ-039 session when it happens: what is GT School; who is it for; in person or online, and where; what is the same and what differs between the two; what it costs, or where to find out; how to apply and the steps; accreditation and outcomes; how to reach a human.

### 6c. Parent questions the landing must answer (E2 amendment)

Every mock answers these on the page or its rationale says which it defers to the school sites and why (C-13). Astra scores each mock against this table at E2.

| # | Question a parent arrives with | Answered by | Journey |
|---|---|---|---|
| PQ-01 | What is GT School? | Section 1, umbrella sentence | J1 |
| PQ-02 | Is it for my child? | Sections 1, 4, 5: gifted and talented, the 90th percentile bar | J1 |
| PQ-03 | In person or online: what are my options? | Section 1, the two doors | J1 |
| PQ-04 | Where is the campus? | Sections 1 and 3: Georgetown, Texas | J1 |
| PQ-05 | What does a day look like? | Section 3, "The day" | J1, J2 |
| PQ-06 | What does it cost, and can TEFA help? | Section 3, "Tuition and access" and the TEFA module | J2, J3 |
| PQ-07 | How do I apply? | Section 5 | J3 |
| PQ-08 | Who teaches my child? | Section 3 "Guides", section 4 | J1, J2 |
| PQ-09 | How much in-person time does GT Anywhere have? | Section 3, "In-person time" | J1 |
| PQ-10 | What results does the school get, and is it accredited? | Deferred by decision (G0.5 items 2 and 3): the page is silent; the rationale says so and points to admissions | J2 |
| PQ-11 | What happens after 8th grade? | Section 3 row, deferred to admissions (Q-013) | J2 |
| PQ-12 | I am a current family, where do I go? | Sections 0 and 7 | J4 |
| PQ-13 | I am not ready to apply, what can I do? | Section 6 | J2 |
| PQ-14 | Is GT School part of Alpha School? | Section 1, provenance line | J1 |

## 7. Ensemble protocol (Codex Astra)

| Item | Rule |
|---|---|
| Model and invocation | `codex exec -m gpt-6-astra -s read-only` from this worktree, so Astra reads `0_plan/` and the mocks directly. Reasoning effort stays at the configured `xhigh`. Screenshots attached with `-i` for the mock review. |
| Authorship | Astra never writes to the repo (read-only sandbox). Fable captures Astra's output into `0_plan/ensemble/E*.md` verbatim, then merges into the register. One author of record. |
| E1 Decision review | Input: `07-design-decisions.md` parts A, B and C (Fable column filled) and `research/`. Output: for each DD, MD and MN, Astra's own decision and reasoning, then agree or disagree with Fable and an alternative where it disagrees. Fable fills the Astra column verbatim. |
| E2 Mock review | Input: each mock's HTML plus desktop and mobile screenshots, `06-mockup-rationale.md`, the lens table, the parent-questions test (section 6c). Output: per mock, a score against L1 to L4 and REQ-011 to REQ-018, which parent questions the page answers, plus findings. |
| E3 Completion validation | Input: the checklist in section 8b. Output: pass or fail per item with the file path or evidence Astra used. |
| Disagreement | Both reasonings stay in the register. The verdict column records `Fable`, `Astra`, or `Escalate`. Escalate only when the disagreement changes what a visitor sees on the first screen; Johnny or Nari decides. |
| Fable checks Astra | Every Astra claim is checked against the files: no invented paths, no invented facts, no requirement misquoted. Result recorded in the status table with a count of corrected items. |
| Astra checks Fable | E3 is the check: Astra validates completion independently against the checklist, not against Fable's own summary. |

## 8. Master plan and status

Status values: `Not started`, `In progress`, `Done`, `Blocked`, `n/a`. Check columns: `Pending`, `Pass`, `Fail (n)`.

| # | Step | Deliverable | Fable | Astra | Fable checks Astra | Astra checks Fable | Gate |
|---|---|---|---|---|---|---|---|
| 0 | Plan written and shown | This file | Done (v0.2) | n/a | n/a | Pending (E3) | **G0: Johnny approves** |
| 0a | E0: Astra fills its column on every decision in `03` and `07` (D, DD, MD, MN, AN, AD, CB) | `ensemble/E0-*.md`; merged into `03` and `07` | Fable column done 2026-09-10 | In progress | Pending | n/a | Requested by Johnny 2026-09-10; not gated |
| 0b | GA4 connected and first snapshot taken | `10-analytics-current-state.md`, `tools/ga4-snapshot.py` | Done 2026-09-10 | n/a | n/a | Pending (E3) | Requested by Johnny 2026-09-10 |
| 1 | Inputs collected | `0_plan/inputs/` (Holly element, Nari draft) or an explicit "proceed without" | Blocked on Johnny | n/a | n/a | n/a | G0 |
| 2 | R1 design tokens | `research/R1-design-tokens.md`, `mockups/shared/tokens.css` | Done 2026-09-10 (report filed) | n/a | n/a | Pending (E3) | |
| 3 | R2 brand semiotics | `research/R2-brand-semiotics.md` | Done 2026-09-10 (report filed) | n/a | n/a | Pending (E3) | |
| 4 | R3 conversion patterns | `research/R3-conversion-and-marketing.md` | Not started | n/a | n/a | Pending (E3) | |
| 5 | R4 content and proof | `research/R4-content-and-proof.md` | Done 2026-09-10 (report filed) | n/a | n/a | Pending (E3) | |
| 6 | R5 synthesis | `07-design-decisions.md` v0.2: 32 rows revised from R1 to R4 evidence, 12 of them toward Astra's position; claims register CR-001 to CR-031; Q-007 to Q-021 evidenced; tokens draft; gt.school inventory | Done 2026-09-10 | Audit of revised cells running | Pending | Pending (E1) | |
| 7 | E1 Astra decision review | `ensemble/E1-decisions.md`; Astra column and verdicts merged | n/a | Not started | Pending | n/a | |
| 8 | Build wave 1 | M1 to M4 (4 builders plus Fable as watchdog) | Done 2026-09-10: four mocks built by Sonnet 5 builders, each 32 of 32 on `check-mocks.py`, browser-checked at 390 and 1440 by Fable, fix passes applied (mobile comparison stacking, desktop door height, real logos) | n/a | n/a | Pending (E2) | |
| 9 | Build wave 2 | M5 plus the gallery `mockups/index.html` | In progress 2026-09-10: M5 built and in its fix pass (hidden-table overflow, stacked mobile table, schedule visual, desktop fold, Anywhere door photo); gallery and `06-mockup-rationale.md` being assembled | n/a | n/a | Pending (E2) | |
| 10 | Rationale | `06-mockup-rationale.md`: one row per mock, every decision traced | Not started | n/a | n/a | Pending (E2, E3) | |
| 11 | Self-QA | 390px and 1440px screenshots per mock, zero console errors, links resolve, a11y quick pass | Gate written: `tools/check-mocks.py` enforces the brief's 15 rules; browser pass follows the builds | n/a | n/a | Pending (E2) | |
| 12 | E2 Astra mock review | `ensemble/E2-mocks.md` | n/a | Not started | Pending | n/a | |
| 13 | Fix pass | Findings from E2 applied or logged as declined with a reason | Not started | n/a | n/a | Pending (E3) | |
| 14 | E3 Astra completion validation | `ensemble/E3-completion.md` against section 8b | n/a | Not started | Pending | n/a | |
| 15 | Fable verification of Astra | Corrections logged in the status table | Not started | n/a | Pending | n/a | |
| 16 | Package for Nari | Gallery plus rationale plus register; DEL-005 marked ready | Not started | n/a | n/a | n/a | **G1: Nari picks a direction** |
| 17 | Harden the winner | Analytics events, SEO meta, full a11y audit, Lighthouse, then DEL-006 and DEL-007 | Not started | n/a | n/a | n/a | After G1 |

### 8b. Completion checklist (what E3 validates)

| ID | Check | Evidence Astra must cite |
|---|---|---|
| C-01 | Five mocks exist, each opens, each is self-contained under `0_plan/mockups/M*/index.html` | Paths |
| C-02 | Every mock satisfies the "common to all" table in section 4 | Per-mock, per-row |
| C-03 | Every mock renders correctly at 390px and 1440px | Screenshot filenames |
| C-04 | Zero console errors per mock | Console capture |
| C-05 | No forms, no external scripts other than fonts | Grep evidence |
| C-06 | No placeholder text; every factual claim tagged in the rationale | Rationale rows |
| C-07 | `06-mockup-rationale.md` has one row per mock with lens order, hypothesis, and each decision traced to a DD id or requirement | Row count and ids |
| C-08 | `07-design-decisions.md` has Fable and Astra columns filled for every DD (part A), MD (part B) and MN (part C), each with a verdict | Empty-cell count is zero |
| C-09 | Every research report cites its sources; no claim without one | Per report |
| C-10 | The gallery shows all five side by side with links to rationale | Path |
| C-11 | Section 8 status table is current | Diff against files |
| C-12 | Push-back items (section 10) each have a decision or an open owner | Per row |
| C-13 | Each mock answers the parent questions (section 6c, E2 amendment) or the rationale says which it defers to the school sites and why | Per mock, per question |
| C-14 | Each mock's rationale row declares its asset dependencies and fallback (DD-31) | Rationale rows |
| C-15 | Each mock's motion spec is complete (MN-01 to MN-14) and its reduced-motion behavior is verified in a browser | Spec rows plus a reduced-motion screenshot |

## 9. Build quality bar ("final product, not draft")

| Dimension | Bar |
|---|---|
| Copy | Final-quality, school-specific, full names, no placeholder text; unverified facts visibly tagged in the rationale, not on the page |
| Visual | Real tokens from R1; no default browser styling; consistent spacing scale; typographic hierarchy holds at both breakpoints |
| Responsive | Mobile first: the 390px first screen is designed before desktop (DD-14). 390px and 1440px designed, 768px checked; no horizontal scroll; tap targets at least 44px |
| Assets | Existing site imagery or typographic treatments only; no stock; images sized and lazy-loaded except the hero |
| Behavior | All links resolve to real destinations; hover and focus states present; no forms |
| Accessibility | Semantic landmarks, one h1, contrast AA, keyboard-reachable CTAs, alt text |
| Performance | No external JavaScript; fonts from the repo or Google Fonts only; each mock under 1 MB excluding shared images |
| Motion | Transform and opacity only, 100 to 300 ms (the sites' own transition values, R1), nothing animating the Largest Contentful Paint element before first paint, `prefers-reduced-motion` honored, touch equivalents for hover styling (MN-10 to MN-12) |
| Packaging | One folder per mock with its own CSS; shared `tokens.css` and images under `mockups/shared/`; gallery index with thumbnails and rationale links |

## 10. Push-back and recommendations

| # | Request | Concern | Recommendation | Decision needed |
|---|---|---|---|---|
| 1 | "Fully build each as final products" | Five production-hardened pages means four are discarded after Nari picks. Hardening (analytics events, SEO meta, redirects, full a11y audit, Lighthouse tuning) is where the hours go. | All five built to the section 9 bar: complete, polished, real copy, responsive, zero errors. Production hardening for the winner only (step 17). | Johnny: accept, or say "harden all five" |
| 2 | "MIT of K-8" and "elite, private, exclusive" as one brief | The two vocabularies conflict (section 3). Choosing the blend by taste alone will not settle it. | Test the spectrum on purpose (M2 evidence, M3 restraint, M4 builders). Prediction: a blend of M2 and M5 wins. Let the mock review, not the brief, decide. | None now; noted for G1 |
| 3 | "Existing design system" | There are two systems today, not one. The landing must merge them or pick one. | R1 extracts both; M5 does the reconciliation as a real deliverable (DEL-004) that the other four consume as `tokens.css`. | None |
| 4 | Missing inputs | Holly's element and Nari's draft are not available here; facts about differences and application steps are unverified. | Paste both Slack items into `0_plan/inputs/` before the build, or approve "proceed with flagged placeholders". Facts ship tagged and get verified by Nari and Crystal before publish. | Johnny |
| 5 | "Agent swarms" | The global working agreement caps fan-out at 4 implementors plus 1 watchdog. Five parallel builders would break it. | Research: 4 plus 1. Build: wave of 4, then 1, with Fable as watchdog on both. | None |
| 6 | Codex Astra as validator | Astra is a strong second opinion but has no memory of the call and cannot judge Nari's taste. | Astra validates completeness and coherence (E1 to E3). Direction is chosen by Nari at G1. Astra never edits the repo. | None |
| 7 | Live-site research | Inspecting gt.school and anywhere.gt.school in a browser fires GA, Facebook, TikTok and HubSpot beacons. | Block third-party hosts during R1 and R4; fetch HTML and CSS without JavaScript where possible. | None |
| 8 | "All of this falls in the planning folder" | Mocks are HTML, not planning docs; the winner will be code. | Mocks live in `0_plan/mockups/` as requested. The winner moves to `sites/landing/` when D-003 is decided; `0_plan/` stays documentation. | None |
| 9 | Outcome claims in the mocks | "4x faster" and "1400+ SAT by 8th grade" come from the live site, not from a verified source in this repo. | Reuse them tagged "live-site claim". Nari confirms before anything publishes. | Nari, before G1 |
| 10 | Cost and time | Five complete mocks, five research reports, three Astra passes at `xhigh`. | Budget roughly one working day of wall-clock in this session, Astra passes a few minutes each. Stop and report at step 7 (after E1) if research changes the matrix. | Johnny: accept |

## 11. What G0 needs from Johnny

| # | Ask | Default if unanswered |
|---|---|---|
| 1 | Approve or edit the mock matrix (section 4) | Build as written |
| 2 | Scope: five polished plus winner hardened, or five hardened (push-back row 1) | Five polished, winner hardened |
| 3 | Paste Holly's element and Nari's draft into `0_plan/inputs/`, or say "proceed without" | Proceed with flagged placeholders |
| 4 | Astra confirmed: `codex exec -m gpt-6-astra -s read-only --skip-git-repo-check` returned `ASTRA-OK` on 2026-09-10 (7,117 tokens, mostly Codex's own skills context). No action unless you want a different model. | Use `gpt-6-astra` |
| 5 | Confirm mocks may link out to the live sites and apply.gt.school (read-only links, no forms) | Yes |
| 6 | Confirm the style envelope (DD-19): type families and palette fixed, any departure flagged for Nari rather than assumed | Fixed, departures flagged |
| 7 | Confirm motion is in scope for the mocks under part C (MN), with the hero entrance animation dropped (MN-02) | In scope, hero static |
| 8 | Approve a one-page positioning brief (DEL-017) as gate G0.5 between research and build: umbrella promise, per-school promise, proof, tone, affiliation stance, price and access stance. Nari approves it | Brief happens; Nari approves |
| 9 | Ask Nari this week for the two facts the mocks cannot do without: which speed claim is correct and sourced (Q-019), and how tuition and access are stated for each school (Q-011) | Mocks carry the claims tagged unverified and state tuition only for Anywhere |

## 12. File map after the build

| Path | Content |
|---|---|
| `0_plan/05-landing-mockups-plan.md` | This plan and the live status table |
| `0_plan/06-mockup-rationale.md` | One row per mock: lens order, hypothesis, every decision traced |
| `0_plan/07-design-decisions.md` | Decision register: part A design (DD), part B marketing (MD), part C motion (MN), with Fable and Astra columns |
| `0_plan/research/R1..R4-*.md` | Research reports with sources |
| `0_plan/ensemble/E1-decisions.md`, `E2-mocks.md`, `E3-completion.md` | Astra's outputs, verbatim |
| `0_plan/inputs/` | Holly's element, Nari's draft, anything pasted from Slack |
| `0_plan/mockups/index.html` | Gallery |
| `0_plan/mockups/M1-two-doors/` … `M5-one-school-two-campuses/` | One folder per mock, self-contained |
| `0_plan/mockups/shared/` | `tokens.css`, shared images, screenshots |
