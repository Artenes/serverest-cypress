const API_URL = 'https://serverest.dev'
const apiUrl = () => API_URL

Cypress.Commands.add('apiCreateUser', (user) =>
  cy.request({ method: 'POST', url: `${apiUrl()}/usuarios`, body: user, failOnStatusCode: false }),
)

Cypress.Commands.add('apiLogin', (email, password) =>
  cy.request({ method: 'POST', url: `${apiUrl()}/login`, body: { email, password }, failOnStatusCode: false }),
)

Cypress.Commands.add('apiCreateProduct', (product, token) =>
  cy.request({
    method: 'POST',
    url: `${apiUrl()}/produtos`,
    body: product,
    headers: token ? { Authorization: token } : {},
    failOnStatusCode: false,
  }),
)

Cypress.Commands.add('apiDeleteUser', (id) =>
  cy.request({ method: 'DELETE', url: `${apiUrl()}/usuarios/${id}`, failOnStatusCode: false }),
)

Cypress.Commands.add('apiDeleteProduct', (id, token) =>
  cy.request({
    method: 'DELETE',
    url: `${apiUrl()}/produtos/${id}`,
    headers: { Authorization: token },
    failOnStatusCode: false,
  }),
)
