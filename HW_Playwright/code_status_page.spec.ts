import { expect, test } from "@playwright/test";

test("code status page", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/redirector");
  const link1 = page.locator('//*[@id="redirect"]');
  await link1.click();
  const statusCode200 = page.locator('//*[@id="content"]//*[1]/a');
  await statusCode200.click();
  const page200 = page.locator('//*[@id="content"]//p');
  await expect(page200).toContainText("\n" + "    This page returned a 200 status code.");
  await expect(page).toHaveURL(/.*200/);
  const linkHere = page.locator('//*[@id="page-footer"]//*/a');
  await linkHere.click();
  await page.goto("https://elementalselenium.com/");
  const selen = page.locator('//p[@class="subheader"]');
  await expect(selen).toContainText("Sponsored by Sauce Labs");
});
