# Stage captures

Written by `qa/stage-captures.mjs`, 2026-09-12T01:12:23.557Z, Chromium 151.0.7922.34.

The repo runner photographs the initial viewport. The scale begins on the third screen, so these are the captures that show it.

| File | Viewport | Mode | Where | Orientation | Majors | Fine gradient | Major ink | Marker | Animations |
|---|---|---|---|---|---|---|---|---|---|
| `stage-normal-top.jpg` | 1440 by 900 | normal | stage top (marker at 0) | vertical | 50 | painted | 1px rgb(133, 127, 123) | 4px matrix(1, 0, 0, 0, 0, 0) | 1 |
| `stage-normal-mid.jpg` | 1440 by 900 | normal | mid-range | vertical | 50 | painted | 1px rgb(133, 127, 123) | 4px matrix(1, 0, 0, 0.5, 0, 0) | 1 |
| `stage-forced-light.jpg` | 1440 by 900 | forced-light | mid-range | vertical | 50 | none (suppressed) | 1px rgb(0, 0, 0) | 4px matrix(1, 0, 0, 0.5, 0, 0) | 1 |
| `stage-forced-dark.jpg` | 1440 by 900 | forced-dark | mid-range | vertical | 50 | none (suppressed) | 1px rgb(255, 255, 255) | 4px matrix(1, 0, 0, 0.5, 0, 0) | 1 |
| `stage-reduced-motion.jpg` | 1440 by 900 | reduced | stage top (marker at rest, full length) | vertical | 50 | painted | 1px rgb(133, 127, 123) | 4px none | 0 |
| `stage-phone-normal.jpg` | 390 by 844 | normal | stage top | horizontal | 50 | painted | 1px rgb(133, 127, 123) | 4px matrix(0, 0, 0, 1, 0, 0) | 1 |
| `stage-phone-forced-light.jpg` | 390 by 844 | forced-light | mid-range | horizontal | 50 | none (suppressed) | 1px rgb(0, 0, 0) | 4px matrix(0.499514, 0, 0, 1, 0, 0) | 1 |

Rail crops at 3x device scale, 420px of the rail: `rail-normal.png`, `rail-forced-light.png`, `rail-forced-dark.png`.
