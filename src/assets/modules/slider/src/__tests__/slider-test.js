import {sliderConfig} from '../lib/slider-config';

describe('QG Slider unit tests :-', () => {
  it('Should display the date in correct format', () => {
    expect(sliderConfig.convertDate('2013-07-01T22:47:36+10:00')).toEqual('1 Jul 2013');
  });
});
