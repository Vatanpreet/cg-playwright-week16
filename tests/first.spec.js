import {test} from '@playwright/test'

test("1st example", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator('input#name').fill("Vatan")
    await page.waitForTimeout(5000);
    
    await page.locator('input#email').fill('Vatan@gmail.com');
    await page.pause();
})