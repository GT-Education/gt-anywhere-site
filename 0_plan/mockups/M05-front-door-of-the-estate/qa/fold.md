# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T14:57:45.238Z; page `/0_plan/mockups/M05-front-door-of-the-estate/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 93 | 303 | 332 | 477 | 601 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 57 | 269 | 298 | 430 | 555 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 271 | 300 | 432 | 557 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 271 | 300 | 433 | 557 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 242 | 271 | 403 | 528 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 242 | 271 | 403 | 528 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 240 | 270 | 402 | 527 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 243 | 272 | 405 | 530 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 271 | 300 | 432 | 557 | yes | report: page height 7540 |
| V10 | 750 by 342 | fold | 318 | 57 | 160 | 186 | 299 | 299 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 285 | 323 | 549 | 549 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 292 | 330 | 557 | 557 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 267 | 305 | 535 | 535 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 288 | 326 | 533 | 533 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 295 | 333 | 541 | 541 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 301 | 339 | 548 | 548 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 301 | 339 | 548 | 548 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 93 | 334 | 384 | 529 | 653 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 267 | 305 | 535 | 535 | yes | report: scrollWidth 1024 |

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
| V1 | yes | text cut by the edge, 723 to 743 |
| V2 | yes | text cut by the edge, 621 to 641 |
| V3 | yes | text cut by the edge, 647 to 667 |
| V4 | yes | text cut by the edge, 648 to 668 |
| V5 | yes | content reaches 695 of 715 and more follows below |
| V6 | yes | text cut by the edge, 827 to 842 |
| V7 | yes | text cut by the edge, 673 to 693 |
| V8 | yes | content reaches 726 of 739 and more follows below |
| V9 | yes | content reaches 842 of 844 and more follows below |
| V10 | yes | text cut by the edge, 334 to 354 |
| V11 | yes | text cut by the edge, 998 to 1040 |
| V12 | yes | content reaches 1187 of 1194 and more follows below |
| V13 | yes | content reaches 761 of 768 and more follows below |
| V14 | yes | svg cut by the edge, 678 to 742 |
| V15 | yes | svg cut by the edge, 606 to 670 |
| V16 | yes | content reaches 893 of 900 and more follows below |
| V17 | yes | text cut by the edge, 935 to 985 |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | content reaches 560 of 576 and more follows below |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 27px | 141.8px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass
