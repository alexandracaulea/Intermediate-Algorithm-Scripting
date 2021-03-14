const sumAll = require("./index");

test("sumAll function is defined.", () => {
  expect(sumAll).toBeDefined();
});

test("sumAll function should accept an array as argument.", () => {
  const arr = [1, 2];
  expect(Array.isArray(arr)).toBe(true);
  expect(sumAll(arr)).toEqual(3);
});

test("sumAll function should return a number.", () => {
  expect(sumAll([1, 2])).toEqual(3);
});

test("sumAll([1, 3]) should return 6.", () => {
  expect(sumAll([1, 3])).toEqual(6);
});

test("sumAll[3, 1]) should return 6.", () => {
  expect(sumAll([3, 1])).toEqual(6);
});

test("sumAll([4, 7]) should return 22.", () => {
  expect(sumAll([4, 7])).toEqual(22);
});

test("sumAll([7, 4]) to equal 22.", () => {
  expect(sumAll([7, 4])).toEqual(22);
});
