# M5 One School, Two Campuses — rationale

| Field | Value |
|---|---|
| Folder | `0_plan/mockups/M5-one-school-two-campuses/` |
| Task | T-046 (`1_spec/03-landing-page-spec.md` section 12); serves REQ-010 to REQ-018, REQ-021, REQ-032, REQ-047, DD-21, DD-34 |
| Built by | Builder, Sonnet 5, one pass |
| Sources read | `0_plan/mockups/shared/BUILDER-BRIEF.md`, `0_plan/mockups/shared/copy.md` (re-read after its mid-build brand-continuity update, see Assets/Flagged slots), `1_spec/03-landing-page-spec.md` (full), `1_spec/04-design-system-spec.md` (full), `0_plan/05-landing-mockups-plan.md` sections 3, 3b, 3c, 4, 6, 6c, 9, 11, `0_plan/16-g05-decision-record.md`, `0_plan/mockups/shared/tokens.css`, `0_plan/mockups/shared/fonts.css`, `0_plan/mockups/shared/ASSETS.md`, `0_plan/mockups/shared/README.md`, `0_plan/07-design-decisions.md` (DD/MD/MN rows cited below), `0_plan/tools/check-mocks.py` (re-read after its mid-build R16 update), plus `M1-two-doors/`, `M2-the-institute/`, `M3-private-quiet/` and `M4-builders/`'s existing `index.html` to find the header/footer drift this mock is meant to reconcile |

## Direction

Lens order **L2 existing system > L1 objective > L3 mission > L4 elite** (`1_spec/03` section 10; `0_plan/05` section 4). Hypothesis: coherence itself is the message. Where M1 asks "can a parent choose fast," M5 asks "does this already look like the front door of the two sites it leads to, and could the two school sites hand their own header and footer to this same file without a redesign." The wager is that a single, disciplined application of one token set — used for the doors, the header, the footer and a new comparison device — reads as more trustworthy than any one mock's individual flourish.

Concretely: sections 0 (header), 2 (compare anchor), 4 (proof strip), 5 (steps), 6 (secondary CTAs), 7 (current families) and 8 (footer) are **deliberately not redesigned** relative to M1 — same spacing rhythm (`--space-*` scale), same alternating `--color-bg`/`--color-surface` background pattern, same table treatment, same motion budget. That sameness is the point: if M5 invented a new rhythm for these sections it would be arguing against its own thesis. The only two things this mock does that M1–M4 do not: (1) the **campus switcher** replaces the plain door list as section 1's centerpiece — the two entries carry the exact wording "In person: Georgetown Campus" / "Online: GT Anywhere" as their own tappable heading, then unfold into the same photo/line/CTA content M1 established; (2) the **schedule visual** ("A day at GT," DD-34, REQ-047) gives section 3 a new sub-component — a CSS bar-and-legend per school, paired with a real, visually-hidden `<table>` for screen readers — using only the times `copy.md` allows.

A second, unplanned point of coherence surfaced while reading the other four mocks before writing this one: their header/footer markup already disagrees in small ways — M1 and M4 use flat `<a>` siblings with no wrapping list inside the utility/footer nav; M2 and M3 already wrap them in `<nav><ul><li>`. Class names vary too (`.contact` in M2 vs `.footer-contact` in M1/M3/M4). Since M5's own job is to be the header and footer the two school sites (and, implicitly, the other four mocks) could adopt unchanged, it resolves this drift by picking the `nav > ul > li > a` form — already the majority pattern (M2, M3) and the more scalable one for a future menu item — as canonical, and documents the choice here rather than silently introducing a fifth variant.

## h1

The **umbrella sentence** is the `<h1>` ("GT School is a selective school for gifted and talented children, in person at our Georgetown, Texas campus or online from anywhere."), matching M1, M2, M3 and M4 — all four independently made the same choice, which is itself a small piece of evidence for it being correct per `1_spec/03` section 5's "one h1: the umbrella sentence or the lockup, decided per mock and recorded." Putting the decodable, orienting sentence in the one h1 slot serves REQ-021 (decode "GT") and DD-33 directly, and costs nothing against L2 (the header's own lockup is now the real GT School mark — see Assets — so the brand name is present twice: once as a wordmark image the eye reads first, once as the literal words a screen reader announces as the page's one heading).

## Decisions applied

| Id | Decision | How applied in M5 |
|---|---|---|
| DD-01 | Typography pairing | Literata (serif: h1, panel lines, schedule legend `dd`, table cells) + Inter Tight (sans: nav, switch-label, CTAs, schedule `dt` eyebrows) from `tokens.css`; Inconsolata (`--font-mono`) on the proof-strip footnote, matching M1 |
| DD-02 | Palette and hero tone | Light hero, existing merged palette only; `--color-navy` and `--color-surface-alt` (both flagged "unresolved" in `tokens.css`'s own comments) are not used anywhere |
| DD-03 | Hero structure | (a): one umbrella sentence, then the two doors — realized here as the campus switcher |
| DD-04 | In-person vs. virtual cue system | Label ("In person"/"Online") + inline SVG icon (pin/signal, identical path data to M1's, `aria-hidden`) + photo, all three per panel; the same two tint tokens (`--color-georgetown-tint`, `--color-anywhere-tint`) do double duty as the panel-photo backdrop **and** the schedule bar's "structured time" segment color — one visual vocabulary for "this is Georgetown's" / "this is Anywhere's" wherever it recurs |
| DD-05 | CTA labels and placement | Two CTAs per school now exist in section 1: the switch-label ("In person: Georgetown Campus," this mock's own wording, doubling as the first, fold-critical CTA) and `copy.md`'s exact fixed string ("Explore the Georgetown campus →") a few lines below it inside the same panel; both link to the same destination with the same `data-event`/`data-school`/`data-placement="first_screen"`. The exact fixed string is repeated again after the comparison table with `data-placement="after_comparison"` |
| DD-06 | Comparison block format | Real `<table>`, shared-then-different row order exactly as `copy.md` section 3, with the new schedule-visual sub-block placed just above it |
| DD-08 | Imagery policy | Existing site photographs only for the two door cues (see Assets); no stock |
| DD-10 | Exclusivity cues and limits | "Admissions" language in section 5; no countdowns, no wealth cues |
| DD-11 | Brand lockup | **Mid-build correction applied.** Originally built with a text Literata wordmark matching M1–M3's own choice; the coordinator's brand-continuity message and `copy.md`'s updated Section 0 row ("never a text wordmark") arrived before this file was finalized, so the lockup is the real `gt-school-logo-h.svg` image, native size (139×32), linking to `#top`. Holly's unifying element (Q-001) is still pending and, per the same updated row, "may later be added beside it" — not instead of it |
| DD-12 | Navigation on the landing | Minimal header: lockup, "Current families," "Contact admissions"; the nav is now `<nav><ul><li>`, reconciling the M1/M4-vs-M2/M3 drift described in Direction |
| DD-13 | Current-families route placement | Header utility link + footer link + footer logo; the phone number appears only in the footer, never above the fold |
| DD-14 | Mobile pattern | 390px designed first (see Self-check); switcher panels stack one column on mobile, two columns at 768px; no sticky CTA bar |
| DD-17 | Trust signals | No Cognia mark, no accreditation claim anywhere (G0.5 decision 3); admissions contact and Georgetown, Texas location in the footer |
| DD-19 | Style envelope | Type families and the full merged palette (bg, surface, text, text-muted, accent, border, focus, both school tints) are used; every raw, non-token CSS value is listed in Departures; `--color-navy`/`--color-surface-alt` untouched |
| DD-20 | Orientation before choice | One umbrella sentence sits above the switcher |
| DD-21 | Scalable choice component | Two real `<ul>`s now demonstrate this, not one: `.campus-switcher` (`repeat(auto-fit, minmax(300px,1fr))`, holds 3–5 panels without a markup change) and `.doors-repeat` (flex-wrap, same property) |
| DD-22 | Content allocation | Only what is true of both schools, the differences, and the routes; nothing previews a school site's own content in depth |
| DD-23 | CTA repetition and reassurance | Switcher CTA at the very top, a "Not sure? Compare the two" anchor, doors repeated as text links after the table |
| DD-25 | Direct-to-application | "Begin application" links per school with `?school=` in the steps section |
| DD-26 | Visual parity between doors | Identical panel markup, sizing and treatment for both schools; stable order (Georgetown, then Anywhere) |
| DD-27 | Nomenclature and marks | "Georgetown Campus" and "GT Anywhere" exactly (9 and 13 occurrences respectively, see Self-check); Guides, never Advisors, as page text |
| DD-29 | Type scale and density | Every section carries at least one real fact; the schedule visual is itself one such fact-bearing device (drawn from `copy.md`'s own "The day" row), not decoration |
| DD-30 | Jargon policy | "TimeBack learning platform," "MAP assessments," "TEFA" all appear with the plain-language context `copy.md` already gives them, unreworded |
| DD-31 | Asset dependency declaration | `0_plan/05` section 4's mock matrix lists M5's asset dependency as "None" — this mock's differentiator (the token system, the switcher, the schedule visual) does not hinge on any one photo. See Assets for the fallback if either chosen photo is rejected |
| DD-32 | Current families as support intent | Header link, footer link and footer logo, all to `community.gt.school` or, for the logos, to each school's own site |
| DD-33 | Decoding "GT" | The h1 spells out "gifted and talented" |
| DD-34 | The day as the comparison device | **This mock's assigned differentiator (REQ-047).** A CSS bar-and-legend "A day at GT" per school, `aria-hidden`, paired with a real `<table class="visually-hidden">` for screen readers (caption, `scope="col"`/`scope="row"`), using only "9," "noon" and the word "three" — the only times `copy.md` allows. The main comparison table keeps its own unchanged "The day" row too, for parity with M1–M4 |
| DD-36 | Twice-exceptional readability | Literata body copy; strict heading order (`h1` → `h2` → `h3`, including one visually-hidden `h2` labelling the switcher) with no skipped levels; reduced motion removes every transition |
| MD-01 | Primary conversion goal | Route only, plus the per-school "Begin application" link; no lead form anywhere (rule 1) |
| MD-02 | Secondary CTA | FAQ, "Talk to admissions," campus tour, virtual info session — all four present |
| MD-04 | Value-proposition hierarchy | Umbrella promise → campus switcher → comparison (schedule visual first, then the table) → proof strip, in that order |
| MD-06 | True exclusivity signals | Admissions bar stated plainly ("90th percentile and above"); no countdowns or fake scarcity |
| MD-10 | Wrong-school prevention | "In person: Georgetown Campus" / "Online: GT Anywhere" wording appears twice per school: once as the switch-label, once implicitly in the panel line's place/format description |
| MD-11 | Contact strategy | Admissions contact in header nav; phone only in the footer |
| MD-13 | Tuition disclosure | Comparison table: Georgetown "Tuition on request," Anywhere "$10,400 a year... TEFA voucher," identical to M1 |
| MD-17 | Alpha affiliation prominence | One line, once, small, under the h1 |
| MD-25 | Access messaging vs. exclusivity | Admissions bar and TEFA module both present on the same page |
| MD-26 | The TEFA module | Shown to everyone (D-015 option c), inside the comparison section, exact `copy.md` wording |
| MN-01–MN-15 | Motion | See Motion spec below |
| SE-13 | Preview/staging indexation | `<meta name="robots" content="noindex, nofollow">` present |
| AN-04 | Event taxonomy | Every interactive element carries its `data-event` (`data-school`/`data-placement`/`data-type`/`data-region-source`) attribute; verified counts in Self-check |
| REQ-032, DEL-004 | The design system deliverable itself | The header and footer are marked as `@partial` blocks (see markup); every color/font/size/space/radius/shadow/duration in `styles.css` is a token; the header/footer markup drift across M1–M4 is named and resolved (see Direction) |
| REQ-047 | "A day at GT" schedule visual, usable as the comparison device | The schedule visual described under DD-34 |

## Motion spec

| What animates | Trigger | Duration token | Easing token | Reduced-motion behavior |
|---|---|---|---|---|
| Link/CTA text color (utility nav, footer nav, compare anchor, TEFA link, apply links, secondary CTAs, current-families link, switch-label, panel CTA, repeated-door links) | Hover, focus-visible | `--duration-fast` (100ms) | `--ease-standard` | `prefers-reduced-motion: reduce` sets `transition: none !important` on every element; the color and underline still change, just instantly |
| Underline appears/disappears on the same links | Hover, focus-visible | n/a (`text-decoration` toggles alongside the color transition, no separate timing) | n/a | Same — instant |

Nothing else animates. The campus switcher and the schedule visual are both fully static: no JavaScript, no `:hover` beyond the plain link-color rule above, and MN-05's "instant, space reserved" state-transition guidance is satisfied trivially because there is no client-side state to transition — both panels, and both schedule columns, are simply always in the DOM. The schedule bar's proportions are a one-time CSS layout, never recomputed or animated. The skip link's on-focus reveal is an instant `top` jump with no transition property at all. The h1 and the two panel photographs (the LCP candidates) carry no transition, transform or animation of any kind, at rest or on hover; the header and footer logo images likewise carry no hover treatment.

## Assets

| Slot | File | Source | Alt text used | Consent | Fallback |
|---|---|---|---|---|---|
| Header lockup | `gt-school-logo-h.svg` (native 139×32) | `www.gt.school` Webflow CDN (mirrored) | "GT School" | Existing site brand mark; not a photo, no AD-11 consent question | None — per the brand-continuity instruction this is now load-bearing: "never a text wordmark." If the file were ever unavailable the correct response is to source the real asset, not substitute text |
| Georgetown panel photo | `georgetown-guide.webp` (1440×960, ~118 KB) | Mirrored `www.gt.school` assets | "A Guide teaches a lesson at the whiteboard while students work at their desks on the Georgetown Campus" | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Drop the photo; keep the switch-label icon, "In person" cue and CTA on the existing `--color-georgetown-tint` panel — DD-31 names this mock's asset dependency as "None" precisely because the layout does not need the photo to make its case |
| Anywhere panel photo | `anywhere-academics.webp` (1440×960, ~170 KB) | Mirrored `anywhere.gt.school` assets | "A GT Anywhere student helps a younger classmate write at a desk during an in-person intensives weekend" | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Same fallback, on `--color-anywhere-tint` |
| Footer logo, Georgetown | `gt-school-logo-h.svg`, rendered 104×24 (native 139×32, same aspect ratio) | Same file as the header lockup | "Georgetown Campus" | Existing site brand mark | None, same reasoning as the header |
| Footer logo, Anywhere | `gt-anywhere-logo-h.svg`, rendered 126×24 (native 252×48, same aspect ratio) | `www.gt.school` Webflow CDN (mirrored) | "GT Anywhere" | Existing site brand mark | None, same reasoning |
| Open Graph image (not shown on-page) | `georgetown-campus.webp` | Mirrored `www.gt.school` assets | n/a (meta only) | Fixed by `copy.md`'s Head table | n/a |

Neither door photo appears in `ASSETS.md`'s "avoid" list (`anywhere-student-home.webp`, `georgetown-kid-writing.webp`) or in any of its three named repeated-coverage clusters (the ribbon-cutting pair; the four-photo standing-desk/laptop cluster; the `anywhere-academics-left`/`georgetown-support` adult-child pair — note `anywhere-academics.webp`, used here, is a **different file** from `anywhere-academics-left.webp`, the one in that cluster). Both are deliberately quieter, less staged-feeling choices than M1's own picks (`georgetown-science.webp`, `anywhere-austin-intensives.webp`) — consistent with M5's "least dramatic by design" hypothesis — while still being two of `ASSETS.md`'s sharp, candid, real-event photos. One honest note, matching M1's own disclosure: `anywhere-academics.webp` documents an **in-person** intensives-weekend moment, not remote at-home learning, because no non-"avoid" photo in the shared folder shows solo at-home learning. The "Online" distinction is carried by the switch-label, the icon and the panel line's own text ("from wherever you live"), not by the photo alone.

Icons (in-person pin, online signal) are original inline SVG line-drawings with the identical path data M1 uses — not photographs, not a third-party icon font, no external request, `currentColor` fill so they track the text tokens, `aria-hidden="true"` since the adjacent visible label text already names the cue.

The header logo's HTML `width`/`height` (139×32) are its true intrinsic pixels (reserving that aspect ratio to prevent layout shift); `.lockup img { height: 2rem; width: auto; }` in `styles.css` then renders it at 32px tall by default (2rem × 16px root) and scales proportionally if the visitor's root font size is larger, without ever distorting the mark, per "no recoloring or filters, maintain colors, fonts and logos."

## Departures

No color, font, spacing, radius, shadow or motion-duration value in `styles.css` falls outside `tokens.css` (`grep -c "#" styles.css` is 0). The raw values that remain, and why `tokens.css` has nothing to offer instead:

| Raw value | Where | Why |
|---|---|---|
| `768px` in `@media (min-width: 768px)` (six places: header untouched, switcher grid, panel-media/panel-row, schedule grid, facts grid) | Mobile→desktop switch | CSS cannot reference a custom property inside a media-feature value; `768px` is `1_spec/03` section 4's own "768px: doors side by side" checkpoint and equals `--container-narrow`'s value (48rem) |
| `1px`/`2px` border and outline widths; `1.5` SVG `stroke-width`; `0.04em`/`0.06em` letter-spacing (TEFA heading, schedule `dt` eyebrows); `font-weight: 500/600/700` | Focus outline, skip-link border, table/schedule-bar hairlines, icon strokes, all headings and emphasis text, the switch-label's own weight | `tokens.css` defines no border-width, stroke-width, letter-spacing or font-weight tokens; these are the smallest reasonable values for their job, matching M1's own documented departures line for line |
| `flex: 1` / `flex: 3` on the schedule bar's two segments (Georgetown: 1/1, an even split; Anywhere: 1/3, structured time visibly the minority) | `.schedule-seg`, `.schedule-seg--minor`, `.schedule-seg--major` | Not a number on the page (it never becomes visible text, so R5's whitelist does not apply to it) and not a claim: no register row states how long a Georgetown afternoon lasts or what fraction of a day GT Anywhere's three hours occupies, so the bar cannot be drawn to a true scale. Georgetown's two named blocks (a defined 9-to-noon morning, an unspecified-length afternoon) are shown as an even split because asserting anything else would imply a duration nobody stated; Anywhere's three-hours-of-a-day is honestly the minority, so its bar is drawn narrow against a wide "the rest of the day is yours" segment. This is a qualitative shape, not a hidden number |
| `2rem`/`1.5rem` logo heights (header/footer) | `.lockup img`, `.footer-logos img` | `tokens.css` has no logotype-size token; both values were chosen to land inside the coordinator's "about 32 to 40px tall" instruction for the header (2rem = 32px at the default root size) while giving the footer a visibly smaller, secondary presence (1.5rem = 24px), and both preserve each SVG's native aspect ratio (`width: auto`) so neither mark is stretched |

Two design choices are not "departures" in the DD-19 sense (no new color, typeface or dark surface was introduced) but are worth naming as deliberate, not accidental: (1) the switch-label and the panel CTA link to the identical destination with the identical `data-event` payload — this is intentional redundancy, not a duplication bug, discussed in Direction and DD-05; (2) `nav > ul > li > a` was chosen over M1/M4's flat `<a>` siblings for the header and footer partials, discussed in Direction and DD-12.

One inherited content note, not a departure this mock introduced and not something a builder pass has the authority to silently correct: `copy.md` Section 1's Door 1 line reads "**Two hours** of mastery academics each morning," while Section 3's "The day" row (reused verbatim in both the schedule visual and the main comparison table) reads "Mornings **from 9 to noon**" — three hours. Both are fixed, verbatim slots and both are reproduced exactly as written; M1–M4 carry the identical pair of sentences without comment. M5 makes the discrepancy more visible than the other four mocks do, because the schedule visual gives "9 to noon" its own dedicated legend line right next to the panel that still says "Two hours" — worth Nari's or Crystal's attention when Q-007/Q-008 close, not something this pass reconciled on its own.

## Flagged slots

| Slot | Q id | What ships | Default shown |
|---|---|---|---|
| Lockup | Q-001 | The real `gt-school-logo-h.svg` mark (per the mid-build brand-continuity instruction), not yet Holly's unifying element, which the updated `copy.md` says "may later be added beside it" | Real logo image, linked to `#top` |
| Current families link | Q-002 | `https://community.gt.school`, unconfirmed | Shown as final copy, no visible "(confirm)" text on the page |
| Application steps | Q-007 | Four generic steps, identical for both schools | As given in `copy.md` |
| Comparison "in-person time" logistics | Q-017 | "Four intensive weekends a year in Georgetown," no further logistics | As given in `copy.md` |
| Proof figure | Q-019 | No figure of any kind; the proof strip carries four register-backed facts instead | Withheld per G0.5 decision 2 |
| Accreditation | Q-033 | No accreditation statement or mark anywhere | Withheld per G0.5 decision 3 |
| TEFA window/owner/expiry | Q-021 | Module shown to everyone with the fixed `copy.md` wording; no date window stated | As given in `copy.md` |
| "Talk to admissions" / "Book a campus tour" | MD-02, REQ-002 | Both point to `https://www.gt.school/contact` (no HubSpot meeting link, no working `/book-a-tour`) | As given in `copy.md` |
| "Join a virtual info session" | — | Points to the Anywhere homepage; no dedicated session-registration link exists yet | As given in `copy.md` |

Original section headings not sourced from `copy.md`, disclosed rather than presented as sourced copy: "Compare the two" and "More ways to connect" (both reused verbatim from M1's own precedent), and, new to this mock, "A day at GT" (this one **is** sourced — it is the exact component name `1_spec/04-design-system-spec.md` section 3 gives the "Schedule visual" row) plus its four short legend labels "Morning," "Afternoon," "Structured time" and "Open time," which are original wayfinding words I chose so each `<dd>` could stay a complete, unedited sentence lifted from `copy.md`'s "The day" row rather than a paraphrase. The visually-hidden heading "Choose how to attend" over the switcher is likewise original, present only so a screen-reader user gets an announced section title before the list; it carries no claim or figure.

## Parent questions (`0_plan/05-landing-mockups-plan.md` section 6c, PQ-01 to PQ-14)

| # | Question a parent arrives with | Answered by M5? | Where |
|---|---|---|---|
| PQ-01 | What is GT School? | Yes | The h1 |
| PQ-02 | Is it for my child? | Yes | H1 ("gifted and talented children"); the 90th-percentile bar is stated later on the same page (proof strip, comparison "Admissions" row, application steps line), not in the first screen |
| PQ-03 | In person or online: what are my options? | Yes | Section 1, the campus switcher: two panels, each with an explicit "In person"/"Online" label, place name, and one-line description |
| PQ-04 | Where is the campus? | Yes | Section 1 panel line ("our Georgetown, Texas campus"); Section 3 "Where and how" row ("Georgetown, Texas, north of Austin") |
| PQ-05 | What does a day look like? | **Yes, and this is where M5 answers it best of the five mocks** | Section 3's dedicated "A day at GT" schedule visual (bar + legend, plus the hidden accessible table) — the component this mock was built to carry (DD-34, REQ-047) — in addition to the standard "The day" row every mock has |
| PQ-06 | What does it cost, and can TEFA help? | Yes | Section 3 "Tuition and access" row and the TEFA module |
| PQ-07 | How do I apply? | Yes | Section 5, "How to apply," plus direct `apply.gt.school?school=` links |
| PQ-08 | Who teaches my child? | Yes | Section 3 "Guides" row; proof strip ("Guides, not lecturers") |
| PQ-09 | How much in-person time does GT Anywhere have? | Yes | Section 3 "In-person time" row ("Four intensive weekends a year"); the schedule visual's "the rest of the day is yours" framing reinforces how little of an Anywhere day is structured screen time |
| PQ-10 | What results does the school get, and is it accredited? | **No, by design** | G0.5 decisions 2 and 3 withhold both an outcomes figure and any accreditation claim from every new surface until Q-019/Q-033 close. Like M1, M5 has no dedicated proof page to defer to; the nearest one-click destination is "Read the FAQ" (`anywhere.gt.school/academics`), which does not itself address accreditation. A real, disclosed gap, not an oversight |
| PQ-11 | What happens after 8th grade? | Yes, deferred | Section 3 row, explicitly deferred to admissions (Q-013) |
| PQ-12 | I am a current family, where do I go? | Yes | Header "Current families" link; Section 7 |
| PQ-13 | I am not ready to apply, what can I do? | Yes | Section 6, "More ways to connect" (FAQ, talk to admissions, tour, info session) |
| PQ-14 | Is GT School part of Alpha School? | Yes | Section 1 provenance line, under the h1 |

## Self-check

All numbers below were run against the actual files in this folder, not estimated.

| Rule | Grep / method | Result |
|---|---|---|
| 1. No form/input/submit | `grep -c "<form" index.html` | `0` |
| 2. Exactly one script (JSON-LD) | `grep -c "<script" index.html` | `1` |
| 3. No external requests beyond `../shared/*` and `/assets` fonts | `grep -noE 'https?://[^"'"'"' ]*' index.html \| sort -u` | Every match resolves to `schema.org` (inside the JSON-LD, not a request), `gt.school`, `www.gt.school/...`, `anywhere.gt.school/...`, `apply.gt.school/...`, or `community.gt.school` |
| 4. No lorem/TBD/placeholder text | Read as a parent; checker's own regex | Clean (checker: `PASS R4 no placeholder text`) |
| 5. Only the approved numbers | Python re-implementation of the checker's own tag-stripping regex, then `Counter` | `{'8': 4, '9': 3, '90': 3, '10,400': 1, '2026': 1, '09': 1, '10': 1, '512': 1, '270': 1, '9481': 1}` — every group is on `check-mocks.py`'s `ALLOWED_NUMS` whitelist. Source: 90 (proof strip, comparison, steps line), 10,400 ($10,400), 9 (schedule visual "9 to noon" ×2, comparison "The day" row), 8 ("8th grade" ×4: facts block, footer, comparison row, proof strip), 512/270/9481 (footer phone), 2026/09/10 (footnote date) |
| 6. "Guides," never "advisor" as page text | `grep -n -i "advis" index.html` | One match: `data-type="advisor"`, the attribute value the brief explicitly allows; visible text reads "Talk to admissions" |
| 7. Full school names | Python count on tag-stripped text | `Georgetown Campus` × 9, `GT Anywhere` × 13 |
| 8. Both door CTAs above the fold at 390×844 | CSS-math budget (no screenshot — browser verification is a separate step; Playwright tools were not used, per the brief) | Header ≈ 65px (32px logo + 2×16px padding + 1px border) + hero top padding 24px + h1 at `--text-xl`/Literata, 132 characters/22 words wrapping to an estimated 5–6 lines ≈ 138–166px + provenance block ≈ 23px + margin to switcher 24px + panel 1 (padding 32px + 44px switch-label + 8px row margin + 96px photo row) = 180px + inter-panel gap 16px + panel 2 = 180px. Running total ≈ **648–676px**, roughly 170–200px inside the 844px budget — comfortably fits, using the conservative (wider) line-wrap estimate. This covers both the switch-label CTA and each panel's own "Explore…" CTA text, since both sit inside that same 180px-per-panel figure |
| 9. Links only to the five destinations + anchors | `grep -oE 'href="[^"]*"' index.html \| sort -u` | Seventeen unique hrefs: `#compare`, `#main`, `#top`, the two local stylesheets, and the five domains (`gt.school`, `www.gt.school[...]`, `anywhere.gt.school[...]`, `apply.gt.school[...]`, `community.gt.school`) — nothing else |
| 10. Motion budget | `grep -n "transition" styles.css` | Two hits: the base `a{}` rule (`color var(--duration-fast) var(--ease-standard)`) and the reduced-motion override (`transition: none !important`). No other property transitions anywhere |
| 11. Accessibility | Manual pass | `<html lang="en">`; skip link to `#main`; `header`/`nav` (×2)/`main`/`footer` landmarks; exactly one `h1` plus one visually-hidden `h2` before the switcher; `a:focus-visible` gets a 2px `--color-focus` outline; all 5 images have descriptive (or, for the two logos, naming) alt text; switch-label and panel-cta both have an explicit `min-height: 44px`; both tables have a `<caption>` and `scope="col"`/`scope="row"`; the schedule visual is `aria-hidden` with its table as the screen-reader equivalent, `aria-labelledby` pointing at the same visible `<h3>` so no heading is lost to assistive tech; no text sits over an un-backed photo — panel text lives in `.panel-body`, beside the image, never on top of it |
| 12. Head block | Viewed the file | Title, meta description, `robots noindex,nofollow`, canonical, Open Graph (title/description/image/type), and the JSON-LD `EducationalOrganization` with two `subOrganization` entries — all match `copy.md`'s Head table verbatim |
| 13. Images | `grep -oE '<img[^>]*>'` plus the checker | 5 `<img>` tags, all with real `width`/`height` (photo dimensions confirmed with `sips`) and `alt`; the 2 `.webp` door photos are eager (no `loading` attribute, `decoding="async"`) and the 3 SVG logos are exempt from the eager-image budget per the checker's own R13 note (header logo eager since it is first-screen; both footer logos carry `loading="lazy"`). `index.html` is 17,142 bytes, `styles.css` is 12,251 bytes after the panel-cta tap-target fix — both trivially under budget, and shared images are excluded from the page-weight rule entirely |
| 14. Tokens only | `grep -c "#" styles.css` | `0` — no hex color anywhere in the stylesheet |
| 15. Scalable choice component | Markup | Two `<ul>`s on `auto-fit`/flex-wrap layouts (`.campus-switcher`, `.doors-repeat`); a third `<li>` in either requires no CSS change |
| 16. Real logos, header and footer | `grep -c "gt-school-logo-h.svg\|gt-anywhere-logo-h.svg"` and the checker's own new rule | Both filenames present; checker: `PASS R16 real logos in header and footer` |

Full mechanical run: **`python3 0_plan/tools/check-mocks.py 0_plan/mockups/M5-one-school-two-campuses --all` → 32 pass, 0 fail** (after this file was added; the run before RATIONALE.md existed showed 31 pass, 1 fail — only the missing-file check, since every content/markup/token/motion/asset rule already passed on the first build). Also verified: every element `id` in the document is unique, every `aria-labelledby` reference resolves to a real `id`, and `http://127.0.0.1:8213/0_plan/mockups/M5-one-school-two-campuses/index.html` returns `200`.

## Known trade-off (from the brief's direction table)

"Least dramatic by design." M5 has no full-bleed hero photo (M4), no editorial statement-plus-figures (M2), no large quiet display type (M3) and no split-hero drama (M1) — the campus switcher is a bordered card list and the schedule visual is a thin CSS bar. If Nari's read is that the winning direction needs a stronger opening emotional beat, this mock will not supply it; its argument is entirely that the system underneath — one header, one footer, one token set, one new comparison device — is itself the deliverable worth shipping (DEL-004), and that a parent who lands here should feel like they are already on "the" GT School site rather than a fifth different experiment.
