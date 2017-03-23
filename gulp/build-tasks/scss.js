module.exports = function (gulp, plugins, config) {
  return function () {
    config.projects.map((element) => {
      const target = config.src.scss.concat(config.src.excludes);

      return gulp.src(target)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.plumber())
        .pipe(plugins.sass({
          includePaths: [config.basepath.src]
        }))
        .on('error', plugins.sass.logError)
        .pipe(plugins.autoprefixer({
          browsers: plugins.supportedBrowser,
          cascade: false
        }))
        .pipe(plugins.sourcemaps.write('.', {
          sourceRoot: config.basepath.src
        }))
        .pipe(gulp.dest(`${config.build.coreAssets}css/`));
          // config.basepath.build + element + '/assets/' + config.version + '/css/')); 
    });
  };
};
