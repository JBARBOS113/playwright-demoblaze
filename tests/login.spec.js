/*const {test, expect} = require('@playwright/test');
const {waitFor} = require('../utils/waits');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

test('Login con usuario y contraseña', async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    
    await homePage.goto();
    await waitFor(2, page); // Espera de 2 segundos
    await homePage.goToLogin();
    await waitFor(2, page); // Espera de 2 segundos para que la página de login se cargue
    await loginPage.loginUsers('jbarbos113', 'jbarbos113'); // Reemplaza con las credenciales de prueba
    await waitFor(4, page); // Espera de 2 segundos para que se procese la acción
    const loggedInUser = await homePage.validateLogin();
    expect(loggedInUser).toContain('Welcome jbarbos113'); // Verifica que el usuario esté logueado correctamente
    console.log('Usuario logueado Exitoso:', loggedInUser);
   
});*/