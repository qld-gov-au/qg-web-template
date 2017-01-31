module.exports = function (gulp, plugins, config) {
    return () => {
        gulp.src(config.testSubDir.coverageReport())
            .pipe(plugins.open());
        gulp.src(config.testSubDir.unitTestReport())
            .pipe(plugins.open());
        gulp.src(config.testSubDir.e2eTestReport())
            .pipe(plugins.open());
        gulp.src(config.testSubDir.lintReport())
            .pipe(plugins.open());
    };
};