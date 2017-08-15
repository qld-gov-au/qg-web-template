import {sliderConfig} from '../lib/qg-slider-config';
/*import { processXML } from '/media/aminaz/1tb/repos/__SWE__/qg-web-template/src/assets/modules/slider/src/lib/qg-get-xml.js';*/

describe('QG Slider unit tests :-', () => {
  it('Should display the date in correct format', () => {
    expect(sliderConfig.convertDate('2013-07-01T22:47:36+10:00')).toEqual('1 Jul 2013');
  });
  it('Should get the data', () => {
    expect(sliderConfig.convertDate('2013-07-01T22:47:36+10:00')).toEqual('1 Jul 2013');
  });
  it('data should be in XML format', () => {
    expect(sliderConfig.convertDate('2013-07-01T22:47:36+10:00')).toEqual('1 Jul 2013');
  });
});

