import { expect, test } from "@playwright/test";

test("successful_authorization_and_message_output", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  const login = page.locator('(//*[@class="large-6 small-12 columns"]/*[@name="username"])');
  await login.fill("tomsmith");
  const password = page.locator("[name='password']");
  await password.fill("SuperSecretPassword!");
  const button = page.locator('//*[@id="login"]/button');
  await button.click();
  await expect(page).toHaveURL(/.*secure/);
  const flash = page.locator('(//*[@id="flash"])');
  await expect(flash).toHaveText("You logged into a secure area!\n×");
  const buttonLogin = page.locator('//*[contains(text(),"Lo")]');
  await buttonLogin.click();
  await expect(page).toHaveURL(/.*login/);
});
