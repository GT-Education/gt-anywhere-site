# Concept catalog brief (goal G-C): list every design concept in each good design, then derive twenty directions

| Field | Value |
|---|---|
| Purpose | Johnny's third goal: "thoroughly list out all the design concepts of each of those good designs", applied to gt.school. Output `kb/CONCEPTS.md` (the catalog) and twenty direction briefs in `kb/briefs/M01..M20.md` (format: `BRIEF-TEMPLATE.md`) |
| Inputs | `EXEMPLARS.md` and the 26 captures in `exemplars/` (view every screenshot with the Read tool; no browser), K0 to K14, `REGISTER-FOLLOWUPS.md`, `17` sections 4 to 7, `16` (G0.5 decisions), `copy.md`, `ASSETS.md` |
| Swarm | Four catalog agents (about seven exemplars each, viewing the four screenshots per site), then Fable synthesizes the catalog and writes the twenty briefs; Astra E5 checks that every concept traces to a screenshot or a source and every brief traces to the catalog |
| Ceiling | Two passes per agent; a brief that cannot name three exemplar moves is not written until it can |

## 1. Per exemplar: the dimensions to catalog

For each site, one entry with a row per dimension. Every row names what the page does (observed in the screenshots, cited by filename and position: "1440 viewport, upper third"), why it works or fails for a parent choosing a school, and whether GT can use it (Yes / Adapt / No, with the constraint that decides: G0.5 decision, register row, brand rule, asset limit, viewport matrix).

| Dimension | What to record |
|---|---|
| First-screen thesis | What the first screen argues; headline length; the one big element; how many doors or paths; what is deliberately withheld |
| Composition and grid | Columns, margins, alignment axes, asymmetry, how the eye is led; density in words and elements; where the fold falls at 390 and 1440 |
| Rhythm and spacing | Section spacing pattern, vertical rhythm, use of rules and surfaces to separate |
| Typography | Display and text faces, scale steps visible, measure, leading, case, letterspacing, how numerals and labels are set |
| Color and surface | Palette, surface alternation, dark sections, accent discipline, contrast risks visible |
| Imagery | Photography or illustration, crops, treatments, subject choice, how it reinforces a cue, alt-text signals if visible |
| Motion and interaction | Declared motion (from the K4 or K0 stylesheet notes), hover and focus treatments, disclosures, carousels, what a still capture cannot show |
| Navigation and routing | Header contents, how the site routes among audiences or campuses, sticky behavior, footer role |
| Proof and credibility | How claims, figures, accreditation, testimonials and names are presented; what is sourced |
| Copy and voice | Sentence length, person, register, how the institution names itself, wayfinding words |
| Calls to action | Number, hierarchy, wording, placement, affordance, repetition |
| Comparison and decision support | Whether the page helps a visitor choose between options and how |
| Responsive behavior | What changes between 1440 and 390; what breaks or is hidden |
| Accessibility signals | Target sizes, contrast, focus visibility, heading structure, reduced-motion declaration (from K0 and K5 measurements) |
| Brand architecture | How the parent brand and sub-brands or campuses are expressed; endorsement placement |
| Performance signals | Payload class, font count, image weight where measured |

## 2. The catalog

`CONCEPTS.md`: one section per exemplar with the table above; then a cross-index: for every concept found in two or more exemplars, a row naming the concept, the exemplars, the rubric row it serves, the GT constraint that governs it, and the verdict Use, Adapt or Avoid. Concepts marked Avoid stay in the catalog with the reason, so nobody proposes them again.

## 3. From catalog to twenty directions

| Rule | Detail |
|---|---|
| Each direction is an argument | Its thesis says what the page argues about GT School and which exemplar moves make the argument; no direction is a restyle of another |
| Coverage | The twenty together span: photo-led (at most twelve, per K9), typographic or diagrammatic (at least six), still and motion (about half each per K4's verdicts), light and dark first screens, single-column and grid compositions, routing-first and mission-first orders (the L1 to L4 lens orders from `05`) |
| Invariants | Every direction keeps the G0.5 decisions, the copy deck's fixed slots, the brand rules from K12, the viewport matrix, the claims rules and the accessibility floor |
| Naming | `M01` to `M20`, each with a working title and a one-line thesis; the five existing directions may continue under new numbers if they survive the catalog's test |
| Evidence | Each brief cites three exemplar moves by screenshot filename and position, and every principle it applies by cluster and finding number |
