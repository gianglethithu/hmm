const { Given, When, Then } = require('@cucumber/cucumber');
const OrderPage = require('../../page_objects/orderPage');

Given('tôi đã đăng nhập thành công', async function () {
    // Đã đăng nhập trong BeforeAll
});

When('tôi truy cập vào trang đơn hàng {string}', async function (orderCode) {
    const orderPage = new OrderPage(this.driver);
    this.orderPage = orderPage;
    await orderPage.searchOrder(orderCode);
});

Then('tôi thấy trạng thái đơn hàng được hiển thị', async function () {
    const status = await this.orderPage.getOrderStatus();
    console.log(`Trạng thái đơn hàng: ${status}`);
});
