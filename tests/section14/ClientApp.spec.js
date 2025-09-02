const { test, expect } = require("@playwright/test");
const { POManger } = require("./pageObject/poManger");
//Json-->string-->object
const dataSet = require("../../utils/placeorder.json");

const {customTest} = require("../../utils/test-base");

for (const data of dataSet) {
  test(`Place Order ${data.email}`, async ({ page }) => {
    const poManger = new POManger(page);

    //   const email = "navindumalith0@gmail.com";
    //   const password = "Mn20010810@#";
    //   const ExpProduct = "ADIDAS ORIGINAL";

    const loginPage = poManger.getLoginPage();
    await loginPage.goTo();
    await loginPage.login(data.email, data.password);

    //Product add to cart
    const dashboard = poManger.getDashboard();
    await dashboard.addProductToCart(data.ExpProduct);
    await dashboard.goToCheckout();

    //navigate to checkout
    const checkout = poManger.getCheckout();
    await checkout.gotochekout();

    //fill Card Details

    //   const creditCardNumber = "4242 4242 4242 4242";
    //   const cvv = "123";
    //   const cardName = "sampath";
    //   const coupenCode = "rahulshettyacademy";
    //   const expDate = "31";
    //   const expMonth = "11";

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

    //getOrderId and search dymancally whther it is in Orders Page
    const orderId = poManger.getOrderId();
    await orderId.getOrderId();
  });

  customTest.only(`Place Order ${data.email}`, async ({ page, testDataForOrder }) => {
    const poManger = new POManger(page);

    //   const email = "navindumalith0@gmail.com";
    //   const password = "Mn20010810@#";
    //   const ExpProduct = "ADIDAS ORIGINAL";

    const loginPage = poManger.getLoginPage();
    await loginPage.goTo();
    await loginPage.login(testDataForOrder.email, testDataForOrder.password);

    //Product add to cart
    const dashboard = poManger.getDashboard();
    await dashboard.addProductToCart(testDataForOrder.ExpProduct);
    await dashboard.goToCheckout();

    //navigate to checkout
    const checkout = poManger.getCheckout();
    await checkout.gotochekout();

    //fill Card Details

    //   const creditCardNumber = "4242 4242 4242 4242";
    //   const cvv = "123";
    //   const cardName = "sampath";
    //   const coupenCode = "rahulshettyacademy";
    //   const expDate = "31";
    //   const expMonth = "11";

    const cardDetails = poManger.getCardDetails();
    await cardDetails.fillCardDetails(
      testDataForOrder.creditCardNumber,
      testDataForOrder.cvv,
      testDataForOrder.cardName,
      testDataForOrder.couponCode,
      testDataForOrder.expMonth,
      testDataForOrder.expDate
    );

    //fill Shipping Information
    const shippingInformation = poManger.getShippingInformation();
    await shippingInformation.fillShippingInformation(" India");
    await shippingInformation.clickCheckoutButton();

    //getOrderId and search dymancally whther it is in Orders Page
    const orderId = poManger.getOrderId();
    await orderId.getOrderId();
  });
}
