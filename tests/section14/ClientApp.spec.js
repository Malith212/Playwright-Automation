const { test, expect } = require("@playwright/test");
const { LoginPage } = require("./pageObject/loginPage");
const { Dashboard } = require("./pageObject/dashBoard");
const { Checkout } = require("./pageObject/checkout");
const { CardDetails } = require("./pageObject/cardDetails");
const { ShippingInformation } = require("./pageObject/shippingInfromation");

test.only("Assignment 1 Login", async ({ page }) => {
  const email = "navindumalith0@gmail.com";
  const password = "Mn20010810@#";
  const ExpProduct = "ADIDAS ORIGINAL";

  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login(email, password);

  //Product add to cart
  const dashboard = new Dashboard(page);
  await dashboard.addProductToCart(ExpProduct);
  await dashboard.goToCheckout();

  //navigate to checkout
  const checkout = new Checkout(page);
  await checkout.gotochekout();

  //fill Card Details

  const creditCardNumber = "4242 4242 4242 4242";
  const cvv = "123";
  const cardName = "sampath";
  const coupenCode = "rahulshettyacademy";
  const expDate = "31";
  const expMonth = "11";

  const cardDetails = new CardDetails(page);
  await cardDetails.fillCardDetails(
    creditCardNumber,
    cvv,
    cardName,
    coupenCode,
    expMonth,
    expDate
  );

  //fill Shipping Information
  const shippingInformation = new ShippingInformation(page);
  await shippingInformation.fillShippingInformation(" India");
});
