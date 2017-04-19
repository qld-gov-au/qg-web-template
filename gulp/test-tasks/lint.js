module.exports = function (gulp, plugins, config, fsPath, eslintReporter) {
  return () => {
    return gulp.src(config.test.lint)
       .once('data', function () { console.log('\x1b[1m', '   \n---linting tests---\n   '); })
       .pipe(plugins.eslint({
         configFile: 'tests/.eslintrc',
       }))
      .pipe(plugins.eslint.format())
      .pipe(plugins.eslint.failAfterError())
      .pipe(plugins.eslint.format(eslintReporter, function (results) {
        fsPath.writeFile('tests/reports/eslint/report.html', results);
      }));
  };
};
