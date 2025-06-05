class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('#name');
    this.countryInput = page.locator('#country');
    this.cityInput = page.locator('#city');
    this.cardInput = page.locator('#card');
    this.monthInput = page.locator('#month');
    this.yearInput = page.locator('#year');
    this.purchaseBtn = page.locator("button", { hasText: "Purchase" });
    this.confirmation = page.locator('.sweet-alert.showSweetAlert');
  }

  async completePurchase({ name, country, city, creditCard, month, year }) {
    await this.nameInput.fill(name);
 
    await this.countryInput.fill(country);
   
    await this.cityInput.fill(city);
   
    await this.cardInput.fill(creditCard);
    
    await this.monthInput.fill(month);
   
    await this.yearInput.fill(year);
   
    await this.purchaseBtn.click();
  }

  async verifyConfirmationMessage() {
    await this.confirmation.waitFor();
  }
}
export default CheckoutPage;