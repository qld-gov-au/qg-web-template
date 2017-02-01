module.exports = function (gulp, plugins, config) {
    return () => {
        console.log(config.test.unitTestReport());
        gulp.src(config.test.unitTestReport())
            .pipe(plugins.open());
    };
};