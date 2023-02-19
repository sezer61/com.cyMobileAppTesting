const { defineConfig } = require("cypress");
module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "po15ym",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
