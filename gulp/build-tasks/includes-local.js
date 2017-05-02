'use strict';

module.exports = function (gulp, plugins, config) {
  return function (cb) {
    config.projects.map((element) => {
      const target = [
        `${config.basepath.src}/assets/_project/_blocks/layout/**/*.html`,
      ].concat(config.build.excludes);

      let projectAssets = new RegExp('="(/)?assets/_project/', 'g');
      return gulp.src(target, { dot: true })
        .pipe(plugins.include({ hardFail: true }))
        // Replace /assets/_project/ with /assets/v3/
        .pipe(plugins.replace(projectAssets, `="$1assets/${config.versionName}/`))
        .on('error', console.log)
        .pipe(gulp.dest(`${config.basepath.build}/assets/includes/`))
        .pipe(gulp.dest(`${config.basepath.build}/assets/includes-local/`))
        .on('end', cb);
    });
  };
};
