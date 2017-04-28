'use strict';

module.exports = function (gulp, plugins, config) {
  return function () {
    // console.log('cb', cb);
    config.outputList.map(function (element, index, array) {
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
          .pipe(plugins.include({ hardFail: true }))
          .on('error', console.log)
          .pipe(plugins.if(config.output[element].assetsRel === true, plugins.replace(relLink.regex, relLink.replacement)))
          .pipe(gulp.dest(`${config.basepath.release}/${config.output[element].dest}/assets/includes-local/`));
      } else {
        return true;
      }
    });
  };
};
