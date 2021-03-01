/**
 *Click on an element based on the given selector
 @param {String} selector element to click on. 
 * If it matches with more than one DOM-element it automatically clicks on the first element
 */
const checkElement = require("./checkElement");

const clickElement = {
  async click(selector) {
    await checkElement.exists(selector);
    const elem = await $(selector);
    await elem.click();
  },
};

module.exports = clickElement;
