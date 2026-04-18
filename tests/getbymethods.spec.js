import {test} from '@playwright/test'

test("", async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    // await page.getByLabel('Name', {exact:true}).fill("Vatan");
    // await page.getByLabel('Email Id').fill("vatanharika@gmail.com");
    // await page.getByLabel('Password').fill("Vatan@123");
    // // await page.getByPlaceholder('Enter your name', {exact:true})
    // // await page.getByRole('button', {name: "Submit", exact: true})
    // // await page.getByText('Register').click();
    // await page.getByAltText('signin');
    
    // await page.goto("https://www.saucedemo.com/");
    // await page.getByTestId("username").fill("standard_user");

    // const value = await page.getByTestId("username").inputValue();
    // console.log(value);
    // await page.goto("https://amazon.in");
    // await page.getByTestId('basic').first().click();

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.getByText("Name", {exact: true}).fill("Vatan");
})