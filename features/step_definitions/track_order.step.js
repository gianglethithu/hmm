const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');
const assert = require('assert');
const TrackingPage = require('../../page_objects/trackingPage');
const { logStatus, logError } = require('../../utils/logger');

let driver;
let page;

Given('I open the SPX tracking page', async function () {
    const service = new chrome.ServiceBuilder(path.resolve(__dirname, '../../driver/chromedriver'));
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(service) // sử dụng dòng này thay vì setDefaultService
        .build();
    await driver.manage().setTimeouts({
        pageLoad: 20000,  //  thời gian chờ trang tải
        implicit: 10000    // tuỳ chọn: chờ phần tử trong 5s
    });
    page = new TrackingPage(driver);
    await page.open();
});

When('I input the tracking code {string}', async function (code) {
    this.trackingCode = code; // lưu vào context
    await page.inputTrackingCode(code);
});

Then('I should see the delivery status', async function () {
    const trackingCode = this.trackingCode || 'Unknown';

    let status = '';
    try {
        status = await page.getStatusText();

        if (!status || status.length === 0) {
            throw new Error('Status is empty');
        }

        logStatus(trackingCode, status); // ✅ chỉ log khi hợp lệ
    } catch (err) {
        logError(trackingCode, err); // ✅ chỉ log lỗi khi có lỗi xảy ra
        throw err;
    } finally {
        await driver.quit();
    }
});
