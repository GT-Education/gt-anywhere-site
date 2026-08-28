# Home + Begin Application modal

The homepage sells GT Anywhere ("The MIT of K-8.") and funnels every page's visitor
into the Begin Application modal — a lead form (name, email, phone, zip, household
income, SMS consent) whose real submit posts to a live lead webhook and hands off to
apply.gt.school. Verification opens, fills, and closes the modal; it never submits.

## Sub-features

- `home-load` — homepage renders the hero heading `The MIT of K-8.` with the navbar
  and footer.
- `home-nav` — the page links (`/advisors`, `/academics`, `/intensives`,
  `/academic-calendar`) are behind the navbar `MENU` disclosure button; the footer
  `Navigate` column carries the same links inline. `Pay Tuition` → `/pay/` appears
  once, in the mid-page TEFA installment section (not in MENU or the footer).
- `modal-open` — an apply CTA opens the modal titled
  `Secure Your Candidacy for Fall 2026`.
- `modal-fill` — the five required text fields accept input and the
  `household_income` select offers `Under $65,000`, `$65,000 - $160,000`,
  `Over $160,000`, `Prefer not to say`.
- `modal-close` — the X control closes the modal without submitting.
- `modal-submit` — **intentionally never verified.** Submitting creates a real lead
  (live Supabase webhook + ad-pixel Lead events). Proof stops at a filled form.

## How to get to it (user POV)

- Browse to `http://127.0.0.1:8213/`.
- Open the modal via the navbar `BEGIN APPLICATION` button, or the hero CTA
  `Now Enrolling for Fall 2026 - BEGIN APPLICATION`, or the same CTAs repeated on
  every other main page (the modal is a shared site-wide component).

## Driving it with Playwright MCP

Preconditions:

- `server.sh doctor 8213` reports `OK`.
- An evidence run directory exists.

- **Load home.** Run `browser_navigate` with `http://127.0.0.1:8213/`. Run
  `browser_snapshot`: the page title is `GT Anywhere: Elite Gifted Education at Home`
  and the hero heading `The MIT of K-8.` is present.
- **Open modal.** Click the navbar `BEGIN APPLICATION` button (its snapshot ref).
  A dialog region titled `Secure Your Candidacy for Fall 2026` becomes visible with
  fields `First Name`, `Last Name`, `Email`, `Phone`, `Zip Code`, an income select,
  and a `Start Application` submit button.
- **Fill fields.** Use `browser_fill_form` (or `browser_type` per field) with test
  values, e.g. first name `Verify`, last name `Bot`, email
  `verify-bot@example.com`, phone `(512) 555-0100`, zip `78701`. Use
  `browser_select_option` on the income select with `Prefer not to say`. Each field
  holds its value; the select gains the `is-selected` class (check via
  `browser_evaluate`).
- **Proof.** Run `browser_take_screenshot` (absolute path,
  `<run>/home-modal-filled.png`) showing the filled modal. **Do not click
  `Start Application`.**
- **Close modal.** Click the modal's close (X) control. The modal hides and the
  homepage hero is visible again. Screenshot as `<run>/home-modal-closed.png` if the
  run needs a closed-state proof.

## Gotchas

- The submit is live even on localhost — the inline handler fetches the production
  Supabase webhook with a real API key. Never click `Start Application`; a filled
  form plus the enabled button is the maximum safe proof.
- CTA labels are duplicated in the DOM (`button-text` + `button-text-ab`), so
  accessible names read doubled (`BEGIN APPLICATION BEGIN APPLICATION`). Click the
  containing link/div, not a text node.
- The modal is a Webflow interaction (`data-w-id` on the CTA); it needs the
  localized `webflow.js` to have loaded. If a click does nothing, wait for page load
  to finish and re-snapshot before concluding it's broken.
- `.modal` is `position: fixed`, so `offsetParent === null` even while open. Judge
  open/closed by computed `display`/`opacity` (open: `flex`/`1`; closed:
  `none`/`0`) or the bounding rect, never by offsetParent.
- `$ is not defined` in the console is the known mirrored bug, not a failure of this
  feature.
- The mirror lags live Webflow publishes (e.g. household-income changes staged in
  Webflow). Verify what this checkout serves; live-parity is `tools/mirror.mjs`'s
  job, not this skill's.
