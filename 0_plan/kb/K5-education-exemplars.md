# K5 Exemplars: elite K-12 schools and university admissions pages

| Field | Value |
|---|---|
| Cluster | K5 in `18-knowledge-base-plan.md` section 1 |
| Question | What the best K-12 and admissions first screens actually do: headline structure, CTA count, whether they route, how proof is presented, how selectivity is signalled, copy density, type families, imagery, motion, and how a site with several campuses or an online arm presents that choice. What each does well and badly for a parent choosing a school, and the one move worth borrowing |
| Feeds | `kb/EXEMPLARS.md` (the capture list), the Design Director brief (`17` section 5), rubric calibration for **Mission and exclusivity** and **Continuity** (`17` section 6) |
| Extends | `research/R2-brand-semiotics.md`. R2 read Lakeside, Nueva, Harker, Exeter, Avenues, Davidson, Stanford OHS, MIT and Caltech *as brand semiotics* (what the cues signal). K5 re-reads them **as pages** (measured structure, type, motion, routing) and adds thirteen sites R2 did not touch. Where K5 repeats an R2 observation it is to attach a measurement to it, never to restate it |
| Method | `curl` text fetch of the HTML for all 22 sites, then a markup extractor (word counts, `h1`, `img`/`alt`, links, scripts, platform fingerprints) plus a direct fetch and parse of each site's primary stylesheet for `@font-face`, `font-family`, `transition`, `@keyframes`, `prefers-reduced-motion`, `clamp()`, `@container` and custom-property counts. `WebFetch` was used as a second, independent semantic read of thirteen first screens. **No browser tool was opened. No `gt.school` or `alpha.school` page was fetched**; the GT baseline row comes from the mirror checked into this repo (`index.html`, `assets/.../gt-anywhere.webflow.shared.b79022343.min.css`) |
| Observation vs inference | Every number in tables 2 and 3 is a **measured** value from fetched bytes. Headline and CTA text in table 2 is **quoted** from the fetched markup or from a `WebFetch` read of the same URL on the same day. Table 4's verdicts and every Principle are **inference** |
| Read date | Every source fetched **2026-09-10** |
| Status | Complete. 22 of 22 target third-party sites fetched (S1-S22; one parked-domain URL replaced, see S10n). S23 is a search-only shortlist and S24 is this repo's local GT baseline; neither is counted among the 22 |
| Version | 0.1, 2026-09-10 |

## 1. Sources

All fetched by K5 on 2026-09-10 unless the row says otherwise.

| # | Site | URL | Fetched | Bytes |
|---|---|---|---|---|
| S1 | Lakeside School | [lakesideschool.org](https://www.lakesideschool.org/) | HTML + CSS | 72,402 |
| S2 | The Nueva School | [nuevaschool.org](https://www.nuevaschool.org/) | HTML + CSS | 67,973 |
| S3 | The Harker School | [harker.org](https://www.harker.org/) | HTML + Typekit CSS | 39,863 |
| S4 | Phillips Exeter Academy | [exeter.edu](https://www.exeter.edu/) | HTML + CSS | 103,767 |
| S5 | The Dalton School | [dalton.org](https://www.dalton.org/) | HTML + Typekit CSS | 145,331 |
| S6 | Trinity School (NYC) | [trinityschoolnyc.org](https://www.trinityschoolnyc.org/) | HTML | 126,912 |
| S7 | Horace Mann School | [horacemann.org](https://www.horacemann.org/) | HTML + CSS | 118,984 |
| S8 | Stanford Online High School | [onlinehighschool.stanford.edu](https://onlinehighschool.stanford.edu/) | HTML | 92,444 |
| S9 | Success Academy | [successacademies.org](https://www.successacademies.org/) | HTML + CSS | 256,723 |
| S10 | BASIS Independent Schools | [basisindependent.com](https://basisindependent.com/) | HTML + CSS | 108,117 |
| S10n | *(not the site)* `basisindependentschools.com` | [basisindependentschools.com](https://www.basisindependentschools.com/) | Fetched; **is a parked GoDaddy lander**, 114 bytes, JS-redirects to `/lander`. Replaced by S10 | 114 |
| S11 | BASIS Curriculum Schools (the umbrella) | [basiscurriculumschools.com](https://basiscurriculumschools.com/) | HTML | 37,077 |
| S12 | MIT Admissions | [mitadmissions.org](https://mitadmissions.org/) | HTML + CSS | 193,525 |
| S13 | Stanford Undergraduate Admission | [admission.stanford.edu](https://admission.stanford.edu/) | HTML + CSS | 38,872 |
| S14 | Caltech Undergraduate Admissions | [admissions.caltech.edu](https://www.admissions.caltech.edu/) | HTML + CSS | 235,672 |
| S15 | Olin College of Engineering | [olin.edu](https://www.olin.edu/) | HTML + CSS | 216,779 |
| S16 | Minerva University | [minerva.edu](https://www.minerva.edu/) | HTML + CSS | 176,909 |
| S17 | Nord Anglia Education (umbrella, 90+ schools) | [nordangliaeducation.com](https://www.nordangliaeducation.com/) | HTML + CSS | 151,144 |
| S18 | Avenues: The World School | [avenues.org](https://www.avenues.org/) | HTML + CSS | 65,705 |
| S19 | Sidwell Friends School | [sidwell.edu](https://www.sidwell.edu/) | HTML + CSS | 79,157 |
| S20 | Sora Schools (online) | [soraschools.com](https://soraschools.com/) | HTML. `WebFetch` returned **403**; the `curl` fetch succeeded and is the source | 354,109 |
| S21 | Castilleja School | [castilleja.org](https://www.castilleja.org/) | HTML + CSS | 50,925 |
| S22 | Brentwood School (W3 Silver award, S23) | [bwscampus.com](https://www.bwscampus.com/) | HTML. Its Hoefler `cloud.typography` sheet returns `/* DEACTIVATED */` to an off-origin request, so its type could not be measured | 83,896 |
| S23 | Design-quality shortlist search (WebAward, W3, roundups) | WebSearch, 2026-09-10 | Search-only; used **only** to select S21, S22 for inclusion, never as evidence for a claim | — |
| S24 | GT Anywhere baseline (this repo's mirror, not a live fetch) | `index.html`, `assets/.../gt-anywhere.webflow.shared.b79022343.min.css` | Read from disk | 139,284 |

## 2. Findings — first screen, routing and copy density

Measured 2026-09-10. **Words** is the whole home page body text with `script`/`style`/`svg` stripped (it includes the mega-nav, which on Finalsite and Blackbaud themes is 200 to 300 links of text; the separate **Links** column is the honest read of nav bloat). **HL words** is the first-screen headline only. **Routes?** means the home page itself presents a choice between schools, campuses, divisions or entry paths — not merely a nav menu.

| # | Site | First-screen headline (verbatim) | HL words | First-screen CTAs | Routes? | How it routes | Words | Links |
|---|---|---|---|---|---|---|---|---|
| K5-F1 | Lakeside (S1) | "This is a place for curious minds." | 6 | 0 in the hero; first CTA is "Learn More" one screen down | Yes, unusually | Five verb doors as full-bleed panels: "dig in." / "take in the big picture." / "count on community." / "play a part." / "experiment with something new." — each an `<a>` to a section page | 867 | 219 |
| K5-F2 | Nueva (S2) | *(no hero headline in markup; the first content is)* "Nueva is an independent PreK–12 school where gifted learners discover and develop their passions…" | 22 | 1 ("Learn More") | No | Grade bands appear only inside the "Visit and Apply" submenu ("PreK", "Kindergarten", "Grades 1–4", "Middle School", "Upper School"), and an "IQ Assessment" item under Grades PreK–8 | 1,477 | 230 |
| K5-F3 | Harker (S3) | "Magic happens at Harker." | 4 | 2 ("Play Video", "Visit Us") | No | Lower/Middle/Upper School live in the nav only | 475 | 199 |
| K5-F4 | Exeter (S4) | "Uniting goodness and knowledge since 1781." | 6 | 3 ("Admission application for 2026-27 is open", "Schedule a campus visit", "Take a virtual look around") | No | Single school; the page routes by *topic* instead (Why Exeter / This is Harkness / Applying to Exeter) | 836 | 229 |
| K5-F5 | Dalton (S5) | "Go Forth Unafraid" / sub: "A School that Inspires and Empowers Each Student's Journey" | 3 + 8 | 4 ("Watch the Full Video", "Learn More", "Apply Online", "Inquire Today!") | Yes | An "Explore Our Divisions" section with three image cards: First Program (K–3), Middle School (4–8), High School (9–12) | 1,054 | 239 |
| K5-F6 | Trinity NYC (S6) | "Labore Et Virtute" | 3 (Latin) | 3 ("Give", "Visit", "Apply") | Yes | Three grade-range cards in a carousel: "Kindergarten – Grade 4", "Grades 5-8", "Grades 9-12" | 1,054 | 178 |
| K5-F7 | Horace Mann (S7) | "Our Mission" *(as the literal `h1`)*, then the mission paragraph | 2 | 0; a "Scroll" button and slideshow pause/play | No | Divisions in the nav; "Applying to HM" is one of six equal `h2` panels | 1,613 | 315 |
| K5-F8 | Stanford OHS (S8) | "Stanford Online High School" / sub: "An independent school within Stanford University for intellectually adventurous students in grades 7–12…" | 4 + 25 | 2 ("How to Apply", "Learn More About Admissions") | Partly | Not by school; by **enrollment option** — full-time, part-time and single-course presented as three peer paths | 1,244 | 97 |
| K5-F9 | Success Academy (S9) | "SUCCESS ACADEMY" / sub: "There's Still Time! Apply by September 23rd." | 2 + 6 | 2 ("Apply Now", "See Locations") | **Yes, best in set** | The first `h2` under the hero is the router: "Find a Success Academy Charter School Near You", with five type buttons (K-12 / Elementary / Middle / High / Shared Building) and per-school "Apply Now" or "Learn More" depending on whether that school is open | 1,026 | 82 |
| K5-F10 | BASIS Independent (S10) | "Fearless Thinkers Start Here." / sub: "Where students build the confidence to think independently, embrace challenges, and pursue their highest potential." | 4 + 16 | 2 ("Request Information", "Find a School") | Yes | "Find a School" appears **four times** on the page; grade bands are four cards (Preschool / Elementary / Middle / High) | 467 | 43 |
| K5-F11 | BASIS Curriculum (S11) | "We educate students at the highest international levels and prepare them to be participants, not spectators, in the 21st century global workforce…" | 30 | 5 × "Visit website" | **Yes — the closest structural analog to GT** | The whole page *is* the router: three school types (Public / Private / International), 37 + 7 + 14 schools, each type a block with every school named and linked out to its own site | 527 | 71 |
| K5-F12 | MIT Admissions (S12) | "Welcome to MIT Admissions. Here, you can explore MIT, learn how to apply, plan a visit, read the blogs, get help from our staff, or sign up for our newsletter." | 34 | 4 doors + 6 inline links inside the welcome sentence | Yes | Four doors as equal `h2` sections: **Discover / Apply / Afford / Visit** | 1,847 | 153 |
| K5-F13 | Stanford Admission (S13) | "Explore Boldly. Dream Audaciously." | 4 | 2 ("Discover Stanford", a financial-aid link) | No | — | 438 | 34 |
| K5-F14 | Caltech Admissions (S14) | "Go from *dream* to *do.*" | 5 | 3 doors ("Why Caltech", "Apply", "Afford") | Yes | Three doors, the same shape as MIT minus Visit | 1,230 | 193 |
| K5-F15 | Olin (S15) | "At Olin College of Engineering students do **real engineering** from day one" / sub: "through hands-on, project-based learning, close collaboration with faculty, and an innovative curriculum" | 12 + 15 | A **Request Info form above the fold** ("Olin. Made for you"), then "Start your Future at Olin" | No | — | 5,023 | 279 |
| K5-F16 | Minerva (S16) | "Learn. Belong. Lead." / sub: "A new model of higher education built around how people learn…" | 3 + 19 | 5 ("Applications Now Open", then four "Explore/Discover" links) | No | The four-continent rotation is described in prose; **no city is named** on the home page | 606 | 140 |
| K5-F17 | Nord Anglia (S17) | "Create your Future" / sub: "Life at one of our schools means achieving more than you ever thought possible." | 3 + 12 | 1 feature CTA + "FIND A SCHOOL" | Yes | "FIND A SCHOOL" is the **first interactive element in the document**, above the logo and the menu; routing is by region (Europe / Americas / Asia / Middle East) then day vs boarding | 2,649 | 142 |
| K5-F18 | Avenues (S18) | "Welcome to Avenues" / sub: "We believe that education should be world-focused, future-facing, and above all, transformative for each and every student." | 3 + 19 | 2 ("Explore Avenues New York", "Explore Avenues São Paulo") | Yes | The two-campus choice is repeated in **five places**: top nav "Campuses", the Admissions menu, the "Request info" button, an "Our Campuses" two-card section, and the footer | 1,118 | 62 |
| K5-F19 | Sidwell Friends (S19) | *(no hero headline; the page opens on)* "Latest News" | — | 1 ("Learn More", under Quaker Values) | No | — | 1,274 | 269 |
| K5-F20 | Sora (S20) | "Online Private School for 6th-12th Grade" / sub: "Where students learn through live classes and engaging projects with small class sizes and dedicated advisors" | 6 + 17 | 2 ("Apply now", "Book 15-min intro call") | Partly | Middle School and High School are two peer program sections, not a first-screen choice | 1,132 | 65 |
| K5-F21 | Castilleja (S21) | "What's Possible?" | 2 | 1 ("Learn More") | No | — | 368 | 90 |
| K5-F22 | Brentwood (S22) | *(no hero headline; the first content panel is)* "Many Paths to Explore" | 4 | 0 in the hero | No | Two campuses (West K-5, East 6-12) are in the nav under Admissions, not on the page | 1,634 | 272 |
| K5-F23 | **GT Anywhere today** (S24) | "The MIT of K-8. For students who ask for more academics." | 11 | The first screen is a **six-field lead form** ("Secure Your Candidacy for Fall 2026": first name, last name, email, phone, zip, **household income**) plus "BEGIN APPLICATION" | No | — | 1,365 | 39 |

**K5-F24 — headline length mostly converges; the table has two exceptions the original count missed.** Three sites open with a paragraph rather than a headline: MIT (34 words), BASIS Curriculum (30) and **Nueva (22 — the table itself marks it "no hero headline in markup")**. Sidwell has no first-screen headline at all. Excluding those three and GT (11), the remaining **eighteen** first-screen headlines run **2 to 12 words**, median **4** — seventeen of the eighteen sit at 2 to 6 words, and **Olin's 12-word headline is the exception** (a genuine single-sentence headline, not a paragraph opener). **Ten** of the twenty-two are exactly three or four words (Harker, Dalton, Trinity, Stanford OHS, BASIS Independent, Stanford Admission, Minerva, Nord Anglia, Avenues, Brentwood). The subhead, where it exists, carries 12 to 25 words. GT's 11-word headline is longer than every genuine peer headline in the set except Olin's (K5-F1 to K5-F23).

**K5-F25 — CTA count on the first screen converges on two.** Median **2**, range 0 to 5. Nobody offers more than five, and the three that offer 0 (Lakeside, Horace Mann, Brentwood) are all established day schools with no acquisition problem. Routers in the set hold their first screen to **two** CTAs, but the shape varies: some pair a single act verb with a separate finder (`Apply` + `Find a School`), while Avenues pairs **two co-equal named doors** with no separate act/choose split (`Explore Avenues New York` / `Explore Avenues São Paulo`). GT's two named schools (DD-05: "Explore the Georgetown campus" / "Explore GT Anywhere") take Avenues' shape, not the act/choose split.

**K5-F26 — eleven of twenty-two route on the home page, and the routers are the sites with a real choice problem.** Routers: Lakeside, Dalton, Trinity, Success Academy, BASIS Independent, BASIS Curriculum, MIT, Caltech, Nord Anglia, Avenues, Stanford OHS (by enrollment option). Non-routers: Nueva, Harker, Exeter, Horace Mann, Stanford Admission, Olin, Minerva, Sidwell, Castilleja, Brentwood, Sora. The split is not about quality; it is about whether the visitor has a decision to make before they can act.

**K5-F27 — nobody in the set presents an in-person campus and an online school as peer doors on one page.** BASIS Curriculum routes across *three types of school* (S11); Avenues across *two cities* (S18); Nord Anglia across *regions* (S17); Success Academy across *grade bands and openness* (S9). Stanford OHS and Sora are online-only sites, so the choice never arises. **GT's exact problem has no exemplar in this set** — the nearest is BASIS Curriculum's type-router, and the nearest *repetition discipline* is Avenues'.

**K5-F28 — the umbrella pages are the weakest-built pages in the set.** BASIS Curriculum (S11), the one page whose whole job is routing, is 527 words on an unmaintained Bootstrap 3 theme loading Open Sans over **`http://`** `fonts.googleapis.com`, with 6 images and 1 non-empty `alt`. Nord Anglia (S17) is the best-built umbrella and puts "FIND A SCHOOL" first in the DOM. There is a gap in the market here, and GT's landing page can sit in it.

## 3. Findings — proof, selectivity, type, imagery, motion

Every number measured from the fetched HTML and its primary stylesheet on 2026-09-10. `prm` = `prefers-reduced-motion` declarations. `props` = CSS custom properties. Type families are read from `@font-face` and `font-family` in the fetched CSS, not guessed.

| # | Site | Proof figures on the home page | Sourced? | Selectivity signal | Type families (measured) | Imgs / alt filled | Motion libs | transitions / `@keyframes` / prm | props |
|---|---|---|---|---|---|---|---|---|---|
| K5-F29 | Lakeside | **None** | — | None stated | Calluna, Calluna Sans, Knockout 71, Knockout 31 (H&Co) | 16 / 69% | (Finalsite runtime) | 151 / 3 / **0** | 0 |
| K5-F30 | Nueva | **None** | — | "gifted learners"; an "IQ Assessment" nav item; accreditation named (WASC, CAIS, NAIS) | Manrope, Poppins, Freight Text Pro | 14 / 79% | — | 57 / 1 / **0** | 0 |
| K5-F31 | Harker | **None** | — | None stated; "1893–2026" in the footer | Typekit kit serving **10+ families** (droid-serif, museo-sans, adobe-garamond-pro, museo-sans-rounded, franklin-gothic-urw ×3, futura-pt, museo-sans-condensed, din-2014) | **2 / 50%** | jQuery, Slick, Wistia | — | 0 |
| K5-F32 | Exeter | `$30M`, `12:1`, `245`, `450+` | **Yes — each figure links to the page that substantiates it** | "need-blind"; "We care about your curiosity and your character — not your ability to pay" | Graphik, Lyon Display, Lyon Text | **1 / 0%** (hero is CSS `background-image` ×10 and 4 `<video>`) | jQuery, ScrollMagic, Swiper | 59 / 4 / **0** | 4 |
| K5-F33 | Dalton | `1,330`, `88%`, `28`, `75+`, `50+`, `70+` | No | None stated | Neue Haas Grotesk Display, Neue Haas Grotesk Text, Linotype Sabon, Owners Narrow (Typekit) | 55 / 84% | Blackbaud runtime, FlexSlider | — | 0 |
| K5-F34 | Trinity NYC | `14`, `1,040`, `13:1`, `22`, `30`, `40`, `8` | No | "rigorous academics" | Lora, Open Sans (Google) | 32 / 59% | jQuery, FlexSlider | — | 0 |
| K5-F35 | Horace Mann | `1,800`, `1%` (in news cards, not a stats strip) | No | "competitive" | Proxima Nova, Baskerville URW | 34 / 50% | — | 157 / 2 / **1** | 0 |
| K5-F36 | Stanford OHS | `20` years, `1,092` students, `$2.5M` aid, `55` countries | No | "intellectually adventurous", "academically advanced"; **"Acceptance Criteria" as a named nav item** | (Drupal theme, no `@font-face` in fetched sheets) | 36 / **92%** | jQuery | — | — |
| K5-F37 | Success Academy | `100%` graduates accepted to 4-year colleges 9 years running; `99%` received an offer with full financial need in 2026 | No | Public-lottery school: selectivity is explicitly **not** the story; access is | **Akkurat LL** (single family) | 60 / 40% | GSAP, ScrollMagic, Barba, Slick, jQuery | 21 / 6 / **0** | 2 |
| K5-F38 | BASIS Independent | `99%` AP pass rate 2026; `1514` average SAT out of 1600, Class of 2026; `61%` admitted to a top-25 school | **Partly — the 61% carries a footnote naming U.S. News 2026** | Outcomes as the proxy; no rate, no percentile | Source Sans Pro, Open Sans, Roboto (3 Google families) | 16 / **12%** | jQuery | 22 / 0 / **0** | 16 |
| K5-F39 | BASIS Curriculum | `50+` schools; rankings, AP, PISA/OECD and National Merit named in prose | No | None stated | Open Sans over `http://` | 6 / **17%** | jQuery, Owl Carousel | — | — |
| K5-F40 | MIT Admissions | `7,805` blog posts — and nothing else | n/a | **No acceptance rate, no test score, no selectivity number anywhere**. Confirmed by both the markup scan and an independent `WebFetch` read | Messina Sans, Cooper | 52 / 37% (portraits are **illustrations**, not photographs) | Flickity, jQuery | 55 / 3 / **0** | **118** |
| K5-F41 | Stanford Admission | **None** | — | None stated | (no `@font-face` in the fetched sheet) | 18 / **100%** | jQuery | 6 / 0 / **0** | 0 |
| K5-F42 | Caltech Admissions | `982` undergraduates, `3:1` ratio, `95%` in research, `14%` first-generation | **No — four figures, zero footnotes** | Implied through opportunity ("research with Nobel Prize winners"), never a rate | (no `@font-face` in main sheet) | 30 / 57% | jQuery | 0 / 0 / **0** | 1 |
| K5-F43 | Olin | `378` students, `48%` female, `9:1`, `100%` of the 2024 class did two or more internships, "No. 3 undergraduate engineering program" | **Yes — the ranking names U.S. News** | "Every admitted student receives a merit scholarship" | Barlow, D-DIN (+ condensed, exp) | 40 / **100%** | — | 91 / 3 / **26** (Bootstrap 5 default) | **188** |
| K5-F44 | Minerva | "The #1 Most Innovative University in the World" | **No — no ranking body, no year, no footnote** | Implied via outcomes (Rhodes, Google, BCG); no rate, no criteria | Chronicle Display, Chronicle Deck, Neue Haas Grotesk Display + Text (H&Co) | 13 / **8%** | jQuery, Slick | 150 / 1 / **0** | 113 |
| K5-F45 | Nord Anglia | `48.5%` at 9–7 I/GCSE, `50.4%` at A*–A, `74.8%` at A*–B, `3,380` cohort, `10,000` teachers, `90+` schools, `2,000` to Tanzania | No footnotes, but each figure names its exam and cohort | None; partnerships stand in for it (Juilliard, MIT, UNICEF, IMG Academy) | DM Sans, Montserrat, Lora | 48 / **98%** | Swiper, Mapbox, jQuery | 134 / 8 / **0** | 23 |
| K5-F46 | Avenues | **None** | — | "redefine rigor" as a carousel label; no number | **Halyard Display** (single family) | 35 / **100%** | Swiper | 89 / 13 / **1** | 89 |
| K5-F47 | Sidwell Friends | **None** | — | None stated | Filosofia Lining, Futura PT | 14 / 86% | — | 155 / 1 / **0** | 0 |
| K5-F48 | Sora | `45` states / `18` countries, `100%` remote, `95%` accepted to top 3 college choices, `9:1` | No footnotes, but **each figure carries a one-line plain-English label underneath** | Accreditation substitutes for selectivity: "Fully accredited by Cognia and WASC, approved by the NCAA and Mastery Transcript Consortium" | PP Agrandir, PP Agrandir Text (self-hosted `woff2` ×5) | 51 / 84%, **10 `<video>`** | (none; native video) | — | 17 |
| K5-F49 | Castilleja | **None** | — | "Empowering Young Women Since 1907" | Playfair Display, Overpass, Avenir Next LT Pro, Blacker Pro Display (**4 families**) | 17 / 47% | — | **228** / 8 / **0** | 0 |
| K5-F50 | Brentwood | `107,000` (Coca-Cola applicant pool, in a news card) | Named in the sentence | None stated | Hoefler `cloud.typography` — **not measurable**, the sheet returns `/* DEACTIVATED */` off-origin | 17 / **94%** | — | — | — |
| K5-F51 | **GT Anywhere today** (S24) | `3x` (×4), `7x`, `2%`, `1:1`, `$10,400` | **No footnote on any of them** | "gifted"; markup carries an accreditation claim (Cognia, SACS) — a published claim, not a verified status | **Literata, Inter Tight, Inconsolata** | 71 / **6%** — the worst alt coverage in the set | **GSAP, ScrollTrigger, Lottie, Splide, Velocity, jQuery — six, the most of any site read** | 3 / 1 / **0** | 6 |

**K5-F52 — no site in the set states an acceptance rate.** Zero of twenty-two. This holds across both vocabularies R2 separated: the research institutions (MIT, Caltech, Stanford, Olin, Minerva) and the elite day schools (Lakeside, Nueva, Harker, Exeter, Dalton, Trinity, Horace Mann, Sidwell, Castilleja, Brentwood, Avenues). It extends R2's RC-07 from MIT alone to the whole field.

**K5-F53 — selectivity is signalled three ways instead, never four.** (a) **Who it is for**, in the subhead: "intellectually adventurous… academically advanced" (S8), "gifted learners" (S2), "Fearless Thinkers" (S10), "students who love STEM and are driven not only to ask big questions, but to do the work" (S14, meta description). (b) **Naming the process as a proper noun**: "Acceptance Criteria" (S8), "IQ Assessment" (S2), "Harkness" (S4). (c) **Removing money as the gate, loudly**: "not your ability to pay" (S4), "Every admitted student receives a merit scholarship" (S15), "99% received an offer with full financial need" (S9). Nobody signals it with price, crests, countdowns or wealth imagery.

**K5-F54 — proof is stated by about half and sourced by almost none.** Eleven of twenty-two state at least one figure; **two** attach a source (BASIS Independent's U.S. News footnote, Olin's named ranking); **one** links every figure to a named page without verifying it proves the claim (Exeter; the destinations were not fetched, K5-F55). The worst is Minerva: a superlative ranking claim as the page `<title>` with no body, no year and no link (K5-F44). Caltech states four figures with zero attribution (K5-F42).

**K5-F55 — Exeter's "Go figure" strip is the best-labeled proof pattern in the set.** Each figure is a number, a **full-sentence label**, and a **link whose anchor text names the page it points to**: `$30M` → "Total financial assistance awarded this year" → *Financial Aid & Tuition*; `12:1` → "Most Harkness classes are made up of 12 students and one teacher" → *Harkness*; `245` → "Years of educating students, established in 1781" → *History & Traditions*; `450+` → "Courses to explore at Exeter" → *See our Courses*. The label does the work a footnote would, in plain English. **The four destination pages were not fetched (K5-Q6), so this is an observed labeling-and-linking pattern in the markup, not a verified claim that each destination substantiates its figure.**

**K5-F56 — type discipline splits the set cleanly in two.** Two or three families: Exeter (Graphik + Lyon Display + Lyon Text), MIT (Messina Sans + Cooper), Dalton (Neue Haas Grotesk ×2 + Sabon), Minerva (Chronicle ×2 + Neue Haas ×2), Lakeside (Calluna ×2 + Knockout), Sidwell (Filosofia + Futura PT), Sora (Agrandir ×2), Avenues and Success Academy (**one family each**: Halyard Display; Akkurat LL). Against that: Castilleja loads four families, and Harker's Typekit kit serves **ten or more**. The restrained sites are, without exception, the ones a design press would name. GT's Literata + Inter Tight + Inconsolata sits on the disciplined side already.

**K5-F57 — the licensed-serif-plus-neutral-grotesque pairing is the house style of the top tier.** Exeter, Dalton, Minerva, Lakeside and Sidwell all pair a licensed editorial serif with a neutral grotesque. The sites using only Google families (Trinity: Lora + Open Sans; BASIS Independent: Source Sans Pro + Open Sans + Roboto; Nord Anglia: DM Sans + Montserrat + Lora) read as the second tier in this set.

**K5-F58 — motion is ubiquitous, small, and almost never made safe.** Where a stylesheet could be measured, transition declarations run from 6 (Stanford Admission) to 228 (Castilleja), and the **dominant duration is `0.3s`** (Castilleja 197 uses, Sidwell 150, Horace Mann 140, Lakeside 112; Exeter 35; Minerva's mode is `0.2s` at 108). Easings are overwhelmingly `ease` and `ease-in-out`; custom `cubic-bezier` appears in only five sheets. `@keyframes` counts are small (1 to 13) and are mostly spinners, loaders and fades. **`prefers-reduced-motion` appears in 3 of 20 measurable stylesheets** — Olin (26, inherited from Bootstrap 5, not authored), Avenues (1), Horace Mann (1). Seventeen declare none. GT's own sheet declares none.

**K5-F59 — fluid type and container queries are absent from the whole field.** `clamp()` appears in **1 of 20** stylesheets (Nord Anglia, 51 uses). `@container` appears in **0 of 20**. GT's sheet: 0 and 0.

**K5-F60 — design-token maturity tracks the platform, not the prestige.** Custom-property counts: Olin 188, MIT 118, Minerva 113, Avenues 89, Nord Anglia 23, Sora 17, BASIS Independent 16, Success Academy 2 — and **zero in every Finalsite and Blackbaud theme measured** (Lakeside, Nueva, Horace Mann, Sidwell, Castilleja). The most expensive-looking schools in the set are running on themes with no token layer at all. GT's own sheet has 6.

**K5-F61 — heading structure is broken across most of the field.** **Eight** of twenty-two home pages have **no `h1` at all** (Nueva, Harker, Dalton, Trinity, BASIS Independent, Olin, Brentwood, Castilleja); **two** carry more than one (Horace Mann and Stanford OHS, two each); twelve have exactly one. Of those twelve, Exeter's and MIT's is the literal word **"Home"**, and Lakeside's and Sidwell's is the school name sitting in the logo. So **seven of twenty-two** — Caltech, Minerva, Sora, Nord Anglia, Avenues, BASIS Curriculum and Success Academy — put a real headline in an `h1`. GT Anywhere has **three**.

**K5-F62 — imagery is people, and the best sites describe them.** Alt coverage at 100%: Stanford Admission, Olin, Avenues. Above 90%: Nord Anglia 98%, Brentwood 94%, Stanford OHS 92%. Below 20%: BASIS Independent 12%, Minerva 8%, BASIS Curriculum 17% — and GT Anywhere at **6% of 71 images**. Where alt text is written well it is specific and documentary, not decorative: "5th grade students run through a human tunnel of smiling seniors" (S1), "a curly haired girl and blonde boy in Brentwood uniforms add compost to a pot of herbs" (S22), "An Olin College of Engineering student works on a project in the MechProto course" (S15). MIT Admissions is the outlier that proves R2's RC-05: its blogger portraits are **commissioned illustrations**, described in alt text down to the shirt colour, deliberately not photographs.

**K5-F63 — the online schools lead with the objection, not the benefit.** Sora's `h1` is the objection restated as a fact ("Online Private School for 6th-12th Grade", S20) and its entire proof stack answers "is this a real school?" — Cognia, WASC, NCAA approval, Mastery Transcript Consortium, `9:1`, `95%` to top-three college choices. Stanford OHS does the same with a borrowed institution: "An independent school within Stanford University", stated in the subhead on the first screen, with the Stanford wordmark held back to the footer (S8). Neither hides that it is online; both make legitimacy the first argument.

### 3.1 Measured motion values, per site

Counted in each site's primary authored stylesheet, 2026-09-10. "Mode" is the most frequent duration token and how many times it occurs. This is the evidence behind K5-P8 and it is the table K4 should inherit. Sites with no row had no authored stylesheet reachable off-origin (Harker and Dalton serve only a Typekit kit; Trinity, Stanford OHS and Brentwood serve vendor-minified bundles; Sora ships Tailwind utilities with no `transition` longhand).

| Site | `transition` decls | Duration mode | Next two durations | Dominant easing | `@keyframes` | `prefers-reduced-motion` |
|---|---|---|---|---|---|---|
| Castilleja | **228** | `.3s` ×197 | `1.5s` ×16, `.5s` ×14 | `linear` ×7 / `ease-in-out` ×7 | 8 | **0** |
| Horace Mann | 157 | `0.3s` ×140 | `0s` ×25, `0.2s` ×10 | `ease` ×153 | 2 | 1 |
| Sidwell Friends | 155 | `.3s` ×150 | `.15s` ×11, `0.3s` ×6 | `ease-in` ×18 | 1 | **0** |
| Lakeside | 151 | `.3s` ×112 | `.5s` ×15, `.15s` ×14 | `ease-in-out` ×9 | 3 | **0** |
| Minerva | 150 | `.2s` ×108 | `.1s` ×13, `.3s` ×13 | `linear` ×689 *(Webflow runtime, K5-Q3)* | 1 | **0** |
| Nord Anglia | 134 | `.4s` ×80 | `0s` ×73, `.1s` ×15 | `ease` ×75 | 8 | **0** |
| Olin | 91 | `.15s` ×48 | `.35s` ×41, `.6s` ×4 | `ease-in-out` ×50 | 3 | **26** *(Bootstrap 5 default)* |
| Avenues | 89 | `.4s` ×74 | `.5s` ×25, `.3s` ×23 | `ease-in-out` ×23 | 13 | 1 |
| Exeter | 59 | `.3s` ×35 | `.5s` ×18, `1s` ×11 | `ease-in-out` ×52 | 4 | **0** |
| Nueva | 57 | `.3s` ×56 | `.2s` ×1, `.1s` ×1 | `linear` ×11 | 1 | **0** |
| MIT Admissions | 55 | `0.25s` ×42 | `0.2s` ×25, `0.3s` ×12 | `ease` ×52 | 3 | **0** |
| BASIS Independent | 22 | `.3s` ×21 | `.25s` ×15, `.2s` ×4 | `ease` ×32 | 0 | **0** |
| Success Academy | 21 | `.5s` ×8 | `.25s` ×7, `1s` ×4 | `linear` ×17 | 6 | **0** |
| Stanford Admission | 6 | `.4s` ×5 | `.3s` ×1 | `ease-in-out` ×5 | 0 | **0** |
| Caltech Admissions | **0** | — | — | `linear` ×2 | 0 | **0** |
| **GT Anywhere** (S24) | 3 | `.1s` ×2 | `.3s` ×1, `.8s` ×1 | `linear` | 1 (`spin`) | **0** |

Read across the table: the authored *stylesheets* of every one of these institutions declare **hover and disclosure transitions in the 0.15s to 0.4s band**, with `@keyframes` reserved for spinners and fades. Not one of the sixteen measurable stylesheets declares a scroll-choreographed signature moment. This is evidence about what is authored in CSS, not a rendered observation of runtime behavior — no browser tool was opened (§0 Method), so a script-driven scroll effect invisible to a stylesheet read cannot be ruled out. It is a second CSS-layer source for R2's RC-08 absence finding, and it bears on MN-01 and MN-08 to that extent.

The exception is GT's own build: three authored transitions in the stylesheet, but **six motion libraries in the document** (K5-F51). GT's motion is not in its CSS, it is in GSAP, ScrollTrigger, Lottie, Velocity and Splide — which is why it cannot be turned off by a `prefers-reduced-motion` media query and has to be handled in script.

### 3.2 The subhead inventory

The subhead is where every site in the field does the work GT currently tries to do in its headline (K5-F23, K5-P1). Verbatim, fetched 2026-09-10, ordered by how directly each names its audience.

| Site | Subhead, verbatim | Words | Names the audience? |
|---|---|---|---|
| Stanford OHS (S8) | "An independent school within Stanford University for intellectually adventurous students in grades 7–12, where scholarly instructors guide academically advanced students from around the world in small, live, discussion-based classes." | 25 | **Yes** — twice, plus the grade band, plus the parent institution, plus the format |
| Nueva (S2) | "Nueva is an independent PreK–12 school where gifted learners discover and develop their passions, and learn to make choices that positively and profoundly impact the world." | 22 | **Yes** — "gifted learners", plus the grade band |
| Caltech (S14, meta description) | "Caltech is built for students who love STEM and are driven not only to ask big questions, but to do the work to find the answers." | 25 | **Yes** — by disposition rather than by score |
| BASIS Independent (S10) | "Where students build the confidence to think independently, embrace challenges, and pursue their highest potential." | 16 | Partly — by disposition only |
| Sora (S20) | "Where students learn through live classes and engaging projects with small class sizes and dedicated advisors" | 17 | No — it names the **format**, which is the objection it has to answer |
| Exeter (S4) | "700 acres, the world's largest high school library and a Harkness table in every classroom. Explore." | 16 | No — three concrete facts instead |
| Trinity (S6) | "Providing a world-class education to its students with rigorous academics and outstanding programs in athletics, the arts, public service, and global travel." | 22 | No |
| Olin (S15) | "through hands-on, project-based learning, close collaboration with faculty, and an innovative curriculum" | 15 | No — it completes the headline sentence |
| Success Academy (S9) | "A safe, structured, and beautiful learning environment to bring out the best in your child." | 15 | No — but it is the only subhead in the set addressed to **"your child"** |
| Minerva (S16) | "A new model of higher education built around how people learn, developing critical thinkers and problem-solvers to create a safe, sustainable, and just future." | 24 | No |
| Avenues (S18) | "We believe that education should be world-focused, future-facing, and above all, transformative for each and every student." | 19 | No — "each and every student" is the opposite of naming an audience |
| Nord Anglia (S17) | "Life at one of our schools means achieving more than you ever thought possible." | 14 | No |
| Dalton (S5) | "A School that Inspires and Empowers Each Student's Journey" | 8 | No |

**K5-F63a — the subhead is where audience is named, and only four of thirteen name it.** Those four (Stanford OHS, Nueva, Caltech, and partly BASIS Independent) are also the four whose selectivity is legible on the first screen without a number (K5-F53). Success Academy is the only site in the whole set that addresses the **parent** rather than the student ("your child"), and it is the only one selling against a real deadline. Both moves are available to GT and unused by its competitive set.

## 4. Findings — what each does well and badly for a parent, and the one move worth borrowing

Verdicts are inference from tables 2 and 3.

| # | Site | Does well | Does badly | The one move worth borrowing |
|---|---|---|---|---|
| K5-F64 | Lakeside | Six-word headline; five verb doors let a parent self-select by what they care about rather than by grade | 219 nav links; no CTA on the first screen; zero `prefers-reduced-motion` | **Verb-led doors.** Route by what the child would do, not by the org chart |
| K5-F65 | Nueva | Says "gifted" plainly; names WASC/CAIS/NAIS; student-voice stories carry the warmth | No `h1`; no hero headline in markup; the "IQ Assessment" gate is buried three levels into a submenu | Put the **assessment step in the open**, as a named, unembarrassed thing |
| K5-F66 | Harker | Four-word headline; the shortest page in the set (475 words) | Ten-plus font families; 2 images; no `h1`; the only CTAs are "Play Video" and "Visit Us" | Headline brevity — four words, full stop |
| K5-F67 | Exeter | The best proof pattern in the set (K5-F55); "not your ability to pay" as the affordability frame | 1 `<img>` with no alt — the whole hero is CSS backgrounds and autoplaying video; `h1` is "Home" | **Every figure gets a sentence label and a link to its evidence page** |
| K5-F68 | Dalton | Three divisions as image cards on the page, not just in the nav; six figures with clear labels | No `h1`; no source on any of the six figures | Divisions as **cards on the page**, with the grade range in the card |
| K5-F69 | Trinity NYC | Grade-range cards labelled by grades ("Kindergarten – Grade 4"), not by internal names | Latin headline with no translation; seven unsourced figures | **Label the door by the grade range**, not by "Lower School" |
| K5-F70 | Horace Mann | Mission text is the first content, verbatim and unedited | 315 links; two `h1`s; a paused slideshow as the hero; "Applying to HM" is one of six equal panels | Nothing; this is the cautionary version of the genre |
| K5-F71 | Stanford OHS | Affiliation stated in the subhead and worn plainly; four figures; 92% alt coverage; enrollment options as peer paths | Four `h1`s' worth of nav chrome ahead of the content; no source on the figures | **Name the parent institution in the subhead**, put its mark in the footer, and let the rest of the page be your own |
| K5-F72 | Success Academy | The router is the first thing under the hero; "Apply Now" vs "Learn More" per school depending on whether it is open; a real deadline in the subhead | 60 images at 40% alt; five motion libraries; a lottery school has a fundamentally different job from GT | **The router sits directly under the hero and states the per-option status** ("Not currently accepting applications") |
| K5-F73 | BASIS Independent | 467 words, 43 links — the leanest school page in the set; "Find a School" repeated four times; the one real footnote in the set | 12% alt coverage; three Google font families; no `h1` | **Repeat the routing CTA** until the visitor takes it, and **footnote the ranking claim** |
| K5-F74 | BASIS Curriculum | The page *is* the router; every school named and linked; the three types are stated as three types | Unmaintained Bootstrap 3; `http://` font CDN; 6 images, 1 alt; a 30-word headline | **One umbrella page whose only job is naming the categories and routing out** — the shape GT needs, executed badly |
| K5-F75 | MIT Admissions | Four equal doors; a welcome sentence that tells the visitor what they can do here; 118 custom properties; illustration instead of stock photography | 1,847 words; `h1` is "Home"; a voice that only works because MIT buys no traffic (R2 RC-06) | **The four-door grid**, and the welcome sentence that enumerates the doors in prose above them |
| K5-F76 | Stanford Admission | 438 words, 34 links, 100% alt coverage — the most restrained page in the set | No `h1` content, no proof, no routing; a page that assumes you already decided | **Restraint as a measurable target**: under 500 words, under 40 links |
| K5-F77 | Caltech | "Go from dream to do." is the best headline in the set — five words, a verb, a promise; three clean doors | Four figures, zero attribution; 57% alt | **Three doors: Why / Apply / Afford.** Afford as a *door*, not a footer link |
| K5-F78 | Olin | 100% alt coverage; a request-info form above the fold that still feels like a college; the ranking names its source | 5,023 words — the heaviest page read; no `h1` | **Name the source in the claim itself** ("No. 3 … U.S. News"), not in a footnote nobody opens |
| K5-F79 | Minerva | Three-word headline; Chronicle + Neue Haas is the best type pairing in the set; on **Webflow**, like GT | "#1 Most Innovative University in the World" with no source anywhere; 8% alt; no city named in a page about a multi-city model | The **type pairing**, and the proof that Webflow is not the constraint. Borrow nothing from its claims practice |
| K5-F80 | Nord Anglia | "FIND A SCHOOL" is the first element in the document; 98% alt; the only site using `clamp()`; every figure names its exam and cohort | 2,649 words; partnership logos doing the work a proof point should | **Routing CTA before the logo** — the first thing in the DOM and the first thing on screen |
| K5-F81 | Avenues | The two-campus choice repeated in five places; 100% alt; one font family; `prefers-reduced-motion` present | No proof figures at all; no online arm despite having had one | **Repeat the choice everywhere a visitor might be ready to make it** — nav, admissions menu, CTA, body card, footer |
| K5-F82 | Sidwell | Restrained type (Filosofia + Futura PT); 86% alt | Opens on "Latest News"; 269 links; no routing; a page that serves the enrolled, not the prospective | Nothing for a routing landing; a lesson in who a home page is for |
| K5-F83 | Sora | The objection is the headline; accreditation as the first proof; each figure gets a plain-English label; self-hosted `woff2` | 10 `<video>` on one page; no source on `95%` | **Lead an online school with legitimacy** — approvals, ratio, format — before benefits (accreditation is Sora's version of this signal, not yet available to GT until Nari and counsel confirm its status, G0.5 item 3) |
| K5-F84 | Castilleja | "What's Possible?" in two words; 368 words, the shortest page read | Four font families; 228 transitions with zero reduced-motion; no proof; no routing | Brevity only |
| K5-F85 | Brentwood | 94% alt with genuinely descriptive, documentary text; student quotes attributed to real activities | No `h1`; 272 links; its Hoefler licence blocks its own sheet off-origin | **Alt text written as documentary caption**, which is also the imagery brief |

## 5. Principles the studio adopts

Per KB-RESOLUTIONS R15, every principle below is an option a brief may draw on for its own composition and copy choices, not a mandate; the rubric in `17` section 6 scores outcomes, not conformity to one pattern here.

| # | Principle | Traceable to |
|---|---|---|
| K5-P1 | **Short headlines are the field's norm, not a rule for GT's decided copy.** Seventeen of eighteen genuine peer headlines run 2 to 6 words with a 12-to-25-word subhead carrying the qualification (K5-F24); GT's umbrella sentence is fixed at 22 words by decision and stands regardless (G0.5 item 1, KB-RESOLUTIONS R2). This pattern is a starting option for any OTHER short-form headline a brief writes, never a constraint on the decided sentence | K5-F24, K5-F1, K5-F3, K5-F14, K5-F16, K5-F21 |
| K5-P2 | **Two CTAs on the first screen, rarely more than three.** The field splits between a single act-plus-finder pair ("Apply" / "Find a school") and two co-equal named doors (Avenues' two campuses). GT's two named schools take the second shape — "Explore the Georgetown campus" and "Explore GT Anywhere" (DD-05), not an act/choose split | K5-F25, K5-F9, K5-F10, K5-F18 |
| K5-P3 | **The router sits directly under the hero, and every option shows its own status.** A parent should reach the choice without a menu, and each door should say whether it is open, where it is, and what grades it serves | K5-F9, K5-F72, K5-F5, K5-F6 |
| K5-P4 | **Repeat the choice wherever a visitor could be ready to make it** — nav, hero, body card, footer — with identical wording every time | K5-F18, K5-F81, K5-F10, K5-F73 |
| K5-P5 | **No figure without a sentence label and a link to its evidence.** The label is written for a parent, not a report; the link is the citation. This is Exeter's pattern and the closest observed match to what REQ-022 requires, though Exeter's own destinations were not fetched and verified (K5-Q6) | K5-F55, K5-F67, K5-F54 |
| K5-P6 | **Signal selectivity by who it is for, by naming the process, and by removing money as the gate. Never by a rate, a price or a wealth cue.** Zero of twenty-two elite sites state an acceptance rate | K5-F52, K5-F53, K5-F32, K5-F37 |
| K5-P7 | **Two or three type families, one of them licensed.** The top tier pairs a licensed editorial serif with a neutral grotesque; the sites that read cheap are the ones on three or more Google families or a ten-family Typekit kit | K5-F56, K5-F57, K5-F31, K5-F49 |
| K5-P8 | **Motion is `0.2s` to `0.3s`, `ease` or `ease-in-out`, and reduced-motion-safe.** The field's dominant duration is `0.3s`; the field's reduced-motion practice is absent, which is the gap GT can simply not have | K5-F58, K5-F35, K5-F46 |
| K5-P9 | **Every image gets documentary alt text, written as a caption of what is happening.** 100% coverage is achievable (three sites do it) and the alt-text brief doubles as the photography brief | K5-F62, K5-F85, K5-F78 |
| K5-P10 | **An online school leads with legitimacy signals it can actually claim.** Approvals, live-class format and ratio come before any benefit claim, because the parent's first question is whether it is a real school; accreditation is not one of these signals for GT until Nari and counsel confirm the true status (G0.5 item 3) | K5-F63, K5-F83, K5-F71 |
| K5-P11 | **One `h1`, and it is the headline.** Ten of twenty-two have zero or more than one, and two of the most admired put the literal word "Home" in it. Only seven get it fully right. It costs nothing to be correct | K5-F61 |
| K5-P12 | **Under 500 words and under 60 links on the routing page.** The leanest pages in the set (BASIS Independent 467/43, Stanford Admission 438/34, Castilleja 368/90, Avenues 1,118/62) are the ones that let a decision happen; the 300-link Finalsite pages do not | K5-F10, K5-F13, K5-F76, K5-F12 |
| K5-P13 | **The subhead names the audience; the headline does not have to.** Four of thirteen subheads name who the school is for, and those four are exactly the four whose selectivity is legible without a number. The grade band belongs here too, not in the headline | K5-F63a, K5-F53, K5-F8, K5-F2 |
| K5-P14 | **Address the parent at least once on the first screen.** One site of twenty-two says "your child" (Success Academy), and it is the only one selling against a stated deadline. GT's visitor is a parent arriving from Instagram, not a student | K5-F63a, K5-F9, fact 5 |
| K5-P15 | **Motion that cannot be disabled by a media query must be disabled in script.** The field's authored motion lives in CSS at 0.15s–0.4s and is therefore switchable; GT's lives in six JavaScript libraries and is not | K5-F58, §3.1, K5-F51 |

## 6. Anti-patterns

| # | Anti-pattern | Seen at | Why it fails a parent choosing a school |
|---|---|---|---|
| K5-A1 | A superlative ranking claim with no ranking body, year or link | Minerva (K5-F44): "The #1 Most Innovative University in the World" as the page `<title>` | It is the exact shape of the claim independent press is already challenging in GT's own network (R2 table 5). Unsourced superlatives read as marketing to the parent who is checking, and they cannot pass REQ-022 |
| K5-A2 | A stats strip with no attribution | Caltech (4 figures, 0 footnotes), Dalton (6), Trinity (7) | The figures are almost certainly true; without a label and a link they are indistinguishable from the unfootnoted claims GT already carries |
| K5-A3 | The mega-nav as the page | Horace Mann 315 links, Olin 279, Brentwood 272, Sidwell 269 | On a phone this is the whole experience. Two thirds of GT's sessions are mobile (fact 5) |
| K5-A4 | Grade bands and campuses hidden in a submenu | Nueva, Harker, Brentwood | The parent who does not know your internal names cannot find their child's door |
| K5-A5 | Type sprawl | Harker (10+ families), Castilleja (4) | Reads as accumulated, not designed. Both are otherwise strong schools |
| K5-A6 | Motion without a reduced-motion path | 17 of 20 stylesheets, including Castilleja's 228 transitions and Lakeside's 151 | An accessibility failure the whole field shares, which makes it cheap for GT to be the exception |
| K5-A7 | A home page that serves the enrolled, not the prospective | Sidwell opens on "Latest News"; Nueva's first content block is a news river; Brentwood's is a news river | A parent arriving from Instagram is not looking for last week's assembly |
| K5-A8 | Images with no alt text | GT Anywhere 6% of 71, Minerva 8%, BASIS Independent 12% | It is simultaneously an accessibility failure, an SEO failure, and evidence that nobody wrote a photography brief |
| K5-A9 | An unmaintained umbrella page | BASIS Curriculum: Bootstrap 3, `http://` font CDN, 1 alt on 6 images | The page carrying the most decision weight in the whole estate is the one nobody owns |
| K5-A10 | Autoplaying video as the hero with no text alternative | Exeter (4 `<video>`, 1 `<img>`, 0 alt), Brentwood, Minerva, Success Academy, Nord Anglia | On a metered phone connection in an in-app browser (REQ-024) the first screen may be blank |
| K5-A11 | A lead form as the first screen | **GT Anywhere today** (K5-F23): six fields including household income before any argument is made | No school in the set of twenty-two does this. Asking household income on the first screen is a price cue, and MD-25 says exclusivity is selectivity, never price |

## 7. How it applies to GT

### 7.1 What the best of these do that GT's current pages do not

Measured with the same instrument on the same day (K5-F23, K5-F51, K5-F61, K5-F62).

| # | What the best do | GT Anywhere today | Consequence |
|---|---|---|---|
| 1 | Most peer headlines run 2 to 6 words (K5-F24) | GT's pre-decision copy: 11 words, "The MIT of K-8. For students who ask for more academics." | That copy is superseded by the decided 22-word umbrella sentence (G0.5 item 1), which is exempt from word-count guidance; the field pattern is a reference for other short-form copy on a mock, not for the umbrella sentence |
| 2 | Two CTAs on the first screen (K5-P2) | A six-field lead form, including **household income**, plus "BEGIN APPLICATION" | No school in the set opens with a form. The income field is a price cue against MD-25 (K5-A11) |
| 3 | Route on the page (K5-P3, K5-F26) | No routing at all; 39 links total | GT has two schools and no door for either. This is the whole reason the umbrella page exists |
| 4 | Every figure labelled and linked to evidence (K5-P5) | `3x` ×4, `7x`, `2%`, `1:1`, `$10,400`, **no footnote on any** | Exactly the pattern REQ-022 and DEL-018 exist to stop. Exeter shows the fix costs a sentence and a link |
| 5 | 90 to 100% alt coverage with documentary text (K5-P9) | **4 non-empty alts on 71 images (6%)** — the worst in the set | Accessibility, SEO and the absence of a photography brief, in one number |
| 6 | One `h1` (K5-P11) | **Three** | Free to fix |
| 7 | No reduced-motion path in the fetched stylesheet (K5-P8) | 0 declarations, and **six motion libraries** (GSAP, ScrollTrigger, Lottie, Splide, Velocity, jQuery) — the heaviest payload in the set | Feeds MN-01, MN-04 and MN-08 as CSS-layer evidence only: the field's *stylesheets* show nobody authoring signature motion in CSS (R2 RC-08), and GT is carrying more motion library code than any elite school read; none of this was confirmed by rendering |
| 8 | Accreditation stated as proof (K5-P10) | GT's markup carries an accreditation claim (Cognia, SACS) — a published claim, not a verified status (K5-F51) | Not usable as proof, a mark or a scoring input until Nari and counsel confirm the true status (G0.5 item 3) |
| 9 | Two or three licensed families (K5-P7) | **GT already has this** — Literata, Inter Tight, Inconsolata | GT's type system is on the disciplined side of the field already. Continuity is cheap |
| 10 | A subhead that names the audience and the grade band (K5-P13) | GT compresses audience, claim and category into one 11-word headline and has no subhead | The 90th-percentile audience and the K-8 band are GT's two strongest selectivity signals (fact 2) and neither is on the first screen in the place the field puts them |
| 11 | Address the parent (K5-P14) | The page addresses no one; the form addresses a lead | Two thirds of sessions are mobile and organic (fact 5). "Your child" is one word of work |

The short version: GT's *materials* (a three-family type system, a Webflow build no worse than Minerva's) are better than its *page*. An accreditation claim already sits in the markup, but it is a published claim, not a verified status, and cannot be counted as a material until Nari and counsel confirm it (G0.5 item 3). Every gap in the list above is a structural or editorial fix, not a rebrand.

### 7.2 Calibrating the rubric row **Mission (L3) and exclusivity (L4)**

Rubric question (`17` section 6): *does the page read as the most serious K-8 option, selective by rigor not price?*

| Score | What it looks like | Anchor |
|---|---|---|
| 1 | Selectivity asserted by adjective only ("elite", "exclusive"), or by price, crests or wealth imagery. Figures present, unsourced | The register R2's RC-17 and RC-18 found in the network; GT's current "Ready to Give Your Child an Elite Education?" `h1` plus a household-income field |
| 2 | A real mission sentence, but no evidence and no statement of who the school is for | Castilleja, Sidwell, Brentwood (K5-F84, K5-F82, K5-F85) |
| 3 | Who it is for is stated in the subhead, and the admission process is named as a proper noun. Still no sourced proof | Nueva "gifted learners" + an "IQ Assessment" step; Harker (K5-F65, K5-F66) |
| 4 | Who it is for **plus** figures with plain-English labels **plus** a named legitimacy signal (the admission process, a ratio, or a credential once confirmed). Sources implied rather than linked | Stanford OHS, Sora, BASIS Independent (K5-F36, K5-F48, K5-F38) |
| **5** | **All of four, and every figure carries a sentence label and a link to the page that proves it, and money is explicitly removed as the gate.** A parent can read the first screen, know the school is for their child specifically, see one number, click it, and land on its evidence. No rate, no price, no crest, no countdown | **Exeter** for the proof pattern and the affordability frame (K5-F55, K5-F67); **Stanford OHS** for stating who it is for in the subhead (K5-F71); **Success Academy** for "99% received an offer with full financial need" (K5-F37) |

For GT specifically, a 5 means the first screen says who the school is for (90th percentile and above, per fact 2), names the admission step as a thing rather than a hurdle, states **one** figure with a sentence label and a link to its claims-register-backed evidence page, and says that TEFA covers tuition for eligible Texas families — because Exeter proves that removing money as the gate reads as prestige, not as a discount (R2 RC-12, K5-F53).

### 7.3 Calibrating the rubric row **Continuity (L2)**

Rubric question (`17` section 6): *does it look like the front door of the two sites it leads to, and could the sites inherit its shell?*

| Score | What it looks like | Anchor |
|---|---|---|
| 1 | The umbrella page shares nothing with the schools it routes to — different type, different chrome, a dead end once you arrive | **BASIS Curriculum** (K5-F74): Bootstrap 3, Open Sans over `http://`, routing out to seven independently designed sites |
| 2 | Shared logo and colour, nothing else. Each destination re-introduces itself from scratch | The Alpha network's footer-only cross-linking (R2 RC-19) |
| 3 | Shared type and colour; the destination feels related but the header and footer are rebuilt per site | Nord Anglia (K5-F80) across its regional school sites |
| 4 | A genuine shared shell — same header, same footer, same type scale, same components — with per-school content inside it, and the choice repeated in the same words in nav, body and footer | **Avenues** (K5-F81): New York and São Paulo repeated identically in five places on one shell |
| **5** | All of four, **and the shell is expressed as tokens the two school sites can actually inherit** (custom properties for type, space and colour, a shared header and footer, one router component that works for N schools), **and** the affiliation line appears once in a fixed location on every surface | Avenues for the repetition discipline; **Olin (188), MIT (118), Minerva (113) custom properties** for the token layer the Finalsite and Blackbaud schools entirely lack (K5-F60); **Stanford OHS** for the fixed-position affiliation line (K5-F71) |

For GT specifically, a 5 means the landing page's header, footer, type scale and router are the same objects the Georgetown and Anywhere sites will load — not a lookalike. GT starts closer to this than most of the field: Literata, Inter Tight and Inconsolata are already shared across the estate (K5-F51), and the current sheet has 6 custom properties where a 5 needs a real token layer. It also means the router component is built for N campuses from the start (DD-21), because the site already says "expanding nationwide" (fact 4).

### 7.4 Into the brief, the tokens, the register and the QA

| Target | Change |
|---|---|
| Design Director brief (`17` §5) | Name **Exeter** (proof), **Avenues** (repetition), **Success Academy** (router placement), **Caltech** (three doors), **Sora** (online legitimacy) and **Nord Anglia** (routing CTA first in the DOM) as the six exemplars every mock is read against. Offer K5-P2 and K5-P12 as starting options, not mandates (KB-RESOLUTIONS R15): two first-screen CTAs, under 500 words and under 60 links. The umbrella headline is the decided 22-word sentence (G0.5 item 1) and is exempt from any word-count guidance in this file |
| `tokens.css` | The field's dominant motion values are `0.2s`–`0.3s` with `ease` / `ease-in-out` (K5-F58); set the duration and easing tokens there and add the `prefers-reduced-motion` block the field does not have. Keep the three-family stack; it is already on the right side of K5-P7 |
| Register (`07`) | K5-F52 (zero of twenty-two state a rate) and K5-F53 strengthen **DD-10**'s limit without changing its choice — GT's 90th-percentile bar stays a deliberate category choice, not "what elite schools do". K5-F58 and R2's RC-08 together give **MN-01** and **MN-08** a stylesheet-measured case, not a rendered-behavior one — the field's CSS shows no authored scroll-choreographed motion, but no site's runtime was observed running (§0 Method). K5-F55 gives **DD-07** and **DEL-018** a concrete format to adopt rather than invent (its own destinations unverified, K5-Q6) |
| Claims register (`12-claims-register.md`) | Adopt Exeter's row shape: figure, sentence label written for a parent, and a named destination — but GT's own destination page must actually substantiate the figure, unlike Exeter's unverified links (K5-F55, K5-Q6). A figure with no destination page does not ship (REQ-022) |
| QA (`1_spec/13`) | Add: exactly one `h1`; 100% non-empty `alt`; under 60 links; reduced-motion run asserts no transition over 0.3s survives; the routing CTA is reachable on the first screen at 390px without a menu |
| Imagery (DD-08, DD-31) | K5-F62 makes the alt-text brief and the photography brief the same document. K5-F85's Brentwood alt text is the model sentence |

## 8. The eight to capture as exemplars, ranked

Screenshots are a separate capture pass (`18` section 3); this is the ranked list for it, with what to frame. All eight were fetched by K5 on 2026-09-10.

| Rank | Site | URL | Why it earns a capture | What to frame at 390 and 1440 |
|---|---|---|---|---|
| 1 | **Phillips Exeter Academy** | [exeter.edu](https://www.exeter.edu/) | The only proof pattern in the field with a labeled link for every figure, the shape REQ-022 wants (K5-F55; the destinations themselves were not fetched, K5-Q6) | The "Go figure" strip: number, sentence label, link — plus the "not your ability to pay" panel |
| 2 | **Success Academy** | [successacademies.org](https://www.successacademies.org/) | The best router placement read: choice directly under the hero, per-option status (K5-F72) | Hero + the "Find a Success Academy Charter School Near You" module immediately below it |
| 3 | **Avenues** | [avenues.org](https://www.avenues.org/) | The two-destination repetition discipline GT's two schools need, at 100% alt and one font family (K5-F81) | The "Our Campuses" two-card section, and the nav showing the same choice repeated |
| 4 | **Caltech Undergraduate Admissions** | [admissions.caltech.edu](https://www.admissions.caltech.edu/) | The best headline in the set and a clean three-door grid; also the cautionary unsourced stats strip (K5-F77, K5-F42) | "Go from dream to do." with the three doors; separately the four-figure strip as the anti-pattern |
| 5 | **Sora Schools** | [soraschools.com](https://soraschools.com/) | The closest live analog to GT Anywhere's job: an online school leading with legitimacy (K5-F83) | Hero + the accreditation line + the four labelled figures |
| 6 | **BASIS Curriculum Schools** | [basiscurriculumschools.com](https://basiscurriculumschools.com/) | The closest *structural* analog to GT's umbrella page, executed badly — the shape to take and the craft to reject (K5-F74) | The full three-type router; capture as a structure reference, not a visual one |
| 7 | **MIT Admissions** | [mitadmissions.org](https://mitadmissions.org/) | The four-door grid and the welcome sentence that enumerates the doors; the illustration-instead-of-stock decision (K5-F75, K5-F62) | The welcome sentence with Discover / Apply / Afford / Visit beneath it |
| 8 | **Nord Anglia Education** | [nordangliaeducation.com](https://www.nordangliaeducation.com/) | The best-built umbrella in the field; "FIND A SCHOOL" first in the DOM; the only `clamp()` in the set (K5-F80, K5-F59) | The header showing the routing CTA ahead of the logo |

Held back deliberately, with reasons, so the capture pass does not re-litigate them: **Minerva** (best type pairing in the set and a Webflow build, but its single claim is the anti-pattern K5-A1 — capture only if K2 wants the Chronicle + Neue Haas specimen); **Lakeside** (the verb doors are interesting but the page has no CTA); **Dalton** and **Trinity** (good division cards, superseded by Success Academy's router); **Stanford OHS** (the affiliation line is quoted in K5-F71 and needs no screenshot); **Olin**, **Stanford Admission**, **Horace Mann**, **Sidwell**, **Brentwood**, **Castilleja**, **Harker**, **Nueva**, **BASIS Independent**.

## 9. Open questions

| # | Question | Why K5 could not resolve it | What would resolve it |
|---|---|---|---|
| K5-Q1 | Do these sites' *rendered* first screens match the markup order K5 measured? | `curl` returns pre-render HTML. Sites using client-side hydration (Sora on Remix, Success Academy behind NitroPack) may compose a different first screen at runtime | The capture pass (`18` §3) at 390 and 1440; treat any divergence as a correction to table 2, not to table 3 |
| K5-Q2 | What is Brentwood School's type system? | Its Hoefler `cloud.typography` sheet returns `/* DEACTIVATED */` to an off-origin request (K5-F50) | Read the computed `font-family` in the capture pass |
| K5-Q3 | Are the `0.3s` / `ease-in-out` values the field's *intent*, or the defaults of Finalsite, Blackbaud, Bootstrap and Webflow? | Both are true in the sheets read: Olin's 26 `prefers-reduced-motion` blocks are demonstrably Bootstrap 5 defaults, and Minerva's 689 `linear` tokens are Webflow's interaction runtime | A computed-style probe on a handful of authored (non-vendor) components during the capture pass. K4 owns this |
| K5-Q4 | Does any of these run a genuine two-door "campus or online" router on a page K5 did not read? | K5 read home pages only. Nord Anglia, BASIS and Success Academy each have deeper find-a-school pages that were not fetched | Fetch `nordangliaeducation.com/our-schools`, `basisindependent.com` school finder and `successacademies.org/schools`. Worth doing before the mocks, since K5-F27 currently says GT has no exemplar |
| K5-Q5 | Is the household-income field on GT Anywhere's first screen a TEFA eligibility requirement or a marketing qualifier? | This is an internal fact; K5 read only the mirror's markup | Nari or Crystal. It matters because K5-A11 recommends removing it and MD-25 arguably requires it |
| K5-Q6 | Do Exeter's linked figures reconcile with the pages they link to? | K5 read the home page only and did not follow the four destinations | Fetch the four destinations. Only relevant if `12-claims-register.md` adopts the pattern, which K5-P5 recommends it does |

Not blocked. All 22 target sites were fetched; the one unreachable URL (S10n) was a parked domain and is recorded as a finding rather than a gap.

## 10. Rework log (E4)

Changes made after Astra's E4 review (`0_plan/ensemble/E4-knowledge-base.md`, K5 row, section A and B) and `0_plan/kb/KB-RESOLUTIONS.md` (R1, R2, R15). Everything not listed here is unchanged from the pre-E4 version.

| Id | Change |
|---|---|
| K5-F51 | Reworded from "accreditation present and real" to "markup carries an accreditation claim — a published claim, not a verified status" (G0.5 item 3, R1) |
| K5-F54 | The "links every figure to its own evidence page (Exeter)" clause corrected to note the destination was not verified, cross-referencing the corrected K5-F55 |
| K5-F55 | Downgraded from "a link to the page that proves it" to an observed labeling-and-linking pattern; states plainly that the four destination pages were not fetched (K5-Q6) |
| K5-F24 | Recomputed from the table in section 2: Nueva (22 words, "no hero headline in markup") added to the paragraph-opener exclusions alongside MIT and BASIS Curriculum; Sidwell's absent headline separated out as not applicable; the peer range corrected from "2 to 6" to "2 to 12" across eighteen genuine headlines (Olin is the 12-word exception); GT's 11-word headline is now stated as longer than every peer headline except Olin's, not every peer headline |
| K5-F25 | Reworded so the field's two-CTA convergence covers two distinct shapes (an act-plus-finder pair, or two co-equal named doors) instead of one "one to act, one to choose" pattern; ties GT's two schools to Avenues' co-equal-doors shape per DD-05 |
| K5-P1 | Reworded from a "the headline is four to six words" mandate to a descriptive field pattern; states the decided 22-word umbrella sentence is exempt (G0.5 item 1, KB-RESOLUTIONS R2) |
| K5-P2 | Reworded from "one to act, one to choose" to the two observed shapes; matches GT's two named-school doors (DD-05) to the co-equal shape, not an act/choose split |
| K5-P5 | "Would satisfy REQ-022 as written" softened to "the closest observed match," noting Exeter's own destinations were not verified (K5-Q6) |
| K5-P10 | Removed "Accreditor" as an assumed-available legitimacy signal for GT; states accreditation is unavailable as a signal until Nari and counsel confirm status (G0.5 item 3, R1) |
| §4, K5-F83 (Sora) row | "The one move worth borrowing" cell reworded to drop "accreditor" as a signal GT can use now, noting it is Sora's version of a signal GT does not yet have |
| §3.1 closing paragraph | Rescoped the motion-absence claim to what fetched stylesheets declare, not rendered/runtime behavior; ties this explicitly to the Method section's "no browser tool was opened" |
| §7.1 row 1 | Reworded from "Headline in 4 to 6 words (K5-P1)" to "Most peer headlines run 2 to 6 words (K5-F24)"; notes GT's old copy is superseded by the decided 22-word sentence, which is exempt from word-count guidance |
| §7.1 row 2 | Header cell reworded from "Two CTAs, one of them a choice" to "Two CTAs on the first screen," removing the DD-05 conflict |
| §7.1 row 7 | Header and consequence cells reworded to scope the reduced-motion/absence claim to the fetched stylesheet, not observed behavior (MN-01, MN-08) |
| §7.1 row 8 | Reworded from "GT already has this... the strongest un-exploited asset" to a statement that the claim is unusable as proof, mark or scoring input until confirmed (G0.5 item 3, R1) |
| §7.1 closing summary | "Real accreditation" removed from GT's list of materials; the accreditation claim is now described as unconfirmed and not countable as a material (G0.5 item 3, R1) |
| §7.2 rubric, Score 4 | "Plus accreditation named" replaced with "plus a named legitimacy signal (the admission process, a ratio, or a credential once confirmed)," so a mock with no accreditation content can reach Score 4 and, through "all of four," Score 5 |
| §7.4, Design Director brief row | "State K5-P1, K5-P2 and K5-P12 as hard constraints" reworded to "Offer K5-P2 and K5-P12 as starting options, not mandates (KB-RESOLUTIONS R15)"; dropped the 4-to-6-word figure and named the umbrella sentence as decided and exempt |
| §7.4, Register row | Rescoped the MN-01/MN-08 motion claim to stylesheet-measured, CSS-layer evidence; noted Exeter's own destinations are unverified |
| §7.4, Claims register row | "Destination page that proves it" reworded to require GT's own destination page to actually substantiate the figure, distinguished from Exeter's unverified links |
| §8, rank 1 (Exeter) | "The only proof pattern in the field that satisfies REQ-022 as written" reworded to "the shape REQ-022 wants," with the unfetched-destinations caveat |
| §1, Status row | Clarified that the 22-site count covers third-party sites S1-S22 only; named S23 (search shortlist) and S24 (local GT baseline) as excluded from that count |
| §5 heading | Added a framing line applying KB-RESOLUTIONS R15 (options, not mandates) to all fifteen principles in the section |
