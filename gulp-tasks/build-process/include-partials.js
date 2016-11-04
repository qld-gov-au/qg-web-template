module.exports = function (gulp, plugins, config) {
    return function () {
        config.projects.map( (element) => {
            return gulp.src([
            		`${config.basepath.src}${element}/assets/_components/includes/**/*.html` // TODO: Move this configuration to central config file
            	], { dot: true })
                .pipe(gulp.dest(config.basepath.build + element + '/assets/includes/'));
        });
    };
};
