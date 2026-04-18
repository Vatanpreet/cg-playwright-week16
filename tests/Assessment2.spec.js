import {test, expect} from '@playwright/test'

test("Assessment 2", async({page})=>{
    await page.goto("https://vinothqaacademy.com/demo-site/");

    await page.locator('//input[@id="vfb-5"]').fill("Vatan");
    await expect(page.locator('#vfb-5')).toHaveValue("Vatan");
    

    await page.locator('//input[@id="vfb-7"]').fill("Harika");
    await expect(page.locator('#vfb-7')).toBeVisible();

    await page.locator('//input[@id="vfb-31-2"]').click();
    await expect(page.locator('#vfb-31-2')).toBeChecked();
    
    await page.locator('//label[text()="Java"]').click();

    await page.locator('//input[@id="vfb-13-address"]').fill('xyz')
    await page.locator('//input[@id="vfb-13-address-2"]').fill('abcdefgh');
    await page.locator('//input[@name="vfb-13[city]"]').fill('gfwehgoehgoiea');
    await page.locator('//input[@id="vfb-13-zip"]').fill('tyuiolshdf');

    await page.locator('//span[@id="select2-vfb-13-country-container"]/..').click();
    await page.keyboard.type("Ind");
    await page.keyboard.press("Enter");

    await page.locator('//input[@id="vfb-14"]').fill('vatanharika@gmail.com');
    await expect(page.locator('//input[@id="vfb-14"]')).toHaveAttribute('type', 'email');
    await expect(page.locator('//input[@id="vfb-14"]')).toContainClass(['vfb-text']);

    await page.locator('(//span[@class="select2-selection select2-selection--single"])[2]').click();
    await page.keyboard.press('2');
    await page.keyboard.press("Enter");
    await page.locator('(//span[@class="select2-selection select2-selection--single"])[3]').click();
    await page.keyboard.press("5");
    await page.keyboard.press("Enter")

    await page.locator('//input[@id="vfb-19"]').fill('987654321');

    await page.locator('//textarea[@name="vfb-23"]').fill("My Query");
    await page.locator('//input[@id="vfb-3"]').fill('33');

    await page.screenshot({path: 'screenshot/assessment2.png'});
    await page.locator('//input[@id="vfb-4"]').click();

    // await expect(page).toHaveScreenshot(
    //     "assessment2.png",
    // );

})