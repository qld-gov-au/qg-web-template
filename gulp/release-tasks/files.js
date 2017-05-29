module.exports = function (gulp, plugins, config) {
  return function () {
    const target = [
      `${config.basepath.build}/**/*`,
      `!**/*.htaccess`,
      `!**/${config.versionName}/js/*.js`, // handled by JS task that minifies
      `!**/${config.versionName}/css/*.css`, // handled by SCSS -> CSS task that minifies
    ].concat(config.release.excludes);

    return gulp.src(target, { dot: true })
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.release}`));
  };
};
