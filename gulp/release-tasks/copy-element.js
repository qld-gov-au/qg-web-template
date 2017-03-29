'use strict';

module.exports = function (gulp, plugins, config) {
  return function () {
    config.outputList.map(function (element) {
      let src = [];
      let dest = `${config.basepath.release}/${element}/`;
      
      if (typeof config.output[element].copyElement === 'string') {
        let elementSrc = config.output[element].copyElement;
        src = [`${config.basepath.build}/${elementSrc}/**/*`];
      } else {
        src = [`${config.basepath.build}/${element}/**/*`];
      }
      src.concat(config.release.excludes);

      // Test if the element is set to deploy this component
      if (typeof config.output[element].copyElement === 'string') {
        if (config.output[element].localToCdn === true) {
          let regex = new RegExp('<!--#include.*virtual="/assets/includes/', 'g');
          return gulp.src(src, { dot: true })
            .pipe(plugins.replace(regex, '<!--#include virtual="/assets/includes-cdn/'))
            .pipe(plugins.include({ hardFail: true }))
            .on('error', console.log)
            .pipe(gulp.dest(dest));
        } else {
          return gulp.src(src, { dot: true })
            .pipe(plugins.include({ hardFail: true }))
            .on('error', console.log)
            .pipe(gulp.dest(dest));
        }
      } else {
        return true;
      }
    });
  };
};
