[![author](https://img.shields.io/badge/author-feliperoll-purple.svg)](https://www.linkedin.com/in/felipe-roll/)

# Complete QA Project - Manual and Automated Testing

### :br: [Versão em Português](https://github.com/FelipeLRoll/qa-project/blob/main/readmePortugues.md)

# Project Overview

  - ## **Motivation:**

  The QA part is essential for delivering reliable software products. This project combines manual exploratory testing with automated testing to demonstrate a comprehensive quality assurance approach.

 - ## **Objectives:**

The **main objective** of this project is to demonstrate professional QA skills through a testing portfolio that includes planning, documentation, execution, and report generation.

- **Develop testing documentation** including test plans, test cases, and test scenarios among others
- **Execute manual exploratory tests** to identify usability issues and edge cases
- **Implement automated tests** using Cypress and Playwright
- **Generate reports** with metrics and test coverage analysis
- **CI/CD integration** for automated test execution on every code change

- ## **Test Scope:**

The project tests the **bstackdemo.com** website, a demo e-commerce application with the following main functionalities:

- User authentication (login/logout)
- Product catalog with filters and sorting
- Shopping cart management
- Checkout process

# Key Features:

- **Test Type**: *Manual and Automated*
- **Automation Frameworks**: *Cypress and Playwright*
- **Process**: Test planning, test case design, manual execution, test automation, bug reporting

# Tools and Resources Used:

- **Development Tools**: `Visual Studio Code, Git, GitHub`
- **Automation Frameworks**: 
  - `Cypress ^13.0.0` - JavaScript-based E2E testing
  - `Playwright ^1.40.0` - Cross-browser testing framework
- **Programming Language**: `JavaScript (Node.js)`
- **CI/CD**: `GitHub Actions` - Automated test execution on every push
- **Test Management**: Test cases organized in spreadsheets

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

#  Test Coverage

- **11 automated** scenarios
- **Valid/invalid login**
- **Cart manipulation**
- **Calculation validation**
- **Filters and sorting**
- **Complete purchase flow**


# Project Steps:

  * ## 1. Test Planning

    - Defined test scope and objectives
    - Identified test scenarios based on user flows
    - Created test strategy document

  * ## 2. Test Documentation

    - Designed comprehensive test cases covering:
      - **Authentication**: Login/logout with valid and invalid credentials
      - **Product Navigation**: Filters, sorting, and product selection
      - **Shopping Cart**: Add, remove, update quantities
      - **Checkout**: Complete purchase flow

  * ## 3. Manual Test Execution

    - Performed exploratory testing to discover bugs
    - Documented test flow with screenshots and videos if needed

  * ## 4. Test Automation

    ### **Cypress and Playwright Implementation**

    - Implemented 11 automated test scenarios
    - Screenshot and video capture on failures
    
    **Test Coverage:**

    - Login with valid credentials
    - Login with invalid credentials
    - Logout functionality
    - Add products to cart
    - Remove products from cart
    - Update quantities in cart
    - Apply product filters
    - Sort products by price
    - Complete checkout flow

   
  * ## 5. Continuous Integration (CI/CD)

    - Configured GitHub Actions workflows for both frameworks
    - Automated test execution on:
      - Every push to the main branch

    
    **CI/CD Pipeline Features:**

    - Automatic test execution
    - HTML test report generation
    - Screenshot artifacts on failures
    - Video recordings
    - Test failure notifications


  * ## 6. Test Reports and Metrics in a spreadsheet

    - Generated test reports including:

      - **Pass/Fail Rates**:
      - **Test Coverage**: 
      - **Defect Density**: 
      - **Test Execution Time**: 



# How to Use:

## Prerequisites:

- Node.js (v18 or higher)
- npm or yarn package manager
- Git

## Setup:

1. **Clone the repository:**
```bash
git clone https://github.com/FelipeLRoll/qa-project.git
cd qa-project
```
2. **Install dependencies:**
```bash
npm install
```

## Running Tests:
### Cypress:
```bash
# Open Cypress Test Runner (Interactive Mode)
npm run test:cypress:open

# Run Cypress tests in headless mode
npm run test:cypress

# Run specific test file
npx cypress run --spec "cypress/e2e/auth.cy.js"
```

### Playwright:

```bash
# Run all Playwright tests
npm run test:playwright

# Run tests in UI mode (Interactive)
npm run test:playwright:ui

# Run tests in specific browser (EX: Chrome)
npx playwright test --project=chromium

# View HTML report
npm run test:playwright:report
```

### Run All Tests:

```bash
npm test
```

## Reports Location:

- **Cypress Reports**: `cypress/reports/html/index.html`
- **Playwright Reports**: `playwright-report/index.html`
- **Screenshots**: `cypress/screenshots` e `test-results`
- **Videos**: `cypress/videos`

# Project Documentation:

Documentation is available in the following locations:

- **Test Plan**: `1-planning/test-plan.md`
- **Test Cases**: `2-documentation/test-cases/`
- **Manual Test Results**: `3-manual-tests/`
- **Bug Reports**: `3-manual-tests/bug-reports/`
- **Test Reports**: `6-reports/`
- **Test Strategy**: `1-planning/test-strategy.md`


# Developed by:

  * [Felipe Roll - LinkedIn](https://www.linkedin.com/in/felipe-roll)
  * [Felipe Roll - GitHub](https://github.com/FelipeLRoll)
  * [Felipe Roll - Email](mailto:felipelroll@gmail.com)
