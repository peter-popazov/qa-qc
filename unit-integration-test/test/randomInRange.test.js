const randomInRange = require("../src/randomInRange");

describe("randomInRange function", () => {
  test("should return a number within the given range", () => {
    const result = randomInRange(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  test("should return a number within the given range (negative numbers)", () => {
    const result = randomInRange(-5, -1);
    expect(result).toBeGreaterThanOrEqual(-5);
    expect(result).toBeLessThanOrEqual(-1);
  });

  test("should return the same result for a range with same min and max", () => {
    const result = randomInRange(5, 5);
    expect(result).toBe(5);
  });
});
