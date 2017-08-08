module.exports = {
  'Should have a search box with autocomplete functionality': function (browser) {
    browser
      .url('http://localhost:7777/demo/modules-demo.html')
      .waitForElementVisible('#qg-content', 1000)
      .assert.elementPresent('#feature-search-submit')
      .setValue('#qg-search-query', 'Site')
      .waitForElementVisible('#suggestbox li', 1000)
      .end();
  }
};

