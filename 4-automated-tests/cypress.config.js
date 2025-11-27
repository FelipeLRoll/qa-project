const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bstackdemo.com/", 
    screenshotOnRunFailure: true,
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
