import { browser } from "@wdio/globals";

// Page class containing functionality shared by all page objects.
// Abstraction of:
// await browser.url("/");
export default class Page {
  async open() {
    await browser.url("/");
  }
}
