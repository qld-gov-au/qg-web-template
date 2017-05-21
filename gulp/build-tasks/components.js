const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (gulp, plugins, config, gulpWebpack, webpack, path) {
  return function () {
    let components = ['slider', 'autocomplete', 'pagination', 'data', 'misc', 'loader', 'social-feed', 'jquery.status', 'jquery.resize-events', 'jquery.history'];
    let staticAssets = ['images'];

    // building each component
    components.map(function (element) {
      staticAssets.forEach(function (el, index) {
        gulp.src(`${config.basepath.src}/assets/components/${element}/src/${el}/**/**`)
          .pipe(gulp.dest(`${config.basepath.build}/assets/${config.versionName}/components/${element}/${el}`));
      });
      return gulp.src(path.resolve(__dirname, config.basepath.components))
        .pipe(gulpWebpack({
          context: path.resolve(__dirname, config.basepath.components),
          entry: path.resolve(__dirname, config.basepath.components, element, 'src'),
          output: {
            filename: `${element}.js`,
          },
          //devtool: 'source-map',
          module: {
            loaders: [
              {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
              },
              {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /(node_modules|bower_components|\.spec\.js)/,
                use: [
                  {
                    loader: 'webpack-strip-block',
                    options: {
                      start: 'DEV-START',
                      end: 'DEV-END',
                    },
                  },
                ],
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
            new ExtractTextPlugin(`styles/${element}.css`),
            new CopyWebpackPlugin([
              // { from: `${element}/src/examples`, to: `examples ` },
              /*{ from: `${element}/src/images`, to: `images` },*/
            ]),
            new HtmlWebpackPlugin({
              template: `${element}/src/examples/index.html`,
              inject: false,
            }),
          ],
        }, webpack))
        .pipe(gulp.dest(`${config.basepath.build}/assets/${config.versionName}/components/${element}`));
    });
  };
};
