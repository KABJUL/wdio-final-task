import { $ } from "@wdio/globals";
import Page from "./page.js";

// Encapsulates the action previously written directly in the test:
// await $("#add-to-cart-sauce-labs-bike-light").click();
// await $("#react-burger-menu-btn");
// await $(".title");

class InventoryPage extends Page {
  get bikeLightButton() {
    return $("#add-to-cart-sauce-labs-bike-light");
  }

  get menuButton() {
    return $("#react-burger-menu-btn");
  }

  get pageTitle() {
    return $(".title");
  }

  async addBikeLightToCart() {
    await this.bikeLightButton.click();
  }
}
export default new InventoryPage();
