'use strict';

module.exports = function (gulp, plugins, config) {
  return function () {
    config.projects.map((element) => {
      const target = [
      `${config.basepath.src}/assets/includes/**/*.html`
      ].concat(config.build.excludes);

      let regex = new RegExp('="\/assets\/' + config.version + '\/', 'g');
      return gulp.src(target, { dot: true })
        .pipe(plugins.include({ hardFail: true }))
        .pipe(plugins.replace(regex, `="//static.qld.net.au/assets/${config.version}/`))
        .on('error', console.log)
        .pipe(gulp.dest(`${config.basepath.build}/assets/includes-cdn/`));
    });
  };
};
