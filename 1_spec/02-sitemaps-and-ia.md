# 02 Sitemaps and information architecture

| Field | Value |
|---|---|
| Purpose | What pages exist, what pages will exist, what every URL does at the root change, and the shared shell that gives both schools recognition value |
| Sources | `0_plan/04-architecture.md`, `0_plan/00-context.md` (estate), `0_plan/10` (landing pages by traffic), `0_plan/11` (redirect plan), mirrored pages (titles, nav) |
| Decisions applied | D-001, D-003, D-005, DD-11, DD-12, DD-13, DD-21, DD-27, DD-32, MD-07, MD-11, MD-19, AN-06, SE-01, SE-02, SE-06, SE-08, SE-12, SE-13 |
| Requirements covered | REQ-017, REQ-030, REQ-031, REQ-032, REQ-033, REQ-035, REQ-040, REQ-046, REQ-071 |
| Version | 0.1, 2026-09-10 |

## 1. Current estate

```mermaid
flowchart LR
  GT[gt.school<br/>Georgetown, Webflow, untagged<br/>pages: unknown, T-030] 
  AW[anywhere.gt.school<br/>Webflow, mirrored here]
  AW --> H[/]
  AW --> AC[/academics]
  AW --> AD[/advisors]
  AW --> IN[/intensives]
  AW --> CAL[/academic-calendar]
  AW --> LEG[/privacy-policy, /terms-of-use, /refund-policy]
  AW -.modal.-> APP[apply.gt.school<br/>#/dashboard, #/community-map]
  COM[community.gt.school] 
  SUM[summer.gt.school]
  INTAPP[gt-intensives.vercel.app]
  GT -->|4 links per page| AW
  AW -. never links back .- GT
```

| Anywhere page | 28-day landing sessions | Keep URL | Notes |
|---|---|---|---|
| `/` | 3,697 | Yes | Becomes the Anywhere home under the umbrella |
| `/academic-calendar` | 491 | Yes, verbatim | Second organic door; never moves without a 301 (SE-02) |
| `/intensives` | 234 | Yes | |
| `/advisors` | 86 | Yes | |
| `/academics` | 73 | Yes | |
| Legal pages | low | Yes | Shared wording across both schools |
| Begin Application modal | n/a | Replaced by the Admissions page plus the application link with `school=anywhere` | The modal form and its live webhook are not reproduced in v2 (MD-01) |

Georgetown's pages, from the R4 crawl of 2026-09-10 (curl only, no JavaScript; `gt.school` redirects to `www.gt.school`; `robots.txt` empty; no `sitemap.xml`; no analytics or pixel scripts; a HubSpot forms embed and a Calendly widget present). The header CTA `/book-a-tour` returns 404 on every page, and `/` and `/academics` carry unedited Webflow placeholder text (REQ-002, REQ-003). Full detail in `0_plan/research/R4-content-and-proof.md` section 1.

| # | URL | Title | H1 | Meta description | Word count | Outbound to anywhere/apply | Inbound from mirror | Analytics/pixel hosts | Notes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `https://www.gt.school/` | GT School \| Gifted Education for K-8 Students in Texas | "School Reimagined. For gifted kids who love to learn" | Present: "Accelerated learning for gifted kids. 3X learning velocity, 1400+ SAT by 8th grade, mastery-based academics. Georgetown, TX campus now enrolling K-8." | 1,527 | anywhere.gt.school (yes, 4 links); apply.gt.school (none) | None (confirmed, see §2) | HubSpot forms embed (`js.hsforms.net`) only. No GA4/gtag, no GTM container, no Meta pixel, no TikTok pixel, no DoubleClick found in any of the 11 pages | Also loads a Calendly widget (`assets.calendly.com`) |
| 2 | `/academics` | Academics \| GT School Georgetown, TX | "High-focus learning. Real time back." | Present: "Mastery-based learning with 3X velocity. Expert guides, AI-calibrated practice, and real acceleration..." | 1,845 | anywhere.gt.school (yes) | None | HubSpot forms embed | Carries a live, unedited Webflow rich-text placeholder block ("This is some text inside of a div block.", "Heading 1"–"Heading 6", "Lorem ipsum dolor sit amet...") after the staff bios — a style-guide fragment shipped to production |
| 3 | `/programs` | Accelerated Learning for Gifted Kids \| Georgetown, TX K-8 | "Afternoon Workshops: Where students build, publish, and compete" | Present (same text as row 1) | 972 | anywhere.gt.school (yes) | None | HubSpot forms embed | |
| 4 | `/calendar` | 2026-2027 Academic Calendar \| GT School Georgetown, TX | "Calendar" | Present: "View GT School's 2026-2027 academic calendar. Five sessions, MAP testing dates, and key dates..." | 1,077 | anywhere.gt.school (yes) | None | HubSpot forms embed | |
| 5 | `/resources` | News & Insights \| GT School Resources for Gifted Learners | "News & Insights" | Present | 454 | anywhere.gt.school (yes) | None | HubSpot forms embed | Only 2 article links discoverable by crawling; a "load more" pattern, if any, needs JS this crawl did not run |
| 6 | `/about-us` | About GT School \| The MIT of K-8 for Gifted Learners | "The school gifted kids have been waiting for" | Present: "GT School is building the MIT of K–8 for gifted students who finish early and ask for more. 3X learning velocity..." | 1,889 | anywhere.gt.school (yes) | None | HubSpot forms embed | Linked from the crawl as `/about-us#story`; fragment normalized away |
| 7 | `/contact` | Contact GT School \| Georgetown, TX Campus Admissions | "Get in touch" | Present | 449 | anywhere.gt.school (yes) | None | HubSpot forms embed | Embeds Calendly booking link `calendly.com/crystal-cybulski-2hourlearning/gt-school-campus-tour-1`; carries two different phone numbers (see §3) |
| 8 | `/resources/a-day-in-the-life-of-a-gt-school-student` | A Day in the Life of a GT School Student \| GT School | same as title | Present | 1,301 | anywhere.gt.school (yes) | None | HubSpot forms embed | Blog post, dated 5.12.2026 on the resources index |
| 9 | `/resources/gt-school-a-new-option-for-gifted-kids-in-texas` | GT School: A New Option for Gifted Kids in Texas \| GT School | same as title | Present | 1,581 | anywhere.gt.school (yes) | None | HubSpot forms embed | Blog post, dated 5.28.2026 on the resources index; carries the "top 1%"/"1350+ SAT" figures that conflict with the rest of the site (§3) |
| 10 | `/privacy-policy` | Privacy Policy \| GT School Georgetown, TX | none (no `<h1>` on this page) | Present but wrong: identical to `/calendar`'s description ("View GT School's 2026-2027 academic calendar...") | 3,801 | anywhere.gt.school (yes) | None | HubSpot forms embed | Meta-description bug: this page describes the calendar, not the privacy policy |
| 11 | `/terms-of-use` | Terms of Use \| GT School Legal Agreement & User Rights | none | Present, page-specific and correct | 6,864 | anywhere.gt.school (yes) | None | HubSpot forms embed | Legal entity named: "GT School, Inc." |
| 12 | `/book-a-tour` | — | — | — | — | — | — | — | **404.** Linked from the header/mobile-nav "Book a Tour" button on every page (confirmed href target); the page does not exist. The real booking path is the Calendly widget embedded on `/contact` |

Cross-links found (R4 section 2): gt.school links to anywhere.gt.school on every page; the Anywhere pages never link back.

| Direction | Finding | Evidence |
|---|---|---|
| gt.school → anywhere.gt.school | **Present on every one of the 11 live pages.** Each page carries 4 links to `https://anywhere.gt.school/` (`target="_blank"`): two "GT Anywhere" nav-link elements (desktop header + mobile menu), one footer "split-cta_right" element, plus the shared footer promo block linking through "Learn more" | `grep -o -E '<a [^>]*href="[^"]*anywhere\.gt\.school[^"]*"[^>]*>' pages/home.html` returned 4 matches; identical pattern confirmed on `/academics`, `/contact`, `/calendar` |
| gt.school → apply.gt.school | **None found.** No link on any crawled page points to `apply.gt.school` | Crawl manifest, all 11 pages: `outbound_apply: []` |
| anywhere.gt.school (mirror) → gt.school root | **None found**, on any of the 8 mirrored pages or `404.html` | the crawl manifest saved in the scratchpad (see `0_plan/research/R4-content-and-proof.md` section 1): `links_to_gt_school_root: []` on `home`, `academics`, `advisors`, `intensives`, `academic-calendar`, `privacy-policy`, `terms-of-use`, `refund-policy`, `404` |
| anywhere.gt.school (mirror) → apply.gt.school | Present on every mirrored page (e.g. `https://apply.gt.school/#/dashboard`; the homepage also links `#/community-map`) | the crawl manifest saved in the scratchpad (see `0_plan/research/R4-content-and-proof.md` section 1), `links_to_apply` field, all 9 files |

## 2. Target sitemap

```mermaid
flowchart TB
  ROOT[gt.school<br/>umbrella landing, 03]
  ROOT --> GEO[georgetown.gt.school<br/>D-001 a]
  ROOT --> ANY[anywhere.gt.school]
  ROOT --> FACTS[/facts, SE-08]
  ROOT --> COMM[community.gt.school, J4]
  subgraph Shared menu, REQ-031
    M1[Home] --- M2[Academics] --- M3[Advisors] --- M4[Campus life or Intensives] --- M5[Admissions]
  end
  GEO --> Shared
  ANY --> Shared
  M5 --> STEPS[Steps] --> TUI[Tuition and access] --> FAQ[FAQ, REQ-036] --> AFTER[After 8th grade, REQ-048]
  ANY --> TEFA[TEFA guide, SE-07]
  ANY --> THESIS[Thesis, REQ-042]
  ANY --> PROOF[Proof, REQ-043]
  GEO --> LOCAL[Local pages, SE-12]
  M5 --> APPLY[apply.gt.school?school=…]
```

| Surface | URL | Menu (REQ-031, five items) | Notes |
|---|---|---|---|
| Umbrella landing | `gt.school/` | Minimal header only (DD-12): lockup, Current families, admissions contact | Anatomy in `03` |
| Facts page | `gt.school/facts` | Footer link | Entity consistency for answer engines (SE-08) |
| Georgetown site | `georgetown.gt.school/` | Home, Academics, Advisors, Campus life, Admissions | Webflow, restyled to the shell (D-005); local pages under Campus life or a `/visit` page (SE-12) |
| Anywhere site | `anywhere.gt.school/` | Home, Academics, Advisors, Intensives, Admissions | Static, from this repo; `/academic-calendar` kept |
| Admissions (each school) | `/admissions` | Under Admissions: steps, tuition and access, FAQ, after 8th grade | The application link carries `school=` |
| FAQ | `/admissions/faq` or `/faq` | | `FAQPage` schema; answer-shaped |
| Thesis | `anywhere.gt.school/why` (working name) | Footer and Home | REQ-042; the X channel destination (AD-02) |
| Proof | `/results` (working name) | Footer and Home | REQ-043; blocked on Q-015 |
| TEFA guide | `anywhere.gt.school/tefa` | Admissions and the TEFA module | SE-07 |
| Current families | `community.gt.school` | Header utility link on every surface | Q-002 confirms |
| Legal | `/privacy-policy`, `/terms-of-use`, `/refund-policy` | Footer | Shared |

The fourth menu item differs by school on purpose (Campus life versus Intensives): same position, same page type, per-school content (REQ-030, REQ-033).

## 3. URL and redirect map (SE-02, DEL-009)

Filled by T-032 after T-030. Rules: every URL with traffic or backlinks gets a 301; no chains; canonicals point at the final URL; `/academic-calendar` keeps its path on Anywhere.

| Old URL | New URL | Type | Reason | Owner | Status |
|---|---|---|---|---|---|
| `gt.school/` (Georgetown home) | `georgetown.gt.school/` if D-001 (a); unchanged if D-001 (b) | 301 or none | The root becomes the umbrella | Johnny; Nari and David decide D-001 | Blocked on D-001 |
| `gt.school/<georgetown pages>` | `georgetown.gt.school/<same path>` | 301 | Preserve paths | Johnny | Blocked on T-030 |
| `anywhere.gt.school/*` | unchanged | none | No moves | | Decided |
| `apply.gt.school/*` | unchanged | none | Separate app | | Decided |

## 4. Navigation and the shared shell

| Element | Specification | Decisions |
|---|---|---|
| Header, landing | Umbrella lockup (left), "Current families" utility link, admissions email or "Talk to an advisor" (right); no menu | DD-11, DD-12, DD-13, MD-11 |
| Header, school sites | Umbrella lockup with the school name beneath it ("Georgetown Campus" or "GT Anywhere"); five menu items; "Begin application" CTA carrying `school=`; "Current families" utility link; a campus switcher to the sibling school | DD-27, REQ-031, REQ-032, MN-14 |
| Mobile navigation | Menu button opens a full-height list; CTA stays visible; switcher inside the list | DD-14, MN-12 |
| Footer, every surface | Facts block (SE-08), sibling-school link, umbrella link, contact (admissions email; phone here, not above the fold), legal links, accreditation mark | DD-17, MD-11, SE-06, P-04 |
| Campus switcher | A control that lists every campus plus the virtual school; renders well with two and with five entries | DD-21 |
| Lockup rule | The umbrella is the parent; the school name is subordinate; Holly's element replaces the placeholder when Q-001 closes | DD-11 |

## 5. Cross-linking rules (P-04, SE-06)

| Rule | Where |
|---|---|
| Every page on either school site links to the umbrella (lockup) and to the sibling school (switcher and footer) | Shell |
| The landing links to both school homes, the facts page, the community hub and the application (with school parameter) | `03` |
| Structured data declares the parent on school sites and the sub-organizations on the landing | `07` section 3 |
| Sitemaps per host, submitted in Search Console; cross-domain measurement across all hosts | SE-02, AN-06 |

## 6. Page inventory (DEL-002, DEL-011 skeleton)

| Page | Site | Exists today | Owner | Content status | Cadence | Claims rows |
|---|---|---|---|---|---|---|
| Home | Anywhere | Yes | Nari | Rewrite for the shell; claims resolved | Quarterly | Q-019 |
| Academics | Anywhere | Yes | Nari | Update photos (REQ-034) | Quarterly | |
| Advisors | Anywhere | Yes | Nari | Verify roster | Each term | |
| Intensives | Anywhere | Yes | Nari | Dates each quarter (Q-017) | Quarterly | |
| Academic calendar | Anywhere | Yes | Nari | Each school year | Yearly | |
| Admissions | Anywhere | No | Nari, Crystal | New (REQ-016, REQ-035) | Each window | Q-007, Q-011, Q-021 |
| FAQ | Anywhere | No | Nari, Crystal | New (REQ-036) | Monthly from unanswered questions | Q-004 |
| Thesis | Anywhere | No | Nari | New (REQ-042) | Yearly | |
| Proof | Anywhere | No | Johnny | New (REQ-043) | Monthly refresh | Q-015 |
| TEFA guide | Anywhere | No | Nari | New (SE-07) | Each program window | Q-021 |
| Georgetown pages | Georgetown | Unknown | Nari | Inventory first (T-030) | | |

## 7. Tasks

| ID | Task | Phase | Owner model | Serves | Acceptance | Evidence | Ceiling |
|---|---|---|---|---|---|---|---|
| T-030 | Crawl gt.school with third-party hosts blocked: every URL, title, H1, word count, inbound links from Anywhere and outbound to Anywhere (DEL-002) | S1 | Builder, Sonnet 5 | REQ-030, REQ-071, SE-02 | Inventory table with every page; zero requests to analytics or pixel hosts during the crawl | `0_plan/research/R4-content-and-proof.md` appendix; `1_spec/runs/T-030.md` | 60 min |
| T-031 | Current and target sitemap documents with the diagrams above updated from T-030 | S1 | Builder, Sonnet 5 | REQ-030, REQ-031 | Every Georgetown page placed in the target sitemap or marked for retirement | Updated sections 1 and 2 | 60 min |
| T-032 | Redirect map (DEL-009) complete for every URL in T-030 with traffic or backlinks; `vercel.json` redirects drafted | S6 prep in S1 | Builder, Sonnet 5 | REQ-071, SE-02, D-001 | No chains; every old URL has a row; Search Console backlink export consulted | `1_spec/runs/T-032.md`; `vercel.json` draft | 60 min |
| T-033 | Unified IA proposal (DEL-010): menu, page types, per-school fourth item, admissions sub-pages, switcher, approved by Nari | S1 | Fable | REQ-030, REQ-031, REQ-033, REQ-035 | Nari approves in writing | `0_plan/14-ia-proposal.md` | 60 min |
| T-034 | Shared shell content spec: header, footer, facts block wording (from the claims register), switcher labels (DD-27) | S3 | Builder, Sonnet 5; Nari approves labels | REQ-032, DD-27, SE-08 | Every string sourced; labels approved | `04` section 5 updated | 60 min |
| T-035 | Page inventory with owners and cadence (DEL-011) completed with Nari | S7 | Fable with Nari | REQ-050, REQ-051, D-004 | Every row has an owner and cadence | Section 6 updated | 60 min |
| T-036 | Search Console properties for gt.school, georgetown and anywhere; sitemaps per host planned; canonical rules written | S5 | Johnny; builder prepares sitemaps | SE-02, REQ-071, AN-16 | Properties verified; sitemaps validate | `1_spec/runs/T-036.md` | 60 min |
