const { test, expect } = require('@playwright/test');

test.only('Browser Context Playwright test', async ({browser})=>{

    //chrome - plugins/ co okies
    const context = await browser.newContext();
    const page = await context.newPage();    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title()); 

    await page.locator('#username').fill('learning');
    await page.locator("[type='password']").fill('123');
    
    //wrong Credentials Sign In Scenario
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');


});

test('Page Playwright test', async ({page})=>{

    await page.goto('https://google.com');

    //check the page title - assertion
    console.log(await page.title()); 
    await expect(page).toHaveTitle('Google'); 

});