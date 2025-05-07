// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('faker', () => {
    const { faker } = require('@faker-js/faker');
    return faker;
});

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    cy.get(`button[class$="header_signin"]`).click();
    cy.get(`#signinEmail`).clear();
    cy.get(`#signinEmail`).type(username);
    cy.get(`#signinPassword`).clear();
    cy.get(`#signinPassword`).type(password, { sensitive: true });
    cy.get(`.modal-footer > .btn-primary`).click();
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
    return originalFn(element, text, options)
  });