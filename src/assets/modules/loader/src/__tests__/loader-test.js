import {modulesLoader} from '../lib/mapFiles';
describe('QG Loader Unit tests :-', function () {
  beforeEach(function () {

  });
  it('arguments list', function () {
    spyOn(modulesLoader(), 'onloadCSS');
  });
});
