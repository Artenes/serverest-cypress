/**
 * Place to put any factory to quickly generate random data for a test.
 * 
 * As we are using a shared service, then we generate random data to avoid collision.
 */
const uniqueId = () => `${Date.now()}${Math.floor(Math.random() * 10000)}`

export const buildUser = (overrides = {}) => {
  const id = uniqueId()
  return {
    name: `QA User ${id}`,
    email: `qa.${id}@test.com`,
    password: 'Password@123',
    isAdmin: true,
    ...overrides,
  }
}

export const buildProduct = (overrides = {}) => {
  const id = uniqueId()
  return {
    name: `QA Product ${id}`,
    price: 150,
    description: 'Product created by automation',
    quantity: 10,
    ...overrides,
  }
}
