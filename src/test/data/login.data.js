// Login data provider (An array containing different Login credentials) extracted from login.e2e.js.

const loginData = [
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

export default loginData;
