const { test, expect } = require('@playwright/test');
const { login } = require('../helpers/auth');

test.describe('Autenticação - Login e Logout', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-AUTO-001: Deve fazer login com credenciais válidas', async ({ page }) => {
    await page.click('#signin');
    await expect(page.locator('.css-1hwfws3')).toBeVisible();
    
    // Usuário
    await page.click('#username');
    await expect(page.locator('#username')).toContainText('demouser');
    await page.fill('#username', 'demouser');
    await page.press('#username', 'Enter');
    
    // Senha
    await page.click('#password');
    await expect(page.locator('#password')).toContainText('testingisfun99');
    await page.fill('#password', 'testingisfun99');
    await page.press('#password', 'Enter');
    
    await page.click('#login-btn');
    
    // Validações
    await expect(page.locator('#signin')).not.toBeVisible();
    await expect(page.locator('#username')).toContainText('demouser');
    
    await page.screenshot({ 
      path: '4-automated-tests/playwright/screenshots/TC-AUTO-001-login-sucesso.png' 
    });
  });

  test('TC-AUTO-002: Não deve permitir login com username inválido', async ({ page }) => {
    await page.click('#signin');
    await expect(page.locator('.css-1hwfws3')).toBeVisible();
    
    await page.click('#username');
    await page.fill('#username', 'randomuser');
    await page.press('#username', 'Enter');
    
    await page.click('#login-btn');
    
    await expect(page.locator('.api-error')).toContainText('Invalid Username');
    
    await page.screenshot({ 
      path: '4-automated-tests/playwright/screenshots/TC-AUTO-002-usuario-incorreto.png' 
    });
  });

  test('TC-AUTO-003: Não deve permitir login com senha inválida', async ({ page }) => {
    await page.click('#signin');
    await expect(page.locator('.css-1hwfws3')).toBeVisible();
    
    await page.click('#username');
    await page.fill('#username', 'demouser');
    await page.press('#username', 'Enter');
    
    await page.click('#password');
    await page.fill('#password', 'randompassword');
    await page.press('#password', 'Enter');
    
    await page.click('#login-btn');
    
    await expect(page.locator('.api-error')).toContainText('Invalid Password');
    
    await page.screenshot({ 
      path: '4-automated-tests/playwright/screenshots/TC-AUTO-003-senha-incorreta.png' 
    });
  });

  test('TC-AUTO-004: Deve fazer logout com sucesso', async ({ page }) => {
    // Login usando helper
    await login(page);
    
    // Validações após login
    await expect(page.locator('#signin')).not.toBeVisible();
    await expect(page.locator('#username')).toContainText('demouser');
    
    // Logout
    await page.click('#username');
    
    // Validações após logout
    await expect(page.locator('#signin')).toBeVisible();
    
    await page.screenshot({ 
      path: '4-automated-tests/playwright/screenshots/TC-AUTO-004-logout.png' 
    });
  });
});