module.exports = function (gulp, plugins, config) {
  return function (cb) {
    return gulp.src(`${config.basepath.src}/_other-files/build/**/*`, { dot: true })
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.build}`), cb);
  };
};
