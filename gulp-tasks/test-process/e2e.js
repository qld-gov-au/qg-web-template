module.exports = function (gulp, plugins, config) {
    return () => {
        gulp.src('*.js', {read: false})
            .pipe(plugins.shell([
                'node tests/e2e/runner.js -c tests/e2e/conf.js'
            ]));
    };
};