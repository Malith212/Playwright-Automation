class ShippingInformation {
  constructor(page) {
    this.page = page;
    this.dropdownInput = page.locator("[placeholder*='Select Country']");
    this.dropdown = page.locator(".form-group section");
    this.countries = this.dropdown.locator("Button");
  }

  async fillShippingInformation(country) {
    await this.dropdownInput.waitFor();
    await this.dropdownInput.pressSequentially("ind");

    const countryName = country;
    await this.dropdown.waitFor();

    await this.countries.count();
    console.log(this.countries);

    for (let i = 0; i < this.countries; i++) {
      if (
        countryName ===
        (await this.dropdown.locator("Button").nth(i).textContent())
      ) {
        await this.dropdown.locator("Button").nth(i).click();
        break;
      }
    }
  }
}

module.exports = { ShippingInformation };
