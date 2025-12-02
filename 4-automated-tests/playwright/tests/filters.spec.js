// ====================================================================
// CASOS DE TESTE AUTOMATIZADOS - PLAYWRIGHT
// Projeto: BStack Demo E-commerce
// ====================================================================

// ====================================================================
// ARQUIVO: tests/filters.spec.js
// Módulo: Filtros
// ====================================================================

import { test, expect, fazLogIn, verificaFiltro, ordenarPor, verificaOrdenacao } from './fixtures.js'

test.describe("Filtros", () => {

  //TC-AUTO-009: Filtrar produtos da marca Apple
  test("TC-AUTO-009: Deve filtrar produtos pela marca 'Apple'", async ({ page }) => {

    await fazLogIn(page)

    //seleciona o filtro Apple
    await page.locator("input[value='Apple']").click({ force: true })

    //verifica se o filtro está aplicado
    await expect(page.locator("input[value='Apple']")).toBeChecked()

    await page.waitForTimeout(2000)

    //valida que todos os produtos são da Apple
    const productTitles = page.locator(".shelf-item__title")
    const count = await productTitles.count()

    for (let i = 0; i < count; i++) {
      const productName = await productTitles.nth(i).textContent()
      expect(productName).toMatch(/(iPhone|iPad|MacBook|Apple)/i)
    }

    await page.waitForTimeout(2000)
    await page.screenshot({
      path: "screenshots/TC-AUTO-009-filtro-apple.png",
      fullPage: true
    })
  })

  //--------------------------------------------------------------------------------------------------

  //TC-AUTO-010: Filtrar produtos de várias marcas
  test("TC-AUTO-010: Deve filtrar produtos de várias marcas", async ({ page }) => {

    await fazLogIn(page)

    await page.locator("input[value='Apple']").click({ force: true })
    await page.waitForTimeout(2000)

    await page.locator("input[value='Samsung']").click({ force: true })
    await page.waitForTimeout(2000)

    //usa a função do fixtures
    await verificaFiltro(page, ["Apple", "Samsung"])

    await page.waitForTimeout(2000)
    await page.screenshot({
      path: "screenshots/TC-AUTO-010-filtros-diversos.png",
      fullPage: true
    })
  })

  //--------------------------------------------------------------------------------------------------

  //TC-AUTO-011: Ordenar por preço
  test("TC-AUTO-011: Deve ordenar pelo preço", async ({ page }) => {

    await fazLogIn(page)

    //ordena menor para maior
    await ordenarPor(page, "menorParaMaior")
    await verificaOrdenacao(page, "menorParaMaior")
    await page.screenshot({
      path: "screenshots/TC-AUTO-011-menor-maior.png",
      fullPage: true
    })

    //ordena maior para menor
    await ordenarPor(page, "maiorParaMenor")
    await verificaOrdenacao(page, "maiorParaMenor")
    await page.screenshot({
      path: "screenshots/TC-AUTO-011-maior-menor.png",
      fullPage: true
    })
  })

  //--------------------------------------------------------------------------------------------------

})