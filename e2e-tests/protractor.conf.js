//jshint strict: false
exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        '*.js'
    ],

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            binary: process.env.CHROME_BIN,
            args: ['--no-sandbox']
        }
    },

    baseUrl: 'http://localhost:8000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 30000
    }
};