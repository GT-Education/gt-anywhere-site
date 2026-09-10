# R4 Content and proof

| Field | Value |
|---|---|
| Purpose | Job A: full gt.school inventory (T-030, DEL-002). Job B: claims and content inventory for both sites (feeds `12-claims-register.md`, DD-07, MD-16, REQ-022) |
| Method | curl only, no JavaScript execution, no browser. gt.school: breadth-first, same-origin, 80-page cap. Anywhere: the 8 mirrored pages plus `404.html` already in this repo, read directly, no fetch |
| Crawl artifacts | `/private/tmp/claude-501/-Users-johnny-projects-gt-school-gt-anywhere-site-v2/2c0ba2d8-19b3-47cb-b0f2-fe4033a61edd/scratchpad/r4/pages/*.html` (raw gt.school HTML), `.../r4/manifest.json` (per-page crawl data), `.../r4/gt_text/*.txt` and `.../r4/mirror_text/*.txt` (stripped visible text used for quoting) |
| Date | 2026-09-10 |
| Rule followed | Every value below is a quoted sentence with its URL or file. No paraphrase stands in for a number |

## 1. Crawl summary and full gt.school page inventory (Job A)

`https://gt.school/` 301-redirects to `https://www.gt.school/`; both hostnames are treated as one origin. `robots.txt` returned `200` with a 0-byte body (no crawl restrictions). `sitemap.xml` does not exist (resolves to the site's custom "Not Found" page). Breadth-first traversal from the homepage exhausted its own frontier at 12 URLs attempted — it did not hit the 80-page cap. 11 pages are real HTML; the 12th is a broken link discovered during the crawl.

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

All 11 live pages carry the same sitewide banner: *"We are actively enrolling, offering an all-inclusive revolutionary educational experience. A limited number of $10,000 scholarships are available for founding families—apply now to secure your spot!"* and the same footer cross-promotion for the virtual school: *"Our Accredited K-8 Virtual School brings 3X learning velocity to your home. We provide the full GT academic crucible - AI adaptive blocks and a global tribe of peers - accessible anywhere and eligible for ESA funding."* (all 11 pages).

Two additional Webflow-placeholder findings, confirmed in raw HTML, not an extraction artifact:
- `/academics` and `/` both render the literal Webflow default text **"This is some text inside of a div block."** (1 occurrence on `/`, 2 on `/academics`).
- `/contact`'s "Nature of your inquiry" dropdown has unedited option labels: `<option>First choice</option><option>Second choice</option><option>Third choice</option>`.
- `/` shows an empty CMS collection ("Key Dates" slider) rendering Webflow's own empty state: `<div class="w-dyn-empty"><div>No items found.</div></div>`.

## 2. Cross-links found in both directions

| Direction | Finding | Evidence |
|---|---|---|
| gt.school → anywhere.gt.school | **Present on every one of the 11 live pages.** Each page carries 4 links to `https://anywhere.gt.school/` (`target="_blank"`): two "GT Anywhere" nav-link elements (desktop header + mobile menu), one footer "split-cta_right" element, plus the shared footer promo block linking through "Learn more" | `grep -o -E '<a [^>]*href="[^"]*anywhere\.gt\.school[^"]*"[^>]*>' pages/home.html` returned 4 matches; identical pattern confirmed on `/academics`, `/contact`, `/calendar` |
| gt.school → apply.gt.school | **None found.** No link on any crawled page points to `apply.gt.school` | Crawl manifest, all 11 pages: `outbound_apply: []` |
| anywhere.gt.school (mirror) → gt.school root | **None found**, on any of the 8 mirrored pages or `404.html` | `mirror_manifest.json`: `links_to_gt_school_root: []` on `home`, `academics`, `advisors`, `intensives`, `academic-calendar`, `privacy-policy`, `terms-of-use`, `refund-policy`, `404` |
| anywhere.gt.school (mirror) → apply.gt.school | Present on every mirrored page (e.g. `https://apply.gt.school/#/dashboard`; the homepage also links `#/community-map`) | `mirror_manifest.json`, `links_to_apply` field, all 9 files |

**Correction to the record:** `0_plan/00-context.md` §"Current estate" and `1_spec/02-sitemaps-and-ia.md` §1 both diagram `GT -. no links either way .- AW` ("no links either way"). That is only half true as of this crawl: the Anywhere→gt.school direction is genuinely absent, but **gt.school already links out to anywhere.gt.school on every page**, prominently (top nav, mobile menu, and a footer cross-sell module with its own claim copy). This affects MD-07, SE-05, SE-08 and the redirect/IA plan (§3-4 of `1_spec/02`): the umbrella build is not starting from zero cross-linking, and the existing gt.school→Anywhere link is a live, uncontrolled surface already carrying the "3X"/"Accredited" claims audited below.

## 3. Claims inventory (Job B)

### 3a. Speed/velocity multiplier claims

| Claim as stated | Source | Value | Conflicts with |
|---|---|---|---|
| "Delivering 3x faster learning, 1400+ SATs by 8th grade" | `index.html` (Anywhere), visible hero copy | 3x | Row below (4x, same site, structured data) and 3-7x row |
| "Accredited K-8 virtual academy for exceptional students delivering **4x** faster learning, 1400+ SATs by 8th grade" | `index.html` (Anywhere), `<script type="application/ld+json">` — the structured data search engines and AI assistants read | 4x | Row above (3x, same site, visible copy) |
| "(1) Adaptive platform proven to deliver 4X learning velocity." | `index.html` (Anywhere), "why choose us" list | 4x | Same-page 3x rows |
| "3-7x faster learning" | `index.html` (Anywhere), stat tile | 3-7x | Same-page 3x and 4x rows |
| "Our revolutionary model delivers 3x learning tailored to each student, not the average" | `index.html` (Anywhere) | 3x | Same-page 4x and 3-7x rows |
| "3x Accelerated Mastery" | `index.html` (Anywhere), stat label | 3x | Same-page 4x and 3-7x rows |
| "Growth Factor target (3X for grades 3+, 2X for grades K-2)" | `refund-policy/index.html` (Anywhere) — the contractual refund/guarantee terms | 3X (grades 3+), 2X (K-2) | The same site's 4x and 3-7x marketing claims promise more than this contractual guarantee |
| "3X learning velocity" | `https://www.gt.school/` and 8 other gt.school pages, identical wording each time | 3X | None internally on gt.school; conflicts with Anywhere's 4x/3-7x rows above |
| "3.5X MAP growth velocity" / "3.2X" / "3.0X" | `https://www.gt.school/academics`, three individual student-spotlight examples | 3.0–3.5X | None (individual examples, consistent with the 3X headline) |
| "3 hours of work" / "7 hours of progress" (paired visual stat) | `https://www.gt.school/academics` | 3 vs. 7 (not phrased as a multiplier) | Plausible source of Anywhere's "3-7x" row above (see note) |

**Note on the conflicts column:** gt.school is internally consistent at 3X (9+ mentions, 6 pages, plus three individual-student figures clustering at 3.0–3.5X). Anywhere's own site carries three different multipliers for what is presented as the same claim — 3x (body copy, most places), 4x (structured data and one bullet), 3-7x (one stat tile) — plus a fourth, more conservative, legally-binding figure in its own refund policy (3X grades 3+, 2X K-2). The "3 hours of work / 7 hours of progress" pairing on gt.school's academics page is a plausible mechanical source for "3-7x": two adjacent numbers in a visual, not a range.

### 3b. Percentile / percent claims

| Claim as stated | Source | Value | Conflicts with |
|---|---|---|---|
| "GT Anywhere is designed for students in the **90th+ percentile** who are intellectually hungry" | `academics/index.html` (Anywhere) — **only found on this page**, not on the Anywhere homepage or advisors page | 90th+ percentile | Not stated elsewhere on Anywhere for cross-check; gt.school never states a specific admissions percentile |
| "Top 1-2% nationally" | `index.html` (Anywhere), stat tile / meta description | top 1-2% | gt.school's "top 1% by eighth grade" row below (different site, close but not identical framing) |
| "Our students' national test averages run from the **94th percentile** in Reading to the **98th** in Math and Science" | `https://www.gt.school/academics` | 94th–98th percentile | Same-site "91%"/"top 10%"/"top 1%" rows below use different framings for what reads as the same overall claim |
| "Our students outperform **91%** of students nationally" | `https://www.gt.school/` (appears twice) | 91% | "top 10%" row below (same page) is a looser restatement; "top 1%" row (blog) is a full order of magnitude tighter |
| "More than half of our students' test results land in the **top 10%** nationally" | `https://www.gt.school/` | top 10% | "91%" row above (same page); "top 1%" row below (same site, blog post) |
| "Our students' Science scores average in the **98th percentile** nationally" | `https://www.gt.school/programs` | 98th percentile (Science) | Row below (same page, same subject, different frame: 80% in top 25%) |
| "Four in five score in the **top 25%** nationally in Science" | `https://www.gt.school/programs` | 80% in top 25% | Row above (98th percentile, same page, same subject) |
| "This year, **73%** of our students have mastered a subject at least three grade levels above their age" | `https://www.gt.school/academics` | 73% | None found |
| "**86%** have mastered two or more subjects at least two grade levels above their age grade" | `https://www.gt.school/academics` | 86% | None found |
| "...ensure that our classes are in the nation's **top 1%** by eighth grade" | `https://www.gt.school/resources/gt-school-a-new-option-for-gifted-kids-in-texas` (blog post) | top 1% | Same site's homepage rows above ("91%"/"top 10%") — an order-of-magnitude spread for what reads as the same claim |
| "At the end of every term, **100%** of our students say they love being at GT School!" | same blog post | 100% (satisfaction, not academic) | None (different claim category) |

### 3c. SAT claims

| Claim as stated | Source | Conflicts with |
|---|---|---|
| "1400+ SATs by 8th grade" | `index.html` (Anywhere), both visible copy and structured data — consistent within Anywhere | Row below (gt.school blog, 1350+) |
| "1400+ SAT. AP 5s. 3X learning velocity." / "1400+ SAT by 8th grade" | `https://www.gt.school/` (twice), `https://www.gt.school/academics` | Row below (same site, blog post, 1350+) |
| "score **1350+** on their SAT tests by eighth grade" | `https://www.gt.school/resources/gt-school-a-new-option-for-gifted-kids-in-texas` (blog post) | Rows above — both sites otherwise say 1400+, both "by eighth grade" |

### 3d. Tuition statements, per school

| School | Statement | Source | Conflicts with |
|---|---|---|---|
| Anywhere | "**$10,400/year** — GT Anywhere annual tuition, **fully or partially** covered by TEFA" | `index.html`, stat tile (hedged framing) | Rows below (same site: "fully covers," a conditioned "$0 ... if," and unconditional "fully covered") |
| Anywhere | "Yes. The **$10,474** TEFA voucher **fully covers** the $10,400 GT Anywhere tuition." | `academics/index.html`, FAQ (unconditional framing) | Row above (hedged "fully or partially"); row below (conditioned) |
| Anywhere | "Yes. The GT Anywhere tuition is $10,400/year. The TEFA voucher is $10,474, which results in a net family cost of $0 **if you have a child who is already outpacing their class**." | `advisors/index.html`, FAQ (conditioned framing — the condition does not logically gate funding coverage) | Both rows above (neither hedges on the child's academic standing) |
| Anywhere | "Yes! GT Anywhere tuition is **fully covered** by TEFA funds." | `index.html`, a second FAQ (unconditional again) | Same-site hedged and conditioned rows above |
| Georgetown (gt.school) | No tuition dollar figure found anywhere in the 11 crawled pages. Only: "A limited number of **$10,000 scholarships** are available for founding families—apply now to secure your spot!" (sitewide banner) and a "**Texas TEFA / ESA Eligible**" badge with no attached dollar figure | `https://www.gt.school/` (banner, all 11 pages); `https://www.gt.school/calendar` (badge) | Not a like-for-like comparison with any Anywhere row above — no stated relationship between the $10,000 figure and a base tuition price |

**Note on the conflicts column:** the $10,400/$10,474 figures themselves are stable everywhere they appear on Anywhere. The *coverage language* is not: "fully or partially" vs. "fully covers" vs. a conditioned "$0 ... if" vs. unconditional "fully covered" are four different promises on the same site. Georgetown's own site does not disclose a base tuition figure at all — it markets a $10,000 scholarship instead, with no stated relationship to a list price.

### 3e. TEFA statements and dates

| Statement | Source | Conflicts with |
|---|---|---|
| "TEFA (Texas Education Freedom Account) is a new state program providing eligible Texas families **up to $10,400 per year** for private education expenses. Funds can be used for tuition, curriculum, technology, tutoring, and more. **The program launches in 2026 with $1 billion in funding.**" | `index.html` (Anywhere), FAQ | None found (the only statement of program-level timing/cap) |
| "If your enrollment is funded in whole or in part by a Texas Education Freedom Account (TEFA) or other Education Savings Account (ESA), any refunds of public funds will be returned directly to the applicable program administrator in accordance with state law." | `terms-of-use/index.html` (Anywhere) — an existing disclaimer usable as a starting point for Q-021 | None |
| "Texas TEFA / ESA Eligible" (badge, no figure attached) | `https://www.gt.school/calendar` | Does not restate the $10,400/$1B figures found on Anywhere — no way to confirm consistency |
| "financial payment details (including TEFA/ESA account information where applicable)" | `https://www.gt.school/privacy-policy` | None |
| "5.12.2026" and "5.28.2026" — the two dated blog posts (context, not TEFA-specific) | `https://www.gt.school/resources` | None |

### 3f. Admissions steps and criteria, as stated

| School | As stated | Source | Conflicts with |
|---|---|---|---|
| Georgetown | "GT School is designed for students in the top academic percentiles. **Start an assessment** to see whether we are the right fit for your family." then "apply for admission" (CTA) | `https://www.gt.school/` | No specific percentile stated here, vs. Anywhere's stated "90th+ percentile" (row below) |
| Georgetown | "We are actively enrolling for the 2026-2027 school year... **Book a time slot below, and we will reach out to confirm your tour.**" | `https://www.gt.school/contact` (and repeated on 8 other pages) | None; the process is tour-first, unlike Anywhere's application-first pattern below |
| Georgetown | Booking mechanism is a Calendly link, not the broken `/book-a-tour` nav target: `calendly.com/crystal-cybulski-2hourlearning/gt-school-campus-tour-1` | `https://www.gt.school/contact` | The header/nav "Book a Tour" button links to `/book-a-tour`, which 404s (see §1, row 12) — the stated and actual booking paths disagree |
| Anywhere | No explicit numbered step list ("Interest/Apply/Enroll/Tuition") found in the 8 mirrored pages; the CTA is "Begin Application" throughout, plus a lead form asking Zip Code and Household Income bracket (Under $65,000 / $65,000–$160,000 / Over $160,000 / Prefer not to say) | `advisors/index.html`, `intensives/index.html` | Application-first, vs. Georgetown's tour-first pattern above |
| Anywhere | "GT Anywhere is designed for students in the 90th+ percentile who are intellectually hungry" (the only stated admissions criterion found) | `academics/index.html` | Georgetown's own site never states a specific percentile (row above) |

Neither site states an application fee anywhere in the pages crawled. **`apply.gt.school` itself was not fetched in this pass** (Job A was scoped to gt.school only); Q-007 (identical steps/fees/timing) cannot be closed from gt.school and the mirror alone.

### 3g. Intensives logistics, as stated (Anywhere only — gt.school has no intensives concept)

| Detail | As stated | Source | Conflicts with |
|---|---|---|---|
| Location | "Located just north of Austin"; "in Georgetown, Texas" | `intensives/index.html` | None |
| Dates (2026–2027) | "Saturday, Oct 31 & Sunday, Nov 1, 2026" / "Saturday, Jan 23 & Sunday, Jan 24, 2027" / "Saturday, March 27 & Sunday, March 28, 2027" / "Saturday, June 5 & Sunday, June 6, 2027" | `intensives/index.html` | None |
| Duration | "48 hours of competition-level teamwork" | `intensives/index.html` | None |
| Cohort feeding it | "12–15 student cohort" (daily, converging quarterly in person) | `intensives/index.html`, `academics/index.html` | The advisors page states an "8-12" cohort for the Weekly Homeroom (§3k / CR-025) — a different range for what may be the same cohort concept |
| Recommendation | "We recommend all families attend at least one Intensive per year to fully integrate into the physical tribe." | `intensives/index.html` | None |
| Cost / who pays travel | **Not stated anywhere in the crawled pages.** | — | N/A — absence, not a conflicting value |

### 3h. What follows 8th grade

No explicit statement of a post-8th-grade pathway was found on any of the 11 gt.school pages or 8 Anywhere mirror pages read this session. The closest adjacent language:
- "AP 5s in at least two subjects **before high school**" — `https://www.gt.school/academics`
- "there are hundreds of thousands of gifted students whose schools cannot keep up with them" (mission framing, not a pathway) — `https://www.gt.school/about-us`

This is a fresh, independent confirmation (not a re-statement of the existing doc) that the pathway question is unanswered across every page reachable by normal navigation on both sites as of 2026-09-10.

### 3i. Accreditation statements

| Statement | Status implied | Source | Conflicts with |
|---|---|---|---|
| "Yes. We are **fully accredited** by Cognia and TEFA-eligible." | Fully accredited (visible FAQ answer) | `index.html`, `academics/index.html` (Anywhere) | Row below on the **same page**: "is a Candidate for Accreditation" |
| "GT School - Virtual **is a Candidate for Accreditation** with Cognia and its accreditation divisions, the North Central Association Commission on Accreditation and School Improvement (NCA CASI), the Northwest Accreditation Commission (NWAC), and the Southern Association of Colleges and Schools Council on Accreditation and School Improvement (SACS CASI)." | Candidate, not yet accredited (visible fine print, directly below the FAQ) | `index.html`, `academics/index.html`, `intensives/index.html`, `advisors/index.html` (Anywhere, all four) | Row above (same pages: "fully accredited"); row below (structured data: unqualified "Accredited") |
| "Accredited K-8 virtual academy for exceptional students delivering 4x faster learning..." | Accredited, unqualified | `index.html` (Anywhere) `<script type="application/ld+json">` structured data | Both rows above, on the same page |
| "Our **Accredited** K-8 Virtual School brings 3X learning velocity to your home... eligible for ESA funding." | Accredited, unqualified | Sitewide footer block, `https://www.gt.school/` and all 10 other gt.school pages | Restates Anywhere's unqualified structured-data framing, not its own "Candidate for Accreditation" fine print — gt.school visitors only ever see the unqualified version |
| Cognia logo image, `alt=""` (no accessible text) | Implied, no textual claim | `https://www.gt.school/`, `/academics`, `/about-us` (footer) | No text to compare, but no accessible text either (a11y gap) |

**This is the single most consequential finding in this inventory.** The same site (Anywhere) states three different accreditation statuses in three different formats on the same page: "fully accredited" (an FAQ answer a parent reads), "Candidate for Accreditation" (fine print immediately below it), and unqualified "Accredited" (the structured data search engines and AI assistants ingest, plus what gt.school's own footer now broadcasts to Georgetown-site visitors). Unlike the speed multipliers, accreditation status is a checkable, third-party fact, not a marketing framing choice.

### 3j. Contact details shown, and where

| Detail | Where | Value | Conflicts with |
|---|---|---|---|
| Admissions email | Every gt.school page, two link variants | `admissions@gt.school?subject=Admissions%20inquiry` and `admissions@gt.school?subject=Tour%20Inquiry` | None — same address, two subject lines by CTA context |
| Footer phone (click-to-call) | Every gt.school page footer, `href="tel:(512)270-9481"` | (512) 270-9481 | Row below — a second, different number on the same page |
| Contact-page hero phone (plain text, not a link) | `https://www.gt.school/contact` only | (512) 240-2346 | Row above (same page, footer number) |
| Same number, structured data | `index.html` (Anywhere) JSON-LD `"telephone": "(512) 240-2346"`, with a Georgetown, TX postal address attached to an org named "GT Anywhere" | 240-2346 | gt.school's own footer number (270-9481) — a virtual, nationwide school's structured data and a physical campus's footer disagree on which number is "the" GT phone number |
| Street address (consistent everywhere it appears) | gt.school footer and contact hero | 2351 Westinghouse Rd, Georgetown, TX 78626 | None — consistent |
| Booking handle | `/contact` | `calendly.com/crystal-cybulski-2hourlearning/...` | None |
| Legal entity | gt.school `/terms-of-use`, `/privacy-policy`, and Anywhere's own `terms-of-use/index.html`, `privacy-policy/index.html` (all four, same string) | "GT School, Inc." | None — consistent, good evidence for SE-08 |

**Note on the conflicts column:** two different phone numbers are live at once — 270-9481 (gt.school's sitewide footer, click-to-call) and 240-2346 (gt.school's own `/contact` hero text, and independently the phone Anywhere's structured data publishes for a Georgetown, TX address under the name "GT Anywhere"). The legal-entity name is, by contrast, already consistent across both sites' legal pages — "GT School, Inc." — which is good evidence for SE-08, not a conflict.

### 3k. Wording used for adults, with counts

| Site | Term | Raw count (all crawled/mirrored pages, combined) | On the homepage alone | How it's used | Conflicts with |
|---|---|---|---|---|---|
| gt.school | "guide(s)" | 47 | 2 | The operative term. Section header "Meet our Expert Guides"; titles "Chess Program Director," "Guide for Middle School," "Guide, Grades 3–5," "Lead Guide," "Debate Program Director" | Anywhere's "Academic Advisor" row below — same style of role, different word, for at least two of the same named individuals |
| gt.school | "advisor(s)" | 23 | 0 | Appears only inside the shared Terms of Use legal text, which is literally GT Anywhere's ToS ("Academic Advisors are responsible for weekly 1:1 check-ins...") reused on the gt.school domain — never in Georgetown marketing copy | gt.school's own "guide" row above — the word only surfaces on gt.school because a legal document written for Anywhere is hosted there |
| gt.school | "teacher(s)" | 7 | 0 | Only in founder bios describing their own past careers ("started as a classroom teacher," "started as a special education teacher"), and one rhetorical line ("Think of that one teacher who changed your life...") — never GT's current title for staff | None — not used as a current title on either site |
| gt.school | "coach(es)" | 10 | 0 | Loose usage ("academic coaching," "head coach of our Mathletes program"), not a formal title | None |
| gt.school | "mentor(s)" | 1 | 0 | "combining expert, on-campus mentorship" | None |
| Anywhere | "Academic Advisor(s)" / "Advisor" | pervasive; page titled "Our Academic Advisors" | — | The operative term throughout `advisors/index.html` | gt.school's "guide" row above |

**Confirmed, not inferred:** at least two staff bios are word-for-word identical across both sites under different titles. "Anjelina is a Woman International Grandmaster (WGM), three-time US Women's Chess Champion, and former Leader of the US Olympic Chess Team." appears verbatim on `https://www.gt.school/academics` (titled "Chess Program Director," under "Meet our Expert Guides") and on `advisors/index.html` (Anywhere, titled Advisor). Same for Norberto: "Norberto is a nationally recognized performance coach, three-time state debate champion, and creator of the P.O.W.E.R. framework..." appears verbatim on both, titled "Debate Program Director" (gt.school) and Advisor (Anywhere). The other three named guides (Chazz Roper, Grant Cain, Josh Goldstein) were not checked name-by-name against the Anywhere advisors page in this pass — flagged in §7.

## 4. Draft rows for the claims register (`0_plan/12-claims-register.md`)

| CR-nnn | Claim as stated | Where (URL or file) | Value | Conflicts with | Status (unverified) | Owner to verify |
|---|---|---|---|---|---|---|
| CR-001 | "Yes. We are fully accredited by Cognia and TEFA-eligible." | `index.html`, `academics/index.html` (Anywhere) | Fully accredited | CR-002, CR-003 | Unverified | Nari |
| CR-002 | "GT School - Virtual is a Candidate for Accreditation with Cognia..." | `index.html`, `academics/index.html`, `intensives/index.html`, `advisors/index.html` (Anywhere) | Candidate, not yet accredited | CR-001, CR-003 | Unverified | Nari |
| CR-003 | "Accredited K-8 virtual academy for exceptional students delivering 4x faster learning..." (JSON-LD) and "Our Accredited K-8 Virtual School..." (gt.school footer) | `index.html` (Anywhere, structured data); all 11 gt.school pages | Accredited, unqualified | CR-001, CR-002 | Unverified | Nari |
| CR-004 | "Delivering 3x faster learning" | `index.html` (Anywhere) | 3x | CR-005, CR-006, CR-007 | Unverified | Nari |
| CR-005 | "delivering 4x faster learning" (structured data) / "Adaptive platform proven to deliver 4X learning velocity" | `index.html` (Anywhere) | 4x | CR-004, CR-006, CR-007 | Unverified | Nari |
| CR-006 | "3-7x faster learning" | `index.html` (Anywhere), stat tile | 3-7x | CR-004, CR-005, CR-007 | Unverified | Nari |
| CR-007 | "Growth Factor target (3X for grades 3+, 2X for grades K-2)" | `refund-policy/index.html` (Anywhere) | 3X / 2X, contractual | CR-004, CR-005, CR-006 | Unverified | Nari |
| CR-008 | "3X learning velocity" | `https://www.gt.school/` (and 8 other pages) | 3X | None internally; conflicts with CR-005/CR-006 across sites | Unverified | Nari |
| CR-009 | "1400+ SATs by 8th grade" | `index.html` (Anywhere); `https://www.gt.school/`, `/academics` | 1400+ | CR-010 | Unverified | Nari |
| CR-010 | "score 1350+ on their SAT tests by eighth grade" | `https://www.gt.school/resources/gt-school-a-new-option-for-gifted-kids-in-texas` | 1350+ | CR-009 | Unverified | Nari |
| CR-011 | "designed for students in the 90th+ percentile" | `academics/index.html` (Anywhere) | 90th+ percentile | None found elsewhere; gap vs. CR-014/CR-016 framing | Unverified | Crystal |
| CR-012 | "Top 1-2% nationally" | `index.html` (Anywhere) | Top 1-2% | CR-016 | Unverified | Nari |
| CR-013 | "94th percentile in Reading to the 98th in Math and Science" | `https://www.gt.school/academics` | 94th–98th percentile | CR-014, CR-015 (different framing) | Unverified | Nari |
| CR-014 | "Our students outperform 91% of students nationally" | `https://www.gt.school/` (x2) | 91% | CR-015, CR-016 | Unverified | Nari |
| CR-015 | "More than half of our students' test results land in the top 10% nationally" | `https://www.gt.school/` | Top 10% | CR-014, CR-016 | Unverified | Nari |
| CR-016 | "our classes are in the nation's top 1% by eighth grade" | `https://www.gt.school/resources/gt-school-a-new-option-for-gifted-kids-in-texas` | Top 1% | CR-012, CR-014, CR-015 | Unverified | Nari |
| CR-017 | "73% of our students have mastered a subject at least three grade levels above their age" | `https://www.gt.school/academics` | 73% | None | Unverified | Nari |
| CR-018 | "86% have mastered two or more subjects at least two grade levels above their age grade" | `https://www.gt.school/academics` | 86% | None | Unverified | Nari |
| CR-019 | "Our students' Science scores average in the 98th percentile nationally" | `https://www.gt.school/programs` | 98th percentile (Science) | CR-020 (same subject, different frame) | Unverified | Nari |
| CR-020 | "Four in five score in the top 25% nationally in Science" | `https://www.gt.school/programs` | 80% in top 25% | CR-019 | Unverified | Nari |
| CR-021 | "$10,400/year — GT Anywhere annual tuition, fully or partially covered by TEFA" | `index.html` (Anywhere) | $10,400/yr, hedged coverage | CR-022, CR-023, CR-024 | Unverified | Nari |
| CR-022 | "The $10,474 TEFA voucher fully covers the $10,400 GT Anywhere tuition." | `academics/index.html` (Anywhere) | $10,474 fully covers $10,400 | CR-021, CR-023 | Unverified | Nari |
| CR-023 | "...net family cost of $0 if you have a child who is already outpacing their class." | `advisors/index.html` (Anywhere) | $0, conditioned | CR-021, CR-022 | Unverified | Nari |
| CR-024 | "A limited number of $10,000 scholarships are available for founding families" | `https://www.gt.school/` (all 11 pages) | $10,000 scholarship | CR-021–CR-023 (no stated relationship to a list price) | Unverified | Nari |
| CR-025 | "curated cohort... of 8-12 fellow intellectuals" | `advisors/index.html` (Anywhere) | 8-12 students | CR-026 | Unverified | Nari |
| CR-026 | "12–15 student cohort" | `intensives/index.html`, `academics/index.html` (Anywhere) | 12-15 students | CR-025 | Unverified | Nari |
| CR-027 | "Our first nine students proved the model." | `https://www.gt.school/about-us` | 9 (founding cohort) | None (historical, not current) | Unverified | Nari |
| CR-028 | "GT Anywhere launched in 2026... attracted hundreds of students in its first months" | `https://www.gt.school/about-us` | 2026 launch; "hundreds" of students | None | Unverified | Nari |
| CR-029 | "The program launches in 2026 with $1 billion in funding." (TEFA, statewide) | `index.html` (Anywhere) | $1B statewide, 2026 | None | Unverified | Nari |
| CR-030 | "50% Monthly Tuition Credit... if [MAP] Growth Factor... is less than [target]... and... completed at least 80% of assigned Essential Skills" | `refund-policy/index.html` (Anywhere) | 50% credit; 80% completion threshold | None; relates to CR-004–CR-007 | Unverified | Nari |
| CR-031 | "TimeBack · 140 XP / Day" | `https://www.gt.school/calendar`, hero badge | 140 XP/day | None found elsewhere to compare | Unverified | Nari |

## 5. Decisions affected

| ID | Current Fable position | Confirm or change | Why (this crawl's evidence) |
|---|---|---|---|
| DD-06 | Comparison block: attribute table, shared rows first, then format/place/day/intensives/advisors/admissions/tuition/access | **Confirm structure; add two content requirements.** | Tuition row still blocked (Georgetown states no figure at all, only a $10,000 scholarship — confirmed by direct crawl, not "unknown"). The "advisors" row needs explicit handling: the same people are titled "Guide" (gt.school) and "Academic Advisor" (Anywhere) — verbatim-identical bios for at least Anjelina and Norberto (§3k) — so a naive side-by-side table would read as two different staffing models when it is one |
| DD-07 | At most one verified figure, footnoted, after Q-019 | **Confirm, and raise urgency.** | The inventory found far more conflicting figures than the docs assumed: not three speed claims but three-plus-a-contractual-figure, plus a three-way accreditation-status conflict (§3i) that is a compliance question, not a marketing-consistency one. Recommend the accreditation status specifically be resolved before any figure ships, not only the speed multiplier |
| DD-17 | Cognia mark, admissions email, phone below the fold | **Confirm restraint; add a hold.** | Do not surface the Cognia mark on any new surface until Nari/counsel picks one of the three accreditation statements in §3i — gt.school's own footer is already broadcasting the unqualified "Accredited" version today, which conflicts with Anywhere's own "Candidate for Accreditation" fine print |
| MD-05 | At most: accreditation mark, one verified figure, one verified parent quote | **Confirm, and flag a provenance question.** | The five testimonials on gt.school's homepage (Chloe, Rosie, Shepard, Kai, Silas) are each attributed "2 Hour Learning Student," not "GT School Student" — verify whether these are GT School's own students or borrowed from the wider Alpha network before reuse |
| MD-13 | State price/access the same way for both once Q-011 is answered; until then show Anywhere's and mark Georgetown's "see campus site" | **Confirm, and sharpen the fallback wording.** | Confirmed by direct crawl that Georgetown's own site does not have a hidden number to point to — "see campus site" should not imply a disclosed price exists; Georgetown's own framing today is a $10,000 scholarship, not a tuition figure |
| MD-16 | One claims register, footnotes on the page, ad copy draws from the same register | **Confirm strongly, no change.** | This inventory alone surfaced roughly 30 distinct claim rows across ~10 conflict clusters (§3a-3k) — larger in scope than the "three speed multipliers" the docs describe. The register is not a hypothetical safeguard; live drift is happening right now, including inside machine-readable structured data (CR-003, CR-005) |
| MD-26 | Fable: Texas-only, time-bound TEFA module with owner+expiry. Astra: foundation for everyone, optional Texas promo. Verdict: Differ | **Nuance toward Astra, with a new fact.** | gt.school independently runs its own undated, urgency-styled claim ("A limited number of $10,000 scholarships... apply now") with no visible expiry, on every page — the same evergreen-content risk DD-28/MD-26 flags for Anywhere's "Summer 2026" callout exists on Georgetown's site too, unprompted. Recommend the owner+expiry requirement apply to both sites' promotional modules, not only the one already known |
| SE-05 | Landing: two subOrganizations; each school site: EducationalOrganization with parentOrganization; descriptions from the claims register | **Confirm, and treat as urgent, not future-only.** | Anywhere's *current, live* structured data already diverges from its own visible copy: JSON-LD says "4x faster learning" and unqualified "Accredited" while the page text says "3x" and "Candidate for Accreditation" a few lines below (§3i). This is the exact drift SE-05 exists to prevent, and it needs a fix to the existing Anywhere markup, not only new markup for the school sites |
| SE-08 | One facts block, identical fields across every surface, in structured data and on a `/facts` page (Fable) vs. distinct records per entity, share only what's actually shared (Astra). Verdict: Differ | **Astra's caution is now evidence-backed; add one new problem.** | Legal-entity-name consistency is already solved and confirmed ("GT School, Inc." verbatim on both sites' legal pages, §3j) — Astra was right that forcing identical tuition/address would misrepresent, since Georgetown genuinely differs from Anywhere on price. But a real, newly found problem for SE-08 to own: Anywhere's structured data currently attaches a single Georgetown, TX street address and the phone number (512) 240-2346 to an organization named "GT Anywhere," which is presented everywhere else as a *virtual, nationwide* school — and that phone number does not match the (512) 270-9481 gt.school itself displays sitewide |

## 6. Facts that answer or sharpen open questions

| ID | Question | What this crawl found | Still open |
|---|---|---|---|
| Q-007 | Is the application process identical for both schools (steps, fees, timing)? | Georgetown's entry point, as stated on its own site, is tour-first: "Book a time slot below, and we will reach out to confirm your tour" (`https://www.gt.school/contact`), booked via Calendly, with a generic inquiry form (no fee stated). Anywhere's entry point is application-first: "Begin Application" everywhere, with a lead form asking Zip Code and Household Income bracket (`advisors/index.html`). No fee is stated on either site | Yes — `apply.gt.school` was not fetched in this pass (Job A scoped gt.school only); whether the two funnels converge on identical steps/fees/timing downstream is unconfirmed |
| Q-008 | Which differences must appear in the comparison block? | Schedule: Georgetown runs five dated in-person sessions (Aug 12–Jun 4) plus daily 9am–noon TimeBack blocks; Anywhere runs "3 hours," plus 4 dated quarterly Georgetown weekend intensives. Price: Georgetown discloses no figure (only a $10,000 scholarship banner); Anywhere discloses $10,400/$10,474. Guides/Advisors: confirmed same people, different titles (§3k). Accreditation: three conflicting statements live on Anywhere today (§3i) | Georgetown's admissions evidence/criteria (beyond "start an assessment") remains unstated — feeds Q-012 |
| Q-011 | What is Georgetown tuition, and does TEFA apply? | Georgetown discloses **no** tuition dollar figure on any of its 11 pages. It states "A limited number of $10,000 scholarships are available for founding families" (sitewide banner) and a "Texas TEFA / ESA Eligible" badge (`/calendar`) with no dollar figure attached | Base tuition price and whether $10,000 is a discount off a list price, a flat price, or something else — genuinely unstated by the source, not a research gap |
| Q-013 | What follows 8th grade? | No page on either site (11 gt.school pages, 8 Anywhere mirror pages) states a post-8th-grade pathway. Closest adjacent line: "AP 5s in at least two subjects before high school" (`https://www.gt.school/academics`) | Fully open; independently reconfirmed as of this crawl |
| Q-017 | Intensives logistics: where, when, cost, who pays travel | Where and when are now fully sourced: Georgetown, TX, four named 2026-2027 weekends (`intensives/index.html`), each 48 hours, fed by a "12–15 student cohort" | Cost and who pays travel are not stated anywhere in the crawled pages — the gap narrows to exactly these two sub-questions |
| Q-019 | Which speed claim is correct: 3x, 4x, or 3-7x? | New evidence favors 3X: it's the only figure gt.school (the presumed Georgetown pilot source) uses, appearing 9+ times across 6 pages plus three individual student examples (3.0–3.5X), and it matches Anywhere's own contractual refund-policy guarantee ("Growth Factor target... 3X for grades 3+"). "4x" appears only in structured data plus one bullet; "3-7x" appears only once and may derive from gt.school's separate "3 hours of work / 7 hours of progress" visual (two numbers, not a range) | This is evidence pointing toward 3X, not a resolution — Nari still owns the final call |
| Q-021 | TEFA: program timing, eligibility rules, disclaimers | "The program launches in 2026 with $1 billion in funding" and "up to $10,400 per year" (`index.html`, Anywhere FAQ). An existing usable disclaimer already exists: "any refunds of public funds will be returned directly to the applicable program administrator in accordance with state law" (`terms-of-use/index.html`) | No specific application-window date or per-family cap beyond the figures above was found |

## 7. What I could not determine

| Item | Why not determined | What would resolve it |
|---|---|---|
| Whether the application process is identical for both schools (fees, timing, steps) | `apply.gt.school` was not crawled — Job A's scope, as given, was gt.school only | Fetch `apply.gt.school`'s public pages (curl only) as a fast follow |
| Whether Chazz Roper, Grant Cain and Josh Goldstein (gt.school "Guides") are the same individuals as any three named Advisors on `advisors/index.html` | Only Anjelina and Norberto were checked name-by-name; the Anywhere advisors page has more bios than were pulled in this pass | A direct name-by-name diff of `advisors/index.html` against the five gt.school guide bios |
| Whether HubSpot's forms-embed script (`js.hsforms.net`) fires any tracking beacon at runtime, beyond loading the form SDK | Confirming a runtime network call requires executing JavaScript in a browser, which the no-JS/no-browser rule for this crawl forbids | A browser-based network trace (out of scope for this task; would need explicit sign-off given the rule this task was told to keep) |
| Whether gt.school has pages not reachable by following links (e.g., an orphaned admissions or tuition page) | No `sitemap.xml` exists and `robots.txt` is empty; BFS from the homepage is the only discovery method this task allowed, and it exhausted its own frontier at 12 URLs well under the 80-page cap | A Search Console backlink/indexed-URL export (already planned under T-036) would surface anything BFS can't reach |
| Whether the `/resources` blog index has more than the 2 articles discoverable by crawling | The index page (`https://www.gt.school/resources`) is short (454 words) and may use a "load more" pattern that requires JavaScript | Re-check after T-036's Search Console export, or a manual click-through |
| Whether $10,000 (Georgetown) is a discount off a stated list price, a flat program price, or an unrelated scholarship fund | The source text itself never connects the $10,000 figure to a base tuition number | Ask Nari directly (feeds Q-011) |
| An expiry date for gt.school's "$10,000 scholarships... apply now" banner | Not present in the HTML on any of the 11 pages | Ask Nari; treat as evergreen-but-undated until confirmed otherwise |
