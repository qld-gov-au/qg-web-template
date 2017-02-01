describe('Protractor Demo App', function () {
    it('should add one and two', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);

        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).
        toEqual('5'); // This is wrong!
    });
});