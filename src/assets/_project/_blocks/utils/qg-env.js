let testSites = [
  'oss-uat.clients.squiz.net',
  'localhost',
];
let createPath = function () {
  for (let site of testSites) {
    if (site === location.hostname) {
      return 'https://dev-static.qgov.net.au';
    }
  }
  return 'https://static.qgov.net.au';
};

window.qg = window.qg || {};
window.qg.swe = window.qg.swe || {};
window.qg.cdn = createPath();
window.qg.swe.assets = '/assets/v3.1/latest/';

window.qg.swe.paths = {
  images: window.qg.swe.assets + 'images',
};
