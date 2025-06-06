// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',           // Carpeta donde están tus pruebas
  timeout: 80 * 1000,           // Tiempo máximo por test
  expect: {
    timeout: 5000,              // Timeout para aserciones
  },
  use: {
    headless: false,            // Abre el navegador visible
    viewport: { width: 1280, height: 800 }, // Tamaño de la ventana del 
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure', // Graba video si falla el test
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    baseURL: 'https://www.demoblaze.com/',
    actionTimeout: 0,
    navigationTimeout: 15000, // Tiempo máximo para navegar a una página
    slowMo: 500                 // Retardo entre acciones (ideal para ver pasos)
  },
  reporter: [['html', { open: 'never' }]], // Puedes cambiar a 'on' para abrir al final
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
   /* {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },*/
  ],
});
// Puedes agregar más configuraciones según tus necesidades