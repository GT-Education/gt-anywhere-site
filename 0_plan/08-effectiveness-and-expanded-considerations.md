# Optimal and effective: the definition, and what else the plan must consider

| Field | Value |
|---|---|
| Version | 0.1, 2026-09-10 |
| Purpose | Define what "optimal and effective" means for this redesign, then widen the plan to everything that definition implies: audience, positioning inside the Alpha network, proof and compliance, the conversion system around the page, discoverability, platform, Phase 2 seeds, governance |
| Inputs | The call (01), the mirrored Anywhere pages (verified facts, section 1), my prior knowledge of the Alpha School network (section 2, flagged for verification), the plan (05) |
| Status | Proposed. Feeds G0. New requirement, deliverable, decision and question ids are appended to 02 and 03; new register rows are listed in section 5 |

## 1. What the live Anywhere site already establishes (verified in the mirror)

| Fact on the page | Where | Why it changes the plan |
|---|---|---|
| "What is GT Anywhere: The Gifted Academy of Alpha School" | Home | The Alpha affiliation is already public. The decision is prominence, not disclosure (MD-17) |
| Learning runs "via the TimeBack platform", "MAP standards-based curriculum" | Home, Academics | The product is nameable and showable; outcome data exists in the same platform (C2, G2) |
| "4x faster learning" (structured data), "3x faster learning" (body), "3-7x faster learning" (stat block), all on the homepage | Home | Claims are unmanaged. Polishing the design around inconsistent numbers would make the inconsistency more visible (C1, REQ-022, Q-019) |
| "1400+ SAT Target: our benchmark for college readiness by the end of 8th grade" in copy, but "delivering... 1400+ SATs by 8th grade" in structured data | Home | A target is being read by search engines as a result. Same claims problem |
| "Top 1-2% nationally", "Median MAP growth velocity documented at the Georgetown campus pilot" | Home | Proof already leans on Georgetown data; the two schools share one evidence base (C2) |
| "$10,400/year GT Anywhere annual tuition, fully or partially covered by TEFA"; "The $10,474 TEFA voucher fully covers the $10,400 GT Anywhere tuition"; "Summer 2026: redeem your funds" | Home | For Texas families Anywhere is effectively free. This collides with an "elite, exclusive" price signal and is the single strongest offer on either site. It is also Texas-only and time-bound (B5, D4, MD-25, MD-26, DD-28) |
| "Designed for students in the 90th+ percentile" (academics page, R4 CR-011); "we enroll gifted learners who light up around big ideas" | Academics, Home | Selectivity is real and stated. Exclusivity can be honest (MD-06, MD-15) |
| "Accelerated Foundations track, 45-minute sessions for gifted early learners" | Home | There is a program for the youngest; the landing must not read as upper-elementary only |
| Quarterly in-person intensives; Georgetown named on Anywhere pages | Intensives, Calendar | Anywhere is not purely virtual; the comparison must say so (Q-017) |
| Zero occurrences of "tour", "info session" or "open house" on any page | All | The interested-but-not-ready visitor (J2) has no CTA today (D1, REQ-044) |
| One mention of what follows 8th grade | Academics | "The MIT of K-8" invites "then what?" and the sites barely answer it (A4, REQ-048) |
| "Advisors" on 26 elements; "guide" once; "teacher" a few times | Advisors | GT says advisors where Alpha says guides. Nomenclature drift inside the network (B4) |
| "Expanding nationwide" | Home | The scalable choice component (DD-21) is not hypothetical |

## 2. Alpha network context (my prior knowledge, to verify in R2 and R4)

| What I believe | Confidence | Implication for this plan | Verify by |
|---|---|---|---|
| Alpha School is an Austin-born private school network built on the "2 Hour Learning" model: about two hours of adaptive, AI-driven core academics a day on the Timeback platform, afternoons for workshops and life skills, adults called guides | High | GT inherits a model, a platform, a vocabulary and a marketing machine. Borrow what works, differentiate on purpose (B2, B6) | Network brand guidelines and campus pages (Q-014) |
| The network expanded to many cities in 2025 and 2026 and drew heavy press, including skepticism about learning-speed claims and AI in classrooms | High | GT's "MIT of K-8" claim will be held to a higher proof standard than the network's marketing. Claims governance is P0 (C1) | R2 press audit |
| Flagship tuition is well above GT Anywhere's $10,400; GT Georgetown's price is unknown to me | Medium | The two GT schools may differ sharply in price. The comparison block must handle it (Q-011, REQ-026) | Nari |
| GT School is the network's school for gifted students, with Georgetown as the campus and Anywhere as the virtual school; the site confirms the first part | High | Positioning writes itself as "the selective school in the Alpha network". The question is how loudly (MD-17, MD-18) | Nari |
| Sibling schools in the network use different sub-brands and their own sites | Medium | There may be a network convention for choosing a campus that GT should match or deliberately differ from (Q-020) | Holly |

## 3. What optimal and effective mean here

Effective is measured in outcomes. Optimal is those outcomes per unit of cost, risk and time, with everything the landing establishes reused in Phase 2. Targets are set after DEL-008 records baselines; the placeholders below are the shape, not the number.

### Effective

| Outcome | Metric | How measured | Baseline | Target |
|---|---|---|---|---|
| Right-school routing | Wrong-school applications as a share of all applications | Crystal's count, then a school parameter on the application link (MD-09) | Q-005 | Below 2 percent |
| Qualified demand | Application starts per 100 landing sessions, by school | GA4 events across hosts (REQ-025) | DEL-008 | Up against baseline; set after two weeks of data |
| Choice made | Door click-through as a share of landing sessions; first-screen bounce on paid mobile | GA4, PostHog if D-014 adopts it | DEL-008 | Click-through above 60 percent; bounce below 35 percent |
| Understanding | Parents identify the right school within 10 seconds | Five-parent test before launch (REQ-012); parent-questions test in E2 | None | Five of five |
| Brand ownership | The root domain ranks first for "GT School" and both school sites are indexed under the umbrella | Search Console | Q-003 | Position one within 60 days of go-live |
| Ops relief | Enrolled-family calls to the general line; Crystal's time on misroutes | Crystal, monthly | Q-005 | Down by half |
| Trust | Unsubstantiated or inconsistent claims live on any surface | Claims register (DEL-018) | Three multipliers today | Zero |
| Coherence | Shared tokens and shell adopted by both school sites | Phase 2 leading indicator | None | Both sites by Phase 2 cutover |

### Optimal

| Dimension | Definition | How the plan enforces it |
|---|---|---|
| Build cost | Five complete mocks, one hardened winner; no agency (CON-01) | Push-back row 1 in 05; D-007 hand-off package |
| Time to live | The landing is live for the first paid campaign flight after G1 | Phase discipline, section 7 |
| Maintenance | Nothing dated without an owner; one source for shared content and tokens | DD-28, REQ-052, D-004 |
| Risk | No SEO loss, no unsubstantiated claim, consent posture decided before events fire | DEL-009, DEL-018, REQ-023 |
| Reuse | Design system, motion tokens, event taxonomy, shell, and URL approach all inherited by Phase 2 | REQ-032, MN-13, REQ-025, D-003 |
| Learning speed | Experiment-ready from day one: hooks, door order, helper, proof placement | D-014, DEL-021 |

### Principles that bind every decision

| # | Principle | Source |
|---|---|---|
| 1 | Route first, prove second, sell third. The first screen makes the choice; proof earns the click; selling is for the school sites | L1, DD-20, DD-22 |
| 2 | Nothing unverifiable goes live. Every number has a register row and a footnote | Section 1, C1 |
| 3 | Exclusive by selectivity, not by price. TEFA makes Anywhere free for Texas families; the 90th-plus percentile bar is the exclusivity | B5 |
| 4 | Design for N campuses and one virtual school. "Expanding nationwide" is on the page | DD-21 |
| 5 | The paid-social in-app browser on a phone is the primary viewport | DD-14, E4 |
| 6 | Build the system, not the page. Tokens, shell, events and motion outlive the landing | REQ-032 |
| 7 | Baseline before launch, or the effect cannot be shown | D-010 |
| 8 | Borrow the network, differentiate the school. Use Alpha's proven patterns; say clearly what GT is for | B2, B6 |

## 4. Expanded considerations

Priority is for the redesign overall. Phase says where it lands. "Lands in" names the id that carries it.

### A. Audience and journeys

| # | Consideration | Why it matters | Recommendation | Lands in | Phase | Priority |
|---|---|---|---|---|---|---|
| A1 | Personas, not just journeys | Four distinct parents arrive: the Texas-local parent of a bored high-achiever near Georgetown (in-person candidate, also TEFA-eligible for Anywhere); the remote parent of a profoundly gifted child with no local option; the informed comparer already weighing Alpha, Davidson, Stanford OHS or homeschool; the current family | DEL-003 defines these four, each with the door it should take and the objection it brings | DEL-003 | 1 | P1 |
| A2 | Objection inventory | Gifted-parent objections are predictable: socialization, screen time and AI, accreditation and transcripts, what follows 8th grade, parent workload in a virtual school, time zones, intensives travel, assessment stress, "is my child gifted enough", TEFA eligibility and timing | List them now; the landing pre-empts the top three inside the comparison block; the rest go to the FAQ | REQ-036, DD-06 | 1 list, 2 page | P1 |
| A3 | Eligibility clarity | The site states 90th-plus percentile. Saying which evidence counts (MAP, CogAT, teacher recommendation) reduces unqualified applications and makes exclusivity honest | State the bar and the accepted evidence on both school sites; the landing says "selective" and links | MD-15, Q-012 | 1 | P1 |
| A4 | After 8th grade | One mention across five pages. The "MIT of K-8" claim makes this the second question every parent asks | One agreed sentence on both sites; a fuller answer in the FAQ | REQ-048, Q-013 | 1 decide, 2 build | P1 |
| A5 | Two decision-makers and the child | School choice is made by two adults, often with the child's voice. A comparison that can be sent or printed helps the second reader | A share or print affordance on the comparison; a student-facing moment (M4) | DD-37 | 3 | P3 |
| A6 | Twice-exceptional families | Gifted overlaps with ADHD, dyslexia and autism. Readability, structure and reduced motion are signals of care, not compliance | Keep Literata for body text (a reading typeface), strict heading structure, reduced-motion by default where possible | DD-36, REQ-074 | 2 | P2 |

### B. Positioning and the network

| # | Consideration | Why it matters | Recommendation | Lands in | Phase | Priority |
|---|---|---|---|---|---|---|
| B1 | Alpha affiliation prominence | Already public on the homepage. Alpha awareness is an asset; its skeptics transfer. Hiding it now would read as evasive | Name it once on the landing as provenance ("the gifted school in the Alpha School network"), not as the headline | MD-17, REQ-021 | 1 | P0 |
| B2 | Differentiation from Alpha and from alternatives | The informed parent compares GT against Alpha (same model), public gifted programs (free), private gifted schools, Davidson Academy Online, Stanford OHS (grade 7 up), and enrichment programs that are not full-time schools | A positioning statement in the brief: selective cohort, pace, peers, rigor; a competitive audit in R2 | MD-18, DEL-017 | 1 | P0 |
| B3 | Hooks to test for the umbrella sentence | Four candidate hooks already exist in site language: pace ("education at the speed of aptitude"), peers ("finally find peers who think like them"), outcomes ("top 1-2%"), freedom ("afternoons for the projects that make gifted kids come alive") | Pick one for the mocks in the brief; test the others in the first 90 days | MD-03, MD-04, DEL-021 | 1 | P1 |
| B4 | Nomenclature across the network | GT says advisors and intensives; Alpha says guides and workshops | Decide GT's terms once; plain language first on the landing | DD-27, DD-30, Q-020 | 1 | P1 |
| B5 | Elite but not elitist | TEFA makes Anywhere free for Texas families; the mission is gifted children anywhere. Wealth cues (M3's risk) contradict both | Exclusivity is the bar to get in; access is the story. Say both | MD-25, L4 | 1 | P0 |
| B6 | Borrow the network's proven patterns | Alpha has run many campus launches: pages, admissions flows, claims review, brand guidelines, approved data | An internal ask list before external research | DEL-022, Q-014 | 1 | P1 |

### C. Proof and compliance

| # | Consideration | Why it matters | Recommendation | Lands in | Phase | Priority |
|---|---|---|---|---|---|---|
| C1 | Claims governance | Three speed multipliers and a target read as a result, on one page (section 1). Education marketing draws regulatory and press attention; the network already has skeptics | One claims register: claim, source, approved wording, date, surfaces. Footnotes on the page, the way a research institution would | MD-16, REQ-022, DEL-018, Q-019 | 1 | P0 |
| C2 | Data-backed proof | The reporting warehouse holds per-student mastery and grades-ahead data. Aggregate, anonymized figures ("median GT student works N grades ahead in math, updated monthly") beat generic multipliers and are the MIT move | One verified figure on the landing; a proof page with methodology in Phase 2; privacy review first | REQ-043, Q-015 | 1 decide, 2 build | P1 |
| C3 | Consent and privacy posture | GA4, Meta, TikTok and HubSpot run on a site for families with children. Texas privacy law and children's-data rules apply to what is collected and how | Decide the posture (banner, consent mode, what fires before consent) before adding any event | MD-20, REQ-023, Q-016 | 1 | P0 |
| C4 | Accessibility as exposure | Schools are frequent targets of web accessibility complaints | REQ-074 moves from P2 to P1 for the winner | REQ-074 | 1 | P1 |
| C5 | Required notices and marks | Nondiscrimination statements, accreditation mark usage rules, TEFA program disclaimers | R4 lists them; footer pattern in the shell | R4, Q-021 | 1 | P1 |
| C6 | Form and lead security | The lead webhook is a public function; bots will find it | Bot protection and lead hygiene when forms return in Phase 2; decide the backend | D-016 | 2 | P2 |

### D. The conversion system around the page

| # | Consideration | Why it matters | Recommendation | Lands in | Phase | Priority |
|---|---|---|---|---|---|---|
| D1 | Per-school secondary CTA | No tour, info session or open house exists on any page. J2 is the largest audience | Georgetown: "Book a campus tour". Anywhere: "Join a virtual info session" or "Talk to an advisor". HubSpot meetings already exist | MD-02, REQ-044 | 1 | P1 |
| D2 | Speed to lead and nurture | The landing's effect is capped by what happens in the hour after a click. HubSpot is present; sequences and an SLA may not be | Define response SLA and sequences with Crystal; treat as an ops deliverable alongside the landing | Ops note, Crystal | 1 | P1 |
| D3 | Qualification friction | A soft fit check (grade, percentile evidence, format and location) cuts misroutes and unqualified applications, and cuts volume | Decide the friction level with marketing; prototype in the helper (DD-24) | MD-15 | 1 | P1 |
| D4 | The TEFA moment | The strongest offer on either site, Texas-only and time-bound | An owned "now" module with a Texas-only display rule and an expiry; the one exception to evergreen | MD-26, DD-28, MD-14 | 1 | P0 |
| D5 | Referral and ambassadors | Gifted-parent communities are tight and talkative | A referral CTA on the current-families route later | J4 | 3 | P3 |
| D6 | Real scarcity only | Cohort sizes and windows exist; countdowns and fake scarcity are banned | Publish cohort sizes and application windows if true | MD-06, Q-012 | 1 | P1 |

### E. Discoverability

| # | Consideration | Why it matters | Recommendation | Lands in | Phase | Priority |
|---|---|---|---|---|---|---|
| E1 | Umbrella structured data | Today's structured data describes Anywhere as the organization | Organization with two sub-organizations; each school site declares its parent | MD-07 | 1 | P0 |
| E2 | Local search for Georgetown | A campus competes on "gifted school Austin" and "private school Georgetown TX" | Business profile, local pages, reviews | MD-19 | 2 | P2 |
| E3 | Answer engines | Parents increasingly ask AI assistants "best online school for gifted kids". Crisp factual pages, FAQ and course schema, and an llms.txt file are cheap; the HubSpot connector already exposes AEO metrics | Structured data in Phase 1; the rest with the FAQ | MD-24, REQ-045 | 1 and 2 | P1 |
| E4 | Paid-social continuity and in-app browsers | Instagram, Facebook and TikTok open links in their own webviews: different viewport behavior, autoplay rules and cookie partitioning that weakens attribution | Campaign-variant headlines by query parameter; QA in the webviews, not only desktop Chrome | MD-03, REQ-024 | 1 | P0 |
| E5 | Redirects and canonicals | Moving the root domain is the riskiest single step in Phase 1 | Already planned; nothing to add | DEL-009 | 1 | P0 |

### F. Platform and performance

| # | Consideration | Why it matters | Recommendation | Lands in | Phase | Priority |
|---|---|---|---|---|---|---|
| F1 | Fonts ship as TTF today | Literata and Inter Tight are full TTF files; subset woff2 is a fraction of the weight and the hero face can be preloaded | Convert and subset in the design system; preload the display face | DEL-004 | 1 | P1 |
| F2 | In-app browser quirks | Viewport height, fixed elements, autoplay and storage differ in webviews | A test matrix: iOS and Android, Instagram, Facebook, TikTok, Safari, Chrome | REQ-024 | 1 | P0 |
| F3 | Experimentation platform | GA4 reports; it does not run experiments or show sessions. PostHog is already among the connected tools | GA4 stays for continuity and paid-media reporting; add PostHog for funnels, masked session replay and flag-based A/B | D-014 | 1 | P1 |
| F4 | Geo without third parties | Texas-only TEFA content and door ordering need the visitor's region | Edge geolocation header on the host; default content when unknown | D-015 | 1 | P1 |
| F5 | Image pipeline | Responsive sizes by hand do not scale to Phase 2 | A small script for sizes and formats in the design system | DEL-004 | 2 | P2 |

### G. Design system and Phase 2 seeds

| # | Consideration | Why it matters | Recommendation | Lands in | Phase | Priority |
|---|---|---|---|---|---|---|
| G1 | The day as the comparison device | Two hours of academics and afternoons for projects is the most distinctive fact about the model; a "day at GT" per school compares format, place and rhythm at once | One mock uses the schedule visual as its comparison block | DD-34, REQ-047 | 1 | P1 |
| G2 | Product visibility | Parents want to see what the child will use; the platform is named on the site | Approved screenshots of the learning experience on the school sites | DD-35 | 2 | P2 |
| G3 | Community map | apply.gt.school already hosts a community map | "Families in N states" as social proof; the map as the J4 front door | REQ-046 | 2 | P2 |
| G4 | A thesis page | "Why gifted children need a different school" is the intellectual centerpiece the podcast listener is looking for, and the natural home for the MIT-of-K-8 idea | Phase 2 page; the landing's umbrella sentence is its one-line version | REQ-042 | 2 | P1 |
| G5 | Student work as publications | Projects with abstracts read as research output, the strongest L3 content | Seed in M4; a section on the school sites later | M4 | 3 | P3 |
| G6 | Localization readiness | Texas has many Spanish-speaking families; Anywhere is national | English only in v1; no text in images; string structure that can be translated | MD-22 | 2 | P2 |
| G7 | Component inventory | The mocks will produce doors, comparison, proof strip, schedule, CTA set, header, footer | Name and document them as the Phase 2 component set | DEL-004 | 1 | P1 |

### H. Governance and risk

| # | Consideration | Why it matters | Recommendation | Lands in | Phase | Priority |
|---|---|---|---|---|---|---|
| H1 | A positioning brief before mocks | Umbrella promise, per-school promise, proof, tone, affiliation stance, price and access stance. Without it five mocks answer five different briefs | One page, approved by Nari, as gate G0.5. Adds a day, saves a mock round | DEL-017 | 1 | P0 |
| H2 | Requirements source of truth | Nari has worked from a "dev requirements" spreadsheet; the repo now holds the requirements | The repo is primary; the sheet is a generated reading view | D-013 | 1 | P1 |
| H3 | Cadence | Decisions are blocking on people, not on build | A weekly 30-minute review with Nari; a 48-hour decision SLA; Crystal on admissions rows | 05 section 8 | 1 | P1 |
| H4 | Risk register | SEO migration, claims, brand dilution, content debt, single builder, admissions capacity if demand jumps | One table, reviewed with Nari | DEL-019 | 1 | P1 |
| H5 | Launch checklist | Go-live touches DNS, redirects, consent, claims, accessibility, analytics, rollback | One checklist, signed | DEL-020 | 1 | P0 |
| H6 | Experiment roadmap | The first 90 days decide the hooks, door order, helper and proof placement | Hypotheses with metrics, approved before launch | DEL-021 | 1 | P1 |
| H7 | Single builder | Johnny is the only builder; the docs, tokens and zero-dependency stack are the mitigation | Keep it that way; the hand-off package (D-007) doubles as continuity | D-007 | 1 | P2 |

## 5. Register additions

The decisions this document added (design DD-33 to DD-37, marketing MD-15 to MD-26, motion MN-15) are rows in `07-design-decisions.md`, each with options, Fable's recommendation and reasoning, and Astra's column. They are not repeated here so that every id has exactly one definition.

## 6. Appended to the other documents

| Document | Added |
|---|---|
| 02 requirements | REQ-021 to REQ-026 (Phase 1 cross-cutting); REQ-042 to REQ-048 (Phase 2); DEL-017 to DEL-022 |
| 03 decisions and questions | D-013 to D-016; Q-011 to Q-021 |
| 05 plan | Section 1 row 16; section 3c pointer to this definition; section 6e register additions; G0 asks 8 and 9; research amendments for R2 and R4 |

## 7. Phase discipline: what enters the landing and what waits

Expansive thinking goes into the system and into Phase 2, not into the first screen. The landing stays minimal (CON-04). Only these enter Phase 1 as P0:

| Enters Phase 1 as P0 | Why now |
|---|---|
| Positioning brief (H1) | Five mocks need one brief |
| Claims governance (C1) | Cannot design around three numbers |
| Consent posture (C3) | Must precede any new event |
| Affiliation stance (B1) and access stance (B5, D4) | They are copy on the first screen |
| In-app browser QA (E4, F2) | It is where the traffic is |
| Umbrella structured data (E1) | Cheap, and the root domain is being redefined |
| Scalable doors (DD-21) and decoding GT (DD-33) | Structural; costly to retrofit |
| Redirects and launch checklist (E5, H5) | Go-live safety |

Everything else in section 4 is a Phase 2 seed or a backlog item with an id, so it is not lost and not built early.

## 8. Push-back and recommendations

| Request or assumption | Concern | Recommendation |
|---|---|---|
| "Elite level, private school, exclusivity" as a lens | Anywhere costs $10,400 and TEFA covers it for Texas families. Price-based exclusivity is false on its face and would be contradicted two clicks later | Exclusivity by selectivity. Drop wealth cues; keep the calm, serious register. M3 is the mock most exposed |
| Design first, verify later | Three speed multipliers and a target read as a result are live today. Polished design amplifies whatever number it carries | Claims register before the mocks print a figure (Q-019 to Nari this week) |
| Alpha affiliation as a branding choice still to make | The homepage already says it | Decide prominence, not disclosure. One provenance line |
| Two schools compared as equals | They may differ several-fold in price and differ in format, place and rhythm | The comparison compares on rhythm, place, format and access, and states price the same way for both (Q-011). The schedule visual (G1) does this without a price war |
| A chatbot as the engagement device | Content does not exist yet | The MIT content spine is thesis, FAQ, proof page. Build those; the chatbot is gated (D-006) |
| GA4 is enough | It cannot run experiments or show sessions, and cross-webview attribution is weak | PostHog alongside GA4 (D-014); event taxonomy first (REQ-025) |
| Straight to mocks | Five mocks will answer five briefs | One-page positioning brief as gate G0.5. A day's delay; a mock round saved |
| Think expansively | The temptation is to put the expansiveness on the page | Section 7. The page stays small; the system and Phase 2 carry the ambition |
