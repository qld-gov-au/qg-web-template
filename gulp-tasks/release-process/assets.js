// module.exports = function (gulp, plugins, config){
//     return function () {
//         return gulp.src([config.build.assets()+'**/*',
//             '!'+config.build.assets()+'{includes,includes/**}'
//         ]).pipe(gulp.dest(config.release.static()))
//     };
// };


module.exports = function (gulp, plugins, config) {
    return function () {
        var tasks = config.projects.map(function (element, index, array) {
            return gulp.src([config.build.assets()+config.projects[index]+'/assets/**/*',
                '!'+config.build.assets()+config.projects[index]+'/assets/'+'{includes,includes/**}'
            ]).pipe(gulp.dest(config.release.static()))
        });
        return tasks;
    };
};