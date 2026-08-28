# Academics

The academics page (`/academics`) makes the academic case — mastery-based 2-hour
learning ("Education at the Speed of Aptitude"), a `Radical Efficiency.` timeline,
objective measurement (MAP) — with Vidzflow video embeds and the shared FAQ
accordion and apply CTAs.

## Sub-features

- `academics-load` — page renders with title
  `Academics | GT Anywhere - Education at Speed of Aptitude` and an `Education at
  the …` hero heading.
- `academics-timeline` — the `Radical Efficiency.` timeline section renders.
- `academics-measurement` — the `Objective Measurement.` section renders.
- `academics-faq` — the FAQ accordion opens an item on click.
- `academics-video-loader` — the Vidzflow loader `<script>` is present, but this
  page has NO video embed element; the only video player iframe on the site is on
  the homepage. Expect zero embeds here.

## How to get to it (user POV)

- Click `Academics` in the navbar from any page.
- Browse directly to `http://127.0.0.1:8213/academics`.

## Driving it with Playwright MCP

Preconditions:

- `server.sh doctor 8213` reports `OK`.

- **Load page.** Run `browser_navigate` with `http://127.0.0.1:8213/academics`. Run
  `browser_snapshot`: title matches
  `Academics | GT Anywhere - Education at Speed of Aptitude`; headings
  `Radical Efficiency.` and `Objective Measurement.` are present.
- **Open FAQ.** Click the first `accordion_trigger` under
  `Frequently Asked Questions`. The answer region becomes visible.
- **Check video state.** Run `browser_evaluate` with
  `() => ({loader: !!document.querySelector('script[src*="vidzflow"]'), embeds: document.querySelectorAll('iframe[src*="vidzflow"], [id^="vidzflow"], div[data-vidzflow]').length})`
  — expect `loader: true, embeds: 0`. An embed appearing here would be a page
  change worth updating this file for, not a pass.
- **Proof.** Full-page or section screenshots: `<run>/academics-load.png` and
  `<run>/academics-faq-open.png`.

## Gotchas

- Do not use a bare `iframe` selector to look for video: the page has no video
  iframe, so any iframe found at runtime is tracker-injected (Facebook/HubSpot) — a
  false positive.
- In the hero `<h1>`, `Education at the ` is plain text and only `Speed of
  Aptitude` sits in a styled span; match on a stable fragment, not markup shape.
- Accordion `aria-expanded` never toggles (mirrored `$ is not defined` bug); judge
  open state visually. This page's FAQ has 10 items.
- Expect ~15 `<svg> attribute width: Expected length, "currentwidth"` console
  errors — invalid SVG markup mirrored from live; expected noise.
