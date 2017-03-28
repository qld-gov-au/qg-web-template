module.exports = function (gulp, plugins, config) {
  return function (cb) {
    config.projects.map((element) => {
      const target = [
      `${config.basepath.src}/**/*.html`,
      '!**/_project/**/*'
    ].concat(config.build.excludes);

      return gulp.src(target, { dot: true })
        .pipe(plugins.include({ hardFail: true }))
        .on('error', console.log)
        .pipe(gulp.dest(config.basepath.build))
        .on("end", cb);
    });
  };
};
