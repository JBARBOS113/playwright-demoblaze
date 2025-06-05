export async function waitFor(seconds, page) {
  await page.waitForTimeout(seconds * 1000);
}
export async function waitForElement(selector, page) {
  await page.waitForSelector(selector);
}