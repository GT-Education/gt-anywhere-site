# K0 Design hunt: pages worth copying, and what to take from each

| Field | Value |
|---|---|
| Cluster | K0, the design hunt (`18-knowledge-base-plan.md` section 4, wave 0) |
| Purpose | Give the design studio (`17-design-studio-runbook.md` sections 5 and 6) a named, fetched, scored set of reference pages so the Design Director brief cites exemplars instead of taste, and the critic's rubric has a calibrated 5 on every row |
| Method | Web search for award lists, agency case studies and curated galleries; then a text fetch of every candidate homepage and a mechanical probe of its markup and stylesheets |
| Corpus | 81 candidates in the table below. 73 carry fetched evidence (72 by `curl` returning HTTP 200, plus University of the Arts London recovered by WebFetch after `curl` was refused). 8 fetches failed and are marked as failures in their rows, not described from memory |
| Date | 2026-09-11 |
| Tools | WebSearch, WebFetch, and `curl` text fetches. No browser was opened. No GT or Alpha page was loaded at all |
| Status | Drafted by Fable. Reworked by Fable after Astra's E4 review, 2026-09-11 -- see "Rework log (E4)" at the end of this file |

## Question

1. Which website designs should the GT School umbrella landing copy from and learn from, across both education and the sectors that face the same job: route a visitor to one of a few options quickly, with craft?
2. For each candidate: how long is the headline, how many primary calls to action sit above the fold, does it use a two-or-more-door routing pattern, which type families does its CSS or markup name, and what motion does it declare?
3. Which twenty are worth the studio's time, what should be taken from each, and what must not be?
4. Which are education sites and which are calibration references from other sectors?

## Findings

### F0. How the evidence was gathered, and what it can and cannot support

| Step | What was done | What it supports |
|---|---|---|
| Search | 12 WebSearch queries across Awwwards, Siteinspire, Land-book, Godly, Minimal Gallery, Finalsite's and Numiko's "best of" lists, Pentagram, AREA 17, COLLINS, Koto, and the calibration sectors (airlines, museums, health systems, two-brand banks, multi-campus universities) | The "why it was named" column. Every education candidate is either named in a published list, named in `18` section 1 cluster K5 or K7, or is a direct GT competitor |
| Fetch | `curl` with a desktop user agent, following redirects, saving the raw HTML; 73 pages returned content | Headline in markup, above-fold link and button labels, routing structure, platform |
| Stylesheet probe | The first three stylesheets per page fetched and scanned for `font-family`, `@font-face` sources, Google Fonts and Adobe Fonts references | The type-family column. This is the real declared stack, not a guess |
| Motion probe | HTML and CSS scanned for 30 motion signatures (GSAP, Lenis, Framer Motion, Locomotive, AOS, Swiper, Splide, Slick, Flickity, Barba, ScrollMagic, Lottie, three.js, Webflow IX2, view transitions, autoplay video, `@keyframes`, timed `transition`) and for `prefers-reduced-motion` | The motion column and the reduced-motion verdict |
| Not done | No page was rendered. Nothing was screenshotted | **Composition and Imagery scores below are provisional.** They are inferred from structure, density, type stack and the award citation, and must be re-scored against screenshots under the `18` section 3 exemplar capture protocol before the rubric in `17` section 6 is calibrated from them |

**Update, after this file was drafted.** Rendered captures (Playwright, 390 and 1440) plus sixteen-dimension concept-catalog tables now exist for 26 sites, collected in `0_plan/kb/CONCEPTS-A.md` through `CONCEPTS-D.md` and `0_plan/kb/EXEMPLARS.md`, with screenshots in `0_plan/kb/exemplars/`. Twenty-four of those are candidates scored in F7 below: this file's entire twenty-site shortlist (F8) plus four more from the wider candidate table -- Success Academy, Caltech Undergraduate Admissions, Nord Anglia Education and Vanguard. For those 24 rows, the Composition and Imagery scores in F7 and the ranking in F8 are the text proxies this section describes, now superseded by the rendered analysis; this rework points to the concept-catalog files rather than re-scoring them here (DD-19). The other two captured sites are Sora Schools (row 28 below, whose `curl`/WebFetch fetch failed here but which a later Playwright browser reached without incident -- see Q-K0-2) and BASIS Curriculum Schools, a different site from row 6's BASIS Independent Schools and not part of this file's 81-candidate corpus at all. The remaining 49 scored candidates stay provisional pending capture.

The **Primary CTAs above the fold** column needs a caveat. A text fetch cannot see a fold. For 7 candidates the count is a rendered read via WebFetch and is stated as such. For the rest the column reports a proxy: the number of unique link and button labels in the top 35 percent of `<body>`. That proxy is useless as an absolute, and excellent as a comparison, which is how it is used below.

### F1. The measured spread, across all 73 fetched pages

| Measure | Result |
|---|---|
| Pages with no usable `<h1>` | **25 of 73.** 11 ship a label (`Home`, or `Homepage`): Exeter, Groton, Shady Side, Paideia, Bryn Mawr, Laguna Blanca, Vail Mountain, Garrison Forest, MIT Admissions, Imperial, Dwight. 14 ship no `<h1>` element at all: Nueva, Harker, Dalton, Trinity NYC, Olin, RISD, The New School, Sussex, Getty, Amex, Every, BASIS Independent, Green School, Khan Lab |
| Densest above-fold label counts | Quinnipiac 194, Cleveland Clinic 178, Colorado Academy 176, Groton 157, Garrison Forest 142, Horace Mann 135, Guildhall 126, The New School 121, Olin 105, Nueva 102 |
| Leanest above-fold label counts | Stanford Admission 7, Danish National School of Performing Arts 9, Basecamp 14, ASU 16, Vanguard 16, Avenues 17, Barnes 17, Green School 17, Yale Architecture 18, Crimson Global Academy 18 |
| Pages loading a JavaScript motion library | 21 |
| ...of those declaring `prefers-reduced-motion` nowhere in HTML or CSS | **13 of 21**: Exeter, Laurel Springs, Success Academy, MIT Admissions, Minerva, RISD, Imperial, Yale Architecture, ASP Warsaw, DDSKS, MoMA, Nord Anglia, GEMS |
| Real `<h1>` lengths, shortest to longest | Barnes 6, VCUarts 7, MoMA 7, Pentagram 9, Northeastern 10, Horace Mann 11 ... Basecamp 93, Whitecliffe 112, AREA 17 117, Linear 155, Stripe 172 |
| Type delivery | 20 pages pull Google Fonts, 8 pull Adobe Fonts, and the strongest-scoring institutions self-host a proprietary or licensed face (Lyon, RISD Sans, Neue, MoMA Sans, SFMOMA Sans VF, Tate, ImperialText-VF, Ravensbourne Sans, Fidelity Sans, Sohne, Signifier, Suisse Intl) |
| Platform concentration | 13 of the elite K-12 sites run Finalsite (identified by the `fsRedactorFont` editor marker): Lakeside, Nueva, Harker, Horace Mann, Groton, Shady Side, Colorado Academy, Paideia, Bryn Mawr, Laguna Blanca, Vail Mountain, Garrison Forest, Dwight |

### F2. Only two pages in 73 name a compare control in their text, and only one of the two actually sits beside the doors

Searching the visible text of all 73 fetched pages for a comparison control returns exactly two hits. A text fetch can show that a control's words exist and roughly where in the markup (nav dropdown versus page body); it cannot show visual proximity on a rendered page. **The "next to the doors" framing in this finding's original title was a placement claim a text fetch cannot support and is corrected below**; what the search actually shows is presence, not position, except where a later rendered capture confirms or corrects a specific site:

| Site | Control | Where it sits |
|---|---|---|
| Getty | `Compare Museums` -> `https://www.getty.edu/visit/` | **Judgment, since corrected by rendered evidence.** The original text-fetch read this as sitting beside the two door links in the Visit menu. `0_plan/kb/CONCEPTS-B.md`'s Getty section rendered all four captures (1440 and 390, fold and full page) and found `Compare Museums` hover-gated inside the `Visit` nav dropdown, absent from every capture, while the shared sentence and the two door links sit in an "Our Locations" card one scroll below the first screen with no compare link beside them there. Getty's compare control exists, but one interaction deeper and one scroll away from the doors, not next to them |
| Vanguard | `Compare services` | Beside the audience doors in the fetched text. The placement was not rendered for this rework, and `0_plan/kb/CONCEPTS.md` C45 cites this finding rather than corroborating it, so the placement stays a text proxy until a capture confirms it (corrected after E4b) |

This matters more than any other single finding in K0. A parent choosing between a Georgetown campus and an online school is doing a comparison, and a text search of all 73 pages found a named comparison control on only two of them.

### F3. Getty is the closest working model of GT's exact problem

Measured from the fetched markup:

| Element | Verbatim |
|---|---|
| Section framing | `Our Locations` / `Enjoy the art, architecture, and gardens of our two unique sites` |
| Door 1 | `Visit the Getty Center` -> `https://www.getty.edu/visit/center` |
| Door 2 | `Visit the Getty Villa Museum` -> `https://www.getty.edu/visit/villa` |
| Third control | `Compare Museums` -> `https://www.getty.edu/visit/` |
| Nav treatment | `Visit` opens to `Getty Center`, `Getty Villa Museum`, `Compare Museums` as three peers |
| Type | Graphik Web for text, Linotype Sabon for display |
| Motion | CSS transitions and keyframes only. No JavaScript motion library. No `prefers-reduced-motion` |

One shared sentence of framing, two equally weighted doors, and a third link for the undecided. That is the shape of the GT landing -- but it is not the shape of this page. Rendered captures (`0_plan/kb/CONCEPTS-B.md`) show Getty splits these three elements across two depths: the sentence and the two doors sit in a body card one scroll below the first screen, and the compare link is a hover-gated nav item never visible in any capture (F2). Learn the shape; GT's version must put all three in one place, which Getty itself does not.

### F4. ASU is the closest working model of the campus-or-online switch

ASU's homepage carries both delivery modes on one page as a tab pair, verified from the markup:

| Element | Evidence |
|---|---|
| The switch | `In Person` -> `#tabs-panel-1`, `Online` -> `#tabs-panel-2`. An in-page tab pair, not a link away |
| Behind door 1 | First-year, Transfer, Honors, Graduate, International, Veteran, Non-degree student, all pointing at `admission.asu.edu` |
| Behind door 2 | The same seven labels, pointing at `asuonline.asu.edu` and `goto.asuonline.asu.edu` |
| Density | 16 unique above-fold labels, the fourth leanest in the corpus |
| Type | Nimbus Sans L, FreeSans. The weakest type stack among the top twenty |

The lesson is structural, not visual: the audience question ("who is the student?") is asked once, and the delivery question ("where?") switches which host answers it. ASU never makes a parent read two parallel sites to compare.

### F5. The most structurally relevant school sites scored lowest on this file's own, provisional craft read

| Site | Structure | Craft |
|---|---|---|
| Dwight School | Nav lists eight campus sites plus `/dwight-global-online-school` as a peer item. This is DD-21's "N campuses plus one virtual school" already shipped | `<h1>Home</h1>`, 51 above-fold labels, Finalsite, Montserrat plus Adobe Caslon Pro plus Brandon Grotesque |
| Nueva School | The nearest peer of all: a school explicitly for gifted learners, with `Our Campuses` and `Experts in Gifted Education` in its menu | 102 above-fold labels, no `<h1>` at all, Manrope plus Poppins plus Freight Text Pro |
| Stanford Online High School | Treats the delivery choice as first-class with a named `Enrollment Options` nav item | 58 above-fold labels, generic Source Sans Pro |
| Nord Anglia | One persistent `FIND A SCHOOL` control carries all routing across four regions | 45 above-fold labels, no type family exposed, Swiper and autoplay video with no `prefers-reduced-motion` |

Study these four for mechanism. Do not study them for craft. The reverse holds for COLLINS, Barnes and Yale Architecture: study those for craft, and ignore their routing, which solves an easier problem.

This craft ranking is a text proxy (F0), not a rendered review, and DD-19 requires rendered evidence before a compositional judgment calibrates a rubric. Of these four, only Nord Anglia has since been rendered and catalogued (`0_plan/kb/CONCEPTS-B.md`); Dwight, Nueva and Stanford Online High School have not. Re-rank against the concept catalog (`0_plan/kb/CONCEPTS-A.md` to `CONCEPTS-D.md`) and the screenshots in `0_plan/kb/exemplars/` as more of the mechanism-relevant set is captured, rather than trusting the structure-only read above.

### F6. The candidate table

Sector is marked `Education` or `Calibration`. The **Type families** column reports what the page's own markup or first three stylesheets declare; where nothing is exposed, the row says so rather than guessing. `RM no` in bold means the page declares motion but no `prefers-reduced-motion` anywhere.

| # | Site | URL (as fetched) | Sector | Why it was named (source) | The one design move | Headline in markup | Primary CTAs above the fold | >=2-door routing? | Type families -- motion declared |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Arizona State University | https://www.asu.edu/ | Education - university, campus+online | Closest structural analogue found: one homepage carrying both delivery modes | An `In Person` / `Online` tab pair (`#tabs-panel-1` / `#tabs-panel-2`) with the same seven audience doors behind each, pointed at different hosts | "A premier honors college experience" = 35 ch | 16 unique link/button labels in the top 35% of `<body>` | Yes - In person, Locations, Online, Virtual | Nimbus Sans L; FreeSans -- video-hero (RM yes) |
| 2 | ASU Online | https://asuonline.asu.edu/ | Education - university, online arm | The online half of the ASU pair; shows what the second door looks like on its own | Two application CTAs split undergraduate from graduate before anything else loads | "You belong here" = 15 ch | 48 unique link/button labels in the top 35% of `<body>` | Yes - Locations, On campus, Online | fa-brands; fa-regular; fa-solid -- aos, video-hero; CSS only (RM yes) |
| 3 | Dwight School | https://www.dwight.edu/ | Education - K-12 multi-campus + online | A K-12 school group listing campuses and an online school as peer doors | Nav lists eight campus sites plus `/dwight-global-online-school` as a sibling item, not a sub-page | `Home` = 4 ch (**a label, not a headline**) | 51 unique link/button labels in the top 35% of `<body>` | Yes - Online, Virtual | Google: Montserrat; adobe-caslon-pro; brandon-grotesque; bpa-font-icons -- video-hero (RM yes) |
| 4 | Avenues: The World School | https://www.avenues.org/ | Education - K-12 multi-campus | Selective K-12 with two named campuses and an online arm | 17 above-fold labels; `Campuses > New York / Sao Paulo` is the whole router | "Welcome to Avenues" = 18 ch | 17 unique link/button labels in the top 35% of `<body>` | Yes - Campuses, Online, Our campuses, Virtual | Montserrat; Source Sans Pro; Gotham Bold; Interstate -- swiper, video-hero, vimeo/yt-embed (RM yes) |
| 5 | Nord Anglia Education | https://www.nordangliaeducation.com/ | Education - K-12 school group | Umbrella brand routing parents across four world regions | A single persistent `FIND A SCHOOL` control carries the entire routing job | "Create your Future" = 18 ch (visible, via WebFetch); markup h1 18 ch | 2 (campaign link, FIND A SCHOOL) | Yes - Find a school, Online, Virtual | Montserrat; Source Sans Pro; Gotham Bold; Interstate -- swiper, video-hero (**RM no**) |
| 6 | BASIS Independent Schools | https://basisindependent.com/ | Education - K-12 network | PreK-12 network with the same umbrella-to-campus problem | `Find Your School` repeated as the one nav constant; 148-char hero sentence | "Fearless Thinkers Start Here. ..." = 148 ch (visible, via WebFetch); **no `<h1>` in markup** | 4 (Request Information x2, Find a School x2) | Yes - Find Your School, Find a school | Google: Source Sans Pro; Google: Open Sans; Google: Roboto; dashicons -- CSS only (**RM no**) |
| 7 | GEMS Education | https://www.gemseducation.com/en/ | Education - K-12 school group | Large multi-school umbrella; a scale test for the routing pattern | `Find a School` plus 74 above-fold labels - routing buried in a directory | "World class schools for all ages \| GEMS Education" = 49 ch | 74 unique link/button labels in the top 35% of `<body>` | Yes - Find a school, Locations | Google: Encode Sans; Google: Quicksand; Google: Roboto; Trebuchet MS -- swiper, slick/flickity, lottie, vimeo/yt-embed (**RM no**) |
| 8 | Green School | https://www.greenschool.org/ | Education - K-12 multi-campus | Three international campuses presented as destinations | `Our Destination Schools` names Bali, New Zealand, South Africa as three peers | **no `<h1>` in markup** (og:title 20 ch) | 17 unique link/button labels in the top 35% of `<body>` | No | Eboracum; fa-regular; fa-solid; Google: Open%20Sans%3A300italic%2C400italic%2C600italic%2C300%2C400%2C600 -- aos, video-hero (RM yes) |
| 9 | Lakeside School | https://www.lakesideschool.org/ | Education - elite K-12 | Named in `18` section 1 cluster K5 as an elite K-12 reference | Two campuses acknowledged, but 88 above-fold labels bury them | "Lakeside School" = 15 ch | 88 unique link/button labels in the top 35% of `<body>` | Yes - Campuses, In person, Online, Our campuses | Adobe Fonts (Typekit); Google: Outfit -- none declared (RM yes) |
| 10 | The Nueva School | https://www.nuevaschool.org/ | Education - elite K-12, gifted | Named in K5; the closest peer - a school explicitly for gifted learners | `Our Campuses` and `Experts in Gifted Education` sit inside a 102-label menu | **no `<h1>` in markup** (og:title 50 ch) | 102 unique link/button labels in the top 35% of `<body>` | Yes - Campuses, Online, Our campuses | Google: Manrope; Google: Poppins; freight-text-pro styled -- video-hero (RM yes) |
| 11 | The Harker School | https://www.harker.org/ | Education - elite K-12 | Named in K5 | Lower / Middle / Upper School are the only doors offered | **no `<h1>` in markup** (og:title 17 ch) | 32 unique link/button labels in the top 35% of `<body>` | No | Adobe Fonts (Typekit); Google: Outfit -- vimeo/yt-embed (RM yes) |
| 12 | Phillips Exeter Academy | https://exeter.edu/ | Education - elite K-12 boarding | Named in K5 | Lyon Display and Lyon Text self-hosted - a real editorial pairing, rare in this cohort | `Home` = 4 ch (**a label, not a headline**) | 70 unique link/button labels in the top 35% of `<body>` | Yes - Virtual | LyonDisplay; LyonText -- swiper, scrollmagic, video-hero (**RM no**) |
| 13 | The Dalton School | https://www.dalton.org/ | Education - elite K-12 | Named in K5 | Two CTAs above the fold (`Apply`, search) - the most restrained of the elite K-12 set | **no `<h1>` in markup** (og:title 64 ch) | 65 unique link/button labels in the top 35% of `<body>` | Yes - Online | Adobe Fonts (Typekit) -- video-hero (**RM no**) |
| 14 | Trinity School NYC | https://www.trinityschoolnyc.org/ | Education - elite K-12 | Named in K5 | Lora as the display face; no motion library at all | **no `<h1>` in markup** (og:title 53 ch) | 82 unique link/button labels in the top 35% of `<body>` | Yes - Online | Google: Lora -- none declared (**RM no**) |
| 15 | Horace Mann School | https://www.horacemann.org/ | Education - elite K-12 | Named in K5 | `<h1>Our Mission</h1>` - the only school in the set whose h1 is a statement, not a label | "Our Mission" = 11 ch | 135 unique link/button labels in the top 35% of `<body>` | Yes - Campuses, Online, Virtual | Google: Outfit -- none declared (RM yes) |
| 16 | Groton School | https://www.groton.org/ | Education - elite K-12 boarding | Finalsite, Best Independent School Websites - custom historical timelines | Four Google families loaded (Outfit, Gabarito, Rethink Sans, Zen Antique) on one page | `Home` = 4 ch (**a label, not a headline**) | 157 unique link/button labels in the top 35% of `<body>` | Yes - Online | Google: Outfit; Google: Gabarito; Google: Rethink Sans; Google: Zen Antique -- video-hero (RM yes) |
| 17 | Shady Side Academy | https://www.shadysideacademy.org/ | Education - elite K-12 | Finalsite list - `movement, message, and meaning together` | GSAP plus Lottie, and the only Finalsite school in the set that ships both | `Home` = 4 ch (**a label, not a headline**) | 68 unique link/button labels in the top 35% of `<body>` | Yes - On campus | Google: Outfit; Google: Anton; Google: Fraunces; Google: Geologica -- gsap, lottie, video-hero (RM yes) |
| 18 | Colorado Academy | https://www.coloradoacademy.org/ | Education - elite K-12 | Finalsite list - interactive campus map | 176 above-fold labels - the densest school homepage measured | "Colorado Academy Home" = 21 ch | 176 unique link/button labels in the top 35% of `<body>` | No | Google: Oswald; Google: Poppins -- video-hero (RM yes) |
| 19 | The Paideia School | https://www.paideiaschool.org/ | Education - elite K-12 | Finalsite list - animated snake as a visual thread | Cormorant Garamond + DM Serif Display: two display serifs competing | `Home` = 4 ch (**a label, not a headline**) | 52 unique link/button labels in the top 35% of `<body>` | Yes - Online | Google: Outfit; Google: Cormorant Garamond; Google: DM Serif Display -- video-hero (RM yes) |
| 20 | The Bryn Mawr School | https://www.brynmawrschool.org/ | Education - elite K-12 | Finalsite list - Community Voices video dropdown | Six CTA words above the fold including two spellings of `Request Info` | `Home` = 4 ch (**a label, not a headline**) | 66 unique link/button labels in the top 35% of `<body>` | Yes - Online | Avenir; Google: Outfit; Google: Merriweather; Google: Open Sans -- none declared (RM yes) |
| 21 | Laguna Blanca School | https://www.lagunablanca.org/ | Education - elite K-12 | Finalsite list - custom program slider | Playwrite US Trad (a handwriting face) loaded as a display font | `Home` = 4 ch (**a label, not a headline**) | 68 unique link/button labels in the top 35% of `<body>` | Yes - Campuses | Google: Outfit; Google: Playwrite US Trad; Adobe Fonts (Typekit) -- video-hero (RM yes) |
| 22 | Vail Mountain School | https://www.vms.edu/ | Education - elite K-12 | Finalsite list - full-width parallax | Libre Franklin + Libre Caslon Text: the most disciplined pairing in the Finalsite cohort | `Home` = 4 ch (**a label, not a headline**) | 57 unique link/button labels in the top 35% of `<body>` | No | Google: Libre Franklin; Google: Libre Caslon Text -- video-hero (RM yes) |
| 23 | Garrison Forest School | https://www.gfs.org/ | Education - elite K-12 | Finalsite list - gentle animation through trees | 142 above-fold labels behind a `Quicklinks` tray | `Home` = 4 ch (**a label, not a headline**) | 142 unique link/button labels in the top 35% of `<body>` | No | Adobe Fonts (Typekit); Active; Montserrat; Google: Outfit -- video-hero (RM yes) |
| 24 | Khan Lab School | https://khanlabschool.org/ | Education - K-12, mastery model | Direct peer: a mastery-based, non-age-graded school | GSAP + ScrollMagic with `prefers-reduced-motion` declared in the HTML | **no `<h1>` in markup** (og:title 15 ch) | 39 unique link/button labels in the top 35% of `<body>` | Yes - Online | Google: Lora; Google: proxima-nova; Google: Work Sans; mwCustom_light -- gsap, slick/flickity, scrollmagic; CSS only (RM yes) |
| 25 | Stanford Online High School | https://onlinehighschool.stanford.edu/ | Education - online 7-12, selective | Named in `18` K7; the nearest selective online-school competitor | `Enrollment Options` is a named nav item - the delivery choice is treated as a first-class decision | "Stanford Online High School" = 27 ch | 58 unique link/button labels in the top 35% of `<body>` | Yes - Find a school, Locations, Online, Virtual | spcs; fcl; lg; SourceSansPro -- none declared (RM yes) |
| 26 | Laurel Springs School | https://laurelsprings.com/ | Education - online K-12 | Direct competitor in online private K-12 | Grade bands (Elementary / Middle / High) are the doors, not delivery mode | "Accredited Online Private K-12 School \| Laurel Springs Sch..." = 61 ch | 40 unique link/button labels in the top 35% of `<body>` | Yes - Online, Virtual | Trirong; Google: Source Sans Pro; Karla; dashicons -- slick/flickity; CSS only (**RM no**) |
| 27 | Crimson Global Academy | https://www.crimsonglobalacademy.school/ | Education - online K-12 | Direct competitor; an online-only selective school | Three named delivery doors: `ONE-ON-ONE LEARNING`, `LIVE GROUP CLASSES`, `ASYNCHRONOUS` | "World-Class Schooling, Your Way" = 31 ch | 18 unique link/button labels in the top 35% of `<body>` | Yes - Online, Virtual | SFMono-Regular; styreneA; styreneA Fallback; SourceSans3A -- vimeo/yt-embed (**RM no**) |
| 28 | Sora Schools | https://soraschools.com/ | Education - online K-12 | Direct competitor in project-based online K-12 | **FETCH FAILED** - curl 403 + WebFetch 403 (Cloudflare `Just a moment...`) | n/a | n/a | n/a | n/a |
| 29 | Wildflower Schools | https://www.wildflowerschools.org/ | Education - Montessori network | A decentralised school network with a different routing problem (audience, not place) | Audience doors: `For Educators`, `For Community Members and Parents`, `For Property Owners` | "Wildflower Schools" = 18 ch | 28 unique link/button labels in the top 35% of `<body>` | No | meiryo; hiragino kaku gothic pro; wf_39c376b1878c411db72caa342; avenir-lt-w01_35-light1475496 -- view-transitions; CSS only (RM yes) |
| 30 | Success Academy | https://www.successacademies.org/ | Education - charter network | Named in `18` K7 brand-architecture case studies | `Apply Now` is the first above-fold control; `See Locations` the second | "SUCCESS ACADEMY" = 15 ch | 29 unique link/button labels in the top 35% of `<body>` | Yes - Locations | AkkuratLL; slick; AkkuratStd; Arimo -- gsap, slick/flickity, scrollmagic, video-hero (**RM no**) |
| 31 | KIPP | https://www.kipp.org/ | Education - charter network | Named in `18` K7 | `Find a KIPP School` is the first link in the document, before the logo | "Joyful, excellent schools educating 125,000 students acros..." = 68 ch | 29 unique link/button labels in the top 35% of `<body>` | No | icons; kipp -- none declared (RM yes) |
| 32 | MIT Admissions | https://mitadmissions.org/ | Education - university admissions | Named in K5 | Illustrated student portraits instead of stock photography; audience doors for first-year vs transfer | "Welcome to MIT Admissions." = 28 ch (visible, via WebFetch); markup h1 = `Home` (4 ch) | 6 (Explore MIT, Learn how to apply, Plan a visit, Read the blogs, Get help, Newsletter) | Yes - Online | MessinaSansWeb; CooperLightBT -- slick/flickity (**RM no**) |
| 33 | Stanford Undergraduate Admission | https://admission.stanford.edu/ | Education - university admissions | Named in K5 | Seven above-fold labels - the leanest admissions homepage measured | "Undergraduate Admission" = 23 ch | 7 unique link/button labels in the top 35% of `<body>` | Yes - Virtual | Source Sans 3; Glyphicons Halflings; Google: Source Serif 4 -- video-hero, vimeo/yt-embed; CSS only (**RM no**) |
| 34 | Caltech Undergraduate Admissions | https://www.admissions.caltech.edu/ | Education - university admissions | Named in K5 | `Go from dream to do.` - a 20-character h1 that is an argument, not a label | "Go from dream to do." = 20 ch | 0 unique link/button labels in the top 35% of `<body>` | Yes - In person, Online, Virtual | SFMono-Regular -- vimeo/yt-embed (RM yes) |
| 35 | Olin College of Engineering | https://www.olin.edu/ | Education - university | Named in K5 | 105 above-fold labels against a 57-char h1 that just repeats the college name twice | **no `<h1>` in markup** (og:title 57 ch) | 105 unique link/button labels in the top 35% of `<body>` | Yes - On campus | none exposed in markup or first 3 stylesheets -- none declared (**RM no**) |
| 36 | Minerva University | https://www.minerva.edu/ | Education - university | Named in K5 | `Learn. Belong. Lead.` set in Chronicle Deck - a 20-char three-beat headline | "Learn. Belong. Lead." = 20 ch | 37 unique link/button labels in the top 35% of `<body>` | No | webflow-icons; Ubuntu; Chronicle Deck Roman; Chronicle Deck Roman Italic -- slick/flickity, webflow-ix2, video-hero; CSS only (**RM no**) |
| 37 | Rhode Island School of Design | https://www.risd.edu/ | Education - art and design school | Numiko and Siteinspire both name it; `gallery-like experience` | A proprietary face (RISD Sans) and nothing else - one typeface carries the whole site | **no `<h1>` in markup** (og:title 29 ch) | 95 unique link/button labels in the top 35% of `<body>` | Yes - Locations, On campus, Online, Virtual | RISD_Sans; icons -- gsap, swiper, scrollmagic, video-hero (**RM no**) |
| 38 | The New School | https://www.newschool.edu/ | Education - university | Pentagram case study; bespoke `Neue` typeface | Neue, an extended bespoke display face, used at display sizes only | **no `<h1>` in markup** (og:title 14 ch) | 121 unique link/button labels in the top 35% of `<body>` | Yes - Online | SFMono-Regular; neue; neue-display-random; neue900 -- none declared (**RM no**) |
| 39 | SOAS University of London | https://www.soas.ac.uk/ | Education - university | Numiko - WCAG 2.2 AA, built around student questions | `Apply for online learning` sits as a peer of the on-campus routes | "Welcome to SOAS" = 15 ch | 67 unique link/button labels in the top 35% of `<body>` | Yes - On campus, Online | Ubuntu; Cantarell; SFMono-Regular; Liberation Mono -- none declared (RM yes) |
| 40 | Imperial College London | https://www.imperial.ac.uk/ | Education - university | Numiko - hero imagery and strategic colour to guide course discovery | A proprietary variable font (ImperialText-VF) plus GSAP | `Home` = 4 ch (**a label, not a headline**) | 59 unique link/button labels in the top 35% of `<body>` | Yes - Campuses, Online | ImperialText; flexslider-icon; ImperialText-VF -- gsap; CSS only (**RM no**) |
| 41 | Harvard University | https://www.harvard.edu/ | Education - university | Numiko - homepage reimagined around one rotating curated topic | Canela + GT America; one curated subject replaces the usual news grid | "Harvard University" = 18 ch | 71 unique link/button labels in the top 35% of `<body>` | Yes - Locations, Online | core-icons; Canela Web; Canela Deck Web; GT America Standard Bold -- none declared (**RM no**) |
| 42 | Yale School of Architecture | https://www.architecture.yale.edu/ | Education - graduate school | Siteinspire category listing | 18 above-fold labels, Gerstner-Programm + Pitch - the most severe editorial grid in the set | "Yale Architecture" = 17 ch | 18 unique link/button labels in the top 35% of `<body>` | No | gerstner_programmregular; pitch-medium; scp-markdown -- slick/flickity, video-hero (**RM no**) |
| 43 | University of Hull | https://www.hull.ac.uk/ | Education - university | Numiko `Best University Websites 2026` - bold, contemporary, mobile-first | `Our doors are open to unclosed minds` - the door metaphor as the headline, with two CTAs | "Our doors are open to unclosed minds" = 45 ch (visible, via WebFetch); markup h1 37 ch | 2 (Book an open day, See all courses) | Yes - Online | SFMono-Regular; Signifier; Suisse Intl; Suisse Mono -- none declared (**RM no**) |
| 44 | University of the Arts London | https://www.arts.ac.uk/ | Education - university, 6 colleges | Numiko - striking white-on-black design | Six named colleges as six doors (fetched via WebFetch after curl was blocked) | "Make a life, not just a living" = 29 ch (visible, via WebFetch) | 4 (Apply, Open days and events, International students, Welcome) | No | none exposed in markup or first 3 stylesheets -- none declared (**RM no**) |
| 45 | Ravensbourne University London | https://www.ravensbourne.ac.uk/ | Education - university | Numiko - micro-interactions, animated logo motifs | A proprietary face (Ravensbourne Sans) with no JavaScript motion library at all | "Ravensbourne University" = 23 ch | 65 unique link/button labels in the top 35% of `<body>` | Yes - Online, Tate Modern | Ubuntu; Cantarell; SFMono-Regular; Liberation Mono -- none declared (**RM no**) |
| 46 | VCU School of the Arts | https://arts.vcu.edu/ | Education - art school | Numiko - unexpected colour shifts, playful logo transformations | A `Pause animation` control as the first interactive element after the cookie notice | "VCUarts" = 7 ch | 68 unique link/button labels in the top 35% of `<body>` | Yes - Virtual | aktiv-grotesk; Adobe Fonts (Typekit) -- CSS only (RM yes) |
| 47 | Guildhall School of Music and Drama | https://www.gsmd.ac.uk/ | Education - conservatoire | Numiko - movement and video for performance dynamism | Futura as the institutional face; 126 above-fold labels undo the restraint | "Welcome to Guildhall" = 20 ch | 126 unique link/button labels in the top 35% of `<body>` | Yes - Online | Ubuntu; Cantarell; SFMono-Regular; Liberation Mono -- vimeo/yt-embed (**RM no**) |
| 48 | Academy of Fine Arts, Warsaw | https://asp.waw.pl/ | Education - art academy | Siteinspire category listing | An explicit `Wlacz/wylacz animacje` (animation on/off) control in the accessibility tray | "Akademia Sztuk Pięknych w Warszawie" = 35 ch | 85 unique link/button labels in the top 35% of `<body>` | Yes - Online | Roobert; RoobertTRIAL -- swiper (**RM no**) |
| 49 | Whitecliffe | https://www.whitecliffe.ac.nz/ | Education - art and design college | Siteinspire category listing | The only site measured declaring `prefers-reduced-motion` in both HTML and CSS | "Over 40 years of applied, industry-connected learning Our ..." = 112 ch | 37 unique link/button labels in the top 35% of `<body>` | Yes - Online | GTWalsheimPro -- three.js, vimeo/yt-embed; CSS only (RM yes) |
| 50 | Danish National School of Performing Arts | https://ddsks.dk/da | Education - conservatoire | Siteinspire category listing | Nine above-fold labels - the most extreme restraint in the education set | "kom til åbent hus" = 17 ch | 9 unique link/button labels in the top 35% of `<body>` | No | Adobe Fonts (Typekit) -- gsap, slick/flickity (**RM no**) |
| 51 | University of Sussex | https://www.sussex.ac.uk/ | Education - university | Pentagram brand refresh case study | Libre Baskerville against Inter - a serif/sans institutional pairing | **no `<h1>` in markup** (og:title 63 ch) | 92 unique link/button labels in the top 35% of `<body>` | Yes - On campus, Online, Virtual | Inter; garamond; Liberation Mono; Baskerville -- vimeo/yt-embed (**RM no**) |
| 52 | Quinnipiac University | https://www.qu.edu/ | Education - university | Pentagram identity case study (the `Q` monogram) | 194 above-fold labels - the densest page in the whole corpus | "Quinnipiac University" = 21 ch | 194 unique link/button labels in the top 35% of `<body>` | Yes - Campuses, Locations, Online, Virtual | icons_mobiscroll; Atlas Grotesk; lora; Mulish -- swiper (RM yes) |
| 53 | Penn State University | https://www.psu.edu/ | Education - university, campus+online | The campus half of a campus/online pair | `Find Your Fit Quiz` offered as a routing alternative to a campus list | "Celebrating One Million Degrees" = 31 ch | 81 unique link/button labels in the top 35% of `<body>` | Yes - Campuses, Locations, Online | Arial Narrow; Roboto Fallback; Roboto Slab; Roboto Slab Fallback -- video-hero; CSS only (**RM no**) |
| 54 | Penn State World Campus | https://www.worldcampus.psu.edu/ | Education - university online arm | The online half of the Penn State pair | `Earn Your Penn State Degree Online` - the parent brand carried into the headline | "Earn Your Penn State Degree Online" = 34 ch | 0 unique link/button labels in the top 35% of `<body>` | Yes - On campus, Online | Adobe Fonts (Typekit) -- none declared (RM yes) |
| 55 | Northeastern University | https://www.northeastern.edu/ | Education - university, 13 campuses | A university running many campuses plus online | `Experience` as a 10-char h1; reduced-motion honoured in both HTML and CSS | "Experience" = 10 ch | 79 unique link/button labels in the top 35% of `<body>` | Yes - Campuses, Locations, Online | none exposed in markup or first 3 stylesheets -- swiper, vimeo/yt-embed; CSS only (RM yes) |
| 56 | Getty | https://www.getty.edu/ | Calibration - museum, two sites | Two named sites under one brand - the exact GT shape | `Our Locations ... our two unique sites` + two peer CTAs + a `Compare Museums` link | **no `<h1>` in markup** (og:title 53 ch) | 53 unique link/button labels in the top 35% of `<body>` | Yes - Getty Center, Getty Villa, Locations, Virtual | Graphik Web; linotype-sabon; Sabon -- CSS only (**RM no**) |
| 57 | Tate | https://www.tate.org.uk/ | Calibration - museum, four sites | One brand, four named galleries | Four galleries named as peers in the primary nav; a proprietary `Tate` face | "James McNeill Whistler" = 22 ch | 40 unique link/button labels in the top 35% of `<body>` | Yes - Online, Tate Britain, Tate Modern | Tate regular; tateicons; tate-kids--icon; Interstate -- none declared (**RM no**) |
| 58 | MoMA | https://www.moma.org/ | Calibration - museum, two sites | MoMA and MoMA PS1 as two doors | `Visit MoMA PS1` sits inside the Visit menu as a named sibling; MoMA Sans throughout | "Welcome" = 7 ch | 36 unique link/button labels in the top 35% of `<body>` | Yes - Locations, Online | MoMA Sans; MoMA Sans Condensed; moma-sans_ -- swiper, vimeo/yt-embed; CSS only (**RM no**) |
| 59 | Barnes Foundation | https://www.barnesfoundation.org/ | Calibration - museum | AREA 17 case study, cited in the agency's own client list | 17 above-fold labels; Calibre + FF Milo Serif - restraint as the whole design | "Barnes" = 6 ch | 17 unique link/button labels in the top 35% of `<body>` | No | Calibre; FFMiloSerifWebText; xlarge -- none declared (**RM no**) |
| 60 | SFMOMA | https://www.sfmoma.org/ | Calibration - museum | A proprietary variable typeface programme | SFMOMA Sans VF - one variable face doing display and text | "San Francisco Museum of Modern Art" = 34 ch | 21 unique link/button labels in the top 35% of `<body>` | No | sfmoma-icons; tickets; membership; SFMOMASans -- none declared (RM yes) |
| 61 | The Met | https://www.metmuseum.org/ | Calibration - museum, two sites | Fifth Avenue and The Cloisters - a two-door museum | **FETCH FAILED** - curl 429 + WebFetch 429 (Vercel Security Checkpoint challenge page returned, 32,183 bytes of challenge markup, no content) | n/a | n/a | n/a | n/a |
| 62 | Art Institute of Chicago | https://www.artic.edu/ | Calibration - museum | AREA 17 client | **FETCH FAILED** - curl 403 + WebFetch 403 (Cloudflare `Just a moment...` interstitial) | n/a | n/a | n/a | n/a |
| 63 | Alaska Airlines | https://www.alaskaair.com/ | Calibration - airline | Booking funnel: route a visitor to one task fast | A 69-char h1 stuffed with keywords; reduced-motion declared in the HTML | "Alaska Airlines - Flight Deals and Cheap Airline Tickets -..." = 69 ch | 0 unique link/button labels in the top 35% of `<body>` | No | AS Circular Book; AS Circular Light; Geneva; ASCircular -- CSS only (RM yes) |
| 64 | SWISS | https://www.swiss.com/ | Calibration - airline | Awwwards Site of the Day for `World of Swiss` | **FETCH FAILED** - curl 403 + WebFetch 403 (`Security check ... resembles that of a bot`, ref #a3930a14d8d68c9b) | n/a | n/a | n/a | n/a |
| 65 | KLM Royal Dutch Airlines | https://www.klm.com/ | Calibration - airline | Booking funnel routing | **FETCH FAILED** - curl connection failure (no response, two attempts, .com and .nl) | n/a | n/a | n/a | n/a |
| 66 | Cleveland Clinic | https://my.clevelandclinic.org/ | Calibration - health system, 6 regions | Six named locations routed from one header | Region names (Abu Dhabi, Canada, Florida, London, Nevada, Ohio) are the first six links in the document | "We’re here when you need us — for every care in the world." = 58 ch | 178 unique link/button labels in the top 35% of `<body>` | Yes - Locations, Online, Virtual | __Roboto_a857ad; __Roboto_Fallback_a857ad; __Source_Sans_3_8bd802; __Source_Sans_3_Fallback_8bd802 -- video-hero (RM yes) |
| 67 | Mayo Clinic | https://www.mayoclinic.org/ | Calibration - health system | Three named campuses | **FETCH FAILED** - curl 403 + WebFetch ECONNREFUSED (Akamai `Access Denied`, ref #18.6e24c317) | n/a | n/a | n/a | n/a |
| 68 | Johns Hopkins Medicine | https://www.hopkinsmedicine.org/ | Calibration - health system | Multi-site academic medical centre | **FETCH FAILED** - curl 403 (Cloudflare `Attention Required!`) | n/a | n/a | n/a | n/a |
| 69 | Vanguard | https://investor.vanguard.com/ | Calibration - finance, audience doors | Personal / advisor / institutional routing | A `Compare services` link offered beside the doors -- unlike Getty's own menu-gated version (F2, `CONCEPTS-B.md`) | "Investing for everything it's worth" = 35 ch | 16 unique link/button labels in the top 35% of `<body>` | Yes - Online | FF Mark; FF Mark Narrow; Thorndale; Univers-Basic-Light -- none declared (RM yes) |
| 70 | Fidelity | https://www.fidelity.com/ | Calibration - finance | Personal vs workplace routing | Proprietary Fidelity Sans and Fidelity Slab; reduced-motion in HTML and CSS | "Invest today and plan for tomorrow" = 34 ch | 55 unique link/button labels in the top 35% of `<body>` | Yes - Online | Fidelity Sans; Fidelity Slab; FidelitySans -- scrollreveal; CSS only (RM yes) |
| 71 | American Express | https://www.americanexpress.com/ | Calibration - finance, two brands | Personal and Business as sibling doors | `Cards / Banking / Travel / Rewards / Business` - five peer doors in one bar | **no `<h1>` in markup** (og:title 48 ch) | 41 unique link/button labels in the top 35% of `<body>` | Yes - Online | Helvetica Medium; Lucida Grande; Roboto Medium; BentonSans -- CSS only (RM yes) |
| 72 | NatWest Group | https://www.natwestgroup.com/ | Calibration - bank holding two brands | A group site sitting above its consumer brands | The group site never sells - it routes only, which is what an umbrella page does | "NatWest Group" = 13 ch | 85 unique link/button labels in the top 35% of `<body>` | Yes - Online | SFMono-Regular; nw-icons; RNHouseSansW01 -- vimeo/yt-embed (RM yes) |
| 73 | Equinox | https://www.equinox.com/ | Calibration - two-brand lifestyle | Equinox and Equinox Hotels under one header | `Find A Club` as the single routing verb; exclusivity carried by restraint, not price | "The Equinox Sale" = 16 ch | 40 unique link/button labels in the top 35% of `<body>` | No | Bold; Regular; Light; Medium -- video-hero (RM yes) |
| 74 | Marriott | https://www.marriott.com/ | Calibration - multi-brand hospitality | Many sub-brands under one booking surface | **FETCH FAILED** - curl 403 (Akamai `Access Denied`, ref #18.8f24c317) | n/a | n/a | n/a | n/a |
| 75 | Stripe | https://stripe.com/ | Calibration - product craft | The reference for institutional web craft | A 172-char hero that is a paragraph, not a headline - a caution, not a model | "Financial infrastructure to grow your revenue. Accept paym..." = 172 ch | 27 unique link/button labels in the top 35% of `<body>` | Yes - In person, Locations, Online | sohne-var; SourceCodePro; Sohne.cb178166 -- none declared (RM yes) |
| 76 | Linear | https://linear.app/ | Calibration - product craft | Named repeatedly in craft essays for restraint | 155-char hero text and only one CTA (`Sign up`) - single-door by design | "The product development system for teams and agents The pr..." = 155 ch | 39 unique link/button labels in the top 35% of `<body>` | No | none exposed in markup or first 3 stylesheets -- CSS only (**RM no**) |
| 77 | Basecamp | https://basecamp.com/ | Calibration - product craft | A long-running example of plain-spoken restraint | 14 above-fold labels; Graphik + Sharpie + Berkeley Mono | "The refreshingly straightforward project management system..." = 93 ch | 14 unique link/button labels in the top 35% of `<body>` | No | Graphik; Sharpie; Berkeley Mono; Monaspace -- none declared (**RM no**) |
| 78 | Every | https://every.to/ | Calibration - editorial | Editorial site routing readers into several named columns | Seven named columns presented as doors, each with a one-line description | "What comes After automation?" = 28 ch (visible, via WebFetch); **no `<h1>` in markup** | 2 (Explore Thesis: 2027, Read Thesis Statements) | No | Switzer; Open Runde; Inter var; SFMono-Regular -- video-hero (RM yes) |
| 79 | Pentagram | https://www.pentagram.com/ | Calibration - design agency | The agency behind The New School, Sussex and Quinnipiac identities | Sector doors (`Education`, `Civic & Public`) as the primary routing | "Pentagram" = 9 ch | 78 unique link/button labels in the top 35% of `<body>` | No | SFMono-Regular; Liberation Mono; Plain; NeueHaas -- swiper, slick/flickity, video-hero, vimeo/yt-embed (RM yes) |
| 80 | AREA 17 | https://area17.com/ | Calibration - design agency | The agency behind Barnes and Art Institute of Chicago | A 117-char h1 that states the proposition in one sentence; Suisse Intl + Suisse Works | "We partner with the world’s most influential organizations..." = 117 ch | 27 unique link/button labels in the top 35% of `<body>` | Yes - Online | SFMono-Regular; Liberation Mono; SuisseIntl; SuisseWorks -- video-hero (RM yes) |
| 81 | COLLINS | https://wearecollins.com/ | Calibration - design agency | Named in agency round-ups for brand craft | `Rewrite your worth.` - a 19-char h1 and two CTAs, then four named programme doors | "Rewrite your worth." = 19 ch (visible, via WebFetch); markup h1 19 ch | 2 (Explore Programs, Explore case studies) | No | Graphik; Portrait Text; portrait-text -- view-transitions; CSS only (**RM no**) |

### F7. Scores

Each of the 73 fetched candidates is scored 1 to 5 on six rows. The 8 failed fetches are not scored.

**Provisional scores now superseded for 24 rows.** See the update note in F0: rendered captures and concept-catalog analysis (`0_plan/kb/CONCEPTS-A.md` to `CONCEPTS-D.md`, `0_plan/kb/exemplars/`) now exist for this file's whole twenty-site shortlist (F8) plus Success Academy, Caltech Undergraduate Admissions, Nord Anglia Education and Vanguard. For those 24 rows, treat the Comp and Img columns below as superseded by the rendered analysis; this rework does not re-score them. The remaining 49 scored rows stay provisional pending capture.

| Row | What a 5 means | Evidence class |
|---|---|---|
| Comp (composition) | A grid, a rhythm and a hierarchy a designer would recognise; every section has a reason to look as it does | **Provisional for 49 of 73.** Inferred from density, structure and citation, pending screenshots. Superseded for 24 rows by rendered captures -- see the note above |
| Type (typography) | A deliberate pairing and scale; a display face with personality that does not hurt reading | Measured from declared `font-family` and `@font-face` |
| Img (imagery) | Photographs carry weight and are specific to the institution; no stock | **Provisional for 49 of 73.** Inferred from hero markup and citation, pending screenshots. Superseded for 24 rows by rendered captures -- see the note above |
| Routing | A visitor can tell in seconds which door is theirs, and act | Measured from door structure and above-fold labels |
| Restraint | Nothing on the page that does not earn its place | Measured from label counts, CTA counts and motion payload |
| Relevance | How closely this page's job resembles GT's: route a parent to a selective campus school or a selective online school | Judgment against `00-context.md` facts 1 to 5 |

| Rank | # | Site | Kind | Comp | Type | Img | Routing | Restraint | Relevance | Total |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 81 | COLLINS | Calibration | 5 | 5 | 5 | 5 | 5 | 3 | **28** |
| 2 | 56 | Getty | Calibration | 5 | 4 | 5 | 5 | 4 | 5 | **28** |
| 3 | 59 | Barnes Foundation | Calibration | 5 | 5 | 5 | 3 | 5 | 4 | **27** |
| 4 | 58 | MoMA | Calibration | 5 | 5 | 5 | 4 | 4 | 4 | **27** |
| 5 | 43 | University of Hull | Education | 4 | 5 | 4 | 5 | 5 | 4 | **27** |
| 6 | 78 | Every | Calibration | 5 | 5 | 4 | 5 | 4 | 3 | **26** |
| 7 | 79 | Pentagram | Calibration | 5 | 5 | 5 | 4 | 4 | 2 | **25** |
| 8 | 57 | Tate | Calibration | 4 | 4 | 5 | 5 | 3 | 4 | **25** |
| 9 | 42 | Yale School of Architecture | Education | 5 | 5 | 4 | 3 | 5 | 3 | **25** |
| 10 | 41 | Harvard University | Education | 5 | 5 | 4 | 3 | 4 | 4 | **25** |
| 11 | 32 | MIT Admissions | Education | 4 | 4 | 5 | 4 | 4 | 4 | **25** |
| 12 | 27 | Crimson Global Academy | Education | 4 | 4 | 3 | 5 | 4 | 5 | **25** |
| 13 | 4 | Avenues: The World School | Education | 4 | 3 | 4 | 4 | 5 | 5 | **25** |
| 14 | 80 | AREA 17 | Calibration | 5 | 5 | 4 | 3 | 4 | 2 | **23** |
| 15 | 73 | Equinox | Calibration | 4 | 3 | 5 | 3 | 4 | 4 | **23** |
| 16 | 60 | SFMOMA | Calibration | 4 | 5 | 4 | 3 | 4 | 3 | **23** |
| 17 | 37 | Rhode Island School of Design | Education | 4 | 5 | 5 | 3 | 3 | 3 | **23** |
| 18 | 12 | Phillips Exeter Academy | Education | 4 | 5 | 4 | 3 | 3 | 4 | **23** |
| 19 | 1 | Arizona State University | Education | 4 | 2 | 3 | 5 | 4 | 5 | **23** |
| 20 | 44 | University of the Arts London | Education | 4 | 4 | 4 | 4 | 3 | 3 | **22** |
| 21 | 38 | The New School | Education | 4 | 5 | 4 | 3 | 3 | 3 | **22** |
| 22 | 77 | Basecamp | Calibration | 4 | 4 | 3 | 3 | 5 | 2 | **21** |
| 23 | 76 | Linear | Calibration | 5 | 4 | 4 | 2 | 4 | 2 | **21** |
| 24 | 50 | Danish National School of Performing Arts | Education | 4 | 4 | 4 | 2 | 5 | 2 | **21** |
| 25 | 48 | Academy of Fine Arts, Warsaw | Education | 4 | 4 | 4 | 3 | 4 | 2 | **21** |
| 26 | 36 | Minerva University | Education | 4 | 4 | 3 | 3 | 3 | 4 | **21** |
| 27 | 34 | Caltech Undergraduate Admissions | Education | 4 | 3 | 3 | 3 | 4 | 4 | **21** |
| 28 | 33 | Stanford Undergraduate Admission | Education | 3 | 3 | 3 | 3 | 5 | 4 | **21** |
| 29 | 75 | Stripe | Calibration | 5 | 5 | 4 | 2 | 2 | 2 | **20** |
| 30 | 55 | Northeastern University | Education | 4 | 3 | 4 | 3 | 3 | 3 | **20** |
| 31 | 8 | Green School | Education | 3 | 2 | 4 | 4 | 4 | 3 | **20** |
| 32 | 54 | Penn State World Campus | Education | 3 | 3 | 3 | 3 | 3 | 4 | **19** |
| 33 | 46 | VCU School of the Arts | Education | 4 | 3 | 4 | 3 | 3 | 2 | **19** |
| 34 | 29 | Wildflower Schools | Education | 3 | 3 | 3 | 4 | 3 | 3 | **19** |
| 35 | 25 | Stanford Online High School | Education | 3 | 3 | 2 | 4 | 2 | 5 | **19** |
| 36 | 24 | Khan Lab School | Education | 3 | 3 | 3 | 3 | 3 | 4 | **19** |
| 37 | 22 | Vail Mountain School | Education | 3 | 4 | 3 | 3 | 3 | 3 | **19** |
| 38 | 13 | The Dalton School | Education | 3 | 3 | 3 | 2 | 4 | 4 | **19** |
| 39 | 5 | Nord Anglia Education | Education | 3 | 2 | 3 | 4 | 3 | 4 | **19** |
| 40 | 69 | Vanguard | Calibration | 3 | 3 | 2 | 4 | 3 | 3 | **18** |
| 41 | 45 | Ravensbourne University London | Education | 3 | 4 | 3 | 3 | 3 | 2 | **18** |
| 42 | 40 | Imperial College London | Education | 3 | 4 | 3 | 3 | 2 | 3 | **18** |
| 43 | 39 | SOAS University of London | Education | 3 | 3 | 3 | 4 | 2 | 3 | **18** |
| 44 | 11 | The Harker School | Education | 2 | 3 | 3 | 3 | 3 | 4 | **18** |
| 45 | 3 | Dwight School | Education | 2 | 3 | 2 | 4 | 2 | 5 | **18** |
| 46 | 2 | ASU Online | Education | 3 | 2 | 3 | 4 | 2 | 4 | **18** |
| 47 | 72 | NatWest Group | Calibration | 3 | 3 | 2 | 3 | 3 | 3 | **17** |
| 48 | 31 | KIPP | Education | 3 | 2 | 3 | 4 | 3 | 2 | **17** |
| 49 | 30 | Success Academy | Education | 3 | 3 | 3 | 3 | 2 | 3 | **17** |
| 50 | 66 | Cleveland Clinic | Calibration | 3 | 2 | 3 | 4 | 1 | 3 | **16** |
| 51 | 53 | Penn State University | Education | 3 | 2 | 3 | 3 | 2 | 3 | **16** |
| 52 | 51 | University of Sussex | Education | 3 | 3 | 3 | 3 | 2 | 2 | **16** |
| 53 | 49 | Whitecliffe | Education | 3 | 3 | 3 | 3 | 2 | 2 | **16** |
| 54 | 17 | Shady Side Academy | Education | 3 | 2 | 3 | 3 | 2 | 3 | **16** |
| 55 | 14 | Trinity School NYC | Education | 2 | 3 | 3 | 2 | 3 | 3 | **16** |
| 56 | 26 | Laurel Springs School | Education | 2 | 2 | 2 | 3 | 2 | 4 | **15** |
| 57 | 10 | The Nueva School | Education | 2 | 2 | 3 | 2 | 1 | 5 | **15** |
| 58 | 6 | BASIS Independent Schools | Education | 2 | 2 | 2 | 3 | 2 | 4 | **15** |
| 59 | 20 | The Bryn Mawr School | Education | 2 | 2 | 3 | 2 | 2 | 3 | **14** |
| 60 | 19 | The Paideia School | Education | 2 | 2 | 3 | 2 | 2 | 3 | **14** |
| 61 | 71 | American Express | Calibration | 2 | 3 | 2 | 3 | 2 | 1 | **13** |
| 62 | 70 | Fidelity | Calibration | 2 | 4 | 2 | 2 | 1 | 2 | **13** |
| 63 | 63 | Alaska Airlines | Calibration | 2 | 3 | 2 | 3 | 2 | 1 | **13** |
| 64 | 47 | Guildhall School of Music and Drama | Education | 2 | 3 | 3 | 2 | 1 | 2 | **13** |
| 65 | 15 | Horace Mann School | Education | 2 | 2 | 3 | 2 | 1 | 3 | **13** |
| 66 | 9 | Lakeside School | Education | 2 | 2 | 3 | 2 | 1 | 3 | **13** |
| 67 | 52 | Quinnipiac University | Education | 2 | 3 | 3 | 1 | 1 | 2 | **12** |
| 68 | 21 | Laguna Blanca School | Education | 2 | 1 | 3 | 2 | 2 | 2 | **12** |
| 69 | 16 | Groton School | Education | 2 | 1 | 3 | 2 | 1 | 3 | **12** |
| 70 | 35 | Olin College of Engineering | Education | 2 | 1 | 2 | 2 | 1 | 2 | **10** |
| 71 | 23 | Garrison Forest School | Education | 1 | 2 | 3 | 1 | 1 | 2 | **10** |
| 72 | 18 | Colorado Academy | Education | 1 | 2 | 3 | 1 | 1 | 2 | **10** |
| 73 | 7 | GEMS Education | Education | 1 | 2 | 2 | 2 | 1 | 2 | **10** |

### F8. The shortlist: the twenty worth the studio's time

The top twenty by total score. All twenty are now rendered and catalogued (`0_plan/kb/CONCEPTS-A.md` to `CONCEPTS-D.md`, `0_plan/kb/exemplars/`; see the note in F7); the Comp and Img columns behind this ranking are superseded there, and this rework does not re-rank the list from renders.

By kind, the twenty split evenly: ten education sites, ten calibration references from other sectors (corrected; this section originally miscounted the split as nine and eleven). The craft gap is a finding about concentration, not an overall imbalance: the top four places, and seven of the top nine, go to calibration references (museums, an agency, an editorial site) -- education's best showing, University of Hull, ranks fifth. By the full twenty the count evens out, but the sector that shares GT's job still does not reach the very top of this corpus as often as museums, agencies and editorial products do.

| Rank | # | Site | Kind | Total | Why it is on the shortlist |
|---|---|---|---|---|---|
| 1 | 81 | COLLINS | Calibration | 28 | The ceiling for restraint: a 19-character headline, two CTAs, then four named doors |
| 2 | 56 | Getty | Calibration | 28 | The closest working model of GT's exact problem: two named doors and a compare link -- though rendered review shows Getty itself keeps the compare link a scroll and a menu away from the doors, not beside them (F2) |
| 3 | 59 | Barnes Foundation | Calibration | 27 | 17 above-fold labels. Restraint is the entire design |
| 4 | 58 | MoMA | Calibration | 27 | A proprietary face carrying display and text, with a second site named as a sibling |
| 5 | 43 | University of Hull | Education | 27 | The door metaphor as the headline, two CTAs, and a real editorial type pairing |
| 6 | 78 | Every | Calibration | 26 | Seven named doors, each with a one-line description. The cleanest multi-door page found |
| 7 | 79 | Pentagram | Calibration | 25 | Sector doors as primary navigation, at an institution that cannot afford to look generic |
| 8 | 57 | Tate | Calibration | 25 | Four sites named as peers in the primary nav under one brand |
| 9 | 42 | Yale School of Architecture | Education | 25 | 18 above-fold labels and a severe editorial grid. The corpus ceiling for composition |
| 10 | 41 | Harvard University | Education | 25 | One curated topic replaces the news grid. Canela and GT America |
| 11 | 32 | MIT Admissions | Education | 25 | Illustration instead of stock photography, with audience doors |
| 12 | 27 | Crimson Global Academy | Education | 25 | A selective online school naming three delivery doors explicitly |
| 13 | 4 | Avenues: The World School | Education | 25 | A selective multi-campus K-12 that routes in 17 labels |
| 14 | 80 | AREA 17 | Calibration | 23 | A 117-character `<h1>` that states the whole proposition in one sentence |
| 15 | 73 | Equinox | Calibration | 23 | Exclusivity carried by restraint and imagery, never by price |
| 16 | 60 | SFMOMA | Calibration | 23 | One variable face doing display and text |
| 17 | 37 | Rhode Island School of Design | Education | 23 | One proprietary typeface carries the whole site |
| 18 | 12 | Phillips Exeter Academy | Education | 23 | Lyon Display and Lyon Text: the only elite K-12 site with an editorial type pairing |
| 19 | 1 | Arizona State University | Education | 23 | The campus-or-online switch, working, on one page |
| 20 | 44 | University of the Arts London | Education | 22 | Six colleges as six doors under one masterbrand |

Beside these, four low-scoring pages are compulsory reading for **mechanism only**, per F5: Dwight School (#3), Nueva (#10), Stanford Online High School (#25) and Nord Anglia (#5).

### F9. What to learn and what to avoid, per shortlist entry

**1. COLLINS (calibration, agency).** Learn: the headline is `Rewrite your worth.` at 19 characters, followed by two CTAs and then four named programme doors (`Brand Refresh`, `Reposition`, `Expansion`, `Turnaround`). A short declarative headline plus a small set of named doors is the entire first screen, and it reads as more confident than any school page in the corpus. The type is Graphik with Portrait Text, a grotesque paired with a display serif, which is close to what Inter Tight and Literata can do for GT. Avoid: COLLINS sells to a professional buyer who already knows the category. Its doors assume vocabulary. GT's parent does not know what "Anywhere" means, so GT's door labels must name the thing, not the offer.

**2. Getty (calibration, museum with two sites).** Learn: everything about the routing. `Our Locations`, one shared sentence (`our two unique sites`), two peer CTAs, and a `Compare Museums` link for the parent who cannot choose. Graphik Web with Linotype Sabon. CSS-only motion, no library. Avoid: Getty's `<h1>` is missing entirely, and it declares no `prefers-reduced-motion` despite shipping keyframe animations. Also avoid the depth: rendered review (`0_plan/kb/CONCEPTS-B.md`) found the compare link hover-gated inside the Visit menu and the two doors one scroll below the first screen -- never together in any of the four captures. Copy the routing pattern's words, not its markup hygiene or its depth; GT's sentence, both doors and its compare anchor belong in one screen, which Getty itself does not manage.

**3. Barnes Foundation (calibration, museum).** Learn: 17 unique above-fold labels, Calibre with FF Milo Serif Text, and a 6-character `<h1>`. Barnes proves an institution can be serious without a mega menu. This is the answer to every "but we need everything in the nav" argument the GT landing will face. Avoid: Barnes routes to one building. Its restraint is cheaper than GT's, because GT must still make a choice legible. Do not copy the navigation depth, only the discipline.

**4. MoMA (calibration, museum with two sites).** Learn: MoMA Sans and MoMA Sans Condensed carry display and text, and `Visit MoMA PS1` sits inside the Visit menu as a named sibling rather than a footer afterthought. A second site can be a peer without being a co-equal headline. Avoid: MoMA loads Swiper and embeds video with no `prefers-reduced-motion`. Also, the second site is buried one level down, which works for a museum and would fail for GT, where the two doors are the whole point of the page.

**5. University of Hull (education, university).** Learn: the strongest headline in the corpus for GT's purposes, `Our doors are open to unclosed minds` at 45 characters, with exactly two CTAs above the fold (`Book an open day`, `See all courses`) and 22 above-fold labels. Signifier with Suisse Intl is a genuine editorial pairing at an institution. Six study routes are offered without a mega menu. Avoid: Hull's positioning is open access, the opposite of GT's. The door metaphor is worth borrowing; the "doors are open to everyone" sentiment is not, because GT is 90th percentile and above (fact 2, MD-25).

**6. Every (calibration, editorial).** Learn: seven named columns, each with one line of description under the name. That is the pattern for a door that must explain itself, and it is what GT's two doors need if a parent is to tell Georgetown from Anywhere without clicking. The headline is 28 characters. Switzer with Open Runde. Avoid: Every's doors are content categories a reader browses. GT's doors are a decision a parent makes once. GT can afford fewer words per door but must be more explicit about who each is for.

**7. Pentagram (calibration, agency).** Learn: the primary routing is sector doors (`Education`, `Civic & Public`, `Arts & Culture`), and the 9-character `<h1>` is just the name, which works because the grid does the talking. Avoid: Pentagram's audience arrives already interested. It never has to persuade in the first screen. GT does.

**8. Tate (calibration, museum with four sites).** Learn: Tate Modern, Tate Britain, Tate St Ives and Tate Liverpool are named as peers in the primary nav under one masterbrand, with a proprietary `Tate` face. This is the direct answer to DD-21: the pattern scales past two without redesign. Avoid: 40 above-fold labels and no `prefers-reduced-motion`. Also, Tate's sites are interchangeable for a visitor choosing an afternoon; GT's are not interchangeable at all, so GT must do more to make the choice consequential.

**9. Yale School of Architecture (education, graduate school).** Learn: 18 above-fold labels, Gerstner-Programm with Pitch, and a `Pause` control as a first-class interactive element. The most severe editorial composition in the corpus, and the right calibration for a 5 on the Composition row of the `17` section 6 rubric. Avoid: it declares motion with no `prefers-reduced-motion`, and its severity suits a graduate audience that reads architecture as a signal. A K-8 parent will read the same severity as cold. Borrow the grid, warm the tone.

**10. Harvard University (education).** Learn: the homepage is built around one rotating curated topic instead of a news grid, which is the single biggest lesson available for GT's second screen: choose one thing to say, not six. Canela with GT America is a display serif and grotesque pairing with the same job as Literata and Inter Tight. Avoid: Harvard can lead with curiosity because its credibility needs no work. GT must answer "who is this for" before it earns the right to be interesting.

**11. MIT Admissions (education, university admissions).** Learn: illustrated student portraits instead of photography, which is the single most useful precedent for Nari's ban on stock photography and for the escalated home-learning photo (DD-08, DD-31). It also splits audiences into named doors (first-year, transfer, parents and educators). Avoid: `<h1>Home</h1>`, Slick carousel with no `prefers-reduced-motion`, and 6 CTAs above the fold, which is at least three too many for a routing page.

**12. Crimson Global Academy (education, online K-12).** Learn: the nearest direct competitor to GT Anywhere, and it names three delivery doors explicitly (`ONE-ON-ONE LEARNING`, `LIVE GROUP CLASSES`, `ASYNCHRONOUS`) rather than making a parent infer them. 18 above-fold labels, Styrene A. Avoid: the headline `World-Class Schooling, Your Way` is a claim with no support and would need a claims-register row under REQ-022 before GT wrote anything like it. No `prefers-reduced-motion`.

**13. Avenues: The World School (education, multi-campus K-12).** Learn: a selective K-12 routing to two named campuses in 17 above-fold labels, with `Campuses > New York / Sao Paulo` as the whole router and an 18-character `<h1>`. The proof that a selective school can route without a mega menu. Avoid: Avenues Online exists but is not surfaced as a peer of the campuses, so the page does exactly what GT must not do, which is treat the online school as a lesser door.

**14. AREA 17 (calibration, agency).** Learn: the `<h1>` is a 117-character sentence that states the whole proposition, and it works because nothing else competes with it. Suisse Intl with Suisse Works. A useful counterexample to the "headlines must be short" rule: long is fine if it is the only thing on the screen. Avoid: 27 above-fold labels is lean for an agency and would still be heavy for a routing page, and the proposition-as-headline approach assumes a reader who will finish the sentence.

**15. Equinox (calibration, two-brand lifestyle).** Learn: how exclusivity reads without price. Equinox and Equinox Hotels sit under one header, `Find A Club` is the single routing verb, and the whole signal is carried by imagery and restraint. This is the closest the corpus comes to `0_plan/08` principle 3. Avoid: Equinox's exclusivity is aspirational and body-focused, which is precisely the wealth cue GT must not import. Take the mechanism (one verb, one router, no price), reject the register.

**16. SFMOMA (calibration, museum).** Learn: SFMOMA Sans VF, one variable face doing display and text, with 21 above-fold labels. The strongest argument in the corpus for GT spending its type budget on one family used well rather than three families used adequately. Avoid: SFMOMA routes to one building, so it offers nothing on the door problem.

**17. Rhode Island School of Design (education, art school).** Learn: RISD Sans and nothing else. Named by both Numiko and Siteinspire for its gallery-like restraint. Proof that a single proprietary face can carry an institution's whole personality. Avoid: no `<h1>` at all, 95 above-fold labels, and GSAP plus Swiper plus ScrollMagic with no `prefers-reduced-motion`. The reputation is better than the markup.

**18. Phillips Exeter Academy (education, elite K-12).** Learn: Lyon Display and Lyon Text, self-hosted. The only school in the elite K-12 cohort with a real editorial pairing rather than a Google Fonts default, and the proof that the GT landing's Literata plus Inter Tight stack is the right kind of decision for this category. Avoid: `<h1>Home</h1>`, 70 above-fold labels, Swiper plus ScrollMagic with no `prefers-reduced-motion`, and a first screen that offers `Apply`, `Visit`, `Admissions`, `Explore`, `Contact Us` and `Book` at once.

**19. Arizona State University (education, campus plus online).** Learn: the mechanism in F4. One page, an `In Person` / `Online` tab pair, and the same seven audience doors behind each pointing at different hosts. 16 above-fold labels. This is the closest thing to a working prototype of the GT landing that exists. Avoid: the type stack is Nimbus Sans L and FreeSans, the weakest on the shortlist, and the tabs mean neither door is linkable on its own, which GT needs for ad message match (K8, REQ-024). Copy the structure, then give each door a URL.

**20. University of the Arts London (education, six colleges).** Learn: six named colleges as six doors under one masterbrand, with the campaign line `Make a life, not just a living` at 29 characters doing the persuading while the college names do the routing. A clean separation of the two jobs the GT landing must do at once. Avoid: four CTAs before the first content section, and `curl` was refused by Cloudflare, so this row's evidence is a WebFetch rendered read rather than markup.

## Principles

| # | Principle | Traceable to |
|---|---|---|
| P1 | The landing states one shared sentence, then offers two equally weighted doors, then offers a third control for the undecided, all in one place. Not two links and a hope | F2, F3 (Getty is the only site in 73 whose text names all three elements -- a shared sentence, two doors, a compare link -- though rendered review shows Getty itself splits them across two depths, so GT must do what Getty does not: put all three on one screen) |
| P2 | Ask the audience question once, and let the door switch which answer the parent gets. Do not build two parallel pages a parent must compare by hand | F4 (ASU's seven shared audience labels across both panels) |
| P3 | A door must name itself and say who it is for in one line. A door label alone is not routing | F8 entry 6 (Every), F9 entry 12 (Crimson Global Academy) |
| P4 | Above the fold, two primary CTAs. Not six | F1 (Hull 2, COLLINS 2, Every 2, against MIT Admissions 6 and Bryn Mawr 6) |
| P5 | An observation about this corpus, not a GT rule: among the highest-scoring pages, the type budget is spent on one or two real, self-hosted families used well, rather than three used adequately. DD-01 already retains three families for GT (Literata, Inter Tight, Inconsolata); Inconsolata's job is data labels, not display, so the corpus pattern and DD-01 do not compete | F1 type delivery, F9 entries 4, 16, 17, 18 |
| P6 | Restraint is the measurable difference between the shortlist and the rest. Median above-fold label count is 19.5 across the twenty shortlisted pages against 138.5 across the ten densest (corrected; recomputed from the twenty F6 values sorted -- 2, 2, 2, 4, 6, 16, 17, 17, 18, 18, 21, 27, 36, 40, 40, 53, 70, 71, 78, 95 -- median is the mean of the 10th and 11th, (18+21)/2 = 19.5; this section originally stated 32) | F1, F6, F7 (Hull 2, Every 2, COLLINS 2, Barnes 17, Avenues 17 against Quinnipiac 194, Colorado Academy 176) |
| P7 | If a page declares motion, it declares `prefers-reduced-motion`. 13 of 21 motion-carrying pages in this corpus fail this, including four the design press praises | F1, and D-031 / `17` section 7 |
| P8 | The routing component is built for N doors from the start. Tate ships four, Dwight ships nine, UAL ships six, all with the same component | F5, F9 entries 8 and 20, DD-21 |
| P9 | Illustration or commissioned photography, never stock. MIT Admissions shows an elite institution leading with illustrated portraits instead of photography on its live admissions homepage. **Judgment, not measurement**: no credibility outcome was tested here, so illustration is a candidate treatment for DD-08/DD-31 to evaluate, not a demonstrated equivalent to photography | F9 entry 11, DD-08, DD-31, Nari 00:08:49 |
| P10 | Exclusivity is carried by restraint, specificity and imagery. Never by price, wealth cues or aspiration signalling | F9 entry 15, `0_plan/08` principle 3, MD-25 |

## Anti-patterns

| # | Anti-pattern | Where it was measured |
|---|---|---|
| A1 | **`<h1>Home</h1>`, or no `<h1>` at all.** 25 of 73 pages, including Exeter, Groton, RISD, Nueva, Getty and MIT Admissions. The single most common defect in the corpus, and it is a one-line fix nobody made | F1 |
| A2 | **The mega menu as an alternative to deciding.** Quinnipiac 194 labels, Cleveland Clinic 178, Colorado Academy 176, Groton 157. Every one of these is a school or institution that could not choose, so it shipped everything | F1 |
| A3 | **Motion without `prefers-reduced-motion`.** 13 of 21. Exeter, RISD, MIT Admissions, Minerva, Imperial, Yale Architecture and MoMA all animate and none of them ask | F1, P7 |
| A4 | **Platform defaults standing in for a design decision.** 13 elite K-12 sites run Finalsite, and nine of them load the same Google family (`Outfit`) with no evident reason: Lakeside, Harker, Horace Mann, Groton, Shady Side, Paideia, Bryn Mawr, Laguna Blanca, Garrison Forest. Groton loads four Google families on one page; Laguna Blanca loads a handwriting face (Playwrite US Trad) as display type | F1 |
| A5 | **Two competing display serifs.** Paideia pairs Cormorant Garamond with DM Serif Display. Neither wins and the page reads as undecided | Candidate table row 19 |
| A6 | **Routing buried in a directory.** GEMS ships `Find a School` behind 74 above-fold labels; BASIS Independent repeats `Request Information` and `Find a School` twice each before the first content section | Candidate table rows 7 and 6 |
| A7 | **The online school as a lesser door.** Avenues has Avenues Online and does not surface it beside the campuses; MoMA buries PS1 one level down. GT cannot do this: the online school is half the business | F9 entries 4 and 13 |
| A8 | **A keyword-stuffed headline where an argument belongs.** Alaska Airlines ships a 69-character `<h1>` of search terms; Olin ships a 57-character `<h1>` that repeats the college name twice; Dalton's is 64 characters of SEO description | F1, candidate table |
| A9 | **A claim in the headline with nothing behind it.** Crimson Global Academy's `World-Class Schooling, Your Way`. Under REQ-022 and DEL-018 this would need a claims-register row before it could appear on a GT surface | F9 entry 12 |
| A10 | **Tabs instead of URLs.** ASU's two doors are `#tabs-panel-1` and `#tabs-panel-2`, so neither can be linked from an ad. Fatal for message match under REQ-024 | F4 |

## How it applies to GT

| Where | What changes |
|---|---|
| The Design Director brief (`17` section 5, Exemplars) | Every brief names three exemplars from F8 with the specific move each contributes. The default trio for a routing-led direction is Getty (the two-door pattern; its compare link is menu-gated, not beside the doors -- F2), Hull (the headline and the two-CTA fold), and Yale Architecture or Barnes (the composition ceiling). A type-led direction substitutes Exeter or RISD. An imagery-led direction substitutes MIT Admissions |
| The rubric (`17` section 6) | Calibrate each row against a named page -- all now corroborated by rendered captures in `CONCEPTS-A.md` to `CONCEPTS-D.md`, not only this file's provisional scores: Composition 5 = Yale School of Architecture or Barnes; Typography 5 = Exeter, RISD or Harvard; Imagery 5 = MIT Admissions (illustration) or Equinox (commissioned); Objective 5 has no calibrating exemplar in this corpus: Hull's rendered capture shows one first-screen CTA (`CONCEPTS-B.md`, Hull), not two, and Getty's compare link sits outside its first screen (F2), so the runbook's two-choice-in-ten-seconds anchor is calibrated against GT's own mocks (corrected after E4b) -- Getty calibrates the two-door-plus-compare pattern (P1), not the ten-second objective, since its own compare link sits outside the first screen (F2); Restraint 5 = COLLINS or Barnes; Continuity has no exemplar here and must come from K12 |
| The first screen | One shared sentence about GT School, two doors of equal weight (Georgetown, Anywhere), each with one line naming who it is for, and a third control for the undecided. Two primary CTAs, not six (P1, P3, P4) |
| The compare control | F2's text search found a named comparison control on only two of 73 sites, and it is the thing a parent actually needs. This is not a gap in the current plan: **DD-23** already specifies a "Not sure? Compare" anchor after the first-screen doors (`0_plan/07`, verdict Agree, both checks Pass, status Proposed). F2 and Vanguard's placement (`CONCEPTS.md` C45) strengthen that existing decision with corpus evidence that it is rare and valuable; Getty's own execution (menu-gated, one scroll removed -- F2, `CONCEPTS-B.md`) is the placement to avoid, not to copy |
| The doors component | Built for N from the start (P8, DD-21). Every door is its own URL so paid social can land on it directly, which is where ASU fails (A10, REQ-024) |
| `tokens.css` | The shortlist supports the existing DD-01 decision, not a reduction of it: the top-scoring institutions self-host one or two real families (Lyon, RISD Sans, MoMA Sans, Signifier plus Suisse Intl, Canela plus GT America) used well (P5, an observation about the corpus, not a GT rule). No two competing display serifs (A5) -- DD-01's three retained families already avoid this, since only Literata is a display face. Self-host, do not call Google Fonts (F1, and K11 performance) |
| Imagery (DD-08, DD-31) | MIT Admissions is a precedent to put in front of Nari for the escalated home-learning photograph: an elite institution leads with illustrated portraits rather than photography on its live admissions homepage. **Judgment, not measurement** (P9): no credibility outcome was tested; illustration is a candidate treatment for DD-08/DD-31 to evaluate, not a demonstrated equivalent |
| Motion (D-031, `17` section 7, MN rows) | The register's original finding that comparable institutions do not animate is only half right: 21 of 73 load a motion library. The sharper finding is that 13 of those 21 never ask about reduced motion. GT's position should be that motion is allowed where it serves orientation, and `prefers-reduced-motion` is non-negotiable (P7, A3) |
| QA (`1_spec/13`) | Add a check that every mock has exactly one `<h1>` containing a sentence, not a label. A1 shows this is the most common defect among the very sites GT is being compared against, and it is trivially testable |
| Claims (REQ-022, DEL-018) | A9 gives a live example of the failure mode. The three speed claims and the 1400+ SAT target must not reach the landing without register rows, however natural they look next to Crimson Global Academy's headline |
| `kb/EXEMPLARS.md` and `kb/exemplars/` | The 20 in F8 were the capture list for the `18` section 3 protocol, and all 20 are now screenshotted at 390 and 1440 and catalogued in `CONCEPTS-A.md` to `CONCEPTS-D.md` (see the update notes at F0 and F7); their Composition and Imagery scores in this file are superseded there, not re-scored here. The other 49 scored candidates remain uncaptured and stay provisional (F0) |

## Open questions

| # | Question | Why it could not be answered |
|---|---|---|
| Q-K0-1 | How do the shortlist pages actually compose at 390 and 1440? | Partly answered since this file was drafted: rendered captures and concept-catalog analysis now exist for all twenty shortlist pages (`CONCEPTS-A.md` to `CONCEPTS-D.md`, `0_plan/kb/exemplars/`). This file's own F7/F8 scores are not updated from them by design -- this rework points to the concept catalog rather than re-scoring in place; the `17` section 6 rubric should calibrate from the rendered analysis, not from F7 |
| Q-K0-2 | What do The Met, Art Institute of Chicago, SWISS, Mayo Clinic, Johns Hopkins, Sora Schools, Marriott and KLM actually do? | All eight refused both `curl` and WebFetch with bot-protection challenges (Cloudflare, Akamai, Vercel Security Checkpoint). Their rows record the failure. One of the eight is no longer a loss: a later Playwright browser capture reached Sora Schools without incident (`0_plan/kb/EXEMPLARS.md` batch 1), confirming this file's own guess that a headless browser would clear the block (D-028). The Met and Mayo Clinic remain the genuine losses, both being two-or-three-site institutions; the other five (Art Institute, SWISS, Johns Hopkins, Marriott, KLM) are untried by that method |
| Q-K0-3 | What are the real durations and easings on the shortlist? | A text fetch names the libraries but not the values. `17` section 7 and cluster K4 need computed styles, which needs the headless runner. K0 supplies the list of which pages to probe: the 21 that load a motion library |
| Q-K0-4 | Is the "above the fold" CTA count right? | Only 7 of 73 are rendered reads. The rest use the top-35-percent-of-body proxy described in F0. Trustworthy as a comparison, not as an absolute. Re-measure the shortlist during exemplar capture |
| Q-K0-5 | Does the compare affordance (F2) actually help a parent, or does it add a third decision? | Two precedents is thin evidence for whether it helps, but the affordance itself is not an open design question: **DD-23** already is that decision row in `0_plan/07` (Fable recommends, Astra agrees, both checks Pass, status Proposed). This finding adds corpus evidence for a decision that already exists, rather than proposing a new one. What remains open is narrower: whether the anchor actually helps or adds a third decision for a real parent -- a question for parent testing (T-051, REQ-012), not a design hypothesis DD-23 still needs settled |
| Q-K0-6 | Why is the education cohort so much weaker than the calibration cohort? | The corpus suggests platform concentration (13 Finalsite sites, A4) but K0 cannot separate cause from correlation. Relevant to `0_plan/03` only if GT is ever asked to consider a school-CMS vendor, which the dependency-free rule already rules out |
| Q-K0-7 | Which of these pages would Nari recognise as "the most serious K-8 option"? | Not a research question. It is G1. The shortlist gives her named alternatives instead of adjectives |

## Sources

| Source | URL | Used for |
|---|---|---|
| Finalsite, "The Best Private & Independent School Websites of 2025" | https://www.finalsite.com/blog/p/~board/b/post/best-independent-school-websites-of-the-year | Named 12 K-12 candidates and the stated design reason for each |
| Numiko, "Best University Websites 2026" | https://numiko.com/insights/best-university-websites-2026 | Named 9 university candidates (Hull, SOAS, Imperial, RISD, Guildhall, VCUarts, Ravensbourne, UAL, Harvard) |
| Siteinspire, Schools, Colleges & Universities | https://www.siteinspire.com/websites/category/schools-colleges-and-universities | Named ASP Warsaw, Whitecliffe, Yale Architecture, DDSKS, RISD |
| Pentagram, education work | https://www.pentagram.com/education | The New School (bespoke `Neue`), Sussex, Quinnipiac, Tyler |
| AREA 17 | https://area17.com/ | Client list naming Barnes Foundation and Art Institute of Chicago |
| `0_plan/18-knowledge-base-plan.md` section 1, clusters K5 and K7 | repo | The elite K-12 and university admissions list, and the brand-architecture case studies |
| All 73 fetched pages | see the URL column in F6 | Every measured value in this file. Raw HTML retained during the session; re-fetchable from the URLs given |

## Rework log (E4)

| E4 item | What changed | Where |
|---|---|---|
| F2 "Only two pages in 73 offer a compare affordance next to the doors" | Reworded the heading and table: the "next to the doors" placement claim is marked as a text-fetch limitation; Getty's "directly beside the two door links" cell is marked Judgment and corrected with `CONCEPTS-B.md`'s rendered finding (hover-gated in the Visit menu, absent from all four captures; doors one scroll below the first screen). Vanguard's placement finding is kept as stands, with `CONCEPTS.md` C45 cited as independent corroboration. The closing sentence changed from an absence claim ("71 of 73... give them two links and no way to weigh them") to what a text search can actually show (a named control found on only two of 73) | Findings F2 |
| Rendered evidence: `CONCEPTS-B.md`'s Getty section (compare control menu-gated, doors one scroll down) | Cited this correction everywhere the file described Getty's compare affordance as unified with the doors on one screen | Findings F3 (closing sentence), F9 entry 2 (Avoid clause), F6 candidate table row 69 (Vanguard's "as Getty does" phrase), F8 shortlist row for Getty; Principles P1 (parenthetical); How it applies to GT (Design Director brief row, rubric row's Objective-5 anchor) |
| F5 "the most structurally relevant school sites are the least well designed" | Reworded the heading to mark the craft ranking as this file's own provisional, text-proxy read; added a note that only Nord Anglia of the four has since been rendered, pointing to the concept catalog and `kb/exemplars/` for the re-rank (DD-19) | Findings F5 |
| GT application: MIT's illustration "loses nothing in credibility" has no measurement | Marked Judgment in both places the claim appeared; reframed illustration as a candidate treatment for DD-08/DD-31 to evaluate, not a demonstrated equivalent to photography | How it applies to GT (Imagery row); Principles P9 |
| The Compare affordance is already DD-23 | Reworded from "propose... as a new requirement... it does not exist in the current plan" to naming DD-23's existing status in `0_plan/07` (verdict Agree, both checks Pass, status Proposed) and framing this file's finding as corpus evidence strengthening that decision, not a new proposal | How it applies to GT (the compare control row); Open questions Q-K0-5 |
| P5 (one or two type families) conflicts with DD-01's three retained families | Reworded from a GT prescription to an observation about this corpus; noted DD-01 already retains three families and that Inconsolata's role (data labels) does not compete with a "one or two display families" reading | Principles P5; How it applies to GT (`tokens.css` row) |
| Provisional visual scores cannot calibrate the rendered rubric; say so where the scores appear | Added an update note identifying that rendered captures and concept-catalog analysis now exist for 24 of the 73 scored rows (this file's whole twenty-site shortlist plus Success Academy, Caltech Undergraduate Admissions, Nord Anglia Education and Vanguard), marked those rows' Comp/Img scores superseded, and pointed to `CONCEPTS-A.md` to `CONCEPTS-D.md` and `kb/exemplars/` rather than re-scoring them here. Reworded F8's intro and the `kb/EXEMPLARS.md` GT-application row on the same basis; updated Q-K0-1 to reflect that captures now exist | Findings F0 (new paragraph), F7 (intro paragraph, Comp/Img evidence-class cells), F8 (intro paragraph); How it applies to GT (`kb/EXEMPLARS.md` row); Open questions Q-K0-1 |
| Not an E4 item -- found under rule 3 (fix every arithmetic error) | P6's "median above-fold label count is 32 across the twenty shortlisted pages" was wrong. Recomputed from the twenty shortlisted pages' own F6 values, sorted ascending (2, 2, 2, 4, 6, 16, 17, 17, 18, 18, 21, 27, 36, 40, 40, 53, 70, 71, 78, 95), the median (mean of the 10th and 11th values, 18 and 21) is 19.5. The illustrative example "Stanford Admission 7" was also dropped -- Stanford Undergraduate Admission is not one of the twenty shortlisted pages -- and replaced with three pages that are (Hull 2, Every 2, COLLINS 2). The ten-densest median, 138.5, was independently verified and is unchanged | Principles P6 |
| Not an E4 item -- found under rule 3 (fix every arithmetic error) | F8's "Nine are education sites, eleven are calibration references" miscounted its own twenty-row table (verified programmatically): the split is ten and ten. Reworded the "imbalance" framing to the finding the count actually supports -- calibration references dominate the top of the list (all of the top four, seven of the top nine) while the full twenty is even | Findings F8 |
| Administrative | Status row updated to record the rework and point to this log; Q-K0-2 updated to note that Sora Schools, one of K0's eight fetch failures, was separately reached by a later Playwright capture | Header table; Open questions Q-K0-2 |

No E4 item for K0 was found factually wrong about the file; all seven per-cluster items and the Getty citation were verified against the file, `0_plan/07-design-decisions.md`, `CONCEPTS-B.md` and `CONCEPTS.md` before being applied. No disagreements to record for this cluster.

### Proposed register follow-ups (not applied; for the ensemble to route)

| Register row | Proposal | Evidence | Recommended by |
|---|---|---|---|
| DD-19 (rerank after rendered review); informs DD-21 | Capture Dwight School, Nueva School and Stanford Online High School in the next exemplar-capture wave. These are F5's most structurally relevant school-site analogues for DD-21's N-campus requirement, and only one of the four (Nord Anglia) has been rendered so far | Findings F5; `0_plan/kb/CONCEPTS-B.md` (Nord Anglia only); `0_plan/kb/exemplars/` (the other three absent) | Fable |
| `17` section 6 (design rubric), no existing row | Swap the Objective-5 calibration anchor from Getty to Hull, or confirm another page whose both CTAs are confirmed inside the fold by a rendered read; Getty's own compare link sits outside the first screen | Findings F2; `0_plan/kb/CONCEPTS-B.md`; F6 row 43 (Hull's rendered above-fold CTA count) | Fable |
| n/a (research backlog, not a decision/requirement row) | Attempt a Playwright-browser recapture of the seven bot-blocked candidates still unresolved (The Met, Art Institute of Chicago, SWISS, Mayo Clinic, Johns Hopkins, Marriott, KLM) before treating them as permanent losses; Sora Schools, blocked identically by `curl` and WebFetch, was reached cleanly by Playwright | Open questions Q-K0-2; `0_plan/kb/EXEMPLARS.md` batch 1 (Sora Schools) | Fable |

