import {test, expect} from "@playwright/test";

test.describe("learn assertions", () => {
    test('verify web page behavior', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com')
        // first assertion to have URL
        await expect(page).toHaveURL('https://the-internet.herokuapp.com')
        await page.pause()

        // to have title
        await expect(page).toHaveTitle('The Internet')
    })

    test.only('Continue with assertion', async ({page}) => {
        // assertion visibility
        await page.goto('https://the-internet.herokuapp.com')
        await expect(page.locator('h1')).toBeVisible()

        // assert element to have text
        
    })
})