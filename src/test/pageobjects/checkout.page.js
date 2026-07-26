import { $ } from "@wdio/globals";
import Page from "./page.js";

// Encapsulates the action previously written directly in the test:
// await $("#checkout").click();
// await $("#first-name").setValue("John");
// await $("#last-name").setValue("Doe");
// await $("#postal-code").setValue("12345");
// await $("#continue").click();
// await $("#finish").click();
// const successMessage = await $(".complete-header");
// await expect(successMessage)
//  .toHaveText("Thank you for your order!");

class CheckoutPage extends Page {
  get checkoutButton() {
    return $("#checkout");
  }

  get firstNameInput() {
    return $("#first-name");
  }

  get lastNameInput() {
    return $("#last-name");
  }

  get postalCodeInput() {
    return $("#postal-code");
  }

  get continueButton() {
    return $("#continue");
  }

  get finishButton() {
    return $("#finish");
  }

  get successMessage() {
    return $(".complete-header");
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }

  async fillIn(firstName, lastName, postalCode) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.postalCodeInput.setValue(postalCode);
  }

  async finishOrder() {
    await this.continueButton.click();
    await this.finishButton.click();
  }
}

export default new CheckoutPage();
