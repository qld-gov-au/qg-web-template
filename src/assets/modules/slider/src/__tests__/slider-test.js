import {sliderConfig} from '../lib/qg-slider-config';
import {processXML} from '../lib/qg-get-xml';

describe('QG Slider unit tests :-', () => {
  beforeEach(function () {
    jasmine.getFixtures().fixturesPath = 'base/src/assets/modules/slider/src/__tests__/fixtures';  // path to your templates
    jasmine.getFixtures().load('slider-fixtures.html');   // load a template
  });

  it('Should get the data', (done) => {
    var sampleFile = 'base/src/assets/modules/slider/src/__tests__/fixtures/sample.atom';
    processXML(sampleFile).then(function (result) {
      expect(result).toContain('<?xml version="1.0" encoding="UTF-8"?>');
      done();
    });
  });

  it('Should display the date in correct format', () => {
    expect(sliderConfig.convertDate('2013-07-01T22:47:36+10:00')).toEqual('1 Jul 2013');
  });

  it('Should have access to the AJAX function in the correct format', () => {
    var sampleFile = 'base/src/assets/modules/slider/src/__tests__/fixtures/sample.atom';
    spyOn($, 'ajax');
    processXML(sampleFile);
    expect($.ajax.calls.mostRecent().args[0].url).toEqual(sampleFile);
    expect($.ajax.calls.mostRecent().args[0].contentType).toEqual('text/xml');
    expect($.ajax.calls.mostRecent().args[0].method).toEqual('GET');
  });
});

