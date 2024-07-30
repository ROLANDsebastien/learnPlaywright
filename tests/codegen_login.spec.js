import {test, expect} from '@playwright/test';

test('codegen login', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.pause()
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', {name: ' Login'}).click();
    await expect(page.getByText('You logged into a secure area')).toBeVisible();
    await expect(page.locator('h4')).toContainText('Welcome to the Secure Area. When you are done click logout below.');
    await page.getByRole('link', {name: 'Logout'}).click();
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('11');
    await expect(page.getByLabel('Username')).toHaveValue('11');
    await page.pause()
});