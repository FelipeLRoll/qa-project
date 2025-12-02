// ====================================================================
// CASOS DE TESTE AUTOMATIZADOS - PLAYWRIGHT
// Projeto: BStack Demo E-commerce
// ====================================================================

// ====================================================================
// ARQUIVO: tests/e2e-flow.spec.js
// Módulo: Fluxo de Compra
// ====================================================================

import { test, expect, fazLogIn, adicionaProduto } from './fixtures.js'

test.describe("Fluxo de Compra", () => {

  //TC-AUTO-008: Fluxo de compra
  test("TC-AUTO-008: Deve completar o fluxo de compra", async ({ page }) => {

    await fazLogIn(page)

    await adicionaProduto(page, 1)
    await adicionaProduto(page, 5)
    await adicionaProduto(page, 5)
    await adicionaProduto(page, 1)

    await page.locator(".buy-btn").click()
    await page.waitForTimeout(1000)

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
    await page.waitForTimeout(2000)

    await expect(page.locator("#confirmation-message")).toContainText("Your Order has been successfully placed.")

    await page.waitForTimeout(3000)
    await page.screenshot({
      path: "screenshots/TC-AUTO-008-fluxo-compra.png",
      fullPage: true
    })
  })

  //--------------------------------------------------------------------------------------------------

})