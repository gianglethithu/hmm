const { By, until } = require('selenium-webdriver');

class OrderPage {
    constructor(driver) {
        this.driver = driver;
    }

    async searchOrder(orderId) {
        await this.driver.get(`https://spx.vn/track?${orderId}`);
        await this.driver.wait(until.elementLocated(By.css('div.order-status')), 10000);
    }

    async getOrderStatus() {
        const statusElement = await this.driver.findElement(By.css('div.order-status'));
        return await statusElement.getText();
    }
}

module.exports = OrderPage;
