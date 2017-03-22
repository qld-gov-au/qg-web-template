module.exports = function (gulp, plugins, config) {
  return function () {
    config.projects.map( (element) => {
      return gulp.src([
        `${config.basepath.src}/template/assets/includes/**/*.html`,
        '!**/_DELETE.*/**/*',
        ], { dot: true })
      .pipe(plugins.include({ hardFail: true }))
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.build}${element}/template/assets/includes/`));
    });
  };
};
