class CartPage {
  constructor(page) {
    this.page = page;
    this.productNames = page.locator('.success td:nth-child(2)');
    this.placeOrderBtn = page.locator('button', { hasText: 'Place Order' });
  }

  async verifyProductInCart(name) {
    await this.productNames.locator(`text=${name}`).waitFor();
  }

  async proceedToCheckout() {
    await this.placeOrderBtn.click();
  }
}
export default CartPage;