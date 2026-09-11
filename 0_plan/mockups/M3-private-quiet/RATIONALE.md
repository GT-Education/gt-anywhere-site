# M3 Private Quiet — rationale

| Field | Value |
|---|---|
| Mock | M3 Private Quiet |
| Lens order | L4 elite, L2 existing system, L1 objective, L3 mission |
| Task | T-044, `1_spec/03-landing-page-spec.md` section 12 |
| Files | `index.html`, `styles.css`, this file |

## Direction

Hypothesis: prestige is read through restraint, not through ornament. Large Literata
type, generous whitespace, hairline borders, a single deep-blue link color, and plain
"Admissions" register carry the L4 (elite, private, exclusive) lens; the merged token
set and the shared component vocabulary (door list, comparison table, proof strip,
footer facts) carry L2 (continuity with the existing design system); the two doors and
the comparison and application-steps sections still do the L1 job (fast, correct
routing); L3 (mission, "MIT of K-8") shows up only as fact density (DD-29), never as
Inconsolata data-grid texture — that register belongs to M2.

The first screen serves this by doing less, not more. Above the two door cards there is
only the header, the umbrella sentence set in large Literata, and the one-line
provenance note (rule 8) — no color block, no stat count-up, no full-bleed photograph.
The two door cards themselves are the quietest version of DD-04's cue set the rules
allow: a small identifying photograph, a plain label with a one-color line icon, the
school name in the same serif as the h1, one calm sentence, and a CTA that is a
text link with a permanent underline rather than a filled button. Nothing on the page
moves except an instant color or border-color change on hover and focus (motion spec
below). The known risk named
in the brief — "big type over thin content reads empty" — is answered by DD-29: every
section below the fold is a real, sourced fact (the comparison table, the four proof
facts, the four application steps, the footer facts block), not decorative type.

## h1

The h1 is the umbrella sentence: "GT School is a selective school for gifted and
talented children, in person at our Georgetown, Texas campus or online from anywhere."
It is the only sentence on the page that must be read before anything else resolves —
it decodes "GT" (DD-33) and names both ways to attend (DD-20) — so in a
restraint-led direction the single largest, quietest typographic gesture on the page
should land on the single most load-bearing sentence, not on a slogan the page doesn't
have or on either school's name. The two door names ("Georgetown Campus", "GT
Anywhere") are h2s, subordinate to it; "Compare the two schools," "What is true of both
schools," "How to apply," "Other ways to connect," and "Already a GT family?" are the
remaining h2s, one per major section, so the whole page reads correctly in a screen
reader's heading list. "Texas families" (the TEFA module) is an h3, nested under the
comparison section's h2.

## Decisions applied

| Id | How it is applied in this mock |
|---|---|
| DD-01 | Literata (serif) is the reading-text default (`body`'s own `font-family`) — body copy, door lines, table cells (headers and data), facts, steps, footer facts; Inter Tight (sans) is scoped explicitly to labels, navigation and CTAs — utility nav, the door format label, every CTA/link (door, compare anchor, TEFA, apply, secondary, quiet-link, footer nav, skip link); Inconsolata used twice only, for the two "Compare" / "Admissions" kickers and the footnote/step numerals (its spec role: "data labels, footnote markers") |
| DD-02 | Light hero (cream `--color-bg`) for legibility on phones outdoors; the footer is the one dark-surface use, flagged under DD-19 below |
| DD-03 | One umbrella sentence, then two doors, exactly as specified |
| DD-04 | Label + icon (inline SVG, `aria-hidden`) + photo per door; the photo is a small square identifier rather than a banner — see Departures |
| DD-05 | "Explore the Georgetown campus" / "Explore GT Anywhere" on the first screen, repeated (compact) after the comparison, plus separate "Begin application" links in the steps section |
| DD-06 | Comparison as a real `<table>`, shared rows first, then differences, in the exact row order `copy.md` gives |
| DD-07 | No outcome figure; the proof strip carries four register-backed facts instead, each footnoted by the strip's own citation line |
| DD-08, DD-31 | Only existing, published photographs used (see Assets); no stock |
| DD-09 | Rigor shown as sourced fact, not jargon or a cold data-grid register (that is M2's job) |
| DD-10 | "Admissions" language; the 90th-percentile bar is stated plainly (continuity, not a new claim); no wealth cues; quiet CTAs still verified for AA contrast (see Self-check) |
| DD-11 | Umbrella "GT School" lockup at the top, in Literata; no second logo |
| DD-12 | Minimal header: lockup, "Current families," "Contact admissions" — no menu |
| DD-13, DD-32 | "Current families" in the header (linking to the hub) and repeated as its own section with a support sentence; no phone number above the fold — the phone is footer-only |
| DD-14 | Built mobile-first; doors stack at 390px, sit side by side from 768px |
| DD-16 | Voice is exactly `copy.md`'s wording — institutional, warm, short sentences — nothing paraphrased |
| DD-17 | No accreditation claim, no Cognia mark, anywhere on the page (Q-033 open) |
| DD-19 | Style envelope respected: only tokens.css values for color/font/space/radius/duration, with the departures named below, most notably the navy footer |
| DD-20, DD-33 | Umbrella sentence decodes "gifted and talented" and both ways to attend before either door |
| DD-21 | Doors are `<ul><li>` in both places they appear (first screen and after the comparison), so a third or fifth campus is a new `<li>`, not a rebuild |
| DD-23 | "Not sure? Compare the two" anchor near the top; doors repeated (compact) beneath the comparison table |
| DD-25 | "Begin application" links per school in the steps section, each carrying `?school=` |
| DD-26 | Both doors identical in markup, size and treatment; default order Georgetown then Anywhere |
| DD-27 | "Georgetown Campus" and "GT Anywhere" used in full everywhere; never abbreviated |
| DD-28 | No dated content on the page except the proof-strip's own "checked" citation date and the TEFA module, which `copy.md` already scopes as the one owned, expiring exception |
| DD-29 | Every section carries at least one sourced fact — see Direction above |
| DD-30 | Plain words first throughout; no unexplained jargon |
| DD-36 | Literata for all body reading text (the `body` default, not an inherited Inter Tight — see DD-01 and rule 11); strict heading structure; motion limited to opacity/transform, color and border-color state changes instant |
| MD-02 | Four secondary CTAs (FAQ, admissions, tour, info session) for the not-yet-ready visitor |
| MD-04 | Order is umbrella promise, then two ways to attend, then proof — never proof first |
| MD-06 | No countdowns, no manufactured scarcity; the only "exclusivity" signal is the stated 90th-percentile bar |
| MD-10 | Explicit "In person" / "Online" labels plus full school names on every door and CTA, to cut wrong-school clicks |
| MD-11, DD-13 | Admissions contact in the header; phone in the footer only |
| MD-13 | Tuition and access stated for both schools in the same table row, Georgetown reading "Tuition on request" (Q-011 decided default) |
| MD-14 | Default door order only; no geolocation reordering (out of scope for a static mock regardless) |
| MD-15 | No eligibility gate; the 90th-percentile bar is stated as information, not enforced |
| MD-16 | No figure or claim appears that is not in `copy.md`; nothing footnoted to anything but the register |
| MD-17 | One provenance line, once, small, exactly as `copy.md` gives it |
| MD-25 | Selectivity (90th percentile) and access (TEFA, $10,400) both stated in the same comparison row, never one without the other |
| MD-26 | TEFA module shown to everyone (v1 default, D-015 option c), scoped to "Texas families" in its own heading |
| MN-01, MN-08 | No signature animation; the mock differs from the others through layout, density and typography only |
| MN-02, MN-04 | No hero entrance, no scroll reveals; everything is visible on load |
| MN-03 | Door cards keep static dimensions; only `border-color` changes on hover/focus-within, instantly — no transition (rule 6) |
| MN-07 | No hover text-swap; CTA text is stable, only its color changes, instantly — no transition (rule 6) |
| MN-09 | CSS only; no JavaScript, no IntersectionObserver |
| MN-10, MN-13 | Only `--duration-fast` and `--ease-standard` used, and only on `transform`/`opacity` (skip-link reveal, lockup and footer-logo-link hover); color and border-color state changes are instant, never anything that would shift layout |
| MN-11 | `prefers-reduced-motion: reduce` removes every transition in one rule |
| DD-24 | No decision helper (v1 default); doors carry the full routing job alone |
| SE-13 | `noindex, nofollow` in the head, as on every mock |

## Motion spec

| What animates | Trigger | Duration token | Easing token | Reduced-motion behavior |
|---|---|---|---|---|
| Lockup opacity | Hover | `--duration-fast` | `--ease-standard` | Instant (no interpolation) |
| Footer logo link opacity | Hover | `--duration-fast` | `--ease-standard` | Instant |
| Skip-link reveal | Keyboard focus | `--duration-fast` | `--ease-standard` | Instant; implemented with `transform: translateY()` only, never `top`, so it stays inside the transform/opacity rule |

Every other state change on the page — the door card's border color; every CTA/link
text color (doors, compare anchor, TEFA link, apply links, secondary CTAs,
current-families link, footer links, header links); and the footer's focus-outline
color — carries no `transition` property at all (rule 6 tightened the budget to
`transform` and `opacity` only), so these changes are instant, not interpolated.
Nothing else animates: no scroll reveal, no hero entrance, no lift or scale on the
doors (MN-03), no signature moment (MN-08). The largest image (the door photos) and
the h1 never animate, satisfying rule 10's last clause directly.

## Assets

| File | Used for | Alt text | Source / consent | Fallback if rejected |
|---|---|---|---|---|
| `georgetown-science.webp` (1440×1208) | Georgetown door cue photo | "Students in lab coats run a science experiment on the Georgetown campus." | Published by GT on its own site, consent to be confirmed by Nari (AD-11) | Remove the `<img>`; the label + icon + school name still carry the cue (DD-31) |
| `anywhere-austin-intensives.webp` (1080×1163) | GT Anywhere door cue photo | "A GT Anywhere student records in a podcast studio during an in-person intensive." | Published by GT on its own site, consent to be confirmed by Nari (AD-11) | Same: remove the `<img>`, the card still reads correctly without it |
| `gt-school-logo-h.svg` (139×32 viewBox) | Header lockup (linking to `#top`) and the "Georgetown Campus" footer link | "GT School" | The real logo file from the mirror, no recoloring | If rejected, the `.lockup`/footer link falls back to a plain text label with no other markup change |
| `gt-anywhere-logo-h.svg` (252×48 viewBox) | "GT Anywhere" footer link | "GT Anywhere" | The real logo file from the mirror, no recoloring | Same fallback: plain text label |

Both photos are the two "strongest large images" the coordinator's asset note named, and
neither belongs to a "same session, don't pair" cluster in `ASSETS.md`, so using them
together is clean. Neither is on the avoid list (`anywhere-student-home.webp`,
`georgetown-kid-writing.webp`), and `georgetown-crowd.webp` (baked-in banner/QR) is not
used anywhere on the page. The Open Graph image (`georgetown-campus.webp`) is a
meta-tag reference only, never rendered on the page, and is fixed by `copy.md`'s Head
table identically across all five mocks, so it is unaffected by the "don't pair
same-session photos" guidance (which is about images actually displayed together). Both
door photos are treated as first-screen images (rule 13): no `loading`/`decoding`
attributes, since lazy-loading an above-the-fold image can itself delay it. `width`
and `height` are each image's real intrinsic pixels, so the browser reserves the
correct box before the file arrives (CLS 0).

No other photograph is used anywhere on the page. The direction's asset dependency
(1_spec/03 §10 said "None" for M3, before `copy.md`'s cue-set correction) is now these
two door photos plus the two real logo files (brand-continuity note) — see Departures.

Both logo SVGs are used exactly as shipped, with no recoloring or filters. Checked
directly against their source: `gt-school-logo-h.svg` fills part of its mark
`#002A3A` — the same value as `--color-navy` — so on the navy footer that portion
would be invisible (0:1 contrast, navy on navy). Rather than recolor the logo, the
Georgetown footer logo link sits on a small `var(--color-bg)` panel
(`.footer-logo-link[data-school="georgetown"]`), so every color in the mark reads
exactly as designed. `gt-anywhere-logo-h.svg` (white and `--color-accent` orange)
reads fine directly on navy — the earlier build also gave it a light panel "for
visual consistency," which E2 finding 18 flagged as making the white lettering hard
to distinguish, so its link now gets an explicit `var(--color-navy)` panel instead
(`.footer-logo-link[data-school="anywhere"]`), the same surface as the footer itself,
kept as its own rule for consistency with the Georgetown treatment rather than for a
visible edge. The header logo needs no such panel — its only colors (orange, navy)
both read clearly on the light `--color-bg` first screen.

## Claims register tags

Every figure on the page, tagged with its `0_plan/12-claims-register.md` id and
status. All six carry status "Unverified, public" (`copy.md` section 4: cleared to
show in a mock, not yet approved for production — Nari's approval is T-053).
`1_spec/tools/check-claims.py index.html` confirms this mechanically; the counts
below are its own output.

| Figure as shown on the page | Where | CR id | Count | Status |
|---|---|---|---|---|
| "90th percentile" | Comparison "Admissions" row; proof strip fact 1; steps intro line | CR-011 | 3 | Unverified, public |
| "$10,400 a year" | Comparison "Tuition and access" row, GT Anywhere cell | CR-021 | 1 | Unverified, public |
| "four in-person weekends" / "Four intensive weekends" | Door 2 line; comparison "In-person time" row, GT Anywhere cell | CR-032 | 3 | Unverified, public |
| "9 to noon" / "about two hours" | Comparison "The day" row, Georgetown cell | CR-033 | 2 | Unverified, public |
| "Two to three hours" | Comparison "The day" row, GT Anywhere cell | CR-034 | 1 | Unverified, public |
| "check-in every week" | Comparison "Guides" row, GT Anywhere cell; proof strip fact 3 | CR-035 | 2 | Unverified, public |

No other figure appears on the page (Self-check rule 5). Every register row above is
still Unverified — a mock may show them (G0.5), but none may reach production until
Nari signs off (T-053, REQ-022).

## Departures

| Departure | Value | Reason |
|---|---|---|
| Navy footer surface | `background: var(--color-navy)`, `color: var(--color-accent-contrast)` on `.site-footer` | The brief's explicit invitation: "may use `--color-navy` as a dark first-screen or footer surface, flag it as a brand extension (DD-19)." Chosen as the footer, not the first screen, so the ten-second routing choice keeps maximum legibility (DD-02's light-hero reasoning); the dark footer instead gives the page a quiet, confident close, bookending the restraint direction. `--color-accent` (orange) is used for footer link hover only, verified at 5.8:1 against navy (see Self-check) |
| 1_spec/03 §10 vs. `copy.md`'s corrected cue set | M3's row in `1_spec/03` section 10 still reads "Asset dependency (DD-31): None" | `copy.md`'s Section 1 cue-set row was corrected mid-build (with `ASSETS.md` added) to require one photo per door on *every* mock, M1–M5. I followed the corrected `copy.md` + `ASSETS.md` + the coordinator's direct asset guidance as authoritative over the older, now-stale `1_spec/03` §10 cell. Flagging so whoever reconciles the planning docs updates that row rather than reading it as a live contradiction |
| Compact "thumbnail beside label" cue set, not a banner photo | `.door-photo` is `var(--space-8)` (64px) square at 390px, growing to `var(--space-9)`/`var(--space-10)` at wider breakpoints | DD-04 specifies "label plus icon plus photo" but not size or placement. A full-width banner photo at any height I could justify (tested at 128px) pushed the two-door first screen roughly 200px past the 390×844 budget in a worked calculation (below). Sizing the photo as a small square identifier next to the label, rather than a banner above it, keeps both doors' CTAs inside the fold while still giving each door a real, distinct photograph — consistent with "understated cards" |
| `min-height: 2.75rem` (44px) on every tap target | ~13 rules across nav, CTAs, footer links, skip-link, lockup | Not a token — `tokens.css` has no tap-target scale — but the literal WCAG 2.5.5 / rule 11 minimum (44px), applied uniformly. A functional accessibility floor, not a brand or size choice |
| Border and outline widths: `1px` (hairlines), `2px` (facts-list accent border, focus outline, outline-offset) | Various | `tokens.css` defines no border-width scale (only radius, shadow, space). These are the minimal functional hairline/focus values, unchanged from what a design system with no such token would need regardless of direction |
| `text-underline-offset: 0.2em` on every quiet CTA | ~9 rules | No token exists for underline offset; a small, standard typographic refinement so the permanent underline sits clear of descenders, not a color/size/brand choice |
| `z-index: 1` on the skip-link | One rule | `tokens.css` does not actually define the `--z-header`/`--z-overlay` tokens that `1_spec/04-design-system-spec.md` section 2 describes as planned; with no token to reference, the minimal value needed to lift the skip-link above the header on focus was used directly |

No color, font-family, spacing, radius, or duration value anywhere in `styles.css` is a
raw literal outside these named exceptions — every other declaration is a
`var(--...)` from `tokens.css` (verified mechanically, see Self-check).

## Flagged slots

| Slot | Q id | Default shipped in this mock |
|---|---|---|
| Lockup | Q-001 | The real `gt-school-logo-h.svg` mark (one of `copy.md`'s own two sanctioned options for this slot, the other being a Literata wordmark), per Johnny's brand-continuity note; Holly's own, purpose-built element is still pending |
| Current families link (header and its own section) | Q-002 | Linked to `https://community.gt.school` as `copy.md` gives it |
| Application steps | Q-007 | The four generic steps from `copy.md`, unchanged |
| Comparison row content | Q-008 | Rows exactly as `copy.md` gives them |
| Georgetown tuition | Q-011 (decided, G0.5 item 4) | "Tuition on request. Ask admissions." — interim wording until Nari supplies a figure |
| After 8th grade | Q-013 | The one shared sentence from `copy.md`, identical in both cells |
| Intensives logistics | Q-017 | "Four intensive weekends a year in Georgetown," no further logistics detail added |
| Proof / outcome figure | Q-019 | Withheld entirely; the proof strip carries four register-backed facts instead, no multiplier |
| TEFA window, owner, expiry | Q-021 | Module shown with `copy.md`'s default wording; no specific window or expiry date is stated because none was supplied |
| "Talk to admissions" destination | MD-02 | Points to `/contact`; a HubSpot meeting link is still TBD |
| "Ask about a campus tour" destination | REQ-002 | Points to `/contact`, since gt.school's own `/book-a-tour` 404s; label reworded to match the destination (E2 finding 15) |
| "Ask about a virtual info session" destination | E2 finding 15 | Points to `/contact` (no session-specific registration link exists); label reworded to match the destination rather than promising a booking flow |
| `school=` parameter on apply links | DD-25 | Convention only; the live `apply.gt.school` parameter name is confirmed in S5 |
| Accreditation | Q-033 | Not shown anywhere on the page |
| Parent quote | Q-034 | Not used at all (no quote appears on the page, so no unverified-subject risk) |
| Adults' title | Q-035 (decided) | "Guides" used everywhere; "advisor" appears once, only as the `data-type="advisor"` attribute value the spec allows (rule 6) |

## Parent questions (`0_plan/05-landing-mockups-plan.md` section 6c)

| # | Question a parent arrives with | Answered by M3 | Where / one click to |
|---|---|---|---|
| PQ-01 | What is GT School? | Page | The h1 (umbrella sentence) |
| PQ-02 | Is it for my child? | Page | "gifted and talented children" in the h1; "90th percentile and above" in the proof strip and the steps intro |
| PQ-03 | In person or online: what are my options? | Page | The two doors: label ("In person" / "Online"), photo, name, one line each |
| PQ-04 | Where is the campus? | Page | Door 1 line and the comparison "Where and how" row: Georgetown, Texas |
| PQ-05 | What does a day look like? | Page | Comparison "The day" row |
| PQ-06 | What does it cost, and can TEFA help? | Page | Comparison "Tuition and access" row and the TEFA module |
| PQ-07 | How do I apply? | Page | "How to apply" section: four steps, then a "Begin application" link per school |
| PQ-08 | Who teaches my child? | Page | Comparison "Guides" row; proof strip fact 3 |
| PQ-09 | How much in-person time does GT Anywhere have? | Page | Comparison "In-person time" row |
| PQ-10 | What results does the school get, and is it accredited? | Silent by G0.5 decisions 2 and 3; admissions answers it | Nothing on the page states an outcome figure or an accreditation status (Q-019, Q-033 both open); "Talk to admissions" and the header "Contact admissions" are the one-click path to the human who answers this |
| PQ-11 | What happens after 8th grade? | Deferred to admissions | Comparison "After 8th grade" row: "Families plan the path after 8th grade with admissions" (Q-013) |
| PQ-12 | I am a current family, where do I go? | Page | Header "Current families" link; "Already a GT family?" section |
| PQ-13 | I am not ready to apply, what can I do? | Page | "Other ways to connect" section (FAQ, talk to admissions, tour, info session) |
| PQ-14 | Is GT School part of Alpha School? | Page | The provenance line under the h1 |

## Self-check

**Rule 1 (no form/input/submit).**
`grep -c "<form" index.html` → `0`. `<input>` → `0`. `type="submit"` → `0`.

**Rule 2 (one `<script>`, JSON-LD only).**
`grep -c "<script" index.html` → `1` (the JSON-LD block; no other script tag exists).

**Rule 3 (no external requests beyond `../shared/*` and `/assets/...` fonts).**
Every `http`/`https` occurrence in `index.html` is either an `href`/`url` to
`gt.school`, `www.gt.school`, `anywhere.gt.school`, `apply.gt.school`, or
`community.gt.school`, or the JSON-LD `"@context": "https://schema.org"` string (a
vocabulary identifier, not a network request — no script fetches it). No Google Fonts
link, no CDN script, no hotlinked image. `styles.css` contains zero `url()` calls of
its own — it only consumes tokens and lets the two `<link>` tags in `index.html`
(`../shared/tokens.css`, `../shared/fonts.css`) do the loading, and `fonts.css` itself
resolves its `/assets/...` paths against the server root, confirmed by `curl` (below).

**Rule 4 (verbatim copy, no placeholder text).**
`grep -ni "lorem\|TBD\|placeholder\|\[.*\]\|xxx\|TODO" index.html` → no matches. Every
fixed slot is copied verbatim from `copy.md`; every flagged slot ships with the stated
default (table above), never with placeholder text.

**Rule 5 (only the six register numbers).**
`grep -oE "[0-9]+" index.html`, with markup (SVG `viewBox`/`path` coordinates, `<img>`
`width`/`height`, the viewport `initial-scale=1`) set aside, leaves exactly these
content numbers, each traced to its line:

| Number | Count | Source |
|---|---|---|
| `90` | 3 | "90th percentile" — comparison Admissions row, proof strip fact 1, steps intro line (CR-011) |
| `10`, `400` | 1 each | "$10,400" — comparison Tuition and access row, Anywhere cell (CR-021) |
| `9` | 1 | "9 to noon" — comparison "The day" row, Georgetown cell (CR-033) |
| `8` | 4 | "8th grade" — proof strip fact 4, footer facts block, and the comparison "After 8th grade" row header + cell. Verbatim `copy.md` text (Section 4, Section 8, Section 3), not a marketing claim; not in rule 5's summary phrase but not an invented figure either |
| `2026`, `09`, `10` | 2 each | The sources line's citation date, "Checked 2026-09-10," verbatim from `copy.md` Section 4 — it now appears twice (under the proof facts and again under the comparison table, shared fix 5) |
| `512`, `270`, `9481` | 1 each | The footer contact number "(512) 270-9481," verbatim from `copy.md` Section 8 |

No speed figure, no SAT figure, no cohort size, and no accreditation mark appear
anywhere. The four application steps are an `<ol>` with browser-rendered numbering
(CSS counters), so their "1/2/3/4" never exists as a literal digit in the HTML source.

**Rule 6 (Guides, never "advisor" as visible text).**
`grep -ni "advisor" index.html` → one hit, `data-type="advisor"` on the "Talk to
admissions" link — the one attribute value the rule itself allows. The visible word is
always "Guide"/"Guides."

**Rule 7 (full school names).**
"Georgetown Campus" appears 7 times, "GT Anywhere" 13 times (re-measured after the
footer's two scoped "Apply: <school>" links replaced the single unscoped "Apply"
link, shared fix 2); neither school name is ever abbreviated.

**Rule 8 (both CTAs above the fold at 390×844, only header + h1 + provenance above
them).** Nothing but the header, h1, and provenance line sits above the doors — no
extra element, no helper (DD-24 keeps the helper out of v1). A worked budget at 390px,
using the actual CSS values (not the browser, since this task does not permit
Playwright):

| Block | Height |
|---|---|
| Header (padding `--space-3`×2 + a 44px tap-target row + 1px border) | ≈ 61px |
| First-screen top padding (`--space-6`) | 32px |
| h1 (`--text-xl`/24px, `--leading-tight`, ~132 characters, ~25 characters per line at the 342px content width) | ≈ 166–193px (6–7 lines) |
| Provenance (margin-top `--space-3` + one `--text-sm` line + margin-bottom `--space-5`, trimmed from `--space-6` by rule 12) | ≈ 50px |
| Two door cards (`--space-4` padding; a `--space-8` 64px photo beside a two-line label/name stack; a 3-line `--text-sm` body line; a 44px CTA; `--space-4` gap between cards) | ≈ 437px |
| **Total** | **≈ 746–773px, leaving ≈ 71–98px of slack under 844px** |

This is a calculated, conservative estimate (character-width assumed at roughly
0.5–0.55em for both faces), not a browser measurement. It is the reason the door photo
became a compact 64px square rather than a banner (see Departures) — the first attempt,
with a full-width photo strip, computed to roughly 1080px and would have failed this
rule outright. Confirming the true rendered height is the separate browser-verification
pass this task's constraints (no Playwright) do not permit; that pass should screenshot
this mock at 390×844 before it goes to Nari.

**Compare anchor inside 844px (rule 12, E2 finding 6).** A live measurement — not this
document's own hand estimate above — put the compare anchor's bottom edge at
approximately 850px on the 844px viewport, 6px over, with part of the link's 44px
target clipped. Three spacing values between the doors and the compare anchor were
trimmed to recover room, none of them inside the doors themselves: `.provenance`
margin-bottom (`--space-6`→`--space-5`, −8px, in the budget above), `.first-screen`
bottom padding (`--space-7`→`--space-6`, −16px), and `.compare-anchor` padding-block
(`--space-5`→`--space-4`, −16px) — a combined −40px. Applied to the measured 850px
baseline this projects to about 810px, comfortably inside 844px with the link's full
44px target included. Neither door card nor either door CTA is touched by these three
trims — they sit entirely in the spacing before and after the doors — so both stay
exactly as visible as the budget above shows. A live re-measurement (this task's
constraints still withhold Playwright) should confirm the new bottom edge before this
mock goes to Nari.

**Rule 9 (links only to the five allowed destinations, each with its `data-event`).**
Every `<a href>` in the page resolves to `gt.school`/`www.gt.school`,
`anywhere.gt.school`, `apply.gt.school`, `community.gt.school`, or an in-page anchor
(`#main`, `#compare`, and `#` on the lockup, standing in for "the mock's own root" since
there is no live umbrella root to link to). Every `data-event`, `data-school`,
`data-placement`, and `data-type` attribute matches `copy.md`'s Section 7 event table
and per-slot notes exactly.

**Rule 10 (motion).** See Motion spec above. `grep -n "transition" styles.css` now
shows only `opacity` (lockup hover, footer-logo-link hover) and one `transform` (the
skip-link's off-screen reveal, built with `transform: translateY()` rather than
`top`) — the tightened budget of transform and opacity only. Color and border-color
state changes (door border, every CTA/link, footer links, the footer's focus-outline
color) carry no `transition` property at all, so they are instant rather than merely
fast. Every remaining duration is `var(--duration-fast)`; the only easing used is
`var(--ease-standard)`. `@media (prefers-reduced-motion: reduce)` removes every
remaining transition, on `*, *::before, *::after`, in one rule. Neither the h1 nor the
door photos (the page's largest images) ever animate.

**Rule 11 (accessibility).** `<html lang="en">`; a skip link to `#main`; landmarks
`header`, two `nav`s, `main`, `footer`; exactly one `h1`, seven `h2`s, one `h3`
(verified: tag counts balance, and heading levels never skip); `:focus-visible`
outline using `var(--color-focus)` everywhere except the footer, where every
focusable element (`.site-footer a:focus-visible`, all seven footer links) uses
`var(--color-accent-contrast)` instead — `--color-focus` on `--color-navy` measures
1.69:1, under the 3:1 non-text contrast minimum, while `--color-accent-contrast` on
`--color-navy` is the same ~15:1 already used elsewhere on this surface (finding 2,
rule 10); alt text on both door photos describing the cue, not the file; tap targets
at `min-height: 2.75rem` (44px) **and** `padding-inline` on the anchor itself
throughout — every link on the page, not only the ones with short labels, per the
coordinator's clarification on rule 7 — so a link's clickable width clears 44px too
(the footer's "Apply," "Privacy" and "Terms" text were the one measured shortfall,
~29–37px before the padding was added); the comparison is a real `<table>` with a
`<caption>` and `scope="col"`/`scope="row"` on every header cell.
Contrast pairings actually used, computed against WCAG's relative-luminance formula:
`--color-focus` (the CTA/link color) on `--color-bg` is 8.2:1; `--color-text-muted` on
`--color-bg` is 6.2:1; `--color-accent-contrast` on `--color-navy` (the footer) is
about 15:1; `--color-accent` on `--color-navy` (footer link hover) is 5.8:1 — all clear
of AA's 4.5:1 for normal text. `--color-accent` itself was deliberately **not** used as
a text or CTA color anywhere on the light background: computed against `--color-bg` it
is only about 2.4:1, which fails AA outright, so it appears only on the dark footer,
where it passes.

**Rule 12 (head).** Title, meta description, `robots` (`noindex, nofollow`), canonical,
Open Graph (title, description, image), and the JSON-LD block all match `copy.md`'s
Head table exactly (verified by direct comparison, reproduced in this file's diff
history).

**Rule 13 (images).** Two `<img>` elements total, both from `../shared/img/`, both with
real intrinsic `width`/`height`, both treated as first-screen images (no
`loading`/`decoding` attributes — see Assets). `index.html` + `styles.css` together are
29 KB, far under the 1 MB budget excluding shared images (confirmed by direct
`os.path.getsize` after this fix pass).

**Rule 14 (tokens).** `grep -n "#" styles.css` → no matches; a script cross-check
confirmed every `var(--...)` reference in `styles.css` resolves to a token actually
defined in `tokens.css`, with zero unresolved names. The only non-token numeric values
left in the file are the ones named in Departures (tap-target `min-height`, hairline
and focus-outline widths, `text-underline-offset`, and the skip-link's `z-index`) —
none of them a color, font, spacing, radius, or duration choice.

**Rule 15 (scalable door list).** Both the first-screen doors and the after-comparison
repeat are `<ul><li>` markup; a third, fourth, or fifth campus is a new `<li>`, not a
layout rebuild.

**Serving.** Confirmed live via `curl` against the running server at
`http://127.0.0.1:8213`: `index.html`, `styles.css`, `../shared/tokens.css`,
`../shared/fonts.css`, both door photos, and one representative font file all return
`HTTP 200`, and the served bytes are byte-identical to the files on disk.

## What I could not do

Visual confirmation of the 390×844 fold (rule 8), the compare-anchor trim (rule 12),
and the 1440px desktop layout is a browser-verification step this task's constraints
explicitly withhold (no Playwright, no starting a server, per this fix pass's own
instructions too). The budgets above are worked calculations from the actual CSS
values — for the compare anchor, applied to E2's own measured 850px baseline rather
than a fresh browser read — not a live re-measurement. Every anchor's clickable width
(rule 7, tightened per the coordinator's clarification to cover every link, not only
the categories first named) now carries `padding-inline` on top of the existing
`min-height`, sized by the same character-count reasoning as the rest of this
document, not a measured box — the footer's short labels ("Apply," "Terms") were the
one figure with an actual measured shortfall (E2 finding 1, ~29–37px) to fix against.
Contrast ratios, including the new footer focus-outline color, were computed by hand
from the token values, not read from a running contrast checker. A live pass should
confirm all of the above — the 844px fits, the footer focus ring, and every tap
target's true rendered width — before this mock goes to Nari.
