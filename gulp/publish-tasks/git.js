'use strict';

const gulp = require('gulp');
const git = require('gulp-git');
const del = require('del');
const path = require('path');
const dirSync = require('gulp-directory-sync');
const replace = require('gulp-replace');

const gitFunctions = {
  clean: (folder) => {
    return (cb) => {
      return del([folder], cb);
    };
  },
  clone: (url, folder) => {
    return (cb) => {
      return git.clone(url, {args: folder}, function (err) {
        if (err) throw err;
      });
    };
  },
  sync: (from, to, ignore) => {
    return (cb) => {
      let ignoreFiles = ['.git', '.gitignore'].concat(ignore);
      return gulp.src(`${from}/**/*`)
        .pipe(dirSync(path.resolve(from), path.resolve(to), { printSummary: true, ignore: ignoreFiles }));
    };
  },
  updateVersion: (folder, version) => {
    return (cb) => {
      return gulp.src(path.resolve(folder, 'package.json'))
          .pipe(replace(/"version": "\d+.\d+.\d+"/, '"version": "' + version + '"'))
          .pipe(gulp.dest(path.resolve(folder)));
    };
  },
  commit: (folder, version) => {
    return (cb) => {
      process.chdir(path.resolve(folder));
      return gulp.src('./*')
        .pipe(git.add())
        .pipe(git.commit(version));
    };
  },
  push: (folder) => {
    return (cb) => {
      process.chdir(path.resolve(folder));
      git.push('origin', {args: ' --tags'}, function (err) {
        if (err) throw err;
      });
    };
  },

};
module.exports = gitFunctions;
