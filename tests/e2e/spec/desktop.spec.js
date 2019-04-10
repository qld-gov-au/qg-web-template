/*eslint-disable */
const protractorImageComparison = require('protractor-image-comparison');

describe('SWE templates visual regression tests', function () {
  beforeEach(function () {
    browser.protractorImageComparison = new protractorImageComparison({
      baselineFolder: './tests/e2e/screenshots/baseline',
      screenshotPath: './tests/e2e/screenshots',
      autoSaveBaseline: true
    });
  });

  it('should match the Content page', () => {
    browser.get('/template-pages/content-page.html');
    expect(browser.protractorImageComparison.checkFullPageScreen('content-page')).toEqual(0);
  });

  it('should match the Index Page', () => {
    browser.get('/template-pages/index-page.html');
    expect(browser.protractorImageComparison.checkFullPageScreen('index-page')).toEqual(0);
  });
  it('should match the Aggregation Page', () => {
    browser.get('/template-pages/aggregation-page.html');
    expect(browser.protractorImageComparison.checkFullPageScreen('aggregation-page')).toEqual(0);
  });
  it('should match the Application Page', () => {
    browser.get('/template-pages/application-page.html');
    expect(browser.protractorImageComparison.checkFullPageScreen('application-page')).toEqual(0);
  });
  it('should match the Topic Index Page', () => {
    browser.get('/template-pages/topic-index-page.html');
    expect(browser.protractorImageComparison.checkFullPageScreen('topic-index-page')).toEqual(0);
  });
});
