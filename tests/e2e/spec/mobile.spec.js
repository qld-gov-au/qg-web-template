/*eslint-disable */

describe('SWE Mobile Interactions', function () {
  beforeEach(() => {
    var width = 600;
    var height = 1000;
    browser.driver.manage().window().setSize(width, height);
    browser.waitForAngularEnabled(false);
    browser.get('/template-pages/content-page.html');
  });
  it('Menu is appearing on clicking menu icon', function () {
    expect(element(by.id('qg-site-nav')).getAttribute('class')).not.toBe('collapse show');
    element(by.id('qg-show-menu')).click();
    browser.driver.sleep(500);
    expect(element(by.id('qg-site-nav')).getAttribute('class')).toBe('collapse show');
  });
  it('Search is appearing on clicking search icon', function () {
    expect(element(by.id('qg-search-form')).getAttribute('class')).not.toBe('col-xs-12 col-md-3 collapse show');
    element(by.id('qg-show-search')).click();
    browser.driver.sleep(500);
    expect(element(by.id('qg-search-form')).getAttribute('class')).toBe('col-xs-12 col-md-3 collapse show');
  });
  it('Site map toggle function is working as expected', function () {
    expect(element(by.id('footer-info-qg')).getAttribute('class')).not.toBe('collapse show');
    element(by.className('qg-toggle-icon-right')).click();
    browser.driver.sleep(1000);
    expect(element(by.id('footer-info-qg')).getAttribute('class')).toBe('collapse show');
  });
});
