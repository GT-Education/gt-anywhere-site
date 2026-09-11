The current brief should not be approved as written. It combines a defensible progress indicator with unspecified content sequencing, contradictory acceptance criteria and incorrect evidence claims.

**The file differs from your description:** the checked-in [M33.md](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:1) is 18 lines long. It contains no instruction about `repeating-linear-gradient`, `aria-hidden`, or a short-viewport guard. Those ideas are assessed below as proposed additions.

1. **V13 is a usable provisional identifier, not an approved vocabulary extension.**

   The wave explicitly proposes V11 suffix swap and V12 mark assembly; both sit outside the existing contract. Its actual scope is **M26–M30 and M34**, despite retaining the filename `M26-M31-wave.md`. [Wave:26](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:26), [wave:31](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:31), [wave:1](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:1).

   **Decide the three proposals together, with a separate verdict for each.** Numbering successive proposals is harmless; treating earlier proposals as permission for further expansion is unsound. DIRECTIONS explicitly labels the wave moves unreviewed and M33 proposed. The governing vocabulary still says ten moves, with additional moves requiring a register row. [DIRECTIONS:39](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/DIRECTIONS.md:39), [DIRECTIONS:46](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/DIRECTIONS.md:46), [K4:274](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/K4-motion.md:274).

   MN-17 also misstates the numbering precedent: K4 says sticky-header compaction **“would be a legitimate V11”**, then excludes it pending measurement. It does not reserve V11. [MN-17:119](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/07-design-decisions.md:119), [K4:298](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/K4-motion.md:298).

2. **F18 is quoted accurately but interpreted too generously.**

   F18 records **4 of 29 sites**: Notion 13 occurrences, Airbnb 5, Cloudflare 5, Stripe 5. Its qualification is explicit: **progress indicators, never content reveals**. This verifies what K4 says; the repository does not supply the corresponding raw stylesheet corpus needed to reproduce the classification independently. [K4:161](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/K4-motion.md:161).

   A scale indicating reading position fits that finding. A sticky stage showing story movements **“one at a time”** exceeds it. That is content sequencing, which MN-17 conceals behind “exactly this use and nothing wider.” K4 separately forbids pinned cinematic sections and says a single linear read does not earn motion merely through its thesis. [M33:13](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:13), [K4:308](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/K4-motion.md:308), [K4:321](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/K4-motion.md:321).

   F37 supports orientation feedback; its examples are header state, overflow indication and a “read less” control. Q7 requires measured viewport costs before proposing compaction. Neither supports replacing measurement with “the scale is the whole argument.” CSS removes a script dependency; it does not remove occupied viewport space or reading cost. [K4:229](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/K4-motion.md:229), [K4:376](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/K4-motion.md:376).

3. **The guard set does not yet hold.**

   | Guard | Defect and required check |
   |---|---|
   | One use per page | Countable, but define one scale mechanism, including its mobile variant. The asserted inheritance is false: V6 permits **three** uses. One is a new, stricter cap. [M33:11](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:11), [CONTRACT:79](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/CONTRACT.md:79). |
   | Never in the first two screens | “Begins on the third screen” supplies neither layout budget nor measured trigger position. Specify the first affected content and animation start relative to two actual viewport heights, then measure every matrix row. [M33:13](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:13). |
   | Transform and opacity only | No animated target, keyframes, scroll range or easing is specified. The engineer cannot demonstrate compliance from the brief. Scroll progress also needs an explicit treatment under the existing duration policy; writing a millisecond value does not bound the reader’s scroll timeline. [M33:11](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:11), [K4:274](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/K4-motion.md:274). |
   | Complete at rest | Acceptance unconditionally requires a complete scale without scrolling, while the mechanic reveals its ticks with scrolling. Specify a permanently complete base scale plus optional progress, or restrict “complete” to clearly named fallback states. A first-viewport capture cannot inspect a third-screen scale; require a full-page capture at scroll position zero and separate stage captures. [M33:9](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:9), [M33:18](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:18). |
   | Zero duration under reduced motion | Token zeroing alone is insufficient evidence that a scroll-driven animation stops. Disable the animation and restore final transforms, opacity and ordinary content flow; verify while scrolling, including pseudo-elements. The current runner checks duration values, not whether scroll changes the rendered state. [tokens:74](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/shared/tokens-v2.css:74), [runner:236](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/tools/shots.mjs:236). [MDN’s duration documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-duration) explains why time values do not reliably describe scroll-driven progress. |

   There are additional contract conflicts:

   - **Contrast:** the accent progress line fails the meaningful-line rule on the specified light stage. See answer 5. [M33:14](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:14), [CONTRACT:40](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/CONTRACT.md:40).
   - **Copy:** importing prose outside `copy.md` breaches the allowed-copy rule. Naming Nari as owner records a departure; it does not resolve it. Importing the complete source also restores the expressly withheld 3X claim. [M33:16](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:16), [CONTRACT:10](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/CONTRACT.md:10), [G0.5:15](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/16-g05-decision-record.md:15).
   - **Marks:** placing the school marks on `--color-surface` needs an explicit navy plate for the white-lettered Anywhere mark. [M33:17](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:17), [CONTRACT:12](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/CONTRACT.md:12).

   MN-17 supplies the required *proposal*. CSS-only implementation avoids D-039’s script exception, but does not itself approve the move. [CONTRACT:83](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/CONTRACT.md:83).

4. **A gradient ruler is technically reasonable, with conditions absent from this brief.**

   The contract regulates the visible graphical object, not its element count. Hard-stop repeating gradients can draw ticks; each meaningful stroke must still reach 3:1 against its actual ground. `aria-hidden` does not exempt a visible argument-carrying drawing from contrast. It is appropriate for redundant ticks only when the story’s order and meaning remain available through semantic text. [M33:10](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:10), [CONTRACT:40](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/CONTRACT.md:40).

   Three additions are necessary: verify the rendered count and endpoint clipping; reveal fixed-spacing marks without animating background size, gradient stops or other prohibited properties; and provide a forced-colours alternative. Non-URL background images, including CSS gradients, are suppressed in forced-colours mode. A gradient-only scale would disappear. [MDN forced-colours behaviour](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/forced-colors), [runbook:75](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/17-design-studio-runbook.md:75).

   The brief tests forced colours on wordmarks and focus rings, but does not explicitly test its defining scale. The runner’s current forced-colours screenshot is taken at the initial viewport, so it would miss that third-screen failure. [M33:18](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:18), [runner:394](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/tools/shots.mjs:394).

5. **Refusing light gold on this light ground is correct; the stated reasoning confuses colours and leaves another failure.**

   F87 measures **near-white on accent orange**, 2.50:1. F88 measures **accent orange on cream**, 2.38:1. Neither measures the source’s light gold. The estate distinguishes `#ebba9b` light gold from `#e48b53` orange. [K12:176](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/K12-gt-branding.md:176), [K12:177](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/K12-gt-branding.md:177), [R1:96](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/research/R1-design-tokens.md:96).

   Recomputing those swatches against the mock tokens gives:

   | Stroke | Cream `--color-bg` | `--color-surface` |
   |---|---:|---:|
   | Light gold `#ebba9b` | 1.61:1 | 1.46:1 |
   | Accent `#e48b53` | 2.38:1 | 2.17:1 |
   | Border strong `#857f7b` | 3.63:1 | 3.31:1 |

   Inputs: [R1:97](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/research/R1-design-tokens.md:97), [tokens:15](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/shared/tokens-v2.css:15), [tokens:66](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/shared/tokens-v2.css:66).

   **Change the progress line too.** `--color-accent-text` or border strong can pass on these grounds. The “155 accent uses” explanation is unsupported: the contract caps accent uses per screen without defining each stroke of one drawing as a separate use. Contrast settles the refusal. [M33:12](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:12), [CONTRACT:54](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/CONTRACT.md:54).

   CONTINUITY also expressly limits its rendered evidence to Anywhere; it cannot verify Georgetown’s story-stage appearance. [CONTINUITY:18](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/shared/CONTINUITY.md:18).

6. **A V10-only guard would be insufficient—and none is actually written.**

   M33 quotes `height: calc(100vh - 6rem)`, not an unqualified `100vh`. A literal `100vh` stage pinned below a positive inset cannot fit wholly inside the viewport at any row. Subtracting the inset fixes the outer arithmetic, not oversized content. [M33:9](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:9).

   At a 16px root size, these rows leave the following stage heights after the quoted 6rem inset:

   | Matrix row | Viewport | Remaining height |
   |---|---|---:|
   | V10 | 750×342 | 246px |
   | V18 reflow | 320×256 | 160px |
   | V19 zoom | 1024×576 | 480px |
   | V15 laptop | 1366×648 | 552px |
   | V14 laptop | 1280×720 | 624px |
   | V13 tablet landscape | 1024×768 | 672px |

   Matrix evidence: [runbook:64](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/17-design-studio-runbook.md:64), [runbook:67](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/17-design-studio-runbook.md:67), [runbook:72](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/17-design-studio-runbook.md:72).

   V18 and V19 remain content-preservation tests despite their fold exemptions. Require ordinary document flow whenever the largest movement, frame and gaps cannot fit; measure all rows and enlarged text. Use `svh`, with `vh` only in the permitted fallback. The brief also leaves **768–1023px undefined**, including V11 and V12. [runbook:75](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/17-design-studio-runbook.md:75), [M33:13](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:13).

   Without an M33 implementation and measurements, I cannot truthfully report which content blocks actually clip.

7. **Factual corrections and evidence gaps.**

   | Location | Correction |
   |---|---|
   | [MN-17:119](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/07-design-decisions.md:119): V6’s “one use” | **Maximum three**, per [K4:292](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/K4-motion.md:292). |
   | Same row: K4 “reserved” the next number | **Hypothetical V11, excluded pending measurement**, per [K4:298](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/K4-motion.md:298). |
   | [M33:14](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:14): every third tick matches 49 of 155 | Every third position gives **51** major ticks, or 52 with a different starting offset. The two `is-hour` marks might explain 49 ordinary majors plus two specials, but their positions and overlap must be specified; the current text does not establish that. |
   | [M33:12](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:12): light gold equated with the accent | **`#ebba9b` versus `#e48b53`**, per [R1:96](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/research/R1-design-tokens.md:96). |
   | [M33:16](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:16): “same nine quoted sentences as M31” | **M31.md does not contain the nine-sentence source block.** The workspace implementation contains prose but explicitly withholds the 3X clause. Supply an exact copy source and resolve that difference. [M31 brief:10](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M31.md:10), [M31 implementation:139](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M31-our-story/index.html:139). |
   | Same copy instruction and its four claims rows | Those rows exist, but none covers the imported **2026 launch-year claim**. Register it or remove it from the proposed copy. [M31 implementation:149](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M31-our-story/index.html:149), [claims:58](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/12-claims-register.md:58). |

   The explicit local file references exist. The wave filename is stale, not broken; **Our Story is M31, The Tour is M34**. [DIRECTIONS:44](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/DIRECTIONS.md:44), [DIRECTIONS:47](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/DIRECTIONS.md:47).

   Finally, the repository cannot establish the exact **155/49/two counts**, the claimed scroll choreography, “the only animated storytelling device,” or the illustration’s ownership from the evidence M33 cites. A static `opacity: 0` declaration does not prove a scroll trigger. These need a dated HTML/CSS/interaction-source capture, reproducible counts, a permitted rendered recording, and an asset-rights record respectively. [M33:8](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:8), [M33:9](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:9), [M33:12](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M33.md:12). The [live text extraction](https://www.gt.school/about-us) confirms the story prose, but cannot settle those mechanical or ownership claims.

**ADOPT WITH CHANGES**