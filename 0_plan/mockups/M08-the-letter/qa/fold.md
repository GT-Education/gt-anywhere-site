# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T16:42:40.403Z; page `/0_plan/mockups/M08-the-letter/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 56 | 289 | 326 | 419 | 510 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 291 | 328 | 421 | 512 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 331 | 424 | 515 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 331 | 424 | 515 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 302 | 488 | 665 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 302 | 488 | 665 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 263 | 300 | 393 | 485 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 304 | 491 | 667 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 331 | 517 | 693 | yes | report: page height 6507 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 262 | 262 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 261 | 299 | 477 | 617 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 267 | 304 | 483 | 624 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 296 | 460 | 586 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 317 | 484 | 611 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 270 | 300 | 459 | 579 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 316 | 354 | 538 | 682 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 316 | 354 | 538 | 682 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 92 | 356 | 414 | 508 | 599 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 242 | 272 | 428 | 546 | yes | report: scrollWidth 1024 |

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
| V1 | yes | text cut by the edge, 720 to 747 |
| V2 | yes | content reaches 626 of 629 and more follows below |
| V3 | yes | text cut by the edge, 656 to 671 |
| V4 | yes | text cut by the edge, 647 to 674 |
| V5 | yes | text cut by the edge, 697 to 721 |
| V6 | yes | text cut by the edge, 826 to 841 |
| V7 | yes | text cut by the edge, 671 to 698 |
| V8 | yes | text cut by the edge, 724 to 748 |
| V9 | yes | content reaches 823 of 844 and more follows below |
| V10 | yes | text cut by the edge, 335 to 363 |
| V11 | yes | content reaches 1014 of 1024 and more follows below |
| V12 | yes | text cut by the edge, 1186 to 1201 |
| V13 | yes | content reaches 744 of 768 and more follows below |
| V14 | yes | text cut by the edge, 712 to 727 |
| V15 | yes | content reaches 632 of 648 and more follows below |
| V16 | yes | text cut by the edge, 858 to 900 |
| V17 | yes | content reaches 948 of 960 and more follows below |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 563 to 588 |

## Interactive targets under 44px

BUILDER-BRIEF rule 11 asks for 44px; WCAG 2.5.8 requires 24px at AA. Everything under 44 is listed. A row fails only under 24px, or a door CTA under 44.

| Viewport | Target | Height | Width | Kind | Result |
|---|---|---|---|---|---|
| all three rows | every interactive target is at least 44px tall | | | | ok |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass
