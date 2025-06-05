import { expect } from "@playwright/test";
import { waitFor } from "../utils/waits";

class HomePage {
  constructor(page) {
    this.page = page;
    this.signupLink = page.locator('#signin2');
    this.logoutLink = page.locator('#logout2');
    this.loginLink = page.locator('#login2');
    this.laptopsCategory = page.locator('a[onclick="byCat(\'notebook\')"]');
    this.productByName = (name) => page.locator('.card-title a', { hasText: name });
    this.cartLink = page.locator('#cartur');
    this.loggedInUser = page.locator('#nameofuser');
  }

  async goto() {
    await this.page.goto('/');
    await waitFor(4, this.page);
  }

  async goToSignUp() {
    await this.signupLink.click();
  }
  async goToLogout() {
    await this.logoutLink.click();
  }
  async goToLogin() {
    await this.loginLink.click();
  }
  
  async goToCart() {
    await this.cartLink.click();
  }

  async selectCategory(category = 'notebook') {
    await this.page.locator(`#itemc[onclick="byCat('${category}')"]`).click();
  }

  async selectProductByName(name) {
    await this.productByName(name).click();
  }
}
export default HomePage;