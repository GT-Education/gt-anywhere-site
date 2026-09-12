# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/bbb8a2c4738e2b0c/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-12T00:32:26.279Z; page `/0_plan/mockups/M33-the-scale/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 89 | 322 | 351 | 472 | 576 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 57 | 292 | 321 | 442 | 546 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 263 | 292 | 413 | 517 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 263 | 292 | 413 | 517 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 266 | 295 | 416 | 520 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 282 | 319 | 447 | 560 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 264 | 293 | 414 | 519 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 235 | 264 | 385 | 490 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 279 | 316 | 445 | 557 | yes | report: page height 9365 |
| V10 | 750 by 342 | fold | 318 | 57 | 148 | 174 | 271 | 271 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 262 | 300 | 447 | 447 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 268 | 305 | 453 | 453 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 267 | 305 | 438 | 438 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 272 | 302 | 429 | 429 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 279 | 309 | 437 | 437 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 317 | 355 | 508 | 508 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 317 | 355 | 508 | 508 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 89 | 353 | 382 | 503 | 607 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 251 | 281 | 406 | 406 | yes | report: scrollWidth 1024 |

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
| V1 | yes | text cut by the edge, 736 to 756 |
| V2 | yes | text cut by the edge, 615 to 635 |
| V3 | yes | text cut by the edge, 653 to 673 |
| V4 | yes | text cut by the edge, 654 to 674 |
| V5 | yes | content reaches 701 of 715 and more follows below |
| V6 | yes | content reaches 834 of 839 and more follows below |
| V7 | yes | content reaches 675 of 681 and more follows below |
| V8 | yes | text cut by the edge, 712 to 742 |
| V9 | yes | content reaches 832 of 844 and more follows below |
| V10 | yes | text cut by the edge, 335 to 355 |
| V11 | yes | content reaches 1012 of 1024 and more follows below |
| V12 | yes | content reaches 1182 of 1194 and more follows below |
| V13 | yes | content reaches 756 of 768 and more follows below |
| V14 | yes | content reaches 708 of 720 and more follows below |
| V15 | yes | content reaches 636 of 648 and more follows below |
| V16 | yes | content reaches 888 of 900 and more follows below |
| V17 | yes | content reaches 948 of 960 and more follows below |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | content reaches 557 of 576 and more follows below |

## The GT marks under forced colours

Both GT marks are two-colour artwork, so each needs a ground that keeps its own colours: the Anywhere mark loses its second word on a forced white ground, and the GT School mark loses its navy lettering on a forced black one.

| Scheme | File | Result |
|---|---|---|
| light | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| light | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| light | `gt-school-logo-h.svg` | kept by the image itself |
| light | `gt-school-logo-h.svg` | kept by the image itself |
| light | `gt-anywhere-logo-h.svg` | kept by the image itself |
| light | `gt-school-logo-h.svg` | kept by the image itself |
| light | `gt-anywhere-logo-h.svg` | kept by the image itself |
| dark | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| dark | focus ring on `mark link` | 21:1 against the surface it is drawn on, outside the element |
| dark | `gt-school-logo-h.svg` | kept by the image itself |
| dark | `gt-school-logo-h.svg` | kept by the image itself |
| dark | `gt-anywhere-logo-h.svg` | kept by the image itself |
| dark | `gt-school-logo-h.svg` | kept by the image itself |
| dark | `gt-anywhere-logo-h.svg` | kept by the image itself |

## Interactive targets under 44px

BUILDER-BRIEF rule 11 asks for 44px; WCAG 2.5.8 requires 24px at AA and is met by size or by spacing. Everything under 44 is listed as evidence for the critics. Only a door CTA under 44 fails the run.

| Viewport | Target | Height | Width | Kind | Result |
|---|---|---|---|---|---|
| 320 by 256 | Terms | 44px | 35px | short control | under 44, above the 24px floor |
| 375 by 629 | Terms | 44px | 35px | short control | under 44, above the 24px floor |
| 1440 by 900 | Terms | 44px | 38px | short control | under 44, above the 24px floor |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27.9px | 121.1px | 0% | ok |
| 390 by 844 | `gt-icon.svg` | icon | 56px | 56px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 55.3px | 240px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 45.7px | 240px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27.9px | 121.1px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 27.9px | 146.4px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-icon.svg` | icon | 56px | 56px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 55.3px | 240px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 45.7px | 240px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass
