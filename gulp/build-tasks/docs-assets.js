'use strict';

module.exports = function (gulp, plugins, config) {
  return function (cb) {
    const target = [
      `${config.basepath.build}/assets/${config.versionName}/**/*.*`,
    ].concat(config.build.excludes);

    return gulp.src(target, { dot: true })
      .pipe(plugins.include({ hardFail: true }))
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.build}/docs/assets/${config.versionName}/`))
  };
};
