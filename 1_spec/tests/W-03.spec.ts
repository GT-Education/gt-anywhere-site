// Generated 2026-09-10 by 1_spec/tools/build-tests.py from 1_spec/13-testing-suite-spec.md.
// Do not edit. Implement in tests/e2e/W-03.spec.ts after D-028; keep test titles identical so traceability holds.
import { test, expect } from '@playwright/test';

test.describe('W-03 Ready parent goes straight to the right application', () => {
  test('TC-015: The single default headline renders for every `v=` value at launch (variants are inert until MD-03\'s volume trigger, Q-031); the `v` value is still recorded as a user property so the trigger can be measured [MD-03; V-020; layer E, A; node W-03/1]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-015 per 1_spec/13 section 3; evidence: Screenshots and requests');
  });
  test('TC-016: "Already decided? Begin application" fires `cta_apply_click{school, placement}` and navigates to apply.gt.school with `school=` [REQ-070; V-041; layer E, A; node W-03/2]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-016 per 1_spec/13 section 3; evidence: Requests and URL');
  });
  test('TC-017: apply.gt.school shows a confirm step naming the school from `school=` and emits `app_started{school}` [MD-10, AN-07; V-042; layer E, A; node W-03/3, W-05/1]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-017 per 1_spec/13 section 3; evidence: Screenshot and requests');
  });
});
