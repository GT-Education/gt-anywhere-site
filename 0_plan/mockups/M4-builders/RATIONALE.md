# RATIONALE — M4 Builders

## Direction

Lens order L3 (mission) > L1 (objective) > L2 (existing system) > L4 (elite). The hypothesis: mission through
student work beats mission through statistics (M2's lens) — a parent believes GT School is serious because they
can see what the children actually do, not because they read a proof figure. The first screen is a full-bleed
photograph of Georgetown Campus students running a real science experiment, with the umbrella sentence and
provenance line set on a solid dark panel over the bottom of the photo, kept compact so the two doors — framed
as "Two programs of one school" — still clear the fold at 390×844. Below the doors, a "What students do" strip
of four more real photos carries the mission argument further before the page pivots to the rational L1 case
(compare anchor, comparison table, proof strip, application steps). L2 (continuity with the existing token set)
and L4 (elite/selectivity) are present but deliberately quiet — the selectivity language lives in the comparison
table and proof strip exactly as it does in every other mock, never foregrounded.

## h1

The umbrella sentence ("GT School is a selective school for gifted and talented children, in person at our
Georgetown, Texas campus or online from anywhere.") is the `<h1>`, set inside the hero photo's overlay panel.
It is the only heading that decodes "gifted and talented" and names both ways to attend (DD-20, DD-33, REQ-021),
so it carries the h1 role in this mock the same way it does in M1 and M3, rather than a lockup or a kicker line.

## Decisions applied

| Id | How it is applied in this mock |
|---|---|
| DD-04 | Each door: uppercase text label ("In person" / "Online"), a small decorative CSS icon (dot / square, `aria-hidden`), and a real photo. Color (the tint backgrounds) is secondary, never the only cue |
| DD-05 | "Explore the Georgetown campus →" / "Explore GT Anywhere →" on the first screen and again after the comparison; "Begin application: <school>" as the separate, later apply step |
| DD-08 / T-045 | No stock. Every photo is an existing, published GT photo from `shared/img/`; none of the two studio-isolated photos (`anywhere-student-home.webp`, `georgetown-kid-writing.webp`) are used |
| DD-10 / MD-25 | No wealth cues; the 90th-percentile bar and TEFA coverage both appear in the comparison table and proof strip, stated plainly, not dramatized |
| DD-13 | No phone number in the header; only "Current families" and "Contact admissions" |
| DD-14 | Doors stack Georgetown-then-Anywhere at mobile, no sticky CTA bar, mobile designed first |
| DD-19 | Type families and the merged palette are fixed; layout (full-bleed photo, photo strip) is this mock's free expression. See Departures below |
| DD-20 / DD-33 | Umbrella sentence precedes the doors, spells out "gifted and talented," and sits above the fold with the photo |
| DD-21 | The doors are a real `<ul class="door-list">` of two `<li>`, laid out with flexbox so a third or fourth entry would wrap/flow, not break the split |
| DD-23 | "Not sure which is right for your family? Compare the two." anchors to `#compare`; the same door list repeats immediately after the comparison table with `data-placement="after_comparison"` |
| DD-25 | Both apply links carry `?school=georgetown` / `?school=anywhere` |
| DD-26 | Both doors get identical card treatment, padding, and CTA styling — equal visual weight, stable order |
| DD-27 | "Georgetown Campus" and "GT Anywhere" in full everywhere; Guides, never Advisors, in visible text |
| DD-31 | Declared in Assets below: which photos, why, and the typographic fallback if any is rejected |
| DD-36 | Body copy in Literata; motion is hover-only and fully removed under `prefers-reduced-motion` |
| MD-04 | Order is umbrella promise → two doors → what-students-do strip → proof, never proof first |
| MD-13 / REQ-026 | Tuition and access row: Georgetown "Tuition on request. Ask admissions."; Anywhere the exact $10,400/TEFA sentence from `copy.md` |
| MD-17 | The provenance line appears exactly once, in the hero panel, in a smaller weight than the h1 |
| REQ-011 / rule 8 | Above the two door CTAs at 390×844: header, hero photo + h1 + provenance (this mock's compact added element), nothing else |
| REQ-012 | Redundant format+location cues (label, icon, photo, tint) so the choice does not depend on reading the photo |
| REQ-017 | "Current families" in the header nav; general phone number only in the footer, never above the fold |
| REQ-018 | Full school names in every door, table header, and apply link |
| REQ-070 | No `<form>` anywhere; both apply links carry the `school=` parameter |

## Motion spec

| What animates | Trigger | Duration token | Easing token | Reduced-motion behavior |
|---|---|---|---|---|
| Underline reveal (`::after`, `transform: scaleX()`) under every `.link-underline` (nav, compare anchor, TEFA link, secondary CTAs, families link, footer links) | `:hover`, `:focus-visible` | `--duration-fast` (100ms) | `--ease-standard` | `transition: none` under `prefers-reduced-motion: reduce`; the underline still appears on hover/focus, just without the reveal motion |
| Nothing else. Door-card and button background/text-decoration changes on hover/focus are plain (non-transitioned) property swaps, not animated motion. The hero photo and the `h1` have no transition or animation of any kind, at rest or on any state |

No scroll reveals, no lifts, no signature animation. Transform and opacity are the only properties ever
transitioned; both duration and easing come from `tokens.css`.

## Assets

All photos are existing, published GT photos from `0_plan/mockups/shared/img/`, cross-checked against
`ASSETS.md`'s findings and the coordinator's follow-up (no studio-isolated photos, no more than one photo per
overlapping-session cluster, no legible third-party branding).

| Use | File | Alt text | Notes |
|---|---|---|---|
| Hero (first screen) | `georgetown-science.webp` | "Georgetown Campus students in lab coats run a science experiment with beakers and colored bowls." | 1440×1208, ASSETS.md's own "strongest hero candidate" pick for "experimenting"; sharp, clear faces, single unambiguous activity |
| Georgetown door photo | `georgetown-guide.webp` | "A Guide teaches a lesson at the whiteboard in a Georgetown Campus classroom." | 1440×960; a different classroom moment from the hero so the two aren't the same shot twice |
| GT Anywhere door photo | `anywhere-austin-intensives.webp` | "A GT Anywhere student records in a podcast studio during an in-person intensive weekend." | 1080×1163; the corrected `copy.md` cue-set row's first-listed option for this door |
| Strip 1 | `georgetown-dscf1931.webp` | "A close-up of a student's hands solving a fraction problem with a marker." | 900×675; caption: "Working through a problem by hand" |
| Strip 2 | `georgetown-student-writing.webp` | "A student bends over a table, writing intently with a marker." | 1440×960; caption: "Writing intently at a table" |
| Strip 3 | `gtschool-3993.webp` | "Two students lean on a counter talking, with tablets nearby." | 1080×720; caption: "Talking together at a shared counter" |
| Strip 4 | `anywhere-academics.webp` | "A student helps a younger classmate write at a desk." | 1440×960; caption: "Helping a younger classmate write" |
| Head only (not rendered as visible content) | `georgetown-campus.webp` | n/a (`og:image` meta only) | Fixed by `copy.md`'s Head table for every mock, regardless of hero choice |
| Logo | `gt-school-logo-h.svg` | "GT School" | Placeholder wordmark until Holly's element (Q-001) |

Consent status for every photograph: published by GT on its own site; consent to be confirmed by Nari (AD-11).

Deliberately avoided, per `ASSETS.md` and the coordinator's message: `anywhere-student-home.webp` and
`georgetown-kid-writing.webp` (studio-isolated, read as stock); `georgetown-crowd.webp` (legible marketing
banner and QR code); more than one of `anywhere-intensives-2.webp` / `anywhere-section.webp` /
`georgetown-3504.webp` / `georgetown-presenting.webp` (one classroom session, used zero times here); both
`anywhere-academics-left.webp` and `georgetown-support.webp` (same adult/child pair); both `georgetown-campus.webp`
(og:image only) and `anywhere-georgetown-visit.webp` (same ribbon-cutting, not used).

**Fallback (DD-31).** If Nari rejects any photo, the typographic fallback: replace the hero photo with a
`--color-georgetown-tint` panel carrying the umbrella sentence in large Literata plus an Inconsolata kicker
("Two programs of one school"), matching M2's register treatment; replace each strip photo with a bordered
text tile in Inconsolata naming only the observed action ("Mixing a solution," "Solving a fraction problem,"
"Talking through their work," "Helping a classmate write") with no photo at all. Door photos would drop to
icon + label + tint only, which DD-04 already allows ("photographs optional").

## Departures

None from `tokens.css`'s color, font, spacing, radius, shadow, or duration values — `grep '#' styles.css`
returns nothing (see Self-check). Two notes, not new departures of my own:

- `--color-anywhere-tint` is used as the GT Anywhere door's secondary background cue. This token already carries
  its own flag inside `tokens.css` ("DEPARTURE flagged for G1... neither site has it today"); using it is
  consuming an existing S3 decision, not introducing a new one, but it is surfaced here for visibility.
- The hero's dark overlay panel uses `--color-navy`'s sibling core token, `--color-text` (not `--color-navy`
  itself), specifically so this mock does not also claim the dark-surface brand-extension that M3 owns. Using
  `--color-text` as an opaque panel behind light text is a core, unflagged token, chosen for that reason and
  because it measures roughly 17:1 contrast against `--color-bg` text.
- Layout dimensions (hero height, door-photo thumbnail size, strip image height) are not token-governed —
  `tokens.css` defines no component-dimension tokens, and DD-19 leaves layout, density and imagery free.

## Flagged slots

| Slot | Q id | Default shipped |
|---|---|---|
| Lockup | Q-001 | `gt-school-logo-h.svg`, per `copy.md`'s own stated option, pending Holly's element |
| Current families URL | Q-002 | Linked to `community.gt.school` as given, "confirm" per copy.md |
| Application steps | Q-007 | The four generic steps from `copy.md`, same for both schools |
| Georgetown tuition | Q-011 | "Tuition on request. Ask admissions." (decided at G0.5 item 4, not yet a published figure) |
| Intensives logistics | Q-017 | "Four in-person weekends a year in Georgetown" with no further logistics stated |
| After-8th-grade path | Q-013 | "Families plan the path after 8th grade with admissions." |
| Proof/speed figure | Q-019 | Withheld entirely; the proof strip carries four register-backed facts instead, no figure slot on the page |
| TEFA window/owner/expiry | Q-021 | TEFA module shown to everyone (D-015 option c) with the fixed wording; no window/expiry text since none is given |
| Accreditation | Q-033 | Omitted entirely — no mark, no wording, anywhere on the page |
| Adults' title | Q-035 | "Guides" everywhere in visible text; "advisor" appears only as the required `data-type="advisor"` attribute value |
| Photo consent | AD-11 | Every photo captioned "published by GT on its own site, consent to be confirmed by Nari" (see Assets) |

## Parent questions

From `1_spec/01-users-and-journeys.md` section 5 ("The parent-questions test"):

| # | Question | Answered on this page | Or one click to |
|---|---|---|---|
| 1 | What is GT School? | Yes — the umbrella sentence (h1) | |
| 2 | Who is it for? | Yes — "90th percentile and above" in the comparison table's Admissions row and the proof strip | FAQ (secondary CTA) |
| 3 | In person or online, and where? | Yes — the two doors, each with a label, icon, and photo; "Georgetown, Texas" and "from home, anywhere in the United States" repeated in the comparison table | |
| 4 | What is the same and what differs? | Yes — the nine-row comparison table, shared rows first | |
| 5 | What does it cost, or where do I find out? | Partly — the comparison table's Tuition and access row states GT Anywhere's $10,400/TEFA figure; Georgetown says "Ask admissions" | Georgetown Campus site admissions |
| 6 | How do I apply and what are the steps? | Yes — "How to apply" section: the bar stated, four steps, then a named apply link per school | apply.gt.school |
| 7 | Is it accredited and what are the outcomes? | No — deliberately silent (decisions 2 and 3; Q-019, Q-033) | Proof page (REQ-043, not yet built) |
| 8 | How do I reach a human? | Yes — "Talk to admissions," "Book a campus tour," "Join a virtual info session" (secondary CTAs), plus the footer phone number | |

Question 7 is the one this mock deliberately defers rather than answers, matching every other mock and the
G0.5 decisions: no accreditation claim and no speed figure exist to state truthfully yet.

## Self-check

**Rule 1 (no form/input/submit).** `grep -c "<form" index.html` → `0`.

**Rule 2 (one script, the JSON-LD).** `grep -c "<script" index.html` → `1`.

**Rule 3 (no external requests beyond `../shared/*` and fonts).** Every `http` match in `index.html` is a
`href="https://gt.school|www.gt.school|anywhere.gt.school|apply.gt.school|community.gt.school/..."` destination,
an `og:*`/`canonical` meta value, or a `schema.org`/site URL string inside the JSON-LD data block (not a fetched
resource). `styles.css` has zero occurrences of `http`.

**Rule 4 (verbatim copy).** Every fixed slot (umbrella sentence, provenance line, door names/lines/CTAs,
comparison table cells, TEFA module, proof-strip facts, application steps and links, secondary CTAs, current-families
copy, footer facts/contact/links, Head block) is copied verbatim from `copy.md`. No lorem, "TBD," or bracketed
placeholder appears anywhere on the page.

**Rule 5 (only copy.md's numbers).** `grep -oE "[0-9]+" index.html` returns: HTML/attribute markup (`h1`/`h2`/`h3`
tag names, `viewport`/`UTF-8`, image `width`/`height` on all nine images and the logo, image filenames like
`gtschool-3993.webp`); and copy.md content — `90` (90th percentile, three places), `10`/`400` ($10,400), `9`
(9 to noon), `8` (8th grade, three places), `512`/`270`/`9481` (the footer phone number), `2026`/`09`/`10` (the
proof-strip footnote date). Nothing else. The application steps use a real `<ol>` (browser-numbered), so no
literal "1 2 3 4" digits appear in the markup for that section.

**Rule 6 (Guides, not Advisors).** `grep -ni "advisor" index.html` returns exactly one line: the
`data-type="advisor"` attribute on the "Talk to admissions" link, which the rule explicitly permits. No visible
"Advisor" text anywhere.

**Rule 7 (full school names).** "Georgetown Campus" and "GT Anywhere" appear at every door, table header, apply
link, and footer link. The three bare uses of "Georgetown" (door 2's line, the In-person-time table cell, and the
footer facts block) all name the city ("...in Georgetown"), copied verbatim from `copy.md`, never used as a
stand-in for the school name.

**Rule 8 (both door CTAs visible at 390×844).** Estimated stacked height at 390px width, mobile-first CSS
(no browser measurement available to me — Playwright is out of scope for this build pass): header ≈56px:
hero (aspect-ratio 6/5, capped at `max-height: 15rem`/240px) = 240px; doors section (kicker + two door cards,
each with an 88px photo, label, name, a 3–4-line `--text-xs` description, and a CTA pill, in a warm tint card)
≈ 340–400px including section padding. Running total ≈ 636–696px, leaving roughly 150–200px of margin under
844px. Above the two door CTAs, the page shows only the header, the hero photo with its overlaid h1 and
provenance line, and the "Two programs of one school" kicker — exactly header + umbrella sentence + provenance
line + this mock's own compact element, as rule 8 allows. This is a size estimate from the CSS, not a rendered
measurement; the browser-based check is a separate verification step (T-048) outside this pass.

**Rule 9 (link whitelist).** Every `href` is one of: `#compare`, `#main` (in-page anchors); `../shared/fonts.css`,
`../shared/tokens.css`, `styles.css` (stylesheets); `/` (the lockup, per `copy.md`'s own "`/` of the mock"
instruction); or a `gt.school` / `www.gt.school` / `anywhere.gt.school` / `apply.gt.school` / `community.gt.school`
destination, each matching `copy.md` exactly and carrying its `data-event` attribute. `data-event` counts:
`door_click`×4, `cta_apply_click`×2, `cta_secondary_click`×4, `families_click`×2, `outbound_school_site`×2,
`tefa_module_view`×1, `compare_view`×1 — matching every event `copy.md` specifies.

**Rule 10 (motion).** `grep -n "transition" styles.css` shows exactly two rules: the `.link-underline::after`
transform reveal (`--duration-fast`, `--ease-standard`) and the `prefers-reduced-motion: reduce` block that
disables all transitions. No `@keyframes` exist. No transition targets `.hero-media`, `.hero-h1`, or any `h1`.

**Rule 11 (accessibility).** `<html lang="en">`; skip link to `#main`; landmarks are exactly one `header`, two
`nav` (header + footer, each `aria-label`led), one `main`, one `footer`; exactly one `<h1>`; `:focus-visible`
uses `--color-focus` everywhere except inside the dark footer, where it switches to `--color-accent` (the only
token pairing that clears 3:1 against a near-black background — `--color-focus` measures roughly 2.2:1 there);
every `<img>` has alt text; every door card, both solid buttons, and every standalone nav/footer/secondary-CTA
link carries enough padding (`--space-4`, 16px, on top of its text) to clear 44px — the three inline text links
that sit inside a sentence (the compare anchor, the TEFA "Check eligibility" link, "Go to the family hub") are
the one exception, which WCAG 2.5.8 explicitly allows for links inline in a block of text; the
comparison is a real `<table>` with `<caption>` and `scope="col"`/`scope="row"`, and restacks to one column per
row at mobile (no horizontal scroll) while staying a real table for assistive tech at every width. The hero's
h1/provenance sit on an opaque `--color-text` panel against `--color-bg` text — contrast ≈17:1, far past AA.

**Rule 12 (head).** Title, meta description, `robots: noindex, nofollow`, canonical, Open Graph (title,
description, `og:image` = `georgetown-campus.webp` per `copy.md`'s fixed Head row, type, url), and the
`EducationalOrganization` JSON-LD with two `subOrganization` entries and `sameAs` — all exactly as `copy.md`
specifies. No "Accredited," no multiplier, no SAT figure anywhere in the head.

**Rule 13 (images).** All seven photos plus the logo load from `../shared/img/` with `width`/`height`; every
image except the hero (`georgetown-science.webp`, the first-screen image) carries `loading="lazy" decoding="async"`.
`index.html` is 16KB and `styles.css` is 12KB — 28KB total, far under 1MB excluding the shared images.

**Rule 14 (tokens only).** `grep '#' styles.css` returns nothing — zero raw hex values. Every color, font,
size, space, radius, shadow, and duration in `styles.css` is a `var(--...)` from `tokens.css` (the two small
decorative bullet/icon `border-radius: 50%` uses are circle-shape primitives, not a design-scale radius choice).

**Rule 15 (N-campus-ready door list).** Both the first-screen and after-comparison door groups are a real
`<ul class="door-list">` of `<li>` (`grep -c 'class="door-list'` → `2`), laid out with flexbox so a third,
fourth, or fifth entry would flow into the same list without a template change.

**Files written:** `0_plan/mockups/M4-builders/index.html`, `0_plan/mockups/M4-builders/styles.css`,
`0_plan/mockups/M4-builders/RATIONALE.md`. No file outside this folder was edited.
