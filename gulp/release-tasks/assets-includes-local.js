'use strict';

module.exports = function (gulp, plugins, config) {
  return function () {
    config.outputList.map(function (element) {
      let src = [
        `${config.basepath.build}/assets/includes-local/**/*`,
      ].concat(config.release.excludes);

      let relLink = {
        regex: new RegExp('/assets/', 'g'),
        replacement: 'assets/',
      };

      // Test if the element is set to deploy this component
      if (config.output[element].assetsIncludes === true) {
        return gulp.src(src, { dot: true })
          .pipe(plugins.if(config.output[element].assetsRel === true, plugins.replace(relLink.regex, relLink.replacement)))
          .pipe(plugins.include({ hardFail: true }))
          .on('error', console.log)
          .pipe(gulp.dest(`${config.basepath.release}/${element}/assets/includes-local/`));
      } else {
        return true;
      }
    });
  };
};
