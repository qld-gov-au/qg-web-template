module.exports = {
  'local testing' : function (browser) {
    browser
      .url('http://196.168.33.10/')
      .waitForElementVisible('body', 1000)
      .assert.title('testpage')
      .end();
  }
};

