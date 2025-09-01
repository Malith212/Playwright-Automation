const { test, expect } = require('@playwright/test');  
const { LoginPage } = require('./pageObject/loginPage');

test.only("Assignment 1 Login", async ({ page }) => {
    const email = "navindumalith0@gmail";
    const password = "Mn20010810@#";

    const loginPage = new LoginPage(page); // No conflict now
    await loginPage.goTo();
    await loginPage.login(email, password);
});
