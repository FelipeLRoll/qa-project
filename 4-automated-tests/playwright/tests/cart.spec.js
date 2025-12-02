import { test, expect } from '@playwright/test';
import { login, adicionaProduto } from '../helpers/auth';

test.describe('Carrinho', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-AUTO-005: Deve adicionar produto no carrinho', async ({ page }) => {
    await login(page);
    
    await expect(page.locator('#1')).toBeVisible();
    await adicionaProduto(page, 1);
    
    await expect(page.locator('.float-cart__content')).toBeVisible();
    await expect(page.locator('.float-cart__shelf-container .shelf-item')).toBeVisible();
    await expect(page.locator('.float-cart__shelf-container .shelf-item .title'))
      .toContainText('iPhone 12');
    
    await page.screenshot({ 
      path: '4-automated-tests/playwright/screenshots/TC-AUTO-005-adicionar-produto.png' 
    });
  });

  test('TC-AUTO-006: Deve remover produto do carrinho', async ({ page }) => {
    await login(page);
    await adicionaProduto(page, 1);
    
    await page.click('.shelf-item__del');
    
    await page.screenshot({ 
      path: '4-automated-tests/playwright/screenshots/TC-AUTO-006-remover-produto.png' 
    });
  });

  test('TC-AUTO-007: Deve calcular o total do carrinho', async ({ page }) => {
    await login(page);
    
    await adicionaProduto(page, 1);
    await adicionaProduto(page, 2);
    
    // Pega o preço do item 1
    const price1Text = await page.locator('#1 .shelf-item__price').textContent();
    await page.click('.bag');
    await expect(
      page.locator('.shelf-item:has-text("iPhone 12") .shelf-item__price')
    ).toContainText(price1Text ?? '');
    
    const priceNumber1 = parseFloat((price1Text ?? '0').replace(/[^0-9.]/g, ''));
    console.log('Preço item 1:', priceNumber1);
    
    // Pega o preço do item 2
    const price2Text = await page.locator('#2 .shelf-item__price').textContent();
    await page.click('.bag');
    await expect(
      page.locator('.shelf-item:has-text("iPhone 12 Mini") .shelf-item__price')
    ).toContainText(price2Text ?? '');
    
    const priceNumber2 = parseFloat((price2Text ?? '0').replace(/[^0-9.]/g, ''));
    console.log('Preço item 2:', priceNumber2);
    
    // Calcula o total esperado
    const totalEsperado = (priceNumber1 + priceNumber2).toFixed(2);
    console.log('Total esperado:', totalEsperado);
    
    // Verifica o total no carrinho
    const cartTotalText = await page.locator('.sub-price__val').textContent();
    const cartTotal = parseFloat((cartTotalText ?? '0').replace(/[^0-9.]/g, '')).toFixed(2);
    
    expect(cartTotal).toBe(totalEsperado);
    console.log(`Valor Calculado: ${totalEsperado} - Valor Esperado: ${cartTotal}`);
    
    await page.screenshot({ 
      path: '4-automated-tests/playwright/screenshots/TC-AUTO-007-calcular-carrinho.png' 
    });
  });
});