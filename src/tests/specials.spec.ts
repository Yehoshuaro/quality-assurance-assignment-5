import { test } from '@playwright/test';
import { CommonPage } from '../pages/CommonPage';
import { logger } from '../utils/logger';

test('Specials page opens', async ({ page }) => {
    logger.info('Opening specials page');
    const common = new CommonPage(page);
    await common.openSpecials();
});
