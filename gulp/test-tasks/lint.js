module.exports = function (gulp, plugins, config, fsPath, eslintReporter) {
  return () => {
    return gulp.src([
      'src/**/*.js',
      'gulp/**/*.js',
      'tests/**/*.js',
      '!build/**/*',
      '!release/**/*',
      '!**/_old/**/*',
      '!**/_local*/**/*',
      '!**/_local.*',
      '!**/legacy/**/*',
      '!**/lib/ext/**/*',
    ])
    .pipe(plugins.eslint({
      configFile: 'tests/.eslintrc',
    }))
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.format(eslintReporter, function (results) {
      fsPath.writeFile('tests/reports/eslint/report.html', results);
    }));
  };
};
