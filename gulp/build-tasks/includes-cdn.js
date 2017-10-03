'use strict';

module.exports = function (gulp, plugins, config) {
  return function (cb) {
    config.projects.map((element) => {
      const target = [
        `${config.basepath.src}/assets/_project/_blocks/layout/**/*.html`,
      ].concat(config.build.excludes);

      let projectAssets = new RegExp('="(/)?assets/_project/', 'g');
      let cdn = {
        regex: new RegExp('="(/)?assets/', 'g'),
        replacement: '="//static.qld.net.au/assets/',
      };
      return gulp.src(target, { dot: true })
        .pipe(plugins.include({ hardFail: true }))
        // Replace /assets/_project/ with /assets/v3/, and convert to CDN
        .pipe(plugins.replace(projectAssets, `="//static.qld.net.au/assets/${config.versionName}/latest/`))
        .pipe(plugins.replace(cdn.regex, `${cdn.replacement}`))
        .on('error', console.log)
        .pipe(gulp.dest(`${config.basepath.build}/assets/includes-cdn/`))
        .on('end', cb);
    });
  };
};
