module.exports = function (gulp, plugins, config, fsPath, eslintReporter) {
    return () => {
        return gulp.src(['src/**/*.js', '!src/_old/core/assets/lib/**/*.js', '!src/assets/_project/lib/**/*.js', 'gulp/**/*.js', 'tests/**/*.js'])
            .pipe(plugins.eslint({
                configFile: 'tests/.eslintrc'
            }))
            .pipe(plugins.eslint.format())
            .pipe(plugins.eslint.format(eslintReporter, function (results) {
                fsPath.writeFile('tests/reports/eslint/report.html', results);
                })
            );
    };
};