import { expect } from '@playwright/test';
import {BasePage} from "../BasePage";
import {generateScreenshotName} from "../../utils/FileNameUtils";
import { FileNameUtils } from "../../utils/FileNameUtils";

export class CartModal extends BasePage{
    constructor(page) {
        super(page);
        this.page = page;

        // Modal container
        this.modal = page.locator('#aj_cart');

        // Elements inside modal
        this.modalHeader = this.modal.locator('td:nth-child(1)');
        this.modalPlaceOrderBtn = this.modal.locator('#aj_oform');
        this.modalCloseIcon = this.modal.locator('tr:nth-child(1) span.cl');
        this.modalCartProduct = this.modal.locator('a.a_aj_cart');
    }

    async takeScreenshot() {
        await this.modal.waitFor({ state: 'visible' });
        const fileName = generateScreenshotName('cart');
        await this.modal.screenshot({
            path: `screenshots/${fileName}.png`,
        });
    }

    async verifyItemsCount(count) {
        await expect(this.modalCartProduct).toHaveCount(count);
    }

    async closeCartModal() {
        await this.modalCloseIcon.click();
    }
}
