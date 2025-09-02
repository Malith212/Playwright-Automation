const { expect } = require('@playwright/test');

class ShippingInformation {
  constructor(page) {
    this.page = page;
    this.dropdownInput = page.locator("[placeholder*='Select Country']");
    this.dropdown = page.locator(".form-group section");
    this.countries = this.dropdown.locator("Button");
    this.checkout = page.locator(".action__submit");
  }

  async fillShippingInformation(country) {
    await this.dropdownInput.waitFor();
    await this.dropdownInput.pressSequentially("ind");

    await this.dropdown.waitFor();
    const count = await this.countries.count();

    for (let i = 0; i < count; i++) {
      const buttonText = await this.countries.nth(i).textContent();
      if (buttonText.trim() === country.trim()) {
        await this.countries.nth(i).click();
        break;
      }
    }

    // await expect(this.page.locator(".user__name [type='text']").nth(0)).toHaveText(
    //   "navindumalith0@gmail.com"
    // );
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
