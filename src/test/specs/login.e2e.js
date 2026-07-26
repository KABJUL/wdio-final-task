import { expect } from "@wdio/globals";

// Data Provider: An array containing different Login credentials
const loginData = [
  {
    username: "standard_user",
    password: "secret_sauce",
    expected: "success",
  },
  {
    username: "locked_out_user",
    password: "secret_sauce",
    expected: "error",
  },
];

describe("Login", () => {
  loginData.forEach((data) => {
    it(`should login with ${data.username}`, async () => {
      // 1. Open the webpage (https://www.saucedemo.com/)
      await browser.url("/");
      // 2. Log in using one of the loginData entries
      await $("#user-name").setValue(data.username);

      await $("#password").setValue(data.password);

      await $("#login-button").click();

      // 3. Validate the expected Login result:
      // - successful Login displays the Products page and the burger menu
      // - unsuccessful Login displays an error message
      if (data.expected === "success") {
        const menuButton = await $("#react-burger-menu-btn");
        const pageTitle = await $(".title");

        await expect(menuButton).toBeExisting();
        await expect(pageTitle).toHaveText("Products");
      } else {
        const errorMessage = await $(".error-message-container");

        await expect(errorMessage).toHaveText(
          "Epic sadface: Sorry, this user has been locked out.",
        );
      }
    });
  });
});
