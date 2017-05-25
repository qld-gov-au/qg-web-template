'use strict';

module.exports = function (gulp, plugins, config, folder = 'docs') {
  return function (cb) {
    const target = [
      `${config.basepath.build}/assets/${config.versionName}/**/*.*`,
    ].concat(config.build.excludes);

    return gulp.src(target, { dot: true })
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.build}/${folder}/assets/${config.versionName}/`));
  };
};
