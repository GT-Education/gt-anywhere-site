# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T19:56:18.174Z; page `/0_plan/mockups/M22-hard-cut/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 92 | 294 | 331 | 472 | 604 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 260 | 297 | 437 | 570 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 262 | 299 | 440 | 572 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 231 | 268 | 408 | 541 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 233 | 270 | 410 | 543 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 233 | 270 | 410 | 543 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 231 | 269 | 409 | 542 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 234 | 271 | 412 | 545 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 262 | 299 | 440 | 572 | yes | report: page height 6440 |
| V10 | 750 by 342 | fold | 318 | 56 | 120 | 149 | 276 | 276 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 393 | 430 | 689 | 689 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 480 | 517 | 777 | 777 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 272 | 310 | 573 | 573 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 287 | 325 | 592 | 592 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 294 | 332 | 600 | 600 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 355 | 393 | 662 | 662 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 385 | 423 | 692 | 692 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 92 | 325 | 383 | 538 | 670 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 296 | 559 | 559 | no | report: scrollWidth 1024 |

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
| V1 | yes | content reaches 722 of 740 and more follows below |
| V2 | yes | text cut by the edge, 620 to 640 |
| V3 | yes | text cut by the edge, 646 to 666 |
| V4 | yes | content reaches 659 of 659 and more follows below |
| V5 | yes | text cut by the edge, 706 to 726 |
| V6 | yes | content reaches 825 of 839 and more follows below |
| V7 | yes | content reaches 660 of 681 and more follows below |
| V8 | yes | content reaches 728 of 739 and more follows below |
| V9 | yes | text cut by the edge, 824 to 854 |
| V10 | yes | text cut by the edge, 327 to 347 |
| V11 | yes | text cut by the edge, 993 to 1035 |
| V12 | yes | text cut by the edge, 1165 to 1207 |
| V13 | yes | text cut by the edge, 739 to 783 |
| V14 | yes | text cut by the edge, 711 to 724 |
| V15 | yes | text cut by the edge, 636 to 671 |
| V16 | yes | text cut by the edge, 870 to 920 |
| V17 | yes | text cut by the edge, 930 to 980 |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |

## The GT Anywhere mark under forced colours

Its wordmark is part near-white, so on a forced white ground it renders as "GT" with "anywhere" missing unless something in its ancestry keeps its own colours.

| Scheme | File | Result |
|---|---|---|
| light | focus ring on `mark link` | 13.88:1 against its own retained ground |
| light | focus ring on `mark link` | 14.58:1 against its own retained ground |
| light | `gt-anywhere-logo-h.svg` | kept by the image itself |
| dark | focus ring on `mark link` | 13.88:1 against its own retained ground |
| dark | focus ring on `mark link` | 14.58:1 against its own retained ground |
| dark | `gt-anywhere-logo-h.svg` | kept by the image itself |

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
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 27px | 141.8px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass
