const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.GITHUB_USERNAME = process.env.GITHUB_USERNAME;
      config.env.GITHUB_PASSWORD = process.env.GITHUB_PASSWORD;
      return config;
    },
  },
});