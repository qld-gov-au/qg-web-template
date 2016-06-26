module.exports = function (gulp, plugins, config) {
    return function () {
        var tasks = config.franchise.map(function (element, index, array) {
            return gulp.src([config.basepath.build+'**/*' ,
                '!'+config.build.assets()+'{'+config.version+','+config.version+'/**}'
            ])
                .pipe(gulp.dest(config.basepath.release+config.franchise[index]));
        });
        return tasks;
    };
};