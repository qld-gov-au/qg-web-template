'use strict';

const config = {
  version: 'v3',
  phase: 'Alpha',
  basepath: {
    src: 'src',
    build: 'build',
    release: 'release',
    static: 'release/static.qgov.net.au',
    test: 'test',
    swe: 'swe',
    bowerVersion: 0,
    node_modules: 'node_modules'
  },

  projects: ['core'], // 'cue'

  build: {
    excludes: [
      '!**/_DELETE.*/**/*',
      '!**/_old*/**/*',
      '!**/_old*'
    ]
  },
  release: {
    excludes: [
      '!**/_DELETE.*/**/*',
      '!**/_old*/**/*',
      '!**/_old*',
      '!**/_local*',
      '!**/_local*/**/*',
      '!**/*.css.map',
      '!**/*.js.map'
    ]
  },
  test: {
      e2eTestReport () {
          return config.basepath.test + 'reports/e2e/htmlReport.html';
      },
      unitTestReport () {
          return config.basepath.test + 'reports/unit-test/report.html';
      },
      lintReport () {
          return config.basepath.test + 'reports/eslint/report.html';
      },
      coverageReport () {
          return config.basepath.test + 'reports/coverage/index.html';
      },
      protractorConfig () {
          return 'tests/protractor.config.js';
      },
      karmaConfig () {
          return process.cwd() + '/karma.config.js';
      }
  },
  outputList: ['/', 'template-local', 'template-cdn', 'documentation'],
  output: {
    '/': {
      assetsCore: true, // Default: false
      sourceSCSS: true, // Default: false
      assetsIncludes: true, // Default: false
      assetsIncludesCdn: true, // Default: false
      localToCdn: false, // Default: false, note to include the appropriate assetsIncludes directory above
      copyElement: false // Default: false, accepts string for source element
    },
    'template-local': {
      assetsCore: true,
      sourceSCSS: false,
      assetsIncludes: true,
      assetsIncludesCdn: false,
      localToCdn: false,
      copyElement: 'template'
    },
    'template-cdn': {
      assetsCore: false,
      sourceSCSS: false,
      assetsIncludes: false,
      assetsIncludesCdn: true,
      localToCdn: true,
      copyElement: 'template'
    },
    documentation: {
      assetsCore: false,
      sourceSCSS: false,
      assetsIncludes: true,
      assetsIncludesCdn: false, // TODO: change to true
      localToCdn: false, // TODO: change to true
      copyElement: true
    }
  }
};
module.exports = config;