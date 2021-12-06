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
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveSession", () => {
  Object.keys(sessionStorage).forEach(key => {
    cy.log('Saving session: '+key+':'+sessionStorage[key])
    LOCAL_STORAGE_MEMORY[key] = sessionStorage[key];
  });
});

Cypress.Commands.add("loadSession", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    cy.log('Loading session: '+key+':'+LOCAL_STORAGE_MEMORY[key])
    sessionStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});
Cypress.Cookies.defaults({
  preserve: ['token'],
})
Cypress.Commands.add('login', () => {
  cy.get('#username').type('admin')
  cy.get('#password').type('admin')
  cy.intercept(
    'POST',
    '**/auth').as('login')
  cy.get('#login').click()
  cy.wait('@login').then((xhr) => {
  })
})
