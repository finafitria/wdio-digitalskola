describe('Test Sauce Demo', () => {
    it('Test 1 - Login successfully', async () => {
        await browser.url("https://saucedemo.com/")

        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')

        await usernameTextbox.addValue("visual_user")
        await passwordTextbox.addValue("secret_sauce")
        await loginButton.click();

        await browser.pause(5000)
        await expect (browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect (browser).toHaveTitle('Swag Labs')
    });

    it('Test 2 - Add Item to Cart', async () => {
        await browser.url("https://www.saucedemo.com/inventory.html")

        const addToCartButton = await browser.$(`//div[contains(text(), "Sauce Labs Onesie")]`);

        await addToCartButton.click()

        await browser.pause(5000)
        await expect (browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2')
        await expect (browser).toHaveTitle('Swag Labs')
    });
});
