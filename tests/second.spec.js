import {test} from '@playwright/test'

// test("1st example", async({page})=>{
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator("[id='user-name']").fill("standard_user");
//     await page.locator('[id="password"]').fill("secret_sauce");
//     await page.locator('[id="login-button"]').click();
// })

// test("2nd example", async({page})=>{
//     await page.goto("https://www.easemytrip.com/");
//     await page.locator('#ddate').click();
//     await page.locator('[id="frth_6_25/04/2026"]').click();
// })

// test("3rd example", async({page}) => {
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator('//input[@id="user-name"]');
//     await page.locator('//*[contains(@id,"password")]')
// })

// test("4th example", async({page}) => {
//     await page.goto("https://www.zepto.com/");
//     await page.locator('//img[@alt="031c2a24-d40f-4272-8c71-8a566252495e.png"]').click();
//     await page.locator('//span[contains(text(),"Protinex")]').click();
//     let price = await page.locator('(//span[contains(@class,"cp62rX c9OiKy cu4Qk6")])[1]').innerText();
//     console.log(price);
// })


// test("blinkit", async({page}) => {
//     await page.goto("https://blinkit.com/");
//     await page.locator('//input[@placeholder="search delivery location"]').fill('Kharar');
//     await page.locator('//div[@class="LocationSearchList__LocationListContainer-sc-93rfr7-0 lcVvPT"][1]').click();
//     await page.locator('(//div[text()="ADD"])[last()-1]').click();
//     await page.locator('(//div[text()="ADD"])[4]').click();
//     await page.locator('//div[@class="CartButton__Button-sc-1fuy2nj-5 gRSsdk"]').click();
//     let grandtotal = await page.locator('//div[@class="tw-text-400 tw-font-semibold"]').innerText();
//     console.log(grandtotal);
// })

test("Internet Herokuapp", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    await page.locator('//button[text()="Add Element"]').click();
    await page.locator('//button[text()="Add Element"]').click();
    await page.locator('(//button[text()="Delete"])').first().click();
    await page.locator('(//button[text()="Delete"])').first().click();
})