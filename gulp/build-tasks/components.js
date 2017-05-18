const path = require('path');

module.exports = function (gulp, plugins, config, gulpWebpack, webpack, ExtractTextPlugin) {
  return function () {
    gulp.src('src/')
      .pipe(gulpWebpack({
        entry: {
          autocomplete: path.resolve(__dirname, config.basepath.modules, 'autocomplete'),
          slider: path.resolve(__dirname, config.basepath.modules, 'slider'),
        },
        output: {
          filename: `[name]/[name].js`,
          chunkFilename: '[id].js',
        },
       // devtool: 'source-map',
        module: {
          loaders: [
            {
              test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
            },
            {
              test: /\.scss$/,
              loaders: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
            },
            {
              test: /\.css$/,
              loaders: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
            },

            {
              test: /\.(jpe?g|png|gif|svg)$/i,
              loaders: [
                'file-loader?name=[name].[ext]',
              ],
            },
          ],
        },
        plugins: [
          new ExtractTextPlugin(`[name]/[name].css`),
        ],
      }, webpack))
      .pipe(gulp.dest(`${config.basepath.build}/assets/${config.versionName}/components/`));
  };
};
