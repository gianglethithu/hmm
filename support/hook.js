const { After, Before } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require("path");

let driver;

Before(async function () {
    const service = new chrome.ServiceBuilder(path.resolve(__dirname, '../chromedriver.exe'));

    // const service = new chrome.ServiceBuilder(driverPath);

    // const options = new chrome.Options();
    // options.addArguments('--headless'); // Bỏ nếu bạn muốn thấy trình duyệt

    this.driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options)
        .setChromeService(service)
        .build();

    this.driver = driver;
});

After(async function () {
    if (this.driver) {
        await this.driver.quit();
    }
});
