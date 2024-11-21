const factorial = require("../src/factorial");
const randomInRange = require("../src/randomInRange");
const isPrime = require("../src/isPrime");

describe("complex integration test", () => {
  test("should generate random number, check if prime, and calculate its factorial", () => {
    const randomNum = randomInRange(1, 10); // Random number between 1 and 10
    const primeCheck = isPrime(randomNum);
    const fact = factorial(randomNum);

    console.log(
      `Random number: ${randomNum}, is prime: ${primeCheck}, factorial: ${fact}`
    );

    expect(randomNum).toBeGreaterThanOrEqual(1);
    expect(randomNum).toBeLessThanOrEqual(10);
    expect(fact).toBeGreaterThanOrEqual(1);
    expect(fact).toBeLessThanOrEqual(3628800); // 10! = 3,628,800
  });
});
