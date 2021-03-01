const { WAIT_TIME } = require("../utils/constants");

/**
 * Wait for an element (selected by css selector) 
 * for the provided amount of milliseconds to be present within the DOM.  
 @param  {String} selector  CSS selector to query
 */
const checkElement = {
  async exists(selector, wait = WAIT_TIME) {
    const elem = await $(selector);
    await elem.waitForExist({ timeout: wait });
  },
  async notExists(selector, wait = WAIT_TIME) {
    const elem = await $(selector);
    await elem.waitForExist({ timeout: wait, reverse: true });
  },
};

module.exports = checkElement;
