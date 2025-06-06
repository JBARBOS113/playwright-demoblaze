export function waitFor(seconds) {
  return new Promise((res) => setTimeout(res, seconds * 1000));
}

export async function waitForElement(selector, page) {
  await page.waitForSelector(selector);
}

