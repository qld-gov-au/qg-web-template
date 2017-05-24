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
gulp.task('template-pages-cdn', require('./gulp/build-tasks/template-pages')(gulp, plugins, config, 'cdn'));
gulp.task('template-pages-local', require('./gulp/build-tasks/template-pages')(gulp, plugins, config, 'local'));
gulp.task('template-pages-docs', require('./gulp/build-tasks/template-pages')(gulp, plugins, config, 'docs'));

gulp.task('scss', require('./gulp/common-tasks/scss')(gulp, plugins, config, 'assets'));
gulp.task('js', require('./gulp/common-tasks/js')(gulp, plugins, config, gulpWebpack, 'assets'));
gulp.task('other-assets', require('./gulp/build-tasks/other-assets')(gulp, plugins, config, es));
gulp.task('build-other-files', require('./gulp/build-tasks/other-files')(gulp, plugins, config));
gulp.task('build-components', require('./gulp/old-build-tasks/components')(gulp, plugins, config, gulpWebpack, webpack, path));

gulp.task('assets-includes-cdn', require('./gulp/build-tasks/assets-includes')(gulp, plugins, config, 'assets/includes-cdn'));
gulp.task('assets-includes-local', require('./gulp/build-tasks/assets-includes')(gulp, plugins, config, 'assets/includes-local', true));
gulp.task('docs-assets-includes', require('./gulp/build-tasks/assets-includes')(gulp, plugins, config, 'docs/assets/includes-local', true, true));

gulp.task('docs-assets', require('./gulp/build-tasks/docs-assets')(gulp, plugins, config, es));

gulp.task('docs-flatten', (cb) => {
  return gulp.src('', {read: false})
    .pipe(wait(1500)) // FIXME: This is a dodgy way to handle the wait to save files
    .pipe(plugins.shell(['node gulp/build-tasks/node-docs-flatten.js']));
});

gulp.task('build', (cb) => {
  runSequence(
    ['template-pages-cdn', 'assets-includes-cdn', 'js', 'scss', 'other-assets', 'build-other-files'],
    ['template-pages-local', 'assets-includes-local'],
    ['template-pages-docs', 'docs-assets-includes'],
    ['docs-assets', 'docs-flatten'],
    'build-components',
    cb
  );
});

gulp.task('default', ['build']);
gulp.task('build:clean', (cb) => {
  runSequence('clean-build', 'build', cb);
});

/* WATCH TASKS */
gulp.task('watch', function () {
  gulp.watch([config.basepath.src + '/**/*.html'], ['template-pages-cdn', 'template-pages-local', 'template-pages-docs']);
  gulp.watch([config.basepath.src + '/assets/_project/_blocks/layout/**/*.html'], ['assets-includes-local']);
  gulp.watch([config.basepath.src + '/**/*.scss'], ['scss']);
  gulp.watch([config.basepath.src + '/**/*.js'], ['js', 'test']);
  gulp.watch([config.basepath.src + '**/*'], ['other-assets']);
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

gulp.task('release-js', require('./gulp/common-tasks/js')(gulp, plugins, config, gulpWebpack, 'assets', 'release'));
gulp.task('release-js-template-local', require('./gulp/common-tasks/js')(gulp, plugins, config, gulpWebpack, 'template-local/assets', 'release'));
gulp.task('release-js-docs', require('./gulp/common-tasks/js')(gulp, plugins, config, gulpWebpack, 'docs/assets', 'release'));

gulp.task('release-scss', require('./gulp/common-tasks/scss')(gulp, plugins, config, 'assets', 'release'));
gulp.task('release-scss-template-local', require('./gulp/common-tasks/scss')(gulp, plugins, config, 'template-local/assets', 'release'));
gulp.task('release-scss-docs', require('./gulp/common-tasks/scss')(gulp, plugins, config, 'docs/assets', 'release'));

gulp.task('release', (cb) => {
  return runSequence(
    ['build:clean', 'clean-release'],
    [
      'release-files',
      'release-js', 'release-js-template-local', 'release-js-docs',
      'release-scss', 'release-scss-template-local', 'release-scss-docs',
      'scss-src',
      'release-other-files'
    ],


    // ['assets-core', 'scss-src', 'release-js', 'css', 'release-files', 'assets-includes-local', 'assets-includes-cdn'],
    // ['copy-element', 'copy-element-html'], // Done second last in order to over-ride assets-includes
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
gulp.task('serve', require('./gulp/old-build-tasks/serve')(gulp, plugins, connect, connectssi, argv, path));
