# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/bbb8a2c4738e2b0c/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-12T01:15:47.662Z; page `/0_plan/mockups/M31-our-story/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 92 | 201 | 235 | 404 | 566 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 92 | 202 | 236 | 389 | 550 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 92 | 203 | 237 | 390 | 551 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 92 | 203 | 237 | 390 | 552 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 168 | 202 | 356 | 517 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 176 | 210 | 432 | 654 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 92 | 204 | 237 | 391 | 552 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 169 | 203 | 357 | 518 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 92 | 211 | 245 | 466 | 688 | yes | report: page height 7730 |
| V10 | 750 by 342 | fold | 318 | 56 | 142 | 176 | 285 | 285 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 167 | 201 | 403 | 605 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 169 | 203 | 406 | 609 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 193 | 227 | 474 | 474 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 203 | 238 | 462 | 462 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 207 | 241 | 467 | 467 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 210 | 245 | 471 | 471 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 210 | 245 | 471 | 471 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 92 | 201 | 252 | 422 | 583 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 193 | 227 | 474 | 474 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Focus and forced colours

Captures: focus-cta.jpg (first door CTA focused); focus-footer-plate.jpg (the footer mark on its plate); focus-plate.jpg (header lockup link focused); focus-footer.jpg (GT Anywhere footer link focused); forced-colors.jpg (forced-colors: active at V14). The critics judge these by eye.

## Console

PASS: no console errors.

## Next band evidence

What the runner saw continuing below the fold. Ink means text, a painted edge or an image: section padding and the empty leading of a line box do not count.

| Row | Cut | Element and the ink that crosses the bottom edge |
|---|---|---|
| V1 | yes | text cut by the edge, 728 to 748 |
| V2 | yes | text cut by the edge, 620 to 640 |
| V3 | yes | text cut by the edge, 646 to 666 |
| V4 | yes | text cut by the edge, 646 to 666 |
| V5 | yes | content reaches 700 of 715 and more follows below |
| V6 | yes | content reaches 826 of 839 and more follows below |
| V7 | yes | content reaches 667 of 681 and more follows below |
| V8 | yes | content reaches 739 of 739 and more follows below |
| V9 | yes | text cut by the edge, 827 to 860 |
| V10 | yes | text cut by the edge, 324 to 344 |
| V11 | yes | content reaches 1015 of 1024 and more follows below |
| V12 | yes | text cut by the edge, 1187 to 1207 |
| V13 | yes | content reaches 765 of 768 and more follows below |
| V14 | yes | text cut by the edge, 707 to 728 |
| V15 | yes | text cut by the edge, 630 to 651 |
| V16 | yes | text cut by the edge, 894 to 915 |
| V17 | yes | content reaches 943 of 960 and more follows below |
| V18 | no | not applicable: the last CTA is at 583, past the 256px edge, so there is no gap between it and the fold to judge |
| V19 | yes | text cut by the edge, 564 to 577 |

## The GT marks under forced colours

Both GT marks are two-colour artwork, so each needs a ground that keeps its own colours: the Anywhere mark loses its second word on a forced white ground, and the GT School mark loses its navy lettering on a forced black one.

| Scheme | File | Result |
|---|---|---|
| light | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| light | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| light | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| light | `gt-school-logo-h.svg` | kept by the image itself |
| light | `gt-school-logo-h.svg` | kept by the image itself |
| light | `gt-anywhere-logo-h.svg` | kept by the image itself |
| dark | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| dark | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| dark | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| dark | `gt-school-logo-h.svg` | kept by the image itself |
| dark | `gt-school-logo-h.svg` | kept by the image itself |
| dark | `gt-anywhere-logo-h.svg` | kept by the image itself |

## Interactive targets under 44px

BUILDER-BRIEF rule 11 asks for 44px; WCAG 2.5.8 requires 24px at AA and is met by size or by spacing. Everything under 44 is listed as evidence for the critics. Only a door CTA under 44 fails the run.

| Viewport | Target | Height | Width | Kind | Result |
|---|---|---|---|---|---|
| 320 by 256 | Not sure which is right for yo | 38px | 228px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 320 by 256 | Terms | 44px | 37px | short control | under 44, above the 24px floor |
| 375 by 629 | Not sure which is right for yo | 38px | 310px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 375 by 629 | Check eligibility on the GT An | 20px | 295px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 375 by 629 | Terms | 44px | 37px | short control | under 44, above the 24px floor |
| 1440 by 900 | Not sure which is right for yo | 19px | 363px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 1440 by 900 | Check eligibility on the GT An | 21px | 331px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |
| 1440 by 900 | Terms | 44px | 40px | short control | under 44, above the 24px floor |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 27px | 141.8px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass
