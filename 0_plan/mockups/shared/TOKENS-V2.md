# tokens-v2.css: provenance and status

| Token or group | Layer | Source | Register row | Status 2026-09-11 |
|---|---|---|---|---|
| Families, spacing, radii, shadows, containers, durations, layer-1 colours | 1 (extracted) | `tokens.css`, R1 research, both live sites | DD-01, DD-19 | Fixed |
| `--text-xs` to `--text-3xl`, `--text-btn` (fluid clamps) | 2 | K2 section 5a; `kb/measurements/K2/` | DD-38 (b), R5 | Proposed working default; fit measured on the fixed copy at V2, V5, V14 in the build wave |
| `--leading-prose: 1.5`, `--measure-prose: 65ch` | 2 | K1 F30 to F33, F31, F38; K2 section 2b | DD-38 (b), RF-55, RF-58 | Proposed; tested before it becomes shared |
| `--color-accent-text`, `--color-text-muted-on-dark`, `--color-border-strong` | 2 | K3 section 5e; K12 G8 to G10 | DD-39 (a), RF-07 | Proposed; new tints, DD-19 departures flagged in every rationale that uses them |
| `--color-on-navy`, `--color-on-accent`, `--color-focus-on-dark` | 2 | K3 sections 5c to 5e; K12 F92 | DD-39 (a), RF-07 | Proposed; existing swatches in new roles |
| `--ease-standard`, `--ease-out`, `--ease-in`, `--duration-none`, reduced-motion zeroing | 2 | K4 F5, F22; section 8.1 | MN-16 (a), RF-53, R8 | Proposed |

Rules: the twenty mocks link `tokens-v2.css`; the five earlier mocks keep `tokens.css`. A mock that uses a layer-2 token names the row in its `RATIONALE.md`. When a row is Agreed, its tokens move to layer 1 here and to `tokens.css` in the same commit.
