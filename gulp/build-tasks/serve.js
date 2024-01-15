module.exports = function (gulp, plugins, connect, connectssi, argv, path, randomPort) {
  'use strict';
  return (cb) => {
    const root = argv.root ? path.resolve(argv.root) : path.resolve('build');
    const connectServer = (root, subpath, port) => {
      connect.server({
        root: subpath ? `${root}/${subpath}` : `${root}`,
        port: port || argv.port || 8086,
        livereload: true,
        host: 'localhost',
        middleware: function () {
          return [connectssi({
            baseDir: root,
            ext: '.html',
            onlineEncoding: 'utf8',
            localEncoding: 'utf8',
          })];
        },
      });
    };
    if (argv.root === 'release') {
      connectServer(root, 'template-local', argv.port);
      connectServer(root, 'docs', argv.port + 1);
    } else {
      connectServer(root);
    }
    cb();
  };
};
