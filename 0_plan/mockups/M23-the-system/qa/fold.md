# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T16:44:25.024Z; page `/0_plan/mockups/M23-the-system/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 93 | 318 | 347 | 472 | 605 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 57 | 284 | 313 | 438 | 571 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 287 | 316 | 440 | 574 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 287 | 316 | 441 | 574 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 258 | 287 | 412 | 545 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 266 | 295 | 435 | 577 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 256 | 285 | 410 | 544 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 260 | 289 | 414 | 548 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 295 | 324 | 464 | 606 | yes | report: page height 6922 |
| V10 | 750 by 342 | fold | 318 | 57 | 148 | 178 | 305 | 305 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 238 | 268 | 694 | 694 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 244 | 273 | 702 | 702 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 243 | 273 | 410 | 690 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 264 | 294 | 433 | 642 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 271 | 301 | 441 | 590 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 293 | 323 | 480 | 723 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 293 | 323 | 480 | 723 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 93 | 349 | 399 | 530 | 663 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 243 | 273 | 410 | 604 | no | report: scrollWidth 1024 |

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
| V2 | yes | text cut by the edge, 614 to 634 |
| V3 | yes | content reaches 661 of 664 and more follows below |
| V4 | yes | text cut by the edge, 641 to 661 |
| V5 | yes | content reaches 713 of 715 and more follows below |
| V6 | yes | content reaches 834 of 839 and more follows below |
| V7 | yes | text cut by the edge, 667 to 687 |
| V8 | yes | text cut by the edge, 734 to 749 |
| V9 | yes | text cut by the edge, 839 to 854 |
| V10 | yes | text cut by the edge, 332 to 352 |
| V11 | yes | content reaches 1011 of 1024 and more follows below |
| V12 | yes | content reaches 1187 of 1194 and more follows below |
| V13 | yes | text cut by the edge, 748 to 769 |
| V14 | yes | content reaches 713 of 720 and more follows below |
| V15 | yes | text cut by the edge, 644 to 665 |
| V16 | yes | content reaches 893 of 900 and more follows below |
| V17 | yes | content reaches 945 of 960 and more follows below |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |

## Interactive targets under 44px

BUILDER-BRIEF rule 11 asks for 44px; WCAG 2.5.8 requires 24px at AA and is met by size or by spacing. Everything under 44 is listed as evidence for the critics. Only a door CTA under 44 fails the run.

| Viewport | Target | Height | Width | Kind | Result |
|---|---|---|---|---|---|
| all three rows | every interactive target is at least 44px tall | | | | ok |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass
