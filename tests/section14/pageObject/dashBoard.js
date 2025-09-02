class Dashboard {
  constructor(page) {
    this.page = page;
    this.products = page.locator(".card-body");
    this.titles = this.products.locator("b");
    this.checkout = page.locator("[routerlink*='cart']");
  }

  async addProductToCart(ExpProduct) {
    const count = await this.products.count();
    console.log(count);

    const titles = await this.titles.allTextContents();
    console.log(titles);

    for (let i = 0; i < count; i++) {
      if (titles[i] === ExpProduct) {
        console.log("Product Found");
        await this.products.nth(i).locator("text= Add To Cart").click();
        break;
      }
    }
  }

  async goToCheckout() {
    await this.checkout.click();
    await this.page.waitForLoadState("networkidle");
  }
}

module.exports = { Dashboard };
