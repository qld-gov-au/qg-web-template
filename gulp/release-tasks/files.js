module.exports = function (gulp, plugins, config) {
  return function () {
    const target = [
      `${config.basepath.build}/**/*`,
      `!**/*.htaccess`,
      `!**/*.js`,
      `!**/*.css`,
    ].concat(config.release.excludes);

    return gulp.src(target, { dot: true })
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.release}`));
  };
};
