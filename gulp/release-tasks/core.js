// SCSS Source

module.exports = function (gulp, plugins, config, es) {
  return function () {
    return es.merge([
      // Assets
      gulp.src([`${config.basepath.build}/core/assets/**/*`])
        .on('error', console.log)
        .pipe(gulp.dest(`${config.basepath.release}/core/assets/`)),
      // Pattern Library
      gulp.src([`${config.basepath.build}/core/pattern-library/**/*`])
        .on('error', console.log)
        .pipe(gulp.dest(`${config.basepath.release}/core/pattern-library/`)),
    ]);
  };
};
