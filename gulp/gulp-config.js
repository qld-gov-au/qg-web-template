'use strict';
// config specific imports
const path        = require('path');
const pjson       = require('../package.json');

module.exports = {
  versionName: 'v3.1',
  version: {
    major: 3,
    minor: 1,
    patch: 0,
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
  webTemplateRepo: {
    url: 'https://github.com/qld-gov-au/web-template-release.git',
    folder: 'web-template-release',
  },
  staticCdnRepo: {
    url: 'ssh://git@servicesmadesimpler.govnet.qld.gov.au:7999/cdn/static-qld_swe-v3_assets.git',
    folder: 'static-qld_swe-v3_assets',
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
    js: ['generate-id.js',
      'jquery.resize-events.js',
      'butterfly/jquery.history.js',
      'butterfly/jquery.butterfly.js',
      'bootstrap.js',
    ],
    css: [
      'butterfly/butterfly.css',
    ],
    transferToBuild: [
      './node_modules/nodep-date-input-polyfill/nodep-date-input-polyfill.dist.js',
      './node_modules/stickyfill/index.js',
      './node_modules/jquery-ui-bundle/jquery-ui.min.css',
      './node_modules/jquery-ui-bundle/jquery-ui.min.js',
      './node_modules/jquery-ui-bundle/images/**',
    ],
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
