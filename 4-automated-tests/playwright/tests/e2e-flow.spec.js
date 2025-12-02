const { test, expect } = require('@playwright/test');
const { login, adicionaProduto } = require('../helpers/auth');

test.describe('Fluxo de Compra', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-AUTO-008: Deve completar o fluxo de compra', async ({ page }) => {
    await login(page);
    
    await adicionaProduto(page, 1);
    await adicionaProduto(page, 5);
    await adicionaProduto(page, 4);
    await adicionaProduto(page, 1);
    
    await page.click('.buy-btn');
    
    await page.click('#firstNameInput');
    await page.fill('#firstNameInput', 'Felipe');
    
    await page.click('#lastNameInput');
    await page.fill('#lastNameInput', 'Roll');
    
    await page.click('#addressLine1Input');
    await page.fill('#addressLine1Input', 'Brasil, Brasil, 123');
    
    await page.click('#provinceInput');
    await page.fill('#provinceInput', 'RS');
    
    await page.click('#postCodeInput');
    await page.fill('#postCodeInput', '12234456-34');
    
    await page.click('#checkout-shipping-continue');
    
    await expect(page.locator('#confirmation-message'))
      .toContainText('Your Order has been successfully placed.');
    
    await page.screenshot({ 
      path: '4-automated-tests/playwright/screenshots/TC-AUTO-008-fluxo-compra.png' 
    });
  });
});