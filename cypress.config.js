const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 15_000,
  env: {
    apiKey: 'Paste your key here',
    apiToken: 'Paste your token here',
    email: 'liroh61536@bitvoo.com',
    password: 'Test4321!',
  }
});
