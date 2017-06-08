'use strict';

// Node.js task to convert SSI includes to inline html

const path = require('path');
const ssiToStatic = require('./ssi-to-static.js');
// TODO: Delete /includes-local/ after flatten process
// const del = require('del');

let includeSrc = path.join('build', 'docs');
let src = path.join('build', 'docs');
let dest = path.join('build', 'docs');
let exclude = [];

ssiToStatic(includeSrc, src, dest, exclude);

// del('build/docs/includes-local/');
