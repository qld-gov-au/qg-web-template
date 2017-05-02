// SCSS Source

module.exports = function (gulp, plugins, config) {
  return function () {
    config.outputList.map(function (element) {
      const target = [
        `${config.basepath.src}/assets/_project/scss/**/*.scss`,
      ].concat(config.release.excludes);

      // Test if the element is set to deploy this component
      if (config.output[element].sourceSCSS === true) {
        return gulp.src(target, { dot: true })
          .pipe(plugins.include({ hardFail: true }))
          .on('error', console.log)
          .pipe(gulp.dest(`${config.basepath.release}/${config.output[element].dest}/assets/scss/`));
      } else {
        return true;
      }
    });
  };
};
