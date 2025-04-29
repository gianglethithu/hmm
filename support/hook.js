// const { BeforeAll, AfterAll } = require('@cucumber/cucumber');
// const { Builder } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
// const path = require('path');
// const LoginPage = require('../page_objects/loginPage');
//
// let driver;
//
// BeforeAll(async function () {
//     const driverPath = path.join(__dirname, '..', 'driver', 'chromedriver.exe');
//     const service = new chrome.ServiceBuilder(driverPath);
//
//     driver = await new Builder()
//         .forBrowser('chrome')
//         .setChromeService(service)
//         // .setChromeOptions(new chrome.Options().headless())
//         .build();
//
//     this.driver = driver;
//
//     // Thực hiện đăng nhập
//     const loginPage = new LoginPage(driver);
//     await loginPage.login('0869960144', 'Trung2112');
// });
//
// AfterAll(async function () {
//     if (driver) await driver.quit();
// });
