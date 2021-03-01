const { defineStep } = require("@cucumber/cucumber");
const { exists } = require("../pageObjects/checkElement");
const { click } = require("../pageObjects/clickElement");
const { inputValue } = require("../pageObjects/setValue");
const { checkForSevereConsoleErrors } = require("../pageObjects/consoleErrors");

const {
  username,
  password,
  loginButton,
  inventory,
} = require("../selectors/selectors");

defineStep("I navigate to SWAG Labs", async () => {
  await browser.url("https://www.saucedemo.com/");
});

defineStep(
  "I enter username {string} and pasword {string}",
  async (user, pass) => {
    await exists(username);
    await inputValue(username, user);
    await inputValue(password, pass);
  }
);

defineStep("I click login button", async () => {
  await click(loginButton);
});

defineStep("I successfuly login into system", async () => {
  await exists(inventory);
});

defineStep("I take a screenshot", async () => {
  await browser.takeScreenshot();
});

defineStep("I check there is no console errors", async () => {
  await checkForSevereConsoleErrors();
});
