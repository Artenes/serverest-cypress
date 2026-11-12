# ServeRest - Cypress Test Automation

Automated end-to-end (frontend) and API tests for [ServeRest](https://serverest.dev), written with [Cypress](https://www.cypress.io/) and JavaScript.

- Frontend: https://front.serverest.dev
- API (Swagger): https://serverest.dev

## Test scenarios

### Frontend (E2E)

| Spec | Scenario |
| --- | --- |
| `frontend/auth.cy.js` | Registers a new admin user and lands on the admin home |
| `frontend/auth.cy.js` | Shows an error message when logging in with invalid credentials |
| `frontend/products.cy.js` | An admin registers a product and it appears in the product list |

### API

| Endpoint | Scenario |
| --- | --- |
| `POST /usuarios` | Creates a user and rejects a duplicate email |
| `POST /login` | Returns a bearer token for valid credentials |
| `POST /produtos` | Creates a product with an admin token and rejects requests without a token |

## Project structure

```
cypress/
├── e2e/
│   ├── api/            # API tests
│   └── frontend/       # E2E tests
├── pages/              # Page Objects (selectors and page actions)
└── support/
    ├── api.js          # Custom commands wrapping the API requests
    ├── commands.js     # Custom commands (cached UI login)
    ├── dataFactory.js  # Unique test data generators
    └── e2e.js          # Loads the support files before each spec
```

## Design decisions

- **Page Object pattern:** each page's selectors and actions live in one class, keeping specs short and readable.
- **Custom commands for the API:** requests are reusable and also used to prepare test data quickly (e.g. creating an admin before a UI test).
- **Unique test data:** every run generates new users and products, avoiding collisions on the shared public server.
- **Cleanup:** API tests delete the data they create.
- **Stable selectors:** elements are located through `data-testid` attributes.

## Requirements

- [Node.js](https://nodejs.org/) 20 or newer

## Getting started

```bash
npm install
```

## Running the tests

```bash
# Headless, all specs
npm test

# Interactive Cypress runner
npm run cy:open
```

## Continuous integration

Tests run automatically on every push and pull request through GitHub Actions (`.github/workflows/cypress.yml`).
