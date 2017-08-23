'use strict';

// Node.js task to convert SSI includes to inline html

const path = require('path');
const ssiToStatic = require('../build-tasks/ssi-to-static.js');

ssiToStatic(path.join('release', 'template-cdn'), path.join('release', 'template-cdn'), path.join('release', 'template-cdn-static'), []);
ssiToStatic(path.join('release', 'template-local'), path.join('release', 'template-local'), path.join('release', 'template-local-static'), []);
