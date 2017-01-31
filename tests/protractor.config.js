var SpecReporter = require('./../node_modules/jasmine-spec-reporter/src/jasmine-spec-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    directConnect: true,
    seleniumServerJar: "./node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar",
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function () {
        }
    },
    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            args: ['--test-type']
        }
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter());
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './tests/reports/e2e/',
                screenshotsFolder: 'images',
                consolidate: true,
                consolidateAll: true
            })
        );
    }
};