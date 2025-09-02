class LoginPage {

    constructor(page){
        this.page = page;
        this.username = page.locator('#userEmail');
        this.password = page.locator("[type='password']");
        this.logIn = page.locator("#login");
    }

    async goTo(){
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }

    async login(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.logIn.click();
        await this.page.waitForLoadState("networkidle");
    }

}

module.exports = { LoginPage };
