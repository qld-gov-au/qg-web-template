module.exports = function (gulp, plugins, config) {
  return function (cb) {
    return gulp.src(`${config.basepath.src}/_other-files/release/**/*`, { dot: true })
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.release}/`), cb);
  };
};
