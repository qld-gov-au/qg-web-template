module.exports = function (gulp, plugins, config) {
  return function () {
    config.projects.map( (element) => {
      return gulp.src([
        `${config.basepath.src}/core/**/*.html`,
        '!**/_project/**/*',
        '!**/_DELETE.*/**/*',
        ], { dot: true })
      .pipe(plugins.include({ hardFail: true }))
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.build}${element}/`));
    });
  };
};
