'use strict';

var gulp        = require('gulp'),
    requireDir  = require('require-dir'),
    plugins     = require('gulp-load-plugins')(),
    del         = require('del'),
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
    Server      = require('karma').Server;

config.basepath.bowerVersion = bowerConfig.version;



gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.config.js',
        singleRun: true
    }, done).start();
    setTimeout(function () {
        gulp.src('./src/reporter/reporter.html')
            .pipe(plugins.open());
        // gulp.src('./coverage/html/index.html')
        //     .pipe(plugins.open());
    }, 1000);
});


/* JS TASKS */
gulp.task('js', require('./gulp-tasks/build-process/scripts')(gulp, plugins, config));

/* CSS TASKS */
gulp.task('sass', require('./gulp-tasks/build-process/scss')(gulp, plugins, config));

/* MOVE FOLDERS */
gulp.task('content', ['include-partials'], require('./gulp-tasks/build-process/content')(gulp, plugins, config));
gulp.task('inherit-partials', require('./gulp-tasks/build-process/inherit-partials')(gulp, plugins, config));
gulp.task('include-partials', ['inherit-partials'], require('./gulp-tasks/build-process/include-partials')(gulp, plugins, config));
gulp.task('other:assets', require('./gulp-tasks/build-process/otherAssets')(gulp, plugins, config, es));
gulp.task('html', require('./gulp-tasks/build-process/html')(gulp, plugins, config));

/* TEST TASKS */
gulp.task('eslint', function () {
    return gulp.src(['src/assets/js/**/*.js', 'gulp-tasks/**/*.js', '!src/assets/js/**/forms.js', '!src/assets/js/**/autocomplete.js'])
        .pipe(eslint())
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failOnError());
});

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
    gulp.watch([config.basepath.src + '*', config.basepath.src + '*' + '*', config.basepath.src + '*' + '*'], ['other:assets']);
});

/* RELEASE TASKS */
gulp.task('release:assets', require('./gulp-tasks/release-process/assets')(gulp, plugins, config));
gulp.task('release:content', require('./gulp-tasks/release-process/content')(gulp, plugins, config));
gulp.task('publish:swe', require('./gulp-tasks/release-process/publish')(gulp, plugins, config));

/* TASK RUNNERS */
gulp.task('default', ['content', 'html', 'js', 'sass', 'other:assets']);
gulp.task('build', ['default']);
gulp.task('release', ['release:assets', 'release:content']);

/* SSI */
// Open using local server
gulp.task('generate', require('./gulp-tasks/build-process/server.js')(gulp, plugins, config, gulpConnect, gulpConnectSsi, argv));

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