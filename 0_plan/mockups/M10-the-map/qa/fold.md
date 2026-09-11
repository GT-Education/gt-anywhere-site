# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T15:03:04.351Z; page `/0_plan/mockups/M10-the-map/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 89 | 322 | 348 | 494 | 620 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 57 | 292 | 318 | 464 | 590 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 295 | 320 | 450 | 576 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 295 | 320 | 450 | 577 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 266 | 291 | 421 | 548 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 266 | 291 | 505 | 720 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 296 | 322 | 451 | 578 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 268 | 293 | 423 | 550 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 295 | 320 | 534 | 749 | yes | report: page height 6763 |
| V10 | 750 by 342 | fold | 318 | 57 | 148 | 170 | 295 | 295 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 230 | 256 | 501 | 501 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 236 | 262 | 482 | 482 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 251 | 277 | 411 | 411 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 272 | 298 | 439 | 586 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 279 | 305 | 447 | 594 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 293 | 319 | 469 | 616 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 293 | 319 | 469 | 616 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 89 | 353 | 396 | 542 | 668 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 251 | 277 | 411 | 411 | yes | report: scrollWidth 1024 |

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
| V1 | yes | content reaches 740 of 740 and more follows below |
| V2 | yes | text cut by the edge, 615 to 639 |
| V3 | yes | text cut by the edge, 652 to 672 |
| V4 | yes | text cut by the edge, 653 to 673 |
| V5 | yes | text cut by the edge, 705 to 725 |
| V6 | yes | svg cut by the edge, 815 to 1403 |
| V7 | yes | content reaches 674 of 681 and more follows below |
| V8 | yes | content reaches 728 of 739 and more follows below |
| V9 | yes | content reaches 828 of 844 and more follows below |
| V10 | yes | content reaches 337 of 342 and more follows below |
| V11 | yes | text cut by the edge, 1016 to 1058 |
| V12 | yes | text cut by the edge, 1179 to 1199 |
| V13 | yes | svg cut by the edge, 606 to 896 |
| V14 | yes | text cut by the edge, 708 to 734 |
| V15 | yes | text cut by the edge, 626 to 653 |
| V16 | yes | content reaches 877 of 900 and more follows below |
| V17 | yes | content reaches 937 of 960 and more follows below |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 563 to 592 |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | unknown | 27px | 141.8px | n/a | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | unknown | 32px | 168px | n/a | ok |

## Result: all required rows pass
