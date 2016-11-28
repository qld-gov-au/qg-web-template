module.exports = function (gulp, plugins, config) {
    return () => {
        return gulp.src(['src/assets/js/**/*.js', 'gulp-tasks/**/*.js', '!src/assets/js/**/forms.js', '!src/assets/js/**/autocomplete.js'])
            .pipe(plugins.eslint())
            .pipe(plugins.eslint.format())
            .pipe(plugins.eslint.failOnError());
    };
};