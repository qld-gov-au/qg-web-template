'use strict';
// Core
import gulp from 'gulp';
import path from 'path';
import * as config from './gulp/gulp-config.js';
import del from 'del';
import yargs from 'yargs';
import loadPlugins from 'gulp-load-plugins';
import { eventStream } from 'event-stream';

const argv = yargs.argv;
const plugins = loadPlugins();
const es = eventStream;

// For testing
import connectssi from 'gulp-connect-ssi';
import connect from 'gulp-connect';
// import wait from 'gulp-wait';
import pjson from './package.json';

//constructs build banner for assets
const buildDate = new Date();
const buildMonth = (buildDate.getMonth() + 1) < 10 ? '0' + (buildDate.getMonth() + 1) : buildDate.getMonth();
const buildDay = buildDate.getDate() < 10 ? '0' + buildDate.getDate() : buildDate.getDay();
const buildHours = (buildDate.getHours() + 1) < 10 ? '0' + (buildDate.getHours() + 1) : buildDate.getHours();
const buildMinutes = buildDate.getMinutes() < 10 ? '0' + buildDate.getMinutes() : buildDate.getMinutes();
const banner = '/*! SWE' +
  ' ' + pjson.version +
  ' ' + buildDate.getFullYear() + buildMonth + buildDay + 'T' + buildHours + buildMinutes + ' */' +
  '\n';

/* CLEAN TASKS */
gulp.task('clean-build', (cb) => {
  return deleteAsync([config.basepath.build], cb);
});
gulp.task('clean-release', (cb) => {
  return deleteAsync([config.basepath.release], cb);
});
gulp.task('clean-redundant-build', (cb) => {
  return deleteAsync([`${config.basepath.build}/docs/assets/includes-local`], cb);
});
gulp.task('clean-redundant-release', (cb) => {
  return deleteAsync([`${config.basepath.release}/template-cdn/assets`, `${config.basepath.release}/template-local/assets/includes-local`], cb);
});
gulp.task('clean-publish', (cb) => {
  return deleteAsync([`${config.webTemplateRepo.folder}`, `${config.staticCdnRepo.folder}`], cb);
});

/* BUILD */
gulp.task('template-pages', require('./gulp/build-tasks/template-pages')(gulp, plugins, config, 'template-pages', 'template-pages', 'local'));
gulp.task('template-pages-docs', require('./gulp/build-tasks/template-pages')(gulp, plugins, config, 'docs', 'docs'));
gulp.task('template-pages-to-docs', require('./gulp/build-tasks/template-pages')(gulp, plugins, config, 'template-pages', 'docs/pagemodels'));

let assetDests = ['assets', 'docs/assets'];
gulp.task('scss', require('./gulp/common-tasks/scss')(gulp, plugins, config, assetDests, addSrc));
gulp.task('js', require('./gulp/common-tasks/js-webpack.js')(gulp, plugins, config, assetDests, banner));
gulp.task('other-assets-root', require('./gulp/build-tasks/other-assets')(gulp, plugins, config, es, assetDests[0]));
gulp.task('other-assets-docs', require('./gulp/build-tasks/other-assets')(gulp, plugins, config, es, assetDests[1]));
gulp.task('other-assets', gulp.series('other-assets-root', 'other-assets-docs'));

gulp.task('build-other-files', require('./gulp/build-tasks/other-files')(gulp, plugins, config));
gulp.task('external-plugins-bundle', require('./gulp/build-tasks/externalLib')(gulp, plugins, config));

gulp.task('assets-includes-local', require('./gulp/build-tasks/assets-includes')(gulp, plugins, config, 'assets/includes-local', true));
gulp.task('assets-includes-docs', require('./gulp/build-tasks/assets-includes')(gulp, plugins, config, 'docs/assets/includes-local', true, true));
gulp.task('assets-includes-cdn', require('./gulp/build-tasks/assets-includes')(gulp, plugins, config, 'assets/includes-cdn'));

/* TEST TASKS */
gulp.task('test:eslint', require('./gulp/test-tasks/lint')(gulp, plugins, config));

/* Build task  */
gulp.task('build', gulp.series(
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
  'external-plugins-bundle',
), function (done) {
  done();
});

// gulp.task('default', gulp.series('build'));

/* RELEASE TASKS */
// Grabs SCSS from SRC and moves to release, does not process
gulp.task('scss-src', require('./gulp/release-tasks/scss-src')(gulp, plugins, config));
gulp.task('release-other-files', require('./gulp/release-tasks/other-files')(gulp, plugins, config));
gulp.task('replace-links', require('./gulp/release-tasks/replace-links')(gulp, plugins, es, config));
gulp.task('release-files', require('./gulp/release-tasks/files')(gulp, plugins, config, es, path, banner));
gulp.task('release-storybook-assets', require('./gulp/release-tasks/storybook-assets')(gulp, plugins, config, 'stories/components', 'stories/components'));

gulp.task('release', gulp.series(
  'js',
  'release-files',
  'scss-src',
  'release-other-files',
  'release-storybook-assets',
), function (done) {
  done();
});

/* LOCAL SERVER */
let randomPort = Math.floor(1000 + Math.random() * 9000);
gulp.task('serve', require('./gulp/build-tasks/serve')(gulp, plugins, connect, connectssi, argv, path, randomPort));

/* PUBLISH TASKS */
// web template release
gulp.task('wt-clean', require('./gulp/publish-tasks/git').clean(config.webTemplateRepo.folder));
gulp.task('wt-clone', require('./gulp/publish-tasks/git').clone(config.webTemplateRepo.url, config.webTemplateRepo.folder, false));

// wt-branch task creates a test branch on 'web-template-release'.
gulp.task('wt-branch', require('./gulp/publish-tasks/git').branch(config.webTemplateRepo.folder, argv));
gulp.task('wt-sync', require('./gulp/publish-tasks/git').sync(config.basepath.release, config.webTemplateRepo.folder, ['package.json']));
gulp.task('wt-updateVersion', require('./gulp/publish-tasks/git').updateVersion(config.webTemplateRepo.folder, pjson['version']));
gulp.task('wt-add', require('./gulp/publish-tasks/git').add(config.webTemplateRepo.folder));
gulp.task('wt-commit', require('./gulp/publish-tasks/git').commit(config.webTemplateRepo.folder, pjson['version']));
gulp.task('wt-tag', require('./gulp/publish-tasks/git').tag(config.webTemplateRepo.folder, pjson['version']));
gulp.task('wt-push', require('./gulp/publish-tasks/git').push(config.webTemplateRepo.folder, argv));

// CDN release
gulp.task('cdn-clean', require('./gulp/publish-tasks/git').clean(config.staticCdnRepo.folder));
gulp.task('cdn-clone', require('./gulp/publish-tasks/git').clone(config.staticCdnRepo.url, config.staticCdnRepo.folder, true));
gulp.task('cdn-transfer', require('./gulp/publish-tasks/git').transfer());
gulp.task('cdn-add', require('./gulp/publish-tasks/git').add(config.staticCdnRepo.folder));
gulp.task('cdn-branch', require('./gulp/publish-tasks/git').branch(config.staticCdnRepo.folder, argv));
gulp.task('cdn-commit', require('./gulp/publish-tasks/git').commit(config.staticCdnRepo.folder, pjson.version));
gulp.task('cdn-push', require('./gulp/publish-tasks/git').push(config.staticCdnRepo.folder, argv));

// SWE release
gulp.task('swe-add', require('./gulp/publish-tasks/git').add());
gulp.task('swe-commit', require('./gulp/publish-tasks/git').commit('./', pjson['version']));
gulp.task('swe-push', require('./gulp/publish-tasks/git').push('./', argv));
gulp.task('swe-tag', require('./gulp/publish-tasks/git').tag('./', pjson['version']));

/* WATCH TASKS */
// Note: External libraries and external modules are not watched
gulp.task('watch:project', function (done) {
  gulp.watch([`${config.basepath.src}/assets/_project/_blocks/layout/**/*.html`], gulp.series('assets-includes-local', 'assets-includes-docs'));
  gulp.watch([`${config.basepath.src}/assets/_project/**/*.scss`], gulp.series('scss'));
  gulp.watch(`${config.basepath.src}/assets/_project/_blocks/**/*.js`, { verbose: true }, gulp.series('js', 'test:eslint'));
  gulp.watch(`${config.basepath.src}/assets/_project/lib/**/*.js`, { verbose: true }, gulp.series('other-assets'));
  gulp.watch([`${config.basepath.src}/assets/_project/images/**/*`], gulp.series('other-assets'));
  gulp.watch([`${config.basepath.src}/template-pages/**/*`], gulp.series('template-pages', 'template-pages-to-docs'));
  gulp.watch([`${config.basepath.src}/_other-files/**/*`], gulp.series('build-other-files'));
  done();
});

gulp.task('watch:docs', function (done) {
  gulp.watch([config.basepath.src + '/docs/**/*.html'], gulp.series('template-pages-docs', 'assets-includes-docs', 'template-pages-to-docs'));
  gulp.on('stop', () => {
    return plugins.shell(['node gulp/build-tasks/node-docs-flatten.js && gulp clean-redundant-build']);
  });
  done();
});

gulp.task('watch', gulp.series('watch:project', 'watch:docs', 'serve'));
gulp.task('watch:serve', gulp.series('watch', 'serve'));
