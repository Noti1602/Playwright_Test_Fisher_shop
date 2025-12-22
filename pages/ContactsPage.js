import { BasePage } from './BasePage';

export class ContactsPage extends BasePage{
    constructor(page) {
        super(page);
        this.page = page;

        this.navCollections = this.page.locator('.desktop a[href="/collections/"]', { hasText: 'Collections'} );

    }

    /**
     * Scrolls the page to the very bottom.
     *
     * Useful for loading lazy content or reaching footer elements.
     *
     * @returns {Promise<void>}
     *
     * @example
     * await basePage.scrollToBottom();
     */
    async scrollToBottom() {
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    }

}
