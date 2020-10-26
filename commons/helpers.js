const { browser } = require("protractor");

var helpers = function () {

    this.goToPage = async function (url) {
        await browser.get(url);
    };

    this.pause = async function (pauseTime) {
        await browser.sleep(pauseTime);
    }

};
module.exports = new helpers();
