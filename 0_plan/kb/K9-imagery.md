# K9 Imagery and photography direction

| Field | Value |
|---|---|
| Cluster | K9 in `18-knowledge-base-plan.md` section 1 |
| Question | How schools and universities photograph learning honestly and what a parent reads as credible; documentary against staged; crops that survive 360 to 1920 and art direction with `<picture>` and `object-position`; treatments (duotone, scrims, frames) that keep the photograph legible without hiding it; typographic and illustrated alternatives when photographs are weak or unavailable; consent and child-imagery practice in school marketing; how to show an online school honestly when no home-learning photograph exists; image performance |
| Feeds | Rubric row **Imagery** (`17` section 6), the Imagery line of every Design Director brief (`17` section 5), DD-08, DD-31, the escalated home-learning photograph (`ensemble/E2-fix-decisions.md` row 9), `mockups/shared/ASSETS.md`, and the QA matrix (`17` section 4) |
| Method | 39 third-party sources fetched by WebFetch or `curl` on 2026-09-11, each listed in section 1. Plus two sets of **measurements taken by K9 on the repository itself**: (a) an image-markup scan of the eight mirrored pages on disk, (b) a dimension, byte and re-encode measurement of the 25 photographs in `mockups/shared/img/` and of the mirror's largest assets, using Pillow 12.1.1 |
| Not used | No browser tool was opened. No `gt.school` or `alpha.school` page was loaded. The mirror was read from disk, which is what `CLAUDE.md` permits |
| Observation vs inference | Every figure in sections 6 and 7 is **measured**. Every figure in sections 2 to 5 is **quoted** from the cited source. Sections 8, 9 and 10 are **inference** |
| Read date | 2026-09-11 |
| Status | Drafted by Fable. Astra E4 review pending |
| Version | 0.1, 2026-09-11 |

## 1. Sources

All fetched by K9 on 2026-09-11. Repo files are read from disk and marked as such.

| # | Source | URL | Author / body | Date |
|---|---|---|---|---|
| S1 | NN/g, "Photos as Web Content" | https://www.nngroup.com/articles/photos-as-web-content/ | Jakob Nielsen | 2010-10-31, reviewed 2026-08-13 |
| S2 | NN/g, "7 Tips for Memorable and Easy-to-Understand Imagery" | https://www.nngroup.com/articles/7-tips-memorable-imagery/ | Sara Paul | 2024-05-03 |
| S3 | NN/g, "AI-Generated Images Can Perform as Well as Stock Photography" | https://www.nngroup.com/articles/ai-generated-images/ | Rachel Banawa | 2026-08-21 |
| S4 | NN/g, "Decorative Images: Delightful or Dreadful?" (video) | https://www.nngroup.com/videos/decorative-images/ | Katie Sherwin | 2018-09-07 |
| S5 | NN/g, "Images on Mobile" (video) | https://www.nngroup.com/videos/mobile-images/ | Raluca Budiu | 2023-11-08 |
| S6 | NN/g, "Banner Blindness Revisited" | https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/ | Kara Pernice | 2018-04-22 |
| S7 | Getty Images, "Nearly 90% of Consumers Want Transparency on AI Images" (VisualGPS) | https://newsroom.gettyimages.com/en/getty-images/nearly-90-of-consumers-want-transparency-on-ai-images-finds-getty-images-report | Getty Images newsroom | 2024-04-30 |
| S8 | Stanford Guidelines for Web Credibility | https://credibility.stanford.edu/guidelines/index.html | B. J. Fogg, Stanford Persuasive Technology Lab | May 2002 |
| S9 | "You look where they look" (eye-tracking, gaze direction) | https://usableworld.com.au/2009/03/16/you-look-where-they-look/ | James Breeze, Usable World | 2009-03-16 |
| S10 | Inside Higher Ed, "Marketing Authenticity in Higher Education" | https://www.insidehighered.com/blogs/call-action-marketing-and-communications-higher-education/marketing-authenticity-higher | Nathan Willers | 2019-06-24 |
| S11 | Michigan Tech, "Authenticity First: When — and When Not — to Use Stock Photography" | https://blogs.mtu.edu/webmaster/2026/02/authenticity-first-when-and-when-not-to-use-stock-photography/ | Phoebe Meston, Michigan Technological University | 2026-02-04 |
| S12 | ASU Brand Guide, "Photo and video" | https://brandguide.asu.edu/execution-guidelines/photo-video | Arizona State University | undated page |
| S13 | Boston University Brand Guidelines, "Photography" | https://www.bu.edu/brand/guidelines/design/photography/ | Boston University | undated page |
| S14 | University of Oregon, "Duotones" | https://communications.uoregon.edu/uo-brand/visual-identity/duotones | University of Oregon Communications | undated page |
| S15 | Pavilion brand, "Photography" | https://brand.joinpavilion.com/design/photography | Pavilion | undated page |
| S16 | Shun Liang, "MIT Admissions" (design case study) | https://www.shun-liang.com/design/mit-admissions | Shun Liang | project dated 2015 |
| S17 | ICO, "Taking photographs: data protection advice for schools" | https://ico.org.uk/for-organisations/advice-for-small-organisations/news-blogs-and-events/blogs/taking-photographs-data-protection-advice-for-schools/ | UK Information Commissioner's Office | undated page; fetched by `curl`, HTTP 200, 37,983 bytes |
| S18 | US Dept of Education, "FAQs on Photos and Videos under FERPA" | https://studentprivacy.ed.gov/faq/faqs-photos-and-videos-under-ferpa | Student Privacy Policy Office / PTAC, doc SPPO-21-01 | document id SPPO-21-01 |
| S19 | Smashing Magazine, "Designing Accessible Text Over Images, Part 1" | https://www.smashingmagazine.com/2023/08/designing-accessible-text-over-images-part1/ | Hannah Milan | 2023-08-04 |
| S20 | Smashing Magazine, "Designing Accessible Text Over Images, Part 2" | https://www.smashingmagazine.com/2023/08/designing-accessible-text-over-images-part2/ | Hannah Milan | 2023-08-11 |
| S21 | W3C WAI, "Images Tutorial" | https://www.w3.org/WAI/tutorials/images/ | Eric Eggert, Shadi Abou-Zahra (eds), Brian Elton (update) | updated 2026-04-08 |
| S22 | W3C WAI, "An `alt` Decision Tree" | https://www.w3.org/WAI/tutorials/images/decision-tree/ | W3C Web Accessibility Initiative | part of S21 |
| S23 | W3C, "Understanding SC 1.4.3 Contrast (Minimum)" | https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | W3C WAI | updated 2026-06-01 |
| S24 | W3C, "Understanding SC 1.4.5 Images of Text" | https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html | W3C WAI | updated 2026-06-28 |
| S25 | GOV.UK publishing guidance, "Images" | https://guidance.publishing.service.gov.uk/formatting-content/images/ | Government Digital Service | undated page |
| S26 | USWDS, "Collection" component | https://designsystem.digital.gov/components/collection/ | US Web Design System | v3.14.0, 2024-12-18 |
| S27 | MDN, "Responsive images" | https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images | MDN contributors | last modified 2025-11-06 |
| S28 | MDN, `<picture>` | https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture | MDN contributors | last modified 2026-04-24 |
| S29 | MDN, `object-position` | https://developer.mozilla.org/en-US/docs/Web/CSS/object-position | MDN contributors | undated on page |
| S30 | MDN, `aspect-ratio` | https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio | MDN contributors | last modified 2026-07-21; Baseline since 2021-09 |
| S31 | web.dev, "Optimize Largest Contentful Paint" | https://web.dev/articles/optimize-lcp | Philip Walton, Barry Pollard | updated 2025-03-31 |
| S32 | web.dev, "Browser-level image lazy loading for the web" | https://web.dev/articles/browser-level-image-lazy-loading | Addy Osmani, Houssein Djirdeh, Mathias Bynens, Barry Pollard | updated 2024-08-13 |
| S33 | web.dev, "Optimize Cumulative Layout Shift" | https://web.dev/articles/optimize-cls | Addy Osmani, Barry Pollard | updated 2025-02-07 |
| S34 | web.dev, "The most effective ways to improve Core Web Vitals" | https://web.dev/articles/top-cwv | Chrome team and external contributors | updated 2024-10-31 |
| S35 | web.dev Learn Images, "Key performance issues" | https://web.dev/learn/images/performance-issues | web.dev | 2023-02-01 |
| S36 | web.dev Learn Images, "AVIF" | https://web.dev/learn/images/avif | web.dev | 2023-02-01 |
| S37 | Eric Portis, "`sizes=auto` pretty much requires width and height attributes" | https://ericportis.com/posts/2023/auto-sizes-pretty-much-requires-width-and-height/ | Eric Portis | 2023-12-05 |
| S38 | HTTP Archive Web Almanac 2024, Media chapter | https://almanac.httparchive.org/en/2024/media | Stefan Judis, Eric Portis | 2024-12-29 |
| S39 | Unsplash License | https://unsplash.com/license | Unsplash | undated page |
| R1 | `0_plan/mockups/shared/ASSETS.md` | repo | Fable, per `05` | read from disk |
| R2 | `0_plan/07-design-decisions.md`, rows DD-08 and DD-31 | repo | Fable and Astra | read from disk |
| R3 | `0_plan/ensemble/E2-mocks.md` finding 9; `E2-fix-decisions.md` row 9; `E3-completion.md` row 9 | repo | Astra | read from disk |
| R4 | `0_plan/kb/K5-education-exemplars.md` (K5-F62, K5-F75, K5-F85, K5-P9) and `K0-design-hunt.md` (F9 entries 11 and 15, P9) | repo | Fable | read from disk |
| R5 | The mirror on disk: eight `index.html` pages and `assets/` | repo | Webflow export | measured by K9 |

## 2. Findings — what a parent actually reads as credible

**K9-F1 — the page is judged on its pictures before it is read.** Fogg's guideline 6: "We find that people quickly evaluate a site by visual design alone. When designing your site, pay attention to layout, typography, **images**, consistency issues, and more… The visual design should match the site's purpose" (S8). Guideline 4 is "Show there are real people behind the site and in the organization… find a way to convey their trustworthiness through images or text" (S8).

**K9-F2 — users scrutinise information-carrying photographs and ignore decorative ones.** Nielsen's eye-tracking summary: "Users pay attention to information-carrying images that show content relevant to the task at hand. And users ignore purely decorative images." On one tested page users spent "10% more time viewing the portrait photos" than reading the text beside them; on a university page a generic student photo "received no meaningful attention" (S1). The corollary matters more than the rule: a photograph that carries information is *read*, so a photograph that carries the wrong information is read and is wrong.

**K9-F3 — the ignored category is named, and GT's temptation is in it.** "Some types of pictures are completely ignored. This is typically the case for big feel-good images that are purely decorative" (S1). Sherwin's framing adds the only licence: decorative imagery may set emotional tone but "must not interfere with a user's ability to accomplish a task" (S4).

**K9-F4 — stock imagery fails on specificity and on memory.** NN/g's tip 2 is "Avoid Stock Photos": generic stock "lack[s] specificity and users overlook previously seen photos, reducing memorability" (S2). Tip 6 is "Choose High-Resolution Photographs": low-resolution images "appear blurry and lack important details, hindering comprehension and recall" (S2). This is Nari's rule with evidence under it (R2, DD-08).

**K9-F5 — audiences define "authentic" as "real", and they say it decides trust.** Getty's VisualGPS, drawing on surveys of 7,500 adults per wave across 25 countries: "98% of consumers agree that 'authentic' images and videos are pivotal in establishing trust"; 87% consider it important that an image be authentic; people define authentic as "real" or "the real thing," then "true" or "truthful" (S7). Self-reported attitudes, not behaviour — but the vocabulary is the point: parents are scoring photographs against *truth*, not against production value.

**K9-F6 — the risk is not that a synthetic or staged image looks bad; it is that it is detected.** NN/g's 2026 study (77 US adults, six page versions, 10-second exposures) found no trust penalty for AI-generated hero images when participants did not know — but "when users *suspected* AI generation, they rated sites less favorably, even for well-made images" (S3). Michigan Tech's rule follows the same logic: AI imagery of people or places "can be misleading to audiences and damaging to our credibility" (S11).

**K9-F7 — in education specifically, the detected-inauthenticity failure has a documented history.** Willers records York College of Pennsylvania (2019) replacing white students' faces with students of colour in a billboard, and University of Wisconsin–Madison (2000) pasting a Black student's face into a crowd he was never in; he cites a 2013 study finding institutions depicted roughly "15.1 percent" Black representation in their materials against "7.4 percent" in their student bodies (S10). The institutional cost is not the photograph, it is the discovery.

**K9-F8 — the way out of the diversity-staging trap is to photograph what is already there.** The practice rule in the higher-ed literature is to document rather than cast: photograph the class that already looks like this, rather than assembling a group and recreating the look of a class (S10, and the same principle in S11's "check the authentic library first").

**K9-F9 — faces steer the eye, and the direction of gaze steers it further.** Breeze's eye-tracking study (106 participants, Tobii, heat maps) found that when a face in an image looks toward adjacent text, markedly more viewers fixate on that text than when the same face looks at the camera: "Faces can be used to guide a person to key content and make sure they actually read it" (S9). A subject looking out of frame at the reader is spent attention; a subject looking at the work is attention donated to the copy.

**K9-F10 — anything that looks like an ad gets skipped, including things that are not ads.** Pernice: "Users have learned to ignore content that resembles ads, is close to ads, or appears in locations traditionally dedicated to ads," and "anything that stands out from immediate surrounding context is likely to be considered an ad"; one right-rail region occupying 25% of the content area drew 0.8% of attention (S6). A full-bleed photograph with a headline burned over it and a button in the corner is the exact shape of a display ad.

## 3. Findings — documentary practice, and the consent regime around children

**K9-F11 — the institutional houses all say the same thing about style, in almost the same words.** BU: "Tell the story, serve the story… Images should be intrinsically interesting enough to pull in the viewer while delivering on a defined strategy, message, and concept," with "classroom candids" and "captured moments" as named categories (S13). ASU: photography should convey "vibrancy, diversity and excellence" through genuine moments, "hands-on demonstrations at public science events to art performances" (S12). Pavilion: images "should… depict real members whenever possible" (S15).

**K9-F12 — the same houses restrict heavy treatment.** ASU is explicit: "Black and white or heavily stylized color grading, placing gradients on top of photos or video is not recommended," and creative is "most brand-aligned when in full color" (S12).

**K9-F13 — where duotone is permitted, it is permitted narrowly and it is never permitted on a face.** Oregon allows duotone "in instances where type needs to be made legible over photography, to emphasize movement, or to add texture," restricts it to three named colour pairs, and states: "Do not apply duotones over images where faces are clear and recognizable. We do not want to alter an individual's appearance or identity." It adds "Duotones are never the focus of a layout; they work best when applied to imagery that is not overly detailed or distracting" (S14). Pavilion draws the same line by role: duotone for background/texture images, "full color" for images in layout (S15).

**K9-F14 — composition rules that a builder can actually check.** Pavilion: rule of thirds with "a member's eyes in an upper or lower third quadrant," and shallow depth of field for intentional focus (S15). This is the practical version of K9-F9: the eye line is a placeable object, and where you place it decides whether the crop survives.

**K9-F15 — in the UK regime, consent is not the default lawful basis, but an opt-out is expected for promotional use.** The ICO tells schools to choose public task or legitimate interests rather than consent, then: "If you want to use student photos for promotional purposes, we would still generally expect you to offer an opt-out to parents (or the students themselves if they're old enough to make their own decisions)." It also expects schools to "provide your policies for recording and using photographs at the start of the academic year," to keep records of who has opted out, and to honour an objection by removing the photograph from the website and from "any digital media" going forward (S17).

**K9-F16 — under FERPA a photograph of a student can itself be a record.** A photo or video is an education record where it is "directly related to a student" and "maintained by an educational agency or institution or by a party acting for the agency or institution"; one of the listed tests for "directly related" is that "the person or entity taking the photo or video intends to make a specific student the focus." Schools commonly designate event photographs as directory information or obtain parental consent to disclose them (S18). FERPA binds institutions receiving US Department of Education funds; **whether it reaches GT School is a legal question K9 cannot answer and must not assert** (see Q-K9-4).

**K9-F17 — the material fact for this project: a past publication is not a permission for a new use.** Neither S17 nor S18 treats prior appearance on a site as a standing authorisation. The ICO's model is purpose-specific, granular, recorded, and withdrawable (S17). Twenty-three of the 25 approved photographs show identifiable children; moving one of them from a blog thumbnail on the existing site to the hero of a paid-social landing page is a different purpose at a different prominence with a different audience.

**K9-F18 — name plus face is the combination to avoid.** GOV.UK's image guidance puts identification in the visible caption or credit field rather than the alt attribute (S25); the ICO's worked example turns on a school printing "his name and photograph" together in the prospectus and later having to withdraw it (S17). The operable rule for GT is: no child's name anywhere near a child's face, in alt text, caption or file name.

**K9-F19 — the free-stock licences do not solve the people problem.** Unsplash permits commercial use with no permission needed and no attribution required, and forbids only resale without significant modification and compiling a competing service — it says nothing about model releases, identifiable people or implied endorsement (S39). "Free to use" is not "cleared to imply that this child attends your school," which is exactly what a stock photograph on a school page implies. This is the licensing argument for DD-08's ban, independent of the taste argument.

## 4. Findings — crops, art direction and treatment mechanics

**K9-F20 — two different problems, two different mechanisms, and MDN names both.** Resolution switching serves the same picture at different sizes via `srcset` and `sizes`; art direction serves a *different crop* via `<picture>` and `media`. MDN names the second explicitly: "The general problem whereby you want to serve different cropped images in that way, for various layouts, is commonly known as the **art direction problem**… an improvement would be to display a cropped version of the image which displays the important details of the image when the site is viewed on a narrow screen" (S27).

**K9-F21 — do not mix the two syntaxes.** MDN: "You should use the `media` attribute only in art direction scenarios; when you do use `media`, don't also offer media conditions within the `sizes` attribute" (S27).

**K9-F22 — CSS and JavaScript cannot do art direction, because the preload scanner runs first.** "When the browser starts to load a page, it starts to download (preload) any images before the main parser has started to load and interpret the page's CSS and JavaScript" (S27). A JS crop swap arrives after the wrong image is already on the wire.

**K9-F23 — `<picture>` also does format fallback, and the `alt` lives on the `<img>`.** Sources are evaluated in order; `type` skips unsupported formats; the `<img>` is mandatory and carries both the fallback and the alt text (S28).

**K9-F24 — `media` on a `<source>` is a full media query, so height is available.** S28 shows `media` used for `(width >= 600px)` and for `prefers-color-scheme`. Nothing restricts it to width — which is the mechanism for the in-app-browser class, where the constraint is a 664 to 780px *height*, not a width (`17` section 4).

**K9-F25 — the focal point is a CSS property, not a hope.** With `object-fit: cover`, `object-position` decides which part survives the crop; default `50% 50%` (S29). A portrait whose subject sits high in frame needs `object-position: center top` or it loses the head at a square crop.

**K9-F26 — the frame's ratio is declarable and Baseline.** `aspect-ratio` is Baseline since September 2021; on a replaced element, a specified ratio acts as the placeholder before load and the intrinsic ratio takes over after, if `auto` is also given (`aspect-ratio: 3/2 auto`) (S30).

**K9-F27 — text over an image is the ordinary way to fail AA.** SC 1.4.3 requires 4.5:1, or 3:1 for large text (18pt / 14pt bold, about 24px), Level AA; the understanding document names the specific failure, "F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text," and notes the ratio "applies regardless of whether the background is a solid color or image" (S23).

**K9-F28 — the treatment inventory, with the trade named.** Milan lists overlay, scrim (a "semi-transparent, lightweight, and semi-opaque gradient layer"), strips/highlight blocks, copy space (placing text in a naturally quiet region), and background blur (S19); part 2 adds framing, soft gradients, text restyling and repositioning, solid shapes, and replacing the image with a colour field. Her warning is the useful part: "These endeavors commonly backfire, usually when the contrast between the text and the background is too low" (S19, S20).

**K9-F29 — moving the text off the photograph is a listed, legitimate technique.** Part 2 counts "text position — repositioning text outside images" and "colored backgrounds — replacing images entirely" among the accessible answers, noting that real text "supports zooming without distortion, works with assistive technologies, and allows CSS styling flexibility" (S20). The accessible answer to a hard hero is frequently to stop putting the headline on the picture.

**K9-F30 — text baked into an exported image is a separate AA failure.** SC 1.4.5 (Level AA): "If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text," excepting customisable presentations and cases where the presentation is essential, such as logotypes (S24).

**K9-F31 — component systems ask for consistency of image *kind*, not only of size.** USWDS: "If you use a thumbnail image on one item, use a similar kind of image (photo, illustration, etc.) on every item in the collection," "use a consistent width for images," and "avoid repeating placeholder images" (S26). Translated for a two-door landing: if one door has a photograph, both doors have a photograph, or neither does.

## 5. Findings — the alternatives when a photograph is weak or absent

**K9-F32 — MIT Admissions is a real precedent, with a documented reason and a documented revision.** The site was designed by Shun Liang in 2015 after an RFP; blogger avatars were "blog-type avatar illustrations in place of the usual photo treatment." Version 1.0 was watercolour; version 2.0 is "a more detailed and realistic rendering, paying special attention to skin color, to better reflect the diversity of MIT's student body" (S16). K5 measured the consequence: MIT Admissions carries 52 images at 37% alt coverage and its portraits are "commissioned illustrations, described in alt text down to the shirt colour, deliberately not photographs" (R4, K5-F62, K5-F75).

**K9-F33 — illustration did not cost MIT its credibility signals; it substituted for casting.** The same case study records that Liang *also* shot "a series of student portraits for the MIT admission office… to show student diversity across all the various departments and schools at MIT" (S16). Illustration was used where a portrait would have been a stand-in; photography was used where a real person was the subject. That is the boundary worth importing, not "illustration instead of photography" as a blanket.

**K9-F34 — an illustrated route is a commission, not a free fallback.** Both MIT states above were drawn for MIT. Under CON-01 and DD-08 there is no agency and no established photography or illustration budget (R2). So the honest version of the MIT precedent inside the twenty mocks is *geometric and diagrammatic* work an engineer can author in SVG and CSS — schedules, maps, ledgers, marks — and the *character-illustration* route is a proposal to put to Nari and David, not something a mock can quietly assume.

**K9-F35 — text is a legitimate first-class answer, and the accessibility literature prefers it.** GOV.UK: "do not use images alone to provide information — it will exclude users who cannot see or access the image," and for diagrams, "imagine you're describing it to someone over the phone" (S25). Milan's part 2 lands in the same place: actual text is the most accessible solution (S20).

**K9-F36 — on a phone, a decorative image is a cost with no return.** Budiu: "Decorative images should not be used on mobile, as they lengthen the page and make it load more slowly" (S5). With two thirds of GT sessions on a phone (fact 5), "typographic" is not a fallback posture on this project; it is the default posture that photographs have to earn their way past.

## 6. Findings — image performance, measured and cited

**K9-F37 — images are the LCP element on the large majority of mobile pages.** 73% of mobile pages have an image as their LCP element; among pages with poor LCP, the image load is delayed "1,290 milliseconds at the 75th percentile," and "35% of those images had source URLs that were not discoverable in the initial HTML response" (S34). S35 gives the companion figure: "70% of pages' LCP scores are based on image performance."

**K9-F38 — the LCP recipe is four lines long.** Sites should target LCP ≤ 2.5 s for at least 75% of visits; "the LCP resource should be discoverable from the HTML source"; use `fetchpriority="high"` on the likely LCP image; "Never lazy-load your LCP image" (S31). Only 15% of eligible pages use `fetchpriority` at all (S34).

**K9-F39 — lazy loading below the fold is nearly free, and lazy loading above it is not.** Chrome begins fetching offscreen images around 1,250 px below the viewport on 4G and 2,500 px on slower connections; in testing, 97.5% of lazy-loaded images on 4G were fully loaded within 10 ms of becoming visible (92.6% on 2G). The prohibition is explicit: "Don't lazy-load images that are likely to be in-viewport when the page loads, especially LCP images" (S32). 9.5% of mobile pages still lazy-load their LCP image (S38).

**K9-F40 — unsized images are the commonest CLS defect and the cheapest fix.** "66% of pages have at least one unsized image" (S34). CLS target is ≤ 0.1 for 75% of visits; always set `width` and `height`; for responsive scaling use `img { height: auto; width: 100%; }`; for `srcset`, "each image should use the same aspect ratio" so one pair of width/height attributes is valid for all steps (S33).

**K9-F41 — `sizes="auto"` removes the hardest attribute to get right, at two prices.** It applies only to `loading="lazy"` images, and it effectively requires `width` and `height`, because the spec pins `sizes=auto` to `contain-intrinsic-size: 300px 150px` to break the layout/selection feedback loop — without dimensions, every auto-sized image is treated as 300×150 (S37).

**K9-F42 — hand-written `sizes` is wrong on the real web often enough to matter.** Median `sizes` error is 43% on desktop and 16% on mobile; 20% of desktop `sizes` values are "inaccurate enough to affect `srcset` selection," costing about 180 KB of excess image data at the 75th percentile (S38).

**K9-F43 — adoption context for the mechanisms this file recommends.** `srcset` on 42% of mobile pages; `<picture>` on 9.3%; native lazy loading on about a third of sites (S38).

**K9-F44 — format share and the honest state of AVIF.** JPEG 32.4%, PNG 28.4%, GIF 16.8%, WebP 12%, SVG 6.4%, AVIF 1.0% (S38). AVIF gives "significant reductions in file sizes" against JPEG and WebP and is supported in Chrome/Opera since 2020, Firefox 2021, Safari 2022 — but "browsers unable to parse unsupported formats will fail to render the image entirely," so it belongs behind a `<picture>` fallback, not on its own (S36, S28).

**K9-F45 — page weight context.** The median image is 0.058 megapixels and 12 KB; the median page's *largest* image is 135 KB; at the 90th percentile a page carries 1,002 KB of images (S38). Images are close to half of a median 2 MB page (S35).

**K9-F46 — measured on this repository: the mirror's image markup is a near-complete inventory of the defects above.** Across the eight mirrored pages on disk: **185 `<img>` elements; 25 with non-empty `alt` (13.5%); 152 with `alt=""`; 8 with no `alt` attribute at all; 8 with both `width` and `height` (4.3%); 177 with `loading="lazy"` (95.7%); 58 with `srcset` and `sizes`; 0 `<picture>` elements; 0 `fetchpriority`; 0 `decoding`.** On `index.html` alone: **72 `<img>`, 4 with non-empty alt (5.6%), 71 of 72 lazy-loaded — the first-screen image included — and 1 of 72 with width and height.** (K9 measurement, 2026-09-11; the 5.6% figure corroborates K5-F62's independently measured 6% of 71.)

**K9-F47 — measured on this repository: the advisor portraits are 750×750 photographs shipped as RGBA PNG.** The eight largest assets in the CMS-upload directory are all `750 x 750, 8-bit/color RGBA` PNGs between 479 KB and 917 KB — about 1.6 bytes per pixel for photographic content. Re-encoded with Pillow at quality 80: 895 KB → **42 KB** WebP, 798 KB → **18 KB**, 765 KB → **24 KB**; a 95 to 98% reduction. In the same test AVIF at the same nominal quality with untuned settings came out *larger* than WebP on all three (70 KB, 29 KB, 37 KB) — small, flat-background, alpha-carrying images are the case where AVIF's advantage does not appear. (K9 measurement, 2026-09-11; indicative, not a codec benchmark.)

## 7. Findings — the GT photo library, measured

Measured by K9 on 2026-09-11 from `0_plan/mockups/shared/img/`: **25 `.webp` photographs, 2,798 KB total, 112 KB mean; plus 3 SVG logos, 20 KB.**

**K9-F48 — the library's native grain is 3:2 landscape.** Eleven of the 25 are exactly 1.5:1. The rest spread from 0.71 (portrait) to 1.69. A 3:2 frame costs nothing; a 16:9 frame throws away 25% of the vertical; a 1:1 frame throws away a third of the horizontal and will cut faces unless `object-position` is set per file (K9-F25).

**K9-F49 — the ceiling of the whole library is 1,440 px on the long edge.** Nothing is larger. Seventeen of 25 reach 1,000 px or more on the long edge; two of those seventeen are the excluded studio shots (R1). **Fifteen usable photographs are 1,000 px or wider.** Three are ≤ 608 px on the long edge (`georgetown-3504` 540×360, `georgetown-3915` 600×360, `georgetown-writing` 608×360).

**K9-F50 — therefore full-bleed works on phones and fails on laptops, which is the reverse of the usual assumption.** A 390 px phone at DPR 3 needs 1,170 device pixels: a 1,440 px source covers it. A 430 px phone at DPR 3 needs 1,290: covered. A 1,440 px laptop at DPR 2 needs 2,880: a 1,440 source is a 2× upscale. A 1,920 px desktop at DPR 1 needs 1,920: a 1.33× upscale. **The largest true-pixel display width for this library on a 2× screen is 720 CSS px.**

**K9-F51 — the clustering in `ASSETS.md` removes a quarter of the apparent choice, and resolution removes another quarter.** Start at 25; drop the two excluded studio shots to reach **23 usable files**. Three redundancy clusters (R1) then collapse eight files to three scenes: the ribbon-cutting pair; the four standing-desk/laptop frames from one classroom session; and the adult/child pair shared between `anywhere-academics-left` and `georgetown-support`. That leaves **18 distinct scenes**. Applying K9-F49's resolution floor to the best representative of each, **13 scenes are 1,000 px or wider on the long edge** and can lead a screen; the other five are card and thumbnail material. K9 recommends **12** as leads, holding back `anywhere-slider-1` on judgment because it reads as an adult information session rather than a lesson.

**K9-F52 — two photographs carry third-party or baked-in text.** `georgetown-crowd.webp` has a marketing banner ("Unleash your child's genius at [GT] School") and a QR code in frame; `anywhere-slider-2/-3` show a third-party `baduk.club` logo (R1). Under SC 1.4.5 the banner is an image of text (K9-F30); under REQ-022 and DEL-018 its wording is a claim, and it cannot reach a new surface without a claims-register row.

**K9-F53 — the library has no photograph of a child learning at home, and the one file named for it is the one that must not be used.** `anywhere-student-home.webp` is a posed studio shot on an isolated white ground and is on `ASSETS.md`'s avoid list (R1). Astra's E3 note is the precise statement of what is and is not established: the folder contains no such image; that does **not** establish that none exists anywhere on either live site (R3).

**K9-F54 — four photographs carry no recognisable child's face and are therefore the lowest-exposure assets in the library.** `georgetown-dscf1931.webp` (hands only, 900×675, 20 KB — the smallest file and the cleanest consent position), `georgetown-guide.webp` (backs turned, 1440×960), `anywhere-slider-2.webp` (backs and profiles, 1080×722), and `georgetown-student-writing.webp` (child downturned, adults only as blurred legs, 1440×960).

**K9-F55 — the library's compression is already reasonable and is not where the performance work is.** Bytes per pixel range from 0.03 (`georgetown-dscf1931`) to 0.21 (`anywhere-academics-left`); the largest file is 258 KB (`georgetown-support`, 1080×1429). The waste in this project is not the mock library, it is the mirror's PNG portraits (K9-F47) and the mirror's lazy-loaded first-screen image (K9-F46).

## 8. Principles the studio adopts

| # | Principle | Traceable to |
|---|---|---|
| K9-P1 | **A photograph may not be the primary evidence for a fact it does not depict.** If the picture shows an in-person weekend, it cannot carry "online". Relabel it, caption it, or drop it | K9-F2, K9-F5, K9-F7, K9-F11, R3 |
| K9-P2 | **Every photograph on a GT surface is a real GT moment, or there is no photograph.** No stock, no AI people, no casting, no studio isolate | K9-F4, K9-F6, K9-F7, K9-F19, DD-08 |
| K9-P3 | **Symmetry between the doors is non-negotiable.** Both doors carry a photograph or neither does. A photographed campus beside an unphotographed online school ranks the online school | K9-F31, K0-A7, DD-21 |
| K9-P4 | **No photograph is displayed above its native pixel width.** For this library that caps photo frames at 720 CSS px above 1024 px viewport, and permits full-bleed only on phones | K9-F49, K9-F50 |
| K9-P5 | **Art direction is declared in markup, per viewport class, with `<picture media>`; the focal point is declared in CSS with `object-position`.** Never a JS crop swap | K9-F20, K9-F22, K9-F24, K9-F25 |
| K9-P6 | **Treat the photograph, never hide it.** A scrim covers the text's region only, is measured at its worst pixel, and stops at the level where the picture stops being read | K9-F12, K9-F13, K9-F27, K9-F28 |
| K9-P7 | **No duotone on a recognisable face, ever; no baked-in text in any exported image** | K9-F13, K9-F30, K9-F52 |
| K9-P8 | **The face should look at the work, not at the reader.** Prefer frames where the subject's attention is inside the frame; place the eye line on a third | K9-F9, K9-F14 |
| K9-P9 | **Documentary alt text on every informative image, and a visible caption wherever place or format could be misread.** The alt-text brief and the photography brief are the same document | K5-P9, K9-F18, K9-F35, S21, S22 |
| K9-P10 | **No child's name beside a child's face**, in alt text, caption, file name or adjacent copy | K9-F18 |
| K9-P11 | **A past publication is not a permission.** A new promotional surface needs a purpose-specific, recorded, withdrawable permission, and where two photographs are equally good the one without a recognisable face wins | K9-F15, K9-F16, K9-F17, K9-F54 |
| K9-P12 | **One LCP image per page, and it is an `<img>` in the HTML with `fetchpriority="high"`, `width`, `height` and no `loading="lazy"`; everything else is lazy** | K9-F37, K9-F38, K9-F39, K9-F40 |

## 9. Anti-patterns

| # | Anti-pattern | Where it was measured or warned against |
|---|---|---|
| K9-A1 | **The ad-shaped hero**: a full-bleed photograph with a headline burned over it and one button in a corner. Reads as a display unit and gets skipped | K9-F10 |
| K9-A2 | **The decorative feel-good hero**: a big warm picture carrying no information, added because the screen looked empty | K9-F2, K9-F3 |
| K9-A3 | **The stand-in photograph**: a picture that stands in for a thing the school cannot show yet. This is the live one on this project — an intensives weekend standing in for online learning | R3, K9-F2, K9-P1 |
| K9-A4 | **The staged studio isolate**: posed props, white ground, direct-to-camera smile. Two files in GT's own library | R1, K9-F4, K9-F11 |
| K9-A5 | **The scrim that eats the picture**: a flat 50 to 60% black wash across the whole frame. It buys contrast by deleting the photograph, and then the photograph is decorative (K9-A2) | K9-F12, K9-F28 |
| K9-A6 | **Text over an image checked by eye**: F83 is the named WCAG failure; the average pixel passes and the sky does not | K9-F27 |
| K9-A7 | **Baked-in marketing text and third-party logos in frame**: GT's own crowd shot carries a claim and a QR code | K9-F30, K9-F52 |
| K9-A8 | **Upscaling to fill the viewport**: a 1,440 px source stretched across a 2,880 device-pixel laptop. Soft photographs read as old photographs, which is the thing Nari named | K9-F50, K9-F4, DD-08 |
| K9-A9 | **A square or 16:9 crop applied globally without `object-position`**: decapitates the subject on a third of this library | K9-F25, K9-F48 |
| K9-A10 | **Two photographs from the same session on one page**: GT's library has a four-frame cluster and two pairs; using two reads as one afternoon's shoot | R1, K9-F51 |
| K9-A11 | **`alt=""` everywhere**: the mirror's own posture — 152 of 185 images empty-alted, 8 with no alt attribute at all. It is simultaneously an accessibility failure, an SEO failure, and evidence that nobody wrote a photography brief | K9-F46, K5-A8 |
| K9-A12 | **Lazy-loading the first screen**: 71 of 72 images on the mirror's home page, first-screen image included | K9-F46, K9-F39 |
| K9-A13 | **Blanket "always AVIF"**: measured on this repo's own portraits, AVIF at equal nominal quality was larger than WebP. Re-encoding an existing lossy `.webp` to AVIF costs quality for nothing | K9-F44, K9-F47 |

## 10. How it applies to GT

### 10.1 The image direction for the twenty mocks

The arithmetic first. Thirteen distinct scenes, twelve of them large enough to lead a screen (K9-F51), against twenty mocks. **Twenty photo-led directions cannot be built from this library without repeating scenes or upscaling.** The allocation:

| Band | Count | What it is | Photography |
|---|---|---|---|
| A | up to 12 | Photo-led directions | One **lead** photograph each, no lead repeated across the twenty; plus at most one supporting image |
| B | at least 6 | Typographic or diagrammatic directions | Zero photographs above the fold. Logos only, plus author-able SVG (schedule, map, ledger, mark) |
| C | up to 2 | Hybrid | A photograph appears only below the fold, in a captioned strip |

Lead assignments for band A — one per mock, no repeats, cluster representatives already chosen:

| Lead file | Native | Native ratio | Role it can carry | Conditions |
|---|---|---|---|---|
| `georgetown-science.webp` | 1440×1208 | 1.19 | Hero; Georgetown door | Strongest large file; faces visible, so K9-P11 applies |
| `anywhere-austin-intensives.webp` | 1080×1163 | 0.93 | Hero; portrait frames | **Caption required**: it is an in-person intensive, not remote (K9-P1) |
| `georgetown-guide.webp` | 1440×960 | 1.5 | Hero; teaching cue | No recognisable child's face — lowest exposure large file (K9-F54) |
| `georgetown-student-writing.webp` | 1440×960 | 1.5 | Hero; detail-led first screen | Shallow depth of field already present; no adult faces |
| `anywhere-academics.webp` | 1440×960 | 1.5 | Section opener; peer-teaching cue | Busy background — needs the 3:2 frame, not a square |
| `anywhere-intensives-1.webp` | 1440×960 | 1.5 | Section opener; intensives | Worksheet text legible in frame; keep it small or crop it out (K9-F30) |
| `georgetown-presenting.webp` | 1440×960 | 1.5 | Section opener | Representative of the four-frame standing-desk cluster; the other three are then card-only |
| `georgetown-support.webp` | 1080×1429 | 0.76 | Portrait hero; adult-and-student cue | Representative of the adult/child pair; `anywhere-academics-left` is then card-only |
| `anywhere-slider-3.webp` | 1347×900 | 1.5 | Section opener | Crop out the `baduk.club` backdrop or do not use at size |
| `gtschool-3993.webp` | 1080×720 | 1.5 | Section opener; peers | Max display 540 CSS px at DPR 2 |
| `anywhere-slider-2.webp` | 1080×722 | 1.5 | Section opener | No recognisable faces; the safest duotone candidate |
| `georgetown-crowd.webp` | 1440×960 | 1.5 | Proof strip; community scale | **Only with the banner and QR cropped out**, or with a claims-register row for the banner wording (K9-F52) |

Supporting-only, never a lead:

| File | Native | Maximum display | Why |
|---|---|---|---|
| `georgetown-dscf1931.webp` | 900×675 | 450 CSS px at DPR 2 | Hands only, 20 KB. The default texture band; use freely on either door |
| `anywhere-slider-1.webp` | 1080×722 | 540 CSS px | Reads as a parent info session, not a lesson. Use only where parents are the subject |
| `anywhere-section.webp`, `anywhere-intensives-2.webp` | 1280×912, 1000×800 | card only | Cluster siblings of `georgetown-presenting` |
| `anywhere-academics-left/-right.webp` | 628×684 | 314 CSS px | Small cards only |
| `georgetown-campus.webp` **or** `anywhere-georgetown-visit.webp` | 867×627, 800×800 | 400 CSS px | Same ribbon-cutting; pick exactly one across the whole set |
| `georgetown-3504`, `-3915`, `-writing` | ≤608 long edge | 300 CSS px | Thumbnails only. Never a hero (K9-F4 tip 6) |
| `anywhere-student-home.webp`, `georgetown-kid-writing.webp` | — | **excluded** | `ASSETS.md` avoid list; studio isolates (R1, DD-08) |

### 10.2 Crops and art direction, per viewport class

One `<picture>` per photograph, three `<source>`s, one `<img>`. Ratios are the frame; `object-position` is set per file so the subject survives.

| Class (`17` §4) | Frame ratio | Max display width | Mechanism |
|---|---|---|---|
| Phone 360–430 | 4:5 portrait, or 1:1 | 100vw, full-bleed allowed | `<source media="(max-width: 640px)" srcset="…-720.webp 720w, …-1080.webp 1080w" sizes="100vw">` on a portrait crop. DPR 3 is covered by a 1,080–1,440 source (K9-F50) |
| Phone in an app browser 390×664, 412×780 | 3:1 band, **or no image** | 100vw | `<source media="(max-height: 700px)" …>` serving the band. Height, not width, is the constraint here (K9-F24). If the doors' CTAs do not fit, the image is the thing that goes, not the copy |
| Tablet 768–1024 | 3:2 | 100vw minus gutters | Landscape crop, 1,440 step |
| Laptop 1280–1536 | 3:2 | **720 CSS px** | Bounded column. Above 1024 the photograph stops growing (K9-P4) |
| Desktop 1920 | 3:2 | **720 CSS px** | The surface grows, the photograph does not. Fill the width with type, rule and colour field, never with a stretched picture (K9-A8) |
| Zoom 1280 @125%, 390 @200% text | frame shrinks or image is hidden | — | Text must never be clipped by a frame. Hiding a supporting photograph at 200% text is correct behaviour, not a failure |

Frame CSS, once, in `tokens.css` consumers:

```css
.figure   { aspect-ratio: 3 / 2; overflow: hidden; border-radius: var(--radius-md); }
.figure img { width: 100%; height: 100%; object-fit: cover; object-position: var(--focal, 50% 50%); }
img { max-width: 100%; height: auto; }   /* CLS, per S33 */
```

`--focal` is set per file in the mock's own stylesheet, with a one-line comment naming what it protects. Portraits shot high in frame (`georgetown-support`, `anywhere-austin-intensives`) take `50% 25%`; `georgetown-student-writing` takes `50% 40%` to keep the hands.

### 10.3 Treatments

| # | Treatment | Verdict | Rule |
|---|---|---|---|
| T1 | Untreated, inside a frame with `--radius-md` and a `--color-border` hairline | **Default** | Every door and every hero starts here |
| T2 | Directional scrim over the text's region only | Allowed | `linear-gradient` from `--color-navy` at 0.72 alpha to transparent, covering **only** the band the text occupies. Measured at the worst pixel inside the text's bounding box: ≥4.5:1 body, ≥3:1 at ≥24px (K9-F27) |
| T3 | Tint ≤8% of `--color-navy` or `--color-accent` to unify a strip of three or more | Allowed | Never on a door photograph; never on a lone image |
| T4 | Duotone, `--color-navy` + `--color-bg` | **Conditional** | Only on the three files with no recognisable face: `georgetown-dscf1931`, `georgetown-guide`, `anywhere-slider-2`. Never on a door. Never the page's only imagery (K9-F13) |
| T5 | Grayscale, heavy colour grading | **No** | Reads as archival and is discouraged by the closest institutional guidance (K9-F12) |
| T6 | Blur applied to fix a crop | **No** | Only shallow depth of field already in the original counts |
| T7 | Text exported into an image | **No** | SC 1.4.5. Logos excepted as logotypes (K9-F30) |
| T8 | Flat wash over the whole frame | **No** | K9-A5. If the text needs that much cover, move the text (K9-F29) |

### 10.4 When to go typographic or illustrated

Go typographic when any one of these is true:

1. No honest photograph exists for the thing the panel asserts (the Anywhere case, 10.5).
2. The only candidate is a cluster sibling of a photograph already on the page (K9-A10).
3. The only candidate is below its slot's native-pixel requirement (K9-P4) — which rules out the three ≤608 px files from anything above a card.
4. The headline would need a scrim heavy enough to make the picture decorative (K9-A5).
5. The viewport is an in-app browser and the door CTAs do not fit with the image in place (`17` §4).

What "typographic" means here, concretely, and what it does **not**: a large-type panel on `--color-surface` or `--color-navy`; a schedule or format diagram in inline SVG; an N-campus map (DD-21); a rule-and-number ledger where every number already has a claims-register row (REQ-022); the `gt-icon.svg` mark used at scale. It does **not** mean commissioned character illustration: MIT's illustrated portraits were drawn twice, for MIT, by a designer under contract (K9-F32, K9-F34). Put MIT to Nari and David as the *precedent for commissioning*, with a decision row; do not let a mock imply an illustration library that does not exist (DD-31).

### 10.5 GT Anywhere, honestly, before a home-learning photograph exists

This is the escalated `E2` finding 9 (R3). The facts, stated exactly: the approved folder contains no documentary photograph of a child learning at home; the one file named for it is a studio isolate on the avoid list; Astra's E3 note correctly records that this establishes nothing about the live sites, only about the folder (K9-F53).

The rule that settles it: **a photograph may not be the primary evidence for a fact it does not depict** (K9-P1). An intensives-weekend photograph under an "Online" label asks the picture to assert the one thing it disproves, and NN/g's finding is that an information-carrying picture is exactly the element a parent stops on (K9-F2).

Options, in order of preference, with what each costs:

| # | Option | Verdict | Cost |
|---|---|---|---|
| 1 | **Neither door carries a photograph.** Both doors are typographic: label, one line naming who it is for, a format diagram. Photographs appear lower on the page, captioned, in a strip that serves both schools | **Recommended default for band B, and for every band A mock whose lead sits in the hero rather than on a door** | Loses the warmth of a face on the first screen. Bought back by the strip below and by the hero |
| 2 | **Both doors carry a photograph, and the Anywhere photograph is visibly captioned as an in-person intensive** — caption on the page, not only in alt text | Allowed for band A | Requires a caption in the first screen, which costs vertical space at 390×664. Reads as honest if the caption is legible; reads as a hedge if it is 11px grey |
| 3 | Anywhere's door carries a face-free photograph with no place cue (`georgetown-dscf1931`) | **No** | Every such file is Georgetown-sourced. Using it under the Anywhere label swaps one misattribution for a quieter one |
| 4 | A screenshot of the live class or the platform as the Anywhere image | **Blocked, not rejected** | Would be the honest picture of an online school. Nothing of the kind is in the approved folder; needs Nari. This is the ask worth making |
| 5 | Commissioned illustration of a remote lesson, MIT-style | **Escalate** | Needs budget and a brief; CON-01 and DD-08 mean no mock may assume it (K9-F34) |
| 6 | Stock or AI image of a child at a laptop at home | **Forbidden** | DD-08, K9-P2, K9-F6, K9-F19 |

Symmetry is the part most likely to be got wrong. If option 2 is taken for Anywhere while Georgetown gets an untreated campus photograph, the page has ranked the doors, which is exactly K0's A7 and is fatal on the rubric's Objective row. Whatever is chosen is chosen for **both** doors (K9-P3).

**The ask to put to Nari**, in one paragraph she can answer: *we need one photograph, or a short screen recording still, of an actual GT Anywhere session as a family sees it — a child at their own desk in a live class, or the class as it appears on screen. It must be a real session, not arranged for the camera. We need it with a written permission from that family that names website and paid-advertising use, is specific to that use, and can be withdrawn. Until it exists, the Anywhere door is typographic and no photograph on the page is labelled "online".*

### 10.6 The alt-text and caption rule

| # | Rule | Source |
|---|---|---|
| 1 | Every informative image carries alt text of roughly 8 to 20 words, present tense, naming the activity and the setting. It describes what is happening, never what the school claims | S21, S22, K5-P9, K5-F85 |
| 2 | No "image of", "photo of", "picture of". No file names. No keyword stuffing | S21 |
| 3 | Alt text that would merely restate the adjacent headline is `alt=""` — but under DD-08 a photograph that earns `alt=""` should be cut instead (K9-F36, K9-A2) | S22, S5 |
| 4 | An image inside a link takes the link's destination as its alt, not a description: the GT Anywhere wordmark linking to the Anywhere site is `alt="GT Anywhere"`, and the mirror already does this correctly | S21, S22 |
| 5 | **A visible `<figcaption>` is required wherever place, format or date could be misread.** On this landing that means every photograph adjacent to the Anywhere door or the Anywhere section. Format: *activity — place*. "Intensives weekend, Austin." | K9-F18, K9-P1, S25 |
| 6 | Caption and alt text are different jobs and must not be identical strings: the caption carries provenance for everyone, the alt text carries the scene for a screen reader | S25 |
| 7 | **No child's name in alt text, caption, file name, or copy adjacent to a face** | K9-P10, K9-F18 |
| 8 | Target 100% non-empty alt on informative images. Three exemplar sites reach it; GT's own home page is at 5.6% | K9-F46, K5-F62 |

Model strings, rewriting `ASSETS.md`'s weaker suggestions to the Brentwood standard (K5-F85):

| File | Alt (model) | Caption, where required |
|---|---|---|
| `georgetown-science.webp` | students in lab coats mix coloured solutions in beakers while two teachers help at the counter | — |
| `anywhere-austin-intensives.webp` | a student in headphones speaks into a studio microphone while another waits behind her | Intensives weekend, Austin |
| `georgetown-guide.webp` | a teacher works through handwritten notes on a whiteboard while students follow from their desks | — |
| `georgetown-dscf1931.webp` | a student's hands add two fractions in marker on lined paper | — |
| `georgetown-crowd.webp` | families fill rows of chairs at a GT School information session | Information session, Georgetown campus |

(`ASSETS.md`'s "adult and student working closely indoors" is the pattern to avoid: it names a relationship instead of an activity and would be true of any photograph in the folder.)

### 10.7 The performance plan for images

| # | Rule | Why |
|---|---|---|
| 1 | Exactly one LCP image per mock, chosen deliberately and named in the mock's rationale. It is an `<img>` in the HTML, never a CSS background | K9-F37, K9-F38 |
| 2 | LCP image: `fetchpriority="high"`, `width`, `height`, **no** `loading="lazy"`, no `decoding="async"` | K9-F38, K9-F39 |
| 3 | Every other image: `loading="lazy" decoding="async"`, plus `sizes="auto"` where `width`/`height` are present | K9-F39, K9-F41 |
| 4 | **Every** `<img>` carries `width` and `height`; the frame carries `aspect-ratio`; `img { max-width:100%; height:auto }` | K9-F40, K9-F26 |
| 5 | `srcset` ladder of 480 / 720 / 1080 / 1440 w, **truncated at each file's native width — never upscale a step into existence** | K9-F49, K9-P4 |
| 6 | Same aspect ratio across every step of one `srcset`, so one width/height pair stays valid | K9-F40 |
| 7 | Art-directed crops go in `<source media>`, not in `sizes`; never both | K9-F21 |
| 8 | Format: ship the existing `.webp` as the single format. Do **not** transcode `.webp` → AVIF: measured on this repo, AVIF at equal nominal quality was larger, and lossy-on-lossy costs quality for nothing | K9-F44, K9-F47, K9-A13 |
| 9 | Budgets: **LCP image ≤ 120 KB** at the step a phone selects; **first screen ≤ 200 KB** of image bytes at 390 px; **whole page ≤ 700 KB**. Context: the web's median *largest* image per page is 135 KB and the 90th-percentile page carries 1,002 KB | K9-F45, K9-F55 |
| 10 | Below-fold images stay lazy even on the in-app-browser class; Chrome fetches them 1,250 px ahead on 4G and 2,500 px on slower links, and 97.5% arrive within 10 ms of becoming visible on 4G | K9-F39 |
| 11 | Nothing animates the LCP image before first paint | `17` §7, MN rows |
| 12 | The derivative ladder is generated once by a script under `0_plan/tools/`, checked in as static files. This adds files, not a dependency and not a build step — but it is a new tool script, so it is Johnny's call to approve | dependency-free rule, `CLAUDE.md` |

Two fixes that belong to the sites rather than the mocks, and should be logged as requirements now: the mirror's eight 750×750 RGBA PNG advisor portraits (479–917 KB each; 42 KB, 18 KB and 24 KB as WebP in the measured test — a 95 to 98% reduction), and the home page's lazy-loaded first-screen image, 71 of 72 images lazy (K9-F46, K9-F47).

### 10.8 Calibrated 5 for the rubric row **Imagery**

The rubric asks: *"Do the photographs carry weight, crop well at every size, and reinforce the cue?"* Evidence: door and hero crops at 390 and 1440 (`17` §6). Calibration:

| Score | What the critic sees |
|---|---|
| **5** | Every photograph is a real GT moment and is the only member of its redundancy cluster on the page. **No photograph asserts anything it does not show**, and every image whose place or format could be misread carries a visible caption. Both doors are treated identically — both photographed or both typographic. No photograph is displayed above its native width at any of the thirteen matrix sizes; art direction is declared with `<picture media>` for at least the phone and in-app-browser classes; `object-position` is set per file, and no face or hand is cut at any matrix size. Any text over a photograph measures ≥4.5:1 (≥3:1 at ≥24px) at the **worst** pixel of its bounding box. Treatment is T1, T2 or T3; no face is duotoned; no text is baked into an image. Every informative image has documentary alt text; no child's name sits beside a child's face. The LCP image is an `<img>` with `fetchpriority="high"`, `width`, `height` and no `loading="lazy"`, and the first screen is inside the byte budget. **A direction with no honest photograph scores 5 by being deliberately typographic, and says so in its rationale** — it does not score 5 by borrowing one. Exemplars: MIT Admissions for the non-photographic route (K0 F9-11, K9-F32); Equinox for exclusivity carried by imagery and restraint rather than price (K0 F9-15); Brentwood for alt text written as documentary caption (K5-F85) |
| **4** | All of the above, with one contained defect: one `object-position` that clips a hand at one size, or one caption missing where provenance is merely helpful rather than load-bearing, or a byte budget missed by under 20% |
| **3** | The photographs are real and the crops hold, but the page has not decided: doors treated asymmetrically, or two cluster siblings on one page, or alt text present but generic ("students in a classroom") |
| **2** | A photograph is doing work it cannot support — an in-person frame under an online label, or a claim leaning on a picture — or text over image fails AA at some pixel, or a photograph is upscaled past native and reads soft |
| **1** | A studio isolate, stock, or AI-generated person on the page; or a photograph carrying baked-in marketing text without a claims-register row; or `alt=""` across the board; or the first-screen image lazy-loaded |

### 10.9 What this changes in the brief, the register and the QA

| Where | What changes |
|---|---|
| `17` §5, the **Imagery** line of every brief | Becomes five declared fields, not a sentence: the lead file and its band (A/B/C); the frame ratio and `--focal` per viewport class; the treatment (T1–T4) with the measured worst-pixel contrast where text sits on the picture; the alt text and any required caption; and the declared fallback if the photograph is rejected (DD-31) |
| `17` §5, **Exemplars** | An imagery-led direction names MIT Admissions (the non-photographic route) or Equinox (exclusivity by restraint), per K0's shortlist |
| DD-08 | Reaffirmed and sharpened: the evidence for "no stock" is now licensing (K9-F19) and detection (K9-F6, K9-F7), not only taste. Add the corollary that a *real* photograph used for a thing it does not show fails for the same reason stock fails |
| DD-31 | The asset-dependency declaration gains a required field: whether the mock's photographs carry recognisable children's faces, and therefore whether K9-P11 is engaged |
| **New decision row proposed for `07`** | *Door imagery symmetry*: (a) both doors photographed, (b) neither, (c) each door decides. Recommendation (b) until the Anywhere photograph exists, then (a). Options and both models' recommendations per the register loop (`12-register-loop.md`) |
| **New question proposed for `03`** | *Media permissions*: for each child visible in the 23 usable photographs, is there a written, purpose-specific permission covering website and **paid-advertising** use, held by GT and withdrawable? Owner Nari with Crystal. This is a stop-and-ask item: it touches live marketing |
| `12-claims-register.md` | `georgetown-crowd.webp` carries a banner claim and a QR code in frame. Either crop them out or open a claims row for the banner wording before the file is used (REQ-022, DEL-018) |
| `1_spec/13` and the runner | Four new image tests at every matrix size: (1) no `<img>` renders wider than its intrinsic width; (2) every `<img>` has non-empty `alt` or is provably decorative; (3) every `<img>` has `width` and `height`; (4) exactly one image carries `fetchpriority="high"` and it does not carry `loading="lazy"`. All four are mechanical and all four currently fail on the mirror (K9-F46) |
| `1_spec/13`, contrast test | Extend the existing text-node contrast check so that a text node whose computed background includes an image is sampled across its bounding box and judged on the **worst** pixel, not on a token colour (F83, K9-F27) |
| `mockups/shared/ASSETS.md` | Add three columns it lacks and K9 measured: native pixel dimensions, maximum display width at DPR 2, and whether a recognisable child's face is in frame. Replace the weaker suggested alt strings with the 10.6 model |
| `mockups/shared/tokens.css` | No new colour tokens needed. The scrim is `--color-navy` at alpha; the duotone pair is `--color-navy` + `--color-bg`; the frame uses `--radius-md` and `--color-border` |

## 11. Fetches that failed, recorded rather than described from memory

| Target | Result |
|---|---|
| UCLA brand, photography and videography | TLS error: "unable to verify the first certificate" |
| NSPCC Learning, photography and sharing images | DNS: `ENOTFOUND learn.nspcc.org.uk` |
| UCDA, "Best Practices for Inclusive and Diverse Photography in Higher Education" | `ECONNREFUSED` |
| Cube Creative, private-school photography for enrollment | `ECONNREFUSED` |
| NN/g `/articles/photos-of-people/` | HTTP 404; the URL was inferred and does not exist |
| `developer.chrome.com/blog/sizes-auto` | HTTP 404; S37 used instead |
| Material Design 3 colour roles (for the `scrim` role) | Page returned title only, no content |
| `accessibility.digital.gov` | DNS failure |

## 12. Open questions

| # | Question | Why it could not be answered |
|---|---|---|
| Q-K9-1 | Does a documentary photograph of GT Anywhere learning exist anywhere — on the live sites, in Nari's drive, in a family's hands? | K9 may not load `gt.school` or `anywhere.gt.school`. `ASSETS.md` establishes only that the approved folder has none (R3). This is the substance of the E2 escalation and only Nari can close it |
| Q-K9-2 | What written permission exists for each child visible in the 23 usable photographs, and does it extend to paid advertising? | Not answerable from the repository. Owner Nari with Crystal. Until it is answered, prefer the four face-free files (K9-F54) and treat the rest as provisional |
| Q-K9-3 | Is there budget for one commissioned photography or illustration session? | CON-01 rules out an agency; it does not settle a single commission. David decides spend. The MIT precedent (K9-F32) is the argument to put, but no mock may assume the outcome (DD-31) |
| Q-K9-4 | Does FERPA reach GT School, and does TEFA participation change that? | A legal question. S18 states the federal rule for institutions receiving Department of Education funds; K9 will not assert whether a private school on a Texas ESA programme is inside it. Counsel, not research |
| Q-K9-5 | What are the true LCP times for these images in an Instagram or TikTok webview on cellular? | Needs the headless runner and network throttling (D-028), not a text fetch. The byte budgets in 10.7 are derived from S38's distributions, not from a GT measurement |
| Q-K9-6 | Would a parent read a captioned in-person photograph under an online label as honest, or as a hedge? | Option 2 in 10.5 is a design hypothesis. It is testable with five parents in ten minutes and is not testable from sources |
| Q-K9-7 | Which crops actually survive, visually? | Every crop judgment in 10.1 and 10.2 is arithmetic on native dimensions plus the descriptions in `ASSETS.md`. No image was rendered in a browser at a matrix size. The Imagery scores stay provisional until the `18` §3 capture protocol runs |
