# Design engineer prompt (G-D build wave), template

Filled per mock by Fable when a wave launches. Runs as a Fable fork with the Playwright MCP browser (or the D-028 runner once approved) in the loop. Ceiling: four build iterations per mock, then escalate with evidence (`17` section 11).

## Read first, in order

1. Your brief: `0_plan/kb/briefs/Mnn.md` (every section is binding; a taste decision the brief does not name is raised in the rationale, not made silently)
2. `0_plan/mockups/shared/BUILDER-BRIEF.md` (16 rules), `copy.md` (fixed slots; new wayfinding words are recorded there before use), `tokens.css`, `fonts.css`, `ASSETS.md`
3. `0_plan/17-design-studio-runbook.md` sections 4 (matrix, fold rule), 6 (rubric), 7 (motion contract)
4. `0_plan/kb/KB-RESOLUTIONS.md` R1 to R17; the clusters your brief cites, at the sections it cites
5. `0_plan/16-g05-decision-record.md` (six decisions), the register rows your brief names

## Build

| Rule | Detail |
|---|---|
| Location | `0_plan/mockups/Mnn-<slug>/index.html`, `styles.css`, `RATIONALE.md`; shared assets by relative path; no external JavaScript, no forms that submit, no dependency |
| Copy | Slots verbatim from `copy.md`; every figure must map to a claims-register row (`check-claims.py`); the sources line once under the facts |
| Logos | Real SVGs from `shared/img/` in header and footer, GT Anywhere on the navy panel (rule R16 of `check-mocks.py`) |
| Photographs | Only files named in the brief's Imagery row, in the state the brief allows today (default state unless DD-42's photographed state is recorded as approved); `object-position` per `ASSETS.md`; alt text from `ASSETS.md` |
| Motion | Only the V-moves your brief lists, with the durations, easing and reduced-motion behaviour K4 section 8.1 gives; zero computed duration under reduced motion; transform and opacity only |
| Accessibility | One h1; landmarks; 44px targets; focus ring per surface (K3 section 5d); contrast per K3 section 5c; `check-mocks.py` 35 rules green |

## Self-QA before you hand over (evidence, not assertion)

| Step | What you produce |
|---|---|
| Matrix | Screenshots at every row of `17` section 4 (19), saved under `Mnn-<slug>/qa/`; the fold rule checked on the phone rows with the bottom coordinate of the last required element recorded in `qa/fold.md` |
| Reduced motion | One run with `prefers-reduced-motion: reduce`: computed durations listed (all 0), state feedback screenshots |
| Zoom and text | 200 percent zoom at V14 and doubled root font at V2: no clipping, no horizontal scroll |
| Checkers | `python3 0_plan/tools/check-mocks.py 0_plan/mockups/Mnn-<slug>` and `python3 1_spec/tools/check-claims.py` output pasted into `RATIONALE.md` |
| Console | Zero console errors on load |
| Rationale | `RATIONALE.md`: the brief's sections mapped to what was built, every departure named with its reason, the taste decisions the brief did not name, the measurements (h1 lines at V2, V5, V14; fold bottoms), and the photographs' state |

## Hand over

Report the checker lines, the fold table, the h1 line counts, and any brief section you could not satisfy and why. The critics score next; you fix what scores below 4 and iterate, at most four times.
