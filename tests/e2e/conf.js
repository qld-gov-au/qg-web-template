const nightwatchConfig = {
    src_folders: [ 'tests/e2e/specs' ],
    selenium: {
      'start_process': false,
      'host': 'hub-cloud.browserstack.com',
      'port': 80
    },
    test_settings: {
      default: {
        desiredCapabilities: {
          'build': 'nightwatch-browserstack',
          'browserstack.user': process.env.BROWSERSTACK_USERNAME,
          'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
          'browserstack.debug': true,
          'browserstack.local': true,
          'browser': 'chrome'
        },
        proxy: {
            'host': process.env.PROXYHOST,
            'port': process.env.PROXYPORT,
            'protocol': process.env.PROXYPROTOCOL
        }
      }
  }
};

// Code to copy seleniumhost/port into test settings
for (let i in nightwatchConfig.test_settings) {
    let config = nightwatchConfig.test_settings[i];
    config['selenium_host'] = nightwatchConfig.selenium.host;
    config['selenium_port'] = nightwatchConfig.selenium.port;
}

module.exports = nightwatchConfig;
