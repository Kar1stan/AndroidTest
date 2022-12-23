const { config } = require("./wdio.shared.browserstack.conf");

const newConf = {
  ...config,
  capabilities: [
    {
      "os_version": "14.0",
      build: "iOS",
      device: "iPhone 11",
      app: "AggregatorIPA",
      autoWebview: false,
      "browserstack.appium_version": "1.20.2",
      "browserstack.debug": true,
      "browserstack.console": "verbose",
      "browserstack.networkLogs": "true",
    },
  ],
};

exports.config = newConf;
