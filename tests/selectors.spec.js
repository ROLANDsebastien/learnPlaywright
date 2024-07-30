import {test, expect} from "@playwright/test";

test("learning selectors", async ({page}) => {
    // navigate to the webpage
    await page.goto('file:///Users/sebastienroland/Developer/Playwright_Course/clickMe.html')

    // selecting by ID
    await page.locator('#clickButton').click()

    // selecting by class
    await page.locator('.button-style').click()

    // selecting by Tag and Class
    await page.locator('button.button-style').click()

    // selecting by attribute value
    await page.locator('[data-action="increment"]').click()

    // selecting by partial attribute
    await page.locator('[role*="but"]').click()

    // selecting by text content
    await page.locator('text=CLICK ME').click()

    // selecting selector by precision, Class and text
    await page.locator('.button-style:text("CLICK ME")').click()

    // selecting find element containing specific text, by has-text
    await page.locator('button:has-text("click me")').click()

    // selecting by attribute and text combination
    await page.locator('[data-action="increment"]:text("CLICK ME")').click()

    // playwright locator
    await page.getByText('CLICK ME').click()

    // selecting by role
    await page.getByRole('button', {name: /click me/i}).click()

    // assert the counter
    await expect(page.locator('#counter')).toContainText('11')
    await page.pause()
})