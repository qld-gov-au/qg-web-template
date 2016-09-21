'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    del = require('del'),
    bowerConfig = require('./bower.json'),
    argv = require('yargs').argv,
    gulpConnect = require('gulp-connect'),
    runSequence = require('run-sequence'),
    gulpConnectSsi = require('gulp-connect-ssi'),
    eslint = require('gulp-eslint'),
    supportedBrowser = ['last 2 versions','ie 7', 'ie 8', 'ie 9','ie 10', 'ie 11', 'android 2.3', 'android 4', 'opera 12'];

// TODO - config from a separate file
var config = {
    version: 'v3',
    basepath : {
        src: 'src/',
        build: 'build/',
        buildswe: 'build/swe/',
        release: 'release/',
        static: 'release/static.qgov.net.au/',
        test : 'test/',
        swe : 'swe/',
        bowerVersion : bowerConfig.version,
        node_modules: 'node_modules/'
    },
    projects : ['swe', 'cue', 'ice', 'flux'],
    franchise : ['www.qld.gov.au' , 'tmr.com.au' , 'test.com'],
    src : {
        assets : function () {
            return config.basepath.src+'swe/assets/';
        },
        examples : function () {
            return config.basepath.src+'swe/examples/';
        }
    },
    build : {
        assets : function () {
            return config.basepath.build;
        },
        examples : function () {
            return config.basepath.build+'swe/examples/';
        }
    },
    release : {
        assets : function () {
            return config.basepath.release+'assets/';
        },
        static : function () {
            return config.basepath.release+'static.qgov.net.au/assets/';
        },
        images : function () {
            return config.basepath.release+'assets/'+config.version+'/images/';
        },
        lib : function () {
            return config.basepath.release+'assets/'+config.version+'/lib/';
        },
        examples : function () {
            return config.basepath.release+'examples/';
        },
        includes : function () {
            return config.basepath.release+'assets/includes/';
        },
        js : function () {
            return config.basepath.release+'assets/'+config.version+'/js/';
        },
        css : function () {
            return config.basepath.release+'assets/'+config.version+'/css/';
        }
    }
};

/*=====================================================================
 JS TASKS
 ======================================================================*/
gulp.task('js', require('./gulp-tasks/build-process/scripts')(gulp, plugins, config));
/*=====================================================================
 CSS TASKS
 ======================================================================*/
gulp.task('sass', require('./gulp-tasks/build-process/scss')(gulp, plugins, config));
/*=====================================================================
 MOVE FOLDERS
 ======================================================================*/
gulp.task('content', require('./gulp-tasks/build-process/content')(gulp, plugins, config));
gulp.task('other:assets', require('./gulp-tasks/build-process/otherAssets')(gulp, plugins, config));

/*=====================================================================
 CLEAN TASKS
 ======================================================================*/
gulp.task('clean:build', function(cb){
    del([config.basepath.build], cb);
});
gulp.task('clean:release', function(cb){
    del([config.basepath.release], cb);
});
/*=====================================================================
 WATCH TASKS
 ======================================================================*/
gulp.task('watch', function() {
    gulp.watch(config.basepath.src+'/**/*.js', ['js']);
    gulp.watch(config.basepath.src+'/**/*.scss', ['sass']);
    gulp.watch([config.basepath.src+'**/*',
        '!'+config.basepath.src+'{assets,assets/**}'
    ], ['content']);
    gulp.watch([config.basepath.src+'*',config.basepath.src+'*'+'*',config.basepath.src+'*'+'*'], ['other:assets']);
    gulp.watch('build/**/*', ['drop']);
});
/*=====================================================================
 RELEASE TASKS
 ======================================================================*/
gulp.task('release:assets', require('./gulp-tasks/release-process/assets')(gulp, plugins, config));
gulp.task('release:content', require('./gulp-tasks/release-process/content')(gulp, plugins, config));
gulp.task('publish:swe', require('./gulp-tasks/release-process/publish')(gulp, plugins, config));
/*=====================================================================
 TASK RUNNERS
 ======================================================================*/
gulp.task('default',['content','js','sass', 'other:assets']);
gulp.task('build',['default']);
gulp.task('release',['release:assets', 'release:content']);

/*====================================================================
 SSI
 =====================================================================*/
// Open using local server
gulp.task('generate', require('./gulp-tasks/build-process/server.js')(gulp, plugins, config, gulpConnect, gulpConnectSsi, argv));

// Convert to Jinja tasks
gulp.task('delay',function(cb) {
    setTimeout(cb, 5000);
});
gulp.task('ssi-to-jinja',function(cb) {
    var spawn = require('child_process').spawn;
    var child = spawn("python", ["ssi_to_jinja2.py","./build/swe"], {cwd: process.cwd()});
    var stdout = '';
    var stderr = '';

    var shell = require('gulp-shell');
    var gutil = require('gulp-util');

    child.stdout.setEncoding('utf8');

    child.stdout.on('data', function (data) {
        stdout += data;
        gutil.log(data);
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (data) {
        stderr += data;
        gutil.log(gutil.colors.red(data));
        gutil.beep();
    });

    child.on('close', function(code) {
        gutil.log("Done with exit code", code);
        //gutil.log(stdout); // stdout
        //gutil.log(stderr); // stderr
    });
    cb();
});
gulp.task('build-jinja', function(cb) {
    runSequence('default','delay','ssi-to-jinja',cb);
});

gulp.task('drop', function () {
    gulp.src('build/swe/**/*').pipe(gulp.dest('../'));
});

gulp.task('lint', function () {
    return gulp.src(['src/assets/js/**/*.js', '!src/assets/js/**/forms.js', '!src/assets/js/**/autocomplete.js']).pipe(eslint())
        .pipe(plugins.eslint.format())
        // Brick on failure to be super strict
        .pipe(plugins.eslint.failOnError());
});