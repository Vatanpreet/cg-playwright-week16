import {chromium, test} from '@playwright/test'

// test('browser controls', async({page}) => {
//     await page.goto("https://www.amazon.in/")


//     await page.setViewportSize({width: 1000, height: 700});
    
//     let size = await page.viewportSize();
//     console.log(size);
// })

// test('browser controls', async({browser}) => {
//     let context = await browser.newContext();
//     let page = await context.newPage();
//     await page.goto("https://practicetestautomation.com/logged-in-successfully/");
//     const cookies = await context.cookies();
//     console.log(cookies);
// })

test('browser controls', async({browser, browserName}) => {
    browser = await chromium.launch();
    let context = await browser.newContext();
    let page = await context.newPage()

    await page.goto("https://www.flipkart.in")
    console.log(browserName);

    let title = await page.title();
    console.log(title);
    console.log(await page.url());

    await page.screenshot({path: "screenshot/ss.png"});
})

