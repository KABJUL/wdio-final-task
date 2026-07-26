import { $ } from "@wdio/globals";
import Page from "./page.js";

// Encapsulates the action previously written directly in the test:
// await $(".shopping_cart_link").click();
// await $(".inventory_item_name");

class CartPage extends Page {
  get cartLink() {
    return $(".shopping_cart_link");
  }

  get productName() {
    return $(".inventory_item_name");
  }

  async openCart() {
    await this.cartLink.click();
  }
}

export default new CartPage();
