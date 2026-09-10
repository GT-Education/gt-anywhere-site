# 06 Mockup rationale

| Field | Value |
|---|---|
| Purpose | Gallery notes and per-mock rationale for the five GT School landing-page mocks (T-047): traces every design, marketing and motion decision each mock applies, its assets and consent status, its departures from the token envelope, its flagged slots and its answers to the parent-questions test, ahead of Nari's G1 pick |
| Status | Built 2026-09-10, awaiting E2 Astra review and G1 |
| Sources | `0_plan/05-landing-mockups-plan.md` sections 4, 6c, 8b, 9; `1_spec/03-landing-page-spec.md` section 10; `0_plan/mockups/M1-two-doors/RATIONALE.md` through `0_plan/mockups/M5-one-school-two-campuses/RATIONALE.md`; `0_plan/mockups/shared/copy.md`; `0_plan/mockups/shared/ASSETS.md`; `0_plan/16-g05-decision-record.md`; `0_plan/mockups/shared/tokens.css`; `0_plan/ID-INDEX.md` (id verification); the five mocks' own `index.html` (spot-checked directly for two findings below) |

## 1. The five directions

| Mock | Folder | Lens order | Hypothesis | First screen | What is fixed | Known trade-off |
|---|---|---|---|---|---|---|
| M1 Two Doors | `M1-two-doors` | L1 objective &gt; L2 existing system &gt; L4 elite &gt; L3 mission | The fastest correct choice wins: a parent who already knows "in person" or "online" should click the right door before reading anything else | Header, one umbrella sentence, one small provenance line, then two equal door panels (school name, one line, one CTA, one cue) — nothing else above the doors | Sections 0–8 all present; no decision helper (deferred to Phase 2, `DD-24`) | Split hero reads as two panels and doesn't itself signal N-campus scalability; the door list is a real auto-fit `<ul>` that already accepts a third entry, so `DD-21` compliance is delivered at the markup layer, not the visual layer |
| M2 The Institute | `M2-the-institute` | L3 mission &gt; L4 elite &gt; L1 objective &gt; L2 existing system | Proof of rigor is the brand: a page that reads as an academic grid, hairline-ruled and mono-labelled, convinces a parent this is the most serious K-8 option they have seen, before any photo or persuasive line does | Umbrella sentence as an editorial statement, then a four-fact structural register (grades, admission bar, format, in-person time) in Inconsolata — not the three proof figures `0_plan/05`'s matrix originally described, since no outcome figure has cleared the claims register — then "Two ways to attend" | Only register-backed content ships; the outcome/speed figure is withheld entirely, not shown as a placeholder | Cold/adult register risk (`DD-09`), mitigated by keeping all reading copy in Literata and `DD-16`'s institutional-warm voice; accreditation/outcomes is the one parent question this mock cannot answer |
| M3 Private Quiet | `M3-private-quiet` | L4 elite &gt; L2 existing system &gt; L1 objective &gt; L3 mission | Prestige is read through restraint, not through ornament | Header, the umbrella sentence in large Literata, one provenance line, then two understated door cards with text-link CTAs (a permanent underline, not a filled button) | Every section below the fold carries a real, sourced fact (`DD-29`) — never decoration alone | Large display type risks reading as "big type over thin content" (Nari's own named failure mode); answered with density, not by trimming the restraint |
| M4 Builders | `M4-builders` | L3 mission &gt; L1 objective &gt; L2 existing system &gt; L4 elite | Mission through student work beats mission through statistics: a parent believes GT School is serious because they see what children do, not because they read a proof figure | Full-bleed photo of Georgetown students running a real science experiment; umbrella sentence and provenance line on a dark overlay panel; doors framed as "Two programs of one school" | No stock; every photo is an existing, published GT photo (`DD-08`) | Photo quality and availability the mock does not control (`DD-31`); the "what students do" strip depends on four specific existing photographs |
| M5 One School, Two Campuses | `M5-one-school-two-campuses` | L2 existing system &gt; L1 objective &gt; L3 mission &gt; L4 elite | Coherence itself is the message: does this already look like the front door of the two sites it leads to | Umbrella sentence, then the campus switcher ("In person: Georgetown Campus" / "Online: GT Anywhere") as the first CTA, unfolding into photo/line/CTA content | Header and footer are marked reusable `@partial` blocks; the header/footer markup drift across M1–M4 is named and resolved (`DEL-004`) | "Least dramatic by design" — no full-bleed hero, no figures, no large display type, no split-hero drama; may under-sell the mission if Nari wants a stronger opening beat |

## 2. Decisions traced

Each table lists every `DD`, `MD`, `MN` and `REQ` id that mock's own `RATIONALE.md` cites by id, with the builder's own application tightened to one line. Ids are given a short title from `0_plan/ID-INDEX.md`, not invented. Where a mock's `RATIONALE.md` cites a range (`MN-01 to MN-15`) rather than one row per id, that range is reproduced as the mock cited it, not split apart.

### M1 Two Doors

| Id | Decision | How applied in M1 |
|---|---|---|
| `DD-01` | Typography pairing | Literata + Inter Tight from `tokens.css`; Inconsolata not used |
| `DD-02` | Palette and hero tone | Light hero, existing palette; navy used only as a small CTA-button fill (fix pass), never a hero or section surface |
| `DD-03` | Hero structure | One umbrella sentence, then two doors |
| `DD-04` | In-person versus virtual cue system | Label + inline SVG icon + photo per door; color only a secondary tint |
| `DD-05` | CTA labels and placement | Exact `copy.md` CTA strings, repeated after the comparison |
| `DD-06` | Comparison block format and facts | Real `<table>`, shared-then-different row order exactly as `copy.md` |
| `DD-08` | Imagery policy | Existing site photographs only; no stock |
| `DD-10` | Exclusivity cues and limits | "Admissions" language; no countdowns, no wealth cues |
| `DD-11` | Brand lockup | Real `gt-school-logo-h.svg` (fix pass; originally a text wordmark) |
| `DD-12` | Navigation on the landing | Minimal header: lockup, Current families, Contact admissions; no menu |
| `DD-13` | Current-families route placement | Header + footer link; phone only in the footer |
| `DD-14` | Mobile pattern | 390px designed first; doors stacked Georgetown then Anywhere; no sticky CTA bar |
| `DD-17` | Trust signals | No Cognia mark, no accreditation claim (G0.5 decision 3) |
| `DD-19` | Style envelope | Type families and palette fixed; every raw value named in Departures |
| `DD-20` | Orientation before choice | Umbrella sentence sits above both doors |
| `DD-21` | Scalable choice component | Doors are a real `<ul>` on an auto-fit grid; already accepts 3–5 entries |
| `DD-22` | Content allocation between landing and school sites | Only what is true of both schools, the differences, and the routes |
| `DD-23` | CTA repetition and reassurance | Doors at top, "Compare the two" anchor, doors repeated after the table |
| `DD-25` | Direct-to-application from the landing | "Begin application" links per school with `?school=` |
| `DD-26` | Visual parity between the doors | Identical card markup and sizing; stable order, Georgetown then Anywhere |
| `DD-27` | Nomenclature and marks | "Georgetown Campus"/"GT Anywhere" exactly; Guides, never Advisors |
| `DD-29` | Type scale and density | Every section carries at least one real fact |
| `DD-30` | Jargon policy | "TimeBack," "MAP assessments," "TEFA" appear with `copy.md`'s own plain-language context |
| `DD-31` | Asset dependency declaration | See section 4 below |
| `DD-32` | Current families as a support intent | Header + footer link, both to `community.gt.school` |
| `DD-33` | Decoding "GT" | H1 spells out "gifted and talented" |
| `DD-36` | Twice-exceptional readability | Literata body copy; strict single-h1 hierarchy; reduced motion removes all transitions |
| `MD-01` | Primary conversion goal of the landing | Route only, plus the per-door apply link; no lead form |
| `MD-02` | Secondary CTA for the not-yet-ready | FAQ, Talk to admissions, campus tour, virtual info session — all four present |
| `MD-04` | Value-proposition hierarchy | Umbrella promise → two doors → comparison → proof strip |
| `MD-06` | Exclusivity signals that are true | Admissions bar stated plainly; no countdowns or fake scarcity |
| `MD-10` | Wrong-school prevention in copy and UI | Explicit "in person… Georgetown, Texas" / "online… from wherever you live" wording on every door |
| `MD-11` | Contact strategy | Admissions contact in header nav; phone only in the footer |
| `MD-13` | Tuition disclosure on the landing | Both schools stated the same way: Georgetown "Tuition on request," Anywhere "$10,400 a year… TEFA" |
| `MD-17` | Alpha affiliation prominence | One line, once, small, under the h1 |
| `MD-25` | Access messaging against exclusivity | Admissions bar and TEFA module both present on the same page |
| `MD-26` | The TEFA module | Shown to everyone (D-015 option c), exact `copy.md` wording |
| `MN-01` to `MN-15` | Motion (all fifteen) | Consolidated into this mock's own motion-spec table (section 3 below), not itemized per id |
| `REQ-002` | The gt.school `/book-a-tour` fix | "Book a campus tour" points to `/contact` since gt.school's own `/book-a-tour` 404s |
| `REQ-012` | Physical-versus-virtual distinction unmistakable | The h1 puts the orienting sentence in the one-h1 slot so a parent can choose correctly within ten seconds |
| `REQ-021` | Decode "GT" and affiliation prominence | H1 decodes "gifted and talented"; provenance line names the Alpha network once |
| `REQ-043` | Proof page with outcome data | Not built in this mock; the nearest destination (FAQ) doesn't address it either — a named gap for parent question 7 |

### M2 The Institute

| Id | Decision | How applied in M2 |
|---|---|---|
| `DD-01` | Typography pairing | Only Literata, Inter Tight and Inconsolata; no new typeface |
| `DD-02` | Palette and hero tone | Light hero; `--color-navy`/`--color-surface-alt` not used |
| `DD-03` | Hero structure | Umbrella sentence, then a four-fact register, then the two doors |
| `DD-04` | In-person versus virtual cue system | Label + icon only, no photo — this mock's own asset dependency is "none beyond type" |
| `DD-06` | Comparison block format and facts | Full nine-row table, shared rows first; restacks to CSS blocks below 768px |
| `DD-07` | Proof and outcomes on the landing | No outcome figure anywhere; proof strip carries only the four register-backed facts |
| `DD-09` | "MIT of K-8" cues and limits | This mock **is** the DD-09 experiment: evidence through structure, not an outcome number |
| `DD-11` | Brand lockup | Real `gt-school-logo-h.svg` (fix pass; originally a text wordmark) |
| `DD-12` | Navigation on the landing | Lockup, Current families, Contact admissions only |
| `DD-13` | Current-families route placement | Phone only in the footer |
| `DD-14` | Mobile pattern | 390px first; doors stacked; no sticky CTA bar |
| `DD-16` | Copy voice | All reading copy verbatim from `copy.md`; nothing rewritten colder |
| `DD-17` | Trust signals | No accreditation statement, no Cognia mark (grep-verified) |
| `DD-19` | Style envelope | Type families and palette fixed; leans harder on Inconsolata for data roles (flagged, see section 5) |
| `DD-20` | Orientation before choice | Umbrella sentence precedes the register and the doors |
| `DD-21` | Scalable choice component | Doors a real `<ul>`, two-column grid wraps for 3–5 entries |
| `DD-23` | CTA repetition and reassurance | "Compare the two" anchor; doors repeated after the table |
| `DD-25` | Direct-to-application from the landing | Both apply links carry `?school=` |
| `DD-26` | Visual parity between the doors | Identical markup and weight; stable order |
| `DD-27` | Nomenclature and marks | Full school names; Guides, never Advisors as text |
| `DD-29` | Type scale and density | Every screen carries a sourced fact; no display-only screen |
| `DD-30` | Jargon policy | No invented jargon; `copy.md`'s own terms used as-is |
| `DD-33` | Decoding "GT" | Umbrella sentence spells out "gifted and talented" |
| `DD-36` | Twice-exceptional readability | Body copy stays in Literata; strict single-h1 tree; zero motion by default |
| `MD-04` | Value-proposition hierarchy | Umbrella promise → two ways to attend → proof; no figure pulled forward |
| `MD-06` | Exclusivity signals that are true | 90th percentile stated plainly; no countdown or urgency |
| `MD-09` | UTM and attribution pass-through | Both apply links carry `?school=` |
| `MD-10` | Wrong-school prevention in copy and UI | Explicit In person/Online labels, full names, and an icon at wider breakpoints |
| `MD-13` | Tuition disclosure on the landing | Both schools in the same row, same weight: "Tuition on request" / $10,400 + TEFA |
| `MD-16` | Claims governance | Every number traces to a register row or `copy.md` fixed text; none invented |
| `MD-17` | Alpha affiliation prominence | One line, small, italic, under the h1 |
| `MD-25` | Access messaging against exclusivity | Selectivity and access both stated; no wealth cue in copy or design |
| `MN-08` | Signature motion per lens | None — motion stance is Static; the mock differs through layout, hierarchy and density only |
| `REQ-011` | First screen minimalist | Above the doors at 390px: header, h1, accent rule, provenance line, the register — nothing else |
| `REQ-017` | Current-families route before general contact | Header link; phone only in the footer |
| `REQ-018` | Full school names in landing copy | Used everywhere except `copy.md`'s own fixed place-name/CTA phrasing |
| `REQ-021` | Decode "GT" and affiliation prominence | Umbrella sentence decodes it; provenance line names the network once |
| `REQ-022` | Every quantitative claim traces to the register | No number ships without a source; register or `copy.md`-fixed figures only |
| `REQ-070` | Application flows keep working, no wrong-school routing | Zero `<form>` elements; both apply links carry the school parameter |
| `REQ-073` | Core Web Vitals no worse than today | The header logo (first-screen image) is not lazy-loaded, per REQ-073/rule 13's eager-image exemption |
| `REQ-074` | WCAG 2.1 AA on new pages | Landmarks, skip link, one h1, visible focus, table caption/scope, tap targets ≥44px |

### M3 Private Quiet

| Id | Decision | How applied in M3 |
|---|---|---|
| `DD-01` | Typography pairing | Literata for headings and door names; Inter Tight functional; Inconsolata only for two kickers plus footnote/step numerals |
| `DD-02` | Palette and hero tone | Light cream hero; the footer is the one dark-surface use (flagged, see section 5) |
| `DD-03` | Hero structure | One umbrella sentence, then two doors |
| `DD-04` | In-person versus virtual cue system | Label + icon + a small square identifying photo per door, not a banner |
| `DD-05` | CTA labels and placement | `copy.md` CTA strings on the first screen, repeated after the comparison, plus separate apply links |
| `DD-06` | Comparison block format and facts | Real `<table>`, shared rows first, exact `copy.md` row order |
| `DD-07` | Proof and outcomes on the landing | No outcome figure; proof strip carries four register-backed, footnoted facts |
| `DD-08` | Imagery policy | Only existing, published photographs; no stock |
| `DD-09` | "MIT of K-8" cues and limits | Rigor shown as sourced fact, not jargon or a data-grid register (that is M2's job) |
| `DD-10` | Exclusivity cues and limits | "Admissions" language; 90th-percentile bar stated plainly; no wealth cues |
| `DD-11` | Brand lockup | Umbrella "GT School" lockup at the top in Literata; no second logo |
| `DD-12` | Navigation on the landing | Minimal header: lockup, Current families, Contact admissions; no menu |
| `DD-13` | Current-families route placement | Header link plus its own dedicated section; phone footer-only |
| `DD-14` | Mobile pattern | Built mobile-first; doors stack at 390px, side by side from 768px |
| `DD-16` | Copy voice | Exactly `copy.md`'s wording; nothing paraphrased |
| `DD-17` | Trust signals | No accreditation claim, no Cognia mark (Q-033 open) |
| `DD-19` | Style envelope | Only `tokens.css` values for color, font, space, radius, duration; departures named |
| `DD-20` | Orientation before choice | Umbrella sentence decodes "gifted and talented" and both ways to attend before either door |
| `DD-21` | Scalable choice component | Doors are `<ul><li>` in both places they appear; a third or fifth campus is a new `<li>` |
| `DD-23` | CTA repetition and reassurance | "Compare the two" anchor near the top; doors repeated after the table |
| `DD-24` | One-question decision helper | Not built (v1 default); doors carry the full routing job alone |
| `DD-25` | Direct-to-application from the landing | "Begin application" links per school, each carrying `?school=` |
| `DD-26` | Visual parity between the doors | Identical markup, size and treatment; default order Georgetown then Anywhere |
| `DD-27` | Nomenclature and marks | Full names everywhere; never abbreviated |
| `DD-28` | Evergreen versus dated content | No dated content except the proof-strip citation date and the TEFA module |
| `DD-29` | Type scale and density | Every section carries at least one sourced fact |
| `DD-30` | Jargon policy | Plain words first throughout; no unexplained jargon |
| `DD-31` | Asset dependency declaration | See section 4 below: two door photos plus two logo files |
| `DD-32` | Current families as a support intent | Header link plus its own dedicated section |
| `DD-33` | Decoding "GT" | Umbrella sentence decodes "gifted and talented" and both ways to attend |
| `DD-36` | Twice-exceptional readability | Literata for all body text; strict heading structure; motion limited to color/underline |
| `MD-02` | Secondary CTA for the not-yet-ready | Four CTAs: FAQ, admissions, tour, info session |
| `MD-04` | Value-proposition hierarchy | Umbrella promise, then two ways to attend, then proof — never proof first |
| `MD-06` | Exclusivity signals that are true | No countdowns or manufactured scarcity; only the stated 90th-percentile bar |
| `MD-10` | Wrong-school prevention in copy and UI | Explicit In person/Online labels plus full names on every door and CTA |
| `MD-11` | Contact strategy | Admissions contact in header; phone footer-only |
| `MD-13` | Tuition disclosure on the landing | Both schools in the same table row; Georgetown "Tuition on request" (decided default) |
| `MD-14` | Geographic personalization | Default door order only; no geolocation reordering (out of scope for a static mock) |
| `MD-15` | Qualification friction | No eligibility gate; 90th-percentile bar stated as information, not enforced |
| `MD-16` | Claims governance | No figure or claim beyond `copy.md`; nothing footnoted beyond the register |
| `MD-17` | Alpha affiliation prominence | One line, once, small, exactly as `copy.md` gives it |
| `MD-25` | Access messaging against exclusivity | Selectivity and access both stated in the same row, never one without the other |
| `MD-26` | The TEFA module | Shown to everyone (v1 default), scoped to "Texas families" in its own heading |
| `MN-01` | The job of motion | No signature animation; direction differs through layout, density and typography only |
| `MN-02` | Hero entrance | None; everything visible on load |
| `MN-03` | Door hover, focus and expand | Static dimensions; only `border-color` shifts on hover/focus-within |
| `MN-04` | Scroll-driven reveals | None |
| `MN-07` | CTA micro-interactions | No hover text-swap; CTA text stable, only color changes |
| `MN-08` | Signature motion per lens | None; mock differs through layout, density and typography, not motion |
| `MN-09` | Implementation stack | CSS only; no JavaScript, no IntersectionObserver |
| `MN-10` | Performance budget | Only `duration-fast`/`ease-standard`; only color, border-color or transform transitions |
| `MN-11` | Accessibility and reduced motion | `prefers-reduced-motion` removes every transition in one rule |
| `MN-13` | Motion tokens | Only `duration-fast` and `ease-standard` used |
| `REQ-002` | The gt.school `/book-a-tour` fix | "Book a campus tour" points to `/contact` since gt.school's own `/book-a-tour` 404s |

### M4 Builders

| Id | Decision | How applied in M4 |
|---|---|---|
| `DD-04` | In-person versus virtual cue system | Uppercase label + small decorative CSS icon + real photo per door; color secondary |
| `DD-05` | CTA labels and placement | `copy.md` CTAs on the first screen and after the comparison; "Begin application" as the later apply step |
| `DD-08` | Imagery policy | No stock; every photo an existing, published GT photo; neither studio-isolated photo used |
| `DD-10` | Exclusivity cues and limits | No wealth cues; 90th-percentile bar and TEFA stated plainly, not dramatized |
| `DD-13` | Current-families route placement | No phone in the header; only Current families and Contact admissions |
| `DD-14` | Mobile pattern | Doors stack Georgetown-then-Anywhere at mobile; no sticky CTA bar; mobile designed first |
| `DD-19` | Style envelope | Type families and palette fixed; full-bleed photo/photo-strip layout is this mock's free expression |
| `DD-20` | Orientation before choice | Umbrella sentence precedes the doors, above the fold with the photo |
| `DD-21` | Scalable choice component | Doors a real `<ul class="door-list">` on flexbox; a third or fourth entry would wrap, not break the split |
| `DD-23` | CTA repetition and reassurance | "Compare the two" anchors to `#compare`; doors repeat after the comparison |
| `DD-25` | Direct-to-application from the landing | Both apply links carry `?school=` |
| `DD-26` | Visual parity between the doors | Identical card treatment, padding, CTA styling; stable order |
| `DD-27` | Nomenclature and marks | Full names everywhere; Guides, never Advisors, in visible text |
| `DD-31` | Asset dependency declaration | See section 4 below: which photos, why, and the typographic fallback if any is rejected |
| `DD-33` | Decoding "GT" | Umbrella sentence spells out "gifted and talented," sits above the fold with the photo |
| `DD-36` | Twice-exceptional readability | Body copy in Literata; motion is hover-only, fully removed under reduced motion |
| `MD-04` | Value-proposition hierarchy | Umbrella promise → two doors → "what students do" strip → proof, never proof first |
| `MD-13` | Tuition disclosure on the landing | Georgetown "Tuition on request. Ask admissions."; Anywhere the exact $10,400/TEFA sentence — also traced to `REQ-026` |
| `MD-17` | Alpha affiliation prominence | Once, in the hero panel, a smaller weight than the h1 |
| `MD-25` | Access messaging against exclusivity | 90th-percentile bar and TEFA both in the comparison table and proof strip, stated plainly |
| `REQ-011` | First screen minimalist | Above the two door CTAs at 390×844: header, hero photo plus h1 plus provenance line — nothing else |
| `REQ-012` | Physical-versus-virtual distinction unmistakable | Redundant format-and-location cues (label, icon, photo, tint) so choice never depends on the photo alone |
| `REQ-017` | Current-families route before general contact | Header nav; phone footer-only, never above the fold |
| `REQ-018` | Full school names in landing copy | In every door, table header and apply link |
| `REQ-021` | Decode "GT" and affiliation prominence | The h1 decodes "gifted and talented" and names both ways to attend, the same role it carries in M1 and M3 |
| `REQ-026` | Tuition and access stated the same way | Same table row as `MD-13`, both schools, same visual weight |
| `REQ-043` | Proof page with outcome data | Not built; named as the gap for parent question 7 |
| `REQ-070` | Application flows keep working, no wrong-school routing | No `<form>` anywhere; both apply links carry the school parameter |

M4's own `RATIONALE.md` never cites an `MN-` id by number anywhere in its text, even though its Motion spec section describes a real underline-reveal animation — the only one of the five mocks with no motion id cited at all (see the summary table below and section 3). Its Decisions Applied table also never cites `DD-06`, `DD-09`, `DD-11`, `DD-12`, `DD-16`, `DD-17`, `DD-22`, `DD-24`, `DD-28`, `DD-29`, `DD-30`, `DD-32` or `MD-02`, `MD-06`, `MD-10`, `MD-11`, `MD-26` — several of which the mock plainly implements anyway (its shipped `index.html` has the nine-row comparison table, the real logo in header and footer, and the "Already a GT family?" section, and its own Parent Questions table describes the secondary CTAs), so this is a citation gap in the document, not necessarily a content gap in the build.

### M5 One School, Two Campuses

| Id | Decision | How applied in M5 |
|---|---|---|
| `DD-01` | Typography pairing | Literata (h1, panel lines, schedule legend, table cells) + Inter Tight (nav, labels, CTAs) + Inconsolata (proof-strip footnote) |
| `DD-02` | Palette and hero tone | Light hero; `--color-navy`/`--color-surface-alt` untouched |
| `DD-03` | Hero structure | One umbrella sentence, then the two doors — realized as the campus switcher |
| `DD-04` | In-person versus virtual cue system | Label + icon + photo per panel; the two tint tokens double as schedule-bar segment colors |
| `DD-05` | CTA labels and placement | Switch-label doubles as the first CTA; the exact `copy.md` string repeats a few lines below and again after the comparison |
| `DD-06` | Comparison block format and facts | Real `<table>`, shared-then-different row order, with the schedule visual placed just above it |
| `DD-08` | Imagery policy | Existing site photographs only for the two panel cues; no stock |
| `DD-10` | Exclusivity cues and limits | "Admissions" language; no countdowns, no wealth cues |
| `DD-11` | Brand lockup | Real `gt-school-logo-h.svg` (mid-build correction; originally a text wordmark) |
| `DD-12` | Navigation on the landing | Minimal header; nav restructured to `<nav><ul><li>`, reconciling the M1/M4-versus-M2/M3 drift |
| `DD-13` | Current-families route placement | Header link, footer link and footer logo; phone footer-only |
| `DD-14` | Mobile pattern | 390px first; switcher panels stack one column, two columns from 768px |
| `DD-17` | Trust signals | No Cognia mark, no accreditation claim |
| `DD-19` | Style envelope | Type families and the full merged palette used; every raw value listed in section 5 |
| `DD-20` | Orientation before choice | Umbrella sentence sits above the switcher |
| `DD-21` | Scalable choice component | Two real `<ul>`s (`.campus-switcher`, `.doors-repeat`) demonstrate this, not one |
| `DD-22` | Content allocation between landing and school sites | Only what is true of both schools, the differences and the routes |
| `DD-23` | CTA repetition and reassurance | Switcher CTA at the top, "Compare the two" anchor, doors repeated after the table |
| `DD-25` | Direct-to-application from the landing | "Begin application" links per school with `?school=` |
| `DD-26` | Visual parity between the doors | Identical panel markup, sizing and treatment; stable order |
| `DD-27` | Nomenclature and marks | Full names (9 and 13 occurrences); Guides, never Advisors |
| `DD-29` | Type scale and density | Every section carries a real fact; the schedule visual is itself one such device |
| `DD-30` | Jargon policy | "TimeBack," "MAP assessments," "TEFA" appear with `copy.md`'s own plain-language context |
| `DD-31` | Asset dependency declaration | Mock matrix lists "None" — the differentiator (tokens, switcher, schedule) doesn't hinge on any one photo |
| `DD-32` | Current families as a support intent | Header link, footer link and footer logo |
| `DD-33` | Decoding "GT" | H1 spells out "gifted and talented" |
| `DD-34` | The day as the comparison device | This mock's assigned differentiator (`REQ-047`): a CSS bar-and-legend "A day at GT" per school, paired with a visually-hidden accessible table |
| `DD-36` | Twice-exceptional readability | Literata body copy; strict heading order including a visually-hidden h2 for the switcher; reduced motion removes every transition |
| `MD-01` | Primary conversion goal of the landing | Route only, plus the per-school apply link; no lead form |
| `MD-02` | Secondary CTA for the not-yet-ready | FAQ, Talk to admissions, campus tour, virtual info session — all four present |
| `MD-04` | Value-proposition hierarchy | Umbrella promise → campus switcher → comparison (schedule visual first, then the table) → proof strip |
| `MD-06` | Exclusivity signals that are true | 90th-percentile bar stated plainly; no countdowns or fake scarcity |
| `MD-10` | Wrong-school prevention in copy and UI | "In person: Georgetown Campus" / "Online: GT Anywhere" wording appears twice per school |
| `MD-11` | Contact strategy | Admissions contact in header nav; phone footer-only |
| `MD-13` | Tuition disclosure on the landing | Comparison-table row identical to M1: "Tuition on request" / $10,400 + TEFA |
| `MD-17` | Alpha affiliation prominence | One line, once, small, under the h1 |
| `MD-25` | Access messaging against exclusivity | Admissions bar and TEFA module both present on the same page |
| `MD-26` | The TEFA module | Shown to everyone (D-015 option c), exact `copy.md` wording |
| `MN-01` to `MN-15` | Motion (all fifteen) | Consolidated into this mock's own motion-spec table (section 3 below), not itemized per id |
| `MN-05` | State transitions | Trivially satisfied — the switcher and schedule visual have no client-side state to transition; both panels and columns are always in the DOM |
| `REQ-002` | The gt.school `/book-a-tour` fix | "Talk to admissions"/"Book a campus tour" both point to `/contact`, since `/book-a-tour` 404s |
| `REQ-010` | One landing page under the GT School umbrella | The whole mock; cited in the task header's `REQ-010`-to-`REQ-018` range, not elaborated as its own row |
| `REQ-018` | Full school names in landing copy | "Georgetown Campus" × 9, "GT Anywhere" × 13 |
| `REQ-021` | Decode "GT" and affiliation prominence | H1 decodes "gifted and talented"; the header's real logo now carries the brand name a second, visual way |
| `REQ-032` | One shared design system | Header and footer marked `@partial`; every value in `styles.css` is a token; the M1–M4 header/footer markup drift is named and resolved |
| `REQ-047` | "A day at GT" schedule visual | The schedule-visual sub-component described under `DD-34` |

### Summary: which mock applies which id

A check mark means the id is cited by number in that mock's own `RATIONALE.md`. A blank cell means the mock's rationale never cites that id — which is not always the same as the mock not implementing it (see the M4 note above, and the note under the table).

| Id | M1 | M2 | M3 | M4 | M5 |
|---|---|---|---|---|---|
| `DD-01` Typography pairing | ✓ | ✓ | ✓ | | ✓ |
| `DD-02` Palette and hero tone | ✓ | ✓ | ✓ | | ✓ |
| `DD-03` Hero structure | ✓ | ✓ | ✓ | | ✓ |
| `DD-04` In-person vs. virtual cue system | ✓ | ✓ | ✓ | ✓ | ✓ |
| `DD-05` CTA labels and placement | ✓ | | ✓ | ✓ | ✓ |
| `DD-06` Comparison block format and facts | ✓ | ✓ | ✓ | | ✓ |
| `DD-07` Proof and outcomes on the landing | | ✓ | ✓ | | |
| `DD-08` Imagery policy | ✓ | | ✓ | ✓ | ✓ |
| `DD-09` "MIT of K-8" cues and limits | | ✓ | ✓ | | |
| `DD-10` Exclusivity cues and limits | ✓ | | ✓ | ✓ | ✓ |
| `DD-11` Brand lockup | ✓ | ✓ | ✓ | | ✓ |
| `DD-12` Navigation on the landing | ✓ | ✓ | ✓ | | ✓ |
| `DD-13` Current-families route placement | ✓ | ✓ | ✓ | ✓ | ✓ |
| `DD-14` Mobile pattern | ✓ | ✓ | ✓ | ✓ | ✓ |
| `DD-16` Copy voice | | ✓ | ✓ | | |
| `DD-17` Trust signals | ✓ | ✓ | ✓ | | ✓ |
| `DD-19` Style envelope | ✓ | ✓ | ✓ | ✓ | ✓ |
| `DD-20` Orientation before choice | ✓ | ✓ | ✓ | ✓ | ✓ |
| `DD-21` Scalable choice component | ✓ | ✓ | ✓ | ✓ | ✓ |
| `DD-22` Content allocation between landing and school sites | ✓ | | | | ✓ |
| `DD-23` CTA repetition and reassurance | ✓ | ✓ | ✓ | ✓ | ✓ |
| `DD-24` One-question decision helper | ✓ | | ✓ | | |
| `DD-25` Direct-to-application from the landing | ✓ | ✓ | ✓ | ✓ | ✓ |
| `DD-26` Visual parity between the doors | ✓ | ✓ | ✓ | ✓ | ✓ |
| `DD-27` Nomenclature and marks | ✓ | ✓ | ✓ | ✓ | ✓ |
| `DD-28` Evergreen vs. dated content | | | ✓ | | |
| `DD-29` Type scale and density | ✓ | ✓ | ✓ | | ✓ |
| `DD-30` Jargon policy | ✓ | ✓ | ✓ | | ✓ |
| `DD-31` Asset dependency declaration | ✓ | | ✓ | ✓ | ✓ |
| `DD-32` Current families as a support intent | ✓ | | ✓ | | ✓ |
| `DD-33` Decoding "GT" | ✓ | ✓ | ✓ | ✓ | ✓ |
| `DD-34` The day as the comparison device | | | | | ✓ |
| `DD-36` Twice-exceptional readability | ✓ | ✓ | ✓ | ✓ | ✓ |
| `MD-01` Primary conversion goal of the landing | ✓ | | | | ✓ |
| `MD-02` Secondary CTA for the not-yet-ready | ✓ | | ✓ | | ✓ |
| `MD-04` Value-proposition hierarchy | ✓ | ✓ | ✓ | ✓ | ✓ |
| `MD-06` Exclusivity signals that are true | ✓ | ✓ | ✓ | | ✓ |
| `MD-09` UTM and attribution pass-through | | ✓ | | | |
| `MD-10` Wrong-school prevention in copy and UI | ✓ | ✓ | ✓ | | ✓ |
| `MD-11` Contact strategy | ✓ | | ✓ | | ✓ |
| `MD-13` Tuition disclosure on the landing | ✓ | ✓ | ✓ | ✓ | ✓ |
| `MD-14` Geographic personalization | | | ✓ | | |
| `MD-15` Qualification friction | | | ✓ | | |
| `MD-16` Claims governance | | ✓ | ✓ | | |
| `MD-17` Alpha affiliation prominence | ✓ | ✓ | ✓ | ✓ | ✓ |
| `MD-25` Access messaging against exclusivity | ✓ | ✓ | ✓ | ✓ | ✓ |
| `MD-26` The TEFA module | ✓ | | ✓ | | ✓ |
| `MN-01` The job of motion | ✓* | | ✓ | | ✓* |
| `MN-02` Hero entrance | ✓* | | ✓ | | ✓* |
| `MN-03` Door hover, focus and expand | ✓* | | ✓ | | ✓* |
| `MN-04` Scroll-driven reveals | ✓* | | ✓ | | ✓* |
| `MN-05` State transitions | ✓* | | | | ✓ |
| `MN-06` Video in the hero | ✓* | | | | ✓* |
| `MN-07` CTA micro-interactions | ✓* | | ✓ | | ✓* |
| `MN-08` Signature motion per lens | ✓* | ✓ | ✓ | | ✓* |
| `MN-09` Implementation stack | ✓* | | ✓ | | ✓* |
| `MN-10` Performance budget | ✓* | | ✓ | | ✓* |
| `MN-11` Accessibility and reduced motion | ✓* | | ✓ | | ✓* |
| `MN-12` Mobile motion policy | ✓* | | | | ✓* |
| `MN-13` Motion tokens | ✓* | | ✓ | | ✓* |
| `MN-14` Continuity across the hop to a school site | ✓* | | | | ✓* |
| `MN-15` Motion in in-app browsers | ✓* | | | | ✓* |
| `REQ-002` `/book-a-tour` fix | ✓ | | ✓ | | ✓ |
| `REQ-010` One landing page under the umbrella | | | | | ✓ |
| `REQ-011` First screen minimalist | | ✓ | | ✓ | |
| `REQ-012` Physical-vs-virtual distinction unmistakable | ✓ | | | ✓ | |
| `REQ-017` Current-families route before general contact | | ✓ | | ✓ | |
| `REQ-018` Full school names in landing copy | | ✓ | | ✓ | ✓ |
| `REQ-021` Decode "GT" and affiliation prominence | ✓ | ✓ | | ✓ | ✓ |
| `REQ-022` Every quantitative claim traces to the register | | ✓ | | | |
| `REQ-026` Tuition and access stated the same way | | | | ✓ | |
| `REQ-032` One shared design system | | | | | ✓ |
| `REQ-043` Proof page with outcome data | ✓ | | | ✓ | |
| `REQ-047` "A day at GT" schedule visual | | | | | ✓ |
| `REQ-070` Application flows keep working | | ✓ | | ✓ | |
| `REQ-073` Core Web Vitals no worse than today | | ✓ | | | |
| `REQ-074` WCAG 2.1 AA on new pages | | ✓ | | | |

`*` M1 and M5 each cite the full `MN-01` to `MN-15` range in one Decisions Applied row that points to their own motion-spec table (section 3), rather than one row per motion id — reproduced here as check marks across the whole range, distinct from M2's and M3's practice of citing individual `MN` ids one at a time. **M4's entire `MN` row is blank**: its `RATIONALE.md` never cites a motion id anywhere, despite its Motion spec section describing a real underline-reveal animation on hover and focus (see section 3) — the clearest citation gap this matrix surfaces. `REQ` ids are the least consistently cited series: each mock traces a different, mostly non-overlapping subset, which looks like five different builders' citation habits more than five different levels of actual compliance — several blank `REQ` cells (for example `REQ-018` full names, true of all five mocks by their own self-checks) reflect a requirement met without being name-checked, not a requirement missed.

## 3. Motion spec per mock

| Mock | What animates | Trigger | Duration token | Easing token | Reduced motion |
|---|---|---|---|---|---|
| M1 | Link/CTA text color (nav, footer, compare anchor, TEFA link, apply links, secondary CTAs, current-families link, repeated doors) | Hover, focus-visible | `--duration-fast` (100ms) | `--ease-standard` | `transition: none !important` on every element; color and underline still change, instantly |
| M1 | Door CTA button text color (the navy fill itself is static, never animated) | Hover, focus-visible on the whole door card | `--duration-fast` (100ms) | `--ease-standard` | Instant swap |
| M1 | Underline appears/disappears on the same links | Hover, focus-visible | n/a (toggles with the color transition) | n/a | Instant |
| M2 | Nothing by default — motion stance is Static | — | — (no `transition` declared outside the reduced-motion block) | — | Identical; nothing to reduce |
| M2 | Hover/focus color, background, underline on CTAs, nav and secondary-CTA links | `:hover` / `:focus-visible` | none | none | Identical, instant either way |
| M2 | `:focus-visible` outline | Keyboard focus | none | none | Identical |
| M3 | Door-card border color | Hover, keyboard focus-within | `--duration-fast` | `--ease-standard` | Instant; border still changes state |
| M3 | Every CTA/link text color (doors, compare anchor, TEFA link, apply links, secondary CTAs, footer, header) | Hover, `:focus-visible` | `--duration-fast` | `--ease-standard` | Instant |
| M3 | Skip-link reveal | Keyboard focus | `--duration-fast` | `--ease-standard` | Instant; built with `transform: translateY()`, not `top`, to stay inside transform/opacity |
| M4 | Underline reveal (`::after`, `transform: scaleX()`) under nav, compare anchor, TEFA link, secondary CTAs, families link, footer links | `:hover`, `:focus-visible` | `--duration-fast` (100ms) | `--ease-standard` | `transition: none`; the underline still appears on hover/focus, without the reveal motion |
| M4 | Door-card and button background/text-decoration changes | Hover, focus | Plain, non-transitioned property swap — not animated motion | n/a | n/a |
| M5 | Link/CTA text color (utility nav, footer nav, compare anchor, TEFA link, apply links, secondary CTAs, current-families link, switch-label, panel CTA, repeated doors) | Hover, focus-visible | `--duration-fast` (100ms) | `--ease-standard` | `transition: none !important`; color and underline still change, instantly |
| M5 | Underline appears/disappears on the same links | Hover, focus-visible | n/a (toggles with the color transition) | n/a | Instant |

Common to all five: transform and opacity are the only properties ever transitioned (M1/M3's skip-link reveal uses `transform: translateY()`/an instant `top` jump, never a layout-shifting property); the largest element on every page (the h1) and every door/panel photo never animate at rest or on hover; no scroll reveals, no hero entrance, no signature moment (`MN-01`, `MN-02`, `MN-04`, `MN-08`) on any of the five; every mock's own `prefers-reduced-motion: reduce` block removes all transitions in one rule. M2 and M3 are the two mocks with literally nothing moving beyond an instant color/border swap; M1, M4 and M5 add a underline or button-fill state change on the same instant budget.

## 4. Assets and consent

Rows below are the photographs each mock actually renders on the page (a mock's real `DD-31` dependency), one row per photo. Every mock additionally reuses two identical brand assets not tied to any one mock's editorial choice: the real `gt-school-logo-h.svg` header lockup (M1–M3 and M5 link it to `#top`; M4 links it to `/`, see section 6) and, in the footer, both `gt-school-logo-h.svg` and `gt-anywhere-logo-h.svg` as outbound links to the two school sites — unmodified files, no recoloring, no consent question since they are brand marks, not photography. All five also set the same non-rendered `og:image`, `georgetown-campus.webp`, from `copy.md`'s Head table — meta only, never displayed on the page.

| Mock | Image used | Alt text | Source site | Consent status | Fallback (`DD-31`) |
|---|---|---|---|---|---|
| M1 | `georgetown-science.webp` (door photo) | "Students in lab coats run a science experiment with two Guides at the Georgetown Campus" | Mirrored `www.gt.school` assets (Webflow CDN) | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Drop the photo; label + icon + name + line + CTA still carry the cue on the existing tint panel |
| M1 | `anywhere-austin-intensives.webp` (door photo) | "A GT Anywhere student speaks into a microphone beside a classmate during an in-person intensives weekend" | Mirrored `anywhere.gt.school` assets | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Same fallback, on the Anywhere tint |
| M2 | None — zero photographs used anywhere in the page body | n/a | n/a | n/a (no photo to consent) | n/a — `DD-31` dependency is declared "none beyond type"; the door cue is carried by label, icon and text alone |
| M3 | `georgetown-science.webp` (door photo) | "Students in lab coats run a science experiment on the Georgetown campus." | Mirrored `www.gt.school` assets | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Remove the `<img>`; label + icon + school name still carry the cue |
| M3 | `anywhere-austin-intensives.webp` (door photo) | "A GT Anywhere student records in a podcast studio during an in-person intensive." | Mirrored `anywhere.gt.school` assets | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Same fallback |
| M4 | `georgetown-science.webp` (hero) | "Georgetown Campus students in lab coats run a science experiment with beakers and colored bowls." | Mirrored `www.gt.school` assets | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Replace with a tint panel carrying the umbrella sentence in Literata plus an Inconsolata kicker |
| M4 | `georgetown-guide.webp` (Georgetown door photo) | "A Guide teaches a lesson at the whiteboard in a Georgetown Campus classroom." | Mirrored `www.gt.school` assets | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Icon + label + tint only |
| M4 | `anywhere-austin-intensives.webp` (Anywhere door photo) | "A GT Anywhere student records in a podcast studio during an in-person intensive weekend." | Mirrored `anywhere.gt.school` assets | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Icon + label + tint only |
| M4 | `georgetown-dscf1931.webp` (strip 1) | "A close-up of a student's hands solving a fraction problem with a marker." | Mirrored `www.gt.school` assets | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Bordered text tile, "Solving a fraction problem" |
| M4 | `georgetown-student-writing.webp` (strip 2) | "A student bends over a table, writing intently with a marker." | Mirrored `www.gt.school` assets | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Bordered text tile, "Writing intently at a table" |
| M4 | `gtschool-3993.webp` (strip 3) | "Two students lean on a counter talking, with tablets nearby." | Mirrored `anywhere.gt.school` assets | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Bordered text tile, "Talking together at a shared counter" |
| M4 | `anywhere-academics.webp` (strip 4) | "A student helps a younger classmate write at a desk." | Mirrored `anywhere.gt.school` assets | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Bordered text tile, "Helping a younger classmate write" |
| M5 | `georgetown-guide.webp` (Georgetown panel photo) | "A Guide teaches a lesson at the whiteboard while students work at their desks on the Georgetown Campus" | Mirrored `www.gt.school` assets | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Drop the photo; switch-label icon, cue and CTA still carry the door on the existing tint panel |
| M5 | `anywhere-academics.webp` (Anywhere panel photo) | "A GT Anywhere student helps a younger classmate write at a desk during an in-person intensives weekend" | Mirrored `anywhere.gt.school` assets | Published by GT on its own site; consent to be confirmed by Nari (AD-11) | Same fallback, on the Anywhere tint |

Every photograph used avoids `ASSETS.md`'s two "looks like stock photography" files (`anywhere-student-home.webp`, `georgetown-kid-writing.webp`) and its three named repeated-coverage clusters (the ribbon-cutting pair; the four-photo standing-desk/laptop cluster; the `anywhere-academics-left`/`georgetown-support` pair — `anywhere-academics.webp`, used by M4 and M5, is a different file from `anywhere-academics-left.webp`, confirmed in that cluster). `georgetown-science.webp` and `anywhere-austin-intensives.webp` are two of `ASSETS.md`'s three "strongest hero candidates" and are used by three mocks each (M1/M3/M4 and M1/M3/M4 respectively) without exceeding one use per mock. M4's own Assets table separately calls its logo file a "placeholder wordmark," but the file it actually ships (`gt-school-logo-h.svg`, confirmed in its `index.html`) is the same real logo mark the other four mocks use post-fix-pass — a stale label in the prose, not a different asset.

## 5. Departures from the token envelope (`DD-19`)

| Mock | Departure | Reason | Nari accepts or rejects at G1 |
|---|---|---|---|
| M1 | None | M1's own audit: no color, font, spacing, radius, shadow or motion-duration value in `styles.css` falls outside `tokens.css`; the raw values that remain (a 768px breakpoint, hairline border widths, letter-spacing) exist only where `tokens.css` defines no token at all, not as a substitute for one | Pending (G1) |
| M2 | Real logo files (`gt-school-logo-h.svg`, `gt-anywhere-logo-h.svg`) carry their own fixed colors (`#002A3A`, `#E48B53`, white) in the header and footer, unmodified | Brand-continuity instruction: the marks live inside a pre-existing asset file, not `styles.css`; M2 frames this as a bounded exception, not a new token departure | Pending (G1) |
| M2 | Inconsolata used for more roles than the baseline system assigns it | `1_spec/04` section 2 assigns Inconsolata only to "data labels, footnote markers"; M2 also uses it for the comparison table's row/column headers and the step counters — M2's own named, deliberate departure | Pending (G1) |
| M3 | Navy footer surface: `background: var(--color-navy)`, `color: var(--color-accent-contrast)` on the footer | Taken up on the brief's own invitation to use `--color-navy` as "a dark first-screen or footer surface, flag it as a brand extension"; chosen as the footer, not the first screen, to keep the routing choice at maximum legibility | Pending (G1) |
| M4 | Uses `--color-anywhere-tint` as the GT Anywhere door's secondary background | The token itself already carries a flag inside `tokens.css` ("DEPARTURE flagged for G1… neither site has it today"); M4 is consuming an existing S3-era decision, not introducing a new one, but surfaces it "for visibility" | Pending (G1) |
| M5 | None | M5's own audit: no color, font, spacing, radius, shadow or duration value in `styles.css` falls outside `tokens.css`; the `nav > ul > li > a` header/footer structure and the switch-label/panel-CTA redundant link are named as deliberate compositional choices, not DD-19 departures | Pending (G1) |

`--color-anywhere-tint` and `--color-georgetown-tint` are the one token pair flagged inside `tokens.css` itself, independent of any single mock; M1 and M5 also use them (as the door/panel tint backgrounds) without separately re-flagging the point the way M4 does. `--color-navy` is the other pre-flagged token (`tokens.css`: "dark sections and M3's dark variant; flagged as a brand extension"); only M3 uses it as a visible surface among the five. No mock introduces a new color, typeface, radius or shadow value that `tokens.css` does not already define.

## 6. Flagged slots

| Slot | Q id | Default shown | Same in all five? |
|---|---|---|---|
| Lockup image | `Q-001` | Real `gt-school-logo-h.svg` mark, pending Holly's unifying element | Yes for the image. No for its destination link — M1, M2, M3 and M5 link it to `#top`; **M4 links it to `/`**, a root path that would leave the mock entirely if served from its own folder |
| Current families link | `Q-002` | `https://community.gt.school`, unconfirmed | Yes |
| Application steps | `Q-007` | Four generic steps, identical for both schools | Yes |
| Comparison row content | `Q-008` | Rows exactly as `copy.md` section 3 gives them | Yes in content; only M2 and M3 name `Q-008` as its own flagged-slot row — M1, M4 and M5 don't list it separately |
| Georgetown tuition | `Q-011` | "Tuition on request. Ask admissions." (interim wording, decided at G0.5 item 4) | Yes in content; M2, M3 and M4 flag it explicitly as interim pending a real figure — M1 and M5 ship the identical wording without a separate flag row |
| After 8th grade | `Q-013` | "Families plan the path after 8th grade with admissions." | Yes |
| Intensives logistics | `Q-017` | "Four intensive weekends a year in Georgetown," no further logistics | Yes |
| Proof/outcome figure | `Q-019` | Withheld entirely; the proof strip carries four register-backed facts instead | Yes |
| TEFA window, owner, expiry | `Q-021` | Module shown to everyone with the fixed `copy.md` wording; no window stated | Yes |
| Accreditation | `Q-033` | No statement, no mark, anywhere | Yes |
| Adults' title (Guides vs. Advisors) | `Q-035` | "Guides" in all visible text; "advisor" only as the sanctioned `data-type="advisor"` attribute | Yes |
| "Talk to admissions" / "Book a campus tour" / "Join a virtual info session" destinations | `MD-02` | `/contact` or the Anywhere homepage; no HubSpot meeting link or working `/book-a-tour` yet | Yes |

## 7. Parent questions (`PQ-01` to `PQ-14`)

M1 to M4's own `RATIONALE.md` files test against the eight-question list in `1_spec/01-users-and-journeys.md` section 5, which predates the fourteen-item `PQ-01` to `PQ-14` list `0_plan/05-landing-mockups-plan.md` section 6c added as an E2 amendment; only M5's rationale was written directly against the newer numbering. Cells below for M1 to M4 on `PQ-05`, `PQ-08`, `PQ-09`, `PQ-11`, `PQ-12`, `PQ-13` and `PQ-14` are drawn from the `copy.md` content those mocks confirm they render identically to M5 — the comparison table's nine rows, the proof strip, the secondary-CTA section, the current-families section and the provenance line — cross-checked directly in each mock's shipped `index.html` (the "Already a GT family?" section and the "Alpha School network" line both appear in all five), not from a same-numbered question in their own rationale text.

| PQ | Question | M1 | M2 | M3 | M4 | M5 |
|---|---|---|---|---|---|---|
| `PQ-01` | What is GT School? | page | page | page | page | page |
| `PQ-02` | Is it for my child? | page | page | page | page | page |
| `PQ-03` | In person or online: what are my options? | page | page | page | page | page |
| `PQ-04` | Where is the campus? | page | page | page | page | page |
| `PQ-05` | What does a day look like? | page | page | page | page | page (†) |
| `PQ-06` | What does it cost, and can TEFA help? | page | page (‡) | page (‡) | page (‡) | page |
| `PQ-07` | How do I apply? | page | page | page | page | page |
| `PQ-08` | Who teaches my child? | page | page | page | page | page |
| `PQ-09` | How much in-person time does GT Anywhere have? | page | page | page | page | page |
| `PQ-10` | What results does the school get, and is it accredited? | silent | silent | silent | silent | silent |
| `PQ-11` | What happens after 8th grade? | page (§) | page (§) | page (§) | page (§) | page (§) |
| `PQ-12` | I am a current family, where do I go? | page | page | page | page | page |
| `PQ-13` | I am not ready to apply, what can I do? | page | page | page | page | page |
| `PQ-14` | Is GT School part of Alpha School? | page | page | page | page | page |

`PQ-10` is deliberately silent everywhere by G0.5 decisions 2 and 3 (no outcome figure, no accreditation claim, on any new surface until `Q-019`/`Q-033` close): every mock's own rationale says so explicitly, and none of the five has a proof page (`REQ-043`) to defer to yet — the nearest one-click destination (the Anywhere FAQ) does not itself address the question, so this is classified "silent," not "deferred."

(†) M5 is the only mock built with a dedicated "A day at GT" schedule visual (`DD-34`, `REQ-047`); its own rationale calls this "where M5 answers it best of the five mocks." M1 to M4 answer the same question with the shared comparison table's "The day" row alone.

(‡) M2, M3 and M4's own rationale documents grade this question "Partly," not "Yes," because Georgetown's own tuition figure is not yet published — the comparison row reads "Tuition on request. Ask admissions." GT Anywhere's $10,400/TEFA figure is fully disclosed in every mock. Classified "page" here because the referral text itself is shown directly on the page, not behind a click; M1 and M5's own rationale grade the identical underlying content "Yes."

(§) The comparison row states the deferral directly on the page ("Families plan the path after 8th grade with admissions"), rather than leaving the question unaddressed or requiring a click.

## 8. Known inconsistency resolved

`copy.md`'s door-1 line ("two hours of mastery academics each morning") and its comparison-table "The day" row ("Mornings from 9 to noon") read as a three-versus-two-hour contradiction when M5 was built on 2026-09-10 — M5's own rationale flags it explicitly as still open at that point, "worth Nari's or Crystal's attention when Q-007/Q-008 close." The wording was reconciled later the same day against gt.school's academics page (two 50-minute blocks and one 25-minute block, 9 am to noon) and Anywhere's own "two to three hours": the comparison row now reads "Mornings from 9 to noon: about two hours of focused academics in TimeBack blocks, with structured breaks," which nets to roughly two hours of instruction inside the three-hour window, the rest as structured breaks. All five mocks' shipped `index.html` files carry this reconciled sentence verbatim (confirmed directly by inspection, not only by `copy.md`'s own timestamp), including M5's, even though its `RATIONALE.md` text predates the fix and still describes the discrepancy as open.
