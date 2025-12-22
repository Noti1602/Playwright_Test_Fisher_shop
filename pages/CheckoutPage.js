import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage{
    logo = this.page.locator('img[alt="Travel Curious Private Tours"]');
    constructor(page) {
        super(page);
        this.page = page;

        // this.logo = this.page.locator('img[alt="Travel Curious Private Tours"]');
        this.navCollections = this.page.locator('.desktop a[href="/collections/"]', { hasText: 'Collections'} );
        //     this.navHotelSolutions = this.page.locator('.desktop a[href="https://partner.travelcurious.com/hotel-solutions"]', { hasText: 'Hotel Solutions'} );
        //     this.navBecomePartner = this.page.locator('.desktop a[href="https://partner.travelcurious.com/"]', { hasText: 'Become a partner'} );
        //     this.navBecomeGuide = this.page.locator('.desktop a[href="https://partner.travelcurious.com/become-a-guide"]', { hasText: 'Become a guide'} );
        //     this.navLogin = this.page.locator('.desktop > li.header', { hasText: 'Log in' } );
        //     this.contentHeader = this.page.locator('.content h1');
        //     this.destinationInputField = this.page.getByTestId('destination');
        //     this.dateInputField = this.page.locator('.form-control.input');
        //     this.participantsSummary = this.page.locator('.participants-summary');
        //     this.searchButton = this.page.locator('.button.primary.small.view', { hasText: 'Search' });
    }

    async navigateHomePage() {
        await this.page.goto('/'); // base path
    }

    // async goToCollectionsPageViaHeader() {
    //     await this.navCollections.click();
    // }
    //
    // async verifyHomePageHeaderElements() {
    //     await this.isVisible(this.logo);
    //     await this.isVisible(this.navCollections);
    //     await this.isVisible(this.navHotelSolutions);
    //     await this.isVisible(this.navBecomePartner);
    //     await this.isVisible(this.navBecomeGuide);
    //     await this.isVisible(this.navLogin);
    // }
    //
    // async verifyHomePageContentElements() {
    //     await this.hasText(this.contentHeader, 'Authentic private tours led by handpicked guides');
    //     await this.isVisible(this.destinationInputField);
    //     await this.isVisible(this.dateInputField);
    //     await this.isVisible(this.participantsSummary);
    //     await this.isVisible(this.searchButton);
    //     await this.isEnabled(this.searchButton);
    //
    // }
}
