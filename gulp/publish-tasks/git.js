'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const git = require('gulp-git');
const path = require('path');
const dirSync = require( 'gulp-directory-sync' );
const config = require('../gulp-config');
const pjson = require('../../package.json');

const gitFunctions = {
  clone: (cb) => {
    return git.clone(config.releaseRepo.url, {args: config.releaseRepo.folder}, function(err) {
      if(err) throw err;
    });
  },
  sync: (cb) => {
    return gulp.src(`${config.basepath.release}/**/*`)
      .pipe(dirSync( config.basepath.release, path.resolve(config.releaseRepo.folder), { printSummary: true, ignore: '.git' } ));
  },
  commit: (cb) => {
    process.chdir('./boiler-plates');
    return gulp.src('./*')
      .pipe(git.add())
      .pipe(git.commit(pjson.version))
  },
  push: (cb) => {
    process.chdir('./boiler-plates');
    git.push('origin', {args: " --tags"},  function (err) {
      if (err) throw err;
    });
  }

};
module.exports = gitFunctions;

//
// const gulp = require('gulp'),
//       plugins = require('gulp-load-plugins')(),
//       path = require('path'),
//       del = require('del'),
//       // sync =
//       config = require('../gulp-config');
//
// const gitClone = () => {
//   // return plugins.git.clone(config.releaseRepo.url, {args: path.resolve(config.releaseRepo.folder)}, (err) => {
//   //   if (err) throw err;
//   // });
//   del(['test'], cb);
// };
// // const git = {
// //   clone: () => {
// //     return plugins.git.clone(config.releaseRepo.url, {args: path.resolve(config.releaseRepo.folder)}, (err) => {
// //       if (err) throw err;
// //     });
// //   },
// //   // sync: () => {
// //   //   return gulp.src([`${config.release}/**/*`, `!${config.release}/web-template-release`, `!${config.basepath}`])
// //   // }
// // } ;
// module.exports = (cb) => {
//   return plugins.git.clone(config.releaseRepo.url, {args: path.resolve(config.releaseRepo.folder)}, (err) => {
//     if (err) throw err;
//   })
// };
