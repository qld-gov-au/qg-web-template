import {modulesLoader} from './lib/mapFiles';
/*modules dynamic loading process v1-

* Create a object with the identifier, js and css(if any) to load files dynamically
* Currently it supports loading max of 4 js files async in sequence and 1 css file per module

* */
const modulesPath = '/assets/v3/modules/';
const filesMap = {
  slider: {
    identifier: 'qg-slider',
    css: `${modulesPath}slider/styles/slider.css`,
    js: [`${modulesPath}slider/slider.bundle.js`],
  },
  feeds: {
    identifier: 'qg-social-feed',
    js: [`${modulesPath}social-feed/social-feed.bundle.js`],
  },
  quickExit: {
    identifier: '#qg-quick-exit',
    css: `${modulesPath}quick-exit/styles/quick-exit.css`,
    js: [`${modulesPath}quick-exit/quick-exit.bundle.js`],
  },
  pagination: {
    identifier: '.pagination',
    css: `${modulesPath}pagination/styles/pagination.css`,
    js: [`${modulesPath}pagination/pagination.bundle.js`],
  },
  data: {
    identifier: '#data-url',
    css: '',
    js: ['/assets/v3/lib/ext/jquery.jsonp.js', `${modulesPath}data/data.bundle.js`],
  },
};

// initializing dynamic loading function
modulesLoader().dynamicLoading(modulesPath, filesMap);

