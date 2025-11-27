// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: "element"}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: "optional"}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("fazLogIn", (username = "demouser", password = "testingisfun99") => {

   cy.wait(2000)
   cy.get("#signin").click()
   cy.get("#username").click()
   cy.get("#username").type("demouser{enter}")

   //senha
   cy.get("#password").click()
   cy.get("#password").type("testingisfun99{enter}")

   cy.get("#login-btn").click()

});   


Cypress.Commands.add("adicionaProduto", (id) => {
  cy.get(`#${id} .shelf-item__buy-btn`).click();
});
