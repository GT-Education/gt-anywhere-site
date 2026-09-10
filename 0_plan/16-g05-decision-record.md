# 16 G0.5 decision record, for presentation

| Field | Value |
|---|---|
| Purpose | The six positioning decisions that govern every mock, headline and ad on the new gt.school landing, in one place, with what each was, what was decided and why |
| Decided | 2026-09-10 by Johnny, on the brief `15-positioning-brief.md`; all six recommendations accepted, item 5 changed to Guides |
| Gate | G0.5 opens S3 (design system) and S4 (five mocks) per `1_spec/00` S2. Nari's written confirmation is the remaining formality |
| Evidence | Live pages checked by text fetch on 2026-09-10 (`12-claims-register.md`, Live check; links in `15` §8c) |

## 1. The decisions

| # | Topic | What it was | Decision | Why | Ids |
|---|---|---|---|---|---|
| 1 | Umbrella sentence | Neither site tells a parent there are two ways to attend, or what GT stands for | "GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere." | Answers the two questions every first-time parent has before they can choose a school | DD-33, DD-20, REQ-021 |
| 2 | Speed figure | In July the Anywhere homepage carried 3x, 4x and 3-7x at once; today only 3x remains, on both sites and in the refund policy | No speed figure on the landing. 3X is the only candidate, and only after data is published | The sites now agree on 3X and the refund policy guarantees it, but no data has been published, and the press is asking the network exactly that question | Q-019, CR-004 to CR-008, REQ-022 |
| 3 | Accreditation | Three versions are live today: "fully accredited by Cognia", "Candidate for Accreditation", plain "Accredited" in gt.school's footer and Anywhere's structured data | No accreditation claim and no Cognia mark on any new surface until the true status is confirmed with counsel. The live sites get corrected under REQ-004 | Only one version can be true, and "Candidate" means not yet accredited; a wrong claim here is a legal problem | Q-033, CR-001 to CR-003, REQ-004 |
| 4 | Georgetown tuition | No price on any Georgetown page, only a $10,000 scholarship banner; Anywhere states $10,400 a year | "Tuition on request" on the landing until the figure is supplied, then published the way Anywhere does | Parents cannot compare two schools when one has a price and the other does not; the figure cannot be invented | Q-011, CR-024, MD-25, MD-26 |
| 5 | Title for the adults | gt.school says Guides, Anywhere says Advisors, and some are the same people with identical bios | Guides, everywhere. The recommendation was Advisors; Johnny chose Guides | One staff body needs one name; Guides is the word gt.school already uses 47 times and matches the network | Q-035, DD-27, REQ-076 |
| 6 | Alpha School relationship | Anywhere calls itself "The Gifted Academy of Alpha School"; gt.school does not mention Alpha | One small line, once: "The gifted school in the Alpha School network" | Already public on both sides, so hiding it looks evasive; one line keeps GT's own results separate from press questions about the network | MD-17, MD-16, REQ-021 |

## 2. What changes because of them

| Decision | Change | Where | Owner |
|---|---|---|---|
| 1, 6 | The umbrella sentence and the provenance line become fixed copy in the landing spec | `1_spec/03-landing-page-spec.md` | Johnny |
| 2 | No multiplier anywhere on the landing, in its titles, structured data or ads | `1_spec/03`, `1_spec/07`, `1_spec/08` | Johnny |
| 3 | No Cognia mark or accreditation copy on new surfaces; the three live statements are corrected to one true wording | Live Webflow sites (Nari), REQ-004 | Nari, counsel |
| 4 | "Tuition on request" in the Georgetown comparison cell until a figure arrives | `1_spec/03` comparison block | Johnny; Nari supplies the figure |
| 5 | Guides on the landing; Anywhere renames Advisors in copy, page title, structured data and Terms of Use, with a redirect if `/advisors` moves | REQ-076; live Webflow (Nari) | Nari |
| All | Register rows DD-33, DD-20, DD-27, MD-17, MD-25 move from Proposed to Decided; Q-011, Q-019, Q-033, Q-035 carry the decision | `0_plan/07`, `0_plan/03` | Johnny |

## 3. Still open after G0.5

| Item | Waiting on | Effect if it stays open |
|---|---|---|
| Nari's written confirmation of the six decisions | Nari | Formality for the gate record; the decisions stand |
| The true accreditation status and its approved wording | Nari, counsel | Landing stays silent on accreditation; live sites keep contradicting each other |
| Georgetown tuition figure and whether TEFA applies to Georgetown | Nari | Landing shows "Tuition on request" |
| Published data behind 3X | Nari, David | No speed figure anywhere |
| Renaming Advisors to Guides on Anywhere | Nari | Landing says Guides while Anywhere says Advisors, the inconsistency the decision was meant to end |
