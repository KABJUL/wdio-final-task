import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/inventory.page.js";
import loginData from "../data/login.data.js";

describe("Login", () => {
  loginData.forEach((data) => {
    it(`should login with ${data.username}`, async () => {
      // 1. Open the webpage (https://www.saucedemo.com/)
      await LoginPage.open();
      // 2. Log in using one of the loginData entries
      await LoginPage.login(data.username, data.password);

      // 3. Validate the expected Login result:
      // - successful Login displays the Products page and the burger menu
      // - unsuccessful Login displays an error message
      if (data.expected === "success") {
        const menuButton = InventoryPage.menuButton;
        const pageTitle = InventoryPage.pageTitle;

        await expect(menuButton).toBeExisting();
        await expect(pageTitle).toHaveText("Products");
      } else {
        const errorMessage = LoginPage.errorMessage;

        await expect(errorMessage).toHaveText(
          "Epic sadface: Sorry, this user has been locked out.",
        );
      }
    });
  });
});
