import { Page } from "@playwright/test";

import { LoginPage } from "./loginPage";
import { Dashboard } from "./dashBoard";
import { Checkout } from "./checkout";
import { ShippingInformation } from "./shippingInfromation";
import { CardDetails } from "./cardDetails";
import { OrderId } from "./orderId";

export class POManger{

    loginPage: LoginPage;
    dashboard: Dashboard;
    checkout: Checkout;
    shippingInformation: ShippingInformation;
    cardDetails: CardDetails;
    orderId: OrderId;
    page: Page;

    constructor(page:any){
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