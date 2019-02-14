/**
 * Dependency Modules
 */
var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");
require("geckodriver");
// Application Server
const serverUri = "http://159.203.3.106:3000";
const appTitle = "React HEX App";
/** * 
 * Config for Chrome browser
 * @type {webdriver}
 */

/**
 * Config for Firefox browser (Comment Chrome config when you intent to test in Firefox)
 * @type {webdriver}
 */
/*

/**
 * Function to get the title and resolve it it promise.
 * @return {[type]} [description]
 */

 const browser = new chrome.Options();
    browser.addArguments(
        'headless',
        'disable-gpu',
        );
        new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(browser)
        .build();


function logTitle() {
 return new Promise((resolve, reject) => {
  browser.getTitle().then(function(title) {
   resolve(title);
  });
 });
}
/**
 * Sample test case
 * To check whether the given value is present in array.
 */
describe("Array", function() {
 describe("#indexOf()", function() {
  it("should return -1 when the value is not present - Just to see if selenium is running", function() {
   assert.equal([1, 2, 3].indexOf(4), -1);
  });
 });
});
describe("Home Page", function() {
 /**
  * Test case to load our application and check the title.
  */
 it("Should load the home page and get title", function() {
  return new Promise((resolve, reject) => {
   browser
    .get(serverUri)
    .then(logTitle)
    .then(title => {
     assert.strictEqual(title, appTitle);
     resolve();
    })
    .catch(err => reject(err));
  });
 });
/**
  * Test case to check whether the given element is loaded.
  */
 it("Should check whether the given element is loaded", function() {
  return new Promise((resolve, reject) => {
   browser
    .findElement({ id: "hexInput" })
    .then(elem => resolve())
    .catch(err => reject(err));
  });
 });
/**
  * End of test cases use.
  * Closing the browser and exit.
  */
 after(function() {
  // End of test use this.
  browser.quit();
 });
});