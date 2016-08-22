module.exports = function (gulp, plugins, config) {
    return function () {
        config.projects.map(function (element, index, array) {
            gulp.src(config.basepath.src+'/assets/images/*').pipe(gulp.dest(config.basepath.build+element+'/assets/'+config.version+'/images/'));
            gulp.src(config.basepath.src+'/assets/lib/**').pipe(gulp.dest(config.basepath.build+element+'/assets/'+config.version+'/lib/'));
            gulp.src(config.basepath.src+'/assets/includes/**').pipe(gulp.dest(config.basepath.build+element+'/assets/includes/'));
            gulp.src(config.basepath.node_modules+'/bootstrap-sass/assets/fonts/**').pipe(
              gulp.dest(config.basepath.build+element+'/assets/v3/fonts')
            );
        });
    };
};
