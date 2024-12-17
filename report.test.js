const { sortPages } = require("./report");
const { test, expect } = require("@jest/globals");

test("sortPages", () => {
  const input = {
    "https://wegslane.dev": 3,
    "https://wegslane.dev/path": 1,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://wegslane.dev", 3],
    ["https://wegslane.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});
