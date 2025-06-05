class SignUpPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#sign-username');
    this.passwordInput = page.locator('#sign-password');
    this.signupButton = page.locator('#signInModal .btn-primary');
  }

  async signUp(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signupButton.click();
    await this.page.waitForEvent('dialog').then(dialog => dialog.accept());

  }
}
export default SignUpPage;
// This code defines a SignUpPage class that interacts with a sign-up form on a web page.