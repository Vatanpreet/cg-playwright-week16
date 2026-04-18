import {test, expect} from '@playwright/test'

test("Assessment 1", async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.locator('//input[@id="firstName"]').fill("Vatan");
    await expect(page.locator('#firstName')).toHaveValue("Vatan");

    await page.locator('//input[@id="lastName"]').fill("Harika");
    await expect(page.locator('#lastName')).toHaveId("lastName");

    await page.locator('//input[@id="userEmail"]').fill("vatanharika@gmail.com");
    await expect(page.locator('#userEmail')).toBeVisible();
    await page.getByLabel('Female', {exact: true}).click();
    await expect(page.getByLabel('Female')).toBeChecked();

    await page.locator('//input[@id="userNumber"]').fill('9876543210');
    await expect(page.locator('#userNumber')).toHaveAttribute('placeholder', 'Mobile Number');
    await page.locator('//input[@id="subjectsInput"]').fill("H");
    await page.keyboard.press('Enter');
    await page.locator('//input[@id="hobbies-checkbox-1"]').check();
    await page.locator('//input[@id="hobbies-checkbox-3"]').check();
    await expect(page.locator('input[type=checkbox]')).toHaveCount(3);

    await page.locator('#currentAddress').fill("Sangrur");
    await page.keyboard.press('Enter');
    
    await page.locator('//input[@id="react-select-3-input"]').fill("Har");
    await page.keyboard.press('Enter');
    await page.locator('//input[@id="react-select-4-input"]').fill("K");
    await page.keyboard.press('Enter');

    await page.screenshot({path: 'screenshot/assessment1.png'});

    await expect(page.getByRole("button", { exact: true, name: "Submit" })).toBeEnabled();
    await page.getByRole("button", { exact: true, name: "Submit" }).click();


//     await expect(page.locator(".modal-content")).toHaveScreenshot(
//     "assessment1.png",
// );

})