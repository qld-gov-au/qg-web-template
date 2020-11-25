module.exports = function (gulp, plugins, config) {
  return function (done) {
    const extLibJSTarget = config.extLib.js.map(function (s) { return `${config.basepath.build}/assets/${config.versionName}/latest/lib/ext/` + s; });
    return gulp.src(extLibJSTarget)
      .pipe(plugins.concat('all-ext-min.js'))
      .pipe(gulp.dest(`${config.basepath.build}/assets/${config.versionName}/latest/lib/`), done);
  };
};
