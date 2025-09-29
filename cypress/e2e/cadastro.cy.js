/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
   beforeEach(() => {
   cy.visit('/')
   });

  it('Deve fazer o cadastro de campos obrigatorios', () => {
    var email = `fabio${Date.now()}@teste.com`
    cy.PreencherCadastro('Fabio', 'Araujo', email, '1199887766', 'Teste#4455')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })

   it('Deve validar mensagem de erro em caso de nome invalido', () => {
    cy.PreencherCadastro('Fabio20', 'Araujo', 'fabio12333@teste.com', '1199887766', 'Teste#4455')
    cy.get('#signup-response').should('contain' , 'Nome deve conter apenas caracteres alfabéticos')
  })

  it('Deve validar mensagem de erro em caso de email invalido', () => {
    cy.PreencherCadastro('Fabio', 'Araujo', 'fabio123456teste.com', '1199887766', 'Teste#4455')
    cy.get('#signup-response').should('contain' , 'E-mail deve ser um email válido')
  })

  it('Deve validar mensagem de erro em caso de senha fraca', () => {
   cy.PreencherCadastro('Fabio', 'Araujo', 'fabio123456@teste.com', '1199887766', 'senha')
   cy.get('#signup-response').should('contain' , 'Senha deve ter pelo menos 8 caracteres')
});
})
