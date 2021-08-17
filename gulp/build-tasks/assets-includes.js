'use strict';
const pjson = require('../../package.json');

module.exports = function (gulp, plugins, config, dest, local = false, relpath = false) {
  return function (cb) {
    let src = [
      `${config.basepath.src}/assets/_project/_blocks/layout/**/*.html`,
    ];
      //.concat(config.build.excludes); //remove concat excludes, remove from gulp-config.json also
    let versionLocked = {
      regex: new RegExp(`/assets/${config.versionName}/{{version}}/`, 'g'),
      replacement: `/assets/${config.versionName}/${pjson.version}/`,
    };
    let cdnLink = {
      regex: new RegExp(`="/assets/${config.versionName}`, 'g'),
      replacement: `="https://static.qgov.net.au/assets/${config.versionName}`,
    };
    let folderNameChange = {
      regex: new RegExp(`="/assets/includes-local`, 'g'),
      replacement: `="/assets/includes-cdn`,
    };

    // Test if the element is set to deploy this component
    return gulp.src(src, { dot: true })
      .pipe(plugins.include({ hardFail: true }))
      .on('error', console.log)
      // To replace local URL (/assets/...) to the static CDN URL (https://static.qgov.net.au/) for release in Prod
      .pipe(plugins.if(local !== true, plugins.replace(cdnLink.regex, cdnLink.replacement)))
      .pipe(plugins.if(local !== true, plugins.replace(folderNameChange.regex, folderNameChange.replacement)))
      .pipe(plugins.replace(versionLocked.regex, versionLocked.replacement))
      .pipe(gulp.dest(`${config.basepath.build}/${dest}/`));
  };
};
