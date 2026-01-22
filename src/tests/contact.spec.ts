import { test } from '@playwright/test';
import { CommonPage } from '../pages/CommonPage';
import { logger } from '../utils/logger';

test('Contact Us page opens', async ({ page }) => {
    logger.info('Opening contact us page');
    const common = new CommonPage(page);
    await common.openContactUs();
});
