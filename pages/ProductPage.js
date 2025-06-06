class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('a', { hasText: 'Add to cart' });
    this.productNameLocator = page.locator('.name');
    this.priceLocator = page.locator('.price-container');
    this.validatePaymentLocator = page.locator('tr.success td:nth-child(3)');
    this.buttonokaypayLocator = page.locator('.confirm', {hasText: 'OK'});
  }

  async getProductName() {
    return await  this.productNameLocator.textContent();
  }

   async getProductPrice() {
    const priceText = await this.priceLocator.textContent(); 
    const price = priceText?.match(/\d+/g)?.join('') || '';
    return price;
  }

  async addToCart() {
    await this.addToCartButton.click();
    await this.page.waitForEvent('dialog').then(dialog => dialog.accept());
  }

  async validatePayment() {
    return await this.validatePaymentLocator.textContent();
  }

  async confirmPayment() {
    await this.buttonokaypayLocator.click();
  }
}
export default ProductPage;