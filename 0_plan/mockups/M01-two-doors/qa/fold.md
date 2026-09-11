# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T19:08:38.515Z; page `/0_plan/mockups/M01-two-doors/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 313 | 342 | 472 | 595 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 283 | 312 | 442 | 565 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 286 | 315 | 445 | 568 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 286 | 315 | 445 | 568 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 257 | 286 | 416 | 539 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 257 | 286 | 416 | 539 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 287 | 316 | 446 | 570 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 259 | 288 | 418 | 542 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 286 | 315 | 445 | 568 | yes | report: page height 6923 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 291 | 291 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 237 | 267 | 506 | 762 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 243 | 272 | 512 | 769 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 258 | 288 | 524 | 524 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 279 | 309 | 549 | 549 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 308 | 499 | 499 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 316 | 346 | 618 | 618 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 316 | 346 | 618 | 618 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 344 | 394 | 558 | 715 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 258 | 288 | 524 | 524 | yes | report: scrollWidth 1024 |

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
| V1 | yes | content reaches 730 of 740 and more follows below |
| V2 | yes | content reaches 628 of 629 and more follows below |
| V3 | yes | text cut by the edge, 659 to 679 |
| V4 | yes | content reaches 655 of 659 and more follows below |
| V5 | yes | text cut by the edge, 703 to 723 |
| V6 | yes | content reaches 825 of 839 and more follows below |
| V7 | yes | content reaches 681 of 681 and more follows below |
| V8 | yes | text cut by the edge, 729 to 749 |
| V9 | yes | text cut by the edge, 822 to 852 |
| V10 | yes | text cut by the edge, 326 to 346 |
| V11 | yes | text cut by the edge, 986 to 1028 |
| V12 | yes | text cut by the edge, 1185 to 1200 |
| V13 | yes | content reaches 760 of 768 and more follows below |
| V14 | yes | text cut by the edge, 689 to 737 |
| V15 | yes | text cut by the edge, 623 to 672 |
| V16 | yes | text cut by the edge, 894 to 944 |
| V17 | yes | content reaches 944 of 960 and more follows below |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 554 to 587 |

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
| 1440 by 900 | Not sure which is right for yo | 35px | 656px | sentence link | inline sentence link, exempt under WCAG 2.5.8 |

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
