# K13 Design systems and shells

| Field | Value |
|---|---|
| Cluster | K13 of `18-knowledge-base-plan.md` section 1 |
| Feeds | `1_spec/04-design-system-spec.md` (all sections), M5 direction, DEL-004; `mockups/shared/tokens.css`; the Design Director brief (`17` section 5); rubric row **Continuity (L2)** (`17` section 6); tasks T-063, T-064, T-066, T-067, T-068, T-069, T-071 |
| Method | **48 distinct web sources fetched with content and cited** by this agent on 2026-09-11, using WebFetch only. `WebSearch` was unavailable (session budget exhausted at the first call), so every source below was reached by a known canonical URL or a raw repository path, not by search. No browser tool was used. `gt.school` and `anywhere.gt.school` were **never loaded**; GT-side evidence comes from the checked-in mirror, `tokens.css`, `1_spec/04` and clusters K2, K3, K4, K7 |
| Sources not fetched | Ten, listed in section 10. Nothing below is built on them |
| Caution | Every number below is a fact about **another organisation's** design system (a duration in Carbon, a step count in Radix, a component count in USWDS). None is a claim about GT School, so none needs a claims-register row. REQ-022 and DEL-018 still govern anything that reaches a GT surface |
| Relation to other clusters | K13 **consumes** K2 section 5 (the fluid type scale), K3 section 5 (five proposed colour roles, the accent demotion, the rename), K4 section 8 (the ten-move motion vocabulary and the easing proposal) and K7 section 5d (the doors/switcher split), and reconciles them into one token architecture. Where K13 and `1_spec/04` disagree, section 5 says so explicitly and the change goes through the register, never straight into the spec |
| Status | Draft 2026-09-11, Fable. Astra E4 pending |

---

## 1. Question

Six questions, in order.

1. **Tokens.** How do mature systems tier tokens (primitive, semantic, component), what are the naming conventions, and what does the tiering actually buy?
2. **Components.** How is a component documented so that states, variants and accessibility are not left to the builder's memory?
3. **Release.** How are systems versioned, deprecated and distributed to consumers who are not the system team?
4. **Shells.** How do multi-site organisations — governments, health services, universities — share one header and footer across sites they do not control, and what is the site/campus switcher pattern?
5. **No dependencies.** Can a system with no build step, no package manager and no framework still be a system, using CSS custom properties, partials, a copy step and a styleguide page?
6. **Motion.** How are motion tokens named and scaled, and how is reduced motion handled without deleting the information the motion carried?

---

## 2. Findings — token architecture

| # | Finding | Source |
|---|---|---|
| K13-F1 | Carbon tiers colour tokens explicitly. **Core tokens** are "Global colors that are used across components… named and grouped by the common UI element that they are applied to" (Background, Layer, Field, Border, Text, Link, Icon, Support). **Component tokens** "represent the properties associated with a particular component… are not global tokens like the core tokens and should never be used for anything other than their own component" | IBM Carbon Design System, `elements/color/tokens.mdx`, https://raw.githubusercontent.com/carbon-design-system/carbon-website/main/src/pages/elements/color/tokens.mdx (fetched 2026-09-11) |
| K13-F2 | Carbon's stated reason for tokens at all: "Tokens are a method of applying color in a consistent, reusable, and scalable way. They are used in place of hard coded values, like hex codes." The tier that names the *role* is what lets a theme swap values without touching components | Carbon, as K13-F1 |
| K13-F3 | The W3C Design Tokens Community Group defines a token as "information associated with a human readable name, at minimum a name/value pair", and defines **aliases**: a token's `$value` may reference another token with `{colors.blue}`, resolving to the referenced token's whole value. "References _MUST NOT_ be circular." This is the formal machinery behind a primitive/semantic split | Design Tokens Community Group, *Design Tokens Format Module* 2025.10, Draft Community Group Report, published 08 September 2026, https://www.designtokens.org/TR/drafts/format/ (fetched 2026-09-11) |
| K13-F4 | The same spec defines the types a motion and layout system needs by name: **color, dimension** (`px` or `rem`), **duration** (`ms` or `s`), **cubicBezier** (a four-number array), **fontFamily**, and the composite **transition** (duration + delay + timing function). It also warns that group names carry no meaning: tools "_SHOULD NOT_ use them to infer the type or purpose of design tokens" — semantics must be in the token, not the folder | DTCG, as K13-F3 |
| K13-F5 | Material 3 publishes a flat, numerically-stepped motion token set with no ambiguity: 16 durations (`short1` 50 ms through `extra-long4` 1000 ms) and 11 easings, including `easing-standard: cubic-bezier(0.2, 0, 0, 1)`, `easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1)` and `easing-legacy: cubic-bezier(0.4, 0, 0.2, 1)` | Material Components / material-web, `tokens/versions/v0_192/_md-sys-motion.scss`, https://raw.githubusercontent.com/material-components/material-web/main/tokens/versions/v0_192/_md-sys-motion.scss (fetched 2026-09-11) |
| K13-F6 | Radix Colors proves that a **numeric primitive scale can carry semantics by position**: step 1 "app backgrounds", 3 "normal states", 4 "hover states", 5 "pressed or selected states", 6 "subtle borders on components which are not interactive", 7 "subtle borders on interactive components", 8 "stronger borders on interactive components and focus rings", 9 highest chroma solid, 10 solid hover, 11 "low-contrast text", 12 "high-contrast text" | Radix (WorkOS), *Understanding the scale*, https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale (fetched 2026-09-11) |
| K13-F7 | Radix publishes 30 named scales (Gray, Mauve, Slate … Sky, plus overlays), each in standard, alpha, dark and dark-alpha variants — evidence that a primitive tier is *large and boring* by design, and that the interesting decisions live one tier up | Radix, *Palette composition — scales*, https://www.radix-ui.com/colors/docs/palette-composition/scales (fetched 2026-09-11) |
| K13-F8 | Primer runs a two-level split: **base tokens** (colour, spacing, typography, motion) and **functional tokens** organised by category. Names "have to be in camelCase or kebab-case and may only include letters, numbers and `-`". Primer also ships an `@`-hack allowing "a default value and sub-values" — `bgColor.accent` and `bgColor.accent.muted` — so a role can have a default without inventing a `-default` suffix | GitHub Primer, `primer/primitives` README, https://raw.githubusercontent.com/primer/primitives/main/README.md (fetched 2026-09-11) |
| K13-F9 | Polaris prefixes every CSS custom property to make provenance visible at the call site: "CSS variables are prefixed with `--p` to signal that these variables are Polaris variables." Tokens ship in three formats from one package — JavaScript objects with metadata, a `styles.css` of custom properties, and per-group JSON | Shopify, `@shopify/polaris-tokens` README, https://raw.githubusercontent.com/Shopify/polaris/main/polaris-tokens/README.md (fetched 2026-09-11) |
| K13-F10 | Atlassian frames tokens as the decision record, not the value store: "Tokens are a single source of truth to name and store Atlassian design decisions." Consumption is either a CSS custom property or a `token()` function whose Babel plugin injects the default-theme value as a fallback | Atlassian, `@atlaskit/tokens` README via unpkg, https://unpkg.com/@atlaskit/tokens/README.md (fetched 2026-09-11) |
| K13-F11 | USWDS defines tokens as "the discrete palettes of values from which we base all our visual design" and is explicit that the point is *subtraction*: "The Design System limits itself to seven measure tokens." Token values are "a quoted string or, with only the exceptions of `1px` and `2px`, a unitless number" | U.S. Web Design System, *Design tokens*, https://designsystem.digital.gov/design-tokens/ (fetched 2026-09-11) |

## 3. Findings — component documentation, versioning and distribution

| # | Finding | Source |
|---|---|---|
| K13-F12 | A Carbon component usage page has a fixed spine, in this order: **Live demo, Overview, Formatting, Content, Universal behaviors, [one section per variant], Modifiers, Related, References, Feedback.** The variant rationale is stated as a rule, not a preference: "Each button variant has a particular function and its design signals that function to the user. It is, therefore, very important that the different variants are implemented consistently" | Carbon, `components/button/usage.mdx`, https://raw.githubusercontent.com/carbon-design-system/carbon-website/main/src/pages/components/button/usage.mdx (fetched 2026-09-11) |
| K13-F13 | Carbon puts accessibility on its **own tab** with three headings — *What Carbon provides*, *Design recommendations*, *Development considerations* — and documents keyboard interaction as a sentence a builder can test: "Buttons can be reached by `Tab` and selected with `Space` or `Enter`"; "Icon-only buttons, which do not persistently display a text label, expose their label on hover and focus" | Carbon, `components/button/accessibility.mdx`, https://raw.githubusercontent.com/carbon-design-system/carbon-website/main/src/pages/components/button/accessibility.mdx (fetched 2026-09-11) |
| K13-F14 | USWDS documents a component as *guidance + accessibility + settings + variants + states*, and enumerates states explicitly: **default, hover, active, focus, disabled, aria-disabled**. Its accessibility lines are testable assertions — "Buttons should display a visible focus state when users tab to them"; "Use standard markup. Avoid using `<div>` or `<img>` tags to create buttons" | USWDS, *Button*, https://designsystem.digital.gov/components/button/ (fetched 2026-09-11) |
| K13-F15 | USWDS pairs every component with a **"when to use / when to consider something else"** section that names the alternative: buttons are for actions; for "Linking between a site's pages. Use regular links instead" | USWDS, *Button*, as K13-F14 |
| K13-F16 | Polaris documents components as **best practices + content guidelines + variants**, with paired do/don't strings rather than prose: **Do** "Save", "Edit", "Add tags"; **Don't** "Save product", "Edit collection", "Add tag(s)". Rules are phrased as obligations on the component: buttons should "Be clearly and accurately labeled", "Lead with a strong, actionable verb", "Be positioned in consistent locations in the interface" | Shopify Polaris, `content/components/actions/button.mdx`, https://raw.githubusercontent.com/Shopify/polaris-react-archive/main/polaris.shopify.com/content/components/actions/button.mdx (fetched 2026-09-11) |
| K13-F17 | GOV.UK's component page shape is four sections — **When to use this component / When not to use this component / How it works / Research on this component** — and it is willing to say "no": "You can no longer use the GOV.UK header to show service name or navigation links. Use the Service navigation component instead" | GOV.UK Design System, *Header*, https://design-system.service.gov.uk/components/header/ (fetched 2026-09-11) |
| K13-F18 | Carbon versions per package with semver and ships on a cadence: "Each Carbon Design System release includes package releases that are independently versioned following the industry-standard semantic versioning specification"; "The Carbon team also ships package minor releases every other week". Deprecation is dated, not vague: "As of September 30, 2024, all v10 assets have been deprecated" | Carbon, `all-about-carbon/releases.mdx`, https://raw.githubusercontent.com/carbon-design-system/carbon-website/main/src/pages/all-about-carbon/releases.mdx (fetched 2026-09-11) |
| K13-F19 | Semver's precondition is the part most internal systems skip: "Software using Semantic Versioning MUST declare a public API"; the declaration "SHOULD be precise and comprehensive". MAJOR is for "incompatible API changes", MINOR for backward-compatible additions, PATCH for backward-compatible fixes | Tom Preston-Werner, *Semantic Versioning 2.0.0*, https://semver.org/ (fetched 2026-09-11) |
| K13-F20 | USWDS distributes as an npm package **and** as a downloadable bundle for teams who cannot use npm, and states the trade: the download "sacrifices upgrade convenience". Its end-of-life statements are blunt — "USWDS version 1.x is no longer maintained"; "USWDS version 2.x is no longer maintained" | USWDS, *For developers*, https://designsystem.digital.gov/documentation/developers/ (fetched 2026-09-11) |
| K13-F21 | USWDS's customisation model is the key one for GT: a consumer configures a **settings layer** and never edits source. Settings "are Sass variables that begin with the `$theme-` prefix and are typically defined with USWDS design tokens", and the configuration "accepts only current USWDS settings variables" — anything else "will result in an error". Customisation is bounded by the system, so upgrades survive | USWDS, *Settings*, https://designsystem.digital.gov/documentation/settings/ (fetched 2026-09-11) |
| K13-F22 | GOV.UK offers the same two-track distribution: npm (which lets a team "selectively include the CSS for individual components" and override colours) or "download and include compiled stylesheets, JavaScript and the asset files", which forfeits selective imports and templating | GOV.UK Design System, *Production*, https://design-system.service.gov.uk/get-started/production/ (fetched 2026-09-11) |
| K13-F23 | Brad Frost's governance process makes the **one-off versus pattern** decision an explicit gate (step 3 of 10): a "snowflake" is "a one-off component that only really pertains to one specific product", versus a component that is "part of library that serves all products". Snowflakes are logged against the product backlog so they can be refactored later. "Establishing a design system governance process is perhaps one of the most important things you can do to prevent entropy" | Brad Frost, *A design system governance process*, 4 November 2019, https://bradfrost.com/blog/post/a-design-system-governance-process/ (fetched 2026-09-11) |
| K13-F24 | USWDS publishes **47 components** (Accordion … Validation) and defines them modestly: "USWDS components are simple and consistent solutions to common user-interface needs." Forty-seven is the ceiling for a system serving "dozens of agencies and nearly 200 sites" — evidence that a component set for two sites should be an order of magnitude smaller | USWDS, *Components overview*, https://designsystem.digital.gov/components/overview/ and *About*, https://designsystem.digital.gov/about/ (both fetched 2026-09-11) |
| K13-F25 | Atomic design's contribution is the vocabulary for *where* a component sits, and the argument for a living page over static comps: a system lets you "create systems that promote consistency and scalability while simultaneously showing things in their final context" | Brad Frost, *Atomic Web Design*, 10 June 2013, https://bradfrost.com/blog/post/atomic-web-design/ (fetched 2026-09-11) |
| K13-F26 | The style-guide-as-artifact predates design systems and its failure mode was identified early: guides are "maintained by front-end developers… documenting every component and its code on the site in one place", and the risk is post-launch drift, when "new designers and developers come in and make adjustments". The prescription is to start from base elements — "headings, links, tables, blockquotes, ordered lists, unordered lists and forms" — and show interaction states | Anna Debenham, *Front-end Style Guides*, 24 ways, 7 December 2011, https://24ways.org/2011/front-end-style-guides/ (fetched 2026-09-11) |

## 4. Findings — multi-site shells and the switcher

| # | Finding | Source |
|---|---|---|
| K13-F27 | Canada.ca runs the strongest shared-shell mandate available in public documentation: "The global header is mandatory on all Government of Canada web pages", with an ordered element list marked mandatory or optional (signature, language toggle, search, theme and topic menu, breadcrumb, sign-in, divider, white background). The governing rule is a prohibition: "Don't customize the mandatory elements of the global header, beyond what is recommended in the guidance for each. Consistency in this space is essential for building brand awareness and user trust" | Government of Canada, *Global header*, https://design.canada.ca/common-design-patterns/global-header.html (fetched 2026-09-11) |
| K13-F28 | The Canada.ca footer is **banded**, and only the innermost band is mandatory everywhere: contextual (optional), main (mandatory on standard pages), sub-footer (mandatory on every page type). The wordmark placement is fixed: "the Canada wordmark should always appear in the lower right corner" | Government of Canada, *Site footer*, https://design.canada.ca/common-design-patterns/site-footer.html (fetched 2026-09-11) |
| K13-F29 | GOV.UK **split** the shell into two components precisely because one header could not serve both the umbrella and the service: the GOV.UK header carries "only the GOV.UK logo and any GOV.UK-wide links and tools", and the Service navigation component carries the service name and its links. "Together, the GOV.UK header component and Service navigation component ensure users get a consistent experience on GOV.UK" | GOV.UK Design System, *Header* (K13-F17) and *Service navigation*, https://design-system.service.gov.uk/components/service-navigation/ (fetched 2026-09-11) |
| K13-F30 | GOV.UK states the ordering law for a two-level shell: "the ordering of header and navigation elements should start with the most general (GOV.UK-wide) elements at the top, with the more specific (service-level) elements further down." It also caps the link count: "Navigation is not a site map and does not need to list every part of your service" | GOV.UK Design System, *Help users to navigate a service*, https://design-system.service.gov.uk/patterns/navigate-a-service/ (fetched 2026-09-11) |
| K13-F31 | NHS solves the "one brand, many independent organisations" case with a **header variant**, not a different header: the standard header is "if your service is a national NHS service in England", and "Do not use the NHS logo alone if your service is a local NHS service" — local services use the organisational header, which sets organisational branding beside the NHS logo | NHS digital service manual, *Header*, https://service-manual.nhs.uk/design-system/components/header (fetched 2026-09-11) |
| K13-F32 | The NHS footer's job is stated as identity first, navigation second: "Use the footer to show users they are on an NHS service and to help them find links they expect at the bottom of our pages", with a mandatory meta band (accessibility, contact, cookies, privacy, terms) and an optional navigation band. "Keep links to a minimum, especially in a transactional journey" | NHS digital service manual, *Footer*, https://service-manual.nhs.uk/design-system/components/footer (fetched 2026-09-11) |
| K13-F33 | Indiana University's Rivet header carries the sub-unit as a **subtitle inside the lockup**, not as a second brand: "Site subtitle of the website or application. Typically the unit or campus to which the site belongs", rendered as `<span class="rvt-lockup__subtitle">`, with the instruction to "Keep as short as possible" and to "Keep the header consistent between pages" | Indiana University, *Rivet — Header*, https://rivet.iu.edu/components/header/ (fetched 2026-09-11) |
| K13-F34 | USWDS makes the parent organisation a **required footer component**, separate from the footer itself: the identifier "communicates a site's parent agency and displays agency links required by federal laws and policies", and the rationale is cross-site consistency — "This assures that site visitors find the required links in a consistent location from site to site" | USWDS, *Identifier*, https://designsystem.digital.gov/components/identifier/ (fetched 2026-09-11) |
| K13-F35 | The federal banner shows what a shared strip buys and what breaks it: "The banner is most effective as an identifier and a learning tool when its message is consistent across government sites"; and "Use the banner at the top of every page of a site. It can be confusing or misleading if it appears on some pages and not others" | USWDS, *Banner*, https://designsystem.digital.gov/components/banner/ (fetched 2026-09-11) |
| K13-F36 | USWDS's header guidance contains three rules the GT shell must absorb: "Add a skip navigation link before the header"; "Avoid using hover to expand dropdown lists. Hover is difficult for some users and won't work on touch screens"; "Don't use an H1 for your logo… use an `em`, not an h1, unless it's the homepage". Also: "If your page has more than one `nav` element, use the `aria-label` attribute" | USWDS, *Header*, https://designsystem.digital.gov/components/header/ (fetched 2026-09-11) |
| K13-F37 | **Umbrella-to-school routing in the wild, case 1.** Harvard's global header routes to its separate school websites from inside a primary nav item, not from a top-level switcher: "Academics" contains a "Harvard Schools" subsection described as "Visit each School for information on admissions and financial aid", listing 15 schools as individual links to separate institutional sites. The nav is six labels: "Academics", "Campus", "In Focus", "Visit", "About", "News" | Harvard University, https://www.harvard.edu/ (text fetch, 2026-09-11) |
| K13-F38 | **Case 2.** Stanford does the same: seven schools reachable as a menu of links to separate sites (Business, Education, Engineering, Humanities & Sciences, Law, Medicine, Sustainability), under a seven-label nav ("About Stanford", "Academics", "Research", "Health & Medicine", "Athletics", "Admissions & Aid", "Life on the Farm"). Neither university gives the schools a persistent switcher in the chrome — the switch is a nav destination | Stanford University, https://www.stanford.edu/ (text fetch, 2026-09-11) |
| K13-F39 | WCAG makes shell consistency a **Level AA obligation, not a preference**: SC 3.2.3 Consistent Navigation — "Navigational mechanisms that are repeated on multiple web pages within a set of web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user." A "set of web pages" is "a collection of web pages that share a common purpose and that are created by the same author, group or organization" | W3C, *Understanding SC 3.2.3*, WCAG 2.2, https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html (fetched 2026-09-11) |
| K13-F40 | And SC 3.2.4 Consistent Identification (AA): "Components that have the same functionality within a set of web pages are identified consistently" — which binds the *accessible name*, not just the visual label | W3C, *Understanding SC 3.2.4*, https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html (fetched 2026-09-11) |
| K13-F41 | SC 2.4.11 Focus Not Obscured (Minimum), AA: "When a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content." The named culprits are "sticky footers, sticky headers, and non-modal dialogs"; scroll padding is the cited fix | W3C, *Understanding SC 2.4.11*, https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html (fetched 2026-09-11) |
| K13-F42 | The ARIA listbox pattern is for **selecting a value**, not navigating: "A listbox widget presents a list of options and allows a user to select one or more of them", requiring `role="listbox"`, `role="option"`, `aria-selected`, and arrow-key focus management. Nothing in the pattern navigates anywhere | W3C WAI, *ARIA Authoring Practices — Listbox pattern*, https://www.w3.org/WAI/ARIA/apg/patterns/listbox/ (fetched 2026-09-11) |
| K13-F43 | NN/g's mega-menu research is mostly about hover menus GT will not build, but two lines transfer: use "concise, yet descriptive labels" with information-carrying words first, and "Show each choice only once" | Jakob Nielsen and Angie Li, *Mega Menus Work Well for Site Navigation*, Nielsen Norman Group, 26 March 2017, https://www.nngroup.com/articles/mega-menus-work-well/ (fetched 2026-09-11) |

## 5. Findings — a system without dependencies, and motion

| # | Finding | Source |
|---|---|---|
| K13-F44 | CSS custom properties give a dependency-free system the two things a build step is usually bought for: **inheritance** ("Inherited: yes") and **cascade participation** — "Custom properties are scoped to the element(s) they are declared on, and participate in the cascade". A property redefined on a container overrides it for that subtree only, which is how a per-school theme works with no compiler | MDN, *Custom properties (`--*`)*, last modified 2 February 2026, https://developer.mozilla.org/en-US/docs/Web/CSS/--* (fetched 2026-09-11) |
| K13-F45 | Cascade layers remove the last real argument for a preprocessor in a small system: "The first declared layer gets the lowest priority and the last declared layer gets the highest priority", which "enables using simpler CSS selectors because you do not have to ensure that a selector will have high enough specificity to override competing rules" | MDN, *`@layer`*, last modified 20 April 2026, https://developer.mozilla.org/en-US/docs/Web/CSS/@layer (fetched 2026-09-11) |
| K13-F46 | `:focus-visible` "applies while an element matches the `:focus` pseudo-class and the UA determines via heuristics that the focus should be made evident", and lets authors "change the appearance of the focus indicator without changing when the focus indicator appears". A `@supports not selector(:focus-visible)` fallback is the documented pattern | MDN, *`:focus-visible`*, last modified 10 September 2026, https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible (fetched 2026-09-11) |
| K13-F47 | Carbon's motion scale is six durations — `duration-fast-01` 70 ms, `fast-02` 110, `moderate-01` 150, `moderate-02` 240, `slow-01` 400, `slow-02` 700 — with nine easings built from three types (standard, entrance, exit) × two styles (productive, expressive); `motion(standard, productive)` is `cubic-bezier(0.2, 0, 0.38, 0.9)`. The sizing law: "the larger the change in distance (traveled) or size (scaling) of the element, the longer the animation takes." Accessibility line: "Always provide alternatives for interface state transitions. Consider simplified or reduced motion designs for mobile and tablet" | Carbon, `elements/motion/overview.mdx`, https://raw.githubusercontent.com/carbon-design-system/carbon-website/main/src/pages/elements/motion/overview.mdx (fetched 2026-09-11) |
| K13-F48 | `prefers-reduced-motion` has exactly two values — `no-preference` ("evaluates as false") and `reduce` — and MDN's worked example **replaces** an animation rather than deleting it: a pulse becomes a dissolve under `reduce` | MDN, *`prefers-reduced-motion`*, last modified 10 June 2026, https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion (fetched 2026-09-11) |
| K13-F49 | web.dev argues the opposite default — gate on `no-preference` rather than override on `reduce` — and is explicit that removing all motion is the wrong goal, because animation provides feedback and perceived speed | Thomas Steiner, *prefers-reduced-motion: Sometimes less movement is more*, web.dev, last updated 11 March 2019, https://web.dev/articles/prefers-reduced-motion (fetched 2026-09-11) |
| K13-F50 | WCAG SC 2.3.3 (AAA): "Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed." Essential means removing it "would fundamentally change the information or functionality of the content". User-controlled scrolling is explicitly allowed | W3C, *Understanding SC 2.3.3*, https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html (fetched 2026-09-11) |

---

## 6. Principles the studio adopts

| # | Principle | Traces to |
|---|---|---|
| **K13-P1** | **Three tiers, and only the middle one is spendable.** Primitives hold values, semantic tokens hold decisions, component tokens hold exceptions. A mock may reference the semantic tier and nothing else; a primitive in a component stylesheet is a defect, not a shortcut | K13-F1, K13-F2, K13-F3, K13-F8 |
| **K13-P2** | **A token names a role, not a colour.** `--color-accent-text` is a role; `--gt-orange-700` is a value. When two roles share a value, keep two names — that is the point of the alias, and it is what lets one of them change later | K13-F3, K13-F6, K13-F10 |
| **K13-P3** | **Subtract before you add.** Seven measure tokens, three durations, one easing family. The system's value is the choices it removes | K13-F11, K13-F24 |
| **K13-P4** | **A component is not documented until its states are enumerated.** Default, hover, focus-visible, active, current, and the environmental variants (reduced motion, forced colors, no JavaScript, longest string). Prose about a component is not documentation | K13-F12, K13-F13, K13-F14, K13-F26 |
| **K13-P5** | **Say when not to use it.** Every component page names the alternative it loses to. A system that only says yes grows a component per request | K13-F15, K13-F17, K13-F23 |
| **K13-P6** | **Split the shell by altitude, not by page.** The umbrella chrome carries the parent identity and nothing else; the school chrome carries the school name and its navigation, below it. General above, specific below | K13-F29, K13-F30, K13-F31, K13-F33 |
| **K13-P7** | **The shell is a contract, not a suggestion.** Consumers may vary declared variables and nothing else. "Don't customize the mandatory elements" is the rule that makes two sites read as one school | K13-F27, K13-F21, K13-F35 |
| **K13-P8** | **Shell consistency is an AA obligation.** Same relative order on every page of the set, same accessible name for the same control. This converts "does it feel consistent" into a test | K13-F39, K13-F40 |
| **K13-P9** | **Switching site is navigation.** A control that takes the visitor to another website is a list of links with the current one marked, never a listbox and never a `<select>` | K13-F42, K13-F37, K13-F38 |
| **K13-P10** | **The styleguide page is the system's only honest artefact.** If a state is not on that page, it does not exist; if it drifts from the sites, the checker says so before a human does | K13-F25, K13-F26, K13-F23 |
| **K13-P11** | **Version the system and declare its public API.** The public API is the semantic token names and the partial markers. Renaming one is a major version; the sync step must be able to say "behind", not only "different" | K13-F18, K13-F19, K13-F20 |
| **K13-P12** | **Reduced motion replaces, it does not delete.** Durations collapse to zero at the token; movement is gated behind `no-preference` at the component, so the state change survives and the hidden state never exists | K13-F48, K13-F49, K13-F50, K13-F47 |

---

## 7. Anti-patterns

| # | Anti-pattern | Why, and where it is warned against |
|---|---|---|
| K13-A1 | **A flat token file where `--color-accent` is simultaneously the brand colour, a fill, a text colour and a border.** GT's current `tokens.css` is exactly this; K3 measured the consequence (four of five mocks used the accent as small text at 2.2–2.4:1). Carbon's core/component split exists to stop it | K13-F1, K3 §5f |
| K13-A2 | **A token whose name promises more than it delivers.** `--color-accent-contrast` reads as "safe on any accent surface"; it is safe on navy (14.58) and fails on the accent fill (2.50). Naming by role would have caught it at authoring time | K13-F2, K3 PR-3 |
| K13-A3 | **A token that means "we did not decide."** `--ease-emphasized: ease; /* NOT DETERMINABLE */` is a placeholder wearing a token's clothes; it will be used, and it will be used to mean something | K13-F5, K13-F10, `tokens.css` |
| K13-A4 | **Group names carrying the semantics.** Relying on a folder or a comment block to say what a token is for; DTCG warns tools must not infer purpose from groups | K13-F4 |
| K13-A5 | **Per-page copies of the chrome with no source.** The mirror duplicates nav, footer and the application modal verbatim in nine pages, so a change must be applied nine times or the site drifts. This is the failure the copy step exists to prevent | `CLAUDE.md` (repo), K13-F23 |
| K13-A6 | **Two headers that are two designs.** If the landing header and the school header are authored separately, they will diverge within one release. GOV.UK's answer is two *components in one system*, sharing the same tokens and the same source order | K13-F29 |
| K13-A7 | **A switcher built as a `<select>` or a listbox.** It steals arrow keys, hides the destinations from a link-list reader, and needs JavaScript to do what an anchor does for free | K13-F42, K13-F36 |
| K13-A8 | **Hover-expanded chrome.** "Hover is difficult for some users and won't work on touch screens" — and two thirds of GT sessions are mobile | K13-F36, fact 5 |
| K13-A9 | **A sticky header on a 596–675 px in-app viewport.** It costs first-screen height the routing page cannot spare and puts SC 2.4.11 at risk on every focusable control below it | K13-F41, `17` §4 |
| K13-A10 | **A styleguide that lists tokens and components but not states, measurements or drift.** That is a swatch page; it will pass while the sites rot | K13-F26, K13-F14 |
| K13-A11 | **Editing the copy, not the source.** USWDS forbids it structurally by making settings the only surface; GT has no compiler to enforce it, so the checker must | K13-F21, K13-F20 |
| K13-A12 | **A blanket `transition-duration: 0.01ms !important` reduced-motion nuke.** It kills focus and hover feedback along with the decoration, and fails K4's clause (b). MDN and web.dev both model replacement, not deletion | K13-F48, K13-F49, K4 §8.4 |
| K13-A13 | **Borrowing a whole vocabulary because it is published.** Material ships 16 durations and 11 easings; Carbon ships 6 and 9. GT needs 4 and 3. Adopting a large scale to look rigorous is the same error as inventing one | K13-F5, K13-F47, K13-P3 |

---

## 8. How it applies to GT

### 8.1 The token architecture: three tiers, and how K2 and K3 reconcile

Today `tokens.css` is one flat `:root` block of 46 declarations with no tiers, no version and no aliasing. K2 wants to change eight type *values* to `clamp()` and add two names; K3 wants to add five *roles*, demote one, and rename another. Those two requests collide in a flat file and do not collide in a tiered one — which is the case for tiering, made concretely rather than by analogy.

| Tier | Prefix | What lives here | Who may reference it | Precedent |
|---|---|---|---|---|
| **0 — primitive** | `--gt-` | Raw values only: hues with numeric steps, the fluid type ramp's steps, the space ladder, radii, shadows. No roles, no opinions | Only tier 1. **A primitive in a component stylesheet is a QA failure** | Carbon core vs component (K13-F1); Radix numeric scale (K13-F6); Primer base vs functional (K13-F8) |
| **1 — semantic** | `--color-`, `--text-`, `--space-`, `--leading-`, `--radius-`, `--shadow-`, `--container-`, `--duration-`, `--ease-`, `--z-` | The decisions. Every existing name in `tokens.css` stays at this tier, unchanged | Every mock, every partial, every component stylesheet. **This is the system's public API** | Carbon core tokens (K13-F1); Atlassian "design decisions" (K13-F10); semver public API (K13-F19) |
| **2 — component** | `--<component>-<property>[-<state>]` | Only values no semantic role names — e.g. `--door-line-rise`, `--switcher-indicator-x`. Scoped to the component's own selector, never to `:root` | Only that component. "Should never be used for anything other than their own component" | Carbon component tokens (K13-F1) |

**The naming anatomy**, fixed:

```
tier 0   --gt-<family>-<step>            --gt-navy-900, --gt-orange-500, --gt-orange-700, --gt-step-3
tier 1   --<category>-<role>[-on-<ground>][-<variant>]
                                         --color-text, --color-text-muted, --color-on-navy,
                                         --color-accent-text, --color-focus-on-dark, --text-2xl
tier 2   --<component>-<property>[-<state>]
                                         --door-line-rise, --cta-label-swap-duration
```

Two rules that make the anatomy enforceable rather than decorative: the ground goes **after** the role (`--color-focus-on-dark`, not `--color-dark-focus`), so every token for one role sorts together; and a state, where one exists, is always the **last** segment.

**The primitive tier, derived entirely from values K3 already measured** (nothing new is invented here):

| Primitive | Value | Semantic tokens that alias it |
|---|---|---|
| `--gt-cream-50` | `#fcf4ef` | `--color-bg` |
| `--gt-sand-100` | `#f8e8de` | `--color-surface`, `--color-georgetown-tint` (K3 measured these as the same value) |
| `--gt-mist-100` | `#e4eef2` | `--color-anywhere-tint` |
| `--gt-navy-900` | `#002a3a` | `--color-navy`, `--color-surface-dark` |
| `--gt-ink-950` | `#001117` | `--color-text`, `--color-on-accent` (K3 PR-3) |
| `--gt-orange-500` | `#e48b53` | `--color-accent` (non-text roles only) |
| `--gt-orange-700` | `#a5501a` | `--color-accent-text` (K3 PR-1) |
| `--gt-blue-700` | `#004f71` | `--color-focus` |
| `--gt-blue-300` | `#a3bfcb` | `--color-text-muted-on-dark` (K3 PR-4) |
| `--gt-grey-600` | `#5b5b5b` | `--color-text-muted` |
| `--gt-grey-500` | `#857f7b` | `--color-border-strong` (K3 PR-5) |
| `--gt-grey-300` | `#cac6c4` | `--color-border` |
| `--gt-white` | `#fbfbfb` | `--color-on-navy`, `--color-focus-on-dark` (K3 PR-2) |

That table settles three things `1_spec/04` currently cannot express. **One:** `--color-surface` and `--color-georgetown-tint` are two roles on one primitive; today they are two hard-coded duplicates, and changing the Georgetown cue would silently change every card. **Two:** `--color-on-navy` and `--color-focus-on-dark` are two roles on `--gt-white` — K3's PR-2 stops being "reuse the accent-contrast value" and becomes a named role. **Three:** `--color-surface-alt`, unresolved as conflict C9 since R1, resolves by naming: it is the dark surface, `--color-surface-dark`, budgeted by K3 CS6 at exactly two sections.

**The type tier.** K2's scale is fluid, so its "values" are `clamp()` expressions, not numbers. Put the eight ramp expressions at tier 0 as `--gt-step-0` … `--gt-step-7` plus `--gt-step-btn`, exactly as K2 §5a computed them, and alias `--text-xs` … `--text-3xl`, `--text-btn` to them at tier 1. Names do not change, so no mock breaks; values change, which is a value change under §8.5's versioning rule. K2's `--leading-ui: 1.25` is a new tier-1 token (MINOR); `--leading-body` moving 1.25 → 1.5 is a value change (PATCH), and A3 of K2 is honoured because the two are separate names rather than one overloaded one.

**The colour tier, after K3.** Five additions (PR-1 to PR-5) are MINOR. The demotion of `--color-accent` to non-text roles is not a code change at all — it is a rule in the styleguide plus a QA assertion, which is the right place for it. The rename `--color-accent-contrast` → `--color-on-navy` is the only **MAJOR** change in the set, and it gets the standard treatment: the old name is kept for one minor version as `--color-accent-contrast: var(--color-on-navy);` with a dated deprecation comment, and the checker fails on any reference after the removal version (K13-F18, K13-F19).

**One departure from the published systems, deliberately.** Polaris prefixes every custom property `--p-` so its provenance is visible at the call site (K13-F9). GT does not, at tier 1, because the tier-1 names are already in five mocks and a prefix churn buys nothing when there is exactly one system on the page. GT *does* prefix tier 0 with `--gt-` — that is where the prefix earns its keep, because a `--gt-` token appearing in a component stylesheet is then a one-line grep.

### 8.2 The component inventory the twenty mocks share, and the states each must document

Twenty directions must differ in layout, hierarchy, density, imagery and copy (DD-19), not in vocabulary. That only holds if the vocabulary is fixed first. The inventory below is `1_spec/04` §3 plus the shell parts that section is missing, mapped to `copy.md` sections 0–8.

**The state taxonomy every interactive component answers.** Prose is not an answer; each cell is "the rule" or "not available, because —".

| # | State | Applies to |
|---|---|---|
| S1 | Rest / default | all |
| S2 | Hover (`:hover`, pointer only) | all interactive |
| S3 | Focus-visible (`:focus-visible`, per-surface ring from K3 §5d) | all interactive |
| S4 | Active / pressed | all interactive |
| S5 | Current / selected (`aria-current`) | switcher, school nav, sibling link |
| S6 | Visited | links in prose and the footer only |
| S7 | Disabled | **never used on GT surfaces** — recorded as a refusal, not omitted |
| S8 | Open / closed | accordion, mobile menu, disclosure rows |
| S9 | Longest-string (the real worst case from `copy.md`) | every component carrying copy |
| S10 | N-variant (2, 3, 4, 5 schools) | door list, switcher, comparison table |
| S11 | Reduced motion | every component with a K4 move |
| S12 | Forced colors (`forced-colors: active`) | all |
| S13 | No JavaScript | accordion, switcher, helper, any V6/V8 reveal |
| S14 | 200% text zoom / 390 px | all |

| # | Component | `copy.md` | Required states | Accessibility contract | Motion (K4) |
|---|---|---|---|---|---|
| C1 | Umbrella lockup | §0 | S1, S3, S12 | Image alt "GT School"; not an `h1` unless it is the homepage (K13-F36) | none |
| C2 | **Skip link** — *missing from `1_spec/04` §3* | — | S1, S3 | First focusable element, before the header (K13-F36) | none |
| C3 | Header, landing variant | §0 | S1, S3, S9, S12, S14 | `header` + `nav aria-label`; no sticky at first screen (K13-F41) | none |
| C4 | Header, school-site variant | §0 | S1, S3, S5, S8, S9, S12, S13, S14 | Two `nav`s, each `aria-label`led; keyboard-reachable menu; focus trap in the mobile list | menu open, V-none on scroll |
| C5 | Provenance line | §1 | S1, S9, S14 | Plain sentence in reading order between `h1` and the doors; never a badge | none |
| C6 | Door card | §1 | S1, S2, S3, S4, S9, S11, S12 | One link, one accessible name, whole card clickable; cue icon has alt text | V1, V2 |
| C7 | Door list | §1 | S10, S14 | `ul`/`li`; adding a school adds a row and nothing else | inherits C6 |
| C8 | **School switcher** (school shell only) | — | S1, S2, S3, S5, S8, S10, S13 | `nav aria-label="GT School campuses"` + list of **links**, `aria-current="true"` on the current school — **not a listbox** (K13-F42, §8.3) | V4 |
| C9 | CTA (primary, secondary, link) | §1, §6 | S1, S2, S3, S4, S9, S11, S12 | One accessible name; the `button-text-ab` hover duplicate is `aria-hidden`; verb-first, sentence case (K13-F16) | V1, optional label swap |
| C10 | Compare anchor | §2 | S1, S3, S11 | In-page link; smooth scroll only inside `no-preference` | V10 |
| C11 | Comparison table | §3 | S1, S8, S9, S10, S13, S14 | Real `table`, `scope`, `caption`; stacked to 1199 px per K2 §5b | V7 |
| C12 | Proof strip / figure with footnote | §4 | S1, S3, S9, S12 | Footnote is a link to the claims-register source; figure never animates (K4-A8) | V6 ×1 max |
| C13 | Application steps | §5 | S1, S9, S14 | Ordered list; step numbers are content, not decoration | none |
| C14 | Accordion / disclosure | §3, FAQ | S1, S3, S8, S11, S13 | `button` + `aria-expanded`; jQuery-free; `grid-template-rows` not `max-height` | V7 |
| C15 | TEFA module | §4 | S1, S9, plus shown/hidden by expiry | Region-independent copy readable by all | none |
| C16 | Schedule visual | §3 | S1, S11, S13 | Also rendered as a table for screen readers | V8 |
| C17 | Photo strip | §3 | S1, S2, S4, S14 | User-driven scroll only; `scroll-snap-type: x proximity`; no autoplay | V9 |
| C18 | Facts block | §8 | S1, S9 | Definition list; identical entity facts on all three surfaces (SE-08) | none |
| C19 | Current-families link | §7 | S1, S2, S3, S6 | Same label and accessible name on landing and both school sites (K13-F40) | V1 |
| C20 | **Sibling link** ("our other school") — *missing from `1_spec/04` §3* | §8 | S1, S2, S3, S6 | Present in both directions; word-for-word mirrored copy (§8.3) | V1 |
| C21 | Footer | §8 | S1, S3, S6, S9, S12, S14 | `footer` + `nav aria-label`; meta band mandatory everywhere (K13-F28, K13-F32) | none |
| C22 | Focus ring (cross-cutting) | — | S3, S12 | K3 §5d per-surface table; two-colour ring wherever navy is adjacent; `:focus-visible` with a `@supports not selector()` fallback (K13-F46) | never animated (V3) |
| C23 | Decision helper (Phase 2) | — | S1, S3, S11, S13 | Buttons with full labels; result announced; hidden without JS | V5 |

Twenty-three entries, of which **two (C2, C20) are not in `1_spec/04` §3 today** and one (C8) is specified there with the wrong semantics. Twenty-three against USWDS's forty-seven for two hundred sites (K13-F24) is the right order of magnitude for two.

### 8.3 The shell: what the landing has, what the school sites have, and the switcher

K7 §5d established that the doors and the switcher are two different components. K13 adds the altitude rule: **general above, specific below** (K13-F30), which is how GOV.UK, Canada.ca and NHS all resolve the same problem.

| Slot | Landing (`gt.school/`) | School site (Georgetown, GT Anywhere) | Rule and source |
|---|---|---|---|
| Skip link | yes | yes | Before the header, first focusable (K13-F36) |
| Row 1 — umbrella | GT School lockup alone, links to `#top` | GT School lockup, links to the landing | The parent mark is identical byte-for-byte on all three surfaces (K13-F27, K13-F35) |
| Row 1 — switcher | **none** | School switcher, upper area, beside the lockup | K7 §5d; a switcher on the landing duplicates the doors, which *are* the page |
| Row 2 — school identity | none | School name as a lockup subtitle, not a second logo | Rivet subtitle (K13-F33); NHS organisational header (K13-F31); K7 §5b forbids per-school logos |
| Row 2 — navigation | none (the doors are the navigation) | Five school menu items, plus Begin application with `school=` | GOV.UK service navigation (K13-F29); link count capped (K13-F30) |
| Current families | yes | yes, identical label | SC 3.2.4 (K13-F40) |
| Footer — meta band | mandatory | mandatory, identical | Canada.ca sub-footer (K13-F28); NHS meta band (K13-F32) |
| Footer — sibling link | n/a | mandatory, both directions | K7 §5d's Davidson fallback, promoted to a shell requirement |
| Footer — umbrella block | n/a | mandatory: GT School mark, both school links, the facts block | USWDS identifier, the parent-agency block that is separate from the footer (K13-F34) |
| Sticky behaviour | none on the first screen | none below 768 px | SC 2.4.11 (K13-F41); in-app viewports are 596–675 px tall (`17` §4) |

**The switcher, specified.** This is the single largest correction K13 makes to `1_spec/04`.

```html
<nav class="switcher" aria-label="GT School campuses">
  <ul>
    <li><a href="https://gt.school/georgetown" aria-current="true">Georgetown Campus <span>In person</span></a></li>
    <li><a href="https://anywhere.gt.school/">GT Anywhere <span>Online</span></a></li>
  </ul>
</nav>
```

| Property | Rule | Why |
|---|---|---|
| Semantics | `nav` + `ul` of `a` elements, `aria-current="true"` on the current school | Switching site is navigation, not value selection; the listbox pattern selects a value and navigates nowhere (K13-F42) |
| Keyboard | Tab, as links. No arrow-key roving tabindex | Arrow keys belong to the listbox pattern; stealing them from a list of links is a regression |
| No JavaScript | Fully functional | It is a list of links; nothing to initialise |
| Labels | The school name plus the attendance descriptor, word-for-word identical on both sites and in the doors | SC 3.2.4 (K13-F40); K7 §5c's "GT Anywhere" qualifier rule |
| Order | Same relative order on every page of every site | SC 3.2.3 (K13-F39) |
| N campuses | Adding a school adds one `<li>` and one row to the door list. No CSS change | DD-21 |
| Mobile | Collapses into the menu below 768 px; the sibling link in the footer is the guaranteed path | K7 §5d; K13-F30's link cap |
| Motion | V4 indicator slide, 200 ms, `--ease-standard`; `transition: none` under reduced motion, indicator jumps | K4 §8.1 |
| Hover | Never the trigger for opening it | K13-F36, K13-A8 |

Harvard and Stanford are the two closest real precedents and they both decline a persistent switcher: the schools are a destination inside the primary nav, not chrome (K13-F37, K13-F38). GT's case differs in one way that justifies the chrome position anyway — GT has two schools, not fifteen, and the whole product thesis is that a parent may be at the wrong one. Two links fit where fifteen do not. That is the argument to put in the rationale; it is an interpretation, and it is flagged as one.

### 8.4 The styleguide page (`design-system/index.html`, T-071)

One HTML file, no dependencies, no external JavaScript except fonts. Ten sections, in this order.

| # | Section | Contents | Why |
|---|---|---|---|
| SG1 | Header stamp | System version, build date, the git SHA the tokens were extracted at, and the hash of `tokens.css` | Lets any reviewer say "behind" rather than "different" (K13-F19) |
| SG2 | Tier 0 | Every primitive: name, value, swatch, and the tier-1 roles that alias it | Makes the one-value-two-roles cases legible (§8.1) |
| SG3 | Tier 1 colour | Every role, on every legal ground, with the **measured ratio and APCA Lc** from K3 §5b printed beside the swatch, and the illegal pairings shown struck through | The allow-list is the artefact; K3 CS2 checks against it |
| SG4 | Type specimen | Each `--text-*` step rendered at 360 / 390 / 768 / 1440 with the computed px and the measured `ch` count, plus the five shipped faces and the two preloads | K2 §5a and §5c, made inspectable |
| SG5 | Space, radius, shadow, container, z-index | Ladders rendered to scale | K13-F11's subtraction argument is only visible when the whole ladder is on one page |
| SG6 | Components | C1–C23, each with **every state from §8.2's taxonomy**, at 390 and 1440, each labelled with the state name | K13-F14, K13-F26; a state not on this page does not exist (K13-P10) |
| SG7 | Do / don't | Per component, paired strings and paired screenshots — the Polaris shape, not prose | K13-F16 |
| SG8 | Accessibility per component | Carbon's three headings — what the system provides, design recommendations, development considerations — plus the keyboard line and the accessible name | K13-F13 |
| SG9 | Motion | The full V1–V10 table with trigger, duration token, easing token, reduced-motion behaviour, touch/keyboard equivalent, plus a **reduced-motion toggle** that adds a `.force-reduced` class so a reviewer sees both branches without changing OS settings | K4 §8.1; K13-F47's "provide alternatives" line |
| SG10 | Refusals and drift | What the system deliberately does not have (disabled buttons, stock photography, a landing switcher, a second easing before D-031), the deprecation table with removal versions, and the inlined output of the drift check | K13-F23's snowflake gate; K13-F18's dated deprecations |

### 8.5 Sync, versioning and drift, with no dependencies

**Layout.** `design-system/` holds `VERSION`, `CHANGELOG.md`, `tokens.css`, `fonts/`, `components/*.css`, `partials/*.html`, `index.html`, `MANIFEST.json`. Sites hold copies. Nothing else is a source.

**Cascade discipline instead of a compiler.** One line at the top of every page fixes precedence for good (K13-F45):

```css
@layer gt.reset, gt.tokens, gt.base, gt.components, gt.page;
```

Component CSS lives in `gt.components`; a mock's own styles live in `gt.page`. A mock can then override without a specificity war, and — more usefully — the checker can assert that **no rule outside `gt.page` appears in a mock's own stylesheet**, which is a mechanical test for "did this direction fork the system".

**Partials by marker, with a closing marker.** `1_spec/04` §5 specifies `<!-- @partial header -->`. Add the close: `<!-- @partial header:school -->` … `<!-- /@partial header:school -->`. The closing marker is what makes the region re-expandable *and* verifiable; without it the sync step can only append, and the checker can only diff whole files.

**Three classes of drift, because a byte-diff catches only one.**

| Class | What it is | Detection | Exit |
|---|---|---|---|
| D1 copy drift | A site's copy of `tokens.css`, a font or a partial region differs from source | SHA-256 per file and per partial region against `MANIFEST.json` | non-zero |
| D2 literal drift | A hex, px, ms or cubic-bezier literal in a site or mock stylesheet where a `var()` belongs; or a `--gt-` primitive used outside `tokens.css` | one regex sweep per file | non-zero |
| D3 orphan drift | A `var(--x)` with no definition anywhere in the loaded cascade, or a tier-1 token nothing references | two greps | non-zero on the first, warn on the second |

D3's first half is the dangerous one: an undefined custom property fails **silently** — the declaration is invalid at computed-value time and the property falls back to its inherited or initial value, with no console error (K13-F44). That is precisely how a renamed token ships a page with black-on-black text and a clean QA run. It is why the rename in §8.1 needs the alias period rather than a find-and-replace.

**Commands**, both Node, zero dependencies, in the same pre-commit slot as `check-links.py`:

```
node tools/sync-design-system.mjs          # copy + expand markers + rewrite MANIFEST.json
node tools/check-design-system.mjs         # D1 + D2 + D3; exits non-zero on any finding
```

**Georgetown, which cannot run either.** The emitter writes `design-system/dist/webflow/{head.html,header.html,footer.html}` plus a `BUNDLE.json` recording the bundle's hash, the system version and the date it was handed to Nari. Drift there is detected by diffing the region out of a **text fetch** of the live page — no browser, consistent with the cluster rule — and reported as "Georgetown is N versions behind" rather than as a failure, because pasting into Webflow is Nari's call and a stop-and-ask action.

**Versioning.** `VERSION` is semver. The declared public API (K13-F19) is: **tier-1 token names, partial marker names, component class names, and the `data-school` attribute values.** Nothing else is promised.

| Change | Bump | Note |
|---|---|---|
| Rename or remove a tier-1 token, a marker, a component class | MAJOR | With one minor version of alias and a dated removal (K13-F18) |
| Add a token, a component, a state | MINOR | K3 PR-1…PR-5 are MINOR |
| Change a value inside an existing role | PATCH | K2's `clamp()` rewrite of `--text-*` |
| **Exception:** a value change that moves any pair in K3 §5c across an AA threshold | **MAJOR** | The allow-list is part of the contract; a PATCH that breaks contrast is not a patch |

That last row is GT-specific and not borrowed from any system fetched here. It exists because GT's system carries an accessibility allow-list as a first-class artefact, which most published systems do not.

### 8.6 Motion tokens, per K4

K4 §8.5 proposes the token block; K13 fixes its shape and its provenance.

```css
:root {
  --duration-none: 0ms;
  --duration-fast: 100ms;   /* both live sites' CSS (R1 §6) */
  --duration-base: 200ms;
  --duration-slow: 300ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-out:      cubic-bezier(0, 0, 0.2, 1);
  --ease-in:       cubic-bezier(0.4, 0, 1, 1);
}
@media (prefers-reduced-motion: reduce) {
  :root { --duration-fast: 0ms; --duration-base: 0ms; --duration-slow: 0ms; }
}
```

| Point | Ruling | Basis |
|---|---|---|
| Provenance of `--ease-standard` | It is Material 3's `easing-standard` / `easing-emphasized`, `cubic-bezier(0.2, 0, 0, 1)`, exactly. Record it as an adopted curve with a citation, not as an invention. Note that Carbon's standard-productive is a *different* curve, `cubic-bezier(0.2, 0, 0.38, 0.9)` — so "standard" is a role name, not an industry constant | K13-F5, K13-F47 |
| Provenance of `--ease-out` / `--ease-in` | `cubic-bezier(0, 0, 0.2, 1)` and `cubic-bezier(0.4, 0, 1, 1)` are Material's legacy decelerate and accelerate pair (K13-F5). Same treatment | K13-F5 |
| Scale size | Four durations, three easings. Carbon ships 6 + 9; Material ships 16 + 11. GT's is the fast end of both and stops there. Do not grow it to look rigorous | K13-F47, K13-F5, K13-A13 |
| Ceiling | 300 ms is below Carbon's `duration-slow-01` (400 ms) and inside Material's `short`/`medium` bands. Defensible as "the restrained end of two published scales" — the right register for a school | K13-F47, K13-F5 |
| `--ease-emphasized` | **Deleted, not aliased.** A token whose comment says "NOT DETERMINABLE" will be used and will mean nothing | K13-A3 |
| Type | Under DTCG these are `duration` (ms) and `cubicBezier` (four-number array) tokens; if a JSON export is ever produced, those are the types | K13-F4 |
| Reduced motion, the duration half | Override at `:root` under `reduce`. One block, and every transition in the system collapses | K13-F48 |
| Reduced motion, the movement half | Gate the *transform* behind `no-preference` using a tier-2 token with a `var()` fallback of zero, so the movement never exists for a reduced-motion reader while the fade and the state change survive: `.door__line { transform: translateY(var(--door-line-rise, 0)); }` with `@media (prefers-reduced-motion: no-preference) { .door__line { --door-line-rise: 4px; } }` | K13-F49, K13-F44, K4-F38 |
| Why both, and not one | Durations are tokens — one place, so an override is safe. Transforms are per-component — many places, and only the `no-preference` gate guarantees the hidden state never exists for a reader who has motion off. MDN models the override; web.dev models the gate; GT needs both, for different halves | K13-F48, K13-F49 |
| What is never animated | Focus rings (V3), figures (K4-A8), the LCP element, and anything above the fold at any of the 13 matrix sizes | K4 §8.2 |

### 8.7 A calibrated 5 for the rubric row **Continuity (L2)**

The row asks two questions — *"Does it look like the front door of the two sites it leads to, and could the sites inherit its shell?"* — and only the first is currently scored, because the second has never had a test. A **5 requires both halves**, and below 4 on any line caps the row at 3.

| # | What a 5 requires | Evidence |
|---|---|---|
| CT1 | Every value in the mock's CSS resolves to a **tier-1** token. Zero literals; zero `--gt-` primitives referenced outside `tokens.css` | D2 sweep in the QA file |
| CT2 | The mock's stamped system version matches `design-system/VERSION`, and `check-design-system.mjs` is clean on the mock directory (D1, D2, D3) | Checker output, pasted into the QA file |
| CT3 | Every declared departure names the token, the reason and the register row; at most three per mock | Rationale table (DD-19) |
| CT4 | Header and footer are the **partials**, included by marker, not re-authored. The marker regions hash-match source byte-for-byte | D1 per region |
| CT5 | **Shell isolation:** lifting the header and footer partials into a bare HTML page with only `tokens.css` renders them correctly — no dependency on the mock's own stylesheet | `tests/shell-isolation.spec.ts`, screenshots at 390 and 1440 |
| CT6 | The same partial renders both school variants (`data-school="georgetown"`, `data-school="anywhere"`) with only the name, the nav items and the contact block differing | Two captures per viewport |
| CT7 | Side-by-side with the two live sites (from the mirror and R1/R4 text evidence, never a browser on GT) reads as one family, and the critic **names three specific shared signals** — not "it feels consistent" | Side-by-side grid plus the critic's three named signals |
| CT8 | Repeated navigation occupies the same relative order on the landing capture and both school-shell captures (SC 3.2.3), and the same control carries the same accessible name on all three (SC 3.2.4) | Accessibility-tree dump per surface, diffed |
| CT9 | Switcher and sibling link are word-for-word mirrored in both directions; the switcher marks the current school with `aria-current`; neither is a listbox or a `<select>` | Markup assertion |
| CT10 | **The N-campus proof:** adding a third school changes one data file and zero CSS rules, captured at N=3 in both the door list and the switcher | Capture at N=3, plus the diff |
| CT11 | No snowflakes: every component is in §8.2's inventory, or is declared a one-off in the rationale with the reason it will not be promoted | Component census against §8.2 |
| CT12 | No cascade dependence: the mock renders identically with `gt.page` loaded after a stub of the live Webflow stylesheet | One extra capture |

**Exemplars for this row:** **Canada.ca** (K13-F27, K13-F28) for a shell that hundreds of independently-run sites inherit unchanged, including the sentence to borrow — "Don't customize the mandatory elements"; **NHS** (K13-F31) for the one legitimate per-organisation variation, done as a header *variant* rather than a second header; **USWDS's identifier** (K13-F34) for the footer block that makes the parent unmistakable on every child site. **Anti-exemplar:** the checked-in mirror itself, where nav, footer and the application modal are duplicated verbatim across nine pages with no source — the exact entropy K13-F23 describes.

### 8.8 What this changes downstream

| Artefact | Change |
|---|---|
| `1_spec/04` §2 | Token schema becomes three tiers with the naming anatomy in §8.1; `--color-surface-alt` resolves to `--color-surface-dark`; the C9 conflict closes; the file gains a `VERSION` and a deprecation table |
| `1_spec/04` §3 | **C8's "Listbox semantics" is wrong and must change to `nav` + links + `aria-current`** (§8.3). Add C2 skip link and C20 sibling link. Replace the prose `States` column with §8.2's S1–S14 taxonomy |
| `1_spec/04` §5 | Partial markers gain closing markers; the sync step writes `MANIFEST.json`; V-032 becomes `check-design-system.mjs` with the three drift classes |
| `1_spec/04` §8 | T-064 now includes the tier split and the alias table; T-067 includes the manifest and the checker; T-071's acceptance becomes SG1–SG10, not "every token and component appears" |
| `mockups/shared/tokens.css` | Tier 0 block added; K2's `clamp()` values; K3's PR-1…PR-5; `--ease-emphasized` deleted; `--ease-out`/`--ease-in` added; reduced-motion override block added; `@layer` order declared |
| `07` register | New rows: the tier split and naming anatomy; the `--color-accent-contrast` rename and its alias period; the switcher-semantics correction (contradicts `1_spec/04` §3 as written, so it must go through the ensemble, not straight into the spec); MN-13's easing amendment already proposed by K4 |
| `17` §5 brief | A new **System** field per mock: which components from §8.2 it uses, which states it must show, and any declared departure |
| `17` §6 rubric | The Continuity row gets CT1–CT12 |
| `1_spec/13` and the runner | New deterministic tests: D1/D2/D3 drift, CT5 shell isolation, CT6 both school variants, CT8 accessibility-tree diff across three surfaces, CT10 at N=3, CT12 cascade isolation |

---

## 9. Open questions

| # | Question | Why K13 could not resolve it | What would resolve it |
|---|---|---|---|
| K13-Q1 | Does Georgetown's Webflow accept a `@layer` block and CSS custom properties in site-level custom code without mangling them? | Verifying means editing a live Webflow site, which is a stop-and-ask action | Nari's go for one throwaway test in a Webflow staging page (D-005, D-021) |
| K13-Q2 | Should the school-site switcher be visible in the header below 768 px, or collapse into the menu? | K7 §5d says collapse "unless evidence shows parents switch often". There is no such evidence: `gt.school` is untagged, so cross-site switching has never been measured (fact 5) | Tag Georgetown (REQ-027), then 28 days of GA4 on the sibling link and the switcher |
| K13-Q3 | Should the token source be CSS, or DTCG JSON with a generated CSS output? | JSON is the interoperable format (K13-F3, K13-F4) but needs a build step, which the repository forbids by design | A decision row. Recommendation: **CSS is the source; a JSON export is generated and never authored**, so the ban holds and Figma interop stays possible later |
| K13-Q4 | Is `--ease-standard` GT's own curve or an adopted one? | K4 proposes Material's `cubic-bezier(0.2, 0, 0, 1)`; both live sites use the CSS keyword `ease`, which is a default rather than a decision (K4-F22). No GT evidence exists either way | MN-13's amendment, already proposed by K4; K13 only adds the citation and the note that "standard" is a role name, not a constant (K13-F47 vs K13-F5) |
| K13-Q5 | May a mock define tier-2 component tokens at all? | A direction that invents component tokens is harder to compare against nineteen others; but forbidding them pushes values into literals, which is worse | Recommendation: **yes, but only inside the component's own selector, never at `:root`, and each one listed in the mock's rationale.** Recorded here rather than decided |
| K13-Q6 | Does a **text fetch** of the live Georgetown page for the Webflow drift check (§8.5) violate the cluster's "no live GT page" rule? | The rule in `18` forbids loading GT or Alpha pages **in a browser**, and permits text fetch; but the drift check is an operational tool, not research | Johnny's ruling. K13 assumes text fetch is permitted and browser is not, matching `18` §1 and K7's precedent |
| K13-Q7 | Who owns the system after G1 — is there a design-system owner distinct from the page authors? | Frost's governance process assumes a system team and product teams (K13-F23). GT has one builder and one requirements authority | A row in `09`. Without an owner, §8.5's checker is the only governance that exists, which is thin but real |

---

## 10. Sources that could not be fetched

Listed so that nothing above is built on them, and so a later pass knows what is missing.

| Source | Attempted URL | Outcome |
|---|---|---|
| Material 3 design tokens (ref / sys / comp tiers) | `m3.material.io/foundations/design-tokens/*` | Client-rendered; body not returned. **The M3 three-tier model is therefore *not* cited above** — the tier argument rests on Carbon, Primer, Radix and DTCG instead. Only M3's motion *values* are cited, from the `material-web` repository |
| Adobe Spectrum design tokens | `spectrum.adobe.com/page/design-tokens/` | Client-rendered; title only |
| Nathan Curtis, *Naming Tokens in Design Systems* | `medium.com/eightshapes-llc/...` | HTTP 403 |
| Atlassian motion tokens (durations, easings) | `unpkg.com/@atlaskit/motion/README.md` | README carries no values; the values live on the client-rendered site |
| Shopify Polaris tokens site | `polaris.shopify.com/design/tokens` | 301 to `shopify.dev/docs/api/polaris`. The tokens README was fetched from the repository instead |
| GOV.UK deprecated and removed features | `design-system.service.gov.uk/community/deprecated-and-removed-features/` | HTTP 404. Deprecation practice above rests on Carbon and USWDS |
| BBC GEL global navigation | `bbc.co.uk/gel/...` | Host blocked by the fetch tool. **No publisher shell is cited above**; the multi-site evidence is government, health and higher education only |
| The Guardian design system (Source) | `theguardian.design/` | zeroheight shell only; no content |
| Australian Government Design System | `designsystem.gov.au/components/header/` | DNS resolution failed |
| U-M global header | `vpcomm.umich.edu/resources/global-header/` | HTTP 403 |
| WebSearch | — | Session budget exhausted at the first call, so **no finding here was discovered by search**; every source was reached by a canonical or raw-repository URL |
