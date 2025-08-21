const { test, expect } = require('@playwright/test');

test("Assignment 3",async ({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://rahulshettyacademy.com/angularpractice/');

    const name = "Malith";
    const email = "navindumalith0@gmail";
    const password = "Mn20010810@#";

    await page.locator("[name='name']").nth(0).fill(name);
    await page.locator("[name='email']").fill(email);
    await page.locator("[type='password']").fill(password);

    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByLabel("Employed").check();

    await page.getByRole("button", {name:"Submit"}).click();

    const successMessage = await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    console.log(successMessage);
    await expect(successMessage).toBeTruthy();

    await page.getByRole("link", {name:"Shop"}).click();

    await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("button", {name:"Add "}).click();
});
