module.exports = function (gulp, plugins, config) {
    return function () {
        gulp.src(config.src.js()+'/main.js').pipe(plugins.webpack({
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
            .pipe(gulp.dest(config.build.js()));
    };
};
