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

    test('Continue with assertion', async ({page}) => {
        // assertion visibility
        await page.goto('https://the-internet.herokuapp.com')
        await expect(page.locator('h1')).toBeVisible()
        await page.pause()

        // assert element to have text
        await expect(page.locator('h2')).toHaveText('Available Examples')

        // assert contains text
        await expect(page.locator('body')).toContainText('WYSIWYG')
        await page.pause()
    })

    test.only('Continue with assertions part 2', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com')

        // assert count
        await expect(page.locator('a')).toHaveCount(46)
        await page.pause()
    })
})