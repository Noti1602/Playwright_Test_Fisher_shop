import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { ProfilePage } from '../pages/ProfilePage';
import { CartModal } from '../pages/components/CartModal';
import { ContactsPage } from '../pages/ContactsPage';



test.describe('Fisher shop happy path test', () => {
    test('Register account - add 3 items to cart - open cart and make screenshot - navigate to Contacts', async ({ page }) => {
        const homePage = new HomePage(page);
        const registerPage = new RegisterPage(page);
        const profilePage = new ProfilePage(page);
        const cartModal = new CartModal(page);
        const contactsPage = new ContactsPage(page);

        // Open Home Page and click Registration link
        await homePage.navigateHomePage();
        await homePage.verifyPageTitle('Рибальські снасті | Товари для рибальства інтернет магазин у Києві');
        await homePage.openRegisterPageViaLink();

        // Verify Register Page base elements
        await registerPage.verifyRegisterPageContentElements();

        // Register new account
        await registerPage.registerNewAccount('testUserName', `test${Date.now()}@mail.com`, 'testPassword');
        await profilePage.verifyPageTitle('Ваш Профиль');
        await profilePage.verifyPageURL('/user');

        // Navigate Home Page and verify base elements
        await registerPage.navigateHomePage();
        await homePage.verifyPageTitle('Рибальські снасті | Товари для рибальства інтернет магазин у Києві');
        await homePage.verifyHomePageContentElements();

        // Add 3 items into the cart
        await homePage.buyProductFromSpinningsCatalogue();
        await homePage.buyProductFromWinterFishingReels();
        await homePage.buyProductFromFishingCords();
        await homePage.openCart();

        // Open Cart and make screenshot
        await cartModal.verifyItemsCount(3);
        await cartModal.takeScreenshot('my-order');
        await cartModal.closeCartModal();

        // Open Contacts page and scroll it to the bottom
        await homePage.navigateToContactsPageViaLink();
        await contactsPage.verifyPageTitle('Контакты');
        await contactsPage.scrollToBottom();

})
});
