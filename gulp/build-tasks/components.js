const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (gulp, plugins, config, gulpWebpack, webpack, path) {
  return function () {
    //add any new components here
    let components = ['slider', 'autocomplete'];

    // building each component
    components.map(function (element) {
      return gulp.src(path.resolve(__dirname, config.basepath.components))
        .pipe(gulpWebpack({
          context: path.resolve(__dirname, config.basepath.components),
          entry: path.resolve(__dirname, config.basepath.components, element, 'src'),
          output: {
            filename: `index.js`,
          },
          //devtool: 'source-map',
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

            ],
          },
          plugins: [
            new ExtractTextPlugin(`styles/[name].css`),
            new CopyWebpackPlugin([
              { from: `${element}/src/examples`, to: `examples ` },
              { from: `${element}/src/images`, to: `images` },
            ]),
            new HtmlWebpackPlugin({
              template: `${element}/src/examples/index.html`,
            }),
          ],
        }, webpack))
        .pipe(gulp.dest(`${config.basepath.build}/assets/${config.versionName}/components/${element}`));
    });
  };
};
