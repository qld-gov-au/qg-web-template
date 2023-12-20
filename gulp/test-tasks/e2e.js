module.exports = function (gulp, plugins, argv) {
  return () => {
    if (!argv.browsers) {
      console.log('\x1b[33m%s\x1b[0m: ', '1.) Browsers list missing. Example gulp test:browserstack --browsers ie,safari\n2.) Also make sure to run gulp serve to start a local server before performing e2e testing');
      return;
    }
    gulp.src('', { read: false })
      .pipe(plugins.shell([
        'node tests/e2e/runner.js -c tests/e2e/conf.js -e ' + argv.browsers,
      ]));
  };
};
