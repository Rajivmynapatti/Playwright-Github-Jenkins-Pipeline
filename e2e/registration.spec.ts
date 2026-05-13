import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../Pages/registrationPage";
import userData from "../Data/userRegisterData.json";
import { TestDataGenerator } from "../Utils/testDataGenerator";


test.describe("Registration", () => {
    test("should register a new user", async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        const dynamicUserData = TestDataGenerator.generateUserData();
        await page.goto(userData.registerURL);
        await registrationPage.register(dynamicUserData.firstname, dynamicUserData.lastname, dynamicUserData.email, userData.phone, userData.role, userData.password, userData.confirmPassword);
        await expect(page).toHaveURL(userData.loginURL);
    });
});