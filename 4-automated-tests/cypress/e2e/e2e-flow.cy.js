// ====================================================================
// CASOS DE TESTE AUTOMATIZADOS - CYPRESS
// Projeto: BStack Demo E-commerce
// ====================================================================

// ====================================================================
// ARQUIVO: cypress/e2e/e2e-flow.cy.js
// Módulo: Autenticação
// ==================================================================== 
 
describe ("Fluxo de Compra", () => {
  
  beforeEach(() => {
    // Visitar a página antes de cada teste
    cy.visit("https://bstackdemo.com/")
  })

 //TC-AUTO-008:  Fluxo de compra
  it("TC-AUTO-008: Deve completar o fluxo de compra", () => { 

   cy.fazLogIn()

   cy.adicionaProduto(1)
   cy.adicionaProduto(5)
   cy.adicionaProduto(4)
   cy.adicionaProduto(1)

   cy.get(".buy-btn").click()

   cy.get("#firstNameInput").click().type("Felipe")
   cy.get("#lastNameInput").click().type("Roll")
   cy.get("#addressLine1Input").click().type("Brasil, Brasil, 123")
   cy.get("#provinceInput").click().type("RS")
   cy.get("#postCodeInput").click().type("12234456-34")

   cy.get("#checkout-shipping-continue").click()

   cy.get("#confirmation-message").should("contain", "Your Order has been successfully placed.")

   cy.wait(3000)
   cy.screenshot("TC-AUTO-008-fluxo-compra", { overwrite: true })
  })

    //--------------------------------------------------------------------------------------------------














































})  