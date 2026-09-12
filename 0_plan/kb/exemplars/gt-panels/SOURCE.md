# The gt.school two-door panel: a dated source extract, and what it corrects

## Why this exists

M32 "The Two Panels" is built from the two-door panel on the live GT School about page, worked from
a screenshot Johnny took rather than from source. Its rationale argued that the source is badly
imbalanced between the two schools and that M32's contribution is correcting that imbalance to
parity. Both critics said the counts behind that argument could not be checked by anyone, because
the screenshot is not in the repository. The engineer's own attempt to fetch the page was refused by
its sandbox, and it correctly marked the figures unverifiable rather than working around the refusal.

They are now checkable, and **the imbalance is not there.** The source panels are symmetric.

## Provenance

| Field | Value |
|---|---|
| Source | `https://www.gt.school/about-us`, the `split-cta` panel pair, and its Webflow stylesheet |
| Method | `curl` of the page and the stylesheet as text. **No browser, no production page loaded, no beacon fired.** The extract is a byte slice of those two responses |
| Fetched | 2026-09-11 |
| Kept | `panels-segment.html`, both anchors as fetched, 2,361 bytes. `panels-rules.css`, the 16 rules whose selectors name a `split-cta` class |

## Measured, reproducible

`python3 0_plan/kb/exemplars/gt-panels/count.py` prints all of this from the extract.

| | Left, GT School | Right, GT Anywhere |
|---|---|---|
| Marks | 1 | 1 |
| Headings | 1 | 1 |
| Paragraphs | 1 | 1 |
| Button labels | 1, "Apply Now" | 1, "Learn more" |
| Characters of text | 219 | 276 |

**Character ratio between the panels: 1.26 to 1.**

Every declaration in the two panels' own rules is identical except one: `background-image`, which is
each side's photograph. Compared declaration by declaration, `split-cta_left` and `split-cta_right`
differ in nothing else.

## Where the 24.7 to 1 came from

Both panels put their heading and paragraph inside `.split-cta_hidden-wrap`, which sets
`overflow: hidden`, and both anchors carry a `data-w-id` interaction. At rest each panel shows its
mark and its button; the prose is revealed. A screenshot catching one panel revealed and the other
at rest shows one side with 9 characters and the other with over 200, which is the 24.7 to 1 figure,
and it is an artefact of the capture's hover state rather than a property of the page.

## What this means for M32

The mock's geometry, its parity harness and its 0.0px result are unaffected and remain good work.
What changes is the warrant. M32 should not claim to correct an imbalance in the source, because the
source does not have one; the two panels were already symmetric, and M32's contribution is that it
holds that symmetry while substituting tints for photographs of identifiable children and moving an
unregistered claims paragraph off the page. Those are real contributions and they do not need a
defect in the source to justify them.

The counts are no longer merely unverifiable. Three of them are refuted: the 3 to 1 on type objects,
the 7 to 1 on text lines, and the 24.7 to 1 on characters.
