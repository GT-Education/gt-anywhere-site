# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T19:10:51.159Z; page `/0_plan/mockups/M25-the-panel/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 89 | 396 | 425 | 512 | 583 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 57 | 342 | 371 | 450 | 521 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 57 | 369 | 398 | 485 | 556 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 57 | 369 | 398 | 485 | 556 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 57 | 372 | 401 | 488 | 559 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 57 | 372 | 401 | 488 | 559 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 57 | 370 | 399 | 486 | 557 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 57 | 374 | 403 | 491 | 562 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 57 | 369 | 398 | 485 | 556 | yes | report: page height 7230 |
| V10 | 750 by 342 | fold | 318 | 57 | 187 | 216 | 288 | 288 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 57 | 369 | 406 | 502 | 502 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 57 | 374 | 412 | 507 | 507 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 57 | 326 | 356 | 443 | 443 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 57 | 347 | 377 | 465 | 465 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 57 | 354 | 384 | 472 | 472 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 57 | 424 | 462 | 559 | 559 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 57 | 424 | 462 | 559 | 559 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 89 | 422 | 472 | 551 | 622 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 57 | 302 | 332 | 411 | 411 | yes | report: scrollWidth 1024 |

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
| V1 | yes | content reaches 728 of 740 and more follows below |
| V2 | yes | content reaches 627 of 629 and more follows below |
| V3 | yes | text cut by the edge, 657 to 677 |
| V4 | yes | content reaches 653 of 659 and more follows below |
| V5 | yes | content reaches 705 of 715 and more follows below |
| V6 | yes | text cut by the edge, 811 to 841 |
| V7 | yes | content reaches 679 of 681 and more follows below |
| V8 | yes | text cut by the edge, 730 to 750 |
| V9 | yes | text cut by the edge, 833 to 863 |
| V10 | yes | text cut by the edge, 335 to 355 |
| V11 | yes | content reaches 1019 of 1024 and more follows below |
| V12 | yes | content reaches 1192 of 1194 and more follows below |
| V13 | yes | content reaches 756 of 768 and more follows below |
| V14 | yes | content reaches 712 of 720 and more follows below |
| V15 | yes | text cut by the edge, 625 to 660 |
| V16 | yes | content reaches 899 of 900 and more follows below |
| V17 | yes | text cut by the edge, 945 to 966 |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 571 to 604 |

## The GT Anywhere mark under forced colours

Its wordmark is part near-white, so on a forced white ground it renders as "GT" with "anywhere" missing unless something in its ancestry keeps its own colours.

| Scheme | File | Result |
|---|---|---|
| light | focus ring on `mark link` | 14.58:1 against its own retained ground |
| light | `gt-anywhere-logo-h.svg` | kept by the image itself |
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
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27.9px | 121.1px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27.9px | 121.1px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 27.9px | 146.4px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass
