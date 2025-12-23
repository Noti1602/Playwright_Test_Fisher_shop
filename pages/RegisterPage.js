import { BasePage } from './BasePage';
import { randomString } from '../utils/RandomString';
import { expect } from '@playwright/test';

export class RegisterPage extends BasePage{
    constructor(page){
        super(page);
        this.page = page;

        this.title = this.page.locator('.jshop h1');
        this.nameInput = this.page.locator('#reg_name');
        this.emailInput = this.page.locator('#email');
        this.passwordInput = this.page.locator('#password');
        this.registerBtn = this.page.locator('#reg');
    }

    async navigateHomePage() {
        await this.page.goto('');
    }

    async verifyRegisterPageContentElements() {
        await this.hasText(this.title, 'Регистрация');
        await this.isVisible(this.nameInput);
        await this.isVisible(this.emailInput);
        await this.isVisible(this.passwordInput);
        await this.isEnabled(this.registerBtn);
    }

    async registerNewAccount() {
        const name = `user_${randomString(6)}`;
        const email = `test_${randomString(8)}@mail.com`;
        const password = randomString(12);
        await this.nameInput.fill(name);
        await this.nameInput.click();
        await this.emailInput.fill(email);
        await this.emailInput.click();
        await this.passwordInput.fill(password);
        await this.passwordInput.click();
        await expect(this.registerBtn).toBeEnabled();
        await this.registerBtn.click();
    }

}
