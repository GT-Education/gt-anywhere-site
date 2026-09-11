# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T18:14:31.598Z; page `/0_plan/mockups/M24-one-at-a-time/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 92 | 325 | 362 | 483 | 595 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 92 | 319 | 356 | 469 | 581 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 92 | 322 | 359 | 471 | 584 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 92 | 322 | 359 | 472 | 584 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 92 | 301 | 338 | 459 | 571 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 92 | 301 | 338 | 466 | 579 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 92 | 299 | 336 | 457 | 570 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 304 | 425 | 538 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 92 | 330 | 367 | 487 | 600 | yes | report: page height 9856 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 284 | 284 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 316 | 353 | 663 | 663 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 283 | 321 | 731 | 731 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 296 | 506 | 506 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 317 | 492 | 492 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 286 | 324 | 468 | 468 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 300 | 338 | 593 | 593 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 338 | 623 | 623 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 92 | 348 | 406 | 525 | 637 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 242 | 280 | 406 | 406 | yes | report: scrollWidth 1024 |

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
| V1 | yes | content reaches 737 of 740 and more follows below |
| V2 | yes | text cut by the edge, 623 to 643 |
| V3 | yes | text cut by the edge, 650 to 670 |
| V4 | yes | text cut by the edge, 650 to 670 |
| V5 | yes | content reaches 714 of 715 and more follows below |
| V6 | yes | content reaches 824 of 839 and more follows below |
| V7 | yes | content reaches 680 of 681 and more follows below |
| V8 | yes | text cut by the edge, 728 to 755 |
| V9 | yes | text cut by the edge, 834 to 861 |
| V10 | yes | text cut by the edge, 327 to 347 |
| V11 | yes | content reaches 1009 of 1024 and more follows below |
| V12 | yes | content reaches 1179 of 1194 and more follows below |
| V13 | yes | content reaches 753 of 768 and more follows below |
| V14 | yes | content reaches 705 of 720 and more follows below |
| V15 | yes | content reaches 640 of 648 and more follows below |
| V16 | yes | content reaches 885 of 900 and more follows below |
| V17 | yes | content reaches 945 of 960 and more follows below |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | content reaches 561 of 576 and more follows below |

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
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass
