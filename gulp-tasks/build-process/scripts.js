module.exports = function (gulp, plugins, config) {
    return function () {
        var tasks = config.projects.map(function (element, index, array) {
            return gulp.src(config.basepath.src+element+'/assets/js/main.js').pipe(plugins.webpack({
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
            }))
                .pipe(gulp.dest(config.basepath.build+element+'/assets/'+config.version+'/js/'));
        });
        return tasks;
    };
};
