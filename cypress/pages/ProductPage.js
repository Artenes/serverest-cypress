/**
 * Page Object for product registration page
 */
class ProductPage {
  elements = {
    name: () => cy.get('[data-testid="nome"]'),
    price: () => cy.get('[data-testid="preco"]'),
    description: () => cy.get('[data-testid="descricao"]'),
    quantity: () => cy.get('[data-testid="quantity"]'),
    submit: () => cy.get('[data-testid="cadastarProdutos"]'),
    table: () => cy.get('table'),
  }

  visit() {
    cy.visit('/admin/cadastrarprodutos')
  }

  create({ nome, preco, descricao, quantidade }) {
    this.elements.name().type(nome)
    this.elements.price().type(preco)
    this.elements.description().type(descricao)
    this.elements.quantity().type(quantidade)
    this.elements.submit().click()
  }
}

export default new ProductPage()
