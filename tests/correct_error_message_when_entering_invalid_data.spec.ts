import { expect, test } from "@playwright/test";

test("successful_authorization_and_message_output", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  const login = page.locator('(//*[@class="large-6 small-12 columns"]/*[@name="username"])');
  await login.fill("Tina");
  const password = page.locator("[name='password']");
  await password.fill("Turner");
  const buttonPage = page.locator('//*[@id="login"]/button');
  await buttonPage.click();
  const flash = page.locator('//*[contains(text(),"Your username")]');
  await expect(flash).toHaveText("Your username is invalid!\n×");
});
