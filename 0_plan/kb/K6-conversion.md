# K6 Landing page conversion and message match

| Field | Value |
|---|---|
| Cluster | K6 of `18-knowledge-base-plan.md` section 1 |
| Feeds | Rubric row **Objective (L1)** (`17` section 6), `1_spec/03` sections 1 to 4, `0_plan/mockups/shared/copy.md`, REQ-011, REQ-012, REQ-013, REQ-022, REQ-026 |
| Method | **43 distinct sources fetched with content** by this agent on 2026-09-11 using WebFetch, WebSearch and one `curl` text fetch; no browser tool used; no GT or Alpha page loaded. Three PDFs (Fogg 2002, Scheibehenne 2010, Chernev 2015, FTC 2021) were fetched and read page by page rather than summarised from search |
| Relation to `research/R3` | R3 (2026-09-10) is the register-facing pass: it answers "does outside evidence confirm this DD/MD/AN/AD/SE row?". K6 is the page-facing pass: it answers "what shape must the landing take?". Where R3 already cites a source (Unbounce `whats-a-good-conversion-rate`, NN/g `scrolling-and-attention`, NN/g heuristics, Baymard product lists, Hick's Law, FTC dark patterns) this file does **not** restate it. Two R3 conclusions are extended rather than repeated: message match (R3 Q3) and comparison consistency (R3 Q1) |
| Relation to `kb/K1` | K1 F20, F21, F23, F26, F28 are load-bearing for this cluster and are cited by id, not re-derived. K6 adds what K1's composition lens did not cover: action cost, proof under a substantiation duty, and the handoff to a separate application |
| Sources not fetched | Listed in section 7b. Nothing in this file is built on them. CXL and tandfonline returned 403 to every fetch attempt; PubMed's abstract page requires cookies (the same paper was read through White Rose instead) |
| Caution | Every percentage below is a **measurement of somebody else's pages or of research participants**. None of them is a claim about GT School, so none needs a claims-register row. The moment any of them is paraphrased onto a GT surface, REQ-022 and DEL-018 apply in full — including, per C33, to claims that are only implied |
| Status | Draft 2026-09-11, Fable. Astra E4 pending |

---

## 1. Question

What is the anatomy of a landing page that converts for a considered, high-trust decision — private school, university, healthcare — rather than for an impulse purchase? Specifically:

1. What must the first screen carry, and what does "fits the screen" earn or cost?
2. How do routing pages with two or more doors succeed, and how do they fail?
3. What does message match from a paid-social creative to a page actually require?
4. What social proof works when no figure can be published?
5. What should CTA copy say, and where should CTAs sit?
6. What should a page offer the visitor who is not ready?
7. What shape of comparison block do people actually read?
8. How does a form-less page hand off to a separate application flow?

---

## 2. Findings

### 2a. What a first screen has to do, and how long it has

| # | Finding | Source |
|---|---|---|
| C1 | The first ten seconds decide almost everything. Analysis of **over 205 million page visits** found time-on-page follows a Weibull distribution with **"a negative aging effect" on 99% of web pages** — the longer someone stays, the more likely they are to keep staying. Nielsen's operational rule: **"To gain several minutes of user attention, you must clearly communicate your value proposition within 10 seconds."** The distribution is close to binary: leave in seconds, or commit for minutes | Jakob Nielsen, NN/g, 11 Sep 2011, https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/ |
| C2 | Credibility is judged on surface before substance, at scale. In the largest web-credibility study of its kind — **2,684 participants, 2,440 coded comments, 100 sites across 10 categories**, Stanford Persuasive Technology Lab with Consumer WebWatch — **"design look" appeared in 46.1% of credibility comments**, ahead of information design/structure (28.5%), information focus (25.1%), company motive (15.5%), information usefulness (14.8%), information accuracy (14.3%) and name recognition (14.1%). **Privacy policies were mentioned in under 1% of comments.** The authors' own summary: "the average consumer paid far more attention to the superficial aspects of a site, such as visual cues, than to its content" | B.J. Fogg, Cathy Soohoo, David Danielsen, Leslie Marable, Julianne Stanford, Ellen R. Tauber, *How Do People Evaluate a Web Site's Credibility? Results from a Large Study*, released 29 Oct 2002 (updated 11 Nov 2002), http://credibility.stanford.edu/pdf/How_Do_People_Evaluate_a_Web_Site's_Credibility_v37.pdf |
| C3 | The same paper shows the effect is **domain-dependent**: design-look comments were most frequent for finance (54.6%), search engines (52.6%), travel (50.5%) and e-commerce (46.2%), and **least frequent for health (41.8%), news (39.6%) and nonprofit (39.4%)**. Expert reviewers of the same health and finance sites "were far less concerned about the surface aspects… and more concerned about the breadth, depth, and quality of a site's information." A school sits with the low group, not the high group: look buys the first look, content buys the decision | Fogg et al., 2002, as above |
| C4 | That two-stage pattern is the same one found experimentally in health. In a four-week observational study of **15 women facing a risky health decision**, content analysis "provided support for a staged model wherein **design appeal predicted rejection (mistrust)** and **credibility of information and personalisation of content predicted selection (trust)** of advice sites" | Elizabeth Sillence, Pam Briggs, Lesley Fishwick, Peter R. Harris, "Trust and mistrust of online health sites", *Proceedings of CHI 2004*, pp. 663–670, https://eprints.whiterose.ac.uk/9909/ |
| C5 | A systematic review of **73 peer-reviewed articles across 8 databases** reached the same split at review scale: **"There is a consensus that website design, clear layout, interactive features, and the authority of the owner have a positive effect on trust or credibility, whereas advertising has a negative effect."** Contact details and named ownership were among the most-cited positive factors; slow loading and complex layouts among the negatives | Laura Sbaffi, Jennifer Rowley, "Trust and Credibility in Web-Based Health Information: A Review and Agenda for Future Research", *Journal of Medical Internet Research* 19(6):e218, 2017, https://pmc.ncbi.nlm.nih.gov/articles/PMC5495972/ |
| C6 | The homepage's own first job is naming. NN/g's five fundamental principles put "Communicate who you are and what you do" second and require **"a tagline that explicitly conveys what your site or company does"**, then principle 3: **"Place the most important content above the fold"** — as "a gatekeeper for further engagement" — and principle 5: keep it simple, minimise motion, avoid popups | Huei-Hsin Wang, NN/g, 15 Mar 2024, https://www.nngroup.com/articles/homepage-design-principles/ |
| C7 | Speed is part of the first screen's budget, with a measured elasticity. A Google-commissioned study by Deloitte and 55 monitored **37 European and American brand sites over 30 million user sessions for 30 days**. A **0.1 second** load improvement correlated with, in the **lead-generation** sector, a **21.6% improvement in users reaching the form-submission page** and a **5.5% improvement in progression from homepage to the first step** | Olga Demidova, web.dev, 24 Jun 2020, https://web.dev/case-studies/milliseconds-make-millions |

### 2b. The fold, false floors, and what "fits the screen" costs

| # | Finding | Source |
|---|---|---|
| C8 | "Fits the screen" is not the same as "looks finished". The **illusion of completeness** is when "the visible content on the screen appears to be complete, when in fact more information exists outside of the viewable area." In one study **"Six out of eight users did not realize they could scroll down this page."** Named causes: large hero graphics or video, **a horizontal line spanning the page width**, **large gaps of whitespace between content elements**, and interruptions such as promos or share buttons. Remedy: **"Ensure that additional content peeks above the fold to lead users to scroll further"** | Kim Flaherty, NN/g, 17 Jan 2016, https://www.nngroup.com/articles/illusion-of-completeness/ |
| C9 | The fold is not a pixel row. `100vh` is the *large* viewport — it assumes retractable browser chrome is retracted — so on mobile "elements sized to be `100vh` tall will bleed out of the viewport" on first paint. The **small viewport** (`svh`) assumes that chrome is expanded; the **dynamic viewport** (`dvh`) is clamped between the two. The first screen's real budget is the small viewport, which is smaller than the device height on every mobile browser | Bramus Van Damme, web.dev, last updated 29 Nov 2022, https://web.dev/blog/viewport-units |
| C10 | Where the decisive CTA belongs depends on how expensive the action is, not on where the fold is. The most-cited counter-example — a **304% conversion lift from moving a CTA below the fold** — is attributed by its own author to "correlation between product complexity and location": complex offers need the explanation before the ask. The same write-up records a **12.6% drop** in form completions from adding an eTrust security badge, a **115% lift** from matching ad copy to landing-page copy, a **14.79%** lift from "Get" instead of "Order", **+24%** from removing a purposeless image, and **3% → 6%** from removing the navigation bar | Ryan Lynch, HubSpot, updated 11 Jun 2025, https://blog.hubspot.com/marketing/5-landing-page-a/b-tests-and-their-surprising-results (article title "5 Landing Page A/B Tests (And Their Surprising Results)"). **Tier: case study, single-vendor retelling of third-party tests.** The 304% figure carries an explicit attribution caveat in the source itself |
| C11 | Short copy wins where a form is the conversion, measured across a large corpus: **41,000+ landing pages, 464 million visitors, 57 million conversions**. Pages at a **5th-to-7th-grade reading level convert at 11.1%, 56% higher than 8th-to-9th-grade pages**; "difficult words" (3+ syllables) show a **−24.3% correlation** with conversion. Overall median across nine industries **6.6%** (range 3.8%–12.3%) | Unbounce, *2024 Conversion Benchmark Report*, https://unbounce.com/conversion-benchmark-report/ |
| C12 | In the **education** category the same corpus gives a median of **8.4%**, decomposing into online courses 18.3%, general course pages 13%, **higher education 6.3%** and **primary education / tutoring 4.9%** — the two categories nearest GT are the two lowest. Education's recommended word count is **363 words, the lowest of any industry**, with **no more than 116 difficult words**, and pages at 12th-grade reading level or lower convert "54% to over 2x better" | Unbounce, *2024 Conversion Benchmark Report*, education page, https://unbounce.com/conversion-benchmark-report/education-conversion-rate/ |
| C13 | **Inconsistency inside C11/C12, recorded rather than resolved:** the all-industry page states mobile is 83% of visits and converts **8% *less*** than desktop; the education page states mobile is 85% of traffic and converts **17.6% *better***. Both cannot describe the same population. Treat the category figure as category-specific and neither as a design mandate | Unbounce, both pages above |

### 2c. Two doors: routing that works and routing that fails

| # | Finding | Source |
|---|---|---|
| C14 | The "too much choice" story does not survive meta-analysis. In **63 conditions from 50 published and unpublished experiments (N = 5,036)** the authors "found a mean effect size of virtually zero but considerable variance between studies… **no sufficient conditions could be identified**" for choice overload | Benjamin Scheibehenne, Rainer Greifeneder, Peter M. Todd, "Can There Ever Be Too Many Options? A Meta-Analytic Review of Choice Overload", *Journal of Consumer Research* 37(3):409–425, published online 10 Feb 2010, https://scheibehenne.com/ScheibehenneGreifenederTodd2010.pdf |
| C15 | The follow-up meta-analysis found the effect is real but **conditional on four moderators**. From **99 observations (N = 7,202)**: "we identify four key factors — **choice set complexity, decision task difficulty, preference uncertainty, and decision goal** — that moderate the impact of assortment size on choice overload… higher levels of decision task difficulty, greater choice set complexity, higher preference uncertainty, and a more prominent, effort-minimizing goal facilitate choice overload." The design lever is therefore **not the number of doors** (two is small either way) but **task difficulty, set complexity and preference uncertainty** | Alexander Chernev, Ulf Böckenholt, Joseph Goodman, "Choice overload: A conceptual review and meta-analysis", *Journal of Consumer Psychology* 25(2):333–358, 2015, https://chernev.com/wp-content/uploads/2017/02/ChoiceOverload_JCP_2015.pdf |
| C16 | Implied differences are the specific failure. **"When the key differences between choices are implied or buried, users often select the wrong option or misunderstand the features."** The worked example is a university tuition page where "in-state" and "out-of-state" were implied but never explained, and first-time explorers could not tell which applied to them | Taylor Dykes, NN/g, 23 Aug 2024, https://www.nngroup.com/articles/explicit-differences/ |
| C17 | When a small set of mutually exclusive options each need explanation, the link-with-description form beats the button form: with a command link "you can present this explanation in a smaller typeface to emphasize its secondary nature", whereas "because buttons are enclosed and thus self-contained, it's harder to add an explanation next to a command button" | Jakob Nielsen, NN/g, 13 May 2007, https://www.nngroup.com/articles/command-links/ |
| C18 | A government-scale pattern for a routing page that hands off to a separate service: give the user **"just enough information to help them understand what the service does and whether it will meet their need"**; provide **one** button "with text that's consistent with the action you're asking users to take"; if further actions are needed, **"use a standard link"** rather than a second button; include cost and rough duration; include other ways to access the service; and **"Avoid using the start point to provide complex eligibility information. Instead, ask questions inside the service to find out whether the user is eligible"** | GOV.UK Design System, "Start using a service" pattern, https://design-system.service.gov.uk/patterns/start-using-a-service/ (no last-updated date shown on the fetched page) |
| C19 | Findability failure is the measurable cost of a bad route on a school site: in NN/g's university research **"48% of users didn't realize their program was offered"** when programme listings were poorly organised. The same guidelines call for authentic photography over stock, prominently displayed deadlines, and caution against trendy interaction, which test users called "annoying" and "unintelligent" | Katie Sherwin, NN/g, 23 Apr 2016, https://www.nngroup.com/articles/university-sites/ |
| C20 | In-page ("jump") links behave differently from page links and must be marked as such. Users **"ignored in-page links during initial exploration but clicked them when seeking specific information"**; only 2 of 11 participants never engaged. Place the list at the top so readers "form a mental model of content before scrolling", label it distinctly ("On this page"), and expect disorientation if styling does not separate it from ordinary links. The benefit rises as screen size falls | Huei-Hsin Wang, NN/g, 1 Oct 2023, https://www.nngroup.com/articles/in-page-links-content-navigation/ |

### 2d. Comparison blocks people actually read

| # | Finding | Source |
|---|---|---|
| C21 | The governing rule is about content, not layout: **"The biggest problem with most comparison tables isn't design, it's content."** Missing or inconsistent metadata across the compared offerings renders a table "useless". The layout rule: **"Stick to the standard table layout: options as columns, attributes as rows, with row labels on the left and column headers above."** Keep cells brief and **"avoid full sentences"**. Use comparison tables for **up to 5 items**. Closing instruction: **"Above all else, do the work for the consumer."** | Kate Moran and Taylor Dykes, NN/g, 9 Feb 2024, https://www.nngroup.com/articles/comparison-tables/ |
| C22 | The same article on small screens: **"You should try to support some level of comparison on mobile"**, though "it's unlikely that you'll be able to show more than 2 items at a time"; converting to tabs or lists for small screens is an accepted adaptation. Column headers should stay fixed as users scroll, to stop them forgetting which column is which | Moran and Dykes, NN/g, 9 Feb 2024, as above |
| C23 | Independent mobile-table guidance converges: columns must be **"legible without requiring the user to zoom in"**; on narrow screens **only about 2 columns fit legibly** for text-heavy entries; do not force landscape rotation, because "what you gain in column space, you lose in row space"; lock the leftmost column "so users can see the necessary labels at all times"; signal horizontal scroll with cut-off content rather than dots | Amy Schade, NN/g, 17 Sep 2017, https://www.nngroup.com/articles/mobile-tables/ |
| C24 | Comparison features are used heavily when they exist and are frequently absent when needed: Baymard's benchmark found **17% of sites with spec-driven products offer no comparison tool**, while in usability testing **67% of participants used comparison features** where provided. Baymard's research base is 25 rounds of moderated think-aloud testing, 4,400+ participant/site sessions | Mark Crowley, Baymard Institute, 6 Sep 2022, https://baymard.com/blog/provide-comparison-features |
| C25 | Accessibility sets a floor on the markup regardless of visual treatment: data tables organise "data with a logical relationship in grids"; **"Header cells must be marked up with `<th>`, and data cells with `<td>`"**; `scope="col"` / `scope="row"` for two-directional headers; a `caption` "identifies the overall topic of a table". The binding criterion is **WCAG SC 1.3.1 Info and Relationships (Level A)**. Properly structured markup is also what lets "alternative ways to render the data" work | W3C Web Accessibility Initiative, "Tables — Web Accessibility Tutorials", https://www.w3.org/WAI/tutorials/tables/ |

### 2e. Message match from paid creative to page

| # | Finding | Source |
|---|---|---|
| C26 | Message match is a platform requirement, not only a CRO tactic. Google defines landing page experience as **"the usefulness and relevance of information provided on the page, ease of navigation for the user, the number of links on the page, and the expectations users have based on the clicked ad creative"**, and treats it as an input to Quality Score. **The number of links on the page is named as a factor** | Google, Search Ads 360 Help, "Landing page experience", https://support.google.com/sa360/answer/9351020 |
| C27 | Google's destination policy adds hard requirements: ads "must work on common browsers and devices so users are led to a functional ad destination"; destinations must be "easy to navigate and safe"; content must be original and add value; and ads "must accurately reflect which app or website the user is being directed to when they click on the ad", with disapproval when "the domain or domain extension in the display URL doesn't match the final and mobile URLs" | Google Ads, Advertising Policies Help, "Destination requirements", https://support.google.com/adspolicy/answer/6368661 |
| C28 | TikTok states message match as an enforceable rule with a named penalty: **"Ad content, including the ad caption, ad text, ad images, ad videos, and ad call-to-action (CTA), needs to be consistent with the promoted product or service on the landing page."** Non-compliance means an ad "may be rejected, receive fewer impressions, or your ad's cost-per-impression may increase" | TikTok Advertising Policies, "Ad Format and Functionality", https://ads.tiktok.com/help/article/tiktok-ads-policy-ad-format-and-functionality |
| C29 | TikTok's landing-page checklist adds two constraints relevant to a routing page: **"Your Landing Page must be mobile-friendly. Visitors should be able to view your website on a mobile device in a horizontal and vertical orientation"**, and **"Your Landing Page cannot request visitors provide sensitive information to access the site."** | TikTok Advertising Policies, "Best Practices for your landing page", https://ads.tiktok.com/help/article/ad-review-checklist-landing-page |
| C30 | Higher-education practitioner framing of the same idea, quoting Oli Gardner's definition — message match is "a measure of how well your landing page copy matches the phrasing of the ad or link that brought the visitor there" — and extending it to imagery: **"Keeping the same image or the same people from your ad on your landing page is extremely important."** The stated anti-pattern is sending ad traffic to a homepage, which "creates too many options and causes distraction" | Carnegie Higher Ed, "The Importance of Message Match: Landing Pages 101", https://www.carnegiehighered.com/the-importance-of-message-match-landing-pages-101/ (no publication date on the page). **Tier: opinion (agency).** Cited for the imagery extension only; the underlying principle is carried by C26–C28 |
| C31 | A link's label is itself a message-match contract: **"Any broken promise, large or small, chips away at trust and credibility."** The requirement is two-sided — write descriptive link text, *and* "display the expected content immediately on the destination page", so the arriving visitor sees a matching title, heading or form. Labels must be **"understandable when taken out of context and read alone"** | Kara Pernice, NN/g, 14 Dec 2014, https://www.nngroup.com/articles/link-promise/ |

### 2f. Proof without figures: credibility, social proof, and the law

| # | Finding | Source |
|---|---|---|
| C32 | The four things that make a site read as trustworthy, from NN/g's synthesis: **design quality**; **up-front disclosure** of "contact details, pricing, fees, policies" — one participant judged a company with no rate information "not open enough"; **comprehensive, correct and current content**, showing actual processes and multiple examples rather than only end results; and **connection to the rest of the web** — "users trust external review sites and social media presence over company-sponsored content" | Aurora Harley, NN/g, 8 May 2016, https://www.nngroup.com/articles/trustworthy-design/ |
| C33 | Commitment is ordered and cannot be skipped. The five levels are: baseline relevance and trust → interest and preference → trust with personal information → trust with sensitive/financial information → willingness to commit to an ongoing relationship. **"Higher levels of commitment cannot be attained before the lower ones."** A page that asks for level 3 before earning levels 1 and 2 fails | Katie Sherwin, NN/g, 6 Mar 2016, https://www.nngroup.com/articles/commitment-levels/ |
| C34 | Social proof backfires below a threshold the site does not control. A test participant who saw that "only 1000 people had shared the article on Facebook" concluded "the article wasn't popular enough, so maybe it wasn't good." NN/g's own caution: **"it is important to test the specific design implementations and not simply accept that *any* social proof feature is beneficial"** — and the article supplies **no threshold**, because none is known | Jen Cardello, NN/g, 19 Oct 2014, https://www.nngroup.com/articles/social-proof-ux/ |
| C35 | On-site testimonials are discounted by the people reading them. NN/g's trust research records that participants "liked quotes and case studies displayed on the company website, but they regarded them with a healthy dose of skepticism, wondered if the stories were true, and noted that the website would of course include only positive reviews" | Aurora Harley, NN/g, 8 May 2016, https://www.nngroup.com/articles/trustworthy-design/ (factor 4) |
| C36 | Badges work whether or not they are true, which is exactly why they are dangerous. In Baymard's trust-seal testing **a completely fabricated seal "performed significantly better than the SSL seals issued by established vendors except Norton"**, and the general conclusion is that **"adding any visual icon will help increase the user's general level of perceived security"** — perceived security tracks brand familiarity and visual cues, not substance | Jamie Holst, Baymard Institute, 5 Oct 2016, https://baymard.com/blog/perceived-security-of-payment-form |
| C37 | US advertising law sets the substantiation duty that "no number without a register row" operationalises: **"Advertising must be truthful and non-deceptive; Advertisers must have evidence to back up their claims"** — before dissemination. **Implied claims count**: the FTC gives "ABC Mouthwash kills the germs that cause colds" as carrying an implied prevention claim. Qualifying information "should be presented clearly and conspicuously", and fine print cannot contradict the main claim. **"Comparative advertising is legal as long as it is truthful."** | Federal Trade Commission, "Advertising FAQ's: A Guide for Small Business", April 2001, edited January 2025, https://www.ftc.gov/business-guidance/resources/advertising-faqs-guide-small-business |
| C38 | Education has its own enumerated list. The FTC's Notice of Penalty Offenses Concerning Deceptive or Unfair Conduct in the Education Marketplace names **seven** practices as unlawful under Section 5 — misrepresenting, "directly or by implication": (1) the need or demand for graduates; (2) employment prospects and the ease of obtaining employment; (3) the types of jobs available or for which graduates are qualified; (4) the number or percentage of students who obtained employment; (5) the amount of money graduates will or may earn; (6) the qualifications or requirements necessary to obtain employment; (7) the institution's capabilities for assisting graduates in finding employment. Every one is phrased **"directly or by implication"** | Federal Trade Commission, "Notice of Penalty Offenses Concerning Deceptive or Unfair Conduct in the Education Marketplace", October 2021, https://www.ftc.gov/system/files/attachments/penalty-offenses-concerning-education/final-notice-education.pdf |
| C39 | If a parent quote is ever used, it inherits the advertiser's substantiation burden: **"An endorsement must reflect the honest opinion of the endorser and can't be used to make a claim the marketer of the product couldn't legally make."** Where an endorser's result is better than typical, the ad "must make clear to the audience what the generally expected results… are", unless the advertiser holds proof the result is representative | Federal Trade Commission, "FTC's Endorsement Guides: What People Are Asking" (2023 revision), https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking |
| C40 | Cost information is the strongest documented content demand from prospective families, and its absence is a documented elimination trigger: **99% of families consider tuition and cost details essential** and **72% have already eliminated institutions based on sticker price**. Families want net-price tools "prominently featured, not buried multiple clicks deep". Other named priorities: programme detail, financial aid, outcomes, admission requirements and next steps | Dr. Raquel Bermejo, Ruffalo Noel Levitz, 20 Nov 2025, https://www.ruffalonl.com/blog/enrollment/where-institutions-meet-and-miss-prospective-family-expectations-in-recruitment/ (drawing on the 2025 *Prospective Family Engagement Report*, RNL/Ardeo/CampusESP, and the 2025 *Marketing and Recruitment Practices Report*) |
| C41 | Why-parents-choose research in the independent-school sector is framed as Jobs to Be Done rather than feature preference; nationally, Job 2 was most prevalent at **40%** of respondents, Job 1 "just over 30%", Job 4 **19%**, Job 3 **10%**, with Job 4 more prevalent among parents of colour, "most notably among Latinx parents" | National Association of Independent Schools, "Why Parents Choose Independent Schools: A National, Quantitative Analysis", 31 Aug 2020, https://www.nais.org/resource-center/resources/research/why-parents-choose-independent-schools-a-national-quantitative-analysis/. **The fetched page does not define Jobs 1–4**; the definitions sit in a gated PDF (see OQ-4) |
| C42 | Sector evidence that content, not technology, is where high-trust institutional sites fail. Across **73 US academic medical center websites**, mean scores were technology **0.82**, accessibility **0.77**, marketing **0.43**, and **content quality 0.22** — by far the lowest. Content quality covered "grammar, frequency of information updates, material relevancy, and readability" | Gale JJ, Black KC, Calvano JD, et al., "An Analysis of US Academic Medical Center Websites: Usability Study", *Journal of Medical Internet Research* 23(12):e27750, 2021, https://pmc.ncbi.nlm.nih.gov/articles/PMC8734930/ |

### 2g. CTA copy and placement

| # | Finding | Source |
|---|---|---|
| C43 | **"Learn more"** is the canonical failure: **"The phrase is most dangerous when used alone because of its ambiguity and poor information scent."** It is also an accessibility failure, because screen-reader users navigating by link list "aren't able to quickly glance back to the preceding-paragraph text". The three fixes are: front-load descriptive keywords from the destination; qualify the phrase ("Learn more about our services"), accepting the loss of scannability; or make the section heading itself the link | Katie Sherwin, NN/g, 13 Dec 2015, https://www.nngroup.com/articles/learn-more-links/ |
| C44 | **"Get started"** is worse than vague — it is actively misdirecting. In testing, **six of eight participants clicked "Get Started" looking for information about the company** and were dropped into signup modals instead. One participant: "To find out what it is I would probably just click on Get Started." Its ambiguity "created strong information scent for almost any user activity, causing them to ignore relevant content below the fold" | Aurora Harley and Kim Flaherty, NN/g, 20 Aug 2017, https://www.nngroup.com/articles/get-started/ |
| C45 | Button-versus-link is a semantics decision, not a styling one, on a start page: one primary button for the action the page exists to start, standard links for everything else (C18). Combined with C17, a door that needs an explanatory line is better expressed as a described link than as a bare button | GOV.UK Design System (C18) and Nielsen, NN/g (C17) |

### 2h. The visitor who is not ready

| # | Finding | Source |
|---|---|---|
| C46 | Most of the audience is out of market at any moment. The 95:5 rule states **"Up to 95% of people or firms are not in the market for many goods and services at any one time"**, derived from purchase-cycle length — "corporations change service providers… around once every five years on average. That means only 20% of business buyers are 'in the market' over the course of an entire year." Dawes is explicit that **"The 95% figure is not meant to be a precise rule."** The stated implication: advertising "works… principally by building a memory link for the brand in buyers' minds" | John Dawes, Ehrenberg-Bass Institute, "The 95:5 Rule", 2021, https://johndawes.info/the-955-rule/. **Tier: heuristic from a research institute, self-described as imprecise, derived for B2B.** K-8 school choice has an annual cycle, not a five-year one; the direction transfers, the ratio does not |
| C47 | The commitment ladder (C33) gives the design consequence: a page whose visitors are mostly at levels 1–2 must offer actions that *are* levels 1–2 — read, compare, watch, ask — and must not place a level-3 ask (personal information) on the same surface | Sherwin, NN/g, 6 Mar 2016 (C33) |
| C48 | The information families say they need before they are ready maps to specific page furniture: cost and access (C40), admission requirements and next steps (C40), what happens after the programme (C19's job-placement guideline, whose K-8 analogue is "what follows 8th grade"), and clearly displayed deadlines (C19) | C40, C19 |

### 2i. Form-less pages that hand off

| # | Finding | Source |
|---|---|---|
| C49 | Field count dominates step count. Across Baymard's checkout benchmark, **"the average checkout flow in 2024 is 5.1 steps long and contains 11.3 form fields"**, while "most sites need only 8 form fields in total"; crucially, **"the number of form fields users must consider… impacts overall usability far more than the number of steps."** **17% of users have abandoned due to checkout complexity.** Splitting a long ask across more steps does not fix it; removing fields does | Edward Scott, Baymard Institute, 26 Jun 2024, https://baymard.com/blog/checkout-flow-average-form-fields |
| C50 | The government start-page pattern is the canonical form-less handoff: the start page carries orientation, cost, duration, alternatives and one button; **eligibility questions belong inside the service, not on the start page** (C18). This is the same architecture as a landing page that routes to a separate application host | GOV.UK Design System (C18) |
| C51 | The handoff must confirm arrival. A link is only kept as a promise if the destination "display[s] the expected content immediately" — a matching title, heading or visible form (C31). A router that sends a parent to a page that does not name the school they chose has broken the promise even though the URL was right | Pernice, NN/g, 14 Dec 2014 (C31) |

---

## 3. Principles the studio adopts

| # | Principle | Traces to |
|---|---|---|
| CP1 | **Budget the first screen against the small viewport, not the device height.** The design target at 390 is `100svh` with browser chrome expanded, and the mock must still work at `lvh`. `100vh` is never used for a first screen | C9 |
| CP2 | **Ten seconds is the unit of the objective.** Everything in the first screen exists to let a parent say what this is and which door is theirs inside ten seconds; nothing in the first screen is there for any other reason | C1, C6 |
| CP3 | **Look buys the first look; content buys the decision.** Design quality is the largest single driver of credibility comments, but least so in the health/nonprofit family a school belongs to — so craft earns attention and disclosure earns belief. Neither substitutes for the other | C2, C3, C4, C5 |
| CP4 | **State differences; never imply them.** Each door's line names place *and* format in plain words. A parent must never have to infer which door is theirs from an icon, a photo, or a school name | C16, C19 |
| CP5 | **Equal doors, because a prominence difference is a recommendation.** Set complexity, task difficulty and preference uncertainty are the levers that break a two-way choice — not the count. Make the two options maximally alignable and maximally explicit, and remove any cue that reads as "this one is the real one" | C15, C16 |
| CP6 | **Every label is a promise, and the destination must keep it.** Link text is written from the destination, front-loads the distinguishing word, reads correctly out of context, and lands on a page that immediately confirms it. "Learn more" and "Get started" are banned outright | C31, C43, C44, C51 |
| CP7 | **One primary action; everything else is a link.** The page has exactly two co-equal primary actions (the two doors) because it has two destinations. Secondary actions are standard links, never buttons, never above the doors | C18, C45, C26 |
| CP8 | **Proof is disclosure plus citation, not a number.** Where a figure has no Approved register row, the page earns belief through up-front disclosure (cost, policy, contact), comprehensiveness, currency, and outward links — the four factors that were measured, rather than the one figure that was not | C32, C35, C40, C2 |
| CP9 | **Substantiation covers implication.** REQ-022 is the operational form of a legal duty that applies to implied claims as much as to printed figures. A footnote does not rescue an unsupported implication; removing the implication does | C37, C38, C39 |
| CP10 | **Design for the 9-in-10 who will not act today.** The landing's job for most visitors is to be understood and remembered, not to extract anything. It therefore asks for nothing, and offers a ladder of level-1 and level-2 actions instead | C46, C33, C47 |
| CP11 | **A comparison is a content artefact.** The table's quality is decided by whether every attribute is present, consistent and short for both schools — before any styling decision is made | C21, C24 |
| CP12 | **The first screen must leak.** A clean edge at the bottom of the small viewport is a false floor. Something from the next section is always partly visible | C8 |

---

## 4. Anti-patterns

| # | Anti-pattern | Why it fails | Traces to |
|---|---|---|---|
| CA1 | A first screen that ends on a full-width rule, a colour-band edge, or a generous blank gap below the doors | These are three of the four named causes of the illusion of completeness; in one study six of eight users did not scroll | C8 |
| CA2 | Sizing the hero or door band with `100vh` | On mobile it is the *large* viewport: the CTAs bleed out of view on first paint, which is precisely the REQ-011 failure | C9 |
| CA3 | "Learn more", "Get started", "Explore", "Discover", "Find out more" as a door CTA | Ambiguous, unusable from a screen-reader link list, and — in the case of "Get started" — measured to mislead six of eight participants | C43, C44 |
| CA4 | Two doors of different height, photo weight, or CTA styling | A prominence difference reads as a recommendation; GT does not recommend a school. Reinforces K1 A3 with the choice-moderator mechanism | C15, K1 A3 |
| CA5 | A door line that names the school but not the format ("Georgetown Campus — where gifted children thrive") | The difference becomes implied; the tuition in-state/out-of-state failure is the same shape | C16 |
| CA6 | "Same" or "—" as a comparison-table cell value | Inconsistent attribute presentation is the named reason comparison tables become "useless"; a reader who arrives at the anchor sees a column of blanks rather than the shared ground | C21 |
| CA7 | Full-sentence, multi-clause comparison cells | The article's explicit instruction is to avoid full sentences; long cells destroy the scan that is the table's only reason to exist | C21 |
| CA8 | A two-column table that survives 390px by shrinking type or by scrolling horizontally | Columns must be legible without zoom, and only ~2 text-heavy columns fit legibly; forcing rotation trades column space for row space and annoys users | C22, C23 |
| CA9 | Dropping `<table>`, `<caption>` or `<th scope>` because the visual rendering is stacked blocks | SC 1.3.1 is a Level A conformance requirement; the stacked rendering is a presentation, not a data model | C25 |
| CA10 | Any badge, crest, seal or ribbon standing in for verification that has not closed (accreditation, rankings, "as seen in") | A fabricated seal outperformed real ones in testing — the visual form persuades regardless of truth, which makes shipping an unverified one a deception, not a decoration | C36, C38 |
| CA11 | A parent quote, a follower count, a cohort size, or any "N families" figure without an Approved register row | Low numbers measurably backfire, on-site testimonials are discounted by readers, and an endorsement cannot carry a claim the advertiser could not make itself | C34, C35, C39 |
| CA12 | An email capture, a "get the brochure" gate, or a quiz that stores an answer, anywhere on the landing | A level-3 ask on a level-1 surface; TikTok's landing-page policy additionally forbids requiring sensitive information to access the site | C33, C29 |
| CA13 | Sending paid-social traffic to a generic homepage, or running creative whose words and faces do not appear on the page | Named as the message-match anti-pattern; on TikTok it is an enforceable policy with a stated CPM penalty | C30, C28, C27 |
| CA14 | Padding the page with links to raise "engagement" | Google names the number of links on the page as a landing-page-experience factor; one measured test doubled conversion by removing the nav bar alone | C26, C10 |
| CA15 | Treating "short copy converts" as a mandate for a comparison page | The corpus behind it measures form-conversion pages; GT's conversion is a navigation. Reading level transfers; word count does not | C11, C12, C13 |

---

## 5. How it applies to GT

### 5a. The first-screen budget

Measured against `0_plan/mockups/shared/copy.md` v1 (T-041), the current first screen is **95 words**: header 6, `h1` 22, provenance line 8, Georgetown door 25 (label 2, name 2, line 17, CTA 4), GT Anywhere door 23, compare anchor 11.

| Dimension | Budget | Ceiling | Basis |
|---|---|---|---|
| **Words, total, above the compare anchor's fold line** | **90–110** | **120** | The current deck sits at 95; C1 (ten seconds), C11/C12 (education reads short), C23 (legibility without zoom at 390) |
| **Words, `h1`** | **≤20** | 20 | `1_spec/03` section 5 already sets "sentences under 20 words in the first screen". **copy.md v1's `h1` is 22 words and breaches the spec it ships under** — see 5g change 4 |
| **Words, each door line** | **≤20**, and identical ±3 between doors | 20 | C16 (state the difference), CP5 (equal weight); current lines are 17 and 17 |
| **Elements above the door CTAs** | **Exactly 5**: lockup, two utility links, `h1`, provenance line | 5 | REQ-011, C6, DD-03 |
| **Elements in the first screen** | **8**: the above, plus two door cards and the compare anchor | 8 | C8 (anything more pushes the anchor out), C18 (just enough) |
| **Primary CTAs** | **Exactly 2**, one per door, co-equal | 2 | CP7, C18, DD-26 |
| **Non-primary links in the first screen** | **3** (Current families, Contact admissions, Compare the two), all styled as links | 3 | C18, C45, C26 (link count is an ad-quality factor) |
| **Images** | **2**, one per door, identical aspect ratio and treatment | 2 | DD-04, CP5; C10 records a 24% lift from deleting a purposeless image |
| **Reading level** | **12th grade or lower** for every first-screen string; target 7th–9th for the `h1` and door lines | 12th | C11 (−24.3% correlation for 3+-syllable words), C12 |
| **Vertical budget** | The two door CTAs and the **top edge of the compare anchor** must be visible at **`100svh`** on 390×844, with the next band visibly cut off | — | C9, C8, CP1, CP12 |
| **Motion** | None that delays the `h1` or the door CTAs | — | C6 (principle 5), MN-02 |

Two notes the mocks must carry. First, **`svh`, not 844px**: the acceptance screenshot is taken in a real browser with chrome shown, not at a synthetic 390×844 canvas, or the test is meaningless (C9). Second, the **fold test is a leak test**: if the first screen ends on a clean horizontal edge it fails even when everything fits (C8, CA1).

### 5b. The door pattern's requirements

| Requirement | Rule | Basis |
|---|---|---|
| **Equal weight** | Card height within **4px** at both 390 and 1440; identical type ramp, photo aspect ratio, photo treatment, border radius, padding and CTA styling; neither card carries a badge, ribbon, "most popular" marker, or a heavier colour. The fixed order (Georgetown, then Anywhere) is a reading-order convention only and must never be described on the page as a recommendation | CP5, C15, DD-26, K1 A3 |
| **One line each** | ≤20 words, ±3 of each other, and each line must contain **both** the place and the format explicitly. Current copy passes: "on our Georgetown, Texas campus" and "from wherever you live… four in-person weekends a year in Georgetown" | CP4, C16 |
| **Cue set** | Label + icon + photo (DD-04) — a described-link structure, not a bare button, because each door needs an explanatory line in a lighter weight | C17, C45 |
| **CTA label** | Full school name plus a verb that matches the destination. "Explore the Georgetown campus" → the Georgetown marketing site, and "Explore GT Anywhere" → the Anywhere marketing site, are correct promises: the destination is a site to browse, not an application. Both must be legible out of context in a screen-reader link list | C31, C43, REQ-018 |
| **Arrival** | Each door's destination must show the school's name in the first screen of the destination page. A door that lands somewhere generic has broken the promise even though the URL is right | C51, C31 |
| **Compare anchor position** | **Immediately below the two door CTAs, inside `100svh` at 390**, with its top edge visible and the comparison band visibly cut off beneath it. It sits below the CTAs (so REQ-011 holds) and above the fold (so it is found). It must be styled and labelled as an in-page link — a distinct treatment from the door CTAs and from the utility links — because users mistake unmarked jump links for page links | C20, C8, DD-23, REQ-011 |
| **Compare anchor behaviour** | Users ignore jump links on first pass and return to them when they have a need (C20), so the anchor must also exist as a real, visible section heading at `#compare`, and the doors must be repeated beneath the table (already in DD-23) so the anchor is a loop, not a one-way trip | C20, DD-23 |
| **In-app browsers** | Both orientations must render (TikTok policy), and the small viewport inside a webview is smaller again than in Safari or Chrome — so the budget in 5a is measured, not assumed, inside each webview under REQ-024 | C29, C9, REQ-024 |

### 5c. Proof under REQ-022

G0.5 withheld the speed figure and the accreditation statement, so section 4 currently carries **four register-backed facts and a visible sources line with a checked date**. The research says this is not a fallback; it is the better-evidenced construction.

| Move | What it does | Basis |
|---|---|---|
| **Four facts, no outcome figure** | The FTC's education list is entirely about **outcomes** — demand, employment, earnings, placement. GT's four facts are about **admission, method, staffing and scope**: none is an outcome claim, so none carries the penalty-offence risk, and none needs a figure | C38, CP9 |
| **The visible sources line with a date** | This is simultaneously "up-front disclosure" and "comprehensive, correct and **current**" — two of the four measured credibility factors — executed in one element. Keep it under the proof strip *and* under the comparison, as copy.md already specifies | C32, C5 |
| **Outward links to both school sites and to apply** | "Connected to the rest of the web" is the fourth credibility factor, and the one GT currently satisfies best | C32 |
| **Cost stated, not deferred** | 99% of families call cost details essential and 72% have already eliminated a school on price. "Tuition on request" for Georgetown is therefore not a neutral placeholder — it is a measured elimination risk sitting in the comparison's most-read row. Q-011 should be escalated on that basis, not left to drift | C40, REQ-026 |
| **No badge, crest, ribbon or seal** | A fabricated seal outperformed genuine ones in testing. Any badge-shaped object persuades whether or not it is true, which is exactly why one may not ship before Q-033 closes. This also rules out a Cognia mark, a "#1" ribbon, and an "as seen in" strip | C36, CA10, DD-17 |
| **No parent quote until Q-034** | An endorsement cannot carry a claim GT could not make itself, and an atypical result requires a typicality disclosure. A verified GT student's parent is the minimum bar, and the quote must not assert an outcome | C39, MD-05 |
| **No count, cohort size or follower figure** | Low social proof measurably backfires and no threshold is known; GT is small and new, so any count it can publish is in the backfire zone | C34, CR-025/CR-026 conflict |

**Proposed scope change to REQ-022 (the single largest finding in this cluster).** REQ-022 and `check-claims.py` currently police **figures**. The FTC's standard is broader in two ways that matter here: it covers **implied** claims ("directly or by implication", in all seven education items), and it covers **comparative** claims. Three strings that pass a figure check today but would not pass a substantiation check:

- "the most serious K-8 option" — an implied superiority claim (C37's comparative rule).
- "students advance when they show mastery, not when the calendar says so" — safe, because it describes a **process**, not a result. Worth recording as the model of a compliant proof sentence.
- "a 1400+ SAT target… read as a result" (the existing homepage construction noted in fact 3 of `00`) — an implied outcome claim even with the word "target", because a target presented as an achievement implies achievement.

Recommended: extend `check-claims.py` from a numeral grep to a numeral grep **plus** a small enumerated list of outcome verbs and superlatives (`faster`, `ahead`, `best`, `top`, `#1`, `most`, `only`, `guarantee`, `results`, `outcomes`, `score`), each flagged for a human decision rather than auto-failed. Log as a proposed change to REQ-022's acceptance and to V-022.

### 5d. The comparison block's shape

| Aspect | Rule | Basis |
|---|---|---|
| **Items** | 2, well inside the 5-item limit. No third column, no "all GT schools" column | C21 |
| **Orientation** | Options as columns, attributes as rows, row labels left, **full school names** as column headers — already correct in copy.md | C21 |
| **Row count** | **≤9.** copy.md v1 has exactly 9. Any new row displaces one | C21 |
| **Cell length** | **≤20 words, no full sentences where a fragment will do.** Counted against copy.md v1: both "The day" cells are **22 words** and "Same school, same academics" is **exactly 20** and is two full sentences. Trim those three to fragments and push the detail to the school sites; every other cell is already 16 words or fewer | C21, CA7 |
| **"Same" cells** | **Replace "Same" with the repeated value in both columns.** Three rows currently read "Same" in the GT Anywhere column. That is the exact inconsistent-attribute presentation named as the reason comparison tables fail, and a parent who arrives at `#compare` from the anchor meets a column of blanks. If repetition reads as padding, the alternative is to lift those three rows out of the table entirely — but that conflicts with DD-06 and REQ-013, which require shared rows first **inside** the comparison, so **repeat the value** | C21, C16, CA6, DD-06 |
| **Duplication with section 4** | Section 4's proof strip is headed "What is true of both schools" and restates the same shared ground as the table's three shared rows. One of the two must change: recommend the proof strip keeps method/scope/staffing facts and the table keeps the shared **admissions and after-8th-grade** rows, so the page says each thing once | C21 ("do the work for the consumer"), CA7 |
| **Differing rows** | Mark the differing rows with a rule or a label, never with colour alone | WCAG 1.4.1 (R3 S33), C21 |
| **≥768px** | Real two-column table; column headers sticky on scroll | C22, C23 |
| **≤767px** | Stacked blocks, each cell labelled with its school name — already decided after the build found the two-column table clipped at 390. This is the accessible analogue of freezing the left column: the row label becomes the block heading and repeats per school | C23, C22, `1_spec/03` section 4 |
| **Markup** | `<table>`, `<caption>`, `<th scope="col">` for the school names and `<th scope="row">` for the attributes, kept in the DOM at every width. The stacked look is CSS, not different markup | C25 |
| **No horizontal scroll at 390** | No exceptions, including inside in-app webviews | C23, REQ-015 |

### 5e. The secondary CTA set

Most visitors will not act today (C46, directionally), and the landing may not ask for anything (C33, CA12). The set therefore serves level-1 and level-2 commitment only, and every item is a standard link.

| # | Label (revised) | Destination | Why it is in the set | Basis |
|---|---|---|---|---|
| 1 | **Read the FAQ** | FAQ page | Self-serve answer, zero commitment, zero data | MD-02, C47 |
| 2 | **Talk to admissions** | HubSpot meeting link (contact page until it exists) | The human path. Must not collect anything on the landing itself | MD-02, C40, C32 |
| 3 | **Book a tour of the Georgetown campus** | Georgetown site | Current label "Book a campus tour" is ambiguous on a two-school page; the label must name the school and read correctly out of context | C31, C43, REQ-044 |
| 4 | **Join an online info session for GT Anywhere** | Anywhere site | Same reason; also the format cue the Anywhere door carries | C31, C43, REQ-044 |
| 5 | **How to apply** (jump link to section 5) | `#apply` | The steps double as an information action for the not-ready; families name "admission requirements and next steps" as a priority | C40, C48, C20 |
| 6 | **Proposed new row: "What it costs"** (jump link to the tuition row) | `#compare` tuition row | 99% call cost essential; 72% have eliminated a school on price. No such wayfinding exists today. **Do not ship silently** — raise as a new MD row for Nari, because it changes what the page promotes | C40, `09` "no requirement, no code" |

Rules for the set: none appears above the door CTAs; none is a button; none is repeated more than once; and the total link count on the page stays low, because link count is a named ad-quality factor and one measured test doubled conversion by removing navigation alone (C26, C10, CA14).

### 5f. Rubric row **Objective (L1)**: what a calibrated 5 looks like

Rubric question: *Can a parent tell in person from online and act in ten seconds at 390 and at 1280 by 720?* Evidence: first-screen screenshots at both sizes **taken in a real browser with chrome shown** (`100svh`, not a 390×844 canvas), plus the fold test and the T-051 parent run.

| Score | What the critic sees |
|---|---|
| **5** | At 390 with browser chrome shown **and** at 1280×720: the `h1`, the provenance line, **both complete door cards including both CTAs**, and the **top edge of the compare anchor** are visible without scrolling, and **the next band is visibly cut off** (no clean edge). The two cards are geometrically identical (height within 4px, same type sizes, same photo ratio, same CTA treatment, no badge on either). Each door line names **place and format explicitly** in ≤20 words at 12th-grade reading level or lower. Both CTAs carry the full school name and a verb matching the destination, and read correctly out of context. Nothing but the lockup, two utility links, `h1` and provenance line sits above the CTAs. First-screen word count 90–120. In T-051, **five of five parents name the right school and click within ten seconds at both sizes**, and **none asks which school is the main one** |
| **4** | All of the above except **exactly one** of: the compare anchor's top edge is not visible at 390 (but the CTAs are); one card is up to 12px taller; word count 120–140; one parent needs a second look yet still chooses correctly inside ten seconds |
| **3** | Both CTAs are visible at 390, but the doors read as unequal (different heights, one photo materially stronger, one CTA heavier), **or** a door line implies the difference rather than stating it, **or** the first screen ends on a clean horizontal edge (false floor) |
| **2** | A door CTA falls below `100svh` at 390, **or** a parent must scroll to discover that a second door exists, **or** the compare anchor is styled identically to the door CTAs |
| **1** | A parent cannot tell in person from online from the first screen, **or** the page visibly recommends one school, **or** a figure appears in the first screen without an Approved register row |

Two calibration notes for the critic. The ten-second test is **Nielsen's value-proposition window** (C1), not a stopwatch gimmick — the thing being measured is whether the parent can *state* what GT is and which door is theirs, not how fast they can move a mouse. And a mock that fits perfectly but ends on a clean edge scores **3, not 5**: fitting and finishing are different properties (C8, CP12).

### 5g. Changes this cluster proposes

| # | Target | Change | Basis |
|---|---|---|---|
| 1 | `1_spec/03` section 2, REQ-022, `check-claims.py`, V-022 | Extend the claims rule from figures to **implied and comparative** claims; add an enumerated outcome-verb/superlative flag list to `check-claims.py` as a human-review trigger | C37, C38, C39 |
| 2 | `copy.md` section 3 | Replace the three **"Same"** cells with the repeated value; trim every cell to ≤20 words; de-duplicate the shared rows against section 4's proof strip | C21, C16, CA6 |
| 3 | `copy.md` section 3 tuition row; Q-011 | Escalate Georgetown's "Tuition on request": 99% of families call cost essential and 72% have eliminated a school on sticker price, so the placeholder carries a measured cost | C40 |
| 4 | `copy.md` section 1 | The `h1` is **22 words**; `1_spec/03` section 5 requires first-screen sentences under 20. Either the sentence is cut to ≤20 or the spec's own rule is amended — it cannot stay in breach of itself | `1_spec/03` §5, C11 |
| 5 | `1_spec/03` section 4; `1_spec/13` | Restate the 390 acceptance in terms of **`100svh` in a real browser** rather than a 390×844 canvas, and add a **false-floor assertion** (something from the next section visibly cut off) to the fold test | C9, C8 |
| 6 | `1_spec/03` section 1 row 2; `copy.md` section 2 | Require the compare anchor's **top edge inside `100svh`** at 390 and a distinct in-page-link treatment | C20, C8 |
| 7 | MD-02 / `copy.md` section 6 | Rename the tour and info-session CTAs to name the school; add a proposed "What it costs" jump link as a **new MD row for Nari**, not a silent addition | C31, C43, C40 |
| 8 | `17` section 6 | Adopt the Objective calibration in 5f verbatim as the rubric's anchor descriptions | this file |

---

## 6. Open questions

| # | Question | Why it matters | Owner |
|---|---|---|---|
| OQ-1 | What is the **measured** small-viewport height at 390 inside the Instagram, Facebook and TikTok webviews on the target iOS and Android devices? | The whole first-screen budget in 5a is expressed in `svh`. Nobody has measured GT's actual webview `svh`, and TikTok's own policy requires both orientations to work. Until it is measured, the budget is a rule with an unknown denominator | Whoever runs REQ-024 / TC-030 |
| OQ-2 | Does Unbounce's 2024 corpus separate **routing pages** from **form pages**? | C11–C13 are the only large-sample landing-page corpus available, and every headline figure in it is a form conversion. GT's conversion is a navigation. If the corpus cannot separate them, C12's word-count figure must not be used as a GT target at all, only its reading-level figure | Whoever owns MD-03 |
| OQ-3 | What is the **conversion definition** the comparison block should be judged against? | The comparison is the page's second-most-read region but has no event beyond `compare_view`. Without a defined success signal (anchor click → door click after comparison), the block's shape cannot be evaluated after launch, only before | Johnny, with `1_spec/06` |
| OQ-4 | What are NAIS's **Jobs 1–4** in words? | C41 gives their prevalence (40 / 30+ / 19 / 10) but the fetched page never defines them; the definitions sit in a gated PDF. The prevalence numbers are useless without them, and a positioning brief built on "Job 2 is most common" without knowing what Job 2 is would be reasoning from a label | Whoever owns DEL-017 |
| OQ-5 | Is there a **K-12 or school-choice** equivalent of the 95:5 ratio? | C46 is derived for B2B five-year purchase cycles and its own author calls it imprecise. School choice runs on an annual admissions cycle, so the out-of-market share is almost certainly different and probably lower. CP10's direction holds; the ratio must not be quoted | Nari / Johnny |
| OQ-6 | Should the page carry the **"What it costs"** jump link (5e row 6)? | It is the best-evidenced addition in this cluster (C40) and the only one that adds a link to a page whose link count is an ad-quality factor (C26). It is a promotion decision, not a craft decision | Nari |
| OQ-7 | Does GT hold **competent and reliable evidence** for the three homepage speed multipliers, in the form the FTC describes? | Fact 3 of `00` records three multipliers already live on the Anywhere homepage. This cluster's finding is that substantiation must exist **before** dissemination and covers implication (C37). That is a question about the live site, not only about the new landing | Nari, with the claims register |

---

## 7. Sources

### 7a. Fetched with content (43)

| # | Source | URL | Tier |
|---|---|---|---|
| 1 | Jakob Nielsen, NN/g, "How Long Do Users Stay on Web Pages?", 11 Sep 2011 | https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/ | Original research (205M+ visits) |
| 2 | Fogg, Soohoo, Danielsen, Marable, Stanford, Tauber, *How Do People Evaluate a Web Site's Credibility?*, Stanford PTL / Consumer WebWatch, 29 Oct 2002 | http://credibility.stanford.edu/pdf/How_Do_People_Evaluate_a_Web_Site's_Credibility_v37.pdf | Original research (N = 2,684) |
| 3 | Sillence, Briggs, Fishwick, Harris, "Trust and mistrust of online health sites", CHI 2004 | https://eprints.whiterose.ac.uk/9909/ | Peer-reviewed (N = 15, 4 weeks) |
| 4 | Sbaffi & Rowley, *JMIR* 19(6):e218, 2017 | https://pmc.ncbi.nlm.nih.gov/articles/PMC5495972/ | Peer-reviewed systematic review (73 articles) |
| 5 | Gale, Black, Calvano et al., *JMIR* 23(12):e27750, 2021 | https://pmc.ncbi.nlm.nih.gov/articles/PMC8734930/ | Peer-reviewed (73 websites) |
| 6 | Scheibehenne, Greifeneder, Todd, *JCR* 37(3):409–425, 2010 | https://scheibehenne.com/ScheibehenneGreifenederTodd2010.pdf | Peer-reviewed meta-analysis (N = 5,036) |
| 7 | Chernev, Böckenholt, Goodman, *JCP* 25(2):333–358, 2015 | https://chernev.com/wp-content/uploads/2017/02/ChoiceOverload_JCP_2015.pdf | Peer-reviewed meta-analysis (N = 7,202) |
| 8 | Kim Flaherty, NN/g, "The Illusion of Completeness", 17 Jan 2016 | https://www.nngroup.com/articles/illusion-of-completeness/ | Original UX research |
| 9 | Kate Moran & Taylor Dykes, NN/g, "Comparison Tables", 9 Feb 2024 | https://www.nngroup.com/articles/comparison-tables/ | Original UX research |
| 10 | Amy Schade, NN/g, "Mobile Tables", 17 Sep 2017 | https://www.nngroup.com/articles/mobile-tables/ | Original UX research |
| 11 | Taylor Dykes, NN/g, "Explicitly State the Difference Between Options", 23 Aug 2024 | https://www.nngroup.com/articles/explicit-differences/ | Original UX research |
| 12 | Aurora Harley, NN/g, "Trustworthiness in Web Design: 4 Credibility Factors", 8 May 2016 | https://www.nngroup.com/articles/trustworthy-design/ | Original UX research |
| 13 | Katie Sherwin, NN/g, "Hierarchy of Trust", 6 Mar 2016 | https://www.nngroup.com/articles/commitment-levels/ | Original UX research |
| 14 | Jen Cardello, NN/g, "Social Proof in the User Experience", 19 Oct 2014 | https://www.nngroup.com/articles/social-proof-ux/ | UX synthesis over Cialdini |
| 15 | Katie Sherwin, NN/g, "'Learn More' Links: You Can Do Better", 13 Dec 2015 | https://www.nngroup.com/articles/learn-more-links/ | Original UX research |
| 16 | Aurora Harley & Kim Flaherty, NN/g, "'Get Started' Stops Users", 20 Aug 2017 | https://www.nngroup.com/articles/get-started/ | Original UX research |
| 17 | Kara Pernice, NN/g, "A Link is a Promise", 14 Dec 2014 | https://www.nngroup.com/articles/link-promise/ | Original UX research |
| 18 | Huei-Hsin Wang, NN/g, "In-Page Links for Content Navigation", 1 Oct 2023 | https://www.nngroup.com/articles/in-page-links-content-navigation/ | Original UX research (11 participants) |
| 19 | Huei-Hsin Wang, NN/g, "Homepage Design: 5 Fundamental Principles", 15 Mar 2024 | https://www.nngroup.com/articles/homepage-design-principles/ | UX synthesis |
| 20 | Katie Sherwin, NN/g, "University Websites: Top 10 Design Guidelines", 23 Apr 2016 | https://www.nngroup.com/articles/university-sites/ | Original UX research |
| 21 | Jakob Nielsen, NN/g, "Command Links", 13 May 2007 | https://www.nngroup.com/articles/command-links/ | UX guidance |
| 22 | Mark Crowley, Baymard Institute, "Product Comparison UX", 6 Sep 2022 | https://baymard.com/blog/provide-comparison-features | Original UX research + benchmark |
| 23 | Edward Scott, Baymard Institute, "Checkout Optimization: Minimize Form Fields", 26 Jun 2024 | https://baymard.com/blog/checkout-flow-average-form-fields | Original UX research + benchmark |
| 24 | Jamie Holst, Baymard Institute, perceived security & trust seals, 5 Oct 2016 | https://baymard.com/blog/perceived-security-of-payment-form | Original UX research |
| 25 | Unbounce, *2024 Conversion Benchmark Report* (all industries) | https://unbounce.com/conversion-benchmark-report/ | Single-vendor aggregate (41k pages, 57M conversions) |
| 26 | Unbounce, *2024 Conversion Benchmark Report* — education | https://unbounce.com/conversion-benchmark-report/education-conversion-rate/ | Single-vendor aggregate |
| 27 | Google Ads Advertising Policies, "Destination requirements" | https://support.google.com/adspolicy/answer/6368661 | Official platform policy |
| 28 | Google, Search Ads 360 Help, "Landing page experience" | https://support.google.com/sa360/answer/9351020 | Official platform documentation |
| 29 | TikTok Advertising Policies, "Ad Format and Functionality" | https://ads.tiktok.com/help/article/tiktok-ads-policy-ad-format-and-functionality | Official platform policy |
| 30 | TikTok Advertising Policies, "Best Practices for your landing page" | https://ads.tiktok.com/help/article/ad-review-checklist-landing-page | Official platform policy |
| 31 | FTC, "Notice of Penalty Offenses Concerning Deceptive or Unfair Conduct in the Education Marketplace", Oct 2021 | https://www.ftc.gov/system/files/attachments/penalty-offenses-concerning-education/final-notice-education.pdf | US federal regulatory notice |
| 32 | FTC, "Advertising FAQ's: A Guide for Small Business", Apr 2001, edited Jan 2025 | https://www.ftc.gov/business-guidance/resources/advertising-faqs-guide-small-business | US federal regulatory guidance |
| 33 | FTC, "FTC's Endorsement Guides: What People Are Asking" (2023 revision) | https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking | US federal regulatory guidance |
| 34 | Dr. Raquel Bermejo, Ruffalo Noel Levitz, 20 Nov 2025 | https://www.ruffalonl.com/blog/enrollment/where-institutions-meet-and-miss-prospective-family-expectations-in-recruitment/ | Sector survey research (~10,000 families, per the cited report) |
| 35 | NAIS, "Why Parents Choose Independent Schools: A National, Quantitative Analysis", 31 Aug 2020 | https://www.nais.org/resource-center/resources/research/why-parents-choose-independent-schools-a-national-quantitative-analysis/ | Sector survey research (definitions gated — see OQ-4) |
| 36 | GOV.UK Design System, "Start using a service" | https://design-system.service.gov.uk/patterns/start-using-a-service/ | Government design standard |
| 37 | W3C WAI, "Tables — Web Accessibility Tutorials" | https://www.w3.org/WAI/tutorials/tables/ | W3C standard guidance |
| 38 | Bramus Van Damme, web.dev, "The large, small, and dynamic viewport units", updated 29 Nov 2022 | https://web.dev/blog/viewport-units | Platform documentation |
| 39 | Olga Demidova, web.dev, "Milliseconds make millions", 24 Jun 2020 | https://web.dev/case-studies/milliseconds-make-millions | Commissioned study (30M sessions, 37 brands) |
| 40 | John Dawes, Ehrenberg-Bass Institute, "The 95:5 Rule", 2021 | https://johndawes.info/the-955-rule/ | Research-institute heuristic, self-described as imprecise |
| 41 | Ryan Lynch, HubSpot, "5 Landing Page A/B Tests (And Their Surprising Results)", updated 11 Jun 2025 | https://blog.hubspot.com/marketing/5-landing-page-a/b-tests-and-their-surprising-results | Case study (secondhand retelling) |
| 42 | Carnegie Higher Ed, "The Importance of Message Match: Landing Pages 101" (no date on page) | https://www.carnegiehighered.com/the-importance-of-message-match-landing-pages-101/ | Opinion (agency) |
| 43 | Ruffalo Noel Levitz 2025 report family (cited through #34; the blog post is the fetched artifact) | as #34 | Sector survey research |

### 7b. Attempted and not fetched — nothing in this file rests on these

| Source | URL | Result |
|---|---|---|
| CXL, "Mastering above the fold: how to encourage scrolling (and converting)" | https://cxl.com/blog/above-the-fold/ | **HTTP 403** to WebFetch; `curl` returned a Cloudflare JavaScript challenge. The cluster brief names CXL as a source and it could not be read this pass |
| CXL, "10 Useful Findings About How People View Websites" | https://cxl.com/blog/10-useful-findings-about-how-people-view-websites/ | **HTTP 403** |
| Lindgaard, Fernandes, Dudek, Brown, "Attention web designers: You have 50 milliseconds…", *Behaviour & Information Technology* 25(2):115–126, 2006 | https://www.tandfonline.com/doi/abs/10.1080/01449290500330448 | **HTTP 403.** The 50ms finding is *not* used anywhere above; C2–C5 carry the first-impression argument from sources that were read |
| PubMed record for Sillence et al. 2007, *Social Science & Medicine* | https://pubmed.ncbi.nlm.nih.gov/17328998/ | Cookie wall. The 2004 CHI paper by the same team was read instead (#3) |
| Meta advertising standards, deceptive content / misleading claims | transparency.meta.com (two paths tried) | **HTTP 404** on both. R3 OQ-2 already records that Meta publishes little developer-facing landing-page documentation; this pass adds a second failed attempt to that record |
| NAIS Jobs-to-Be-Done definitions | gated PDF behind #35 | Not public. See OQ-4 |
| Unbounce sample composition (routing vs form pages) | not published on either fetched page | See OQ-2 |
