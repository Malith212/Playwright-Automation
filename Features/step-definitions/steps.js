const { Given, When, Then } = require('@cucumber/cucumber')
const { POManger } = require("../../tests/section14/pageObject/poManger");
const { test,expect,playwright } = require("@playwright/test");

Given('A login to the ecommerce application with {username} and {password}', async function (username, password) {
    
    //thease lines need to add beacuse we are using cucmber with playwright
    const browser = await playwright["chromium"].launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    const poManger = new POManger(page);
    const loginPage = poManger.getLoginPage();
    await loginPage.goTo();
    await loginPage.login(data.email, data.password);
})

When("Add {product} to the cart", async function (product) {
    //Product add to cart
    const dashboard = poManger.getDashboard();
    await dashboard.addProductToCart(data.ExpProduct);
    await dashboard.goToCheckout();
})

Then("I should see {product} in the cart", async function (product) {
    //navigate to checkout
    const checkout = poManger.getCheckout();
    await checkout.gotochekout();
})

When("Enter valid details and place the order", async function () {
    //fill Card Details
    const cardDetails = poManger.getCardDetails();
    await cardDetails.fillCardDetails(
      data.creditCardNumber,
      data.cvv,
      data.cardName,
      data.couponCode,
      data.expMonth,
      data.expDate
    );

    //fill Shipping Information
    const shippingInformation = poManger.getShippingInformation();
    await shippingInformation.fillShippingInformation(" India");
    await shippingInformation.clickCheckoutButton();
})

Then("Verify the order is is in the Order History", async function () {
    //getOrderId and search dymancally whther it is in Orders Page    
    const orderId = poManger.getOrderId();
    await orderId.getOrderId();
})