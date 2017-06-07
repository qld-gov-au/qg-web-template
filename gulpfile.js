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

// For testing
const karmaServer       = require('karma').Server;
const fsPath            = require('fs-path');
const eslintReporter    = require('eslint-html-reporter');
const connectssi        = require('gulp-connect-ssi');
const connect           = require('gulp-connect');
const wait              = require('gulp-wait');

/* CLEAN TASKS */
gulp.task('clean-build', (cb) => {
  return del([config.basepath.build], cb);
});
gulp.task('clean-release', (cb) => {
  return del([config.basepath.release], cb);
});

/* BUILD */
gulp.task('template-pages-cdn', require('./gulp/build-tasks/template-pages')(gulp, plugins, config, 'template-pages', 'template-cdn'));
gulp.task('template-pages-local', require('./gulp/build-tasks/template-pages')(gulp, plugins, config, 'template-pages', 'template-local', 'local'));
gulp.task('template-pages-docs', require('./gulp/build-tasks/template-pages')(gulp, plugins, config, 'docs', 'docs', 'local'));

let assetDests = ['assets', 'docs/assets', 'template-local/assets'];
gulp.task('scss', require('./gulp/common-tasks/scss')(gulp, plugins, config, assetDests));
gulp.task('js', require('./gulp/common-tasks/js')(gulp, plugins, config, gulpWebpack, assetDests));

gulp.task('other-assets', ['other-assets-root', 'other-assets-local', 'other-assets-docs']);
gulp.task('other-assets-root', require('./gulp/build-tasks/other-assets')(gulp, plugins, config, es, assetDests[0]));
gulp.task('other-assets-local', require('./gulp/build-tasks/other-assets')(gulp, plugins, config, es, assetDests[1]));
gulp.task('other-assets-docs', require('./gulp/build-tasks/other-assets')(gulp, plugins, config, es, assetDests[2]));

gulp.task('build-other-files', require('./gulp/build-tasks/other-files')(gulp, plugins, config));
gulp.task('build-components', require('./gulp/build-tasks/components')(gulp, plugins, config, gulpWebpack, webpack, path));

gulp.task('assets-includes-local', require('./gulp/build-tasks/assets-includes')(gulp, plugins, config, ['assets/includes-local', 'template-local/assets/includes-local'], true));
gulp.task('assets-includes-docs', require('./gulp/build-tasks/assets-includes')(gulp, plugins, config, 'docs/assets/includes-local', true, true));
gulp.task('assets-includes-cdn', require('./gulp/build-tasks/assets-includes')(gulp, plugins, config, ['assets/includes-cdn', 'template-cdn/assets/includes-cdn']));

// gulp.task('assets-docs', require('./gulp/build-tasks/assets')(gulp, plugins, config, 'docs'));
// gulp.task('assets-local', require('./gulp/build-tasks/assets')(gulp, plugins, config, 'template-local'));

gulp.task('docs-flatten', (cb) => {
  return gulp.src('', {read: false})
    .pipe(wait(1500)) // FIXME: This is a dodgy way to handle the wait to save files
    .pipe(plugins.shell(['node gulp/build-tasks/node-docs-flatten.js']));
});

// FIXME: Re-add unit tests
gulp.task('build', (cb) => {
  runSequence(
    'test:eslint',
    'assets-includes-docs',
    ['template-pages-cdn', 'assets-includes-cdn', 'js', 'scss', 'other-assets', 'build-other-files'],
    ['template-pages-local', 'assets-includes-local', 'template-pages-docs'],
    'docs-flatten',
    'build-components',
    cb
  );
});

gulp.task('default', ['build']);
gulp.task('build:clean', (cb) => {
  runSequence('clean-build', 'build', cb);
});

/* WATCH TASKS */
// Note: External libraries and external components are not watched
const ignore = `!${config.basepath.src}/assets/components/**/*`;
gulp.task('watch', function () {
  gulp.watch([
      `${config.basepath.src}/**/*.html`,
      ignore,
      `!${config.basepath.src}/assets/_project/_blocks/**/*`
    ],
    ['template-pages-cdn', 'template-pages-local', 'template-pages-docs']);
  gulp.watch([`${config.basepath.src}/assets/_project/_blocks/layout/**/*.html`], ['assets-includes-local']);
  gulp.watch([`${config.basepath.src}/assets/_project/**/*.scss`], ['scss']);
  gulp.watch(`${config.basepath.src}/assets/_project/_blocks/**/*.js`, { verbose: true }, ['js', 'test']);
  gulp.watch([`${config.basepath.src}/assets/_project/images/**/*`], ['other-assets']);
});
gulp.task('watch:components', function () {
  gulp.watch([config.basepath.src + '/assets/components/**/*.*'], ['build-components']);
});
gulp.task('watch:serve', ['watch', 'serve']);

/* RELEASE TASKS */
// Grabs SCSS from SRC and moves to release, does not process
gulp.task('scss-src', require('./gulp/release-tasks/scss-src')(gulp, plugins, config));
gulp.task('release-other-files', require('./gulp/release-tasks/other-files')(gulp, plugins, config));
gulp.task('release-files', require('./gulp/release-tasks/files')(gulp, plugins, config));

let dests = ['assets', 'template-local/assets', 'docs/assets'];
gulp.task('release-js', require('./gulp/common-tasks/js')(gulp, plugins, config, gulpWebpack, dests, 'release'));
gulp.task('release-scss', require('./gulp/common-tasks/scss')(gulp, plugins, config, dests, 'release'));

gulp.task('release', (cb) => {
  return runSequence(
    ['build:clean', 'clean-release'],
    [
      'release-files',
      'release-js',
      'release-scss',
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
gulp.task('test:browserstack', require('./gulp/test-tasks/e2e')(gulp, plugins, argv));
gulp.task('test', (cb) => {
  runSequence(
    ['test:unit'],
    ['test:eslint'],
    cb
  );
});

/* LOCAL SERVER */
gulp.task('serve', require('./gulp/build-tasks/serve')(gulp, plugins, connect, connectssi, argv, path));
