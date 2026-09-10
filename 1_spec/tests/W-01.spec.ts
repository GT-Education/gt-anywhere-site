// Generated 2026-09-10 by 1_spec/tools/build-tests.py from 1_spec/13-testing-suite-spec.md.
// Do not edit. Implement in tests/e2e/W-01.spec.ts after D-028; keep test titles identical so traceability holds.
import { test, expect } from '@playwright/test';

test.describe('W-01 Aware parent from Instagram organic reaches the right school site', () => {
  test('TC-001: Page returns 200; a `page_view` request leaves with `utm_*` echoed into session parameters; no request to Meta, TikTok, X or LinkedIn hosts before consent [REQ-020, REQ-023; V-020, V-023; layer A; node W-01/1, W-02/1, W-08/3]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-001 per 1_spec/13 section 3; evidence: HAR excerpt');
  });
  test('TC-002: The container script is requested after first paint; no other external script is requested except fonts [REQ-073; V-043; layer A; node W-01/1]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-002 per 1_spec/13 section 3; evidence: Request timeline');
  });
  test('TC-003: At 390 by 844, the elements above the door CTAs are exactly: lockup, current-families link, admissions contact, umbrella sentence, provenance line, two doors, helper entry [REQ-011; V-011; layer E; node W-01/2]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-003 per 1_spec/13 section 3; evidence: Screenshot and DOM order');
  });
  test('TC-004: The umbrella sentence contains "gifted and talented" and names both ways to attend [REQ-021; V-021; layer E; node W-01/2]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-004 per 1_spec/13 section 3; evidence: DOM text');
  });
  test('TC-006: Each door is a single link whose accessible name contains the full school name ("Georgetown Campus" and "GT Anywhere"), and the in-person versus online distinction remains legible with color removed (grayscale render), per WCAG 1.4.1 [REQ-018, DD-04; V-018; layer E, X; node W-01/3]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-006 per 1_spec/13 section 3; evidence: axe, DOM and a grayscale screenshot');
  });
  test('TC-007: Clicking a door fires `door_click` with `school`, `placement=first_screen`, `variant`, then `outbound_school_site` [REQ-020; V-020; layer A; node W-01/3]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-007 per 1_spec/13 section 3; evidence: Intercepted requests');
  });
  test('TC-013: Every link to apply.gt.school carries `school=` matching its door and forwards `utm_*` and `v`, and the parameters survive at least one real redirect hop (redirects and URL cleaning are the documented failure mode, R3 S08) [REQ-070; V-041; layer S, E; node W-01/3, W-03/2, W-06/3]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-013 per 1_spec/13 section 3; evidence: Link audit through the redirect');
  });
  test('TC-014: The Anywhere site (v2) renders the shared shell: lockup with school name, five menu items in the specified order, switcher listing both schools, Begin application with `school=anywhere` [REQ-030, REQ-031, REQ-032; V-030, V-031; layer E; node W-01/4]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-014 per 1_spec/13 section 3; evidence: DOM');
  });
  test('TC-023: Tap targets at least 44 by 44 CSS pixels at 390; no horizontal scroll at 390 or 1440 [REQ-015; V-015; layer E; node W-01/2]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-023 per 1_spec/13 section 3; evidence: Measurement script');
  });
  test('TC-037: Cross-domain: the `_gl` linker parameter is present on outbound links to every configured host (gt.school, georgetown.gt.school, anywhere.gt.school, apply.gt.school, community.gt.school) and the client id survives the hop; preview hosts send to the development stream measurement id [AN-06, AN-15; V-025; layer A; node W-01/4, W-10/2]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-037 per 1_spec/13 section 3; evidence: URL and request measurement id');
  });
  test('TC-043: Lighthouse mobile: LCP under 2.0 s, CLS 0, performance at or above the Anywhere home baseline [REQ-073; V-043; layer P; node W-01/2]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-043 per 1_spec/13 section 3; evidence: Lighthouse JSON');
  });
});
