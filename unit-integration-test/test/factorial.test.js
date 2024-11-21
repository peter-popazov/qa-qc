const  factorial  = require("../src/factorial");

describe("factorial function", () => {
  test("should return 1 for factorial of 0", () => {
    expect(factorial(0)).toBe(1);
  });

  test("should return correct factorial for positive number", () => {
    expect(factorial(5)).toBe(120);
  });

  test("should return 1 for factorial of 1", () => {
    expect(factorial(1)).toBe(1);
  });
});
