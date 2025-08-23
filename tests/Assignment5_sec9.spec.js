const {test, expect} = require('@playwright/test');

test.only("Assignment5_sec9", async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

    // await page.goto("https://www.google.com/");

    // await page.waitForTimeout(10000);
    // await page.goBack();

    // await page.waitForTimeout(10000);
    // await page.goForward();

    //handling pop up
    await page.on('dialog', dialog => {
        dialog.accept();
    })
    await page.locator("#confirmbtn").click();

    await page.locator("#mousehover").hover();

    //IFrame Handling Part
    const framePage = await page.frameLocator('#courses-iframe');

    await framePage.locator("li a[href*='lifetime-access'].new-navbar-highlighter").click();
    const text = await framePage.locator(".text h2 span").textContent();
    console.log(text);

})