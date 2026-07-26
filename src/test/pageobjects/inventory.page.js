import { $ } from "@wdio/globals";
import Page from "./page.js";

// Encapsulates the action previously written directly in the test:
// await $("#add-to-cart-sauce-labs-bike-light").click();

class InventoryPage extends Page {
  get bikeLightButton() {
    return $("#add-to-cart-sauce-labs-bike-light");
  }

  async addBikeLightToCart() {
    await this.bikeLightButton.click();
  }
}
export default new InventoryPage();
