///<reference types="cypress"/>
describe('US-001-Busca de filmes', () => {

  it('Deve exibir filmes ao buscar por uma palavra-chave válida', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#search-input').type('matrix')
    cy.get('#search-button').click()
     cy.get('#results-section > div')
     .should('exist')
     .and('have.length.greaterThan', 0)
     cy.get('#results-section > div').first().within(() => {
      cy.get('img').should('be.visible')
      cy.get('p').should('not.be.empty')

     
  })
    })
  })
     
      

    

