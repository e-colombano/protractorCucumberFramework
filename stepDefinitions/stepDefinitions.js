const { expect } = require('chai');
const { Given, When, Then } = require('cucumber');
const { browser, ExpectedConditions, ProtractorExpectedConditions } = require('protractor');
const helpers = require('../commons/helpers');
const loginPage = require('../pages/loginPage');
const myAccountPage = require('../pages/myAccountPage');
var data = require('../testData/testData.json')

// Scenario: Login to demo page and find an object using a condition to continue and log-out or throw an error if it cannot find it. //
Given('user navigates to login page', async function () {
    var url = loginPage.getUrl();
    await helpers.goToPage(url);
});

Given('user completes <email> and <password>', async function () {
    await loginPage.setUsername(data.userCredentials.userEmail);
    await loginPage.setPassword(data.userCredentials.password);
});


When('user clicks login button', async function () {
    await loginPage.submitLoginForm();
});


Then('user should be redirected to my-account page', async function () {
    await browser.wait(ExpectedConditions.presenceOf(myAccountPage.getLogoutButton()), 5000, 'No se encontró el botón de logout, login fallido');
    expect((await browser.getTitle()).toString()).equal('My account - My Store', 'No se encontró la página My account - My Store, login fallido');
});

Then('user logs out', async function () {
    await myAccountPage.logout();
});

// Scenario: Make a validation on a behavior or on the existence of some object on the page //


Given('user is logged in', async function () {
    var url = loginPage.getUrl();
    await helpers.goToPage(url);
    await loginPage.setUsername(data.userCredentials.userEmail);
    await loginPage.setPassword(data.userCredentials.password);
    await loginPage.submitLoginForm();
    await browser.wait(ExpectedConditions.presenceOf(myAccountPage.getLogoutButton()), 5000, 'No se encontró el botón de logout, ogin fallido');
});

When('user searchs for a product', async function () {
    await myAccountPage.setSearch(data.products.productName);
    await myAccountPage.submitSearch();
});


Then('the product should be displayed', async function () {
    await browser.wait(ExpectedConditions.textToBePresentInElement(myAccountPage.getProductName(), data.products.productName), 5000, `No se encontró el producto: ${data.products.productName}`);
    helpers.takeScreenshot();
}); 