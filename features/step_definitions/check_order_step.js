const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const LoginPage = require('../../page_objects/loginPage');
const OrderPage = require('../../page_objects/orderPage');

let driver, loginPage, orderPage;

Given('tôi đăng nhập với tài khoản {string} và mật khẩu {string}', async (email, password) => {
    const loginPage = new LoginPage(this.driver);
    await loginPage.login(email, password);
});

When('tôi truy cập vào trang đơn hàng {string}', async (orderId) => {
    const orderPage = new OrderPage(this.driver);
    this.orderPage = orderPage;
    await orderPage.searchOrder(orderId);
});

Then('tôi thấy trạng thái đơn hàng được hiển thị', async () => {
    const status = await orderPage.getOrderStatus();
    if (!status || status.trim() ==='') {
        throw new Error('Không tìm thấy trạng thái đơn hàng!');
    }
    console.log(`Trạng thái đơn hàng: ${status}`);
    await driver.quit();
});
