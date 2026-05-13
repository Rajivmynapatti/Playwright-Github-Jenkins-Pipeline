import{type Locator, type Page} from "@playwright/test";

export class RegistrationPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly roleSelect: Locator;
    readonly genderRadio: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly termsCheckbox: Locator;
    readonly submitButton: Locator;
    readonly loginButton: Locator; 


    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.getByPlaceholder("First Name");
        this.lastNameInput = page.getByPlaceholder("Last Name");
        this.emailInput = page.getByPlaceholder("email@example.com");
        this.phoneInput = page.getByPlaceholder("enter your number");
        this.roleSelect = page.locator(".custom-select");
        this.genderRadio = page.getByRole("radio", { name:"Male", exact: true});
        this.passwordInput = page.locator("#userPassword");
        this.confirmPasswordInput = page.locator("#confirmPassword");
        this.termsCheckbox = page.locator("input[type='checkbox']");
        this.submitButton = page.locator("input[type='submit']");
        this.loginButton = page.getByRole("button", { name: "Login" });

    }   

    async register(firstName: string, lastName: string, email: string, phone: string, role: string, password: string, confirmPassword: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);        
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.roleSelect.selectOption(role);       
        await this.genderRadio.check();
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(confirmPassword); 
        await this.termsCheckbox.check();
        await this.submitButton.click();
        await this.page.waitForLoadState("networkidle");
        await this.loginButton.click();
    }
}