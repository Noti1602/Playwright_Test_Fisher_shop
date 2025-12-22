import { BasePage } from './BasePage';

export class ProfilePage extends BasePage{
    constructor(page) {
        super(page);
        this.page = page;
    }

    async navigateHomePage() {
        await this.page.goto('');
    }



}
