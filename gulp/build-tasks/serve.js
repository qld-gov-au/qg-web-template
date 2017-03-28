module.exports = function (gulp, plugins, connect, connectssi, argv, path) {
  'use strict';
  return () => {
    /*let browser = os.platform() === 'linux' ? 'google-chrome' : (
      os.platform() === 'darwin' ? 'google chrome' : (
        os.platform() === 'win32' ? 'chrome' : 'firefox'));*/
    if (argv.port === undefined && (argv.type !== 'reports-server')) {
      argv.port = 7779;
    } else if (argv.type === 'reports-server') {
      argv.port = 9999;
    }
    connect.server({
      root: (argv.type === 'reports-server') ? [path.join(__dirname, '..', '..', 'tests', 'reports')] : [path.join(__dirname, '..', '..', 'build')],
      port: argv.port,
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
    gulp.src('').pipe(plugins.open({uri: 'http://localhost:' + argv.port}));
  };
};
