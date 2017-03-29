'use strict';

// init env variables
require('dotenv').config();

// Core
const gulp            = require('gulp');
const config          = require('./gulp/gulp-config.js');
const del             = require('del');
const webpack         = require('webpack-stream');
const argv            = require('yargs').argv;
const plugins         = require('gulp-load-plugins')();
const es              = require('event-stream');
const runSequence     = require('run-sequence');
const replace         = require('gulp-replace');
const path            = require('path');
    // bowerConfig = require('./bower.json'),
    // runSequence = require('run-sequence'),
    // gutil       = require('gulp-util'),
    // gulpConnectSsi = require('gulp-connect-ssi'),
    // eslint      = require('gulp-eslint'),
    // include     = require('gulp-include'),

// For testing
const karmaServer       = require('karma').Server;
const fsPath            = require('fs-path');
const eslintReporter    = require('eslint-html-reporter');
const connectssi        = require('gulp-connect-ssi');
const connect           = require('gulp-connect');

/* CLEAN TASKS */
gulp.task('clean-build', (cb) => {
    return del([config.basepath.build], cb);
});
gulp.task('clean-release', (cb) => {
    return del([config.basepath.release], cb);
});

/* BUILD TASKS */
gulp.task('html', require('./gulp/build-tasks/html')(gulp, plugins, config));
gulp.task('includes', require('./gulp/build-tasks/includes')(gulp, plugins, config));
gulp.task('includes-cdn', require('./gulp/build-tasks/includes-cdn')(gulp, plugins, config));
gulp.task('scss', require('./gulp/build-tasks/scss')(gulp, plugins, config));
gulp.task('js', require('./gulp/build-tasks/js')(gulp, plugins, config, webpack));
gulp.task('other-assets', require('./gulp/build-tasks/other-assets')(gulp, plugins, config, es));
gulp.task('build-files', require('./gulp/build-tasks/other-files')(gulp, plugins, config));

gulp.task('default', ['test:eslint', 'html', 'includes', 'includes-cdn', 'scss', 'js', 'other-assets', 'build-files']);
gulp.task('build', ['default']);
gulp.task('build:clean', (cb) => {
    runSequence('clean-build', 'default', cb);
});

/* WATCH TASSKS */
gulp.task('watch', function () {
    gulp.watch([config.basepath.src + '/**/*.html'], ['html']);
    gulp.watch([config.basepath.src + '/assets/includes/**/*.html'], ['includes']);
    gulp.watch([config.basepath.src + '/**/*.scss'], ['scss']);
    gulp.watch([config.basepath.src + '/**/*.js'], ['js']);
    gulp.watch([config.basepath.src + '/**/*.js'], ['eslint']);
    gulp.watch([config.basepath.src + '**/*'], ['other-assets']);
});
gulp.task('watch:serve', ['watch', 'serve']);

/* RELEASE TASKS */
gulp.task('scss-src', require('./gulp/release-tasks/scss-src')(gulp, plugins, config));
gulp.task('assets-core', require('./gulp/release-tasks/assets-core')(gulp, plugins, config));
gulp.task('assets-includes', require('./gulp/release-tasks/assets-includes')(gulp, plugins, config));
gulp.task('assets-includes-cdn', require('./gulp/release-tasks/assets-includes-cdn')(gulp, plugins, config));
gulp.task('release-files', require('./gulp/release-tasks/other-files')(gulp, plugins, config));
gulp.task('release-js', require('./gulp/release-tasks/js')(gulp, plugins, config)); // Uglifies JS
gulp.task('css', require('./gulp/release-tasks/css')(gulp, plugins, config)); // Minifies CSS
gulp.task('copy-element', require('./gulp/release-tasks/copy-element')(gulp, plugins, config));

gulp.task('release', (cb) => { 
    runSequence(
        ['build:clean', 'clean-release'],
        ['assets-core', 'scss-src', 'release-js', 'css', 'release-files', 'assets-includes', 'assets-includes-cdn'],
        'copy-element', // Done last in order to over-ride assets-includes
        cb
    );
});

/* TEST TASKS */
gulp.task('test:unit', require('./gulp/test-tasks/unit')(gulp, plugins, config, karmaServer));
gulp.task('test:eslint', require('./gulp/test-tasks/lint')(gulp, plugins, config, fsPath, eslintReporter));
gulp.task('lint', ['test:eslint']);
gulp.task('test:browserstack', require('./gulp/test-tasks/e2e')(gulp, plugins, argv));

gulp.task('test', ['test:unit', 'test:eslint']);

/* LOCAL SERVER */
gulp.task('serve', require('./gulp/build-tasks/serve')(gulp, plugins, connect, connectssi, argv, path));
