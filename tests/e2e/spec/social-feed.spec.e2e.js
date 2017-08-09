module.exports = {
  'Demo Page should have a Facebook and Twitter feed': function (browser) {
    browser
      .url('http://localhost:7777/demo/modules-demo.html')
      .waitForElementVisible('#qg-content', 1000)
      .assert.elementPresent('.fb-page.fb_iframe_widget')
      .assert.elementPresent('#twitter-widget-0')
      .click('.facebook-updates .more a')
      .pause(500)
      .assert.urlMatch(new RegExp('facebook.com', 'i'))
      .back()
      .click('.twitter-updates .more a')
      .pause(500)
      .assert.urlMatch(new RegExp('twitter.com', 'i'))
      .end();
  },
};

