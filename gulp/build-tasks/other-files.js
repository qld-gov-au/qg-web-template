module.exports = function (gulp, plugins, config) {
  return function () {
    return gulp.src(`${config.basepath.src}/other-files/build/**/*.*`, { dot: true })
      .pipe(plugins.include({ hardFail: true }))
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.build}/`));
  }
};
