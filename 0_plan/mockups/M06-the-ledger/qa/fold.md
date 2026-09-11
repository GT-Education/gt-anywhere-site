# Fold and matrix run

Runner: `0_plan/tools/shots.mjs` with Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, cached Chrome for Testing chromium-1234 151.0.7922.34; 2026-09-11T16:43:32.323Z; page `/0_plan/mockups/M06-the-ledger/index.html`.

| Row | Viewport | Rule | Limit | header | h1 | provenance | CTA Georgetown | CTA Anywhere | Next band cut | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | fold | 716 | 93 | 275 | 300 | 494 | 623 | yes | PASS |
| V2 | 375 by 629 | fold | 605 | 56 | 211 | 236 | 430 | 560 | yes | PASS |
| V3 | 390 by 664 | fold | 640 | 56 | 212 | 237 | 432 | 561 | yes | PASS |
| V4 | 393 by 659 | fold | 635 | 56 | 212 | 237 | 432 | 561 | yes | PASS |
| V5 | 414 by 715 | fold | 691 | 56 | 213 | 238 | 433 | 562 | yes | PASS |
| V6 | 412 by 839 | fold | 815 | 56 | 213 | 238 | 513 | 723 | yes | PASS |
| V7 | 402 by 681 | fold | 657 | 56 | 212 | 238 | 432 | 562 | yes | PASS |
| V8 | 430 by 739 | fold | 715 | 56 | 214 | 239 | 434 | 564 | yes | PASS |
| V9 | 390 by 844 | emptiness |  | 56 | 212 | 237 | 512 | 721 | yes | report: page height 5211 |
| V10 | 750 by 342 | fold | 318 | 56 | 147 | 199 | 297 | 297 | yes | PASS |
| V11 | 768 by 1024 | fold | 1000 | 56 | 229 | 255 | 546 | 546 | yes | PASS |
| V12 | 834 by 1194 | fold | 1170 | 56 | 235 | 261 | 527 | 527 | yes | PASS |
| V13 | 1024 by 768 | fold | 744 | 56 | 250 | 318 | 543 | 543 | yes | PASS |
| V14 | 1280 by 720 | fold | 696 | 56 | 271 | 339 | 567 | 567 | yes | PASS |
| V15 | 1366 by 648 | fold | 624 | 56 | 278 | 346 | 575 | 575 | yes | PASS |
| V16 | 1440 by 900 | fold | 876 | 56 | 300 | 368 | 598 | 598 | yes | PASS |
| V17 | 1920 by 960 | fold | 936 | 56 | 300 | 368 | 598 | 598 | yes | PASS |
| V18 | 320 by 256 | reflow |  | 93 | 302 | 345 | 546 | 675 | no | PASS no horizontal scroll |
| V19 | 1024 by 576 | zoom |  | 56 | 250 | 318 | 543 | 543 | yes | report: scrollWidth 1024 |

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
| V1 | yes | text cut by the edge, 729 to 749 |
| V2 | yes | content reaches 622 of 629 and more follows below |
| V3 | yes | text cut by the edge, 651 to 671 |
| V4 | yes | text cut by the edge, 651 to 671 |
| V5 | yes | text cut by the edge, 709 to 729 |
| V6 | yes | text cut by the edge, 823 to 843 |
| V7 | yes | content reaches 672 of 681 and more follows below |
| V8 | yes | text cut by the edge, 727 to 747 |
| V9 | yes | content reaches 841 of 844 and more follows below |
| V10 | yes | content reaches 335 of 342 and more follows below |
| V11 | yes | text cut by the edge, 1015 to 1035 |
| V12 | yes | text cut by the edge, 1183 to 1203 |
| V13 | yes | content reaches 765 of 768 and more follows below |
| V14 | yes | content reaches 701 of 720 and more follows below |
| V15 | yes | text cut by the edge, 636 to 657 |
| V16 | yes | content reaches 884 of 900 and more follows below |
| V17 | yes | content reaches 951 of 960 and more follows below |
| V18 | no | no content is visible below the last CTA at all, so nothing signals that the page continues |
| V19 | yes | text cut by the edge, 558 to 579 |

## Interactive targets under 44px

BUILDER-BRIEF rule 11 asks for 44px; WCAG 2.5.8 requires 24px at AA and is met by size or by spacing. Everything under 44 is listed as evidence for the critics. Only a door CTA under 44 fails the run.

| Viewport | Target | Height | Width | Kind | Result |
|---|---|---|---|---|---|
| 320 by 256 | Skip to main content | 37.3px | 202px | short control | under 44, above the 24px floor |
| 320 by 256 | anywhere.gt.school/academics | 15px | 160px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | gt.school/academics | 15px | 107px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | anywhere.gt.school/academics | 15px | 160px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | anywhere.gt.school/intensives | 15px | 156px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | the Terms of Use | 15px | 88px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | anywhere.gt.school/academics | 15px | 160px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | gt.school/academics | 15px | 107px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | anywhere.gt.school/academics | 15px | 160px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | anywhere.gt.school/intensives | 15px | 156px | short control | under 24px: check WCAG 2.5.8 spacing |
| 320 by 256 | the Terms of Use | 15px | 88px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | Skip to main content | 37.3px | 202px | short control | under 44, above the 24px floor |
| 375 by 629 | anywhere.gt.school/academics | 15px | 161px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | gt.school/academics | 15px | 107px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | anywhere.gt.school/academics | 15px | 161px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | anywhere.gt.school/intensives | 15px | 156px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | the Terms of Use | 33px | 322px | short control | under 44, above the 24px floor |
| 375 by 629 | anywhere.gt.school/academics | 15px | 161px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | gt.school/academics | 15px | 107px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | anywhere.gt.school/academics | 15px | 161px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | anywhere.gt.school/intensives | 15px | 156px | short control | under 24px: check WCAG 2.5.8 spacing |
| 375 by 629 | the Terms of Use | 33px | 322px | short control | under 44, above the 24px floor |
| 1440 by 900 | Skip to main content | 38.5px | 212px | short control | under 44, above the 24px floor |
| 1440 by 900 | anywhere.gt.school/academics | 16px | 174px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | gt.school/academics | 16px | 116px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | anywhere.gt.school/academics | 16px | 174px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | anywhere.gt.school/intensives | 16px | 169px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | the Terms of Use | 16px | 96px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | anywhere.gt.school/academics | 16px | 174px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | gt.school/academics | 16px | 116px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | anywhere.gt.school/academics | 16px | 174px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | anywhere.gt.school/intensives | 16px | 169px | short control | under 24px: check WCAG 2.5.8 spacing |
| 1440 by 900 | the Terms of Use | 16px | 96px | short control | under 24px: check WCAG 2.5.8 spacing |

## Mark geometry (K12 V2)

Horizontal marks stand 32px tall at 1440 and at least 27px at 390; aspect must hold within 1%. Measured, not read from CSS.

| Viewport | File | Shape | Height | Width | Aspect skew | Result |
|---|---|---|---|---|---|---|
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 27px | 117.3px | 0% | ok |
| 390 by 844 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 390 by 844 | `gt-anywhere-logo-h.svg` | horizontal | 38.1px | 200px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-school-logo-h.svg` | horizontal | 32px | 139px | 0% | ok |
| 1440 by 900 | `gt-anywhere-logo-h.svg` | horizontal | 38.1px | 200px | 0% | ok |

## Result: all required rows pass
