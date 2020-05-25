const diffArray = require("./index");

test("diffArray function is defined.", () => {
  expect(typeof diffArray).toEqual("function");
});

test("diffArray accepts two arrays as arguments. ", () => {
  expect(diffArray({}, {})).toBe(undefined);
  expect(diffArray("arr", "arr")).toBe(undefined);
  expect(diffArray(1, 2)).toBe(undefined);
  expect(diffArray()).toBe(undefined);
  expect(diffArray([], [])).toStrictEqual([]);
});

test("diffArray function returns an array.", () => {
  expect(Array.isArray(diffArray([1], [2]))).toBe(true);
});

test("diffArray([1], [2]) returns [1, 2].", () => {
  expect(diffArray([1], [2])).toStrictEqual([1, 2]);
});

test("diffArray([1, 2, 3], [1, 2, 3, 4, 5]) returns [4, 5].", () => {
  expect(diffArray([1, 2, 3], [1, 2, 3, 4, 5])).toStrictEqual([4, 5]);
});

test("diffArray(['hello', 'hi'], ['aww', 'bye']) returns ['hello', 'hi', 'aww', 'bye'].", () => {
  expect(diffArray(["hello", "hi"], ["aww", "bye"])).toStrictEqual(["hello", "hi", "aww", "bye"]);
});

test("diffArray(['May', 25], ['Month', 25, 'Monday']) returns ['May', 'Month', 'Monday']", () => {
  expect(diffArray(["May", 25], ["Month", 25, "Monday"])).toStrictEqual(["May", "Month", "Monday"]);
});

test("diffArray([1, 2, 3], [4, 3, 2, 1]) returns an array with one item.", () => {
  expect(diffArray([1, 2, 3], [4, 3, 2, 1])).toHaveLength(1);
  expect(diffArray([1, 2, 3], [4, 3, 2, 1])).toStrictEqual([4]);
});

test("diffArray([], ['the', 'sky', 'is', 'blue']) returns an array with four items.", () => {
  expect(diffArray([], ["the", "sky", "is", "blue"])).toHaveLength(4);
  expect(diffArray([], ["the", "sky", "is", "blue"])).toStrictEqual(["the", "sky", "is", "blue"]);
});
