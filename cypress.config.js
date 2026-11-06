const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://labs15-delta.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
