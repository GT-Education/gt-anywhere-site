# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T19:08:46.774Z; page `/0_plan/mockups/M02-the-journal/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 90 | 323 | 369 | 490 | 603 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 90 | 317 | 363 | 477 | 590 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 294 | 340 | 461 | 574 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 294 | 340 | 461 | 574 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 265 | 311 | 432 | 546 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 265 | 311 | 528 | 730 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 295 | 341 | 463 | 576 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 267 | 313 | 434 | 548 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 294 | 340 | 557 | 759 | yes | report: page height 6341 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 177 | 288 | 288 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 245 | 292 | 530 | 530 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 251 | 297 | 537 | 537 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 242 | 289 | 386 | 386 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 263 | 310 | 408 | 408 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 270 | 317 | 460 | 460 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 284 | 331 | 482 | 482 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 347 | 506 | 506 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 90 | 346 | 413 | 543 | 656 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 242 | 289 | 422 | 422 | yes | report: scrollWidth 1024 |

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
| V2 | yes | text cut by the edge, 616 to 636 |
| V3 | yes | content reaches 660 of 664 and more follows below |
| V4 | yes | text cut by the edge, 640 to 660 |
| V5 | yes | text cut by the edge, 700 to 720 |
| V6 | yes | text cut by the edge, 825 to 840 |
| V7 | yes | text cut by the edge, 666 to 686 |
| V8 | yes | text cut by the edge, 727 to 747 |
| V9 | yes | text cut by the edge, 818 to 845 |
| V10 | yes | content reaches 334 of 342 and more follows below |
| V11 | yes | content reaches 1013 of 1024 and more follows below |
| V12 | yes | content reaches 1172 of 1194 and more follows below |
| V13 | yes | text cut by the edge, 760 to 775 |
| V14 | yes | text cut by the edge, 708 to 723 |
| V15 | yes | content reaches 646 of 648 and more follows below |
| V16 | yes | text cut by the edge, 889 to 910 |
| V17 | yes | text cut by the edge, 942 to 963 |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 567 to 588 |

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
| 320 by 256 | Skip to main content | 37.3px | 202px | short control | under 44, above the 24px floor |
| 320 by 256 | anywhere.gt.school/academics | 17px | 187px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | gt.school/academics | 17px | 125px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | anywhere.gt.school/academics | 17px | 187px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | anywhere.gt.school/intensives | 17px | 182px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | the Terms of Use | 17px | 103px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | anywhere.gt.school/academics | 17px | 187px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | gt.school/academics | 17px | 125px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | anywhere.gt.school/academics | 17px | 187px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | anywhere.gt.school/intensives | 17px | 182px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | the Terms of Use | 17px | 103px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | Skip to main content | 37.3px | 202px | short control | under 44, above the 24px floor |
| 375 by 629 | anywhere.gt.school/academics | 17px | 187px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | gt.school/academics | 17px | 125px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | anywhere.gt.school/academics | 17px | 187px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | anywhere.gt.school/intensives | 17px | 182px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | the Terms of Use | 17px | 103px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | anywhere.gt.school/academics | 17px | 187px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | gt.school/academics | 17px | 125px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | anywhere.gt.school/academics | 17px | 187px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | anywhere.gt.school/intensives | 17px | 182px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | the Terms of Use | 17px | 103px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | Skip to main content | 38.5px | 212px | short control | under 44, above the 24px floor |
| 1440 by 900 | anywhere.gt.school/academics | 19px | 201px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | gt.school/academics | 19px | 134px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | anywhere.gt.school/academics | 19px | 201px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | anywhere.gt.school/intensives | 19px | 195px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | the Terms of Use | 19px | 110px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | anywhere.gt.school/academics | 19px | 201px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | gt.school/academics | 19px | 134px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | anywhere.gt.school/academics | 19px | 201px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | anywhere.gt.school/intensives | 19px | 195px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | the Terms of Use | 19px | 110px | short control | under 24px: check WCAG 2.5.8 spacing |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27.9px | 121.1px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 32px | 168px | 0% | ok |

## Result: all required rows pass
