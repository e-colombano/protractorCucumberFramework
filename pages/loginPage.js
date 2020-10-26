'use strict';

var loginPage = function () {
  var url = 'http://automationpractice.com/index.php?controller=authentication&back=my-account';
  var txtEmail = element(by.id('email'));
  var txtPassword = element(by.id('passwd'));
  var btnLogin = element(by.id('SubmitLogin'));


  this.setUsername = async function (email) {
    await txtEmail.sendKeys(email);
  };

  this.setPassword = async function (password) {
    await txtPassword.sendKeys(password);
  };

  this.submitLoginForm = async function () {
    await btnLogin.click();
  }

  this.getUrl = function () {
    return url;
  };
};
module.exports = new loginPage();