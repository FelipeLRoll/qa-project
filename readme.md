
[![author](https://img.shields.io/badge/author-feliperoll-purple.svg)](https://www.linkedin.com/in/felipe-roll/)

# QA Project (In Progress)

### :brazil: [Versão em Português](https://github.com/FelipeLRoll/qa-project/blob/main/readmePortugues.md)

# About the Project

## Objectives

* Document professional testing processes
* Execute exploratory and test case-based manual testing
* Implement automation with Cypress
* Report bugs and improvements
* Generate test reports

## Technologies

* Cypress
* Playwright
* Github Actions
* JavaScript
* Markdown
* Git/GitHub

## Test Documentation

# Automated Tests

This project demonstrates expertise in **two main E2E test automation tools**:

## Cypress
- **Language:** JavaScript
- **Location:** `cypress/e2e/`
- **Run:** `npm run cy:open` or `npm run cy:run`

### Implemented Tests:

- **Authentication** - Login/Logout with validations
- **Cart** - Add, remove, and calculate totals
- **E2E Flow** - Complete purchase from start to finish
- **Filters** - Filter by brand and sort by price

## Playwright

- **Language:** JavaScript
- **Location:** `playwright/tests/`
- **Run:** `npx playwright test`
- **Browsers:** Chromium, Firefox, WebKit

### Implemented Tests:

- **Authentication** - Login/Logout with validations
- **Cart** - Add, remove, and calculate totals
- **E2E Flow** - Complete purchase from start to finish
- **Filters** - Filter by brand and sort by price

## CI/CD with GitHub Actions

Both frameworks run automatically on every push:
- Parallel testing
- Evidence screenshots
- HTML reports
- Execution videos (Cypress)

## Useful Commands

### Cypress
```bash
npm run test:cypress          # Runs tests in terminal
npm run test:cypress:open     # Opens visual interface
```

### Playwright
```bash
npm run test:playwright       # Runs all tests
npm run test:playwright:ui    # Visual interface
npm run test:playwright:report # View report
```
#  Structure
```
qa-project/
├── 1-planning/           # Plano de testes e escopo
├── 2-documentation/      # Documentação dos casos de teste
├── 3-manual-tests/       # Evidências e resultados de testes manuais
├── 4-automated-tests/
│   ├── cypress/e2e/
│   │   ├── auth.cy.js
│   │   ├── cart.cy.js
│   │   ├── e2e-flow.cy.js
│   │   └── filters.cy.js
│   └── playwright/
│       ├── helpers/auth.js
│       └── tests/
│           ├── auth.spec.js
│           ├── cart.spec.js
│           ├── e2e-flow.spec.js
│           └── filters.spec.js
├── 6-reports/
├── playwright-report/
├── playwright.config.js
└── package.json
```

# Test coverage

- **11 Automated Scenarios** 
- **Valid/Invalid Login**
- **Shopping Cart Manipulation**
- **Cost Validation**
- **Filters and Sorting**
- **Complete Purchase Flow**

- # Developed By: 

  * [Felipe Roll - Linkedin](https://www.linkedin.com/in/felipe-roll)
  * [Felipe Roll - Github](https://github.com/FelipeLRoll)
  * [Felipe Roll - Gmail](felipelroll@gmail.com)
