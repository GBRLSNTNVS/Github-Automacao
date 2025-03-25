const { defineConfig } = require("cypress");
const puppeteer = require('puppeteer');
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async takeScreenshot({ url, path }) {
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.goto(url);
          await page.screenshot({ path });
          await browser.close();
          return null;
        }
      });

      config.env.GITHUB_USERNAME = process.env.GITHUB_USERNAME;
      config.env.GITHUB_PASSWORD = process.env.GITHUB_PASSWORD;
      return config;
    },
  },
});