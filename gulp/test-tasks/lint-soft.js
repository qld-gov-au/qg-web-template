module.exports = function (gulp, plugins, config, fsPath, eslintReporter) {
  return () => {
    return gulp.src(config.test.lint)
    .pipe(plugins.eslint({
      configFile: 'tests/.eslintrc',
    }))
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.format(eslintReporter, function (results) {
      fsPath.writeFile('tests/reports/eslint/report.html', results);
    }));
  };
};
