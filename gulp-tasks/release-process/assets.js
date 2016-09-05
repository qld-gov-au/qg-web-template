module.exports = function (gulp, plugins, config) {
    return function () {
        var tasks = config.projects.map(function (element, index) {
            return gulp.src([config.build.assets()+config.projects[index]+'/assets/**/*',
                '!'+config.build.assets()+config.projects[index]+'/assets/'+'{includes,includes/**}'
            ]).pipe(gulp.dest(config.release.static()));
        });
        return tasks;
    };
};