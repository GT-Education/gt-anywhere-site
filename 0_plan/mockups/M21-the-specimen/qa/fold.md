# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T16:22:07.295Z; page `/0_plan/mockups/M21-the-specimen/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 93 | 334 | 368 | 527 | 649 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 93 | 320 | 346 | 477 | 587 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 287 | 312 | 443 | 554 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 287 | 312 | 443 | 554 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 274 | 307 | 467 | 589 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 274 | 307 | 466 | 589 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 256 | 282 | 413 | 524 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 276 | 309 | 469 | 591 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 303 | 336 | 495 | 618 | yes | report: page height 6102 |
| V10 | 750 by 342 | fold | 318 | 57 | 148 | 174 | 301 | 301 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 246 | 280 | 442 | 442 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 252 | 286 | 447 | 447 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 311 | 346 | 509 | 509 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 288 | 322 | 487 | 487 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 271 | 297 | 435 | 435 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 301 | 335 | 501 | 501 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 301 | 335 | 501 | 501 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 57 | 313 | 356 | 504 | 614 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 287 | 314 | 449 | 449 | yes | report: scrollWidth 1024 |

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
| V2 | yes | content reaches 625 of 629 and more follows below |
| V3 | yes | content reaches 664 of 664 and more follows below |
| V4 | yes | text cut by the edge, 644 to 664 |
| V5 | yes | text cut by the edge, 704 to 724 |
| V6 | yes | text cut by the edge, 824 to 844 |
| V7 | yes | content reaches 674 of 681 and more follows below |
| V8 | yes | text cut by the edge, 730 to 750 |
| V9 | yes | content reaches 824 of 844 and more follows below |
| V10 | yes | text cut by the edge, 336 to 356 |
| V11 | yes | content reaches 1004 of 1024 and more follows below |
| V12 | yes | content reaches 1184 of 1194 and more follows below |
| V13 | yes | surface changes from rgb(252, 244, 239) to rgb(0, 42, 58) between the last CTA and the bottom edge, and the page continues below |
| V14 | yes | surface changes from rgb(252, 244, 239) to rgb(0, 42, 58) between the last CTA and the bottom edge, and the page continues below |
| V15 | yes | content reaches 647 of 648 and more follows below |
| V16 | yes | content reaches 895 of 900 and more follows below |
| V17 | yes | text cut by the edge, 940 to 961 |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 560 to 581 |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 28px | 121.6px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 28px | 121.6px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | unknown | 28px | 147px | n/a | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | unknown | 32px | 168px | n/a | ok |

## Result: all required rows pass
