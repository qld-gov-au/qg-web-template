module.exports = function (gulp, plugins, config) {
    return function () {
        gulp.src([config.basepath.src+'**/*',
            '!'+config.basepath.src+'{assets,assets/**}'
        ], { dot: true })
            .pipe(gulp.dest(config.basepath.build));
    };
};