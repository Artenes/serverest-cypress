/**
 * Page Object for login page
 */
class LoginPage {
  elements = {
    email: () => cy.get('[data-testid="email"]'),
    password: () => cy.get('[data-testid="senha"]'),
    submit: () => cy.get('[data-testid="entrar"]'),
    alert: () => cy.get('.alert'),
  }

  visit() {
    cy.visit('/login')
  }

  login(email, password) {
    this.elements.email().type(email)
    this.elements.password().type(password, { log: false })
    this.elements.submit().click()
  }
}

export default new LoginPage()
