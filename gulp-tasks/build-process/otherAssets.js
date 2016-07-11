module.exports = function (gulp, plugins, config) {
    return function () {
        gulp.src(config.src.images()+'*').pipe(gulp.dest(config.build.images()));
        gulp.src(config.src.lib()+'*'+'*').pipe(gulp.dest(config.build.lib()));
        gulp.src(config.src.includes()+'*'+'*').pipe(gulp.dest(config.build.includes()));
    };
};