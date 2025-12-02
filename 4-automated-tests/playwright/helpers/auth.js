/**
 * Realiza login no sistema
 * @param {import('@playwright/test').Page} page 
 * @param {string} username 
 * @param {string} password 
 */
async function login(page, username = 'demouser', password = 'testingisfun99') {
  await page.click('#signin');
  await page.fill('#username', username);
  await page.press('#username', 'Enter');
  await page.fill('#password', password);
  await page.press('#password', 'Enter');
  await page.click('#login-btn');
}

/**
 * Adiciona um produto ao carrinho
 * @param {import('@playwright/test').Page} page 
 * @param {number} productId 
 */
async function adicionaProduto(page, productId) {
  await page.click(`#${productId} .shelf-item__buy-btn`);
}

module.exports = {
  login,
  adicionaProduto
};