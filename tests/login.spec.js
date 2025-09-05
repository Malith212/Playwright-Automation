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

    console.log(await cardTitle.first().textContent());
    console.log(await cardTitle.nth(1).textContent());
    console.log(await cardTitle.last().textContent());
}) 

test.only('UI basics/Select Drop Down', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');   

    const userName = await page.locator('#username');
    const Password = await page.locator("[type='password']");
    const SignInButton = await page.locator("#signInBtn");

    await userName.fill("rahulshettyacademy");
    await Password.fill("learning");
    
    const dropdown = await page.locator("select.form-control");
    await dropdown.selectOption("consult");

    //Capturing radio Icon

    const radioIcon = await page.locator(".radiotextsty").nth(1);
    await radioIcon.click();

    const okButton = await page.locator('//*[@id="okayBtn"]');
    await okButton.click();


    //assertion whether the radio button is selected or not
    await expect(radioIcon).toBeChecked();
    console.log(await radioIcon.isChecked());

    const termsAndConditions_checkbox = await page.locator("#terms");

    await termsAndConditions_checkbox.click();
    //assertion whether the radio button is selected or not

    await expect(termsAndConditions_checkbox).toBeChecked();
    await termsAndConditions_checkbox.uncheck();
    console.log(await termsAndConditions_checkbox.isChecked());

    expect (await termsAndConditions_checkbox).not.toBeChecked();
    expect (await termsAndConditions_checkbox.isChecked()).toBeFalsy();

    //assertion whther the attribute have the css class

    const documentLink = page.locator("[href*='documents-request']");
    await expect(documentLink).toHaveClass('blinkingText');
    await expect(documentLink).toHaveAttribute('class', 'blinkingText');


    // await page.pause();
});

//opening a new tab window and printing a text on that page

test('opeining a new tab', async ({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const documentLink = page.locator('[href*="documents-request"]');

    //we are using promise.all for when we need to execute concurrent iteam parallely
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click()
    ])

    const textArea = await newPage.locator('.red').textContent();
    await console.log(textArea);

    const arrayText=await textArea.split("@");
    const userName= await arrayText[1].split(" ")[0];

    await console.log(userName);

    await page.locator("#username").fill(userName);


});