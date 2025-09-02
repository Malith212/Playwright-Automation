class OrderId {
  constructor(page) {
    this.page = page;
    this.orderId = this.page.locator(".em-spacer-1 .ng-star-inserted");
    this.orderPage = this.page.locator("li [routerlink*='/dashboard/myorders']");
    this.tableRow = this.page.locator("tbody tr");
  }

async getOrderId() {
  const orderId = await this.orderId.textContent() || "";
  console.log(orderId);

  await this.orderPage.click();

  await this.tableRow.first().waitFor();

  const rows = this.tableRow;
  const rowCount = await rows.count();
  console.log(rowCount);

  for (let i = 0; i < rowCount; i++) {
    const rowOrderId = await rows.nth(i).locator("th").textContent() || "";
    if (orderId.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
}

}

module.exports = { OrderId };
