const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    apiKey: 'Paste your key here',
    apiToken: 'Paste your token here',
  }
});
