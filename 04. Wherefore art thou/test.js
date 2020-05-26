const whatIsInAName = require("./index");

test("whatIsInAName function is defined.", () => {
  expect(typeof whatIsInAName).toEqual("function");
});

test("the first argument of whatIsInAName function is an array.", () => {
  expect(whatIsInAName([{ a: 1 }], {})).toEqual([{ a: 1 }]);
  expect(whatIsInAName({}, {})).toEqual(undefined);
  expect(whatIsInAName(1, {})).toEqual(undefined);
  expect(whatIsInAName("a", {})).toEqual(undefined);
});

test("the second argument of whatIsInAName function is an object.", () => {
  expect(whatIsInAName([{ a: 1 }], "a")).toEqual(undefined);
  expect(whatIsInAName([], {})).toEqual([]);
  expect(whatIsInAName([{ a: 2 }], null)).toEqual(undefined);
});

test("whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 5, c: 3 }) is equal to [].", () => {
  expect(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 5, c: 3 })).toEqual([]);
});

test("whatIsInAName([{ first: 'Ashlynn', last: 'Little' },{ first: 'Ona', last: null },{ first: 'Noemie', last: 'Rowe' }],{ last: 'Rowe' }) is equal to [{ first: 'Noemie', last: 'Rowe' }].", () => {
  expect(
    whatIsInAName(
      [
        { first: "Ashlynn", last: "Little" },
        { first: "Ona", last: null },
        { first: "Noemie", last: "Rowe" },
      ],
      { last: "Rowe" }
    )
  ).toStrictEqual([{ first: "Noemie", last: "Rowe" }]);
});

test("whatIsInAName([{ 'fries': 1 }, { 'fries': 1, 'soda': 1 }], { 'fries': 1 }) is equal to [{ 'fries': 1 }, { 'fries': 1, 'soda': 1 }].", () => {
  expect(whatIsInAName([{ fries: 1 }, { fries: 1, soda: 1 }], { fries: 1 })).toStrictEqual([
    { fries: 1 },
    { fries: 1, soda: 1 },
  ]);
});

test("whatIsInAName([{ a: 1 }, {a: 1, b: 1}, {a: 1, c: 1}, {a: 1, c: 2}], { a: 1 }) is equal to [{ a: 1 }, {a: 1, b: 1}, {a: 1, c: 1}, {a: 1, c: 2}].", () => {
  expect(whatIsInAName([{ a: 1 }, { a: 1, b: 1 }, { a: 1, c: 1 }, { a: 1, c: 2 }], { a: 1 })).toEqual([
    { a: 1 },
    { a: 1, b: 1 },
    { a: 1, c: 1 },
    { a: 1, c: 2 },
  ]);
});
