# WebDriverIO Final Task - E2E Automation Tests

This project contains automated end-to-end tests for the SauceDemo application using **WebDriverIO** and the **Page Object Model (POM)** design pattern.

## Project Overview

Task description
"End-to-End" Flow

**Focus:** Happy path execution and checkout logic.

**Launch URL:** <https://www.saucedemo.com/>

### Test Scenarios

#### UC-1 Checkout Flow:

1. Login with standard_user.

2. Add a specific product to the cart (parametrize the product name, e.g., "Sauce Labs Backpack").

3. Navigate to the Cart and validate the item is present.

4. Proceed to Checkout.

5. Fill in the Information form (First Name, Last Name, Zip).

6. Complete the checkout and validate the success message: "Thank you for your order!".

#### UC-2 Data Driven Login:

Use a Data Provider to test login with:

1. standard_user (Should pass).

2. locked_out_user (Should fail with specific error message).

---

## Technical Requirements:

- Tool: WebDriverIO.

- Browsers: Chrome, Edge (Run in Parallel).

- Pattern: Page Object Model (POM).

- Locators: CSS Selectors.

- Reporting: Generate an Allure Report (or similar HTML report) for the test run.

- Documentation: Add a README.md explaining how to run the tests and generate the report.

---

## Supported Browsers

The test suite is configured to run in parallel on:

- Google Chrome
- Microsoft Edge

---

## Project Structure

```
├── src/
│ └── test/
│   ├── specs/
│   ├── pageobjects/
├── allure-results/
├── allure-report/
├── wdio.conf.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone <git@github.com:KABJUL/wdio-final-task.git>
cd <wdio-final-task>
```

Install dependencies:

```bash
npm install
```

---

## Running the Tests

Run all tests:

```bash
npm run wdio
```

---

<!-- WIP START -->

🚧 **Work in Progress**
The following sections are still under development and may change.

## Generating the Allure Report

After the test execution generate the report:

```bash
npx allure ...
```

Open the report:

```bash
npx allure open
```

or generate and open directly:

```bash
npx allure serve allure-results
```

---

## Design Pattern

This project follows the **Page Object Model (POM)** pattern.

Benefits include:

- Better maintainability
- Reusable page components
- Cleaner test code
- Easier scalability

<!-- WIP END -->

🚧

## Test Data

The tests use predefined test data required for the execution.

### Checkout Product

The checkout flow currently validates the following product:

```javascript
const productName = "Sauce Labs Bike Light";
```

### Login Credentials

The Login test uses a data provider containing different user credentials and expected results:

```javascript
[
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
```

## Expected Results

### UC-1 Checkout Flow

The checkout flow is considered successful when:

- The selected product is present in the cart.
- The checkout process can be completed successfully.
- The confirmation message is displayed:

```

Thank you for your order!

```

### UC-2 Login

| User            | Expected Result                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| standard_user   | Login is successful. The inventory page is displayed with the Products title and the hamburger menu button is displayed.  |
| locked_out_user | Login is unsuccessful and the following error message is displayed: `Epic sadface: Sorry, this user has been locked out.` |

---

## Notes

- Uses CSS selectors for locating elements.
- Supports parallel execution.
- Generates Allure HTML reports.
- Compatible with Node.js **v24.15.0**.
