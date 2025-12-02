const { test, expect } = require('@playwright/test');
const { login } = require('../helpers/auth');

test.describe('Filtros', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-AUTO-009: Deve filtrar produtos pela marca Apple', async ({ page }) => {
    await login(page);
    
    await page.click('input[value="Apple"]', { force: true });
    await expect(page.locator('input[value="Apple"]')).toBeChecked();
    
    await page.waitForTimeout(2000);
    
    // Valida que todos os produtos são da Apple
    const productTitles = await page.locator('.shelf-item__title').allTextContents();
    
    for (const title of productTitles) {
      expect(title).toMatch(/(iPhone|iPad|MacBook|Apple)/i);
    }
    
    await page.screenshot({ 
      path: '4-automated-tests/playwright/screenshots/TC-AUTO-009-filtro-apple.png' 
    });
  });

  test('TC-AUTO-010: Deve filtrar produtos de várias marcas', async ({ page }) => {
    await login(page);
    
    await page.click('input[value="Apple"]', { force: true });
    await page.waitForTimeout(2000);
    
    await page.click('input[value="Samsung"]', { force: true });
    await page.waitForTimeout(2000);
    
    // Verifica que os filtros estão aplicados
    await expect(page.locator('input[value="Apple"]')).toBeChecked();
    await expect(page.locator('input[value="Samsung"]')).toBeChecked();
    
    await page.screenshot({ 
      path: '4-automated-tests/playwright/screenshots/TC-AUTO-010-filtros-diversos.png' 
    });
  });

  test('TC-AUTO-011: Deve ordenar pelo preço', async ({ page }) => {
    await login(page);
    
    // Ordena do menor para o maior
    await page.selectOption('select', 'lowestprice');
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: '4-automated-tests/playwright/screenshots/TC-AUTO-011-menor-maior.png' 
    });
    
    // Ordena do maior para o menor
    await page.selectOption('select', 'highestprice');
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: '4-automated-tests/playwright/screenshots/TC-AUTO-011-maior-menor.png' 
    });
  });
});