# Continuity reference: what a parent sees on the other side of the door

Every mock's Continuity row asks whether the umbrella page reads as the same school as the site it
hands the parent to. Until 2026-09-11 no critic could answer it: the rubric asks for a rendered
comparison and the hard rules forbid loading `anywhere.gt.school` or `gt.school` in a browser. This
file closes half of that gap and says plainly which half.

**Provenance.** The repository's own faithful mirror of anywhere.gt.school, served from `127.0.0.1`
by `0_plan/tools/estate-shots.mjs`, with every third-party request aborted except the two Google
Fonts hosts and the webfont loader. Twenty requests were blocked on 2026-09-11, counted by host in
`0_plan/kb/exemplars/estate/measurements.json`: jsdelivr 6, Vidzflow 6 across two hosts, Google Tag
Manager 2, HubSpot 2, Meta 2, TikTok 2. Nothing was loaded from production. That tally shows what the
run refused; it is not by itself proof that no beacon fired, which would need a request log rather
than a block count. Captures are in `0_plan/kb/exemplars/estate/` at 390 by 844 and 1440 by 900, and
`measurements.json` carries each figure with its box and the element that paints it. The selector
field is a descriptive string, not a unique selector, so re-derive rather than re-query from it.

**`gt.school` is now half measured.** On 2026-09-11 its home page was fetched as text, served from
`127.0.0.1` and captured, by the same method that produced the Anywhere mirror; production was never
loaded in a browser. The evidence and its limits are in `0_plan/kb/exemplars/estate-gt/SOURCE.md`.
What it establishes: the header, the navigation, both action constructions, the display face and the
body face. What it does not: the hero's media did not load, so the first screen is unreadable in
those captures and **no ground colour may be cited for gt.school from them**. A critic may now score
the Georgetown handoff's chrome and type on rendered evidence, and must still say its first screen is
unverified (Astra, `ensemble/E8-dd46-continuity.md`).

**The heading gap is against the whole estate, not one site.** gt.school sets its h1 in Literata
**300** at **-1.6px**, the same weight and tracking as anywhere.gt.school. Every mock ships **400** at
**normal**. The table below recorded this as a difference from one site; it is a difference from both.
M03 argued its way to 400 deliberately and that stands; the rest inherited it.

**gt.school pairs a filled navy primary with an outlined navy secondary**, both Inconsolata 16px at
computed weight 500. With the Anywhere first screen's navy card, that is two sites agreeing that the
estate's first-screen action is navy, and it is the orange footer card that is the exception. DD-46.

**The estate already navigates between its own schools**: gt.school's header carries "GT Anywhere" as
an accent-orange link. Cross-school handover is not something the umbrella page invents.

## Measured on the first screen

| Element | 1440 by 900 | 390 by 844 |
|---|---|---|
| Page ground | `rgb(252, 244, 239)` | same |
| Body text | `rgb(0, 17, 23)` | same |
| Body face | Inter Tight | same |
| h1 | Literata, 58.5px, weight **300**, letter-spacing **-1.6px** | Literata, 36px, weight 300, letter-spacing -1.6px |
| The first screen's application action | Navy `rgb(0, 42, 58)` fill, near-white `rgb(251, 251, 251)` label, Inconsolata 16px, computed weight 500, uppercase | same, moved to the lower left |
| The pre-footer application card | Accent orange `rgb(228, 139, 83)` fill, same label type, same three-part background | same |

The h1's italic half is measured at **weight 400, italic, in accent orange `rgb(228, 139, 83)`**,
inside a 300-weight upright h1, so the display voice changes weight, colour and slope together. An
earlier version of this file reported 300 for that span because the measuring script took the first
child of the h1, which is the upright half; the script now records every h1 child.

## What the captures show that the numbers do not

| Observation | Capture |
|---|---|
| The headline sets its first sentence in near-black upright and its second in accent orange italic. K12 F88 measures that orange on cream at **2.38:1**, which fails AA and fails 3:1 | `anywhere-home-1440-firstscreen.jpg` |
| **The estate uses both fills for the same action.** The floating enrolment card on the first screen is navy; the footer and desktop-header application buttons are orange. Orange is not "the estate's action colour" and navy is already part of its action vocabulary | `measurements.json`, both widths; `anywhere-footer-1440.jpg` |
| K12 F87 measures the near-white label on that orange at **2.50:1**, failing AA and 3:1. Copying the estate's orange button faithfully would import a contrast failure | `0_plan/kb/K12-gt-branding.md` F87, A1 |
| **There is no single estate button silhouette.** Three application controls use three constructions: the navy first-screen card and the orange pre-footer card each compose a background from `.button-bg` at 8px, a `.button-bg_filler` at `8px 8px 0 0` and a `.button-bg_corner-wrap` at `0 0 8px`, which together draw a cut lower-right corner; the footer's own button clips a 14px polygon instead; and the desktop header's button keeps four rounded corners with no cut. Matching "the estate's silhouette" means choosing a variant, not recovering one shape, and none of the three is a `border-radius` value (Astra, `ensemble/E9-dd47-silhouette.md`) | `measurements.json` parts; `anywhere-footer-1440.jpg` |
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

Three riders. `0_plan/mockups/shared/fonts.css` ships Inconsolata **400 and 600 only**, so a mock
cannot register a 500 without adding a face. The estate's 500 is a *computed* weight, not proof that
a distinct 500 face drew those glyphs: the mirror registers local Inconsolata 300, 400 and 600 and
asks Google for 400 and 700, so a browser may well be synthesising or rounding. Treat the button-weight
row as a declared-value difference until someone checks which face actually rendered. And M03 already
tested 300 against 400 and shipped 400 with its reasoning, so the heading-weight gap is an argued
departure there, not an oversight.

Button fill is decided in **DD-46**. The earlier claim in this file that every mock fills its doors
with navy was wrong: M03 uses a near-white fill on its navy first screen, M09 reverses fill per room,
and M15 fills navy on cream.

## Mark sizes, a defect this reference exposed

K12 V2 requires horizontal marks **32px at 1440 and at least 27px at 390**. This table is the state
on 2026-09-11 *before* the fixes, kept as the record of what the reference found. **Every mock listed
has since been corrected, and the runner now measures mark geometry on every pass**, so read
`qa/fold.md`'s Mark geometry section for the current state rather than this table.

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
tally. Measure the first screen before scrolling: the first version of this file reported the footer's
values as the first screen's, and sampled a button inside a closed navigation dropdown. An earlier
version also claimed that blocking the font hosts loses Inconsolata; the mirror carries local
Inconsolata files, so that claim was never demonstrated and should not be repeated without a run
that shows it.
