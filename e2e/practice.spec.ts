

import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';

test.describe("Rahul shetty practice page", () => {
    test("Handle radio buttons  ", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo("https://rahulshettyacademy.com/AutomationPractice/");

        await page.waitForLoadState('domcontentloaded');
        // Find the list item that contains specific text
        const radiobutton = page.getByRole('radio', { name: /Radio3/i });
        await radiobutton.click();
        await expect(radiobutton).toBeChecked();





    })
})
 


