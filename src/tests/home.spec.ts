import { test } from '@playwright/test';
import { CommonPage } from '../pages/CommonPage';
import { logger } from '../utils/logger';

test('Home page opens', async ({ page }) => {
    logger.info('Opening home page');
    const common = new CommonPage(page);
    await common.openHome();
});
