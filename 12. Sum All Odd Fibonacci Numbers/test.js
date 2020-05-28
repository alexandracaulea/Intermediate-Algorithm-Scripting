const sumFibs = require("./index");

test("sumFibs function is defined.", () => {
  expect(sumFibs).toBeDefined();
});

test("sumFibs accepts only one argument.", () => {
  expect(sumFibs(5, 2)).toBe(undefined);
});

test("the argument passed to sumFibs is a positive integer.", () => {
  expect(sumFibs(0)).toBe(0);
  expect(sumFibs(-5)).toBe(0);
});

test("sumFibs(1) returns a number.", () => {
  const res = sumFibs(1);
  expect(typeof res).toBe("number");
  expect(res).toBe(2);
});

test("sumFibs(10) returns 10.", () => {
  expect(sumFibs(10)).toBe(10);
});

test("sumFibs(20) returns 23.", () => {
  expect(sumFibs(20)).toBe(23);
});

test("sumFibs(100) returns 188.", () => {
  expect(sumFibs(100)).toBe(188);
});

test("sumFibs(75024) returns 60696.", () => {
  expect(sumFibs(75024)).toBe(60696);
});

test("sumFibs(4000000) returns 4613732.", () => {
  expect(sumFibs(4000000)).toBe(4613732);
});
