// ====================================================================
// CASOS DE TESTE AUTOMATIZADOS - PLAYWRIGHT
// Projeto: BStack Demo E-commerce
// ====================================================================

// ====================================================================
// ARQUIVO: playwright/tests/auth.spec.js
// Módulo: Autenticação
// ====================================================================

import { test, expect, fazLogIn } from './fixtures.js'

test.describe("Autenticação - Login e Logout", () => {

  //TC-AUTO-001: Login com Sucesso
  test("TC-AUTO-001: Deve fazer login com credenciais válidas", async ({ page }) => {

    await page.goto("https://bstackdemo.com/")
    await page.waitForTimeout(2000)
    
    //usa a função do fixtures
    await fazLogIn(page)
    
    //validações
    await expect(page.locator("[id*='user'], [class*='user'], [class*='account']"))
                 .toContainText("demouser")
    
    //screenshot
    await page.screenshot({ 
      path: "screenshots/TC-AUTO-001-login-sucesso.png",
      fullPage: true
    })
  })

  //--------------------------------------------------------------------------------------------------

  //TC-AUTO-002: Login com Username Inválido
  test("TC-AUTO-002: Não deve permitir login com username inválido", async ({ page }) => { 

    await page.goto("https://bstackdemo.com/")
    await page.waitForTimeout(2000)
    await page.locator("#signin").click()

    await page.locator("#username").click()
    await page.locator("input[autocomplete='off']").first().fill("randomuser")
    await page.keyboard.press("Enter")

    await page.locator("#login-btn").click()

    await expect(page.locator(".api-error")).toContainText("Invalid Username")

    await page.waitForTimeout(2000)
    await page.screenshot({ 
      path: "screenshots/TC-AUTO-002-usuario-incorreto.png",
      fullPage: true 
    })
  })

  //--------------------------------------------------------------------------------------------------

  //TC-AUTO-003: Login com senha Inválida
  test("TC-AUTO-003: Não deve permitir login com senha inválida", async ({ page }) => {
     
    await page.goto("https://bstackdemo.com/")
    await page.waitForTimeout(2000)
    await page.locator("#signin").click()

    //seleciona usuário correto (demouser)
    await page.locator("#username").click()
    await page.locator("input[autocomplete='off']").first().fill("demouser")
    await page.keyboard.press("Enter")

    //seleciona senha incorreta
    await page.locator("#password").click()
    await page.locator("input[autocomplete='off']").nth(1).fill("randompassword")
    await page.keyboard.press("Enter")

    await page.locator("#login-btn").click()

    //valida mensagem de erro
    await expect(page.locator(".api-error")).toContainText("Invalid Password")

    await page.waitForTimeout(2000)
    await page.screenshot({ 
      path: "screenshots/TC-AUTO-003-senha-incorreta.png",
      fullPage: true 
    })
  })

  //--------------------------------------------------------------------------------------------------

    
  //TC-AUTO-004: Logout com Sucesso - USANDO FIXTURE
  test("TC-AUTO-004: Deve fazer logout com sucesso", async ({ loggedInPage }) => { 

    const page = loggedInPage
    
    //validações após login
    const signinElement = page.locator("#signin")
    await expect(signinElement).not.toContainText("Sign In")
    
    await expect(page.locator("button:has-text('demouser'), span:has-text('demouser')"))
                     .toBeVisible()

    //faz logout
    await page.locator("text=Logout").click()
    await page.waitForTimeout(2000)

    //validações após logout
    await expect(page.locator("#signin")).toBeVisible()
    await expect(page.locator("#signin")).toContainText('Sign In')
    await expect(page.locator("text=demouser")).not.toBeVisible()
    
    await page.screenshot({ 
      path: "screenshots/TC-AUTO-004-logout.png",
      fullPage: true 
    })
  })
})