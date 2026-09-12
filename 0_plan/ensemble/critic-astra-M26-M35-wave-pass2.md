**Pass 2 still fails, but all three original P1 findings are closed.** The fixes are substantive. The remaining problems include drawing collisions I missed in pass 1, incomplete motion specifications, and several corrections that leave contradictory claims in place.

I read the current HTML, CSS, rationales and binding files, parsed M35’s DOM, inspected current saved captures, and reran `check-mocks.py`: **19 failures**, down from 26. No files changed; no new browser session was run.

1. **P1 — Newly identified: drawings cross required first-screen copy on four boards.**

   **M28:** the corona remains visible between **700px and 760px viewport height**, while the mark is hidden. It consequently crosses the lockup and h1. This is plainly visible in the current [414×715 capture](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M28-the-weave/qa/V5.jpg) and [1280×720 capture](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M28-the-weave/qa/V14.jpg). The conflicting cutoffs are at [styles.css:114](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M28-the-weave/styles.css:114) and line 158.

   There is also a desktop geometry error: the mark stays **56px**, but the strands use a **44px centre offset**, appropriate to an 88px mark. Their origin is 16px below the mark’s centre. The [1440×900 capture](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M28-the-weave/qa/V16.jpg) shows strands crossing the lockup. The comment claiming the corona never reaches the type is false.

   **M26/M29/M35:** at 1280×720, the horizontal bracket strikes through the provenance sentence. The compact rule reduces the doors’ margin to **16px**, while their arms remain positioned **32px above** them. See [M26’s rules](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/styles.css:155), [M26’s capture](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/qa/V14.jpg), and [M29’s capture](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M29-the-hub/qa/V14.jpg).

   **These were pass-1 misses.** M28’s opacity correction exposes its existing geometry problem more strongly; restoring low opacity would not fix it.

2. **P2 — Motion beats are substantially corrected; the six specifications still do not match the CSS exactly.**

   | Board | Current verdict |
   |---|---|
   | **M26** | Original discrepancy closed by correcting the declaration: terminal emphasis is explicitly **hover-only**, not keyboard focus. Both implemented beats use 200ms/`--ease-out`. |
   | **M27** | Nonexistent terminal beat removed from the table. However, hover requires ≥768px and `hover: hover`, neither stated in its specification. The entire stage is also hidden in compact landscape, contradicting “reachable … at every width.” [CSS:214](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M27-one-mark/styles.css:214). |
   | **M28** | Nonexistent terminal beat removed; corona correctly declared static. Hover’s width/device conditions remain undeclared. |
   | **M29** | The missing terminal transition is genuinely implemented now: [CSS:240](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M29-the-hub/styles.css:240). Focus was removed from its terminal declaration. Hover’s conditions remain incomplete for the suffix row. |
   | **M30** | Nonexistent terminal beat removed; suffix is the only animation. Hover’s conditions remain undeclared. |
   | **M35** | Target/focus suffix swap and target-driven dot scale are implemented. But the navy fill is **instant**, whereas its table bundles fill with the 200ms scale. Step controls disappear at heights ≤760px, an undeclared availability condition. [CSS:236](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M35-the-stepper/styles.css:236). |

   Two additional precision problems remain:

   - Across all six, **`school` fades without translating**; the 4px translation applies to the other suffixes. The tables should distinguish those states. Reset rules also clear opacity without necessarily resetting a word’s transform, so a word retained by focus/target can return by fading alone.
   - M35’s [rationale:42](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M35-the-stepper/RATIONALE.md:42) says hover clears and selects words immediately after explicitly saying there is no hover swap. That paragraph is copied fiction. “Terminals: none” should say **“no terminal animation”**: its static terminals exist.

   M27/M28/M30 retain inert terminal selectors, but those generate no visible animation. I am **not** counting dead selectors as undeclared beats.

3. **P2 — Several pass-1 compliance findings were acknowledged rather than fixed.**

   - **N-campus behavior remains broken.** School-specific arms and mobile ordering remain. The rationales now admit this, but the [brief:92](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:92) still recommends M26 because a third campus supposedly needs only another list item. **Fudged in documentation; unchanged in implementation.**
   - **Event omissions remain:** admissions, skip and brand links lack events on all six; M35’s step links also lack them. Existing door/families/compare events remain correct. [M35 HTML:20](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M35-the-stepper/index.html:20).
   - **Copy exceptions remain:** `GTgeorgetown` is now honestly flagged, but remains outside the deck’s school identities. M35’s “Show…” control labels and “Step through the schools” navigation label still have no deck entry.
   - **Token compliance is only partially repaired.** Departure inventories were added, but omit actual values and include nonexistent ones, detailed below. Required DD-38/DD-39/RF-55/RF-58 citations are still absent from every rationale. [Token requirement:5](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/shared/tokens-v2.css:5).
   - **Compact landscape still hides names and descriptions.** It is now declared, but remains contrary to the contract’s layout recipe.
   - **Full-page omissions remain declared R1 limitations:** footer/logos and later sections, plus repeated doors and the TEFA module beneath the comparison.

   The fresh checker reports three failures per M26–M30: landmarks, event coverage and paired logos. M35 additionally fails explicit reduced-motion pseudo-element coverage. **That last failure does not establish nonzero motion:** the shared duration tokens become zero, and its terminals have no animated state.

4. **P3 — The fabrication/stale-reference sweep still finds contradictory and inaccurate claims.**

   | Claim | Current evidence |
   |---|---|
   | Sixth board is M34 | The brief’s **title and opening renumbering note** still say M34, while its board table correctly says M35. The directions register still lists M34 The Tour and has no M35 row. [Brief:1](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:1), [register:47](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/DIRECTIONS.md:47). |
   | Four paths require a JS library to morph | Still asserted in the brief’s opening table, then explicitly withdrawn later. The correction was appended without replacing the false instruction. [Brief:18](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:18). |
   | Live text is technically necessary | Every rationale retains that assertion immediately before its “Honest correction” explaining otherwise. **Partially corrected, still contradictory.** [M26 rationale:56](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/RATIONALE.md:56). |
   | V12 remains a kept 300ms settle | The gate correctly refuses it, but the opening “Kept” table still retains it, and the move table does not label its row refused/retired. [Brief:19](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/kb/briefs/M26-M31-wave.md:19). This is stale documentation, **not continuing V12 implementation**. |
   | Bespoke mark sizes are 44/56/88/104px | Repeated in every rationale. **44px is a control size, not a mark size here.** M27’s actual 64px mark is omitted; M28/M29 show 56px marks; M30 hides its mark entirely. The listed inventory does not describe each board. [M27 rationale:57](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M27-one-mark/RATIONALE.md:57), [CSS:92](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M27-one-mark/styles.css:92). |
   | Landscape h1 “steps down one token” | Actual change is `--text-3xl` → `--text-lg`, passing over `2xl` and `xl`. The contract permits `--text-xl`, not this value. [M26 CSS:166](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/styles.css:166). |
   | Q-007 application wording is absent | Dedicated steps are absent, but the Admissions cells still say “Begin online, then an assessment and a family conversation.” That slot remains Q-007-flagged in the deck. [M26 rationale:64](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/RATIONALE.md:64), [HTML:75](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/index.html:75). |
   | CTAs are above the fold “at every runner row” | Overbroad on all six: V18 is a 256px-high reflow test and has offscreen CTAs. Say **every required fold row**. The “all required rows pass” runner statements themselves now match the saved reports. |

   I found **no nonexistent cited register IDs, design-library IDs or required asset paths**. The six inspiration IDs and their named aesthetics exist. The icon really has four paths; the Georgetown-specific SVG really is absent; the retired M26 files really are recoverable from git.

**These pass-1 findings are now closed:**

| Finding | Verification |
|---|---|
| **P1.1 — V12 implementation/approval** | Both `index-timed.html` and `motion-timed.css` are absent; git records their deletion. The brief’s gate and **all six rationales** correctly state **V11 adopted with a condition; V12 refused**. The stale surrounding prose above needs cleanup. |
| **P1.2 — M35 target ancestry** | All three target spans, `.stage` and `.steps` are direct children of the same `main > .wrap`; the targets precede both. The sibling selectors can match. [HTML:32](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M35-the-stepper/index.html:32). |
| **P1.3 — M28 opacity/contrast** | The corona uses full-strength `--color-border-strong`, with no opacity reduction on it or its ancestors. Calculated contrast against the page ground is **3.633:1**. [CSS:99](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M28-the-weave/styles.css:99). |
| **Persistent suffix overlap** | Closed in settled states, as explained below. |
| **Skip copy, comparison order, undersized skip/compare controls** | All six say “Skip to main content”; all nine comparison rows match deck order; both controls have effective `min-height: 44px` and suitable display rules. Current saved target reports agree. |
| **Missing Parent questions sections** | Added to all six. |
| **False Q-011/Q-013 absence claims** | Corrected: both slots are acknowledged as present. |
| **Phantom bracket measurements and M27’s stale failure count** | Removed/corrected. M29’s arm measurement is now accurate. |

The **specificity fix is real**. On M26–M30, focus, hover reset and hover show selectors each have specificity **`(0,6,1)`**; their source order makes hover win. On M35, `:where(#…:target)` contributes zero specificity, leaving target rules at **`(0,3,1)`**, below the focus reset/show rules at **`(0,6,1)`**. M35 has no door-hover swap, so focus wins regardless of hovering the other door. [M26 motion:16](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M26-the-mark/motion-interactive.css:16), [M35 motion:13](/Users/johnny/projects/gt-school/gt-anywhere-site-v2/0_plan/mockups/M35-the-stepper/motion.css:13).

That means **one visible suffix after settling**, wherever the stage is rendered. During the declared 200ms crossfade, outgoing and incoming words necessarily overlap temporarily.

**Your corrected geometry measurements are right**, at 1440px width, a 16px root and the normal desktop layout:

| Board | Arm length | Drop | Door centres |
|---|---:|---:|---|
| M26 | 360px | 32px | 360 / 1080 |
| M29 | 359px | 32px | 360 / 1080 |
| M35 | 360px | 32px | 360 / 1080 |

The content width is `1440 − 48 = 1392px`; subtracting the 48px gap leaves two 672px doors. M26/M35 arms are `672/2 + 24 = 360px`. M29’s borders reduce the positioning box to 670px, yielding `670/2 + 24 = 359px`, with the previously identified **2px centre gap**. M27 still has centres **356/1084** because its gap is 64px; its rationale no longer claims otherwise.