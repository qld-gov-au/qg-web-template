/*const CopyWebpackPlugin = require('copy-webpack-plugin');*/
const ExtractTextPlugin = require('extract-text-webpack-plugin');
/*const HtmlWebpackPlugin = require('html-webpack-plugin');*/

module.exports = function (gulp, plugins, config, gulpWebpack, webpack, path) {
  return function () {
    //init is a global component the scripts inside of this are loaded on every page. For example - loader, license
    let modules = ['loader', 'slider', 'autocomplete', 'pagination', 'data', 'misc', 'social-feed', 'jquery.status', 'jquery.history'];
    let staticAssets = ['images', 'examples', 'includes'];

    // building each component
    modules.map(function (element) {
      staticAssets.forEach(function (el, index) {
        /*TODO way to handle examples when dependencies loading via loader.js*/
        /*TODO if examples, then the structure should be consistent across component source, component build source and framework build*/
        if (el === 'examples') {
          gulp.src(`${config.basepath.src}/assets/modules/${element}/src/${el}/**/**`)
            .pipe(gulp.dest(`${config.basepath.build}/assets/${config.versionName}/modules/${element}/`));
        }
        if (el === 'includes') {
          gulp.src(`${config.basepath.src}/assets/modules/${element}/src/${el}/**/**`)
            .pipe(gulp.dest(`${config.basepath.build}/assets/${config.versionName}/modules/${element}/includes`));
        }
        if (el === 'images') {
          gulp.src(`${config.basepath.src}/assets/modules/${element}/src/${el}/**/**`)
            .pipe(gulp.dest(`${config.basepath.build}/assets/${config.versionName}/modules/${element}/${el}`));
        }
      });
      return gulp.src(path.resolve(__dirname, config.basepath.modules))
        .pipe(gulpWebpack({
          context: path.resolve(__dirname, config.basepath.modules),
          entry: path.resolve(__dirname, config.basepath.modules, element, 'src'),
          output: {
            filename: `${element}.bundle.js`,
          },
          devtool: 'source-map',
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
            /*new CopyWebpackPlugin([
              { from: `${element}/src/examples`, to: `examples ` },
              { from: `${element}/src/images`, to: `images` },
            ]),*/
            /*new HtmlWebpackPlugin({
              template: `${element}/src/examples/index.html`,
              inject: false,
            }),*/
          ],
        }, webpack))
        .pipe(gulp.dest(`${config.basepath.build}/assets/${config.versionName}/modules/${element}`));
    });
  };
};
