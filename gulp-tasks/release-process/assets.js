module.exports = function (gulp, plugins, config){
    return function () {
        return gulp.src([config.build.assets()+'**/*',
            '!'+config.build.assets()+'{includes,includes/**}'
        ]).pipe(gulp.dest(config.release.static()))
    };
};