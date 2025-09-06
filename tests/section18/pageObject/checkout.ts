import { test, expect, Page, Locator } from '@playwright/test';
export class Checkout{
  product: Locator;
  chekOutButton: Locator;
  page: Page;
    constructor(page:Page){
        this.page = page;
        this.product = page.locator("div li").nth(1);
        this.chekOutButton = page.getByRole("button", {name:"Checkout"});
    }

    async gotochekout(){  
      await this.product.waitFor();
      await this.page.waitForSelector("h3:has-text('ADIDAS ORIGINAL')");
      const bool = await this.page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
      console.log(bool);
      // expect(bool).toBeTruthy();
    
      await this.chekOutButton.click(); 
      await this.page.waitForLoadState("networkidle");

    }
}

module.exports = {Checkout};