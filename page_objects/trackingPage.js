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
            const timeout = 15000; // 15 giây
            console.log('đến đoạn này3');

            // Đợi phần tử order-status nếu có
            const statusLocator = By.css('span.order-status .ssc-ui-tag');
            const milestoneLocator = By.css('div.milestone-item.active p.text');

            // Cố gắng tìm status đầu tiên
            try {
                const statusElement = await this.driver.wait(until.elementLocated(statusLocator), timeout);
                const isVisible = await this.driver.wait(until.elementIsVisible(statusElement), timeout);
                const statusText = await statusElement.getText();
                console.log('đến đoạn này4');
                console.log(statusText);

                return statusText.trim();
            } catch (_) {
                // Không tìm thấy order-status, tiếp tục tìm milestone
            }

            // Nếu không có status, đợi milestone active
            const milestoneElement = await this.driver.wait(until.elementLocated(milestoneLocator), timeout);
            await this.driver.wait(until.elementIsVisible(milestoneElement), timeout);
            const milestoneText = await milestoneElement.getText();
            return milestoneText.trim();

        } catch (error) {
            console.error('Lỗi khi lấy status:', error);
            return '';
        }
    }
}

module.exports = TrackingPage;
