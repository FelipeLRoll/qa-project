// ====================================================================
// CASOS DE TESTE AUTOMATIZADOS - CYPRESS
// Projeto: BStack Demo E-commerce
// ====================================================================

// ====================================================================
// ARQUIVO: cypress/e2e/auth.cy.js
// Módulo: Autenticação
// ====================================================================

describe ("Autenticação - Login e Logout", () => {
  
  beforeEach(() => {
    // Visitar a página antes de cada teste
    cy.visit("https://bstackdemo.com/")
  })


  //TC-AUTO-001: Login com Sucesso
  it("TC-AUTO-001: Deve fazer login com credenciais válidas", () => {

   cy.wait(2000)
   cy.get("#signin").click()

   cy.get(".css-1hwfws3").should("be.visible")
  
   //usuario
   cy.get("#username").click()
   cy.get("#username").should("contain", "demouser")
   cy.get("#username").type("demouser{enter}")

   //senha
   cy.get("#password").click()
   cy.get("#password").should("contain", "testingisfun99")
   cy.get("#password").type("testingisfun99{enter}")

   cy.get("#login-btn").click()

   //Validações
   cy.get("#signin").should("not.exist") // Botão Sign In desaparece
   cy.get("#username").should("contain", "demouser") // Nome do usuário aparece

   
   //Screenshot de evidência
   cy.wait(2000)
   cy.screenshot("TC-AUTO-001-login-sucesso", { overwrite: true })
  })

  //--------------------------------------------------------------------------------------------------

   //TC-AUTO-002: Login com Username Inválido
  it("TC-AUTO-002: Não deve permitir login com username inválido", () => { 

   cy.wait(2000)
   cy.get("#signin").click()

   cy.get(".css-1hwfws3").should("be.visible") 

   cy.get("#username").click()
   cy.get("#username").type("randomuser{enter}")

   cy.get("#login-btn").click()

   cy.get(".api-error").should("contain", "Invalid Username")

   cy.wait(2000)
   cy.screenshot("TC-AUTO-002-usuario-incorreto", { overwrite: true })
  })


  //--------------------------------------------------------------------------------------------------

   //TC-AUTO-003: Login com senha Inválida
  it("TC-AUTO-003: Não deve permitir login com senha inválida", () => { 

   cy.wait(2000)
   cy.get("#signin").click()

   cy.get(".css-1hwfws3").should("be.visible") 

   cy.get("#username").click()
   cy.get("#username").type("demouser{enter}")

   cy.get("#password").click()
   cy.get("#password").type("randompassword{enter}")

   cy.get("#login-btn").click()

   cy.get(".api-error").should("contain", "Invalid Password")

   cy.wait(2000)
   cy.screenshot("TC-AUTO-003-senha-incorreta", { overwrite: true })
  })

    //--------------------------------------------------------------------------------------------------

  //TC-AUTO-004:  Logout com Sucesso
  it("TC-AUTO-004: Deve fazer logout com sucesso", () => { 

   cy.fazLogIn(); //comando criado no "commands.js" para não precisar colocar o login e senha toda vez no código

   //Validações
   cy.get("#signin").should("not.exist") // Botão Sign In desaparece
   cy.get("#username").should("contain", "demouser") // Nome do usuário aparece

  //logout
   cy.get("#signin").click()

   //Validações
   cy.get("#signin").should("exist") // Botão Sign In aparece
   cy.get("#username").should("not.exist") // Nome do usuário nao aparece     


   cy.wait(2000)
   cy.screenshot("TC-AUTO-004-logout", { overwrite: true })
  })

    //--------------------------------------------------------------------------------------------------
})