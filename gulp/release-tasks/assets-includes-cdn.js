'use strict';

module.exports = function (gulp, plugins, config) {
  return function () {
    config.outputList.map(function (element) {
      let src = [
        `${config.basepath.build}/assets/includes-cdn/**/*`
      ].concat(config.release.excludes);

      // Test if the element is set to deploy this component
      if(config.output[element].assetsIncludesCdn === true) {
        return gulp.src(src, { dot: true })
          .pipe(plugins.include({ hardFail: true }))
          .on('error', console.log)
          .pipe(gulp.dest(`${config.basepath.release}/${element}/assets/includes-cdn/`));
      } else {
        return true;
      }
    });
  }
}