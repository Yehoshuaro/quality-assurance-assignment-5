import { test } from '@playwright/test';
import { CommonPage } from '../pages/CommonPage';
import { logger } from '../utils/logger';

test('Login page opens', async ({ page }) => {
    logger.info('Opening login page');
    const common = new CommonPage(page);
    await common.openLogin();
});
