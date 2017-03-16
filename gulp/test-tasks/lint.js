module.exports = function (gulp, plugins, config, fsPath, eslintReporter) {
    return () => {
        return gulp.src([
                    'src/**/*.js', 'gulp/**/*.js',
                    '!src/core/assets/lib/**/*.js',
                    '!src/core/assets/_components/forms/forms.js',
                    '!src/core/assets/_components/general/autocomplete.js'
                ])
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