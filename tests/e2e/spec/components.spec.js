/*eslint-disable */

describe('SWE components testing', function () {
  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    browser.get('/docs/components.html');
  });
  it('Twitter and Facebook feed is working as expected', function () {
    var myElement = element(by.id('twitter-widget-0'));
    expect(myElement.isPresent()).not.toBeFalsy();
    browser.driver.sleep(500);
  });
  it('Carousel is working as expected', function () {
    expect(element.all(by.css('.carousel-item')).first().getAttribute('class')).toMatch('carousel-item active');
    expect(element.all(by.css('.carousel-item')).get(2).getAttribute('class')).toMatch('carousel-item');
  });
});
