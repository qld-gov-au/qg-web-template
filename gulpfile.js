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
const protractor        = require('gulp-protractor').protractor;
const fsPath            = require('fs-path');
const eslintReporter    = require('eslint-html-reporter');
const connectssi        = require('gulp-connect-ssi');
const connect           = require('gulp-connect');
// const wait              = require('gulp-wait');
const pjson = require('./package.json');

//constructs build banner for assets
const buildDate = new Date();
const buildMonth = (buildDate.getMonth() + 1) < 10 ? '0' + (buildDate.getMonth() + 1) : buildDate.getMonth();
const buildDay = buildDate.getDate() < 10 ? '0' + buildDate.getDate() : buildDate.getDay();
const buildHours = (buildDate.getHours() + 1) < 10 ? '0' + (buildDate.getHours() + 1) : buildDate.getHours();
const buildMinutes = buildDate.getMinutes() < 10 ? '0' + buildDate.getMinutes() : buildDate.getMinutes();
const banner = '/*! SWE' +
    ' ' + pjson.version +
    ' ' + buildDate.getFullYear() + buildMonth + buildDay + 'T' + buildHours + buildMinutes +	' */' +
    '\n';

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
gulp.task('clean-publish', (cb) => {
  return del([`${config.webTemplateRepo.folder}`, `${config.staticCdnRepo.folder}`], cb);
});

/* BUILD */
gulp.task('template-pages', require('./gulp/build-tasks/template-pages')(gulp, plugins, config, 'template-pages', 'template-pages', 'local'));
gulp.task('template-pages-docs', require('./gulp/build-tasks/template-pages')(gulp, plugins, config, 'docs', 'docs'));
gulp.task('template-pages-to-docs', require('./gulp/build-tasks/template-pages')(gulp, plugins, config, 'template-pages', 'docs/pagemodels'));

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
      'template-pages-to-docs',
      cb
  );
});

gulp.task('default', ['build']);

/* WATCH TASKS */
// Note: External libraries and external modules are not watched
gulp.task('watch:project', function () {
  gulp.watch([`${config.basepath.src}/assets/_project/_blocks/layout/**/*.html`], ['assets-includes-local', 'assets-includes-docs']);
  gulp.watch([`${config.basepath.src}/assets/_project/**/*.scss`], ['scss']);
  gulp.watch(`${config.basepath.src}/assets/_project/_blocks/**/*.js`, { verbose: true }, ['js', 'test:eslint']);
  gulp.watch(`${config.basepath.src}/assets/_project/lib/**/*.js`, { verbose: true }, ['other-assets']);
  gulp.watch([`${config.basepath.src}/assets/_project/images/**/*`], ['other-assets']);
  gulp.watch([`${config.basepath.src}/template-pages/**/*`], ['template-pages', 'template-pages-to-docs']);
  gulp.watch([`${config.basepath.src}/_other-files/**/*`], ['build-other-files']);
});

gulp.task('watch:docs', function () {
  gulp.watch([config.basepath.src + '/docs/**/*.html'], ['template-pages-docs', 'assets-includes-docs', 'template-pages-to-docs']);
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
gulp.task('replace-links', require('./gulp/release-tasks/replace-links')(gulp, plugins, es, config));
gulp.task('release-files', require('./gulp/release-tasks/files')(gulp, plugins, config, es, webpack, path, banner));

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

/* LOCAL SERVER */
let randomPort = Math.floor(1000 + Math.random() * 9000);
gulp.task('serve', require('./gulp/build-tasks/serve')(gulp, plugins, connect, connectssi, argv, path, randomPort));

/* TEST TASKS */
gulp.task('test:eslint', require('./gulp/test-tasks/lint')(gulp, plugins, config, fsPath, eslintReporter));
gulp.task('e2e', function () {
  gulp.src(['tests/e2e/spec/*.spec.js'])
    .pipe(protractor({
      configFile: './tests/e2e/conf.js',
      args: [
        '--baseUrl', `http://localhost:${argv.port || 8086}`,
      ],
    }))
    .on('error', function (e) { throw e; })
    .on('end', function () {
      process.exit();
    });
});
gulp.task('test:e2e', ['serve', 'e2e']);

/* PUBLISH TASKS */

// web template release
gulp.task('wt-clean', require('./gulp/publish-tasks/git').clean(config.webTemplateRepo.folder));
gulp.task('wt-clone', require('./gulp/publish-tasks/git').clone(config.webTemplateRepo.url, config.webTemplateRepo.folder));
gulp.task('wt-sync', require('./gulp/publish-tasks/git').sync(config.basepath.release, config.webTemplateRepo.folder, ['package.json']));
gulp.task('wt-updateVersion', require('./gulp/publish-tasks/git').updateVersion(config.webTemplateRepo.folder, pjson['wt-version']));
gulp.task('wt-add', require('./gulp/publish-tasks/git').add(config.webTemplateRepo.folder));
gulp.task('wt-commit', require('./gulp/publish-tasks/git').commit(config.webTemplateRepo.folder, pjson['wt-version']));
gulp.task('wt-tag', require('./gulp/publish-tasks/git').tag(config.webTemplateRepo.folder, pjson['wt-version']));
gulp.task('wt-push', require('./gulp/publish-tasks/git').push(config.webTemplateRepo.folder));
gulp.task('wt-npm', require('./gulp/publish-tasks/npm'));

// CDN release
gulp.task('cdn-clean', require('./gulp/publish-tasks/git').clean(config.staticCdnRepo.folder));
gulp.task('cdn-clone', require('./gulp/publish-tasks/git').clone(config.staticCdnRepo.url, config.staticCdnRepo.folder));
gulp.task('cdn-transfer', require('./gulp/publish-tasks/git').transfer());
gulp.task('cdn-add', require('./gulp/publish-tasks/git').add(config.staticCdnRepo.folder));
gulp.task('cdn-commit', require('./gulp/publish-tasks/git').commit(config.staticCdnRepo.folder, pjson.version));
gulp.task('cdn-push', require('./gulp/publish-tasks/git').push(config.staticCdnRepo.folder));

// SWE release
gulp.task('swe-add', require('./gulp/publish-tasks/git').add());
gulp.task('swe-commit', require('./gulp/publish-tasks/git').commit('./', pjson['wt-version']));
gulp.task('swe-push', require('./gulp/publish-tasks/git').push('./'));
gulp.task('swe-tag', require('./gulp/publish-tasks/git').tag('./', pjson['wt-version']));

