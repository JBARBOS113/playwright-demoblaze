import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage.js';
import LoginPage from '../pages/LoginPage.js';
import SignUpPage from '../pages/SignUpPage.js';
import ProductPage from '../pages/ProductPage.js';
import CartPage from '../pages/CartPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';
import { generateUser } from '../utils/dataGenerator.js';
import { waitFor } from '../utils/waits.js';



test('Flujo completo de compra', async ({ page }) => {

  const home = new HomePage(page);
  const login = new LoginPage(page);
  const signup = new SignUpPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  const user = generateUser();

  await home.goto();
  await home.goToSignUp();
  await waitFor(3);
  await signup.signUp(user.username, user.password);
  await waitFor(3);
  await home.goToLogin();
  await waitFor(3);
  await login.loginUsers(user.username, user.password);
  await expect(home.loggedInUser).toContainText(user.username);
  
  await waitFor(3);
  await home.selectCategory('notebook');
  await home.selectProductByName('Sony vaio i5');
  await product.addToCart();

  const productName = await product.getProductName();
  const productPrice = await product.getProductPrice();
  console.log(`Product added is : ${productName} - Price: ${productPrice}`);
  expect(productName).toBe('Sony vaio i5');
  await home.goToCart();
  const valiatrprice = await product.validatePayment();
  console.log(`Price in cart is: ${valiatrprice}`);
  await waitFor(3);
  await cart.verifyProductInCart('Sony vaio i5');
  await waitFor(3);
  await cart.proceedToCheckout();
  await waitFor(3);

   if(productPrice === valiatrprice){
  
  await checkout.completePurchase({
    name: 'Test User',
    country: 'Colombia',
    city: 'Bogotá',
    creditCard: '4111111111111111',
    month: '12',
    year: '2025'
  });
  await checkout.verifyConfirmationMessage();
 }
 
 await waitFor(3);
 await product.confirmPayment();
 
 //await home.goToLogout();
 //await page.pause(); 

});
