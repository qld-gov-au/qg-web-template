'use strict';

module.exports = function (gulp, plugins, config) {
  return function () {
    config.projects.map((element) => {
      const target = [
      `${config.basepath.src}/assets/includes/**/*.html`
      ].concat(config.build.excludes);

      return gulp.src(target, { dot: true })
        .pipe(plugins.include({ hardFail: true }))
        .on('error', console.log)
        .pipe(gulp.dest(`${config.basepath.build}/assets/includes/`));
    });
  };
};
