module.exports = function (gulp, plugins, config, Server) {
  return (done) => {
    console.log('\x1b[1m', '   \n---unit tests---\n   ');
    new Server({
      configFile: config.test.karmaConfig(),
      singleRun: true,
    }, done).start();
  };
};
