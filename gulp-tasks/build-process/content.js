module.exports = function (gulp, plugins, config) {
    return function () {
        config.projects.map(function (element, index, array) {
            return gulp.src([config.basepath.src+element+'/**/*',
                '!' + config.basepath.src + '{'+element+'/assets,'+element+'/assets/**}'
            ], {dot: true})
                .pipe(gulp.dest(config.basepath.build + '/'+element+'/'));
        });
    };
};