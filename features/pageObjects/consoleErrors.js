/* eslint-disable import/no-extraneous-dependencies */
const { assert } = require("chai");
const {
  BROWSERSTACK_HOSTNAME,
  BROWSER_NAME_CHROME,
  LOG_LEVEL_SEVERE,
} = require("../utils/constants");

let browserLogs;

const logs = async () => {
  if (browser.capabilities.browserName === BROWSER_NAME_CHROME) {
    browser.cdp("Network", "enable");
    browserLogs = await browser.getLogs("browser");
    return browserLogs;
  }
  return false;
};

const checkForSevereConsoleErrors = async (errorsMessagesToIgnore) => {
  if (
    browser.options.hostname !== BROWSERSTACK_HOSTNAME &&
    browser.capabilities.browserName === BROWSER_NAME_CHROME
  ) {
    const consoleLogs = await logs();

    consoleLogs.forEach((consoleLog) => {
      if (consoleLog.level === LOG_LEVEL_SEVERE) {
        const consoleMessage = consoleLog.message;
        return assert.fail(consoleMessage);
      }
      return true;
    });
  }
};

module.exports = { logs, checkForSevereConsoleErrors };
