const { test, expect } = require('@playwright/test');
const { Page } = require('playwright');


test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});
