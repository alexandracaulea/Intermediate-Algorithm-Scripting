const destroyer = require("./index");

test("destroyer function is defined.", () => {
  expect(typeof destroyer).toEqual("function");
});

test("the first argument of destroyer function is an array.", () => {
  expect(destroyer({})).toEqual(undefined);
  expect(destroyer("str")).toEqual(undefined);
  expect(destroyer(111)).toEqual(undefined);
  expect(destroyer([1, 2, 3])).toStrictEqual([1, 2, 3]);
});

test("destroyer([1, 2, 1, 2], 1, 2) returns [].", () => {
  expect(destroyer([1, 2, 1, 2], 1, 2)).toStrictEqual([]);
});

test("destroyer(['flower', 'sun', 10], 'sun', 10) returns ['flower'].", () => {
  expect(destroyer(["flower", "sun", 10], "sun", 10)).toStrictEqual(["flower"]);
});

test("destroyer([35, 12, 2, 7, 15], 12, 2, 15, 7) returns [35].", () => {
  expect(destroyer([35, 12, 2, 7, 15], 12, 2, 15, 7)).toStrictEqual([35]);
});

test("destroyer(['Daffodil', 'Dahlia', 'Jasmine', 'Lily', 'Tulip', 'Lavender', 'Sunflower']) returns ['Daffodil', 'Dahlia', 'Jasmine', 'Lily', 'Tulip', 'Lavender', 'Sunflower'].", () => {
  expect(destroyer(["Daffodil", "Dahlia", "Jasmine", "Lily", "Tulip", "Lavender", "Sunflower"])).toStrictEqual([
    "Daffodil",
    "Dahlia",
    "Jasmine",
    "Lily",
    "Tulip",
    "Lavender",
    "Sunflower",
  ]);
  expect(destroyer(["Daffodil", "Dahlia", "Jasmine", "Lily", "Tulip", "Lavender", "Sunflower"])).toHaveLength(7);
});
