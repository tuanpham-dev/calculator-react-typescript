import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '+', exact: true }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '=' }).click();
  await page.locator('div').filter({ hasText: '4' }).nth(2).click();
});
