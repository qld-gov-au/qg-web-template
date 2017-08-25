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
    modules: path.join('..', '..', 'src', 'assets', 'modules'),
    build: 'build',
    release: 'release',
    static: 'release/static.qgov.net.au',
    test: 'test',
    swe: 'swe',
    bowerVersion: 0,
    node_modules: 'node_modules',
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
    staticEnv: {
      envFiles: ['loader.bundle.js'],
      envPath: '/_env',
      env: {prod: 'static.qgov.net.au', beta: 'beta-static.qgov.net.au', test: 'test-static.qgov.net.au', dev: 'dev-static.qgov.net.au'},
    }
  },
  extLib: {
    js: ['generate-id',
      'jquery.resize-events',
      'butterfly/jquery.history',
      'butterfly/jquery.butterfly',
    ],
    css: [
      'butterfly/butterfly.css'
    ]
  },
  publish: {
    npmDir: path.join('..', 'web-template-release'),
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
