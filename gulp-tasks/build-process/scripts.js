module.exports = function (gulp, plugins, config) {
    return function () {
        gulp.src(config.src.js()+'**/*')
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.plumber())
            .pipe(plugins.debug({
                title: 'js'
            }))
            .pipe(plugins.concat('main.js',{
                newLine: ''
            }))
            .pipe(plugins.sourcemaps.write('.', {
                sourceRoot: config.src.js()
            }))
            .pipe(gulp.dest(config.build.js()))
    };
};
