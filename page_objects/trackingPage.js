const { By, until } = require('selenium-webdriver');

class TrackingPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://spx.vn/track';
    }

    async open() {
        await this.driver.get(this.url);
    }

    async inputTrackingCode(code) {
        const input = await this.driver.wait(until.elementLocated(By.css('.quick-tracking-search-input input')), 20000);
        await input.sendKeys(code);

        const button = await this.driver.findElement(By.css('button[type="button"]'));
        await button.click();
    }

    async getStatusText() {
        const status = await this.driver.wait(until.elementLocated(By.css('.milestone-item.active .text')), 15000);
        return await status.getText();
    }
}

module.exports = TrackingPage;
