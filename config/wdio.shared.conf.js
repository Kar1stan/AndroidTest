exports.config = {
  // ====================
  // Runner and framework
  // Configuration
  // ====================
  runner: "local",
  framework: "mocha", // https://webdriver.io/docs/frameworks.html#using-mocha
  mochaOpts: {
    ui: "bdd",
    require: ["tsconfig-paths/register"],
    timeout: 200000,
  },
  sync: true,
  logLevel: "warn",
  deprecationWarnings: true,
  bail: 0,
  waitforTimeout: 30000,
  connectionRetryTimeout: 200000,
  connectionRetryCount: 3,
  reporters: [
    "spec", // https://webdriver.io/docs/spec-reporter.html
    [
      "junit",
      {
        outputDir: "./reporters/junit-results", // https://webdriver.io/docs/junit-reporter.html
      },
    ],
    // [
    //   "allure",
    //   {
    //     // https://docs.qameta.io/allure/#_mocha
    //     outputDir: "./reporters/allure-results", // https://webdriver.io/docs/allure-reporter.html
    //   },
    // ],
  ],
  maxInstances: 1,

  specs: [
   "./test/aggregator-app/specs/locations.spec.ts",
 
  ],
};
