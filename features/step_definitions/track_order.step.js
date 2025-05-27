const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');
const assert = require('assert');
const TrackingPage = require('../../page_objects/trackingPage');
const { logStatus, logError } = require('../../utils/logger');

let driver;
let page;

Given('I open the SPX tracking page',{ timeout: 20000 }, async function () {
    const service = new chrome.ServiceBuilder(path.resolve(__dirname, '../../driver/chromedriver'));
    const chromeOptions = new chrome.Options();

    // Thêm argument --headless để chạy ở chế độ headless
    chromeOptions.addArguments('--headless');

    // Bạn cũng có thể thêm các tùy chọn khác nếu cần
    // ví dụ: tắt GPU (có thể giúp ổn định trong một số môi trường)
    chromeOptions.addArguments('--disable-gpu');
    this.driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(service) // sử dụng dòng này thay vì setDefaultService
        .setChromeOptions(chromeOptions)
        .build();
    await this.driver.manage().setTimeouts({
        pageLoad: 20000,  //  thời gian chờ trang tải
        implicit: 20000    // tuỳ chọn: chờ phần tử trong 5s
    });
    page = new TrackingPage(this.driver);
    await page.open();
});

When('I input the tracking code {string}', async function (code) {
    this.trackingCode = code; // lưu vào context
    await page.inputTrackingCode(code);
});

Then('I should see the delivery status',{ timeout: 20000 }, async function () {
    const trackingCode = this.trackingCode || 'Unknown';
console.log('đến đoạn này1');
    let status = '';
    try {
        status = await page.getStatusText();
        console.log('đến đoạn này2');

        if (!status || status.length === 0) {
            throw new Error('Status is empty');
        }

        logStatus(trackingCode, status); // ✅ chỉ log khi hợp lệ
    } catch (err) {
        logError(trackingCode, err); // ✅ chỉ log lỗi khi có lỗi xảy ra
        throw err;
    } finally {
        console.log('đến đoạn này5');

        await this.driver.quit();
    }
});
