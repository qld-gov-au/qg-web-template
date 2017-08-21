import {facebook, twitter} from '../lib/social-feed';

describe('QG Social feed Unit tests :-', function () {
  beforeEach(function () {
    jasmine.getFixtures().fixturesPath = 'base/src/assets/modules/social-feed/src/__tests__/fixtures';  // path to your templates
    jasmine.getFixtures().load('social-fixtures.html');   // load a template
    //intialize social feed function
    twitter.init();
    facebook.init();
  });
  it('Facebook SDK script should be present on initialization', function () {
    var src = 'http://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8';
    expect(document.getElementsByTagName('script')[0].src).not.toEqual(src);
    spyOn(facebook, 'init');
    facebook.facebookSdkScript();
    expect(document.getElementsByTagName('script')[0].src).toEqual(src);
  });
  it('Twitter SDK script should be present on initialization', function () {
    var src = 'http://platform.twitter.com/widgets.js';
    expect(document.getElementsByTagName('script')[0].src).not.toEqual(src);
    spyOn(twitter, 'init');
    twitter.runScript();
    expect(document.getElementsByTagName('script')[0].src).toEqual(src);
  });
});
