'use strict';

module.exports = function (gulp, plugins, config, local) {
  return function (cb) {
    let includeDir = 'template-cdn'
    if(cdn === true) {
      let includeDir = 'template-local'
    }

    const target = [
      `${config.basepath.src}/template-pages/*.html`,
    ].concat(config.build.excludes);

    let projectAssets = new RegExp('="(/)?assets/_project/', 'g');
    return gulp.src(target, { dot: true })
      .pipe(plugins.include({ hardFail: true }))
      // Replace /assets/_project/ with /assets/v3/
      .pipe(plugins.replace(projectAssets, `="$1assets/${config.versionName}/`))
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.build}${includeDir}/`))
      .on('end', cb);
  };
};
