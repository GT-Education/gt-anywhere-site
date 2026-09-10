# Builder brief for the five landing mocks (S4), 2026-09-10

| Field | Value |
|---|---|
| Deliverable per mock | `0_plan/mockups/<folder>/index.html`, `styles.css`, `RATIONALE.md`. Self-contained apart from `../shared/tokens.css`, `../shared/fonts.css`, `../shared/img/*` |
| Serving | A static server already runs at `http://127.0.0.1:8213` from the repo root (fonts use root-relative `/assets/...` paths). Do not start another server. Do not open gt.school or anywhere.gt.school in a browser. Do not use the Playwright tools; browser verification is a separate step |
| Read first, in this order | `0_plan/mockups/shared/copy.md` (the copy, used verbatim), `1_spec/03-landing-page-spec.md` (all sections), `1_spec/04-design-system-spec.md` sections 2 and 3, `0_plan/05-landing-mockups-plan.md` sections 3, 4 and 9, `0_plan/16-g05-decision-record.md`, `0_plan/mockups/shared/tokens.css`, `0_plan/mockups/shared/ASSETS.md` (if present; otherwise view the images you use with the Read tool and write your own alt text), and the DD, MD and MN rows your direction cites in `0_plan/07-design-decisions.md` (grep the ids) |
| Ceiling | One build pass. Report what is done, what is flagged, what you could not do |

## Non-negotiable rules

| # | Rule | Check |
|---|---|---|
| 1 | No `<form>`, no `<input>`, no `<button type="submit">`. Nothing can reach the live webhook | `grep -c "<form" index.html` is 0 |
| 2 | No JavaScript at all. CSS only. No `<script>` except the JSON-LD block | `grep -c "<script" index.html` is 1 |
| 3 | No external requests except `../shared/*` and `/assets/...` fonts. No Google Fonts, no CDN, no hotlinked images | grep for `http` finds only `href` destinations |
| 4 | Copy comes from `copy.md` verbatim for fixed slots. Flagged slots ship with the stated default. No lorem, no "TBD", no "[placeholder]" text on the page | Read the page as a parent would |
| 5 | The only numbers on the page are those in `copy.md` (90th percentile, $10,400, four weekends, 9 to noon, three hours, weekly). No speed figure, no SAT figure, no cohort size, no accreditation claim, no Cognia mark | `grep -oE "[0-9]+" index.html` shows only those and markup |
| 6 | The adults are Guides. Never "advisor" on the page (the `data-type="advisor"` attribute value from the spec is allowed) | grep |
| 7 | Full school names everywhere: "Georgetown Campus", "GT Anywhere" | grep |
| 8 | Both door CTAs visible without scrolling on a 390 by 844 viewport, and the header, umbrella sentence and provenance line are the only things above them (M2 and M4 may add their direction's element, kept compact) | Design at 390 first |
| 9 | Links go only to gt.school, anywhere.gt.school, apply.gt.school, community.gt.school and in-page anchors, exactly as `copy.md` lists them, each with its `data-event` attributes | grep `href` |
| 10 | Motion: CSS transitions only, `transform` and `opacity` only, durations `var(--duration-fast|base|slow)`, easing `var(--ease-standard)`. No scroll reveals, no lifts, no signature animation. Hover and focus change color and underline only. `@media (prefers-reduced-motion: reduce)` removes every transition. Nothing animates the largest image or the h1 | grep `transition` |
| 11 | Accessibility: `<html lang="en">`, skip link to `main`, landmarks `header` `nav` `main` `footer`, exactly one `h1`, visible `:focus-visible` outline using `--color-focus`, alt text on every image, tap targets at least 44px, comparison as a real `<table>` with `<caption>` and `scope`, text over photos on a solid panel or an overlay that keeps WCAG AA | Manual pass |
| 12 | Head: title, meta description, `<meta name="robots" content="noindex, nofollow">`, canonical, Open Graph, JSON-LD exactly as `copy.md` "Head" says | View source |
| 13 | Images from `../shared/img/` only, with `width` and `height` attributes, `loading="lazy"` and `decoding="async"` on everything except the first-screen image. Page under 1 MB excluding shared images | `du` |
| 14 | Tokens: every color, font, size, space, radius, shadow and duration is a `var(--...)` from `tokens.css`. A value outside the token set is a departure: allowed only if named in `RATIONALE.md` with the reason (DD-19) | grep `#` in styles.css |
| 15 | Design for N campuses: the doors are a list (`<ul>`) that could hold three to five entries (DD-21), even where the visual is a two-panel split | Markup |
| 16 | Brand continuity (Johnny, 2026-09-10): the header lockup is the real GT School logo SVG from `../shared/img/`, the footer shows both real logos as gt.school's footer does, colors come only from `tokens.css` (the sites' own swatches) and type only from the three site faces. No text wordmark in place of the logo, no recolored or redrawn mark, no new color outside the one flagged tint | grep `gt-school-logo-h.svg` and `gt-anywhere-logo-h.svg` |

## The direction of each mock, from `1_spec/03` section 10 and `0_plan/05` section 4

| Mock | Folder | Lens order | First screen | What makes it different | Fixed | Flag in rationale |
|---|---|---|---|---|---|---|
| M1 Two Doors | `M1-two-doors` | L1 objective, L2 existing system, L4 elite, L3 mission | h1 umbrella sentence, provenance line, then two equal panels side by side at 1440 and stacked at 390: label ("In person" / "Online"), school name, one line, one CTA, one photo each | The fastest correct choice. The sites' own warm palette and type as they are today. Very few words. Comparison table directly below the doors | Sections 0 to 8 | The split hero does not scale past two campuses; the door list markup does |
| M2 The Institute | `M2-the-institute` | L3 mission, L4 elite, L1 objective, L2 system | h1 umbrella sentence as an editorial statement; a compact register of structural facts in Inconsolata data labels (Kindergarten to 8th grade; 90th percentile admission bar; two ways to attend; four in-person weekends a year), then "Two ways to attend" with the two doors and CTAs, still within 390 by 844 | Proof of rigor as the brand: academic grid, hairlines, mono labels, the palette at its most restrained (text, background, one accent used once). Reads "MIT" as evidence | Only register-backed figures; no outcome figure exists yet | The outcome figure and accreditation slots are withheld (Q-019, Q-033); the register shows structure, not outcomes |
| M3 Private Quiet | `M3-private-quiet` | L4 elite, L2 system, L1 objective, L3 mission | A quiet h1 in large Literata with generous whitespace; the two schools as two understated cards; "Admissions" language | Prestige as restraint. May use `--color-navy` as a dark first-screen or footer surface (flag it as a brand extension). Every screen still carries a fact (DD-29). CTAs are visually quiet but must keep AA contrast and a visible underline or border at rest (DD-10 forbids contrast failures) | Sections 0 to 8 | Dark surface departure; the risk that big type over thin content reads empty |
| M4 Builders | `M4-builders` | L3 mission, L1 objective, L2 system, L4 elite | A full-bleed photograph of students at work (choose the strongest Georgetown photo of children building, presenting or experimenting), one line, then the two doors as "two programs of one school" | Mission through student work: a "what students do" strip of real photos with captions that describe only what the photo shows (never an invented project name or result). Warm palette drawn from the tokens | No stock, existing photos only (DD-08) | Photo quality is not ours to control (DD-31); a typographic fallback is described |
| M5 One School, Two Campuses | `M5-one-school-two-campuses` | L2 system, L1 objective, L3 mission, L4 elite | Umbrella lockup, one line, a campus switcher (In person: Georgetown Campus / Online: GT Anywhere) built as anchor links with both panels always visible, two CTAs | The merged token set in full; a shared header and footer the school sites could inherit; the schedule visual "A day at GT" per school (DD-34) also rendered as a table | The design system itself (DEL-004) | Least dramatic by design |

## RATIONALE.md, one per mock

| Section | Content |
|---|---|
| Direction | Lens order, hypothesis, one paragraph on how the first screen serves it |
| h1 | Which element is the h1 and why |
| Decisions applied | A table: id (DD, MD, MN, REQ), how it is applied in this mock |
| Motion spec | A table: what animates, trigger, duration token, easing token, reduced-motion behavior. If nothing animates beyond hover color, say so |
| Assets | Which images, from where, alt text, consent status "published by GT on its own site, consent to be confirmed by Nari (AD-11)", fallback if the photo is rejected (DD-31) |
| Departures | Any value outside `tokens.css` or any surface not on the sites today, with the reason (DD-19) |
| Flagged slots | Every slot carrying a Q id and the default shown |
| Parent questions | The parent questions in `1_spec/01-users-and-journeys.md` (search "parent questions"): which the page answers, which it defers to the school sites and why |
| Self-check | The results of the greps in the rules table, and the 390 by 844 first-screen statement |

## Report back

Files written, every flagged item, every rule you could not satisfy and why. Nothing else.
