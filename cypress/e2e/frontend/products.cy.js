import ProductPage from '../../pages/ProductPage'
import { buildUser, buildProduct } from '../../support/dataFactory'

describe('Frontend - Products', () => {
  const admin = buildUser()

  before(() => {
    cy.apiCreateUser(admin).its('status').should('eq', 201)
  })

  beforeEach(() => {
    cy.loginViaUi(admin.email, admin.password)
  })

  it('allows an admin to register a product that then appears in the product list', () => {
    const product = buildProduct()

    ProductPage.visit()
    ProductPage.create(product)

    cy.url().should('include', '/admin/listarprodutos')
    ProductPage.elements.table()
      .contains('tr', product.nome)
      .should('be.visible')
      .and('contain.text', product.preco)
      .and('contain.text', product.descricao)
  })
})
