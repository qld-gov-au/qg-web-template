module.exports = {
  'Demo Page should have a slider': function (browser) {
    browser
      .url('http://localhost:7777/demo/modules-demo.html')
      .waitForElementVisible('#qg-content', 1000)
      .assert.elementPresent('.unslider')
      .click('.next')
      .assert.elementPresent('li.unslider-active')
      .end();
  }
};

