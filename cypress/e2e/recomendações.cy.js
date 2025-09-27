///<reference types="cypress"/>
describe('US-015 - Funcionalidade: Lista de recomendações', () => {
  it('Deve exibir entre 4 e 5 filmes, cada um com nome e poster', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#recommendations > div')
    .should('have.length.gte', 4) 
    .and('have.length.lte', 5)
    .each(($filme) => {
      cy.wrap($filme)
          .find('img')
          .should('be.visible')
          .and('have.attr', 'src')
          .and('match', /\.(jpg|jpeg|png|webp)$/)
          cy.wrap($filme)
          .find('p')
          .should('be.visible')
          .and('not.be.empty')
      })
  })
})

