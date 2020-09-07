'use-strict';
const webpack = require('webpack-stream');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = function (gulp, plugins, config, destFolder, banner) {
  return function (cb) {
    const src = [
      `${config.basepath.src}/assets/_project/_blocks/qg-main.js`,
    ];
    const cdnLink = function () {
      if (process.env.NODE_ENV === 'prod') {
        return `https://static.qgov.net.au/assets/${config.versionName}`;
      } else if (process.env.NODE_ENV === 'test') {
        return `https://test-static.qgov.net.au/assets/${config.versionName}`;
      } else {
        return `/assets/${config.versionName}`;
      }
    };
    let dest = {
      base: `${config.basepath.build}`,
      release: `${config.basepath.build}`,
      ext: `${config.versionName}/latest/js`,
    };

    if (!Array.isArray(destFolder)) {
      destFolder = [destFolder];
    }

    const webpackDevSettings = {
      mode: 'development',
      output: {
        filename: 'qg-main.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
          },
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'string-replace-loader',
            options: {
              search: /{{CDN}}/g,
              replace: cdnLink(),
            },
          },
        ],
      },
      devtool: 'source-map',
    };
    const webpackProdSettings = {
      mode: 'production',
      output: {
        filename: 'qg-main.js',
      },
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            sourceMap: true,
          }),
        ],
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
          },
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'string-replace-loader',
            options: {
              search: /{{CDN}}/g,
              replace: cdnLink(),
            },
          },
        ],
      },
    };

    if (process.env.NODE_ENV === 'prod') {
      return gulp.src(src)
        .pipe(webpack(webpackProdSettings))
        .pipe(plugins.insert.prepend(banner))
        .pipe(gulp.dest(`${config.basepath.release}/template-local-ssi/assets/${config.versionName}/latest/js/`))
        .pipe(gulp.dest(`${config.basepath.release}/template-local/assets/${config.versionName}/latest/js/`))
        .pipe(gulp.dest(`${config.basepath.static}/assets/${config.versionName}/latest/js/`));
    } else {
      return gulp.src(src)
        .pipe(webpack(webpackDevSettings))
        .pipe(plugins.if(typeof destFolder[0] !== 'undefined', gulp.dest(`${dest.base}/${destFolder[0]}/${dest.ext}`)));
    }
  };
};
