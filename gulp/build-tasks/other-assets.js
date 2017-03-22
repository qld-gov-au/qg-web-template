module.exports = function (gulp, plugins, config, es) {
    return function () {
        config.projects.map(function (element) {
            return es.merge([
                // Images
                gulp.src(config.basepath.src  + '/core/assets/images/**/*').pipe(
                    gulp.dest(config.basepath.build + element + '/assets/' + config.version + '/images/')
                ),
                // Libraries
                gulp.src(config.basepath.src +'/core/assets/_project/lib/**').pipe(
                    gulp.dest(config.basepath.build + element + '/assets/' + config.version + '/lib/')
                ),
                // Fonts
                gulp.src(config.basepath.node_modules + '/bootstrap-sass/assets/fonts/**').pipe(
                    gulp.dest(config.basepath.build + element + '/assets/v3/fonts')
                ),
                gulp.src(config.basepath.node_modules + '/font-awesome/fonts/**').pipe(
                    gulp.dest(config.basepath.build + element + '/assets/v3/fonts')
                ),
            ]);
        });
    };
};
