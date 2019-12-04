const { join } = require('path');
const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app.*.spec.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,

        // For W3C the appium capabilities need to have an extension prefix
        // This is `appium:` for all Appium Capabilities which can be found here
        // http://appium.io/docs/en/writing-running-appium/caps/        
        //'appium:deviceName': 'MI5',
		//'appium:platformVersion': '8.0.0',        
        'appium:deviceName': 'VirtualBox',	
        'appium:platformVersion': '8.1.0',

        // `automationName` will be mandatory, see
        // https://github.com/appium/appium/releases/tag/v1.13.0
        'appium:automationName': 'UiAutomator2',

        // The path to the app
        'appium:app': join(process.cwd(), './artifacts/android/cq-staging.apk'),
        
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:fullReset': true, // uninstall the app, reset app state (see http://appium.io/docs/en/writing-running-appium/other/reset-strategies/index.html)
        //'appium:noReset': true, // no uninstall the app, no reset app state
        'appium:newCommandTimeout': 240,
        'appWaitForLaunch': "false"
    },
];

exports.config = config;
