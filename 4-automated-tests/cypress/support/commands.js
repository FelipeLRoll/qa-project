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

Cypress.Commands.add("preencheCompra", () => {

   cy.get("#firstNameInput").click().type("Felipe")
   cy.get("#lastNameInput").click().type("Roll")
   cy.get("#addressLine1Input").click().type("Brasil, Brasil, 123")
   cy.get("#provinceInput").click().type("RS")
   cy.get("#postCodeInput").click().type("12234456-34")

   cy.get("#checkout-shipping-continue").click()

});


Cypress.Commands.add("verificaFiltro", (marcas) => {

  
  const marcasArray = Array.isArray(marcas) ? marcas : [marcas] // Aceita string ou array
  
  
  marcasArray.forEach(marca => { // Verifica se todos os checkboxes estão marcados

    cy.get(`input[value="${marca}"]`).should("be.checked")

  });
  
  const produtosPorMarca = {

    "Apple": /(iPhone)/i,
    "Samsung": /(Galaxy)/i,
    "Google": /(Pixel)/i,
    "OnePlus": /(OnePlus)/i

  };
  
  
  const padroesCombinados = marcasArray // Cria um regex combinado com todas as marcas
  
    .map(marca => produtosPorMarca[marca].source)
    .join("|")

  const regexCombinado = new RegExp(padroesCombinados, "i")
  
  
  cy.get(".shelf-item__title").each(($el) => { // Verifica que todos os produtos correspondem a uma das marcas

    const productName = $el.text()
    expect(productName).to.match(regexCombinado)

  });
});

Cypress.Commands.add("ordenarPor", (tipoOrdenacao) => {

  const opcoes = {

    "menorParaMaior": "lowestprice",
    "maiorParaMenor": "highestprice"
  };
  
  cy.get("select").select(opcoes[tipoOrdenacao]);
  cy.wait(2000)
});


Cypress.Commands.add("verificaOrdenacao", (tipoOrdenacao) => {

  const precosExibidos = []
  
  cy.get(".shelf-item__price").each(($el) => {

    const preco = parseFloat($el.text().replace("$", "").replace(",", "").trim());
    precosExibidos.push(preco)

  }).then(() => {
   
    const precosOrdenados = [...precosExibidos].sort((a, b) => {  // Cria uma cópia e ordena localmente
      return tipoOrdenacao === "menorParaMaior" ? a - b : b - a
    })
    
    
    expect(precosExibidos).to.deep.equal(precosOrdenados) // Compara as duas listas
    
    
    if (tipoOrdenacao === "menorParaMaior") { // Validação adicional: verifica ordem item por item
      for (let i = 0; i < precosExibidos.length - 1; i++) {
        expect(precosExibidos[i]).to.be.lte(precosExibidos[i + 1])
      }
    } else {
      for (let i = 0; i < precosExibidos.length - 1; i++) {
        expect(precosExibidos[i]).to.be.gte(precosExibidos[i + 1])
      }
    }
    

    cy.log("Preços exibidos:", precosExibidos.join(", "))
    console.log("Preços exibidos:", precosExibidos)

    cy.log("Preços ordenados:", precosOrdenados.join(", "))
    console.log("Preços ordenados:", precosOrdenados)
  });
});
