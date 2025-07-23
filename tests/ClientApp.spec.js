const { test, expect } = require('@playwright/test');

test('Assignment 1 Login', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();    
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    const username = page.locator('#userEmail');
    const password = page.locator("[type='password']");  
    const logIn = page.locator("#login");

    await username.fill("navindumalith0@gmail.com");
    await password.fill("Mn20010810@#");
    await logIn.click();

    await page.waitForTimeout(10000);

    const cardTitle = await page.locator(".card-body b");
    
    // await page.waitForLoadState('networkidle');//flicky

    await cardTitle.first().waitFor();

    const allTitles = await cardTitle.allTextContents();

    console.log(allTitles);
}) 