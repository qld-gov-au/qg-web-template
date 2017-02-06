module.exports = {
    'local testing' : function (browser) {
        browser
            .url('https://nightwatch-browserstack-asifaminb.c9users.io')
            .waitForElementVisible('body', 1000)
            .assert.title('testpage')
            .end();
    }
};
