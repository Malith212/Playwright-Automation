import { test as baseTest } from "@playwright/test";

interface TestDataForOrder {
  email: string;
  password: string;
  ExpProduct: string;
  creditCardNumber: string;
  cvv: string;
  cardName: string;
  couponCode: string;
  expDate: string;
  expMonth: string;
}

export const customTest = baseTest.extend<{
  testDataForOrder: TestDataForOrder;
}>({
  testDataForOrder: {
    email: "navindumalith0@gmail.com",
    password: "Mn20010810@#",
    ExpProduct: "ADIDAS ORIGINAL",
    creditCardNumber: "4242 4242 4242 4242",
    cvv: "123",
    cardName: "Navindu Malith",
    couponCode: "rahulshettyacademy",
    expDate: "11", 
    expMonth: "12",
  },
});
