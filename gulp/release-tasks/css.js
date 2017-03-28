module.exports = function (gulp, plugins, config) {
  return function () {
    config.outputList.map(function (element) {
      const target = [
        `${config.basepath.build}/assets/${config.versionName}/**/*.css`,
      ].concat(config.release.excludes);

      // Test if the element is set to deploy this component
      if (config.output[element].assetsCore === true) {
        return gulp.src(target, { dot: true })
          .pipe(plugins.cleanCss())
          .on('error', console.log)
          .pipe(gulp.dest(`${config.basepath.release}/${element}/assets/${config.versionName}/`));
      } else {
        return true;
      }
    });
  };
};
