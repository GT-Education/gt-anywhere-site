# ID index

Generated 2026-09-11 by `tools/build-index.py`. Do not hand-edit. `tools/check-links.py` fails the build if a referenced id has no definition.

| Series | Count |
|---|---|
| P (Problem statements) | 10 |
| J1 to J4 | 4 (defined in `00-context.md` and `02`) |
| REQ (Requirements) | 53 |
| CON (Constraints) | 6 |
| DEL (Deliverables) | 26 |
| D (Project and operating decisions) | 39 |
| Q (Open questions) | 35 |
| MO (Marketing objectives) | 1 |
| DD (Design decisions) | 47 |
| MD (Marketing decisions) | 26 |
| MN (Motion decisions) | 16 |
| AN (Analytics and GA4 decisions) | 19 |
| AD (Advertising channel decisions) | 15 |
| CB (Chatbot platform decisions) | 8 |
| SE (SEO and AEO decisions) | 14 |
| SRC (Sources of truth (SOURCES.md; designated in TRUTH.md)) | 17 |
| TR (Source-of-truth statements (attested in TRUTH.md, proposed in truth-proposals.md)) | 15 |
| CR (Claims register rows (0_plan/12-claims-register.md)) | 35 |
| W (End-to-end workflows (0_plan/13)) | 12 |
| TC (Test cases (1_spec/13)) | 62 |
| C (Completion checklist) | 15 |
| T (Build tasks) | 142 |
| V (Verification checks) | 47 |

## P: Problem statements

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| P-01 | Two sites, two brands: different wireframes, menus, typography; no recognition value | `0_plan/02-requirements-and-deliverables.md:12` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `1_spec/01-users-and-journeys.md` |
| P-02 | "GT School" means Georgetown; the umbrella is invisible | `0_plan/02-requirements-and-deliverables.md:13` | `03-decisions-and-open-questions.md`, `04-architecture.md`, `1_spec/01-users-and-journeys.md` |
| P-03 | Parents pick the wrong school and start the wrong application | `0_plan/02-requirements-and-deliverables.md:14` | `07-design-decisions.md`, `1_spec/01-users-and-journeys.md` |
| P-04 | Weak cross-referencing and split SEO; traffic lost between the sites | `0_plan/02-requirements-and-deliverables.md:15` | `07-design-decisions.md`, `11-seo-aeo-plan.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md` |
| P-05 | Content inaccurate and stale; no owner | `0_plan/02-requirements-and-deliverables.md:16` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `12-register-loop.md`, `1_spec/01-users-and-journeys.md` |
| P-06 | Thin content; stock photos; application process missing | `0_plan/02-requirements-and-deliverables.md:17` | `1_spec/01-users-and-journeys.md` |
| P-07 | No self-serve answers to the known top-100 questions | `0_plan/02-requirements-and-deliverables.md:18` | `1_spec/01-users-and-journeys.md` |
| P-08 | Enrolled families call the general number found on the site | `0_plan/02-requirements-and-deliverables.md:19` | `07-design-decisions.md`, `1_spec/01-users-and-journeys.md` |
| P-09 | Little visibility into traffic and conversion | `0_plan/02-requirements-and-deliverables.md:20` | `1_spec/01-users-and-journeys.md` |
| P-10 | No agency budget; internal design capacity is limited | `0_plan/02-requirements-and-deliverables.md:21` | `1_spec/01-users-and-journeys.md` |

## REQ: Requirements

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| REQ-001 | Remove the defect-list items from every page of both sites (Science Olympiad, afternoon-program PDF and button | `0_plan/02-requirements-and-deliverables.md:45` | `03-decisions-and-open-questions.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-002 | The gt.school header CTA `/book-a-tour` resolves (to Calendly or a working page) on every page instead of retu | `0_plan/02-requirements-and-deliverables.md:42` | `00-context.md`, `03-decisions-and-open-questions.md`, `06-mockup-rationale.md`, `12-claims-register.md`, `15-positioning-brief.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md` |
| REQ-003 | Unedited Webflow placeholder text ("This is some text inside of a div block", the Lorem Ipsum style-guide bloc | `0_plan/02-requirements-and-deliverables.md:43` | `00-context.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md` |
| REQ-004 | Accreditation is stated one way on every surface, matching the Approved claims-register row: visible copy, fin | `0_plan/02-requirements-and-deliverables.md:44` | `00-context.md`, `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/05-school-sites-spec.md`, `1_spec/07-seo-aeo-spec.md` |
| REQ-010 | One landing page under the GT School umbrella presenting Georgetown (in person) and Anywhere (virtual) as two  | `0_plan/02-requirements-and-deliverables.md:51` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `11-seo-aeo-plan.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-011 | First screen is minimalist: both schools named, one-line description each, one CTA each | `0_plan/02-requirements-and-deliverables.md:52` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-012 | The physical-versus-virtual distinction is unmistakable before any CTA | `0_plan/02-requirements-and-deliverables.md:53` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| REQ-013 | Comparison block: what both schools share, then what differs, as high as the layout allows | `0_plan/02-requirements-and-deliverables.md:54` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `07-design-decisions.md`, `13-journey-map.md`, `1_spec/03-landing-page-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-014 | Unified GT School branding using Holly's element; existing style kept, no rebrand | `0_plan/02-requirements-and-deliverables.md:55` | `05-landing-mockups-plan.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-015 | Mobile layout is first-class, designed alongside desktop | `0_plan/02-requirements-and-deliverables.md:56` | `05-landing-mockups-plan.md`, `07-design-decisions.md`, `1_spec/03-landing-page-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-016 | Application-process overview on the landing page or one click away | `0_plan/02-requirements-and-deliverables.md:57` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `07-design-decisions.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-017 | Enrolled families see a "current families" route before any general contact detail | `0_plan/02-requirements-and-deliverables.md:58` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-018 | School names spelled out in full in landing copy | `0_plan/02-requirements-and-deliverables.md:59` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `13-journey-map.md`, `15-positioning-brief.md`, `1_spec/03-landing-page-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-019 | Five distinct mockup directions reviewed before build (D-011); Nari's Claude draft is input, not spec | `0_plan/02-requirements-and-deliverables.md:60` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `12-register-loop.md`, `1_spec/03-landing-page-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-020 | Landing CTAs and school-site hand-offs emit analytics events; KPI baseline captured before launch | `0_plan/02-requirements-and-deliverables.md:61` | `05-landing-mockups-plan.md`, `13-journey-map.md`, `1_spec/03-landing-page-spec.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/08-advertising-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-021 | The first screen decodes "GT" as gifted and talented and names the Alpha School affiliation at the prominence  | `0_plan/02-requirements-and-deliverables.md:104` | `06-mockup-rationale.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `13-journey-map.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-022 | Every quantitative claim on the landing traces to a row in the claims register (DEL-018) with source, approved | `0_plan/02-requirements-and-deliverables.md:105` | `00-context.md`, `03-decisions-and-open-questions.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `12-claims-register.md`, `13-journey-map.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md`, `CLAUDE.md` |
| REQ-023 | Consent and privacy posture for the GA4, Meta, TikTok and HubSpot tags is decided and implemented before any n | `0_plan/02-requirements-and-deliverables.md:106` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-024 | The landing is verified in the Instagram, Facebook and TikTok in-app browsers on iOS and Android, not only in  | `0_plan/02-requirements-and-deliverables.md:107` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `12-register-loop.md`, `13-journey-map.md`, `17-design-studio-runbook.md`, `1_spec/03-landing-page-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md`, `CLAUDE.md` |
| REQ-025 | Event taxonomy and cross-host measurement defined so the funnel from landing to application is attributable; b | `0_plan/02-requirements-and-deliverables.md:108` | `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `13-journey-map.md`, `1_spec/03-landing-page-spec.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/08-advertising-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-026 | Tuition and access are stated the same way for both schools: price basis, TEFA eligibility for Texas families, | `0_plan/02-requirements-and-deliverables.md:109` | `03-decisions-and-open-questions.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-027 | The Georgetown site (gt.school) is tagged with the shared GA4 stream before the landing baseline is taken; a s | `0_plan/02-requirements-and-deliverables.md:110` | `00-context.md`, `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `11-seo-aeo-plan.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/11-verification-spec.md`, `CLAUDE.md`, `truth-proposals.md` |
| REQ-028 | GA4 key events are corrected before any baseline is quoted: `page_view` removed; the conversion set is `genera | `0_plan/02-requirements-and-deliverables.md:111` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/11-verification-spec.md`, `truth-proposals.md` |
| REQ-029 | A tracking plan (DEL-024) names every event, parameter and destination for the landing and the school sites be | `0_plan/02-requirements-and-deliverables.md:114` | `07-design-decisions.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-030 | Shared information architecture: same menu structure, order and page types on both sites; content differs per  | `0_plan/02-requirements-and-deliverables.md:67` | `01-call-summary-website-redo.md`, `03-decisions-and-open-questions.md`, `13-journey-map.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-031 | Top-level menu of about five items, modeled on GT Anywhere's (overview, advisors, academics, intensives, apply | `0_plan/02-requirements-and-deliverables.md:68` | `13-journey-map.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/04-design-system-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-032 | One design system (tokens, header, footer, components) shared by the landing page and both sites | `0_plan/02-requirements-and-deliverables.md:69` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-033 | Menu placement may change as long as it is consistent across sites | `0_plan/02-requirements-and-deliverables.md:70` | `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-034 | Replace stock and outdated photos with current, real content; every section carries substance | `0_plan/02-requirements-and-deliverables.md:71` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-035 | Add the missing sections: application process per school; what is happening at the school | `0_plan/02-requirements-and-deliverables.md:72` | `07-design-decisions.md`, `11-seo-aeo-plan.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-036 | Self-serve FAQ built from the top-100 parent questions | `0_plan/02-requirements-and-deliverables.md:73` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `11-seo-aeo-plan.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/04-design-system-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/09-chatbot-platform-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-037 | Chatbot answering the FAQ before a human does | `0_plan/02-requirements-and-deliverables.md:74` | `13-journey-map.md`, `1_spec/05-school-sites-spec.md`, `1_spec/09-chatbot-platform-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-038 | Each site is structured around J1 to J4 with an obvious entry for each; J3 optimized first | `0_plan/02-requirements-and-deliverables.md:75` | `07-design-decisions.md`, `1_spec/01-users-and-journeys.md`, `1_spec/11-verification-spec.md` |
| REQ-039 | Requirements session with Crystal and others on what a new parent needs | `0_plan/02-requirements-and-deliverables.md:76` | `05-landing-mockups-plan.md`, `1_spec/01-users-and-journeys.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-040 | URLs reflect the umbrella: `georgetown.gt.school` alongside `anywhere.gt.school` | `0_plan/02-requirements-and-deliverables.md:77` | `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-041 | The site is a destination: a podcast listener understands the school and reaches apply without talking to anyo | `0_plan/02-requirements-and-deliverables.md:78` | `07-design-decisions.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-042 | A thesis page: why gifted children need a different school; the intellectual centerpiece behind "the MIT of K- | `0_plan/02-requirements-and-deliverables.md:79` | `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `11-seo-aeo-plan.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-043 | A proof page with aggregate, anonymized outcome data refreshed on a cadence, with methodology notes | `0_plan/02-requirements-and-deliverables.md:80` | `03-decisions-and-open-questions.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `11-seo-aeo-plan.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-044 | Per-school secondary conversion: a campus tour for Georgetown, a virtual info session or advisor call for Anyw | `0_plan/02-requirements-and-deliverables.md:81` | `00-context.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| REQ-045 | Structured data and answer-engine readiness: an organization with two sub-organizations, FAQ and course schema | `0_plan/02-requirements-and-deliverables.md:82` | `08-effectiveness-and-expanded-considerations.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-046 | The community map's aggregate ("families in N states") used as social proof and as the current-families front  | `0_plan/02-requirements-and-deliverables.md:83` | `08-effectiveness-and-expanded-considerations.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-047 | A "day at GT" schedule visual per school, usable as the comparison device | `0_plan/02-requirements-and-deliverables.md:84` | `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-048 | What follows 8th grade is answered on both sites | `0_plan/02-requirements-and-deliverables.md:85` | `00-context.md`, `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `11-seo-aeo-plan.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-050 | A named owner and cadence for every piece of content that changes through the year (calendar, events, guides,  | `0_plan/02-requirements-and-deliverables.md:91` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-051 | The owner can update content without a developer, or through a defined fast path | `0_plan/02-requirements-and-deliverables.md:92` | `13-journey-map.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| REQ-052 | Shared content (header, footer, comparison facts) has one source so the sites cannot drift | `0_plan/02-requirements-and-deliverables.md:93` | `03-decisions-and-open-questions.md`, `08-effectiveness-and-expanded-considerations.md`, `13-journey-map.md`, `1_spec/04-design-system-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-070 | Both application flows keep working; the landing page never routes a visitor to the wrong school's application | `0_plan/02-requirements-and-deliverables.md:99` | `03-decisions-and-open-questions.md`, `04-architecture.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-071 | No SEO regression: every moved URL gets a 301; canonical tags and sitemap updated; rankings watched for 30 day | `0_plan/02-requirements-and-deliverables.md:100` | `04-architecture.md`, `07-design-decisions.md`, `11-seo-aeo-plan.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| REQ-072 | Wrong-school applications counted manually by Crystal until instrumented | `0_plan/02-requirements-and-deliverables.md:101` | `07-design-decisions.md`, `13-journey-map.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| REQ-073 | Core Web Vitals no worse than today; the README roadmap items fold into v2 | `0_plan/02-requirements-and-deliverables.md:102` | `06-mockup-rationale.md`, `07-design-decisions.md`, `11-seo-aeo-plan.md`, `13-journey-map.md`, `18-knowledge-base-plan.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-074 | New pages meet WCAG 2.1 AA; inherited console and SVG errors are fixed, not mirrored | `0_plan/02-requirements-and-deliverables.md:103` | `03-decisions-and-open-questions.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `12-register-loop.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| REQ-075 | Every node of every workflow in `13-journey-map.md` has at least one test case in `1_spec/13`; the suite runs  | `0_plan/02-requirements-and-deliverables.md:112` | `1_spec/13-testing-suite-spec.md` |
| REQ-076 | Guides is the one title for the adults on the landing and both school sites: rename Anywhere's Advisors copy,  | `0_plan/02-requirements-and-deliverables.md:113` | `00-context.md`, `03-decisions-and-open-questions.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/05-school-sites-spec.md` |

## CON: Constraints

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| CON-01 | No agency will be hired (David) | `0_plan/02-requirements-and-deliverables.md:120` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/00-scope-and-traceability.md` |
| CON-02 | Johnny builds; design is the limiting skill | `0_plan/02-requirements-and-deliverables.md:121` | `07-design-decisions.md`, `1_spec/00-scope-and-traceability.md` |
| CON-03 | The current brand style stays | `0_plan/02-requirements-and-deliverables.md:122` | `05-landing-mockups-plan.md`, `07-design-decisions.md`, `12-register-loop.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| CON-04 | Start simple, then iterate | `0_plan/02-requirements-and-deliverables.md:123` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md` |
| CON-05 | Nari owns both sites and is the requirements authority | `0_plan/02-requirements-and-deliverables.md:124` | `03-decisions-and-open-questions.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/05-school-sites-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| CON-06 | `main` is v1 and untouched; the v2 worktree cannot deploy or reach Webflow | `0_plan/02-requirements-and-deliverables.md:125` | `03-decisions-and-open-questions.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/05-school-sites-spec.md` |

## DEL: Deliverables

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| DEL-001 | Call summary and this requirements set | `0_plan/02-requirements-and-deliverables.md:131` | `1_spec/00-scope-and-traceability.md` |
| DEL-002 | Sitemap and content audit of gt.school and anywhere.gt.school | `0_plan/02-requirements-and-deliverables.md:132` | `01-call-summary-website-redo.md`, `04-architecture.md`, `11-seo-aeo-plan.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/02-sitemaps-and-ia.md`, `README.md` |
| DEL-003 | Journey map J1 to J4, written as twelve end-to-end workflows with data in, processing and data out per node (` | `0_plan/02-requirements-and-deliverables.md:133` | `01-call-summary-website-redo.md`, `08-effectiveness-and-expanded-considerations.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/01-users-and-journeys.md`, `README.md` |
| DEL-004 | Design tokens extracted from both sites plus Holly's element | `0_plan/02-requirements-and-deliverables.md:134` | `01-call-summary-website-redo.md`, `03-decisions-and-open-questions.md`, `04-architecture.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `18-knowledge-base-plan.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `README.md` |
| DEL-005 | Landing-page mockups, five directions, desktop and mobile (plan: 05-landing-mockups-plan.md) | `0_plan/02-requirements-and-deliverables.md:135` | `01-call-summary-website-redo.md`, `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md`, `README.md` |
| DEL-006 | Landing-page spec (copy, sections, CTAs, events) | `0_plan/02-requirements-and-deliverables.md:136` | `05-landing-mockups-plan.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md`, `README.md` |
| DEL-007 | Landing-page build on a review URL | `0_plan/02-requirements-and-deliverables.md:137` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `1_spec/00-scope-and-traceability.md` |
| DEL-008 | KPI baseline and analytics plan | `0_plan/02-requirements-and-deliverables.md:138` | `01-call-summary-website-redo.md`, `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `1_spec/00-scope-and-traceability.md`, `README.md` |
| DEL-009 | Go-live plan: DNS, redirect map, rollback | `0_plan/02-requirements-and-deliverables.md:139` | `03-decisions-and-open-questions.md`, `04-architecture.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `11-seo-aeo-plan.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/13-testing-suite-spec.md`, `README.md` |
| DEL-010 | Unified IA proposal for both sites | `0_plan/02-requirements-and-deliverables.md:140` | `1_spec/00-scope-and-traceability.md`, `1_spec/02-sitemaps-and-ia.md`, `README.md` |
| DEL-011 | Content inventory with owners and cadence | `0_plan/02-requirements-and-deliverables.md:141` | `03-decisions-and-open-questions.md`, `04-architecture.md`, `12-register-loop.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md`, `README.md` |
| DEL-012 | FAQ page from the top-100 questions | `0_plan/02-requirements-and-deliverables.md:142` | `03-decisions-and-open-questions.md`, `09-operating-model.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/05-school-sites-spec.md`, `1_spec/09-chatbot-platform-spec.md`, `README.md` |
| DEL-013 | GT Anywhere v2 redesign build | `0_plan/02-requirements-and-deliverables.md:143` | `1_spec/00-scope-and-traceability.md` |
| DEL-014 | Georgetown site aligned to the shared shell | `0_plan/02-requirements-and-deliverables.md:144` | `03-decisions-and-open-questions.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/05-school-sites-spec.md` |
| DEL-015 | Chatbot evaluation | `0_plan/02-requirements-and-deliverables.md:145` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/09-chatbot-platform-spec.md` |
| DEL-016 | Reconcile the mirror with the live site (re-mirror, merge the Phase 0 branches) | `0_plan/02-requirements-and-deliverables.md:146` | `00-context.md`, `03-decisions-and-open-questions.md`, `09-operating-model.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/11-verification-spec.md`, `SOURCES.md` |
| DEL-017 | Positioning brief, one page: umbrella promise, per-school promise, proof, tone, affiliation stance, price and  | `0_plan/02-requirements-and-deliverables.md:147` | `00-context.md`, `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `15-positioning-brief.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md`, `CLAUDE.md`, `README.md` |
| DEL-018 | Claims register: every quantitative claim on both sites with source, approved wording, date and surfaces | `0_plan/02-requirements-and-deliverables.md:148` | `00-context.md`, `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `11-seo-aeo-plan.md`, `12-claims-register.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/07-seo-aeo-spec.md`, `CLAUDE.md`, `README.md`, `SOURCES.md` |
| DEL-019 | Risk register | `0_plan/02-requirements-and-deliverables.md:149` | `08-effectiveness-and-expanded-considerations.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/11-verification-spec.md`, `README.md` |
| DEL-020 | Launch checklist: DNS, redirects, consent, claims, accessibility, analytics, rollback | `0_plan/02-requirements-and-deliverables.md:150` | `03-decisions-and-open-questions.md`, `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `11-seo-aeo-plan.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md`, `CLAUDE.md`, `README.md` |
| DEL-021 | Experiment roadmap for the first 90 days: hooks, door order, helper, proof placement, TEFA module | `0_plan/02-requirements-and-deliverables.md:151` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/08-advertising-spec.md`, `README.md` |
| DEL-022 | Network learnings ask: Alpha campus-page patterns, brand guidelines, claims review, approved outcome data, adm | `0_plan/02-requirements-and-deliverables.md:152` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/01-users-and-journeys.md`, `README.md`, `SOURCES.md` |
| DEL-023 | TrueFoundry readiness: offering confirmed, workspace, SSO, billing owner, AI Gateway with keys in the platform | `0_plan/02-requirements-and-deliverables.md:153` | `03-decisions-and-open-questions.md`, `04-architecture.md`, `07-design-decisions.md`, `09-operating-model.md`, `12-register-loop.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/09-chatbot-platform-spec.md` |
| DEL-024 | Tracking plan: every event, parameter, destination and consent category for the landing and the school sites;  | `0_plan/02-requirements-and-deliverables.md:154` | `07-design-decisions.md`, `10-analytics-current-state.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/06-analytics-tracking-spec.md` |
| DEL-025 | GA4 configuration fixes: `page_view` removed as a key event, gt.school tagged, development stream created, Big | `0_plan/02-requirements-and-deliverables.md:156` | `07-design-decisions.md`, `1_spec/00-scope-and-traceability.md` |
| DEL-026 | Testing suite: runner installed (D-028), catalogue implemented as specs, static layer wrapping the checkers, a | `0_plan/02-requirements-and-deliverables.md:155` | `1_spec/00-scope-and-traceability.md`, `1_spec/13-testing-suite-spec.md` |

## D: Project and operating decisions

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| D-001 | URL structure for the umbrella and the campuses | `0_plan/03-decisions-and-open-questions.md:9` | `00-context.md`, `01-call-summary-website-redo.md`, `02-requirements-and-deliverables.md`, `04-architecture.md`, `07-design-decisions.md`, `09-operating-model.md`, `11-seo-aeo-plan.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/11-verification-spec.md` |
| D-002 | Where the landing page is built and hosted | `0_plan/03-decisions-and-open-questions.md:10` | `00-context.md`, `02-requirements-and-deliverables.md`, `04-architecture.md`, `1_spec/03-landing-page-spec.md` |
| D-003 | Repo topology | `0_plan/03-decisions-and-open-questions.md:11` | `02-requirements-and-deliverables.md`, `04-architecture.md`, `05-landing-mockups-plan.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| D-004 | Content editing model for Phase 3 | `0_plan/03-decisions-and-open-questions.md:12` | `02-requirements-and-deliverables.md`, `04-architecture.md`, `08-effectiveness-and-expanded-considerations.md`, `12-register-loop.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `README.md` |
| D-005 | Georgetown site treatment in Phase 2 | `0_plan/03-decisions-and-open-questions.md:13` | `02-requirements-and-deliverables.md`, `04-architecture.md`, `07-design-decisions.md`, `09-operating-model.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/04-design-system-spec.md`, `1_spec/05-school-sites-spec.md` |
| D-006 | Chatbot | `0_plan/03-decisions-and-open-questions.md:14` | `02-requirements-and-deliverables.md`, `04-architecture.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/05-school-sites-spec.md`, `1_spec/09-chatbot-platform-spec.md`, `truth-proposals.md` |
| D-007 | Design hand-off criteria | `0_plan/03-decisions-and-open-questions.md:15` | `01-call-summary-website-redo.md`, `02-requirements-and-deliverables.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/01-users-and-journeys.md` |
| D-008 | Location of planning docs | `0_plan/03-decisions-and-open-questions.md:16` | `12-register-loop.md`, `1_spec/10-build-and-operations-spec.md` |
| D-009 | Phase 0 reconciliation | `0_plan/03-decisions-and-open-questions.md:17` | `00-context.md`, `02-requirements-and-deliverables.md`, `04-architecture.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/05-school-sites-spec.md`, `CLAUDE.md` |
| D-010 | KPIs for the landing page | `0_plan/03-decisions-and-open-questions.md:18` | `02-requirements-and-deliverables.md`, `04-architecture.md`, `05-landing-mockups-plan.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `13-journey-map.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| D-011 | Number of mockup directions | `0_plan/03-decisions-and-open-questions.md:19` | `02-requirements-and-deliverables.md`, `1_spec/03-landing-page-spec.md`, `CLAUDE.md`, `README.md`, `truth-proposals.md` |
| D-012 | Second-model ensemble on design decisions | `0_plan/03-decisions-and-open-questions.md:20` | `09-operating-model.md`, `1_spec/10-build-and-operations-spec.md`, `1_spec/11-verification-spec.md` |
| D-013 | Requirements source of truth | `0_plan/03-decisions-and-open-questions.md:21` | `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `12-register-loop.md`, `1_spec/10-build-and-operations-spec.md` |
| D-014 | Analytics and experimentation platform for the landing | `0_plan/03-decisions-and-open-questions.md:22` | `02-requirements-and-deliverables.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `12-register-loop.md`, `1_spec/06-analytics-tracking-spec.md` |
| D-015 | Geo-personalization mechanism, if MD-14 or MD-26 adopt it | `0_plan/03-decisions-and-open-questions.md:23` | `06-mockup-rationale.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/03-landing-page-spec.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/08-advertising-spec.md` |
| D-016 | Lead-capture backend when forms return in Phase 2 | `0_plan/03-decisions-and-open-questions.md:24` | `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `1_spec/05-school-sites-spec.md` |
| D-017 | Chatbot platform | `0_plan/03-decisions-and-open-questions.md:25` | `02-requirements-and-deliverables.md`, `04-architecture.md`, `07-design-decisions.md`, `09-operating-model.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/09-chatbot-platform-spec.md`, `truth-proposals.md` |
| D-018 | Where work status lives | `0_plan/03-decisions-and-open-questions.md:26` | `09-operating-model.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/10-build-and-operations-spec.md`, `CLAUDE.md`, `SOURCES.md`, `truth-proposals.md` |
| D-019 | Branch and pull-request model | `0_plan/03-decisions-and-open-questions.md:27` | `09-operating-model.md`, `1_spec/10-build-and-operations-spec.md`, `CLAUDE.md` |
| D-020 | Environments and the Vercel project | `0_plan/03-decisions-and-open-questions.md:28` | `07-design-decisions.md`, `09-operating-model.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/10-build-and-operations-spec.md`, `CLAUDE.md` |
| D-021 | Webflow edit protocol | `0_plan/03-decisions-and-open-questions.md:29` | `09-operating-model.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/04-design-system-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/11-verification-spec.md`, `CLAUDE.md`, `SOURCES.md` |
| D-022 | Communication and cadence | `0_plan/03-decisions-and-open-questions.md:30` | `09-operating-model.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/10-build-and-operations-spec.md` |
| D-023 | Definition of done | `0_plan/03-decisions-and-open-questions.md:31` | `09-operating-model.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/10-build-and-operations-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| D-024 | Tools deliberately not used | `0_plan/03-decisions-and-open-questions.md:32` | `09-operating-model.md`, `1_spec/10-build-and-operations-spec.md` |
| D-025 | Secrets and access | `0_plan/03-decisions-and-open-questions.md:33` | `07-design-decisions.md`, `09-operating-model.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/09-chatbot-platform-spec.md`, `1_spec/10-build-and-operations-spec.md`, `CLAUDE.md` |
| D-026 | Analytics, advertising and SEO decision authority | `0_plan/03-decisions-and-open-questions.md:34` | `09-operating-model.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/10-build-and-operations-spec.md`, `CLAUDE.md` |
| D-027 | Enforcing the human-only source-of-truth tag | `0_plan/03-decisions-and-open-questions.md:35` | `09-operating-model.md`, `12-register-loop.md`, `1_spec/10-build-and-operations-spec.md`, `1_spec/13-testing-suite-spec.md`, `CLAUDE.md`, `TRUTH.md` |
| D-028 | Test runner and where it lives | `0_plan/03-decisions-and-open-questions.md:36` | `02-requirements-and-deliverables.md`, `05-landing-mockups-plan.md`, `12-register-loop.md`, `17-design-studio-runbook.md`, `1_spec/13-testing-suite-spec.md` |
| D-029 | Real-device policy for in-app browser tests | `0_plan/03-decisions-and-open-questions.md:37` | `02-requirements-and-deliverables.md`, `12-register-loop.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| D-030 | How analytics assertions are made in the suite | `0_plan/03-decisions-and-open-questions.md:38` | `02-requirements-and-deliverables.md`, `12-register-loop.md`, `1_spec/13-testing-suite-spec.md` |
| D-031 | Motion in the mocks, reopened | `0_plan/03-decisions-and-open-questions.md:39` | `05-landing-mockups-plan.md`, `07-design-decisions.md`, `12-register-loop.md`, `17-design-studio-runbook.md`, `18-knowledge-base-plan.md` |
| D-032 | Number and completeness of landing mocks | `0_plan/03-decisions-and-open-questions.md:40` | `05-landing-mockups-plan.md` |
| D-033 | Claims register row shape and the claims checker scope (from K5, K6) | `0_plan/03-decisions-and-open-questions.md:41` |  |
| D-034 | Design-system contract: switcher semantics now, token tiers and inventory at hardening (from K13) | `0_plan/03-decisions-and-open-questions.md:42` |  |
| D-035 | Copy deck readability and the umbrella sentence question (from K14, K1, K6) | `0_plan/03-decisions-and-open-questions.md:43` |  |
| D-036 | Escalations to Nari and counsel raised by the knowledge base | `0_plan/03-decisions-and-open-questions.md:44` | `07-design-decisions.md` |
| D-037 | Image delivery and caching on Vercel (from K11, K9) | `0_plan/03-decisions-and-open-questions.md:45` |  |
| D-038 | Font delivery: subset woff2, two preloads, metric-matched fallbacks (from K2) | `0_plan/03-decisions-and-open-questions.md:46` | `05-landing-mockups-plan.md`, `12-register-loop.md` |
| D-039 | Scripts and inputs in mocks under D-031 | `0_plan/03-decisions-and-open-questions.md:47` | `05-landing-mockups-plan.md`, `12-register-loop.md`, `17-design-studio-runbook.md` |

## Q: Open questions

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| Q-001 | Is Holly's unifying brand element final? | `0_plan/03-decisions-and-open-questions.md:53` | `01-call-summary-website-redo.md`, `02-requirements-and-deliverables.md`, `04-architecture.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `09-operating-model.md`, `18-knowledge-base-plan.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| Q-002 | What is the community-hub URL for enrolled families? | `0_plan/03-decisions-and-open-questions.md:54` | `00-context.md`, `01-call-summary-website-redo.md`, `02-requirements-and-deliverables.md`, `04-architecture.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/13-testing-suite-spec.md` |
| Q-003 | What does GA4 property G-494D3VN0SF capture per hostname, and who can read it? | `0_plan/03-decisions-and-open-questions.md:55` | `02-requirements-and-deliverables.md`, `04-architecture.md`, `08-effectiveness-and-expanded-considerations.md` |
| Q-004 | Where is the top-100 FAQ list and who owns it? | `0_plan/03-decisions-and-open-questions.md:56` | `02-requirements-and-deliverables.md`, `07-design-decisions.md`, `09-operating-model.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/09-chatbot-platform-spec.md` |
| Q-005 | How many wrong-school applications per month today? | `0_plan/03-decisions-and-open-questions.md:57` | `02-requirements-and-deliverables.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/06-analytics-tracking-spec.md` |
| Q-006 | Who has admin on the gt.school Webflow project; can Georgetown move to a subdomain? | `0_plan/03-decisions-and-open-questions.md:58` | `02-requirements-and-deliverables.md`, `04-architecture.md`, `07-design-decisions.md` |
| Q-007 | Is the application process identical for both schools (steps, fees, timing)? | `0_plan/03-decisions-and-open-questions.md:59` | `02-requirements-and-deliverables.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md` |
| Q-008 | Which differences must appear in the comparison block (schedule, price, guides, intensives, accreditation)? | `0_plan/03-decisions-and-open-questions.md:60` | `02-requirements-and-deliverables.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `15-positioning-brief.md`, `1_spec/03-landing-page-spec.md` |
| Q-009 | Do current, usable photos of both schools exist? | `0_plan/03-decisions-and-open-questions.md:61` | `02-requirements-and-deliverables.md`, `05-landing-mockups-plan.md`, `07-design-decisions.md` |
| Q-010 | Should the landing page show the general phone number at all? | `0_plan/03-decisions-and-open-questions.md:62` | `07-design-decisions.md` |
| Q-011 | What is Georgetown campus tuition, and how is price stated for each school? Does TEFA apply to Georgetown? | `0_plan/03-decisions-and-open-questions.md:63` | `00-context.md`, `02-requirements-and-deliverables.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `13-journey-map.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/13-testing-suite-spec.md`, `truth-proposals.md` |
| Q-012 | Admissions criteria and accepted evidence for the 90th-plus percentile bar; cohort sizes; acceptance rate; app | `0_plan/03-decisions-and-open-questions.md:64` | `00-context.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/01-users-and-journeys.md`, `1_spec/05-school-sites-spec.md`, `truth-proposals.md` |
| Q-013 | What follows 8th grade: pathway, partners, track record | `0_plan/03-decisions-and-open-questions.md:65` | `00-context.md`, `02-requirements-and-deliverables.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md` |
| Q-014 | Alpha network brand guidelines, claims-review process, approved outcome data, campus-page patterns | `0_plan/03-decisions-and-open-questions.md:66` | `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `SOURCES.md` |
| Q-015 | Permission and privacy review for aggregate outcome figures from the reporting warehouse | `0_plan/03-decisions-and-open-questions.md:67` | `02-requirements-and-deliverables.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `11-seo-aeo-plan.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| Q-016 | Who signs off the consent and privacy posture for the tag stack? | `0_plan/03-decisions-and-open-questions.md:68` | `02-requirements-and-deliverables.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/06-analytics-tracking-spec.md` |
| Q-017 | Intensives logistics: where, when, cost, who pays travel | `0_plan/03-decisions-and-open-questions.md:69` | `00-context.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md` |
| Q-018 | Georgetown commute radius and target ZIP codes | `0_plan/03-decisions-and-open-questions.md:70` | `07-design-decisions.md`, `1_spec/08-advertising-spec.md` |
| Q-019 | Which speed claim is correct and sourced: 3x, 4x, or 3-7x faster? | `0_plan/03-decisions-and-open-questions.md:71` | `00-context.md`, `02-requirements-and-deliverables.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `11-seo-aeo-plan.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/11-verification-spec.md` |
| Q-020 | Is there a network convention for choosing a campus that GT should match or deliberately differ from? | `0_plan/03-decisions-and-open-questions.md:72` | `00-context.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md` |
| Q-021 | TEFA: program timing, eligibility rules, and disclaimers the site must show | `0_plan/03-decisions-and-open-questions.md:73` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md`, `SOURCES.md`, `truth-proposals.md` |
| Q-022 | Who controls DNS for gt.school (registrar, DNS provider), and who can change records? | `0_plan/03-decisions-and-open-questions.md:74` | `07-design-decisions.md`, `09-operating-model.md` |
| Q-023 | Does the Supabase `partner-lead-webhook` sync leads into HubSpot, and how are applications reflected in the CR | `0_plan/03-decisions-and-open-questions.md:75` | `07-design-decisions.md`, `09-operating-model.md`, `12-register-loop.md` |
| Q-024 | Who is the marketing owner on record? GA4 lists sana.malas@gt.school as Marketer; the transcript names "Nari". | `0_plan/03-decisions-and-open-questions.md:76` | `07-design-decisions.md`, `09-operating-model.md`, `CLAUDE.md`, `truth-proposals.md` |
| Q-025 | Who operates paid media today, and which ad accounts exist? Two Google Ads accounts (8925401864, 5533110357) a | `0_plan/03-decisions-and-open-questions.md:77` | `07-design-decisions.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `1_spec/08-advertising-spec.md` |
| Q-026 | Confirm the Linear home: team GT School (GTT), project gt-anywhere, and the `gta-NNN` to GTT mapping | `0_plan/03-decisions-and-open-questions.md:78` | `09-operating-model.md`, `1_spec/10-build-and-operations-spec.md`, `truth-proposals.md` |
| Q-027 | Which AI crawlers may index the sites (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)? Default in SE-10 is | `0_plan/03-decisions-and-open-questions.md:79` | `07-design-decisions.md`, `11-seo-aeo-plan.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/03-landing-page-spec.md`, `1_spec/07-seo-aeo-spec.md` |
| Q-028 | Which second human reviews `TRUTH.md` changes on GitHub, and what is their handle? (An author cannot approve t | `0_plan/03-decisions-and-open-questions.md:80` |  |
| Q-029 | Are an iPhone and an Android phone available for the in-app browser matrix, and whose? | `0_plan/03-decisions-and-open-questions.md:81` |  |
| Q-030 | What share of sessions comes from the EEA or UK? Consent Mode v2 has been enforced there since July 2025 (R3 S | `0_plan/03-decisions-and-open-questions.md:82` | `07-design-decisions.md` |
| Q-031 | What paid-social volume triggers the headline-variant test (MD-03)? Power analysis needs roughly 1,000 to 2,00 | `0_plan/03-decisions-and-open-questions.md:83` | `07-design-decisions.md`, `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| Q-032 | If the decision helper is prototyped, what question elicits the family's preference rather than commute feasib | `0_plan/03-decisions-and-open-questions.md:84` | `07-design-decisions.md`, `1_spec/03-landing-page-spec.md` |
| Q-033 | Which accreditation statement is true today: "fully accredited by Cognia", "Candidate for Accreditation", or " | `0_plan/03-decisions-and-open-questions.md:85` | `00-context.md`, `02-requirements-and-deliverables.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/03-landing-page-spec.md`, `1_spec/07-seo-aeo-spec.md` |
| Q-034 | Are the five homepage testimonials on gt.school (attributed "2 Hour Learning Student") GT School students with | `0_plan/03-decisions-and-open-questions.md:86` | `07-design-decisions.md`, `15-positioning-brief.md`, `1_spec/03-landing-page-spec.md` |
| Q-035 | Guides or Advisors: which title do the adults carry across both sites and the landing? gt.school says "guide(s | `0_plan/03-decisions-and-open-questions.md:87` | `00-context.md`, `02-requirements-and-deliverables.md`, `06-mockup-rationale.md`, `07-design-decisions.md`, `12-claims-register.md`, `15-positioning-brief.md`, `16-g05-decision-record.md` |

## MO: Marketing objectives

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| MO-10 | Reduce enrolled-family calls to the general line | `0_plan/05-landing-mockups-plan.md:73` | `1_spec/06-analytics-tracking-spec.md` |

## DD: Design decisions

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| DD-01 | Typography pairing | `0_plan/07-design-decisions.md:19` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| DD-02 | Palette and hero tone | `0_plan/07-design-decisions.md:20` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `1_spec/04-design-system-spec.md` |
| DD-03 | Hero structure | `0_plan/07-design-decisions.md:21` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `1_spec/03-landing-page-spec.md` |
| DD-04 | In-person versus virtual cue system | `0_plan/07-design-decisions.md:22` | `06-mockup-rationale.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/13-testing-suite-spec.md` |
| DD-05 | CTA labels and placement | `0_plan/07-design-decisions.md:23` | `06-mockup-rationale.md`, `13-journey-map.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| DD-06 | Comparison block format and facts | `0_plan/07-design-decisions.md:24` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| DD-07 | Proof and outcomes on the landing | `0_plan/07-design-decisions.md:25` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `15-positioning-brief.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/05-school-sites-spec.md` |
| DD-08 | Imagery policy | `0_plan/07-design-decisions.md:26` | `06-mockup-rationale.md`, `18-knowledge-base-plan.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| DD-09 | "MIT of K-8" cues and limits | `0_plan/07-design-decisions.md:27` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `1_spec/03-landing-page-spec.md` |
| DD-10 | Exclusivity cues and limits | `0_plan/07-design-decisions.md:28` | `00-context.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `15-positioning-brief.md`, `1_spec/03-landing-page-spec.md` |
| DD-11 | Brand lockup | `0_plan/07-design-decisions.md:29` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| DD-12 | Navigation on the landing | `0_plan/07-design-decisions.md:30` | `06-mockup-rationale.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/05-school-sites-spec.md` |
| DD-13 | Current-families route placement | `0_plan/07-design-decisions.md:31` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `13-journey-map.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| DD-14 | Mobile pattern | `0_plan/07-design-decisions.md:32` | `00-context.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `12-register-loop.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `CLAUDE.md` |
| DD-15 | Motion | `0_plan/07-design-decisions.md:33` | `1_spec/03-landing-page-spec.md` |
| DD-16 | Copy voice | `0_plan/07-design-decisions.md:34` | `00-context.md`, `06-mockup-rationale.md`, `15-positioning-brief.md`, `18-knowledge-base-plan.md`, `1_spec/03-landing-page-spec.md` |
| DD-17 | Trust signals | `0_plan/07-design-decisions.md:35` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `15-positioning-brief.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| DD-18 | Analytics events on the landing CTAs | `0_plan/07-design-decisions.md:36` | `1_spec/03-landing-page-spec.md` |
| DD-19 | Style envelope | `0_plan/07-design-decisions.md:37` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/11-verification-spec.md` |
| DD-20 | Orientation before choice | `0_plan/07-design-decisions.md:38` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `13-journey-map.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md` |
| DD-21 | Scalable choice component | `0_plan/07-design-decisions.md:39` | `00-context.md`, `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `CLAUDE.md` |
| DD-22 | Content allocation between landing and school sites | `0_plan/07-design-decisions.md:40` | `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md` |
| DD-23 | CTA repetition and reassurance | `0_plan/07-design-decisions.md:41` | `06-mockup-rationale.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| DD-24 | One-question decision helper | `0_plan/07-design-decisions.md:42` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| DD-25 | Direct-to-application from the landing | `0_plan/07-design-decisions.md:43` | `00-context.md`, `06-mockup-rationale.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md` |
| DD-26 | Visual parity between the doors | `0_plan/07-design-decisions.md:44` | `06-mockup-rationale.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| DD-27 | Nomenclature and marks | `0_plan/07-design-decisions.md:45` | `00-context.md`, `03-decisions-and-open-questions.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `18-knowledge-base-plan.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/05-school-sites-spec.md` |
| DD-28 | Evergreen versus dated content | `0_plan/07-design-decisions.md:46` | `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/13-testing-suite-spec.md` |
| DD-29 | Type scale and density | `0_plan/07-design-decisions.md:47` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md` |
| DD-30 | Jargon policy | `0_plan/07-design-decisions.md:48` | `00-context.md`, `03-decisions-and-open-questions.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `15-positioning-brief.md`, `18-knowledge-base-plan.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md` |
| DD-31 | Asset dependency declaration | `0_plan/07-design-decisions.md:49` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `18-knowledge-base-plan.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| DD-32 | Current families as a support intent | `0_plan/07-design-decisions.md:50` | `06-mockup-rationale.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md` |
| DD-33 | Decoding "GT" | `0_plan/07-design-decisions.md:51` | `00-context.md`, `02-requirements-and-deliverables.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `13-journey-map.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md` |
| DD-34 | The day as the comparison device | `0_plan/07-design-decisions.md:52` | `02-requirements-and-deliverables.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/05-school-sites-spec.md`, `truth-proposals.md` |
| DD-35 | Product visibility | `0_plan/07-design-decisions.md:53` | `08-effectiveness-and-expanded-considerations.md`, `1_spec/05-school-sites-spec.md` |
| DD-36 | Twice-exceptional readability | `0_plan/07-design-decisions.md:54` | `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| DD-37 | Share or print affordance | `0_plan/07-design-decisions.md:55` | `05-landing-mockups-plan.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/03-landing-page-spec.md` |
| DD-38 | Type roles, display weight, leading and the fluid h1 scale (from K2, K1, K12) | `0_plan/07-design-decisions.md:56` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `12-register-loop.md` |
| DD-39 | Color roles: accent as text, on-accent, focus on dark, muted on dark, strong border; gold never as text (from  | `0_plan/07-design-decisions.md:57` |  |
| DD-40 | Naming and the provenance line (from K7) | `0_plan/07-design-decisions.md:58` |  |
| DD-41 | Doors and the campus switcher are different components (from K7, K13) | `0_plan/07-design-decisions.md:59` | `03-decisions-and-open-questions.md` |
| DD-42 | Photograph parity on the doors, and permissions (from K9) | `0_plan/07-design-decisions.md:60` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md` |
| DD-43 | Comparison table cells repeat the value; no "Same" cells (from K6) | `0_plan/07-design-decisions.md:61` |  |
| DD-44 | Fold and viewport contract: svh, the 19-row matrix, runner tests (from K10, K6, K5) | `0_plan/07-design-decisions.md:62` | `17-design-studio-runbook.md` |
| DD-45 | Inherit gt.school's two-door component and Locations list for N campuses (from K12) | `0_plan/07-design-decisions.md:63` | `05-landing-mockups-plan.md`, `12-register-loop.md` |
| DD-46 | Door button fill on the umbrella page, against the measured estate (`0_plan/mockups/shared/CONTINUITY.md`) | `0_plan/07-design-decisions.md:64` |  |
| DD-47 | The action button's silhouette across the estate, after Astra found there is no single one (from the measured  | `0_plan/07-design-decisions.md:65` |  |

## MD: Marketing decisions

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| MD-01 | Primary conversion goal of the landing | `0_plan/07-design-decisions.md:71` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| MD-02 | Secondary CTA for the not-yet-ready | `0_plan/07-design-decisions.md:72` | `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md` |
| MD-03 | Message match with paid creative | `0_plan/07-design-decisions.md:73` | `00-context.md`, `03-decisions-and-open-questions.md`, `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/03-landing-page-spec.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/08-advertising-spec.md`, `1_spec/13-testing-suite-spec.md` |
| MD-04 | Value-proposition hierarchy | `0_plan/07-design-decisions.md:74` | `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `15-positioning-brief.md`, `1_spec/03-landing-page-spec.md` |
| MD-05 | Social proof selection and placement | `0_plan/07-design-decisions.md:75` | `03-decisions-and-open-questions.md`, `1_spec/03-landing-page-spec.md` |
| MD-06 | Exclusivity signals that are true | `0_plan/07-design-decisions.md:76` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `15-positioning-brief.md`, `1_spec/03-landing-page-spec.md`, `1_spec/11-verification-spec.md` |
| MD-07 | Root-domain SEO structure | `0_plan/07-design-decisions.md:77` | `08-effectiveness-and-expanded-considerations.md`, `10-analytics-current-state.md`, `13-journey-map.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/07-seo-aeo-spec.md` |
| MD-08 | Tag and pixel continuity | `0_plan/07-design-decisions.md:78` | `02-requirements-and-deliverables.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/06-analytics-tracking-spec.md` |
| MD-09 | UTM and attribution pass-through | `0_plan/07-design-decisions.md:79` | `02-requirements-and-deliverables.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/03-landing-page-spec.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/13-testing-suite-spec.md` |
| MD-10 | Wrong-school prevention in copy and UI | `0_plan/07-design-decisions.md:80` | `06-mockup-rationale.md`, `09-operating-model.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/13-testing-suite-spec.md` |
| MD-11 | Contact strategy | `0_plan/07-design-decisions.md:81` | `06-mockup-rationale.md`, `1_spec/01-users-and-journeys.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| MD-12 | Remarketing hooks | `0_plan/07-design-decisions.md:82` | `12-register-loop.md`, `13-journey-map.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/08-advertising-spec.md` |
| MD-13 | Tuition disclosure on the landing | `0_plan/07-design-decisions.md:83` | `06-mockup-rationale.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `truth-proposals.md` |
| MD-14 | Geographic personalization | `0_plan/07-design-decisions.md:84` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/03-landing-page-spec.md`, `1_spec/06-analytics-tracking-spec.md` |
| MD-15 | Qualification friction | `0_plan/07-design-decisions.md:85` | `03-decisions-and-open-questions.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md` |
| MD-16 | Claims governance | `0_plan/07-design-decisions.md:86` | `00-context.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md` |
| MD-17 | Alpha affiliation prominence | `0_plan/07-design-decisions.md:87` | `00-context.md`, `02-requirements-and-deliverables.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `18-knowledge-base-plan.md`, `1_spec/03-landing-page-spec.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/11-verification-spec.md`, `CLAUDE.md`, `truth-proposals.md` |
| MD-18 | Positioning against alternatives | `0_plan/07-design-decisions.md:88` | `08-effectiveness-and-expanded-considerations.md`, `11-seo-aeo-plan.md`, `15-positioning-brief.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md` |
| MD-19 | Local search for Georgetown | `0_plan/07-design-decisions.md:89` | `03-decisions-and-open-questions.md`, `08-effectiveness-and-expanded-considerations.md`, `11-seo-aeo-plan.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/07-seo-aeo-spec.md` |
| MD-20 | Consent and privacy posture | `0_plan/07-design-decisions.md:90` | `02-requirements-and-deliverables.md`, `03-decisions-and-open-questions.md`, `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/09-chatbot-platform-spec.md` |
| MD-21 | What to test first | `0_plan/07-design-decisions.md:91` | `00-context.md`, `09-operating-model.md`, `1_spec/08-advertising-spec.md` |
| MD-22 | Language policy | `0_plan/07-design-decisions.md:92` | `08-effectiveness-and-expanded-considerations.md`, `12-register-loop.md`, `1_spec/05-school-sites-spec.md` |
| MD-23 | Organic Instagram continuity | `0_plan/07-design-decisions.md:93` | `00-context.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `1_spec/08-advertising-spec.md`, `CLAUDE.md` |
| MD-24 | Answer-engine readiness | `0_plan/07-design-decisions.md:94` | `03-decisions-and-open-questions.md`, `08-effectiveness-and-expanded-considerations.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/07-seo-aeo-spec.md` |
| MD-25 | Access messaging against exclusivity | `0_plan/07-design-decisions.md:95` | `00-context.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `18-knowledge-base-plan.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `CLAUDE.md`, `truth-proposals.md` |
| MD-26 | The TEFA module | `0_plan/07-design-decisions.md:96` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `12-register-loop.md`, `13-journey-map.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/08-advertising-spec.md`, `1_spec/13-testing-suite-spec.md`, `truth-proposals.md` |

## MN: Motion decisions

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| MN-01 | The job of motion | `0_plan/07-design-decisions.md:102` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `17-design-studio-runbook.md`, `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| MN-02 | Hero entrance | `0_plan/07-design-decisions.md:103` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `1_spec/03-landing-page-spec.md` |
| MN-03 | Door hover, focus and expand | `0_plan/07-design-decisions.md:104` | `06-mockup-rationale.md`, `12-register-loop.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| MN-04 | Scroll-driven reveals | `0_plan/07-design-decisions.md:105` | `06-mockup-rationale.md`, `12-register-loop.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| MN-05 | State transitions (comparison toggle, switcher, helper) | `0_plan/07-design-decisions.md:106` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| MN-06 | Video in the hero | `0_plan/07-design-decisions.md:107` | `06-mockup-rationale.md`, `1_spec/03-landing-page-spec.md` |
| MN-07 | CTA micro-interactions | `0_plan/07-design-decisions.md:108` | `06-mockup-rationale.md`, `12-register-loop.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| MN-08 | Signature motion per lens | `0_plan/07-design-decisions.md:109` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `12-register-loop.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/13-testing-suite-spec.md` |
| MN-09 | Implementation stack | `0_plan/07-design-decisions.md:110` | `06-mockup-rationale.md`, `12-register-loop.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| MN-10 | Performance budget | `0_plan/07-design-decisions.md:111` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `11-seo-aeo-plan.md`, `12-register-loop.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| MN-11 | Accessibility and reduced motion | `0_plan/07-design-decisions.md:112` | `06-mockup-rationale.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| MN-12 | Mobile motion policy | `0_plan/07-design-decisions.md:113` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `12-register-loop.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| MN-13 | Motion tokens | `0_plan/07-design-decisions.md:114` | `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| MN-14 | Continuity across the hop to a school site | `0_plan/07-design-decisions.md:115` | `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md` |
| MN-15 | Motion in in-app browsers | `0_plan/07-design-decisions.md:116` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `06-mockup-rationale.md`, `08-effectiveness-and-expanded-considerations.md`, `12-register-loop.md`, `13-journey-map.md`, `17-design-studio-runbook.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| MN-16 | Motion vocabulary and the property contract under D-031 (from K4) | `0_plan/07-design-decisions.md:117` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `12-register-loop.md` |

## AN: Analytics and GA4 decisions

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| AN-01 | Property and stream structure | `0_plan/07-design-decisions.md:125` | `00-context.md`, `02-requirements-and-deliverables.md`, `05-landing-mockups-plan.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/06-analytics-tracking-spec.md` |
| AN-02 | Ownership and access | `0_plan/07-design-decisions.md:126` | `09-operating-model.md`, `1_spec/06-analytics-tracking-spec.md` |
| AN-03 | Tag deployment | `0_plan/07-design-decisions.md:127` | `00-context.md`, `10-analytics-current-state.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/11-verification-spec.md` |
| AN-04 | Event taxonomy | `0_plan/07-design-decisions.md:128` | `02-requirements-and-deliverables.md`, `10-analytics-current-state.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md`, `1_spec/06-analytics-tracking-spec.md` |
| AN-05 | Key events (conversions) cleanup | `0_plan/07-design-decisions.md:129` | `00-context.md`, `02-requirements-and-deliverables.md`, `03-decisions-and-open-questions.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/11-verification-spec.md` |
| AN-06 | Cross-domain measurement and in-app browsers | `0_plan/07-design-decisions.md:130` | `02-requirements-and-deliverables.md`, `10-analytics-current-state.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/13-testing-suite-spec.md` |
| AN-07 | Source of truth for conversions and the wrong-school metric | `0_plan/07-design-decisions.md:131` | `03-decisions-and-open-questions.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md`, `SOURCES.md` |
| AN-08 | UTM governance | `0_plan/07-design-decisions.md:132` | `02-requirements-and-deliverables.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/08-advertising-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| AN-09 | Ad platform conversion tags | `0_plan/07-design-decisions.md:133` | `12-register-loop.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/08-advertising-spec.md` |
| AN-10 | Consent mode | `0_plan/07-design-decisions.md:134` | `03-decisions-and-open-questions.md`, `10-analytics-current-state.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/13-testing-suite-spec.md` |
| AN-11 | PII and children's data | `0_plan/07-design-decisions.md:135` | `10-analytics-current-state.md`, `1_spec/06-analytics-tracking-spec.md` |
| AN-12 | Server-side tagging | `0_plan/07-design-decisions.md:136` | `1_spec/06-analytics-tracking-spec.md` |
| AN-13 | Product analytics alongside GA4 | `0_plan/07-design-decisions.md:137` | `12-register-loop.md`, `1_spec/06-analytics-tracking-spec.md` |
| AN-14 | Reporting | `0_plan/07-design-decisions.md:138` | `02-requirements-and-deliverables.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| AN-15 | Internal and development traffic | `0_plan/07-design-decisions.md:139` | `02-requirements-and-deliverables.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md`, `CLAUDE.md` |
| AN-16 | Search and answer-engine visibility | `0_plan/07-design-decisions.md:140` | `09-operating-model.md`, `10-analytics-current-state.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/07-seo-aeo-spec.md` |
| AN-17 | HubSpot tracking | `0_plan/07-design-decisions.md:141` | `10-analytics-current-state.md`, `1_spec/06-analytics-tracking-spec.md` |
| AN-18 | Retention, QA and documentation | `0_plan/07-design-decisions.md:142` | `05-landing-mockups-plan.md`, `13-journey-map.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/13-testing-suite-spec.md` |
| AN-19 | Consent-first tag loading, byte budgets and absolute vitals targets (from K11, K8) | `0_plan/07-design-decisions.md:143` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `12-register-loop.md` |

## AD: Advertising channel decisions

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| AD-01 | Channel roles | `0_plan/07-design-decisions.md:151` | `00-context.md`, `05-landing-mockups-plan.md`, `09-operating-model.md`, `1_spec/08-advertising-spec.md` |
| AD-02 | Landing destination per channel | `0_plan/07-design-decisions.md:152` | `09-operating-model.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/08-advertising-spec.md` |
| AD-03 | UTM conventions for ads and organic social | `0_plan/07-design-decisions.md:153` | `1_spec/06-analytics-tracking-spec.md`, `1_spec/08-advertising-spec.md` |
| AD-04 | Pixels and tags on the landing | `0_plan/07-design-decisions.md:154` | `02-requirements-and-deliverables.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/08-advertising-spec.md`, `1_spec/13-testing-suite-spec.md` |
| AD-05 | Optimization events per platform | `0_plan/07-design-decisions.md:155` | `02-requirements-and-deliverables.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `13-journey-map.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/08-advertising-spec.md`, `1_spec/13-testing-suite-spec.md` |
| AD-06 | Server-side conversion APIs | `0_plan/07-design-decisions.md:156` | `09-operating-model.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/08-advertising-spec.md` |
| AD-07 | Audiences | `0_plan/07-design-decisions.md:157` | `13-journey-map.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/08-advertising-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| AD-08 | Creative and message match | `0_plan/07-design-decisions.md:158` | `09-operating-model.md`, `13-journey-map.md`, `1_spec/03-landing-page-spec.md`, `1_spec/08-advertising-spec.md` |
| AD-09 | Geographic alignment | `0_plan/07-design-decisions.md:159` | `1_spec/08-advertising-spec.md` |
| AD-10 | Attribution and reporting | `0_plan/07-design-decisions.md:160` | `1_spec/06-analytics-tracking-spec.md`, `1_spec/08-advertising-spec.md` |
| AD-11 | Claims and imagery in ads | `0_plan/07-design-decisions.md:161` | `03-decisions-and-open-questions.md`, `06-mockup-rationale.md`, `1_spec/04-design-system-spec.md`, `1_spec/08-advertising-spec.md` |
| AD-12 | Organic profile links | `0_plan/07-design-decisions.md:162` | `09-operating-model.md`, `13-journey-map.md`, `1_spec/08-advertising-spec.md` |
| AD-13 | Network cross-traffic | `0_plan/07-design-decisions.md:163` | `09-operating-model.md`, `10-analytics-current-state.md`, `1_spec/08-advertising-spec.md` |
| AD-14 | Ownership and budget governance | `0_plan/07-design-decisions.md:164` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `09-operating-model.md`, `10-analytics-current-state.md`, `1_spec/08-advertising-spec.md` |
| AD-15 | Click identifiers and source values on outbound door links (from K8) | `0_plan/07-design-decisions.md:165` | `05-landing-mockups-plan.md`, `12-register-loop.md` |

## CB: Chatbot platform decisions

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| CB-01 | Hosting model on TrueFoundry | `0_plan/07-design-decisions.md:173` | `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `09-operating-model.md`, `12-register-loop.md`, `1_spec/09-chatbot-platform-spec.md` |
| CB-02 | Model access | `0_plan/07-design-decisions.md:174` | `09-operating-model.md`, `13-journey-map.md`, `1_spec/09-chatbot-platform-spec.md` |
| CB-03 | Knowledge base | `0_plan/07-design-decisions.md:175` | `09-operating-model.md`, `13-journey-map.md`, `1_spec/09-chatbot-platform-spec.md`, `1_spec/13-testing-suite-spec.md` |
| CB-04 | Guardrails | `0_plan/07-design-decisions.md:176` | `09-operating-model.md`, `13-journey-map.md`, `1_spec/09-chatbot-platform-spec.md`, `1_spec/13-testing-suite-spec.md` |
| CB-05 | Evaluation gate before launch | `0_plan/07-design-decisions.md:177` | `09-operating-model.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/09-chatbot-platform-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| CB-06 | Observability and analytics | `0_plan/07-design-decisions.md:178` | `09-operating-model.md`, `13-journey-map.md`, `1_spec/09-chatbot-platform-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| CB-07 | Cost controls | `0_plan/07-design-decisions.md:179` | `09-operating-model.md`, `1_spec/09-chatbot-platform-spec.md` |
| CB-08 | Placement and timing | `0_plan/07-design-decisions.md:180` | `05-landing-mockups-plan.md`, `09-operating-model.md`, `1_spec/05-school-sites-spec.md`, `1_spec/09-chatbot-platform-spec.md` |

## SE: SEO and AEO decisions

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| SE-01 | Domain architecture for search | `0_plan/07-design-decisions.md:188` | `05-landing-mockups-plan.md`, `11-seo-aeo-plan.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/07-seo-aeo-spec.md` |
| SE-02 | Redirects and canonicals at the root change | `0_plan/07-design-decisions.md:189` | `11-seo-aeo-plan.md`, `13-journey-map.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/07-seo-aeo-spec.md` |
| SE-03 | Target queries by intent | `0_plan/07-design-decisions.md:190` | `11-seo-aeo-plan.md`, `1_spec/07-seo-aeo-spec.md` |
| SE-04 | Page-to-query mapping | `0_plan/07-design-decisions.md:191` | `11-seo-aeo-plan.md`, `1_spec/05-school-sites-spec.md` |
| SE-05 | Structured data | `0_plan/07-design-decisions.md:192` | `03-decisions-and-open-questions.md`, `11-seo-aeo-plan.md`, `13-journey-map.md`, `15-positioning-brief.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/13-testing-suite-spec.md` |
| SE-06 | Technical baseline | `0_plan/07-design-decisions.md:193` | `11-seo-aeo-plan.md`, `13-journey-map.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/13-testing-suite-spec.md` |
| SE-07 | Organic content plan (Phase 2) | `0_plan/07-design-decisions.md:194` | `11-seo-aeo-plan.md`, `13-journey-map.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md` |
| SE-08 | Entity consistency for answer engines | `0_plan/07-design-decisions.md:195` | `11-seo-aeo-plan.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/13-testing-suite-spec.md` |
| SE-09 | Answer-shaped content | `0_plan/07-design-decisions.md:196` | `13-journey-map.md`, `1_spec/03-landing-page-spec.md`, `1_spec/05-school-sites-spec.md`, `1_spec/07-seo-aeo-spec.md` |
| SE-10 | AI crawler policy and llms.txt | `0_plan/07-design-decisions.md:197` | `03-decisions-and-open-questions.md`, `11-seo-aeo-plan.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/03-landing-page-spec.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/13-testing-suite-spec.md` |
| SE-11 | AEO measurement | `0_plan/07-design-decisions.md:198` | `11-seo-aeo-plan.md`, `1_spec/07-seo-aeo-spec.md` |
| SE-12 | Local search for Georgetown | `0_plan/07-design-decisions.md:199` | `11-seo-aeo-plan.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/05-school-sites-spec.md`, `1_spec/07-seo-aeo-spec.md` |
| SE-13 | Preview and staging indexation | `0_plan/07-design-decisions.md:200` | `09-operating-model.md`, `11-seo-aeo-plan.md`, `12-register-loop.md`, `13-journey-map.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/02-sitemaps-and-ia.md`, `1_spec/03-landing-page-spec.md`, `1_spec/07-seo-aeo-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md`, `CLAUDE.md` |
| SE-14 | Governance | `0_plan/07-design-decisions.md:201` | `05-landing-mockups-plan.md`, `11-seo-aeo-plan.md`, `13-journey-map.md`, `1_spec/07-seo-aeo-spec.md` |

## SRC: Sources of truth (SOURCES.md; designated in TRUTH.md)

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| SRC-001 | The call transcript | `0_plan/SOURCES.md:15` |  |
| SRC-002 | The live sites | `0_plan/SOURCES.md:16` |  |
| SRC-003 | The mirror | `0_plan/SOURCES.md:17` |  |
| SRC-004 | GA4 property 516065070, through the snapshot tool | `0_plan/SOURCES.md:18` |  |
| SRC-005 | Supabase behind apply.gt.school | `0_plan/SOURCES.md:19` |  |
| SRC-006 | HubSpot portal 40051392 | `0_plan/SOURCES.md:20` |  |
| SRC-007 | Linear, team GT School, project gt-anywhere | `0_plan/SOURCES.md:21` |  |
| SRC-008 | Git, `GT-Education/gt-anywhere-site` | `0_plan/SOURCES.md:22` |  |
| SRC-009 | Nari, in writing | `0_plan/SOURCES.md:23` |  |
| SRC-010 | Crystal, in writing | `0_plan/SOURCES.md:24` |  |
| SRC-011 | Holly | `0_plan/SOURCES.md:25` |  |
| SRC-012 | Johnny's decisions | `0_plan/SOURCES.md:26` |  |
| SRC-013 | The claims register | `0_plan/SOURCES.md:27` | `12-claims-register.md` |
| SRC-014 | `docs/ANALYTICS.md` in the v1 checkout | `0_plan/SOURCES.md:28` |  |
| SRC-015 | Webflow, both projects | `0_plan/SOURCES.md:29` |  |
| SRC-016 | TEFA program terms | `0_plan/SOURCES.md:30` |  |
| SRC-017 | Alpha network brand guidelines and approved data | `0_plan/SOURCES.md:31` |  |

## TR: Source-of-truth statements (attested in TRUTH.md, proposed in truth-proposals.md)

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| TR-001 | Anywhere tuition is $10,400 a year and the Texas TEFA voucher covers it in full for eligible families | `0_plan/truth-proposals.md:7` |  |
| TR-002 | Admission is for students at the 90th percentile and above | `0_plan/truth-proposals.md:8` |  |
| TR-003 | the Anywhere homepage calls itself "The Gifted Academy of Alpha School" | `0_plan/truth-proposals.md:9` |  |
| TR-004 | Academics run on the TimeBack platform for about two hours a day, MAP-aligned, with afternoons for projects | `0_plan/truth-proposals.md:10` |  |
| TR-005 | Property `GT Web — All Sites` (516065070) in account 403360775 (gtschool) | `0_plan/truth-proposals.md:11` |  |
| TR-006 | gt.school absent from the hostname report | `0_plan/truth-proposals.md:12` |  |
| TR-007 | sha256:ef90b83cdea35c6453bb7ba0f552e012589f2b8c3539c5ed47ed166e4696fea3 | `0_plan/truth-proposals.md:13` | `SOURCES.md` |
| TR-008 | Owns both websites and their content; requirements authority | `0_plan/truth-proposals.md:14` |  |
| TR-009 | team GT School (GTT), project gt-anywhere | `0_plan/truth-proposals.md:15` |  |
| TR-010 | git@github.com:GT-Education/gt-anywhere-site.git | `0_plan/truth-proposals.md:16` |  |
| TR-011 | Five. Johnny's call on 2026-09-10 | `0_plan/truth-proposals.md:17` |  |
| TR-012 | Decided (platform) 2026-09-10; build gated by D-006 | `0_plan/truth-proposals.md:18` |  |
| TR-013 | three different speed claims (3x, 4x, 3-7x) | `0_plan/truth-proposals.md:19` |  |
| TR-014 | `page_view` configured as a GA4 key event, inflating conversions | `0_plan/truth-proposals.md:20` |  |
| TR-015 | GT School, Inc. | `0_plan/truth-proposals.md:21` |  |

## CR: Claims register rows (0_plan/12-claims-register.md)

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| CR-001 | "Yes. We are fully accredited by Cognia and TEFA-eligible." | `0_plan/12-claims-register.md:23` | `02-requirements-and-deliverables.md`, `03-decisions-and-open-questions.md`, `05-landing-mockups-plan.md`, `07-design-decisions.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/07-seo-aeo-spec.md` |
| CR-002 | "GT School - Virtual is a Candidate for Accreditation with Cognia..." | `0_plan/12-claims-register.md:24` | `15-positioning-brief.md` |
| CR-003 | "Accredited K-8 virtual academy for exceptional students delivering 4x faster learning..." (JSON-LD) and "Our  | `0_plan/12-claims-register.md:25` | `02-requirements-and-deliverables.md`, `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/07-seo-aeo-spec.md` |
| CR-004 | "Delivering 3x faster learning" | `0_plan/12-claims-register.md:26` | `03-decisions-and-open-questions.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/03-landing-page-spec.md` |
| CR-005 | "delivering 4x faster learning" (structured data) / "Adaptive platform proven to deliver 4X learning velocity" | `0_plan/12-claims-register.md:27` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `15-positioning-brief.md`, `1_spec/07-seo-aeo-spec.md` |
| CR-006 | "3-7x faster learning" | `0_plan/12-claims-register.md:28` | `03-decisions-and-open-questions.md`, `15-positioning-brief.md` |
| CR-007 | "Growth Factor target (3X for grades 3+, 2X for grades K-2)" | `0_plan/12-claims-register.md:29` | `03-decisions-and-open-questions.md`, `15-positioning-brief.md`, `1_spec/03-landing-page-spec.md` |
| CR-008 | "3X learning velocity" | `0_plan/12-claims-register.md:30` | `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/03-landing-page-spec.md` |
| CR-009 | "1400+ SATs by 8th grade" | `0_plan/12-claims-register.md:31` | `15-positioning-brief.md` |
| CR-010 | "score 1350+ on their SAT tests by eighth grade" | `0_plan/12-claims-register.md:32` | `15-positioning-brief.md` |
| CR-011 | "designed for students in the 90th+ percentile" | `0_plan/12-claims-register.md:33` | `07-design-decisions.md`, `08-effectiveness-and-expanded-considerations.md`, `15-positioning-brief.md`, `truth-proposals.md` |
| CR-012 | "Top 1-2% nationally" | `0_plan/12-claims-register.md:34` | `15-positioning-brief.md` |
| CR-013 | "94th percentile in Reading to the 98th in Math and Science" | `0_plan/12-claims-register.md:35` |  |
| CR-014 | "Our students outperform 91% of students nationally" | `0_plan/12-claims-register.md:36` | `15-positioning-brief.md` |
| CR-015 | "More than half of our students' test results land in the top 10% nationally" | `0_plan/12-claims-register.md:37` |  |
| CR-016 | "our classes are in the nation's top 1% by eighth grade" | `0_plan/12-claims-register.md:38` | `15-positioning-brief.md` |
| CR-017 | "73% of our students have mastered a subject at least three grade levels above their age" | `0_plan/12-claims-register.md:39` |  |
| CR-018 | "86% have mastered two or more subjects at least two grade levels above their age grade" | `0_plan/12-claims-register.md:40` |  |
| CR-019 | "Our students' Science scores average in the 98th percentile nationally" | `0_plan/12-claims-register.md:41` |  |
| CR-020 | "Four in five score in the top 25% nationally in Science" | `0_plan/12-claims-register.md:42` | `07-design-decisions.md` |
| CR-021 | "$10,400/year — GT Anywhere annual tuition, fully or partially covered by TEFA" | `0_plan/12-claims-register.md:43` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `15-positioning-brief.md`, `1_spec/03-landing-page-spec.md` |
| CR-022 | "The $10,474 TEFA voucher fully covers the $10,400 GT Anywhere tuition." | `0_plan/12-claims-register.md:44` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `15-positioning-brief.md`, `1_spec/03-landing-page-spec.md` |
| CR-023 | "...net family cost of $0 if you have a child who is already outpacing their class." | `0_plan/12-claims-register.md:45` |  |
| CR-024 | "A limited number of $10,000 scholarships are available for founding families" | `0_plan/12-claims-register.md:46` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `15-positioning-brief.md`, `16-g05-decision-record.md`, `1_spec/03-landing-page-spec.md` |
| CR-025 | "curated cohort... of 8-12 fellow intellectuals" | `0_plan/12-claims-register.md:47` | `15-positioning-brief.md` |
| CR-026 | "12–15 student cohort" | `0_plan/12-claims-register.md:48` | `03-decisions-and-open-questions.md`, `15-positioning-brief.md` |
| CR-027 | "Our first nine students proved the model." | `0_plan/12-claims-register.md:49` |  |
| CR-028 | "GT Anywhere launched in 2026... attracted hundreds of students in its first months" | `0_plan/12-claims-register.md:50` |  |
| CR-029 | "The program launches in 2026 with $1 billion in funding." (TEFA, statewide) | `0_plan/12-claims-register.md:51` | `03-decisions-and-open-questions.md`, `07-design-decisions.md` |
| CR-030 | "50% Monthly Tuition Credit... if [MAP] Growth Factor... is less than [target]... and... completed at least 80 | `0_plan/12-claims-register.md:52` |  |
| CR-031 | "TimeBack · 140 XP / Day" | `0_plan/12-claims-register.md:53` | `05-landing-mockups-plan.md`, `07-design-decisions.md` |
| CR-032 | Four in-person intensive weekends a year in Georgetown (four named 2026 to 2027 weekends) | `0_plan/12-claims-register.md:54` |  |
| CR-033 | Georgetown mornings: "two 50-minute blocks and one 25-minute block with structured breaks in between. The bloc | `0_plan/12-claims-register.md:55` |  |
| CR-034 | GT Anywhere mornings: "two to three hours of 100% cognitive load" (academics page); FAQ: "Core academics via T | `0_plan/12-claims-register.md:56` |  |
| CR-035 | Guides hold weekly one-to-one check-ins with each student ("Academic Advisors are responsible for weekly 1:1 c | `0_plan/12-claims-register.md:57` |  |

## W: End-to-end workflows (0_plan/13)

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| W-01 | Aware parent from Instagram organic reaches the right school site | `0_plan/13-journey-map.md:14` | `1_spec/00-scope-and-traceability.md`, `1_spec/13-testing-suite-spec.md`, `README.md` |
| W-02 | Interested parent from search compares, uses the helper, books a tour | `0_plan/13-journey-map.md:15` | `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| W-03 | Ready parent goes straight to the right application | `0_plan/13-journey-map.md:16` | `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| W-04 | Enrolled family finds support without calling the general line | `0_plan/13-journey-map.md:17` | `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| W-05 | A wrong-school start is caught and counted | `0_plan/13-journey-map.md:18` | `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| W-06 | Texas parent sees the TEFA offer | `0_plan/13-journey-map.md:19` | `1_spec/13-testing-suite-spec.md` |
| W-07 | Paid campaign click in an in-app browser | `0_plan/13-journey-map.md:20` | `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| W-08 | Answer-engine visitor and crawler | `0_plan/13-journey-map.md:21` | `1_spec/13-testing-suite-spec.md` |
| W-09 | Content changes without drift | `0_plan/13-journey-map.md:22` | `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| W-10 | An event becomes a number Nari can read | `0_plan/13-journey-map.md:23` | `03-decisions-and-open-questions.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| W-11 | The root domain moves without losing search | `0_plan/13-journey-map.md:24` | `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| W-12 | A parent asks the chatbot (gated, after D-006) | `0_plan/13-journey-map.md:25` | `1_spec/00-scope-and-traceability.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md`, `README.md` |

## TC: Test cases (1_spec/13)

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| TC-001 | W-01/1, W-02/1, W-08/3 | `1_spec/13-testing-suite-spec.md:38` | `13-journey-map.md` |
| TC-002 | W-01/1 | `1_spec/13-testing-suite-spec.md:39` | `13-journey-map.md` |
| TC-003 | W-01/2 | `1_spec/13-testing-suite-spec.md:40` | `13-journey-map.md` |
| TC-004 | W-01/2 | `1_spec/13-testing-suite-spec.md:41` | `13-journey-map.md` |
| TC-005 | Invariant | `1_spec/13-testing-suite-spec.md:42` | `13-journey-map.md` |
| TC-006 | W-01/3 | `1_spec/13-testing-suite-spec.md:43` | `13-journey-map.md` |
| TC-007 | W-01/3 | `1_spec/13-testing-suite-spec.md:44` | `13-journey-map.md` |
| TC-008 | W-02/2 | `1_spec/13-testing-suite-spec.md:45` | `13-journey-map.md` |
| TC-009 | W-02/2 | `1_spec/13-testing-suite-spec.md:46` | `13-journey-map.md` |
| TC-010 | W-02/3 | `1_spec/13-testing-suite-spec.md:47` | `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-011 | W-02/3 | `1_spec/13-testing-suite-spec.md:48` | `13-journey-map.md` |
| TC-012 | W-02/4 | `1_spec/13-testing-suite-spec.md:49` | `13-journey-map.md` |
| TC-013 | W-01/3, W-03/2, W-06/3 | `1_spec/13-testing-suite-spec.md:50` | `13-journey-map.md` |
| TC-014 | W-01/4 | `1_spec/13-testing-suite-spec.md:51` | `13-journey-map.md` |
| TC-015 | W-03/1 | `1_spec/13-testing-suite-spec.md:52` | `03-decisions-and-open-questions.md`, `13-journey-map.md` |
| TC-016 | W-03/2 | `1_spec/13-testing-suite-spec.md:53` | `13-journey-map.md` |
| TC-017 | W-03/3, W-05/1 | `1_spec/13-testing-suite-spec.md:54` | `13-journey-map.md` |
| TC-018 | W-06/1 | `1_spec/13-testing-suite-spec.md:55` | `13-journey-map.md` |
| TC-019 | W-06/1 | `1_spec/13-testing-suite-spec.md:56` | `13-journey-map.md` |
| TC-020 | W-06/2 | `1_spec/13-testing-suite-spec.md:57` | `13-journey-map.md` |
| TC-021 | Invariant | `1_spec/13-testing-suite-spec.md:58` | `13-journey-map.md` |
| TC-022 | Failure mode | `1_spec/13-testing-suite-spec.md:59` | `13-journey-map.md` |
| TC-023 | W-01/2 | `1_spec/13-testing-suite-spec.md:60` |  |
| TC-024 | W-04/1 | `1_spec/13-testing-suite-spec.md:61` | `13-journey-map.md` |
| TC-025 | W-04/2 | `1_spec/13-testing-suite-spec.md:62` | `13-journey-map.md` |
| TC-030 | W-07/1 | `1_spec/13-testing-suite-spec.md:63` | `03-decisions-and-open-questions.md`, `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-031 | W-07/1 | `1_spec/13-testing-suite-spec.md:64` | `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-035 | W-10/1 | `1_spec/13-testing-suite-spec.md:65` | `13-journey-map.md` |
| TC-036 | W-07/2 | `1_spec/13-testing-suite-spec.md:66` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `13-journey-map.md` |
| TC-037 | W-01/4, W-10/2 | `1_spec/13-testing-suite-spec.md:67` | `03-decisions-and-open-questions.md`, `13-journey-map.md` |
| TC-038 | W-07/3 | `1_spec/13-testing-suite-spec.md:68` | `13-journey-map.md` |
| TC-039 | W-07/4 | `1_spec/13-testing-suite-spec.md:69` | `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-040 | W-02/5 | `1_spec/13-testing-suite-spec.md:70` | `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-041 | W-03/4 | `1_spec/13-testing-suite-spec.md:71` | `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-042 | W-04/3, W-07/3 | `1_spec/13-testing-suite-spec.md:72` | `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-043 | W-01/2 | `1_spec/13-testing-suite-spec.md:73` | `13-journey-map.md` |
| TC-044 | W-02/1, W-08/2 | `1_spec/13-testing-suite-spec.md:74` | `13-journey-map.md` |
| TC-045 | W-02/1 | `1_spec/13-testing-suite-spec.md:75` | `13-journey-map.md` |
| TC-046 | Invariant, W-06/2, W-09/1 | `1_spec/13-testing-suite-spec.md:76` | `13-journey-map.md` |
| TC-047 | W-08/1 | `1_spec/13-testing-suite-spec.md:77` | `13-journey-map.md` |
| TC-048 | W-08/1, W-09/2 | `1_spec/13-testing-suite-spec.md:78` | `13-journey-map.md` |
| TC-049 | W-08/2 | `1_spec/13-testing-suite-spec.md:79` | `13-journey-map.md` |
| TC-050 | W-05/2 | `1_spec/13-testing-suite-spec.md:80` | `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-051 | W-05/3, W-10/3 | `1_spec/13-testing-suite-spec.md:81` | `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-052 | W-05/4, W-10/4 | `1_spec/13-testing-suite-spec.md:82` | `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-053 | W-09/1 | `1_spec/13-testing-suite-spec.md:83` | `13-journey-map.md` |
| TC-054 | W-09/2, W-09/4 | `1_spec/13-testing-suite-spec.md:84` | `13-journey-map.md` |
| TC-055 | W-09/3 | `1_spec/13-testing-suite-spec.md:85` | `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-056 | W-10/2 | `1_spec/13-testing-suite-spec.md:86` | `03-decisions-and-open-questions.md`, `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-057 | W-10/5 | `1_spec/13-testing-suite-spec.md:87` | `13-journey-map.md` |
| TC-058 | W-11/1 | `1_spec/13-testing-suite-spec.md:88` | `13-journey-map.md` |
| TC-059 | W-11/2 | `1_spec/13-testing-suite-spec.md:89` | `13-journey-map.md` |
| TC-060 | W-11/3 | `1_spec/13-testing-suite-spec.md:90` | `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-061 | W-11/4 | `1_spec/13-testing-suite-spec.md:91` | `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-062 | W-12/1 | `1_spec/13-testing-suite-spec.md:92` | `13-journey-map.md` |
| TC-063 | W-12/2 | `1_spec/13-testing-suite-spec.md:93` | `13-journey-map.md` |
| TC-064 | W-12/3 | `1_spec/13-testing-suite-spec.md:94` | `13-journey-map.md` |
| TC-065 | W-12/4 | `1_spec/13-testing-suite-spec.md:95` | `13-journey-map.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| TC-070 | All mocks | `1_spec/13-testing-suite-spec.md:98` |  |
| TC-071 | Phase 0 | `1_spec/13-testing-suite-spec.md:99` |  |
| TC-072 | Invariant, W-07/1 | `1_spec/13-testing-suite-spec.md:96` | `07-design-decisions.md`, `13-journey-map.md` |
| TC-073 | W-02/3, W-05/1 | `1_spec/13-testing-suite-spec.md:97` | `03-decisions-and-open-questions.md`, `07-design-decisions.md`, `13-journey-map.md`, `1_spec/03-landing-page-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |

## C: Completion checklist

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| C-01 | Five mocks exist, each opens, each is self-contained under `0_plan/mockups/M*/index.html` | `0_plan/05-landing-mockups-plan.md:220` | `1_spec/00-scope-and-traceability.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |
| C-02 | Every mock satisfies the "common to all" table in section 4 | `0_plan/05-landing-mockups-plan.md:221` |  |
| C-03 | Every mock renders correctly at 390px and 1440px | `0_plan/05-landing-mockups-plan.md:222` | `1_spec/03-landing-page-spec.md` |
| C-04 | Zero console errors per mock | `0_plan/05-landing-mockups-plan.md:223` | `1_spec/03-landing-page-spec.md` |
| C-05 | No forms, no external scripts other than fonts | `0_plan/05-landing-mockups-plan.md:224` |  |
| C-06 | No placeholder text; every factual claim tagged in the rationale | `0_plan/05-landing-mockups-plan.md:225` |  |
| C-07 | `06-mockup-rationale.md` has one row per mock with lens order, hypothesis, and each decision traced to a DD id | `0_plan/05-landing-mockups-plan.md:226` | `1_spec/03-landing-page-spec.md` |
| C-08 | `07-design-decisions.md` has Fable and Astra columns filled for every DD (part A), MD (part B) and MN (part C) | `0_plan/05-landing-mockups-plan.md:227` |  |
| C-09 | Every research report cites its sources; no claim without one | `0_plan/05-landing-mockups-plan.md:228` |  |
| C-10 | The gallery shows all five side by side with links to rationale | `0_plan/05-landing-mockups-plan.md:229` | `1_spec/03-landing-page-spec.md` |
| C-11 | Section 8 status table is current | `0_plan/05-landing-mockups-plan.md:230` |  |
| C-12 | Push-back items (section 10) each have a decision or an open owner | `0_plan/05-landing-mockups-plan.md:231` |  |
| C-13 | Each mock answers the parent questions (section 6c, E2 amendment) or the rationale says which it defers to the | `0_plan/05-landing-mockups-plan.md:232` |  |
| C-14 | Each mock's rationale row declares its asset dependencies and fallback (DD-31) | `0_plan/05-landing-mockups-plan.md:233` |  |
| C-15 | Each mock's motion spec is complete (MN-01 to MN-14) and its reduced-motion behavior is verified in a browser | `0_plan/05-landing-mockups-plan.md:234` | `07-design-decisions.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/03-landing-page-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md` |

## T: Build tasks

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| T-001 | Restructure the v2 tree: move the mirror to `sites/anywhere/`, create `sites/landing/` and `design-system/` (D | `1_spec/00-scope-and-traceability.md:113` | `1_spec/11-verification-spec.md`, `1_spec/README.md` |
| T-002 | Vercel project in a team scope, connected to GitHub: previews per PR, `v2` as staging, `main` as production; ` | `1_spec/00-scope-and-traceability.md:114` | `1_spec/07-seo-aeo-spec.md`, `1_spec/11-verification-spec.md` |
| T-003 | Linear project "GT Web Redo" with the states, labels, parent issues and templates in `10-build-and-operations- | `1_spec/00-scope-and-traceability.md:115` | `1_spec/11-verification-spec.md` |
| T-004 | Claims register v1: every number on the Anywhere pages and gt.school (speed multipliers, percentiles, SAT targ | `1_spec/00-scope-and-traceability.md:116` | `1_spec/05-school-sites-spec.md`, `1_spec/11-verification-spec.md` |
| T-005 | `1_spec/tools/check-claims.py`: scans built HTML for numbers, percentages and prices and fails on any figure w | `1_spec/00-scope-and-traceability.md:117` | `12-claims-register.md`, `1_spec/10-build-and-operations-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/README.md`, `SOURCES.md` |
| T-006 | GTM container with consent mode scaffolding: GA4 configuration, Meta, TikTok, HubSpot tags paused, consent cat | `1_spec/00-scope-and-traceability.md:118` | `1_spec/11-verification-spec.md` |
| T-007 | GA4 fixes (DEL-025): remove `page_view` as a key event; development data stream; BigQuery export on; linker do | `1_spec/00-scope-and-traceability.md:119` | `1_spec/06-analytics-tracking-spec.md`, `1_spec/11-verification-spec.md` |
| T-008 | Tag gt.school with the shared stream through the container snippet in Webflow site settings. Stop-and-ask: Nar | `1_spec/00-scope-and-traceability.md:120` | `1_spec/05-school-sites-spec.md`, `1_spec/06-analytics-tracking-spec.md`, `1_spec/11-verification-spec.md` |
| T-009 | Fonts: subset woff2 for Literata, Inter Tight and Inconsolata with fallback stacks and a preload plan (DD-01) | `1_spec/00-scope-and-traceability.md:121` | `1_spec/03-landing-page-spec.md`, `1_spec/04-design-system-spec.md`, `1_spec/11-verification-spec.md` |
| T-010 | Consent decision request to Nari and counsel using `1_spec/templates/decision-request.md` (MD-20, Q-016), with | `1_spec/00-scope-and-traceability.md:122` | `1_spec/06-analytics-tracking-spec.md` |
| T-011 | Tracking plan v1 (DEL-024) from `06-analytics-tracking-spec.md`: every event, parameter, destination and conse | `1_spec/00-scope-and-traceability.md:123` |  |
| T-012 | Re-mirror the live Anywhere site into `./out`, diff against the mirror, merge the four `feat/gta-*-clear` bran | `1_spec/00-scope-and-traceability.md:124` | `1_spec/05-school-sites-spec.md` |
| T-013 | Integrity gate for S0: `check-links`, `check-paths`, `check-runlog`, `check-coverage`, `build-index`, `build-t | `1_spec/00-scope-and-traceability.md:125` | `1_spec/README.md` |
| T-020 | Journey map document (DEL-003): the four flows above with entry sources from GA, exits, events and success sig | `1_spec/01-users-and-journeys.md:111` | `1_spec/00-scope-and-traceability.md`, `1_spec/README.md` |
| T-021 | Objection inventory completed with Crystal: every objection in section 4 gets an answer location and a content | `1_spec/01-users-and-journeys.md:112` |  |
| T-022 | Parent-questions test protocol: recruit five parents (Nari's network), script, ten-second timing, scoring shee | `1_spec/01-users-and-journeys.md:113` | `1_spec/03-landing-page-spec.md`, `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| T-023 | Decision helper copy and logic spec finalized, including the no-JavaScript state and reduced-motion state | `1_spec/01-users-and-journeys.md:114` |  |
| T-024 | Persona validation with Nari and Crystal: confirm or correct section 2, especially objections and CTAs per per | `1_spec/01-users-and-journeys.md:115` | `1_spec/README.md` |
| T-030 | Crawl gt.school with third-party hosts blocked: every URL, title, H1, word count, inbound links from Anywhere  | `1_spec/02-sitemaps-and-ia.md:156` | `07-design-decisions.md`, `1_spec/00-scope-and-traceability.md`, `1_spec/README.md` |
| T-031 | Current and target sitemap documents with the diagrams above updated from T-030 | `1_spec/02-sitemaps-and-ia.md:157` |  |
| T-032 | Redirect map (DEL-009) complete for every URL in T-030 with traffic or backlinks; `vercel.json` redirects draf | `1_spec/02-sitemaps-and-ia.md:158` | `1_spec/07-seo-aeo-spec.md` |
| T-033 | Unified IA proposal (DEL-010): menu, page types, per-school fourth item, admissions sub-pages, switcher, appro | `1_spec/02-sitemaps-and-ia.md:159` | `1_spec/00-scope-and-traceability.md` |
| T-034 | Shared shell content spec: header, footer, facts block wording (from the claims register), switcher labels (DD | `1_spec/02-sitemaps-and-ia.md:160` |  |
| T-035 | Page inventory with owners and cadence (DEL-011) completed with Nari | `1_spec/02-sitemaps-and-ia.md:161` |  |
| T-036 | Search Console properties for gt.school, georgetown and anywhere; sitemaps per host planned; canonical rules w | `1_spec/02-sitemaps-and-ia.md:162` | `1_spec/07-seo-aeo-spec.md`, `1_spec/README.md` |
| T-040 | Positioning brief (DEL-017): umbrella promise, per-school promise, proof, tone, affiliation stance, price and  | `1_spec/03-landing-page-spec.md:182` | `1_spec/00-scope-and-traceability.md`, `1_spec/README.md` |
| T-041 | Landing content spec v1 (DEL-006): every slot in section 2 filled or marked with its Q id; claims rows referen | `1_spec/03-landing-page-spec.md:183` |  |
| T-042 | Build M1 Two Doors | `1_spec/03-landing-page-spec.md:184` |  |
| T-043 | Build M2 The Institute | `1_spec/03-landing-page-spec.md:185` |  |
| T-044 | Build M3 Private Quiet | `1_spec/03-landing-page-spec.md:186` |  |
| T-045 | Build M4 Builders | `1_spec/03-landing-page-spec.md:187` |  |
| T-046 | Build M5 One School, Two Campuses | `1_spec/03-landing-page-spec.md:188` |  |
| T-047 | Gallery `0_plan/mockups/index.html` and `0_plan/06-mockup-rationale.md` with one row per mock: lens order, hyp | `1_spec/03-landing-page-spec.md:189` | `06-mockup-rationale.md` |
| T-048 | Self-QA per mock: screenshots 390 and 1440, console clean, links resolve, axe pass, reduced-motion screenshot | `1_spec/03-landing-page-spec.md:190` |  |
| T-049 | E2: Astra reviews the five mocks with screenshots attached, scores lenses and requirements, runs the parent-qu | `1_spec/03-landing-page-spec.md:191` |  |
| T-050 | Fix pass from E2 findings, or decline with reason | `1_spec/03-landing-page-spec.md:192` |  |
| T-051 | Five-parent test run per T-022 protocol; results recorded | `1_spec/03-landing-page-spec.md:193` | `1_spec/11-verification-spec.md` |
| T-052 | G1 package for Nari: gallery, rationale, register, test results, recommendation | `1_spec/03-landing-page-spec.md:194` |  |
| T-053 | Comparison facts verified with Crystal and Nari (Q-007, Q-008, Q-011, Q-017); claims register rows added | `1_spec/03-landing-page-spec.md:195` |  |
| T-054 | TEFA module: content file with window, wording, owner, expiry; display rule per D-015 | `1_spec/03-landing-page-spec.md:196` |  |
| T-055 | Decision helper in production: logic, states, events, reduced motion | `1_spec/03-landing-page-spec.md:197` |  |
| T-056 | Event wiring through the container (AN-04) with DebugView verification | `1_spec/03-landing-page-spec.md:198` |  |
| T-057 | SEO: metadata, structured data, robots, llms.txt, canonical, Open Graph (per `07`) | `1_spec/03-landing-page-spec.md:199` |  |
| T-058 | Accessibility audit and fixes on the winner | `1_spec/03-landing-page-spec.md:200` |  |
| T-059 | Core Web Vitals tuning: preload, image sizes, container deferral | `1_spec/03-landing-page-spec.md:201` | `18-knowledge-base-plan.md` |
| T-060 | In-app browser QA matrix (Instagram, Facebook, TikTok on iOS and Android) on the preview | `1_spec/03-landing-page-spec.md:202` | `1_spec/11-verification-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| T-061 | Motion budget and reduced-motion verification on the winner | `1_spec/03-landing-page-spec.md:203` |  |
| T-062 | Headline variant parameter, the geolocation flag (default off), and the `school=` parameter on every applicati | `1_spec/03-landing-page-spec.md:204` | `1_spec/08-advertising-spec.md`, `1_spec/README.md` |
| T-063 | R1 extraction: computed tokens from both live sites with third-party hosts blocked; motion settings from the G | `1_spec/04-design-system-spec.md:110` | `1_spec/README.md`, `README.md` |
| T-064 | Token documentation and naming review; semantic roles confirmed | `1_spec/04-design-system-spec.md:111` |  |
| T-065 | Fonts integrated into the design system with preload plan and fallback tuning | `1_spec/04-design-system-spec.md:112` | `18-knowledge-base-plan.md` |
| T-066 | Partials: header (landing and school variants), footer, facts block | `1_spec/04-design-system-spec.md:113` |  |
| T-067 | Sync step `tools/sync-design-system.mjs` and the Webflow bundle emitter | `1_spec/04-design-system-spec.md:114` |  |
| T-068 | Component CSS: door card and list, switcher, comparison, schedule visual, proof strip, TEFA module, helper, CT | `1_spec/04-design-system-spec.md:115` |  |
| T-069 | Motion tokens and the reduced-motion layer | `1_spec/04-design-system-spec.md:116` |  |
| T-070 | Side-by-side proof against both live sites (DEL-004 acceptance) | `1_spec/04-design-system-spec.md:117` |  |
| T-071 | Living styleguide page listing tokens, components and states | `1_spec/04-design-system-spec.md:118` |  |
| T-072 | Accessibility check of every component: contrast, focus, names, keyboard | `1_spec/04-design-system-spec.md:119` | `1_spec/README.md` |
| T-080 | Anywhere v2 shell: header, footer, menu, switcher, facts block from `04` applied to `sites/anywhere/` through  | `1_spec/05-school-sites-spec.md:87` | `1_spec/README.md` |
| T-081 | Home page v2 with the content file | `1_spec/05-school-sites-spec.md:88` |  |
| T-082 | Academics page v2 | `1_spec/05-school-sites-spec.md:89` |  |
| T-083 | Advisors page v2 | `1_spec/05-school-sites-spec.md:90` |  |
| T-084 | Intensives page v2 with Q-017 facts | `1_spec/05-school-sites-spec.md:91` |  |
| T-085 | Academic calendar v2 at the same URL | `1_spec/05-school-sites-spec.md:92` |  |
| T-086 | Admissions page: steps, bar, tuition and access, after 8th, Begin application with `school=anywhere`, info-ses | `1_spec/05-school-sites-spec.md:93` |  |
| T-087 | FAQ page (DEL-012) from the top-100 list with `FAQPage` schema, search and unanswered capture | `1_spec/05-school-sites-spec.md:94` | `1_spec/00-scope-and-traceability.md`, `1_spec/07-seo-aeo-spec.md` |
| T-088 | Thesis page (REQ-042) | `1_spec/05-school-sites-spec.md:95` |  |
| T-089 | Proof page (REQ-043) after Q-015 | `1_spec/05-school-sites-spec.md:96` |  |
| T-090 | After-8th-grade content (REQ-048) after Q-013 | `1_spec/05-school-sites-spec.md:97` |  |
| T-091 | TEFA guide (SE-07) after Q-021 | `1_spec/05-school-sites-spec.md:98` |  |
| T-092 | Secondary CTAs wired to HubSpot meetings on both sites | `1_spec/05-school-sites-spec.md:99` |  |
| T-093 | Community aggregate on both homes (REQ-046) | `1_spec/05-school-sites-spec.md:100` |  |
| T-094 | Georgetown shell in Webflow from the bundle, with Nari (D-005, D-021) | `1_spec/05-school-sites-spec.md:101` |  |
| T-095 | Georgetown page parity: Admissions with `school=georgetown`, Campus life, tour CTA | `1_spec/05-school-sites-spec.md:102` |  |
| T-096 | Georgetown local pages and business profile (SE-12) | `1_spec/05-school-sites-spec.md:103` |  |
| T-097 | Content inventory with owners and cadence (DEL-011) | `1_spec/05-school-sites-spec.md:104` | `1_spec/00-scope-and-traceability.md` |
| T-098 | Editing model implementation per D-004 once decided | `1_spec/05-school-sites-spec.md:105` |  |
| T-099 | Cutover PR checklist per V2.md: mirror reconciled (T-012), harness green, redirects none, shell proven, Nari a | `1_spec/05-school-sites-spec.md:106` | `1_spec/README.md` |
| T-100 | Tracking plan v1 published (this document marked v1) with owners per event | `1_spec/06-analytics-tracking-spec.md:141` | `1_spec/README.md` |
| T-101 | Build the GTM container in a workspace: tags, triggers, variables for section 3; consent categories | `1_spec/06-analytics-tracking-spec.md:142` |  |
| T-102 | Consent platform selection and Consent Mode v2 configuration per the decision from T-010 | `1_spec/06-analytics-tracking-spec.md:143` |  |
| T-103 | GA4 custom dimensions registered: school, placement, route, variant, type, region_source | `1_spec/06-analytics-tracking-spec.md:144` |  |
| T-104 | Landing event QA in DebugView on the preview: every section 3 landing event fires with parameters | `1_spec/06-analytics-tracking-spec.md:145` |  |
| T-105 | Linker extension and `decorate_forms` on live Anywhere and apply, with Nari's go | `1_spec/06-analytics-tracking-spec.md:146` |  |
| T-106 | Development stream and internal traffic filter; container stream selection by hostname | `1_spec/06-analytics-tracking-spec.md:147` |  |
| T-107 | BigQuery export and the wrong-school scheduled query | `1_spec/06-analytics-tracking-spec.md:148` | `07-design-decisions.md` |
| T-108 | Looker Studio dashboard with the four KPIs and funnel by school | `1_spec/06-analytics-tracking-spec.md:149` |  |
| T-109 | UTM builder sheet with validation and the conventions in section 8 | `1_spec/06-analytics-tracking-spec.md:150` | `1_spec/08-advertising-spec.md` |
| T-110 | Request in the application repo's Linear project: read `school`, show a confirm step, emit `school` on `app_st | `1_spec/06-analytics-tracking-spec.md:151` | `07-design-decisions.md`, `13-journey-map.md`, `1_spec/01-users-and-journeys.md`, `1_spec/13-testing-suite-spec.md` |
| T-111 | HubSpot tracking through the container behind analytics consent | `1_spec/06-analytics-tracking-spec.md:152` |  |
| T-112 | PostHog evaluation per D-014 after the measurement repair: privacy configuration, masking, one funnel, one fla | `1_spec/06-analytics-tracking-spec.md:153` |  |
| T-113 | Monthly snapshot automation (scheduled `ga4-snapshot.py`) appended to `0_plan/10` | `1_spec/06-analytics-tracking-spec.md:154` |  |
| T-114 | PII audit checklist and a script that scans event payloads and URLs in DebugView exports | `1_spec/06-analytics-tracking-spec.md:155` |  |
| T-115 | Tag map for every surface updated in `0_plan/10` section 2 after the container deploys | `1_spec/06-analytics-tracking-spec.md:156` |  |
| T-116 | Reconciliation report template: GA4 key events against Supabase and HubSpot counts | `1_spec/06-analytics-tracking-spec.md:157` |  |
| T-117 | Ad tags in the container: Meta, TikTok, X, Google Ads, LinkedIn, with custom events and dedup ids (see `08`) | `1_spec/06-analytics-tracking-spec.md:158` | `1_spec/08-advertising-spec.md` |
| T-118 | Analytics section of the launch checklist (DEL-020): DebugView pass, consent behavior, stream selection, key e | `1_spec/06-analytics-tracking-spec.md:159` | `1_spec/README.md` |
| T-120 | Landing metadata: title, description, canonical, Open Graph per section 1 | `1_spec/07-seo-aeo-spec.md:126` | `1_spec/README.md` |
| T-121 | Landing structured data per section 2 with values from the register | `1_spec/07-seo-aeo-spec.md:127` |  |
| T-122 | `robots.txt`, `sitemap.xml`, `llms.txt` for the landing | `1_spec/07-seo-aeo-spec.md:128` |  |
| T-123 | `noindex` headers on previews and staging in `vercel.json` (with T-002) | `1_spec/07-seo-aeo-spec.md:129` |  |
| T-124 | Redirect implementation in `vercel.json` from the T-032 map; tested on staging | `1_spec/07-seo-aeo-spec.md:130` | `1_spec/11-verification-spec.md` |
| T-125 | Facts page and facts block content (section 4) with register rows | `1_spec/07-seo-aeo-spec.md:131` |  |
| T-126 | AEO prompt set baseline run before go-live | `1_spec/07-seo-aeo-spec.md:132` |  |
| T-127 | Search Console properties and sitemap submission (with T-036) | `1_spec/07-seo-aeo-spec.md:133` |  |
| T-128 | School-site metadata and structured data with `parentOrganization` (Anywhere in code; Georgetown in Webflow wi | `1_spec/07-seo-aeo-spec.md:134` |  |
| T-129 | FAQ schema with the FAQ page (with T-087) | `1_spec/07-seo-aeo-spec.md:135` |  |
| T-130 | Georgetown local search kit (section 7) | `1_spec/07-seo-aeo-spec.md:136` |  |
| T-131 | Monthly SEO and AEO review template and the first review | `1_spec/07-seo-aeo-spec.md:137` | `1_spec/README.md` |
| T-135 | Confirm the channel matrix with Nari and the operator (Q-025): roles, destinations, budgets | `1_spec/08-advertising-spec.md:91` | `1_spec/README.md` |
| T-136 | UTM builder sheet in use for every profile and ad link (with T-109) | `1_spec/08-advertising-spec.md:92` |  |
| T-137 | Ad tags in the container with custom events and dedup (with T-117) | `1_spec/08-advertising-spec.md:93` |  |
| T-138 | Audiences defined in each platform per section 3 | `1_spec/08-advertising-spec.md:94` |  |
| T-139 | Landing variants `v=1..3` mapped to hooks (with T-062) | `1_spec/08-advertising-spec.md:95` |  |
| T-140 | Geography alignment documented per campaign: radius for Georgetown (Q-018), Texas TEFA versus national | `1_spec/08-advertising-spec.md:96` |  |
| T-141 | Weekly spend and results table template wired to GA4 and Supabase counts | `1_spec/08-advertising-spec.md:97` |  |
| T-142 | Claims and imagery check on current ad creative against the register | `1_spec/08-advertising-spec.md:98` |  |
| T-143 | Profile links updated with UTMs (Instagram, X, LinkedIn) | `1_spec/08-advertising-spec.md:99` |  |
| T-144 | LinkedIn Insight Tag created when the LinkedIn account opens | `1_spec/08-advertising-spec.md:100` |  |
| T-145 | Experiment roadmap (DEL-021) approved by Nari | `1_spec/08-advertising-spec.md:101` |  |
| T-146 | alpha.school link request sent with the UTM'd URL (AD-13) | `1_spec/08-advertising-spec.md:102` | `1_spec/README.md` |
| T-150 | Offering confirmation: TrueFoundry docs and pricing read; managed versus self-hosted decision drafted for CB-0 | `1_spec/09-chatbot-platform-spec.md:61` | `1_spec/README.md` |
| T-151 | Workspace, SSO and billing owner set up | `1_spec/09-chatbot-platform-spec.md:62` |  |
| T-152 | Gateway configured with keys in secrets, budgets, rate limits, tracing | `1_spec/09-chatbot-platform-spec.md:63` |  |
| T-153 | Hello-world service deployed and reachable | `1_spec/09-chatbot-platform-spec.md:64` |  |
| T-154 | Knowledge pipeline stub: markdown to chunks to store, citations preserved | `1_spec/09-chatbot-platform-spec.md:65` |  |
| T-155 | Golden and adversarial sets written and stored | `1_spec/09-chatbot-platform-spec.md:66` |  |
| T-156 | Guardrail policy and refusal templates approved | `1_spec/09-chatbot-platform-spec.md:67` |  |
| T-157 | Evaluation harness runs the sets against the gateway and reports the pass rate | `1_spec/09-chatbot-platform-spec.md:68` | `1_spec/11-verification-spec.md` |
| T-158 | Ask GT section wired after the gate: events, hand-off, caching | `1_spec/09-chatbot-platform-spec.md:69` | `1_spec/README.md` |
| T-160 | Approve and install the runner (D-028): `tests/package.json`, Playwright, a first passing smoke test against t | `1_spec/13-testing-suite-spec.md:129` | `02-requirements-and-deliverables.md`, `03-decisions-and-open-questions.md`, `12-register-loop.md`, `1_spec/README.md` |
| T-161 | `1_spec/tools/build-tests.py` generating skeletons from section 3 | `1_spec/13-testing-suite-spec.md:130` |  |
| T-162 | Static layer wrapper: one command runs the seven checkers plus HTML structure, no-form and no-external-script  | `1_spec/13-testing-suite-spec.md:131` |  |
| T-163 | Analytics interception helper and consent fixtures (TC-001, TC-007, TC-036, TC-037) | `1_spec/13-testing-suite-spec.md:132` | `03-decisions-and-open-questions.md` |
| T-164 | W-01 to W-04 E2E specs implemented against the winning mock | `1_spec/13-testing-suite-spec.md:133` |  |
| T-165 | W-06 to W-08 specs (TEFA, in-app browser manual template, crawler and structured data) | `1_spec/13-testing-suite-spec.md:134` | `03-decisions-and-open-questions.md` |
| T-166 | Accessibility and reduced-motion checks in every E2E spec (axe, keyboard, reduced motion) | `1_spec/13-testing-suite-spec.md:135` |  |
| T-167 | Lighthouse CI nightly with budgets from `1_spec/03` section 9 | `1_spec/13-testing-suite-spec.md:136` |  |
| T-168 | Redirect test script over the map (TC-058, TC-059) | `1_spec/13-testing-suite-spec.md:137` |  |
| T-169 | External-system checks documented as procedures with evidence templates (TC-039 to TC-042, TC-051, TC-052, TC- | `1_spec/13-testing-suite-spec.md:138` |  |
| T-170 | Mock gate run (TC-070) against all five mocks before E2 | `1_spec/13-testing-suite-spec.md:139` |  |
| T-171 | Phase 0 regression (TC-071) against both live sites monthly | `1_spec/13-testing-suite-spec.md:140` | `02-requirements-and-deliverables.md`, `1_spec/README.md` |

## V: Verification checks

| ID | Title | Defined in | Referenced in |
|---|---|---|---|
| V-001 | S0 tree restructure: mirrored files byte-identical after the move; harness serves the new root | `1_spec/11-verification-spec.md:28` | `1_spec/README.md` |
| V-002 | Vercel previews return `x-robots-tag: noindex`; production branch is `main` | `1_spec/11-verification-spec.md:29` | `1_spec/13-testing-suite-spec.md` |
| V-003 | Linear project matches `10` section 6: states, labels, templates, S0 issues | `1_spec/11-verification-spec.md:30` |  |
| V-004 | Claims register lists every figure on both sites; conflicts flagged | `1_spec/11-verification-spec.md:31` | `1_spec/13-testing-suite-spec.md` |
| V-005 | `check-claims.py` fails on an unregistered figure and passes on registered ones | `1_spec/11-verification-spec.md:32` |  |
| V-006 | Container export matches the tracking plan; tags paused; consent categories present | `1_spec/11-verification-spec.md:33` |  |
| V-007 | GA4 key events corrected; development stream exists; BigQuery export on; linker extended | `1_spec/11-verification-spec.md:34` |  |
| V-008 | gt.school appears in the hostname report | `1_spec/11-verification-spec.md:35` |  |
| V-009 | Fonts: glyph coverage, weight budget, rendering identical to TTF | `1_spec/11-verification-spec.md:36` |  |
| V-010 | Landing exists at the agreed URL presenting both schools | `1_spec/11-verification-spec.md:37` | `1_spec/03-landing-page-spec.md` |
| V-011 | First screen at 390 by 844 contains only the umbrella sentence, provenance line, doors and helper entry above  | `1_spec/11-verification-spec.md:38` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| V-012 | Five of five test parents choose correctly within ten seconds | `1_spec/11-verification-spec.md:39` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| V-013 | Comparison block present, shared rows first, reachable from the first screen | `1_spec/11-verification-spec.md:40` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| V-014 | Tokens match `04`; no type or palette outside the envelope without a flagged departure | `1_spec/11-verification-spec.md:41` | `1_spec/03-landing-page-spec.md` |
| V-015 | 390 and 1440 screenshots reviewed; no horizontal scroll; tap targets at least 44px | `1_spec/11-verification-spec.md:42` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| V-016 | Application steps present per school, facts verified by Crystal | `1_spec/11-verification-spec.md:43` | `1_spec/03-landing-page-spec.md` |
| V-017 | "Current families" in the header; no phone number on the first screen | `1_spec/11-verification-spec.md:44` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| V-018 | Full school names in every label | `1_spec/11-verification-spec.md:45` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| V-019 | Five distinct mocks with rationale rows; Nari's written choice | `1_spec/11-verification-spec.md:46` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| V-020 | Every landing event fires with parameters (winner) | `1_spec/11-verification-spec.md:47` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| V-021 | Umbrella sentence decodes GT; provenance line at the decided prominence | `1_spec/11-verification-spec.md:48` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| V-022 | `check-claims.py` passes on the built page; every figure footnoted | `1_spec/11-verification-spec.md:49` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| V-023 | Consent posture implemented; no non-essential tag fires before consent in a regulated region | `1_spec/11-verification-spec.md:50` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| V-024 | Screenshots from Instagram, Facebook and TikTok in-app browsers on iOS and Android | `1_spec/11-verification-spec.md:51` | `03-decisions-and-open-questions.md`, `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| V-025 | Events documented in `06`; visible in GA4 with parameters; baseline recorded | `1_spec/11-verification-spec.md:52` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| V-026 | Tuition and access stated the same way for both schools, or Georgetown marked "see campus site" | `1_spec/11-verification-spec.md:53` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| V-027 | Georgetown measurable: 28 days of hostname data before comparisons are quoted | `1_spec/11-verification-spec.md:54` |  |
| V-028 | Key events match AN-05 and the change is logged in `0_plan/10` | `1_spec/11-verification-spec.md:55` | `1_spec/13-testing-suite-spec.md` |
| V-029 | Tracking plan approved; every event in DebugView on the preview | `1_spec/11-verification-spec.md:56` | `1_spec/13-testing-suite-spec.md` |
| V-030 | Shared IA: same menu order and page types on both sites | `1_spec/11-verification-spec.md:57` | `1_spec/13-testing-suite-spec.md` |
| V-031 | Design system consumed by all three surfaces; one tokens source | `1_spec/11-verification-spec.md:58` | `1_spec/13-testing-suite-spec.md` |
| V-032 | Each site's copies of tokens, fonts and partials match `design-system/` | `1_spec/11-verification-spec.md:59` | `13-journey-map.md`, `1_spec/04-design-system-spec.md`, `1_spec/13-testing-suite-spec.md` |
| V-033 | No stock or outdated photos; every section carries substance | `1_spec/11-verification-spec.md:60` |  |
| V-034 | Admissions and after-8th sections live on both sites | `1_spec/11-verification-spec.md:61` |  |
| V-035 | FAQ live, searchable, schema validates, owner named | `1_spec/11-verification-spec.md:62` | `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| V-036 | Journey map traced to nav and CTAs | `1_spec/11-verification-spec.md:63` |  |
| V-037 | Requirements session with Crystal filed as a call summary | `1_spec/11-verification-spec.md:64` |  |
| V-038 | URLs and structured data reflect the umbrella; redirect map executed; rankings hold 30 days | `1_spec/11-verification-spec.md:65` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| V-039 | Thesis, proof (with methodology and privacy review), TEFA guide, secondary CTAs, community aggregate live | `1_spec/11-verification-spec.md:66` | `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| V-040 | Content inventory rows all have owner and cadence; an edit reaches production within the SLA | `1_spec/11-verification-spec.md:67` |  |
| V-041 | Both application links carry the correct `school=`; no form on the landing | `1_spec/11-verification-spec.md:68` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| V-042 | Wrong-school metric computed from Supabase with Crystal's log until then | `1_spec/11-verification-spec.md:69` | `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| V-043 | Lighthouse mobile at or above the Anywhere home baseline; LCP under 2.0 s; CLS 0 | `1_spec/11-verification-spec.md:70` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md` |
| V-044 | axe clean; keyboard pass; reduced-motion verified | `1_spec/11-verification-spec.md:71` | `1_spec/03-landing-page-spec.md`, `1_spec/13-testing-suite-spec.md`, `1_spec/tests/MANUAL-AND-EXTERNAL.md` |
| V-045 | Chatbot evaluation gate: at least 95 percent correct, zero fabricated facts | `1_spec/11-verification-spec.md:72` | `1_spec/13-testing-suite-spec.md` |
| V-046 | Completion checklist C-01 to C-15 for the mock round | `1_spec/11-verification-spec.md:73` | `1_spec/13-testing-suite-spec.md` |
| V-047 | Phase 0 items absent from every page of both sites | `1_spec/11-verification-spec.md:74` | `1_spec/13-testing-suite-spec.md` |
