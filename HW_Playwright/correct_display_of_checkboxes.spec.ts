import { expect, test } from "@playwright/test";

test.describe("my_first_describe", async () => {
  test("when clicked, the checkbox becomes selected", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const checkbox1 = page.locator('//*[@id="checkboxes"]/input[1]');
    await checkbox1.click();
    await expect(checkbox1).toBeChecked({ checked: true });
  });

  test("when you go to the page, the second checkbox is active by default", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const checkbox2 = page.locator('//*[@id="checkboxes"]/input[2]');
    await expect(checkbox2).toBeChecked({ checked: true });
    const checkbox1 = page.locator('//*[@id="checkboxes"]/input[1]');
    await expect(checkbox1).toBeChecked({ checked: false });
  });
});
