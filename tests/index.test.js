// tests/index.test.js

const { capitalize, camelCase, snakeCase } = require("../src/index");

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("")).toBe("");
  expect(capitalize("world")).toBe("World");
});

test("camelCase", () => {
  expect(camelCase("hello world")).toBe("helloWorld");
  expect(camelCase("Hello World")).toBe("helloWorld");
  expect(camelCase("HELLO_WORLD")).toBe("helloWorld");
});

test("snakeCase", () => {
  expect(snakeCase("hello world")).toBe("hello_world");
  expect(snakeCase("Hello World")).toBe("hello_world");
  expect(snakeCase("helloWorld")).toBe("hello_world");
});
