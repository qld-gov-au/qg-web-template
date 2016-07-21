// module.exports = function (gulp, plugins, config) {
//     return function () {
//         gulp.src(config.src.images()+'*').pipe(gulp.dest(config.build.images()));
//         gulp.src(config.src.lib()+'*'+'*').pipe(gulp.dest(config.build.lib()));
//         gulp.src(config.src.includes()+'*'+'*').pipe(gulp.dest(config.build.includes()));
//     };
// };

module.exports = function (gulp, plugins, config) {
    // var steps = function (element, index, array) {
    //     gulp.src(config.src.images()+'*').pipe(gulp.dest(config.build.images()));
    //     gulp.src(config.src.lib()+'*'+'*').pipe(gulp.dest(config.build.lib()));
    //     gulp.src(config.src.includes()+'*'+'*').pipe(gulp.dest(config.build.includes()));
    // };
    return function () {
        var tasks = config.projects.map(function (element, index, array) {
            gulp.src(config.src.images()+config.projects[index]+'/assets/images/*').pipe(gulp.dest(config.build.images()+config.projects[index]+'/assets/'+config.version+'/images/'));
            gulp.src(config.src.lib()+config.projects[index]+'/assets/lib/**').pipe(gulp.dest(config.build.lib()+config.projects[index]+'/assets/'+config.version+'/lib/'));
            gulp.src(config.src.includes()+config.projects[index]+'/assets/includes/**').pipe(gulp.dest(config.build.includes()+config.projects[index]+'/assets/includes/'));
        });
        return tasks;
    };
};