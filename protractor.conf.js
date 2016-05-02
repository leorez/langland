// An example configuration file.
exports.config = {
    chromeOnly: true,
    chromeDriver: 'node_modules/protractor/selenium/chromedriver_2.21',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['spec/e2e/**/*.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    baseUrl: 'http://localhost:8080/'
};
