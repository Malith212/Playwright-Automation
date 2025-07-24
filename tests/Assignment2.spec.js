const {test, expect} = require('@playwright/test'); 

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

    await page.waitForSelector(".card-body");

    const count=await productCart.count();
    await console.log(count);
    
    for(let i=0;i<count;i++){
        if(await productCart.nth(i).locator("b").textContent() === productName){
            await productCart.nth(i).locator("text= Add To Cart").click();
            break;

        }

    }

    //wait for 5 seconds
    await page.waitForTimeout(5000);    

    

})