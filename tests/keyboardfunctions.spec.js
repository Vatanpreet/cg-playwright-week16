import {test} from '@playwright/test'

test("", async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
    await page.getByLabel('Name').click();
    await page.keyboard.insertText("Vatan");
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    await page.keyboard.insertText("vatanpreetharika@gmail.com");
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    await page.keyboard.press('Control+V');
})