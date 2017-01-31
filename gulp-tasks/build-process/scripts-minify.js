module.exports = function (gulp, plugins, config, webpack) {
    return function () {
        config.projects.map(function (element) {

            return gulp.src(config.basepath.src + element + '/assets/_components/main.js').pipe(plugins.webpack({
                output: {
                    filename: 'main.js'
                },
                devtool: 'source-map',
                plugins: [
                    new webpack.optimize.UglifyJsPlugin({
                        minimize: true,
                        sourceMap: false,
                        mangle: false
                    })
                ],
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
                .pipe(gulp.dest(config.basepath.build + element + '/assets/' + config.version + '/js/'));
        });
    };
};