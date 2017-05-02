module.exports = function (gulp, plugins, config) {
  return function (cb) {
    config.projects.map((element) => {
      const target = [
        `${config.basepath.src}/assets/_project/scss/*.scss`,
        '!** /_*.scss',
      ].concat(config.build.excludes);

      return gulp.src(target)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.plumber())
        .pipe(plugins.sass({
          includePaths: [config.basepath.src],
        }))
        .on('error', plugins.sass.logError)
        .pipe(plugins.autoprefixer({
          browsers: plugins.supportedBrowser,
          cascade: false,
        }))
        .pipe(plugins.sourcemaps.write('.', {
          sourceRoot: config.basepath.src,
        }))
        .pipe(gulp.dest(`${config.basepath.build}/assets/${config.versionName}/css/`))
        .on('end', cb);
    });
  };
};
