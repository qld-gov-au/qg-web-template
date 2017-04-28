'use strict';
// config specific imports
const path        = require('path');
const pjson       = require('../package.json');

module.exports = {
  versionName: 'v3',
  versionStr: '3.0.9',
  version: {
    major: 3,
    semiMajor: 0,
    minor: 9,
  },
  phase: 'Alpha',
  basepath: {
    src: 'src',
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
    excludes: [
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
    ],
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
      '!build/**/*',
      '!release/**/*',
      '!**/_old/**/*',
      '!**/_local*/**/*',
      '!**/_local.*',
      '!**/legacy/**/*',
      '!**/lib/ext/**/*',
    ],
  },
  outputList: ['/', 'template-local', 'template-cdn', 'docs'],
  output: {
    // Sets the options for output to release for each module
    '/': {
      // Root directory
      // Copy the core project assets to the target directory, Default: false
      assetsCore: true,
      // Copy the SCSS to the target directory, Default: false
      sourceSCSS: true,
      // Copy the local includes to the target directoy, Default: false
      assetsIncludes: true,
      // Copy the CDN incldues to the target directoy, Default: false
      assetsIncludesCdn: true,
      // Convert html SSI includes to point to CDN assets, must include the appropriate assetsIncludes above, Default: false
      includesLocalToCdn: false,
      // Convert html SSI includes to be root relative
      includesRel: false,
      // Copy the target directory from build to release and set it's name to the name of this element, Default: false
      copyElement: false,
      // Source
      src: '/',
      // Destination of output
      dest: '/',
      // Transform assets to relative urls TODO: REMOVE THIS! It's just temporary before files are in CDN, Default: false
      assetsRel: false,
      // Flatten includes into referencing html files, Default: false
      assetIncludesFlatten: false,
    },
    'template-local': {
      // The template using local assets
      assetsCore: true,
      sourceSCSS: false,
      assetsIncludes: true,
      assetsIncludesCdn: false,
      includesLocalToCdn: false,
      includesRel: false,
      copyElement: true,
      src: 'template-pages',
      dest: 'template-local',
      assetsRel: false,
      assetIncludesFlatten: false,
    },
    'template-cdn': {
      // The template using cdn (static.qld.gov.au) assets
      assetsCore: false,
      sourceSCSS: false,
      assetsIncludes: false,
      assetsIncludesCdn: true,
      includesLocalToCdn: true,
      includesRel: false,
      copyElement: true,
      src: 'template-pages',
      dest: 'template-cdn',
      assetsRel: false,
      assetIncludesFlatten: false,
    },
    docs: {
      // User documentation
      assetsCore: true,
      sourceSCSS: false,
      assetsIncludes: true,
      assetsIncludesCdn: false,
      includesLocalToCdn: false,
      includesRel: true,
      copyElement: true,
      src: 'docs',
      dest: 'docs',
      assetsRel: true,
      assetIncludesFlatten: true,
    },
  },
};
