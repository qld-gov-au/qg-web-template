'use strict';

const config = require('../gulp-config.js');
const gulp = require('gulp');
const git = require('gulp-git');
const del = require('del');
const path = require('path');
const dirSync = require('gulp-directory-sync');
const replace = require('gulp-replace');
const pjson = require('../../package.json');
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
  // this task creates a test branch on 'web-template-release'.
  branch: (folder) => {
    return (cb) => {
      if (folder) process.chdir(path.resolve(folder));
      return git.checkout(`v${pjson.version}-test`, {args: '-B'}, function (err) {
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
  transfer: () => {
    return (cb) => {
      return gulp.src(`${config.basepath.static}/assets/${config.versionName}/latest/**/*`)
        .pipe(gulp.dest(`${config.staticCdnRepo.folder}/assets/${config.versionName}/latest/`, {followSymlinks: false}))
        .pipe(gulp.dest(`${config.staticCdnRepo.folder}/assets/${config.versionName}/${pjson.subVersion}/`));
    };
  },
  updateVersion: (folder, version) => {
    return (cb) => {
      return gulp.src(path.resolve(folder, 'package.json'))
        .pipe(replace(/"version": "\d+.\d+.\d+"/, '"version": "' + version + '"'))
        .pipe(gulp.dest(path.resolve(folder)));
    };
  },
  add: (folder) => {
    return (cb) => {
      if (folder) process.chdir(path.resolve(folder));
      return git.exec({args: 'add .'}, function (err, stdout) {
        if (err) throw err;
      });
    };
  },
  commit: (folder, version) => {
    return (cb) => {
      process.chdir(path.resolve(folder));
      return gulp.src('./*')
        .pipe(git.commit(version, {
          args: '-m  "' + process.env.COMMITMSG + '"',
        }));
    };
  },
  tag: (folder, version) => {
    return (cb) => {
      process.chdir(path.resolve(folder));
      return git.tag(version, version, function (err) {
        if (err) throw err;
      });
    };
  },
  push: (folder) => {
    return (cb) => {
      process.chdir(path.resolve(folder));
      if (process.env.NODE_ENV === 'prod') {
        return git.push('origin', ['master'], {args: ' --tags'}, function (err) {
          if (err) throw err;
        });
      } else {
        return git.push('origin', [`v${pjson.version}-test`], {args: ' -f'}, function (err) {
          if (err) throw err;
        });
      }
    };
  },
};
module.exports = gitFunctions;
