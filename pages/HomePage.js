import { BasePage } from './BasePage';

export class HomePage extends BasePage{
    constructor(page) {
        super(page);
        this.page = page;

        this.productLink = this.page.locator('a.product_link');
        this.leftHandMenuItem = this.page.locator('a.a_main_cat');
        this.productItemName = this.page.locator('a.name_pr_list');
        this.buyBtn = this.page.locator('#fast_pay_a');
        this.continuePurchaseBtn = this.page.locator('a#prod');
        this.cartIcon = this.page.locator('#cart_1');
        this.registerLink = this.page.locator('#top_menu a[href="/user/register"]');
        this.contactsLink = this.page.locator('.main-menu a[href="/kontakty"]');
    }

    async navigateHomePage() {
        await this.page.goto(''); // base path
    }

    async openRegisterPageViaLink() {
        await this.registerLink.click();
    }

    async verifyHomePageContentElements() {
        await this.verifyElementsCount(this.productLink, 12);
        await this.verifyElementsCount(this.leftHandMenuItem, 11);
    }


    async buyProductFromCatalogueCategory(category) {
        await this.page.goto(category);
        await this.productItemName.first().click();
        await this.buyBtn.click();
        await this.continuePurchaseBtn.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async navigateToContactsPageViaLink() {
        await this.contactsLink.click();
    }


}
