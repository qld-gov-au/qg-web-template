
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (gulp, plugins, config, gulpWebpack, webpack, path) {
  return function () {
    //add any new components here
    let components = ['slider', 'autocomplete'];

    // building each component
    components.map(function (element) {
      return gulp.src(path.resolve(__dirname, config.basepath.modules))
        .pipe(gulpWebpack({
          context: path.resolve(__dirname, config.basepath.modules),
          entry: path.resolve(__dirname, config.basepath.modules, element),
          output: {
            filename: `${element}/index.js`,
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

            ],
          },
          plugins: [
            new ExtractTextPlugin(`${element}/[name].css`),
            new CopyWebpackPlugin([
              { from: `${element}/examples`, to: `${element}/examples ` },
              { from: `${element}/images`, to: `${element}/images` },
            ]),
          ],
        }, webpack))
        .pipe(gulp.dest(`${config.basepath.build}/assets/${config.versionName}/components/`));
    });
  };
};
