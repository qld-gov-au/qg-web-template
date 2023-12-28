var gulpif = require('gulp-if');
module.exports = function (gulp, plugins, config) {
  return () => {
    return gulp.src(config.test.lint)
      .once('data', function () { console.log('\x1b[1m', '   \n---linting tests---\n   '); })
      .pipe(plugins.eslint({
        configFile: '.eslintrc',
      }))
      .pipe(plugins.eslint.format())
      .pipe(gulpif(process.env.NODE_ENV === 'prod', plugins.eslint.failAfterError()));
  };
};
