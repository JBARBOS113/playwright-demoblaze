class HomePage {
  constructor(page) {
    this.page = page;
    this.laptopsCategory = page.locator('xpath=//a[@id="itemc" and contains(text(), "Laptops")]');
    this.firstProduct = page.locator('.card-title a').first();
    this.looktoCartButton = page.locator('#cartur');
    this.loginButton = page.locator('#login2');
    this.validatelogin = page.locator('#nameofuser');
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async selectLaptopsCategory() {
    await this.laptopsCategory.click();
  }

  async selectFirstProduct() {
    await this.firstProduct.click();
  }
  async goToCart() {
    await this.looktoCartButton.click();
  }
  async goToLogin() {
    await this.loginButton.click();
  }
  async validateLogin() {
    return await this.validatelogin.textContent();
  }
}

module.exports = HomePage;
