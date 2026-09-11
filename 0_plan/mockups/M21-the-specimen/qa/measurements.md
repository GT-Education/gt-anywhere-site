# M21 measurements

Runner: `qa/M21-measure.mjs`, Playwright from `/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`, 153.0.8010.36; 2026-09-11T17:59:26.461Z.

## h1 and construction-grid clearance

| Row | Viewport | h1 size | h1 lines | h1 height | Grid lines | Visible | Crossings | Smallest clearance | Where |
|---|---|---|---|---|---|---|---|---|---|
| V1 | 360 by 740 | 27px | 6 | 186px | 16 | 16 | 0 | 15px | GT School is a selective sch / margin rule |
| V2 | 375 by 629 | 27.26px | 6 | 188px | 16 | 16 | 0 | 15px | GT School is a selective sch / margin rule |
| V3 | 390 by 664 | 27.53px | 6 | 190px | 16 | 16 | 0 | 15px | Contact admissions / margin rule |
| V4 | 393 by 659 | 27.58px | 5 | 159px | 16 | 16 | 0 | 15px | Contact admissions / margin rule |
| V5 | 414 by 715 | 27.95px | 5 | 161px | 16 | 16 | 0 | 15px | Contact admissions / margin rule |
| V6 | 412 by 839 | 27.92px | 5 | 161px | 16 | 16 | 0 | 15px | Contact admissions / margin rule |
| V7 | 402 by 681 | 27.74px | 5 | 159px | 16 | 16 | 0 | 15px | Contact admissions / margin rule |
| V8 | 430 by 739 | 28.23px | 5 | 162px | 16 | 16 | 0 | 15px | Contact admissions / margin rule |
| V9 | 390 by 844 | 27.53px | 6 | 190px | 16 | 16 | 0 | 15px | Contact admissions / margin rule |
| V10 | 750 by 342 | 24.17px | 2 | 56px | 16 | 16 | 0 | 15px | Contact admissions / margin rule |
| V11 | 768 by 1024 | 34.18px | 4 | 157px | 40 | 24 | 0 | 15px | Contact admissions / margin rule |
| V12 | 834 by 1194 | 35.34px | 4 | 163px | 40 | 23 | 0 | 15px | Contact admissions / margin rule |
| V13 | 1024 by 768 | 38.68px | 5 | 222px | 120 | 65 | 0 | 7.8px | In person / column line |
| V14 | 1280 by 720 | 43.19px | 4 | 199px | 120 | 69 | 0 | 15px | Contact admissions / margin rule |
| V15 | 1366 by 648 | 44.7px | 4 | 206px | 120 | 70 | 0 | 15px | Contact admissions / margin rule |
| V16 | 1440 by 900 | 46px | 4 | 212px | 120 | 70 | 0 | 15px | Contact admissions / margin rule |
| V17 | 1920 by 960 | 46px | 4 | 212px | 120 | 70 | 0 | 15px | Contact admissions / margin rule |
| V18 | 320 by 256 | 27px | 7 | 217px | 16 | 16 | 0 | 15px | Current families / margin rule |
| V19 | 1024 by 576 | 38.68px | 5 | 222px | 120 | 65 | 0 | 7.8px | In person / column line |

**Crossings at every row: 0. Smallest clearance from a visible construction line to any glyph: 7.8px (V13).**

## Every drawn line class, against the ink beside it

Every mark the stylesheet paints, not the construction grid alone: the rectangle the browser draws,
measured to the nearest glyph's **ink** box (the font box inset by the canvas metrics, so Literata's
0.1675 em of overhang is not counted as type). An overlap is a crossing.

| Line class | Marks at the busiest row | Crossings, all 19 rows | Smallest clearance to ink | Where | Row |
|---|---|---|---|---|---|
| margin rule | 16 | 0 | 15px | GT School is a selective sch | V1 |
| column line | 104 | 0 | 7.8px | In person | V13 |
| measure line (dashed) | 2 | 0 | 8px | Two ways to attend | V1 |
| measure drop (dashed) | 2 | 0 | 3.39px | Two ways to attend | V10 |
| corner handle | 12 | 0 | 2.13px | GT School is a selective sch | V15 |
| registration cross | 1 | 0 | 23.95px | Contact admissions | V13 |
| drawn rule | 51 | 0 | 6.67px | In person | V2 |

**Drawn line classes: 7. Crossings of type by any drawn line, all nineteen rows: 0.**

## Annotation contrast against its own ground

| Row | Element | Size | Colour | Ground | Ratio |
|---|---|---|---|---|---|
| V2 | `.provenance` | 14.01px | rgb(91, 91, 91) | rgb(252, 244, 239) | **6.25:1** |
| V2 | `.anno` | 10px | rgb(91, 91, 91) | rgb(252, 244, 239) | **6.25:1** |
| V2 | `.anno` | 10px | rgb(91, 91, 91) | rgb(252, 244, 239) | **6.25:1** |
| V2 | `.anno` | 10px | rgb(91, 91, 91) | rgb(252, 244, 239) | **6.25:1** |
| V2 | `.anno` | 10px | rgb(163, 191, 203) | rgb(0, 42, 58) | **7.81:1** |
| V2 | `.caption` | 10px | rgb(163, 191, 203) | rgb(0, 42, 58) | **7.81:1** |
| V2 | `.sources` | 12.01px | rgb(163, 191, 203) | rgb(0, 42, 58) | **7.81:1** |
| V2 | `.anno` | 10px | rgb(163, 191, 203) | rgb(0, 42, 58) | **7.81:1** |
| V2 | `.anno` | 10px | rgb(163, 191, 203) | rgb(0, 42, 58) | **7.81:1** |
| V2 | `.anno` | 10px | rgb(91, 91, 91) | rgb(248, 232, 222) | **5.69:1** |
| V2 | `.sources` | 12.01px | rgb(91, 91, 91) | rgb(248, 232, 222) | **5.69:1** |
| V2 | `.anno` | 10px | rgb(91, 91, 91) | rgb(252, 244, 239) | **6.25:1** |
| V2 | `.anno` | 10px | rgb(163, 191, 203) | rgb(0, 42, 58) | **7.81:1** |
| V2 | `.anno` | 10px | rgb(91, 91, 91) | rgb(248, 232, 222) | **5.69:1** |
| V2 | `.footer-facts` | 14.01px | rgb(91, 91, 91) | rgb(252, 244, 239) | **6.25:1** |
| V16 | `.provenance` | 15px | rgb(91, 91, 91) | rgb(252, 244, 239) | **6.25:1** |
| V16 | `.anno` | 10px | rgb(91, 91, 91) | rgb(252, 244, 239) | **6.25:1** |
| V16 | `.anno` | 10px | rgb(91, 91, 91) | rgb(252, 244, 239) | **6.25:1** |
| V16 | `.anno` | 10px | rgb(91, 91, 91) | rgb(252, 244, 239) | **6.25:1** |
| V16 | `.anno` | 10px | rgb(163, 191, 203) | rgb(0, 42, 58) | **7.81:1** |
| V16 | `.caption` | 10px | rgb(163, 191, 203) | rgb(0, 42, 58) | **7.81:1** |
| V16 | `.sources` | 13px | rgb(163, 191, 203) | rgb(0, 42, 58) | **7.81:1** |
| V16 | `.anno` | 10px | rgb(163, 191, 203) | rgb(0, 42, 58) | **7.81:1** |
| V16 | `.anno` | 10px | rgb(163, 191, 203) | rgb(0, 42, 58) | **7.81:1** |
| V16 | `.anno` | 10px | rgb(91, 91, 91) | rgb(248, 232, 222) | **5.69:1** |
| V16 | `.sources` | 13px | rgb(91, 91, 91) | rgb(248, 232, 222) | **5.69:1** |
| V16 | `.anno` | 10px | rgb(91, 91, 91) | rgb(252, 244, 239) | **6.25:1** |
| V16 | `.anno` | 10px | rgb(163, 191, 203) | rgb(0, 42, 58) | **7.81:1** |
| V16 | `.anno` | 10px | rgb(91, 91, 91) | rgb(248, 232, 222) | **5.69:1** |
| V16 | `.footer-facts` | 15px | rgb(91, 91, 91) | rgb(252, 244, 239) | **6.25:1** |

## Line inks per chapter ground

| Row | Chapter | Ground | Grid ink | Grid ratio | Rule ink | Rule ratio |
|---|---|---|---|---|---|---|
| V2 | chapter--bg site-header | rgb(252, 244, 239) | color(srgb 0.568235 0.543922 0.527843) | 3.1:1 | rgb(133, 127, 123) | 3.63:1 |
| V2 | chapter--bg first | rgb(252, 244, 239) | color(srgb 0.568235 0.543922 0.527843) | 3.1:1 | rgb(133, 127, 123) | 3.63:1 |
| V2 | chapter--navy | rgb(0, 42, 58) | color(srgb 0.380235 0.458353 0.487216) | 3.12:1 | rgb(251, 251, 251) | 14.58:1 |
| V2 | chapter--surface | rgb(248, 232, 222) | color(srgb 0.539608 0.51451 0.497882) | 3.12:1 | color(srgb 0.49549 0.476471 0.462745) | 3.58:1 |
| V2 | chapter--bg | rgb(252, 244, 239) | color(srgb 0.568235 0.543922 0.527843) | 3.1:1 | rgb(133, 127, 123) | 3.63:1 |
| V2 | chapter--navy | rgb(0, 42, 58) | color(srgb 0.380235 0.458353 0.487216) | 3.12:1 | color(srgb 0.370745 0.503608 0.557255) | 3.58:1 |
| V2 | chapter--surface | rgb(248, 232, 222) | color(srgb 0.539608 0.51451 0.497882) | 3.12:1 | color(srgb 0.49549 0.476471 0.462745) | 3.58:1 |
| V2 | chapter--bg site-footer | rgb(252, 244, 239) | color(srgb 0.568235 0.543922 0.527843) | 3.1:1 | rgb(133, 127, 123) | 3.63:1 |
| V16 | chapter--bg site-header | rgb(252, 244, 239) | color(srgb 0.568235 0.543922 0.527843) | 3.1:1 | rgb(133, 127, 123) | 3.63:1 |
| V16 | chapter--bg first | rgb(252, 244, 239) | color(srgb 0.568235 0.543922 0.527843) | 3.1:1 | rgb(133, 127, 123) | 3.63:1 |
| V16 | chapter--navy | rgb(0, 42, 58) | color(srgb 0.380235 0.458353 0.487216) | 3.12:1 | color(srgb 0.370745 0.503608 0.557255) | 3.58:1 |
| V16 | chapter--surface | rgb(248, 232, 222) | color(srgb 0.539608 0.51451 0.497882) | 3.12:1 | color(srgb 0.49549 0.476471 0.462745) | 3.58:1 |
| V16 | chapter--bg | rgb(252, 244, 239) | color(srgb 0.568235 0.543922 0.527843) | 3.1:1 | rgb(133, 127, 123) | 3.63:1 |
| V16 | chapter--navy | rgb(0, 42, 58) | color(srgb 0.380235 0.458353 0.487216) | 3.12:1 | color(srgb 0.370745 0.503608 0.557255) | 3.58:1 |
| V16 | chapter--surface | rgb(248, 232, 222) | color(srgb 0.539608 0.51451 0.497882) | 3.12:1 | color(srgb 0.49549 0.476471 0.462745) | 3.58:1 |
| V16 | chapter--bg site-footer | rgb(252, 244, 239) | color(srgb 0.568235 0.543922 0.527843) | 3.1:1 | rgb(133, 127, 123) | 3.63:1 |

