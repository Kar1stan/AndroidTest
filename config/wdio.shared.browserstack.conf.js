const { config } = require("./wdio.shared.conf");

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
const newConf = {
  ...config,
  protocol: "https",
  hostname: "hub.browserstack.com",
  // port: 443,
  // path: "/wd/hub",
  maxInstances: 1,
  user: "xxx",
  key: "xxxx",
};

exports.config = newConf;
