# Twenty directions: the slate the briefs are written from

| Field | Value |
|---|---|
| Purpose | Fable's design-director slate for D-032: twenty directions, each an argument about GT School, together covering the ranges `CONCEPTS-BRIEF.md` section 3 requires. Each row becomes one brief in `briefs/M01.md` to `briefs/M20.md` once the concept catalog (`CONCEPTS.md`) supplies the exemplar moves |
| Invariants every row keeps | The six G0.5 decisions (`16`); the fixed slots of `mockups/shared/copy.md`; DD-19's families and swatches; the 19-row matrix (`17` section 4); the claims rules (REQ-022); the resolutions in `KB-RESOLUTIONS.md`; both logos; no forms; no stock; no placeholder |
| Photograph contingency | DD-42 (proposed): both doors photographed or neither, default neither until Nari supplies a home-learning photograph and written permissions exist. Rows marked "photo-led" state what they do if the photograph is refused; face-free files are the defaults meanwhile |
| Status | Drafted 2026-09-11 by Fable; corrected after Astra E5 the same day (M04 inset window, M18 The Cohort, M19 The Question, M10 still, M16 gated on D-039, lens counts recounted); the briefs are rewritten against `tokens-v2.css` and `copy.md` v1.1; Astra re-checks; Johnny approves the slate with the briefs |

## 1. The slate

| Id | Working title | Thesis (what the page argues) | Lens order | First screen | Imagery mode | Composition | Motion | Evolves | Contingency |
|---|---|---|---|---|---|---|---|---|---|
| M01 | Two Doors | One selective school, two ways to attend; the parent's only job here is to pick the door | L1, L2, L3, L4 | Light | Photo-led doors (parity) | Split, two columns from 768 | Considered: V6 one-time reveals below the fold only; door states and focus instant (R9) | M1 | If no GT Anywhere photograph: both doors typographic with the tint cue; photographs move to a captioned strip below |
| M02 | The Journal | A school that writes like a school: a masthead, a dated register, a comparison you can read in one screen | L3, L1, L2, L4 | Light | Typographic; small captioned photographs below the fold | Editorial grid, rules and columns | Still, because a journal does not move | M2 | None |
| M03 | Navy Thesis | The statement first, in large Literata on navy; the doors are the second sentence | L4, L3, L1, L2 | Dark | Typographic | Single column, then a two-up | Considered: V6 reveals below the fold; first screen still | M3 | None |
| M04 | Campus Window | Place is the proof: one photograph set as a window in a navy frame, with both doors docked beneath it; the next band stays visible below the fold | L2, L1, L3, L4 | Dark frame with a photograph | Photo-led, an inset window at most 720 CSS px wide so a 1,440 px source never upscales (R13) | Navy frame, window, docked doors | Still; a scrim in the window, no parallax | M4 | Default state: `georgetown-guide.webp` (a Guide at the whiteboard, no child's face) with its permission status stated; photographed state after DD-42 and RF-25 |
| M05 | Front Door of the Estate | The landing is page one of the shared shell both school sites will inherit: same header, footer, type and spacing, so continuity is demonstrated, not promised | L2, L1, L3, L4 | Light | Diagram (the schedule) plus small photographs | Shell header, content grid | Still | M5, with the switcher removed from the landing (DD-41) | None |
| M06 | The Ledger | The comparison table is the page: two columns that are also the two doors | L1, L4, L3, L2 | Light | Typographic | Table-first; stacked cards below 768 | Still: row states are colour changes and therefore instant (R9); disclosures instant (V7) | New | None |
| M07 | The Timetable | Show the week: in-person days beside online days, Guides in both; a parent understands the difference in one look | L1, L3, L2, L4 | Light | Diagrammatic (week grid) | Grid, diagram spans the fold | Considered: V8 the five day columns draw once; V6 below the fold | New | None |
| M08 | The Letter | A school speaks plainly to a family: a letter in Literata, the doors at its close | L3, L4, L1, L2 | Light (paper) | Typographic | Single column, 65ch measure | Still | New | None |
| M09 | Two Places | Two surfaces, warm and cool, one school: the tints carry the choice, the type carries the argument | L1, L2, L3, L4 | Split (light warm and dark cool) | Typographic with icon marks | Two full-height columns; stacked on phones | Considered: V2 door line reveal on hover and focus (always visible on touch) and V6 below the fold | New | None |
| M10 | The Map | Georgetown is a pin; GT Anywhere is the rest of the map; the next campuses are coming (DD-45 Locations) | L1, L2, L4, L3 | Light | Diagrammatic (Texas and US outline, pins) | Map left, doors right; stacked on phones | Still: the map is complete at rest; no map move exists in the K4 vocabulary, so a draw would be a D-031 proposal first | New | Coming-soon pins only with Nari's confirmation; N campuses by design |
| M11 | The Prospectus | Evidence before adjectives: a captioned photograph strip of what actually happens, under a plain first screen | L3, L1, L4, L2 | Light | Photo strip below the fold (captioned, face-free defaults) | Single column then a three-up strip | Still | New | Photographs refused: the strip becomes captioned diagrams of a day |
| M12 | Selective by Rigor | The admission bar is the headline argument (90th percentile, CR-011); both paths meet it | L4, L1, L3, L2 | Dark | Typographic with Inconsolata data | Single column statement, then doors | Considered: V6 on the proof and steps sections (third screen and later) | New | None |
| M13 | Ask a Guide | The human path: admissions contact and "Ask about a tour" framed as a conversation with the people who teach | L1, L3, L2, L4 | Light | One face-free photograph of a Guide at work | Two columns: message and doors | Still | New | No form (mocks carry none); mailto and tel links only |
| M14 | The Day | Two parallel days, in person and online, told step by step to the same finish | L3, L1, L2, L4 | Light | Small photographs per step (face-free defaults) or none | Two timelines, stacked on phones | Considered: steps fade in as they enter view (opacity, IntersectionObserver, no scroll hijack) | New | None |
| M15 | The Proof Strip | Every figure with a plain-English label and its source (D-033 shape): only register-approved claims, nothing else | L4, L3, L1, L2 | Light | Typographic | Statement, proof strip, doors | Still | New | Uses CR-011, CR-021, CR-022, CR-032 to CR-035 only |
| M16 | Which School Fits | An interactive router: three questions a parent can answer, then a recommended door; both doors stay visible without JavaScript | L1, L2, L3, L4 | Light | Typographic | Router card over doors | Considered and interactive: result crossfade (opacity), instant under reduced motion | New | Depends on D-039 (scripts and inputs in mocks); until decided the direction is built in its no-JavaScript state, both doors plus the questions as plain text; questions and results need Nari's approval (copy.md section 9) |
| M17 | The Year | The calendar as evidence: weekly classes, four intensive weekends, the school year both schools share | L3, L1, L4, L2 | Light | Diagrammatic (year band) | Wide band spanning the fold | Still | New | Uses CR-032, CR-033, CR-035 |
| M18 | The Cohort | What the students do is the argument: the day, the peers, the in-person time and the intensives as the deck states them, with the doors as the two ways to join | L4, L3, L1, L2 | Light | Typographic with small diagrams | Two-column activity list per school under the doors | Still | New | Uses only deck phrases (comparison rows The day, Peers and community, In-person time); no activity is invented |
| M19 | The Question | Routing by the parent's own questions: the fourteen parent questions (`05` section 6c) answered in one line each, every answer ending in the door it points to | L1, L3, L2, L4 | Light | Typographic | Question list in a 65ch column, both doors pinned above | Still; disclosures instant (V7) | New | Answers use deck phrases and register rows only; questions recorded in copy.md section 9 first |
| M20 | In Our Words | The founders and Guides speak (attributed staff voice from the live sites, verbatim); no parent testimonial until Q-034 | L3, L4, L2, L1 | Dark | Typographic | Quote column and doors | Considered: V6 on the proof and steps sections (third screen and later) | New | Quotes verbatim from gt.school with URL and check date in the rationale; Anywhere pages are not quoted where they say Advisors (G0.5 item 5) |

## 2. Coverage against the rules in `CONCEPTS-BRIEF.md` section 3

| Rule | Requirement | This slate |
|---|---|---|
| Photo-led | At most twelve | Four (M01 contingent doors, M04 inset window, M11 strip, M13 one photograph); every one has a stated default and fallback, none withdraws |
| Typographic or diagrammatic | At least six | Sixteen |
| Motion | About half considered, half still | Eight considered (M01, M03, M07, M09, M12, M14, M16, M20), twelve still; every V6 use is on the third screen or later (K4 section 8.1); M16's interactivity waits on D-039 |
| First-screen surface | Light and dark both present | Fourteen light, four dark (M03, M12, M20 wholly; M04's navy frame), one light and dark split (M09), one photograph inside a frame (M04) |
| Composition | Single-column and grid both present | Single column M03, M08, M12, M19; grids, tables, diagrams and lists elsewhere |
| Lens orders | Routing-first and mission-first both present | Routing-first (L1) eight: M01, M06, M07, M09, M10, M13, M16, M19; mission-first (L3) six: M02, M08, M11, M14, M17, M20; exclusivity-first (L4) four: M03, M12, M15, M18; continuity-first (L2) two: M04, M05 |
| No restyles | Each direction a distinct argument | Twenty theses above; M11 argues by documentary photographs below a plain first screen, M18 by the program's activities in words; M04 keeps its photograph as an inset window instead of withdrawing; none converges on another's fallback |

## 3. What each brief adds (after G-C)

| Section | Source |
|---|---|
| Three exemplar moves with screenshot filenames | `CONCEPTS.md` cross-index rows marked Use or Adapt |
| Principles applied by cluster and finding id | Reworked K0 to K14 |
| Measured h1 fit at V2, V5, V14 | The build wave's measurements on the fixed copy (R5) |
| Acceptance | `17` sections 4 and 6 |

## 4. Reserve directions (named replacements, so the slate stays at twenty under D-032)

| Id | Working title | Thesis | Replaces | Lens order | First screen | Imagery | Composition | Motion |
|---|---|---|---|---|---|---|---|---|
| R1 | Plain Text | Confidence needs no decoration: a full-width document with a contents list, hairline rules and navy links, no cards and no surfaces; the argument is that the facts hold up unadorned | M04 if photograph permissions are refused for the whole library | L3, L4, L1, L2 | Light | None | Single column at `--container-max`, contents list on the left from 1024 | Still |
| R2 | The Schedule Card | One card, the two days side by side as a printed schedule, the doors as the card's two signatures | M13 if the human-path direction cannot be built without a form | L1, L3, L2, L4 | Light | None | One centred card, 65ch | Still |
