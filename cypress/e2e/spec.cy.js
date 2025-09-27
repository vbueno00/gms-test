/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorios', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#signup-firstname').type('fabio')
    cy.get('#signup-lastname').type('sandro')
    cy.get('#signup-email').type('fabiosandrosss@testes.com')
    cy.get('#signup-phone').type('119988776655')
    cy.get('#signup-password').type('Password##43')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})