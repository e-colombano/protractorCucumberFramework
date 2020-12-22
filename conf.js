
exports.config = {

directConnect: true,

//Running chrome
Capabilities: { browserName: 'chrome'
},

//point specs to feature files , my feature files are under features folder
specs: ['features/*.feature'],

//set framework options
framework: 'custom',
frameworkPath: require.resolve('protractor-cucumber-framework'),

//just maximizing window before testing
onPrepare: function(){
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.driver.ignoreSynchronization = true;
 } ,

//Create html report
onComplete: () => {
 var reporter = require('cucumber-html-reporter');
 var options = {
   theme: 'bootstrap',
   jsonFile: 'results.json',
   output: 'results.html',
   reportSuiteAsScenarios: true,
   launchReport: true,
   metadata: {
       "App Version":"0.3.2",
       "Test Environment": "QA",
       "Browser": "Chrome",
       "Platform": "Windows 10",
       "Parallel": "Scenarios",
       "Executed": "Remote"
   },
   output: 'reports/cucumber_report.html',
 };
  reporter.generate(options);
},

//set cucumber options

cucumberOpts: {
     require: ['stepDefinitions/*.js','commons/*js'],
     strict: true,
     format: [],    //don't put 'Pretty' as it is deprecated
     'dry-run': false,
     compiler: [],
     format: 'json:results.json',    //make sure you are not using multi-capabilities
   },
 SELENIUM_PROMISE_MANAGER: false,
 };