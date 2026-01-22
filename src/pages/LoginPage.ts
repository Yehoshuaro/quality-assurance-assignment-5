import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async open() {
        await this.page.goto('/index.php?rt=account/login');
    }
}
