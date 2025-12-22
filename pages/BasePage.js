import { expect } from "@playwright/test";

export class BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/');
    }

    /**
     * Asserts that a given locator is visible on the page.
     *
     * @param {import('@playwright/test').Locator} locator - The Playwright locator to check visibility for.
     * @param {string} [message='Element should be visible'] - Optional custom assertion message.
     * @returns {Promise<void>} A promise that resolves when the visibility assertion completes.
     */
    async isVisible(locator, message = 'Element should be visible') {
        await expect(locator, message).toBeVisible();
    }

    /**
     * Asserts that a given locator contains the expected text.
     *
     * @param {import('@playwright/test').Locator} locator - The Playwright locator to check text for.
     * @param {string|RegExp} expectedText - The expected text or RegExp pattern.
     * @param {string} [message='Element text does not match expected value'] - Optional custom assertion message.
     * @returns {Promise<void>} A promise that resolves when the assertion completes.
     */
    async hasText(locator, expectedText, message = 'Element text does not match expected value') {
        await expect(locator, message).toHaveText(expectedText);
    }

    /**
     * Asserts that a given locator is enabled (interactive).
     *
     * This check ensures the element is not disabled and can be clicked or interacted with.
     * Playwright automatically waits until the locator resolves and the element reaches the
     * "enabled" state before performing the assertion.
     *
     * @param {import('@playwright/test').Locator} locator
     *        The Playwright locator representing the element to verify.
     *
     * @param {string} [message='Element is expected to be enabled']
     *        Optional custom message to display if the assertion fails.
     *
     * @returns {Promise<void>}
     *          Resolves when the assertion completes successfully.
     *
     * @example
     * await this.isEnabled(this.submitButton);
     */
    async isEnabled(locator, message = 'Element is expected to be enabled') {
        await expect(locator, message).toBeEnabled();
    }

    /**
     * Verifies that a list of locators contains the exact expected text values.
     *
     * @async
     * @function hasTexts
     * @param {import('@playwright/test').Locator} locator
     *        The Playwright locator that resolves to multiple elements.
     *
     * @param {string[]} expectedList
     *        An array of expected text values in the exact order they should appear.
     *
     * @returns {Promise<void>}
     *          A promise that resolves when the text assertion completes.
     *
     * @example
     * // Example usage:
     * await basePage.hasTexts(page.locator('.card-title'), [
     *   'Themed Tours',
     *   'Art Tours',
     *   'History Tours',
     *   'Jewish Heritage'
     * ]);
     */
    async hasTexts(locator, expectedList) {
        const actual = await locator.allTextContents();
        expect(actual).toEqual(expectedList);
    }

    async scrollToBottom() {
        await this.page.evaluate(() =>
            window.scrollTo(0, document.body.scrollHeight)
        );
    }

    /**
     * Verifies that the page title matches the expected value.
     *
     * This method asserts the browser page title to ensure that
     * the page is opened correctly.
     *
     * @async
     * @param {string | RegExp} expectedTitle - Expected page title or regex pattern.
     * @returns {Promise<void>}
     *
     * @example
     * await basePage.verifyPageTitle(/Fish-fish/);
     */
    async verifyPageTitle(expectedTitle) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    /**
     * Verifies that the current page URL matches the expected value.
     *
     * This method asserts the browser page URL to ensure that
     * navigation was completed correctly.
     *
     * @async
     * @param {string | RegExp} expectedUrl - Expected page URL or regex pattern.
     * @returns {Promise<void>}
     *
     * @example
     * await basePage.verifyPageURL('/user');
     * await basePage.verifyPageURL(/fish-fish\.com\.ua/);
     */
    async verifyPageURL(expectedUrl) {
        await expect(this.page).toHaveURL(expectedUrl);
    }


    /**
     * Verifies that a locator contains the expected number of elements.
     *
     * This method asserts the count of elements matched by the locator.
     *
     * @async
     * @param {import('@playwright/test').Locator} locator - Playwright locator to verify.
     * @param {number} expectedCount - Expected number of elements.
     * @returns {Promise<void>}
     *
     * @example
     * await basePage.verifyElementsCount(cartItems, 3);
     * await cartModal.verifyElementsCount(this.modalCartProduct, 2);
     */
    async verifyElementsCount(locator, expectedCount) {
        await expect(locator).toHaveCount(expectedCount);
    }
}
