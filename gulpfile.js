'use strict';
// init env variables
require('dotenv').config();

const gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')(),
    del         = require('del'),
    eslintReporter = require('eslint-html-reporter'),
    fsPath      = require('fs-path'),
    bowerConfig = require('./bower.json'),
    config      = require('./gulp-config.js'),
    argv        = require('yargs').argv,
    gulpConnect = require('gulp-connect'),
    runSequence = require('run-sequence'),
    gutil       = require('gulp-util'),
    gulpConnectSsi = require('gulp-connect-ssi'),
    eslint      = require('gulp-eslint'),
    es          = require('event-stream'),
    include     = require('gulp-include'),
    karmaServer      = require('karma').Server,
    webpack     = require('webpack');

config.basepath.bowerVersion = bowerConfig.version;
/* JS TASKS */
gulp.task('js', require('./gulp-tasks/build-process/scripts')(gulp, plugins, config));
//Duplicate task, please delete (Minification can be done in the same script)
//gulp.task('js:minify', require('./gulp-tasks/build-process/scripts-minify')(gulp, plugins, config, webpack));

/* CSS TASKS */
gulp.task('sass', require('./gulp-tasks/build-process/scss')(gulp, plugins, config));
//Duplicate task, please delete (Minification can be done in the same script)
//gulp.task('sass:minify', require('./gulp-tasks/build-process/scss-minify')(gulp, plugins, config));

/* MOVE FOLDERS */
gulp.task('content', require('./gulp-tasks/build-process/content')(gulp, plugins, config));
gulp.task('inherit-partials', require('./gulp-tasks/build-process/inherit-partials')(gulp, plugins, config, es));
gulp.task('html', ['inherit-partials'], require('./gulp-tasks/build-process/html')(gulp, plugins, config));
gulp.task('other:assets', require('./gulp-tasks/build-process/otherAssets')(gulp, plugins, config, es));

/* TEST TASKS */
gulp.task('test:unit', require('./gulp-tasks/test-process/unit')(gulp, plugins, config, karmaServer));
gulp.task('test:eslint', require('./gulp-tasks/test-process/lint')(gulp, plugins, config, fsPath, eslintReporter));
gulp.task('test:config:e2e', require('./gulp-tasks/test-process/e2e')(gulp, plugins, config));
gulp.task('test:browserstack', ['local-server', 'test:config:e2e']);
gulp.task('test:reports', require('./gulp-tasks/test-process/reports')(gulp, plugins, config));

/* CLEAN TASKS */
gulp.task('clean:build', function (cb) {
    del([config.basepath.build], cb);
});
gulp.task('clean:release', function (cb) {
    del([config.basepath.release], cb);
});

/* WATCH TASKS */
gulp.task('watch', function () {
    gulp.watch(config.basepath.src + '/**/*.js', ['js']);
    gulp.watch(config.basepath.src + '/**/*.scss', ['sass']);
    gulp.watch([config.basepath.src + '**/*',
        '!' + config.basepath.src + '{assets,assets/**}'
    ], ['content']);
    gulp.watch([config.basepath.src + '**/*.html'], ['html']);
    gulp.watch([config.basepath.src + '*', config.basepath.src + '*' + '*', config.basepath.src + '*' + '*'], ['other:assets']);
});

/* RELEASE TASKS */
gulp.task('release:assets', require('./gulp-tasks/release-process/assets')(gulp, plugins, config));
gulp.task('release:content', require('./gulp-tasks/release-process/content')(gulp, plugins, config));
gulp.task('publish:swe', require('./gulp-tasks/release-process/publish')(gulp, plugins, config));

/* TASK RUNNERS */
gulp.task('default', ['content', 'html', 'js', 'sass', 'other:assets']);
//Duplicate task, please delete (Minification can be done in the same script)
//gulp.task('default:minify', ['content', 'html', 'js:minify', 'sass:minify', 'other:assets']);
gulp.task('build', ['default']);
//Duplicate task, please delete (Minification can be done in the same script)
//gulp.task('build:minify', ['default:minify']);
gulp.task('release', ['release:assets', 'release:content']);
gulp.task('test', ['test:unit', 'test:eslint']);

/* SSI */
// Open using local server
gulp.task('local-server', require('./gulp-tasks/build-process/local-server.js')(gulp, plugins, config, gulpConnect, gulpConnectSsi, argv));

// Convert to Jinja tasks
gulp.task('delay', function (cb) {
    setTimeout(cb, 5000);
});
gulp.task('ssi-to-jinja', function (cb) {
    var spawn = require('child_process').spawn;
    var child = spawn('python', ['ssi_to_jinja2.py', './build/swe'], {cwd: process.cwd()});
    var stdout = '';
    var stderr = '';
    child.stdout.setEncoding('utf8');

    child.stdout.on('data', function (data) {
        stdout = stdout + data;
        gutil.log(data);
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (data) {
        stderr = stderr + data;
        gutil.log(gutil.colors.red(data));
        gutil.beep();
    });

    child.on('close', function (code) {
        gutil.log('Done with exit code', code);
    });
    cb();
});
gulp.task('build-jinja', function (cb) {
    runSequence('default', 'delay', 'ssi-to-jinja', cb);
});
