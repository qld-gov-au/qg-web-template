'use strict';

// Node.js task to convert SSI includes to inline html

const path = require('path');
const ssiToStatic = require('../ssi-to-static.js');

const includeSrc = path.join('build');
const src = path.join('build', 'docs');
const dest = path.join('build', 'docs');
const exclude = [];

ssiToStatic(includeSrc, src, dest, exclude);
