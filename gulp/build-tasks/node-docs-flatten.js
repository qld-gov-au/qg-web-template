'use strict';

// Node.js task to convert SSI includes to inline html

const path = require('path');
const ssiToStatic = require('./ssi-to-static.js');

let includeSrc = path.join('build', 'docs');
let src = path.join('build', 'docs');
let dest = path.join('build', 'docs');
let exclude = [];

ssiToStatic(includeSrc, src, dest, exclude);
