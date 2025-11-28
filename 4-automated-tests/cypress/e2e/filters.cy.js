// ====================================================================
// CASOS DE TESTE AUTOMATIZADOS - CYPRESS
// Projeto: BStack Demo E-commerce
// ====================================================================

// ====================================================================
// ARQUIVO: cypress/e2e/filters.cy.js
// Módulo: Autenticação
// ==================================================================== 
 
describe ("Filtros", () => {
  
  beforeEach(() => {
    // Visitar a página antes de cada teste
    cy.visit("https://bstackdemo.com/")
  })


 //TC-AUTO-009:  Filtrar produtos da marca Apple
  it("TC-AUTO-009: Deve filtar produtos pela marca 'Apple'", () => { 

   cy.fazLogIn()


   cy.get("input[value='Apple']").click({force: true}) //seleciona o filtro Apple | html do site é:  <input type="checkbox" value="Apple">


   cy.get("input[value='Apple']").should("be.checked") //verifica se o filtro está aplicado  


   cy.wait(2000)


   cy.get(".shelf-item__title").each(($el) => { // Valida que todos os produtos são da Apple

       const productName = $el.text(); //cria uma constante do nome do produto
  
       expect(productName).to.match(/(iPhone|iPad|MacBook|Apple)/i) // Verifica se contém iPhone, iPad, MacBook, etc.
    });

   cy.wait(2000)
   cy.screenshot("TC-AUTO-009-filtro-apple", { overwrite: true })
  })



    //--------------------------------------------------------------------------------------------------



 //TC-AUTO-010:  Filtrar produtos de várias marcas
  it("TC-AUTO-010: Deve filtar produtos de várias marcas", () => { 

   cy.fazLogIn()


   cy.get("input[value='Apple']").click({force: true})
   cy.wait(2000)

   cy.get("input[value='Samsung']").click({force: true})
   cy.wait(2000)


   cy.verificaFiltro(["Apple", "Samsung"])
  

   cy.wait(2000)
   cy.screenshot("TC-AUTO-010-filtros-diversos", { overwrite: true })
  })


   //--------------------------------------------------------------------------------------------------


   //TC-AUTO-011:  Ordenar por preço
  it("TC-AUTO-011: Deve ordenar pelo preço", () => { 

   cy.fazLogIn()

   cy.ordenarPor("menorParaMaior")
   cy.verificaOrdenacao("menorParaMaior")
   cy.screenshot("TC-AUTO-011-menor-maior", { overwrite: true })
  

   cy.ordenarPor("maiorParaMenor")
   cy.verificaOrdenacao("maiorParaMenor")
   cy.screenshot("TC-AUTO-011-maior-menor", { overwrite: true })
  })

})