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
  clone: (url, folder, usessh) => {
    return (cb) => {
      // If reqeusted, publish to SSH URL instead of HTTP(S), so we can push to it gracefully
      if (usessh) {
        url = url.replace(/^https?:/, 'ssh:');
      }
      return git.clone(url, { args: folder }, function (err) {
        if (err) {
          return git.clone(url, { args: folder }, function (err2) {
            if (err2) {
              throw err2;
            }
          });
        }
        cb();
      });
    };
  },
  branch: (folder, argv) => {
    return (cb) => {
      let branchname = `v${pjson.version}-test`;
      branchname += argv.hasOwnProperty('branch') ? `--${argv.branch}` : '';
      if (folder) process.chdir(path.resolve(folder));
      return git.checkout(branchname, { args: '-B' }, function (err) {
        if (err) throw err;
        cb();
      });
    };
  },
  sync: (from, to, ignore) => {
    return (cb) => {
      let ignoreFiles = ['.git', '.gitignore'].concat(ignore);
      return gulp
        .src(`${from}/**/*`)
        .pipe(
          dirSync(path.resolve(from), path.resolve(to), { printSummary: true, ignore: ignoreFiles }),
        );
    };
  },
  transfer: () => {
    return (cb) => {
      return gulp
        .src(`${config.basepath.static}/assets/${config.versionName}/latest/**/*`)
        .pipe(
          gulp.dest(`${config.staticCdnRepo.folder}/assets/${config.versionName}/latest/`, {
            followSymlinks: false,
          }),
        )
        .pipe(
          gulp.dest(
            `${config.staticCdnRepo.folder}/assets/${config.versionName}/${pjson.version}/`,
          ),
        );
    };
  },
  updateVersion: (folder, version) => {
    return (cb) => {
      return gulp
        .src(path.resolve(folder, 'package.json'))
        .pipe(replace(/"version": "\d+.\d+.\d+"/, '"version": "' + version + '"'))
        .pipe(gulp.dest(path.resolve(folder)));
    };
  },
  add: (folder) => {
    return (cb) => {
      if (folder) process.chdir(path.resolve(folder));
      return git.exec({ args: 'add .' }, function (err, stdout) {
        if (err) throw err;
      });
    };
  },
  commit: (folder, version) => {
    return (cb) => {
      process.chdir(path.resolve(folder));
      return gulp.src('./*').pipe(
        git.commit(version, {
          args: '-m  "' + process.env.COMMITMSG + '"',
        }),
      );
    };
  },
  tag: (folder, version) => {
    return (cb) => {
      console.log(folder, version);
      process.chdir(path.resolve(folder));
      git.tag(version, version, function (err) {
        if (err) throw err;
        cb();
      });
    };
  },
  push: (folder, argv) => {
    return (cb) => {
      process.chdir(path.resolve(folder));
      if (process.env.NODE_ENV === 'prod') {
        return git.push('origin', ['master'], { args: ' --tags' }, function (err) {
          if (err) throw err;
          cb();
        });
      } else {
        let branchname = `v${pjson.version}-test`;
        branchname += argv.hasOwnProperty('branch') ? `--${argv.branch}` : '';
        return git.push('origin', [branchname], { args: ' -f' }, function (err) {
          if (err) throw err;
          cb();
        });
      }
    };
  },
};
module.exports = gitFunctions;
