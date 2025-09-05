// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  reporter: 'html',
  projects: [
    {
      name: "safari",
      use: {
        browserName: 'webkit',
        headless: false,
        // trace: 'on',
        // screenshot: 'on'
      }
    },    
    {
      name: "Chrome execution",
      use: {
        browserName: 'chromium',
        headless: false,
        // permissions: ['geoLocation'],
        // ...devices['Galaxy A55'],
        // ignoreHTTPSErrors: true,
        // viewport: { width: 375, height: 667 },
        // trace: 'on',
        // screenshot: 'on'
      }
    }
  ]
});

module.exports = config;
