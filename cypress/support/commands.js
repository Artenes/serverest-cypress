import LoginPage from '../pages/LoginPage'

Cypress.Commands.add('loginViaUi', (email, password) => {

  cy.session([email, password], () => {
    LoginPage.visit()
    LoginPage.login(email, password)
    cy.url().should('include', '/home')
  })
  
})
