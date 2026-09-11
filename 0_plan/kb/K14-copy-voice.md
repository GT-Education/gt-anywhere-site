# K14 Copy and voice for institutions

| Field | Value |
|---|---|
| Cluster | K14 of `18-knowledge-base-plan.md` section 1 |
| Feeds | `mockups/shared/copy.md` (every slot), `15-positioning-brief.md` section 4, DD-16, DD-30, DD-33, MD-06; the Design Director brief (`17` section 5); rubric rows **Objective (L1)** and **Mission (L3) and exclusivity (L4)** (`17` section 6); `1_spec/03` section 5 |
| Method | **55 distinct web sources fetched by this agent on 2026-09-11**: 18 by WebFetch, 37 by `curl` into `pages/` for measurement, including **25 institutional admissions/tuition pages (section 6e), of which 23 yielded measurable body prose** (2a; Dalton and Trinity excluded, no extractable body text, S38/S39). No browser tool. `gt.school`, `anywhere.gt.school` and `alpha.school` were **never loaded**; all GT-side text comes from `mockups/shared/copy.md` in this repo. WebSearch was unavailable (session budget exhausted at 200/200), so every source below was reached by a direct URL |
| Measurement | Two stdlib scripts (no dependency added to the repo; they live in the session scratchpad, not in `tools/`). `measure.py` computes Flesch Reading Ease and Flesch–Kincaid Grade Level from the published formulas and **calibrates to 37.5 / 11.3 on Wikipedia's documented platypus example**, matching to one decimal. `prose.py` extracts `<h1> <h2> <p> <li>` body prose from a saved page, so the corpus figures are body copy, not navigation |
| Caution | Every figure below is a **fact about another institution or about research**, not a claim about GT School, so none needs a claims-register row. REQ-022 and DEL-018 still govern anything that reaches a GT surface. Nothing in section 5 edits `copy.md`: all proposals go to Nari through the register |
| Relation to K5 and K6 | K5 section 3.2 inventoried **subheads** across 22 schools; this file measures **body prose, sentence length, person and register** across 23 of its own pages, and the two sets overlap only in site identity, never in measurement. K6 section 5a set the first-screen **word** budget; this file sets the **sentence and register** budget inside it, and confirms K6's `h1` breach independently (K14-F40) |
| Status | Draft 2026-09-11, Fable. Astra E4 pending |

---

## 1. Question

Six questions, in order.

1. **How elite schools and universities actually write.** Sentence length, person, register, how they name themselves and their programmes, how they state selectivity and cost, and how they avoid hype.
2. **What plain-language and content-design practice requires.** GOV.UK content design, Nielsen Norman Group, the Federal plain-language line, and the readability research beneath both.
3. **What reading level a parent reads comfortably**, and what the evidence actually supports.
4. **How institutions write for parents specifically**, as distinct from writing for students or applicants.
5. **Microcopy**: CTAs, labels, comparison cells, footnotes, provenance lines, and honest writing about an online school.
6. **Reading-level tools and their limits**, stated precisely enough that a number in this file cannot be misused.

---

## 2. Findings

### 2a. The measured corpus: 23 institutional pages, body prose only

Fetched by `curl` on 2026-09-11, stripped to `<p> <li> <h1> <h2>`, measured with the calibrated script. Sources are listed in section 6; "med" is the median sentence length in words; ">20w" is the share of sentences over twenty words; "we" and "you" are raw counts of first- and second-person markers in the body prose.

| # | Page | Words | Words/sent | FK grade | med | >20w | we | you |
|---|---|---|---|---|---|---|---|---|
| K14-F1 | Phillips Exeter, Financial Aid & Tuition | 157 | 12.1 | **8.0** | 8 | 15% | 8 | 6 |
| K14-F2 | Phillips Exeter, Admissions | 126 | 12.6 | **8.2** | 15 | 10% | 4 | 6 |
| K14-F3 | Penn State World Campus, home | 188 | 17.1 | **8.8** | 15 | 9% | 2 | 8 |
| K14-F4 | Prenda, home | 3,606 | 16.9 | 9.2 | 16 | 30% | 42 | 110 |
| K14-F5 | Success Academy, apply | 698 | 15.9 | 10.7 | 13 | 16% | 10 | 17 |
| K14-F6 | Stanford OHS, Admissions | 1,240 | 15.9 | 10.7 | 14 | 22% | 49 | 16 |
| K14-F7 | Groton, Admission | 390 | 15.6 | 11.7 | 9 | 36% | 10 | 6 |
| K14-F8 | Stanford Undergraduate Admission, Apply | 499 | 14.7 | 11.7 | 15 | 27% | 19 | 20 |
| K14-F9 | Khan World School @ ASU Prep | 771 | 16.8 | 11.8 | 15 | 26% | 7 | 25 |
| K14-F10 | Davidson Academy Online | 619 | 19.3 | 12.5 | 19 | 34% | 9 | 0 |
| K14-F11 | Stanford OHS, home | 859 | 20.5 | 12.6 | 19 | 48% | 12 | 1 |
| K14-F12 | The Harker School, Admission | 359 | 16.3 | 12.7 | 11 | 27% | 19 | 11 |
| K14-F13 | Lakeside School, Admissions | 632 | 18.1 | 13.0 | 16 | 26% | 17 | 6 |
| K14-F14 | BASIS Independent, home | 165 | 18.3 | 13.2 | 18 | 33% | 4 | 0 |
| K14-F15 | Minerva University, undergraduate | 641 | 16.0 | 13.2 | 16 | 35% | 1 | 28 |
| K14-F16 | MIT Admissions, first-year eligibility | 279 | 23.2 | 13.4 | 27 | **67%** | 4 | 9 |
| K14-F17 | Caltech, first-year applicants | 35 | 17.5 | 13.5 | 26 | 50% | 2 | 1 |
| K14-F18 | Laurel Springs School, home | 557 | 27.9 | 14.0 | 21 | 55% | 4 | 2 |
| K14-F19 | Horace Mann, Admissions | 769 | 21.4 | 14.2 | 22 | 50% | 15 | 14 |
| K14-F20 | Phillips Andover, Tuition and Financial Aid | 320 | 26.7 | 15.0 | 21 | 58% | 6 | 2 |
| K14-F21 | Nueva School, Admissions | 1,274 | 29.6 | **16.5** | 23 | 63% | 25 | 4 |
| K14-F22 | Sidwell Friends, Admissions | 354 | 27.2 | **17.1** | 13 | 23% | 8 | 4 |
| K14-F23 | The Hotchkiss School, Admission | 845 | 52.8 | **20.5** | 15 | 31% | 5 | 5 |

**K14-F24 — the field's central tendency.** Median FK grade **12.7**; median words per sentence **17.5**; median sentence length **16 words**; median share of sentences over twenty words **31%**. Only **4 of 23** pages are at or below FK 10; **9 of 23** at or below FK 12; **5 of 23** above FK 14. The two cleanest pages in the whole set are Exeter's, at FK 8.0 and 8.2. Exeter is commonly described as highly selective, but this corpus gathered no admission-rate or comparative selectivity data for any of the 23 institutions, so ranking Exeter as "the most selective school in the corpus" is **Judgment**, not a finding, and no principle in this file rests on that ranking.

**K14-F25 — person is split, and split by page job.** Median `we/our/us` count is 8, median `you/your` is 6; only **8 of 23** pages use "you" more than "we". The eight that do are the pages whose job is to move a reader through a process (Minerva, Prenda, Khan World School, Stanford Admission, Success Academy, Caltech, Exeter admissions, World Campus). The "we"-dominant pages are the ones describing the institution to itself (Stanford OHS admissions, 49 "we" against 16 "you"; Nueva, 25 against 4). **The rule the corpus follows is: describe the school in "we", instruct the parent in "you".**

**K14-F26 — the long tail is where the damage is.** Hotchkiss's 52.8 words per sentence and Sidwell's 95-word p90 are not evenly distributed prose; they are single unbroken paragraphs of programme description. A page can have a respectable median sentence (Sidwell, 13 words) and still be unreadable in the one paragraph that matters. Median is not enough; the **longest** sentence is the number to police.

### 2b. How they state selectivity — verbatim

| # | Institution | Verbatim | The move |
|---|---|---|---|
| K14-F27 | Davidson Academy Online | "Profoundly gifted students are those who score in the 99.9th percentile on IQ and achievement tests." | The number is the **definition of the audience**, in a declarative sentence with no adjective of praise. 16 words |
| K14-F28 | Phillips Andover (meta description) | "We admit students because of their achievement, talent, character, and promise — and then we make sure they're fully supported." | Selectivity and access in **one 20-word sentence**, no figure at all, and the second clause defuses the first |
| K14-F29 | Caltech | "Cost should never get in the way of you applying to or affording Caltech." | Objection named before it is raised; second person; 14 words |
| K14-F30 | The Harker School | "And if cost feels like it might stand between your family and a Harker education, it doesn't have to. We work confidentially with families to help make Harker affordable." | Addressed to **"your family"**, not to the student; the only page in the corpus that names the feeling before the fact |
| K14-F31 | Success Academy (`h1`) | "There's Still Time! Apply by Sept. 23rd." | Deadline urgency in the `h1`, with an exclamation mark. The **only** urgency device in the corpus, and the only page with a real external deadline |

**K14-F32 — nobody in the corpus states an admission rate.** Not one of the 23 pages publishes an acceptance percentage on the page fetched. Two publish a percentile as a *definition of who is eligible* (Davidson, 99.9th; Nueva's "gifted learners" without a number). The field's convention is to state **who the school is for**, not **how many are refused**.

### 2c. How they state cost — verbatim

| # | Institution | Verbatim | The move |
|---|---|---|---|
| K14-F33 | Phillips Exeter | "Families making less than $150,000 pay no tuition, and we also have generous aid programs for middle- and upper-income families." | One sentence, one threshold, one figure. 20 words |
| K14-F34 | Sidwell Friends | "$55,250 (preK-Grade 2) $58,050 (Grades 3-4) $61,830 (Grades 5-8) $62,330 (Grades 9-12)" | Bare figures by grade band, no sentence at all |
| K14-F35 | Khan World School @ ASU Prep | "Arizona Residents: the state covers full-tuition, students attend at no-cost." / "Arizona students paying tuition with ESA/scholarship funds will pay $8,250 each year." / "Students who live in the U.S., but outside Arizona, will pay $10,500 per year tuition." | **Three prices side by side**: state-covered, voucher-funded, and full pay. The closest published analogue to GT Anywhere's $10,400-plus-TEFA row, and it resolves the ambiguity by enumerating rather than by qualifying |
| K14-F36 | The Hotchkiss School | "As one of the top prep schools in Connecticut, we are committed to academic excellence — and tuition that's accessible to everybody." | The anti-model: a superlative ("one of the top") doing the work a figure should do |

**K14-F37 — every school in the corpus that has a price publishes it.** Exeter, Andover, Sidwell, Horace Mann, Khan World School and Laurel Springs all state either a figure or a threshold on the page fetched. None says "tuition on request". K6 C40 already prices that placeholder as an elimination risk; this corpus adds that it is also **outside the convention of the field**.

### 2d. Hype: measured, not asserted

Counting a fixed list of 22 promotional words in the body prose of 25 pages:

| # | Finding |
|---|---|
| K14-F38 | **"Journey" appears on 10 of 25 sites; "passion" on 6; "thrive" on 7; "unique" on 8; "innovative" on 5; "rigorous" on 5; "excellence" on 6; "vibrant" on 4.** Dalton's tagline, "A School that Inspires and Empowers Each Student's Journey", is quoted here from general knowledge of the school's public branding, not from S38's fetch — flagged **Judgment**, since S38 returned no extractable body text (section 6e). Stanford OHS's admissions `h1` is "Your Journey Begins Here", which is sourced: both Stanford OHS pages (S49, S50) are in the measured 2a corpus |
| K14-F39 | **Five pages carry zero hype words**: BASIS Independent, Caltech, Exeter financial aid, MIT Admissions, Sidwell. The densest measured page is Nueva at 12 instances. Dalton's page (S38) was excluded from 2a because no body prose was extractable, so a hype-word density for Dalton cannot be measured here and "Dalton and Nueva at 12 instances each" (the earlier wording) overstated what this file actually counted. This corpus gathered no admission-rate or selectivity variable for any institution, so any claim of correlation (or its absence) between hype and selectivity is **Judgment**, not a finding; what the counts do show is that hype density varies independently of a school's public reputation, closer to a house style than a market position |
| K14-F40 | **`copy.md` v1 carries zero hype words** across all 65 slots measured in 5b (E5a recount, `measurements/K14/deck-measures.md`), tested against the words this file can itself name (5b). It also carries zero superlatives and zero exclamation marks. On this measure the deck already outperforms 20 of 25 elite-school pages |

### 2e. Plain-language doctrine, with its own evidence

| # | Finding | Source |
|---|---|---|
| K14-F41 | "Plain English is mandatory for all of GOV.UK." Not a preference: a publishing standard | GOV.UK, "Use clear language" |
| K14-F42 | The specialist objection is answered by evidence, not by assertion: research into specialist legal language found "80% of people preferred sentences written in clear English – and the more complex the issue, the greater that preference", and "the more educated the person and the more specialist their knowledge, the greater their preference for plain English" | GOV.UK, "Use clear language" |
| K14-F43 | Independently measured: a study of experts (IT managers, a professor, a nurse practitioner) found the same. Recommendation for expert and scholarly audiences is **10th–12th grade**, above which "text… demands excessive cognitive effort even for highly educated professionals" | Hoa Loranger, NN/g, 8 Oct 2017 |
| K14-F44 | General consumer audiences: target **8th grade**; educated or specialised audiences: **12th grade** | Jakob Nielsen, NN/g, 15 Nov 2015 |
| K14-F45 | Lower-literacy readers do not scan — they "plow" word by word and miss anything outside the main text flow. Recommendation: **6th grade on homepages and key pages, 8th elsewhere**. One case study moved success from 46% to 82% | Jakob Nielsen, NN/g, 13 Mar 2005 |
| K14-F46 | "79 percent of our test users always scanned any new page they came across; only 16 percent read word-by-word." Measured usability gains against a promotional control: **concise +58%, scannable +47%, objective +27%, all three combined +124%** | Morkes & Nielsen, NN/g, 1997 |
| K14-F47 | "Web users read only 18% of added verbiage." Fragments beat sentences where a fragment carries the information | Jakob Nielsen, NN/g, 8 Jun 2008 |
| K14-F48 | Users see about **two words** of a list item when scanning; front-load the substantive words | Jakob Nielsen, NN/g, 6 Apr 2009 |
| K14-F49 | Specialist terms are permitted: "Where you need to use specialist terms, you can… You just need to explain what they mean the first time you use them." This is DD-30's policy, stated by an independent authority | GOV.UK, "Use clear language" |
| K14-F50 | Words to replace, verbatim from the list: *deliver* → "make, create, provide"; *empower* → "allow"; *facilitate* → "say something specific about how you're helping"; *key* → "usually not needed"; *leverage* → "use"; *foster* → "encourage, help"; *impact* → "have an effect on"; *promote*, *progress*, *advance*, *focus* all carry plainer replacements. Words ending in "–ion" and "–ment" "tend to make sentences longer and more complicated than they need to be" | GOV.UK A to Z style guide, "Words to avoid" |
| K14-F51 | Plain language is a US statutory standard for federal public content: the Plain Writing Act of 2010 defines it as "writing that is clear, concise, well-organized, and follows other best practices appropriate to the subject or field and intended audience" | digital.gov, Plain language guide |

### 2f. Tone, measured

| # | Finding | Source |
|---|---|---|
| K14-F52 | Tone has four measurable dimensions: **formal/casual, serious/funny, respectful/irreverent, matter-of-fact/enthusiastic**. Differences along them are statistically significant (p < 0.05) but modest, "around 0.5–1 point on a 5-point scale" | Kate Moran, NN/g, 17 Jul 2016 (rev. 2023) |
| K14-F53 | In a 100-participant study, **"52% of the variability in the desirability scores is explained by trustworthiness"**; friendliness added only 8%. A playful tone read friendlier but **less trustworthy**, with no gain in willingness to recommend. A casual-but-serious bank tone gained 0.7 on friendliness, 0.3 on trust and 0.4 on recommendation | Kate Moran, NN/g, 7 Aug 2016 (rev. 2024) |
| K14-F54 | GOV.UK's own tone target is "incisive (friendliness can lead to a lack of precision and unnecessary words) – but remain human (not a faceless machine)" and "emotionless – adjectives can be subjective and make the text sound more emotive and like spin". Write "conversationally… but with the authority of someone who can actively help" | GOV.UK, "Use the right tone" |
| K14-F55 | IBM's brand voice, as published to every writer in Carbon: "It's persuasive, not poetic." "It's confident, but not boastful." "It only ever uses figurative language for emphasis." "It elevates facts and outcomes." | IBM Carbon Design System, Content overview |
| K14-F56 | Mailchimp: "We are plainspoken. We understand the world our customers are living in: one muddled by hyperbolic language, upsells, and over-promises. We strip all that away and value clarity above all." And: "We want to educate people without patronizing or confusing them." | Mailchimp Content Style Guide, Voice and Tone |
| K14-F57 | Person, stated as a rule: "Address the user as 'you' where possible", and — the constraint that matters for a two-school umbrella — "make sure you've already used the full name of your organisation before you use 'we'. Do not assume the audience will know who the 'we' is" | GOV.UK, "Use the right tone" |

### 2g. Microcopy: titles, links, buttons

| # | Finding | Source |
|---|---|---|
| K14-F58 | "Your title should be 65 characters or less (including spaces)", because "Google cuts off the rest of the title at around 65 characters" and "longer titles are harder to understand" | GOV.UK, "Write clear titles" |
| K14-F59 | Page titles: 40–60 characters is the band that ranks and reads; move keywords to the front; "Skip leading articles like 'the' and 'a'" | Loranger & Nielsen, NN/g, 29 Jan 2017 |
| K14-F60 | Link labels obey **four Ss**: *specific* ("what they'll find on the other side of a click"), *sincere* ("a link is a promise"), *substantial* (the label must "stand alone"), *succinct*. Succinct is explicitly ranked **last** of the four | Kate Moran, NN/g, 24 Mar 2019 |
| K14-F61 | Buttons: "Write button text in sentence case, describing the action it performs", with the object added when the verb alone is ambiguous ("Add another address") | GOV.UK Design System, Button |
| K14-F62 | Action labels should be **consistent across the product** and formed as verb-plus-object where the verb alone could mean several things ("Add user", "Copy folder"). Consistency is the usability property, not brevity | IBM Carbon, Action labels |
| K14-F63 | Do not put links in titles, summaries or subheadings; link to a specific page rather than a site's homepage | GOV.UK, "Write effective links" |
| K14-F64 | A disclosure is judged by whether it can be missed: it "should catch users' attention and be placed where they aren't likely to miss it", and "is more likely to be seen if it's very close to, or – even better – part of" the thing it qualifies. A hyperlinked "DISCLOSURE" is "easily avoidable, meaning that the disclosure is not clear and conspicuous" | FTC, Endorsement Guides: What People Are Asking |

### 2h. The wayfinding vocabulary schools actually use

Distinct link labels across the 25 school pages, counted once per site:

| # | Finding |
|---|---|
| K14-F65 | The field's shared vocabulary, by prevalence: **Contact us 20/25 · Academics 16/25 · About 15/25 · Apply 12/25 · Admissions 12/25 · Learn more 10/25 · Student life 10/25 · How to apply 8/25 · Admissions events 7/25 · FAQs 7/25 · Financial aid 6/25 · Middle school 9/25 · High school 6/25 · Request information 5/25 · Calendar 5/25 · Parents 5/25** |
| K14-F66 | **"Learn more" survives on 10 of 25 sites** despite being NN/g's canonical example of a label that fails all four Ss. Prevalence is not endorsement; it is inertia |
| K14-F67 | **The comparison vocabulary does not exist in this field.** "Compare" appears on 1 of 25 sites (Khan World School); "side by side" on 1; "which school", "not sure", "difference between" and "right for your" on **0 of 25**. GT's compare anchor is a borrowed commerce pattern. That is not a reason to drop it — K6 C21 and C16 justify it on evidence — but it does mean the words must be the parent's words, not a retailer's |
| K14-F68 | **"Guide" is a document in this field, not a person.** It appears on 15 of 25 sites, and the senses fetched are "step-by-step guide" (Exeter), "Giving Guide" (Horace Mann), "campus guide". The only site where "Guide" is a staff title is **Prenda** — a microschool network in the same vocabulary family as Alpha. So GT's decided title (D-005 at G0.5, item 5: Guides) is a minority usage in this field. Whether "a first-time parent will read it as a booklet unless the first use disambiguates it" is **Judgment**: it is this file's inference from the corpus's dominant usage, not a tested finding — no parent-comprehension test of the word "Guides" exists here (see OQ-7). DD-30 (jargon policy) is **Proposed**, not yet Decided, so no wording in this file may treat the disambiguation requirement as settled |
| K14-F69 | Nobody labels the online arm as a separate category in the primary nav. Penn State World Campus endorses upward — `h1` "Earn Your Penn State Degree Online", six words, FK 8.8, the lowest of any online school in the corpus. Laurel Springs does the opposite: `h1` "A Top Online School Built Around Your Child", where "Top" is an unsubstantiated superlative doing a proof's job |

### 2i. Writing honestly about an online school

| # | Finding | Source |
|---|---|---|
| K14-F70 | The honest online schools answer the community objection with **specifics, not adjectives**. Stanford OHS: "Students from around the world are welcome to apply… students can attend from their home country without relocating or attending classes in person." Davidson Online: "Students experience friendship with intellectual peers, extra-curricular activities, community involvement and more" | Fetched pages, 2026-09-11 |
| K14-F71 | The dishonest pattern is the adjective stack. Laurel Springs: "belonging to a vibrant community… our 1:1 support services, diversified course catalogs, and vibrant student community are unparalleled." Two "vibrant" and one "unparalleled" in two sentences, with no fact between them | Laurel Springs, home |
| K14-F72 | Davidson Online's strongest community evidence is a **named student's own sentences** about group chats and calls, not the school's assertion. First-person student testimony is doing the work an adjective cannot | Davidson Academy Online |
| K14-F73 | Full-time online schooling carries a published achievement question: CREDO at Stanford published the *Online Charter School Study*, whose own press release is titled "Online Charter School Students Falling Behind Their Peers". **Weak provenance:** only the study's landing page was reached, not the report; the effect sizes are not quoted here and must not be quoted from memory. Recorded because it is the counter-evidence any journalist will raise against GT Anywhere, not because it is measured here | CREDO study landing page |

### 2j. Reading level: the numbers, and what they cannot carry

| # | Finding | Source |
|---|---|---|
| K14-F74 | Flesch Reading Ease = 206.835 − 1.015(words/sentences) − 84.6(syllables/words). Flesch–Kincaid Grade Level = 0.39(words/sentences) + 11.8(syllables/words) − 15.59. Developed under contract to the US Navy in 1975 by J. Peter Kincaid and colleagues | Wikipedia, Flesch–Kincaid readability tests |
| K14-F75 | Both formulas use exactly **two inputs**: average sentence length and average syllables per word. They contain no term for vocabulary familiarity, organisation, coherence, layout or the reader. A sentence can be rewritten to score better while meaning less | Derived from K14-F74 |
| K14-F76 | The documented weakness, verbatim: "As readability formulas were developed for school books, they demonstrate weaknesses compared to directly testing usability with typical readers. They neglect between-reader differences and effects of content, layout and retrieval aids" | Wikipedia, as above |
| K14-F77 | Klare and colleagues, 1969: "For these reasons, formula scores are better thought of as rough guides than as highly accurate values." Ojemann warned in **1934** that the formulas "are not to be applied mechanically", and DuBay records that the caution has been "expressed throughout readability literature" ever since | DuBay, *The Principles of Readability*, 2004, p. 19 |
| K14-F78 | The critique literature is a genre of its own: "Why Readability Formulas Fail" (Bruce et al. 1981), "Readability is a Four-letter Word" (Selzer 1981), "Readability Formulas: What's the Use?" (Duffy 1985), "Last Rites for Readability Formulas in Technical Communication" (Connaster 1999). DuBay's defence is narrow and worth keeping: the alternatives "fail to do what the formulas do: provide an objective prediction of text difficulty" | DuBay, 2004, pp. 2, 19 |
| K14-F79 | The National Adult Literacy Study found "the average adult in the U.S. reads at the 7th grade level"; health-literacy specialists recommend public materials at **fifth or sixth grade** (Doak et al. 1996; Weiss and Coyne 1997) | DuBay, 2004, p. 1, citing NCES 1993 |
| K14-F80 | PIAAC, 2012–15 cycle: "18 percent of U.S. adults performed at or below Level 1 in literacy"; "50 percent of U.S. adults performed at Level 3 or above" | NCES, PIAAC results summary |
| K14-F81 | A second reading of the same programme: "over 1 in 5 adults have a literacy proficiency at or below Level 1", about 130 million American adults aged 16–74 with low literacy | APM Research Lab |
| K14-F82 | An alternative to grade-level scoring exists and is structural, not arithmetic: the CDC Clear Communication Index scores "4 introductory questions and 20 scored items", grouped as message clarity and structure (11), behavioural guidance (3), numerical communication (3) and risk communication (3). It is the only instrument in this cluster that scores whether the **numbers** in a message are communicated well — directly relevant to a page carrying a percentile, a tuition figure and a voucher | CDC Clear Communication Index |

**K14-F83 — the honest statement of what an FK number means on this project.** An FK grade of 8.2 for a sentence means *its average sentence length and average syllable count resemble those of texts an eighth-grader can read*. It does not mean a parent will understand it; "Mastery-based: students advance on demonstrated mastery, measured with MAP assessments" scores FK 17.8 mostly because "mastery", "demonstrated" and "assessments" are long, and it would score better — while saying less — if "MAP" were dropped. Every FK figure in section 5 is therefore reported **with its word count and its longest sentence**, which are the two numbers a writer can act on, and never alone.

---

## 3. Principles the studio adopts

| # | Principle | Traces to |
|---|---|---|
| K14-P1 | **The longest sentence is the budget, not the average.** No sentence anywhere on the landing exceeds 25 words; no first-screen sentence exceeds 20, except the decided umbrella sentence itself (22 words, one sentence, R2), which is fixed and is not a target for a mock to shorten | F24, F26, K6 5a |
| K14-P2 | **Describe the school in "we", instruct the parent in "you", and never say "we" before "GT School" has appeared.** | F25, F57 |
| K14-P3 | **Plain word first, GT term second, once.** A specialist term is allowed if it is explained at first use, and only then | F49, DD-30, F68 |
| K14-P4 | **Trust is the tone target, not warmth.** Warmth that costs precision is a net loss: trustworthiness explains 52% of desirability, friendliness 8% | F53, F54 |
| K14-P5 | **Confident, not boastful; persuasive, not poetic; facts, not adjectives.** Figurative language only for emphasis, never to carry a claim | F55, F56 |
| K14-P6 | **Front-load every heading, label and link** — the first two words carry the scan | F48, F59 |
| K14-P7 | **A link is a promise and must stand alone.** Specific, sincere, substantial, then succinct — in that order | F60, F63 |
| K14-P8 | **State the bar as a definition of the audience, never as a rate or a boast** | F27, F28, F32 |
| K14-P9 | **State cost, or state when cost will be stated.** Silence is not neutral in this field | F33–F37, K6 C40 |
| K14-P10 | **Answer the online school's objection with a fact, a name or a date — never with an adjective** | F70–F72 |
| K14-P11 | **The provenance line sits next to what it qualifies, in the reader's line of sight.** A disclosure that has to be sought is not a disclosure | F64 |
| K14-P12 | **Report reading level as a triple** (FK grade, word count, longest sentence) or not at all | F83, F75–F78 |

---

## 4. Anti-patterns

| # | Anti-pattern | Evidence |
|---|---|---|
| K14-A1 | **"Journey."** On 10 of 25 sites, including two taglines. It says nothing, and in a two-door page it actively confuses, because the parent's journey is the thing the page is trying to end | F38 |
| K14-A2 | **The adjective stack in place of proof.** "vibrant… vibrant… unparalleled" in two sentences | F71 |
| K14-A3 | **A superlative doing a figure's job.** "one of the top prep schools in Connecticut"; "A Top Online School". Under REQ-022 and K6's implied-claim finding, GT cannot write either | F36, F69 |
| K14-A4 | **Urgency in the `h1`.** "There's Still Time! Apply by Sept. 23rd." Legitimate for a school with a real published deadline; forbidden here by MD-06 | F31 |
| K14-A5 | **"Learn more."** Fails all four Ss, and survives on 10 of 25 sites purely by convention | F60, F66 |
| K14-A6 | **The unbroken programme paragraph.** A 95-word p90 behind a respectable 13-word median | F22, F23, F26 |
| K14-A7 | **"We" before the name.** A parent who lands from an Instagram ad does not yet know who "we" is | F57 |
| K14-A8 | **"Tuition on request."** Outside the field's convention and priced as an elimination risk | F37, K6 C40 |
| K14-A9 | **A press item as the `h1`.** Khan World School's current `h1` is an award announcement, so the page's orientation sentence is not the page's first heading | F9 |
| K14-A10 | **Optimising the FK score by deleting the specifics.** Dropping "MAP" improves the number and weakens the sentence | F83 |
| K14-A11 | **"Guides" undefined on first use.** In this field "guide" is a booklet; only Prenda uses it as a staff title | F68 |
| K14-A12 | **A provenance line placed where it can be missed** — in a footer, behind a link, or in smaller type than its surroundings can bear | F64, P11 |

---

## 5. How it applies to GT

### 5a. The voice guide

Every "do" example is either already in `copy.md` or is a proposal in 5c. Every "do not" example is real text from the fetched corpus, never invented.

| Dimension | Do | Do not | Example from the deck / corpus |
|---|---|---|---|
| **Sentence length** | Keep the longest sentence on the page under 25 words; under 20 in the first screen | Let one programme paragraph run to 30+ | Do: "On campus in Georgetown, Texas, north of Austin." (8 w). Do not: Hotchkiss at 52.8 words per sentence |
| **Register** | Declarative, present tense, concrete nouns | Nominalisations in "–ion" and "–ment" where a verb exists | Do: "Students advance when they show mastery, not when the calendar says so." Do not: "measured with MAP assessments" (F50, F83) |
| **Person** | "We" for the school after "GT School" has appeared; "you/your family" for the parent's actions | "We" in the first element a visitor meets | Do: "Meet us for a family conversation." Do not: an opening "We believe…" (Avenues, K5 S18) |
| **Adjectives** | Facts that imply the adjective | Adjectives that assert the fact | Do: "Four intensive weekends a year in Georgetown." Do not: "a vibrant student community" |
| **Selectivity** | The bar as a definition of who the school is for | A rate, a rank, or "elite" | Do: "Admission at the 90th percentile and above." Do not: "one of the top…" |
| **Cost** | The figure, or the date the figure arrives | "On request" | Do: "$10,400 a year." Do not: "Tuition on request." (A-8) |
| **Jargon** | Plain word, then the GT term, once | The GT term alone on first use | Do: "Guides, not lecturers: adults who coach, check in every week and hold the bar" (proof fact 3, 5c). Do not: "Live Guides online" as the first appearance of the word (A-11); do not assert "teachers, whom we call Guides" — DD-30 (jargon policy) is Proposed, not Decided, and has not verified that role equivalence |
| **Proof** | A source line with a checked date | A badge, a seal, a superlative | Do: the sources line in section 4. Do not: any Cognia mark (Q-033) |
| **Warmth** | Warmth from naming the reader's situation | Warmth from exclamation, emoji or "please" | Do: "Not sure which is right for your family?" Do not: "We look forward to connecting with your family this fall!" (Lakeside) |
| **Motion of the eye** | Front-load the first two words of every label | Labels that begin with "the", "a", or "Learn" | Do: "Explore GT Anywhere". Do not: "Learn more" (A-5) |
| **Numbers** | Numerals, with the unit, in a short sentence | A number inside a long clause | Do: "9 to noon". Do not: a percentile embedded mid-sentence |
| **Provenance** | One line, next to the `h1`, in body-legible type | A footer line or a link | Do: "The gifted school in the Alpha School network." Do not: moving it to section 8 (F64) |

### 5b. `copy.md` v1, measured

Recomputed for E5a (2026-09-11) directly from `copy.md` with `0_plan/kb/measurements/K14/deck-measures.py` (self-tested against Wikipedia's platypus FK example; full output at `measurements/K14/deck-measures.md`), superseding the original scratchpad script, which cannot be re-run. Covers 65 slots — every reader-facing string in `copy.md`, each transcribed and cited in the script; the original count of 45 could not be reconstructed and is not used below. Reported as FK grade / words / longest sentence, per K14-P12. The numbers for **proposed alternative** rewrites elsewhere in 5c and 5d are as originally computed and have not been re-verified by this script, since that text is not in `copy.md`.

| Aggregate | Value | Test |
|---|---|---|
| **Whole deck, all 65 slots** | FK **8.1**, 536 words, 78 sentences, 6.9 words/sentence, longest **26** | Passes NN/g's 8th-grade general-audience target (F44) at the aggregate, and sits **4.6 grades below the field median of 12.7** (F24) |
| **First screen** (header links, `h1`, provenance, both door lines and CTAs, compare anchor) | FK **7.8**, 86 words, 10 sentences, 8.6 words/sentence, longest **22** | 86 words reconciles with K6's 95: K6 additionally counts the two door labels and two door names (8 words) and the lockup. Both sit inside K6's 90–120 budget. Every figure here is computed with each slot terminated, because concatenating unpunctuated headings merges them into the next slot and inflates the longest sentence to a phantom 35 |
| **Person, whole deck** | we/our/us **3**, you/your **6** | "You" leads "we", as the field's process pages do (F25). The first "we" is "our Georgetown, Texas campus" in the `h1` — after "GT School", so F57 is satisfied |
| **Hype words** | **0 of 22** | Beats 20 of 25 elite-school pages (F40) |
| **GOV.UK words-to-avoid hits** | **4**: *advance* ×2, *focus(ed)* ×2 | All four are used in their literal senses. Keep *advance* (it is the mastery mechanism); *focused* is padding in both places |
| **Longest sentence in the deck** | **26** words, the sources line's first sentence | Breaches K14-P1's 25-word ceiling by one word. Next longest: the `h1` at 22 |
| **Slots above FK 12** | **5** of the 38 slots of five words or more | `h1` 12.3 · door 1 line 12.6 · TEFA body 14.1 · proof fact 2 17.8 · sources line 21.9. The two header links ("Current families", "Contact admissions") score 14.7 apiece, which is meaningless: FK on a two-word fragment is division by a sentence that does not exist — a small, local demonstration of F75 |

### 5c. Slot-by-slot review

"Change" columns are **proposals for Nari through the register**, not edits. Slots not listed measure clean and need no change.

| Slot | Now | FK / words / longest | Finding | Proposed alternative |
|---|---|---|---|---|
| `h1` umbrella | "GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere." | 12.3 / 22 / 22 | Breaches `1_spec/03` §5 and K6 5a (≤20 words). Confirms K6 change 4 independently | See 5d |
| Provenance line | "The gifted school in the Alpha School network." | 3.8 / 8 / 8 | Cleanest slot in the deck. Keep the wording **and the position**: F64 makes placement, not wording, the risk | No change to wording. Add a placement rule: same visual block as the `h1`, never smaller than the door lines' type |
| Door 1 line | "Two hours of mastery academics each morning on our Georgetown, Texas campus, afternoons for workshops and building." | 12.6 / 17 / 17 | Inside the word budget and, at FK 12.6, inside 5g's first-screen ceiling (widened to FK 13 for slots of five words or more, R2, so this line no longer blocks a 5 on that count alone). "mastery academics" is still the GT term appearing before it is explained (P3), which 5g's row 3 can trigger on its own | "Two hours of focused academics each morning on our Georgetown, Texas campus. Afternoons for workshops and building." — 8.5 / 17 / 12 |
| Door 2 line | "Live mastery academics with Guides from wherever you live, and four in-person weekends a year in Georgetown." | 11.9 / 17 / 17 | **First appearance of "Guides" on the page, undefined** (A-11, F68) | "Live classes with our teachers — we call them Guides — from wherever you live, and four in-person weekends a year in Georgetown." is 24 words and breaches the door budget. **Recommend instead**: keep this line and define Guides at its *second* appearance, in the proof strip, which already does the work: "Guides, not lecturers: adults who coach…". Raise as a register row, because it is a DD-30 compliance question, not a style preference |
| Compare anchor | "Not sure which is right for your family? Compare the two." | 1.6 / 11 / 8 | The only parent-addressed sentence in the first screen, and the lowest-FK one. "Compare" is absent from the field (F67) but the sentence around it is the parent's own words | Keep. Record F67 in the rationale so nobody "improves" it toward retail wording |
| Comparison, "Same school" | "One school, one admissions bar, one mastery-based program. Students advance when they show mastery, not when the calendar says so." | 7.8 / 20 / 12 | K6 already flags 20 words / two full sentences | "One school, one admissions bar, one mastery program. Students advance on mastery, not the calendar." — 7.8 / 15 / 8 |
| Comparison, "The day" (Georgetown) | "Mornings from 9 to noon: about two hours of focused academics in TimeBack blocks, with structured breaks. Afternoons: workshops, projects and competitions." | 10.2 / 22 / 17 | 22 words, over K6's 20-word cell rule; "TimeBack blocks" is an undefined GT term inside a comparison cell, where there is no room to define it | "Two hours of focused academics, 9 to noon. Afternoons for workshops and projects." — 5.1 / 13 / 8. Push "TimeBack" and "competitions" to the school site |
| Comparison, "The day" (Anywhere) | "Two to three hours of focused mastery academics a day, with live sessions from Guides. The rest of the day is yours." | 5.3 / 22 / 15 | 22 words; "focused mastery" is two modifiers on one noun | "Two to three hours of focused academics a day, live with Guides. The rest of the day is yours." — 3.0 / 19 / 12 |
| Comparison, three "Same" cells | "Same" | — | K6 5d already requires the repeated value. K14 adds the reading reason: a scanning parent sees **two words** of a cell (F48), and "Same" is one of them with no referent | Repeat the value, per K6 |
| TEFA module body | "GT Anywhere is TEFA-eligible. The Texas Education Freedom Accounts program can cover tuition for eligible families." | **14.1** / 16 / 12 | Highest FK of any body slot. "TEFA-eligible" and "eligible" in consecutive sentences; the acronym precedes its expansion, reversing P3 | "GT Anywhere takes TEFA. Texas Education Freedom Accounts can pay tuition for families who qualify." — 10.9 / 15 / 11. Compare K14-F35: Khan World School resolves the same three-way price question by enumerating, not by qualifying |
| Proof fact 2 | "Mastery-based: students advance on demonstrated mastery, measured with MAP assessments." | **17.8** / 10 / 10 | Highest FK among the deck's genuine multi-word sentences (excluding the sources line's URL-heavy text and single-word link fragments, both artifacts of the heuristic rather than reading difficulty, per F75). Three polysyllables in ten words, and "mastery" twice | "Students move up when they show they have mastered the work. We check with MAP tests." — 0.8 / 16 / 11. **Note the trade** (A-10): this is longer in words and far lower in FK, which is exactly why FK is reported as a triple |
| Proof fact 3 | "Guides, not lecturers: adults who coach, check in every week and hold the bar." | 6.7 / 14 / 14 | The deck's best sentence. It defines a GT term, states three concrete behaviours and uses no adjective | Keep verbatim. Use it as the reference sentence in the Design Director brief |
| Sources line | 28 words, two sentences, longest **26** | **21.9** / 28 / 26 | Breaches P1's 25-word ceiling by one word and is the deck's longest sentence. It is a URL list punctuated as prose, and its FK reading is itself an artifact: the heuristic reads each domain-heavy token (`anywhere.gt.school/academics;`) as one long word with many vowel groups, which is not how a reader parses a URL (F75) | Set as a list, not a sentence: "Sources, checked 10 September 2026:" then one line per source. Same information, longest sentence 8 |
| `title` | "GT School: a selective school for gifted children, in Georgetown, Texas and online" | 8.5 / 13 words / **82 characters** | Over GOV.UK's 65-character rule (F58) and outside NN/g's 40–60 band (F59). Google truncates | "GT School: a selective school for gifted children, Georgetown and online" (72 characters, FK 8.0) or "GT School: gifted and talented, in Georgetown, Texas and online" (63 characters, FK 8.4). Both keep the name front-loaded; only the second clears 65 |
| `meta description` | 155 characters, 27 words, FK 8.0 | 8.0 / 27 / 22 | Inside the field's band (Andover 20 w, World Campus 27 w, Khan 22 w, OHS 16 w) and well written | No change |
| Secondary CTAs | "Ask about a campus tour", "Ask about a virtual info session" | — | Both pass the four Ss and are honest about the destination, which K6 5e also required. **K14 disagrees with K6 5e rows 3 and 4** on one point: K6 proposes "Book a tour of the Georgetown campus", but no booking link exists (REQ-002), so "Book" would breach *sincere* (F60). Keep "Ask about", add the school name | "Ask about a tour of the Georgetown campus" (8 words); "Ask about an online info session for GT Anywhere" (9 words). Both front-load the verb and name the school |
| Footer facts block | 34 words, three sentences, longest 16 | 9.0 / 34 / 16 | Clean. Names the organisation before any "we" appears elsewhere | No change |

### 5d. Umbrella sentence candidates, 20 words or fewer

Every candidate keeps all five G0.5 elements: **selective · gifted and talented · both ways to attend · Georgetown, Texas · online from anywhere**.

| # | Candidate | Words | Sentences | FK | Longest sentence | What it costs |
|---|---|---|---|---|---|---|
| — | *Current* | 22 | 1 | 12.3 | 22 | Breaches `1_spec/03` §5 and K6 5a |
| **U1** | **"GT School is a selective school for gifted and talented children, in person in Georgetown, Texas or online from anywhere."** | **20** | 1 | 11.7 | 20 | Loses "at our… campus". The only change is `at our Georgetown, Texas campus` → `in Georgetown, Texas`. Minimal edit; G0.5's approved wording survives almost verbatim |
| **U2** | **"GT School is a selective school for gifted and talented children. In person in Georgetown, Texas, or online from anywhere."** | **20** | 2 | **7.8** | **11** | Same words as U1 with the comma made a full stop. Halves the longest sentence, drops FK by 3.9, and gives the second beat its own line for the door pair to sit under. Loses the single-sentence cadence G0.5 approved |
| U3 | "GT School is selective, for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere." | 20 | 1 | 12.3 | 20 | **Keeps "our… campus" verbatim.** The only change is `is a selective school for` → `is selective, for`. Offered because it is the only 20-word form that preserves the first-person warmth cue |
| U4 | "GT School is a selective school for gifted and talented children. Attend in Georgetown, Texas, or online from anywhere." | 19 | 2 | 8.0 | 11 | Verb-led second beat. Weakest on the "in person" contrast, which DD-27 wants explicit |

**Recommendation: U2 first, U1 second.** U2 is the only candidate that satisfies K14-P1 twice over (longest sentence 11 words against a 20-word first-screen ceiling), reads at FK 7.8 against a field median of 12.7 (F24), and matches the field's own construction — a short definition, then a second beat (K5-F63a). U1 is the safer choice if Nari wants the approved sentence changed by as few words as possible. U3 exists for the single question "may we keep *our campus*?" and should be put to her as exactly that question. **All three go to Nari as a register row on the G0.5 item 1 decision; none is adopted by the studio.**

### 5e. Wayfinding vocabulary the twenty mocks may use

Drawn from F65 to F69 and constrained by `copy.md`'s "Section headings allowed beyond the slots". A mock may use any word in the **Allowed** column without a new register row; anything in **Needs a row** is a change to what the page promotes.

| Purpose | Allowed | Rationale | Needs a row |
|---|---|---|---|
| Section label, comparison | "Compare", "Compare the two", "Compare the two schools", "Side by side" | Already in `copy.md`; F67 says the field has no convention, so the parent's words win | "Which school?", "Find your fit", "Choose your path" — merchandising register |
| Section label, proof | "Proof", "What is true of both schools" | In `copy.md`; F55 (facts, not adjectives) | "Why GT", "Results", "Outcomes" — implied-claim risk under K6 5c |
| Section label, admissions | "Admissions", "How to apply", "Admission" | 12/25 and 8/25 in the field (F65) | "Enrollment", "Join us", "Get started" — F60/NN-g "Get Started" finding |
| Section label, connect | "More ways to connect", "Other ways to connect", "Questions before you apply", "Contact us" | In `copy.md`; "Contact us" is 20/25 (F65) | "Let's talk", "Say hello" |
| Section label, families | "Current families", "Already a GT family?", "Parents" | In `copy.md`; "Parents" is 5/25 | "Community" as a *section* label — it collides with community.gt.school |
| Grade band | "Kindergarten to 8th grade", "K-8" | Both already in `copy.md`; "Middle school" is 9/25 but GT is K-8, not a middle school | "Lower school", "Upper school" — GT has neither |
| The two forms | "Georgetown Campus", "GT Anywhere", "in person", "online" | DD-27, decided | "Virtual", "Remote", "Distance" — none appears in `copy.md`, and "virtual" is the live Anywhere site's own word, which REQ-076 is retiring |
| The adults | "Guides", after one plain-word introduction | D-005 at G0.5; F68 requires the introduction | "Guides" as the first noun a visitor meets (A-11); "Advisors" anywhere (overridden at G0.5) |
| The method | "mastery", "mastery-based", "advance on mastery" | In `copy.md`; F50 clears "advance" in its literal sense | "TimeBack" outside a Georgetown-specific context, undefined |
| The weekends | "in-person weekends", "intensive weekends", "four weekends a year" | In `copy.md`; "intensives" is a GT term needing the plain word first (DD-30) | "Intensives" alone |
| Eyebrow labels | "Compare", "Proof", "Admissions", "Connect", "Families", "Builders" | `copy.md`, E2 finding 20 | Any new one-word eyebrow |
| Banned everywhere | — | — | "journey", "thrive", "vibrant", "unparalleled", "world-class", "elite", "premier", "cutting-edge", "transformative", "limitless", "unlock", "empower", "leverage", "Learn more" (F38, F50, F66) |

### 5f. CTA and label conventions

| # | Convention | Rule | Basis |
|---|---|---|---|
| C1 | **Sentence case everywhere** | "Explore the Georgetown campus", not "Explore The Georgetown Campus" | F61 |
| C2 | **Verb plus object** | Never a bare verb where two destinations exist. "Explore GT Anywhere", not "Explore" | F62 |
| C3 | **Front-load the verb** | The first two words must carry the action and the school where both fit | F48, F59 |
| C4 | **Stands alone in a screen-reader link list** | Every label on the page must be unique and comprehensible out of context. The deck's two door CTAs and four apply links already satisfy this; check it again per mock, because Webflow-style `button-text-ab` duplication makes a name appear twice | F60, CLAUDE.md hard rule |
| C5 | **Sincere before succinct** | "Ask about a tour" while no booking link exists; "Book a tour" only when one does | F60, REQ-002 |
| C6 | **Same action, same words, every placement** | The first-screen, after-comparison and footer instances of a door CTA use identical text | F62 |
| C7 | **No "Learn more", no "Get started", no "Click here"** | — | F60, F66 |
| C8 | **In-page links look different from page links** | The compare anchor is an in-page link and must not be styled as a door CTA | K6 5b, F63 |
| C9 | **Footnote and source microcopy is a list, not a sentence** | See the sources-line proposal in 5c | P1, F82 |
| C10 | **Numbers are numerals with their unit, in a sentence under 12 words** | "$10,400 a year." "9 to noon." "Four intensive weekends a year in Georgetown." | F82, F35 |

### 5g. Calibrated 5 for the rubric row **Objective (L1)** — the copy half

K6 5f calibrates Objective on layout, fold and equality. This adds the copy conditions, which the critic scores in the same row. **A mock cannot score 5 on Objective unless every line below holds as well as K6 5f's.**

| Score | What the critic reads |
|---|---|
| **5** | The `h1` is **22 words or fewer** with **no sentence over 22 words** (the decided umbrella sentence, R2, is exactly 22 words in one sentence and must clear this row), and it contains all five G0.5 elements. Both door lines are ≤20 words and within 3 words of each other, and each names **place and format explicitly** rather than implying them. Every first-screen string of **five words or more** measures **FK 13 or lower** (a fragment under five words, such as a header nav link, is exempt: FK on a two-word label is a demonstration of F75, not a reading-level measurement). The provenance line sits in the `h1`'s visual block, at a type size a reader does not have to seek. The compare anchor addresses the parent in the parent's words. No hype word, no superlative, no exclamation mark, no urgency device, no number without an Approved register row. "GT School" appears before any "we", "our" or "us". Every link label passes the four Ss and is unique in a link list. In the T-051 parent run, **five of five parents restate what GT School is in their own words after ten seconds**, and none asks what "GT" stands for or what a Guide is |
| **4** | All of the above except **exactly one** of: the `h1` is 23–24 words; one first-screen string of five words or more measures FK 13.1–14; the two door lines differ by 4–6 words; one parent needs a second reading of the `h1` but still restates it correctly |
| **3** | The `h1` exceeds 24 words **or** carries a sentence over 25 words, **or** a GT term ("Guides", "intensives", "TimeBack", "mastery") appears in the first screen with no plain-word introduction anywhere on the page, **or** a door line implies its format rather than naming it |
| **2** | A hype word, a superlative or an urgency device appears anywhere, **or** "we" appears before "GT School", **or** a CTA label fails *substantial* (unreadable out of context), **or** the provenance line has been moved to the footer |
| **1** | A parent cannot say what GT School is after reading the first screen, **or** a figure appears without an Approved row, **or** the page states or implies a comparative superiority claim |

### 5h. Calibrated 5 for the rubric row **Mission (L3) and exclusivity (L4)** — the copy half

K7 5g calibrates this row on architecture and lockup. This adds the sentence-level test.

| Score | What the critic reads |
|---|---|
| **5** | Selectivity is legible **without a rate and without a wealth cue**: the bar appears once, as a definition of who the school is for ("Admission at the 90th percentile and above."), in the register of K14-F27, never as a boast. Cost is **stated, not deferred**, on both sides of the comparison — a figure, a threshold, or a dated commitment to publish one. The page's seriousness comes from **specificity**: every claim-shaped sentence names a mechanism, a schedule, a place or a person, and can be traced to a row. Zero adjectives are doing a proof's work, measured against the 22-word hype list. The provenance line is present, once, next to the `h1`, and reads as information rather than as borrowed status. The voice is recognisably one voice across all eight sections: same person, same sentence length band, same treatment of numbers |
| **4** | All of the above except **exactly one** of: Georgetown's cost reads **"Tuition on request"** with a clear next step ("Ask admissions") rather than a published figure or date — R3's decided fallback while Q-011 is open, and the real (if now-accepted) shortfall this file's own F37 documents; one adjective is carrying weight a fact should carry; the bar appears twice |
| **3** | Selectivity reads as **prestige rather than fit** — the copy praises the school where it should describe it — **or** Georgetown's cost is deferred with **no next step at all** (no "ask admissions", no contact path), **or** the provenance line is doing status work ("of the Alpha School network" placed as an endorsement rather than a fact) |
| **2** | A wealth cue appears (crest, seal, "premier", "elite", tuition framed as exclusivity), **or** the admission bar is stated as a rejection rate, **or** a superlative substitutes for a figure |
| **1** | The page claims superiority over any other school, named or implied, **or** an unapproved figure carries the mission |

### 5i. What this cluster proposes to change

All twelve go to `REGISTER-FOLLOWUPS.md` and through the ensemble. None is applied here.

| # | Target | Change | Basis |
|---|---|---|---|
| 1 | `copy.md` §1, G0.5 item 1 | Adopt **U2** (or U1) as the `h1`; put U1, U2 and U3 to Nari as one row | F40, K6 5a, `1_spec/03` §5 |
| 2 | `copy.md` §4 sources line | Set as a list, not a 28-word sentence | P1, F26 |
| 3 | `copy.md` §3 TEFA module | Rewrite (FK 14.1 → 10.9); expand the acronym before using it as a modifier | F49, F83 |
| 4 | `copy.md` §4 fact 2 | Rewrite (FK 17.8 → 0.8), and record the trade in the rationale as the worked example of A-10 | F83 |
| 5 | `copy.md` §3 "The day" rows | Trim both 22-word cells; move "TimeBack" and "competitions" to the school sites | K6 5d, F48 |
| 6 | `copy.md` §1 door 2 / §4 fact 3 | Decide where "Guides" is introduced in plain words, and make that the **first** appearance | DD-30, F68, A-11 |
| 7 | `copy.md` Head | Cut the `title` from 82 to ≤65 characters | F58, F59 |
| 8 | `copy.md` §6, and K6 5e rows 3–4 | "Ask about a tour of the Georgetown campus" / "Ask about an online info session for GT Anywhere" — **K14 dissents from K6's "Book a tour"** while REQ-002 is open | F60, C5 |
| 9 | `17` §6 | Adopt 5g and 5h verbatim as the copy half of the Objective and Mission anchor descriptions | this file |
| 10 | `17` §5 brief template | Add the 5e vocabulary table and the banned-word list as a brief section, so twenty mocks cannot drift apart on wording | F65–F69 |
| 11 | `1_spec/03` §5 | State the rule as a **triple** — longest sentence ≤20 words in the first screen, ≤25 elsewhere, and FK reported with word count — rather than as a bare sentence-length rule | P1, P12, F83 |
| 12 | Q-011 escalation | Add the field evidence: **every school in the corpus that has a price publishes it** (F37). This strengthens K6's C40 escalation with a convention argument, not only a conversion one | F33–F37 |

---

## 6. Sources

All fetched by this agent on **2026-09-11**. WebSearch was unavailable (session budget exhausted), so each was reached by direct URL. "Method" records how.

### 6a. Content design and plain language (11)

| # | Source | URL | Method |
|---|---|---|---|
| S1 | Government Digital Service, "Use clear language", GOV.UK content and publishing guidance | https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/ | curl |
| S2 | Government Digital Service, "Use the right tone" | https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/right-tone/ | curl |
| S3 | Government Digital Service, "Write clear titles" | https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-titles/ | curl |
| S4 | Government Digital Service, "Write effective links" | https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/add-links/ | curl |
| S5 | Government Digital Service, "Create a clear structure for your content" | https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-structure/ | curl |
| S6 | Government Digital Service, "A to Z style guide" (entry: Words to avoid) | https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/ | curl |
| S7 | Government Digital Service, "Writing to GOV.UK standards" (index) | https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/ | curl |
| S8 | GOV.UK Design System, "Button" component | https://design-system.service.gov.uk/components/button/ | WebFetch |
| S9 | digital.gov, "Plain language" guide (Plain Writing Act of 2010) | https://digital.gov/guides/plain-language | WebFetch |
| S10 | digital.gov, "An introduction to plain language" | https://digital.gov/resources/an-introduction-to-plain-language/ | WebFetch |
| S11 | CDC, Clear Communication Index | https://www.cdc.gov/ccindex/index.html | WebFetch |

### 6b. Nielsen Norman Group (10)

| # | Source | URL |
|---|---|---|
| S12 | John Morkes & Jakob Nielsen, "How Users Read on the Web", 1 Oct 1997 | https://www.nngroup.com/articles/how-users-read-on-the-web/ |
| S13 | Jakob Nielsen, "Writing Style for Print vs. Web", 8 Jun 2008 | https://www.nngroup.com/articles/writing-style-for-print-vs-web/ |
| S14 | Jakob Nielsen, "Legibility, Readability, and Comprehension", 15 Nov 2015 | https://www.nngroup.com/articles/legibility-readability-comprehension/ |
| S15 | Jakob Nielsen, "Lower-Literacy Users: Writing for a Broad Consumer Audience", 13 Mar 2005 | https://www.nngroup.com/articles/writing-for-lower-literacy-users/ |
| S16 | Hoa Loranger, "Plain Language Is for Everyone, Even Experts", 8 Oct 2017 | https://www.nngroup.com/articles/plain-language-experts/ |
| S17 | Hoa Loranger & Jakob Nielsen, "Microcontent", 29 Jan 2017 | https://www.nngroup.com/articles/microcontent-how-to-write-headlines-page-titles-and-subject-lines/ |
| S18 | Kate Moran, "Better Link Labels: 4 Ss for Encouraging Clicks", 24 Mar 2019 | https://www.nngroup.com/articles/better-link-labels/ |
| S19 | Jakob Nielsen, "First 2 Words: A Signal for the Scanning Eye", 6 Apr 2009 | https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/ |
| S20 | Kate Moran, "The Four Dimensions of Tone of Voice", 17 Jul 2016 (rev. 16 Aug 2023) | https://www.nngroup.com/articles/tone-of-voice-dimensions/ |
| S21 | Kate Moran, "The Impact of Tone of Voice on Users' Brand Perception", 7 Aug 2016 (rev. 30 Jan 2024) | https://www.nngroup.com/articles/tone-voice-users/ |

### 6c. Readability, literacy and claims (6)

| # | Source | URL |
|---|---|---|
| S22 | "Flesch–Kincaid readability tests", Wikipedia (last edited before 2026-09-11); formulas, Kincaid et al. 1975, limitations, worked example | https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests |
| S23 | William H. DuBay, *The Principles of Readability*, Impact Information, 25 Aug 2004 (ERIC ED490073), 72 pp., read via `pdftotext` | https://files.eric.ed.gov/fulltext/ED490073.pdf |
| S24 | NCES, PIAAC results summary (2012–15 cycle) | https://nces.ed.gov/surveys/piaac/results/summary.aspx |
| S25 | APM Research Lab, adult literacy in the US | https://www.apmresearchlab.org/10x-adult-literacy |
| S26 | Federal Trade Commission, "FTC's Endorsement Guides: What People Are Asking" | https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking |
| S27 | CREDO at Stanford University, *Online Charter School Study* (landing page only — see K14-F73) | https://credo.stanford.edu/reports/item/online-charter-school-study/ |

### 6d. Design-system and brand content guidance (3)

| # | Source | URL |
|---|---|---|
| S28 | IBM Carbon Design System, "Content — Overview" (IBM brand voice) | https://carbondesignsystem.com/guidelines/content/overview/ |
| S29 | IBM Carbon Design System, "Action labels" | https://carbondesignsystem.com/guidelines/content/action-labels/ |
| S30 | Mailchimp Content Style Guide, "Voice and Tone" | https://styleguide.mailchimp.com/voice-and-tone/ |

### 6e. The institutional corpus (25 pages fetched by curl; 23 yielded body prose and are measured in 2a)

| # | Institution and page | URL |
|---|---|---|
| S31 | Phillips Exeter Academy, Admissions | https://www.exeter.edu/admissions/ |
| S32 | Phillips Exeter Academy, Financial Aid & Tuition | https://www.exeter.edu/admissions/financial-aid/ |
| S33 | Phillips Academy Andover, Tuition and Financial Aid | https://www.andover.edu/admission/tuition-and-financial-aid |
| S34 | Groton School, Admission | https://www.groton.org/admission |
| S35 | The Hotchkiss School, Admission | https://www.hotchkiss.org/admission |
| S36 | Sidwell Friends School, Admissions | https://www.sidwell.edu/admissions |
| S37 | Horace Mann School, Admissions | https://www.horacemann.org/admissions |
| S38 | The Dalton School, Apply to Dalton | https://www.dalton.org/apply/apply-to-dalton (fetched; page renders its prose in script, so no body text was extractable — excluded from 2a) |
| S39 | Trinity School (NYC), Admissions | https://www.trinityschoolnyc.org/admissions (same — excluded from 2a) |
| S40 | Lakeside School, Admissions | https://www.lakesideschool.org/admissions/overview |
| S41 | The Nueva School, Admissions | https://www.nuevaschool.org/admissions/welcome |
| S42 | The Harker School, Admission | https://www.harker.org/admission |
| S43 | BASIS Independent Schools, home | https://basisindependent.com/ |
| S44 | Success Academy, apply | https://apply.successacademies.org/apply |
| S45 | MIT Admissions, first-year eligibility | https://mitadmissions.org/apply/firstyear/first-year-eligibility/ |
| S46 | Stanford Undergraduate Admission, Apply | https://admission.stanford.edu/apply/ |
| S47 | Caltech Undergraduate Admissions, first-year applicants | https://www.admissions.caltech.edu/apply/first-year-applicants |
| S48 | Minerva University, undergraduate programme | https://www.minerva.edu/undergraduate/ |
| S49 | Stanford Online High School, Admissions | https://onlinehighschool.stanford.edu/admissions |
| S50 | Stanford Online High School, home | https://onlinehighschool.stanford.edu/ |
| S51 | Davidson Academy Online | https://www.davidsononline.org/ |
| S52 | Khan World School @ ASU Prep | https://asuprep.asu.edu/khan-world-school/ |
| S53 | Laurel Springs School, home | https://laurelsprings.com/ |
| S54 | Penn State World Campus, home | https://www.worldcampus.psu.edu/ |
| S55 | Prenda, home | https://www.prenda.com/ |

### 6f. Attempted and not fetched — nothing above rests on these

| Source | Reason |
|---|---|
| NIH, "Plain language" (clear communication) | HTTP 403 on two attempts |
| OECD, *Do Adults Have the Skills They Need to Thrive in a Changing World?* (PIAAC Cycle 2, 2024) | HTTP 403. **Consequence:** the literacy figures above are from the 2012–15 cycle, not the 2023 one. Astra should replace S24 if the newer cycle can be reached |
| Shopify Polaris, "Actionable language" | Redirects to an API index; the content page did not resolve |
| Atlassian Design System, content guidance; Material Design 3 content style guide; Apple HIG "Writing" | 404 or client-rendered; no text returned |
| USWDS content guidance | 404 on the documented path |
| NEPC, *Virtual Schools in the U.S.* annual report | Connection timeout |
| EdChoice, *Schooling in America* survey | Methodology paragraph only; no findings text returned |
| Sora Schools | DNS failure on two hostnames; HTTP 403 on a third |

---

## 7. Open questions

| # | Question | Why it matters | Owner |
|---|---|---|---|
| OQ-1 | Does Nari accept a **two-sentence** `h1` (U2), or must the umbrella stay one sentence? | It is the single highest-leverage copy decision on the page: U2 halves the longest sentence and drops FK by 3.9 at no cost in content, but changes the cadence G0.5 approved | Nari |
| OQ-2 | Where is "Guides" introduced in plain words? | DD-30 (jargon policy, Proposed — not yet Decided) calls for plain word first; F68 shows the field reads "guide" as a document (the "will read it as a booklet" reading is Judgment, not tested). The deck's current first use is undefined, in a door line with no room to define it | Nari, with Holly |
| OQ-3 | What **reading level** does the project commit to, and measured how? | The evidence supports three different targets — 6th (lower-literacy homepages, F45), 8th (general, F44), 10th–12th (educated, F43). A GT parent of a 90th-percentile child is an educated audience reading on a phone from Instagram. The defensible answer is probably "FK ≤10 in the first screen, ≤12 elsewhere, longest sentence ≤20/≤25", but that is a judgment, not a finding | Johnny, into `1_spec/03` §5 |
| OQ-4 | May the studio run a **structural** check rather than only an arithmetic one? | The CDC Clear Communication Index (F82) is the only instrument found that scores whether **numbers** are communicated well, which is precisely GT's exposure (a percentile, a tuition figure, a voucher). Adopting it would add a scoring step to QA | Johnny |
| OQ-5 | What are the **effect sizes** in the CREDO online charter study? | F73 is the strongest external counter-argument to GT Anywhere and this cluster could not reach the report. Nobody should write GT Anywhere's honesty copy without knowing the number a journalist will quote | Whoever owns REQ-022 |
| OQ-6 | Are the **2023 PIAAC** US literacy figures materially different from 2012–15? | Every reading-level target in section 5 is anchored to an eleven-year-old cycle because the newer source returned 403 | Astra at E4 |
| OQ-7 | Does the **T-051 parent run** ask parents to *restate* the school, or only to *choose* a door? | 5g's calibrated 5 requires restatement ("five of five parents restate what GT School is in their own words"). If the script only measures the click, the copy half of Objective cannot be scored at all | Johnny, with `1_spec/13` |
| OQ-8 | Is "Compare" the right word for a **parent**, given it appears on 1 of 25 school sites (F67)? | The pattern is justified by evidence; the label is not. A five-parent read of "Compare the two" against "See the two side by side" would settle it cheaply | Nari |

---

## Rework log (E4)

Astra's E4 row and the later E5a addendum, verified against this file per Rule 1 of `REWORK-PACK.md` before any change. Every item below was confirmed accurate before editing; none was found factually wrong about the file, so no disagreement is recorded against Astra.

| E4/E5a item | What changed | Where |
|---|---|---|
| F24 "Exeter is the most selective school in the corpus" | Removed the unsupported comparative-selectivity claim; kept the measured FK 8.0/8.2 cleanliness fact; labeled the selectivity ranking **Judgment** since no admission-rate or selectivity variable exists anywhere in this file | Finding K14-F24, section 2a |
| F39 "There is no correlation with selectivity" | Removed the unsupported correlation/no-correlation claim (no selectivity variable was ever gathered); relabeled **Judgment**; kept the surviving observation that hype density varies independent of house style | Finding K14-F39, section 2d |
| F38 reports Dalton body-prose hype measurements while section 6 says Dalton's body prose was not extractable | Flagged the Dalton tagline quote as **Judgment** (not traceable to S38's fetch, which returned no extractable text per section 6e); corrected F39's "Dalton and Nueva at 12 instances each" to state only Nueva's measured count, with the Dalton figure withdrawn as unmeasurable | Findings K14-F38, K14-F39, section 2d |
| F68 "a first-time parent will read Guide as a booklet" (E4); F68's "booklet" reading is an inference, not a tested finding, label it (E5a) | Kept the solid, measured part of F68 (15 of 25 sites use "guide" as a document; only Prenda as a staff title). Explicitly labeled the comprehension claim **Judgment** — an inference from usage prevalence, not a tested finding (no parent-comprehension test of "Guides" exists; see OQ-7) — and noted DD-30 (jargon policy) is **Proposed**, not Decided, so nothing in this file may treat the disambiguation requirement as settled. Propagated the same correction to OQ-2 | Finding K14-F68, section 2h; OQ-2, section 7 |
| "Teachers, whom we call Guides" asserts a role equivalence DD-30 has not verified; remove or mark open | Replaced the "Do" example in 5a's Jargon row with the already-verified proof-fact-3 sentence ("Guides, not lecturers: adults who coach…"); moved "teachers, whom we call Guides" into the "Do not" column with a note that DD-30 is Proposed, not Decided, and has not verified that role equivalence | Section 5a, Jargon row |
| Scoring: the exact decided 22-word sentence must be able to score 5 (R2); "Tuition on request" must be able to score at least 4 (R3); rewrite the anchors | **5g** (Objective, copy half): raised the `h1` ceiling from 20 to 22 words / no sentence over 22 (was 20), so the decided umbrella sentence clears row 5; widened the first-screen FK ceiling from 12 to 13 for slots of five words or more (so the decided `h1` at FK 12.3 and door 1 line at FK 12.6 both clear row 5); shifted row 4's exception band and row 3's failure threshold up in step (23–24 words / FK 13.1–14 / >24 words). **5h** (Mission/exclusivity, copy half): named "Tuition on request" with a clear next step ("Ask admissions") as row 4's cost exception — R3's decided fallback — instead of requiring an undated commitment that G0.5 never promised; row 5 still requires a real figure, threshold or dated commitment, so a mock with an actual Georgetown price still scores higher than the placeholder, preserving F37/A-8's evidence that "on request" is a real, accepted shortfall, not a non-issue. Also fixed **K14-P1** (added an explicit exception for the decided 22-word umbrella sentence, which otherwise contradicted the principle's own "no first-screen sentence exceeds 20"), and corrected the now-stale Door 1 line finding in 5c, which referenced the old FK 12 ceiling this fix replaced | Sections 5g, 5h, 3 (K14-P1), 5c (Door 1 line row) |
| Keep "Ask about" until a booking route exists (R14, MD-02) | Verified: 5c's Secondary CTAs row, C5, and 5i item 8 already keep "Ask about a tour of the Georgetown campus" / "Ask about an online info session for GT Anywhere" and explicitly reject K6's "Book a tour" while REQ-002 is open. No change needed | Verified only; sections 5c, 5f, 5i |
| Source count: 55 numbered, 25 institutional pages, 23 with measurable body prose; make the header match | Added the 25-page / 23-measurable breakdown to the header Method row, alongside the existing 55/18/37 counts (all four numbers were already internally consistent; the header just didn't state the 25/23 split) | Header, Method row |
| E5a: recount every deck measurement in 5b and 5c directly from `copy.md` with a script (word counts, character counts, FK grade, documented syllable heuristic), save script and output under `measurements/K14/`, make the file's numbers match | Wrote `0_plan/kb/measurements/K14/deck-measures.py` (self-tested against Wikipedia's Flesch–Kincaid platypus example: reproduces 13 words, 24 syllables, FRE 37.5, FK 11.3 to one decimal, the same calibration bar the original, unrecoverable script used) and its output at `0_plan/kb/measurements/K14/deck-measures.md`. Transcribed every reader-facing string in `copy.md` (65 slots; the original "45" could not be reconstructed and is superseded). Confirmed unchanged: the first-screen aggregate (86 words / 10 sentences / FK 7.8 / longest 22), the whole-deck person counts (we/our/us 3, you/your 6), the GOV.UK words-to-avoid count (4), `h1`/provenance/door-line/compare-anchor/TEFA-body/proof-fact-3/title/meta-description FK-words-longest figures, and the footer facts block (34/3/16). Corrected: whole-deck aggregate (45→65 slots, 506→536 words, 61→78 sentences, 8.3→6.9 words/sentence, FK 8.0→8.1, longest 30→26, "4.7 grades below"→"4.6 grades below"); "Slots above FK 12" (5 of 43→5 of 38, proof fact 2 15.4→17.8, sources line 17.9→21.9); sources line (32 words→28 words, longest 30→26, FK 17.9→21.9); "Same school" cell FK 7.2→7.8; "The day" Georgetown FK 8.5→10.2; "The day" Anywhere FK 4.8→5.3; F40 and F83's cross-references to these figures; 5i items 2 and 4's proposal text | Header (Method note), sections 5b, 5c, 5i (items 2, 4), F40, F83; new files `measurements/K14/deck-measures.py`, `measurements/K14/deck-measures.md` |

### Proposed register follow-ups

| Register row | Proposal | Evidence | Recommended by |
|---|---|---|---|
| RF-44 | Correct the sources-line and proof-fact-2 figures RF-44 currently states: the sources line is **28 words** (not 30), **2 sentences**, longest sentence **26 words** (not 30), FK **21.9** (not 17.9); proof fact 2 is FK **17.8** (not 15.4). The title's 82-character figure and the "five slots exceed FK 12" count both still hold | `0_plan/kb/measurements/K14/deck-measures.md`, this file's sections 5b and 5c as reworked | Fable, K14 rework (E5a, 2026-09-11) |
