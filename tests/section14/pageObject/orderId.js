class OrderId{
    
    constructor(page){
        this.page = page;
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
    }

    async getOrderId(){
        return await this.orderId.textContent();
    }
}

module.exports = { OrderId };