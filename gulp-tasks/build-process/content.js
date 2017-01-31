// Move all content from element except html and components

module.exports = function (gulp, plugins, config) {
    return function () {
        config.projects.map((element) => {
             return gulp.src([
                    `${config.basepath.src}${element}/**/*`,
                    '!**/_components/',
                    '!**/_components/*',
                    '!**/_components/**/*',
                    '!**/*.html'
                ], { dot: true })
                .pipe(gulp.dest(`${config.basepath.build}${element}`));
        });
    };
};
