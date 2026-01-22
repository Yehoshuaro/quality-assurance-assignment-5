import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './src/tests',
    timeout: 30000,

    reporter: [
        ['html', { outputFolder: 'reports/html-report', open: 'never' }]
    ],

    use: {
        baseURL: 'https://automationteststore.com',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry'
    }


});
