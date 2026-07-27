import { expect } from "@wdio/globals";
import Page from "../pageobjects/page.js";
import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/inventory.page.js";
import CartPage from "../pageobjects/cart.page.js";
import CheckoutPage from "../pageobjects/checkout.page.js";
import checkoutData from "../data/checkout.data.js";

const page = new Page();

describe("Checkout Flow", () => {
  it("should complete the checkout successfully", async () => {
    // 1. Open the webpage (https://www.saucedemo.com/)
    await page.open();

    // 2. Login with standard_user (Username) and secret_sauce (Password)
    await LoginPage.login("standard_user", "secret_sauce");

    // 3. Add Sauce Labs Bike Light product to cart
    await InventoryPage.addProduct(checkoutData.productName);

    // 4. Navigate to the cart
    await CartPage.openCart();

    // 5. Check if the right product is in the cart
    const product = CartPage.productName;

    await expect(product).toHaveText(checkoutData.productName);

    // 6. Proceed to checkout
    await CheckoutPage.startCheckout();

    // 7. Fill in the Information form (First Name, Last Name, Zip/Postal Code)
    await CheckoutPage.fillIn(
      checkoutData.firstName,
      checkoutData.lastName,
      checkoutData.postalCode,
    );

    // 8. Continue checkout and finish order
    await CheckoutPage.finishOrder();

    // 10. Validate the success message: "Thank you for your order!"
    const successMessage = CheckoutPage.successMessage;

    await expect(successMessage).toHaveText("Thank you for your order!");
  });
});
