const isPrime = require("../src/isPrime");

describe("isPrime function", () => {
  test("should return true for prime numbers", () => {
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
  });

  test("should return false for non-prime numbers", () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(9)).toBe(false);
  });

  test("should return false for numbers less than or equal to 1", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
  });
});
