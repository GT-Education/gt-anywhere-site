// Generated 2026-09-10 by 1_spec/tools/build-tests.py from 1_spec/13-testing-suite-spec.md.
// Do not edit. Implement in tests/e2e/W-02.spec.ts after D-028; keep test titles identical so traceability holds.
import { test, expect } from '@playwright/test';

test.describe('W-02 Interested parent from search compares, uses the helper, books a tour', () => {
  test('TC-008: "Not sure? Compare" scrolls to the comparison; `compare_view` fires once when half in view and not again on further scrolling [REQ-013; V-013; layer E, A; node W-02/2]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-008 per 1_spec/13 section 3; evidence: Intercepted requests');
  });
  test('TC-009: Comparison rows appear in the specified order, shared rows first; the tuition row shows the register copy for Anywhere and "see campus site" for Georgetown until Q-011 [REQ-013, REQ-026; V-013, V-026; layer E; node W-02/2]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-009 per 1_spec/13 section 3; evidence: DOM order and text');
  });
  test('TC-011: Under `prefers-reduced-motion` and in the default state alike, no element animates on load or scroll; hover and focus styling changes are the only transitions (MN-01 to MN-08 revised after R2) [MN-11; V-044; layer X; node W-02/3]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-011 per 1_spec/13 section 3; evidence: Computed transition durations');
  });
  test('TC-012: "Book a campus tour" links to the HubSpot meeting URL with UTMs; `cta_secondary_click{type=tour}` fires [REQ-044; V-039; layer E, A; node W-02/4]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-012 per 1_spec/13 section 3; evidence: Link href and requests');
  });
  test('TC-044: JSON-LD parses; `EducationalOrganization` with two `subOrganization` entries; no description states a target as a result (string check against the register) [SE-05, REQ-045; V-038; layer S; node W-02/1, W-08/2]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-044 per 1_spec/13 section 3; evidence: Validator output');
  });
  test('TC-045: Title and meta description present on every page and within length limits; canonical self-referencing [SE-06; V-038; layer S; node W-02/1]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-045 per 1_spec/13 section 3; evidence: Head audit');
  });
});
