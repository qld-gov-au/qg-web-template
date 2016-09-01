module.exports = function (gulp, plugins, config) {
    return function () {
        config.projects.map(function (element, index, array) {
            gulp.src(config.basepath.src+'/assets/sass/*.scss')
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.plumber())
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
        });
    };
};
