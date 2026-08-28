# Advisors

The advisors page (`/advisors`) introduces the academic-advisor model ("Practical
Mentorship.") and shows the roster of eight named advisors with photos, plus the
shared FAQ accordion and apply CTAs.

## Sub-features

- `advisors-load` — page renders with title `Our Academic Advisors | GT Anywhere`
  and the heading `Practical Mentorship.`
- `advisors-roster` — eight authored `.advisors_card` cards render inside a Splide
  carousel, one per advisor: Andreea Musat, Anjelina Belakovskaia, David Zook,
  Melissa Muir, Morgan Routh, Norberto Troncoso, Ruchi Shukla, Sarah Langdon.
- `advisors-faq` — the `Frequently Asked Questions` accordion opens an item on
  click.
- `advisors-cta` — the shared apply CTAs open the Begin Application modal (drive the
  modal itself under [home-apply-modal](./home-apply-modal.md)).

## How to get to it (user POV)

- Click `Advisors` in the navbar from any page.
- Browse directly to `http://127.0.0.1:8213/advisors`.

## Driving it with Playwright MCP

Preconditions:

- `server.sh doctor 8213` reports `OK`.

- **Load page.** Run `browser_navigate` with `http://127.0.0.1:8213/advisors`. Run
  `browser_snapshot`: title is `Our Academic Advisors | GT Anywhere`; the heading
  `Practical Mentorship.` is present.
- **Count roster.** Run `browser_evaluate` with
  `() => document.querySelectorAll('.splide__slide:not(.splide__slide--clone) .advisors_card').length`
  — expect `8` (the roster is a Splide carousel; the bare `.advisors_card` count is
  ~28 at runtime because Splide clones slides for looping). Confirm at least two
  advisor names (e.g. `Andreea Musat`, `Sarah Langdon`) appear in the snapshot.
- **Open FAQ.** Scroll to `Frequently Asked Questions` and click the first
  `accordion_trigger` (role button, aria-label `reveal answer`). The answer region
  below it becomes visible.
- **Proof.** Screenshot the roster section as `<run>/advisors-roster.png` and the
  opened FAQ item as `<run>/advisors-faq-open.png`.

## Gotchas

- Advisor cards are below the fold; `browser_snapshot` sees them without scrolling,
  but a screenshot proof needs a scroll (or full-page screenshot) first.
- Expect ~26 console errors of the form `<svg> attribute width: Expected length,
  "currentwidth"` — invalid SVG attributes authored in the page (and multiplied by
  Splide cloning). Mirrored from live; expected noise here, not a drive failure.
- The FAQ on this page has 6 items (counts vary per page; home has 8).
- The accordion's visual open/close is a Webflow interaction and works; only the
  `aria-expanded` attribute toggle is broken by the mirrored `$ is not defined` bug.
  Judge open state by visibility, not `aria-expanded`.
- The page ends with the same CTA card and modal as home — don't double-verify the
  modal here; that's [home-apply-modal](./home-apply-modal.md).
