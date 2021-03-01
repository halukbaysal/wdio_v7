/** Send a sequence of key strokes to an element (clears value before).  
 @param {String} selector Input element
 @param {String} value  Input value
*/

const checkElement = require("./checkElement");

const set = {
  async inputValue(selector, value) {
    const elem = await $(selector);
    await checkElement.exists(selector);
    await elem.setValue(value);
  },
};

module.exports = set;
