module.exports = function (gulp, plugins, config) {
  return function () {
    config.projects.map((element) => {
      const target = config.src.html.concat(config.src.excludes);

      return gulp.src(target, { dot: true })
      .pipe(plugins.include({ hardFail: true }))
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.build}`));
    });
  };
};
