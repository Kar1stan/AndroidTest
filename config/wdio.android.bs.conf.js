const { config } = require("./wdio.shared.browserstack.conf");

const newConf = {
  ...config,
  capabilities: [
    {
      "os_version": "10.0",
      build: "Android",
      device: "Google Pixel 4",
      app: "AggregatorAPK",
      autoWebview: false,
      "browserstack.appium_version": "1.22.3",
      "browserstack.debug": true,
      "browserstack.console": "verbose",
      "browserstack.networkLogs": "true",
    },
  ],
};

exports.config = newConf;
