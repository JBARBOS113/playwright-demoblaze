const { test, expect } = require('@playwright/test');
const {waitFor} = require('../utils/waits');
const { waitForElement } = require('../utils/waits');
const HomePage = require('../pages/HomePage');
const ProductPage = require('../pages/ProductPage');

test('Seleccionar laptop y verificar detalles', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  await homePage.goto();
  await waitFor(2, page); // Espera de 2 segundos
  await homePage.selectLaptopsCategory();
  await waitForElement('.card-title a', page); // Espera a que el primer producto esté visible
  await homePage.selectFirstProduct();
  await waitFor(3, page); 
 
  const name = await productPage.getProductName();
  const price = await productPage.getProductPrice();

  console.log('Producto:', name);
  console.log('Precio:', price);

  expect(name).not.toBeNull();
  expect(price).toContain('$');
 await waitFor(3, page); 
  page.once('dialog', async (dialog) => {
    console.log('Alerta:', dialog.message());
    await dialog.accept();
  });

 await waitFor(4, page); // Espera de 2 segundos antes de hacer clic en "Add to cart"
 await productPage.clickAddToCart();
 await waitFor(4, page); // Espera de 2 segundos para que se procese la acción
 await homePage.goToCart();

});
