import {test} from '@playwright/test'
// test("pages", async({page}) => {
//     await page.goto("https://www.amazon.in/");
// })

// test("browsers", async({page, browserName}) => {
//     // let context = await browser.newContext();
//     // let page = await context.newPage();
//     await page.goto("https://www.amazon.in/");
//     console.log(browserName);
// })

test("ptani", async({browser, page}) => {
    let context = await browser.newContext();
    let page1 = await context.newPage();
    await page1.goto("https://web.whatsapp.com/");
    await page.goto("https://www.amazon.in/")
})