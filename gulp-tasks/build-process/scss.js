module.exports = function (gulp, plugins, config) {
    return function () {
        gulp.src(config.src.sass()+'ie.scss')
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.plumber())
            .pipe(plugins.concat('ie.css'))
            .pipe(plugins.sass({
                includePaths: [config.src.sass()]
            })).on('error',plugins.sass.logError)
            .pipe(plugins.autoprefixer({
                browsers: plugins.supportedBrowser,
                cascade: false
            }))
            .pipe(plugins.sourcemaps.write('.', {
                sourceRoot: config.src.sass
            }))
            .pipe(gulp.dest(config.build.css));
        
        gulp.src(config.src.sass()+'main.scss')
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.plumber())
            .pipe(plugins.concat('main.css'))
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
            .pipe(gulp.dest(config.build.css()))
    };
};