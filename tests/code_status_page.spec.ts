import { expect, test } from "@playwright/test";

test("", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/redirector");
  const link1 = page.locator('//*[@id="redirect"]');
  await link1.click();
  const statusCode200 = page.locator('//*[@id="content"]//*[1]/a');
  await statusCode200.click();
  await expect(page).toHaveURL(/.*200/);
  const button200 = page.locator('//*[contains(text(), "here")]');
  await button200.click();
  await expect(page).toHaveURL(/.*status_codes/);
  const linkHere = page.locator('//*[@id="page-footer"]//*/a');
  await linkHere.click();
  const selen = page.locator("/html/body/header//*/p/text()");
  //await expect(selen).toHaveText("Sponsored by\n×");//не понимаю что не так с выводом текста в строке, по xPath на 15 строке ищет - проверяла
});