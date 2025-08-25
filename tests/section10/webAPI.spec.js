const { test, expect, request } = require("@playwright/test");
const loginPayload = {
  userEmail: "navindumalith0@gmail.com",
  userPassword: "Mn20010810@#",
};
let token;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const logInResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    { data: loginPayload }
  );
  expect(logInResponse.ok()).toBeTruthy();
  const loginResponseJson = await logInResponse.json();
  token = loginResponseJson.token;
  console.log(token);
});

test.beforeEach(() => {});

test("Assignment 1 Login", async ({ page }) => {
  page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, token);

  await page.goto("https://rahulshettyacademy.com/client");
});
