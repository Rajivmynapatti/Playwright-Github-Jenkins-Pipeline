import { Page, Locator } from '@playwright/test';
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.getByPlaceholder("email@example.com");
        this.passwordInput = page.getByPlaceholder("enter your passsword");
        this.loginButton = page.locator("input[type='submit']");
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}