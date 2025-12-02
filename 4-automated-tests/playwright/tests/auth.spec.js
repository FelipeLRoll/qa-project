// ====================================================================
// CASOS DE TESTE AUTOMATIZADOS - PLAYWRIGHT
// Projeto: BStack Demo E-commerce
// ====================================================================

// ====================================================================
// ARQUIVO: tests/auth.spec.js
// Módulo: Autenticação
// ====================================================================

import { test, expect } from '@playwright/test';

// Função de login reutilizável (similar ao comando customizado do Cypress)
async function fazLogin(page) {
  
  await page.goto('https://bstackdemo.com/');
  await page.waitForTimeout(2000);
  await page.locator('#signin').click();

  
  // Usuário
  await page.locator('#username').click();
  await expect(page.locator('#username')).toContainText('demouser');
  await page.locator('#username').fill('demouser');
  await page.keyboard.press('Enter');
  
  // Senha
  await page.locator('#password').click();
  await expect(page.locator('#password')).toContainText('testingisfun99');
  await page.locator('#password').fill('testingisfun99');
  await page.keyboard.press('Enter');
  
  await page.locator('#login-btn').click();
}

test.describe("Autenticação - Login e Logout", () => {
  
  // TC-AUTO-001: Login com Sucesso
  test("TC-AUTO-001: Deve fazer login com credenciais válidas", async ({ page }) => {
    await page.goto("https://bstackdemo.com/");
    await page.waitForTimeout(2000);
    await page.locator("#signin").click();

    await expect(page.locator(".css-1hwfws3")).toBeVisible();
    
    // Usuário
    await page.locator("#username").click();
    await expect(page.locator("#username")).toContainText("demouser");
    await page.locator("#username").fill("demouser");
    await page.keyboard.press("Enter");

    // Senha
    await page.locator("#password").click();
    await expect(page.locator("#password")).toContainText("testingisfun99");
    await page.locator("#password").fill("testingisfun99");
    await page.keyboard.press("Enter");

    await page.locator("#login-btn").click();

    // Validações
    await expect(page.locator("#signin")).not.toBeVisible(); // Botão Sign In desaparece
    await expect(page.locator("#username")).toContainText("demouser"); // Nome do usuário aparece

    // Screenshot de evidência
    await page.waitForTimeout(2000);
    await page.screenshot({ 
      path: "screenshots/TC-AUTO-001-login-sucesso.png",
      fullPage: true 
    });
  });

  //--------------------------------------------------------------------------------------------------

  // TC-AUTO-002: Login com Username Inválido
  test("TC-AUTO-002: Não deve permitir login com username inválido", async ({ page }) => { 
    await page.goto("https://bstackdemo.com/");
    await page.waitForTimeout(2000);
    await page.locator("#signin").click();

    await expect(page.locator(".css-1hwfws3")).toBeVisible();

    await page.locator("#username").click();
    await page.locator("#username").fill("randomuser");
    await page.keyboard.press("Enter");

    await page.locator("#login-btn").click();

    await expect(page.locator(".api-error")).toContainText("Invalid Username");

    await page.waitForTimeout(2000);
    await page.screenshot({ 
      path: "screenshots/TC-AUTO-002-usuario-incorreto.png",
      fullPage: true 
    });
  });

  //--------------------------------------------------------------------------------------------------

  // TC-AUTO-003: Login com senha Inválida
  test("TC-AUTO-003: Não deve permitir login com senha inválida", async ({ page }) => { 
    await page.goto("https://bstackdemo.com/");
    await page.waitForTimeout(2000);
    await page.locator("#signin").click();

    await expect(page.locator(".css-1hwfws3")).toBeVisible();

    await page.locator("#username").click();
    await page.locator("#username").fill("demouser");
    await page.keyboard.press("Enter");

    await page.locator("#password").click();
    await page.locator("#password").fill("randompassword");
    await page.keyboard.press("Enter");

    await page.locator("#login-btn").click();

    await expect(page.locator(".api-error")).toContainText("Invalid Password");

    await page.waitForTimeout(2000);
    await page.screenshot({ 
      path: "screenshots/TC-AUTO-003-senha-incorreta.png",
      fullPage: true 
    });
  });

  //--------------------------------------------------------------------------------------------------

  // TC-AUTO-004: Logout com Sucesso
  test("TC-AUTO-004: Deve fazer logout com sucesso", async ({ page }) => { 
    // Executa o login usando a função reutilizável
    await fazLogin(page);

    // Validações após login
    await expect(page.locator("#signin")).not.toBeVisible(); // Botão Sign In desaparece
    await expect(page.locator("#username")).toContainText("demouser"); // Nome do usuário aparece

    // Logout
    await page.locator("#username").click(); // No seu código original tinha "#signin", mas após login o botão signin não existe mais
    // Se for um menu dropdown com logout, ajuste o seletor conforme necessário
    await page.locator('text=Sign Out').click(); // Ajuste o seletor conforme a interface real

    // Validações após logout
    await expect(page.locator("#signin")).toBeVisible(); // Botão Sign In aparece
    await expect(page.locator("#username")).not.toBeVisible(); // Nome do usuário não aparece     

    await page.waitForTimeout(2000);
    await page.screenshot({ 
      path: "screenshots/TC-AUTO-004-logout.png",
      fullPage: true 
    });
  });
});