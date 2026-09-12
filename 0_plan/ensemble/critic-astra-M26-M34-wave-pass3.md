**Pass 3 still fails, but the pass-2 drawing P1 is closed, and all six V10 headlines now use the permitted token. M34 carries the corrected implementation. The remaining failures are incomplete motion specifications, stale documentation, and previously acknowledged compliance gaps.**

I read both earlier reviews and the current implementation and binding files, including changes arriving through commit `7574789`. I reran `check-mocks.py`: **19 failures**, unchanged from pass 2. Visual conclusions below use current CSS and saved captures; I did not run a new browser matrix.

1. **Closed — drawings crossing first-screen copy.**

   M28 now hides `.weave` at **every height ≤760px**, matching the mark’s cutoff. The entire 700–760px problem band is covered. Above that cutoff, desktop uses an **88px mark with a 44px centre offset**; the lockup’s 48px margin leaves **12px clearance** below the corona. Phone geometry leaves **16px**. These relative clearances do not change with viewport height within those branches. The h1 follows farther below. [M28 geometry:100](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M28-the-weave/styles.css:100), [cutoff:121](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M28-the-weave/styles.css:121). Current [desktop](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M28-the-weave/qa/V16.jpg) and [715px-high](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M28-the-weave/qa/V5.jpg) captures corroborate this.

   **M26/M29/M34 no longer strike the provenance at 1280×720.** Both bracket pseudo-elements are `display:none` at heights ≤760px: [M26:262](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/styles.css:262), [M29:265](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M29-the-hub/styles.css:265), [M34:273](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/styles.css:273). I inspected all three current V14 captures.

   M28’s full-opacity contrast fix also remains intact. The latest change adds an explicit `CanvasText` corona under forced colours. [M28:136](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M28-the-weave/styles.css:136).

2. **Closed — V10 h1 token; M27 still fits.**

   All six set `h1` to `--text-xl` inside the landscape query: [M26:166](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/styles.css:166), [M27:162](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M27-one-mark/styles.css:162), [M28:179](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M28-the-weave/styles.css:179), [M29:164](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M29-the-hub/styles.css:164), [M30:154](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M30-constant-gt/styles.css:154), [M34:167](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/styles.css:167).

   M27’s saved V10 measurements put Georgetown at **294px** and Anywhere at **310px**, against the **318px limit**. Its final spacing overrides explain the fit, and the capture agrees. [Measurements:16](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M27-one-mark/qa/fold.md:16), [final overrides:273](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M27-one-mark/styles.css:273).

3. **P2 — Motion specifications remain incomplete.**

   The following corrections are real:

   | Item | Verdict |
   |---|---|
   | M26–M30 suffix-hover conditions | **Closed:** tables now specify ≥768px and `hover:hover`. |
   | Resting `school` word | **Closed:** its opacity-only return is now distinguished from translation. |
   | M34 navy fill versus scale | **Closed:** instant fill and 200ms scale are correctly separated. |
   | M34 control availability | **Closed:** the ≤760px cutoff is documented. |
   | Terminals | **Closed:** M26/M29 animate them; M34 has static terminals; M27/M28/M30 generate none. |

   **All six still overpromise a 4px rise whenever a school suffix appears.** The reset rules clear opacity without clearing a transform retained by another active selector. On M26–M30: focus Georgetown, hover Anywhere, then leave Anywhere while Georgetown retains focus. Georgetown returns by **fading alone**, because its focus rule kept `translateY(0)`. [M26 motion:18](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/motion-interactive.css:18), [opacity-only reset:25](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/motion-interactive.css:25), versus [table:37](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/RATIONALE.md:37). The other four interactive sheets contain the same rules.

   M34 has the equivalent case: target Georgetown, focus Anywhere, then remove focus. The retained target restores Georgetown through opacity alone. It also means **ending focus does not necessarily return to `school`**, as its return row suggests. [M34 motion:15](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/motion.css:15), [focus reset:19](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/motion.css:19), [table:37](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/RATIONALE.md:37).

   **M27’s availability contradiction remains.** Its rationale still promises keyboard access “at every width”; the entire stage disappears in compact landscape. [Rationale:29](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M27-one-mark/RATIONALE.md:29), [CSS:216](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M27-one-mark/styles.css:216).

   **M34’s copied hover paragraph remains false.** Line 41 correctly says there is no hover swap; line 45 immediately claims hover clears and selects suffixes. Its actual precedence is **focus over target**. [Rationale:41](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/RATIONALE.md:41).

4. **M34 reconciliation — implementation closed; documentation cleanup still open.**

   I compared current M34 directly with the pass-2 M35 files at `424b81e`: **HTML and motion CSS are identical**. The style differences are the intended `--text-xl` correction and short-row bracket suppression. The port preserved the fixes.

   Specifically, the targets precede `.stage` and `.steps` inside `main > .wrap`; `:where()` preserves focus precedence; skip copy and comparison order are corrected; visible step controls are 44×44px; skip and compare links retain their 44px minimum. [HTML:32](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/index.html:32), [cascade:13](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/motion.css:13), [comparison:79](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/index.html:79), [controls:238](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/styles.css:238).

   **There is no M35 board directory or tracked implementation left.** The brief title, opening note, board table and register agree on **M34 / The Tour**. [Brief:1](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:1), [board row:56](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:56), [register:47](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/DIRECTIONS.md:47).

   Nevertheless, active files still misidentify it: both [styles.css:1](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/styles.css:1) and [motion.css:1](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/motion.css:1) say M35, and the brief’s verification rows still name M35. [Brief:117](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:117), [119](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:119). Historical review filenames can legitimately retain M35.

5. **P3 — Requested documentation sweep: several closures, several survivors.**

   | Pass-2 issue | Current verdict and evidence |
   |---|---|
   | Four paths require a JS library | **Open.** The false sentence survives at [brief:18](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:18), despite its withdrawal at [72](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:72). Adding the correct objection before it did not remove it. |
   | Kept V12 row | **That row is closed:** [line 19](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:19) now says nothing was kept. **Surrounding documentation remains stale:** [move row 43](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:43) is still unlabelled as refused/retired. |
   | Live text technically necessary | **Closed in all six rationales.** The old assertion has been replaced, rather than followed by a contradictory correction. Example: [M26:60](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/RATIONALE.md:60). |
   | DD-21 recommendation contradiction | **Closed in the brief:** [92](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:92) acknowledges implementation work. **Register still stale:** M26 claims third-campus readiness and M29 claims sizing for N campuses. [Register:39](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/DIRECTIONS.md:39), [42](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/DIRECTIONS.md:42). |
   | Mark-size inventories | **Partly closed.** M27 correctly includes 64px; M30 correctly says no rendered stage mark. **M29 still falsely lists 88px desktop** at [rationale:43](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M29-the-hub/RATIONALE.md:43); its actual mark remains [56px](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M29-the-hub/styles.css:34), confirmed by [QA:97](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M29-the-hub/qa/fold.md:97). Five inventories also list “36px on V10,” although those marks are hidden there. |
   | Q-007 wording absent | **Closed across all six:** the Admissions wording is acknowledged as present. Example: [M26:70](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/RATIONALE.md:70). |
   | “Every required fold row” | **Closed across all six.** Wording now excludes the V18 reflow case and agrees with saved measurements. Example: [M26:94](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/RATIONALE.md:94). |
   | Missing layer-2 citations | **Closed:** every rationale now names DD-38, DD-39, RF-55 and RF-58. |

   Additionally, **all six register rows still call V11/V12 “unreviewed,” and M26 still claims to ship the retired A/B pair**. This contradicts MN-18 and the files. [DIRECTIONS:39](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/DIRECTIONS.md:39), [MN-18:121](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/07-design-decisions.md:121).

6. **New documentation regressions; existing compliance gaps remain.**

   The replacement live-text rationale introduces **“one accessible string per word.”** Every stage lockup has `aria-hidden="true"`, so that accessibility justification does not describe this implementation. [New claim, M26:60](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/RATIONALE.md:60), [HTML:37](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/index.html:37). This is a documentation regression, not evidence that the decorative lockup should become exposed.

   The new RF-55/RF-58 row also says **buttons take tighter leading**, but `.door-cta` never sets line-height and inherits the body’s `--leading-prose:1.5`. This mismatch appears across all six. [Claim:24](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/RATIONALE.md:24), [body:10](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/styles.css:10), [CTA:75](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/styles.css:75).

   The newly added ensemble record references **`critic-astra-M26-M34-wave-pass3.md`, which does not exist** at the reviewed commit. That row is premature. [Brief:134](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:134).

   Existing gaps remain: school-specific N-campus rules; missing events on admissions/skip/brand links and M34 steps; undecked identities/control labels; incomplete token inventories; hidden landscape names/descriptions; and declared full-page omissions. M34 still fails explicit reduced-motion pseudo-element coverage, although shared zero-duration tokens and static terminals mean that checker failure **does not demonstrate actual residual animation**. [M34 links:20](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/index.html:20), [steps:46](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/index.html:46), [departures:62](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/RATIONALE.md:62), [reduced-motion block:31](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M34-the-tour/motion.css:31).

I found **no new functional or visible P1 regression** in the reviewed changes. No files were changed.