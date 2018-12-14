/*eslint-disable */

describe('Service finder', function () {
  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    browser.get('/template-pages/content-page.html');
  });
  it('Autocomplete is working as expected', function () {
    element(by.id('qg-search-query')).sendKeys('jobs');
    browser.driver.sleep(1000);
    expect($$('.listbox li').count()).toBeGreaterThan(0);
  });
  it('Feedback form is working as expected', function () {
    expect(element(by.id('qg-page-feedback')).getAttribute('class')).not.toBe('row collapse show');
    element(by.id('page-feedback-useful')).click();
    browser.driver.sleep(500);
    expect(element(by.id('qg-page-feedback')).getAttribute('class')).toBe('row collapse show');
  });
});
