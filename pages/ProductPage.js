class ProductPage {
  constructor(page) {
    this.page = page;
    this.productName = page.locator('.name');
    this.productPrice = page.locator('.price-container');
    this.addToCartButton = page.locator('a', { hasText: 'Add to cart' });
  }

  async getProductName() {
    return await this.productName.textContent();
  }

  async getProductPrice() {
    return await this.productPrice.textContent();
  }
  async clickAddToCart() {
    await this.addToCartButton.waitFor({ state: 'visible' });
    await this.addToCartButton.click();
    await this.page.waitForTimeout(1000)
  }
}

module.exports = ProductPage;
