const { isPrime, sumPrimes } = require("./index");

describe("isPrime and sumPrimes functions are defined.", () => {
  test("isPrime is defined.", () => {
    expect(isPrime).toBeDefined();
  });
  test("sumPrimes is defined.", () => {
    expect(sumPrimes).toBeDefined();
  });
});

describe("sumPrimes and isPrime accept only one argument.", () => {
  test("sumPrimes accepts only one argument.", () => {
    expect(sumPrimes(1, 2)).toBe(undefined);
  });

  test("isPrime accepts only one argument.", () => {
    expect(isPrime(1, 2)).toBe(undefined);
  });
});

test("sumPrimes returns a number.", () => {
  expect(sumPrimes(5)).toBe(10);
});

test("sumPrimes(5) returns 10.", () => {
  expect(sumPrimes(5)).toBe(10);
});

test("sumPrimes(10) returns 17.", () => {
  expect(sumPrimes(10)).toBe(17);
});

test("sumPrimes(100) returns 1060.", () => {
  expect(sumPrimes(100)).toBe(1060);
});

test("sumPrimes(977) returns 73156.", () => {
  expect(sumPrimes(977)).toBe(73156);
});

test("sumPrimes(1000) returns 76127.", () => {
  expect(sumPrimes(1000)).toBe(76127);
});
