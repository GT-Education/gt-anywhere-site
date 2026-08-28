# Intensives

The intensives page (`/intensives`) pitches the quarterly in-person weekends
("Where Ambition Meets Reality", `48-Hour Deep …`) with a three-instance Splide
photo gallery under the heading `Finally, a Room Where They Aren't the Only Ones`
(advanced by manual prev/next arrows, no autoplay), a separate `Campus Rooms` rooms
section, plus the shared FAQ accordion and apply CTAs.

## Sub-features

- `intensives-load` — page renders with title
  `GT Anywhere Intensives | Quarterly In-Person Weekends` and the `Where Ambition …`
  hero heading.
- `intensives-gallery` — three Splide carousels (`#gallery-left`, `#gallery-mid`,
  `#gallery-right`, 3 authored slides each) initialize and advance together via the
  `.slider-arrow` prev/next controls; a `#slide-count` label tracks the middle one.
- `intensives-rooms` — the `Campus Rooms` heading and its rooms list render (a
  separate section, not the carousel).
- `intensives-faq` — the FAQ accordion opens an item on click.

## How to get to it (user POV)

- Click `Intensives` in the navbar from any page.
- Browse directly to `http://127.0.0.1:8213/intensives`.

## Driving it with Playwright MCP

Preconditions:

- `server.sh doctor 8213` reports `OK`.
- Internet available (Splide JS loads from cdn.jsdelivr.net).

- **Load page.** Run `browser_navigate` with `http://127.0.0.1:8213/intensives`.
  Run `browser_snapshot`: title is
  `GT Anywhere Intensives | Quarterly In-Person Weekends`; headings containing
  `Where Ambition` and `Campus Rooms` are present.
- **Check gallery.** Run `browser_evaluate` with
  `() => ({roots: document.querySelectorAll('.splide').length, initialized: document.querySelectorAll('.splide.is-initialized').length, liveSlides: document.querySelectorAll('.splide__slide').length})`
  — expect 3 roots, 3 initialized, and liveSlides > 9 (9 authored, ~21 with Splide
  loop clones).
- **Advance manually.** Read `#slide-count` (starts `01`), click
  `.slider-arrow.is-next`, and re-read — expect `02`. Waiting ~1.5s without
  interaction must NOT change it (there is no autoplay).
- **Open FAQ.** Click the first `accordion_trigger` under
  `Frequently Asked Questions`. The answer region becomes visible.
- **Proof.** Screenshot the carousel section as `<run>/intensives-carousel.png` and
  the opened FAQ as `<run>/intensives-faq-open.png`.

## Gotchas

- Splide clones slides for looping, so the DOM slide count exceeds the 9 authored;
  assert a floor, not an exact number.
- Offline, Splide never initializes (`is-initialized` missing) and slides stack
  vertically — environment limit, not a regression.
- The gallery does NOT auto-scroll — advancement is manual arrows only. (The
  auto-scrolling carousel is the homepage testimonials strip; don't conflate them.)
- `Campus Rooms` heads the static rooms section; the carousel lives under
  `Finally, a Room Where They Aren't the Only Ones`.
- Expect a handful of `<svg> ... "currentwidth"` console errors (invalid SVG markup
  mirrored from live) on top of the usual `$ is not defined`.
