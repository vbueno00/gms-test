describe('Busca termo invalido', () => {
  it('Não deve exibir filmes ao buscar por palavra-chave inválida', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#search-input').type('asdasdqweqwe')
    cy.get('#search-button').click()
    cy.get('#results > div').should('have.length', 0)
    cy.contains('Filme não encontrado.').should('be.visible')
  })
  })
