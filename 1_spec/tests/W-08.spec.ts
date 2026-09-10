// Generated 2026-09-10 by 1_spec/tools/build-tests.py from 1_spec/13-testing-suite-spec.md.
// Do not edit. Implement in tests/e2e/W-08.spec.ts after D-028; keep test titles identical so traceability holds.
import { test, expect } from '@playwright/test';

test.describe('W-08 Answer-engine visitor and crawler', () => {
  test('TC-047: `robots.txt` allows the crawlers per SE-10; `sitemap.xml` lists every indexable page; `llms.txt` lists the agreed pages [SE-10; V-038; layer S; node W-08/1]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-047 per 1_spec/13 section 3; evidence: curl output');
  });
  test('TC-048: Preview and staging deployments return `x-robots-tag: noindex` and require deployment authentication; no URL carrying `noindex` is also disallowed in `robots.txt` (a robots block would stop the `noindex` from being read); production returns no `noindex` [SE-13; V-002; layer S; node W-08/1, W-09/2]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-048 per 1_spec/13 section 3; evidence: curl output');
  });
  test('TC-049: The facts block text is byte-identical across the landing footer, `/facts`, both school footers [SE-08; V-038; layer S; node W-08/2]', async ({ page }) => {
    test.fixme(true, 'TODO implement TC-049 per 1_spec/13 section 3; evidence: Diff');
  });
});
