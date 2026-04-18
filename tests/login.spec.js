import {test} from '@playwright/test'

// test("login", async ({page}) => {
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await page.locator('input#username').fill("student")
//     await page.locator('input#password').fill("Password123")
//     await page.locator('.btn').click()
// })

// test("register", async({page}) => {
//     await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//     // await page.locator('input#name').fill("Vatan")
//     // await page.locator('input#email').fill("vatanharika@gmail.com")
//     // await page.locator('input#password').fill("Vatan123")
//     // await page.locator('[type="submit"]').click()
//     await page.locator('//input[@id="name"]').fill("Vatan")
//     await page.locator('//input[@id="email"]').fill("vatanharika@gmail.com")
//     await page.locator('//input[@id="password"]').fill("Vatan@123")
//     await page.locator('//button').click()
// })

// test("logout", async({page}) => {
//     await page.goto("https://practicetestautomation.com/logged-in-successfully/")
//     await page.locator('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').click()
// })

// test("GUI elements", async({page}) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");
// })

// test("", async({page}) => {
//     // await page.goto("https://www.amazon.in/");
//     // await page.locator('//label[text()="Search Amazon.in"]/following-sibling::input').fill("mobile");
//     // await page.locator('//label[text()="Search Amazon.in"]/parent::div/parent::div/following-sibling::div/descendant::input').click();
//     // await page.locator('//span[text()="Android 14"]/preceding-sibling::div/label/i').check();
//     // await page.screenshot({path: "screenshot/ss.png"});

//     // await page.locator('//label[text()="Search Amazon.in"]/following-sibling::input').fill("shoes");
//     // await page.locator('//label[text()="Search Amazon.in"]/parent::div/parent::div/following-sibling::div/descendant::input').click();
//     // await page.locator('//div[@class="a-section a-spacing-base desktop-grid-content-view"]').nth(4).click();

//     // await page.goto("https://www.cricbuzz.com/");
//     // await page.locator('//a[text()="Live Scores"]').click();
//     // await page.locator('(//span[text()="Scorecard"])[1]').click();
//     // let score = await page.locator('(//a[text()="Kavin Neeraj Chaddha"])[5]/../../div[2]').textContent();
//     // console.log(score);

//     // await page.goto("https://www.amazon.in/");
//     // await page.locator('//label[text()="Search Amazon.in"]/following-sibling::input').fill("shoes");
//     // await page.locator('//label[text()="Search Amazon.in"]/parent::div/parent::div/following-sibling::div/descendant::input').click();
//     // let shoename = await page.locator('(//div[@class="a-section a-spacing-micro"])[1]/descendant::span[@class="a-truncate-cut"]').textContent();
//     // console.log(shoename);
//     // let shoeprice = await page.locator('(//div[@class="a-section a-spacing-micro"])[1]/following-sibling::div/descendant::span[1]/span[@class="a-offscreen"]').textContent();
//     // console.log(shoeprice);

//     // let y = await page.locator('(//div[@class="a-section a-spacing-micro"])[1]/descendant::span[@class="a-truncate-cut"] | (//div[@class="a-section a-spacing-micro"])[1]/following-sibling::div/descendant::span[1]/span[@class="a-offscreen"]').allTextContents();
//     // console.log(y);

// })

// test.only("page handling", async({browser}) => {
//     let context = await browser.newContext();
//     let page = await context.newPage();

//     await page.goto("https://www.amazon.in/");
//     await page.locator("input#twotabsearchtextbox").fill("Mobiles");
//     await page.keyboard.press("Enter");
//     const [page2] = await Promise.all([
//         page.waitForEvent("popup"),
//         page.locator(`//h2[@aria-label="realme NARZO 80 Lite 4G (Beach Gold, 4GB+64GB) | 6300mAh Segment's Biggest Battery | 7.94mm Slim Design | 300% Ultra Volume | Pulse Light: 9 Colors, 5 Glow Modes | Ai Assist"]`).click(),
//     ]);
//     await page2.locator('//input[@id="add-to-cart-button"]').nth(1).click();
//     await page2.pause();
// })



test.only("multiple tabs", async({browser}) => {
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0");
    await page.locator('//a[text()="Multiple Tabs"]').click();

    const [page2, page3, page4] = await Promise.all([
        page.waitForEvent("popup"),
        page.waitForEvent("popup"),
        page.waitForEvent("popup"),
        page.locator('//button[text()="Shop Now"]').click(),
    ]);
    
    await page2.locator('//button[text()="Add to Cart"]').click();
    await page3.locator('//button[text()="Add to Cart"]').click();
    await page4.locator('//button[text()="Add to Cart"]').click();
})


// test.only("multiple windows", async({browser}) => {
//     let context = await browser.newContext();
//     let page = await context.newPage();

//     await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0");
//     // await page.locator('//section[text()="Browser Windows"]').click();
//     await page.locator('//a[text()="Multiple Windows"]').click();

//     const [page2, page3, page4] = await Promise.all([
//         page.waitForEvent("popup"),
//         page.waitForEvent("popup"),
//         page.waitForEvent("popup"),
//         page.locator('//button[text()="Shop Now"]').click(),
//     ]);
    
//     await page2.locator('//button[text()="Add to Cart"]').click();
//     await page3.locator('//button[text()="Add to Cart"]').click();
//     await page4.locator('//button[text()="Add to Cart"]').click();
// })





