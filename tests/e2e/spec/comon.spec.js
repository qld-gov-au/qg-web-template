/*eslint-disable */

describe('SWE templates testing', function () {
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
  /* Running tests on opengraph */
  it('Open graph behaving as expected', function () {
    browser.driver.sleep(500);
    expect(element(by.property('og:title')).getAttribute('content')).not.toBe('');
    expect(element(by.property('og:description')).getAttribute('content')).not.toBe('');
    expect(element(by.property('og:image')).getAttribute('content ')).not.toBe('');
    expect(element(by.property('og:url')).getAttribute('content')).not.toBe('');
    expect(element(by.property('og:type')).getAttribute('content')).not.toBe('');
    expect(element(by.name('twitter:card')).getAttribute('content')).not.toBe('');
    expect(element(by.name('twitter:site')).getAttribute('content')).not.toBe('');
    expect(element(by.name('twitter:title')).getAttribute('content')).not.toBe('');
    expect(element(by.name('twitter:description')).getAttribute('content')).not.toBe('');
    expect(element(by.name('twitter:image')).getAttribute('content')).not.toBe('');
  });
});
