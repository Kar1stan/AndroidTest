const { config } = require("./wdio.shared.browserstack.conf");

const newConf = {
  ...config,
  capabilities: [
    {
      // eslint-disable-next-line prettier/prettier
      // "os_version": process.env.OS_VERSION,
      // build: process.env.PLATFORM,
      // device: process.env.DEVICE,
      // app: process.env.BROWSERSTACK_APP_URL,
      autoWebview: true,
      "browserstack.appium_version": "1.18.0",
      "browserstack.debug": true,
      "browserstack.console": "verbose",
      "browserstack.networkLogs": "true",
    },
  ],
};

exports.config = newConf;
