// ====================================================================
// CASOS DE TESTE AUTOMATIZADOS - PLAYWRIGHT
// Projeto: BStack Demo E-commerce
// ====================================================================

// ====================================================================
// ARQUIVO: tests/cart.spec.js
// Módulo: Carrinho
// ====================================================================

import { test, expect, fazLogIn, adicionaProduto } from './fixtures.js'

test.describe("Carrinho", () => {

  //TC-AUTO-005: Adicionar Produto ao Carrinho
  test("TC-AUTO-005: Deve adicionar produto no carrinho", async ({ loggedInPage }) => {

    const page = loggedInPage

    //valida que o produto existe
    await expect(page.locator("[id='1']")).toBeVisible()

    //adiciona produto
    await page.locator("[id='1'] .shelf-item__buy-btn").click()
    await page.waitForTimeout(1000)

    //validações
    await expect(page.locator(".float-cart__content")).toBeVisible() //valida que a aba do carrinho existe
    await expect(page.locator(".float-cart__shelf-container .shelf-item")).toBeVisible() //verifica que existe algum item no carrinho
    await expect(page.locator(".float-cart__shelf-container .shelf-item .title")).toContainText("iPhone 12") //verifica se o item no carrinho é o mesmo adicionado

    await page.waitForTimeout(2000)
    await page.screenshot({
      path: "screenshots/TC-AUTO-005-adicionar-produto.png",
      fullPage: true
    })
  })

  //--------------------------------------------------------------------------------------------------

  //TC-AUTO-006: Remove Produto do Carrinho
  test("TC-AUTO-006: Deve remover produto do carrinho", async ({ pageWithCartItem }) => {

    const page = pageWithCartItem

    //aguarda carrinho aparecer
    await expect(page.locator(".float-cart__content")).toBeVisible()

    //remove item do carrinho
    await page.locator(".shelf-item__del").click()
    await page.waitForTimeout(2000)

    //valida que o item foi removido
    await expect(page.locator(".float-cart__shelf-container .shelf-item")).not.toBeVisible()

    await page.screenshot({
      path: "screenshots/TC-AUTO-006-remover-produto.png",
      fullPage: true
    })
  })

  //--------------------------------------------------------------------------------------------------

  //TC-AUTO-007: Calcula o total do carrinho
  test("TC-AUTO-007: Deve calcular o total do carrinho", async ({ page }) => {

    await fazLogIn(page)
    await adicionaProduto(page, 1)
    await adicionaProduto(page, 2)

    //função para extrair preço como número
    const extractPrice = (text) => {

      console.log("Texto original: '${text}'")
      const cleaned = text.replace("$", "").replace(",", "").trim()
      console.log("Texto limpo: '${cleaned}'")
      const number = parseFloat(cleaned)
      console.log("Número parseFloat: ${number}")
      const fixed = number.toFixed(2)
      console.log("Com 2 decimais: ${fixed}")
      return fixed
    }

    //preço item 1
    const priceText1 = await page.locator("[id='1'] .shelf-item__price").textContent()
    const price1 = extractPrice(priceText1)

    //preço item 2
    const priceText2 = await page.locator("[id='2'] .shelf-item__price").textContent()
    const price2 = extractPrice(priceText2)

    //total esperado
    const expectedTotal = (parseFloat(price1) + parseFloat(price2)).toFixed(2)
    console.log("\nCálculo: ${price1} + ${price2} = ${expectedTotal}")

    //total do carrinho
    const cartTotalText = await page.locator(".sub-price__val").textContent()
    const cartTotal = extractPrice(cartTotalText)

    // Debug final
    console.log("\n=== RESULTADO ===")
    console.log("Esperado: ${expectedTotal}")
    console.log("Obtido:   ${cartTotal}")
    console.log("São iguais? ${expectedTotal === cartTotal}")

    //comparação tolerante a pequenas diferenças
    expect(parseFloat(cartTotal)).toBeCloseTo(parseFloat(expectedTotal), 2)

    await page.screenshot({
      path: "screenshots/TC-AUTO-007-calcular-carrinho.png",
      fullPage: true
    })
  })
})
