// This file contains end-to-end tests for the login functionality of the application.
import{test, expect} from "@playwright/test";
import { LoginPage } from "../Pages/loginPage";
import userData from "../Data/userLoginData.json";

// Test suite for login functionality
test.describe("Login", () => {
    // Test to verify successful login with valid credentials
    test("should login with valid credentials", async ({ page }) => {
        const loginPage = new LoginPage(page);  
        await loginPage.navigateTo(userData.loginURL);
        await loginPage.login(userData.email, userData.password);
        await expect(page).toHaveURL(userData.dashboardURL);
        console.log("Login success as expected with valid credentials");
        await loginPage.takeScreenshot("login-success");
    });

    // Test to verify that invalid credentials prevent login
    test("should not login with invalid credentials", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo(userData.loginURL);
        await loginPage.login(userData.invalidEmail, userData.invalidPassword);
        await expect(page).toHaveURL(userData.loginURL);
        console.log("Login failed as expected with invalid credentials");
        await loginPage.takeScreenshot("login-failure");
    });
});
