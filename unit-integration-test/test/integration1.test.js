const factorial = require("../src/factorial");
const  randomInRange  = require('../src/randomInRange'); 
const  isPrime  = require('../src/isPrime'); 

describe('integration test', () => {
  test('should calculate factorial, check if prime, and generate random number in range', () => {
    const num = 5;
    const fact = factorial(num);  // 5! = 120
    const primeCheck = isPrime(num); // 5 is prime
    const random = randomInRange(1, fact); // Random number between 1 and 120

    expect(fact).toBe(120);
    expect(primeCheck).toBe(true);
    expect(random).toBeGreaterThanOrEqual(1);
    expect(random).toBeLessThanOrEqual(fact);
  });
});
