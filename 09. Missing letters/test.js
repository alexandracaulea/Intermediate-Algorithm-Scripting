const fearNotLetter = require("./index");

test("fearNotLetter function is defined.", () => {
  expect(fearNotLetter).toBeDefined();
});

test("fearNotLetter accepts only one argument.", () => {
  expect(fearNotLetter("abc", "nvd")).toBe(undefined);
});

test("the argument passed to fearNotLetter is a string.", () => {
  expect(fearNotLetter(1)).toBe(undefined);
  expect(fearNotLetter({ a: 1 })).toBe(undefined);
});

test("fearNotLetter returns a string.", () => {
  const str = fearNotLetter("abd");
  expect(typeof str).toBe("string");
});

test("fearNotLetter('abce') returns 'd'.", () => {
  expect(fearNotLetter("abce")).toBe("d");
});

test("fearNotLetter('pqrstvw') returns 'u'.", () => {
  expect(fearNotLetter("pqrstvw")).toBe("u");
});

test("fearNotLetter('abcdefghijklmnopqrstuvwxyz') returns undefinded.", () => {
  expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz")).toBe(undefined);
});
