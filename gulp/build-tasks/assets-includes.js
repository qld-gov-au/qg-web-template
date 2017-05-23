'use strict';

module.exports = function (gulp, plugins, config, local) {
  return function () {
    let includeDir = 'includes-cdn'
    if(cdn === true) {
      let includeDir = 'includes-local'
    }

    config.outputList.map(function (element, index, array) {
      let src = [
        `${config.basepath.build}/assets/${includeDir}/**/*`,
      ].concat(config.build.excludes);

      let relLink = {
        regex: new RegExp('/assets/', 'g'),
        replacement: 'assets/',
      };

      // Test if the element is set to deploy this component
      if (config.output[element].assetsIncludes === true) {
        return gulp.src(src, { dot: true })
          .pipe(plugins.include({ hardFail: true }))
          .on('error', console.log)
          .pipe(plugins.if(config.output[element].assetsRel === true, plugins.replace(relLink.regex, relLink.replacement)))
          .pipe(gulp.dest(`${config.basepath.release}/assets/${includeDir}/`));
      } else {
        return true;
      }
    });
  };
};
