module.exports = function (gulp, plugins, config) {
    return function () {
        var filenames = ['main.scss' , 'ie.scss'];
        var steps = function (element, index, array) {
            gulp.src(config.src.sass()+config.projects[index]+'/assets/sass/'+filenames[i])
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.plumber())
                .pipe(plugins.concat(filenames[i]))
                .pipe(plugins.sass({
                    includePaths: [config.src.sass()]
                })).on('error',plugins.sass.logError)
                .pipe(plugins.autoprefixer({
                    browsers: plugins.supportedBrowser,
                    cascade: false
                }))
                .pipe(plugins.sourcemaps.write('.', {
                    sourceRoot: config.src.sass()
                }))
                .pipe(gulp.dest(config.build.css()+config.projects[index]+'/assets/'+config.version+'/css/'));
        };
        var tasks = config.projects.map(function (element, index, array) {
            for(i=0; i<filenames.length; i++){
                steps(element, index, array);
            }
        });
        return tasks;
    };
};

// .pipe(gulp.dest(config.build.js()+config.projects[index]+'/assets/'+config.version+'/js/'));
// module.exports = function (gulp, plugins, config) {
//     return function () {
//         var tasks = config.franchise.map(function (element, index, array) {
//             return gulp.src([config.basepath.build+'swe/**/*' ,
//                 '!'+config.build.assets()+'{'+config.version+','+config.version+'/**}'
//             ])
//                 .pipe(gulp.dest(config.basepath.release+config.franchise[index]));
//         });
//         return tasks;
//     };
// };