const { After, Before } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require("path");

let driver;

Before(async function () {
    const driverPath = path.join(__dirname, '..', 'driver', process.platform === 'win32' ? 'chromedriver.exe' : 'chromedriver');
    const service = new chrome.ServiceBuilder(driverPath);

    this.driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(service)
        // .setChromeOptions(new chrome.Options().headless())
        .build();
});

After(async function () {
    if (this.driver) {
        await this.driver.quit();
    }
});
