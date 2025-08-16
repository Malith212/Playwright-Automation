const { test, expect } = require("@playwright/test");
const path = require("path");

test.only("Assignment 2 Login", async ({ browser }) => {
  const contet = await browser.newContext();
  const page = await contet.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  const username = page.locator("#userEmail");
  const password = page.locator("[type='password']");
  const logIn = page.locator("#login");

  await username.fill("navindumalith0@gmail.com");
  await password.fill("Mn20010810@#");
  await logIn.click();

  await page.waitForLoadState("networkidle");

  const products = page.locator(".card-body");
  const count = await products.count();
  console.log(count);

  const titles = await products.locator("b").allTextContents();
  console.log(titles);

  const ExpProduct = "ADIDAS ORIGINAL";

  for (let i = 0; i < count; i++) {
    if (titles[i] === ExpProduct) {
      console.log("Product Found");
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }

  //click  on cart Icon top of the page

  await page.locator("[routerlink*='cart']").click();

  //new one
  await page.locator("div li").nth(1).waitFor();

  await page.waitForSelector("h3:has-text('ADIDAS ORIGINAL')");
  const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
  console.log(bool);
  expect(bool).toBeTruthy();

  await page.locator('text="Checkout"').click();

  await page.waitForTimeout(5000);

  //inputing card details

  const creditCardNumber = "4242 4242 4242 4242";
  const cvv = "123";
  const cardName = "sampath";
  const coupenCode = "rahulshettyacademy";
  const expDate = "31";
  const expMonth = "11";

  await page.locator(".field input").nth(0).fill(creditCardNumber);
  await page.locator(".field input").nth(1).fill(cvv);
  await page.locator(".field input").nth(2).fill(cardName);
  await page.locator(".field input").nth(3).fill(coupenCode);

  //hadnling dropdwon

  await page.locator(".field select").nth(0).selectOption(expMonth);
  await page.locator(".field select").nth(1).selectOption(expDate);

  //dropdown country slection

  const dropdownInput = await page.locator("[placeholder*='Select Country']");
  await dropdownInput.waitFor();
  await dropdownInput.pressSequentially("ind");

  const dropdown = await page.locator(".form-group section");
  await dropdown.waitFor();

  const countries = await dropdown.locator("Button").count();
  console.log(countries);

  for(let i=0;i<countries;i++){
    const countryName = " India";
    if(countryName === await dropdown.locator("Button").nth(i).textContent()){
      await dropdown.locator("Button").nth(i).click();
      console.log(dropdown.locator("Button").nth(i).textContent());
      break;
    }
  }

//   await page.pause();
});
