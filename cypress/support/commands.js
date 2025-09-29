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

Cypress.Commands.add('PreencherCadastro', (name, lastname, email, phone, password) => { 
    cy.get('#signup-firstname').type(name)
    cy.get('#signup-lastname').type(lastname)
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type(phone)
    cy.get('#signup-password').type(password)
    cy.get('#signup-button').click()
 })