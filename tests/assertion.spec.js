import {test, expect} from "@playwright/test";
import {type} from "node:os";

test.describe("learn assertions", () => {
    test('verify web page behavior', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com')
        // first assertion to have URL
        await expect(page).toHaveURL('https://the-internet.herokuapp.com')

        // to have title
        await expect(page).toHaveTitle('The Internet')
    })

    test('Continue with assertion part 1', async ({page}) => {
        // assertion visibility
        await page.goto('https://the-internet.herokuapp.com')
        await expect(page.locator('h1')).toBeVisible()

        // assert element to have text
        await expect(page.locator('h2')).toHaveText('Available Examples')

        // assert contains text
        await expect(page.locator('body')).toContainText('WYSIWYG')
    })

    test('Continue with assertions part 2', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com')

        // assert count
        await expect(page.locator('a')).toHaveCount(46)

        // to be checked
        await page.goto('https://the-internet.herokuapp.com/checkboxes')

        await page.waitForLoadState('networkidle')

        await page.getByRole('checkbox').nth(0).check();
        await page.getByRole('checkbox').nth(1).uncheck();

        await expect(page.getByRole('checkbox').nth(0)).toBeChecked()
        await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked()
    })

    test('Continue with assertions part 3', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/login')

        // have value
        await page.locator('#username').fill('tomsmith')
        await expect(page.locator('#username')).toHaveValue('tomsmith')

        // element is enable
        await expect(page.locator('button[type = "submit"]')).toBeEnabled();
    })

    test('Continue with assertions part 4', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/')

        // verify text store in variable
        const headerText = await page.locator('h1').textContent()
        expect(headerText).toBe('Welcome to the-internet')
    })
})