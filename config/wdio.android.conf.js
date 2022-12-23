const { join } = require("path");
const { config } = require("./wdio.shared.appium.conf");

// overwrite because only relevant for android
const newConf = {
  ...config,
  capabilities: [
    {
      // The defaults you need to have in your config
      platformName: "Android",
      // For W3C the appium capabilities need to have an extension prefix
      // http://appium.io/docs/en/writing-running-appium/caps/
      // This is `appium:` for all Appium Capabilities which can be found here
      "appium:deviceName": "Pixel 5 API 30",
      "appium:platformVersion": "11",
      // "appium:orientation": "PORTRAIT",
      // `automationName` will be mandatory, see
      // https://github.com/appium/appium/releases/tag/v1.13.0
      //"appium:automationName": "UiAutomator2",
      // The path to the app
      //"appium:app": "C:/Users/user/Downloads/Template/e2e_tests/apps/android/2_5400256153005329857.apk"
      "appium:app": "C:/Users/user/Downloads/Template/e2e_tests/apps/android/app-staging-debug.apk"
      //join(process.cwd(), "./apps/android/app-spiderdoor-debug.apk"),
      // Read the reset strategies very well, they differ per platform, see
      // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
      //"appium:noReset": true,
      // "appium:newCommandTimeout": 60,
    },
  ],
};

exports.config = newConf;
