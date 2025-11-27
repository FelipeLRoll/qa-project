// ====================================================================
// CASOS DE TESTE AUTOMATIZADOS - CYPRESS
// Projeto: BStack Demo E-commerce
// ====================================================================

// ====================================================================
// ARQUIVO: cypress/e2e/cart.cy.js
// Módulo: Autenticação
// ==================================================================== 
 
describe ("Autenticação - Login e Logout", () => {
  
  beforeEach(() => {
    // Visitar a página antes de cada teste
    cy.visit("https://bstackdemo.com/")
  })

 //TC-AUTO-005:  Adicionar Produto ao Carrinho
  it("TC-AUTO-005: Deve adicionar produto no carrinho", () => { 

   cy.fazLogIn(); 

   cy.get("#1").should("exist")
   cy.get("#1 .shelf-item__buy-btn").click()

   cy.adicionaProduto(1); //comando para adicionar um produto a partir do ID

   cy.get(".float-cart__content").should("exist") // valida que a aba do carrinho existe
   cy.get(".float-cart__shelf-container .shelf-item").should("exist") //verifica que existe algum item no carrinho
   cy.get(".float-cart__shelf-container .shelf-item .title").should("contain", "iPhone 12") //verifica se o item no carrinho é o mesmo adicionado


   cy.wait(2000)
   cy.screenshot("TC-AUTO-005-adicionar-produto", { overwrite: true })
  })

    //--------------------------------------------------------------------------------------------------

  //TC-AUTO-006:  Remove Produto do Carrinho
  it("TC-AUTO-006: Deve remover produto do carrinho", () => { 

   cy.fazLogIn(); 

   cy.adicionaProduto(1);

   cy.get(".shelf-item__del").click() // remove item do carrinho
   
   cy.wait(2000)
   cy.screenshot("TC-AUTO-006-remover-produto", { overwrite: true })
  })

    //--------------------------------------------------------------------------------------------------

  //TC-AUTO-007:  Calcular o total do Carrinho
  it("TC-AUTO-007: Deve calcular o total do carrinho", () => { 

   cy.fazLogIn(); 

   cy.adicionaProduto(1)
   cy.adicionaProduto(2)

   // Variáveis globais dentro do teste
   let priceNumber1 = 0
   let priceNumber2 = 0

   //item 1
   cy.get("#1 .shelf-item__price").invoke("text").then((price) => { //pega o preco do produto por id e nome, e compara com o preco no carrinho
    cy.get(".bag").click();
    cy.contains(".shelf-item", "iPhone 12")
      .find(".shelf-item__price")
      .should("contain", price);

    priceNumber1 = parseFloat(price.replace(/[^0-9.]/g, ""))
    priceNumber1 = Math.floor(priceNumber1 * 100) / 100


    // Mostrar no log para confirmar
    cy.log("Preço item 1 (número): " + priceNumber1)
    console.log("Preço item 1 (número):", priceNumber1)
   })

  //item 2
  cy.get("#2 .shelf-item__price").invoke("text").then((price) => { 
    cy.get(".bag").click();
    cy.contains(".shelf-item", "iPhone 12 Mini")
      .find(".shelf-item__price")
      .should("contain", price);

    priceNumber2 = parseFloat(price.replace(/[^0-9.]/g, ""));
    priceNumber2 = Math.floor(priceNumber2 * 100) / 100;

    cy.log("Preço item 2 (número): " + priceNumber2)
    console.log("Preço item 2 (número):", priceNumber2)
  })

  cy.then(() => {

    const total = (Number(priceNumber1) + Number(priceNumber2)).toFixed(2) //soma dos numeros

    cy.log("Total calculado: " + total)
    console.log("Total calculado: " + total)

    // agora compara com o valor do carrinho
    cy.get(".sub-price__val")
      .invoke("text")
      .then((cartTotal) => {
        const normalized = Number(cartTotal.replace(/[^0-9.]/g, "")).toFixed(2);
        expect(normalized).to.equal(total);

        cy.log("Valor Calculado: " + total +  "-" + "Valor Esperado: " + cartTotal)
        console.log("Valor Calculado: " + total +  "  -  " + "Valor Esperado: " + cartTotal)
      });

  });

   cy.wait(2000)
   cy.screenshot("TC-AUTO-007-calcular-carrinho", { overwrite: true })
  })
})  