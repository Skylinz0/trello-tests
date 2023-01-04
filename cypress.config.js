const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 15_000,
  chromeWebSecurity: false,
  env: {
    apiKey: '73dbeac05d02b4d046ef1d30f17519af',
    apiToken: 'ATTA8b325d152109db6fe4af09a3cac90dbd15fba854a01bc9c4a8c49db055ae49cbC583B757',
    email: 'liroh61536@bitvoo.com',
    password: 'Test4321!',
  }
});
