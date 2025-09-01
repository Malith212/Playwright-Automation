const { test, expect } = require('@playwright/test');  
const { LoginPage } = require('./pageObject/loginPage');
const { Dashboard } = require('./pageObject/dashBoard');

test.only("Assignment 1 Login", async ({ page }) => {
    const email = "navindumalith0@gmail.com";
    const password = "Mn20010810@#";
    const ExpProduct = "ADIDAS ORIGINAL";

    const loginPage = new LoginPage(page); 
    await loginPage.goTo();
    await loginPage.login(email, password);

    const dashboard = new Dashboard(page);
    await dashboard.addProductToCart(ExpProduct);
    await dashboard.goToCheckout();


});
