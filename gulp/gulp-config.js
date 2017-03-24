'use strict';

module.exports = {
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
    ],
  },
  outputList: ['core', 'template-local', 'template-cdn', 'documentation'],
  output: {
    core: {
      assetsCore: true,
      sourceSCSS: true,
      assetsIncludes: true,

    },
    'template-local': {
      assetsCore: true,
      sourceSCSS: false,
      assetsIncludes: true,

    },
    'template-cdn': {
      assetsCore: false,
      sourceSCSS: false,
      assetsIncludes: true,

    },
    documentation: {
      assetsCore: false,
      sourceSCSS: false,
      assetsIncludes: true,
    }
  },
};
