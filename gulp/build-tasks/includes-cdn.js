'use strict';

module.exports = function (gulp, plugins, config) {
  return function (cb) {
    config.projects.map((element) => {
      const target = [
      		`${config.basepath.src}/assets/includes/**/*.html`
      	].concat(config.build.excludes);

      let regex = new RegExp('="\/assets\/' + config.versionName + '\/' , 'g');
      return gulp.src(target, { dot: true })
        .pipe(plugins.include({ hardFail: true }))
        .pipe(plugins.replace(regex, `="//static.qld.net.au/assets/${config.versionName}/`))
        .on('error', console.log)
        .pipe(gulp.dest(`${config.basepath.build}/assets/includes-cdn/`))
        .on("end", cb);
    });
  };
};
