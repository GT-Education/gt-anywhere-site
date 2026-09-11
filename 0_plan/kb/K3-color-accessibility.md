# K3 Color, surface and accessibility

| Field | Value |
|---|---|
| Cluster | K3 of `18-knowledge-base-plan.md` section 1 |
| Feeds | `tokens.css` departures, rubric row **Color and surface** (`17` section 6), the QA contrast tests (`17` section 4, `1_spec/13`), the Design Director brief's "Color and surface" field (`17` section 5) |
| Method | **41 distinct sources fetched with content** by this agent on 2026-09-11 using WebFetch and WebSearch only. No browser tool used. No GT or Alpha page loaded. Twelve further URLs returned 403/404/title-only and are listed in section 6; nothing here rests on them |
| Computation | Every ratio in section 5 was **computed by this agent** from the token hex values using the W3C formula (F5, F6) and cross-checked with APCA-W3 0.1.9 (F14). The arithmetic is shown once in 5a. No ratio is quoted from memory or from a third-party checker |
| Caution | Contrast ratios are **measurements of the tokens**, not claims about GT School, so they need no claims-register row. REQ-022 and DEL-018 still govern any figure that reaches a page |
| Status | Draft 2026-09-11, Fable. Astra E4 pending |

---

## 1. Question

How do you build one palette from two existing brands; what does contrast actually require at AA and AAA for body text, small text, large text, focus rings and non-text UI (WCAG 2.2 SC 1.4.3, 1.4.6, 1.4.11, 2.4.11, 2.4.13, 2.5.8); what does APCA say as a second opinion; how do institutional and craft-led sites use dark surfaces well; are tints safe as secondary cues; and what do Material 3 and comparable systems teach about color **roles** rather than color values?

---

## 2. Findings

### 2a. What the normative text actually says

| # | Finding | Source |
|---|---|---|
| F1 | **1.4.3 Contrast (Minimum), Level AA:** "The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following: Large Text [3:1], Incidental [no requirement], Logotypes [no requirement]." Large scale is "at least 18 point or 14 point bold" | W3C, *WCAG 2.2*, Recommendation 12 Dec 2024, https://www.w3.org/TR/WCAG22/#contrast-minimum |
| F2 | **1.4.6 Contrast (Enhanced), Level AAA:** 7:1 for normal text, 4.5:1 for large text. Rationale: 7:1 serves roughly 20/80 acuity (3:1 base × ~1.5 loss factor, twice); 4.5:1 serves 20/40 | W3C WAI, *Understanding 1.4.6*, updated 1 Jun 2026, https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html |
| F3 | The 4.5:1 figure is derived, not arbitrary: "A user with 20/40 would thus require a contrast ratio of `3 * 1.5 = 4.5 to 1`." 18pt and 14pt bold convert as "`1pt = 1.333px`, therefore `14pt` and `18pt` are equivalent to approximately `18.5px` and `24px`". Thin fonts are warned about: "thin or unusual fonts may be rendered by user agents with a much fainter color" | W3C WAI, *Understanding 1.4.3*, updated 1 Jun 2026, https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html |
| F4 | **1.4.11 Non-text Contrast, Level AA:** "The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s): User Interface Components and Graphical Objects." "Adjacent colors" means the colors surrounding the component: "if an input has a white internal background, dark border, and white external background the 'adjacent color' to the component would be the white external background" | W3C WAI, *Understanding 1.4.11*, updated 15 Jun 2026, https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html |
| F5 | Relative luminance is `L = 0.2126 * R + 0.7152 * G + 0.0722 * B`, where each channel is linearised: "if RsRGB <= 0.03928 then R = RsRGB/12.92 else R = ((RsRGB+0.055)/1.055) ^ 2.4". The wiki itself notes 0.03928 is technically wrong (IEC says 0.04045) but "insignificant for 8-bit color values" | W3C WAI GL wiki, *Relative luminance*, https://www.w3.org/WAI/GL/wiki/Relative_luminance |
| F6 | Contrast ratio is `(L1 + 0.05) / (L2 + 0.05)`, L1 the lighter | W3C, *WCAG 2.2*, 12 Dec 2024, https://www.w3.org/TR/WCAG22/#contrast-minimum |
| F7 | **2.4.7 Focus Visible, Level AA** requires only that "the keyboard focus indicator is visible". It states no ratio. Contrast comes from 1.4.11: "Focus indicators are visual information required to identify the focused state", so the 3:1 non-text rule applies | W3C WAI, *Understanding 2.4.7*, updated 12 Jul 2026, https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html |
| F8 | **2.4.11 Focus Not Obscured (Minimum), Level AA** is about occlusion, not contrast: "When a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content" — sticky headers, footers, dialogs | W3C WAI, *Understanding 2.4.11*, updated 15 Jun 2026, https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html |
| F9 | **2.4.13 Focus Appearance, Level AAA** adds two things: an area "at least as large as the area of a 2 CSS pixel thick perimeter of the unfocused component", and "a contrast ratio of at least 3:1 between the same pixels in the focused and unfocused states". That is a *change-of-state* measurement, distinct from 1.4.11's adjacent-colour measurement. The page recommends "a two-color focus indicator to ensure sufficient contrast with all components" for variable backgrounds | W3C WAI, *Understanding 2.4.13*, updated 10 Aug 2026, https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html |
| F10 | **Technique C40** gives the arithmetic that makes a two-colour ring universal: "If the two indicator colors have a contrast ratio of at least 9:1 with each other, at least one of the two colors is guaranteed to meet 3:1 contrast with any solid background color." Example 1: `outline: 2px #F9F9F9 solid; outline-offset: 0; box-shadow: 0 0 0 4px #193146;`. Each band must be ≥2 CSS px | W3C WAI, *Technique C40*, updated 12 Jan 2026, https://www.w3.org/WAI/WCAG22/Techniques/css/C40 |
| F11 | **2.5.8 Target Size (Minimum), Level AA:** "The size of the target for pointer inputs is at least 24 by 24 CSS pixels", with five exceptions (spacing, equivalent, inline, user agent control, essential). The spacing exception: a 24px-diameter circle centred on each undersized target must not intersect another | W3C WAI, *Understanding 2.5.8*, updated 11 May 2026, https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html |
| F12 | **1.4.1 Use of Color, Level A:** "Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element." A 3:1 lightness difference counts as an additional distinction — but only when the user does not have to identify *which* colour it is. If meaning depends on naming the colour, a further cue is required regardless of ratio | W3C WAI, *Understanding 1.4.1*, updated 16 Sep 2025, https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html |
| F13 | Incidental text exempt from 1.4.3: inactive controls, purely decorative text, hidden text, and text in an image that is not needed. Where links are distinguished by colour alone they need "3:1 contrast between the body text and the link text" **plus** a hover/focus cue **plus** 4.5:1 against the background | WebAIM, *Contrast and Color Accessibility*, 9 Jan 2021, https://webaim.org/articles/contrast/ |

### 2b. APCA as a second opinion, and its actual standing

| # | Finding | Source |
|---|---|---|
| F14 | APCA reports **Lc 0 to Lc 105+**, polarity-signed, and claims perceptual uniformity: "regardless of how light or dark the two colors are, a contrast value of Lc 60 represents the same perceived readability contrast". Its critique of WCAG 2.x: "No single figure such as 4.5:1 or 3:1 can be used as a blanket target… without considering the use case, size, thickness" and "4.5:1 can be functionally unreadable when a color is near black" | Andrew Somers, Myndex, *Why APCA*, https://git.apcacontrast.com/documentation/WhyAPCA.html |
| F15 | APCA's practical levels: **Lc 90** "preferred level for fluent text… no smaller than 14px/weight 400"; **Lc 75** "minimum level for columns of body text with a font no smaller than 18px/400"; **Lc 60** minimum for non-body content text, "24px normal weight (400) or 16px/700"; **Lc 45** for headlines (36px/400 or 24px/700); **Lc 30** absolute minimum for any other text; **Lc 15** absolute minimum for non-text "no less than 5px in its smallest dimension" | Andrew Somers, Myndex, *APCA easy intro*, 2022, https://git.apcacontrast.com/documentation/APCAeasyIntro.html |
| F16 | **APCA is not normative anywhere.** WCAG 3.0 is a Working Draft of 10 Sep 2026 and states: "The contrast algorithm used in WCAG 3 is yet to be determined. For this draft, the requirement assumes the algorithm will include a size/weight factor." The draft also says "It is inappropriate to cite this document as other than a work in progress" | W3C, *WCAG 3.0* Working Draft, 10 Sep 2026, https://www.w3.org/TR/wcag-3.0/ |
| F17 | A production system already ships an APCA guarantee: Radix Colors steps 11 and 12 are "guaranteed to Lc 60 and Lc 90 APCA contrast ratio on top of a step 2 background from the same scale" — step 11 "designed for low-contrast text", step 12 "designed for high-contrast text" | Radix, *Understanding the scale*, https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale |

### 2c. How mature systems assign colour roles

| # | Finding | Source |
|---|---|---|
| F18 | Material 3's central rule is paired roles: "Use on-primary on top of primary, and on-primary-container on top of primary-container, and the same for other accent and neutral colors to provide accessible contrast to the user." Mixing containers (tertiaryContainer text on primaryContainer) is shown as the failure case: a "Button with poor contrast ratio" | Android Developers, *Material Design 3 in Compose*, https://developer.android.com/develop/ui/compose/designsystems/material3 |
| F19 | The M3 role vocabulary is a full grid: primary / on-primary / primary-container / on-primary-container, the same for secondary, tertiary and error, plus surface-container-low / surface-container / surface-container-high, on-surface and on-surface-variant. The stated guarantee: "These color pairs provide a minimum of 3:1 color contrast" | Android Developers, *Color roles and tokens* (Wear), https://developer.android.com/design/ui/wear/guides/styles/color/roles-tokens |
| F20 | Radix splits twelve steps by **job**: 1–2 backgrounds, 3–5 component backgrounds (normal / hover / pressed), 6–8 borders (subtle / interactive / "stronger borders and focus rings"), 9–10 solid fills, 11–12 text. A colour belongs to exactly one job | Radix, *Understanding the scale*, https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale |
| F21 | USWDS makes contrast arithmetic mechanical with "grades": a 0–100 lightness scale standardised across hues, and "magic numbers" — "A magic number of 40+ results in WCAG 2.0 AA Large Text contrast"; "50+ results in WCAG 2.0 AA contrast or AAA Large Text"; "70+ results in WCAG 2.0 AAA contrast" | USWDS, *Color tokens*, grade table updated 3 Jun 2022, https://designsystem.digital.gov/design-tokens/color/overview/ |
| F22 | Vercel's Geist assigns ten steps by job too: 100–300 component backgrounds, 400–600 borders, 700–800 high-contrast backgrounds, 900–1000 text and icons. It states **no** per-step contrast guarantee | Vercel, *Geist colors*, https://vercel.com/geist/colors |
| F23 | Tailwind v4 defines every default colour in OKLCH — e.g. `--color-sky-500: oklch(68.5% 0.169 237.323)` — with eleven steps 50–950, "50 being the lightest, and 950 being the darkest". It documents no contrast pairing rule | Tailwind CSS, *Colors*, https://tailwindcss.com/docs/colors |

### 2d. Building a palette from brand colours that were never chosen for contrast

| # | Finding | Source |
|---|---|---|
| F24 | Stripe hit exactly GT's problem: none of their default text colours except black reached 4.5:1, and darkening them in RGB made the palette "muddy" with hues becoming indistinguishable. The fix was CIELAB: put every hue on the same perceptual lightness curve, then guarantee contrast by **distance on the ramp** — five levels apart for small text, four for icons and large text. "With contrast guidelines built in to the system, it's simple to make adjustments for color contrast in different components with predictable results" | Daryl Koopersmith and Wilson Miner, Stripe, 15 Oct 2019, https://stripe.com/blog/accessible-color-systems |
| F25 | Linear reduced a theme from 98 variables to three — base colour, accent colour, contrast — by moving to LCH: "LCH has the benefit that it's perpetually [sic] uniform, meaning a red and a yellow color with lightness 50 will appear roughly equally light to the human eye." The contrast variable then "allows us to automatically include super high-contrast themes for users who need it for accessibility reasons." They also deliberately reduced chroma: "limiting how much chrome (blue in our case) was used" to return to "a more neutral and timeless appearance" | Andreas Eldh and Yann-Edern Gillet, Linear, 28 Mar 2024, https://linear.app/now/how-we-redesigned-the-linear-ui |
| F26 | LCH keeps saturation while meeting AA where HSL cannot: "HSL does an ok job of darkening colors for accessibility, but you can see that when we used LCH, I retained much more of the original saturation of the color. The HSL cards look dark and dull" | Zapier, *LCH: Easier accessibility and prettier colors*, https://zapier.com/blog/lch-easier-accessibility-prettier-colors/ |
| F27 | A palette needs **utility** (enough steps for every state) and **consistency** (the same contrast behaviour in light and dark). Numbered scales beat semantic names because "if you initially use shades named 'red 500' and 'red 700', and later need something in between, you can simply introduce 'red 600'". The essay derives an exponential ramp `r(x) = e^(3.04x)` so that 500 scale points always yields 4.5:1 | Matt Ström-Awn, *How to generate color palettes for design systems*, https://mattstromawn.com/writing/generating-color-palettes/ |
| F28 | Adobe Leonardo inverts the workflow entirely: make "contrast ratio as the starting point, rather than a post-color-selection auditing process". Colours are generated from a target ratio, not audited after the fact | Adobe, *Leonardo* README, https://github.com/adobe/leonardo |

### 2e. Dark surfaces: what is actually known

| # | Finding | Source |
|---|---|---|
| F29 | Dark mode is not an accessibility win by default. NN/g's synthesis: Piepenbrock et al. found "light mode won across all dimensions" for normal vision on acuity and proofreading, and "the smaller the font, the better it is for users to see the text in light mode". Legge et al. (1985) found the reverse for people with cloudy ocular media such as cataracts. The recommendation is choice, not a default: "at this point we don't recommend switching to dark mode by default if your target audience includes the general population" | Raluca Budiu, NN/g, 2020, https://www.nngroup.com/articles/dark-mode/ |
| F30 | **Halation** is the specific failure: "a subtle 'glow' or blur effect around letters" when very bright text sits on a very dark ground. It affects readers with astigmatism, migraine, low vision and tired eyes. Advice: "avoid pure white text on pure black backgrounds", "prefer softened contrast (off-white on dark gray)". The piece explicitly rejects the naive rule: "higher contrast = better" is an oversimplification | Diana Khalipina, *When dark mode becomes hard to read: a halation problem*, 4 Jun 2026, https://a11ywithdiana.substack.com/p/when-dark-mode-becomes-hard-to-read |
| F31 | Astigmatism is not a small minority. Cited studies: "more than 28% [of U.S. children 5–17] have astigmatism of 1.0 diopters (D) or greater"; in a UK glasses-wearing cohort "47.4% of them had astigmatism of 0.75 D or greater in at least one eye"; "almost half of the population has at least 0.5 D". White on black produces "a visual fuzzing effect" that "can cause terrible headaches". The single explicit recommendation: "Whenever possible, avoid using white text on pure black backgrounds" | Level Access, *Accessibility for people with astigmatism*, 30 Jun 2020, https://www.levelaccess.com/blog/accessibility-for-people-with-astigmatism/ |
| F32 | The groups harmed by a dark surface include astigmatic readers, dyslexic readers, and **keyboard users when the focus indicator was not re-designed for the dark ground**. The checklist is: give the choice, "be careful about… pure white on pure black", "check your color contrast ratios", consider a lighter font weight on dark, and "adapt the focus indicator" | Stéphanie Walter, *Dark mode accessibility myth debunked*, https://stephaniewalter.design/blog/dark-mode-accessibility-myth-debunked/ |
| F33 | Institutional practice: Cornell's dark neutral is **#222222**, not black, and the rule for dark grounds is unambiguous — white (#FFFFFF) or light gray (#F7F7F7) for text on dark. Contrast standard cited: "requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text". The brand colour is spent, not spread: Carnelian "should be the **first** color people see" and "the **only** color" in limited-colour media | Cornell University Brand Center, *Colors*, https://brand.cornell.edu/design-center/colors/ |
| F34 | Institutional practice, second data point, and the one that settles the orange question: Case Western publishes an explicit allow-list and deny-list. "The following color combinations do not meet accessibility standards and must not be used." Its bright accents (Terracotta Orange, Vivid Green) are permitted as text on white **only at size**: "Only allowed for text sizes 18pt and larger." Light text on dark grounds is restricted to white, light gray, and the palest brand blue | Case Western Reserve University, *Accessible Color Usage*, https://case.edu/brand/visual-identity/color/accessible-color-usage |

### 2f. Focus rings, forced colours, and tints as cues

| # | Finding | Source |
|---|---|---|
| F35 | Which colours a focus indicator must contrast with depends on where it sits: "an external outline contrasts only with the surrounding background, while a border must contrast with both the component's background and the page background". Use `outline-offset` to separate the ring from the control. The universal pattern is two colours, "you use black and white to create a focus indicator", the "Oreo" ring: `outline: 9px double black; box-shadow: 0 0 0 6px white;`. A dashed ring must be doubled in thickness because gaps reduce area | Sara Soueidan, *A guide to designing accessible, WCAG-compliant focus indicators*, 13 Aug 2021, updated 27 Aug 2023, https://www.sarasoueidan.com/blog/focus-indicators/ |
| F36 | 1.4.11's own worked examples are about focus rings: a yellow (#FFFF00) indicator **inside** a blue (#4189B9) button passes; the same yellow **outside** on white fails; a green (#008000) indicator outside on white passes | W3C WAI, *Understanding 1.4.11*, 15 Jun 2026, https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html |
| F37 | A documented real-world failure with the same shape as GT's: a focus ring at #4E8FFE on a #0F64CE background — 1.8:1 — "failed at Level AA". The rule stands: never `outline: none`; restyle instead | Adrian Roselli, *Keep the focus outline*, 18 Jun 2014, updated 7 Nov 2021, https://adrianroselli.com/2014/06/keep-focus-outline.html |
| F38 | Under forced colors (Windows High Contrast), `box-shadow` and `text-shadow` are forced to `none`, `background-image` to `none` for non-URL values, and `color`, `background-color`, `border-color` **and `outline-color`** are all replaced by system colours. So a `box-shadow` half of a two-colour ring disappears entirely in that mode, and the outline half survives only as a system colour. The documented remedy is `@media (forced-colors: active)` with a real `border`/`outline` in a system colour keyword | MDN, *forced-colors*, last modified 20 Apr 2026, https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors |
| F39 | Practical CSS for the same problem: prefer `:focus-visible` with a `:focus:not(:focus-visible) { outline: none; }` fallback; size the ring with `max(1px, 0.1em)` so it scales with type; compensate for forced colours by adding a transparent `outline` or `border` alongside a shadow, and use `currentColor` for SVG fill and stroke | Stephanie Eckles, *Modern CSS upgrades to improve accessibility*, 9 Apr 2021, https://moderncss.dev/modern-css-upgrades-to-improve-accessibility/ |
| F40 | Prevalence that sets the bar for colour-only cues: colour blindness "affects approximately 1 in 12 men (8%) and 1 in 200 women"; globally "about 300 million people" | Colour Blind Awareness, *Colour blindness*, https://www.colourblindawareness.org/colour-blindness/ |
| F41 | The redundancy rule and the cheap test: "use additional cues (such as strokes, patterns) to communicate important information", and "Turn your design into grayscale and see if you can correctly understand the design" | Kelley Gordon, NN/g, *5 visual treatments that improve accessibility*, 30 Oct 2022, https://www.nngroup.com/articles/visual-treatments-accessibility/ |
| F42 | Redundant cues in practice: text labels, shape/symbol differentiation, and — where a pair must stay distinguishable — substituting red/blue for red/green, because "a higher percentage of viewers can detect a distinction between red and blue" | Penn State Accessibility, *Color coding*, updated 5 Feb 2025, https://accessibility.psu.edu/color/colorcoding/ |
| F43 | Links specifically: colour must not be "the sole means of distinguishing links"; underlines remain "essential if you use link colors such as reds or greens"; navigation lists may drop the underline when the region's function is already obvious | Jakob Nielsen, NN/g, *Guidelines for visualizing links*, 9 May 2004 (editor's note 2026), https://www.nngroup.com/articles/guidelines-for-visualizing-links/ |
| F44 | A national design system's answer to the "one ring for every surface" problem is a single reserved colour used for nothing else: GOV.UK focus is #ffdd00 with #0b0c0c, and "Only use this colour to indicate which element is focused on." Their contrast obligation is stated as a hard requirement: "You **must** make sure that the contrast ratio of text and interactive elements in your service meets… success criterion 1.4.3 Contrast (minimum) level AA" | GOV.UK Design System, *Colour*, https://design-system.service.gov.uk/styles/colour/ |

---

## 3. Principles the studio adopts

| # | Principle | Traces to |
|---|---|---|
| P1 | **A token carries a role, not a value.** Every colour in `tokens.css` gets exactly one job (page ground, section surface, dark surface, body text, muted text, rule, fill, on-fill text, focus ring). A colour used for two jobs is two tokens | F18, F19, F20, F22 |
| P2 | **Every text token is declared against the surfaces it is legal on, not in the abstract.** Material's on-/container pairing is the model: the pair is the unit, not the colour | F18, F19 |
| P3 | **Contrast is an input, not an audit.** When a brand colour fails, do not nudge it until a checker turns green — derive a new value from the target ratio and keep the hue | F24, F27, F28 |
| P4 | **Hue is preserved by darkening in a perceptual space, not by mixing toward black in RGB.** Otherwise the palette goes muddy and the brand reads as a different brand | F24, F25, F26 |
| P5 | **AA is the floor, AAA is the target for running prose.** Body text on any GT surface should reach 7:1; 4.5:1 is the minimum that ships, and only for text that is not a paragraph | F1, F2, F3 |
| P6 | **APCA is the second opinion, never the verdict.** Report Lc beside the ratio. Where APCA is harsher than WCAG, believe APCA; where it is more lenient, still ship the WCAG number, because WCAG 2.2 is the normative standard and WCAG 3 has no adopted algorithm | F14, F15, F16, F17 |
| P7 | **The focus ring is two measurements, not one:** 3:1 against whatever it is adjacent to (1.4.11, Level AA), and 3:1 of change against the same pixels unfocused (2.4.13, Level AAA). A ring that straddles two surfaces must satisfy both on both | F4, F7, F9, F35, F36 |
| P8 | **Where a ring can sit on more than one surface, use two colours ≥9:1 apart.** That is a proof, not a heuristic: one band is then guaranteed to clear 3:1 on any solid ground | F10, F35 |
| P9 | **A dark surface is a dark blue-black, not black, and the text on it is off-white, not white.** Halation is a real, measurable harm to roughly half the population at some diopter, and the cost of avoiding it is nil | F30, F31, F32, F33 |
| P10 | **A tint may reinforce a distinction; it may never be the distinction.** If a parent must know which door is which, the answer is a word, a mark and a position — the tint is the fourth cue | F12, F40, F41, F42 |
| P11 | **The accent is spent, not spread.** One accent event per screen, and the brighter the accent the smaller its legal role | F33, F34 |
| P12 | **Every focus and border decision is checked under `forced-colors: active`,** because `box-shadow` vanishes there and `outline-color` is replaced | F38, F39 |

---

## 4. Anti-patterns

| # | Anti-pattern | Why it fails | Evidence |
|---|---|---|---|
| A1 | A brand accent used as small text because it is "the brand colour" | Mid-lightness saturated oranges land near 2:1 on cream. Case Western's own rule caps its terracotta at 18pt and larger | F34, and 5a below |
| A2 | Nudging a failing colour a few percent darker until a checker passes | Produces a muddy, off-brand colour and a value nobody can reproduce. Derive from the ratio instead | F24, F28 |
| A3 | Darkening in HSL or by mixing with black | Hues shift unevenly because the space is not perceptually uniform; "the HSL cards look dark and dull" | F25, F26 |
| A4 | One focus ring token for the whole site | A ring tuned to a light ground is invisible on a dark one. This is the documented #4E8FFE-on-#0F64CE failure, and it is the M3 regression in `E3-completion.md` B1 | F37, and 5d below |
| A5 | A focus ring built only from `box-shadow` | Forced colors mode forces `box-shadow` to `none`; the indicator disappears for the users who most need it | F38, F39 |
| A6 | Pure white text on a near-black surface | Halation: glow, ghosting, headaches for astigmatic readers | F30, F31 |
| A7 | Dark mode adopted as an accessibility improvement | The measured result is the opposite for most readers; the correct move is a choice, not a default | F29, F32 |
| A8 | Two pale tints used to tell two cards apart | Tint-versus-tint is ~1.0:1. Invisible in grayscale, invisible to 8% of men, and invisible on a phone in sunlight | F12, F40, F41, and 5a below |
| A9 | A near-invisible hairline as a card's only boundary | If the border is what identifies the control, 1.4.11 wants 3:1; a 1.4:1 hairline is decoration masquerading as structure | F4, F20 |
| A10 | Assuming a white "on-fill" token works on every fill | White on navy is 14.58:1; the same white on the orange fill is 2.50:1. The token's own comment admits the ratio was never verified | F18, and 5a below |
| A11 | Treating 4.5:1 as the goal for paragraphs | 4.5:1 serves 20/40 acuity; running prose should reach 7:1 where the palette allows, and GT's does | F2, F3 |
| A12 | Citing APCA as if it were the standard | WCAG 3 is a Working Draft that has not chosen an algorithm and says it is inappropriate to cite as other than work in progress | F16 |

---

## 5. How it applies to GT

### 5a. The arithmetic, once

Worked in full for the pairing that failed in `E3-completion.md` B2 — `--color-accent` #e48b53 on `--color-bg` #fcf4ef — using F5 and F6.

**Step 1, 8-bit to sRGB.** #e48b53 → (228, 139, 83) → (0.894118, 0.545098, 0.325490). #fcf4ef → (252, 244, 239) → (0.988235, 0.956863, 0.937255).

**Step 2, linearise.** Every channel exceeds 0.03928, so each uses `((c + 0.055) / 1.055) ^ 2.4`:

| Channel | #e48b53 | #fcf4ef |
|---|---|---|
| R | 0.775822 | 0.973445 |
| G | 0.258183 | 0.904661 |
| B | 0.086500 | 0.863157 |

**Step 3, relative luminance,** `L = 0.2126R + 0.7152G + 0.0722B`:

- accent: `0.2126(0.775822) + 0.7152(0.258183) + 0.0722(0.086500)` = **0.355838**
- bg: `0.2126(0.973445) + 0.7152(0.904661) + 0.0722(0.863157)` = **0.916288**

**Step 4, ratio,** `(L1 + 0.05) / (L2 + 0.05)` = `(0.916288 + 0.05) / (0.355838 + 0.05)` = `0.966288 / 0.405838` = **2.38:1**.

Against 4.5 (normal), 3.0 (large), 3.0 (non-text): **fail, fail, fail**. This confirms Astra's B2 figure exactly. Every row below was computed the same way; APCA Lc uses APCA-W3 0.1.9 (soft-clamp black 0.022/1.414; exponents 0.56/0.57 BoW, 0.65/0.62 WoB; scale 1.14; offset 0.027; loClip 0.1), signed negative for light-on-dark.

### 5b. Every pairing the tokens allow

`--color-surface` and `--color-georgetown-tint` are the **same value** (#f8e8de), so they are one column. Thresholds: normal AA 4.5, large AA 3.0 (≥24px, or ≥18.66px bold), normal AAA 7.0, large AAA 4.5, non-text 3.0. Verdicts are per WCAG 2.2; Lc is the second opinion.

| Text token | Surface | Ratio | Normal AA | Large AA | Normal AAA | Large AAA | Non-text | APCA Lc | APCA reading (F15) |
|---|---|---|---|---|---|---|---|---|---|
| `--color-text` #001117 | bg #fcf4ef | **17.69** | pass | pass | pass | pass | pass | +99.7 | clears Lc 90, body at 14px/400 |
| `--color-text` #001117 | surface / gt-tint #f8e8de | **16.10** | pass | pass | pass | pass | pass | +93.5 | clears Lc 90 |
| `--color-text` #001117 | anywhere tint #e4eef2 | **16.30** | pass | pass | pass | pass | pass | +94.3 | clears Lc 90 |
| `--color-text` #001117 | navy #002a3a | **1.27** | fail | fail | fail | fail | fail | +0.0 | invisible |
| `--color-text` #001117 | accent #e48b53 | **7.43** | pass | pass | pass | pass | pass | +53.2 | Lc 45 only — headline weight on the fill, not body |
| `--color-text-muted` #5b5b5b | bg #fcf4ef | **6.25** | pass | pass | **fail** | pass | pass | +77.7 | clears Lc 75, body at 18px/400 |
| `--color-text-muted` #5b5b5b | surface / gt-tint #f8e8de | **5.69** | pass | pass | **fail** | pass | pass | +71.5 | Lc 60 band |
| `--color-text-muted` #5b5b5b | anywhere tint #e4eef2 | **5.76** | pass | pass | **fail** | pass | pass | +72.3 | Lc 60 band |
| `--color-text-muted` #5b5b5b | navy #002a3a | **2.22** | fail | fail | fail | fail | fail | −15.1 | below Lc 30 — unusable |
| `--color-text-muted` #5b5b5b | accent #e48b53 | **2.62** | fail | fail | fail | fail | fail | +31.2 | Lc 30 floor only |
| `--color-accent` #e48b53 | bg #fcf4ef | **2.38** | **fail** | **fail** | fail | fail | **fail** | +44.5 | below Lc 45 |
| `--color-accent` #e48b53 | surface / gt-tint #f8e8de | **2.17** | **fail** | **fail** | fail | fail | **fail** | +38.3 | below Lc 45 |
| `--color-accent` #e48b53 | anywhere tint #e4eef2 | **2.19** | **fail** | **fail** | fail | fail | **fail** | +39.1 | below Lc 45 |
| `--color-accent` #e48b53 | navy #002a3a | **5.83** | pass | pass | fail | pass | pass | −48.3 | Lc 45 — headline size on navy |
| `--color-accent-contrast` #fbfbfb | bg #fcf4ef | **1.05** | fail | fail | fail | fail | fail | +0.0 | invisible |
| `--color-accent-contrast` #fbfbfb | surface / gt-tint #f8e8de | **1.15** | fail | fail | fail | fail | fail | −8.4 | invisible |
| `--color-accent-contrast` #fbfbfb | anywhere tint #e4eef2 | **1.14** | fail | fail | fail | fail | fail | −7.5 | invisible |
| `--color-accent-contrast` #fbfbfb | navy #002a3a | **14.58** | pass | pass | pass | pass | pass | −101.8 | above Lc 90 — but see halation, F30 |
| `--color-accent-contrast` #fbfbfb | accent #e48b53 | **2.50** | **fail** | **fail** | fail | fail | **fail** | −52.7 | **the token's unverified case, now measured** |
| `--color-focus` #004f71 | bg #fcf4ef | **8.20** | pass | pass | pass | pass | pass | +84.1 | clears Lc 75 |
| `--color-focus` #004f71 | surface / gt-tint #f8e8de | **7.46** | pass | pass | pass | pass | pass | +77.9 | clears Lc 75 |
| `--color-focus` #004f71 | anywhere tint #e4eef2 | **7.56** | pass | pass | pass | pass | pass | +78.8 | clears Lc 75 |
| `--color-focus` #004f71 | navy #002a3a | **1.69** | fail | fail | fail | fail | **fail** | −9.0 | invisible — **E3 B1** |
| `--color-focus` #004f71 | accent #e48b53 | **3.44** | fail | pass | fail | fail | pass | +37.6 | ring only, never text |
| `--color-navy` #002a3a | bg #fcf4ef | **13.88** | pass | pass | pass | pass | pass | +95.9 | clears Lc 90 |
| `--color-navy` #002a3a | surface / gt-tint #f8e8de | **12.63** | pass | pass | pass | pass | pass | +89.7 | at Lc 90 |
| `--color-navy` #002a3a | anywhere tint #e4eef2 | **12.79** | pass | pass | pass | pass | pass | +90.5 | clears Lc 90 |
| `--color-navy` #002a3a | accent #e48b53 | **5.83** | pass | pass | fail | pass | pass | +49.4 | Lc 45 — headline size on the fill |
| `--color-border` #cac6c4 | bg #fcf4ef | **1.56** | fail | fail | fail | fail | **fail** | +24.5 | above Lc 15, so visible as decoration only |
| `--color-border` #cac6c4 | surface / gt-tint #f8e8de | **1.42** | fail | fail | fail | fail | **fail** | +18.3 | decoration only |
| `--color-border` #cac6c4 | anywhere tint #e4eef2 | **1.44** | fail | fail | fail | fail | **fail** | +19.1 | decoration only |
| `--color-border` #cac6c4 | navy #002a3a | **8.90** | pass | pass | pass | pass | pass | −69.2 | fine on navy |
| `--color-border` #cac6c4 | accent #e48b53 | **1.53** | fail | fail | fail | fail | **fail** | −20.1 | decoration only |

**Surface against surface** — the question behind "can a tint carry the school cue":

| Pair | Ratio | Non-text 3.0 |
|---|---|---|
| bg #fcf4ef vs surface / gt-tint #f8e8de | **1.10** | fail |
| bg #fcf4ef vs anywhere tint #e4eef2 | **1.09** | fail |
| **gt-tint #f8e8de vs anywhere tint #e4eef2** | **1.01** | **fail** |
| bg #fcf4ef vs accent #e48b53 | 2.38 | fail |
| bg #fcf4ef vs navy #002a3a | 13.88 | pass |
| surface #f8e8de vs navy #002a3a | 12.63 | pass |
| anywhere tint #e4eef2 vs navy #002a3a | 12.79 | pass |
| accent #e48b53 vs navy #002a3a | 5.83 | pass |

The two school tints are **1.01:1 apart**. They are indistinguishable in grayscale (F41's test) and for a red-green colour-blind reader the warm/cool split is precisely the axis that collapses (F40, F42).

**Summary of failures:** **16 of the 33** text pairings fail normal AA (17 pass). Most of those failures are pairings nobody would reach for — white on cream, text on navy. Five failures matter because they are roles someone will reach for: accent as text on any of the three light surfaces (2.17 to 2.38), `--color-accent-contrast` on the accent fill (2.50), `--color-focus` on navy (1.69), `--color-text-muted` on navy (2.22), and `--color-border` on any light surface (1.42 to 1.56).

### 5c. Allowed text-on-surface pairings (the brief's Color and surface field copies this table verbatim)

| Surface | Body and any running prose | Secondary / muted text | Large display ≥24px or ≥18.66px bold | Never |
|---|---|---|---|---|
| `--color-bg` #fcf4ef | `--color-text` #001117 (17.69, Lc +99.7) | `--color-text-muted` #5b5b5b (6.25, AA not AAA) | `--color-text`, `--color-navy` (13.88), `--color-accent-text` **proposed** (5.14) | `--color-accent`, `--color-accent-contrast`, `--color-border` |
| `--color-surface` / `--color-georgetown-tint` #f8e8de | `--color-text` (16.10) | `--color-text-muted` (5.69) | `--color-text`, `--color-navy` (12.63), `--color-accent-text` (4.68) | `--color-accent`, `--color-accent-contrast`, `--color-border` |
| `--color-anywhere-tint` #e4eef2 | `--color-text` (16.30) | `--color-text-muted` (5.76) | `--color-text`, `--color-navy` (12.79), `--color-accent-text` (4.73) | `--color-accent`, `--color-accent-contrast`, `--color-border` |
| `--color-navy` #002a3a | `--color-accent-contrast` #fbfbfb (14.58) — but prefer `--color-text-on-dark` **proposed** for prose, per F30 | `--color-text-muted-on-dark` **proposed** #a3bfcb (7.81, AAA) | `--color-accent` #e48b53 (5.83) at ≥24px only; `--color-border` #cac6c4 (8.90) | `--color-text` (1.27), `--color-focus` (1.69), `--color-text-muted` (2.22) |
| `--color-accent` #e48b53 as a fill | `--color-text` #001117 (7.43, AAA) | none available above 4.5 | `--color-navy` #002a3a (5.83) | **`--color-accent-contrast` #fbfbfb (2.50)** — the current default, and wrong |

Note on APCA: the two pairings that clear WCAG AAA but sit at only Lc 45–53 (`--color-text` on the accent fill, `--color-navy` on the accent fill) are the cases where APCA is harsher than WCAG. By P6 we believe the harsher number: text on the orange fill is **button-label and headline weight only**, never a paragraph — which is what it is used for anyway.

### 5d. The focus ring, per surface

| Surface the ring sits on | Ring | Ratio vs adjacent (1.4.11 AA) | Change of state (2.4.13 AAA) | Verdict |
|---|---|---|---|---|
| `--color-bg` #fcf4ef | `--color-focus` #004f71, 2px outline + 2px offset | 8.20 | 8.20 | pass |
| `--color-surface` / gt tint #f8e8de | `--color-focus` #004f71 | 7.46 | 7.46 | pass |
| `--color-anywhere-tint` #e4eef2 | `--color-focus` #004f71 | 7.56 | 7.56 | pass |
| `--color-accent` #e48b53 fill | `--color-focus` #004f71 | 3.44 | 3.44 | pass (ring only; never as text at 3.44) |
| **`--color-navy` #002a3a** | `--color-focus` #004f71 | **1.69** | **1.69** | **fail — this is E3 B1** |
| **`--color-navy` #002a3a** | `--color-focus-on-dark` **proposed** #fbfbfb | 14.58 | 14.58 | pass |
| **Any ring that straddles two surfaces** (the M3 logo-plate case) | two-colour ring, both bands ≥2px | see below | see below | pass everywhere |

The straddle case is the one that actually broke M3: the outline sat outside a cream logo plate on a navy header, so it was adjacent to both. A single colour cannot solve it. C40's arithmetic (F10) can, and GT can build the ring from **tokens it already has**:

```css
:focus-visible {
  outline: 2px solid var(--color-accent-contrast); /* #fbfbfb, inner band */
  outline-offset: 0;
  box-shadow: 0 0 0 4px var(--color-navy);         /* #002a3a, outer band */
}
@media (forced-colors: active) {
  :focus-visible { outline: 3px solid CanvasText; box-shadow: none; }  /* F38 */
}
```

`--color-navy` against `--color-accent-contrast` is **14.58:1**, comfortably over C40's 9:1 threshold, so one band is guaranteed to clear 3:1 on any solid ground. Verified against all five GT surfaces:

| Ground | Outer #002a3a | Inner #fbfbfb | Winning band |
|---|---|---|---|
| bg #fcf4ef | 13.88 | 1.05 | 13.88 pass |
| surface / gt tint #f8e8de | 12.63 | 1.15 | 12.63 pass |
| anywhere tint #e4eef2 | 12.79 | 1.14 | 12.79 pass |
| navy #002a3a | 1.00 | 14.58 | 14.58 pass |
| accent #e48b53 | 5.83 | 2.50 | 5.83 pass |

Rule for the brief: **`--color-focus` #004f71 is the default ring on the three light surfaces.** Anything on, over, or crossing navy — header, footer, proof strip, and any logo plate inside them — uses the two-colour ring. Under `forced-colors: active` the shadow band is gone (F38) so a system-colour outline replaces both. `2.5.8` and `2.4.11` still apply independently: 24×24 minimum targets (the mocks already hold 44×44), and no sticky header may entirely hide a focused control.

### 5e. Proposals for the missing roles

Five roles the palette does not have. None is an edit to `tokens.css` — each is a register row for `07`, per `09`.

| Proposal | Token | Value | How it was derived | Measured |
|---|---|---|---|---|
| **PR-1 accent as text** | `--color-accent-text` | **#a5501a** | `--color-accent` #e48b53 is HSL(23.17°, 72.86%, 60.98%). Hue and saturation held, lightness lowered to 37.5% — the first step clearing 4.5:1 on the *worst* light surface with margin (P3, P4) | bg **5.14**, surface / gt tint **4.68**, aw tint **4.73**, APCA **Lc +65.4** on surface. Clears AA normal on all three light surfaces; clears APCA Lc 60 (24px/400 or 16px/700), not Lc 75 — so it is a **label** colour, not a body colour. **2.70 on navy: never use it there** |
| **PR-2 focus on dark** | `--color-focus-on-dark` | **#fbfbfb** (= the existing `--color-accent-contrast` value) | The cheapest fix that needs no new hue; 5d's table | 14.58 on navy |
| **PR-3 text on the accent fill** | `--color-on-accent` | **#001117** (= `--color-text`) | 5a proves `--color-accent-contrast` fails at 2.50 on the orange fill. `--color-text` is the only token above AAA there | 7.43 on accent, Lc +53.2 → headline and button-label weight only |
| **PR-4 muted text on dark** | `--color-text-muted-on-dark` | **#a3bfcb** | `--color-text-muted` #5b5b5b has no dark counterpart (`tokens.css` already flags the gap). Derived as a 65% mix of `--color-focus` #004f71 toward `--color-accent-contrast` #fbfbfb, so it stays inside the brand-blue family rather than being an invented grey | **7.81 on navy** — clears AAA; APCA **Lc −62.1**. Deliberately not near-white, per the halation evidence (F30, F31) |
| **PR-5 a border that is load-bearing** | `--color-border-strong` | **#857f7b** | `--color-border` #cac6c4 is 1.42–1.56 on light surfaces. Kept as the decorative hairline; a second token is added for any border that is the *only* thing identifying a control | bg **3.63**, surface **3.31**, aw tint **3.35**, navy **3.82** — 1.4.11 clear on every surface |

Two further rules follow and belong in the brief, not in CSS:

1. **`--color-accent` is demoted to a non-text role.** It may be a fill, a rule, an underline, an icon, a bullet, or a focus-adjacent marker. As text it is legal in exactly one place: **on navy, at ≥24px or ≥18.66px bold** (5.83:1, Lc −48.3). That is the same rule Case Western publishes for its own terracotta (F34).
2. **`--color-accent-contrast` should be renamed `--color-on-navy`.** Its name promises it is safe on every accent surface; it is safe on one. The token's own comment ("AA ratio not verified") is now resolved: 14.58 on navy, **2.50 on the orange fill**.

### 5f. Where the orange accent may appear

| Use | Allowed? | Condition | Measured |
|---|---|---|---|
| A rule, underline, divider, progress bar on a light surface | **No** as `--color-accent` | 2.17–2.38 fails 1.4.11's 3:1 where the mark carries meaning. Use `--color-accent-text` #a5501a (3.31+) or accept it as purely decorative with a redundant cue | 2.38 / 2.17 / 2.19 |
| A **fill** (a button, a chip, a badge) on a light surface | **Yes** | It is a graphical object, not text; its own boundary against bg is 2.38, so it needs a `--color-border-strong` edge or a text label to be identifiable. Label must be `--color-text` (7.43) or `--color-navy` (5.83), never #fbfbfb | 2.38 vs bg |
| Small text, eyebrows, section labels, numbered steps on a light surface | **No** | This is exactly E3 regression B2 across M1, M2, M4, M5 | 2.38 / 2.17 |
| Large display type on a light surface | **No** at 2.38 — it fails even the 3:1 large threshold. Use `--color-accent-text` #a5501a | 2.38 |
| Large display type **on navy**, ≥24px or ≥18.66px bold | **Yes** | The one place the brand orange is legal as text | 5.83, Lc −48.3 |
| Body text anywhere | **No**, in any variant | Even #a5501a only reaches Lc 65.4, below APCA's Lc 75 body floor | — |
| Focus ring | **No** | It is the accent, not the state colour. Confusing state with brand is the GOV.UK anti-pattern (F44) | — |

One accent event per screen (P11). The rubric's "accent spent once per screen" line is enforced by counting, not by judgement.

### 5g. Calibrated 5 for the rubric row **Color and surface**

A 5 is every line of this, demonstrable from artefacts the QA runner already produces. Below 4 on any line caps the row at 3.

| # | What a 5 requires | Evidence |
|---|---|---|
| CS1 | Every colour in the mock's CSS is a `var(--…)` from `tokens.css` or a declared, register-backed departure. Zero literal hex values | Stylesheet grep, reported in the QA file |
| CS2 | Every text node's computed colour-on-background pair appears in 5c's allowed table. Any pair not in the table is a finding, even if it happens to pass | Runner's computed-style sweep at every matrix viewport |
| CS3 | All running prose reaches **7:1** (AAA); nothing below 4.5:1 ships as text at any size | Runner contrast test, per node |
| CS4 | APCA Lc is reported beside every ratio, and no text node sits below **Lc 60**; paragraphs reach **Lc 75** | Runner contrast test, second column |
| CS5 | The accent appears as a text colour zero times on a light surface, and at most once per screen in any role | Palette usage map, counted |
| CS6 | The dark surface is spent deliberately and countably — `K1` 5c budgets it at exactly two sections (proof strip, footer) — and is `--color-navy`, never black | Full-page capture plus the section-weight table |
| CS7 | Text on navy is off-white or the muted-on-dark token, never pure `#ffffff`; headings on navy do not gain weight to compensate | Computed styles; halation rule F30, F31 |
| CS8 | Every focus ring passes both measurements on **every** surface it can reach, including the straddle case; the two-colour ring is used wherever navy is adjacent | Runner focus test at 5d's per-surface matrix |
| CS9 | A `forced-colors: active` render is captured, and every control and focus ring is still identifiable in it | One extra capture per mock |
| CS10 | The grayscale render of the first screen still answers "which door is which" — the school cue survives without hue | Desaturated capture, critic's reading |
| CS11 | Each school's tint is accompanied by at least two non-colour cues (name, mark or icon, position), so the tint is never load-bearing | First-screen capture; the 1.01:1 tint pair makes this mandatory |
| CS12 | Every border that is the only thing identifying a control reaches 3:1; decorative hairlines are declared as decorative in the rationale | Stylesheet plus computed styles |

Exemplar for this row: **Case Western's accessible colour page** (F34) for the discipline of a published allow-list and a size-gated accent, and **Cornell** (F33) for spending the brand colour once. Anti-exemplar: the current mock set, where four of five mocks use the accent as small text.

### 5h. Calibrated 5 for the QA contrast tests (`17` section 4)

Section 4 currently says: "contrast of every text node against its background at AA; visible focus on every focusable element with 3:1 against its surroundings". That is two tests. A 5 is **nine**, all deterministic, all run at every viewport in the matrix:

| # | Test | Pass condition | Fails today |
|---|---|---|---|
| QC1 | Text contrast, per node, per viewport | ≥4.5:1, or ≥3.0:1 with computed `font-size` ≥24px, or ≥18.66px with `font-weight` ≥700. Report the computed size and weight in the failure, not just the ratio | the orange section labels (2.38 / 2.17) |
| QC2 | Prose contrast | Any node whose text is >120 characters reaches **7:1** | — |
| QC3 | APCA second opinion | Lc reported for every node; a warning at Lc <60, a failure at Lc <30 | would flag #a5501a if used as body |
| QC4 | Allowed-pair check | Every (colour, background) pair is in 5c's table. An unlisted pair fails even if the ratio passes | catches new colours before they spread |
| QC5 | Focus adjacency (1.4.11) | The ring reaches 3:1 against **every** colour it is adjacent to, sampled on all four sides of the focused box | M3 logo link, 1.69 |
| QC6 | Focus change-of-state (2.4.13) | Focused and unfocused captures of the same element differ by ≥3:1 over an area ≥ a 2px perimeter | — |
| QC7 | Non-text contrast (1.4.11) | Every border, icon and graphical mark that identifies a control or carries meaning reaches 3:1 | `--color-border` at 1.42–1.56 |
| QC8 | Grayscale survival | A desaturated capture is produced per mock per viewport, for the critic; any cue that disappears is a finding | the 1.01:1 tint pair |
| QC9 | Forced colors | A `forced-colors: active` render per mock; every control and ring still identifiable | any shadow-only ring |

Plus two that belong to section 4 but are not contrast: 2.5.8 target size (≥24×24 as the standard, ≥44×44 as GT's own bar, already held) and 2.4.11 focus not obscured (a focused control is never entirely hidden behind the sticky header — this has not been tested at all, and the header is sticky).

### 5i. What this changes downstream

| Artefact | Change |
|---|---|
| `17` section 5 brief, **Color and surface** field | Must contain 5c's allowed-pair table, 5d's per-surface ring table and 5f's accent rules. A brief without them is incomplete. The field's current wording — "where the accent may appear as text (never below AA)" — is now answerable precisely: on navy, at ≥24px, and nowhere else |
| `17` section 6 rubric | The Color and surface row gets 5g's twelve checkable lines; the critic scores against those |
| `17` section 4 QA | Two contrast tests become nine (5h) |
| `tokens.css` | **Five proposals, no edits:** PR-1 to PR-5 in 5e, plus the demotion of `--color-accent` and the rename of `--color-accent-contrast`. All go through `07` as design rows |
| `07` register | New rows needed. Nothing here contradicts an existing row: DD-04 (tint as a secondary cue only) is *strengthened* by the 1.01:1 measurement, and DD-19's flagging of the anywhere tint as a departure is unaffected — the tint is fine as a surface (16.30:1 for text on it), it is only useless as a *distinguisher* |
| `1_spec/13` and the runner | QC1–QC9 as deterministic tests; two new captures per mock (grayscale, forced-colors) |
| `E3-completion.md` B1 and B2 | Both are reproduced and quantified here; B1's fix is 5d, B2's fix is PR-1. A third defect of the same family is added: `--color-accent-contrast` on the accent fill, 2.50:1 |

---

## 6. Sources that could not be fetched

Recorded so nothing above rests on them.

| Source | URL | Result |
|---|---|---|
| Material 3, Color roles | https://m3.material.io/styles/color/roles | **Not fetched** — title only, no body. M3 roles are cited instead from the two Android Developers pages (F18, F19) |
| Material 3, How the color system works | https://m3.material.io/styles/color/system/how-the-system-works | **Not fetched** — title only. No tone-number values (tone 40 / tone 80) are asserted anywhere above |
| Material 2, Dark theme | https://m2.material.io/design/color/dark-theme.html | **Not fetched** — title only. The commonly cited #121212 surface and 15.8:1 figure are therefore **not used**; the dark-surface guidance above rests on F29–F33 instead |
| Adobe Spectrum, Color system | https://spectrum.adobe.com/page/color-system/ | **Not fetched** — title only |
| IBM Carbon, Color (three URLs tried: `/elements/color/overview/`, `/elements/color/usage/`, `/guidelines/color/overview/`) | https://carbondesignsystem.com/… | **Not fetched** — 404 or truncated body. No Carbon values are cited |
| Atlassian, Color palette | https://atlassian.design/foundations/color-new/color-palette-new | **Not fetched** — empty body |
| Apple HIG, Color | https://developer.apple.com/design/human-interface-guidelines/color | **Not fetched** — title only |
| Shopify Polaris, Colors | https://polaris-react.shopify.com/design/colors | **Not fetched** — 301 to a different page |
| Smashing Magazine, Dark mode design considerations | https://www.smashingmagazine.com/2020/07/dark-mode-design-considerations/ | **Not fetched** — 404 |
| Leonardo, About | https://leonardocolor.io/about.html | **Not fetched** — 404. Leonardo is cited from the GitHub README instead (F28) |
| Nate Baldwin, Leonardo announcement | https://medium.com/@NateBaldwin/leonardo-… | **Not fetched** — 403 |
| Adrian Roselli, Simplifying focus styles | https://adrianroselli.com/2021/05/simplifying-focus-styles.html | **Not fetched** — 404. Roselli is cited from *Keep the focus outline* instead (F37) |

---

## 7. Open questions

| # | Question | Why it is open | Recommendation |
|---|---|---|---|
| OQ-1 | Is #a5501a the right accent-text value, or should it be derived in OKLCH rather than HSL? | P4 says darken perceptually; the value above was derived by holding HSL hue and saturation, which is the thing F25 and F26 criticise. It lands correctly here because the hue barely moves over this lightness range, but the method is not the one the principles endorse | Ship #a5501a as the register proposal, and have the design-system task (T-063/T-064) regenerate it in OKLCH with contrast as the input (F28). If the OKLCH value differs by less than 2 in each channel, keep #a5501a for stability |
| OQ-2 | Should `--color-accent-contrast` on navy be #fbfbfb at all? | 14.58:1 and Lc −101.8 is *above* APCA's preferred level, and the halation evidence (F30, F31) argues the top of the range is not the best place to sit. But navy #002a3a is not black, so the halation risk is far lower than the studies' pure-black case | Keep #fbfbfb for headings and short strings on navy; use the proposed `--color-text-muted-on-dark` for any paragraph on navy. Revisit only if a reader reports glare |
| OQ-3 | Does `--color-surface` being byte-identical to `--color-georgetown-tint` mean the Georgetown cue does not exist? | Both are #f8e8de. So "Georgetown tinted" and "a normal secondary section" are the same surface, and the only tinted school is Anywhere | **Escalate to G1.** Either the Georgetown tint becomes a distinct value (a departure, which DD-19 already contemplates for the Anywhere tint), or the tint mechanism is dropped for both and the school cue is carried entirely by name, mark and position. Do not ship a cue that exists for one school only |
| OQ-4 | Is the two-colour ring too heavy for a page this quiet? | A 2px + 4px ring is 6px of chrome around every focused control. GOV.UK's answer (F44) is one loud reserved colour instead; Soueidan's (F35) is the Oreo everywhere | Use the single #004f71 ring on light surfaces and reserve the two-colour ring for navy and straddle cases (5d). That keeps the loud ring off 90% of the page |
| OQ-5 | Does `--color-surface-alt` still exist? | `tokens.css` marks it UNRESOLVED (conflict C9: Anywhere's tertiary is dark, Georgetown's is light). Every dark-surface statement above uses `--color-navy` explicitly, following K1 5c | Resolve C9 before `tokens.css` is owned by `design-system/`. Until then no mock may reference `--color-surface-alt` |
| OQ-6 | Should the focus ring colour differ per school? | It would be a cheap continuity cue — blue for Anywhere, something warm for Georgetown | **No.** F44's rule is that the focus colour indicates focus and nothing else. Recommend recording this as a decision so it is not re-litigated |
| OQ-7 | AAA as a target or as a ceiling? | P5 sets 7:1 for prose. `--color-text-muted` #5b5b5b reaches only 5.69–6.25, so the muted role cannot meet it on any light surface | Either accept AA for muted text (it is by definition not prose), or darken the muted token to ~#4a4a4a. Needs a register row; do not change the token silently |
| OQ-8 | Do the in-app browsers (Instagram, TikTok) alter rendered colour? | REQ-024 requires verification there, and some in-app webviews apply their own colour management or a forced dark treatment. No source consulted addresses this | Measure it in the REQ-024 pass rather than assuming. Treat any shift as a finding against the tokens, not against the mock |
