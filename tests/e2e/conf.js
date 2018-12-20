/*eslint-disable */
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
      args: [ '--disable-gpu', '--window-size=2000,1000' ],
    },
  },
};
