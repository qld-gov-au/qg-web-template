// SCSS Source

module.exports = function (gulp, plugins, config) {
  return function () {
    const target = [
      `${config.basepath.build}/assets/_project/_blocks/**/*.scss`,
    ].concat(config.release.excludes);

    return gulp.src(target, { dot: true })
      // .pipe(plugins.include({ hardFail: true }))
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.release}/scss/`));
  };
};
