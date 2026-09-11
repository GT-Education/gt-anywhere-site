# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T14:19:58.150Z; page `/0_plan/mockups/M01-two-doors/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 313 | 342 | 481 | 603 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 283 | 312 | 442 | 565 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 286 | 315 | 445 | 568 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 286 | 315 | 445 | 568 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 257 | 286 | 416 | 539 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 257 | 286 | 520 | 756 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 287 | 316 | 446 | 570 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 259 | 288 | 418 | 542 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 286 | 315 | 549 | 784 | yes | report: page height 6983 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 291 | 291 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 237 | 267 | 566 | 566 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 243 | 272 | 538 | 538 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 288 | 540 | 540 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 309 | 565 | 565 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 308 | 515 | 515 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 316 | 354 | 626 | 626 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 316 | 354 | 626 | 626 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 344 | 394 | 558 | 681 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 288 | 540 | 540 | yes | report: scrollWidth 1024 |

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
| V1 | yes | text cut by the edge, 727 to 747 |
| V2 | yes | content reaches 628 of 629 and more follows below |
| V3 | yes | text cut by the edge, 659 to 679 |
| V4 | yes | content reaches 655 of 659 and more follows below |
| V5 | yes | text cut by the edge, 703 to 723 |
| V6 | yes | text cut by the edge, 819 to 849 |
| V7 | yes | content reaches 681 of 681 and more follows below |
| V8 | yes | text cut by the edge, 729 to 749 |
| V9 | yes | text cut by the edge, 822 to 852 |
| V10 | yes | text cut by the edge, 326 to 346 |
| V11 | yes | text cut by the edge, 1011 to 1031 |
| V12 | yes | content reaches 1184 of 1194 and more follows below |
| V13 | yes | content reaches 747 of 768 and more follows below |
| V14 | yes | text cut by the edge, 711 to 726 |
| V15 | yes | content reaches 645 of 648 and more follows below |
| V16 | yes | text cut by the edge, 886 to 936 |
| V17 | yes | content reaches 936 of 960 and more follows below |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | content reaches 565 of 576 and more follows below |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 390 by 844 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 1440 by 900 | `gt-icon.svg` | icon | 32px | 32px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass
