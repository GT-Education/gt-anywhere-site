# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/bbb8a2c4738e2b0c/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T22:48:41.577Z; page `/0_plan/mockups/M28-the-weave/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 88 | 339 | 368 | 463 | 574 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 88 | 341 | 370 | 466 | 577 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 88 | 312 | 341 | 436 | 547 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 88 | 312 | 341 | 436 | 547 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 88 | 315 | 344 | 439 | 550 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 88 | 417 | 454 | 565 | 676 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 88 | 314 | 343 | 438 | 549 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 285 | 314 | 409 | 520 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 88 | 414 | 451 | 562 | 673 | yes | report: page height 3521 |
| V10 | 750 by 342 | fold | 318 | 56 | 185 | 210 | 286 | 302 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 360 | 397 | 555 | 555 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 366 | 403 | 562 | 562 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 382 | 420 | 580 | 580 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 292 | 323 | 461 | 461 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 300 | 330 | 469 | 469 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 418 | 457 | 620 | 620 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 418 | 457 | 620 | 620 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 88 | 370 | 420 | 538 | 649 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 271 | 301 | 436 | 436 | yes | report: scrollWidth 1024 |

## Reduced motion (V14, prefers-reduced-motion: reduce)

PASS: every computed transition and animation duration is 0s (elements and pseudo-elements).

## Root font doubled at V2 (a stand-in for a large text setting)

PASS: no horizontal scroll at 375 with a 32px root.

## Focus and forced colours

Captures: focus-cta.jpg (first door CTA focused); focus-plate.jpg (header lockup link focused); no GT Anywhere footer link found; forced-colors.jpg (forced-colors: active at V14). The critics judge these by eye.

## Console

PASS: no console errors.

## Next band evidence

What the runner saw continuing below the fold. Ink means text, a painted edge or an image: section padding and the empty leading of a line box do not count.

| Row | Cut | Element and the ink that crosses the bottom edge |
|---|---|---|
| V1 | yes | content reaches 733 of 740 and more follows below |
| V2 | yes | text cut by the edge, 614 to 644 |
| V3 | yes | content reaches 658 of 664 and more follows below |
| V4 | yes | content reaches 659 of 659 and more follows below |
| V5 | yes | content reaches 710 of 715 and more follows below |
| V6 | yes | content reaches 836 of 839 and more follows below |
| V7 | yes | text cut by the edge, 664 to 684 |
| V8 | yes | text cut by the edge, 711 to 741 |
| V9 | yes | content reaches 833 of 844 and more follows below |
| V10 | yes | content reaches 340 of 342 and more follows below |
| V11 | yes | text cut by the edge, 1009 to 1029 |
| V12 | yes | content reaches 1193 of 1194 and more follows below |
| V13 | yes | text cut by the edge, 756 to 800 |
| V14 | yes | content reaches 696 of 720 and more follows below |
| V15 | yes | content reaches 633 of 648 and more follows below |
| V16 | yes | content reaches 896 of 900 and more follows below |
| V17 | yes | content reaches 959 of 960 and more follows below |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 556 to 577 |

## The GT marks under forced colours

Both GT marks are two-colour artwork, so each needs a ground that keeps its own colours: the Anywhere mark loses its second word on a forced white ground, and the GT School mark loses its navy lettering on a forced black one.

| Scheme | File | Result |
|---|---|---|
| light | focus ring on `mark link` | 8.2:1 against its own retained ground |
| light | `gt-school-logo-h.svg` | kept by the image itself |
| dark | focus ring on `mark link` | 8.2:1 against its own retained ground |
| dark | `gt-school-logo-h.svg` | kept by the image itself |

## Interactive targets under 44px

BUILDER-BRIEF rule 11 asks for 44px; WCAG 2.5.8 requires 24px at AA and is met by size or by spacing. Everything under 44 is listed as evidence for the critics. Only a door CTA under 44 fails the run.

| Viewport | Target | Height | Width | Kind | Result |
|---|---|---|---|---|---|
| 320 by 256 | Skip to content | 40px | 152px | short control | under 44, above the 24px floor |
| 320 by 256 | Compare the two. | 20px | 123px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | Skip to content | 40px | 152px | short control | under 44, above the 24px floor |
| 375 by 629 | Compare the two. | 20px | 123px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | Skip to content | 43px | 167px | short control | under 44, above the 24px floor |
| 1440 by 900 | Compare the two. | 21px | 139px | short control | under 24px: check WCAG 2.5.8 spacing |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27.9px | 121.1px | 0% | ok |
| 390 by 844 | `gt-icon.svg` | icon | 56px | 56px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-icon.svg` | icon | 56px | 56px | 0% | ok |

## Result: all required rows pass
