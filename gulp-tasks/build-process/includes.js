var include = require('gulp-include');

module.exports = function (gulp, plugins, config) {
    return function () {
        config.projects.map( (element) => {
             return gulp.src([
                    `${config.basepath.src}${element}/**/*.html`
                ], { dot: true })
                .pipe(include({ hardFail: true }))
                    .on('error', console.log)
                .pipe(gulp.dest(`${config.basepath.build}${element}/`));
        });
    };
};
