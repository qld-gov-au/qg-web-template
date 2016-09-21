module.exports = function (gulp, plugins, config) {
    return function () {
        var task = gulp.src(config.basepath.src + '/assets/js/main.js').pipe(plugins.webpack({
            output: {
                filename: 'main.js'
            },
            devtool: 'source-map',
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules)/,
                        loader: 'babel',
                        query: {
                            presets: ['es2015']
                        }
                    }
                ]
            }
        }));
        config.projects.map(function (element) {
            task.pipe(gulp.dest(config.basepath.build + element + '/assets/' + config.version + '/js/'));
        });
    };
};
