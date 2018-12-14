exports.config = {
  onPrepare: function () {
    const protractorImageComparison = require('protractor-image-comparison');
    browser.protractorImageComparison = new protractorImageComparison(
      {
        baselineFolder: '/screenshots',
        screenshotPath: './tests/e2e/screenshots',
      }
    );
  },
  capabilities: {
    browserName: 'chrome',

    chromeOptions: {
      args: [ '--disable-gpu', '--window-size=1200,1000' ],
    },
  },
  baseUrl: 'http://localhost:7777',
  specs: ['spec/*.spec.js'],
};
