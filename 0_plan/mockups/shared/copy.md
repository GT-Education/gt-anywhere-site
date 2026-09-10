# Landing copy deck, v1 (T-041), 2026-09-10

| Field | Value |
|---|---|
| Purpose | The one copy source every mock uses. Fixed slots are identical across M1 to M5; flagged slots carry their Q id and ship in the mock with the default below, never with placeholder text |
| Decisions applied | G0.5 (`16-g05-decision-record.md`): umbrella sentence as drafted; no speed figure; no accreditation claim or Cognia mark; Georgetown "Tuition on request"; Guides, not Advisors; one provenance line |
| Numbers | Every figure below has a claims-register row: 90th percentile CR-011; $10,400 CR-021; four weekends CR-032; 9 to noon and about two hours CR-033; two to three hours CR-034; weekly check-ins CR-035. No other number may appear on the page |
| Links | Doors and CTAs go only to gt.school, anywhere.gt.school, apply.gt.school and community.gt.school (REQ-070). No forms. Every link carries the `data-event` attribute from `1_spec/03` section 7 |

## Section 0. Header

| Slot | Copy | Destination | Note |
|---|---|---|---|
| Lockup | The real GT School logo: `<img src="../shared/img/gt-school-logo-h.svg" alt="GT School" width="..." height="...">`, never a text wordmark (Johnny, 2026-09-10: maintain colors, fonts and logos) | `#top` of the mock | Holly's unifying element (Q-001) may later be added beside it; flag in rationale |
| Current families | "Current families" | https://community.gt.school | Q-002 confirm; `data-event="families_click"` |
| Admissions contact | "Contact admissions" | https://www.gt.school/contact | No phone number in the header (DD-13) |

## Section 1. First screen

| Slot | Copy |
|---|---|
| h1, umbrella sentence | GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere. |
| Provenance line (once, small) | The gifted school in the Alpha School network. |
| Door 1 label | In person |
| Door 1 name | Georgetown Campus |
| Door 1 line | Two hours of mastery academics each morning on our Georgetown, Texas campus, afternoons for workshops and building. |
| Door 1 CTA | Explore the Georgetown campus → https://www.gt.school/ `data-event="door_click" data-school="georgetown" data-placement="first_screen"` |
| Door 2 label | Online |
| Door 2 name | GT Anywhere |
| Door 2 line | Live mastery academics with Guides from wherever you live, and four in-person weekends a year in Georgetown. |
| Door 2 CTA | Explore GT Anywhere → https://anywhere.gt.school/ `data-event="door_click" data-school="anywhere" data-placement="first_screen"` |
| Cue set (DD-04) | Label plus icon plus photo for each door; photos from `img/` per `ASSETS.md`. Georgetown: `georgetown-science.webp` or another classroom photo. Anywhere: `anywhere-austin-intensives.webp` or `anywhere-slider-1.webp`. Do not use `anywhere-student-home.webp` or `georgetown-kid-writing.webp` (studio-isolated, read as stock, ASSETS.md findings) |

## Section 2. Compare anchor

"Not sure which is right for your family? Compare the two." → `#compare`, `data-event="compare_view"`.

## Section 3. Comparison (id `compare`)

Table with `caption` "Georgetown Campus and GT Anywhere, side by side", column headers as the full school names. Shared rows come first (Same school, Admissions, After 8th grade), then the rows that differ (DD-06, REQ-013). On widths up to 767px the table renders as stacked blocks with the school name labelling each cell (approved alternative to a two-column table, `1_spec/03` section 4).

| Row | Georgetown Campus | GT Anywhere | Source, flag |
|---|---|---|---|
| Same school, same academics | One school, one admissions bar, one mastery-based program. Students advance when they show mastery, not when the calendar says so. | Same | Both sites |
| Admissions | Students at or above the 90th percentile. Begin online, then an assessment and a family conversation. | Same | CR-011; steps flagged Q-007 |
| After 8th grade | Families plan the path after 8th grade with admissions. | Same | Q-013 |
| The day | Mornings from 9 to noon: about two hours of focused academics in TimeBack blocks, with structured breaks. Afternoons: workshops, projects and competitions. | Two to three hours of focused mastery academics a day, with live sessions from Guides. The rest of the day is yours. | CR-033, CR-034 |
| Where and how | On campus in Georgetown, Texas, north of Austin. | From home, anywhere in the United States. | gt.school footer "Anywhere in the States" |
| Peers and community | A small cohort of gifted peers, together every school day. | A cohort of gifted peers online every day, together in person each quarter. | No cohort number (CR-025, CR-026 conflict) |
| In-person time | Every school day. | Four intensive weekends a year in Georgetown. | CR-032; Q-017 for logistics |
| Guides | Guides on campus in every session. | Live Guides online, with a one-to-one check-in every week. | CR-035; Q-035 decided |
| Tuition and access | Tuition on request. Ask admissions. | $10,400 a year. Eligible Texas families can apply the TEFA voucher toward the full amount. | Q-011 decided; CR-021, CR-022 conflict flagged |

Doors repeated beneath the table with `data-placement="after_comparison"`.

TEFA module (visible to everyone in v1, D-015 option c): heading "Texas families", body "GT Anywhere is TEFA-eligible. The Texas Education Freedom Accounts program can cover tuition for eligible families." Link "Check eligibility on the GT Anywhere site" → https://anywhere.gt.school/academics `data-event="tefa_module_view" data-region-source="default"`. Window, owner and expiry flagged Q-021.

## Section 4. Proof strip

Heading "What is true of both schools". Four facts, no outcome figure and no accreditation statement (decisions 2 and 3; flag Q-019 and Q-033 in the rationale, never on the page):

| Fact | Source |
|---|---|
| Admission at the 90th percentile and above. | CR-011 |
| Mastery-based: students advance on demonstrated mastery, measured with MAP assessments. | Anywhere refund policy names MAP |
| Guides, not lecturers: adults who coach, check in every week and hold the bar. | CR-035 |
| Kindergarten to 8th grade, in person or online. | Both sites, K-8 |

Sources line, verbatim, under the facts and again under the comparison table: "Sources: admission bar, tuition and TEFA, anywhere.gt.school/academics; Georgetown schedule, gt.school/academics; GT Anywhere schedule, anywhere.gt.school/academics; intensive weekends, anywhere.gt.school/intensives; weekly check-ins, the Terms of Use on both sites. Checked 2026-09-10." Register ids and status (CR-011, CR-021, CR-022, CR-032 to CR-035, all Unverified, public) belong in RATIONALE.md, never on the page.

## Section 5. Application steps

Heading "How to apply". Line: "GT School admits students at or above the 90th percentile." Four steps, one line each, same for both schools (flag Q-007): 1 Begin your application online. 2 Complete the assessment. 3 Meet us for a family conversation. 4 Enroll and choose your start date.

| Link | Destination |
|---|---|
| Begin application: Georgetown Campus | https://apply.gt.school/?school=georgetown `data-event="cta_apply_click" data-school="georgetown" data-placement="steps"` |
| Begin application: GT Anywhere | https://apply.gt.school/?school=anywhere `data-event="cta_apply_click" data-school="anywhere" data-placement="steps"` |

The `school=` parameter name is DD-25's convention; the live apply.gt.school parameter is confirmed in S5 (flag).

## Section 6. Secondary CTAs

| Copy | Destination | data-type | Flag |
|---|---|---|---|
| Read the FAQ | https://anywhere.gt.school/academics | faq | FAQ lives on the Anywhere academics page today |
| Talk to admissions | https://www.gt.school/contact | advisor | HubSpot meeting link TBD (MD-02) |
| Ask about a campus tour | https://www.gt.school/contact | tour | Label matches the destination until a booking link exists; gt.school's own /book-a-tour is 404 (REQ-002) |
| Ask about a virtual info session | https://www.gt.school/contact | info_session | Label matches the destination until a registration link exists (E2 finding 15) |

All carry `data-event="cta_secondary_click"`.

## Section 7. Current families

"Already a GT family? Your hub, schedules and support live at community.gt.school." Link "Go to the family hub" → https://community.gt.school `data-event="families_click"`. Q-002 confirm.

## Section 8. Footer

| Slot | Copy |
|---|---|
| Facts block (SE-08, identical everywhere) | GT School, Inc. is a selective school for gifted and talented children, kindergarten to 8th grade. Georgetown Campus: in person in Georgetown, Texas. GT Anywhere: online, with four in-person weekends a year in Georgetown. (The network provenance line appears once, in section 1, and is not repeated here: G0.5 item 6.) |
| Contact | (512) 270-9481, the number both sites publish. No email until Nari supplies one |
| Links | Georgetown Campus https://www.gt.school/ · GT Anywhere https://anywhere.gt.school/ · Apply: Georgetown Campus https://apply.gt.school/?school=georgetown `data-event="cta_apply_click" data-school="georgetown" data-placement="footer"` · Apply: GT Anywhere https://apply.gt.school/?school=anywhere `data-event="cta_apply_click" data-school="anywhere" data-placement="footer"` · Current families https://community.gt.school · Privacy https://www.gt.school/privacy-policy · Terms https://www.gt.school/terms-of-use. Never an application link without `school=` (REQ-070, E2 finding 14) |
| Logos | Both real logos as gt.school's own footer shows them: `gt-school-logo-h.svg` linking to https://www.gt.school/ and `gt-anywhere-logo-h.svg` linking to https://anywhere.gt.school/, each with alt text naming the school. The GT Anywhere mark has white lettering and sits on a `var(--color-navy)` panel; the GT School mark sits on a light panel (`var(--color-bg)`). No redrawn or recolored marks (E2 finding 18) |
| Accreditation | None (decision 3) |
| Outbound links | `data-event="outbound_school_site" data-school="georgetown|anywhere"` on the school-site links |

## Head

| Item | Value |
|---|---|
| title | GT School: a selective school for gifted children, in Georgetown, Texas and online |
| meta description | GT School is a selective K-8 school for gifted and talented children, in person in Georgetown, Texas or online with GT Anywhere. Compare the two and apply. |
| robots | `noindex, nofollow` on every mock (SE-13) |
| canonical | https://gt.school/ |
| JSON-LD | `EducationalOrganization` "GT School" with two `subOrganization` entries (Georgetown Campus, GT Anywhere), `sameAs` both sites. No "Accredited", no multiplier, no SAT figure |
| Open Graph | Title and description above; image `../shared/img/georgetown-campus.webp` |

## Section headings allowed beyond the slots (E2 finding 20)

| Section | Allowed heading(s) |
|---|---|
| 1 | "Two ways to attend", "Two programs of one school", "Choose how to attend" (visually hidden allowed) |
| 3 | "Compare the two", "Compare the two schools", "A day at GT" (M5 schedule), "Ready to choose?" |
| 4 | "What is true of both schools" |
| 5 | "How to apply" |
| 6 | "More ways to connect", "Other ways to connect", "Questions before you apply" |
| 7 | "Current families", "Already a GT family?" |
| M4 | "What students do", with captions that describe only what is visible |

## Motion (E2 finding 4)

State changes on hover and focus are instant: `transition` may name only `transform` and `opacity`. Reduced motion removes transitions on elements and on `::before` and `::after`.
