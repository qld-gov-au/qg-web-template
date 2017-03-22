'use strict';

// Core
var gulp            = require('gulp');
var config          = require('./gulp/gulp-config.js');
var del             = require('del');
var webpack         = require('webpack');
var argv            = require('yargs').argv;
var plugins         = require('gulp-load-plugins')();

// For testing
var karmaServer     = require('karma').Server;
var fsPath          = require('fs-path');
var eslintReporter  = require('eslint-html-reporter');
var gulpConnectSsi  = require('gulp-connect-ssi');
var gulpConnect     = require('gulp-connect');
var es              = require('event-stream');
    // bowerConfig = require('./bower.json'),
    // gulpConnect = require('gulp-connect'),
    // runSequence = require('run-sequence'),
    // gutil       = require('gulp-util'),
    // gulpConnectSsi = require('gulp-connect-ssi'),
    // eslint      = require('gulp-eslint'),
    // 
    // include     = require('gulp-include'),
    // replace     = require('gulp-replace');

/* SSI */
// Open using local server
gulp.task('local-server', require('./gulp/build-tasks/local-server.js')(gulp, plugins, config, gulpConnect, gulpConnectSsi, argv));

/* BUILD TASKS */
gulp.task('scss', require('./gulp/build-tasks/scss')(gulp, plugins, config));
gulp.task('html', require('./gulp/build-tasks/html')(gulp, plugins, config));
gulp.task('js', require('./gulp/build-tasks/js')(gulp, plugins, config));
gulp.task('other-assets', require('./gulp/build-tasks/other-assets')(gulp, plugins, config, es));

gulp.task('default', ['html', 'scss', 'js', 'other-assets']);
gulp.task('build', ['default']);

/* WATCH TASSKS */
gulp.task('watch', function () {
    gulp.watch([config.basepath.src + '/**/*.js'], ['js']);
    gulp.watch([config.basepath.src + '/**/*.html'], ['html']);
    gulp.watch([config.basepath.src + '/**/*.scss'], ['scss']);
    gulp.watch([config.basepath.src + '*', config.basepath.src + '*' + '*', config.basepath.src + '*' + '*'], ['other-assets']);
});

/* RELEASE TASKS */
gulp.task('scss-src', require('./gulp/release-tasks/scss-src')(gulp, plugins, config));
gulp.task('release', ['scss-src']);

/* TEST TASKS */
    gulp.task('test:config:e2e', require('./gulp/test-tasks/e2e')(gulp, plugins, config));
gulp.task('test:browserstack', ['local-server', 'test:config:e2e']);
gulp.task('test:unit', require('./gulp/test-tasks/unit')(gulp, plugins, config, karmaServer));
gulp.task('test:eslint', require('./gulp/test-tasks/lint')(gulp, plugins, config, fsPath, eslintReporter));
gulp.task('test:reports', require('./gulp/test-tasks/reports')(gulp, plugins, config));
gulp.task('test', ['test:unit', 'test:eslint', 'test:browserstack', 'test:reports']);
