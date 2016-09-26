module.exports = function (gulp, plugins, config) {
    return function () {
        var tasks = config.franchise.map(function (element, index, array) {
            config.projects.map(function (e, i, a) {
               return gulp.src([config.basepath.build + config.projects[i] + '/**/*',
                   '!' + config.build.assets() + config.projects[i] + '/' + '{' + config.version + ',' + config.version + '/**}'
               ])
                   .pipe(gulp.dest(config.basepath.release + config.franchise[index]));
           });
        });
        return tasks;
    };
};