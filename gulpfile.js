'use strict';

// Core
var gulp            = require('gulp');
var config          = require('./gulp/gulp-config.js');
var del             = require('del');
var webpack         = require('webpack');
var argv            = require('yargs').argv;
var plugins         = require('gulp-load-plugins')();
var es              = require('event-stream');
var runSequence     = require('run-sequence');
    // bowerConfig = require('./bower.json'),
    // runSequence = require('run-sequence'),
    // gutil       = require('gulp-util'),
    // gulpConnectSsi = require('gulp-connect-ssi'),
    // eslint      = require('gulp-eslint'),
    // 
    // include     = require('gulp-include'),
    // replace     = require('gulp-replace');

// For testing
var karmaServer     = require('karma').Server;
var fsPath          = require('fs-path');
var eslintReporter  = require('eslint-html-reporter');
var gulpConnectSsi  = require('gulp-connect-ssi');
var gulpConnect     = require('gulp-connect');


/* SSI */
// Open using local server
gulp.task('local-server', require('./gulp/build-tasks/local-server.js')(gulp, plugins, config, gulpConnect, gulpConnectSsi, argv));

/* CLEAN TASKS */
gulp.task('clean-build', (cb) => {
    return del([config.basepath.build], cb);
});
gulp.task('clean-release', (cb) => {
    return del([config.basepath.release], cb);
});

/* BUILD TASKS */
gulp.task('scss', require('./gulp/build-tasks/scss')(gulp, plugins, config));
gulp.task('html', require('./gulp/build-tasks/html')(gulp, plugins, config));
gulp.task('js', require('./gulp/build-tasks/js')(gulp, plugins, config));
gulp.task('other-assets', require('./gulp/build-tasks/other-assets')(gulp, plugins, config, es));

gulp.task('default', ['html', 
    'scss',
    'js',
    'other-assets'
]);
gulp.task('build', ['default']);
gulp.task('build:clean', (cb) => {
        runSequence('clean-build', 'default', cb);
    });

/* WATCH TASSKS */
gulp.task('watch', function () {
    gulp.watch([config.basepath.src + '/**/*.js'], ['js']);
    gulp.watch([config.basepath.src + '/**/*.html'], ['html']);
    gulp.watch([config.basepath.src + '/**/*.scss'], ['scss']);
    gulp.watch([config.basepath.src + '/assets/includes/**/*.html'], ['template-assets']);
    gulp.watch([config.basepath.src + '*', config.basepath.src + '*' + '*', config.basepath.src + '*' + '*'], ['other-assets']);
});

/* RELEASE TASKS */
gulp.task('scss-src', require('./gulp/release-tasks/scss-src')(gulp, plugins, config));
gulp.task('assets-core', require('./gulp/release-tasks/assets-core')(gulp, plugins, config));
gulp.task('assets-includes', require('./gulp/release-tasks/assets-includes')(gulp, plugins, config));
gulp.task('copy-element', require('./gulp/release-tasks/copy-element')(gulp, plugins, config));
gulp.task('release', (cb) => { 
    runSequence(
        'clean-release',
        ['scss-src', 'assets-core', 'assets-includes'],
        'copy-element', // Done last in order to over-ride assets-includes
        cb
    );
});

/* TEST TASKS */
gulp.task('test:config:e2e', require('./gulp/test-tasks/e2e')(gulp, plugins, config));
gulp.task('test:browserstack', ['local-server', 'test:config:e2e']);
gulp.task('test:unit', require('./gulp/test-tasks/unit')(gulp, plugins, config, karmaServer));
gulp.task('test:eslint', require('./gulp/test-tasks/lint')(gulp, plugins, config, fsPath, eslintReporter));
gulp.task('test:reports', require('./gulp/test-tasks/reports')(gulp, plugins, config));
gulp.task('test', ['test:unit', 'test:eslint', 'test:browserstack', 'test:reports']);
