'use strict';

// Node.js task to convert SSI includes to inline html
const path = require('path');
const ssiToStatic = require('../ssi-to-static.js');
const config  = require('../../gulp/gulp-config.js');

const storiesPath = `${config.basepath.static}/assets/${config.versionName}/latest/stories`;

ssiToStatic(path.join('release', 'template-cdn-ssi'), path.join('release', 'template-cdn'), path.join('release', 'template-cdn'), []);
ssiToStatic(path.join('release', 'template-local-ssi'), path.join('release', 'template-local'), path.join('release', 'template-local'), []);
ssiToStatic(path.join('release', 'template-cdn-ssi'), storiesPath, storiesPath, []);
