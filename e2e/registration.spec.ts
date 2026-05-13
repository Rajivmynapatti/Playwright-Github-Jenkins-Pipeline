import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../Pages/registrationPage";
import userData from "../Data/userRegisterData.json";


test.describe("Registration", () => {
    test("should register a new user", async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        await page.goto(userData.registerURL);
        await registrationPage.register(userData.firstname, userData.lastname, userData.email, userData.phone, userData.role, userData.password, userData.confirmPassword);
        await expect(page).toHaveURL(userData.loginURL);
    });
});