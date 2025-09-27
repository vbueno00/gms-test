///<reference types="cypress"/>
describe('US-015-Funcionalidade: Lista de recomendações', () => {
  it('Nome e poster dos filmes aparecendo, 4 a 5 filmes devem aparecer na lista', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#recommendations > :nth-child(1) > img').click()
    cy.get(':nth-child(1) > p').click()
    cy.get(':nth-child(2) > img').click()
    cy.get('#recommendations > :nth-child(2) > p').click()
    cy.get(':nth-child(3) > img').click()
    cy.get(':nth-child(3) > p').click()
    cy.get(':nth-child(4) > img').click()
    cy.get(':nth-child(4) > p').click()
    cy.get('#recommendations > :nth-child(5) > img').click()
    cy.get(':nth-child(5) > p').click()
  })
})