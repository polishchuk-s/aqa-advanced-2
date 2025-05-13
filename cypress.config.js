const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    pageLoadTimeout: 60000,
    "fixturesFolder": "cypress/fixtures",
    "specPattern": "**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      const configFile = config.env.configFile || 'default';
      const pathToConfigFile = `./cypress.env.${configFile}.json`;

      if (fs.existsSync(pathToConfigFile)) {
        const envConfig = JSON.parse(fs.readFileSync(pathToConfigFile, 'utf-8'));
        config.env = { ...config.env, ...envConfig };
      }

      return config;

    },
  },
  env: {

  }
});
