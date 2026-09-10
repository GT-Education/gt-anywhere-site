# Shared foundation for the five mocks

| File | Use |
|---|---|
| `tokens.css` | The S3 token set (R1 values, two S3 decisions flagged). Every mock links it first and uses only its custom properties for color, type, space, radius, shadow, motion |
| `fonts.css` | Self-hosted Literata, Inter Tight, Inconsolata from the mirror. No Google Fonts request needed |
| `copy.md` | The copy deck. Fixed slots are identical in every mock; flagged slots ship with the stated default |
| `img/` | The only imagery allowed: photographs already published on gt.school or anywhere.gt.school, plus both logos. `ASSETS.md` describes each file and its alt text |
| `screenshots/` | QA evidence per mock at 390 and 1440, plus reduced-motion |

Serve from the repo root (`python3 -m http.server 8213`) so `/assets/...` font paths resolve; open `/0_plan/mockups/M1-two-doors/`.
