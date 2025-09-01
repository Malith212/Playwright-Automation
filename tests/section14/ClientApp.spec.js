const { test, expect } = require("@playwright/test");
const { POManger } = require("./pageObject/poManger");


test.only("Assignment 1 Login", async ({ page }) => {

    const poManger = new POManger(page);

  const email = "navindumalith0@gmail.com";
  const password = "Mn20010810@#";
  const ExpProduct = "ADIDAS ORIGINAL";

  const loginPage = poManger.getLoginPage();
  await loginPage.goTo();
  await loginPage.login(email, password);

  //Product add to cart
  const dashboard = poManger.getDashboard();
  await dashboard.addProductToCart(ExpProduct);
  await dashboard.goToCheckout();

  //navigate to checkout
  const checkout = poManger.getCheckout();
  await checkout.gotochekout();

  //fill Card Details

  const creditCardNumber = "4242 4242 4242 4242";
  const cvv = "123";
  const cardName = "sampath";
  const coupenCode = "rahulshettyacademy";
  const expDate = "31";
  const expMonth = "11";

  const cardDetails = poManger.getCardDetails();
  await cardDetails.fillCardDetails(
    creditCardNumber,
    cvv,
    cardName,
    coupenCode,
    expMonth,
    expDate
  );

  //fill Shipping Information
  const shippingInformation = poManger.getShippingInformation();
  await shippingInformation.fillShippingInformation(" India");
  await shippingInformation.clickCheckoutButton();

  //getOrderId
  const orderId = poManger.getOrderId();
  console.log(orderId);
});
