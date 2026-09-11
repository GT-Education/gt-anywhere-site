# Continuity reference: what a parent sees on the other side of the door

Every mock's Continuity row asks whether the umbrella page reads as the same school as the site it
hands the parent to. Until 2026-09-12 no critic could answer it: the rubric asks for a rendered
comparison and the hard rules forbid loading `anywhere.gt.school` or `gt.school` in a browser. This
file closes half of that gap and says plainly which half.

**Provenance.** The repository's own faithful mirror of anywhere.gt.school, served from `127.0.0.1`
by `0_plan/tools/estate-shots.mjs`, with every third-party request aborted except the two Google
Fonts hosts and the webfont loader, which are what serve Inconsolata. Twenty requests were blocked,
counted by host in `0_plan/kb/exemplars/estate/measurements.json`: jsdelivr 6, Vidzflow 6,
Google Tag Manager 2, HubSpot 2, Meta 2, TikTok 2. No beacon fired and nothing was loaded from
production. Captures are in `0_plan/kb/exemplars/estate/` at 390 by 844 and 1440 by 900; every
number below is in `measurements.json` with the selector, the box and the element that paints it.

**`gt.school` has no mirror in this repository and is unmeasured.** Anywhere cannot stand in for it.
A critic can score the Anywhere handoff on rendered evidence and must say the Georgetown handoff is
unverified. A text-only derivation of gt.school's CSS is acceptable as labelled source analysis and
is not a substitute for the rendered comparison (Astra, `ensemble/E8-dd46-continuity.md`).

## Measured on the first screen

| Element | 1440 by 900 | 390 by 844 |
|---|---|---|
| Page ground | `rgb(252, 244, 239)` | same |
| Body text | `rgb(0, 17, 23)` | same |
| Body face | Inter Tight | same |
| h1 | Literata, 58.5px, weight **300**, letter-spacing **-1.6px** | Literata, 36px, weight 300, letter-spacing -1.6px |
| The visible application action | Navy `rgb(0, 42, 58)` fill, near-white `rgb(251, 251, 251)` label, Inconsolata 16px weight **500** uppercase, radius `8px 8px 0 0` | same, moved to the lower left |
| The footer application action | Accent orange `rgb(228, 139, 83)` fill, same label type and the same notched radius | same |

The h1's italic half is a `.span-gold-italic` at weight 400 inside a 300-weight h1, so the display
voice changes weight as well as colour and slope.

## What the captures show that the numbers do not

| Observation | Capture |
|---|---|
| The headline sets its first sentence in near-black upright and its second in accent orange italic. K12 F88 measures that orange on cream at **2.38:1**, which fails AA and fails 3:1 | `anywhere-home-1440-firstscreen.jpg` |
| **The estate uses both fills for the same action.** The floating enrolment card on the first screen is navy; the footer and desktop-header application buttons are orange. Orange is not "the estate's action colour" and navy is already part of its action vocabulary | `measurements.json`, both widths; `anywhere-footer-1440.jpg` |
| K12 F87 measures the near-white label on that orange at **2.50:1**, failing AA and 3:1. Copying the estate's orange button faithfully would import a contrast failure | `0_plan/kb/K12-gt-branding.md` F87, A1 |
| Buttons are not plain pills: the silhouette carries a cut at the lower right, which `border-radius: 8px 8px 0 0` describes only partly | `anywhere-footer-1440.jpg` |
| **The phone redistributes the chrome.** At 390 the header holds the mark and MENU only: the TEFA badge and the orange application button are desktop-only, the Alpha School lockup moves from the hero's top right to below the headline, and the navy enrolment card moves to the left | `anywhere-header-390.jpg` against `anywhere-header-1440.jpg` |
| The hero is a **composited photographic cut-out of an identifiable child over line artwork**, cropped by the viewport bottom, not an edge-to-edge rectangular photograph. The markup loads `...hero-student-image.webp` | `anywhere-home-1440-firstscreen.jpg` |
| The cream is **grained**, with fine wave linework behind the student. Flat cream reproduces the base colour, not the whole surface | `anywhere-home-1440-firstscreen.jpg` |
| The footer sets navigation in uppercase Inconsolata, puts email and phone in bordered pills, and closes with a legal row naming the 2 Hour Learning Network, while the hero carries the Alpha School lockup. Both namings coexist | `anywhere-footer-1440.jpg` |

## Where the programme stands against this

What matches: the ground token, the three families, and the mark files themselves.

What differs, measured, across the mocks built so far. None of these is automatically wrong; each
should be a decision a rationale names.

| Property | The estate | The mocks |
|---|---|---|
| Heading weight | 300 | 400 |
| Heading tracking | -1.6px | normal |
| Button weight | 500 | 600 |
| Button size | 16px | 17 to 18px |
| Button fill | navy on the first screen, orange in the footer | surface-dependent: navy on light, near-white on navy |

Two riders. `0_plan/mockups/shared/fonts.css` ships Inconsolata **400 and 600 only**, so a 500-weight
button cannot be claimed without adding the face. And M03 already tested 300 against 400 and shipped
400 with its reasoning, so the weight gap is an argued departure there, not an oversight.

Button fill is decided in **DD-46**. The earlier claim in this file that every mock fills its doors
with navy was wrong: M03 uses a near-white fill on its navy first screen, M09 reverses fill per room,
and M15 fills navy on cream.

## Mark sizes, a defect this reference exposed

K12 V2 requires horizontal marks **32px at 1440 and at least 27px at 390**. Measured in the
stylesheets on 2026-09-12:

| Mock | Footer mark | Against the rule |
|---|---|---|
| M03 | 24px | below the phone floor |
| M07 | 24px | below the phone floor |
| M12 | 24px for GT School, 32px for Anywhere | below the phone floor, and unequal between the two schools |
| M02 | 28px and 32px | above the floor, short of 32px for one mark |
| M09, M15 | 27px and 32px | at the floor, short of 32px at desktop for one mark |
| M08 | 32px | meets it |
| M06 | `auto` | not asserted in CSS; measure before scoring |

## Reproducing it

`node 0_plan/tools/estate-shots.mjs` from the repository root. It serves the repository, blocks every
host except `fonts.googleapis.com`, `fonts.gstatic.com` and `ajax.googleapis.com`, waits for the GSAP
entrance and the footer to settle, writes the captures and `measurements.json` with the blocked-host
tally. Block the font hosts too and you lose Inconsolata, and the header reads in a fallback mono.
Measure the first screen before scrolling: the first version of this file reported the footer's
values as the first screen's, and sampled a button inside a closed navigation dropdown.
