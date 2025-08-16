const {test, expect} = require('@playwright/test'); 
const { time } = require('console');

test.only("Assignment 2", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    //1)Sign In Scenario

    const username = page.locator('#userEmail');
    const password = page.locator("[type='password']");  
    const logIn = page.locator("#login");

    await username.fill("navindumalith0@gmail.com");
    await password.fill("Mn20010810@#");
    await logIn.click();


    //2)Use an Iteration and found the exact product that match and click add to cart Button

    const productCart = page.locator(".card-body");
    const productName = "ADIDAS ORIGINAL";

    //wait for one elemen appear in the dom for the selector match in the page 
    await page.waitForSelector(".card-body");

    const count=await productCart.count();
    await console.log(count);
    
    for(let i=0;i<count;i++){
        if(await productCart.nth(i).locator("b").textContent() === productName){
            await productCart.nth(i).locator("text= Add To Cart").click();
            break;

        }

    }

    //assertion in add to cart page

    await page.locator("[routerlink*='cart']").click();
    await page.waitForSelector("h3:has-text('ADIDAS ORIGINAL')");
    const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    console.log(bool);
    await expect(bool).toBeTruthy();


    //checkout page

    await page.locator("text=checkout").click();

    //wait for 4 seconds
    await page.waitForTimeout(4000);

    const cardNumber="1212121212121212";
    const expDate="05";
    const expMonth="15";
    const cvv="166";
    const coupon="test";
    const bankName="HDFC";

    await page.locator('input.txt').nth(0).fill(cardNumber);
    await page.locator('input.txt').nth(1).fill(cvv);
    await page.locator('input.txt').nth(2).fill(bankName);
    await page.locator("[name='coupon']").fill(coupon);

    const dropdown = await page.locator(".ddl");
    await dropdown.nth(0).selectOption(expDate);   
    await dropdown.nth(1).selectOption(expMonth);

    const type="ind";
    await page.locator("[placeholder*='Select Country']").pressSequentially(type);

    //Iteration to select country

    const dropdownCounry=await page.locator(".ta-results");
    await page.waitForSelector(".ta-results");

    const countCounry=await dropdownCounry.locator("button").count();
    console.log(countCounry);

    const country=" India";
    for(let i=0;i<countCounry;i++){
        if(country===await dropdownCounry.locator("button").nth(i).textContent()){
            await dropdownCounry.locator("button").nth(i).click();
            break;
        }
    }


    await page.pause();

    

})