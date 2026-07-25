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

<!-- WIP START -->

🚧 **Work in Progress**
The following sections are still under development and may change.

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

## Running Tests in Parallel

The WebDriverIO configuration (Instances: 2) is set up to execute tests in parallel on:

- Chrome
- Microsoft Edge

---

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

---

## Test Data

The checkout product is parameterized, allowing different products to be tested without changing the test logic.

Example:

```javascript
const productName = "Sauce Labs Backpack";
```

---

## Expected Results

### Checkout

The checkout is considered successful when the following message is displayed:

```
Thank you for your order!
```

### Login

| User            | Expected Result            |
| --------------- | -------------------------- |
| standard_user   | Successful login           |
| locked_out_user | Error message is displayed |

---

## Notes

- Uses CSS selectors for locating elements.
- Supports parallel execution.
- Generates Allure HTML reports.
- Compatible with Node.js **v24.15.0**.

<!-- WIP END -->
