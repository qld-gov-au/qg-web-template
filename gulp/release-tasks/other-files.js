module.exports = function (gulp, plugins, config) {
  return function () {
    return gulp.src(`${config.basepath.src}/_other-files/release/**/*.*`, { dot: true })
      .pipe(plugins.include({ hardFail: true }))
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.release}/`));
  };
};
