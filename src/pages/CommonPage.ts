import { Page, expect } from '@playwright/test';

export class CommonPage {
    constructor(private page: Page) {}

    async openHome() {
        await this.page.goto('/');
        await expect(this.page).toHaveTitle('A place to practice your automation skills!');
    }

    async openLogin() {
        await this.page.goto('/index.php?rt=account/login');
        await expect(this.page.locator('#loginFrm')).toBeVisible();
    }

    async openContactUs() {
        await this.page.goto('/index.php?rt=content/contact');
        await expect(this.page.locator('#ContactUsFrm')).toBeVisible();
    }

    async openSpecials() {
        await this.page.goto('/index.php?rt=product/special');
        await expect(this.page.locator('.heading1')).toBeVisible();
    }
}
