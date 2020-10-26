const { Given, When, Then } = require('cucumber');
const { browser, ExpectedConditions, ProtractorExpectedConditions } = require('protractor');
const helpers = require('../commons/helpers');
const loginPage = require('../pages/loginPage');
const myAccountPage = require('../pages/myAccountPage');

// Scenario: Login to demo page and find an object using a condition to continue and log-out or throw an error if it cannot find it. //
Given('user navigates to login page', async function () {
    var url = loginPage.getUrl();
    await helpers.goToPage(url);
});

Given('user completes <email> and <password>', async function () {
    await loginPage.setUsername('username@mail.com');
    await loginPage.setPassword('p455w0rd');
});


When('user clicks login button', async function () {
    await loginPage.submitLoginForm();
});


Then('user should be redirected to my-account page', async function () {
    await browser.wait(ExpectedConditions.presenceOf(myAccountPage.getLogoutButton()), 5000, 'No se encontró el botón de logout, el usuario no inició sesión');
});

Then('user logs out', async function () {
    await myAccountPage.logout();
});

// Scenario: Make a validation on a behavior or on the existence of some object on the page //


Given('user is logged in', async function () {
    var url = loginPage.getUrl();
    await helpers.goToPage(url);
    await loginPage.setUsername('username@mail.com');
    await loginPage.setPassword('p455w0rd');
    await loginPage.submitLoginForm();
    await browser.wait(ExpectedConditions.presenceOf(myAccountPage.getLogoutButton()), 5000, 'No se encontró el botón de logout, el usuario no inició sesión');
    //await browser.wait(ExpectedConditions.textToBePresentInElement(myAccountPage.getLogoutButton(), 'Sign out'), 5000, 'No se encontró el botón de logout, el usuario no inició sesión');
});

When('user searchs for a product', async function () {
    await myAccountPage.setSearch('Faded Short Sleeve T-shirts');
    await myAccountPage.submitSearch();
});


Then('the product should be displayed', async function () {
    await browser.wait(ExpectedConditions.textToBePresentInElement(myAccountPage.getProductName(), 'Faded Short Sleeve T-shirts'), 5000, 'No se encontró el producto Faded Short Sleeve T-shirts');
});