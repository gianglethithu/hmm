const { By, until } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async login(email, password) {
        await this.driver.get('https://spx.vn/authenticate/login');
        await this.driver.findElement(By.css('input[type="text"]')).sendKeys(email);
        await this.driver.findElement(By.css('input[type="password"]')).sendKeys(password);
        await this.driver.findElement(By.css('button[type="submit"]')).click();
        await this.driver.wait(until.urlContains('/dashboard'), 10000);
    }
}

module.exports = LoginPage;
