'use strict';
// config specific imports
const path        = require('path');
const pjson       = require('../package.json');

module.exports = {
  versionName: 'v3',
  versionStr: '3.0.9',
  version: {
    major: 3,
    minor: 0,
    patch: 9,
  },
  phase: 'Alpha',
  basepath: {
    src: 'src',
    modules: path.resolve('src', 'assets', 'modules'),
    build: 'build',
    release: 'release',
    static: 'release/static.qgov.net.au',
    test: 'test',
    swe: 'swe',
    bowerVersion: 0,
    node_modules: 'node_modules',
  },
  releaseRepo: {
    url: 'https://github.com/gvanimurthy/boiler-plates.git',
    folder: 'boiler-plates'
  },
  projects: ['core'], // 'cue'
  build: {
    excludes: [ //remove excludes
      '!**/_DELETE.*/**/*',
      '!**/_old*/**/*',
      '!**/_old*',
    ],
  },
  release: {
    excludes: [
      '!**/_DELETE.*/**/*',
      '!**/_old*/**/*',
      '!**/_old*',
      '!**/_local*',
      '!**/_local*/**/*',
      '!**/*.css.map',
      '!**/*.js.map',
      '!**/_other-files/**/*',
    ],
  },
  extLib: {
    js: ['generate-id',
      'jquery.resize-events',
      'butterfly/jquery.history',
      'butterfly/jquery.butterfly',
      'autocomplete'
    ],
    css: [
      'butterfly/butterfly.css'
    ]
  },
  publish: {
    version: pjson.version,
  },
  test: {
    karmaConfig () {
      return process.cwd() + '/karma.config.js';
    },
    // Linting source and exclusions
    lint: [
      'gulpfile.js',
      'src/**/*.js',
      'gulp/**/*.js',
      'tests/**/*.js',
      '!tests/reports/**/*.js',
      '!src/assets/modules/**/*.js',
      '!src/docs/assets/js/prism.js',
      '!build/**/*',
      '!release/**/*',
      '!**/_old/**/*',
      '!**/_local*/**/*',
      '!**/_local.*',
      '!**/legacy/**/*',
      '!**/lib/ext/**/*',
    ],
  },
};
