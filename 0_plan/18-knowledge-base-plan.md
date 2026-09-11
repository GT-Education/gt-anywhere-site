# 18 Knowledge base plan: research the studio builds from

| Field | Value |
|---|---|
| Purpose | The research swarm that gives the design studio (`17-design-studio-runbook.md`) a foundation: web design philosophy and craft, digital design systems, motion, imagery, accessibility, performance, digital marketing and advertising, and the existing GT and Alpha branding, each written up with sources and "how it applies to GT" |
| Output | `0_plan/kb/<cluster>.md`, one file per cluster below, plus `0_plan/kb/INDEX.md` and `0_plan/kb/EXEMPLARS.md` (the reference pages with screenshots in `0_plan/kb/exemplars/`) |
| Rules | Every claim carries a source with a URL and date; no live GT or Alpha page is loaded in a browser (text fetch only); screenshots of third-party sites are for internal reference and are not reused in mocks; findings that change a register row go through the ensemble, never straight into `07`. Operational note 2026-09-11: the session's web-search budget (200 searches) was exhausted during wave three, so later agents reach sources by canonical URL; the Opus session limit interrupted one agent, which was relaunched on Sonnet |
| Owner | Fable synthesizes; Sonnet agents retrieve; Astra checks for unsourced claims (E4) |
| Status | Proposed 2026-09-11 |

## 1. Clusters, questions and sources

| # | Cluster | Questions the file answers | Sources to consult | Feeds |
|---|---|---|---|---|
| K1 | Web design philosophy and composition | What makes a page read as designed: grid systems, rhythm, hierarchy, measure, whitespace, Gestalt grouping, Swiss and editorial traditions, the "first screen as thesis" idea; how the best institutional sites compose | Müller-Brockmann on grids; Bringhurst on typography; Nielsen Norman Group on visual hierarchy and F-patterns; Refactoring UI; Frank Chimero's "The Shape of Design"; Rauno Freiberg's and Emil Kowalski's craft essays; A List Apart | Design Director brief, rubric rows Composition and Craft |
| K2 | Typography on the web | Pairing display and text faces; fluid type scales (Utopia); measure and leading; Literata and Inter Tight in the wild; variable fonts; performance of self-hosted fonts (woff2 subsetting, preload, `font-display`) | Utopia.fyi; Google Fonts knowledge; Bringhurst; web.dev font guidance; Literata specimen (Type Together) | Tokens, `04` section 2, rubric row Typography |
| K3 | Color, surface and accessibility | Building a palette from two existing brands; contrast at AA and AAA including small text and focus rings; dark surfaces used well; the accessibility of tints as cues | WCAG 2.2 (1.4.3, 1.4.11, 2.4.11, 2.5.8); APCA as a second opinion; Material color roles; Stripe and Linear palette essays | Tokens departures, rubric row Color, QA contrast tests |
| K4 | Motion in elite and educational sites | Where restrained motion serves orientation and choice; durations and easings actually used by MIT, Stanford, Harvard admissions, Lakeside, Nueva, Harker, Exeter, Dalton; what reads as promotional; reduced-motion practice | Site inspection by text and computed styles; Material motion; Apple Human Interface Guidelines motion; IBM Carbon motion; Val Head's "Designing Interface Animation" | D-031 and section 7 of `17`, rubric row Motion |
| K5 | Exemplars: elite K-12 and university admissions pages | Twelve reference first screens with what each does well and badly at 390 and 1440: composition, imagery, copy density, proof presentation, application paths | Lakeside, Nueva, Harker, Phillips Exeter, Dalton, Trinity, Horace Mann, MIT Admissions, Stanford Admissions, Caltech, Olin, Minerva; plus three non-education pages known for craft (for calibration) | `kb/EXEMPLARS.md`, the Design Director brief |
| K6 | Landing page conversion and message match | Anatomy of high-converting landing pages; above-the-fold research; routing pages (two doors) done well; message match from ad to page; social proof without unverifiable claims; CTA copy and placement | Nielsen Norman Group; Baymard; CXL; Unbounce and Instapage research; Google's landing page experience guidance; the existing `research/R3` | Rubric row Objective, `1_spec/03` sections 1 to 3 |
| K7 | Brand architecture and positioning | Umbrella and sub-brand systems (masterbrand, endorsed, house of brands) and how schools with campuses and an online arm present themselves; positioning frameworks; how selectivity is signalled without wealth cues | Aaker on brand architecture; April Dunford, "Obviously Awesome"; Byron Sharp; case studies: Success Academy, KIPP, Stanford Online High School, Minerva, Alpha School's own site | `15` positioning brief, DD-27, MD-17, MD-25 |
| K8 | Digital marketing and advertising | How paid social creative hands off to a landing page; in-app browser constraints on Instagram, Facebook and TikTok; UTM and attribution across three hosts; Meta and TikTok landing requirements; page speed and ad quality; remarketing audiences and consent | Meta Business Help; TikTok for Business; Google Analytics 4 documentation; the existing `10` and `1_spec/06`, `1_spec/08` | AD rows, AN rows, rubric row Objective |
| K9 | Imagery and photography direction | How schools photograph learning honestly; crops that survive 390 and 1920; consent practice; typographic alternatives when photographs are weak; treating photographs with duotone or scrims without hiding them | Exemplar sites; Unsplash and Death to Stock style guides as anti-patterns; NN/g on image credibility; the existing `mockups/shared/ASSETS.md` | Rubric row Imagery, DD-08, DD-31, the escalated home-learning photo |
| K10 | Responsive and fluid layout | Container queries; fluid space and type; `100svh` and mobile browser chrome; in-app webview heights; the viewport matrix in `17` section 4; testing practice | web.dev responsive guidance; Utopia; Andy Bell and Heydon Pickering, "Every Layout"; Playwright viewport emulation docs | QA matrix, tokens for fluid scales |
| K11 | Performance and Core Web Vitals | LCP under 2.0 s on a mid-range phone; image formats and sizes; font loading; zero CLS; what a dependency-free static page can achieve | web.dev; Lighthouse; HTTP Archive Web Almanac (education and fonts chapters) | REQ-073, T-059, T-065 |
| K12 | Existing GT and Alpha branding | Everything already extracted: `research/R1` tokens, both logos, gt.school and Anywhere page inventories (`R4`), Alpha School's brand presentation, the founder and staff voice on both sites, the photographs available | Repo research, live text fetches, Holly (Q-001) | Rubric row Continuity, `04` |
| K13 | Design systems and shells | How a shared header, footer and switcher are built so two sites inherit them; component vocabularies from Carbon, Polaris, USWDS and GOV.UK; documentation patterns | The named systems' public docs; `1_spec/04` | M5 direction, DEL-004 |
| K14 | Copy and voice for institutions | Institutional and warm; sentence length; how elite schools write admissions copy; avoiding hype; plain words first | Exemplar sites; GOV.UK content design; the positioning brief | `copy.md`, DD-16, DD-30 |

## 2. File format for every cluster

| Section | Content |
|---|---|
| Question | The questions above, restated |
| Findings | Numbered findings, each with a source (URL, author, date) and a quotation or measured value where one exists |
| Principles | Five to ten principles the studio adopts, each traceable to a finding |
| Anti-patterns | What the exemplars and research warn against, with examples |
| How it applies to GT | Concrete implications for the landing: what to do in the brief, in the tokens, in the rubric, in the QA |
| Open questions | What could not be sourced; treated as judgment, never as evidence |

## 3. Exemplar capture protocol

| Step | Rule |
|---|---|
| Fetch | Text fetch of the page for copy density and structure; computed-style probe for type sizes, durations and easings (no GT or Alpha page in a browser; third-party pages may be opened by the runner headless) |
| Capture | Screenshots at 390 by 844 and 1440 by 900 into `0_plan/kb/exemplars/<site>-<size>.png`, internal reference only |
| Record | One row per exemplar in `EXEMPLARS.md`: site, page, what it does well, what it does badly, the one move worth borrowing, the moves to avoid |
| Use | The Design Director brief cites exemplars by name; the critic keeps them beside the mock screenshots |

## 4. Swarm plan

| Wave | Agents | Clusters | Ceiling |
|---|---|---|---|
| 1 | 4 retrieval agents plus 1 watchdog | K1, K2, K3, K5 | 60 minutes each, one report each |
| 2 | 4 plus 1 | K4, K6, K7, K8 | 60 minutes each |
| 3 | 4 plus 1 | K9, K10, K11, K13 | 60 minutes each |
| 4 | 2 plus Fable | K12, K14; Fable writes `INDEX.md`, the Design Director brief template and the rubric calibration from the exemplars | 90 minutes |
| Check | Astra E4 | Every cluster: unsourced claims, stale sources, contradictions with the register | 1 pass, 1 re-run |

## 5. What the knowledge base changes downstream

| Artifact | Change |
|---|---|
| `17` section 5 brief | Written from K1 to K14, with exemplars named |
| `17` section 6 rubric | Calibrated: what a 5 looks like, with an exemplar per row |
| `tokens.css` | Fluid type and space scales (K2, K10); accent-as-text rule (K3) |
| `07` register | Any row the research contradicts goes back through the ensemble (MN rows for motion, DD-08 and DD-31 for imagery) |
| `1_spec/13` and the runner | The viewport matrix and the contrast, overlap and clipping tests (K3, K10) |
