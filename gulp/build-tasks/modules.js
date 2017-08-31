const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');

module.exports = function (gulp, plugins, config, gulpWebpack, webpack, path) {
  return function () {
    let staticAssets = ['images', 'examples'];

    fs.readdir(path.resolve(config.basepath.modules), function (err, folders) {
      if (err) console.log(err);
      folders.map(function (element) {
        staticAssets.forEach(function (el, index) {
          if (el === 'examples') {
            gulp.src(`${config.basepath.src}/assets/modules/${element}/src/${el}/**/**`)
              .pipe(gulp.dest(`${config.basepath.build}/assets/${config.versionName}/latest/modules/${element}/`));
          }
          if (el === 'images') {
            gulp.src(`${config.basepath.src}/assets/modules/${element}/src/${el}/**/**`)
              .pipe(gulp.dest(`${config.basepath.build}/assets/${config.versionName}/latest/modules/${element}/${el}`));
          }
        });
        return gulp.src(path.resolve(config.basepath.modules))
          .pipe(gulpWebpack({
            context: path.resolve(config.basepath.modules),
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
            ],
        }, webpack))
        .pipe(gulp.dest(`${config.basepath.build}/assets/${config.versionName}/latest/modules/${element}`))
        .pipe(plugins.replace(new RegExp('\'/assets/', 'g'), '\'assets/'))
        .pipe(gulp.dest(`${config.basepath.build}/docs/assets/${config.versionName}/latest/modules/${element}`));
      });
  };
};
