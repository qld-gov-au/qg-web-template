const cssnano = require('cssnano');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = function (gulp, plugins, config, es, webpack, path, banner) {
  let src = [
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
  return function () {
    const target = [
      `${config.basepath.build}/**/*`,
      `!${config.basepath.build}/assets/**/*`,
      `!${config.basepath.build}/template-pages/**/*`,
      `!${config.basepath.build}/*`,
      `!**/${config.versionName}/*.js`, // handled by JS task that minifies
      `!**/${config.versionName}/*.css`, // handled by SCSS -> CSS task that minifies
    ].concat(config.release.excludes);
    const versionAssetsTarget = [
      `${config.basepath.build}/assets/${config.versionName}/**/*`,
      `!**/${config.versionName}/**/*.js`, // handled by JS task that minifies
      `!**/${config.versionName}/**/*.css`, // handled by SCSS -> CSS task that minifies
    ].concat(config.release.excludes);
    let includesLink = {
      cdnRegex: new RegExp('="(/)?assets/includes-cdn/', 'g'),
      localRegex: new RegExp('="(/)?assets/includes-local/', 'g'),
      cdnReplacement: '="$1assets/includes-cdn/',
      localReplacement: '="$1assets/includes-local/',
    };

    return es.merge([
      gulp.src(target, { dot: true })
        .on('error', console.log)
        .pipe(gulp.dest(`${config.basepath.release}`)),

      //template with include-cdn links
      gulp.src(`${config.basepath.build}/template-pages/**/*`, { dot: true })
        .on('error', console.log)
        .pipe(plugins.replace(includesLink.localRegex, includesLink.cdnReplacement)) //checks for local includes and replaces with cdn includes
        .pipe(gulp.dest(`${config.basepath.release}/template-cdn-ssi`))
        .pipe(gulp.dest(`${config.basepath.release}/template-cdn`)),
      //template with include-local links
      gulp.src(`${config.basepath.build}/template-pages/**/*`, { dot: true })
        .on('error', console.log)
        .pipe(plugins.replace(includesLink.cdnRegex, includesLink.localReplacement)) //checks for cdn includes and replaces with local includes
        .pipe(gulp.dest(`${config.basepath.release}/template-local-ssi`))
        .pipe(gulp.dest(`${config.basepath.release}/template-local`)),

      //assets with cdn assets links
      gulp.src(`${config.basepath.build}/assets/includes-cdn/**/*`, { dot: true })
        .pipe(gulp.dest(`${config.basepath.release}/template-cdn-ssi/assets/includes-cdn/`)),
      //assets with local assets links
      gulp.src(`${config.basepath.build}/assets/includes-local/**/*`, { dot: true })
        .pipe(gulp.dest(`${config.basepath.release}/template-local-ssi/assets/includes-local/`)),

      //JS task
      gulp.src(src, { dot: true })
        .pipe(plugins.foreach(function (stream, file) {
          let filename = path.basename(file.path);
          let destPath = file.path.split(file.base)[1].split(filename)[0];
          return stream
            .pipe(plugins.webpack({
              output: {
                filename: filename,
              },
              module: {
                loaders: [{
                  test: /\.js$/,
                  exclude: /(node_modules)/,
                  loader: 'babel-loader',
                  query: {
                    presets: ['es2015'],
                  },
                },
                {
                  test: /\.js$/,
                  exclude: /(node_modules)/,
                  loader: 'webpack-replace',
                  query: {
                    search: '{{CDN}}',
                    replace: cdnLink(),
                  },
                },
                {
                  test: /\.json$/,
                  loader: 'json-loader',
                },
                ],
              },
              plugins: [
                new UglifyJsPlugin(),
              ],
            }, webpack))
            .pipe(plugins.insert.prepend(banner))
            .pipe(gulp.dest(`${config.basepath.release}/template-local-ssi/assets/${config.versionName}/latest/js/${destPath}`))
            .pipe(gulp.dest(`${config.basepath.release}/template-local/assets/${config.versionName}/latest/js/${destPath}`))
            .pipe(gulp.dest(`${config.basepath.static}/assets/${config.versionName}/latest/js/${destPath}`));
        })),

      gulp.src([`${config.basepath.build}/assets/${config.versionName}/**/lib/**/*`])
        .pipe(plugins.insert.prepend(banner))
        .pipe(gulp.dest(`${config.basepath.release}/template-local-ssi/assets/${config.versionName}/`))
        .pipe(gulp.dest(`${config.basepath.release}/template-local/assets/${config.versionName}/`))
        .pipe(gulp.dest(`${config.basepath.static}/assets/${config.versionName}/`)),

      //CSS task
      gulp.src(`${config.basepath.build}/assets/${config.versionName}/**/*.css`, { dot: true })
        .pipe(plugins.postcss([cssnano({
          discardComments: {removeAll: true},
        })]))
        .on('error', console.log)
        .pipe(plugins.insert.prepend(banner))
        .pipe(gulp.dest(`${config.basepath.release}/template-local-ssi/assets/${config.versionName}/`))
        .pipe(gulp.dest(`${config.basepath.release}/template-local/assets/${config.versionName}/`))
        .pipe(gulp.dest(`${config.basepath.static}/assets/${config.versionName}/`)),

      //other version assets
      gulp.src(versionAssetsTarget, { dot: true })
        .pipe(gulp.dest(`${config.basepath.release}/template-local-ssi/assets/${config.versionName}/`))
        .pipe(gulp.dest(`${config.basepath.release}/template-local/assets/${config.versionName}/`))
        .pipe(gulp.dest(`${config.basepath.static}/assets/${config.versionName}/`)),

      //other version assets
      gulp.src(versionAssetsTarget, { dot: true })
        .pipe(gulp.dest(`${config.basepath.release}/template-local-ssi/assets/${config.versionName}/`))
        .pipe(gulp.dest(`${config.basepath.release}/template-local/assets/${config.versionName}/`))
        .pipe(gulp.dest(`${config.basepath.static}/assets/${config.versionName}/`)),
    ]);
  };
};
