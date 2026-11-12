/**
 * Place to put any factory to quickly generate random data for a test.
 * 
 * As we are using a shared service, then we generate random data to avoid collision.
 */
const uniqueId = () => `${Date.now()}${Math.floor(Math.random() * 10000)}`

export const buildUser = (overrides = {}) => {
  const id = uniqueId()
  return {
    nome: `QA User ${id}`,
    email: `qa.${id}@test.com`,
    password: 'Password@123',
    administrador: 'true',
    ...overrides,
  }
}

export const buildProduct = (overrides = {}) => {
  const id = uniqueId()
  return {
    nome: `QA Product ${id}`,
    preco: 150,
    descricao: 'Product created by automation',
    quantidade: 10,
    ...overrides,
  }
}
