class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('a', { hasText: 'Add to cart' });
    this.productNameLocator = page.locator('.name');
    this.preceLocator = page.locator('.price-container');
  }

  async getProductName() {
  
    return await  this.productNameLocator.textContent();
  }
  async getProductPrice() {
    
    return await this.preceLocator.textContent();
  }
  async addToCart() {
    await this.addToCartButton.click();
    await this.page.waitForEvent('dialog').then(dialog => dialog.accept());
  }
}
export default ProductPage;