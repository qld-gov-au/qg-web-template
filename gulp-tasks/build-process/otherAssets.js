module.exports = function (gulp, plugins, config) {
    return function () {
        var tasks = config.projects.map(function (element, index, array) {
            gulp.src(config.basepath.src+element+'/assets/images/*').pipe(gulp.dest(config.basepath.build+element+'/assets/'+config.version+'/images/'));
            gulp.src(config.basepath.src+element+'/assets/lib/**').pipe(gulp.dest(config.basepath.build+element+'/assets/'+config.version+'/lib/'));
            gulp.src(config.basepath.src+element+'/assets/includes/**').pipe(gulp.dest(config.basepath.build+element+'/assets/includes/'));
        });
        return tasks;
    };
};