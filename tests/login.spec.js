const { test, expect } = require('@playwright/test');

test('Browser Context Playwright test', async ({browser})=>{

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

    //valid Credentials Sign In Scenario
    
    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const signINButton = page.locator("#signInBtn");

    await username.fill("");
    await username.fill("rahulshettyacademy");

    await password.fill("");
    await password.fill("learning");

    await signINButton.click();

    await page.waitForTimeout(10000)

    //Grab the Phone names(grab the elements when there are more than one element)

    console.log(await page.locator(".card-body a").nth("1").textContent()); 

    console.log(await page.locator(".card-body a").first().textContent());

    const cardTitle = await page.locator(".card-body a");
    const allContent = await cardTitle.allTextContents();
    console.log(await allContent);


});

test('Page Playwright test', async ({page})=>{

    await page.goto('https://google.com');

    //check the page title - assertion
    console.log(await page.title()); 
    await expect(page).toHaveTitle('Google'); 

});

test.only('Assignment 1 Login', async ({browser})=>{
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

    console.log(await cardTitle.first().textContent());
    console.log(await cardTitle.nth(1).textContent());
    console.log(await cardTitle.last().textContent());
}) 