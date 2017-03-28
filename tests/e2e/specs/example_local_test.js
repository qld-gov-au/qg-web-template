module.exports = {
    'local testing': function (browser) {
        browser
            .url('http://localhost:7779/template/three-col.html')
            .waitForElementVisible('body', 1000)
            .assert.title('Add your heading | Queensland Government')
            .end();
    }
};
