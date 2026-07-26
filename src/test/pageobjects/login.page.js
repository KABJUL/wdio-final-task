import { $ } from "@wdio/globals";
import Page from "./page.js";

class LoginPage extends Page {
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get loginButton() {
    return $("#login-button");
  }

  // Encapsulates login actions previously written directly in the test:
  // await $("#user-name").setValue(username);
  // await $("#password").setValue(password);
  // await $("#login-button").click();

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.loginButton.click();
  }
}

export default new LoginPage();
