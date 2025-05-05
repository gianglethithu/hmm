const { By, until } = require('selenium-webdriver');

class TrackingPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://spx.vn/track';
    }

    async open() {
        await this.driver.get(this.url);
        const inputLocator = By.css('input[type="text"]'); // hoặc selector cụ thể hơn
        await this.driver.wait(until.elementLocated(inputLocator), 20000);
    }

    async inputTrackingCode(code) {
        const input = await this.driver.wait(until.elementLocated(By.css('.quick-tracking-search-input input')), 20000);
        await input.sendKeys(code);

        const button = await this.driver.findElement(By.css('button[type="button"]'));
        await button.click();
    }

    async getStatusText() {
        try {
            // Ưu tiên lấy từ order-status (ví dụ: "Đang trả hàng", "Đã trả hàng")
            const statusElement = await this.driver.findElements(By.css('span.order-status .ssc-ui-tag'));
            if (statusElement.length > 0) {
                const statusText = await statusElement[0].getText();
                return statusText.trim();
            }

            // Nếu không có order-status, lấy milestone-item đang active
            const milestoneElement = await this.driver.findElement(
                By.css('div.milestone-item.active p.text')
            );
            const milestoneText = await milestoneElement.getText();
            return milestoneText.trim();
        } catch (error) {
            return ''; // Hoặc ghi log lỗi nếu cần
        }
    }
}

module.exports = TrackingPage;
