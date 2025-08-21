// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config = defineConfig({
  testDir: './tests',
  timeout: 4 * 1000,
  expect: {
    timeout: 4000,
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: false,
    // trace: 'on',
    // screenshot: 'on'
  },
});

module.exports = config;
