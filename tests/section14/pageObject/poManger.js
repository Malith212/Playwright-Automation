import { LoginPage } from "./loginPage";
import { Dashboard } from "./dashBoard";
import { Checkout } from "./checkout";
import { ShippingInformation } from "./shippingInfromation";
import { CardDetails } from "./cardDetails";
import { OrderId } from "./orderId";

class POManger{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboard = new Dashboard(this.page);
        this.checkout = new Checkout(this.page);
        this.shippingInformation = new ShippingInformation(this.page);
        this.cardDetails = new CardDetails(this.page);
        this.orderId = new OrderId(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }
    getDashboard(){
        return this.dashboard;
    }
    getCheckout(){
        return this.checkout;
    }
    getShippingInformation(){
        return this.shippingInformation;
    }
    getCardDetails(){
        return this.cardDetails;
    }
    getOrderId(){
        return this.orderId;
    }
}

module.exports = { POManger };