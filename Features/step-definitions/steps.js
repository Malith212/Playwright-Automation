const { Given, When, Then } = require("@cucumber/cucumber");
const { POManger } = require("../../tests/section14/pageObject/poManger");
const playwright = require("@playwright/test");

// Test Data (you can later move this to a JSON file if needed)
const testData = {
  creditCardNumber: "4111111111111111",
  cvv: "123",
  cardName: "Malith Weerarathne",
  couponCode: "DISCOUNT10",
  expMonth: "12",
  expDate: "2025",
};

Given(
  "A login to the ecommerce application with {string} and {string}", {timeout: 10000},
  async function (username, password) {
    // these lines are required since we are using cucumber with playwright
    const browser = await playwright["chromium"].launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    this.poManger = new POManger(page);
    const loginPage = this.poManger.getLoginPage();
    await loginPage.goTo();
    await loginPage.login(username, password);
  }
);

When("Add {string} to the cart", async function (productName) {
  // Product add to cart
  const dashboard = this.poManger.getDashboard();
  await dashboard.addProductToCart(productName);
  await dashboard.goToCheckout();
});

Then("I should see {string} in the cart", {timeout: 10000},async function (product) {
  // navigate to checkout
  const checkout = this.poManger.getCheckout();
  await checkout.goToCheckout(); // fixed typo
});

When("Enter valid details and place the order", {timeout: 10000},async function () {
  // fill Card Details
  const cardDetails = this.poManger.getCardDetails();
  await cardDetails.fillCardDetails(
    testData.creditCardNumber,
    testData.cvv,
    testData.cardName,
    testData.couponCode,
    testData.expMonth,
    testData.expDate
  );

  // fill Shipping Information
  const shippingInformation = this.poManger.getShippingInformation();
  await shippingInformation.fillShippingInformation("India");
  await shippingInformation.clickCheckoutButton();
});

Then("Verify the order is is in the Order History",{timeout: 10000}, async function () {
  // getOrderId and search dynamically whether it is in Orders Page
  const orderId = this.poManger.getOrderId();
  await orderId.getOrderId();
});
