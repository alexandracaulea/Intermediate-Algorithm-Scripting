const dropElements = require("./index");

test("dropElements function is defined.", () => {
  expect(dropElements).toBeDefined();
});

test("dropElements function accepts only two arguments.", () => {
  expect(
    dropElements(
      [1, 2, 3],
      (n) => {
        n === 2;
      },
      [1]
    )
  ).toBe(undefined);
  expect(dropElements([1, 2, 3, 4], (n) => n >= 3)).toStrictEqual([3, 4]);
  expect(dropElements()).toBe(undefined);
});

describe("the first argument passed to dropElements is an array of numbers and the second argument is a function.", () => {
  test("the first argument passed to dropElements is an array of numbers.", () => {
    expect(dropElements([1, 2, 3, 4, 5], (n) => n > 1)).toStrictEqual([2, 3, 4, 5]);
    expect(dropElements((1, 2), (n) => n > 1)).toBe(undefined);
    expect(dropElements({ a: 2, b: 5 }, (n) => n > 1)).toBe(undefined);
    expect(dropElements(null, (n) => n > 1)).toBe(undefined);
    expect(dropElements("", (n) => n > 1)).toBe(undefined);
    expect(dropElements(["1"], (n) => n === 1)).toBe(undefined);
  });

  test("the second argument passed to dropElements is a function.", () => {
    expect(dropElements([1, 2], (n) => n > 1)).toStrictEqual([2]);
    expect(
      dropElements([1, 2, 3, 4, 5], function (n) {
        return n > 1;
      })
    ).toStrictEqual([2, 3, 4, 5]);

    let mockCallbackFunction = jest.fn((n) => n === 5);
    dropElements([1, 2, 3, 4, 5], mockCallbackFunction);
    expect(mockCallbackFunction.mock.calls.length).toBe(5);

    let notAFunction = [1, 2];
    expect(dropElements([1, 2], notAFunction)).toBe(undefined);
  });
});

test("dropElements([5, 7, 5, 7, 5], (n) => n === 7)) to return [7, 5, 7, 5].", () => {
  expect(dropElements([5, 7, 5, 7, 5], (n) => n === 7)).toStrictEqual([7, 5, 7, 5]);
});

test("dropElements([3, 4, 5], (n) => n > 5) should return [].", () => {
  expect(dropElements([3, 4, 5], (n) => n > 5)).toStrictEqual([]);
});

test("dropElements([3, 9, 7], (n) => n > 3) should return [9, 7].", () => {
  expect(dropElements([3, 9, 7], (n) => n > 3)).toStrictEqual([9, 7]);
});
