# 13 Testing suite specification

| Field | Value |
|---|---|
| Purpose | The suite that proves the estate works, derived node by node from the end-to-end workflows in `0_plan/13-journey-map.md`. Each workflow is a spine; each node yields test cases; each test case names its layer, its automation, its evidence, the requirement and the verification check it serves |
| Decisions applied | D-023, D-028, D-029, D-030; REQ-020, REQ-022, REQ-023, REQ-024, REQ-070 to REQ-074, REQ-075 (every workflow node has a test case; the suite gates merge, G1 and go-live); the checklist C-01 to C-15 |
| Deliverable | DEL-026, the testing suite |
| Relation to `11` | `11-verification-spec.md` defines what must be verified (V ids) and by whom. This document defines how it is exercised repeatably: the test cases behind the V checks, the runner, the environments, the schedule |
| Version | 0.1, 2026-09-10 |

## 1. Layers

| Layer | Code | What it proves | Tooling | Runs |
|---|---|---|---|---|
| Static | S | Ids, paths, coverage, run log, register, truth, claims; HTML structure; no forms; no external scripts; structured data parses | The seven checkers in `0_plan/tools` and `1_spec/tools`; a small HTML assertion script | Every commit (pre-commit hook and CI) |
| End to end | E | A workflow node behaves as specified in a real browser at 390 and 1440 | Playwright Test against the local harness or a preview URL (D-028) | Every pull request |
| Analytics | A | The right event with the right parameters leaves the page, and nothing leaves before consent | Playwright network interception of requests to the GA4 collect endpoint and the pixel endpoints; consent state simulated | Every pull request |
| Accessibility | X | WCAG AA on every page; keyboard; reduced motion | axe-core through Playwright; a keyboard script; reduced-motion emulation | Every pull request |
| Performance | P | Core Web Vitals budgets | Lighthouse CI, mobile preset, three runs, median | Nightly and before launch |
| Manual with evidence | M | Things no runner reaches: in-app browsers on real devices, the five-parent test, Nari's acceptance, the launch checklist | Templates in `1_spec/templates/`; screenshots and notes under `1_spec/runs/` | Per gate |
| External system | K | Data landed where it should: GA4 DebugView, BigQuery rows, HubSpot meetings, audiences, Supabase rows | API reads or screenshots; never writes | Per gate and monthly |

## 2. Environments and safety

| Environment | Used for | Safety rules |
|---|---|---|
| Local harness (`server.sh start 8213`, plus a second port for `sites/landing/`) | S, E, X layers | Serves the working tree; nothing external is called except fonts and, if present, the container in test mode |
| Preview URL (Vercel, `noindex`) | A layer with the real container; M layer on devices | Development GA4 stream; consent simulated; no marketing tag fires unless the test grants consent; pixels observed, never asserted to convert |
| Production, read-only | K layer, smoke after deploy | Page loads only; no clicks that create leads; the live interest form is never submitted (hard rule) |
| Test data | Parameters only (`school`, `utm_*`, `v`); no forms, no personal data, no real applications | A test lead is never created; the wrong-school metric is tested against BigQuery fixtures, not real applicants |

## 3. Test case catalogue

Each row is one assertion set. Layer codes are from section 1. Automation: `auto` (runs in the suite), `manual` (evidence template), `external` (read from a system of record).

| TC | Workflow node | Assertion | Layer | Automation | Evidence | REQ | V |
|---|---|---|---|---|---|---|---|
| TC-001 | W-01/1, W-02/1, W-08/3 | Page returns 200; a `page_view` request leaves with `utm_*` echoed into session parameters; no request to Meta, TikTok, X or LinkedIn hosts before consent | A | auto | HAR excerpt | REQ-020, REQ-023 | V-020, V-023 |
| TC-002 | W-01/1 | The container script is requested after first paint; no other external script is requested except fonts | A | auto | Request timeline | REQ-073 | V-043 |
| TC-003 | W-01/2 | At 390 by 844, the elements above the door CTAs are exactly: lockup, current-families link, admissions contact, umbrella sentence, provenance line, two doors, helper entry | E | auto | Screenshot and DOM order | REQ-011 | V-011 |
| TC-004 | W-01/2 | The umbrella sentence contains "gifted and talented" and names both ways to attend | E | auto | DOM text | REQ-021 | V-021 |
| TC-005 | Invariant | No `form` element on the landing; no request to the Supabase webhook host from any interaction | S, A | auto | DOM and HAR | MD-01 | V-041 |
| TC-006 | W-01/3 | Each door is a single link whose accessible name contains the full school name ("Georgetown Campus" and "GT Anywhere"), and the in-person versus online distinction remains legible with color removed (grayscale render), per WCAG 1.4.1 | E, X | auto | axe, DOM and a grayscale screenshot | REQ-018, DD-04 | V-018 |
| TC-007 | W-01/3 | Clicking a door fires `door_click` with `school`, `placement=first_screen`, `variant`, then `outbound_school_site` | A | auto | Intercepted requests | REQ-020 | V-020 |
| TC-008 | W-02/2 | "Not sure? Compare" scrolls to the comparison; `compare_view` fires once when half in view and not again on further scrolling | E, A | auto | Intercepted requests | REQ-013 | V-013 |
| TC-009 | W-02/2 | Comparison rows appear in the specified order, shared rows first; the tuition row shows the register copy for Anywhere and "see campus site" for Georgetown until Q-011 | E | auto | DOM order and text | REQ-013, REQ-026 | V-013, V-026 |
| TC-010 | W-02/3 | Phase 2 experiment only (DD-24 revised after R3): if the helper ships, "Yes" highlights the Georgetown door, "No" highlights Anywhere, both doors remain, `helper_answer{route}` fires | E, A | deferred to Phase 2 | Screenshots and requests | REQ-012, DD-24 | V-012 |
| TC-011 | W-02/3 | Under `prefers-reduced-motion` and in the default state alike, no element animates on load or scroll; hover and focus styling changes are the only transitions (MN-01 to MN-08 revised after R2) | X | auto | Computed transition durations | MN-11 | V-044 |
| TC-012 | W-02/4 | "Book a campus tour" links to the HubSpot meeting URL with UTMs; `cta_secondary_click{type=tour}` fires | E, A | auto | Link href and requests | REQ-044 | V-039 |
| TC-013 | W-01/3, W-03/2, W-06/3 | Every link to apply.gt.school carries `school=` matching its door and forwards `utm_*` and `v`, and the parameters survive at least one real redirect hop (redirects and URL cleaning are the documented failure mode, R3 S08) | S, E | auto | Link audit through the redirect | REQ-070 | V-041 |
| TC-014 | W-01/4 | The Anywhere site (v2) renders the shared shell: lockup with school name, five menu items in the specified order, switcher listing both schools, Begin application with `school=anywhere` | E | auto | DOM | REQ-030, REQ-031, REQ-032 | V-030, V-031 |
| TC-015 | W-03/1 | The single default headline renders for every `v=` value at launch (variants are inert until MD-03's volume trigger, Q-031); the `v` value is still recorded as a user property so the trigger can be measured | E, A | auto | Screenshots and requests | MD-03 | V-020 |
| TC-016 | W-03/2 | "Already decided? Begin application" fires `cta_apply_click{school, placement}` and navigates to apply.gt.school with `school=` | E, A | auto | Requests and URL | REQ-070 | V-041 |
| TC-017 | W-03/3, W-05/1 | apply.gt.school shows a confirm step naming the school from `school=` and emits `app_started{school}` | E, A | auto once T-110 lands (cross-repo) | Screenshot and requests | MD-10, AN-07 | V-042 |
| TC-018 | W-06/1 | The TEFA module renders from its content file with the window text and fires `tefa_module_view{region_source}` | E, A | auto | Screenshot and requests | MD-26 | V-020 |
| TC-019 | W-06/1 | With an expired window in the content file, the module is absent from the DOM | E | auto | DOM | DD-28 | V-013 |
| TC-020 | W-06/2 | The tuition and access row text equals the claims-register wording | S | auto | `check-claims.py` | REQ-026 | V-026 |
| TC-021 | Invariant | No application or school-site link drops `utm_*` or `v` parameters | E | auto | Link audit after navigation | MD-09 | V-020 |
| TC-022 | Failure mode | With JavaScript blocked, the doors, comparison, steps and links work; the helper is hidden; no console error | E | auto | Screenshot | REQ-070 | V-041 |
| TC-023 | W-01/2 | Tap targets at least 44 by 44 CSS pixels at 390; no horizontal scroll at 390 or 1440 | E | auto | Measurement script | REQ-015 | V-015 |
| TC-024 | W-04/1 | "Current families" is present in the header; no telephone number pattern appears in the first-screen DOM | E | auto | DOM | REQ-017 | V-017 |
| TC-025 | W-04/2 | "Current families" fires `families_click` and links to the hub URL from the content file (Q-002) | E, A | auto | Requests and href | REQ-017 | V-017 |
| TC-030 | W-07/1 | The first screen renders correctly in Instagram, Facebook and TikTok in-app browsers on one iPhone and one Android phone | M | manual, per D-029 | Screenshots per webview in `1_spec/runs/T-060.md` | REQ-024 | V-024 |
| TC-031 | W-07/1 | In a webview, motion is the reduced set (no door lift, instant swaps) | M | manual | Screen recording note | MN-15 | V-044 |
| TC-035 | W-10/1 | Every `data-event` element on the page maps to an event in `1_spec/06` section 3 and vice versa | S | auto | Script diff of DOM attributes against the plan | REQ-020, REQ-029 | V-020, V-029 |
| TC-036 | W-07/2 | With consent denied (simulated regulated region), no request leaves to Meta, TikTok, X, LinkedIn or HubSpot hosts; GA4 behaves per the mode AN-10 records (Basic: nothing before consent; Advanced: cookieless pings only); after consent is granted the marketing requests appear | A | auto | HAR before and after | REQ-023 | V-023 |
| TC-037 | W-01/4, W-10/2 | Cross-domain: the `_gl` linker parameter is present on outbound links to every configured host (gt.school, georgetown.gt.school, anywhere.gt.school, apply.gt.school, community.gt.school) and the client id survives the hop; preview hosts send to the development stream measurement id | A | auto | URL and request measurement id | AN-06, AN-15 | V-025 |
| TC-038 | W-07/3 | After consent, a door click sends a custom event to each configured pixel with a shared dedup id | A | auto | Intercepted requests | AD-04, AD-05 | V-020 |
| TC-039 | W-07/4 | The campaign appears in the GA4 snapshot with sessions attributed | K | external, monthly | Snapshot table | AN-08 | V-025 |
| TC-040 | W-02/5 | A test booking made by a human appears in HubSpot and as `tour_booked` in GA4 | K | external, per gate | Screenshots | REQ-044 | V-039 |
| TC-041 | W-03/4 | An application start made on a test path appears in Supabase with the school | K | external, per gate, Crystal | Export row | AN-07 | V-042 |
| TC-042 | W-04/3, W-07/3 | Audiences in each platform populate from `door_click` and exclude `families_click` | K | external, per gate | Platform screenshots | AD-07 | V-025 |
| TC-043 | W-01/2 | Lighthouse mobile: LCP under 2.0 s, CLS 0, performance at or above the Anywhere home baseline | P | auto, nightly | Lighthouse JSON | REQ-073 | V-043 |
| TC-044 | W-02/1, W-08/2 | JSON-LD parses; `EducationalOrganization` with two `subOrganization` entries; no description states a target as a result (string check against the register) | S | auto | Validator output | SE-05, REQ-045 | V-038 |
| TC-045 | W-02/1 | Title and meta description present on every page and within length limits; canonical self-referencing | S | auto | Head audit | SE-06 | V-038 |
| TC-046 | Invariant, W-06/2, W-09/1 | `check-claims.py` passes on every built page and content file | S | auto | Script output | REQ-022 | V-022 |
| TC-047 | W-08/1 | `robots.txt` allows the crawlers per SE-10; `sitemap.xml` lists every indexable page; `llms.txt` lists the agreed pages | S | auto | curl output | SE-10 | V-038 |
| TC-048 | W-08/1, W-09/2 | Preview and staging deployments return `x-robots-tag: noindex` and require deployment authentication; no URL carrying `noindex` is also disallowed in `robots.txt` (a robots block would stop the `noindex` from being read); production returns no `noindex` | S | auto against preview and production | curl output | SE-13 | V-002 |
| TC-049 | W-08/2 | The facts block text is byte-identical across the landing footer, `/facts`, both school footers | S | auto | Diff | SE-08 | V-038 |
| TC-050 | W-05/2 | Crystal's wrong-school log follows the agreed format and is filed monthly | M | procedure | Log file | REQ-072 | V-042 |
| TC-051 | W-05/3, W-10/3 | The BigQuery scheduled query runs against fixtures and returns the wrong-school share; export table receives daily rows | K | external, with fixtures | Query result | AN-14, REQ-072 | V-042 |
| TC-052 | W-05/4, W-10/4 | The dashboard shows the four KPIs and the funnel by school | K | external | Screenshot | D-010 | V-025 |
| TC-053 | W-09/1 | Editing an attested statement anywhere makes `truth.py check` fail; restoring it passes | S | auto | Script output | D-027 | V-004 |
| TC-054 | W-09/2, W-09/4 | After the sync step, each site's tokens, fonts and partials are byte-identical to `design-system/` | S | auto | Diff | REQ-052 | V-032 |
| TC-055 | W-09/3 | Nari's acceptance is recorded on the pull request before merge | M | procedure | PR comment | CON-05 | V-019 |
| TC-056 | W-10/2 | An event fired on the preview appears in the development stream's DebugView, not in production | K | external | Screenshot | AN-15 | V-025 |
| TC-057 | W-10/5 | The monthly snapshot appends to `10` with the date and the change log has a row for every configuration change since the last snapshot | S, K | auto for the run, manual for the log | File diff | AN-18 | V-028 |
| TC-058 | W-11/1 | Every URL in the gt.school inventory has a row in the redirect map | S | auto | Script diff | DEL-009 | V-038 |
| TC-059 | W-11/2 | Every mapped old URL returns exactly one 301 to its final URL; no chains; final URLs return 200 with a self canonical | S | auto against staging | Script output | REQ-071 | V-038 |
| TC-060 | W-11/3 | Every launch checklist item has evidence and a signature | M | procedure | Checklist | DEL-020 | V-038 |
| TC-061 | W-11/4 | Daily for 30 days: brand-query position, crawl errors, organic sessions by host recorded | K | external | Monitoring log | REQ-071 | V-038 |
| TC-062 | W-12/1 | A golden-set question returns an answer with a citation to a site URL | K | auto in the evaluation harness | Harness report | CB-03 | V-045 |
| TC-063 | W-12/2 | Each adversarial item returns a refusal template and a hand-off link; no personal data stored | K | auto in the harness | Harness report | CB-04 | V-045 |
| TC-064 | W-12/3 | Overall correctness at least 95 percent; fabricated facts zero | K | auto in the harness | Harness report | CB-05, REQ-037 | V-045 |
| TC-065 | W-12/4 | The unanswered log produces FAQ entries weekly | M | procedure | Log and FAQ diff | CB-06 | V-035 |
| TC-072 | Invariant, W-07/1 | Every live profile link and ad URL in the UTM builder sheet uses only the enumerated `utm_source` and `utm_medium` values and the campaign pattern from `06` section 8 | S | auto against the sheet export | Script output | AN-08 | V-025 |
| TC-073 | W-02/3, W-05/1 | The five-parent test includes at least one Texas family that could commute to Georgetown and is TEFA-eligible for Anywhere, and the helper's question is scored for whether it elicits feasibility rather than preference (R3, DD-24) | M | manual, in the T-022 protocol | Test record | REQ-012, DD-24 | V-012 |
| TC-070 | All mocks | Every mock passes TC-003 to TC-006, TC-009, TC-011, TC-013, TC-022 to TC-024, TC-044 to TC-046 before E2 | S, E, X | auto | Suite run per mock | REQ-019 | V-046 |
| TC-071 | Phase 0 | The defect-list terms (Science Olympiad, afternoon program PDF, XP-gating, pirate ship, the fabricated workshop) appear on no page of either site | S | auto | Text search | REQ-001 | V-047 |

## 4. Runs and gates

| Run | Layers | Trigger | Must pass for |
|---|---|---|---|
| Pre-commit | S | Every commit, through the git hook | Any commit |
| Pull request | S, E, A, X | Every PR, in CI against the harness and the preview | Merge to `v2` |
| Nightly | P plus the full E suite at three viewports | Scheduled | Trend; a regression opens a task |
| Mock gate | TC-070 | Before E2 | G1 |
| Launch gate | Everything plus TC-030, TC-031, TC-058 to TC-060 | Before DNS | Go-live |
| Post-launch | TC-039, TC-057, TC-061 | Daily for 30 days, then monthly | Ongoing |

## 5. The runner and the repository layout (D-028)

| Element | Specification |
|---|---|
| Runner | Playwright Test (TypeScript) in `tests/`, with its own `package.json` so the sites stay dependency-free; installed only after D-028 is approved, because it adds a dependency |
| Layout | `tests/e2e/W-01.spec.ts` … one file per workflow; `tests/analytics/` for interception helpers; `tests/static/` wrapping the checkers; `tests/fixtures/` for content files, consent states and BigQuery fixtures |
| Generation | `1_spec/tools/build-tests.py` reads the catalogue above and writes skeletons under `1_spec/tests/` (one describe block per workflow, one test per TC with the assertion as its title and a TODO body). Regenerated when the catalogue changes; hand-written bodies live in `tests/` and are never overwritten |
| Analytics interception | Tests intercept requests to `google-analytics.com/g/collect`, `analytics.google.com`, `facebook.com/tr`, `analytics.tiktok.com`, `t.co` and `px.ads.linkedin.com`; assertions read query and body parameters; nothing is sent onward |
| Consent simulation | Region and consent state set through the container's test hooks or a cookie fixture; both states exercised in TC-036 |
| Reduced motion and JavaScript-off | Playwright `reducedMotion: 'reduce'` and `javaScriptEnabled: false` contexts |
| Devices | Real iPhone and Android for TC-030 and TC-031 (D-029); emulation for everything else |
| CI | GitHub Actions on pull requests, running the harness server and Playwright; Lighthouse CI nightly |

## 6. Tasks

| ID | Task | Phase | Owner model | Serves | Acceptance | Evidence | Ceiling |
|---|---|---|---|---|---|---|---|
| T-160 | Approve and install the runner (D-028): `tests/package.json`, Playwright, a first passing smoke test against the harness | S0 | Johnny approves; builder installs | D-028 | `npx playwright test` runs one green test | Command output | 60 min |
| T-161 | `1_spec/tools/build-tests.py` generating skeletons from section 3 | S0 | Builder, Sonnet 5 | REQ-020 | One skeleton per workflow with one test per TC | Generated files | 60 min |
| T-162 | Static layer wrapper: one command runs the seven checkers plus HTML structure, no-form and no-external-script checks | S0 | Builder, Sonnet 5 | REQ-022, MD-01 | Exit 0 on the current tree | Output | 60 min |
| T-163 | Analytics interception helper and consent fixtures (TC-001, TC-007, TC-036, TC-037) | S5 | Builder, Sonnet 5 | REQ-020, REQ-023 | Helpers used by the W-01 and W-07 specs | Spec files | 60 min |
| T-164 | W-01 to W-04 E2E specs implemented against the winning mock | S5 | Builders, Sonnet 5 | REQ-010 to REQ-018 | Green on the preview | CI run | 60 min per workflow |
| T-165 | W-06 to W-08 specs (TEFA, in-app browser manual template, crawler and structured data) | S5 | Builders, Sonnet 5 | MD-26, REQ-024, SE-05 | Green plus manual evidence template filled once | CI run and `1_spec/runs/` | 60 min per workflow |
| T-166 | Accessibility and reduced-motion checks in every E2E spec (axe, keyboard, reduced motion) | S5 | Builder, Sonnet 5 | REQ-074 | Zero violations | CI run | 60 min |
| T-167 | Lighthouse CI nightly with budgets from `1_spec/03` section 9 | S5 | Builder, Sonnet 5 | REQ-073 | Nightly report | Report | 60 min |
| T-168 | Redirect test script over the map (TC-058, TC-059) | S6 | Builder, Sonnet 5 | REQ-071 | Zero chains on staging | Output | 60 min |
| T-169 | External-system checks documented as procedures with evidence templates (TC-039 to TC-042, TC-051, TC-052, TC-056) | S5 | Fable | AN-07, AN-14 | Each has a template and a first run | `1_spec/runs/` | 60 min |
| T-170 | Mock gate run (TC-070) against all five mocks before E2 | S4 | Watchdog, Haiku 4.5 | REQ-019 | Report per mock | `1_spec/runs/T-170.md` | 60 min |
| T-171 | Phase 0 regression (TC-071) against both live sites monthly | S0 onward | Watchdog, Haiku 4.5 | REQ-001 | Zero hits | Output | 30 min |

## 14. Mock visual QA layer (added 2026-09-11, runs with D-028)

Source: `0_plan/17-design-studio-runbook.md` section 4. Implemented as Playwright Test specs under `tests/mocks/` once D-028 is approved; until then the same measurements run through the shared browser one size at a time.

| Test | Viewports | Pass condition | Evidence |
|---|---|---|---|
| Fold fit | All 16 in the matrix | Header, umbrella sentence, provenance line and both first-screen door CTAs fully inside the viewport with no scroll | Viewport screenshot per size, JSON of bounding boxes |
| No horizontal overflow | All | `document.documentElement.scrollWidth` equals the viewport width | JSON |
| No overlap | All | No two text-bearing elements' bounding boxes intersect unless one contains the other | List of intersecting pairs, empty |
| No clipped text | All | No text node's scroll size exceeds its box in either axis | List, empty |
| Target size | All | Every link and button at least 44 by 44 CSS pixels | List of offenders, empty |
| Text contrast | All | Every text node against its effective background at or above 4.5:1, or 3:1 for text 24px and larger or 19px bold | Per-node computed table |
| Focus visibility | 390 and 1440 | Every focusable element shows a focus indicator with 3:1 against its surroundings when tabbed | Tab-order screenshots |
| Heading structure | All | Exactly one h1; heading levels do not skip | JSON |
| Images | All | After a stepped scroll (four steps, 600 ms apart) every image is complete with a natural width above zero; every image has alt | List, empty |
| Console | All | Zero errors and zero warnings | Console capture |
| Reduced motion | 390 and 1440 with `reduce` emulated | No computed transition duration or animation on any element | JSON |
| Links | Once | Every href resolves to an allowed host or an in-page anchor that exists | List |
| Video | 390 by 844 and 1440 by 900 | A recorded scroll from top to bottom at reading speed, for the critic and for Nari | `.webm` per mock and size |

