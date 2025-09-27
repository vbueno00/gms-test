describe('US-001-Busca de filmes', () => {
  it('Deve limpar os resultados e o campo de busca ao clicar em limpar', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#search-input').type('Matrix')
    cy.get('#search-button').click()
    cy.get('#results-section > div').should('have.length.greaterThan', 0)
    cy.get('#clear-button').click() 
    cy.get('#search-input').should('have.value', '')    
    cy.get('#results > div').should('have.length', 0)    
  })
})
  