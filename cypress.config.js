const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('dotenv').config();
    },
  },
});


require('@applitools/eyes-cypress')(module);
