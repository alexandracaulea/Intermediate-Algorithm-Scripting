const addTogether = require("./index");

test("addTogether function is defined.", () => {
  expect(addTogether).toBeDefined();
});

test("addTogether(2, 4) returns a number", () => {
  const sum = addTogether(2, 4);
  expect(typeof sum).toStrictEqual("number");
  expect(sum).toBe(6);
});

describe("addTogether function accepts either one or two arguments.", () => {
  test("if no argument is provided addTogether returns undefined.", () => {
    expect(addTogether()).toBe(undefined);
  });

  test("if three or more argument are provided addTogether returns undefined.", () => {
    expect(addTogether(1, 1, 20)).toBe(undefined);
    expect(addTogether(1, 1, 20, 5, 7, 10)).toBe(undefined);
  });

  test("the arguments passed to addTogether are numbers.", () => {
    expect(addTogether("http://www.google.com", "Google")).toBe(undefined);
    expect(addTogether("http://www.google.com")).toBe(undefined);
    expect(addTogether(10, 12)).toStrictEqual(22);
    expect(addTogether(9, "18")).toBe(undefined);
    expect(addTogether("a", { x: 1 })).toBe(undefined);
  });
});

test("addTogether(1, 11) returns 12.", () => {
  expect(addTogether(1, 11)).toBe(12);
});

test("addTogether(5, -7) returns -2.", () => {
  expect(addTogether(5, -7)).toBe(-2);
});

test("addTogether(5, 39) returns 44.", () => {
  expect(addTogether(5, 39)).toBe(44);
});

test("addTogether(3)(4) returns 7.", () => {
  expect(addTogether(3)(4)).toBe(7);
});
