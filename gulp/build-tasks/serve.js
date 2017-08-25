module.exports = function (gulp, plugins, connect, connectssi, argv, path) {
  'use strict';
  return () => {
    let root = argv.root ? path.resolve(argv.root) : path.resolve('build');
    let port = 7777;
    connect.server({
      root: root,
      port: port,
      livereload: true,
      middleware: function () {
        return [connectssi({
          baseDir: root,
          ext: '.html',
          onlineEncoding: 'utf8',
          localEncoding: 'utf8',
        })];
      },
    });
    gulp.src('').pipe(plugins.open({uri: 'http://localhost:' + port}));
  };
};
