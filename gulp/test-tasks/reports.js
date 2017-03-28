module.exports = function (gulp, plugins, config) {
  return () => {
    gulp.src(config.test.unitTestReport())
      .pipe(plugins.open());
    gulp.src(config.test.lintReport())
      .pipe(plugins.open());
    gulp.src(config.test.coverageReport())
      .pipe(plugins.open());
  };
};
