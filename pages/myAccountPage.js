'use strict';

var myAccountPage = function () {
  var url = 'http://automationpractice.com/index.php?controller=my-account';
  var logoutButton = element(by.className('logout'));
  var txtSearchBox = element(by.id('search_query_top'));
  var btnSearchButton = element(by.name('submit_search'));
  var productName = element(by.css('.right-block .product-name'));

  
  this.logout = async function () {
    await logoutButton.click();
  };

  this.get = async function() {
    await browser.get('http://automationpractice.com/index.php?controller=my-account');
  };

  this.getUrl = function () {
    return url;
  };

  this.getLogoutButton = function () {
    return logoutButton;
  };

  this.getSearchBox = function () {
    return searchBox;
  };

  this.getProductName = function () {
    return productName;
  };

  this.setSearch = async function (searchInput) {
    await txtSearchBox.sendKeys(searchInput);
  }

  this.submitSearch = async function (){
    await btnSearchButton.click();
  }

};
module.exports = new myAccountPage();