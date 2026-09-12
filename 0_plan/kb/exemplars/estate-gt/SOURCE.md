# gt.school rendered: partial evidence, and exactly how partial

## Why this exists

Every mock's Continuity row asks whether the umbrella page reads as the same school as the site it
hands a parent to. `0_plan/mockups/shared/CONTINUITY.md` could answer that for **anywhere.gt.school**
and said plainly it could not answer it for **gt.school**, which has no mirror in this repository.
Astra has capped Continuity at 3 on that ground, and the cap applied to every direction, not one.

This folder lifts half of that cap and is explicit about the half it does not lift.

## Provenance

| Field | Value |
|---|---|
| Source | `https://www.gt.school/`, the home page |
| Method | Fetched as text with `curl`, which executes no script and fires no analytics beacon, then served from `127.0.0.1` and captured in a browser. **Production was never loaded in a browser.** This is the same method the repository's existing mirror of anywhere.gt.school was made with |
| Fetched | 2026-09-11. 139 files, 12 MB, into a scratch directory that is not checked in; only the captures and `measurements.json` are kept |
| Blocked during capture | Every host except the two Google Fonts hosts. Tally: jsdelivr 6, ajax.googleapis 2, HubSpot forms 2, Calendly 2 |
| Script | `gt-shots.mjs` in the session scratchpad. It is not checked in, because it points at a scratch mirror rather than at anything in this repository; the method above is the reproducible part |

## What rendered, and is therefore evidence

| Property | 1440 by 900 | 390 by 844 |
|---|---|---|
| Body face | Inter Tight | Inter Tight |
| Body text | `rgb(0, 17, 23)` | same |
| h1 | Literata, 52px, weight **300**, tracking **-1.6px** | Literata, 44px, weight 300, tracking -1.6px |
| h1 colour | `rgb(255, 255, 255)` | same |
| Primary action | "APPLY NOW", Inconsolata 16px, computed weight 500, `rgb(255,255,255)` on navy `rgb(0, 42, 58)` | same |
| Secondary action | "BOOK A TOUR", Inconsolata 16px, computed weight 500, navy `rgb(0, 42, 58)` on no fill | not in the phone header |
| Header navigation | What's On, Resources, About Us, then **GT Anywhere in accent orange** | MENU only |

## The three findings that matter to the programme

1. **Both estate sites set their display face the same way, and every mock differs from both.**
   gt.school is Literata **300** at **-1.6px**; anywhere.gt.school is Literata **300** at **-1.6px**;
   all 26 mocks are **400** at **normal**. `CONTINUITY.md` recorded this as a gap against one site. It
   is a gap against the estate. M03 argued its way to 400 deliberately and that stands as an argued
   departure; the rest inherited it.
2. **gt.school pairs a filled navy primary with an outlined navy secondary**, both Inconsolata 16px at
   computed weight 500. That is a second estate data point for DD-46 and DD-47, and it agrees with
   anywhere.gt.school's first-screen action rather than with its orange footer card. The estate's
   action colour on a first screen is navy on both sites.
3. **The header carries the sibling school as an accent-orange link.** Cross-school navigation exists
   in the estate's own chrome, which is direct evidence for how an umbrella page should hand over.

## What did NOT render, and is therefore not evidence

The hero's media did not load: the capture shows white behind an h1 that is **white text**, so the
first screen is unreadable in these captures and the ground colour they report is the body behind a
missing hero, not a design decision. **Do not cite a ground colour for gt.school from this folder.**
Anything about the hero's imagery, its contrast, or its composition is unanswered here.

So: this closes the **chrome and type** half of the Georgetown continuity question and leaves the
**hero and ground** half open. A critic may now score Continuity on rendered evidence for the header,
the action vocabulary, the display face and the body face, and must still say the Georgetown first
screen itself is unverified.

## Reproducing it

Fetch the home page and its referenced assets under `cdn.prod.website-files.com` with `curl`,
rewrite absolute CDN URLs to local paths, strip `integrity` attributes (they fail on rewritten URLs,
as the repository's own mirror notes), fetch the Webflow runtime, jQuery and GSAP so the page's
entrance animation can reveal its own content, then serve from `127.0.0.1` and capture. Without the
runtime the capture is blank, because the entrance leaves content at zero opacity: the first attempt
here produced an entirely white image and a ground reading taken from it would have been wrong.
