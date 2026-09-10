# 05 School sites specification: Anywhere v2, Georgetown alignment, content operations

| Field | Value |
|---|---|
| Purpose | What the two school sites become after the landing: a shared shell, five-item menu, page templates and content model for Anywhere v2 (static, this repo) and for Georgetown (Webflow, restyled), plus the content operations that keep them accurate |
| Sources | `0_plan/01` (Nari's asks), `0_plan/02` (Phase 2 and 3 requirements), `0_plan/04`, `0_plan/08` sections 4A, 4D, 4G, `1_spec/02` (sitemap and shell) |
| Decisions applied | D-004, D-005, D-009, D-016; DD-12, DD-27, DD-28, DD-29, DD-30, DD-34, DD-35; MD-02, MD-19, MD-22; SE-07, SE-09, SE-12; CB-08; CON-05; REQ-030 to REQ-036, REQ-041 to REQ-048, REQ-050 to REQ-052 |
| Requirements covered | REQ-001, REQ-030, REQ-031, REQ-032, REQ-033, REQ-034, REQ-035, REQ-036, REQ-037, REQ-039, REQ-040, REQ-041, REQ-042, REQ-043, REQ-044, REQ-045, REQ-046, REQ-047, REQ-048, REQ-050, REQ-051, REQ-052 |
| Version | 0.1, 2026-09-10 |

## 1. Shared shell (REQ-030, REQ-032)

Both sites use the header, footer, tokens and components from `04`. Georgetown receives them as a Webflow bundle (D-005). The menu has five items in the same order on both sites; the fourth item differs by school (REQ-033).

| Position | Anywhere | Georgetown | Page type |
|---|---|---|---|
| 1 | Home | Home | Overview with the umbrella lockup and the school's one-line promise |
| 2 | Academics | Academics | Program pages: the day, curriculum, the platform (DD-35), outcomes with footnotes |
| 3 | Advisors | Advisors | Roster with photos and bios; "teachers, whom we call advisors" (DD-30) |
| 4 | Intensives | Campus life | Per-school: quarterly in-person weekends; campus, schedule, visits |
| 5 | Admissions | Admissions | Steps, tuition and access, FAQ, what follows 8th grade, Begin application with `school=` |
| Utility | Current families; campus switcher; Begin application CTA | Same | |

## 2. Anywhere v2 pages

| Page | URL | Sections | Content source | Claims | Events | SEO |
|---|---|---|---|---|---|---|
| Home | `/` | Lockup and promise; the day (DD-34); who it is for (90th percentile); proof strip; admissions steps teaser; intensives teaser; secondary CTA (info session); footer | Rewritten from today's home, claims resolved (T-004) | Every figure from the register | `cta_apply_click`, `cta_secondary_click`, `video_play` if a facade is used | Category and brand queries (SE-04); `EducationalOrganization` with `parentOrganization` (SE-05) |
| Academics | `/academics` | The two-hour academic block, MAP alignment, mastery, the afternoon, Accelerated Foundations track, platform screenshots when approved (DD-35) | Today's page plus verified additions (REQ-034) | Register | `outbound_platform` if any | Model queries |
| Advisors | `/advisors` | Roster; the word "advisors" explained once (DD-30) | Today's roster, verified each term | none | none | |
| Intensives | `/intensives` | What, where, when, cost, who pays travel (Q-017); calendar link | Today's page plus Q-017 | Register for costs | `cta_secondary_click{type: intensives_calendar}` | `Event` schema |
| Academic calendar | `/academic-calendar` | Kept verbatim in URL; content each school year | Today's page | none | none | The second organic door: URL never changes |
| Admissions | `/admissions` | Steps (Q-007); the admissions bar and accepted evidence (Q-012); tuition and access with TEFA (REQ-026, Q-021); FAQ link; after 8th grade (REQ-048, Q-013); Begin application with `school=anywhere`; info-session CTA (REQ-044) | New page | Register | `cta_apply_click`, `cta_secondary_click` | Program queries |
| FAQ | `/admissions/faq` | Top-100 questions (Q-004), answer-shaped (SE-09), grouped; search box; "Was this helpful"; unanswered-question capture | Nari and Crystal | Register | `faq_search`, `faq_helpful` | `FAQPage` schema (REQ-045) |
| Thesis | `/why` (working) | Why gifted children need a different school; the model; evidence; what GT is not | Nari; DEL-017 | Register | scroll depth | Model and discourse queries; the X destination (AD-02) |
| Proof | `/results` (working) | Aggregate, anonymized outcomes with methodology and refresh date (REQ-043) | Warehouse aggregates after Q-015 | Register; every figure footnoted | none | Outcomes queries |
| TEFA guide | `/tefa` | What TEFA is, who is eligible, how it applies to Anywhere, the window, disclaimers (Q-021) | Nari; program terms | Register | `cta_apply_click` | Program queries (SE-07) |
| Legal | as today | Shared wording with Georgetown | Today's pages | none | none | `noindex` optional |

## 3. Georgetown alignment (D-005, DEL-014)

| Step | What changes in Webflow | Who | Gate |
|---|---|---|---|
| Fix live defects first | The header `/book-a-tour` link returns 404 on every page (REQ-002); unedited Webflow placeholder text on `/` and `/academics` (REQ-003); the footer's unqualified accreditation claim (REQ-004) | Nari, through the Webflow protocol (D-021) | Immediately; Phase 0 |
| Tag | Container snippet in site settings (T-008) | Johnny with Nari | Before any baseline |
| Shell | Header, footer and tokens from the `04` bundle pasted into site settings and symbols; menu reordered to the five items | Nari with Johnny | After the shell is proven on Anywhere v2 (S7) |
| Pages | Parity with the Anywhere page types: Home, Academics, Advisors, Campus life (visits, tours), Admissions (steps, tuition TBD Q-011, FAQ link, Begin application with `school=georgetown`) | Nari | S8 |
| Local | Business profile, local pages, `LocalBusiness` or `School` schema (SE-12) | Nari, Johnny | After tagging |
| Facts | The facts block identical to the landing's (SE-08) | Johnny | S8 |
| Verification | IA checklist (DEL-014): same menu order, same page types, switcher present, structured data declares the parent | Fable and Astra | S8 gate |

## 4. Secondary conversion (REQ-044, MD-02)

| School | CTA | Destination | Event |
|---|---|---|---|
| Georgetown | Book a campus tour | HubSpot meeting link (Nari provides) | `cta_secondary_click{type: tour}` then `tour_booked` from HubSpot |
| Anywhere | Join a virtual info session | HubSpot meeting or event link | `cta_secondary_click{type: info_session}` then `info_session_booked` |
| Both | Talk to an advisor | HubSpot meeting | `cta_secondary_click{type: advisor}` |
| Both | Read the FAQ | `/admissions/faq` | `cta_secondary_click{type: faq}` |

## 5. Community aggregate (REQ-046)

The community map at apply.gt.school already exists. Phase 2 shows its aggregate ("families in N states") on both homes as social proof and links the current-families route to the hub (Q-002). The figure comes from the application data, refreshed monthly, and gets a claims-register row like any other number.

## 6. Content operations (REQ-050, REQ-051, REQ-052)

| Element | Specification |
|---|---|
| Content model | Every page's variable content (calendar dates, roster, intensives, TEFA window, FAQ, figures) lives in a content file per page under `sites/<site>/content/`; templates read from it. This keeps D-004 open: a developer, Claude through a PR, or a CMS can write the same files |
| Editing model | D-004 is open. Fable's position: PR path if fewer than about a dozen pages change per quarter; Astra's position: a CMS for routinely changing content because Johnny is the sole builder. The content-file model works for both; the decision is made after DEL-011 counts the changes |
| Owners and cadence | `1_spec/02` section 6 (DEL-011): every row has an owner and a cadence; the TEFA module and the calendar are the two highest-frequency items |
| Shared content | Header, footer, facts block and comparison facts have one source (`design-system/` and the claims register) so the sites cannot drift (REQ-052) |
| Claims | No number enters a content file without a register row; `check-claims.py` runs on every build (REQ-022) |
| Evergreen | Dated content only where an owner and an expiry exist (DD-28) |
| Photos | Replace stock and old photos (REQ-034); consent on file for children |
| Language | English only, translation-ready (MD-22) |
| Georgetown | Content edits follow the Webflow protocol (D-021) |

## 7. Ask GT (CB-08)

An "Ask GT" section on the Admissions and FAQ pages is reserved for the chatbot after the D-006 gate. Until then the section is the FAQ search box and the unanswered-question capture, which feeds the knowledge base (`09`).

## 8. Tasks

| ID | Task | Phase | Owner model | Serves | Acceptance | Evidence | Ceiling |
|---|---|---|---|---|---|---|---|
| T-080 | Anywhere v2 shell: header, footer, menu, switcher, facts block from `04` applied to `sites/anywhere/` through the sync step | S7 | Builder, Sonnet 5 | REQ-030, REQ-031, REQ-032 | Every page shows the shell; switcher lists both schools | Screenshots per page | 60 min |
| T-081 | Home page v2 with the content file | S7 | Builder, Sonnet 5 | REQ-034, REQ-035, REQ-041 | Sections per section 2; `check-claims.py` clean | Screenshots; content file | 60 min, 3 attempts |
| T-082 | Academics page v2 | S7 | Builder, Sonnet 5 | REQ-034, DD-35 | Section 2 row | Screenshots | 60 min |
| T-083 | Advisors page v2 | S7 | Builder, Sonnet 5 | DD-30 | Roster verified this term | Screenshots | 60 min |
| T-084 | Intensives page v2 with Q-017 facts | S7 | Builder, Sonnet 5 | REQ-035 | Facts sourced | Screenshots | 60 min |
| T-085 | Academic calendar v2 at the same URL | S7 | Builder, Sonnet 5 | REQ-071 | URL unchanged; content current | Screenshots | 60 min |
| T-086 | Admissions page: steps, bar, tuition and access, after 8th, Begin application with `school=anywhere`, info-session CTA | S7 | Builder, Sonnet 5; Crystal verifies facts | REQ-016, REQ-026, REQ-044, REQ-048 | Every fact sourced; link parameter present | Screenshots | 60 min |
| T-087 | FAQ page (DEL-012) from the top-100 list with `FAQPage` schema, search and unanswered capture | S9 | Builder, Sonnet 5; Nari and Crystal content | REQ-036, REQ-045, SE-09 | Answers 40 to 60 words; schema validates | Validator output | 60 min per 25 questions |
| T-088 | Thesis page (REQ-042) | S9 | Nari writes; builder lays out | REQ-042, MD-18 | Approved by Nari; claims footnoted | Screenshots | 60 min |
| T-089 | Proof page (REQ-043) after Q-015 | S9 | Builder, Sonnet 5; Johnny data | REQ-043, DD-07 | Methodology note; refresh date; register rows | Screenshots | 60 min |
| T-090 | After-8th-grade content (REQ-048) after Q-013 | S9 | Nari | REQ-048 | One agreed sentence plus FAQ answer | Content file | 30 min |
| T-091 | TEFA guide (SE-07) after Q-021 | S9 | Nari writes; builder lays out | SE-07, MD-26 | Disclaimers present; window dated with owner | Screenshots | 60 min |
| T-092 | Secondary CTAs wired to HubSpot meetings on both sites | S7 | Builder, Sonnet 5; Nari provides links | REQ-044, MD-02 | Links resolve; events fire | DebugView | 60 min |
| T-093 | Community aggregate on both homes (REQ-046) | S9 | Builder, Sonnet 5 | REQ-046 | Figure has a register row; refresh documented | Screenshots | 60 min |
| T-094 | Georgetown shell in Webflow from the bundle, with Nari (D-005, D-021) | S8 | Johnny with Nari | REQ-030, REQ-032, DEL-014 | Header, footer, tokens present; menu order matches | Screenshots | 60 min plus Nari's time |
| T-095 | Georgetown page parity: Admissions with `school=georgetown`, Campus life, tour CTA | S8 | Nari with Johnny | REQ-031, REQ-044 | IA checklist passes | Checklist | 60 min per page |
| T-096 | Georgetown local pages and business profile (SE-12) | S8 | Nari, Johnny | MD-19, SE-12 | Profile live; schema validates | Validator output | 60 min |
| T-097 | Content inventory with owners and cadence (DEL-011) | S7 | Fable with Nari | REQ-050 | Every row owned | `1_spec/02` section 6 | 60 min |
| T-098 | Editing model implementation per D-004 once decided | S9 | Builder, Sonnet 5 | REQ-051, D-004 | An edit reaches production within the agreed SLA | RUN-LOG evidence | 60 min |
| T-099 | Cutover PR checklist per V2.md: mirror reconciled (T-012), harness green, redirects none, shell proven, Nari accepts | S7 | Fable | REQ-001, D-009, CON-06 | PR merged | PR link | 1 |

## Guides rename (REQ-076)

Decided at G0.5 on 2026-09-10 (`0_plan/16-g05-decision-record.md`, item 5): the adults are Guides on every GT surface.

| Change | Where | Verification |
|---|---|---|
| Copy: "Academic Advisor(s)", "Advisor(s)" become "Guide(s)" | Every Anywhere page, including the FAQ answers and their FAQPage structured data | A text sweep of every live page finds no "Advisor" outside historical documents (V-row to be added with the Anywhere content tasks) |
| Page: `/advisors` title "Our Academic Advisors" becomes a Guides page; if the URL changes, `/advisors` redirects with 301 to the new path | Anywhere sitemap, redirect map (REQ-071) | Old URL returns 301 to the new page; new page indexable; sitemap updated |
| Legal: Terms of Use "Academic Advisors are responsible for weekly 1:1 check-ins" becomes Guides, on both sites (gt.school reuses the same document) | `/terms-of-use` on both sites | Both documents match word for word after the change |
| Landing: the comparison block and any staff mention say Guides from the first mock | `1_spec/03-landing-page-spec.md` | Mock review checklist |

Owner: Nari for the live Webflow changes (stop-and-ask rule), Johnny for the landing and the redirect map.
