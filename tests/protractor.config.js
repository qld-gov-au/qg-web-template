var SpecReporter = require('jasmine-spec-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    directConnect: true,
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