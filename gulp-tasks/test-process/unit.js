module.exports = function (gulp, plugins, config, Server) {
    return (done) => {
        console.log("config karama", config.test.karmaConfig());
        new Server({
        configFile: config.test.karmaConfig(),
        singleRun: true
        }, done).start();
    };
};