# 17 Design studio runbook: how the landing mocks get to "actually good"

| Field | Value |
|---|---|
| Purpose | The thorough prompt Johnny asked for on 2026-09-11: a self-contained runbook that a fresh session runs until every mock passes a detailed visual QA on a real viewport matrix and a design critic scores it high on every lens. It replaces the one-pass build of 2026-09-10 |
| Why it exists | Two builds and two review rounds still produced pages Johnny judged "very subpar": composed against two viewports, by builders who never saw their pages, with no design foundation and a QA that measured a handful of boxes |
| Inputs | `18-knowledge-base-plan.md` (the research this runbook consumes), `05` (lenses, matrix), `07` (decisions), `15` and `16` (positioning decisions), `mockups/shared/copy.md`, `tokens.css`, `1_spec/03`, `1_spec/04` |
| Status | Decided 2026-09-11 by Johnny after push-back: twenty complete mocks, no rough drafts; phases run as goal loops in this order: planning from research, design hunt, concept catalog, twenty builds with full QA (section 11) |

## 1. What went wrong, plainly

| Symptom Johnny saw | Root cause | What changes |
|---|---|---|
| Pages do not fit the screen | Fixed rem heights tuned to 1440 by 900 and 390 by 844 only; laptops at 1280 by 720 or 1536 by 864, tablets and tall phones were never rendered | A viewport matrix (section 4) and fluid first screens sized with `100svh` and clamp scales, verified on every size |
| Design quality low | No design foundation: no studied references, no composition principles, no image direction, no motion vocabulary; one model composing from taste alone | A knowledge base built first (`18`), a Design Director brief per mock, and design engineers who build from principles, not rules |
| QA passes but pages look wrong | The checker proves rules; the browser pass measured CTA bottoms; nobody scored the page as a designed object | Visual QA in two layers: mechanical (screenshot matrix, geometry, overlap, overflow, contrast, focus) and critical (a design critic scoring each lens against the rubric in section 6, with the exemplars beside it) |
| Five near-identical pages | Directions differed in surface, not structure; motion was banned outright | A tournament (section 3): many first-screen concepts, then fewer full mocks, then hardening; motion allowed where the vision earns it (section 7) |
| Fixes made by builders who could not see | The brief forbade browser use to avoid contention on one browser | A real test runner (Playwright Test, D-028) that any agent can run headless, producing screenshots and videos as files |

## 2. The studio: roles, models, tools

| Role | Who | Model | Tools | Output |
|---|---|---|---|---|
| Design Director | Fable | Claude Fable 5.1 | Knowledge base, exemplars, browser | The direction brief per mock (section 5), the critique of every iteration, the go or no-go per round |
| Design Engineers | Fork agents of Fable, one per mock, four at a time plus a watchdog | Claude Fable 5.1 (forks inherit the brief and the knowledge base; Sonnet builders are for fix lists only) | Playwright Test runner, headless; screenshots and videos as files | The mock, its rationale, its own QA run |
| Visual QA | Deterministic runner, then a Fable QA fork reading the artifacts | Playwright Test (D-028) | `tests/mocks/` specs: viewport matrix, geometry, overflow, overlap, contrast, focus, reduced motion, console, links | `QA-<date>.md` per mock with pass or fail per test per viewport, plus the screenshot grid and a scroll video |
| Design Critic | Fable fork with the rubric and the exemplar screenshots side by side, then Astra independently | Fable 5.1, `gpt-6-astra` | Screenshot grid, exemplars | Lens scores 1 to 5 with reasons; the two must agree within one point or the row escalates |
| Research swarm | Six to eight agents, one per topic cluster in `18` | Sonnet 5 for retrieval, Fable for synthesis | Web fetch, no live GT site loads in a browser | `0_plan/kb/*.md`, each with sources, principles and "how it applies to GT" |
| Astra | Codex | `gpt-6-astra` | Read-only | E-series reviews at each gate |
| Humans | Johnny at every gate; Nari at G1 | | | Decisions |

Fan-out ceiling stays four parallel design engineers plus one watchdog per wave.

## 3. The tournament

Volume alone will not raise quality; selection with iteration will. Twenty full mocks would spread the effort thin and give Nari twenty mediocre pages to judge. The recommended shape:

| Round | What is built | How many | Judged by | Survivors |
|---|---|---|---|---|
| R0 Knowledge base | `18-knowledge-base-plan.md` executed: design, marketing, advertising, branding, motion, accessibility, performance, exemplars | 8 clusters | Fable synthesis, Astra check for unsourced claims | Design Director brief and QA rubric are written from it |
| R1 Concept boards | First screen only (header to compare anchor), at 390 by 844 and 1440 by 900, one HTML file each, real copy, real tokens | 12: the five existing directions plus seven new ones from the knowledge base (for example: campus map led; day-in-the-life timeline; letter from the head of school; typographic manifesto; proof ledger; photo essay; system shell with motion) | Design Critic (Fable then Astra) on the rubric; Johnny sees the grid | 6 |
| R2 Full mocks | Sections 0 to 8 complete, viewport matrix, motion where the brief allows, QA runner green | 6 | Visual QA matrix, Design Critic, Astra E2 | 3 |
| R3 Hardening | Fix everything, add the in-app browser matrix, reduced-motion video, Lighthouse | 3 | Full QA, Astra E3, Johnny | Package for Nari, G1 |

If Johnny wants twenty, the honest place for twenty is R1 (concept boards are cheap and comparable); full mocks stay at six.

## 4. Viewport matrix

Every mock renders and passes on all of these. "Fits the screen" means: header, umbrella sentence, provenance line and both door CTAs are fully visible without scrolling, and nothing overflows horizontally.

| Class | Sizes | Why |
|---|---|---|
| Phone | 360 by 780, 390 by 844, 412 by 915, 430 by 932 | Two thirds of sessions are mobile (fact 5); Android and iPhone widths |
| Phone in an app browser | 393 by 596, 390 by 600, 430 by 675, 412 by 775 (bounds derived in `kb/K8` from device descriptors minus a persistent 64px toolbar; REQ-024 replaces them with real measurements) | Instagram, Facebook and TikTok webviews keep their toolbars, so the small viewport is the only viewport there; the earlier 390 by 664 row was mobile Safari, not a webview (K8) |
| Tablet | 768 by 1024, 820 by 1180, 1024 by 1366 | iPad portrait and landscape |
| Laptop | 1280 by 720, 1366 by 768, 1440 by 900, 1536 by 864 | The most common desktop sizes; 1280 by 720 is the hardest fold |
| Desktop | 1920 by 1080 | Large screens must not look empty |
| Zoom | 1280 by 720 at 125 percent, 390 by 844 at 200 percent text | Accessibility zoom and reading-mode sizes |

Tests run at every size: no horizontal overflow; first screen fits as defined; no element overlaps another (bounding-box intersection test on text elements); no text is clipped; every interactive target at least 44 by 44; contrast of every text node against its background at AA; visible focus on every focusable element with 3:1 against its surroundings; one h1; images loaded (after a stepped scroll) and none broken; console clean; reduced-motion run shows no transitions or animations; links resolve to the allowed hosts. Screenshots: viewport and full page per size; one scroll video per mock at 390 by 844 and 1440 by 900.

## 5. The Design Director brief, per mock

Written before any engineer starts, from the knowledge base:

| Section | Content |
|---|---|
| Thesis | One sentence: what this direction argues about GT School |
| Exemplars | Three named reference pages from the knowledge base with the specific move each contributes (composition, type, imagery, motion), with screenshots beside the brief |
| Composition | Grid, rhythm, measure, first-screen structure at phone and laptop, how sections differ in weight |
| Typography | Scale steps used, pairings, where Literata carries and where Inter Tight and Inconsolata serve |
| Color and surface | Which surfaces, where the accent may appear as text (never below AA), where navy is a surface |
| Imagery | Which photographs, crops, treatments; the fallback when a photograph is rejected |
| Motion | Per section 7: what moves, why it serves the objective, budgets, reduced-motion behavior; or "none" with the reason |
| Copy | The fixed slots from `copy.md`; any new wayfinding words recorded in `copy.md` first |
| Acceptance | The rubric scores this mock must reach and the QA matrix it must pass |

## 6. Design rubric (the critic's scorecard)

Scored 1 to 5 per row, per mock, by the Fable critic and by Astra; both must be at or above 4 on every row for the mock to leave R2.

| Row | Question the critic answers | Evidence required |
|---|---|---|
| Objective (L1) | Can a parent tell in person from online and act in ten seconds at 390 and at 1280 by 720? | First-screen screenshots at both; the fold test |
| Composition | Is there a grid, a rhythm and a hierarchy a designer would recognize? Does every section have a reason to look the way it does? | Full-page captures with the exemplars beside them |
| Typography | Are the scale, measure and pairing deliberate? Does the display type carry personality without hurting reading? | Zoomed crops of the h1, a table row, a button |
| Imagery | Do the photographs carry weight, crop well at every size, and reinforce the cue? | Door and hero crops at 390 and 1440 |
| Color and surface | Is the palette used with intent, the accent spent once per screen, dark surfaces purposeful? | Palette usage map |
| Motion | If present, does it serve orientation or choice, stay in budget and degrade cleanly? If absent, is the stillness deliberate? | Scroll video; reduced-motion run |
| Mission (L3) and exclusivity (L4) | Does the page read as the most serious K-8 option, selective by rigor not price? | Critic's reading against the positioning brief |
| Craft | Zero clipped text, orphans in the h1, misaligned baselines, inconsistent radii or spacing | QA matrix plus the critic's crop review |
| Continuity (L2) | Does it look like the front door of the two sites it leads to, and could the sites inherit its shell? | Side-by-side with the live sites |

## 7. Motion, reopened

The register (MN-01 to MN-15) settled on static mocks after R2 found no comparable institution animating. Johnny now wants some directions to carry considered motion. That is a decision change, recorded as D-031 for Johnny to confirm, with these constraints kept:

| Keep | Change |
|---|---|
| Transform and opacity only; 100, 200, 300 ms; `prefers-reduced-motion` honored; nothing animates the LCP element before first paint; no scroll hijacking; touch equivalents | Directions may propose motion that serves orientation or choice: a door that reveals its one line on hover and focus, a campus switcher that slides its indicator, a schedule diagram that draws its segments once, a photo strip that scrolls with the page rather than against it |
| CSS first; JavaScript only where CSS cannot (IntersectionObserver for a one-time reveal), inline, dependency-free | The knowledge base cluster "motion in elite and educational sites" decides which of these earn their place |
| Every motion recorded in the mock's motion table with trigger, duration, easing and reduced-motion behavior | The Design Critic scores motion as a rubric row (section 6) |

## 8. The goal loop that runs until complete

```
GOAL: every surviving mock passes the viewport matrix (section 4) with zero failures,
      scores at least 4 on every rubric row (section 6) from both critics,
      passes check-mocks, check-claims and Astra's round review,
      and its rationale traces every decision and every figure.

for round in R0, R1, R2, R3:
  build the round's artifacts (fan-out 4 + watchdog)
  run Visual QA on every artifact (runner, headless, all viewports)
  critic pass (Fable) then Astra pass; disagreements over one point escalate to Johnny
  for each artifact failing any test or rubric row:
    design engineer fixes with the QA report and critique attached (ceiling: 4 iterations per artifact per round)
    re-run QA and critic
  artifacts still failing after the ceiling: escalate with evidence, do not carry forward
  gate: Johnny sees the round grid and the scorecard; only survivors proceed
package for Nari at G1 with the grid, videos, scorecard, rationale and register
```

Stall rule: any iteration that changes nothing measurable is a stall; the runbook requires the engineer to state what changed and what the QA delta is. Every loop entry is a run-log row (`1_spec/RUN-LOG.md`) with reasoning, and every escalation carries both critics' findings.

## 9. Decisions Johnny makes before this runs

| # | Decision | Recommendation | Why it blocks |
|---|---|---|---|
| 1 | D-028: install Playwright Test under `tests/` with its own package.json | Yes | Videos, the viewport matrix, reduced-motion emulation and headless runs by every agent need a real runner; the MCP browser is one shared instance without video or media emulation |
| 2 | D-031: reopen motion for the directions whose brief earns it | Yes, within section 7 | Otherwise "interactive or animated aspects" cannot be built without breaking the register |
| 3 | Tournament shape and count | 12 concept boards, 6 full mocks, 3 hardened; twenty only at the concept-board round | Full mocks at twenty dilute effort and Nari's attention |
| 4 | Knowledge base first (R0) | Yes, one session of research before any new composition | Every prior failure traces to composing without a foundation |
| 5 | Engineers are Fable forks, not Sonnet | Yes for composition; Sonnet for mechanical fix lists | The 2026-09-10 build showed the difference |
| 6 | Budget | Roughly: R0 eight agents, R1 twelve boards, R2 six mocks with up to four iterations each, R3 three; expect several million tokens and most of a day of wall clock | Johnny approves the spend |

## 10. Push-back

| Ask | Push-back | Recommendation |
|---|---|---|
| Twenty mocks | Twenty complete pages is volume, not quality; the first five were weak because each got too little iteration, not because there were too few | Twenty first-screen concepts, six full mocks, three hardened |
| "Perfect according to each plan" | Perfect needs a definition or the loop never ends | The goal in section 8: matrix zero failures, rubric at or above 4 from two critics, checkers green, Astra pass, rationale complete; the ceiling escalates instead of looping forever |
| Videos | The current MCP browser cannot record; a runner can | D-028 first |
| Animated mocks | Motion was banned by a decision the research supported; changing it is fine but must be a recorded decision, not a drift | D-031 with section 7's constraints |
| Do it all in one prompt | One prompt can carry the runbook, but the gates need a human; a loop that runs unattended past a gate will produce polished work in the wrong direction | Run round by round; Johnny looks at each grid |

## 11. Johnny's decision, 2026-09-11, and the goal sequence that runs

Johnny read sections 3 and 10 and decided: twenty final mocks, fully complete, no rough drafts. The tournament in section 3 is therefore replaced by four goal loops, each run until its acceptance holds, each with ceilings and escalation, each logged in `1_spec/RUN-LOG.md`.

| Goal | Acceptance (the loop ends only when every line holds) | Swarm | Ceiling |
|---|---|---|---|
| G-A Planning from research | `18-knowledge-base-plan.md` executed: K0 to K14 written to `0_plan/kb/`, each with sourced findings, principles, anti-patterns and GT application; `INDEX.md`; Astra E4 finds no unsourced claim; the Design Director brief template and the calibrated rubric exist | 4 retrieval agents plus watchdog per wave, 4 waves | 2 passes per cluster, then escalate |
| G-B Design hunt | At least 40 candidate pages found across education and craft-led sectors, each fetched and recorded; the best 20 kept in `kb/EXEMPLARS.md` with screenshots at 390 and 1440 captured headless; Johnny sees the grid | 4 agents plus watchdog; one capture agent | 2 passes |
| G-C Concept catalog | For each kept exemplar, an exhaustive listing of its design concepts: composition, grid, type system, color and surface, imagery, motion, copy density, proof, navigation, CTA system, responsive behavior; `kb/CONCEPTS.md` cross-indexed to the rubric rows and to GT constraints; twenty direction briefs derived from it (section 5 format) | 4 agents plus Fable synthesis | 2 passes |
| G-D Twenty complete mocks | Twenty mocks under `0_plan/mockups/M01..M20/`, each built from its brief, passing the viewport matrix (section 4) with zero failures, both critics at or above 4 on every rubric row, both checkers green, Astra pass, rationale complete, gallery and `06` current | 5 waves of 4 design engineers plus watchdog | 4 iterations per mock, then escalate with evidence |

Anti-shallow rule for every goal: an artifact is not complete because it exists; it is complete when its acceptance line is demonstrated with evidence a reader can open (a file, a screenshot, a measurement, a source URL). A loop iteration that produces no measurable delta is a stall and is logged as one.
