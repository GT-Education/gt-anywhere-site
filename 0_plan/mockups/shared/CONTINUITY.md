# Continuity reference: what a parent sees on the other side of the door

Every mock's Continuity row asks whether the umbrella page reads as the same school as the site it
hands the parent to. Until now no critic could answer it: the rubric asked for a side-by-side and the
hard rules forbid loading `anywhere.gt.school` or `gt.school` in a browser. This file closes that gap.

**Where these measurements come from.** The repository's own faithful mirror of anywhere.gt.school,
served from `127.0.0.1` by the capture script, with every third-party request aborted except the two
Google Fonts hosts and the webfont loader, which are what serve Inconsolata. Twenty analytics, pixel
and CRM requests were blocked, so no beacon fired. Nothing was loaded from production. The captures
are in `0_plan/kb/exemplars/estate/`, at 390 by 844 and 1440 by 900.

`gt.school` itself has no mirror in this repository, so it is absent here and its chrome is still
unmeasured. Treat this file as evidence for the Anywhere half of the estate only.

## Measured, from the mirror's computed styles

| Element | Value at 1440 | Value at 390 |
|---|---|---|
| Page ground | `rgb(252, 244, 239)` | same |
| Body text | `rgb(0, 17, 23)` | same |
| Body face | Inter Tight | same |
| h1 | Literata, 58.5px, weight 300, letter-spacing -1.6px | Literata, 36px, weight 300, letter-spacing -1.6px |
| Primary CTA | Inconsolata, 16px, weight 500, uppercase, white on `rgb(228, 139, 83)`, radius 8px, padding 12px 16px | same |
| Navigation link | Inconsolata, 16px, weight 500, uppercase | same |

## What the captures show that the numbers do not

| Observation | Capture |
|---|---|
| The headline sets its first sentence in near-black and its second in **accent orange italic**. The estate's display voice is two-toned, not one weight of navy | `anywhere-home-1440-firstscreen.jpg` |
| The primary call to action is an **orange filled pill with a trailing arrow**. Every mock in this programme fills its door buttons with navy | `anywhere-home-1440-firstscreen.jpg`, `anywhere-footer-1440.jpg` |
| The header carries the mark, a "TEFA Approved School." badge, a MENU button and the application pill, over cream, closed by a hairline | `anywhere-header-1440.jpg`, `anywhere-header-390.jpg` |
| The Alpha School affiliation sits in the hero's top right as a lockup reading "The Gifted Academy of Alpha School", which is fact 1 of the five every session carries | `anywhere-home-1440-firstscreen.jpg` |
| A navy sticky bar runs along the bottom right with the enrolment season and a second application button | `anywhere-home-1440-firstscreen.jpg` |
| The footer sets its navigation in uppercase Inconsolata, puts the email and phone in bordered pills, and closes with a legal row naming the 2 Hour Learning Network | `anywhere-footer-1440.jpg` |
| The hero is a photograph of an identifiable child, bled to the page edge | `anywhere-home-1440-firstscreen.jpg` |

## How a critic uses this

The Continuity row is not "does the mock copy the estate". The umbrella page is a different surface
with a different job, and several departures are deliberate and recorded. Score the row on whether a
parent crossing from the mock to the Anywhere site would believe they were still with the same school:
the ground, the three faces, the mark treatment and the button vocabulary should rhyme, and any
departure should be a decision the rationale names rather than an accident.

Three things every mock in this programme currently departs from, all of them defensible and none of
them yet argued in a rationale:

1. **Button fill.** The estate fills its primary action with accent orange; the mocks fill with navy.
   Recorded as DD-46.
2. **Display voice.** The estate splits its headline across two colours and sets the second half in
   italic; the mocks set one navy sentence. The fixed copy is a single sentence, so this may simply
   not apply, but say so.
3. **Photograph.** The estate leads with a child's face. The mocks default to no photograph, because
   every asset on hand shows an identifiable child and permission is unresolved (DD-42, RF-25).

## Reproducing it

`node` the capture script in the session scratchpad, or re-derive it: serve the repository root, block
every host except `fonts.googleapis.com`, `fonts.gstatic.com` and `ajax.googleapis.com`, load
`/index.html`, wait for the GSAP entrance to settle, and capture. Blocking the font hosts instead
costs you Inconsolata and the header reads in a fallback mono.
