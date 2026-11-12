import SignupPage from '../../pages/SignupPage'
import LoginPage from '../../pages/LoginPage'
import { buildUser } from '../../support/dataFactory'

describe('Frontend - Authentication', () => {

  it('registers a new admin user and lands on the admin home', () => {

    const user = buildUser()

    SignupPage.visit()
    SignupPage.register(user)

    cy.contains('Cadastro realizado com sucesso').should('be.visible')
    cy.url().should('include', '/admin/home')
    cy.contains('h1', `Bem Vindo ${user.nome}`).should('be.visible')

  })

  it('shows an error message when logging in with invalid credentials', () => {

    LoginPage.visit()
    LoginPage.login('nao.existe@test.com', 'senhaErrada')

    LoginPage.elements.alert()
      .should('be.visible')
      .and('contain.text', 'Email e/ou senha inválidos')
    cy.url().should('include', '/login')

  })
  
})
