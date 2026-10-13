# GT School web analytics

One GA4 property (`G-494D3VN0SF`) for www.gt.school, anywhere.gt.school and apply.gt.school.

- `tracking-plan.json` is the source of truth: event names, parameters and allowed values, which page gets which `school`, allowed tag hosts per site, and the GA4 Admin settings. Change it first, then the code.
- `webflow/` holds the exact custom code live in Webflow (Site settings > Custom code). `ga4-head.html` is the shared base tag; the `*-site-head.html` / `*-site-footer.html` files are the full blocks per site.
- `validate.mjs` loads each page in headless Chromium and checks every GA4 hit against the plan: one measurement ID, one `page_view` per load, the right `school`, only planned events and parameters, no PII, no unplanned third-party tags. It also simulates each conversion (router choice, HubSpot form, Calendly tour, waitlist popup, interest form) with the form backends mocked.

```sh
npm i --no-save playwright-core            # or PLAYWRIGHT_CORE=/path/to/playwright-core
node analytics/validate.mjs                # production
node analytics/validate.mjs --env staging  # *.webflow.io (analytics forced on via localStorage.gt_analytics_test)
node analytics/validate.mjs --sites apply  # apply.gt.school
```

A run sends nothing anywhere: GA4 hits are answered locally with 204, ad and CRM beacons are aborted, and no form reaches HubSpot or Supabase. Exit code 1 means a check failed.

## Conventions (short version)

- Event and parameter names are snake_case and at most 40 characters. Use the GA4 recommended name when one exists.
- One event per action; variants go in parameters (`generate_lead` + `form_name`, not one event per form).
- Every hit carries `school` = `georgetown` | `anywhere` | `summer` | `umbrella`.
- `form_name` = `<school>_<form>`; `lead_source` = where the form was opened.
- Never send names, email, phone, zip, IEP or income data to GA4 or ad pixels.
