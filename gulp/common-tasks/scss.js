module.exports = function (gulp, plugins, config, destFolder = 'assets', type = 'build') {
  return function (cb) {
    config.projects.map((element) => {
      const target = [
        `${config.basepath.src}/assets/_project/_blocks/*.scss`,
        '!** /_*.scss',
      ].concat(config.build.excludes);
      let dest = `${config.basepath.build}/${destFolder}/${config.versionName}/css/`;
      if (type === 'release') {
        dest = `${config.basepath.release}/${destFolder}/${config.versionName}/css/`;
      }

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
        .pipe(gulp.dest(dest))
        .on('end', cb);
    });
  };
};
