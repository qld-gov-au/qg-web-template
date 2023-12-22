import gulpif from 'gulp-if';
import eslint from 'gulp-eslint';

module.exports = function (gulp, plugins, config) {
  return () => {
    return gulp.src(config.test.lint)
      .once('data', function () { console.log('\x1b[1m', '   \n---linting tests---\n   '); })
      .pipe(eslint({
        configFile: '.eslintrc',
      }))
      .pipe(eslint.format())
      .pipe(gulpif(process.env.NODE_ENV === 'prod', eslint.failAfterError()));
  };
};
