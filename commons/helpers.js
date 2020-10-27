const { browser } = require("protractor");
const fs = require('fs');

var helpers = function () {

    this.goToPage = async function (url) {
        await browser.get(url);
    };

    this.pause = async function (pauseTime) {
        await browser.sleep(pauseTime);
    };

    this.takeScreenshot = async function () {
        await browser.takeScreenshot().then(function (png) {
            var dirPath = './screenshots/';
            var stream = fs.createWriteStream(dirPath + 'screenshot.png');
            stream.write(new Buffer.from(png, 'base64'));
            stream.end();
        });
    };

};
module.exports = new helpers();
