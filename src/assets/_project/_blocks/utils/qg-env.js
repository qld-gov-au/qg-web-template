// All the environment related SWE3 code

window.qg = window.qg || {};
window.qg.swe = window.qg.swe || {};
window.qg.cdn = window.qg.swe.isProduction === false ? 'https://beta-static.qgov.net.au' : 'https://static.qgov.net.au';
window.qg.swe.assets = '/assets/v3.1/latest/';

window.qg.swe.paths = {
  images: window.qg.swe.assets + 'images',
};
