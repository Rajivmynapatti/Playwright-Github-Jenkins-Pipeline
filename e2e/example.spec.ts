// This file contains example tests demonstrating basic Playwright functionality.
import { test, expect } from '@playwright/test';

// Test to check if the page has the expected title
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});


// Test to verify the 'Get started' link navigation
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Verify that the page navigates to the Installation section.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
