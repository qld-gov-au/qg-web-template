'use strict';
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    del = require('del'),
    supportedBrowser = ['last 2 versions','ie 7', 'ie 8', 'ie 9','ie 10', 'ie 11', 'android 2.3', 'android 4', 'opera 12'];

// TODO - config from a seprate file
var config = {
    version : 'v3',
    basepath : {
        src: 'src/',
        build: 'build/',
        buildswe: 'build/swe/',
        release: 'release/',
        static: 'release/static.qgov.net.au/',
        test : 'test/',
        swe : 'swe/'
    },
    projects : ['swe' , 'cue'],
    franchise : ['www.qld.gov.au' , 'tmr.com.au' , 'test.com', 'papa' , 'mama' , 'cacha'],
    src : {
        assets : function () {
            return config.basepath.src+'swe/assets/';
        },
        examples : function () {
            return config.basepath.src+'swe/examples/';
        },
        images : function () {
            return config.basepath.src;
        },
        lib : function () {
            return config.basepath.src;
        },
        includes : function () {
            return config.basepath.src;
        },
        js : function () {
            return config.basepath.src;
        },
        sass : function () {
            return config.basepath.src;
        }
    },
    build : {
        assets : function () {
            return config.basepath.build;
        },
        images : function () {
            return config.basepath.build;
        },
        lib : function () {
            return config.basepath.build;
        },
        examples : function () {
            return config.basepath.build+'swe/examples/';
        },
        includes : function () {
            return config.basepath.build;
        },
        js : function () {
            return config.basepath.build;
        },
        css : function () {
            return config.basepath.build;
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
    gulp.watch(config.src.js()+'/**/*.js', ['js']);
    gulp.watch(config.src.sass()+'/**/*.scss', ['sass']);
    gulp.watch([config.basepath.src+'**/*',
        '!'+config.basepath.src+'{assets,assets/**}'
    ], ['content']);
    gulp.watch([config.src.images()+'*',config.src.includes()+'*'+'*',config.src.lib()+'*'+'*'], ['other:assets']);
});
/*=====================================================================
 RELEASE TASKS
 ======================================================================*/
gulp.task('release:assets', require('./gulp-tasks/release-process/assets')(gulp, plugins, config));
gulp.task('release:content', require('./gulp-tasks/release-process/content')(gulp, plugins, config));
/*=====================================================================
 TASK RUNNERS
 ======================================================================*/
gulp.task('default',['content','js','sass', 'other:assets']);
gulp.task('build',['default']);
gulp.task('release',['release:assets', 'release:content']);
