'use strict';

module.exports = function (gulp, plugins, config, dest, local = false, relpath = false) {
  return function (cb) {
    let src = [
      `${config.basepath.src}/assets/_project/_blocks/layout/**/*.html`,
    ].concat(config.build.excludes);

    let relLink = {
      regex: new RegExp('/assets/', 'g'),
      replacement: 'assets/',
    };

    if (!Array.isArray(dest)) {
      dest = [dest];
    }

    const projectAssets = new RegExp('="(/)?assets/_project/', 'g');

    console.log('destination', dest);

    // Test if the element is set to deploy this component
    return gulp.src(src, { dot: true })
      .pipe(plugins.include({ hardFail: true }))
      .on('error', console.log)
      .pipe(plugins.replace(projectAssets, `="$1assets/${config.versionName}/`)) // Replace '_project' with 'v3'
      .pipe(plugins.if(local !== true, plugins.replace(projectAssets, `="//static.qld.net.au/assets/${config.versionName}/`)))
      .pipe(plugins.if(relpath === true, plugins.replace(relLink.regex, relLink.replacement)))
      .pipe(plugins.if(typeof dest[0] !== 'undefined', gulp.dest(`${config.basepath.build}/${dest[0]}/`)))
      .pipe(plugins.if(typeof dest[1] !== 'undefined', gulp.dest(`${config.basepath.build}/${dest[1]}/`)))
      .pipe(plugins.if(typeof dest[2] !== 'undefined', gulp.dest(`${config.basepath.build}/${dest[2]}/`)))
      .pipe(plugins.if(typeof dest[3] !== 'undefined', gulp.dest(`${config.basepath.build}/${dest[3]}/`)))
      .pipe(plugins.if(typeof dest[4] !== 'undefined', gulp.dest(`${config.basepath.build}/${dest[4]}/`)));
  };
};
