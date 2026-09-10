# Requirements and deliverables

Scope: the GT School web estate. Three surfaces (umbrella landing page, Georgetown site,
GT Anywhere site), the hand-off into apply.gt.school, and the content-maintenance model.
This is the source of record for what is being built and why. Version 0.1, derived from
the call summary. Nothing is `Agreed` until Nari marks it so.

## A. Problem statements

| ID | Problem | Evidence | Journeys hurt | Addressed in |
|---|---|---|---|---|
| P-01 | Two sites, two brands: different wireframes, menus, typography; no recognition value | Call 00:05:19 to 00:06:42. The eight mirrored Anywhere pages contain no link to gt.school, while gt.school links to Anywhere on every page (R4) | J1, J2 | Phase 1, 2 |
| P-02 | "GT School" means Georgetown; the umbrella is invisible | Call 00:05:19, 00:06:49; gt.school hosts the Georgetown site | J1 | Phase 1 |
| P-03 | Parents pick the wrong school and start the wrong application | Crystal's reports, call 00:11:29; baseline count unknown (Q-005) | J3 | Phase 1 |
| P-04 | Weak cross-referencing and split SEO; traffic lost between the sites | Call 00:03:00, 00:03:23; the cross-linking is one-way: gt.school links to Anywhere on every page, Anywhere never links back (R4) | J1, J2 | Phase 1, 2 |
| P-05 | Content inaccurate and stale; no owner | Call 00:03:53, 00:09:30; the mirror was last published by Webflow on 2026-07-09 | J2 | Phase 0 (done), Phase 3 |
| P-06 | Thin content; stock photos; application process missing | Call 00:08:49, 00:09:30 | J2, J3 | Phase 2 |
| P-07 | No self-serve answers to the known top-100 questions | Call 00:14:47 | J2 | Phase 2 |
| P-08 | Enrolled families call the general number found on the site | Call 00:17:28; the number appears on every Anywhere page | J4 | Phase 1 |
| P-09 | Little visibility into traffic and conversion | Call 00:17:28. Tags exist (see 04-architecture); funnel definitions and readers do not | All | Phase 1 |
| P-10 | No agency budget; internal design capacity is limited | Call 00:01:00, 00:01:24, 00:16:01 | Delivery risk | D-007 |

## B. Visitor journeys

| ID | Visitor | They need | Destination | Primary CTA | Success signal | Priority |
|---|---|---|---|---|---|---|
| J1 | Heard of GT School, knows nothing | What it is, that there are two ways to attend, which one is for them | Landing, then the correct school site | "Explore Georgetown" / "Explore Anywhere" | Click-through to a school site; low bounce | 3 |
| J2 | Interested, comparing options | Substance: academics, advisors, schedule, price, application steps, FAQ | School-site sections, FAQ | "See how it works", "FAQ" | Pages per session, FAQ engagement, info requests | 2 |
| J3 | Ready to apply | The correct application, fast | apply.gt.school for the right school | "Begin Application" | Application starts per school; wrong-school rate near zero | 1 |
| J4 | Enrolled family | Community, schedules, support contacts | Community hub (Q-002) | "Current families" | Fewer enrolled-family calls to the general line | 4 (cheap redirect, add early) |

Priority order per the call: J3 first, then J2, then J1; J4 is a redirect (00:14:48, 00:17:13).

## C. Requirements

All `Proposed` unless noted. Priority is within the phase.

### Phase 0: fix wrong content

| ID | Requirement | Priority | Journey | Source | Status | Acceptance |
|---|---|---|---|---|---|---|
| REQ-002 | The gt.school header CTA `/book-a-tour` resolves (to Calendly or a working page) on every page instead of returning 404 | P0 | J2, J3 | R4 crawl 2026-09-10 | Proposed | Every page's tour link returns 200 |
| REQ-003 | Unedited Webflow placeholder text ("This is some text inside of a div block", the Lorem Ipsum style-guide block) is removed from gt.school `/` and `/academics` | P0 | J2, J3 | R4 crawl 2026-09-10 | Proposed | Text search finds none |
| REQ-004 | Accreditation is stated one way on every surface, matching the Approved claims-register row: visible copy, fine print, structured data, and gt.school's footer | P0 | J2, J3 | R4 (CR-001 to CR-003); Q-033 | Proposed, blocked on Q-033 | One wording everywhere; validator shows the same in JSON-LD |
| REQ-001 | Remove the defect-list items from every page of both sites (Science Olympiad, afternoon-program PDF and button, XP-gating, pirate ship, fabricated workshop) | P0 | J2 | Call 00:04:33; branches `feat/gta-*-clear` (gta-001 to gta-011) | Done on the live site per Nari. Mirror branches unmerged (D-009) | None of the listed items render on any page of either site |

### Phase 1: unified landing page

| ID | Requirement | Priority | Journey | Source | Status | Acceptance |
|---|---|---|---|---|---|---|
| REQ-010 | One landing page under the GT School umbrella presenting Georgetown (in person) and Anywhere (virtual) as two versions of one school | P0 | J1 to J3 | 00:02:49, 00:03:23 | Proposed | Page live at the agreed URL (D-001) |
| REQ-011 | First screen is minimalist: both schools named, one-line description each, one CTA each | P0 | J1, J3 | 00:11:26, 00:12:01 | Proposed | Nothing else above the CTAs on desktop or mobile |
| REQ-012 | The physical-versus-virtual distinction is unmistakable before any CTA | P0 | J3 | 00:11:29, 00:12:22 | Proposed | 5 of 5 test parents choose correctly within 10 seconds; wrong-school rate (Q-005) falls after launch |
| REQ-013 | Comparison block: what both schools share, then what differs, as high as the layout allows | P1 | J1, J2 | 00:12:22 | Proposed | Differences list agreed with Nari and Crystal (Q-008) |
| REQ-014 | Unified GT School branding using Holly's element; existing style kept, no rebrand | P0 | All | 00:04:33, 00:04:48, 00:08:49 | Proposed, blocked on Q-001 | Matches the tokens in DEL-004; Holly signs off |
| REQ-015 | Mobile layout is first-class, designed alongside desktop | P0 | All | 00:11:26 | Proposed | Mockups and build reviewed at 390px and 1440px |
| REQ-016 | Application-process overview on the landing page or one click away | P1 | J3 | 00:09:30 | Proposed | Steps per school verified by Crystal (Q-007) |
| REQ-017 | Enrolled families see a "current families" route before any general contact detail | P1 | J4 | 00:17:28, 00:17:56 | Proposed, blocked on Q-002 | Route present; general number absent from the first screen |
| REQ-018 | School names spelled out in full in landing copy | P1 | J1 | 00:10:55, 00:13:23 (Crystal) | Proposed | Copy review |
| REQ-019 | Five distinct mockup directions reviewed before build (D-011); Nari's Claude draft is input, not spec | P0 | Process | 00:12:40, 00:13:23, 00:16:26; Johnny 2026-09-10 | Proposed | Nari picks or merges a direction in writing |
| REQ-020 | Landing CTAs and school-site hand-offs emit analytics events; KPI baseline captured before launch | P1 | All | Derived from 00:17:28 and the tags present in every page head | Proposed | GA4 events visible; baseline table in DEL-008 |

### Phase 2: align the two sites

| ID | Requirement | Priority | Journey | Source | Status | Acceptance |
|---|---|---|---|---|---|---|
| REQ-030 | Shared information architecture: same menu structure, order and page types on both sites; content differs per school; pages are not identical | P0 | J1, J2 | 00:06:15, 00:10:02, 00:10:28 | Agreed on the call | IA proposal (DEL-010) approved by Nari |
| REQ-031 | Top-level menu of about five items, modeled on GT Anywhere's (overview, advisors, academics, intensives, apply) | P1 | J2 | 00:09:30 | Proposed | Both menus match DEL-010 |
| REQ-032 | One design system (tokens, header, footer, components) shared by the landing page and both sites | P0 | All | 00:05:19, 00:06:42 | Proposed | A single tokens file drives all three surfaces (D-003) |
| REQ-033 | Menu placement may change as long as it is consistent across sites | P2 | J2 | 00:09:30 | Proposed | Same placement on both sites |
| REQ-034 | Replace stock and outdated photos with current, real content; every section carries substance | P1 | J2 | 00:08:49, 00:09:30 | Proposed, blocked on Q-009 | Content audit (DEL-002) shows no placeholder sections |
| REQ-035 | Add the missing sections: application process per school; what is happening at the school | P1 | J2, J3 | 00:09:30 | Proposed | Sections live on both sites |
| REQ-036 | Self-serve FAQ built from the top-100 parent questions | P1 | J2 | 00:14:47 | Proposed, blocked on Q-004 | FAQ page live, searchable, owner named |
| REQ-037 | Chatbot answering the FAQ before a human does | P3 | J2 | 00:14:47 | Proposed, gated (D-006) | Go or no-go after FAQ engagement data |
| REQ-038 | Each site is structured around J1 to J4 with an obvious entry for each; J3 optimized first | P0 | All | 00:14:48, 00:15:28, 00:17:13 | Agreed on the call | Journey map (DEL-003) traced to nav and CTAs |
| REQ-039 | Requirements session with Crystal and others on what a new parent needs | P1 | Process | 00:13:51 | Proposed | Session notes filed as a call summary |
| REQ-040 | URLs reflect the umbrella: `georgetown.gt.school` alongside `anywhere.gt.school` | P1 | J1 | 00:06:49 | Proposed, decision D-001 | Redirect map executed; rankings hold |
| REQ-041 | The site is a destination: a podcast listener understands the school and reaches apply without talking to anyone | P1 | J1 to J3 | 00:14:47 | Proposed | DEL-002 closes every "missing" row |
| REQ-042 | A thesis page: why gifted children need a different school; the intellectual centerpiece behind "the MIT of K-8" | P1 | J1, J2 | 08 G4 | Proposed | Page live; the landing's umbrella sentence is its one-line version |
| REQ-043 | A proof page with aggregate, anonymized outcome data refreshed on a cadence, with methodology notes | P1 | J2 | 08 C2 | Proposed, blocked on Q-015 | Figures trace to the warehouse; privacy review on file |
| REQ-044 | Per-school secondary conversion: a campus tour for Georgetown, a virtual info session or advisor call for Anywhere, through the existing HubSpot meetings | P1 | J2 | 08 D1; no such CTA exists on any page today | Proposed | CTAs live and booked events measured |
| REQ-045 | Structured data and answer-engine readiness: an organization with two sub-organizations, FAQ and course schema, an llms.txt file | P2 | J1 | 08 E1, E3 | Proposed | Rich results validate; both schools declare the parent |
| REQ-046 | The community map's aggregate ("families in N states") used as social proof and as the current-families front door | P2 | J1, J4 | 08 G3; apply.gt.school/#/community-map exists | Proposed | Aggregate shown; route verified |
| REQ-047 | A "day at GT" schedule visual per school, usable as the comparison device | P1 | J1, J2 | 08 G1; DD-34 | Proposed | Visual approved by Nari; facts verified by Crystal |
| REQ-048 | What follows 8th grade is answered on both sites | P1 | J2 | 08 A4; one mention exists today | Proposed, blocked on Q-013 | One agreed sentence plus an FAQ answer |

### Phase 3: keep content fresh

| ID | Requirement | Priority | Journey | Source | Status | Acceptance |
|---|---|---|---|---|---|---|
| REQ-050 | A named owner and cadence for every piece of content that changes through the year (calendar, events, guides, workshops) | P0 | J2, J4 | 00:03:53 | Proposed | DEL-011 has an owner and cadence per row |
| REQ-051 | The owner can update content without a developer, or through a defined fast path | P1 | Process | Derived from 00:03:53 and the off-Webflow goal in README | Proposed, decision D-004 | An edit reaches production within the agreed SLA |
| REQ-052 | Shared content (header, footer, comparison facts) has one source so the sites cannot drift | P1 | All | Derived from P-01 | Proposed | One change updates all surfaces |

### Cross-cutting

| ID | Requirement | Priority | Source | Status | Acceptance |
|---|---|---|---|---|---|
| REQ-070 | Both application flows keep working; the landing page never routes a visitor to the wrong school's application | P0 | Derived from P-03 | Proposed | Driven in a browser per school before every release |
| REQ-071 | No SEO regression: every moved URL gets a 301; canonical tags and sitemap updated; rankings watched for 30 days | P0 at go-live | 00:03:00 | Proposed | Redirect map (DEL-009) executed; Search Console clean |
| REQ-072 | Wrong-school applications counted manually by Crystal until instrumented | P1 | Derived | Proposed | Monthly number in DEL-008 |
| REQ-073 | Core Web Vitals no worse than today; the README roadmap items fold into v2 | P2 | README roadmap | Proposed | Lighthouse mobile at or above today's score on every page |
| REQ-074 | New pages meet WCAG 2.1 AA; inherited console and SVG errors are fixed, not mirrored | P1 for the winner (raised from P2, 08 C4) | Derived; confirm with Nari | Proposed | Zero console errors; axe clean |
| REQ-021 | The first screen decodes "GT" as gifted and talented and names the Alpha School affiliation at the prominence decided in MD-17 | P0 | 08 B1, DD-33; the homepage already states the affiliation | Proposed | Copy review |
| REQ-022 | Every quantitative claim on the landing traces to a row in the claims register (DEL-018) with source, approved wording and date; the 3x, 4x and 3-7x multipliers on the Anywhere homepage are resolved first | P0 | Mirror homepage; 08 C1; Q-019 | Proposed | Zero claims without a register row |
| REQ-023 | Consent and privacy posture for the GA4, Meta, TikTok and HubSpot tags is decided and implemented before any new event fires | P0 at go-live | 08 C3; MD-20; Q-016 | Proposed | Sign-off recorded; behavior verified per region |
| REQ-024 | The landing is verified in the Instagram, Facebook and TikTok in-app browsers on iOS and Android, not only in desktop browsers | P0 | 08 E4, F2 | Proposed | Screenshots per webview in the verify run |
| REQ-025 | Event taxonomy and cross-host measurement defined so the funnel from landing to application is attributable; baseline captured before launch | P1 | 08 F3; MD-08, MD-09; D-010 | Proposed | Named events documented; test events visible |
| REQ-026 | Tuition and access are stated the same way for both schools: price basis, TEFA eligibility for Texas families, aid if any | P0 | Mirror: $10,400 and TEFA coverage on the Anywhere homepage; 08 B5, D4 | Proposed, blocked on Q-011 | Copy agreed by Nari |
| REQ-027 | The Georgetown site (gt.school) is tagged with the shared GA4 stream before the landing baseline is taken; a second dark GA property (548367324) is retired or documented | P0 | `10` section 1: gt.school is absent from every report; `docs/ANALYTICS.md` | Proposed | gt.school appears in the hostname report for 28 days before go-live |
| REQ-028 | GA4 key events are corrected before any baseline is quoted: `page_view` removed; the conversion set is `generate_lead`, `app_started`, `complete_enrollment`, `purchase` | P0 | `10` section 1 (AN-05) | Proposed | Key-event list matches AN-05; change date logged in `10` |
| REQ-075 | Every node of every workflow in `13-journey-map.md` has at least one test case in `1_spec/13`; the suite runs on every pull request and its gates hold for merge, G1 and go-live | P1 | `0_plan/13`, `1_spec/13` | Proposed | `build-traceability.py` shows test cases for every requirement; CI green on the preview |
| REQ-076 | Guides is the one title for the adults on the landing and both school sites: rename Anywhere's Advisors copy, the `/advisors` page title, its structured data and the Terms of Use, and redirect `/advisors` if the URL changes | P1 | Johnny decision 2026-09-10 (Q-035) | Proposed | No page or structured-data field on either site says Advisor; the redirect map covers `/advisors` |
| REQ-029 | A tracking plan (DEL-024) names every event, parameter and destination for the landing and the school sites before the winner is built; the mocks implement none of it | P1 | AN-04, AD-04, AD-05 | Proposed | Plan approved; events verified in DebugView on the preview |

## D. Constraints

| ID | Constraint | Source | Implication |
|---|---|---|---|
| CON-01 | No agency will be hired (David) | 00:01:00 | Internal build; external help only as a defined hand-off (D-007) |
| CON-02 | Johnny builds; design is the limiting skill | 00:01:24, 00:16:01 | Mockup rounds are the risk-control point; structure is mapped before any design |
| CON-03 | The current brand style stays | 00:04:33 | Tokens are extracted, not invented |
| CON-04 | Start simple, then iterate | 00:02:34 | The landing page ships minimal; additions need a REQ |
| CON-05 | Nari owns both sites and is the requirements authority | 00:16:44 | Only Nari marks requirements `Agreed` |
| CON-06 | `main` is v1 and untouched; the v2 worktree cannot deploy or reach Webflow | V2.md | Nothing goes live without a reviewed PR and the go-live plan |

## E. Deliverables

| ID | Deliverable | Phase | Owner | Depends on | Acceptance evidence | Status |
|---|---|---|---|---|---|---|
| DEL-001 | Call summary and this requirements set | 1 | Johnny | | Nari has reviewed | In progress |
| DEL-002 | Sitemap and content audit of gt.school and anywhere.gt.school | 1 | Johnny | Webflow access (Q-006) | Table of every page on both sites with content state | Draft done 2026-09-10: R4 crawled all 11 gt.school pages and inventoried both sites' claims (`research/R4-content-and-proof.md`, `1_spec/02` section 1); content-state column pending Nari |
| DEL-003 | Journey map J1 to J4, written as twelve end-to-end workflows with data in, processing and data out per node (`13-journey-map.md`) | 1 | Johnny | DEL-002 | Approved by Nari | Draft done 2026-09-10; Nari review pending |
| DEL-004 | Design tokens extracted from both sites plus Holly's element | 1 | Johnny, Holly | Q-001 | Tokens file plus side-by-side proof against live | In progress: R1 extraction done, draft in `mockups/shared/tokens.css`; Holly's element pending (Q-001) |
| DEL-005 | Landing-page mockups, five directions, desktop and mobile (plan: 05-landing-mockups-plan.md) | 1 | Johnny | DEL-003, DEL-004, G0 approval | Nari picks a direction in writing | Five mocks built 2026-09-10 (`0_plan/mockups/M1..M5`), each 32 of 32 on the mechanical gate and browser-checked; awaiting E2 (Astra) and G1 (Nari) |
| DEL-006 | Landing-page spec (copy, sections, CTAs, events) | 1 | Johnny with Nari, Crystal | DEL-005, Q-007, Q-008 | Spec signed off | Not started |
| DEL-007 | Landing-page build on a review URL | 1 | Johnny | DEL-006, D-002, D-003 | Verify harness passes; mobile checked; events firing | Not started |
| DEL-008 | KPI baseline and analytics plan | 1 | Johnny; Nari (traffic), Crystal (wrong-school count) | Q-003 (answered), Q-005, DEL-025 | Baseline table with dates | In progress: first GA4 snapshot taken 2026-09-10 (`10`); Georgetown has no baseline until REQ-027 |
| DEL-009 | Go-live plan: DNS, redirect map, rollback | 1 | Johnny; Nari and David sign off | D-001, DEL-007 | Signed plan; executed with 30-day monitoring | Not started |
| DEL-010 | Unified IA proposal for both sites | 2 | Johnny | DEL-002, DEL-003 | Nari approves | Not started |
| DEL-011 | Content inventory with owners and cadence | 2 | Nari | DEL-002 | Every row has an owner and cadence | Not started |
| DEL-012 | FAQ page from the top-100 questions | 2 | Nari (content), Johnny (build) | Q-004 | Live and searchable | Not started |
| DEL-013 | GT Anywhere v2 redesign build | 2 | Johnny | DEL-010, DEL-004 | Cutover PR merged per V2.md | Not started |
| DEL-014 | Georgetown site aligned to the shared shell | 2 | Johnny, Nari | D-005, DEL-010 | Both sites pass the IA checklist | Not started |
| DEL-015 | Chatbot evaluation | 3 | Johnny | DEL-012 plus 60 days of FAQ data | Go or no-go logged as a decision | Gated |
| DEL-016 | Reconcile the mirror with the live site (re-mirror, merge the Phase 0 branches) | Before 2 | Johnny | | Diff of mirror versus live is empty except intended changes | Not started |
| DEL-017 | Positioning brief, one page: umbrella promise, per-school promise, proof, tone, affiliation stance, price and access stance | 1 | Johnny with Nari | R2, R4 | Nari approves (gate G0.5) | v1.0 released 2026-09-10 to `2_deliverables/DEL-017-positioning-brief/`: all six decisions made by Johnny, item 5 Guides; Nari's written confirmation pending |
| DEL-018 | Claims register: every quantitative claim on both sites with source, approved wording, date and surfaces | 1 | Johnny; Nari approves wording | R4 | Zero unregistered claims on any surface | In progress: 31 rows Unverified from R4 (`12-claims-register.md`); Nari approves wording |
| DEL-019 | Risk register | 1 | Johnny | | Reviewed with Nari | Not started |
| DEL-020 | Launch checklist: DNS, redirects, consent, claims, accessibility, analytics, rollback | 1 | Johnny; Nari and David sign off | DEL-009 | Executed and signed at go-live | Not started |
| DEL-021 | Experiment roadmap for the first 90 days: hooks, door order, helper, proof placement, TEFA module | 1 | Johnny; Nari | D-014, DEL-008 | Approved hypotheses with metrics | Not started |
| DEL-022 | Network learnings ask: Alpha campus-page patterns, brand guidelines, claims review, approved outcome data, admissions flow | 1 | Nari, Holly | | Answers filed in `0_plan/inputs/` | Not started |
| DEL-023 | TrueFoundry readiness: offering confirmed, workspace, SSO, billing owner, AI Gateway with keys in the platform's secrets, hello-world deployment, knowledge pipeline stub, evaluation-set skeleton (`09` section 8) | 3, prepared during 1 and 2 | Johnny; David for billing | D-017, Q-004 for the golden set | Each row of `09` section 8 marked done, with the bot itself still gated by D-006 | Not started |
| DEL-024 | Tracking plan: every event, parameter, destination and consent category for the landing and the school sites; UTM conventions; QA steps | 1 | Johnny; Nari approves | AN-04, AN-08, AD-04, MD-20 | Events verified in DebugView on a preview; document linked from `10` | Not started |
| DEL-026 | Testing suite: runner installed (D-028), catalogue implemented as specs, static layer wrapping the checkers, analytics interception, accessibility and performance layers, CI on pull requests, evidence templates for manual and external checks (`1_spec/13`) | 5 | Johnny approves the runner; builders implement | D-028, D-029, D-030, T-160 to T-171 | Suite green on the preview; mock gate and launch gate runs recorded in `1_spec/runs/` | Planned |
| DEL-025 | GA4 configuration fixes: `page_view` removed as a key event, gt.school tagged, development stream created, BigQuery export enabled, linker extended | 1 | Johnny; Nari's go for the Webflow snippet | AN-01, AN-05, AN-06, AN-14, AN-15 | `10` re-snapshotted and the change log updated | Not started |
