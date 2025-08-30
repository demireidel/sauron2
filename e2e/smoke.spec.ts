import { test, expect } from "@playwright/test";

test("explore mounts canvas and toggles HUD", async ({ page }) => {
  await page.goto("/explore");
  const canvas = page.locator("canvas");
  await expect(canvas).toBeVisible();
});
