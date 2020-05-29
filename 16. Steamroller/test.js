const steamrollArray = require("./index");

test("steamrollArray function is defined.", () => {
  expect(steamrollArray).toBeDefined();
});

test("steamrollArray accepts only one argument.", () => {
  expect(steamrollArray("a", { b: 1 })).toBe(undefined);
  expect(steamrollArray("a", [1], {})).toBe(undefined);
});

test("the argument passed to steamrollArray is an array.", () => {
  expect(steamrollArray("b")).toBe(undefined);
  expect(steamrollArray(1)).toBe(undefined);
  expect(steamrollArray({ a: 5 })).toBe(undefined);
  expect(steamrollArray(1, { a: 5 }, [1])).toBe(undefined);
});

test("steamrollArray returns an array.", () => {
  const result = steamrollArray(["a", 2]);
  expect(Array.isArray(result)).toBeTruthy();
  expect(result).toStrictEqual(["a", 2]);
});

test("steamrollArray([[['a']], [['b']], [1]]) returns ['a', 'b', 1].", () => {
  expect(steamrollArray([[["a"]], [["b"]], [1]])).toStrictEqual(["a", "b", 1]);
});

test("steamrollArray([1, [], [2, [[1]]]])  returns [1, 2, 1].", () => {
  expect(steamrollArray([1, [], [2, [[1]]]])).toStrictEqual([1, 2, 1]);
});

test("steamrollArray([1, {}, [2, [[{a: 1}]]]]) returns [1, {}, 2, {a: 1}].", () => {
  expect(steamrollArray([1, {}, [2, [[{ a: 1 }]]]])).toStrictEqual([1, {}, 2, { a: 1 }]);
});
