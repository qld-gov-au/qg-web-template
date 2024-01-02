'use strict';

// Core
import gulp from 'gulp';
import * as path from 'path';
import * as config from './gulp/gulp-config.js';
import * as argv from 'yargs';
import pluginsLoader from 'gulp-load-plugins';
import * as es from 'event-stream';
import * as addSrc from 'gulp-add-src';

// For testing
import connectssi from 'gulp-connect-ssi';
import connect from 'gulp-connect';
// import wait from 'gulp-wait';
import pjson from './package.json';

const plugins = pluginsLoader();
const { rimrafSync } = require('rimraf');

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
  rimrafSync([config.basepath.build]);
  cb();
});
gulp.task('clean-release', (cb) => {
  rimrafSync([config.basepath.release]);
  cb();
});
gulp.task('clean-redundant-build', (cb) => {
  rimrafSync([`${config.basepath.build}/docs/assets/includes-local`]);
  cb();
});
gulp.task('clean-redundant-release', (cb) => {
  rimrafSync([`${config.basepath.release}/template-cdn/assets`, `${config.basepath.release}/template-local/assets/includes-local`]);
  cb();
});
gulp.task('clean-publish', (cb) => {
  rimrafSync([`${config.webTemplateRepo.folder}`, `${config.staticCdnRepo.folder}`]);
  cb();
});

/* BUILD */
import template_tasks from './gulp/build-tasks/template-pages'
gulp.task('template-pages', template_tasks(gulp, plugins, config, 'template-pages', 'template-pages', 'local'));
gulp.task('template-pages-docs', template_tasks(gulp, plugins, config, 'docs', 'docs'));
gulp.task('template-pages-to-docs', template_tasks(gulp, plugins, config, 'template-pages', 'docs/pagemodels'));

const assetDests = ['assets', 'docs/assets'];
import scss_task from './gulp/common-tasks/scss';
import webpack_task from './gulp/common-tasks/js-webpack.js';
import other_asset_task from './gulp/build-tasks/other-assets';
import other_files_task from './gulp/build-tasks/other-files';
import external_lib_task from './gulp/build-tasks/externalLib';
import asset_include_task from './gulp/build-tasks/assets-includes';
import lint_task from './gulp/test-tasks/lint';

gulp.task('scss', scss_task(gulp, plugins, config, assetDests, addSrc));
gulp.task('js', webpack_task(gulp, plugins, config, assetDests, banner));
gulp.task('other-assets-root', other_asset_task(gulp, plugins, config, es, assetDests[0]));
gulp.task('other-assets-docs', other_asset_task(gulp, plugins, config, es, assetDests[1]));
gulp.task('other-assets', gulp.series('other-assets-root', 'other-assets-docs'));

gulp.task('build-other-files', other_files_task(gulp, plugins, config));
gulp.task('external-plugins-bundle', external_lib_task(gulp, plugins, config));

gulp.task('assets-includes-local', asset_include_task(gulp, plugins, config, 'assets/includes-local', true));
gulp.task('assets-includes-docs', asset_include_task(gulp, plugins, config, 'docs/assets/includes-local', true, true));
gulp.task('assets-includes-cdn', asset_include_task(gulp, plugins, config, 'assets/includes-cdn'));

/* TEST TASKS */
gulp.task('test:eslint', lint_task(gulp, plugins, config));

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

import scss_src_task from './gulp/release-tasks/scss-src';
import release_files_task from './gulp/release-tasks/files';
import release_other_files_task from './gulp/release-tasks/other-files';
import replace_links_task from './gulp/release-tasks/replace-links';
import release_storybook_assets_task from './gulp/release-tasks/storybook-assets';

gulp.task('scss-src', scss_src_task(gulp, plugins, config));
gulp.task('release-other-files', release_other_files_task(gulp, plugins, config));
gulp.task('replace-links', replace_links_task(gulp, plugins, es, config));
gulp.task('release-files', release_files_task(gulp, plugins, config, es, path, banner));
gulp.task('release-storybook-assets', release_storybook_assets_task(gulp, plugins, config, 'stories/components', 'stories/components'));

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
const randomPort = Math.floor(1000 + Math.random() * 9000);
import build_tasks from './gulp/build-tasks/serve';
gulp.task('serve', build_tasks(gulp, plugins, connect, connectssi, argv, path, randomPort));

/* PUBLISH TASKS */
// web template release
import * as git_tasks from './gulp/publish-tasks/git';
gulp.task('wt-clean', git_tasks.clean(config.webTemplateRepo.folder));
gulp.task('wt-clone', git_tasks.clone(config.webTemplateRepo.url, config.webTemplateRepo.folder, false));

// wt-branch task creates a test branch on 'web-template-release'.
gulp.task('wt-branch', git_tasks.branch(config.webTemplateRepo.folder, argv));
gulp.task('wt-sync', git_tasks.sync(config.basepath.release, config.webTemplateRepo.folder, ['package.json']));
gulp.task('wt-updateVersion', git_tasks.updateVersion(config.webTemplateRepo.folder, pjson.version));
gulp.task('wt-add', git_tasks.add(config.webTemplateRepo.folder));
gulp.task('wt-commit', git_tasks.commit(config.webTemplateRepo.folder, pjson.version));
gulp.task('wt-tag', git_tasks.tag(config.webTemplateRepo.folder, pjson.version));
gulp.task('wt-push', git_tasks.push(config.webTemplateRepo.folder, argv));

// CDN release
gulp.task('cdn-clean', git_tasks.clean(config.staticCdnRepo.folder));
gulp.task('cdn-clone', git_tasks.clone(config.staticCdnRepo.url, config.staticCdnRepo.folder, true));
gulp.task('cdn-transfer', git_tasks.transfer());
gulp.task('cdn-add', git_tasks.add(config.staticCdnRepo.folder));
gulp.task('cdn-branch', git_tasks.branch(config.staticCdnRepo.folder, argv));
gulp.task('cdn-commit', git_tasks.commit(config.staticCdnRepo.folder, pjson.version));
gulp.task('cdn-push', git_tasks.push(config.staticCdnRepo.folder, argv));

// SWE release
gulp.task('swe-add', git_tasks.add());
gulp.task('swe-commit', git_tasks.commit('./', pjson.version));
gulp.task('swe-push', git_tasks.push('./', argv));
gulp.task('swe-tag', git_tasks.tag('./', pjson.version));

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
