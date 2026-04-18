import {test} from '@playwright/test'

test("", async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1');
    await page.click("button#btn_a", {button: 'left'});
})