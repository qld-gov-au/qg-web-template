'use strict';

module.exports = function (gulp, plugins, config) {
  return function () {
    return config.outputList.map((element) => {
      let src = [
        `${config.basepath.build}/${config.output[element].src}/**`,
        `!**/*.html`,
      ].concat(config.release.excludes);

      let dest = `${config.basepath.release}/${config.output[element].dest}/`;

      // Test if the element is set to deploy this component
      if (config.output[element].copyElement === true) {
        return gulp.src(src, { dot: true })
          .on('error', console.log)
          .pipe(gulp.dest(dest));
      } else {
        return true;
      }
    });
  };
};
