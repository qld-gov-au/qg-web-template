module.exports = function (gulp, plugins, config) {
    return function () {
        var filenames = ['main.scss' , 'ie.scss'];
        var steps = function (element, index, array) {
            gulp.src(config.basepath.src+'/assets/sass/'+filenames[i])
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.plumber())
                .pipe(plugins.concat(filenames[i]))
                .pipe(plugins.sass({
                    includePaths: [config.basepath.src]
                })).on('error',plugins.sass.logError)
                .pipe(plugins.autoprefixer({
                    browsers: plugins.supportedBrowser,
                    cascade: false
                }))
                .pipe(plugins.sourcemaps.write('.', {
                    sourceRoot: config.basepath.src
                }))
                .pipe(gulp.dest(config.basepath.build+element+'/assets/'+config.version+'/css/'));
        };
        config.projects.map(function (element, index, array) {
            for(i=0; i<filenames.length; i++){
                steps(element, index, array);
            }
        });
    };
};
