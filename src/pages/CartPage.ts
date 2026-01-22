import { Page, expect } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {}

    async addToCart() {
        const addButton = this.page.locator('a[title="Add to Cart"]');
        await expect(addButton).toBeVisible();
        await addButton.click();
    }

    async verifyCartNotEmpty() {
        const cartQty = this.page.locator('#cart_quantity');
        await expect(cartQty).not.toHaveText('0');
    }
}
