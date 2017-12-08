'use strict';
// init env variables
require('dotenv').config();

// Core
const gulp            = require('gulp');
const config          = require('./gulp/gulp-config.js');
const del             = require('del');
const gulpWebpack     = require('webpack-stream');
const webpack         = require('webpack');
const argv            = require('yargs').argv;
const plugins         = require('gulp-load-plugins')();
const es              = require('event-stream');
const runSequence     = require('run-sequence');
const path            = require('path');
const addSrc          = require('gulp-add-src');

// For testing
const karmaServer       = require('karma').Server;
const fsPath            = require('fs-path');
const eslintReporter    = require('eslint-html-reporter');
const connectssi        = require('gulp-connect-ssi');
const connect           = require('gulp-connect');
// const wait              = require('gulp-wait');

/* CLEAN TASKS */
gulp.task('clean-build', (cb) => {
  return del([config.basepath.build], cb);
});
gulp.task('clean-release', (cb) => {
  return del([config.basepath.release], cb);
});
gulp.task('clean-redundant-build', (cb) => {
  return del([`${config.basepath.build}/docs/assets/includes-local`], cb);
});
gulp.task('clean-redundant-release', (cb) => {
  return del([`${config.basepath.release}/template-cdn/assets`, `${config.basepath.release}/template-local/assets/includes-local`], cb);
});

/* BUILD */
gulp.task('template-pages', require('./gulp/build-tasks/template-pages')(gulp, plugins, config, 'template-pages', 'template-pages', 'local'));
gulp.task('template-pages-docs', require('./gulp/build-tasks/template-pages')(gulp, plugins, config, 'docs', 'docs', 'local'));

let assetDests = ['assets', 'docs/assets'];
gulp.task('scss', require('./gulp/common-tasks/scss')(gulp, plugins, config, assetDests, addSrc));
gulp.task('js', require('./gulp/common-tasks/js')(gulp, plugins, config, gulpWebpack, assetDests));

gulp.task('other-assets', ['other-assets-root', 'other-assets-docs']);
gulp.task('other-assets-root', require('./gulp/build-tasks/other-assets')(gulp, plugins, config, es, assetDests[0]));
gulp.task('other-assets-docs', require('./gulp/build-tasks/other-assets')(gulp, plugins, config, es, assetDests[1]));

gulp.task('build-other-files', require('./gulp/build-tasks/other-files')(gulp, plugins, config));

gulp.task('assets-includes-local', require('./gulp/build-tasks/assets-includes')(gulp, plugins, config, 'assets/includes-local', true));
gulp.task('assets-includes-docs', require('./gulp/build-tasks/assets-includes')(gulp, plugins, config, 'docs/assets/includes-local', true, true));
gulp.task('assets-includes-cdn', require('./gulp/build-tasks/assets-includes')(gulp, plugins, config, 'assets/includes-cdn'));

// FIXME: Re-add unit tests
gulp.task('build', (cb) => {
  runSequence(
    'test:eslint',
    'assets-includes-docs',
    'assets-includes-cdn',
    'assets-includes-local',
    'template-pages',
    'js',
    'scss',
    'other-assets',
    'build-other-files',
    'template-pages-docs',
    cb
  );
});

gulp.task('default', ['build']);

/* WATCH TASKS */
// Note: External libraries and external modules are not watched
gulp.task('watch:project', function () {
  gulp.watch([`${config.basepath.src}/assets/_project/_blocks/layout/**/*.html`], ['assets-includes-local', 'assets-includes-docs']);
  gulp.watch([`${config.basepath.src}/assets/_project/**/*.scss`], ['scss']);
  gulp.watch(`${config.basepath.src}/assets/_project/_blocks/**/*.js`, { verbose: true }, ['js', 'test']);
  gulp.watch(`${config.basepath.src}/assets/_project/lib/**/*.js`, { verbose: true }, ['other-assets']);
  gulp.watch([`${config.basepath.src}/assets/_project/images/**/*`], ['other-assets']);
  gulp.watch([`${config.basepath.src}/_other-files/**/*`], ['build-other-files']);
});

gulp.task('watch:docs', function () {
  gulp.watch([config.basepath.src + '/docs/**/*.html'], ['template-pages-docs', 'assets-includes-docs']);
    gulp.on('stop', () => {
      return plugins.shell(['node gulp/build-tasks/node-docs-flatten.js && gulp clean-redundant-build']);
    });
});
gulp.task('watch:serve', ['watch', 'serve']);
gulp.task('watch', ['watch:project', 'watch:docs', 'serve']);

/* RELEASE TASKS */
// Grabs SCSS from SRC and moves to release, does not process
gulp.task('scss-src', require('./gulp/release-tasks/scss-src')(gulp, plugins, config));
gulp.task('release-other-files', require('./gulp/release-tasks/other-files')(gulp, plugins, config));
gulp.task('release-files', require('./gulp/release-tasks/files')(gulp, plugins, config, es, webpack, path));

gulp.task('release', (cb) => {
  return runSequence(
    [
      'release-files',
      'scss-src',
      'release-other-files',
    ],
    cb
  );
});

/* NPM Publish*/
gulp.task('npm:publish', ['release'], require('./gulp/publish-tasks/npm.js')(gulp, plugins, config, argv));

/* TEST TASKS */
gulp.task('test:unit', require('./gulp/test-tasks/unit')(gulp, plugins, config, karmaServer));
gulp.task('test:eslint', require('./gulp/test-tasks/lint')(gulp, plugins, config, fsPath, eslintReporter));
gulp.task('test:e2e:browserstack', require('./gulp/test-tasks/e2e')(gulp, plugins, argv));
gulp.task('test:e2e:local', function () {
  return gulp.src('')
    .pipe(plugins.nightwatch({
      configFile: 'tests/e2e/config.json',
    }));
});
gulp.task('process-exit', function () {
  process.exit(0);
});
gulp.task('test:e2e', (cb) => {
  runSequence(
    ['serve'],
    ['test:e2e:local'],
    ['process-exit'],
    cb
  );
});
gulp.task('test', (cb) => {
  runSequence(
    // ['test:unit'],
    ['test:eslint'],
    cb
  );
});

/* LOCAL SERVER */
gulp.task('serve', require('./gulp/build-tasks/serve')(gulp, plugins, connect, connectssi, argv, path));
