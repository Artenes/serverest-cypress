/**
 * Page Object for Signup page
 */
class SignupPage {
  elements = {
    name: () => cy.get('[data-testid="nome"]'),
    email: () => cy.get('[data-testid="email"]'),
    password: () => cy.get('[data-testid="password"]'),
    adminCheckbox: () => cy.get('[data-testid="checkbox"]'),
    submit: () => cy.get('[data-testid="cadastrar"]'),
  }

  visit() {
    cy.visit('/cadastrarusuarios')
  }

  register({ nome, email, password, administrador }) {
    this.elements.name().type(nome)
    this.elements.email().type(email)
    this.elements.password().type(password, { log: false })
    if (administrador === 'true') this.elements.adminCheckbox().check()
    this.elements.submit().click()
  }
}

export default new SignupPage()
