const smallestCommons = require("./index");

test("smallestCommons function is defined.", () => {
  expect(smallestCommons).toBeDefined();
});

test("smallestCommons function accepts only one argument.", () => {
  expect(smallestCommons([], [])).toBe(undefined);
});

test("the argument passed to smallestCommons function is an array.", () => {
  expect(smallestCommons("arr")).toBe(undefined);
  expect(smallestCommons(1)).toBe(undefined);
  expect(smallestCommons({ arr: 1 })).toBe(undefined);
});

test("the array passed to smallestCommons function has two elements and are numbers.", () => {
  expect(smallestCommons([1, 2, "3"])).toBe(undefined);
  expect(smallestCommons([{ a: 1 }, "2", 3])).toBe(undefined);
});

test("smallestCommons([1, 5]) returns a number.", () => {
  const result = smallestCommons([1, 5]);
  expect(typeof result).toBe("number");
});

test("smallestCommons([1, 5]) returns 60.", () => {
  expect(smallestCommons([1, 5])).toBe(60);
});

test("smallestCommons([5, 1]) returns 60.", () => {
  expect(smallestCommons([1, 5])).toBe(60);
});

test("smallestCommons([2, 10]) returns 2520.", () => {
  expect(smallestCommons([2, 10])).toBe(2520);
});

test("smallestCommons([10, 2]) returns 2520.", () => {
  expect(smallestCommons([10, 2])).toBe(2520);
});

test("smallestCommons([1, 13]) returns 360360.", () => {
  expect(smallestCommons([1, 13])).toBe(360360);
});

test("smallestCommons([13, 1]) returns 360360.", () => {
  expect(smallestCommons([13, 1])).toBe(360360);
});
