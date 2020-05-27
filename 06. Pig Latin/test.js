const translatePigLatin = require("./index");

test("translatePigLatin function is defined.", () => {
  expect(typeof translatePigLatin).toBe("function");
});

test("translatePigLatin('str') returns a string.", () => {
  const result = translatePigLatin("rhythm");
  expect(typeof result).toBe("string");
  expect(translatePigLatin("rhythm")).toBe("rhythmay");
});

test("translatePigLatin function accepts only one argument.", () => {
  expect(translatePigLatin("str1", "str2")).toBe(undefined);
  expect(translatePigLatin("str1", [])).toBe(undefined);
});

test("the argument passed to translatePigLatin function is a string.", () => {
  const result = translatePigLatin("away");
  expect(typeof result).toBe("string");
});

test("translatePigLatin('food') returns 'oodfay'.", () => {
  expect(translatePigLatin("food")).toBe("oodfay");
});

test("translatePigLatin('fun') returns 'unfay'.", () => {
  expect(translatePigLatin("fun")).toBe("unfay");
});

test("translatePigLatin('A') returns 'away'.", () => {
  expect(translatePigLatin("A")).toBe("away");
});

test("translatePigLatin('rhythm') returns 'rhythmay'.", () => {
  expect(translatePigLatin("rhythm")).toBe("rhythmay");
});

test("translatePigLatin('schwartz') returns 'artzschway'.", () => {
  expect(translatePigLatin("schwartz")).toBe("artzschway");
});

test("translatePigLatin('The') returns 'ethay'.", () => {
  expect(translatePigLatin("The")).toBe("ethay");
});
