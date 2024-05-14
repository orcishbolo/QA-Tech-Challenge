const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 150000,
  responseTimeout: 150000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.amaysim.com.au/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
  
});
