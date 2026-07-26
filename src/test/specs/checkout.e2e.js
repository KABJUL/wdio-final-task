import { expect } from "@wdio/globals";
import Page from "../pageobjects/page.js";
import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/inventory.page.js";

const page = new Page();

describe("Checkout Flow", () => {
  it("should complete the checkout successfully", async () => {
    // 1. Open the webpage (https://www.saucedemo.com/)
    await page.open();

    // 2. Login with standard_user (Username) and secret_sauce (Password)
    await LoginPage.login("standard_user", "secret_sauce");

    // 3. Add Sauce Labs Bike Light product to cart
    await InventoryPage.addBikeLightToCart();

    // 4. Navigate to the cart
    await $(".shopping_cart_link").click();

    // 5. Check if the right product is in the cart
    const product = await $(".inventory_item_name");

    await expect(product).toHaveText("Sauce Labs Bike Light");

    // 6. Proceed to checkout
    await $("#checkout").click();

    // 7. Fill in the Information form (First Name, Last Name, Zip/Postal Code)
    await $("#first-name").setValue("John");

    await $("#last-name").setValue("Doe");

    await $("#postal-code").setValue("12345");

    // 8. Continue
    await $("#continue").click();

    // 9. Finish order
    await $("#finish").click();

    // 10. Validate the success message: "Thank you for your order!"
    const successMessage = await $(".complete-header");

    await expect(successMessage).toHaveText("Thank you for your order!");
  });
});
