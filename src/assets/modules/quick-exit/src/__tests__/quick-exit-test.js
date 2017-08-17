import {quickExit} from '../lib/quick-exit';

describe('QG Quick Exit function :-', function () {
  beforeEach(function () {
    jasmine.getFixtures().fixturesPath = 'base/src/assets/modules/quick-exit/src/__tests__/fixtures';  // path to your templates
    jasmine.getFixtures().load('qe-fixtures.html');   // load a template
    //intialize quick exit function
    quickExit.init();
  });

  it('Should have the quick exit markup', function () {
    expect($('#qg-quick-exit')[0]).toContainHtml('<ul><li><a target="_top" data-accesskey="Esc" href="http://www.abc.net.au/tv/epg/#/" title="ABC"><img src="/assets/v3/modules/quick-exit/images/abc-bw.png" alt="ABC"></a></li><li><a target="_top" href="https://www.facebook.com/" title="Facebook"><img src="/assets/v3/modules/quick-exit/images/facebook-bw.png" alt="Facebook"></a></li></ul><footer><strong>or press \'Esc\'</strong></footer>');
  });
});
