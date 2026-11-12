import { buildUser, buildProduct } from '../../support/dataFactory'

describe('API - ServeRest', () => {

  context('POST /usuarios', () => {

    it('creates a user and rejects a duplicate email', () => {

      const user = buildUser()

      cy.apiCreateUser(user).then((res) => {

        expect(res.status).to.eq(201)
        expect(res.body.message).to.eq('Cadastro realizado com sucesso')
        expect(res.body._id).to.be.a('string').and.not.be.empty

        cy.apiCreateUser(user).then((dup) => {
          expect(dup.status).to.eq(400)
          expect(dup.body.message).to.eq('Este email já está sendo usado')
        })

        cy.apiDeleteUser(res.body._id)

      })

    })

  })

  context('POST /login', () => {

    it('returns a bearer token for valid credentials', () => {

      const user = buildUser()

      cy.apiCreateUser(user).then(({ body: created }) => {

        cy.apiLogin(user.email, user.password).then((res) => {
          expect(res.status).to.eq(200)
          expect(res.body.message).to.eq('Login realizado com sucesso')
          expect(res.body.authorization).to.match(/^Bearer .+/)
        })

        cy.apiDeleteUser(created._id)

      })

    })

  })

  context('POST /produtos', () => {

    it('creates a product with an admin token and rejects requests without a token', () => {

      const admin = buildUser()
      const product = buildProduct()

      cy.apiCreateProduct(product).then((res) => {

        expect(res.status).to.eq(401)
        expect(res.body.message).to.contain('Token de acesso ausente')

      })

      cy.apiCreateUser(admin).then(({ body: created }) => {

        cy.apiLogin(admin.email, admin.password).then(({ body: { authorization } }) => {

          cy.apiCreateProduct(product, authorization).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.message).to.eq('Cadastro realizado com sucesso')
            expect(res.body._id).to.be.a('string').and.not.be.empty

            cy.apiDeleteProduct(res.body._id, authorization)
          })

          cy.apiDeleteUser(created._id)

        })
      })
    })
  })
  
})
