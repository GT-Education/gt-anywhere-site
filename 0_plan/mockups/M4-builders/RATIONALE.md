# RATIONALE — M4 Builders

## Direction

Lens order L3 (mission) > L1 (objective) > L2 (existing system) > L4 (elite). The hypothesis: mission through
student work beats mission through statistics (M2's lens) — a parent believes GT School is serious because they
can see what the children actually do, not because they read a proof figure. The first screen is a full-bleed
photograph of Georgetown Campus students running a real science experiment, with the umbrella sentence and
provenance line set on a translucent dark panel over the bottom of the photo (E2 finding 10 fix — see
Departures), kept compact so the two doors — framed as "Two programs of one school" — still clear the fold at
390×844. Below the doors, a "What students do" strip
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
| DD-01 | Literata for the h1, provenance and door names; Inter Tight for nav, labels and CTAs; Inconsolata for the step-list markers and the proof-strip footnote — the sites' three-typeface pairing, no fourth face added |
| DD-02 | Palette pulled only from `tokens.css`'s merged swatches (warm bg/surface/tints, one accent); this mock's own per-mock hero tone is the full-bleed photo itself, not a flat color field |
| DD-04 | Each door: uppercase text label ("In person" / "Online"), a compact inline-SVG icon (a building glyph for in person, a globe glyph for online, `aria-hidden`, `focusable="false"`, shown at every width — E2 finding 8 caught the previous abstract dot/square shapes as not conveying campus versus online), and a real photo. Color (the tint backgrounds) is secondary, never the only cue |
| DD-05 | "Explore the Georgetown campus →" / "Explore GT Anywhere →" on the first screen and again after the comparison; "Begin application: <school>" as the separate, later apply step |
| DD-06 | The comparison table's nine rows follow the fixed order (shared rows first, then differences), cell text straight from `copy.md`, with the TEFA module directly beneath it |
| DD-07 | No figure in the proof strip — Q-019 is unresolved, so the strip carries four register-backed facts and a footnote instead of a number |
| DD-08 / T-045 | No stock. Every photo is an existing, published GT photo from `shared/img/`; none of the two studio-isolated photos (`anywhere-student-home.webp`, `georgetown-kid-writing.webp`) are used |
| DD-09 | Warm, candid classroom photography carries the "serious school" case instead of abstract statistics — the direct answer to the cold/adult risk DD-09 flags for a young child's parent |
| DD-10 / MD-06 / MD-25 | No wealth cues, no manufactured urgency; the 90th-percentile bar and TEFA coverage both appear in the comparison table and proof strip, stated plainly, not dramatized |
| DD-11 | Header lockup is `gt-school-logo-h.svg` as the placeholder umbrella mark pending Holly's element (Q-001); it links to `#top`, matching the other four mocks |
| DD-12 | Header nav is routing-only — "Current families" and "Contact admissions," no marketing menu — consistent with a landing whose job is to route, not to browse |
| DD-13 | No phone number in the header; only "Current families" and "Contact admissions" |
| DD-14 | Doors stack Georgetown-then-Anywhere at mobile, no sticky CTA bar, mobile designed first |
| DD-15 | Superseded by Part C — motion decisions are cited in the MN table below, not duplicated here |
| DD-17 | No accreditation mark or wording anywhere on the page — Q-033 is unresolved, so the page stays silent rather than guessing |
| DD-18 | Superseded by AN-04 (REQ-029 excludes real tracking from mocks); every CTA still carries its `data-event`/`data-school`/`data-placement`/`data-type` attributes so wiring is mechanical later |
| DD-19 | Type families and the merged palette are fixed; layout (full-bleed photo, photo strip) is this mock's free expression. See Departures below |
| DD-20 / DD-33 | Umbrella sentence precedes the doors, spells out "gifted and talented," and sits above the fold with the photo |
| DD-21 | The doors are a real `<ul class="door-list">` of two `<li>`, laid out with flexbox so a third or fourth entry would wrap/flow, not break the split |
| DD-22 | FAQ routes to the Anywhere academics page, tour/admissions route to gt.school/contact — content stays on the school sites it already lives on; the landing only points to it |
| DD-23 | "Not sure which is right for your family? Compare the two." anchors to `#compare`; the same door list repeats immediately after the comparison table with `data-placement="after_comparison"` |
| DD-24 | The one-question decision helper is correctly absent — deferred to Phase 2 per DD-24's own revision, not a gap in this mock |
| DD-25 | Both apply links carry `?school=georgetown` / `?school=anywhere` |
| DD-26 | Both doors get identical card treatment, padding, and CTA styling — equal visual weight, stable order |
| DD-27 | "Georgetown Campus" and "GT Anywhere" in full everywhere; Guides, never Advisors, in visible text |
| DD-28 | The proof-strip footnote is dated ("checked 2026-09-10") rather than presented as timeless, so a stale fact is falsifiable later |
| DD-29 | Every screen carries a real fact (the doors' own lines, four proof-strip facts, nine comparison rows) — no decorative whitespace-only screen |
| DD-30 | Plain language first: "mastery academics," "check in every week," "TimeBack learning platform" — all from `copy.md`, no unexplained jargon |
| DD-31 | Declared in Assets below: which photos, why, and the typographic fallback if any is rejected |
| DD-32 | "Current families" gets its own header link and its own late-page section with a support-hub link — framed as a support route, not folded into general contact |
| DD-34 | The comparison table's "The day" row is the literal schedule device: Georgetown's 9-to-noon academics versus Anywhere's about-three-hours, verbatim from `copy.md` |
| DD-35 | TimeBack is named once, plainly, in "The day" row — the only product name on the page, no screenshot (that's Phase 2) |
| DD-36 | Reading text — body copy, door lines, table cells, facts, steps and captions — in Literata via `body`'s font-family; Inter Tight is scoped to labels, navigation and CTAs (`.link-underline`, `.door-label`, `.door-cta`, `.kicker`). E2 finding 17 caught `body` set to Inter Tight, which put every reading-text element in the wrong face by inheritance; `body` now sets Literata and the four label/nav/CTA selectors carry their own explicit Inter Tight override. Motion is hover-only and fully removed under `prefers-reduced-motion` |
| MD-01 | Zero lead forms; the page's only conversions are routing to the two school sites and to apply.gt.school |
| MD-02 | "More ways to connect" is the secondary-CTA section by name: FAQ, admissions, tour, info session, for the visitor who isn't ready to apply |
| MD-04 | Order is umbrella promise → two doors → what-students-do strip → proof, never proof first |
| MD-05 | No testimonial and no figure anywhere — neither is Approved yet (Q-034, Q-019), so the proof strip stays fact-only |
| MD-10 | Full names, redundant format cues, and a `school=` parameter on both apply links are the wrong-school-prevention mechanism this landing exists to provide |
| MD-13 / REQ-026 | Tuition and access row: Georgetown "Tuition on request. Ask admissions."; Anywhere the exact $10,400/TEFA sentence from `copy.md` |
| MD-14 | The TEFA module is shown to every visitor (D-015 option c), not geo-gated — geographic personalization stays a later experiment |
| MD-15 | No eligibility gate or quiz; both doors are always visible and clickable regardless of any answer |
| MD-16 | The proof-strip footnote cites the checked-on date; nothing on the page states a number or claim without a `copy.md`/register source |
| MD-17 | The provenance line appears exactly once, in the hero panel, in a smaller weight than the h1 |
| MD-18 | No competitor or alternative-school name appears anywhere on the page |
| MD-26 | The TEFA module's heading, body and link are `copy.md`'s exact wording, shown unconditionally per D-015 option c |
| REQ-011 / rule 8 | Above the two door CTAs at 390×844: header, hero photo + h1 + provenance (this mock's compact added element), nothing else |
| REQ-012 | Redundant format+location cues (label, icon, photo, tint) so the choice does not depend on reading the photo |
| REQ-017 | "Current families" in the header nav; general phone number only in the footer, never above the fold |
| REQ-018 | Full school names in every door, table header, and apply link |
| REQ-070 | No `<form>` anywhere; both apply links carry the `school=` parameter |

## Motion spec

| What animates | Trigger | Duration token | Easing token | Reduced-motion behavior |
|---|---|---|---|---|
| Underline reveal (`::after`, `transform: scaleX()`) under every `.link-underline` (nav, compare anchor, TEFA link, secondary CTAs, families link, footer links) | `:hover`, `:focus-visible` | `--duration-fast` (100ms) | `--ease-standard` | `transition: none` under `prefers-reduced-motion: reduce`, on `*, *::before, *::after` (E2 finding 3: the previous `*` selector alone left the `::after` underline's `transform` transition running); the underline still appears on hover/focus, just without the reveal motion |
| Nothing else. Door-card and button background/text-decoration changes on hover/focus are plain (non-transitioned) property swaps, not animated motion. The hero photo and the `h1` have no transition or animation of any kind, at rest or on any state |

No scroll reveals, no lifts, no signature animation. Transform and opacity are the only properties ever
transitioned; both duration and easing come from `tokens.css`.

### MN decisions applied

| MN id | What the page does |
|---|---|
| MN-01 | Motion supports orientation and choice only; there is no signature moment anywhere on the page |
| MN-02 | The hero photo has no entrance animation at all — it renders on first paint, stricter than MN-02's "opacity only, under 300ms" allowance |
| MN-03 | Door cards have static, fixed dimensions; hover/focus only recolors the CTA pill and reveals its underline — no lift, no expand |
| MN-04 | No scroll-triggered reveal exists; every section is visible in normal document flow as soon as it loads |
| MN-05 | No stateful component exists in this v1 mock (the decision helper is deferred, DD-24); where hover/focus does change something, it is instant with no layout shift |
| MN-07 | The live sites' duplicate button-text/button-text-ab hover-swap node is not replicated; instead each CTA keeps one accessible name at all times and just recolors/underlines on hover or focus, which satisfies MN-07's one-accessible-name intent by a simpler route |
| MN-10 | The only transition anywhere (`.link-underline::after`) animates `transform: scaleX()` for `--duration-fast` (100ms) with `--ease-standard`; every image carries `width`/`height` so nothing shifts layout |
| MN-11 | `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition: none !important; } }` removes every transition, `::after` included; nothing on the page autoplays, so no pause control is needed |
| MN-12 | The same hover styling also fires on `:focus-visible` (the touch/keyboard equivalent); no scroll-hijacking exists anywhere; the motion budget (one 100ms underline) is already far under half of any evidenced duration |
| MN-13 | Only `--duration-fast` and `--ease-standard` are used — no other duration or easing value appears anywhere in `styles.css` |

Also satisfied structurally: MN-06 (no video anywhere), MN-08 (this mock differs from the other four through
imagery, layout and copy only, never a signature animation), MN-09 (CSS only — no JavaScript, not even
IntersectionObserver, since nothing here needs a scroll trigger), MN-14 (header/footer/tokens are the same
shared components a school-site shell would inherit), and MN-15 (one restrained motion treatment applies
everywhere; nothing branches for in-app browsers).

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
  `--color-text` as the panel's base color (now blended via `color-mix`, below) is a core, unflagged token,
  chosen for that reason and because at full opacity it measures roughly 17:1 contrast against `--color-bg` text.
- Layout dimensions (hero height, door-photo thumbnail size, strip image height) are not token-governed —
  `tokens.css` defines no component-dimension tokens, and DD-19 leaves layout, density and imagery free.
- The hero panel's background is `color-mix(in srgb, var(--color-text) 80%, transparent)` rather than a flat
  token value (E2 finding 10 fix). It is a translucent variant of the existing `--color-text` token, not an
  invented hue: `tokens.css` has no translucent step, so the function call itself is the departure, while the
  color it blends is still the one token the opaque panel used before. At 80% opacity the students and the
  experiment read through the panel instead of being fully hidden, and even against a worst-case pure-white
  patch of the photo the blend keeps the background dark enough that the `--color-bg` headline text stays well
  past AA; against the photo's actual darker tones contrast is close to the original opaque panel's ≈17:1.

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

## Claims

Every figure on the page, tagged with its claims-register row and status (E2 finding 13; `0_plan/12-claims-register.md`). All six rows are `Unverified, public` — approved to ship in a mock, not yet cleared for production (T-053).

| Figure | Where it appears | Register id | Status |
|---|---|---|---|
| 90th percentile | Steps intro ("How to apply"); proof-strip fact; comparison table's Admissions row | CR-011 | Unverified, public |
| $10,400 | Comparison table's Tuition and access row (GT Anywhere) | CR-021 | Unverified, public |
| Four in-person / intensive weekends | Door 2 line; comparison table's In-person time row (GT Anywhere) | CR-032 | Unverified, public |
| 9 to noon / about two hours | Comparison table's The day row (Georgetown); door 1 line ("Two hours of mastery academics") | CR-033 | Unverified, public |
| Two to three hours | Comparison table's The day row (GT Anywhere) | CR-034 | Unverified, public |
| Weekly one-to-one check-in | Comparison table's Guides row (GT Anywhere) | CR-035 | Unverified, public |

No withheld figure — speed multiplier, SAT figure, cohort size, or accreditation mark (CR-001, CR-004, CR-005,
CR-009, CR-010, CR-012) — appears anywhere on the page; `1_spec/tools/check-claims.py` confirms this mechanically.

## Parent questions

From `0_plan/05-landing-mockups-plan.md` section 6c (the fourteen-question E2 amendment). This replaces the
eight-question table this rationale carried before, which used the older taxonomy from
`1_spec/01-users-and-journeys.md` section 5 — E2's review mapped this mock's actual HTML to the fourteen
questions below and flagged the old table as stale.

| # | Question a parent arrives with | Answered on this page | Or one click to |
|---|---|---|---|
| PQ-01 | What is GT School? | Yes — the umbrella sentence (h1) | |
| PQ-02 | Is it for my child? | Yes — "gifted and talented" in the h1; "90th percentile and above" in the proof strip and the comparison table's Admissions row | FAQ (secondary CTA) |
| PQ-03 | In person or online: what are my options? | Yes — the two doors, each with a label, an inline-SVG icon, and a photo | |
| PQ-04 | Where is the campus? | Yes — "Georgetown, Texas" in the h1 and door 1's line; the comparison table's Where and how row | |
| PQ-05 | What does a day look like? | Yes — the comparison table's The day row (Georgetown's 9-to-noon schedule; GT Anywhere's two to three hours) | |
| PQ-06 | What does it cost, and can TEFA help? | Yes — the comparison table's Tuition and access row (Georgetown "Ask admissions"; GT Anywhere $10,400 and TEFA) and the TEFA module | |
| PQ-07 | How do I apply? | Yes — "How to apply": the bar stated, four steps, a named apply link per school | apply.gt.school |
| PQ-08 | Who teaches my child? | Yes — the comparison table's Guides row; the proof strip's "Guides, not lecturers" fact | |
| PQ-09 | How much in-person time does GT Anywhere have? | Yes — the comparison table's In-person time row ("Four intensive weekends a year") | |
| PQ-10 | What results does the school get, and is it accredited? | Silent by G0.5 decisions 2 and 3; admissions answers it | Georgetown Campus site admissions |
| PQ-11 | What happens after 8th grade? | Deferred to admissions — the comparison table's After 8th grade row says so directly (Q-013) | Georgetown Campus site admissions |
| PQ-12 | I am a current family, where do I go? | Yes — "Current families" in the header and its own late-page section, both to community.gt.school | |
| PQ-13 | I am not ready to apply, what can I do? | Yes — "More ways to connect": FAQ, admissions, tour, info session | |
| PQ-14 | Is GT School part of Alpha School? | Yes — the provenance line under the h1 | |

PQ-10 is the one this mock deliberately withholds rather than states: no accreditation claim and no speed figure
exist to state truthfully yet (G0.5 decisions 2 and 3), so the page stays silent and points a reader to
admissions rather than to a proof page that was never built — the correction E2 made to this table's earlier,
stale "Proof page (REQ-043, not yet built)" pointer.

## Self-check

**Rule 1 (no form/input/submit).** `grep -c "<form" index.html` → `0`.

**Rule 2 (one script, the JSON-LD).** `grep -c "<script" index.html` → `1`.

**Rule 3 (no external requests beyond `../shared/*` and fonts).** Every `http` match in `index.html` is a
`href="https://gt.school|www.gt.school|anywhere.gt.school|apply.gt.school|community.gt.school/..."` destination,
an `og:*`/`canonical` meta value, or a `schema.org`/site URL string inside the JSON-LD data block (not a fetched
resource). `styles.css` has zero occurrences of `http`.

**Rule 4 (verbatim copy).** Every fixed slot (umbrella sentence, provenance line, door names/lines/CTAs,
comparison table cells in the E2-amended row order, TEFA module, proof-strip facts, the sources line (now
duplicated verbatim under the proof strip and again under the comparison table), application steps and links,
secondary CTAs (now "Ask about a campus tour" / "Ask about a virtual info session"), current-families copy,
footer facts/contact/links (now two scoped apply links and no repeated provenance sentence), Head block) is
copied verbatim from the 2026-09-10 `copy.md`. No lorem, "TBD," or bracketed placeholder appears anywhere on
the page.

**Rule 5 (only copy.md's numbers).** `grep -oE "[0-9]+" index.html` returns: HTML/attribute markup (`h1`/`h2`/`h3`
tag names, `viewport`/`UTF-8`, `svg` `viewBox`/`width`/`height` on the four inline door icons, image
`width`/`height` on all nine photos and the three logo images — the header lockup and the footer's now-separate
GT School and GT Anywhere panels — and image filenames like `gtschool-3993.webp`); and copy.md content — `90`
(90th percentile, three places), `10`/`400` ($10,400), `9` (9 to noon), `8` (8th grade, four places: the
After-8th-grade row's header and cell, the proof-strip fact, and the footer facts sentence), `512`/`270`/`9481`
(the footer phone number), `2026`/`09`/`10` (the sources line's checked-date, now appearing twice — under the
proof strip and again under the comparison table). Nothing else; confirmed by `check-mocks.py`'s R5. The
application steps use a real `<ol>` (browser-numbered), so no literal "1 2 3 4" digits appear in the markup for
that section.

**Rule 6 (Guides, not Advisors).** `grep -ni "advisor" index.html` returns exactly one line: the
`data-type="advisor"` attribute on the "Talk to admissions" link, which the rule explicitly permits. No visible
"Advisor" text anywhere.

**Rule 7 (full school names).** "Georgetown Campus" and "GT Anywhere" appear at every door, table header, apply
link, and footer link. The three bare uses of "Georgetown" (door 2's line, the In-person-time table cell, and the
footer facts block) all name the city ("...in Georgetown"), copied verbatim from `copy.md`, never used as a
stand-in for the school name.

**Rule 8 (both door CTAs visible at 390×844, and within 900px at 1440 per the E2 fix pass).** The prior pass's
browser QA (`shared/screenshots/QA-2026-09-10.md`, row `M4-builders`) measured both door CTAs' bottoms at 486px
and 626px at 390×844 (218px of margin) and both at 884px at 1440×900 (16px of margin) — against the hero this
pass replaced, whose overlay panel was already `position: absolute` and so added zero document-flow height of
its own beyond the hero box. E2 finding 10's fix (recomposing the hero, see Departures) keeps that same
zero-added-flow-height property: the panel stays `position: absolute`; only its background (now translucent),
its padding, and — at 1440 only — its `h1` font-size changed, none of which push anything below the hero. The
one flow-height change is the hero's own `max-height`, raised from 15rem/240px to 17rem/272px at mobile only
(the desktop `max-height: 32rem`/512px is untouched). Estimated new mobile total: 626px + 32px = 658px,
comfortably under 844px (186px of margin). At 1440, since nothing in the document flow above the doors changed
size, the doors' measured 884px position is unchanged and the 16px margin under 900px stands. This is a size
estimate built on the prior pass's real browser measurement, not a fresh rendered measurement of this pass's
own changes; a browser-based recheck is a separate verification step outside this pass, exactly as the original
build noted.

**Rule 9 (link whitelist).** Every `href` is one of: `#compare`, `#main`, `#top` (in-page anchors); `../shared/fonts.css`,
`../shared/tokens.css`, `styles.css` (stylesheets); or a `gt.school` / `www.gt.school` / `anywhere.gt.school` /
`apply.gt.school` / `community.gt.school` destination, each matching the 2026-09-10 `copy.md` exactly and
carrying its `data-event` attribute — including the footer's two new scoped apply links (E2 finding 14; no
`apply.gt.school` link anywhere lacks `?school=`, confirmed by `check-mocks.py`'s R17). `data-event` counts:
`door_click`×4, `cta_apply_click`×4 (two in "How to apply", two now in the footer), `cta_secondary_click`×4,
`families_click`×2, `outbound_school_site`×4 (the footer's two logo links and two text links), `tefa_module_view`×1,
`compare_view`×1 — matching every event `copy.md` specifies, and clearing every `EVENTS` minimum in
`check-mocks.py`. (The header lockup originally linked to `/`, per `copy.md`'s literal "`/` of the mock"
instruction; the coordinator changed it to `#top` — `<body id="top">` — for consistency with the other four
mocks, which this document still reflects.)

**Rule 10 (motion).** `grep -n "transition" styles.css` shows three declarations: the `.link-underline::after`
transform reveal (`--duration-fast`, `--ease-standard`), the `.footer-logo-link` opacity fade on hover/focus
(same duration and easing tokens), and the `prefers-reduced-motion: reduce` block, which now reads
`*, *::before, *::after { transition: none !important; }` (E2 finding 3: the previous `*`-only selector left
the `::after` underline's `transform` transition running under reduced motion; `check-mocks.py`'s R10 checks
for `::after`/`::before` after the `prefers-reduced-motion` string and now passes). No `@keyframes` exist. No
transition targets `.hero-media`, `.hero-h1`, or any `h1`.

**Rule 11 (accessibility).** `<html lang="en">`; skip link to `#main`; landmarks are exactly one `header`, two
`nav` (header + footer, each `aria-label`led), one `main`, one `footer`; exactly one `<h1>`; `:focus-visible`
uses `--color-focus` everywhere except inside the dark footer, where it switches to `--color-accent`, and the
footer's GT Anywhere logo panel — now its own `--color-navy` background (E2 finding 18) — switches again to
`--color-accent-contrast`, since `--color-focus` on `--color-navy` reproduces the ≈1.69:1 outline M3 was
flagged for (E2 finding 2), and `--color-accent-contrast` (#fbfbfb) clears 3:1 there by a wide margin; every
`<img>` has alt text. Per E2 finding 1 and the coordinator's clarification to recheck every interactive
target rather than only the categories first listed: the header lockup (`.logo`, now `min-height: 2.75rem`),
every header and footer nav link, both footer logo links (already `min-height: 2.75rem`, unchanged), both solid
apply buttons, all four secondary CTAs, the compare anchor, the TEFA "Check eligibility" link, and "Go to the
family hub" all now carry explicit padding (`--space-4` vertically; the footer links add `--space-3`
horizontally too) on the anchor itself, clearing 44px in both dimensions — no link on the page still relies on
the WCAG 2.5.8 inline-text exception this rationale previously invoked for the last three. Both sets of door
cards (first screen and the pair repeated after the comparison) were already well over 44px on every side —
a whole-card link with a photo, three lines of text and a CTA pill inside — so they needed no change. The
comparison is a real `<table>` with `<caption>` and `scope="col"`/`scope="row"`, and restacks to one column per
row at mobile (no horizontal scroll) while staying a real table for assistive tech at every width. The hero's
h1/provenance now sit on a translucent `color-mix(in srgb, var(--color-text) 80%, transparent)` panel (E2
finding 10; see Departures) rather than the previous opaque `--color-text` fill — worst case, a pure-white
patch of photo directly behind the text, contrast stays comfortably past AA, and against the photo's actual
darker tones it is close to the original ≈17:1.

**Rule 12 (head).** Title, meta description, `robots: noindex, nofollow`, canonical, Open Graph (title,
description, `og:image` = `georgetown-campus.webp` per `copy.md`'s fixed Head row, type, url), and the
`EducationalOrganization` JSON-LD with two `subOrganization` entries and `sameAs` — all exactly as `copy.md`
specifies. No "Accredited," no multiplier, no SAT figure anywhere in the head.

**Rule 13 (images).** All nine photos plus the three logo images (the header lockup, and the footer's now-
separate GT School and GT Anywhere panels — E2 finding 18) load from `../shared/img/` with `width`/`height`;
every image except the hero (`georgetown-science.webp`, the first-screen image) carries `loading="lazy"
decoding="async"`. The four door icons are inline `<svg>`, not `<img>`, so `check-mocks.py`'s R13 correctly
doesn't count them and still finds exactly one eager photo, the hero. `index.html` is 18KB and `styles.css` is
13KB — 31KB total, far under 1MB excluding the shared images.

**Rule 14 (tokens only).** `grep '#' styles.css` returns nothing — zero raw hex values. Every color, font,
size, space, radius, shadow, and duration in `styles.css` is a `var(--...)` from `tokens.css`, with one flagged
exception: the hero panel's `color-mix(in srgb, var(--color-text) 80%, transparent)` background (Departures,
above) is a function of a token, not a literal token value, named there per DD-19. The proof-list bullet's
`border-radius: 50%` is still a plain circle-shape primitive, not a design-scale radius choice; the door icons
that used to share that pattern are now inline SVG glyphs (E2 finding 8) with no border-radius at all.

**Rule 15 (N-campus-ready door list).** Both the first-screen and after-comparison door groups are a real
`<ul class="door-list">` of `<li>` (`grep -c 'class="door-list'` → `2`), laid out with flexbox so a third,
fourth, or fifth entry would flow into the same list without a template change.

**Files written:** `0_plan/mockups/M4-builders/index.html`, `0_plan/mockups/M4-builders/styles.css`,
`0_plan/mockups/M4-builders/RATIONALE.md`. No file outside this folder was edited.

## Design-lead pass (Fable, browser in the loop), 2026-09-10

| Item | Change | Why |
|---|---|---|
| First screen | The science photograph fills the first viewport at 1440 (hero 65 to 897px); the headline sits on a translucent navy panel top-left; the two doors are docked at the foot of the photograph as light cards with a school-tint rule, so both CTAs (ending at 841 and 818px) are inside the first screen. At 390 the photo is a 280px band with the headline panel, then the two cards | M4's thesis is the image; the doors could not sit below a full-bleed photo without leaving the first screen, so they were docked onto it |
| Compare anchor | Directly after the doors | E2 finding 5 |
| Comparison | Tinted school headers, mono row labels, "Both schools" tag, stacked cards on mobile | Shared component treatment with M1 |
| What students do | Moved after the comparison; four portrait photo tiles with captions on a translucent navy strip, edge to edge | The builder argument in one strip, after the routing job is done |
| Proof, steps, connect | Facts as accent-ruled plates; steps as navy numbered circles on a hairline; four connect cards | Consistent affordances |
| Footer | Navy, with the GT School logo on a light panel and the GT Anywhere logo on a bordered navy panel | Legibility of both marks (E2 finding 18) |

Departures (DD-19): the translucent scrim is `color-mix()` of the navy token at 86 percent (the only non-token color expression on the page); the navy footer; eyebrows in Inconsolata (recorded in `copy.md`). Text over the photograph sits only on the scrim. Nothing animates. Both checkers pass.
