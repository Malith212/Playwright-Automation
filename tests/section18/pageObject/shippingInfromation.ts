import { test, expect, Page, Locator } from "@playwright/test";

export class ShippingInformation {
  page: Page;
  dropdownInput: Locator;
  dropdown: Locator;
  countries: Locator;
  checkout: Locator;
  constructor(page: Page) {
    this.page = page;
    this.dropdownInput = page.locator("[placeholder*='Select Country']");
    this.dropdown = page.locator(".form-group section");
    this.countries = this.dropdown.locator("Button");
    this.checkout = page.locator(".action__submit");
  }

  async fillShippingInformation(country: string) {
    await this.dropdownInput.waitFor();
    await this.dropdownInput.pressSequentially("ind");

    await this.dropdown.waitFor();
    const count = await this.countries.count();

    for (let i = 0; i < count; i++) {
      let buttonText: any;
      buttonText = await this.countries.nth(i).textContent();
      if (buttonText.trim() === country.trim()) {
        await this.countries.nth(i).click();
        break;
      }
    }


  }

  async clickCheckoutButton() {
    await this.checkout.click();
    await this.page.waitForLoadState("networkidle");
    await expect(this.page.locator(".hero-primary")).toHaveText(
      " Thankyou for the order. "
    );
  }
}

module.exports = { ShippingInformation };
