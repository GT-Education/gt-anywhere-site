# SVG text and h1 measurements (qa/measure.mjs)

2026-09-11T10:29:39.179Z; page `/0_plan/mockups/M07-the-timetable/index.html`.

## Grid form, 960 to 1440 (and 1920): every SVG text box against every other, against its week area, against the door column

| Viewport | Form | Week area | Door column | Texts | Overlapping pairs | Clipped past the week area | Smallest slack to the week edge (label) | Row heights (head, Georgetown, GT Anywhere) |
|---|---|---|---|---|---|---|---|---|
| 1024 by 768 | grid, compact doors | 616px | 344px | 10 | 0 | none | 42px (Friday) | 32, 132, 132 |
| 1024 by 900 | grid, doors with lines | 616px | 344px | 10 | 0 | none | 42px (Friday) | 32, 226, 226 |
| 1100 by 720 | grid, compact doors | 691px | 345px | 10 | 0 | none | 49px (Friday) | 32, 132, 132 |
| 1152 by 864 | grid, doors with lines | 726px | 362px | 10 | 0 | none | 53px (Friday) | 32, 228, 228 |
| 1200 by 720 | grid, compact doors | 758px | 378px | 10 | 0 | none | 56px (Friday) | 32, 132, 132 |
| 1280 by 720 | grid, compact doors | 790px | 394px | 10 | 0 | none | 59px (Friday) | 32, 132, 132 |
| 1280 by 800 | grid, doors with lines | 790px | 394px | 10 | 0 | none | 59px (Friday) | 32, 204, 204 |
| 1366 by 648 | grid, compact doors | 847px | 423px | 10 | 0 | none | 64px (Friday) | 32, 132, 132 |
| 1366 by 900 | grid, doors with lines | 847px | 423px | 10 | 0 | none | 64px (Friday) | 32, 205, 205 |
| 1440 by 900 | grid, doors with lines | 875px | 437px | 10 | 0 | none | 67px (Friday) | 32, 206, 206 |
| 1440 by 720 | grid, compact doors | 875px | 437px | 10 | 0 | none | 67px (Friday) | 32, 132, 132 |
| 1920 by 960 | grid, doors with lines | 875px | 437px | 10 | 0 | none | 67px (Friday) | 32, 206, 206 |

## h1 lines at the fold rows (rendered box height over the line box)

| Row | Viewport | h1 size | h1 column | Lines | h1 height |
|---|---|---|---|---|---|
| V2 | 375 by 629 | 27.26px | 327px | 7 | 219px |
| V5 | 414 by 715 | 27.95px | 366px | 6 | 193px |
| V10 | 750 by 342 | 24.17px | 702px | 3 | 83px |
| V13 | 1024 by 768 | 38.68px | 629px | 5 | 222px |
| V14 | 1280 by 720 | 43.19px | 779px | 4 | 199px |
| V15 | 1366 by 648 | 44.70px | 836px | 4 | 206px |
| V16 | 1440 by 900 | 46.00px | 864px | 4 | 212px |
| V17 | 1920 by 960 | 46.00px | 864px | 4 | 212px |
