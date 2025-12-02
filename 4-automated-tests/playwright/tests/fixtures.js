// ====================================================================
// ARQUIVO: tests/fixtures.js
// Comandos para Playwright
// ====================================================================

import { test as base } from "@playwright/test"
import { expect } from "@playwright/test"

//login automatico
export async function fazLogIn(page, username = "demouser", password = "testingisfun99") {

  await page.goto("https://bstackdemo.com/")
  await page.waitForTimeout(2000)
  await page.locator("#signin").click()
  await page.waitForTimeout(1000)

  //preenche usuario
  await page.locator("#username").click()
  await page.waitForTimeout(500)
  await page.locator("input[autocomplete='off']").first().fill(username)
  await page.keyboard.press("Enter")

  //preenche senha
  await page.locator("#password").click()
  await page.waitForTimeout(500)
  await page.locator("input[autocomplete='off']").nth(1).fill(password)
  await page.keyboard.press("Enter")

  await page.locator("#login-btn").click()
  await page.waitForTimeout(2000)
}

//--------------------------------------------------------------------------------------------------


//adiciona produto no carrinho baseado no id
export async function adicionaProduto(page, id) {

  await page.locator("[id='" + id + "'] .shelf-item__buy-btn").click()
  await page.waitForTimeout(1000)
}

//--------------------------------------------------------------------------------------------------


//preenche os dados de compra
export async function preencheCompra(page) {

  await page.locator("#firstNameInput").click()
  await page.locator("#firstNameInput").fill("Felipe")

  await page.locator("#lastNameInput").click()
  await page.locator("#lastNameInput").fill("Roll")

  await page.locator("#addressLine1Input").click()
  await page.locator("#addressLine1Input").fill("Brasil, Brasil, 123")

  await page.locator("#provinceInput").click()
  await page.locator("#provinceInput").fill("RS")

  await page.locator("#postCodeInput").click()
  await page.locator("#postCodeInput").fill("12234456-34")

  await page.locator("#checkout-shipping-continue").click()
  await page.waitForTimeout(1000)
}

//--------------------------------------------------------------------------------------------------

//verifica os filtros aplicados
export async function verificaFiltro(page, marcas) {

  const marcasArray = Array.isArray(marcas) ? marcas : [marcas]

  console.log("Verificando filtros para: " + marcasArray.join(", "))

  //verifica se todos os checkboxes estão marcados
  for (const marca of marcasArray) {
    //tenta diferentes seletores
    const selectors = [
      "input[value='" + marca + "']",
      "input[value*='" + marca.toLowerCase() + "']",
      "input[value*='" + marca.toUpperCase() + "']",
      ":has-text('" + marca + "') input[type='checkbox']",
      "label:has-text('" + marca + "') input"
    ]

    let checkboxFound = false

    for (const selector of selectors) {
      const checkbox = page.locator(selector)
      const count = await checkbox.count()

      if (count > 0) {
        console.log("Checkbox " + marca + " encontrado com seletor: " + selector)
        await expect(checkbox).toBeChecked()
        checkboxFound = true
        break
      }
    }

    if (!checkboxFound) {
      console.log("ATENÇÃO: Checkbox " + marca + " não encontrado")
      //tira screenshot para debug
      await page.screenshot({ path: "screenshots/debug-checkbox-" + marca + ".png" })
    }
  }

  const produtosPorMarca = {

    "Apple": /(iPhone|iPad|MacBook|Apple)/i,
    "Samsung": /(Galaxy|Samsung)/i,
    "Google": /(Pixel|Google)/i,
    "OnePlus": /(OnePlus)/i
  }

  //cria regex combinado
  const padroesCombinados = marcasArray
    .map(marca => produtosPorMarca[marca]?.source || marca)
    .join("|")
  const regexCombinado = new RegExp(padroesCombinados, "i")

  console.log("Regex para validação: " + regexCombinado)

  //verifica todos os produtos
  const productTitles = page.locator(".shelf-item__title")
  const count = await productTitles.count()
  console.log("Produtos encontrados: " + count)

  for (let i = 0; i < count; i++) {
    const productName = await productTitles.nth(i).textContent()
    console.log("Produto " + (i + 1) + ": " + productName)

    if (!regexCombinado.test(productName)) {
      throw new Error("Produto '" + productName + "' não corresponde às marcas " + marcasArray.join(", "))
    }
  }

  console.log("✅ Filtro verificado para " + marcasArray.length + " marcas")
}

//--------------------------------------------------------------------------------------------------

//ordena os produtos por maior ou menor preço
export async function ordenarPor(page, tipoOrdenacao) {

  const opcoes = {
    "menorParaMaior": "lowestprice",
    "maiorParaMenor": "highestprice"
  }

  await page.locator("select").selectOption(opcoes[tipoOrdenacao])
  await page.waitForTimeout(2000)
}


//--------------------------------------------------------------------------------------------------

//verifica se a ordenação está correta
export async function verificaOrdenacao(page, tipoOrdenacao) {

  const precosExibidos = []
  const priceElements = page.locator(".shelf-item__price")
  const count = await priceElements.count()

  //coleta preços
  for (let i = 0; i < count; i++) {
    const priceText = await priceElements.nth(i).textContent()
    const preco = parseFloat(priceText.replace("$", "").replace(",", "").trim())
    precosExibidos.push(preco)
  }

  //ordena localmente para comparação
  const precosOrdenados = [...precosExibidos].sort((a, b) => {
    return tipoOrdenacao === "menorParaMaior" ? a - b : b - a
  })

  //compara as duas listas
  expect(precosExibidos).toEqual(precosOrdenados)

  //validação adicional: verifica ordem item por item
  if (tipoOrdenacao === "menorParaMaior") {
    for (let i = 0; i < precosExibidos.length - 1; i++) {
      expect(precosExibidos[i]).toBeLessThanOrEqual(precosExibidos[i + 1])
    }
  } else {
    for (let i = 0; i < precosExibidos.length - 1; i++) {
      expect(precosExibidos[i]).toBeGreaterThanOrEqual(precosExibidos[i + 1])
    }
  }

  console.log("Preços exibidos:", precosExibidos)
  console.log("Preços ordenados:", precosOrdenados)
}

//--------------------------------------------------------------------------------------------------


//comandos que juntam tudo acima para criar fixtures
export const test = base.extend({

  //página logada
  loggedInPage: async ({ page }, use) => {
    await fazLogIn(page)
    await use(page)
  },

  //página com produto no carrinho
  pageWithCartItem: async ({ page }, use) => {
    await fazLogIn(page)
    await adicionaProduto(page, 1)
    await use(page)
  },

  //página com múltiplos produtos
  pageWithMultipleItems: async ({ page }, use) => {
    await fazLogIn(page)
    await adicionaProduto(page, 1)
    await adicionaProduto(page, 2)
    await use(page)
  },

  //página pronta para checkout
  pageReadyForCheckout: async ({ page }, use) => {
    await fazLogIn(page)
    await adicionaProduto(page, 1)
    // Supondo que precisa clicar em checkout
    await page.locator('text=Checkout').click()
    await page.waitForTimeout(1000)
    await use(page)
  },
})

//exporta o expect também
export { expect } from '@playwright/test'