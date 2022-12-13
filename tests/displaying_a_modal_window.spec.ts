import { expect, test } from "@playwright/test";

test("successful_authorization_and_message_output", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/entry_ad");
  const link = page.locator('(//*[@id="restart-ad"])');
  await link.click();
  const modalWindow = page.locator("modal");
  const modalText = page.locator('//*[contains(text(), "This")]');
  await expect(modalText).toHaveText("This is a modal window");
  const linkClose = page.locator('(//*[contains(text(),"Cl")])');
  await linkClose.click();
  await expect(modalWindow).not.toBeVisible();
});
