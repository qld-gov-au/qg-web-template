module.exports = function (gulp, plugins, connect, connectssi, argv, path) {
  'use strict';
  return () => {
    let root = [path.join(__dirname, '..', '..', 'build')];
    let port = (argv.port === undefined) ? 7777 : argv.port;
    if (argv.type === 'reports') {
      port = 9999;
      root = [path.join(__dirname, '..', '..', 'tests', 'reports')];
    } else if (argv.type === 'release') {
      port = 8888;
      root = [path.join(__dirname, '..', '..', 'release')];
    }
    connect.server({
      root: root,
      port: port,
      livereload: true,
      middleware: function () {
        return [connectssi({
          baseDir: path.join(__dirname, '..', '..', 'build'),
          ext: '.html',
          onlineEncoding: 'utf8',
          localEncoding: 'utf8',
        })];
      },
    });
    gulp.src('').pipe(plugins.open({uri: 'http://localhost:' + port}));
  };
};
