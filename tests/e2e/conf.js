const nightwatchConfig = {
    src_folders: [ 'tests/e2e/specs' ],
    selenium: {
        'start_process': false,
        'host': 'hub-cloud.browserstack.com',
        'port': 80
    },
    test_settings: {
        default: {
            screenshots: {
                'enabled': false,
                'path': './tests/e2e/screenshots/',
                'on_failure': true
            },
            desiredCapabilities: {
                'build': 'nightwatch-browserstack',
                'browserstack.user': process.env.BROWSERSTACK_USERNAME,
                'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
                'browserstack.debug': true,
                'browserstack.local': true
            },
            proxy: ((process.env.PROXYHOST).length <= 0) ? false : {
                'host': process.env.PROXYHOST,
                'port': process.env.PROXYPORT,
                'protocol': process.env.PROXYPROTOCOL
            }
        },
        'host': process.env.PROXYHOST,
        chrome: {
            desiredCapabilities: {
                browser: 'chrome',
                os: 'Windows',
                os_version: '7',
                resolution: '1024x768'
            }
        },
        firefox: {
            desiredCapabilities: {
                browser: 'firefox'
            }
        },
        safari: {
            desiredCapabilities: {
                browser: 'safari'
            }
        },
        ie: {
            desiredCapabilities: {
                browser: 'internet explorer'
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
