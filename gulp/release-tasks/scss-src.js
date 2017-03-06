// TODO: Maybe move this to 'other assets' or something

module.exports = function (gulp, plugins, config) {
  return function () {
    config.projects.map( (element) => {
      return gulp.src([
          `${config.basepath.src}/template/assets/_project/scss/**/*.scss`,
          '!_*.scss',
        ])
      .pipe(plugins.include({ hardFail: true }))
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.release}/core-scss/`));
    });
  };
};
