import { test, expect, Page, Locator } from "@playwright/test";
export class CardDetails {
  page: Page;
  cardNumer: Locator;
  cvv: Locator;
  cardName: Locator;
  couponCode: Locator;
  expMonth: Locator;
  expDate: Locator;
  constructor(page: Page) {
    this.page = page;
    this.cardNumer = page.locator(".field input").nth(0);
    this.cvv = page.locator(".field input").nth(1);
    this.cardName = page.locator(".field input").nth(2);
    this.couponCode = page.locator(".field input").nth(3);

    this.expMonth = page.locator(".field select").nth(0);
    this.expDate = page.locator(".field select").nth(1);
  }

  async fillCardDetails(creditCardNumber:string,cvv:string,cardName:string,coupenCode:string,expMonth:string,expDate:string){
    await this.cardNumer.fill(creditCardNumber);
    await this.cvv.fill(cvv);
    await this.cardName.fill(cardName);
    await this.couponCode.fill(coupenCode);
    await this.expMonth.selectOption(expMonth);
    await this.expDate.selectOption(expDate);

  }


}

module.exports = { CardDetails };
