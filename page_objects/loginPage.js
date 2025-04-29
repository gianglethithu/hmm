const { By, until } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async login(email, password) {
        await this.driver.get('https://account.spx.vn/authenticate/login');

        // Đợi input email hiển thị
        const emailInput = await this.driver.wait(
            until.elementLocated(By.css('input[type="text"]')),
            10000
        );
        await this.driver.wait(until.elementIsVisible(emailInput), 5000);
        await emailInput.sendKeys(email);

        // Đợi input password hiển thị
        const passwordInput = await this.driver.wait(
            until.elementLocated(By.css('input[type="password"]')),
            10000
        );
        await this.driver.wait(until.elementIsVisible(passwordInput), 5000);
        await passwordInput.sendKeys(password);

        // Đợi nút submit
        const loginButton = await this.driver.wait(
            until.elementLocated(By.css('button[type="submit"]')),
            10000
        );
        await this.driver.wait(until.elementIsVisible(loginButton), 5000);
        await loginButton.click();
        await this.driver.sleep(50000);

        const confirmBtn = await this.driver.wait(
                until.elementLocated(By.css('button[type="submit"]')),
                1000000
            );
            await this.driver.wait(until.elementIsVisible(confirmBtn), 3000);
            await confirmBtn.click();

        await this.driver.sleep(5000);

    }
}

module.exports = LoginPage;
