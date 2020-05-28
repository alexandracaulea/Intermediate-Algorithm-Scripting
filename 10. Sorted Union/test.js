const uniteUnique = require("./index");

test("uniteUnique function is defined.", () => {
  expect(uniteUnique).toBeDefined();
});

test("uniteUnique accepts at least two arguments.", () => {
  expect(uniteUnique([1, 2, 3])).toBe(undefined);
  expect(uniteUnique([1])).toBe(undefined);
});

test("the arguments passed to uniteUnique are all arrays.", () => {
  expect(uniteUnique([1, 2, 3], [2], [1])).toStrictEqual([1, 2, 3]);
  expect(uniteUnique("a", 1, { a: 1 })).toBe(undefined);
});

test("uniteUnique([1, 2, 3], [3, 5, 2]) returs [1, 2, 3, 5].", () => {
  expect(uniteUnique([1, 2, 3], [3, 5, 2])).toStrictEqual([1, 2, 3, 5]);
});

test("uniteUnique([1, 5, 7], [3, 2, 4]) returns [1, 5, 7, 3, 2, 4].", () => {
  expect(uniteUnique([1, 5, 7], [3, 2, 4])).toStrictEqual([1, 5, 7, 3, 2, 4]);
});

test("uniteUnique([1, 2, 3], [2, 3, 1], [1, 7], [4, 2, 1]) returns [1, 2, 3, 7, 4].", () => {
  expect(uniteUnique([1, 2, 3], [2, 3, 1], [1, 7], [4, 2, 1])).toStrictEqual([1, 2, 3, 7, 4]);
});
