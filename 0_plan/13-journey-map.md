# 13 End-to-end user workflows (the journey map, DEL-003)

| Field | Value |
|---|---|
| Purpose | Every path a person or a system takes through the estate, node by node, with what goes in, what happens, and what comes out. These are the spines of the testing suite (`1_spec/13-testing-suite-spec.md`): every node yields assertions, every assertion is a test case |
| Convention | One table per workflow. Node columns: Actor, Data in, Processing, Data out, Requirements, Events (`1_spec/06` section 3), Test cases (`TC-nnn`, defined in `1_spec/13`). A workflow is `W-nn`; a node is referenced as `W-nn/n` |
| Sources | Journeys and personas (`1_spec/01`), landing anatomy (`1_spec/03`), events (`1_spec/06`), analytics baseline (`10`), the operating model (`09`) |
| Version | 0.1, 2026-09-10 |

## Workflow index

| W | Workflow | Primary actor | Journey | Nodes | Spec |
|---|---|---|---|---|---|
| W-01 | Aware parent from Instagram organic reaches the right school site | Parent A or B | J1 | 4 | `1_spec/03`, `1_spec/06` |
| W-02 | Interested parent from search compares, uses the helper, books a tour | Parent A | J2 | 5 | `1_spec/03`, `1_spec/05` |
| W-03 | Ready parent goes straight to the right application | Parent B | J3 | 4 | `1_spec/03`, `1_spec/06` |
| W-04 | Enrolled family finds support without calling the general line | Family D | J4 | 3 | `1_spec/03` |
| W-05 | A wrong-school start is caught and counted | Crystal, systems | J3 | 4 | `1_spec/06` |
| W-06 | Texas parent sees the TEFA offer | Parent A | J1, J2 | 3 | `1_spec/03`, `1_spec/08` |
| W-07 | Paid campaign click in an in-app browser | Parent B, systems | J1 | 4 | `1_spec/06`, `1_spec/08` |
| W-08 | Answer-engine visitor and crawler | Crawlers, Parent C | J1, J2 | 3 | `1_spec/07` |
| W-09 | Content changes without drift | Nari, Johnny | Operations | 4 | `1_spec/05`, `1_spec/10` |
| W-10 | An event becomes a number Nari can read | Systems, Johnny | Operations | 5 | `1_spec/06` |
| W-11 | The root domain moves without losing search | Johnny, Nari, David | Operations | 4 | `1_spec/07`, `1_spec/11` |
| W-12 | A parent asks the chatbot (gated, after D-006) | Parent C, systems | J2 | 4 | `1_spec/09` |

## Actors

| Actor | Who | Workflows |
|---|---|---|
| Parent A, B, C | The personas in `1_spec/01` section 2: Texas-local, remote, informed comparer | W-01 to W-03, W-05 to W-08 |
| Family D | An enrolled family | W-04 |
| Crystal | Admissions; sees applications and misroutes | W-05 |
| Nari | Content owner; accepts visible changes | W-09 |
| Johnny | Operator: builds, deploys, measures | W-09 to W-11 |
| Systems | GTM container, GA4, ad pixels, Supabase, HubSpot, BigQuery, Vercel, Webflow, TrueFoundry | W-07, W-10 to W-12 |

## Invariants that hold in every workflow

| Invariant | Requirement | Tested by |
|---|---|---|
| No form on the landing; nothing a visitor does on it reaches a live backend except through a link | MD-01, hard rule | TC-005 |
| Every application link carries `school=` and forwards UTMs and `v=` | REQ-070, MD-09 | TC-013, TC-021 |
| No non-essential tag fires before consent in a regulated region | REQ-023, AN-10 | TC-036 |
| The general phone number never appears on the first screen | REQ-017 | TC-024 |
| Every figure on a page has a claims-register row | REQ-022 | TC-046 |
| Previews and staging send `noindex`; production does not | SE-13 | TC-048 |

## W-01 Aware parent from Instagram organic reaches the right school site

The largest real path today: Instagram organic sent 1,393 social-organic, 936 social and 75 bio sessions in 28 days (`10`).

| Node | Actor | Data in | Processing | Data out | Requirements | Events | Test cases |
|---|---|---|---|---|---|---|---|
| W-01/1 Arrive | Parent A or B on a phone, Instagram in-app browser | Bio link `https://gt.school/?utm_source=instagram&utm_medium=bio&utm_campaign=umbrella-bio` | Page loads in the webview; container loads after first paint; consent default applied by region; GA4 session starts with source and medium | `page_view` with campaign parameters; no marketing tag before consent | REQ-024, REQ-073, AN-08, AD-12 | `page_view` | TC-001, TC-002, TC-036 |
| W-01/2 Orient | Parent | Viewport 390 by 844 | Umbrella sentence decodes GT and names two ways to attend; provenance line; two equal doors; helper entry; nothing else above the CTAs | First screen fits above the fold; LCP under 2.0 s; CLS 0 | REQ-011, REQ-012, REQ-021, DD-20, DD-26, DD-33 | none | TC-003, TC-004, TC-043 |
| W-01/3 Choose | Parent | Tap on the GT Anywhere door | Door is one link with a full-name accessible label; `door_click` fires with `school=anywhere`, `placement=first_screen`, `variant` | Navigation to `https://anywhere.gt.school/?utm_…&school=anywhere` with UTMs forwarded | REQ-018, REQ-070, DD-05, MD-09 | `door_click`, `outbound_school_site` | TC-006, TC-007, TC-013 |
| W-01/4 Land on the school site | Parent | The forwarded URL | Shared shell renders: umbrella lockup with school name, five menu items, switcher, Begin application with `school=anywhere` | Session continues (cross-domain linker) | REQ-030, REQ-031, REQ-032, AN-06 | `page_view` on the new host, same session | TC-014, TC-037 |

## W-02 Interested parent from search compares, uses the helper, books a tour

| Node | Actor | Data in | Processing | Data out | Requirements | Events | Test cases |
|---|---|---|---|---|---|---|---|
| W-02/1 Arrive | Parent A on a laptop, from Google | Organic entry to `gt.school/` | Page loads; title and description match `1_spec/07`; structured data present | Session with source google, medium organic | MD-07, SE-05, SE-06 | `page_view` | TC-001, TC-044, TC-045 |
| W-02/2 Doubt | Parent | Click "Not sure? Compare" | Anchor scrolls to the comparison; `compare_view` fires once when the block is half in view | Comparison visible: shared rows first, then differences; tuition and access row present or marked "see campus site" | REQ-013, REQ-026, DD-06, DD-23 | `compare_view` | TC-008, TC-009 |
| W-02/3 Helper (Phase 2 experiment) | Parent | Answers "Yes, we are nearby" | Not in v1 (DD-24 revised after R3). If shipped later: Georgetown door highlighted and scrolled into view; the other door stays; instant swap | `helper_answer{route=georgetown}` | REQ-012, DD-24, MN-05, MN-11 | `helper_answer` | TC-010, TC-011, TC-073 |
| W-02/4 Secondary CTA | Parent | Click "Book a campus tour" | Link to the HubSpot meeting page with UTMs | `cta_secondary_click{type=tour}`; HubSpot page opens (the booking itself is not exercised) | REQ-044, MD-02 | `cta_secondary_click` | TC-012 |
| W-02/5 Booking recorded | HubSpot | Parent completes the booking outside our pages | Meeting appears in HubSpot; `tour_booked` reaches GA4 through the HubSpot integration | Secondary conversion counted | AN-04 key events | `tour_booked` | TC-040 (external check) |

## W-03 Ready parent goes straight to the right application

| Node | Actor | Data in | Processing | Data out | Requirements | Events | Test cases |
|---|---|---|---|---|---|---|---|
| W-03/1 Arrive | Parent B, direct or retargeting | `gt.school/?utm_source=meta&utm_medium=paid_social&utm_campaign=anywhere-lead-202609&v=2` | Headline variant 2 renders; variant recorded as a user property | Variant visible | MD-03, AD-08 | `page_view` | TC-015 |
| W-03/2 Shortcut | Parent | Click "Already decided? Begin application" under the Anywhere door | `cta_apply_click{school=anywhere, placement=first_screen}` | Navigation to `https://apply.gt.school/?school=anywhere&utm_…` | REQ-070, DD-25, MD-09 | `cta_apply_click` | TC-013, TC-016 |
| W-03/3 Confirm | Parent, apply.gt.school | `school=anywhere` | The application shows a confirm step naming GT Anywhere (change requested in the application repo, T-110) | `app_started{school=anywhere}` | MD-10, AN-04, AN-07 | `app_started` | TC-017 (cross-repo) |
| W-03/4 Record | Supabase | Application start | Row written with the school | Conversion of record | AN-07 | none | TC-041 (external check) |

## W-04 Enrolled family finds support without calling the general line

| Node | Actor | Data in | Processing | Data out | Requirements | Events | Test cases |
|---|---|---|---|---|---|---|---|
| W-04/1 Arrive | Family D, direct | `gt.school/` | Header shows "Current families"; no phone number above the fold | | REQ-017, DD-13, DD-32 | `page_view` | TC-024 |
| W-04/2 Route | Family | Click "Current families" | `families_click`; navigation to the hub (Q-002) | Hub page loads with a support contact | REQ-017 | `families_click` | TC-025 |
| W-04/3 Exclude | Systems | `families_click` | Visitor added to the exclusion audience for acquisition ads | Audience membership | AD-07 | none | TC-042 (external check) |

## W-05 A wrong-school start is caught and counted

| Node | Actor | Data in | Processing | Data out | Requirements | Events | Test cases |
|---|---|---|---|---|---|---|---|
| W-05/1 Misroute | Parent | Chooses the Georgetown door from out of state, reaches the application | `app_started{school=georgetown}` from a non-Texas region | Row in Supabase with the school | AN-07 | `app_started` | TC-017 |
| W-05/2 Detect | Crystal | Application details | Recognizes the mismatch during review; logs it in the wrong-school table | Manual log row | REQ-072 | none | TC-050 (procedure) |
| W-05/3 Compute | BigQuery scheduled query | `app_started{school}` joined to enrollment outcome | Wrong-school share per month | Metric row | AN-14, REQ-072 | none | TC-051 |
| W-05/4 Report | Looker Studio | Metric row | KPI tile updates | Nari sees the number | D-010 | none | TC-052 |

## W-06 Texas parent sees the TEFA offer

| Node | Actor | Data in | Processing | Data out | Requirements | Events | Test cases |
|---|---|---|---|---|---|---|---|
| W-06/1 Arrive | Parent A | Default state (no geolocation in v1 per D-015 default) or Texas region when the flag is on | TEFA module renders from its content file with window and owner; hidden when expired | `tefa_module_view{region_source}` | MD-26, MD-14, DD-28 | `tefa_module_view` | TC-018, TC-019 |
| W-06/2 Read | Parent | Comparison row "tuition and access" | Anywhere: "$10,400 a year; TEFA-eligible Texas families pay nothing"; Georgetown per Q-011 | Copy matches the claims register | REQ-026, MD-13 | none | TC-020, TC-046 |
| W-06/3 Continue | Parent | Door or TEFA guide link (Phase 2) | Navigation with parameters | | SE-07 | `door_click` | TC-013 |

## W-07 Paid campaign click in an in-app browser

| Node | Actor | Data in | Processing | Data out | Requirements | Events | Test cases |
|---|---|---|---|---|---|---|---|
| W-07/1 Click | Parent B in the Instagram, Facebook or TikTok webview | Ad link with UTMs, `utm_content=<creative>`, `v=1` | Page renders in the webview; reduced-motion set by default; layout intact | First screen correct in each webview | REQ-024, MN-15 | `page_view` | TC-030, TC-031, TC-072 |
| W-07/2 Consent | Parent | Consent choice or regional default | Marketing tags fire only after consent; analytics per posture | Pixel requests absent before consent, present after | REQ-023, AN-10, MD-20 | none | TC-036 |
| W-07/3 Signal | Systems | `door_click{school}` | Custom event to Meta, TikTok, X, LinkedIn with dedup id | Audience population | AD-04, AD-05, AD-07, MD-12 | `door_click` custom events | TC-038, TC-042 |
| W-07/4 Attribution | GA4, platforms | Parameters and session | Session attributed to the campaign despite cookie partitioning, through first-party parameters | Campaign visible in the snapshot | AN-06, AN-08 | none | TC-039 |

## W-08 Answer-engine visitor and crawler

| Node | Actor | Data in | Processing | Data out | Requirements | Events | Test cases |
|---|---|---|---|---|---|---|---|
| W-08/1 Crawl | GPTBot, ClaudeBot, PerplexityBot, Googlebot | `robots.txt`, `sitemap.xml`, `llms.txt` | Allowed per SE-10 and Q-027; previews disallowed | Crawlable production, invisible previews | SE-10, SE-13 | none | TC-047, TC-048 |
| W-08/2 Resolve | Assistant | Structured data and the facts block | One organization with two sub-organizations; identical facts across surfaces | Entity resolves to GT School with two forms | SE-05, SE-08 | none | TC-044, TC-049 |
| W-08/3 Visit | Parent C from chatgpt.com | Referral | Definition paragraph answers "what is GT School"; FAQ answers are quotable | AI Assistant channel session | SE-09, MD-24 | `page_view` | TC-001 |

## W-09 Content changes without drift

| Node | Actor | Data in | Processing | Data out | Requirements | Events | Test cases |
|---|---|---|---|---|---|---|---|
| W-09/1 Edit | Nari or Johnny | A change to a content file under `sites/<site>/content/` | `check-claims.py` verifies every number; `truth.py check` verifies no attested statement moved | Clean checks or a named failure | REQ-022, REQ-050, REQ-051 | none | TC-046, TC-053 |
| W-09/2 Preview | Vercel | Pull request | Preview deploy with `noindex`; sync step copies tokens and partials | Preview URL | D-020, SE-13, REQ-052 | none | TC-048, TC-054 |
| W-09/3 Accept | Nari | Preview URL | Visual acceptance recorded on the PR | Approval | CON-05, D-023 | none | TC-055 (procedure) |
| W-09/4 Ship | Johnny | Merge to `v2` or `main` | Production deploy; shell copies identical to `design-system/` | No drift (V-032) | REQ-052 | none | TC-054 |

## W-10 An event becomes a number Nari can read

| Node | Actor | Data in | Processing | Data out | Requirements | Events | Test cases |
|---|---|---|---|---|---|---|---|
| W-10/1 Fire | Page | A `data-event` element is used | Container maps it to a GA4 event with parameters | Request to GA4 collect endpoint with the event and parameters | REQ-020, AN-04 | any | TC-035 |
| W-10/2 Land | GA4 | The request | Event appears in DebugView and, next day, in reports; development traffic goes to the development stream | Event in the production stream only for production hosts | AN-15, REQ-025 | | TC-037, TC-056 |
| W-10/3 Export | BigQuery | Daily export | Rows queryable; wrong-school query runs | Table rows | AN-14 | | TC-051 |
| W-10/4 Read | Looker Studio | Export and GA4 | Four KPI tiles and the funnel by school | Nari reads without a GA4 login | D-010 | | TC-052 |
| W-10/5 Snapshot | `ga4-snapshot.py` | Monthly run | Appended to `10` with the date; change log updated on any configuration change | Dated baseline | AN-18 | | TC-057 |

## W-11 The root domain moves without losing search

| Node | Actor | Data in | Processing | Data out | Requirements | Events | Test cases |
|---|---|---|---|---|---|---|---|
| W-11/1 Inventory | Johnny | Crawl of gt.school with tags blocked | Every URL with traffic or links listed | Redirect map rows | SE-02, DEL-009 | | TC-058 |
| W-11/2 Rehearse | Johnny | `vercel.json` redirects on staging | Every mapped URL returns one 301 to its final URL; no chains; canonicals correct | Test script output | REQ-071 | | TC-059 |
| W-11/3 Sign | Nari, David | Launch checklist | Every item evidenced and signed | Gate row | DEL-020 | | TC-060 (procedure) |
| W-11/4 Switch and watch | Johnny | DNS change | Rankings, brand query, crawl errors watched daily for 30 days; rollback runbook ready | Monitoring log | REQ-071, SE-14 | | TC-061 |

## W-12 A parent asks the chatbot (gated, after D-006)

| Node | Actor | Data in | Processing | Data out | Requirements | Events | Test cases |
|---|---|---|---|---|---|---|---|
| W-12/1 Ask | Parent C on the FAQ page | A question | Gateway routes to the answer model with retrieval over FAQ, thesis, proof and facts | Answer with citations to site URLs | CB-02, CB-03 | `chat_open`, `question_asked` | TC-062 |
| W-12/2 Guard | Chat service | An out-of-scope, personal-data or admissions-judgment request | Refusal template; hand-off link to a HubSpot meeting | No personal data stored; hand-off offered | CB-04 | `handoff_click` | TC-063 |
| W-12/3 Evaluate | Johnny, Crystal | Golden and adversarial sets | At least 95 percent correct, zero fabricated facts | Evaluation report | CB-05, REQ-037 | none | TC-064 |
| W-12/4 Learn | FAQ owner | Weekly unanswered log | New FAQ entries | Knowledge base grows | CB-06, REQ-036 | none | TC-065 (procedure) |

## Failure modes the suite must provoke

| Failure | Workflow | Expected behavior | Test case |
|---|---|---|---|
| JavaScript blocked | W-01, W-02 | Doors, comparison and links work; helper hidden | TC-022 |
| Consent denied | W-07 | No marketing request leaves the page; analytics per posture | TC-036 |
| Content file with an unregistered number | W-09 | `check-claims.py` fails the build | TC-046 |
| Attested statement edited by a model | W-09 | `truth.py check` fails | TC-053 |
| Preview URL requested by a crawler | W-08 | `noindex` header and disallow | TC-048 |
| Expired TEFA window | W-06 | Module hidden | TC-019 |
| A door label without the full school name | W-01 | DOM check fails | TC-006 |
| Redirect chain | W-11 | Redirect test fails | TC-059 |
| Motion under `prefers-reduced-motion` | W-02 | Helper swaps instantly; no non-essential motion | TC-011 |
| Missing `school=` on an application link | W-03 | DOM check fails | TC-013 |
